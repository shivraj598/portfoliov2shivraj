"use client";

import { RightNavbar } from "@/components/RightNavbar";
import { SiteHeader } from "@/components/SiteHeader";
import { OpenSourceContributions } from "@/components/OpenSourceContributions";
import { motion } from "framer-motion";

export default function PullRequestsPage() {
  return (
    <div className="min-h-screen w-full relative overflow-x-hidden transition-colors duration-300">
      {/* Right Side Blueprint Navigation */}
      <RightNavbar />

      {/* Fixed Header: Banner + Back + Title */}
      <SiteHeader
        variant="subpage"
        backHref="/"
        title="Pull Requests"
        subtitle="Open Source Contributions"
      />

      {/* Content Section */}
      <motion.div 
        initial={{ opacity: 0, filter: "blur(8px)", y: 12 }}
        animate={{ opacity: 1, filter: "blur(0px)", y: 0 }}
        transition={{ duration: 0.8, ease: [0.16, 1, 0.3, 1], delay: 0.05 }}
        className="ml-0 mr-0 md:ml-[30%] md:mr-[30%] pt-[calc(22vh+112px)] pb-16 px-4 flex flex-col z-10 relative"
      >
        <div className="mt-4">
          <OpenSourceContributions isFullPage />
        </div>
      </motion.div>
    </div>
  );
}
