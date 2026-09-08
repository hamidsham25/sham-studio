import { previewPath } from "@/components/preview/templates/maler/navigation";
import { TRADE_ICON } from "@/lib/previews/core/trade";
import type { PreviewConfig } from "@/lib/previews/core/types";
import PreviewButton from "@/components/preview/core/ui/PreviewButton";
import PreviewIcon from "@/components/preview/core/ui/PreviewIcon";
import PreviewSection from "@/components/preview/core/ui/PreviewSection";
import PreviewSectionHeading from "@/components/preview/core/ui/PreviewSectionHeading";

type MalerServicesProps = {
  config: PreviewConfig;
  limit?: number;
};

/** Maler-Leistungen: Icon-Karten auf hellem Hintergrund. */
export default function MalerServices({ config, limit }: MalerServicesProps) {
  const titles = config.sectionTitles?.services;
  const services = limit ? config.services.slice(0, limit) : config.services;
  const hasMore = services.length < config.services.length;

  return (
    <PreviewSection id="leistungen" tone="surface">
      <PreviewSectionHeading
        eyebrow={titles?.eyebrow ?? "Leistungen"}
        title={titles?.title ?? "Unsere Leistungen"}
        text={titles?.text}
      />

      <div className="mt-12 grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
        {services.map((service) => (
          <article
            key={service.title}
            className="flex flex-col rounded-3xl bg-[var(--preview-background)] p-7 ring-1 ring-[var(--preview-border)] transition-colors hover:ring-[var(--preview-primary-border)]"
          >
            <span className="flex h-12 w-12 items-center justify-center rounded-2xl bg-[var(--preview-tint-strong)] text-[var(--preview-primary)]">
              <PreviewIcon
                name={service.icon ?? TRADE_ICON.maler}
                className="h-6 w-6"
              />
            </span>

            <h3 className="mt-5 text-xl font-bold tracking-tight">
              {service.title}
            </h3>
            <p className="mt-2.5 text-sm leading-relaxed text-[var(--preview-muted)]">
              {service.description}
            </p>

            {service.bullets?.length ? (
              <ul className="mt-5 space-y-2 border-t border-[var(--preview-border)] pt-5">
                {service.bullets.map((bullet) => (
                  <li key={bullet} className="flex items-center gap-2 text-sm">
                    <PreviewIcon
                      name="check"
                      className="h-3.5 w-3.5 shrink-0 text-[var(--preview-primary)]"
                    />
                    {bullet}
                  </li>
                ))}
              </ul>
            ) : null}
          </article>
        ))}
      </div>

      {hasMore ? (
        <div className="mt-10 text-center">
          <PreviewButton
            href={previewPath(config.slug, "services")}
            variant="outline"
            size="lg"
            icon="arrowRight"
          >
            Alle Leistungen ansehen
          </PreviewButton>
        </div>
      ) : null}
    </PreviewSection>
  );
}
