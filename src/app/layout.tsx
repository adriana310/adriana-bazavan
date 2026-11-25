import type { Metadata, Viewport } from "next";
import { ViewTransition } from "react";
import { Figtree, Fraunces } from "next/font/google";
import "./globals.css";
import { Antet } from "@/components/Antet";
import { Subsol } from "@/components/Subsol";
import { BulinaWhatsApp } from "@/components/BulinaWhatsApp";
import { BaraTelefon } from "@/components/BaraTelefon";
import { DateStructurate } from "@/components/DateStructurate";
import { grafBaza } from "@/lib/schema";
import { site } from "@/lib/site";

// Literele site-ului: varianta B, aleasă de Adriana pe 16 noiembrie 2026.
// latin-ext aduce ă, â, î, ș, ț cu virgulă dedesubt.
const fraunces = Fraunces({
  variable: "--font-fraunces",
  subsets: ["latin", "latin-ext"],
  axes: ["opsz"],
  display: "swap",
});

const figtree = Figtree({
  variable: "--font-figtree",
  subsets: ["latin", "latin-ext"],
  display: "swap",
});

export const metadata: Metadata = {
  metadataBase: new URL(site.url),
  title: {
    default: "Adriana Băzăvan · English Teacher, engleză unu la unu",
    template: "%s · Adriana Băzăvan",
  },
  description:
    "Engleză unu la unu pentru copii și adulți, online și în București, sector 2. Pornim de la o evaluare, stabilim împreună obiectivul și lucrăm pas cu pas.",
  robots: site.live ? { index: true, follow: true } : { index: false, follow: false },
  alternates: { canonical: "/" },
  openGraph: {
    type: "website",
    locale: "ro_RO",
    siteName: site.nume,
  },
  twitter: { card: "summary_large_image" },
};

export const viewport: Viewport = {
  themeColor: "#ffffff",
};

export default function RootLayout({ children }: LayoutProps<"/">) {
  return (
    <html lang="ro" className={`${fraunces.variable} ${figtree.variable} h-full`}>
      <body className="flex min-h-full flex-col pb-[4.75rem] lg:pb-0">
        <a
          href="#continut"
          className="sr-only focus:not-sr-only focus:fixed focus:left-4 focus:top-4 focus:z-50 focus:rounded-full focus:bg-smarald focus:px-4 focus:py-2 focus:text-white"
        >
          Sari la conținut
        </a>
        <DateStructurate date={grafBaza()} />
        <Antet />
        <ViewTransition>
          <main id="continut" className="flex-1">
            {children}
          </main>
        </ViewTransition>
        <Subsol />
        <BulinaWhatsApp />
        <BaraTelefon />
      </body>
    </html>
  );
}
