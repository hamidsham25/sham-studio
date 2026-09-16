import Image from "next/image";
import Link from "next/link";
import { getGartenbauContent } from "../content";
import { previewPath } from "../navigation";
import { Section } from "../layout/Section";
import { Heading } from "../ui/Heading";
import { ScrollReveal } from "../ui/ScrollReveal";

const imageFrameClass =
  "relative aspect-square w-full overflow-hidden rounded-3xl sm:rounded-[2rem]";

type AboutImageProps = {
  src: string;
  alt: string;
};

function AboutImage({ src, alt }: AboutImageProps) {
  return (
    <div className={imageFrameClass}>
      <Image
        src={src}
        alt={alt}
        fill
        sizes="(max-width: 768px) 85vw, 400px"
        className="object-cover"
      />
    </div>
  );
}

type AboutTeaserSectionProps = {
  slug: string;
};

export function AboutTeaserSection({ slug }: AboutTeaserSectionProps) {
  const about = getGartenbauContent(slug).aboutTeaser;
  const [portraitImage, landscapeImage] = about.images;

  return (
    <Section className="bg-white">
      <div className="mx-auto grid w-full max-w-5xl grid-cols-1 gap-8 md:grid-cols-2 md:gap-x-10 md:gap-y-8 lg:gap-x-14">
        <div className="flex flex-col gap-6 lg:gap-8">
          <ScrollReveal>
            <Heading as="h2" className="text-3xl sm:text-4xl lg:text-5xl">
              {about.heading.primary}{" "}
              <span className="text-muted">{about.heading.accent}</span>
              <br />
              {about.heading.secondary}
            </Heading>
          </ScrollReveal>

          <ScrollReveal delay={0.1} className="w-full">
            <AboutImage src={portraitImage.src} alt={portraitImage.alt} />
          </ScrollReveal>
        </div>

        <div className="flex flex-col gap-6 lg:gap-8">
          <ScrollReveal delay={0.06} className="w-full">
            <AboutImage src={landscapeImage.src} alt={landscapeImage.alt} />
          </ScrollReveal>

          <ScrollReveal delay={0.14} className="w-full">
            <div className="space-y-4">
              {about.body.map((paragraph) => (
                <p
                  key={paragraph}
                  className="font-body text-base leading-relaxed text-muted"
                >
                  {paragraph}
                </p>
              ))}
            </div>

            <Link
              href={previewPath(slug, "about")}
              className="mt-6 inline-block font-heading text-sm font-semibold uppercase tracking-wide text-action underline decoration-action decoration-2 underline-offset-[6px] transition-colors duration-200 hover:text-forest hover:decoration-forest"
            >
              {about.ctaLabel}
            </Link>
          </ScrollReveal>
        </div>
      </div>
    </Section>
  );
}
