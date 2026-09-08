import type { Metadata } from "next";
import { notFound } from "next/navigation";
import { getPreviewConfig, getPreviewTemplate } from "@/lib/previews";

type PreviewAboutPageProps = {
  params: Promise<{ slug: string }>;
};

export async function generateMetadata({
  params,
}: PreviewAboutPageProps): Promise<Metadata> {
  const { slug } = await params;
  const config = getPreviewConfig(slug);

  return {
    title: {
      absolute: config ? `Über uns – ${config.businessName}` : "Entwurf",
    },
  };
}

export default async function PreviewAboutPage({
  params,
}: PreviewAboutPageProps) {
  const { slug } = await params;
  const config = getPreviewConfig(slug);

  if (!config) {
    notFound();
  }

  const AboutPage = getPreviewTemplate(config.trade).pages.about;
  return <AboutPage config={config} />;
}
