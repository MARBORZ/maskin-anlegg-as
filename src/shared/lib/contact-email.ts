import { brand, site } from "@/shared/config";

export type ContactData = {
  navn: string;
  org?: string;
  epost: string;
  telefon?: string;
  melding?: string;
  mottatt?: string; // formatert dato/tid for når skjemaet ble sendt
};

/** Escape brukerinput før det settes inn i HTML (mot HTML-injeksjon). */
function esc(value: string): string {
  return value
    .replace(/&/g, "&amp;")
    .replace(/</g, "&lt;")
    .replace(/>/g, "&gt;")
    .replace(/"/g, "&quot;");
}

// Mørk palett — matcher nettsiden. E-posten er bevisst mørk (color-scheme:dark)
// så mørk-modus i e-postklienter ikke inverterer den.
const C = {
  bg: "#141210",
  card: "#1b1915",
  inner: "#141210",
  border: "rgba(201,162,75,0.22)",
  hairline: "rgba(201,162,75,0.13)",
  gold: "#c9a24b",
  cream: "#f0e8d8",
  body: "#c8c1b4",
  muted: "#8f887b",
  faint: "#6b665e",
};

const SERIF = "Georgia, 'Times New Roman', serif";
const SANS = "Arial, Helvetica, sans-serif";

function row(label: string, valueHtml: string): string {
  return `
    <tr>
      <td style="padding:12px 0;border-bottom:1px solid ${C.hairline};vertical-align:top;width:150px;color:${C.muted};font-family:${SANS};font-size:11px;letter-spacing:1.5px;text-transform:uppercase;">${label}</td>
      <td style="padding:12px 0;border-bottom:1px solid ${C.hairline};color:${C.cream};font-family:${SANS};font-size:15px;">${valueHtml}</td>
    </tr>`;
}

/** Bygger e-post (subject, html, text) for en kontaktforespørsel. */
export function renderContactEmail(data: ContactData) {
  const { navn, org, epost, telefon, melding, mottatt } = data;

  const subject = `Ny forespørsel fra ${navn}`;
  const link = (href: string, label: string) =>
    `<a href="${href}" style="color:${C.gold};text-decoration:none;">${label}</a>`;

  const rows = [
    row("Navn", esc(navn)),
    org ? row("Borettslag / firma", esc(org)) : "",
    row("E-post", link(`mailto:${esc(epost)}`, esc(epost))),
    telefon
      ? row("Telefon", link(`tel:${esc(telefon.replace(/\s/g, ""))}`, esc(telefon)))
      : "",
    mottatt ? row("Mottatt", esc(mottatt)) : "",
  ].join("");

  const meldingBlock = melding
    ? `<div style="margin-top:22px;">
         <div style="color:${C.muted};font-family:${SANS};font-size:11px;letter-spacing:1.5px;text-transform:uppercase;margin-bottom:10px;">Melding</div>
         <div style="background:${C.inner};border:1px solid ${C.border};border-radius:8px;padding:16px 18px;color:${C.body};font-family:${SANS};font-size:15px;line-height:1.6;white-space:pre-wrap;">${esc(melding)}</div>
       </div>`
    : "";

  const html = `<!doctype html>
<html lang="no"><head>
<meta name="color-scheme" content="dark">
<meta name="supported-color-schemes" content="dark">
</head>
<body style="margin:0;background:${C.bg};padding:24px;font-family:${SANS};">
  <div style="max-width:560px;margin:0 auto;background:${C.card};border:1px solid ${C.border};border-radius:12px;overflow:hidden;">
    <div style="padding:26px 28px 22px;border-bottom:1px solid ${C.hairline};">
      <table role="presentation" style="border-collapse:collapse;">
        <tr>
          <td style="vertical-align:middle;">
            <div style="width:44px;height:44px;border:1px solid ${C.gold};border-radius:9px;text-align:center;line-height:44px;color:${C.gold};font-family:${SERIF};font-size:19px;font-weight:bold;letter-spacing:1px;">${esc(brand.initials)}</div>
          </td>
          <td style="vertical-align:middle;padding-left:14px;">
            <div style="color:${C.gold};font-family:${SANS};font-size:11px;letter-spacing:3px;">NY FORESPØRSEL</div>
            <div style="color:${C.cream};font-family:${SERIF};font-size:18px;font-weight:bold;margin-top:5px;">${esc(brand.fullName)}</div>
          </td>
        </tr>
      </table>
    </div>
    <div style="padding:24px 28px;">
      <table role="presentation" style="width:100%;border-collapse:collapse;">${rows}</table>
      ${meldingBlock}
    </div>
    <div style="padding:16px 28px;background:${C.inner};border-top:1px solid ${C.hairline};color:${C.faint};font-family:${SANS};font-size:12px;">
      Sendt fra kontaktskjemaet på ${site.url.replace("https://", "")}
    </div>
  </div>
</body></html>`;

  const text = [
    `Ny forespørsel fra ${navn}`,
    "",
    `Navn: ${navn}`,
    `Borettslag / firma: ${org ?? "—"}`,
    `E-post: ${epost}`,
    `Telefon: ${telefon ?? "—"}`,
    mottatt ? `Mottatt: ${mottatt}` : "",
    "",
    "Melding:",
    melding ?? "—",
  ].join("\n");

  return { subject, html, text };
}
