import type { MetadataRoute } from "next";
import { publishedPosts, postHref } from "@/lib/posts";
import { SITE_URL } from "@/lib/site-config";

// Sitemap prêt pour le lancement SEO. Tant que le site est en noindex
// (INDEXING_ENABLED = false), il existe mais n'est déclaré nulle part.
export default function sitemap(): MetadataRoute.Sitemap {
  const staticRoutes: MetadataRoute.Sitemap = [
    { url: SITE_URL, changeFrequency: "weekly", priority: 1 },
    { url: `${SITE_URL}/guide`, changeFrequency: "monthly", priority: 0.9 },
    { url: `${SITE_URL}/posts`, changeFrequency: "weekly", priority: 0.7 },
    { url: `${SITE_URL}/posts/rental-platforms`, changeFrequency: "monthly", priority: 0.8 },
  ];

  const postRoutes: MetadataRoute.Sitemap = publishedPosts.map((post) => ({
    url: `${SITE_URL}${postHref(post)}`,
    lastModified: post.publishedAt,
    changeFrequency: "monthly",
    priority: 0.8,
  }));

  return [...staticRoutes, ...postRoutes];
}
