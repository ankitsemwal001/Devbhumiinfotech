import locationsData from "../../../locations.json";
import { siteConfig } from "@/config/site";
import { GeoServiceItem, GeoLocationItem } from "./index";
import { getLocationFacts } from "./location-facts";

export interface GeoFeature {
  title: string;
  description: string;
  points: string[];
}

export interface GeoFAQ {
  question: string;
  answer: string;
}

export interface GeoPageData {
  slug: string;
  canonicalUrl: string;
  metaTitle: string;
  metaDescription: string;
  keywords: string[];
  h1: string;
  service: GeoServiceItem;
  location: GeoLocationItem;
  heroBadge: string;
  heroDescription: string;
  overviewAnswer: string;
  keyFacts: {
    turnaround: string;
    techStack: string;
    pricingModel: string;
    coverage: string;
  };
  features: GeoFeature[];
  processSteps: Array<{
    step: string;
    title: string;
    description: string;
  }>;
  localContext: {
    industryFocus: string[];
    locationSummary: string;
    whyLocalAdvantage: string;
  };
  faqs: GeoFAQ[];
  relatedServices: Array<{
    name: string;
    slug: string;
    path: string;
  }>;
  relatedLocations: Array<{
    name: string;
    slug: string;
    path: string;
    type: string;
  }>;
}

export const EXCLUDED_GEO_COMBOS = new Set([
  "website-design-in-rishikesh",
  "web-development-in-rishikesh",
]);

// Hand-tailored service blueprints per city to ensure genuine uniqueness (Jaccard similarity <= 0.55)
function getServiceBlueprint(service: GeoServiceItem, location: GeoLocationItem) {
  const s = service.slug;
  const loc = location.name;
  const isHQ = location.presence === "hq";
  const presenceIntro = isHQ
    ? `Headquartered in Rishikesh, Devbhoomi Infotech provides professional ${service.name.toLowerCase()} for organizations in ${loc}.`
    : `Based in Rishikesh, serving businesses in ${loc}, Devbhoomi Infotech provides focused ${service.name.toLowerCase()} tailored to local industry needs.`;

  if (s === "website-design") {
    if (location.slug === "dehradun") {
      return {
        heroBadge: `Website Design for Dehradun Organizations`,
        heroDescription: `Custom responsive website design for educational institutions, IT Park firms, private clinics, and commercial businesses across Dehradun and the Doon Valley.`,
        overviewAnswer: `${presenceIntro} We build modern, mobile-friendly websites designed for clear navigation, fast loading, and structured inquiry generation. From Rajpur Road to IT Park, we tailor visual hierarchies to match student admissions, patient inquiries, and corporate client evaluations.`,
        turnaround: "Available upon project scoping",
        techStack: "Next.js, React, Tailwind CSS, TypeScript",
        pricingModel: "Transparent project quotation based on confirmed page count",
        features: [
          {
            title: "Structured Layouts for Doon Valley Institutions",
            description: "Information architecture tailored for colleges, schools, and professional firms that require clear course catalogs, service outlines, and enrollment guidelines.",
            points: ["Admissions & prospectus inquiry funnels", "Faculty & department directory layouts", "Accessible mobile responsive layouts"],
          },
          {
            title: "Corporate & Technology UI/UX Standards",
            description: "Clean, modern design systems built for software firms and consultancies operating across Dehradun's commercial centers.",
            points: ["Modular component design", "Clear service breakdowns", "Conversion-focused contact actions"],
          },
          {
            title: "Mobile Usability for Everyday Commuters",
            description: "Responsive layouts optimized for fast browsing across smartphones and tablets throughout the Doon region.",
            points: ["Quick-loading mobile navigation", "Touch-friendly interface elements", "Tested on standard mobile screen sizes"],
          },
          {
            title: "Direct WhatsApp & Form Inquiries",
            description: "Action-oriented contact components that allow prospective clients in Dehradun to connect quickly with your administrative team.",
            points: ["Direct messaging triggers", "Structured consultation forms", "Click-to-call phone buttons"],
          },
        ],
        processSteps: [
          { step: "01", title: "Institutional & Business Discovery", description: "Reviewing your Dehradun organization's goals, target student or client audience, and functional specifications." },
          { step: "02", title: "Wireframing & Interface Architecture", description: "Designing structural page wireframes focused on content hierarchy and intuitive user journeys." },
          { step: "03", title: "Frontend Implementation", description: "Converting approved designs into clean, responsive Next.js frontend components." },
          { step: "04", title: "Cross-Device QA & Launch", description: "Testing responsive layouts across modern mobile and desktop browsers prior to production deployment." },
        ],
        faqs: [
          {
            question: "How do you coordinate design reviews with clients in Dehradun?",
            answer: "We share interactive staging previews online and hold video review calls. Because our primary team is based in nearby Rishikesh, we can also arrange in-person planning sessions in Dehradun when necessary.",
          },
          {
            question: "Can you redesign an existing Dehradun school or corporate website?",
            answer: "Yes. We rebuild legacy websites into clean, modern architectures while retaining existing domain authority and organizing outdated content into logical user pathways.",
          },
        ],
      };
    }

    if (location.slug === "haridwar") {
      return {
        heroBadge: `Website Design for Haridwar Businesses`,
        heroDescription: `Professional UI/UX and website design for industrial manufacturers in SIDCUL, pharmaceutical plants, and pilgrimage hospitality across Haridwar.`,
        overviewAnswer: `${presenceIntro} We create robust web presentations engineered for B2B industrial procurement and high-volume pilgrimage travel inquiries. Our designs emphasize technical product clarity for SIDCUL suppliers and direct room booking actions for hotels near Har Ki Pauri.`,
        turnaround: "Available upon project scoping",
        techStack: "Next.js, React, Tailwind CSS, TypeScript",
        pricingModel: "Transparent project quotation based on confirmed page count",
        features: [
          {
            title: "B2B Product & Machinery Catalog Layouts",
            description: "Detailed catalog interfaces for manufacturing units in SIDCUL and BHEL Ranipur showcasing product specs, certifications, and RFQ forms.",
            points: ["Downloadable technical spec sheets", "RFQ inquiry submission forms", "ISO certification trust badges"],
          },
          {
            title: "Pilgrimage Hospitality & Room Showcases",
            description: "Visual layouts for hotels and dharamshalas near Har Ki Pauri highlighting room categories, seasonal tariffs, and direct booking buttons.",
            points: ["High-clarity photo galleries", "Location & ghat proximity guides", "1-tap phone and WhatsApp buttons"],
          },
          {
            title: "Lightweight Architecture for Varied Networks",
            description: "Pages engineered to load smoothly even on mobile connections across busy commercial and industrial zones.",
            points: ["Optimized image delivery", "Lean CSS and HTML structure", "Fast interaction feedback"],
          },
          {
            title: "Wholesale & Distributor Lead Capture",
            description: "Dedicated inquiry sections designed for Ayurvedic medicine distributors and FMCG wholesalers seeking regional partners.",
            points: ["Distributor application forms", "Bulk purchase inquiry routing", "Direct sales team triggers"],
          },
        ],
        processSteps: [
          { step: "01", title: "Industrial & Commercial Scoping", description: "Understanding your Haridwar facility's product catalog, B2B buyer profiles, or guest inquiry requirements." },
          { step: "02", title: "Catalog & Layout Prototyping", description: "Designing responsive page layouts emphasizing technical credibility and inquiry conversion." },
          { step: "03", title: "Component Development", description: "Building accessible web pages with structured metadata, clear forms, and responsive tables." },
          { step: "04", title: "Verification & Deployment", description: "Validating form submissions and mobile responsiveness across devices before final handover." },
        ],
        faqs: [
          {
            question: "Can you create digital product catalogs for SIDCUL manufacturing companies?",
            answer: "Yes. We design structured B2B catalog interfaces that allow industrial buyers to review technical specifications, download brochures, and submit requests for quotation.",
          },
          {
            question: "How do your designs support hotels and guest houses in Haridwar?",
            answer: "We build intuitive hospitality pages that prominently display room categories, proximity to Har Ki Pauri and transit hubs, and direct WhatsApp booking buttons to reduce third-party commissions.",
          },
        ],
      };
    }
  }

  if (s === "web-development") {
    if (location.slug === "dehradun") {
      return {
        heroBadge: `Web Development for Dehradun Enterprises`,
        heroDescription: `Custom full-stack web applications, student portals, and secure business dashboards engineered for institutions and enterprises in Dehradun.`,
        overviewAnswer: `${presenceIntro} We develop scalable web applications using Next.js, Node.js, and modern database architectures. Whether developing a student admission portal for a Dehradun academy or an internal operations tool for an IT firm, our codebases emphasize maintainability and performance.`,
        turnaround: "Available upon project scoping",
        techStack: "Next.js, Node.js, TypeScript, PostgreSQL",
        pricingModel: "Milestone-based project development",
        features: [
          {
            title: "Institutional Portals & Admissions Systems",
            description: "Custom web software for universities and training institutes to manage admissions inquiries, digital prospectuses, and student notices.",
            points: ["Role-based access permissions", "Secure form data storage", "Automated email notifications"],
          },
          {
            title: "Custom Dashboards & Internal Web Apps",
            description: "Bespoke internal platforms designed to streamline operational workflows and administrative reporting for Doon businesses.",
            points: ["Clean data tables & analytics", "CSV export and reporting tools", "Responsive admin interfaces"],
          },
          {
            title: "API Development & Third-Party Integrations",
            description: "Connecting your web application to payment processors, messaging gateways, and customer relationship systems.",
            points: ["Secure REST API endpoints", "Payment gateway integration", "Webhook automation triggers"],
          },
          {
            title: "Maintainable TypeScript Codebases",
            description: "Strictly typed architectures designed for long-term scalability without structural technical debt.",
            points: ["Strict TypeScript typing", "Modular component hierarchy", "Comprehensive code comments"],
          },
        ],
        processSteps: [
          { step: "01", title: "Technical Architecture Planning", description: "Defining database schemas, user roles, API specifications, and performance goals for your Dehradun application." },
          { step: "02", title: "Sprint-Based Development", description: "Developing frontend user interfaces and backend database services in modular iterations." },
          { step: "03", title: "Security & Integration QA", description: "Testing form validation, authentication flows, and API responsiveness under realistic conditions." },
          { step: "04", title: "Cloud Deployment & Handover", description: "Configuring production hosting, database backups, and delivering complete source code access." },
        ],
        faqs: [
          {
            question: "What technical frameworks do you employ for Dehradun web projects?",
            answer: "We primarily build with TypeScript, Next.js, React, and Node.js with PostgreSQL or MongoDB databases, hosted on reliable cloud providers.",
          },
          {
            question: "Can you build custom student or member management systems for Dehradun institutes?",
            answer: "Yes. We develop tailored management portals for student applications, membership directories, and certificate verification systems.",
          },
        ],
      };
    }

    if (location.slug === "haridwar") {
      return {
        heroBadge: `Web Development for Haridwar Industry`,
        heroDescription: `Robust B2B web applications, inventory inquiry portals, and custom operational platforms for manufacturers and enterprises in Haridwar.`,
        overviewAnswer: `${presenceIntro} We build secure, reliable web applications designed for industrial operations in SIDCUL and commercial enterprises across Haridwar. Our engineering focuses on stable performance, robust database modeling, and automated lead processing.`,
        turnaround: "Available upon project scoping",
        techStack: "Next.js, Node.js, TypeScript, PostgreSQL",
        pricingModel: "Milestone-based project development",
        features: [
          {
            title: "B2B Order & RFQ Management Portals",
            description: "Web software allowing industrial buyers to submit technical specifications, request bulk quotes, and track inquiry status.",
            points: ["Structured quote request forms", "Automated sales team alerts", "Inquiry tracking databases"],
          },
          {
            title: "Distributor & Dealer Directory Platforms",
            description: "Interactive directory systems for pharmaceutical and FMCG manufacturers to manage verified stockists and regional dealers.",
            points: ["Geo-searchable dealer directories", "Distributor onboarding flows", "Protected dealer resource areas"],
          },
          {
            title: "Direct Hospitality Booking Engines",
            description: "Direct reservation and inquiry systems for hotels and pilgrim accommodations near Har Ki Pauri to manage bookings without commission fees.",
            points: ["Room availability calendars", "Direct inquiry processing", "Automated SMS/WhatsApp alerts"],
          },
          {
            title: "Secure Cloud Database Architecture",
            description: "Enterprise database configurations with automated backups and encrypted client communication.",
            points: ["Relational data modeling", "Encrypted connection protocols", "Automated scheduled backups"],
          },
        ],
        processSteps: [
          { step: "01", title: "Operational Flow Mapping", description: "Documenting industrial quote flows, dealer communication needs, or guest reservation paths in Haridwar." },
          { step: "02", title: "Database & Backend Engineering", description: "Building data schemas, API connections, and automated notification routines." },
          { step: "03", title: "Frontend Implementation & Testing", description: "Developing responsive interfaces and conducting functional QA across devices." },
          { step: "04", title: "Production Setup & Training", description: "Deploying to cloud infrastructure and walking your team through system administration." },
        ],
        faqs: [
          {
            question: "Can you build custom quotation portals for industrial plants in Haridwar?",
            answer: "Yes. We create customized B2B portals where clients can configure product requirements, upload technical specifications, and receive automated quote confirmations.",
          },
          {
            question: "How do you ensure data security for our Haridwar manufacturing firm?",
            answer: "We implement modern security practices including HTTPS encryption, secure database authentication, parameterized SQL queries, and automated backups.",
          },
        ],
      };
    }
  }

  if (s === "seo-services") {
    if (location.slug === "rishikesh") {
      return {
        heroBadge: `Search Optimization in Rishikesh`,
        heroDescription: `Strategic search engine optimization for yoga teacher training schools, wellness ashrams, luxury resorts, and adventure travel agencies in Rishikesh.`,
        overviewAnswer: `${presenceIntro} We optimize web visibility to attract high-intent wellness travelers, international yoga students, and domestic adventure tourists. Our SEO methodology focuses on technical crawl health, structured schema, and localized search improvements.`,
        turnaround: "Available upon project scoping",
        techStack: "Google Search Console, GA4, Schema.org, Screaming Frog",
        pricingModel: "Structured monthly optimization engagement",
        features: [
          {
            title: "Wellness & Yoga School Search Strategy",
            description: "Targeting high-intent search queries from domestic and international students searching for certified yoga teacher training (YTT) programs in Rishikesh.",
            points: ["YTT course keyword research", "International search intent targeting", "Course curriculum content structure"],
          },
          {
            title: "Google Business Profile Optimization",
            description: "Enhancing local map signals and profile completeness for yoga ashrams, river camps, and wellness centers in Tapovan and Swarg Ashram.",
            points: ["Category & attribute refinement", "Local review management guidance", "Geotagged image updates"],
          },
          {
            title: "Technical SEO & Mobile Crawlability",
            description: "Fixing crawl roadblocks, improving page speed metrics, and implementing clean JSON-LD structured data.",
            points: ["Course & Organization schema", "Core Web Vitals improvements", "Clean canonical tag structure"],
          },
          {
            title: "Tourism & Adventure Search Intent",
            description: "Optimizing seasonal landing pages for rafting, trekking, and riverside camping queries across Uttarakhand.",
            points: ["Seasonal query calendar mapping", "Factual travel guide content", "Direct booking call-to-actions"],
          },
        ],
        processSteps: [
          { step: "01", title: "Rishikesh Market & Competitor Audit", description: "Evaluating existing search footprint against competing yoga schools and resorts in the valley." },
          { step: "02", title: "Technical & On-Page Fixes", description: "Refining title tags, header hierarchies, meta descriptions, and schema markup." },
          { step: "03", title: "Local Presence & Profile Tuning", description: "Auditing Google Business Profile signals, local business citations, and address consistency." },
          { step: "04", title: "Measurement & Ranking Tracking", description: "Monitoring organic impressions, keyword progression, and inquiry conversions via GA4 and Search Console." },
        ],
        faqs: [
          {
            question: "Can SEO help attract international yoga students to our Rishikesh school?",
            answer: "Yes. By optimizing for international search queries related to 200-hour and 300-hour yoga teacher training courses, we help global practitioners discover your authentic school on Google.",
          },
          {
            question: "How long does local SEO optimization take to demonstrate measurable traction in Rishikesh?",
            answer: "Local map profile updates and technical fixes often show initial indexing improvements within 4 to 8 weeks, while competitive international keywords typically require sustained multi-month optimization.",
          },
        ],
      };
    }

    if (location.slug === "dehradun") {
      return {
        heroBadge: `Search Optimization in Dehradun`,
        heroDescription: `Data-driven search engine optimization for educational institutions, healthcare centers, IT companies, and retail brands across Dehradun.`,
        overviewAnswer: `${presenceIntro} We help Doon Valley organizations improve their organic search visibility for high-commercial-intent local queries. From Rajpur Road to Clement Town, our technical and on-page optimization drives relevant inquiries.`,
        turnaround: "Available upon project scoping",
        techStack: "Google Search Console, GA4, Schema.org, Screaming Frog",
        pricingModel: "Structured monthly optimization engagement",
        features: [
          {
            title: "Educational & Institutional Keyword Targeting",
            description: "Capturing search demand from parents and students seeking admissions in Dehradun schools, colleges, and training academies.",
            points: ["Admissions search query mapping", "Course & prospectus page optimization", "Local Doon Valley citation building"],
          },
          {
            title: "Healthcare & Clinic Local Search Strategy",
            description: "Optimizing medical practices, dental clinics, and diagnostic labs to appear when patients search for local healthcare services.",
            points: ["Medical clinic schema markup", "Location page optimization", "Local map profile completeness"],
          },
          {
            title: "Technical Site Health & Fast Rendering",
            description: "Resolving site crawl issues, broken links, metadata deficiencies, and slow mobile loading times.",
            points: ["Structured data implementation", "Mobile rendering diagnostics", "Clean URL and canonical mapping"],
          },
          {
            title: "Commercial B2B Search Visibility",
            description: "Improving search presence for IT companies and service consultancies serving regional and national corporate clients.",
            points: ["Commercial intent mapping", "Detailed case study optimization", "B2B service category pages"],
          },
        ],
        processSteps: [
          { step: "01", title: "Doon Valley Market Analysis", description: "Assessing local competitor rankings, search volumes, and technical deficiencies across your site." },
          { step: "02", title: "On-Page SEO & Metadata Engineering", description: "Updating page titles, headings, and schema for Dehradun-focused commercial intent." },
          { step: "03", title: "Google Business Profile Refinement", description: "Standardizing local address details, service categories, and regional citation consistency." },
          { step: "04", title: "Analytics & Performance Reporting", description: "Reviewing organic click trends, keyword position changes, and inbound inquiry counts monthly." },
        ],
        faqs: [
          {
            question: "How do you help Dehradun businesses rank on Google Maps?",
            answer: "We optimize Google Business Profiles with accurate categories, verified address details, regular business updates, and consistent citations across recognized directories.",
          },
          {
            question: "Do you offer SEO audits for existing Dehradun websites?",
            answer: "Yes. We conduct thorough technical SEO audits that identify indexation errors, metadata gaps, slow-loading assets, and keyword cannibalization issues.",
          },
        ],
      };
    }

    if (location.slug === "haridwar") {
      return {
        heroBadge: `Search Optimization in Haridwar`,
        heroDescription: `Focused search engine optimization for industrial manufacturing suppliers in SIDCUL, pharmaceutical brands, and Haridwar hotels.`,
        overviewAnswer: `${presenceIntro} We build targeted SEO campaigns tailored to B2B manufacturing queries in SIDCUL and pilgrimage travel searches near Har Ki Pauri. Our approach balances technical search hygiene with localized commercial visibility.`,
        turnaround: "Available upon project scoping",
        techStack: "Google Search Console, GA4, Schema.org, Screaming Frog",
        pricingModel: "Structured monthly engagement",
        features: [
          {
            title: "B2B Industrial & Manufacturing Search Strategy",
            description: "Targeting engineering buyers and procurement officers searching for industrial components, packaging, and machinery in Haridwar.",
            points: ["Industrial product keyword research", "B2B catalog on-page optimization", "Specification sheet search visibility"],
          },
          {
            title: "Pilgrimage Hospitality & Travel Intent",
            description: "Capturing organic search queries from travelers planning visits to Har Ki Pauri, Kumbh grounds, and local temples.",
            points: ["Hotel & dharamshala local SEO", "Distance & travel guide optimization", "Google Maps location signals"],
          },
          {
            title: "Technical Hygiene & Schema.org Implementation",
            description: "Ensuring search engine crawlers accurately index your commercial catalog with structured JSON-LD data.",
            points: ["Product & LocalBusiness schema", "Mobile-friendly page audits", "XML sitemap architecture"],
          },
          {
            title: "Regional SIDCUL Industrial Citations",
            description: "Building consistent business listings across verified Indian industrial directories and local trade portals.",
            points: ["Industrial directory accuracy", "Consistent NAP (Name, Address, Phone)", "Regional trade portal references"],
          },
        ],
        processSteps: [
          { step: "01", title: "Haridwar Industry & Query Research", description: "Analyzing industrial product search volumes and pilgrimage travel search trends." },
          { step: "02", title: "Technical & On-Site Optimization", description: "Implementing clean schema markup, updating meta tags, and optimizing product pages." },
          { step: "03", title: "Local Presence & Profile Review", description: "Auditing Google Business Profile signals for industrial facilities and hotels." },
          { step: "04", title: "Monthly Performance Reviews", description: "Reporting on search impressions, keyword rank movements, and verified user inquiries." },
        ],
        faqs: [
          {
            question: "Can SEO generate industrial B2B leads for SIDCUL factories?",
            answer: "Yes. Many procurement managers search Google for regional suppliers, packaging manufacturers, and pharmaceutical formulation plants in Haridwar and Uttarakhand.",
          },
          {
            question: "How do you help hotels near Har Ki Pauri capture direct guests?",
            answer: "We optimize localized pages for pilgrimage search terms, enhance Google Business Profiles, and structure content to capture direct reservations rather than losing margins to aggregator apps.",
          },
        ],
      };
    }
  }

  if (s === "ai-automation") {
    if (location.slug === "rishikesh") {
      return {
        heroBadge: `AI & Workflow Automation in Rishikesh`,
        heroDescription: `Automate international student inquiries, booking confirmations, and guest communication for yoga schools and resorts in Rishikesh.`,
        overviewAnswer: `${presenceIntro} We build automated workflows that connect website inquiry forms, WhatsApp, email, and Google Sheets using tools like Make and Python. Our automations eliminate manual data entry and provide instant responses to prospective yoga students in different time zones.`,
        turnaround: "Available upon project scoping",
        techStack: "Python, Make, Webhooks, WhatsApp Cloud API",
        pricingModel: "Custom project quotation based on workflow complexity",
        features: [
          {
            title: "Automated International YTT Inquiry Handling",
            description: "Instantly acknowledge and qualify inquiries from yoga students worldwide, regardless of time zone differences.",
            points: ["Automated WhatsApp & email replies", "Course interest categorization", "Lead sync to Google Sheets or CRM"],
          },
          {
            title: "Resort & Camp Booking Confirmation Workflows",
            description: "Connect website reservation forms directly to messaging notifications and guest confirmation emails.",
            points: ["Automated itinerary dispatch", "Payment receipt notifications", "Internal staff task creation"],
          },
          {
            title: "Multi-Channel Notification Triggers",
            description: "Notify your reservations desk immediately whenever a high-intent booking inquiry is received.",
            points: ["Instant WhatsApp alert to team", "Email digests of daily leads", "Centralized inquiry logging"],
          },
          {
            title: "Repeat Task Elimination",
            description: "Remove manual copy-pasting of customer details between contact forms, spreadsheets, and marketing lists.",
            points: ["Error-free automated data sync", "Secure webhook connections", "Reliable execution logs"],
          },
        ],
        processSteps: [
          { step: "01", title: "Operational Bottleneck Review", description: "Mapping out repetitive communication and booking tasks currently handled manually by your Rishikesh team." },
          { step: "02", title: "Workflow Architecture Design", description: "Designing secure automation diagrams connecting your website forms to messaging tools and spreadsheets." },
          { step: "03", title: "Integration & Scenario QA", description: "Building workflow logic and thoroughly testing trigger reliability and error handling." },
          { step: "04", title: "Go-Live & Team Walkthrough", description: "Deploying active automations and demonstrating monitoring procedures to your staff." },
        ],
        faqs: [
          {
            question: "How does workflow automation help yoga schools dealing with international students?",
            answer: "Because prospective students often inquire from Europe, the Americas, or East Asia, automated systems acknowledge applications immediately, share syllabus details, and notify your admissions staff without delay.",
          },
          {
            question: "Do we need complex enterprise software to use automation in Rishikesh?",
            answer: "No. We connect tools you already use—such as Google Sheets, Gmail, WhatsApp Business, and your existing website forms—using secure webhooks.",
          },
        ],
      };
    }

    if (location.slug === "dehradun") {
      return {
        heroBadge: `AI & Workflow Automation in Dehradun`,
        heroDescription: `Streamline admissions inquiries, administrative data pipelines, and internal business tasks for organizations across Dehradun.`,
        overviewAnswer: `${presenceIntro} We develop automated data workflows for educational institutes, healthcare clinics, and commercial offices in Dehradun. By connecting CRM systems, communication channels, and databases, we eliminate clerical bottlenecks and accelerate response cycles.`,
        turnaround: "Available upon project scoping",
        techStack: "Python, Make, Webhooks, REST APIs",
        pricingModel: "Custom project quotation based on workflow complexity",
        features: [
          {
            title: "Institutional Admissions Inquiry Routing",
            description: "Automatically route student inquiries to specific academic departments and admissions counselors without manual delays.",
            points: ["Department-based inquiry sorting", "Automated prospectus delivery via email", "Counselor task assignment"],
          },
          {
            title: "Clinic & Diagnostic Appointment Scheduling Flows",
            description: "Automate appointment reminders and intake form deliveries for private healthcare practices across Dehradun.",
            points: ["Automated SMS and WhatsApp reminders", "Patient intake form collection", "Calendar appointment sync"],
          },
          {
            title: "Cross-System CRM & Database Synchronization",
            description: "Keep client records, billing entries, and sales opportunities synchronized between your web platforms and administrative software.",
            points: ["Secure webhook data payloads", "Two-way record synchronization", "Automated daily discrepancy alerts"],
          },
          {
            title: "Document Parsing & Data Extraction",
            description: "Extract structured data from standard forms and incoming applications into searchable spreadsheets.",
            points: ["Reduced manual typing errors", "Standardized file storage", "Instant notification of incomplete files"],
          },
        ],
        processSteps: [
          { step: "01", title: "Administrative Process Audit", description: "Reviewing daily manual data handling and communication bottlenecks across your Dehradun operations." },
          { step: "02", title: "Automation Blueprinting", description: "Defining system integration triggers, conditional rules, and data security boundaries." },
          { step: "03", title: "Development & Edge-Case Testing", description: "Connecting APIs and testing edge cases such as duplicate submissions or missing fields." },
          { step: "04", title: "Handover & Administrative Training", description: "Documenting automated flows and training your administrative staff on operation." },
        ],
        faqs: [
          {
            question: "Can automations integrate with our existing database or spreadsheets in Dehradun?",
            answer: "Yes. We configure webhooks and API connections that seamlessly link your website with tools like Google Sheets, Airtable, or internal SQL databases.",
          },
          {
            question: "What happens if an automated workflow encounters an error?",
            answer: "We build automated error-notification fallbacks so that if a service is temporarily unreachable, an alert is dispatched and the data payload is preserved for retrial.",
          },
        ],
      };
    }

    if (location.slug === "haridwar") {
      return {
        heroBadge: `Industrial Automation Workflows in Haridwar`,
        heroDescription: `Automate procurement inquiry routing, distributor notifications, and inventory updates for manufacturing plants in Haridwar and SIDCUL.`,
        overviewAnswer: `${presenceIntro} We engineer automated data pipelines for industrial manufacturers and regional commercial firms in Haridwar. Our workflows bridge website quote requests, email systems, and operational trackers to ensure timely commercial responses.`,
        turnaround: "Available upon project scoping",
        techStack: "Python, Make, Webhooks, REST APIs",
        pricingModel: "Custom project quotation based on workflow complexity",
        features: [
          {
            title: "B2B Quote Request (RFQ) Routing",
            description: "Direct incoming industrial inquiries to appropriate sales managers based on product category, order volume, or delivery geography.",
            points: ["Product-specific sales alerts", "Instant RFQ acknowledgment to buyers", "Logging in central order spreadsheets"],
          },
          {
            title: "Distributor & Wholesaler Communication Flows",
            description: "Automate stock notification updates and price list distribution to authorized distributors across Northern India.",
            points: ["Automated catalog broadcast triggers", "Distributor inquiry verification", "Order confirmation notices"],
          },
          {
            title: "Operational Status Alerts",
            description: "Trigger real-time notifications to team leads when critical operational events or urgent customer requests occur.",
            points: ["Email and SMS dispatch", "Lead aging alerts", "Automated daily executive summaries"],
          },
          {
            title: "Elimination of Manual Entry Errors",
            description: "Ensure customer contact details and order quantities flow cleanly from online forms to internal spreadsheets.",
            points: ["Standardized data formats", "Zero double-entry mistakes", "Audit logs for every transaction"],
          },
        ],
        processSteps: [
          { step: "01", title: "Industrial Workflow Assessment", description: "Reviewing how your Haridwar facility currently receives, logs, and processes commercial inquiries." },
          { step: "02", title: "Data Pipeline Mapping", description: "Drafting the integration pathway between public inquiry touchpoints and your internal team systems." },
          { step: "03", title: "System Connection & Verification", description: "Configuring webhook endpoints, testing data payload formatting, and verifying alerts." },
          { step: "04", title: "Deployment & Team Briefing", description: "Putting workflows into production and briefing your sales and admin personnel." },
        ],
        faqs: [
          {
            question: "Can you automate RFQ routing for manufacturing companies in SIDCUL?",
            answer: "Yes. When a buyer submits a request for quotation on your website, our system can immediately extract the details, log them to a secure spreadsheet, and alert the relevant product manager.",
          },
          {
            question: "Is our business data secure when using automated workflows?",
            answer: "Yes. We use direct, encrypted API connections and webhooks with strict authentication parameters, ensuring your internal data remains private.",
          },
        ],
      };
    }
  }

  // Fallback blueprint
  return {
    heroBadge: `${service.name} in ${loc}`,
    heroDescription: `Professional ${service.name.toLowerCase()} for businesses across ${loc}, Uttarakhand.`,
    overviewAnswer: `${presenceIntro} We provide tailored digital solutions designed to support organizations in ${loc}.`,
    turnaround: "Available upon project scoping",
    techStack: "Modern Web Technologies",
    pricingModel: "Custom project quotation",
    features: [],
    processSteps: [],
    faqs: [],
  };
}

/**
 * Returns structured GeoPageData for a given service and location
 */
export function getGeoPageData(
  serviceSlug: string,
  locationSlug: string
): GeoPageData | null {
  const service = (locationsData.services as GeoServiceItem[]).find(
    (s) => s.slug === serviceSlug
  );
  const location = (locationsData.locations as GeoLocationItem[]).find(
    (l) => l.slug.toLowerCase() === locationSlug.toLowerCase()
  );

  if (!service || !location || !service.geoEnabled || !location.published) {
    return null;
  }

  const pageSlug = `${service.slug}-in-${location.slug}`;
  if (EXCLUDED_GEO_COMBOS.has(pageSlug)) {
    return null;
  }

  const canonicalUrl = `${siteConfig.url}/${pageSlug}/`;
  const blueprint = getServiceBlueprint(service, location);
  const facts = getLocationFacts(location.slug);

  const metaTitle = `${service.h1Noun} in ${location.name} | Devbhoomi Infotech`;
  const metaDescription = `${service.h1Noun} in ${location.name}, Uttarakhand. Professional ${service.name.toLowerCase()} tailored for businesses and organizations in ${location.name}. Contact us for details.`;

  const keywords = [
    `${service.name.toLowerCase()} in ${location.name.toLowerCase()}`,
    `${service.h1Noun.toLowerCase()} in ${location.name.toLowerCase()}`,
    `${service.name.toLowerCase()} ${location.district.toLowerCase()}`,
    `${service.name.toLowerCase()} uttarakhand`,
  ];

  // Related services in the same location (only geo-enabled services valid for this location)
  const geoEnabledServices = (locationsData.services as GeoServiceItem[]).filter(
    (s) => s.geoEnabled && s.slug !== service.slug
  );

  const relatedServices = geoEnabledServices.map((s) => {
    // If it's rishikesh and matches a legacy URL, point to the legacy URL
    if (location.slug === "rishikesh" && s.slug === "website-design") {
      return {
        name: s.name,
        slug: s.slug,
        path: `/website-design-services-in-rishikesh-uttarakhand/`,
      };
    }
    if (location.slug === "rishikesh" && s.slug === "web-development") {
      return {
        name: s.name,
        slug: s.slug,
        path: `/web-development-services-in-rishikesh-uttarakhand/`,
      };
    }
    return {
      name: s.name,
      slug: s.slug,
      path: `/${s.slug}-in-${location.slug}/`,
    };
  });

  // Related locations for the same service (only published locations where this service is published)
  const publishedLocations = (locationsData.locations as GeoLocationItem[]).filter(
    (l) => l.published && l.slug !== location.slug
  );

  const relatedLocations = publishedLocations
    .filter((l) => !EXCLUDED_GEO_COMBOS.has(`${service.slug}-in-${l.slug}`))
    .map((l) => ({
      name: l.name,
      slug: l.slug,
      path: `/${service.slug}-in-${l.slug}/`,
      type: l.type,
    }));

  // Combine hand-written local FAQs with service-specific FAQs
  const combinedFaqs: GeoFAQ[] = [
    ...blueprint.faqs,
    ...(facts?.localFaqs || []).slice(0, 2),
  ];

  const industryFocus = facts?.localBusinessTypes || [
    "Regional commercial enterprises",
    "Local service providers",
    "Hospitality and tourism businesses",
  ];

  const locationSummary = facts?.notes || `${location.name} is a key commercial center in ${location.district}, Uttarakhand.`;
  const whyLocalAdvantage = location.presence === "hq"
    ? `Headquartered in Rishikesh, we offer direct local accessibility, clear milestone consultations, and an understanding of regional business dynamics.`
    : `Based in Rishikesh, serving businesses in ${location.name}. We work with clients here remotely and on request in person.`;

  return {
    slug: pageSlug,
    canonicalUrl,
    metaTitle,
    metaDescription,
    keywords,
    h1: `${service.h1Noun} in ${location.name}, Uttarakhand`,
    service,
    location,
    heroBadge: blueprint.heroBadge,
    heroDescription: blueprint.heroDescription,
    overviewAnswer: blueprint.overviewAnswer,
    keyFacts: {
      turnaround: blueprint.turnaround,
      techStack: blueprint.techStack,
      pricingModel: blueprint.pricingModel,
      coverage: `${location.name}, ${location.district}, Uttarakhand`,
    },
    features: blueprint.features,
    processSteps: blueprint.processSteps,
    localContext: {
      industryFocus,
      locationSummary,
      whyLocalAdvantage,
    },
    faqs: combinedFaqs,
    relatedServices,
    relatedLocations,
  };
}

/**
 * Returns all valid geo slugs for generateStaticParams
 * Guaranteed to return exactly 10 slugs. Fails if count !== 10.
 */
export function getAllPublishedGeoSlugs(): Array<{ geoSlug: string }> {
  const publishedLocations = (locationsData.locations as GeoLocationItem[]).filter(
    (l) => l.published
  );
  const geoEnabledServices = (locationsData.services as GeoServiceItem[]).filter(
    (s) => s.geoEnabled
  );

  const params: Array<{ geoSlug: string }> = [];

  for (const service of geoEnabledServices) {
    for (const location of publishedLocations) {
      const geoSlug = `${service.slug}-in-${location.slug}`;
      if (EXCLUDED_GEO_COMBOS.has(geoSlug)) {
        continue;
      }
      params.push({ geoSlug });
    }
  }

  console.log(`[geo-engine] Generated exactly ${params.length} published geo slugs.`);

  if (params.length !== 10) {
    throw new Error(
      `[geo-engine] Expected exactly 10 published geo pages, but generated ${params.length}.`
    );
  }

  return params;
}

/**
 * Parses a geo slug into service and location identifiers
 */
export function parseGeoSlug(geoSlug: string): {
  serviceSlug: string;
  locationSlug: string;
} | null {
  const services = (locationsData.services as GeoServiceItem[]).filter((s) => s.geoEnabled);

  for (const s of services) {
    const prefix = `${s.slug}-in-`;
    if (geoSlug.startsWith(prefix)) {
      const locationSlug = geoSlug.slice(prefix.length);
      return {
        serviceSlug: s.slug,
        locationSlug,
      };
    }
  }

  return null;
}
