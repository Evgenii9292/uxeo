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
  const bgMap: Record<CardState, string> = {
    idle:      "linear-gradient(134.17deg, rgb(44,53,56) 2.42%, rgb(56,67,72) 98.53%, rgb(44,53,56) 116.25%)",
    selected:  "linear-gradient(134.17deg, rgb(55,66,70) 2.42%, rgb(56,67,72) 98.53%, rgb(44,53,56) 116.25%)",
    correct:   "linear-gradient(134.17deg, rgba(58,81,67,0.5) 2.42%, rgba(56,72,62,0.5) 98.53%, rgba(45,56,44,0.5) 116.25%)",
    incorrect: "linear-gradient(134.17deg, rgba(92,53,53,0.5) 2.42%, rgba(72,58,56,0.5) 98.53%, rgba(56,49,44,0.5) 116.25%)",
    dimmed:    "linear-gradient(134.17deg, rgba(44,53,56,0.5) 2.42%, rgba(56,67,72,0.5) 98.53%, rgba(44,53,56,0.5) 116.25%)",
  };

  const borderMap: Record<CardState, string | null> = {
    idle: null, selected: "#636670", correct: "rgba(0, 147, 47, 0.6)", incorrect: "#9f3500", dimmed: null,
  };

  const border = borderMap[state];
  const isClickable = state === "idle" || state === "selected";

  return (
    <div
      onClick={isClickable ? onClick : undefined}
      className={`relative overflow-hidden rounded-[24px] shrink-0 w-[460px] h-[430px] transition-all duration-200 ${isClickable ? "cursor-pointer" : "cursor-default"}`}
      style={{ backgroundImage: bgMap[state] }}
    >
      {border && (
        <div
          aria-hidden="true"
          className="absolute border-[3px] border-solid inset-[-3px] pointer-events-none rounded-[27px]"
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
