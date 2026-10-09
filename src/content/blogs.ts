export interface BlogPost {
  id: number;
  title: string;
  excerpt: string;
  category: string;
  author: string;
  date: string;
  image: string;
  slug: string;
  content?: string;
}

export const blogPosts: BlogPost[] = [
  {
    id: 1,
    title: "Complete Guide to Technical SEO in 2026",
    excerpt:
      "Master the fundamentals of technical SEO and boost your website's search visibility with proven strategies.",
    category: "SEO",
    author: "Devbhoomi SEO Team",
    date: "Jan 15, 2026",
    image: "/images/custom-blog-editor-dashboard.webp",
    slug: "technical-seo-2026",
    content:
      "Technical SEO is the foundation of digital search dominance. Learn how site structure, Core Web Vitals, JSON-LD Schema, and mobile-first indexing can catapult your business rankings in Rishikesh and nationwide.",
  },
  {
    id: 2,
    title: "How AI Chatbots Transform Customer Support",
    excerpt:
      "Discover how intelligent chatbots can reduce support costs while improving customer satisfaction and response times.",
    category: "AI",
    author: "AI Automation Team",
    date: "Jan 12, 2026",
    image: "/images/best-n8n-ai-workflow-services-in-rishikesh.webp",
    slug: "ai-chatbots-customer-support",
    content:
      "Modern AI assistants and automated WhatsApp workflows enable businesses to engage potential clients 24/7 without growing operational overhead.",
  },
  {
    id: 3,
    title: "Building Scalable Web Applications",
    excerpt:
      "Best practices for architecting web applications that can scale with your business growth and user demands.",
    category: "Web Dev",
    author: "Engineering Team",
    date: "Jan 10, 2026",
    image: "/images/yoga-wellness-website-template-dark-green.webp",
    slug: "scalable-web-applications",
    content:
      "Scalable web architecture combines Next.js Server Components, lightweight state management, edge deployment, and clean code principles.",
  },
  {
    id: 4,
    title: "SEO Best Practices for E-commerce Sites",
    excerpt:
      "Comprehensive guide to optimizing your e-commerce website for search engines and driving qualified traffic.",
    category: "SEO",
    author: "Devbhoomi SEO Team",
    date: "Jan 8, 2026",
    image: "/images/devbhoomi-infotech-hotel-resort-website-rishikesh.webp",
    slug: "ecommerce-seo-best-practices",
    content:
      "Drive consistent organic revenue with targeted category keyword optimization, fast checkout funnels, and structured product reviews.",
  },
  {
    id: 5,
    title: "Digital Marketing Trends to Watch in 2026",
    excerpt:
      "Stay ahead of the curve with insights into the most important digital marketing trends this year.",
    category: "Digital Marketing",
    author: "Marketing Strategist",
    date: "Jan 5, 2026",
    image: "/images/school-college-website-rishikesh.webp",
    slug: "digital-marketing-trends-2026",
    content:
      "From hyper-targeted local geo-campaigns to conversational AI search, explore the strategies driving maximum ROI for companies.",
  },
];
