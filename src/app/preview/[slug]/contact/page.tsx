import type { Metadata } from "next";
import { notFound } from "next/navigation";
import { getPreviewConfig, getPreviewTemplate } from "@/lib/previews";

type PreviewContactPageProps = {
  params: Promise<{ slug: string }>;
};

export async function generateMetadata({
  params,
}: PreviewContactPageProps): Promise<Metadata> {
  const { slug } = await params;
  const config = getPreviewConfig(slug);

  return {
    title: {
      absolute: config ? `Kontakt – ${config.businessName}` : "Entwurf",
    },
  };
}

export default async function PreviewContactPage({
  params,
}: PreviewContactPageProps) {
  const { slug } = await params;
  const config = getPreviewConfig(slug);

  if (!config) {
    notFound();
  }

  const ContactPage = getPreviewTemplate(config.trade).pages.contact;
  return <ContactPage config={config} />;
}
