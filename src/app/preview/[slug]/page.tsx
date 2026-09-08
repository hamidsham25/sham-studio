import type { Metadata } from "next";
import { notFound } from "next/navigation";
import { getPreviewConfig, getPreviewTemplate } from "@/lib/previews";

type PreviewPageProps = {
  params: Promise<{ slug: string }>;
};

export async function generateMetadata({
  params,
}: PreviewPageProps): Promise<Metadata> {
  const { slug } = await params;
  const config = getPreviewConfig(slug);

  return {
    title: {
      absolute: config
        ? `${config.businessName} – ${config.tagline}`
        : "Entwurf",
    },
  };
}

export default async function PreviewHomePage({ params }: PreviewPageProps) {
  const { slug } = await params;
  const config = getPreviewConfig(slug);

  if (!config) {
    notFound();
  }

  const HomePage = getPreviewTemplate(config.trade).pages.home;
  return <HomePage config={config} />;
}
