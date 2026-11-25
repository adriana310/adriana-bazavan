import { PictogramaWhatsApp } from "@/components/PictogramaWhatsApp";
import { site } from "@/lib/site";

/** Bulina de WhatsApp de pe toate paginile. */
export function BulinaWhatsApp() {
  return (
    <a
      href={site.whatsapp}
      target="_blank"
      rel="noopener"
      aria-label="Scrieți-mi pe WhatsApp"
      className="group fixed bottom-4 right-4 z-40 flex items-center gap-2 rounded-full bg-smarald p-3.5 text-white shadow-[0_12px_30px_-10px_rgba(11,47,36,0.55)] transition-all hover:bg-smarald-adanc sm:bottom-6 sm:right-6 sm:pr-5"
    >
      <PictogramaWhatsApp className="size-7" />
      <span className="hidden text-[0.95rem] font-semibold sm:inline">Scrieți-mi</span>
    </a>
  );
}
