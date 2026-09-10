import { RightNavbar } from "@/components/RightNavbar";
import { SiteHeader } from "@/components/SiteHeader";
import { getAllProjects, getProjectContent } from "@/lib/content";
import { iconMap, techNames, techColorClass, TechItem, TechKey } from "@/data/projectsData";
import { MarkdownRenderer } from "@/components/markdown-renderer";
import { Reveal } from "@/components/animations/reveal";
import Image from "next/image";
import { notFound } from "next/navigation";
import { ExternalLink } from "lucide-react";
import { SiGithub } from "react-icons/si";

export const dynamicParams = false;

export async function generateStaticParams() {
  return getAllProjects().map((project) => ({
    slug: project.slug,
  }));
}

export default async function ProjectPage({ params }: { params: Promise<{ slug: string }> }) {
  const { slug } = await params;
  const project = getProjectContent(slug);

  if (!project) {
    notFound();
  }

  return (
    <div className="min-h-screen w-full relative overflow-x-hidden transition-colors duration-300">
      {/* Right Side Blueprint Navigation */}
      <RightNavbar />

      {/* Fixed Header: Banner + Back + Title */}
      <SiteHeader
        variant="subpage"
        backHref="/"
        title={project.title}
        subtitle={`Projects/${project.title}`}
      />

      {/* Content Section */}
      <Reveal as="div" y={20} className="ml-0 mr-0 md:ml-[30%] md:mr-[30%] pt-[calc(22vh+112px)] pb-16 px-4 flex flex-col z-10 relative">

        {/* Media (Video or Image) right at the top */}
        <div className="w-full aspect-video relative mt-8 rounded-lg overflow-hidden border border-black/10 dark:border-white/[0.15] shadow-sm bg-black z-20">
          {project.video ? (
            project.video.includes('youtube') ? (
              <iframe
                src={project.video}
                className="w-full h-full"
                allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                allowFullScreen
              ></iframe>
            ) : (
              <video 
                src={project.video} 
                className="w-full h-full object-cover" 
                controls 
                autoPlay 
                muted 
                loop 
                playsInline 
              />
            )
          ) : (
            <Image 
              src={project.src} 
              alt={project.imageTitle} 
              fill 
              preload
              sizes="(min-width: 768px) 40vw, 100vw"
              quality={75}
              className="object-cover"
            />
          )}
        </div>

        {/* Action Links Grid */}
        <div className="grid grid-cols-2 md:grid-cols-3 items-center justify-between py-4 mt-8 relative">
          {project.github ? (
            <a href={project.github} target="_blank" rel="noopener noreferrer" className="flex items-center justify-center gap-2 text-[13px] font-medium text-zinc-600 dark:text-zinc-300 hover:text-zinc-900 dark:hover:text-zinc-100 transition-colors">
              <SiGithub className="w-4 h-4" /> Github
            </a>
          ) : <div />}
          
          {/* Vertical Divider 1 */}
          <div className="hidden md:block absolute left-1/3 top-0 bottom-0 w-0 border-l border-black/30 dark:border-white/[0.15] pointer-events-none" style={{ maskImage: 'repeating-linear-gradient(to bottom, black 0, black 1px, transparent 1px, transparent 6px)', WebkitMaskImage: 'repeating-linear-gradient(to bottom, black 0, black 1px, transparent 1px, transparent 6px)' }} />

          {project.live ? (
            <a href={project.live} target="_blank" rel="noopener noreferrer" className="flex items-center justify-center gap-2 text-[13px] font-medium text-zinc-600 dark:text-zinc-300 hover:text-zinc-900 dark:hover:text-zinc-100 transition-colors">
              <ExternalLink className="w-4 h-4" /> Website
            </a>
          ) : <div />}
          
          {/* Vertical Divider 2 */}
          <div className="hidden md:block absolute left-2/3 top-0 bottom-0 w-0 border-l border-black/30 dark:border-white/[0.15] pointer-events-none" style={{ maskImage: 'repeating-linear-gradient(to bottom, black 0, black 1px, transparent 1px, transparent 6px)', WebkitMaskImage: 'repeating-linear-gradient(to bottom, black 0, black 1px, transparent 1px, transparent 6px)' }} />

          <a href="#" className="hidden md:flex items-center justify-center gap-2 text-[13px] font-medium text-zinc-600 dark:text-zinc-300 hover:text-zinc-900 dark:hover:text-zinc-100 transition-colors">
            <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" className="w-4 h-4"><rect width="18" height="18" x="3" y="3" rx="2" ry="2"/><line x1="9" x2="15" y1="9" y2="9"/><line x1="9" x2="15" y1="15" y2="15"/></svg>
            Post
          </a>
        </div>

        {/* Title and Status */}
        <div className="flex items-center justify-between w-full mt-6 mb-4">
          <h1 className="text-[24px] sm:text-[28px] font-bold text-zinc-900 dark:text-zinc-50 tracking-tight leading-none">
            {project.title}
          </h1>
          <div className="flex items-center gap-2">
            <span className="relative flex h-2 w-2">
              <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-emerald-400 opacity-75"></span>
              <span className="relative inline-flex rounded-full h-2 w-2 bg-emerald-500"></span>
            </span>
            <span className="text-[13px] font-medium text-emerald-600 dark:text-emerald-400">Live</span>
          </div>
        </div>

        {/* Description */}
        <p className="text-[14px] sm:text-[15px] leading-relaxed text-zinc-600 dark:text-zinc-300">
          {project.description}
        </p>

        {/* Markdown Body */}
        {project.body && (
          <div className="mt-8">
            <MarkdownRenderer markdown={project.body} />
          </div>
        )}

        {/* Tech Stack */}
        <div className="mt-8">
          <h2 className="text-[16px] font-bold text-zinc-900 dark:text-zinc-50 tracking-tight mb-4">Stack used</h2>
          <div className="flex flex-wrap gap-2">
            {project.tech.map((t: TechItem, i: number) => {
              const isKey = typeof t === "string";
              const label = isKey ? techNames[t as TechKey] : t.label;
              const Icon = isKey ? iconMap[t as TechKey] : null;

              return (
                <div key={i} className="flex items-center gap-1.5 px-3 py-1.5 bg-zinc-100 dark:bg-zinc-900 border border-black/10 dark:border-white/5 rounded-md text-[12px] font-medium text-zinc-700 dark:text-zinc-300">
                  {Icon && <Icon className={`w-3.5 h-3.5 ${techColorClass[t as TechKey]}`} />}
                  <span>{label}</span>
                </div>
              );
            })}
          </div>
        </div>
      </Reveal>
    </div>
  );
}
