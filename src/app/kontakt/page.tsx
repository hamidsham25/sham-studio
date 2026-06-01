import ContactPageLayout from "@/components/ContactPageLayout";

export default function KontaktPage() {
  return (
    <ContactPageLayout
      pageId="kontakt-page"
      heroId="kontakt-hero"
      heroAriaLabel="Kontakt"
      heroLines={[
        { text: "Kontakt", showDot: true },
      ]}
      heroLead="Lassen Sie uns über Ihr Projekt sprechen."
      cardText="Fragen, Feedback oder ein konkretes Vorhaben – schreiben Sie mir direkt. Ich antworte persönlich, in der Regel innerhalb von 24 Stunden."
      formSource="Kontaktseite"
    />
  );
}
