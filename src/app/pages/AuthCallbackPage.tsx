/**
 * AuthCallbackPage — handles redirect after OAuth (Google) or magic link.
 * Supabase auto-extracts tokens from the URL, then we redirect to the app.
 *
 * Important: the Supabase SDK processes PKCE / OTP tokens asynchronously.
 * We must listen to onAuthStateChange instead of only calling getSession()
 * once — otherwise we navigate away before the session is established.
 */

import { useEffect } from "react";
import { useNavigate } from "react-router";
import { supabase } from "../../../utils/supabase/client";
import { projectId } from "../../../utils/supabase/info";
import type { Session } from "@supabase/supabase-js";

export default function AuthCallbackPage() {
  const navigate = useNavigate();

  useEffect(() => {
    let cancelled = false;
    let resolved = false;

    async function handleSession(session: Session) {
      if (resolved || cancelled) return;
      resolved = true;

      const user = session.user;
      try {
        if (user.email) localStorage.setItem("uxeo-user-email", user.email);
      } catch {}

      // null = API failed (unknown), true = confirmed existing, false = confirmed new
      let hasExistingProgress: boolean | null = null;
      try {
        const res = await fetch(
          `https://${projectId}.supabase.co/functions/v1/make-server-d627d1b0/user/progress`,
          { headers: { Authorization: `Bearer ${session.access_token}` } }
        );
        if (res.ok) {
          const payload = await res.json().catch(() => ({}));
          hasExistingProgress = Boolean(payload?.found);
        }
        // if !res.ok → stays null (API error, e.g. missing columns) → fall back to HomeRedirect
      } catch {
        // network error → null → fall back to HomeRedirect
      }

      if (cancelled) return;

      if (hasExistingProgress === false) {
        // Confirmed new user → onboarding
        const provider = user.app_metadata?.provider ?? "email";
        fetch(`https://${projectId}.supabase.co/functions/v1/make-server-d627d1b0/user/registered`, {
          method: "POST",
          headers: { "Content-Type": "application/json", Authorization: `Bearer ${publicAnonKey}` },
          body: JSON.stringify({ email: user.email, provider, userId: user.id }),
        }).catch(() => {});
        navigate("/level", { replace: true });
        return;
      }

      if (hasExistingProgress === true) {
        // Confirmed existing user → skip HomeRedirect entirely (avoids onboarding on empty localStorage)
        navigate("/lessons", { replace: true });
        return;
      }

      // API failed → let HomeRedirect decide based on local state
      navigate("/", { replace: true });
    }

    function handleNoSession() {
      if (resolved || cancelled) return;
      resolved = true;
      navigate("/welcome", { replace: true });
    }

    // 1. Listen for auth state change — fires when SDK finishes processing the
    //    callback URL (PKCE exchange, OTP token, etc.)
    const { data: { subscription } } = supabase.auth.onAuthStateChange((_event, session) => {
      if (session && !resolved) {
        handleSession(session);
      }
    });

    // 2. Also check if session already exists (fast path for OAuth redirect)
    supabase.auth.getSession().then(({ data }) => {
      if (data.session && !resolved) {
        handleSession(data.session);
      }
    });

    // 3. Timeout: if nothing resolved in 8s, give up and go to welcome
    const timeout = setTimeout(() => {
      handleNoSession();
    }, 8000);

    return () => {
      cancelled = true;
      subscription.unsubscribe();
      clearTimeout(timeout);
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
