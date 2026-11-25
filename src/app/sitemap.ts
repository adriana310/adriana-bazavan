import type { MetadataRoute } from "next";
import { caleResursa, resurse } from "@/lib/biblioteca";
import { articolePublicate } from "@/continut/caiet";
import { meniu, site } from "@/lib/site";

export default function sitemap(): MetadataRoute.Sitemap {
  const pagini = ["/", "/contact", ...meniu.flatMap((m) => [m.href, ...(m.copii?.map((c) => c.href) ?? [])])];
  // Exemplele din Bibliotecă și ciornele din Caiet nu intră în hartă.
  const materiale = resurse.filter((r) => !r.exemplu).map(caleResursa);
  const articole = articolePublicate().map((a) => `/caietul-cu-idei/${a.slug}`);

  return [...pagini, ...materiale, ...articole].map((cale) => ({
    url: `${site.url}${cale === "/" ? "" : cale}`,
    changeFrequency: cale.startsWith("/caietul-cu-idei") || cale.startsWith("/biblioteca") ? "weekly" : "monthly",
    priority: cale === "/" ? 1 : 0.7,
  }));
}
