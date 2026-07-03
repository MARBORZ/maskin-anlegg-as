import { brand } from "./brand";
import { contact } from "./contact";

/** Innhold for /personvern — enkel, ærlig erklæring uten juridisk sjargong. */
export const personvern = {
  label: "PERSONVERN",
  heading: "Personvernerklæring",
  updated: "Sist oppdatert: 3. juli 2026",
  intro:
    "Kort fortalt: vi lagrer ingenting om deg i noen database. Når du sender kontaktskjemaet, blir innholdet til én e-post til oss — og videre avtaler gjør vi per telefon.",
  sections: [
    {
      heading: "Hvem er ansvarlig?",
      body: `${brand.fullName} (org.nr ${contact.orgNr}), ${contact.address}, er behandlingsansvarlig for opplysningene du sender inn via kontaktskjemaet. Spørsmål? Ta kontakt på ${contact.email} eller telefon ${contact.phone}.`,
    },
    {
      heading: "Hvilke opplysninger samler vi inn?",
      body: "Kun det du selv skriver i kontaktskjemaet: navn, e-postadresse, telefonnummer, hvem du representerer og meldingen din. Vi ber ikke om mer enn det som trengs for å svare deg.",
    },
    {
      heading: "Hva skjer med opplysningene?",
      body: "Skjemaet blir gjort om til én e-post som sendes direkte til oss. Vi har ingen database, ingen brukerkontoer og ingen kunderegistre på nettsiden — opplysningene finnes kun i e-posten vi mottar. E-posten leveres via tjenesten Resend, som kun formidler utsendelsen.",
    },
    {
      heading: "Hvorfor behandler vi dem?",
      body: "For å kunne svare på henvendelsen din og gi deg et tilbud. Selve avtalen gjør vi normalt per telefon — nettsiden brukes ikke til noe mer. Opplysningene brukes aldri til markedsføring og deles aldri med andre.",
    },
    {
      heading: "Informasjonskapsler og sporing",
      body: "Nettsiden bruker ingen sporingskapsler og ingen analyseverktøy. Det finnes derfor heller ingen cookie-banner — det er ingenting å samtykke til.",
    },
    {
      heading: "Hvor lenge lagres e-posten?",
      body: "E-posten med henvendelsen din ligger i innboksen vår så lenge det er nødvendig for å følge opp saken. Ønsker du den slettet, er det bare å si ifra.",
    },
    {
      heading: "Dine rettigheter",
      body: `Du kan når som helst be om innsyn i, retting av eller sletting av opplysningene dine — send en e-post til ${contact.email}. Du har også rett til å klage til Datatilsynet (datatilsynet.no) hvis du mener vi behandler opplysninger feil.`,
    },
  ],
} as const;
