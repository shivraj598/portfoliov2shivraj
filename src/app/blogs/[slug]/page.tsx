import { getAllBlogs, getBlogContent } from "@/lib/content";
import { MDXRemote } from "next-mdx-remote-client/rsc";
import { mdxComponents } from "@/lib/mdx-components";
import { Reveal } from "@/components/animations/reveal";
import { RightNavbar } from "@/components/RightNavbar";
import { SiteHeader } from "@/components/SiteHeader";
import { notFound } from "next/navigation";
import { Calendar } from "lucide-react";

export const dynamicParams = false;

export async function generateStaticParams() {
  return getAllBlogs()
    .filter((post) => !post.external)
    .map((post) => ({
      slug: post.slug,
    }));
}

const ClapIcon = () => (
  <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="w-3.5 h-3.5">
    <path d="M10 20v-5.5" />
    <path d="M14 20v-5.5" />
    <path d="M10.5 7A2.5 2.5 0 0 1 13 4.5V2" />
    <path d="M13.5 7A2.5 2.5 0 0 0 11 4.5V2" />
    <path d="M16 12.5V9a2.5 2.5 0 0 0-5 0" />
    <path d="M8 12.5V9a2.5 2.5 0 0 1 5 0" />
    <path d="M12 20a4 4 0 0 1-4-4V7a2 2 0 0 1 4 0v9" />
    <path d="M16 16a4 4 0 0 0 4-4v-3a2 2 0 0 0-4 0" />
    <path d="M8 16a4 4 0 0 1-4-4v-3a2 2 0 0 1 4 0" />
  </svg>
);

export default async function BlogPostPage({ params }: { params: Promise<{ slug: string }> }) {
  const { slug } = await params;
  const post = getBlogContent(slug);

  if (!post || post.external) {
    notFound();
  }

  return (
    <div className="min-h-screen w-full relative overflow-x-hidden transition-colors duration-300">
      {/* Right Side Blueprint Navigation */}
      <RightNavbar />

      {/* Vertical Lines - Ultra-fine Micro Dots */}
      <div className="absolute top-0 bottom-0 left-[30%] w-0 border-r border-black/30 dark:border-white/[0.15] pointer-events-none hidden md:block" style={{ maskImage: 'repeating-linear-gradient(to bottom, black 0, black 1px, transparent 1px, transparent 6px)', WebkitMaskImage: 'repeating-linear-gradient(to bottom, black 0, black 1px, transparent 1px, transparent 6px)' }} />
      <div className="absolute top-0 bottom-0 right-[30%] w-0 border-r border-black/30 dark:border-white/[0.15] pointer-events-none hidden md:block" style={{ maskImage: 'repeating-linear-gradient(to bottom, black 0, black 1px, transparent 1px, transparent 6px)', WebkitMaskImage: 'repeating-linear-gradient(to bottom, black 0, black 1px, transparent 1px, transparent 6px)' }} />

      {/* Fixed Header: Banner + Back + Title */}
      <SiteHeader
        variant="subpage"
        backHref="/blogs"
        title={post.title}
        subtitle={`Blogs/${post.title}`}
      />

      {/* Content Section */}
      <Reveal as="div" y={20} className="ml-0 mr-0 md:ml-[30%] md:mr-[30%] pt-[calc(22vh+112px)] pb-16 px-4 flex flex-col z-10 relative">

        {/* Title + Meta */}
        <div className="flex flex-col gap-3 mt-8">
          <h1 className="text-[24px] sm:text-[28px] font-bold text-zinc-900 dark:text-zinc-50 tracking-tight leading-none">
            {post.title}
          </h1>
          <div className="flex flex-wrap items-center gap-4 text-[12px] text-zinc-500 dark:text-zinc-400">
            <div className="flex items-center gap-1.5">
              <Calendar className="w-3.5 h-3.5" />
              <span>{post.date}</span>
            </div>
            {post.claps > 0 && (
              <div className="flex items-center gap-1.5 text-emerald-600 dark:text-emerald-500 font-medium">
                <ClapIcon />
                <span>{post.claps}</span>
              </div>
            )}
            <div className="hidden sm:block w-[1px] h-3 bg-zinc-300 dark:bg-zinc-700" />
            <div className="flex flex-wrap items-center gap-2">
              {post.tags.map((tag) => (
                <span key={tag} className="px-2 py-0.5 rounded-[4px] border border-black/30 dark:border-white/[0.15] text-[11px] text-zinc-600 dark:text-zinc-400 bg-white/50 dark:bg-black/20">
                  {tag}
                </span>
              ))}
            </div>
          </div>
        </div>

        {/* Dashed Divider */}
        <div className="relative mt-8 mb-2">
          <div className="absolute left-[-100vw] right-[-100vw] h-0 border-b border-black/30 dark:border-white/[0.15] pointer-events-none" style={{ maskImage: 'repeating-linear-gradient(to right, black 0, black 1px, transparent 1px, transparent 6px)', WebkitMaskImage: 'repeating-linear-gradient(to right, black 0, black 1px, transparent 1px, transparent 6px)' }} />
          <div className="absolute left-0 w-[2px] h-[2px] bg-black/50 dark:bg-white/[0.25] -translate-x-1/2 translate-y-[-1px] pointer-events-none z-20" />
          <div className="absolute right-0 w-[2px] h-[2px] bg-black/50 dark:bg-white/[0.25] translate-x-1/2 translate-y-[-1px] pointer-events-none z-20" />
        </div>

        {/* Body */}
        <div className="mt-4">
          <MDXRemote source={post.body} components={mdxComponents} />
        </div>
      </Reveal>
    </div>
  );
}