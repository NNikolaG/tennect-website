import { sharedMetadata, SiteDocument } from "../site-document";

export const metadata = sharedMetadata;

export default function EnglishLayout({
  children,
}: Readonly<{ children: React.ReactNode }>) {
  return <SiteDocument lang="en">{children}</SiteDocument>;
}
