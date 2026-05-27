import type { Metadata } from "next";
import { Syne, Plus_Jakarta_Sans, Fraunces, Cinzel } from "next/font/google";
import { Analytics } from "@vercel/analytics/next";
import { SpeedInsights } from "@vercel/speed-insights/next";
import "./globals.css";

const syne = Syne({
  variable: "--font-display",
  subsets: ["latin"],
  weight: ["500", "600", "700", "800"],
  display: "swap",
});

const plusJakartaSans = Plus_Jakarta_Sans({
  variable: "--font-sans",
  subsets: ["latin"],
  display: "swap",
});

/** Cover cards – e.g. Physio Saglam tagline */
const fraunces = Fraunces({
  variable: "--font-physio",
  subsets: ["latin"],
  weight: ["500", "600", "700"],
  display: "swap",
});

/** Cover cards – Noir Ink tattoo studio */
const cinzel = Cinzel({
  variable: "--font-tattoo",
  subsets: ["latin"],
  weight: ["500", "600", "700"],
  display: "swap",
});

import { SITE_DESCRIPTION, SITE_URL } from "@/lib/site";
import { localBusinessJsonLd, webSiteJsonLd } from "@/lib/schema";
import StructuredData from "@/components/StructuredData";

export const metadata: Metadata = {
  metadataBase: new URL(SITE_URL),
  title: {
    default: "Individuelle Websites in Hannover | Sham Studio",
    template: "%s | Sham Studio",
  },
  description:
    "Sham Studio erstellt maßgeschneiderte Websites in Hannover – Webdesign, Entwicklung, SEO und AEO aus einer Hand. Jetzt unverbindlich anfragen.",
  keywords: [
    "Webdesign Hannover",
    "Webentwicklung Hannover",
    "UI/UX Design Hannover",
    "Website erstellen Hannover",
    "Sham Studio",
    "Webdesign Agentur",
    "individuelle Website",
  ],
  authors: [{ name: "Hamid Sham", url: SITE_URL }],
  creator: "Sham Studio",
  publisher: "Sham Studio",
  formatDetection: {
    email: false,
    address: false,
    telephone: false,
  },
  openGraph: {
    type: "website",
    locale: "de_DE",
    url: SITE_URL,
    siteName: "Sham Studio",
    title: "Individuelle Websites in Hannover | Sham Studio",
    description: SITE_DESCRIPTION,
    // Bild wird von app/opengraph-image.tsx generiert
  },
  twitter: {
    card: "summary_large_image",
    title: "Individuelle Websites in Hannover | Sham Studio",
    description: SITE_DESCRIPTION,
  },
  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
    },
  },
  alternates: {
    canonical: SITE_URL,
  },
  category: "business",
};

export const viewport = {
  width: "device-width",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="de">
      <head>
        <link rel="preload" href="/images/hero-image.webp" as="image" />
        <link
          rel="alternate"
          type="text/plain"
          href="/llms.txt"
          title="LLMs.txt"
        />
      </head>
      <body
        className={`${syne.variable} ${plusJakartaSans.variable} ${fraunces.variable} ${cinzel.variable} font-sans antialiased bg-[#0a0a0a] text-zinc-100`}
      >
        <StructuredData
          data={[localBusinessJsonLd(), webSiteJsonLd()]}
        />
        {children}
        <Analytics />
        <SpeedInsights />
      </body>
    </html>
  );
}
