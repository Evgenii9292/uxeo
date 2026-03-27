/**
 * AuthCallbackPage — handles redirect after OAuth (Google) or magic link.
 * Supabase auto-extracts tokens from the URL, then we redirect to the app.
 */

import { useEffect } from "react";
import { useNavigate } from "react-router";
import { supabase } from "../../../utils/supabase/client";
import { projectId, publicAnonKey } from "../../../utils/supabase/info";

export default function AuthCallbackPage() {
  const navigate = useNavigate();

  useEffect(() => {
    let cancelled = false;

    async function resolveRedirect() {
      const { data } = await supabase.auth.getSession();
      if (!data.session) {
        setTimeout(() => {
          if (!cancelled) navigate("/", { replace: true });
        }, 1500);
        return;
      }

      const user = data.session.user;
      try {
        if (user.email) {
          localStorage.setItem("uxeo-user-email", user.email);
        }
      } catch {}

      let hasExistingProgress = true; // safe default: assume existing on API error
      try {
        const res = await fetch(
          `https://${projectId}.supabase.co/functions/v1/make-server-d627d1b0/user/progress?userId=${encodeURIComponent(user.id)}`,
          { headers: { Authorization: `Bearer ${publicAnonKey}` } }
        );
        if (res.ok) {
          const payload = await res.json().catch(() => ({}));
          hasExistingProgress = Boolean(payload?.found);
        }
      } catch {
        // API unavailable — treat as existing user to avoid false "new user" notifications
        hasExistingProgress = true;
      }

      if (!hasExistingProgress) {
        const provider = user.app_metadata?.provider ?? "email";
        fetch(`https://${projectId}.supabase.co/functions/v1/make-server-d627d1b0/user/registered`, {
          method: "POST",
          headers: { "Content-Type": "application/json", Authorization: `Bearer ${publicAnonKey}` },
          body: JSON.stringify({ email: user.email, provider, userId: user.id }),
        }).catch(() => {});
        if (!cancelled) navigate("/level", { replace: true });
        return;
      }

      if (!cancelled) navigate("/", { replace: true });
    }

    resolveRedirect();

    return () => {
      cancelled = true;
    };
  }, [navigate]);

  return (
    <div
      style={{
        minHeight: "100vh",
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
