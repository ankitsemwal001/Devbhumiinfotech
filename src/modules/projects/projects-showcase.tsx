"use client";

import { useState } from "react";
import Image from "next/image";
import Link from "next/link";
import { Tag, ArrowRight, CheckCircle2, Layers, Cpu, Globe, Search } from "lucide-react";
import { portfolioProjects, Project } from "@/content/projects";

export function ProjectsShowcase() {
  const [activeTab, setActiveTab] = useState<"all" | "client" | "internal" | "concept">("all");
  const [searchQuery, setSearchQuery] = useState("");

  const filteredProjects = portfolioProjects.filter((project) => {
    const matchesTab = activeTab === "all" || project.type === activeTab;
    const matchesSearch =
      project.title.toLowerCase().includes(searchQuery.toLowerCase()) ||
      project.industry.toLowerCase().includes(searchQuery.toLowerCase()) ||
      project.technologies.some((t) => t.toLowerCase().includes(searchQuery.toLowerCase()));
    return matchesTab && matchesSearch;
  });

  const getTypeBadge = (type: Project["type"]) => {
    switch (type) {
      case "client":
        return {
          label: "Client Project",
          className: "bg-blue-100 text-blue-800 dark:bg-blue-950/80 dark:text-blue-300 border-blue-200 dark:border-blue-900",
        };
      case "internal":
        return {
          label: "Internal Product",
          className: "bg-purple-100 text-purple-800 dark:bg-purple-950/80 dark:text-purple-300 border-purple-200 dark:border-purple-900",
        };
      case "concept":
        return {
          label: "Concept / Template",
          className: "bg-amber-100 text-amber-800 dark:bg-amber-950/80 dark:text-amber-300 border-amber-200 dark:border-amber-900",
        };
      default:
        return {
          label: "Showcase",
          className: "bg-slate-100 text-slate-800",
        };
    }
  };

  return (
    <div className="space-y-12">
      {/* Controls Bar: Filter Tabs & Search */}
      <div className="flex flex-col sm:flex-row items-center justify-between gap-4 bg-slate-50 dark:bg-slate-900 p-3 sm:p-4 rounded-2xl border border-slate-200 dark:border-slate-800 shadow-sm">
        {/* Filter Tabs */}
        <div className="flex flex-wrap items-center gap-2 w-full sm:w-auto">
          {[
            { id: "all", label: "All Work" },
            { id: "client", label: "Client Deliveries" },
            { id: "internal", label: "Internal Systems" },
            { id: "concept", label: "Concepts & Templates" },
          ].map((tab) => (
            <button
              key={tab.id}
              onClick={() => setActiveTab(tab.id as any)}
              className={`px-4 py-2 rounded-xl text-xs font-semibold transition-all ${
                activeTab === tab.id
                  ? "bg-blue-600 text-white shadow-sm"
                  : "bg-white dark:bg-slate-800 text-slate-700 dark:text-slate-300 border border-slate-200 dark:border-slate-700 hover:border-blue-400"
              }`}
            >
              {tab.label}
            </button>
          ))}
        </div>

        {/* Search Input */}
        <div className="relative w-full sm:w-72">
          <Search className="w-4 h-4 text-slate-400 absolute left-3.5 top-1/2 -translate-y-1/2" />
          <input
            type="text"
            placeholder="Search by tech or domain..."
            value={searchQuery}
            onChange={(e) => setSearchQuery(e.target.value)}
            className="w-full pl-10 pr-4 py-2 rounded-xl border border-slate-200 dark:border-slate-700 bg-white dark:bg-slate-950 text-xs sm:text-sm focus:outline-none focus:ring-2 focus:ring-blue-600 text-slate-900 dark:text-white"
          />
        </div>
      </div>

      {/* Projects Grid */}
      {filteredProjects.length > 0 ? (
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {filteredProjects.map((project) => {
            const badge = getTypeBadge(project.type);
            return (
              <div
                key={project._id}
                className="flex flex-col justify-between rounded-3xl bg-slate-50 dark:bg-slate-900 border border-slate-200/80 dark:border-slate-800 overflow-hidden shadow-sm hover:shadow-xl transition-all duration-300 group"
              >
                <div>
                  <div className="relative h-60 w-full overflow-hidden bg-slate-200 dark:bg-slate-800">
                    <Image
                      src={project.image}
                      alt={project.title}
                      fill
                      sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
                      className="object-cover object-top group-hover:scale-105 transition-transform duration-500"
                    />
                    <div className="absolute top-4 left-4">
                      <span
                        className={`text-xs font-semibold px-3 py-1 rounded-full border backdrop-blur-md ${badge.className}`}
                      >
                        {badge.label}
                      </span>
                    </div>
                  </div>

                  <div className="p-6 sm:p-7 space-y-4">
                    <div className="flex items-center gap-2 text-xs font-medium text-slate-500 dark:text-slate-400">
                      <Tag className="w-3.5 h-3.5 text-blue-500" />
                      <span>{project.industry}</span>
                    </div>

                    <h3 className="text-xl font-bold text-slate-900 dark:text-white group-hover:text-blue-600 dark:group-hover:text-blue-400 transition-colors">
                      {project.title}
                    </h3>

                    <p className="text-sm text-slate-600 dark:text-slate-300 leading-relaxed">
                      {project.summary}
                    </p>

                    {/* Challenge & Solution snippets */}
                    {project.solution && (
                      <div className="p-3.5 rounded-xl bg-white dark:bg-slate-950 border border-slate-200/60 dark:border-slate-800 text-xs text-slate-600 dark:text-slate-400 space-y-1">
                        <span className="font-semibold text-slate-900 dark:text-slate-200 block">
                          Engineered Outcome:
                        </span>
                        <p className="line-clamp-2 leading-relaxed">{project.solution}</p>
                      </div>
                    )}

                    {/* Technology Badges */}
                    <div className="flex flex-wrap gap-1.5 pt-1">
                      {project.technologies.map((tech, i) => (
                        <span
                          key={i}
                          className="text-[11px] font-medium px-2.5 py-1 rounded-md bg-white dark:bg-slate-800 border border-slate-200/60 dark:border-slate-700 text-slate-600 dark:text-slate-300"
                        >
                          {tech}
                        </span>
                      ))}
                    </div>
                  </div>
                </div>

                <div className="p-6 pt-0">
                  <Link
                    href={`/contact/?package=${encodeURIComponent(project.title)}`}
                    className="inline-flex items-center gap-1.5 text-sm font-semibold text-blue-600 dark:text-blue-400 hover:text-blue-700 dark:hover:text-blue-300 transition-colors"
                  >
                    <span>Inquire About Similar Architecture</span>
                    <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
                  </Link>
                </div>
              </div>
            );
          })}
        </div>
      ) : (
        <div className="text-center py-16 bg-slate-50 dark:bg-slate-900 rounded-2xl border border-slate-200 dark:border-slate-800">
          <h4 className="text-lg font-bold text-slate-900 dark:text-white mb-2">No Projects Match Your Filter</h4>
          <p className="text-sm text-slate-500">Try choosing &quot;All Work&quot; or clearing your search term.</p>
        </div>
      )}
    </div>
  );
}
