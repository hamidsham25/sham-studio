import type { PreviewConfig } from "@/lib/previews/core/types";
import ShkLayout from "../layout/Layout";
import Cta from "../sections/Cta";
import PageHero from "../sections/PageHero";
import Projects from "../sections/Projects";

type Props = { config: PreviewConfig };

export default function ShkProjectsPage({ config }: Props) {
  const intro = config.pageIntros?.projects;
  const projects = config.projects ?? [];

  return (
    <ShkLayout config={config} activePage="projects">
      <PageHero
        config={config}
        breadcrumb="Referenzen"
        eyebrow="Referenzen"
        title={intro?.title ?? "Unsere Referenzen"}
        text={intro?.text}
        dark
      />

      {projects.length > 0 ? (
        <Projects config={config} projects={projects} showHeading={false} />
      ) : null}

      {config.cta ? <Cta config={config} cta={config.cta} /> : null}
    </ShkLayout>
  );
}
