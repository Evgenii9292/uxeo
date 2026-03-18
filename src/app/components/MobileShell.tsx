/**
 * MobileShell — mobile layout wrapper.
 * Header styled to match TheoryMobileLayout (glassmorphism, Figma back-chevron, XP/streak stats).
 */

import React, { useRef, useState, useCallback } from "react";
import { useNavigate } from "react-router";
import { Flame, Zap } from "lucide-react";
import svgPaths from "../../imports/svg-ns2c3tgkyt";
import { useUserSafe } from "../context/UserContext";
import BottomTabBar from "./BottomTabBar";
import { MobileFloatingCircles } from "./MobileFloatingCircles";

interface MobileShellProps {
  children: React.ReactNode;
  title: string;
  showBack?: boolean;
  backPath?: string;
  /** If true, children manage their own scroll (theory, quiz full-screen pages) */
  noScroll?: boolean;
  /** Custom content for the right side of the header */
  headerRight?: React.ReactNode;
  /** Sticky content rendered above BottomTabBar (e.g. Continue button) */
  stickyBottom?: React.ReactNode;
}

// ── Back chevron (same Figma SVG used in Theory header) ─────────────────────
function BackChevron() {
  return (
    <div className="h-[16px] relative shrink-0 w-[8px]">
      <div className="absolute inset-[-5%_-10%_-5%_-1.72%]">
        <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 11.1716 22">
          <path d={svgPaths.p23f95480} stroke="#798589" strokeLinecap="round" strokeWidth="3" />
        </svg>
      </div>
    </div>
  );
}

// ── Header ──────────────────────────────────────────────────────────────────
export function MobileHeader({
  title,
  showBack,
  onBack,
  xp,
  streak,
  headerRight,
}: {
  title: string;
  showBack?: boolean;
  onBack?: () => void;
  xp: number;
  streak: number;
  headerRight?: React.ReactNode;
}) {
  return (
    <div
      className="flex-none flex flex-col z-50 relative"
      style={{
        background: "rgba(45,54,58,0.85)",
        backdropFilter: "blur(14px)",
        WebkitBackdropFilter: "blur(14px)",
      }}
    >
      <div
        className="flex items-center justify-between px-[24px]"
        style={{ height: 50 }}
      >
        {/* Left: back button + title */}
        <button
          className="flex gap-[16px] items-center active:scale-90 transition-transform duration-75"
          onClick={showBack ? onBack : undefined}
          style={{ cursor: showBack ? "pointer" : "default" }}
        >
          {showBack && <BackChevron />}
          <p
            className="font-['Roboto_Condensed:Medium',sans-serif] font-medium leading-[23.989px] text-[#f4f5fc] text-[22px] whitespace-nowrap"
            style={{ margin: 0 }}
          >
            {title}
          </p>
        </button>

        {/* Right: stats or custom */}
        <div className="flex gap-[20px] items-center">
          {headerRight ?? (
            <>
              {/* Streak */}
              <div className="flex gap-[3px] items-center">
                <Flame size={20} color="#FFB121" fill="#FFB121" />
                <span
                  className="font-['Roboto_Condensed:ExtraBold',sans-serif] font-extrabold text-[20px]"
                  style={{
                    backgroundImage: "linear-gradient(180deg, #ffb121 0%, #bb8116 100%)",
                    WebkitBackgroundClip: "text",
                    WebkitTextFillColor: "transparent",
                  }}
                >
                  {streak}
                </span>
              </div>
              {/* XP */}
              <div className="flex gap-[4px] items-center">
                <Zap size={20} color="#FF6B21" fill="#FF6B21" strokeWidth={0} />
                <span
                  className="font-['Roboto_Condensed:ExtraBold',sans-serif] font-extrabold text-[20px]"
                  style={{
                    backgroundImage: "linear-gradient(195.05deg, #FF6B21 48.665%, #994014 112.02%)",
                    WebkitBackgroundClip: "text",
                    WebkitTextFillColor: "transparent",
                  }}
                >
                  {xp}
                </span>
              </div>
            </>
          )}
        </div>
      </div>

      {/* Bottom divider */}
      <div style={{ height: 1, background: "rgba(86,101,107,0.35)", flexShrink: 0 }} />
    </div>
  );
}

// ── MobileShell ──────────────────────────────────────────────────────────────
export default function MobileShell({
  children,
  title,
  showBack = false,
  backPath = "/",
  noScroll = false,
  headerRight,
  stickyBottom,
}: MobileShellProps) {
  const navigate = useNavigate();
  const userData = useUserSafe();
  const xp = userData?.xp ?? 0;
  const streak = userData?.streak ?? 0;

  // ── Hide-on-scroll state ───────────────────────────────────────────────────
  const [tabBarVisible, setTabBarVisible] = useState(true);
  const lastScrollY = useRef(0);

  const handleScroll = useCallback((e: React.UIEvent<HTMLDivElement>) => {
    const el = e.currentTarget;
    const currentY = el.scrollTop;
    const maxScroll = el.scrollHeight - el.clientHeight;
    // Don't trigger hide/show if we're bouncing at very top or bottom
    if (currentY <= 0 || currentY >= maxScroll - 4) return;
    const delta = currentY - lastScrollY.current;
    if (Math.abs(delta) > 6) {
      setTabBarVisible(delta < 0);
      lastScrollY.current = currentY;
    }
  }, []);

  // Heights for fixed elements
  const TAB_H = tabBarVisible ? 52 : 0;
  const STICKY_H = stickyBottom ? 72 : 0;
  // Total bottom padding for scroll area = tab + sticky + small gap
  const scrollPadBottom = TAB_H + STICKY_H + 8;

  return (
    <div
      className="flex flex-col size-full"
      style={{ background: "#2D363A" }}
    >
      <MobileHeader
        title={title}
        showBack={showBack}
        onBack={() => navigate(backPath)}
        xp={xp}
        streak={streak}
        headerRight={headerRight}
      />

      {/* Scrollable content */}
      {noScroll ? (
        <div className="flex-1 overflow-hidden min-h-0">
          {children}
        </div>
      ) : (
        <div
          className="flex-1 overflow-y-auto overflow-x-hidden scrollbar-hide px-[16px] py-[16px]"
          style={{ paddingBottom: scrollPadBottom }}
          onScroll={handleScroll}
        >
          {children}
        </div>
      )}

      {/* Sticky bottom — FIXED, above tab bar, no background */}
      {stickyBottom && (
        <div
          className="fixed left-0 right-0 z-30 px-[16px] transition-[bottom] duration-300"
          style={{
            bottom: tabBarVisible ? 52 : 0,
            paddingBottom: "max(10px, env(safe-area-inset-bottom, 10px))",
            paddingTop: 10,
          }}
        >
          {stickyBottom}
        </div>
      )}

      {/* Tab bar — FIXED at bottom, slides out instead of collapsing height */}
      <div
        className="fixed left-0 right-0 z-20 transition-transform duration-300"
        style={{
          bottom: 0,
          transform: tabBarVisible ? "translateY(0)" : "translateY(100%)",
        }}
      >
        <BottomTabBar />
      </div>

      {/* Floating action circles */}
      <MobileFloatingCircles
        tabBarVisible={tabBarVisible}
        hasStickyButton={!!stickyBottom}
      />
    </div>
  );
}