import React, { useEffect, useRef } from "react";
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
  { name: "Джун",         trophy: "/trophy-1.svg", color: "#6B7280", tier: 1, minXp: 0,    maxXp: 299  },
  { name: "Мидл",         trophy: "/trophy-2.svg", color: "#CD7F32", tier: 2, minXp: 300,  maxXp: 999  },
  { name: "Сеньор",       trophy: "/trophy-3.svg", color: "#9CA3AF", tier: 3, minXp: 1000, maxXp: 2999 },
  { name: "Арт-директор", trophy: "/trophy-4.svg", color: "#FFB121", tier: 4, minXp: 3000, maxXp: null },
];

export function getLeague(xp: number): League {
  if (xp >= 3000) return LEAGUES[3];
  if (xp >= 1000) return LEAGUES[2];
  if (xp >= 300)  return LEAGUES[1];
  return LEAGUES[0];
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

// ─── Data ─────────────────────────────────────────────────────────────────────

const NAMES = [
  "Аня К.", "Макс Д.", "Саша В.", "Лена П.", "Дима Н.",
  "Катя М.", "Вася Р.", "Оля С.", "Игорь Т.", "Маша Ф.",
  "Артём Л.", "Настя Б.", "Коля Ж.", "Света Г.", "Паша О.",
  "Юля Х.", "Миша Ц.", "Тоня Ш.", "Рома Щ.", "Вера Э.",
  "Боря Ю.", "Галя Я.", "Федя А.", "Зоя И.", "Никита У.",
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
}

// ─── Generate rivals ──────────────────────────────────────────────────────────

function generateRivals(userId: string, userXp: number, league: League): Participant[] {
  const rivals: Participant[] = [];

  // Determine XP range for rivals (within the same league)
  const leagueMin = league.minXp;
  const leagueMax = league.maxXp ?? 9999;

  // Shuffle and pick 24 names deterministically
  const namesCopy = [...NAMES];
  for (let i = 0; i < 24; i++) {
    const maxI = namesCopy.length;
    const swapIdx = Math.floor(seededRandom(userId, i * 100) * maxI);
    [namesCopy[i % maxI], namesCopy[swapIdx]] = [namesCopy[swapIdx], namesCopy[i % maxI]];
  }

  for (let i = 0; i < 24; i++) {
    // XP: ±40% from user, but within league bounds and at least 5
    let xpMin: number;
    let xpMax: number;

    if (userXp === 0) {
      xpMin = 5;
      xpMax = 80;
    } else {
      xpMin = Math.max(5, Math.max(leagueMin, Math.floor(userXp * 0.6)));
      xpMax = Math.min(leagueMax, Math.ceil(userXp * 1.4));
      if (xpMin > xpMax) xpMin = Math.max(5, leagueMin);
    }

    const rivalXp =
      xpMin + Math.floor(seededRandom(userId, i * 7 + 3) * (xpMax - xpMin + 1));

    const nameIndex = i % NAMES.length;
    const name = namesCopy[nameIndex];
    const avatarColor = AVATAR_COLORS[Math.floor(seededRandom(userId, i * 13 + 5) * AVATAR_COLORS.length)];
    const avatarLetter = name.charAt(0).toUpperCase();

    rivals.push({
      id: `rival-${i}`,
      name,
      xp: rivalXp,
      isUser: false,
      avatarColor,
      avatarLetter,
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
              opacity: 0.8,
              fontWeight: 400,
            }}
          >
            (ты)
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
        {participant.xp} XP
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
            <p className="font-['Roboto_Condensed:Bold',sans-serif] font-bold text-[22px] leading-[1.2]" style={{ color: league.color }}>
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
            <p className="font-['Roboto_Condensed:Bold',sans-serif] font-bold text-[20px] leading-[1.2]" style={{ color: "#FF6B21" }}>
              +{xpToNext} XP
            </p>
          </div>
        )}
        {isFirst && (
          <div className="bg-[#282F33] rounded-[10px] p-[12px]">
            <p className="font-['Roboto_Condensed:Bold',sans-serif] font-bold text-[16px]" style={{ color: "#10B981" }}>
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
              <p className="font-['Roboto_Condensed:Bold',sans-serif] font-bold text-[18px]" style={{ color: next.color, opacity: 0.7 }}>
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
                <p className="font-['Roboto_Condensed:Regular',sans-serif] text-[#798589] text-[13px]">{userXp} XP</p>
                <p className="font-['Roboto_Condensed:Regular',sans-serif] text-[#798589] text-[13px]">+{xpToNextLeague} XP</p>
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

  // Determine user display name
  const userName = (() => {
    try {
      const email = localStorage.getItem("uxeo-user-email");
      if (email) {
        const part = email.split("@")[0];
        return part.charAt(0).toUpperCase() + part.slice(1);
      }
    } catch (_) {}
    return "Ты";
  })();

  // Build participants list
  const rivals = generateRivals(userId, userXp, league);

  const userParticipant: Participant = {
    id: "user",
    name: userName,
    xp: userXp,
    isUser: true,
    avatarColor: "#FF6B21",
    avatarLetter: userName.charAt(0).toUpperCase(),
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
    const diff = aboveUser.xp - userXp;
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
    <Layout title="Лига" rightContent={<RightWidgets />} rightWidth="320px">
      <div
        style={{
          width: "100%",
          display: "flex",
          flexDirection: "column",
          gap: 0,
        }}
      >
        {/* Trophy + league name */}
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
