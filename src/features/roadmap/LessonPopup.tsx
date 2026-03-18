// ─── LessonPopup ──────────────────────────────────────────────────────────────
// Popup anchored to a lesson node, rendered via React Portal.

import React, { useRef, useEffect, useLayoutEffect, useState } from "react";
import ReactDOM from "react-dom";
import { useNavigate } from "react-router";
import { useUser } from "../../app/context/UserContext";
import svgFigma  from "../../imports/svg-1vg08dliev";
import svgPopup  from "../../imports/svg-wibidt795v";
import imgProgressRoot from "figma:asset/010ae10dcd9db562072cdc157b19ca2406d1fb36.png";
import type { Lesson } from "./roadmap-types";
import { NODE_W, NODE_H } from "./roadmap-layout";

// ─── Popup dimensions (from Figma) ───────────────────────────────────────────

const POPUP_W = 410;
const POPUP_H = 318;

// ─── Popup background SVG ────────────────────────────────────────────────────

function PopupBackground() {
  return (
    <div className="absolute" style={{ inset: "0.39% 0 0 0" }}>
      <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox={`0 0 ${POPUP_W} 316.765`}>
        <defs>
          <filter
            colorInterpolationFilters="sRGB"
            filterUnits="userSpaceOnUse"
            height="324.765"
            id="filter_popup_bg"
            width={POPUP_W + 8}
            x="-4"
            y="-4"
          >
            <feFlood floodOpacity="0" result="BackgroundImageFix" />
            <feBlend in="SourceGraphic" in2="BackgroundImageFix" mode="normal" result="shape" />
            <feColorMatrix in="SourceAlpha" result="hardAlpha" type="matrix" values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 127 0" />
            <feOffset dy="4" />
            <feGaussianBlur stdDeviation="2" />
            <feComposite in2="hardAlpha" k2="-1" k3="1" operator="arithmetic" />
            <feColorMatrix type="matrix" values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0.25 0" />
            <feBlend in2="shape" mode="normal" result="e1" />
            <feColorMatrix in="SourceAlpha" result="hardAlpha" type="matrix" values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 127 0" />
            <feOffset dy="-5" />
            <feGaussianBlur stdDeviation="2" />
            <feComposite in2="hardAlpha" k2="-1" k3="1" operator="arithmetic" />
            <feColorMatrix type="matrix" values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0.25 0" />
            <feBlend in2="e1" mode="normal" result="e2" />
            <feColorMatrix in="SourceAlpha" result="hardAlpha" type="matrix" values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 127 0" />
            <feOffset dx="4" />
            <feGaussianBlur stdDeviation="2" />
            <feComposite in2="hardAlpha" k2="-1" k3="1" operator="arithmetic" />
            <feColorMatrix type="matrix" values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0.25 0" />
            <feBlend in2="e2" mode="normal" result="e3" />
            <feColorMatrix in="SourceAlpha" result="hardAlpha" type="matrix" values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 127 0" />
            <feOffset dx="-4" />
            <feGaussianBlur stdDeviation="2" />
            <feComposite in2="hardAlpha" k2="-1" k3="1" operator="arithmetic" />
            <feColorMatrix type="matrix" values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0.25 0" />
            <feBlend in2="e3" mode="normal" result="e4" />
          </filter>
          <linearGradient gradientUnits="userSpaceOnUse" id="paint_popup_bg" x1="84.36" x2="311.03" y1="35.25" y2="336.31">
            <stop stopColor="#C0C3D0" />
            <stop offset="0.168" stopColor="#CEC4BB" />
            <stop offset="1" stopColor="#9699A5" />
          </linearGradient>
        </defs>
        <g filter="url(#filter_popup_bg)">
          <path d={svgPopup.p19655f00} fill="url(#paint_popup_bg)" />
        </g>
      </svg>
    </div>
  );
}

// ─── LessonPopup ─────────────────────────────────────────────────────────────

interface LessonPopupProps {
  lesson: Lesson;
  /** Ref to the node element — used to compute portal position */
  anchorRef: React.RefObject<HTMLDivElement | null>;
  onClose: () => void;
}

export function LessonPopup({ lesson, anchorRef, onClose }: LessonPopupProps) {
  const navigate = useNavigate();
  const { getLessonProgress } = useUser();
  const popupRef = useRef<HTMLDivElement>(null);
  const [pos, setPos] = useState<{ top: number; left: number; scale: number } | null>(null);
  // Fade-in state: starts false, goes true after first paint
  const [visible, setVisible] = useState(false);

  const isLocked   = lesson.status === "locked";
  const isCompleted = lesson.status === "completed";
  const totalQ     = lesson.totalQuestions > 0 ? lesson.totalQuestions : 5;

  const progressKey = lesson.quizId || lesson.lessonId;
  const lessonProgress = getLessonProgress(progressKey);
  const correctCount = isLocked ? 0 : (lessonProgress.correctAnswers ?? 0);
  const pct = isLocked ? 0 : Math.min((correctCount / totalQ) * 100, 100);

  const theoryPath = lesson.lessonId === "contrast-lesson" ? "/contrast" : "/theory";
  const isHomework = lesson.totalQuestions === 0;

  // Use useLayoutEffect so position is computed before the browser paints —
  // avoids the 1-frame blank state that caused visible jumps when switching nodes.
  useLayoutEffect(() => {
    function compute() {
      if (!anchorRef.current) return;
      const rect = anchorRef.current.getBoundingClientRect();
      const vw = window.innerWidth;
      const scale = Math.min(1, (vw - 16) / POPUP_W);
      const scaledW = POPUP_W * scale;
      const rawLeft = rect.left + window.scrollX + Math.round(NODE_W / 2 - POPUP_W / 2);
      const minLeft = window.scrollX + 8;
      const maxLeft = window.scrollX + vw - scaledW - 8;
      const clampedLeft = Math.max(minLeft, Math.min(rawLeft, maxLeft));
      setPos({
        top:  rect.top + window.scrollY + NODE_H + 15,
        left: clampedLeft,
        scale,
      });
    }
    compute();
    window.addEventListener("scroll", compute, true);
    window.addEventListener("resize", compute);
    return () => {
      window.removeEventListener("scroll", compute, true);
      window.removeEventListener("resize", compute);
    };
  }, [anchorRef]);

  // Trigger fade-in on the frame after position is known
  useEffect(() => {
    if (pos) requestAnimationFrame(() => setVisible(true));
  }, [pos !== null]); // eslint-disable-line react-hooks/exhaustive-deps

  // Close on outside click — but NOT when clicking a lesson node (let node's onClick handle toggle)
  useEffect(() => {
    const handler = (e: MouseEvent) => {
      const target = e.target as Element | null;
      if (!target) return;
      // If the click is on a roadmap node, let the node's onClick handle popup toggle
      if (target.closest('[data-roadmap-node]')) return;
      if (popupRef.current && !popupRef.current.contains(target)) {
        onClose();
      }
    };
    document.addEventListener("mousedown", handler);
    return () => document.removeEventListener("mousedown", handler);
  }, [onClose]);

  const handleQuiz = () => {
    try {
      const ctx = new AudioContext();
      const o = ctx.createOscillator();
      o.type = "sine";
      o.frequency.setValueAtTime(660, ctx.currentTime);
      o.frequency.exponentialRampToValueAtTime(880, ctx.currentTime + 0.08);
      const g = ctx.createGain();
      g.gain.setValueAtTime(0.12, ctx.currentTime);
      g.gain.exponentialRampToValueAtTime(0.001, ctx.currentTime + 0.08);
      o.connect(g); g.connect(ctx.destination);
      o.start(); o.stop(ctx.currentTime + 0.08);
    } catch (_) {}
    // Pass both lessonId and quizId so LessonQuizPage can load the correct quiz
    // Use search params as backup in case location.state is lost
    const targetQuizId = lesson.quizId || lesson.lessonId;
    navigate(`/lesson-quiz?quizId=${encodeURIComponent(targetQuizId)}&lessonId=${encodeURIComponent(lesson.lessonId)}`, { state: { lessonId: lesson.lessonId, quizId: targetQuizId } });
  };

  if (!pos) return null;

  return ReactDOM.createPortal(
    <div
      ref={popupRef}
      className="relative"
      style={{
        position:        "absolute",
        top:             pos.top,
        left:            pos.left,
        width:           POPUP_W,
        height:          POPUP_H,
        zIndex:          200,
        // CSS transition instead of keyframe — re-triggers on each mount, even during rapid taps
        opacity:         visible ? 1 : 0,
        transform:       `${pos.scale < 1 ? `scale(${pos.scale})` : ""} translateY(${visible ? 0 : -8}px)`.trim(),
        transition:      "opacity 0.18s ease-out, transform 0.18s ease-out",
        transformOrigin: "top left",
        willChange:      "opacity, transform",
      }}
    >
      <PopupBackground />

      {/* Content */}
      <div className="absolute flex flex-col gap-[16px] items-start pb-[20px]" style={{ left: 23, top: 43, width: 360, minHeight: 140 }}>
        {/* Title + Description */}
        <div className="flex flex-col gap-[8px] items-start w-full">
          {/* Icon + Title + Description */}
          <div className="flex gap-[15px] items-start w-full">
            {/* Icon */}
            <div className="h-[55px] shrink-0 w-[56px] relative">
              <svg className="absolute block" fill="none" style={{ inset: 0, width: "100%", height: "100%" }} viewBox="0 0 61.13 57.14">
                <rect width="56" height="55" rx="4" fill="none" />
              </svg>
              <div className="absolute inset-[8%] flex items-center justify-center">
                <svg className="block" width="25" height="25" fill="none" viewBox="0 0 25 25">
                  <path d={svgFigma.p1868b300} stroke="#272F32" strokeLinecap="round" strokeWidth="3" transform="scale(1.04) translate(0, 0)" />
                </svg>
              </div>
            </div>
            {/* Text */}
            <div className="flex flex-1 flex-col gap-[15px] items-start min-w-0">
              <p className="font-['Roboto_Condensed:Medium',sans-serif] font-medium leading-[27.5px] text-[26px] text-[#232a2d] overflow-hidden whitespace-nowrap w-full" style={{ textOverflow: "ellipsis" }}>
                {lesson.title}
              </p>
              <p className="font-['Roboto_Condensed:Medium',sans-serif] font-medium leading-[20px] text-[18px] text-[#232a2d] w-full line-clamp-2 overflow-hidden" style={{ textOverflow: "ellipsis" }}>
                {lesson.description}
              </p>
            </div>
          </div>

          {/* Progress bar */}
          <div className="flex gap-[10px] items-center w-full">
            <div className="flex-1 py-[10px]">
              <div className="flex flex-col items-start w-full">
                <div className="flex flex-col h-[13px] items-start overflow-clip relative rounded-full w-full">
                  <img
                    alt=""
                    className="absolute inset-0 max-w-none object-cover pointer-events-none rounded-full size-full"
                    src={imgProgressRoot}
                  />
                  <div
                    className="h-[13px] rounded-full shrink-0 relative"
                    style={{
                      width: `${Math.max(pct, 5)}%`,
                      backgroundImage: "linear-gradient(173.584deg, rgb(66, 78, 83) 54.135%, rgb(44, 53, 56) 85.747%)",
                    }}
                  />
                </div>
              </div>
            </div>
            <p className="font-['Roboto_Condensed:Medium',sans-serif] font-medium leading-[20px] text-[#343e42] text-[16px] whitespace-nowrap shrink-0">
              {Math.round(pct)}%
            </p>
          </div>

          {/* Info row */}
          <div className="flex items-center justify-between w-full h-[20px] mt-[20px]">
            <div className="flex gap-[21px] items-center">
              <div className="flex gap-[5px] items-center">
                <span className="font-['Roboto_Condensed:Medium',sans-serif] font-medium leading-[20px] text-[#232a2d] text-[16px] whitespace-nowrap">
                  {lesson.status === "completed" ? "Завершён" : lesson.status === "current" ? "В процессе" : "Новичек"}
                </span>
              </div>
              <div className="flex gap-[5px] items-center">
                <span className="font-['Roboto_Condensed:Medium',sans-serif] font-medium leading-[20px] text-[#232a2d] text-[16px] whitespace-nowrap">
                  Квизы
                </span>
              </div>
            </div>
            <div className="flex gap-[5px] items-center justify-center">
              <svg className="shrink-0" width="14" height="14" fill="none" viewBox="0 0 12 14">
                <path d="M6.5 0L0 7.78H5.07L4.5 14L12 5.22H6.43L6.5 0Z" fill="#232A2D" />
              </svg>
              <span className="font-['Roboto_Condensed:Medium',sans-serif] font-medium leading-[20px] text-[#232a2d] text-[16px] whitespace-nowrap">
                +{lesson.xpReward || 1250} XP
              </span>
            </div>
          </div>
        </div>

        {/* Buttons */}
        <div className="flex gap-[17px] items-start w-full mt-[4px] pb-[20px]">
          {isHomework ? (
            isCompleted ? (
              <div className="bg-[#2a7d4f] h-[60px] rounded-[15px] flex items-center justify-center px-[17px] w-full cursor-default">
                <p className="font-['Roboto_Condensed:Medium',sans-serif] font-medium leading-[27.5px] text-[#f4f5fc] text-[28px]">
                  Отправлено ✓
                </p>
              </div>
            ) : (
              <button
                onClick={() => navigate("/homework", { state: { homeworkId: lesson.lessonId } })}
                className="group h-[60px] rounded-[15px] flex items-center justify-center px-[17px] cursor-pointer select-none relative w-full hover:translate-y-[3px] active:translate-y-[5px] transition-all duration-75 bg-[#343e42]"
              >
                <div
                  aria-hidden="true"
                  className="absolute border border-solid inset-0 pointer-events-none rounded-[15px] transition-shadow duration-75 border-[#57646a] shadow-[0px_5px_0px_0px_black] group-hover:shadow-[0px_2px_0px_0px_black] group-active:shadow-none"
                />
                <p className="font-['Roboto_Condensed:Medium',sans-serif] font-medium leading-[27.5px] text-[#f4f5fc] text-[28px] whitespace-nowrap relative">
                  Задание
                </p>
              </button>
            )
          ) : (
            <>
              {/* Quiz button — active for both current and completed lessons */}
              <button
                onClick={handleQuiz}
                className="group h-[60px] rounded-[15px] flex items-center justify-center px-[17px] cursor-pointer select-none relative w-[184px] shrink-0 hover:translate-y-[3px] active:translate-y-[5px] transition-all duration-75 bg-[#343e42]"
              >
                <div
                  aria-hidden="true"
                  className="absolute border border-solid inset-0 pointer-events-none rounded-[15px] transition-shadow duration-75 border-[#57646a] shadow-[0px_5px_0px_0px_black] group-hover:shadow-[0px_2px_0px_0px_black] group-active:shadow-none"
                />
                <p className="font-['Roboto_Condensed:Medium',sans-serif] font-medium leading-[27.5px] text-[#f4f5fc] text-[26px] whitespace-nowrap relative">
                  {pct >= 100 ? "Повторить" : pct > 0 ? "Продолжить" : "Квиз"}
                </p>
              </button>
              {/* Theory button */}
              <button
                onClick={() => navigate(`${theoryPath}?lessonId=${encodeURIComponent(lesson.lessonId)}`, { state: { lessonId: lesson.lessonId } })}
                className="group bg-[#f7f8fc] h-[60px] rounded-[15px] flex items-center justify-center px-[16px] cursor-pointer select-none flex-1 hover:translate-y-[3px] active:translate-y-[5px] transition-all duration-75 relative"
              >
                <div
                  aria-hidden="true"
                  className="absolute inset-0 pointer-events-none rounded-[15px] shadow-[0px_5px_0px_0px_#d2d4df] group-hover:shadow-[0px_2px_0px_0px_#d2d4df] group-active:shadow-none transition-shadow duration-75"
                />
                <p className="font-['Roboto_Condensed:Medium',sans-serif] font-medium leading-[27.5px] text-[#323c41] text-[26px] whitespace-nowrap relative">
                  Теория
                </p>
              </button>
            </>
          )}
        </div>
      </div>

      {/* Animation keyframe — kept for any legacy callers */}
      <style>{`
        @keyframes popupFadeIn {
          from { opacity: 0; transform: translateY(-8px); }
          to   { opacity: 1; transform: translateY(0); }
        }
      `}</style>
    </div>,
    document.body
  );
}