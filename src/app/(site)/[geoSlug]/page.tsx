import type { Metadata } from "next";
import { notFound } from "next/navigation";
import {
  getAllPublishedGeoSlugs,
  parseGeoSlug,
  getGeoPageData,
} from "@/content/locations/geo-page-data";
import { GeoServiceTemplate } from "@/modules/services/geo-service-template";
import { siteConfig } from "@/config/site";

interface PageProps {
  params: Promise<{
    geoSlug: string;
  }>;
}

export async function generateStaticParams() {
  return getAllPublishedGeoSlugs();
}

export async function generateMetadata({ params }: PageProps): Promise<Metadata> {
  const { geoSlug } = await params;
  const parsed = parseGeoSlug(geoSlug);

  if (!parsed) {
    return {
      title: "Page Not Found",
    };
  }

  const data = getGeoPageData(parsed.serviceSlug, parsed.locationSlug);

  if (!data) {
    return {
      title: "Page Not Found",
    };
  }

  return {
    title: {
      absolute: data.metaTitle,
    },
    description: data.metaDescription,
    keywords: data.keywords,
    alternates: {
      canonical: data.canonicalUrl,
    },
    openGraph: {
      title: data.metaTitle,
      description: data.metaDescription,
      url: data.canonicalUrl,
      siteName: siteConfig.name,
      locale: "en_IN",
      type: "website",
    },
    twitter: {
      card: "summary_large_image",
      title: data.metaTitle,
      description: data.metaDescription,
    },
  };
}

export default async function GeoLandingPage({ params }: PageProps) {
  const { geoSlug } = await params;
  const parsed = parseGeoSlug(geoSlug);

  if (!parsed) {
    notFound();
  }

  const data = getGeoPageData(parsed.serviceSlug, parsed.locationSlug);

  if (!data) {
    notFound();
  }

  return <GeoServiceTemplate data={data} />;
}
