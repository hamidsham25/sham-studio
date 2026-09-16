import Link from "next/link";
import { Section } from "../layout/Section";
import { Heading } from "../ui/Heading";
import { ScrollReveal } from "../ui/ScrollReveal";

export type ClosingCtaContent = {
  heading: {
    line1: string;
    line2?: string;
    accent?: string;
  };
  body: string;
  ctaLabel: string;
  ctaHref: string;
  callLabel: string;
  phoneHref: string;
};

type CtaPillButtonProps = {
  href: string;
  children: string;
  isExternal?: boolean;
};

function CtaPillButton({ href, children, isExternal }: CtaPillButtonProps) {
  const className =
    "inline-flex items-center gap-4 rounded-full bg-ink py-2.5 pl-6 pr-2 font-heading text-sm font-semibold uppercase tracking-wide text-white transition-colors duration-200 hover:bg-forest sm:py-3 sm:pl-7 sm:pr-2.5 sm:text-base";

  const inner = (
    <>
      <span>{children}</span>
      <span
        aria-hidden
        className="flex h-9 w-9 shrink-0 items-center justify-center rounded-full bg-white/15 sm:h-10 sm:w-10"
      />
    </>
  );

  if (isExternal) {
    return (
      <a href={href} className={className}>
        {inner}
      </a>
    );
  }

  return (
    <Link href={href} className={className}>
      {inner}
    </Link>
  );
}

function CircleGradientPattern() {
  const rings = [
    { heightPercent: 130, color: "bg-white/[0.06]" },
    { heightPercent: 108, color: "bg-white/[0.12]" },
    { heightPercent: 88, color: "bg-surface/20" },
    { heightPercent: 70, color: "bg-surface/45" },
    { heightPercent: 52, color: "bg-white/75" },
    { heightPercent: 36, color: "bg-white" },
  ] as const;

  return (
    <div
      aria-hidden
      className="pointer-events-none absolute inset-0 overflow-hidden rounded-3xl sm:rounded-[2rem]"
    >
      <div className="absolute inset-y-0 right-0 w-px translate-x-1/2">
        {rings.map((ring) => (
          <div
            key={ring.heightPercent}
            className={`absolute top-1/2 left-0 aspect-square -translate-x-1/2 -translate-y-1/2 rounded-full ${ring.color}`}
            style={{ height: `${ring.heightPercent}%` }}
          />
        ))}
      </div>
    </div>
  );
}

type ClosingCtaSectionProps = {
  content: ClosingCtaContent;
  id?: string;
};

export function ClosingCtaSection({ content, id }: ClosingCtaSectionProps) {
  return (
    <Section className="bg-surface" id={id}>
      <ScrollReveal>
        <div className="relative overflow-hidden rounded-3xl bg-forest px-6 py-12 sm:rounded-[2rem] sm:px-10 sm:py-14 lg:px-14 lg:py-16">
          <CircleGradientPattern />

          <div className="relative z-10 max-w-xl">
            <Heading as="h2" className="text-3xl text-white sm:text-4xl lg:text-5xl">
              {content.heading.line1}
              {content.heading.line2 ? (
                <>
                  <br />
                  {content.heading.line2}
                  {content.heading.accent ? (
                    <span className="text-white/45"> {content.heading.accent}</span>
                  ) : null}
                </>
              ) : null}
            </Heading>

            <p className="mt-5 max-w-[50ch] font-body text-base leading-relaxed text-white/80 sm:mt-6 sm:text-lg">
              {content.body}
            </p>

            <div className="mt-8 flex flex-col gap-3 sm:mt-10 sm:flex-row sm:flex-wrap sm:gap-4">
              <CtaPillButton href={content.ctaHref}>{content.ctaLabel}</CtaPillButton>
              <CtaPillButton href={content.phoneHref} isExternal>
                {content.callLabel}
              </CtaPillButton>
            </div>
          </div>
        </div>
      </ScrollReveal>
    </Section>
  );
}
