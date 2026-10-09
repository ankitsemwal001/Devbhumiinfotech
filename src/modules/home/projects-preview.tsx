"use client";

import { useState } from "react";
import Image from "next/image";
import { portfolioProjects, Project } from "@/content/projects";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import { Dialog, DialogContent, DialogHeader, DialogTitle, DialogDescription } from "@/components/ui/dialog";
import { CheckCircle2 } from "lucide-react";

export function ProjectsPreviewSection() {
  const [selectedCategory, setSelectedCategory] = useState<string>("all");
  const [activeProject, setActiveProject] = useState<Project | null>(null);

  const filteredProjects =
    selectedCategory === "all"
      ? portfolioProjects
      : portfolioProjects.filter((p) => p.category === selectedCategory);

  return (
    <section id="projects" className="py-20 px-4 sm:px-6 lg:px-8 bg-slate-50 dark:bg-gray-900 border-t border-gray-200 dark:border-gray-800">
      <div className="max-w-7xl mx-auto">
        <div className="text-center mb-12">
          <span className="text-xs sm:text-sm font-bold uppercase tracking-wider text-blue-600 dark:text-blue-400">
            Proven Results
          </span>
          <h2 className="text-3xl sm:text-4xl font-bold text-gray-900 dark:text-white mt-2 mb-4">
            Featured Projects & Case Studies
          </h2>
          <p className="text-gray-600 dark:text-gray-400 max-w-2xl mx-auto">
            Discover how we have helped local businesses, resorts, retreats, and schools transform their digital footprint.
          </p>

          <div className="flex flex-wrap items-center justify-center gap-2 mt-8">
            {[
              { id: "all", label: "All Projects" },
              { id: "web", label: "Web Development" },
              { id: "automation", label: "AI & Automation" },
              { id: "seo", label: "SEO & Growth" },
            ].map((tab) => (
              <button
                key={tab.id}
                onClick={() => setSelectedCategory(tab.id)}
                className={`px-5 py-2 rounded-full text-xs sm:text-sm font-semibold transition-all ${
                  selectedCategory === tab.id
                    ? "bg-blue-600 text-white shadow-md shadow-blue-500/20"
                    : "bg-white dark:bg-gray-800 text-gray-700 dark:text-gray-300 border border-gray-200 dark:border-gray-700 hover:border-blue-400"
                }`}
              >
                {tab.label}
              </button>
            ))}
          </div>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {filteredProjects.map((project) => (
            <div
              key={project._id}
              className="bg-white dark:bg-gray-800 rounded-2xl overflow-hidden border border-gray-200 dark:border-gray-700 shadow-sm hover:shadow-xl transition-all duration-300 flex flex-col justify-between"
            >
              <div>
                <div className="relative h-56 w-full bg-gray-100 dark:bg-gray-700 overflow-hidden">
                  <Image
                    src={project.image.startsWith("/") ? project.image : `/${project.image}`}
                    alt={project.title}
                    fill
                    className="object-cover hover:scale-105 transition-transform duration-500"
                  />
                  <div className="absolute top-4 right-4">
                    <Badge variant="secondary" className="capitalize">
                      {project.category}
                    </Badge>
                  </div>
                </div>

                <div className="p-6">
                  <h3 className="text-xl font-bold text-gray-900 dark:text-white mb-2 line-clamp-1">
                    {project.title}
                  </h3>
                  <p className="text-sm text-gray-600 dark:text-gray-300 line-clamp-3 mb-4 leading-relaxed">
                    {project.description}
                  </p>

                  <div className="flex flex-wrap gap-1.5 mb-4">
                    {project.technologies.slice(0, 3).map((tech, idx) => (
                      <span
                        key={idx}
                        className="text-[11px] bg-blue-50 dark:bg-blue-950/40 text-blue-700 dark:text-blue-300 px-2.5 py-0.5 rounded-md font-medium"
                      >
                        {tech}
                      </span>
                    ))}
                    {project.technologies.length > 3 && (
                      <span className="text-[11px] text-gray-500 dark:text-gray-400 self-center">
                        +{project.technologies.length - 3} more
                      </span>
                    )}
                  </div>
                </div>
              </div>

              <div className="p-6 pt-0">
                <Button
                  onClick={() => setActiveProject(project)}
                  variant="outline"
                  className="w-full rounded-xl border-gray-200 dark:border-gray-700 hover:bg-blue-50 dark:hover:bg-blue-950 text-blue-600 dark:text-blue-400 font-semibold"
                >
                  View Case Study
                </Button>
              </div>
            </div>
          ))}
        </div>

        <Dialog open={!!activeProject} onOpenChange={() => setActiveProject(null)}>
          {activeProject && (
            <DialogContent className="max-w-2xl max-h-[85vh] overflow-y-auto">
              <DialogHeader>
                <DialogTitle className="text-2xl font-bold">
                  {activeProject.title}
                </DialogTitle>
                <DialogDescription>
                  Category: <span className="capitalize font-semibold text-blue-600">{activeProject.category}</span>
                </DialogDescription>
              </DialogHeader>

              <div className="space-y-6 pt-4">
                <div className="relative h-64 w-full rounded-xl overflow-hidden">
                  <Image
                    src={activeProject.image.startsWith("/") ? activeProject.image : `/${activeProject.image}`}
                    alt={activeProject.title}
                    fill
                    className="object-cover"
                  />
                </div>

                <div>
                  <h4 className="font-bold text-gray-900 dark:text-white mb-2">Project Overview</h4>
                  <p className="text-sm text-gray-600 dark:text-gray-300 leading-relaxed">
                    {activeProject.description}
                  </p>
                </div>

                <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 bg-slate-50 dark:bg-gray-800 p-4 rounded-xl">
                  <div>
                    <h5 className="font-bold text-sm text-red-600 dark:text-red-400 mb-1">The Challenge</h5>
                    <p className="text-xs text-gray-600 dark:text-gray-300">{activeProject.challenge}</p>
                  </div>
                  <div>
                    <h5 className="font-bold text-sm text-emerald-600 dark:text-emerald-400 mb-1">Our Solution</h5>
                    <p className="text-xs text-gray-600 dark:text-gray-300">{activeProject.solution}</p>
                  </div>
                </div>

                <div>
                  <h4 className="font-bold text-sm text-gray-900 dark:text-white mb-2">Technologies & Scope</h4>
                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-2">
                    {activeProject.technologies.map((tech, i) => (
                      <div key={i} className="flex items-center gap-2 text-xs text-gray-700 dark:text-gray-300">
                        <CheckCircle2 className="w-3.5 h-3.5 text-blue-600 shrink-0" />
                        <span>{tech}</span>
                      </div>
                    ))}
                  </div>
                </div>
              </div>
            </DialogContent>
          )}
        </Dialog>
      </div>
    </section>
  );
}
