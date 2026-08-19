import fs from "node:fs";
import path from "node:path";
import matter from "gray-matter";
import { iconMap, type Project, type TechKey } from "@/data/projectsData";

const PROJECTS_DIR = path.join(process.cwd(), "content", "projects");
const BLOGS_DIR = path.join(process.cwd(), "content", "blogs");

export interface ProjectPost extends Project {
  body: string;
}

export interface Blog {
  slug: string;
  title: string;
  date: string;
  claps: number;
  tags: string[];
}

export interface BlogPost extends Blog {
  body: string;
}

function fail(file: string, message: string): never {
  throw new Error(`content: ${file}: ${message}`);
}

function readMarkdownFiles(dir: string): string[] {
  if (!fs.existsSync(dir)) {
    throw new Error(`content: content directory not found: ${dir}`);
  }
  return fs
    .readdirSync(dir)
    .filter((name) => name.endsWith(".md"))
    .map((name) => path.join(dir, name))
    .sort();
}

function requiredString(file: string, data: unknown, key: string): string {
  const value = (data as Record<string, unknown>)?.[key];
  if (typeof value !== "string" || value.trim() === "") {
    return fail(file, `missing required frontmatter field "${key}"`);
  }
  return value.trim();
}

function optionalString(file: string, data: unknown, key: string): string {
  const value = (data as Record<string, unknown>)?.[key];
  return typeof value === "string" ? value.trim() : "";
}

function optionalBool(data: unknown, key: string, fallback = false): boolean {
  const value = (data as Record<string, unknown>)?.[key];
  return typeof value === "boolean" ? value : fallback;
}

function techList(file: string, data: unknown, key: string): TechKey[] {
  const value = (data as Record<string, unknown>)?.[key];
  if (!Array.isArray(value) || value.length === 0) {
    return fail(file, `missing required frontmatter field "${key}" (list of tech keys)`);
  }
  const valid = new Set(Object.keys(iconMap));
  return value.map((item) => {
    if (typeof item !== "string" || !valid.has(item)) {
      return fail(
        file,
        `invalid tech key "${String(item)}" in "${key}" — valid keys: ${[...valid].join(", ")}`
      );
    }
    return item as TechKey;
  });
}

export function getAllProjects(): Project[] {
  return readMarkdownFiles(PROJECTS_DIR).map(parseProject);
}

export function getProjectContent(slug: string): ProjectPost | undefined {
  if (!/^[a-z0-9-]+$/.test(slug)) return undefined;
  const file = path.join(PROJECTS_DIR, `${slug}.md`);
  if (!fs.existsSync(file)) return undefined;
  return parseProject(file);
}

export function getProject(slug: string): Project | undefined {
  const post = getProjectContent(slug);
  return post ? stripBody(post) : undefined;
}

export function getAllBlogs(): BlogPost[] {
  return readMarkdownFiles(BLOGS_DIR)
    .map(parseBlog)
    .sort((a, b) => (a.date < b.date ? 1 : a.date > b.date ? -1 : 0));
}

export function getBlogContent(slug: string): BlogPost | undefined {
  if (!/^[a-z0-9-]+$/.test(slug)) return undefined;
  const file = path.join(BLOGS_DIR, `${slug}.md`);
  if (!fs.existsSync(file)) return undefined;
  return parseBlog(file);
}

export function getBlog(slug: string): Blog | undefined {
  const post = getBlogContent(slug);
  return post ? stripBody(post) : undefined;
}

function stripBody<T extends { body: string }>(post: T): Omit<T, "body"> {
  const { body: _body, ...rest } = post;
  return rest;
}

function contentSlug(file: string): string {
  const slug = path.basename(file, ".md");
  if (!/^[a-z0-9-]+$/.test(slug)) {
    return fail(file, `filename must be lowercase letters, numbers or dashes (got "${slug}")`);
  }
  return slug;
}

function parseProject(file: string): ProjectPost {
  const source = fs.readFileSync(file, "utf8");
  const { data, content } = matter(source);

  return {
    slug: contentSlug(file),
    title: requiredString(file, data, "title"),
    imageTitle: optionalString(file, data, "imageTitle") || requiredString(file, data, "title"),
    src: requiredString(file, data, "src"),
    lightModeSrc: optionalString(file, data, "lightModeSrc") || undefined,
    video: optionalString(file, data, "video"),
    description: requiredString(file, data, "description"),
    tech: techList(file, data, "tech"),
    github: optionalString(file, data, "github"),
    live: optionalString(file, data, "live"),
    starsText: optionalString(file, data, "starsText") || undefined,
    backgroundImage: optionalString(file, data, "backgroundImage") || undefined,
    hasPin: optionalBool(data, "hasPin"),
    body: content,
  };
}

function parseBlog(file: string): BlogPost {
  const source = fs.readFileSync(file, "utf8");
  const { data, content } = matter(source);

  const tagsValue = (data as Record<string, unknown>)?.tags;
  const rawTags = Array.isArray(tagsValue)
    ? tagsValue.filter((t): t is string => typeof t === "string")
    : [];

  return {
    slug: contentSlug(file),
    title: requiredString(file, data, "title"),
    date: optionalString(file, data, "date") || fail(file, `missing required frontmatter field "date"`),
    claps: typeof data?.claps === "number" ? data.claps : 0,
    tags: rawTags,
    body: content,
  };
}