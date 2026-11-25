"use client";

import { useState } from "react";
import { Pictograma } from "@/components/Pictograma";
import { PictogramaWhatsApp } from "@/components/PictogramaWhatsApp";
import { site } from "@/lib/site";

/**
 * „Trimiteți unei prietene”: recomandările sunt drumul prin care vin cei mai mulți clienți.
 * Pe telefon deschide meniul de trimitere al telefonului; altfel arată WhatsApp, Facebook și copierea linkului.
 */
export function Distribuie({
  cale,
  titlu,
  text = "Ți-o recomand pe Adriana Băzăvan, English Teacher.",
  eticheta = "Trimiteți unei prietene",
}: {
  cale: string;
  titlu: string;
  text?: string;
  eticheta?: string;
}) {
  const [deschis, setDeschis] = useState(false);
  const [copiat, setCopiat] = useState(false);
  const url = `${site.url}${cale}`;

  async function laClic() {
    if (typeof navigator !== "undefined" && "share" in navigator) {
      try {
        await navigator.share({ title: titlu, text, url });
        return;
      } catch {
        // omul a închis meniul; nu facem nimic
        return;
      }
    }
    setDeschis(!deschis);
  }

  async function copiaza() {
    try {
      await navigator.clipboard.writeText(url);
      setCopiat(true);
      setTimeout(() => setCopiat(false), 2500);
    } catch {
      setCopiat(false);
    }
  }

  const mesaj = encodeURIComponent(`${text} ${url}`);

  return (
    <div className="relative inline-block">
      <button
        type="button"
        onClick={laClic}
        aria-expanded={deschis}
        className="inline-flex items-center gap-2 rounded-full border border-smarald bg-white px-5 py-2.5 font-semibold text-smarald transition-colors hover:bg-menta"
      >
        <Pictograma nume="share" className="size-5" />
        {eticheta}
      </button>
      {deschis && (
        <ul className="absolute left-0 top-full z-30 mt-2 grid w-64 gap-1 rounded-2xl border border-linie bg-white p-2 shadow-[0_18px_40px_-18px_rgba(11,47,36,0.35)]">
          <li>
            <a
              href={`https://wa.me/?text=${mesaj}`}
              target="_blank"
              rel="noopener"
              className="flex items-center gap-3 rounded-xl px-3 py-2.5 hover:bg-menta"
            >
              <PictogramaWhatsApp className="size-5 text-smarald" />
              Pe WhatsApp
            </a>
          </li>
          <li>
            <a
              href={`https://www.facebook.com/sharer/sharer.php?u=${encodeURIComponent(url)}`}
              target="_blank"
              rel="noopener"
              className="flex items-center gap-3 rounded-xl px-3 py-2.5 hover:bg-menta"
            >
              <Pictograma nume="groups" className="size-5 text-smarald" />
              Pe Facebook
            </a>
          </li>
          <li>
            <button
              type="button"
              onClick={copiaza}
              className="flex w-full items-center gap-3 rounded-xl px-3 py-2.5 text-left hover:bg-menta"
            >
              <Pictograma nume="link" className="size-5 text-smarald" />
              <span role="status">{copiat ? "Linkul a fost copiat" : "Copiați linkul"}</span>
            </button>
          </li>
        </ul>
      )}
    </div>
  );
}
