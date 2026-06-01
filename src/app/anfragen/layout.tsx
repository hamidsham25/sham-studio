import type { Metadata } from "next";
import { SITE_URL } from "@/lib/site";

export const metadata: Metadata = {
  title: "Anfrage stellen",
  description:
    "Projektanfrage an Sham Studio: Webdesign, Branding, Content und Digital Marketing – Formular ausfüllen, wir melden uns mit den nächsten Schritten.",
  alternates: { canonical: `${SITE_URL}/anfragen` },
  openGraph: {
    url: `${SITE_URL}/anfragen`,
    title: "Anfrage | Sham Studio",
    description:
      "Starten Sie Ihre Anfrage für Webdesign und digitale Sichtbarkeit bei Sham Studio.",
  },
};

export default function AnfragenLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return children;
}
