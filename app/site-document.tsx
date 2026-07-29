import type { Metadata } from "next";
import { Manrope, Roboto_Condensed } from "next/font/google";
import "./globals.css";

const display = Roboto_Condensed({
  variable: "--font-display",
  subsets: ["cyrillic", "latin"],
  weight: ["500", "600", "700"],
});

const body = Manrope({
  variable: "--font-body",
  subsets: ["cyrillic", "latin"],
  weight: ["400", "500", "600", "700", "800"],
});

export const sharedMetadata: Metadata = {
  applicationName: "Tennect",
  verification: {
    google: "eJqjKabTaWM86Yxox6e4ESwrjEkFfp5SHjeEYBsU-88",
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

export function SiteDocument({
  children,
  lang,
}: Readonly<{ children: React.ReactNode; lang: string }>) {
  return (
    <html lang={lang}>
      <body className={`${display.variable} ${body.variable}`}>
        {children}
      </body>
    </html>
  );
}
