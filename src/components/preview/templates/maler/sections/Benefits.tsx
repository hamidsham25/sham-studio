import type { PreviewBenefit, PreviewConfig } from "@/lib/previews/core/types";
import PreviewIcon from "@/components/preview/core/ui/PreviewIcon";
import PreviewSection from "@/components/preview/core/ui/PreviewSection";
import PreviewSectionHeading from "@/components/preview/core/ui/PreviewSectionHeading";

type PreviewBenefitsProps = {
  config: PreviewConfig;
  benefits: PreviewBenefit[];
};

export default function PreviewBenefits({
  config,
  benefits,
}: PreviewBenefitsProps) {
  const titles = config.sectionTitles?.benefits;

  return (
    <PreviewSection id="vorteile">
      <PreviewSectionHeading
        eyebrow={titles?.eyebrow ?? "Warum wir"}
        title={titles?.title ?? "Ihre Vorteile"}
        text={titles?.text}
      />

      <div className="mt-12 grid gap-x-8 gap-y-10 sm:grid-cols-2 lg:grid-cols-3">
        {benefits.map((benefit) => (
          <div key={benefit.title} className="flex gap-4">
            <span className="flex h-12 w-12 shrink-0 items-center justify-center rounded-2xl bg-[var(--preview-primary)] text-[var(--preview-on-primary)]">
              <PreviewIcon
                name={benefit.icon ?? "check"}
                className="h-6 w-6"
              />
            </span>
            <div>
              <h3 className="text-lg font-bold tracking-tight">
                {benefit.title}
              </h3>
              <p className="mt-1.5 text-sm leading-relaxed text-[var(--preview-muted)]">
                {benefit.description}
              </p>
            </div>
          </div>
        ))}
      </div>
    </PreviewSection>
  );
}
