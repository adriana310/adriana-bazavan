// Textul legal se completează înainte de lansare.
import type { Metadata } from "next";
import { AntetPagina, Bloc, DeCompletat } from "@/components/pagina";

export const metadata: Metadata = {
  title: "Politica de confidențialitate",
  robots: { index: false, follow: true },
};

export default function Pagina() {
  return (
    <>
      <AntetPagina supratitlu="Informații legale" titlu="Politica de confidențialitate" />
      <Bloc>
        <div className="max-w-3xl">
          <DeCompletat>textul complet: cum folosesc datele trimise prin formular, WhatsApp și newsletter. Operator: Caleidoscop Colours SRL.</DeCompletat>
        </div>
      </Bloc>
    </>
  );
}
