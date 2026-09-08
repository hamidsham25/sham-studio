/**
 * Dekorative Farbkleckse im Hintergrund (Hero, CTA).
 * Rein visuell und komplett aus den --preview-* Tönen gemischt.
 */
export default function PreviewPaintBackdrop() {
  return (
    <div
      className="pointer-events-none absolute inset-0 overflow-hidden"
      aria-hidden
    >
      <div className="preview-blob -left-24 -top-28 h-80 w-80 bg-[var(--preview-tint-strong)]" />
      <div className="preview-blob -right-16 top-10 h-96 w-96 bg-[var(--preview-tint)]" />
      <div className="preview-blob bottom-[-6rem] left-1/3 h-72 w-72 bg-[var(--preview-tint-strong)] opacity-70" />
    </div>
  );
}
