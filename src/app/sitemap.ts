import type { MetadataRoute } from "next";
import { meniu, site } from "@/lib/site";

export default function sitemap(): MetadataRoute.Sitemap {
  const cai = ["/", "/contact", ...meniu.flatMap((m) => [m.href, ...(m.copii?.map((c) => c.href) ?? [])])];
  return cai.map((cale) => ({
    url: `${site.url}${cale === "/" ? "" : cale}`,
    changeFrequency: cale === "/caietul-cu-idei" || cale.startsWith("/biblioteca") ? "weekly" : "monthly",
    priority: cale === "/" ? 1 : 0.7,
  }));
}
