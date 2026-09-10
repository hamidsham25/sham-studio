import MalerLayout from "../layout/Layout";
import About from "../sections/About";
import Benefits from "../sections/Benefits";
import Cta from "../sections/Cta";
import Hero from "../sections/Hero";
import Process from "../sections/Process";
import Services from "../sections/Services";
import Stats from "../sections/Stats";
import type { PreviewConfig } from "@/lib/previews/core/types";

type Props = { config: PreviewConfig };

export default function MalerHomePage({ config }: Props) {
  return (
    <MalerLayout config={config} activePage="home">
      <Hero config={config} />

      {config.about ? (
        <About config={config} about={config.about} />
      ) : null}

      {config.stats?.length ? <Stats stats={config.stats} /> : null}

      <Services config={config} limit={4} />

      {config.process?.length ? (
        <Process config={config} steps={config.process} />
      ) : null}

      {config.benefits?.length ? (
        <Benefits config={config} benefits={config.benefits} />
      ) : null}

      {config.cta ? <Cta config={config} cta={config.cta} /> : null}
    </MalerLayout>
  );
}
