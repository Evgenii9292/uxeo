// ─── Roadmap ──────────────────────────────────────────────────────────────────
// Main roadmap container.
// Orchestrates: path, nodes, popups, annotations, module dividers.

import React, { useRef, useEffect, useCallback } from "react";
import svgAnnotations from "../../imports/svg-jywxuurbpc";
import svgMySToboi    from "../../imports/svg-1m1v14av0g";
import svgFigmaNote   from "../../imports/svg-mfpv5bbouj";
import svgTyZdes      from "../../imports/svg-837vvk8vr0";
import Group481532    from "../../imports/Group481532";
import { RoadmapPath } from "./RoadmapPath";
import { LessonNode }  from "./LessonNode";
import { LessonPopup } from "./LessonPopup";
import { generateRoadmapLayout, generateRoadPath, ROADMAP_W, ROADMAP_W_MOBILE, NODE_W, NODE_H } from "./roadmap-layout";
import type { Lesson } from "./roadmap-types";

// ─── Props ────────────────────────────────────────────────────────────────────

interface RoadmapProps {
  lessons: Lesson[];
  popupLessonId: number | null;
  onSelectLesson: (id: number | null) => void;
  scrollToLessonId?: number | null;
  onScrollComplete?: () => void;
}

// ─── Handwritten annotations ──────────────────────────────────────────────────

function TyZdesAnnotation({ hasStarted }: { hasStarted: boolean }) {
  if (hasStarted) {
    // "Продолжить" handwritten icon — same scale 0.7, natural aspect ratio preserved
    const W = Math.round(194.895 * 0.7);
    const H = Math.round(118.934 * 0.7);
    return (
      <div style={{ width: W, height: H, position: "relative" }}>
        <Group481532 />
      </div>
    );
  }

  return (
    <div style={{ width: Math.round(87 * 0.7), height: Math.round(105 * 0.7), position: "relative" }}>
      <div className="absolute" style={{ inset: 0, transformOrigin: "top left", transform: "scale(0.7)", width: 87, height: 105 }}>
        <div className="absolute inset-0">
          <svg className="block size-full ml-[20px] mr-[0px] my-[0px]" fill="none" preserveAspectRatio="none" viewBox="0 0 86.6453 104.999">
            <g clipPath="url(#clip_tyzdes)">
              <path d={svgTyZdes.p2ffed200} fill="url(#tz_grad_arrow)" />
              <g>
                <path d={svgTyZdes.p33dd2a80} fill="url(#tz_grad_t1)" />
                <path d={svgTyZdes.p2e214d00} fill="url(#tz_grad_t2)" />
                <path d={svgTyZdes.p1a07c140} fill="url(#tz_grad_t3)" />
              </g>
            </g>
            <defs>
              <linearGradient gradientUnits="userSpaceOnUse" id="tz_grad_arrow" x1="59.203" x2="32.1362" y1="74.7159" y2="98.3222">
                <stop stopColor="#FF6B21" /><stop offset="1" stopColor="#994014" />
              </linearGradient>
              <linearGradient gradientUnits="userSpaceOnUse" id="tz_grad_t1" x1="9.30811" x2="-12.1843" y1="27.8735" y2="40.7109">
                <stop stopColor="#FF6B21" /><stop offset="1" stopColor="#994014" />
              </linearGradient>
              <linearGradient gradientUnits="userSpaceOnUse" id="tz_grad_t2" x1="43.5202" x2="43.1368" y1="36.3978" y2="50.2936">
                <stop stopColor="#FF6B21" /><stop offset="1" stopColor="#994014" />
              </linearGradient>
              <linearGradient gradientUnits="userSpaceOnUse" id="tz_grad_t3" x1="79.9056" x2="72.5761" y1="31.1173" y2="36.2958">
                <stop stopColor="#FF6B21" /><stop offset="1" stopColor="#994014" />
              </linearGradient>
              <clipPath id="clip_tyzdes">
                <rect fill="white" height="104.999" width="86.6453" />
              </clipPath>
            </defs>
          </svg>
        </div>
      </div>
    </div>
  );
}

function MySToboiAnnotation() {
  return (
    <div style={{ width: 106, height: 66, position: "relative" }}>
      <svg className="absolute block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 106 66.002">
        <g clipPath="url(#clip_mst)">
          <path d={svgMySToboi.p1fcf6340} fill="#455155" />
          <path d={svgMySToboi.p6008b80}  fill="#455155" />
          <path d={svgMySToboi.p30371500} fill="#455155" />
          <path d={svgMySToboi.p1b4df900} fill="#455155" />
          <path d={svgMySToboi.pd508400}  fill="#455155" />
          <path d={svgMySToboi.p38ee6100} fill="#455155" />
          <path d={svgMySToboi.p919f200}  fill="#455155" />
          <path d={svgMySToboi.p23813c00} fill="#455155" />
          <path d={svgMySToboi.p1fc33700} fill="#455155" />
          <path d={svgMySToboi.p19974d00} fill="#455155" />
          <path d={svgMySToboi.p2ba7f180} fill="#455155" />
        </g>
        <defs>
          <clipPath id="clip_mst">
            <rect fill="white" height="66.002" width="106" />
          </clipPath>
        </defs>
      </svg>
    </div>
  );
}

function FigmaNoteAnnotation() {
  // 2x the original SelectionRing size (129×107 → 258×214)
  const W = 258;
  const H = 214;
  return (
    <div style={{ width: W, height: H, position: "relative" }}>
      
    </div>
  );
}

// ─── Module Divider ───────────────────────────────────────────────────────────

function ModuleDivider() {
  return (
    <div className="w-full" style={{ height: 4 }}>
      <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 480 4">
        <path d="M0 2H480" stroke="url(#divider_grad)" strokeDasharray="8 8" strokeWidth="4" />
        <defs>
          <linearGradient gradientUnits="userSpaceOnUse" id="divider_grad" x1="0" x2="480" y1="2.5" y2="2.5">
            <stop stopColor="#343E42" stopOpacity="0" />
            <stop offset="0.564351" stopColor="#343E42" />
            <stop offset="1" stopColor="#343E42" stopOpacity="0" />
          </linearGradient>
        </defs>
      </svg>
    </div>
  );
}

// ─── Roadmap ──────────────────────────────────────────────────────────────────

export function Roadmap({
  lessons,
  popupLessonId,
  onSelectLesson,
  scrollToLessonId,
  onScrollComplete,
  mobile = false,
}: RoadmapProps & { mobile?: boolean }) {
  const containerRef = useRef<HTMLDivElement>(null);
  const nodeRefs     = useRef<Map<number, HTMLDivElement>>(new Map());
  const anchorRefs   = useRef<Map<number, React.RefObject<HTMLDivElement | null>>>(new Map());

  const roadmapW = mobile ? ROADMAP_W_MOBILE : ROADMAP_W;
  const MOBILE_SCALE = 0.88;

  // Compute positions algorithmically
  const layout       = generateRoadmapLayout(lessons, mobile);
  const totalHeight  = layout.length > 0 ? layout[layout.length - 1].y + NODE_H + 250 : 1000;
  const roadPath     = generateRoadPath(layout);

  // Group lessons by module for divider placement
  const modules = lessons.reduce<{ moduleId: number; moduleName: string; lessons: Lesson[] }[]>(
    (acc, lesson) => {
      const existing = acc.find(m => m.moduleId === lesson.moduleId);
      if (existing) { existing.lessons.push(lesson); }
      else { acc.push({ moduleId: lesson.moduleId, moduleName: lesson.moduleName, lessons: [lesson] }); }
      return acc;
    },
    []
  );

  // Compute divider positions between modules
  const dividers: { y: number; afterModuleId: number }[] = [];
  let accumulatedLessons = 0;
  modules.forEach((module, idx) => {
    if (idx > 0 && accumulatedLessons < layout.length) {
      const prevEnd = accumulatedLessons - 1;
      const currStart = accumulatedLessons;
      if (prevEnd >= 0 && currStart < layout.length) {
        const dividerY = (layout[prevEnd].y + NODE_H + layout[currStart].y) / 2;
        dividers.push({ y: dividerY, afterModuleId: modules[idx - 1].moduleId });
      }
    }
    accumulatedLessons += module.lessons.length;
  });

  // Current lesson index for "Ты здесь" annotation
  const currentIndex = lessons.findIndex(l => l.status === "current");

  // Scroll to lesson
  useEffect(() => {
    if (scrollToLessonId != null) {
      const el = nodeRefs.current.get(scrollToLessonId);
      if (el) {
        el.scrollIntoView({ behavior: "smooth", block: "center" });
        setTimeout(() => {
          onSelectLesson(scrollToLessonId);
          onScrollComplete?.();
        }, 400);
      }
    }
  }, [scrollToLessonId, onSelectLesson, onScrollComplete]);

  const setNodeRef = useCallback((id: number, el: HTMLDivElement | null) => {
    if (el) { nodeRefs.current.set(id, el); }
    else    { nodeRefs.current.delete(id); }
  }, []);

  // Ensure a stable ref object exists for each lesson id
  function getAnchorRef(id: number): React.RefObject<HTMLDivElement | null> {
    if (!anchorRefs.current.has(id)) {
      anchorRefs.current.set(id, React.createRef<HTMLDivElement>());
    }
    return anchorRefs.current.get(id)!;
  }

  return (
    <div className="w-full flex justify-center relative">
      {/* Module labels — positioned absolutely */}
      <div className="absolute left-0 w-full" style={{ pointerEvents: "none" }}>
        {modules.map((module, idx) => {
          let moduleStartIdx = 0;
          for (let i = 0; i < idx; i++) {
            moduleStartIdx += modules[i].lessons.length;
          }
          if (moduleStartIdx >= layout.length) return null;
          const labelY = idx === 0
            ? (mobile ? Math.round(10 * MOBILE_SCALE) - 7 : 30)
            : Math.round((layout[moduleStartIdx].y - (mobile ? 40 : 20)) * (mobile ? MOBILE_SCALE : 1)) - (mobile ? 30 : 0);
          return (
            <div key={module.moduleId} style={{ position: "absolute", left: 0, top: labelY }}>
              <div
                className="font-['Roboto_Condensed:Regular',sans-serif]"
                style={{
                  fontSize: mobile ? 11 : 14,
                  background: "linear-gradient(180deg, rgba(255,255,255,0.55), rgba(255,255,255,0.25))",
                  WebkitBackgroundClip: "text",
                  WebkitTextFillColor: "transparent",
                  backgroundClip: "text",
                  fontWeight: 400,
                  lineHeight: "16px",
                  marginBottom: 2,
                  whiteSpace: "nowrap",
                }}
              >
                Модуль {module.moduleId}.
              </div>
              <div
                className="font-['Roboto_Condensed:Regular',sans-serif]"
                style={{
                  fontSize: mobile ? 12 : 16,
                  background: "linear-gradient(180deg, rgba(255,255,255,0.55), rgba(255,255,255,0.25))",
                  WebkitBackgroundClip: "text",
                  WebkitTextFillColor: "transparent",
                  backgroundClip: "text",
                  fontWeight: 400,
                  lineHeight: "18px",
                  whiteSpace: "nowrap",
                }}
              >
                {module.moduleName}
              </div>
            </div>
          );
        })}
      </div>

      {/* ── Height controller: shrinks layout footprint to match visual scale ── */}
      <div style={{
        height: mobile ? Math.round(totalHeight * MOBILE_SCALE) : totalHeight,
        width: roadmapW,
        position: "relative",
        flexShrink: 0,
        overflow: "visible",
      }}>
        <div
          ref={containerRef}
          className="relative"
          style={{
            width: roadmapW,
            height: totalHeight,
            ...(mobile ? { transform: `scale(${MOBILE_SCALE})`, transformOrigin: "top center" } : {}),
          }}
        >

          {/* Road path */}
          <RoadmapPath pathData={roadPath} totalHeight={totalHeight} positions={layout} />

          {/* Module dividers */}
          {dividers.map((divider) => (
            <div key={divider.afterModuleId} className="absolute" style={{ left: -40, right: -40, top: divider.y }}>
              <ModuleDivider />
            </div>
          ))}

          {/* "Ты здесь" / "Продолжить" SVG annotation */}
          {currentIndex >= 0 && currentIndex < layout.length && (() => {
            const hasStarted = (lessons[currentIndex].progress ?? 0) > 0;
            const pos = layout[currentIndex];

            // Desktop: annotation sits to the LEFT of the node
            // Mobile:  annotation sits to the RIGHT (nodes are pushed left)
            let left: number;
            let top: number;

            if (mobile) {
              // LEFT of node, shifted lower to avoid "Модуль 1" label
              const annotW = hasStarted
                ? Math.round(194.895 * 0.7 * 0.75)
                : Math.round(87 * 0.7 * 0.75);
              left = pos.x - annotW - 19;
              top  = pos.y + NODE_H * 0.4 - 22;
            } else {
              left = pos.x - (hasStarted ? 130 : 90);
              top  = pos.y - 30;
            }

            return (
              <div
                className="absolute pointer-events-none"
                style={{
                  left,
                  top,
                  transform: mobile
                    ? "scale(0.75) rotate(-8deg)"
                    : undefined,
                  transformOrigin: "top left",
                }}
              >
                <TyZdesAnnotation hasStarted={hasStarted} />
              </div>
            );
          })()}

          {/* "Мы с тобой" annotation — desktop only */}
          {!mobile && layout.length > 2 && (
            <div
              className="absolute pointer-events-none"
              style={{
                left: layout[1].x + NODE_W + 80,
                top:  layout[1].y - 540,
              }}
            >
              <MySToboiAnnotation />
            </div>
          )}

          {/* "Figma Note" annotation — desktop only */}
          {!mobile && (() => {
            const hwIdx = lessons.findIndex(l => l.lessonId === "homework");
            if (hwIdx < 0 || hwIdx >= layout.length) return null;
            const ICON_W = 258;
            const ICON_H = 214;
            return (
              <div
                className="absolute pointer-events-none"
                style={{
                  left: layout[hwIdx].x - 20 - ICON_W,
                  top:  layout[hwIdx].y + Math.round(NODE_H / 2 - ICON_H / 2),
                }}
              >
                <FigmaNoteAnnotation />
              </div>
            );
          })()}

          {/* Lesson nodes */}
          {lessons.map((lesson, idx) => {
            if (idx >= layout.length) return null;
            const pos        = layout[idx];
            const isSelected = popupLessonId === lesson.id;
            const anchorRef  = getAnchorRef(lesson.id);

            return (
              <div key={lesson.id} className="absolute" style={{ left: pos.x, top: pos.y }}>
                <div ref={(el) => { setNodeRef(lesson.id, el); (anchorRef as React.MutableRefObject<HTMLDivElement | null>).current = el; }}>
                  <LessonNode
                    lesson={lesson}
                    isSelected={isSelected}
                    nodeRef={() => {}}
                    onClick={() => onSelectLesson(isSelected ? null : lesson.id)}
                  />
                </div>

                {/* Popup via portal */}
                {isSelected && (
                  <LessonPopup
                    lesson={lesson}
                    anchorRef={anchorRef}
                    onClose={() => onSelectLesson(null)}
                  />
                )}
              </div>
            );
          })}
        </div>
      </div>
    </div>
  );
}