// (server) Arborescence de fichiers : arbre monospace LTR, annotations hebreu
// alignees a droite de chaque noeud.
import type { FileNode } from "@/lib/admin-docs/types";
import { Folder, FileText } from "lucide-react";

function TreeNode({ node, depth }: { node: FileNode; depth: number }) {
  const isFolder = Boolean(node.children?.length) || node.name.endsWith("/");
  return (
    <li>
      <div className="flex items-baseline justify-between gap-4 rounded px-2 py-1 hover:bg-white/5">
        <span
          dir="ltr"
          className="flex items-center gap-2 whitespace-nowrap font-mono text-[13px] text-[#dbe4f5]"
          style={{ fontFamily: "var(--font-mono-v2), monospace", paddingLeft: `${depth * 18}px` }}
        >
          {isFolder ? (
            <Folder aria-hidden className="h-3.5 w-3.5 shrink-0 text-gold" />
          ) : (
            <FileText aria-hidden className="h-3.5 w-3.5 shrink-0 text-white/40" />
          )}
          {node.name}
        </span>
        {node.note ? (
          <span className="text-right text-xs leading-snug text-white/60">{node.note}</span>
        ) : null}
      </div>
      {node.children?.length ? (
        <ul>
          {node.children.map((child) => (
            <TreeNode key={child.name} node={child} depth={depth + 1} />
          ))}
        </ul>
      ) : null}
    </li>
  );
}

export default function FileTreeBlock({ root, nodes }: { root: string; nodes: FileNode[] }) {
  return (
    <div className="overflow-x-auto rounded-none bg-[#0e1a30] p-4">
      <p
        dir="ltr"
        className="mb-2 px-2 font-mono text-[13px] font-bold text-gold"
        style={{ fontFamily: "var(--font-mono-v2), monospace" }}
      >
        {root}
      </p>
      <ul>
        {nodes.map((node) => (
          <TreeNode key={node.name} node={node} depth={1} />
        ))}
      </ul>
    </div>
  );
}
