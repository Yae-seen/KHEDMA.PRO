import Link from "next/link";

/**
 * Renders content text with two inline markers:
 *   [label](/href)  →  link (Next <Link> for internal, <a> for external)
 *   **text**        →  <strong>
 */
export function RenderInline({ text }: { text: string }) {
  const parts = text.split(/(\[[^\]]+\]\([^)]+\)|\*\*[^*]+\*\*)/g);
  return (
    <>
      {parts.map((part, index) => {
        const link = part.match(/^\[([^\]]+)\]\(([^)]+)\)$/);
        if (link) {
          const [, label, href] = link;
          if (href.startsWith("/")) {
            return (
              <Link key={index} href={href} className="font-semibold text-primary underline decoration-primary/30 underline-offset-2 hover:decoration-primary">
                {label}
              </Link>
            );
          }
          return (
            <a
              key={index}
              href={href}
              rel="noopener noreferrer"
              target="_blank"
              className="font-semibold text-primary underline decoration-primary/30 underline-offset-2 hover:decoration-primary"
            >
              {label}
            </a>
          );
        }
        const bold = part.match(/^\*\*([^*]+)\*\*$/);
        if (bold) {
          return <strong key={index}>{bold[1]}</strong>;
        }
        return part;
      })}
    </>
  );
}
