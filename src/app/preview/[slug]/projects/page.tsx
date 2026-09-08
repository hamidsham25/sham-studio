import type { Metadata } from "next";
import { notFound } from "next/navigation";
import { getPreviewConfig, getPreviewTemplate } from "@/lib/previews";

type PreviewProjectsPageProps = {
  params: Promise<{ slug: string }>;
};

export async function generateMetadata({
  params,
}: PreviewProjectsPageProps): Promise<Metadata> {
  const { slug } = await params;
  const config = getPreviewConfig(slug);

  return {
    title: {
      absolute: config ? `Projekte – ${config.businessName}` : "Entwurf",
    },
  };
}

export default async function PreviewProjectsPage({
  params,
}: PreviewProjectsPageProps) {
  const { slug } = await params;
  const config = getPreviewConfig(slug);

  if (!config) {
    notFound();
  }

  const ProjectsPage = getPreviewTemplate(config.trade).pages.projects;
  return <ProjectsPage config={config} />;
}
