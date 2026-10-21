/**
 * BottomTabBar — 5 tabs: Обучение · Курсы · Вызовы · Профиль · ···
 * The "···" tab opens the MoreSheet bottom drawer.
 */

import React, { lazy, Suspense, useState, useEffect } from "react";
import ReactDOM from "react-dom";
import { useLocation, useNavigate } from "react-router";
import { NOTIF_COUNT_KEY, NOTIF_INITIAL_UNREAD } from "../utils/notifications";
import { hapticTap } from "../utils/haptics";

const MoreSheet = lazy(() => import("./MoreSheet").then((mod) => ({ default: mod.MoreSheet })));

// ── Lightweight tab icons ─────────────────────────────────────────────────────

function IconObuchenie({ active }: { active: boolean }) {
  const book = "#AF66DA";
  const mark = "#FED402";
  return (
    <svg width="29" height="29" viewBox="0 0 29 29" fill="none" aria-hidden="true">
      <rect x="5" y="4" width="8" height="21" rx="3" fill={book} />
      <rect x="14" y="4" width="10" height="21" rx="3" fill="#9857BD" />
      <rect x="8" y="8" width="3" height="10" rx="1.5" fill={mark} />
    </svg>
  );
}

function IconVyzovy({ active }: { active: boolean }) {
  const cup = "#FFC12E";
  const accent = "#FF7403";
  return (
    <svg width="29" height="29" viewBox="0 0 29 29" fill="none" aria-hidden="true">
      <path d="M9 6h11v5.5c0 3.2-2.1 5.9-5.5 6.4C11.1 17.4 9 14.7 9 11.5V6Z" fill={cup} />
      <path d="M8.8 8H5.5c0 4 1.9 6.3 4.2 6.9" stroke={accent} strokeWidth="2" strokeLinecap="round" />
      <path d="M20.2 8h3.3c0 4-1.9 6.3-4.2 6.9" stroke={accent} strokeWidth="2" strokeLinecap="round" />
      <rect x="12.5" y="18" width="4" height="4" rx="1" fill={accent} />
      <rect x="9" y="22" width="11" height="3" rx="1.5" fill={cup} />
    </svg>
  );
}

function IconProfile({ active }: { active: boolean }) {
  const color = active ? "#00A091" : "#4E6068";
  return (
    <svg width="29" height="29" viewBox="0 0 29 29" fill="none" aria-hidden="true">
      <circle cx="14.5" cy="10" r="5" fill={active ? "#F0C087" : "#6B7B82"} />
      <path d="M6 25c.9-5 4.1-8 8.5-8s7.6 3 8.5 8" fill={color} />
    </svg>
  );
}

// ── Courses icon — simple clean book/grid ─────────────────────────────────────

function IconKursy({ active }: { active: boolean }) {
  const accent = active ? "#FF6B21" : "#4E6068";
  const muted  = active ? "#FF9A5C" : "#3A4A52";
  return (
    <div style={{ width: 29, height: 29 }}>
      <svg width="29" height="29" viewBox="0 0 29 29" fill="none" aria-hidden="true">
        <rect x="3" y="3" width="10" height="10.5" rx="3" fill={accent} />
        <rect x="16" y="3" width="10" height="10.5" rx="3" fill={muted} />
        <rect x="3" y="15.5" width="10" height="10.5" rx="3" fill={muted} />
        <rect x="16" y="15.5" width="10" height="10.5" rx="3" fill={accent} />
      </svg>
    </div>
  );
}

// ── More (···) icon ───────────────────────────────────────────────────────────

function IconMore({ active }: { active: boolean }) {
  const color = "#FF6B21";
  return (
    <div style={{ width: 29, height: 29 }}>
      <svg width="29" height="29" viewBox="0 0 29 29" fill="none" aria-hidden="true">
        <circle cx="6.5" cy="14.5" r="2.5" fill={color} />
        <circle cx="14.5" cy="14.5" r="2.5" fill={color} />
        <circle cx="22.5" cy="14.5" r="2.5" fill={color} />
      </svg>
    </div>
  );
}

// ── Notifications icon with unread dot ───────────────────────────────────────

function useNotifCount() {
  const [count, setCount] = useState<number>(() => {
    const v = localStorage.getItem(NOTIF_COUNT_KEY);
    return v !== null ? Number(v) : NOTIF_INITIAL_UNREAD;
  });
  useEffect(() => {
    const onCustom = (e: Event) => setCount((e as CustomEvent<number>).detail);
    window.addEventListener("notif-count-change", onCustom);
    return () => window.removeEventListener("notif-count-change", onCustom);
  }, []);
  return count;
}

function IconNotifications({ active }: { active: boolean }) {
  const notifCount = useNotifCount();
  const hasUnread = notifCount > 0;
  const color = "#FFB121";
  return (
    <div className="relative shrink-0" style={{ width: 29, height: 29 }}>
      <svg width="29" height="29" viewBox="0 0 29 29" fill="none" aria-hidden="true">
        <path d="M8 20h13l-1.4-2.4V12c0-3-2-5.2-5.1-5.2S9.4 9 9.4 12v5.6L8 20Z" fill={color} />
        <path d="M12 21.5c.4 1.2 1.3 2 2.5 2s2.1-.8 2.5-2" stroke="#FF9D21" strokeWidth="2" strokeLinecap="round" />
      </svg>
      {hasUnread && <span className="absolute right-[3px] top-[3px] size-[8px] rounded-full border-2 border-[#282F33] bg-[#FF6B21]" />}
    </div>
  );
}

// ── League tab icon — shows current trophy ────────────────────────────────────

function IconLeague({ active }: { active: boolean }) {
  return (
    <svg width="29" height="29" viewBox="0 0 29 29" fill="none" aria-hidden="true">
      <path d="M14.5 3.5L22 6.3V12.4C22 17.4 19 21.7 14.5 24.5C10 21.7 7 17.4 7 12.4V6.3L14.5 3.5Z" fill="#FFC12E" />
      <path d="M14.5 6.2L19.6 8.1V12.5C19.6 15.9 17.6 18.9 14.5 21C11.4 18.9 9.4 15.9 9.4 12.5V8.1L14.5 6.2Z" fill="#FF7403" opacity="0.9" />
      <path d="M14.5 9.1L15.8 11.8L18.8 12.2L16.6 14.3L17.1 17.3L14.5 15.9L11.9 17.3L12.4 14.3L10.2 12.2L13.2 11.8L14.5 9.1Z" fill="#FFF7D6" />
    </svg>
  );
}

// ── Tab config ────────────────────────────────────────────────────────────────

const NAV_TABS = [
  {
    key: "learning",
    path: "/lessons",
    matchPaths: ["/lessons", "/theory", "/contrast", "/homework", "/lesson-quiz"],
    Icon: IconObuchenie,
  },
  {
    key: "notifications",
    path: "/notifications",
    matchPaths: ["/notifications"],
    Icon: IconNotifications,
  },
  {
    key: "challenges",
    path: "/challenges",
    matchPaths: ["/challenges", "/challenge-detail"],
    Icon: IconVyzovy,
  },
  {
    key: "league",
    path: "/league",
    matchPaths: ["/league"],
    Icon: IconLeague,
  },
] as const;

// ── BottomTabBar ──────────────────────────────────────────────────────────────

export default function BottomTabBar() {
  const location = useLocation();
  const navigate = useNavigate();
  const [showMore, setShowMore] = useState(false);
  const [moreOpen, setMoreOpen] = useState(false);

  const isActive = (matchPaths: readonly string[]) =>
    matchPaths.some((p) =>
      p === "/" ? location.pathname === "/" : location.pathname.startsWith(p)
    );
  const activeIndex = NAV_TABS.findIndex((tab) => isActive(tab.matchPaths));

  return (
    <>
      <nav
        className="flex-none relative z-50 rounded-tl-[15px] rounded-tr-[15px]"
        style={{
          height: "var(--mobile-nav-height)",
          background: "rgba(45,54,58,0.95)",
          backdropFilter: "blur(14px)",
          WebkitBackdropFilter: "blur(14px)",
          borderTop: "1px solid rgba(86,101,107,0.35)",
          zIndex: showMore ? 90 : 50,
        }}
      >
        <div
          className="absolute left-0 right-0 flex items-center justify-around"
          style={{
            height: 60,
            top: 0,
            paddingLeft: 8,
            paddingRight: 8,
          }}
        >
          {activeIndex >= 0 && !showMore && (
            <div
              className="absolute rounded-[13px] pointer-events-none"
              style={{
                left: `calc(8px + ((100% - 16px) / 5) * ${activeIndex} + 6px)`,
                top: 8,
                width: "calc((100% - 16px) / 5 - 12px)",
                height: 44,
                background: "rgba(255,255,255,0.07)",
                transition: "left 260ms cubic-bezier(0.22,1,0.36,1), width 260ms cubic-bezier(0.22,1,0.36,1)",
                willChange: "left",
              }}
            />
          )}
          {/* Nav tabs */}
          {NAV_TABS.map((tab) => {
            const { Icon } = tab;
            return (
              <button
                key={tab.key}
                aria-label={{learning:"Обучение",notifications:"Уведомления",challenges:"Вызовы",league:"Лига"}[tab.key]}
                onClick={() => { hapticTap(); setMoreOpen(false); navigate(tab.path); }}
                className="flex flex-col items-center justify-center flex-1 h-full cursor-pointer border-0 outline-none active:scale-90 transition-transform duration-75 relative"
                style={{
                  background: "transparent",
                  opacity: 1,
                  pointerEvents: "auto",
                }}
              >
                <span className="inline-flex" style={{transform:"scale(1.14)"}}><Icon active /></span>
              </button>
            );
          })}

          {/* More (···) button */}
          <button aria-label="Ещё" aria-expanded={showMore}
            onClick={() => {
              hapticTap();
              if (showMore) setMoreOpen(false);
              else {
                setMoreOpen(true);
                setShowMore(true);
              }
            }}
            className="flex flex-col items-center justify-center flex-1 h-full cursor-pointer border-0 outline-none active:scale-90 transition-transform duration-75 relative"
            style={{ background: "transparent" }}
          >
            <span className="inline-flex" style={{transform:"scale(1.14)"}}><IconMore active /></span>
          </button>
        </div>
      </nav>

      {/* MoreSheet — rendered via portal to escape transform stacking context */}
      {showMore && ReactDOM.createPortal(
        <Suspense fallback={null}>
          <MoreSheet open={moreOpen} onClose={() => setShowMore(false)} />
        </Suspense>,
        document.body
      )}
    </>
  );
}
