"use client";

import { useState } from "react";
import Image from "next/image";
import { ArrowRight, Check } from "lucide-react";

export function AboutSection() {
  const [activeTab, setActiveTab] = useState<"mission" | "vision" | "history">("history");

  const tabContent = {
    mission: {
      description:
        "Our mission is to help businesses build strong digital foundations through professionally designed websites and SEO-focused strategies that improve online visibility, user experience, and long-term growth across Rishikesh and Uttarakhand.",
      items: [
        "Web SEO Consulting",
        "Quality Web Services",
        "Maintenance And Support",
        "Requirements Gathering",
      ],
    },
    vision: {
      description:
        "Our vision is to empower businesses with modern websites and search engine optimized solutions that enhance digital presence, improve user engagement, and support sustainable growth across Rishikesh and Uttarakhand.",
      items: [
        "Modern Web Solutions",
        "Search Optimized Growth",
        "Reliable Support Services",
        "Link Building",
      ],
    },
    history: {
      description:
        "Devbhoomi Infotech was founded with a clear goal of helping local businesses establish a strong digital presence through high-quality websites and effective SEO strategies in Rishikesh and across Uttarakhand.",
      items: [
        "Local Business Support",
        "Proven Web Expertise",
        "Client-Focused Approach",
        "Continuous Digital Growth",
      ],
    },
  };

  const currentContent = tabContent[activeTab];

  return (
    <section id="about" className="py-16 md:py-20 px-4 sm:px-6 lg:px-8 bg-blue-50/70 dark:bg-gray-900/30 text-foreground relative">
      <div className="max-w-7xl mx-auto">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-10 lg:gap-16 items-center">
          {/* === Left Side - Image === */}
          <div className="relative mx-auto lg:mx-0 w-full max-w-[520px] aspect-[4/4.6] lg:aspect-auto lg:h-[580px] rounded-3xl lg:rounded-[48px] overflow-hidden shadow-xl">
            <Image
              src="/images/dbi-it-solution-about-us.webp"
              alt="About Devbhoomi Infotech"
              fill
              priority
              className="object-cover"
              sizes="(max-width: 1024px) 100vw, 520px"
            />
          </div>

          {/* === Right Side - Content === */}
          <div className="flex flex-col gap-7 md:gap-8">
            {/* Title & Badge */}
            <div className="space-y-4 md:space-y-5">
              <div className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full bg-blue-100/60 dark:bg-blue-900/20 border border-blue-200/60 dark:border-blue-800/40">
                <span className="w-2 h-2 rounded-full bg-blue-600 dark:bg-blue-400 animate-pulse" />
                <p className="text-xs sm:text-sm font-medium text-blue-700 dark:text-blue-300">
                 About Us
                </p>
              </div>

              <h2 className="text-3xl sm:text-4xl md:text-4xl lg:text-5xl font-bold leading-tight">
                Building the Future with State-of-the-Art IT Solutions
              </h2>
            </div>

            {/* Tabs */}
            <div className="flex flex-wrap gap-2.5 sm:gap-3">
              {(["mission", "vision", "history"] as const).map((tab) => (
                <button
                  key={tab}
                  onClick={() => setActiveTab(tab)}
                  className={`px-5 sm:px-6 py-2.5 sm:py-3 text-sm sm:text-base font-semibold rounded-full transition-all duration-300 ${
                    activeTab === tab
                      ? "bg-blue-600 text-white shadow-md"
                      : "bg-gray-200/80 dark:bg-gray-700/60 text-gray-700 dark:text-gray-200 hover:bg-gray-300 dark:hover:bg-gray-600"
                  }`}
                >
                  {tab === "mission" && "Our Mission"}
                  {tab === "vision" && "Our Vision"}
                  {tab === "history" && "Our History"}
                </button>
              ))}
            </div>

            {/* Content */}
            <div className="space-y-6">
              <p className="text-base sm:text-lg leading-relaxed text-muted-foreground">
                {currentContent.description}
              </p>

              {/* Checklist */}
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                {currentContent.items.map((item, index) => (
                  <div key={index} className="flex items-center gap-3">
                    <div className="flex h-8 w-8 shrink-0 items-center justify-center rounded-full bg-blue-100 dark:bg-blue-900/40">
                      <Check className="h-5 w-5 text-blue-600 dark:text-blue-400" />
                    </div>
                    <span className="text-base font-medium text-foreground">{item}</span>
                  </div>
                ))}
              </div>

              {/* CTA Button */}
              <div className="pt-4">
                <button className="group flex items-center gap-2 bg-blue-600 text-white px-6 py-3 rounded-xl font-semibold hover:bg-blue-700 transition-all duration-300 shadow-md hover:shadow-lg">
                  Discover More
                  <ArrowRight className="w-5 h-5 transition-transform group-hover:translate-x-1" />
                </button>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}