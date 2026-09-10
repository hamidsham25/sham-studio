import type { PreviewConfig } from "@/lib/previews/core/types";
import MalerLayout from "../layout/Layout";
import Cta from "../sections/Cta";
import PageHero from "../sections/PageHero";
import Process from "../sections/Process";
import Services from "../sections/Services";

type Props = { config: PreviewConfig };

export default function MalerServicesPage({ config }: Props) {
  const intro = config.pageIntros?.services;

  return (
    <MalerLayout config={config} activePage="services">
      <PageHero
        config={config}
        breadcrumb="Leistungen"
        eyebrow="Leistungen"
        title={intro?.title ?? "Unsere Leistungen"}
        text={intro?.text}
        image={intro?.image}
      />

      <Services config={config} showHeading={false} />

      {config.process?.length ? (
        <Process config={config} steps={config.process} />
      ) : null}

      {config.cta ? <Cta config={config} cta={config.cta} /> : null}
    </MalerLayout>
  );
}
