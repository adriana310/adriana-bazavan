// Texte de lucru; versiunea finală o scrie Adriana. Pe pagina pentru adulți ne adresăm cu „tu”.
import type { Metadata } from "next";
import { AntetPagina, Bloc, DeCompletat, ScrietiMi } from "@/components/pagina";

export const metadata: Metadata = {
  title: "Engleză pentru adulți, unu la unu",
  description:
    "Engleză unu la unu pentru adulți care se blochează când vorbesc: pentru interviu, muncă sau călătorii. Online, în ritmul tău.",
};

const ceAud = [
  "Nu pot vorbi, mă blochez.",
  "Nu știu să scriu corect.",
  "Nu mi-a plăcut, dar știu că îmi trebuie.",
  "Nu înțeleg tot ce spune.",
];

export default function PentruAdulti() {
  return (
    <>
      <AntetPagina
        firimituri={[{ titlu: "Cum lucrez", href: "/cum-lucrez" }]}
        supratitlu="Pentru adulți"
        titlu="Engleză pentru tine, în ritmul tău"
        intro={
          <p>
            Pentru un interviu, pentru munca într-un mediu internațional sau pentru drumurile prin lume. Lucrăm unu la
            unu, online, ca să încapă în programul tău.
          </p>
        }
      />

      <Bloc supratitlu="Ce aud des" titlu="Poate te regăsești aici">
        <ul className="grid gap-4 sm:grid-cols-2">
          {ceAud.map((c) => (
            <li key={c} className="rounded-[1.5rem] bg-galben-pal/60 p-6 font-titluri text-xl italic text-verde-negru">
              „{c}”
            </li>
          ))}
        </ul>
        <p className="mt-8 max-w-2xl text-lg text-verde-negru/85">
          Blocajul nu înseamnă că nu știi. De cele mai multe ori înseamnă că n-ai avut unde să exersezi fără teamă.
        </p>
      </Bloc>

      <Bloc fundal="menta" supratitlu="Ce poți aștepta" titlu="Primele semne apar repede">
        <p className="max-w-2xl text-lg text-verde-negru/85">
          Când te pregătești pentru un interviu, primele semne de încredere apar de obicei după 6-10 ședințe. Restul
          depinde de unde pornim și de cât de des lucrăm.
        </p>
        <div className="mt-8">
          <DeCompletat>o poveste reală a unui adult (cu acordul lui), de exemplu interviul trecut în engleză.</DeCompletat>
        </div>
      </Bloc>

      <ScrietiMi titlu="Hai să vedem de unde pornim" />
    </>
  );
}
