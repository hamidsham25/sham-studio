import type { PreviewConfig } from "@/lib/previews/core/types";
import MalerLayout from "../layout/Layout";
import Contact from "../sections/Contact";
import PageHero from "../sections/PageHero";

type Props = { config: PreviewConfig };

export default function MalerContactPage({ config }: Props) {
  const intro = config.pageIntros?.contact;

  return (
    <MalerLayout config={config} activePage="contact">
      <PageHero
        config={config}
        breadcrumb="Kontakt"
        eyebrow="Kontakt"
        title={intro?.title ?? "Kontakt aufnehmen"}
        text={intro?.text}
        image={intro?.image}
      />

      <Contact config={config} />
    </MalerLayout>
  );
}
