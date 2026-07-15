import { createClient } from "@/lib/supabase/server";

export interface Job {
  id: string;
  title: string;
  company: string;
  city: string | null;
  sector: string | null;
  description: string | null;
  apply_url: string | null;
  source: string | null;
  published_at: string | null;
}

export interface JobFilters {
  city?: string;
  sector?: string;
  q?: string;
}

const COLUMNS = "id,title,company,city,sector,description,apply_url,source,published_at";

/** Published, verified jobs (newest first). Empty array when the backend is off. */
export async function getPublishedJobs(filters: JobFilters = {}): Promise<Job[]> {
  const supabase = await createClient();
  if (!supabase) return [];
  let query = supabase
    .from("jobs")
    .select(COLUMNS)
    .not("published_at", "is", null)
    .eq("is_verified", true)
    .order("published_at", { ascending: false })
    .limit(100);

  if (filters.city) query = query.eq("city", filters.city);
  if (filters.sector) query = query.eq("sector", filters.sector);
  if (filters.q) query = query.ilike("title", `%${filters.q}%`);

  const { data, error } = await query;
  if (error) return [];
  return (data ?? []) as Job[];
}

export async function getJobById(id: string): Promise<Job | null> {
  const supabase = await createClient();
  if (!supabase) return null;
  const { data } = await supabase
    .from("jobs")
    .select(COLUMNS)
    .eq("id", id)
    .not("published_at", "is", null)
    .eq("is_verified", true)
    .maybeSingle();
  return (data as Job) ?? null;
}

/** Distinct cities/sectors present in the board — powers the filters. */
export async function getJobFacets(): Promise<{ cities: string[]; sectors: string[] }> {
  const supabase = await createClient();
  if (!supabase) return { cities: [], sectors: [] };
  const { data } = await supabase
    .from("jobs")
    .select("city,sector")
    .not("published_at", "is", null)
    .eq("is_verified", true);
  const rows = (data ?? []) as { city: string | null; sector: string | null }[];
  const cities = [...new Set(rows.map((r) => r.city).filter(Boolean))].sort() as string[];
  const sectors = [...new Set(rows.map((r) => r.sector).filter(Boolean))].sort() as string[];
  return { cities, sectors };
}
