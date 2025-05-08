import { Project } from "@/types/project";
import TechList from "./TechList";
import ProjectTitle from "./ProjectTitle";
import Link from "next/link";
import Card from "@/components/ui/Card";

export function ProjectCardContent({
  title,
  description,
  techList,
  sourceURL,
}: Project) {
  return (
    <Card className="group flex max-w-[480px] flex-col gap-6 select-none" hover>
      <ProjectTitle title={title} sourceURL={sourceURL} />
      <p className="text-md text-muted line-clamp-4 grow transition-all group-hover:leading-6 group-hover:text-primary">
        {description}
      </p>
      <TechList items={techList} />
    </Card>
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
