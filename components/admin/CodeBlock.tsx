// (server) Bloc de code : fond navy fonce, onglet filename optionnel, bouton
// copier. Le contenu du code est TOUJOURS en LTR, meme dans une page RTL.
import CopyButton from "./CopyButton";

export default function CodeBlock({
  code,
  filename,
  caption,
}: {
  code: string;
  filename?: string;
  caption?: string;
}) {
  return (
    <figure>
      <div className="overflow-hidden rounded-xl bg-[#0d1f3c]">
        <div className="flex items-center justify-between border-b border-white/10 px-4 py-2" dir="ltr">
          <span className="font-mono text-xs text-gold" style={{ fontFamily: "var(--font-mono-v2), monospace" }}>
            {filename ?? ""}
          </span>
          <CopyButton text={code} />
        </div>
        <pre dir="ltr" className="overflow-x-auto p-4 text-left">
          <code
            className="font-mono text-[13px] leading-relaxed text-[#dbe4f5]"
            style={{ fontFamily: "var(--font-mono-v2), monospace" }}
          >
            {code}
          </code>
        </pre>
      </div>
      {caption ? (
        <figcaption className="mt-2 text-xs text-text-main/60">{caption}</figcaption>
      ) : null}
    </figure>
  );
}
