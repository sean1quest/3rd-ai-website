"use client";

import { useEffect, useRef } from "react";

// Hero background visual — recreates the exact structure of the
// spectrum graphic used at the base of the Architecture section
// (public/images/platform-banner.png), measured pixel-by-pixel: 169
// bars at their real x-positions and heights, each built from its own
// real dash-segment pattern (not a synthesized/uniform one), loaded
// from public/data/telemetry-envelope.json. Animated by scaling that
// real structure with a slow up/down breathing motion, in the brand's
// cyan, rather than regenerating a guessed pattern each frame.

const CYAN = "34, 211, 238";

type Bar = {
  x: number; // fraction of width
  h: number; // fraction of height (bar's total span)
  segs: [number, number][]; // [start,end] fractions within the bar's own span
};

export default function TelemetryBars() {
  const canvasRef = useRef<HTMLCanvasElement | null>(null);

  useEffect(() => {
    const canvas = canvasRef.current;
    const parent = canvas?.parentElement;
    if (!canvas || !parent) return;

    const ctx = canvas.getContext("2d");
    if (!ctx) return;

    const prefersReducedMotion = window.matchMedia(
      "(prefers-reduced-motion: reduce)"
    ).matches;

    let width = 0;
    let height = 0;
    let frameId = 0;
    let bars: Bar[] | null = null;
    let cancelled = false;

    const resize = () => {
      const dpr = Math.min(window.devicePixelRatio || 1, 2);
      width = parent.clientWidth;
      height = parent.clientHeight;

      canvas.width = width * dpr;
      canvas.height = height * dpr;
      canvas.style.width = `${width}px`;
      canvas.style.height = `${height}px`;

      ctx.setTransform(dpr, 0, 0, dpr, 0, 0);
    };

    const render = (t: number) => {
      if (!bars) return;
      ctx.clearRect(0, 0, width, height);

      const bottomY = height * 0.97;
      const barWidth = Math.max(1.5, width * 0.0009);

      for (let i = 0; i < bars.length; i++) {
        const bar = bars[i];

        // Slow breathing motion — each bar's phase offset from its
        // neighbor so it ripples gently rather than moving in unison.
        const wave = 0.88 + 0.12 * Math.sin(t * 0.00022 + i * 0.18);
        const barHeight = bar.h * wave * height * 0.92;
        const x = bar.x * width;
        const opacity = 0.28 + 0.4 * bar.h;
        ctx.fillStyle = `rgba(${CYAN}, ${opacity})`;

        for (const [segStart, segEnd] of bar.segs) {
          const y0 = bottomY - barHeight * (1 - segStart);
          const y1 = bottomY - barHeight * (1 - segEnd);
          ctx.fillRect(x, y0, barWidth, Math.max(1, y1 - y0));
        }
      }
    };

    resize();

    const resizeObserver = new ResizeObserver(resize);
    resizeObserver.observe(parent);

    fetch("/data/telemetry-envelope.json")
      .then((res) => res.json())
      .then((data: Bar[]) => {
        if (cancelled) return;
        bars = data;

        if (prefersReducedMotion) {
          render(0);
        } else {
          let start: number | null = null;

          const loop = (timestamp: number) => {
            if (start === null) start = timestamp;
            render(timestamp - start);
            frameId = requestAnimationFrame(loop);
          };

          frameId = requestAnimationFrame(loop);
        }
      })
      .catch(() => {
        // Fail silently — background decoration only.
      });

    return () => {
      cancelled = true;
      if (frameId) cancelAnimationFrame(frameId);
      resizeObserver.disconnect();
    };
  }, []);

  return (
    <canvas
      ref={canvasRef}
      className="absolute inset-0 h-full w-full"
      aria-hidden="true"
    />
  );
}
