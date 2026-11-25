import { readFile } from "node:fs/promises";
import { join } from "node:path";
import { ImageResponse } from "next/og";

/*
  Imaginea de previzualizare (1200 × 630) care apare când cineva trimite un link
  pe WhatsApp, Facebook sau în mesaje. Aceeași machetă pentru toate paginile, cu titlul paginii.
*/

const radacina = process.cwd();

async function resurse() {
  const [fraunces, figtree, simbol] = await Promise.all([
    readFile(join(radacina, "src/app/_og/Fraunces-SemiBold.ttf")),
    readFile(join(radacina, "src/app/_og/Figtree-Medium.ttf")),
    readFile(join(radacina, "public/brand/simbol-verde-sofran.svg"), "base64"),
  ]);
  return { fraunces, figtree, simbol: `data:image/svg+xml;base64,${simbol}` };
}

export async function imagineOG({ supratitlu, titlu }: { supratitlu: string; titlu: string }) {
  const { fraunces, figtree, simbol } = await resurse();
  const titluMare = titlu.length < 42;

  return new ImageResponse(
    (
      <div
        style={{
          width: "100%",
          height: "100%",
          display: "flex",
          position: "relative",
          background: "#ffffff",
          fontFamily: "Figtree",
          color: "#0B2F24",
        }}
      >
        <div
          style={{
            position: "absolute",
            right: -150,
            top: 45,
            width: 600,
            height: 600,
            borderRadius: 600,
            background: "#E6F5EC",
            display: "flex",
          }}
        />
        {/* eslint-disable-next-line @next/next/no-img-element */}
        <img src={simbol} width={520} height={520} alt="" style={{ position: "absolute", right: -110, top: 85 }} />
        <div
          style={{
            display: "flex",
            flexDirection: "column",
            justifyContent: "space-between",
            padding: "64px 72px 70px",
            width: 820,
            height: "100%",
          }}
        >
          <div style={{ display: "flex", alignItems: "center", gap: 18 }}>
            {/* eslint-disable-next-line @next/next/no-img-element */}
            <img src={simbol} width={58} height={58} alt="" />
            <span style={{ fontFamily: "Fraunces", fontSize: 36, color: "#0A6B4C" }}>Adriana Băzăvan</span>
          </div>
          <div style={{ display: "flex", flexDirection: "column", gap: 18 }}>
            <span style={{ fontSize: 24, letterSpacing: 3, textTransform: "uppercase", color: "#8A6200" }}>
              {supratitlu}
            </span>
            <span
              style={{
                fontFamily: "Fraunces",
                fontSize: titluMare ? 68 : 56,
                lineHeight: 1.08,
                color: "#0A6B4C",
              }}
            >
              {titlu}
            </span>
          </div>
          <span style={{ fontSize: 26, color: "#0B2F24", opacity: 0.8 }}>
            English Teacher · unu la unu · online și în București
          </span>
        </div>
        <div
          style={{ position: "absolute", left: 0, bottom: 0, width: "100%", height: 14, background: "#F0B429", display: "flex" }}
        />
      </div>
    ),
    {
      width: 1200,
      height: 630,
      fonts: [
        { name: "Fraunces", data: fraunces, weight: 600, style: "normal" },
        { name: "Figtree", data: figtree, weight: 500, style: "normal" },
      ],
    },
  );
}
