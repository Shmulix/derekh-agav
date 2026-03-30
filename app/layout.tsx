import type { Metadata } from "next";
import { Heebo } from "next/font/google";
import "./globals.css";

const heebo = Heebo({
  subsets: ["hebrew", "latin"],
  variable: "--font-heebo",
  display: "swap",
});

export const metadata: Metadata = {
  title: "דרך אגב | המדריך להשכרת רכב בחו״ל",
  description:
    "המדריך המקיף להשכרת רכב בחו״ל — מסמכים, ביטוח, פיקדון, דלק וקנסות. כתוב על ידי מי שעבד בתחום יותר מעשר שנים.",
  openGraph: {
    title: "דרך אגב | המדריך להשכרת רכב בחו״ל",
    description:
      "כל מה שצריך לדעת לפני שמגיעים לדלפק. מסמכים, ביטוח, פיקדון ועוד.",
    locale: "he_IL",
    type: "website",
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
