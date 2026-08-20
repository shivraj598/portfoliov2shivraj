"use client";

import { useRef } from "react";
import { gsap } from "gsap";
import { SplitText } from "gsap/SplitText";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import { useGSAP } from "@gsap/react";

gsap.registerPlugin(useGSAP, ScrollTrigger, SplitText);

type SplitHeadingProps = {
  text: string;
  as?: "h1" | "h2" | "h3" | "span";
  className?: string;
  triggerStart?: string;
};

export function SplitHeading({ text, as = "h2", className, triggerStart = "top 90%" }: SplitHeadingProps) {
  const ref = useRef<HTMLElement | null>(null);

  useGSAP(
    () => {
      const el = ref.current;
      if (!el) return;

      const mm = gsap.matchMedia();
      mm.add("(prefers-reduced-motion: reduce)", () => {
        gsap.set(el, { clearProps: "all" });
      });
      mm.add("(prefers-reduced-motion: no-preference)", () => {
        const split = new SplitText(el, {
          type: "words",
          wordsClass: "sh-word",
        });
        gsap.fromTo(
          split.words,
          { yPercent: 120, autoAlpha: 0 },
          {
            yPercent: 0,
            autoAlpha: 1,
            duration: 0.75,
            ease: "power3.out",
            stagger: 0.055,
            scrollTrigger: { trigger: el, start: triggerStart, once: true },
          }
        );
      });

      return () => mm.revert();
    },
    { scope: ref }
  );

  const Tag = as as "h2";

  return (
    <Tag ref={ref as never} className={className}>
      {text}
    </Tag>
  );
}