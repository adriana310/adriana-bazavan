import { imagineOG } from "@/app/_og/imagine";
import { articole, gasesteArticol } from "@/continut/caiet";

export const alt = "Articol din Caietul cu idei, de Adriana Băzăvan";
export const size = { width: 1200, height: 630 };
export const contentType = "image/png";

export function generateStaticParams() {
  return articole.map((a) => ({ slug: a.slug }));
}

export default async function Imagine({ params }: { params: Promise<{ slug: string }> }) {
  const { slug } = await params;
  const a = gasesteArticol(slug);
  return imagineOG({ supratitlu: `Caietul cu idei · ${a?.tema ?? ""}`, titlu: a?.titlu ?? "Caietul cu idei" });
}
