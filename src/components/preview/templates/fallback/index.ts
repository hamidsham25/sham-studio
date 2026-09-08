import type { PreviewTemplate } from "@/lib/previews/core/templates";
import FallbackPage from "./pages/FallbackPage";

/** Platzhalter-Template für Branchen ohne eigenes Design (demo, pv, sanierung). */
export const fallbackTemplate: PreviewTemplate = {
  trade: "pv",
  pages: {
    home: FallbackPage,
    about: FallbackPage,
    services: FallbackPage,
    projects: FallbackPage,
    contact: FallbackPage,
  },
};
