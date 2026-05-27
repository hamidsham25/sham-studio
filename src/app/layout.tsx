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

const SITE_URL = "https://sham-studio.de";

export const metadata: Metadata = {
  metadataBase: new URL(SITE_URL),
  title: {
    default: "Sham Studio | Webdesign & Entwicklung in Hannover",
    template: "%s | Sham Studio",
  },
  description:
    "Sham Studio, Webdesign, UI/UX und Entwicklung in Hannover. Individuelle Websites, die überzeugen. Von Konzept bis Launch aus einer Hand.",
  keywords: [
    "Webdesign Hannover",
    "Webentwicklung Hannover",
    "UI/UX Design Hannover",
    "Website erstellen Hannover",
    "Sham Studio",
    "Webdesign Agentur",
    "individuelle Website",
  ],
  authors: [{ name: "Sham Studio", url: SITE_URL }],
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
    title: "Sham Studio | Webdesign & Entwicklung in Hannover",
    description:
      "Professionelles Webdesign, UI/UX und Entwicklung in Hannover. Individuelle Websites, die überzeugen. Von Konzept bis Launch.",
    // Bild wird von app/opengraph-image.tsx generiert
  },
  twitter: {
    card: "summary_large_image",
    title: "Sham Studio | Webdesign & Entwicklung in Hannover",
    description:
      "Professionelles Webdesign, UI/UX und Entwicklung in Hannover. Individuelle Websites aus einer Hand.",
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

const localBusinessJsonLd = {
  "@context": "https://schema.org",
  "@type": "ProfessionalService",
  name: "Sham Studio",
  description:
    "Webdesign, UI/UX Design und Webentwicklung in Hannover. Individuelle Websites und digitale Produkte.",
  url: SITE_URL,
  address: {
    "@type": "PostalAddress",
    addressLocality: "Hannover",
    addressRegion: "Niedersachsen",
    addressCountry: "DE",
  },
  areaServed: {
    "@type": "GeoCircle",
    geoMidpoint: {
      "@type": "GeoCoordinates",
      latitude: 52.3759,
      longitude: 9.732,
    },
    geoRadius: "50000",
  },
  serviceType: ["Webdesign", "UI/UX Design", "Webentwicklung"],
  priceRange: "€€",
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
      </head>
      <body
        className={`${syne.variable} ${plusJakartaSans.variable} ${fraunces.variable} ${cinzel.variable} font-sans antialiased bg-[#0a0a0a] text-zinc-100`}
      >
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(localBusinessJsonLd) }}
        />
        {children}
        <Analytics />
        <SpeedInsights />
      </body>
    </html>
  );
}
