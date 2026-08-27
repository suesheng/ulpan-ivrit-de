import { getRelativeLocaleUrl } from "astro:i18n";
import type { Locale } from "./locales";

export type UiLocale = "de" | "ru" | "en";

export const uiLocales: UiLocale[] = ["de", "ru", "en"];

export function uiLocale(locale: string | undefined): UiLocale {
  if (locale === "ru" || locale === "en") return locale;
  return "de";
}

/** Prefer the URL prefix so /ru and /en stay translated even if currentLocale is unset. */
export function pageLocale(
  currentLocale: string | undefined,
  pathname: string,
): UiLocale {
  const prefix = pathname.match(/^\/(ru|en)(?=\/|$)/)?.[1];
  return uiLocale(prefix ?? currentLocale);
}

export function stripLocalePrefix(pathname: string): string {
  const next = pathname.replace(/^\/(ru|en|he)(?=\/|$)/, "");
  return next === "" ? "/" : next;
}

export function locPath(locale: Locale | UiLocale, pathname: string): string {
  const path = stripLocalePrefix(pathname);
  return getRelativeLocaleUrl(locale, path);
}

export function htmlLang(locale: string | undefined): string {
  const ui = uiLocale(locale);
  return ui;
}

export function ogLocale(locale: UiLocale): string {
  if (locale === "ru") return "ru_RU";
  if (locale === "en") return "en_GB";
  return "de_DE";
}
