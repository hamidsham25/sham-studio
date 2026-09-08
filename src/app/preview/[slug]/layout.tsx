import type { Metadata } from "next";
import { Outfit } from "next/font/google";
import type { ReactNode } from "react";
import { getPreviewSlugs } from "@/lib/previews";

/**
 * Eigene Schrift für alle Previews – bewusst hier statt im Root-Layout,
 * damit das Sham-Studio-Design unberührt bleibt.
 */
const previewFont = Outfit({
  variable: "--preview-font-sans",
  subsets: ["latin"],
  display: "swap",
});

export async function generateStaticParams() {
  return getPreviewSlugs().map((slug) => ({ slug }));
}

export const metadata: Metadata = {
  // Kein "| Sham Studio"-Suffix auf Kundenentwürfen.
  title: { default: "Entwurf", template: "%s" },
  // Entwürfe dürfen nicht in Suchmaschinen landen.
  robots: {
    index: false,
    follow: false,
    nocache: true,
    googleBot: { index: false, follow: false },
  },
};

export default function PreviewSlugLayout({
  children,
}: {
  children: ReactNode;
}) {
  return <div className={previewFont.variable}>{children}</div>;
}
