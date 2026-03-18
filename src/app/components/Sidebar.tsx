import React from "react";
import { useNavigate } from "react-router";
import svgPaths from "../../imports/svg-pt1cecsedx";
import svgNotif from "../../imports/svg-r42rgjsncr";
import svgDivPaths from "../../imports/svg-1vbml8i98m";
import FreeIconGift from "../../imports/FreeIconGift81465531";
import { CompactWidgets } from "./RightWidgets";
import Group1 from "../../imports/Group481513";
import imgVector from "figma:asset/fbd1a4de6983385b09d8ab2cc1ccfe34c3361ab2.png";

/** Скиллум logo — full sidebar (scaled ~131 × 44 px) */
function SkillumLogo() {
  return (
    <div style={{ width: 131, height: 44, position: "relative", overflow: "hidden" }}>
      <div style={{ position: "absolute", width: 160, height: 54, transformOrigin: "left top", transform: "scale(0.82)" }}>
        <div style={{ position: "relative", width: "100%", height: "100%" }}>
          <Group1 />
        </div>
      </div>
    </div>
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
      <p className="font-['Roboto_Condensed:Bold',sans-serif] font-bold leading-[27.5px] relative shrink-0 text-[#f4f5fc] text-[32px] w-[91.837px]">UXEO</p>
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

  const isLearningActive = [
    "/", "/courses", "/modules", "/lessons", "/theory",
    "/lesson-quiz", "/quiz", "/welcome",
  ].includes(activePath);

  const isCoursesActive   = activePath === "/";
  const isProfileActive    = activePath === "/profile";
  const isChallengesActive = activePath === "/challenges";

  return (
    <div className="content-stretch flex flex-col gap-[9px] items-start relative shrink-0 w-full">
      {/* Обучение */}
      <div
        className={`h-[41px] relative rounded-[15px] shrink-0 w-[205px] cursor-pointer transition-colors ${isLearningActive ? "bg-[#2d363a]" : "hover:bg-[#2d363a]"}`}
        onClick={() => { if (!isLearningActive) navigate("/lessons"); }}
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
        className={`h-[41px] relative rounded-[15px] shrink-0 w-[205px] cursor-pointer transition-colors ${isCoursesActive ? "bg-[#2d363a]" : "hover:bg-[#2d363a]"}`}
        onClick={() => { if (!isCoursesActive) navigate("/"); }}
      >
        <div className="bg-clip-padding border-0 border-[transparent] border-solid content-stretch flex gap-[10px] items-center pl-[12px] relative size-full bg-[#00000000]">
          <div className="relative shrink-0 size-[20px] flex items-center justify-center">
            <svg width="18" height="18" viewBox="0 0 18 18" fill="none">
              <rect x="0" y="0" width="8" height="8" rx="2" fill={isCoursesActive ? "#f1f2fb" : "#798489"} />
              <rect x="10" y="0" width="8" height="8" rx="2" fill={isCoursesActive ? "#f1f2fb" : "#798489"} />
              <rect x="0" y="10" width="8" height="8" rx="2" fill={isCoursesActive ? "#f1f2fb" : "#798489"} />
              <rect x="10" y="10" width="8" height="8" rx="2" fill={isCoursesActive ? "#f1f2fb" : "#798489"} />
            </svg>
          </div>
          <p className="font-['Roboto_Condensed:Medium',sans-serif] font-medium leading-[21px] relative shrink-0 text-[#f1f2fb] text-[18px] whitespace-nowrap">Курсы</p>
        </div>
      </div>

      {/* Вызовы */}
      <div
        className={`h-[41px] relative rounded-[20px] shrink-0 w-[205px] cursor-pointer transition-colors ${isChallengesActive ? "bg-[#2d363a]" : "hover:bg-[#2d363a]"}`}
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

      {/* Профиль */}
      <div
        className={`h-[41px] relative rounded-[20px] shrink-0 w-[205px] cursor-pointer transition-colors ${isProfileActive ? "bg-[#2d363a]" : "hover:bg-[#2d363a]"}`}
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
        className={`h-[41px] relative rounded-[20px] shrink-0 w-[205px] cursor-pointer transition-colors ${activePath === "/notifications" ? "bg-[#2d363a]" : "hover:bg-[#2d363a]"}`}
        onClick={() => navigate("/notifications")}
      >
        <div className="content-stretch flex gap-[10px] items-center pl-[12px] relative size-full">
          <NotificationIcon hasUnread={true} />
          <p className="font-['Roboto_Condensed:Medium',sans-serif] font-medium leading-[21px] relative shrink-0 text-[#f1f2fb] text-[18px] whitespace-nowrap">Уведомления</p>
        </div>
      </div>
    </div>
  );
}

function SidebarFooter() {
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
      {/* О проекте / Сбросить прогресс / Написать нам */}
      <div className="content-stretch flex flex-col gap-[10px] items-start relative shrink-0 w-full">
        {/* О проекте */}
        <div onClick={() => navigate("/about")} className="h-[44px] relative rounded-[14px] shrink-0 w-full cursor-pointer hover:bg-[#343e42] transition-colors mt-[-10px]">
          <div className="flex flex-row items-center size-full m-[0px]">
            <div className="content-stretch flex items-center relative size-full pl-[12px] pr-[0px] py-[0px] m-[0px]">
              <p className="font-['Roboto_Condensed:Medium',sans-serif] font-medium leading-[21px] relative shrink-0 text-[#f2f4fb] text-[18px] whitespace-nowrap">О проекте</p>
            </div>
          </div>
        </div>
        {/* Сросить прогресс */}
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
        {/* Написать нам */}
        <div className="group bg-[#343e42] content-stretch flex h-[40.962px] items-center justify-center px-[9.808px] py-[0.577px] relative rounded-[13.846px] shrink-0 w-[165px] cursor-pointer select-none hover:translate-y-[1.5px] active:translate-y-[2.885px] transition-transform duration-75">
          <div aria-hidden="true" className="absolute border-[#57646a] border-[0.577px] border-solid inset-0 pointer-events-none shadow-[0px_2.885px_0px_0px_black] group-hover:shadow-[0px_1.4px_0px_0px_black] group-active:shadow-none transition-shadow duration-75 rounded-[10px]" />
          <p className="font-['Roboto_Condensed:Bold',sans-serif] font-bold leading-[15.865px] relative shrink-0 text-[#f4f5fc] text-[18.462px] whitespace-nowrap">Написать нам</p>
        </div>
      </div>

      {/* Fix 1 & 4: Feedback card — proper background, border-radius, padding, spacing */}
      <div className="rounded-[15px] shrink-0 w-full" style={{ background: "#2F3A3E" }}>
        <div className="flex flex-col gap-[10px] items-start p-[14px] w-full">
          {/* Gift icon + title */}
          <div className="flex gap-[8px] items-center relative shrink-0" title="Написать отзыв">
            <div className="relative shrink-0 size-[20px] flex items-center justify-center">
              <FreeIconGift />
            </div>
            <p className="font-['Roboto_Condensed:Bold',sans-serif] font-bold leading-[20px] relative shrink-0 text-[#f1f2fb] text-[16px] whitespace-nowrap">
              Оставь отзыв о UXEO
            </p>
          </div>
          {/* Subtitle */}
          <p className="font-['Roboto_Condensed:Medium',sans-serif] font-medium leading-[18px] relative shrink-0 text-[#798589] text-[14px]">
            И получи{" "}
            <span className="text-[#ff6b21]">месяц</span>
            {" "}бесплатно
          </p>
          {/* "Написать отзыв" button — secondary style: page-bg background, lower visual priority */}
          <div className="group content-stretch flex h-[36px] items-center justify-center relative rounded-[10px] shrink-0 w-full cursor-pointer select-none hover:translate-y-[1.5px] active:translate-y-[2.5px] transition-transform duration-75" style={{ background: '#2D363A' }}>
            <div aria-hidden="true" className="absolute border-[#57646a] border-[0.5px] border-solid inset-0 pointer-events-none rounded-[10px] shadow-[0px_2.5px_0px_0px_black] group-hover:shadow-[0px_1px_0px_0px_black] group-active:shadow-none transition-shadow duration-75" />
            <p className="font-['Roboto_Condensed:Medium',sans-serif] font-medium leading-[15px] relative shrink-0 text-[#98a0a8] text-[16px] whitespace-nowrap">Написать отзыв</p>
          </div>
        </div>
      </div>

      {/* Сообщить об ошибке */}
      <div className="relative shrink-0 w-full">
        <div className="flex flex-row items-center justify-center size-full">
          <div className="content-stretch flex items-center justify-center px-[15px] relative w-full">
            <p className="flex-[1_0_0] font-['Roboto_Condensed:Medium',sans-serif] font-medium h-[13.702px] leading-[20px] min-h-px min-w-px relative text-[16px] text-[#798589] mx-[0px] my-[5px] cursor-pointer hover:text-[#a0a3ab] transition-colors duration-150">Сообщить об ошибке</p>
          </div>
        </div>
      </div>
    </div>
  );
}

// ─── Compact Sidebar (tablet icon-only mode) ─────────────────────────────────

function CompactSidebar({ activePath }: { activePath: string }) {
  const navigate = useNavigate();

  const isLearningActive = [
    "/", "/courses", "/modules", "/lessons", "/theory",
    "/lesson-quiz", "/quiz", "/welcome",
  ].includes(activePath);
  const isChallengesActive = activePath === "/challenges";
  const isProfileActive    = activePath === "/profile";
  const isNotifActive      = activePath === "/notifications";

  // Plain icon button — NO circular background, just a subtle highlight on active/hover
  const iconBtn = (isActive: boolean, onClick: () => void, label: string, icon: React.ReactNode) => (
    <div
      title={label}
      onClick={onClick}
      className={`flex items-center justify-center w-[52px] h-[52px] rounded-[10px] cursor-pointer transition-colors ${
        isActive ? "bg-[#2d363a]" : "hover:bg-white/5"
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
        <div className="absolute inset-[-0.78%_-4.76%_38.88%_42.86%]">
          <svg className="absolute block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 23.8333 23.8333">
            <circle cx="11.9167" cy="11.9167" fill="#FF3B0A" r="10.5417" stroke="#3D494F" strokeWidth="2.75" />
          </svg>
        </div>
      </div>
    </div>
  );

  return (
    <div
      className="absolute left-0 top-0 bottom-0 flex flex-col items-center py-[18px] gap-[0]"
      style={{ width: '84px', borderRight: '1px solid #394144' }}
    >
      {/* Скиллум icon logo */}
      <div className="mb-[24px] flex items-center justify-center">
        <SkillumIconOnly />
      </div>

      {/* Nav icons — plain, no circular backgrounds */}
      <div className="flex flex-col gap-[10px] items-center w-full">
        {iconBtn(isLearningActive,   () => navigate("/lessons"),          "Обучение",    bookIcon)}
        {iconBtn(isChallengesActive, () => navigate("/challenges"),    "Вызовы",      medalIcon)}
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
        <div className="content-stretch flex flex-col gap-[50px] items-start relative shrink-0 w-[205px]">
          <SkillumLogo />
          <NavItems activePath={activePath} />
        </div>
        <SidebarFooter />
      </div>
    </div>
  );
}