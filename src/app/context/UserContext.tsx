import { createContext, useContext, useState, ReactNode, useEffect, useRef, useCallback } from "react";
import { projectId } from "../../../utils/supabase/info";
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
  userName: string | null;
  userTitle: string | null;
  userAvatar: string | null;
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
  userName: string | null;
  userTitle: string | null;
  userAvatar: string | null;
  userLoading: boolean;
  setLevel: (level: ExperienceLevel) => void;
  setGoal: (goal: OnboardingGoal) => void;
  setDailyTime: (dailyTime: DailyTime) => void;
  setUserName: (name: string) => void;
  setUserTitle: (title: string) => void;
  setUserAvatar: (avatar: string) => void;
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

// Auto-generated titles — treated as "no custom title"
const AUTO_TITLES = new Set(["Дизайнер", "Джун-дизайнер", "Мидл-дизайнер", "Опытный дизайнер", "Дизайнер мидл"]);

// Merge two lesson progress maps: take union, max correctAnswers, OR isCompleted
function mergeLessonProgress(
  local: Record<string, LessonProgress>,
  remote: Record<string, LessonProgress>
): Record<string, LessonProgress> {
  const result: Record<string, LessonProgress> = { ...remote };
  for (const [id, lp] of Object.entries(local)) {
    if (!result[id]) {
      result[id] = lp;
    } else {
      const r = result[id];
      // Merge questions: OR for correct/xpAwarded so XP is never lost
      const mergedQuestions: Record<string, QuestionState> = { ...r.questions };
      for (const [qId, lq] of Object.entries(lp.questions ?? {})) {
        const rq = mergedQuestions[qId];
        mergedQuestions[qId] = rq ? {
          correct: lq.correct || rq.correct,
          xpAwarded: lq.xpAwarded || rq.xpAwarded,
          xpValue: lq.xpValue || rq.xpValue,
        } : lq;
      }
      result[id] = {
        ...r,
        correctAnswers: Math.max(lp.correctAnswers ?? 0, r.correctAnswers ?? 0),
        isCompleted: lp.isCompleted || r.isCompleted,
        questions: mergedQuestions,
        rating: lp.rating ?? r.rating,
        totalTasks: r.totalTasks || lp.totalTasks,
      };
    }
  }
  return result;
}

// ─── Provider ─────────────────────────────────────────────────────────────────

export function UserProvider({ children }: { children: ReactNode }) {
  // Load initial state from localStorage
  const [user, setUser] = useState<User>(() => {
    try {
      const saved = localStorage.getItem('uxeo-user-data');
      const parsed = saved ? JSON.parse(saved) : {};

      // name/title/avatar: check uxeo-user-data first, fall back to legacy keys
      const rawTitle = parsed.userTitle ?? localStorage.getItem('uxeo-profile-title') ?? null;

      return {
        lessonProgress: parsed.lessonProgress || {},
        streak: typeof parsed.streak === 'number' ? parsed.streak : 0,
        lastStreakDate: parsed.lastStreakDate || null,
        level: parsed.level || null,
        goal: parsed.goal || null,
        dailyTime: parsed.dailyTime || null,
        weeklyChallengesCompleted: typeof parsed.weeklyChallengesCompleted === 'number' ? parsed.weeklyChallengesCompleted : 0,
        userName: parsed.userName ?? localStorage.getItem('uxeo-profile-name') ?? null,
        // Treat auto-generated titles as null (so they stay in sync with level)
        userTitle: (rawTitle && !AUTO_TITLES.has(rawTitle)) ? rawTitle : null,
        userAvatar: parsed.userAvatar ?? localStorage.getItem('uxeo-profile-avatar') ?? null,
      };
    } catch (e) {
      console.error('Failed to load user data from localStorage:', e);
    }
    return {
      lessonProgress: {}, streak: 0, lastStreakDate: null,
      level: null, goal: null, dailyTime: null, weeklyChallengesCompleted: 0,
      userName: null, userTitle: null, userAvatar: null,
    };
  });

  const { userId, accessToken, loading: authLoading } = useAuthSafe() ?? { userId: null, accessToken: null, loading: true };
  const [userLoading, setUserLoading] = useState(true);

  // Debounce ref for Supabase sync
  const syncTimerRef = useRef<ReturnType<typeof setTimeout> | null>(null);

  // Refs for latest data — used by syncToSupabase (avoids stale closures)
  const userRef = useRef(user);
  const userIdRef = useRef<string | null>(userId ?? null);
  const accessTokenRef = useRef<string | null>(accessToken ?? null);
  useEffect(() => { userRef.current = user; }, [user]);
  useEffect(() => { userIdRef.current = userId ?? null; }, [userId]);
  useEffect(() => { accessTokenRef.current = accessToken ?? null; }, [accessToken]);

  // ─── Sync to Supabase ──────────────────────────────────────────────────────
  const syncToSupabase = useCallback(() => {
    const u = userRef.current;
    const uid = userIdRef.current;
    const token = accessTokenRef.current;
    if (!uid || !token) return;

    const xpVal = Object.values(u.lessonProgress).reduce((total, lesson) =>
      total + Object.values(lesson.questions || {})
        .filter(q => q.xpAwarded)
        .reduce((sum, q) => sum + (q.xpValue || 25), 0), 0);

    const hasProgress = xpVal > 0
      || (u.level && u.level !== "")
      || (u.goal && u.goal !== "")
      || Object.keys(u.lessonProgress).length > 0;
    if (!hasProgress) return;

    // Skip data URLs > 80KB to avoid large payloads; sync http(s) URLs always
    const avatarToSync = u.userAvatar
      ? (u.userAvatar.startsWith('data:') && u.userAvatar.length > 80000 ? "" : u.userAvatar)
      : "";

    fetch(
      `https://${projectId}.supabase.co/functions/v1/make-server-d627d1b0/user/progress`,
      {
        method: "POST",
        headers: {
          Authorization: `Bearer ${token}`,
          "Content-Type": "application/json",
        },
        body: JSON.stringify({
          xp: xpVal,
          streak: u.streak,
          lastStreakDate: u.lastStreakDate ?? "",
          level: u.level ?? "",
          goal: u.goal ?? "",
          dailyTime: u.dailyTime ?? "",
          lessonProgress: u.lessonProgress,
          weeklyChallenges: u.weeklyChallengesCompleted,
          userName: u.userName ?? "",
          userTitle: u.userTitle ?? "",
          userAvatar: avatarToSync,
        }),
      }
    ).catch(() => { /* silent */ });
  }, []); // stable — reads only refs

  // Track whether we've already loaded for this user (to skip loading spinner on token refresh)
  const loadedUserIdRef = useRef<string | null>(null);

  // Load from Supabase on auth (merge with localStorage)
  // accessToken is a dependency so the effect retries when an expired token gets refreshed
  useEffect(() => {
    if (authLoading) return;
    if (!userId || !accessToken) {
      setUserLoading(false);
      return;
    }

    const isFirstLoad = loadedUserIdRef.current !== userId;
    if (isFirstLoad) setUserLoading(true);

    fetch(
      `https://${projectId}.supabase.co/functions/v1/make-server-d627d1b0/user/progress`,
      { headers: { Authorization: `Bearer ${accessToken}` } }
    )
      .then(r => {
        if (!r.ok) throw new Error(`HTTP ${r.status}`);
        return r.json();
      })
      .then((res) => {
        loadedUserIdRef.current = userId;
        if (!res.found) return;
        const d = res.data;
        setUser(prev => {
          const remoteLP = d.lesson_progress ?? {};
          const mergedLP = Object.keys(remoteLP).length > 0
            ? mergeLessonProgress(prev.lessonProgress, remoteLP)
            : prev.lessonProgress;

          const rawRemoteTitle = d.user_title || null;
          const remoteTitle = (rawRemoteTitle && !AUTO_TITLES.has(rawRemoteTitle)) ? rawRemoteTitle : null;

          return {
            lessonProgress: mergedLP,
            streak: Math.max(d.streak ?? 0, prev.streak),
            lastStreakDate: d.last_streak_date || prev.lastStreakDate,
            level: d.level || prev.level,
            goal: d.goal || prev.goal,
            dailyTime: d.daily_time || prev.dailyTime,
            weeklyChallengesCompleted: Math.max(d.weekly_challenges ?? 0, prev.weeklyChallengesCompleted),
            userName: d.user_name || prev.userName || null,
            userTitle: remoteTitle || prev.userTitle || null,
            userAvatar: d.user_avatar || prev.userAvatar || null,
          };
        });
      })
      .catch(() => { /* silent — use localStorage, retry on next token refresh */ })
      .finally(() => setUserLoading(false));
  }, [userId, authLoading, accessToken]);

  // Debounced sync to Supabase on user changes (3s)
  useEffect(() => {
    if (!userId) return;
    if (syncTimerRef.current) clearTimeout(syncTimerRef.current);
    syncTimerRef.current = setTimeout(syncToSupabase, 3000);
    return () => {
      if (syncTimerRef.current) clearTimeout(syncTimerRef.current);
    };
  }, [user, userId, syncToSupabase]);

  // Immediate sync when app goes to background (mobile PWA reliability)
  useEffect(() => {
    const onHide = () => {
      if (document.visibilityState === 'hidden') {
        if (syncTimerRef.current) {
          clearTimeout(syncTimerRef.current);
          syncTimerRef.current = null;
        }
        syncToSupabase();
      }
    };
    document.addEventListener('visibilitychange', onHide);
    window.addEventListener('pagehide', syncToSupabase);
    return () => {
      document.removeEventListener('visibilitychange', onHide);
      window.removeEventListener('pagehide', syncToSupabase);
    };
  }, [syncToSupabase]);

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
        userName: user.userName,
        userTitle: user.userTitle,
        userAvatar: user.userAvatar,
      };
      localStorage.setItem('uxeo-user-data', JSON.stringify(toSave));
      // Keep legacy keys in sync for backward compat (LessonPage, LeaguePage, etc.)
      if (user.userName) localStorage.setItem('uxeo-profile-name', user.userName);
      if (user.userTitle) localStorage.setItem('uxeo-profile-title', user.userTitle);
      if (user.userAvatar) {
        try { localStorage.setItem('uxeo-profile-avatar', user.userAvatar); } catch { /* quota */ }
      }
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

  const completeLesson = (lessonId: string) => {
    setUser((prev) => {
      const lessonProgress = prev.lessonProgress[lessonId];
      if (!lessonProgress) return prev;

      const correctCount = Object.values(lessonProgress.questions || {}).filter(q => q.correct).length;
      const isPassed = correctCount >= Math.ceil(lessonProgress.totalTasks * 0.5);
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
          [lessonId]: { ...existing, isCompleted: true },
        },
      };
    });
  };

  const resetProgress = () => {
    setUser({
      lessonProgress: {}, streak: 0, lastStreakDate: null,
      level: null, goal: null, dailyTime: null, weeklyChallengesCompleted: 0,
      userName: null, userTitle: null, userAvatar: null,
    });
  };

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

  const getMiniQuizState = (lessonId: string, quizId: string) => {
    const lessonProgress = user.lessonProgress[lessonId];
    if (!lessonProgress) return { completed: false, selectedAnswer: null, isCorrect: false };

    const questionState = lessonProgress.questions[quizId];
    if (!questionState) return { completed: false, selectedAnswer: null, isCorrect: false };

    return {
      completed: questionState.xpAwarded,
      selectedAnswer: null,
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

  const setLevel = (level: ExperienceLevel) => setUser(prev => ({ ...prev, level }));
  const setGoal = (goal: OnboardingGoal) => setUser(prev => ({ ...prev, goal }));
  const setDailyTime = (dailyTime: DailyTime) => setUser(prev => ({ ...prev, dailyTime }));
  const setUserName = (name: string) => setUser(prev => ({ ...prev, userName: name }));
  const setUserTitle = (title: string) => setUser(prev => ({ ...prev, userTitle: title || null }));
  const setUserAvatar = (avatar: string) => setUser(prev => ({ ...prev, userAvatar: avatar }));

  return (
    <UserContext.Provider value={{
      user,
      xp,
      streak: user.streak,
      level: user.level,
      goal: user.goal,
      dailyTime: user.dailyTime,
      weeklyChallengesCompleted: user.weeklyChallengesCompleted,
      userName: user.userName,
      userTitle: user.userTitle,
      userAvatar: user.userAvatar,
      userLoading,
      setLevel,
      setGoal,
      setDailyTime,
      setUserName,
      setUserTitle,
      setUserAvatar,
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
    throw new Error("useUser must be used inside <UserProvider>");
  }
  return ctx;
}

export function useUserSafe(): UserContextValue | null {
  const ctx = useContext(UserContext);
  return ctx ?? null;
}
