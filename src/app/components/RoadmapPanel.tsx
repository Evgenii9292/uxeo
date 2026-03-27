// ─── RoadmapPanel ─────────────────────────────────────────────────────────────
// Thin adapter — keeps the existing prop interface, delegates to the
// feature module at src/features/roadmap/Roadmap.tsx.

import React, { useState, useEffect } from "react";
import { Roadmap } from "../../features/roadmap/Roadmap";
import { RoadmapSkeleton } from "./RoadmapSkeleton";
import { useWindowWidth } from "../hooks/useWindowWidth";
import type { Lesson } from "../data/lessons";

interface RoadmapPanelProps {
  lessons: Lesson[];
  popupLessonId: number | null;
  onSelectLesson: (id: number | null) => void;
  scrollToLessonId?: number | null;
  onScrollComplete?: () => void;
}

const SKELETON_SEEN_KEY = "uxeo-roadmap-loaded";

export default function RoadmapPanel(props: RoadmapPanelProps) {
  const vw = useWindowWidth();
  const isMobile = vw < 768;

  // Show skeleton only on first ever visit (localStorage flag)
  const firstVisit = !localStorage.getItem(SKELETON_SEEN_KEY);
  const [loading, setLoading] = useState(firstVisit);
  useEffect(() => {
    if (!firstVisit) return;
    const t = window.requestAnimationFrame(() => {
      setLoading(false);
      localStorage.setItem(SKELETON_SEEN_KEY, "1");
    });
    return () => window.cancelAnimationFrame(t);
  }, []); // eslint-disable-line react-hooks/exhaustive-deps

  return (
    <div style={{ position: "relative", width: "100%" }}>
      <RoadmapSkeleton visible={loading} />
      <Roadmap {...props} mobile={isMobile} />
    </div>
  );
}
