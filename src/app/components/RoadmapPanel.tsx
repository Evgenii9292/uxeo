// ─── RoadmapPanel ─────────────────────────────────────────────────────────────
// Thin adapter — keeps the existing prop interface, delegates to the
// feature module at src/features/roadmap/Roadmap.tsx.

import React from "react";
import { Roadmap } from "../../features/roadmap/Roadmap";
import { useWindowWidth } from "../hooks/useWindowWidth";
import type { Lesson } from "../data/lessons";

interface RoadmapPanelProps {
  lessons: Lesson[];
  popupLessonId: number | null;
  onSelectLesson: (id: number | null) => void;
  scrollToLessonId?: number | null;
  onScrollComplete?: () => void;
}

export default function RoadmapPanel(props: RoadmapPanelProps) {
  const vw = useWindowWidth();
  const isMobile = vw < 768;
  return <Roadmap {...props} mobile={isMobile} />;
}