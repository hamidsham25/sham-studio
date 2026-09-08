import { TRADE_ICON } from "@/lib/previews/core/trade";
import type { PreviewConfig } from "@/lib/previews/core/types";
import PreviewIcon from "@/components/preview/core/ui/PreviewIcon";
import PreviewImageFrame from "@/components/preview/core/ui/PreviewImageFrame";
import PreviewSection from "@/components/preview/core/ui/PreviewSection";

type PreviewServicesDetailedProps = {
  config: PreviewConfig;
};

/** Leistungen als abwechselnde Bild-/Text-Reihen – für die Unterseite. */
export default function PreviewServicesDetailed({
  config,
}: PreviewServicesDetailedProps) {
  return (
    <PreviewSection>
      <div className="space-y-16 md:space-y-24">
        {config.services.map((service, index) => {
          const isReversed = index % 2 === 1;

          return (
            <div
              key={service.title}
              className="grid items-center gap-10 lg:grid-cols-2 lg:gap-16"
            >
              <PreviewImageFrame
                image={service.image}
                placeholderIcon={service.icon ?? TRADE_ICON[config.trade]}
                className={`aspect-3/2 w-full ${isReversed ? "lg:order-2" : ""}`}
              />

              <div className={isReversed ? "lg:order-1" : ""}>
                <span className="inline-flex items-center gap-2 rounded-full bg-[var(--preview-tint-strong)] px-3 py-1 text-xs font-bold text-[var(--preview-primary)]">
                  {String(index + 1).padStart(2, "0")}
                </span>

                <h2 className="mt-4 text-2xl font-extrabold tracking-tight sm:text-3xl">
                  {service.title}
                </h2>
                <p className="mt-4 leading-relaxed text-[var(--preview-muted)]">
                  {service.description}
                </p>

                {service.bullets?.length ? (
                  <ul className="mt-6 grid gap-3 sm:grid-cols-2">
                    {service.bullets.map((bullet) => (
                      <li
                        key={bullet}
                        className="flex items-center gap-2.5 rounded-xl bg-[var(--preview-surface)] px-4 py-3 text-sm font-medium"
                      >
                        <PreviewIcon
                          name="check"
                          className="h-4 w-4 shrink-0 text-[var(--preview-primary)]"
                        />
                        {bullet}
                      </li>
                    ))}
                  </ul>
                ) : null}
              </div>
            </div>
          );
        })}
      </div>
    </PreviewSection>
  );
}
