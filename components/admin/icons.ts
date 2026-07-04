// (server) Carte d'icones lucide pour les sections de doc.
import {
  Banknote,
  BookOpen,
  ClipboardCheck,
  FileText,
  Home,
  Image as ImageIcon,
  Layers,
  Network,
  Palette,
  PenTool,
  Rocket,
  Shield,
  ToggleLeft,
  TrendingUp,
  type LucideIcon,
} from "lucide-react";

export const SECTION_ICONS: Record<string, LucideIcon> = {
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

export function sectionIcon(name: string): LucideIcon {
  return SECTION_ICONS[name] ?? FileText;
}
