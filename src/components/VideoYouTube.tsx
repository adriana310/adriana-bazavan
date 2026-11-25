"use client";

import { useState } from "react";
import { Pictograma } from "@/components/Pictograma";

/**
 * Video de pe YouTube, ca la Poveștile Cristinei (modelul dat de Adriana).
 * Se încarcă abia la apăsare, de pe youtube-nocookie.com: pagina rămâne rapidă și fără cookie-uri YouTube până atunci.
 */
export function VideoYouTube({ id, titlu }: { id: string; titlu: string }) {
  const [porneste, setPorneste] = useState(false);

  if (porneste) {
    return (
      <div className="aspect-video overflow-hidden rounded-[1.5rem] bg-verde-negru">
        <iframe
          src={`https://www.youtube-nocookie.com/embed/${encodeURIComponent(id)}?autoplay=1&rel=0`}
          title={titlu}
          allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
          allowFullScreen
          className="size-full"
        />
      </div>
    );
  }

  return (
    <button
      type="button"
      onClick={() => setPorneste(true)}
      className="group relative grid aspect-video w-full place-items-center overflow-hidden rounded-[1.5rem] bg-menta"
      aria-label={`Porniți video: ${titlu}`}
    >
      {/* eslint-disable-next-line @next/next/no-img-element */}
      <img
        src="/brand/simbol-verde-sofran.svg"
        alt=""
        className="pointer-events-none absolute -right-10 -top-10 w-64 opacity-20"
      />
      <span className="grid size-20 place-items-center rounded-full bg-smarald text-white transition-transform group-hover:scale-105">
        <Pictograma nume="play_arrow" className="size-10" />
      </span>
      <span className="absolute bottom-4 left-5 text-sm text-verde-negru/70">
        Video de pe YouTube · se încarcă la apăsare
      </span>
    </button>
  );
}
