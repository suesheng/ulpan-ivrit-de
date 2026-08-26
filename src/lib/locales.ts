export const locales = ["de", "ru", "en", "he"] as const;
export type Locale = (typeof locales)[number];

export const defaultLocale: Locale = "de";

export function isRtl(locale: Locale): boolean {
  return locale === "he";
}
