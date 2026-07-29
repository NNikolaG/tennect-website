import type { MetadataRoute } from "next";
import { localePaths, locales } from "./i18n";
import { absoluteUrl } from "./site-url";

const languageAlternates = {
  en: absoluteUrl(localePaths.en),
  "sr-Latn": absoluteUrl(localePaths.sr),
  ru: absoluteUrl(localePaths.ru),
  "x-default": absoluteUrl(localePaths.en),
};

export default function sitemap(): MetadataRoute.Sitemap {
  return locales.map((locale) => ({
    url: absoluteUrl(localePaths[locale]),
    changeFrequency: "weekly",
    priority: locale === "en" ? 1 : 0.9,
    alternates: {
      languages: languageAlternates,
    },
  }));
}
