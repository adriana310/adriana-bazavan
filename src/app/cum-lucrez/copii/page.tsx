// Texte de lucru; versiunea finală o scrie Adriana.
import type { Metadata } from "next";
import { Heart, Smile, Sparkles } from "lucide-react";
import { AntetPagina, Bloc, DeCompletat, ScrietiMi } from "@/components/pagina";

export const metadata: Metadata = {
  title: "Engleză pentru copii, unu la unu",
  description:
    "Ore de engleză unu la unu pentru copii, online sau în București. Pornim de la ce îl interesează pe copil, cu răbdare și un raport scris pentru părinți.",
};

const ceAud = [
  "De la grădiniță face engleză și tot nu știe nimic.",
  "La școală nu primește atenție, sunt prea mulți copii în clasă.",
  "Aș vrea să învețe totuși ceva.",
];

const cumE = [
  { icon: Heart, titlu: "Cu blândețe", text: "Copilul poate greși fără teamă. Nimeni nu e certat pentru o greșeală." },
  { icon: Smile, titlu: "Confortabil", text: "Pornim de la ce îl interesează: un desen animat, o melodie, un sport." },
  { icon: Sparkles, titlu: "Cu motivație", text: "Activități plăcute, care îl fac să vrea să revină data viitoare." },
];

export default function PentruCopii() {
  return (
    <>
      <AntetPagina
        firimituri={[{ titlu: "Cum lucrez", href: "/cum-lucrez" }]}
        supratitlu="Pentru copii"
        titlu="Ca un copil să se împrietenească cu engleza"
        intro={
          <p>
            Lucrăm unu la unu, online sau față în față, pornind de la ce îl interesează pe copil. Dumneavoastră primiți
            în scris ce am lucrat și ce urmează.
          </p>
        }
      />

      <Bloc supratitlu="Ce aud des de la părinți" titlu="Poate vă sună cunoscut">
        <ul className="grid gap-4 md:grid-cols-3">
          {ceAud.map((c) => (
            <li key={c} className="rounded-[1.5rem] bg-galben-pal/60 p-6 font-titluri text-xl italic text-verde-negru">
              „{c}”
            </li>
          ))}
        </ul>
        <p className="mt-8 max-w-2xl text-lg text-verde-negru/85">
          De cele mai multe ori, copilul nu e „slab la engleză”. Încă nu s-a împrietenit cu ea.
        </p>
      </Bloc>

      <Bloc fundal="menta" supratitlu="Cum arată o oră" titlu="Seriozitate, cu bunătate">
        <ul className="grid gap-5 md:grid-cols-3">
          {cumE.map((c) => (
            <li key={c.titlu} className="rounded-[1.5rem] bg-white p-6">
              <span className="grid size-11 place-items-center rounded-2xl bg-galben-pal">
                <c.icon aria-hidden className="size-5 text-auriu-inchis" />
              </span>
              <h3 className="mt-4 text-xl">{c.titlu}</h3>
              <p className="mt-2 text-verde-negru/85">{c.text}</p>
            </li>
          ))}
        </ul>
        <div className="mt-8">
          <DeCompletat>vârstele cu care lucrează Adriana unu la unu și cum arată o oră online cu un copil mic.</DeCompletat>
        </div>
      </Bloc>

      <ScrietiMi />
    </>
  );
}
