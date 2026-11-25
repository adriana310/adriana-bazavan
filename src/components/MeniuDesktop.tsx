"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";
import { ChevronDown } from "lucide-react";
import { meniu } from "@/lib/site";

function esteActiv(pathname: string, href: string) {
  return pathname === href || pathname.startsWith(href + "/");
}

export function MeniuDesktop() {
  const pathname = usePathname();

  return (
    <nav aria-label="Meniul principal">
      <ul className="flex items-center gap-1">
        {meniu.map((item) => {
          const activ = esteActiv(pathname, item.href);
          const clasaLink = `inline-flex items-center gap-1 rounded-full px-3.5 py-2 text-[0.95rem] font-medium transition-colors hover:bg-menta hover:text-smarald ${
            activ ? "text-smarald" : "text-verde-negru"
          }`;

          if (!item.copii) {
            return (
              <li key={item.href}>
                <Link href={item.href} className={clasaLink} aria-current={activ ? "page" : undefined}>
                  {item.titlu}
                </Link>
              </li>
            );
          }

          return (
            <li key={item.href} className="group relative">
              <Link href={item.href} className={clasaLink} aria-current={pathname === item.href ? "page" : undefined}>
                {item.titlu}
                <ChevronDown
                  aria-hidden
                  className="size-4 transition-transform duration-200 group-hover:rotate-180 group-focus-within:rotate-180"
                />
              </Link>
              {/* Al doilea nivel: apare la trecerea mouse-ului și la navigarea din tastatură */}
              <div className="invisible absolute left-1/2 top-full z-50 w-72 -translate-x-1/2 pt-2 opacity-0 transition-all duration-150 group-hover:visible group-hover:opacity-100 group-focus-within:visible group-focus-within:opacity-100">
                <ul className="rounded-2xl border border-linie bg-white p-2 shadow-[0_18px_40px_-18px_rgba(11,47,36,0.35)]">
                  {item.copii.map((copil) => {
                    const copilActiv = pathname === copil.href;
                    return (
                      <li key={copil.href}>
                        <Link
                          href={copil.href}
                          aria-current={copilActiv ? "page" : undefined}
                          className={`block rounded-xl px-4 py-3 transition-colors hover:bg-menta ${
                            copilActiv ? "bg-menta" : ""
                          }`}
                        >
                          <span className="block font-semibold text-smarald">{copil.titlu}</span>
                          {copil.descriere && (
                            <span className="block text-sm leading-snug text-verde-negru/75">{copil.descriere}</span>
                          )}
                        </Link>
                      </li>
                    );
                  })}
                </ul>
              </div>
            </li>
          );
        })}
      </ul>
    </nav>
  );
}
