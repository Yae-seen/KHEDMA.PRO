/**
 * Concours currently open — a hand-verified snapshot, NOT a live feed.
 *
 * Every entry here was seen directly on an official source (emploi-public.ma
 * or a ministry .gov.ma site) on ACTUELS_LAST_VERIFIED. Entries whose deadline
 * has passed are filtered out at render time. Refresh this file weekly.
 */

export interface ConcoursActuel {
  title: string;
  organisme: string;
  postes?: number;
  /** ISO date — candidature deadline as shown on the official source. */
  deadline: string;
  examDate?: string;
  sourceUrl: string;
  sourceLabel: string;
}

export const ACTUELS_LAST_VERIFIED = "2026-07-15";

export const CONCOURS_ACTUELS: ConcoursActuel[] = [
  {
    title: "Maîtres assistants des CRMEF (formateurs, par région et spécialité)",
    organisme: "Ministère de l'Éducation Nationale, du Préscolaire et des Sports",
    deadline: "2026-07-17",
    sourceUrl: "https://www.men.gov.ma/fr/concours",
    sourceLabel: "men.gov.ma",
  },
  {
    title: "Ingénieurs d'État, administrateurs et techniciens — 48 postes",
    organisme: "Ministère de l'Agriculture — Département de la Pêche maritime",
    postes: 48,
    deadline: "2026-07-20",
    examDate: "2026-08-02",
    sourceUrl: "https://www.emploi-public.ma/fr/concours-liste",
    sourceLabel: "emploi-public.ma",
  },
  {
    title: "Médecins premier grade (échelle 11) — 30 postes",
    organisme: "Ministère de la Santé et de la Protection Sociale",
    postes: 30,
    deadline: "2026-07-21",
    examDate: "2026-07-26",
    sourceUrl: "https://www.emploi-public.ma/fr/concours-liste",
    sourceLabel: "emploi-public.ma",
  },
  {
    title: "Administrateurs, techniciens et maître de conférences — 30 postes",
    organisme: "Ministère de la Solidarité, de l'Insertion Sociale et de la Famille",
    postes: 30,
    deadline: "2026-07-21",
    examDate: "2026-08-02",
    sourceUrl: "https://www.emploi-public.ma/fr/concours-liste",
    sourceLabel: "emploi-public.ma",
  },
  {
    title: "Médecins premier grade (échelle 11) — 10 postes",
    organisme: "Ministère de la Santé et de la Protection Sociale",
    postes: 10,
    deadline: "2026-07-23",
    examDate: "2026-07-26",
    sourceUrl: "https://www.emploi-public.ma/fr/concours-liste",
    sourceLabel: "emploi-public.ma",
  },
];

/** Entries still open on the given date (deadline not passed). */
export function concoursOuverts(onDate: string): ConcoursActuel[] {
  return CONCOURS_ACTUELS.filter((c) => c.deadline >= onDate).sort((a, b) =>
    a.deadline.localeCompare(b.deadline),
  );
}
