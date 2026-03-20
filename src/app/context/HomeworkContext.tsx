/**
 * HomeworkContext — fetches homework statuses from backend for the current user,
 * tracks which "reviewed/rejected" notifications have been seen.
 */

import { createContext, useContext, useState, useEffect, useCallback, ReactNode } from "react";
import { projectId, publicAnonKey } from "../../../utils/supabase/info";
import { useAuthSafe } from "./AuthContext";

// ── Types ──────────────────────────────────────────────────────────────────────

export type HWStatus = "pending" | "reviewed" | "rejected";

export interface HomeworkRecord {
  id: string;
  lesson_name: string;
  lesson_id: string;
  figma_link: string;
  status: HWStatus;
  comment: string;
  created_at: string;
}

interface HomeworkContextValue {
  homeworks: HomeworkRecord[];
  loading: boolean;
  /** Map of lessonId → homework record (matched by lesson_id or lesson_name) */
  getByLessonId: (lessonId: string) => HomeworkRecord | undefined;
  getByLessonName: (name: string) => HomeworkRecord | undefined;
  /** How many reviewed/rejected homeworks the user hasn't opened yet */
  unseenCount: number;
  /** True if homework is reviewed/rejected and user hasn't opened it yet */
  isUnseen: (lessonId: string) => boolean;
  /** Call when user opens the notifications page or homework page — marks as seen */
  markSeen: (lessonId: string) => void;
  markAllSeen: () => void;
  /** Refresh from backend */
  refresh: () => void;
}

// ── Constants ─────────────────────────────────────────────────────────────────

const SEEN_KEY = "uxeo-hw-seen"; // localStorage: Record<lessonId, HWStatus>

// ── Context ───────────────────────────────────────────────────────────────────

const HomeworkContext = createContext<HomeworkContextValue | undefined>(undefined);

// ── Provider ──────────────────────────────────────────────────────────────────

export function HomeworkProvider({ children }: { children: ReactNode }) {
  const auth = useAuthSafe();
  const userId = auth?.userId ?? null;
  const [homeworks, setHomeworks] = useState<HomeworkRecord[]>([]);
  const [loading, setLoading]     = useState(false);
  // seen: map of lessonId (or lesson_name as fallback) → last seen status
  const [seen, setSeen] = useState<Record<string, HWStatus>>(() => {
    try { return JSON.parse(localStorage.getItem(SEEN_KEY) ?? "{}"); }
    catch { return {}; }
  });

  const fetchHomeworks = useCallback(async () => {
    if (!userId) return;
    setLoading(true);
    try {
      const res = await fetch(
        `https://${projectId}.supabase.co/functions/v1/make-server-d627d1b0/homework/user/${encodeURIComponent(userId)}`,
        { headers: { Authorization: `Bearer ${publicAnonKey}` } }
      );
      if (!res.ok) return;
      const data = await res.json();
      setHomeworks(data.homeworks ?? []);
    } catch {
      // silent — network unavailable, keep stale state
    } finally {
      setLoading(false);
    }
  }, [userId]);

  // Fetch on mount
  useEffect(() => { fetchHomeworks(); }, [fetchHomeworks]);

  // Persist seen to localStorage whenever it changes
  useEffect(() => {
    try { localStorage.setItem(SEEN_KEY, JSON.stringify(seen)); }
    catch {}
  }, [seen]);

  // Count homeworks with status reviewed/rejected that have changed since last seen
  const unseenCount = homeworks.filter((hw) => {
    if (hw.status !== "reviewed" && hw.status !== "rejected") return false;
    const key = hw.lesson_id || hw.lesson_name;
    return seen[key] !== hw.status;
  }).length;

  const getByLessonId   = (id: string)   => homeworks.find(hw => hw.lesson_id === id || hw.lesson_name === id);
  const getByLessonName = (name: string) => homeworks.find(hw => hw.lesson_name === name);

  const markSeen = (lessonId: string) => {
    const hw = getByLessonId(lessonId);
    if (!hw) return;
    const key = hw.lesson_id || hw.lesson_name;
    setSeen(prev => ({ ...prev, [key]: hw.status }));
  };

  const markAllSeen = () => {
    const next: Record<string, HWStatus> = {};
    for (const hw of homeworks) {
      const key = hw.lesson_id || hw.lesson_name;
      next[key] = hw.status;
    }
    setSeen(prev => ({ ...prev, ...next }));
  };

  const isUnseen = (lessonId: string): boolean => {
    const hw = getByLessonId(lessonId);
    if (!hw) return false;
    if (hw.status !== "reviewed" && hw.status !== "rejected") return false;
    const key = hw.lesson_id || hw.lesson_name;
    return seen[key] !== hw.status;
  };

  return (
    <HomeworkContext.Provider value={{ homeworks, loading, getByLessonId, getByLessonName, unseenCount, isUnseen, markSeen, markAllSeen, refresh: fetchHomeworks }}>
      {children}
    </HomeworkContext.Provider>
  );
}

// ── Hook ──────────────────────────────────────────────────────────────────────

export function useHomework(): HomeworkContextValue {
  const ctx = useContext(HomeworkContext);
  if (!ctx) throw new Error("useHomework must be used inside <HomeworkProvider>");
  return ctx;
}

export function useHomeworkSafe(): HomeworkContextValue | null {
  return useContext(HomeworkContext) ?? null;
}
