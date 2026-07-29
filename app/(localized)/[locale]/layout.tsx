import { notFound } from "next/navigation";
import { getContent, isLocalizedLocale } from "../../i18n";
import { sharedMetadata, SiteDocument } from "../../site-document";

export const metadata = sharedMetadata;

type LocalizedLayoutProps = Readonly<{
  children: React.ReactNode;
  params: Promise<{ locale: string }>;
}>;

export default async function LocalizedLayout({
  children,
  params,
}: LocalizedLayoutProps) {
  const { locale } = await params;
  if (!isLocalizedLocale(locale)) notFound();

  return (
    <SiteDocument lang={getContent(locale).htmlLang}>
      {children}
    </SiteDocument>
  );
}
