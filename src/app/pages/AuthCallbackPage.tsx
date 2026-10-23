import { LoadingScreen } from "../components/LoadingScreen";
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
      navigate("/welcome?authError=1", { replace: true });
    }

    const { data: { subscription } } = supabase.auth.onAuthStateChange((_event, session) => {
      if (session && !resolved) handleSession(session);
    });

    const completeAuth = async () => {
      // detectSessionInUrl already consumes the OAuth code/hash once during client initialization.
      // getSession waits for that initialization; a second exchange would reuse a one-time code.
      const { data } = await supabase.auth.getSession();
      if (data.session && !resolved) handleSession(data.session);
      else if (!data.session) handleNoSession();
    };

    completeAuth().catch(handleNoSession);

    const timeout = window.setTimeout(handleNoSession, 8000);

    return () => {
      cancelled = true;
      subscription.unsubscribe();
      window.clearTimeout(timeout);
    };
  }, [navigate]);

  return <LoadingScreen label="Входим в аккаунт…" />;
}
