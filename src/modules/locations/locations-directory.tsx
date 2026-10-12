"use client";

import React from "react";
import Link from "next/link";
import { MapPin, ArrowRight, Building2, CheckCircle2 } from "lucide-react";

interface CityCardData {
  name: string;
  slug: string;
  presenceLabel: string;
  isHq: boolean;
  district: string;
  description: string;
  links: Array<{
    title: string;
    href: string;
  }>;
}

const PUBLISHED_CITIES: CityCardData[] = [
  {
    name: "Rishikesh",
    slug: "rishikesh",
    presenceLabel: "Operational Headquarters",
    isHq: true,
    district: "Dehradun District",
    description:
      "Our physical office and technical team base. Serving yoga teacher training academies, riverside resorts, retreat centers, and adventure travel agencies.",
    links: [
      {
        title: "Website Design in Rishikesh",
        href: "/website-design-services-in-rishikesh-uttarakhand/",
      },
      {
        title: "Web Development in Rishikesh",
        href: "/web-development-services-in-rishikesh-uttarakhand/",
      },
      {
        title: "SEO Services in Rishikesh",
        href: "/seo-services-in-rishikesh/",
      },
      {
        title: "AI Automation in Rishikesh",
        href: "/ai-automation-in-rishikesh/",
      },
    ],
  },
  {
    name: "Dehradun",
    slug: "dehradun",
    presenceLabel: "Service Area",
    isHq: false,
    district: "Doon Valley",
    description:
      "Based in Rishikesh, serving organizations across Dehradun. Focused solutions for educational academies, IT Park firms, private medical clinics, and commercial brands.",
    links: [
      {
        title: "Website Design in Dehradun",
        href: "/website-design-in-dehradun/",
      },
      {
        title: "Web Development in Dehradun",
        href: "/web-development-in-dehradun/",
      },
      {
        title: "SEO Services in Dehradun",
        href: "/seo-services-in-dehradun/",
      },
      {
        title: "AI Automation in Dehradun",
        href: "/ai-automation-in-dehradun/",
      },
    ],
  },
  {
    name: "Haridwar",
    slug: "haridwar",
    presenceLabel: "Service Area",
    isHq: false,
    district: "Haridwar District",
    description:
      "Based in Rishikesh, serving commercial enterprises in Haridwar. Tailored digital infrastructure for industrial manufacturers in SIDCUL, B2B distributors, and pilgrimage hospitality.",
    links: [
      {
        title: "Website Design in Haridwar",
        href: "/website-design-in-haridwar/",
      },
      {
        title: "Web Development in Haridwar",
        href: "/web-development-in-haridwar/",
      },
      {
        title: "SEO Services in Haridwar",
        href: "/seo-services-in-haridwar/",
      },
      {
        title: "AI Automation in Haridwar",
        href: "/ai-automation-in-haridwar/",
      },
    ],
  },
];

export function LocationsDirectory() {
  return (
    <div className="w-full">
      <div className="text-center max-w-3xl mx-auto mb-12">
        <h2 className="text-xs sm:text-sm font-bold tracking-widest text-blue-400 uppercase mb-3">
          Verified Service Hubs
        </h2>
        <p className="text-2xl sm:text-3xl font-extrabold text-white">
          Active Locations & Practice Offerings
        </p>
      </div>

      <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
        {PUBLISHED_CITIES.map((city) => (
          <div
            key={city.slug}
            className="rounded-3xl bg-slate-900/60 border border-slate-800 p-8 flex flex-col justify-between hover:border-slate-700 transition-colors"
          >
            <div>
              <div className="flex items-center justify-between gap-4 mb-4">
                <span
                  className={`px-3 py-1 rounded-full text-xs font-semibold ${
                    city.isHq
                      ? "bg-emerald-500/15 border border-emerald-500/30 text-emerald-400"
                      : "bg-blue-500/15 border border-blue-500/30 text-blue-400"
                  }`}
                >
                  {city.presenceLabel}
                </span>
                <span className="text-xs text-slate-400">{city.district}</span>
              </div>

              <div className="flex items-center gap-3 mb-4">
                <div className="w-10 h-10 rounded-xl bg-slate-800 flex items-center justify-center text-blue-400">
                  {city.isHq ? <Building2 className="w-5 h-5" /> : <MapPin className="w-5 h-5" />}
                </div>
                <h3 className="text-2xl font-bold text-white">{city.name}</h3>
              </div>

              <p className="text-sm text-slate-300 leading-relaxed mb-6">{city.description}</p>
            </div>

            <div className="pt-6 border-t border-slate-800/80">
              <div className="text-xs font-semibold text-slate-400 uppercase tracking-wider mb-3">
                Available Practice Pages:
              </div>
              <ul className="space-y-2.5">
                {city.links.map((link) => (
                  <li key={link.href}>
                    <Link
                      href={link.href}
                      className="group flex items-center justify-between text-xs sm:text-sm font-medium text-slate-200 hover:text-blue-400 transition-colors p-2 rounded-lg hover:bg-slate-800/40"
                    >
                      <span className="flex items-center gap-2">
                        <CheckCircle2 className="w-3.5 h-3.5 text-emerald-400 shrink-0" />
                        <span>{link.title}</span>
                      </span>
                      <ArrowRight className="w-3.5 h-3.5 text-slate-500 group-hover:text-blue-400 group-hover:translate-x-1 transition-all" />
                    </Link>
                  </li>
                ))}
              </ul>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}
