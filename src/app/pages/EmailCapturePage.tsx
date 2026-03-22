import { useState, useEffect } from "react";
import { useNavigate } from "react-router";
import svgNotif from "../../imports/svg-r42rgjsncr";
import { projectId, publicAnonKey } from "../../../utils/supabase/info";
import { useAuth } from "../context/AuthContext";
import PageTransition from "../components/PageTransition";

export const EMAIL_KEY = "uxeo-user-email";

// ─── Logo ─────────────────────────────────────────────────────────────────────

function LogoContainer() {
  return (
    <svg width="150" height="45" viewBox="0 0 150 55" fill="none" xmlns="http://www.w3.org/2000/svg">
      <path d="M11.5162 23.0303C12.3172 23.0303 13.0427 22.8716 13.6925 22.5542C14.3575 22.2217 14.9016 21.7079 15.3247 21.0127C15.7479 20.3023 15.9897 19.3804 16.0502 18.2469H19.8134C19.7529 19.8792 19.3373 21.3149 18.5665 22.5542C17.8109 23.7784 16.8134 24.7381 15.5741 25.4333C14.35 26.1133 12.9973 26.4534 11.5162 26.4534C9.92935 26.4534 8.54649 26.1965 7.36767 25.6826C6.20395 25.1688 5.23671 24.4282 4.46594 23.461C3.71028 22.4786 3.14354 21.2922 2.76571 19.9018C2.38788 18.4963 2.19897 16.9019 2.19897 15.1185V12.3528C2.19897 10.5695 2.38788 8.98258 2.76571 7.59217C3.14354 6.18664 3.71028 5.00026 4.46594 4.03301C5.23671 3.05066 6.20395 2.30256 7.36767 1.78871C8.54649 1.27486 9.92935 1.01794 11.5162 1.01794C13.1787 1.01794 14.6144 1.3731 15.8235 2.08342C17.0477 2.77862 17.9998 3.7912 18.6799 5.12116C19.3751 6.43601 19.7529 8.03045 19.8134 9.90448H16.0502C15.9897 8.69543 15.7706 7.6904 15.3928 6.8894C15.0149 6.07329 14.5011 5.46877 13.8512 5.07582C13.2013 4.66777 12.423 4.46374 11.5162 4.46374C10.4583 4.46374 9.58175 4.65265 8.88654 5.03048C8.20645 5.3932 7.66993 5.92216 7.27699 6.61737C6.88405 7.31257 6.60445 8.1438 6.43821 9.11104C6.28708 10.0783 6.21151 11.1589 6.21151 12.3528V15.1185C6.21151 16.3125 6.28708 17.4006 6.43821 18.383C6.60445 19.3502 6.87649 20.1814 7.25432 20.8766C7.64726 21.5718 8.19134 22.1084 8.88654 22.4862C9.58175 22.8489 10.4583 23.0303 11.5162 23.0303ZM25.8359 1.47133V26H21.8234V1.47133H25.8359ZM39.3244 1.47133L29.4631 15.5266H24.4984L23.8637 11.8541H27.8309L34.5184 1.47133H39.3244ZM34.8811 26L27.6948 14.8918L30.2565 11.8541L39.9138 26H34.8811ZM45.1203 19.3578L54.0068 1.47133H58.0194V26H54.0068V8.11357L45.1203 26H41.1304V1.47133H45.1203V19.3578ZM75.1274 1.47133V4.9398H65.3568V1.47133H75.1274ZM78.7093 1.47133V26H74.7194V1.47133H78.7093ZM64.4046 1.47133H68.4172L67.8504 13.3049C67.7598 15.1336 67.6086 16.7507 67.3971 18.1563C67.2006 19.5467 66.921 20.7406 66.5583 21.7381C66.2107 22.7356 65.7724 23.5517 65.2434 24.1864C64.7296 24.8061 64.1099 25.267 63.3845 25.5693C62.6742 25.8564 61.8505 26 60.9135 26H59.712V22.3048L60.5054 22.2368C61.0344 22.1915 61.4878 22.0404 61.8656 21.7834C62.2586 21.5265 62.576 21.1487 62.8178 20.6499C63.0747 20.1361 63.2787 19.4787 63.4298 18.6777C63.5961 17.8767 63.7246 16.9245 63.8152 15.8213C63.9059 14.718 63.9739 13.4334 64.0193 11.9674L64.4046 1.47133ZM95.84 1.47133V4.9398H86.0693V1.47133H95.84ZM99.4218 1.47133V26H95.4319V1.47133H99.4218ZM85.1172 1.47133H89.1297L88.563 13.3049C88.4723 15.1336 88.3212 16.7507 88.1096 18.1563C87.9131 19.5467 87.6335 20.7406 87.2708 21.7381C86.9232 22.7356 86.4849 23.5517 85.956 24.1864C85.4421 24.8061 84.8225 25.267 84.0971 25.5693C83.3867 25.8564 82.5631 26 81.6261 26H80.4246V22.3048L81.218 22.2368C81.747 22.1915 82.2004 22.0404 82.5782 21.7834C82.9711 21.5265 83.2885 21.1487 83.5303 20.6499C83.7872 20.1361 83.9913 19.4787 84.1424 18.6777C84.3086 17.8767 84.4371 16.9245 84.5278 15.8213C84.6185 14.718 84.6865 13.4334 84.7318 11.9674L85.1172 1.47133Z" fill="#E0E2E8"/>
      <path d="M109.85 2.01017C107.522 6.6174 98.9338 31.1234 107.687 26.4487C110.907 24.7289 113.928 21.8662 116.24 19.0702C117.264 17.8311 117.859 16.8466 118.45 15.4342C119.04 14.0218 119.607 12.2114 120.063 10.4481C120.942 7.04667 122.078 1.73656 121.935 2.01017C121.701 2.45629 120.434 6.97585 119.294 10.2566C113.307 27.4877 94.3437 57.2363 91.3441 52.7363C88.7873 48.9006 101.029 40.7363 109.85 32.3559C112.365 29.9668 121.999 21.1843 123.003 19.8525C125.277 16.8361 122.844 26.2983 123.006 27.35C123.314 29.3393 127.833 22.1397 128.617 20.9606C131.195 17.0786 133.104 11.6943 134.637 7.27784C135.822 3.86173 135.836 0.664476 134.637 3.94812C133.724 6.44905 125.872 23.8948 133.026 21.4095C139.756 19.0718 144.686 10.6417 146 3.94812C147.062 -1.46088 141.793 15.3065 140.844 20.7363C140.056 25.2424 144 26 148.5 22.5" stroke="#E0E2E8" strokeWidth="3" strokeLinecap="round"/>
    </svg>
  );
}

// ─── Notification bell icon (from Sidebar/tab bar) scaled up ─────────────────

function NotifIcon() {
  const S = 3.2; // scale factor — base icon is 20×20
  return (
    <div style={{ width: 20 * S, height: 20 * S, position: "relative" }}>
      <div style={{ transform: `scale(${S})`, transformOrigin: "top left", position: "absolute", width: 20, height: 20 }}>
        {/* Clapper left */}
        <div className="absolute inset-[68.75%_44.84%_0_23.91%]">
          <svg className="absolute block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 6.25 6.25">
            <path d={svgNotif.p2ba58980} fill="#FFD845" />
          </svg>
        </div>
        {/* Clapper right */}
        <div className="absolute inset-[68.75%_44.84%_0_39.53%]">
          <svg className="absolute block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 3.125 6.25">
            <path d={svgNotif.p26e5800} fill="#FF9D21" />
          </svg>
        </div>
        {/* Bell body left */}
        <div className="absolute inset-[0_20.04%_12.7%_-0.9%]">
          <svg className="absolute block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 16.1719 17.4609">
            <defs>
              <linearGradient gradientUnits="userSpaceOnUse" id="notif_bell_email" x1="8.08594" x2="8.08594" y1="0" y2="17.4609">
                <stop stopColor="#FFB121" />
                <stop offset="1" stopColor="#FF6B21" />
              </linearGradient>
            </defs>
            <path d={svgNotif.p444ce00} fill="url(#notif_bell_email)" />
          </svg>
        </div>
        {/* Bell body right */}
        <div className="absolute inset-[0_20.04%_12.7%_39.53%]">
          <svg className="absolute block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 8.08594 17.4609">
            <path d={svgNotif.p1ca20b00} fill="#FFD845" />
          </svg>
        </div>
      </div>
    </div>
  );
}

// ─── Primary button (same as WelcomePage) ─────────────────────────────────────

function PrimaryButton({ onClick, label, loading }: { onClick: () => void; label: string; loading?: boolean }) {
  return (
    <button
      onClick={onClick}
      disabled={loading}
      className="
        group relative h-[59px] rounded-[15px] shrink-0 w-full
        cursor-pointer select-none outline-none
        transition-transform duration-75
        hover:translate-y-[3px]
        active:translate-y-[5px]
        disabled:opacity-60 disabled:cursor-default disabled:hover:translate-y-0
      "
    >
      <div className="bg-[#ff5d39] content-stretch flex items-center justify-center px-[25.835px] py-[0.835px] relative rounded-[15px] size-full">
        <div aria-hidden="true" className="absolute border-[#ff390d] border-[0.835px] border-solid inset-0 pointer-events-none rounded-[15px] transition-[box-shadow] duration-75 shadow-[0px_5px_0px_0px_#c24226] group-hover:shadow-[0px_2px_0px_0px_#c24226] group-active:shadow-[0px_0px_0px_0px_#c24226]" />
        <p className="font-['Roboto_Condensed:Medium',sans-serif] font-medium leading-[22.955px] relative shrink-0 text-[26px] text-[rgba(247,248,252,0.9)] whitespace-nowrap">
          {loading ? "Сохраняем..." : label}
        </p>
      </div>
    </button>
  );
}

// ─── Skip button ──────────────────────────────────────────────────────────────

function SkipButton({ onClick }: { onClick: () => void }) {
  return (
    <button
      onClick={onClick}
      className="relative h-[50px] shrink-0 w-full cursor-pointer select-none outline-none"
    >
      <p className="font-['Roboto_Condensed:Medium',sans-serif] font-medium leading-[22px] text-[#798589] text-[20px] hover:text-[#a0a3ab] transition-colors duration-150">
        Пропустить
      </p>
    </button>
  );
}

// ─── Page ─────────────────────────────────────────────────────────────────────

export default function EmailCapturePage() {
  const navigate = useNavigate();
  const { userId } = useAuth();
  const [email, setEmail]     = useState("");
  const [error, setError]     = useState("");
  const [loading, setLoading] = useState(false);

  // If email already saved — skip this screen
  useEffect(() => {
    if (localStorage.getItem(EMAIL_KEY)) {
      navigate("/", { replace: true });
    }
  }, [navigate]);

  const isValidEmail = (v: string) => /^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(v.trim());

  const handleSave = async () => {
    if (!isValidEmail(email)) {
      setError("Введите корректный email");
      return;
    }
    setError("");
    setLoading(true);

    // Persist locally
    localStorage.setItem(EMAIL_KEY, email.trim().toLowerCase());

    // Best-effort: send to backend
    try {
      await fetch(
        `https://${projectId}.supabase.co/functions/v1/make-server-d627d1b0/user/email`,
        {
          method: "POST",
          headers: {
            Authorization: `Bearer ${publicAnonKey}`,
            "Content-Type": "application/json",
          },
          body: JSON.stringify({ userId, email: email.trim().toLowerCase() }),
        }
      );
    } catch {
      // silent — we already saved locally
    }

    navigate("/");
  };

  const handleSkip = () => navigate("/");

  return (
    <PageTransition>
      <div
        className="relative min-h-screen w-full flex flex-col overflow-hidden"
        style={{ backgroundImage: "linear-gradient(165.05deg, #282F33 14.367%, rgb(46, 57, 62) 147.74%)" }}
      >
        {/* Logo */}
        <div className="flex justify-center pt-[31px]">
          <LogoContainer />
        </div>

        {/* Main content */}
        <div className="flex-1 flex items-center justify-center px-4">
          <div className="flex flex-col gap-[32px] items-center w-full max-w-[374px]">

            {/* Notification icon */}
            <NotifIcon />

            {/* Text */}
            <div className="flex flex-col gap-[16px] items-center w-full text-center">
              <p className="font-['Roboto_Condensed:Medium',sans-serif] font-medium leading-[37px] text-[32px] text-[rgba(244,245,252,0.9)]">
                Узнайте о проверке ДЗ
              </p>
              <p className="font-['Roboto_Condensed:Regular',sans-serif] font-normal leading-[24px] text-[#798589] text-[18px]">
                Пришлём email, когда преподаватель проверит вашу домашку. Никакого спама.
              </p>
            </div>

            {/* Input + Buttons (20px gap between them) */}
            <div className="flex flex-col gap-[20px] w-full">
              {/* Email input */}
              <div className="flex flex-col gap-[8px] w-full">
                <div
                  className="relative px-[20px] rounded-[15px] h-[56px] flex items-center w-full"
                  style={{ backgroundImage: "linear-gradient(171.89deg, rgb(44, 53, 56) 2.4187%, rgb(56, 67, 72) 98.527%, rgb(44, 53, 56) 116.25%)" }}
                >
                  <div aria-hidden="true" className="absolute border-[2px] border-[rgba(160,163,173,0.2)] border-solid inset-[-2px] pointer-events-none rounded-[15px]" />
                  <input
                    type="email"
                    autoComplete="email"
                    name="email"
                    value={email}
                    onChange={(e) => { setEmail(e.target.value); setError(""); }}
                    onKeyDown={(e) => e.key === "Enter" && handleSave()}
                    placeholder="ваш@email.com"
                    autoFocus
                    className="bg-transparent flex-1 min-w-0 outline-none border-none font-['Roboto_Condensed:Regular',sans-serif] font-normal text-[18px] placeholder-[#798589]"
                    style={{ color: "rgba(244,245,252,0.8)", caretColor: "rgba(244,245,252,0.8)" }}
                  />
                </div>
                {error && (
                  <p className="font-['Roboto_Condensed:Regular',sans-serif] text-[#ff5d39] text-[16px] pl-[4px]">
                    {error}
                  </p>
                )}
              </div>

              {/* Buttons */}
              <div className="flex flex-col gap-[4px] w-full items-center">
                <PrimaryButton onClick={handleSave} label="Сохранить и продолжить" loading={loading} />
                <SkipButton onClick={handleSkip} />
              </div>
            </div>

          </div>
        </div>
      </div>
    </PageTransition>
  );
}
