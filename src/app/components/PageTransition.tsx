import { ReactNode, useEffect, useState } from "react";

interface PageTransitionProps {
  children: ReactNode;
}

/**
 * Wraps quiz page content with a focused-mode entrance transition.
 *
 * • Uses requestAnimationFrame to guarantee the browser renders the
 *   initial opacity:0 / scale:0.97 state before animating — this was
 *   the root cause of the "missing transition" bug where React batched
 *   the mount + state-update into a single paint.
 *
 * • Duration: 900ms ease-out — noticeably longer, feels deliberate.
 * • Scale: 0.97 → 1.00 — subtle zoom-in reinforces "entering focus mode".
 */
export default function PageTransition({ children }: PageTransitionProps) {
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    // Two rAF frames to ensure the initial state is painted first
    const id = requestAnimationFrame(() => {
      requestAnimationFrame(() => setIsVisible(true));
    });
    return () => cancelAnimationFrame(id);
  }, []);

  return (
    <div
      style={{
        opacity: isVisible ? 1 : 0,
        transform: isVisible ? "scale(1)" : "scale(0.97)",
        transition: "opacity 900ms ease-out, transform 900ms ease-out",
        willChange: "opacity, transform",
      }}
    >
      {children}
    </div>
  );
}
