import type { PreviewConfig } from "@/lib/previews/core/types";
import ShkLayout from "../layout/Layout";
import About from "../sections/About";
import Benefits from "../sections/Benefits";
import Cta from "../sections/Cta";
import Hero from "../sections/Hero";
import Process from "../sections/Process";
import Projects from "../sections/Projects";
import Services from "../sections/Services";
import Stats from "../sections/Stats";

type Props = { config: PreviewConfig };

export default function ShkHomePage({ config }: Props) {
  return (
    <ShkLayout config={config} activePage="home">
      <Hero config={config} />

      {config.about ? (
        <About config={config} about={config.about} />
      ) : null}

      {config.stats?.length ? (
        <Stats
          stats={config.stats}
          heading={config.sectionTitles?.stats?.title}
          text={config.sectionTitles?.stats?.text}
        />
      ) : null}

      <Services config={config} limit={6} />

      {config.projects?.length ? (
        <Projects config={config} projects={config.projects} limit={3} />
      ) : null}

      {config.process?.length ? (
        <Process config={config} steps={config.process} />
      ) : null}

      {config.benefits?.length ? (
        <Benefits config={config} benefits={config.benefits} />
      ) : null}

      {config.cta ? <Cta config={config} cta={config.cta} /> : null}
    </ShkLayout>
  );
}
