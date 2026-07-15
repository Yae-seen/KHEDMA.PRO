import type { Metadata } from "next";
import { CvBuilder } from "@/components/cv-builder";
import { Breadcrumb } from "@/components/breadcrumb";
import { FaqSection } from "@/components/faq-section";
import { JsonLd } from "@/components/json-ld";
import { buildFaqJsonLd } from "@/lib/structured-data";

export const metadata: Metadata = {
  title: "CV Builder gratuit — créer un CV au format marocain (PDF)",
  description:
    "Créez gratuitement un CV clair au format marocain et téléchargez-le en PDF. Aucune inscription, vos données restent sur votre appareil. Idéal pour les concours et l'emploi.",
  alternates: { canonical: "/cv" },
};

const CV_FAQ = [
  {
    question: "Le CV Builder est-il vraiment gratuit ?",
    answer:
      "Oui, entièrement gratuit et sans inscription. Vous remplissez le formulaire, vous voyez le résultat en direct, et vous l'enregistrez en PDF depuis votre navigateur.",
  },
  {
    question: "Mes données sont-elles envoyées quelque part ?",
    answer:
      "Non. Tout se passe dans votre navigateur : vos informations sont enregistrées uniquement sur votre appareil et ne sont transmises à aucun serveur. Vous gardez le contrôle total.",
  },
  {
    question: "Comment télécharger mon CV en PDF ?",
    answer:
      "Cliquez sur « Imprimer / Enregistrer en PDF ». Dans la fenêtre d'impression, choisissez « Enregistrer au format PDF » comme destination, puis validez. Votre CV est prêt à être envoyé.",
  },
  {
    question: "Ce CV convient-il pour un concours de la fonction publique ?",
    answer:
      "Oui. Le format est sobre et lisible, adapté aux candidatures aux concours publics comme au secteur privé. Vérifiez toutefois les pièces exactes demandées dans chaque avis de concours.",
  },
  {
    question: "Puis-je modifier mon CV plus tard ?",
    answer:
      "Oui. Vos informations restent enregistrées dans votre navigateur ; revenez sur cette page quand vous voulez pour les mettre à jour et générer un nouveau PDF.",
  },
];

export default function CvPage() {
  return (
    <>
      <JsonLd data={buildFaqJsonLd(CV_FAQ)} />
      <section className="no-print border-b border-border bg-surface">
        <div className="mx-auto w-full max-w-6xl px-5 py-10 sm:px-8">
          <Breadcrumb
            items={[
              { label: "Accueil", href: "/" },
              { label: "Emploi", href: "/emploi" },
              { label: "CV Builder", href: "/cv" },
            ]}
          />
          <h1 className="mt-6 text-3xl font-extrabold leading-tight tracking-tight text-ink sm:text-4xl">
            Créez votre CV au format marocain
          </h1>
          <p className="mt-3 max-w-2xl text-lg leading-relaxed text-muted">
            Remplissez, prévisualisez en direct, et enregistrez en PDF. Gratuit, sans inscription, et
            vos données ne quittent jamais votre appareil.
          </p>
        </div>
      </section>

      <section className="mx-auto w-full max-w-6xl px-5 py-10 sm:px-8">
        <CvBuilder />
      </section>

      <section className="no-print mx-auto w-full max-w-3xl px-5 sm:px-8">
        <FaqSection items={CV_FAQ} />
      </section>
    </>
  );
}
