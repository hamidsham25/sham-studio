import type { PreviewConfig } from "@/lib/previews/core/types";
import MalerLayout from "../layout/Layout";
import About from "../sections/About";
import Benefits from "../sections/Benefits";
import Cta from "../sections/Cta";
import PageHero from "../sections/PageHero";
import Stats from "../sections/Stats";

type Props = { config: PreviewConfig };

export default function MalerAboutPage({ config }: Props) {
  const intro = config.pageIntros?.about;

  return (
    <MalerLayout config={config} activePage="about">
      <PageHero
        config={config}
        breadcrumb="Über uns"
        eyebrow="Über uns"
        title={intro?.title ?? `Über ${config.businessName}`}
        text={intro?.text ?? config.tagline}
        image={intro?.image}
      />

      {config.about ? (
        <About config={config} about={config.about} withCta={false} />
      ) : null}

      {config.stats?.length ? <Stats stats={config.stats} /> : null}

      {config.benefits?.length ? (
        <Benefits config={config} benefits={config.benefits} />
      ) : null}

      {config.cta ? <Cta config={config} cta={config.cta} /> : null}
    </MalerLayout>
  );
}
