import { blogPosts } from "@/content/blogs";
import { notFound } from "next/navigation";
import Image from "next/image";
import Link from "next/link";
import { ArrowLeft, Calendar, User, Clock, ArrowRight, ExternalLink, ShieldCheck } from "lucide-react";
import { Button } from "@/components/ui/button";
import type { Metadata } from "next";
import { siteConfig } from "@/config/site";
import { buildLinkedSchemaGraph } from "@/lib/schema";
import { JsonLd } from "@/components/seo/json-ld";

export function generateStaticParams() {
  return blogPosts.map((post) => ({
    slug: post.slug,
  }));
}

interface BlogPostPageProps {
  params: Promise<{ slug: string }>;
}

export async function generateMetadata({
  params,
}: BlogPostPageProps): Promise<Metadata> {
  const { slug } = await params;
  const post = blogPosts.find((p) => p.slug === slug);

  if (!post) {
    return { title: "Article Not Found | Devbhoomi Infotech" };
  }

  return {
    title: `${post.title} | Devbhoomi Infotech`,
    description: post.excerpt,
    alternates: {
      canonical: `https://www.devbhoomiinfotech.com/blogs/${post.slug}/`,
    },
  };
}

export default async function BlogPostDetailPage({ params }: BlogPostPageProps) {
  const { slug } = await params;
  const post = blogPosts.find((p) => p.slug === slug);

  if (!post) {
    notFound();
  }

  const postUrl = `https://www.devbhoomiinfotech.com/blogs/${post.slug}/`;
  const breadcrumbs = [
    { name: "Home", url: `${siteConfig.url}/` },
    { name: "Insights", url: `${siteConfig.url}/blogs/` },
    { name: post.title, url: postUrl },
  ];

  const linkedGraph = buildLinkedSchemaGraph({
    pageUrl: postUrl,
    pageTitle: post.title,
    pageDescription: post.excerpt,
    breadcrumbs,
    blogPost: {
      headline: post.title,
      datePublished: post.datePublished,
      dateModified: post.dateModified,
      image: `${siteConfig.url}${post.image.startsWith("/") ? post.image : `/${post.image}`}`,
      authorName: post.author,
      description: post.excerpt,
      category: post.category,
    },
  });

  return (
    <article className="w-full py-16 px-4 sm:px-6 lg:px-8 bg-white dark:bg-slate-950">
      <JsonLd data={linkedGraph} />

      <div className="max-w-4xl mx-auto space-y-8">
        <Button asChild variant="ghost" className="mb-4">
          <Link href="/blogs/" className="flex items-center gap-2 text-sm text-slate-500 hover:text-blue-600">
            <ArrowLeft className="w-4 h-4" />
            Back to Insights & Articles
          </Link>
        </Button>

        <div className="flex flex-wrap items-center gap-3">
          <span className="inline-block bg-blue-600 text-white text-xs font-bold uppercase tracking-wider py-1 px-3.5 rounded-full">
            {post.category}
          </span>
          <span className="text-xs text-slate-500 dark:text-slate-400">
            Editorial Guide Verified
          </span>
        </div>

        <h1 className="text-3xl sm:text-5xl font-extrabold text-slate-900 dark:text-white leading-tight">
          {post.title}
        </h1>

        <div className="flex flex-wrap items-center gap-6 text-sm text-slate-500 dark:text-slate-400 border-y border-slate-100 dark:border-slate-800 py-4">
          <span className="flex items-center gap-2">
            <User className="w-4 h-4 text-blue-500" />
            {post.author}
          </span>
          <span className="flex items-center gap-2">
            <Calendar className="w-4 h-4 text-blue-500" />
            {post.date}
          </span>
          <span className="flex items-center gap-2">
            <Clock className="w-4 h-4 text-blue-500" />
            {post.readingTimeMinutes} min read
          </span>
        </div>

        {/* Lead Excerpt Banner */}
        <div className="p-6 rounded-2xl bg-slate-50 dark:bg-slate-900 border border-slate-200 dark:border-slate-800">
          <p className="text-base sm:text-lg font-medium text-slate-800 dark:text-slate-200 leading-relaxed">
            {post.excerpt}
          </p>
        </div>

        <div className="relative h-72 sm:h-96 w-full rounded-3xl overflow-hidden shadow-lg border border-slate-200 dark:border-slate-800">
          <Image
            src={post.image.startsWith("/") ? post.image : `/${post.image}`}
            alt={post.title}
            fill
            className="object-cover"
          />
        </div>

        {/* Article Body Sections */}
        <div className="space-y-10 pt-4 text-slate-800 dark:text-slate-200 leading-relaxed">
          {post.sections && post.sections.length > 0 ? (
            post.sections.map((section, idx) => (
              <section key={idx} className="space-y-4">
                <h2 className="text-2xl sm:text-3xl font-bold text-slate-900 dark:text-white">
                  {section.heading}
                </h2>
                {section.paragraphs.map((p, pIdx) => (
                  <p key={pIdx} className="text-base sm:text-lg text-slate-700 dark:text-slate-300 leading-relaxed">
                    {p}
                  </p>
                ))}
              </section>
            ))
          ) : (
            <p className="text-base sm:text-lg text-slate-700 dark:text-slate-300 leading-relaxed">
              {post.content}
            </p>
          )}
        </div>

        {/* Related Service Internal Link Banner */}
        {post.serviceLink && (
          <div className="p-6 sm:p-8 rounded-3xl bg-gradient-to-r from-blue-950/60 via-slate-900 to-slate-950 border border-blue-500/30 text-white flex flex-col sm:flex-row items-start sm:items-center justify-between gap-6 my-10">
            <div className="space-y-1">
              <span className="text-xs font-bold uppercase tracking-wider text-blue-400">
                Related Engineering Practice
              </span>
              <h3 className="text-xl font-bold text-white">
                Looking for {post.category} Solutions?
              </h3>
              <p className="text-sm text-slate-300">
                Learn how our engineering team delivers remote solutions built around your business goals.
              </p>
            </div>
            <Button asChild className="rounded-full bg-blue-600 hover:bg-blue-500 text-white shrink-0 font-semibold px-6">
              <Link href={post.serviceLink.url} className="flex items-center gap-2">
                <span>{post.serviceLink.label}</span>
                <ArrowRight className="w-4 h-4" />
              </Link>
            </Button>
          </div>
        )}

        {/* Verified Primary Sources Block */}
        {post.sources && post.sources.length > 0 && (
          <div className="p-6 rounded-2xl bg-slate-50 dark:bg-slate-900/60 border border-slate-200 dark:border-slate-800 space-y-3">
            <div className="flex items-center gap-2 text-xs font-bold uppercase tracking-wider text-slate-600 dark:text-slate-400">
              <ShieldCheck className="w-4 h-4 text-emerald-500" />
              <span>Primary References & Standards Cited</span>
            </div>
            <ul className="space-y-2 text-xs sm:text-sm text-slate-600 dark:text-slate-400">
              {post.sources.map((src, idx) => (
                <li key={idx} className="flex items-center gap-2">
                  <span className="text-slate-400">•</span>
                  <a
                    href={src.url}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="text-blue-600 dark:text-blue-400 hover:underline flex items-center gap-1"
                  >
                    <span>{src.title}</span>
                    <ExternalLink className="w-3 h-3" />
                  </a>
                  {src.date && <span className="text-slate-400 text-xs">({src.date})</span>}
                </li>
              ))}
            </ul>
          </div>
        )}

        {/* Editorial Freshness Footer */}
        <div className="pt-6 border-t border-slate-200 dark:border-slate-800 text-center text-xs text-slate-500 dark:text-slate-400">
          <span>Reviewed by Devbhoomi Infotech</span>
          <span className="mx-2">·</span>
          <span>Last modified: October 12, 2026</span>
        </div>
      </div>
    </article>
  );
}
