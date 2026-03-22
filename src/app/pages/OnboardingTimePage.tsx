import { useState } from "react";
import { useNavigate } from "react-router";
import { useUserSafe, type DailyTime } from "../context/UserContext";
import svgPaths from "../../imports/svg-nfm2yohg1w";

function BackButton({ onClick }: { onClick: () => void }) {
  return (
    <div className="relative shrink-0 cursor-pointer select-none" onClick={onClick}>
      <div className="relative shrink-0 size-[58px]">
        <svg className="absolute block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 58 58">
          <g>
            <circle cx="29" cy="29" fill="url(#paint0_linear_time_back)" r="29" />
            <path d={svgPaths.p1a9a4a80} stroke="var(--stroke-0, #C3C6D1)" strokeLinecap="round" strokeOpacity="0.6" strokeWidth="5" />
          </g>
          <defs>
            <linearGradient gradientUnits="userSpaceOnUse" id="paint0_linear_time_back" x1="24.5104" x2="59.2485" y1="12.4232" y2="30.7966">
              <stop stopColor="#3D494F" />
              <stop offset="1" stopColor="#303C42" />
            </linearGradient>
          </defs>
        </svg>
      </div>
    </div>
  );
}

function playCorrectSound() {
  try {
    const ctx = new AudioContext();
    const o = ctx.createOscillator();
    const g = ctx.createGain();
    o.type = "sine";
    o.frequency.setValueAtTime(660, ctx.currentTime);
    o.frequency.exponentialRampToValueAtTime(880, ctx.currentTime + 0.08);
    g.gain.setValueAtTime(0.12, ctx.currentTime);
    g.gain.exponentialRampToValueAtTime(0.001, ctx.currentTime + 0.08);
    o.connect(g); g.connect(ctx.destination);
    o.start(); o.stop(ctx.currentTime + 0.08);
  } catch (_) {}
}

function OptionCard({ text, sub, state, onClick }: { text: string; sub: string; state: "idle" | "correct"; onClick: () => void }) {
  const bg = state === "correct"
    ? "linear-gradient(172.482deg, rgba(58,81,67,0.5) 2.4187%, rgba(56,72,62,0.5) 98.527%, rgba(45,56,44,0.5) 116.25%)"
    : "linear-gradient(172.454deg, rgb(44, 53, 56) 2.4187%, rgb(56, 67, 72) 98.527%, rgb(44, 53, 56) 116.25%)";

  return (
    <div
      onClick={state === "idle" ? onClick : undefined}
      className={`h-[80px] relative rounded-[24px] shrink-0 w-full transition-all duration-200 ${state === "idle" ? "cursor-pointer" : "cursor-default"}`}
      style={{ backgroundImage: bg }}
    >
      {state === "correct" && (
        <div aria-hidden="true" className="absolute border-[3px] border-solid inset-[-3px] pointer-events-none rounded-[27px]" style={{ borderColor: "#00932f" }} />
      )}
      <div className="flex flex-row items-center size-full">
        <div className="content-stretch flex items-center gap-[12px] px-[40px] py-[20px] relative size-full">
          <p className="font-['Roboto_Condensed:Medium',sans-serif] font-medium leading-[20px] text-[#f4f5fc] text-[22px] shrink-0">
            {text}
          </p>
          <p className="font-['Roboto_Condensed:Regular',sans-serif] font-normal leading-[18px] text-[#798589] text-[16px]">
            {sub}
          </p>
        </div>
      </div>
      <div className="absolute inset-0 pointer-events-none rounded-[inherit] shadow-[inset_-4px_0px_4px_0px_#384348]" />
    </div>
  );
}

const TIMES: { id: DailyTime; text: string; sub: string }[] = [
  { id: "5min",  text: "5 минут",  sub: "по-тихоньку" },
  { id: "15min", text: "15 минут", sub: "уверенный темп" },
  { id: "30min", text: "30 минут", sub: "хочу быстрее" },
];

export default function OnboardingTimePage() {
  const navigate = useNavigate();
  const userCtx = useUserSafe();
  const [selected, setSelected] = useState<DailyTime | null>(null);

  const handleSelect = (id: DailyTime) => {
    if (selected) return;
    setSelected(id);
    playCorrectSound();
    userCtx?.setDailyTime(id);
    setTimeout(() => navigate("/quiz"), 280);
  };

  return (
    <div
      className="relative min-h-screen w-full flex flex-col overflow-hidden"
      style={{ backgroundImage: "linear-gradient(165.05deg, #282F33 14.367%, rgb(46, 57, 62) 147.74%)" }}
    >
      <div className="content-stretch flex items-center px-[22px] py-[15px]">
        <BackButton onClick={() => navigate("/onboarding-goal")} />
      </div>

      <div className="flex-1 flex flex-col items-center justify-center px-[24px]">
        <div className="flex flex-col items-center gap-[36px] w-full max-w-[526px]">
          <p className="font-['Roboto_Condensed:Medium',sans-serif] font-medium leading-[27.5px] text-[#f4f5fc] text-[32px] text-center">
            Сколько времени в день?
          </p>
          <div className="flex flex-col gap-[19px] w-full">
            {TIMES.map((t) => (
              <OptionCard
                key={t.id}
                text={t.text}
                sub={t.sub}
                state={selected === t.id ? "correct" : "idle"}
                onClick={() => handleSelect(t.id)}
              />
            ))}
          </div>
        </div>
      </div>
    </div>
  );
}
