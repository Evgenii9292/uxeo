import React, { useState, useEffect, useCallback } from "react";
import { useNavigate } from "react-router";
import svgPaths from "../../imports/svg-pt1cecsedx";
import svgNotif from "../../imports/svg-r42rgjsncr";
import svgDivPaths from "../../imports/svg-1vbml8i98m";
import FreeIconGift from "../../imports/FreeIconGift81465531";
import { CompactWidgets } from "./RightWidgets";
import Group1 from "../../imports/Group481513";
import imgVector from "figma:asset/fbd1a4de6983385b09d8ab2cc1ccfe34c3361ab2.png";
import skillumLongLogo from "../../assets/skillum-logo-long.svg";
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
    <img
      src={skillumLongLogo}
      alt="Skillum"
      className="block h-auto w-[162px]"
      draggable={false}
    />
  );
}

/** Скиллум logo — compact sidebar (icon only) */
function SkillumIconOnly() {
  return (
    <svg width="36" height="32" viewBox="0 0 88 78" fill="none" xmlns="http://www.w3.org/2000/svg">
      <path d="M73 2.27175e-05L15 0.000110559C6.71572 0.000123105 0 6.71585 0 15.0001V63.0001C0 71.2844 6.70996 78.0001 14.9942 78.0001H73.001C81.2852 78.0001 88 71.2844 88 63.0001V15C88 6.71574 81.2843 1.0171e-05 73 2.27175e-05Z" fill="#354146"/>
      <path d="M48.1299 60.4734C51.6586 63.2591 55.8476 65.4689 60.458 66.9766C68.2171 69.5139 75 62.6424 75 54.479L75 24.0414C75 15.8779 68.2171 9.00647 60.458 11.5438C55.8477 13.0514 51.6586 15.2612 48.1299 18.047C44.6013 20.8327 41.8023 24.1399 39.8926 27.7797C37.9829 31.4194 37 35.3205 37 39.2602C37 43.1998 37.9829 47.1009 39.8926 50.7407C41.8023 54.3804 44.6013 57.6876 48.1299 60.4734Z" fill="#64B6FF"/>
      <path d="M41 59.9999C37.5642 62.8786 32.6483 65.3426 28.1593 66.9005C20.6349 69.5118 14 62.8036 14 54.8391V23.665C14 15.7095 20.6177 9.01098 28.1593 11.5438C32.6483 13.0515 36.7272 15.2612 40.163 18.047C43.5987 20.8328 46.3241 24.1399 48.1835 27.7797C50.043 31.4195 51 35.3206 51 39.2602C50.5 48.9999 44.4358 57.1213 41 59.9999Z" fill="#FF6B21"/>
      <mask id="mask0_icon_compact" style={{maskType:"alpha"}} maskUnits="userSpaceOnUse" x="37" y="21" width="15" height="36">
        <path d="M38.1707 46.9811C38.8742 49.4289 39.9055 51.6531 41.2055 53.5266C42.0725 54.7761 43.0477 55.8532 44.105 56.733C53.605 43.7601 53.105 32.2601 44.105 21.7872C43.0477 22.6669 42.0725 23.7441 41.2055 24.9935C39.9055 26.867 38.8742 29.0912 38.1707 31.5391C37.4671 33.9869 37.105 36.6105 37.105 39.2601C37.105 41.9096 37.4671 44.5332 38.1707 46.9811Z" fill="#D9D9D9"/>
      </mask>
      <g mask="url(#mask0_icon_compact)">
        <path d="M75 54.479C75 62.6424 68.2171 69.5139 60.458 66.9766C55.8476 65.4689 51.6586 63.2591 48.1299 60.4734C44.6013 57.6876 41.8023 54.3804 39.8926 50.7407C37.9829 47.1009 37 43.1998 37 39.2602L75 39.2602L75 54.479Z" fill="#FEBC4E"/>
        <path d="M75 24.0414C75 15.8779 68.2171 9.00647 60.458 11.5438C55.8477 13.0514 51.6586 15.2612 48.1299 18.047C44.6013 20.8327 41.8023 24.1399 39.8926 27.7797C37.9829 31.4194 37 35.3205 37 39.2602L75 39.2602V24.0414Z" fill="#FEBC4E"/>
      </g>
    </svg>
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
      <p className="font-['Roboto_Condensed:Medium',sans-serif] font-medium leading-[27.5px] relative shrink-0 text-[#f4f5fc] text-[32px] w-[91.837px]">Skillum</p>
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
        className={`h-[41px] relative rounded-[10px] shrink-0 w-[205px] cursor-pointer ${isLearningActive ? "bg-[#343e42]" : "hover:bg-[#343e42]"}`}
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
        className={`h-[41px] relative rounded-[10px] shrink-0 w-[205px] cursor-pointer ${isCoursesActive ? "bg-[#343e42]" : "hover:bg-[#343e42]"}`}
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
        className={`h-[41px] relative rounded-[10px] shrink-0 w-[205px] cursor-pointer ${isChallengesActive ? "bg-[#343e42]" : "hover:bg-[#343e42]"}`}
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
        className={`h-[41px] relative rounded-[10px] shrink-0 w-[205px] cursor-pointer ${isLeagueActive ? "bg-[#343e42]" : "hover:bg-[#343e42]"}`}
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
        className={`h-[41px] relative rounded-[10px] shrink-0 w-[205px] cursor-pointer ${isProfileActive ? "bg-[#343e42]" : "hover:bg-[#343e42]"}`}
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
        className={`h-[41px] relative rounded-[10px] shrink-0 w-[205px] cursor-pointer ${activePath === "/notifications" ? "bg-[#343e42]" : "hover:bg-[#343e42]"}`}
        onClick={() => navigate("/notifications")}
      >
        <div className="content-stretch flex gap-[10px] items-center pl-[12px] relative size-full">
          <NotificationIcon hasUnread={hasUnreadHW} />
          <p className="font-['Roboto_Condensed:Medium',sans-serif] font-medium leading-[21px] relative shrink-0 text-[#f1f2fb] text-[18px] whitespace-nowrap">Уведомления</p>
          {notifCount > 0 && (
            <span className="font-['Roboto_Condensed:Medium',sans-serif] font-medium text-[12px] leading-none" style={{ color: "#FF6B21", marginLeft: "-4px", marginTop: "-2px" }}>
              {notifCount > 99 ? "99+" : notifCount}
            </span>
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
        <div onClick={() => navigate("/about")} className="h-[44px] relative rounded-[14px] shrink-0 w-full cursor-pointer hover:bg-[#343e42] mt-[-10px]">
          <div className="flex flex-row items-center size-full m-[0px]">
            <div className="content-stretch flex items-center relative size-full pl-[12px] pr-[0px] py-[0px] m-[0px]">
              <p className="font-['Roboto_Condensed:Medium',sans-serif] font-medium leading-[21px] relative shrink-0 text-[#f2f4fb] text-[18px] whitespace-nowrap">О нас</p>
            </div>
          </div>
        </div>
        {/* Сбросить прогресс */}
        <div
          onClick={handleResetData}
          className="h-[44px] relative rounded-[14px] shrink-0 w-full cursor-pointer hover:bg-[#3d2828]"
        >
          <div className="flex flex-row items-center size-full m-[0px]">
            <div className="content-stretch flex items-center relative size-full pl-[12px] pr-[0px] py-[0px] m-[0px]">
              <p className="font-['Roboto_Condensed:Medium',sans-serif] font-medium leading-[21px] relative shrink-0 text-[#ff6b6b] text-[18px] whitespace-nowrap">Сбросить прогресс</p>
            </div>
          </div>
        </div>
      </div>

      {/* Написать отзыв — одна кнопка с иконкой подарка */}
      <div className="group flex items-center gap-[8px] h-[40px] px-[12px] rounded-[12px] shrink-0 w-full cursor-pointer select-none hover:bg-[#343e42]">
        <div className="relative shrink-0 size-[20px] flex items-center justify-center">
          <FreeIconGift />
        </div>
        <p className="font-['Roboto_Condensed:Medium',sans-serif] font-medium leading-[20px] text-[#f1f2fb] text-[16px] whitespace-nowrap">Написать отзыв</p>
      </div>

      {/* Сообщить об ошибке */}
      <div
        onClick={() => setShowReport(true)}
        className="group flex items-center gap-[8px] h-[40px] px-[12px] rounded-[12px] shrink-0 w-full cursor-pointer select-none hover:bg-[#343e42]"
      >
        <svg width="18" height="18" viewBox="0 0 32 32" fill="none" className="shrink-0 text-[#798589] group-hover:text-[#a0a3ab]">
          <path d="m27 5h-9c0-1.6542969-1.3457031-3-3-3h-8c-.5522461 0-1 .4477539-1 1v16 10c0 .5522461.4477539 1 1 1s1-.4477539 1-1v-9h8c0 1.6542969 1.3457031 3 3 3h8c1.6542969 0 3-1.3457031 3-3v-12c0-1.6542969-1.3457031-3-3-3z" fill="currentColor" />
        </svg>
        <p className="font-['Roboto_Condensed:Medium',sans-serif] font-medium leading-[20px] text-[16px] text-[#798589] group-hover:text-[#a0a3ab] whitespace-nowrap">
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
  const isCoursesActive    = activePath === "/" || activePath === "/courses";
  const isChallengesActive = activePath === "/challenges";
  const isLeagueActive     = activePath === "/league";
  const isProfileActive    = activePath === "/profile";
  const isNotifActive      = activePath === "/notifications";

  // Plain icon button — NO circular background, just a subtle highlight on active/hover
  const iconBtn = (isActive: boolean, onClick: () => void, label: string, icon: React.ReactNode) => (
    <div
      title={label}
      onClick={onClick}
      className={`flex items-center justify-center w-[52px] h-[52px] rounded-[10px] cursor-pointer ${
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
              <circle cx="11.9167" cy="11.9167" fill="#FF6B21" r="10.5417" stroke="#282F33" strokeWidth="2.75" />
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
        {iconBtn(isCoursesActive,    () => navigate("/courses"),       "Курсы",       <svg width="26" height="26" viewBox="0 0 29 29" fill="none"><rect x="3" y="3" width="10" height="10.5" rx="3" fill={isCoursesActive ? "#FF6B21" : "#4E6068"} /><rect x="16" y="3" width="10" height="10.5" rx="3" fill={isCoursesActive ? "#FF9A5C" : "#3A4A52"} /><rect x="3" y="15.5" width="10" height="10.5" rx="3" fill={isCoursesActive ? "#FF9A5C" : "#3A4A52"} /><rect x="16" y="15.5" width="10" height="10.5" rx="3" fill={isCoursesActive ? "#FF6B21" : "#4E6068"} /></svg>)}
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
