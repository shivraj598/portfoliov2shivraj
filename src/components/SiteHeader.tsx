"use client";

import Image from "next/image";
import SoundLink from "@/components/SoundLink";
import { BannerParticles } from "@/components/BannerParticles";
import { CurrentTime } from "@/components/CurrentTime";
import { CommandMenu } from "@/components/command-menu";
import { ThemeToggle } from "@/components/theme-toggle";
import { SplitHeading } from "@/components/animations/split-heading";
import { ArrowLeft } from "lucide-react";
import banner from "../app/banner.png";
import { useState, useEffect } from "react";

type SiteHeaderProps =
  | { variant: "home" }
  | {
      variant: "subpage";
      backHref: string;
      title: string;
      subtitle?: string;
    };

export function SiteHeader(props: SiteHeaderProps) {
  const [isScrolled, setIsScrolled] = useState(false);

  useEffect(() => {
    const onScroll = () => setIsScrolled(window.scrollY > 50);
    onScroll();
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  const bannerH = isScrolled ? "10vh" : "22vh";
  const rowH = isScrolled ? 56 : 112;
  const rowTop = `calc(${bannerH} + ${rowH}px)`;
  const lineTop1 = bannerH;
  const lineTop2 = rowTop;

  return (
    <div className="fixed inset-x-0 top-0 z-50">
      {/* Horizontal Lines - Ultra-fine Micro Dots */}
      <div
        className="absolute left-0 right-0 h-0 border-b border-black/30 dark:border-white/[0.15] pointer-events-none transition-[top] duration-300 ease-in-out"
        style={{
          top: lineTop1,
          maskImage: "repeating-linear-gradient(to right, black 0, black 1px, transparent 1px, transparent 6px)",
          WebkitMaskImage: "repeating-linear-gradient(to right, black 0, black 1px, transparent 1px, transparent 6px)",
        }}
      />
      <div
        className="absolute left-0 right-0 h-0 border-b border-black/30 dark:border-white/[0.15] pointer-events-none transition-[top] duration-300 ease-in-out"
        style={{
          top: lineTop2,
          maskImage: "repeating-linear-gradient(to right, black 0, black 1px, transparent 1px, transparent 6px)",
          WebkitMaskImage: "repeating-linear-gradient(to right, black 0, black 1px, transparent 1px, transparent 6px)",
        }}
      />

      {/* Ultra-Tiny Solid Nodes */}
      {[
        { top: lineTop1, left: "30%" },
        { top: lineTop1, right: "30%" },
        { top: lineTop2, left: "30%" },
        { top: lineTop2, right: "30%" },
      ].map((pos, i) => (
        <div
          key={i}
          className="absolute w-[2px] h-[2px] bg-black/50 dark:bg-white/[0.25] pointer-events-none z-10 hidden md:block transition-[top] duration-300 ease-in-out"
          style={{
            top: pos.top,
            left: pos.left,
            right: pos.right,
            transform: `translate(${pos.right ? "50%" : "-50%"}, -50%)`,
          }}
        />
      ))}

      {/* Cell 1: Banner */}
      <div
        className="absolute left-0 right-0 md:left-[30%] md:right-[30%] top-0 -z-0 pointer-events-auto overflow-hidden bg-white dark:bg-transparent shadow-[0_4px_12px_rgba(2,6,23,0.04)] dark:shadow-[0_4px_12px_rgba(2,6,23,0.10)] transition-[height] duration-300 ease-in-out"
        style={{ height: bannerH }}
      >
        <Image
          src={banner}
          alt=""
          fill
          fetchPriority="high"
          sizes="(min-width: 768px) 40vw, 100vw"
          quality={100}
          className="object-cover object-top"
        />
        <BannerParticles />
        <div className="absolute inset-x-0 bottom-0 h-10 pointer-events-none z-[5] bg-gradient-to-t from-white/90 to-transparent dark:from-black/50 dark:to-transparent" />
        <div className="absolute left-0 top-0 bottom-0 w-8 pointer-events-none z-20 bg-gradient-to-r from-white/90 to-transparent dark:from-black/40 dark:to-transparent" />
        <div className="absolute right-0 top-0 bottom-0 w-8 pointer-events-none z-20 bg-gradient-to-l from-white/90 to-transparent dark:from-black/40 dark:to-transparent" />
        <div className="absolute bottom-3 right-2 z-10 pointer-events-auto">
          <CurrentTime />
        </div>
      </div>

      {/* Cell 2: Header Row */}
      <div
        className="absolute left-0 right-0 md:left-[30%] md:right-[30%] flex items-center px-4 bg-[#f4f4f2] dark:bg-black transition-[top,height] duration-300 ease-in-out"
        style={{ top: bannerH, height: rowH }}
      >
        <div className="flex w-full items-center justify-between">
          {props.variant === "home" ? (
            <div className="flex items-center gap-4 sm:gap-5">
              <div
                className="relative p-[3px] rounded-[6px] sm:rounded-[8px] border-[1.5px] border-black/30 dark:border-white/[0.15] shrink-0 transition-all duration-300 ease-in-out"
              >
                <div
                  className="relative rounded-[3px] sm:rounded-[5px] overflow-hidden bg-zinc-100 dark:bg-zinc-900 transition-all duration-300 ease-in-out"
                  style={{
                    width: isScrolled ? 40 : 64,
                    height: isScrolled ? 40 : 64,
                  }}
                >
                  <Image
                    src="https://github.com/shivraj598.png"
                    alt="Profile"
                    width={240}
                    height={240}
                    quality={90}
                    fetchPriority="high"
                    sizes="(min-width: 640px) 120px, 96px"
                    className="h-full w-full object-cover opacity-90 grayscale contrast-100 mix-blend-multiply dark:mix-blend-normal"
                  />
                </div>
              </div>

              <div
                className="flex flex-col justify-center transition-all duration-300 ease-in-out"
                style={{ paddingTop: isScrolled ? 4 : 32 }}
              >
                <SplitHeading
                  as="h1"
                  text="Shivraj Timilsena"
                  className={
                    isScrolled
                      ? "text-[16px] sm:text-[18px] font-bold text-zinc-800 dark:text-zinc-100 tracking-tight leading-none mb-0.5 [text-shadow:-1.5px_0_0_rgba(0,200,255,0.3),1.5px_0_0_rgba(255,80,0,0.3)] dark:[text-shadow:-1.5px_0_0_rgba(0,200,255,0.6),1.5px_0_0_rgba(255,80,0,0.6)]"
                      : "text-[20px] sm:text-[24px] font-bold text-zinc-800 dark:text-zinc-100 tracking-tight leading-none mb-0.5 [text-shadow:-1.5px_0_0_rgba(0,200,255,0.3),1.5px_0_0_rgba(255,80,0,0.3)] dark:[text-shadow:-1.5px_0_0_rgba(0,200,255,0.6),1.5px_0_0_rgba(255,80,0,0.6)]"
                  }
                  triggerStart="top 75%"
                />
                <p
                  className="text-zinc-500 dark:text-zinc-400 transition-all duration-300 ease-in-out"
                  style={{ fontSize: isScrolled ? 11 : undefined }}
                >
                  {isScrolled ? "Full Stack Developer · AIML" : "Full Stack Developer · Advancing in AIML"}
                </p>
              </div>
            </div>
          ) : (
            <div className="flex items-center gap-5">
              <SoundLink
                sound="back"
                href={props.backHref}
                className="group flex items-center justify-center w-8 h-8 rounded-md bg-zinc-100 dark:bg-zinc-900 border border-zinc-200/50 dark:border-zinc-800/50 text-zinc-400 hover:text-zinc-900 dark:hover:text-zinc-100 transition-all hover:bg-zinc-200 dark:hover:bg-zinc-800"
              >
                <ArrowLeft className="w-4 h-4 transition-transform group-hover:-translate-x-0.5" />
              </SoundLink>
              <div className="flex flex-col justify-center">
                <h1
                  className="font-bold text-zinc-800 dark:text-zinc-100 tracking-tight leading-none mb-0.5 [text-shadow:-1.5px_0_0_rgba(0,200,255,0.3),1.5px_0_0_rgba(255,80,0,0.3)] dark:[text-shadow:-1.5px_0_0_rgba(0,200,255,0.6),1.5px_0_0_rgba(255,80,0,0.6)] transition-all duration-300 ease-in-out"
                  style={{ fontSize: isScrolled ? 16 : undefined }}
                >
                  {props.title}
                </h1>
                {props.subtitle ? (
                  <p className="text-[12px] text-zinc-500 dark:text-zinc-400 font-medium">
                    {props.subtitle}
                  </p>
                ) : null}
              </div>
            </div>
          )}

          <div className="flex items-start justify-end gap-2 sm:gap-3 py-1 transition-all duration-300 ease-in-out"
            style={{ height: isScrolled ? 40 : undefined }}
          >
            <CommandMenu />
            <ThemeToggle className="dark:text-zinc-400 hover:dark:text-zinc-300" />
          </div>
        </div>
      </div>
    </div>
  );
}
