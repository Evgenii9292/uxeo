import { useState, useEffect, useRef } from "react";
import type { ReactNode } from "react";

// ─── Shared notification count (localStorage) ─────────────────────────────────
export const NOTIF_COUNT_KEY = "skillum_notif_unread_count";
export const NOTIF_INITIAL_UNREAD = 8; // DATA items with isRead: false

import {
  getEvents,
  markEventRead,
  markEventUnread,
  deleteEvent,
  clearAllEvents,
  formatNotifTime,
  type NotifEvent,
} from "../utils/notificationStore";
import {
  fetchServerNotifs,
  markServerNotifRead,
  deleteServerNotif,
  type ServerNotif,
} from "../utils/serverNotifications";
import { useNavigate } from "react-router";
import Layout from "../components/Layout";
import { useHomeworkSafe } from "../context/HomeworkContext";
import svgPaths from "../../imports/svg-6p9skem17z";
import imgImageColor from "figma:asset/848cc9d9d2ee375b005fbdca2522ab616019dc08.png";

// ─── Types ────────────────────────────────────────────────────────────────────

type Filter = "all" | "unread" | "action";

interface NotifData {
  id: number;
  date: "today" | "yesterday" | "earlier";
  isRead: boolean;
  hasAction: boolean;
}

const DATA: NotifData[] = [
  { id: 1,  date: "today",     isRead: false, hasAction: true  },
  { id: 2,  date: "today",     isRead: false, hasAction: false },
  { id: 3,  date: "today",     isRead: false, hasAction: false },
  { id: 4,  date: "today",     isRead: false, hasAction: true  },
  { id: 5,  date: "today",     isRead: false, hasAction: false },
  { id: 6,  date: "yesterday", isRead: false, hasAction: true  },
  { id: 7,  date: "yesterday", isRead: true,  hasAction: false },
  { id: 8,  date: "yesterday", isRead: false, hasAction: false },
  { id: 9,  date: "yesterday", isRead: true,  hasAction: true  },
  { id: 10, date: "yesterday", isRead: false, hasAction: false },
  { id: 11, date: "yesterday", isRead: true,  hasAction: false },
  { id: 12, date: "earlier",   isRead: false, hasAction: true  },
  { id: 13, date: "earlier",   isRead: true,  hasAction: false },
  { id: 14, date: "earlier",   isRead: true,  hasAction: true  },
  { id: 15, date: "earlier",   isRead: true,  hasAction: false },
  { id: 16, date: "earlier",   isRead: true,  hasAction: false },
  { id: 17, date: "earlier",   isRead: true,  hasAction: true  },
  { id: 18, date: "earlier",   isRead: true,  hasAction: false },
  { id: 19, date: "earlier",   isRead: true,  hasAction: true  },
  { id: 20, date: "earlier",   isRead: true,  hasAction: false },
  { id: 21, date: "earlier",   isRead: true,  hasAction: false },
  { id: 22, date: "earlier",   isRead: true,  hasAction: false },
  { id: 23, date: "earlier",   isRead: true,  hasAction: true  },
  { id: 24, date: "earlier",   isRead: true,  hasAction: false },
  { id: 25, date: "earlier",   isRead: true,  hasAction: true  },
];

// ─── Shared: dot indicator (visual only) ─────────────────────────────────────

function DotIndicator({ isRead }: { isRead: boolean }) {
  return (
    <div style={{ width: 9, height: 9, borderRadius: '50%', background: isRead ? '#2D3539' : '#FE6B21' }} />
  );
}

// ─── Shared: action link chevron ──────────────────────────────────────────────

function ChevronRight() {
  return (
    <div className="h-[14px] relative shrink-0 w-[6px]">
      <div className="absolute inset-[0_0_0_-12.5%]">
        <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 6.75 14">
          <path d={svgPaths.p8df6480} stroke="#596367" strokeLinecap="round" strokeWidth="1.5" />
        </svg>
      </div>
    </div>
  );
}


// ─── Inline icons ─────────────────────────────────────────────────────────────

function ZapGradient() {
  return (
    <img src="/zap-icon.svg" width={16} height={18} className="shrink-0" style={{ display: 'block', objectFit: 'contain', filter: 'brightness(0) saturate(100%) invert(49%) sepia(79%) saturate(1117%) hue-rotate(348deg) brightness(103%)' }} />
  );
}

function ZapWhite() {
  return (
    <img src="/zap-icon.svg" width={16} height={18} className="shrink-0" style={{ display: 'block', objectFit: 'contain', filter: 'brightness(0) saturate(100%) invert(49%) sepia(79%) saturate(1117%) hue-rotate(348deg) brightness(103%)' }} />
  );
}

function FireInline() {
  return (
    <img src="/fire-icon.svg" width={16} height={18} className="shrink-0" style={{ display: 'block', objectFit: 'contain', filter: 'brightness(0) saturate(100%) invert(72%) sepia(76%) saturate(751%) hue-rotate(357deg) brightness(102%)' }} />
  );
}

function LeagueStarIcon() {
  return (
    <div className="overflow-clip relative shrink-0 size-[22px]">
      <div className="absolute h-[20.461px] left-[0.75px] top-[0.42px] w-[20.402px]">
        <div className="absolute h-[20.53px] left-0 top-0 w-[20.471px]">
          <svg className="absolute block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 20.471 20.5302">
            <path d={svgPaths.p359cf780} fill="#FF6B21" />
            <path d={svgPaths.p16d99800} fill="#353E41" />
            <path d={svgPaths.p34a48e00} fill="#2572D0" />
            <path d={svgPaths.pf4bf00}   fill="#2572D0" />
            <path d={svgPaths.p188e5900} fill="#2572D0" />
            <path d={svgPaths.p153f380}  fill="#21589C" />
            <path d={svgPaths.p1a98c700} fill="#353E41" />
            <path d={svgPaths.p6195800}  fill="#353E41" />
            <path d={svgPaths.p32f38940} fill="#2572D0" />
            <path d={svgPaths.p3a4d9100} fill="#2572D0" />
            <path d={svgPaths.p2b17a480} fill="#353E41" />
          </svg>
        </div>
      </div>
    </div>
  );
}

function PencilInline() {
  return (
    <div className="overflow-clip relative shrink-0 size-[22px]">
      <div className="absolute contents inset-[0_2.59%]">
        <div className="absolute inset-[52.36%_49.45%_19.52%_22.11%]">
          <svg className="absolute block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 6.25728 6.18698"><path d={svgPaths.p24fc2470} fill="#FFB09E" /></svg>
        </div>
        <div className="absolute inset-[52.49%_49.59%_23.03%_22.25%]">
          <svg className="absolute block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 6.19582 5.38517"><path d={svgPaths.p27e91100} fill="#F89580" /></svg>
        </div>
        <div className="absolute inset-[57.03%_54.44%_0_2.59%]">
          <svg className="absolute block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 9.45353 9.45353"><path d={svgPaths.p18040200} fill="#01D0FB" /></svg>
        </div>
        <div className="absolute inset-[57.03%_54.44%_11.68%_2.59%]">
          <svg className="absolute block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 9.45353 6.88425"><path d={svgPaths.p23d13072} fill="#01C0FA" /></svg>
        </div>
        <div className="absolute inset-[38.59%_29.4%_25.05%_30.17%]">
          <svg className="absolute block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 8.89556 7.99918"><path d={svgPaths.p2773f800} fill="#FFB09E" /></svg>
        </div>
        <div className="absolute inset-[0_2.59%_18.27%_15.68%]">
          <svg className="absolute block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 17.9807 17.9802">
            <path d={svgPaths.p10edc8d0} fill="#FFCEBF" />
            <path d={svgPaths.p8845200}  fill="#F4F5FC" />
            <path d={svgPaths.p3bdfb480} fill="#FD6930" />
            <path d={svgPaths.p2d67ec00} fill="#FFD15B" />
            <path d={svgPaths.p22eb1100} fill="#FFD15B" />
            <path d={svgPaths.p1e1b42c0} fill="#FFC344" />
            <path d={svgPaths.p1504d180} fill="#FFC344" />
            <path d={svgPaths.p37751500} fill="#EF4424" />
            <path d={svgPaths.pc3b000}   fill="#FEB137" />
            <path d={svgPaths.p32a11f30} fill="#FEB137" />
            <path d={svgPaths.p27617200} fill="#FEB137" />
            <path d={svgPaths.p2d4fba00} fill="#FFB09E" />
            <path d={svgPaths.p3aea4880} fill="#E1D3CE" />
            <path d={svgPaths.p1eb3800}  fill="#CDBFBA" />
          </svg>
        </div>
      </div>
    </div>
  );
}

// ─── Module thumbnail ─────────────────────────────────────────────────────────

function ModuleThumb() {
  return (
    <div className="bg-[#404d52] content-stretch flex flex-col items-start px-[8px] py-[12px] relative rounded-[10px] shrink-0 size-[46px]">
      <div className="flex h-[22px] items-center justify-center relative shrink-0 w-[30px]">
        <div className="-rotate-90 flex-none">
          <div className="h-[30px] relative w-[22px]">
            <div className="absolute inset-0 overflow-hidden pointer-events-none">
              <img alt="" className="absolute h-[100.81%] left-[-5.82%] max-w-none top-[-0.4%] w-[111.64%]" src={imgImageColor} />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

// ─── Warning icon ─────────────────────────────────────────────────────────────

function WarningIcon() {
  return (
    <div className="h-[18px] relative shrink-0 w-[13px]">
      <div className="absolute inset-[15.72%_-3.5%_15.71%_-1.18%]">
        <svg className="absolute block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 13.6079 12.3425">
          <path clipRule="evenodd" d={svgPaths.p3bc0b780} fill="#BABEC4" fillRule="evenodd" />
        </svg>
      </div>
    </div>
  );
}

// ─── Filter bar ──────────────────────────────────────────────────────────────

function FilterBar({
  active,
  unreadCount,
  onChange,
  onDeleteAll,
}: {
  active: Filter;
  unreadCount: number;
  onChange: (f: Filter) => void;
  onDeleteAll: () => void;
}) {
  const tab = (f: Filter, label: string, badge?: ReactNode) => (
    <div
      key={f}
      className="content-stretch flex gap-[10px] h-full items-center justify-center px-[20px] relative rounded-[13.846px] shrink-0 cursor-pointer"
      style={{ background: active === f ? "#404d52" : "#323d41" }}
      onClick={() => onChange(f)}
    >
      <p className="font-['Roboto_Condensed:Medium',sans-serif] font-medium leading-[27.5px] relative shrink-0 text-[18px] whitespace-nowrap" style={{ color: "rgba(244,245,252,0.7)" }}>
        {label}
      </p>
      {badge}
    </div>
  );

  const badge = unreadCount > 0 ? (
    <div className="bg-[#fe6b21] h-[24px] relative rounded-[12296925px] shrink-0">
      <div className="bg-clip-padding border-0 border-[transparent] border-solid content-stretch flex h-full items-center justify-center px-[6px] relative">
        <p className="font-['Inter:Extra_Bold',sans-serif] font-medium leading-[15.392px] not-italic relative shrink-0 text-[#2c3538] text-[12px] whitespace-nowrap">
          {unreadCount}
        </p>
      </div>
    </div>
  ) : undefined;

  return (
    <div className="flex gap-[10px] h-[40px] items-center w-full">
      {/* Scrollable tabs */}
      <div
        className="flex gap-[10px] h-full items-start flex-1 min-w-0"
        style={{ overflowX: "auto", scrollbarWidth: "none", WebkitOverflowScrolling: "touch" }}
      >
        {tab("all", "Все")}
        {tab("unread", "Непрочитанные", badge)}
        {tab("action", "Требуют действия", <WarningIcon />)}
      </div>
      {/* Delete all button */}
      <button
        onClick={onDeleteAll}
        className="shrink-0 flex items-center justify-center rounded-[13.846px] cursor-pointer transition-opacity hover:opacity-70 active:opacity-50"
        style={{ width: 40, height: 40, background: "#323d41", border: "none" }}
        title="Удалить все"
      >
        <svg width="18" height="18" viewBox="0 0 24 24" fill="none">
          <path d="M3 6h18M8 6V4h8v2M19 6l-1 14H6L5 6" stroke="#798589" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
        </svg>
      </button>
    </div>
  );
}

// ─── Shared interactive card wrapper ─────────────────────────────────────────
// hasAction: if true → full card is clickable with cursor-pointer style
// onOpen: called when card body is clicked (only cards with actions navigate)

interface CardShellProps {
  isRead: boolean;
  hasAction?: boolean;
  onToggleRead: () => void;
  onOpen: () => void;
  time: string;
  subtitle?: string;
  actionText?: string;
  onAction?: () => void;
  children: ReactNode; // title content
}

function CardShell({ isRead, hasAction = true, onToggleRead, onOpen, time, subtitle, actionText, onAction, children }: CardShellProps) {
  const MUTED = "#596367";
  return (
    <div
      className={`group relative w-full ${hasAction ? 'cursor-pointer' : ''}`}
      onClick={hasAction ? onOpen : undefined}
    >
      {hasAction && (
        <div className="absolute inset-0 opacity-0 group-hover:opacity-100 transition-opacity pointer-events-none" style={{ background: '#2A3236' }} />
      )}
      <div className="relative flex items-stretch py-[20px]">
        {/* Status dot */}
        <button
          className="shrink-0 outline-none bg-transparent border-none cursor-pointer"
          style={{ alignSelf: 'flex-start', marginTop: 7, marginRight: 15 }}
          onClick={e => { e.stopPropagation(); onToggleRead(); }}
          aria-label={isRead ? 'Отметить как непрочитанное' : 'Отметить как прочитанное'}
          title={isRead ? 'Отметить как непрочитанное' : 'Отметить как прочитанное'}
        >
          <DotIndicator isRead={isRead} />
        </button>
        {/* Left: title + subtitle */}
        <div className="flex-1 min-w-0 flex flex-col gap-[5px]">
          <div style={{ opacity: isRead ? 0.5 : 1 }}>
            {children}
          </div>
          {subtitle && (
            <p className="font-['Roboto_Condensed:Regular',sans-serif] font-normal text-[16px] leading-[20px]" style={{ color: MUTED }}>
              {subtitle}
            </p>
          )}
        </div>
        {/* Right: time + action */}
        <div className="shrink-0 self-stretch flex flex-col justify-between items-end" style={{ marginLeft: 16 }}>
          <p className="font-['Roboto_Condensed:Medium',sans-serif] font-medium text-[14px] leading-[20px] whitespace-nowrap" style={{ color: MUTED }}>{time}</p>
          {actionText && (
            <button
              className="flex items-center gap-[6px] border-none bg-transparent outline-none cursor-pointer shrink-0"
              style={{ color: MUTED }}
              onClick={e => { e.stopPropagation(); onAction?.(); }}
            >
              <span className="font-['Roboto_Condensed:Regular',sans-serif] font-normal text-[14px] whitespace-nowrap">{actionText}</span>
              <ChevronRight />
            </button>
          )}
        </div>
      </div>
    </div>
  );
}

// ─── Card props ──────────────────────────────────────────────────────────────

interface CardProps {
  isRead: boolean;
  onToggleRead: () => void;
  onOpen: () => void;
  onAction?: () => void;
  hasAction?: boolean;
}

// Card 1 — Проверена ваша работа 📝
function Card1({ isRead, onToggleRead, onOpen, onAction, hasAction }: CardProps) {
  return (
    <CardShell isRead={isRead} hasAction={hasAction} onToggleRead={onToggleRead} onOpen={onOpen}
      time="9:14"
      subtitle="Мы оставили фидбек по заданию «Интерфейс приложения здоровья»"
      actionText={onAction ? "Смотреть фидбек" : undefined} onAction={onAction}>
      <p className="font-['Roboto_Condensed:Medium',sans-serif] font-medium leading-[0] text-[#f4f5fc] text-[0px] whitespace-nowrap">
        <span className="leading-[22px] text-[18px]">Проверена ваша работа </span>
        <span className="leading-[22px] text-[20px]">📝</span>
      </p>
    </CardShell>
  );
}

// Card 2 — Новые 🎨 недельные вызовы
function Card2({ isRead, onToggleRead, onOpen, onAction, hasAction }: CardProps) {
  return (
    <CardShell isRead={isRead} hasAction={hasAction} onToggleRead={onToggleRead} onOpen={onOpen}
      time="18:15" subtitle="Доступны 3 новых задания"
      actionText={onAction ? "Смотреть задания" : undefined} onAction={onAction}>
      <div className="flex gap-[5px] items-center">
        <p className="font-['Roboto_Condensed:Medium',sans-serif] font-medium text-[18px] leading-[22px] text-[#f4f5fc] whitespace-nowrap">Новые </p>
        <PencilInline />
        <p className="font-['Roboto_Condensed:Medium',sans-serif] font-medium text-[18px] leading-[22px] text-[#f1f7fb] whitespace-nowrap">недельные вызовы</p>
      </div>
    </CardShell>
  );
}

// Card 3 — Вы получили ⚡ 1250 XP (no action link — not clickable, Fix #14)
function Card3({ isRead, onToggleRead, onOpen, hasAction }: CardProps) {
  return (
    <CardShell isRead={isRead} hasAction={hasAction} onToggleRead={onToggleRead} onOpen={onOpen}
      time="17:15" subtitle="Отличная работа!">
      <div className="flex gap-[5px] items-center">
        <p className="font-['Roboto_Condensed:Medium',sans-serif] font-medium text-[18px] leading-[22px] text-[#f4f5fc] whitespace-nowrap">Вы получили </p>
        <ZapGradient />
        <p className="font-['Roboto_Condensed:Medium',sans-serif] font-medium text-[18px] leading-[22px] whitespace-nowrap" style={{ background: "linear-gradient(193deg,#ff6b21 49%,#994014 112%)", WebkitBackgroundClip: "text", WebkitTextFillColor: "transparent" }}>1250 XP</p>
      </div>
    </CardShell>
  );
}

// Card 4 — Вы перешли в ⭐ лигу Silver
function Card4({ isRead, onToggleRead, onOpen, onAction, hasAction }: CardProps) {
  return (
    <CardShell isRead={isRead} hasAction={hasAction} onToggleRead={onToggleRead} onOpen={onOpen}
      time="3 мар" subtitle="Продолжайте обучение!"
      actionText={onAction ? "Продолжить обучение" : undefined} onAction={onAction}>
      <div className="flex gap-[5px] items-center">
        <p className="font-['Roboto_Condensed:Medium',sans-serif] font-medium text-[18px] leading-[22px] text-[#f4f5fc] whitespace-nowrap">Вы перешли в </p>
        <LeagueStarIcon />
        <p className="font-['Roboto_Condensed:Medium',sans-serif] font-medium text-[18px] leading-[22px] text-[#f4f5fc] whitespace-nowrap">лигу Silver</p>
      </div>
    </CardShell>
  );
}

// Card 5 — Вы не занимались 🔥 сегодня (no action link — not clickable, Fix #14)
function Card5({ isRead, onToggleRead, onOpen, hasAction }: CardProps) {
  return (
    <CardShell isRead={isRead} hasAction={hasAction} onToggleRead={onToggleRead} onOpen={onOpen}
      time="3 мар" subtitle="Серия из 5 дней может прерваться">
      <div className="flex gap-[5px] items-center">
        <p className="font-['Roboto_Condensed:Medium',sans-serif] font-medium text-[18px] leading-[22px] text-[#f4f5fc] whitespace-nowrap">Вы не занимались</p>
        <FireInline />
        <p className="font-['Roboto_Condensed:Medium',sans-serif] font-medium text-[18px] leading-[22px] text-[#f4f5fc] whitespace-nowrap">сегодня</p>
      </div>
    </CardShell>
  );
}

// Card 6 — Доступен новый модуль UX-исследования
function Card6({ isRead, onToggleRead, onOpen, onAction }: CardProps) {
  return (
    <CardShell isRead={isRead} onToggleRead={onToggleRead} onOpen={onOpen}
      time="2 мар"
      actionText={onAction ? "Начать модуль" : undefined} onAction={onAction}>
      <p className="font-['Roboto_Condensed:Medium',sans-serif] font-medium text-[18px] leading-[22px] text-[#f4f5fc]">
        Доступен новый модуль UX-исследования
      </p>
    </CardShell>
  );
}

// Card 7 — Вы начали задание ⚡
function Card7({ isRead, onToggleRead, onOpen, onAction }: CardProps) {
  return (
    <CardShell isRead={isRead} onToggleRead={onToggleRead} onOpen={onOpen}
      time="2 мар"
      subtitle="«Интерфейс приложения здоровья». Не забудьте закончить его"
      actionText={onAction ? "Продолжить задание" : undefined} onAction={onAction}>
      <div className="flex gap-[5px] items-center">
        <p className="font-['Roboto_Condensed:Medium',sans-serif] font-medium text-[18px] leading-[22px] text-[#f4f5fc] whitespace-nowrap">Вы начали задание</p>
        <ZapWhite />
      </div>
    </CardShell>
  );
}

// ─── Mock card generators ─────────────────────────────────────────────────────
// Parameterized cards for mock notifications — reuse existing CardShell & icons

// XP reward card (parameterized amount)
function CardXP({ isRead, onToggleRead, onOpen, hasAction, amount, description, time }: CardProps & { amount: number; description: string; time: string }) {
  return (
    <CardShell isRead={isRead} hasAction={hasAction} onToggleRead={onToggleRead} onOpen={onOpen} time={time} subtitle={description}>
      <div className="flex gap-[5px] items-center">
        <p className="font-['Roboto_Condensed:Medium',sans-serif] font-medium text-[18px] leading-[22px] text-[#f4f5fc] whitespace-nowrap">Вы получили </p>
        <ZapGradient />
        <p className="font-['Roboto_Condensed:Medium',sans-serif] font-medium text-[18px] leading-[22px] whitespace-nowrap" style={{ background: "linear-gradient(193deg,#ff6b21 49%,#994014 112%)", WebkitBackgroundClip: "text", WebkitTextFillColor: "transparent" }}>{amount} XP</p>
      </div>
    </CardShell>
  );
}

// Answer streak card (parameterized streak count)
function CardStreak({ isRead, onToggleRead, onOpen, hasAction, count, description, time }: CardProps & { count: number; description: string; time: string }) {
  return (
    <CardShell isRead={isRead} hasAction={hasAction} onToggleRead={onToggleRead} onOpen={onOpen} time={time} subtitle={description}>
      <div className="flex gap-[5px] items-center min-w-0">
        <p className="font-['Roboto_Condensed:Medium',sans-serif] font-medium text-[18px] leading-[22px] text-[#f4f5fc] whitespace-nowrap shrink-0">Серия</p>
        <FireInline />
        <p className="font-['Roboto_Condensed:Medium',sans-serif] font-medium text-[18px] leading-[22px] whitespace-nowrap shrink-0" style={{ background: 'linear-gradient(193deg,#FFB121 49%,#BB8116 112%)', WebkitBackgroundClip: 'text', WebkitTextFillColor: 'transparent' }}>{count}</p>
        <p className="font-['Roboto_Condensed:Medium',sans-serif] font-medium text-[18px] leading-[22px] text-[#f4f5fc] whitespace-nowrap overflow-hidden text-ellipsis">правильных ответов</p>
      </div>
    </CardShell>
  );
}

// Lesson completion card (parameterized lesson name)
function CardLessonComplete({ isRead, onToggleRead, onOpen, onAction, hasAction, lessonName, time }: CardProps & { lessonName: string; time: string }) {
  return (
    <CardShell isRead={isRead} hasAction={hasAction} onToggleRead={onToggleRead} onOpen={onOpen}
      time={time} subtitle="Отличная работа! Продолжайте обучение"
      actionText={onAction ? "Следующий урок" : undefined} onAction={onAction}>
      <p className="font-['Roboto_Condensed:Medium',sans-serif] font-medium leading-[0] text-[#f4f5fc] text-[0px]">
        <span className="leading-[22px] text-[18px]">Вы завершили урок «{lessonName}» </span>
        <span className="leading-[22px] text-[20px]">🎓</span>
      </p>
    </CardShell>
  );
}

// Reminder card (parameterized title + description)
function CardReminder({ isRead, onToggleRead, onOpen, onAction, hasAction, title, description, time }: CardProps & { title: string; description: string; time: string }) {
  return (
    <CardShell isRead={isRead} hasAction={hasAction} onToggleRead={onToggleRead} onOpen={onOpen}
      time={time} subtitle={description}
      actionText={onAction ? "Продолжить обучение" : undefined} onAction={onAction}>
      <p className="font-['Roboto_Condensed:Medium',sans-serif] font-medium text-[18px] leading-[22px] text-[#f4f5fc]">{title}</p>
    </CardShell>
  );
}

// New content card (parameterized title)
function CardNewContent({ isRead, onToggleRead, onOpen, onAction, hasAction, title, description, time }: CardProps & { title: string; description?: string; time: string }) {
  return (
    <CardShell isRead={isRead} hasAction={hasAction} onToggleRead={onToggleRead} onOpen={onOpen}
      time={time} subtitle={description}
      actionText={onAction ? "Посмотреть" : undefined} onAction={onAction}>
      <div className="flex gap-[5px] items-center">
        <p className="font-['Roboto_Condensed:Medium',sans-serif] font-medium text-[18px] leading-[22px] text-[#f4f5fc] whitespace-nowrap">{title}</p>
        <PencilInline />
      </div>
    </CardShell>
  );
}

// Task card (parameterized)
function CardTask({ isRead, onToggleRead, onOpen, onAction, hasAction, title, description, time }: CardProps & { title: string; description?: string; time: string }) {
  return (
    <CardShell isRead={isRead} hasAction={hasAction} onToggleRead={onToggleRead} onOpen={onOpen}
      time={time} subtitle={description}
      actionText={onAction ? "Посмотреть" : undefined} onAction={onAction}>
      <p className="font-['Roboto_Condensed:Medium',sans-serif] font-medium leading-[0] text-[#f4f5fc] text-[0px]">
        <span className="leading-[22px] text-[18px]">{title} </span>
        <span className="leading-[22px] text-[20px]">📝</span>
      </p>
    </CardShell>
  );
}

// Social card (parameterized)
function CardSocial({ isRead, onToggleRead, onOpen, hasAction, title, description, time }: CardProps & { title: string; description?: string; time: string }) {
  return (
    <CardShell isRead={isRead} hasAction={hasAction} onToggleRead={onToggleRead} onOpen={onOpen} time={time} subtitle={description}>
      <p className="font-['Roboto_Condensed:Medium',sans-serif] font-medium text-[18px] leading-[22px] text-[#f4f5fc]">{title}</p>
    </CardShell>
  );
}

// ─── Module completion card ───────────────────────────────────────────────────
function CardModuleComplete({ isRead, onToggleRead, onOpen, onAction, hasAction, moduleName, time }: CardProps & { moduleName: string; time: string }) {
  return (
    <CardShell isRead={isRead} hasAction={hasAction} onToggleRead={onToggleRead} onOpen={onOpen}
      time={time} subtitle={moduleName}
      actionText={onAction ? "Следующий модуль →" : undefined} onAction={onAction}>
      <div className="flex gap-[5px] items-center">
        <p className="font-['Roboto_Condensed:Medium',sans-serif] font-medium text-[18px] leading-[22px] text-[#f4f5fc] whitespace-nowrap">Вы завершили модуль</p>
        <LeagueStarIcon />
      </div>
    </CardShell>
  );
}

// ─── Empty state ──────────────────────────────────────────────────────────────

function EmptyState() {
  return (
    <div className="content-stretch flex flex-col items-center pb-[30px] pt-[20px] px-[20px] relative rounded-[15px] shrink-0 w-full">
      <div aria-hidden="true" className="absolute border-2 border-[#465256] border-dashed inset-0 pointer-events-none rounded-[15px]" />
      <div className="content-stretch flex gap-[16px] items-start relative shrink-0 w-full">
        <div className="h-[25px] shrink-0 w-[11px]" />
        <div className="content-stretch flex flex-col gap-[10px] items-start relative shrink-0 flex-1 min-w-0">
          <p className="font-['Roboto_Condensed:Regular',sans-serif] font-normal leading-[35px] relative shrink-0 text-[#798589] text-[28px] whitespace-nowrap">
            У вас пока нет уведомлений
          </p>
          <p className="font-['Roboto_Condensed:Regular',sans-serif] font-normal leading-[22px] opacity-60 relative shrink-0 text-[#798589] text-[18px] w-full">
            Начните обучение, и мы будем сообщать о прогрессе.
          </p>
        </div>
      </div>
    </div>
  );
}

// ─── Date group ───────────────────────────────────────────────────────────────

function DateGroup({ label, children }: { label: string; children: ReactNode }) {
  return (
    <div className="flex flex-col w-full">
      <p className="font-['Roboto_Condensed:Medium',sans-serif] font-medium text-[#798589] text-[16px] leading-[20px] mb-[8px]">{label}</p>
      <div className="flex flex-col divide-y divide-[#31393D]">
        {children}
      </div>
    </div>
  );
}

// ─── Real events hook (localStorage) ─────────────────────────────────────────

function useNotifEvents() {
  const [events, setEvents] = useState<NotifEvent[]>(() => getEvents());
  useEffect(() => {
    const refresh = () => setEvents(getEvents());
    window.addEventListener('notif-events-change', refresh);
    return () => window.removeEventListener('notif-events-change', refresh);
  }, []);
  return { events, refresh: () => setEvents(getEvents()) };
}

// ─── Server notifications hook (Supabase) ────────────────────────────────────

function useServerNotifications() {
  const userId = typeof localStorage !== "undefined"
    ? (localStorage.getItem("uxeo-user-id") ?? "")
    : "";
  const [notifs, setNotifs] = useState<ServerNotif[]>([]);

  useEffect(() => {
    if (!userId) return;
    fetchServerNotifs(userId).then(setNotifs);
  }, [userId]);

  const markRead = (id: string) => {
    setNotifs(prev => prev.map(n => n.id === id ? { ...n, read: true } : n));
    markServerNotifRead(id, userId);
  };

  const remove = (id: string) => {
    setNotifs(prev => prev.filter(n => n.id !== id));
    deleteServerNotif(id, userId);
  };

  return { notifs, markRead, remove };
}

// ─── Server notification card ─────────────────────────────────────────────────

function ServerNotifCard({
  notif,
  filter,
  onRead,
  onDelete,
}: {
  notif: ServerNotif;
  filter: string;
  onRead: (id: string) => void;
  onDelete: (id: string) => void;
}) {
  const navigate = useNavigate();
  const MUTED = "#596367";
  const timeStr = formatNotifTime(new Date(notif.created_at).getTime());

  if (filter === "unread" && notif.read) return null;
  if (filter === "action") return null; // daily reminders require no action

  const toggle = (e: React.MouseEvent) => {
    e.stopPropagation();
    onRead(notif.id);
  };

  if (notif.type === "daily_reminder") {
    return (
      <SwipeToDelete onDelete={() => onDelete(notif.id)}>
        <div
          className="group relative w-full cursor-pointer"
          onClick={() => { onRead(notif.id); navigate("/lessons"); }}
        >
          <div className="absolute inset-0 opacity-0 group-hover:opacity-100 transition-opacity pointer-events-none" style={{ background: '#2A3236' }} />
          <div className="relative flex items-stretch py-[20px]">
            <button
              className="shrink-0 outline-none bg-transparent border-none cursor-pointer"
              style={{ alignSelf: 'flex-start', marginTop: 7, marginRight: 15 }}
              onClick={toggle}
            >
              <div style={{ width: 9, height: 9, borderRadius: '50%', background: notif.read ? '#2D3539' : '#FE6B21' }} />
            </button>
            <div className="flex-1 min-w-0 flex flex-col gap-[5px]">
              <div style={{ opacity: notif.read ? 0.5 : 1 }}>
                <div className="flex gap-[5px] items-center">
                  <p className="font-['Roboto_Condensed:Medium',sans-serif] font-medium text-[18px] leading-[22px] text-[#f4f5fc]">
                    {notif.title}
                  </p>
                </div>
              </div>
              {notif.body ? (
                <p className="font-['Roboto_Condensed:Regular',sans-serif] font-normal text-[16px] leading-[20px]" style={{ color: MUTED }}>
                  {notif.body}
                </p>
              ) : null}
            </div>
            <div className="shrink-0 self-stretch flex flex-col justify-between items-end" style={{ marginLeft: 16 }}>
              <p className="font-['Roboto_Condensed:Medium',sans-serif] font-medium text-[14px] leading-[20px] whitespace-nowrap" style={{ color: MUTED }}>{timeStr}</p>
              <button
                className="flex items-center gap-[6px] border-none bg-transparent outline-none cursor-pointer"
                style={{ color: MUTED }}
                onClick={e => { e.stopPropagation(); onRead(notif.id); navigate("/lessons"); }}
              >
                <span className="font-['Roboto_Condensed:Regular',sans-serif] font-normal text-[14px] whitespace-nowrap">Продолжить</span>
                <ChevronRight />
              </button>
            </div>
          </div>
        </div>
      </SwipeToDelete>
    );
  }

  // Fallback for unknown server notif types
  return (
    <SwipeToDelete onDelete={() => onDelete(notif.id)}>
      <div className="group relative w-full">
        <div className="absolute inset-0 opacity-0 group-hover:opacity-100 transition-opacity pointer-events-none" style={{ background: '#2A3236' }} />
        <div className="relative flex items-stretch py-[20px]">
          <button
            className="shrink-0 outline-none bg-transparent border-none cursor-pointer"
            style={{ alignSelf: 'flex-start', marginTop: 7, marginRight: 15 }}
            onClick={toggle}
          >
            <div style={{ width: 9, height: 9, borderRadius: '50%', background: notif.read ? '#2D3539' : '#FE6B21' }} />
          </button>
          <div className="flex-1 min-w-0 flex flex-col gap-[5px]">
            <div style={{ opacity: notif.read ? 0.5 : 1 }}>
              <p className="font-['Roboto_Condensed:Medium',sans-serif] font-medium text-[18px] leading-[22px] text-[#f4f5fc]">
                {notif.title}
              </p>
            </div>
            {notif.body ? (
              <p className="font-['Roboto_Condensed:Regular',sans-serif] font-normal text-[16px] leading-[20px]" style={{ color: MUTED }}>
                {notif.body}
              </p>
            ) : null}
          </div>
          <div className="shrink-0 self-stretch flex flex-col justify-start items-end" style={{ marginLeft: 16 }}>
            <p className="font-['Roboto_Condensed:Medium',sans-serif] font-medium text-[14px] leading-[20px] whitespace-nowrap" style={{ color: MUTED }}>{timeStr}</p>
          </div>
        </div>
      </div>
    </SwipeToDelete>
  );
}

// ─── Swipe-to-delete wrapper ──────────────────────────────────────────────────

function SwipeToDelete({ children, onDelete }: { children: React.ReactNode; onDelete: () => void }) {
  const DELETE_W  = 80;   // delete button width px
  const SNAP_AT   = 34;   // snap open after this drag distance
  const FAST_VEL  = 0.45; // px/ms — flick velocity threshold
  const FULL_DEL  = 160;  // drag distance for immediate delete

  const [offset, setOffset]       = useState(0);
  const [animating, setAnimating] = useState(false);
  const [gone, setGone]           = useState(false);
  const [fastBg, setFastBg]       = useState(false);

  const startX  = useRef(0);
  const startY  = useRef(0);
  const startT  = useRef(0);
  const base    = useRef(0); // 0 = closed, -DELETE_W = open
  const isH     = useRef<boolean | null>(null);
  const active  = useRef(false);

  if (gone) return null;

  const snapTo = (target: number) => {
    base.current = target;
    setAnimating(true);
    setOffset(target);
  };

  const doDelete = () => {
    setFastBg(true);
    setAnimating(true);
    setOffset(-window.innerWidth);
    setTimeout(() => { onDelete(); setGone(true); }, 300);
  };

  const beginDrag = (clientX: number, clientY: number) => {
    startX.current = clientX;
    startY.current = clientY;
    startT.current = Date.now();
    isH.current    = null;
    active.current = true;
    setAnimating(false);
    setFastBg(false);
  };

  const moveDrag = (clientX: number, clientY: number) => {
    if (!active.current) return;
    const dx = clientX - startX.current;
    const dy = clientY - startY.current;
    if (isH.current === null) {
      if (Math.abs(dx) < 5 && Math.abs(dy) < 5) return;
      isH.current = Math.abs(dx) > Math.abs(dy);
    }
    if (!isH.current) return;
    const raw = base.current + dx;
    setOffset(Math.min(0, Math.max(-DELETE_W - 40, raw)));
  };

  const endDrag = (clientX: number) => {
    if (!active.current) return;
    active.current = false;
    const dx  = clientX - startX.current;
    const dt  = Math.max(Date.now() - startT.current, 1);
    const vel = Math.abs(dx) / dt;

    if ((vel > FAST_VEL && dx < -30) || dx < -FULL_DEL) { doDelete(); return; }

    const projected = base.current + dx;
    if (projected < -SNAP_AT) snapTo(-DELETE_W);
    else snapTo(0);
  };

  const onTouchStart = (e: React.TouchEvent) => beginDrag(e.touches[0].clientX, e.touches[0].clientY);
  const onTouchMove  = (e: React.TouchEvent) => moveDrag(e.touches[0].clientX, e.touches[0].clientY);
  const onTouchEnd   = (e: React.TouchEvent) => endDrag(e.changedTouches[0].clientX);

  const onMouseDown  = (e: React.MouseEvent) => { e.preventDefault(); beginDrag(e.clientX, e.clientY); };
  const onMouseMove  = (e: React.MouseEvent) => moveDrag(e.clientX, e.clientY);
  const onMouseUp    = (e: React.MouseEvent) => endDrag(e.clientX);
  const onMouseLeave = () => { if (active.current) endDrag(startX.current); };

  const isOpen = base.current !== 0;
  // Red panel width tracks the drag: hidden at rest, grows as you swipe
  const redWidth = fastBg ? undefined : Math.max(0, -offset);

  return (
    <div
      style={{ position: 'relative', overflow: 'hidden' }}
      onClick={isOpen ? () => snapTo(0) : undefined}
    >
      {/* Red background — only visible when swiped */}
      <div style={{
        position: 'absolute',
        right: 0,
        top: 0,
        bottom: 0,
        left: fastBg ? 0 : 'auto',
        width: fastBg ? undefined : redWidth,
        background: '#C0392B',
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'center',
        transition: animating && !fastBg ? 'width 0.28s ease' : fastBg ? 'left 0.28s ease' : 'none',
      }}>
        {!fastBg && redWidth >= DELETE_W && (
          <button
            onClick={(e) => { e.stopPropagation(); doDelete(); }}
            style={{
              background: 'transparent',
              border: 'none',
              color: 'white',
              fontSize: 13,
              fontFamily: "'Roboto Condensed', sans-serif",
              fontWeight: 500,
              cursor: 'pointer',
              display: 'flex',
              flexDirection: 'column',
              alignItems: 'center',
              gap: 4,
            }}
          >
            <svg width="20" height="20" viewBox="0 0 24 24" fill="none">
              <path d="M3 6h18M8 6V4h8v2M19 6l-1 14H6L5 6" stroke="white" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
            </svg>
            Удалить
          </button>
        )}
      </div>

      {/* Sliding content */}
      <div
        style={{
          transform: `translateX(${offset}px)`,
          transition: animating ? 'transform 0.28s ease' : 'none',
          touchAction: 'pan-y',
        }}
        onTouchStart={onTouchStart}
        onTouchMove={onTouchMove}
        onTouchEnd={onTouchEnd}
        onMouseDown={onMouseDown}
        onMouseMove={onMouseMove}
        onMouseUp={onMouseUp}
        onMouseLeave={onMouseLeave}
      >
        {children}
      </div>
    </div>
  );
}

// ─── Real event card ──────────────────────────────────────────────────────────

function RealNotifCard({ event, filter }: { event: NotifEvent; filter: string }) {
  const navigate = useNavigate();
  const { type, data, timestamp, read } = event;

  const toggle = (e: React.MouseEvent) => {
    e.stopPropagation();
    if (read) markEventUnread(event.id);
    else markEventRead(event.id);
  };

  const open = (path: string) => () => {
    markEventRead(event.id);
    navigate(path);
  };

  const MUTED = "#596367";
  const timeStr = formatNotifTime(timestamp);

  if (filter === "unread" && read) return null;
  if (filter === "action" && type !== "lesson_completed") return null;

  const renderContent = () => {
    if (type === "lesson_completed") {
      const xp = Number(data.xpEarned ?? 0);
      return (
        <div
          className="group relative w-full cursor-pointer"
          onClick={open("/lessons")}
        >
          <div className="absolute inset-0 opacity-0 group-hover:opacity-100 transition-opacity pointer-events-none" style={{ background: '#2A3236' }} />
          <div className="relative flex items-stretch py-[20px]">
            <button className="shrink-0 outline-none bg-transparent border-none cursor-pointer" style={{ alignSelf: 'flex-start', marginTop: 7, marginRight: 15 }} onClick={toggle}>
              <div style={{ width: 9, height: 9, borderRadius: '50%', background: read ? '#2D3539' : '#FE6B21' }} />
            </button>
            <div className="flex-1 min-w-0 flex flex-col gap-[5px]">
              <div style={{ opacity: read ? 0.5 : 1 }}>
                <p className="font-['Roboto_Condensed:Medium',sans-serif] font-medium text-[18px] leading-[22px] text-[#f4f5fc]">
                  Вы завершили урок «{String(data.lessonTitle ?? data.lessonId)}» 🎓
                </p>
              </div>
              {xp > 0 && (
                <div className="flex gap-[5px] items-center">
                  <ZapGradient />
                  <p className="font-['Roboto_Condensed:Medium',sans-serif] font-medium text-[16px] leading-[20px] whitespace-nowrap"
                    style={{ background: 'linear-gradient(193deg,#FF6B21 49%,#994014 112%)', WebkitBackgroundClip: 'text', WebkitTextFillColor: 'transparent' }}>
                    +{xp} XP
                  </p>
                </div>
              )}
            </div>
            <div className="shrink-0 self-stretch flex flex-col justify-between items-end" style={{ marginLeft: 16 }}>
              <p className="font-['Roboto_Condensed:Medium',sans-serif] font-medium text-[14px] leading-[20px] whitespace-nowrap" style={{ color: MUTED }}>{timeStr}</p>
              <button className="flex items-center gap-[6px] border-none bg-transparent outline-none cursor-pointer" style={{ color: MUTED }}
                onClick={open("/lessons")}>
                <span className="font-['Roboto_Condensed:Regular',sans-serif] font-normal text-[14px] whitespace-nowrap">Следующий урок</span>
                <ChevronRight />
              </button>
            </div>
          </div>
        </div>
      );
    }

    if (type === "streak_extended") {
      const streak = Number(data.streak ?? 1);
      return (
        <div className="group relative w-full">
          <div className="absolute inset-0 opacity-0 group-hover:opacity-100 transition-opacity pointer-events-none" style={{ background: '#2A3236' }} />
          <div className="relative flex items-stretch py-[20px]">
            <button className="shrink-0 outline-none bg-transparent border-none cursor-pointer" style={{ alignSelf: 'flex-start', marginTop: 7, marginRight: 15 }} onClick={toggle}>
              <div style={{ width: 9, height: 9, borderRadius: '50%', background: read ? '#2D3539' : '#FE6B21' }} />
            </button>
            <div className="flex-1 min-w-0 flex flex-col gap-[5px]">
              <div style={{ opacity: read ? 0.5 : 1 }}>
                <div className="flex gap-[5px] items-center min-w-0">
                  <p className="font-['Roboto_Condensed:Medium',sans-serif] font-medium text-[18px] leading-[22px] text-[#f4f5fc] whitespace-nowrap shrink-0">Серия</p>
                  <FireInline />
                  <p className="font-['Roboto_Condensed:Medium',sans-serif] font-medium text-[18px] leading-[22px] whitespace-nowrap shrink-0"
                    style={{ background: 'linear-gradient(193deg,#FFB121 49%,#BB8116 112%)', WebkitBackgroundClip: 'text', WebkitTextFillColor: 'transparent' }}>{streak}</p>
                  <p className="font-['Roboto_Condensed:Medium',sans-serif] font-medium text-[18px] leading-[22px] text-[#f4f5fc] whitespace-nowrap overflow-hidden text-ellipsis">{streak === 1 ? 'день!' : streak < 5 ? 'дня!' : 'дней!'}</p>
                </div>
              </div>
              <p className="font-['Roboto_Condensed:Regular',sans-serif] font-normal text-[16px] leading-[20px]" style={{ color: MUTED }}>Отличная работа! Продолжайте заниматься</p>
            </div>
            <div className="shrink-0 self-stretch flex flex-col justify-start items-end" style={{ marginLeft: 16 }}>
              <p className="font-['Roboto_Condensed:Medium',sans-serif] font-medium text-[14px] leading-[20px] whitespace-nowrap" style={{ color: MUTED }}>{timeStr}</p>
            </div>
          </div>
        </div>
      );
    }

    if (type === "league_promoted") {
      return (
        <div className="group relative w-full cursor-pointer" onClick={open("/league")}>
          <div className="absolute inset-0 opacity-0 group-hover:opacity-100 transition-opacity pointer-events-none" style={{ background: '#2A3236' }} />
          <div className="relative flex items-stretch py-[20px]">
            <button className="shrink-0 outline-none bg-transparent border-none cursor-pointer" style={{ alignSelf: 'flex-start', marginTop: 7, marginRight: 15 }} onClick={toggle}>
              <div style={{ width: 9, height: 9, borderRadius: '50%', background: read ? '#2D3539' : '#FE6B21' }} />
            </button>
            <div className="flex-1 min-w-0 flex flex-col gap-[5px]">
              <div style={{ opacity: read ? 0.5 : 1 }}>
                <p className="font-['Roboto_Condensed:Medium',sans-serif] font-medium text-[18px] leading-[22px] text-[#f4f5fc]">
                  Вы перешли в лигу {String(data.name)} ⭐
                </p>
              </div>
              <p className="font-['Roboto_Condensed:Regular',sans-serif] font-normal text-[16px] leading-[20px]" style={{ color: MUTED }}>Поздравляем с повышением!</p>
            </div>
            <div className="shrink-0 self-stretch flex flex-col justify-between items-end" style={{ marginLeft: 16 }}>
              <p className="font-['Roboto_Condensed:Medium',sans-serif] font-medium text-[14px] leading-[20px] whitespace-nowrap" style={{ color: MUTED }}>{timeStr}</p>
              <button className="flex items-center gap-[6px] border-none bg-transparent outline-none cursor-pointer" style={{ color: MUTED }} onClick={open("/league")}>
                <span className="font-['Roboto_Condensed:Regular',sans-serif] font-normal text-[14px] whitespace-nowrap">Смотреть лигу</span>
                <ChevronRight />
              </button>
            </div>
          </div>
        </div>
      );
    }

    if (type === "achievement_unlocked") {
      return (
        <div className="group relative w-full">
          <div className="absolute inset-0 opacity-0 group-hover:opacity-100 transition-opacity pointer-events-none" style={{ background: '#2A3236' }} />
          <div className="relative flex items-stretch py-[20px]">
            <button className="shrink-0 outline-none bg-transparent border-none cursor-pointer" style={{ alignSelf: 'flex-start', marginTop: 7, marginRight: 15 }} onClick={toggle}>
              <div style={{ width: 9, height: 9, borderRadius: '50%', background: read ? '#2D3539' : '#FE6B21' }} />
            </button>
            <div className="flex-1 min-w-0 flex flex-col gap-[5px]">
              <div style={{ opacity: read ? 0.5 : 1 }}>
                <p className="font-['Roboto_Condensed:Medium',sans-serif] font-medium text-[18px] leading-[22px] text-[#f4f5fc]">
                  {String(data.emoji)} {String(data.title)}
                </p>
              </div>
              <p className="font-['Roboto_Condensed:Regular',sans-serif] font-normal text-[16px] leading-[20px]" style={{ color: MUTED }}>{String(data.desc)}</p>
            </div>
            <div className="shrink-0 self-stretch flex flex-col justify-start items-end" style={{ marginLeft: 16 }}>
              <p className="font-['Roboto_Condensed:Medium',sans-serif] font-medium text-[14px] leading-[20px] whitespace-nowrap" style={{ color: MUTED }}>{timeStr}</p>
            </div>
          </div>
        </div>
      );
    }

    return null;
  };

  const content = renderContent();
  if (content === null) return null;

  return (
    <SwipeToDelete onDelete={() => deleteEvent(event.id)}>
      {content}
    </SwipeToDelete>
  );
}

// ─── Main page ────────────────────────────────────────────────────────────────

export default function NotificationsPage() {
  const navigate = useNavigate();
  const hwCtx = useHomeworkSafe();
  const [filter, setFilter] = useState<Filter>("all");
  const [showDeleteAllConfirm, setShowDeleteAllConfirm] = useState(false);

  // ── Real events from notificationStore (localStorage) ───────────────────────
  const { events } = useNotifEvents();

  // ── Server notifications (Supabase) ──────────────────────────────────────────
  const { notifs: serverNotifs, markRead: markServerRead, remove: removeServer } = useServerNotifications();

  // Group localStorage events by date label
  const todayStart = new Date(); todayStart.setHours(0, 0, 0, 0);
  const yesterdayStart = new Date(todayStart); yesterdayStart.setDate(yesterdayStart.getDate() - 1);
  const realToday     = events.filter(e => e.timestamp >= todayStart.getTime());
  const realYesterday = events.filter(e => e.timestamp >= yesterdayStart.getTime() && e.timestamp < todayStart.getTime());
  const realEarlier   = events.filter(e => e.timestamp < yesterdayStart.getTime());

  // Group server notifications by date label
  const srvToday     = serverNotifs.filter(n => new Date(n.created_at).getTime() >= todayStart.getTime());
  const srvYesterday = serverNotifs.filter(n => { const t = new Date(n.created_at).getTime(); return t >= yesterdayStart.getTime() && t < todayStart.getTime(); });
  const srvEarlier   = serverNotifs.filter(n => new Date(n.created_at).getTime() < yesterdayStart.getTime());

  const realUnread   = events.filter(e => !e.read).length;
  const serverUnread = serverNotifs.filter(n => !n.read).length;

  // Homework notifications (reviewed/rejected)
  const hwNotifs = (hwCtx?.homeworks ?? []).filter(
    hw => hw.status === "reviewed" || hw.status === "rejected"
  );
  const [hwRead, setHwRead] = useState<Record<string, boolean>>({});

  // Mark all as seen when page opens
  useEffect(() => {
    hwCtx?.markAllSeen();
    // Also pre-mark all hw notifs as read in local display
    const init: Record<string, boolean> = {};
    for (const hw of hwCtx?.homeworks ?? []) {
      if (hw.status === "reviewed" || hw.status === "rejected") init[hw.id] = false;
    }
    setHwRead(init);
  }, []); // eslint-disable-line react-hooks/exhaustive-deps

  const hwUnreadCount = hwNotifs.filter(hw => !hwRead[hw.id]).length;
  const unreadCount = realUnread + serverUnread + hwUnreadCount;

  // Sync count to localStorage so Sidebar badge can read it
  const prevCountRef = useRef<number | null>(null);
  useEffect(() => {
    if (prevCountRef.current !== unreadCount) {
      prevCountRef.current = unreadCount;
      localStorage.setItem(NOTIF_COUNT_KEY, String(unreadCount));
      window.dispatchEvent(new CustomEvent("notif-count-change", { detail: unreadCount }));
    }
  }, [unreadCount]);

  const listEmpty =
    hwNotifs.length === 0 &&
    events.length === 0 &&
    serverNotifs.length === 0;

  const handleDeleteAll = () => {
    // Clear localStorage events
    clearAllEvents();
    // Clear server notifications
    for (const n of serverNotifs) removeServer(n.id);
    setShowDeleteAllConfirm(false);
  };

  return (
    <Layout title="Уведомления" rightWidth="320px" stickyBar={<FilterBar active={filter} unreadCount={unreadCount} onChange={setFilter} onDeleteAll={() => setShowDeleteAllConfirm(true)} />}>
      <div className="flex flex-col gap-[25px] w-full">

        {/* Notification list */}
        <div className="content-stretch flex flex-col gap-[30px] items-start relative shrink-0 w-full pb-[40px]">

          {listEmpty && <EmptyState />}

          {/* ── Homework status notifications (real, from backend) ── */}
          {hwNotifs.length > 0 && (filter === "all" || filter === "action" || filter === "unread") && (
            <DateGroup label="Домашние работы">
              {hwNotifs.map(hw => {
                const isRead = hwRead[hw.id] ?? false;
                const label = hw.status === "reviewed" ? "Работа проверена ✅" : "Нужно переделать ↩";
                const desc  = hw.status === "reviewed"
                  ? `Мы проверили задание «${hw.lesson_name}». Посмотрите результат.`
                  : `Задание «${hw.lesson_name}» требует доработки.`;
                const color = hw.status === "reviewed" ? "#5EDD60" : "#FF5D39";
                const lessonId = hw.lesson_id || hw.lesson_name;
                if (filter === "unread" && isRead) return null;
                return (
                  <div
                    key={hw.id}
                    className="group relative w-full cursor-pointer"
                    onClick={() => {
                      setHwRead(p => ({ ...p, [hw.id]: true }));
                      navigate("/homework", { state: { homeworkId: lessonId } });
                    }}
                  >
                    <div className="absolute inset-0 opacity-0 group-hover:opacity-100 transition-opacity pointer-events-none" style={{ background: '#2A3236' }} />
                    <div className="relative flex items-stretch py-[20px]">
                      {/* Dot */}
                      <button
                        className="shrink-0 outline-none bg-transparent border-none cursor-pointer"
                        style={{ alignSelf: 'flex-start', marginTop: 7, marginRight: 15 }}
                        onClick={e => { e.stopPropagation(); setHwRead(p => ({ ...p, [hw.id]: !p[hw.id] })); }}
                      >
                        <div style={{ width: 9, height: 9, borderRadius: '50%', background: isRead ? '#2D3539' : '#FE6B21' }} />
                      </button>
                      {/* Left */}
                      <div className="flex-1 min-w-0 flex flex-col gap-[10px]">
                        <div style={{ opacity: isRead ? 0.5 : 1 }}>
                          <p className="font-['Roboto_Condensed:Medium',sans-serif] font-medium text-[18px] leading-[22px] whitespace-nowrap" style={{ color }}>
                            {label}
                          </p>
                        </div>
                        <p className="font-['Roboto_Condensed:Regular',sans-serif] font-normal text-[16px] leading-[20px]" style={{ color: "#596367" }}>{desc}</p>
                        {hw.comment && (
                          <div className="px-[12px] py-[10px] rounded-[10px]" style={{ background: hw.status === "reviewed" ? "rgba(94,221,96,0.08)" : "rgba(255,93,57,0.08)", borderLeft: `3px solid ${hw.status === "reviewed" ? "#5EDD60" : "#FF5D39"}` }}>
                            <p className="font-['Roboto_Condensed:Regular',sans-serif] font-normal text-[14px] text-[rgba(244,245,252,0.85)] leading-[20px]">{hw.comment}</p>
                          </div>
                        )}
                        {hw.image_url && (
                          <img src={hw.image_url} alt="Скриншот от проверяющего" className="w-full rounded-[10px] object-cover" style={{ maxHeight: 200 }} onClick={e => e.stopPropagation()} />
                        )}
                      </div>
                      {/* Right */}
                      <div className="shrink-0 self-stretch flex flex-col justify-between items-end" style={{ marginLeft: 16 }}>
                        <p className="font-['Roboto_Condensed:Medium',sans-serif] font-medium text-[14px] leading-[20px] whitespace-nowrap" style={{ color: "#596367" }}>
                          {new Date(hw.created_at).toLocaleDateString("ru-RU", { day: "numeric", month: "short" })}
                        </p>
                        <button
                          className="flex items-center gap-[6px] border-none bg-transparent outline-none cursor-pointer"
                          style={{ color: "#596367" }}
                          onClick={e => { e.stopPropagation(); setHwRead(p => ({ ...p, [hw.id]: true })); navigate("/homework", { state: { homeworkId: lessonId } }); }}
                        >
                          <span className="font-['Roboto_Condensed:Regular',sans-serif] font-normal text-[14px] whitespace-nowrap">
                            {hw.status === "reviewed" ? "Смотреть результат" : "Переделать работу"}
                          </span>
                          <ChevronRight />
                        </button>
                      </div>
                    </div>
                  </div>
                );
              })}
            </DateGroup>
          )}

          {/* ── Today: localStorage + server notifications ───────────────────── */}
          {(realToday.length > 0 || srvToday.length > 0) && (filter === "all" || filter === "unread" || filter === "action") && (
            <DateGroup label="Сегодня">
              {srvToday.map(n => (
                <ServerNotifCard key={n.id} notif={n} filter={filter} onRead={markServerRead} onDelete={removeServer} />
              ))}
              {realToday.map(e => <RealNotifCard key={e.id} event={e} filter={filter} />)}
            </DateGroup>
          )}

          {/* ── Yesterday: localStorage + server notifications ───────────────── */}
          {(realYesterday.length > 0 || srvYesterday.length > 0) && (filter === "all" || filter === "unread" || filter === "action") && (
            <DateGroup label="Вчера">
              {srvYesterday.map(n => (
                <ServerNotifCard key={n.id} notif={n} filter={filter} onRead={markServerRead} onDelete={removeServer} />
              ))}
              {realYesterday.map(e => <RealNotifCard key={e.id} event={e} filter={filter} />)}
            </DateGroup>
          )}

          {/* ── Earlier: localStorage + server notifications ─────────────────── */}
          {(realEarlier.length > 0 || srvEarlier.length > 0) && (filter === "all" || filter === "unread" || filter === "action") && (
            <DateGroup label="Ранее">
              {srvEarlier.map(n => (
                <ServerNotifCard key={n.id} notif={n} filter={filter} onRead={markServerRead} onDelete={removeServer} />
              ))}
              {realEarlier.map(e => <RealNotifCard key={e.id} event={e} filter={filter} />)}
            </DateGroup>
          )}

        </div>
      </div>

      {/* ── Delete all confirmation popup ── */}
      {showDeleteAllConfirm && (
        <div className="fixed inset-0 z-[200] flex items-center justify-center px-[24px]" style={{ background: 'rgba(0,0,0,0.6)' }} onClick={() => setShowDeleteAllConfirm(false)}>
          <div
            className="w-full max-w-[380px] flex flex-col gap-[18px] p-[24px]"
            style={{ background: '#2C3438', borderRadius: '24px' }}
            onClick={e => e.stopPropagation()}
          >
            <div className="flex flex-col gap-[8px]">
              <p className="font-['Roboto_Condensed:Medium',sans-serif] font-medium text-[#f4f5fc] text-[22px]">Удалить все уведомления?</p>
              <p className="font-['Roboto_Condensed:Regular',sans-serif] font-normal text-[#798589] text-[16px] leading-[1.4]">Все уведомления будут удалены безвозвратно.</p>
            </div>
            <div className="flex flex-col gap-[10px]">
              <button
                onClick={handleDeleteAll}
                className="w-full h-[52px] rounded-[13px] flex items-center justify-center cursor-pointer border-none active:scale-95 transition-transform duration-75"
                style={{ background: '#C0392B', boxShadow: '0 4px 0 #7d1e12' }}
              >
                <p className="font-['Roboto_Condensed:Medium',sans-serif] font-medium text-[#f4f5fc] text-[18px]">Да, удалить все</p>
              </button>
              <button
                onClick={() => setShowDeleteAllConfirm(false)}
                className="w-full h-[52px] rounded-[13px] flex items-center justify-center cursor-pointer border-none active:scale-95 transition-transform duration-75"
                style={{ background: '#374348' }}
              >
                <p className="font-['Roboto_Condensed:Medium',sans-serif] font-medium text-[#798589] text-[18px]">Отмена</p>
              </button>
            </div>
          </div>
        </div>
      )}
    </Layout>
  );
}