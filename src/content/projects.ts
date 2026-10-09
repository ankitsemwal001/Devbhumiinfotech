export interface Project {
  _id: string;
  title: string;
  description: string;
  image: string;
  category: "web" | "automation" | "seo";
  technologies: string[];
  liveLink?: string;
  codeLink?: string;
  challenge: string;
  solution: string;
}

export const portfolioProjects: Project[] = [
  {
    _id: "1",
    title: "Yoga Retreat & Wellness Website And digital Solution",
    description:
      "Complete website solution for yoga retreats and wellness centers in Rishikesh. We design, develop, and optimize yoga websites with booking systems, blogs, and full SEO.",
    image: "/images/yoga-wellness-website-template-dark-green.webp",
    category: "web",
    technologies: [
      "Custom Website Development",
      "On-Page SEO",
      "Responsive & Mobile-Friendly Design",
      "Technical SEO (Speed, Indexing, Schema)",
      "Online Booking & Inquiry System",
    ],
    challenge:
      "Yoga retreat businesses in Rishikesh need websites that build trust, rank on Google, and convert visitors into bookings.",
    solution:
      "We delivered a complete A–Z website solution with calm design, fast performance, SEO-optimized content, and local SEO to attract yoga students.",
  },
  {
    _id: "2",
    title: "School & College Website Development in Rishikesh",
    description:
      "Professional school and college website development services in Rishikesh. Ideal for educational institutions to showcase courses, admissions, faculty, and campus life.",
    image: "/images/school-college-website-rishikesh.webp",
    category: "web",
    technologies: [
      "Custom School & College Website",
      "Mobile-First Responsive Design",
      "Admissions & Inquiry Forms",
      "On-Page & Technical SEO",
      "Local SEO Optimization",
    ],
    challenge:
      "Schools and colleges in Rishikesh face challenges in online visibility, student admissions, and building trust with parents.",
    solution:
      "We developed a modern, SEO-optimized school and college website focused on admissions, academics, and campus life, with fast loading speed.",
  },
  {
    _id: "3",
    title: "Hotel & Resort Booking Website And digital Solution",
    description:
      "Complete hotel and resort website solution for businesses in Rishikesh. Includes room pages, pricing, photo galleries, booking inquiries, and SEO.",
    image: "/images/devbhoomi-infotech-hotel-resort-website-rishikesh.webp",
    category: "web",
    technologies: [
      "Custom Website Development",
      "Premium UI & Branding",
      "Room & Pricing Pages",
      "Booking & Inquiry Forms",
      "Technical SEO & Speed Optimization",
    ],
    challenge:
      "Hotels in Rishikesh depend too much on third-party booking platforms and need more direct bookings.",
    solution:
      "We created a premium hotel website with fast loading pages, SEO-optimized room content, and clear booking calls-to-action.",
  },
  {
    _id: "4",
    title: "Custom SEO Blog & Content Dashboard System",
    description:
      "Fully custom SEO blog and content dashboard that connects with any website. Ideal for businesses that want full control over blogs and SEO content.",
    image: "/images/custom-blog-editor-dashboard.webp",
    category: "seo",
    technologies: [
      "Custom CMS & Dashboard",
      "Dynamic Content Management",
      "SEO Content Controls",
      "Schema & Structured Data",
    ],
    challenge:
      "Businesses need SEO-friendly content management without slow and heavy CMS platforms.",
    solution:
      "We built a lightweight, fast, and scalable custom dashboard with SEO fields, schema automation, and easy publishing.",
  },
  {
    _id: "5",
    title: "Business Automation & AI Services And digital Solution",
    description:
      "Complete business automation and AI services in Rishikesh including lead automation, WhatsApp automation, email marketing, and AI workflows.",
    image: "/images/best-n8n-ai-workflow-services-in-rishikesh.webp",
    category: "automation",
    technologies: [
      "AI-Based Automation",
      "Workflow Automation",
      "CRM & Lead Automation",
      "WhatsApp Automation",
    ],
    challenge:
      "Manual work like lead follow-ups, message replies, and customer communication wastes time and money.",
    solution:
      "We delivered smart automation workflows using AI and n8n tools to handle leads, messages, and marketing tasks automatically.",
  },
];
