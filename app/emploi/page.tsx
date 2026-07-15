import type { Metadata } from "next";
import { PillarLayout, ComingSoon } from "@/components/pillar-layout";

export const metadata: Metadata = {
  title: "Emploi au Maroc : offres vérifiées & CV builder",
  description:
    "Des offres d'emploi vérifiées dans tout le Maroc, secteur public et privé, plus un CV builder adapté au marché marocain. Sans arnaques, sans frais.",
  alternates: { canonical: "/emploi" },
};

export default function EmploiPage() {
  return (
    <PillarLayout
      eyebrow="Offres vérifiées & CV"
      title="Trouvez un emploi vérifié, partout au Maroc"
      lead="Des offres réelles, dans le public et le privé, par ville et par secteur — et un CV construit pour les recruteurs marocains, prêt en quelques minutes."
    >
      <ComingSoon
        items={[
          "Offres d'emploi vérifiées (public & privé), filtrables par ville et secteur",
          "CV Builder intelligent au format marocain, prêt en quelques minutes",
          "Emploi public : contractuels, fonction publique, et passerelles vers les concours",
          "Suivi de vos candidatures, en un seul tableau de bord",
        ]}
        note="Chaque offre est vérifiée avant publication. Nous ne demandons jamais de frais, ni votre mot de passe, ni une avance pour « garantir » un poste."
      />
    </PillarLayout>
  );
}
