import Link from "next/link";
import { Pictograma } from "@/components/Pictograma";
import { Logo } from "@/components/Logo";
import { PictogramaWhatsApp } from "@/components/PictogramaWhatsApp";
import { meniu, site } from "@/lib/site";

export function Subsol() {
  const cumLucrez = meniu.find((m) => m.href === "/cum-lucrez");
  const an = 2026;

  return (
    <footer className="mt-auto bg-menta">
      <div className="mx-auto grid max-w-6xl gap-10 px-4 py-14 sm:grid-cols-2 sm:px-6 lg:grid-cols-[1.2fr_0.9fr_1fr_1.5fr]">
        <div>
          <Logo />
          <p className="mt-4 max-w-xs text-[0.95rem] text-verde-negru/80">
            {site.rol} · engleză unu la unu, online și în București.
          </p>
        </div>

        <div>
          <h2 className="font-text text-sm font-semibold uppercase tracking-[0.08em] text-auriu-inchis">Pagini</h2>
          <ul className="mt-4 grid gap-2 text-[0.95rem]">
            {meniu.map((m) => (
              <li key={m.href}>
                <Link href={m.href} className="hover:text-smarald hover:underline">
                  {m.titlu}
                </Link>
              </li>
            ))}
            <li>
              <Link href="/contact" className="hover:text-smarald hover:underline">
                Contact
              </Link>
            </li>
          </ul>
        </div>

        <div>
          <h2 className="font-text text-sm font-semibold uppercase tracking-[0.08em] text-auriu-inchis">Cum lucrez</h2>
          <ul className="mt-4 grid gap-2 text-[0.95rem]">
            {cumLucrez?.copii?.map((m) => (
              <li key={m.href}>
                <Link href={m.href} className="hover:text-smarald hover:underline">
                  {m.titlu}
                </Link>
              </li>
            ))}
          </ul>
        </div>

        <div>
          <h2 className="font-text text-sm font-semibold uppercase tracking-[0.08em] text-auriu-inchis">Scrieți-mi</h2>
          <ul className="mt-4 grid gap-3 text-[0.95rem]">
            <li>
              <a href={site.whatsapp} className="inline-flex items-center gap-2 hover:text-smarald hover:underline">
                <PictogramaWhatsApp className="size-4 text-smarald" />
                WhatsApp
              </a>
            </li>
            <li>
              <a href={site.telefonLink} className="inline-flex items-center gap-2 hover:text-smarald hover:underline">
                <Pictograma nume="call" className="size-4 text-smarald" />
                {site.telefonAfisat}
              </a>
            </li>
            <li>
              <a href={`mailto:${site.email}`} className="inline-flex items-center gap-2 hover:text-smarald hover:underline">
                <Pictograma nume="mail" className="size-4 shrink-0 text-smarald" />
                {site.email}
              </a>
            </li>
            <li className="inline-flex items-center gap-2">
              <Pictograma nume="location_on" className="size-4 text-smarald" />
              {site.zona}
            </li>
          </ul>
        </div>
      </div>

      <div className="border-t border-linie">
        <div className="mx-auto flex max-w-6xl flex-col gap-3 px-4 py-6 text-sm text-verde-negru/75 sm:px-6 md:flex-row md:items-center md:justify-between">
          <p>
            © {an} {site.firma.nume}
            {site.firma.cui ? ` · CUI ${site.firma.cui}` : " · CUI de completat"}
            {site.firma.registru ? ` · ${site.firma.registru}` : ""}
          </p>
          <ul className="flex flex-wrap gap-x-5 gap-y-2">
            <li>
              <Link href="/confidentialitate" className="hover:text-smarald hover:underline">
                Confidențialitate
              </Link>
            </li>
            <li>
              <Link href="/cookie-uri" className="hover:text-smarald hover:underline">
                Cookie-uri
              </Link>
            </li>
            <li>
              <Link href="/termeni" className="hover:text-smarald hover:underline">
                Termeni
              </Link>
            </li>
            <li>
              <a href="https://anpc.ro/ce-este-sal/" target="_blank" rel="noopener" className="hover:text-smarald hover:underline">
                ANPC · SAL
              </a>
            </li>
          </ul>
        </div>
      </div>
    </footer>
  );
}
