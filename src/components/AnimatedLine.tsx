'use client';

import { Line } from '@react-three/drei';
import * as THREE from 'three';
import { useEffect, useRef, useState } from 'react';

export default function AnimatedLine({ scrollY }: { scrollY: number }) {
  const [progress, setProgress] = useState(0);
  const endY = -scrollY * 0.002;
  const ref = useRef<any>(null);

  useEffect(() => {
    const animate = () => {
      setProgress((prev) => Math.min(prev + 0.02, 1));
    };

    const id = setInterval(animate, 16);
    return () => clearInterval(id);
  }, [scrollY]);

  const points = [
    new THREE.Vector3(0, 0, 0),
    new THREE.Vector3(0, endY * progress, 0),
  ];

  return <Line ref={ref} points={points} color="cyan" lineWidth={2} />;
}
