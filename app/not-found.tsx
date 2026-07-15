import Link from "next/link";

export default function NotFound() {
  return (
    <section className="mx-auto flex w-full max-w-3xl flex-col items-center px-5 py-24 text-center sm:px-8">
      <div className="text-sm font-bold uppercase tracking-wide text-primary">Erreur 404</div>
      <h1 className="mt-3 text-3xl font-extrabold tracking-tight text-ink sm:text-4xl">
        Cette page n&apos;existe pas
      </h1>
      <p className="mt-4 max-w-md leading-relaxed text-muted">
        Le lien est peut-être ancien, ou la page a été déplacée. Retrouvez les concours ouverts et
        nos guides depuis l&apos;accueil.
      </p>
      <div className="mt-8 flex flex-wrap justify-center gap-3">
        <Link
          href="/"
          className="rounded-xl bg-primary px-6 py-3 text-sm font-bold text-white shadow-sm transition-colors hover:bg-primary-dark"
        >
          Retour à l&apos;accueil
        </Link>
        <Link
          href="/concours"
          className="rounded-xl border border-border px-6 py-3 text-sm font-bold text-ink transition-colors hover:border-primary"
        >
          Voir les concours
        </Link>
      </div>
    </section>
  );
}
