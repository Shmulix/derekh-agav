// (server) Rend une liste de DocBlock. C'est LE point d'entree du contenu de
// la doc : tout reste cote serveur, les composants clients ne recoivent que
// des props ou des ReactNode deja rendus.
import type { DocBlock } from "@/lib/admin-docs/types";
import { renderInline } from "./inline";
import Callout from "./Callout";
import CodeBlock from "./CodeBlock";
import DocTable from "./DocTable";
import FileTreeBlock from "./FileTreeBlock";
import ColorPalette from "./ColorPalette";
import AdminAccordion from "./AdminAccordion";
import ChecklistBlock from "./ChecklistBlock";

function renderBlock(block: DocBlock, key: number) {
  switch (block.type) {
    case "heading":
      return (
        <h2
          key={key}
          id={block.id}
          className="scroll-mt-24 border-r-4 border-gold pr-3 text-xl font-bold text-navy"
        >
          {block.text}
        </h2>
      );
    case "paragraph":
      return (
        <p key={key} className="leading-relaxed text-text-main">
          {renderInline(block.text)}
        </p>
      );
    case "callout":
      return <Callout key={key} variant={block.variant} title={block.title} text={block.text} />;
    case "code":
      return (
        <CodeBlock key={key} code={block.code} filename={block.filename} caption={block.caption} />
      );
    case "table":
      return <DocTable key={key} headers={block.headers} rows={block.rows} caption={block.caption} />;
    case "routeTable":
      return (
        <DocTable
          key={key}
          headers={["נתיב", "קובץ", "סטטוס", "הערה"]}
          rows={block.routes.map((route) => [
            `\`${route.path}\``,
            `\`${route.file}\``,
            route.status,
            route.note,
          ])}
        />
      );
    case "colorPalette":
      return <ColorPalette key={key} colors={block.colors} />;
    case "checklist":
      return <ChecklistBlock key={key} id={block.id} items={block.items} />;
    case "accordion":
      return (
        <AdminAccordion
          key={key}
          items={block.items.map((item) => ({
            title: item.title,
            content: <BlockRenderer blocks={item.blocks} />,
          }))}
        />
      );
    case "fileTree":
      return <FileTreeBlock key={key} root={block.root} nodes={block.nodes} />;
    case "keyValue":
      return (
        <dl key={key} className="grid gap-px border border-[#e7e9f0] bg-[#e7e9f0] sm:grid-cols-2">
          {block.pairs.map((pair) => (
            <div key={pair.key} className="bg-white p-4">
              <dt className="text-xs font-medium text-[#3a4255]">{pair.key}</dt>
              <dd dir="auto" className="mt-1 break-all text-sm font-bold text-navy">
                {renderInline(pair.value)}
              </dd>
            </div>
          ))}
        </dl>
      );
  }
}

export default function BlockRenderer({ blocks }: { blocks: DocBlock[] }) {
  return <div className="space-y-5">{blocks.map((block, index) => renderBlock(block, index))}</div>;
}
