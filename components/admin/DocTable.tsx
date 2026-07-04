// (server) Table RTL stylee (header sticky, lignes zebrees). Sert aussi au
// rendu des routeTable via un mapping fait dans BlockRenderer.
import { renderInline } from "./inline";

export default function DocTable({
  headers,
  rows,
  caption,
}: {
  headers: string[];
  rows: string[][];
  caption?: string;
}) {
  return (
    <figure>
      <div className="overflow-x-auto rounded-none border border-[#e7e9f0]">
        <table className="w-full min-w-[560px] border-collapse text-sm">
          <thead>
            <tr className="bg-navy text-white">
              {headers.map((header) => (
                <th key={header} className="px-4 py-3 text-right text-xs font-bold">
                  {header}
                </th>
              ))}
            </tr>
          </thead>
          <tbody>
            {rows.map((row, rowIndex) => (
              <tr key={rowIndex} className={rowIndex % 2 === 1 ? "bg-[#f7f8fb]" : "bg-white"}>
                {row.map((cell, cellIndex) => (
                  <td key={cellIndex} className="px-4 py-2.5 align-top leading-relaxed text-text-main">
                    {renderInline(cell)}
                  </td>
                ))}
              </tr>
            ))}
          </tbody>
        </table>
      </div>
      {caption ? (
        <figcaption className="mt-2 text-xs text-text-main/60">{caption}</figcaption>
      ) : null}
    </figure>
  );
}
