import { PictogramaWhatsApp } from "@/components/PictogramaWhatsApp";
import { site } from "@/lib/site";

/** Bulina de WhatsApp, pe calculator. Pe telefon e bara fixă de jos (BaraTelefon). */
export function BulinaWhatsApp() {
  return (
    <a
      href={site.whatsapp}
      target="_blank"
      rel="noopener"
      aria-label="Scrieți-mi pe WhatsApp"
      className="group fixed bottom-6 right-6 z-40 hidden items-center gap-2 rounded-full bg-smarald p-3.5 pr-5 text-white shadow-[0_12px_30px_-10px_rgba(11,47,36,0.55)] transition-all hover:bg-smarald-adanc lg:flex"
    >
      <PictogramaWhatsApp className="size-7" />
      <span className="text-[0.95rem] font-semibold">Scrieți-mi</span>
    </a>
  );
}
