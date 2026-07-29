import type { Metadata } from "next";
import { headers } from "next/headers";
import { Barlow_Condensed, Manrope } from "next/font/google";
import "./globals.css";

const display = Barlow_Condensed({
  variable: "--font-display",
  subsets: ["latin"],
  weight: ["500", "600", "700"],
});

const body = Manrope({
  variable: "--font-body",
  subsets: ["latin"],
  weight: ["400", "500", "600", "700", "800"],
});

export async function generateMetadata(): Promise<Metadata> {
  const requestHeaders = await headers();
  const host = requestHeaders.get("host") ?? "localhost:3000";
  const protocol = host.includes("localhost") ? "http" : "https";
  const base = new URL(`${protocol}://${host}`);

  return {
    metadataBase: base,
    title: {
      default: "Tennect — Find Tennis Players & Courts Near You",
      template: "%s | Tennect",
    },
    description:
      "Find tennis players near you, discover local courts, organise matches, track scores and climb the rankings with Tennect.",
    keywords: [
      "find tennis players",
      "tennis players near me",
      "tennis partner app",
      "tennis courts near me",
      "tennis match app",
      "tennis ranking app",
      "tennis community",
      "tennis score tracker",
    ],
    applicationName: "Tennect",
    authors: [{ name: "Tennect" }],
    category: "sports",
    alternates: { canonical: "/" },
    openGraph: {
      type: "website",
      title: "Tennect — Your next tennis match starts here.",
      description:
        "Find players, discover courts, schedule matches and track your tennis in one connected app.",
      siteName: "Tennect",
      images: [
        {
          url: new URL("/og.png", base),
          width: 1200,
          height: 630,
          alt: "Tennect — Your next tennis match starts here",
        },
      ],
    },
    twitter: {
      card: "summary_large_image",
      title: "Tennect — Your next tennis match starts here.",
      description:
        "Find players, discover courts, schedule matches and track your tennis.",
      images: [new URL("/og.png", base)],
    },
    icons: {
      icon: "/media/tennect-icon.png",
      apple: "/media/tennect-icon.png",
    },
    robots: {
      index: true,
      follow: true,
      googleBot: {
        index: true,
        follow: true,
        "max-image-preview": "large",
        "max-snippet": -1,
        "max-video-preview": -1,
      },
    },
  };
}

export default function RootLayout({
  children,
}: Readonly<{ children: React.ReactNode }>) {
  return (
    <html lang="en">
      <body className={`${display.variable} ${body.variable}`}>
        {children}
      </body>
    </html>
  );
}
