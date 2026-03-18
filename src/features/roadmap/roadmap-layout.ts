// ─── Roadmap Layout ───────────────────────────────────────────────────────────
// Computes node positions algorithmically.
// No hardcoded coordinates per lesson — scales to 200+ nodes.

import type { Lesson, RoadmapLayoutNode } from "./roadmap-types";

/** Node dimensions (px) — must match LessonNode visual sizes */
export const NODE_W = 91;
export const NODE_H = 79;

/** Canvas width — desktop default */
export const ROADMAP_W = 480;

/** Mobile canvas width (fits 390px screen with 16px padding each side) */
export const ROADMAP_W_MOBILE = 320;

/** Vertical distance between consecutive node centres */
const VERTICAL_SPACING = 205;

/** Extra spacing added at module boundaries (on top of VERTICAL_SPACING) — makes dividers visually obvious */
const MODULE_BOUNDARY_EXTRA = 205;

/** First node Y offset from canvas top */
const FIRST_Y = 50;

/**
 * Horizontal X positions cycling through a gentle wave pattern — desktop.
 * Nodes centered around 195px within 480px canvas.
 */
const X_WAVE_DESKTOP = [195, 185, 195, 175, 195, 185, 200, 175];

/**
 * Horizontal X positions for mobile.
 * Nodes anchored to the left (~70-90px) so labels fit to the right:
 * node right edge ≈ 70+91=161, gap=20 → label starts at 181, available ≈ 139px.
 */
const X_WAVE_MOBILE = [70, 60, 75, 55, 70, 60, 75, 50];

/**
 * generateRoadmapLayout
 *
 * Returns one RoadmapLayoutNode per lesson.
 * Adds MODULE_BOUNDARY_EXTRA spacing between modules so dividers have room.
 * @param lessons  Array of lessons
 * @param mobile   When true, use mobile-optimized node positions
 */
export function generateRoadmapLayout(lessons: Lesson[], mobile = false): RoadmapLayoutNode[] {
  const wave = mobile ? X_WAVE_MOBILE : X_WAVE_DESKTOP;
  const positions: RoadmapLayoutNode[] = [];
  let y = FIRST_Y;

  for (let index = 0; index < lessons.length; index++) {
    const lesson = lessons[index];
    // Add extra gap at module boundaries (between last of prev module and first of next)
    if (index > 0 && lesson.moduleId !== lessons[index - 1].moduleId) {
      y += MODULE_BOUNDARY_EXTRA;
    }
    positions.push({
      id: lesson.id,
      x: wave[index % wave.length],
      y,
    });
    y += VERTICAL_SPACING;
  }

  return positions;
}

/**
 * generateRoadPath
 *
 * Builds an SVG cubic-bezier path string passing through node CENTRES.
 * The path runs through the centre of each node so nodes sit exactly on the line.
 */
export function generateRoadPath(positions: RoadmapLayoutNode[]): string {
  if (positions.length < 2) return "";

  const cx = (p: RoadmapLayoutNode) => p.x + NODE_W / 2;
  const cy = (p: RoadmapLayoutNode) => p.y + NODE_H / 2;

  let d = `M ${cx(positions[0])} ${cy(positions[0])}`;

  for (let i = 0; i < positions.length - 1; i++) {
    const curr = positions[i];
    const next = positions[i + 1];
    const x1 = cx(curr);
    const y1 = cy(curr);
    const x2 = cx(next);
    const y2 = cy(next);
    const dy = y2 - y1;
    const cp1x = x1 + (x2 - x1) * 0.15;
    const cp1y = y1 + dy * 0.5;
    const cp2x = x2 - (x2 - x1) * 0.15;
    const cp2y = y2 - dy * 0.5;
    d += ` C ${cp1x} ${cp1y}, ${cp2x} ${cp2y}, ${x2} ${y2}`;
  }

  return d;
}