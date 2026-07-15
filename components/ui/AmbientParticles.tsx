"use client";

import { useEffect, useRef } from "react";

// A subtle, low-density particle field for use as a background accent.
// Particles drift and occasionally connect when close together, forming
// a faint mesh — echoing the product's own behavior: infrastructure that
// senses its neighbors, then breathes between active and calm, low-power
// states, rather than moving with no meaning behind it.

const PARTICLE_COUNT = 160;
const CYAN = "34, 211, 238";
const CONNECT_DIST = 110;
const CYCLE_MS = 18000; // full energetic → calm → energetic breathing cycle

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
    let lastT = 0;

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
          speed: 2 + rand() * 4,
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

      // Delta time since last frame — used to accumulate position
      // incrementally rather than as speed × total-elapsed-time, which
      // compounds incorrectly once speed itself varies over time.
      const dt = Math.min(Math.max(t - lastT, 0), 50);
      lastT = t;

      // Smooth breathing cycle: 1 = energetic/active, 0 = calm/settled.
      // Oscillates continuously with no reset snap — echoing the
      // platform's own cycle between active periods and confirmed
      // quiet windows.
      const cycleT = (t % CYCLE_MS) / CYCLE_MS;
      const energy = (Math.cos(cycleT * Math.PI * 2) + 1) / 2;

      const positions: { x: number; y: number }[] = [];
      const wrapWidth = width + 20;

      for (const p of particles) {
        // Motion: drifting right to left only, no vertical bounce —
        // a steady sense of moving forward, toward what's next.
        // Position accumulates frame-by-frame so varying speed (from
        // the breathing cycle) never compounds into runaway motion.
        const settledSpeed = p.speed * (0.3 + 0.4 * energy);
        p.x -= settledSpeed * dt * 0.01;
        if (p.x < -10) p.x += wrapWidth;
        if (p.x > width + 10) p.x -= wrapWidth;

        positions.push({ x: p.x, y: p.y });
      }

      // Connections — a faint mesh between nearby particles, more
      // visible during the "active" phase, fading as things settle.
      const connectDistSq = CONNECT_DIST * CONNECT_DIST;
      for (let i = 0; i < positions.length; i++) {
        for (let j = i + 1; j < positions.length; j++) {
          const dx = positions[i].x - positions[j].x;
          const dy = positions[i].y - positions[j].y;
          const distSq = dx * dx + dy * dy;
          if (distSq < connectDistSq) {
            const dist = Math.sqrt(distSq);
            const lineOpacity =
              (1 - dist / CONNECT_DIST) * 0.45 * (0.35 + 0.65 * energy);
            if (lineOpacity > 0.015) {
              ctx.beginPath();
              ctx.moveTo(positions[i].x, positions[i].y);
              ctx.lineTo(positions[j].x, positions[j].y);
              ctx.strokeStyle = `rgba(${CYAN}, ${lineOpacity})`;
              ctx.lineWidth = 1.3;
              ctx.stroke();
            }
          }
        }
      }

      // Particles — dim slightly when settled, echoing reduced power draw.
      particles.forEach((p, i) => {
        const pos = positions[i];
        const pulse = 0.35 * Math.sin(t * 0.0004 + p.phase);
        const opacity = 0.2 + 0.3 * energy + pulse;
        const size = p.size * (0.85 + 0.15 * energy);

        ctx.beginPath();
        ctx.arc(pos.x, pos.y, size, 0, Math.PI * 2);
        ctx.fillStyle = `rgba(${CYAN}, ${Math.max(0.12, opacity)})`;
        ctx.fill();
      });
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
