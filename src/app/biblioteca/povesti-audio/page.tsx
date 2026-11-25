import type { Metadata } from "next";
import { AntetPagina, Bloc, DeCompletat } from "@/components/pagina";
import { CardResursa } from "@/components/CardResursa";
import { povesti } from "@/lib/biblioteca";

export const metadata: Metadata = {
  title: "Povești audio în engleză",
  description: "Povești scurte în engleză, inventate sau citite de Adriana Băzăvan, pentru copii de toate vârstele.",
  alternates: { canonical: "/biblioteca/povesti-audio" },
};

export default function PovestiAudio() {
  const lista = povesti();
  return (
    <>
      <AntetPagina
        firimituri={[{ titlu: "Bibliotecă", href: "/biblioteca" }]}
        supratitlu="Bibliotecă · Povești audio"
        titlu="Povești în engleză, cu vocea mea"
        intro={<p>Povești scurte, de ascultat acasă sau la drum, cu textul alături pentru cine vrea să citească.</p>}
        cale="/biblioteca/povesti-audio"
        numeFirimitura="Povești audio"
      />
      <Bloc>
        <div className="grid gap-5 md:grid-cols-2 lg:grid-cols-3">
          {lista.map((r, i) => (
            <div key={r.slug} className={i === 0 ? "md:col-span-2" : ""}>
              <CardResursa r={r} mare={i === 0} />
            </div>
          ))}
        </div>
        <div className="mt-8">
          <DeCompletat>
            înregistrările (MP3 sau video YouTube) și, pentru fiecare, vârsta potrivită, durata și textul poveștii.
            Pentru poveștile citite din cărți, verificăm drepturile de autor înainte să le publicăm.
          </DeCompletat>
        </div>
      </Bloc>
    </>
  );
}
