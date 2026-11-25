// Biblioteca: povești audio citite de Adriana și fișe de descărcat.
// Acum sunt doar EXEMPLE de titluri (din machetele de paletă). Le înlocuim cu materialele ei reale.

export type Resursa = {
  slug: string;
  tip: "poveste" | "fisa" | "schema";
  titlu: string;
  pentru: string;
  durata?: string;
  /** fișierul audio sau PDF, când există */
  fisier?: string;
  exemplu: boolean;
};

export const resurse: Resursa[] = [
  {
    slug: "umbrela-care-nu-se-temea-de-ploaie",
    tip: "poveste",
    titlu: "Umbrela care nu se temea de ploaie",
    pentru: "pentru 5-8 ani",
    durata: "6 minute",
    exemplu: true,
  },
  {
    slug: "zece-intrebari-pentru-drumul-spre-scoala",
    tip: "fisa",
    titlu: "Zece întrebări pentru drumul spre școală",
    pentru: "de exersat împreună",
    exemplu: true,
  },
  {
    slug: "timpurile-verbale-pe-o-singura-pagina",
    tip: "schema",
    titlu: "Timpurile verbale pe o singură pagină",
    pentru: "pentru gimnaziu",
    exemplu: true,
  },
];

export const numeTip = {
  poveste: "Poveste audio",
  fisa: "Fișă de lucru",
  schema: "Schemă",
} as const;

export const tonTip = {
  poveste: "corai",
  fisa: "galben",
  schema: "sofran",
} as const;
