import Image from "next/image";
import Link from "next/link";

type Props = {
  /** „verde” pe fond deschis, „alb” pe fond verde */
  culoare?: "verde" | "alb";
  marime?: "mic" | "mare";
};

/**
 * Logo-ul orizontal: simbolul caleidoscop (desenul ei original, într-o singură culoare,
 * cum a ales pe 16 nov) + numele cules cu litera Fraunces (varianta 2, recomandarea noastră).
 */
export function Logo({ culoare = "verde", marime = "mic" }: Props) {
  const dim = marime === "mare" ? 56 : 40;
  return (
    <Link
      href="/"
      className="group inline-flex items-center gap-2.5 rounded-lg"
      aria-label="Adriana Băzăvan, prima pagină"
    >
      <Image
        src={culoare === "alb" ? "/brand/simbol-alb.svg" : "/brand/simbol-verde.svg"}
        alt=""
        width={dim}
        height={dim}
        unoptimized
        priority
        className="shrink-0 transition-transform duration-700 ease-out group-hover:rotate-45"
      />
      <span
        className={`whitespace-nowrap font-titluri font-semibold leading-none tracking-[-0.01em] ${
          marime === "mare" ? "text-[1.75rem]" : "text-[1.3rem] sm:text-[1.4rem]"
        } ${culoare === "alb" ? "text-white" : "text-smarald"}`}
      >
        Adriana Băzăvan
      </span>
    </Link>
  );
}
