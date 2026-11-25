import { imagineOG } from "@/app/_og/imagine";
import { fise, gasesteResursa, numeTip } from "@/lib/biblioteca";

export const alt = "Fișă de engleză gratuită de la Adriana Băzăvan";
export const size = { width: 1200, height: 630 };
export const contentType = "image/png";

export function generateStaticParams() {
  return fise().map((f) => ({ slug: f.slug }));
}

export default async function Imagine({ params }: { params: Promise<{ slug: string }> }) {
  const { slug } = await params;
  const f = gasesteResursa(slug);
  return imagineOG({
    supratitlu: f ? `${numeTip[f.tip]} gratuită · PDF` : "Bibliotecă",
    titlu: f?.titlu ?? "Fișe și scheme de engleză",
  });
}
