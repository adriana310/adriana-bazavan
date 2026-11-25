import type { Metadata } from "next";
import Image from "next/image";
import { notFound } from "next/navigation";
import { AntetPagina, Bloc } from "@/components/pagina";
import { DateStructurate } from "@/components/DateStructurate";
import { Distribuie } from "@/components/Distribuie";
import { FormularNewsletter } from "@/components/FormularNewsletter";
import { Pictograma } from "@/components/Pictograma";
import { articole, dataRomana, gasesteArticol } from "@/continut/caiet";
import { site } from "@/lib/site";

// Pagina depinde de adresă (slug); e generată dinainte, deci poate aștepta o clipă la navigare.
export const instant = false;

export function generateStaticParams() {
  return articole.map((a) => ({ slug: a.slug }));
}

export async function generateMetadata({ params }: PageProps<"/caietul-cu-idei/[slug]">): Promise<Metadata> {
  const { slug } = await params;
  const a = gasesteArticol(slug);
  if (!a) return {};
  return {
    title: a.titlu,
    description: a.descriere,
    alternates: { canonical: `/caietul-cu-idei/${a.slug}` },
    openGraph: { type: "article", publishedTime: a.data },
    ...(a.ciorna ? { robots: { index: false, follow: false } } : {}),
  };
}

export default async function Articol({ params }: PageProps<"/caietul-cu-idei/[slug]">) {
  const { slug } = await params;
  const a = gasesteArticol(slug);
  if (!a) notFound();
  const cale = `/caietul-cu-idei/${a.slug}`;
  const { Continut } = a;

  return (
    <>
      {!a.ciorna && (
        <DateStructurate
          date={{
            "@context": "https://schema.org",
            "@type": "Article",
            headline: a.titlu,
            description: a.descriere,
            datePublished: a.data,
            inLanguage: "ro-RO",
            articleSection: a.tema,
            url: `${site.url}${cale}`,
            author: { "@id": `${site.url}/#adriana` },
            publisher: { "@id": `${site.url}/#afacere` },
          }}
        />
      )}
      <AntetPagina
        firimituri={[{ titlu: "Caietul cu idei", href: "/caietul-cu-idei" }]}
        supratitlu={`${a.tema} · ${dataRomana(a.data)}`}
        titlu={a.titlu}
        intro={<p>{a.descriere}</p>}
        cale={cale}
        numeFirimitura={a.titlu}
      />

      <Bloc>
        <article className="mx-auto max-w-2xl">
          {a.ciorna && (
            <p className="mb-8 inline-flex items-center gap-2 rounded-full bg-galben-pal px-4 py-2 text-sm font-semibold text-auriu-inchis">
              <Pictograma nume="edit_note" className="size-5" />
              Ciornă: pagina nu apare în listă și nici în Google
            </p>
          )}
          <Continut />
          <div className="mt-12 flex flex-col gap-6 border-t border-linie pt-8 sm:flex-row sm:items-center sm:justify-between">
            <Image
              src="/brand/semnatura-verde.svg"
              alt="Adriana Băzăvan"
              width={5600}
              height={932}
              unoptimized
              className="h-auto w-48"
            />
            <Distribuie cale={cale} titlu={a.titlu} text={`Un articol de Adriana Băzăvan: ${a.titlu}.`} />
          </div>
        </article>
      </Bloc>

      <Bloc fundal="galben" supratitlu="O scrisoare pe lună" titlu="Articolele noi, direct pe email">
        <FormularNewsletter />
      </Bloc>
    </>
  );
}
