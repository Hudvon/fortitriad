'use client';

import React, { useRef, useEffect, useState } from 'react';
import { Canvas, useFrame } from '@react-three/fiber';
import { a, useSpring } from '@react-spring/three';
import { Mesh } from 'three';
import * as THREE from 'three';
import AnimatedLine from './AnimatedLine';

type SceneProps = {
  scrollY: number;
};

const Cube: React.FC = () => {
  const ref = useRef<Mesh>(null);
  const [hovered, setHovered] = useState(false);

  const { scale } = useSpring({
    scale: hovered ? [1.2, 1.2, 1.2] : [1, 1, 1],
    config: { tension: 200, friction: 15 },
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
      scale={scale.to((x, y, z) => [x, y, z])}
      position={[0, 0, 0]}
      onPointerOver={() => setHovered(true)}
      onPointerOut={() => setHovered(false)}
    >
      <boxGeometry args={[1, 1, 1]} />
      <meshStandardMaterial color={hovered ? 'cyan' : 'orange'} />
    </a.mesh>
  );
};

const Scene: React.FC<SceneProps> = ({ scrollY }) => {
  // Use scrollY if you want to control camera position in future
  const cameraRef = useRef<THREE.PerspectiveCamera>(null);

  useEffect(() => {
    if (cameraRef.current) {
      cameraRef.current.position.z = 5;
    }
  }, []);

  return (
    <div className="absolute inset-0 z-0">
      <Canvas camera={{ position: [0, 0, 5], fov: 75 }} style={{ background: '#000' }}>
        <ambientLight intensity={0.5} />
        <pointLight position={[10, 10, 10]} />
        <Cube />
        <AnimatedLine from={{ x: 200, y: 200 }} to={{ x: 400, y: 400 }} />
      </Canvas>
    </div>
  );
};

export default Scene;
