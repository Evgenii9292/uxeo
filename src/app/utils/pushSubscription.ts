/**
 * pushSubscription — Web Push subscription management.
 * Registers the service worker, requests permission, subscribes user.
 */

import { projectId, publicAnonKey } from "../../../utils/supabase/info";

const VAPID_PUBLIC_KEY = "BL_hbaNX4_LKT4o90dgOTkXXUXZ3ASR2wQKw1VR2iMvr0Py8cSMPwxdCtlCawBqg3yb7fVGSCRPCMx4O1RumsuE";
const BASE = `https://${projectId}.supabase.co/functions/v1/make-server-d627d1b0`;

function urlBase64ToUint8Array(base64String: string): Uint8Array {
  const padding = "=".repeat((4 - (base64String.length % 4)) % 4);
  const base64 = (base64String + padding).replace(/-/g, "+").replace(/_/g, "/");
  const raw = atob(base64);
  return Uint8Array.from({ length: raw.length }, (_, i) => raw.charCodeAt(i));
}

/** Register the service worker (call once on app start) */
export async function registerSW(): Promise<ServiceWorkerRegistration | null> {
  if (!("serviceWorker" in navigator)) return null;
  try {
    return await navigator.serviceWorker.register("/sw.js", { scope: "/" });
  } catch (err) {
    console.error("[push] SW registration failed:", err);
    return null;
  }
}

/** Subscribe user to push notifications and save subscription on server */
export async function subscribePush(userId: string): Promise<boolean> {
  if (!("Notification" in window) || !("serviceWorker" in navigator) || !("PushManager" in window)) {
    return false;
  }

  // Request permission
  const permission = await Notification.requestPermission();
  if (permission !== "granted") return false;

  try {
    const reg = await navigator.serviceWorker.ready;
    // Check if already subscribed
    let sub = await reg.pushManager.getSubscription();
    if (!sub) {
      sub = await reg.pushManager.subscribe({
        userVisibleOnly: true,
        applicationServerKey: urlBase64ToUint8Array(VAPID_PUBLIC_KEY),
      });
    }

    // Send subscription to server
    const res = await fetch(`${BASE}/push/subscribe`, {
      method: "POST",
      headers: { "Content-Type": "application/json", Authorization: `Bearer ${publicAnonKey}` },
      body: JSON.stringify({ userId, subscription: sub.toJSON() }),
    });
    return res.ok;
  } catch (err) {
    console.error("[push] Subscribe failed:", err);
    return false;
  }
}

/** Unsubscribe user from push notifications */
export async function unsubscribePush(userId: string): Promise<void> {
  if (!("serviceWorker" in navigator)) return;
  try {
    const reg = await navigator.serviceWorker.ready;
    const sub = await reg.pushManager.getSubscription();
    if (sub) {
      await sub.unsubscribe();
      await fetch(`${BASE}/push/unsubscribe`, {
        method: "POST",
        headers: { "Content-Type": "application/json", Authorization: `Bearer ${publicAnonKey}` },
        body: JSON.stringify({ userId }),
      });
    }
  } catch (err) {
    console.error("[push] Unsubscribe failed:", err);
  }
}

/** Check current permission state without prompting */
export function getPushPermission(): NotificationPermission | "unsupported" {
  if (!("Notification" in window)) return "unsupported";
  return Notification.permission;
}
