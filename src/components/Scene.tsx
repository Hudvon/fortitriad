'use client';

import React, { useRef, useState } from 'react';
import { Canvas, useFrame } from '@react-three/fiber';
import { OrbitControls } from '@react-three/drei';
import * as THREE from 'three';
import { a, useSpring } from '@react-spring/three';

const SpinningCube: React.FC = () => {
  const ref = useRef<THREE.Mesh>(null);
  const [hovered, setHovered] = useState(false);

  const { scale } = useSpring({
    scale: hovered ? [1.4, 1.4, 1.4] : [1, 1, 1],
    config: { tension: 150, friction: 10 },
  });

  useFrame(() => {
    if (ref.current) {
      ref.current.rotation.x += 0.01;
      ref.current.rotation.y += 0.01;
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
      <boxGeometry args={[1, 1, 1]} />
      <meshStandardMaterial color={hovered ? '#00FFFF' : '#FF7F50'} />
    </a.mesh>
  );
};

const Scene: React.FC = () => {
  return (
    <div className="fixed top-0 left-0 w-full h-screen z-0 bg-black">
      <Canvas camera={{ position: [0, 0, 5] }}>
        <ambientLight intensity={0.5} />
        <pointLight position={[10, 10, 10]} />
        <SpinningCube />
        <OrbitControls enableZoom={false} enablePan={false} />
      </Canvas>
    </div>
  );
};

export default Scene;
