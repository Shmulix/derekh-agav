"use client";

// Palette de couleurs interactive : clic sur un swatch = copie du hex.
// Les couleurs arrivent par props (payload RSC authentifie).
import { useState } from "react";
import { Check } from "lucide-react";

type PaletteColor = { name: string; hex: string; usage: string };

function textColorFor(hex: string): string {
  const value = hex.replace("#", "");
  const r = parseInt(value.slice(0, 2), 16);
  const g = parseInt(value.slice(2, 4), 16);
  const b = parseInt(value.slice(4, 6), 16);
  return (r * 299 + g * 587 + b * 114) / 1000 > 150 ? "#1a1a2e" : "#ffffff";
}

export default function ColorPalette({ colors }: { colors: PaletteColor[] }) {
  const [copiedHex, setCopiedHex] = useState<string | null>(null);

  async function copy(hex: string) {
    try {
      await navigator.clipboard.writeText(hex);
      setCopiedHex(hex);
      setTimeout(() => setCopiedHex(null), 1500);
    } catch {
      // presse-papiers indisponible
    }
  }

  return (
    <div className="grid grid-cols-2 gap-3 sm:grid-cols-3">
      {colors.map((color) => (
        <button
          key={color.hex + color.name}
          type="button"
          onClick={() => copy(color.hex)}
          title="לחיצה מעתיקה את הקוד"
          className="group overflow-hidden rounded-xl border border-navy/10 text-right transition-transform hover:-translate-y-0.5 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-gold"
        >
          <div
            className="flex h-16 items-center justify-center text-sm font-bold"
            style={{ backgroundColor: color.hex, color: textColorFor(color.hex) }}
          >
            {copiedHex === color.hex ? (
              <span className="inline-flex items-center gap-1">
                <Check aria-hidden className="h-4 w-4" /> הועתק
              </span>
            ) : (
              <span dir="ltr" className="font-mono" style={{ fontFamily: "var(--font-mono-v2), monospace" }}>
                {color.hex}
              </span>
            )}
          </div>
          <div className="bg-white p-2.5">
            <p className="text-sm font-bold text-text-main">{color.name}</p>
            <p className="mt-0.5 text-xs leading-snug text-text-main/60">{color.usage}</p>
          </div>
        </button>
      ))}
    </div>
  );
}
