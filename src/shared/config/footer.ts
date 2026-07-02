import { brand } from "./brand";
import { contact } from "./contact";

export const footer = {
  navCols: [
    {
      title: "SNARVEIER",
      links: [
        { href: "#tjenester", label: "Tjenester" },
        { href: "#kontakt", label: "Kontakt" },
      ],
    },
    {
      title: "KONTAKT",
      links: [
        { href: contact.phoneHref, label: contact.phone },
        { href: `mailto:${contact.email}`, label: contact.email },
      ],
    },
  ],
  personvern: { href: "#", label: "Personvern" },
  // Org.nr rendres som lenke i komponenten — derfor delt opp
  copyrightPrefix: (year: number) => `© ${year} ${brand.fullName} · Org.nr `,
  orgNr: contact.orgNr,
  orgNrUrl: contact.orgNrUrl,
} as const;
