/**
 * Onboarding quiz UI components: continue buttons and feedback bars.
 * These are used by QuizPage (onboarding) and differ slightly from LessonQuizPage versions.
 */

import correctSvgPaths from "../../../imports/svg-1n8b0v1b3s";

function PartyPopperIcon() {
  return (
    <div className="relative shrink-0 size-[27px]">
      <svg className="absolute block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 27 27">
        <g clipPath="url(#clip_party_q)">
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
          <clipPath id="clip_party_q"><rect fill="white" height="27" width="27" /></clipPath>
        </defs>
      </svg>
    </div>
  );
}

function LightningIcon() {
  return (
    <div className="h-[16px] relative shrink-0 w-[14px]">
      <svg className="absolute block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 14 16">
        <path d={correctSvgPaths.p3fb52a80} fill="#00D043" />
      </svg>
    </div>
  );
}

// ── Continue button variants ───────────────────────────────────────────────────

function playClick() {
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
}

export function ContinueDisabled({ fullWidth }: { fullWidth?: boolean }) {
  return (
    <div className={`bg-[#333d41] flex h-[59px] items-center justify-center px-[20.775px] rounded-[15px] shadow-[0px_4.155px_0px_0px_#212226] ${fullWidth ? "w-full" : "w-[194.662px]"}`}>
      <p className="font-['Roboto_Condensed:Medium',sans-serif] font-medium leading-[22.852px] text-[#465256] text-[26px] whitespace-nowrap">Продолжить</p>
    </div>
  );
}

export function ContinueActive({ onClick, fullWidth }: { onClick: () => void; fullWidth?: boolean }) {
  return (
    <button
      onClick={() => { onClick(); playClick(); }}
      className={`group relative flex h-[59px] items-center justify-center px-[25.835px] py-[0.835px] rounded-[15px] shrink-0 bg-[#ff5d39] cursor-pointer select-none outline-none transition-transform duration-75 hover:translate-y-[3px] active:translate-y-[5px] ${fullWidth ? "w-full" : ""}`}
    >
      <div aria-hidden="true" className="absolute border-[#ff390d] border-[0.835px] border-solid inset-0 pointer-events-none rounded-[15px] transition-[box-shadow] duration-75 shadow-[0px_5px_0px_0px_#c24226] group-hover:shadow-[0px_2px_0px_0px_#c24226] group-active:shadow-none" />
      <p className="font-['Roboto_Condensed:Medium',sans-serif] font-medium leading-[22.955px] text-[#f4f5fc] text-[26px] whitespace-nowrap">Продолжить</p>
    </button>
  );
}

export function ContinueCorrect({ onClick, fullWidth }: { onClick: () => void; fullWidth?: boolean }) {
  return (
    <button
      onClick={() => { onClick(); playClick(); }}
      className={`group relative flex h-[59px] items-center justify-center px-[25.831px] py-[0.831px] rounded-[15px] shrink-0 bg-[#00bb3c] cursor-pointer select-none outline-none transition-transform duration-75 hover:translate-y-[3px] active:translate-y-[5px] ${fullWidth ? "w-full" : ""}`}
    >
      <div aria-hidden="true" className="absolute border-[#00b93c] border-[0.831px] border-solid inset-0 pointer-events-none rounded-[15px] transition-[box-shadow] duration-75 shadow-[0px_5px_0px_0px_#668562] group-hover:shadow-[0px_2px_0px_0px_#668562] group-active:shadow-none" />
      <p className="font-['Roboto_Condensed:Medium',sans-serif] font-medium leading-[22.955px] text-[#f4f5fc] text-[26px] whitespace-nowrap">Продолжить</p>
    </button>
  );
}

// ── Feedback bars ──────────────────────────────────────────────────────────────

export function CorrectFeedback({ showXp = true }: { showXp?: boolean }) {
  return (
    <div className="flex gap-[28px] items-center shrink-0 w-full">
      <div className="flex flex-col gap-[5px] items-end justify-end shrink-0">
        <div className="flex gap-[9px] items-end shrink-0">
          <PartyPopperIcon />
          <p className="font-['Roboto_Condensed:Medium',sans-serif] font-medium leading-[20.587px] text-[#cdf6db] text-[18px] whitespace-nowrap">Верно!</p>
        </div>
        {showXp && (
          <div className="flex items-center justify-between w-[47px]">
            <p className="font-['Roboto_Condensed:Medium',sans-serif] font-medium leading-[20.587px] text-[#00d043] text-[18px] whitespace-nowrap">+25</p>
            <LightningIcon />
          </div>
        )}
      </div>
      <p className="font-['Roboto_Condensed:Regular',sans-serif] font-normal leading-[1.2] text-[#f4f5fc] text-[18px] flex-1 min-w-0">
        Основная кнопка имеет высокий контраст и лучше выделяется, поэтому интерфейс читается быстрее.
      </p>
    </div>
  );
}

export function IncorrectFeedback() {
  return (
    <div className="flex gap-[28px] items-start shrink-0 w-full">
      <div className="flex gap-[10px] items-center shrink-0">
        <span className="text-[30px] leading-none">✊</span>
        <p className="font-['Roboto_Condensed:Medium',sans-serif] font-medium leading-[1.2] text-[#ffbaaa] text-[18px] whitespace-nowrap">
          Почти<br />получилось.
        </p>
      </div>
      <p className="font-['Roboto_Condensed:Regular',sans-serif] font-normal leading-[1.2] text-[#f4f5fc] text-[18px] flex-1 min-w-0">
        <span className="text-[#ffbaaa]">Верный ответ слева. </span>
        Основная кнопка имеет высокий контраст и лучше выделяется, поэтому интерфейс читается быстрее.
      </p>
    </div>
  );
}
