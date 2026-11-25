import type { Metadata } from "next";
import { AntetPagina, Bloc, DeCompletat } from "@/components/pagina";
import { CardResursa } from "@/components/CardResursa";
import { resurse } from "@/lib/biblioteca";

export const metadata: Metadata = {
  title: "Povești audio în engleză",
  description: "Povești scurte în engleză, inventate sau citite de Adriana Băzăvan, pentru copii de toate vârstele.",
};

export default function PovestiAudio() {
  const povesti = resurse.filter((r) => r.tip === "poveste");
  return (
    <>
      <AntetPagina
        firimituri={[{ titlu: "Bibliotecă", href: "/biblioteca" }]}
        supratitlu="Bibliotecă · Povești audio"
        titlu="Povești în engleză, cu vocea mea"
        intro={<p>Povești scurte, inventate de mine sau citite din cărțile care ne plac, de ascultat acasă sau la drum.</p>}
      />
      <Bloc>
        <div className="grid gap-5 md:grid-cols-3">
          {povesti.map((r) => (
            <CardResursa key={r.slug} r={r} />
          ))}
        </div>
        <div className="mt-8">
          <DeCompletat>
            înregistrările (MP3) și, pentru fiecare, vârsta potrivită și durata. Pentru poveștile citite din cărți,
            verificăm drepturile de autor înainte să le publicăm.
          </DeCompletat>
        </div>
      </Bloc>
    </>
  );
}
