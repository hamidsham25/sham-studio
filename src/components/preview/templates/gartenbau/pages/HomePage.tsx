import type { PreviewConfig } from "@/lib/previews/core/types";
import GartenbauLayout from "../layout/Layout";
import { AboutTeaserSection } from "../sections/AboutTeaserSection";
import { ContactCtaSection } from "../sections/ContactCtaSection";
import { Hero } from "../sections/Hero";
import { ProcessSection } from "../sections/ProcessSection";
import { ProjectsSection } from "../sections/ProjectsSection";
import { ServicesSection } from "../sections/ServicesSection";
import { WhyUsSection } from "../sections/WhyUsSection";

type Props = { config: PreviewConfig };

export default function GartenbauHomePage({ config }: Props) {
  return (
    <GartenbauLayout config={config} activePage="home">
      <Hero slug={config.slug} />
      <AboutTeaserSection slug={config.slug} />
      <WhyUsSection slug={config.slug} />
      <ServicesSection slug={config.slug} />
      <ProcessSection slug={config.slug} />
      <ProjectsSection slug={config.slug} />
      <ContactCtaSection slug={config.slug} />
    </GartenbauLayout>
  );
}
