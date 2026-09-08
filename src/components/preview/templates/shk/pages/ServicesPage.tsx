import type { PreviewConfig } from "@/lib/previews/core/types";
import ShkLayout from "../layout/Layout";
import Cta from "../sections/Cta";
import PageHero from "../sections/PageHero";
import Process from "../sections/Process";
import ServicesDetailed from "../sections/ServicesDetailed";

type Props = { config: PreviewConfig };

export default function ShkServicesPage({ config }: Props) {
  const intro = config.pageIntros?.services;

  return (
    <ShkLayout config={config} activePage="services">
      <PageHero
        config={config}
        breadcrumb="Leistungen"
        eyebrow="Leistungen"
        title={intro?.title ?? "Unsere Leistungen"}
        text={intro?.text}
        dark
      />

      <ServicesDetailed config={config} />

      {config.process?.length ? (
        <Process config={config} steps={config.process} />
      ) : null}

      {config.cta ? <Cta config={config} cta={config.cta} /> : null}
    </ShkLayout>
  );
}
