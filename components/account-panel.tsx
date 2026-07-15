"use client";

import { useEffect, useState } from "react";
import Link from "next/link";
import type { User } from "@supabase/supabase-js";
import { createClient } from "@/lib/supabase/client";

interface SavedRow {
  job_id: string;
  jobs: { id: string; title: string; company: string; city: string | null } | null;
}

/**
 * Account area: sign in / sign up / sign out via Supabase, then the user's saved
 * jobs. Renders a graceful notice when the backend isn't configured.
 */
export function AccountPanel() {
  const supabase = createClient();
  const [user, setUser] = useState<User | null>(null);
  // If the backend is off there is nothing to load — start settled.
  const [loading, setLoading] = useState(Boolean(supabase));
  const [mode, setMode] = useState<"in" | "up">("in");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [msg, setMsg] = useState<string | null>(null);
  const [saved, setSaved] = useState<SavedRow[]>([]);

  useEffect(() => {
    if (!supabase) return;
    supabase.auth.getUser().then(({ data }) => {
      setUser(data.user);
      setLoading(false);
    });
    const { data: sub } = supabase.auth.onAuthStateChange((_e, session) => {
      setUser(session?.user ?? null);
    });
    return () => sub.subscription.unsubscribe();
  }, [supabase]);

  useEffect(() => {
    if (!supabase || !user) return;
    supabase
      .from("saved_jobs")
      .select("job_id, jobs(id,title,company,city)")
      .then(({ data }) => setSaved((data as unknown as SavedRow[]) ?? []));
  }, [supabase, user]);

  if (!supabase) {
    return (
      <div className="rounded-2xl border border-border bg-surface p-6">
        <h2 className="text-lg font-bold text-ink">Les comptes arrivent bientôt</h2>
        <p className="mt-2 text-sm leading-relaxed text-muted">
          La création de compte (offres sauvegardées, suivi de candidatures) sera activée
          prochainement. En attendant, tous nos guides et outils restent gratuits et sans inscription.
        </p>
      </div>
    );
  }

  if (loading) {
    return <div className="rounded-2xl border border-border bg-surface p-6 text-muted">Chargement…</div>;
  }

  async function submit(e: React.FormEvent) {
    e.preventDefault();
    setMsg(null);
    if (!supabase) return;
    const fn =
      mode === "in"
        ? supabase.auth.signInWithPassword({ email, password })
        : supabase.auth.signUp({ email, password });
    const { error } = await fn;
    if (error) setMsg(error.message);
    else if (mode === "up") setMsg("Compte créé. Vérifiez votre e-mail si une confirmation est demandée.");
  }

  async function signOut() {
    await supabase?.auth.signOut();
    setUser(null);
    setSaved([]);
  }

  if (!user) {
    return (
      <div className="mx-auto max-w-md rounded-2xl border border-border bg-surface p-6">
        <div className="flex gap-2 rounded-lg bg-bg p-1 text-sm font-semibold">
          <button
            onClick={() => setMode("in")}
            className={`flex-1 rounded-md px-3 py-1.5 ${mode === "in" ? "bg-surface text-ink shadow-sm" : "text-muted"}`}
          >
            Se connecter
          </button>
          <button
            onClick={() => setMode("up")}
            className={`flex-1 rounded-md px-3 py-1.5 ${mode === "up" ? "bg-surface text-ink shadow-sm" : "text-muted"}`}
          >
            Créer un compte
          </button>
        </div>
        <form onSubmit={submit} className="mt-5 space-y-3">
          <label className="block text-sm">
            <span className="font-semibold text-ink">E-mail</span>
            <input
              type="email"
              required
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              className="mt-1 w-full rounded-lg border border-border bg-bg px-3 py-2 text-sm text-ink outline-none focus:border-primary"
            />
          </label>
          <label className="block text-sm">
            <span className="font-semibold text-ink">Mot de passe</span>
            <input
              type="password"
              required
              minLength={8}
              value={password}
              onChange={(e) => setPassword(e.target.value)}
              className="mt-1 w-full rounded-lg border border-border bg-bg px-3 py-2 text-sm text-ink outline-none focus:border-primary"
            />
          </label>
          <button className="w-full rounded-lg bg-primary px-4 py-2.5 text-sm font-bold text-white transition-colors hover:bg-primary-dark">
            {mode === "in" ? "Se connecter" : "Créer mon compte"}
          </button>
        </form>
        {msg && <p className="mt-3 rounded-lg bg-bg p-3 text-xs leading-relaxed text-ink">{msg}</p>}
        <p className="mt-4 text-xs leading-relaxed text-muted">
          Nous ne demandons jamais de paiement. Votre compte sert uniquement à sauvegarder des offres
          et suivre vos candidatures.
        </p>
      </div>
    );
  }

  return (
    <div className="space-y-6">
      <div className="flex flex-wrap items-center justify-between gap-3 rounded-2xl border border-border bg-surface p-5">
        <div>
          <div className="text-sm text-muted">Connecté en tant que</div>
          <div className="font-bold text-ink">{user.email}</div>
        </div>
        <button
          onClick={signOut}
          className="rounded-lg border border-border px-4 py-2 text-sm font-semibold text-ink transition-colors hover:border-status hover:text-status"
        >
          Se déconnecter
        </button>
      </div>

      <div className="rounded-2xl border border-border bg-surface p-5">
        <h2 className="font-bold text-ink">Offres sauvegardées</h2>
        {saved.length === 0 ? (
          <p className="mt-2 text-sm text-muted">
            Aucune offre sauvegardée. Parcourez les{" "}
            <Link href="/emploi/offres" className="font-semibold text-primary underline">
              offres
            </Link>{" "}
            et cliquez sur « Sauvegarder ».
          </p>
        ) : (
          <ul className="mt-3 space-y-2">
            {saved.map((row) => (
              <li key={row.job_id} className="text-sm">
                {row.jobs ? (
                  <Link href={`/emploi/offres/${row.jobs.id}`} className="font-semibold text-primary underline">
                    {row.jobs.title} — {row.jobs.company}
                  </Link>
                ) : (
                  <span className="text-muted">Offre indisponible</span>
                )}
              </li>
            ))}
          </ul>
        )}
      </div>
    </div>
  );
}
