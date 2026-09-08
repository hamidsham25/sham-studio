import type { PreviewConfig } from "@/lib/previews/core/types";
import ShkLayout from "../layout/Layout";
import Contact from "../sections/Contact";
import PageHero from "../sections/PageHero";

type Props = { config: PreviewConfig };

export default function ShkContactPage({ config }: Props) {
  const intro = config.pageIntros?.contact;

  return (
    <ShkLayout config={config} activePage="contact">
      <PageHero
        config={config}
        breadcrumb="Notdienst"
        eyebrow="24h erreichbar"
        title={intro?.title ?? "Notdienst & Kontakt"}
        text={intro?.text}
        dark
      />

      <Contact config={config} />
    </ShkLayout>
  );
}
