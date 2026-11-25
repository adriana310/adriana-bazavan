/*
  Fotografiile de la ședința foto. Când sosesc, se pun în public/foto/ și se trec aici calea și descrierea.
  Până atunci, în locul lor apare un panou cu caleidoscopul.

  „mobil” e varianta pe verticală pentru telefon (Adriana vrea poza de întâmpinare mai discretă pe telefon).
*/
export type Fotografie = {
  src: string | null;
  mobil?: string | null;
  alt: string;
  /** zona care rămâne în cadru la decupare, ex. "50% 30%" */
  focus?: string;
};

export const fotografii = {
  intampinare: {
    src: null,
    mobil: null,
    alt: "Adriana Băzăvan zâmbind, acasă, între cărți",
  },
  portret: {
    src: null,
    alt: "Portretul Adrianei Băzăvan",
  },
  laLucru: {
    src: null,
    alt: "Adriana Băzăvan pregătind o oră de engleză",
  },
} satisfies Record<string, Fotografie>;
