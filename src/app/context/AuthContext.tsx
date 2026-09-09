/**
 * AuthContext — Supabase Auth (Google OAuth + Email magic link).
 * Falls back to a stable anonymous UUID when not signed in.
 */

import { createContext, useContext, ReactNode, useState, useEffect } from "react";
import type { Session } from "@supabase/supabase-js";
import { projectId } from "../../../utils/supabase/info";

// ── Types ──────────────────────────────────────────────────────────────────────

export interface AuthContextValue {
  /** Supabase user.id when logged in, null otherwise */
  userId: string | null;
  /** JWT access token from current session, null if not logged in */
  accessToken: string | null;
  loading: boolean;
  isAdmin: boolean;
  isAuthenticated: boolean;
  /** Local-only preview session. It never has a JWT or access to server actions. */
  isDemo: boolean;
  email?: string;
  signInWithGoogle: () => Promise<void>;
  signInWithEmail: (email: string) => Promise<{ error?: string }>;
  signOut: () => Promise<void>;
  startDemo: () => void;
  exitDemo: () => void;
}

// ── Constants ─────────────────────────────────────────────────────────────────

const ADMIN_EMAILS: string[] = []; // Add admin emails here
const DEMO_MODE_KEY = "skillum-demo-mode";

type SupabaseClient = typeof import("../../../utils/supabase/client").supabase;
let supabasePromise: Promise<SupabaseClient> | null = null;

function getSupabase(): Promise<SupabaseClient> {
  supabasePromise ??= import("../../../utils/supabase/client").then((mod) => mod.supabase);
  return supabasePromise;
}

function isDemoRequestedFromUrl(): boolean {
  try {
    return new URLSearchParams(window.location.search).get("demo") === "1";
  } catch {
    return false;
  }
}

function ensureDemoBootstrap(): boolean {
  try {
    const requested = isDemoRequestedFromUrl();
    const existing = localStorage.getItem(DEMO_MODE_KEY) === "1";
    if (!requested && !existing) return false;

    localStorage.setItem(DEMO_MODE_KEY, "1");
    if (!localStorage.getItem("skillum-demo-user-data")) {
      localStorage.setItem("skillum-demo-user-data", JSON.stringify({
        level: "beginner",
        goal: "change_career",
        dailyTime: "5min",
        lessonProgress: {},
        streak: 0,
        lastStreakDate: null,
        weeklyChallengesCompleted: 0,
        userName: "Demo",
      }));
    }
    return true;
  } catch {
    return false;
  }
}

function hasStoredSupabaseSession(): boolean {
  try {
    const prefix = `sb-${projectId}-auth-token`;
    return Object.keys(localStorage).some((key) => key === prefix || key.startsWith(`${prefix}.`));
  } catch {
    return false;
  }
}

// ── Context ───────────────────────────────────────────────────────────────────

const AuthContext = createContext<AuthContextValue | undefined>(undefined);

// ── Provider ──────────────────────────────────────────────────────────────────

export function AuthProvider({ children }: { children: ReactNode }) {
  const [session, setSession] = useState<Session | null>(null);
  const [isDemo, setIsDemo] = useState(() => ensureDemoBootstrap());
  const [loading, setLoading] = useState(() => !isDemo);

  useEffect(() => {
    if (isDemo) {
      setLoading(false);
      return;
    }

    let cancelled = false;

    // Safety fallback: never keep the app on white screen if auth call hangs.
    const loadingTimeout = window.setTimeout(() => {
      if (!cancelled) setLoading(false);
    }, 3000);

    let unsubscribe: (() => void) | null = null;

    const loadAuth = async () => {
      try {
        const supabase = await getSupabase();
        if (cancelled) return;

        const { data } = await supabase.auth.getSession();
        if (!cancelled) {
          setSession(data.session);
        }

        const { data: { subscription } } = supabase.auth.onAuthStateChange((_event, session) => {
          setSession(session);
          setLoading(false);
        });
        unsubscribe = () => subscription.unsubscribe();
      } catch {
        if (!cancelled) {
          setSession(null);
        }
      } finally {
        if (!cancelled) {
          setLoading(false);
        }
      }
    };

    const canDelayPublicAuth = window.location.pathname === "/welcome" && !hasStoredSupabaseSession();
    const authDelay = canDelayPublicAuth ? window.setTimeout(loadAuth, 6000) : null;
    if (!canDelayPublicAuth) void loadAuth();

    return () => {
      cancelled = true;
      window.clearTimeout(loadingTimeout);
      if (authDelay) window.clearTimeout(authDelay);
      unsubscribe?.();
    };
  }, [isDemo]);

  const userId = session?.user?.id ?? null;
  const accessToken = session?.access_token ?? null;
  const email = session?.user?.email;
  const isAuthenticated = !!session || isDemo;
  const isAdmin = ADMIN_EMAILS.includes(email ?? "");

  const signInWithGoogle = async () => {
    setIsDemo(false);
    localStorage.removeItem(DEMO_MODE_KEY);
    const supabase = await getSupabase();
    await supabase.auth.signInWithOAuth({
      provider: "google",
      options: {
        redirectTo: `${window.location.origin}/auth/callback`,
      },
    });
  };

  const signInWithEmail = async (email: string): Promise<{ error?: string }> => {
    setIsDemo(false);
    localStorage.removeItem(DEMO_MODE_KEY);
    const supabase = await getSupabase();
    const { error } = await supabase.auth.signInWithOtp({
      email,
      options: {
        emailRedirectTo: `${window.location.origin}/auth/callback`,
      },
    });
    if (error) return { error: error.message };
    return {};
  };

  const signOut = async () => {
    const supabase = await getSupabase();
    await supabase.auth.signOut();
  };

  const startDemo = () => {
    localStorage.setItem(DEMO_MODE_KEY, "1");
    setIsDemo(true);
  };

  const exitDemo = () => {
    localStorage.removeItem(DEMO_MODE_KEY);
    setIsDemo(false);
  };

  return (
    <AuthContext.Provider value={{
      userId,
      accessToken,
      loading,
      isAdmin,
      isAuthenticated,
      isDemo,
      email,
      signInWithGoogle,
      signInWithEmail,
      signOut,
      startDemo,
      exitDemo,
    }}>
      {children}
    </AuthContext.Provider>
  );
}

// ── Hooks ─────────────────────────────────────────────────────────────────────

export function useAuth(): AuthContextValue {
  const ctx = useContext(AuthContext);
  if (!ctx) throw new Error("useAuth must be used inside <AuthProvider>");
  return ctx;
}

export function useAuthSafe(): AuthContextValue | null {
  return useContext(AuthContext) ?? null;
}
