import type { Metadata } from "next";
import { notFound } from "next/navigation";
import { AntetPagina, Bloc, DeCompletat, ScrietiMi } from "@/components/pagina";
import { PlayerAudio } from "@/components/PlayerAudio";
import { VideoYouTube } from "@/components/VideoYouTube";
import { DateStructurate } from "@/components/DateStructurate";
import { Distribuie } from "@/components/Distribuie";
import { Pictograma } from "@/components/Pictograma";
import { gasesteResursa, povesti } from "@/lib/biblioteca";
import { site } from "@/lib/site";

// Pagina depinde de adresă (slug); e generată dinainte, deci poate aștepta o clipă la navigare.
export const instant = false;

export function generateStaticParams() {
  return povesti().map((p) => ({ slug: p.slug }));
}

export async function generateMetadata({ params }: PageProps<"/biblioteca/povesti-audio/[slug]">): Promise<Metadata> {
  const { slug } = await params;
  const p = gasesteResursa(slug);
  if (!p) return {};
  return {
    title: `${p.titlu} · poveste în engleză`,
    description: `${p.descriere} ${p.durata ? `Durează ${p.durata}, ` : ""}${p.pentru}.`,
    alternates: { canonical: `/biblioteca/povesti-audio/${p.slug}` },
    ...(p.exemplu ? { robots: { index: false, follow: true } } : {}),
  };
}

export default async function Poveste({ params }: PageProps<"/biblioteca/povesti-audio/[slug]">) {
  const { slug } = await params;
  const p = gasesteResursa(slug);
  if (!p || p.tip !== "poveste") notFound();
  const cale = `/biblioteca/povesti-audio/${p.slug}`;

  const date = p.audio
    ? {
        "@context": "https://schema.org",
        "@type": "AudioObject",
        name: p.titlu,
        description: p.descriere,
        contentUrl: `${site.url}${p.audio}`,
        inLanguage: "en",
        audience: { "@type": "PeopleAudience", suggestedMinAge: 5 },
        creator: { "@id": `${site.url}/#adriana` },
        ...(p.text ? { transcript: p.text.join("\n\n") } : {}),
      }
    : p.youtube
      ? {
          "@context": "https://schema.org",
          "@type": "VideoObject",
          name: p.titlu,
          description: p.descriere,
          embedUrl: `https://www.youtube-nocookie.com/embed/${p.youtube}`,
          thumbnailUrl: `https://i.ytimg.com/vi/${p.youtube}/hqdefault.jpg`,
          inLanguage: "en",
          creator: { "@id": `${site.url}/#adriana` },
        }
      : null;

  return (
    <>
      {date && <DateStructurate date={date} />}
      <AntetPagina
        firimituri={[
          { titlu: "Bibliotecă", href: "/biblioteca" },
          { titlu: "Povești audio", href: "/biblioteca/povesti-audio" },
        ]}
        supratitlu={`Poveste în engleză · ${p.pentru}`}
        titlu={p.titlu}
        intro={<p>{p.descriere}</p>}
        cale={cale}
        numeFirimitura={p.titlu}
      />

      <Bloc>
        <div className="mx-auto grid max-w-3xl gap-8">
          {p.audio ? (
            <PlayerAudio src={p.audio} titlu={p.titlu} />
          ) : p.youtube ? (
            <VideoYouTube id={p.youtube} titlu={p.titlu} />
          ) : (
            <div className="flex items-center gap-4 rounded-[1.5rem] bg-smarald/90 p-6 text-white">
              <span className="grid size-16 shrink-0 place-items-center rounded-full bg-white/20">
                <Pictograma nume="headphones" className="size-8" />
              </span>
              <p className="text-lg">Înregistrarea acestei povești vine în curând.</p>
            </div>
          )}

          <ul className="flex flex-wrap gap-x-6 gap-y-2 text-verde-negru/80">
            {p.durata && (
              <li className="inline-flex items-center gap-2">
                <Pictograma nume="headphones" className="size-5 text-auriu-inchis" />
                {p.durata}
              </li>
            )}
            <li className="inline-flex items-center gap-2">
              <Pictograma nume="child_care" className="size-5 text-auriu-inchis" />
              {p.pentru}
            </li>
            <li className="inline-flex items-center gap-2">
              <Pictograma nume="forum" className="size-5 text-auriu-inchis" />
              citită de Adriana Băzăvan
            </li>
          </ul>

          {p.text && (
            <article className="liniatura rounded-[1.5rem] border border-linie p-6 sm:p-8" lang="en">
              <h2 className="text-2xl">Read along</h2>
              <div className="mt-4 space-y-4 text-lg leading-8">
                {p.text.map((paragraf, i) => (
                  <p key={i}>{paragraf}</p>
                ))}
              </div>
            </article>
          )}

          {p.exemplu && (
            <DeCompletat>
              povestea reală: fișierul MP3 sau linkul YouTube, textul poveștii, vârsta potrivită și durata.
            </DeCompletat>
          )}

          <div>
            <Distribuie
              cale={cale}
              titlu={p.titlu}
              text={`O poveste în engleză citită de Adriana Băzăvan: ${p.titlu}.`}
            />
          </div>
        </div>
      </Bloc>

      <ScrietiMi />
    </>
  );
}
