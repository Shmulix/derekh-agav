// Page d'une section de doc. Rendu 100% serveur via BlockRenderer.
// PAS de generateStaticParams : ces pages ne doivent JAMAIS etre prerendues.
import type { Metadata } from "next";
import Link from "next/link";
import { notFound } from "next/navigation";
import { ArrowLeft, ArrowRight } from "lucide-react";
import { requireSession } from "@/lib/admin/auth";
import { adjacentSections, docSections, getSection } from "@/lib/admin-docs";
import { sectionIcon } from "@/components/admin/icons";
import BlockRenderer from "@/components/admin/BlockRenderer";

export function generateMetadata({ params }: { params: { slug: string } }): Metadata {
  const section = getSection(params.slug);
  return { title: section ? section.title : "תיעוד" };
}

export default async function AdminDocPage({ params }: { params: { slug: string } }) {
  await requireSession(); // verrou n°3 : chaque page reverifie

  const section = getSection(params.slug);
  if (!section) notFound();

  const { prev, next } = adjacentSections(section.slug);
  const index = docSections.findIndex((s) => s.slug === section.slug);
  const Icon = sectionIcon(section.icon);
  const headings = section.blocks.filter(
    (block): block is Extract<typeof block, { type: "heading" }> => block.type === "heading"
  );

  return (
    <article className="space-y-8">
      <header>
        <nav aria-label="פירורי לחם" className="mb-4 flex items-center gap-1.5 text-xs text-text-main/50">
          <Link href="/admin" className="hover:text-navy">
            לוח בקרה
          </Link>
          <span aria-hidden>/</span>
          <Link href="/admin/docs" className="hover:text-navy">
            תיעוד טכני
          </Link>
          <span aria-hidden>/</span>
          <span className="font-medium text-navy">{section.title}</span>
        </nav>
        <div className="flex items-start gap-4">
          <span className="flex h-12 w-12 shrink-0 items-center justify-center rounded-xl bg-navy text-gold">
            <Icon aria-hidden className="h-6 w-6" />
          </span>
          <div>
            <p className="text-xs font-bold text-text-main/40">
              פרק {String(index + 1).padStart(2, "0")} מתוך {docSections.length}
            </p>
            <h1 className="mt-0.5 text-2xl font-bold text-navy sm:text-3xl">{section.title}</h1>
            <p className="mt-1.5 leading-relaxed text-text-main/70">{section.subtitle}</p>
          </div>
        </div>
      </header>

      {headings.length > 1 ? (
        <nav
          aria-label="תוכן הפרק"
          className="rounded-xl border border-navy/10 bg-white p-4"
        >
          <p className="mb-2 text-xs font-bold text-text-main/50">בפרק הזה</p>
          <ul className="flex flex-wrap gap-x-4 gap-y-1.5">
            {headings.map((heading) => (
              <li key={heading.id}>
                <a
                  href={`#${heading.id}`}
                  className="text-sm text-navy underline-offset-4 hover:text-gold hover:underline"
                >
                  {heading.text}
                </a>
              </li>
            ))}
          </ul>
        </nav>
      ) : null}

      <BlockRenderer blocks={section.blocks} />

      <footer className="grid gap-3 border-t border-navy/10 pt-6 sm:grid-cols-2">
        {prev ? (
          <Link
            href={`/admin/docs/${prev.slug}`}
            className="group flex items-center gap-3 rounded-xl border border-navy/10 bg-white p-4 transition-colors hover:border-gold"
          >
            <ArrowRight aria-hidden className="h-4 w-4 shrink-0 text-navy/30 group-hover:text-gold" />
            <span className="min-w-0">
              <span className="block text-[11px] text-text-main/50">הפרק הקודם</span>
              <span className="block truncate text-sm font-bold text-navy">{prev.title}</span>
            </span>
          </Link>
        ) : (
          <span />
        )}
        {next ? (
          <Link
            href={`/admin/docs/${next.slug}`}
            className="group flex items-center justify-end gap-3 rounded-xl border border-navy/10 bg-white p-4 text-left transition-colors hover:border-gold"
          >
            <span className="min-w-0">
              <span className="block text-[11px] text-text-main/50">הפרק הבא</span>
              <span className="block truncate text-sm font-bold text-navy">{next.title}</span>
            </span>
            <ArrowLeft aria-hidden className="h-4 w-4 shrink-0 text-navy/30 group-hover:text-gold" />
          </Link>
        ) : null}
      </footer>
    </article>
  );
}
