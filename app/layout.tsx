import type { Metadata } from "next";
import { Heebo } from "next/font/google";
import "./globals.css";

const heebo = Heebo({
  subsets: ["hebrew", "latin"],
  variable: "--font-heebo",
  display: "swap",
});

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
        alt: "דרך אגב — המדריך המקיף להשכרת רכב בחו״ל",
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
      <body className={`${heebo.variable} font-heebo antialiased text-text-main bg-white overflow-x-hidden`}>
        {children}
      </body>
    </html>
  );
}
