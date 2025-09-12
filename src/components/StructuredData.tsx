export default function StructuredData() {
  const structuredData = {
    "@context": "https://schema.org",
    "@graph": [
      {
        "@type": "Organization",
        "@id": "https://sham.studio/#organization",
        "name": "Sham Studio",
        "url": "https://sham.studio",
        "logo": {
          "@type": "ImageObject",
          "url": "https://sham.studio/images/logo.png",
          "width": 200,
          "height": 200
        },
        "description": "Professionelle Webdesign-Lösungen für Portfolios, Landing Pages und Unternehmen in Hannover. Moderne, responsive Websites mit Fokus auf Performance und Benutzerfreundlichkeit.",
        "foundingLocation": {
          "@type": "Place",
          "name": "Hannover, Deutschland"
        },
        "address": {
          "@type": "PostalAddress",
          "addressLocality": "Hannover",
          "addressCountry": "DE"
        },
        "contactPoint": {
          "@type": "ContactPoint",
          "contactType": "customer service",
          "availableLanguage": ["German", "English"],
          "contactOption": "TollFree"
        },
        "sameAs": [
          "https://www.linkedin.com/company/sham-studio",
          "https://github.com/sham-studio",
          "https://twitter.com/shamstudio"
        ]
      },
      {
        "@type": "WebSite",
        "@id": "https://sham.studio/#website",
        "url": "https://sham.studio",
        "name": "Sham Studio",
        "description": "Professionelle Webdesign-Lösungen für Portfolios, Landing Pages und Unternehmen in Hannover.",
        "publisher": {
          "@id": "https://sham.studio/#organization"
        },
        "inLanguage": "de-DE"
      },
      {
        "@type": "WebPage",
        "@id": "https://sham.studio/#webpage",
        "url": "https://sham.studio",
        "name": "Sham Studio - Webdesign & Entwicklung in Hannover",
        "isPartOf": {
          "@id": "https://sham.studio/#website"
        },
        "about": {
          "@id": "https://sham.studio/#organization"
        },
        "description": "Professionelle Webdesign-Lösungen für Portfolios, Landing Pages und Unternehmen in Hannover. Moderne, responsive Websites mit Fokus auf Performance und Benutzerfreundlichkeit.",
        "inLanguage": "de-DE"
      },
      {
        "@type": "Service",
        "name": "Webdesign & Entwicklung",
        "description": "Professionelle Webdesign-Lösungen für Portfolios, Landing Pages und kleine Unternehmen",
        "provider": {
          "@id": "https://sham.studio/#organization"
        },
        "areaServed": {
          "@type": "Place",
          "name": "Hannover, Deutschland"
        },
        "serviceType": "Webdesign",
        "offers": {
          "@type": "Offer",
          "description": "Moderne, responsive Websites mit Fokus auf Performance und Benutzerfreundlichkeit"
        }
      }
    ]
  };

  return (
    <script
      type="application/ld+json"
      dangerouslySetInnerHTML={{ __html: JSON.stringify(structuredData) }}
    />
  );
}
