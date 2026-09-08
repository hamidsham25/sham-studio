import type { Metadata } from "next";
import { notFound } from "next/navigation";
import { getPreviewConfig, getPreviewTemplate } from "@/lib/previews";

type PreviewServicesPageProps = {
  params: Promise<{ slug: string }>;
};

export async function generateMetadata({
  params,
}: PreviewServicesPageProps): Promise<Metadata> {
  const { slug } = await params;
  const config = getPreviewConfig(slug);

  return {
    title: {
      absolute: config ? `Leistungen – ${config.businessName}` : "Entwurf",
    },
  };
}

export default async function PreviewServicesPage({
  params,
}: PreviewServicesPageProps) {
  const { slug } = await params;
  const config = getPreviewConfig(slug);

  if (!config) {
    notFound();
  }

  const ServicesPage = getPreviewTemplate(config.trade).pages.services;
  return <ServicesPage config={config} />;
}
