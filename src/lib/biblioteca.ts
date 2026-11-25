/*
  Biblioteca: povești citite de Adriana și fișe de descărcat.
  Acum sunt doar EXEMPLE de titluri (din machetele de paletă). Le înlocuim cu materialele ei reale.

  Cum se adaugă o poveste:
  - MP3 (recomandat, voce citită): fișierul în public/biblioteca/audio/<slug>.mp3, apoi `audio: "/biblioteca/audio/<slug>.mp3"`
  - sau video pe YouTube (ca la Poveștile Cristinei): `youtube: "<id-ul video-ului>"`
  - `text`: textul poveștii, paragraf cu paragraf (copiii pot citi în timp ce ascultă; ajută și la Google)
  Cum se adaugă o fișă: PDF-ul în public/biblioteca/pdf/<slug>.pdf, apoi `pdf: "/biblioteca/pdf/<slug>.pdf"`.
*/

export type Resursa = {
  slug: string;
  tip: "poveste" | "fisa" | "schema";
  titlu: string;
  pentru: string;
  durata?: string;
  descriere: string;
  audio?: string;
  youtube?: string;
  pdf?: string;
  text?: string[];
  autor?: string;
  exemplu: boolean;
};

export const resurse: Resursa[] = [
  {
    slug: "umbrela-care-nu-se-temea-de-ploaie",
    tip: "poveste",
    titlu: "Umbrela care nu se temea de ploaie",
    pentru: "pentru 5-8 ani",
    durata: "6 minute",
    descriere: "O poveste scurtă în engleză, de ascultat acasă sau la drum.",
    exemplu: true,
  },
  {
    slug: "zece-intrebari-pentru-drumul-spre-scoala",
    tip: "fisa",
    titlu: "Zece întrebări pentru drumul spre școală",
    pentru: "de exersat împreună",
    descriere: "O fișă pe o pagină, cu întrebări simple de pus în engleză pe drum.",
    exemplu: true,
  },
  {
    slug: "timpurile-verbale-pe-o-singura-pagina",
    tip: "schema",
    titlu: "Timpurile verbale pe o singură pagină",
    pentru: "pentru gimnaziu",
    descriere: "Toate timpurile verbale importante, așezate pe o singură pagină.",
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

export function caleResursa(r: Resursa) {
  return r.tip === "poveste" ? `/biblioteca/povesti-audio/${r.slug}` : `/biblioteca/fise-si-scheme/${r.slug}`;
}

export const povesti = () => resurse.filter((r) => r.tip === "poveste");
export const fise = () => resurse.filter((r) => r.tip !== "poveste");
export const gasesteResursa = (slug: string) => resurse.find((r) => r.slug === slug);
