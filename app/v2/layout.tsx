import type { Metadata } from "next";
import { JetBrains_Mono } from "next/font/google";

// Police "données/codes" pour le layer technique (mono), Latin uniquement.
const mono = JetBrains_Mono({ subsets: ["latin"], variable: "--font-mono-v2", display: "swap" });

export const metadata: Metadata = {
  title: "דרך אגב · רעיון עיצוב",
  robots: { index: false, follow: false },
};

export default function V2Layout({ children }: { children: React.ReactNode }) {
  return (
    <div className={`v2-root ${mono.variable} bg-white text-[#141a26]`}>
      {/* Accessibilité (IS 5568 / WCAG) : anneau de focus visible au clavier sur tout le v2 */}
      <style>{`.v2-root a:focus-visible,.v2-root button:focus-visible{outline:2px solid #c9a227;outline-offset:3px}`}</style>
      {children}
    </div>
  );
}
