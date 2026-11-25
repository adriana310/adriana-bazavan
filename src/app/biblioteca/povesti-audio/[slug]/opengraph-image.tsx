import { imagineOG } from "@/app/_og/imagine";
import { gasesteResursa, povesti } from "@/lib/biblioteca";

export const alt = "Poveste în engleză citită de Adriana Băzăvan";
export const size = { width: 1200, height: 630 };
export const contentType = "image/png";

export function generateStaticParams() {
  return povesti().map((p) => ({ slug: p.slug }));
}

export default async function Imagine({ params }: { params: Promise<{ slug: string }> }) {
  const { slug } = await params;
  const p = gasesteResursa(slug);
  return imagineOG({ supratitlu: `Poveste în engleză · ${p?.pentru ?? ""}`, titlu: p?.titlu ?? "Povești în engleză" });
}
