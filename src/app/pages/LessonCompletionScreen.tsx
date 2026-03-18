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
        rounded-[20px] shrink-0 bg-[#ff5d39] cursor-pointer select-none outline-none
        transition-transform duration-75 hover:translate-y-[3px] active:translate-y-[5px]"
    >
      <div aria-hidden="true" className="absolute border-[#ff390d] border-[0.835px] border-solid inset-0 pointer-events-none rounded-[20px] transition-[box-shadow] duration-75 shadow-[0px_5px_0px_0px_#c24226] group-hover:shadow-[0px_2px_0px_0px_#c24226] group-active:shadow-none" />
      <p className={`font-['Roboto_Condensed:Bold',sans-serif] font-semibold leading-[1.2] text-[#f4f5fc] whitespace-nowrap ${isMobile ? "text-[20px]" : "text-[26px]"}`}>{label}</p>
    </button>
  );
}

function SecondaryButton({ label, onClick }: { label: string; onClick: () => void }) {
  return (
    <button
      onClick={() => { onClick(); playClick(false); }}
      className="group relative flex h-[59px] items-center justify-center px-[40px]
        rounded-[20px] shrink-0 bg-[#3d484e] cursor-pointer select-none outline-none
        transition-transform duration-75 hover:translate-y-[3px] active:translate-y-[5px]"
    >
      <div aria-hidden="true" className="absolute inset-0 pointer-events-none rounded-[20px] border border-[#57646a] border-solid transition-[box-shadow] duration-75 shadow-[0px_5px_0px_0px_black] group-hover:shadow-[0px_2px_0px_0px_black] group-active:shadow-none" />
      <p className="font-['Roboto_Condensed:Bold',sans-serif] font-semibold leading-[22.955px] text-[#c8ccd4] text-[26px] whitespace-nowrap">{label}</p>
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
              <h1 className={`font-['Roboto_Condensed:Bold',sans-serif] font-semibold text-[#cdf6db] leading-[1.2] whitespace-nowrap ${isMobile ? "text-[28px]" : "text-[48px]"}`}>
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

            <OrangeButton label="Продолжить" onClick={onContinue} isMobile={isMobile} />
          </>
        ) : (
          /* ── STATE B: FAILED ────────────────────────────────────────────── */
          <>
            <div className="flex flex-col items-center gap-[16px]">
              <h1 className={`font-['Roboto_Condensed:Bold',sans-serif] font-semibold text-[#ffbaaa] leading-[1.2] whitespace-nowrap ${isMobile ? "text-[28px]" : "text-[48px]"}`}>
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
                <p className={`font-['Roboto_Condensed:Bold',sans-serif] font-semibold text-[#798589] leading-[1.2] whitespace-nowrap ${isMobile ? "text-[20px]" : "text-[28px]"}`}>
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