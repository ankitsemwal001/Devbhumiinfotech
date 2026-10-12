"use client";

import Link from "next/link";
import Image from "next/image";
import { ArrowRight, Calendar, User } from "lucide-react";
import { blogPosts } from "@/content/blogs";
import { Button } from "@/components/ui/button";

export function InsightsPreviewSection() {
  const latestPosts = blogPosts.slice(0, 3);

  return (
    <section className="py-20 px-4 sm:px-6 lg:px-8 bg-white dark:bg-slate-950">
      <div className="max-w-7xl mx-auto">
        <div className="flex flex-col items-center text-center mb-14 gap-6">
          <div className="space-y-4 max-w-7xl">
            <span className="inline-block text-xs font-bold uppercase tracking-wider text-blue-600 dark:text-blue-400 bg-blue-50 dark:bg-blue-950/60 px-3.5 py-1.5 rounded-full border border-blue-200 dark:border-blue-900">
              Technical Insights &amp; Guides
            </span>
            <h2 className="text-7xl sm:text-5xl font-extrabold text-slate-900 dark:text-white">
              Latest Engineering &amp; SEO Articles
            </h2>
            <p className="text-base sm:text-lg text-slate-600 dark:text-slate-300">
              Practical guides on generative search optimization, modern web
              architecture, and automated business workflows.
            </p>
          </div>

          
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {latestPosts.map((post) => (
            <article
              key={post.id}
              className="flex flex-col justify-between rounded-3xl bg-slate-50 dark:bg-slate-900 border border-slate-200/80 dark:border-slate-800 overflow-hidden shadow-sm hover:shadow-xl transition-all duration-300 group"
            >
              <div>
                <div className="relative h-52 w-full overflow-hidden bg-slate-100 dark:bg-slate-800">
                  <Image
                    src={post.image}
                    alt={post.title}
                    fill
                    sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
                    className="object-cover group-hover:scale-105 transition-transform duration-500"
                  />
                  <div className="absolute top-4 left-4">
                    <span className="text-xs font-semibold px-3 py-1 rounded-full bg-blue-600 text-white shadow-md">
                      {post.category}
                    </span>
                  </div>
                </div>

                <div className="p-6 space-y-3">
                  <div className="flex items-center gap-4 text-xs text-slate-500 dark:text-slate-400">
                    <div className="flex items-center gap-1.5">
                      <Calendar className="w-3.5 h-3.5 text-blue-500" />
                      <span>{post.date}</span>
                    </div>
                    <div className="flex items-center gap-1.5">
                      <User className="w-3.5 h-3.5 text-emerald-500" />
                      <span>{post.author}</span>
                    </div>
                  </div>

                  <h3 className="text-xl font-bold text-slate-900 dark:text-white group-hover:text-blue-600 dark:group-hover:text-blue-400 transition-colors leading-snug">
                    <Link href={`/blogs/${post.slug}/`}>
                      {post.title}
                    </Link>
                  </h3>

                  <p className="text-sm text-slate-600 dark:text-slate-300 leading-relaxed line-clamp-2">
                    {post.excerpt}
                  </p>
                </div>
              </div>

              <div className="p-6 pt-0">
                <Link
                  href={`/blogs/${post.slug}/`}
                  className="inline-flex items-center gap-1.5 text-sm font-semibold text-blue-600 dark:text-blue-400 hover:text-blue-700 dark:hover:text-blue-300 transition-colors"
                >
                  <span>Read Article</span>
                  <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
                </Link>
              </div>
            </article>
          ))}
        </div>

        <div className="w-full flex items-center justify-center mt-14">
          <Button
            asChild
            variant="outline"
            className="rounded-full border-slate-300 dark:border-slate-700"
          >
            <Link href="/blogs/" className="flex items-center gap-2">
              <span>View All Articles</span>
              <ArrowRight className="w-4 h-4" />
            </Link>
          </Button>
      </div>
      </div>
    </section>
  );
}
