import Link from "next/link";
import { ServicePageData } from "@/types/service";
import { ProcessTabs } from "./process-tabs";
import { ArrowRight, MessageSquare, Zap } from "lucide-react";
import { Button } from "@/components/ui/button";
import { siteConfig } from "@/config/site";
import {
  generateBreadcrumbSchema,
  generateFAQSchema,
  generateServiceSchema,
} from "@/lib/schema";
import { JsonLd } from "@/components/seo/json-ld";

interface ServiceDetailTemplateProps {
  data: ServicePageData;
}

export function ServiceDetailTemplate({ data }: ServiceDetailTemplateProps) {
  const serviceUrl = data.canonicalUrl || `${siteConfig.url}/services/${data.slug}/`;
  const breadcrumbs = [
    { name: "Home", url: `${siteConfig.url}/` },
    { name: "Services", url: `${siteConfig.url}/services/` },
    { name: data.title, url: serviceUrl },
  ];

  const breadcrumbSchema = generateBreadcrumbSchema(breadcrumbs);
  const faqSchema = generateFAQSchema(
    data.faqs.map((f, i) => ({ id: i + 1, question: f.question, answer: f.answer }))
  );
  const serviceSchema = generateServiceSchema({
    title: data.title,
    description: data.metaDescription,
    slug: data.slug,
  });

  return (
    <div className="w-full">
      <JsonLd data={breadcrumbSchema} />
      <JsonLd data={serviceSchema} />
      {faqSchema && <JsonLd data={faqSchema} />}

      {/* Hero Section */}
      <section className="relative w-full py-20 lg:py-28 overflow-hidden bg-gradient-to-br from-slate-900 via-blue-950 to-slate-900 text-white">
        <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <div className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full bg-blue-500/10 border border-blue-400/20 text-blue-300 text-xs sm:text-sm font-semibold mb-6">
            <span className="w-2 h-2 rounded-full bg-emerald-400 animate-pulse" />
            {data.heroBadge}
          </div>

          <h1 className="text-4xl sm:text-5xl lg:text-6xl font-extrabold max-w-4xl mx-auto mb-6 ">
            {data.heroHeading.regular}{" "}
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-blue-400 to-emerald-400">
              {data.heroHeading.highlight}
            </span>
          </h1>

          <p className="text-lg sm:text-xl text-slate-300 max-w-3xl mx-auto mb-10 leading-relaxed">
            {data.heroDescription}
          </p>

          <div className="flex flex-col sm:flex-row items-center justify-center gap-4">
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
              className="rounded-full border-slate-700 hover:bg-slate-800 text-slate-200 font-semibold px-8 h-12"
            >
              <a
                href={siteConfig.links.whatsapp}
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center gap-2"
              >
                <MessageSquare className="w-4 h-4 text-emerald-400" />
                <span className="text-black">Chat on WhatsApp</span>
              </a>
            </Button>
          </div>

          {/* Breadcrumbs Navigation */}
          <nav aria-label="Breadcrumb" className="mt-12 text-xs sm:text-sm text-slate-400">
            <ol className="flex flex-wrap items-center justify-center gap-2">
              <li>
                <Link href="/" className="hover:text-white transition-colors">
                  Home
                </Link>
              </li>
              <li>/</li>
              <li>
                <Link href="/services/" className="hover:text-white transition-colors">
                  Services
                </Link>
              </li>
              <li>/</li>
              <li className="text-blue-400 font-medium">{data.title}</li>
            </ol>
          </nav>
        </div>
      </section>

      {/* Overview Section */}
      <section className="py-20 px-4 sm:px-6 lg:px-8 bg-white dark:bg-slate-950">
        <div className="max-w-5xl mx-auto text-center space-y-6">
          <h2 className="text-3xl sm:text-4xl font-bold text-slate-900 dark:text-white">
            {data.overview.heading}
          </h2>
          <div className="space-y-4 text-lg text-slate-600 dark:text-slate-300 leading-relaxed text-left sm:text-center">
            {data.overview.content.map((paragraph, index) => (
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
                {data.featuresHeading || "Key Capabilities & Features"}
              </h2>
              <p className="text-slate-600 dark:text-slate-400 max-w-2xl mx-auto text-sm sm:text-base">
                Engineered for reliable performance, high security, and clear conversion paths.
              </p>
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

      {/* Process Tabs */}
      <section className="py-20 px-4 sm:px-6 lg:px-8 bg-white dark:bg-slate-950">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-16">
            <span className="text-xs sm:text-sm font-bold uppercase tracking-wider text-blue-600 dark:text-blue-400">
              Structured Methodology
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

      {/* Bottom CTA Banner */}
      <section className="py-16 px-4 sm:px-6 lg:px-8 bg-blue-600 text-white">
        <div className="max-w-5xl mx-auto text-center space-y-6">
          <h2 className="text-3xl sm:text-4xl font-extrabold">
            Ready to Consult on Your {data.title} Project?
          </h2>
          <p className="text-lg text-blue-100 max-w-2xl mx-auto">
            Connect directly with our engineering team in Rishikesh to review requirements and align on scope.
          </p>
          <div className="flex flex-col sm:flex-row items-center justify-center gap-4 pt-4">
            <Button
              asChild
              size="lg"
              className="rounded-full bg-white text-blue-600 hover:bg-blue-50 font-bold px-8 h-12 shadow-lg"
            >
              <Link href="/contact/">Discuss Your Project</Link>
            </Button>
            <Button
              asChild
              size="lg"
              variant="outline"
              className="rounded-full border-white text-black hover:bg-blue-700 font-semibold px-8 h-12"
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
