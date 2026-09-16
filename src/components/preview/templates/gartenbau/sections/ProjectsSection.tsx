import Image from "next/image";
import Link from "next/link";
import { getGartenbauContent } from "../content";
import { previewPath } from "../navigation";
import { Section } from "../layout/Section";
import { Heading } from "../ui/Heading";
import { ScrollReveal } from "../ui/ScrollReveal";

type ProjectsSectionProps = {
  slug: string;
};

export function ProjectsSection({ slug }: ProjectsSectionProps) {
  const projects = getGartenbauContent(slug).projects;
  const [featured, ...rest] = projects.items;

  return (
    <Section className="bg-surface">
      <ScrollReveal className="mx-auto max-w-2xl text-center">
        <Heading as="h2" className="text-3xl sm:text-4xl lg:text-5xl">
          {projects.headingPrimary}{" "}
          <span className="text-muted">{projects.headingAccent}</span>
        </Heading>
        <p className="mt-4 font-body text-base leading-relaxed text-muted">
          {projects.subline}
        </p>
      </ScrollReveal>

      <div className="mt-14 grid grid-cols-2 gap-4 lg:grid-cols-12 lg:gap-5">
        <ScrollReveal className="col-span-2 lg:col-span-7 lg:row-span-2">
          <div className="group relative aspect-[4/3] overflow-hidden rounded-3xl lg:aspect-auto lg:h-full lg:min-h-[480px]">
            <Image
              src={featured.src}
              alt={featured.alt}
              fill
              sizes="(max-width: 1024px) 100vw, 58vw"
              className="object-cover transition-transform duration-300 ease-out group-hover:scale-[1.03]"
            />
          </div>
        </ScrollReveal>

        {rest.slice(0, 2).map((project, index) => (
          <ScrollReveal
            key={project.src}
            delay={0.08 + index * 0.06}
            className="col-span-1 lg:col-span-5"
          >
            <div className="group relative aspect-[4/3] overflow-hidden rounded-3xl lg:aspect-auto lg:h-[232px]">
              <Image
                src={project.src}
                alt={project.alt}
                fill
                sizes="(max-width: 1024px) 50vw, 42vw"
                className="object-cover transition-transform duration-300 ease-out group-hover:scale-[1.03]"
              />
            </div>
          </ScrollReveal>
        ))}

        {rest.slice(2).map((project, index) => (
          <ScrollReveal
            key={project.src}
            delay={0.16 + index * 0.06}
            className="col-span-1 lg:col-span-6"
          >
            <div className="group relative aspect-[4/3] overflow-hidden rounded-3xl lg:aspect-auto lg:h-[220px]">
              <Image
                src={project.src}
                alt={project.alt}
                fill
                sizes="(max-width: 1024px) 50vw, 50vw"
                className="object-cover transition-transform duration-300 ease-out group-hover:scale-[1.03]"
              />
            </div>
          </ScrollReveal>
        ))}
      </div>

      <ScrollReveal className="mt-14 text-center">
        <Link
          href={previewPath(slug, "projects")}
          className="inline-flex items-center justify-center rounded-full border border-forest/20 px-8 py-3.5 font-heading text-sm font-semibold uppercase tracking-wide text-forest transition-colors duration-200 hover:border-forest hover:bg-forest hover:text-white"
        >
          Alle Projekte ansehen
        </Link>
      </ScrollReveal>
    </Section>
  );
}
