// ─── Lesson Completion Screen ─────────────────────────────────────────────────

import { useEffect, useState } from "react";
import correctSvgPaths from "../../imports/svg-1n8b0v1b3s";
import { useWindowWidth } from "../hooks/useWindowWidth";
import { useUserSafe } from "../context/UserContext";

// ─── UXEO icons ───────────────────────────────────────────────────────────────

function PartyPopperIcon() {
  return (
    <div className="relative shrink-0" style={{ width: 72, height: 72 }}>
      <svg className="absolute block size-full" fill="none" preserveAspectRatio="xMidYMid meet"
        viewBox="0 0 27 27">
        <g clipPath="url(#clip_party_cs)">
          <path d={correctSvgPaths.p2f718f80} fill="#FDC70E" />
          <path d={correctSvgPaths.p38d83c00} fill="#D39518" />
          <path d={correctSvgPaths.p12327780} fill="#3B84ED" />
          <path d={correctSvgPaths.p496da80}  fill="#D3374E" />
          <path d={correctSvgPaths.pef16e80}  fill="#3B84ED" />
          <path d={correctSvgPaths.p202ea40}  fill="#00D043" />
          <path d={correctSvgPaths.p14081df8} fill="#D3374E" />
          <path d={correctSvgPaths.p2b87cf80} fill="#00D043" />
          <path d={correctSvgPaths.p3113880}  fill="#3B84ED" />
          <path d={correctSvgPaths.p3e04e680} fill="#00D043" />
          <path d={correctSvgPaths.p14cf800}  fill="#D3374E" />
          <path d={correctSvgPaths.p303da80}  fill="#D3374E" />
          <path d={correctSvgPaths.pdd5a900}  fill="#FDC70E" />
          <path d={correctSvgPaths.p35d76170} fill="#D3374E" />
          <path d={correctSvgPaths.p24b97080} fill="#D3374E" />
        </g>
        <defs>
          <clipPath id="clip_party_cs"><rect fill="white" height="27" width="27" /></clipPath>
        </defs>
      </svg>
    </div>
  );
}

function LightningIcon({ size = 28 }: { size?: number }) {
  return (
    <div className="relative shrink-0" style={{ width: size * 0.875, height: size }}>
      <svg className="absolute block size-full" fill="none" preserveAspectRatio="none"
        viewBox="0 0 14 16">
        <path d={correctSvgPaths.p3fb52a80} fill="#00D043" />
      </svg>
    </div>
  );
}

// ─── Shared button components ─────────────────────────────────────────────────

function playClick(up = true) {
  try {
    const ctx = new AudioContext();
    const o = ctx.createOscillator();
    o.type = "sine";
    o.frequency.setValueAtTime(up ? 660 : 440, ctx.currentTime);
    o.frequency.exponentialRampToValueAtTime(up ? 880 : 330, ctx.currentTime + 0.08);
    const g = ctx.createGain();
    g.gain.setValueAtTime(0.12, ctx.currentTime);
    g.gain.exponentialRampToValueAtTime(0.001, ctx.currentTime + 0.08);
    o.connect(g); g.connect(ctx.destination);
    o.start(); o.stop(ctx.currentTime + 0.08);
  } catch (_) {}
}

function OrangeButton({ label, onClick, isMobile }: { label: string; onClick: () => void; isMobile?: boolean }) {
  return (
    <button
      onClick={() => { onClick(); playClick(true); }}
      className="group relative flex h-[59px] items-center justify-center px-[40px]
        rounded-[15px] shrink-0 bg-[#ff5d39] cursor-pointer select-none outline-none
        transition-transform duration-75 hover:translate-y-[3px] active:translate-y-[5px]"
    >
      <div aria-hidden="true" className="absolute border-[#ff390d] border-[0.835px] border-solid inset-0 pointer-events-none rounded-[15px] transition-[box-shadow] duration-75 shadow-[0px_5px_0px_0px_#c24226] group-hover:shadow-[0px_2px_0px_0px_#c24226] group-active:shadow-none" />
      <p className={`font-['Roboto_Condensed:Medium',sans-serif] font-medium leading-[1.2] text-[#f4f5fc] whitespace-nowrap ${isMobile ? "text-[20px]" : "text-[26px]"}`}>{label}</p>
    </button>
  );
}

function SecondaryButton({ label, onClick }: { label: string; onClick: () => void }) {
  return (
    <button
      onClick={() => { onClick(); playClick(false); }}
      className="group relative flex h-[59px] items-center justify-center px-[40px]
        rounded-[15px] shrink-0 bg-[#3d484e] cursor-pointer select-none outline-none
        transition-transform duration-75 hover:translate-y-[3px] active:translate-y-[5px]"
    >
      <div aria-hidden="true" className="absolute inset-0 pointer-events-none rounded-[15px] border border-[#57646a] border-solid transition-[box-shadow] duration-75 shadow-[0px_5px_0px_0px_black] group-hover:shadow-[0px_2px_0px_0px_black] group-active:shadow-none" />
      <p className="font-['Roboto_Condensed:Medium',sans-serif] font-medium leading-[22.955px] text-[#c8ccd4] text-[26px] whitespace-nowrap">{label}</p>
    </button>
  );
}

// ─── Props ────────────────────────────────────────────────────────────────────

interface LessonCompletionScreenProps {
  onContinue: () => void;
  onRetry?: () => void;
  onBack?: () => void;
  lessonId?: string;
  correctAnswers: number;
  totalQuestions: number;
  earnedXP: number;
  passed: boolean;
  bestStreak?: number;
  elapsedSeconds?: number;
}

// ─── Main export ──────────────────────────────────────────────────────────────

export default function LessonCompletionScreen({
  onContinue,
  onRetry,
  onBack,
  lessonId,
  correctAnswers,
  totalQuestions,
  earnedXP,
  passed,
  bestStreak = 0,
  elapsedSeconds = 0,
}: LessonCompletionScreenProps) {
  const vw = useWindowWidth();
  const isMobile = vw < 768;
  const userData = useUserSafe();
  const savedRating = lessonId ? (userData?.getLessonProgress(lessonId)?.rating ?? 0) : 0;
  const [rating, setRating] = useState(savedRating);
  const [hovered, setHovered] = useState(0);

  useEffect(() => {
    const ctx = new AudioContext();
    const vol = window.innerWidth < 768 ? 0.08 : 0.12;
    const play = () => {
      const now = ctx.currentTime + 0.05; // tiny offset avoids pop on resume
      if (passed) {
        // Triumph: C5 E5 G5 + held C6
        const sequence = [
          { freq: 523,  t: 0,    dur: 0.15 },
          { freq: 659,  t: 0.14, dur: 0.15 },
          { freq: 784,  t: 0.28, dur: 0.15 },
          { freq: 1047, t: 0.42, dur: 0.55 },
        ];
        sequence.forEach(({ freq, t, dur }) => {
          const o = ctx.createOscillator();
          const g = ctx.createGain();
          o.type = "sine";
          o.frequency.setValueAtTime(freq, now + t);
          g.gain.setValueAtTime(0, now + t);
          g.gain.linearRampToValueAtTime(vol, now + t + 0.03);
          g.gain.exponentialRampToValueAtTime(0.001, now + t + dur);
          o.connect(g); g.connect(ctx.destination);
          o.start(now + t);
          o.stop(now + t + dur + 0.05);
        });
      } else {
        // Fail: descending two-tone (gain starts from 0 to avoid click)
        const o = ctx.createOscillator();
        const g = ctx.createGain();
        o.type = "sine";
        o.frequency.setValueAtTime(380, now);
        o.frequency.exponentialRampToValueAtTime(240, now + 0.4);
        g.gain.setValueAtTime(0, now);
        g.gain.linearRampToValueAtTime(vol, now + 0.03);
        g.gain.exponentialRampToValueAtTime(0.001, now + 0.4);
        o.connect(g); g.connect(ctx.destination);
        o.start(now); o.stop(now + 0.45);
      }
    };
    ctx.resume().then(play).catch(() => {});
    return () => { ctx.close().catch(() => {}); };
  }, []); // eslint-disable-line react-hooks/exhaustive-deps

  const formatTime = (s: number) => {
    if (s < 60) return `${s}с`;
    const m = Math.floor(s / 60), sec = s % 60;
    return sec > 0 ? `${m}м ${sec}с` : `${m}м`;
  };

  const starSize = isMobile ? 32 : 38;
  const activeStars = hovered || rating;

  const StarRow = () => (
    <div className="flex flex-col items-center gap-[10px]">
      <p className={`font-['Roboto_Condensed:Regular',sans-serif] text-[#798589] leading-[1.2] ${isMobile ? "text-[13px]" : "text-[16px]"}`}>
        Оцените урок — это помогает нам стать лучше
      </p>
      <div className="flex gap-[6px]">
        {[1,2,3,4,5].map(n => (
          <button
            key={n}
            onMouseEnter={() => setHovered(n)}
            onMouseLeave={() => setHovered(0)}
            onClick={() => { setRating(n); if (lessonId) userData?.saveLessonRating(lessonId, n); }}
            className="transition-transform duration-100 active:scale-90 hover:scale-110 cursor-pointer outline-none"
          >
            <svg width={starSize} height={starSize} viewBox="0 0 24 24" fill="none">
              <path
                d="M12 2l2.9 6.26L22 9.27l-5 4.87 1.18 6.88L12 17.77l-6.18 3.25L7 14.14 2 9.27l7.1-1.01L12 2z"
                fill={activeStars >= n ? "#FFB121" : "none"}
                stroke={activeStars >= n ? "#FFB121" : "#4a5560"}
                strokeWidth="1.5"
                strokeLinejoin="round"
              />
            </svg>
          </button>
        ))}
      </div>
    </div>
  );

  return (
    <div
      className="relative min-h-screen w-full overflow-hidden flex items-center justify-center"
      style={{ background: "#282F33" }}
    >
      <div className={`flex flex-col items-center ${isMobile ? "gap-[32px] px-[24px] w-full" : "gap-[40px]"}`}>

        {passed ? (
          /* ── STATE A: PASSED ────────────────────────────────────────────── */
          <>
            <div className="flex flex-col items-center gap-[12px]">
              <PartyPopperIcon />
              <h1 className={`font-['Roboto_Condensed:Medium',sans-serif] font-medium text-[#cdf6db] leading-[1.2] ${isMobile ? "text-[28px]" : "text-[48px]"}`}>
                Поздравляем!
              </h1>
              <p className={`font-['Roboto_Condensed:Regular',sans-serif] text-[#798589] leading-[1.2] ${isMobile ? "text-[14px]" : "text-[18px]"}`}>
                Урок успешно пройден
              </p>
            </div>

            {/* Stat cards */}
            <div className={isMobile ? "grid grid-cols-2 gap-[12px] w-full" : "flex gap-[12px]"}>
              <div className="flex flex-col items-center gap-[6px] rounded-[16px] px-[24px] py-[18px]" style={{ background: "#343e42", minWidth: isMobile ? 0 : 140, flex: isMobile ? undefined : 1 }}>
                <p className={`font-['Roboto_Condensed:Medium',sans-serif] font-medium text-[#f4f5fc] leading-[1.1] ${isMobile ? "text-[26px]" : "text-[36px]"}`}>
                  {correctAnswers}<span className="text-[#798589]">/{totalQuestions}</span>
                </p>
                <p className={`font-['Roboto_Condensed:Regular',sans-serif] text-[#798589] ${isMobile ? "text-[12px]" : "text-[14px]"}`}>заданий</p>
              </div>
              <div className="flex flex-col items-center gap-[6px] rounded-[16px] px-[24px] py-[18px]" style={{ background: "#343e42", minWidth: isMobile ? 0 : 140, flex: isMobile ? undefined : 1 }}>
                <div className="flex items-center gap-[6px]">
                  <p className={`font-['Roboto_Condensed:Medium',sans-serif] font-medium text-[#00d043] leading-[1.1] ${isMobile ? "text-[26px]" : "text-[36px]"}`}>+{earnedXP}</p>
                  <LightningIcon size={isMobile ? 20 : 26} />
                </div>
                <p className={`font-['Roboto_Condensed:Regular',sans-serif] text-[#798589] ${isMobile ? "text-[12px]" : "text-[14px]"}`}>XP заработано</p>
              </div>
              {bestStreak >= 2 && (
                <div className="flex flex-col items-center gap-[6px] rounded-[16px] px-[24px] py-[18px]" style={{ background: "#343e42", minWidth: isMobile ? 0 : 140, flex: isMobile ? undefined : 1 }}>
                  <div className="flex items-center gap-[6px]">
                    <p className={`font-['Roboto_Condensed:Medium',sans-serif] font-medium text-[#FFB121] leading-[1.1] ${isMobile ? "text-[26px]" : "text-[36px]"}`}>{bestStreak}</p>
                    <svg width="16" height="22" viewBox="0 0 16.7655 24.4324" fill="none">
                      <defs><linearGradient id="csfg" x1="8.38" x2="8.38" y1="0" y2="24.4324" gradientUnits="userSpaceOnUse"><stop stopColor="#FFB121" /><stop offset="1" stopColor="#BB8116" /></linearGradient></defs>
                      <path d="M13.5956 6.34462C13.4294 6.06951 13.1002 5.93905 12.7908 6.02528C12.4813 6.11155 12.2672 6.39348 12.2672 6.71478C12.2672 7.58838 11.5564 8.29907 10.6828 8.29907C9.80926 8.29907 9.09857 7.58833 9.09857 6.71478V0.715745C9.09857 0.426229 8.9242 0.16525 8.65668 0.0544453C8.38931 -0.0562166 8.08133 0.00491231 7.87661 0.20963C7.7963 0.289942 5.88751 2.20985 3.95372 5.11054C2.81341 6.821 1.90344 8.51763 1.24916 10.1534C0.420315 12.2256 0 14.2094 0 16.0497C0 20.6719 3.7605 24.4324 8.38273 24.4324C13.005 24.4324 16.7655 20.6719 16.7655 16.0497C16.7655 13.091 15.699 9.82582 13.5956 6.34462Z" fill="url(#csfg)" />
                    </svg>
                  </div>
                  <p className={`font-['Roboto_Condensed:Regular',sans-serif] text-[#798589] ${isMobile ? "text-[12px]" : "text-[14px]"}`}>серия ответов</p>
                </div>
              )}
              {elapsedSeconds > 0 && (
                <div className="flex flex-col items-center gap-[6px] rounded-[16px] px-[24px] py-[18px]" style={{ background: "#343e42", minWidth: isMobile ? 0 : 140, flex: isMobile ? undefined : 1 }}>
                  <p className={`font-['Roboto_Condensed:Medium',sans-serif] font-medium text-[#f4f5fc] leading-[1.1] ${isMobile ? "text-[26px]" : "text-[36px]"}`}>
                    {formatTime(elapsedSeconds)}
                  </p>
                  <p className={`font-['Roboto_Condensed:Regular',sans-serif] text-[#798589] ${isMobile ? "text-[12px]" : "text-[14px]"}`}>время</p>
                </div>
              )}
            </div>

            <StarRow />
            <OrangeButton label="Продолжить" onClick={onContinue} isMobile={isMobile} />
          </>
        ) : (
          /* ── STATE B: FAILED ────────────────────────────────────────────── */
          <>
            <div className="flex flex-col items-center gap-[12px]">
              <h1 className={`font-['Roboto_Condensed:Medium',sans-serif] font-medium text-[#ffbaaa] leading-[1.2] ${isMobile ? "text-[28px]" : "text-[48px]"}`}>
                Попробуйте ещё раз
              </h1>
              <p className={`font-['Roboto_Condensed:Regular',sans-serif] text-[#798589] leading-[1.2] text-center ${isMobile ? "text-[14px]" : "text-[18px]"}`}>
                Нужно {Math.ceil(totalQuestions * 0.5)} из {totalQuestions}, чтобы пройти урок
              </p>
            </div>

            {/* Stat cards */}
            <div className={isMobile ? "grid grid-cols-2 gap-[12px] w-full" : "flex gap-[12px]"}>
              <div className="flex flex-col items-center gap-[6px] rounded-[16px] px-[24px] py-[18px]" style={{ background: "#343e42", minWidth: isMobile ? 0 : 140, flex: isMobile ? undefined : 1 }}>
                <p className={`font-['Roboto_Condensed:Medium',sans-serif] font-medium text-[#f4f5fc] leading-[1.1] ${isMobile ? "text-[26px]" : "text-[36px]"}`}>
                  {correctAnswers}<span className="text-[#798589]">/{totalQuestions}</span>
                </p>
                <p className={`font-['Roboto_Condensed:Regular',sans-serif] text-[#798589] ${isMobile ? "text-[12px]" : "text-[14px]"}`}>правильных</p>
              </div>
              {earnedXP > 0 && (
                <div className="flex flex-col items-center gap-[6px] rounded-[16px] px-[24px] py-[18px]" style={{ background: "#343e42", minWidth: isMobile ? 0 : 140, flex: isMobile ? undefined : 1 }}>
                  <div className="flex items-center gap-[6px]">
                    <p className={`font-['Roboto_Condensed:Medium',sans-serif] font-medium text-[#798589] leading-[1.1] ${isMobile ? "text-[26px]" : "text-[36px]"}`}>+{earnedXP}</p>
                    <LightningIcon size={isMobile ? 20 : 26} />
                  </div>
                  <p className={`font-['Roboto_Condensed:Regular',sans-serif] text-[#798589] ${isMobile ? "text-[12px]" : "text-[14px]"}`}>XP заработано</p>
                </div>
              )}
            </div>

            <StarRow />

            <div className="flex flex-col items-center gap-[20px] w-full min-w-[320px]">
              <OrangeButton label="Попробовать ещё раз" onClick={onRetry ?? onContinue} isMobile={isMobile} />
              <button
                onClick={() => { (onBack ?? onContinue)(); playClick(false); }}
                className="cursor-pointer select-none outline-none transition-opacity duration-150 hover:opacity-80"
              >
                <p className={`font-['Roboto_Condensed:Regular',sans-serif] text-[#798589] leading-[1.2] ${isMobile ? "text-[15px]" : "text-[20px]"}`}>
                  Вернуться на Roadmap
                </p>
              </button>
            </div>
          </>
        )}
      </div>
    </div>
  );
}