import Link from "next/link";

/** The trust signature of the concours pillar — shown on every concours page. */
export function AntiScamBanner() {
  return (
    <aside
      aria-label="Avertissement anti-arnaque"
      className="mt-8 rounded-xl border border-accent/40 bg-accent/10 p-4 text-sm leading-relaxed text-ink"
    >
      <strong>Aucun concours officiel ne demande de paiement.</strong> Les candidatures aux concours
      publics marocains sont gratuites et passent uniquement par les canaux officiels. Si on vous
      demande des « frais de dossier », c&apos;est une arnaque —{" "}
      <Link
        href="/blog/concours-arnaques-comment-les-eviter"
        className="font-semibold text-primary underline decoration-primary/30 underline-offset-2 hover:decoration-primary"
      >
        apprenez à les reconnaître
      </Link>
      .
    </aside>
  );
}
