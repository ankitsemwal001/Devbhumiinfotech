export interface StatItem {
  value: string;
  label: string;
  sublabel?: string;
}

/**
 * Single source of truth for verified company metrics.
 * Rules:
 * - Only confirmed, verifiable facts.
 * - No unverified claims ("7 years", "120+ clients", "15+ awards", "10+ experts").
 */
export const verifiedStats: StatItem[] = [
  {
    value: "20+",
    label: "Projects Delivered",
    sublabel: "Websites, software & automations",
  },
  {
    value: "50+",
    label: "Clients Served",
    sublabel: "Uttarakhand, Pan-India & Global",
  },
  {
    value: "4",
    label: "Specialist Teams",
    sublabel: "AI, Software, Web, Growth",
  },
  {
    value: "Uttarakhand",
    label: "Rooted in Rishikesh",
    sublabel: "Serving nationwide & global clients",
  },
];
