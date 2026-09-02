import { GithubGraph } from "@/components/GithubGraph";
import { ProjectsGrid } from "@/components/ProjectsGrid";
import { ExperienceList } from "@/components/ExperienceList";
import { OpenSourceContributions } from "@/components/OpenSourceContributions";
import { BlogList } from "@/components/BlogList";
import { FooterBackground } from "@/components/FooterBackground";
import { RightNavbar } from "@/components/RightNavbar";
import Link from "next/link";
import SoftPillButton from "@/components/pixel-perfect/soft-pill-button";
import SoundLink from "@/components/SoundLink";
import SocialHoverCard from "@/components/pixel-perfect/social-hover-card";
import { CursorGlow } from "@/components/CursorGlow";
import Image from "next/image";
import { getAllProjects } from "@/lib/content";
import { getAllBlogs } from "@/lib/content";
import { Reveal, RevealGroup } from "@/components/animations/reveal";
import { SplitHeading } from "@/components/animations/split-heading";
import { SiteHeader } from "@/components/SiteHeader";

const skills = [
  { name: "React", icon: "react" },
  { name: "Next", icon: "nextdotjs" },
  { name: "Expo", icon: "expo" },
  { name: "Django", icon: "django" },
  { name: "Express", icon: "express" },
  { name: "Node", icon: "nodedotjs" },
  { name: "Bun", icon: "bun" },
  { name: "PostgreSQL", icon: "postgresql" },
  { name: "MongoDB", icon: "mongodb" },
  { name: "Redis", icon: "redis" },
  { name: "Prisma", icon: "prisma" },
  { name: "Zustand", icon: "https://raw.githubusercontent.com/pmndrs/zustand/main/docs/favicon.ico" },
  { name: "Tanstack Query", icon: "reactquery" },
  { name: "Postman", icon: "postman" },
  { name: "Tailwind", icon: "tailwindcss" },
  { name: "shadcn", icon: "shadcnui" },
  { name: "Motion", icon: "framer" },
  { name: "GSAP", icon: "greensock" },
  { name: "JavaScript", icon: "javascript" },
  { name: "TypeScript", icon: "typescript" },
  { name: "Python", icon: "python" },
  { name: "C/C++", icon: "cplusplus" },
  { name: "SQL", icon: "databricks" },
  { name: "Git", icon: "git" },
  { name: "Github", icon: "github" },
  { name: "Figma", icon: "figma" },
  { name: "Docker", icon: "docker" },
  { name: "Linux", icon: "linux" },
];

export default async function Home() {
  const projects = await getAllProjects();
  const blogs = await getAllBlogs();

  return (
    <div className="min-h-screen w-full relative overflow-x-hidden transition-colors duration-300">

      {/* Blue light following the mouse */}
      <CursorGlow />

      {/* Right Side Blueprint Navigation */}
      <RightNavbar />

      {/* Vertical Lines - Ultra-fine Micro Dots */}
      <div className="absolute top-0 bottom-0 left-[30%] w-0 border-r border-black/30 dark:border-white/[0.15] pointer-events-none hidden md:block" style={{ maskImage: 'repeating-linear-gradient(to bottom, black 0, black 1px, transparent 1px, transparent 6px)', WebkitMaskImage: 'repeating-linear-gradient(to bottom, black 0, black 1px, transparent 1px, transparent 6px)' }} />
      <div className="absolute top-0 bottom-0 right-[30%] w-0 border-r border-black/30 dark:border-white/[0.15] pointer-events-none hidden md:block" style={{ maskImage: 'repeating-linear-gradient(to bottom, black 0, black 1px, transparent 1px, transparent 6px)', WebkitMaskImage: 'repeating-linear-gradient(to bottom, black 0, black 1px, transparent 1px, transparent 6px)' }} />

      {/* Fixed Header: Banner + Profile */}
      <SiteHeader variant="home" />

      {/* Flowing Content Section */}
      <div className="ml-0 mr-0 md:ml-[30%] md:mr-[30%] pt-[calc(22vh+112px)] pb-0 px-4 flex flex-col z-10 relative min-h-screen">
        <Reveal y={24} delay={0.15}>
          <p className="text-[14px] sm:text-[15px] text-zinc-600 dark:text-zinc-300 leading-relaxed mt-4">
            Engineer / Artist. I love building, breaking, and shipping things.
          </p>
        </Reveal>

        <Reveal y={24} delay={0.25}>
        <ul className="text-[14px] sm:text-[15px] text-zinc-600 dark:text-zinc-300 leading-relaxed mt-4 pl-4">
          <li className="flex gap-1.5"><span>•</span><span>AI, open source, and developer tools excite me.</span></li>
          <li className="flex gap-1.5"><span>•</span><span>I believe actions speak louder than words, so I put my code where my mouth is.</span></li>
          <li className="flex gap-1.5"><span>•</span><span>Currently building open source tools and experimental AI projects.</span></li>
        </ul>
        </Reveal>

        {/* Buttons */}
        <RevealGroup y={20} delay={0.35} stagger={0.1} start="top 80%">
        <div className="flex flex-wrap items-center gap-2 mt-4">
          <Link href="/contact">
            <SoftPillButton
              as="span"
              variant="primary"
              className="px-3 py-1.5 !text-[12px]"
            >
              <div className="flex items-center gap-1.5">
                <svg viewBox="0 0 24 24" className="w-3.5 h-3.5" fill="none" stroke="currentColor" strokeWidth="2">
                  <rect x="3" y="4" width="18" height="18" rx="2" ry="2"></rect>
                  <line x1="16" y1="2" x2="16" y2="6"></line>
                  <line x1="8" y1="2" x2="8" y2="6"></line>
                  <line x1="3" y1="10" x2="21" y2="10"></line>
                </svg>
                Book an intro call
              </div>
            </SoftPillButton>
          </Link>
          <Link href="/contact">
            <SoftPillButton
              as="span"
              variant="secondary"
              className="px-3 py-1.5 !text-[12px]"
            >
              <div className="flex items-center gap-1.5 opacity-70 group-hover:opacity-100 transition-opacity duration-300">
                <svg viewBox="0 0 24 24" className="w-3.5 h-3.5" fill="none" stroke="currentColor" strokeWidth="2">
                  <path d="M4 4h16c1.1 0 2 .9 2 2v12c0 1.1-.9 2-2 2H4c-1.1 0-2-.9-2-2V6c0-1.1.9-2 2-2z"></path>
                  <polyline points="22,6 12,13 2,6"></polyline>
                </svg>
                Send an email
              </div>
            </SoftPillButton>
          </Link>
        </div>
        </RevealGroup>

        {/* Socials */}
        <Reveal y={24}>
        <div id="contact" className="mt-6 scroll-mt-24">
          <h2 className="text-[14px] text-zinc-500 mb-2">Here are my <span className="font-medium text-zinc-800 dark:text-zinc-200">socials</span></h2>
          <div className="flex flex-wrap gap-1.5">
            {[
              { name: 'GitHub', href: 'https://github.com/shivraj598', icon: <path d="M9 19c-5 1.5-5-2.5-7-3m14 6v-3.87a3.37 3.37 0 0 0-.94-2.61c3.14-.35 6.44-1.54 6.44-7A5.44 5.44 0 0 0 20 4.77 5.07 5.07 0 0 0 19.91 1S18.73.65 16 2.48a13.38 13.38 0 0 0-7 0C6.27.65 5.09 1 5.09 1A5.07 5.07 0 0 0 5 4.77a5.44 5.44 0 0 0-1.5 3.78c0 5.42 3.3 6.61 6.44 7A3.37 3.37 0 0 0 9 18.13V22" stroke="currentColor" strokeWidth="2" fill="none"></path> },
              { name: 'Twitter', href: 'https://x.com/shivrajme_', icon: <path d="M4 4l11.733 16h4.267l-11.733 -16zM4 20l6.768 -6.768M20 4l-6.768 6.768" stroke="currentColor" strokeWidth="2" fill="none" /> },
              { name: 'LinkedIn', href: 'https://www.linkedin.com/in/shivraj-timilsena/', icon: <path d="M16 8a6 6 0 0 1 6 6v7h-4v-7a2 2 0 0 0-2-2 2 2 0 0 0-2 2v7h-4v-7a6 6 0 0 1 6-6zM2 9h4v12H2zM4 2a2 2 0 1 1-2 2 2 2 0 0 1 2-2z" stroke="currentColor" strokeWidth="2" fill="none"></path> },
              { name: 'Discord', href: '#', icon: <path d="M18 5c-1.5-.7-3.2-1-5-1s-3.5.3-5 1c-1.5 3.5-2.5 8-2.5 8 1.5 2 4.5 3 7.5 3s6-1 7.5-3c0 0-1-4.5-2.5-8zM9 13c-.8 0-1.5-.7-1.5-1.5S8.2 10 9 10s1.5.7 1.5 1.5S9.8 13 9 13zm6 0c-.8 0-1.5-.7-1.5-1.5s.7-1.5 1.5-1.5 1.5.7 1.5 1.5-.7 1.5-1.5 1.5z" fill="currentColor"></path> },
            ].map((social, i) => (
              <SocialHoverCard key={i} socialName={social.name}>
                <SoftPillButton
                  as="a"
                  href={social.href}
                  target="_blank"
                  rel="noopener noreferrer"
                  variant="secondary"
                  className="px-3 py-1.5 !text-[12px]"
                >
                  <div className="flex items-center gap-1.5 opacity-70 group-hover:opacity-100 transition-opacity duration-300">
                    <svg viewBox="0 0 24 24" className="w-3.5 h-3.5">
                      {social.icon}
                    </svg>
                    {social.name}
                  </div>
                </SoftPillButton>
              </SocialHoverCard>
            ))}
          </div>
        </div>
        </Reveal>

        {/* Experiences */}
        <div id="experience" className="mt-6 flex flex-col relative z-10 scroll-mt-24">
          {/* Top full-width line */}
          <div
            className="absolute top-0 left-[-100vw] right-[-100vw] h-0 border-t border-black/30 dark:border-white/[0.15] pointer-events-none"
            style={{
              maskImage: 'repeating-linear-gradient(to right, black 0, black 1px, transparent 1px, transparent 6px)',
              WebkitMaskImage: 'repeating-linear-gradient(to right, black 0, black 1px, transparent 1px, transparent 6px)'
            }}
          />
          {/* Top Line Intersections */}
          <div className="absolute top-0 -left-4 w-[2px] h-[2px] bg-black/50 dark:bg-white/[0.25] -translate-x-1/2 -translate-y-1/2 pointer-events-none z-20" />
          <div className="absolute top-0 -right-4 w-[2px] h-[2px] bg-black/50 dark:bg-white/[0.25] translate-x-1/2 -translate-y-1/2 pointer-events-none z-20" />

          <div className="py-2 relative">
            <SplitHeading
              text="Experiences"
              className="text-[18px] font-bold text-zinc-900 dark:text-zinc-100 tracking-tight"
            />
            {/* Bottom full-width line */}
            <div
              className="absolute bottom-0 left-[-100vw] right-[-100vw] h-0 border-b border-black/30 dark:border-white/[0.15] pointer-events-none"
              style={{
                maskImage: 'repeating-linear-gradient(to right, black 0, black 1px, transparent 1px, transparent 6px)',
                WebkitMaskImage: 'repeating-linear-gradient(to right, black 0, black 1px, transparent 1px, transparent 6px)'
              }}
            />
            {/* Bottom Line Intersections */}
            <div className="absolute bottom-0 -left-4 w-[2px] h-[2px] bg-black/50 dark:bg-white/[0.25] -translate-x-1/2 translate-y-1/2 pointer-events-none z-20" />
            <div className="absolute bottom-0 -right-4 w-[2px] h-[2px] bg-black/50 dark:bg-white/[0.25] translate-x-1/2 translate-y-1/2 pointer-events-none z-20" />
          </div>

          <div className="block mt-0">
            <Reveal y={24}>
              <ExperienceList />
            </Reveal>

            {/* View All Button */}
            <div className="py-4 px-4 -mx-4 flex justify-center relative hover:bg-zinc-50 dark:hover:bg-zinc-900/20 transition-colors cursor-pointer rounded-b-lg mt-0">
              <div className="absolute bottom-0 left-[-100vw] right-[-100vw] h-0 border-b border-black/30 dark:border-white/[0.15] pointer-events-none" style={{ maskImage: 'repeating-linear-gradient(to right, black 0, black 1px, transparent 1px, transparent 6px)', WebkitMaskImage: 'repeating-linear-gradient(to right, black 0, black 1px, transparent 1px, transparent 6px)' }} />
              {/* Bottom Line Intersections */}
              <div className="absolute bottom-0 left-0 w-[2px] h-[2px] bg-black/50 dark:bg-white/[0.25] -translate-x-1/2 translate-y-1/2 pointer-events-none z-20" />
              <div className="absolute bottom-0 right-0 w-[2px] h-[2px] bg-black/50 dark:bg-white/[0.25] translate-x-1/2 translate-y-1/2 pointer-events-none z-20" />
              <SoundLink sound="button" href="/experience" className="relative group block mt-0">
                <div className="absolute -inset-[5px] border border-black/5 dark:border-white/5 rounded-[11px] pointer-events-none transition-colors duration-300 group-hover:border-black/10 dark:group-hover:border-white/10" />
                <div className="relative flex items-center gap-1.5 px-4 py-2 bg-zinc-50 hover:bg-zinc-100 dark:bg-[#09090b] dark:hover:bg-[#121214] text-zinc-600 hover:text-zinc-900 dark:text-zinc-400 dark:hover:text-zinc-100 rounded-[6px] text-[13px] font-medium transition-all duration-300 border border-black/5 dark:border-white/5 shadow-sm shadow-black/20 dark:shadow-lg dark:shadow-black/80">
                  View All
                  <svg viewBox="0 0 24 24" className="w-3.5 h-3.5 text-zinc-500 group-hover:text-zinc-900 dark:group-hover:text-zinc-300 transition-colors" fill="none" stroke="currentColor" strokeWidth="2.5">
                    <line x1="7" y1="17" x2="17" y2="7"></line>
                    <polyline points="7 7 17 7 17 17"></polyline>
                  </svg>
                </div>
              </SoundLink>
            </div>
          </div>
        </div>

        {/* Projects */}
        <div id="projects" className="mt-0 flex flex-col relative z-10 scroll-mt-24">
          <div className="py-2 relative mt-1">
            <SplitHeading
              text="Projects"
              className="text-[18px] font-bold text-zinc-900 dark:text-zinc-100 tracking-tight"
            />

            {/* Horizontal line below Projects heading */}
            <div className="absolute bottom-0 left-[-100vw] right-[-100vw] h-0 border-b border-black/30 dark:border-white/[0.15] pointer-events-none" style={{ maskImage: 'repeating-linear-gradient(to right, black 0, black 1px, transparent 1px, transparent 6px)', WebkitMaskImage: 'repeating-linear-gradient(to right, black 0, black 1px, transparent 1px, transparent 6px)' }} />
            {/* Intersections */}
            <div className="absolute bottom-0 -left-4 w-[2px] h-[2px] bg-black/50 dark:bg-white/[0.25] -translate-x-1/2 translate-y-1/2 pointer-events-none z-20" />
            <div className="absolute bottom-0 -right-4 w-[2px] h-[2px] bg-black/50 dark:bg-white/[0.25] translate-x-1/2 translate-y-1/2 pointer-events-none z-20" />
            <div className="absolute bottom-0 left-1/2 w-[2px] h-[2px] bg-black/50 dark:bg-white/[0.25] -translate-x-1/2 translate-y-1/2 pointer-events-none z-20" />
          </div>

          {/* Grid Container */}
          <div className="relative pt-6 pb-12 px-4">
            {/* Center Vertical Line */}
            <div className="absolute top-0 bottom-6 left-1/2 w-0 border-r border-black/30 dark:border-white/[0.15] pointer-events-none -translate-x-1/2 hidden md:block" style={{ maskImage: 'repeating-linear-gradient(to bottom, black 0, black 1px, transparent 1px, transparent 6px)', WebkitMaskImage: 'repeating-linear-gradient(to bottom, black 0, black 1px, transparent 1px, transparent 6px)' }} />

            <ProjectsGrid projects={projects} />

            {/* Bottom Horizontal Line */}
            <div className="absolute bottom-0 left-[-100vw] right-[-100vw] h-0 border-b border-black/30 dark:border-white/[0.15] pointer-events-none" style={{ maskImage: 'repeating-linear-gradient(to right, black 0, black 1px, transparent 1px, transparent 6px)', WebkitMaskImage: 'repeating-linear-gradient(to right, black 0, black 1px, transparent 1px, transparent 6px)' }} />
            {/* Intersections */}
            <div className="absolute bottom-0 -left-4 w-[2px] h-[2px] bg-black/50 dark:bg-white/[0.25] -translate-x-1/2 translate-y-1/2 pointer-events-none z-20" />
            <div className="absolute bottom-0 -right-4 w-[2px] h-[2px] bg-black/50 dark:bg-white/[0.25] translate-x-1/2 translate-y-1/2 pointer-events-none z-20" />
            {/* Center dot removed to prevent crossing the outline gap of the View All button */}
          </div>

          {/* View All Button */}
          <div className="flex justify-center -mt-[19px] pb-0 relative z-20">
            <SoundLink sound="button" href="/projects" className="relative group block">
              <div className="absolute -inset-[5px] border border-black/5 dark:border-white/5 rounded-[11px] pointer-events-none transition-colors duration-300 group-hover:border-black/10 dark:group-hover:border-white/10" />
              <div className="relative flex items-center gap-1.5 px-4 py-2 bg-zinc-50 hover:bg-zinc-100 dark:bg-[#09090b] dark:hover:bg-[#121214] text-zinc-600 hover:text-zinc-900 dark:text-zinc-400 dark:hover:text-zinc-100 rounded-[6px] text-[13px] font-medium transition-all duration-300 border border-black/5 dark:border-white/5 shadow-sm shadow-black/20 dark:shadow-lg dark:shadow-black/80">
                View All
                <svg viewBox="0 0 24 24" className="w-3.5 h-3.5 text-zinc-500 group-hover:text-zinc-900 dark:group-hover:text-zinc-300 transition-colors" fill="none" stroke="currentColor" strokeWidth="2.5">
                  <line x1="7" y1="17" x2="17" y2="7"></line>
                  <polyline points="7 7 17 7 17 17"></polyline>
                </svg>
              </div>
            </SoundLink>
          </div>
        </div>

        {/* Github Graph */}
        <Reveal y={24}>
          <GithubGraph />
        </Reveal>

        {/* Open Source Contributions */}
        <Reveal y={24}>
          <div id="opensource" className="scroll-mt-24">
            <OpenSourceContributions />
          </div>
        </Reveal>

        {/* Skills */}
        <div id="skills" className="mt-6 flex flex-col relative z-10 scroll-mt-24">
          {/* Top full-width line */}
          <div
            className="absolute top-0 left-[-100vw] right-[-100vw] h-0 border-t border-black/30 dark:border-white/[0.15] pointer-events-none"
            style={{
              maskImage: 'repeating-linear-gradient(to right, black 0, black 1px, transparent 1px, transparent 6px)',
              WebkitMaskImage: 'repeating-linear-gradient(to right, black 0, black 1px, transparent 1px, transparent 6px)'
            }}
          />
          {/* Top Line Intersections */}
          <div className="absolute top-0 -left-4 w-[2px] h-[2px] bg-black/50 dark:bg-white/[0.25] -translate-x-1/2 -translate-y-1/2 pointer-events-none z-20" />
          <div className="absolute top-0 -right-4 w-[2px] h-[2px] bg-black/50 dark:bg-white/[0.25] translate-x-1/2 -translate-y-1/2 pointer-events-none z-20" />

          <div className="py-2 relative mt-1">
            <SplitHeading
              text="Skills & Technologies"
              className="text-[18px] font-bold text-zinc-900 dark:text-zinc-100 tracking-tight"
            />

            {/* Horizontal line below Skills heading */}
            <div className="absolute bottom-0 left-[-100vw] right-[-100vw] h-0 border-b border-black/30 dark:border-white/[0.15] pointer-events-none" style={{ maskImage: 'repeating-linear-gradient(to right, black 0, black 1px, transparent 1px, transparent 6px)', WebkitMaskImage: 'repeating-linear-gradient(to right, black 0, black 1px, transparent 1px, transparent 6px)' }} />
            {/* Intersections */}
            <div className="absolute bottom-0 -left-4 w-[2px] h-[2px] bg-black/50 dark:bg-white/[0.25] -translate-x-1/2 translate-y-1/2 pointer-events-none z-20" />
            <div className="absolute bottom-0 -right-4 w-[2px] h-[2px] bg-black/50 dark:bg-white/[0.25] translate-x-1/2 translate-y-1/2 pointer-events-none z-20" />
          </div>

          <div className="relative pt-6 pb-2">
            <RevealGroup y={22} stagger={0.05} start="top 88%">
            <div className="flex flex-wrap gap-2 w-full">
              {skills.map((skill, index) => (
                <div key={index} className="grow flex items-center justify-center gap-2 px-3 py-1.5 bg-zinc-50 hover:bg-zinc-100 dark:bg-[#0a0a0a] dark:hover:bg-[#121214] border border-black/30 dark:border-white/[0.15] rounded-[6px] transition-colors duration-200 cursor-default">
                  <img
                    src={skill.icon.startsWith('http') ? skill.icon : `https://cdn.simpleicons.org/${skill.icon}`}
                    alt={skill.name}
                    width={14}
                    height={14}
                    loading="lazy"
                    decoding="async"
                    className={`h-3.5 w-3.5 opacity-80 ${skill.icon.startsWith('http') ? 'rounded-sm' : ''}`}
                  />
                  <span className="text-[13px] font-medium text-zinc-600 dark:text-zinc-400">{skill.name}</span>
                </div>
              ))}
            </div>
            </RevealGroup>
          </div>
        </div>

        {/* Blogs */}
        <div id="blogs" className="mt-6 flex flex-col relative scroll-mt-24">
          {/* Top full-width line */}
          <div
            className="absolute top-0 left-[-100vw] right-[-100vw] h-0 border-t border-black/30 dark:border-white/[0.15] pointer-events-none"
            style={{
              maskImage: 'repeating-linear-gradient(to right, black 0, black 1px, transparent 1px, transparent 6px)',
              WebkitMaskImage: 'repeating-linear-gradient(to right, black 0, black 1px, transparent 1px, transparent 6px)'
            }}
          />
          {/* Top Line Intersections */}
          <div className="absolute top-0 -left-4 w-[2px] h-[2px] bg-black/50 dark:bg-white/[0.25] -translate-x-1/2 -translate-y-1/2 pointer-events-none z-20" />
          <div className="absolute top-0 -right-4 w-[2px] h-[2px] bg-black/50 dark:bg-white/[0.25] translate-x-1/2 -translate-y-1/2 pointer-events-none z-20" />

          <div className="py-2 relative mt-1">
            <SplitHeading
              text="Blogs"
              className="text-[18px] font-bold text-zinc-900 dark:text-zinc-100 tracking-tight"
            />

            {/* Horizontal line below Blogs heading */}
            <div className="absolute bottom-0 left-[-100vw] right-[-100vw] h-0 border-b border-black/30 dark:border-white/[0.15] pointer-events-none" style={{ maskImage: 'repeating-linear-gradient(to right, black 0, black 1px, transparent 1px, transparent 6px)', WebkitMaskImage: 'repeating-linear-gradient(to right, black 0, black 1px, transparent 1px, transparent 6px)' }} />
            {/* Intersections */}
            <div className="absolute bottom-0 -left-4 w-[2px] h-[2px] bg-black/50 dark:bg-white/[0.25] -translate-x-1/2 translate-y-1/2 pointer-events-none z-20" />
            <div className="absolute bottom-0 -right-4 w-[2px] h-[2px] bg-black/50 dark:bg-white/[0.25] translate-x-1/2 translate-y-1/2 pointer-events-none z-20" />
          </div>

          <BlogList blogs={blogs} />
        </div>

        {/* Minimal Quote Section */}
        <Reveal y={20}>
        <div className="mt-12 flex flex-col items-center justify-center relative py-12">
          <div className="max-w-[480px] w-full flex flex-col items-center">
            <h3 className="text-[16px] font-medium text-center leading-relaxed text-zinc-500 dark:text-zinc-400 mb-6 italic">
              &quot;Pressure is a privilege.&quot;
            </h3>

            <div className="flex items-center gap-3 text-[10px] font-medium tracking-[0.2em] text-zinc-400 dark:text-zinc-600 uppercase">
              <div className="w-4 h-[1px] bg-zinc-200 dark:bg-zinc-800" />
              BILLIE JEAN KING
              <div className="w-4 h-[1px] bg-zinc-200 dark:bg-zinc-800" />
            </div>
          </div>
        </div>
        </Reveal>

        {/* Fading Grid Filler */}
        <div className="flex-grow w-[calc(100%+32px)] -mx-4 h-[300px] relative mt-4">
          {/* Top full-width line */}
          <div
            className="absolute top-0 left-[-100vw] right-[-100vw] h-0 border-t border-black/30 dark:border-white/[0.15] pointer-events-none z-10"
            style={{
              maskImage: 'repeating-linear-gradient(to right, black 0, black 1px, transparent 1px, transparent 6px)',
              WebkitMaskImage: 'repeating-linear-gradient(to right, black 0, black 1px, transparent 1px, transparent 6px)'
            }}
          />
          {/* Intersections */}
          <div className="absolute top-0 left-0 w-[2px] h-[2px] bg-black/50 dark:bg-white/[0.25] -translate-x-1/2 -translate-y-1/2 pointer-events-none z-20" />
          <div className="absolute top-0 right-0 w-[2px] h-[2px] bg-black/50 dark:bg-white/[0.25] translate-x-1/2 -translate-y-1/2 pointer-events-none z-20" />

          <FooterBackground />
        </div>

      </div>

    </div>
  );
}
