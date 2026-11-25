/*
  PRIMA PAGINĂ: întâmpinare → două uși → pașii → părinții → Biblioteca → newsletter → despre mine + semnătura.
  Textele sunt de lucru; versiunea finală o scrie Adriana.
*/
import Image from "next/image";
import Link from "next/link";
import {
  ArrowRight,
  Check,
  ClipboardCheck,
  Download,
  Footprints,
  MessagesSquare,
  Play,
  RefreshCw,
  Sprout,
  Target,
} from "lucide-react";
import { Buton, Container, Insigna, LocFotografie, Supratitlu } from "@/components/ui";
import { FormularNewsletter } from "@/components/FormularNewsletter";
import { PictogramaWhatsApp } from "@/components/PictogramaWhatsApp";
import { site } from "@/lib/site";

const pasi = [
  {
    icon: ClipboardCheck,
    titlu: "Evaluăm",
    text: "Vedem de unde pornim: ce știe deja, ce îl blochează, ce îi place.",
  },
  {
    icon: Target,
    titlu: "Stabilim obiectivul",
    text: "Împreună: un examen, un interviu, vorbitul fără blocaj.",
  },
  {
    icon: Footprints,
    titlu: "Lucrăm pas cu pas",
    text: "Ședințe unu la unu, teme pe măsură și un raport scris pentru dumneavoastră.",
  },
  {
    icon: RefreshCw,
    titlu: "Verificăm și reluăm",
    text: "La 10-12 ședințe facem bilanțul și stabilim următorul pas.",
  },
];

const biblioteca = [
  {
    tip: "Poveste audio",
    ton: "corai" as const,
    titlu: "Umbrela care nu se temea de ploaie",
    detalii: "6 minute · pentru 5-8 ani",
    actiune: "Ascultă povestea",
    icon: Play,
    href: "/biblioteca/povesti-audio",
  },
  {
    tip: "Fișă de lucru",
    ton: "galben" as const,
    titlu: "Zece întrebări pentru drumul spre școală",
    detalii: "PDF · de exersat împreună",
    actiune: "Descarcă fișa",
    icon: Download,
    href: "/biblioteca/fise-si-scheme",
  },
  {
    tip: "Schemă",
    ton: "sofran" as const,
    titlu: "Timpurile verbale pe o singură pagină",
    detalii: "PDF · pentru gimnaziu",
    actiune: "Descarcă schema",
    icon: Download,
    href: "/biblioteca/fise-si-scheme",
  },
];

export default function Acasa() {
  return (
    <>
      {/* 1. Întâmpinarea */}
      <section>
        <Container className="grid items-center gap-10 py-12 sm:py-16 lg:grid-cols-[1.15fr_0.85fr] lg:gap-14 lg:py-20">
          <div>
            <Supratitlu>{site.rol} · unu la unu · online și în București</Supratitlu>
            <h1 className="mt-4 text-[2.35rem] sm:text-5xl lg:text-[3.6rem]">
              Un <span className="subliniere">obiectiv clar</span> și un drum pe măsura copilului dumneavoastră
            </h1>
            <p className="mt-6 max-w-xl text-lg text-verde-negru/85">
              Pornim de la o evaluare și stabilim împreună unde vrem să ajungem. Lucrăm unu la unu, cu răbdare, iar
              dumneavoastră primiți în scris ce am lucrat, ce teme are copilul și ce urmează.
            </p>
            <div className="mt-8 flex flex-wrap gap-3">
              <Buton href={site.whatsapp} target="_blank" rel="noopener">
                <PictogramaWhatsApp className="size-5" />
                Scrieți-mi pe WhatsApp
              </Buton>
              <Buton href="/cum-lucrez" varianta="contur">
                Cum lucrez
              </Buton>
            </div>
            <ul className="mt-8 flex flex-wrap gap-x-6 gap-y-3 text-[0.95rem] text-verde-negru/85">
              {["Evaluare la început", "Obiectiv stabilit împreună", "Bilanț la 10-12 ședințe"].map((t) => (
                <li key={t} className="inline-flex items-center gap-2">
                  <span className="grid size-6 place-items-center rounded-full bg-galben-pal">
                    <Check aria-hidden className="size-3.5 text-auriu-inchis" strokeWidth={3} />
                  </span>
                  {t}
                </li>
              ))}
            </ul>
          </div>
          <LocFotografie
            className="aspect-[4/5] max-h-[34rem] w-full sm:aspect-[4/3] lg:aspect-[4/5]"
            text="Aici vine fotografia de întâmpinare, de la ședința foto din 12 noiembrie."
          />
        </Container>
      </section>

      {/* 2. Două uși: copii și adulți */}
      <section aria-labelledby="doua-usi">
        <Container className="pb-16 sm:pb-20">
          <h2 id="doua-usi" className="sr-only">
            Pentru cine lucrez
          </h2>
          <div className="grid gap-5 md:grid-cols-2">
            <Link
              href="/cum-lucrez/copii"
              className="group flex flex-col rounded-[1.75rem] border border-linie bg-white p-7 transition-shadow hover:shadow-[0_20px_45px_-25px_rgba(11,47,36,0.45)] sm:p-9"
            >
              <span className="grid size-12 place-items-center rounded-2xl bg-galben-pal">
                <Sprout aria-hidden className="size-6 text-auriu-inchis" />
              </span>
              <h3 className="mt-5 text-2xl sm:text-[1.75rem]">Pentru copilul dumneavoastră</h3>
              <p className="mt-3 text-verde-negru/85">
                De la primele cuvinte până la primul examen de limbă. Pornim de la ce îl interesează pe copil și nu
                reluăm materia de la clasă.
              </p>
              <span className="mt-6 inline-flex items-center gap-2 font-semibold text-smarald">
                Pentru copii
                <ArrowRight aria-hidden className="size-4 transition-transform group-hover:translate-x-1" />
              </span>
            </Link>
            <Link
              href="/cum-lucrez/adulti"
              className="group flex flex-col rounded-[1.75rem] border border-linie bg-white p-7 transition-shadow hover:shadow-[0_20px_45px_-25px_rgba(11,47,36,0.45)] sm:p-9"
            >
              <span className="grid size-12 place-items-center rounded-2xl bg-menta">
                <MessagesSquare aria-hidden className="size-6 text-smarald" />
              </span>
              <h3 className="mt-5 text-2xl sm:text-[1.75rem]">Pentru tine, adult</h3>
              <p className="mt-3 text-verde-negru/85">
                <span className="font-titluri italic text-smarald">„Nu pot vorbi, mă blochez.”</span> Lucrăm unu la
                unu, în ritmul tău, pentru interviul, examenul sau munca de zi cu zi.
              </p>
              <span className="mt-6 inline-flex items-center gap-2 font-semibold text-smarald">
                Pentru adulți
                <ArrowRight aria-hidden className="size-4 transition-transform group-hover:translate-x-1" />
              </span>
            </Link>
          </div>
        </Container>
      </section>

      {/* 3. Cum lucrez, în pași mici */}
      <section aria-labelledby="pasi" className="border-y border-linie/70 bg-white">
        <Container className="py-16 sm:py-20">
          <div className="max-w-2xl">
            <Supratitlu>Cum lucrez</Supratitlu>
            <h2 id="pasi" className="mt-3 text-3xl sm:text-[2.6rem]">
              Pas cu pas, până la obiectiv
            </h2>
          </div>
          <ol className="mt-10 grid gap-5 sm:grid-cols-2 lg:grid-cols-4">
            {pasi.map((p, i) => (
              <li key={p.titlu} className="relative rounded-[1.5rem] bg-menta/60 p-6">
                <div className="flex items-center justify-between">
                  <span className="grid size-11 place-items-center rounded-2xl bg-white">
                    <p.icon aria-hidden className="size-5 text-smarald" />
                  </span>
                  <span className="font-titluri text-3xl font-semibold text-sofran">{i + 1}</span>
                </div>
                <h3 className="mt-5 text-xl">{p.titlu}</h3>
                <p className="mt-2 text-[0.98rem] text-verde-negru/85">{p.text}</p>
              </li>
            ))}
          </ol>
          <div className="mt-10 flex flex-col gap-5 rounded-[1.5rem] border border-linie p-6 sm:flex-row sm:items-center sm:justify-between sm:p-7">
            <dl className="flex flex-wrap gap-x-10 gap-y-3">
              <div>
                <dt className="text-sm text-verde-negru/70">Ședință de 60 de minute</dt>
                <dd className="font-titluri text-2xl font-semibold text-smarald">100 de lei</dd>
              </div>
              <div>
                <dt className="text-sm text-verde-negru/70">Ședință de 90 de minute</dt>
                <dd className="font-titluri text-2xl font-semibold text-smarald">150 de lei</dd>
              </div>
            </dl>
            <Buton href="/cum-lucrez" varianta="contur" className="self-start sm:self-auto">
              Prețuri și detalii
            </Buton>
          </div>
        </Container>
      </section>

      {/* 4. Ce spun părinții: se completează doar cu acordul lor scris */}
      <section aria-labelledby="parinti">
        <Container className="py-16 sm:py-20">
          <Supratitlu>Ce spun părinții</Supratitlu>
          <h2 id="parinti" className="mt-3 max-w-2xl text-3xl sm:text-[2.6rem]">
            Cum se simt copiii la ore
          </h2>
          <div className="mt-10 grid gap-5 md:grid-cols-3">
            {[1, 2, 3].map((n) => (
              <figure
                key={n}
                className="flex min-h-44 flex-col justify-between rounded-[1.5rem] border border-dashed border-sofran/70 bg-galben-pal/40 p-6"
              >
                <blockquote className="font-titluri text-lg italic text-verde-negru/60">
                  Aici vine părerea unui părinte, publicată numai cu acordul lui scris.
                </blockquote>
                <figcaption className="mt-4 text-sm text-verde-negru/60">Părinte · în așteptarea acordului</figcaption>
              </figure>
            ))}
          </div>
        </Container>
      </section>

      {/* 5. Biblioteca */}
      <section aria-labelledby="biblioteca" className="bg-menta">
        <Container className="py-16 sm:py-20">
          <div className="flex flex-col gap-6 sm:flex-row sm:items-end sm:justify-between">
            <div className="max-w-xl">
              <Supratitlu culoare="corai">Bibliotecă</Supratitlu>
              <h2 id="biblioteca" className="mt-3 text-3xl sm:text-[2.6rem]">
                Povești și materiale pentru acasă
              </h2>
              <p className="mt-4 text-verde-negru/85">
                Povești audio citite de mine și fișe pe care le puteți folosi împreună cu copilul, între întâlniri.
              </p>
            </div>
            <Link
              href="/biblioteca"
              className="inline-flex items-center gap-2 font-semibold text-smarald underline-offset-4 hover:underline"
            >
              Toată Biblioteca
              <ArrowRight aria-hidden className="size-4" />
            </Link>
          </div>
          <div className="mt-10 grid gap-5 md:grid-cols-3">
            {biblioteca.map((b) => (
              <Link
                key={b.titlu}
                href={b.href}
                className="group flex flex-col rounded-[1.5rem] bg-white p-6 transition-shadow hover:shadow-[0_20px_45px_-25px_rgba(11,47,36,0.45)]"
              >
                <Insigna ton={b.ton}>{b.tip}</Insigna>
                <h3 className="mt-4 text-xl">{b.titlu}</h3>
                <p className="mt-2 text-sm text-verde-negru/70">{b.detalii}</p>
                <span className="mt-6 inline-flex items-center gap-2.5 font-semibold text-smarald">
                  <span
                    className={`grid size-9 place-items-center rounded-full ${
                      b.icon === Play ? "bg-smarald text-white" : "border border-smarald"
                    }`}
                  >
                    <b.icon aria-hidden className="size-4" />
                  </span>
                  {b.actiune}
                </span>
              </Link>
            ))}
          </div>
          <p className="mt-6 text-sm text-verde-negru/60">
            Titlurile de mai sus sunt exemple, până când Adriana înregistrează primele povești.
          </p>
        </Container>
      </section>

      {/* 6. Newsletter */}
      <section aria-labelledby="newsletter" className="relative overflow-hidden bg-galben-pal">
        {/* eslint-disable-next-line @next/next/no-img-element */}
        <img
          src="/brand/simbol-verde-sofran.svg"
          alt=""
          className="pointer-events-none absolute -right-24 -top-24 w-[26rem] opacity-[0.13] sm:-right-16 sm:w-[30rem]"
        />
        <Container className="relative py-16 sm:py-20">
          <div className="max-w-2xl">
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
          <LocFotografie className="aspect-square w-full" text="Aici vine un portret de la ședința foto." />
          <div>
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
    </>
  );
}
