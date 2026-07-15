import type { ContentBlock } from "@/lib/content-types";
import { RenderInline } from "@/components/render-inline";

function slugify(text: string): string {
  return text
    .toLowerCase()
    .normalize("NFD")
    .replace(/[̀-ͯ]/g, "")
    .replace(/[^a-z0-9]+/g, "-")
    .replace(/(^-|-$)/g, "");
}

export function ContentBlocks({ blocks }: { blocks: ContentBlock[] }) {
  return (
    <>
      {blocks.map((block, index) => {
        switch (block.type) {
          case "h2":
            return (
              <h2
                key={index}
                id={block.id ?? slugify(block.text)}
                className="mt-12 scroll-mt-24 text-2xl font-bold tracking-tight text-ink"
              >
                <RenderInline text={block.text} />
              </h2>
            );
          case "h3":
            return (
              <h3 key={index} className="mt-8 text-lg font-bold text-ink">
                <RenderInline text={block.text} />
              </h3>
            );
          case "p":
            return (
              <p key={index} className="mt-4 leading-relaxed text-muted">
                <RenderInline text={block.text} />
              </p>
            );
          case "ul":
            return (
              <ul key={index} className="mt-4 space-y-2.5">
                {block.items.map((item, i) => (
                  <li key={i} className="flex gap-2.5 leading-relaxed text-muted">
                    <span className="mt-0.5 shrink-0 font-bold text-primary" aria-hidden="true">
                      •
                    </span>
                    <span>
                      <RenderInline text={item} />
                    </span>
                  </li>
                ))}
              </ul>
            );
          case "ol":
            return (
              <ol key={index} className="mt-4 space-y-3 [counter-reset:step]">
                {block.items.map((item, i) => (
                  <li key={i} className="flex gap-3 leading-relaxed text-muted">
                    <span className="grid h-6 w-6 shrink-0 place-items-center rounded-full bg-primary/10 text-xs font-bold text-primary">
                      {i + 1}
                    </span>
                    <span>
                      <RenderInline text={item} />
                    </span>
                  </li>
                ))}
              </ol>
            );
          case "note":
            return (
              <div
                key={index}
                className="mt-6 rounded-xl border border-primary/20 bg-primary/5 p-4 text-sm leading-relaxed text-ink"
              >
                <RenderInline text={block.text} />
              </div>
            );
          case "warning":
            return (
              <div
                key={index}
                className="mt-6 rounded-xl border border-accent/40 bg-accent/10 p-4 text-sm font-medium leading-relaxed text-ink"
              >
                ⚠️ <RenderInline text={block.text} />
              </div>
            );
          case "table":
            return (
              <div key={index} className="mt-6 overflow-x-auto rounded-xl border border-border">
                <table className="w-full min-w-[28rem] border-collapse text-sm">
                  {block.caption && (
                    <caption className="bg-bg px-4 py-2 text-start text-xs font-semibold text-muted">
                      {block.caption}
                    </caption>
                  )}
                  <thead>
                    <tr className="bg-bg text-start">
                      {block.headers.map((header, i) => (
                        <th key={i} className="border-b border-border px-4 py-2.5 text-start font-bold text-ink">
                          {header}
                        </th>
                      ))}
                    </tr>
                  </thead>
                  <tbody>
                    {block.rows.map((row, ri) => (
                      <tr key={ri} className={ri % 2 === 1 ? "bg-bg/60" : undefined}>
                        {row.map((cell, ci) => (
                          <td key={ci} className="border-b border-border px-4 py-2.5 align-top text-muted last:font-medium">
                            <RenderInline text={cell} />
                          </td>
                        ))}
                      </tr>
                    ))}
                  </tbody>
                </table>
              </div>
            );
        }
      })}
    </>
  );
}
