// Sanity checks for apps/site/data.js — run with `node scripts/check-content.mjs`.
// No dependencies beyond Node's built-ins, so it needs no install step and
// fits the project's "no build tooling" rule (see docs/SPEC.md).
//
// Catches two classes of mistake that are easy to make by hand when adding
// a career/project/talk entry: a photo/logo path that doesn't exist on
// disk, and a {ru, en, es} entry where only some languages got filled in.

import { createRequire } from "node:module";
import { existsSync } from "node:fs";
import path from "node:path";
import { fileURLToPath } from "node:url";

const require = createRequire(import.meta.url);
const repoRoot = path.dirname(fileURLToPath(import.meta.url)) + "/..";
const siteDir = path.join(repoRoot, "apps/site");
const { NAV, DATA } = require(path.join(siteDir, "data.js"));

let errors = [];

function checkAssetPath(p, where) {
  if (!p) return;
  const full = path.join(siteDir, p);
  if (!existsSync(full)) errors.push(`missing asset: "${p}" (${where})`);
}

const LANGS = ["ru", "en", "es"];

// {ru, en, es} entry: fine if all are empty (placeholder), fine if all are
// filled in; flag a missing language key, or a mismatch where one side has
// content and another doesn't. Every language is compared against ru.
function checkI18nPair(pair, where) {
  if (!pair || typeof pair !== "object" || !("ru" in pair)) return;
  const isEmpty = (v) => Array.isArray(v) ? v.length === 0 : !v;
  const ru = pair.ru;
  for (const l of LANGS.slice(1)) {
    if (!(l in pair)) { errors.push(`missing language: ${where} has no "${l}" key`); continue; }
    const v = pair[l];
    if (isEmpty(ru) !== isEmpty(v)) errors.push(`untranslated field: ${where} has ru=${JSON.stringify(ru)} ${l}=${JSON.stringify(v)}`);
    if (Array.isArray(ru) && Array.isArray(v) && ru.length !== v.length) {
      errors.push(`mismatched list length: ${where} has ${ru.length} ru item(s) but ${v.length} ${l} item(s)`);
    }
  }
}

function checkEntry(entry, where) {
  checkI18nPair(entry.title, `${where}.title`);
  checkI18nPair(entry.role, `${where}.role`);
  checkI18nPair(entry.period, `${where}.period`);
  checkI18nPair(entry.summary, `${where}.summary`);
  checkI18nPair(entry.highlights, `${where}.highlights`);
  checkI18nPair(entry.linkLabel, `${where}.linkLabel`);
  if (entry.logo) checkAssetPath(entry.logo, `${where}.logo`);
  (entry.photos || []).forEach((p, i) => checkAssetPath(p, `${where}.photos[${i}]`));
}

for (const n of NAV) checkI18nPair(n.label, `NAV.${n.id}.label`);

for (const key of ["career", "education", "projects", "talks", "personal"]) {
  (DATA[key] || []).forEach((entry, i) => checkEntry(entry, `DATA.${key}[${i}:${entry.id}]`));
}

checkI18nPair(DATA.hero, "DATA.hero");
checkI18nPair(DATA.heroLede, "DATA.heroLede");
for (const [key, pair] of Object.entries(DATA.sectionIntro || {})) checkI18nPair(pair, `DATA.sectionIntro.${key}`);
checkI18nPair(DATA.contacts.location, "DATA.contacts.location");
checkI18nPair(DATA.contacts.cv, "DATA.contacts.cv");
checkAssetPath(DATA.contacts.cv.ru, "DATA.contacts.cv.ru");
checkAssetPath(DATA.contacts.cv.en, "DATA.contacts.cv.en");
checkAssetPath(DATA.contacts.cv.es, "DATA.contacts.cv.es");

if (errors.length) {
  console.error(`content check failed (${errors.length} issue${errors.length > 1 ? "s" : ""}):`);
  for (const e of errors) console.error("  - " + e);
  process.exit(1);
}
console.log(`content check passed (${NAV.length} nav items, ${Object.keys(DATA).filter((k) => Array.isArray(DATA[k])).length} collections checked)`);
