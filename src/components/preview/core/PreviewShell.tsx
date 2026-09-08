import type { ReactNode } from "react";
import { previewCssVars } from "@/lib/previews/core/theme";
import type { PreviewConfig } from "@/lib/previews/core/types";

type PreviewShellProps = {
  config: PreviewConfig;
  children: ReactNode;
};

/**
 * Theming-Wrapper für alle Previews: setzt die --preview-* Variablen des Kunden.
 * Alle Bausteine in src/components/preview/ dürfen ausschließlich diese
 * Variablen nutzen – niemals feste Farben oder die Sham-Studio-Variablen
 * (--accent, --background ...).
 */
export default function PreviewShell({ config, children }: PreviewShellProps) {
  return (
    <div
      className="preview-root"
      style={previewCssVars(config.colors)}
      data-trade={config.trade}
    >
      {children}
    </div>
  );
}
