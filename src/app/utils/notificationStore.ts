/**
 * notificationStore — persistent event log in localStorage.
 * Real notification events (lesson completed, streak, league, achievement).
 */

export type NotifType =
  | 'lesson_completed'
  | 'streak_extended'
  | 'league_promoted'
  | 'achievement_unlocked';

export interface NotifEvent {
  id: string;
  type: NotifType;
  timestamp: number; // Date.now()
  read: boolean;
  data: Record<string, unknown>;
}

const STORE_KEY = 'skillum_notif_events';
const MAX_EVENTS = 60;

export function getEvents(): NotifEvent[] {
  try {
    const raw = localStorage.getItem(STORE_KEY);
    return raw ? (JSON.parse(raw) as NotifEvent[]) : [];
  } catch {
    return [];
  }
}

function persist(events: NotifEvent[]) {
  localStorage.setItem(STORE_KEY, JSON.stringify(events));
  window.dispatchEvent(new CustomEvent('notif-events-change'));
}

export function addEvent(event: Omit<NotifEvent, 'id' | 'read'>): void {
  const events = getEvents();
  const newEvent: NotifEvent = {
    ...event,
    id: crypto.randomUUID(),
    read: false,
  };
  persist([newEvent, ...events].slice(0, MAX_EVENTS));
}

export function markEventRead(id: string): void {
  persist(getEvents().map(e => (e.id === id ? { ...e, read: true } : e)));
}

export function markEventUnread(id: string): void {
  persist(getEvents().map(e => (e.id === id ? { ...e, read: false } : e)));
}

export function deleteEvent(id: string): void {
  persist(getEvents().filter(e => e.id !== id));
}

export function clearAllEvents(): void {
  persist([]);
}

export function getUnreadCount(): number {
  return getEvents().filter(e => !e.read).length;
}

/** Format timestamp to human-readable time string */
export function formatNotifTime(timestamp: number): string {
  const d = new Date(timestamp);
  const now = new Date();
  const isToday =
    d.getFullYear() === now.getFullYear() &&
    d.getMonth() === now.getMonth() &&
    d.getDate() === now.getDate();

  if (isToday) {
    return d.toLocaleTimeString('ru-RU', { hour: '2-digit', minute: '2-digit' });
  }

  const MONTHS = ['янв', 'фев', 'мар', 'апр', 'май', 'июн', 'июл', 'авг', 'сен', 'окт', 'ноя', 'дек'];
  return `${d.getDate()} ${MONTHS[d.getMonth()]}`;
}
