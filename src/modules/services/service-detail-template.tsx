import Link from "next/link";
import { ServicePageData } from "@/types/service";
import { ProcessTabs } from "./process-tabs";
import {
  ArrowRight,
  MessageSquare,
  Zap,
  CheckCircle2,
  XCircle,
  Calendar,
  ShieldCheck,
  BookOpen,
  FolderGit2,
} from "lucide-react";
import { Button } from "@/components/ui/button";
import { siteConfig } from "@/config/site";
import { navigationServiceGroups, NavigationServiceGroup } from "@/config/service-groups";
import { buildLinkedSchemaGraph } from "@/lib/schema";
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

  const linkedGraph = buildLinkedSchemaGraph({
    pageUrl: serviceUrl,
    pageTitle: data.title,
    pageDescription: data.metaDescription,
    breadcrumbs,
    service: {
      name: data.title,
      description: data.metaDescription,
      url: serviceUrl,
    },
    faqs: data.faqs?.map((f) => ({
      question: f.question,
      answer: f.answer,
    })),
  });

  // Filter other service groups for "Related Services"
  const otherGroups = navigationServiceGroups.filter((g: NavigationServiceGroup) => !serviceUrl.includes(g.slug)).slice(0, 3);

  return (
    <div className="w-full">
      <JsonLd data={linkedGraph} />

      {/* Hero Section */}
      <section className="relative w-full py-20 lg:py-28 overflow-hidden bg-gradient-to-br from-slate-900 via-blue-950 to-slate-900 text-white">
        <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <div className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full bg-blue-500/10 border border-blue-400/20 text-blue-300 text-xs sm:text-sm font-semibold mb-6">
            <span className="w-2 h-2 rounded-full bg-emerald-400 animate-pulse" />
            {data.heroBadge}
          </div>

          <h1 className="text-4xl sm:text-5xl lg:text-6xl font-extrabold max-w-4xl mx-auto mb-6 leading-tight">
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
              <Link href={`/contact/?service=${data.slug}`} className="flex items-center gap-2">
                <span>Get a Free Consultation</span>
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
                <span>Chat on WhatsApp</span>
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

      {/* Answer Capsule (GEO / AIO Direct Definition Block) */}
      {data.answerCapsule && (
        <section className="py-12 px-4 sm:px-6 lg:px-8 bg-blue-950/20 border-b border-blue-900/30">
          <div className="max-w-4xl mx-auto">
            <div className="p-6 sm:p-8 rounded-2xl bg-white dark:bg-slate-900 border border-blue-500/30 shadow-md space-y-3">
              <div className="flex items-center gap-2 text-xs font-bold uppercase tracking-wider text-blue-600 dark:text-blue-400">
                <ShieldCheck className="w-4 h-4" />
                <span>Executive Summary & Definition</span>
              </div>
              <p className="text-base sm:text-lg text-slate-800 dark:text-slate-200 leading-relaxed font-medium">
                {data.answerCapsule}
              </p>
            </div>
          </div>
        </section>
      )}

      {/* At A Glance Table */}
      {data.atAGlance && (
        <section className="py-16 px-4 sm:px-6 lg:px-8 bg-white dark:bg-slate-950 border-b border-slate-200 dark:border-slate-800">
          <div className="max-w-5xl mx-auto space-y-6">
            <div className="text-center space-y-2">
              <h2 className="text-2xl sm:text-3xl font-extrabold text-slate-900 dark:text-white">
                At a Glance: {data.title}
              </h2>
              <p className="text-sm text-slate-600 dark:text-slate-400">
                Core scope, common use cases, and deliverable commitments.
              </p>
            </div>

            <div className="rounded-2xl border border-slate-200 dark:border-slate-800 overflow-hidden shadow-xs">
              <div className="divide-y divide-slate-200 dark:divide-slate-800">
                <div className="p-5 grid grid-cols-1 md:grid-cols-4 gap-2 md:gap-4 bg-slate-50/50 dark:bg-slate-900/50">
                  <div className="text-xs font-bold uppercase tracking-wider text-slate-500 dark:text-slate-400">
                    What It Is
                  </div>
                  <div className="md:col-span-3 text-sm text-slate-800 dark:text-slate-200">
                    {data.atAGlance.whatItIs}
                  </div>
                </div>

                <div className="p-5 grid grid-cols-1 md:grid-cols-4 gap-2 md:gap-4">
                  <div className="text-xs font-bold uppercase tracking-wider text-slate-500 dark:text-slate-400">
                    Typical Use Cases
                  </div>
                  <div className="md:col-span-3 text-sm text-slate-800 dark:text-slate-200">
                    <ul className="list-disc pl-5 space-y-1">
                      {data.atAGlance.typicalUseCases.map((uc, i) => (
                        <li key={i}>{uc}</li>
                      ))}
                    </ul>
                  </div>
                </div>

                <div className="p-5 grid grid-cols-1 md:grid-cols-4 gap-2 md:gap-4 bg-slate-50/50 dark:bg-slate-900/50">
                  <div className="text-xs font-bold uppercase tracking-wider text-slate-500 dark:text-slate-400">
                    Primary Deliverables
                  </div>
                  <div className="md:col-span-3 text-sm text-slate-800 dark:text-slate-200">
                    <ul className="list-disc pl-5 space-y-1">
                      {data.atAGlance.deliverables.map((del, i) => (
                        <li key={i}>{del}</li>
                      ))}
                    </ul>
                  </div>
                </div>

                {data.atAGlance.typicalProcessLength && (
                  <div className="p-5 grid grid-cols-1 md:grid-cols-4 gap-2 md:gap-4">
                    <div className="text-xs font-bold uppercase tracking-wider text-slate-500 dark:text-slate-400">
                      Process Timeline
                    </div>
                    <div className="md:col-span-3 text-sm text-slate-800 dark:text-slate-200">
                      {data.atAGlance.typicalProcessLength}
                    </div>
                  </div>
                )}

                <div className="p-5 grid grid-cols-1 md:grid-cols-4 gap-2 md:gap-4">
                  <div className="text-xs font-bold uppercase tracking-wider text-slate-500 dark:text-slate-400">
                    Engagement Model
                  </div>
                  <div className="md:col-span-3 text-sm text-slate-800 dark:text-slate-200">
                    {data.atAGlance.engagementModel}
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>
      )}

      {/* Who It's For / When You Don't Need It */}
      {data.whoItsFor && (
        <section className="py-16 px-4 sm:px-6 lg:px-8 bg-slate-50 dark:bg-slate-900/50 border-b border-slate-200 dark:border-slate-800">
          <div className="max-w-5xl mx-auto space-y-8">
            <div className="text-center space-y-2">
              <span className="text-xs font-bold uppercase tracking-wider text-blue-600 dark:text-blue-400">
                Transparent Scoping
              </span>
              <h2 className="text-2xl sm:text-3xl font-extrabold text-slate-900 dark:text-white">
                Who This Is For — And When You Don’t Need It
              </h2>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
              {/* Ideal for card */}
              <div className="p-6 sm:p-8 rounded-2xl bg-white dark:bg-slate-900 border border-emerald-500/30 shadow-xs space-y-4">
                <div className="flex items-center gap-2 text-emerald-600 dark:text-emerald-400 font-bold text-base">
                  <CheckCircle2 className="w-5 h-5 shrink-0" />
                  <span>Ideal For Your Business If:</span>
                </div>
                <ul className="space-y-3 text-sm text-slate-700 dark:text-slate-300">
                  {data.whoItsFor.idealFor.map((item, idx) => (
                    <li key={idx} className="flex items-start gap-2.5">
                      <span className="text-emerald-500 shrink-0 font-bold">•</span>
                      <span>{item}</span>
                    </li>
                  ))}
                </ul>
              </div>

              {/* Not needed when card */}
              <div className="p-6 sm:p-8 rounded-2xl bg-white dark:bg-slate-900 border border-amber-500/30 shadow-xs space-y-4">
                <div className="flex items-center gap-2 text-amber-600 dark:text-amber-400 font-bold text-base">
                  <XCircle className="w-5 h-5 shrink-0" />
                  <span>You Probably Don’t Need This If:</span>
                </div>
                <ul className="space-y-3 text-sm text-slate-700 dark:text-slate-300">
                  {data.whoItsFor.notNeededWhen.map((item, idx) => (
                    <li key={idx} className="flex items-start gap-2.5">
                      <span className="text-amber-500 shrink-0 font-bold">•</span>
                      <span>{item}</span>
                    </li>
                  ))}
                </ul>
              </div>
            </div>
          </div>
        </section>
      )}

      {/* Sub-services Detailed Sections (with anchors) */}
      {data.subServicesDetailed && data.subServicesDetailed.length > 0 && (
        <section className="py-20 px-4 sm:px-6 lg:px-8 bg-white dark:bg-slate-950 border-b border-slate-200 dark:border-slate-800">
          <div className="max-w-5xl mx-auto space-y-12">
            <div className="text-center space-y-3">
              <span className="text-xs font-bold uppercase tracking-wider text-blue-600 dark:text-blue-400">
                Core Sub-Service Practice Areas
              </span>
              <h2 className="text-3xl sm:text-4xl font-extrabold text-slate-900 dark:text-white">
                What’s Included in This Service
              </h2>
              <p className="text-sm sm:text-base text-slate-600 dark:text-slate-400 max-w-2xl mx-auto">
                Itemized functional capabilities and deliverables provided under this discipline.
              </p>
            </div>

            <div className="space-y-8">
              {data.subServicesDetailed.map((sub) => (
                <div
                  key={sub.id}
                  id={sub.id}
                  className="scroll-mt-28 p-6 sm:p-8 rounded-3xl bg-slate-50 dark:bg-slate-900/60 border border-slate-200 dark:border-slate-800 space-y-4"
                >
                  <h3 className="text-2xl font-bold text-slate-900 dark:text-white">
                    {sub.title}
                  </h3>
                  <p className="text-sm sm:text-base text-slate-700 dark:text-slate-300 leading-relaxed">
                    {sub.definition}
                  </p>
                  <div>
                    <h4 className="text-xs font-bold uppercase tracking-wider text-slate-500 dark:text-slate-400 mb-2.5">
                      Key Deliverables:
                    </h4>
                    <ul className="grid grid-cols-1 sm:grid-cols-2 gap-2 text-sm text-slate-700 dark:text-slate-300">
                      {sub.deliverables.map((item, i) => (
                        <li key={i} className="flex items-center gap-2">
                          <CheckCircle2 className="w-4 h-4 text-emerald-500 shrink-0" />
                          <span>{item}</span>
                        </li>
                      ))}
                    </ul>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </section>
      )}

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

      {/* Related Services, Insights & Projects */}
      <section className="py-16 px-4 sm:px-6 lg:px-8 bg-white dark:bg-slate-950 border-t border-slate-200 dark:border-slate-800">
        <div className="max-w-5xl mx-auto space-y-12">
          {/* Related Services */}
          <div>
            <div className="flex items-center justify-between mb-6">
              <h3 className="text-xl font-bold text-slate-900 dark:text-white">
                Related Technology Disciplines
              </h3>
              <Link
                href="/services/"
                className="text-xs font-semibold text-blue-600 dark:text-blue-400 hover:underline"
              >
                View all services →
              </Link>
            </div>
            <div className="grid grid-cols-1 sm:grid-cols-3 gap-4">
              {otherGroups.map((grp: NavigationServiceGroup) => (
                <Link
                  key={grp.slug}
                  href={`/services/${grp.slug}/`}
                  className="p-5 rounded-2xl border border-slate-200 dark:border-slate-800 bg-slate-50/50 dark:bg-slate-900/40 hover:border-blue-500 dark:hover:border-blue-400 transition-all group"
                >
                  <div className="text-base font-bold text-slate-900 dark:text-white group-hover:text-blue-600 dark:group-hover:text-blue-400 mb-1">
                    {grp.name}
                  </div>
                  <p className="text-xs text-slate-600 dark:text-slate-400 line-clamp-2">
                    {grp.tagline}
                  </p>
                </Link>
              ))}
            </div>
          </div>

          {/* Related Insights & Projects Quick Strip */}
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-6 pt-6 border-t border-slate-200 dark:border-slate-800">
            <div className="p-6 rounded-2xl bg-blue-50/50 dark:bg-blue-950/20 border border-blue-200/60 dark:border-blue-900/40 flex items-start gap-4">
              <BookOpen className="w-6 h-6 text-blue-600 dark:text-blue-400 shrink-0 mt-1" />
              <div>
                <h4 className="font-bold text-slate-900 dark:text-white text-base">
                  Engineering Insights & Guides
                </h4>
                <p className="text-xs text-slate-600 dark:text-slate-400 mt-1 mb-3">
                  Read practical architectural deep dives on AI, mobile apps, software costs, and search visibility.
                </p>
                <Link
                  href="/blogs/"
                  className="text-xs font-semibold text-blue-600 dark:text-blue-400 hover:underline"
                >
                  Explore Engineering Articles →
                </Link>
              </div>
            </div>

            <div className="p-6 rounded-2xl bg-slate-50 dark:bg-slate-900/40 border border-slate-200 dark:border-slate-800 flex items-start gap-4">
              <FolderGit2 className="w-6 h-6 text-emerald-600 dark:text-emerald-400 shrink-0 mt-1" />
              <div>
                <h4 className="font-bold text-slate-900 dark:text-white text-base">
                  Verified Client Projects
                </h4>
                <p className="text-xs text-slate-600 dark:text-slate-400 mt-1 mb-3">
                  Discover verified commercial platforms, software deployments, and web architectures delivered by our team.
                </p>
                <Link
                  href="/projects/"
                  className="text-xs font-semibold text-emerald-600 dark:text-emerald-400 hover:underline"
                >
                  View Case Studies →
                </Link>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Freshness & Review Badge */}
      <div className="py-6 px-4 bg-slate-50 dark:bg-slate-950 border-t border-slate-200 dark:border-slate-800 text-center text-xs text-slate-500 dark:text-slate-400">
        <span>Last updated: {data.lastUpdated || "October 2026"}</span>
        <span className="mx-2">·</span>
        <span>Reviewed by Devbhoomi Infotech</span>
      </div>

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
              <Link href={`/contact/?service=${data.slug}`}>Get a Free Consultation</Link>
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
