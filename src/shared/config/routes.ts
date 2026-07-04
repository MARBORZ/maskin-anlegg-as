/**
 * Rutekart — ett objekt per side med sti og ankere.
 * ALLE interne lenker (nav, CTA, footer, sitemap, logo) hentes herfra:
 * ny side = nytt objekt her, og lenkene følger automatisk.
 */
export const routes = {
  main: {
    path: "/",
    anchors: {
      jera: "/#jera",
      tjenester: "/#tjenester",
      trust: "/#trust",
      om: "/#om",
      kontakt: "/#kontakt",
    },
  },
  personvern: {
    path: "/personvern",
  },
} as const;
