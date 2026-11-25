"use client";

import { useEffect, useRef, useState } from "react";
import { Pictograma } from "@/components/Pictograma";

function timp(sec: number) {
  if (!Number.isFinite(sec)) return "0:00";
  const m = Math.floor(sec / 60);
  const s = Math.floor(sec % 60);
  return `${m}:${s.toString().padStart(2, "0")}`;
}

const viteze = [1, 1.25, 0.75] as const;

/** Playerul pentru poveștile audio: buton mare, bară de progres, ±10 secunde, viteză. */
export function PlayerAudio({ src, titlu }: { src: string; titlu: string }) {
  const audio = useRef<HTMLAudioElement>(null);
  const [canta, setCanta] = useState(false);
  const [pozitie, setPozitie] = useState(0);
  const [durata, setDurata] = useState(0);
  const [viteza, setViteza] = useState<(typeof viteze)[number]>(1);

  useEffect(() => {
    const a = audio.current;
    if (!a) return;
    const laTimp = () => {
      setPozitie(a.currentTime);
      if (Number.isFinite(a.duration)) setDurata(a.duration);
    };
    const laDurata = () => {
      if (Number.isFinite(a.duration)) setDurata(a.duration);
    };
    const laPlay = () => setCanta(true);
    const laPauza = () => setCanta(false);
    a.addEventListener("timeupdate", laTimp);
    a.addEventListener("loadedmetadata", laDurata);
    a.addEventListener("durationchange", laDurata);
    a.addEventListener("play", laPlay);
    a.addEventListener("pause", laPauza);
    a.addEventListener("ended", laPauza);
    // Dacă fișierul s-a încărcat înainte să ascultăm, citim durata direct
    if (a.readyState >= 1) laDurata();
    return () => {
      a.removeEventListener("timeupdate", laTimp);
      a.removeEventListener("loadedmetadata", laDurata);
      a.removeEventListener("durationchange", laDurata);
      a.removeEventListener("play", laPlay);
      a.removeEventListener("pause", laPauza);
      a.removeEventListener("ended", laPauza);
    };
  }, []);

  function comuta() {
    const a = audio.current;
    if (!a) return;
    if (a.paused) void a.play();
    else a.pause();
  }

  function sari(sec: number) {
    const a = audio.current;
    if (!a) return;
    a.currentTime = Math.min(Math.max(0, a.currentTime + sec), a.duration || 0);
  }

  function schimbaViteza() {
    const a = audio.current;
    const urm = viteze[(viteze.indexOf(viteza) + 1) % viteze.length];
    setViteza(urm);
    if (a) a.playbackRate = urm;
  }

  const procent = durata ? (pozitie / durata) * 100 : 0;

  return (
    <div className="relative overflow-hidden rounded-[1.5rem] bg-smarald p-5 text-white sm:p-6">
      {/* eslint-disable-next-line @next/next/no-img-element */}
      <img
        src="/brand/simbol-alb.svg"
        alt=""
        aria-hidden
        className={`pointer-events-none absolute -right-10 -top-10 w-44 opacity-10 ${canta ? "rotire-lenta" : ""}`}
        style={{ animationDuration: "24s" }}
      />
      <audio ref={audio} src={src} preload="metadata" />
      <div className="relative flex items-center gap-4">
        <button
          type="button"
          onClick={comuta}
          aria-label={canta ? `Pauză: ${titlu}` : `Ascultați: ${titlu}`}
          className="grid size-16 shrink-0 place-items-center rounded-full bg-sofran text-verde-negru transition-transform hover:scale-105"
        >
          <Pictograma nume={canta ? "pause" : "play_arrow"} className="size-9" />
        </button>
        <div className="min-w-0 flex-1">
          <label className="sr-only" htmlFor="pozitie-audio">
            Poziția în poveste
          </label>
          <input
            id="pozitie-audio"
            type="range"
            min={0}
            max={durata || 0}
            step={1}
            value={pozitie}
            onChange={(e) => {
              const a = audio.current;
              if (a) a.currentTime = Number(e.target.value);
            }}
            className="h-2 w-full cursor-pointer appearance-none rounded-full accent-sofran"
            style={{
              background: `linear-gradient(to right, var(--color-sofran) ${procent}%, rgba(255,255,255,0.25) ${procent}%)`,
            }}
          />
          <div className="mt-2 flex justify-between text-sm text-white/80 tabular-nums">
            <span>{timp(pozitie)}</span>
            <span>{timp(durata)}</span>
          </div>
        </div>
      </div>
      <div className="relative mt-4 flex items-center justify-center gap-2 sm:justify-start sm:pl-20">
        <div aria-hidden className="mr-auto hidden h-7 items-end gap-1 sm:flex">
          {[0, 1, 2, 3, 4, 5].map((i) => (
            <span
              key={i}
              className={`h-full w-1 origin-bottom rounded-full bg-sofran ${canta ? "unda" : "scale-y-25"}`}
              style={{ animationDelay: `${i * 130}ms` }}
            />
          ))}
        </div>
        <button
          type="button"
          onClick={() => sari(-10)}
          aria-label="Înapoi 10 secunde"
          className="grid size-10 place-items-center rounded-full hover:bg-white/10"
        >
          <Pictograma nume="replay_10" className="size-6" />
        </button>
        <button
          type="button"
          onClick={() => sari(10)}
          aria-label="Înainte 10 secunde"
          className="grid size-10 place-items-center rounded-full hover:bg-white/10"
        >
          <Pictograma nume="forward_10" className="size-6" />
        </button>
        <button
          type="button"
          onClick={schimbaViteza}
          aria-label={`Viteza de redare: ${viteza}x`}
          className="rounded-full border border-white/30 px-3 py-1.5 text-sm font-semibold tabular-nums hover:bg-white/10"
        >
          {viteza}×
        </button>
      </div>
    </div>
  );
}
