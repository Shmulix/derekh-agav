import { authorJsonLd, SITE_URL } from "./site-config";

// JSON-LD Article partagé par toutes les pages posts.
// L'auteur suit automatiquement le mode anonyme (Person / Organization).
export function buildArticleJsonLd(opts: {
  slug: string;
  headline: string;
  description: string;
  /** Chemin public de l'image hero, ex. "/ztl-italy-hero.avif" */
  image: string;
  datePublished: string;
  dateModified: string;
}) {
  return {
    "@context": "https://schema.org",
    "@type": "Article",
    headline: opts.headline,
    description: opts.description,
    image: `${SITE_URL}${opts.image}`,
    datePublished: opts.datePublished,
    dateModified: opts.dateModified,
    author: authorJsonLd,
    publisher: {
      "@type": "Organization",
      name: "דרך אגב",
      url: SITE_URL,
    },
    inLanguage: "he",
    url: `${SITE_URL}/posts/${opts.slug}`,
  };
}
