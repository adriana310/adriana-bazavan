import type { MetadataRoute } from "next";
import { site } from "@/lib/site";

// Până la lansare (NEXT_PUBLIC_SITE_LIVE=1), site-ul nu se lasă indexat.
export default function robots(): MetadataRoute.Robots {
  if (!site.live) {
    return { rules: { userAgent: "*", disallow: "/" } };
  }
  return {
    rules: { userAgent: "*", allow: "/" },
    sitemap: `${site.url}/sitemap.xml`,
  };
}
