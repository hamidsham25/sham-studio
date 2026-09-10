import type { PreviewConfig } from "@/lib/previews/core/types";
import MalerLayout from "../layout/Layout";
import Cta from "../sections/Cta";
import PageHero from "../sections/PageHero";
import Projects from "../sections/Projects";

type Props = { config: PreviewConfig };

export default function MalerProjectsPage({ config }: Props) {
  const intro = config.pageIntros?.projects;
  const projects = config.projects ?? [];

  return (
    <MalerLayout config={config} activePage="projects">
      <PageHero
        config={config}
        breadcrumb="Projekte"
        eyebrow="Projekte"
        title={intro?.title ?? "Unsere Projekte"}
        text={intro?.text}
        image={intro?.image}
      />

      {projects.length > 0 ? (
        <Projects config={config} projects={projects} showHeading={false} />
      ) : null}

      {config.cta ? <Cta config={config} cta={config.cta} /> : null}
    </MalerLayout>
  );
}
