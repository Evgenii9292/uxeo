/**
 * AchievementsContext — tracks unlocked achievements, queues modal displays.
 *
 * Reactive: watches UserContext state (xp, streak, etc.) and auto-unlocks.
 * Explicit: call triggerAchievement('quiz_ace') for session-specific events.
 */

import { createContext, useContext, useState, useEffect, useCallback, ReactNode } from "react";
import { useUserSafe } from "./UserContext";

// ─── Achievement Definitions ──────────────────────────────────────────────────

export type AchievementId =
  | "first_answer"
  | "quiz_ace"
  | "combo_3"
  | "combo_7"
  | "first_lesson"
  | "lessons_3"
  | "lessons_5"
  | "perfect_quiz"
  | "streak_3"
  | "streak_7"
  | "xp_100"
  | "xp_500"
  | "xp_1000"
  | "homework_done"
  | "challenge_week";

export interface AchievementDef {
  id: AchievementId;
  title: string;
  desc: string;
  color: string;      // primary accent
  colorEnd: string;   // gradient end
  emoji: string;
}

export const ACHIEVEMENTS: Record<AchievementId, AchievementDef> = {
  first_answer: {
    id: "first_answer",
    title: "Первый ответ!",
    desc: "Правильно ответили на первый вопрос",
    color: "#FF6B21",
    colorEnd: "#994014",
    emoji: "🎯",
  },
  combo_3: {
    id: "combo_3",
    title: "3 подряд!",
    desc: "Три правильных ответа подряд",
    color: "#FFB121",
    colorEnd: "#BB8116",
    emoji: "✨",
  },
  combo_7: {
    id: "combo_7",
    title: "7 подряд!",
    desc: "Семь правильных ответов подряд — огонь!",
    color: "#9333ea",
    colorEnd: "#5b21b6",
    emoji: "⚡",
  },
  quiz_ace: {
    id: "quiz_ace",
    title: "5 подряд!",
    desc: "Пять правильных ответов подряд",
    color: "#FFB121",
    colorEnd: "#BB8116",
    emoji: "⚡",
  },
  first_lesson: {
    id: "first_lesson",
    title: "Первый урок",
    desc: "Завершили свой первый урок",
    color: "#5EDD60",
    colorEnd: "#3BAA3D",
    emoji: "📚",
  },
  lessons_3: {
    id: "lessons_3",
    title: "3 урока!",
    desc: "Завершили три урока",
    color: "#5B9BD5",
    colorEnd: "#2D6FA0",
    emoji: "🏅",
  },
  lessons_5: {
    id: "lessons_5",
    title: "5 уроков!",
    desc: "Завершили пять уроков",
    color: "#06B6D4",
    colorEnd: "#0284C7",
    emoji: "🚀",
  },
  perfect_quiz: {
    id: "perfect_quiz",
    title: "Идеально!",
    desc: "Прошли квиз без единой ошибки",
    color: "#FFB121",
    colorEnd: "#BB8116",
    emoji: "⭐",
  },
  streak_3: {
    id: "streak_3",
    title: "3 дня подряд",
    desc: "Занимались три дня без пропусков",
    color: "#FFB121",
    colorEnd: "#BB8116",
    emoji: "🔥",
  },
  streak_7: {
    id: "streak_7",
    title: "Целая неделя!",
    desc: "Семь дней обучения без пропусков",
    color: "#FF6B21",
    colorEnd: "#994014",
    emoji: "🔥",
  },
  xp_100: {
    id: "xp_100",
    title: "100 XP",
    desc: "Набрали первые 100 очков опыта",
    color: "#A855F7",
    colorEnd: "#7C3AED",
    emoji: "💫",
  },
  xp_500: {
    id: "xp_500",
    title: "500 XP",
    desc: "Набрали 500 очков опыта",
    color: "#06B6D4",
    colorEnd: "#0284C7",
    emoji: "💎",
  },
  xp_1000: {
    id: "xp_1000",
    title: "1000 XP",
    desc: "Набрали 1000 очков опыта",
    color: "#A855F7",
    colorEnd: "#7C3AED",
    emoji: "👑",
  },
  homework_done: {
    id: "homework_done",
    title: "Сдал ДЗ!",
    desc: "Сдали первое домашнее задание",
    color: "#5EDD60",
    colorEnd: "#3BAA3D",
    emoji: "📝",
  },
  challenge_week: {
    id: "challenge_week",
    title: "Все вызовы!",
    desc: "Выполнили все 3 вызова за неделю",
    color: "#FFB121",
    colorEnd: "#BB8116",
    emoji: "🏆",
  },
};

// Ordered list for display
export const ACHIEVEMENT_ORDER: AchievementId[] = [
  "first_answer",
  "first_lesson",
  "lessons_3",
  "lessons_5",
  "perfect_quiz",
  "quiz_ace",
  "streak_3",
  "streak_7",
  "xp_100",
  "xp_500",
  "xp_1000",
  "homework_done",
  "challenge_week",
];

// ─── Types ────────────────────────────────────────────────────────────────────

interface UnlockedAchievement {
  unlockedAt: string; // ISO date
}

interface AchievementsContextValue {
  unlockedAchievements: Record<string, UnlockedAchievement>;
  pendingAchievement: AchievementId | null;
  dismissPending: () => void;
  triggerAchievement: (id: AchievementId) => void;
  isUnlocked: (id: AchievementId) => boolean;
}

// ─── Context ──────────────────────────────────────────────────────────────────

const AchievementsContext = createContext<AchievementsContextValue | undefined>(undefined);

// ─── Storage helpers ──────────────────────────────────────────────────────────

const LS_KEY = "uxeo-achievements";

function loadFromStorage(): Record<string, UnlockedAchievement> {
  try {
    const saved = localStorage.getItem(LS_KEY);
    return saved ? JSON.parse(saved) : {};
  } catch {
    return {};
  }
}

function saveToStorage(data: Record<string, UnlockedAchievement>) {
  try {
    localStorage.setItem(LS_KEY, JSON.stringify(data));
  } catch {}
}

// ─── Provider ─────────────────────────────────────────────────────────────────

export function AchievementsProvider({ children }: { children: ReactNode }) {
  const userCtx = useUserSafe();
  const [unlocked, setUnlocked] = useState<Record<string, UnlockedAchievement>>(loadFromStorage);
  const [queue, setQueue] = useState<AchievementId[]>([]);

  // Core unlock function — idempotent, only fires once per achievement
  const unlock = useCallback((id: AchievementId) => {
    let isNew = false;
    setUnlocked((prev) => {
      if (prev[id]) return prev;
      isNew = true;
      const next = { ...prev, [id]: { unlockedAt: new Date().toISOString() } };
      saveToStorage(next);
      return next;
    });
    if (isNew) {
      setQueue((prev) => (prev.includes(id) ? prev : [...prev, id]));
    }
  }, []);

  // Explicit trigger — for things like quiz streaks that need to be called manually
  const triggerAchievement = useCallback(
    (id: AchievementId) => {
      unlock(id);
    },
    [unlock]
  );

  const dismissPending = useCallback(() => {
    setQueue((prev) => prev.slice(1));
  }, []);

  const isUnlocked = useCallback((id: AchievementId) => !!unlocked[id], [unlocked]);

  // ── Reactive checks: runs whenever relevant user stats change ────────────────
  useEffect(() => {
    if (!userCtx) return;

    const { xp, streak, weeklyChallengesCompleted, user } = userCtx;

    const completedLessons = Object.values(user.lessonProgress).filter(
      (l) => l.isCompleted
    ).length;

    const totalCorrectAnswers = Object.values(user.lessonProgress).reduce(
      (sum, l) =>
        sum + Object.values(l.questions || {}).filter((q) => q.xpAwarded).length,
      0
    );

    if (totalCorrectAnswers >= 1) unlock("first_answer");
    if (completedLessons >= 1)   unlock("first_lesson");
    if (completedLessons >= 3)   unlock("lessons_3");
    if (completedLessons >= 5)   unlock("lessons_5");
    if (streak >= 3)             unlock("streak_3");
    if (streak >= 7)             unlock("streak_7");
    if (xp >= 100)               unlock("xp_100");
    if (xp >= 500)               unlock("xp_500");
    if (xp >= 1000)              unlock("xp_1000");
    if (weeklyChallengesCompleted >= 3) unlock("challenge_week");
    // homework_done + quiz_ace + perfect_quiz triggered explicitly from feature code
  }, [
    userCtx?.xp,
    userCtx?.streak,
    userCtx?.weeklyChallengesCompleted,
    // JSON-stable dependency for lessonProgress changes:
    JSON.stringify(
      userCtx
        ? Object.fromEntries(
            Object.entries(userCtx.user.lessonProgress).map(([k, v]) => [
              k,
              { isCompleted: v.isCompleted, questionsCount: Object.keys(v.questions || {}).length },
            ])
          )
        : {}
    ),
  ]);

  return (
    <AchievementsContext.Provider
      value={{
        unlockedAchievements: unlocked,
        pendingAchievement: queue[0] ?? null,
        dismissPending,
        triggerAchievement,
        isUnlocked,
      }}
    >
      {children}
    </AchievementsContext.Provider>
  );
}

// ─── Hooks ────────────────────────────────────────────────────────────────────

export function useAchievements(): AchievementsContextValue {
  const ctx = useContext(AchievementsContext);
  if (!ctx) throw new Error("useAchievements must be used inside <AchievementsProvider>");
  return ctx;
}

export function useAchievementsSafe(): AchievementsContextValue | null {
  return useContext(AchievementsContext) ?? null;
}
