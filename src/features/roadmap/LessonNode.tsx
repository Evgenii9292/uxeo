// ─── LessonNode ───────────────────────────────────────────────────────────────
// Renders a single lesson node in all possible visual states:
// completed | partial | current | locked

import React from "react";
import { useHomeworkSafe } from "../../app/context/HomeworkContext";
import svgPaths      from "../../imports/svg-m45lips45r";
import svgRoad       from "../../imports/svg-r65h8i9kzg";
import svgFullRing   from "../../imports/svg-7tw6k57ebg";
import svgAnnotations from "../../imports/svg-jywxuurbpc";
import svgFigmaNote  from "../../imports/svg-mfpv5bbouj";
import svgHomeworkIcon from "../../imports/svg-lzat1pb268";
import svgCardPaths    from "../../imports/svg-u7gh1bm86c";
import imgHomework   from "figma:asset/73955ec9afb1b01b6b33dcbe4e02cde8a0717024.png";
import { NODE_W, NODE_H } from "./roadmap-layout";
import type { Lesson } from "./roadmap-types";

// ─── Shadow palette ───────────────────────────────────────────────────────────

// Solid grey shadow for locked nodes (no transparency)
const SHADOW_GRAY = "#20252B";

// ─── Completed: full green with checkmark ─────────────────────────────────────

function GreenCheckmarkEllipse({ uid }: { uid: string }) {
  return (
    // FIX 1: overflow visible so stroke ring renders without clipping
    <div style={{ width: NODE_W, height: NODE_H + 7, position: "relative", flexShrink: 0, overflow: "visible" }}>
      <div
        aria-hidden="true"
        className="absolute"
        style={{ top: 7, left: 0, width: NODE_W, height: NODE_H, borderRadius: "50%", background: "#34471E" }}
      />
      <div
        className="absolute group-hover:translate-y-[3px] group-active:translate-y-[5px] transition-transform duration-75"
        style={{ top: 0, left: 0, width: NODE_W, height: NODE_H, overflow: "visible" }}
      >
        <svg className="absolute inset-0 block" fill="none" width={NODE_W} height={NODE_H} viewBox="0 0 91 79" overflow="visible">
          <ellipse cx="45.5" cy="39.4906" fill="#5F7F3B" rx="45.5" ry="39.4906" />
        </svg>
        <svg className="absolute inset-0 block pointer-events-none" fill="none" width={NODE_W} height={NODE_H} viewBox="0 0 91 79" overflow="visible">
          <path d={svgFullRing.p145b6a00} stroke="#6DA233" strokeLinecap="round" strokeWidth="5" />
        </svg>
        <svg className="absolute block" fill="none" style={{ top: 27, left: 34, width: 24, height: 24 }} viewBox="0 0 24 24">
          <path d={svgFullRing.p1868b300} stroke={`url(#ckc_${uid})`} strokeLinecap="round" strokeWidth="5" />
          <defs>
            <linearGradient gradientUnits="userSpaceOnUse" id={`ckc_${uid}`} x1="20.5" x2="18.6677" y1="6.5" y2="36.2261">
              <stop stopColor="#93E33C" />
              <stop offset="1" stopColor="#93E33C" />
            </linearGradient>
          </defs>
        </svg>
      </div>
    </div>
  );
}

// ─── Partial: green with dynamic progress ring (FIX 1 + FIX 2) ───────────────

function GreenPartialEllipse({ pct, uid }: { pct: number; uid: string }) {
  // FIX 2: compute ring arc via stroke-dasharray / stroke-dashoffset
  // Use path-based oval ring instead of ellipse for correct progress arc
  const rx = 43;
  const ry = 37;
  const cx = 45.5;
  const cy = 39.5;
  
  const progress = Math.min(Math.max(pct / 100, 0), 1);

  return (
    // FIX 1: overflow visible so ring stroke doesn't clip
    <div style={{ width: NODE_W, height: NODE_H + 7, position: "relative", flexShrink: 0, overflow: "visible" }}>
      <div
        aria-hidden="true"
        className="absolute"
        style={{ top: 7, left: 0, width: NODE_W, height: NODE_H, borderRadius: "50%", background: "#34471E" }}
      />
      <div
        className="absolute group-hover:translate-y-[3px] group-active:translate-y-[5px] transition-transform duration-75"
        style={{ top: 0, left: 0, width: NODE_W, height: NODE_H, overflow: "visible" }}
      >
        {/* Green ellipse fill */}
        <svg className="absolute inset-0 block" fill="none" width={NODE_W} height={NODE_H} viewBox="0 0 91 79">
          <ellipse cx="45.5" cy="39.4906" fill="#5F7F3B" rx="45.5" ry="39.4906" />
        </svg>
        {/* FIX 2: path-based progress ring for correct oval contour */}
        <svg
          className="absolute inset-0 block pointer-events-none"
          fill="none"
          width={NODE_W}
          height={NODE_H}
          viewBox="0 0 91 79"
          overflow="visible"
        >
          {/* Background ring (dim) — ellipse matching node shape */}
          <ellipse
            cx={cx} cy={cy} rx={rx} ry={ry}
            stroke="#3D5A22" strokeWidth="5" fill="none"
            strokeLinecap="round"
          />
          {/* Progress arc — path-based oval for correct contour */}
          <path
            d={`M ${cx} ${cy - ry} a ${rx} ${ry} 0 1 1 0 ${ry * 2} a ${rx} ${ry} 0 1 1 0 ${-ry * 2}`}
            fill="none"
            stroke="#6DA233"
            strokeWidth="5"
            strokeLinecap="round"
            pathLength="1"
            strokeDasharray={`${progress} 1`}
          />
        </svg>
        {/* Percentage text */}
        <div className="absolute inset-0 flex items-center justify-center">
          <p
            className="font-['Roboto_Condensed:ExtraBold',sans-serif] font-extrabold text-[18px] leading-none"
            style={{ color: "#6DA233" }}
          >
            {pct}%
          </p>
        </div>
      </div>
    </div>
  );
}

// ─── Current: orange glow node ────────────────────────────────────────────────

function OrangeCurrentEllipse({ uid, pct, isHomework }: { uid: string; pct: number; isHomework?: boolean }) {
  const rx = 42;
  const ry = 37;
  const cx = 44.5;
  const cy = 39.5;
  const progress = Math.min(Math.max(pct / 100, 0), 1);

  return (
    <div style={{ width: 89, height: NODE_H + 7, position: "relative", flexShrink: 0, overflow: "visible" }}>
      {/* Orange glow aura */}
      <div
        aria-hidden="true"
        style={{
          position: "absolute",
          top: 0, left: 0, width: 89, height: NODE_H,
          borderRadius: "50%",
          boxShadow: "0px 5px 95px 0px rgba(237, 147, 131, 0.5)",
          pointerEvents: "none",
        }}
      />
      <div
        className="absolute group-hover:translate-y-[3px] group-active:translate-y-[6px] transition-all duration-75 shadow-[0_6px_0_rgba(160,70,10,0.45)] group-hover:shadow-[0_3px_0_rgba(160,70,10,0.45)] group-active:shadow-none"
        style={{ top: 0, left: 0, width: 89, height: NODE_H, borderRadius: "50%", overflow: "visible" }}
      >
        <svg className="absolute inset-0 block" fill="none" width="89" height={NODE_H} viewBox="0 0 89 79">
          <ellipse cx="44.5" cy="39.5" fill="#FF6B21" rx="44.5" ry="39.5" />
        </svg>
        {/* Progress ring — only for non-homework lessons */}
        {!isHomework && pct > 0 && (
          <svg
            className="absolute inset-0 block pointer-events-none"
            fill="none"
            width="89"
            height={NODE_H}
            viewBox="0 0 89 79"
            overflow="visible"
          >
            {/* Filled progress arc only, no background ring */}
            <path
              d={`M ${cx} ${cy - ry} a ${rx} ${ry} 0 1 1 0 ${ry * 2} a ${rx} ${ry} 0 1 1 0 ${-ry * 2}`}
              fill="none"
              stroke="#FF9A5C"
              strokeWidth="5"
              strokeLinecap="round"
              pathLength="1"
              strokeDasharray={`${progress} 1`}
            />
          </svg>
        )}
        {/* Icon: notebook for homework, lightning for regular */}
        {isHomework ? (
          <div className="absolute overflow-clip" style={{ top: 22, left: 30, width: 34, height: 34 }}>
            <div className="absolute inset-[8.54%_0_8.55%_0.31%]">
              <svg className="absolute block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 31.9025 26.5322">
                <path d={svgRoad.p36307f80} fill="#EFF1FB" />
                <path d={svgRoad.p17d86080} fill="#EFF1FB" />
                <path d={svgRoad.p2cf63e80} fill="#EFF1FB" />
              </svg>
            </div>
          </div>
        ) : (
          <div className="absolute inset-[18%_25%_25%_23%]">
            <svg className="absolute block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 48 51">
              <path d={svgPaths.p307f1380} fill="#EFF1FB" />
            </svg>
          </div>
        )}
      </div>
    </div>
  );
}

// ─── Homework: dark clock node (#424A4D bg, #80949B clock) ───────────────────

function HomeworkClockEllipse() {
  return (
    <div style={{ width: NODE_W, height: NODE_H + 7, position: "relative", flexShrink: 0, overflow: "visible" }}>
      {/* Shadow */}
      <div
        aria-hidden="true"
        className="absolute"
        style={{ top: 7, left: 0, width: NODE_W, height: NODE_H, borderRadius: "50%", background: "#222829" }}
      />
      <div
        className="absolute group-hover:translate-y-[3px] group-active:translate-y-[5px] transition-transform duration-75"
        style={{ top: 0, left: 0, width: NODE_W, height: NODE_H, overflow: "visible" }}
      >
        {/* Filled ellipse — no border */}
        <svg className="absolute inset-0 block" fill="none" width={NODE_W} height={NODE_H} viewBox="0 0 91 79" overflow="visible">
          <ellipse cx="45.5" cy="39.5" rx="45.5" ry="39.5" fill="#424A4D" />
        </svg>
        {/* Clock icon — 34px, centered */}
        <div className="absolute" style={{ top: 22, left: 29, width: 34, height: 34 }}>
          <svg className="absolute block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 19 19" opacity="0.7">
            <path d={svgCardPaths.p10e6fc80} fill="#868D97" />
            <path d={svgCardPaths.pe9e5cc0} fill="#868D97" />
            <path d={svgCardPaths.p2ae2c800} fill="#868D97" />
            <path d={svgCardPaths.p8839180} fill="#868D97" />
            <path d={svgCardPaths.pb4b6780} fill="#868D97" />
          </svg>
        </div>
      </div>
    </div>
  );
}

// ─── Homework reviewed+unseen: green node with Фидбек chat bubble ─────────────

function HomeworkFeedbackEllipse({ uid }: { uid: string }) {
  return (
    <div style={{ width: NODE_W, height: NODE_H + 7, position: "relative", flexShrink: 0, overflow: "visible" }}>
      <div
        aria-hidden="true"
        className="absolute"
        style={{ top: 7, left: 0, width: NODE_W, height: NODE_H, borderRadius: "50%", background: "#34471E" }}
      />
      <div
        className="absolute group-hover:translate-y-[3px] group-active:translate-y-[5px] transition-transform duration-75"
        style={{ top: 0, left: 0, width: NODE_W, height: NODE_H, overflow: "visible" }}
      >
        <svg className="absolute inset-0 block" fill="none" width={NODE_W} height={NODE_H} viewBox="0 0 91 79" overflow="visible">
          <ellipse cx="45.5" cy="39.4906" fill="#5F7F3B" rx="45.5" ry="39.4906" />
        </svg>
        <svg className="absolute inset-0 block pointer-events-none" fill="none" width={NODE_W} height={NODE_H} viewBox="0 0 91 79" overflow="visible">
          <path d={svgFullRing.p145b6a00} stroke="#6DA233" strokeLinecap="round" strokeWidth="5" />
        </svg>
        {/* Фидбек chat bubble icon — centered, green */}
        <svg className="absolute block" style={{ top: 28, left: 34, width: 24, height: 23 }} viewBox="0 0 28.2667 26.5" fill="none">
          <g clipPath={`url(#clip_fb_${uid})`}>
            <path d="M20.0182 2.35449H8.24045C4.94267 2.35449 2.35156 4.9456 2.35156 8.24338V15.31V16.4878C2.35156 19.6678 4.94267 22.3767 8.24045 22.3767H10.0071C10.3605 22.3767 10.7138 22.6123 10.9493 22.8478L12.716 25.2034C13.5405 26.2634 14.7182 26.2634 15.5427 25.2034L17.3093 22.8478C17.5449 22.4945 17.8982 22.3767 18.2516 22.3767H20.0182C23.316 22.3767 25.9071 19.7856 25.9071 16.4878V8.24338C25.9071 4.9456 23.316 2.35449 20.0182 2.35449ZM15.3071 16.2523H8.24045C7.76934 16.2523 7.29823 15.8989 7.29823 15.31C7.29823 14.7212 7.65156 14.3678 8.24045 14.3678H15.3071C15.7782 14.3678 16.2493 14.7212 16.2493 15.31C16.2493 15.8989 15.7782 16.2523 15.3071 16.2523ZM20.0182 10.3634H8.24045C7.76934 10.3634 7.41601 9.89227 7.41601 9.42116C7.41601 8.95005 7.76934 8.59671 8.24045 8.59671H20.0182C20.4893 8.59671 20.9605 8.95005 20.9605 9.53894C20.9605 10.1278 20.4893 10.3634 20.0182 10.3634Z" fill="#9EFF33" />
          </g>
          <defs>
            <clipPath id={`clip_fb_${uid}`}>
              <rect width="28.2667" height="26.5" fill="white" />
            </clipPath>
          </defs>
        </svg>
      </div>
    </div>
  );
}

// ─── Locked: grey node ────────────────────────────────────────────────────────

function GrayLockedEllipse({ icon = "lightning", uid }: { icon?: "lightning" | "homework"; uid: string }) {
  return (
    <div style={{ width: NODE_W, height: NODE_H + 7, position: "relative", flexShrink: 0 }}>
      <div
        aria-hidden="true"
        className="absolute"
        // FIX 5: lightened shadow via rgba
        style={{ top: 7, left: 0, width: NODE_W, height: NODE_H, borderRadius: "50%", background: SHADOW_GRAY }}
      />
      <div
        className="absolute group-hover:translate-y-[3px] group-active:translate-y-[5px] transition-transform duration-75"
        style={{ top: 0, left: 0, width: NODE_W, height: NODE_H, borderRadius: "50%" }}
      >
        <svg className="absolute inset-0 block" fill="none" width={NODE_W} height={NODE_H} viewBox="0 0 91 78.9811">
          <ellipse cx="45.5" cy="39.4906" fill="#343E42" rx="45.5" ry="39.4906" />
        </svg>
        {icon === "lightning" ? (
          <svg className="absolute block" fill="none" style={{ top: 23, left: 31, width: 28, height: 33 }} viewBox="0 0 27.6456 32.2532">
            <g clipPath={`url(#clipg_${uid})`}>
              <path d={svgPaths.p37310e80} fill="#868D97" opacity="0.7" />
            </g>
            <defs>
              <clipPath id={`clipg_${uid}`}>
                <rect fill="white" height="32.2532" width="27.6456" />
              </clipPath>
            </defs>
          </svg>
        ) : (
          <div className="absolute overflow-clip" style={{ top: 22, left: 30, width: 34, height: 34 }}>
            <div className="absolute inset-[8.54%_0_8.55%_0.31%]">
              <svg className="absolute block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 31.9025 26.5322">
                <path d={svgRoad.p36307f80} fill="#717981" />
                <path d={svgRoad.p17d86080} fill="#717981" />
                <path d={svgRoad.p2cf63e80} fill="#717981" />
              </svg>
            </div>
          </div>
        )}
      </div>
    </div>
  );
}

// ─── Selection ring overlay ───────────────────────────────────────────────────

function SelectionRing() {
  return (
    <div
      className="absolute pointer-events-none"
      style={{
        top: Math.round(NODE_H / 2 - 107 / 2),
        left: Math.round(NODE_W / 2 - 129 / 2),
        zIndex: 2,
      }}
    >
      <svg className="ml-[-10px] mr-[0px] my-[0px]" fill="none" preserveAspectRatio="none" viewBox="0 0 129.443 107.418" width={129} height={107}>
        <path d={svgFigmaNote.p6c9c500 || svgAnnotations.p3c5ec300} fill="#455155" />
      </svg>
    </div>
  );
}

// ─── Homework label icon ──────────────────────────────────────────────────────

function HomeworkLabelIcon() {
  return (
    <div className="relative shrink-0" style={{ width: 42, height: 33 }}>
      <svg className="absolute block size-full mx-[0px] mt-[30px] mb-[0px]" fill="none" preserveAspectRatio="xMidYMid meet" viewBox="0 0 47.0003 36.6601">
        <g clipPath="url(#clip_hw_label)">
          <path d={svgHomeworkIcon.p22d16980} fill="#455155" />
          <path d={svgHomeworkIcon.p262a00f0} fill="#455155" />
          <path d={svgHomeworkIcon.peefec80} fill="#455155" />
          <path d={svgHomeworkIcon.p149b5d00} fill="#455155" />
          <path d={svgHomeworkIcon.p4c9380} fill="#455155" />
          <path d={svgHomeworkIcon.p2132a100} fill="#455155" />
          <path d={svgHomeworkIcon.p2f70cc00} fill="#455155" />
        </g>
        <defs>
          <clipPath id="clip_hw_label">
            <rect fill="white" height="36.6601" width="47.0003" />
          </clipPath>
        </defs>
      </svg>
    </div>
  );
}

// ─── Node label ───────────────────────────────────────────────────────────────

const CURRENT_TITLE_COLOR = "#f4f5fc";

export function NodeLabel({ lesson }: { lesson: Lesson }) {
  const isCurrent = lesson.status === "current";
  const isHomework = lesson.totalQuestions === 0;

  if (isCurrent) {
    return (
      <p
        className="font-['Roboto_Condensed:Regular',sans-serif] font-normal leading-[21px] text-[20px]"
        style={{ color: CURRENT_TITLE_COLOR, maxWidth: 160, wordBreak: "break-word" }}
      >
        {lesson.title}
      </p>
    );
  }

  return (
    <p
      className="font-['Roboto_Condensed:Regular',sans-serif] font-normal leading-[21px] text-[20px] bg-center bg-clip-text bg-cover bg-no-repeat text-[transparent]"
      style={{
        backgroundImage: `url('${imgHomework}')`,
        maxWidth: 160,
        wordBreak: "break-word",
        ...(isHomework ? {} : {}),
      }}
    >
      {lesson.title}
    </p>
  );
}

// ─── Visual renderer ──────────────────────────────────────────────────────────

function renderVisual(lesson: Lesson, uid: string, hwStatus?: string | null, isUnseenFeedback?: boolean) {
  const isHomework = lesson.totalQuestions === 0;

  if (isHomework) {
    if (hwStatus === "reviewed") {
      if (isUnseenFeedback) return <HomeworkFeedbackEllipse uid={uid} />;
      return <GreenCheckmarkEllipse uid={uid} />;
    }
    return <HomeworkClockEllipse />;
  }

  if (lesson.status === "current") {
    const pct = Math.round((lesson.progress / lesson.totalQuestions) * 100);
    return <OrangeCurrentEllipse uid={uid} pct={pct} isHomework={false} />;
  }
  const pct = lesson.totalQuestions > 0
    ? Math.round((lesson.progress / lesson.totalQuestions) * 100)
    : 0;
  if (pct >= 100) return <GreenCheckmarkEllipse uid={uid} />;
  if (lesson.status === "completed") return <GreenPartialEllipse pct={pct} uid={uid} />;
  return <GrayLockedEllipse icon="lightning" uid={uid} />;
}

// ─── LessonNode (public) ──────────────────────────────────────────────────────

interface LessonNodeProps {
  lesson: Lesson;
  isSelected: boolean;
  nodeRef: (el: HTMLDivElement | null) => void;
  onClick: () => void;
}

export function LessonNode({ lesson, isSelected, nodeRef, onClick }: LessonNodeProps) {
  const isHomework = lesson.totalQuestions === 0;
  const hwCtx = useHomeworkSafe();
  const hwStatus = isHomework ? (hwCtx?.getByLessonId(lesson.lessonId)?.status ?? null) : null;
  const isUnseenFeedback = isHomework ? (hwCtx?.isUnseen(lesson.lessonId) ?? false) : false;

  return (
    <div className="flex items-center gap-[20px]">
      {/* Clickable node — data-roadmap-node lets LessonPopup skip outside-click when tapping here */}
      <div
        ref={nodeRef}
        onClick={onClick}
        data-roadmap-node="true"
        className="group cursor-pointer select-none relative"
      >
        {/* Homework icon — absolutely positioned to the left of the circular node */}
        {isHomework && (
          <div className="absolute pointer-events-none" style={{ right: '100%', top: '50%', transform: 'translateY(-50%)', marginRight: 8 }}>
            <HomeworkLabelIcon />
          </div>
        )}
        {isSelected && <SelectionRing />}
        {renderVisual(lesson, `rn${lesson.id}`, hwStatus, isUnseenFeedback)}
      </div>

      {/* Label */}
      <div className="flex items-center gap-[8px]">
        <NodeLabel lesson={lesson} />
      </div>
    </div>
  );
}