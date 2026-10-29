import { FloatingPathsBackground } from '@/components/ui/floating-paths';

/**
 * Faint, slowly flowing line field fixed behind every page. Two mirrored path sets, tinted
 * in the site's warm taupe at low opacity (see .site-flow in globals.css).
 */
export function SiteFlow() {
  return (
    <div className="site-flow" aria-hidden="true">
      <FloatingPathsBackground position={1} className="site-flow-layer" />
      <FloatingPathsBackground position={-1} className="site-flow-layer" />
    </div>
  );
}
