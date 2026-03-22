import { ReactNode, useEffect, useState } from "react";

interface PageTransitionProps {
  children: ReactNode;
  /** Duration in ms. Default 900 (page load). Use ~220 for question transitions. */
  duration?: number;
  /** Scale start value. Default 0.97. */
  scaleFrom?: number;
}

/**
 * Wraps content with a fade+scale entrance transition.
 *
 * • Uses requestAnimationFrame to guarantee the browser renders the
 *   initial opacity:0 / scale state before animating.
 * • duration=600 for page load, duration=260 for question-to-question.
 * • cubic-bezier(0.22, 1, 0.36, 1) = ease-out expo: snappy start, smooth settle.
 */
export default function PageTransition({ children, duration = 1200, scaleFrom = 0.96 }: PageTransitionProps) {
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    const id = requestAnimationFrame(() => {
      requestAnimationFrame(() => setIsVisible(true));
    });
    return () => cancelAnimationFrame(id);
  }, []);

  return (
    <div
      style={{
        opacity: isVisible ? 1 : 0,
        transform: isVisible ? "scale(1) translateY(0)" : `scale(${scaleFrom}) translateY(8px)`,
        transition: `opacity ${duration}ms cubic-bezier(0.22, 1, 0.36, 1), transform ${duration}ms cubic-bezier(0.22, 1, 0.36, 1)`,
        willChange: "opacity, transform",
      }}
    >
      {children}
    </div>
  );
}
