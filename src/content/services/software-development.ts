import { ServicePageData } from "@/types/service";

export const softwareDevelopmentService: ServicePageData = {
  slug: "software-development",
  title: "Software Development Services | Devbhoomi Infotech",
  metaTitle: "Software Development Company | Devbhoomi Infotech",
  metaDescription:
    "Engineering scalable web applications, bespoke business management software, cloud dashboards, and SaaS architectures with remote delivery worldwide.",
  canonicalUrl: "https://www.devbhoomiinfotech.com/services/software-development/",
  keywords: [
    "custom software development",
    "saas development company",
    "web application development",
    "business management software",
    "api integration services",
  ],
  heroBadge: "Custom Software & SaaS",
  heroHeading: {
    regular: "Custom Software Engineering for",
    highlight: "Growing Businesses",
  },
  heroDescription:
    "We architect robust web applications, internal operational software, cloud dashboards, and scalable SaaS platforms with 100% intellectual property transfer.",
  answerCapsule:
    "Custom software development is the engineering of tailored web applications, internal portals, and SaaS platforms built around specific business workflows. It is intended for growing businesses that need proprietary functionality, automated operational processes, or direct IP ownership without recurring third-party licensing fees.",
  atAGlance: {
    whatItIs: "Architecture, engineering, and maintenance of custom web applications, SaaS platforms, and internal business management portals.",
    typicalUseCases: [
      "Proprietary SaaS product engineering for startups and enterprises",
      "Internal operational portals, workflow managers, and custom ERPs",
      "High-throughput REST and GraphQL API development and integration",
      "Legacy software refactoring, performance optimization, and modernization",
    ],
    deliverables: [
      "Production-ready frontend and backend code repositories",
      "Normalized relational database schemas and API specifications",
      "Staging preview environments and production deployment setups",
      "Complete source code ownership and technical architecture documentation",
    ],
    typicalProcessLength: "6 to 16 weeks depending on system complexity and milestone scope.",
    engagementModel: "Milestone-based project quotes or dedicated engineering retainers.",
  },
  whoItsFor: {
    idealFor: [
      "Businesses with specialized workflows that standard off-the-shelf software cannot accommodate",
      "Entrepreneurs building multi-tenant SaaS products requiring dedicated data isolation",
      "Companies spending excessive sums on per-seat monthly subscriptions for generic platforms",
    ],
    notNeededWhen: [
      "An off-the-shelf SaaS tool solves over 90% of your requirements out of the box",
      "Your business process is not yet formalized or is undergoing weekly structural changes",
      "You require an instant deployment within 48 hours without development lead time",
    ],
  },
  subServicesDetailed: [
    {
      id: "custom-software",
      title: "Custom Software",
      definition:
        "Bespoke digital architecture engineered to solve distinct commercial bottlenecks with modular code, secure data isolation, and scalable database schemas.",
      deliverables: [
        "Full-stack web application code",
        "Role-based permission matrices",
        "Relational database architecture",
      ],
    },
    {
      id: "saas-product-development",
      title: "SaaS Product Development",
      definition:
        "Multi-tenant cloud platforms designed for commercial subscription distribution, equipped with recurring billing integration and administrative controls.",
      deliverables: [
        "Multi-tenant tenant isolation",
        "Payment gateway billing webhooks",
        "Super-admin system dashboards",
      ],
    },
    {
      id: "web-applications",
      title: "Web Applications",
      definition:
        "Responsive browser-based systems built with modern frameworks that provide desktop-grade speed, offline resilience, and interactive client workflows.",
      deliverables: [
        "Component-driven responsive interface",
        "State management and client caching",
        "Automated regression test coverage",
      ],
    },
    {
      id: "business-management-systems",
      title: "Business Management Systems",
      definition:
        "Internal ERPs, inventory monitors, and workflow trackers designed to unify distributed commercial teams and minimize manual human handoffs.",
      deliverables: [
        "Inventory and order tracking logs",
        "Automated PDF document generators",
        "Operational reporting dashboards",
      ],
    },
    {
      id: "api-development-integration",
      title: "API Development & Integration",
      definition:
        "Documented, secure REST and GraphQL endpoints linking internal applications with external payment providers, messaging APIs, and enterprise systems.",
      deliverables: [
        "OpenAPI / Swagger specifications",
        "Token-based authentication & rate limiting",
        "Webhook ingestion pipelines",
      ],
    },
    {
      id: "maintenance-modernisation",
      title: "Maintenance & Modernisation",
      definition:
        "Refactoring legacy monoliths, upgrading outdated dependencies, indexing database tables, and hardening cloud security configurations.",
      deliverables: [
        "Security and dependency audit reports",
        "Database query optimization plans",
        "Zero-downtime production cutovers",
      ],
    },
  ],
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
  lastUpdated: "2026-10-12",
  reviewedBy: "Devbhoomi Infotech",
};
