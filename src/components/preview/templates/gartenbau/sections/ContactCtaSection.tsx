import { getGartenbauContent } from "../content";
import { previewPath } from "../navigation";
import { ClosingCtaSection } from "./ClosingCtaSection";

type ContactCtaSectionProps = {
  slug: string;
};

export function ContactCtaSection({ slug }: ContactCtaSectionProps) {
  const contactCta = getGartenbauContent(slug).contactCta;

  return (
    <ClosingCtaSection
      content={{
        ...contactCta,
        ctaHref: previewPath(slug, "contact"),
      }}
      id="kontakt"
    />
  );
}
