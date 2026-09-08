import type { PreviewConfig, PreviewProcessStep } from "@/lib/previews/core/types";
import PreviewSection from "@/components/preview/core/ui/PreviewSection";
import PreviewSectionHeading from "@/components/preview/core/ui/PreviewSectionHeading";

type PreviewProcessProps = {
  config: PreviewConfig;
  steps: PreviewProcessStep[];
};

export default function PreviewProcess({ config, steps }: PreviewProcessProps) {
  const titles = config.sectionTitles?.process;

  return (
    <PreviewSection id="ablauf" tone="tint">
      <PreviewSectionHeading
        eyebrow={titles?.eyebrow ?? "Ablauf"}
        title={titles?.title ?? "So arbeiten wir"}
        text={titles?.text}
      />

      <ol
        className={`mt-12 grid gap-6 sm:grid-cols-2 ${
          steps.length === 3 ? "lg:grid-cols-3" : "lg:grid-cols-4"
        }`}
      >
        {steps.map((step, index) => (
          <li
            key={step.title}
            className="relative rounded-3xl bg-[var(--preview-background)] p-7 ring-1 ring-[var(--preview-border)]"
          >
            {/* Verbindungslinie zwischen den Schritten (nur Desktop). */}
            {index < steps.length - 1 ? (
              <span
                className="absolute top-12 -right-3 hidden h-px w-6 bg-[var(--preview-primary-border)] lg:block"
                aria-hidden
              />
            ) : null}

            <span className="flex h-11 w-11 items-center justify-center rounded-full bg-[var(--preview-primary)] text-sm font-bold text-[var(--preview-on-primary)]">
              {String(index + 1).padStart(2, "0")}
            </span>

            <h3 className="mt-5 text-lg font-bold tracking-tight">
              {step.title}
            </h3>
            <p className="mt-2 text-sm leading-relaxed text-[var(--preview-muted)]">
              {step.description}
            </p>
          </li>
        ))}
      </ol>
    </PreviewSection>
  );
}
