import type { Metadata } from "next";
import { AntetPagina, Bloc, DeCompletat } from "@/components/pagina";
import { CardResursa } from "@/components/CardResursa";
import { resurse } from "@/lib/biblioteca";

export const metadata: Metadata = {
  title: "Fișe și scheme de engleză",
  description: "Fișe de lucru și scheme de engleză, de descărcat gratuit și folosit acasă, împreună cu copilul.",
};

export default function FiseSiScheme() {
  const fise = resurse.filter((r) => r.tip !== "poveste");
  return (
    <>
      <AntetPagina
        firimituri={[{ titlu: "Bibliotecă", href: "/biblioteca" }]}
        supratitlu="Bibliotecă · Fișe și scheme"
        titlu="Fișe și scheme de lucrat acasă"
        intro={<p>Materiale scurte, pe o pagină, pe care le puteți printa sau folosi direct de pe telefon.</p>}
      />
      <Bloc>
        <div className="grid gap-5 md:grid-cols-3">
          {fise.map((r) => (
            <CardResursa key={r.slug} r={r} />
          ))}
        </div>
        <div className="mt-8">
          <DeCompletat>fișierele PDF, cu siglă și culorile noi (le pregătim în același stil).</DeCompletat>
        </div>
      </Bloc>
    </>
  );
}
