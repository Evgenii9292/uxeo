import { useState, useEffect } from "react";
import { useNavigate } from "react-router";
import svgPaths from "../../imports/svg-0jdjpvfhdv";
import { projectId, publicAnonKey } from "../../../utils/supabase/info";
import { useAuth } from "../context/AuthContext";
import PageTransition from "../components/PageTransition";

export const EMAIL_KEY = "uxeo-user-email";

// ─── Logo (same as WelcomePage) ───────────────────────────────────────────────

function LogoContainer() {
  return (
    <div className="flex gap-[12.755px] items-start w-[125px]">
      <div className="h-[31.164px] relative shrink-0 w-[21.385px]">
        <svg className="absolute block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 21.3845 31.1638">
          <path d={svgPaths.p1c223610} fill="url(#paint0_linear_email_flame)" id="Vector" />
          <defs>
            <linearGradient gradientUnits="userSpaceOnUse" id="paint0_linear_email_flame" x1="9" x2="-7" y1="13.3574" y2="30.8574">
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

// ─── Bell icon ────────────────────────────────────────────────────────────────

function BellIcon() {
  return (
    <svg width="56" height="56" viewBox="0 0 24 24" fill="none">
      <path
        d="M12 22c1.1 0 2-.9 2-2h-4c0 1.1.9 2 2 2zm6-6v-5c0-3.07-1.63-5.64-4.5-6.32V4c0-.83-.67-1.5-1.5-1.5s-1.5.67-1.5 1.5v.68C7.64 5.36 6 7.92 6 11v5l-2 2v1h16v-1l-2-2z"
        fill="#ff5d39"
      />
    </svg>
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
        <p className="font-['Roboto_Condensed:Bold',sans-serif] font-bold leading-[22.955px] relative shrink-0 text-[26px] text-[rgba(247,248,252,0.9)] whitespace-nowrap">
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

            {/* Bell icon */}
            <BellIcon />

            {/* Text */}
            <div className="flex flex-col gap-[16px] items-start w-full">
              <p className="font-['Roboto_Condensed:Bold',sans-serif] font-bold leading-[37px] text-[32px] text-[rgba(244,245,252,0.9)]">
                Узнайте первым о проверке
              </p>
              <p className="font-['Roboto_Condensed:Regular',sans-serif] font-normal leading-[24px] text-[#e0e2e8] text-[18px]">
                Пришлём email, когда преподаватель проверит вашу домашку. Никакого спама.
              </p>
            </div>

            {/* Email input */}
            <div className="flex flex-col gap-[8px] w-full">
              <input
                type="email"
                value={email}
                onChange={(e) => { setEmail(e.target.value); setError(""); }}
                onKeyDown={(e) => e.key === "Enter" && handleSave()}
                placeholder="ваш@email.com"
                autoFocus
                className="
                  w-full h-[59px] rounded-[15px] px-[20px]
                  bg-[rgba(255,255,255,0.06)] border border-[rgba(244,245,252,0.12)]
                  font-['Roboto_Condensed:Regular',sans-serif] font-normal text-[20px] text-[#f4f5fc]
                  placeholder-[#798589]
                  outline-none
                  focus:border-[#ff5d39]
                  transition-colors duration-150
                "
              />
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
    </PageTransition>
  );
}
