/** MultipleChoiceQuiz — multiple-select question type */

import React, { useState } from "react";
import { CorrectFeedback, IncorrectFeedback } from "./QuizFeedback";
import { ContinueCorrect, ContinueActive } from "./ContinueButtons";
import { useWindowWidth } from "../../hooks/useWindowWidth";
import { FlagReportButton } from "./FlagReportButton";

type AnswerPhase = "selecting" | "checked";
type OptionState = "idle" | "selected" | "correct" | "incorrect" | "missed" | "dimmed";

// ── Helpers ────────────────────────────────────────────────────────────────────

/** Mobile speakers clip at high gain — reduce by 60% on mobile */
function gainFor(base: number) {
  return window.innerWidth < 768 ? base * 0.4 : base;
}

function playSelectSound() {
  try {
    const ctx = new AudioContext();
    const o = ctx.createOscillator();
    o.type = "sine";
    o.frequency.setValueAtTime(520, ctx.currentTime);
    o.frequency.exponentialRampToValueAtTime(340, ctx.currentTime + 0.05);
    const g = ctx.createGain();
    g.gain.setValueAtTime(gainFor(0.1), ctx.currentTime);
    g.gain.exponentialRampToValueAtTime(0.001, ctx.currentTime + 0.05);
    o.connect(g); g.connect(ctx.destination);
    o.start(); o.stop(ctx.currentTime + 0.05);
  } catch (_) {}
}

function playResultSound(correct: boolean) {
  try {
    const ctx = new AudioContext();
    const o = ctx.createOscillator();
    o.type = "sine";
    const g = ctx.createGain();
    if (correct) {
      o.frequency.setValueAtTime(523, ctx.currentTime);
      o.frequency.setValueAtTime(659, ctx.currentTime + 0.1);
      o.frequency.setValueAtTime(784, ctx.currentTime + 0.2);
      g.gain.setValueAtTime(gainFor(0.15), ctx.currentTime);
      g.gain.exponentialRampToValueAtTime(0.001, ctx.currentTime + 0.3);
    } else {
      o.frequency.setValueAtTime(280, ctx.currentTime);
      o.frequency.exponentialRampToValueAtTime(220, ctx.currentTime + 0.15);
      g.gain.setValueAtTime(gainFor(0.08), ctx.currentTime);
      g.gain.exponentialRampToValueAtTime(0.001, ctx.currentTime + 0.15);
    }
    o.connect(g); g.connect(ctx.destination);
    o.start(); o.stop(ctx.currentTime + 0.3);
  } catch (_) {}
}

// ── Option card ────────────────────────────────────────────────────────────────

function MultiSelectCard({
  text,
  state,
  onClick,
  fixedHeight = 80,
}: {
  text: string;
  state: OptionState;
  onClick?: () => void;
  /** Exact pixel height for the card */
  fixedHeight?: number;
}) {
  const bgMap: Record<OptionState, string> = {
    idle:      "linear-gradient(172.482deg, rgb(44, 53, 56) 2.4187%, rgb(56, 67, 72) 98.527%, rgb(44, 53, 56) 116.25%)",
    selected:  "linear-gradient(172.482deg, #354349 2.4187%, #354349 98.527%, #354349 116.25%)",
    correct:   "linear-gradient(172.482deg, rgba(58,81,67,0.5) 2.4187%, rgba(56,72,62,0.5) 98.527%, rgba(45,56,44,0.5) 116.25%)",
    incorrect: "linear-gradient(172.482deg, rgba(92,53,53,0.5) 2.4187%, rgba(72,58,56,0.5) 98.527%, rgba(56,49,44,0.5) 116.25%)",
    missed:    "linear-gradient(172.482deg, rgba(58,81,67,0.3) 2.4187%, rgba(56,72,62,0.3) 98.527%, rgba(45,56,44,0.3) 116.25%)",
    dimmed:    "linear-gradient(172.482deg, rgba(44,53,56,0.5) 2.4187%, rgba(56,67,72,0.5) 98.527%, rgba(44,53,56,0.5) 116.25%)",
  };
  const borderColor: Record<OptionState, string | null> = {
    idle:      null,
    selected:  "rgba(99, 102, 112, 0.5)",
    correct:   "rgba(0, 147, 47, 0.6)",
    incorrect: "rgba(159, 53, 0, 0.4)",
    missed:    "rgba(0, 147, 47, 0.25)",
    dimmed:    null,
  };
  const isClickable = state === "idle" || state === "selected";

  return (
    <div
      onClick={isClickable ? onClick : undefined}
      className={`relative rounded-[15px] shrink-0 w-full flex items-center transition-all duration-200 ${isClickable ? "cursor-pointer" : "cursor-default"}`}
      style={{
        height: fixedHeight,
        backgroundImage: bgMap[state],
      }}
    >
      {borderColor[state] && (
        <div
          aria-hidden="true"
          className="absolute border-[3px] border-solid inset-[-3px] pointer-events-none rounded-[18px]"
          style={{ borderColor: borderColor[state]! }}
        />
      )}

      {/* Text + checkbox — centered vertically (height is fixed) */}
      <div className="flex items-center justify-between w-full px-[20px] gap-[12px]">
        <p className="font-['Roboto_Condensed:Regular',sans-serif] font-normal text-[16px] leading-[1.2] text-[#f4f5fc] flex-1 min-w-0">
          {text}
        </p>
        {/* Checkbox square */}
        <div
          className="relative rounded-[5px] shrink-0 flex-none size-[20px]"
          style={{ backgroundColor: (state === "selected" || state === "correct" || state === "incorrect") ? "#ff5d39" : "transparent" }}
        >
          <div aria-hidden="true" className="absolute border-[3px] border-solid inset-[-3px] pointer-events-none rounded-[8px]" style={{ borderColor: "rgba(216,219,232,0.6)" }} />
        </div>
      </div>
      <div className="absolute inset-0 pointer-events-none rounded-[inherit] shadow-[inset_-4px_0px_4px_0px_#384348]" />
    </div>
  );
}

// ── Проверить button ───────────────────────────────────────────────────────────

function CheckButton({ onClick, disabled, fullWidth }: { onClick: () => void; disabled: boolean; fullWidth?: boolean }) {
  if (disabled) {
    return (
      <div className={`bg-[#333d41] content-stretch flex h-[56px] items-center justify-center px-[25px] relative rounded-[15px] shadow-[0px_5px_0px_0px_#212226] shrink-0 ${fullWidth ? "w-full" : ""}`}>
        <p className="font-['Roboto_Condensed:Medium',sans-serif] font-medium leading-[22.955px] relative shrink-0 text-[#465256] text-[22px] whitespace-nowrap">Проверить</p>
      </div>
    );
  }
  return (
    <button
      onClick={onClick}
      className={`group relative flex h-[56px] items-center justify-center px-[25.835px] py-[0.835px] rounded-[15px] shrink-0 bg-[#ff5d39] cursor-pointer select-none outline-none transition-transform duration-75 hover:translate-y-[3px] active:translate-y-[5px] ${fullWidth ? "w-full" : ""}`}
    >
      <div aria-hidden="true" className="absolute border-[#ff390d] border-[0.835px] border-solid inset-0 pointer-events-none rounded-[15px] transition-[box-shadow] duration-75 shadow-[0px_5px_0px_0px_#c24226] group-hover:shadow-[0px_2px_0px_0px_#c24226] group-active:shadow-none" />
      <p className="font-['Roboto_Condensed:Medium',sans-serif] font-medium leading-[22.955px] text-[#f4f5fc] text-[22px] whitespace-nowrap">Проверить</p>
    </button>
  );
}

// ── Main component ─────────────────────────────────────────────────────────────

export function MultipleChoiceQuiz({
  question,
  subtitle = "Выберите несколько вариантов",
  options,
  correctAnswers,
  explanation,
  onAnswer,
  onContinue,
  earnedXP,
  isReplay,
  leftContent,
  leftMaxScale,
  leftCardMinHeight,
}: {
  question: string;
  subtitle?: string;
  options: { label: string; text: string }[];
  correctAnswers: string[];
  explanation: string;
  onAnswer: (isCorrect: boolean) => void;
  onContinue: () => void;
  earnedXP: number;
  isReplay: boolean;
  leftContent?: React.ReactNode;
  leftMaxScale?: number;
  leftCardMinHeight?: number;
}) {
  const [selected, setSelected] = useState<Set<string>>(new Set());
  const [phase, setPhase] = useState<AnswerPhase>("selecting");
  const [isCorrect, setIsCorrect] = useState(false);
  const vw = useWindowWidth();
  const isMobile = vw < 768;
  const quizW = Math.min(1042, vw - 48);

  const toggleOption = (label: string) => {
    if (phase === "checked") return;
    setSelected((prev) => {
      const next = new Set(prev);
      if (next.has(label)) next.delete(label);
      else next.add(label);
      return next;
    });
    playSelectSound();
  };

  const handleCheck = () => {
    const correct =
      correctAnswers.every((a) => selected.has(a)) &&
      Array.from(selected).every((s) => correctAnswers.includes(s));
    setIsCorrect(correct);
    setPhase("checked");
    onAnswer(correct);
    playResultSound(correct);
  };

  const getOptionState = (label: string): OptionState => {
    if (phase === "selecting") {
      return selected.has(label) ? "selected" : "idle";
    }
    const byUser = selected.has(label);
    const isRight = correctAnswers.includes(label);
    if (byUser && isRight) return "correct";
    if (byUser && !isRight) return "incorrect";
    if (!byUser && isRight) return "missed";
    return "dimmed";
  };

  // ── MOBILE — FIXED pixel layout ─────────────────────────────────────────────
  if (isMobile) {
    // 440×954 = large phone, 388×858 = small phone
    const isLargePhone = vw >= 440;


    return (
      <>
        {/* ── Content block ── */}
        <div className="w-full px-[16px] flex flex-col" style={{ gap: 20 }}>

          {/* Question title — 20px gap to options */}
          <p className="font-['Roboto_Condensed:Medium',sans-serif] font-medium leading-[1.25] text-[#f4f5fc] text-[22px] text-center w-full">
            {question}
          </p>

          {/* Answer options — FIXED height, gap 10px */}
          <div className="w-full flex flex-col" style={{ gap: 10 }}>
            {options.map((option) => (
              <MultiSelectCard
                key={option.label}
                text={option.text}
                state={getOptionState(option.label)}
                onClick={() => toggleOption(option.label)}
                fixedHeight={isLargePhone ? 84 : 70}
              />
            ))}
          </div>
        </div>

        {/* ── Fixed bottom bar — helper text / feedback + button ── */}
        <div
          className="fixed left-0 right-0 z-10 px-[16px] pt-[12px]"
          style={{ bottom: "max(40px, env(safe-area-inset-bottom, 40px))", paddingBottom: 12 }}
        >
          {/* Subtitle (before check) or Feedback (after check) */}
          <div className="mb-[10px]">
            {phase === "checked" ? (
              isCorrect
                ? <CorrectFeedback explanation={explanation} showXp={earnedXP > 0} />
                : <IncorrectFeedback correctAnswer={correctAnswers.join(", ")} explanation={explanation} isReplay={isReplay} hideAnswer />
            ) : (
              <p className="font-['Roboto_Condensed:Regular',sans-serif] font-normal text-[#798589] text-[15px] text-center leading-[1.3]">
                {subtitle}
              </p>
            )}
          </div>

          {/* Button */}
          <div className="flex items-center gap-[20px]">
            <FlagReportButton />
            <div className="flex-1">
              {phase === "selecting"
                ? <CheckButton onClick={handleCheck} disabled={selected.size === 0} fullWidth />
                : isCorrect
                  ? <ContinueCorrect onClick={onContinue} fullWidth />
                  : <ContinueActive onClick={onContinue} fullWidth />
              }
            </div>
          </div>
        </div>
      </>
    );
  }

  // ── DESKTOP ──────────────────────────────────────────────────────────────────
  return (
    <>
      {/* Question header */}
      <div className="px-[100px] flex flex-col items-center gap-[9px]" style={{ width: quizW }}>
        <p className="font-['Roboto_Condensed:Regular',sans-serif] font-normal leading-[20px] text-[#798589] text-[18px] whitespace-nowrap">
          {subtitle}
        </p>
        <p className="font-['Roboto_Condensed:Medium',sans-serif] font-medium leading-[35px] text-[#f4f5fc] text-[32px] text-center min-w-full">
          {question}
        </p>
      </div>

      {/* Main content row */}
      <div className="flex justify-center" style={{ width: quizW }}>
        <div className="content-stretch flex flex-col gap-[10px] items-start w-full max-w-[600px]">
          {options.map((option) => (
            <MultiSelectCard
              key={option.label}
              text={option.text}
              state={getOptionState(option.label)}
              onClick={() => toggleOption(option.label)}
              fixedHeight={80}
            />
          ))}
        </div>
      </div>

      {/* Fixed bottom bar */}
      <div className="fixed bottom-[20px] left-0 right-0 z-10 flex justify-center">
        <div className="flex gap-[32px] items-center mb-[20px]" style={{ width: quizW }}>
          <div className="flex-1 flex items-center">
            {phase === "checked" && (
              isCorrect
                ? <CorrectFeedback explanation={explanation} showXp={earnedXP > 0} />
                : <IncorrectFeedback
                    correctAnswer={correctAnswers.join(", ")}
                    explanation={explanation}
                    isReplay={isReplay}
                    hideAnswer
                  />
            )}
          </div>
          <div className="flex-none flex items-center justify-end gap-[20px]">
            <FlagReportButton />
            {phase === "selecting" ? (
              <CheckButton onClick={handleCheck} disabled={selected.size === 0} />
            ) : isCorrect ? (
              <ContinueCorrect onClick={onContinue} />
            ) : (
              <ContinueActive onClick={onContinue} />
            )}
          </div>
        </div>
      </div>
    </>
  );
}
