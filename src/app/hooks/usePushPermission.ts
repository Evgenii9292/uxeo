/**
 * usePushPermission — subscribes authenticated user to push after a delay.
 * Called once from the root layout. Does nothing if already subscribed or denied.
 */
import { useEffect } from "react";
import { registerSW, subscribePush, getPushPermission } from "../utils/pushSubscription";
import { useAuthSafe } from "../context/AuthContext";

const ASKED_KEY = "skillum_push_asked";
const DELAY_MS = 30_000; // 30s after login

export function usePushPermission() {
  const auth = useAuthSafe();
  const userId = auth?.userId;

  useEffect(() => {
    if (!userId) return;
    const permission = getPushPermission();
    if (permission === "unsupported" || permission === "denied") return;
    if (localStorage.getItem(ASKED_KEY) === "granted") {
      // Already granted — re-subscribe silently (in case SW was updated)
      registerSW().then(() => subscribePush(userId));
      return;
    }
    if (localStorage.getItem(ASKED_KEY) === "asked") return; // already asked, user ignored

    // First time — delay 30s then ask
    const id = setTimeout(async () => {
      localStorage.setItem(ASKED_KEY, "asked");
      await registerSW();
      const ok = await subscribePush(userId);
      if (ok) localStorage.setItem(ASKED_KEY, "granted");
    }, DELAY_MS);

    return () => clearTimeout(id);
  }, [userId]);
}
