import { contact } from "./contact";

export const kontakt = {
  label: "KONTAKT",
  heading: "Be om et uforpliktende tilbud.",
  lead: "Fortell oss litt om eiendommen, så svarer vi innen én virkedag.",
  details: [
    { label: "TELEFON", value: contact.phone, href: contact.phoneHref },
    { label: "E-POST", value: contact.email, href: `mailto:${contact.email}` },
    { label: "ORG.NR", value: contact.orgNr, href: contact.orgNrUrl },
  ],
  form: {
    fields: [
      {
        name: "navn",
        label: "NAVN",
        placeholder: "Ditt navn",
        required: true,
        max: 120,
      },
      {
        name: "org",
        label: "HVEM REPRESENTERER DU?",
        placeholder: "Velg …",
        max: 160,
        options: ["Borettslag", "Sameie", "Næring / firma", "Privat"],
      },
      {
        name: "epost",
        label: "E-POST",
        placeholder: "Din e-postadresse",
        type: "email",
        required: true,
        half: true,
        max: 160,
      },
      {
        name: "telefon",
        label: "TELEFON",
        placeholder: "Ditt telefonnummer",
        half: true,
        max: 40,
        type: "tel",
        inputMode: "tel",
        // Norsk nummer: 8 sifre (start 2–9), evt. +47/0047
        pattern: "(\\+47|0047)?\\s?[2-9](\\s?\\d){7}",
        title: "Oppgi et norsk telefonnummer – 8 sifre (eventuelt med +47).",
      },
      {
        name: "melding",
        label: "MELDING",
        placeholder: "Hva trenger eiendommen?",
        multiline: true,
        max: 5000,
      },
    ],
    // Serverside-grenser mot spam (brukes i api/contact/route.ts)
    limits: {
      payloadBytes: 20_000,
      rateWindowMs: 10 * 60 * 1000,
      rateMax: 5,
      // Time-trap: skjema utfylt raskere enn dette = bot
      minFillMs: 2500,
    },
    submit: "Send forespørsel",
    sending: "Sender …",
    micro: "Vi svarer normalt innen én virkedag.",
    success: "Takk! Vi tar kontakt innen én virkedag.",
    error: "Noe gikk galt. Prøv igjen, eller send oss en e-post.",
  },
} as const;

export type FormField = (typeof kontakt.form.fields)[number];
