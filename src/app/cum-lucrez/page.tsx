// Texte de lucru; versiunea finală o scrie Adriana.
import type { Metadata } from "next";
import { ClipboardCheck, FileText, Footprints, Receipt, RefreshCw, Target } from "lucide-react";
import { AntetPagina, Bloc, CarduriSubpagini, DeCompletat, ScrietiMi } from "@/components/pagina";
import { meniu } from "@/lib/site";

export const metadata: Metadata = {
  title: "Cum lucrez",
  description:
    "Engleză unu la unu, online sau față în față în București: evaluare, obiectiv stabilit împreună, pași mici și bilanț la 10-12 ședințe. 100 de lei pentru 60 de minute.",
};

const pasi = [
  {
    icon: ClipboardCheck,
    titlu: "Evaluăm",
    text: "Prima întâlnire e o discuție și o evaluare: vedem ce știe deja, unde se blochează și ce îi place.",
  },
  {
    icon: Target,
    titlu: "Stabilim obiectivul",
    text: "Îl stabilim împreună și îl scriem: un examen de limbă, un interviu, vorbitul fără blocaj, notele de la școală.",
  },
  {
    icon: Footprints,
    titlu: "Lucrăm pas cu pas",
    text: "Ședințe unu la unu, teme pe măsură și resurse de lucrat acasă. De la prima întâlnire pleacă cu ceva concret.",
  },
  {
    icon: RefreshCw,
    titlu: "Verificăm și reluăm",
    text: "La 10-12 ședințe facem bilanțul: unde am ajuns, ce a mers, care e următorul obiectiv.",
  },
];

const intrebari = [
  {
    q: "Cât durează până la un examen sau până la vorbit fără blocaj?",
    a: (
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
    q: "Cât durează o ședință?",
    a: (
      <p>
        60 sau 90 de minute. Nu țin ședințe de două ore: după o oră și jumătate atenția scade și timpul nu mai ajută pe
        nimeni.
      </p>
    ),
  },
  {
    q: "Lucrați online sau față în față?",
    a: <p>Și online, și față în față, în București. Întotdeauna unu la unu.</p>,
  },
  {
    q: "Reluați materia de la școală?",
    a: (
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
      <AntetPagina
        supratitlu="Cum lucrez"
        titlu="Unu la unu, cu un obiectiv clar"
        intro={
          <p>
            Lucrez doar unu la unu, online sau față în față, în București. Nu reiau materia de la clasă: pregătesc
            fiecare om pentru obiectivul lui, pas cu pas.
          </p>
        }
      />

      <Bloc>
        <CarduriSubpagini pagini={subpagini} />
      </Bloc>

      <Bloc fundal="menta" supratitlu="Procesul" titlu="Patru pași, reluați până la obiectiv">
        <ol className="grid gap-5 md:grid-cols-2">
          {pasi.map((p, i) => (
            <li key={p.titlu} className="flex gap-5 rounded-[1.5rem] bg-white p-6">
              <span className="grid size-12 shrink-0 place-items-center rounded-2xl bg-galben-pal">
                <p.icon aria-hidden className="size-6 text-auriu-inchis" />
              </span>
              <div>
                <h3 className="text-xl">
                  <span className="text-sofran">{i + 1}.</span> {p.titlu}
                </h3>
                <p className="mt-2 text-verde-negru/85">{p.text}</p>
              </div>
            </li>
          ))}
        </ol>
      </Bloc>

      <Bloc supratitlu="Ce primiți" titlu="Un raport scris, ca să vedeți progresul">
        <div className="grid gap-8 md:grid-cols-[auto_1fr] md:items-start">
          <span className="grid size-16 place-items-center rounded-3xl bg-menta">
            <FileText aria-hidden className="size-8 text-smarald" />
          </span>
          <div>
            <p className="max-w-2xl text-lg text-verde-negru/85">
              Părinții primesc pe email un document în care notez tot ce lucrăm:
            </p>
            <ul className="mt-4 grid max-w-2xl gap-2 sm:grid-cols-2">
              {["ce am făcut la fiecare întâlnire", "ce teme are copilul", "ce obiectiv urmărim", "resursele de lucrat acasă"].map(
                (t) => (
                  <li key={t} className="rounded-xl bg-menta/60 px-4 py-3">
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
            { durata: "90 de minute", pret: "150 de lei", pentru: "când avem de lucrat mai mult, de exemplu înaintea unui examen" },
          ].map((p) => (
            <div key={p.durata} className="rounded-[1.5rem] bg-white p-7">
              <p className="text-verde-negru/70">Ședință de {p.durata}</p>
              <p className="mt-1 font-titluri text-4xl font-semibold text-smarald">{p.pret}</p>
              <p className="mt-3 text-verde-negru/80">{p.pentru}</p>
            </div>
          ))}
        </div>
        <p className="mt-6 inline-flex items-center gap-2 text-verde-negru/85">
          <Receipt aria-hidden className="size-5 text-auriu-inchis" />
          Fiecare ședință are factură, emisă de Caleidoscop Colours SRL.
        </p>
      </Bloc>

      <Bloc supratitlu="Întrebări" titlu="Ce mă întreabă părinții cel mai des">
        <div className="grid max-w-3xl gap-3">
          {intrebari.map((i) => (
            <details key={i.q} className="group rounded-[1.25rem] border border-linie p-5 open:bg-menta/40">
              <summary className="cursor-pointer list-none font-titluri text-xl font-semibold text-smarald marker:hidden">
                <span className="flex items-start justify-between gap-4">
                  {i.q}
                  <span aria-hidden className="text-2xl leading-none text-sofran transition-transform group-open:rotate-45">
                    +
                  </span>
                </span>
              </summary>
              <div className="mt-3 text-verde-negru/85">{i.a}</div>
            </details>
          ))}
        </div>
        <div className="mt-8 max-w-3xl">
          <DeCompletat>unde se țin orele față în față.</DeCompletat>
        </div>
      </Bloc>

      <ScrietiMi />
    </>
  );
}
