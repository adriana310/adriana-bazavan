"use client";

import { useState } from "react";

/**
 * Abonarea la newsletter. Furnizorul (Brevo, MailerLite etc.) nu e ales încă,
 * așa că formularul doar validează și explică. Se leagă la furnizor înainte de lansare.
 */
export function FormularNewsletter({ varianta = "deschis" }: { varianta?: "deschis" | "compact" }) {
  const [trimis, setTrimis] = useState(false);

  if (trimis) {
    return (
      <p role="status" className="rounded-2xl bg-white/80 p-4 text-[0.98rem] text-verde-negru">
        Mulțumesc! Abonarea se activează odată cu lansarea site-ului.
      </p>
    );
  }

  return (
    <form
      onSubmit={(e) => {
        e.preventDefault();
        setTrimis(true);
      }}
      className={`grid gap-3 ${varianta === "compact" ? "" : "max-w-lg"}`}
    >
      <div className="flex flex-col gap-3 sm:flex-row">
        <label htmlFor="email-newsletter" className="sr-only">
          Adresa de email
        </label>
        <input
          id="email-newsletter"
          type="email"
          name="email"
          required
          autoComplete="email"
          placeholder="Adresa dumneavoastră de email"
          className="min-w-0 flex-1 rounded-full border border-linie bg-white px-5 py-3 text-[0.98rem] outline-none placeholder:text-verde-negru/50 focus:border-smarald"
        />
        <button
          type="submit"
          className="rounded-full bg-smarald px-6 py-3 font-semibold text-white transition-colors hover:bg-smarald-adanc"
        >
          Mă abonez
        </button>
      </div>
      <label className="flex items-start gap-2.5 text-sm text-verde-negru/80">
        <input type="checkbox" name="acord" required className="mt-1 size-4 accent-smarald" />
        <span>
          Sunt de acord să primesc emailuri de la Adriana Băzăvan. Mă pot dezabona oricând, dintr-un singur clic.
        </span>
      </label>
    </form>
  );
}
