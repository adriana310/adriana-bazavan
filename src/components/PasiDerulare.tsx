"use client";

import { useEffect, useRef, useState, type ReactNode } from "react";
import { InsignaPictograma, type NumePictograma } from "@/components/Pictograma";

type Pas = { pictograma: NumePictograma; titlu: string; text: string };

/**
 * „Pas cu pas”: pe măsură ce derulați, pasul din mijlocul ecranului se aprinde, ceilalți se estompează.
 * În stânga (pe calculator, fix pe ecran): un caleidoscop care se rotește cu derularea și o bară „Pasul X din 4”.
 */
export function PasiDerulare({ pasi, children }: { pasi: Pas[]; children: ReactNode }) {
  const [activ, setActiv] = useState(0);
  const lista = useRef<HTMLOListElement>(null);
  const panou = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const ol = lista.current;
    const p = panou.current;
    if (!ol || !p) return;

    const elemente = Array.from(ol.querySelectorAll<HTMLElement>("[data-pas]"));
    const observator = new IntersectionObserver(
      (intrari) => {
        for (const i of intrari) {
          if (i.isIntersecting) setActiv(Number(i.target.getAttribute("data-pas")));
        }
      },
      { rootMargin: "-42% 0px -42% 0px" },
    );
    elemente.forEach((e) => observator.observe(e));

    // Progresul prin listă (0 → 1), trimis în CSS ca --progres: rotește caleidoscopul și umple bara
    let cadru = 0;
    const actualizeaza = () => {
      cadru = 0;
      const r = ol.getBoundingClientRect();
      const progres = Math.min(1, Math.max(0, (window.innerHeight * 0.55 - r.top) / r.height));
      p.style.setProperty("--progres", progres.toFixed(3));
    };
    const laDerulare = () => {
      if (!cadru) cadru = requestAnimationFrame(actualizeaza);
    };
    actualizeaza();
    window.addEventListener("scroll", laDerulare, { passive: true });
    window.addEventListener("resize", laDerulare);
    return () => {
      observator.disconnect();
      window.removeEventListener("scroll", laDerulare);
      window.removeEventListener("resize", laDerulare);
      if (cadru) cancelAnimationFrame(cadru);
    };
  }, []);

  return (
    <div className="grid gap-10 lg:grid-cols-[0.85fr_1.15fr] lg:gap-16">
      <div ref={panou} className="lg:sticky lg:top-28 lg:self-start" style={{ ["--progres" as string]: 0 }}>
        {children}
        <div className="mt-10 hidden items-center gap-6 lg:flex">
          {/* eslint-disable-next-line @next/next/no-img-element */}
          <img
            src="/brand/simbol-verde-sofran.svg"
            alt=""
            aria-hidden
            className="size-28 shrink-0 motion-safe:transition-transform motion-safe:duration-150"
            style={{ transform: "rotate(calc(var(--progres) * 270deg))" }}
          />
          <div className="flex-1">
            <p className="font-titluri text-lg text-verde-negru/70">
              Pasul{" "}
              <span key={activ} className="cuvant font-semibold text-smarald">
                {activ + 1}
              </span>{" "}
              din {pasi.length}
            </p>
            <div className="mt-3 h-2 overflow-hidden rounded-full bg-smarald/10">
              <div
                className="h-full origin-left rounded-full bg-sofran"
                style={{ transform: "scaleX(var(--progres))" }}
              />
            </div>
          </div>
        </div>
      </div>

      <ol ref={lista} className="grid gap-4">
        {pasi.map((p, i) => {
          const eActiv = i === activ;
          const trecut = i < activ;
          return (
            <li
              key={p.titlu}
              data-pas={i}
              className={`flex gap-5 rounded-[1.5rem] border p-6 transition-all duration-500 sm:p-7 ${
                eActiv
                  ? "scale-100 border-sofran/60 bg-white opacity-100 shadow-[0_24px_50px_-28px_rgba(11,47,36,0.55)]"
                  : "scale-[0.97] border-transparent bg-menta/60 opacity-55"
              }`}
            >
              <div className="flex flex-col items-center gap-3">
                <span className={`transition-transform duration-500 ${eActiv ? "scale-110" : ""}`}>
                  <InsignaPictograma nume={p.pictograma} ton={eActiv ? "galben" : "alb"} />
                </span>
                {i < pasi.length - 1 && (
                  <span className="relative w-0.5 flex-1 overflow-hidden rounded-full bg-smarald/15">
                    <span
                      className={`absolute inset-0 origin-top rounded-full bg-sofran transition-transform duration-700 ${
                        trecut || eActiv ? "scale-y-100" : "scale-y-0"
                      }`}
                    />
                  </span>
                )}
              </div>
              <div>
                <span className="font-titluri text-lg font-semibold text-auriu-inchis">Pasul {i + 1}</span>
                <h3 className="mt-1 text-xl sm:text-2xl">{p.titlu}</h3>
                <p className="mt-2 text-verde-negru/85">{p.text}</p>
              </div>
            </li>
          );
        })}
      </ol>
    </div>
  );
}
