import Link from "next/link";
import { Logo } from "@/components/Logo";
import { MeniuDesktop } from "@/components/MeniuDesktop";
import { MeniuMobil } from "@/components/MeniuMobil";

export function Antet() {
  return (
    <header className="sticky top-0 z-40 border-b border-linie/70 bg-white/90 backdrop-blur supports-[backdrop-filter]:bg-white/80">
      <div className="mx-auto flex h-[4.25rem] max-w-6xl items-center justify-between gap-6 px-4 sm:px-6 lg:h-[4.75rem]">
        <Logo />
        <div className="hidden items-center gap-1 lg:flex">
          <MeniuDesktop />
          <Link
            href="/contact"
            className="ml-3 rounded-full bg-smarald px-5 py-2.5 text-[0.95rem] font-semibold text-white transition-colors hover:bg-smarald-adanc"
          >
            Contact
          </Link>
        </div>
        <MeniuMobil />
      </div>
    </header>
  );
}
