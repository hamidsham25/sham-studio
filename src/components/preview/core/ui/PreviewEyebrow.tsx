type PreviewEyebrowProps = {
  children: string;
  className?: string;
};

/** Kleines Label über einer Überschrift, in der Akzentfarbe des Kunden. */
export default function PreviewEyebrow({
  children,
  className = "",
}: PreviewEyebrowProps) {
  return (
    <span
      className={`inline-flex items-center gap-2 rounded-full bg-[var(--preview-tint-strong)] px-3.5 py-1.5 text-xs font-semibold uppercase tracking-[0.14em] text-[var(--preview-primary)] ${className}`}
    >
      {children}
    </span>
  );
}
