"use client";

import { ProcessTabs } from "@/modules/services/process-tabs";
import { ProcessStep } from "@/types/service";

const homeProcessSteps: ProcessStep[] = [
  {
    id: "1",
    title: "Discovery & Consultation",
    subtitle: "Phase 1: Understanding Needs",
    description:
      "We begin with a focused discovery call to understand your business objectives, target audience, technical challenges, and timeline expectations.",
    points: [
      "Initial business & technical consultation",
      "Current digital presence evaluation",
      "Target customer & competitor review",
      "Preliminary scope & milestone outline",
    ],
  },
  {
    id: "2",
    title: "Requirements Analysis",
    subtitle: "Phase 2: Defining Scope",
    description:
      "We translate your goals into detailed technical specifications, page architecture, database requirements, and automation workflows.",
    points: [
      "Functional requirements document",
      "User journey & page sitemap mapping",
      "Technology stack confirmation",
      "Third-party integration evaluation (APIs, WhatsApp, Payment)",
    ],
  },
  {
    id: "3",
    title: "Strategy & Planning",
    subtitle: "Phase 3: Blueprinting",
    description:
      "We design the architectural blueprint, content hierarchy, SEO wireframes, and design system before coding begins.",
    points: [
      "Wireframing & user experience layouts",
      "On-page SEO & Schema structure planning",
      "Milestone breakdown & development schedule",
      "Content checklist & asset collection",
    ],
  },
  {
    id: "4",
    title: "Design & Development",
    subtitle: "Phase 4: Engineering",
    description:
      "Our engineering team builds clean, modern Next.js/React front-ends, robust backend logic, and automated business workflows.",
    points: [
      "Responsive, mobile-first component development",
      "Accessible typography & fast layout rendering",
      "Custom workflow & API pipeline implementation",
      "Staging preview access for collaborative feedback",
    ],
  },
  {
    id: "5",
    title: "Testing & Launch",
    subtitle: "Phase 5: Quality Assurance",
    description:
      "Rigorous cross-browser testing, mobile responsiveness checks, Core Web Vitals optimization, and smooth domain deployment.",
    points: [
      "Cross-browser and mobile device verification",
      "Core Web Vitals speed & performance check",
      "Live domain configuration & SSL setup",
      "Production sitemap & search console indexing",
    ],
  },
  {
    id: "6",
    title: "Optimisation & Support",
    subtitle: "Phase 6: Post-Launch Care",
    description:
      "We provide post-deployment monitoring, handover documentation, and ongoing maintenance or search visibility retainers where needed.",
    points: [
      "Project handover & CMS/system training",
      "Post-launch telemetry and monitoring",
      "Generative Engine Optimisation (GEO) tracking",
      "Tailored ongoing support & feature iteration",
    ],
  },
];

export function ProcessSection() {
  return (
    <section className="py-20 px-4 sm:px-6 lg:px-8 bg-white dark:bg-slate-950">
      <div className="max-w-7xl mx-auto">
        <div className="text-center max-w-3xl mx-auto mb-16 space-y-4">
          <span className="inline-block text-xs font-bold uppercase tracking-wider text-blue-600 dark:text-blue-400 bg-blue-50 dark:bg-blue-950/60 px-3.5 py-1.5 rounded-full border border-blue-200 dark:border-blue-900">
            Methodology & Delivery
          </span>
          <h2 className="text-3xl sm:text-5xl font-extrabold text-slate-900 dark:text-white">
            How We Work With You
          </h2>
          <p className="text-base sm:text-lg text-slate-600 dark:text-slate-300">
            A disciplined six-phase process engineered to ensure transparency, prevent scope creep, and deliver dependable software on schedule.
          </p>
        </div>

        <ProcessTabs steps={homeProcessSteps} />
      </div>
    </section>
  );
}
