import React from "react";
import ProjectCard from "./ProjectCard";
import projectsData from "@/data/projects.json";
import { Project } from "@/types/project";
import Section from "@/components/sections/Section";

const projects: Project[] = projectsData as Project[];

export default function ProjectsSection() {
  return (
    <Section
      headingText="Projects"
      label="projects"
    >
      <p className="text-primary/80">Explore my full-stack applications, UI designs, and more.</p>
      <div className="flex flex-wrap items-stretch justify-center gap-12">
        {projects.map((proj) => (
          <ProjectCard key={proj.name} {...proj} />
        ))}
      </div>
    </Section>
  );
}
