'use client';

import React, { useMemo } from 'react';
import { motion, useReducedMotion } from 'motion/react';
import { cn } from '@/lib/utils';

// Floating paths background (from 21st.dev), converted from Tailwind to plain CSS classes
// (see .floating-paths in globals.css). Strokes use currentColor, so the parent sets the tint.
export function FloatingPathsBackground({
  position,
  children,
  className,
}: {
  position: number;
  className?: string;
  children?: React.ReactNode;
}) {
  const reduceMotion = useReducedMotion();

  const paths = useMemo(
    () =>
      Array.from({ length: 36 }, (_, i) => ({
        id: i,
        d: `M-${380 - i * 5 * position} -${189 + i * 6}C-${
          380 - i * 5 * position
        } -${189 + i * 6} -${312 - i * 5 * position} ${216 - i * 6} ${
          152 - i * 5 * position
        } ${343 - i * 6}C${616 - i * 5 * position} ${470 - i * 6} ${
          684 - i * 5 * position
        } ${875 - i * 6} ${684 - i * 5 * position} ${875 - i * 6}`,
        width: 0.5 + i * 0.03,
        duration: 20 + Math.random() * 10,
      })),
    [position],
  );

  return (
    <div className={cn('floating-paths', className)}>
      <div className="floating-paths-layer">
        <svg className="floating-paths-svg" viewBox="0 0 696 316" preserveAspectRatio="none" fill="none">
          {paths.map((path) => (
            <motion.path
              key={path.id}
              d={path.d}
              stroke="currentColor"
              strokeWidth={path.width}
              strokeOpacity={0.1 + path.id * 0.03}
              initial={{ pathLength: 0.3, opacity: 0.6 }}
              animate={
                reduceMotion
                  ? { pathLength: 1, opacity: 0.45 }
                  : { pathLength: 1, opacity: [0.3, 0.6, 0.3], pathOffset: [0, 1, 0] }
              }
              transition={
                reduceMotion
                  ? { duration: 0 }
                  : { duration: path.duration, repeat: Number.POSITIVE_INFINITY, ease: 'linear' }
              }
            />
          ))}
        </svg>
      </div>
      {children}
    </div>
  );
}
