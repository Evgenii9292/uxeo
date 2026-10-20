import { QUIZ_CARD_BACKGROUNDS, QUIZ_CARD_BORDERS } from "./quizCardStyles";
/**
 * Card mockups and QuizCard wrapper for the onboarding QuizPage.
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

type CardState = "idle" | "selected" | "correct" | "incorrect" | "dimmed";

export function QuizCard({
  state,
  onClick,
  children,
}: {
  state: CardState;
  onClick?: () => void;
  children: React.ReactNode;
}) {
  const bgMap = QUIZ_CARD_BACKGROUNDS;

  const borderMap = QUIZ_CARD_BORDERS;

  const border = borderMap[state];
  const isClickable = state === "idle" || state === "selected";

  return (
    <div
      onClick={isClickable ? onClick : undefined}
      className={`relative overflow-hidden rounded-[24px] shrink-0 w-[460px] h-[430px] transition-all duration-200 ${isClickable ? "cursor-pointer active:scale-[0.98]" : "cursor-default"}`}
      style={{ backgroundImage: bgMap[state] }}
    >
      {border && (
        <div
          aria-hidden="true"
          className="absolute z-10 border-[3px] border-solid inset-0 pointer-events-none rounded-[24px]"
          style={{ borderColor: border }}
        />
      )}
      <div className="absolute inset-0 pointer-events-none rounded-[inherit] shadow-[inset_-4px_0px_4px_0px_#384348,inset_4px_0px_4px_0px_#384348,inset_0px_-5px_4px_0px_rgba(0,0,0,0.25),inset_0px_4px_4px_0px_rgba(0,0,0,0.25)]" />
      <div className="w-full h-full p-[28px]">
        {children}
      </div>
    </div>
  );
}
