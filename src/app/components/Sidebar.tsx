import React, { useState, useEffect, useCallback } from "react";
import { useNavigate } from "react-router";
import svgPaths from "../../imports/svg-pt1cecsedx";
import svgNotif from "../../imports/svg-r42rgjsncr";
import svgDivPaths from "../../imports/svg-1vbml8i98m";
import FreeIconGift from "../../imports/FreeIconGift81465531";
import { CompactWidgets } from "./RightWidgets";
import Group1 from "../../imports/Group481513";
import imgVector from "figma:asset/fbd1a4de6983385b09d8ab2cc1ccfe34c3361ab2.png";
import { useHomeworkSafe } from "../context/HomeworkContext";
import { getLeague } from "../pages/LeaguePage";
import { useUserSafe } from "../context/UserContext";
import { NOTIF_COUNT_KEY, NOTIF_INITIAL_UNREAD } from "../pages/NotificationsPage";
import { ReportErrorModal } from "../pages/quiz/ReportErrorModal";

/** Read + track the global notification unread count from localStorage */
function useNotifCount() {
  const [count, setCount] = useState<number>(() => {
    const v = localStorage.getItem(NOTIF_COUNT_KEY);
    return v !== null ? Number(v) : NOTIF_INITIAL_UNREAD;
  });
  useEffect(() => {
    const onStorage = (e: StorageEvent) => {
      if (e.key === NOTIF_COUNT_KEY) setCount(Number(e.newValue ?? 0));
    };
    const onCustom = (e: Event) => setCount((e as CustomEvent<number>).detail);
    window.addEventListener("storage", onStorage);
    window.addEventListener("notif-count-change", onCustom);
    return () => {
      window.removeEventListener("storage", onStorage);
      window.removeEventListener("notif-count-change", onCustom);
    };
  }, []);
  return count;
}

/** Скиллум logo — full sidebar */
function SkillumLogo() {
  return (
    <svg width="124" height="37" viewBox="0 0 150 55" fill="none" xmlns="http://www.w3.org/2000/svg">
      <path d="M11.5162 23.0303C12.3172 23.0303 13.0427 22.8716 13.6925 22.5542C14.3575 22.2217 14.9016 21.7079 15.3247 21.0127C15.7479 20.3023 15.9897 19.3804 16.0502 18.2469H19.8134C19.7529 19.8792 19.3373 21.3149 18.5665 22.5542C17.8109 23.7784 16.8134 24.7381 15.5741 25.4333C14.35 26.1133 12.9973 26.4534 11.5162 26.4534C9.92935 26.4534 8.54649 26.1965 7.36767 25.6826C6.20395 25.1688 5.23671 24.4282 4.46594 23.461C3.71028 22.4786 3.14354 21.2922 2.76571 19.9018C2.38788 18.4963 2.19897 16.9019 2.19897 15.1185V12.3528C2.19897 10.5695 2.38788 8.98258 2.76571 7.59217C3.14354 6.18664 3.71028 5.00026 4.46594 4.03301C5.23671 3.05066 6.20395 2.30256 7.36767 1.78871C8.54649 1.27486 9.92935 1.01794 11.5162 1.01794C13.1787 1.01794 14.6144 1.3731 15.8235 2.08342C17.0477 2.77862 17.9998 3.7912 18.6799 5.12116C19.3751 6.43601 19.7529 8.03045 19.8134 9.90448H16.0502C15.9897 8.69543 15.7706 7.6904 15.3928 6.8894C15.0149 6.07329 14.5011 5.46877 13.8512 5.07582C13.2013 4.66777 12.423 4.46374 11.5162 4.46374C10.4583 4.46374 9.58175 4.65265 8.88654 5.03048C8.20645 5.3932 7.66993 5.92216 7.27699 6.61737C6.88405 7.31257 6.60445 8.1438 6.43821 9.11104C6.28708 10.0783 6.21151 11.1589 6.21151 12.3528V15.1185C6.21151 16.3125 6.28708 17.4006 6.43821 18.383C6.60445 19.3502 6.87649 20.1814 7.25432 20.8766C7.64726 21.5718 8.19134 22.1084 8.88654 22.4862C9.58175 22.8489 10.4583 23.0303 11.5162 23.0303ZM25.8359 1.47133V26H21.8234V1.47133H25.8359ZM39.3244 1.47133L29.4631 15.5266H24.4984L23.8637 11.8541H27.8309L34.5184 1.47133H39.3244ZM34.8811 26L27.6948 14.8918L30.2565 11.8541L39.9138 26H34.8811ZM45.1203 19.3578L54.0068 1.47133H58.0194V26H54.0068V8.11357L45.1203 26H41.1304V1.47133H45.1203V19.3578ZM75.1274 1.47133V4.9398H65.3568V1.47133H75.1274ZM78.7093 1.47133V26H74.7194V1.47133H78.7093ZM64.4046 1.47133H68.4172L67.8504 13.3049C67.7598 15.1336 67.6086 16.7507 67.3971 18.1563C67.2006 19.5467 66.921 20.7406 66.5583 21.7381C66.2107 22.7356 65.7724 23.5517 65.2434 24.1864C64.7296 24.8061 64.1099 25.267 63.3845 25.5693C62.6742 25.8564 61.8505 26 60.9135 26H59.712V22.3048L60.5054 22.2368C61.0344 22.1915 61.4878 22.0404 61.8656 21.7834C62.2586 21.5265 62.576 21.1487 62.8178 20.6499C63.0747 20.1361 63.2787 19.4787 63.4298 18.6777C63.5961 17.8767 63.7246 16.9245 63.8152 15.8213C63.9059 14.718 63.9739 13.4334 64.0193 11.9674L64.4046 1.47133ZM95.84 1.47133V4.9398H86.0693V1.47133H95.84ZM99.4218 1.47133V26H95.4319V1.47133H99.4218ZM85.1172 1.47133H89.1297L88.563 13.3049C88.4723 15.1336 88.3212 16.7507 88.1096 18.1563C87.9131 19.5467 87.6335 20.7406 87.2708 21.7381C86.9232 22.7356 86.4849 23.5517 85.956 24.1864C85.4421 24.8061 84.8225 25.267 84.0971 25.5693C83.3867 25.8564 82.5631 26 81.6261 26H80.4246V22.3048L81.218 22.2368C81.747 22.1915 82.2004 22.0404 82.5782 21.7834C82.9711 21.5265 83.2885 21.1487 83.5303 20.6499C83.7872 20.1361 83.9913 19.4787 84.1424 18.6777C84.3086 17.8767 84.4371 16.9245 84.5278 15.8213C84.6185 14.718 84.6865 13.4334 84.7318 11.9674L85.1172 1.47133Z" fill="#F4F5FC"/>
      <path d="M109.85 2.01017C107.522 6.6174 98.9338 31.1234 107.687 26.4487C110.907 24.7289 113.928 21.8662 116.24 19.0702C117.264 17.8311 117.859 16.8466 118.45 15.4342C119.04 14.0218 119.607 12.2114 120.063 10.4481C120.942 7.04667 122.078 1.73656 121.935 2.01017C121.701 2.45629 120.434 6.97585 119.294 10.2566C113.307 27.4877 94.3437 57.2363 91.3441 52.7363C88.7873 48.9006 101.029 40.7363 109.85 32.3559C112.365 29.9668 121.999 21.1843 123.003 19.8525C125.277 16.8361 122.844 26.2983 123.006 27.35C123.314 29.3393 127.833 22.1397 128.617 20.9606C131.195 17.0786 133.104 11.6943 134.637 7.27784C135.822 3.86173 135.836 0.664476 134.637 3.94812C133.724 6.44905 125.872 23.8948 133.026 21.4095C139.756 19.0718 144.686 10.6417 146 3.94812C147.062 -1.46088 141.793 15.3065 140.844 20.7363C140.056 25.2424 144 26 148.5 22.5" stroke="#F4F5FC" strokeWidth="3" strokeLinecap="round"/>
    </svg>
  );
}

/** Скиллум logo — compact sidebar (ellipse icon only, ~30 × 32 px) */
function SkillumIconOnly() {
  return (
    <div style={{ width: 30, height: 32, position: "relative" }}>
      <svg className="absolute block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 40 42">
        <ellipse cx="20" cy="21" fill="url(#sb_compact_icon_grad)" rx="20" ry="21" />
        <defs>
          <linearGradient gradientUnits="userSpaceOnUse" id="sb_compact_icon_grad" x1="21.6076" x2="19.717" y1="4.758" y2="40.811">
            <stop stopColor="#435861" />
            <stop offset="1" stopColor="#000" />
          </linearGradient>
        </defs>
      </svg>
      <div style={{ position: "absolute", top: "26%", left: "3%", right: "83%", bottom: "11%" }}>
        <img alt="" src={imgVector} style={{ display: "block", width: "100%", height: "100%" }} />
      </div>
    </div>
  );
}

function UxeoLogo() {
  return (
    <div className="content-stretch flex gap-[12.755px] items-start px-[15px] relative shrink-0 w-[125px]">
      <div className="h-[31.164px] relative shrink-0 w-[21.385px]">
        <svg className="absolute block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 21.3845 31.1638">
          <path d={svgPaths.p1c223610} fill="url(#paint0_linear_logo)" id="Vector" />
          <defs>
            <linearGradient gradientUnits="userSpaceOnUse" id="paint0_linear_logo" x1="9" x2="-7" y1="13.3574" y2="30.8574">
              <stop stopColor="#FF6B21" />
              <stop offset="1" stopColor="#994014" />
            </linearGradient>
          </defs>
        </svg>
      </div>
      <p className="font-['Roboto_Condensed:Medium',sans-serif] font-medium leading-[27.5px] relative shrink-0 text-[#f4f5fc] text-[32px] w-[91.837px]">UXEO</p>
    </div>
  );
}

function BookSpine() {
  return (
    <div className="absolute inset-[0_15.39%]" data-name="Book Spine">
      <svg className="absolute block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 13.845 20.0008">
        <g id="Book Spine">
          <path d={svgPaths.p18ec55b0} fill="var(--fill-0, #AF66DA)" id="Vector" />
          <path d={svgPaths.paf41200} fill="var(--fill-0, #9857BD)" id="Vector_2" />
          <path d={svgPaths.p1551ae80} fill="var(--fill-0, #814AA0)" id="Vector_3" />
          <path d={svgPaths.p30d70ef0} fill="var(--fill-0, #73428F)" id="Vector_4" />
          <path d={svgPaths.p36db7380} fill="var(--fill-0, #9857BD)" id="Vector_5" />
          <path d={svgPaths.pea99600} fill="var(--fill-0, #FFF9F0)" id="Vector_6" />
          <path d={svgPaths.p677c700} fill="var(--fill-0, #FFEFE1)" id="Vector_7" />
          <path d={svgPaths.p185a9900} fill="var(--fill-0, #FED402)" id="Vector_8" />
          <path d={svgPaths.p1b3b2500} fill="var(--fill-0, #FAC600)" id="Vector_9" />
          <path d={svgPaths.p1b24d400} fill="var(--fill-0, #D7AA02)" id="Vector_10" />
          <path d={svgPaths.p8868e20} fill="var(--fill-0, #FED402)" id="Vector_11" />
          <path d={svgPaths.p3fb26200} fill="var(--fill-0, #FAC600)" id="Vector_12" />
          <g id="Bookmark">
            <path d={svgPaths.p310fcf00} fill="var(--fill-0, #FED402)" id="Vector_13" />
            <path d={svgPaths.p15331f00} fill="var(--fill-0, #FED402)" id="Vector_14" />
          </g>
        </g>
      </svg>
    </div>
  );
}

function SidebarBody() {
  return (
    <div className="absolute inset-[70.47%_5.17%_0_5.17%]">
      <svg className="absolute block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 17.9311 5.90531">
        <g id="Body">
          <path d={svgPaths.p2a49ca00} fill="var(--fill-0, #009182)" id="Vector" />
          <path d={svgPaths.p34a21f00} fill="var(--fill-0, #009182)" id="Vector_2" />
          <path d={svgPaths.p20824e70} fill="var(--fill-0, #009182)" id="Vector_3" />
        </g>
      </svg>
    </div>
  );
}

function SidebarHair() {
  return (
    <div className="absolute inset-[66.41%_29.31%_11.74%_29.31%]">
      <svg className="absolute block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 8.27586 4.37131">
        <g id="Hair">
          <path d={svgPaths.pef751c0} fill="var(--fill-0, #E4EAF6)" id="Vector" />
          <path d={svgPaths.p2dd90d00} fill="var(--fill-0, #E4EAF6)" id="Vector_2" />
        </g>
      </svg>
    </div>
  );
}

// Fix 3: Notification bell icon — Figma IconNotification frame
// hasUnread: red dot badge is shown only when there are unread notifications
function NotificationIcon({ hasUnread }: { hasUnread: boolean }) {
  return (
    <div className="relative shrink-0 size-[20px]">
      {/* Clapper left */}
      <div className="absolute inset-[68.75%_44.84%_0_23.91%]">
        <svg className="absolute block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 6.25 6.25">
          <path d={svgNotif.p2ba58980} fill="#FFD845" />
        </svg>
      </div>
      {/* Clapper right */}
      <div className="absolute inset-[68.75%_44.84%_0_39.53%]">
        <svg className="absolute block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 3.125 6.25">
          <path d={svgNotif.p26e5800} fill="#FF9D21" />
        </svg>
      </div>
      {/* Bell body left */}
      <div className="absolute inset-[0_20.04%_12.7%_-0.9%]">
        <svg className="absolute block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 16.1719 17.4609">
          <defs>
            <linearGradient gradientUnits="userSpaceOnUse" id="notif_grad" x1="8.08594" x2="8.08594" y1="0" y2="17.4609">
              <stop stopColor="#FFB121" />
            </linearGradient>
          </defs>
          <path d={svgNotif.p444ce00} fill="url(#notif_grad)" />
        </svg>
      </div>
      {/* Bell body right */}
      <div className="absolute inset-[0_20.04%_12.7%_39.53%]">
        <svg className="absolute block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 8.08594 17.4609">
          <path d={svgNotif.p1ca20b00} fill="#FFD845" />
        </svg>
      </div>
      {/* Red dot badge — shown only when unread notifications exist */}
      {hasUnread && (
        <div className="absolute inset-[-5.82%_-5%_40.82%_40%]">
          <svg className="absolute block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 13 13">
            <circle cx="6.5" cy="6.5" fill="#FF3B0A" r="5.75" stroke="#3D494F" strokeWidth="1.5" />
          </svg>
        </div>
      )}
    </div>
  );
}

function NavItems({ activePath }: { activePath: string }) {
  const navigate = useNavigate();
  const hwCtx = useHomeworkSafe();
  const hasUnreadHW = (hwCtx?.unseenCount ?? 0) > 0;
  const notifCount = useNotifCount();
  const userData = useUserSafe();
  const currentLeague = getLeague(userData?.xp ?? 0);

  const isLearningActive = [
    "/lessons", "/modules", "/theory",
    "/lesson-quiz", "/homework",
  ].includes(activePath);

  const isCoursesActive   = activePath === "/" || activePath === "/courses";
  const isProfileActive    = activePath === "/profile";
  const isChallengesActive = activePath === "/challenges";
  const isLeagueActive     = activePath === "/league";

  return (
    <div className="content-stretch flex flex-col gap-[9px] items-start relative shrink-0 w-full">
      {/* Обучение */}
      <div
        className={`h-[41px] relative rounded-[10px] shrink-0 w-[205px] cursor-pointer transition-colors ${isLearningActive ? "bg-[#343e42]" : "hover:bg-[#343e42]"}`}
        onClick={() => navigate("/lessons")}
      >
        <div className="bg-clip-padding border-0 border-[transparent] border-solid content-stretch flex gap-[10px] items-center pl-[12px] relative size-full bg-[#00000000]">
          <div className="relative shrink-0 size-[20px]">
            <div className="bg-clip-padding border-0 border-[transparent] border-solid overflow-clip relative rounded-[inherit] size-full">
              <BookSpine />
            </div>
          </div>
          <p className="font-['Roboto_Condensed:Medium',sans-serif] font-medium leading-[21px] relative shrink-0 text-[#f1f2fb] text-[18px] whitespace-nowrap">Обучение</p>
        </div>
      </div>

      {/* Курсы */}
      <div
        className={`h-[41px] relative rounded-[10px] shrink-0 w-[205px] cursor-pointer transition-colors ${isCoursesActive ? "bg-[#343e42]" : "hover:bg-[#343e42]"}`}
        onClick={() => navigate("/courses")}
      >
        <div className="bg-clip-padding border-0 border-[transparent] border-solid content-stretch flex gap-[10px] items-center pl-[12px] relative size-full bg-[#00000000]">
          <div className="relative shrink-0 size-[20px] flex items-center justify-center">
            <svg width="18" height="18" viewBox="0 0 24 24" fill="none">
              <rect x="3" y="3" width="7.5" height="7.5" rx="2" fill="#FF6B21" />
              <rect x="13.5" y="3" width="7.5" height="7.5" rx="2" fill="#FF9A5C" />
              <rect x="3" y="13.5" width="7.5" height="7.5" rx="2" fill="#FF9A5C" />
              <rect x="13.5" y="13.5" width="7.5" height="7.5" rx="2" fill="#FF6B21" />
            </svg>
          </div>
          <p className="font-['Roboto_Condensed:Medium',sans-serif] font-medium leading-[21px] relative shrink-0 text-[#f1f2fb] text-[18px] whitespace-nowrap">Курсы</p>
        </div>
      </div>

      {/* Вызовы */}
      <div
        className={`h-[41px] relative rounded-[10px] shrink-0 w-[205px] cursor-pointer transition-colors ${isChallengesActive ? "bg-[#343e42]" : "hover:bg-[#343e42]"}`}
        onClick={() => { if (!isChallengesActive) navigate("/challenges"); }}
      >
        <div className="bg-clip-padding border-0 border-[transparent] border-solid content-stretch flex gap-[10px] items-center pl-[12px] relative size-full">
          <div className="relative shrink-0 size-[20px]">
            <div className="bg-clip-padding border-0 border-[transparent] border-solid overflow-clip relative rounded-[inherit] size-full">
              <div className="absolute inset-[54.65%_12.12%_0_50.24%]">
                <svg className="absolute block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 7.52765 9.07098">
                  <path d={svgPaths.p2d3fba00} fill="var(--fill-0, #E5002E)" id="Vector" />
                </svg>
              </div>
              <div className="absolute inset-[54.64%_50.24%_0_12.12%]">
                <svg className="absolute block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 7.52759 9.07134">
                  <path d={svgPaths.pcf0e400} fill="var(--fill-0, #FF6363)" id="Vector" />
                </svg>
              </div>
              <div className="absolute inset-[2.93%_16.43%_29.94%_16.43%]">
                <svg className="absolute block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 13.4261 13.4259">
                  <path d={svgPaths.p1ce2c614} fill="var(--fill-0, #FFF566)" id="Vector" />
                </svg>
              </div>
              <div className="absolute bottom-[29.94%] left-1/2 right-[16.43%] top-[2.93%]">
                <svg className="absolute block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 6.71305 13.4259">
                  <path d={svgPaths.p137fba80} fill="var(--fill-0, #FFCF2C)" id="Vector" />
                </svg>
              </div>
              <div className="absolute inset-[0_13.51%_27.01%_13.51%]">
                <svg className="absolute block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 14.5979 14.5978">
                  <path d={svgPaths.p331e4200} fill="var(--fill-0, #FFC12E)" id="Vector" />
                </svg>
              </div>
              <div className="absolute bottom-[27.01%] left-1/2 right-[13.51%] top-0">
                <svg className="absolute block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 7.29898 14.5978">
                  <path d={svgPaths.p198cc400} fill="var(--fill-0, #FF7403)" id="Vector" />
                </svg>
              </div>
              <div className="absolute inset-[19.89%_46.49%_47.18%_41.87%]">
                <svg className="absolute block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 2.32691 6.58543">
                  <path d={svgPaths.p2e9f1a00} fill="var(--fill-0, #FFB500)" id="Vector" />
                </svg>
              </div>
              <div className="absolute bottom-[47.18%] left-1/2 right-[46.49%] top-[19.89%]">
                <svg className="absolute block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 0.701054 6.58543">
                  <path d={svgPaths.p34a9a000} fill="var(--fill-0, #FF7403)" id="Vector" />
                </svg>
              </div>
            </div>
          </div>
          <p className="font-['Roboto_Condensed:Medium',sans-serif] font-medium leading-[21px] relative shrink-0 text-[#f1f2fb] text-[18px] whitespace-nowrap">Вызовы</p>
        </div>
      </div>

      {/* Лига */}
      <div
        className={`h-[41px] relative rounded-[10px] shrink-0 w-[205px] cursor-pointer transition-colors ${isLeagueActive ? "bg-[#343e42]" : "hover:bg-[#343e42]"}`}
        onClick={() => { if (!isLeagueActive) navigate("/league"); }}
      >
        <div className="bg-clip-padding border-0 border-[transparent] border-solid content-stretch flex gap-[10px] items-center pl-[12px] relative size-full">
          <div className="relative shrink-0 size-[20px] flex items-center justify-center">
            <img src={currentLeague.trophy} width={18} height={18} style={{ objectFit: "contain" }} />
          </div>
          <p className="font-['Roboto_Condensed:Medium',sans-serif] font-medium leading-[21px] relative shrink-0 text-[#f1f2fb] text-[18px] whitespace-nowrap">Лига</p>
        </div>
      </div>

      {/* Профиль */}
      <div
        className={`h-[41px] relative rounded-[10px] shrink-0 w-[205px] cursor-pointer transition-colors ${isProfileActive ? "bg-[#343e42]" : "hover:bg-[#343e42]"}`}
        onClick={() => navigate("/profile")}
      >
        <div className="bg-clip-padding border-0 border-[transparent] border-solid content-stretch flex gap-[10px] items-center pl-[12px] relative size-full">
          <div className="relative shrink-0 size-[20px]">
            <div className="bg-clip-padding border-0 border-[transparent] border-solid overflow-clip relative rounded-[inherit] size-full">
              <div className="absolute inset-[58.62%_5.17%_0_5.17%]">
                <svg className="absolute block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 17.9311 8.27586">
                  <path d={svgPaths.p2b92f300} fill="var(--fill-0, #E6AF78)" id="Vector" />
                </svg>
              </div>
              <div className="absolute inset-[70.47%_5.17%_0_5.17%]">
                <svg className="absolute block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 17.9311 5.90656">
                  <path d={svgPaths.p265d9200} fill="var(--fill-0, #00A091)" id="Vector" />
                </svg>
              </div>
              <div className="absolute inset-[71.29%_34.82%_15.51%_34.67%]">
                <svg className="absolute block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 6.10105 2.64023">
                  <path d={svgPaths.p13982e80} fill="var(--fill-0, #D5DCEC)" id="Vector" />
                </svg>
              </div>
              <div className="absolute inset-[58.62%_34.48%_26.32%_32.99%]">
                <svg className="absolute block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 6.50473 3.01199">
                  <path d={svgPaths.p23dbb100} fill="var(--fill-0, #D29B6E)" id="Vector" />
                </svg>
              </div>
              <div className="absolute inset-[18.97%_27.59%_32.76%_27.59%]">
                <svg className="absolute block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 8.96547 9.65516">
                  <path d={svgPaths.p387b7780} fill="var(--fill-0, #F0C087)" id="Vector" />
                </svg>
              </div>
              <div className="absolute inset-[18.97%_27.59%_32.76%_27.59%]">
                <svg className="absolute block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 8.96555 9.65516">
                  <path d={svgPaths.p35c9f600} fill="var(--fill-0, #E6AF78)" id="Vector" />
                </svg>
              </div>
              <div className="absolute inset-[0_24.14%_62.07%_24.14%]">
                <svg className="absolute block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 10.3448 7.58621">
                  <path d={svgPaths.p26bb8400} fill="var(--fill-0, #5A4146)" id="Vector" />
                </svg>
              </div>
              <div className="absolute bottom-1/2 left-[68.71%] right-[24.14%] top-[36.21%]">
                <svg className="absolute block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 1.42942 2.75859">
                  <path d={svgPaths.p38f9b580} fill="var(--fill-0, #F0C087)" id="Vector" />
                </svg>
              </div>
              <div className="absolute bottom-1/2 left-[24.14%] right-[68.71%] top-[36.21%]">
                <svg className="absolute block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 1.42941 2.75859">
                  <path d={svgPaths.p12e8bd00} fill="var(--fill-0, #E6AF78)" id="Vector" />
                </svg>
              </div>
              <SidebarBody />
              <SidebarHair />
            </div>
          </div>
          <p className="font-['Roboto_Condensed:Medium',sans-serif] font-medium leading-[21px] relative shrink-0 text-[#f1f2fb] text-[18px] whitespace-nowrap">Профиль</p>
        </div>
      </div>

      {/* Fix 3: Уведомления — no background in default state, only on hover/active */}
      <div
        className={`h-[41px] relative rounded-[10px] shrink-0 w-[205px] cursor-pointer transition-colors ${activePath === "/notifications" ? "bg-[#343e42]" : "hover:bg-[#343e42]"}`}
        onClick={() => navigate("/notifications")}
      >
        <div className="content-stretch flex gap-[10px] items-center pl-[12px] relative size-full">
          <NotificationIcon hasUnread={hasUnreadHW} />
          <p className="font-['Roboto_Condensed:Medium',sans-serif] font-medium leading-[21px] relative shrink-0 text-[#f1f2fb] text-[18px] whitespace-nowrap">Уведомления</p>
          {notifCount > 0 && (
            <div
              className="flex items-center justify-center rounded-full min-w-[18px] h-[18px] px-[4px]"
              style={{ background: "#FF6B21" }}
            >
              <span className="font-['Roboto_Condensed:Medium',sans-serif] font-medium text-[10.5px] leading-none" style={{ color: '#282F33' }}>
                {notifCount > 99 ? "99+" : notifCount}
              </span>
            </div>
          )}
        </div>
      </div>

    </div>
  );
}

function SidebarFooter() {
  const navigate = useNavigate();
  const [showReport, setShowReport] = useState(false);
  const handleResetData = () => {
    if (confirm('Вы уверены, что хотите сбросить весь прогресс? Это действие нельзя отменить.')) {
      try {
        localStorage.clear();
        window.location.reload();
      } catch (error) {
        console.error('Failed to clear localStorage:', error);
      }
    }
  };

  return (
    <div className="content-stretch flex flex-col gap-[20px] items-start relative shrink-0 w-full mx-[0px] my-[20px]">
      {/* О нас / Сбросить прогресс */}
      <div className="content-stretch flex flex-col gap-[10px] items-start relative shrink-0 w-full">
        {/* О нас */}
        <div onClick={() => navigate("/about")} className="h-[44px] relative rounded-[14px] shrink-0 w-full cursor-pointer hover:bg-[#343e42] transition-colors mt-[-10px]">
          <div className="flex flex-row items-center size-full m-[0px]">
            <div className="content-stretch flex items-center relative size-full pl-[12px] pr-[0px] py-[0px] m-[0px]">
              <p className="font-['Roboto_Condensed:Medium',sans-serif] font-medium leading-[21px] relative shrink-0 text-[#f2f4fb] text-[18px] whitespace-nowrap">О нас</p>
            </div>
          </div>
        </div>
        {/* Сбросить прогресс */}
        <div
          onClick={handleResetData}
          className="h-[44px] relative rounded-[14px] shrink-0 w-full cursor-pointer hover:bg-[#3d2828] transition-colors"
        >
          <div className="flex flex-row items-center size-full m-[0px]">
            <div className="content-stretch flex items-center relative size-full pl-[12px] pr-[0px] py-[0px] m-[0px]">
              <p className="font-['Roboto_Condensed:Medium',sans-serif] font-medium leading-[21px] relative shrink-0 text-[#ff6b6b] text-[18px] whitespace-nowrap">Сбросить прогресс</p>
            </div>
          </div>
        </div>
      </div>

      {/* Написать отзыв — одна кнопка с иконкой подарка */}
      <div className="group flex items-center gap-[8px] h-[40px] px-[12px] rounded-[12px] shrink-0 w-full cursor-pointer select-none hover:bg-[#343e42] transition-colors duration-150">
        <div className="relative shrink-0 size-[20px] flex items-center justify-center">
          <FreeIconGift />
        </div>
        <p className="font-['Roboto_Condensed:Medium',sans-serif] font-medium leading-[20px] text-[#f1f2fb] text-[16px] whitespace-nowrap">Написать отзыв</p>
      </div>

      {/* Сообщить об ошибке */}
      <div
        onClick={() => setShowReport(true)}
        className="group flex items-center gap-[8px] h-[40px] px-[12px] rounded-[12px] shrink-0 w-full cursor-pointer select-none hover:bg-[#343e42] transition-colors duration-150"
      >
        <svg width="18" height="18" viewBox="0 0 32 32" fill="none" className="shrink-0 text-[#798589] group-hover:text-[#a0a3ab] transition-colors duration-150">
          <path d="m27 5h-9c0-1.6542969-1.3457031-3-3-3h-8c-.5522461 0-1 .4477539-1 1v16 10c0 .5522461.4477539 1 1 1s1-.4477539 1-1v-9h8c0 1.6542969 1.3457031 3 3 3h8c1.6542969 0 3-1.3457031 3-3v-12c0-1.6542969-1.3457031-3-3-3z" fill="currentColor" />
        </svg>
        <p className="font-['Roboto_Condensed:Medium',sans-serif] font-medium leading-[20px] text-[16px] text-[#798589] group-hover:text-[#a0a3ab] transition-colors duration-150 whitespace-nowrap">
          Сообщить об ошибке
        </p>
      </div>

      {showReport && <ReportErrorModal onClose={() => setShowReport(false)} />}
    </div>
  );
}

// ─── Compact Sidebar (tablet icon-only mode) ─────────────────────────────────

function CompactSidebar({ activePath }: { activePath: string }) {
  const navigate = useNavigate();
  const userData = useUserSafe();
  const notifCount = useNotifCount();
  const hasUnread = notifCount > 0;
  const currentLeague = getLeague(userData?.xp ?? 0);

  const isLearningActive = [
    "/lessons", "/modules", "/theory", "/lesson-quiz", "/homework",
  ].includes(activePath);
  const isChallengesActive = activePath === "/challenges";
  const isLeagueActive     = activePath === "/league";
  const isProfileActive    = activePath === "/profile";
  const isNotifActive      = activePath === "/notifications";

  // Plain icon button — NO circular background, just a subtle highlight on active/hover
  const iconBtn = (isActive: boolean, onClick: () => void, label: string, icon: React.ReactNode) => (
    <div
      title={label}
      onClick={onClick}
      className={`flex items-center justify-center w-[52px] h-[52px] rounded-[10px] cursor-pointer transition-colors ${
        isActive ? "bg-[#282f33]" : "hover:bg-white/5"
      }`}
    >
      {icon}
    </div>
  );

  // Mobile-style icon at a fixed size (matches mobile bottom-nav rendering)
  const bookIcon = (
    <div className="relative shrink-0" style={{ width: 26, height: 26 }}>
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
  );

  const medalIcon = (
    <div className="relative shrink-0" style={{ width: 26, height: 26 }}>
      <div className="overflow-clip relative rounded-[inherit] size-full">
        <div className="absolute inset-[54.65%_12.12%_0_50.24%]"><svg className="absolute block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 14.6787 17.6881"><path d={svgDivPaths.p3fe9a500} fill="#E5002E" /></svg></div>
        <div className="absolute inset-[54.64%_50.24%_0_12.12%]"><svg className="absolute block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 14.6786 17.6888"><path d={svgDivPaths.pa3a3b80}  fill="#FF6363" /></svg></div>
        <div className="absolute inset-[2.93%_16.43%_29.94%_16.43%]"><svg className="absolute block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 26.1805 26.1802"><path d={svgDivPaths.p395d800}  fill="#FFF566" /></svg></div>
        <div className="absolute bottom-[29.94%] left-1/2 right-[16.43%] top-[2.93%]"><svg className="absolute block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 13.0902 26.1801"><path d={svgDivPaths.p2029d700} fill="#FFCF2C" /></svg></div>
        <div className="absolute inset-[0_13.51%_27.01%_13.51%]"><svg className="absolute block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 28.4655 28.4652"><path d={svgDivPaths.p1bac4ff0} fill="#FFC12E" /></svg></div>
        <div className="absolute bottom-[27.01%] left-1/2 right-[13.51%] top-0"><svg className="absolute block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 14.2328 28.4653"><path d={svgDivPaths.pa607100}  fill="#FF7403" /></svg></div>
        <div className="absolute inset-[19.89%_46.49%_47.18%_41.87%]"><svg className="absolute block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 4.53741 12.8414"><path d={svgDivPaths.p21cc4f80} fill="#FFB500" /></svg></div>
        <div className="absolute bottom-[47.18%] left-1/2 right-[46.49%] top-[19.89%]"><svg className="absolute block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 1.36703 12.8414"><path d={svgDivPaths.p37497580} fill="#FF7403" /></svg></div>
      </div>
    </div>
  );

  const profileIcon = (
    <div className="relative shrink-0" style={{ width: 26, height: 26 }}>
      <div className="overflow-clip relative rounded-[inherit] size-full">
        <div className="absolute inset-[58.62%_5.17%_0_5.17%]"><svg className="absolute block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 34.965 16.1377"><path d={svgDivPaths.p313c4f00}  fill="#E6AF78" /></svg></div>
        <div className="absolute inset-[70.47%_5.17%_0_5.17%]"><svg className="absolute block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 34.965 11.5176"><path d={svgDivPaths.p32673680}  fill="#00A091" /></svg></div>
        <div className="absolute inset-[18.97%_27.59%_32.76%_27.59%]"><svg className="absolute block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 17.4824 18.8272"><path d={svgDivPaths.p370e9800}  fill="#F0C087" /></svg></div>
        <div className="absolute inset-[18.97%_27.59%_32.76%_27.59%]"><svg className="absolute block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 17.4825 18.8272"><path d={svgDivPaths.p5fbfb00}   fill="#E6AF78" /></svg></div>
        <div className="absolute inset-[0_24.14%_62.07%_24.14%]"><svg className="absolute block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 20.1721 14.7929"><path d={svgDivPaths.p296f01f0}  fill="#5A4146" /></svg></div>
        <div className="absolute inset-[70.47%_5.17%_0_5.17%]"><svg className="absolute block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 34.965 11.5152"><path d={svgDivPaths.pcaeea00}   fill="#009182" /><path d={svgDivPaths.pbe76f0} fill="#009182" /><path d={svgDivPaths.p3474c480} fill="#009182" /></svg></div>
        <div className="absolute inset-[66.41%_29.31%_11.74%_29.31%]"><svg className="absolute block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 16.1377 8.52391"><path d={svgDivPaths.p3bbe9200} fill="#E4EAF6" /><path d={svgDivPaths.p677c00} fill="#E4EAF6" /></svg></div>
      </div>
    </div>
  );

  const notifIcon = (
    <div className="relative shrink-0" style={{ width: 26, height: 26 }}>
      <div className="overflow-clip relative rounded-[inherit] size-full">
        <div className="absolute inset-[4.76%_19.08%_12.09%_3.91%]"><svg className="absolute block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 29.6484 32.0117"><path d={svgDivPaths.p352d5680} fill="url(#notif_compact_grad)" /><defs><linearGradient id="notif_compact_grad" gradientUnits="userSpaceOnUse" x1="14.8242" x2="14.8242" y1="0" y2="32.0117"><stop stopColor="#FFB121" /></linearGradient></defs></svg></div>
        <div className="absolute inset-[4.76%_19.08%_12.09%_42.41%]"><svg className="absolute block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 14.8242 32.0117"><path d={svgDivPaths.p1684a400} fill="#FFD845" /></svg></div>
        <div className="absolute inset-[70.24%_42.71%_0_27.53%]"><svg className="absolute block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 11.4583 11.4583"><path d={svgDivPaths.p8de4700} fill="#FFD845" /></svg></div>
        <div className="absolute inset-[70.24%_42.71%_0_42.41%]"><svg className="absolute block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 5.72917 11.4583"><path d={svgDivPaths.p5d68500} fill="#FF9D21" /></svg></div>
        {/* Orange dot — shown when there are unread notifications */}
        {hasUnread && (
          <div className="absolute inset-[-0.78%_-4.76%_38.88%_42.86%]">
            <svg className="absolute block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 23.8333 23.8333">
              <circle cx="11.9167" cy="11.9167" fill="#FF6B21" r="10.5417" stroke="#3D494F" strokeWidth="2.75" />
            </svg>
          </div>
        )}
      </div>
    </div>
  );

  return (
    <div
      className="absolute left-0 top-0 bottom-0 flex flex-col items-center gap-[0]"
      style={{ width: '84px', borderRight: '1px solid #394144', paddingTop: 18, paddingBottom: 12, overflow: 'visible' }}
    >
      {/* Скиллум icon logo */}
      <div className="mb-[24px] flex items-center justify-center">
        <SkillumIconOnly />
      </div>

      {/* Nav icons — plain, no circular backgrounds */}
      <div className="flex flex-col gap-[10px] items-center w-full">
        {iconBtn(isLearningActive,   () => navigate("/lessons"),       "Обучение",    bookIcon)}
        {iconBtn(isChallengesActive, () => navigate("/challenges"),    "Вызовы",      medalIcon)}
        {iconBtn(isLeagueActive,     () => navigate("/league"),        "Лига",        <img src={currentLeague.trophy} width={22} height={22} style={{ objectFit: "contain" }} />)}
        {iconBtn(isProfileActive,    () => navigate("/profile"),       "Профиль",     profileIcon)}
        {iconBtn(isNotifActive,      () => navigate("/notifications"), "Уведомления", notifIcon)}
      </div>

      {/* Spacer */}
      <div className="flex-1" />

      {/* Bottom utility circles: Figma / Lightning / Flag / Gift */}
      <CompactWidgets />
    </div>
  );
}

interface SidebarProps {
  activePath?: string;
  compact?: boolean;
}

export default function Sidebar({ activePath = "/", compact = false }: SidebarProps) {
  if (compact) {
    return <CompactSidebar activePath={activePath} />;
  }

  return (
    <div
      className="absolute flex flex-col items-start left-0 top-0 bottom-0 pl-[20px] pr-[11px] pt-[20px] pb-[10px] w-[250px]"
      style={{ borderRight: '1px solid #394144' }}
    >
      <div className="content-stretch flex flex-col flex-1 items-start justify-between min-h-px min-w-px relative w-full">
        <div className="content-stretch flex flex-col gap-[30px] items-start relative shrink-0 w-[205px]">
          <SkillumLogo />
          <NavItems activePath={activePath} />
        </div>
        <SidebarFooter />
      </div>
    </div>
  );
}