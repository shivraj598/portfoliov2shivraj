import type { ComponentType } from "react";
import { Network, Search } from "lucide-react";
import {
  SiNextdotjs,
  SiTypescript,
  SiReact,
  SiThreedotjs,
  SiPrisma,
  SiCloudflare,
  SiLangchain,
  SiNodedotjs,
  SiFramer,
  SiTailwindcss,
  SiBun,
  SiEslint,
  SiRadixui,
  SiChartdotjs,
  SiGithub,
  SiFastapi,
  SiRedis,
  SiCelery,
  SiTldraw,
  SiCss,
  SiPython,
  SiAnthropic,
  SiClaude,
  SiGooglegemini,
  SiMeta,
} from "react-icons/si";

export type TechIcon = ComponentType<{ className?: string }>;
export type TechKey =
  | "next" | "ts" | "react" | "three" | "prisma" | "cloud" | "langchain" | "langgraph" | "rag"
  | "node" | "motion" | "tailwind" | "bun" | "eslint" | "radixui" | "charts" | "github" | "fastapi"
  | "redis" | "celery" | "tldraw" | "css3" | "python" | "anthropic" | "claude" | "gemini" | "llama";

export type TechItem = TechKey | { label: string; tooltip?: string; };

export interface Project {
  slug: string;
  title: string;
  imageTitle: string;
  src: string;
  lightModeSrc?: string;
  video: string;
  description: string;
  tech: TechItem[];
  github: string;
  live: string;
  starsText?: string;
  backgroundImage?: string;
  hasPin: boolean;
  hidden?: boolean;
}

export const iconMap: Record<TechKey, TechIcon> = {
  next: SiNextdotjs, ts: SiTypescript, react: SiReact, three: SiThreedotjs, prisma: SiPrisma,
  cloud: SiCloudflare, langchain: SiLangchain, langgraph: Network, rag: Search, node: SiNodedotjs,
  motion: SiFramer, tailwind: SiTailwindcss, bun: SiBun, eslint: SiEslint, radixui: SiRadixui,
  charts: SiChartdotjs, github: SiGithub, fastapi: SiFastapi, redis: SiRedis, celery: SiCelery,
  tldraw: SiTldraw, css3: SiCss, python: SiPython, anthropic: SiAnthropic, claude: SiClaude,
  gemini: SiGooglegemini, llama: SiMeta,
};

export const techNames: Record<TechKey, string> = {
  next: "Next.js", ts: "TypeScript", react: "React", three: "Three.js", prisma: "Prisma",
  cloud: "Cloudflare", langchain: "LangChain", langgraph: "LangGraph", rag: "RAG",
  node: "Node.js", motion: "Framer Motion", tailwind: "Tailwind CSS", bun: "Bun", eslint: "ESLint",
  radixui: "Radix UI", charts: "Charts", github: "GitHub API", fastapi: "FastAPI", redis: "Redis",
  celery: "Celery", tldraw: "tldraw", css3: "CSS3", python: "Python", anthropic: "Anthropic",
  claude: "Claude", gemini: "Gemini", llama: "LLaMA",
};

/**
 * Brand colors for the tech icons, so they render as the original logo rather than
 * a flat grey. Simple Icons (react-icons/si) draw a single path filled with
 * `currentColor`, so setting `color` on the element is enough.
 *
 * Brands whose official color is near-black (Next.js, Bun, three.js, Anthropic, …)
 * or near-white (tldraw) would vanish against one of the two themes, so those swap
 * for a legible shade in that theme only. Values are the published Simple Icons
 * brand hexes.
 */
export const techColorClass: Record<TechKey, string> = {
  next: "text-black dark:text-white",
  ts: "text-[#3178C6]",
  react: "text-[#61DAFB]",
  three: "text-black dark:text-white",
  prisma: "text-[#2D3748] dark:text-[#A5B4CB]",
  cloud: "text-[#F38020]",
  langchain: "text-[#1C3C3A] dark:text-[#3FC6AE]",
  langgraph: "text-[#1C3C3A] dark:text-[#3FC6AE]",
  rag: "text-[#1C3C3A] dark:text-[#3FC6AE]",
  node: "text-[#5FA04E]",
  motion: "text-[#0055FF] dark:text-[#4D88FF]",
  tailwind: "text-[#06B6D4]",
  bun: "text-black dark:text-white",
  eslint: "text-[#4B32C3] dark:text-[#8B7BE8]",
  radixui: "text-[#161618] dark:text-white",
  charts: "text-[#FF6384]",
  github: "text-[#181717] dark:text-white",
  fastapi: "text-[#009688]",
  redis: "text-[#FF4438]",
  celery: "text-[#37814A] dark:text-[#62B87A]",
  tldraw: "text-[#2F3437] dark:text-[#FAFAFA]",
  css3: "text-[#663399] dark:text-[#A97BD6]",
  python: "text-[#3776AB]",
  anthropic: "text-[#191919] dark:text-white",
  claude: "text-[#D97757]",
  gemini: "text-[#8E75B2]",
  llama: "text-[#0467DF] dark:text-[#5AA0F5]",
};
