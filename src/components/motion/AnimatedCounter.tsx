"use client";

import { useEffect, useLayoutEffect, useRef, useState } from "react";
import { animate, useInView } from "framer-motion";

interface AnimatedCounterProps {
  value: string;
  duration?: number;
  className?: string;
}

function parseValue(value: string) {
  const match = value.match(/^([^\d]*)(\d+(?:\.\d+)?)(.*)$/);
  if (!match) return { prefix: "", target: 0, decimals: 0, suffix: value };
  const [, prefix, numberPart, suffix] = match;
  const decimals = numberPart.includes(".") ? numberPart.split(".")[1].length : 0;
  return { prefix, target: parseFloat(numberPart), decimals, suffix };
}

export function AnimatedCounter({ value, duration = 1.6, className }: AnimatedCounterProps) {
  const ref = useRef<HTMLDivElement>(null);
  const isInView = useInView(ref, { once: true, margin: "-80px" });
  const { prefix, target, decimals, suffix } = parseValue(value);
  // Start at the final value so the number is correct if JS never loads/hydrates;
  // once the browser is running, reset to 0 (before paint, so there's no visible flash)
  // and count up when it scrolls into view.
  const [display, setDisplay] = useState(target);

  useLayoutEffect(() => {
    setDisplay(0);
  }, []);

  useEffect(() => {
    if (!isInView) return;
    const controls = animate(0, target, {
      duration,
      ease: [0.16, 1, 0.3, 1],
      onUpdate: (v) => setDisplay(v),
    });
    return () => controls.stop();
  }, [isInView, target, duration]);

  return (
    <div ref={ref} className={className}>
      {prefix}
      {display.toFixed(decimals)}
      {suffix}
    </div>
  );
}
