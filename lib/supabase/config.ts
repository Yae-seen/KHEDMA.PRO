/**
 * Supabase is entirely optional. When the env vars are absent the whole backend
 * (accounts, live job board, saved jobs) is disabled and the site runs as the
 * pure-static guide it was before. `isSupabaseConfigured` is the single gate
 * every backend feature checks.
 */
export const SUPABASE_URL = process.env.NEXT_PUBLIC_SUPABASE_URL ?? "";
export const SUPABASE_ANON_KEY = process.env.NEXT_PUBLIC_SUPABASE_ANON_KEY ?? "";

export const isSupabaseConfigured = Boolean(SUPABASE_URL && SUPABASE_ANON_KEY);
