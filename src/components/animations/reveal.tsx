"use client";

import { useRef, type CSSProperties, type ReactNode } from "react";
import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import { useGSAP } from "@gsap/react";

gsap.registerPlugin(useGSAP, ScrollTrigger);

type RevealProps = {
  children: ReactNode;
  className?: string;
  y?: number;
  delay?: number;
  duration?: number;
  as?: "div" | "section" | "span" | "article";
  style?: CSSProperties;
};

export function Reveal({
  children,
  className,
  y = 32,
  delay = 0,
  duration = 0.9,
  as = "div",
  style,
}: RevealProps) {
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
        gsap.fromTo(
          el,
          { autoAlpha: 0, y },
          {
            autoAlpha: 1,
            y: 0,
            duration,
            delay,
            ease: "power3.out",
            overwrite: "auto",
            scrollTrigger: { trigger: el, start: "top 88%", once: true },
          }
        );
      });

      return () => mm.revert();
    },
    { scope: ref }
  );

  const Tag = as as "div";

  return (
    <Tag ref={ref as never} className={className} style={style}>
      {children}
    </Tag>
  );
}

type RevealGroupProps = {
  children: ReactNode;
  className?: string;
  y?: number;
  delay?: number;
  stagger?: number;
  duration?: number;
  start?: string;
  as?: "div" | "section" | "ul";
  style?: CSSProperties;
};

export function RevealGroup({
  children,
  className,
  y = 32,
  delay = 0,
  stagger = 0.09,
  duration = 0.8,
  start = "top 85%",
  as = "div",
  style,
}: RevealGroupProps) {
  const ref = useRef<HTMLElement | null>(null);

  useGSAP(
    () => {
      const el = ref.current;
      if (!el) return;

      const mm = gsap.matchMedia();
      mm.add("(prefers-reduced-motion: reduce)", () => {
        gsap.set(el.children, { clearProps: "all" });
      });
      mm.add("(prefers-reduced-motion: no-preference)", () => {
        gsap.fromTo(
          el.children,
          { autoAlpha: 0, y },
          {
            autoAlpha: 1,
            y: 0,
            duration,
            delay,
            ease: "power3.out",
            stagger,
            overwrite: "auto",
            scrollTrigger: { trigger: el, start, once: true },
          }
        );
      });

      return () => mm.revert();
    },
    { scope: ref }
  );

  const Tag = as as "div";

  return (
    <Tag ref={ref as never} className={className} style={style}>
      {children}
    </Tag>
  );
}