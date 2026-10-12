"use client";

import { useState } from "react";
import Image from "next/image";
import Link from "next/link";
import { ArrowRight, Tag } from "lucide-react";
import { portfolioProjects, Project } from "@/content/projects";

export function ProjectsPreviewSection() {
  const [activeCategory, setActiveCategory] = useState<string>("all");

  const filteredProjects = portfolioProjects.filter((project) => {
    if (activeCategory === "all") return true;
    return project.category === activeCategory;
  });

  const [flippedId, setFlippedId] = useState<string | null>(null);

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
    <section id="projects" className="py-20 px-4 sm:px-6 lg:px-8 bg-slate-50 dark:bg-slate-900/50 border-t border-slate-200/80 dark:border-slate-800">
      <div className="max-w-7xl mx-auto">
        <div className="text-center  mb-12 space-y-4">
          <span className="inline-block text-xs font-bold uppercase tracking-wider text-blue-600 dark:text-blue-400 bg-blue-50 dark:bg-blue-950/60 px-3.5 py-1.5 rounded-full border border-blue-200 dark:border-blue-900">
            Portfolio & Prototypes
          </span>
          <h2 className="text-3xl sm:text-5xl font-extrabold text-slate-900 dark:text-white tracking-normal">
            Selected Work & Solution Prototypes
          </h2>


          {/* Client-side Filter Chips */}
          <div className="flex flex-wrap items-center justify-center gap-2 pt-4">
            {[
              { id: "all", label: "All Work" },
              { id: "web", label: "Web & UI" },
              { id: "automation", label: "AI & Automation" },
              { id: "seo", label: "SEO & CMS" },
            ].map((chip) => (
              <button
                key={chip.id}
                type="button"
                onClick={() => setActiveCategory(chip.id)}
                className={`px-4 py-2 rounded-full text-xs sm:text-sm font-medium transition-all ${
                  activeCategory === chip.id
                    ? "bg-blue-600 text-white shadow-md shadow-blue-600/25"
                    : "bg-white dark:bg-slate-800 text-slate-700 dark:text-slate-300 border border-slate-200 dark:border-slate-700 hover:bg-slate-50 dark:hover:bg-slate-700"
                }`}
              >
                {chip.label}
              </button>
            ))}
          </div>
        </div>

        {/* Projects Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {filteredProjects.map((project) => {
            const badge = getTypeBadge(project.type);
            const isFlipped = flippedId === project._id;

            return (
              <div
                key={project._id}
                onClick={() => {
                  if (typeof window !== "undefined" && window.matchMedia("(hover: none)").matches) {
                    setFlippedId(isFlipped ? null : project._id);
                  }
                }}
                className="group/card relative h-[320px] sm:h-[335px] [perspective:1000px] cursor-pointer select-none"
              >
                {/* 3D Flipping Card Container */}
                <div
                  className={`relative w-full h-full duration-500 ease-out [transform-style:preserve-3d] transition-transform ${
                    isFlipped ? "[transform:rotateY(180deg)]" : ""
                  } [@media(hover:hover)]:group-hover/card:[transform:rotateY(180deg)]`}
                >
                  {/* ========================================================
                      FRONT FACE: Visual Asset + Overview
                  ======================================================== */}
                  <div className="absolute inset-0 [backface-visibility:hidden] overflow-hidden rounded-3xl bg-white dark:bg-slate-900 border border-slate-200/90 dark:border-slate-800 shadow-sm transition-[box-shadow,transform] duration-300 group-hover/card:shadow-xl group-hover/card:shadow-slate-200/60 dark:group-hover/card:shadow-black/50 flex flex-col">
                    {/* Visual Asset Container */}
                    <div className="relative h-44 sm:h-48 w-full overflow-hidden bg-slate-100 dark:bg-slate-800 shrink-0">
                      <Image
                        src={project.image}
                        alt={project.title}
                        fill
                        sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
                        className="object-cover object-top group-hover/card:scale-105 transition-transform duration-500"
                      />
                      <div className="absolute top-3 left-3 flex gap-2 z-10">
                        <span className="inline-flex items-center gap-1.5 text-xs font-semibold px-3 py-1 rounded-full bg-white/90 dark:bg-slate-900/90 text-slate-800 dark:text-slate-200 border border-slate-200/80 dark:border-slate-700/80 backdrop-blur-md shadow-xs">
                          <Tag className="w-3.5 h-3.5 text-blue-500" />
                          <span>{project.industry}</span>
                        </span>
                      </div>
                    </div>

                    {/* Card Body (Top-aligned, no awkward gap above title) */}
                    <div className="p-4 sm:p-5 flex-1 flex flex-col justify-start">
                      <h3 className="text-lg sm:text-xl font-bold text-slate-900 dark:text-white group-hover/card:text-blue-600 dark:group-hover/card:text-blue-400 transition-colors line-clamp-1">
                        {project.title}
                      </h3>

                      <p className="mt-1.5 text-xs sm:text-sm text-slate-600 dark:text-slate-300 leading-relaxed line-clamp-2">
                        {project.summary}
                      </p>
                    </div>
                  </div>

                  {/* ========================================================
                      BACK FACE: Case Study Details & Architecture
                  ======================================================== */}
                  <div className="absolute inset-0 [backface-visibility:hidden] [transform:rotateY(180deg)] overflow-hidden flex flex-col justify-between p-4 sm:p-5 rounded-3xl border border-slate-200/90 dark:border-slate-800 bg-white dark:bg-slate-900 shadow-sm transition-[box-shadow] duration-300 group-hover/card:shadow-xl group-hover/card:shadow-slate-200/60 dark:group-hover/card:shadow-black/50">
                    {/* Subtle Back Accent Gradient */}
                    <div
                      aria-hidden="true"
                      className="absolute inset-0 bg-gradient-to-br from-blue-500/10 via-indigo-500/5 to-transparent pointer-events-none opacity-40"
                    />

                    <div className="relative z-10 flex flex-col h-full justify-between">
                      <div>
                        {/* Back Header */}
                        <div className="flex items-center justify-between pb-2 border-b border-slate-100 dark:border-slate-800/80">
                          <span className={`text-[11px] font-bold px-2 py-0.5 rounded-full border ${badge.className}`}>
                            {badge.label}
                          </span>
                          <span className="text-xs font-medium text-slate-500 dark:text-slate-400">
                            {project.industry}
                          </span>
                        </div>

                      

                        {/* Challenge & Solution */}
                        <div className="mt-2 space-y-1.5">
                          {project.challenge && (
                            <div className="p-2 rounded-xl bg-amber-500/5 dark:bg-amber-500/10 border border-amber-500/15">
                              <span className="text-[10px] font-bold uppercase tracking-wider text-amber-700 dark:text-amber-400 block mb-0.5">
                                The Challenge
                              </span>
                              <p className="text-xs text-slate-600 dark:text-slate-300 leading-relaxed line-clamp-2">
                                {project.challenge}
                              </p>
                            </div>
                          )}

                          {project.solution && (
                            <div className="p-2 rounded-xl bg-emerald-500/5 dark:bg-emerald-500/10 border border-emerald-500/15">
                              <span className="text-[10px] font-bold uppercase tracking-wider text-emerald-700 dark:text-emerald-400 block mb-0.5">
                                Engineered Solution
                              </span>
                              <p className="text-xs text-slate-600 dark:text-slate-300 leading-relaxed line-clamp-2">
                                {project.solution}
                              </p>
                            </div>
                          )}
                        </div>

                        {/* Tech Stack */}
                        <div className="mt-2 pt-2 border-t border-slate-100 dark:border-slate-800/80">
                          <div className="flex flex-wrap gap-1">
                            {project.technologies.slice(0, 3).map((tech, i) => (
                              <span
                                key={i}
                                className="inline-flex items-center px-2 py-0.5 rounded-md text-[10px] font-semibold bg-slate-100 dark:bg-slate-800 text-slate-700 dark:text-slate-300 border border-slate-200/60 dark:border-slate-700/60"
                              >
                                {tech}
                              </span>
                            ))}
                          </div>
                        </div>
                      </div>

                      {/* Bottom Action: View Project Overview */}
                      <div className="mt-auto pt-2.5 border-t border-slate-100 dark:border-slate-800/80">
                        <Link
                          href="/projects/"
                          onClick={(e) => e.stopPropagation()}
                          aria-label={`View Overview for ${project.title}`}
                          className="group/btn w-full py-2 px-3.5 rounded-xl flex items-center justify-between bg-blue-600 hover:bg-blue-700 text-white font-semibold text-xs sm:text-sm shadow-md shadow-blue-600/20 transition-all duration-200 outline-none focus-visible:ring-2 focus-visible:ring-blue-500"
                        >
                          <span>Explore Project Overview</span>
                          <span className="flex h-5 w-5 items-center justify-center rounded-full bg-white/20 group-hover/btn:bg-white/30 transition-colors">
                            <ArrowRight
                              className="h-3 w-3 transition-transform duration-200 group-hover/btn:translate-x-0.5"
                              aria-hidden="true"
                            />
                          </span>
                        </Link>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            );
          })}
        </div>

        {/* Subtle documentation notice */}
        <div className="text-center mt-12 text-xs text-slate-500 dark:text-slate-400">
          <span>More projects and case studies are actively being documented with client permissions.</span>
        </div>
      </div>
    </section>
  );
}
