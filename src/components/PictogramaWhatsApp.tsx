import { siWhatsapp } from "simple-icons";

export function PictogramaWhatsApp({ className }: { className?: string }) {
  return (
    <svg viewBox="0 0 24 24" aria-hidden className={className} fill="currentColor">
      <path d={siWhatsapp.path} />
    </svg>
  );
}
