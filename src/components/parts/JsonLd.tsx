import { brand, contact, site, seo, tjenester } from "@/shared/config";

/**
 * Strukturerte data (schema.org LocalBusiness) for lokal SEO.
 * Bygges fra config — org.nr, adresse, telefon, e-post, tjenester.
 */
export default function JsonLd() {
  // "Brenneveien 84, 1339 Vøyenenga" → deler
  const [street, cityPart] = contact.address.split(",").map((s) => s.trim());
  const [postalCode, ...localityParts] = (cityPart ?? "").split(" ");

  const data = {
    "@context": "https://schema.org",
    "@type": "LocalBusiness",
    name: brand.fullName,
    description: seo.description,
    url: site.url,
    telephone: contact.phoneHref.replace("tel:", ""),
    email: contact.email,
    image: `${site.url}/opengraph-image`,
    address: {
      "@type": "PostalAddress",
      streetAddress: street,
      postalCode,
      addressLocality: localityParts.join(" "),
      addressCountry: "NO",
    },
    areaServed: seo.areaServed.map((name) => ({ "@type": "Place", name })),
    sameAs: [contact.orgNrUrl],
    vatID: contact.orgNr,
    hasOfferCatalog: {
      "@type": "OfferCatalog",
      name: "Tjenester",
      itemListElement: tjenester.services.map((s) => ({
        "@type": "Offer",
        itemOffered: { "@type": "Service", name: s.name, description: s.desc },
      })),
    },
  };

  return (
    <script
      type="application/ld+json"
      dangerouslySetInnerHTML={{ __html: JSON.stringify(data) }}
    />
  );
}
