import { useNavigate } from "react-router";
import { useState, useEffect } from "react";
import svgPaths from "../../imports/svg-0jdjpvfhdv";
import { FlagReportButton } from "./quiz/FlagReportButton";
import { useAuth } from "../context/AuthContext";

// ─── Logo ─────────────────────────────────────────────────────────────────────
function LogoContainer() {
  return (
    <svg width="174" height="42" viewBox="0 0 435 105" fill="none" xmlns="http://www.w3.org/2000/svg">
      <path d="M398.649 4.0002L121.664 4.00026C98.664 4.00025 96.432 29.5002 96.432 29.5002L96.3512 21.8111C96.2475 11.9443 88.2403 4.00025 78.3729 4.00025L28.1462 4.00025C19.8619 4.00025 13.1641 10.716 13.1641 19.0002L13.1641 67.0004C13.1641 75.2847 19.8798 82.0004 28.1641 82.0004L78.1641 82.0003C88.1052 82.0003 96.1641 73.9414 96.1641 64.0003L96.1641 55.5002C96.1641 55.5002 98.9057 82.0003 121.664 82.0003L391.535 81.4874C398.496 81.4742 404.391 76.348 405.369 69.4557L412.397 19.9685C413.594 11.5381 407.164 4.0002 398.649 4.0002Z" fill="#354146"/>
      <path d="M51.0341 21.5259C47.5055 18.7401 43.3164 16.5303 38.706 15.0227C30.9469 12.4854 24.1641 19.3569 24.1641 27.5203L24.1641 57.9579C24.1641 66.1213 30.9469 72.9928 38.706 70.4555C43.3164 68.9478 47.5055 66.7381 51.0341 63.9523C54.5627 61.1665 57.3618 57.8594 59.2715 54.2196C61.1812 50.5798 62.1641 46.6788 62.1641 42.7391C62.1641 38.7994 61.1812 34.8984 59.2715 31.2586C57.3618 27.6188 54.5628 24.3117 51.0341 21.5259Z" fill="#64B6FF"/>
      <path d="M58.1641 21.9994C61.5998 19.1207 66.5157 16.6567 71.0048 15.0988C78.5291 12.4875 85.1641 19.1957 85.1641 27.1602L85.1641 58.3343C85.1641 66.2898 78.5464 72.9883 71.0048 70.4555C66.5157 68.9478 62.4369 66.7381 59.0011 63.9523C55.5653 61.1665 52.8399 57.8594 50.9805 54.2196C49.1211 50.5798 48.1641 46.6787 48.1641 42.7391C48.6641 32.9994 54.7283 24.878 58.1641 21.9994Z" fill="#FF6B21"/>
      <mask id="mask0_logo_welcome" style={{maskType:"alpha"}} maskUnits="userSpaceOnUse" x="48" y="25" width="15" height="36">
        <path d="M60.9934 35.0182C60.2898 32.5703 59.2586 30.3462 57.9586 28.4726C57.0916 27.2232 56.1164 26.146 55.0591 25.2663C45.5591 38.2392 46.0591 49.7392 55.0591 60.2121C56.1164 59.3324 57.0916 58.2552 57.9586 57.0058C59.2586 55.1322 60.2898 52.9081 60.9934 50.4602C61.697 48.0123 62.0591 45.3887 62.0591 42.7392C62.0591 40.0897 61.697 37.4661 60.9934 35.0182Z" fill="#D9D9D9"/>
      </mask>
      <g mask="url(#mask0_logo_welcome)">
        <path d="M24.1641 27.5203C24.1641 19.3569 30.9469 12.4854 38.706 15.0227C43.3164 16.5303 47.5055 18.7401 51.0341 21.5259C54.5628 24.3117 57.3618 27.6188 59.2715 31.2586C61.1812 34.8984 62.1641 38.7994 62.1641 42.7391L24.1641 42.7391L24.1641 27.5203Z" fill="#FEBC4E"/>
        <path d="M24.1641 57.9579C24.1641 66.1213 30.9469 72.9928 38.706 70.4555C43.3164 68.9478 47.5055 66.7381 51.0341 63.9523C54.5627 61.1665 57.3618 57.8594 59.2715 54.2196C61.1812 50.5798 62.1641 46.6788 62.1641 42.7391L24.1641 42.7391L24.1641 57.9579Z" fill="#FEBC4E"/>
      </g>
      <path d="M135.155 51.0383L144.306 51.0383C144.129 55.0214 143.323 58.4121 141.886 61.2103C140.449 63.9833 138.382 66.1009 135.684 67.5631C133.012 69.0252 129.747 69.7563 125.89 69.7563C122.966 69.7563 120.344 69.2269 118.025 68.1681C115.731 67.1093 113.777 65.5841 112.164 63.5926C110.55 61.5758 109.315 59.1179 108.458 56.2189C107.626 53.3198 107.21 50.03 107.21 46.3494L107.21 36.5934C107.21 32.9128 107.639 29.623 108.496 26.7239C109.378 23.8248 110.639 21.3669 112.277 19.3502C113.916 17.3334 115.907 15.8083 118.252 14.7747C120.622 13.7159 123.294 13.1865 126.268 13.1865C130.075 13.1865 133.277 13.9176 135.873 15.3797C138.47 16.8419 140.474 18.9846 141.886 21.8081C143.297 24.6315 144.117 28.0726 144.344 32.1313L135.193 32.1313C135.066 29.3835 134.688 27.1903 134.058 25.5517C133.453 23.8879 132.52 22.6904 131.26 21.9594C130.025 21.2283 128.361 20.8627 126.268 20.8627C124.529 20.8627 123.029 21.1905 121.769 21.8459C120.533 22.5014 119.512 23.4845 118.706 24.7954C117.924 26.0811 117.332 27.7071 116.928 29.6734C116.55 31.6145 116.361 33.896 116.361 36.5178L116.361 46.3494C116.361 48.8703 116.525 51.1014 116.853 53.0425C117.18 54.9836 117.71 56.6348 118.441 57.9961C119.172 59.3322 120.143 60.3532 121.353 61.0591C122.563 61.7397 124.075 62.08 125.89 62.08C128.058 62.08 129.785 61.7397 131.071 61.0591C132.382 60.3784 133.352 59.2314 133.982 57.618C134.613 56.0046 135.003 53.8114 135.155 51.0383ZM156.233 13.9428L156.233 69L147.044 69L147.044 13.9428L156.233 13.9428ZM183.724 13.9428L165.346 45.4419L153.624 45.4419L152.263 36.9715L160.204 36.9715L172.531 13.9428L183.724 13.9428ZM174.157 69L160.468 43.9293L166.367 36.5178L185.161 69L174.157 69ZM193.799 52.2484L212.97 13.9428L221.857 13.9428L221.857 69L212.857 69L212.857 30.9213L193.799 69L184.837 69L184.837 13.9428L193.799 13.9428L193.799 52.2484ZM257.456 13.9428L257.456 21.6568L235.788 21.6568L235.788 13.9428L257.456 13.9428ZM264.603 13.9428L264.603 69L255.452 69L255.452 13.9428L264.603 13.9428ZM234.011 13.9428L243.124 13.9428L242.066 41.358C241.94 45.3662 241.65 48.8956 241.196 51.9459C240.767 54.971 240.175 57.5676 239.419 59.7356C238.662 61.9036 237.692 63.6682 236.507 65.0295C235.347 66.3908 233.961 67.3992 232.347 68.0547C230.759 68.6849 228.919 69 226.827 69L224.558 69L224.558 61.3238L225.881 61.1725C226.94 61.0717 227.86 60.7566 228.642 60.2272C229.448 59.6978 230.116 58.8911 230.646 57.8071C231.2 56.7231 231.654 55.3365 232.007 53.6475C232.36 51.9333 232.637 49.8535 232.839 47.4082C233.041 44.9629 233.179 42.1016 233.255 38.8244L234.011 13.9428ZM300.24 13.9428L300.24 21.6569L278.572 21.6569L278.572 13.9428L300.24 13.9428ZM307.387 13.9428L307.387 69L298.236 69L298.236 13.9428L307.387 13.9428ZM276.795 13.9428L285.908 13.9428L284.849 41.358C284.723 45.3662 284.433 48.8956 283.98 51.9459C283.551 54.971 282.959 57.5676 282.202 59.7356C281.446 61.9036 280.476 63.6682 279.291 65.0295C278.131 66.3908 276.745 67.3992 275.131 68.0547C273.543 68.6849 271.703 69 269.61 69L267.342 69L267.342 61.3238L268.665 61.1725C269.724 61.0717 270.644 60.7566 271.425 60.2272C272.232 59.6978 272.9 58.8911 273.43 57.8071C273.984 56.7231 274.438 55.3365 274.791 53.6475C275.144 51.9333 275.421 49.8535 275.623 47.4082C275.824 44.9629 275.963 42.1016 276.039 38.8244L276.795 13.9428ZM325.44 49.2989L342.192 13.9428L352.364 13.9428L329.675 58.9793C328.969 60.4414 328.2 61.828 327.369 63.1388C326.562 64.4497 325.629 65.622 324.57 66.6555C323.537 67.6639 322.339 68.458 320.978 69.0378C319.642 69.6176 318.079 69.9076 316.289 69.9076C315.709 69.9328 315.117 69.9202 314.512 69.8697C313.907 69.8193 313.302 69.7563 312.697 69.6807L313.453 61.9666C313.882 62.0422 314.31 62.1053 314.739 62.1557C315.167 62.2061 315.608 62.2313 316.062 62.2313C317.197 62.2313 318.129 61.9666 318.86 61.4372C319.617 60.8826 320.234 60.1894 320.713 59.3574C321.192 58.5003 321.646 57.6054 322.075 56.6726L325.44 49.2989ZM324.873 13.9428L329.713 44.4587L330.394 54.2904L323.663 54.5551L315.495 13.9428L324.873 13.9428ZM357.333 13.9428L365.01 13.9428L369.623 55.992L388.757 13.9428L397 13.9428L370.795 69L364.442 69L357.333 13.9428ZM353.59 13.9428L361.153 13.9428L356.01 51.4165L352.985 69L344.023 69L353.59 13.9428ZM392.879 13.9428L400.479 13.9428L390.912 69L381.95 69L385.202 50.5846L392.879 13.9428Z" fill="white"/>
    </svg>
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
        <p className="font-['Roboto_Condensed:Medium',sans-serif] font-medium leading-[22.955px] relative shrink-0 text-[24px] md:text-[26px] text-[rgba(247,248,252,0.9)] whitespace-nowrap">
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
        <p className="font-['Roboto_Condensed:Medium',sans-serif] font-medium leading-[22.955px] relative shrink-0 text-[24px] md:text-[26px] text-[rgba(244,245,252,0.9)] whitespace-nowrap">
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
      const isMobile = typeof window !== "undefined" && window.matchMedia("(pointer: coarse)").matches;
      const peak = isMobile ? 0.08 : 0.18;
      const osc = ctx.createOscillator();
      osc.type = "sine";
      osc.frequency.setValueAtTime(620, t);
      osc.frequency.exponentialRampToValueAtTime(300, t + 0.03);
      const gain = ctx.createGain();
      gain.gain.setValueAtTime(0.0001, t);
      gain.gain.linearRampToValueAtTime(peak, t + 0.01);
      gain.gain.exponentialRampToValueAtTime(0.0001, t + 0.05);
      osc.connect(gain);
      gain.connect(ctx.destination);
      osc.start(t);
      osc.stop(t + 0.055);
    };

    if (ctx.state === "suspended") {
      ctx.resume().then(schedule);
    } else {
      schedule();
    }
  } catch (_) {}
}

// ─── Google icon ──────────────────────────────────────────────────────────────
function GoogleIcon() {
  return (
    <svg width="20" height="20" viewBox="0 0 24 24" fill="none">
      <path d="M22.56 12.25c0-.78-.07-1.53-.2-2.25H12v4.26h5.92c-.26 1.37-1.04 2.53-2.21 3.31v2.77h3.57c2.08-1.92 3.28-4.74 3.28-8.09z" fill="#4285F4"/>
      <path d="M12 23c2.97 0 5.46-.98 7.28-2.66l-3.57-2.77c-.98.66-2.23 1.06-3.71 1.06-2.86 0-5.29-1.93-6.16-4.53H2.18v2.84C3.99 20.53 7.7 23 12 23z" fill="#34A853"/>
      <path d="M5.84 14.09c-.22-.66-.35-1.36-.35-2.09s.13-1.43.35-2.09V7.07H2.18C1.43 8.55 1 10.22 1 12s.43 3.45 1.18 4.93l3.66-2.84z" fill="#FBBC05"/>
      <path d="M12 5.38c1.62 0 3.06.56 4.21 1.64l3.15-3.15C17.45 2.09 14.97 1 12 1 7.7 1 3.99 3.47 2.18 7.07l3.66 2.84c.87-2.6 3.3-4.53 6.16-4.53z" fill="#EA4335"/>
    </svg>
  );
}

// Detect PWA standalone mode (Home Screen app)
function useIsStandalone() {
  return (
    (typeof window !== "undefined" && (window.navigator as any).standalone === true) ||
    (typeof window !== "undefined" && window.matchMedia("(display-mode: standalone)").matches)
  );
}

export default function WelcomePage() {
  const navigate = useNavigate();
  const { signInWithGoogle, signInWithEmail, isAuthenticated, loading } = useAuth();
  const [email, setEmail] = useState("");
  const [emailSent, setEmailSent] = useState(false);
  const [emailError, setEmailError] = useState("");
  const [emailLoading, setEmailLoading] = useState(false);
  const [showEmailInput, setShowEmailInput] = useState(false);
  const isStandalone = useIsStandalone();

  // Если уже авторизован — отправить дальше (HomeRedirect разберётся)
  useEffect(() => {
    if (!loading && isAuthenticated) {
      navigate("/", { replace: true });
    }
  }, [loading, isAuthenticated, navigate]);

  const goToLevel = () => navigate("/level");

  const handleEmailSubmit = async () => {
    if (!email.trim() || !email.includes("@")) {
      setEmailError("Введите корректный email");
      return;
    }
    setEmailLoading(true);
    setEmailError("");
    const { error } = await signInWithEmail(email.trim());
    setEmailLoading(false);
    if (error) {
      setEmailError("Ошибка. Попробуйте ещё раз.");
    } else {
      setEmailSent(true);
    }
  };

  return (
    <div
      className="relative w-full flex items-center justify-center px-4 overflow-hidden"
      style={{
        minHeight: "100dvh",
        paddingTop: "max(32px, env(safe-area-inset-top, 32px))",
        paddingBottom: "max(32px, env(safe-area-inset-bottom, 32px))",
        backgroundImage: "radial-gradient(ellipse at 50% 20%, rgba(255,93,57,0.09) 0%, transparent 60%), linear-gradient(165.05deg, #282F33 14.367%, rgb(46, 57, 62) 147.74%)",
      }}
    >
      {/* Single centred block: logo + headline + buttons */}
      <div className="flex flex-col gap-[36px] items-center w-full max-w-[374px]">

        {/* Logo */}
        <LogoContainer />

        {/* Headline + subtitle */}
        <div className="flex flex-col gap-[25px] items-start w-full">
          <p className="font-['Roboto_Condensed:Medium',sans-serif] font-medium leading-[37px] w-full text-[32px] text-[rgba(244,245,252,0.9)]">
            Освойте веб-дизайн через игру и практику
          </p>
          <div className="flex gap-[17px] items-start w-full">
            <FreeIconPartyPopper />
            <p className="font-['Roboto_Condensed:Regular',sans-serif] font-normal leading-[22px] text-[#798589] text-[18px] flex-1">
              Решайте реальные задачи интерфейсов и закрепляйте знания практикой.
            </p>
          </div>
        </div>

        {/* Buttons */}
        <div className="flex flex-col gap-[17px] w-full">

            {/* Google sign-in — primary */}
            <button
              onClick={() => { playClick(); signInWithGoogle(); }}
              className="group relative w-full h-[59px] rounded-[15px] flex items-center justify-center gap-[10px] select-none cursor-pointer outline-none transition-transform duration-75 hover:translate-y-[3px] active:translate-y-[5px]"
              style={{ background: "#242B2E" }}
            >
              <div aria-hidden="true" className="absolute inset-0 pointer-events-none rounded-[15px] transition-[box-shadow] duration-75 shadow-[0px_5px_0px_0px_#1a2023] group-hover:shadow-[0px_2px_0px_0px_#1a2023] group-active:shadow-none" style={{ border: "1px solid rgba(72,83,87,0.6)" }} />
              <GoogleIcon />
              <span className="font-['Roboto_Condensed:Medium',sans-serif] font-medium text-[#f4f5fc] text-[22px]">
                Войти через Google
              </span>
            </button>

            {/* Email sign-in button (same style) */}
            {!showEmailInput && !emailSent && (
              <button
                onClick={() => setShowEmailInput(true)}
                className="group relative w-full h-[59px] rounded-[15px] flex items-center justify-center gap-[10px] select-none cursor-pointer outline-none transition-transform duration-75 hover:translate-y-[3px] active:translate-y-[5px]"
                style={{ background: "#242B2E" }}
              >
                <div aria-hidden="true" className="absolute inset-0 pointer-events-none rounded-[15px] transition-[box-shadow] duration-75 shadow-[0px_5px_0px_0px_#1a2023] group-hover:shadow-[0px_2px_0px_0px_#1a2023] group-active:shadow-none" style={{ border: "1px solid rgba(72,83,87,0.6)" }} />
                <svg width="20" height="20" viewBox="0 0 24 24" fill="none">
                  <path d="M20 4H4c-1.1 0-2 .9-2 2v12c0 1.1.9 2 2 2h16c1.1 0 2-.9 2-2V6c0-1.1-.9-2-2-2zm0 4l-8 5-8-5V6l8 5 8-5v2z" fill="#798589"/>
                </svg>
                <span className="font-['Roboto_Condensed:Medium',sans-serif] font-medium text-[#f4f5fc] text-[22px]">
                  Войти по email
                </span>
              </button>
            )}

            {showEmailInput && !emailSent && (
              <div className="flex flex-col gap-[8px]">
                {/* Input — homework style */}
                <div
                  className="relative w-full h-[59px] rounded-[15px] flex items-center px-[20px]"
                  style={{ backgroundImage: "linear-gradient(171.89deg, rgb(44,53,56) 2.42%, rgb(56,67,72) 98.53%, rgb(44,53,56) 116.25%)" }}
                >
                  <div aria-hidden="true" className="absolute inset-0 pointer-events-none rounded-[15px]" style={{ border: emailError ? "2px solid rgba(255,77,77,0.6)" : "2px solid rgba(160,163,173,0.2)" }} />
                  <input
                    type="email"
                    value={email}
                    onChange={e => { setEmail(e.target.value); setEmailError(""); }}
                    onKeyDown={e => e.key === "Enter" && handleEmailSubmit()}
                    placeholder="example@mail.com"
                    name="email"
                    autoComplete="email"
                    autoFocus
                    className="bg-transparent flex-1 outline-none border-none font-['Roboto_Condensed:Regular',sans-serif] font-normal text-[18px] placeholder-[#798589]"
                    style={{ color: "rgba(244,245,252,0.9)", caretColor: "rgba(244,245,252,0.8)" }}
                  />
                </div>
                {emailError && (
                  <p className="text-[#ff6b6b] text-[13px] font-['Roboto_Condensed:Regular',sans-serif]">{emailError}</p>
                )}
                {/* Submit button — same height as other buttons */}
                <button
                  onClick={handleEmailSubmit}
                  disabled={emailLoading}
                  className="group relative w-full h-[59px] rounded-[15px] flex items-center justify-center select-none cursor-pointer outline-none transition-transform duration-75 hover:translate-y-[3px] active:translate-y-[5px]"
                  style={{ background: "#FF5D39", opacity: emailLoading ? 0.7 : 1 }}
                >
                  <div aria-hidden="true" className="absolute inset-0 pointer-events-none rounded-[15px] transition-[box-shadow] duration-75 shadow-[0px_5px_0px_0px_#c24226] group-hover:shadow-[0px_2px_0px_0px_#c24226] group-active:shadow-none" style={{ border: "1px solid #ff390d" }} />
                  <span className="font-['Roboto_Condensed:Medium',sans-serif] font-medium text-[rgba(247,248,252,0.9)] text-[22px]">
                    {emailLoading ? "Отправляем…" : "Отправить ссылку"}
                  </span>
                </button>
              </div>
            )}

            {emailSent && (
              <div
                className="rounded-[15px] px-[20px] py-[16px]"
                style={{ background: "rgba(36,43,46,0.9)", border: "1px solid rgba(72,83,87,0.4)" }}
              >
                <p className="font-['Roboto_Condensed:Medium',sans-serif] font-medium text-[#f4f5fc] text-[16px]">
                  Письмо отправлено! ✉️
                </p>
                <p className="font-['Roboto_Condensed:Regular',sans-serif] text-[#798589] text-[13px] mt-[6px] leading-[1.5]">
                  Открой ссылку в письме <span style={{ color: "#ff8a6b" }}>на этом устройстве и в этом же браузере</span> — только так она сработает.
                </p>
              </div>
            )}

            {/* Removed "Начать без входа" — all users should register for cross-device sync */}
            {false && (
              <button
                onClick={() => { playClick(); goToLevel(); }}
                className="hidden"
              >
                Начать без входа
              </button>
            )}
          </div>

          {/* PWA standalone: subtle hint below buttons */}
          {isStandalone && (
            <p className="text-center font-['Roboto_Condensed:Regular',sans-serif] text-[11px] leading-[1.5]" style={{ color: "#3d4a4e" }}>
              Войдите один раз — приложение запомнит сессию
            </p>
          )}
        </div>

      {/* Report error */}
      <div className="absolute left-[28px]" style={{ bottom: "calc(28px + env(safe-area-inset-bottom, 0px))" }}>
        <FlagReportButton />
      </div>
    </div>
  );


}
