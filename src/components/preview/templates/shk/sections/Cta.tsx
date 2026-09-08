import { telHref } from "@/lib/previews/core/links";
import { previewPath } from "@/components/preview/templates/shk/navigation";
import type { PreviewConfig, PreviewCtaBlock } from "@/lib/previews/core/types";
import PreviewButton from "@/components/preview/core/ui/PreviewButton";
import PreviewContainer from "@/components/preview/core/ui/PreviewContainer";

type PreviewCtaProps = {
  config: PreviewConfig;
  cta: PreviewCtaBlock;
};

export default function PreviewCta({ config, cta }: PreviewCtaProps) {
  return (
    <div className="pb-16 md:pb-24">
      <PreviewContainer>
        <div className="relative overflow-hidden rounded-[2rem] bg-[var(--preview-primary)] px-7 py-14 text-center text-[var(--preview-on-primary)] sm:px-14">
          {/* Dezente Farbflächen, damit die Fläche nicht flach wirkt. */}
          <span
            className="pointer-events-none absolute -top-16 -left-10 h-56 w-56 rounded-full bg-[var(--preview-on-primary)] opacity-10 blur-2xl"
            aria-hidden
          />
          <span
            className="pointer-events-none absolute -right-10 -bottom-20 h-64 w-64 rounded-full bg-[var(--preview-on-primary)] opacity-10 blur-2xl"
            aria-hidden
          />

          <div className="relative mx-auto max-w-2xl">
            <h2 className="text-3xl font-extrabold tracking-tight text-balance sm:text-4xl md:text-[2.75rem] md:leading-[1.1]">
              {cta.heading}
            </h2>

            {cta.text ? (
              <p className="mt-4 leading-relaxed opacity-90">{cta.text}</p>
            ) : null}

            <div className="mt-8 flex flex-wrap justify-center gap-3">
              <PreviewButton
                href={
                  cta.primaryCta?.href ?? previewPath(config.slug, "contact")
                }
                variant="secondary"
                size="lg"
              >
                {cta.primaryCta?.label ?? "Angebot anfordern"}
              </PreviewButton>

              {cta.secondaryCta ? (
                <PreviewButton
                  href={cta.secondaryCta.href ?? telHref(config.contact.phone)}
                  variant="onPrimary"
                  size="lg"
                  icon="phone"
                >
                  {cta.secondaryCta.label}
                </PreviewButton>
              ) : null}
            </div>
          </div>
        </div>
      </PreviewContainer>
    </div>
  );
}
