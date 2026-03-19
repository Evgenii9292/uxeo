import React, { useState, useEffect, useRef } from "react";
import { useNavigate, useLocation } from "react-router";
import { useUser } from "../context/UserContext";
import { useLesson } from "../context/LessonContext";
import { useWindowWidth } from "../hooks/useWindowWidth";
import LessonCompletionScreen from "./LessonCompletionScreen";
import StreakScreen from "./StreakScreen";
import PageTransition from "../components/PageTransition";
import { QUIZ_BANK } from "../data/quiz-bank";
import { LESSONS } from "../data/lessons";
import { CloseButton } from "./quiz/CloseButton";
import { ExitConfirmationModal } from "./quiz/ExitModal";
import { ProductCardMockup } from "./quiz/ProductCardMockup";
import { QuizOptionCard, type CardState } from "./quiz/QuizOptionCard";
import { ContinueDisabled, ContinueActive, ContinueCorrect } from "./quiz/ContinueButtons";
import { CorrectFeedback, IncorrectFeedback } from "./quiz/QuizFeedback";
import { MultipleChoiceQuiz } from "./quiz/MultipleChoiceQuiz";
import { MatchingQuiz } from "./quiz/MatchingQuiz";
import { CompareUIQuiz } from "./quiz/CompareUIQuiz";
import { QuizLeftBlock } from "./quiz/QuizLeftBlock";
import { ScaledPreview } from "../components/quiz/ScaledPreview";
import {
  CQCompare1A, CQCompare1B,
  CQCompare2A, CQCompare2B,
  CQCompare3A, CQCompare3B,
  CQSingle1, CQSingle2, CQSingle3,
  CQMulti1, CQMulti2, CQMulti3,
  CQConn1A, CQConn1B, CQConn1C,
  CQConn2A, CQConn2B, CQConn2C,
  CQConn3A, CQConn3B, CQConn3C,
} from "../../imports/Контраст-2008-1854";
import {
  CQColorCompare1A, CQColorCompare1B,
  CQColorCompare2A, CQColorCompare2B,
  CQColorCompare3A, CQColorCompare3B,
  CQColorSingle1, CQColorSingle2, CQColorSingle3,
  CQColorMulti1, CQColorMulti2, CQColorMulti3,
  CQColorConn1A, CQColorConn1B, CQColorConn1C,
  CQColorConn2A, CQColorConn2B, CQColorConn2C,
  CQColorConn3A, CQColorConn3B, CQColorConn3C,
} from "../../imports/Цвет";
import {
  CQHierCompare1A, CQHierCompare1B,
  CQHierCompare2A, CQHierCompare2B,
  CQHierCompare3A, CQHierCompare3B,
  CQHierSingle1, CQHierSingle2, CQHierSingle3,
  CQHierMulti1, CQHierMulti2, CQHierMulti3,
  CQHierConn1A, CQHierConn1B, CQHierConn1C,
  CQHierConn2A, CQHierConn2B, CQHierConn2C,
  CQHierConn3A, CQHierConn3B, CQHierConn3C,
} from "../../imports/Иерархия";
import {
  CQUxCompare1A, CQUxCompare1B, CQUxCompare2A, CQUxCompare2B, CQUxCompare3A, CQUxCompare3B,
  CQUxSingle1, CQUxSingle2, CQUxSingle3,
  CQUxMulti1, CQUxMulti2, CQUxMulti3,
  CQUxConn1A, CQUxConn1B, CQUxConn1C,
  CQUxConn2A, CQUxConn2B, CQUxConn2C,
  CQUxConn3A, CQUxConn3B, CQUxConn3C,
} from "../../imports/ЧтоТакоеUx";
import {
  CQFlowCompare1A, CQFlowCompare1B, CQFlowCompare2A, CQFlowCompare2B, CQFlowCompare3A, CQFlowCompare3B,
  CQFlowSingle1, CQFlowSingle2, CQFlowSingle3,
  CQFlowMulti1, CQFlowMulti2, CQFlowMulti3,
  CQFlowConn1A, CQFlowConn1B, CQFlowConn1C,
  CQFlowConn2A, CQFlowConn2B, CQFlowConn2C,
  CQFlowConn3A, CQFlowConn3B, CQFlowConn3C,
} from "../../imports/UserFlow";
import {
  CQStructCompare1A, CQStructCompare1B, CQStructCompare2A, CQStructCompare2B, CQStructCompare3A, CQStructCompare3B,
  CQStructSingle1, CQStructSingle2, CQStructSingle3,
  CQStructMulti1, CQStructMulti2, CQStructMulti3,
  CQStructConn1A, CQStructConn1B, CQStructConn1C,
  CQStructConn2A, CQStructConn2B, CQStructConn2C,
  CQStructConn3A, CQStructConn3B, CQStructConn3C,
} from "../../imports/СтруктураИнтерфейса";
import {
  CQElemCompare1A, CQElemCompare1B, CQElemCompare2A, CQElemCompare2B, CQElemCompare3A, CQElemCompare3B,
  CQElemSingle1, CQElemSingle2, CQElemSingle3,
  CQElemMulti1, CQElemMulti2, CQElemMulti3,
  CQElemConn1A, CQElemConn1B, CQElemConn1C,
  CQElemConn2A, CQElemConn2B, CQElemConn2C,
  CQElemConn3A, CQElemConn3B, CQElemConn3C,
} from "../../imports/ОсновныеЭлементыИнтерфейса";
import {
  CQErrCompare1A, CQErrCompare1B, CQErrCompare2A, CQErrCompare2B, CQErrCompare3A, CQErrCompare3B,
  CQErrSingle1, CQErrSingle2, CQErrSingle3,
  CQErrMulti1, CQErrMulti2, CQErrMulti3,
  CQErrConn1A, CQErrConn1B, CQErrConn1C,
  CQErrConn2A, CQErrConn2B, CQErrConn2C,
  CQErrConn3A, CQErrConn3B, CQErrConn3C,
} from "../../imports/ОшибкиUx";
import ContrastQuiz6 from "../../imports/ContrastQuiz6";
import ContrastQuiz6New from "../../imports/ContrastQuiz6-446-3881";
import {
  CQGridCompare1A, CQGridCompare1B, CQGridCompare2A, CQGridCompare2B, CQGridCompare3A, CQGridCompare3B,
  CQGridSingle1, CQGridSingle2, CQGridSingle3,
  CQGridMulti1, CQGridMulti2, CQGridMulti3,
  CQGridConn1A, CQGridConn1B, CQGridConn1C,
  CQGridConn2A, CQGridConn2B, CQGridConn2C,
  CQGridConn3A, CQGridConn3B, CQGridConn3C,
} from "../../imports/Урок3СеткаИОтступы";
import {
  CQFigmaCompare1A, CQFigmaCompare1B, CQFigmaCompare2A, CQFigmaCompare2B, CQFigmaCompare3A, CQFigmaCompare3B,
  CQFigmaSingle1, CQFigmaSingle2, CQFigmaSingle3,
  CQFigmaMulti1, CQFigmaMulti2, CQFigmaMulti3,
  CQFigmaConn1A, CQFigmaConn1B, CQFigmaConn1C,
  CQFigmaConn2A, CQFigmaConn2B, CQFigmaConn2C,
  CQFigmaConn3A, CQFigmaConn3B, CQFigmaConn3C,
} from "../../imports/Урок4КомпонентыВFigma";
import {
  CQKitCompare1A, CQKitCompare1B, CQKitCompare2A, CQKitCompare2B, CQKitCompare3A, CQKitCompare3B,
  CQKitSingle1, CQKitSingle2, CQKitSingle3,
  CQKitMulti1, CQKitMulti2, CQKitMulti3,
  CQKitConn1A, CQKitConn1B, CQKitConn1C,
  CQKitConn2A, CQKitConn2B, CQKitConn2C,
  CQKitConn3A, CQKitConn3B, CQKitConn3C,
} from "../../imports/Урок5СозданиеUiKit";
import {
  CQUiElemCompare1A, CQUiElemCompare1B,
  CQUiElemCompare2A, CQUiElemCompare2B,
  CQUiElemCompare3A, CQUiElemCompare3B,
  CQUiElemSingle1, CQUiElemSingle2, CQUiElemSingle3,
  CQUiElemMulti1, CQUiElemMulti2, CQUiElemMulti3,
  CQUiElemConn1A, CQUiElemConn1B,
  CQUiElemConn2A, CQUiElemConn2B, CQUiElemConn2C,
} from "../../imports/Урок2ОсновныеUiЭлементы";
import {
  CQWhKitCompare1A, CQWhKitCompare1B,
  CQWhKitCompare2A, CQWhKitCompare2B,
  CQWhKitCompare3A, CQWhKitCompare3B,
  CQWhKitSingle1, CQWhKitSingle2, CQWhKitSingle3,
  CQWhKitMulti1, CQWhKitMulti2, CQWhKitMulti3,
  CQWhKitConn1A, CQWhKitConn1B, CQWhKitConn1C,
  CQWhKitConn2A, CQWhKitConn2B, CQWhKitConn2C,
  CQWhKitConn3A, CQWhKitConn3B, CQWhKitConn3C,
} from "../../imports/Урок1ЧтоТакоеUiKit";
import svgPaths from "../../imports/svg-869ttds5wi";

type Selection = "А" | "Б" | "В" | "Г" | null;
type Phase = "selecting" | "feedback";

export default function LessonQuizPage() {
  const navigate = useNavigate();
  const location = useLocation();
  const { xp, getLessonProgress, incrementStreak, streak, saveBestScore } = useUser();
  const { lessonState, initializeLesson, answerQuestion, nextQuestion, completeLesson, exitLesson } = useLesson();

  // Parse URL search params directly from location.search (useSearchParams may not work)
  const urlParams = new URLSearchParams(location.search || window.location.search);

  // Single canonical ID for this lesson — used for quiz bank lookup, progress, and completion
  // Try: 1) location.state  2) URL search params  3) LESSONS lookup by lessonId
  const quizId = (location.state as { quizId?: string })?.quizId
    || urlParams.get("quizId")
    || (() => {
      const lessonId = (location.state as { lessonId?: string })?.lessonId
        || urlParams.get("lessonId");
      if (lessonId) {
        const found = LESSONS.find(l => l.lessonId === lessonId);
        if (found?.quizId) return found.quizId;
      }
      console.error("[LessonQuizPage] Could not resolve quizId. state:", location.state, "url:", window.location.href);
      return "";
    })();

  // Debug: log which quizId is being used
  console.log("[LessonQuizPage] quizId:", quizId, "| state:", location.state, "| search:", location.search, "| href:", window.location.href);

  if (!QUIZ_BANK[quizId]) {
    console.error("[LessonQuizPage] Quiz not found in QUIZ_BANK:", quizId, "| Available keys:", Object.keys(QUIZ_BANK));
  }

  const QUIZ_QUESTIONS = QUIZ_BANK[quizId];
  const totalQuestions = QUIZ_QUESTIONS ? QUIZ_QUESTIONS.length : 0;

  const [selection, setSelection] = useState<Selection>(null);
  const [phase, setPhase] = useState<Phase>("selecting");
  const [showExitModal, setShowExitModal] = useState(false);
  const [earnedXP, setEarnedXP] = useState(0);
  const [showCompletionOverlay, setShowCompletionOverlay] = useState(false);
  const [showStreakOverlay, setShowStreakOverlay] = useState(false);
  const [quizFinished, setQuizFinished] = useState(false);
  const [runAnsweredQuestions, setRunAnsweredQuestions] = useState(0);
  const [runCorrectAnswers, setRunCorrectAnswers] = useState(0);
  const runCorrectRef = useRef(0);
  // Temporary XP accumulated during this quiz run — NOT persisted until quiz is fully complete
  const [temporaryQuizXp, setTemporaryQuizXp] = useState(0);
  // ── Streak state ──────────────────────────────────────────────────────────
  const [currentStreak, setCurrentStreak] = useState(0);
  const [bestStreak, setBestStreak] = useState(0);
  const [streakBump, setStreakBump] = useState(false);
  // Temporary per-run answers — NOT persisted until quiz is fully complete
  const runAnswers = useRef<{ questionId: string; isCorrect: boolean; xpValue: number }[]>([]);
  // !! Хук до любых ранних return — Rules of Hooks !!
  const vw = useWindowWidth();
  const isMobile = vw < 768;
  const isLargePhone = vw >= 440; // 440×954 vs 388×858

  useEffect(() => {
    // Always reinitialize on mount — previous lessonState may be stale
    // (e.g. after a failed attempt where lessonState wasn't cleared)
    initializeLesson(quizId, totalQuestions);
    setRunAnsweredQuestions(0);
    setRunCorrectAnswers(0);
    runCorrectRef.current = 0;
    setTemporaryQuizXp(0);
    runAnswers.current = [];
    setCurrentStreak(0);
    setBestStreak(0);
  }, []);

  const lessonProgress = getLessonProgress(quizId);

  // ── Quiz finished flow ─────────────────────────────────────────────────────
  if (quizFinished) {
    const resultCorrect = runCorrectAnswers;
    const resultTotal = totalQuestions;
    // Show only newly earned XP (temporaryQuizXp tracks XP not yet awarded in previous runs)
    const totalEarnedXP = temporaryQuizXp;
    const passed = resultCorrect >= Math.ceil(resultTotal * 0.5);

    const handleRetry = () => {
      setQuizFinished(false);
      setShowCompletionOverlay(false);
      setSelection(null);
      setPhase("selecting");
      setEarnedXP(0);
      setRunAnsweredQuestions(0);
      setRunCorrectAnswers(0);
      runCorrectRef.current = 0;
      setTemporaryQuizXp(0);
      runAnswers.current = [];
      setCurrentStreak(0);
      setBestStreak(0);
      initializeLesson(quizId, totalQuestions);
    };

    if (showCompletionOverlay && !showStreakOverlay) {
      return (
        <LessonCompletionScreen
          correctAnswers={resultCorrect}
          totalQuestions={resultTotal}
          earnedXP={totalEarnedXP}
          passed={passed}
          bestStreak={bestStreak}
          onContinue={() => {
            setShowCompletionOverlay(false);
            if (passed) {
              const streakAwarded = incrementStreak();
              if (streakAwarded) { setShowStreakOverlay(true); } else { navigate("/lessons"); }
            } else {
              navigate("/lessons");
            }
          }}
          onRetry={handleRetry}
          onBack={() => navigate("/lessons")}
        />
      );
    }

    if (showStreakOverlay) {
      return <StreakScreen currentStreak={streak} onContinue={() => navigate("/lessons")} />;
    }

    return null;
  }

  // ── Loading guard ──────────────────────────────────────────────────────────
  if (!lessonState && !quizFinished) {
    return (
      <div
        className="relative min-h-screen w-full overflow-hidden flex items-center justify-center"
        style={{ backgroundImage: "linear-gradient(166.791deg, rgb(44, 52, 56) 14.367%, rgb(46, 57, 62) 147.74%)" }}
      >
        <p className="font-['Roboto_Condensed:Bold',sans-serif] font-bold text-[#f4f5fc] text-[24px]">Загрузка...</p>
      </div>
    );
  }

  // Guard: if quiz bank not found, show error instead of crashing
  if (!QUIZ_QUESTIONS || QUIZ_QUESTIONS.length === 0) {
    return (
      <div
        className="relative min-h-screen w-full overflow-hidden flex items-center justify-center"
        style={{ backgroundImage: "linear-gradient(166.791deg, rgb(44, 52, 56) 14.367%, rgb(46, 57, 62) 147.74%)" }}
      >
        <div className="flex flex-col items-center gap-[16px]">
          <p className="font-['Roboto_Condensed:Bold',sans-serif] font-bold text-[#f4f5fc] text-[24px]">Квиз не найден</p>
          <p className="font-['Roboto_Condensed:Medium',sans-serif] font-medium text-[#798589] text-[18px]">quizId: {quizId}</p>
          <button
            onClick={() => navigate("/lessons")}
            className="mt-[12px] bg-[#ff6b21] text-[#f4f5fc] px-[24px] py-[12px] rounded-[12px] font-['Roboto_Condensed:Medium',sans-serif] font-medium text-[18px] cursor-pointer"
          >
            Вернуться
          </button>
        </div>
      </div>
    );
  }

  const currentQuestionIndex = lessonState.currentQuestionIndex;
  const currentQuestion = QUIZ_QUESTIONS[currentQuestionIndex];
  const currentQuestionId = `${quizId}-q${currentQuestionIndex}`;
  // Define questionType early so the card pre-computations below can use it
  const questionType = (currentQuestion as any).type || "single_choice";

  // ── XP per question type (large quizzes only) ──────────────────────────────
  const XP_BY_TYPE: Record<string, number> = {
    compare_ui:      15,  // выбор между 2 карточками
    single_choice:   25,  // выбор из 4 вариантов
    multiple_select: 25,  // мультивыбор из 4 вариантов
    matching:        30,  // соединить пары (Connect)
  };
  const questionXp = XP_BY_TYPE[questionType] ?? 25;

  // Pre-compute compare options with Figma cards injected for quiz_contrast
  // Cards from Контраст-443-3475 in top-to-bottom Figma order
  const CONTRAST_CARDS: Record<number, Record<string, React.ReactNode>> = {
    0: { А: <CQCompare1A />, Б: <CQCompare1B /> }, // Q1: article light vs dark text; correct: Б
    1: { А: <CQCompare2A />, Б: <CQCompare2B /> }, // Q2: all-blue vs hierarchy; correct: Б
    2: { А: <CQCompare3A />, Б: <CQCompare3B /> }, // Q3: plain links vs blue links; correct: Б
  };

  // Color compare cards (Q1 correct=А, Q2 correct=Б, Q3 correct=А)
  const COLOR_COMPARE_CARDS: Record<number, Record<string, React.ReactNode>> = {
    0: { А: <CQColorCompare1A />, Б: <CQColorCompare1B /> },
    1: { А: <CQColorCompare2A />, Б: <CQColorCompare2B /> },
    2: { А: <CQColorCompare3A />, Б: <CQColorCompare3B /> },
  };

  // Hierarchy compare cards (Q1-Q3 all correct=Б)
  const HIER_COMPARE_CARDS: Record<number, Record<string, React.ReactNode>> = {
    0: { А: <CQHierCompare1A />, Б: <CQHierCompare1B /> },
    1: { А: <CQHierCompare2A />, Б: <CQHierCompare2B /> },
    2: { А: <CQHierCompare3A />, Б: <CQHierCompare3B /> },
  };

  // Module 2 compare cards (all correct=Б)
  const UX_COMPARE_CARDS: Record<number, Record<string, React.ReactNode>> = {
    0: { А: <CQUxCompare1A />, Б: <CQUxCompare1B /> },
    1: { А: <CQUxCompare2A />, Б: <CQUxCompare2B /> },
    2: { А: <CQUxCompare3A />, Б: <CQUxCompare3B /> },
  };
  const FLOW_COMPARE_CARDS: Record<number, Record<string, React.ReactNode>> = {
    0: { А: <CQFlowCompare1A />, Б: <CQFlowCompare1B /> },
    1: { А: <CQFlowCompare2A />, Б: <CQFlowCompare2B /> },
    2: { А: <CQFlowCompare3A />, Б: <CQFlowCompare3B /> },
  };
  const STRUCT_COMPARE_CARDS: Record<number, Record<string, React.ReactNode>> = {
    0: { А: <CQStructCompare1A />, Б: <CQStructCompare1B /> },
    1: { А: <CQStructCompare2A />, Б: <CQStructCompare2B /> },
    2: { А: <CQStructCompare3A />, Б: <CQStructCompare3B /> },
  };
  const ELEM_COMPARE_CARDS: Record<number, Record<string, React.ReactNode>> = {
    0: { А: <CQElemCompare1A />, Б: <CQElemCompare1B /> },
    1: { А: <CQElemCompare2A />, Б: <CQElemCompare2B /> },
    2: { А: <CQElemCompare3A />, Б: <CQElemCompare3B /> },
  };
  const ERR_COMPARE_CARDS: Record<number, Record<string, React.ReactNode>> = {
    0: { А: <CQErrCompare1A />, Б: <CQErrCompare1B /> },
    1: { А: <CQErrCompare2A />, Б: <CQErrCompare2B /> },
    2: { А: <CQErrCompare3A />, Б: <CQErrCompare3B /> },
  };

  // Module 3 compare cards (all correct=Б)
  const GRID_COMPARE_CARDS: Record<number, Record<string, React.ReactNode>> = {
    0: { А: <CQGridCompare1A />, Б: <CQGridCompare1B /> },
    1: { А: <CQGridCompare2A />, Б: <CQGridCompare2B /> },
    2: { А: <CQGridCompare3A />, Б: <CQGridCompare3B /> },
  };
  const FIGMA_COMPARE_CARDS: Record<number, Record<string, React.ReactNode>> = {
    0: { А: <CQFigmaCompare1A />, Б: <CQFigmaCompare1B /> },
    1: { А: <CQFigmaCompare2A />, Б: <CQFigmaCompare2B /> },
    2: { А: <CQFigmaCompare3A />, Б: <CQFigmaCompare3B /> },
  };
  const KIT_COMPARE_CARDS: Record<number, Record<string, React.ReactNode>> = {
    0: { А: <CQKitCompare1A />, Б: <CQKitCompare1B /> },
    1: { А: <CQKitCompare2A />, Б: <CQKitCompare2B /> },
    2: { А: <CQKitCompare3A />, Б: <CQKitCompare3B /> },
  };
  const UI_ELEM_COMPARE_CARDS: Record<number, Record<string, React.ReactNode>> = {
    0: { А: <CQUiElemCompare1A />, Б: <CQUiElemCompare1B /> },
    1: { А: <CQUiElemCompare2A />, Б: <CQUiElemCompare2B /> },
    2: { А: <CQUiElemCompare3A />, Б: <CQUiElemCompare3B /> },
  };
  const WHAT_IS_KIT_COMPARE_CARDS: Record<number, Record<string, React.ReactNode>> = {
    0: { А: <CQWhKitCompare1A />, Б: <CQWhKitCompare1B /> },
    1: { А: <CQWhKitCompare2A />, Б: <CQWhKitCompare2B /> },
    2: { А: <CQWhKitCompare3A />, Б: <CQWhKitCompare3B /> },
  };

  const compareUiOptions: any[] = (() => {
    const raw = (currentQuestion as any)?.compareOptions ?? [];
    if (questionType === "compare_ui" && raw.length === 0) {
      console.error("[LessonQuizPage] compare_ui question is missing compareOptions!", currentQuestion);
    }
    const cqIdx = QUIZ_QUESTIONS
      .slice(0, currentQuestionIndex)
      .filter((q: any) => q.type === "compare_ui").length;

    let cards: Record<string, React.ReactNode> | undefined;
    if (quizId === "quiz_contrast") cards = CONTRAST_CARDS[cqIdx];
    else if (quizId === "quiz_color") cards = COLOR_COMPARE_CARDS[cqIdx];
    else if (quizId === "quiz_hierarchy") cards = HIER_COMPARE_CARDS[cqIdx];
    else if (quizId === "quiz_what_is_ux") cards = UX_COMPARE_CARDS[cqIdx];
    else if (quizId === "quiz_user_flow") cards = FLOW_COMPARE_CARDS[cqIdx];
    else if (quizId === "quiz_interface_structure") cards = STRUCT_COMPARE_CARDS[cqIdx];
    else if (quizId === "quiz_interface_elements") cards = ELEM_COMPARE_CARDS[cqIdx];
    else if (quizId === "quiz_ux_errors") cards = ERR_COMPARE_CARDS[cqIdx];
    else if (quizId === "quiz_element_states") cards = GRID_COMPARE_CARDS[cqIdx];
    else if (quizId === "quiz_figma_components") cards = FIGMA_COMPARE_CARDS[cqIdx];
    else if (quizId === "quiz_creating_ui_kit") cards = KIT_COMPARE_CARDS[cqIdx];
    else if (quizId === "quiz_ui_elements") cards = UI_ELEM_COMPARE_CARDS[cqIdx];
    else if (quizId === "quiz_what_is_ui_kit") cards = WHAT_IS_KIT_COMPARE_CARDS[cqIdx];

    if (!cards) return raw;
    return raw.map((opt: any) => ({ ...opt, content: cards![opt.label] ?? undefined }));
  })();

  // Pre-compute left Figma card for single_choice questions
  const singleLeftCard: React.ReactNode | null = (() => {
    if (questionType !== "single_choice") return null;
    const idx = QUIZ_QUESTIONS
      .slice(0, currentQuestionIndex)
      .filter((q: any) => q.type === "single_choice").length;

    if (quizId === "quiz_contrast") {
      const map: Record<number, React.ReactNode> = {
        0: <CQSingle1 />,
        1: <CQSingle2 />,
        2: <CQSingle3 />,
      };
      return map[idx] ?? null;
    }
    if (quizId === "quiz_color") {
      const map: Record<number, React.ReactNode> = {
        0: <CQColorSingle1 />,
        1: <CQColorSingle2 />,
        2: <CQColorSingle3 />,
      };
      return map[idx] ?? null;
    }
    if (quizId === "quiz_hierarchy") {
      const map: Record<number, React.ReactNode> = {
        0: <CQHierSingle1 />,
        1: <CQHierSingle2 />,
        2: <CQHierSingle3 />,
      };
      return map[idx] ?? null;
    }
    if (quizId === "quiz_what_is_ux") {
      const map: Record<number, React.ReactNode> = {
        0: <CQUxSingle1 />,
        1: <CQUxSingle2 />,
        2: <CQUxSingle3 />,
      };
      return map[idx] ?? null;
    }
    if (quizId === "quiz_user_flow") {
      const map: Record<number, React.ReactNode> = {
        0: <CQFlowSingle1 />,
        1: <CQFlowSingle2 />,
        2: <CQFlowSingle3 />,
      };
      return map[idx] ?? null;
    }
    if (quizId === "quiz_interface_structure") {
      const map: Record<number, React.ReactNode> = {
        0: <CQStructSingle1 />,
        1: <CQStructSingle2 />,
        2: <CQStructSingle3 />,
      };
      return map[idx] ?? null;
    }
    if (quizId === "quiz_interface_elements") {
      const map: Record<number, React.ReactNode> = {
        0: <CQElemSingle1 />,
        1: <CQElemSingle2 />,
        2: <CQElemSingle3 />,
      };
      return map[idx] ?? null;
    }
    if (quizId === "quiz_ux_errors") {
      const map: Record<number, React.ReactNode> = {
        0: <CQErrSingle1 />,
        1: <CQErrSingle2 />,
        2: <CQErrSingle3 />,
      };
      return map[idx] ?? null;
    }
    if (quizId === "quiz_element_states") {
      const map: Record<number, React.ReactNode> = {
        0: <CQGridSingle1 />,
        1: <CQGridSingle2 />,
        2: <CQGridSingle3 />,
      };
      return map[idx] ?? null;
    }
    if (quizId === "quiz_figma_components") {
      const map: Record<number, React.ReactNode> = {
        0: <CQFigmaSingle1 />,
        1: <CQFigmaSingle2 />,
        2: <CQFigmaSingle3 />,
      };
      return map[idx] ?? null;
    }
    if (quizId === "quiz_creating_ui_kit") {
      const map: Record<number, React.ReactNode> = {
        0: <CQKitSingle1 />,
        1: <CQKitSingle2 />,
        2: <CQKitSingle3 />,
      };
      return map[idx] ?? null;
    }
    if (quizId === "quiz_ui_elements") {
      const map: Record<number, React.ReactNode> = {
        0: <CQUiElemSingle1 />,
        1: <CQUiElemSingle2 />,
        2: <CQUiElemSingle3 />,
      };
      return map[idx] ?? null;
    }
    if (quizId === "quiz_what_is_ui_kit") {
      const map: Record<number, React.ReactNode> = {
        0: <CQWhKitSingle1 />,
        1: <CQWhKitSingle2 />,
        2: <CQWhKitSingle3 />,
      };
      return map[idx] ?? null;
    }
    return null;
  })();

  // Pre-compute left Figma card for multiple_select questions
  const multiLeftContent: React.ReactNode | null = (() => {
    if (questionType !== "multiple_select") return null;
    const idx = QUIZ_QUESTIONS
      .slice(0, currentQuestionIndex)
      .filter((q: any) => q.type === "multiple_select").length;

    if (quizId === "quiz_contrast") {
      const map: Record<number, React.ReactNode> = {
        0: <CQMulti1 />,
        1: <CQMulti2 />,
        2: <CQMulti3 />,
      };
      return map[idx] ?? null;
    }
    if (quizId === "quiz_color") {
      const map: Record<number, React.ReactNode> = {
        0: <CQColorMulti1 />,
        1: <CQColorMulti2 />,
        2: <CQColorMulti3 />,
      };
      return map[idx] ?? null;
    }
    if (quizId === "quiz_hierarchy") {
      const map: Record<number, React.ReactNode> = {
        0: <CQHierMulti1 />,
        1: <CQHierMulti2 />,
        2: <CQHierMulti3 />,
      };
      return map[idx] ?? null;
    }
    if (quizId === "quiz_what_is_ux") {
      const map: Record<number, React.ReactNode> = {
        0: <CQUxMulti1 />,
        1: <CQUxMulti2 />,
        2: <CQUxMulti3 />,
      };
      return map[idx] ?? null;
    }
    if (quizId === "quiz_user_flow") {
      const map: Record<number, React.ReactNode> = {
        0: <CQFlowMulti1 />,
        1: <CQFlowMulti2 />,
        2: <CQFlowMulti3 />,
      };
      return map[idx] ?? null;
    }
    if (quizId === "quiz_interface_structure") {
      const map: Record<number, React.ReactNode> = {
        0: <CQStructMulti1 />,
        1: <CQStructMulti2 />,
        2: <CQStructMulti3 />,
      };
      return map[idx] ?? null;
    }
    if (quizId === "quiz_interface_elements") {
      const map: Record<number, React.ReactNode> = {
        0: <CQElemMulti1 />,
        1: <CQElemMulti2 />,
        2: <CQElemMulti3 />,
      };
      return map[idx] ?? null;
    }
    if (quizId === "quiz_ux_errors") {
      const map: Record<number, React.ReactNode> = {
        0: <CQErrMulti1 />,
        1: <CQErrMulti2 />,
        2: <CQErrMulti3 />,
      };
      return map[idx] ?? null;
    }
    if (quizId === "quiz_element_states") {
      const map: Record<number, React.ReactNode> = {
        0: <CQGridMulti1 />,
        1: <CQGridMulti2 />,
        2: <CQGridMulti3 />,
      };
      return map[idx] ?? null;
    }
    if (quizId === "quiz_figma_components") {
      const map: Record<number, React.ReactNode> = {
        0: <CQFigmaMulti1 />,
        1: <CQFigmaMulti2 />,
        2: <CQFigmaMulti3 />,
      };
      return map[idx] ?? null;
    }
    if (quizId === "quiz_creating_ui_kit") {
      const map: Record<number, React.ReactNode> = {
        0: <CQKitMulti1 />,
        1: <CQKitMulti2 />,
        2: <CQKitMulti3 />,
      };
      return map[idx] ?? null;
    }
    if (quizId === "quiz_what_is_ui_kit") {
      const map: Record<number, React.ReactNode> = {
        0: <CQWhKitMulti1 />,
        1: <CQWhKitMulti2 />,
        2: <CQWhKitMulti3 />,
      };
      return map[idx] ?? null;
    }
    if (quizId === "quiz_ui_elements") {
      const map: Record<number, React.ReactNode> = {
        0: <CQUiElemMulti1 />,
        1: <CQUiElemMulti2 />,
        2: <CQUiElemMulti3 />,
      };
      return map[idx] ?? null;
    }
    return null;
  })();

  // Pre-compute augmented matching pairs with Figma UI nodes for top cards
  const augmentedMatchingPairs = (() => {
    const raw = (currentQuestion as any)?.pairs ?? [];
    if (questionType !== "matching") return raw;
    const idx = QUIZ_QUESTIONS
      .slice(0, currentQuestionIndex)
      .filter((q: any) => q.type === "matching").length;

    // ── quiz_contrast ──────────────────────────────────────────────────────
    if (quizId === "quiz_contrast") {
      const nodeMaps: Record<number, Record<string, React.ReactNode>> = {
        0: { heading: <CQConn1C />, cta: <CQConn1B />, caption: <CQConn1A /> },
        1: { size: <CQConn2A />, color: <CQConn2B />, weight: <CQConn2C /> },
        2: { high: <CQConn3A />, medium: <CQConn3B />, low: <CQConn3C /> },
      };
      const nodeMap = nodeMaps[idx];
      if (!nodeMap) return raw;
      return raw.map((pair: any) => ({ ...pair, node: nodeMap[pair.id] ?? undefined }));
    }

    // ── quiz_color ─────────────────────────────────────────────────────────
    if (quizId === "quiz_color") {
      const nodeMaps: Record<number, Record<string, React.ReactNode>> = {
        0: { primary: <CQColorConn1A />, accent: <CQColorConn1B />, neutral: <CQColorConn1C /> },
        1: { error: <CQColorConn2A />, success: <CQColorConn2B />, warning: <CQColorConn2C /> },
        2: { rule60: <CQColorConn3A />, semantic: <CQColorConn3B />, harmony: <CQColorConn3C /> },
      };
      const nodeMap = nodeMaps[idx];
      if (!nodeMap) return raw;
      return raw.map((pair: any) => ({ ...pair, node: nodeMap[pair.id] ?? undefined }));
    }

    // ── quiz_hierarchy ─────────────────────────────────────────────────────
    if (quizId === "quiz_hierarchy") {
      const nodeMaps: Record<number, Record<string, React.ReactNode>> = {
        0: { size: <CQHierConn1A />, position: <CQHierConn1B />, contrast: <CQHierConn1C /> },
        1: { h1: <CQHierConn2A />, h2: <CQHierConn2B />, body: <CQHierConn2C /> },
        2: { focus: <CQHierConn3A />, grouping: <CQHierConn3B />, space: <CQHierConn3C /> },
      };
      const nodeMap = nodeMaps[idx];
      if (!nodeMap) return raw;
      return raw.map((pair: any) => ({ ...pair, node: nodeMap[pair.id] ?? undefined }));
    }

    // ── quiz_what_is_ux ────────────────────────────────────────────────────
    // Q10 pairs: button / menu / input
    // Q11 pairs: complex / navigation / overloaded
    // Q12 pairs: search / choice / finish
    if (quizId === "quiz_what_is_ux") {
      const nodeMaps: Record<number, Record<string, React.ReactNode>> = {
        0: { button: <CQUxConn1A />, menu: <CQUxConn1B />, input: <CQUxConn1C /> },
        1: { complex: <CQUxConn2A />, navigation: <CQUxConn2B />, overloaded: <CQUxConn2C /> },
        2: { search: <CQUxConn3A />, choice: <CQUxConn3B />, finish: <CQUxConn3C /> },
      };
      const nodeMap = nodeMaps[idx];
      if (!nodeMap) return raw;
      return raw.map((pair: any) => ({ ...pair, node: nodeMap[pair.id] ?? undefined }));
    }

    // ── quiz_user_flow ─────────────────────────────────────────────────────
    // Q10 pairs: rect / diamond / oval
    // Q11 pairs: entry / exit / branch
    // Q12 pairs: screen / step / goal
    if (quizId === "quiz_user_flow") {
      const nodeMaps: Record<number, Record<string, React.ReactNode>> = {
        0: { rect: <CQFlowConn1A />, diamond: <CQFlowConn1B />, oval: <CQFlowConn1C /> },
        1: { entry: <CQFlowConn2A />, exit: <CQFlowConn2B />, branch: <CQFlowConn2C /> },
        2: { screen: <CQFlowConn3A />, step: <CQFlowConn3B />, goal: <CQFlowConn3C /> },
      };
      const nodeMap = nodeMaps[idx];
      if (!nodeMap) return raw;
      return raw.map((pair: any) => ({ ...pair, node: nodeMap[pair.id] ?? undefined }));
    }

    // ── quiz_interface_structure ───────────────────────────────────────────
    // Q10 pairs: header / content / footer
    // Q11 pairs: fpattern / zpattern / grid
    // Q12 pairs: micro / macro / padding
    if (quizId === "quiz_interface_structure") {
      const nodeMaps: Record<number, Record<string, React.ReactNode>> = {
        0: { header: <CQStructConn1A />, content: <CQStructConn1B />, footer: <CQStructConn1C /> },
        1: { fpattern: <CQStructConn2A />, zpattern: <CQStructConn2B />, grid: <CQStructConn2C /> },
        2: { micro: <CQStructConn3A />, macro: <CQStructConn3B />, padding: <CQStructConn3C /> },
      };
      const nodeMap = nodeMaps[idx];
      if (!nodeMap) return raw;
      return raw.map((pair: any) => ({ ...pair, node: nodeMap[pair.id] ?? undefined }));
    }

    // ── quiz_interface_elements ────────────────────────────────────────────
    // Q10 pairs: toggle / checkbox / tooltip
    // Q11 pairs: field / submit / check
    // Q12 pairs: default / hover / disabled
    if (quizId === "quiz_interface_elements") {
      const nodeMaps: Record<number, Record<string, React.ReactNode>> = {
        0: { toggle: <CQElemConn1A />, checkbox: <CQElemConn1B />, tooltip: <CQElemConn1C /> },
        1: { field: <CQElemConn2A />, submit: <CQElemConn2B />, check: <CQElemConn2C /> },
        2: { default: <CQElemConn3A />, hover: <CQElemConn3B />, disabled: <CQElemConn3C /> },
      };
      const nodeMap = nodeMaps[idx];
      if (!nodeMap) return raw;
      return raw.map((pair: any) => ({ ...pair, node: nodeMap[pair.id] ?? undefined }));
    }

    // ── quiz_ux_errors ─────────────────────────────────────────────────────
    // Q10 pairs: noback / nofeed / overflow
    // Q11 pairs: hidden / deadend / overload
    // Q12 pairs: noerror / complex / unclear
    if (quizId === "quiz_ux_errors") {
      const nodeMaps: Record<number, Record<string, React.ReactNode>> = {
        0: { noback: <CQErrConn1A />, nofeed: <CQErrConn1B />, overflow: <CQErrConn1C /> },
        1: { hidden: <CQErrConn2A />, deadend: <CQErrConn2B />, overload: <CQErrConn2C /> },
        2: { noerror: <CQErrConn3A />, complex: <CQErrConn3B />, unclear: <CQErrConn3C /> },
      };
      const nodeMap = nodeMaps[idx];
      if (!nodeMap) return raw;
      return raw.map((pair: any) => ({ ...pair, node: nodeMap[pair.id] ?? undefined }));
    }

    // ── quiz_element_states (Grid & Spacing) ───────────────────────────────
    // Q10 pairs: button / menu / input
    // Q11 pairs: complex / navigation / overloaded
    // Q12 pairs: search / choice / finish
    if (quizId === "quiz_element_states") {
      const nodeMaps: Record<number, Record<string, React.ReactNode>> = {
        0: { button: <CQGridConn1A />, menu: <CQGridConn1B />, input: <CQGridConn1C /> },
        1: { complex: <CQGridConn2A />, navigation: <CQGridConn2B />, overloaded: <CQGridConn2C /> },
        2: { search: <CQGridConn3A />, choice: <CQGridConn3B />, finish: <CQGridConn3C /> },
      };
      const nodeMap = nodeMaps[idx];
      if (!nodeMap) return raw;
      return raw.map((pair: any) => ({ ...pair, node: nodeMap[pair.id] ?? undefined }));
    }

    // ── quiz_figma_components ───────��──────────────────────────────────────
    // Q10 pairs: button / menu / input
    // Q11 pairs: complex / navigation / overloaded
    // Q12 pairs: search / choice / finish
    if (quizId === "quiz_figma_components") {
      const nodeMaps: Record<number, Record<string, React.ReactNode>> = {
        0: { button: <CQFigmaConn1A />, menu: <CQFigmaConn1B />, input: <CQFigmaConn1C /> },
        1: { complex: <CQFigmaConn2A />, navigation: <CQFigmaConn2B />, overloaded: <CQFigmaConn2C /> },
        2: { search: <CQFigmaConn3A />, choice: <CQFigmaConn3B />, finish: <CQFigmaConn3C /> },
      };
      const nodeMap = nodeMaps[idx];
      if (!nodeMap) return raw;
      return raw.map((pair: any) => ({ ...pair, node: nodeMap[pair.id] ?? undefined }));
    }

    // ── quiz_creating_ui_kit ───────────────────────────────────────────────
    // Q10 pairs: button / menu / input
    // Q11 pairs: complex / navigation / overloaded
    // Q12 pairs: search / choice / finish
    if (quizId === "quiz_creating_ui_kit") {
      const nodeMaps: Record<number, Record<string, React.ReactNode>> = {
        0: { button: <CQKitConn1A />, menu: <CQKitConn1B />, input: <CQKitConn1C /> },
        1: { complex: <CQKitConn2A />, navigation: <CQKitConn2B />, overloaded: <CQKitConn2C /> },
        2: { search: <CQKitConn3A />, choice: <CQKitConn3B />, finish: <CQKitConn3C /> },
      };
      const nodeMap = nodeMaps[idx];
      if (!nodeMap) return raw;
      return raw.map((pair: any) => ({ ...pair, node: nodeMap[pair.id] ?? undefined }));
    }

    // ── quiz_ui_elements ───────────────────────────────────────────────────
    // Q10 pairs: button (CQUiElemConn1A) / menu (CQUiElemConn1B) / input (text fallback)
    // Q11 pairs: complex / navigation / overloaded (all visual nodes)
    // Q12 pairs: search / choice / finish (all text fallback)
    if (quizId === "quiz_ui_elements") {
      const nodeMaps: Record<number, Record<string, React.ReactNode>> = {
        0: { button: <CQUiElemConn1A />, menu: <CQUiElemConn1B /> },
        1: { complex: <CQUiElemConn2A />, navigation: <CQUiElemConn2B />, overloaded: <CQUiElemConn2C /> },
      };
      const nodeMap = nodeMaps[idx];
      if (!nodeMap) return raw;
      return raw.map((pair: any) => ({ ...pair, node: nodeMap[pair.id] ?? undefined }));
    }

    // ── quiz_what_is_ui_kit ────────────────────────────────────────────────
    // Q10 pairs: button / menu / input
    // Q11 pairs: complex / navigation / overloaded
    // Q12 pairs: search / choice / finish
    if (quizId === "quiz_what_is_ui_kit") {
      const nodeMaps: Record<number, Record<string, React.ReactNode>> = {
        0: { button: <CQWhKitConn1A />, menu: <CQWhKitConn1B />, input: <CQWhKitConn1C /> },
        1: { complex: <CQWhKitConn2A />, navigation: <CQWhKitConn2B />, overloaded: <CQWhKitConn2C /> },
        2: { search: <CQWhKitConn3A />, choice: <CQWhKitConn3B />, finish: <CQWhKitConn3C /> },
      };
      const nodeMap = nodeMaps[idx];
      if (!nodeMap) return raw;
      return raw.map((pair: any) => ({ ...pair, node: nodeMap[pair.id] ?? undefined }));
    }

    return raw;
  })();

  const runProgressPercent = (runAnsweredQuestions / totalQuestions) * 100;
  const xpAlreadyAwarded = lessonProgress?.questions?.[currentQuestionId]?.xpAwarded || false;
  const isCorrect = selection === ((currentQuestion as any).correctAnswer ?? "");

  // ── Streak visual styles (computed from state) ─────────────────────────────
  const streakFill = currentStreak >= 7
    ? { background: "linear-gradient(180deg, #b06ef5, #7c3aed)" }
    : currentStreak >= 5
    ? { background: "linear-gradient(180deg, #00d043, #007a28)" }
    : currentStreak >= 3
    ? { background: "linear-gradient(180deg, #ffd700, #b8960f)" }
    : { background: "linear-gradient(180deg, #ff6b21, #994014)" };
  const streakFilter = currentStreak >= 7
    ? "drop-shadow(0 0 7px rgba(176,110,245,0.8))"
    : currentStreak >= 5
    ? "drop-shadow(0 0 5px rgba(0,208,67,0.65))"
    : currentStreak >= 3
    ? "drop-shadow(0 0 4px rgba(255,215,0,0.55))"
    : "none";
  const streakTextColor = currentStreak >= 7 ? "#c084fc" : currentStreak >= 5 ? "#00d043" : currentStreak >= 3 ? "#ffd700" : "#FFB121";

  const handleSelect = (card: "А" | "Б" | "В" | "Г") => {
    if (phase === "feedback") return;
    setSelection(card);
  };

  const handleContinue = () => {
    if (phase === "selecting") {
      // ── Streak update ──────────────────────────────────────────────────────
      let newStreak = 0;
      if (isCorrect) {
        newStreak = currentStreak + 1;
        setCurrentStreak(newStreak);
        setBestStreak((prev) => Math.max(prev, newStreak));
        setStreakBump(true);
        setTimeout(() => setStreakBump(false), 350);
      } else {
        setCurrentStreak(0);
      }
      // XP multiplier from streak
      const streakMult = newStreak >= 7 ? 1.5 : newStreak >= 5 ? 1.25 : newStreak >= 3 ? 1.1 : 1;
      const bonusXp = Math.round(questionXp * streakMult);
      // Store answer locally — do NOT write to UserContext yet
      runAnswers.current.push({ questionId: currentQuestionId, isCorrect, xpValue: isCorrect ? bonusXp : questionXp });
      // Show XP feedback locally based on correctness + whether XP was already awarded in a previous run
      const earnedXpLocal = isCorrect && !xpAlreadyAwarded ? bonusXp : 0;
      setEarnedXP(earnedXpLocal);
      setRunAnsweredQuestions((prev) => prev + 1);
      if (isCorrect) {
        runCorrectRef.current += 1;
        setRunCorrectAnswers(runCorrectRef.current);
        // Only add temporary XP if not already awarded in a previous run
        if (!xpAlreadyAwarded) {
          setTemporaryQuizXp((prev) => prev + bonusXp);
        }
      }
      setPhase("feedback");
      try {
        const ctx = new AudioContext();
        const o = ctx.createOscillator();
        o.type = "sine";
        const g = ctx.createGain();
        if (isCorrect) {
          const topFreq = newStreak >= 7 ? 1047 : newStreak >= 5 ? 880 : 784;
          const dur = newStreak >= 5 ? 0.4 : 0.3;
          o.frequency.setValueAtTime(523, ctx.currentTime);
          o.frequency.setValueAtTime(659, ctx.currentTime + 0.1);
          o.frequency.setValueAtTime(topFreq, ctx.currentTime + 0.2);
          g.gain.setValueAtTime(0.15 + (newStreak >= 3 ? 0.03 : 0), ctx.currentTime);
          g.gain.exponentialRampToValueAtTime(0.001, ctx.currentTime + dur);
          o.connect(g); g.connect(ctx.destination);
          o.start(); o.stop(ctx.currentTime + dur);
        } else {
          o.frequency.setValueAtTime(280, ctx.currentTime);
          o.frequency.exponentialRampToValueAtTime(220, ctx.currentTime + 0.15);
          g.gain.setValueAtTime(0.08, ctx.currentTime);
          g.gain.exponentialRampToValueAtTime(0.001, ctx.currentTime + 0.15);
          o.connect(g); g.connect(ctx.destination);
          o.start(); o.stop(ctx.currentTime + 0.15);
        }
      } catch (_) {}
    } else {
      if (currentQuestionIndex < totalQuestions - 1) {
        nextQuestion();
        setSelection(null);
        setPhase("selecting");
        setEarnedXP(0);
      } else {
        // Quiz complete — now persist all answers to UserContext at once
        for (const { questionId, isCorrect: correct, xpValue } of runAnswers.current) {
          answerQuestion(questionId, correct, xpValue);
        }
        const finalRunCorrect = runCorrectRef.current;
        saveBestScore(quizId, finalRunCorrect, totalQuestions);
        console.log("[LessonQuizPage] Quiz complete (handleContinue):", {
          quizId,
          correctAnswers: finalRunCorrect,
          totalQuestions,
          threshold: Math.ceil(totalQuestions * 0.5),
          isCompleted: finalRunCorrect >= Math.ceil(totalQuestions * 0.5),
          calculatedPct: totalQuestions > 0 ? finalRunCorrect / totalQuestions : 0,
        });
        const wasAlreadyPassed = lessonProgress?.isCompleted || false;
        const isNowPassed = finalRunCorrect >= Math.ceil(totalQuestions * 0.5);
        if (isNowPassed && !wasAlreadyPassed) { completeLesson(); }
        setShowCompletionOverlay(true);
        setQuizFinished(true);
      }
    }
  };

  // ── New-type answer handlers ──────────────────────────────────────────────────

  /** Records the result of a new-type question without changing phase/selection */
  const handleAnswerNewType = (isCorrect: boolean) => {
    // ── Streak update ──────────────────────────────────────────────────────
    let newStreak = 0;
    if (isCorrect) {
      newStreak = currentStreak + 1;
      setCurrentStreak(newStreak);
      setBestStreak((prev) => Math.max(prev, newStreak));
      setStreakBump(true);
      setTimeout(() => setStreakBump(false), 350);
    } else {
      setCurrentStreak(0);
    }
    const streakMult = newStreak >= 7 ? 1.5 : newStreak >= 5 ? 1.25 : newStreak >= 3 ? 1.1 : 1;
    const bonusXp = Math.round(questionXp * streakMult);
    runAnswers.current.push({ questionId: currentQuestionId, isCorrect, xpValue: isCorrect ? bonusXp : questionXp });
    const earnedXpLocal = isCorrect && !xpAlreadyAwarded ? bonusXp : 0;
    setEarnedXP(earnedXpLocal);
    setRunAnsweredQuestions((prev) => prev + 1);
    if (isCorrect) {
      runCorrectRef.current += 1;
      setRunCorrectAnswers(runCorrectRef.current);
      if (!xpAlreadyAwarded) setTemporaryQuizXp((prev) => prev + bonusXp);
    }
    try {
      const ctx = new AudioContext();
      const o = ctx.createOscillator();
      o.type = "sine";
      const g = ctx.createGain();
      if (isCorrect) {
        const topFreq = newStreak >= 7 ? 1047 : newStreak >= 5 ? 880 : 784;
        const dur = newStreak >= 5 ? 0.4 : 0.3;
        o.frequency.setValueAtTime(523, ctx.currentTime);
        o.frequency.setValueAtTime(659, ctx.currentTime + 0.1);
        o.frequency.setValueAtTime(topFreq, ctx.currentTime + 0.2);
        g.gain.setValueAtTime(0.15 + (newStreak >= 3 ? 0.03 : 0), ctx.currentTime);
        g.gain.exponentialRampToValueAtTime(0.001, ctx.currentTime + dur);
        o.connect(g); g.connect(ctx.destination);
        o.start(); o.stop(ctx.currentTime + dur);
      } else {
        o.frequency.setValueAtTime(280, ctx.currentTime);
        o.frequency.exponentialRampToValueAtTime(220, ctx.currentTime + 0.15);
        g.gain.setValueAtTime(0.08, ctx.currentTime);
        g.gain.exponentialRampToValueAtTime(0.001, ctx.currentTime + 0.15);
        o.connect(g); g.connect(ctx.destination);
        o.start(); o.stop(ctx.currentTime + 0.15);
      }
    } catch (_) {}
  };

  /** Moves to the next question or finishes the quiz */
  const handleProceedNewType = () => {
    if (currentQuestionIndex < totalQuestions - 1) {
      nextQuestion();
      setSelection(null);
      setPhase("selecting");
      setEarnedXP(0);
    } else {
      for (const { questionId, isCorrect: correct, xpValue } of runAnswers.current) {
        answerQuestion(questionId, correct, xpValue);
      }
      const finalRunCorrect = runCorrectRef.current;
      saveBestScore(quizId, finalRunCorrect, totalQuestions);
      console.log("[LessonQuizPage] Quiz complete (handleProceedNewType):", {
        quizId,
        correctAnswers: finalRunCorrect,
        totalQuestions,
        threshold: Math.ceil(totalQuestions * 0.5),
        isCompleted: finalRunCorrect >= Math.ceil(totalQuestions * 0.5),
        calculatedPct: totalQuestions > 0 ? finalRunCorrect / totalQuestions : 0,
      });
      const wasAlreadyPassed = lessonProgress?.isCompleted || false;
      const isNowPassed = finalRunCorrect >= Math.ceil(totalQuestions * 0.5);
      if (isNowPassed && !wasAlreadyPassed) { completeLesson(); }
      setShowCompletionOverlay(true);
      setQuizFinished(true);
    }
  };

  const getCardState = (card: "А" | "Б" | "В" | "Г"): CardState => {
    if (phase === "selecting") return selection === card ? "selected" : "idle";
    if (card === ((currentQuestion as any).correctAnswer ?? "")) return "correct";
    if (selection === card) return "incorrect";
    return "dimmed";
  };

  const totalXp = xp + temporaryQuizXp;

  return (
    <PageTransition>
      <div
        className="relative min-h-screen w-full overflow-hidden"
        style={{ backgroundImage: "linear-gradient(166.791deg, rgb(44, 52, 56) 14.367%, rgb(46, 57, 62) 147.74%)" }}
      >
        {showExitModal && (
          <ExitConfirmationModal
            onContinue={() => setShowExitModal(false)}
            onExit={() => { exitLesson(); navigate("/lessons"); }}
          />
        )}

        {/* ZONE 1 — Top controls */}
        {/* Mobile: one fixed row — X | progress | XP */}
        {isMobile ? (
          <div className="fixed top-0 left-0 right-0 z-10 flex items-center gap-[10px] px-[14px]" style={{ height: 44 }}>
            <CloseButton onClick={() => setShowExitModal(true)} mobile />
            <div className="flex-1 relative h-[10px]">
              {/* Bar — centered with CloseButton and XP */}
              <div className="absolute inset-0 bg-[#465256] rounded-[9999px]">
                <div
                  className="h-full rounded-[9999px]"
                  style={{ width: `${runProgressPercent}%`, ...streakFill, filter: streakFilter, transition: "width 300ms ease, background 500ms ease, filter 500ms ease" }}
                />
              </div>
              {/* Streak text — 5px below bar, follows fill, clipped to bar bounds */}
              <div className="absolute left-0 right-0 overflow-hidden" style={{ top: "calc(100% + 5px)", height: 11, opacity: currentStreak >= 2 && !quizFinished ? 1 : 0, transition: "opacity 400ms ease" }}>
                <div className="absolute inset-y-0 left-0 flex items-start justify-end" style={{ width: `${runProgressPercent}%`, minWidth: 0, transition: "width 300ms ease" }}>
                  <span
                    className="font-['Roboto_Condensed:Bold',sans-serif] font-bold text-[10px] whitespace-nowrap leading-none"
                    style={{ color: streakTextColor, textShadow: currentStreak >= 3 ? `0 0 6px ${streakTextColor}` : "none", transform: `scale(${streakBump ? 1.12 : 1})`, transformOrigin: "right top", transition: "transform 200ms ease, text-shadow 500ms ease" }}
                  >{currentStreak} подряд</span>
                </div>
              </div>
            </div>
            <div className="flex gap-[4px] items-center shrink-0">
              <div className="relative shrink-0 size-[18px]">
                <svg className="absolute block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 24 24">
                  <g id="Zap"><path d={svgPaths.p9530000} fill="#798589" stroke="#798589" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.33333" /></g>
                </svg>
              </div>
              <p className="font-['Roboto_Condensed:ExtraBold',sans-serif] font-extrabold leading-[21px] text-[#798589] whitespace-nowrap text-[18px]">{totalXp}</p>
            </div>
          </div>
        ) : (
          <>
            <div className="fixed top-[15px] left-[22px] z-10">
              <CloseButton onClick={() => setShowExitModal(true)} />
            </div>
            <div className="fixed z-10 top-[35.5px] left-1/2 -translate-x-1/2 w-[1042px]">
              <div className="bg-[#465256] relative rounded-[9999px] w-full h-[17px]">
                <div className="rounded-[24px] h-[17px]" style={{ width: `${runProgressPercent}%`, ...streakFill, filter: streakFilter, transition: "width 300ms ease, background 500ms ease, filter 500ms ease" }} />
              </div>
              {/* Streak text — follows fill, 5px below bar */}
              <div className="relative overflow-hidden mt-[5px]" style={{ height: 15, opacity: currentStreak >= 2 && !quizFinished ? 1 : 0, transition: "opacity 400ms ease" }}>
                <div className="absolute inset-y-0 left-0 flex items-start justify-end" style={{ width: `${runProgressPercent}%`, minWidth: 0, transition: "width 300ms ease" }}>
                  <span
                    className="font-['Roboto_Condensed:Bold',sans-serif] font-bold text-[13px] whitespace-nowrap leading-none"
                    style={{ color: streakTextColor, textShadow: currentStreak >= 3 ? `0 0 6px ${streakTextColor}` : "none", transform: `scale(${streakBump ? 1.12 : 1})`, transformOrigin: "right top", transition: "transform 200ms ease, text-shadow 500ms ease" }}
                  >{currentStreak} подряд</span>
                </div>
              </div>
            </div>
            <div className="fixed z-10 flex gap-[4px] items-center top-[32px] right-[23px]">
              <div className="relative shrink-0 size-[24px]">
                <svg className="absolute block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 24 24">
                  <g id="Zap"><path d={svgPaths.p9530000} fill="#798589" stroke="#798589" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.33333" /></g>
                </svg>
              </div>
              <p className="font-['Roboto_Condensed:ExtraBold',sans-serif] font-extrabold leading-[21px] text-[#798589] whitespace-nowrap text-[24px]">{totalXp}</p>
            </div>
          </>
        )}

        {/* Error report — desktop only */}
        {!isMobile && (
          <p className="fixed bottom-[20px] left-[28px] z-10 font-['Roboto_Condensed:Medium',sans-serif] font-medium leading-[20px] text-[#777982] text-[16px] whitespace-nowrap cursor-pointer hover:text-[#a0a3ab] transition-colors duration-150">
            Сообщить об ошибке
          </p>
        )}

        {/* ZONE 2+3 — conditional on question type */}
        {questionType === "multiple_select" ? (
          <div className={`w-full min-h-screen flex flex-col items-center ${isMobile ? "pt-[44px] pb-[140px]" : "pt-[80px] pb-[120px]"}`}>
            <div className={`flex-1 flex flex-col items-center w-full ${isMobile ? "justify-start pt-[10px]" : "justify-center gap-[52px]"}`}>
              <MultipleChoiceQuiz
                key={currentQuestionIndex}
                question={(currentQuestion as any).question}
                subtitle={(currentQuestion as any).subtitle}
                options={(currentQuestion as any).options ?? []}
                correctAnswers={(currentQuestion as any).correctAnswers ?? []}
                explanation={(currentQuestion as any).explanation}
                onAnswer={handleAnswerNewType}
                onContinue={handleProceedNewType}
                earnedXP={earnedXP}
                isReplay={xpAlreadyAwarded}
                leftContent={multiLeftContent || undefined}
                leftMaxScale={quizId === "quiz_ui_elements" ? 2.0 : undefined}
                leftCardMinHeight={quizId === "quiz_ui_elements" ? 460 : undefined}
              />
            </div>
          </div>
        ) : questionType === "matching" ? (
          <div className={`w-full min-h-screen flex flex-col items-center ${isMobile ? "pt-[44px] pb-[140px]" : "pt-[80px] pb-[120px]"}`}>
            <div className={`flex-1 flex flex-col items-center w-full ${isMobile ? "justify-start pt-[10px] gap-[10px]" : "justify-center gap-[52px]"}`}>
              <MatchingQuiz
                key={currentQuestionIndex}
                question={(currentQuestion as any).question}
                pairs={augmentedMatchingPairs}
                explanation={(currentQuestion as any).explanation}
                onAnswer={handleAnswerNewType}
                onContinue={handleProceedNewType}
                earnedXP={earnedXP}
              />
            </div>
          </div>
        ) : questionType === "compare_ui" ? (
          <div className={`w-full min-h-screen flex flex-col items-center ${isMobile ? "pt-[44px] pb-[140px]" : "pt-[80px] pb-[120px]"}`}>
            <div className={`flex-1 flex flex-col items-center w-full ${isMobile ? "justify-start pt-[10px]" : "justify-center gap-[52px]"}`}>
              <CompareUIQuiz
                key={currentQuestionIndex}
                question={(currentQuestion as any).question}
                compareOptions={compareUiOptions}
                correctAnswer={(currentQuestion as any).correctAnswer ?? ""}
                explanation={(currentQuestion as any).explanation}
                onAnswer={handleAnswerNewType}
                onContinue={handleProceedNewType}
                earnedXP={earnedXP}
                isReplay={xpAlreadyAwarded}
                compareCardMinHeight={430}
                compareMaxScale={1.7}
              />
            </div>
          </div>
        ) : (
          <>
            {/* ZONE 2 — Center: question + options */}
            <div className={`w-full min-h-screen flex flex-col items-center ${isMobile ? "pt-[44px] pb-[140px]" : "pt-[80px] pb-[120px]"}`}>
              <div className={`flex-1 flex flex-col items-center w-full ${isMobile ? "justify-start pt-[10px]" : "justify-center gap-[52px]"}`}>

                {isMobile ? (
                  /* ── MOBILE fixed-pixel layout ── */
                  <div className="w-full px-[16px] flex flex-col" style={{ gap: 10 }}>

                    {/* Title — 10px below via parent gap */}
                    <p className="font-['Roboto_Condensed:Bold',sans-serif] font-bold text-[22px] leading-[1.25] text-[#f4f5fc] text-center w-full">
                      {currentQuestion.question}
                    </p>

                    {/* Image card + options block — gap 10px between card and options */}
                    <div className="w-full flex flex-col" style={{ gap: 10 }}>

                      {/* Image card — 185px (small) / 215px (large) */}
                      <div
                        className="relative rounded-[15px] overflow-hidden flex-shrink-0 w-full"
                        style={{
                          height: isLargePhone ? 215 : 185,
                          background: "linear-gradient(172deg, rgb(44,53,56) 2%, rgb(56,67,72) 99%)",
                        }}
                      >
                        {singleLeftCard ? (
                          <ScaledPreview
                            naturalWidth={186}
                            naturalHeight={231}
                            paddingY={isLargePhone ? 13 : 13}
                            maxScale={1}
                          >
                            {singleLeftCard}
                          </ScaledPreview>
                        ) : (
                          <div className="w-full h-full flex items-center justify-center">
                            <div
                              className="bg-[#3a4649] rounded-[12px]"
                              style={{ width: "80%", height: isLargePhone ? 190 : 160 }}
                            />
                          </div>
                        )}
                        <div className="absolute inset-0 pointer-events-none rounded-[inherit] shadow-[inset_-4px_0px_4px_0px_#384348,inset_4px_0px_4px_0px_#384348,inset_0px_-5px_4px_0px_rgba(0,0,0,0.25),inset_0px_4px_4px_0px_rgba(0,0,0,0.25)]" />
                      </div>

                      {/* Options — 50px (small) / 60px (large), gap 10px */}
                      <div className="w-full flex flex-col" style={{ gap: 10 }}>
                        {((currentQuestion as any).options ?? []).map((option: { label: string; text: string }) => (
                          <QuizOptionCard
                            key={option.label}
                            state={getCardState(option.label as "А" | "Б" | "В" | "Г")}
                            fixedHeight={isLargePhone ? 60 : 50}
                            onClick={() => {
                              handleSelect(option.label as "А" | "Б" | "В" | "Г");
                              try { const ctx = new AudioContext(); const o = ctx.createOscillator(); o.type = "sine"; o.frequency.setValueAtTime(520, ctx.currentTime); o.frequency.exponentialRampToValueAtTime(340, ctx.currentTime + 0.05); const g = ctx.createGain(); g.gain.setValueAtTime(0.1, ctx.currentTime); g.gain.exponentialRampToValueAtTime(0.001, ctx.currentTime + 0.05); o.connect(g); g.connect(ctx.destination); o.start(); o.stop(ctx.currentTime + 0.05); } catch (_) {}
                            }}
                            text={option.text}
                            label={option.label}
                          />
                        ))}
                      </div>

                    </div>
                  </div>
                ) : (
                  /* ── DESKTOP layout ── */
                  <>
                    <div className="w-[1042px] px-[150px] min-h-[70px] flex items-center justify-center">
                      <p className="font-['Roboto_Condensed:Bold',sans-serif] font-bold text-[#f4f5fc] text-center leading-[35px] text-[32px]">
                        {currentQuestion.question}
                      </p>
                    </div>
                    <div className="content-stretch flex gap-[18px] items-stretch w-[1042px]">
                      <QuizLeftBlock
                        type="static"
                        content={singleLeftCard}
                        singleMaxScale={quizId === "quiz_ui_elements" ? 2.0 : undefined}
                        singleCardMinHeight={quizId === "quiz_ui_elements" ? 460 : undefined}
                      />
                      <div className="content-stretch flex flex-col gap-[19px] items-start relative shrink-0 w-[528px]">
                        {((currentQuestion as any).options ?? []).map((option: { label: string; text: string }) => (
                          <QuizOptionCard
                            key={option.label}
                            state={getCardState(option.label as "А" | "Б" | "В" | "Г")}
                            onClick={() => {
                              handleSelect(option.label as "А" | "Б" | "В" | "Г");
                              try { const ctx = new AudioContext(); const o = ctx.createOscillator(); o.type = "sine"; o.frequency.setValueAtTime(520, ctx.currentTime); o.frequency.exponentialRampToValueAtTime(340, ctx.currentTime + 0.05); const g = ctx.createGain(); g.gain.setValueAtTime(0.1, ctx.currentTime); g.gain.exponentialRampToValueAtTime(0.001, ctx.currentTime + 0.05); o.connect(g); g.connect(ctx.destination); o.start(); o.stop(ctx.currentTime + 0.05); } catch (_) {}
                            }}
                            text={option.text}
                            label={option.label}
                          />
                        ))}
                      </div>
                    </div>
                  </>
                )}
              </div>
            </div>

            {/* ZONE 3 — Bottom: feedback + continue */}
            {isMobile ? (
              <div className="fixed left-0 right-0 z-10 px-[16px] pt-[12px]" style={{ bottom: "max(40px, env(safe-area-inset-bottom, 40px))", paddingBottom: 12 }}>
                {phase === "feedback" && (
                  <div className="mb-[10px]">
                    {isCorrect
                      ? <CorrectFeedback explanation={(currentQuestion as any).explanation} showXp={earnedXP > 0} />
                      : <IncorrectFeedback correctAnswer={(currentQuestion as any).correctAnswer ?? ""} explanation={(currentQuestion as any).explanation} isReplay={xpAlreadyAwarded} />
                    }
                  </div>
                )}
                {phase === "selecting"
                  ? selection === null ? <ContinueDisabled fullWidth /> : <ContinueActive onClick={handleContinue} fullWidth />
                  : isCorrect ? <ContinueCorrect onClick={handleContinue} fullWidth /> : <ContinueActive onClick={handleContinue} fullWidth />
                }
              </div>
            ) : (
              <div className="fixed bottom-[20px] left-0 right-0 z-10 flex justify-center">
                <div className="flex gap-[32px] items-center w-[1042px] mx-[0px] mt-[0px] mb-[20px]">
                  <div className="w-[506px] flex items-center">
                    {phase === "feedback" && (
                      isCorrect
                        ? <CorrectFeedback explanation={(currentQuestion as any).explanation} showXp={earnedXP > 0} />
                        : <IncorrectFeedback correctAnswer={(currentQuestion as any).correctAnswer ?? ""} explanation={(currentQuestion as any).explanation} isReplay={xpAlreadyAwarded} />
                    )}
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
            )}
          </>
        )}
      </div>
    </PageTransition>
  );
}