import { useState } from "react";
import { useNavigate } from "react-router";
import { useUser } from "../context/UserContext";
import PageTransition from "../components/PageTransition";
import { CloseButton } from "./quiz/CloseButton";
import { CardAMockup, CardBMockup, QuizCard } from "./quiz/QuizCardMockups";
import { ContinueDisabled, ContinueActive, ContinueCorrect } from "./quiz/ContinueButtons";
import { CorrectFeedback, IncorrectFeedback } from "./quiz/QuizFeedback";
import { FlagReportButton } from "./quiz/FlagReportButton";
import { ScaledPreview } from "../components/quiz/ScaledPreview";
import { useWindowWidth } from "../hooks/useWindowWidth";
import XpCounter from "../components/XpCounter";

const EXPLANATION = "Основная кнопка выделяется контрастом — интерфейс читается быстрее.";

type Selection = "A" | "B" | null;
type Phase = "selecting" | "feedback";
type CardState = "idle" | "selected" | "correct" | "incorrect" | "dimmed";

// Natural dimensions of CardAMockup / CardBMockup
const MOCK_W = 404;
const MOCK_H = 367;

const BG_GRADIENT: Record<CardState, string> = {
  idle:      "linear-gradient(172deg, rgb(44,53,56) 2%, rgb(56,67,72) 99%)",
  selected:  "linear-gradient(172deg, rgb(55,66,70) 2%, rgb(56,67,72) 99%)",
  correct:   "linear-gradient(172deg, rgba(58,81,67,0.5) 2%, rgba(56,72,62,0.5) 99%)",
  incorrect: "linear-gradient(172deg, rgba(92,53,53,0.5) 2%, rgba(72,58,56,0.5) 99%)",
  dimmed:    "linear-gradient(172deg, rgba(44,53,56,0.5) 2%, rgba(56,67,72,0.5) 99%)",
};

function getBorderColor(state: CardState): string | undefined {
  if (state === "selected")  return "#636670";
  if (state === "correct")   return "rgba(0, 147, 47, 0.6)";
  if (state === "incorrect") return "#9f3500";
  return undefined;
}

export default function QuizPage() {
  const navigate = useNavigate();
  const { getLessonProgress, updateQuestionState } = useUser();
  const [selection, setSelection] = useState<Selection>(null);
  const [phase, setPhase] = useState<Phase>("selecting");
  const [earnedXP, setEarnedXP] = useState(0);
  const vw = useWindowWidth();

  const QUESTION_ID = "quiz-contrast-screens";
  const LESSON_ID = "onboarding-quiz";

  const lessonProgress = getLessonProgress(LESSON_ID);
  const xpAlreadyAwarded = lessonProgress.questions[QUESTION_ID]?.xpAwarded || false;
  const isCorrect = selection === "A";
  const isTouchDevice = typeof window !== "undefined" && window.matchMedia("(pointer: coarse)").matches;
  const gainFor = (base: number) => (isTouchDevice ? base * 0.55 : base);

  const handleSelect = (card: "A" | "B") => {
    if (phase === "feedback") return;
    setSelection(card);
  };

  const handleContinue = () => {
    if (phase === "selecting") {
      const result = updateQuestionState(LESSON_ID, QUESTION_ID, isCorrect);
      setEarnedXP(result.xpEarned);
      setPhase("feedback");
      try {
        const ctx = new AudioContext();
        const o = ctx.createOscillator();
        o.type = "sine";
        const g = ctx.createGain();
        g.gain.setValueAtTime(0.0001, ctx.currentTime);
        if (isCorrect) {
          o.frequency.setValueAtTime(523, ctx.currentTime);
          o.frequency.setValueAtTime(659, ctx.currentTime + 0.1);
          o.frequency.setValueAtTime(784, ctx.currentTime + 0.2);
          g.gain.linearRampToValueAtTime(gainFor(0.15), ctx.currentTime + 0.015);
          g.gain.exponentialRampToValueAtTime(0.0001, ctx.currentTime + 0.32);
        } else {
          o.frequency.setValueAtTime(280, ctx.currentTime);
          o.frequency.exponentialRampToValueAtTime(220, ctx.currentTime + 0.15);
          g.gain.linearRampToValueAtTime(gainFor(0.08), ctx.currentTime + 0.012);
          g.gain.exponentialRampToValueAtTime(0.0001, ctx.currentTime + 0.17);
        }
        o.connect(g); g.connect(ctx.destination);
        o.start(); o.stop(ctx.currentTime + (isCorrect ? 0.33 : 0.18));
      } catch (_) {}
    } else {
      navigate("/lessons");
    }
  };

  const getCardState = (card: "A" | "B"): CardState => {
    if (phase === "selecting") return selection === card ? "selected" : "idle";
    if (card === "A") return isCorrect ? "correct" : "dimmed";
    return !isCorrect ? "incorrect" : "dimmed";
  };

  function playSelectSound() {
    try {
      const ctx = new AudioContext();
      const o = ctx.createOscillator();
      o.type = "sine";
      o.frequency.setValueAtTime(520, ctx.currentTime);
      o.frequency.exponentialRampToValueAtTime(340, ctx.currentTime + 0.05);
      const g = ctx.createGain();
      g.gain.setValueAtTime(0.0001, ctx.currentTime);
      g.gain.linearRampToValueAtTime(gainFor(0.1), ctx.currentTime + 0.01);
      g.gain.exponentialRampToValueAtTime(0.0001, ctx.currentTime + 0.06);
      o.connect(g); g.connect(ctx.destination);
      o.start(); o.stop(ctx.currentTime + 0.065);
    } catch (_) {}
  }

  const isMobile = vw < 768;
  const isTablet = vw >= 768 && vw < 1280;

  // Shared XP indicator
  const xpIndicator = (
    <div className="fixed top-[20px] right-[20px] z-10">
      <XpCounter />
    </div>
  );

  const insetShadow = "inset_-4px_0px_4px_0px_#384348,inset_4px_0px_4px_0px_#384348,inset_0px_-5px_4px_0px_rgba(0,0,0,0.25),inset_0px_4px_4px_0px_rgba(0,0,0,0.25)";

  // ── MOBILE layout ───────────────────────────────────────────────────────────
  if (isMobile) {
    const isLargePhone = vw >= 440;
    const heightSubtract = 356;
    const containerH = isLargePhone ? 210 : 185;
    const paddingY = 20;

    const cards: Array<{ id: "A" | "B"; Mockup: () => JSX.Element }> = [
      { id: "A", Mockup: CardAMockup },
      { id: "B", Mockup: CardBMockup },
    ];

    return (
      <PageTransition>
        <div
          className="relative h-screen w-full overflow-hidden"
          style={{ background: "#282F33" }}
        >
          {xpIndicator}
          <div className="fixed top-[20px] left-[20px] z-10">
            <CloseButton onClick={() => navigate("/welcome")} />
          </div>

          {/* Content */}
          <div
            className="absolute inset-0 px-[16px] flex flex-col"
            style={{ paddingTop: 76, gap: 10 }}
          >
            <p className="font-['Roboto_Condensed:Medium',sans-serif] font-medium leading-[1.25] text-[#f4f5fc] text-[20px] text-center w-full whitespace-nowrap">
              Что лучше?
            </p>

            <div className="flex flex-col" style={{ gap: 10 }}>
              {cards.map(({ id, Mockup }) => {
                const state = getCardState(id);
                const isClickable = state === "idle" || state === "selected";
                const borderColor = getBorderColor(state);
                return (
                  <div
                    key={id}
                    onClick={isClickable ? () => { handleSelect(id); playSelectSound(); } : undefined}
                    className={`relative rounded-[15px] overflow-hidden flex-shrink-0 transition-all duration-200 ${isClickable ? "cursor-pointer active:scale-[0.99]" : ""}`}
                    style={{
                      height: `calc((100% - ${heightSubtract}px) / 2)`,
                      minHeight: containerH,
                      background: BG_GRADIENT[state],
                      boxShadow: borderColor ? `0 0 0 3px ${borderColor}` : undefined,
                    }}
                  >
                    <div className="w-full h-full">
                      <ScaledPreview naturalWidth={MOCK_W} naturalHeight={MOCK_H} paddingY={paddingY} maxScale={1}>
                        <Mockup />
                      </ScaledPreview>
                    </div>
                    <div className={`absolute inset-0 pointer-events-none rounded-[inherit] shadow-[${insetShadow}]`} />
                  </div>
                );
              })}
            </div>
          </div>

          {/* Fixed bottom: feedback + button — matches lesson quiz style */}
          <div
            className="fixed left-0 right-0 z-10 px-[16px] pt-[12px]"
            style={{ bottom: "max(40px, env(safe-area-inset-bottom, 40px))", paddingBottom: 12 }}
          >
            {phase === "feedback" && (
              <div className="mb-[10px]">
                {isCorrect
                  ? <CorrectFeedback explanation={EXPLANATION} showXp={earnedXP > 0} />
                  : <IncorrectFeedback correctAnswer="А" explanation={EXPLANATION} />
                }
              </div>
            )}
            <div className="flex items-center gap-[20px]">
              <FlagReportButton />
              <div className="flex-1">
                {phase === "selecting"
                  ? selection === null
                    ? <ContinueDisabled fullWidth />
                    : <ContinueActive onClick={handleContinue} fullWidth />
                  : isCorrect
                    ? <ContinueCorrect onClick={handleContinue} fullWidth />
                    : <ContinueActive onClick={handleContinue} fullWidth />
                }
              </div>
            </div>
          </div>
        </div>
      </PageTransition>
    );
  }

  // ── TABLET layout ───────────────────────────────────────────────────────────
  if (isTablet) {
    const avail = vw - 48;
    const gap = 24;
    const cardW = Math.floor((avail - gap) / 2);
    const cardH = Math.min(Math.round(cardW * (MOCK_H / MOCK_W)), 520);
    const paddingY = Math.round(cardH * 0.06);

    const cards: Array<{ id: "A" | "B"; Mockup: () => JSX.Element }> = [
      { id: "A", Mockup: CardAMockup },
      { id: "B", Mockup: CardBMockup },
    ];

    return (
      <PageTransition>
        <div
          className="relative h-screen w-full overflow-hidden"
          style={{ backgroundImage: "linear-gradient(165.05deg, #282F33 14.367%, rgb(46,57,62) 147.74%)" }}
        >
          {xpIndicator}
          <div className="fixed top-[20px] left-[20px] z-10">
            <CloseButton onClick={() => navigate("/welcome")} />
          </div>

          {/* Content centered */}
          <div
            className="absolute inset-0 flex flex-col items-center justify-center"
            style={{ paddingBottom: 140, paddingTop: 80 }}
          >
            <p className="font-['Roboto_Condensed:Medium',sans-serif] font-medium leading-[27.5px] text-[#f4f5fc] text-[28px] text-center mb-[28px]">
              Что лучше?
            </p>
            <div className="flex items-start" style={{ gap }}>
              {cards.map(({ id, Mockup }) => {
                const state = getCardState(id);
                const isClickable = state === "idle" || state === "selected";
                const borderColor = getBorderColor(state);
                return (
                  <div
                    key={id}
                    onClick={isClickable ? () => { handleSelect(id); playSelectSound(); } : undefined}
                    className={`relative rounded-[20px] overflow-hidden transition-all duration-200 ${isClickable ? "cursor-pointer" : ""}`}
                    style={{
                      width: cardW,
                      height: cardH,
                      background: BG_GRADIENT[state],
                      boxShadow: borderColor ? `0 0 0 3px ${borderColor}` : undefined,
                    }}
                  >
                    <div className="w-full h-full">
                      <ScaledPreview naturalWidth={MOCK_W} naturalHeight={MOCK_H} paddingY={paddingY} maxScale={1}>
                        <Mockup />
                      </ScaledPreview>
                    </div>
                    <div className={`absolute inset-0 pointer-events-none rounded-[inherit] shadow-[${insetShadow}]`} />
                  </div>
                );
              })}
            </div>
          </div>

          {/* Fixed bottom: feedback + button */}
          <div className="fixed left-0 right-0 z-10 flex justify-center" style={{ bottom: "max(20px, env(safe-area-inset-bottom, 20px))" }}>
            <div className="flex gap-[24px] items-center" style={{ width: avail }}>
              <div className="flex-1 flex items-center min-w-0">
                {phase === "feedback" && (
                  isCorrect
                    ? <CorrectFeedback explanation={EXPLANATION} showXp={earnedXP > 0} />
                    : <IncorrectFeedback correctAnswer="А" explanation={EXPLANATION} />
                )}
              </div>
              <div className="flex items-center gap-[20px] flex-none">
                <FlagReportButton />
                {phase === "selecting"
                  ? selection === null
                    ? <ContinueDisabled />
                    : <ContinueActive onClick={handleContinue} />
                  : isCorrect
                    ? <ContinueCorrect onClick={handleContinue} />
                    : <ContinueActive onClick={handleContinue} />
                }
              </div>
            </div>
          </div>
        </div>
      </PageTransition>
    );
  }

  // ── DESKTOP layout ──────────────────────────────────────────────────────────
  return (
    <PageTransition>
      <div
        className="relative min-h-screen w-full overflow-hidden"
        style={{ backgroundImage: "linear-gradient(165.05deg, #282F33 14.367%, rgb(46,57,62) 147.74%)" }}
      >
        {xpIndicator}

        {/* Back button */}
        <div className="fixed top-[20px] left-[20px] z-10">
          <CloseButton onClick={() => navigate("/welcome")} />
        </div>

        {/* Cards */}
        <div className="flex flex-col items-center justify-center gap-[24px] min-h-screen pb-[160px] pt-[80px]">
          <p className="text-center font-['Roboto_Condensed:Medium',sans-serif] font-medium leading-[27.5px] text-[#f4f5fc] text-[32px] mx-[0px] mt-[0px] mb-[40px]">
            Что лучше?
          </p>
          <div className="flex items-start justify-center gap-[32px]">
            <QuizCard state={getCardState("A")} onClick={() => { handleSelect("A"); playSelectSound(); }}>
              <CardAMockup />
            </QuizCard>
            <QuizCard state={getCardState("B")} onClick={() => { handleSelect("B"); playSelectSound(); }}>
              <CardBMockup />
            </QuizCard>
          </div>
        </div>

        {/* Bottom feedback + continue */}
        <div className="fixed bottom-[20px] left-0 right-0 z-10 flex justify-center">
          <div className="flex gap-[32px] items-center w-[952px] mx-[0px] mt-[0px] mb-[20px]">
            <div className="w-[460px] flex items-center">
              {phase === "feedback" && (
                isCorrect
                  ? <CorrectFeedback explanation={EXPLANATION} showXp={earnedXP > 0} />
                  : <IncorrectFeedback correctAnswer="А" explanation={EXPLANATION} />
              )}
            </div>
            <div className="w-[460px] flex items-center justify-end gap-[20px]">
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
      </div>
    </PageTransition>
  );
}
