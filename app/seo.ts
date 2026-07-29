import type { Metadata } from "next";
import { headers } from "next/headers";
import { getContent, localePaths, type Locale } from "./i18n";

const openGraphLocales: Record<Locale, string> = {
  en: "en_US",
  sr: "sr_RS",
  ru: "ru_RU",
};

export async function buildPageMetadata(locale: Locale): Promise<Metadata> {
  const requestHeaders = await headers();
  const host = requestHeaders.get("host") ?? "localhost:3000";
  const protocol = host.includes("localhost") ? "http" : "https";
  const base = new URL(`${protocol}://${host}`);
  const content = getContent(locale);
  const alternateLocale = Object.entries(openGraphLocales)
    .filter(([key]) => key !== locale)
    .map(([, value]) => value);

  return {
    metadataBase: base,
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
          url: new URL("/og.png", base),
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
      images: [new URL("/og.png", base)],
    },
  };
}
