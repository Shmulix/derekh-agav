// (server) Mini-parseur inline pour la prose de la doc : **gras** et `code`.
// Volontairement minimal : pas de markdown complet, pas de dependance.
import type { ReactNode } from "react";

export function renderInline(text: string): ReactNode[] {
  const nodes: ReactNode[] = [];
  // Decoupe sur **...** et `...` en conservant les delimiteurs captures.
  const parts = text.split(/(\*\*[^*]+\*\*|`[^`]+`)/g);
  parts.forEach((part, index) => {
    if (part.startsWith("**") && part.endsWith("**")) {
      nodes.push(<strong key={index}>{part.slice(2, -2)}</strong>);
    } else if (part.startsWith("`") && part.endsWith("`")) {
      nodes.push(
        <code
          key={index}
          dir="ltr"
          className="rounded bg-navy/[0.07] px-1.5 py-0.5 font-mono text-[0.85em] text-navy"
          style={{ fontFamily: "var(--font-mono-v2), monospace" }}
        >
          {part.slice(1, -1)}
        </code>
      );
    } else if (part) {
      nodes.push(part);
    }
  });
  return nodes;
}
