import type { Metadata } from "next";
import { SITE_URL } from "@/lib/site";

export const metadata: Metadata = {
  title: "Services: Webdesign, Branding & Digital Marketing",
  description:
    "Webdesign, Digital Marketing, Branding und Wartung aus Hannover – Sham Studio verbindet Design, Technik und Sichtbarkeit zu einem System, das Anfragen bringt.",
  alternates: { canonical: `${SITE_URL}/services` },
  openGraph: {
    url: `${SITE_URL}/services`,
    title: "Services | Sham Studio",
    description:
      "Von der Marke bis SEO, Google Ads und laufender Website-Betreuung: alle Leistungen im Überblick.",
  },
};

export default function ServicesLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return children;
}
