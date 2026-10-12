import { WhyChoosePageData } from "@/types/why-choose";

export const performanceQaPage: WhyChoosePageData = {
  slug: "performance-qa",
  tag: "⚡ 95+ PageSpeed",
  category: "Quality",
  image: "/images/websites/devbhoomi-infotech-trekking-camping-website-rishikesh.webp",
  title: "Performance & Rigorous QA as Standard",
  metaTitle: "High-Performance Websites & QA Testing | Devbhoomi Infotech",
  metaDescription:
    "Every website and application passes strict speed budgets, security scans, and cross-browser QA before you see it. 95+ PageSpeed scores are standard, not an upsell.",
  keywords: [
    "pagespeed 95 web development",
    "core web vitals optimization india",
    "qa software testing rishikesh",
    "high performance web engineering",
  ],
  heroBadge: "Engineered for Speed",
  heroHeading: {
    regular: "Performance That Passes",
    highlight: "Every Test",
  },
  heroDescription:
    "Slow sites lose conversions and fall in search results. We treat performance, security, and cross-device testing as fundamental engineering requirements, not afterthoughts.",
  specs: ["⚡ 95+ PageSpeed", "🔒 SSL & Security", "📱 Device-Tested"],
  pills: ["Core Web Vitals", "Automated QA", "Strict Budgets"],
  overviewHeading: "Quality Built In, Not Tested On Later",
  overview: [
    "Many agencies build quickly, then scramble to patch performance issues only after a client complains. By then the technical debt is already baked into the codebase.",
    "We work to strict performance budgets from the first line of code. Every component is measured for bundle size, render time, and visual stability, and every release passes a multi-point QA checklist before staging.",
    "The result is websites and software that load instantly, feel responsive, and maintain green Core Web Vitals under real user traffic.",
  ],
  featuresHeading: "Our Production Quality Standards",
  features: [
    {
      title: "Core Web Vitals Pass",
      description:
        "LCP, INP, and CLS optimised to hit green thresholds on real mobile devices, not just desktop simulators.",
    },
    {
      title: "Cross-Device Testing",
      description:
        "Verified across iOS, Android, macOS, and Windows on Chrome, Safari, Firefox, and Edge.",
    },
    {
      title: "Security Scans",
      description:
        "Dependency audits, header hardening, and input sanitisation run automatically on every build.",
    },
    {
      title: "Performance Budgets",
      description:
        "Strict limits on bundle sizes, third-party scripts, and asset weights that cannot be exceeded silently.",
    },
  ],
  processHeading: "Our QA & Performance Pipeline",
  processSubheading: "A systematic verification process before every release",
  processSteps: [
    {
      id: "1",
      title: "Budget Definition",
      subtitle: "Setting The Thresholds",
      description:
        "We set target metrics for load time, bundle size, and vitals before writing code.",
      points: [
        "PageSpeed targets defined (95+)",
        "Bundle size limits established",
        "Target device profiles selected",
        "Accessibility baseline agreed",
      ],
    },
    {
      id: "2",
      title: "Continuous Testing",
      subtitle: "Testing As We Build",
      description:
        "Automated linters, type checks, and Lighthouse audits run on every code commit.",
      points: [
        "Automated linting and TypeScript checks",
        "Lighthouse CI on pull requests",
        "Asset compression verification",
        "Semantic markup validation",
      ],
    },
    {
      id: "3",
      title: "Manual Device QA",
      subtitle: "Real-World Verification",
      description:
        "We test touch targets, responsive breakpoints, form submissions, and edge cases on actual hardware.",
      points: [
        "Testing on real phones and tablets",
        "Form submission and error flow testing",
        "Network throttling (slow 4G) tests",
        "Cross-browser rendering review",
      ],
    },
    {
      id: "4",
      title: "Final Audit & Report",
      subtitle: "Verified Delivery",
      description:
        "Before launch you receive an audit report showing verified PageSpeed, security, and QA signoff.",
      points: [
        "Documented Lighthouse score report",
        "Security header verification",
        "Accessibility audit results",
        "Signed-off QA checklist",
      ],
    },
  ],
  faqsHeading: "Performance & QA FAQs",
  faqs: [
    {
      question: "Do you guarantee 95+ PageSpeed on all pages?",
      answer:
        "Yes, on our core templates under standard conditions. If third-party tracking scripts are added later, we provide guidelines on how to keep scores high.",
    },
    {
      question: "Which devices do you test on?",
      answer:
        "We test on modern iOS and Android devices, low-end Android hardware, and desktop browsers across Chrome, Safari, Firefox, and Edge.",
    },
    {
      question: "What happens if a bug is found after launch?",
      answer:
        "Every project includes a post-launch warranty period during which our team resolves any functional issues promptly at no extra charge.",
    },
  ],
  actionText: "Build a High-Speed System",
};
