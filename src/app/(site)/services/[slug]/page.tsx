import { allServices, getServiceBySlug } from "@/content/services";
import { notFound } from "next/navigation";
import { ServiceDetailTemplate } from "@/modules/services/service-detail-template";
import type { Metadata } from "next";

export function generateStaticParams() {
  return allServices.map((service) => ({
    slug: service.slug,
  }));
}

interface ServicePageProps {
  params: Promise<{ slug: string }>;
}

export async function generateMetadata({
  params,
}: ServicePageProps): Promise<Metadata> {
  const { slug } = await params;
  const service = getServiceBySlug(slug);

  if (!service) {
    return { title: "Service Not Found" };
  }

  return {
    title: service.metaTitle,
    description: service.metaDescription,
    keywords: service.keywords,
    alternates: {
      canonical:
        service.canonicalUrl ||
        `https://www.devbhoomiinfotech.com/services/${service.slug}/`,
    },
  };
}

export default async function ServiceDetailPage({ params }: ServicePageProps) {
  const { slug } = await params;
  const service = getServiceBySlug(slug);

  if (!service) {
    notFound();
  }

  return <ServiceDetailTemplate data={service} />;
}
