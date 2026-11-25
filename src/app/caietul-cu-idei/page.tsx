// Blogul. Texte de lucru; numele și temele finale le alege Adriana.
import type { Metadata } from "next";
import { BookOpen, Footprints, Home, Library, MessagesSquare } from "lucide-react";
import { AntetPagina, Bloc, DeCompletat } from "@/components/pagina";
import { FormularNewsletter } from "@/components/FormularNewsletter";

export const metadata: Metadata = {
  title: "Caietul cu idei",
  description:
    "Articole despre engleză, scrise de Adriana Băzăvan: idei de făcut acasă cu copilul, vorbitul fără blocaj, pași mici și proiecte în educație.",
};

const teme = [
  { icon: Home, titlu: "Acasă, cu engleza", text: "Idei scurte de făcut acasă, împreună cu copilul." },
  { icon: MessagesSquare, titlu: "Fără blocaj", text: "Pentru adulți: de ce ne blocăm când vorbim și cum exersăm fără teamă." },
  { icon: Library, titlu: "Din bibliotecă", text: "O poveste nouă, o fișă, o schemă." },
  { icon: Footprints, titlu: "Din caietul de antrenor", text: "Cum lucrez, pașii mici și ce am învățat pe terenul de tenis." },
  { icon: BookOpen, titlu: "Proiecte în educație", text: "Ce fac la proiecte și evenimente, ce am văzut și ce am învățat." },
];

export default function CaietulCuIdei() {
  return (
    <>
      <AntetPagina
        supratitlu="Caietul cu idei"
        titlu="Ce scriu între două ore"
        intro={<p>Articole scurte, scrise de mine, despre engleză, învățare și pașii mici care contează.</p>}
      />

      <section className="liniatura">
        <div className="mx-auto max-w-6xl px-4 py-14 sm:px-6 sm:py-16">
          <ul className="grid gap-5 sm:grid-cols-2 lg:grid-cols-3">
            {teme.map((t) => (
              <li key={t.titlu} className="rounded-[1.5rem] border border-linie bg-white p-6">
                <span className="grid size-11 place-items-center rounded-2xl bg-galben-pal">
                  <t.icon aria-hidden className="size-5 text-auriu-inchis" />
                </span>
                <h2 className="mt-4 text-xl">{t.titlu}</h2>
                <p className="mt-2 text-verde-negru/85">{t.text}</p>
              </li>
            ))}
          </ul>
          <div className="mt-8">
            <DeCompletat>primul articol.</DeCompletat>
          </div>
        </div>
      </section>

      <Bloc fundal="galben" supratitlu="O scrisoare pe lună" titlu="Articolele noi, direct pe email">
        <FormularNewsletter />
      </Bloc>
    </>
  );
}
