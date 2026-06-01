import type { Metadata } from "next";
import { SITE_URL } from "@/lib/site";

export const metadata: Metadata = {
  title: "Über uns",
  description:
    "Sham Studio aus Langenhagen: Erfahrung, Tech-Stack und zufriedene Kunden – erfahren Sie, warum wir der richtige Partner für Webdesign und digitale Sichtbarkeit sind.",
  alternates: { canonical: `${SITE_URL}/ueber-uns` },
  openGraph: {
    url: `${SITE_URL}/ueber-uns`,
    title: "Über uns | Sham Studio",
    description:
      "Manifest, Werte und Team hinter Sham Studio – Webdesign mit Klarheit und Wirkung.",
  },
};

export default function UeberUnsLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return children;
}
