import type { ReactNode } from "react";
import { Familjen_Grotesk, Inter } from "next/font/google";
import PreviewShell from "@/components/preview/core/PreviewShell";
import type { PageKey } from "@/components/preview/templates/gartenbau/navigation";
import type { PreviewConfig } from "@/lib/previews/core/types";
import "../gartenbau.css";
import { Footer } from "./Footer";
import { Header } from "./Header";

const fontHeading = Familjen_Grotesk({
  variable: "--gb-font-heading",
  subsets: ["latin"],
  display: "swap",
});

const fontBody = Inter({
  variable: "--gb-font-body",
  subsets: ["latin"],
  display: "swap",
});

type GartenbauLayoutProps = {
  config: PreviewConfig;
  activePage: PageKey;
  children: ReactNode;
};

/** Gartenbau-Template: eigenes Design, Fonts und Tokens nur hier gescope. */
export default function GartenbauLayout({
  config,
  children,
}: GartenbauLayoutProps) {
  return (
    <div
      className={`${fontHeading.variable} ${fontBody.variable} flex min-h-full flex-col antialiased`}
    >
      <PreviewShell config={config}>
        <Header slug={config.slug} />
        <main className="flex-1">{children}</main>
        <Footer slug={config.slug} />
      </PreviewShell>
    </div>
  );
}
