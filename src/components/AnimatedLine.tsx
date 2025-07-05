// src/components/AnimatedLine.tsx

'use client';

import { motion } from 'framer-motion';
import React from 'react';

interface AnimatedLineProps {
  from: { x: number; y: number };
  to: { x: number; y: number };
}

const AnimatedLine: React.FC<AnimatedLineProps> = ({ from, to }) => {
  const path = `M${from.x},${from.y} L${to.x},${to.y}`;

  return (
    <svg className="absolute top-0 left-0 w-full h-full pointer-events-none">
      <motion.path
        d={path}
        stroke="cyan"
        strokeWidth="1"
        initial={{ pathLength: 0 }}
        animate={{ pathLength: 1 }}
        transition={{ duration: 1.2, ease: 'easeInOut' }}
      />
    </svg>
  );
};

export default AnimatedLine;
