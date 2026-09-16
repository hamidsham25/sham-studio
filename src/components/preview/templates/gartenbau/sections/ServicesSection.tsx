import Image from "next/image";
import Link from "next/link";
import { ArrowRight } from "lucide-react";
import { getGartenbauContent } from "../content";
import { previewPath } from "../navigation";
import { Section } from "../layout/Section";
import { Heading } from "../ui/Heading";
import { ScrollReveal } from "../ui/ScrollReveal";

type ServicesSectionProps = {
  slug: string;
};

export function ServicesSection({ slug }: ServicesSectionProps) {
  const content = getGartenbauContent(slug);

  return (
    <Section className="bg-white">
      <ScrollReveal className="mx-auto max-w-2xl text-center">
        <Heading as="h2" className="text-3xl sm:text-4xl lg:text-5xl">
          Unsere <span className="text-muted">Leistungen</span>
        </Heading>
        <p className="mt-4 font-body text-base leading-relaxed text-muted">
          {content.servicesIntro}
        </p>
      </ScrollReveal>

      <div className="mt-14 grid gap-6 sm:grid-cols-2 lg:grid-cols-3 lg:gap-8">
        {content.services.map((service, index) => (
          <ScrollReveal key={service.slug} delay={index * 0.06}>
            <Link href={previewPath(slug, "services")} className="group block">
              <div className="relative aspect-[4/5] overflow-hidden rounded-3xl">
                <Image
                  src={service.image.src}
                  alt={service.image.alt}
                  fill
                  sizes="(max-width: 640px) 100vw, (max-width: 1024px) 50vw, 33vw"
                  className="object-cover transition-transform duration-500 ease-out group-hover:scale-[1.04]"
                />
                <span className="absolute top-4 right-4 flex h-9 w-9 items-center justify-center rounded-full bg-white text-forest shadow-[0_2px_12px_rgba(0,0,0,0.08)] transition-colors duration-200 group-hover:bg-action group-hover:text-white">
                  <ArrowRight
                    size={16}
                    strokeWidth={2}
                    className="transition-transform duration-500 ease-out group-hover:-rotate-45"
                  />
                </span>
              </div>

              <h3 className="heading mt-6 text-base text-forest sm:text-lg">
                {service.title}
              </h3>
              <p className="mt-2.5 font-body text-sm leading-relaxed text-muted">
                {service.description}
              </p>
            </Link>
          </ScrollReveal>
        ))}
      </div>

      <ScrollReveal className="mt-14 text-center">
        <Link
          href={previewPath(slug, "services")}
          className="inline-flex items-center justify-center rounded-full border border-forest/20 px-8 py-3.5 font-heading text-sm font-semibold uppercase tracking-wide text-forest transition-colors duration-200 hover:border-forest hover:bg-forest hover:text-white"
        >
          Alle Leistungen ansehen
        </Link>
      </ScrollReveal>
    </Section>
  );
}
