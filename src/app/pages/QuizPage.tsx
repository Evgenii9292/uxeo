import { useState } from "react";
import { useNavigate } from "react-router";
import { useUser } from "../context/UserContext";
import PageTransition from "../components/PageTransition";
import { BackButton } from "./quiz/BackButton";
import { CardAMockup, CardBMockup, QuizCard } from "./quiz/QuizCardMockups";
import {
  ContinueDisabled,
  ContinueActive,
  ContinueCorrect,
  CorrectFeedback,
  IncorrectFeedback,
} from "./quiz/OnboardingQuizUI";
import quizSvgPaths from "../../imports/svg-869ttds5wi";

type Selection = "A" | "B" | null;
type Phase = "selecting" | "feedback";
type CardState = "idle" | "selected" | "correct" | "incorrect" | "dimmed";

export default function QuizPage() {
  const navigate = useNavigate();
  const { xp, getLessonProgress, updateQuestionState } = useUser();
  const [selection, setSelection] = useState<Selection>(null);
  const [phase, setPhase] = useState<Phase>("selecting");
  const [earnedXP, setEarnedXP] = useState(0);

  const QUESTION_ID = "quiz-contrast-screens";
  const LESSON_ID = "onboarding-quiz";

  const lessonProgress = getLessonProgress(LESSON_ID);
  const xpAlreadyAwarded = lessonProgress.questions[QUESTION_ID]?.xpAwarded || false;
  const isCorrect = selection === "A";

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
        if (isCorrect) {
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
    } else {
      navigate("/email");
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
      g.gain.setValueAtTime(0.1, ctx.currentTime);
      g.gain.exponentialRampToValueAtTime(0.001, ctx.currentTime + 0.05);
      o.connect(g); g.connect(ctx.destination);
      o.start(); o.stop(ctx.currentTime + 0.05);
    } catch (_) {}
  }

  return (
    <PageTransition>
      <div
        className="relative min-h-screen w-full overflow-hidden"
        style={{ backgroundImage: "linear-gradient(165.05deg, #282F33 14.367%, rgb(46,57,62) 147.74%)" }}
      >
        {/* XP indicator */}
        <div className="fixed top-[32px] right-[23px] z-10 content-stretch flex gap-[4px] items-center">
          <div className="relative shrink-0 size-[24px]">
            <svg className="absolute block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 24 24">
              <g id="Zap">
                <path d={quizSvgPaths.p9530000} fill="var(--fill-0, #798589)" stroke="var(--stroke-0, #798589)" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.33333" />
              </g>
            </svg>
          </div>
          <p className="font-['Roboto_Condensed:ExtraBold',sans-serif] font-extrabold leading-[21px] relative shrink-0 text-[#798589] text-[24px] whitespace-nowrap">{xp}</p>
        </div>

        {/* Back button */}
        <div className="fixed top-[20px] left-[20px] z-10">
          <BackButton onClick={() => navigate("/welcome")} />
        </div>

        {/* ZONE 2 — Cards */}
        <div className="flex flex-col items-center justify-center gap-[24px] min-h-screen pb-[160px] pt-[80px]">
          <p className="text-center font-['Roboto_Condensed:Bold',sans-serif] font-bold leading-[27.5px] text-[#f4f5fc] text-[32px] mx-[0px] mt-[0px] mb-[40px]">
            Какой экран лучше?
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

        {/* ZONE 3 — Bottom feedback + continue */}
        <div className="fixed bottom-[20px] left-0 right-0 z-10 flex justify-center">
          <div className="flex gap-[32px] items-center w-[1044px] mx-[0px] mt-[0px] mb-[20px]">
            <div className="w-[506px] flex items-center">
              {phase === "feedback" && (isCorrect ? <CorrectFeedback showXp={earnedXP > 0} /> : <IncorrectFeedback />)}
            </div>
            <div className="w-[506px] flex items-center justify-end">
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

        <p className="fixed bottom-[20px] left-[20px] z-10 font-['Roboto_Condensed:Medium',sans-serif] font-medium leading-[20px] text-[#798589] text-[16px] whitespace-nowrap cursor-pointer hover:text-[#a0a3ab] transition-colors duration-150">
          Сообщить об ошибке
        </p>
      </div>
    </PageTransition>
  );
}
