/** CompareUIQuiz — pick the better UI out of two options */

import { useState } from "react";
import type { CompareUIOption } from "../../data/quiz-bank";
import { ContinueDisabled, ContinueActive, ContinueCorrect } from "./ContinueButtons";
import { CorrectFeedback, IncorrectFeedback } from "./QuizFeedback";
import { QuizLeftBlock } from "./QuizLeftBlock";
import type { CompareCardState } from "./QuizLeftBlock";
import { useWindowWidth } from "../../hooks/useWindowWidth";
import { ScaledPreview } from "../../components/quiz/ScaledPreview";
import { CardAMockup, CardBMockup } from "../../components/quiz/QuizCardMockups";
import { FlagReportButton } from "./FlagReportButton";

// Natural dimensions of Figma compare cards
const FIGMA_W = 186;
const FIGMA_H = 231;
const MOCK_W  = 404;
const MOCK_H  = 367;

type Phase = "selecting" | "feedback";

// ── Audio helpers ──────────────────────────────────────────────────────────────

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

// ── Main component ─────────────────────────────────────────────────────────────

export function CompareUIQuiz({
  question,
  compareOptions,
  correctAnswer,
  explanation,
  onAnswer,
  onContinue,
  earnedXP,
  isReplay,
  compareCardMinHeight,
  compareMaxScale,
  mobileCardMinHeight,
  mobileNaturalW,
  mobileNaturalH,
}: {
  question: string;
  /** MUST be an array of 2 items with label + (content or previewType). */
  compareOptions: CompareUIOption[];
  correctAnswer: string;
  explanation: string;
  onAnswer: (isCorrect: boolean) => void;
  onContinue: () => void;
  earnedXP: number;
  isReplay: boolean;
  /** Optional min height (px) for each compare card — for Figma-content quizzes */
  compareCardMinHeight?: number;
  /** Optional max scale for Figma content in compare cards */
  compareMaxScale?: number;
  /** Optional min height (px) for mobile compare cards (overrides default 220/250) */
  mobileCardMinHeight?: number;
  /** Override natural width of mobile Figma content (for lesson-specific card sizes) */
  mobileNaturalW?: number;
  /** Override natural height of mobile Figma content (for lesson-specific card sizes) */
  mobileNaturalH?: number;
}) {
  const [selection, setSelection] = useState<string | null>(null);
  const [phase, setPhase] = useState<Phase>("selecting");
  const vw = useWindowWidth();
  const isMobile = vw < 768;
  const quizW = Math.min(1042, vw - 48);
  const colW = Math.min(506, Math.floor((quizW - 18) / 2));

  // ── Debug guard — logs a warning if data is malformed ───────────────────────
  if (!compareOptions || compareOptions.length === 0) {
    console.error(
      "[CompareUIQuiz] compareOptions is empty or undefined!",
      { question, compareOptions }
    );
  } else {
    console.log(
      `[CompareUIQuiz] compareOptions OK — ${compareOptions.length} items:`,
      compareOptions.map(o => ({ label: o.label, hasContent: !!o.content, previewType: o.previewType }))
    );
  }

  const isCorrect = selection === correctAnswer;

  const handleSelect = (label: string) => {
    if (phase === "feedback") return;
    setSelection(label);
    playSelectSound();
  };

  const handleContinue = () => {
    if (phase === "selecting") {
      onAnswer(isCorrect);
      setPhase("feedback");
      playResultSound(isCorrect);
    } else {
      onContinue();
    }
  };

  const getCardState = (label: string): CompareCardState => {
    if (phase === "selecting") return selection === label ? "selected" : "idle";
    if (label === correctAnswer) return "correct";
    if (selection === label) return "incorrect";
    return "dimmed";
  };

  // Safety: render nothing if no options (prevents blank crash)
  if (!compareOptions || compareOptions.length === 0) {
    return (
      <div className="w-[1042px] flex justify-center">
        <p className="font-['Roboto_Condensed:Medium',sans-serif] font-medium text-[#798589] text-[18px]">
          Нет вариантов для сравнения
        </p>
      </div>
    );
  }

  // ── MOBILE layout — FIXED pixel system per spec ────────────────────────────
  if (isMobile) {
    // Breakpoint: 440px = "large phone" (Pro Max etc.)
    const isLargePhone = vw >= 440;

    const containerH = mobileCardMinHeight
      ? mobileCardMinHeight
      : (isLargePhone ? 250 : 220);
    const paddingY   = mobileCardMinHeight ? 20 : 10;
    const paddingX   = mobileCardMinHeight ? 20 : 0;
    const figmaW     = mobileNaturalW ?? FIGMA_W;
    const figmaH     = mobileNaturalH ?? FIGMA_H;

    // Border color per card state
    const getBorderColor = (state: CompareCardState): string | undefined => {
      if (state === "selected") return "#636670";
      if (state === "correct")  return "rgba(0, 147, 47, 0.6)";
      if (state === "incorrect") return "#9f3500";
      return undefined;
    };

    return (
      <>
        {/* ── Content block — single wrapper, NO auto-spacing ── */}
        <div className="w-full px-[16px] flex flex-col" style={{ gap: 10 }}>

          {/* Question title */}
          <p className="font-['Roboto_Condensed:Medium',sans-serif] font-medium leading-[1.25] text-[#f4f5fc] text-[22px] text-center w-full">
            {question}
          </p>

          {/* Cards — FIXED gap 10px between them */}
          <div className="w-full flex flex-col" style={{ gap: 10 }}>
            {compareOptions.map((option) => {
              const state = getCardState(option.label);
              const isClickable = state === "idle" || state === "selected";
              const borderColor = getBorderColor(state);

              return (
                <div
                  key={option.label}
                  onClick={isClickable ? () => handleSelect(option.label) : undefined}
                  className={`relative rounded-[15px] overflow-hidden transition-all duration-200 ${isClickable ? "cursor-pointer active:scale-[0.99]" : ""}`}
                  style={{
                    height: mobileCardMinHeight
                      ? `calc((100dvh - 290px) / 2)`
                      : `calc((100dvh - 296px) / 2)`,
                    minHeight: containerH,
                    background: "linear-gradient(172deg, rgb(30,37,41) 2%, rgb(38,46,50) 99%)",
                    boxShadow: borderColor ? `0 0 0 3px ${borderColor}` : undefined,
                  }}
                >
                  {/* Inner card — fixed-height ScaledPreview centers content with equal top/bottom padding */}
                  <div className="w-full h-full">
                    {option.content ? (
                      <ScaledPreview
                        naturalWidth={figmaW}
                        naturalHeight={figmaH}
                        paddingY={paddingY}
                        paddingX={paddingX}
                        maxScale={1.8}
                      >
                        {option.content}
                      </ScaledPreview>
                    ) : (
                      <ScaledPreview
                        naturalWidth={MOCK_W}
                        naturalHeight={MOCK_H}
                        paddingY={10}
                        maxScale={1}
                      >
                        {option.previewType === "good" ? <CardAMockup /> : <CardBMockup />}
                      </ScaledPreview>
                    )}
                  </div>

                  {/* Inset shadow overlay */}
                  <div className="absolute inset-0 pointer-events-none rounded-[inherit] shadow-[inset_-4px_0px_4px_0px_#384348,inset_4px_0px_4px_0px_#384348,inset_0px_-5px_4px_0px_rgba(0,0,0,0.25),inset_0px_4px_4px_0px_rgba(0,0,0,0.25)]" />
                </div>
              );
            })}
          </div>
        </div>

        {/* ── Fixed bottom bar — feedback + button ── */}
        <div
          className="fixed left-0 right-0 z-10 px-[16px] pt-[12px]"
          style={{ bottom: "max(40px, env(safe-area-inset-bottom, 40px))", paddingBottom: 12 }}
        >
          {phase === "feedback" && (
            <div className="mb-[10px]">
              {isCorrect
                ? <CorrectFeedback explanation={explanation} showXp={earnedXP > 0} />
                : <IncorrectFeedback correctAnswer={correctAnswer} explanation={explanation} isReplay={isReplay} hideAnswer />
              }
            </div>
          )}
          <div className="flex items-center gap-[20px]">
            <FlagReportButton />
            <div className="flex-1">
              {phase === "selecting"
                ? selection === null ? <ContinueDisabled fullWidth /> : <ContinueActive onClick={handleContinue} fullWidth />
                : isCorrect ? <ContinueCorrect onClick={handleContinue} fullWidth /> : <ContinueActive onClick={handleContinue} fullWidth />
              }
            </div>
          </div>
        </div>
      </>
    );
  }

  // ── DESKTOP layout ─────────────────────────────────────────────────────────
  return (
    <>
      {/* Question */}
      <div className="flex justify-center" style={{ width: quizW }}>
        <p className="font-['Roboto_Condensed:Medium',sans-serif] font-medium leading-[35px] text-[#f4f5fc] text-[32px] text-center">
          {question}
        </p>
      </div>

      {/* Cards row — delegated entirely to QuizLeftBlock (interactive mode) */}
      <div
        style={{
          display: "flex",
          alignItems: "stretch",
          justifyContent: "center",
          width: quizW,
          flexShrink: 0,
        }}
      >
        <QuizLeftBlock
          type="interactive"
          compareOptions={compareOptions}
          getCardState={getCardState}
          onCardClick={handleSelect}
          compareCardMinHeight={compareCardMinHeight}
          compareMaxScale={compareMaxScale}
          cardWidth={colW}
          figmaNaturalW={mobileNaturalW}
          figmaNaturalH={mobileNaturalH}
        />
      </div>

      {/* Fixed bottom bar */}
      <div className="fixed bottom-[20px] left-0 right-0 z-10 flex justify-center">
        <div className="flex gap-[32px] items-center mb-[20px]" style={{ width: quizW }}>
          <div className="flex-1 flex items-center" style={{ paddingRight: 40 }}>
            {phase === "feedback" && (
              isCorrect
                ? <CorrectFeedback explanation={explanation} showXp={earnedXP > 0} />
                : <IncorrectFeedback correctAnswer={correctAnswer} explanation={explanation} isReplay={isReplay} hideAnswer />
            )}
          </div>
          <div className="flex-none flex items-center justify-end gap-[20px]">
            <FlagReportButton />
            {phase === "selecting" ? (
              selection === null ? <ContinueDisabled /> : <ContinueActive onClick={handleContinue} />
            ) : isCorrect ? (
              <ContinueCorrect onClick={handleContinue} />
            ) : (
              <ContinueActive onClick={handleContinue} />
            )}
          </div>
        </div>
      </div>
    </>
  );
}