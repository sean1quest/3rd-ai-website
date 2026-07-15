"use client";

import { useEffect, useRef } from "react";

// Hero background visual — concentric signal rings pulsing outward from
// a source point, echoing the arc motif used in the 3rd-AI logo/favicon
// (rather than a generic stock waveform). Meant to feel like the brand's
// own "ambient sensing" signal, quietly and continuously radiating.

const CYAN = "34, 211, 238";
const RING_COUNT = 5;
const RING_LIFETIME_MS = 11000;
const MAX_RADIUS_FRAC = 1.35; // relative to canvas width

export default function SignalPulse() {
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

    // Source point — off to the right side of frame so it stays clear
    // of the left-column headline text, echoing where the logo's arcs
    // originate from a corner point.
    const originXFrac = 0.78;
    const originYFrac = 0.5;

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
      ctx.clearRect(0, 0, width, height);

      const originX = width * originXFrac;
      const originY = height * originYFrac;
      const maxRadius = width * MAX_RADIUS_FRAC;

      for (let i = 0; i < RING_COUNT; i++) {
        const offset = (RING_LIFETIME_MS / RING_COUNT) * i;
        const age = ((t + offset) % RING_LIFETIME_MS) / RING_LIFETIME_MS;
        const eased = 1 - (1 - age) * (1 - age); // ease-out
        const radius = eased * maxRadius;
        const opacity = (1 - age) * 0.5;

        if (opacity <= 0.005) continue;

        ctx.beginPath();
        ctx.arc(originX, originY, radius, 0, Math.PI * 2);
        ctx.strokeStyle = `rgba(${CYAN}, ${opacity})`;
        ctx.lineWidth = 2.5;
        ctx.stroke();
      }

      // Soft glow at the source point.
      const glowPulse = 0.5 + 0.5 * Math.sin(t * 0.0012);
      const glowRadius = 320;
      const gradient = ctx.createRadialGradient(
        originX,
        originY,
        0,
        originX,
        originY,
        glowRadius
      );
      gradient.addColorStop(0, `rgba(${CYAN}, ${0.4 + 0.15 * glowPulse})`);
      gradient.addColorStop(0.5, `rgba(${CYAN}, ${0.12 + 0.05 * glowPulse})`);
      gradient.addColorStop(1, `rgba(${CYAN}, 0)`);
      ctx.fillStyle = gradient;
      ctx.fillRect(
        originX - glowRadius,
        originY - glowRadius,
        glowRadius * 2,
        glowRadius * 2
      );

      ctx.beginPath();
      ctx.arc(originX, originY, 5, 0, Math.PI * 2);
      ctx.fillStyle = `rgba(${CYAN}, ${0.8 + 0.2 * glowPulse})`;
      ctx.fill();
    };

    resize();

    const resizeObserver = new ResizeObserver(resize);
    resizeObserver.observe(parent);

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

    return () => {
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
