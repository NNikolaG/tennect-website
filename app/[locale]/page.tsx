import { notFound } from "next/navigation";
import { TennectHome } from "../components/TennectHome";
import { isLocale, locales } from "../i18n";
import { buildPageMetadata } from "../seo";

type LocalePageProps = {
  params: Promise<{ locale: string }>;
};

export function generateStaticParams() {
  return locales.map((locale) => ({ locale }));
}

export async function generateMetadata({ params }: LocalePageProps) {
  const { locale } = await params;
  return buildPageMetadata(isLocale(locale) ? locale : "en");
}

export default async function LocalePage({ params }: LocalePageProps) {
  const { locale } = await params;

  if (!isLocale(locale)) {
    notFound();
  }

  return <TennectHome locale={locale} />;
}
