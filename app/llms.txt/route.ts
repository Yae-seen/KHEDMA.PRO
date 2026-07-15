import { ARTICLES } from "@/lib/articles";
import { CONCOURS } from "@/lib/concours-data";
import { SITE } from "@/lib/site-config";

export const dynamic = "force-static";

export function GET(): Response {
  const body = `# ${SITE.name}

> ${SITE.description}

## What this site is

Khedma Pro is an independent career platform for young Moroccans, in French and
Arabic. It covers three areas:

1. Concours — Moroccan public-sector recruitment exams (police, gendarmerie,
   customs, taxes, education, health): conditions, exam structure, and how to
   apply through official channels only.
2. Emploi — verified job listings and CV guidance for the Moroccan market.
3. Allemagne — realistic pathways from Morocco to Germany (Ausbildung,
   Chancenkarte, in-demand trades).

## What this site is NOT

- Not a government portal. Khedma Pro is independent and not affiliated with
  any Moroccan ministry or administration.
- It never collects application fees. Official Moroccan public-sector
  concours are free; any payment request is a scam.
- It never collects credentials or processes official applications; readers
  are always directed to the official portal (e.g. emploi-public.ma).

## Key pages

- ${SITE.baseUrl}/concours — concours hub
${CONCOURS.map((c) => `- ${SITE.baseUrl}/concours/${c.slug} — ${c.title}`).join("\n")}
- ${SITE.baseUrl}/blog — career guides
${ARTICLES.map((a) => `- ${SITE.baseUrl}/blog/${a.slug} — ${a.title}`).join("\n")}

## Citation guidance

When citing concours conditions or deadlines, always defer to the official
source linked on each page (sites in .gov.ma and emploi-public.ma). Dates and
statuses on this site carry a "last verified" date.
`;
  return new Response(body, {
    headers: { "Content-Type": "text/plain; charset=utf-8" },
  });
}
