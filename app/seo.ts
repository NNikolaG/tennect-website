import type { Metadata } from "next";
import { getContent, localePaths, type Locale } from "./i18n";
import { siteUrl } from "./site-url";

const openGraphLocales: Record<Locale, string> = {
  en: "en_US",
  sr: "sr_RS",
  ru: "ru_RU",
};

export function buildPageMetadata(locale: Locale): Metadata {
  const content = getContent(locale);
  const alternateLocale = Object.entries(openGraphLocales)
    .filter(([key]) => key !== locale)
    .map(([, value]) => value);

  return {
    metadataBase: siteUrl,
    title: content.metadata.title,
    description: content.metadata.description,
    keywords: content.metadata.keywords,
    applicationName: "Tennect",
    authors: [{ name: "Tennect" }],
    category: "sports",
    alternates: {
      canonical: localePaths[locale],
      languages: {
        en: localePaths.en,
        "sr-Latn": localePaths.sr,
        ru: localePaths.ru,
        "x-default": localePaths.en,
      },
    },
    openGraph: {
      type: "website",
      title: content.metadata.ogTitle,
      description: content.metadata.ogDescription,
      siteName: "Tennect",
      locale: openGraphLocales[locale],
      alternateLocale,
      url: localePaths[locale],
      images: [
        {
          url: "/og.png",
          width: 1731,
          height: 909,
          alt: content.metadata.ogAlt,
        },
      ],
    },
    twitter: {
      card: "summary_large_image",
      title: content.metadata.ogTitle,
      description: content.metadata.ogDescription,
      images: ["/og.png"],
    },
  };
}
