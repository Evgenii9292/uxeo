import { useState } from "react";
import { useNavigate } from "react-router";
import { CloseButton } from "./quiz/CloseButton";
import { FlagReportButton } from "./quiz/FlagReportButton";
import { useUserSafe } from "../context/UserContext";
import { useAuthSafe } from "../context/AuthContext";

const PROFILE_NAME_KEY = "uxeo-profile-name";

export default function OnboardingNamePage() {
  const navigate = useNavigate();
  const userCtx = useUserSafe();
  const auth = useAuthSafe();
  const [name, setName] = useState("");

  const handleContinue = () => {
    const trimmed = name.trim();
    if (!trimmed) return;
    // Demo identity must not overwrite the signed-in profile's legacy key.
    if (!auth?.isDemo) localStorage.setItem(PROFILE_NAME_KEY, trimmed);
    userCtx?.setUserName(trimmed);
    navigate("/quiz");
  };

  return (
    <div
      className="relative min-h-screen w-full flex flex-col overflow-hidden"
      style={{
        minHeight: "100%",
        paddingBottom: "max(10px, env(safe-area-inset-bottom, 10px))",
        backgroundImage: "linear-gradient(165.05deg, #282F33 14.367%, rgb(46, 57, 62) 147.74%)",
      }}
    >
      <div className="flex items-center justify-between px-[22px] py-[15px]">
        <CloseButton onClick={() => navigate("/onboarding-time")} />
        <FlagReportButton context="OnboardingNamePage" />
      </div>

      <div className="flex-1 flex flex-col items-center justify-center px-[24px] pb-[40px]">
        <div className="flex flex-col items-center gap-[40px] w-full max-w-[526px]">
          {/* Emoji */}
          <div style={{ fontSize: 56 }}>👋</div>

          <div className="flex flex-col items-center gap-[12px] text-center">
            <p className="font-['Roboto_Condensed:Medium',sans-serif] font-medium leading-[34px] text-[#f4f5fc] text-[32px]">
              Как к вам обращаться?
            </p>
            <p className="font-['Roboto_Condensed:Regular',sans-serif] font-normal leading-[22px] text-[#798589] text-[18px]">
              Будем обращаться к вам по имени
            </p>
          </div>

          {/* Input */}
          <input
            value={name}
            onChange={e => setName(e.target.value)}
            onKeyDown={e => e.key === "Enter" && handleContinue()}
            placeholder="Ваше имя"
            autoFocus
            aria-label="Ваше имя"
            autoComplete="given-name"
            className="w-full outline-none text-center placeholder:text-[#798589] focus-visible:ring-2 focus-visible:ring-[#798589]"
            style={{
              background: "linear-gradient(171.89deg, rgb(44,53,56) 2.42%, rgb(56,67,72) 98.53%, rgb(44,53,56) 116.25%)",
              borderWidth: 2,
              borderStyle: "solid",
              borderColor: name.trim() ? "#57686F" : "rgba(160,163,173,0.2)",
              borderRadius: 15,
              height: 64,
              fontSize: 26,
              fontFamily: "Roboto Condensed, sans-serif",
              fontWeight: 500,
              color: "#f4f5fc",
              padding: "0 32px",
              transition: "border-color 0.2s",
            }}
          />

          {/* Continue button */}
          <button
            onClick={handleContinue}
            disabled={!name.trim()}
            className="w-full rounded-[15px] transition-[transform,box-shadow] duration-75 enabled:shadow-[0_5px_0_#c54a0a] enabled:hover:translate-y-[2px] enabled:hover:shadow-[0_3px_0_#c54a0a] enabled:active:translate-y-[5px] enabled:active:shadow-none disabled:shadow-[0_5px_0_#1d2c30] focus-visible:outline-2 focus-visible:outline-offset-8 focus-visible:outline-[#b5c0c5]"
            style={{
              height: 80,
              background: name.trim()
                ? "linear-gradient(172.454deg, #FF6B21 2.4%, #FF4500 98.5%)"
                : "linear-gradient(172.454deg, rgb(44, 53, 56) 2.4%, rgb(56, 67, 72) 98.5%)",
              cursor: name.trim() ? "pointer" : "not-allowed",
              fontSize: 26,
              fontFamily: "Roboto Condensed, sans-serif",
              fontWeight: 500,
              color: name.trim() ? "#f4f5fc" : "#455054",
              border: "none",
            }}
          >
            Перейти к заданию
          </button>
        </div>
      </div>
    </div>
  );
}
