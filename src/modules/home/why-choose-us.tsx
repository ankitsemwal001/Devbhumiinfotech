"use client";

import Image from "next/image";
import Link from "next/link";
import { ArrowRight, Sparkles } from "lucide-react";

interface WhyChooseItem {
  id: string;
  tag: string;
  category: string;
  image: string;
  title: string;
  description: string;
  specs: string[];
  pills: string[];
  actionText: string;
  confirmed: boolean;
}

const whyChooseItems: WhyChooseItem[] = [
  // ---------------- COLUMN 1: TOP ----------------
  {
    id: "business-first",
    tag: "⭐ Business First",
    category: "Strategy",
    image: "/images/about/dbi-it-solution-about-us.webp",
    title: "Business-First Problem Solving",
    description:
      "We begin by understanding your business constraints and customer journeys before writing code or suggesting architecture.",
    specs: ["🎯 Zero Fluff", "📊 Measurable ROI", "💡 Real Solutions"],
    pills: ["Commercial Focus", "Journey Mapping", "No Over-Engineering"],
    actionText: "Discuss Your Problem",
    confirmed: true,
  },

  // ---------------- COLUMN 2: NICHE (SHIFTED DOWN) ----------------
  {
    id: "tailored-workflow",
    tag: "⚡ Zero Templates",
    category: "Architecture",
    image: "/images/services/service-software-development.jpg",
    title: "Tailored to Your Workflow",
    description:
      "No forced off-the-shelf templates. Every software workflow, website structure, and automation is molded to your exact operations.",
    specs: ["🛠️ Custom Code", "⚡ Fast Load", "🔒 Scalable Data"],
    pills: ["Bespoke UI/UX", "Next.js & Node", "PostgreSQL"],
    actionText: "Explore Custom Architecture",
    confirmed: true,
  },

  // ---------------- COLUMN 3: TOP ----------------
  {
    id: "tech-plus-growth",
    tag: "🚀 Unified Stack",
    category: "Engineering & SEO",
    image: "/images/services/service-web-development.jpg",
    title: "Technology + Growth Under One Roof",
    description:
      "Avoid coordinating between separate design, engineering, and SEO agencies. We integrate systems engineering with search visibility.",
    specs: ["🌐 Custom Web", "📈 Organic Reach", "⚡ Speed CRO"],
    pills: ["Full-Stack", "Technical SEO", "Growth Analytics"],
    actionText: "Explore Integrated Growth",
    confirmed: true,
  },

  // ---------------- COLUMN 1: MIDDLE ----------------
  {
    id: "discipline-specialists",
    tag: "🛡️ Specialist Teams",
    category: "Expertise",
    image: "/images/services/service-mobile-app-development.jpg",
    title: "Dedicated Discipline Specialists",
    description:
      "Specialist skillsets for full-stack engineering, generative AI automation, and technical search engine optimisation—no generalists.",
    specs: ["💻 Full-Stack Devs", "🤖 AI Engineers", "📱 Mobile Leads"],
    pills: ["React & Next.js", "Python & n8n", "Flutter & Native"],
    actionText: "Meet Discipline Specialists",
    confirmed: true,
  },

  // ---------------- COLUMN 2: MIDDLE (SHIFTED DOWN) ----------------
  {
    id: "transparent-communication",
    tag: "💬 Direct Access",
    category: "Collaboration",
    image: "/images/ai/ai-workflow-automation-agent.webp",
    title: "Transparent Communication",
    description:
      "Regular milestone updates, direct access to the team working on your project, and clear documentation at every handover.",
    specs: ["📞 WhatsApp & Slack", "📋 Weekly Demos", "⏱️ On-Time"],
    pills: ["Sprint Reviews", "Direct Access", "Full IP Handover"],
    actionText: "See Communication Standard",
    confirmed: true,
  },

  // ---------------- COLUMN 3: MIDDLE ----------------
  {
    id: "local-roots",
    tag: "📍 Local & Pan-India",
    category: "Accountability",
    image: "/images/services/service-digital-growth.jpg",
    title: "Local Roots, Nationwide Reach",
    description:
      "Deeply rooted in Rishikesh, Uttarakhand, with the infrastructure and experience to deliver projects for clients across India.",
    specs: ["⛰️ Dhalwala HQ", "🇮🇳 50+ Clients", "🤝 In-Person & Remote"],
    pills: ["Local Trust", "Pan-India Work", "Direct Accountability"],
    actionText: "Connect With Our Team",
    confirmed: true,
  },

  // ---------------- COLUMN 1: BOTTOM ----------------
  {
    id: "performance-qa",
    tag: "⚡ 95+ PageSpeed",
    category: "Quality First",
    image: "/images/ai/ai-lead-generation-agent.webp",
    title: "Production-Grade Quality & QA",
    description:
      "Engineered for sub-second page loads, accessibility standards, and multi-device testing before any release goes live.",
    specs: ["⚡ Core Web Vitals", "🛡️ Secure Code", "📱 Multi-Device QA"],
    pills: ["Lighthouse 95+", "Clean Code", "Rigorous Testing"],
    actionText: "Review Quality Standards",
    confirmed: true,
  },

  // ---------------- COLUMN 2: BOTTOM (SHIFTED DOWN) ----------------
  {
    id: "agile-delivery",
    tag: "⏱️ Rapid Sprints",
    category: "Momentum",
    image: "/images/ai/ai-chatbots-customer-support.webp",
    title: "Agile Sprints & On-Time Delivery",
    description:
      "Clear milestone timelines with phase-by-phase deliverables. We maintain momentum so your project launches without friction.",
    specs: ["📅 Fixed Deadlines", "🔄 2-Week Sprints", "🚀 Smooth Launch"],
    pills: ["Milestone Signoff", "Live Previews", "Zero Surprises"],
    actionText: "Plan Your Launch Timeline",
    confirmed: true,
  },

  // ---------------- COLUMN 3: BOTTOM ----------------
  {
    id: "long-term-support",
    tag: "🤝 Long-Term Partner",
    category: "Reliability",
    image: "/images/websites/devbhoomi-infotech-hotel-resort-website-rishikesh.webp",
    title: "Post-Launch Scaling & Support",
    description:
      "We stay invested long after go-live with proactive maintenance, server monitoring, and evolving feature improvements.",
    specs: ["📈 99.9% Uptime", "🛠️ Prompt Support", "🚀 Feature Growth"],
    pills: ["Monitoring", "Security Updates", "Feature Roadmaps"],
    actionText: "Partner for Long-Term Growth",
    confirmed: true,
  },
];

function WhyChooseCard({ item }: { item: WhyChooseItem }) {
  return (
    <article className="group flex flex-col justify-between p-4 sm:p-5 rounded-[28px] sm:rounded-[32px] bg-white dark:bg-slate-900 border border-slate-200/90 dark:border-slate-800 shadow-[0_4px_20px_-4px_rgba(0,0,0,0.05)] hover:shadow-[0_20px_40px_-12px_rgba(0,0,0,0.12)] transition-all duration-300 hover:-translate-y-1">
      {/* Top Visual Area (matching reference image style) */}
      <div className="relative w-full h-48 sm:h-52 rounded-2xl overflow-hidden bg-slate-100 dark:bg-slate-800 mb-4.5">
        <Image
          src={item.image}
          alt={item.title}
          fill
          sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
          className="object-cover group-hover:scale-105 transition-transform duration-500"
        />
        <div className="absolute inset-0 bg-gradient-to-t from-slate-950/75 via-slate-950/20 to-black/20" />

        {/* Floating Top-Left Pill Badge */}
        <div className="absolute top-3 left-3 inline-flex items-center gap-1.5 px-3 py-1 rounded-full bg-white/95 dark:bg-slate-900/90 backdrop-blur-md text-[11px] font-bold text-slate-800 dark:text-slate-100 shadow-sm border border-white/40 dark:border-slate-700/60">
          <span>{item.tag}</span>
        </div>

        {/* Bottom-Right Category Chip */}
        <div className="absolute bottom-3 right-3 inline-flex items-center gap-1.5 px-2.5 py-1 rounded-full bg-black/60 backdrop-blur-md text-[10px] font-semibold text-white">
          <span className="w-1.5 h-1.5 rounded-full bg-emerald-400" />
          <span>{item.category}</span>
        </div>
      </div>

      {/* Card Content */}
      <div className="flex-1 flex flex-col justify-between">
        <div>
          <h3 className="text-lg sm:text-xl font-bold text-slate-900 dark:text-white leading-snug group-hover:text-blue-600 dark:group-hover:text-blue-400 transition-colors">
            {item.title}
          </h3>
          <p className="text-xs sm:text-sm text-slate-600 dark:text-slate-400 leading-relaxed mt-2 mb-4">
            {item.description}
          </p>

          {/* Specs / Key Metrics Row (Matching reference image horizontal divider) */}
          <div className="py-2.5 my-2 border-y border-slate-100 dark:border-slate-800/80 flex items-center justify-between text-[11px] text-slate-500 dark:text-slate-400 font-medium">
            {item.specs.map((spec, sIdx) => (
              <span key={sIdx} className="flex items-center gap-1">
                {spec}
              </span>
            ))}
          </div>

          {/* Feature Pills Row (Matching reference image tag pills) */}
          <div className="flex flex-wrap items-center gap-1.5 my-3.5">
            {item.pills.map((pill, pIdx) => (
              <span
                key={pIdx}
                className="px-2.5 py-1 rounded-full text-[11px] font-medium bg-slate-100 dark:bg-slate-800/80 text-slate-600 dark:text-slate-300 border border-slate-200/50 dark:border-slate-700/50"
              >
                {pill}
              </span>
            ))}
          </div>
        </div>

        {/* Bottom Action Pill Button (Matching reference image full-width pill button) */}
        <Link
          href={`/why-choose-us/${item.id}/`}
          className="w-full mt-3 py-3 px-4 rounded-full bg-slate-900 hover:bg-blue-600 dark:bg-slate-800 dark:hover:bg-blue-600 text-white font-semibold text-xs sm:text-sm flex items-center justify-center gap-2 shadow-sm transition-all duration-200 group-hover:shadow-md"
        >
          <span>{item.actionText}</span>
          <ArrowRight className="w-3.5 h-3.5 group-hover:translate-x-1 transition-transform" />
        </Link>
      </div>
    </article>
  );
}

export function WhyChooseUsSection() {
  const visibleItems = whyChooseItems.filter((item) => item.confirmed);

  // Group into 3 columns for desktop staggered layout (Col 1: upar, Col 2: niche, Col 3: upar)
  const col1 = [visibleItems[0], visibleItems[3], visibleItems[6]].filter(Boolean);
  const col2 = [visibleItems[1], visibleItems[4], visibleItems[7]].filter(Boolean);
  const col3 = [visibleItems[2], visibleItems[5], visibleItems[8]].filter(Boolean);

  return (
    <section id="why-choose-us" className="py-20 lg:py-28 px-4 sm:px-6 lg:px-8 bg-slate-50/50 dark:bg-slate-950">
      <div className="max-w-7xl mx-auto">
        {/* Section Header */}
        <div className="text-center max-w-7xl mx-auto mb-16 lg:mb-20 space-y-4">
          <div className="inline-flex items-center gap-2 text-xs font-bold uppercase tracking-wider text-blue-600 dark:text-blue-400 bg-blue-50 dark:bg-blue-950/60 px-3.5 py-1.5 rounded-full border border-blue-200 dark:border-blue-900">
            <Sparkles className="w-3.5 h-3.5" />
            <span>Why Partner With Us</span>
          </div>
          <h2 className="text-3xl sm:text-5xl font-extrabold text-slate-900 dark:text-white tracking-normal">
            Built on Quality. Driven by Reliability.
          </h2>
          <p className="text-base sm:text-lg text-slate-600 dark:text-slate-300 leading-relaxed">
            We work as an invested technology partner focused on clear deliverables, high standards of code, and measurable digital growth.
          </p>
        </div>

        {/* ========================================================
            Desktop 3*3 Staggered Layout (Col 1 upar, Col 2 niche, Col 3 upar)
        ======================================================== */}
        <div className="hidden lg:grid lg:grid-cols-3 gap-8 items-start">
          {/* Column 1 (Normal / Upar) */}
          <div className="space-y-8">
            {col1.map((item) => (
              <WhyChooseCard key={item.id} item={item} />
            ))}
          </div>

          {/* Column 2 (Offset lower down / Niche) */}
          <div className="space-y-8 pt-12 xl:pt-16">
            {col2.map((item) => (
              <WhyChooseCard key={item.id} item={item} />
            ))}
          </div>

          {/* Column 3 (Normal / Upar) */}
          <div className="space-y-8">
            {col3.map((item) => (
              <WhyChooseCard key={item.id} item={item} />
            ))}
          </div>
        </div>

        {/* ========================================================
            Mobile & Tablet Responsive Layout
        ======================================================== */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6 lg:hidden">
          {visibleItems.map((item) => (
            <WhyChooseCard key={item.id} item={item} />
          ))}
        </div>
      </div>
    </section>
  );
}
