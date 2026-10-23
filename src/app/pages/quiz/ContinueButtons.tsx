import { RaisedButton } from "../../components/RaisedButton";
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

export function ContinueDisabled({ fullWidth, label = "Продолжить" }: { fullWidth?: boolean; label?: string }) {
  return (
    <div className={`bg-[#333d41] content-stretch flex h-[56px] items-center justify-center px-[25px] relative rounded-[15px] shadow-[0px_5px_0px_0px_#212226] shrink-0 ${fullWidth ? "w-full" : ""}`}>
      <p
        translate="no"
        className="font-medium leading-[22.955px] relative shrink-0 text-[#465256] text-[22px] whitespace-nowrap"
        style={{ fontFamily: '"Roboto Condensed", sans-serif', WebkitFontSmoothing: "antialiased" }}
      >
        {label}
      </p>
    </div>
  );
}

export function ContinueActive({ onClick, fullWidth, label = "Продолжить" }: { onClick: () => void; fullWidth?: boolean; label?: string }) {
  return (
    <RaisedButton onClick={() => { onClick(); playClickSound(); }} tone="orange" className={`h-[56px] ${fullWidth ? "w-full" : ""}`} translate="no">
      <p
        translate="no"
        className="font-medium leading-[22.955px] text-[#f4f5fc] text-[22px] whitespace-nowrap"
        style={{ fontFamily: '"Roboto Condensed", sans-serif', WebkitFontSmoothing: "antialiased" }}
      >
        {label}
      </p>
    </RaisedButton>
  );
}

export function ContinueCorrect({ onClick, fullWidth, label = "Продолжить" }: { onClick: () => void; fullWidth?: boolean; label?: string }) {
  return (
    <RaisedButton onClick={() => { onClick(); playClickSound(); }} tone="green" className={`h-[56px] ${fullWidth ? "w-full" : ""}`} translate="no">
      <p
        translate="no"
        className="font-medium leading-[22.955px] text-[#f4f5fc] text-[22px] whitespace-nowrap"
        style={{ fontFamily: '"Roboto Condensed", sans-serif', WebkitFontSmoothing: "antialiased" }}
      >
        {label}
      </p>
    </RaisedButton>
  );
}
