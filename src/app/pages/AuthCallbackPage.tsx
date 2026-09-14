/**
 * AuthCallbackPage — handles redirect after OAuth (Google) or magic link.
 *
 * Authentication must not depend on the progress API. Once Supabase has a
 * valid session, redirect into the app immediately. AppHomeRoute/UserContext
 * will handle onboarding and progress loading separately.
 */

import { useEffect } from "react";
import { useNavigate } from "react-router";
import { supabase } from "../../../utils/supabase/client";
import type { Session } from "@supabase/supabase-js";

export default function AuthCallbackPage() {
  const navigate = useNavigate();

  useEffect(() => {
    let cancelled = false;
    let resolved = false;

    function handleSession(session: Session) {
      if (resolved || cancelled) return;
      resolved = true;

      try {
        if (session.user.email) {
          localStorage.setItem("uxeo-user-email", session.user.email);
        }
      } catch {}

      // Do not wait for /user/progress here. A progress-sync failure must never
      // prevent a successfully authenticated user from entering the app.
      navigate("/", { replace: true });
    }

    function handleNoSession() {
      if (resolved || cancelled) return;
      resolved = true;
      navigate("/welcome", { replace: true });
    }

    const { data: { subscription } } = supabase.auth.onAuthStateChange((_event, session) => {
      if (session && !resolved) handleSession(session);
    });

    const completeAuth = async () => {
      const code = new URLSearchParams(window.location.search).get("code");
      if (code) {
        const { data, error } = await supabase.auth.exchangeCodeForSession(code);
        if (error) throw error;
        if (data.session && !resolved) {
          window.history.replaceState({}, document.title, window.location.pathname);
          handleSession(data.session);
          return;
        }
      }

      const { data } = await supabase.auth.getSession();
      if (data.session && !resolved) handleSession(data.session);
    };

    completeAuth().catch(() => {
      // Timeout below remains the fallback.
    });

    const timeout = window.setTimeout(handleNoSession, 8000);

    return () => {
      cancelled = true;
      subscription.unsubscribe();
      window.clearTimeout(timeout);
    };
  }, [navigate]);

  return (
    <div
      style={{
        minHeight: "100%",
        display: "flex",
        alignItems: "center",
        justifyContent: "center",
        background: "linear-gradient(165.05deg, #282F33 14.367%, rgb(46, 57, 62) 147.74%)",
        flexDirection: "column",
        gap: 20,
      }}
    >
      <svg className="animate-spin" width="40" height="40" viewBox="0 0 24 24" fill="none">
        <circle cx="12" cy="12" r="10" stroke="rgba(255,93,57,0.3)" strokeWidth="3" />
        <path d="M12 2a10 10 0 0 1 10 10" stroke="#ff5d39" strokeWidth="3" strokeLinecap="round" />
      </svg>
      <p style={{ fontFamily: "Roboto Condensed, sans-serif", color: "#798589", fontSize: 16 }}>
        Входим в аккаунт…
      </p>
    </div>
  );
}
