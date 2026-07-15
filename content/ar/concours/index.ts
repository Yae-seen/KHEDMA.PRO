import type { ConcoursGuide } from "@/lib/content-types";
import { guide as policeDgsn } from "@/content/ar/concours/concours-police-dgsn";
import { guide as gendarmerieRoyale } from "@/content/ar/concours/concours-gendarmerie-royale";
import { guide as forcesArmeesRoyales } from "@/content/ar/concours/concours-forces-armees-royales";
import { guide as forcesAuxiliaires } from "@/content/ar/concours/concours-forces-auxiliaires";
import { guide as douane } from "@/content/ar/concours/concours-douane";
import { guide as impotsDgi } from "@/content/ar/concours/concours-impots-dgi";
import { guide as tresorerieTgr } from "@/content/ar/concours/concours-tresorerie-tgr";
import { guide as enseignement } from "@/content/ar/concours/concours-enseignement";
import { guide as infirmiersIspits } from "@/content/ar/concours/concours-infirmiers-ispits";
import { guide as ministereSante } from "@/content/ar/concours/concours-ministere-sante";
import { guide as ministereInterieur } from "@/content/ar/concours/concours-ministere-interieur";
import { guide as ministereJustice } from "@/content/ar/concours/concours-ministere-justice";

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

export const CONCOURS_GUIDES_AR: Record<string, ConcoursGuide> = Object.fromEntries(
  guides.map((g) => [g.slug, g]),
);
