// Texte de lucru; poveștile le scrie Adriana, aici e doar ordinea lor.
import type { Metadata } from "next";
import Image from "next/image";
import { AntetPagina, Bloc, DeCompletat, ScrietiMi } from "@/components/pagina";
import { CaleidoscopExplicat } from "@/components/CaleidoscopExplicat";
import { InsignaPictograma, type NumePictograma } from "@/components/Pictograma";
import { Fotografie } from "@/components/ui";
import { fotografii } from "@/lib/fotografii";

export const metadata: Metadata = {
  title: "Despre mine",
  description:
    "Adriana Băzăvan, English Teacher în București. Povestea mea, crezul din tenisul de performanță și caleidoscopul copilăriei.",
  alternates: { canonical: "/despre-mine" },
};

const povesti: { pictograma: NumePictograma; titlu: string; despre: string }[] = [
  {
    pictograma: "workspace_premium",
    titlu: "Terenul de tenis",
    despre: "De unde vine ideea că orice se poate, cu antrenament potrivit. De ce lucrez în pași mici și constanți.",
  },
  {
    pictograma: "favorite",
    titlu: "Propriul loc de joacă",
    despre: "Cum a apărut firma după ce am devenit mamă și de ce la orele mele copiii se simt bine.",
  },
  {
    pictograma: "auto_awesome",
    titlu: "Caleidoscopul copilăriei",
    despre: "Din câteva elemente simple ies forme nesfârșite. Așa văd oamenii și învățarea.",
  },
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
            în fiecare zi, am fost asistent de cercetare, ghid turistic, coordonator de voluntari, am lucrat la un muzeu
            al literaturii și într-o corporație. Engleza a fost firul roșu prin toate.
          </p>
        }
        dreapta={
          <Fotografie
            foto={fotografii.portret}
            locText="Aici vine portretul de la ședința foto."
            prioritar
            className="aspect-[4/5] w-full"
          />
        }
        cale="/despre-mine"
        numeFirimitura="Despre mine"
      />

      <Bloc supratitlu="Povestea mea" titlu="Trei povești din care vine felul în care lucrez">
        <ol className="grid gap-5 md:grid-cols-3">
          {povesti.map((p, i) => (
            <li key={p.titlu} className="apare rounded-[1.5rem] border border-linie p-6">
              <div className="flex items-center justify-between">
                <InsignaPictograma nume={p.pictograma} />
                <span className="font-titluri text-3xl font-semibold text-sofran">{i + 1}</span>
              </div>
              <h3 className="mt-4 text-xl">{p.titlu}</h3>
              <p className="mt-2 text-verde-negru/80">{p.despre}</p>
            </li>
          ))}
        </ol>
        <div className="mt-6">
          <DeCompletat>cele trei povești, scrise de Adriana.</DeCompletat>
        </div>
      </Bloc>

      <Bloc fundal="menta" supratitlu="Simbolul meu" titlu="Caleidoscopul: umbrela, steluța și margareta">
        <p className="apare -mt-2 mb-8 max-w-2xl text-verde-negru/80">
          Alegeți un simbol și îl vedeți aprinzându-se în desen.
        </p>
        <CaleidoscopExplicat />
      </Bloc>

      <Bloc supratitlu="Crezul meu">
        <figure className="apare mx-auto max-w-2xl text-center">
          <Image
            src="/brand/crez-verde.svg"
            alt="Everything is possible with the proper amount of training."
            width={3640}
            height={1800}
            unoptimized
            className="mx-auto h-auto w-full"
          />
          <figcaption className="mt-6 text-verde-negru/75">Vine din copilărie, din tenisul de performanță.</figcaption>
        </figure>
        <div className="mx-auto mt-10 max-w-2xl">
          <DeCompletat>varianta finală a crezului și a semnăturii, scrise de mână.</DeCompletat>
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

      <ScrietiMi cale="/despre-mine" titluPagina="Despre Adriana Băzăvan" />
    </>
  );
}
