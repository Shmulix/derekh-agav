import Link from "next/link";
import { ChevronLeft } from "lucide-react";

// Fil d'Ariane commun à toutes les pages posts.
export default function ArticleBreadcrumb({ title }: { title: string }) {
  return (
    <nav aria-label="ניווט משני" className="flex items-center gap-2 text-xs text-gray-500 mb-8">
      <Link href="/" className="hover:text-navy">דרך אגב</Link>
      <ChevronLeft size={12} />
      <Link href="/posts" className="hover:text-navy">מאמרים</Link>
      <ChevronLeft size={12} />
      <span className="text-gray-600">{title}</span>
    </nav>
  );
}
