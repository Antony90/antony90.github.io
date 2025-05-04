import { Project } from "@/types/project";
import TechList from "./TechList";
import ProjectTitle from "./ProjectTitle";
import Link from "next/link";

export function ProjectCardContent({
  title,
  description,
  techList,
  sourceURL,
}: Project) {
  return (
    <article className="group flex max-w-[480px] flex-col gap-6 rounded-lg bg-zinc-800 p-6 inset-ring-green-400/20 transition-all select-none hover:inset-ring-1">
      <ProjectTitle title={title} sourceURL={sourceURL} />

      <p className="text-md line-clamp-4 grow text-gray-300 transition-all group-hover:leading-6 group-hover:text-white">
        {description}
      </p>

      <TechList items={techList} />
    </article>
  );
}

export default function ProjectCard(props: Project) {
  const { sourceURL } = props;

  return sourceURL ? (
    <Link
      href={sourceURL}
      target="_blank"
      rel="noopener noreferrer"
      className="flex"
    >
      <ProjectCardContent {...props} />
    </Link>
  ) : (
    <ProjectCardContent {...props} />
  );
}
