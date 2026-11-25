/* eslint-disable @next/next/no-img-element */

/** Simbolul decorativ, care se rotește încet la derulare (sau continuu, foarte lent). */
export function SimbolDecor({
  varianta = "verde-sofran",
  miscare = "derulare",
  className = "",
}: {
  varianta?: "verde" | "verde-sofran" | "alb";
  miscare?: "derulare" | "lenta" | "fara";
  className?: string;
}) {
  const clasaMiscare = miscare === "derulare" ? "rotire-derulare" : miscare === "lenta" ? "rotire-lenta" : "";
  return (
    <img
      src={`/brand/simbol-${varianta}.svg`}
      alt=""
      aria-hidden
      className={`pointer-events-none select-none ${clasaMiscare} ${className}`}
    />
  );
}

/** Separator între secțiuni: trei caleidoscoape mici între două linii fine. */
export function Separator() {
  return (
    <div aria-hidden className="flex items-center justify-center gap-4 py-2">
      <span className="h-px w-16 bg-linie sm:w-28" />
      <img src="/brand/simbol-verde-sofran.svg" alt="" className="size-4 opacity-60" />
      <img src="/brand/simbol-verde-sofran.svg" alt="" className="rotire-lenta size-6" />
      <img src="/brand/simbol-verde-sofran.svg" alt="" className="size-4 opacity-60" />
      <span className="h-px w-16 bg-linie sm:w-28" />
    </div>
  );
}
