// ─── Lesson Completion Screen ─────────────────────────────────────────────────

import correctSvgPaths from "../../imports/svg-1n8b0v1b3s";
import { useWindowWidth } from "../hooks/useWindowWidth";

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
      <p className={`font-['Roboto_Condensed:Bold',sans-serif] font-medium leading-[1.2] text-[#f4f5fc] whitespace-nowrap ${isMobile ? "text-[20px]" : "text-[26px]"}`}>{label}</p>
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
      <p className="font-['Roboto_Condensed:Bold',sans-serif] font-medium leading-[22.955px] text-[#c8ccd4] text-[26px] whitespace-nowrap">{label}</p>
    </button>
  );
}

// ─── Props ────────────────────────────────────────────────────────────────────

interface LessonCompletionScreenProps {
  onContinue: () => void;
  onRetry?: () => void;
  onBack?: () => void;
  correctAnswers: number;
  totalQuestions: number;
  earnedXP: number;
  passed: boolean;
  bestStreak?: number;
}

// ─── Main export ──────────────────────────────────────────────────────────────

export default function LessonCompletionScreen({
  onContinue,
  onRetry,
  onBack,
  correctAnswers,
  totalQuestions,
  earnedXP,
  passed,
  bestStreak = 0,
}: LessonCompletionScreenProps) {
  const vw = useWindowWidth();
  const isMobile = vw < 768;

  return (
    <div
      className="relative min-h-screen w-full overflow-hidden flex items-center justify-center"
      style={{ backgroundImage: "linear-gradient(166.791deg, rgb(44, 52, 56) 14.367%, rgb(46, 57, 62) 147.74%)" }}
    >
      <div className="flex flex-col items-center gap-[48px]">

        {passed ? (
          /* ── STATE A: PASSED ────────────────────────────────────────────── */
          <>
            {/* Icon — only on pass */}
            <PartyPopperIcon />

            <div className="flex flex-col items-center gap-[16px]">
              <h1 className={`font-['Roboto_Condensed:Bold',sans-serif] font-medium text-[#cdf6db] leading-[1.2] whitespace-nowrap ${isMobile ? "text-[28px]" : "text-[48px]"}`}>
                Поздравляем!
              </h1>
              <p className={`font-['Roboto_Condensed:Regular',sans-serif] font-normal text-[#f4f5fc] leading-[1.2] whitespace-nowrap ${isMobile ? "text-[17px]" : "text-[24px]"}`}>
                Урок пройден
              </p>
              <p className={`font-['Roboto_Condensed:Regular',sans-serif] font-normal text-[#798589] leading-[1.2] whitespace-nowrap ${isMobile ? "text-[14px]" : "text-[18px]"}`}>
                {correctAnswers} из {totalQuestions} заданий выполнено
              </p>
            </div>

            {/* XP reward */}
            <div className="flex items-center gap-[12px]">
              <p className={`font-['Roboto_Condensed:Bold',sans-serif] font-bold text-[#00d043] leading-[1.2] whitespace-nowrap ${isMobile ? "text-[24px]" : "text-[36px]"}`}>
                +{earnedXP} XP
              </p>
              <LightningIcon size={isMobile ? 22 : 32} />
            </div>

            {/* Best streak badge */}
            {bestStreak >= 2 && (
              <div className="flex items-center gap-[8px]">
                <svg width="14" height="20" viewBox="0 0 16.7655 24.4324" fill="none">
                  <defs>
                    <linearGradient id="csfg" x1="8.38" x2="8.38" y1="0" y2="24.4324" gradientUnits="userSpaceOnUse">
                      <stop stopColor="#FFB121" /><stop offset="1" stopColor="#BB8116" />
                    </linearGradient>
                  </defs>
                  <path d="M13.5956 6.34462C13.4294 6.06951 13.1002 5.93905 12.7908 6.02528C12.4813 6.11155 12.2672 6.39348 12.2672 6.71478C12.2672 7.58838 11.5564 8.29907 10.6828 8.29907C9.80926 8.29907 9.09857 7.58833 9.09857 6.71478V0.715745C9.09857 0.426229 8.9242 0.16525 8.65668 0.0544453C8.38931 -0.0562166 8.08133 0.00491231 7.87661 0.20963C7.7963 0.289942 5.88751 2.20985 3.95372 5.11054C2.81341 6.821 1.90344 8.51763 1.24916 10.1534C0.420315 12.2256 0 14.2094 0 16.0497C0 20.6719 3.7605 24.4324 8.38273 24.4324C13.005 24.4324 16.7655 20.6719 16.7655 16.0497C16.7655 13.091 15.699 9.82582 13.5956 6.34462Z" fill="url(#csfg)" />
                </svg>
                <p className={`font-['Roboto_Condensed:Medium',sans-serif] font-medium text-[#798589] leading-[1.2] whitespace-nowrap ${isMobile ? "text-[15px]" : "text-[20px]"}`}>
                  Лучшая серия: <span className="text-[#FFB121] font-bold">{bestStreak}</span>
                </p>
              </div>
            )}

            <OrangeButton label="Продолжить" onClick={onContinue} isMobile={isMobile} />
          </>
        ) : (
          /* ── STATE B: FAILED ────────────────────────────────────────────── */
          <>
            <div className="flex flex-col items-center gap-[16px]">
              <h1 className={`font-['Roboto_Condensed:Bold',sans-serif] font-medium text-[#ffbaaa] leading-[1.2] whitespace-nowrap ${isMobile ? "text-[28px]" : "text-[48px]"}`}>
                Попробуйте ещё раз
              </h1>
              <p className={`font-['Roboto_Condensed:Regular',sans-serif] font-normal text-[#f4f5fc] leading-[1.4] text-center max-w-[480px] ${isMobile ? "text-[15px] px-[24px]" : "text-[22px]"}`}>
                Вы выполнили {correctAnswers} из {totalQuestions} заданий.<br />
                Чтобы пройти урок нужно хотя бы {Math.ceil(totalQuestions * 0.5)} из {totalQuestions}.
              </p>
            </div>

            {/* Partial XP (if any) */}
            {earnedXP > 0 && (
              <div className="flex items-center gap-[12px]">
                <p className={`font-['Roboto_Condensed:Bold',sans-serif] font-medium text-[#798589] leading-[1.2] whitespace-nowrap ${isMobile ? "text-[20px]" : "text-[28px]"}`}>
                  +{earnedXP} XP
                </p>
                <LightningIcon size={isMobile ? 18 : 26} />
              </div>
            )}

            {/* Two buttons */}
            <div className="flex flex-col items-center gap-[26px] w-full min-w-[320px]">
              <OrangeButton label="Попробовать ещё раз" onClick={onRetry ?? onContinue} isMobile={isMobile} />
              <button
                onClick={() => { (onBack ?? onContinue)(); playClick(false); }}
                className="cursor-pointer select-none outline-none transition-opacity duration-150 hover:opacity-80"
              >
                <p className={`font-['Roboto_Condensed:Regular',sans-serif] font-normal text-[#798589] leading-[1.2] whitespace-nowrap ${isMobile ? "text-[15px]" : "text-[20px]"}`}>
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