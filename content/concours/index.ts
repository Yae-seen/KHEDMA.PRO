import type { ConcoursGuide } from "@/lib/content-types";
import { guide as policeDgsn } from "@/content/concours/concours-police-dgsn";
import { guide as gendarmerieRoyale } from "@/content/concours/concours-gendarmerie-royale";
import { guide as forcesArmeesRoyales } from "@/content/concours/concours-forces-armees-royales";
import { guide as forcesAuxiliaires } from "@/content/concours/concours-forces-auxiliaires";
import { guide as douane } from "@/content/concours/concours-douane";
import { guide as impotsDgi } from "@/content/concours/concours-impots-dgi";
import { guide as tresorerieTgr } from "@/content/concours/concours-tresorerie-tgr";
import { guide as enseignement } from "@/content/concours/concours-enseignement";
import { guide as infirmiersIspits } from "@/content/concours/concours-infirmiers-ispits";
import { guide as ministereSante } from "@/content/concours/concours-ministere-sante";
import { guide as ministereInterieur } from "@/content/concours/concours-ministere-interieur";
import { guide as ministereJustice } from "@/content/concours/concours-ministere-justice";

const guides: ConcoursGuide[] = [
  policeDgsn,
  gendarmerieRoyale,
  forcesArmeesRoyales,
  forcesAuxiliaires,
  douane,
  impotsDgi,
  tresorerieTgr,
  enseignement,
  infirmiersIspits,
  ministereSante,
  ministereInterieur,
  ministereJustice,
];

export const CONCOURS_GUIDES: Record<string, ConcoursGuide> = Object.fromEntries(
  guides.map((g) => [g.slug, g]),
);
