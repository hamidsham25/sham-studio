import type { PreviewTemplate } from "@/lib/previews/core/templates";
import AboutPage from "./pages/AboutPage";
import ContactPage from "./pages/ContactPage";
import HomePage from "./pages/HomePage";
import ProjectsPage from "./pages/ProjectsPage";
import ServicesPage from "./pages/ServicesPage";

export const shkTemplate: PreviewTemplate = {
  trade: "shk",
  pages: {
    home: HomePage,
    about: AboutPage,
    services: ServicesPage,
    projects: ProjectsPage,
    contact: ContactPage,
  },
};
