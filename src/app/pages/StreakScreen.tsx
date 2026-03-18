// ─── Streak Screen ────────────────────────────────────────────────────────────

import svgPaths from "../../imports/svg-pt1cecsedx";

// ─── UXEO Fire icon (same path used in AppHeader) ─────────────────────────────
function FireIcon() {
  return (
    <div className="relative shrink-0" style={{ width: 52, height: 76 }}>
      <svg
        className="absolute block size-full"
        fill="none"
        preserveAspectRatio="xMidYMid meet"
        viewBox="0 0 16.7655 24.4324"
      >
        <g id="Fire Icon Group">
          <path d={svgPaths.p33094f0} fill="url(#fire_streak_grad)" id="Vector" />
        </g>
        <defs>
          <linearGradient
            gradientUnits="userSpaceOnUse"
            id="fire_streak_grad"
            x1="8.38"
            x2="8.38"
            y1="0"
            y2="24.4324"
          >
            <stop stopColor="#FFB121" />
            <stop offset="1" stopColor="#BB8116" />
          </linearGradient>
        </defs>
      </svg>
    </div>
  );
}

// ─── Green check indicator (replaces yellow dot) ──────────────────────────────
function GreenCheck() {
  return (
    <div className="relative shrink-0 size-[32px]">
      <svg className="absolute block size-full" fill="none" viewBox="0 0 32 32">
        <circle cx="16" cy="16" r="16" fill="url(#gc_streak)" />
        <path
          d="M9.5 16.5L13.5 20.5L22.5 11.5"
          stroke="white"
          strokeWidth="2.8"
          strokeLinecap="round"
          strokeLinejoin="round"
        />
        <defs>
          <linearGradient id="gc_streak" x1="0" y1="0" x2="32" y2="32" gradientUnits="userSpaceOnUse">
            <stop stopColor="#00D043" />
            <stop offset="1" stopColor="#009430" />
          </linearGradient>
        </defs>
      </svg>
    </div>
  );
}

function DayIndicator({ day, active }: { day: number; active: boolean }) {
  return (
    <div className="flex flex-col items-center gap-[8px]">
      {active ? (
        <GreenCheck />
      ) : (
        <div className="size-[32px] rounded-full bg-[#3d494f] border border-[#636670] border-solid" />
      )}
      <p className="font-['Roboto_Condensed:Regular',sans-serif] font-normal text-[#f4f5fc] text-[14px] leading-[1.2]">
        День {day}
      </p>
    </div>
  );
}

function ContinueButton({ onClick }: { onClick: () => void }) {
  return (
    <button
      onClick={() => {
        onClick();
        try {
          const ctx = new AudioContext();
          const o = ctx.createOscillator();
          o.type = "sine";
          o.frequency.setValueAtTime(660, ctx.currentTime);
          o.frequency.exponentialRampToValueAtTime(880, ctx.currentTime + 0.08);
          const g = ctx.createGain();
          g.gain.setValueAtTime(0.12, ctx.currentTime);
          g.gain.exponentialRampToValueAtTime(0.001, ctx.currentTime + 0.08);
          o.connect(g); g.connect(ctx.destination);
          o.start(); o.stop(ctx.currentTime + 0.08);
        } catch (_) {}
      }}
      className="
        group relative flex h-[59px] items-center justify-center px-[25.835px] py-[0.835px]
        rounded-[15px] shrink-0 bg-[#ff5d39] cursor-pointer select-none outline-none
        transition-transform duration-75 hover:translate-y-[3px] active:translate-y-[5px]
      "
    >
      <div aria-hidden="true" className="absolute border-[#ff390d] border-[0.835px] border-solid inset-0 pointer-events-none rounded-[15px] transition-[box-shadow] duration-75 shadow-[0px_5px_0px_0px_#c24226] group-hover:shadow-[0px_2px_0px_0px_#c24226] group-active:shadow-none" />
      <p className="font-['Roboto_Condensed:Bold',sans-serif] font-bold leading-[22.955px] text-[#f4f5fc] text-[26px] whitespace-nowrap">Продолжить</p>
    </button>
  );
}

interface StreakScreenProps {
  onContinue: () => void;
  currentStreak?: number;
}

export default function StreakScreen({ onContinue, currentStreak = 1 }: StreakScreenProps) {
  return (
    <div
      className="relative min-h-screen w-full overflow-hidden flex items-center justify-center"
      style={{ backgroundImage: "linear-gradient(166.791deg, rgb(44, 52, 56) 14.367%, rgb(46, 57, 62) 147.74%)" }}
    >
      <div className="flex flex-col items-center gap-[48px]">
        {/* UXEO Fire icon */}
        <FireIcon />

        {/* Streak started text */}
        <div className="flex flex-col items-center gap-[16px]">
          <h1 className="font-['Roboto_Condensed:Bold',sans-serif] font-bold text-[#fdc70e] text-[48px] leading-[1.2] whitespace-nowrap">
            {currentStreak === 1 ? 'Серия началась!' : `Серия: ${currentStreak} ${currentStreak === 1 ? 'день' : currentStreak < 5 ? 'дня' : 'дней'}!`}
          </h1>
          <p className="font-['Roboto_Condensed:Regular',sans-serif] font-normal text-[#f4f5fc] text-[20px] leading-[1.2] text-center max-w-[400px]">
            Продолжайте учиться каждый день, чтобы сохранить серию
          </p>
        </div>

        {/* Day indicators — green check on completed days */}
        <div className="flex items-center gap-[32px]">
          {[1, 2, 3].map((day) => (
            <DayIndicator key={day} day={day} active={day <= currentStreak} />
          ))}
        </div>

        {/* Continue button */}
        <div className="mt-[24px]">
          <ContinueButton onClick={onContinue} />
        </div>
      </div>
    </div>
  );
}
