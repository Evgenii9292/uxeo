import { useCallback, useRef } from "react";
import { useLocation, useNavigate } from "react-router";
import { motion } from "motion/react";
import Sidebar from "./Sidebar";
import AppHeader from "./AppHeader";
import RightWidgets from "./RightWidgets";
import type { LayoutProps } from "./Layout";

const SIDEBAR_RIGHT_EDGE = 250;
const COMPACT_SIDEBAR_W = 84;
const ZONE_GAP = 20;
const SIDE_PAD = 40;
const MAX_CONTENT_ZONE = 1440 - SIDEBAR_RIGHT_EDGE;
const TABLET_MAX_W = 880;
const PAGE_BG = "#282F33";

type LayoutDesktopProps = LayoutProps & {
  vw: number;
  contentKey: string;
};

export default function LayoutDesktop({
  children,
  title,
  subtitle,
  showBack = false,
  rightContent,
  rightWidth = "489px",
  backPath = "/",
  headerIcon,
  compactTopContent,
  tabletChildrenFixed,
  bgColor,
  noTopPad = false,
  stickyBar,
  vw,
  contentKey,
}: LayoutDesktopProps) {
  const location = useLocation();
  const navigate = useNavigate();
  const desktopScrollRef = useRef<HTMLDivElement | null>(null);

  const isTabletRange = vw >= 768 && vw < 1280;
  const pageTransition = {
    initial: { opacity: 0, y: 10 },
    animate: { opacity: 1, y: 0 },
    transition: { duration: 0.2, ease: [0.22, 1, 0.36, 1] as const },
  };

  const handleDesktopWheel = useCallback((e: React.WheelEvent<HTMLDivElement>) => {
    if (isTabletRange) return;

    const scrollEl = desktopScrollRef.current;
    if (!scrollEl) return;

    const target = e.target as Node | null;
    if (target && scrollEl.contains(target)) return;
    if (scrollEl.scrollHeight <= scrollEl.clientHeight) return;

    e.preventDefault();
    scrollEl.scrollTop += e.deltaY;
  }, [isTabletRange]);

  if (isTabletRange) {
    const handleBack = () => navigate(backPath);
    const spaceRightOfSidebar = vw - COMPACT_SIDEBAR_W;
    const contentW = Math.min(TABLET_MAX_W, spaceRightOfSidebar - 2 * SIDE_PAD);
    const contentLeft = COMPACT_SIDEBAR_W + (spaceRightOfSidebar - contentW) / 2;

    return (
      <div className="relative size-full overflow-hidden" style={{ background: bgColor ?? PAGE_BG }}>
        <Sidebar activePath={location.pathname} compact />
        <div
          className="absolute flex flex-col"
          style={{ left: `${contentLeft}px`, width: `${contentW}px`, top: 10, bottom: 0 }}
        >
          <div className="shrink-0">
            <AppHeader
              title={title}
              subtitle={subtitle}
              showBack={showBack}
              onBack={showBack ? handleBack : undefined}
              icon={headerIcon}
              tabletFullWidthBorder={{ viewportWidth: vw, sidebarWidth: COMPACT_SIDEBAR_W, contentLeft }}
            />
          </div>
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
            <div className="flex-1 overflow-y-auto scrollbar-hide">
              <div className={`flex flex-col gap-[36px] items-start w-full pb-[24px]${noTopPad ? "" : " pt-[20px]"}`}>
                {compactTopContent && <div className="w-full">{compactTopContent}</div>}
                {!tabletChildrenFixed && children}
              </div>
            </div>
            {tabletChildrenFixed && <div className="shrink-0 pb-[16px]">{children}</div>}
          </motion.div>
        </div>
      </div>
    );
  }

  const handleBack = () => navigate(backPath);

  return (
    <div className="relative size-full overflow-hidden" style={{ background: bgColor ?? PAGE_BG, height: "100%" }}>
      <Sidebar activePath={location.pathname} />
      <div
        className="absolute top-0 bottom-0 flex flex-col overflow-hidden"
        style={{ left: `${SIDEBAR_RIGHT_EDGE}px`, right: 0 }}
        onWheel={handleDesktopWheel}
      >
        <div className="shrink-0 pt-[10px]">
          <div
            className="flex flex-col items-start w-full"
            style={{
              maxWidth: `${MAX_CONTENT_ZONE}px`,
              paddingLeft: `${SIDE_PAD}px`,
              paddingRight: `${ZONE_GAP}px`,
              marginLeft: "auto",
              marginRight: "auto",
            }}
          >
            <AppHeader
              title={title}
              subtitle={subtitle}
              showBack={showBack}
              onBack={showBack ? handleBack : undefined}
              icon={headerIcon}
              desktopFullWidthBorder={{ viewportWidth: vw, sidebarRightEdge: SIDEBAR_RIGHT_EDGE, sidePad: SIDE_PAD }}
            />
          </div>
        </div>
        <div
          className="flex-1 flex overflow-hidden min-h-0"
          style={{ maxWidth: `${MAX_CONTENT_ZONE}px`, marginLeft: "auto", marginRight: "auto", width: "100%" }}
        >
          <div className="flex-1 flex flex-col min-h-0 min-w-0">
            {stickyBar && (
              <div
                className="shrink-0 pb-[8px]"
                style={{
                  background: bgColor ?? PAGE_BG,
                  paddingLeft: `${SIDE_PAD}px`,
                  paddingRight: `${ZONE_GAP}px`,
                  paddingTop: "36px",
                }}
              >
                {stickyBar}
              </div>
            )}
            <div ref={desktopScrollRef} className="flex-1 overflow-y-auto overflow-x-hidden scrollbar-hide min-h-0">
              <div
                className="flex flex-col gap-[36px] items-start w-full pb-[40px]"
                style={{
                  paddingLeft: `${SIDE_PAD}px`,
                  paddingRight: `${ZONE_GAP}px`,
                  paddingTop: stickyBar ? "16px" : "36px",
                }}
              >
                {children}
              </div>
            </div>
          </div>
          <div
            className="shrink-0 overflow-hidden"
            style={{ width: rightWidth, paddingTop: "36px", paddingRight: `${SIDE_PAD}px` }}
          >
            {rightContent ?? <RightWidgets />}
          </div>
        </div>
      </div>
    </div>
  );
}
