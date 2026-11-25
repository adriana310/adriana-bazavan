import Link from "next/link";
import { Insigna } from "@/components/ui";
import { Pictograma } from "@/components/Pictograma";
import { caleResursa, numeTip, tonTip, type Resursa } from "@/lib/biblioteca";

/** Cardul unei resurse din Bibliotecă; `mare` e varianta evidențiată din grila de tip „bento”. */
export function CardResursa({ r, mare = false }: { r: Resursa; mare?: boolean }) {
  const ePoveste = r.tip === "poveste";
  const gata = Boolean(r.audio || r.youtube || r.pdf);
  const actiune = ePoveste ? (r.youtube && !r.audio ? "Vedeți povestea" : "Ascultați povestea") : "Deschideți fișa";

  return (
    <Link
      href={caleResursa(r)}
      className={`group apare relative flex h-full flex-col overflow-hidden rounded-[1.5rem] border border-linie bg-white p-6 transition-all hover:-translate-y-0.5 hover:shadow-[0_20px_45px_-25px_rgba(11,47,36,0.45)] ${
        mare ? "sm:p-8" : ""
      }`}
    >
      {mare && (
        // eslint-disable-next-line @next/next/no-img-element
        <img
          src="/brand/simbol-verde-sofran.svg"
          alt=""
          aria-hidden
          className="rotire-derulare pointer-events-none absolute -bottom-16 -right-16 w-64 opacity-[0.12]"
        />
      )}
      <div className="relative flex items-center justify-between gap-3">
        <Insigna ton={tonTip[r.tip]}>{numeTip[r.tip]}</Insigna>
        {r.exemplu && <span className="text-xs text-verde-negru/50">exemplu</span>}
      </div>
      <h3 className={`relative mt-4 ${mare ? "text-2xl sm:text-[2rem]" : "text-xl"}`}>{r.titlu}</h3>
      <p className="relative mt-2 text-sm text-verde-negru/70">
        {[r.durata, ePoveste ? null : "PDF", r.pentru].filter(Boolean).join(" · ")}
      </p>
      {mare && <p className="relative mt-4 max-w-md text-verde-negru/85">{r.descriere}</p>}
      <span className="relative mt-auto inline-flex items-center gap-2.5 pt-6 font-semibold text-smarald">
        <span
          className={`grid place-items-center rounded-full ${mare ? "size-12" : "size-9"} ${
            ePoveste ? "bg-smarald text-white" : "border border-smarald"
          }`}
        >
          <Pictograma
            nume={ePoveste ? "play_arrow" : "picture_as_pdf"}
            className={mare ? "size-7" : "size-5"}
          />
        </span>
        {gata ? actiune : `${actiune} · în curând`}
      </span>
    </Link>
  );
}
