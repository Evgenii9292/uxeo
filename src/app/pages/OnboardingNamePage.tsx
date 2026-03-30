import { useState } from "react";
import { useNavigate } from "react-router";
import { CloseButton } from "./quiz/CloseButton";
import { FlagReportButton } from "./quiz/FlagReportButton";
import { useUserSafe } from "../context/UserContext";

const PROFILE_NAME_KEY = "uxeo-profile-name";

export default function OnboardingNamePage() {
  const navigate = useNavigate();
  const userCtx = useUserSafe();
  const [name, setName] = useState("");

  const handleContinue = () => {
    const trimmed = name.trim();
    if (!trimmed) return;
    localStorage.setItem(PROFILE_NAME_KEY, trimmed);
    userCtx?.setUserName(trimmed);
    navigate("/quiz");
  };

  return (
    <div
      className="relative min-h-screen w-full flex flex-col overflow-hidden"
      style={{
        minHeight: "100dvh",
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
              Как тебя зовут?
            </p>
            <p className="font-['Roboto_Condensed:Regular',sans-serif] font-normal leading-[22px] text-[#798589] text-[18px]">
              Будем обращаться к тебе по имени
            </p>
          </div>

          {/* Input */}
          <input
            value={name}
            onChange={e => setName(e.target.value)}
            onKeyDown={e => e.key === "Enter" && handleContinue()}
            placeholder="Твоё имя"
            autoFocus
            className="w-full outline-none text-center"
            style={{
              background: "linear-gradient(172.454deg, rgb(44, 53, 56) 2.4%, rgb(56, 67, 72) 98.5%, rgb(44, 53, 56) 116.25%)",
              border: name.trim() ? "2px solid #4a7c5e" : "2px solid transparent",
              borderRadius: 24,
              height: 80,
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
            className="w-full rounded-[20px] transition-all duration-75"
            style={{
              height: 80,
              background: name.trim()
                ? "linear-gradient(172.454deg, #FF6B21 2.4%, #FF4500 98.5%)"
                : "linear-gradient(172.454deg, rgb(44, 53, 56) 2.4%, rgb(56, 67, 72) 98.5%)",
              boxShadow: name.trim() ? "0 6px 0 #b83a1f" : "0 6px 0 #1d2c30",
              cursor: name.trim() ? "pointer" : "not-allowed",
              fontSize: 26,
              fontFamily: "Roboto Condensed, sans-serif",
              fontWeight: 500,
              color: name.trim() ? "#f4f5fc" : "#455054",
              border: "none",
            }}
          >
            Продолжить
          </button>
        </div>
      </div>
    </div>
  );
}
