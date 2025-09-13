import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";
import StructuredData from "@/components/StructuredData";
import { SpeedInsights } from "@vercel/speed-insights/next";

const inter = Inter({ 
  subsets: ["latin"],
  display: 'swap',
  preload: true,
  fallback: ['system-ui', 'arial']
});

export const metadata: Metadata = {
  title: {
    default: "Sham Studio - Webdesign & Entwicklung in Hannover",
    template: "%s | Sham Studio"
  },
  description: "Professionelle Webdesign-Lösungen für Portfolios, Landing Pages und Unternehmen in Hannover. Moderne, responsive Websites mit Fokus auf Performance und Benutzerfreundlichkeit.",
  keywords: [
    "Webdesign Hannover",
    "Webentwicklung Hannover", 
    "Portfolio Website",
    "Landing Page",
    "Business Website",
    "Responsive Design",
    "SEO Optimierung",
    "Performance Optimierung",
    "Moderne Webentwicklung",
    "UI/UX Design"
  ],
  authors: [{ name: "Sham Studio", url: "https://sham.studio" }],
  creator: "Sham Studio",
  publisher: "Sham Studio",
  formatDetection: {
    email: false,
    address: false,
    telephone: false,
  },
  metadataBase: new URL("https://sham-studio.de"),
  alternates: {
    canonical: "/",
  },
  openGraph: {
    title: "Sham Studio - Webdesign & Entwicklung in Hannover",
    description: "Professionelle Webdesign-Lösungen für Portfolios, Landing Pages und Unternehmen in Hannover. Moderne, responsive Websites mit Fokus auf Performance.",
    url: "https://sham-studio.de",
    siteName: "Sham Studio",
    images: [
      {
        url: "/opengraph-image",
        width: 1200,
        height: 630,
        alt: "Sham Studio - Webdesign & Entwicklung in Hannover",
      },
    ],
    locale: "de_DE",
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title: "Sham Studio - Webdesign & Entwicklung in Hannover",
    description: "Professionelle Webdesign-Lösungen für Portfolios, Landing Pages und Unternehmen in Hannover.",
    images: ["/opengraph-image"],
    creator: "@shamstudio",
  },
  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
      "max-video-preview": -1,
      "max-image-preview": "large",
      "max-snippet": -1,
    },
  },
  verification: {
    google: process.env.NEXT_PUBLIC_GOOGLE_VERIFICATION,
    yandex: process.env.NEXT_PUBLIC_YANDEX_VERIFICATION,
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="de">
      <head>
        <StructuredData />
      </head>
      <body className={inter.className}>
        {children}
        <SpeedInsights />
      </body>
    </html>
  );
}