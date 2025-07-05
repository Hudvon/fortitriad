'use client';

import { Canvas, useFrame } from '@react-three/fiber';
import { useRef, useState } from 'react';
import * as THREE from 'three';
import AnimatedLine from './AnimatedLine';
import { a, useSpring } from '@react-spring/three';

type SceneProps = {
  scrollY: number;
  showConnection: boolean;
};

function Cube({ scrollY, highlighted }: { scrollY: number; highlighted: boolean }) {
  const ref = useRef<THREE.Mesh>(null!);
  const [hovered, setHovered] = useState(false);
  const [pulse, setPulse] = useState(1);

  const { scale, color, emissive } = useSpring({
    scale: highlighted
      ? hovered
        ? [1.6, 0.85, 1.6]
        : [1.5 * pulse, 0.75 * pulse, 1.5 * pulse]
      : hovered
        ? [1.1, 1.1, 1.1]
        : [1, 1, 1],
    color: highlighted ? 'cyan' : 'orange',
    emissive: highlighted ? 'cyan' : 'black',
    config: { mass: 1, tension: 120, friction: 14 },
  });

  useFrame(({ clock }) => {
    if (highlighted) {
      const t = clock.getElapsedTime();
      setPulse(1 + Math.sin(t * 2) * 0.05);
    }

    if (ref.current) {
      ref.current.rotation.x += 0.01;
      ref.current.rotation.y += 0.01;
      ref.current.position.y = -scrollY * 0.002;
    }
  });

  return (
    <a.mesh
      ref={ref}
      scale={scale}
      position={[0, 0, 0]}
      onPointerOver={() => setHovered(true)}
      onPointerOut={() => setHovered(false)}
    >
      <boxGeometry args={[2, 2, 2]} />
      <a.meshStandardMaterial
        color={color}
        emissive={emissive}
        emissiveIntensity={0.5}
      />
    </a.mesh>
  );
}

export default function Scene({ scrollY, showConnection }: SceneProps) {
  return (
    <Canvas
      camera={{ position: [0, 0, 5] }}
      className="fixed top-0 left-0 w-screen h-screen z-0"
    >
      <ambientLight intensity={0.5} />
      <directionalLight position={[3, 3, 3]} />
      <Cube scrollY={scrollY} highlighted={showConnection} />
      {showConnection && <AnimatedLine scrollY={scrollY} />}
    </Canvas>
  );
}
