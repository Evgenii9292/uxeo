import { useCallback, useRef } from "react";
import { useLocation, useNavigate } from "react-router";
import { motion } from "motion/react";
import Sidebar from "./Sidebar";
import AppHeader from "./AppHeader";
import RightWidgets from "./RightWidgets";
import { useWindowWidth } from "../hooks/useWindowWidth";
import MobileShell from "./MobileShell";

// Full sidebar: left-[0] + w-[250px] = 250px right edge
const SIDEBAR_RIGHT_EDGE = 250;

// Compact sidebar: physical width only — equal spacing is handled by SIDE_PAD on both sides
const COMPACT_SIDEBAR_W = 84;

// Gap between content columns (center ↔ widgets)
const ZONE_GAP = 20;

// Outer horizontal padding — left/right edges of the content zone
const SIDE_PAD = 40;

// Maximum width of the content zone (right of sidebar) — locked at the 1440px viewport ideal
const MAX_CONTENT_ZONE = 1440 - SIDEBAR_RIGHT_EDGE; // 1190px

// Fixed preferred width for the tablet centred layout.
const TABLET_MAX_W = 880;

interface LayoutProps {
  children: React.ReactNode;
  title: React.ReactNode;
  subtitle?: string;
  showBack?: boolean;
  rightContent?: React.ReactNode;
  rightWidth?: string;
  leftWidth?: string;
  backPath?: string;
  headerIcon?: React.ReactNode;
  /** Shown in the scrollable area on tablet (e.g. roadmap) */
  compactTopContent?: React.ReactNode;
  /**
   * When true on tablet:
   *  - header is sticky at top
   *  - compactTopContent scrolls in the middle
   *  - children are fixed at the bottom (lesson card)
   */
  tabletChildrenFixed?: boolean;
  /** Sticky slot above BottomTabBar on mobile (e.g. Continue button) */
  mobileStickyBottom?: React.ReactNode;
  /** Override page background colour (default: PAGE_BG = #282F33) */
  bgColor?: string;
  /** Disable the 20px top padding between header and content on tablet (e.g. roadmap) */
  noTopPad?: boolean;
  /** Rendered between header and scroll area — stays fixed while content scrolls */
  stickyBar?: React.ReactNode;
  /** Keep mobile tab bar always visible on this screen */
  mobileKeepTabBarVisible?: boolean;
}

const PAGE_BG = "#282F33";

export default function Layout({
  children,
  title,
  subtitle,
  showBack = false,
  rightContent,
  rightWidth = "489px",
  leftWidth = "572px",
  backPath = "/",
  headerIcon,
  compactTopContent,
  tabletChildrenFixed,
  mobileStickyBottom,
  bgColor,
  noTopPad = false,
  stickyBar,
  mobileKeepTabBarVisible = false,
}: LayoutProps) {
  const location = useLocation();
  const navigate = useNavigate();
  const vw = useWindowWidth();
  const desktopScrollRef = useRef<HTMLDivElement | null>(null);

  const isTabletRange = vw >= 768 && vw < 1280;
  const isMobile      = vw < 768;
  const contentKey = `${location.pathname}${location.search}`;
  const pageTransition = {
    initial: { opacity: 0, y: 10 },
    animate: { opacity: 1, y: 0 },
    transition: { duration: 0.2, ease: [0.22, 1, 0.36, 1] as const },
  };

  const handleDesktopWheel = useCallback((e: React.WheelEvent<HTMLDivElement>) => {
    if (isMobile || isTabletRange) return;

    const scrollEl = desktopScrollRef.current;
    if (!scrollEl) return;

    const target = e.target as Node | null;
    if (target && scrollEl.contains(target)) return;
    if (scrollEl.scrollHeight <= scrollEl.clientHeight) return;

    e.preventDefault();
    scrollEl.scrollTop += e.deltaY;
  }, [isMobile, isTabletRange]);

  // ── Mobile ────────────────────────────────────────────────────────────────
  if (isMobile) {
    return (
      <MobileShell
        title={title}
        showBack={showBack}
        backPath={backPath}
        stickyBottom={mobileStickyBottom}
        stickyTop={stickyBar}
        contentKey={contentKey}
        keepTabBarVisible={mobileKeepTabBarVisible}
      >
        {children}
      </MobileShell>
    );
  }

  // ── Tablet (768–1279px): compact icon sidebar, centred content ────────────
  if (isTabletRange) {
    const handleBack = () => navigate(backPath);

    // Equal SIDE_PAD on both sides of the available area right of sidebar
    const spaceRightOfSidebar = vw - COMPACT_SIDEBAR_W;
    const contentW = Math.min(TABLET_MAX_W, spaceRightOfSidebar - 2 * SIDE_PAD);
    const contentLeft = COMPACT_SIDEBAR_W + (spaceRightOfSidebar - contentW) / 2;

    return (
      <div className="relative size-full overflow-hidden" style={{ background: bgColor ?? PAGE_BG }}>
        <Sidebar activePath={location.pathname} compact />

        {/* Flex-column content area: sticky header + scrollable middle + fixed bottom */}
        <div
          className="absolute flex flex-col"
          style={{ left: `${contentLeft}px`, width: `${contentW}px`, top: 10, bottom: 0 }}
        >
          {/* ── Sticky header (never scrolls) ── */}
          <div className="shrink-0">
            <AppHeader
              title={title}
              subtitle={subtitle}
              showBack={showBack}
              onBack={showBack ? handleBack : undefined}
              icon={headerIcon}
              tabletFullWidthBorder={{
                viewportWidth: vw,
                sidebarWidth: COMPACT_SIDEBAR_W,
                contentLeft: contentLeft
              }}
            />
          </div>

          {/* ── Sticky bar (below header, above scroll area) ── */}
          {stickyBar && (
            <div className="shrink-0 px-0 pt-[12px] pb-[8px]" style={{ background: bgColor ?? PAGE_BG }}>
              {stickyBar}
            </div>
          )}

          <motion.div
            key={contentKey}
            className="flex-1 flex flex-col min-h-0"
            initial={pageTransition.initial}
            animate={pageTransition.animate}
            transition={pageTransition.transition}
          >
            {/* ── Scrollable middle area ── */}
            <div className="flex-1 overflow-y-auto scrollbar-hide">
              <div className={`flex flex-col gap-[36px] items-start w-full pb-[24px]${noTopPad ? "" : " pt-[20px]"}`}>
                {compactTopContent && (
                  <div className="w-full">{compactTopContent}</div>
                )}
                {/* When not fixed-bottom, children go in the scroll area */}
                {!tabletChildrenFixed && children}
              </div>
            </div>

            {/* ── Fixed-bottom panel (lesson card etc.) ── */}
            {tabletChildrenFixed && (
              <div className="shrink-0 pb-[16px]">
                {children}
              </div>
            )}
          </motion.div>
        </div>
      </div>
    );
  }

  // ── Desktop (≥ 1280px) ────────────────────────────────────────────────────
  const handleBack = () => navigate(backPath);

  return (
    <div className="relative size-full overflow-hidden" style={{ background: bgColor ?? PAGE_BG, height: '100vh' }}>
      {/* Sidebar — never changes */}
      <Sidebar activePath={location.pathname} />

      {/* Main container: flex column, no scroll */}
      <div
        className="absolute top-0 bottom-0 flex flex-col overflow-hidden"
        style={{ left: `${SIDEBAR_RIGHT_EDGE}px`, right: 0 }}
        onWheel={handleDesktopWheel}
      >
        {/* Header container — fixed height */}
        <div className="shrink-0 pt-[10px]">
          <div
            className="flex flex-col items-start w-full"
            style={{
              maxWidth: `${MAX_CONTENT_ZONE}px`,
              paddingLeft: `${SIDE_PAD}px`,
              paddingRight: `${ZONE_GAP}px`,
              marginLeft: 'auto',
              marginRight: 'auto',
            }}
          >
            <AppHeader
              title={title}
              subtitle={subtitle}
              showBack={showBack}
              onBack={showBack ? handleBack : undefined}
              icon={headerIcon}
              desktopFullWidthBorder={{
                viewportWidth: vw,
                sidebarRightEdge: SIDEBAR_RIGHT_EDGE,
                sidePad: SIDE_PAD
              }}
            />
          </div>
        </div>

        {/* Content wrapper: flex row, centered, max-width constrained */}
        <div
          className="flex-1 flex overflow-hidden min-h-0"
          style={{
            maxWidth: `${MAX_CONTENT_ZONE}px`,
            marginLeft: 'auto',
            marginRight: 'auto',
            width: '100%',
          }}
        >
          {/* Left column: stickyBar + scroll container */}
          <div className="flex-1 flex flex-col min-h-0 min-w-0">
            {/* Sticky bar — inside left column only, right widgets unaffected */}
            {stickyBar && (
              <div
                className="shrink-0 pb-[8px]"
                style={{
                  background: bgColor ?? PAGE_BG,
                  paddingLeft: `${SIDE_PAD}px`,
                  paddingRight: `${ZONE_GAP}px`,
                  paddingTop: '36px',
                }}
              >
                {stickyBar}
              </div>
            )}
            {/* Scroll container - center column only */}
            <div ref={desktopScrollRef} className="flex-1 overflow-y-auto overflow-x-hidden scrollbar-hide min-h-0">
              <div
                className="flex flex-col gap-[36px] items-start w-full pb-[40px]"
                style={{
                  paddingLeft: `${SIDE_PAD}px`,
                  paddingRight: `${ZONE_GAP}px`,
                  paddingTop: stickyBar ? '16px' : '36px',
                }}
              >
                {children}
              </div>
            </div>
          </div>

          {/* Right widgets — fixed column, no scroll */}
          <div 
            className="shrink-0 overflow-hidden"
            style={{ 
              width: rightWidth,
              paddingTop: '36px',
              paddingRight: `${SIDE_PAD}px`,
            }}
          >
            {rightContent ?? <RightWidgets />}
          </div>
        </div>
      </div>
    </div>
  );
}
