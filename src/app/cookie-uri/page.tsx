// Textul legal se completează înainte de lansare.
import type { Metadata } from "next";
import { AntetPagina, Bloc, DeCompletat } from "@/components/pagina";

export const metadata: Metadata = {
  title: "Politica de cookie-uri",
  robots: { index: false, follow: true },
};

export default function Pagina() {
  return (
    <>
      <AntetPagina supratitlu="Informații legale" titlu="Politica de cookie-uri" />
      <Bloc>
        <div className="max-w-3xl">
          <DeCompletat>textul complet: ce cookie-uri folosește site-ul și cum le puteți refuza. Operator: Caleidoscop Colours SRL.</DeCompletat>
        </div>
      </Bloc>
    </>
  );
}
