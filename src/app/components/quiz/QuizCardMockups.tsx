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
  const bgMap: Record<CardState, string> = {
    idle:      "linear-gradient(134.17deg, rgb(30,37,41) 2.42%, rgb(38,46,50) 98.53%, rgb(30,37,41) 116.25%)",
    selected:  "linear-gradient(134.17deg, rgb(42,51,55) 2.42%, rgb(44,53,56) 98.53%, rgb(30,37,41) 116.25%)",
    correct:   "linear-gradient(134.17deg, rgba(58,81,67,0.5) 2.42%, rgba(56,72,62,0.5) 98.53%, rgba(45,56,44,0.5) 116.25%)",
    incorrect: "linear-gradient(134.17deg, rgba(92,53,53,0.5) 2.42%, rgba(72,58,56,0.5) 98.53%, rgba(56,49,44,0.5) 116.25%)",
    dimmed:    "linear-gradient(134.17deg, rgba(30,37,41,0.5) 2.42%, rgba(38,46,50,0.5) 98.53%, rgba(30,37,41,0.5) 116.25%)",
  };

  const borderMap: Record<CardState, string | null> = {
    idle: null, selected: "#636670", correct: "rgba(0, 147, 47, 0.6)", incorrect: "#9f3500", dimmed: null,
  };

  const border = borderMap[state];
  const isClickable = state === "idle" || state === "selected";

  return (
    <div
      onClick={isClickable ? onClick : undefined}
      className={`relative flex items-center justify-center rounded-[24px] shrink-0 overflow-hidden transition-all duration-200 ${isClickable ? "cursor-pointer" : "cursor-default"} ${className}`}
      style={{ backgroundImage: bgMap[state], ...style }}
    >
      {border && (
        <div
          aria-hidden="true"
          className="absolute border-[3px] border-solid inset-[-3px] pointer-events-none rounded-[27px] z-10"
          style={{ borderColor: border }}
        />
      )}
      <div className="absolute inset-0 pointer-events-none rounded-[inherit] shadow-[inset_-4px_0px_4px_0px_#384348,inset_4px_0px_4px_0px_#384348,inset_0px_-5px_4px_0px_rgba(0,0,0,0.25),inset_0px_4px_4px_0px_rgba(0,0,0,0.25)]" />
      {children}
    </div>
  );
}