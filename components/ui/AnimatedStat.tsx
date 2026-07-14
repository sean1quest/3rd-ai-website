"use client";

import { useEffect, useRef, useState } from "react";
import { useInView } from "framer-motion";

type AnimatedStatProps = {
  value: number;
  decimals?: number;
  prefix?: string;
  suffix?: string;
  duration?: number;
};

export default function AnimatedStat({
  value,
  decimals = 0,
  prefix = "",
  suffix = "",
  duration = 1400,
}: AnimatedStatProps) {
  const ref = useRef<HTMLSpanElement | null>(null);
  const inView = useInView(ref, { once: true, margin: "-40px" });
  const [display, setDisplay] = useState(0);
  // Bumping this replays the animation — used both for the initial
  // scroll-into-view trigger and for replaying on hover.
  const [playToken, setPlayToken] = useState(0);

  useEffect(() => {
    if (!inView) return;

    let startTime: number | null = null;
    let frameId = 0;

    const step = (timestamp: number) => {
      if (startTime === null) startTime = timestamp;
      const progress = Math.min((timestamp - startTime) / duration, 1);
      const eased = 1 - Math.pow(1 - progress, 3); // ease-out cubic
      setDisplay(value * eased);

      if (progress < 1) {
        frameId = requestAnimationFrame(step);
      }
    };

    frameId = requestAnimationFrame(step);
    return () => cancelAnimationFrame(frameId);
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [inView, value, duration, playToken]);

  const formatted =
    decimals > 0
      ? display.toFixed(decimals)
      : Math.round(display).toLocaleString();

  return (
    <span ref={ref} onMouseEnter={() => setPlayToken((t) => t + 1)}>
      {prefix}
      {formatted}
      {suffix}
    </span>
  );
}
