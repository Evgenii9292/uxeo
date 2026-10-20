import { QUIZ_CARD_BACKGROUNDS, QUIZ_CARD_BORDERS } from "../../pages/quiz/quizCardStyles";
/**
 * Card mockups and QuizCard wrapper for quiz pages.
 * CardAMockup — high contrast, dark button (good/correct)
 * CardBMockup — low contrast, gray button (bad/incorrect)
 * QuizCard    — outer wrapper with state-based gradient & border
 */

import React from "react";

// ── Card A: dark button, high contrast (correct) ───────────────────────────────

export function CardAMockup() {
  return (
    <img
      src="/card-mockup-a.svg"
      alt="Карточка А"
      width={404}
      height={367}
      className="block w-full h-full object-contain"
      draggable={false}
    />
  );
}

// ── Card B: gray disabled button, low contrast (incorrect) ─────────────────────

export function CardBMockup() {
  return (
    <img
      src="/card-mockup-b.svg"
      alt="Карточка Б"
      width={404}
      height={367}
      className="block w-full h-full object-contain"
      draggable={false}
    />
  );
}

// ── QuizCard wrapper ───────────────────────────────────────────────────────────

export type CardState = "idle" | "selected" | "correct" | "incorrect" | "dimmed";

export function QuizCard({
  state,
  onClick,
  children,
  className = "",
  style,
}: {
  state: CardState;
  onClick?: () => void;
  children: React.ReactNode;
  className?: string;
  style?: React.CSSProperties;
}) {
  const bgMap = QUIZ_CARD_BACKGROUNDS;

  const borderMap = QUIZ_CARD_BORDERS;

  const border = borderMap[state];
  const isClickable = state === "idle" || state === "selected";

  return (
    <div
      onClick={isClickable ? onClick : undefined}
      className={`relative flex items-center justify-center rounded-[24px] shrink-0 overflow-hidden transition-all duration-200 ${isClickable ? "cursor-pointer active:scale-[0.98]" : "cursor-default"} ${className}`}
      style={{ backgroundImage: bgMap[state], ...style }}
    >
      {border && (
        <div
          aria-hidden="true"
          className="absolute border-[3px] border-solid inset-0 pointer-events-none rounded-[24px] z-10"
          style={{ borderColor: border }}
        />
      )}
      <div className="absolute inset-0 pointer-events-none rounded-[inherit] shadow-[inset_-4px_0px_4px_0px_#384348,inset_4px_0px_4px_0px_#384348,inset_0px_-5px_4px_0px_rgba(0,0,0,0.25),inset_0px_4px_4px_0px_rgba(0,0,0,0.25)]" />
      {children}
    </div>
  );
}