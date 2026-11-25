// Texte de lucru; versiunea finală o scrie Adriana.
import type { Metadata } from "next";
import type { ReactNode } from "react";
import { AntetPagina, Bloc, DeCompletat } from "@/components/pagina";
import { Pictograma } from "@/components/Pictograma";
import { PictogramaWhatsApp } from "@/components/PictogramaWhatsApp";
import { FormularContact } from "./FormularContact";
import { site } from "@/lib/site";

export const metadata: Metadata = {
  title: "Contact",
  description: "Scrieți-mi pe WhatsApp, sunați-mă sau lăsați un mesaj. Răspund în cel mult o zi lucrătoare.",
  alternates: { canonical: "/contact" },
};

export default function Contact() {
  const cai: { pictograma: ReactNode; titlu: string; text: string; href: string }[] = [
    {
      pictograma: <PictogramaWhatsApp className="size-6 text-smarald" />,
      titlu: "WhatsApp",
      text: "Cel mai repede",
      href: site.whatsapp,
    },
    {
      pictograma: <Pictograma nume="call" className="size-6 text-smarald" />,
      titlu: site.telefonAfisat,
      text: "Telefon",
      href: site.telefonLink,
    },
    {
      pictograma: <Pictograma nume="mail" className="size-6 text-smarald" />,
      titlu: site.email,
      text: "Email",
      href: `mailto:${site.email}`,
    },
  ];

  return (
    <>
      <AntetPagina
        supratitlu="Contact"
        titlu="Scrieți-mi și vedem împreună de unde pornim"
        intro={<p>Răspund în cel mult o zi lucrătoare. Prima întâlnire e o discuție.</p>}
        cale="/contact"
        numeFirimitura="Contact"
      />

      <Bloc>
        <div className="grid grid-cols-1 gap-12 lg:grid-cols-[0.9fr_1.1fr]">
          <div className="grid min-w-0 grid-cols-1 content-start gap-4">
            {cai.map((c) => (
              <a
                key={c.text}
                href={c.href}
                className="apare flex items-center gap-4 rounded-[1.25rem] border border-linie p-5 transition-colors hover:bg-menta/50"
              >
                <span className="grid size-12 shrink-0 place-items-center rounded-2xl bg-menta">{c.pictograma}</span>
                <span className="min-w-0">
                  <span className="block text-sm text-verde-negru/70">{c.text}</span>
                  <span className="block truncate font-titluri text-lg font-semibold text-smarald">{c.titlu}</span>
                </span>
              </a>
            ))}
            <div className="apare flex items-center gap-4 rounded-[1.25rem] border border-linie p-5">
              <span className="grid size-12 shrink-0 place-items-center rounded-2xl bg-menta">
                <Pictograma nume="location_on" className="size-6 text-smarald" />
              </span>
              <span>
                <span className="block text-sm text-verde-negru/70">Unde lucrez</span>
                <span className="block font-titluri text-lg font-semibold text-smarald">{site.zona}</span>
              </span>
            </div>
            <div id="programare" className="apare scroll-mt-28 rounded-[1.25rem] bg-galben-pal/60 p-5">
              <p className="inline-flex items-center gap-2 font-semibold text-verde-negru">
                <Pictograma nume="calendar_month" className="size-5 text-auriu-inchis" />
                Programați o discuție de 30 de minute
              </p>
              <div className="mt-3">
                <DeCompletat>legătura pentru programarea discuției.</DeCompletat>
              </div>
            </div>
          </div>

          <div className="min-w-0">
            <h2 className="text-2xl sm:text-3xl">Sau lăsați-mi un mesaj aici</h2>
            <div className="mt-6">
              <FormularContact />
            </div>
          </div>
        </div>
      </Bloc>
    </>
  );
}
