import { notFound } from "next/navigation";
import { TennectHome } from "../../components/TennectHome";
import { isLocalizedLocale, localizedLocales } from "../../i18n";
import { buildPageMetadata } from "../../seo";

type LocalePageProps = {
  params: Promise<{ locale: string }>;
};

export function generateStaticParams() {
  return localizedLocales.map((locale) => ({ locale }));
}

export const dynamicParams = false;

export async function generateMetadata({ params }: LocalePageProps) {
  const { locale } = await params;
  if (!isLocalizedLocale(locale)) notFound();

  return buildPageMetadata(locale);
}

export default async function LocalePage({ params }: LocalePageProps) {
  const { locale } = await params;

  if (!isLocalizedLocale(locale)) notFound();

  return <TennectHome locale={locale} />;
}
