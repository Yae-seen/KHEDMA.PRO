import type { FaqItem } from "@/lib/content-types";
import { JsonLd } from "@/components/json-ld";
import { RenderInline } from "@/components/render-inline";
import { buildFaqJsonLd } from "@/lib/structured-data";

export function FaqSection({ title = "Questions fréquentes", items }: { title?: string; items: FaqItem[] }) {
  if (items.length === 0) return null;
  return (
    <section className="mt-14">
      <JsonLd data={buildFaqJsonLd(items)} />
      <h2 className="text-2xl font-bold tracking-tight text-ink">{title}</h2>
      <div className="mt-6 space-y-3">
        {items.map((item) => (
          <details
            key={item.question}
            className="group rounded-xl border border-border bg-surface p-5 open:shadow-sm"
          >
            <summary className="flex cursor-pointer list-none items-center justify-between gap-4 font-semibold text-ink [&::-webkit-details-marker]:hidden">
              {item.question}
              <span
                aria-hidden="true"
                className="shrink-0 text-primary transition-transform group-open:rotate-45"
              >
                +
              </span>
            </summary>
            <p className="mt-3 leading-relaxed text-muted">
              <RenderInline text={item.answer} />
            </p>
          </details>
        ))}
      </div>
    </section>
  );
}
