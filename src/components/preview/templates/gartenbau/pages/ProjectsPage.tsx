import type { PreviewConfig } from "@/lib/previews/core/types";
import GartenbauSubPage from "./SubPage";

type Props = { config: PreviewConfig };

export default function GartenbauProjectsPage({ config }: Props) {
  return (
    <GartenbauSubPage
      config={config}
      activePage="projects"
      title="Projekte"
    />
  );
}
