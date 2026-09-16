import type { PreviewConfig } from "@/lib/previews/core/types";
import GartenbauSubPage from "./SubPage";

type Props = { config: PreviewConfig };

export default function GartenbauAboutPage({ config }: Props) {
  return (
    <GartenbauSubPage config={config} activePage="about" title="Über uns" />
  );
}
