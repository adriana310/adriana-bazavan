"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";
import { useEffect, useState, useSyncExternalStore } from "react";
import { createPortal } from "react-dom";
import { Pictograma } from "@/components/Pictograma";
import { meniu, site } from "@/lib/site";
import { PictogramaWhatsApp } from "@/components/PictogramaWhatsApp";

const nimic = () => () => {};

/**
 * Meniul de pe telefon: categorii și subcategorii, pe două niveluri.
 * Panoul e montat direct în <body>, pentru că antetul are backdrop-filter.
 */
export function MeniuMobil() {
  const [deschis, setDeschis] = useState(false);
  const [extins, setExtins] = useState<string | null>(null);
  const pathname = usePathname();
  const peClient = useSyncExternalStore(nimic, () => true, () => false);

  // Se închide singur când se schimbă pagina
  const [ultimaPagina, setUltimaPagina] = useState(pathname);
  if (pathname !== ultimaPagina) {
    setUltimaPagina(pathname);
    setDeschis(false);
  }

  useEffect(() => {
    if (!deschis) return;
    const inainte = document.body.style.overflow;
    document.body.style.overflow = "hidden";
    const laTasta = (e: KeyboardEvent) => {
      if (e.key === "Escape") setDeschis(false);
    };
    window.addEventListener("keydown", laTasta);
    return () => {
      document.body.style.overflow = inainte;
      window.removeEventListener("keydown", laTasta);
    };
  }, [deschis]);

  const panou = (
    <div
      id="meniu-mobil"
      className={`fixed inset-x-0 bottom-0 top-[4.25rem] z-30 overflow-y-auto bg-white transition-opacity duration-200 lg:hidden ${
        deschis ? "visible opacity-100" : "invisible opacity-0"
      }`}
    >
      <nav aria-label="Meniul principal" className="mx-auto max-w-md px-4 pb-28 pt-4">
        <ul className="divide-y divide-linie">
          <li>
            <Link href="/" className="block py-4 font-titluri text-2xl text-smarald">
              Acasă
            </Link>
          </li>
          {meniu.map((item) => (
            <li key={item.href}>
              {item.copii ? (
                <>
                  <button
                    type="button"
                    className="flex w-full items-center justify-between py-4 text-left font-titluri text-2xl text-smarald"
                    aria-expanded={extins === item.href}
                    onClick={() => setExtins(extins === item.href ? null : item.href)}
                  >
                    {item.titlu}
                    <Pictograma nume="expand_more" className={`size-6 transition-transform ${extins === item.href ? "rotate-180" : ""}`}
                    />
                  </button>
                  <ul className={`grid gap-1 pb-4 ${extins === item.href ? "" : "hidden"}`}>
                    <li>
                      <Link href={item.href} className="block rounded-xl bg-menta px-4 py-3 font-semibold text-smarald">
                        Totul despre {item.titlu.toLowerCase()}
                      </Link>
                    </li>
                    {item.copii.map((copil) => (
                      <li key={copil.href}>
                        <Link href={copil.href} className="block rounded-xl px-4 py-3 hover:bg-menta">
                          <span className="block font-semibold text-smarald">{copil.titlu}</span>
                          {copil.descriere && (
                            <span className="block text-sm text-verde-negru/75">{copil.descriere}</span>
                          )}
                        </Link>
                      </li>
                    ))}
                  </ul>
                </>
              ) : (
                <Link href={item.href} className="block py-4 font-titluri text-2xl text-smarald">
                  {item.titlu}
                </Link>
              )}
            </li>
          ))}
          <li>
            <Link href="/contact" className="block py-4 font-titluri text-2xl text-smarald">
              Contact
            </Link>
          </li>
        </ul>
        <div className="mt-6 grid gap-3">
          <a
            href={site.whatsapp}
            className="flex items-center justify-center gap-2 rounded-full bg-smarald px-5 py-3.5 font-semibold text-white"
          >
            <PictogramaWhatsApp className="size-5" />
            Scrieți-mi pe WhatsApp
          </a>
          <a
            href={site.telefonLink}
            className="flex items-center justify-center gap-2 rounded-full border border-smarald px-5 py-3.5 font-semibold text-smarald"
          >
            <Pictograma nume="call" className="size-5" />
            {site.telefonAfisat}
          </a>
        </div>
      </nav>
    </div>
  );

  return (
    <div className="lg:hidden">
      <button
        type="button"
        onClick={() => setDeschis(!deschis)}
        aria-expanded={deschis}
        aria-controls="meniu-mobil"
        className="inline-flex items-center gap-2 rounded-full border border-linie px-4 py-2 text-[0.95rem] font-semibold text-smarald"
      >
        {deschis ? <Pictograma nume="close" className="size-5" /> : <Pictograma nume="menu" className="size-5" />}
        {deschis ? "Închide" : "Meniu"}
      </button>
      {peClient && createPortal(panou, document.body)}
    </div>
  );
}
