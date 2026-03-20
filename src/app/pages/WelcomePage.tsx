import { useNavigate } from "react-router";
import svgPaths from "../../imports/svg-0jdjpvfhdv";

// ─── UXEO Logo (exact from Figma) ────────────────────────────────────────────
function LogoContainer() {
  return (
    <div className="flex gap-[12.755px] items-start w-[125px]">
      <div className="h-[31.164px] relative shrink-0 w-[21.385px]">
        <svg className="absolute block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 21.3845 31.1638">
          <path d={svgPaths.p1c223610} fill="url(#paint0_linear_welcome_flame)" id="Vector" />
          <defs>
            <linearGradient gradientUnits="userSpaceOnUse" id="paint0_linear_welcome_flame" x1="9" x2="-7" y1="13.3574" y2="30.8574">
              <stop stopColor="#FF6B21" />
              <stop offset="1" stopColor="#994014" />
            </linearGradient>
          </defs>
        </svg>
      </div>
      <p className="font-['Roboto_Condensed:Bold',sans-serif] font-bold leading-[27.5px] relative shrink-0 text-[#f4f5fc] text-[32px] w-[91.837px]">UXEO</p>
    </div>
  );
}

// ─── Character illustration (exact from Figma ProfileIcon) ───────────────────
function ProfileIcon() {
  return (
    null
  );
}

// ─── Party-popper icon (exact from Figma) ────────────────────────────────────
function FreeIconPartyPopper() {
  return (
    <div className="relative shrink-0 size-[27px]">
      <svg className="absolute block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 27 27">
        <g clipPath="url(#clip0_welcome_party)">
          <path d={svgPaths.p2f718f80} fill="#FDC70E" id="Vector" />
          <path d={svgPaths.p38d83c00} fill="#D39518" id="Vector_2" />
          <path d={svgPaths.p12327780} fill="#3B84ED" id="Vector_3" />
          <path d={svgPaths.p496da80}  fill="#D3374E" id="Vector_4" />
          <path d={svgPaths.pf9d400}   fill="#3B84ED" id="Vector_5" />
          <path d={svgPaths.p202ea40}  fill="#00D043" id="Vector_6" />
          <path d={svgPaths.p14081df8} fill="#D3374E" id="Vector_7" />
          <path d={svgPaths.p2be8c880} fill="#00D043" id="Vector_8" />
          <path d={svgPaths.p3113880}  fill="#3B84ED" id="Vector_9" />
          <path d={svgPaths.p3e04e680} fill="#00D043" id="Vector_10" />
          <path d={svgPaths.p14cf800}  fill="#D3374E" id="Vector_11" />
          <path d={svgPaths.p303da80}  fill="#D3374E" id="Vector_12" />
          <path d={svgPaths.pdd5a900}  fill="#FDC70E" id="Vector_13" />
          <g id="Group">
            <path d={svgPaths.p286a4bf0} fill="#D3374E" id="Vector_14" />
            <path d={svgPaths.p3ab0eb80} fill="#D3374E" id="Vector_15" />
          </g>
        </g>
        <defs>
          <clipPath id="clip0_welcome_party">
            <rect fill="white" height="27" width="27" />
          </clipPath>
        </defs>
      </svg>
    </div>
  );
}

// ─── Orange primary button with press effect ─────────────────────────────────
function PrimaryButton({ onClick }: { onClick: () => void }) {
  return (
    <button
      onClick={onClick}
      className="
        group relative h-[59px] rounded-[15px] shrink-0 w-full
        cursor-pointer select-none outline-none
        transition-transform duration-75
        hover:translate-y-[3px]
        active:translate-y-[5px]
      "
    >
      <div className="bg-[#ff5d39] content-stretch flex items-center justify-center px-[25.835px] py-[0.835px] relative rounded-[15px] size-full">
        <div aria-hidden="true" className="absolute border-[#ff390d] border-[0.835px] border-solid inset-0 pointer-events-none rounded-[15px] transition-[box-shadow] duration-75 shadow-[0px_5px_0px_0px_#c24226] group-hover:shadow-[0px_2px_0px_0px_#c24226] group-active:shadow-[0px_0px_0px_0px_#c24226]" />
        <p className="font-['Roboto_Condensed:Bold',sans-serif] font-bold leading-[22.955px] relative shrink-0 text-[26px] text-[rgba(247,248,252,0.9)] whitespace-nowrap">
          Начать обучение
        </p>
      </div>
    </button>
  );
}

// ─── Dark secondary button with press effect ─────────────────────────────────
function SecondaryButton({ onClick }: { onClick: () => void }) {
  return (
    <button
      onClick={onClick}
      className="relative bg-[#343e42] h-[59px] rounded-[15px] shrink-0 w-full cursor-pointer select-none outline-none transition-[transform,box-shadow] duration-75 shadow-[0px_5px_0px_0px_rgba(0,0,0,0.3)] hover:translate-y-[2px] hover:shadow-[0px_3px_0px_0px_rgba(0,0,0,0.3)] active:translate-y-[5px] active:shadow-none mx-[0px] mt-[8px] mb-[0px]"
    >
      <div className="flex items-center justify-center size-full m-[0px]">
        <p className="font-['Roboto_Condensed:Bold',sans-serif] font-bold leading-[22.955px] relative shrink-0 text-[26px] text-[rgba(244,245,252,0.9)] whitespace-nowrap">
          У меня уже есть аккаунт
        </p>
      </div>
    </button>
  );
}

// ─── Page ─────────────────────────────────────────────────────────────────────

// Мягкий UI-клик в стиле Brilliant — короткий тёплый «поп»
let _audioCtx: AudioContext | null = null;

function playClick() {
  try {
    if (!_audioCtx || _audioCtx.state === "closed") {
      _audioCtx = new AudioContext();
    }
    const ctx = _audioCtx;

    const schedule = () => {
      const t = ctx.currentTime;
      const osc = ctx.createOscillator();
      osc.type = "sine";
      osc.frequency.setValueAtTime(620, t);
      osc.frequency.exponentialRampToValueAtTime(300, t + 0.03);
      const gain = ctx.createGain();
      gain.gain.setValueAtTime(0.18, t);
      gain.gain.exponentialRampToValueAtTime(0.001, t + 0.04);
      osc.connect(gain);
      gain.connect(ctx.destination);
      osc.start(t);
      osc.stop(t + 0.04);
    };

    if (ctx.state === "suspended") {
      ctx.resume().then(schedule);
    } else {
      schedule();
    }
  } catch (_) {}
}

export default function WelcomePage() {
  const navigate = useNavigate();
  const goToMain = () => navigate("/");
  const goToLevel = () => navigate("/level");

  return (
    <div
      className="relative min-h-screen w-full flex flex-col overflow-hidden"
      style={{ backgroundImage: "linear-gradient(165.05deg, #282F33 14.367%, rgb(46, 57, 62) 147.74%)" }}
    >
      {/* Logo */}
      <div className="flex justify-center pt-[31px]">
        <LogoContainer />
      </div>

      {/* Main content — centred vertically in remaining space */}
      <div className="flex-1 flex items-center justify-center px-4">
        <div className="flex flex-col gap-[36px] items-center w-full max-w-[374px]">

          {/* Headline + subtitle */}
          <div className="content-stretch flex flex-col gap-[25px] items-start justify-center relative shrink-0 w-full">
            <p className="font-['Roboto_Condensed:Bold',sans-serif] font-bold leading-[37px] min-w-full relative shrink-0 text-[32px] text-[rgba(244,245,252,0.9)] w-[min-content]">
              Освойте веб-дизайн через игру и практику
            </p>
            <div className="content-stretch flex gap-[17px] items-start relative shrink-0 w-[364px]">
              <FreeIconPartyPopper />
              <p className="font-['Roboto_Condensed:Regular',sans-serif] font-normal leading-[22px] relative shrink-0 text-[#e0e2e8] text-[18px] w-[312px]">
                Решайте реальные задачи интерфейсов и закрепляйте знания практикой.
              </p>
            </div>
          </div>

          {/* Buttons */}
          <div className="content-stretch flex flex-col gap-[12.521px] items-start justify-center relative shrink-0 w-full p-[0px]">
            <div className="w-full">
              <PrimaryButton onClick={() => { playClick(); goToLevel(); }} />
            </div>
            <div className="w-full">
              <SecondaryButton onClick={() => { playClick(); goToMain(); }} />
            </div>
          </div>
        </div>
      </div>

      {/* Character illustration peeking from bottom */}
      <div className="flex justify-center pointer-events-none">
        <div className="-scale-y-100 flex-none rotate-180">
          <ProfileIcon />
        </div>
      </div>

      {/* Report error */}
      <p className="absolute bottom-[28px] left-[28px] font-['Roboto_Condensed:Medium',sans-serif] font-medium leading-[20px] text-[#777982] text-[16px] whitespace-nowrap cursor-pointer hover:text-[#a0a3ab] transition-colors duration-150">
        Сообщить об ошибке
      </p>
    </div>
  );
}