export interface FAQItem {
  id: number;
  question: string;
  answer: string;
  category?: string;
  pending?: boolean; // If pending owner verification, suppressed from live UI & Schema
}

export const siteFAQs: FAQItem[] = [
  {
    id: 1,
    question: "What core services does Devbhoomi Infotech provide?",
    answer:
      "We provide four core technology services: AI & business automation (chatbots, n8n workflows), custom software and SaaS development, responsive website design & web development, and digital growth (technical SEO, local SEO, and generative engine optimisation).",
    pending: false,
  },
  {
    id: 2,
    question: "Do you work with clients outside Uttarakhand?",
    answer:
      "Yes. While we are rooted in Rishikesh, Uttarakhand, our engineering and digital growth teams serve clients across India and take on select international projects remotely through structured digital collaboration.",
    pending: false,
  },
  {
    id: 3,
    question: "How does a typical project begin?",
    answer:
      "Every project begins with a structured discovery consultation. We review your business requirements, analyze existing processes or websites, and prepare a written scope outline with clear timelines before starting development.",
    pending: false,
  },
  {
    id: 4,
    question: "How is project pricing calculated?",
    answer:
      "Website packages start from ₹15,000 for standard small-business sites, with comprehensive multi-page platforms starting from ₹40,000. Custom software, AI automation pipelines, and ongoing SEO retainers are quoted individually based on technical scope and required integrations.",
    pending: false,
  },
  {
    id: 5,
    question: "Do you engineer custom software and SaaS applications?",
    answer:
      "Yes. We build full-stack web applications, business dashboards, and SaaS platforms using modern technologies such as Next.js, React, Node.js, and cloud database architectures tailored to specific company workflows.",
    pending: false,
  },
  {
    id: 6,
    question: "What is Generative Engine Optimisation (GEO) and why is it important?",
    answer:
      "Generative Engine Optimisation (GEO) structures your website content, schema, and entity citations so that AI-powered search engines (like Google AI Overviews and ChatGPT) can easily understand and recommend your business in answers.",
    pending: false,
  },
  {
    id: 7,
    question: "What ongoing maintenance and support is provided after launch?",
    answer:
      "We provide post-launch verification, deployment assistance, and handover documentation. Ongoing maintenance retainers and technical support packages are tailored to each client's operational requirements.",
    pending: false,
  },
  {
    id: 8,
    question: "What are your standard support and communication hours?",
    answer:
      "Our team is available Monday through Saturday from 09:30 AM to 06:30 PM IST for project consultations, progress updates, and support.",
    pending: false,
  },
];

export function getLiveFAQs(): FAQItem[] {
  return siteFAQs.filter((faq) => !faq.pending);
}
