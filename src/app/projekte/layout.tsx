import type { Metadata } from "next";
import StructuredData from "@/components/StructuredData";
import { PROJEKTE_FAQ } from "@/lib/faq-content";
import { PORTFOLIO_PROJECTS } from "@/lib/portfolio-projects";
import {
  breadcrumbJsonLd,
  faqPageJsonLd,
  itemListJsonLd,
} from "@/lib/schema";
import { SITE_URL } from "@/lib/site";

export const metadata: Metadata = {
  title: "Portfolio: Webdesign-Referenzen aus Hannover",
  description:
    "Sham Studio zeigt Live-Referenzen aus Elektrotechnik, Physio, Reinigung und mehr – individuelles Webdesign aus Hannover, zum Ansehen und Vergleichen.",
  alternates: { canonical: `${SITE_URL}/projekte` },
  openGraph: {
    url: `${SITE_URL}/projekte`,
    title: "Portfolio | Sham Studio",
    description:
      "Alle Webdesign-Projekte von Sham Studio mit Live-Links und Branchen-Tags.",
  },
};

export default function ProjekteLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  const breadcrumbs = breadcrumbJsonLd([
    { name: "Startseite", url: SITE_URL },
    { name: "Projekte", url: `${SITE_URL}/projekte` },
  ]);

  const portfolioList = itemListJsonLd(
    PORTFOLIO_PROJECTS.map((p) => ({
      name: p.title,
      url: p.href.startsWith("http") ? p.href : `${SITE_URL}${p.href}`,
      description: p.description,
    }))
  );

  return (
    <>
      <StructuredData
        data={[breadcrumbs, faqPageJsonLd(PROJEKTE_FAQ), portfolioList]}
      />
      {children}
    </>
  );
}
