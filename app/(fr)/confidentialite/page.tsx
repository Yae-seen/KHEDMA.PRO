import type { Metadata } from "next";
import { ProsePage, ProseH2, ProseP } from "@/components/prose-page";

export const metadata: Metadata = {
  title: "Politique de confidentialité — Khedma Pro",
  description:
    "Comment Khedma Pro traite vos données : mesure d'audience anonyme, aucun compte, et un CV Builder entièrement côté navigateur. Vos données de CV ne sont jamais envoyées.",
  alternates: { canonical: "/confidentialite" },
};

export default function PrivacyPage() {
  return (
    <ProsePage
      title="Politique de confidentialité"
      lead="Nous collectons le strict minimum. Vos données de CV ne quittent jamais votre appareil."
      crumbLabel="Confidentialité"
      crumbHref="/confidentialite"
      updated="2026-07-15"
    >
      <ProseP>
        Khedma Pro respecte votre vie privée. Ce site est un service d&apos;information : il ne
        propose ni compte utilisateur, ni collecte de données de candidature, ni paiement.
      </ProseP>

      <ProseH2>Le CV Builder reste sur votre appareil</ProseH2>
      <ProseP>
        Les informations que vous saisissez dans le{" "}
        <a href="/cv" className="font-semibold text-primary underline decoration-primary/30 underline-offset-2 hover:decoration-primary">
          CV Builder
        </a>{" "}
        sont enregistrées uniquement dans le stockage local de votre navigateur (localStorage). Elles
        ne sont <strong>jamais envoyées à un serveur</strong> et restent sur votre appareil. Vous
        pouvez les effacer à tout moment avec le bouton « Tout effacer » ou en vidant les données du
        site dans votre navigateur.
      </ProseP>

      <ProseH2>Mesure d&apos;audience</ProseH2>
      <ProseP>
        Nous utilisons une mesure d&apos;audience respectueuse de la vie privée (Vercel Analytics et
        Speed Insights) pour comprendre l&apos;usage du site de façon <strong>agrégée et anonyme</strong>.
        Ces outils ne servent pas à vous identifier personnellement.
      </ProseP>

      <ProseH2>Liens externes</ProseH2>
      <ProseP>
        Le site renvoie vers des portails officiels et d&apos;autres ressources. Une fois que vous
        quittez Khedma Pro, la politique de confidentialité du site de destination s&apos;applique.
        Nous vous invitons à la consulter.
      </ProseP>

      <ProseH2>Publicité</ProseH2>
      <ProseP>
        Si une régie publicitaire est activée à l&apos;avenir, cette page sera mise à jour pour
        décrire l&apos;usage éventuel de cookies publicitaires et les moyens de les refuser.
      </ProseP>

      <ProseH2>Vos droits</ProseH2>
      <ProseP>
        Comme nous ne détenons pas de compte ni de données personnelles vous concernant sur nos
        serveurs, il n&apos;y a rien à supprimer côté Khedma Pro au-delà de ce que votre navigateur
        stocke localement. Pour toute question, écrivez-nous via la page contact.
      </ProseP>
    </ProsePage>
  );
}
