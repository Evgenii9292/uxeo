import { useState } from "react";
import { useNavigate } from "react-router";
import { useUserSafe, type DailyTime } from "../context/UserContext";
import { CloseButton } from "./quiz/CloseButton";
import { FlagReportButton } from "./quiz/FlagReportButton";

function playCorrectSound() {
  try {
    const ctx = new AudioContext();
    const o = ctx.createOscillator();
    const g = ctx.createGain();
    const isMobile = typeof window !== "undefined" && window.matchMedia("(pointer: coarse)").matches;
    const peak = isMobile ? 0.06 : 0.12;
    o.type = "sine";
    o.frequency.setValueAtTime(660, ctx.currentTime);
    o.frequency.exponentialRampToValueAtTime(880, ctx.currentTime + 0.08);
    g.gain.setValueAtTime(0.0001, ctx.currentTime);
    g.gain.linearRampToValueAtTime(peak, ctx.currentTime + 0.01);
    g.gain.exponentialRampToValueAtTime(0.0001, ctx.currentTime + 0.09);
    o.connect(g); g.connect(ctx.destination);
    o.start(); o.stop(ctx.currentTime + 0.095);
  } catch (_) {}
}

function OptionCard({ text, sub, emoji, state, onClick }: { text: string; sub: string; emoji?: string; state: "idle" | "correct"; onClick: () => void }) {
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
        <div className="content-stretch flex items-center gap-[16px] px-[28px] py-[20px] relative size-full">
          {emoji && <span style={{ fontSize: 26, lineHeight: 1, flexShrink: 0 }}>{emoji}</span>}
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

const TIMES: { id: DailyTime; text: string; sub: string; emoji: string }[] = [
  { id: "5min",  text: "5 минут",  sub: "по-тихоньку",    emoji: "🌱" },
  { id: "15min", text: "15 минут", sub: "уверенный темп", emoji: "⚡️" },
  { id: "30min", text: "30 минут", sub: "хочу быстрее",   emoji: "🔥" },
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
    setTimeout(() => navigate("/onboarding-name"), 280);
  };

  return (
    <div
      className="relative min-h-screen w-full flex flex-col overflow-hidden"
      style={{
        minHeight: "100dvh",
        paddingBottom: "max(10px, env(safe-area-inset-bottom, 10px))",
        backgroundImage: "linear-gradient(165.05deg, #282F33 14.367%, rgb(46, 57, 62) 147.74%)",
      }}
    >
      <div className="flex items-center justify-between px-[22px] py-[15px]">
        <CloseButton onClick={() => navigate("/onboarding-goal")} />
        <FlagReportButton context="OnboardingTimePage" />
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
                emoji={t.emoji}
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
