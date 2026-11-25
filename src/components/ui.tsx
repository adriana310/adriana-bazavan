import Link from "next/link";
import type { ComponentProps, ReactNode } from "react";

/** Eticheta mică de deasupra titlurilor (auriu închis, cum e în machete). */
export function Supratitlu({ children, culoare = "auriu" }: { children: ReactNode; culoare?: "auriu" | "corai" }) {
  return (
    <p
      className={`text-[0.8rem] font-semibold uppercase tracking-[0.1em] ${
        culoare === "corai" ? "text-corai-inchis" : "text-auriu-inchis"
      }`}
    >
      {children}
    </p>
  );
}

type ButonProps = ComponentProps<typeof Link> & { varianta?: "plin" | "contur" };

export function Buton({ varianta = "plin", className = "", ...rest }: ButonProps) {
  const stil =
    varianta === "plin"
      ? "bg-smarald text-white hover:bg-smarald-adanc"
      : "border border-smarald text-smarald hover:bg-menta";
  return (
    <Link
      {...rest}
      className={`inline-flex items-center justify-center gap-2 rounded-full px-6 py-3 text-[0.98rem] font-semibold transition-colors ${stil} ${className}`}
    />
  );
}

/** Eticheta colorată de pe carduri (Poveste audio / Fișă de lucru / Schemă). */
export function Insigna({ children, ton }: { children: ReactNode; ton: "corai" | "galben" | "sofran" | "menta" }) {
  const tonuri = {
    corai: "bg-corai-pal text-corai-inchis",
    galben: "bg-galben-pal text-auriu-inchis",
    sofran: "bg-sofran text-verde-negru",
    menta: "bg-menta text-smarald",
  } as const;
  return (
    <span className={`inline-block rounded-full px-3 py-1 text-xs font-semibold ${tonuri[ton]}`}>{children}</span>
  );
}

export function Container({ children, className = "" }: { children: ReactNode; className?: string }) {
  return <div className={`mx-auto max-w-6xl px-4 sm:px-6 ${className}`}>{children}</div>;
}

/** Locul unde vine o fotografie de la ședința foto din 12 noiembrie. */
export function LocFotografie({
  text,
  className = "",
}: {
  text: string;
  className?: string;
}) {
  return (
    <div
      className={`relative flex flex-col items-center justify-center gap-4 overflow-hidden rounded-[2rem] bg-menta p-8 text-center ${className}`}
    >
      {/* eslint-disable-next-line @next/next/no-img-element */}
      <img src="/brand/simbol-verde.svg" alt="" className="w-2/5 max-w-48 opacity-90" />
      <p className="max-w-56 text-sm text-verde-negru/70">{text}</p>
    </div>
  );
}
