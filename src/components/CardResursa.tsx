import { Download, Play } from "lucide-react";
import { Insigna } from "@/components/ui";
import { numeTip, tonTip, type Resursa } from "@/lib/biblioteca";

export function CardResursa({ r }: { r: Resursa }) {
  const ePoveste = r.tip === "poveste";
  return (
    <article className="flex h-full flex-col rounded-[1.5rem] border border-linie bg-white p-6">
      <div className="flex items-center justify-between gap-3">
        <Insigna ton={tonTip[r.tip]}>{numeTip[r.tip]}</Insigna>
        {r.exemplu && <span className="text-xs text-verde-negru/50">exemplu</span>}
      </div>
      <h3 className="mt-4 text-xl">{r.titlu}</h3>
      <p className="mt-2 text-sm text-verde-negru/70">
        {[r.durata, ePoveste ? null : "PDF", r.pentru].filter(Boolean).join(" · ")}
      </p>
      <div className="mt-auto pt-6">
        {r.fisier ? (
          ePoveste ? (
            <audio controls preload="none" src={r.fisier} className="w-full">
              Browserul dumneavoastră nu poate reda fișierul audio.
            </audio>
          ) : (
            <a href={r.fisier} download className="inline-flex items-center gap-2.5 font-semibold text-smarald">
              <span className="grid size-9 place-items-center rounded-full border border-smarald">
                <Download aria-hidden className="size-4" />
              </span>
              Descarcă {r.tip === "fisa" ? "fișa" : "schema"}
            </a>
          )
        ) : (
          <span className="inline-flex items-center gap-2.5 font-semibold text-smarald/60">
            <span
              className={`grid size-9 place-items-center rounded-full ${
                ePoveste ? "bg-smarald/60 text-white" : "border border-smarald/60"
              }`}
            >
              {ePoveste ? <Play aria-hidden className="size-4" /> : <Download aria-hidden className="size-4" />}
            </span>
            În curând
          </span>
        )}
      </div>
    </article>
  );
}
