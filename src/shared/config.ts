/**
 * Sentralt innhold og konfigurasjon for hele landingssiden.
 * ALT tekst-/kontaktinnhold bor her — komponentene skal ikke ha statiske data.
 * Plassholdere i [hakeparenteser] fylles inn av eier senere.
 */

export const contact = {
  email: "olemartin@mkmaskin.com",
  phone: "970 68 803",
  phoneHref: "tel:+4797068803",
  orgNr: "933 841 340",
  orgNrUrl:
    "https://www.proff.no/regnskap/mk-maskin-anlegg-as/v%C3%B8yenenga/bygningstjenester/IFFZGL807TQ",
  address: "Brenneveien 84, 1339 Vøyenenga",
} as const;

export const brand = {
  name: "MK Maskin & Anlegg",
  fullName: "Maskin & Anlegg AS",
  /** Initialer for logo-merket (rune settes mellom dem: M ᛃ K). */
  initials: "MK",
  mark: "MK MASKIN & ANLEGG AS",
  tagline: "Effektiv drift. Trygge eiendommer.",
} as const;

/** Avsender/mottaker for kontaktskjemaet (Resend). Domene: mkmaskin.com. */
export const mail = {
  to: contact.email,
  from: "Maskin & Anlegg <skjema@mkmaskin.com>",
} as const;

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

export const hero = {
  mark: brand.mark,
  headingLines: ["Vi holder", "eiendommen", "i form"],
  headingAccent: "hele året.",
  taglineLines: ["Effektiv drift.", "Trygge eiendommer."],
  lead: "Eiendomsdrift og vedlikehold for borettslag, sameier og næring — sommer som vinter, alltid én fast kontakt.",
} as const;

/**
 * Bildegalleri i hero-seksjonen. Midlertidige eksterne plassholdere.
 * Bytt `src` til statiske importer fra src/assets/job_example når ekte
 * bilder er på plass — komponenten mapper bare over denne lista.
 */
export const gallery = [
  {
    src: "https://picsum.photos/seed/maskin-vaktmester/900/700",
    alt: "Vaktmester i arbeid på fellesområde",
  },
  {
    src: "https://picsum.photos/seed/maskin-grontanlegg/900/700",
    alt: "Stell av grøntanlegg og uteområder",
  },
  {
    src: "https://picsum.photos/seed/maskin-vinter/900/700",
    alt: "Brøyting og strøing om vinteren",
  },
  {
    src: "https://picsum.photos/seed/maskin-eiendom/900/700",
    alt: "Drift og vedlikehold av eiendom",
  },
  {
    src: "https://picsum.photos/seed/maskin-bygg/900/700",
    alt: "Tilsyn av bygg og tekniske anlegg",
  },
] as const;

export const jera = {
  label: "ÅRSHJULET",
  heading: "Et tegn for årets gang.",
  lead: "Eiendommen krever ulike grep gjennom året. Vi har én avtale som dekker alle tolv månedene — og en fast person som kjenner ditt bygg fra mars til mars.",
  runeLabel: "JERA",
  runeCaption: "årets gang",
  seasons: [
    {
      name: "Vår",
      period: "mar–mai",
      desc: "Opprydding etter vinteren, kantklipping, oppstart grøntanlegg.",
    },
    {
      name: "Sommer",
      period: "jun–aug",
      desc: "Gressklipping, beskjæring, planting, løpende vedlikehold.",
    },
    {
      name: "Høst",
      period: "sep–nov",
      desc: "Løvrydding, beskjæring, vinterforberedelse, kontroll før frost.",
    },
    {
      name: "Vinter",
      period: "des–feb",
      desc: "Brøyting, strøing, vinterberedskap, tilsyn.",
    },
  ],
} as const;

export const tjenester = {
  label: "TJENESTER",
  tagline: "Fem tjenester, én leverandør.",
  services: [
    {
      season: "Hele året",
      name: "Eiendomsdrift",
      desc: "Faste rutiner, tilsyn og praktisk drift slik at bygg og uteområder fungerer som de skal.",
    },
    {
      season: "Hele året",
      name: "Vaktmestertjenester",
      desc: "Mindre vedlikehold, reparasjoner, oppfølging av fellesarealer for borettslag, sameier og næringsbygg.",
    },
    {
      season: "Sommer",
      name: "Grøntanlegg og uteområder",
      desc: "Gressklipping, kantklipping, beskjæring, opprydding, planting og vedlikehold.",
    },
    {
      season: "Vinter",
      name: "Vintervedlikehold",
      desc: "Brøyting, strøing og vinterberedskap for adkomstveier, parkeringsplasser og gangarealer.",
    },
    {
      season: "Hele året",
      name: "Teknisk oppfølging",
      desc: "Enkel teknisk kontroll, tilsyn og oppfølging av leverandører ved behov.",
    },
  ],
} as const;

export const trust = {
  label: "HVORFOR OSS",
  heading: "Bygget for borettslag, sameier og næring.",
  lead: "Vi gjør hverdagen enklere for styret, beboerne og eierne — med stabil, forutsigbar drift gjennom hele året.",
  points: [
    {
      title: "Pålitelig og tilgjengelig",
      body: "Profesjonell driftspartner med en fast kontakt som kjenner eiendommen din.",
    },
    {
      title: "Kvalitet og ryddig arbeid",
      body: "Vi etterlater stedet bedre enn vi fant det.",
    },
    {
      title: "Sommer og vinter i én avtale",
      body: "Samme leverandør hele året — sømløst gjennom sesongene.",
    },
    {
      title: "Faste avtaler",
      body: "Tydelig omfang og fast pris. Ingen overraskelser på fakturaen.",
    },
  ],
  // Sannferdige styrker for et nytt, lokalt selskap — ingen oppdiktede tall.
  // Bærum (forretningsadresse), helårsdrift og fast kontakt er kjernen i tilbudet.
  stats: [
    { value: "Bærum", label: "Lokal forankring" },
    { value: "Hele året", label: "Sommer og vinter" },
    { value: "Én kontakt", label: "Fast kontaktperson" },
  ],
} as const;

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
      { name: "navn", label: "NAVN", placeholder: "Ditt navn", required: true },
      {
        name: "org",
        label: "BORETTSLAG / SAMEIE / FIRMA",
        placeholder: "Hvem representerer du?",
      },
      {
        name: "epost",
        label: "E-POST",
        placeholder: "Din e-postadresse",
        type: "email",
        required: true,
        half: true,
      },
      {
        name: "telefon",
        label: "TELEFON",
        placeholder: "Ditt telefonnummer",
        half: true,
      },
      {
        name: "melding",
        label: "MELDING",
        placeholder: "Hva trenger eiendommen?",
        multiline: true,
      },
    ],
    submit: "Send forespørsel",
    sending: "Sender …",
    micro: "Vi svarer normalt innen én virkedag.",
    success: "Takk! Vi tar kontakt innen én virkedag.",
    error: "Noe gikk galt. Prøv igjen, eller send oss en e-post.",
  },
} as const;

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

export type FormField = (typeof kontakt.form.fields)[number];
