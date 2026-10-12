import { allWhyChoosePages, getWhyChooseBySlug } from "@/content/why-choose";
import { notFound } from "next/navigation";
import { WhyChooseDetailTemplate } from "@/modules/why-choose-us";
import { siteConfig } from "@/config/site";
import type { Metadata } from "next";

export function generateStaticParams() {
  return allWhyChoosePages.map((page) => ({
    slug: page.slug,
  }));
}

interface WhyChoosePageProps {
  params: Promise<{ slug: string }>;
}

export async function generateMetadata({
  params,
}: WhyChoosePageProps): Promise<Metadata> {
  const { slug } = await params;
  const page = getWhyChooseBySlug(slug);

  if (!page) {
    return { title: "Page Not Found" };
  }

  return {
    title: page.metaTitle,
    description: page.metaDescription,
    keywords: page.keywords,
    alternates: {
      canonical: `${siteConfig.url}/why-choose-us/${page.slug}/`,
    },
  };
}

export default async function WhyChooseDetailPage({
  params,
}: WhyChoosePageProps) {
  const { slug } = await params;
  const page = getWhyChooseBySlug(slug);

  if (!page) {
    notFound();
  }

  return <WhyChooseDetailTemplate data={page} />;
}
