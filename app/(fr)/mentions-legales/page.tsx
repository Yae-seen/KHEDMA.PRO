import type { Metadata } from "next";
import { ProsePage, ProseH2, ProseP } from "@/components/prose-page";

export const metadata: Metadata = {
  title: "Mentions légales — Khedma Pro",
  description:
    "Mentions légales de Khedma Pro : éditeur, indépendance vis-à-vis des administrations, nature informative du service et limites de responsabilité.",
  alternates: { canonical: "/mentions-legales" },
};

export default function LegalPage() {
  return (
    <ProsePage
      title="Mentions légales"
      crumbLabel="Mentions légales"
      crumbHref="/mentions-legales"
      updated="2026-07-15"
    >
      <ProseH2>Éditeur</ProseH2>
      <ProseP>
        Khedma Pro est une plateforme d&apos;information éditoriale indépendante à destination des
        jeunes Marocains (concours, emploi, projet Allemagne). Le site est édité à titre indépendant.
      </ProseP>

      <ProseH2>Indépendance</ProseH2>
      <ProseP>
        Khedma Pro n&apos;est <strong>affilié à aucune administration, ministère, agence ou organisme
        public</strong> marocain ou étranger. Le site ne se substitue à aucun portail officiel et ne
        traite aucune démarche officielle. Les marques, noms et logos d&apos;organismes publics
        éventuellement cités le sont à titre informatif et appartiennent à leurs titulaires respectifs.
      </ProseP>

      <ProseH2>Nature du service</ProseH2>
      <ProseP>
        Le contenu de Khedma Pro est fourni à titre informatif. Nous nous efforçons de l&apos;ancrer
        sur des sources officielles et de le tenir à jour, mais les conditions, dates et procédures
        des concours et des recrutements peuvent évoluer. <strong>Seuls les avis officiels des
        administrations concernées font foi.</strong> Vérifiez toujours l&apos;information sur le
        canal officiel avant toute démarche.
      </ProseP>

      <ProseH2>Limitation de responsabilité</ProseH2>
      <ProseP>
        Khedma Pro ne saurait être tenu responsable d&apos;une décision prise sur la base des
        informations du site, ni du contenu des sites externes vers lesquels il renvoie. Aucune
        candidature, aucun paiement et aucune donnée de dossier ne sont collectés par Khedma Pro.
      </ProseP>

      <ProseH2>Signalement & contact</ProseH2>
      <ProseP>
        Pour signaler une erreur, une information obsolète ou un contenu frauduleux se réclamant de
        Khedma Pro, utilisez notre page contact. Nous corrigeons les informations vérifiées dans les
        meilleurs délais.
      </ProseP>

      <ProseH2>Propriété intellectuelle</ProseH2>
      <ProseP>
        Les contenus éditoriaux originaux de Khedma Pro (guides, analyses, mises en page) sont
        protégés. Ils peuvent être cités avec indication de la source et un lien vers la page
        correspondante.
      </ProseP>
    </ProsePage>
  );
}
