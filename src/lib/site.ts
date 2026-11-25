// Datele site-ului într-un singur loc.

export const site = {
  nume: "Adriana Băzăvan",
  url: "https://adrianabazavan.ro",
  rol: "English Teacher",
  telefonAfisat: "0758 613 233",
  telefonLink: "tel:+40758613233",
  whatsapp: "https://wa.me/40758613233",
  email: "adriana@caleidoscopcolours.com",
  zona: "București, sector 2 și online",
  firma: {
    nume: "Caleidoscop Colours SRL",
    // se completează înainte de lansare
    cui: "",
    registru: "",
  },
  // Live = se poate indexa în Google. Până la lansare rămâne „noindex”.
  live: process.env.NEXT_PUBLIC_SITE_LIVE === "1",
} as const;

export type LegaturaMeniu = {
  titlu: string;
  href: string;
  descriere?: string;
  copii?: LegaturaMeniu[];
};

// Meniul pe două niveluri.
export const meniu: LegaturaMeniu[] = [
  { titlu: "Despre mine", href: "/despre-mine" },
  {
    titlu: "Cum lucrez",
    href: "/cum-lucrez",
    copii: [
      {
        titlu: "Pentru copii",
        href: "/cum-lucrez/copii",
        descriere: "Unu la unu, în ritmul copilului",
      },
      {
        titlu: "Pentru adulți",
        href: "/cum-lucrez/adulti",
        descriere: "Pentru vorbit, interviu, muncă",
      },
      {
        titlu: "Examene de limbă",
        href: "/cum-lucrez/examene",
        descriere: "Pregătire pas cu pas, cu obiectiv clar",
      },
      {
        titlu: "Proiecte în educație",
        href: "/cum-lucrez/proiecte-in-educatie",
        descriere: "Sprijin pentru proiecte și evenimente",
      },
    ],
  },
  {
    titlu: "Bibliotecă",
    href: "/biblioteca",
    copii: [
      {
        titlu: "Povești audio",
        href: "/biblioteca/povesti-audio",
        descriere: "Citite de mine, în engleză",
      },
      {
        titlu: "Fișe și scheme",
        href: "/biblioteca/fise-si-scheme",
        descriere: "De descărcat și lucrat acasă",
      },
    ],
  },
  { titlu: "Caietul cu idei", href: "/caietul-cu-idei" },
];
