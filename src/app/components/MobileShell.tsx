/**
 * MobileShell — mobile layout wrapper.
 * Header styled to match TheoryMobileLayout (glassmorphism, Figma back-chevron, XP/streak stats).
 */

import React, { useRef, useState, useCallback, useEffect } from "react";
import { useNavigate, useLocation } from "react-router";
import { motion } from "motion/react";
import { formatXp } from "../pages/LeaguePage";
import { APP_VERSION } from "../../version";
import svgPaths from "../../imports/svg-ns2c3tgkyt";
import { useUserSafe } from "../context/UserContext";
import BottomTabBar from "./BottomTabBar";
import { MobileFloatingCircles } from "./MobileFloatingCircles";
import { PWAInstallBanner } from "./PWAInstallBanner";

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
  /** Content rendered between the header and the scroll area (never scrolls) */
  stickyTop?: React.ReactNode;
  /** Stable route key for page-content transition */
  contentKey?: string;
  /** Keep bottom tab bar always visible on this screen */
  keepTabBarVisible?: boolean;
  /** Blur header background on this screen */
  blurHeader?: boolean;
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
  blurred = false,
}: {
  title: string;
  showBack?: boolean;
  onBack?: () => void;
  xp: number;
  streak: number;
  headerRight?: React.ReactNode;
  blurred?: boolean;
}) {
  return (
    <div
      className="flex-none flex flex-col z-[200] relative"
      style={{
        background: blurred ? "rgba(40,47,51,0.62)" : "#282F33",
        backdropFilter: blurred ? "blur(14px)" : "none",
        WebkitBackdropFilter: blurred ? "blur(14px)" : "none",
        borderBottom: blurred ? "1px solid rgba(87,100,106,0.28)" : "none",
      }}
    >
      <div
        className="flex items-center justify-between px-[16px]"
        style={{ height: 50, paddingTop: "env(safe-area-inset-top, 0px)", boxSizing: "content-box" }}
      >
        {/* Left: back button + title */}
        <div className="flex gap-[16px] items-center">
          {showBack && (
            <button
              className="active:scale-90 transition-transform duration-75 border-none bg-transparent outline-none p-[8px] -m-[8px]"
              onClick={onBack}
              style={{ touchAction: "manipulation", WebkitTapHighlightColor: "transparent", cursor: "pointer" }}
            >
              <BackChevron />
            </button>
          )}
          <p
            className="font-['Roboto_Condensed:Medium',sans-serif] font-medium leading-[23.989px] text-[#f4f5fc] text-[22px] truncate"
            style={{ margin: 0, maxWidth: "calc(100vw - 160px)" }}
          >
            {title}
          </p>
          <span style={{ fontSize: 10, color: "#3a4a52", fontFamily: "monospace", lineHeight: 1, marginLeft: 4, alignSelf: "flex-end", paddingBottom: 2 }}>
            v{APP_VERSION}
          </span>
        </div>

        {/* Right: stats or custom */}
        <div className="flex gap-[20px] items-center">
          {headerRight ?? (
            <>
              {/* Streak */}
              <div className="flex gap-[3px] items-center">
                <img src={streak > 0 ? "/fire-icon-active.png" : "/fire-icon-inactive.png"} width={20} height={22} style={{ objectFit: "contain" }} />
                <span
                  className="font-['Roboto_Condensed:Medium',sans-serif] font-medium text-[20px]"
                  style={streak > 0 ? {
                    backgroundImage: "linear-gradient(180deg, #ffb121 0%, #bb8116 100%)",
                    WebkitBackgroundClip: "text",
                    WebkitTextFillColor: "transparent",
                  } : { color: "#6b7280" }}
                >
                  {streak}
                </span>
              </div>
              {/* XP */}
              <div className="flex gap-[4px] items-center">
                <img src={xp > 0 ? "/zap-icon-active.png" : "/zap-icon-inactive.png"} width={20} height={20} style={{ objectFit: "contain" }} />
                <span
                  className="font-['Roboto_Condensed:Medium',sans-serif] font-medium text-[20px]"
                  style={xp > 0 ? {
                    backgroundImage: "linear-gradient(195.05deg, #FF6B21 48.665%, #994014 112.02%)",
                    WebkitBackgroundClip: "text",
                    WebkitTextFillColor: "transparent",
                  } : { color: "#6b7280" }}
                >
                  {formatXp(xp)}
                </span>
              </div>
            </>
          )}
        </div>
      </div>

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
  stickyTop,
  contentKey,
  keepTabBarVisible = false,
  blurHeader = false,
}: MobileShellProps) {
  const navigate = useNavigate();
  const location = useLocation();
  const userData = useUserSafe();
  const xp = userData?.xp ?? 0;
  const streak = userData?.streak ?? 0;

  // ── Swipe navigation ───────────────────────────────────────────────────────
  const TAB_PATHS = ["/lessons", "/notifications", "/challenges", "/league"];
  const touchStartX = useRef<number | null>(null);
  const touchStartY = useRef<number | null>(null);

  const handleTouchStart = useCallback((e: React.TouchEvent) => {
    touchStartX.current = e.touches[0].clientX;
    touchStartY.current = e.touches[0].clientY;
  }, []);

  const handleTouchEnd = useCallback((e: React.TouchEvent) => {
    if (touchStartX.current === null || touchStartY.current === null) return;
    const dx = e.changedTouches[0].clientX - touchStartX.current;
    const dy = e.changedTouches[0].clientY - touchStartY.current;
    touchStartX.current = null;
    touchStartY.current = null;

    // Only handle mostly-horizontal swipes (more horizontal than vertical)
    if (Math.abs(dx) < 60 || Math.abs(dx) < Math.abs(dy) * 1.5) return;

    if (showBack) {
      // Inner page: swipe right → go back
      if (dx > 0) navigate(backPath);
    } else {
      // Tab pages: swipe left/right → adjacent tab
      const currentIdx = TAB_PATHS.findIndex(p => location.pathname.startsWith(p));
      if (currentIdx === -1) return;
      if (dx < 0 && currentIdx < TAB_PATHS.length - 1) navigate(TAB_PATHS[currentIdx + 1]);
      if (dx > 0 && currentIdx > 0) navigate(TAB_PATHS[currentIdx - 1]);
    }
  }, [showBack, backPath, navigate, location.pathname]); // eslint-disable-line react-hooks/exhaustive-deps

  // ── Hide-on-scroll state ───────────────────────────────────────────────────
  const [tabBarVisible, setTabBarVisible] = useState(true);
  const [showBottomFade, setShowBottomFade] = useState(false);
  const lastScrollY = useRef(0);
  const scrollRef = useRef<HTMLDivElement | null>(null);

  const updateBottomFade = useCallback((el: HTMLDivElement | null) => {
    if (!el) return;
    const maxScroll = el.scrollHeight - el.clientHeight;
    setShowBottomFade(maxScroll > 6 && el.scrollTop < maxScroll - 8);
  }, []);

  const handleScroll = useCallback((e: React.UIEvent<HTMLDivElement>) => {
    const el = e.currentTarget;
    const currentY = el.scrollTop;
    const maxScroll = el.scrollHeight - el.clientHeight;
    updateBottomFade(el);
    if (keepTabBarVisible) return;
    // Don't trigger hide/show if we're bouncing at very top or bottom
    if (currentY <= 0 || currentY >= maxScroll - 4) return;
    const delta = currentY - lastScrollY.current;
    if (Math.abs(delta) > 6) {
      setTabBarVisible(delta < 0);
      lastScrollY.current = currentY;
    }
  }, [keepTabBarVisible, updateBottomFade]);

  // Heights for fixed elements
  const effectiveTabBarVisible = keepTabBarVisible ? true : tabBarVisible;
  const TAB_H = effectiveTabBarVisible ? 72 : 0;
  const STICKY_H = stickyBottom ? 72 : 0;
  // Total bottom padding for scroll area = tab + sticky + small gap
  const scrollPadBottom = TAB_H + STICKY_H + 8;
  const pageTransition = {
    initial: { opacity: 0, y: 10 },
    animate: { opacity: 1, y: 0 },
    transition: { duration: 0.2, ease: [0.22, 1, 0.36, 1] as const },
  };

  useEffect(() => {
    if (noScroll) return;
    const id = requestAnimationFrame(() => updateBottomFade(scrollRef.current));
    return () => cancelAnimationFrame(id);
  }, [children, contentKey, noScroll, stickyBottom, keepTabBarVisible, updateBottomFade]);

  return (
    <div
      className="flex flex-col size-full"
      style={{ background: "#282F33" }}
      onTouchStart={handleTouchStart}
      onTouchEnd={handleTouchEnd}
    >
      <MobileHeader
        title={title}
        showBack={showBack}
        onBack={() => navigate(backPath)}
        xp={xp}
        streak={streak}
        headerRight={headerRight}
        blurred={blurHeader}
      />

      {/* Sticky top bar — between header and scroll area */}
      {stickyTop && (
        <div className="flex-none px-[16px] pt-[12px] pb-[8px]" style={{ background: "#282F33" }}>
          {stickyTop}
        </div>
      )}

      {/* Scrollable content */}
      {noScroll ? (
        <motion.div
          key={contentKey}
          className="flex-1 overflow-hidden min-h-0"
          initial={pageTransition.initial}
          animate={pageTransition.animate}
          transition={pageTransition.transition}
        >
          {children}
        </motion.div>
      ) : (
        <motion.div
          key={contentKey}
          ref={scrollRef}
          className="flex-1 overflow-y-auto overflow-x-hidden scrollbar-hide px-[16px] py-[16px] isolate"
          style={{ paddingBottom: `calc(${scrollPadBottom}px + max(env(safe-area-inset-bottom, 0px), 20px))` }}
          onScroll={handleScroll}
          initial={pageTransition.initial}
          animate={pageTransition.animate}
          transition={pageTransition.transition}
        >
          {children}
        </motion.div>
      )}

      {/* bottom fade removed */}

      {/* Sticky bottom — FIXED, above tab bar, no background */}
      {stickyBottom && (
        <div
          className="fixed left-0 right-0 z-30 px-[16px] transition-[bottom] duration-300"
          style={{
            bottom: effectiveTabBarVisible
              ? "calc(67px + max(env(safe-area-inset-bottom, 0px), 20px))"
              : 0,
            paddingBottom: effectiveTabBarVisible
              ? 10
              : "max(10px, env(safe-area-inset-bottom, 10px))",
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
          transform: effectiveTabBarVisible ? "translateY(0)" : "translateY(100%)",
          background: "rgba(45,54,58,0.95)",
        }}
      >
        <BottomTabBar />
      </div>

      {/* PWA install banner — above tab bar */}
      <PWAInstallBanner tabBarBottom="calc(52px + env(safe-area-inset-bottom, 0px) + 15px)" />

      {/* Floating action circles */}
      <MobileFloatingCircles
        tabBarVisible={effectiveTabBarVisible}
        hasStickyButton={!!stickyBottom}
      />
    </div>
  );
}
