/** Hovednavigasjon og primær CTA. */
export const nav = [
  { href: "#jera", label: "Jera" },
  { href: "#tjenester", label: "Tjenester" },
  { href: "#trust", label: "For borettslag" },
  { href: "#kontakt", label: "Kontakt" },
] as const;

export const cta = {
  label: "Be om tilbud",
  href: "#kontakt",
} as const;
