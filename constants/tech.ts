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
    color: "bg-blue-900/30 text-blue-400",
    icon: SiReact,
  },
  typescript: {
    display: "TypeScript",
    color: "bg-blue-600/30 text-blue-300",
    icon: SiTypescript,
  },
  mongodb: {
    display: "MongoDB",
    color: "bg-green-600/30 text-green-300",
    icon: SiMongodb,
  },
  python: {
    display: "Python",
    color: "bg-indigo-500/30 text-indigo-300",
    icon: SiPython,
  },
  nextjs: {
    display: "Next.js",
    color: "bg-black/30 text-gray-200",
    icon: SiNextdotjs,
  },
  tailwindcss: {
    display: "Tailwind CSS",
    color: "bg-cyan-500/30 text-cyan-300",
    icon: SiTailwindcss,
  },
  pytorch: {
    display: "PyTorch",
    color: "bg-red-500/30 text-red-300",
    icon: SiPytorch,
  },
  numpy: {
    display: "NumPy",
    color: "bg-cyan-500/30 text-cyan-300",
    icon: SiNumpy,
  },
  docker: {
    display: "Docker",
    color: "bg-blue-500/30 text-blue-300",
    icon: SiDocker,
  },
  jest: {
    display: "Jest",
    color: "bg-red-800/30 text-red-200",
    icon: SiJest,
  },
  keras: {
    display: "Keras",
    color: "bg-red-800/30 text-red-200",
    icon: SiKeras,
  },
  github_actions: {
    display: "GitHub Actions",
    color: "bg-gray-700/30 text-gray-200",
    icon: SiGithubactions,
  },
  express: {
    display: "Express.js",
    color: "bg-yellow-500/30 text-yellow-100",
    icon: SiExpress,
  },
  postgresql: {
    display: "PostgreSQL",
    color: "bg-blue-700/30 text-blue-200",
    icon: SiPostgresql,
  },
  fastapi: {
    display: "FastAPI",
    color: "bg-green-500/30 text-green-100",
    icon: SiFastapi,
  },
  firebase: {
    display: "Firebase",
    color: "bg-orange-500/30 text-orange-300",
    icon: SiFirebase,
  },
  redux: {
    display: "Redux",
    color: "bg-purple-600/30 text-purple-300",
    icon: SiRedux,
  },
  nodejs: {
    display: "Node.js",
    color: "bg-green-600/30 text-green-300",
    icon: SiNodedotjs,
  },
  jira: {
    display: "Jira",
    color: "bg-blue-500/30 text-blue-300",
    icon: SiJira,
  },
  google_cloud: {
    display: "Google Cloud",
    color: "bg-blue-500/30 text-blue-300",
    icon: SiGooglecloud,
  },
  html: {
    display: "HTML",
    color: "bg-orange-500/30 text-orange-300",
    icon: SiHtml5,
  },
  css: {
    display: "CSS",
    color: "bg-blue-500/30 text-blue-300",
    icon: SiCss3,
  },
  antdesign: {
    display: "Ant Design",
    color: "bg-blue-600/30 text-blue-300",
    icon: SiAntdesign,
  },
  materialui: {
    display: "Material UI",
    color: "bg-blue-400/30 text-blue-200",
    icon: SiMaterialdesign,
  },
  llm: {
    display: "Large Language Model",
    color: "bg-purple-500/30 text-purple-300",
    icon: SiOpenai,
  },
  cplusplus: {
    display: "C++",
    color: "bg-blue-800/30 text-blue-400",
    icon: SiCplusplus,
  },
  llvm: {
    display: "LLVM",
    color: "bg-orange-600/30 text-orange-300",
    icon: SiLlvm,
  },
  huggingface: {
    display: "Hugging Face",
    color: "bg-yellow-400/30 text-yellow-300",
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
  return Object.keys(TECH_NAMES) as TechName[];
}




if (process.env.NODE_ENV === "development") {
  const unusedTech = new Set(Object.keys(TECH_NAMES));
  projects.forEach((proj) => {
    proj.techList.forEach((t) => unusedTech.delete(t));
  });
  console.log("Unused tech:", unusedTech.size);
  console.log(unusedTech);
}
