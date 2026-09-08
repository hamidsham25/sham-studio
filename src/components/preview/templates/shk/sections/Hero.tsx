import { telHref } from "@/lib/previews/core/links";
import { previewPath } from "@/components/preview/templates/shk/navigation";
import { TRADE_ICON } from "@/lib/previews/core/trade";
import type { PreviewConfig } from "@/lib/previews/core/types";
import PreviewButton from "@/components/preview/core/ui/PreviewButton";
import PreviewContainer from "@/components/preview/core/ui/PreviewContainer";
import PreviewEyebrow from "@/components/preview/core/ui/PreviewEyebrow";
import PreviewIcon from "@/components/preview/core/ui/PreviewIcon";
import PreviewImageFrame from "@/components/preview/core/ui/PreviewImageFrame";
import PreviewStars from "@/components/preview/core/ui/PreviewStars";

type PreviewHeroImmersiveProps = {
  config: PreviewConfig;
};

/** Vollbild-Hero mit dunkler Überlagerung – angelehnt an HandGrid-Referenz. */
export default function PreviewHeroImmersive({ config }: PreviewHeroImmersiveProps) {
  const { hero } = config;
  const headline = hero?.headline ?? config.tagline;

  return (
    <section className="relative isolate min-h-[32rem] overflow-hidden sm:min-h-[36rem] lg:min-h-[42rem]">
      <div className="absolute inset-0">
        <PreviewImageFrame
          image={hero?.image}
          placeholderIcon={TRADE_ICON.shk}
          rounded="rounded-none"
          className="h-full w-full"
        />
        <div
          className="absolute inset-0 bg-linear-to-r from-[color-mix(in_oklab,var(--preview-foreground)_92%,transparent)] via-[color-mix(in_oklab,var(--preview-foreground)_78%,transparent)] to-[color-mix(in_oklab,var(--preview-foreground)_45%,transparent)]"
          aria-hidden
        />
      </div>

      <PreviewContainer className="relative flex min-h-[inherit] items-center py-16 md:py-24">
        <div className="max-w-2xl text-white">
          {hero?.eyebrow ? (
            <PreviewEyebrow className="text-white/80">{hero.eyebrow}</PreviewEyebrow>
          ) : null}

          <h1 className="mt-5 text-4xl font-extrabold tracking-tight text-balance sm:text-5xl lg:text-[3.75rem] lg:leading-[1.03]">
            {headline}
          </h1>

          {hero?.subline ? (
            <p className="mt-6 max-w-xl text-base leading-relaxed text-white/85 sm:text-lg">
              {hero.subline}
            </p>
          ) : null}

          <div className="mt-8 flex flex-wrap items-center gap-3">
            <PreviewButton
              href={
                hero?.primaryCta?.href ?? telHref(config.contact.phone)
              }
              size="lg"
              icon="phone"
            >
              {hero?.primaryCta?.label ?? `Anrufen: ${config.contact.phone}`}
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
            <div className="mt-10 flex flex-wrap items-center gap-3">
              {hero.trust.rating ? (
                <PreviewStars rating={hero.trust.rating} className="text-white" />
              ) : null}
              <p className="text-sm font-semibold text-white/90">{hero.trust.text}</p>
            </div>
          ) : null}

          {config.topBarMessage ? (
            <p className="mt-8 inline-flex items-center gap-2 rounded-full bg-white/10 px-4 py-2 text-sm font-medium text-white/90 ring-1 ring-white/20">
              <PreviewIcon name="shield" className="h-4 w-4 shrink-0" />
              {config.topBarMessage}
            </p>
          ) : null}
        </div>
      </PreviewContainer>
    </section>
  );
}
