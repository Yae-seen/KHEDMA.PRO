import type { Metadata } from "next";
import Link from "next/link";
import { ARTICLES } from "@/lib/articles";
import { Breadcrumb } from "@/components/breadcrumb";
import { FaqSection } from "@/components/faq-section";
import { LastVerified } from "@/components/last-verified";
import { OfficialLink } from "@/components/official-link";

/**
 * Canada pillar hub. Exists mainly to feed internal authority into the two
 * Canada guides — before it, they were reachable only from /blog and from each
 * other, while every other cluster on the site has a hub pointing at it.
 *
 * Deliberately has no interactive tool (unlike /allemagne): the honest Canada
 * calculators would need CRS point tables and cut-off scores, which move every
 * draw. A tool that goes stale on a YMYL topic is worse than no tool.
 */

export const metadata: Metadata = {
  title: "Immigrer au Canada depuis le Maroc : la voie officielle",
  description:
    "Entrée express, frais réels, argent exigé en banque et le seul site officiel. Les vraies étapes pour immigrer au Canada depuis le Maroc, sources IRCC à l'appui.",
  alternates: {
    canonical: "/canada",
    languages: { fr: "/canada", ar: "/ar/canada" },
  },
};

const CANADA_VERIFIED = "2026-08-01";

const CANADA_FAQ = [
  {
    question: "Par où commence-t-on pour immigrer au Canada depuis le Maroc ?",
    answer:
      "Par le site officiel **canada.ca**, en tapant l'adresse vous-même. Vous y répondez gratuitement à un questionnaire d'admissibilité avant toute autre démarche. Aucune agence n'a besoin d'intervenir à cette étape, et personne ne doit vous la facturer.",
  },
  {
    question: "Entrée express est-il un programme ?",
    answer:
      "Non, c'est le **système en ligne** qui gère les demandes de trois programmes : la catégorie de l'expérience canadienne, le Programme des travailleurs qualifiés (fédéral) et le Programme des métiers spécialisés (fédéral).",
  },
  {
    question: "Faut-il de l'argent pour immigrer au Canada ?",
    answer:
      "Oui, et c'est le point que les annonces frauduleuses cachent. Il y a les frais officiels de dossier, et surtout une **preuve de fonds** : une somme que vous devez déjà avoir en banque pour deux des trois programmes. Les montants exacts figurent dans notre guide dédié.",
  },
  {
    question: "Peut-on partir au Canada gratuitement ?",
    answer:
      "Non. L'immigration gratuite au Canada n'existe pas, et IRCC est explicite : **personne ne peut vous garantir un emploi ou un visa**. Toute offre « gratuite » ou « garantie » est un signal d'arnaque.",
  },
  {
    question: "Combien de temps faut-il prévoir ?",
    answer:
      "Il n'existe pas de délai unique : il dépend du programme, du volume de demandes et de votre dossier. Mais entre le test de langue, l'évaluation des diplômes, les certificats de police, la somme à constituer et l'attente d'une invitation, c'est un projet qui se compte en années, pas en semaines.",
  },
];

export default function CanadaPage() {
  const guides = ARTICLES.filter((a) => a.category === "Canada");

  return (
    <>
      {/* Hero */}
      <section className="relative overflow-hidden bg-night text-white">
        <div
          aria-hidden="true"
          className="pointer-events-none absolute inset-0"
          style={{
            background: "radial-gradient(60% 60% at 85% 0%, rgba(245,158,11,0.28), transparent 60%)",
          }}
        />
        <div className="relative mx-auto w-full max-w-6xl px-5 py-16 sm:px-8 lg:py-20">
          <Breadcrumb
            items={[
              { label: "Accueil", href: "/" },
              { label: "Canada", href: "/canada" },
            ]}
          />
          <div className="mt-6 text-sm font-bold uppercase tracking-wide text-accent">
            Maroc → Canada — كندا
          </div>
          <h1 className="mt-3 max-w-3xl text-3xl font-extrabold leading-[1.1] tracking-tight sm:text-4xl lg:text-5xl">
            Immigrer au Canada depuis le Maroc, sans se faire voler
          </h1>
          <p className="mt-4 max-w-2xl text-lg leading-relaxed text-white/70">
            Une seule adresse officielle, des frais publics, et une somme à avoir en banque que
            personne ne vous annonce. Voici les vrais chiffres et les vraies étapes — avec les
            sources du gouvernement canadien.
          </p>
          <div className="mt-8 flex flex-wrap gap-3">
            <Link
              href="/blog/immigration-canada-site-officiel-etapes"
              className="rounded-xl bg-accent px-6 py-3 text-sm font-bold text-night shadow-lg transition-transform hover:-translate-y-0.5"
            >
              Voir les vraies étapes
            </Link>
            <Link
              href="/blog/immigration-canada-gratuite-verite"
              className="rounded-xl border border-white/20 bg-white/5 px-6 py-3 text-sm font-bold text-white transition-colors hover:bg-white/10"
            >
              Ce que ça coûte vraiment →
            </Link>
          </div>
        </div>
      </section>

      <div className="mx-auto w-full max-w-6xl px-5 py-14 sm:px-8">
        {/* The single rule that protects everything else */}
        <section className="rounded-2xl border border-border bg-surface p-6">
          <h2 className="text-xl font-bold text-ink">La règle qui vous protège de tout le reste</h2>
          <p className="mt-3 text-sm leading-relaxed text-muted">
            Immigration, Réfugiés et Citoyenneté Canada (IRCC) l&apos;écrit noir sur blanc :{" "}
            <strong className="font-semibold text-ink">
              « Personne ne peut vous garantir un emploi ou un visa pour le Canada. »
            </strong>{" "}
            Seuls les agents d&apos;immigration peuvent décider. Retenez cette phrase : elle
            disqualifie à elle seule la quasi-totalité des offres que vous croiserez sur Facebook,
            TikTok et WhatsApp.
          </p>
        </section>

        <OfficialLink
          label="Ouvrir le site officiel du gouvernement du Canada"
          href="https://www.canada.ca/en/services/immigration-citizenship.html"
          description="Le seul endroit officiel pour vérifier votre admissibilité, télécharger les formulaires (gratuits) et déposer votre demande. Tapez vous-même l'adresse dans le navigateur plutôt que de passer par un lien reçu par message."
        />

        {/* The three programmes */}
        <section className="mt-14">
          <h2 className="text-2xl font-bold tracking-tight text-ink">
            « Entrée express » n&apos;est pas un programme
          </h2>
          <p className="mt-3 max-w-3xl leading-relaxed text-muted">
            C&apos;est le système en ligne que le Canada utilise pour gérer les demandes de trois
            programmes différents. Savoir lequel vous concerne est la toute première étape — les
            conditions ne sont pas les mêmes.
          </p>
          <div className="mt-6 overflow-x-auto">
            <table className="w-full min-w-[32rem] border-collapse text-sm">
              <thead>
                <tr className="border-b border-border text-left">
                  <th className="py-3 pe-4 font-bold text-ink">Programme</th>
                  <th className="py-3 font-bold text-ink">Pour qui</th>
                </tr>
              </thead>
              <tbody className="text-muted">
                <tr className="border-b border-border/60">
                  <td className="py-3 pe-4 font-semibold text-ink">
                    Catégorie de l&apos;expérience canadienne
                  </td>
                  <td className="py-3">Expérience de travail admissible acquise au Canada</td>
                </tr>
                <tr className="border-b border-border/60">
                  <td className="py-3 pe-4 font-semibold text-ink">
                    Travailleurs qualifiés (fédéral)
                  </td>
                  <td className="py-3">
                    Expérience de travail admissible acquise à l&apos;étranger ou au Canada
                  </td>
                </tr>
                <tr>
                  <td className="py-3 pe-4 font-semibold text-ink">
                    Métiers spécialisés (fédéral)
                  </td>
                  <td className="py-3">Travailleurs qualifiés dans un métier spécialisé</td>
                </tr>
              </tbody>
            </table>
          </div>
          <p className="mt-4 text-sm leading-relaxed text-muted">
            Il existe une quatrième porte, le <strong className="text-ink">Programme des candidats
            des provinces</strong> : si une province vous désigne, vous obtenez des points
            supplémentaires et pouvez être invité bien plus vite.
          </p>
        </section>

        {/* Honest money section */}
        <section className="mt-14">
          <h2 className="text-2xl font-bold tracking-tight text-ink">L&apos;argent, sans détour</h2>
          <p className="mt-3 max-w-3xl leading-relaxed text-muted">
            Deux dépenses distinctes, souvent confondues : les frais que vous payez à IRCC, et
            l&apos;argent que vous devez <em>déjà posséder</em> pour prouver que vous pouvez vous
            installer.
          </p>
          <div className="mt-6 grid gap-5 sm:grid-cols-2">
            <div className="rounded-2xl border border-border bg-surface p-6">
              <div className="text-xs font-bold uppercase tracking-widest text-accent-dark">
                Ce que vous payez
              </div>
              <div className="mt-2 text-3xl font-extrabold text-ink">1 590 CAD</div>
              <p className="mt-2 text-sm leading-relaxed text-muted">
                Frais de demande d&apos;immigration économique, droit de résidence permanente
                inclus. Relevé sur la liste officielle des frais portant la date de modification du
                2 juillet 2026. S&apos;y ajoutent 85 CAD de biométrie par personne.
              </p>
            </div>
            <div className="rounded-2xl border border-border bg-surface p-6">
              <div className="text-xs font-bold uppercase tracking-widest text-accent-dark">
                Ce que vous devez déjà avoir
              </div>
              <div className="mt-2 text-3xl font-extrabold text-ink">15 263 CAD</div>
              <p className="mt-2 text-sm leading-relaxed text-muted">
                Preuve de fonds pour une personne seule. Le tableau officiel portait la mention
                « Updated July 7, 2025 » lors de notre vérification. Vous ne pouvez ni emprunter
                cette somme, ni la remplacer par la valeur d&apos;un bien immobilier.
              </p>
            </div>
          </div>
          <p className="mt-5 text-sm leading-relaxed text-muted">
            Les montants complets par taille de famille, les exemptions et les pièges sont détaillés
            dans{" "}
            <Link
              href="/blog/immigration-canada-gratuite-verite"
              className="font-semibold text-primary underline decoration-primary/30 underline-offset-2 hover:decoration-primary"
            >
              notre guide sur l&apos;immigration « gratuite »
            </Link>
            . Vérifiez toujours le montant du jour sur le site officiel : IRCC les met à jour.
          </p>
        </section>

        {/* Guides */}
        {guides.length > 0 && (
          <section className="mt-14">
            <h2 className="text-2xl font-bold tracking-tight text-ink">Guides Canada</h2>
            <div className="mt-6 grid gap-5 md:grid-cols-2">
              {guides.map((a) => (
                <Link
                  key={a.slug}
                  href={`/blog/${a.slug}`}
                  className="group rounded-2xl border border-border bg-surface p-5 shadow-sm transition-all hover:-translate-y-0.5 hover:border-primary hover:shadow-md"
                >
                  <div className="text-xs font-bold uppercase tracking-wide text-primary">
                    {a.category}
                  </div>
                  <div className="mt-2 font-bold leading-snug text-ink">{a.title}</div>
                  <p className="mt-2 text-sm leading-relaxed text-muted">{a.description}</p>
                  <span className="mt-3 inline-block text-sm font-semibold text-primary transition-colors group-hover:text-primary-dark">
                    Lire le guide →
                  </span>
                </Link>
              ))}
            </div>
          </section>
        )}

        {/* Cross-pillar: Canada is one door, not the only one */}
        <div className="mt-14 rounded-2xl border border-border bg-surface p-6">
          <h2 className="text-lg font-bold text-ink">Le Canada n&apos;est pas la seule porte</h2>
          <p className="mt-2 text-sm leading-relaxed text-muted">
            Partir est un projet, pas une fuite — et il vaut la peine de comparer avant de miser
            plusieurs années dessus. L&apos;
            <Link
              href="/allemagne"
              className="font-semibold text-primary underline decoration-primary/30 underline-offset-2 hover:decoration-primary"
            >
              Allemagne
            </Link>{" "}
            demande moins d&apos;argent au départ mais davantage de langue. Et au Maroc, les{" "}
            <Link
              href="/concours"
              className="font-semibold text-primary underline decoration-primary/30 underline-offset-2 hover:decoration-primary"
            >
              concours de la fonction publique
            </Link>{" "}
            recrutent chaque année sans qu&apos;il faille quitter le pays. Un{" "}
            <Link
              href="/cv"
              className="font-semibold text-primary underline decoration-primary/30 underline-offset-2 hover:decoration-primary"
            >
              CV solide
            </Link>{" "}
            sert dans les trois cas.
          </p>
        </div>

        <FaqSection items={CANADA_FAQ} />
        <LastVerified date={CANADA_VERIFIED} />
      </div>
    </>
  );
}
