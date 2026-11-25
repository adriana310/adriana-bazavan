import Link from "next/link";
import { Pictograma } from "@/components/Pictograma";
import { PictogramaWhatsApp } from "@/components/PictogramaWhatsApp";
import { site } from "@/lib/site";

/**
 * Bara fixă de jos, doar pe telefon: cele trei acțiuni la îndemâna degetului mare.
 * Pe calculator rămâne bulina de WhatsApp.
 */
export function BaraTelefon() {
  return (
    <nav
      aria-label="Contact rapid"
      className="fixed inset-x-0 bottom-0 z-40 border-t border-linie bg-white/95 px-3 pb-[max(0.6rem,env(safe-area-inset-bottom))] pt-2.5 backdrop-blur lg:hidden"
    >
      <ul className="mx-auto grid max-w-md grid-cols-[1.4fr_1fr_1fr] gap-2">
        <li>
          <a
            href={site.whatsapp}
            target="_blank"
            rel="noopener"
            className="flex h-12 items-center justify-center gap-2 rounded-full bg-smarald font-semibold text-white"
          >
            <PictogramaWhatsApp className="size-5" />
            WhatsApp
          </a>
        </li>
        <li>
          <a
            href={site.telefonLink}
            className="flex h-12 items-center justify-center gap-1.5 rounded-full border border-linie font-semibold text-smarald"
          >
            <Pictograma nume="call" className="size-5" />
            Sunați
          </a>
        </li>
        <li>
          <Link
            href="/contact#programare"
            className="flex h-12 items-center justify-center gap-1.5 rounded-full border border-linie font-semibold text-smarald"
          >
            <Pictograma nume="calendar_month" className="size-5" />
            Discuție
          </Link>
        </li>
      </ul>
    </nav>
  );
}
