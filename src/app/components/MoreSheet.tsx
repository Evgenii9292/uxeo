/**
 * MoreSheet — bottom sheet opened by the "···" tab.
 */

import React, { useLayoutEffect, useRef, useState } from "react";
import { useNavigate } from "react-router";
import skillumLongLogo from "../../assets/skillum-logo-long.svg";
import { useUserSafe } from "../context/UserContext";
import { FeedbackModal } from "./FeedbackModal";
import { ReportErrorModal } from "../pages/quiz/ReportErrorModal";

interface MoreSheetProps {
  onClose: () => void;
}

// Gray color for menu icons
const ICON_COLOR = "#798589";

// ── Gray icon components (sidebar style, no color) ────────────────────────────

/** Курсы — 4 squares */
function IconCourses() {
  return (
    <svg width="20" height="20" viewBox="0 0 24 24" fill="none">
      <rect x="3"    y="3"    width="7.5" height="7.5" rx="2" fill={ICON_COLOR} />
      <rect x="13.5" y="3"    width="7.5" height="7.5" rx="2" fill={ICON_COLOR} opacity="0.6"/>
      <rect x="3"    y="13.5" width="7.5" height="7.5" rx="2" fill={ICON_COLOR} opacity="0.6"/>
      <rect x="13.5" y="13.5" width="7.5" height="7.5" rx="2" fill={ICON_COLOR} />
    </svg>
  );
}

/** Профиль — person silhouette */
function IconProfile() {
  return (
    <svg width="20" height="20" viewBox="0 0 24 24" fill="none">
      <circle cx="12" cy="8" r="4" stroke={ICON_COLOR} strokeWidth="2"/>
      <path d="M4 20c0-4 3.582-7 8-7s8 3 8 7" stroke={ICON_COLOR} strokeWidth="2" strokeLinecap="round"/>
    </svg>
  );
}

/** О проекте — info circle */
function IconAbout() {
  return (
    <svg width="20" height="20" viewBox="0 0 24 24" fill="none">
      <circle cx="12" cy="12" r="10" stroke={ICON_COLOR} strokeWidth="2"/>
      <path d="M12 16v-4M12 8h.01" stroke={ICON_COLOR} strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
    </svg>
  );
}

/** Написать нам — Telegram */
function IconTelegram() {
  return (
    <svg width="20" height="20" viewBox="0 0 24 24" fill="none">
      <path
        d="M22 2L11 13"
        stroke={ICON_COLOR} strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"
      />
      <path
        d="M22 2L15 22L11 13L2 9L22 2Z"
        stroke={ICON_COLOR} strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"
      />
    </svg>
  );
}

/** Сообщить об ошибке — solid flag (same as sidebar footer) */
function IconFlag() {
  return (
    <svg width="20" height="20" viewBox="0 0 32 32" fill={ICON_COLOR}>
      <path d="m27 5h-9c0-1.6542969-1.3457031-3-3-3h-8c-.5522461 0-1 .4477539-1 1v16 10c0 .5522461.4477539 1 1 1s1-.4477539 1-1v-9h8c0 1.6542969 1.3457031 3 3 3h8c1.6542969 0 3-1.3457031 3-3v-12c0-1.6542969-1.3457031-3-3-3z"/>
    </svg>
  );
}

// ── Stat card ─────────────────────────────────────────────────────────────────

function StatCard({ icon, value, label }: { icon: React.ReactNode; value: string | number; label: string }) {
  return (
    <div
      className="flex-1 flex flex-col items-center gap-[6px] rounded-[14px] py-[14px] px-[8px]"
      style={{ background: "#374348" }}
    >
      <div>{icon}</div>
      <p className="font-['Roboto_Condensed:Medium',sans-serif] font-medium text-[#f4f5fc] text-[22px] leading-none">
        {value}
      </p>
      <p className="font-['Roboto_Condensed:Regular',sans-serif] font-normal text-[#798589] text-[12px] leading-none text-center">
        {label}
      </p>
    </div>
  );
}

// ── Menu item — flat, no card background ──────────────────────────────────────

function MenuItem({
  icon,
  label,
  onClick,
}: {
  icon: React.ReactNode;
  label: string;
  onClick: () => void;
}) {
  return (
    <button
      onClick={onClick}
      className="w-full flex items-center gap-[14px] px-[4px] py-[2px] rounded-[10px] active:opacity-50 transition-opacity duration-75"
      style={{ minHeight: 44, background: "transparent" }}
    >
      <div className="w-[28px] flex items-center justify-center shrink-0">
        {icon}
      </div>
      <p className="font-['Roboto_Condensed:Medium',sans-serif] font-medium text-[#f1f2fb] text-[17px] leading-tight flex-1 text-left">
        {label}
      </p>
    </button>
  );
}

// ── Achievements section ──────────────────────────────────────────────────────

function AchievementsSection({ xp, streak }: { xp: number; streak: number }) {
  return (
    <div className="flex gap-[8px]">
      <StatCard
        icon={
          <img src="/fire-icon-active.png" width={22} height={22} style={{ objectFit: "contain" }} alt="" loading="eager" decoding="async" />
        }
        value={xp}
        label="Очков XP"
      />
      <StatCard
        icon={
          <img src="/zap-icon-active.png" width={22} height={22} style={{ objectFit: "contain" }} alt="" loading="eager" decoding="async" />
        }
        value={streak}
        label="Дней подряд"
      />
    </div>
  );
}

// ── MoreSheet ─────────────────────────────────────────────────────────────────

export function MoreSheet({ onClose }: MoreSheetProps) {
  const navigate = useNavigate();
  const userCtx = useUserSafe();
  const [visible, setVisible] = useState(false);
  const [dragOffset, setDragOffset] = useState(0);
  const [showFeedback, setShowFeedback] = useState(false);
  const [showReport, setShowReport] = useState(false);
  const touchStartYRef = useRef<number | null>(null);
  const canDragRef = useRef(false);
  const SHEET_ANIMATION_MS = 260;

  useLayoutEffect(() => {
    setVisible(true);
  }, []);

  const handleClose = () => {
    setVisible(false);
    setTimeout(onClose, SHEET_ANIMATION_MS);
  };

  const handleNavigate = (path: string) => {
    handleClose();
    setTimeout(() => navigate(path), 110);
  };

  const xp = userCtx?.xp ?? 0;
  const streak = userCtx?.streak ?? 0;

  const handleTouchStart: React.TouchEventHandler<HTMLDivElement> = (e) => {
    if (e.touches.length !== 1) return;
    touchStartYRef.current = e.touches[0].clientY;
    canDragRef.current = e.currentTarget.scrollTop <= 0;
  };

  const handleTouchMove: React.TouchEventHandler<HTMLDivElement> = (e) => {
    if (!canDragRef.current || touchStartYRef.current === null) return;
    const currentY = e.touches[0].clientY;
    const delta = currentY - touchStartYRef.current;
    setDragOffset(Math.max(0, delta));
  };

  const handleTouchEnd: React.TouchEventHandler<HTMLDivElement> = () => {
    if (dragOffset > 80) {
      handleClose();
    } else {
      setDragOffset(0);
    }
    touchStartYRef.current = null;
    canDragRef.current = false;
  };

  if (showFeedback) {
    return <FeedbackModal onClose={() => setShowFeedback(false)} />;
  }

  if (showReport) {
    return <ReportErrorModal onClose={() => setShowReport(false)} context={`Страница: ${window.location.pathname}`} />;
  }

  return (
    <div className="fixed inset-0 z-[80] flex items-end" onClick={handleClose}>
      {/* Backdrop */}
      <div
        className="absolute inset-0 bg-black/50 transition-opacity duration-[220ms]"
        style={{ opacity: visible ? 1 : 0 }}
      />

      {/* Sheet */}
      <div
        className="relative w-full flex flex-col gap-[16px] px-[20px] pt-[20px] pb-[36px]"
        style={{
          background: "#2C3438",
          borderRadius: "24px 24px 0 0",
          maxHeight: "80vh",
          overflowY: "auto",
          WebkitOverflowScrolling: "touch",
          transform: visible ? `translateY(${dragOffset}px)` : "translateY(100%)",
          transition:
            dragOffset > 0
              ? "none"
              : `transform ${SHEET_ANIMATION_MS}ms cubic-bezier(0.22,1,0.36,1)`,
          willChange: "transform",
        }}
        onTouchStart={handleTouchStart}
        onTouchMove={handleTouchMove}
        onTouchEnd={handleTouchEnd}
        onTouchCancel={handleTouchEnd}
        onClick={(e) => e.stopPropagation()}
      >
        {/* Header */}
        <div className="flex items-start justify-between gap-[12px]">
          <img
            src={skillumLongLogo}
            alt="Skillum"
            className="block h-auto w-[146px] shrink-0"
            draggable={false}
          />
          <button onClick={handleClose} className="text-[#798589] active:scale-90 transition-transform w-[32px] h-[32px] flex items-center justify-center">
            <svg width="20" height="20" viewBox="0 0 24 24" fill="none">
              <path d="M18 6L6 18M6 6L18 18" stroke="currentColor" strokeWidth="2" strokeLinecap="round" />
            </svg>
          </button>
        </div>

        {/* Achievements — always visible */}
        <AchievementsSection xp={xp} streak={streak} />

        {/* Menu items — flat, no card backgrounds */}
        <div className="flex flex-col gap-[4px]">
          <MenuItem
            icon={<IconProfile />}
            label="Профиль"
            onClick={() => handleNavigate("/profile")}
          />
          <MenuItem
            icon={<IconCourses />}
            label="Курсы"
            onClick={() => handleNavigate("/courses")}
          />
          <MenuItem
            icon={<IconAbout />}
            label="О проекте"
            onClick={() => handleNavigate("/about")}
          />
          <MenuItem
            icon={<IconTelegram />}
            label="Написать нам"
            onClick={() => {
              handleClose();
              window.open("https://t.me/Evgeniy9292", "_blank");
            }}
          />
          <MenuItem
            icon={<IconFlag />}
            label="Сообщить об ошибке"
            onClick={() => setShowReport(true)}
          />
        </div>

        {/* App version */}
        <p className="text-center font-['Roboto_Condensed:Regular',sans-serif] font-normal text-[#4A5A62] text-[12px] mt-[4px]">
          Скиллум · версия 1.0.0
        </p>
      </div>
    </div>
  );
}
