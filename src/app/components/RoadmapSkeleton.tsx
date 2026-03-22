import React, { useEffect, useState } from "react";

const SHIMMER_CSS = `
@keyframes skShimmer {
  0%   { background-position: -600px 0; }
  100% { background-position: 600px 0; }
}
.sk-shimmer {
  background: linear-gradient(90deg, #2e3840 25%, #3a454c 50%, #2e3840 75%);
  background-size: 1200px 100%;
  animation: skShimmer 1.8s infinite linear;
}
`;

const NODE_Y = [89, 294, 499, 704, 909];
const ROAD_CX = 240; // center of 480px roadmap

export function RoadmapSkeleton({ visible }: { visible: boolean }) {
  const [mounted, setMounted] = useState(true);

  useEffect(() => {
    if (!visible) {
      const t = setTimeout(() => setMounted(false), 450);
      return () => clearTimeout(t);
    } else {
      setMounted(true);
    }
  }, [visible]);

  if (!mounted) return null;

  return (
    <div
      style={{
        position: "absolute",
        inset: 0,
        zIndex: 20,
        background: "#2C353A",
        opacity: visible ? 1 : 0,
        transition: "opacity 0.45s ease-out",
        pointerEvents: visible ? "auto" : "none",
        overflow: "hidden",
      }}
    >
      <style>{SHIMMER_CSS}</style>
      {/* Vertical dashed path */}
      <div style={{
        position: "absolute",
        left: ROAD_CX - 4,
        top: NODE_Y[0] + 39,
        width: 8,
        height: NODE_Y[NODE_Y.length - 1] - NODE_Y[0],
        background: "repeating-linear-gradient(to bottom, #384249 0px, #384249 14px, transparent 14px, transparent 26px)",
        opacity: 0.45,
      }} />
      {NODE_Y.map((y, i) => (
        <React.Fragment key={i}>
          {/* Node circle */}
          <div className="sk-shimmer" style={{
            position: "absolute",
            left: ROAD_CX - 39,
            top: y,
            width: 78,
            height: 78,
            borderRadius: "50%",
          }} />
          {/* Label */}
          <div className="sk-shimmer" style={{
            position: "absolute",
            left: ROAD_CX + 50,
            top: y + 28,
            width: 90 + (i % 3) * 20,
            height: 16,
            borderRadius: 8,
          }} />
        </React.Fragment>
      ))}
    </div>
  );
}
