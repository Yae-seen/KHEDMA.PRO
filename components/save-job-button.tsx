"use client";

import { useEffect, useState } from "react";
import { createClient } from "@/lib/supabase/client";

/**
 * Save / unsave a job for the signed-in user. Hidden entirely when the backend
 * isn't configured. Prompts sign-in when a signed-out user tries to save.
 */
export function SaveJobButton({ jobId }: { jobId: string }) {
  const supabase = createClient();
  const [ready, setReady] = useState(false);
  const [signedIn, setSignedIn] = useState(false);
  const [saved, setSaved] = useState(false);
  const [busy, setBusy] = useState(false);

  useEffect(() => {
    if (!supabase) return;
    supabase.auth.getUser().then(async ({ data }) => {
      const isIn = Boolean(data.user);
      setSignedIn(isIn);
      if (isIn) {
        const { data: row } = await supabase
          .from("saved_jobs")
          .select("job_id")
          .eq("job_id", jobId)
          .maybeSingle();
        setSaved(Boolean(row));
      }
      setReady(true);
    });
  }, [supabase, jobId]);

  if (!supabase) return null;

  async function toggle() {
    if (!supabase) return;
    if (!signedIn) {
      window.location.href = "/compte";
      return;
    }
    setBusy(true);
    const { data } = await supabase.auth.getUser();
    const uid = data.user?.id;
    if (!uid) {
      setBusy(false);
      return;
    }
    if (saved) {
      await supabase.from("saved_jobs").delete().eq("job_id", jobId).eq("user_id", uid);
      setSaved(false);
    } else {
      await supabase.from("saved_jobs").insert({ job_id: jobId, user_id: uid });
      setSaved(true);
    }
    setBusy(false);
  }

  return (
    <button
      onClick={toggle}
      disabled={busy || !ready}
      className={`rounded-lg border px-4 py-2 text-sm font-semibold transition-colors disabled:opacity-50 ${
        saved ? "border-primary bg-primary/5 text-primary" : "border-border text-ink hover:border-primary"
      }`}
    >
      {saved ? "✓ Sauvegardée" : "Sauvegarder l'offre"}
    </button>
  );
}
