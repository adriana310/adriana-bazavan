// Blogul. Texte de lucru; numele și temele finale le alege Adriana.
import type { Metadata } from "next";
import Link from "next/link";
import { AntetPagina, Bloc, DeCompletat } from "@/components/pagina";
import { FormularNewsletter } from "@/components/FormularNewsletter";
import { InsignaPictograma, Pictograma, type NumePictograma } from "@/components/Pictograma";
import { articolePublicate, dataRomana, type Tema } from "@/continut/caiet";

export const metadata: Metadata = {
  title: "Caietul cu idei",
  description:
    "Articole despre engleză, scrise de Adriana Băzăvan: idei de făcut acasă cu copilul, vorbitul fără blocaj, pași mici și proiecte în educație.",
  alternates: { canonical: "/caietul-cu-idei" },
};

const teme: { pictograma: NumePictograma; titlu: Tema; text: string }[] = [
  { pictograma: "home", titlu: "Acasă, cu engleza", text: "Idei scurte de făcut acasă, împreună cu copilul." },
  {
    pictograma: "forum",
    titlu: "Fără blocaj",
    text: "Pentru adulți: de ce ne blocăm când vorbim și cum exersăm fără teamă.",
  },
  { pictograma: "local_library", titlu: "Din bibliotecă", text: "O poveste nouă, o fișă, o schemă." },
  {
    pictograma: "footprint",
    titlu: "Din caietul de antrenor",
    text: "Cum lucrez, pașii mici și ce am învățat pe terenul de tenis.",
  },
  {
    pictograma: "menu_book",
    titlu: "Proiecte în educație",
    text: "Ce fac la proiecte și evenimente, ce am văzut și ce am învățat.",
  },
];

export default function CaietulCuIdei() {
  const lista = articolePublicate();
  return (
    <>
      <AntetPagina
        supratitlu="Caietul cu idei"
        titlu="Ce scriu între două ore"
        intro={<p>Articole scurte, scrise de mine, despre engleză, învățare și pașii mici care contează.</p>}
        cale="/caietul-cu-idei"
        numeFirimitura="Caietul cu idei"
      />

      {lista.length > 0 && (
        <Bloc supratitlu="Cele mai noi">
          <ul className="grid gap-5 md:grid-cols-2">
            {lista.map((a) => (
              <li key={a.slug} className="apare">
                <Link
                  href={`/caietul-cu-idei/${a.slug}`}
                  className="group liniatura flex h-full flex-col rounded-[1.5rem] border border-linie bg-white p-6 transition-all hover:-translate-y-0.5 hover:shadow-[0_20px_45px_-25px_rgba(11,47,36,0.45)]"
                >
                  <span className="text-sm text-auriu-inchis">
                    {a.tema} · {dataRomana(a.data)}
                  </span>
                  <h2 className="mt-3 text-2xl">{a.titlu}</h2>
                  <p className="mt-2 text-verde-negru/80">{a.descriere}</p>
                  <span className="mt-auto inline-flex items-center gap-2 pt-5 font-semibold text-smarald">
                    Citiți articolul
                    <Pictograma nume="arrow_forward" className="size-5 transition-transform group-hover:translate-x-1" />
                  </span>
                </Link>
              </li>
            ))}
          </ul>
        </Bloc>
      )}

      <section className="liniatura">
        <div className="mx-auto max-w-6xl px-4 py-14 sm:px-6 sm:py-16">
          <p className="apare text-[0.8rem] font-semibold uppercase tracking-[0.1em] text-auriu-inchis">Temele caietului</p>
          <ul className="mt-6 grid gap-5 sm:grid-cols-2 lg:grid-cols-3">
            {teme.map((t) => (
              <li key={t.titlu} className="apare rounded-[1.5rem] border border-linie bg-white p-6">
                <InsignaPictograma nume={t.pictograma} />
                <h2 className="mt-4 text-xl">{t.titlu}</h2>
                <p className="mt-2 text-verde-negru/85">{t.text}</p>
              </li>
            ))}
          </ul>
          {lista.length === 0 && (
            <div className="mt-8">
              <DeCompletat>primul articol.</DeCompletat>
            </div>
          )}
        </div>
      </section>

      <Bloc fundal="galben" supratitlu="O scrisoare pe lună" titlu="Articolele noi, direct pe email">
        <FormularNewsletter />
      </Bloc>
    </>
  );
}
