import { brand } from "./brand";

export const hero = {
  mark: brand.mark,
  headingLines: ["Vi holder", "eiendommen", "i form"],
  headingAccent: "hele året.",
  taglineLines: ["Effektiv drift.", "Trygge eiendommer."],
  lead: "Eiendomsdrift og vedlikehold for borettslag, sameier, næring og private — sommer som vinter, alltid én fast kontakt.",
} as const;
