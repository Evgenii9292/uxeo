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
 * • duration=900 for page load, duration=220 for question-to-question.
 */
export default function PageTransition({ children, duration = 900, scaleFrom = 0.97 }: PageTransitionProps) {
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
        transform: isVisible ? "scale(1)" : `scale(${scaleFrom})`,
        transition: `opacity ${duration}ms ease-in-out, transform ${duration}ms ease-in-out`,
        willChange: "opacity, transform",
      }}
    >
      {children}
    </div>
  );
}
