import { contact } from "./contact";

export const bio = {
  label: "LEDER",
  name: "Ole Martin Karlsen",
  roleLabel: "ROLLE",
  role: "Daglig leder",
  omLabel: "OM",
  om: "Som daglig leder er jeg tett på hvert oppdrag. Jeg er opptatt av forutsigbar drift, ryddig utført arbeid og at styret og beboerne alltid har én fast kontakt å forholde seg til — sommer som vinter.",
  contacts: [
    { label: "E-POST", value: contact.email, href: `mailto:${contact.email}` },
    { label: "TELEFON", value: contact.phone, href: contact.phoneHref },
  ],
} as const;
