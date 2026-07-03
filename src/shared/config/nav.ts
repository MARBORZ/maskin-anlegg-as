/**
 * Hovednavigasjon og primær CTA.
 * "/#anker" fungerer både på forsiden (myk scroll) og fra undersider
 * som /personvern (vanlig navigasjon hjem + scroll).
 */
export const nav = [
  { href: "/#jera", label: "Jera" },
  { href: "/#tjenester", label: "Tjenester" },
  { href: "/#trust", label: "For borettslag" },
  { href: "/#kontakt", label: "Kontakt" },
] as const;

export const cta = {
  label: "Be om tilbud",
  href: "/#kontakt",
} as const;
