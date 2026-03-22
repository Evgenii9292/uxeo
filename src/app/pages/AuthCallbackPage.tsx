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
    // Supabase picks up the token from the URL automatically (detectSessionInUrl: true).
    // We just wait for the session to be established, then redirect.
    supabase.auth.getSession().then(({ data }) => {
      if (data.session) {
        // Notify if new user (created_at within last 60 seconds)
        const user = data.session.user;
        const createdAt = new Date(user.created_at).getTime();
        const isNew = Date.now() - createdAt < 60_000;
        if (isNew) {
          const provider = user.app_metadata?.provider ?? "email";
          fetch(`https://${projectId}.supabase.co/functions/v1/make-server-d627d1b0/user/registered`, {
            method: "POST",
            headers: { "Content-Type": "application/json", Authorization: `Bearer ${publicAnonKey}` },
            body: JSON.stringify({ email: user.email, provider, userId: user.id }),
          }).catch(() => {});
        }
        navigate("/", { replace: true });
      } else {
        // Try once more after a short delay (token exchange may still be in progress)
        setTimeout(() => navigate("/", { replace: true }), 1500);
      }
    });
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
