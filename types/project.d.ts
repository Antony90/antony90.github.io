import type { TechName } from "@/constants/tech";

interface Project {
  name: string;
  /** If empty, project source is private. */
  sourceURL?: string;
  title: string;
  description: string;
  techList: TechName[];
  previewImageURLs?: string[];
}