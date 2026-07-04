import { routes } from "./routes";

/**
 * Hovednavigasjon og primær CTA. Lenkene peker på ankere fra rutekartet —
 * de virker både på forsiden (myk scroll) og fra undersider (klientnavigasjon
 * hjem via <Link>).
 */
export const nav = [
  { href: routes.main.anchors.jera, label: "Jera" },
  { href: routes.main.anchors.tjenester, label: "Tjenester" },
  { href: routes.main.anchors.trust, label: "For borettslag" },
  { href: routes.main.anchors.kontakt, label: "Kontakt" },
] as const;

export const cta = {
  label: "Be om tilbud",
  href: routes.main.anchors.kontakt,
} as const;
