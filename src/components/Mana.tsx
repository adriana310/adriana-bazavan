/*
  Trăsături „de mână” (subliniere, cerc, săgeată), ca notițele pe marginea unui caiet.
  Sunt doar forme, nu litere: scrisul de mână rămâne doar cel adevărat al Adrianei.
*/

/** Subliniere trasă de mână, care se desenează la încărcare. Se pune într-un element `relative`. */
export function SubliniereMana({ className = "" }: { className?: string }) {
  return (
    <svg
      aria-hidden
      viewBox="0 0 300 24"
      preserveAspectRatio="none"
      className={`pointer-events-none absolute -bottom-[0.18em] left-[-2%] h-[0.32em] w-[104%] overflow-visible ${className}`}
    >
      <path
        className="traseaza"
        pathLength={1}
        d="M3 15 C 60 7, 120 5, 178 8 S 262 14, 297 9"
        fill="none"
        stroke="var(--color-sofran)"
        strokeWidth="7"
        strokeLinecap="round"
      />
    </svg>
  );
}

/** Săgeată curbă, trasă de mână. */
export function SageataMana({ className = "" }: { className?: string }) {
  return (
    <svg aria-hidden viewBox="0 0 120 80" className={`pointer-events-none overflow-visible ${className}`}>
      <path
        className="traseaza"
        pathLength={1}
        d="M112 8 C 92 44, 58 66, 14 64"
        fill="none"
        stroke="var(--color-sofran)"
        strokeWidth="4"
        strokeLinecap="round"
      />
      <path
        className="traseaza"
        pathLength={1}
        d="M28 50 L 12 64 L 30 75"
        fill="none"
        stroke="var(--color-sofran)"
        strokeWidth="4"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
    </svg>
  );
}
