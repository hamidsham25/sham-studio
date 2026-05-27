import { AUTHOR, CONTACT, SITE_NAME, SITE_URL } from "@/lib/site";

export type FaqItem = { question: string; answer: string };

export function faqPageJsonLd(items: FaqItem[]) {
  return {
    "@context": "https://schema.org",
    "@type": "FAQPage",
    mainEntity: items.map((item) => ({
      "@type": "Question",
      name: item.question,
      acceptedAnswer: {
        "@type": "Answer",
        text: item.answer,
      },
    })),
  };
}

export function breadcrumbJsonLd(
  items: { name: string; url: string }[]
) {
  return {
    "@context": "https://schema.org",
    "@type": "BreadcrumbList",
    itemListElement: items.map((item, index) => ({
      "@type": "ListItem",
      position: index + 1,
      name: item.name,
      item: item.url,
    })),
  };
}

export function localBusinessJsonLd() {
  return {
    "@context": "https://schema.org",
    "@type": "ProfessionalService",
    "@id": `${SITE_URL}/#organization`,
    name: SITE_NAME,
    description:
      "Webdesign, UI/UX Design und Webentwicklung in Hannover und Region. Individuelle Websites, SEO, AEO und digitale Strategie.",
    url: SITE_URL,
    email: CONTACT.email,
    founder: {
      "@type": "Person",
      name: AUTHOR.name,
      jobTitle: AUTHOR.jobTitle,
      url: SITE_URL,
    },
    address: {
      "@type": "PostalAddress",
      streetAddress: CONTACT.street,
      addressLocality: CONTACT.city,
      addressRegion: CONTACT.region,
      postalCode: CONTACT.postalCode,
      addressCountry: CONTACT.country,
    },
    areaServed: [
      { "@type": "City", name: "Hannover" },
      { "@type": "City", name: "Langenhagen" },
      { "@type": "AdministrativeArea", name: "Niedersachsen" },
    ],
    serviceType: [
      "Webdesign",
      "Webentwicklung",
      "UI/UX Design",
      "SEO",
      "Answer Engine Optimization (AEO)",
      "Branding",
      "Google Business Profil Optimierung",
    ],
    priceRange: "€€",
    knowsAbout: [
      "Webdesign Hannover",
      "Next.js Entwicklung",
      "Suchmaschinenoptimierung",
      "Answer Engine Optimization",
    ],
  };
}

export function webSiteJsonLd() {
  return {
    "@context": "https://schema.org",
    "@type": "WebSite",
    "@id": `${SITE_URL}/#website`,
    name: SITE_NAME,
    url: SITE_URL,
    description:
      "Professionelles Webdesign und Entwicklung für Unternehmen in Hannover und Umgebung.",
    publisher: { "@id": `${SITE_URL}/#organization` },
    inLanguage: "de-DE",
  };
}

export function itemListJsonLd(
  items: { name: string; url: string; description?: string }[]
) {
  return {
    "@context": "https://schema.org",
    "@type": "ItemList",
    name: "Portfolio Sham Studio",
    itemListElement: items.map((item, index) => ({
      "@type": "ListItem",
      position: index + 1,
      name: item.name,
      url: item.url,
      description: item.description,
    })),
  };
}

export function personJsonLd() {
  return {
    "@context": "https://schema.org",
    "@type": "Person",
    name: AUTHOR.name,
    jobTitle: AUTHOR.jobTitle,
    description: AUTHOR.bio,
    url: SITE_URL,
    worksFor: {
      "@type": "Organization",
      name: SITE_NAME,
      url: SITE_URL,
    },
  };
}
