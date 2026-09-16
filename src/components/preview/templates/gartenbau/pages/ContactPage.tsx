import type { PreviewConfig } from "@/lib/previews/core/types";
import GartenbauSubPage from "./SubPage";

type Props = { config: PreviewConfig };

export default function GartenbauContactPage({ config }: Props) {
  return (
    <GartenbauSubPage config={config} activePage="contact" title="Kontakt" />
  );
}
