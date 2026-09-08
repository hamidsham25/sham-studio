import type { CSSProperties } from "react";
import type { PreviewColors } from "./types";

/** CSSProperties erlaubt von Haus aus keine Custom Properties. */
type PreviewStyle = CSSProperties & Record<`--preview-${string}`, string>;

/**
 * Übersetzt die Kundenfarben in --preview-* Variablen.
 * Wird als inline style auf .preview-root gesetzt und überschreibt dort
 * die Defaults aus globals.css – damit färbt sich jede Preview automatisch um.
 *
 * Abgeleitete Werte (--preview-surface, --preview-border, --preview-tint …)
 * berechnet globals.css per color-mix aus diesen Basisfarben.
 */
export function previewCssVars(colors: PreviewColors): PreviewStyle {
  const vars: PreviewStyle = {
    "--preview-primary": colors.primary,
    "--preview-primary-hover": colors.primaryHover,
    "--preview-background": colors.background,
    "--preview-foreground": colors.foreground,
    "--preview-muted": colors.muted,
  };

  // Ohne Angabe bleibt der Default aus globals.css (#ffffff) aktiv.
  if (colors.onPrimary) {
    vars["--preview-on-primary"] = colors.onPrimary;
  }

  return vars;
}
