import { Project } from "@/types/project";
import TechList from "./TechList";
import ProjectTitle from "./ProjectTitle";
import Image from "next/image";

export default function ProjectCard({
  title,
  description,
  techList,
  sourceURL,
  previewImageURLs,
}: Project) {
  return (
    <div className="group flex max-w-[500px] flex-col gap-6 rounded-lg bg-zinc-800 p-6 shadow-sm transition-all hover:shadow-2xl">
      <ProjectTitle title={title} sourceURL={sourceURL} />

      <p className="text-md line-clamp-4 grow text-gray-300 transition-all group-hover:leading-6 group-hover:text-gray-200">
        {description}
      </p>

      <TechList items={techList} />
    </div>
  );
}
