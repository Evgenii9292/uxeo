/** Continue button variants for LessonQuizPage */

function playClickSound() {
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
    <div className={`bg-[#333d41] content-stretch flex h-[56px] items-center justify-center px-[25px] relative rounded-[15px] shadow-[0px_5px_0px_0px_#212226] shrink-0 ${fullWidth ? "w-full" : ""}`}>
      <p
        translate="no"
        className="font-medium leading-[22.955px] relative shrink-0 text-[#465256] text-[22px] whitespace-nowrap"
        style={{ fontFamily: '"Roboto Condensed", sans-serif', WebkitFontSmoothing: "antialiased" }}
      >
        Продолжить
      </p>
    </div>
  );
}

export function ContinueActive({ onClick, fullWidth }: { onClick: () => void; fullWidth?: boolean }) {
  return (
    <button
      onClick={() => { onClick(); playClickSound(); }}
      className={`group relative flex h-[56px] items-center justify-center px-[25.835px] py-[0.835px] rounded-[15px] shrink-0 bg-[#ff5d39] cursor-pointer select-none outline-none transition-transform duration-75 hover:translate-y-[3px] active:translate-y-[5px] ${fullWidth ? "w-full" : ""}`}
      translate="no"
    >
      <div aria-hidden="true" className="absolute border-[#ff390d] border-[0.835px] border-solid inset-0 pointer-events-none rounded-[15px] transition-[box-shadow] duration-75 shadow-[0px_5px_0px_0px_#c24226] group-hover:shadow-[0px_2px_0px_0px_#c24226] group-active:shadow-none" />
      <p
        translate="no"
        className="font-medium leading-[22.955px] text-[#f4f5fc] text-[22px] whitespace-nowrap"
        style={{ fontFamily: '"Roboto Condensed", sans-serif', WebkitFontSmoothing: "antialiased" }}
      >
        Продолжить
      </p>
    </button>
  );
}

export function ContinueCorrect({ onClick, fullWidth }: { onClick: () => void; fullWidth?: boolean }) {
  return (
    <button
      onClick={() => { onClick(); playClickSound(); }}
      className={`group relative flex h-[56px] items-center justify-center px-[25.831px] py-[0.831px] rounded-[15px] shrink-0 bg-[#00bb3c] cursor-pointer select-none outline-none transition-transform duration-75 hover:translate-y-[3px] active:translate-y-[5px] ${fullWidth ? "w-full" : ""}`}
      translate="no"
    >
      <div aria-hidden="true" className="absolute border-[#00b93c] border-[0.831px] border-solid inset-0 pointer-events-none rounded-[15px] transition-[box-shadow] duration-75 shadow-[0px_5px_0px_0px_#668562] group-hover:shadow-[0px_2px_0px_0px_#668562] group-active:shadow-none" />
      <p
        translate="no"
        className="font-medium leading-[22.955px] text-[#f4f5fc] text-[22px] whitespace-nowrap"
        style={{ fontFamily: '"Roboto Condensed", sans-serif', WebkitFontSmoothing: "antialiased" }}
      >
        Продолжить
      </p>
    </button>
  );
}
