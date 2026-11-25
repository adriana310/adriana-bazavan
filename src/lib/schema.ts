// Datele structurate (schema.org) pentru Google și pentru asistenții AI.
import { site } from "@/lib/site";

const id = (ancora: string) => `${site.url}/#${ancora}`;

export const oferte = [
  {
    "@type": "Offer",
    name: "Ședință de engleză unu la unu, 60 de minute",
    price: "100",
    priceCurrency: "RON",
  },
  {
    "@type": "Offer",
    name: "Ședință de engleză unu la unu, 90 de minute",
    price: "150",
    priceCurrency: "RON",
  },
];

/** Graful de bază, pe toate paginile: site-ul, Adriana și afacerea ei. */
export function grafBaza() {
  return [
    {
      "@type": "WebSite",
      "@id": id("site"),
      url: site.url,
      name: site.nume,
      inLanguage: "ro-RO",
      publisher: { "@id": id("afacere") },
    },
    {
      "@type": "Person",
      "@id": id("adriana"),
      name: site.nume,
      jobTitle: site.rol,
      url: `${site.url}/despre-mine`,
      knowsLanguage: ["ro", "en"],
      worksFor: { "@id": id("afacere") },
    },
    {
      "@type": ["ProfessionalService", "EducationalOrganization"],
      "@id": id("afacere"),
      name: `${site.nume} · ${site.rol}`,
      legalName: site.firma.nume,
      description:
        "Ore de engleză unu la unu pentru copii și adulți, online și față în față în București (sector 2): evaluare, obiectiv stabilit împreună, pași mici, bilanț la 10-12 ședințe, raport scris pentru părinți.",
      url: site.url,
      telephone: "+40758613233",
      email: site.email,
      logo: `${site.url}/brand/simbol-verde.svg`,
      priceRange: "100-150 RON",
      address: {
        "@type": "PostalAddress",
        addressLocality: "București",
        addressRegion: "Sector 2",
        addressCountry: "RO",
      },
      areaServed: [{ "@type": "City", name: "București" }, "Online"],
      availableLanguage: ["ro", "en"],
      founder: { "@id": id("adriana") },
      knowsAbout: [
        "limba engleză",
        "ore de engleză unu la unu",
        "meditații engleză",
        "pregătire pentru examene Cambridge",
        "engleză pentru adulți",
        "engleză pentru copii",
      ],
      makesOffer: oferte,
    },
  ];
}

export function serviciu({ nume, descriere, cale, tip }: { nume: string; descriere: string; cale: string; tip: string }) {
  return {
    "@type": "Service",
    name: nume,
    description: descriere,
    serviceType: tip,
    url: `${site.url}${cale}`,
    provider: { "@id": id("afacere") },
    areaServed: [{ "@type": "City", name: "București" }, "Online"],
    offers: oferte,
  };
}

export function intrebariFrecvente(intrebari: { intrebare: string; raspuns: string }[]) {
  return {
    "@type": "FAQPage",
    mainEntity: intrebari.map((i) => ({
      "@type": "Question",
      name: i.intrebare,
      acceptedAnswer: { "@type": "Answer", text: i.raspuns },
    })),
  };
}

export function firimituri(lista: { titlu: string; cale: string }[]) {
  return {
    "@type": "BreadcrumbList",
    itemListElement: [{ titlu: "Acasă", cale: "/" }, ...lista].map((f, i) => ({
      "@type": "ListItem",
      position: i + 1,
      name: f.titlu,
      item: `${site.url}${f.cale === "/" ? "" : f.cale}`,
    })),
  };
}
