import type { MetadataRoute } from "next";
import { INDEXING_ENABLED, SITE_URL } from "@/lib/site-config";

// Piloté par INDEXING_ENABLED (site-mode.mjs).
// Pré-lancement : tout est bloqué. Au lancement SEO : crawl ouvert + sitemap.
export default function robots(): MetadataRoute.Robots {
  if (!INDEXING_ENABLED) {
    return { rules: { userAgent: "*", disallow: "/" } };
  }
  return {
    rules: { userAgent: "*", allow: "/" },
    sitemap: `${SITE_URL}/sitemap.xml`,
  };
}
