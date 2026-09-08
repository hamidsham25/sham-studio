import type { ReactNode } from "react";
import type { PageKey } from "@/components/preview/templates/shk/navigation";
import type { PreviewConfig } from "@/lib/previews/core/types";
import PreviewShell from "@/components/preview/core/PreviewShell";
import Footer from "./Footer";
import Header from "./Header";
import TopBar from "./TopBar";

type ShkLayoutProps = {
  config: PreviewConfig;
  activePage: PageKey;
  children: ReactNode;
};

/** SHK-Template: Notdienst-Leiste + dunkle Navigation (HandGrid-Referenz). */
export default function ShkLayout({
  config,
  activePage,
  children,
}: ShkLayoutProps) {
  return (
    <PreviewShell config={config}>
      <TopBar config={config} />
      <Header config={config} activePage={activePage} />
      <main>{children}</main>
      <Footer config={config} />
    </PreviewShell>
  );
}
