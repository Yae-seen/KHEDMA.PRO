import type { Metadata } from "next";
import { PillarLayout, ComingSoon } from "@/components/pillar-layout";

export const metadata: Metadata = {
  title: "Travailler en Allemagne depuis le Maroc : Ausbildung & Chancenkarte",
  description:
    "Votre parcours réel vers l'Allemagne : éligibilité Chancenkarte, métiers qui recrutent (électricité, soins, artisanat) et employeurs des petites villes qui embauchent des Marocains.",
  alternates: { canonical: "/allemagne" },
};

export default function AllemagnePage() {
  return (
    <PillarLayout
      eyebrow="Ausbildung & Chancenkarte"
      title="Votre voie réelle vers l'Allemagne — sans promesses vides"
      lead="Pas de discours abstrait sur « l'Ausbildung ». Un métier, une ville, un employeur qui recrute et qui parraine. On vous outille pour la vraie démarche."
    >
      <ComingSoon
        items={[
          "Calculateur d'éligibilité Chancenkarte (la carte d'opportunité)",
          "Métiers en tension : électricité (Elektriker), soins (Pflege), artisanat (Handwerk)",
          "Employeurs et offres par métier ET par ville — en priorité les petites villes, où la pénurie est forte et l'embauche de Marocains plus fréquente",
          "Coûts réels, reconnaissance des diplômes, et les étapes du visa",
        ]}
        note="La vérité que personne ne dit : on ne cherche pas « Ausbildung » au hasard. On cherche un métier + une petite ville allemande — par ex. « elektriker + [petite ville] » ou « pflege + [petite ville] » — pour trouver un employeur qui recrute et parraine. Les petites villes manquent de main-d'œuvre et embauchent plus facilement. C'est exactement ce que cette section va outiller."
      />
    </PillarLayout>
  );
}
