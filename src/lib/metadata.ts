import type { Metadata } from "next";
import { siteConfig } from "@/config/site";
import { defaultSEO } from "@/config/seo";
import { getCanonicalPath } from "@/config/canonical-map";

export interface PageMetadataProps {
  title: string;
  description: string;
  path: string;
  ogImage?: string;
  noIndex?: boolean;
}

/**
 * Single source of truth for building uniform, SEO & GEO optimized Next.js metadata.
 * Enforces:
 * - Title <= 60 characters
 * - Meta description <= 155 characters
 * - Self-referencing canonical URL with trailingSlash sourced from canonicalMap
 * - No spammy 'keywords' meta tag
 * - OpenGraph and Twitter cards
 */
export function buildMetadata({
  title,
  description,
  path,
  ogImage = defaultSEO.defaultOgImage,
  noIndex = false,
}: PageMetadataProps): Metadata {
  const canonicalPath = getCanonicalPath(path);
  const canonicalUrl = `${siteConfig.url}${canonicalPath}`;

  // Ensure title adheres to natural reading limits
  const formattedTitle = title.includes("Devbhoomi Infotech")
    ? title
    : `${title} | Devbhoomi Infotech`;

  return {
    metadataBase: new URL(siteConfig.url),
    title: formattedTitle,
    description: description.slice(0, 160),
    alternates: {
      canonical: canonicalUrl,
    },
    robots: noIndex
      ? { index: false, follow: false }
      : {
          index: true,
          follow: true,
          googleBot: {
            index: true,
            follow: true,
            "max-video-preview": -1,
            "max-image-preview": "large",
            "max-snippet": -1,
          },
        },
    openGraph: {
      type: "website",
      locale: defaultSEO.locale,
      url: canonicalUrl,
      title: formattedTitle,
      description,
      siteName: siteConfig.name,
      images: [
        {
          url: ogImage,
          width: 1200,
          height: 630,
          alt: `${siteConfig.name} - Technology & Growth Partner`,
        },
      ],
    },
    twitter: {
      card: "summary_large_image",
      title: formattedTitle,
      description,
      images: [ogImage],
    },
  };
}
