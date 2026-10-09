import type { Metadata } from "next";
import { BlogContent } from "@/modules/blog/blog-content";
import { siteConfig } from "@/config/site";

export const metadata: Metadata = {
  title: "Latest Blogs & Digital Insights | Devbhoomi Infotech",
  description:
    "Expert articles on Technical SEO, Web Development architectures, AI workflows, and digital marketing strategies from Devbhoomi Infotech.",
  alternates: {
    canonical: `${siteConfig.url}/blogs/`,
  },
};

export default function BlogsPage() {
  return (
    <div className="w-full">
      <section className="py-20 lg:py-24 bg-gradient-to-br from-slate-900 via-blue-950 to-slate-900 text-white text-center px-4">
        <div className="max-w-4xl mx-auto space-y-4">
          <span className="inline-block text-xs sm:text-sm font-bold uppercase tracking-wider text-blue-400 bg-blue-500/10 px-4 py-1.5 rounded-full border border-blue-400/20">
            Insights & Guides
          </span>
          <h1 className="text-4xl sm:text-6xl font-extrabold tracking-tight">
            Industry Articles & Growth Tips
          </h1>
          <p className="text-lg text-slate-300 max-w-2xl mx-auto">
            Practical strategies, technical blueprints, and modern tech updates to help your business win online.
          </p>
        </div>
      </section>

      <section className="py-20 px-4 sm:px-6 lg:px-8 bg-white dark:bg-gray-950">
        <div className="max-w-7xl mx-auto">
          <BlogContent />
        </div>
      </section>
    </div>
  );
}
