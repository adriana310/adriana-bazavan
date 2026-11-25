"use client";

import { useEffect, useId, useRef, type ReactNode } from "react";

/*
  Un caleidoscop adevărat, ca jucăria din copilăria Adrianei:
  câteva „cioburi” (steluțe, petale, umbreluțe, buline) în culorile brandului, oglindite în 16 felii.
  Se întoarce încet singur; pe calculator urmează cursorul, pe orice ecran se mișcă la derulare.
  Cu mișcarea redusă din setări, rămâne un desen fix. Se oprește când nu e pe ecran.
*/

const CULORI = ["#0A6B4C", "#F0B429", "#9ED3B5", "#FFF3CF", "#E6F5EC", "#0A6B4C", "#F0B429", "#ffffff"];

type Ciob = { tip: "stea" | "petala" | "bulina" | "umbrela"; x: number; y: number; r: number; unghi: number; culoare: string };

// Generator pseudo-aleator cu „sămânță”: aceleași cioburi pe server și în browser
function aleator(samanta: number) {
  let a = samanta;
  return () => {
    a |= 0;
    a = (a + 0x6d2b79f5) | 0;
    let t = Math.imul(a ^ (a >>> 15), 1 | a);
    t = (t + Math.imul(t ^ (t >>> 7), 61 | t)) ^ t;
    return ((t ^ (t >>> 14)) >>> 0) / 4294967296;
  };
}

function cioburi(): Ciob[] {
  const r = aleator(1985);
  const tipuri: Ciob["tip"][] = ["stea", "petala", "bulina", "umbrela", "stea", "petala"];
  return Array.from({ length: 30 }, (_, i) => ({
    tip: tipuri[i % tipuri.length],
    x: -10 + r() * 130,
    y: -35 + r() * 95,
    r: 4 + r() * 11,
    unghi: r() * 360,
    culoare: CULORI[Math.floor(r() * CULORI.length)],
  }));
}

// Calculate o singură dată: aceleași cioburi la fiecare afișare
const LISTA = cioburi();

function Forma({ c }: { c: Ciob }) {
  const t = `translate(${c.x.toFixed(2)} ${c.y.toFixed(2)}) rotate(${c.unghi.toFixed(1)}) scale(${(c.r / 10).toFixed(3)})`;
  switch (c.tip) {
    case "stea":
      // steluța cu patru colțuri, ca în simbolul ei
      return <path transform={t} fill={c.culoare} d="M0 -10 Q1.6 -1.6 10 0 Q1.6 1.6 0 10 Q-1.6 1.6 -10 0 Q-1.6 -1.6 0 -10Z" />;
    case "petala":
      return <ellipse transform={t} fill={c.culoare} rx="3.6" ry="10" />;
    case "bulina":
      return <circle transform={t} fill={c.culoare} r="4.5" />;
    case "umbrela":
      return (
        <path
          transform={t}
          fill={c.culoare}
          d="M-10 1 A10 10 0 0 1 10 1 Q7.5 -1.5 5 1 Q2.5 -1.5 0 1 Q-2.5 -1.5 -5 1 Q-7.5 -1.5 -10 1Z"
        />
      );
  }
}

export function CaleidoscopViu({ centru, className = "" }: { centru?: ReactNode; className?: string }) {
  const id = useId().replace(/:/g, "");
  const grup = useRef<SVGGElement>(null);
  const cutie = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const g = grup.current;
    const el = cutie.current;
    if (!g || !el) return;

    const fix = window.matchMedia("(prefers-reduced-motion: reduce)").matches;
    let tinta = { x: 0, y: 0 };
    const acum = { x: 0, y: 0 };
    let vizibil = true;
    let cadru = 0;
    const start = performance.now();

    const deseneaza = (ms: number) => {
      const t = (ms - start) / 1000;
      acum.x += (tinta.x - acum.x) * 0.05;
      acum.y += (tinta.y - acum.y) * 0.05;
      const derulare = window.scrollY * 0.06;
      const rot = t * 5 + derulare + acum.x * 25;
      const dx = Math.sin(t * 0.17) * 16 + acum.x * 22;
      const dy = Math.cos(t * 0.13) * 10 + acum.y * 16;
      g.setAttribute("transform", `translate(${dx.toFixed(2)} ${dy.toFixed(2)}) rotate(${rot.toFixed(2)} 45 10)`);
    };

    if (fix) {
      deseneaza(start + 4000);
      return;
    }

    const bucla = (ms: number) => {
      if (vizibil && !document.hidden) deseneaza(ms);
      cadru = requestAnimationFrame(bucla);
    };
    cadru = requestAnimationFrame(bucla);

    const laMiscare = (e: PointerEvent) => {
      const b = el.getBoundingClientRect();
      tinta = {
        x: Math.max(-1, Math.min(1, ((e.clientX - b.left) / b.width) * 2 - 1)),
        y: Math.max(-1, Math.min(1, ((e.clientY - b.top) / b.height) * 2 - 1)),
      };
    };
    const laIesire = () => {
      tinta = { x: 0, y: 0 };
    };
    const observator = new IntersectionObserver(([intrare]) => {
      vizibil = intrare.isIntersecting;
    });
    observator.observe(el);
    window.addEventListener("pointermove", laMiscare, { passive: true });
    el.addEventListener("pointerleave", laIesire);

    return () => {
      cancelAnimationFrame(cadru);
      observator.disconnect();
      window.removeEventListener("pointermove", laMiscare);
      el.removeEventListener("pointerleave", laIesire);
    };
  }, []);

  // 16 felii: 8 perechi, a doua din fiecare pereche oglindită, ca într-un caleidoscop cu oglinzi
  const felii = Array.from({ length: 16 }, (_, k) => {
    const j = Math.floor(k / 2);
    return k % 2 === 0 ? `rotate(${j * 45})` : `rotate(${j * 45 + 45}) scale(1 -1)`;
  });

  return (
    <div ref={cutie} className={`relative aspect-square ${className}`}>
      <svg viewBox="-100 -100 200 200" aria-hidden className="size-full drop-shadow-[0_30px_50px_rgba(11,47,36,0.18)]">
        <defs>
          <clipPath id={`felie-${id}`}>
            {/* felia de 22,5°, puțin mai lată, ca să nu se vadă rosturi între oglinzi */}
            <path d="M0 0 L100 -0.52 A100 100 0 0 1 92.19 38.75 Z" />
          </clipPath>
          <g id={`cioburi-${id}`}>
            <g ref={grup}>
              {LISTA.map((c, i) => (
                <Forma key={i} c={c} />
              ))}
            </g>
          </g>
        </defs>
        <circle r="100" fill="#ffffff" />
        <circle r="100" fill="#E6F5EC" opacity="0.55" />
        {felii.map((tr, k) => (
          <g key={k} transform={tr}>
            <g clipPath={`url(#felie-${id})`}>
              <use href={`#cioburi-${id}`} />
            </g>
          </g>
        ))}
        <circle r="99" fill="none" stroke="#0A6B4C" strokeWidth="1.6" />
        <circle r="95" fill="none" stroke="#F0B429" strokeWidth="0.8" strokeDasharray="1.5 3" />
      </svg>
      {centru && (
        <div className="absolute left-1/2 top-1/2 aspect-square w-[42%] -translate-x-1/2 -translate-y-1/2 overflow-hidden rounded-full border-[6px] border-white bg-white shadow-[0_12px_30px_-10px_rgba(11,47,36,0.45)]">
          {centru}
        </div>
      )}
    </div>
  );
}
