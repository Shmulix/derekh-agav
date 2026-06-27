import type { Metadata } from "next";
import { Heebo, JetBrains_Mono } from "next/font/google";
import "./globals.css";

const heebo = Heebo({
  subsets: ["hebrew", "latin"],
  variable: "--font-heebo",
  display: "swap",
});

// Police "données/codes" du design éditorial (mono), Latin uniquement.
const mono = JetBrains_Mono({ subsets: ["latin"], variable: "--font-mono-v2", display: "swap" });

export const metadata: Metadata = {
  metadataBase: new URL("https://derekh-agav.vercel.app"),
  title: {
    default: "דרך אגב | המדריך להשכרת רכב בחו״ל",
    template: "%s | דרך אגב",
  },
  description:
    "המדריך המקיף להשכרת רכב בחו״ל לישראלים. מסמכים, ביטוח, פיקדון, דלק וקנסות. כתוב מניסיון אמיתי של יותר מעשר שנים בתחום.",
  robots: {
    index: false,
    follow: false,
    googleBot: { index: false, follow: false },
  },
  openGraph: {
    siteName: "דרך אגב",
    locale: "he_IL",
    type: "website",
    images: [
      {
        url: "/hero-bg.avif",
        width: 1920,
        height: 1080,
        alt: "דרך אגב: המדריך המקיף להשכרת רכב בחו״ל",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="he" dir="rtl">
      <body className={`${heebo.variable} ${mono.variable} font-heebo antialiased text-text-main bg-white overflow-x-hidden`}>
        {/* Accessibilité (IS 5568 / WCAG) : anneau de focus visible au clavier, tout le site */}
        <style>{`a:focus-visible,button:focus-visible{outline:2px solid #c9a227;outline-offset:3px}`}</style>
        {children}
      </body>
    </html>
  );
}
