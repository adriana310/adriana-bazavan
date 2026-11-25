import type { CSSProperties } from "react";

/**
 * Pictogramele Google (Material Symbols Rounded, licență Apache 2.0), în stilul pe care
 * Adriana l-a dat ca referință: intuitive, didactice. Fișierele sunt în public/pictograme.
 * Iau culoarea textului din jur (clasa text-…).
 */
export type NumePictograma =
  | "arrow_forward"
  | "autorenew"
  | "auto_awesome"
  | "calculate"
  | "calendar_month"
  | "call"
  | "check"
  | "checklist"
  | "chevron_right"
  | "child_care"
  | "close"
  | "description"
  | "download"
  | "edit_note"
  | "event_available"
  | "expand_more"
  | "fact_check"
  | "favorite"
  | "flag"
  | "footprint"
  | "format_quote"
  | "forum"
  | "forward_10"
  | "groups"
  | "headphones"
  | "home"
  | "link"
  | "local_library"
  | "location_on"
  | "mail"
  | "menu"
  | "menu_book"
  | "pause"
  | "picture_as_pdf"
  | "play_arrow"
  | "receipt_long"
  | "replay_10"
  | "school"
  | "sentiment_satisfied"
  | "share"
  | "workspace_premium";

export function Pictograma({ nume, className = "size-5" }: { nume: NumePictograma; className?: string }) {
  const stil = { "--pictograma": `url(/pictograme/${nume}.svg)` } as CSSProperties;
  return <span aria-hidden className={`pictograma ${className}`} style={stil} />;
}

/** Pictograma pe o „bulină” colorată, ca în machete. */
export function InsignaPictograma({
  nume,
  ton = "galben",
  marime = "md",
}: {
  nume: NumePictograma;
  ton?: "galben" | "menta" | "alb" | "corai";
  marime?: "md" | "lg";
}) {
  const tonuri = {
    galben: "bg-galben-pal text-auriu-inchis",
    menta: "bg-menta text-smarald",
    alb: "bg-white text-smarald",
    corai: "bg-corai-pal text-corai-inchis",
  } as const;
  const dim = marime === "lg" ? "size-14 rounded-[1.1rem]" : "size-11 rounded-2xl";
  return (
    <span className={`grid shrink-0 place-items-center ${dim} ${tonuri[ton]}`}>
      <Pictograma nume={nume} className={marime === "lg" ? "size-7" : "size-6"} />
    </span>
  );
}
