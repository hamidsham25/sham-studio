import type { PreviewConfig } from "@/lib/previews/core/types";
import ShkLayout from "../layout/Layout";
import About from "../sections/About";
import Benefits from "../sections/Benefits";
import Cta from "../sections/Cta";
import PageHero from "../sections/PageHero";
import Stats from "../sections/Stats";

type Props = { config: PreviewConfig };

export default function ShkAboutPage({ config }: Props) {
  const intro = config.pageIntros?.about;

  return (
    <ShkLayout config={config} activePage="about">
      <PageHero
        config={config}
        breadcrumb="Über uns"
        eyebrow="Meisterbetrieb"
        title={intro?.title ?? `Über ${config.businessName}`}
        text={intro?.text ?? config.tagline}
        dark
      />

      {config.about ? (
        <About config={config} about={config.about} withCta={false} />
      ) : null}

      {config.stats?.length ? (
        <Stats
          stats={config.stats}
          heading={config.sectionTitles?.stats?.title}
          text={config.sectionTitles?.stats?.text}
        />
      ) : null}

      {config.benefits?.length ? (
        <Benefits config={config} benefits={config.benefits} />
      ) : null}

      {config.cta ? <Cta config={config} cta={config.cta} /> : null}
    </ShkLayout>
  );
}
