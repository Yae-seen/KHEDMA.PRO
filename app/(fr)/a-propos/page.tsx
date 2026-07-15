import type { Metadata } from "next";
import Link from "next/link";
import { ProsePage, ProseH2, ProseP } from "@/components/prose-page";

export const metadata: Metadata = {
  title: "À propos de Khedma Pro",
  description:
    "Khedma Pro est une plateforme indépendante d'orientation carrière pour les jeunes Marocains : concours, emploi et projet Allemagne, avec des informations vérifiées et sans arnaque.",
  alternates: { canonical: "/a-propos" },
};

export default function AboutPage() {
  return (
    <ProsePage
      title="À propos de Khedma Pro"
      lead="Une plateforme indépendante pour aider les jeunes Marocains à construire leur carrière : concours, emploi et projet Allemagne."
      crumbLabel="À propos"
      crumbHref="/a-propos"
      updated="2026-07-15"
    >
      <ProseP>
        Khedma Pro rassemble, explique et met à jour l&apos;information dont les jeunes Marocains ont
        besoin pour avancer : les concours de la fonction publique, la recherche d&apos;emploi, et le
        parcours réel vers l&apos;Allemagne. Notre objectif est simple : des informations claires,
        vérifiées, et gratuites — sans intermédiaire et sans arnaque.
      </ProseP>

      <ProseH2>Notre indépendance</ProseH2>
      <ProseP>
        Khedma Pro est un service d&apos;information <strong>indépendant</strong>. Nous ne sommes
        affiliés à aucune administration, ministère ou organisme public marocain. Nous ne recueillons
        pas de candidatures officielles et ne remplaçons aucun portail public : pour toute démarche
        officielle, nous renvoyons vers les sites officiels concernés (par exemple emploi-public.ma
        et les sites des ministères).
      </ProseP>

      <ProseH2>Notre méthode</ProseH2>
      <ProseP>
        Les informations sensibles — dates, conditions, procédures — sont ancrées sur des sources
        officielles, citées sur chaque page, et datées (« Dernière vérification »). Quand une
        information ne peut pas être confirmée de source officielle, nous le disons clairement plutôt
        que d&apos;inventer. Les sites relais et agrégateurs ne sont utilisés que comme corroboration
        secondaire, jamais comme autorité.
      </ProseP>

      <ProseH2>Notre engagement anti-arnaque</ProseH2>
      <ProseP>
        Aucun concours ni emploi public officiel ne demande de paiement. Nous ne vendons aucun
        « dossier garanti », ne demandons jamais vos mots de passe, et ne collectons aucune donnée de
        candidature. Notre rôle est de vous orienter vers les canaux fiables — le reste vous
        appartient.
      </ProseP>

      <ProseH2>L&apos;écosystème</ProseH2>
      <ProseP>
        Khedma Pro prolonge l&apos;information éducative de{" "}
        <a
          href="https://massar-service.net"
          rel="noopener noreferrer"
          target="_blank"
          className="font-semibold text-primary underline decoration-primary/30 underline-offset-2 hover:decoration-primary"
        >
          massar-service.net
        </a>{" "}
        vers la carrière : des études au premier emploi, puis vers l&apos;international.
      </ProseP>

      <ProseP>
        Une question ou une correction ? Consultez notre{" "}
        <Link href="/contact" className="font-semibold text-primary underline decoration-primary/30 underline-offset-2 hover:decoration-primary">
          page contact
        </Link>
        .
      </ProseP>
    </ProsePage>
  );
}
