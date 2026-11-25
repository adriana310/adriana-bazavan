"use client";

import { useState } from "react";
import { caiBuline, caiStelute, caiUmbrele, transformSimbol } from "@/lib/simbol-cai";

type Parte = "umbrela" | "steluta" | "margareta";

const parti: { id: Parte; simbol: string; face: string; valoare: string; sens: string }[] = [
  { id: "umbrela", simbol: "Umbrela", face: "protejează", valoare: "Bunătatea", sens: "Aici poți greși în siguranță." },
  {
    id: "steluta",
    simbol: "Steluța",
    face: "strălucește",
    valoare: "Disciplina",
    sens: "Antrenamentul duce la momentul „am reușit”.",
  },
  {
    id: "margareta",
    simbol: "Margareta",
    face: "potențează frumosul",
    valoare: "Educația",
    sens: "Învățarea scoate la iveală ce e deja bun în om.",
  },
];

/**
 * Caleidoscopul „explicat”: alegeți un simbol și se aprinde în desen.
 * Margareta nu e desenată: apare din spațiul dintre steluțe, de aceea o colorăm prin fundal.
 */
export function CaleidoscopExplicat() {
  const [activ, setActiv] = useState<Parte | null>(null);
  const stins = (p: Parte) => activ !== null && activ !== p;

  return (
    <div className="grid items-center gap-10 md:grid-cols-[0.9fr_1.1fr]">
      <svg
        viewBox="0 0 2880 2880"
        role="img"
        aria-label="Caleidoscopul: opt umbrele, opt steluțe și o margaretă în mijloc"
        className="mx-auto w-full max-w-80"
      >
        <circle
          cx="1440"
          cy="1440"
          r="720"
          className={`transition-all duration-500 ${activ === "margareta" ? "fill-galben-pal" : "fill-transparent"}`}
        />
        <g transform={transformSimbol}>
          <path
            d={caiUmbrele[0]}
            className={`transition-[fill,opacity] duration-500 ${activ === "umbrela" ? "fill-sofran" : "fill-smarald"} ${
              stins("umbrela") ? "opacity-20" : ""
            }`}
          />
          <path
            d={caiStelute[0]}
            className={`transition-[fill,opacity] duration-500 ${activ === "steluta" ? "fill-sofran" : "fill-smarald"} ${
              stins("steluta") && activ !== "margareta" ? "opacity-20" : ""
            }`}
          />
          <path
            d={caiBuline[0]}
            className={`transition-[fill,opacity] duration-500 ${activ === "margareta" ? "fill-sofran" : "fill-smarald"} ${
              stins("margareta") ? "opacity-20" : ""
            }`}
          />
        </g>
      </svg>

      <ul className="grid gap-3" onMouseLeave={() => setActiv(null)}>
        {parti.map((p) => (
          <li key={p.id}>
            <button
              type="button"
              onMouseEnter={() => setActiv(p.id)}
              onFocus={() => setActiv(p.id)}
              onBlur={() => setActiv(null)}
              onClick={() => setActiv(p.id)}
              aria-pressed={activ === p.id}
              className={`w-full rounded-[1.25rem] p-5 text-left transition-colors ${
                activ === p.id ? "bg-white shadow-[0_14px_32px_-20px_rgba(11,47,36,0.5)]" : "bg-white/70 hover:bg-white"
              }`}
            >
              <span className="block font-titluri text-xl font-semibold text-smarald">
                {p.simbol} <span className="font-text text-base font-normal text-verde-negru/70">· {p.face}</span>
              </span>
              <span className="mt-1 block">
                <span className="font-semibold">{p.valoare}.</span> {p.sens}
              </span>
            </button>
          </li>
        ))}
      </ul>
    </div>
  );
}
