/*
  PRIMA PAGINĂ: întâmpinare → două uși → pașii → părinții → Biblioteca → newsletter → despre mine + semnătura.
  Textele sunt de lucru; versiunea finală o scrie Adriana.
*/
import Image from "next/image";
import Link from "next/link";
import { Buton, Container, Fotografie, Supratitlu } from "@/components/ui";
import { FormularNewsletter } from "@/components/FormularNewsletter";
import { PictogramaWhatsApp } from "@/components/PictogramaWhatsApp";
import { InsignaPictograma, Pictograma, type NumePictograma } from "@/components/Pictograma";
import { SageataMana, SubliniereMana } from "@/components/Mana";
import { Separator, SimbolDecor } from "@/components/Simbol";
import { CardResursa } from "@/components/CardResursa";
import { Distribuie } from "@/components/Distribuie";
import { resurse } from "@/lib/biblioteca";
import { fotografii } from "@/lib/fotografii";
import { site } from "@/lib/site";

const pasi: { pictograma: NumePictograma; titlu: string; text: string }[] = [
  {
    pictograma: "fact_check",
    titlu: "Evaluăm",
    text: "Vedem de unde pornim: ce știe deja, ce îl blochează, ce îi place.",
  },
  {
    pictograma: "flag",
    titlu: "Stabilim obiectivul",
    text: "Împreună: un examen, un interviu, vorbitul fără blocaj.",
  },
  {
    pictograma: "footprint",
    titlu: "Lucrăm pas cu pas",
    text: "Ședințe unu la unu, teme pe măsură și un raport scris pentru dumneavoastră.",
  },
  {
    pictograma: "autorenew",
    titlu: "Verificăm și reluăm",
    text: "La 10-12 ședințe facem bilanțul și stabilim următorul pas.",
  },
];

function Cuvinte({ text, intarziere = 0 }: { text: string; intarziere?: number }) {
  return (
    <>
      {text.split(" ").map((c, i) => (
        <span key={i}>
          <span className="cuvant" style={{ animationDelay: `${intarziere + i * 45}ms` }}>
            {c}
          </span>{" "}
        </span>
      ))}
    </>
  );
}

export default function Acasa() {
  const [prima, ...restul] = resurse;

  return (
    <>
      {/* 1. Întâmpinarea */}
      <section className="relative overflow-hidden">
        <Container className="grid items-center gap-10 py-12 sm:py-16 lg:grid-cols-[1.1fr_0.9fr] lg:gap-14 lg:py-20">
          <div>
            <Supratitlu>{site.rol} · unu la unu · online și în București</Supratitlu>
            <h1 className="mt-4 text-[2.35rem] sm:text-5xl lg:text-[3.6rem]">
              <Cuvinte text="Un" />
              <span className="cuvant relative" style={{ animationDelay: "45ms" }}>
                obiectiv clar
                <SubliniereMana />
              </span>{" "}
              <Cuvinte text="și un drum pe măsura copilului dumneavoastră" intarziere={90} />
            </h1>
            <p className="mt-6 max-w-xl text-lg text-verde-negru/85">
              Pornim de la o evaluare și stabilim împreună unde vrem să ajungem. Lucrăm unu la unu, cu răbdare, iar
              dumneavoastră primiți în scris ce am lucrat, ce teme are copilul și ce urmează.
            </p>
            <div className="relative mt-8 flex flex-wrap gap-3">
              <Buton href={site.whatsapp} target="_blank" rel="noopener">
                <PictogramaWhatsApp className="size-5" />
                Scrieți-mi pe WhatsApp
              </Buton>
              <Buton href="/cum-lucrez" varianta="contur">
                Cum lucrez
              </Buton>
              <SageataMana className="absolute -top-14 left-[19rem] hidden w-24 xl:block" />
            </div>
            <ul className="mt-8 flex flex-wrap gap-x-6 gap-y-3 text-[0.95rem] text-verde-negru/85">
              {["Evaluare la început", "Obiectiv stabilit împreună", "Bilanț la 10-12 ședințe"].map((t) => (
                <li key={t} className="inline-flex items-center gap-2">
                  <span className="grid size-6 place-items-center rounded-full bg-galben-pal">
                    <Pictograma nume="check" className="size-4 text-auriu-inchis" />
                  </span>
                  {t}
                </li>
              ))}
            </ul>
          </div>
          <div className="relative">
            <SimbolDecor
              miscare="lenta"
              className="absolute -right-16 -top-16 z-0 hidden w-56 opacity-90 lg:block"
            />
            <Fotografie
              foto={fotografii.intampinare}
              locText="Aici vine fotografia de întâmpinare, de la ședința foto."
              prioritar
              className="relative z-10 aspect-[4/3] w-full sm:aspect-[4/3] lg:aspect-[4/5] lg:max-h-[34rem]"
            />
          </div>
        </Container>
      </section>

      {/* 2. Două uși: copii și adulți */}
      <section aria-labelledby="doua-usi">
        <Container className="pb-16 sm:pb-20">
          <h2 id="doua-usi" className="sr-only">
            Pentru cine lucrez
          </h2>
          <div className="grid gap-5 md:grid-cols-2">
            {[
              {
                href: "/cum-lucrez/copii",
                pictograma: "child_care" as const,
                ton: "galben" as const,
                titlu: "Pentru copilul dumneavoastră",
                text: (
                  <>
                    De la primele cuvinte până la primul examen de limbă. Pornim de la ce îl interesează pe copil și nu
                    reluăm materia de la clasă.
                  </>
                ),
                eticheta: "Pentru copii",
              },
              {
                href: "/cum-lucrez/adulti",
                pictograma: "forum" as const,
                ton: "menta" as const,
                titlu: "Pentru tine, adult",
                text: (
                  <>
                    <span className="font-titluri italic text-smarald">„Nu pot vorbi, mă blochez.”</span> Lucrăm unu la
                    unu, în ritmul tău, pentru interviul, examenul sau munca de zi cu zi.
                  </>
                ),
                eticheta: "Pentru adulți",
              },
            ].map((u) => (
              <Link
                key={u.href}
                href={u.href}
                className="apare group relative flex flex-col overflow-hidden rounded-[1.75rem] border border-linie bg-white p-7 transition-all hover:-translate-y-1 hover:shadow-[0_24px_50px_-28px_rgba(11,47,36,0.5)] sm:p-9"
              >
                {/* eslint-disable-next-line @next/next/no-img-element */}
                <img
                  src="/brand/simbol-verde-sofran.svg"
                  alt=""
                  aria-hidden
                  className="pointer-events-none absolute -bottom-20 -right-20 w-56 opacity-0 transition-all duration-700 group-hover:rotate-45 group-hover:opacity-[0.15]"
                />
                <InsignaPictograma nume={u.pictograma} ton={u.ton} marime="lg" />
                <h3 className="mt-5 text-2xl sm:text-[1.75rem]">{u.titlu}</h3>
                <p className="mt-3 text-verde-negru/85">{u.text}</p>
                <span className="mt-6 inline-flex items-center gap-2 font-semibold text-smarald">
                  {u.eticheta}
                  <Pictograma nume="arrow_forward" className="size-5 transition-transform group-hover:translate-x-1" />
                </span>
              </Link>
            ))}
          </div>
        </Container>
      </section>

      {/* 3. Cum lucrez: titlul rămâne pe loc, pașii vin pe rând */}
      <section aria-labelledby="pasi" className="border-y border-linie/70 bg-white">
        <Container className="grid gap-10 py-16 sm:py-20 lg:grid-cols-[0.85fr_1.15fr] lg:gap-16">
          <div className="lg:sticky lg:top-28 lg:self-start">
            <Supratitlu>Cum lucrez</Supratitlu>
            <h2 id="pasi" className="mt-3 text-3xl sm:text-[2.6rem]">
              Pas cu pas, până la obiectiv
            </h2>
            <p className="mt-4 max-w-md text-verde-negru/85">
              Patru pași simpli, reluați până ajungem unde ne-am propus.
            </p>
            <dl className="mt-8 grid max-w-sm grid-cols-2 gap-3">
              <div className="rounded-2xl bg-galben-pal/70 p-4">
                <dt className="text-sm text-verde-negru/70">60 de minute</dt>
                <dd className="font-titluri text-2xl font-semibold text-smarald">100 de lei</dd>
              </div>
              <div className="rounded-2xl bg-galben-pal/70 p-4">
                <dt className="text-sm text-verde-negru/70">90 de minute</dt>
                <dd className="font-titluri text-2xl font-semibold text-smarald">150 de lei</dd>
              </div>
            </dl>
            <Buton href="/cum-lucrez" varianta="contur" className="mt-6">
              Prețuri și detalii
            </Buton>
          </div>
          <ol className="grid gap-4">
            {pasi.map((p, i) => (
              <li key={p.titlu} className="apare flex gap-5 rounded-[1.5rem] bg-menta/60 p-6 sm:p-7">
                <div className="flex flex-col items-center gap-3">
                  <InsignaPictograma nume={p.pictograma} ton="alb" />
                  {i < pasi.length - 1 && <span className="w-px flex-1 bg-smarald/20" />}
                </div>
                <div>
                  <span className="font-titluri text-lg font-semibold text-auriu-inchis">Pasul {i + 1}</span>
                  <h3 className="mt-1 text-xl sm:text-2xl">{p.titlu}</h3>
                  <p className="mt-2 text-verde-negru/85">{p.text}</p>
                </div>
              </li>
            ))}
          </ol>
        </Container>
      </section>

      {/* 4. Ce spun părinții: se completează doar cu acordul lor scris */}
      <section aria-labelledby="parinti">
        <Container className="py-16 sm:py-20">
          <div className="apare">
            <Supratitlu>Ce spun părinții</Supratitlu>
            <h2 id="parinti" className="mt-3 max-w-2xl text-3xl sm:text-[2.6rem]">
              Cum se simt copiii la ore
            </h2>
          </div>
          <div className="mt-10 grid gap-5 md:grid-cols-3">
            {[1, 2, 3].map((n) => (
              <figure
                key={n}
                className="apare liniatura relative flex min-h-48 flex-col justify-between overflow-hidden rounded-[1.5rem] border border-linie bg-white p-6 pt-10"
              >
                <span aria-hidden className="absolute left-5 top-0 font-titluri text-7xl leading-none text-sofran">
                  „
                </span>
                <blockquote className="font-titluri text-lg italic text-verde-negru/60">
                  Aici vine părerea unui părinte, publicată numai cu acordul lui scris.
                </blockquote>
                <figcaption className="mt-4 text-sm text-verde-negru/60">Părinte · în așteptarea acordului</figcaption>
              </figure>
            ))}
          </div>
        </Container>
      </section>

      <Separator />

      {/* 5. Biblioteca, ca „bento”: o poveste mare și două materiale mai mici */}
      <section aria-labelledby="biblioteca" className="mt-10 bg-menta">
        <Container className="py-16 sm:py-20">
          <div className="apare flex flex-col gap-6 sm:flex-row sm:items-end sm:justify-between">
            <div className="max-w-xl">
              <Supratitlu culoare="corai">Bibliotecă</Supratitlu>
              <h2 id="biblioteca" className="mt-3 text-3xl sm:text-[2.6rem]">
                Povești și materiale pentru acasă
              </h2>
              <p className="mt-4 text-verde-negru/85">
                Povești citite de mine și fișe pe care le puteți folosi împreună cu copilul, între întâlniri.
              </p>
            </div>
            <Link
              href="/biblioteca"
              className="inline-flex items-center gap-2 font-semibold text-smarald underline-offset-4 hover:underline"
            >
              Toată Biblioteca
              <Pictograma nume="arrow_forward" className="size-5" />
            </Link>
          </div>
          <div className="mt-10 grid gap-5 lg:grid-cols-2 lg:grid-rows-2">
            {prima && (
              <div className="lg:row-span-2">
                <CardResursa r={prima} mare />
              </div>
            )}
            {restul.map((r) => (
              <CardResursa key={r.slug} r={r} />
            ))}
          </div>
          <p className="mt-6 text-sm text-verde-negru/60">
            Titlurile de mai sus sunt exemple, până când Adriana înregistrează primele povești.
          </p>
        </Container>
      </section>

      {/* 6. Newsletter */}
      <section aria-labelledby="newsletter" className="relative overflow-hidden bg-galben-pal">
        <SimbolDecor className="absolute -right-24 -top-24 w-[26rem] opacity-[0.14] sm:-right-16 sm:w-[30rem]" />
        <Container className="relative py-16 sm:py-20">
          <div className="apare max-w-2xl">
            <Supratitlu>O scrisoare pe lună</Supratitlu>
            <h2 id="newsletter" className="mt-3 text-3xl sm:text-[2.6rem]">
              Idei de engleză pentru acasă, direct pe email
            </h2>
            <p className="mt-4 text-verde-negru/85">
              O dată pe lună: o idee de făcut acasă cu copilul și o poveste nouă din Bibliotecă.
            </p>
            <div className="mt-8">
              <FormularNewsletter />
            </div>
          </div>
        </Container>
      </section>

      {/* 7. Despre mine, cu crezul și semnătura scrise de mâna ei */}
      <section aria-labelledby="despre">
        <Container className="grid items-center gap-10 py-16 sm:py-20 md:grid-cols-[0.8fr_1.2fr] lg:gap-16">
          <Fotografie
            foto={fotografii.portret}
            locText="Aici vine un portret de la ședința foto."
            className="aspect-square w-full"
          />
          <div className="apare">
            <Supratitlu>Despre mine</Supratitlu>
            <h2 id="despre" className="mt-3 text-3xl sm:text-[2.6rem]">
              Sunt Adriana
            </h2>
            <p className="mt-4 max-w-xl text-verde-negru/85">
              Lucrez cu oameni de toate vârstele de peste 15 ani. Din tenisul de performanță am rămas cu o idee pe care
              o duc și la ore: orice obiectiv se poate atinge, cu antrenament potrivit și cu bunătate.
            </p>
            <figure className="mt-8 max-w-md">
              <Image
                src="/brand/crez-verde.svg"
                alt="Everything is possible with the proper amount of training."
                width={3640}
                height={1800}
                unoptimized
                className="h-auto w-full"
              />
              <figcaption className="sr-only">Crezul meu, scris de mână</figcaption>
            </figure>
            <div className="mt-6 flex flex-wrap items-center justify-between gap-6">
              <Image
                src="/brand/semnatura-verde.svg"
                alt="Adriana Băzăvan"
                width={5600}
                height={932}
                unoptimized
                className="h-auto w-56"
              />
              <Buton href="/despre-mine" varianta="contur">
                Povestea mea
              </Buton>
            </div>
          </div>
        </Container>
      </section>

      {/* 8. Recomandările sunt drumul principal: le facem ușoare */}
      <section className="border-t border-linie/70">
        <Container className="flex flex-col items-start gap-5 py-12 sm:flex-row sm:items-center sm:justify-between">
          <div>
            <h2 className="text-2xl sm:text-3xl">Cunoașteți pe cineva căruia i-ar prinde bine?</h2>
            <p className="mt-2 text-verde-negru/80">Trimiteți-i linkul, cu un clic.</p>
          </div>
          <Distribuie cale="/" titlu={`${site.nume} · ${site.rol}`} />
        </Container>
      </section>
    </>
  );
}
