"use client";

import { useMemo, useState } from "react";
import { Button } from "@/components/ui/button";
import { Card } from "@/components/ui/card";
import { ExternalLink, Star } from "lucide-react";
import { Dialog, DialogContent, DialogHeader, DialogTitle } from "@/components/ui/dialog";
import {
  orderedProjects,
  projectCategories,
  type Project,
  type ProjectCategory,
} from "@/data/projects";

const Projects = () => {
  const [selectedProject, setSelectedProject] = useState<Project | null>(null);
  const [activeCategory, setActiveCategory] = useState<ProjectCategory>("All");

  const filteredProjects = useMemo(() => {
    if (activeCategory === "All") return orderedProjects;

    return orderedProjects.filter((project) =>
      project.categories.includes(activeCategory)
    );
  }, [activeCategory]);

  return (
    <section id="projects" className="py-20 bg-gradient-dark text-primary-foreground">
      <div className="container mx-auto px-6">
        <div className="text-center mb-10">
          <h2 className="text-4xl font-bold mb-4">My Projects</h2>
          <p className="text-lg text-gray-300 max-w-3xl mx-auto">
            Selected work across production web platforms, DevOps, backend services,
            data engineering, IoT, and automation.
          </p>
        </div>

        <div className="mb-10 flex flex-wrap justify-center gap-3">
          {projectCategories.map((category) => {
            const isActive = activeCategory === category;

            return (
              <button
                key={category}
                type="button"
                onClick={() => setActiveCategory(category)}
                className={`rounded-full border px-4 py-2 text-sm font-medium transition-colors ${
                  isActive
                    ? "border-white bg-white text-slate-950"
                    : "border-white/20 bg-white/5 text-gray-200 hover:bg-white/10"
                }`}
                aria-pressed={isActive}
              >
                {category}
              </button>
            );
          })}
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8 items-stretch">
          {filteredProjects.map((project) => {
            const [projectName, ...subtitleParts] = project.title.split(" - ");
            const projectSubtitle = subtitleParts.join(" - ");

            return (
            <Card
              key={project.id}
              className={`bg-white/5 backdrop-blur-sm rounded-xl overflow-hidden border transition-colors flex flex-col hover:bg-white/10 ${
                project.featured ? "border-primary/70 ring-1 ring-primary/30" : "border-white/10"
              }`}
            >
              <div className="p-6 flex-1 flex flex-col">
                <div className="flex items-center justify-between gap-3 mb-5">
                  <span className="px-3 py-1 bg-white/10 rounded-full text-xs text-gray-300">
                    {project.type}
                  </span>
                  <div className="flex items-center gap-2 whitespace-nowrap">
                    {project.link ? (
                      <span className="inline-flex items-center gap-1.5 rounded-full border border-green-400/40 bg-green-400/15 px-2.5 py-1 text-xs font-medium text-green-300">
                        <span className="h-1.5 w-1.5 rounded-full bg-green-400 animate-pulse" />
                        Live
                      </span>
                    ) : null}
                    {project.featured ? (
                      <span className="inline-flex items-center gap-1 rounded-full border border-primary/40 bg-primary/20 px-2.5 py-1 text-xs font-medium text-primary-foreground">
                        <Star size={11} aria-hidden="true" />
                        Featured
                      </span>
                    ) : null}
                    <span className="text-gray-400 text-xs">{project.year}</span>
                  </div>
                </div>

                <div className="mb-3 min-h-[3.75rem]">
                  <h3 className="text-lg font-bold leading-snug text-white">{projectName}</h3>
                  {projectSubtitle ? (
                    <p className="mt-1 text-sm font-medium leading-snug text-primary-foreground/70">
                      {projectSubtitle}
                    </p>
                  ) : null}
                </div>

                <p className="text-gray-300 text-sm leading-relaxed line-clamp-4">
                  {project.description}
                </p>

                {project.highlight ? (
                  <p className="mt-4 rounded-lg border border-white/10 bg-white/5 p-3 text-xs leading-relaxed text-gray-200">
                    {project.highlight}
                  </p>
                ) : null}

                <div className="flex flex-wrap gap-2 mt-auto pt-5">
                  {project.tech.map((tech) => (
                    <span
                      key={tech}
                      className="px-2 py-1 bg-primary/20 text-primary-foreground text-xs rounded-full border border-primary/30"
                    >
                      {tech}
                    </span>
                  ))}
                </div>
              </div>

              <div className="p-6 border-t border-white/10 flex justify-between items-center gap-3">
                <Button
                  variant="outline"
                  size="sm"
                  onClick={() => setSelectedProject(project)}
                  className="border-white/20 text-black hover:bg-white/10"
                >
                  View Case Study
                </Button>

                <Button
                  variant="outline"
                  size="sm"
                  disabled={!project.link}
                  onClick={() => {
                    if (project.link) window.open(project.link, "_blank", "noopener,noreferrer");
                  }}
                  className="border-white/20 text-black hover:bg-white/10 disabled:opacity-50 disabled:cursor-not-allowed"
                >
                  <ExternalLink size={14} className="mr-2" />
                  Direct Link
                </Button>
              </div>
            </Card>
            );
          })}
        </div>
      </div>

      <Dialog open={!!selectedProject} onOpenChange={() => setSelectedProject(null)}>
        <DialogContent className="max-h-[90vh] max-w-3xl overflow-y-auto bg-background text-foreground">
          {selectedProject && (
            <>
              <DialogHeader>
                <DialogTitle className="text-2xl font-bold">
                  {selectedProject.title}
                </DialogTitle>
              </DialogHeader>
              <p className="text-sm text-surface-medium">
                {selectedProject.type} • {selectedProject.year}
              </p>

              {selectedProject.highlight ? (
                <p className="rounded-lg bg-muted p-3 text-sm font-medium">
                  {selectedProject.highlight}
                </p>
              ) : null}

              <div className="grid gap-4 md:grid-cols-2">
                <div className="rounded-xl border bg-card p-4">
                  <h3 className="mb-2 text-sm font-semibold uppercase tracking-wide text-primary">
                    Problem
                  </h3>
                  <p className="text-sm leading-relaxed text-surface-medium">
                    {selectedProject.caseStudy?.problem ?? selectedProject.description}
                  </p>
                </div>
                <div className="rounded-xl border bg-card p-4">
                  <h3 className="mb-2 text-sm font-semibold uppercase tracking-wide text-primary">
                    Role
                  </h3>
                  <p className="text-sm leading-relaxed text-surface-medium">
                    {selectedProject.caseStudy?.role ?? "Delivered planning, implementation, and iteration across the project lifecycle."}
                  </p>
                </div>
                <div className="rounded-xl border bg-card p-4 md:col-span-2">
                  <h3 className="mb-2 text-sm font-semibold uppercase tracking-wide text-primary">
                    Architecture / Implementation
                  </h3>
                  <p className="text-sm leading-relaxed text-surface-medium">
                    {selectedProject.caseStudy?.implementation ?? selectedProject.description}
                  </p>
                </div>
                <div className="rounded-xl border bg-card p-4 md:col-span-2">
                  <h3 className="mb-2 text-sm font-semibold uppercase tracking-wide text-primary">
                    Impact / Result
                  </h3>
                  <p className="text-sm leading-relaxed text-surface-medium">
                    {selectedProject.caseStudy?.impact ?? selectedProject.highlight ?? selectedProject.description}
                  </p>
                </div>
              </div>

              <div>
                <h3 className="mb-2 text-sm font-semibold uppercase tracking-wide text-primary">
                  Tech Stack
                </h3>
                <div className="flex flex-wrap gap-2">
                  {(selectedProject.caseStudy?.techStack ?? selectedProject.tech).map((tech) => (
                    <span
                      key={tech}
                      className="px-3 py-1 bg-primary/20 text-primary-foreground text-xs rounded-full border border-primary/30"
                    >
                      {tech}
                    </span>
                  ))}
                </div>
              </div>

              <div>
                <h3 className="mb-2 text-sm font-semibold uppercase tracking-wide text-primary">
                  Categories
                </h3>
                <div className="flex flex-wrap gap-2">
                  {selectedProject.categories.map((category) => (
                    <span
                      key={category}
                      className="px-3 py-1 bg-muted text-muted-foreground text-xs rounded-full border"
                    >
                      {category}
                    </span>
                  ))}
                </div>
              </div>

              {selectedProject.link ? (
                <a
                  href={selectedProject.link}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex w-fit items-center gap-2 rounded-md bg-primary px-3 py-2 text-sm text-primary-foreground"
                >
                  <ExternalLink size={14} />
                  Visit Project
                </a>
              ) : null}
            </>
          )}
        </DialogContent>
      </Dialog>
    </section>
  );
};

export default Projects;
