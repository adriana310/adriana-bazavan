import Link from "next/link";
import type { ReactNode } from "react";
import { Pictograma } from "@/components/Pictograma";
import { Buton, Container, Supratitlu } from "@/components/ui";
import { PictogramaWhatsApp } from "@/components/PictogramaWhatsApp";
import { DateStructurate } from "@/components/DateStructurate";
import { Distribuie } from "@/components/Distribuie";
import { SimbolDecor } from "@/components/Simbol";
import { firimituri as schemaFirimituri } from "@/lib/schema";
import { site } from "@/lib/site";

type Firimitura = { titlu: string; href: string };

/**
 * Începutul fiecărei pagini interioare: firimituri, supratitlu, titlu, introducere.
 * În dreapta, un caleidoscop mare care se rotește încet la derulare (când nu e altceva acolo).
 * Cu `cale` și `numeFirimitura`, scrie și firimiturile pentru Google.
 */
export function AntetPagina({
  supratitlu,
  titlu,
  intro,
  firimituri = [],
  dreapta,
  cale,
  numeFirimitura,
}: {
  supratitlu: string;
  titlu: ReactNode;
  intro?: ReactNode;
  firimituri?: Firimitura[];
  dreapta?: ReactNode;
  cale?: string;
  numeFirimitura?: string;
}) {
  return (
    <section className="relative overflow-hidden border-b border-linie/70">
      {cale && numeFirimitura && (
        <DateStructurate
          date={{
            "@context": "https://schema.org",
            ...schemaFirimituri([
              ...firimituri.map((f) => ({ titlu: f.titlu, cale: f.href })),
              { titlu: numeFirimitura, cale },
            ]),
          }}
        />
      )}
      {!dreapta && (
        <SimbolDecor
          className="absolute -right-28 top-1/2 hidden w-[26rem] -translate-y-1/2 opacity-[0.16] md:block lg:-right-16"
        />
      )}
      <Container
        className={`relative py-12 sm:py-16 ${dreapta ? "grid items-center gap-10 lg:grid-cols-[1.2fr_0.8fr]" : ""}`}
      >
        <div>
          {firimituri.length > 0 && (
            <nav aria-label="Unde vă aflați" className="mb-6">
              <ol className="flex flex-wrap items-center gap-1 text-sm text-verde-negru/70">
                <li>
                  <Link href="/" className="hover:text-smarald hover:underline">
                    Acasă
                  </Link>
                </li>
                {firimituri.map((f) => (
                  <li key={f.href} className="inline-flex items-center gap-1">
                    <Pictograma nume="chevron_right" className="size-3.5" />
                    <Link href={f.href} className="hover:text-smarald hover:underline">
                      {f.titlu}
                    </Link>
                  </li>
                ))}
              </ol>
            </nav>
          )}
          <Supratitlu>{supratitlu}</Supratitlu>
          <h1 className="mt-3 max-w-3xl text-[2.2rem] sm:text-5xl">{titlu}</h1>
          {intro && <div className="mt-5 max-w-2xl text-lg text-verde-negru/85">{intro}</div>}
        </div>
        {dreapta}
      </Container>
    </section>
  );
}

export function Bloc({
  titlu,
  supratitlu,
  children,
  fundal = "alb",
  id,
}: {
  titlu?: ReactNode;
  supratitlu?: string;
  children: ReactNode;
  fundal?: "alb" | "menta" | "galben";
  id?: string;
}) {
  const fundaluri = { alb: "", menta: "bg-menta", galben: "bg-galben-pal" } as const;
  return (
    <section id={id} className={fundaluri[fundal]}>
      <Container className="py-14 sm:py-16">
        {(supratitlu || titlu) && (
          <div className="apare">
            {supratitlu && <Supratitlu>{supratitlu}</Supratitlu>}
            {titlu && <h2 className={`max-w-3xl text-3xl sm:text-[2.3rem] ${supratitlu ? "mt-3" : ""}`}>{titlu}</h2>}
          </div>
        )}
        <div className={titlu ? "mt-8" : ""}>{children}</div>
      </Container>
    </section>
  );
}

/** Notă vizibilă doar cât lucrăm: arată ce lipsește. Se scoate înainte de lansare. */
export function DeCompletat({ children }: { children: ReactNode }) {
  return (
    <p className="rounded-2xl border border-dashed border-sofran bg-galben-pal/50 px-5 py-4 text-[0.95rem] text-verde-negru/75">
      <span className="font-semibold text-auriu-inchis">De completat: </span>
      {children}
    </p>
  );
}

/** Chemarea de la finalul paginilor: scrieți-mi, plus „Trimiteți unei prietene”. */
export function ScrietiMi({
  titlu = "Vedem împreună de unde pornim",
  cale,
  titluPagina,
}: {
  titlu?: string;
  cale?: string;
  titluPagina?: string;
}) {
  return (
    <section className="relative overflow-hidden bg-menta">
      <SimbolDecor className="absolute -bottom-24 -left-24 w-80 opacity-[0.14]" />
      <Container className="relative flex flex-col gap-8 py-14 sm:py-16 md:flex-row md:items-center md:justify-between">
        <div className="apare max-w-xl">
          <h2 className="text-3xl sm:text-[2.3rem]">{titlu}</h2>
          <p className="mt-3 text-verde-negru/85">
            Prima întâlnire e o discuție. Îmi scrieți pe WhatsApp sau mă sunați și răspund în cel mult o zi lucrătoare.
          </p>
          {cale && (
            <div className="mt-5">
              <Distribuie cale={cale} titlu={titluPagina ?? site.nume} />
            </div>
          )}
        </div>
        <div className="flex flex-wrap gap-3">
          <Buton href={site.whatsapp} target="_blank" rel="noopener">
            <PictogramaWhatsApp className="size-5" />
            Scrieți-mi pe WhatsApp
          </Buton>
          <Buton href={site.telefonLink} varianta="contur" className="bg-white">
            <Pictograma nume="call" className="size-4" />
            {site.telefonAfisat}
          </Buton>
        </div>
      </Container>
    </section>
  );
}

/** Carduri-legătură spre subpagini (al doilea nivel al meniului). */
export function CarduriSubpagini({
  pagini,
}: {
  pagini: { titlu: string; href: string; descriere?: string }[];
}) {
  return (
    <ul className="grid gap-4 sm:grid-cols-2">
      {pagini.map((p) => (
        <li key={p.href} className="apare">
          <Link
            href={p.href}
            className="group flex h-full items-center justify-between gap-4 rounded-[1.25rem] border border-linie bg-white p-5 transition-all hover:-translate-y-0.5 hover:shadow-[0_16px_36px_-22px_rgba(11,47,36,0.45)]"
          >
            <span>
              <span className="block font-titluri text-xl font-semibold text-smarald">{p.titlu}</span>
              {p.descriere && <span className="mt-1 block text-[0.95rem] text-verde-negru/75">{p.descriere}</span>}
            </span>
            <Pictograma
              nume="chevron_right"
              className="size-5 shrink-0 text-smarald transition-transform group-hover:translate-x-1"
            />
          </Link>
        </li>
      ))}
    </ul>
  );
}
