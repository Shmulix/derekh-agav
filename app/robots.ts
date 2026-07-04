import type { MetadataRoute } from "next";
import { INDEXING_ENABLED, SITE_URL } from "@/lib/site-config";

// Piloté par INDEXING_ENABLED (site-mode.mjs).
// Pré-lancement : tout est bloqué. Au lancement SEO : crawl ouvert + sitemap.
// /admin reste interdit dans LES DEUX branches : le flip de lancement ne doit
// jamais ouvrir la zone admin aux crawlers.
export default function robots(): MetadataRoute.Robots {
  if (!INDEXING_ENABLED) {
    return { rules: { userAgent: "*", disallow: "/" } };
  }
  return {
    rules: { userAgent: "*", allow: "/", disallow: "/admin" },
    sitemap: `${SITE_URL}/sitemap.xml`,
  };
}
