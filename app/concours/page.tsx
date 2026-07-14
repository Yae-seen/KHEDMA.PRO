import type { Metadata } from "next";
import { PillarLayout, ComingSoon } from "@/components/pillar-layout";

export const metadata: Metadata = {
  title: "Concours de la fonction publique au Maroc 2026",
  description:
    "Tous les concours de recrutement au Maroc, par ministère et date limite, avec modèles d'épreuves et guide anti-arnaque. مباريات التوظيف بالمغرب.",
};

export default function ConcoursPage() {
  return (
    <PillarLayout
      eyebrow="Fonction publique & مباريات"
      title="Les concours de recrutement au Maroc, au même endroit"
      lead="Ministères, forces, santé, enseignement, collectivités — chaque concours ouvert avec sa date limite, ses documents, et la voie officielle pour postuler. Rien d'autre."
    >
      <ComingSoon
        items={[
          "Calendrier des concours ouverts, filtrable par ministère et par date limite",
          "Modèles d'épreuves et sujets des années précédentes (exemples de concours)",
          "Guide pas-à-pas pour postuler via la plateforme officielle uniquement",
          "Alerte anti-arnaque : aucun concours officiel ne demande de paiement",
        ]}
        note="مباريات التوظيف بالمغرب — نجمع الإعلانات الرسمية فقط، ونشرح كيفية الترشح عبر البوابة الرسمية دون طلب أي أداء أو بيانات دخول."
      />
    </PillarLayout>
  );
}
