import { ANONYMOUS_MODE } from "./site-mode.mjs";

/** @type {import('next').NextConfig} */

// Headers de securite appliques a toutes les routes.
// Le site est 100% statique (pas d'API, pas de middleware, pas de scripts externes) :
// la CSP peut donc etre stricte. 'unsafe-inline' reste requis pour les scripts
// d'hydratation inline de Next.js et les styles inline (next/font, JSON-LD exclu).
const securityHeaders = [
  {
    key: "Content-Security-Policy",
    value: [
      "default-src 'self'",
      "script-src 'self' 'unsafe-inline'",
      "style-src 'self' 'unsafe-inline'",
      "img-src 'self' data: blob:",
      "font-src 'self' data:",
      "connect-src 'self'",
      "object-src 'none'",
      "base-uri 'self'",
      "form-action 'self'",
      "frame-ancestors 'none'",
      "upgrade-insecure-requests",
    ].join("; "),
  },
  { key: "X-Content-Type-Options", value: "nosniff" },
  { key: "X-Frame-Options", value: "DENY" },
  { key: "Referrer-Policy", value: "strict-origin-when-cross-origin" },
  {
    key: "Permissions-Policy",
    value: "camera=(), microphone=(), geolocation=(), payment=(), usb=()",
  },
  {
    key: "Strict-Transport-Security",
    value: "max-age=63072000; includeSubDomains",
  },
];

const nextConfig = {
  poweredByHeader: false,
  images: {
    domains: [],
  },
  async headers() {
    return [
      {
        source: "/:path*",
        headers: securityHeaders,
      },
      // Zone admin : jamais indexee, jamais mise en cache. Le middleware pose
      // aussi ces headers (Next peut ecraser Cache-Control sur les routes
      // dynamiques) : double couche voulue.
      {
        source: "/admin/:path*",
        headers: [
          { key: "X-Robots-Tag", value: "noindex, nofollow, noarchive" },
          { key: "Cache-Control", value: "no-store, max-age=0" },
        ],
      },
    ];
  },
  // En mode anonyme, les fichiers qui revelent l'identite de l'auteur ne
  // doivent pas etre servis, meme en URL directe. Les redirects passent
  // AVANT les fichiers statiques de public/.
  async redirects() {
    if (!ANONYMOUS_MODE) return [];
    return [
      { source: "/samuel.avif", destination: "/avatar-anon.avif", permanent: false },
      { source: "/guide-ebook.pdf", destination: "/guide-ebook-anon.pdf", permanent: false },
    ];
  },
};

export default nextConfig;
