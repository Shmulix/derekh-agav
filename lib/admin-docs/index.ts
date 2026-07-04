// Registre central de la documentation admin.
// Importe UNIQUEMENT depuis des Server Components proteges (voir types.ts).
import type { DocBlock, DocSection, SearchEntry } from "./types";
import { overviewSection } from "./sections/01-overview";
import { businessModelSection } from "./sections/02-business-model";
import { brandToneSection } from "./sections/03-brand-tone";
import { techStackSection } from "./sections/04-tech-stack";
import { architectureSection } from "./sections/05-architecture";
import { contentSection } from "./sections/06-content";
import { designSystemSection } from "./sections/07-design-system";
import { modesSection } from "./sections/08-modes";
import { imagesSection } from "./sections/09-images";
import { seoSection } from "./sections/10-seo";
import { securitySection } from "./sections/11-security";
import { deploymentSection } from "./sections/12-deployment";
import { livingDocsSection } from "./sections/13-living-docs";
import { launchChecklistSection } from "./sections/14-launch-checklist";

export const docSections: DocSection[] = [
  overviewSection,
  businessModelSection,
  brandToneSection,
  techStackSection,
  architectureSection,
  contentSection,
  designSystemSection,
  modesSection,
  imagesSection,
  seoSection,
  securitySection,
  deploymentSection,
  livingDocsSection,
  launchChecklistSection,
];

export function getSection(slug: string): DocSection | undefined {
  return docSections.find((section) => section.slug === slug);
}

export function adjacentSections(slug: string): {
  prev: DocSection | null;
  next: DocSection | null;
} {
  const index = docSections.findIndex((section) => section.slug === slug);
  if (index === -1) return { prev: null, next: null };
  return {
    prev: index > 0 ? docSections[index - 1] : null,
    next: index < docSections.length - 1 ? docSections[index + 1] : null,
  };
}

// Texte brut d'un bloc pour l'index de recherche (digests courts : l'index
// voyage dans le payload RSC, on ne duplique pas les sections entieres).
function blockPlainText(block: DocBlock): string {
  switch (block.type) {
    case "paragraph":
      return block.text.replace(/\*\*|`/g, "");
    case "callout":
      return `${block.title ?? ""} ${block.text}`;
    case "table":
      return `${block.caption ?? ""} ${block.rows.map((row) => row.join(" ")).join(" ")}`;
    case "routeTable":
      return block.routes.map((route) => `${route.path} ${route.note}`).join(" ");
    case "colorPalette":
      return block.colors.map((color) => `${color.name} ${color.hex} ${color.usage}`).join(" ");
    case "checklist":
      return block.items.map((item) => `${item.text} ${item.detail ?? ""}`).join(" ");
    case "accordion":
      return block.items
        .map((item) => `${item.title} ${item.blocks.map(blockPlainText).join(" ")}`)
        .join(" ");
    case "keyValue":
      return block.pairs.map((pair) => `${pair.key} ${pair.value}`).join(" ");
    case "code":
      return `${block.filename ?? ""} ${block.caption ?? ""}`;
    case "fileTree":
      return "";
    case "heading":
      return "";
  }
}

const DIGEST_LENGTH = 150;

export function buildSearchIndex(): SearchEntry[] {
  const entries: SearchEntry[] = [];

  for (const section of docSections) {
    entries.push({
      sectionSlug: section.slug,
      sectionTitle: section.title,
      headingId: "",
      headingText: section.title,
      digest: section.subtitle,
    });

    let currentHeading: { id: string; text: string } | null = null;
    let digestParts: string[] = [];

    const flush = () => {
      if (!currentHeading) return;
      entries.push({
        sectionSlug: section.slug,
        sectionTitle: section.title,
        headingId: currentHeading.id,
        headingText: currentHeading.text,
        digest: digestParts.join(" ").trim().slice(0, DIGEST_LENGTH),
      });
    };

    for (const block of section.blocks) {
      if (block.type === "heading") {
        flush();
        currentHeading = { id: block.id, text: block.text };
        digestParts = [];
      } else if (currentHeading) {
        digestParts.push(blockPlainText(block));
      }
    }
    flush();
  }

  return entries;
}
