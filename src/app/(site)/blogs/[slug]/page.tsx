import { blogPosts } from "@/content/blogs";
import { notFound } from "next/navigation";
import Image from "next/image";
import Link from "next/link";
import { ArrowLeft, Calendar, User, Clock } from "lucide-react";
import { Button } from "@/components/ui/button";
import type { Metadata } from "next";

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
    return { title: "Blog Not Found" };
  }

  return {
    title: `${post.title} | Devbhoomi Infotech Blog`,
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

  return (
    <article className="w-full py-16 px-4 sm:px-6 lg:px-8 bg-white dark:bg-gray-950">
      <div className="max-w-4xl mx-auto space-y-8">
        <Button asChild variant="ghost" className="mb-4">
          <Link href="/blogs" className="flex items-center gap-2 text-sm text-gray-500 hover:text-blue-600">
            <ArrowLeft className="w-4 h-4" />
            Back to Articles
          </Link>
        </Button>

        <span className="inline-block bg-blue-600 text-white text-xs font-bold uppercase tracking-wider py-1 px-3 rounded-full">
          {post.category}
        </span>

        <h1 className="text-3xl sm:text-5xl font-extrabold text-gray-900 dark:text-white ">
          {post.title}
        </h1>

        <div className="flex items-center gap-6 text-sm text-gray-500 dark:text-gray-400 border-y border-gray-100 dark:border-gray-800 py-4">
          <span className="flex items-center gap-2">
            <User className="w-4 h-4" />
            {post.author}
          </span>
          <span className="flex items-center gap-2">
            <Calendar className="w-4 h-4" />
            {post.date}
          </span>
          <span className="flex items-center gap-2">
            <Clock className="w-4 h-4" />
            5 min read
          </span>
        </div>

        <div className="relative h-72 sm:h-96 w-full rounded-2xl overflow-hidden shadow-lg">
          <Image
            src={post.image.startsWith("/") ? post.image : `/${post.image}`}
            alt={post.title}
            fill
            className="object-cover"
          />
        </div>

        <div className="prose dark:prose-invert max-w-none text-base sm:text-lg text-gray-700 dark:text-gray-300 leading-relaxed space-y-6 pt-4">
          <p className="text-xl font-medium text-gray-900 dark:text-white leading-relaxed">
            {post.excerpt}
          </p>
          <p>{post.content}</p>
        </div>
      </div>
    </article>
  );
}
