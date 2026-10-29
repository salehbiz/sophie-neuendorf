'use client';

import { useEffect, useState } from 'react';
import { FluidParticlesBackground } from '@/components/ui/fluid-particles-background';

// Site-wide, very minimal fluid particles fixed behind every page. Particle count scales with
// screen area (about 350 on a laptop, 80 on a phone); faint taupe on the page's greige.
const PIXELS_PER_PARTICLE = 3700;

export function SiteFlow() {
  const [count, setCount] = useState(0);

  useEffect(() => {
    const update = () => setCount(Math.round((window.innerWidth * window.innerHeight) / PIXELS_PER_PARTICLE));
    update();
    window.addEventListener('resize', update);
    return () => window.removeEventListener('resize', update);
  }, []);

  return (
    <div className="site-flow" aria-hidden="true">
      {count > 0 && (
        <FluidParticlesBackground
          className="site-flow-particles"
          particleCount={count}
          particleSize={{ min: 0.4, max: 1.1 }}
          particleColor="107, 88, 72"
          maxOpacity={0.09}
          trailColor="235, 230, 222"
          trailFade={0.1}
          fps={30}
        />
      )}
    </div>
  );
}
