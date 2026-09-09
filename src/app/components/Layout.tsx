import { lazy, Suspense } from "react";
import { useLocation } from "react-router";
import { useWindowWidth } from "../hooks/useWindowWidth";

export interface LayoutProps {
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

const MobileShell = lazy(() => import("./MobileShell"));
const DesktopTabletLayout = lazy(() => import("./LayoutDesktop"));
const PAGE_BG = "#282F33";

function LayoutFallback({ bgColor }: { bgColor?: string }) {
  return <div className="size-full" style={{ background: bgColor ?? PAGE_BG }} />;
}

export default function Layout(props: LayoutProps) {
  const vw = useWindowWidth();
  const location = useLocation();
  const contentKey = `${location.pathname}${location.search}`;

  if (vw < 768) {
    return (
      <Suspense fallback={<LayoutFallback bgColor={props.bgColor} />}>
        <MobileShell
          title={props.title as string}
          showBack={props.showBack}
          backPath={props.backPath}
          stickyBottom={props.mobileStickyBottom}
          stickyTop={props.stickyBar}
          contentKey={contentKey}
          keepTabBarVisible={props.mobileKeepTabBarVisible}
        >
          {props.children}
        </MobileShell>
      </Suspense>
    );
  }

  return (
    <Suspense fallback={<LayoutFallback bgColor={props.bgColor} />}>
      <DesktopTabletLayout {...props} vw={vw} contentKey={contentKey} />
    </Suspense>
  );
}
