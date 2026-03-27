// ─── Roadmap ──────────────────────────────────────────────────────────────────
// Main roadmap container.
// Orchestrates: path, nodes, popups, annotations, module dividers.

import React, { useRef, useEffect, useCallback, useState } from "react";
import plus800     from "../../assets/plus800.png";
import mySToboi    from "../../assets/my-s-toboi.png";
import strelka1    from "../../assets/strelka1.png";
import flou        from "../../assets/flou.png";
import struktura   from "../../assets/struktura.png";
import tolkoVpered from "../../assets/Только вперед.png";
import nemnoho     from "../../assets/Немного.png";
import dontGiveUp  from "../../assets/dont-give-up.png";
import pochti      from "../../assets/почти.png";
import crown       from "../../assets/Crown.png";
import roadmapFigma from "../../assets/roadmap-figma.png";
import roadmapStart from "../../assets/roadmap-start.png";
import roadmapNext from "../../assets/roadmap-next.png";
import { RoadmapPath } from "./RoadmapPath";
import { LessonNode }  from "./LessonNode";
import { LessonPopup } from "./LessonPopup";
import { generateRoadmapLayout, generateRoadPath, ROADMAP_W, ROADMAP_W_MOBILE, NODE_W, NODE_H } from "./roadmap-layout";
import type { Lesson } from "./roadmap-types";
import { getLessonIcon } from "../../app/data/lesson-icons";

function preloadImage(src: string) {
  const img = new Image();
  img.decoding = "async";
  img.src = src;
}

// ─── Props ────────────────────────────────────────────────────────────────────

interface RoadmapProps {
  lessons: Lesson[];
  popupLessonId: number | null;
  onSelectLesson: (id: number | null) => void;
  scrollToLessonId?: number | null;
  onScrollComplete?: () => void;
}

// ─── Handwritten annotations ──────────────────────────────────────────────────

function TyZdesAnnotation({ hasStarted, mobile }: { hasStarted: boolean; mobile?: boolean }) {
  if (hasStarted) {
    // Desktop: в 3 раза меньше "Начать". Mobile: на 20% меньше desktop-scale
    const scale = mobile ? 0.56 : 0.39;
    const W = Math.round(194.895 * scale);
    const H = Math.round(118.934 * scale);
    return (
      <div style={{ width: W, height: H, position: "relative" }}>
        <img src={roadmapNext} width={W} height={H} alt="" loading="lazy" />
      </div>
    );
  }

  return (
    <div style={{ width: Math.round(87 * 1.05), height: Math.round(105 * 1.05), position: "relative" }}>
      <img src={roadmapStart} width={Math.round(87 * 1.05)} height={Math.round(105 * 1.05)} alt="" loading="lazy" />
    </div>
  );
}

function MySToboiAnnotation() {
  return (
    <div style={{ width: 106, height: 66, position: "relative" }}>
      <img src={mySToboi} width={106} height={66} alt="" loading="lazy" />
    </div>
  );
}

function FigmaNoteAnnotation() {
  const W = 258;
  const H = 214;
  return (
    <div style={{ width: W, height: H, position: "relative" }}>
      <img src={roadmapFigma} width={W} height={H} alt="" loading="lazy" />
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
  const closePopupTimerRef = useRef<number | null>(null);
  const [closingPopupId, setClosingPopupId] = useState<number | null>(null);
  const MOBILE_POPUP_CLOSE_MS = 280;

  // Animate only once per session
  const [shouldAnimate] = useState<boolean>(() => {
    if (sessionStorage.getItem("roadmap-entered")) return false;
    sessionStorage.setItem("roadmap-entered", "1");
    return true;
  });


  const roadmapW = mobile ? ROADMAP_W_MOBILE : ROADMAP_W;
  const MOBILE_SCALE = 0.88;

  // Compute positions algorithmically
  const layout       = generateRoadmapLayout(lessons, mobile);
  const totalHeight  = layout.length > 0 ? layout[layout.length - 1].y + NODE_H + 450 : 1000;
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

  // Pre-warm LessonPopup on first mount so first click is instant
  const [warmed, setWarmed] = useState(false);
  useEffect(() => { setWarmed(true); }, []);

  useEffect(() => {
    const warm = () => {
      const seen = new Set<string>();
      const currentLesson = lessons.find((lesson) => lesson.status === "current");
      const lessonsToWarm = [
        ...lessons.slice(0, 3),
        ...(currentLesson ? [currentLesson] : []),
      ];

      lessonsToWarm.forEach((lesson) => {
        const src = getLessonIcon(lesson.lessonId, lesson.totalQuestions === 0);
        if (seen.has(src)) return;
        seen.add(src);
        preloadImage(src);
      });
    };

    const timeoutId = window.setTimeout(warm, 150);
    return () => window.clearTimeout(timeoutId);
  }, [lessons]);

  useEffect(() => {
    return () => {
      if (closePopupTimerRef.current) {
        window.clearTimeout(closePopupTimerRef.current);
        closePopupTimerRef.current = null;
      }
    };
  }, []);

  const handleSelectLesson = useCallback((id: number | null) => {
    if (closePopupTimerRef.current) {
      window.clearTimeout(closePopupTimerRef.current);
      closePopupTimerRef.current = null;
    }

    if (!mobile) {
      setClosingPopupId(null);
      onSelectLesson(id);
      return;
    }

    if (id === null && popupLessonId !== null) {
      setClosingPopupId(popupLessonId);
      closePopupTimerRef.current = window.setTimeout(() => {
        closePopupTimerRef.current = null;
        setClosingPopupId(null);
        onSelectLesson(null);
      }, MOBILE_POPUP_CLOSE_MS);
      return;
    }

    setClosingPopupId(null);
    onSelectLesson(id);
  }, [mobile, onSelectLesson, popupLessonId]);

  return (
    <div className="w-full flex justify-center relative">
      {/* Pre-warm popup — renders once hidden so JS/SVG is already parsed (desktop only) */}
      {!mobile && warmed && lessons[0] && popupLessonId === null && (
        <div style={{ position: "absolute", visibility: "hidden", pointerEvents: "none", zIndex: -1 }}>
          <LessonPopup lesson={lessons[0]} anchorRef={{ current: null }} onClose={() => {}} />
        </div>
      )}
      {/* ── Node entrance animation keyframes ── */}
      <style>{`
        @keyframes rmNodeIn {
          from { opacity: 0; transform: translateY(20px) scale(0.94); }
          to   { opacity: 1; transform: translateY(0)    scale(1); }
        }
      `}</style>
      {/* Module labels — positioned absolutely */}
      <div className="absolute left-0 w-full" style={{ pointerEvents: "none" }}>
        {modules.map((module, idx) => {
          let moduleStartIdx = 0;
          for (let i = 0; i < idx; i++) {
            moduleStartIdx += modules[i].lessons.length;
          }
          if (moduleStartIdx >= layout.length) return null;
          const labelY = idx === 0
            ? (mobile ? Math.round(10 * MOBILE_SCALE) - 7 : 0)
            : Math.round((layout[moduleStartIdx].y - (mobile ? 40 : 20)) * (mobile ? MOBILE_SCALE : 1)) - (mobile ? 60 : 60);
          return (
            <div key={module.moduleId} style={{ position: "absolute", left: 0, top: labelY }}>
              <div
                className="font-['Roboto_Condensed:Regular',sans-serif]"
                style={{
                  fontSize: mobile ? 11 : 14,
                  color: "#445054",
                  fontWeight: 400,
                  lineHeight: mobile ? "12px" : "16px",
                  marginBottom: mobile ? 1 : 2,
                  whiteSpace: "nowrap",
                }}
              >
                Модуль {module.moduleId}.
              </div>
              <div
                className="font-['Roboto_Condensed:Regular',sans-serif]"
                style={{
                  fontSize: mobile ? 12 : 16,
                  color: "#445054",
                  fontWeight: 400,
                  lineHeight: mobile ? "14px" : "18px",
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

          {/* "Мы с тобой" annotation — below first module divider only */}
          {dividers.length > 0 && (
            <div
              className="absolute pointer-events-none"
              style={{
                left: roadmapW / 2 + 25,
                top: dividers[0].y + 20,
              }}
            >
              <img src={mySToboi} width={108} height={63} alt="" loading="lazy" />
            </div>
          )}

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
                ? Math.round(194.895 * 0.56 * 0.75)
                : Math.round(87 * 1.05 * 0.75);
              left = pos.x - annotW - (hasStarted ? 14 : 29);
              top  = pos.y + NODE_H * 0.4 - 22;
            } else {
              left = pos.x - (hasStarted ? 70 : 90);
              top  = pos.y - 30;
            }

            return (
              <div
                className="absolute pointer-events-none"
                style={{
                  left,
                  top,
                  transform: mobile
                    ? "scale(0.75) rotate(-13deg)"
                    : undefined,
                  transformOrigin: "top left",
                }}
              >
                <TyZdesAnnotation hasStarted={hasStarted} mobile={mobile} />
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

          {/* "Стрелка 1" — between Что такое UX (idx 4) and User Flow (idx 5), mirrored, 30px right of node */}
          {layout.length > 5 && (
            <div
              className="absolute pointer-events-none"
              style={{
                left: roadmapW / 2 - 30 - 16 - (mobile ? 30 : 0),
                top: Math.round((layout[4].y + NODE_H + layout[5].y) / 2) - 34,
                transform: "scaleX(-1)",
                transformOrigin: "left center",
              }}
            >
              <img src={strelka1} width={16} height={68} alt="" loading="lazy" />
            </div>
          )}

          {/* "Флоу" — right of "User Flow" label (idx 5) */}
          {layout.length > 5 && (
            <div
              className="absolute pointer-events-none"
              style={{
                left: layout[5].x + NODE_W + 115,
                top: layout[5].y + Math.round(NODE_H / 2) - 27,
              }}
            >
              <img src={flou} width={42} height={55} alt="" loading="lazy" />
            </div>
          )}

          {/* "Структура" — below "Структура интерфейса" label (idx 6) */}
          {layout.length > 6 && (
            <div
              className="absolute pointer-events-none"
              style={{
                left: layout[6].x + NODE_W + 20,
                top: layout[6].y + Math.round(NODE_H / 2) + 31,
              }}
            >
              <img src={struktura} width={38} height={37} alt="" loading="lazy" />
            </div>
          )}


          {/* "+800 XP" annotation — below each homework node except the last */}
          {(() => {
            const hwIndices = lessons
              .map((l, i) => ({ l, i }))
              .filter(({ l }) => l.lessonId?.startsWith("homework"))
              .map(({ i }) => i);
            const toShow = hwIndices.slice(0, -1); // all except last
            let hwCount = 0;
            return toShow.map((idx) => {
              hwCount++;
              const pos = layout[idx];
              if (!pos) return null;
              const rotate = hwCount === 2 ? "rotate(-8deg)" : undefined;
              return (
                <div
                  key={`plus800_${idx}`}
                  className="absolute pointer-events-none"
                  style={{
                    left: pos.x + NODE_W + 20,
                    top: pos.y + Math.round(NODE_H / 2) + 41,
                    transform: rotate,
                    transformOrigin: "top left",
                  }}
                >
                  <img src={plus800} width={90} height={41} alt="" loading="lazy" />
                </div>
              );
            });
          })()}

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

          {/* "Только вперед" — after Основные элементы интерфейса (idx 7), LEFT */}
          {layout.length > 8 && (
            <div
              className="absolute pointer-events-none"
              style={{
                left: mobile ? roadmapW / 2 + 20 : roadmapW / 2 - 30 - 158,
                top: Math.round((layout[7].y + NODE_H + layout[8].y) / 2) - 25,
              }}
            >
              <img src={tolkoVpered} width={158} height={50} alt="" loading="lazy" />
            </div>
          )}

          {/* "Еще немного" — after module 3 divider, RIGHT +50px */}
          {dividers.length > 1 && (
            <div
              className="absolute pointer-events-none"
              style={{
                left: roadmapW / 2 + 50 - (mobile ? 30 : 0),
                top: dividers[1].y + 20,
              }}
            >
              <img src={nemnoho} width={161} height={64} alt="" loading="lazy" />
            </div>
          )}


          {/* "Стрелка 1" — after Состояния элементов (idx 12), RIGHT, normal orientation */}
          {layout.length > 13 && (
            <div
              className="absolute pointer-events-none"
              style={{
                left: roadmapW / 2 + 30 - (mobile ? 30 : 0),
                top: Math.round((layout[12].y + NODE_H + layout[13].y) / 2) - 34,
              }}
            >
              <img src={strelka1} width={16} height={68} alt="" loading="lazy" />
            </div>
          )}

          {/* "Почти" — after Компоненты (idx 13), LEFT */}
          {layout.length > 14 && (
            <div
              className="absolute pointer-events-none"
              style={{
                left: roadmapW / 2 - 30 - 62 - (mobile ? 40 : 0),
                top: Math.round((layout[13].y + NODE_H + layout[14].y) / 2) - 10,
              }}
            >
              <img src={pochti} width={62} height={19} alt="" loading="lazy" />
            </div>
          )}

          {/* Crown — above last homework (idx 15), centered on node */}
          {layout.length > 15 && (
            <div
              className="absolute pointer-events-none"
              style={{
                left: layout[15].x + Math.round((NODE_W - 67) / 2) - 40,
                top: layout[15].y - 72 + 5,
              }}
            >
              <img src={crown} width={67} height={72} alt="" loading="lazy" />
            </div>
          )}

          {/* Lesson nodes */}
          {lessons.map((lesson, idx) => {
            if (idx >= layout.length) return null;
            const pos        = layout[idx];
            const isSelected = popupLessonId === lesson.id;
            const isClosing = closingPopupId === lesson.id;
            const anchorRef  = getAnchorRef(lesson.id);

            return (
              <div
                key={lesson.id}
                className="absolute"
                style={{
                  left: pos.x,
                  top: pos.y,
                  animation: shouldAnimate ? `rmNodeIn 0.8s ease-in-out ${idx * 140}ms both` : undefined,
                }}
              >
                <div ref={(el) => { setNodeRef(lesson.id, el); (anchorRef as React.MutableRefObject<HTMLDivElement | null>).current = el; }}>
                  <LessonNode
                    lesson={lesson}
                    isSelected={isSelected || isClosing}
                    nodeRef={() => {}}
                    onClick={() => handleSelectLesson(isSelected ? null : lesson.id)}
                  />
                </div>

                {/* Popup via portal */}
                {isSelected && (
                  <LessonPopup
                    lesson={lesson}
                    anchorRef={anchorRef}
                    onClose={() => onSelectLesson(null)}
                    isClosing={isClosing}
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
