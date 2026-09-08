import { previewPath } from "@/components/preview/templates/maler/navigation";
import { TRADE_ICON } from "@/lib/previews/core/trade";
import type { PreviewAbout as PreviewAboutData, PreviewConfig } from "@/lib/previews/core/types";
import PreviewButton from "@/components/preview/core/ui/PreviewButton";
import PreviewEyebrow from "@/components/preview/core/ui/PreviewEyebrow";
import PreviewIcon from "@/components/preview/core/ui/PreviewIcon";
import PreviewImageFrame from "@/components/preview/core/ui/PreviewImageFrame";
import PreviewSection from "@/components/preview/core/ui/PreviewSection";

type PreviewAboutProps = {
  config: PreviewConfig;
  about: PreviewAboutData;
  /** Auf der Startseite mit Button, auf der Unterseite ohne. */
  withCta?: boolean;
};

export default function PreviewAbout({
  config,
  about,
  withCta = true,
}: PreviewAboutProps) {
  return (
    <PreviewSection id="ueber-uns">
      <div className="grid items-center gap-12 lg:grid-cols-2 lg:gap-16">
        <PreviewImageFrame
          image={about.image}
          placeholderIcon={TRADE_ICON[config.trade]}
          className="aspect-4/3 w-full lg:aspect-square"
        />

        <div>
          {about.eyebrow ? <PreviewEyebrow>{about.eyebrow}</PreviewEyebrow> : null}

          <h2 className="mt-4 text-3xl font-extrabold tracking-tight text-balance sm:text-4xl">
            {about.heading}
          </h2>

          <p className="mt-5 leading-relaxed text-[var(--preview-muted)]">
            {about.text}
          </p>

          {about.points?.length ? (
            <ul className="mt-7 grid gap-3 sm:grid-cols-2">
              {about.points.map((point) => (
                <li key={point} className="flex items-start gap-2.5 text-sm">
                  <span className="mt-0.5 flex h-5 w-5 shrink-0 items-center justify-center rounded-full bg-[var(--preview-tint-strong)] text-[var(--preview-primary)]">
                    <PreviewIcon name="check" className="h-3 w-3" />
                  </span>
                  <span className="font-medium">{point}</span>
                </li>
              ))}
            </ul>
          ) : null}

          <div className="mt-8 flex flex-wrap items-center gap-6">
            {withCta ? (
              <PreviewButton href={previewPath(config.slug, "about")}>
                Mehr über uns
              </PreviewButton>
            ) : null}

            {about.signature ? (
              <div className="border-l-2 border-[var(--preview-primary)] pl-4">
                <p className="font-bold">{about.signature.name}</p>
                <p className="text-sm text-[var(--preview-muted)]">
                  {about.signature.role}
                </p>
              </div>
            ) : null}
          </div>
        </div>
      </div>
    </PreviewSection>
  );
}
