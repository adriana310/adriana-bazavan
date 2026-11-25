// Textul legal se completează înainte de lansare.
import type { Metadata } from "next";
import { AntetPagina, Bloc, DeCompletat } from "@/components/pagina";

export const metadata: Metadata = {
  title: "Termeni și condiții",
  robots: { index: false, follow: true },
};

export default function Pagina() {
  return (
    <>
      <AntetPagina supratitlu="Informații legale" titlu="Termeni și condiții" />
      <Bloc>
        <div className="max-w-3xl">
          <DeCompletat>textul complet: regulile de folosire a site-ului și a materialelor din Bibliotecă. Operator: Caleidoscop Colours SRL.</DeCompletat>
        </div>
      </Bloc>
    </>
  );
}
