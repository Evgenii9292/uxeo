import { useState } from "react";
import { useNavigate } from "react-router";
import svgPaths from "../../imports/svg-nfm2yohg1w";
import { useUserSafe, type ExperienceLevel } from "../context/UserContext";
import { ReportErrorModal } from "./quiz/ReportErrorModal";

// ─── Back button (exact from Figma) ──────────────────────────────────────────
function BackButton({ onClick }: { onClick: () => void }) {
  return (
    <div className="relative shrink-0 cursor-pointer select-none" onClick={onClick}>
      <div className="bg-clip-padding border-0 border-[transparent] border-solid content-stretch flex items-center relative">
        <div className="relative shrink-0 size-[58px]">
          <svg className="absolute block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 58 58">
            <g>
              <circle cx="29" cy="29" fill="url(#paint0_linear_lvlsel_back)" r="29" />
              <path d={svgPaths.p1a9a4a80} stroke="var(--stroke-0, #C3C6D1)" strokeLinecap="round" strokeOpacity="0.6" strokeWidth="5" />
            </g>
            <defs>
              <linearGradient gradientUnits="userSpaceOnUse" id="paint0_linear_lvlsel_back" x1="24.5104" x2="59.2485" y1="12.4232" y2="30.7966">
                <stop stopColor="#3D494F" />
                <stop offset="1" stopColor="#303C42" />
              </linearGradient>
            </defs>
          </svg>
        </div>
      </div>
    </div>
  );
}

// ─── Sound: correct answer tone ───────────────────────────────────────────────
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
    o.connect(g);
    g.connect(ctx.destination);
    o.start();
    o.stop(ctx.currentTime + 0.08);
  } catch (_) {}
}

// ─── Level option card (styled exactly as quiz answer cards) ──────────────────
type LevelId = ExperienceLevel;

interface OptionCardProps {
  text: string;
  state: "idle" | "correct";
  onClick: () => void;
}

function OptionCard({ text, state, onClick }: OptionCardProps) {
  const bgMap = {
    idle:    "linear-gradient(172.454deg, rgb(44, 53, 56) 2.4187%, rgb(56, 67, 72) 98.527%, rgb(44, 53, 56) 116.25%)",
    correct: "linear-gradient(172.482deg, rgba(58,81,67,0.5) 2.4187%, rgba(56,72,62,0.5) 98.527%, rgba(45,56,44,0.5) 116.25%)",
  };

  const borderColor = state === "correct" ? "#00932f" : null;
  const isClickable = state === "idle";

  return (
    <div
      onClick={isClickable ? onClick : undefined}
      className={`h-[80px] relative rounded-[24px] shrink-0 w-full transition-all duration-200 ${isClickable ? "cursor-pointer" : "cursor-default"}`}
      style={{ backgroundImage: bgMap[state] }}
    >
      {/* Green border when correct */}
      {borderColor && (
        <div
          aria-hidden="true"
          className="absolute border-[3px] border-solid inset-[-3px] pointer-events-none rounded-[27px]"
          style={{ borderColor }}
        />
      )}

      {/* Text */}
      <div className="flex flex-row items-center size-full">
        <div className="content-stretch flex items-center px-[40px] py-[26px] relative size-full">
          <p className="font-['Roboto_Condensed:Regular',sans-serif] font-normal leading-[20px] relative shrink-0 text-[#f4f5fc] text-[18px] whitespace-nowrap">
            {text}
          </p>
        </div>
      </div>

      {/* Inset shadow */}
      <div className="absolute inset-0 pointer-events-none rounded-[inherit] shadow-[inset_-4px_0px_4px_0px_#384348]" />
    </div>
  );
}

// ─── Level data ───────────────────────────────────────────────────────────────
const LEVELS: { id: LevelId; text: string }[] = [
  { id: "beginner",        text: "Новичёк" },
  { id: "some_experience", text: "Есть опыт" },
  { id: "designer",        text: "Работаю дизайнером" },
];

// ─── Page ─────────────────────────────────────────────────────────────────────
export default function LevelSelectPage() {
  const navigate = useNavigate();
  const userCtx = useUserSafe();
  const [selected, setSelected] = useState<LevelId | null>(null);
  const [reportOpen, setReportOpen] = useState(false);

  const handleSelect = (id: LevelId) => {
    if (selected) return; // already transitioning
    setSelected(id);
    playCorrectSound();
    userCtx?.setLevel(id);
    setTimeout(() => navigate("/quiz"), 280);
  };

  return (
    <div
      className="relative min-h-screen w-full flex flex-col overflow-hidden"
      style={{ backgroundImage: "linear-gradient(165.05deg, #282F33 14.367%, rgb(46, 57, 62) 147.74%)" }}
    >
      {/* Header with back button */}
      <div className="content-stretch flex items-center px-[22px] py-[15px]">
        <BackButton onClick={() => navigate("/welcome")} />
      </div>

      {/* Main content — centred */}
      <div className="flex-1 flex flex-col items-center justify-center px-[24px]">
        <div className="flex flex-col items-center gap-[36px] w-full max-w-[526px]">

          {/* Title */}
          <p className="font-['Roboto_Condensed:Bold',sans-serif] font-bold leading-[27.5px] text-[#f4f5fc] text-[32px] whitespace-nowrap">
            Какой у вас уровень?
          </p>

          {/* Option cards */}
          <div className="flex flex-col gap-[19px] w-full">
            {LEVELS.map((lvl) => (
              <OptionCard
                key={lvl.id}
                text={lvl.text}
                state={selected === lvl.id ? "correct" : "idle"}
                onClick={() => handleSelect(lvl.id)}
              />
            ))}
          </div>
        </div>
      </div>

      {/* Report error */}
      <button
        onClick={() => setReportOpen(true)}
        className="absolute bottom-[28px] left-[28px] font-['Roboto_Condensed:Medium',sans-serif] font-medium leading-[20px] text-[#777982] text-[16px] whitespace-nowrap cursor-pointer hover:text-[#a0a3ab] transition-colors duration-150 outline-none bg-transparent border-none"
      >
        Сообщить об ошибке
      </button>
      {reportOpen && <ReportErrorModal onClose={() => setReportOpen(false)} />}
    </div>
  );
}
