import type { Metadata } from "next";
import Link from "next/link";
import { ProsePage, ProseH2, ProseP } from "@/components/prose-page";

export const metadata: Metadata = {
  title: "Contact — Khedma Pro",
  description:
    "Contacter Khedma Pro : signaler une erreur, une information obsolète ou un contenu frauduleux. Pour les démarches officielles, adressez-vous aux portails officiels.",
  alternates: { canonical: "/contact" },
};

const CONTACT_EMAIL = "khedmapro.help@gmail.com";

export default function ContactPage() {
  return (
    <ProsePage
      title="Contact"
      lead="Une erreur à signaler, une information à mettre à jour, une question éditoriale ?"
      crumbLabel="Contact"
      crumbHref="/contact"
    >
      <ProseH2>Nous écrire</ProseH2>
      <ProseP>
        Pour toute remarque sur nos contenus — correction, information obsolète, ou signalement
        d&apos;un contenu frauduleux se réclamant de Khedma Pro — écrivez-nous à{" "}
        <a
          href={`mailto:${CONTACT_EMAIL}`}
          className="font-semibold text-primary underline decoration-primary/30 underline-offset-2 hover:decoration-primary"
        >
          {CONTACT_EMAIL}
        </a>
        . Nous corrigeons les informations vérifiées dans les meilleurs délais.
      </ProseP>

      <ProseH2>Pour les démarches officielles</ProseH2>
      <ProseP>
        Khedma Pro est un guide <strong>indépendant</strong> : nous ne traitons aucune inscription,
        candidature ou réclamation officielle. Pour ces démarches, adressez-vous directement aux
        portails officiels — notamment{" "}
        <a
          href="https://www.emploi-public.ma/fr/"
          rel="noopener noreferrer"
          target="_blank"
          className="font-semibold text-primary underline decoration-primary/30 underline-offset-2 hover:decoration-primary"
        >
          emploi-public.ma
        </a>{" "}
        et les sites des administrations concernées, listés sur chaque page de notre{" "}
        <Link href="/concours" className="font-semibold text-primary underline decoration-primary/30 underline-offset-2 hover:decoration-primary">
          hub Concours
        </Link>
        .
      </ProseP>

      <ProseH2>Rappel sécurité</ProseH2>
      <ProseP>
        Nous ne demandons jamais de paiement, de mot de passe ni de données de candidature. Si un
        message se présente comme « Khedma Pro » et vous réclame de l&apos;argent ou vos identifiants,
        il s&apos;agit d&apos;une usurpation : ne répondez pas et signalez-le nous.
      </ProseP>
    </ProsePage>
  );
}
