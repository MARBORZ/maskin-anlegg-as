import { NextResponse } from "next/server";
import { Resend } from "resend";
import { mail, kontakt } from "@/shared/config";
import { renderContactEmail } from "@/shared/lib/contact-email";

export const runtime = "nodejs";

const { fields, limits } = kontakt.form;

type ContactPayload = {
  navn?: string;
  org?: string;
  epost?: string;
  telefon?: string;
  melding?: string;
  nettside?: string; // honeypot — skal alltid være tom
  elapsedMs?: number; // tid brukt på å fylle ut (time-trap)
};

// Enkel in-memory rate limit per IP (gjelder per varm serverless-instans).
// For robust grense på tvers av instanser: bruk Vercel KV / Upstash.
const hits = new Map<string, number[]>();

function isRateLimited(ip: string): boolean {
  const now = Date.now();
  const recent = (hits.get(ip) ?? []).filter(
    (t) => now - t < limits.rateWindowMs,
  );
  recent.push(now);
  hits.set(ip, recent);
  return recent.length > limits.rateMax;
}

const EMAIL_RE = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
// Norsk telefonnummer: 8 sifre (starter 2–9), evt. +47 / 0047 foran.
const NORWAY_PHONE_RE = /^(?:\+47|0047)?[2-9]\d{7}$/;

export async function POST(request: Request) {
  // 1) Grov størrelsesgrense på payload
  const contentLength = Number(request.headers.get("content-length") ?? 0);
  if (contentLength > limits.payloadBytes) {
    return NextResponse.json({ error: "Meldingen er for stor." }, { status: 413 });
  }

  // 2) Rate limit per IP
  const ip =
    (request.headers.get("x-forwarded-for") ?? "").split(",")[0].trim() ||
    "ukjent";
  if (isRateLimited(ip)) {
    return NextResponse.json(
      { error: "For mange forsøk. Prøv igjen om litt." },
      { status: 429 },
    );
  }

  let body: ContactPayload;
  try {
    body = await request.json();
  } catch {
    return NextResponse.json({ error: "Ugyldig forespørsel." }, { status: 400 });
  }

  // 3) Honeypot — hvis skjult felt er fylt ut, later vi som alt gikk bra
  if (body.nettside && body.nettside.trim() !== "") {
    return NextResponse.json({ ok: true });
  }

  // 3b) Time-trap — utfylt for raskt = bot. Later som alt gikk bra.
  if (
    typeof body.elapsedMs === "number" &&
    body.elapsedMs < limits.minFillMs
  ) {
    return NextResponse.json({ ok: true });
  }

  const { navn, org, epost, telefon, melding } = body;

  if (!navn || !epost) {
    return NextResponse.json(
      { error: "Navn og e-post er påkrevd." },
      { status: 400 },
    );
  }

  // 4) Feltgrenser (fra config — samme kilde som skjemaets maxLength)
  for (const field of fields) {
    const value = body[field.name as keyof ContactPayload];
    if (typeof value === "string" && value.length > field.max) {
      return NextResponse.json(
        { error: "Ett av feltene er for langt." },
        { status: 400 },
      );
    }
  }

  if (!EMAIL_RE.test(epost)) {
    return NextResponse.json(
      { error: "Ugyldig e-postadresse." },
      { status: 400 },
    );
  }

  // 5) Telefon: kun norske nummer (8 sifre, evt. +47 / 0047). Valgfritt felt.
  if (telefon && telefon.trim() !== "") {
    const compact = telefon.replace(/\s/g, "");
    if (!NORWAY_PHONE_RE.test(compact)) {
      return NextResponse.json(
        { error: "Oppgi et gyldig norsk telefonnummer." },
        { status: 400 },
      );
    }
  }

  const apiKey = process.env.RESEND_API_KEY;
  if (!apiKey) {
    return NextResponse.json(
      { error: "E-posttjenesten er ikke konfigurert." },
      { status: 500 },
    );
  }

  const resend = new Resend(apiKey);

  const mottatt = new Intl.DateTimeFormat("nb-NO", {
    dateStyle: "long",
    timeStyle: "short",
    timeZone: "Europe/Oslo",
  }).format(new Date());

  const { subject, html, text } = renderContactEmail({
    navn,
    org,
    epost,
    telefon,
    melding,
    mottatt,
  });

  try {
    const { data, error } = await resend.emails.send({
      from: mail.from,
      to: [...mail.to],
      replyTo: epost,
      subject,
      html,
      text,
    });

    if (error) {
      // Synlig i Vercel → Functions logs
      console.error("Resend-feil:", error);
      return NextResponse.json(
        { error: "Kunne ikke sende meldingen." },
        { status: 502 },
      );
    }

    console.log("Resend sendt, id:", data?.id);
    return NextResponse.json({ ok: true, id: data?.id });
  } catch (err) {
    console.error("Uventet feil ved sending:", err);
    return NextResponse.json(
      { error: "Kunne ikke sende meldingen." },
      { status: 502 },
    );
  }
}
