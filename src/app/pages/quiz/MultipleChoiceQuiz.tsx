/** MultipleChoiceQuiz — multiple-select question type */

import React, { useState } from "react";
import { QuizLeftBlock } from "./QuizLeftBlock";
import { CorrectFeedback, IncorrectFeedback } from "./QuizFeedback";
import { ContinueCorrect, ContinueActive } from "./ContinueButtons";
import { ScaledPreview } from "../../components/quiz/ScaledPreview";
import { useWindowWidth } from "../../hooks/useWindowWidth";
import { FlagReportButton } from "./FlagReportButton";

// Natural Figma card dimensions (same as single cards in QuizLeftBlock)
const FIGMA_W = 186;
const FIGMA_H = 231;

type AnswerPhase = "selecting" | "checked";
type OptionState = "idle" | "selected" | "correct" | "incorrect" | "missed" | "dimmed";

// ── Helpers ────────────────────────────────────────────────────────────────────

function playSelectSound() {
  try {
    const ctx = new AudioContext();
    const o = ctx.createOscillator();
    o.type = "sine";
    o.frequency.setValueAtTime(520, ctx.currentTime);
    o.frequency.exponentialRampToValueAtTime(340, ctx.currentTime + 0.05);
    const g = ctx.createGain();
    g.gain.setValueAtTime(0.1, ctx.currentTime);
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
      g.gain.setValueAtTime(0.15, ctx.currentTime);
      g.gain.exponentialRampToValueAtTime(0.001, ctx.currentTime + 0.3);
    } else {
      o.frequency.setValueAtTime(280, ctx.currentTime);
      o.frequency.exponentialRampToValueAtTime(220, ctx.currentTime + 0.15);
      g.gain.setValueAtTime(0.08, ctx.currentTime);
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
    selected:  "", // solid colour via className
    correct:   "linear-gradient(172.482deg, rgba(58,81,67,0.5) 2.4187%, rgba(56,72,62,0.5) 98.527%, rgba(45,56,44,0.5) 116.25%)",
    incorrect: "linear-gradient(172.482deg, rgba(92,53,53,0.5) 2.4187%, rgba(72,58,56,0.5) 98.527%, rgba(56,49,44,0.5) 116.25%)",
    missed:    "linear-gradient(172.482deg, rgba(58,81,67,0.3) 2.4187%, rgba(56,72,62,0.3) 98.527%, rgba(45,56,44,0.3) 116.25%)",
    dimmed:    "linear-gradient(172.482deg, rgba(44,53,56,0.5) 2.4187%, rgba(56,67,72,0.5) 98.527%, rgba(44,53,56,0.5) 116.25%)",
  };
  const borderColor: Record<OptionState, string | null> = {
    idle:      null,
    selected:  "rgba(80,81,88,0.8)",
    correct:   "rgba(0, 147, 47, 0.6)",
    incorrect: "#9f3500",
    missed:    "#006a22",
    dimmed:    null,
  };
  const checkboxBg: Record<OptionState, string | null> = {
    idle:      null,
    selected:  "#ff6b21",
    correct:   "rgba(0, 147, 47, 0.6)",
    incorrect: "#9f3500",
    missed:    null,
    dimmed:    null,
  };
  const showCheckInBox = state === "correct";
  const isClickable = state === "idle" || state === "selected";

  return (
    <div
      onClick={isClickable ? onClick : undefined}
      className={`relative rounded-[15px] shrink-0 w-full flex items-center transition-all duration-200 ${state === "selected" ? "bg-[#354349]" : ""} ${isClickable ? "cursor-pointer" : "cursor-default"}`}
      style={{
        height: fixedHeight,
        ...(state !== "selected" ? { backgroundImage: bgMap[state] } : {}),
      }}
    >
      {state === "selected" && (
        <div aria-hidden="true" className="absolute border-[3px] border-[#505158] border-solid inset-[-3px] pointer-events-none rounded-[18px]" />
      )}
      {borderColor[state] && state !== "selected" && (
        <div
          aria-hidden="true"
          className="absolute border-[3px] border-solid inset-[-3px] pointer-events-none rounded-[18px]"
          style={{ borderColor: borderColor[state]! }}
        />
      )}

      {/* Text + checkbox — centered vertically (height is fixed) */}
      <div className="flex items-center justify-between w-full px-[16px] gap-[12px]">
        <p className="font-['Roboto_Condensed:Regular',sans-serif] font-normal text-[16px] leading-[1.2] text-[#f4f5fc] flex-1 min-w-0">
          {text}
        </p>
        {/* Checkbox square */}
        <div className="relative rounded-[5px] shrink-0 flex-none size-[20px]">
          {checkboxBg[state] && (
            <div className="absolute inset-0 rounded-[5px]" style={{ backgroundColor: checkboxBg[state]! }} />
          )}
          <div aria-hidden="true" className="absolute border-[3px] border-[#d8dbe8] border-solid inset-[-3px] pointer-events-none rounded-[8px]" />
          {showCheckInBox && (
            <svg className="absolute inset-0 m-auto" width="13" height="10" viewBox="0 0 13 10" fill="none">
              <path d="M1.5 5L5.5 9L11.5 1" stroke="white" strokeWidth="2.2" strokeLinecap="round" strokeLinejoin="round" />
            </svg>
          )}
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
        <p className="font-['Roboto_Condensed:Bold',sans-serif] font-bold leading-[22.955px] relative shrink-0 text-[#465256] text-[22px] whitespace-nowrap">Проверить</p>
      </div>
    );
  }
  return (
    <button
      onClick={onClick}
      className={`group relative flex h-[56px] items-center justify-center px-[25.835px] py-[0.835px] rounded-[15px] shrink-0 bg-[#ff5d39] cursor-pointer select-none outline-none transition-transform duration-75 hover:translate-y-[3px] active:translate-y-[5px] ${fullWidth ? "w-full" : ""}`}
    >
      <div aria-hidden="true" className="absolute border-[#ff390d] border-[0.835px] border-solid inset-0 pointer-events-none rounded-[15px] transition-[box-shadow] duration-75 shadow-[0px_5px_0px_0px_#c24226] group-hover:shadow-[0px_2px_0px_0px_#c24226] group-active:shadow-none" />
      <p className="font-['Roboto_Condensed:Bold',sans-serif] font-bold leading-[22.955px] text-[#f4f5fc] text-[22px] whitespace-nowrap">Проверить</p>
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

    // FIXED sizes per spec:
    //   large  (440×954): image card 215px, options 60px
    //   small  (388×858): image card 185px, options 50px
    const cardH   = isLargePhone ? 215 : 185;
    const optionH = isLargePhone ? 60  : 50;
    // Inner content height: large=190px, small=160px → paddingY = (cardH - innerH) / 2
    const innerH  = isLargePhone ? 190 : 160;
    const paddingY = Math.round((cardH - innerH) / 2);

    return (
      <>
        {/* ── Content block ── */}
        <div className="w-full px-[16px] flex flex-col" style={{ gap: 10 }}>

          {/* Question title — 10px below via parent pt-[10px] */}
          <p className="font-['Roboto_Condensed:Bold',sans-serif] font-bold leading-[1.25] text-[#f4f5fc] text-[22px] text-center w-full">
            {question}
          </p>

          {/* Image card — FIXED height */}
          <div
            className="relative rounded-[15px] overflow-hidden flex-shrink-0 w-full"
            style={{
              height: cardH,
              maxHeight: isLargePhone ? "calc(100dvh - 608px)" : "calc(100dvh - 568px)",
              background: "linear-gradient(172deg, rgb(44,53,56) 2%, rgb(56,67,72) 99%)",
            }}
          >
            {leftContent ? (
              <ScaledPreview
                naturalWidth={FIGMA_W}
                naturalHeight={FIGMA_H}
                paddingY={paddingY}
                maxScale={1}
              >
                {leftContent}
              </ScaledPreview>
            ) : (
              /* Placeholder if no image */
              <div className="w-full h-full flex items-center justify-center">
                <div className="bg-[#3a4649] rounded-[12px]" style={{ width: "80%", height: innerH }} />
              </div>
            )}
            <div className="absolute inset-0 pointer-events-none rounded-[inherit] shadow-[inset_-4px_0px_4px_0px_#384348,inset_4px_0px_4px_0px_#384348,inset_0px_-5px_4px_0px_rgba(0,0,0,0.25),inset_0px_4px_4px_0px_rgba(0,0,0,0.25)]" />
          </div>

          {/* Answer options — FIXED height, gap 10px */}
          <div className="w-full flex flex-col" style={{ gap: 10 }}>
            {options.map((option) => (
              <MultiSelectCard
                key={option.label}
                text={option.text}
                state={getOptionState(option.label)}
                onClick={() => toggleOption(option.label)}
                fixedHeight={optionH}
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
                : <IncorrectFeedback correctAnswer={correctAnswers.join(", ")} explanation={explanation} isReplay={isReplay} />
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
        <p className="font-['Roboto_Condensed:Bold',sans-serif] font-bold leading-[35px] text-[#f4f5fc] text-[32px] text-center min-w-full">
          {question}
        </p>
      </div>

      {/* Main content row */}
      <div className="content-stretch flex gap-[18px] items-center" style={{ width: quizW }}>
        <QuizLeftBlock
          type="static"
          content={leftContent}
          singleMaxScale={leftMaxScale}
          singleCardMinHeight={leftCardMinHeight}
        />
        <div className="content-stretch flex flex-col gap-[19px] items-start relative shrink-0 w-[528px]">
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
