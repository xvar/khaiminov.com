// Blog localization. Same three languages as khaiminov.com (apps/site).
//
// Routing: the default locale (ru) lives at the root, exactly where it was
// before localization (/, /posts/<slug>/), so existing links and giscus
// threads keep working; the others get a prefix (/en/, /es/posts/<slug>/).
//
// Content: one markdown file per language, src/content/blog/<locale>/<slug>.md
// (the layout Decap CMS calls "multiple_folders", see public/admin/config.yml).
// A post that has no translation yet is still listed on the other locales'
// index, flagged and linking to the version that does exist.

import type { CollectionEntry } from "astro:content";

export const LOCALES = ["ru", "en", "es"] as const;
export type Locale = (typeof LOCALES)[number];
export const DEFAULT_LOCALE: Locale = "ru";

export const DATE_LOCALE: Record<Locale, string> = {
  ru: "ru-RU",
  en: "en-GB",
  es: "es-ES",
};

export const UI = {
  blogTitle: {
    ru: "Блог Алексея Хайминова",
    en: "Alexey Khaiminov's Blog",
    es: "Blog de Alexey Khaiminov",
  },
  proSub: {
    ru: "Программирование, Android, работа",
    en: "Programming, Android, work",
    es: "Programación, Android, trabajo",
  },
  lifeSub: {
    ru: "Всё остальное",
    en: "Everything else",
    es: "Todo lo demás",
  },
  empty: {
    ru: "Пока нет статей",
    en: "No posts yet",
    es: "Aún no hay artículos",
  },
  language: {
    ru: "Язык",
    en: "Language",
    es: "Idioma",
  },
  // Tooltip on a post that is listed in a language it isn't written in.
  onlyIn: {
    ru: { ru: "", en: "Только на английском", es: "Только на испанском" },
    en: { ru: "Only in Russian", en: "", es: "Only in Spanish" },
    es: { ru: "Solo en ruso", en: "Solo en inglés", es: "" },
  },
} as const;

export function isLocale(value: string | undefined): value is Locale {
  return (LOCALES as readonly string[]).includes(value ?? "");
}

/** Value for the `[...lang]` rest param: nothing for the default locale. */
export function langParam(locale: Locale): string | undefined {
  return locale === DEFAULT_LOCALE ? undefined : locale;
}

export function homePath(locale: Locale): string {
  return locale === DEFAULT_LOCALE ? "/" : `/${locale}/`;
}

export function postPath(locale: Locale, slug: string): string {
  return `${homePath(locale)}posts/${slug}/`;
}

/** "en/kts-compiler" -> { locale: "en", slug: "kts-compiler" } */
export function parseId(id: string): { locale: Locale; slug: string } {
  const [first, ...rest] = id.split("/");
  if (!isLocale(first) || rest.length === 0) {
    throw new Error(
      `Blog post "${id}" must live in src/content/blog/<${LOCALES.join("|")}>/<slug>.md`,
    );
  }
  return { locale: first, slug: rest.join("/") };
}

export interface LocalizedPost {
  slug: string;
  locale: Locale;
  entry: CollectionEntry<"blog">;
}

/** slug -> the versions of that post that exist, keyed by locale. */
export function groupBySlug(entries: CollectionEntry<"blog">[]) {
  const bySlug = new Map<string, Partial<Record<Locale, CollectionEntry<"blog">>>>();
  for (const entry of entries) {
    const { locale, slug } = parseId(entry.id);
    bySlug.set(slug, { ...bySlug.get(slug), [locale]: entry });
  }
  return bySlug;
}

/**
 * Every post, newest first, each in `locale` when translated, otherwise in
 * the default locale, otherwise in whatever language it exists in.
 */
export function postsFor(locale: Locale, entries: CollectionEntry<"blog">[]): LocalizedPost[] {
  const posts: LocalizedPost[] = [];
  for (const [slug, versions] of groupBySlug(entries)) {
    const actual = [locale, DEFAULT_LOCALE, ...LOCALES].find((l) => versions[l])!;
    posts.push({ slug, locale: actual, entry: versions[actual]! });
  }
  return posts.sort((a, b) => b.entry.data.date.valueOf() - a.entry.data.date.valueOf());
}

export function formatDate(date: Date, locale: Locale): string {
  return date.toLocaleDateString(DATE_LOCALE[locale], {
    year: "numeric",
    month: "long",
    day: "numeric",
    timeZone: "UTC",
  });
}
