// Texte de lucru; versiunea finală o scrie Adriana.
import type { Metadata } from "next";
import { AntetPagina, Bloc, CarduriSubpagini, DeCompletat } from "@/components/pagina";
import { CardResursa } from "@/components/CardResursa";
import { FormularNewsletter } from "@/components/FormularNewsletter";
import { resurse } from "@/lib/biblioteca";
import { meniu } from "@/lib/site";

export const metadata: Metadata = {
  title: "Bibliotecă",
  description:
    "Povești audio în engleză citite de Adriana Băzăvan și fișe de lucru pe care le puteți folosi acasă, împreună cu copilul.",
};

export default function Biblioteca() {
  const subpagini = meniu.find((m) => m.href === "/biblioteca")?.copii ?? [];
  return (
    <>
      <AntetPagina
        supratitlu="Bibliotecă"
        titlu="Povești și materiale pentru acasă"
        intro={
          <p>
            Povești audio citite de mine, în engleză, și fișe pe care le puteți folosi împreună cu copilul, între
            întâlniri. Le puteți asculta și descărca gratuit.
          </p>
        }
      />

      <Bloc>
        <CarduriSubpagini pagini={subpagini} />
      </Bloc>

      <Bloc fundal="menta" supratitlu="Cele mai noi" titlu="Din Bibliotecă">
        <div className="grid gap-5 md:grid-cols-3">
          {resurse.map((r) => (
            <CardResursa key={r.slug} r={r} />
          ))}
        </div>
        <div className="mt-8">
          <DeCompletat>primele povești înregistrate și primele fișe.</DeCompletat>
        </div>
      </Bloc>

      <Bloc fundal="galben" supratitlu="O scrisoare pe lună" titlu="Aflați primii când apare o poveste nouă">
        <FormularNewsletter />
      </Bloc>
    </>
  );
}
