"use client";

import { useState } from "react";
import { ServiceAreaGroup } from "@/types/why-choose";
import {
  MapPin,
  Globe,
  Building2,
  Mountain,
  ChevronDown,
  ChevronUp,
  Search,
  Sparkles,
  Compass,
  CheckCircle2,
} from "lucide-react";
import { Button } from "@/components/ui/button";

interface ServiceAreasGridProps {
  heading?: string;
  subheading?: string;
  areas: ServiceAreaGroup[];
}

export function ServiceAreasGrid({
  heading,
  subheading,
  areas,
}: ServiceAreasGridProps) {
  const [selectedCategory, setSelectedCategory] = useState<string>("all");
  const [expandedCards, setExpandedCards] = useState<Record<string, boolean>>({});
  const [searchQuery, setSearchQuery] = useState<string>("");

  const toggleExpand = (region: string) => {
    setExpandedCards((prev) => ({
      ...prev,
      [region]: !prev[region],
    }));
  };

  const getRegionIcon = (region: string, category?: string) => {
    if (category === "international" || region.toLowerCase().includes("international") || region.toLowerCase().includes("global")) {
      return <Globe className="w-5 h-5 text-indigo-500 dark:text-indigo-400" />;
    }
    if (region.toLowerCase().includes("garhwal") || region.toLowerCase().includes("kumaon")) {
      return <Mountain className="w-5 h-5 text-emerald-500 dark:text-emerald-400" />;
    }
    if (region.toLowerCase().includes("dehradun") || region.toLowerCase().includes("pan-india")) {
      return <Building2 className="w-5 h-5 text-blue-500 dark:text-blue-400" />;
    }
    return <MapPin className="w-5 h-5 text-blue-600 dark:text-blue-400" />;
  };

  // Filter by category and search
  const filteredAreas = areas.filter((area) => {
    const matchesCategory =
      selectedCategory === "all" ||
      area.category === selectedCategory ||
      (selectedCategory === "uttarakhand" && (!area.category || area.category === "uttarakhand"));

    if (!matchesCategory) return false;

    if (!searchQuery.trim()) return true;

    const q = searchQuery.toLowerCase();
    const matchesRegion = area.region.toLowerCase().includes(q);
    const matchesDescription = area.description?.toLowerCase().includes(q);
    const matchesPlace = area.places.some((place) => place.toLowerCase().includes(q));

    return matchesRegion || matchesDescription || matchesPlace;
  });

  return (
    <section className="py-20 px-4 sm:px-6 lg:px-8 bg-slate-50/60 dark:bg-slate-950 border-t border-slate-200/80 dark:border-slate-800">
      <div className="max-w-7xl mx-auto">
        {/* Section Header */}
        <div className="text-center mb-12 space-y-4">
          <div className="inline-flex items-center gap-2 text-xs font-bold uppercase tracking-wider text-blue-600 dark:text-blue-400 bg-white dark:bg-slate-900 px-3.5 py-1.5 rounded-full border border-blue-200/80 dark:border-blue-900 shadow-xs">
            <Compass className="w-3.5 h-3.5" />
            <span>Service Coverage</span>
          </div>

          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-extrabold text-slate-900 dark:text-white ">
            {heading || "Areas We Serve — Uttarakhand, Pan-India & Global"}
          </h2>

          {subheading && (
            <p className="text-slate-600 dark:text-slate-400 max-w-3xl mx-auto text-sm sm:text-base leading-relaxed">
              {subheading}
            </p>
          )}

          {/* Category Filter Tabs & Quick Search */}
          <div className="flex flex-col sm:flex-row items-center justify-center gap-4 pt-4 max-w-3xl mx-auto">
            {/* Filter Pills */}
            <div className="flex flex-wrap items-center justify-center p-1.5 rounded-2xl bg-white dark:bg-slate-900 border border-slate-200/80 dark:border-slate-800 shadow-xs text-xs font-semibold">
              <button
                type="button"
                onClick={() => setSelectedCategory("all")}
                className={`px-4 py-2 rounded-xl transition-all ${
                  selectedCategory === "all"
                    ? "bg-blue-600 text-white shadow-xs"
                    : "text-slate-600 dark:text-slate-400 hover:text-slate-900 dark:hover:text-white"
                }`}
              >
                All Regions ({areas.length})
              </button>
              <button
                type="button"
                onClick={() => setSelectedCategory("uttarakhand")}
                className={`px-4 py-2 rounded-xl transition-all ${
                  selectedCategory === "uttarakhand"
                    ? "bg-blue-600 text-white shadow-xs"
                    : "text-slate-600 dark:text-slate-400 hover:text-slate-900 dark:hover:text-white"
                }`}
              >
                Uttarakhand (5)
              </button>
              <button
                type="button"
                onClick={() => setSelectedCategory("pan-india")}
                className={`px-4 py-2 rounded-xl transition-all ${
                  selectedCategory === "pan-india"
                    ? "bg-blue-600 text-white shadow-xs"
                    : "text-slate-600 dark:text-slate-400 hover:text-slate-900 dark:hover:text-white"
                }`}
              >
                Pan-India
              </button>
              <button
                type="button"
                onClick={() => setSelectedCategory("international")}
                className={`px-4 py-2 rounded-xl transition-all ${
                  selectedCategory === "international"
                    ? "bg-blue-600 text-white shadow-xs"
                    : "text-slate-600 dark:text-slate-400 hover:text-slate-900 dark:hover:text-white"
                }`}
              >
                Global / International 🌐
              </button>
            </div>

            {/* Quick Search */}
            <div className="relative w-full sm:w-64">
              <Search className="w-4 h-4 text-slate-400 absolute left-3 top-1/2 -translate-y-1/2" />
              <input
                type="text"
                value={searchQuery}
                onChange={(e) => setSearchQuery(e.target.value)}
                placeholder="Search city / locality..."
                className="w-full pl-9 pr-3 py-2 text-xs rounded-xl bg-white dark:bg-slate-900 border border-slate-200 dark:border-slate-800 text-slate-900 dark:text-white placeholder:text-slate-400 focus:outline-none focus:ring-2 focus:ring-blue-500/20 focus:border-blue-500"
              />
            </div>
          </div>
        </div>

        {/* Main Location Cards Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 items-start">
          {filteredAreas.map((area, idx) => {
            const isExpanded = !!expandedCards[area.region];
            const isInternational = area.category === "international";
            const previewPlaces = area.featuredPlaces || area.places.slice(0, 4);
            const remainingCount = Math.max(0, area.places.length - previewPlaces.length);

            return (
              <div
                key={idx}
                className={`p-6 sm:p-7 rounded-[26px] bg-white dark:bg-slate-900 border transition-all duration-200 flex flex-col justify-between ${
                  isInternational
                    ? "border-indigo-400/50 dark:border-indigo-500/40 shadow-lg shadow-indigo-500/5 ring-1 ring-indigo-500/20"
                    : "border-slate-200/90 dark:border-slate-800 shadow-sm hover:shadow-md hover:border-slate-300 dark:hover:border-slate-700"
                }`}
              >
                <div>
                  {/* Card Header: Icon + Badge */}
                  <div className="flex items-center justify-between mb-4">
                    <div className="w-11 h-11 rounded-2xl bg-slate-100 dark:bg-slate-800 border border-slate-200/60 dark:border-slate-700/60 flex items-center justify-center shrink-0">
                      {getRegionIcon(area.region, area.category)}
                    </div>
                    {area.badge && (
                      <span
                        className={`text-[11px] font-bold px-2.5 py-1 rounded-full border ${
                          isInternational
                            ? "bg-indigo-50 dark:bg-indigo-950/60 text-indigo-700 dark:text-indigo-300 border-indigo-200 dark:border-indigo-800"
                            : "bg-slate-100 dark:bg-slate-800 text-slate-700 dark:text-slate-300 border-slate-200/60 dark:border-slate-700/60"
                        }`}
                      >
                        {area.badge}
                      </span>
                    )}
                  </div>

                  {/* Main Location Title */}
                  <h3 className="text-xl font-bold text-slate-900 dark:text-white leading-snug mb-2">
                    {area.region}
                  </h3>

                  {/* Short Description */}
                  {area.description && (
                    <p className="text-xs sm:text-sm text-slate-600 dark:text-slate-400 leading-relaxed mb-5">
                      {area.description}
                    </p>
                  )}

                  {/* Key Highlights / Featured Places Preview */}
                  <div className="mb-4">
                    <div className="text-[11px] font-bold uppercase tracking-wider text-slate-400 dark:text-slate-500 mb-2.5 flex items-center justify-between">
                      <span>Key Hubs:</span>
                      <span className="text-slate-500 font-medium">
                        {area.places.length} localities covered
                      </span>
                    </div>

                    <div className="flex flex-wrap gap-1.5">
                      {previewPlaces.map((place, pIdx) => (
                        <span
                          key={pIdx}
                          className="px-2.5 py-1 rounded-lg text-xs font-semibold bg-slate-100 dark:bg-slate-800/90 text-slate-800 dark:text-slate-200 border border-slate-200/80 dark:border-slate-700/80"
                        >
                          {place}
                        </span>
                      ))}
                    </div>
                  </div>

                  {/* Expanded Full List (Shows when user clicks toggle) */}
                  {isExpanded && (
                    <div className="pt-3 pb-2 border-t border-slate-100 dark:border-slate-800 mt-4 animate-in fade-in-50 duration-200">
                      <div className="text-[11px] font-bold uppercase tracking-wider text-blue-600 dark:text-blue-400 mb-2.5">
                        All Covered Locations ({area.places.length}):
                      </div>
                      <div className="flex flex-wrap gap-1.5 max-h-56 overflow-y-auto pr-1">
                        {area.places.map((place, pIdx) => (
                          <span
                            key={pIdx}
                            className="px-2 py-0.5 rounded-md text-[11px] font-medium bg-slate-50 dark:bg-slate-800/50 text-slate-600 dark:text-slate-300 border border-slate-200/60 dark:border-slate-700/60"
                          >
                            {place}
                          </span>
                        ))}
                      </div>
                    </div>
                  )}
                </div>

                {/* Interactive Toggle Button: "View All Locality" */}
                <div className="pt-4 mt-2 border-t border-slate-100 dark:border-slate-800/60">
                  <button
                    type="button"
                    onClick={() => toggleExpand(area.region)}
                    className="w-full py-2.5 px-3.5 rounded-xl bg-slate-50 hover:bg-slate-100 dark:bg-slate-800/60 dark:hover:bg-slate-800 text-slate-700 dark:text-slate-200 text-xs font-semibold flex items-center justify-center gap-1.5 transition-colors group cursor-pointer"
                  >
                    <span>
                      {isExpanded
                        ? "Show Less"
                        : remainingCount > 0
                        ? `+ View all ${area.places.length} locations`
                        : "View all locations"}
                    </span>
                    {isExpanded ? (
                      <ChevronUp className="w-3.5 h-3.5 text-slate-500" />
                    ) : (
                      <ChevronDown className="w-3.5 h-3.5 text-slate-500 group-hover:translate-y-0.5 transition-transform" />
                    )}
                  </button>
                </div>
              </div>
            );
          })}
        </div>

        {/* Global Delivery Assurance Banner */}
        <div className="mt-12 p-6 rounded-3xl bg-gradient-to-r from-blue-900/40 via-indigo-900/30 to-slate-900/50 border border-blue-500/20 backdrop-blur-sm flex flex-col md:flex-row items-center justify-between gap-6 text-center md:text-left">
          <div className="space-y-1">
            <div className="inline-flex items-center gap-1.5 text-xs font-bold text-indigo-400 uppercase tracking-wider">
              <Sparkles className="w-3.5 h-3.5" />
              <span>International & Remote Delivery Standard</span>
            </div>
            <h4 className="text-lg font-bold text-white">
              Serving Clients Across the US, UK, Canada, Australia & UAE
            </h4>
            <p className="text-xs sm:text-sm text-slate-300 max-w-2xl">
              Equipped with timezone-overlapping collaboration, asynchronous weekly sprints, and secure milestone invoicing in USD, GBP, EUR, and AED.
            </p>
          </div>

          <div className="flex flex-wrap items-center justify-center gap-2 shrink-0">
            <span className="px-3 py-1.5 rounded-full bg-white/10 text-white text-xs font-semibold border border-white/10 flex items-center gap-1.5">
              <CheckCircle2 className="w-3.5 h-3.5 text-emerald-400" />
              <span>Time-Zone Aligned</span>
            </span>
            <span className="px-3 py-1.5 rounded-full bg-white/10 text-white text-xs font-semibold border border-white/10 flex items-center gap-1.5">
              <CheckCircle2 className="w-3.5 h-3.5 text-emerald-400" />
              <span>Global Invoicing</span>
            </span>
            <span className="px-3 py-1.5 rounded-full bg-white/10 text-white text-xs font-semibold border border-white/10 flex items-center gap-1.5">
              <CheckCircle2 className="w-3.5 h-3.5 text-emerald-400" />
              <span>100% IP Protection</span>
            </span>
          </div>
        </div>
      </div>
    </section>
  );
}
