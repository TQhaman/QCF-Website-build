import type { Metadata, Viewport } from "next";
import { Barlow_Condensed, DM_Sans } from "next/font/google";
import { siteConfig } from "@/app/config/site";
import { absoluteUrl } from "@/app/lib/site";
import "./globals.css";

const displayFont = Barlow_Condensed({
  subsets: ["latin"],
  weight: ["500", "600", "700", "800"],
  variable: "--font-barlow-condensed",
  display: "swap",
});

const bodyFont = DM_Sans({
  subsets: ["latin"],
  variable: "--font-dm-sans",
  display: "swap",
});

export const metadata: Metadata = {
  metadataBase: new URL(siteConfig.siteUrl),
  title: {
    default: `${siteConfig.businessName} | ${siteConfig.tagline}`,
    template: `%s | ${siteConfig.businessName}`,
  },
  description: siteConfig.description,
  applicationName: siteConfig.businessName,
  keywords: [...siteConfig.seo.keywords],
  authors: [{ name: siteConfig.businessName }],
  creator: siteConfig.businessName,
  publisher: siteConfig.businessName,
  alternates: { canonical: "/" },
  category: "arts and entertainment",
  openGraph: {
    type: "website",
    locale: siteConfig.locale.replace("-", "_"),
    url: siteConfig.siteUrl,
    title: `${siteConfig.businessName} | ${siteConfig.tagline}`,
    description: siteConfig.description,
    siteName: siteConfig.businessName,
    images: [
      {
        url: absoluteUrl("/opengraph-image"),
        width: 1200,
        height: 630,
        alt: `${siteConfig.businessName} preview`,
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: `${siteConfig.businessName} | ${siteConfig.tagline}`,
    description: siteConfig.description,
    images: [absoluteUrl("/opengraph-image")],
  },
};

export const viewport: Viewport = {
  themeColor: "#15130f",
  colorScheme: "light",
};

export default function RootLayout({ children }: Readonly<{ children: React.ReactNode }>) {
  return (
    <html lang={siteConfig.locale} className={`${displayFont.variable} ${bodyFont.variable}`}>
      <body>{children}</body>
    </html>
  );
}
