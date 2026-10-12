import { ServicePageData } from "@/types/service";

export const softwareDevelopmentService: ServicePageData = {
  slug: "software-development",
  title: "Custom Software & SaaS Development in Rishikesh, Uttarakhand",
  metaTitle: "Custom Software & SaaS Development Company | Devbhoomi Infotech",
  metaDescription:
    "Engineering scalable web applications, bespoke business management software, cloud dashboards, and SaaS architectures from Rishikesh, Uttarakhand.",
  canonicalUrl: "https://www.devbhoomiinfotech.com/services/software-development/",
  keywords: [
    "custom software development rishikesh",
    "saas development company uttarakhand",
    "web application development rishikesh",
    "cloud dashboard development india",
    "business software developers",
  ],
  heroBadge: "Enterprise Software & SaaS",
  heroHeading: {
    regular: "Custom Software & SaaS Engineering in",
    highlight: "Rishikesh",
  },
  heroDescription:
    "We architect robust web applications, internal operational software, cloud dashboards, and scalable SaaS platforms built with Next.js, Node.js, and TypeScript.",
  overview: {
    heading: "Bespoke Business Software That Eliminates Operational Bottlenecks",
    content: [
      "Off-the-shelf software rarely fits proprietary business operations without forcing your team into inefficient workarounds and expensive per-seat monthly subscriptions.",
      "Devbhoomi Infotech engineers custom software tailored specifically to your internal processes: inventory management, custom booking engines, role-based client portals, and multi-tenant SaaS architectures.",
      "With 100% source code ownership and zero recurring licensing fees to third-party platforms, you retain complete control over your intellectual property and infrastructure.",
    ],
  },
  featuresHeading: "Software Engineering Disciplines",
  features: [
    {
      title: "Bespoke SaaS Architecture",
      description:
        "Multi-tenant data isolation, subscription billing (Stripe/Razorpay), user authentication, and scalable database schemas.",
    },
    {
      title: "Internal Portals & CRM Systems",
      description:
        "Custom ERPs, customer portals, inventory tracking, and employee workflows designed around your daily operational routine.",
    },
    {
      title: "High-Performance REST & GraphQL APIs",
      description:
        "Robust, secure, and documented APIs to bridge your web applications, third-party logistics, payment gateways, and databases.",
    },
    {
      title: "System Modernization & Migration",
      description:
        "Refactoring legacy monoliths, upgrading outdated codebases, and migrating on-premise tools to serverless and modern cloud stacks.",
    },
  ],
  processHeading: "Our Software Engineering Lifecycle",
  processSubheading: "Disciplined milestone delivery with continuous staging demos",
  processSteps: [
    {
      id: "1",
      title: "System Architecture & Spec",
      subtitle: "Technical Blueprint",
      description:
        "We map out data models, ER diagrams, security constraints, and UI user-flows before writing code, ensuring clean architectural foundations.",
      points: [
        "Data schema & database design",
        "API contract specifications",
        "Permission & role matrices",
        "Security & compliance checks",
      ],
    },
    {
      id: "2",
      title: "Interactive Prototypes",
      subtitle: "UI/UX & User Testing",
      description:
        "Developing clickable interfaces and intuitive dashboards so your team can test every interaction before backend development begins.",
      points: [
        "Component-based UI libraries",
        "Role-based view mockups",
        "Usability & ergonomic review",
        "Client stakeholder sign-off",
      ],
    },
    {
      id: "3",
      title: "Full-Stack Development",
      subtitle: "Agile Sprints & Staging",
      description:
        "Writing modular, type-safe Next.js, React, and backend services with automated unit testing and continuous staging deployments.",
      points: [
        "Clean, documented TypeScript code",
        "Relational & document database schemas",
        "Secure auth & webhook listeners",
        "Bi-weekly sprint demonstrations",
      ],
    },
    {
      id: "4",
      title: "Security QA & Production Cutover",
      subtitle: "Deployment & IP Transfer",
      description:
        "Rigorous load testing, security audits, automated backup setup, and smooth production deployment with full repository handover.",
      points: [
        "Vulnerability & penetration audits",
        "Edge caching & query optimization",
        "Complete source code repository transfer",
        "Handover documentation & team training",
      ],
    },
  ],
  faqsHeading: "Frequently Asked Software Questions",
  faqs: [
    {
      question: "Do we retain 100% intellectual property ownership of the code?",
      answer:
        "Yes, absolutely. All software code, database scripts, cloud configurations, and documentation belong 100% to your company upon milestone completion. You can host it anywhere and modify it freely.",
    },
    {
      question: "Which technologies do you use for custom software development?",
      answer:
        "Our primary stack is Next.js, React, TypeScript, Node.js, PostgreSQL/MySQL, Docker, and Python. We prioritize scalable, community-backed open-source technologies that avoid proprietary lock-in.",
    },
    {
      question: "How do you handle post-launch maintenance and feature updates?",
      answer:
        "Every project includes warranty support for bug fixes and system stabilization. For ongoing feature development, we offer dedicated agile engineering sprints or monthly retainers.",
    },
    {
      question: "Can your custom software integrate with our existing accounting or CRM tools?",
      answer:
        "Yes. We specialize in building secure API connectors with existing tools like Tally, Zoho, Salesforce, WhatsApp Cloud API, payment gateways, and custom database servers.",
    },
  ],
};
