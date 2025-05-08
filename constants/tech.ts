import { 
  SiReact, 
  SiTypescript,
  SiMongodb,
  SiPython,
  SiNextdotjs,
  SiTailwindcss,
  SiPytorch,
  SiNumpy,
  SiDocker,
  SiJest,
  SiGithubactions,
  SiExpress,
  SiPostgresql,
  SiFastapi,
  SiFirebase,
  SiGooglecloud,
  SiJira,
  SiNodedotjs,
  SiRedux,
  SiAntdesign,
  SiCss3,
  SiHtml5,
  SiMaterialdesign,
  SiOpenai,
  SiCplusplus,
  SiLlvm,
  SiHuggingface,
  SiKeras
} from 'react-icons/si';
import projects from '@/data/projects.json'

export const TECH_NAMES = {
  react: {
    display: "React",
    color: "bg-blue-100 text-blue-700 inset-ring-blue-700/20 dark:bg-blue-900/30 dark:text-blue-400 dark:inset-ring-blue-400/20",
    icon: SiReact,
  },
  typescript: {
    display: "TypeScript",
    color: "bg-blue-200 text-blue-800 inset-ring-blue-800/20 dark:bg-blue-600/30 dark:text-blue-300 dark:inset-ring-blue-300/20",
    icon: SiTypescript,
  },
  mongodb: {
    display: "MongoDB",
    color: "bg-green-100 text-green-700 inset-ring-green-700/20 dark:bg-green-600/30 dark:text-green-300 dark:inset-ring-green-300/20",
    icon: SiMongodb,
  },
  python: {
    display: "Python",
    color: "bg-indigo-100 text-indigo-700 inset-ring-indigo-700/20 dark:bg-indigo-500/30 dark:text-indigo-300 dark:inset-ring-indigo-300/20",
    icon: SiPython,
  },
  nextjs: {
    display: "Next.js",
    color: "bg-gray-100 text-gray-800 inset-ring-gray-800/20 dark:bg-black/30 dark:text-gray-200 dark:inset-ring-gray-200/20",
    icon: SiNextdotjs,
  },
  tailwindcss: {
    display: "Tailwind CSS",
    color: "bg-cyan-100 text-cyan-700 inset-ring-cyan-700/20 dark:bg-cyan-500/30 dark:text-cyan-300 dark:inset-ring-cyan-300/20",
    icon: SiTailwindcss,
  },
  pytorch: {
    display: "PyTorch",
    color: "bg-red-100 text-red-700 inset-ring-red-700/20 dark:bg-red-500/30 dark:text-red-300 dark:inset-ring-red-300/20",
    icon: SiPytorch,
  },
  numpy: {
    display: "NumPy",
    color: "bg-cyan-100 text-cyan-700 inset-ring-cyan-700/20 dark:bg-cyan-500/30 dark:text-cyan-300 dark:inset-ring-cyan-300/20",
    icon: SiNumpy,
  },
  docker: {
    display: "Docker",
    color: "bg-blue-100 text-blue-700 inset-ring-blue-700/20 dark:bg-blue-500/30 dark:text-blue-300 dark:inset-ring-blue-300/20",
    icon: SiDocker,
  },
  jest: {
    display: "Jest",
    color: "bg-red-100 text-red-700 inset-ring-red-700/20 dark:bg-red-800/30 dark:text-red-200 dark:inset-ring-red-200/20",
    icon: SiJest,
  },
  keras: {
    display: "Keras",
    color: "bg-red-100 text-red-700 inset-ring-red-700/20 dark:bg-red-800/30 dark:text-red-200 dark:inset-ring-red-200/20",
    icon: SiKeras,
  },
  github_actions: {
    display: "GitHub Actions",
    color: "bg-gray-100 text-gray-700 inset-ring-gray-700/20 dark:bg-gray-700/30 dark:text-gray-200 dark:inset-ring-gray-200/20",
    icon: SiGithubactions,
  },
  express: {
    display: "Express.js",
    color: "bg-neutral-100 text-neutral-700 inset-ring-neutral-700/20 dark:bg-neutral-500/30 dark:text-neutral-100 dark:inset-ring-neutral-100/20",
    icon: SiExpress,
  },
  postgresql: {
    display: "PostgreSQL",
    color: "bg-blue-100 text-blue-700 inset-ring-blue-700/20 dark:bg-blue-700/30 dark:text-blue-200 dark:inset-ring-blue-200/20",
    icon: SiPostgresql,
  },
  fastapi: {
    display: "FastAPI",
    color: "bg-green-100 text-green-700 inset-ring-green-700/20 dark:bg-green-500/30 dark:text-green-100 dark:inset-ring-green-100/20",
    icon: SiFastapi,
  },
  firebase: {
    display: "Firebase",
    color: "bg-orange-100 text-orange-700 inset-ring-orange-700/20 dark:bg-orange-500/30 dark:text-orange-300 dark:inset-ring-orange-300/20",
    icon: SiFirebase,
  },
  redux: {
    display: "Redux",
    color: "bg-purple-100 text-purple-700 inset-ring-purple-700/20 dark:bg-purple-600/30 dark:text-purple-300 dark:inset-ring-purple-300/20",
    icon: SiRedux,
  },
  nodejs: {
    display: "Node.js",
    color: "bg-green-100 text-green-700 inset-ring-green-700/20 dark:bg-green-600/30 dark:text-green-300 dark:inset-ring-green-300/20",
    icon: SiNodedotjs,
  },
  jira: {
    display: "Jira",
    color: "bg-blue-100 text-blue-700 inset-ring-blue-700/20 dark:bg-blue-500/30 dark:text-blue-300 dark:inset-ring-blue-300/20",
    icon: SiJira,
  },
  google_cloud: {
    display: "Google Cloud",
    color: "bg-blue-100 text-blue-700 inset-ring-blue-700/20 dark:bg-blue-500/30 dark:text-blue-300 dark:inset-ring-blue-300/20",
    icon: SiGooglecloud,
  },
  html: {
    display: "HTML",
    color: "bg-orange-100 text-orange-700 inset-ring-orange-700/20 dark:bg-orange-500/30 dark:text-orange-300 dark:inset-ring-orange-300/20",
    icon: SiHtml5,
  },
  css: {
    display: "CSS",
    color: "bg-blue-100 text-blue-700 inset-ring-blue-700/20 dark:bg-blue-500/30 dark:text-blue-300 dark:inset-ring-blue-300/20",
    icon: SiCss3,
  },
  antdesign: {
    display: "Ant Design",
    color: "bg-blue-100 text-blue-700 inset-ring-blue-700/20 dark:bg-blue-600/30 dark:text-blue-300 dark:inset-ring-blue-300/20",
    icon: SiAntdesign,
  },
  materialui: {
    display: "Material UI",
    color: "bg-blue-100 text-blue-700 inset-ring-blue-700/20 dark:bg-blue-400/30 dark:text-blue-200 dark:inset-ring-blue-200/20",
    icon: SiMaterialdesign,
  },
  llm: {
    display: "Large Language Model",
    color: "bg-purple-100 text-purple-700 inset-ring-purple-700/20 dark:bg-purple-500/30 dark:text-purple-300 dark:inset-ring-purple-300/20",
    icon: SiOpenai,
  },
  cplusplus: {
    display: "C++",
    color: "bg-blue-100 text-blue-700 inset-ring-blue-700/20 dark:bg-blue-800/30 dark:text-blue-400 dark:inset-ring-blue-400/20",
    icon: SiCplusplus,
  },
  llvm: {
    display: "LLVM",
    color: "bg-orange-100 text-orange-700 inset-ring-orange-700/20 dark:bg-orange-600/30 dark:text-orange-300 dark:inset-ring-orange-300/20",
    icon: SiLlvm,
  },
  huggingface: {
    display: "Hugging Face",
    color: "bg-yellow-100 text-yellow-700 inset-ring-yellow-700/20 dark:bg-yellow-400/30 dark:text-yellow-300 dark:inset-ring-yellow-300/20",
    icon: SiHuggingface,
  },
} as const;

export type TechName = keyof typeof TECH_NAMES;
export type TechDisplayName = (typeof TECH_NAMES)[TechName]["display"];
export type TechColorStyle = (typeof TECH_NAMES)[TechName]["color"];
export type TechIcon = (typeof TECH_NAMES)[TechName]["icon"];

export function getTechDisplayName(name: TechName): TechDisplayName {
  return TECH_NAMES[name].display;
}

export function getTechColorStyle(name: TechName): TechColorStyle {
  return TECH_NAMES[name].color;
}

export function getTechIcon(name: TechName): TechIcon {
  if (!TECH_NAMES[name]) throw Error(`Unexpected tech name \`${name}\``)
  return TECH_NAMES[name].icon;
}

export function getTechList(): TechName[] {
  return Object.keys(TECH_NAMES).filter(t => (!["huggingface", "llvm"].includes(t))) as TechName[];
}




if (process.env.NODE_ENV === "development") {
  const unusedTech = new Set(Object.keys(TECH_NAMES));
  projects.forEach((proj) => {
    proj.techList.forEach((t) => unusedTech.delete(t));
  });
  // console.log("Unused tech:", unusedTech.size);
  // console.log(unusedTech);
}
