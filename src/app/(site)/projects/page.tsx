import type { Metadata } from "next";
import Link from "next/link";
import { siteConfig } from "@/config/site";
import { generateBreadcrumbSchema } from "@/lib/schema";
import { JsonLd } from "@/components/seo/json-ld";
import { CtaBannerSection } from "@/modules/home/cta-banner";
import { ProjectsShowcase } from "@/modules/projects/projects-showcase";
import {
  Search,
  Compass,
  Code2,
  Gauge,
  Rocket,
  Layers,
  Cpu,
  CheckCircle2,
  ArrowRight,
} from "lucide-react";
import { Button } from "@/components/ui/button";

export const metadata: Metadata = {
  title: "Projects & Prototypes | Devbhoomi Infotech Solutions",
  description:
    "Explore selected web development projects, custom software architectures, and automation prototypes delivered by Devbhoomi Infotech.",
  alternates: {
    canonical: `${siteConfig.url}/projects/`,
  },
};

export default function ProjectsPage() {
  const breadcrumbs = [
    { name: "Home", url: `${siteConfig.url}/` },
    { name: "Projects", url: `${siteConfig.url}/projects/` },
  ];
  const breadcrumbSchema = generateBreadcrumbSchema(breadcrumbs);

  const deliverySteps = [
    {
      num: "01",
      icon: Compass,
      title: "Discovery & Technical Blueprint",
      description:
        "We audit your target audience, competitors, and workflow requirements to establish concrete page architecture, URL taxonomy, and technology choices.",
    },
    {
      num: "02",
      icon: Layers,
      title: "Tailored UI/UX & Prototypes",
      description:
        "Designing custom interfaces using your brand palette and responsive typography. No generic theme kits; every element is crafted for conversion.",
    },
    {
      num: "03",
      icon: Code2,
      title: "Clean Next.js & API Engineering",
      description:
        "Building modular components with TypeScript, Next.js App Router, and server actions. Integrating APIs, WhatsApp channels, and automation triggers.",
    },
    {
      num: "04",
      icon: Gauge,
      title: "Vitals Hardening & Deployment",
      description:
        "Full audit for Core Web Vitals (LCP < 2.5s, CLS < 0.1), JSON-LD schema, security headers, and domain propagation with 100% source code ownership.",
    },
  ];

  const techEcosystem = [
    { category: "Frontend & Architecture", items: ["Next.js 15", "React 19", "TypeScript", "Tailwind CSS", "Vanilla CSS"] },
    { category: "Automation & Backend", items: ["n8n Workflows", "Node.js", "Python", "WhatsApp Cloud API", "REST / Webhooks"] },
    { category: "Search & Visibility", items: ["Schema.org JSON-LD", "Local SEO", "GEO (Generative Engine)", "Core Web Vitals"] },
    { category: "Deployment & Edge", items: ["Vercel Edge Network", "Cloudflare DNS", "Hostinger Cloud", "GitHub CI/CD"] },
  ];

  return (
    <div className="w-full">
      <JsonLd data={breadcrumbSchema} />

      {/* Hero Banner */}
      <section className="py-20 lg:py-28 bg-gradient-to-br from-slate-900 via-blue-950 to-slate-900 text-white text-center px-4">
        <div className="max-w-4xl mx-auto space-y-6">
          <span className="inline-block text-xs sm:text-sm font-semibold uppercase tracking-wider text-blue-400 bg-blue-500/10 px-4 py-1.5 rounded-full border border-blue-400/20">
            Work & Architecture
          </span>
          <h1 className="text-4xl sm:text-6xl font-extrabold">
            Selected Projects & Prototypes
          </h1>
          <p className="text-base sm:text-xl text-slate-300 max-w-2xl mx-auto leading-relaxed">
            A transparent showcase of client deliverables, internal publishing tools, and domain-specific architectural concepts built with precision.
          </p>
        </div>
      </section>

      {/* Interactive Projects Grid Section */}
      <section className="py-20 px-4 sm:px-6 lg:px-8 bg-white dark:bg-slate-950">
        <div className="max-w-7xl mx-auto">
          <ProjectsShowcase />
        </div>
      </section>

      {/* Section 2: How We Deliver Engineering Projects */}
      <section className="py-20 px-4 sm:px-6 lg:px-8 bg-slate-50 dark:bg-slate-900/50 border-t border-slate-200/80 dark:border-slate-800">
        <div className="max-w-7xl mx-auto space-y-16">
          <div className="text-center max-w-3xl mx-auto space-y-4">
            <span className="inline-block text-xs font-bold uppercase tracking-wider text-blue-600 dark:text-blue-400 bg-blue-50 dark:bg-blue-950/60 px-3.5 py-1.5 rounded-full border border-blue-200 dark:border-blue-900">
              Execution Methodology
            </span>
            <h2 className="text-3xl sm:text-4xl font-extrabold text-slate-900 dark:text-white">
              How We Execute Engineering Projects
            </h2>
            <p className="text-base text-slate-600 dark:text-slate-300">
              Our proven 4-stage pipeline guarantees on-time delivery, zero technical debt, and complete visibility at every milestone.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {deliverySteps.map((step, idx) => {
              const Icon = step.icon;
              return (
                <div
                  key={idx}
                  className="p-8 rounded-3xl bg-white dark:bg-slate-900 border border-slate-200 dark:border-slate-800 shadow-sm relative group hover:border-blue-500/50 transition-all duration-300 flex flex-col justify-between"
                >
                  <div className="space-y-5">
                    <div className="flex items-center justify-between">
                      <div className="w-12 h-12 rounded-2xl bg-blue-50 dark:bg-blue-900/40 text-blue-600 dark:text-blue-400 flex items-center justify-center">
                        <Icon className="w-6 h-6" />
                      </div>
                      <span className="text-2xl font-black text-slate-300 dark:text-slate-700 font-mono">
                        {step.num}
                      </span>
                    </div>

                    <h3 className="text-lg font-bold text-slate-900 dark:text-white">
                      {step.title}
                    </h3>

                    <p className="text-xs sm:text-sm text-slate-600 dark:text-slate-300 leading-relaxed">
                      {step.description}
                    </p>
                  </div>
                </div>
              );
            })}
          </div>
        </div>
      </section>

      {/* Section 3: Technology Ecosystem */}
      <section className="py-20 px-4 sm:px-6 lg:px-8 bg-white dark:bg-slate-950 border-t border-slate-200/80 dark:border-slate-800">
        <div className="max-w-7xl mx-auto space-y-12">
          <div className="text-center max-w-3xl mx-auto space-y-4">
            <span className="text-xs font-bold uppercase tracking-wider text-emerald-600 dark:text-emerald-400">
              Engineering Stack
            </span>
            <h2 className="text-3xl sm:text-4xl font-extrabold text-slate-900 dark:text-white">
              Technologies & Infrastructure We Deploy
            </h2>
            <p className="text-base text-slate-600 dark:text-slate-300">
              We choose battle-tested, high-performance modern tooling instead of bloated legacy CMS platforms.
            </p>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
            {techEcosystem.map((group, index) => (
              <div
                key={index}
                className="p-6 rounded-2xl bg-slate-50 dark:bg-slate-900 border border-slate-200 dark:border-slate-800 space-y-4"
              >
                <h3 className="font-bold text-sm uppercase tracking-wider text-blue-600 dark:text-blue-400">
                  {group.category}
                </h3>
                <ul className="space-y-2">
                  {group.items.map((item, i) => (
                    <li key={i} className="flex items-center gap-2 text-xs sm:text-sm text-slate-700 dark:text-slate-300 font-medium">
                      <CheckCircle2 className="w-4 h-4 text-emerald-500 shrink-0" />
                      <span>{item}</span>
                    </li>
                  ))}
                </ul>
              </div>
            ))}
          </div>

          <div className="pt-6 text-center">
            <Button asChild className="rounded-full bg-blue-600 hover:bg-blue-700 text-white px-8">
              <Link href="/contact/">Start Your Custom Project With Us</Link>
            </Button>
          </div>
        </div>
      </section>

      <CtaBannerSection />
    </div>
  );
}
