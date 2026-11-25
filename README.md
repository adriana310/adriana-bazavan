# adrianabazavan.ro

Site-ul Adrianei Băzăvan, English Teacher. Făcut de DoMarketing by Roxana Lăudatu.

- Next.js 16 (App Router), TypeScript, Tailwind CSS 4
- Paleta 2 „Smarald și șofran”, literele Fraunces (titluri) + Figtree (text)
- Simbolul caleidoscop, semnătura și crezul sunt în `public/brand/` (SVG, vectorizate din desenul și scrisul ei)
- Toate paginile sunt statice; formularul de contact trimite prin Resend când are variabilele setate

## Pornire

```bash
npm install
npm run dev
```

## Variabile (în Vercel)

| Nume | Ce face |
| :- | :- |
| `NEXT_PUBLIC_SITE_LIVE` | `1` la lansare; altfel site-ul nu se lasă indexat |
| `RESEND_API_KEY` | cheia Resend pentru formularul de contact |
| `CONTACT_TO` | adresa pe care ajung mesajele |
| `CONTACT_FROM` | expeditorul, de pe domeniul verificat în Resend |

Textele de pe site sunt de lucru până la lansare; casetele „De completat” arată ce lipsește.
