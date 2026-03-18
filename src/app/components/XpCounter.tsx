import { useEffect, useRef, useState } from "react";
import { useUserSafe } from "../context/UserContext";
import svgPaths from "../../imports/svg-pt1cecsedx";

function ZapIcon({ isActive }: { isActive: boolean }) {
  return (
    <div className="relative shrink-0 size-[24px]">
      <svg className="absolute block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 24 24">
        <path
          d={svgPaths.p3b6e5180}
          fill={isActive ? "url(#paint0_xp_counter)" : "#798589"}
        />
        {isActive && (
          <defs>
            <linearGradient gradientUnits="userSpaceOnUse" id="paint0_xp_counter" x1="12" x2="12" y1="2" y2="22">
              <stop stopColor="#FF6B21" />
              <stop offset="1" stopColor="#C15C2A" />
            </linearGradient>
          </defs>
        )}
      </svg>
    </div>
  );
}

/**
 * Standalone XP counter — same visual style as the one in AppHeader.
 * Used on full-screen pages (e.g. onboarding quiz) that don't have the full header.
 */
export default function XpCounter() {
  const userData = useUserSafe();
  const xp = userData?.xp ?? 0;

  const prevXpRef = useRef(0);
  const isFirstRenderRef = useRef(true);
  const [activating, setActivating] = useState(false);

  useEffect(() => {
    if (isFirstRenderRef.current) {
      isFirstRenderRef.current = false;
      prevXpRef.current = xp;
      return;
    }
    if (xp !== prevXpRef.current) {
      setActivating(true);
      setTimeout(() => setActivating(false), 180);
    }
    prevXpRef.current = xp;
  }, [xp]);

  return (
    <div
      className="flex gap-[5px] items-center transition-all duration-[180ms]"
      style={{
        transform: activating ? "scale(0.92)" : "scale(1)",
        opacity: activating ? 0.6 : 1,
      }}
    >
      <ZapIcon isActive={xp > 0} />
      <p
        className="font-['Roboto_Condensed:ExtraBold',sans-serif] font-extrabold leading-[21px] relative shrink-0 text-[24px] whitespace-nowrap"
        style={{
          color: xp > 0 ? "#FF6B21" : "#798589",
          backgroundImage: xp > 0 ? "linear-gradient(to bottom, #FF6B21, #C15C2A)" : "none",
          backgroundClip: xp > 0 ? "text" : "unset",
          WebkitBackgroundClip: xp > 0 ? "text" : "unset",
          WebkitTextFillColor: xp > 0 ? "transparent" : "unset",
        }}
      >
        {xp}
      </p>
    </div>
  );
}
