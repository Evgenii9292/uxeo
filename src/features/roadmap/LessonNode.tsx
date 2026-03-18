// ─── LessonNode ───────────────────────────────────────────────────────────────
// Renders a single lesson node in all possible visual states:
// completed | partial | current | locked

import React from "react";
import svgPaths      from "../../imports/svg-m45lips45r";
import svgRoad       from "../../imports/svg-r65h8i9kzg";
import svgFullRing   from "../../imports/svg-7tw6k57ebg";
import svgAnnotations from "../../imports/svg-jywxuurbpc";
import svgFigmaNote  from "../../imports/svg-mfpv5bbouj";
import svgHomeworkIcon from "../../imports/svg-lzat1pb268";
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
          <ellipse cx="44.5" cy="39.5" fill={`url(#po_${uid})`} rx="44.5" ry="39.5" />
          <defs>
            <linearGradient gradientUnits="userSpaceOnUse" id={`po_${uid}`} x1="37" x2="4" y1="33" y2="94">
              <stop stopColor="#FF6B21" />
              <stop offset="1" stopColor="#994014" />
            </linearGradient>
          </defs>
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
          <ellipse cx="45.5" cy="39.4906" fill={`url(#pgg_${uid})`} rx="45.5" ry="39.4906" />
          <defs>
            <linearGradient gradientUnits="userSpaceOnUse" id={`pgg_${uid}`} x1="45.5" x2="45.5" y1="0" y2="78.9811">
              <stop stopColor="#465256" />
              <stop offset="1" stopColor="#313C40" />
            </linearGradient>
          </defs>
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

function renderVisual(lesson: Lesson, uid: string) {
  if (lesson.status === "current") {
    const isHomework = lesson.totalQuestions === 0;
    const pct = !isHomework
      ? Math.round((lesson.progress / lesson.totalQuestions) * 100)
      : 0;
    return <OrangeCurrentEllipse uid={uid} pct={pct} isHomework={isHomework} />;
  }
  // FIX 3: single consistent formula — progress / totalQuestions (= pointsEarned / pointsTotal)
  const pct = lesson.totalQuestions > 0
    ? Math.round((lesson.progress / lesson.totalQuestions) * 100)
    : 0;
  if (pct >= 100) return <GreenCheckmarkEllipse uid={uid} />;
  if (lesson.status === "completed") return <GreenPartialEllipse pct={pct} uid={uid} />;
  // Homework lessons (totalQuestions === 0) use homework icon, quiz lessons use lightning
  const icon = lesson.totalQuestions === 0 ? "homework" : "lightning";
  return <GrayLockedEllipse icon={icon as "lightning" | "homework"} uid={uid} />;
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
        {renderVisual(lesson, `rn${lesson.id}`)}
      </div>

      {/* Label */}
      <div className="flex items-center gap-[8px]">
        <NodeLabel lesson={lesson} />
      </div>
    </div>
  );
}