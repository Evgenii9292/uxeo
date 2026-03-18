/**
 * ScaledPreview
 *
 * Scales its children to fit the available container height while
 * preserving the natural aspect ratio of the content.
 *
 * - Measures available space via ResizeObserver
 * - Applies CSS transform: scale() — works with any fixed-pixel inner content
 * - Vertical padding (top + bottom) is subtracted before computing scale
 */

import React, { useRef, useState, useEffect } from "react";

interface ScaledPreviewProps {
  /** Natural width of the inner content in px */
  naturalWidth: number;
  /** Natural height of the inner content in px */
  naturalHeight: number;
  /** Vertical padding (px) subtracted from available height before scaling. Default 40 */
  paddingY?: number;
  /** Maximum allowed scale factor. Default 1 (never upscale). Set > 1 to allow upscaling. */
  maxScale?: number;
  children: React.ReactNode;
  className?: string;
}

export function ScaledPreview({
  naturalWidth,
  naturalHeight,
  paddingY = 40,
  maxScale = 1,
  children,
  className = "",
}: ScaledPreviewProps) {
  const containerRef = useRef<HTMLDivElement>(null);
  const [scale, setScale] = useState(1);

  useEffect(() => {
    const el = containerRef.current;
    if (!el) return;

    const compute = () => {
      const availH = el.clientHeight - paddingY * 2;
      const availW = el.clientWidth;
      if (availH <= 0 || availW <= 0) return;

      const scaleByH = availH / naturalHeight;
      const scaleByW = availW / naturalWidth;
      setScale(Math.min(scaleByH, scaleByW, maxScale));
    };

    compute();

    const ro = new ResizeObserver(compute);
    ro.observe(el);
    return () => ro.disconnect();
  }, [naturalWidth, naturalHeight, paddingY, maxScale]);

  return (
    <div
      ref={containerRef}
      className={`flex items-center justify-center w-full h-full overflow-hidden ${className}`}
      style={{ padding: `${paddingY}px 0` }}
    >
      {/* Pivot wrapper — keeps natural size, scaled from center */}
      <div
        style={{
          width: naturalWidth,
          height: naturalHeight,
          flexShrink: 0,
          transform: `scale(${scale})`,
          transformOrigin: "center center",
          // Prevent the scaled element from pushing the container
          marginTop: `${(naturalHeight * (scale - 1)) / 2}px`,
          marginBottom: `${(naturalHeight * (scale - 1)) / 2}px`,
        }}
      >
        {children}
      </div>
    </div>
  );
}