import { useState } from "react";
import type { ReactNode } from "react";
import { useNavigate } from "react-router";
import Layout from "../components/Layout";
import { ChallengePhone1, ChallengePhone2, ChallengePhone3 } from "../../imports/Frame481451";
import svgCardPaths from "../../imports/svg-u7gh1bm86c";
import { useWindowWidth } from "../hooks/useWindowWidth";

// ── Icons ─────────────────────────────────────────────────────────────────────

function IconSandClock() {
  return (
    <div className="overflow-clip relative shrink-0 size-[14px]">
      <div className="absolute inset-[0_11.67%_0_11.66%]">
        <svg className="absolute block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 10.7333 14">
          <path d={svgCardPaths.p11af9000} fill="var(--fill-0, #F1F2FB)" />
        </svg>
      </div>
    </div>
  );
}

function IconFace() {
  return (
    <div className="overflow-clip relative shrink-0 size-[14px]">
      <div className="absolute bottom-[37.5%] left-[27.08%] right-[60.42%] top-1/2">
        <svg className="absolute block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 1.75 1.75">
          <path d={svgCardPaths.p1388cf00} fill="var(--fill-0, #F1F2FB)" />
        </svg>
      </div>
      <div className="absolute inset-[2.08%_0_4.17%_0]">
        <svg className="absolute block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 14 13.125">
          <path d={svgCardPaths.pf7fd000} fill="var(--fill-0, #F1F2FB)" />
        </svg>
      </div>
      <div className="absolute bottom-[37.5%] left-[60.42%] right-[27.08%] top-1/2">
        <svg className="absolute block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 1.75 1.75">
          <path d={svgCardPaths.p1388cf00} fill="var(--fill-0, #F1F2FB)" />
        </svg>
      </div>
      <div className="absolute inset-[70.84%_36.46%_18.76%_36.46%]">
        <svg className="absolute block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 3.79188 1.45548">
          <path d={svgCardPaths.p1eb2aec0} fill="var(--fill-0, #F1F2FB)" />
        </svg>
      </div>
    </div>
  );
}

function IconPencilEdit() {
  return (
    <div className="relative shrink-0 size-[16px]">
      <div className="absolute inset-[0.01%_0]">
        <svg className="absolute block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 16 15.996">
          <path d={svgCardPaths.p203c2880} fill="var(--fill-0, #F4F5FC)" />
        </svg>
      </div>
    </div>
  );
}

function IconProcessingTime() {
  return (
    <div className="relative shrink-0 size-[18px]">
      <div className="absolute inset-[-2.78%]">
        <svg className="absolute block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 19 19">
          <path d={svgCardPaths.p10e6fc80} fill="var(--fill-0, #FFB121)" />
          <path d={svgCardPaths.pe9e5cc0} fill="var(--fill-0, #FFB121)" />
          <path d={svgCardPaths.p2ae2c800} fill="var(--fill-0, #FFB121)" />
          <path d={svgCardPaths.p8839180} fill="var(--fill-0, #FFB121)" />
          <path d={svgCardPaths.pb4b6780} fill="var(--fill-0, #FFB121)" />
        </svg>
      </div>
    </div>
  );
}

function IconVerify() {
  return (
    <div className="h-[13px] relative shrink-0 w-[12px]">
      <svg className="absolute block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 12 13">
        <path d={svgCardPaths.p37971580} fill="url(#verify_grad)" />
        <defs>
          <linearGradient gradientUnits="userSpaceOnUse" id="verify_grad" x1="5.03886" x2="-0.208806" y1="5.84235" y2="14.2068">
            <stop stopColor="#FF6B21" />
            <stop offset="1" stopColor="#994014" />
          </linearGradient>
        </defs>
      </svg>
    </div>
  );
}

function IconGreenCheck() {
  return (
    <div className="relative shrink-0 size-[17px]">
      <svg className="absolute block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 17 17">
        <path d={svgCardPaths.p9304f00} fill="var(--fill-0, #5EDD60)" />
        <path d={svgCardPaths.p28422000} fill="var(--fill-0, white)" />
      </svg>
    </div>
  );
}

// ── Tab Bar ───────────────────────────────────────────────────────────────────

interface TabBarProps {
  active: "current" | "archive";
  onSwitch: (tab: "current" | "archive") => void;
}

function TabBar({ active, onSwitch }: TabBarProps) {
  return (
    <div className="flex items-start justify-between w-full">
      <div
        className={`h-[40px] flex items-center gap-[10px] px-[20px] relative rounded-[12px] shrink-0 cursor-pointer select-none transition-colors duration-150 ${
          active === "current" ? "bg-[#404d52]" : "bg-[#323d41] hover:bg-[#383f44]"
        }`}
        onClick={() => onSwitch("current")}
      >
        <p className={`font-['Roboto_Condensed:Bold',sans-serif] font-semibold leading-[27.5px] shrink-0 text-[18px] whitespace-nowrap transition-colors duration-150 ${active === "current" ? "text-[#f4f5fc]" : "text-[#798589]"}`}>
          Текущие
        </p>
        <div
          className="h-[24px] flex items-center justify-center px-[11.727px] rounded-[12296925px] shrink-0 transition-colors duration-150"
          style={{ background: active === "current" ? "#343e42" : "#2c3438" }}
        >
          <p className="font-['Inter:Semi_Bold',sans-serif] font-semibold leading-[15.392px] shrink-0 text-[#eef5ff] text-[10.261px] whitespace-nowrap">3 дня</p>
        </div>
      </div>
      <div
        className={`h-[40px] flex items-center justify-center px-[20px] relative rounded-[12px] shrink-0 cursor-pointer select-none transition-colors duration-150 ${
          active === "archive" ? "bg-[#404d52]" : "bg-[#323d41] hover:bg-[#383f44]"
        }`}
        onClick={() => onSwitch("archive")}
      >
        <p className={`font-['Roboto_Condensed:Bold',sans-serif] font-semibold leading-[27.5px] shrink-0 text-[18px] whitespace-nowrap transition-colors duration-150 ${active === "archive" ? "text-[#f4f5fc]" : "text-[#798589]"}`}>
          См. архив
        </p>
      </div>
    </div>
  );
}

// ── Challenge Cards ───────────────────────────────────────────────────────────

function Card1({ onClick }: { onClick?: () => void }) {
  const vw = useWindowWidth();
  const isMobile = vw < 768;

  if (isMobile) {
    return (
      <div className="bg-[#404d52] flex flex-col p-[16px] relative rounded-[15px] w-full gap-[14px]">
        {/* Image */}
        <div className="bg-[#38444a] rounded-[12px] w-full h-[140px] relative flex items-center justify-center overflow-hidden">
          <ChallengePhone1 />
        </div>
        {/* Info */}
        <div className="flex flex-col gap-[8px]">
          <p className="font-['Roboto_Condensed:Bold',sans-serif] font-bold text-[#f4f5fc] text-[22px] leading-[26px]">
            Меню для приложения
          </p>
          <p className="font-['Roboto_Condensed:Regular',sans-serif] font-normal text-[#798589] text-[15px] leading-[19px]">
            Создайте стартовый экран приложения
          </p>
          <div className="flex gap-[16px] items-center">
            <div className="flex gap-[5px] items-center">
              <IconSandClock />
              <p className="font-['Roboto_Condensed:Medium',sans-serif] font-medium text-[#f1f2fb] text-[14px]">25 мин</p>
            </div>
            <div className="flex gap-[5px] items-center">
              <IconFace />
              <p className="font-['Roboto_Condensed:Medium',sans-serif] font-medium text-[#f1f2fb] text-[14px]">Мидл</p>
            </div>
          </div>
          <button
            className="group bg-[#343e42] h-[48px] relative rounded-[13px] w-full cursor-pointer select-none hover:translate-y-[2px] active:translate-y-[4px] transition-transform duration-75 mt-[2px]"
            onClick={onClick}
          >
            <div aria-hidden="true" className="absolute border border-[#57646a] border-solid inset-0 pointer-events-none rounded-[13px] shadow-[0px_4px_0px_0px_black] group-hover:shadow-[0px_2px_0px_0px_black] group-active:shadow-none transition-shadow duration-75" />
            <div className="flex flex-row items-center justify-center gap-[8px] size-full px-[16px]">
              <IconPencilEdit />
              <p className="font-['Roboto_Condensed:Bold',sans-serif] font-bold text-[#f4f5fc] text-[18px]">Начать</p>
              <div className="bg-[#404d52] flex h-[26px] items-center justify-center px-[10px] rounded-full">
                <p className="font-['Inter:Semi_Bold',sans-serif] font-semibold text-[#eef5ff] text-[10px]">+1250 XP</p>
              </div>
            </div>
          </button>
        </div>
      </div>
    );
  }

  return (
    <div className="bg-[#404d52] content-stretch flex flex-col items-center p-[20px] relative rounded-[15px] shrink-0 w-full">
      {/* Content row */}
      <div className="content-stretch flex gap-[20px] h-[159px] items-start relative shrink-0 w-full">
        {/* Image panel */}
        <div className="content-stretch flex flex-col h-full items-start relative shrink-0">
          <div className="bg-[#38444a] flex-[1_0_0] min-h-px min-w-px relative rounded-[15px] w-[185px]">
            <div className="absolute inset-0 flex items-center justify-center pointer-events-none">
              <ChallengePhone1 />
            </div>
          </div>
        </div>

        {/* Info panel */}
        <div className="content-stretch flex flex-[1_0_0] flex-col h-[159px] items-start justify-between min-h-px min-w-px relative">
          {/* Top: title + badges */}
          <div className="content-stretch flex flex-col gap-[10px] items-start relative shrink-0 w-full">
            <p className="font-['Roboto_Condensed:Bold',sans-serif] font-bold leading-[27.5px] relative shrink-0 text-[#f4f5fc] text-[28px] whitespace-nowrap">
              Меню для приложения
            </p>
            <p className="font-['Roboto_Condensed:Regular',sans-serif] font-normal leading-[20px] text-[#798589] text-[18px]">
              Создайте стартовый экран приложения
            </p>
            <div className="content-stretch flex flex-wrap gap-[5px_21px] items-center relative shrink-0 w-full">
              <div className="content-stretch flex gap-[5px] items-center justify-center relative shrink-0">
                <IconSandClock />
                <p className="font-['Roboto_Condensed:Medium',sans-serif] font-medium leading-[20px] relative shrink-0 text-[#f1f2fb] text-[16px] whitespace-nowrap">25 мин</p>
              </div>
              <div className="content-stretch flex gap-[5px] items-center justify-center relative shrink-0">
                <IconFace />
                <p className="font-['Roboto_Condensed:Medium',sans-serif] font-medium leading-[20px] relative shrink-0 text-[#f1f2fb] text-[16px] whitespace-nowrap">Мидл</p>
              </div>
            </div>
          </div>

          {/* Bottom: button */}
          <div className="content-stretch flex flex-col items-start relative shrink-0 w-full">
            <div
              className="group bg-[#343e42] h-[55px] relative rounded-[15px] shrink-0 w-[210px] cursor-pointer select-none hover:translate-y-[3px] active:translate-y-[5px] transition-transform duration-75"
              onClick={onClick}
            >
              <div
                aria-hidden="true"
                className="absolute border border-[#57646a] border-solid inset-0 pointer-events-none rounded-[15px] shadow-[0px_5px_0px_0px_black] group-hover:shadow-[0px_2px_0px_0px_black] group-active:shadow-none transition-shadow duration-75"
              />
              <div className="flex flex-row items-center justify-center gap-[8px] size-full px-[16px]">
                <IconPencilEdit />
                <p className="font-['Roboto_Condensed:Bold',sans-serif] font-bold leading-[27.5px] relative shrink-0 text-[#f4f5fc] text-[22px] whitespace-nowrap">
                  Начать
                </p>
                <div className="bg-[#404d52] content-stretch flex h-[28px] items-center justify-center px-[12px] relative rounded-full shrink-0">
                  <p className="font-['Inter:Semi_Bold',sans-serif] font-semibold leading-[15px] not-italic relative shrink-0 text-[#eef5ff] text-[10px] whitespace-nowrap">
                    +1250 XP
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

function Card2() {
  const vw = useWindowWidth();
  const isMobile = vw < 768;

  if (isMobile) {
    return (
      <div className="bg-[#343e42] flex flex-col p-[16px] relative rounded-[15px] w-full gap-[14px]">
        {/* Image — no extra dark bg wrapper, direct on card surface */}
        <div className="bg-[#38444a] rounded-[12px] w-full h-[140px] relative flex items-center justify-center overflow-hidden">
          <ChallengePhone2 />
        </div>
        <div className="flex flex-col gap-[8px]">
          <p className="font-['Roboto_Condensed:Bold',sans-serif] font-bold text-[#f4f5fc] text-[22px] leading-[26px]">
            Интерфейс приложения здоровья
          </p>
          <p className="font-['Roboto_Condensed:Medium',sans-serif] font-medium text-[#798589] text-[13px]">Это занимает до 24 часов</p>
          <div className="flex items-center gap-[12px] mt-[2px]">
            <button className="group bg-[#343e42] h-[48px] relative rounded-[13px] flex-1 cursor-pointer select-none hover:translate-y-[2px] active:translate-y-[4px] transition-transform duration-75">
              <div aria-hidden="true" className="absolute border border-[#57646a] border-solid inset-0 pointer-events-none rounded-[13px] shadow-[0px_4px_0px_0px_black] group-hover:shadow-[0px_2px_0px_0px_black] group-active:shadow-none transition-shadow duration-75" />
              <div className="flex items-center justify-center size-full">
                <p className="font-['Roboto_Condensed:Bold',sans-serif] font-bold text-[#f4f5fc] text-[18px]">Открыть</p>
              </div>
            </button>
            <div className="bg-[#424d52] flex gap-[6px] h-[36px] items-center justify-center px-[12px] rounded-full shrink-0">
              <IconProcessingTime />
              <p className="font-['Roboto_Condensed:Bold',sans-serif] font-bold text-[#ffb121] text-[14px] whitespace-nowrap">На проверке</p>
            </div>
          </div>
        </div>
      </div>
    );
  }

  return (
    <div className="bg-[#343e42] content-stretch flex flex-col items-center p-[20px] relative rounded-[15px] shrink-0 w-full">
      {/* Content row */}
      <div className="content-stretch flex gap-[20px] h-[159px] items-start relative shrink-0 w-full">
        {/* Image panel */}
        <div className="content-stretch flex flex-col h-full items-start relative shrink-0">
          <div className="bg-[#38444a] flex-[1_0_0] min-h-px min-w-px relative rounded-[15px] w-[185px]">
            <div className="absolute inset-0 flex items-center justify-center pointer-events-none">
              <ChallengePhone2 />
            </div>
          </div>
        </div>

        {/* Info panel */}
        <div className="content-stretch flex flex-[1_0_0] flex-col h-[159px] items-start justify-between min-h-px min-w-px relative">
          {/* Top: title + metadata */}
          <div className="content-stretch flex flex-col gap-[10px] items-start relative shrink-0 w-full">
            <p className="font-['Roboto_Condensed:Bold',sans-serif] font-bold leading-[27.5px] relative shrink-0 text-[#f4f5fc] text-[28px] whitespace-nowrap">
              Интерфейс приложения здоровья
            </p>
            <p className="font-['Roboto_Condensed:Medium',sans-serif] font-medium leading-[15px] text-[#798589] text-[12px] whitespace-nowrap">Это занимает до 24 часов</p>
          </div>

          {/* Bottom: button + status */}
          <div className="flex items-center gap-[20px]">
            <div className="group bg-[#343e42] h-[55px] relative rounded-[15px] shrink-0 w-[210px] cursor-pointer select-none hover:translate-y-[3px] active:translate-y-[5px] transition-transform duration-75">
              <div
                aria-hidden="true"
                className="absolute border border-[#57646a] border-solid inset-0 pointer-events-none rounded-[15px] shadow-[0px_5px_0px_0px_black] group-hover:shadow-[0px_2px_0px_0px_black] group-active:shadow-none transition-shadow duration-75"
              />
              <div className="flex flex-row items-center justify-center gap-[8px] size-full px-[16px]">
                <p className="font-['Roboto_Condensed:Bold',sans-serif] font-bold leading-[27.5px] relative shrink-0 text-[#f4f5fc] text-[22px] whitespace-nowrap">
                  Открыть
                </p>
              </div>
            </div>
            <div className="bg-[#424d52] flex gap-[8px] h-[36px] items-center justify-center px-[16px] rounded-full shrink-0">
              <IconProcessingTime />
              <p className="font-['Roboto_Condensed:Bold',sans-serif] font-bold leading-[27.5px] text-[#ffb121] text-[16px] whitespace-nowrap">На проверке</p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

function Card3() {
  const vw = useWindowWidth();
  const isMobile = vw < 768;

  if (isMobile) {
    return (
      <div className="bg-[#343e42] flex flex-col p-[16px] relative rounded-[15px] w-full gap-[14px]">
        {/* Image — no extra dark bg wrapper, direct on card surface */}
        <div className="bg-[#38444a] rounded-[12px] w-full h-[140px] relative flex items-center justify-center overflow-hidden">
          <ChallengePhone3 />
        </div>
        <div className="flex flex-col gap-[8px]">
          <p className="font-['Roboto_Condensed:Bold',sans-serif] font-bold text-[#f4f5fc] text-[22px] leading-[26px]">
            Интерфейс приложения здоровья
          </p>
          <div className="bg-[#3a464a] flex gap-[4px] h-[22px] items-center px-[8px] rounded-[10px] w-fit">
            <IconVerify />
            <p className="font-['Roboto_Condensed:Bold',sans-serif] font-semibold text-[#6a777b] text-[11px] whitespace-nowrap">Проверено ментором</p>
          </div>
          <div className="flex items-center gap-[12px] mt-[2px]">
            <button className="group bg-[#343e42] h-[48px] relative rounded-[13px] flex-1 cursor-pointer select-none hover:translate-y-[2px] active:translate-y-[4px] transition-transform duration-75">
              <div aria-hidden="true" className="absolute border border-[#57646a] border-solid inset-0 pointer-events-none rounded-[13px] shadow-[0px_4px_0px_0px_black] group-hover:shadow-[0px_2px_0px_0px_black] group-active:shadow-none transition-shadow duration-75" />
              <div className="flex items-center justify-center size-full">
                <p className="font-['Roboto_Condensed:Bold',sans-serif] font-bold text-[#f4f5fc] text-[18px]">Смотреть фидбек</p>
              </div>
            </button>
            <div className="bg-[#424d52] flex gap-[6px] h-[36px] items-center justify-center px-[12px] rounded-full shrink-0">
              <IconGreenCheck />
              <p className="font-['Roboto_Condensed:Bold',sans-serif] font-semibold text-[#5edd60] text-[14px] whitespace-nowrap">Готово</p>
            </div>
          </div>
        </div>
      </div>
    );
  }

  return (
    <div className="bg-[#343e42] content-stretch flex flex-col items-center p-[20px] relative rounded-[15px] shrink-0 w-full">
      {/* Content row */}
      <div className="content-stretch flex gap-[20px] h-[159px] items-start relative shrink-0 w-full">
        {/* Image panel */}
        <div className="content-stretch flex flex-col h-full items-start relative shrink-0">
          <div className="bg-[#38444a] flex-[1_0_0] min-h-px min-w-px relative rounded-[15px] w-[185px]">
            <div className="absolute inset-0 flex items-center justify-center pointer-events-none">
              <ChallengePhone3 />
            </div>
          </div>
        </div>

        {/* Info panel */}
        <div className="content-stretch flex flex-[1_0_0] flex-col h-[159px] items-start justify-between min-h-px min-w-px relative">
          {/* Top: title + mentor badge */}
          <div className="content-stretch flex flex-col gap-[10px] items-start relative shrink-0 w-full">
            <p className="font-['Roboto_Condensed:Bold',sans-serif] font-bold leading-[27.5px] relative shrink-0 text-[#f4f5fc] text-[28px] whitespace-nowrap">
              Интерфейс приложения здоровья
            </p>
            <div className="bg-[#3a464a] flex gap-[4.967px] h-[22.351px] items-center px-[9.934px] rounded-[12px]">
              <IconVerify />
              <p className="font-['Roboto_Condensed:Bold',sans-serif] font-semibold leading-[12px] text-[#6a777b] text-[10.99px] whitespace-nowrap">Проверено ментором</p>
            </div>
          </div>

          {/* Bottom: button + done status */}
          <div className="flex items-center gap-[20px]">
            <div className="group bg-[#343e42] h-[55px] relative rounded-[15px] shrink-0 w-[210px] cursor-pointer select-none hover:translate-y-[3px] active:translate-y-[5px] transition-transform duration-75">
              <div
                aria-hidden="true"
                className="absolute border border-[#57646a] border-solid inset-0 pointer-events-none rounded-[15px] shadow-[0px_5px_0px_0px_black] group-hover:shadow-[0px_2px_0px_0px_black] group-active:shadow-none transition-shadow duration-75"
              />
              <div className="flex flex-row items-center justify-center gap-[8px] size-full px-[16px]">
                <p className="font-['Roboto_Condensed:Bold',sans-serif] font-bold leading-[27.5px] relative shrink-0 text-[#f4f5fc] text-[22px] whitespace-nowrap">
                  Смотреть фидбек
                </p>
              </div>
            </div>
            <div className="bg-[#424d52] flex gap-[8px] h-[36px] items-center justify-center px-[16px] rounded-full shrink-0">
              <IconGreenCheck />
              <p className="font-['Roboto_Condensed:Bold',sans-serif] font-semibold leading-[27.5px] text-[#5edd60] text-[16px] whitespace-nowrap">Готово</p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

// ── Archive placeholder ───────────────────────────────────────────────────────

function ArchivePlaceholder() {
  return (
    <div
      className="h-[200px] flex flex-col items-center justify-center rounded-[20px] w-full gap-[10px]"
      style={{ border: "2px dashed #4B595F" }}
    >
      <p className="font-['Roboto_Condensed:Bold',sans-serif] font-semibold leading-[27.5px] text-[#798589] text-[22px]">
        Архив недельных вызовов пуст
      </p>
      <p className="font-['Roboto_Condensed:Regular',sans-serif] font-normal leading-[20px] text-[#57646a] text-[16px]">
        Здесь будут отображаться прошлые задания.
      </p>
    </div>
  );
}

// ── Page ──────────────────────────────────────────────────────────────────────

export default function ChallengesPage() {
  const [activeTab, setActiveTab] = useState<"current" | "archive">("current");
  const navigate = useNavigate();

  return (
    <Layout title="Недельные вызовы" rightWidth="320px">
      <div className="flex flex-col gap-[20px] w-full">
        {/* Sticky tab bar — sticks to top of scroll area, bg covers content above */}
        <div
          className="sticky top-[-16px] z-20 mx-[-16px] px-[16px] pt-[12px] pb-[8px]"
          style={{ background: "#2D363A" }}
        >
          <TabBar active={activeTab} onSwitch={setActiveTab} />
        </div>

        {activeTab === "current" ? (
          <div className="flex flex-col gap-[20px]">
            <Card1 onClick={() => navigate("/challenge-detail")} />
            <Card2 />
            <Card3 />
          </div>
        ) : (
          <ArchivePlaceholder />
        )}
      </div>
    </Layout>
  );
}