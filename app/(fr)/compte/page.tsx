import type { Metadata } from "next";
import { AccountPanel } from "@/components/account-panel";
import { Breadcrumb } from "@/components/breadcrumb";

export const dynamic = "force-dynamic";

export const metadata: Metadata = {
  title: "Mon compte",
  description:
    "Votre compte Khedma Pro : sauvegardez des offres et suivez vos candidatures. Gratuit, sans frais cachés.",
  alternates: { canonical: "/compte" },
  robots: { index: false },
};

export default function ComptePage() {
  return (
    <>
      <section className="border-b border-border bg-surface">
        <div className="mx-auto w-full max-w-4xl px-5 py-10 sm:px-8">
          <Breadcrumb items={[{ label: "Accueil", href: "/" }, { label: "Mon compte", href: "/compte" }]} />
          <h1 className="mt-6 text-3xl font-extrabold tracking-tight text-ink sm:text-4xl">Mon compte</h1>
          <p className="mt-3 max-w-2xl text-lg leading-relaxed text-muted">
            Sauvegardez les offres qui vous intéressent et suivez vos candidatures.
          </p>
        </div>
      </section>
      <section className="mx-auto w-full max-w-4xl px-5 py-10 sm:px-8">
        <AccountPanel />
      </section>
    </>
  );
}
