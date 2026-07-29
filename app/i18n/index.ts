import { en } from "./en";
import { ru } from "./ru";
import { sr } from "./sr";
import { locales, type Locale, type SiteContent } from "./types";

export { locales };
export type { Locale, SiteContent };

export const contentByLocale: Record<Locale, SiteContent> = { en, sr, ru };

export const localePaths: Record<Locale, string> = {
  en: "/",
  sr: "/sr",
  ru: "/ru",
};

export function isLocale(value: string): value is Locale {
  return locales.includes(value as Locale);
}

export function getContent(locale: Locale): SiteContent {
  return contentByLocale[locale];
}
