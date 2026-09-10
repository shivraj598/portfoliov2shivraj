"use client";

import { ProjectCard } from "@/components/ProjectsGrid";
import type { Project } from "@/data/projectsData";
import { RightNavbar } from "@/components/RightNavbar";
import { SiteHeader } from "@/components/SiteHeader";
import { useState, useEffect, useRef } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { X } from "lucide-react";
import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import { useGSAP } from "@gsap/react";

gsap.registerPlugin(useGSAP, ScrollTrigger);

export default function ProjectsIndex({ projects }: { projects: Project[] }) {
  const [activeVideo, setActiveVideo] = useState<string | null>(null);
  const rowsRef = useRef<HTMLDivElement>(null);

  useGSAP(
    () => {
      const el = rowsRef.current;
      if (!el) return;

      const mm = gsap.matchMedia();
      mm.add("(prefers-reduced-motion: reduce)", () => {
        gsap.set(el.children, { clearProps: "all" });
      });
      mm.add("(prefers-reduced-motion: no-preference)", () => {
        gsap.fromTo(
          el.children,
          { autoAlpha: 0, y: 44 },
          {
            autoAlpha: 1,
            y: 0,
            duration: 0.85,
            ease: "power3.out",
            stagger: 0.14,
            overwrite: "auto",
            scrollTrigger: { trigger: el, start: "top 82%", once: true },
          }
        );
      });

      return () => mm.revert();
    },
    { scope: rowsRef }
  );

  useEffect(() => {
    const handler = (e: KeyboardEvent) => {
      if (e.key === "Escape") setActiveVideo(null);
    };
    window.addEventListener("keydown", handler);
    return () => window.removeEventListener("keydown", handler);
  }, []);

  return (
    <>
      <div className="min-h-screen w-full relative overflow-x-hidden transition-colors duration-300">
        {/* Right Side Blueprint Navigation */}
        <RightNavbar />

        {/* Fixed Header: Banner + Back + Title */}
        <SiteHeader
          variant="subpage"
          backHref="/"
          title="All Projects"
          subtitle="Full Project Archive"
        />

        {/* Content Section */}
        <div
          className="ml-0 mr-0 md:ml-[30%] md:mr-[30%] pt-[calc(22vh+112px)] pb-16 px-4 flex flex-col z-10 relative"
        >
          <div className="relative pt-6 pb-6">
            <div ref={rowsRef} className="flex flex-col relative z-10 w-full">
              {Array.from({ length: Math.ceil(projects.length / 2) }).map((_, rowIndex) => {
                const rowProjects = projects.slice(rowIndex * 2, rowIndex * 2 + 2);
                return (
                  <div key={rowIndex} className="flex flex-col relative w-full">
                    <div className={`grid grid-cols-1 md:grid-cols-2 gap-x-10 ${rowIndex === 0 ? 'pb-10 md:pb-6 gap-y-10 md:gap-y-0' : rowIndex === Math.ceil(projects.length / 2) - 1 ? 'pt-0 md:pt-6 gap-y-10 md:gap-y-0' : 'pb-10 md:pb-6 pt-0 md:pt-6 gap-y-10 md:gap-y-0'}`}>
                      {rowProjects.map((project) => (
                        <ProjectCard
                          key={project.title}
                          project={project}
                          setActiveVideo={setActiveVideo}
                          isPriority={rowIndex === 0}
                        />
                      ))}
                    </div>
                  </div>
                );
              })}
            </div>
          </div>
        </div>
      </div>

      {/* MODAL */}
      <AnimatePresence>
        {activeVideo && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            onClick={() => setActiveVideo(null)}
            className="fixed inset-0 bg-black/70 backdrop-blur-md flex items-center justify-center z-[100] cursor-pointer"
          >
            <motion.div
              initial={{ scale: 0.95, opacity: 0 }}
              animate={{ scale: 1, opacity: 1 }}
              exit={{ scale: 0.95, opacity: 0 }}
              onClick={(e) => e.stopPropagation()}
              className="relative bg-black rounded-xl overflow-hidden w-[90%] max-w-3xl shadow-2xl"
            >
              <button
                onClick={() => setActiveVideo(null)}
                className="absolute top-3 right-3 p-2 bg-neutral-800/80 hover:bg-neutral-700 rounded-full cursor-pointer transition-colors z-50"
              >
                <X size={20} className="text-neutral-200" />
              </button>

              {activeVideo.includes("youtube") ? (
                <iframe
                  src={activeVideo}
                  className="w-full aspect-video border-0"
                  allowFullScreen
                ></iframe>
              ) : (
                <video src={activeVideo} className="w-full h-auto" controls autoPlay />
              )}
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>
    </>
  );
}
