/*
  Articolele din Caietul cu idei.
  Cum se adaugă un articol:
  1. un fișier nou în acest folder, de exemplu `primul-articol.mdx`, cu `export const informatii = {...}` sus și textul dedesubt
  2. o linie nouă în lista de mai jos
  `ciorna: true` = nu apare în listă și nici în Google, dar pagina se poate deschide direct, pentru verificare.
*/
import type { ComponentType } from "react";
import PaginaDeProba, { informatii as infoPaginaDeProba } from "./pagina-de-proba.mdx";

export const teme = [
  "Acasă, cu engleza",
  "Fără blocaj",
  "Din bibliotecă",
  "Din caietul de antrenor",
  "Proiecte în educație",
] as const;

export type Tema = (typeof teme)[number];

export type InformatiiArticol = {
  titlu: string;
  descriere: string;
  /** data publicării, AAAA-LL-ZZ */
  data: string;
  tema: Tema;
  ciorna: boolean;
};

export type Articol = InformatiiArticol & { slug: string; Continut: ComponentType };

export const articole: Articol[] = [
  { slug: "pagina-de-proba", ...(infoPaginaDeProba as InformatiiArticol), Continut: PaginaDeProba },
];

export const articolePublicate = () =>
  articole.filter((a) => !a.ciorna).sort((a, b) => b.data.localeCompare(a.data));

export const gasesteArticol = (slug: string) => articole.find((a) => a.slug === slug);

export function dataRomana(data: string) {
  return new Intl.DateTimeFormat("ro-RO", { day: "numeric", month: "long", year: "numeric" }).format(new Date(data));
}
