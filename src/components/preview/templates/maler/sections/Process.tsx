import type { PreviewConfig, PreviewProcessStep } from "@/lib/previews/core/types";
import PreviewIcon from "@/components/preview/core/ui/PreviewIcon";
import PreviewSection from "@/components/preview/core/ui/PreviewSection";

type PreviewProcessProps = {
  config: PreviewConfig;
  steps: PreviewProcessStep[];
};

const STEP_ICONS = ["phone", "euro", "clock", "check"] as const;

/** Ablauf: eckige Step-Karten mit Doppelrahmen (Referenz-Struktur). */
export default function PreviewProcess({ config, steps }: PreviewProcessProps) {
  const titles = config.sectionTitles?.process;

  return (
    <PreviewSection id="ablauf" tone="default">
      <div className="max-w-2xl">
        <span className="inline-block bg-[var(--preview-primary)] px-3 py-1.5 font-mono text-[0.7rem] font-semibold uppercase tracking-[0.12em] text-[var(--preview-on-primary)]">
          {titles?.eyebrow ?? "Ablauf"}
        </span>
        <h2 className="mt-5 text-3xl font-extrabold tracking-tight text-balance text-[var(--preview-foreground)] sm:text-4xl md:text-[2.75rem] md:leading-[1.1]">
          {titles?.title ?? "So läuft Ihr Auftrag ab"}
        </h2>
        {titles?.text ? (
          <p className="mt-4 text-base leading-relaxed text-[var(--preview-muted)]">
            {titles.text}
          </p>
        ) : null}
      </div>

      <ol
        className={`mt-12 grid gap-6 sm:grid-cols-2 ${
          steps.length === 3 ? "lg:grid-cols-3" : "lg:grid-cols-4"
        }`}
      >
        {steps.map((step, index) => {
          const icon =
            step.icon ?? STEP_ICONS[index % STEP_ICONS.length] ?? "check";

          return (
            <li
              key={step.title}
              className="flex h-full flex-col border border-[var(--preview-primary)] bg-[var(--preview-background)] p-6 sm:p-7"
            >
              <p className="font-mono text-xs font-semibold uppercase tracking-[0.14em] text-[var(--preview-primary)]">
                <span aria-hidden>→ </span>
                Schritt {String(index + 1).padStart(2, "0")}
              </p>

              <span className="mt-5 flex h-9 w-9 items-center justify-center bg-[var(--preview-primary)] text-[var(--preview-on-primary)]">
                <PreviewIcon name={icon} className="h-4 w-4" />
              </span>

              <h3 className="mt-5 text-base font-bold uppercase tracking-wide text-[var(--preview-primary)] sm:text-[1.05rem]">
                {step.title}
              </h3>
              <p className="mt-3 text-sm leading-relaxed text-[var(--preview-muted)]">
                {step.description}
              </p>
            </li>
          );
        })}
      </ol>
    </PreviewSection>
  );
}
