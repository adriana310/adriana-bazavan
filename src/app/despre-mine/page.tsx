// Texte de lucru; poveștile le scrie Adriana, aici e doar ordinea lor.
import type { Metadata } from "next";
import Image from "next/image";
import { AntetPagina, Bloc, DeCompletat, ScrietiMi } from "@/components/pagina";
import { LocFotografie } from "@/components/ui";

export const metadata: Metadata = {
  title: "Despre mine",
  description:
    "Adriana Băzăvan, English Teacher în București. Povestea mea, crezul din tenisul de performanță și caleidoscopul copilăriei.",
};

const povesti = [
  {
    titlu: "Terenul de tenis",
    despre: "De unde vine ideea că orice se poate, cu antrenament potrivit. De ce lucrez în pași mici și constanți.",
  },
  {
    titlu: "Propriul loc de joacă",
    despre: "Cum a apărut firma după ce am devenit mamă și de ce la orele mele copiii se simt bine.",
  },
  {
    titlu: "Caleidoscopul copilăriei",
    despre: "Din câteva elemente simple ies forme nesfârșite. Așa văd oamenii și învățarea.",
  },
];

// Simbolurile din caleidoscop și valorile pe care le poartă.
const simboluri = [
  { simbol: "Umbrela", face: "protejează", valoare: "Bunătatea", sens: "Aici poți greși în siguranță." },
  { simbol: "Steluța", face: "strălucește", valoare: "Disciplina", sens: "Antrenamentul duce la momentul „am reușit”." },
  { simbol: "Margareta", face: "potențează frumosul", valoare: "Educația", sens: "Învățarea scoate la iveală ce e deja bun în om." },
];

export default function DespreMine() {
  return (
    <>
      <AntetPagina
        supratitlu="Despre mine"
        titlu="Sunt Adriana, English Teacher"
        intro={
          <p>
            Lucrez cu oameni de toate vârstele de peste 15 ani, unu la unu, online și în București. Înainte să fac asta
            în fiecare zi, am fost asistent de cercetare, ghid, coordonator de voluntari, am lucrat la un muzeu al
            literaturii și într-o corporație. Engleza a fost firul roșu prin toate.
          </p>
        }
        dreapta={<LocFotografie className="aspect-[4/5] w-full" text="Aici vine portretul de la ședința foto." />}
      />

      <Bloc supratitlu="Povestea mea" titlu="Trei povești din care vine felul în care lucrez">
        <ol className="grid gap-5 md:grid-cols-3">
          {povesti.map((p, i) => (
            <li key={p.titlu} className="rounded-[1.5rem] border border-linie p-6">
              <span className="font-titluri text-3xl font-semibold text-sofran">{i + 1}</span>
              <h3 className="mt-3 text-xl">{p.titlu}</h3>
              <p className="mt-2 text-verde-negru/80">{p.despre}</p>
            </li>
          ))}
        </ol>
        <div className="mt-6">
          <DeCompletat>cele trei povești, scrise de Adriana.</DeCompletat>
        </div>
      </Bloc>

      <Bloc fundal="menta" supratitlu="Simbolul meu" titlu="Caleidoscopul: umbrela, steluța și margareta">
        <div className="grid items-center gap-10 md:grid-cols-[0.7fr_1.3fr]">
          <Image
            src="/brand/simbol-verde.svg"
            alt="Caleidoscopul: opt umbrele, opt steluțe și o margaretă în mijloc"
            width={2880}
            height={2880}
            unoptimized
            className="mx-auto h-auto w-full max-w-72"
          />
          <ul className="grid gap-4">
            {simboluri.map((s) => (
              <li key={s.simbol} className="rounded-[1.25rem] bg-white p-5">
                <p className="font-titluri text-xl font-semibold text-smarald">
                  {s.simbol} <span className="font-text text-base font-normal text-verde-negru/70">· {s.face}</span>
                </p>
                <p className="mt-1">
                  <span className="font-semibold">{s.valoare}.</span> {s.sens}
                </p>
              </li>
            ))}
          </ul>
        </div>
      </Bloc>

      <Bloc supratitlu="Crezul meu">
        <figure className="mx-auto max-w-2xl text-center">
          <Image
            src="/brand/crez-verde.svg"
            alt="Everything is possible with the proper amount of training."
            width={3640}
            height={1800}
            unoptimized
            className="mx-auto h-auto w-full"
          />
          <figcaption className="mt-6 text-verde-negru/75">
            Vine din copilărie, de pe terenul de tenis. Îl păstrez în engleză, exact cum l-am învățat.
          </figcaption>
        </figure>
        <div className="mx-auto mt-10 max-w-2xl">
          <DeCompletat>
            varianta finală a crezului și a semnăturii, scrise de mână.
          </DeCompletat>
        </div>
        <Image
          src="/brand/semnatura-verde.svg"
          alt="Adriana Băzăvan"
          width={5600}
          height={932}
          unoptimized
          className="mx-auto mt-10 h-auto w-64"
        />
      </Bloc>

      <ScrietiMi />
    </>
  );
}
