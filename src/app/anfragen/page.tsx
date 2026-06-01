import ContactPageLayout from "@/components/ContactPageLayout";

export default function AnfragenPage() {
  return (
    <ContactPageLayout
      pageId="anfragen-page"
      heroId="anfragen-hero"
      heroAriaLabel="Anfrage stellen"
      heroLines={[
        { text: "Projekt" },
        { text: "anfragen", showDot: true },
      ]}
      heroLead="Bereit, Ihre Marke online richtig zu positionieren?"
      cardText="Erzählen Sie kurz von Ihrem Vorhaben – ob Website, Branding oder Sichtbarkeit bei Google. Ich melde mich mit einer klaren Einschätzung und den nächsten Schritten."
      formSource="Anfragen"
      defaultSubject="Projektanfrage"
    />
  );
}
