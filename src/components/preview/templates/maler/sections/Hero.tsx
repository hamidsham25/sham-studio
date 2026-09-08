import { previewPath } from "@/components/preview/templates/maler/navigation";
import { TRADE_ICON } from "@/lib/previews/core/trade";
import type { PreviewConfig } from "@/lib/previews/core/types";
import PreviewButton from "@/components/preview/core/ui/PreviewButton";
import PreviewContainer from "@/components/preview/core/ui/PreviewContainer";
import PreviewEyebrow from "@/components/preview/core/ui/PreviewEyebrow";
import PreviewImageFrame from "@/components/preview/core/ui/PreviewImageFrame";
import PreviewPaintBackdrop from "@/components/preview/core/ui/PreviewPaintBackdrop";
import PreviewStars from "@/components/preview/core/ui/PreviewStars";

type MalerHeroProps = {
  config: PreviewConfig;
};

/** Maler-Hero: zweispaltig mit Farbklecks-Hintergrund (Colorix-Referenz). */
export default function MalerHero({ config }: MalerHeroProps) {
  const { hero } = config;
  const headline = hero?.headline ?? config.tagline;
  const thumbnails = hero?.thumbnails?.slice(0, 3) ?? [];

  return (
    <section className="relative isolate overflow-hidden bg-[var(--preview-tint)]">
      <PreviewPaintBackdrop />

      <PreviewContainer className="relative">
        <div className="grid items-center gap-12 py-14 md:py-20 lg:grid-cols-[1.05fr_0.95fr] lg:gap-16">
          <div>
            {hero?.eyebrow ? <PreviewEyebrow>{hero.eyebrow}</PreviewEyebrow> : null}

            <h1 className="mt-5 text-4xl font-extrabold tracking-tight text-balance sm:text-5xl lg:text-[3.75rem] lg:leading-[1.03]">
              {headline}
            </h1>

            {hero?.subline ? (
              <p className="mt-6 max-w-xl text-base leading-relaxed text-[var(--preview-muted)] sm:text-lg">
                {hero.subline}
              </p>
            ) : null}

            <div className="mt-8 flex flex-wrap items-center gap-3">
              <PreviewButton
                href={
                  hero?.primaryCta?.href ?? previewPath(config.slug, "contact")
                }
                size="lg"
              >
                {hero?.primaryCta?.label ?? "Kostenloses Angebot"}
              </PreviewButton>
              <PreviewButton
                href={
                  hero?.secondaryCta?.href ??
                  previewPath(config.slug, "services")
                }
                variant="secondary"
                size="lg"
              >
                {hero?.secondaryCta?.label ?? "Leistungen ansehen"}
              </PreviewButton>
            </div>

            {hero?.trust ? (
              <div className="mt-10 flex items-center gap-3">
                {hero.trust.rating ? (
                  <PreviewStars rating={hero.trust.rating} />
                ) : null}
                <p className="text-sm font-semibold">{hero.trust.text}</p>
              </div>
            ) : null}
          </div>

          <div className="relative">
            <PreviewImageFrame
              image={hero?.image}
              placeholderIcon={TRADE_ICON[config.trade]}
              className="aspect-4/5 w-full sm:aspect-3/2 lg:aspect-4/5"
            />

            {thumbnails.length > 0 ? (
              <div className="mt-4 grid grid-cols-3 gap-3 lg:absolute lg:right-5 lg:bottom-5 lg:mt-0 lg:w-[62%]">
                {thumbnails.map((thumbnail) => (
                  <PreviewImageFrame
                    key={thumbnail.src}
                    image={thumbnail}
                    rounded="rounded-xl"
                    className="aspect-square ring-2 ring-[var(--preview-background)]"
                  />
                ))}
              </div>
            ) : null}
          </div>
        </div>
      </PreviewContainer>
    </section>
  );
}
