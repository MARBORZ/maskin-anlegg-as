/**
 * Avsender/mottakere for kontaktskjemaet (Resend).
 * FROM må ligge på et verifisert domene → mkmaskin.no (DNS på Vercel).
 * TO trenger ingen verifisering — kan være hvilke som helst adresser.
 */
export const mail = {
  to: [
    "olemartin@mkmaskin.com",
    "morten@mkmaskin.com",
    "masuevamadi@gmail.com", // midlertidig test-mottaker
  ],
  from: "MK Maskin & Anlegg <skjema@mkmaskin.no>",
} as const;
