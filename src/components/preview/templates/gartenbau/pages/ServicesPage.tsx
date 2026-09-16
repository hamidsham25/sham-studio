import type { PreviewConfig } from "@/lib/previews/core/types";
import GartenbauSubPage from "./SubPage";

type Props = { config: PreviewConfig };

export default function GartenbauServicesPage({ config }: Props) {
  return (
    <GartenbauSubPage
      config={config}
      activePage="services"
      title="Leistungen"
    />
  );
}
