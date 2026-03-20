/**
 * AuthContext — stable anonymous identity via localStorage UUID.
 * On first visit: generates a random UUID and stores it in localStorage.
 * On subsequent visits: restores the existing UUID.
 * Later can be upgraded to real Supabase auth (email link).
 */

import { createContext, useContext, ReactNode } from "react";

// ── Types ──────────────────────────────────────────────────────────────────────

interface AuthContextValue {
  /** Stable user ID — UUID persisted in localStorage */
  userId: string;
  loading: false;
  isAdmin: boolean;
}

// ── Constants ─────────────────────────────────────────────────────────────────

const USER_ID_KEY = "uxeo-user-id";
const ADMIN_IDS: string[] = [
  "fdca2148-054e-405f-be20-50786f71213e", // Evgenii (admin)
];

function getOrCreateUserId(): string {
  try {
    const existing = localStorage.getItem(USER_ID_KEY);
    if (existing) return existing;
    const newId = crypto.randomUUID();
    localStorage.setItem(USER_ID_KEY, newId);
    return newId;
  } catch {
    // Fallback if localStorage is unavailable
    return crypto.randomUUID();
  }
}

// Initialise once at module load — synchronous, no async needed
const STABLE_USER_ID = getOrCreateUserId();

// ── Context ───────────────────────────────────────────────────────────────────

const AuthContext = createContext<AuthContextValue | undefined>(undefined);

// ── Provider ──────────────────────────────────────────────────────────────────

export function AuthProvider({ children }: { children: ReactNode }) {
  const value: AuthContextValue = {
    userId: STABLE_USER_ID,
    loading: false,
    isAdmin: ADMIN_IDS.includes(STABLE_USER_ID),
  };

  return <AuthContext.Provider value={value}>{children}</AuthContext.Provider>;
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
