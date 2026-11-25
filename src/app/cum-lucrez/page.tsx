// Texte de lucru; versiunea finală o scrie Adriana.
import type { Metadata } from "next";
import { AntetPagina, Bloc, CarduriSubpagini, DeCompletat, ScrietiMi } from "@/components/pagina";
import { DateStructurate } from "@/components/DateStructurate";
import { InsignaPictograma, Pictograma, type NumePictograma } from "@/components/Pictograma";
import { intrebariFrecvente, serviciu } from "@/lib/schema";
import { meniu } from "@/lib/site";

export const metadata: Metadata = {
  title: "Cum lucrez",
  description:
    "Engleză unu la unu, online sau față în față în București: evaluare, obiectiv stabilit împreună, pași mici și bilanț la 10-12 ședințe. 100 de lei pentru 60 de minute.",
  alternates: { canonical: "/cum-lucrez" },
};

const pasi: { pictograma: NumePictograma; titlu: string; text: string }[] = [
  {
    pictograma: "fact_check",
    titlu: "Evaluăm",
    text: "Prima întâlnire e o discuție și o evaluare: vedem ce știe deja, unde se blochează și ce îi place.",
  },
  {
    pictograma: "flag",
    titlu: "Stabilim obiectivul",
    text: "Îl stabilim împreună și îl scriem: un examen de limbă, un interviu, vorbitul fără blocaj.",
  },
  {
    pictograma: "footprint",
    titlu: "Lucrăm pas cu pas",
    text: "Ședințe unu la unu, teme pe măsură și resurse de lucrat acasă. De la prima întâlnire pleacă cu ceva concret.",
  },
  {
    pictograma: "autorenew",
    titlu: "Verificăm și reluăm",
    text: "La 10-12 ședințe facem bilanțul: unde am ajuns, ce a mers, care e următorul obiectiv.",
  },
];

// Fiecare întrebare are și varianta simplă (`raspuns`), pe care o citesc Google și asistenții AI.
const intrebari = [
  {
    intrebare: "Cât durează până la un examen sau până la vorbit fără blocaj?",
    raspuns:
      "Depinde de unde pornim și cât de des lucrăm. Când lucrăm constant, progresul de la un nivel la altul se vede cam o dată la 3 luni. Un elev de clasa a X-a care e deja la nivel B1 și vrea examenul PET are nevoie de cam 3 luni (10-12 săptămâni). Un elev de clasa a VII-a de nivel A1 care vrea un A2 complet, cu o întâlnire pe săptămână, are nevoie de cam un an școlar. Un adult care se pregătește pentru un interviu vede primele semne de încredere după 6-10 ședințe.",
    continut: (
      <>
        <p>
          Depinde de unde pornim și cât de des lucrăm. Din experiența mea, când lucrăm constant, progresul de la un
          nivel la altul se vede cam o dată la 3 luni. Câteva exemple:
        </p>
        <ul className="mt-3 list-disc space-y-2 pl-5">
          <li>
            Un elev de clasa a X-a care e deja la nivel B1 și vrea examenul PET (B1): cam 3 luni, adică 10-12
            săptămâni de pregătire strict pentru examen.
          </li>
          <li>
            Un elev de clasa a VII-a de nivel A1 care vrea să ajungă la un A2 complet, cu o întâlnire pe săptămână: cam
            un an școlar.
          </li>
          <li>
            Un adult care se pregătește pentru un interviu: primele semne de încredere apar de obicei după 6-10
            ședințe.
          </li>
        </ul>
      </>
    ),
  },
  {
    intrebare: "Cât durează o ședință și cât costă?",
    raspuns:
      "O ședință durează 60 de minute (100 de lei) sau 90 de minute (150 de lei). Nu țin ședințe de două ore: după o oră și jumătate atenția scade. Fiecare ședință are factură.",
    continut: (
      <p>
        60 de minute (100 de lei) sau 90 de minute (150 de lei). Nu țin ședințe de două ore: după o oră și jumătate
        atenția scade și timpul nu mai ajută pe nimeni.
      </p>
    ),
  },
  {
    intrebare: "Lucrați online sau față în față?",
    raspuns: "Și online, și față în față, în București. Întotdeauna unu la unu.",
    continut: <p>Și online, și față în față, în București. Întotdeauna unu la unu.</p>,
  },
  {
    intrebare: "Reluați materia de la școală?",
    raspuns:
      "Nu. Pregătesc fiecare om pentru obiectivul lui. Uneori asta ajută și la școală, dar nu fac ora de la clasă a doua oară.",
    continut: (
      <p>
        Nu. Pregătesc fiecare om pentru obiectivul lui. Uneori asta ajută și la școală, dar nu fac ora de la clasă a
        doua oară.
      </p>
    ),
  },
];

export default function CumLucrez() {
  const subpagini = meniu.find((m) => m.href === "/cum-lucrez")?.copii ?? [];

  return (
    <>
      <DateStructurate
        date={[
          serviciu({
            nume: "Engleză unu la unu",
            descriere:
              "Ore de engleză unu la unu pentru copii și adulți, online sau față în față în București: evaluare, obiectiv stabilit împreună, pași mici, bilanț la 10-12 ședințe.",
            cale: "/cum-lucrez",
            tip: "Ore de engleză, meditații engleză",
          }),
          intrebariFrecvente(intrebari),
        ]}
      />
      <AntetPagina
        supratitlu="Cum lucrez"
        titlu="Unu la unu, cu un obiectiv clar"
        intro={
          <p>
            Lucrez doar unu la unu, online sau față în față, în București. Nu reiau materia de la clasă: pregătesc
            fiecare om pentru obiectivul lui, pas cu pas.
          </p>
        }
        cale="/cum-lucrez"
        numeFirimitura="Cum lucrez"
      />

      <Bloc>
        <CarduriSubpagini pagini={subpagini} />
      </Bloc>

      <Bloc fundal="menta" supratitlu="Procesul" titlu="Patru pași, reluați până la obiectiv">
        <ol className="grid gap-5 md:grid-cols-2">
          {pasi.map((p, i) => (
            <li key={p.titlu} className="apare flex gap-5 rounded-[1.5rem] bg-white p-6">
              <InsignaPictograma nume={p.pictograma} />
              <div>
                <h3 className="text-xl">
                  <span className="text-auriu-inchis">{i + 1}.</span> {p.titlu}
                </h3>
                <p className="mt-2 text-verde-negru/85">{p.text}</p>
              </div>
            </li>
          ))}
        </ol>
      </Bloc>

      <Bloc supratitlu="Ce primiți" titlu="Un raport scris, ca să vedeți progresul">
        <div className="grid gap-8 md:grid-cols-[auto_1fr] md:items-start">
          <InsignaPictograma nume="description" ton="menta" marime="lg" />
          <div>
            <p className="max-w-2xl text-lg text-verde-negru/85">
              Părinții primesc pe email un document în care notez tot ce lucrăm:
            </p>
            <ul className="mt-4 grid max-w-2xl gap-2 sm:grid-cols-2">
              {["ce am făcut la fiecare întâlnire", "ce teme are copilul", "ce obiectiv urmărim", "resursele de lucrat acasă"].map(
                (t) => (
                  <li key={t} className="apare flex items-center gap-2 rounded-xl bg-menta/60 px-4 py-3">
                    <Pictograma nume="check" className="size-5 text-smarald" />
                    {t}
                  </li>
                ),
              )}
            </ul>
          </div>
        </div>
      </Bloc>

      <Bloc fundal="galben" supratitlu="Prețuri" titlu="Prețuri la vedere">
        <div className="grid gap-5 md:grid-cols-2">
          {[
            { durata: "60 de minute", pret: "100 de lei", pentru: "ședința obișnuită" },
            { durata: "90 de minute", pret: "150 de lei", pentru: "când e nevoie de mai mult timp de lucru" },
          ].map((p) => (
            <div key={p.durata} className="apare rounded-[1.5rem] bg-white p-7">
              <p className="text-verde-negru/70">Ședință de {p.durata}</p>
              <p className="mt-1 font-titluri text-4xl font-semibold text-smarald">{p.pret}</p>
              <p className="mt-3 text-verde-negru/80">{p.pentru}</p>
            </div>
          ))}
        </div>
        <p className="mt-6 inline-flex items-center gap-2 text-verde-negru/85">
          <Pictograma nume="receipt_long" className="size-5 text-auriu-inchis" />
          Fiecare ședință are factură, emisă de Caleidoscop Colours SRL.
        </p>
      </Bloc>

      <Bloc supratitlu="Întrebări" titlu="Ce mă întreabă părinții cel mai des">
        <div className="grid max-w-3xl gap-3">
          {intrebari.map((i) => (
            <details key={i.intrebare} className="group apare rounded-[1.25rem] border border-linie p-5 open:bg-menta/40">
              <summary className="cursor-pointer list-none font-titluri text-xl font-semibold text-smarald marker:hidden">
                <span className="flex items-start justify-between gap-4">
                  {i.intrebare}
                  <Pictograma
                    nume="expand_more"
                    className="mt-1 size-6 text-auriu-inchis transition-transform group-open:rotate-180"
                  />
                </span>
              </summary>
              <div className="mt-3 text-verde-negru/85">{i.continut}</div>
            </details>
          ))}
        </div>
        <div className="mt-8 max-w-3xl">
          <DeCompletat>
            unde se țin orele față în față și ce primește omul în ședința de 90 de minute.
          </DeCompletat>
        </div>
      </Bloc>

      <ScrietiMi cale="/cum-lucrez" titluPagina="Cum lucrează Adriana Băzăvan" />
    </>
  );
}
