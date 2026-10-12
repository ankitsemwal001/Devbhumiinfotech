import Image from "next/image";
import Link from "next/link";
import { WhyChoosePageData } from "@/types/why-choose";
import { allWhyChoosePages } from "@/content/why-choose";
import { ProcessTabs } from "@/modules/services/process-tabs";
import { ServiceAreasGrid } from "@/modules/home/service-areas-grid";
import {
  ArrowRight,
  ChevronRight,
  MapPin,
  MessageSquare,
  Sparkles,
  Zap,
} from "lucide-react";
import { Button } from "@/components/ui/button";
import { siteConfig } from "@/config/site";
import {
  generateBreadcrumbSchema,
  generateFAQSchema,
  generateServiceSchema,
} from "@/lib/schema";
import { JsonLd } from "@/components/seo/json-ld";

interface WhyChooseDetailTemplateProps {
  data: WhyChoosePageData;
}

export function WhyChooseDetailTemplate({ data }: WhyChooseDetailTemplateProps) {
  const pageUrl = `${siteConfig.url}/why-choose-us/${data.slug}/`;
  const breadcrumbs = [
    { name: "Home", url: `${siteConfig.url}/` },
    { name: "Why Choose Us", url: `${siteConfig.url}/about/why-choose-us/` },
    { name: data.title, url: pageUrl },
  ];

  const breadcrumbSchema = generateBreadcrumbSchema(breadcrumbs);
  const faqSchema = generateFAQSchema(
    data.faqs.map((f, i) => ({ id: i + 1, question: f.question, answer: f.answer }))
  );
  const serviceSchema = generateServiceSchema({
    title: data.title,
    description: data.metaDescription,
    slug: `why-choose-us/${data.slug}`,
  });

  return (
    <div className="w-full">
      <JsonLd data={breadcrumbSchema} />
      <JsonLd data={serviceSchema} />
      {faqSchema && <JsonLd data={faqSchema} />}

      {/* Hero Section */}
      <section className="relative w-full pt-10 pb-16 lg:pt-14 lg:pb-24 overflow-hidden bg-gradient-to-br from-slate-900 via-blue-950 to-slate-900 text-white">
        <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          {/* Breadcrumbs Navigation on TOP */}
          <nav aria-label="Breadcrumb" className="mb-8 text-xs sm:text-sm text-slate-400">
            <ol className="flex flex-wrap items-center gap-2">
              <li>
                <Link href="/" className="hover:text-white transition-colors">
                  Home
                </Link>
              </li>
              <li className="text-slate-600">/</li>
              <li>
                <Link
                  href="/why-choose-us/"
                  className="hover:text-white transition-colors"
                >
                  Why Choose Us
                </Link>
              </li>
              <li className="text-slate-600">/</li>
              <li className="text-blue-400 font-medium truncate max-w-[280px] sm:max-w-none">
                {data.title}
              </li>
            </ol>
          </nav>

          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            <div className="text-center lg:text-left">
              <div className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full bg-blue-500/10 border border-blue-400/20 text-blue-300 text-xs sm:text-sm font-semibold mb-6">
                <span>{data.tag}</span>
                <span className="text-slate-500">•</span>
                <span>{data.category}</span>
              </div>

              <h1 className="text-4xl sm:text-5xl lg:text-6xl font-extrabold mb-6">
                {data.heroHeading.regular}{" "}
                <span className="text-transparent bg-clip-text bg-gradient-to-r from-blue-400 to-emerald-400">
                  {data.heroHeading.highlight}
                </span>
              </h1>

              <p className="text-lg sm:text-xl text-slate-300 max-w-2xl mx-auto lg:mx-0 mb-10 leading-relaxed">
                {data.heroDescription}
              </p>

              <div className="flex flex-col sm:flex-row items-center justify-center lg:justify-start gap-4">
                <Button
                  asChild
                  size="lg"
                  className="rounded-full bg-blue-600 hover:bg-blue-700 text-white font-semibold px-8 h-12 shadow-lg shadow-blue-600/30"
                >
                  <Link href="/contact/" className="flex items-center gap-2">
                    <span>Discuss Your Project</span>
                    <ArrowRight className="w-4 h-4" />
                  </Link>
                </Button>
                <Button
                  asChild
                  size="lg"
                  variant="outline"
                  className="rounded-full border-white/20 bg-white/10 hover:bg-white/20 text-white font-semibold px-8 h-12 backdrop-blur-sm"
                >
                  <a
                    href={siteConfig.links.whatsapp}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="flex items-center gap-2 text-white"
                  >
                    <MessageSquare className="w-4 h-4 text-emerald-400" />
                    <span>Chat on WhatsApp</span>
                  </a>
                </Button>
              </div>
            </div>

            {/* Hero Image */}
            <div className="relative w-full h-64 sm:h-80 lg:h-[420px] rounded-[32px] overflow-hidden border border-slate-700/60 shadow-2xl">
              <Image
                src={data.image}
                alt={data.title}
                fill
                priority
                sizes="(max-width: 1024px) 100vw, 50vw"
                className="object-cover"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-slate-950/80 via-slate-950/10 to-transparent" />

              <div className="absolute bottom-4 left-4 right-4 flex flex-wrap gap-2">
                {data.pills.map((pill, idx) => (
                  <span
                    key={idx}
                    className="px-3 py-1.5 rounded-full bg-white/95 dark:bg-slate-900/90 backdrop-blur-md text-[11px] font-semibold text-slate-800 dark:text-slate-100 shadow-sm"
                  >
                    {pill}
                  </span>
                ))}
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Specs Strip */}
      <section className="bg-slate-100 dark:bg-slate-900 border-b border-slate-200 dark:border-slate-800">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-5 flex flex-wrap items-center justify-center lg:justify-between gap-4 text-sm font-semibold text-slate-700 dark:text-slate-300">
          {data.specs.map((spec, idx) => (
            <span key={idx} className="flex items-center gap-2">
              {spec}
            </span>
          ))}
        </div>
      </section>

      {/* Overview Section */}
      <section className="py-20 px-4 sm:px-6 lg:px-8 bg-white dark:bg-slate-950">
        <div className="max-w-5xl mx-auto text-center space-y-6">
          <span className="inline-flex items-center gap-2 text-xs font-bold uppercase tracking-wider text-blue-600 dark:text-blue-400 bg-blue-50 dark:bg-blue-950/60 px-3.5 py-1.5 rounded-full border border-blue-200 dark:border-blue-900">
            <Sparkles className="w-3.5 h-3.5" />
            <span>{data.category}</span>
          </span>
          <h2 className="text-3xl sm:text-4xl font-bold text-slate-900 dark:text-white">
            {data.overviewHeading}
          </h2>
          <div className="space-y-4 text-lg text-slate-600 dark:text-slate-300 leading-relaxed text-left sm:text-center">
            {data.overview.map((paragraph, index) => (
              <p key={index}>{paragraph}</p>
            ))}
          </div>
        </div>
      </section>

      {/* Features Section */}
      {data.features && data.features.length > 0 && (
        <section className="py-16 px-4 sm:px-6 lg:px-8 bg-slate-50 dark:bg-slate-900 border-y border-slate-200 dark:border-slate-800">
          <div className="max-w-7xl mx-auto">
            <div className="text-center mb-12">
              <h2 className="text-3xl sm:text-4xl font-bold text-slate-900 dark:text-white mb-4">
                {data.featuresHeading}
              </h2>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
              {data.features.map((feature, idx) => (
                <div
                  key={idx}
                  className="bg-white dark:bg-slate-800 p-6 rounded-2xl border border-slate-200 dark:border-slate-700 shadow-sm hover:shadow-md transition-shadow"
                >
                  <div className="w-12 h-12 rounded-xl bg-blue-50 dark:bg-blue-900/30 flex items-center justify-center text-blue-600 dark:text-blue-400 mb-5">
                    <Zap className="w-6 h-6" />
                  </div>
                  <h3 className="text-xl font-bold text-slate-900 dark:text-white mb-2">
                    {feature.title}
                  </h3>
                  <p className="text-sm text-slate-600 dark:text-slate-300 leading-relaxed">
                    {feature.description}
                  </p>
                </div>
              ))}
            </div>
          </div>
        </section>
      )}

      {/* Service Areas Section */}
      {data.serviceAreas && data.serviceAreas.length > 0 && (
        <ServiceAreasGrid
          heading={data.serviceAreasHeading}
          subheading={data.serviceAreasSubheading}
          areas={data.serviceAreas}
        />
      )}

      {/* Process Tabs */}
      <section className="py-20 px-4 sm:px-6 lg:px-8 bg-white dark:bg-slate-950">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-16">
            <span className="text-xs sm:text-sm font-bold uppercase tracking-wider text-blue-600 dark:text-blue-400">
              How It Works
            </span>
            <h2 className="text-3xl sm:text-4xl font-bold text-slate-900 dark:text-white mt-2 mb-4">
              {data.processHeading}
            </h2>
            {data.processSubheading && (
              <p className="text-slate-600 dark:text-slate-400 max-w-2xl mx-auto text-sm sm:text-base">
                {data.processSubheading}
              </p>
            )}
          </div>

          <ProcessTabs steps={data.processSteps} />
        </div>
      </section>

      {/* FAQs Section */}
      {data.faqs && data.faqs.length > 0 && (
        <section className="py-20 px-4 sm:px-6 lg:px-8 bg-slate-50 dark:bg-slate-900 border-t border-slate-200 dark:border-slate-800">
          <div className="max-w-4xl mx-auto">
            <div className="text-center mb-16">
              <h2 className="text-3xl sm:text-4xl font-bold text-slate-900 dark:text-white mb-4">
                {data.faqsHeading || "Frequently Asked Questions"}
              </h2>
            </div>

            <div className="space-y-6">
              {data.faqs.map((faq, index) => (
                <div
                  key={index}
                  className="bg-white dark:bg-slate-800 rounded-2xl p-6 border border-slate-200 dark:border-slate-700"
                >
                  <h3 className="text-lg font-bold text-slate-900 dark:text-white mb-3">
                    {faq.question}
                  </h3>
                  <p className="text-slate-600 dark:text-slate-300 leading-relaxed text-sm sm:text-base">
                    {faq.answer}
                  </p>
                </div>
              ))}
            </div>
          </div>
        </section>
      )}

      {/* Explore Other Core Strengths Section */}
      <section className="py-20 px-4 sm:px-6 lg:px-8 bg-slate-50 dark:bg-slate-900/50 border-t border-slate-200 dark:border-slate-800">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-14 space-y-3">
            <span className="text-xs sm:text-sm font-bold uppercase tracking-wider text-blue-600 dark:text-blue-400">
              The Complete Advantage
            </span>
            <h2 className="text-3xl sm:text-4xl font-extrabold text-slate-900 dark:text-white">
              Explore Our Other Core Strengths
            </h2>
            <p className="text-slate-600 dark:text-slate-400 max-w-2xl mx-auto text-sm sm:text-base">
              Every system we engineer is backed by our full suite of client-first standards and engineering principles.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {allWhyChoosePages
              .filter((p) => p.slug !== data.slug)
              .slice(0, 6)
              .map((item) => (
                <div
                  key={item.slug}
                  className="p-6 rounded-2xl bg-white dark:bg-slate-900 border border-slate-200/90 dark:border-slate-800 shadow-sm hover:shadow-md hover:border-blue-500/50 transition-all flex flex-col justify-between group"
                >
                  <div className="space-y-3">
                    <div className="flex items-center justify-between text-xs">
                      <span className="font-semibold text-blue-600 dark:text-blue-400">
                        {item.tag}
                      </span>
                      <span className="px-2.5 py-0.5 rounded-full bg-slate-100 dark:bg-slate-800 text-slate-500 dark:text-slate-400 text-[11px] font-medium">
                        {item.category}
                      </span>
                    </div>
                    <h3 className="text-lg font-bold text-slate-900 dark:text-white group-hover:text-blue-600 dark:group-hover:text-blue-400 transition-colors">
                      {item.title}
                    </h3>
                    <p className="text-xs sm:text-sm text-slate-600 dark:text-slate-400 line-clamp-2 leading-relaxed">
                      {item.heroDescription}
                    </p>
                  </div>

                  <Link
                    href={`/why-choose-us/${item.slug}/`}
                    className="inline-flex items-center gap-1.5 text-xs font-semibold text-blue-600 dark:text-blue-400 mt-5 group-hover:gap-2.5 transition-all"
                  >
                    <span>Read Full Details</span>
                    <ArrowRight className="w-3.5 h-3.5" />
                  </Link>
                </div>
              ))}
          </div>
        </div>
      </section>

      {/* Bottom CTA Banner */}
      <section className="py-16 px-4 sm:px-6 lg:px-8 bg-blue-600 text-white">
        <div className="max-w-5xl mx-auto text-center space-y-6">
          <h2 className="text-3xl sm:text-4xl font-extrabold">
            Ready to Experience {data.title}?
          </h2>
          <p className="text-lg text-blue-100 max-w-2xl mx-auto">
            Connect directly with our engineering team in Rishikesh to see how this standard applies to your project.
          </p>
          <div className="flex flex-col sm:flex-row items-center justify-center gap-4 pt-4">
            <Button
              asChild
              size="lg"
              className="rounded-full bg-white text-blue-600 hover:bg-blue-50 font-bold px-8 h-12 shadow-lg"
            >
              <Link href="/contact/">{data.actionText}</Link>
            </Button>
            <Button
              asChild
              size="lg"
              variant="outline"
              className="rounded-full border-white/70 bg-white/10 hover:bg-white hover:text-blue-700 text-white font-semibold px-8 h-12 transition-all"
            >
              <a href={`tel:${siteConfig.contact.phoneRaw}`}>
                Call Us: {siteConfig.contact.phone}
              </a>
            </Button>
          </div>
        </div>
      </section>
    </div>
  );
}
