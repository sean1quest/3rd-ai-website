"use client";

import { useFrame } from "@react-three/fiber";
import { useMemo, useRef } from "react";
import * as THREE from "three";

export default function Landscape() {
  const points = useRef<THREE.Points>(null);

  const geometry = useMemo(() => {
    const positions: number[] = [];

    const width = 120;
    const depth = 70;
    const spacing = 0.18;

    for (let z = 0; z < depth; z++) {
      for (let x = 0; x < width; x++) {
        const px = (x - width / 2) * spacing;
        const pz = (z - depth / 2) * spacing;

        positions.push(px, 0, pz);
      }
    }

    const geo = new THREE.BufferGeometry();

    geo.setAttribute(
      "position",
      new THREE.Float32BufferAttribute(positions, 3)
    );

    return geo;
  }, []);

  useFrame(({ clock }) => {
    if (!points.current) return;

    const t = clock.getElapsedTime();

    const pos = points.current.geometry.attributes.position;

    for (let i = 0; i < pos.count; i++) {
      const x = pos.getX(i);
      const z = pos.getZ(i);

      const y =
        Math.sin(x * 0.8 + t * 0.4) * 0.18 +
        Math.cos(z * 0.7 + t * 0.35) * 0.14;

      pos.setY(i, y);
    }

    pos.needsUpdate = true;
  });

  return (
    <points ref={points} geometry={geometry}>
      <pointsMaterial
        color="#00d9ff"
        size={0.03}
        sizeAttenuation
        transparent
        opacity={0.75}
      />
    </points>
  );
}