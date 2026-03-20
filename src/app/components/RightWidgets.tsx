import React from "react";
import svgPaths from "../../imports/svg-pt1cecsedx";
import svgMfoan from "../../imports/svg-mfoan0qzpw";
import imgLeader from "figma:asset/1d3e95d16c48ef4470ac62a88c5ff7b35e4ccb76.png";
import { useUserSafe } from "../context/UserContext";
import { useLessonSafe } from "../context/LessonContext";
import { useNavigate, useLocation } from "react-router";
import { LESSONS } from "../data/lessons";
import { Zap } from "lucide-react";
import { FloatingCircle } from "./FloatingCircle";
import { getLeague, LEAGUES } from "../pages/LeaguePage";
import FreeIconGift from "../../imports/FreeIconGift81465531";

// --- Weekly Challenge (Figma icon) ---
function FigmaIcon() {
  return (
    <div className="h-[25.999px] relative shrink-0 w-[17.333px]">
      <svg className="absolute block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 17.3333 25.9993">
        <g id="Icon Container">
          <path d={svgPaths.p347c500} fill="var(--fill-0, #24CB71)" id="Vector" />
          <path d={svgPaths.p3fbbce10} fill="var(--fill-0, #FF7237)" id="Vector_2" />
          <path d={svgPaths.p1ef91300} fill="var(--fill-0, #00B6FF)" id="Vector_3" />
          <path d={svgPaths.p1468cc00} fill="var(--fill-0, #FF3737)" id="Vector_4" />
          <path d={svgPaths.p15fb1b00} fill="var(--fill-0, #874FFF)" id="Vector_5" />
        </g>
      </svg>
    </div>
  );
}

function WeeklyChallengeSvg() {
  const userData = useUserSafe();
  // Retrieve weekly challenge progress from user context
  // Default to 0/3 if no data
  const completed = userData?.weeklyChallengesCompleted ?? 0;
  const total = 3;
  const r = 25;
  const circumference = 2 * Math.PI * r;
  const dash = circumference * (completed / total);

  return (
    <div className="h-[59.077px] relative w-[55.385px]">
      <svg className="absolute block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 55.3846 59.0769">
        <defs>
          <linearGradient id="wc_prog_grad" x1="0%" y1="0%" x2="100%" y2="0%">
            <stop offset="0%" stopColor="#FF6B21" />
            <stop offset="100%" stopColor="#FF8C4A" />
          </linearGradient>
        </defs>
        {/* Background ring */}
        <path d={svgPaths.p331c3e00} id="Vector" stroke="var(--stroke-0, #4B595F)" strokeWidth="4.14602" />
        {/* Progress arc — 33% fill */}
        <circle
          cx="27.69" cy="29.54" r={r}
          stroke="url(#wc_prog_grad)" strokeWidth="4.14602"
          strokeDasharray={`${dash} ${circumference}`}
          strokeLinecap="round"
          fill="none"
        />
      </svg>
    </div>
  );
}

function WeeklyChallenge() {
  const navigate = useNavigate();
  const userData = useUserSafe();
  const completed = userData?.weeklyChallengesCompleted ?? 0;
  const total = 3;
  
  return (
    <div
      className="bg-[#343e42] relative rounded-[15px] shrink-0 w-full cursor-pointer hover:brightness-110 transition-all"
      onClick={() => navigate("/challenges")}
    >
      <div className="content-stretch flex items-center p-[20px] relative w-full gap-[12px]">
        {/* Title + description */}
        <div className="flex flex-col gap-[2px] flex-1 min-w-0">
          <p className="font-['Roboto_Condensed:Medium',sans-serif] font-medium leading-[20px] text-[#f1f2fb] text-[18px]">Недельные вызовы</p>
          <p className="font-['Roboto_Condensed:Regular',sans-serif] font-normal leading-[18px] text-[#798589] text-[14px]">Практические задания в Figma</p>
        </div>

        {/* Progress ring + Figma icon inside */}
        <div className="h-[50px] relative shrink-0 w-[50px]">
          <div className="absolute flex h-[46px] items-center justify-center left-[2px] top-[0px] w-[50px]" style={{ "--transform-inner-width": "1200", "--transform-inner-height": "19" } as React.CSSProperties}>
            <div style={{ transform: "rotate(-90deg) scale(0.83)", transformOrigin: "center" }}>
              <WeeklyChallengeSvg />
            </div>
          </div>
          <div className="absolute flex h-[46px] items-center justify-center left-[2px] top-[2px] w-[50px]">
            <div style={{ transform: "scale(0.78)", transformOrigin: "center" }}>
              <FigmaIcon />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

// --- League Progress Card ---
function FigmaLogo() {
  return (
    <div className="relative w-[22px] h-[22px]">
      <svg className="absolute block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 22.6604 22.7263">
        <g id="Group 481325">
          <path d={svgPaths.p300b3300} fill="var(--fill-0, #FF6B21)" id="Vector" />
          <path d={svgPaths.p1a742c00} fill="var(--fill-0, #353E41)" id="Vector_2" />
          <path d={svgPaths.p31917400} fill="var(--fill-0, #2572D0)" id="Vector_3" />
          <path d={svgPaths.pd217d00} fill="var(--fill-0, #2572D0)" id="Vector_4" />
          <path d={svgPaths.p20832600} fill="var(--fill-0, #2572D0)" id="Vector_5" />
          <path d={svgPaths.pf4a7400} fill="var(--fill-0, #21589C)" id="Vector_6" />
          <path d={svgPaths.p256c1200} fill="var(--fill-0, #353E41)" id="Vector_7" />
          <path d={svgPaths.p2b096340} fill="var(--fill-0, #353E41)" id="Vector_8" />
          <path d={svgPaths.p1ac87b80} fill="var(--fill-0, #2572D0)" id="Vector_9" />
          <path d={svgPaths.p619e5f0} fill="var(--fill-0, #2572D0)" id="Vector_10" />
          <path d={svgPaths.p23959380} fill="var(--fill-0, #353E41)" id="Vector_11" />
        </g>
      </svg>
    </div>
  );
}

// ─── Shared completion indicator ──────────────────────────────────────────────

/**
 * Orange circular checkmark — shown to the left of a widget title
 * when that widget's goal has been reached.  Matches the OrangeIndicator
 * style used in TheoryPage accordion headers.
 */
function OrangeCircleCheck() {
  return (
    <div className="relative shrink-0 size-[18px]">
      <svg className="absolute block size-full" fill="none" viewBox="0 0 18 18">
        <defs>
          <linearGradient id="ocGrad" x1="0%" y1="0%" x2="100%" y2="100%">
            <stop offset="0%"   stopColor="#ff6b21" />
            <stop offset="100%" stopColor="#ff8c4a" />
          </linearGradient>
        </defs>
        <circle cx="9" cy="9" r="9" fill="url(#ocGrad)" />
        <path
          d="M5.5 9.2L7.6 11.3L12.5 6.8"
          stroke="white"
          strokeWidth="1.6"
          strokeLinecap="round"
          strokeLinejoin="round"
        />
      </svg>
    </div>
  );
}

function LeagueProgress() {
  const userData = useUserSafe();
  const navigate = useNavigate();
  if (!userData) return null;
  
  const { xp } = userData;
  const league = getLeague(xp);
  const nextLeague = league.tier < 4 ? LEAGUES[league.tier] : null;
  const LEAGUE_MAX = nextLeague ? nextLeague.minXp : league.minXp;
  const leaguePct = nextLeague ? Math.min(100, (xp / LEAGUE_MAX) * 100) : 100;
  const isComplete = !nextLeague;

  return (
    <div
      className="bg-[#343e42] w-full relative rounded-[15px] self-stretch cursor-pointer hover:brightness-110 transition-all"
      onClick={() => navigate("/league")}
    >
      <div className="flex flex-col items-center size-full">
        <div className="content-stretch flex flex-col items-center justify-between p-[20px] relative size-full">
          <div className="flex flex-row items-center gap-[8px] relative shrink-0 w-full">
            {isComplete && <OrangeCircleCheck />}
            <p className="font-['Roboto_Condensed:Medium',sans-serif] font-medium leading-[20px] relative shrink-0 text-[#f1f2fb] text-[18px] whitespace-nowrap">
              {league.name}
            </p>
            {!isComplete && (
              <div className="bg-clip-padding border-0 border-[transparent] border-solid content-stretch flex gap-[5px] items-center relative">
                <div className="relative shrink-0 size-[9px]">
                  <div className="absolute inset-[-7.41%]">
                    <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 10.3333 10.3333">
                      <path d={svgPaths.p28187d00} fill="#798589" id="Vector" stroke="#798589" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.33333" />
                    </svg>
                  </div>
                </div>
                <p className="font-['Roboto_Condensed:Bold',sans-serif] font-medium leading-[0] relative shrink-0 text-[#f1f2fb] text-[0px] text-[18px] whitespace-nowrap">
                  <span className="leading-[20px] text-[#798589]">{xp} / {LEAGUE_MAX} XP</span>
                </p>
              </div>
            )}
          </div>
          <div className="content-stretch flex gap-[12px] h-[53px] items-end relative shrink-0 w-full">
            {/* Progress bar */}
            <div className="content-stretch flex flex-[1_0_0] flex-col gap-[8px] items-start min-h-px min-w-px relative">
              <div className="content-stretch flex flex-col h-[10px] items-start justify-center relative shrink-0 w-full">
                <div className="content-stretch flex flex-col h-[10px] items-start overflow-clip relative rounded-full shrink-0 w-full" style={{ backgroundImage: "linear-gradient(178.396deg, #282F33 14.367%, rgb(46, 57, 62) 147.74%)" }}>
                  <div
                    className="h-[10px] rounded-full shrink-0 transition-[width] duration-300"
                    style={{
                      width: `${leaguePct}%`,
                      backgroundImage: "linear-gradient(to bottom, #ff6b21, #994014)",
                    }}
                  />
                </div>
              </div>
              <div className="content-stretch flex font-['Roboto_Condensed:Medium',sans-serif] font-medium h-[17px] items-start justify-between leading-[22.5px] relative shrink-0 text-[#a6a6a6] text-[18px] w-full whitespace-nowrap">
                <p className="relative shrink-0 text-[#798589]">0</p>
                <p className="relative shrink-0 text-[#798589]">{LEAGUE_MAX}</p>
              </div>
            </div>
            {/* Next league trophy (gray) or checkmark if max */}
            <div className="content-stretch flex h-[57px] items-center relative shrink-0">
              {nextLeague ? (
                <img
                  src={nextLeague.trophy}
                  width={32}
                  height={32}
                  style={{ objectFit: "contain", opacity: 0.5 }}
                />
              ) : (
                <OrangeCircleCheck />
              )}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

// --- Daily Challenge icon (cartoon figure) ---
function DailyChallengeIcon() {
  return (
    <div className="relative shrink-0 size-[26px]">
      <div className="absolute inset-[4.19%_0_39.95%_11.41%]">
        <svg className="absolute block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 23.033 14.5243">
          <path d={svgPaths.p3bdf3b80} fill="var(--fill-0, #F6F6F5)" id="Vector" />
        </svg>
      </div>
      <div className="absolute inset-[17.37%_0_43.27%_49.77%]">
        <svg className="absolute block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 13.0593 10.2331">
          <path d={svgPaths.p197c5b00} fill="var(--fill-0, #F6F6F5)" id="Vector" />
        </svg>
      </div>
      <div className="absolute inset-[42.83%_21.79%_43.28%_49.77%]">
        <svg className="absolute block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 7.39335 3.61036">
          <path d={svgPaths.p1cf30600} fill="var(--fill-0, #282727)" id="Vector" />
        </svg>
      </div>
      <div className="absolute inset-[17.37%_5.32%_67.38%_81.19%]">
        <svg className="absolute block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 3.50717 3.9664">
          <path d={svgPaths.p1f5d3940} fill="var(--fill-0, #282727)" id="Vector" />
        </svg>
      </div>
      <div className="absolute inset-[36.34%_0_48.35%_87.5%]">
        <svg className="absolute block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 3.25091 3.98076">
          <path d={svgPaths.p3b6d5f00} fill="var(--fill-0, #282727)" id="Vector" />
        </svg>
      </div>
      <div className="absolute inset-[34.95%_30.27%_53.01%_56.65%]">
        <svg className="absolute block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 3.40163 3.12854">
          <path d={svgPaths.p3ee40400} fill="var(--fill-0, #282727)" id="Vector" />
        </svg>
      </div>
      <div className="absolute inset-[32.7%_12.71%_53.98%_72.16%]">
        <svg className="absolute block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 3.9334 3.46375">
          <path d={svgPaths.p144c5a70} fill="var(--fill-0, #282727)" id="Vector" />
        </svg>
      </div>
      <div className="absolute inset-[4.19%_18.81%_56.33%_26.73%]">
        <svg className="absolute block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 14.1587 10.2652">
          <path d={svgPaths.p14f2a80} fill="var(--fill-0, #282727)" id="Vector" />
        </svg>
      </div>
      <div className="absolute inset-[14.42%_39.17%_72.39%_47.79%]">
        <svg className="absolute block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 3.39163 3.42782">
          <path d={svgPaths.p1d090a80} fill="var(--fill-0, #282727)" id="Vector" />
        </svg>
      </div>
      <div className="absolute inset-[17.6%_31.07%_72.25%_60.07%]">
        <svg className="absolute block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 2.30547 2.63909">
          <path d={svgPaths.p2bd59ae0} fill="var(--fill-0, #F6F6F5)" id="Vector" />
        </svg>
      </div>
      <div className="absolute inset-[43.77%_60.27%_39.94%_21.95%]">
        <svg className="absolute block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 4.62286 4.23464">
          <path d={svgPaths.p2191ed00} fill="var(--fill-0, #282727)" id="Vector" />
        </svg>
      </div>
      <div className="absolute inset-[6.31%_73.3%_78.92%_11.41%]">
        <svg className="absolute block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 3.97385 3.83901">
          <path d={svgPaths.p150e3500} fill="var(--fill-0, #282727)" id="Vector" />
        </svg>
      </div>
      <div className="absolute inset-[24.9%_66.81%_60.6%_18.21%]">
        <svg className="absolute block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 3.89424 3.76971">
          <path d={svgPaths.p129d4b80} fill="var(--fill-0, #282727)" id="Vector" />
        </svg>
      </div>
      <div className="absolute inset-[1.21%_57.46%_5.67%_0]">
        <svg className="absolute block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 11.0599 24.2103">
          <path d={svgPaths.p1d3c6e00} fill="var(--fill-0, #2C83FB)" id="Vector" />
        </svg>
      </div>
      <div className="absolute inset-[22.78%_75.16%_49.84%_14.57%]">
        <svg className="absolute block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 2.67028 7.11719">
          <path d={svgPaths.pf717300} fill="var(--fill-0, #E7E6E7)" id="Vector" />
        </svg>
      </div>
      <div className="absolute inset-[93.82%_57.6%_5.67%_20.1%]">
        <svg className="absolute block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 5.79958 0.132892">
          <path d={svgPaths.p10e84b80} fill="var(--fill-0, #060404)" id="Vector" />
        </svg>
      </div>
      <div className="absolute inset-[3.27%_94.22%_93.48%_1.99%]">
        <svg className="absolute block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 0.98547 0.84669">
          <path d={svgPaths.p932100} fill="var(--fill-0, #174CC1)" id="Vector" />
        </svg>
      </div>
      <div className="absolute inset-[0_8.19%_76.79%_75.1%]">
        <svg className="absolute block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 4.34506 6.03392">
          <path d={svgPaths.p3e31a500} fill="var(--fill-0, #F6F6F5)" id="Vector" />
        </svg>
      </div>
      <div className="absolute inset-[0_11.05%_86.24%_75.1%]">
        <svg className="absolute block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 3.60203 3.57685">
          <path d={svgPaths.p328c7e00} fill="var(--fill-0, #282727)" id="Vector" />
        </svg>
      </div>
      <div className="absolute inset-[93.76%_43.82%_0_7.43%]">
        <svg className="absolute block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 12.6746 1.62366">
          <path d={svgPaths.p2bed0480} fill="var(--fill-0, #282727)" id="Vector" />
        </svg>
      </div>
      <div className="absolute inset-[99.47%_43.82%_0.01%_7.43%]">
        <svg className="absolute block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 12.6746 0.134884">
          <path d={svgPaths.p2be75e00} fill="var(--fill-0, #060404)" id="Vector" />
        </svg>
      </div>
      <div className="absolute inset-[93.76%_52.46%_0.37%_40.62%]">
        <svg className="absolute block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 1.79762 1.52777">
          <path d={svgPaths.p2d2fa100} fill="var(--fill-0, #282727)" id="Vector" />
        </svg>
      </div>
      <div className="absolute inset-[23.81%_36.34%_63.01%_50.62%]">
        <svg className="absolute block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 3.39081 3.42522">
          <path d={svgPaths.p2de1f440} fill="var(--fill-0, #F6F6F5)" id="Vector 2" />
        </svg>
      </div>
      <div className="absolute inset-[45.76%_28.51%_43.02%_58.45%]">
        <svg className="absolute block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 3.39081 2.91778">
          <path d={svgPaths.p36c916c0} fill="var(--fill-0, #F6F6F5)" id="Vector 3" />
        </svg>
      </div>
      <div className="absolute inset-[6.24%_41.55%_82.54%_45.4%]">
        <svg className="absolute block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 3.39081 2.91778">
          <path d={svgPaths.p36c916c0} fill="var(--fill-0, #F6F6F5)" id="Vector 3" />
        </svg>
      </div>
    </div>
  );
}

function DailyChallenge() {
  const userData = useUserSafe();
  
  if (!userData) return null;
  
  const { xp } = userData; // XP computed from xpAwarded flags in UserContext
  const DAILY_MAX = 30;
  
  const dailyPct = Math.min(100, (xp / DAILY_MAX) * 100);
  const isComplete = xp >= DAILY_MAX;

  return (
    <div className="bg-[#343e42] w-full relative rounded-[15px]">
      <div className="content-stretch flex flex-col gap-[16px] items-start p-[20px] relative w-full">
        {/* Title + XP row */}
        <div className="flex flex-row items-center gap-[8px] relative shrink-0 w-full">
          {isComplete && <OrangeCircleCheck />}
          <p className="font-['Roboto_Condensed:Medium',sans-serif] font-medium leading-[20px] relative shrink-0 text-[#f1f2fb] text-[18px] whitespace-nowrap">Задание дня</p>
          {!isComplete && (
            <div className="bg-clip-padding border-0 border-[transparent] border-solid content-stretch flex gap-[5px] items-center relative">
              <div className="relative shrink-0 size-[9px]">
                <div className="absolute inset-[-7.41%]">
                  <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 10.3333 10.3333">
                    <path d={svgPaths.p28187d00} fill="#798589" id="Vector" stroke="#798589" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.33333" />
                  </svg>
                </div>
              </div>
              <p className="font-['Roboto_Condensed:Bold',sans-serif] font-medium leading-[0] relative shrink-0 text-[#f1f2fb] text-[0px] text-[18px] whitespace-nowrap">
                <span className="leading-[20px] text-[#798589]">{xp} / {DAILY_MAX} XP</span>
              </p>
            </div>
          )}
        </div>
        {/* Progress bar + icon */}
        <div className="content-stretch flex gap-[20px] items-end relative shrink-0 w-full">
          <div className="content-stretch flex flex-[1_0_0] flex-col gap-[8px] items-start min-h-px min-w-px relative">
            <div className="content-stretch flex flex-col h-[10px] items-start justify-center relative shrink-0 w-full">
              <div className="content-stretch flex flex-col h-[10px] items-start overflow-clip relative rounded-full shrink-0 w-full" style={{ backgroundImage: "linear-gradient(178.396deg, #282F33 14.367%, rgb(46, 57, 62) 147.74%)" }}>
                <div
                  className="h-[10px] rounded-full shrink-0 transition-[width] duration-300"
                  style={{
                    width: `${dailyPct}%`,
                    backgroundImage: "linear-gradient(to bottom, #ff6b21, #994014)",
                  }}
                />
              </div>
            </div>
            <div className="content-stretch flex font-['Roboto_Condensed:Medium',sans-serif] font-medium h-[17px] items-start justify-between leading-[22.5px] relative shrink-0 text-[#a6a6a6] text-[18px] w-full whitespace-nowrap">
              <p className="relative shrink-0 text-[#798589]">0</p>
              <p className="relative shrink-0 text-[#798589]">{DAILY_MAX}</p>
            </div>
          </div>
          <div className="content-stretch flex h-[40px] items-center relative shrink-0">
            <DailyChallengeIcon />
          </div>
        </div>
      </div>
    </div>
  );
}

// ─── Compact widget bar (tablet mode — 4 circles: Figma / Lightning / Flag / Gift) ─

export function CompactWidgets() {
  const userData = useUserSafe();
  const navigate = useNavigate();
  const xp = userData?.xp ?? 0;
  const weeklyCompleted = userData?.weeklyChallengesCompleted ?? 0;
  const currentLeague = getLeague(xp);

  // Progress values 0–1 for each arc
  const weeklyProgress = Math.min(1, weeklyCompleted / 3);
  const dailyProgress  = Math.min(1, xp / 30);
  // League arc: progress within current league tier
  const leagueMin = currentLeague.minXp;
  const leagueMax = currentLeague.maxXp ?? (leagueMin + 3000);
  const leagueProgress = leagueMax > leagueMin
    ? Math.min(1, (xp - leagueMin) / (leagueMax - leagueMin))
    : 1;

  // Tablet size: 52px — sidebar bg colour passed so circles blend with the sidebar
  const S = 52;
  const SB_BG = "#282F33";

  return (
    // 6px padding on each side so the arc SVG isn't clipped by overflow:hidden ancestors
    <div className="flex flex-col gap-[21px] items-center w-full" style={{ paddingLeft: 6, paddingRight: 6 }}>
      {/* Figma — weekly challenges */}
      <FloatingCircle size={S} title="Недельные вызовы" progress={weeklyProgress} bg={SB_BG} onClick={() => navigate("/challenges")}>
        <FigmaIcon />
      </FloatingCircle>

      {/* League trophy — current tier */}
      <FloatingCircle size={S} title="Лига" progress={leagueProgress} bg={SB_BG} onClick={() => navigate("/league")}>
        <img src={currentLeague.trophy} width={28} height={28} style={{ objectFit: "contain" }} />
      </FloatingCircle>

      {/* Flag — daily challenge */}
      <FloatingCircle size={S} title="Задание дня" progress={dailyProgress} bg={SB_BG} onClick={() => navigate("/challenges")}>
        <DailyChallengeIcon />
      </FloatingCircle>

      {/* Gift — write a review: no arc, muted grey fill */}
      <FloatingCircle size={S} title="Написать отзыв" noArc bg="#343E42">
        <div style={{ width: 26, height: 26, position: 'relative' }}>
          <FreeIconGift />
        </div>
      </FloatingCircle>
    </div>
  );
}

export default function RightWidgets({ compact = false }: { compact?: boolean }) {
  const navigate = useNavigate();
  const location = useLocation();
  const isTheoryPage = ["/theory", "/contrast"].includes(location.pathname);

  const handleStartQuiz = () => {
    // Determine lessonId: prefer location.state, fall back to pathname-based detection
    const lessonId = (location.state as any)?.lessonId
      || (location.pathname === "/contrast" ? "contrast-lesson" : "color-lesson");
    const quizId = (location.state as any)?.quizId
      || LESSONS.find(l => l.lessonId === lessonId)?.quizId
      || lessonId;
    navigate(`/lesson-quiz?quizId=${encodeURIComponent(quizId)}&lessonId=${encodeURIComponent(lessonId)}`, { state: { lessonId, quizId } });

    try {
      const ctx = new AudioContext();
      const o = ctx.createOscillator();
      o.type = "sine";
      o.frequency.setValueAtTime(660, ctx.currentTime);
      o.frequency.exponentialRampToValueAtTime(880, ctx.currentTime + 0.08);
      const g = ctx.createGain();
      g.gain.setValueAtTime(0.12, ctx.currentTime);
      g.gain.exponentialRampToValueAtTime(0.001, ctx.currentTime + 0.08);
      o.connect(g);
      g.connect(ctx.destination);
      o.start();
      o.stop(ctx.currentTime + 0.08);
    } catch (_) {}
  };

  if (compact) {
    return <CompactWidgets />;
  }

  return (
    // Issue 3: vertical gap = horizontal gap = 20px for consistent spacing grid
    <div className="content-stretch flex flex-col gap-[20px] items-start relative shrink-0 w-full">
      <WeeklyChallenge />
      <div className="content-stretch flex flex-col gap-[20px] items-start relative shrink-0 w-full">
        <LeagueProgress />
        <DailyChallenge />
      </div>
      
      {/* Show "Start Quiz" button only on theory page */}
      {isTheoryPage && (
        <div 
          className="bg-[#f7f8fc] h-[70px] relative rounded-[15px] shrink-0 w-full cursor-pointer hover:translate-y-[1px] active:translate-y-[3px] hover:shadow-[0px_4px_0px_0px_#d2d4df] active:shadow-[0px_1px_0px_0px_#d2d4df] shadow-[0px_5px_0px_0px_#d2d4df] transition-all" 
          onClick={handleStartQuiz}
        >
          <div className="flex flex-row items-center justify-center size-full">
            <div className="content-stretch flex gap-[6px] items-center justify-center px-[20px] relative size-full">
              <Zap className="h-[32px] w-[22px] text-[#ff6b21]" fill="currentColor" />
              <p className="font-['Roboto_Condensed:Medium',sans-serif] font-medium leading-[24px] relative shrink-0 text-[#343e42] text-[22px] whitespace-nowrap">
                Начать квиз
              </p>
              <div className="bg-[#ff6b21] h-[24px] relative rounded-[12px] shrink-0 px-[10px] flex items-center justify-center">
                <p className="font-['Inter:Semi_Bold',sans-serif] font-medium leading-[14px] relative shrink-0 text-[#ffffff] text-[9px] whitespace-nowrap">
                  +125 XP
                </p>
              </div>
            </div>
          </div>
        </div>
      )}
    </div>
  );
}