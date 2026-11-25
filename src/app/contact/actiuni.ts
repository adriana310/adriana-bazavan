"use server";

export type ValoriFormular = { nume: string; contact: string; pentru: string; mesaj: string; acord: boolean };
export type StareFormular = { stare: "gol" | "ok" | "eroare"; mesaj: string; valori?: ValoriFormular };

const lungimeMax = { nume: 120, contact: 160, mesaj: 3000 } as const;

function camp(formData: FormData, nume: string) {
  const v = formData.get(nume);
  return typeof v === "string" ? v.trim() : "";
}

/**
 * Trimite mesajul din formularul de contact pe emailul Adrianei.
 * Furnizorul: Resend (plan gratuit, fără abonament). Variabilele se pun în Vercel:
 * RESEND_API_KEY, CONTACT_TO (adresa ei), CONTACT_FROM (o adresă de pe domeniul verificat).
 */
export async function trimiteMesaj(_: StareFormular, formData: FormData): Promise<StareFormular> {
  // Capcană pentru roboți: câmpul e ascuns pentru oameni
  if (camp(formData, "site_web")) return { stare: "ok", mesaj: "Mulțumesc! Vă răspund în cel mult o zi lucrătoare." };

  const nume = camp(formData, "nume");
  const contact = camp(formData, "contact");
  const pentru = camp(formData, "pentru");
  const mesaj = camp(formData, "mesaj");
  const acord = formData.get("acord") === "da";
  // Le trimitem înapoi la eroare, ca omul să nu-și piardă ce a scris
  const valori: ValoriFormular = { nume, contact, pentru, mesaj, acord };

  if (!nume || !contact || !mesaj) {
    return { stare: "eroare", mesaj: "Vă rog să completați numele, un telefon sau un email și mesajul.", valori };
  }
  if (nume.length > lungimeMax.nume || contact.length > lungimeMax.contact || mesaj.length > lungimeMax.mesaj) {
    return {
      stare: "eroare",
      mesaj: "Mesajul e prea lung. Îl puteți scurta sau mi-l puteți trimite pe WhatsApp.",
      valori,
    };
  }
  if (!acord) {
    return { stare: "eroare", mesaj: "Am nevoie de acordul dumneavoastră ca să vă pot răspunde.", valori };
  }

  const cheie = process.env.RESEND_API_KEY;
  const catre = process.env.CONTACT_TO;
  const dela = process.env.CONTACT_FROM;
  if (!cheie || !catre || !dela) {
    return {
      stare: "eroare",
      mesaj: "Formularul se activează la lansarea site-ului. Până atunci, vă rog să-mi scrieți pe WhatsApp.",
      valori,
    };
  }

  const text = [`Nume: ${nume}`, `Telefon sau email: ${contact}`, `Pentru: ${pentru || "nespecificat"}`, "", mesaj].join(
    "\n",
  );

  try {
    const r = await fetch("https://api.resend.com/emails", {
      method: "POST",
      headers: { Authorization: `Bearer ${cheie}`, "Content-Type": "application/json" },
      body: JSON.stringify({
        from: dela,
        to: [catre],
        subject: `Mesaj nou de pe site de la ${nume}`,
        text,
        ...(contact.includes("@") ? { reply_to: contact } : {}),
      }),
    });
    if (!r.ok) throw new Error(`Resend ${r.status}`);
  } catch (e) {
    console.error("Formular contact:", e);
    return {
      stare: "eroare",
      mesaj: "Mesajul nu a plecat. Vă rog să încercați din nou sau să-mi scrieți pe WhatsApp.",
      valori,
    };
  }

  return { stare: "ok", mesaj: "Mulțumesc! Am primit mesajul și vă răspund în cel mult o zi lucrătoare." };
}
