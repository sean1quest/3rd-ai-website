"use client";

import { useEffect, useRef } from "react";

// Resolution-independent canvas wave — unlike a video file, this
// redraws at whatever the actual container pixel size is (accounting
// for devicePixelRatio), so it never looks stretched or blurry no
// matter how large the hero renders.

const COLS = 90; // particles per depth-line
const ROWS = 46; // depth-lines, front to back
const PLANE_HALF_WIDTH_FRACTION = 0.62;

const FOCUS = 520;
const CAMERA_Z = 420;
const Z_STEP = 20;
const Z_MAX = (ROWS - 1) * Z_STEP;

const BASE_AMPLITUDE_FRACTION = 0.2;
const DETAIL_AMPLITUDE_FRACTION = 0.05;
const WAVE_FREQ_X = 1.5;
const WAVE_FREQ_Z = 2.2;
const SPEED = 0.32;

const CYAN_A: [number, number, number] = [0, 217, 255];
const CYAN_B: [number, number, number] = [34, 211, 238];

type Particle = {
  worldX: number;
  xNorm: number;
  z: number;
  zNorm: number;
};

function envelope(xNorm: number): number {
  return -Math.cos(Math.PI * xNorm);
}

export default function HeroCanvasWave() {
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

    const buildParticles = () => {
      particles = [];
      for (let r = 0; r < ROWS; r++) {
        const z = r * Z_STEP;
        const zNorm = z / Z_MAX;
        for (let c = 0; c < COLS; c++) {
          const xNorm = (c / (COLS - 1)) * 2 - 1;
          particles.push({
            worldX: xNorm * (width * PLANE_HALF_WIDTH_FRACTION),
            xNorm,
            z,
            zNorm,
          });
        }
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

    const centerX = () => width / 2;
    const centerY = () => height * 0.52;

    const project = (p: Particle, t: number) => {
      const baseAmp = height * BASE_AMPLITUDE_FRACTION;
      const detailAmp = height * DETAIL_AMPLITUDE_FRACTION;

      const worldY =
        envelope(p.xNorm) * baseAmp +
        Math.sin(p.xNorm * WAVE_FREQ_X * Math.PI + t * SPEED) *
          Math.cos(p.zNorm * WAVE_FREQ_Z * Math.PI + t * SPEED) *
          detailAmp;

      const scale = FOCUS / (p.z + CAMERA_Z);
      const sx = p.worldX * scale + centerX();
      const sy = -worldY * scale + centerY();
      const radius = Math.max(0.35, 1.9 * scale);

      const edgeFade = Math.max(0, 1 - Math.pow(Math.abs(p.xNorm), 3));
      const alpha = Math.pow(1 - p.zNorm, 1.5) * edgeFade;

      return { sx, sy, radius, alpha };
    };

    const render = (t: number) => {
      ctx.clearRect(0, 0, width, height);

      const projected = particles
        .map((p) => ({ p, proj: project(p, t) }))
        .sort((a, b) => b.p.z - a.p.z);

      ctx.filter = "blur(5px)";
      for (const { p, proj } of projected) {
        if (proj.alpha < 0.05) continue;
        const mix = p.xNorm * 0.5 + 0.5;
        const r = CYAN_A[0] + (CYAN_B[0] - CYAN_A[0]) * mix;
        const g = CYAN_A[1] + (CYAN_B[1] - CYAN_A[1]) * mix;
        const b = CYAN_A[2] + (CYAN_B[2] - CYAN_A[2]) * mix;

        ctx.beginPath();
        ctx.arc(proj.sx, proj.sy, proj.radius * 1.8, 0, Math.PI * 2);
        ctx.fillStyle = `rgba(${r}, ${g}, ${b}, ${proj.alpha * 0.3})`;
        ctx.fill();
      }

      ctx.filter = "none";
      for (const { p, proj } of projected) {
        if (proj.alpha < 0.03) continue;
        const mix = p.xNorm * 0.5 + 0.5;
        const r = CYAN_A[0] + (CYAN_B[0] - CYAN_A[0]) * mix;
        const g = CYAN_A[1] + (CYAN_B[1] - CYAN_A[1]) * mix;
        const b = CYAN_A[2] + (CYAN_B[2] - CYAN_A[2]) * mix;

        ctx.beginPath();
        ctx.arc(proj.sx, proj.sy, proj.radius, 0, Math.PI * 2);
        ctx.fillStyle = `rgba(${r}, ${g}, ${b}, ${proj.alpha})`;
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
        render((timestamp - start) / 1000);
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
