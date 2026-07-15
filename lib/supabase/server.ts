import { cookies } from "next/headers";
import { createServerClient } from "@supabase/ssr";
import { SUPABASE_ANON_KEY, SUPABASE_URL, isSupabaseConfigured } from "@/lib/supabase/config";

/**
 * Server Supabase client (reads/writes the auth cookie). Returns null when the
 * backend isn't configured, so callers degrade gracefully. In Server Components
 * the cookie write is a no-op (handled by middleware); the try/catch absorbs it.
 */
export async function createClient() {
  if (!isSupabaseConfigured) return null;
  const cookieStore = await cookies();
  return createServerClient(SUPABASE_URL, SUPABASE_ANON_KEY, {
    cookies: {
      getAll() {
        return cookieStore.getAll();
      },
      setAll(toSet) {
        try {
          for (const { name, value, options } of toSet) {
            cookieStore.set(name, value, options);
          }
        } catch {
          // called from a Server Component — middleware refreshes the session.
        }
      },
    },
  });
}
