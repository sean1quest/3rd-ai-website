"use client";

import { useEffect, useRef } from "react";

// A subtle, low-density drifting particle field for use as a
// background accent behind content — not a hero-level focal visual.
// Deliberately sparse and slow so it never competes with foreground
// text; it's meant to be felt more than seen.

const PARTICLE_COUNT = 160;
const CYAN = "34, 211, 238";

type Particle = {
  x: number;
  y: number;
  size: number;
  speed: number;
  drift: number;
  phase: number;
};

export default function AmbientParticles() {
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
    let particles: Particle[] = [];

    const seedRandom = () => {
      // Simple deterministic-ish spread; exact positions don't need
      // to be stable across resizes for a background accent like this.
      let seed = 42;
      return () => {
        seed = (seed * 16807) % 2147483647;
        return (seed - 1) / 2147483646;
      };
    };

    const buildParticles = () => {
      const rand = seedRandom();
      particles = [];
      for (let i = 0; i < PARTICLE_COUNT; i++) {
        particles.push({
          x: rand() * width,
          y: rand() * height,
          size: 1.2 + rand() * 1.8,
          speed: 4 + rand() * 10,
          drift: (rand() - 0.5) * 12,
          phase: rand() * Math.PI * 2,
        });
      }
    };

    const resize = () => {
      const dpr = Math.min(window.devicePixelRatio || 1, 2);
      width = parent.clientWidth;
      height = parent.clientHeight;

      canvas.width = width * dpr;
      canvas.height = height * dpr;
      canvas.style.width = `${width}px`;
      canvas.style.height = `${height}px`;

      ctx.setTransform(dpr, 0, 0, dpr, 0, 0);
      buildParticles();
    };

    const render = (t: number) => {
      ctx.clearRect(0, 0, width, height);

      for (const p of particles) {
        const y = ((p.y - t * p.speed * 0.01) % (height + 20) + height + 20) % (height + 20) - 10;
        const x = p.x + Math.sin(t * 0.0003 + p.phase) * p.drift;

        const opacity = 0.4 + 0.35 * Math.sin(t * 0.0006 + p.phase);

        ctx.beginPath();
        ctx.arc(x, y, p.size, 0, Math.PI * 2);
        ctx.fillStyle = `rgba(${CYAN}, ${Math.max(0.15, opacity)})`;
        ctx.fill();
      }
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
