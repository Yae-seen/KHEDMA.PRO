"use client";

import { useRouter } from "next/navigation";
import { track } from "@/lib/analytics";
import { CV_STORAGE_KEY, type CvModel } from "@/lib/cv-models";

/**
 * Loads a ready-made model into the builder.
 *
 * The builder hydrates from localStorage on mount, so writing the key here and
 * then navigating is enough — /cv stays a static page with no searchParams and
 * no client router state to thread through.
 */
export function CvModelLoader({ model }: { model: CvModel }) {
  const router = useRouter();

  function load() {
    // The builder autosaves, so a returning visitor may have a real CV in
    // progress. Only interrupt them if there is actually something to lose.
    let hasWork = false;
    try {
      const raw = localStorage.getItem(CV_STORAGE_KEY);
      if (raw) {
        const saved = JSON.parse(raw) as { prenom?: string; nom?: string };
        hasWork = Boolean(saved.prenom?.trim() || saved.nom?.trim());
      }
    } catch {
      // unreadable storage → treat as empty and carry on
    }

    if (hasWork && !confirm("Remplacer le CV en cours par ce modèle ?")) return;

    try {
      localStorage.setItem(CV_STORAGE_KEY, JSON.stringify(model.data));
    } catch {
      // Quota or private-mode failure: the builder would silently open on the
      // old data, so say so rather than pretending it worked.
      alert(
        "Impossible d'enregistrer le modèle dans ce navigateur. Vous pouvez recopier l'exemple à la main dans le générateur.",
      );
      return;
    }

    track({ name: "cv_model_load", model: model.id });
    router.push("/cv");
  }

  return (
    <button
      type="button"
      onClick={load}
      className="mt-5 w-full rounded-lg bg-primary px-4 py-2.5 text-sm font-bold text-white shadow-sm transition-colors hover:bg-primary-dark"
    >
      Ouvrir ce modèle dans le générateur →
    </button>
  );
}
