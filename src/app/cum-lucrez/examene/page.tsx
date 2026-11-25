// Texte de lucru. Regulile oficiale se verifică o dată pe an; nu promitem echivalări.
import type { Metadata } from "next";
import { AntetPagina, Bloc, DeCompletat, ScrietiMi } from "@/components/pagina";

export const metadata: Metadata = {
  title: "Pregătire pentru examene de limbă engleză",
  description:
    "Pregătire unu la unu pentru examene de limbă engleză, de exemplu Cambridge PET (B1). Obiectiv clar, pași mici, bilanț la 10-12 ședințe.",
};

export default function Examene() {
  return (
    <>
      <AntetPagina
        firimituri={[{ titlu: "Cum lucrez", href: "/cum-lucrez" }]}
        supratitlu="Examene de limbă"
        titlu="Examenul, ca un antrenament cu pași clari"
        intro={
          <p>
            Pregătesc elevi și adulți pentru examenele de limbă engleză, după metodologia Cambridge. Stabilim nivelul
            de la care pornim, data examenului și pașii până acolo.
          </p>
        }
      />

      <Bloc supratitlu="Un exemplu" titlu="Cât durează pregătirea">
        <p className="max-w-2xl text-lg text-verde-negru/85">
          Un elev de clasa a X-a care e deja la nivel B1 și vrea examenul PET are nevoie, de obicei, de cam 3 luni (10-12
          săptămâni) de pregătire strict pentru examen. Pentru mulți adolescenți, drumul cu mine se încheie exact acolo,
          cu certificatul PET în mână.
        </p>
      </Bloc>

      <Bloc fundal="menta" supratitlu="De știut" titlu="Ce înseamnă un certificat Cambridge">
        <ul className="grid max-w-3xl gap-3 text-verde-negru/85">
          <li className="rounded-xl bg-white p-4">
            La examenele Cambridge pentru copii (Starters, Movers, Flyers) nu există „picat”: fiecare copil primește un
            certificat, cu scuturi pentru fiecare competență.
          </li>
          <li className="rounded-xl bg-white p-4">
            Certificatele pot fi recunoscute la unele examene din școală. Regulile se schimbă, așa că le verificăm
            împreună pentru anul dumneavoastră.
          </li>
        </ul>
        <div className="mt-8">
          <DeCompletat>lista exactă a examenelor pe care le pregătește Adriana și rezultate reale, cu acord.</DeCompletat>
        </div>
      </Bloc>

      <ScrietiMi />
    </>
  );
}
