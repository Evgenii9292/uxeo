/**
 * serverNotifications — fetch / mutate server-side in-app notifications.
 * These live in the Supabase `notifications` table and are separate from
 * the localStorage notificationStore events.
 */

import { projectId } from "../../../utils/supabase/info";

export interface ServerNotif {
  id: string;
  user_id: string;
  type: string;          // e.g. "daily_reminder"
  title: string;
  body: string;
  data: Record<string, unknown>;
  read: boolean;
  created_at: string;    // ISO-8601
}

const BASE = `https://${projectId}.supabase.co/functions/v1/make-server-d627d1b0`;

export async function fetchServerNotifs(userId: string): Promise<ServerNotif[]> {
  try {
    const res = await fetch(`${BASE}/notifications?userId=${encodeURIComponent(userId)}`);
    if (!res.ok) return [];
    const json = await res.json();
    return Array.isArray(json.notifications) ? json.notifications : [];
  } catch {
    return [];
  }
}

export async function markServerNotifRead(id: string, userId: string): Promise<void> {
  try {
    await fetch(`${BASE}/notifications/${encodeURIComponent(id)}/read`, {
      method: "PATCH",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify({ userId }),
    });
  } catch {
    // best effort
  }
}

export async function deleteServerNotif(id: string, userId: string): Promise<void> {
  try {
    await fetch(
      `${BASE}/notifications/${encodeURIComponent(id)}?userId=${encodeURIComponent(userId)}`,
      { method: "DELETE" }
    );
  } catch {
    // best effort
  }
}
