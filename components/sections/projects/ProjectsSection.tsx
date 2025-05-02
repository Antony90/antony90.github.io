import React from "react";
import ProjectCard from "./ProjectCard";
import projectsData from "@/data/projects.json";
import { Project } from "@/types/project";

const projects: Project[] = projectsData as Project[];


export default function ProjectsSection() {
  return (
    <section className="flex flex-col items-center gap-6 p-6 bg-zinc-900 rounded-lg" aria-label="projects">
      <h1 className="ext-center text-4xl font-semibold text-white">
        Projects
      </h1>
        <div className="flex flex-wrap justify-center items-stretch gap-12">
          {projects.map((proj) => (
            <ProjectCard key={proj.name} {...proj} />
          ))}
        </div>
    </section>
  );
}
