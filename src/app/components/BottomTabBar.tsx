/**
 * BottomTabBar — 5 tabs: Обучение · Курсы · Вызовы · Профиль · ···
 * The "···" tab opens the MoreSheet bottom drawer.
 */

import React, { useState } from "react";
import { useLocation, useNavigate } from "react-router";
import svgDivPaths from "../../imports/svg-1vbml8i98m";
import { MoreSheet } from "./MoreSheet";
import { getLeague } from "../pages/LeaguePage";
import { useUserSafe } from "../context/UserContext";

// ── Figma icon components ─────────────────────────────────────────────────────

function IconObuchenie({ active }: { active: boolean }) {
  return (
    <div className="relative rounded-[27.3px] shrink-0">
      <div className="relative" style={{ width: 29, height: 29 }}>
        <div className="overflow-clip relative rounded-[inherit] size-full">
          <div className="absolute inset-[0_15.39%]">
            <svg className="absolute block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 26.9973 39.0009">
              <path d={svgDivPaths.p3b89cb00} fill="#AF66DA" />
              <path d={svgDivPaths.p41b1df0}  fill="#9857BD" />
              <path d={svgDivPaths.p2dbb89f0} fill="#814AA0" />
              <path d={svgDivPaths.p80bdb80}  fill="#73428F" />
              <path d={svgDivPaths.p5c0ba00}  fill="#9857BD" />
              <path d={svgDivPaths.p1e560c00} fill="#FFF9F0" />
              <path d={svgDivPaths.p1880bc80} fill="#FFEFE1" />
              <path d={svgDivPaths.pdf28200}  fill="#FED402" />
              <path d={svgDivPaths.p6f42700}  fill="#FAC600" />
              <path d={svgDivPaths.p3696c600} fill="#D7AA02" />
              <path d={svgDivPaths.p2274f100} fill="#FED402" />
              <path d={svgDivPaths.p2cddbb80} fill="#FAC600" />
              <path d={svgDivPaths.p2cbf1040} fill="#FED402" />
              <path d={svgDivPaths.p35056470} fill="#FED402" />
            </svg>
          </div>
        </div>
      </div>
    </div>
  );
}

function IconVyzovy({ active }: { active: boolean }) {
  return (
    <div className="relative rounded-[27.3px] shrink-0">
      <div className="relative" style={{ width: 29, height: 29 }}>
        <div className="overflow-clip relative rounded-[inherit] size-full">
          <div className="absolute inset-[54.65%_12.12%_0_50.24%]"><svg className="absolute block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 14.6787 17.6881"><path d={svgDivPaths.p3fe9a500} fill="#E5002E" /></svg></div>
          <div className="absolute inset-[54.64%_50.24%_0_12.12%]"><svg className="absolute block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 14.6786 17.6888"><path d={svgDivPaths.pa3a3b80} fill="#FF6363" /></svg></div>
          <div className="absolute inset-[2.93%_16.43%_29.94%_16.43%]"><svg className="absolute block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 26.1805 26.1802"><path d={svgDivPaths.p395d800} fill="#FFF566" /></svg></div>
          <div className="absolute bottom-[29.94%] left-1/2 right-[16.43%] top-[2.93%]"><svg className="absolute block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 13.0902 26.1801"><path d={svgDivPaths.p2029d700} fill="#FFCF2C" /></svg></div>
          <div className="absolute inset-[0_13.51%_27.01%_13.51%]"><svg className="absolute block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 28.4655 28.4652"><path d={svgDivPaths.p1bac4ff0} fill="#FFC12E" /></svg></div>
          <div className="absolute bottom-[27.01%] left-1/2 right-[13.51%] top-0"><svg className="absolute block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 14.2328 28.4653"><path d={svgDivPaths.pa607100} fill="#FF7403" /></svg></div>
          <div className="absolute inset-[19.89%_46.49%_47.18%_41.87%]"><svg className="absolute block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 4.53741 12.8414"><path d={svgDivPaths.p21cc4f80} fill="#FFB500" /></svg></div>
          <div className="absolute bottom-[47.18%] left-1/2 right-[46.49%] top-[19.89%]"><svg className="absolute block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 1.36703 12.8414"><path d={svgDivPaths.p37497580} fill="#FF7403" /></svg></div>
        </div>
      </div>
    </div>
  );
}

function IconProfile({ active }: { active: boolean }) {
  return (
    <div className="relative rounded-[27.3px] shrink-0">
      <div className="relative" style={{ width: 29, height: 29 }}>
        <div className="overflow-clip relative rounded-[inherit] size-full">
          <div className="absolute inset-[58.62%_5.17%_0_5.17%]"><svg className="absolute block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 34.965 16.1377"><path d={svgDivPaths.p313c4f00} fill="#E6AF78" /></svg></div>
          <div className="absolute inset-[70.47%_5.17%_0_5.17%]"><svg className="absolute block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 34.965 11.5176"><path d={svgDivPaths.p32673680} fill="#00A091" /></svg></div>
          <div className="absolute inset-[71.29%_34.82%_15.51%_34.67%]"><svg className="absolute block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 11.8969 5.14837"><path d={svgDivPaths.pba3a500} fill="#D5DCEC" /></svg></div>
          <div className="absolute inset-[58.62%_34.48%_26.32%_32.99%]"><svg className="absolute block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 12.684 5.87328"><path d={svgDivPaths.p1ba49300} fill="#D29B6E" /></svg></div>
          <div className="absolute inset-[18.97%_27.59%_32.76%_27.59%]"><svg className="absolute block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 17.4824 18.8272"><path d={svgDivPaths.p370e9800} fill="#F0C087" /></svg></div>
          <div className="absolute inset-[18.97%_27.59%_32.76%_27.59%]"><svg className="absolute block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 17.4825 18.8272"><path d={svgDivPaths.p5fbfb00} fill="#E6AF78" /></svg></div>
          <div className="absolute inset-[0_24.14%_62.07%_24.14%]"><svg className="absolute block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 20.1721 14.7929"><path d={svgDivPaths.p296f01f0} fill="#5A4146" /></svg></div>
          <div className="absolute bottom-1/2 left-[68.71%] right-[24.14%] top-[36.21%]"><svg className="absolute block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 2.78732 5.37917"><path d={svgDivPaths.p2e929d00} fill="#F0C087" /></svg></div>
          <div className="absolute bottom-1/2 left-[24.14%] right-[68.71%] top-[36.21%]"><svg className="absolute block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 2.78731 5.37917"><path d={svgDivPaths.p282ddf80} fill="#E6AF78" /></svg></div>
          <div className="absolute inset-[70.47%_5.17%_0_5.17%]"><svg className="absolute block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 34.965 11.5152"><path d={svgDivPaths.pcaeea00} fill="#009182" /><path d={svgDivPaths.pbe76f0} fill="#009182" /><path d={svgDivPaths.p3474c480} fill="#009182" /></svg></div>
          <div className="absolute inset-[66.41%_29.31%_11.74%_29.31%]"><svg className="absolute block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 16.1377 8.52391"><path d={svgDivPaths.p3bbe9200} fill="#E4EAF6" /><path d={svgDivPaths.p677c00} fill="#E4EAF6" /></svg></div>
        </div>
      </div>
    </div>
  );
}

// ── Courses icon — simple clean book/grid ─────────────────────────────────────

function IconKursy({ active }: { active: boolean }) {
  const accent = active ? "#FF6B21" : "#4E6068";
  const muted  = active ? "#FF9A5C" : "#3A4A52";
  return (
    <div style={{ width: 29, height: 29 }}>
      <svg width="29" height="29" viewBox="0 0 29 29" fill="none">
        {/* 4 course cards in a 2×2 grid */}
        <rect x="3"    y="3"  width="10" height="10.5" rx="3" fill={accent} />
        <rect x="16"   y="3"  width="10" height="10.5" rx="3" fill={muted}  />
        <rect x="3"    y="15.5" width="10" height="10.5" rx="3" fill={muted}  />
        <rect x="16"   y="15.5" width="10" height="10.5" rx="3" fill={accent} />
        {/* Small lines suggesting text */}
        <rect x="5"    y="10.5" width="6" height="1.5" rx="0.75" fill={active ? "rgba(255,255,255,0.4)" : "rgba(0,0,0,0.2)"} />
        <rect x="18"   y="10.5" width="6" height="1.5" rx="0.75" fill={active ? "rgba(255,255,255,0.4)" : "rgba(0,0,0,0.2)"} />
        <rect x="5"    y="23"   width="6" height="1.5" rx="0.75" fill={active ? "rgba(255,255,255,0.4)" : "rgba(0,0,0,0.2)"} />
        <rect x="18"   y="23"   width="6" height="1.5" rx="0.75" fill={active ? "rgba(255,255,255,0.4)" : "rgba(0,0,0,0.2)"} />
      </svg>
    </div>
  );
}

// ── More (···) icon ───────────────────────────────────────────────────────────

function IconMore({ active }: { active: boolean }) {
  const color = active ? "#FF6B21" : "#4E6068";
  return (
    <div style={{ width: 29, height: 29 }}>
      <svg width="29" height="29" viewBox="0 0 29 29" fill="none">
        <circle cx="6.5"  cy="14.5" r="2.5" fill={color} />
        <circle cx="14.5" cy="14.5" r="2.5" fill={color} />
        <circle cx="22.5" cy="14.5" r="2.5" fill={color} />
      </svg>
    </div>
  );
}

// ── League tab icon — shows current trophy ────────────────────────────────────

function IconLeague({ active }: { active: boolean }) {
  const userData = useUserSafe();
  const league = getLeague(userData?.xp ?? 0);
  return (
    <div style={{ width: 29, height: 29, display: "flex", alignItems: "center", justifyContent: "center", opacity: active ? 1 : 0.6 }}>
      <img src={league.trophy} width={26} height={26} style={{ objectFit: "contain" }} />
    </div>
  );
}

// ── Tab config ────────────────────────────────────────────────────────────────

const NAV_TABS = [
  {
    key: "learning",
    path: "/lessons",
    matchPaths: ["/lessons", "/theory", "/contrast", "/homework", "/lesson-quiz"],
    Icon: IconObuchenie,
  },
  {
    key: "courses",
    path: "/courses",
    matchPaths: ["/courses", "/modules"],
    Icon: IconKursy,
  },
  {
    key: "challenges",
    path: "/challenges",
    matchPaths: ["/challenges", "/challenge-detail"],
    Icon: IconVyzovy,
  },
  {
    key: "league",
    path: "/league",
    matchPaths: ["/league"],
    Icon: IconLeague,
  },
] as const;

// ── BottomTabBar ──────────────────────────────────────────────────────────────

export default function BottomTabBar() {
  const location = useLocation();
  const navigate = useNavigate();
  const [showMore, setShowMore] = useState(false);

  const isActive = (matchPaths: readonly string[]) =>
    matchPaths.some((p) =>
      p === "/" ? location.pathname === "/" : location.pathname.startsWith(p)
    );

  return (
    <>
      <nav
        className="flex-none flex items-center justify-around relative z-50 rounded-tl-[15px] rounded-tr-[15px]"
        style={{
          height: 52,
          background: "rgba(45,54,58,0.95)",
          backdropFilter: "blur(14px)",
          WebkitBackdropFilter: "blur(14px)",
          borderTop: "1px solid rgba(86,101,107,0.35)",
          paddingLeft: 8,
          paddingRight: 8,
          paddingBottom: "env(safe-area-inset-bottom, 0px)",
        }}
      >
        {/* Nav tabs */}
        {NAV_TABS.map((tab) => {
          const active = isActive(tab.matchPaths);
          const { Icon } = tab;
          return (
            <button
              key={tab.key}
              onClick={() => navigate(tab.path)}
              className="flex flex-col items-center justify-center flex-1 h-full cursor-pointer border-0 outline-none active:scale-90 transition-transform duration-75 relative"
              style={{ background: "transparent" }}
            >
              {active && (
                <div
                  className="absolute inset-x-[6px] inset-y-[7px] rounded-[13px] pointer-events-none"
                  style={{ background: "rgba(255,255,255,0.07)" }}
                />
              )}
              <Icon active={active} />
            </button>
          );
        })}

        {/* More (···) button */}
        <button
          onClick={() => setShowMore(true)}
          className="flex flex-col items-center justify-center flex-1 h-full cursor-pointer border-0 outline-none active:scale-90 transition-transform duration-75 relative"
          style={{ background: "transparent" }}
        >
          {showMore && (
            <div
              className="absolute inset-x-[6px] inset-y-[7px] rounded-[13px] pointer-events-none"
              style={{ background: "rgba(255,255,255,0.07)" }}
            />
          )}
          <IconMore active={showMore} />
        </button>
      </nav>

      {/* MoreSheet */}
      {showMore && <MoreSheet onClose={() => setShowMore(false)} />}
    </>
  );
}
