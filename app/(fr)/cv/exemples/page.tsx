import type { Metadata } from "next";
import Link from "next/link";
import { Breadcrumb } from "@/components/breadcrumb";
import { CvModelLoader } from "@/components/cv-model-loader";
import { FaqSection } from "@/components/faq-section";
import { JsonLd } from "@/components/json-ld";
import { CV_MODELS, type CvData, type CvModel } from "@/lib/cv-models";
import { buildItemListJsonLd } from "@/lib/structured-data";

export const metadata: Metadata = {
  title: "Exemple de CV marocain : 5 modèles gratuits à remplir (2026)",
  description:
    "Cinq exemples de CV au format marocain — jeune diplômé, technicien OFPPT, concours, expérience, Allemagne. Lisez le modèle, ouvrez-le dans le générateur, exportez en PDF.",
  alternates: { canonical: "/cv/exemples" },
};

const CRUMBS = [
  { label: "Accueil", href: "/" },
  { label: "Emploi", href: "/emploi" },
  { label: "CV Builder", href: "/cv" },
  { label: "Exemples de CV", href: "/cv/exemples" },
];

const STRUCTURE: [string, string][] = [
  ["État civil", "Prénom, nom, ville, téléphone et une adresse e-mail sobre. L'adresse postale complète n'est pas nécessaire."],
  ["Titre du CV", "L'intitulé du poste que vous visez. Pour un concours, reprenez l'intitulé exact de l'avis."],
  ["Profil", "Trois ou quatre lignes maximum : qui vous êtes, ce que vous savez faire, ce que vous cherchez."],
  ["Expérience", "Stages compris. Poste, employeur, ville, période, puis ce que vous faisiez concrètement."],
  ["Formation", "Du diplôme le plus récent au plus ancien. Le baccalauréat suffit comme dernière ligne."],
  ["Compétences", "Logiciels, techniques, outils. Ce que vous maîtrisez vraiment, pas ce que vous avez croisé une fois."],
  ["Langues", "Arabe, français, et l'anglais ou l'allemand si vous les pratiquez. Soyez honnête sur le niveau."],
];

const FAQ = [
  {
    question: "Faut-il mettre une photo sur un CV marocain ?",
    answer:
      "Elle reste courante au Maroc mais n'est pas obligatoire. Pour un concours de la fonction publique, ne l'ajoutez que si l'avis officiel la demande. Si vous en mettez une, choisissez une photo d'identité neutre.",
  },
  {
    question: "Un CV marocain doit-il tenir sur une page ?",
    answer:
      "Oui dans la grande majorité des cas. Une page suffit pour un jeune diplômé comme pour un profil de quelques années d'expérience. Au-delà de dix ans de carrière, deux pages restent acceptables.",
  },
  {
    question: "Faut-il rédiger son CV en français ou en arabe ?",
    answer:
      "Le français reste le standard pour la plupart des candidatures au Maroc, public comme privé. Certains concours acceptent l'arabe : référez-vous à la langue de l'avis officiel. Pour l'Allemagne, préparez une version en allemand ou en anglais.",
  },
  {
    question: "Que mettre dans un CV quand on n'a aucune expérience ?",
    answer:
      "Vos stages, votre projet de fin d'études, vos activités associatives et vos travaux personnels. Décrivez-les comme une expérience : ce que vous avez fait, avec quels outils, et ce que cela a produit.",
  },
  {
    question: "Ces modèles de CV sont-ils gratuits ?",
    answer:
      "Oui, entièrement. Vous pouvez lire chaque exemple sur cette page, l'ouvrir dans le générateur pour le modifier, puis l'enregistrer en PDF. Aucune inscription et aucune donnée envoyée à un serveur.",
  },
];

/** Readable rendering of a model — this is the content the page is actually about. */
function CvPreview({ data }: { data: CvData }) {
  return (
    <div className="rounded-xl border border-border bg-bg p-5 text-sm leading-relaxed">
      <div className="text-lg font-extrabold text-ink">
        {data.prenom} {data.nom}
      </div>
      <div className="mt-0.5 font-semibold text-primary">{data.titre}</div>
      <div className="mt-1 text-xs text-muted">
        {data.ville} · {data.telephone} · {data.email}
      </div>

      <p className="mt-4 text-muted">{data.profil}</p>

      <div className="mt-4 text-xs font-bold uppercase tracking-widest text-accent-dark">
        Expérience
      </div>
      <ul className="mt-2 space-y-3">
        {data.experiences.map((e) => (
          <li key={`${e.poste}-${e.periode}`}>
            <div className="font-semibold text-ink">
              {e.poste} — {e.entreprise}
            </div>
            <div className="text-xs text-muted">
              {e.ville} · {e.periode}
            </div>
            <p className="mt-1 text-muted">{e.description}</p>
          </li>
        ))}
      </ul>

      <div className="mt-4 text-xs font-bold uppercase tracking-widest text-accent-dark">
        Formation
      </div>
      <ul className="mt-2 space-y-1">
        {data.formations.map((f) => (
          <li key={`${f.diplome}-${f.annee}`} className="text-muted">
            <span className="font-semibold text-ink">{f.diplome}</span> — {f.etablissement} ({f.annee})
          </li>
        ))}
      </ul>

      <div className="mt-4 text-xs font-bold uppercase tracking-widest text-accent-dark">
        Compétences
      </div>
      <p className="mt-2 text-muted">{data.competences}</p>

      <div className="mt-4 text-xs font-bold uppercase tracking-widest text-accent-dark">Langues</div>
      <p className="mt-2 text-muted">
        {data.langues.map((l) => `${l.langue} : ${l.niveau}`).join(" · ")}
      </p>
    </div>
  );
}

function ModelBlock({ model, index }: { model: CvModel; index: number }) {
  return (
    <section id={model.id} className="scroll-mt-24 border-t border-border pt-12">
      <div className="text-xs font-bold uppercase tracking-widest text-primary">
        Modèle {index + 1}
      </div>
      <h2 className="mt-2 text-2xl font-extrabold tracking-tight text-ink sm:text-3xl">
        {model.label}
      </h2>
      <p className="mt-2 max-w-2xl text-muted">{model.whoFor}</p>

      <div className="mt-6 grid gap-6 lg:grid-cols-[1.4fr_1fr]">
        <CvPreview data={model.data} />
        <aside className="rounded-xl border border-border bg-surface p-5">
          <div className="text-sm font-extrabold text-ink">Le conseil qui compte</div>
          <p className="mt-2 text-sm leading-relaxed text-muted">{model.tip}</p>
          <CvModelLoader model={model} />
          <p className="mt-3 text-xs text-muted">
            Le modèle s&apos;ouvre pré-rempli dans le générateur. Remplacez le contenu par le vôtre,
            puis enregistrez en PDF.
          </p>
        </aside>
      </div>
    </section>
  );
}

export default function CvExemplesPage() {
  return (
    <>
      {/* Breadcrumb and FaqSection emit their own BreadcrumbList/FAQPage — only
          the ItemList needs declaring here, or the page ships duplicates. */}
      <JsonLd
        data={buildItemListJsonLd({
          name: "Exemples de CV marocain",
          items: CV_MODELS.map((m) => ({ name: m.label, path: `/cv/exemples#${m.id}` })),
        })}
      />

      <section className="border-b border-border bg-surface">
        <div className="mx-auto w-full max-w-5xl px-5 py-10 sm:px-8">
          <Breadcrumb items={CRUMBS} />
          <h1 className="mt-6 text-3xl font-extrabold leading-tight tracking-tight text-ink sm:text-4xl">
            Exemple de CV marocain : 5 modèles à remplir
          </h1>
          <p className="mt-3 max-w-2xl text-lg leading-relaxed text-muted">
            Cinq CV complets au format marocain, écrits pour des situations réelles : premier
            emploi, technicien OFPPT, concours de la fonction publique, profil expérimenté et
            départ vers l&apos;Allemagne. Lisez celui qui vous ressemble, ouvrez-le dans le{" "}
            <Link href="/cv" className="font-semibold text-primary hover:underline">
              générateur de CV gratuit
            </Link>
            , remplacez le contenu par le vôtre et exportez en PDF.
          </p>
        </div>
      </section>

      <div className="mx-auto w-full max-w-5xl px-5 py-12 sm:px-8">
        <section>
          <h2 className="text-2xl font-extrabold tracking-tight text-ink sm:text-3xl">
            Ce que doit contenir un CV au Maroc
          </h2>
          <p className="mt-3 max-w-2xl text-muted">
            Les recruteurs marocains attendent une structure simple et lisible. Sept blocs
            suffisent — et c&apos;est exactement l&apos;ordre repris dans les modèles ci-dessous.
          </p>
          <dl className="mt-8 grid gap-x-10 gap-y-6 sm:grid-cols-2">
            {STRUCTURE.map(([term, def]) => (
              <div key={term}>
                <dt className="font-extrabold text-ink">{term}</dt>
                <dd className="mt-1 text-sm leading-relaxed text-muted">{def}</dd>
              </div>
            ))}
          </dl>
        </section>

        <div className="mt-14 space-y-14">
          {CV_MODELS.map((m, i) => (
            <ModelBlock key={m.id} model={m} index={i} />
          ))}
        </div>

        <section className="mt-14 rounded-2xl border border-border bg-surface p-6">
          <h2 className="text-xl font-extrabold text-ink">Et après le CV ?</h2>
          <ul className="mt-3 space-y-2 text-sm text-muted">
            <li>
              <Link
                href="/blog/anapec-inscription-espace-candidat"
                className="font-semibold text-primary hover:underline"
              >
                Créer votre espace candidat ANAPEC
              </Link>{" "}
              — l&apos;inscription est gratuite, et votre CV y est demandé.
            </li>
            <li>
              <Link href="/concours" className="font-semibold text-primary hover:underline">
                Les concours de la fonction publique ouverts
              </Link>{" "}
              — avec les conditions et les pièces à fournir.
            </li>
            <li>
              <Link href="/allemagne" className="font-semibold text-primary hover:underline">
                Votre parcours vers l&apos;Allemagne
              </Link>{" "}
              — éligibilité Chancenkarte et métiers qui recrutent.
            </li>
          </ul>
        </section>

        <FaqSection items={FAQ} />
      </div>
    </>
  );
}
