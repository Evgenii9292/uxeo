// ─── RoadmapPath ──────────────────────────────────────────────────────────────
// Renders the SVG dashed road path connecting lesson nodes.

import React from "react";
import { ROADMAP_W } from "./roadmap-layout";
import type { RoadmapLayoutNode } from "./roadmap-types";

interface RoadmapPathProps {
  pathData: string;
  totalHeight: number;
  positions: RoadmapLayoutNode[];
}

export function RoadmapPath({ pathData, totalHeight }: RoadmapPathProps) {
  return (
    <svg
      className="absolute inset-0 block pointer-events-none"
      width={ROADMAP_W}
      height={totalHeight}
      fill="none"
    >
      <defs>
        <linearGradient
          gradientUnits="userSpaceOnUse"
          id="road_path_grad"
          x1="240"
          x2="210"
          y1={totalHeight - 100}
          y2="0"
        >
          <stop stopColor="#2C373A" />
          <stop offset="0.43" stopColor="#3D4A4E" />
          <stop offset="1" stopColor="#2C373A" />
        </linearGradient>
      </defs>
      <path
        d={pathData}
        stroke="url(#road_path_grad)"
        strokeDasharray="30 20"
        strokeLinecap="round"
        strokeOpacity="0.6"
        strokeWidth="11"
      />
    </svg>
  );
}
