import { createContext, useContext, useState, ReactNode, useEffect, useRef } from "react";
import { projectId, publicAnonKey } from "../../../utils/supabase/info";
import { useAuthSafe } from "./AuthContext";

// ─── Types ────────────────────────────────────────────────────────────────────

interface QuestionState {
  correct: boolean;
  xpAwarded: boolean; // Whether XP was already awarded for this question
  xpValue: number; // How much XP this question awards
}

export interface LessonProgress {
  lessonId: string;
  totalTasks: number;
  questions: Record<string, QuestionState>; // Track each question's state
  isCompleted: boolean; // Whether lesson is passed (>= 60% correct)
  correctAnswers: number; // Best correct count across all attempts (never decreases)
  rating?: number; // Star rating 1–5 given by user after completion
}

interface User {
  lessonProgress: Record<string, LessonProgress>;
  streak: number;
  lastStreakDate: string | null;
  level: ExperienceLevel | null;
  goal: OnboardingGoal | null;
  dailyTime: DailyTime | null;
  weeklyChallengesCompleted: number;
}

export type ExperienceLevel = "beginner" | "some_experience" | "designer";
export type OnboardingGoal = "change_career" | "improve_skills" | "work_use";
export type DailyTime = "5min" | "15min" | "30min";

interface UserContextValue {
  user: User;
  xp: number;
  streak: number;
  level: ExperienceLevel | null;
  goal: OnboardingGoal | null;
  dailyTime: DailyTime | null;
  weeklyChallengesCompleted: number;
  userLoading: boolean;
  setLevel: (level: ExperienceLevel) => void;
  setGoal: (goal: OnboardingGoal) => void;
  setDailyTime: (dailyTime: DailyTime) => void;
  getLessonProgress: (lessonId: string) => LessonProgress;
  updateQuestionState: (lessonId: string, questionId: string, isCorrect: boolean, xpValue?: number) => { xpEarned: number };
  saveBestScore: (lessonId: string, runCorrect: number, totalQuestions: number) => void;
  completeLesson: (lessonId: string) => void;
  markHomeworkCompleted: (lessonId: string) => void;
  resetProgress: () => void;
  incrementStreak: () => boolean; // Returns true if streak was awarded, false if already done today
  getMiniQuizState: (lessonId: string, quizId: string) => { completed: boolean; selectedAnswer: string | null; isCorrect: boolean };
  saveLessonRating: (lessonId: string, rating: number) => void;
}

// ─── Context ──────────────────────────────────────────────────────────────────

const UserContext = createContext<UserContextValue | undefined>(undefined);

// Display name for better debugging
UserContext.displayName = 'UserContext';

// ─── Provider ─────────────────────────────────────────────────────────────────

export function UserProvider({ children }: { children: ReactNode }) {
  // Load initial state from localStorage (only lesson progress, no xp)
  const [user, setUser] = useState<User>(() => {
    try {
      const saved = localStorage.getItem('uxeo-user-data');
      if (saved) {
        const parsed = JSON.parse(saved);
        return {
          lessonProgress: parsed.lessonProgress || {},
          streak: typeof parsed.streak === 'number' ? parsed.streak : 0,
          lastStreakDate: parsed.lastStreakDate || null,
          level: parsed.level || null,
          goal: parsed.goal || null,
          dailyTime: parsed.dailyTime || null,
          weeklyChallengesCompleted: typeof parsed.weeklyChallengesCompleted === 'number' ? parsed.weeklyChallengesCompleted : 0,
        };
      }
    } catch (e) {
      // If localStorage fails, use defaults
      console.error('Failed to load user data from localStorage:', e);
    }
    return { lessonProgress: {}, streak: 0, lastStreakDate: null, level: null, goal: null, dailyTime: null, weeklyChallengesCompleted: 0 };
  });

  const { userId } = useAuthSafe() ?? { userId: null };
  const [userLoading, setUserLoading] = useState(true);

  // Debounce ref for Supabase sync
  const syncTimerRef = useRef<ReturnType<typeof setTimeout> | null>(null);

  // Load from Supabase on mount (merge with localStorage)
  useEffect(() => {
    if (!userId) {
      setUserLoading(false);
      return;
    }

    setUserLoading(true);
    fetch(
      `https://${projectId}.supabase.co/functions/v1/make-server-d627d1b0/user/progress?userId=${encodeURIComponent(userId)}`,
      { headers: { Authorization: `Bearer ${publicAnonKey}` } }
    )
      .then(r => r.json())
      .then((res) => {
        if (!res.found) return;
        const d = res.data;
        setUser(prev => ({
          lessonProgress: Object.keys(d.lesson_progress ?? {}).length > 0
            ? d.lesson_progress
            : prev.lessonProgress,
          streak: d.streak ?? prev.streak,
          lastStreakDate: d.last_streak_date || prev.lastStreakDate,
          level: d.level || prev.level,
          goal: d.goal || prev.goal,
          dailyTime: d.daily_time || prev.dailyTime,
          weeklyChallengesCompleted: d.weekly_challenges ?? prev.weeklyChallengesCompleted,
        }));
      })
      .catch(() => { /* silent — use localStorage */ })
      .finally(() => setUserLoading(false));
  }, [userId]);

  // Sync to Supabase on user changes (debounced 3s)
  useEffect(() => {
    if (!userId) return;
    if (syncTimerRef.current) clearTimeout(syncTimerRef.current);

    syncTimerRef.current = setTimeout(() => {
      const xpVal = Object.values(user.lessonProgress).reduce((total, lesson) => {
        return total + Object.values(lesson.questions || {})
          .filter(q => q.xpAwarded)
          .reduce((sum, q) => sum + (q.xpValue || 25), 0);
      }, 0);

      fetch(
        `https://${projectId}.supabase.co/functions/v1/make-server-d627d1b0/user/progress`,
        {
          method: "POST",
          headers: {
            Authorization: `Bearer ${publicAnonKey}`,
            "Content-Type": "application/json",
          },
          body: JSON.stringify({
            userId,
            xp: xpVal,
            streak: user.streak,
            lastStreakDate: user.lastStreakDate ?? "",
            level: user.level ?? "",
            goal: user.goal ?? "",
            dailyTime: user.dailyTime ?? "",
            lessonProgress: user.lessonProgress,
            weeklyChallenges: user.weeklyChallengesCompleted,
          }),
        }
      ).catch(() => { /* silent */ });
    }, 3000);

    return () => {
      if (syncTimerRef.current) clearTimeout(syncTimerRef.current);
    };
  }, [user, userId]);

  // Save to localStorage whenever user state changes
  useEffect(() => {
    try {
      const toSave = {
        lessonProgress: user.lessonProgress,
        streak: user.streak,
        lastStreakDate: user.lastStreakDate,
        level: user.level,
        goal: user.goal,
        dailyTime: user.dailyTime,
        weeklyChallengesCompleted: user.weeklyChallengesCompleted,
      };
      localStorage.setItem('uxeo-user-data', JSON.stringify(toSave));
    } catch (e) {
      // If localStorage fails, just continue
    }
  }, [user]);

  // Compute XP dynamically from all xpAwarded flags (single source of truth)
  const xp = Object.values(user.lessonProgress).reduce((total, lesson) => {
    const earnedXp = Object.values(lesson.questions || {})
      .filter(q => q.xpAwarded)
      .reduce((sum, q) => sum + (q.xpValue || 25), 0);
    return total + earnedXp;
  }, 0);

  const getLessonProgress = (lessonId: string): LessonProgress => {
    return user.lessonProgress[lessonId] || { 
      lessonId, 
      totalTasks: 5,
      questions: {},
      isCompleted: false,
      correctAnswers: 0,
    };
  };

  const updateQuestionState = (lessonId: string, questionId: string, isCorrect: boolean, xpValue?: number) => {
    let xpEarned = 0;
    const finalXpValue = xpValue || 25;
    
    setUser((prev) => {
      const lessonProgress = prev.lessonProgress[lessonId] || {
        lessonId,
        totalTasks: 5,
        questions: {},
        isCompleted: false,
        correctAnswers: 0,
      };
      
      const questionState = lessonProgress.questions[questionId] || {
        correct: false,
        xpAwarded: false,
        xpValue: finalXpValue,
      };
      
      if (!questionState.xpAwarded && isCorrect) {
        xpEarned = finalXpValue;
      }
      
      const updatedQuestions = {
        ...lessonProgress.questions,
        [questionId]: {
          correct: questionState.correct || isCorrect,
          xpAwarded: questionState.xpAwarded || isCorrect,
          xpValue: finalXpValue,
        },
      };
      
      const correctCount = Object.values(updatedQuestions).filter(q => q.correct).length;
      const isPassed = correctCount >= Math.ceil(lessonProgress.totalTasks * 0.5);
      
      return {
        ...prev,
        lessonProgress: {
          ...prev.lessonProgress,
          [lessonId]: {
            ...lessonProgress,
            questions: updatedQuestions,
            isCompleted: isPassed,
          },
        },
      };
    });
    
    return { xpEarned };
  };

  // ─── saveBestScore ────────────────────────────────────────────────────────────
  // Called when a quiz run finishes. Stores Math.max(prevBest, runCorrect).
  // This is the single authoritative source for node progress display.
  const saveBestScore = (lessonId: string, runCorrect: number, totalQuestions: number) => {
    setUser((prev) => {
      const lessonProgress = prev.lessonProgress[lessonId] || {
        lessonId,
        totalTasks: totalQuestions,
        questions: {},
        isCompleted: false,
        correctAnswers: 0,
      };

      const prevBest = lessonProgress.correctAnswers ?? 0;
      const newBest = Math.max(prevBest, runCorrect);
      const isPassed = newBest >= Math.ceil(totalQuestions * 0.5);
      
      return {
        ...prev,
        lessonProgress: {
          ...prev.lessonProgress,
          [lessonId]: {
            ...lessonProgress,
            correctAnswers: newBest,
            isCompleted: isPassed,
          },
        },
      };
    });
  };

  // Complete lesson - save progress permanently
  const completeLesson = (lessonId: string) => {
    setUser((prev) => {
      const lessonProgress = prev.lessonProgress[lessonId];
      if (!lessonProgress) return prev;
      
      const correctCount = Object.values(lessonProgress.questions || {}).filter(q => q.correct).length;
      const isPassed = correctCount >= Math.ceil(lessonProgress.totalTasks * 0.5);
      // Also update correctAnswers to best of stored vs question count
      const newBest = Math.max(lessonProgress.correctAnswers ?? 0, correctCount);
      
      return {
        ...prev,
        lessonProgress: {
          ...prev.lessonProgress,
          [lessonId]: {
            ...lessonProgress,
            correctAnswers: newBest,
            isCompleted: isPassed,
          },
        },
      };
    });
  };

  // Mark homework as completed
  const markHomeworkCompleted = (lessonId: string) => {
    setUser((prev) => {
      const existing = prev.lessonProgress[lessonId] || {
        lessonId,
        totalTasks: 0,
        questions: {},
        isCompleted: false,
        correctAnswers: 0,
      };
      
      return {
        ...prev,
        lessonProgress: {
          ...prev.lessonProgress,
          [lessonId]: {
            ...existing,
            isCompleted: true,
          },
        },
      };
    });
  };

  // Reset all progress
  const resetProgress = () => {
    setUser({ lessonProgress: {}, streak: 0, lastStreakDate: null, level: null, goal: null, dailyTime: null, weeklyChallengesCompleted: 0 });
  };

  // Increment streak once per day — returns true if actually awarded, false if already done today
  const incrementStreak = (): boolean => {
    const today = new Date().toISOString().split('T')[0];
    if (user.lastStreakDate !== today) {
      setUser((prev) => ({
        ...prev,
        streak: prev.streak + 1,
        lastStreakDate: today,
      }));
      return true;
    }
    return false;
  };

  // For theory mini-quizzes
  const getMiniQuizState = (lessonId: string, quizId: string) => {
    const lessonProgress = user.lessonProgress[lessonId];
    if (!lessonProgress) return { completed: false, selectedAnswer: null, isCorrect: false };
    
    const questionState = lessonProgress.questions[quizId];
    if (!questionState) return { completed: false, selectedAnswer: null, isCorrect: false };
    
    return {
      completed: questionState.xpAwarded,
      selectedAnswer: null, // Assuming no selected answer is stored
      isCorrect: questionState.correct,
    };
  };

  const saveLessonRating = (lessonId: string, rating: number) => {
    setUser(prev => ({
      ...prev,
      lessonProgress: {
        ...prev.lessonProgress,
        [lessonId]: {
          ...(prev.lessonProgress[lessonId] || { lessonId, totalTasks: 5, questions: {}, isCompleted: false, correctAnswers: 0 }),
          rating,
        },
      },
    }));
  };

  const setLevel = (level: ExperienceLevel) => {
    setUser((prev) => ({ ...prev, level }));
  };

  const setGoal = (goal: OnboardingGoal) => {
    setUser((prev) => ({ ...prev, goal }));
  };

  const setDailyTime = (dailyTime: DailyTime) => {
    setUser((prev) => ({ ...prev, dailyTime }));
  };

  return (
    <UserContext.Provider value={{
      user,
      xp,
      streak: user.streak,
      level: user.level,
      goal: user.goal,
      dailyTime: user.dailyTime,
      weeklyChallengesCompleted: user.weeklyChallengesCompleted,
      userLoading,
      setLevel,
      setGoal,
      setDailyTime,
      getLessonProgress, 
      updateQuestionState,
      saveBestScore,
      completeLesson,
      markHomeworkCompleted,
      resetProgress,
      incrementStreak,
      getMiniQuizState,
      saveLessonRating,
    }}>
      {children}
    </UserContext.Provider>
  );
}

// ─── Hook ─────────────────────────────────────────────────────────────────────

export function useUser(): UserContextValue {
  const ctx = useContext(UserContext);
  if (ctx === undefined) {
    // During hot-reload or if used outside provider, throw descriptive error
    throw new Error("useUser must be used inside <UserProvider>");
  }
  return ctx;
}

// Optional: Export a safe version that returns null instead of throwing
export function useUserSafe(): UserContextValue | null {
  const ctx = useContext(UserContext);
  return ctx ?? null;
}