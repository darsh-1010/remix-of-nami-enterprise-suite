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

    // Wait for the webfont to finish loading first, so line splitting measures the real
    // font metrics rather than the fallback font's.
    document.fonts.ready.then(() => {
      if (cancelled) return;

      // Deliberately NOT using SplitText's `mask` option: it wraps each line in an
      // overflow-hidden box sized to the line's CSS line-height, which clips descenders
      // (g, y, p, q, j) whenever a heading uses a tight leading (e.g. leading-[0.98]) for
      // a big display headline. Animating the split lines directly (no clipping wrapper)
      // avoids that entirely, at the cost of the hard-edge "wipe" look.
      split = new SplitText(el, { type: by });

      const targets = by === "lines" ? split.lines : split.words;
      gsap.set(targets, { y: 32, opacity: 0 });

      tween = gsap.to(targets, {
        y: 0,
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
