import { useNavigate } from "react-router";
import svgPaths from "../../imports/svg-pt1cecsedx";
import { useUserSafe } from "../context/UserContext";
import { useEffect, useRef, useState } from "react";

const FIRE_ACTIVE_FILTER  = "brightness(0) saturate(100%) invert(72%) sepia(76%) saturate(751%) hue-rotate(357deg) brightness(102%)";
const FIRE_INACTIVE_FILTER = "brightness(0) saturate(0%) invert(55%) brightness(85%)";
const ZAP_ACTIVE_FILTER   = "brightness(0) saturate(100%) invert(49%) sepia(79%) saturate(1117%) hue-rotate(348deg) brightness(103%)";
const ZAP_INACTIVE_FILTER  = "brightness(0) saturate(0%) invert(55%) brightness(85%)";

function FireIcon({ isActive }: { isActive: boolean }) {
  return (
    <img
      src="/fire-icon.svg"
      width={22}
      height={24}
      style={{ objectFit: "contain", filter: isActive ? FIRE_ACTIVE_FILTER : FIRE_INACTIVE_FILTER }}
    />
  );
}

function ZapIcon({ isActive }: { isActive: boolean }) {
  return (
    <img
      src="/zap-icon.svg"
      width={24}
      height={24}
      style={{ objectFit: "contain", filter: isActive ? ZAP_ACTIVE_FILTER : ZAP_INACTIVE_FILTER }}
    />
  );
}

function ProfileIcon() {
  return (
    <div className="h-[38px] relative w-[43px]" data-name="Profile Icon">
      <svg className="absolute block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 43 38">
        <g id="Profile Icon">
          <g clipPath="url(#clip0_header_profile)">
            <path d={svgPaths.p2ed1ed00} fill="var(--fill-0, #FEBBA4)" id="Vector" />
            <path d={svgPaths.p2a51a80} fill="var(--fill-0, #272E30)" id="Vector_2" />
            <path d={svgPaths.p220b7480} fill="var(--fill-0, #FEBBA4)" id="Vector_3" />
            <path d={svgPaths.p3ac59300} fill="var(--fill-0, #ED9383)" id="Vector_4" />
            <path d={svgPaths.p2f13aff2} fill="var(--fill-0, #ED9383)" id="Vector_5" />
            <path d={svgPaths.p114b3480} fill="var(--fill-0, #272E30)" id="Vector_6" />
            <path d={svgPaths.p2bf700} fill="var(--fill-0, #272E30)" id="Vector_7" />
            <path d={svgPaths.p2eb1dc00} fill="var(--fill-0, #272E30)" id="Vector_8" />
            <path d={svgPaths.p906ea00} fill="var(--fill-0, #757474)" id="Vector_9" />
            <path d={svgPaths.p3bd57d80} fill="var(--fill-0, #272E30)" id="Vector_10" />
            <path d={svgPaths.p39fafed0} fill="var(--fill-0, #757474)" id="Vector_11" />
            <path d={svgPaths.p2f632c80} fill="var(--fill-0, #272E30)" id="Vector_12" />
            <path d={svgPaths.p2ae83100} fill="var(--fill-0, #272E30)" id="Vector_13" />
            <path d={svgPaths.p4c41780} fill="var(--fill-0, #272E30)" id="Vector_14" />
            <path d={svgPaths.p2550ec00} fill="var(--fill-0, #272E30)" id="Vector_15" />
            <path d={svgPaths.p30899670} fill="var(--fill-0, #757474)" id="Vector_16" />
            <path d={svgPaths.p3342b600} fill="var(--fill-0, #757474)" id="Vector_17" />
            <path d={svgPaths.p2baab480} fill="var(--fill-0, #272E30)" id="Vector_18" />
            <path d={svgPaths.p1a320300} fill="var(--fill-0, #272E30)" id="Vector_19" />
            <path d={svgPaths.p20de800} fill="var(--fill-0, #272E30)" id="Vector_20" />
            <path d={svgPaths.p12b15200} fill="var(--fill-0, #FEBBA4)" id="Vector_21" />
            <path d={svgPaths.p4923980} fill="var(--fill-0, #ED9383)" id="Vector_22" />
            <path d={svgPaths.p2cf30f80} fill="var(--fill-0, #272E30)" id="Vector_23" />
            <path d={svgPaths.p31efa00} fill="var(--fill-0, #272E30)" id="Vector_24" />
            <path d={svgPaths.p27644e00} fill="var(--fill-0, #272E30)" id="Vector_25" />
            <path d={svgPaths.p3d198080} fill="var(--fill-0, #272E30)" id="Vector_26" />
            <path d={svgPaths.pc39100} fill="var(--fill-0, #272E30)" id="Vector_27" />
            <path d={svgPaths.p23e60480} fill="var(--fill-0, #272E30)" id="Vector_28" />
            <path d={svgPaths.pdd33b00} fill="var(--fill-0, #272E30)" id="Vector_29" />
            <path d={svgPaths.p3a338b00} fill="var(--fill-0, #757474)" id="Vector_30" />
            <path d={svgPaths.p30571b00} fill="var(--fill-0, #272E30)" id="Vector_31" />
            <path d={svgPaths.p18490e00} fill="var(--fill-0, #FEBBA4)" id="Vector_32" />
            <path d={svgPaths.pccef300} fill="var(--fill-0, #ED9383)" id="Vector_33" />
            <path d={svgPaths.p14e77a00} fill="var(--fill-0, #FDDFDD)" id="Vector_34" />
            <path d={svgPaths.p2fd79d00} fill="var(--fill-0, #442F2C)" id="Vector_35" />
            <path d={svgPaths.p8ab1300} fill="var(--fill-0, #757474)" id="Vector_36" />
            <path d={svgPaths.p1ffe3580} fill="var(--fill-0, #FEBBA4)" id="Vector_37" />
            <path d={svgPaths.p36fa8290} fill="var(--fill-0, #343E42)" id="Vector_38" />
            <path d={svgPaths.p365d28f0} fill="var(--fill-0, #343E42)" id="Vector_39" />
            <path d={svgPaths.p1a1ebc00} fill="var(--fill-0, #442F2C)" id="Vector_40" />
            <path d={svgPaths.pda7b00} fill="var(--fill-0, #FDDFDD)" id="Vector_41" />
            <path d={svgPaths.p26220480} fill="var(--fill-0, #757474)" id="Vector_42" />
            <path d={svgPaths.pc18c600} fill="var(--fill-0, #EFF2F3)" id="Vector_43" />
            <path d={svgPaths.p35367380} fill="var(--fill-0, #ED9383)" id="Vector_44" />
            <path d={svgPaths.p3fc2c980} fill="var(--fill-0, #ED9383)" id="Vector_45" />
            <path d={svgPaths.p3f82600} fill="var(--fill-0, #D8665A)" id="Vector_46" />
            <path d={svgPaths.p33648100} fill="var(--fill-0, #ED9383)" id="Vector_47" />
            <path d={svgPaths.p2dcf3c80} fill="var(--fill-0, #ED9383)" id="Vector_48" />
            <path d={svgPaths.p34a3c690} fill="var(--fill-0, #757474)" id="Vector_49" />
            <path d={svgPaths.p3b2c7f80} fill="var(--fill-0, #394143)" id="Vector_50" />
            <path d={svgPaths.pc28b00} fill="var(--fill-0, #EFF2F3)" id="Vector_51" />
            <path d={svgPaths.pcd32a00} fill="var(--fill-0, #757474)" id="Vector_52" />
            <path d={svgPaths.p3428b500} fill="var(--fill-0, #394143)" id="Vector_53" />
            <path d={svgPaths.p25011400} fill="var(--fill-0, #757474)" id="Vector_54" />
            <path d={svgPaths.p5d9ea00} fill="var(--fill-0, #757474)" id="Vector_55" />
            <path d={svgPaths.p3980bf80} fill="var(--fill-0, #757474)" id="Vector_56" />
            <path d={svgPaths.pae7dc00} fill="var(--fill-0, #757474)" id="Vector_57" />
            <path d={svgPaths.p3569fb00} fill="var(--fill-0, #757474)" id="Vector_58" />
            <path d={svgPaths.p223a5600} fill="var(--fill-0, #757474)" id="Vector_59" />
            <path d={svgPaths.pa146f00} fill="var(--fill-0, #757474)" id="Vector_60" />
            <path d={svgPaths.p13396e00} fill="var(--fill-0, #757474)" id="Vector_61" />
            <path d={svgPaths.p328308c0} fill="var(--fill-0, #272E30)" id="Vector_62" />
            <path d={svgPaths.p151ce980} fill="var(--fill-0, #394143)" id="Vector_63" />
            <path d={svgPaths.p6d71c80} fill="var(--fill-0, #394143)" id="Vector_64" />
            <path d={svgPaths.p78b3b80} fill="var(--fill-0, #8A9198)" id="Vector_65" />
            <path d={svgPaths.p21456200} fill="var(--fill-0, #8A9198)" id="Vector_66" />
            <path d={svgPaths.p37f29cc0} fill="var(--fill-0, #394143)" id="Vector_67" />
            <path d={svgPaths.p15774780} fill="var(--fill-0, #757474)" id="Vector_68" />
            <path d={svgPaths.p10827c00} fill="var(--fill-0, #757474)" id="Vector_69" />
            <path d={svgPaths.p23e15480} fill="var(--fill-0, #C7C7C6)" id="Vector_70" />
            <path d={svgPaths.p2e288700} fill="var(--fill-0, #C7C7C6)" id="Vector_71" />
            <path d={svgPaths.p175b9800} fill="var(--fill-0, #8A9198)" id="Vector_72" />
            <path d={svgPaths.p1b6b1b00} fill="var(--fill-0, #3583F0)" id="Vector_73" />
            <path d={svgPaths.p1c904200} fill="var(--fill-0, #3583F0)" id="Vector_74" />
            <path d={svgPaths.p3f85c280} fill="var(--fill-0, #FEBBA4)" id="Vector_75" />
            <path d={svgPaths.p36028d00} fill="var(--fill-0, #ED9383)" id="Vector_76" />
            <path d={svgPaths.p10f29300} fill="var(--fill-0, #8A9198)" id="Vector_77" />
            <path d={svgPaths.pe90180} fill="var(--fill-0, #8A9198)" id="Vector_78" />
            <path d={svgPaths.p9423a80} fill="var(--fill-0, #EFF2F3)" id="Vector_79" />
            <path d={svgPaths.pf3ac200} fill="var(--fill-0, #757474)" id="Vector_80" />
            <path d={svgPaths.p3f04d5c0} fill="var(--fill-0, #272E30)" id="Vector_81" />
            <path d={svgPaths.p37b55f00} fill="var(--fill-0, #757474)" id="Vector_82" />
            <path d={svgPaths.p23ca4500} fill="var(--fill-0, #272E30)" id="Vector_83" />
            <path d={svgPaths.p2f0f3e00} fill="var(--fill-0, #757474)" id="Vector_84" />
            <path d={svgPaths.p39f73700} fill="var(--fill-0, #272E30)" id="Vector_85" />
            <path d={svgPaths.p307200} fill="var(--fill-0, #272E30)" id="Vector_86" />
            <path d={svgPaths.p3ffb5840} fill="var(--fill-0, #272E30)" id="Vector_87" />
            <path d={svgPaths.p3b1bc580} fill="var(--fill-0, #757474)" id="Vector_88" />
            <path d={svgPaths.p39988ab0} fill="var(--fill-0, #272E30)" id="Vector_89" />
            <path d={svgPaths.pa835200} fill="var(--fill-0, #272E30)" id="Vector_90" />
            <path d={svgPaths.p9815500} fill="var(--fill-0, #272E30)" id="Vector_91" />
            <path d={svgPaths.p1c9cbe10} fill="var(--fill-0, #272E30)" id="Vector_92" />
            <path d={svgPaths.p1ae45480} fill="var(--fill-0, #272E30)" id="Vector_93" />
            <path d={svgPaths.p25d0c80} fill="var(--fill-0, #272E30)" id="Vector_94" />
            <path d={svgPaths.p27dc0300} fill="var(--fill-0, #272E30)" id="Vector_95" />
            <path d={svgPaths.p3afc6f80} fill="var(--fill-0, #272E30)" id="Vector_96" />
            <path d={svgPaths.pf0edc00} fill="var(--fill-0, #272E30)" id="Vector_97" />
            <path d={svgPaths.p2965ec80} fill="var(--fill-0, #272E30)" id="Vector_98" />
            <path d={svgPaths.p11e68fc0} fill="var(--fill-0, #757474)" id="Vector_99" />
            <path d={svgPaths.p20492e00} fill="var(--fill-0, #757474)" id="Vector_100" />
            <path d={svgPaths.p2765fc00} fill="var(--fill-0, #757474)" id="Vector_101" />
            <path d={svgPaths.p1a7afa30} fill="var(--fill-0, #757474)" id="Vector_102" />
            <path d={svgPaths.pe538100} fill="var(--fill-0, #272E30)" id="Vector_103" />
            <path d={svgPaths.p1154f3f0} fill="var(--fill-0, #EFF2F3)" id="Vector_104" />
          </g>
        </g>
        <defs>
          <clipPath id="clip0_header_profile">
            <rect fill="white" height="38" rx="19" width="43" />
          </clipPath>
        </defs>
      </svg>
    </div>
  );
}

interface AppHeaderProps {
  title: string;
  subtitle?: string;
  showBack?: boolean;
  onBack?: () => void;
  icon?: React.ReactNode;
  /** When true, suppresses the built-in border-bottom (caller owns the divider line) */
  noBottomBorder?: boolean;
  /** Tablet: full-width border from sidebar to screen edge */
  tabletFullWidthBorder?: { viewportWidth: number; sidebarWidth: number; contentLeft: number };
  /** Desktop: full-width border from sidebar to screen edge */
  desktopFullWidthBorder?: { viewportWidth: number; sidebarRightEdge: number; sidePad: number };
}

export default function AppHeader({ title, subtitle, showBack = false, onBack, icon, noBottomBorder, tabletFullWidthBorder, desktopFullWidthBorder }: AppHeaderProps) {
  const navigate = useNavigate();
  const userData = useUserSafe();
  
  // Read XP and streak directly from UserContext
  const xp = userData?.xp ?? 0;
  const streak = userData?.streak ?? 0;

  // Track previous values for activation animation
  const prevStreakRef = useRef(0);
  const prevXpRef = useRef(0);
  const isFirstRenderRef = useRef(true);
  
  const [streakActivating, setStreakActivating] = useState(false);
  const [xpActivating, setXpActivating] = useState(false);

  useEffect(() => {
    // Skip animation on first render
    if (isFirstRenderRef.current) {
      isFirstRenderRef.current = false;
      prevStreakRef.current = streak;
      prevXpRef.current = xp;
      return;
    }

    // Check if streak just became active (0 → >0)
    if (prevStreakRef.current === 0 && streak > 0) {
      setStreakActivating(true);
      setTimeout(() => setStreakActivating(false), 180);
    }
    prevStreakRef.current = streak;

    // Check if xp just became active (0 → >0)
    if (prevXpRef.current === 0 && xp > 0) {
      setXpActivating(true);
      setTimeout(() => setXpActivating(false), 180);
    }
    prevXpRef.current = xp;
  }, [streak, xp]);

  const handleBack = () => {
    if (onBack) {
      onBack();
    } else {
      navigate("/");
    }
  };

  return (
    <div
      className="relative shrink-0 w-full"
      data-name="Header"
      style={{
        backgroundColor: '#282F33',
        ...(!(noBottomBorder || tabletFullWidthBorder || desktopFullWidthBorder) && {
          borderBottom: '1px solid rgba(87,100,106,0.35)'
        })
      }}
    >
      <div className="flex flex-row items-center size-full">
        <div className="content-stretch flex items-center justify-between px-[4px] pt-[4px] pb-[14px] relative w-full">
          {/* Left: back button or title */}
          <div className="relative shrink-0">
            <div className="bg-clip-padding border-0 border-[transparent] border-solid content-stretch flex gap-[20px] items-center relative">
              {showBack && (
                /* Enlarged hit area: -m + p trick keeps visual size identical
                   while extending the clickable zone by 12 px on every side.
                   active:scale-80 gives a slightly more expressive press feel. */
                <div
                  className="relative shrink-0 cursor-pointer select-none transition-transform duration-75 hover:scale-95 active:scale-80 p-[12px] -m-[12px]"
                  onClick={handleBack}
                >
                  <div className="h-[20px] relative shrink-0 w-[10px]">
                    <div className="absolute inset-[-12.5%_-25%_-12.5%_-8.43%]">
                      <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 13.3431 25">
                        <path d={svgPaths.p2fb4fd90} id="Vector 5" stroke="var(--stroke-0, #798589)" strokeLinecap="round" strokeWidth="3" />
                      </svg>
                    </div>
                  </div>
                </div>
              )}
              {icon && <div className="shrink-0">{icon}</div>}
              <p className="font-['Roboto_Condensed:Medium',sans-serif] font-medium leading-[27.5px] relative shrink-0 text-[#f4f5fc] text-[26px] whitespace-nowrap">
                {title}
              </p>
              {subtitle && (
                <p className="font-['Roboto_Condensed:Medium',sans-serif] font-medium leading-[27.5px] relative shrink-0 text-[#798589] text-[26px] whitespace-nowrap">
                  {subtitle}
                </p>
              )}
            </div>
          </div>

          {/* Right: stats icons */}
          <div className="h-[40px] relative shrink-0">
            <div className="bg-clip-padding border-0 border-[transparent] border-solid content-stretch flex gap-[30px] h-full items-center relative">
              {/* Fire */}
              <div 
                className="relative shrink-0 transition-all duration-[180ms]"
                style={{
                  transform: streakActivating ? 'scale(0.95)' : 'scale(1)',
                  opacity: streakActivating ? 0.6 : 1
                }}
              >
                <div className="bg-clip-padding border-0 border-[transparent] border-solid content-stretch flex gap-[5px] items-center relative">
                  <FireIcon isActive={streak > 0} />
                  <p 
                    className="font-['Roboto_Condensed:Medium',sans-serif] font-medium leading-[32.068px] relative shrink-0 text-[24px] whitespace-nowrap"
                    style={{ 
                      color: streak > 0 ? '#FFB121' : '#798589',
                      filter: streak > 0 ? 'drop-shadow(0 0 4px rgba(255, 177, 33, 0.3))' : 'none'
                    }}
                  >
                    {streak}
                  </p>
                </div>
              </div>
              {/* Zap */}
              <div 
                className="relative shrink-0 transition-all duration-[180ms]"
                style={{
                  transform: xpActivating ? 'scale(0.95)' : 'scale(1)',
                  opacity: xpActivating ? 0.6 : 1
                }}
              >
                <div className="bg-clip-padding border-0 border-[transparent] border-solid content-stretch flex gap-[4px] items-center relative">
                  <ZapIcon isActive={xp > 0} />
                  <p 
                    className="font-['Roboto_Condensed:Medium',sans-serif] font-medium leading-[21px] relative shrink-0 text-[24px] whitespace-nowrap"
                    style={{ 
                      color: xp > 0 ? '#FF6B21' : '#798589',
                      backgroundImage: xp > 0 ? 'linear-gradient(to bottom, #FF6B21, #C15C2A)' : 'none',
                      backgroundClip: xp > 0 ? 'text' : 'unset',
                      WebkitBackgroundClip: xp > 0 ? 'text' : 'unset',
                      WebkitTextFillColor: xp > 0 ? 'transparent' : 'unset'
                    }}
                  >
                    {xp}
                  </p>
                </div>
              </div>
              {/* Admin button — only visible for admin */}
              {userData?.email === "pavlov-evgenii@list.ru" && (
                <div
                  className="relative shrink-0 cursor-pointer select-none transition-transform duration-75 hover:scale-95 active:scale-90 p-[8px] -m-[8px]"
                  onClick={() => navigate("/admin-homeworks")}
                  title="Админ-панель"
                >
                  <div className="px-[12px] py-[6px] rounded-[8px] bg-[#ff6b21] hover:bg-[#e66020] transition-colors">
                    <span className="font-['Roboto_Condensed:Medium',sans-serif] font-medium text-[14px] text-[#f4f5fc]">
                      ADMIN
                    </span>
                  </div>
                </div>
              )}
            </div>
          </div>
        </div>
      </div>

      {/* Tablet: full-width border stretching from sidebar to screen edge */}
      {tabletFullWidthBorder && (
        <div
          aria-hidden="true"
          style={{
            position: 'absolute',
            bottom: 0,
            left: `${-(tabletFullWidthBorder.contentLeft - tabletFullWidthBorder.sidebarWidth)}px`,
            width: `${tabletFullWidthBorder.viewportWidth - tabletFullWidthBorder.sidebarWidth}px`,
            borderBottom: '1px solid rgba(87,100,106,0.35)',
            pointerEvents: 'none',
          }}
        />
      )}

      {/* Desktop: full-width border stretching from sidebar to screen edge */}
      {desktopFullWidthBorder && (() => {
        const contentZoneW = desktopFullWidthBorder.viewportWidth - desktopFullWidthBorder.sidebarRightEdge;
        const maxContent = 1190; // MAX_CONTENT_ZONE from Layout
        const centeringOffset = Math.max(0, (contentZoneW - maxContent) / 2);
        return (
          <div
            aria-hidden="true"
            style={{
              position: 'absolute',
              bottom: 0,
              left: `${-(desktopFullWidthBorder.sidePad + centeringOffset)}px`,
              width: `${contentZoneW}px`,
              borderBottom: '1px solid rgba(87,100,106,0.35)',
              pointerEvents: 'none',
            }}
          />
        );
      })()}
    </div>
  );
}