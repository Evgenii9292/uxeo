import { createContext, useContext, useState, useRef, ReactNode } from "react";
import { useUserSafe } from "./UserContext";
import { useAchievementsSafe } from "./AchievementsContext";

// ─── Types ────────────────────────────────────────────────────────────────────

interface LessonState {
  lessonId: string;
  totalQuestions: number;
  currentQuestionIndex: number;
}

interface LessonContextValue {
  lessonState: LessonState | null;
  initializeLesson: (lessonId: string, totalQuestions: number) => void;
  answerQuestion: (questionId: string, isCorrect: boolean, xpValue?: number) => number;
  nextQuestion: () => void;
  completeLesson: () => void;
  exitLesson: () => void;
}

// ─── Context ──────────────────────────────────────────────────────────────────

const LessonContext = createContext<LessonContextValue | undefined>(undefined);

LessonContext.displayName = 'LessonContext';

// ─── Provider ─────────────────────────────────────────────────────────────────

export function LessonProvider({ children }: { children: ReactNode }) {
  const userContext = useUserSafe();
  const achievementsCtx = useAchievementsSafe();
  const [lessonState, setLessonState] = useState<LessonState | null>(null);
  // Track consecutive correct answers across a quiz session for quiz_ace achievement
  const correctStreakRef = useRef(0);

  // If UserContext isn't ready yet (hot-reload), provide a no-op context
  if (!userContext) {
    return (
      <LessonContext.Provider
        value={{
          lessonState: null,
          initializeLesson: () => {},
          answerQuestion: () => 0,
          nextQuestion: () => {},
          completeLesson: () => {},
          exitLesson: () => {},
        }}
      >
        {children}
      </LessonContext.Provider>
    );
  }

  const { updateQuestionState, completeLesson: markLessonComplete } = userContext;

  // Initialize a new lesson
  const initializeLesson = (lessonId: string, totalQuestions: number) => {
    correctStreakRef.current = 0;
    setLessonState({
      lessonId,
      totalQuestions,
      currentQuestionIndex: 0,
    });
  };

  // Handle answering a question
  const answerQuestion = (questionId: string, isCorrect: boolean, xpValue?: number) => {
    if (!lessonState) return 0;

    // Track consecutive streak for quiz_ace achievement
    if (isCorrect) {
      correctStreakRef.current += 1;
      if (correctStreakRef.current >= 5) {
        achievementsCtx?.triggerAchievement("quiz_ace");
      }
    } else {
      correctStreakRef.current = 0;
    }

    // Update question state in UserContext (single source of truth)
    const result = updateQuestionState(lessonState.lessonId, questionId, isCorrect, xpValue);
    return result.xpEarned;
  };

  // Move to next question
  const nextQuestion = () => {
    if (!lessonState) return;

    setLessonState((prev) => {
      if (!prev) return prev;
      return {
        ...prev,
        currentQuestionIndex: prev.currentQuestionIndex + 1,
      };
    });
  };

  // Complete the lesson
  const completeLesson = () => {
    if (!lessonState) return;

    // Mark lesson as completed in UserContext
    markLessonComplete(lessonState.lessonId);

    // Clear lesson state
    setLessonState(null);
  };

  // Exit lesson without completing
  const exitLesson = () => {
    correctStreakRef.current = 0;
    setLessonState(null);
  };

  return (
    <LessonContext.Provider
      value={{
        lessonState,
        initializeLesson,
        answerQuestion,
        nextQuestion,
        completeLesson,
        exitLesson,
      }}
    >
      {children}
    </LessonContext.Provider>
  );
}

// ─── Hook ─────────────────────────────────────────────────────────────────────

export function useLesson(): LessonContextValue {
  const ctx = useContext(LessonContext);
  if (ctx === undefined) {
    throw new Error("useLesson must be used inside <LessonProvider>");
  }
  return ctx;
}

export function useLessonSafe(): LessonContextValue | null {
  const ctx = useContext(LessonContext);
  return ctx ?? null;
}