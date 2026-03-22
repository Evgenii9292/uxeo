/**
 * AuthContext — Supabase Auth (Google OAuth + Email magic link).
 * Falls back to a stable anonymous UUID when not signed in.
 */

import { createContext, useContext, ReactNode, useState, useEffect } from "react";
import { supabase } from "../../../utils/supabase/client";
import type { Session } from "@supabase/supabase-js";

// ── Types ──────────────────────────────────────────────────────────────────────

export interface AuthContextValue {
  /** Supabase user.id when logged in, otherwise stable anonymous UUID */
  userId: string;
  loading: boolean;
  isAdmin: boolean;
  isAuthenticated: boolean;
  email?: string;
  signInWithGoogle: () => Promise<void>;
  signInWithEmail: (email: string) => Promise<{ error?: string }>;
  signOut: () => Promise<void>;
}

// ── Constants ─────────────────────────────────────────────────────────────────

const USER_ID_KEY = "uxeo-user-id";
const ADMIN_EMAILS: string[] = []; // Add admin emails here

function getOrCreateAnonymousId(): string {
  try {
    const existing = localStorage.getItem(USER_ID_KEY);
    if (existing) return existing;
    const newId = crypto.randomUUID();
    localStorage.setItem(USER_ID_KEY, newId);
    return newId;
  } catch {
    return crypto.randomUUID();
  }
}

// ── Context ───────────────────────────────────────────────────────────────────

const AuthContext = createContext<AuthContextValue | undefined>(undefined);

// ── Provider ──────────────────────────────────────────────────────────────────

export function AuthProvider({ children }: { children: ReactNode }) {
  const [session, setSession] = useState<Session | null>(null);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    // Get current session on mount
    supabase.auth.getSession().then(({ data }) => {
      setSession(data.session);
      setLoading(false);
    });

    // Listen for auth state changes (login, logout, token refresh)
    const { data: { subscription } } = supabase.auth.onAuthStateChange((_event, session) => {
      setSession(session);
      setLoading(false);
    });

    return () => subscription.unsubscribe();
  }, []);

  const userId = session?.user?.id ?? getOrCreateAnonymousId();
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
