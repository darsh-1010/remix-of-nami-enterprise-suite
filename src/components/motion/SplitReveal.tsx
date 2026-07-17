"use client";

import { useEffect, useRef, type ElementType, type ReactNode } from "react";
import gsap from "gsap";
import { SplitText } from "gsap/SplitText";
import { ScrollTrigger } from "gsap/ScrollTrigger";

gsap.registerPlugin(SplitText, ScrollTrigger);

interface SplitRevealProps {
  as?: ElementType;
  children: ReactNode;
  className?: string;
  by?: "lines" | "words";
  delay?: number;
  start?: string;
}

/** Staggered line/word reveal driven by GSAP SplitText + ScrollTrigger, matching siwacap's headline choreography. */
export function SplitReveal({
  as: Tag = "div",
  children,
  className,
  by = "lines",
  delay = 0,
  start = "top 85%",
}: SplitRevealProps) {
  const ref = useRef<HTMLElement>(null);

  useEffect(() => {
    const el = ref.current;
    if (!el) return;

    const prefersReducedMotion = window.matchMedia("(prefers-reduced-motion: reduce)").matches;
    if (prefersReducedMotion) return;

    let cancelled = false;
    let split: SplitText | undefined;
    let tween: gsap.core.Tween | undefined;

    // Wait for the webfont to finish loading first — splitting/masking text before the real
    // font metrics are known bakes in the fallback font's line height, which clips descenders
    // (g, y, p, q, j) once the real font swaps in.
    document.fonts.ready.then(() => {
      if (cancelled) return;

      split = new SplitText(el, {
        type: by,
        mask: by,
      });

      const targets = by === "lines" ? split.lines : split.words;
      gsap.set(targets, { yPercent: 110, opacity: 0 });

      tween = gsap.to(targets, {
        yPercent: 0,
        opacity: 1,
        duration: 1,
        ease: "power4.out",
        stagger: 0.08,
        delay,
        scrollTrigger: {
          trigger: el,
          start,
          once: true,
        },
      });
    });

    return () => {
      cancelled = true;
      tween?.scrollTrigger?.kill();
      tween?.kill();
      split?.revert();
    };
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  return (
    <Tag ref={ref} className={className}>
      {children}
    </Tag>
  );
}
