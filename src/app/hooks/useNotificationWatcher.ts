/**
 * useNotificationWatcher — monitors UserContext + AchievementsContext for
 * real activity events and writes them to notificationStore.
 *
 * Mount once at the root level (inside Root in routes.tsx).
 */

import { useEffect } from 'react';
import { useUserSafe } from '../context/UserContext';
import { useAchievementsSafe, ACHIEVEMENTS } from '../context/AchievementsContext';
import { addEvent, getEvents } from '../utils/notificationStore';
import { LESSONS } from '../data/lessons';

// ─── Helpers ──────────────────────────────────────────────────────────────────

const PREV_KEY = 'skillum_notif_prev';

interface PrevState {
  xp: number;
  streak: number;
  leagueTier: number;
  completedLessons: string[];
  achievements: string[];
}

function getLeagueTier(xp: number): number {
  if (xp >= 30000) return 4;
  if (xp >= 10000) return 3;
  if (xp >= 3000)  return 2;
  return 1;
}

function getLeagueName(tier: number): string {
  return (['', 'Джун', 'Мидл', 'Сеньор', 'Арт-директор'] as const)[tier];
}

function getLessonTitle(lessonId: string): string {
  return LESSONS.find(l => l.lessonId === lessonId)?.title ?? lessonId;
}

function getLessonXP(lessonProgress: Record<string, { questions?: Record<string, { xpAwarded?: boolean; xpValue?: number }> }>, lessonId: string): number {
  const lp = lessonProgress[lessonId];
  if (!lp) return 0;
  return Object.values(lp.questions ?? {})
    .filter(q => q.xpAwarded)
    .reduce((sum, q) => sum + (q.xpValue ?? 25), 0);
}

/** Check if this event was already recorded (dedup by type+lessonId/achievementId within last 10 min) */
function isDuplicate(type: string, dataKey: string): boolean {
  const recent = getEvents().filter(e => Date.now() - e.timestamp < 10 * 60 * 1000);
  return recent.some(e => e.type === type && String(e.data.lessonId ?? e.data.achievementId ?? '') === dataKey);
}

// ─── Hook ─────────────────────────────────────────────────────────────────────

export function useNotificationWatcher() {
  const userCtx = useUserSafe();
  const achievementsCtx = useAchievementsSafe();

  // Deps: only the values that can trigger new notifications
  const xp = userCtx?.xp ?? 0;
  const streak = userCtx?.streak ?? 0;
  const lessonProgressJSON = JSON.stringify(
    userCtx
      ? Object.fromEntries(
          Object.entries(userCtx.user.lessonProgress).map(([k, v]) => [k, v.isCompleted])
        )
      : {}
  );
  const achievementsJSON = JSON.stringify(
    Object.keys(achievementsCtx?.unlockedAchievements ?? {}).sort()
  );

  useEffect(() => {
    if (!userCtx) return;

    const lessonProgress = userCtx.user.lessonProgress;
    const completedLessons = Object.entries(lessonProgress)
      .filter(([, lp]) => lp.isCompleted)
      .map(([id]) => id);
    const leagueTier = getLeagueTier(xp);
    const achievements = Object.keys(achievementsCtx?.unlockedAchievements ?? {});

    const prevRaw = localStorage.getItem(PREV_KEY);

    // First ever run — save current state, don't fire any events
    if (!prevRaw) {
      localStorage.setItem(PREV_KEY, JSON.stringify({
        xp, streak, leagueTier, completedLessons, achievements,
      } as PrevState));
      return;
    }

    const prev: PrevState = JSON.parse(prevRaw);
    const now = Date.now();

    // ── New lesson completions ────────────────────────────────────────────────
    const newLessons = completedLessons.filter(id => !prev.completedLessons.includes(id));
    for (const lessonId of newLessons) {
      if (isDuplicate('lesson_completed', lessonId)) continue;
      const xpEarned = getLessonXP(lessonProgress, lessonId);
      addEvent({
        type: 'lesson_completed',
        timestamp: now,
        data: {
          lessonId,
          lessonTitle: getLessonTitle(lessonId),
          xpEarned,
        },
      });
    }

    // ── Streak extended ───────────────────────────────────────────────────────
    if (streak > prev.streak) {
      addEvent({
        type: 'streak_extended',
        timestamp: now,
        data: { streak, prev: prev.streak },
      });
    }

    // ── League promoted ───────────────────────────────────────────────────────
    if (leagueTier > prev.leagueTier) {
      addEvent({
        type: 'league_promoted',
        timestamp: now,
        data: { tier: leagueTier, name: getLeagueName(leagueTier) },
      });
    }

    // ── New achievements ──────────────────────────────────────────────────────
    const newAchievements = achievements.filter(id => !prev.achievements.includes(id));
    for (const achId of newAchievements) {
      if (isDuplicate('achievement_unlocked', achId)) continue;
      const def = ACHIEVEMENTS[achId as keyof typeof ACHIEVEMENTS];
      addEvent({
        type: 'achievement_unlocked',
        timestamp: now,
        data: {
          achievementId: achId,
          title: def?.title ?? achId,
          emoji: def?.emoji ?? '🏅',
          desc: def?.desc ?? '',
        },
      });
    }

    // ── Save updated prev state ───────────────────────────────────────────────
    localStorage.setItem(PREV_KEY, JSON.stringify({
      xp, streak, leagueTier, completedLessons, achievements,
    } as PrevState));

  // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [xp, streak, lessonProgressJSON, achievementsJSON]);
}
