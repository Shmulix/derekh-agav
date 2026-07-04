"use client";

// Navigation admin (sidebar desktop + barre horizontale mobile).
// Recoit les items par props depuis le layout serveur authentifie : ce
// fichier ne contient AUCUN contenu de doc, seulement une carte d'icones.
import Link from "next/link";
import { usePathname } from "next/navigation";
import {
  Banknote,
  BookOpen,
  ClipboardCheck,
  FileText,
  Home,
  Image as ImageIcon,
  Layers,
  LayoutDashboard,
  Network,
  Palette,
  PenTool,
  Rocket,
  Shield,
  ToggleLeft,
  TrendingUp,
  type LucideIcon,
} from "lucide-react";

const ICONS: Record<string, LucideIcon> = {
  home: Home,
  banknote: Banknote,
  "pen-tool": PenTool,
  layers: Layers,
  network: Network,
  "book-open": BookOpen,
  palette: Palette,
  "toggle-left": ToggleLeft,
  image: ImageIcon,
  "trending-up": TrendingUp,
  shield: Shield,
  rocket: Rocket,
  "file-text": FileText,
  "clipboard-check": ClipboardCheck,
};

export type AdminNavItem = { slug: string; title: string; icon: string };

export default function AdminNav({
  items,
  variant,
}: {
  items: AdminNavItem[];
  variant: "sidebar" | "mobile";
}) {
  const pathname = usePathname();

  const links = [
    { href: "/admin", title: "לוח בקרה", icon: "dashboard", active: pathname === "/admin" },
    { href: "/admin/docs", title: "כל הפרקים", icon: "book-open", active: pathname === "/admin/docs" },
    ...items.map((item) => ({
      href: `/admin/docs/${item.slug}`,
      title: item.title,
      icon: item.icon,
      active: pathname === `/admin/docs/${item.slug}`,
    })),
  ];

  if (variant === "mobile") {
    return (
      <nav aria-label="ניווט תיעוד" className="flex gap-1 overflow-x-auto px-3 py-2">
        {links.map((link) => (
          <Link
            key={link.href}
            href={link.href}
            aria-current={link.active ? "page" : undefined}
            className={`whitespace-nowrap rounded-full px-3.5 py-1.5 text-xs font-medium transition-colors ${
              link.active
                ? "bg-gold text-[#1a1a2e]"
                : "bg-white/10 text-white/80 hover:bg-white/20 hover:text-white"
            }`}
          >
            {link.title}
          </Link>
        ))}
      </nav>
    );
  }

  return (
    <nav aria-label="ניווט תיעוד" className="space-y-0.5">
      {links.map((link) => {
        const Icon = link.icon === "dashboard" ? LayoutDashboard : ICONS[link.icon] ?? FileText;
        return (
          <Link
            key={link.href}
            href={link.href}
            aria-current={link.active ? "page" : undefined}
            className={`relative flex items-center gap-3 rounded-lg px-3 py-2.5 text-sm transition-colors focus-visible:outline focus-visible:outline-2 focus-visible:-outline-offset-2 focus-visible:outline-gold ${
              link.active
                ? "bg-white/10 font-bold text-white"
                : "text-white/70 hover:bg-white/5 hover:text-white"
            }`}
          >
            {link.active ? (
              <span aria-hidden className="absolute right-0 top-1/2 h-6 w-1 -translate-y-1/2 rounded-full bg-gold" />
            ) : null}
            <Icon aria-hidden className={`h-4 w-4 shrink-0 ${link.active ? "text-gold" : ""}`} />
            <span className="leading-tight">{link.title}</span>
          </Link>
        );
      })}
    </nav>
  );
}
