"use client";

import Link from "next/link";
import { useActionState } from "react";
import { trimiteMesaj, type StareFormular } from "./actiuni";

const initial: StareFormular = { stare: "gol", mesaj: "" };

const clasaCamp =
  "w-full rounded-2xl border border-linie bg-white px-4 py-3 text-[0.98rem] outline-none placeholder:text-verde-negru/45 focus:border-smarald";

export function FormularContact() {
  const [stare, actiune, seTrimite] = useActionState(trimiteMesaj, initial);
  // React golește formularul după trimitere; valorile întoarse la eroare devin noile valori implicite
  const v = stare.valori;

  if (stare.stare === "ok") {
    return (
      <p role="status" className="rounded-[1.5rem] bg-menta p-6 text-lg text-verde-negru">
        {stare.mesaj}
      </p>
    );
  }

  return (
    <form action={actiune} className="grid gap-4">
      <div className="grid gap-4 sm:grid-cols-2">
        <label className="grid gap-1.5">
          <span className="text-sm font-semibold">Numele dumneavoastră</span>
          <input
            name="nume"
            required
            maxLength={120}
            autoComplete="name"
            defaultValue={v?.nume}
            className={clasaCamp}
          />
        </label>
        <label className="grid gap-1.5">
          <span className="text-sm font-semibold">Telefon sau email</span>
          <input
            name="contact"
            required
            maxLength={160}
            autoComplete="email"
            defaultValue={v?.contact}
            className={clasaCamp}
          />
        </label>
      </div>
      <fieldset className="grid gap-2">
        <legend className="mb-1.5 text-sm font-semibold">Pentru cine sunt orele?</legend>
        <div className="flex flex-wrap gap-2">
          {["Pentru copilul meu", "Pentru mine", "Pentru un examen", "Pentru un proiect"].map((o) => (
            <label
              key={o}
              className="cursor-pointer rounded-full border border-linie bg-white px-4 py-2 text-[0.95rem] has-[:checked]:border-smarald has-[:checked]:bg-menta has-[:checked]:text-smarald"
            >
              <input type="radio" name="pentru" value={o} defaultChecked={v?.pentru === o} className="sr-only" />
              {o}
            </label>
          ))}
        </div>
      </fieldset>
      <label className="grid gap-1.5">
        <span className="text-sm font-semibold">Mesajul</span>
        <textarea
          name="mesaj"
          required
          rows={5}
          maxLength={3000}
          placeholder="Câțiva ani, ce nivel, ce v-ați propus…"
          defaultValue={v?.mesaj}
          className={clasaCamp}
        />
      </label>
      {/* Capcană pentru roboți, ascunsă pentru oameni */}
      <div aria-hidden className="hidden">
        <label>
          Site web
          <input name="site_web" tabIndex={-1} autoComplete="off" />
        </label>
      </div>
      <label className="flex items-start gap-2.5 text-sm text-verde-negru/80">
        <input
          type="checkbox"
          name="acord"
          value="da"
          required
          defaultChecked={v?.acord}
          className="mt-1 size-4 accent-smarald"
        />
        <span>
          Sunt de acord ca Adriana Băzăvan să folosească datele mele ca să-mi răspundă. Detalii în{" "}
          <Link href="/confidentialitate" className="text-smarald underline underline-offset-2">
            politica de confidențialitate
          </Link>
          .
        </span>
      </label>
      {stare.stare === "eroare" && (
        <p role="alert" className="rounded-2xl bg-corai-pal px-4 py-3 text-[0.95rem] text-corai-inchis">
          {stare.mesaj}
        </p>
      )}
      <button
        type="submit"
        disabled={seTrimite}
        className="justify-self-start rounded-full bg-smarald px-7 py-3 font-semibold text-white transition-colors hover:bg-smarald-adanc disabled:opacity-60"
      >
        {seTrimite ? "Se trimite…" : "Trimite mesajul"}
      </button>
    </form>
  );
}
