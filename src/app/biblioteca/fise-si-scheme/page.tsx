import type { Metadata } from "next";
import { AntetPagina, Bloc, DeCompletat } from "@/components/pagina";
import { CardResursa } from "@/components/CardResursa";
import { fise } from "@/lib/biblioteca";

export const metadata: Metadata = {
  title: "Fișe și scheme de engleză",
  description: "Fișe de lucru și scheme de engleză, de descărcat gratuit și folosit acasă, împreună cu copilul.",
  alternates: { canonical: "/biblioteca/fise-si-scheme" },
};

export default function FiseSiScheme() {
  const lista = fise();
  return (
    <>
      <AntetPagina
        firimituri={[{ titlu: "Bibliotecă", href: "/biblioteca" }]}
        supratitlu="Bibliotecă · Fișe și scheme"
        titlu="Fișe și scheme de lucrat acasă"
        intro={<p>Materiale scurte, pe o pagină, pe care le puteți printa sau folosi direct de pe telefon.</p>}
        cale="/biblioteca/fise-si-scheme"
        numeFirimitura="Fișe și scheme"
      />
      <Bloc>
        <div className="grid gap-5 md:grid-cols-2 lg:grid-cols-3">
          {lista.map((r) => (
            <CardResursa key={r.slug} r={r} />
          ))}
        </div>
        <div className="mt-8">
          <DeCompletat>fișierele PDF, cu sigla și culorile noi (le pregătim în același stil).</DeCompletat>
        </div>
      </Bloc>
    </>
  );
}
