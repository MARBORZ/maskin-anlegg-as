import { NextResponse } from "next/server";
import { Resend } from "resend";
import { mail } from "@/shared/config";

type ContactPayload = {
  navn?: string;
  org?: string;
  epost?: string;
  telefon?: string;
  melding?: string;
};

export async function POST(request: Request) {
  let body: ContactPayload;
  try {
    body = await request.json();
  } catch {
    return NextResponse.json({ error: "Ugyldig forespørsel." }, { status: 400 });
  }

  const { navn, org, epost, telefon, melding } = body;

  if (!navn || !epost) {
    return NextResponse.json(
      { error: "Navn og e-post er påkrevd." },
      { status: 400 },
    );
  }

  const apiKey = process.env.RESEND_API_KEY;
  if (!apiKey) {
    return NextResponse.json(
      { error: "E-posttjenesten er ikke konfigurert." },
      { status: 500 },
    );
  }

  const resend = new Resend(apiKey);

  const text = [
    `Navn: ${navn}`,
    `Borettslag / sameie / firma: ${org ?? "—"}`,
    `E-post: ${epost}`,
    `Telefon: ${telefon ?? "—"}`,
    "",
    "Melding:",
    melding ?? "—",
  ].join("\n");

  try {
    const { error } = await resend.emails.send({
      from: mail.from,
      to: mail.to,
      replyTo: epost,
      subject: `Ny forespørsel fra ${navn}`,
      text,
    });

    if (error) {
      return NextResponse.json(
        { error: "Kunne ikke sende meldingen." },
        { status: 502 },
      );
    }

    return NextResponse.json({ ok: true });
  } catch {
    return NextResponse.json(
      { error: "Kunne ikke sende meldingen." },
      { status: 502 },
    );
  }
}
