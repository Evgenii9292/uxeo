/**
 * Card mockups and QuizCard wrapper for the onboarding QuizPage.
 */

import React from "react";

// ── Icon helpers ───────────────────────────────────────────────────────────────

function SearchIcon({ className = "" }: { className?: string }) {
  return (
    <svg className={`size-[24px] ${className}`} fill="none" viewBox="0 0 24 24">
      <g clipPath="url(#clip_search_qp)">
        <path d="M21 21L15 15M17 11A6 6 0 1 1 5 11a6 6 0 0 1 12 0Z" stroke="#878FA6" strokeOpacity="0.6" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" />
      </g>
      <defs>
        <clipPath id="clip_search_qp"><rect fill="white" height="24" width="24" /></clipPath>
      </defs>
    </svg>
  );
}

function FilterIcon({ color = "#364146" }: { color?: string }) {
  return (
    <svg className="size-[24px]" fill="none" viewBox="0 0 24 24">
      <path d="M4 6h16M7 12h10M10 18h4" stroke={color} strokeWidth="2" strokeLinecap="round" />
    </svg>
  );
}

// ── Card A: dark button, high contrast (correct) ───────────────────────────────

export function CardAMockup() {
  return (
    <div className="grid-cols-[max-content] grid-rows-[max-content] inline-grid leading-[0] place-items-start relative shrink-0">
      <div className="col-1 row-1 bg-[#f7f8fc] border border-[#f3f7fa] border-solid h-[415px] ml-0 mt-0 rounded-[15px] w-[333px]" />
      <div className="col-1 row-1 bg-[#e1e3eb] h-[170px] ml-[22px] mt-[100px] rounded-[15px] w-[285px]" />
      <p className="col-1 row-1 font-['RF_Dewi_Expanded:Semibold',sans-serif] leading-[normal] ml-[24px] mt-[291.73px] relative text-[#010552] text-[18px] text-center whitespace-nowrap">Продукт 1</p>
      <p className="col-1 row-1 font-['RF_Dewi_Expanded:Semibold',sans-serif] leading-[normal] ml-[201px] mt-[290px] relative text-[#010552] text-[18px] text-center whitespace-nowrap">145 ₽ / кг</p>
      <div className="col-1 row-1 bg-[#364146] h-[54px] ml-[22px] mt-[338px] pb-[20px] pt-[17px] px-[51px] rounded-[15px] w-[285px] flex items-center justify-center">
        <p className="font-['RF_Dewi_Expanded:Semibold',sans-serif] leading-[normal] text-[#f3f7fa] text-[16.177px] text-center whitespace-nowrap">В корзину</p>
      </div>
      <div className="col-1 row-1 ml-[22px] mt-[18px] grid-cols-[max-content] grid-rows-[max-content] inline-grid place-items-start">
        <div className="col-1 row-1 bg-[#e1e3eb] h-[64px] rounded-[15px] w-[285px]" />
        <div className="col-1 row-1 ml-[17px] mt-[20px]"><SearchIcon /></div>
        <p className="col-1 row-1 font-['RF_Dewi_Expanded:Semibold',sans-serif] leading-[normal] ml-[57px] mt-[23.5px] text-[14px] text-[rgba(135,143,166,0.6)] whitespace-nowrap">Найти продукт</p>
        <div className="col-1 row-1 ml-[248px] mt-[20px]"><FilterIcon /></div>
      </div>
    </div>
  );
}

// ── Card B: gray disabled button, low contrast (incorrect) ─────────────────────

export function CardBMockup() {
  return (
    <div className="grid-cols-[max-content] grid-rows-[max-content] inline-grid leading-[0] place-items-start relative shrink-0">
      <div className="col-1 row-1 bg-[#f7f8fc] border border-[#f3f7fa] border-solid h-[415px] ml-0 mt-0 rounded-[15px] w-[333px]" />
      <div className="col-1 row-1 bg-[#2e373b] h-[170px] ml-[22px] mt-[100px] rounded-[15px] w-[285px]" />
      <p className="col-1 row-1 font-['RF_Dewi_Expanded:Semibold',sans-serif] leading-[normal] ml-[24px] mt-[291.73px] relative text-[#010552] text-[18px] text-center whitespace-nowrap">Продукт 1</p>
      <p className="col-1 row-1 font-['RF_Dewi_Expanded:Semibold',sans-serif] leading-[normal] ml-[201px] mt-[290px] relative text-[#010552] text-[18px] text-center whitespace-nowrap">145 ₽ / кг</p>
      <div className="col-1 row-1 bg-[#e1e3eb] h-[54px] ml-[22px] mt-[338px] pb-[20px] pt-[17px] px-[51px] rounded-[15px] w-[285px] flex items-center justify-center">
        <p className="font-['RF_Dewi_Expanded:Semibold',sans-serif] leading-[normal] text-[#c6ced2] text-[16.177px] text-center whitespace-nowrap">В корзину</p>
      </div>
      <div className="col-1 row-1 ml-[22px] mt-[18px] grid-cols-[max-content] grid-rows-[max-content] inline-grid place-items-start">
        <div className="col-1 row-1 bg-[#2e373b] h-[64px] rounded-[15px] w-[285px]" />
        <div className="col-1 row-1 ml-[17px] mt-[20px]"><SearchIcon /></div>
        <p className="col-1 row-1 font-['RF_Dewi_Expanded:Semibold',sans-serif] leading-[normal] ml-[57px] mt-[23.5px] text-[14px] text-[rgba(135,143,166,0.6)] whitespace-nowrap">Найти продукт</p>
        <div className="col-1 row-1 ml-[248px] mt-[20px]"><FilterIcon color="#364146" /></div>
      </div>
    </div>
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
      className={`relative flex h-[598px] items-start pb-[86px] pl-[86px] pr-[87px] pt-[97px] rounded-[24px] shrink-0 w-[506px] transition-all duration-200 ${isClickable ? "cursor-pointer" : "cursor-default"}`}
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
      {children}
    </div>
  );
}
