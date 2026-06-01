import type { Metadata } from "next";
import { SITE_URL } from "@/lib/site";

export const metadata: Metadata = {
  title: "Kontakt",
  description:
    "Kontakt zu Sham Studio: E-Mail, Instagram und Formular – ich melde mich zeitnah zu Ihrem Webdesign- oder Marketing-Projekt.",
  alternates: { canonical: `${SITE_URL}/kontakt` },
  openGraph: {
    url: `${SITE_URL}/kontakt`,
    title: "Kontakt | Sham Studio",
    description: "Schreiben Sie Sham Studio – Antwort in der Regel innerhalb von 24 Stunden.",
  },
};

export default function KontaktLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return children;
}
