import type { Metadata } from "next";
import { notFound } from "next/navigation";
import { AntetPagina, Bloc, DeCompletat, ScrietiMi } from "@/components/pagina";
import { DateStructurate } from "@/components/DateStructurate";
import { Distribuie } from "@/components/Distribuie";
import { Pictograma } from "@/components/Pictograma";
import { Insigna } from "@/components/ui";
import { fise, gasesteResursa, numeTip, tonTip } from "@/lib/biblioteca";
import { site } from "@/lib/site";

// Pagina depinde de adresă (slug); e generată dinainte, deci poate aștepta o clipă la navigare.
export const instant = false;

export function generateStaticParams() {
  return fise().map((f) => ({ slug: f.slug }));
}

export async function generateMetadata({ params }: PageProps<"/biblioteca/fise-si-scheme/[slug]">): Promise<Metadata> {
  const { slug } = await params;
  const f = gasesteResursa(slug);
  if (!f) return {};
  return {
    title: `${f.titlu} · ${numeTip[f.tip].toLowerCase()} de engleză`,
    description: `${f.descriere} PDF gratuit, ${f.pentru}.`,
    alternates: { canonical: `/biblioteca/fise-si-scheme/${f.slug}` },
    ...(f.exemplu ? { robots: { index: false, follow: true } } : {}),
  };
}

export default async function Fisa({ params }: PageProps<"/biblioteca/fise-si-scheme/[slug]">) {
  const { slug } = await params;
  const f = gasesteResursa(slug);
  if (!f || f.tip === "poveste") notFound();
  const cale = `/biblioteca/fise-si-scheme/${f.slug}`;

  return (
    <>
      {f.pdf && (
        <DateStructurate
          date={{
            "@context": "https://schema.org",
            "@type": "LearningResource",
            name: f.titlu,
            description: f.descriere,
            learningResourceType: numeTip[f.tip],
            inLanguage: ["ro", "en"],
            isAccessibleForFree: true,
            encodingFormat: "application/pdf",
            url: `${site.url}${cale}`,
            author: { "@id": `${site.url}/#adriana` },
          }}
        />
      )}
      <AntetPagina
        firimituri={[
          { titlu: "Bibliotecă", href: "/biblioteca" },
          { titlu: "Fișe și scheme", href: "/biblioteca/fise-si-scheme" },
        ]}
        supratitlu={`${numeTip[f.tip]} · ${f.pentru}`}
        titlu={f.titlu}
        intro={<p>{f.descriere}</p>}
        cale={cale}
        numeFirimitura={f.titlu}
      />

      <Bloc>
        <div className="mx-auto grid max-w-3xl gap-8">
          <div className="flex flex-col gap-6 rounded-[1.5rem] bg-galben-pal/60 p-6 sm:flex-row sm:items-center sm:justify-between sm:p-8">
            <div className="flex items-center gap-4">
              <span className="grid size-16 shrink-0 place-items-center rounded-2xl bg-white text-corai-inchis">
                <Pictograma nume="picture_as_pdf" className="size-9" />
              </span>
              <div>
                <Insigna ton={tonTip[f.tip]}>{numeTip[f.tip]}</Insigna>
                <p className="mt-2 text-verde-negru/80">PDF gratuit · de printat sau de folosit pe telefon</p>
              </div>
            </div>
            {f.pdf ? (
              <a
                href={f.pdf}
                download
                className="inline-flex items-center justify-center gap-2 rounded-full bg-smarald px-6 py-3 font-semibold text-white hover:bg-smarald-adanc"
              >
                <Pictograma nume="download" className="size-5" />
                Descărcați PDF-ul
              </a>
            ) : (
              <span className="rounded-full border border-smarald/40 px-6 py-3 font-semibold text-smarald/60">
                În curând
              </span>
            )}
          </div>

          {f.exemplu && <DeCompletat>fișierul PDF real, făcut de Adriana, cu sigla și culorile noi.</DeCompletat>}

          <div>
            <Distribuie cale={cale} titlu={f.titlu} text={`O fișă de engleză gratuită: ${f.titlu}.`} />
          </div>
        </div>
      </Bloc>

      <ScrietiMi />
    </>
  );
}
