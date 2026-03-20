import { useState, useEffect } from "react";
import type { ReactNode } from "react";
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

// ─── Description text style — opacity reduced to 60% for visual hierarchy ─────
const T = "font-['Roboto_Condensed:Regular',sans-serif] font-normal leading-[20px] opacity-60 relative shrink-0 text-[#f1f7fb] text-[16px]";

// ─── Title style helper — unread: 22px Medium, read: 22px Regular ─────────────
const titleFont = (isRead: boolean) =>
  isRead
    ? "font-['Roboto_Condensed:Regular',sans-serif] font-normal"
    : "font-['Roboto_Condensed:Medium',sans-serif] font-medium";
const TITLE_SIZE = "leading-[26px] text-[22px]";
const TITLE_EMOJI = "leading-[26px] text-[20px]";

// ─── Shared: dot indicator (visual only) ─────────────────────────────────────

function DotIndicator({ isRead }: { isRead: boolean }) {
  return (
    <div className="h-[25px] relative shrink-0 w-[11px]">
      <div className="absolute inset-[0_-9.09%_-4%_-9.09%]">
        <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 13 26">
          <circle cx="6.5" cy="19.5" fill={isRead ? "#2D3539" : "#FE6B21"} r="6.5" />
        </svg>
      </div>
    </div>
  );
}

// ─── Shared: action link chevron ──────────────────────────────────────────────

function ChevronRight() {
  return (
    <div className="h-[14px] relative shrink-0 w-[6px]">
      <div className="absolute inset-[0_0_0_-12.5%]">
        <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 6.75 14">
          <path d={svgPaths.p8df6480} stroke="#91989B" strokeLinecap="round" strokeWidth="1.5" />
        </svg>
      </div>
    </div>
  );
}

// ─── Shared: action link row ─────────────────────────────────────────────────

function ActionRow({ text, onPress }: { text: string; onPress: () => void }) {
  return (
    <div
      className="content-stretch flex flex-wrap gap-y-[5px] items-center justify-between relative shrink-0 w-full cursor-pointer"
      onClick={e => { e.stopPropagation(); onPress(); }}
    >
      <div className="h-[20px] shrink-0 w-[29px]" />
      <div className="content-stretch flex gap-[7px] items-center justify-end relative shrink-0">
        <p className="font-['Roboto_Condensed:Regular',sans-serif] font-normal leading-[20px] opacity-80 relative shrink-0 text-[#f1f7fb] text-[16px] whitespace-nowrap">
          {text}
        </p>
        <ChevronRight />
      </div>
    </div>
  );
}

// ─── Inline icons ─────────────────────────────────────────────────────────────

function ZapGradient() {
  return (
    <div className="h-[22.727px] relative shrink-0 w-[20px]">
      <svg className="absolute block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 20 22.7273">
        <path d={svgPaths.p1a019900} fill="url(#zap_g_notif)" />
        <defs>
          <linearGradient gradientUnits="userSpaceOnUse" id="zap_g_notif" x1="8.41731" x2="-2.65802" y1="9.74135" y2="25.2763">
            <stop stopColor="#FF6B21" />
            <stop offset="1" stopColor="#994014" />
          </linearGradient>
        </defs>
      </svg>
    </div>
  );
}

function ZapWhite() {
  return (
    <div className="h-[22.727px] relative shrink-0 w-[20px]">
      <svg className="absolute block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 20 22.7273">
        <path d={svgPaths.p1a019900} fill="#F4F5FC" />
      </svg>
    </div>
  );
}

function FireInline() {
  return (
    <div className="h-[24.432px] relative shrink-0 w-[16.765px]">
      <svg className="absolute block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 16.7655 24.4324">
        <path d={svgPaths.p33094f0} fill="url(#fire_g_notif)" />
        <defs>
          <linearGradient gradientUnits="userSpaceOnUse" id="fire_g_notif" x1="8.38273" x2="8.38273" y1="0" y2="24.4324">
            <stop stopColor="#FFB121" />
            <stop offset="1" stopColor="#BB8116" />
          </linearGradient>
        </defs>
      </svg>
    </div>
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
}: {
  active: Filter;
  unreadCount: number;
  onChange: (f: Filter) => void;
}) {
  const tab = (f: Filter, label: string, badge?: ReactNode) => (
    <div
      key={f}
      className="content-stretch flex gap-[10px] h-full items-center justify-center px-[20px] relative rounded-[13.846px] shrink-0 cursor-pointer"
      style={{ background: active === f ? "#404d52" : "#323d41" }}
      onClick={() => onChange(f)}
    >
      <p className="font-['Roboto_Condensed:Bold',sans-serif] font-medium leading-[27.5px] relative shrink-0 text-[18px] whitespace-nowrap" style={{ color: "rgba(244,245,252,0.7)" }}>
        {label}
      </p>
      {badge}
    </div>
  );

  const badge = unreadCount > 0 ? (
    <div className="bg-[#fe6b21] h-[24px] relative rounded-[12296925px] shrink-0">
      <div className="bg-clip-padding border-0 border-[transparent] border-solid content-stretch flex h-full items-center justify-center px-[6px] relative">
        <p className="font-['Inter:Extra_Bold',sans-serif] font-extrabold leading-[15.392px] not-italic relative shrink-0 text-[#2c3538] text-[12px] whitespace-nowrap">
          {unreadCount}
        </p>
      </div>
    </div>
  ) : undefined;

  return (
    // Horizontal scroll — tabs don't fit on narrow mobile screens
    <div
      className="flex gap-[10px] h-[40px] items-start w-full"
      style={{ overflowX: "auto", scrollbarWidth: "none", WebkitOverflowScrolling: "touch" }}
    >
      <style>{`.notif-filter-bar::-webkit-scrollbar { display: none; }`}</style>
      {tab("all", "Все")}
      {tab("unread", "Непрочитанные", badge)}
      {tab("action", "Требуют действия", <WarningIcon />)}
    </div>
    // Divider removed (was below tabs)
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
  children: ReactNode;
}

function CardShell({ isRead, hasAction = true, onToggleRead, onOpen, children }: CardShellProps) {
  const bg = isRead ? "bg-[#343e42]" : "bg-[#404d52]";
  const clickStyle = hasAction
    ? "cursor-pointer hover:brightness-105 active:brightness-95"
    : "cursor-default";
  return (
    <div
      className={`${bg} content-stretch flex flex-col items-center p-[20px] relative rounded-[15px] shrink-0 w-full transition-all ${clickStyle}`}
      onClick={onOpen}
    >
      <div className="content-stretch flex gap-[16px] items-center justify-center relative shrink-0 w-full">
        {/* Clickable status dot — aligns to top (Fix #13) */}
        <button
          className="shrink-0 outline-none bg-transparent border-none cursor-pointer self-start mt-[4px]"
          onClick={e => { e.stopPropagation(); onToggleRead(); }}
          aria-label={isRead ? "Отметить как непрочитанное" : "Отметить как прочитанное"}
          title={isRead ? "Отметить как непрочитанное" : "Отметить как прочитанное"}
        >
          <DotIndicator isRead={isRead} />
        </button>

        {/* Card body */}
        <div className="content-stretch flex flex-col gap-[20px] items-start relative self-stretch shrink-0 flex-1 min-w-0">
          {children}
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
    <CardShell isRead={isRead} hasAction={hasAction} onToggleRead={onToggleRead} onOpen={onOpen}>
      <div className="content-stretch flex flex-col gap-[9px] items-start relative shrink-0 w-full">
        <div className="content-stretch flex items-start justify-between relative shrink-0 w-full">
          <p className={`${titleFont(isRead)} leading-[0] relative shrink-0 text-[#f4f5fc] text-[0px] whitespace-nowrap`}>
            <span className={TITLE_SIZE}>Проверена ваша работа </span>
            <span className={TITLE_EMOJI}>📝</span>
          </p>
          <p className="font-['Roboto_Condensed:Medium',sans-serif] font-medium leading-[20px] shrink-0 text-[#798589] text-[16px] whitespace-nowrap">9:14</p>
        </div>
        <p className={`${T} w-full`}>Мы оставили фидбек по заданию «Интерфейс приложения здоровья»</p>
      </div>
      {onAction && <ActionRow text="Смотреть фидбек" onPress={onAction} />}
    </CardShell>
  );
}

// Card 2 — Новые 🎨 недельные вызовы
function Card2({ isRead, onToggleRead, onOpen, onAction, hasAction }: CardProps) {
  return (
    <CardShell isRead={isRead} hasAction={hasAction} onToggleRead={onToggleRead} onOpen={onOpen}>
      <div className="content-stretch flex flex-col gap-[9px] items-start relative shrink-0 w-full">
        <div className="content-stretch flex items-start justify-between relative shrink-0 w-full">
          <div className="content-stretch flex gap-[12px] items-center relative shrink-0">
            <p className={`${titleFont(isRead)} ${TITLE_SIZE} relative shrink-0 text-[#f4f5fc] whitespace-nowrap`}>Новые </p>
            <div className="content-stretch flex gap-[9px] items-center relative shrink-0">
              <PencilInline />
              <p className={`${titleFont(isRead)} ${TITLE_SIZE} relative shrink-0 text-[#f1f7fb] whitespace-nowrap`}>недельные вызовы</p>
            </div>
          </div>
          <p className="font-['Roboto_Condensed:Medium',sans-serif] font-medium leading-[20px] shrink-0 text-[#798589] text-[16px] whitespace-nowrap">18:15</p>
        </div>
        <p className={`${T} w-full`}>Доступны 3 новых задания</p>
      </div>
      {onAction && <ActionRow text="Смотреть здания" onPress={onAction} />}
    </CardShell>
  );
}

// Card 3 — Вы получили ⚡ 1250 XP (no action link — not clickable, Fix #14)
function Card3({ isRead, onToggleRead, onOpen, hasAction }: CardProps) {
  return (
    <CardShell isRead={isRead} hasAction={hasAction} onToggleRead={onToggleRead} onOpen={onOpen}>
      <div className="content-stretch flex flex-col gap-[9px] items-start relative shrink-0 w-full">
        <div className="content-stretch flex items-start justify-between relative shrink-0 w-full">
          <div className="content-stretch flex gap-[9px] items-center relative shrink-0">
            <p className={`${titleFont(isRead)} ${TITLE_SIZE} relative shrink-0 text-[#f4f5fc] whitespace-nowrap`}>Вы получили </p>
            <ZapGradient />
            <p className={`bg-clip-text ${titleFont(isRead)} ${TITLE_SIZE} relative shrink-0 text-[transparent] whitespace-nowrap`} style={{ backgroundImage: "linear-gradient(193.285deg, rgb(255,107,33) 48.665%, rgb(153,64,20) 112.02%)" }}>
              1250 XP
            </p>
          </div>
          <p className="font-['Roboto_Condensed:Medium',sans-serif] font-medium leading-[20px] shrink-0 text-[#798589] text-[16px] whitespace-nowrap">17:15</p>
        </div>
        <p className={`${T} w-full`}>Отличная работа!</p>
      </div>
    </CardShell>
  );
}

// Card 4 — Вы перешли в ⭐ лигу Silver
function Card4({ isRead, onToggleRead, onOpen, onAction, hasAction }: CardProps) {
  return (
    <CardShell isRead={isRead} hasAction={hasAction} onToggleRead={onToggleRead} onOpen={onOpen}>
      <div className="content-stretch flex flex-col gap-[9px] items-start relative shrink-0 w-full">
        <div className="content-stretch flex items-start justify-between relative shrink-0 w-full">
          <div className="content-stretch flex gap-[9px] items-center relative shrink-0">
            <p className={`${titleFont(isRead)} ${TITLE_SIZE} relative shrink-0 text-[#f4f5fc] whitespace-nowrap`}>Вы перешли в </p>
            <div className="content-stretch flex gap-[9px] items-center relative shrink-0">
              <LeagueStarIcon />
              <p className={`${titleFont(isRead)} ${TITLE_SIZE} relative shrink-0 text-[#f4f5fc] whitespace-nowrap`}>лигу Silver</p>
            </div>
          </div>
          <p className="font-['Roboto_Condensed:Medium',sans-serif] font-medium leading-[20px] shrink-0 text-[#798589] text-[16px] whitespace-nowrap">3 мар</p>
        </div>
        <p className={`${T} w-full`}>Продолжайте обучение!</p>
      </div>
      {onAction && <ActionRow text="Продолжить обучение" onPress={onAction} />}
    </CardShell>
  );
}

// Card 5 — Вы не занимались 🔥 сегодня (no action link — not clickable, Fix #14)
function Card5({ isRead, onToggleRead, onOpen, hasAction }: CardProps) {
  return (
    <CardShell isRead={isRead} hasAction={hasAction} onToggleRead={onToggleRead} onOpen={onOpen}>
      <div className="content-stretch flex flex-col gap-[9px] items-start relative shrink-0 w-full">
        <div className="content-stretch flex items-start justify-between relative shrink-0 w-full">
          <div className="content-stretch flex gap-[9px] items-center relative shrink-0">
            <p className={`${titleFont(isRead)} ${TITLE_SIZE} relative shrink-0 text-[#f4f5fc] whitespace-nowrap`}>Вы не занимались</p>
            <div className="content-stretch flex gap-[9px] items-center relative shrink-0">
              <FireInline />
              <p className={`${titleFont(isRead)} ${TITLE_SIZE} relative shrink-0 text-[#f4f5fc] whitespace-nowrap`}>сегодня</p>
            </div>
          </div>
          <p className="font-['Roboto_Condensed:Medium',sans-serif] font-medium leading-[20px] shrink-0 text-[#798589] text-[16px] whitespace-nowrap">3 мар</p>
        </div>
        <p className={`${T} w-full`}>Серия из 5 дней может прерваться</p>
      </div>
    </CardShell>
  );
}

// Card 6 — Доступен новый модуль UX-исследования
function Card6({ isRead, onToggleRead, onOpen, onAction }: CardProps) {
  return (
    <CardShell isRead={isRead} onToggleRead={onToggleRead} onOpen={onOpen}>
      <div className="content-stretch flex flex-col items-start relative shrink-0 w-full">
        <div className="content-stretch flex items-start justify-between relative shrink-0 w-full">
          <p className={`${titleFont(isRead)} ${TITLE_SIZE} relative shrink-0 text-[#f4f5fc] flex-1 min-w-0 pr-[8px]`}>
            Доступен новый модуль UX-исследования
          </p>
          <p className="font-['Roboto_Condensed:Medium',sans-serif] font-medium leading-[20px] shrink-0 text-[#798589] text-[16px] whitespace-nowrap">2 мар</p>
        </div>
      </div>
      <div
        className="content-end flex flex-wrap gap-y-[5px] items-end justify-between relative shrink-0 w-full cursor-pointer"
        onClick={e => { e.stopPropagation(); onAction?.(); }}
      >
        <div className="content-stretch flex items-end relative shrink-0">
          <ModuleThumb />
        </div>
        <div className="content-stretch flex gap-[7px] items-center justify-end relative shrink-0">
          <p className="font-['Roboto_Condensed:Regular',sans-serif] font-normal leading-[22px] opacity-80 relative shrink-0 text-[#f1f7fb] text-[18px] whitespace-nowrap">
            Начать модуль
          </p>
          <ChevronRight />
        </div>
      </div>
    </CardShell>
  );
}

// Card 7 — Вы начали задание ⚡
function Card7({ isRead, onToggleRead, onOpen, onAction }: CardProps) {
  return (
    <CardShell isRead={isRead} onToggleRead={onToggleRead} onOpen={onOpen}>
      <div className="content-stretch flex flex-col gap-[9px] items-start relative shrink-0 w-full">
        <div className="content-stretch flex items-start justify-between relative shrink-0 w-full">
          <div className="content-stretch flex gap-[9px] items-center relative shrink-0">
            <p className={`${titleFont(isRead)} ${TITLE_SIZE} relative shrink-0 text-[#f4f5fc] whitespace-nowrap`}>Вы начали задание</p>
            <ZapWhite />
          </div>
          <p className="font-['Roboto_Condensed:Medium',sans-serif] font-medium leading-[20px] shrink-0 text-[#798589] text-[16px] whitespace-nowrap">2 мар</p>
        </div>
        <div className="font-['Roboto_Condensed:Regular',sans-serif] font-normal leading-[22px] opacity-60 relative shrink-0 text-[#f1f7fb] text-[18px] w-full">
          <p className="mb-0">«Интерфейс приложения здоровья».</p>
          <p>Не забудьте закончить его</p>
        </div>
      </div>
      {onAction && <ActionRow text="Продолжить задание" onPress={onAction} />}
    </CardShell>
  );
}

// ─── Mock card generators ─────────────────────────────────────────────────────
// Parameterized cards for mock notifications — reuse existing CardShell & icons

// XP reward card (parameterized amount)
function CardXP({ isRead, onToggleRead, onOpen, hasAction, amount, description, time }: CardProps & { amount: number; description: string; time: string }) {
  return (
    <CardShell isRead={isRead} hasAction={hasAction} onToggleRead={onToggleRead} onOpen={onOpen}>
      <div className="content-stretch flex flex-col gap-[9px] items-start relative shrink-0 w-full">
        <div className="content-stretch flex items-start justify-between relative shrink-0 w-full">
          <div className="content-stretch flex gap-[9px] items-center relative shrink-0">
            <p className={`${titleFont(isRead)} ${TITLE_SIZE} relative shrink-0 text-[#f4f5fc] whitespace-nowrap`}>Вы получили </p>
            <ZapGradient />
            <p className={`bg-clip-text ${titleFont(isRead)} ${TITLE_SIZE} relative shrink-0 text-[transparent] whitespace-nowrap`} style={{ backgroundImage: "linear-gradient(193.285deg, rgb(255,107,33) 48.665%, rgb(153,64,20) 112.02%)" }}>
              {amount} XP
            </p>
          </div>
          <p className="font-['Roboto_Condensed:Medium',sans-serif] font-medium leading-[20px] shrink-0 text-[#798589] text-[16px] whitespace-nowrap">{time}</p>
        </div>
        <p className={`${T} w-full`}>{description}</p>
      </div>
    </CardShell>
  );
}

// Answer streak card (parameterized streak count)
function CardStreak({ isRead, onToggleRead, onOpen, hasAction, count, description, time }: CardProps & { count: number; description: string; time: string }) {
  return (
    <CardShell isRead={isRead} hasAction={hasAction} onToggleRead={onToggleRead} onOpen={onOpen}>
      <div className="content-stretch flex flex-col gap-[9px] items-start relative shrink-0 w-full">
        <div className="content-stretch flex items-start justify-between relative shrink-0 w-full">
          <div className="content-stretch flex gap-[9px] items-center relative min-w-0 flex-1 pr-[8px]">
            <FireInline />
            <p className={`${titleFont(isRead)} ${TITLE_SIZE} relative shrink-0 text-[#f4f5fc] min-w-0 overflow-hidden`} style={{ whiteSpace: "nowrap", textOverflow: "ellipsis" }}>Серия {count} правильных ответов</p>
          </div>
          <p className="font-['Roboto_Condensed:Medium',sans-serif] font-medium leading-[20px] shrink-0 text-[#798589] text-[16px] whitespace-nowrap">{time}</p>
        </div>
        <p className={`${T} w-full`}>{description}</p>
      </div>
    </CardShell>
  );
}

// Lesson completion card (parameterized lesson name)
function CardLessonComplete({ isRead, onToggleRead, onOpen, onAction, hasAction, lessonName, time }: CardProps & { lessonName: string; time: string }) {
  return (
    <CardShell isRead={isRead} hasAction={hasAction} onToggleRead={onToggleRead} onOpen={onOpen}>
      <div className="content-stretch flex flex-col gap-[9px] items-start relative shrink-0 w-full">
        <div className="content-stretch flex items-start justify-between relative shrink-0 w-full">
          <p className={`${titleFont(isRead)} leading-[0] relative shrink-0 text-[#f4f5fc] text-[0px]`}>
            <span className={TITLE_SIZE}>Вы завершили урок «{lessonName}» </span>
            <span className={TITLE_EMOJI}>🎓</span>
          </p>
          <p className="font-['Roboto_Condensed:Medium',sans-serif] font-medium leading-[20px] shrink-0 text-[#798589] text-[16px] whitespace-nowrap">{time}</p>
        </div>
        <p className={`${T} w-full`}>Отличная работа! Продолжайте обучение</p>
      </div>
      {onAction && <ActionRow text="Следующий урок" onPress={onAction} />}
    </CardShell>
  );
}

// Reminder card (parameterized title + description)
function CardReminder({ isRead, onToggleRead, onOpen, onAction, hasAction, title, description, time }: CardProps & { title: string; description: string; time: string }) {
  return (
    <CardShell isRead={isRead} hasAction={hasAction} onToggleRead={onToggleRead} onOpen={onOpen}>
      <div className="content-stretch flex flex-col gap-[9px] items-start relative shrink-0 w-full">
        <div className="content-stretch flex items-start justify-between relative shrink-0 w-full">
          <p className={`${titleFont(isRead)} ${TITLE_SIZE} relative shrink-0 text-[#f4f5fc] flex-1 min-w-0`}>{title}</p>
          <p className="font-['Roboto_Condensed:Medium',sans-serif] font-medium leading-[20px] shrink-0 text-[#798589] text-[16px] whitespace-nowrap">{time}</p>
        </div>
        <p className={`${T} w-full`}>{description}</p>
      </div>
      {onAction && <ActionRow text="Продолжить обучение" onPress={onAction} />}
    </CardShell>
  );
}

// New content card (parameterized title)
function CardNewContent({ isRead, onToggleRead, onOpen, onAction, hasAction, title, description, time }: CardProps & { title: string; description?: string; time: string }) {
  return (
    <CardShell isRead={isRead} hasAction={hasAction} onToggleRead={onToggleRead} onOpen={onOpen}>
      <div className="content-stretch flex flex-col gap-[9px] items-start relative shrink-0 w-full">
        <div className="content-stretch flex items-start justify-between relative shrink-0 w-full">
          <div className="content-stretch flex gap-[9px] items-center relative shrink-0">
            <p className={`${titleFont(isRead)} ${TITLE_SIZE} relative shrink-0 text-[#f4f5fc] whitespace-nowrap`}>{title}</p>
            <PencilInline />
          </div>
          <p className="font-['Roboto_Condensed:Medium',sans-serif] font-medium leading-[20px] shrink-0 text-[#798589] text-[16px] whitespace-nowrap">{time}</p>
        </div>
        {description && <p className={`${T} w-full`}>{description}</p>}
      </div>
      {onAction && <ActionRow text="Посмотреть" onPress={onAction} />}
    </CardShell>
  );
}

// Task card (parameterized)
function CardTask({ isRead, onToggleRead, onOpen, onAction, hasAction, title, description, time }: CardProps & { title: string; description?: string; time: string }) {
  return (
    <CardShell isRead={isRead} hasAction={hasAction} onToggleRead={onToggleRead} onOpen={onOpen}>
      <div className="content-stretch flex flex-col gap-[9px] items-start relative shrink-0 w-full">
        <div className="content-stretch flex items-start justify-between relative shrink-0 w-full">
          <p className={`${titleFont(isRead)} leading-[0] relative shrink-0 text-[#f4f5fc] text-[0px]`}>
            <span className={TITLE_SIZE}>{title} </span>
            <span className={TITLE_EMOJI}>📝</span>
          </p>
          <p className="font-['Roboto_Condensed:Medium',sans-serif] font-medium leading-[20px] shrink-0 text-[#798589] text-[16px] whitespace-nowrap">{time}</p>
        </div>
        {description && <p className={`${T} w-full`}>{description}</p>}
      </div>
      {onAction && <ActionRow text="Посмотреть" onPress={onAction} />}
    </CardShell>
  );
}

// Social card (parameterized)
function CardSocial({ isRead, onToggleRead, onOpen, hasAction, title, description, time }: CardProps & { title: string; description?: string; time: string }) {
  return (
    <CardShell isRead={isRead} hasAction={hasAction} onToggleRead={onToggleRead} onOpen={onOpen}>
      <div className="content-stretch flex flex-col gap-[9px] items-start relative shrink-0 w-full">
        <div className="content-stretch flex items-start justify-between relative shrink-0 w-full">
          <p className={`${titleFont(isRead)} ${TITLE_SIZE} relative shrink-0 text-[#f4f5fc] flex-1 min-w-0`}>{title}</p>
          <p className="font-['Roboto_Condensed:Medium',sans-serif] font-medium leading-[20px] shrink-0 text-[#798589] text-[16px] whitespace-nowrap">{time}</p>
        </div>
        {description && <p className={`${T} w-full`}>{description}</p>}
      </div>
    </CardShell>
  );
}

// ─── Module completion card ───────────────────────────────────────────────────
function CardModuleComplete({ isRead, onToggleRead, onOpen, onAction, hasAction, moduleName, time }: CardProps & { moduleName: string; time: string }) {
  return (
    <CardShell isRead={isRead} hasAction={hasAction} onToggleRead={onToggleRead} onOpen={onOpen}>
      <div className="content-stretch flex flex-col gap-[9px] items-start relative shrink-0 w-full">
        <div className="content-stretch flex items-start justify-between relative shrink-0 w-full">
          <div className="content-stretch flex gap-[9px] items-center relative shrink-0">
            <p className={`${titleFont(isRead)} ${TITLE_SIZE} relative shrink-0 text-[#f4f5fc] whitespace-nowrap`}>Вы завершили модуль</p>
            <LeagueStarIcon />
          </div>
          <p className="font-['Roboto_Condensed:Medium',sans-serif] font-medium leading-[20px] shrink-0 text-[#798589] text-[16px] whitespace-nowrap">{time}</p>
        </div>
        <p className={`${T} w-full`}>{moduleName}</p>
      </div>
      {onAction && <ActionRow text="Следующий модуль →" onPress={onAction} />}
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
    <div className="content-stretch flex flex-col gap-[15px] items-start relative shrink-0 w-full">
      <p className="font-['Roboto_Condensed:Medium',sans-serif] font-medium leading-[20px] relative shrink-0 text-[#798589] text-[16px] whitespace-nowrap">
        {label}
      </p>
      <div className="content-stretch flex flex-col gap-[20px] items-start relative shrink-0 w-full">
        {children}
      </div>
    </div>
  );
}

// ─── Main page ────────────────────────────────────────────────────────────────

export default function NotificationsPage() {
  const navigate = useNavigate();
  const hwCtx = useHomeworkSafe();
  const [filter, setFilter] = useState<Filter>("all");

  // Mutable read state — toggled when user clicks the status dot
  const [readState, setReadState] = useState<Record<number, boolean>>(
    () => Object.fromEntries(DATA.map(d => [d.id, d.isRead]))
  );
  // Deleted notifications
  const [deleted, setDeleted] = useState<Set<number>>(new Set());

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

  const toggleRead  = (id: number) => setReadState(p => ({ ...p, [id]: !p[id] }));
  const markRead    = (id: number) => setReadState(p => ({ ...p, [id]: true }));
  const deleteNotif = (id: number) => setDeleted(p => new Set([...p, id]));

  const hwUnreadCount = hwNotifs.filter(hw => !hwRead[hw.id]).length;
  const unreadCount = DATA.filter(d => !deleted.has(d.id) && !readState[d.id]).length + hwUnreadCount;

  const visible = (id: number): boolean => {
    if (deleted.has(id)) return false;
    const n = DATA.find(d => d.id === id)!;
    const isRead = readState[id];
    if (filter === "unread") return !isRead;
    if (filter === "action") return n.hasAction;
    return true;
  };

  const hasDate = (date: "today" | "yesterday" | "earlier") =>
    DATA.some(n => n.date === date && visible(n.id));

  const listEmpty = DATA.every(d => !visible(d.id));

  // Helper: open card → mark as read + navigate
  const open = (id: number, path: string) => () => {
    markRead(id);
    navigate(path);
  };

  const cp = (id: number) => ({
    isRead: readState[id],
    onToggleRead: () => toggleRead(id),
  });

  return (
    <Layout title="Уведомления" rightWidth="320px">
      {/* Sticky filter bar — sticks inside Layout's scroll container */}
      <div className="flex flex-col gap-[25px] w-full">
        <div
          className="sticky top-[-16px] z-20 mx-[-16px] px-[16px] pt-[12px] pb-[8px]"
          style={{ background: "#282F33" }}
        >
          <FilterBar active={filter} unreadCount={unreadCount} onChange={setFilter} />
        </div>

        {/* Notification list */}
        <div className="content-stretch flex flex-col gap-[37px] items-start relative shrink-0 w-full pb-[40px]">

          {listEmpty && hwNotifs.length === 0 && <EmptyState />}

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
                const bg    = isRead ? "bg-[#343e42]" : "bg-[#404d52]";
                const lessonId = hw.lesson_id || hw.lesson_name;
                if (filter === "unread" && isRead) return null;
                return (
                  <div
                    key={hw.id}
                    className={`${bg} content-stretch flex flex-col items-center p-[20px] relative rounded-[15px] shrink-0 w-full cursor-pointer hover:brightness-105 active:brightness-95 transition-all`}
                    onClick={() => {
                      setHwRead(p => ({ ...p, [hw.id]: true }));
                      navigate("/homework", { state: { homeworkId: lessonId } });
                    }}
                  >
                    <div className="content-stretch flex gap-[16px] items-center relative shrink-0 w-full">
                      <button
                        className="shrink-0 outline-none bg-transparent border-none cursor-pointer self-start mt-[4px]"
                        onClick={e => { e.stopPropagation(); setHwRead(p => ({ ...p, [hw.id]: !p[hw.id] })); }}
                      >
                        <DotIndicator isRead={isRead} />
                      </button>
                      <div className="content-stretch flex flex-col gap-[20px] items-start relative self-stretch shrink-0 flex-1 min-w-0">
                        <div className="content-stretch flex flex-col gap-[9px] items-start relative shrink-0 w-full">
                          <div className="content-stretch flex items-start justify-between relative shrink-0 w-full">
                            <p className={`${titleFont(isRead)} ${TITLE_SIZE} relative shrink-0 whitespace-nowrap`} style={{ color }}>
                              {label}
                            </p>
                            <p className="font-['Roboto_Condensed:Medium',sans-serif] font-medium leading-[20px] shrink-0 text-[#798589] text-[16px] whitespace-nowrap">
                              {new Date(hw.created_at).toLocaleDateString("ru-RU", { day: "numeric", month: "short" })}
                            </p>
                          </div>
                          <p className={`${T} w-full`}>{desc}</p>
                          {hw.comment && (
                            <div
                              className="w-full mt-[8px] px-[12px] py-[10px] rounded-[10px]"
                              style={{ background: hw.status === "reviewed" ? "rgba(94,221,96,0.08)" : "rgba(255,93,57,0.08)", borderLeft: `3px solid ${hw.status === "reviewed" ? "#5EDD60" : "#FF5D39"}` }}
                            >
                              <p className="font-['Roboto_Condensed:Regular',sans-serif] font-normal text-[14px] text-[rgba(244,245,252,0.85)] leading-[20px]">
                                {hw.comment}
                              </p>
                            </div>
                          )}
                          {hw.image_url && (
                            <img
                              src={hw.image_url}
                              alt="Скриншот от проверяющего"
                              className="w-full rounded-[10px] object-cover mt-[8px]"
                              style={{ maxHeight: 200 }}
                              onClick={e => e.stopPropagation()}
                            />
                          )}
                        </div>
                        <div
                          className="content-stretch flex flex-wrap gap-y-[5px] items-center justify-between relative shrink-0 w-full cursor-pointer"
                          onClick={e => { e.stopPropagation(); setHwRead(p => ({ ...p, [hw.id]: true })); navigate("/homework", { state: { homeworkId: lessonId } }); }}
                        >
                          <div className="h-[20px] shrink-0 w-[29px]" />
                          <div className="content-stretch flex gap-[7px] items-center justify-end relative shrink-0">
                            <p className="font-['Roboto_Condensed:Regular',sans-serif] font-normal leading-[20px] opacity-80 relative shrink-0 text-[#f1f7fb] text-[16px] whitespace-nowrap">
                              {hw.status === "reviewed" ? "Смотреть результат" : "Переделать работу"}
                            </p>
                            <ChevronRight />
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                );
              })}
            </DateGroup>
          )}

          {/* Сегодня */}
          {hasDate("today") && (
            <DateGroup label="Сегодня">
              {visible(1) && (
                <Card1 {...cp(1)} onOpen={open(1, "/")} onAction={() => navigate("/")} />
              )}
              {visible(2) && (
                <CardXP {...cp(2)} onOpen={() => {}} hasAction={false} amount={25} description="За прохождение квиза «Контраст»" time="10:32" />
              )}
              {visible(3) && (
                <CardStreak {...cp(3)} onOpen={() => {}} hasAction={false} count={10} description="Вы отвечаете без ошибок. Продолжайте!" time="10:30" />
              )}
              {visible(4) && (
                <CardLessonComplete {...cp(4)} onOpen={open(4, "/lessons")} onAction={() => navigate("/lessons")} lessonName="Контраст" time="10:28" />
              )}
              {visible(5) && (
                <CardStreak {...cp(5)} onOpen={() => {}} hasAction={false} count={3} description="Невероятно! Серия правильных ответов растёт." time="10:15" />
              )}
            </DateGroup>
          )}

          {/* Вчера */}
          {hasDate("yesterday") && (
            <DateGroup label="Вчера">
              {visible(6) && (
                <Card2 {...cp(6)} onOpen={open(6, "/challenges")} onAction={() => navigate("/challenges")} />
              )}
              {visible(7) && (
                <CardXP {...cp(7)} onOpen={() => {}} hasAction={false} amount={50} description="Отличная работа! Вы прошли урок" time="18:45" />
              )}
              {visible(8) && (
                <CardReminder {...cp(8)} onOpen={() => {}} hasAction={false} title="Продолжите обучение" description="Вы почти завершили урок" time="14:00" />
              )}
              {visible(9) && (
                <CardTask {...cp(9)} onOpen={open(9, "/challenges")} onAction={() => navigate("/challenges")} title="Доступны 3 новх задания" description="Проверьте раздел вызовов" time="12:30" />
              )}
              {visible(10) && (
                <CardXP {...cp(10)} onOpen={() => {}} hasAction={false} amount={125} description="За завершение модуля «Основы UX»" time="11:20" />
              )}
              {visible(11) && (
                <CardSocial {...cp(11)} onOpen={() => {}} hasAction={false} title="Вашу работу лайкнули ❤️" description="Задание «Дизайн карточки товара» понравилось 3 пользователям" time="09:15" />
              )}
            </DateGroup>
          )}

          {/* Ранее */}
          {hasDate("earlier") && (
            <DateGroup label="Ранее">
              {visible(12) && (
                <Card6 {...cp(12)} onOpen={open(12, "/modules")} onAction={() => navigate("/modules")} />
              )}
              {visible(13) && (
                <CardStreak {...cp(13)} onOpen={() => {}} hasAction={false} count={20} description="Невероятно! Серия правильных ответов растёт." time="5 мар" />
              )}
              {visible(14) && (
                <CardLessonComplete {...cp(14)} onOpen={open(14, "/lessons")} onAction={() => navigate("/lessons")} lessonName="Цвет" time="5 мар" />
              )}
              {visible(15) && (
                <CardXP {...cp(15)} onOpen={() => {}} hasAction={false} amount={250} description="Вы завершили модуль" time="4 мар" />
              )}
              {visible(16) && (
                <Card5 {...cp(16)} onOpen={() => {}} hasAction={false} />
              )}
              {visible(17) && (
                <CardModuleComplete {...cp(17)} onOpen={open(17, "/lessons")} onAction={() => navigate("/lessons")} moduleName="Основы UX" time="3 мар" />
              )}
              {visible(18) && (
                <CardSocial {...cp(18)} onOpen={() => {}} hasAction={false} title="Вы получили фидбек на задание" description="Преподаватель оставил комментарий к вашей работе" time="3 мар" />
              )}
              {visible(19) && (
                <CardNewContent {...cp(19)} onOpen={open(19, "/lessons")} onAction={() => navigate("/lessons")} title="Доступен новый урок" description="Урок «Иерархия» теперь доступен для прохождения" time="2 мар" />
              )}
              {visible(20) && (
                <CardStreak {...cp(20)} onOpen={() => {}} hasAction={false} count={30} description="Вы отвечаете без ошибок. Продолжайте!" time="2 мар" />
              )}
              {visible(21) && (
                <CardSocial {...cp(21)} onOpen={() => {}} hasAction={false} title="Новый комментарий к вашей работе 💬" description="Кто-то прокомментировал задание «Интерфейс приложения здоровья»" time="1 мар" />
              )}
              {visible(22) && (
                <CardTask {...cp(22)} onOpen={() => {}} hasAction={false} title="Ваша работа принята" description="Практическое задание «Дизайн карточки товара» успешно завершено" time="28 фев" />
              )}
              {visible(23) && (
                <Card4 {...cp(23)} onOpen={open(23, "/")} onAction={() => navigate("/")} />
              )}
              {visible(24) && (
                <CardReminder {...cp(24)} onOpen={() => {}} hasAction={false} title="Осталось всего 2 вопроса до завершения урока" description="Вы почти у цели!" time="27 фев" />
              )}
              {visible(25) && (
                <Card7 {...cp(25)} onOpen={open(25, "/")} onAction={() => navigate("/")} />
              )}
            </DateGroup>
          )}
        </div>
      </div>
    </Layout>
  );
}