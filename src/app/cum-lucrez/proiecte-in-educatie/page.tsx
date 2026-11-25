// Texte de lucru; versiunea finală o scrie Adriana.
import type { Metadata } from "next";
import { CalendarCheck, Calculator, ListChecks, Users } from "lucide-react";
import { AntetPagina, Bloc, DeCompletat, ScrietiMi } from "@/components/pagina";

export const metadata: Metadata = {
  title: "Proiecte în educație",
  description:
    "Sprijin pentru proiecte și evenimente educaționale: planificare, buget, organizare și moderarea sesiunilor de lucru.",
};

const ceFac = [
  { icon: CalendarCheck, titlu: "Planificare", text: "Calendarul proiectului, de la idee la eveniment." },
  { icon: Calculator, titlu: "Buget", text: "Bugetul și urmărirea lui pe parcurs." },
  { icon: ListChecks, titlu: "Organizare", text: "Sarcinile echipei, pe pași clari." },
  { icon: Users, titlu: "Moderare", text: "Sesiunile de lucru și de idei ale echipei." },
];

export default function ProiecteInEducatie() {
  return (
    <>
      <AntetPagina
        firimituri={[{ titlu: "Cum lucrez", href: "/cum-lucrez" }]}
        supratitlu="Proiecte în educație"
        titlu="Sprijin pentru proiectele educaționale"
        intro={
          <p>
            Pe lângă ore, lucrez în proiecte educaționale, alături de profesori care inovează școala. Mă ocup de partea
            care ține proiectul în picioare.
          </p>
        }
      />

      <Bloc supratitlu="Ce fac în proiecte">
        <ul className="grid gap-5 sm:grid-cols-2 lg:grid-cols-4">
          {ceFac.map((c) => (
            <li key={c.titlu} className="rounded-[1.5rem] border border-linie p-6">
              <span className="grid size-11 place-items-center rounded-2xl bg-menta">
                <c.icon aria-hidden className="size-5 text-smarald" />
              </span>
              <h3 className="mt-4 text-xl">{c.titlu}</h3>
              <p className="mt-2 text-verde-negru/85">{c.text}</p>
            </li>
          ))}
        </ul>
        <div className="mt-8">
          <DeCompletat>
            proiectele și partenerii care pot fi numiți public și fotografii de la evenimente, cu acordul celor din
            ele.
          </DeCompletat>
        </div>
      </Bloc>

      <ScrietiMi titlu="Lucrăm împreună la un proiect?" />
    </>
  );
}
