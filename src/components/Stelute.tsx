/*
  Steluțele din simbolul Adrianei („steluța strălucește”), care sclipesc discret.
  Poziții fixe (în procente), întârzieri diferite, ca să nu clipească toate deodată.
*/

const STEA = "M12 0 Q13.9 10.1 24 12 Q13.9 13.9 12 24 Q10.1 13.9 0 12 Q10.1 10.1 12 0Z";

export type Steluta = { x: string; y: string; marime: number; culoare?: "sofran" | "smarald" | "alb"; intarziere?: number };

const culori = { sofran: "#F0B429", smarald: "#0A6B4C", alb: "#ffffff" } as const;

export function Stelute({ stele, className = "" }: { stele: Steluta[]; className?: string }) {
  return (
    <div aria-hidden className={`pointer-events-none absolute inset-0 overflow-hidden ${className}`}>
      {stele.map((s, i) => (
        <svg
          key={i}
          viewBox="0 0 24 24"
          className="sclipeste absolute"
          style={{
            left: s.x,
            top: s.y,
            width: s.marime,
            height: s.marime,
            animationDelay: `${s.intarziere ?? i * 0.7}s`,
            animationDuration: `${3.2 + (i % 4) * 0.9}s`,
          }}
        >
          <path d={STEA} fill={culori[s.culoare ?? "sofran"]} />
        </svg>
      ))}
    </div>
  );
}

/** Două-trei steluțe care apar la trecerea mouse-ului peste un buton (butonul are clasa `group relative`). */
export function Sclipiri() {
  const pozitii = [
    { stil: "-top-2.5 -right-1.5 size-4", intarziere: "0ms" },
    { stil: "-bottom-2 right-8 size-3", intarziere: "90ms" },
    { stil: "-top-3 left-6 size-2.5", intarziere: "160ms" },
  ];
  return (
    <>
      {pozitii.map((p, i) => (
        <svg
          key={i}
          aria-hidden
          viewBox="0 0 24 24"
          className={`pointer-events-none absolute ${p.stil} scale-0 opacity-0 transition-all duration-300 group-hover:scale-100 group-hover:opacity-100 group-focus-visible:scale-100 group-focus-visible:opacity-100`}
          style={{ transitionDelay: p.intarziere }}
        >
          <path d={STEA} fill="#F0B429" />
        </svg>
      ))}
    </>
  );
}
