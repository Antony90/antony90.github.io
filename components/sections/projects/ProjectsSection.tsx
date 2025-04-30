import React from "react";
import ProjectCard from "./ProjectCard";
import projectsData from "@/data/projects.json";
import { Project } from "@/types/project";

const projects: Project[] = projectsData as Project[];


export default function ProjectsSection() {
  return (
    <section className="flex flex-col items-center" aria-label="projects">
      <h1 className="mb-8 text-center text-4xl font-semibold text-white">
        Projects
      </h1>
        <div className="flex flex-wrap justify-center gap-12 lg:max-w-[90%]">
          {projects.map((proj) => (
            <ProjectCard key={proj.name} {...proj} />
          ))}
        </div>
    </section>
  );
}
