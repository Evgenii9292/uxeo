import React, { useEffect, useRef, useState } from "react";
import Layout from "../components/Layout";
import { useUserSafe } from "../context/UserContext";
import { useAuth } from "../context/AuthContext";
import RightWidgets from "../components/RightWidgets";

// ─── League helpers ────────────────────────────────────────────────────────────

interface League {
  name: string;
  trophy: string; // path to SVG in /public
  color: string;
  tier: number;
  minXp: number;
  maxXp: number | null;
}

export const LEAGUES: League[] = [
  { name: "Джун",         trophy: "/trophy-1.png", color: "#798589", tier: 1, minXp: 0,     maxXp: 2999  },
  { name: "Мидл",         trophy: "/trophy-2.png", color: "#CD7F32", tier: 2, minXp: 3000,  maxXp: 9999  },
  { name: "Сеньор",       trophy: "/trophy-3.png", color: "#9CA3AF", tier: 3, minXp: 10000, maxXp: 29999 },
  { name: "Арт-директор", trophy: "/trophy-4.png", color: "#FFB121", tier: 4, minXp: 30000, maxXp: null  },
];

export function getLeague(xp: number): League {
  if (xp >= 30000) return LEAGUES[3];
  if (xp >= 10000) return LEAGUES[2];
  if (xp >= 3000)  return LEAGUES[1];
  return LEAGUES[0];
}

export function formatXp(xp: number): string {
  if (xp >= 1000) {
    const k = xp / 1000;
    const rounded = Math.round(k * 10) / 10;
    return `${rounded % 1 === 0 ? rounded.toFixed(0) : rounded.toFixed(1)}к`;
  }
  return String(xp);
}

// ─── Seeded random ────────────────────────────────────────────────────────────

function seededRandom(seed: string, index: number): number {
  let h = 0;
  for (let i = 0; i < seed.length; i++) {
    h = (Math.imul(31, h) + seed.charCodeAt(i)) | 0;
  }
  h = Math.imul(h, index + 1);
  h ^= h >>> 16;
  return (h >>> 0) / 0xffffffff;
}

// ─── Weekly XP helpers ────────────────────────────────────────────────────────

const WEEK_START_KEY = 'skillum_week_start';
const WEEK_BASE_XP_KEY = 'skillum_week_base_xp';

/** Timestamp of the most recent Monday 00:00:00 local time */
function getCurrentWeekStart(): number {
  const now = new Date();
  const day = now.getDay(); // 0=Sun, 1=Mon, … 6=Sat
  const diff = day === 0 ? -6 : 1 - day;
  const monday = new Date(now);
  monday.setDate(now.getDate() + diff);
  monday.setHours(0, 0, 0, 0);
  return monday.getTime();
}

/** Returns XP earned since the start of the current week; resets base on new week. */
function getWeeklyXp(totalXp: number): number {
  try {
    const weekStart = getCurrentWeekStart();
    const storedWeekStartRaw = localStorage.getItem(WEEK_START_KEY);

    // First time ever — treat all accumulated XP as earned this week
    if (!storedWeekStartRaw) {
      localStorage.setItem(WEEK_START_KEY, String(weekStart));
      localStorage.setItem(WEEK_BASE_XP_KEY, '0');
      return totalXp;
    }

    const storedWeekStart = Number(storedWeekStartRaw);
    if (storedWeekStart !== weekStart) {
      // New week — save current XP as base, start fresh
      localStorage.setItem(WEEK_START_KEY, String(weekStart));
      localStorage.setItem(WEEK_BASE_XP_KEY, String(totalXp));
      return 0;
    }

    const baseXp = Number(localStorage.getItem(WEEK_BASE_XP_KEY) ?? '0');
    return Math.max(0, totalXp - baseXp);
  } catch {
    return totalXp;
  }
}

/** Milliseconds until next Monday 00:00 local time */
function getMsUntilNextMonday(): number {
  const nextMonday = getCurrentWeekStart() + 7 * 24 * 60 * 60 * 1000;
  return Math.max(0, nextMonday - Date.now());
}

function formatCountdown(ms: number): string {
  if (ms <= 0) return '00:00:00';
  const totalSec = Math.floor(ms / 1000);
  const days = Math.floor(totalSec / 86400);
  if (days >= 1) {
    if (days === 1) return '1 день';
    if (days < 5) return `${days} дня`;
    return `${days} дней`;
  }
  const h = Math.floor((totalSec % 86400) / 3600);
  const m = Math.floor((totalSec % 3600) / 60);
  const s = totalSec % 60;
  return `${String(h).padStart(2, '0')}:${String(m).padStart(2, '0')}:${String(s).padStart(2, '0')}`;
}

// ─── Week timer component ─────────────────────────────────────────────────────

function WeekTimer() {
  const [info, setInfo] = useState(() => {
    const ms = getMsUntilNextMonday();
    return { str: formatCountdown(ms), urgent: ms < 24 * 60 * 60 * 1000 };
  });

  useEffect(() => {
    const tick = () => {
      const ms = getMsUntilNextMonday();
      setInfo({ str: formatCountdown(ms), urgent: ms < 24 * 60 * 60 * 1000 });
    };
    const id = setInterval(tick, 1000);
    return () => clearInterval(id);
  }, []);

  return (
    <div
      style={{
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'center',
        gap: '5px',
        fontFamily: 'Roboto Condensed, sans-serif',
        fontSize: '14px',
        fontWeight: 400,
        color: info.urgent ? '#EF4444' : '#798589',
      }}
    >
      <span style={{ fontSize: '14px', lineHeight: 1 }}>⏱</span>
      <span>Сброс через {info.str}</span>
    </div>
  );
}

// ─── Data ─────────────────────────────────────────────────────────────────────

// pravatar.cc gender ranges (approximate)
const FEMALE_IMGS = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13, 14, 15, 16, 17];
const MALE_IMGS = Array.from({ length: 53 }, (_, k) => k + 18); // 18–70

interface BotName { name: string; gender: 'f' | 'm'; }

const BOT_NAMES: BotName[] = [
  { name: "Александр Новиков", gender: 'm' },
  { name: "Катя С.",           gender: 'f' },
  { name: "dmitry_ux",         gender: 'm' },
  { name: "Наталья К.",        gender: 'f' },
  { name: "Лёха",              gender: 'm' },
  { name: "designerMike",      gender: 'm' },
  { name: "Анастасия",         gender: 'f' },
  { name: "vlad99",            gender: 'm' },
  { name: "Ксюша",             gender: 'f' },
  { name: "Михаил Попов",      gender: 'm' },
  { name: "alex.proto",        gender: 'm' },
  { name: "Тёма",              gender: 'm' },
  { name: "pro_nastya",        gender: 'f' },
  { name: "Игорь Ш.",          gender: 'm' },
  { name: "margo",             gender: 'f' },
  { name: "Степан Б.",         gender: 'm' },
  { name: "Зоя Белова",        gender: 'f' },
  { name: "kreativ_dan",       gender: 'm' },
  { name: "Юлия М.",           gender: 'f' },
  { name: "Рустам",            gender: 'm' },
  { name: "anya_draws",        gender: 'f' },
  { name: "Светлана Р.",       gender: 'f' },
  { name: "Борис К.",          gender: 'm' },
  { name: "misha92",           gender: 'm' },
  { name: "Екатерина Смирнова",gender: 'f' },
];

const AVATAR_COLORS = [
  "#FF6B21", "#3B82F6", "#10B981", "#8B5CF6",
  "#EC4899", "#F59E0B", "#6366F1",
];

// ─── Types ────────────────────────────────────────────────────────────────────

interface Participant {
  id: string;
  name: string;
  xp: number;
  isUser: boolean;
  avatarColor: string;
  avatarLetter: string;
  avatarUrl?: string;      // photo URL (pravatar / user-selected)
  avatarOverlay?: string;  // CSS color overlay (simulate filter, ~25% of photo bots)
}

// ─── Generate rivals ──────────────────────────────────────────────────────────

/**
 * Generate 24 rival bots for the weekly leaderboard.
 * weekSeed = userId + weekStart string → bots reset each Monday.
 * Bots' xp here is **weekly XP** (same unit as userWeeklyXp).
 */
function generateRivals(userId: string, userWeeklyXp: number, weekSeed: string): Participant[] {
  const rivals: Participant[] = [];

  // Weekly XP range for bots: spread around user's weekly XP
  const botMax = Math.max(userWeeklyXp + 60, 100);

  // Shuffle bot names deterministically by userId (stable across the week)
  const namesCopy = [...BOT_NAMES];
  for (let i = 0; i < 24; i++) {
    const maxI = namesCopy.length;
    const swapIdx = Math.floor(seededRandom(userId, i * 100) * maxI);
    [namesCopy[i % maxI], namesCopy[swapIdx]] = [namesCopy[swapIdx], namesCopy[i % maxI]];
  }

  const OVERLAY_PALETTE = [
    'rgba(255,107,33,0.32)',
    'rgba(59,130,246,0.30)',
    'rgba(139,92,246,0.30)',
    'rgba(16,185,129,0.27)',
    'rgba(236,72,153,0.27)',
    'rgba(245,158,11,0.30)',
  ];

  for (let i = 0; i < 24; i++) {
    // Each bot's weekly XP: seeded by weekSeed (changes every Monday)
    const rivalXp = Math.floor(seededRandom(weekSeed, i * 7 + 3) * (botMax + 1));

    const botName = namesCopy[i % BOT_NAMES.length];
    const name = botName.name;
    const gender = botName.gender;
    const avatarColor = AVATAR_COLORS[Math.floor(seededRandom(userId, i * 13 + 5) * AVATAR_COLORS.length)];
    const avatarLetter = name.charAt(0).toUpperCase();

    // Avatar type: 40% real photo, 35% illustrated DiceBear, 25% colored initials
    const avatarRoll = seededRandom(userId, i * 17 + 1);
    let avatarUrl: string | undefined;
    let avatarOverlay: string | undefined;
    if (avatarRoll < 0.40) {
      // Real stock photo (gender-matched)
      const pool = gender === 'f' ? FEMALE_IMGS : MALE_IMGS;
      const imgIdx = pool[Math.floor(seededRandom(userId, i * 17 + 2) * pool.length)];
      avatarUrl = `https://i.pravatar.cc/150?img=${imgIdx}`;
      // ~25% of photos get a color overlay (Instagram-style filter)
      const hasOverlay = seededRandom(userId, i * 17 + 3) < 0.25;
      if (hasOverlay) {
        const oi = Math.floor(seededRandom(userId, i * 17 + 4) * OVERLAY_PALETTE.length);
        avatarOverlay = OVERLAY_PALETTE[oi];
      }
    } else if (avatarRoll < 0.75) {
      // Illustrated DiceBear notionists avatar
      avatarUrl = `https://api.dicebear.com/9.x/notionists/svg?seed=${encodeURIComponent(name)}&backgroundColor=b6e3f4,c0aede,d1d4f9,ffd5dc,ffdfbf`;
    }
    // else: 25% — colored initial circle (no avatarUrl)

    rivals.push({
      id: `rival-${i}`,
      name,
      xp: rivalXp,
      isUser: false,
      avatarColor,
      avatarLetter,
      avatarUrl,
      avatarOverlay,
    });
  }

  return rivals;
}

// ─── Medal helpers ────────────────────────────────────────────────────────────

function getPositionLabel(pos: number): string {
  if (pos === 1) return "🥇";
  if (pos === 2) return "🥈";
  if (pos === 3) return "🥉";
  return String(pos);
}

// ─── Row component ────────────────────────────────────────────────────────────

function ParticipantRow({ participant, position }: { participant: Participant; position: number }) {
  const isUser = participant.isUser;
  const posLabel = getPositionLabel(position);
  const isMedal = position <= 3;

  return (
    <div
      style={{
        display: "flex",
        flexDirection: "row",
        alignItems: "center",
        padding: "12px 16px",
        gap: "12px",
        borderBottom: "1px solid rgba(87,100,106,0.2)",
        background: isUser ? "rgba(255,107,33,0.12)" : "transparent",
        borderLeft: isUser ? "3px solid #FF6B21" : "3px solid transparent",
        transition: "background 0.2s",
      }}
    >
      {/* Position */}
      <div
        style={{
          width: "28px",
          textAlign: "center",
          flexShrink: 0,
          fontFamily: "Roboto Condensed, sans-serif",
          fontWeight: isMedal ? 700 : 600,
          fontSize: isMedal ? "22px" : "16px",
          color: isUser ? "#FF6B21" : "#798589",
          lineHeight: 1,
        }}
      >
        {posLabel}
      </div>

      {/* Avatar */}
      {participant.avatarUrl ? (
        <div style={{ position: "relative", width: 40, height: 40, borderRadius: "50%", flexShrink: 0, overflow: "hidden", background: "#3a4549" }}>
          <img
            src={participant.avatarUrl}
            width={40}
            height={40}
            style={{ width: "100%", height: "100%", objectFit: "cover", display: "block" }}
            loading="lazy"
          />
          {participant.avatarOverlay && (
            <div style={{ position: "absolute", inset: 0, background: participant.avatarOverlay, mixBlendMode: "overlay", pointerEvents: "none" }} />
          )}
        </div>
      ) : (
        <div
          style={{
            width: 40,
            height: 40,
            borderRadius: "50%",
            background: participant.avatarColor,
            flexShrink: 0,
            display: "flex",
            alignItems: "center",
            justifyContent: "center",
            fontFamily: "Roboto Condensed, sans-serif",
            fontWeight: 700,
            fontSize: "18px",
            color: "#fff",
            letterSpacing: "0.02em",
          }}
        >
          {participant.avatarLetter}
        </div>
      )}

      {/* Name */}
      <div
        style={{
          flex: 1,
          fontFamily: "Roboto Condensed, sans-serif",
          fontWeight: 500,
          fontSize: "17px",
          color: isUser ? "#FF6B21" : "#F4F5FC",
          overflow: "hidden",
          textOverflow: "ellipsis",
          whiteSpace: "nowrap",
        }}
      >
        {participant.name}
        {isUser && (
          <span
            style={{
              marginLeft: "6px",
              fontSize: "12px",
              color: "#FF6B21",
              opacity: 0.6,
              fontWeight: 400,
            }}
          >
            (вы)
          </span>
        )}
      </div>

      {/* XP */}
      <div
        style={{
          fontFamily: "Roboto Condensed, sans-serif",
          fontWeight: 700,
          fontSize: "16px",
          color: isUser ? "#FF6B21" : "#798589",
          flexShrink: 0,
          whiteSpace: "nowrap",
        }}
      >
        {formatXp(participant.xp)} XP
      </div>
    </div>
  );
}

// ─── Zone divider ─────────────────────────────────────────────────────────────

function PromotionZone() {
  return (
    <div
      style={{
        background: "rgba(16,185,129,0.08)",
        borderTop: "1px solid #10B981",
        borderBottom: "1px solid #10B981",
        padding: "6px 16px",
        display: "flex",
        alignItems: "center",
        gap: "6px",
        fontFamily: "Roboto Condensed, sans-serif",
        fontWeight: 700,
        fontSize: "13px",
        color: "#10B981",
        letterSpacing: "0.08em",
        userSelect: "none",
      }}
    >
      <span style={{ fontSize: "15px" }}>↑</span>
      ЗОНА ПОВЫШЕНИЯ
      <span style={{ fontSize: "15px" }}>↑</span>
    </div>
  );
}

function RelegationZone() {
  return (
    <div
      style={{
        background: "rgba(239,68,68,0.08)",
        borderTop: "1px solid #EF4444",
        borderBottom: "1px solid #EF4444",
        padding: "6px 16px",
        display: "flex",
        alignItems: "center",
        gap: "6px",
        fontFamily: "Roboto Condensed, sans-serif",
        fontWeight: 700,
        fontSize: "13px",
        color: "#EF4444",
        letterSpacing: "0.08em",
        userSelect: "none",
      }}
    >
      <span style={{ fontSize: "15px" }}>↓</span>
      ЗОНА ВЫЛЕТА
      <span style={{ fontSize: "15px" }}>↓</span>
    </div>
  );
}

// ─── Trophy icon ──────────────────────────────────────────────────────────────

function TrophyIcon({ trophy, size = 96 }: { trophy: string; size?: number }) {
  return <img src={trophy} width={size} height={size} style={{ objectFit: "contain" }} />;
}

// ─── Right sidebar widget ─────────────────────────────────────────────────────

function LeagueRightWidget({ userPosition, aboveUser, userXp, league }: {
  userPosition: number;
  aboveUser: Participant | undefined;
  userXp: number;
  league: League;
}) {
  const xpToNext = aboveUser ? aboveUser.xp - userXp : 0;
  const isFirst = userPosition === 1;

  return (
    <div style={{ display: "flex", flexDirection: "column", gap: "12px" }}>
      {/* League position card */}
      <div className="bg-[#343e42] rounded-[15px] p-[20px] flex flex-col gap-[12px]">
        <p className="font-['Roboto_Condensed:Medium',sans-serif] font-medium text-[#f1f2fb] text-[18px] leading-[20px]">
          Ваша лига
        </p>
        <div className="flex items-center gap-[10px]">
          <span style={{ fontSize: "28px", lineHeight: 1 }}>{league.emoji}</span>
          <div>
            <p className="font-['Roboto_Condensed:Medium',sans-serif] font-medium text-[22px] leading-[1.2]" style={{ color: league.color }}>
              {league.name}
            </p>
            <p className="font-['Roboto_Condensed:Regular',sans-serif] text-[#798589] text-[14px]">
              #{userPosition} место из 25
            </p>
          </div>
        </div>
        {!isFirst && xpToNext > 0 && (
          <div className="bg-[#282F33] rounded-[10px] p-[12px]">
            <p className="font-['Roboto_Condensed:Regular',sans-serif] text-[#798589] text-[14px] leading-[1.4]">
              До следующего места
            </p>
            <p className="font-['Roboto_Condensed:Medium',sans-serif] font-medium text-[20px] leading-[1.2]" style={{ color: "#FF6B21" }}>
              +{xpToNext} XP
            </p>
          </div>
        )}
        {isFirst && (
          <div className="bg-[#282F33] rounded-[10px] p-[12px]">
            <p className="font-['Roboto_Condensed:Medium',sans-serif] font-medium text-[16px]" style={{ color: "#10B981" }}>
              🔥 Ты лидер! Удерживай позицию
            </p>
          </div>
        )}
      </div>

      {/* Next league teaser */}
      {league.tier < 4 && (() => {
        const LEAGUES_ALL = [
          { name: "Пиксель", emoji: "⭐", color: "#6B7280", minXp: 0 },
          { name: "Вектор", emoji: "🎨", color: "#CD7F32", minXp: 300 },
          { name: "Прототип", emoji: "💡", color: "#9CA3AF", minXp: 1000 },
          { name: "Арт-директор", emoji: "🚀", color: "#FFB121", minXp: 3000 },
        ];
        const next = LEAGUES_ALL[league.tier];
        const xpToNextLeague = next.minXp - userXp;
        const pct = Math.min(100, Math.round((userXp / next.minXp) * 100));
        return (
          <div className="bg-[#343e42] rounded-[15px] p-[20px] flex flex-col gap-[12px]">
            <p className="font-['Roboto_Condensed:Medium',sans-serif] font-medium text-[#f1f2fb] text-[18px] leading-[20px]">
              Следующая лига
            </p>
            <div className="flex items-center gap-[10px]">
              <span style={{ fontSize: "24px", lineHeight: 1, opacity: 0.6 }}>{next.emoji}</span>
              <p className="font-['Roboto_Condensed:Medium',sans-serif] font-medium text-[18px]" style={{ color: next.color, opacity: 0.7 }}>
                {next.name}
              </p>
            </div>
            {/* progress bar */}
            <div>
              <div style={{ height: "8px", borderRadius: "4px", background: "#282F33", overflow: "hidden" }}>
                <div style={{
                  height: "100%",
                  width: `${pct}%`,
                  borderRadius: "4px",
                  background: `linear-gradient(to right, #ff6b21, #994014)`,
                  transition: "width 0.3s",
                }} />
              </div>
              <div className="flex justify-between mt-[6px]">
                <p className="font-['Roboto_Condensed:Regular',sans-serif] text-[#798589] text-[13px]">{formatXp(userXp)} XP</p>
                <p className="font-['Roboto_Condensed:Regular',sans-serif] text-[#798589] text-[13px]">+{formatXp(xpToNextLeague)} XP</p>
              </div>
            </div>
          </div>
        );
      })()}
    </div>
  );
}

// ─── Main Page ────────────────────────────────────────────────────────────────

export default function LeaguePage() {
  const userData = useUserSafe();
  const { userId } = useAuth();

  const userXp = userData?.xp ?? 0;
  const league = getLeague(userXp);

  // Weekly XP: earned since Monday 00:00 (Duolingo-style)
  const userWeeklyXp = getWeeklyXp(userXp);

  // Week seed: deterministic per user per week → bots reset each Monday
  const weekSeed = userId + String(getCurrentWeekStart());

  // Determine user display name — profile name → email → default
  const userName = (() => {
    try {
      const profileName = localStorage.getItem("uxeo-profile-name");
      if (profileName) return profileName;
      const email = localStorage.getItem("uxeo-user-email");
      if (email) {
        const derived = email.split("@")[0];
        const capitalized = derived.charAt(0).toUpperCase() + derived.slice(1);
        localStorage.setItem("uxeo-profile-name", capitalized);
        return capitalized;
      }
    } catch (_) {}
    // Write default so next read is consistent
    localStorage.setItem("uxeo-profile-name", "Evgeniy");
    return "Evgeniy";
  })();

  // Build participants list (all xp values = weekly XP)
  const rivals = generateRivals(userId, userWeeklyXp, weekSeed);

  const userAvatarUrl = (() => { try { return localStorage.getItem("uxeo-profile-avatar") ?? undefined; } catch { return undefined; } })();

  const userParticipant: Participant = {
    id: "user",
    name: userName,
    xp: userWeeklyXp,
    isUser: true,
    avatarColor: "#FF6B21",
    avatarLetter: userName.charAt(0).toUpperCase(),
    avatarUrl: userAvatarUrl,
  };

  const allParticipants: Participant[] = [userParticipant, ...rivals];

  // Sort by XP descending
  const sorted = [...allParticipants].sort((a, b) => b.xp - a.xp);

  // Find user position (1-based)
  const userPosition = sorted.findIndex((p) => p.isUser) + 1;

  // Motivational text
  const motivationalText = (() => {
    if (userPosition === 1) {
      return "Ты на первом месте! Удерживай позицию! 🔥";
    }
    const aboveUser = sorted[userPosition - 2]; // person at position userPosition-1
    const diff = aboveUser.xp - userWeeklyXp;
    return `${aboveUser.name} впереди! Заработай ${diff} XP и обойди его!`;
  })();

  // Ref for user row scrolling
  const userRowRef = useRef<HTMLDivElement | null>(null);

  useEffect(() => {
    if (userRowRef.current) {
      userRowRef.current.scrollIntoView({ behavior: "smooth", block: "center" });
    }
  }, []);

  // Build rendered list with zone dividers
  const listItems: React.ReactNode[] = [];
  sorted.forEach((participant, idx) => {
    const position = idx + 1;
    const isUserRow = participant.isUser;

    // After position 5: promotion zone divider (only if tier < 4)
    if (idx === 5 && league.tier < 4) {
      listItems.push(<PromotionZone key="promotion-zone" />);
    }

    // After position 20: relegation zone divider (only if tier > 1)
    if (idx === 20 && league.tier > 1) {
      listItems.push(<RelegationZone key="relegation-zone" />);
    }

    listItems.push(
      <div key={participant.id} ref={isUserRow ? userRowRef : undefined}>
        <ParticipantRow participant={participant} position={position} />
      </div>
    );
  });

  return (
    <Layout title="Лига" rightContent={<RightWidgets />} rightWidth="320px" mobileKeepTabBarVisible>
      <div
        style={{
          width: "100%",
          display: "flex",
          flexDirection: "column",
          gap: 0,
        }}
      >
        {/* Trophy + league name + timer */}
        <div
          style={{
            display: "flex",
            flexDirection: "column",
            alignItems: "center",
            paddingTop: "24px",
            paddingBottom: "8px",
            gap: "8px",
          }}
        >
          <TrophyIcon trophy={league.trophy} />
          <div
            style={{
              fontFamily: "Roboto Condensed, sans-serif",
              fontWeight: 700,
              fontSize: "28px",
              color: league.color,
              lineHeight: 1.2,
              letterSpacing: "0.02em",
              textAlign: "center",
            }}
          >
            {league.name}
          </div>
          <WeekTimer />
        </div>

        {/* Motivational text */}
        <p
          style={{
            fontFamily: "Roboto Condensed, sans-serif",
            fontWeight: 400,
            fontSize: "16px",
            color: "#798589",
            textAlign: "center",
            margin: "16px 0",
            lineHeight: 1.4,
            padding: "0 16px",
          }}
        >
          {motivationalText}
        </p>

        {/* Leaderboard card */}
        <div
          style={{
            background: "linear-gradient(172deg, #2C3538 2%, #384348 98%)",
            borderRadius: "20px",
            overflow: "hidden",
          }}
        >
          {listItems}
        </div>
      </div>
    </Layout>
  );
}
