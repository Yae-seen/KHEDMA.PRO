/**
 * Concours currently open — a hand-verified snapshot, NOT a live feed.
 *
 * DATA DISCIPLINE:
 * - Every entry was seen directly on an official source (emploi-public.ma or a
 *   ministry .gov.ma site) on ACTUELS_LAST_VERIFIED. Refresh weekly.
 * - The UI filters by the REAL current date (the page uses ISR — see
 *   `app/concours/page.tsx` `revalidate`), so entries disappear the day their
 *   deadline passes even without a redeploy.
 * - If the snapshot itself goes stale (older than SNAPSHOT_STALE_AFTER_DAYS),
 *   the page stops presenting it as current and points users to the official
 *   portal instead. This bounds the blast radius of a missed weekly refresh.
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

/** Beyond this many days without a refresh, treat the snapshot as unreliable. */
export const SNAPSHOT_STALE_AFTER_DAYS = 12;

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

const MS_PER_DAY = 24 * 60 * 60 * 1000;

function isoToday(): string {
  return new Date().toISOString().slice(0, 10);
}

function daysBetween(fromIso: string, toIso: string): number {
  const from = Date.parse(`${fromIso}T00:00:00Z`);
  const to = Date.parse(`${toIso}T00:00:00Z`);
  return Math.round((to - from) / MS_PER_DAY);
}

export interface SnapshotStatus {
  /** Entries whose deadline is today or later, soonest first. */
  ouverts: ConcoursActuel[];
  /** Snapshot age in days (relative to today). */
  ageDays: number;
  /** True once the snapshot is older than the staleness threshold. */
  stale: boolean;
  /** The reference date used ("today"). */
  today: string;
  lastVerified: string;
}

/**
 * Resolve the live state of the snapshot. Pass a fixed date for tests; defaults
 * to the real current date so ISR re-renders keep it honest.
 */
export function snapshotStatus(today: string = isoToday()): SnapshotStatus {
  const ageDays = daysBetween(ACTUELS_LAST_VERIFIED, today);
  const ouverts = CONCOURS_ACTUELS.filter((c) => c.deadline >= today).sort((a, b) =>
    a.deadline.localeCompare(b.deadline),
  );
  return {
    ouverts,
    ageDays,
    stale: ageDays > SNAPSHOT_STALE_AFTER_DAYS,
    today,
    lastVerified: ACTUELS_LAST_VERIFIED,
  };
}
