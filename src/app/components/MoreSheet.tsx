/**
 * MoreSheet — bottom sheet opened by the "···" tab.
 * Contains: Achievements, Notifications, Feedback, Contact, Bug report.
 */

import React, { useState, useEffect } from "react";
import { useNavigate } from "react-router";
import { useUserSafe } from "../context/UserContext";
import { ROADMAP_LESSONS } from "../../features/roadmap/roadmap-data";
import { FeedbackModal } from "./FeedbackModal";

interface MoreSheetProps {
  onClose: () => void;
}

// ── Icon components ───────────────────────────────────────────────────────────

function IconTrophy() {
  return (
    <svg width="22" height="22" viewBox="0 0 24 24" fill="none">
      <path d="M8 21h8M12 17v4M6 3H4a2 2 0 00-2 2v1a5 5 0 005 5h0M18 3h2a2 2 0 012 2v1a5 5 0 01-5 5h0" stroke="#FFB121" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
      <path d="M6 3h12v7a6 6 0 01-12 0V3z" stroke="#FFB121" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
    </svg>
  );
}

function IconBell() {
  return (
    <svg width="22" height="22" viewBox="0 0 24 24" fill="none">
      <path d="M18 8A6 6 0 006 8c0 7-3 9-3 9h18s-3-2-3-9M13.73 21a2 2 0 01-3.46 0" stroke="#798589" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
    </svg>
  );
}

function IconMessage() {
  return (
    <svg width="22" height="22" viewBox="0 0 24 24" fill="none">
      <path d="M21 15a2 2 0 01-2 2H7l-4 4V5a2 2 0 012-2h14a2 2 0 012 2z" stroke="#6DA233" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
    </svg>
  );
}

function IconMail() {
  return (
    <svg width="22" height="22" viewBox="0 0 24 24" fill="none">
      <path d="M4 4h16c1.1 0 2 .9 2 2v12c0 1.1-.9 2-2 2H4c-1.1 0-2-.9-2-2V6c0-1.1.9-2 2-2z" stroke="#5B9BD5" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
      <path d="M22 6l-10 7L2 6" stroke="#5B9BD5" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
    </svg>
  );
}

function IconBug() {
  return (
    <svg width="22" height="22" viewBox="0 0 24 24" fill="none">
      <path d="M8 2l1.5 1.5M15.5 3.5L17 2M12 8v4M12 16v2M9 12H5M19 12h-4M6.34 17.66l-1.41 1.42M19.07 19.07l-1.41-1.41M17.66 6.34l1.41-1.41M4.93 4.93l1.41 1.41" stroke="#E5686A" strokeWidth="2" strokeLinecap="round"/>
      <path d="M12 20a4 4 0 01-4-4V10a4 4 0 018 0v6a4 4 0 01-4 4z" stroke="#E5686A" strokeWidth="2" strokeLinecap="round"/>
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
      <p className="font-['Roboto_Condensed:ExtraBold',sans-serif] font-extrabold text-[#f4f5fc] text-[22px] leading-none">
        {value}
      </p>
      <p className="font-['Roboto_Condensed:Regular',sans-serif] font-normal text-[#798589] text-[12px] leading-none text-center">
        {label}
      </p>
    </div>
  );
}

// ── Menu item ─────────────────────────────────────────────────────────────────

function MenuItem({
  icon,
  label,
  sublabel,
  onClick,
  chevron = true,
}: {
  icon: React.ReactNode;
  label: string;
  sublabel?: string;
  onClick: () => void;
  chevron?: boolean;
}) {
  return (
    <button
      onClick={onClick}
      className="w-full flex items-center gap-[16px] rounded-[14px] px-[16px] active:opacity-70 transition-opacity duration-75"
      style={{ background: "#374348", minHeight: 56 }}
    >
      <div className="w-[36px] h-[36px] rounded-[10px] flex items-center justify-center shrink-0" style={{ background: "#2C3438" }}>
        {icon}
      </div>
      <div className="flex flex-col items-start flex-1 min-w-0 py-[10px]">
        <p className="font-['Roboto_Condensed:Medium',sans-serif] font-medium text-[#f1f2fb] text-[17px] leading-tight">
          {label}
        </p>
        {sublabel && (
          <p className="font-['Roboto_Condensed:Regular',sans-serif] font-normal text-[#798589] text-[13px] leading-tight">
            {sublabel}
          </p>
        )}
      </div>
      {chevron && (
        <svg width="8" height="14" viewBox="0 0 8 14" fill="none" className="shrink-0">
          <path d="M1 1l6 6-6 6" stroke="#4A5A62" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
        </svg>
      )}
    </button>
  );
}

// ── Achievements section ──────────────────────────────────────────────────────

function AchievementsSection({ xp, streak, completedCount }: { xp: number; streak: number; completedCount: number }) {
  // XP rank thresholds
  const ranks = [
    { min: 0,    label: "Новичок",   color: "#798589" },
    { min: 200,  label: "Ученик",    color: "#6DA233" },
    { min: 500,  label: "Практик",   color: "#5B9BD5" },
    { min: 1000, label: "Мастер",    color: "#FFB121" },
    { min: 2000, label: "Эксперт",   color: "#FF6B21" },
  ];
  const currentRank = [...ranks].reverse().find(r => xp >= r.min) ?? ranks[0];
  const nextRank = ranks[ranks.findIndex(r => r.label === currentRank.label) + 1];
  const progressToNext = nextRank
    ? Math.min(((xp - currentRank.min) / (nextRank.min - currentRank.min)) * 100, 100)
    : 100;

  return (
    <div className="flex flex-col gap-[12px]">
      {/* Rank banner */}
      <div
        className="flex items-center gap-[14px] rounded-[16px] px-[16px] py-[14px]"
        style={{ background: "#374348" }}
      >
        <div
          className="w-[48px] h-[48px] rounded-full flex items-center justify-center shrink-0"
          style={{ background: "rgba(255,177,33,0.15)" }}
        >
          <svg width="24" height="24" viewBox="0 0 24 24" fill="none">
            <path d="M12 2l2.4 7.4H22l-6.2 4.5 2.4 7.4L12 17l-6.2 4.3 2.4-7.4L2 9.4h7.6L12 2z" fill="#FFB121"/>
          </svg>
        </div>
        <div className="flex-1 flex flex-col gap-[6px]">
          <div className="flex items-center justify-between">
            <p className="font-['Roboto_Condensed:Bold',sans-serif] font-bold text-[#f4f5fc] text-[18px]" style={{ color: currentRank.color }}>
              {currentRank.label}
            </p>
            <p className="font-['Roboto_Condensed:Regular',sans-serif] font-normal text-[#798589] text-[13px]">
              {nextRank ? `до ${nextRank.label}: ${nextRank.min - xp} XP` : "Максимальный уровень"}
            </p>
          </div>
          {/* Progress to next rank */}
          <div className="h-[6px] rounded-full overflow-hidden" style={{ background: "#2C3438" }}>
            <div
              className="h-full rounded-full transition-[width] duration-500"
              style={{
                width: `${progressToNext}%`,
                background: `linear-gradient(90deg, ${currentRank.color} 0%, #FF6B21 100%)`,
              }}
            />
          </div>
        </div>
      </div>

      {/* Stats row */}
      <div className="flex gap-[8px]">
        <StatCard
          icon={
            <svg width="22" height="22" viewBox="0 0 24 24" fill="none">
              <path d="M13 2L3 14h9l-1 8 10-12h-9l1-8z" fill="#FF6B21"/>
            </svg>
          }
          value={xp}
          label="Очков XP"
        />
        <StatCard
          icon={
            <svg width="22" height="22" viewBox="0 0 24 24" fill="none">
              <path d="M12 2C8.13 2 5 5.13 5 9c0 5.25 7 13 7 13s7-7.75 7-13c0-3.87-3.13-7-7-7zm0 9.5c-1.38 0-2.5-1.12-2.5-2.5s1.12-2.5 2.5-2.5 2.5 1.12 2.5 2.5-1.12 2.5-2.5 2.5z" fill="#FFB121"/>
            </svg>
          }
          value={streak}
          label="Дней подряд"
        />
        <StatCard
          icon={
            <svg width="22" height="22" viewBox="0 0 24 24" fill="none">
              <path d="M9 11l3 3L22 4" stroke="#6DA233" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round"/>
              <path d="M21 12v7a2 2 0 01-2 2H5a2 2 0 01-2-2V5a2 2 0 012-2h11" stroke="#6DA233" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
            </svg>
          }
          value={completedCount}
          label="Уроков пройдено"
        />
      </div>
    </div>
  );
}

// ── MoreSheet ─────────────────────────────────────────────────────────────────

export function MoreSheet({ onClose }: MoreSheetProps) {
  const navigate = useNavigate();
  const userCtx = useUserSafe();
  const [visible, setVisible] = useState(false);
  const [showFeedback, setShowFeedback] = useState(false);
  const [showAchievements, setShowAchievements] = useState(false);

  useEffect(() => {
    requestAnimationFrame(() => requestAnimationFrame(() => setVisible(true)));
  }, []);

  const handleClose = () => {
    setVisible(false);
    setTimeout(onClose, 300);
  };

  const handleNavigate = (path: string) => {
    handleClose();
    setTimeout(() => navigate(path), 150);
  };

  // Compute achievements data
  const xp = userCtx?.xp ?? 0;
  const streak = userCtx?.streak ?? 0;
  const lessonProgress = userCtx?.user.lessonProgress ?? {};
  const completedCount = ROADMAP_LESSONS.filter(
    l => l.quizId && lessonProgress[l.lessonId]?.isCompleted
  ).length;

  if (showFeedback) {
    return <FeedbackModal onClose={() => setShowFeedback(false)} />;
  }

  return (
    <div className="fixed inset-0 z-[80] flex items-end" onClick={handleClose}>
      {/* Backdrop */}
      <div
        className="absolute inset-0 bg-black/50 transition-opacity duration-300"
        style={{ opacity: visible ? 1 : 0 }}
      />

      {/* Sheet */}
      <div
        className="relative w-full flex flex-col gap-[16px] px-[16px] pt-[20px] pb-[36px]"
        style={{
          background: "#2C3438",
          borderRadius: "24px 24px 0 0",
          maxHeight: "80vh",
          overflowY: "auto",
          transform: visible ? "translateY(0)" : "translateY(100%)",
          transition: "transform 0.32s cubic-bezier(0.32,0.72,0,1)",
        }}
        onClick={(e) => e.stopPropagation()}
      >
        {/* Drag handle */}
        <div className="w-[40px] h-[4px] rounded-full mx-auto mb-[4px]" style={{ background: "#4A5A62" }} />

        {/* Header */}
        <div className="flex items-center justify-between">
          <p className="font-['Roboto_Condensed:Bold',sans-serif] font-bold text-[#f4f5fc] text-[22px]">
            Меню
          </p>
          <button onClick={handleClose} className="text-[#798589] active:scale-90 transition-transform w-[32px] h-[32px] flex items-center justify-center">
            <svg width="20" height="20" viewBox="0 0 24 24" fill="none">
              <path d="M18 6L6 18M6 6L18 18" stroke="currentColor" strokeWidth="2" strokeLinecap="round" />
            </svg>
          </button>
        </div>

        {/* Achievements toggle */}
        <div className="flex flex-col gap-[10px]">
          <button
            onClick={() => setShowAchievements(v => !v)}
            className="w-full flex items-center gap-[16px] rounded-[14px] px-[16px] active:opacity-70 transition-all duration-200"
            style={{ background: "#374348", minHeight: 56 }}
          >
            <div className="w-[36px] h-[36px] rounded-[10px] flex items-center justify-center shrink-0" style={{ background: "#2C3438" }}>
              <IconTrophy />
            </div>
            <div className="flex flex-col items-start flex-1 min-w-0 py-[10px]">
              <p className="font-['Roboto_Condensed:Medium',sans-serif] font-medium text-[#f1f2fb] text-[17px] leading-tight">
                Мои достижения
              </p>
              <p className="font-['Roboto_Condensed:Regular',sans-serif] font-normal text-[#798589] text-[13px] leading-tight">
                {xp} XP · {streak} дней · {completedCount} уроков
              </p>
            </div>
            <svg
              width="16" height="16" viewBox="0 0 24 24" fill="none"
              className="shrink-0 transition-transform duration-200"
              style={{ transform: showAchievements ? "rotate(180deg)" : "rotate(0deg)" }}
            >
              <path d="M6 9l6 6 6-6" stroke="#4A5A62" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
            </svg>
          </button>

          {/* Achievements expanded */}
          {showAchievements && (
            <div className="overflow-hidden" style={{ animation: "slideDown 0.2s ease" }}>
              <AchievementsSection xp={xp} streak={streak} completedCount={completedCount} />
            </div>
          )}
        </div>

        {/* Divider */}
        <div className="h-[1px] w-full" style={{ background: "rgba(86,101,107,0.3)" }} />

        {/* Menu items */}
        <div className="flex flex-col gap-[8px]">
          <MenuItem
            icon={<IconBell />}
            label="Уведомления"
            sublabel="Напоминания и обновления"
            onClick={() => handleNavigate("/notifications")}
          />
          <MenuItem
            icon={<IconMessage />}
            label="Обратная связь"
            sublabel="Оцените приложение и получите подарок"
            onClick={() => { setShowFeedback(true); }}
            chevron={false}
          />
          <MenuItem
            icon={<IconMail />}
            label="Написать нам"
            sublabel="Вопросы, предложения, партнёрство"
            onClick={() => {
              handleClose();
              window.open("mailto:hello@uxeo.app?subject=Написать нам", "_blank");
            }}
          />
          <MenuItem
            icon={<IconBug />}
            label="Сообщить об ошибке"
            sublabel="Помогите нам стать лучше"
            onClick={() => {
              handleClose();
              window.open("mailto:hello@uxeo.app?subject=Ошибка в приложении", "_blank");
            }}
          />
        </div>

        {/* App version */}
        <p className="text-center font-['Roboto_Condensed:Regular',sans-serif] font-normal text-[#4A5A62] text-[12px] mt-[4px]">
          UXEO · версия 1.0.0
        </p>
      </div>

      <style>{`
        @keyframes slideDown {
          from { opacity: 0; transform: translateY(-8px); }
          to   { opacity: 1; transform: translateY(0); }
        }
      `}</style>
    </div>
  );
}
