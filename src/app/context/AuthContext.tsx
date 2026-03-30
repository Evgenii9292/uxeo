/**
 * AuthContext — Supabase Auth (Google OAuth + Email magic link).
 * Falls back to a stable anonymous UUID when not signed in.
 */

import { createContext, useContext, ReactNode, useState, useEffect } from "react";
import { supabase } from "../../../utils/supabase/client";
import type { Session } from "@supabase/supabase-js";

// ── Types ──────────────────────────────────────────────────────────────────────

export interface AuthContextValue {
  /** Supabase user.id when logged in, null otherwise */
  userId: string | null;
  /** JWT access token from current session, null if not logged in */
  accessToken: string | null;
  loading: boolean;
  isAdmin: boolean;
  isAuthenticated: boolean;
  email?: string;
  signInWithGoogle: () => Promise<void>;
  signInWithEmail: (email: string) => Promise<{ error?: string }>;
  signOut: () => Promise<void>;
}

// ── Constants ─────────────────────────────────────────────────────────────────

const ADMIN_EMAILS: string[] = []; // Add admin emails here

// ── Context ───────────────────────────────────────────────────────────────────

const AuthContext = createContext<AuthContextValue | undefined>(undefined);

// ── Provider ──────────────────────────────────────────────────────────────────

export function AuthProvider({ children }: { children: ReactNode }) {
  const [session, setSession] = useState<Session | null>(null);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    let cancelled = false;

    // Safety fallback: never keep the app on white screen if auth call hangs.
    const loadingTimeout = window.setTimeout(() => {
      if (!cancelled) setLoading(false);
    }, 3000);

    // Get current session on mount
    (async () => {
      try {
        const { data } = await supabase.auth.getSession();
        if (!cancelled) {
          setSession(data.session);
        }
      } catch {
        if (!cancelled) {
          setSession(null);
        }
      } finally {
        if (!cancelled) {
          setLoading(false);
        }
      }
    })();

    // Listen for auth state changes (login, logout, token refresh)
    const { data: { subscription } } = supabase.auth.onAuthStateChange((_event, session) => {
      setSession(session);
      setLoading(false);
    });

    return () => {
      cancelled = true;
      window.clearTimeout(loadingTimeout);
      subscription.unsubscribe();
    };
  }, []);

  const userId = session?.user?.id ?? null;
  const accessToken = session?.access_token ?? null;
  const email = session?.user?.email;
  const isAuthenticated = !!session;
  const isAdmin = ADMIN_EMAILS.includes(email ?? "");

  const signInWithGoogle = async () => {
    await supabase.auth.signInWithOAuth({
      provider: "google",
      options: {
        redirectTo: `${window.location.origin}/auth/callback`,
      },
    });
  };

  const signInWithEmail = async (email: string): Promise<{ error?: string }> => {
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
    await supabase.auth.signOut();
  };

  return (
    <AuthContext.Provider value={{
      userId,
      accessToken,
      loading,
      isAdmin,
      isAuthenticated,
      email,
      signInWithGoogle,
      signInWithEmail,
      signOut,
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
