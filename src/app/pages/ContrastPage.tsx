import React, { useState, useEffect, useId, useRef } from "react";
import { useNavigate, useLocation } from "react-router";
import Layout from "../components/Layout";
import RightWidgets from "../components/RightWidgets";
import { useUserSafe, type LessonProgress } from "../context/UserContext";
import { Zap, ChevronLeft, Flame } from "lucide-react";
import { useWindowWidth } from "../hooks/useWindowWidth";
import imgImageColor from "figma:asset/848cc9d9d2ee375b005fbdca2522ab616019dc08.png";
import svgPaths from "../../imports/svg-ns2c3tgkyt";
import svgMfoan from "../../imports/svg-mfoan0qzpw";
import fistSvgPaths from "../../imports/svg-vn4p4wooh3";
import cardSvgPaths from "../../imports/svg-zgvftbh6wb";
import Group481362 from "../../imports/Group481362";
import Group481363 from "../../imports/Group481363";
import {
  ContrastQuiz1VariantA, ContrastQuiz1VariantB,
  ContrastQuiz2VariantA, ContrastQuiz2VariantB,
  ContrastQuiz4VariantA, ContrastQuiz4VariantB,
  ContrastQuiz5VariantA, ContrastQuiz5VariantB,
  ContrastQuiz6VariantA, ContrastQuiz6VariantB,
} from "../../imports/Frame481515";

interface AccordionState {
  selectedAnswer: string | null;
  showFeedback: boolean;
  completed: boolean;
  hasIncorrectAnswer: boolean;
}

function HeroImage() {
  return (
    <div className="bg-[#38444a] h-full min-h-[217px] relative rounded-[15px] shrink-0 w-full">
      <div className="absolute flex h-[130px] items-center justify-center left-[175px] top-[42px] w-[182px]">
        <div className="-rotate-90 flex-none">
          <div className="h-[182px] relative w-[130px]">
            <div className="absolute inset-0 overflow-hidden pointer-events-none">
              <img alt="" className="absolute h-[100.81%] left-[-5.82%] max-w-none top-[-0.4%] w-[111.64%]" src={imgImageColor} />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

function TimeIcon() {
  return (
    <div className="overflow-clip relative shrink-0 size-[14px]">
      <div className="absolute inset-[0_11.67%_0_11.66%]">
        <svg className="absolute block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 10.7333 14">
          <path d={svgPaths.p11af9000} fill="#F1F2FB" />
        </svg>
      </div>
    </div>
  );
}

function TheoryLevelIcon() {
  const uid = useId().replace(/:/g, "");
  const maskId = `clv-${uid}`;
  return (
    <div className="h-[15px] overflow-clip relative shrink-0 w-[17px]">
      <div className="absolute inset-[22.57%_5.88%_15.9%_5.88%]">
        <svg className="absolute block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 14.9997 9.23063">
          <defs>
            <mask id={maskId}>
              <rect x="0" y="0" width="5.1" height="9.3" fill="white" />
              <rect x="5" y="0" width="10" height="9.3" fill="white" fillOpacity="0.6" />
            </mask>
          </defs>
          <g mask={`url(#${maskId})`}>
            <path d={svgMfoan.p1f3ddd00} fill="#61737A" />
            <path d={svgMfoan.p1dcc7b80} fill="#F1F2FB" />
            <path d={svgMfoan.p36483400} fill="#61737A" />
          </g>
        </svg>
      </div>
    </div>
  );
}

function GreenIndicator() {
  return (
    <div className="relative shrink-0 size-[18px]">
      <svg className="absolute block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 18 18">
        <g clipPath="url(#cclip_green)">
          <path d={svgPaths.p1bd90280} fill="#5EDD60" />
          <path d={svgPaths.p14c44980} fill="white" />
        </g>
        <defs><clipPath id="cclip_green"><rect fill="white" height="18" width="18" /></clipPath></defs>
      </svg>
    </div>
  );
}

function GrayIndicator({ color = "#282F33" }: { color?: string }) {
  return (
    <div className="relative shrink-0 size-[18px]">
      <svg className="absolute block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 18 18">
        <path d={svgPaths.p3896100} fill={color} />
      </svg>
    </div>
  );
}

function OrangeIndicator() {
  return (
    <div className="relative shrink-0 size-[18px]">
      <svg className="absolute block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 18 18">
        <defs>
          <linearGradient id="cOrangeGrad" x1="0%" y1="0%" x2="100%" y2="100%">
            <stop offset="0%" style={{ stopColor: "#ff6b21", stopOpacity: 1 }} />
            <stop offset="100%" style={{ stopColor: "#ff8c4a", stopOpacity: 1 }} />
          </linearGradient>
        </defs>
        <circle cx="9" cy="9" r="9" fill="url(#cOrangeGrad)" />
        <path d="M5.5 5.5L12.5 12.5M12.5 5.5L5.5 12.5" stroke="white" strokeWidth="2" strokeLinecap="round" />
      </svg>
    </div>
  );
}

function ChevronIcon({ isOpen, isLocked = false }: { isOpen: boolean; isLocked?: boolean }) {
  const arrowColor = isLocked ? "#4a5560" : "#798589";
  return (
    <div className="flex h-[10px] items-center justify-center relative shrink-0 w-[20px]">
      <div className="flex-none" style={{ transition: "transform 300ms ease", transform: isOpen ? "rotate(90deg)" : "rotate(-90deg)" }}>
        <div className="h-[20px] relative w-[10px]">
          <div className="absolute inset-[-5%_-10%_-5%_-1.72%]">
            <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 11.1716 22">
              <path d={svgPaths.p23f95480} stroke={arrowColor} strokeLinecap="round" strokeWidth="3" />
            </svg>
          </div>
        </div>
      </div>
    </div>
  );
}

function PartyPopperIcon() {
  return (
    <div className="relative shrink-0 size-[27px]">
      <svg className="absolute block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 27 27">
        <g clipPath="url(#cclip_party)">
          <path d={svgPaths.p14a46100} fill="#FDC70E" /><path d={svgPaths.p38dcaa00} fill="#D39518" />
          <path d={svgPaths.p3dec4c80} fill="#3B84ED" /><path d={svgPaths.pab31500} fill="#D3374E" />
          <path d={svgPaths.p3172380} fill="#3B84ED" /><path d={svgPaths.p257e4500} fill="#00D043" />
          <path d={svgPaths.p2fc207f0} fill="#D3374E" /><path d={svgPaths.p16182480} fill="#00D043" />
          <path d={svgPaths.p107f6b80} fill="#3B84ED" /><path d={svgPaths.p79c5f30} fill="#00D043" />
          <path d={svgPaths.p1814b580} fill="#D3374E" /><path d={svgPaths.p1e054500} fill="#D3374E" />
          <path d={svgPaths.p3986f200} fill="#FDC70E" /><path d={svgPaths.p2f1fb8c0} fill="#D3374E" />
          <path d={svgPaths.p2ed6e280} fill="#D3374E" />
        </g>
        <defs><clipPath id="cclip_party"><rect fill="white" height="27" width="27" /></clipPath></defs>
      </svg>
    </div>
  );
}

function SparkleIcon() {
  return (
    <div className="h-[16px] relative shrink-0 w-[14px]">
      <svg className="absolute block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 14 16">
        <path d={svgPaths.p3fb52a80} fill="#00D043" />
      </svg>
    </div>
  );
}

function FistIcon() {
  return (
    <div className="relative shrink-0 size-[27px]">
      <svg className="absolute block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 30 30">
        <g clipPath="url(#cclip_fist)">
          <path d={fistSvgPaths.p19bd180} fill="#FFD0A6" /><path d={fistSvgPaths.p26c4d200} fill="#FFD0A6" />
          <g>
            <path d={fistSvgPaths.p383de300} fill="#E8B182" /><path d={fistSvgPaths.p37ee6b00} fill="#E8B182" />
            <path d={fistSvgPaths.p25952ea0} fill="#E8B182" /><path d={fistSvgPaths.p23ec7b80} fill="#E8B182" />
          </g>
          <path d={fistSvgPaths.p129b200} fill="#FFD0A6" /><path d={fistSvgPaths.p16c28b80} fill="#E8B182" />
          <path d={fistSvgPaths.p2bfd4ef0} fill="#FFD0A6" /><path d={fistSvgPaths.p5a36c00} fill="#E8B182" />
          <path d={fistSvgPaths.p35c8be00} fill="#FFD0A6" /><path d={fistSvgPaths.p3fe9380} fill="#E8B182" />
          <path d={fistSvgPaths.p2adc680} fill="#E8B182" /><path d={fistSvgPaths.p85b6e00} fill="#FFD0A6" />
          <path d={fistSvgPaths.p233cbd00} fill="#E8B182" /><path d={fistSvgPaths.p34d72200} fill="#E8B182" />
        </g>
        <defs><clipPath id="cclip_fist"><rect fill="white" height="30" width="30" /></clipPath></defs>
      </svg>
    </div>
  );
}

function RedCardIcon() {
  return (
    <div className="overflow-clip relative shrink-0 size-[23px]">
      <div className="absolute inset-[0_3.7%_0_3.71%]">
        <svg className="absolute block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 21.2949 22.9998">
          <g>
            <path clipRule="evenodd" d={cardSvgPaths.p836e200} fill="#00D043" fillRule="evenodd" />
            <path clipRule="evenodd" d={cardSvgPaths.p2bd75400} fill="#FF6B21" fillRule="evenodd" />
          </g>
        </svg>
      </div>
      <p className="absolute font-['Roboto_Condensed:Bold',sans-serif] font-medium inset-[20%_47.25%_32.17%_26.67%] leading-[1.2] text-[#f1f2fb] text-[9.2px] whitespace-nowrap">А</p>
    </div>
  );
}

function ContentDivider() {
  return (
    <div className="h-0 relative shrink-0 w-full opacity-50">
      <div className="absolute inset-[-0.5px_-0.1%]">
        <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 493 1">
          <path d="M0.5 0.5H492.5" stroke="#5B6E77" strokeLinecap="round" />
        </svg>
      </div>
    </div>
  );
}

// ─── Contrast Theory Content ──────────────────────────────────────────────────

function ContrastContent1() {
  return (
    <>
      <div className="content-stretch flex flex-col gap-[16px] items-start relative shrink-0 text-[#f1f2fb] text-[18px] w-full">
        <p className="font-['Roboto_Condensed:Bold',sans-serif] font-medium h-[22px] leading-[22px] relative shrink-0">🎯 Контраст делает интерфейс понятным</p>
        <div className="font-['Roboto_Condensed:Regular',sans-serif] font-normal leading-[22px] min-w-full opacity-80 relative shrink-0 flex flex-col gap-[8px]">
          <p>Контраст — это <span className="bg-[#46545b] rounded-[6px] px-[7px] py-[1px] text-[#f1f2fb] not-italic">разница между элементами</span>.</p>
          <p>Когда элементы отличаются, пользователь быстро понимает: что главное, что второстепенное и куда нажимать.</p>
        </div>
      </div>
      <ContentDivider />
      <div className="content-stretch flex flex-col gap-[16px] items-start relative shrink-0 text-[#f1f2fb] text-[18px] w-full">
        <p className="font-['Roboto_Condensed:Bold',sans-serif] font-medium h-[22px] leading-[22px] relative shrink-0">⭐ Виды контраста</p>
        <div className="font-['Roboto_Condensed:Regular',sans-serif] font-normal leading-[22px] min-w-full opacity-80 relative shrink-0 flex flex-col gap-[8px]">
          <p>Контраст может быть: <span className="bg-[#46545b] rounded-[6px] px-[7px] py-[1px] text-[#f1f2fb]">по размеру</span>, <span className="bg-[#46545b] rounded-[6px] px-[7px] py-[1px] text-[#f1f2fb]">по цвету</span>, <span className="bg-[#46545b] rounded-[6px] px-[7px] py-[1px] text-[#f1f2fb]">по форме</span> и <span className="bg-[#46545b] rounded-[6px] px-[7px] py-[1px] text-[#f1f2fb]">по толщине линий</span>.</p>
          <p>Если всё выглядит одинаково, пользователь <em>теряется</em>.</p>
        </div>
      </div>
    </>
  );
}

function ContrastContent2() {
  return (
    <>
      <div className="content-stretch flex flex-col gap-[16px] items-start relative shrink-0 text-[#f1f2fb] text-[18px] w-full">
        <p className="font-['Roboto_Condensed:Bold',sans-serif] font-medium h-[22px] leading-[22px] relative shrink-0">📏 Размер управляет вниманием</p>
        <div className="font-['Roboto_Condensed:Regular',sans-serif] font-normal leading-[22px] min-w-full opacity-80 relative shrink-0 flex flex-col gap-[8px]">
          <p>Самый <span className="bg-[#46545b] rounded-[6px] px-[7px] py-[1px] text-[#f1f2fb]">простой и мощный</span> контраст — это размер.</p>
          <p>Большое притягивает внимание быстрее, чем маленькое. Поэтому заголовок больше текста, а кнопка больше подписи.</p>
        </div>
      </div>
      <ContentDivider />
      <div className="content-stretch flex flex-col gap-[16px] items-start relative shrink-0 text-[#f1f2fb] text-[18px] w-full">
        <p className="font-['Roboto_Condensed:Bold',sans-serif] font-medium h-[22px] leading-[22px] relative shrink-0">📶 Визуальная иерархия</p>
        <div className="font-['Roboto_Condensed:Regular',sans-serif] font-normal leading-[22px] min-w-full opacity-80 relative shrink-0 flex flex-col gap-[8px]">
          <p>Контраст размера создаёт <span className="bg-[#46545b] rounded-[6px] px-[7px] py-[1px] text-[#f1f2fb]">иерархию</span>: крупные элементы — важные, средние — второстепенные, мелкие — вспомогательные.</p>
          <p>Так интерфейс становится <em>понятным</em>.</p>
        </div>
      </div>
    </>
  );
}

function ContrastContent3() {
  return (
    <>
      <div className="content-stretch flex flex-col gap-[16px] items-start relative shrink-0 text-[#f1f2fb] text-[18px] w-full">
        <p className="font-['Roboto_Condensed:Bold',sans-serif] font-medium h-[22px] leading-[22px] relative shrink-0">🎨 Цвет выделяет действия</p>
        <div className="font-['Roboto_Condensed:Regular',sans-serif] font-normal leading-[22px] min-w-full opacity-80 relative shrink-0 flex flex-col gap-[8px]">
          <p>Цветовой контраст помогает выделить действия. Кнопка должна <span className="bg-[#46545b] rounded-[6px] px-[7px] py-[1px] text-[#f1f2fb]">отличаться от фона</span> и окружающих элементов.</p>
          <p>Иначе пользователь может просто её не заметить.</p>
        </div>
      </div>
      <ContentDivider />
      <div className="content-stretch flex flex-col gap-[16px] items-start relative shrink-0 text-[#f1f2fb] text-[18px] w-full">
        <p className="font-['Roboto_Condensed:Bold',sans-serif] font-medium h-[22px] leading-[22px] relative shrink-0">⭐ Доступность</p>
        <div className="font-['Roboto_Condensed:Regular',sans-serif] font-normal leading-[22px] min-w-full opacity-80 relative shrink-0 flex flex-col gap-[8px]">
          <p>Контраст важен не только для красоты, но и для <span className="bg-[#46545b] rounded-[6px] px-[7px] py-[1px] text-[#f1f2fb]">доступности</span>.</p>
          <p>Текст должен быть достаточно тёмным на светлом фоне или светлым на тёмном.</p>
        </div>
      </div>
    </>
  );
}

function ContrastContent4() {
  return (
    <>
      <div className="content-stretch flex flex-col gap-[16px] items-start relative shrink-0 text-[#f1f2fb] text-[18px] w-full">
        <p className="font-['Roboto_Condensed:Bold',sans-serif] font-medium h-[22px] leading-[22px] relative shrink-0">✨ ��орма создаёт акцент</p>
        <div className="font-['Roboto_Condensed:Regular',sans-serif] font-normal leading-[22px] min-w-full opacity-80 relative shrink-0 flex flex-col gap-[8px]">
          <p>Контраст — это не только цвет и размер. <span className="bg-[#46545b] rounded-[6px] px-[7px] py-[1px] text-[#f1f2fb]">Форма, толщина и насыщенность</span> тоже помогают выделять элементы.</p>
          <p>Например: жирный текст рядом с обычным, круглая кнопка среди прямоугольных, залитая иконка среди контурных.</p>
        </div>
      </div>
    </>
  );
}

function ContrastContent5() {
  return (
    <>
      <div className="content-stretch flex flex-col gap-[16px] items-start relative shrink-0 text-[#f1f2fb] text-[18px] w-full">
        <p className="font-['Roboto_Condensed:Bold',sans-serif] font-medium h-[22px] leading-[22px] relative shrink-0">⚡ Один акцент лучше многих</p>
        <div className="font-['Roboto_Condensed:Regular',sans-serif] font-normal leading-[22px] min-w-full opacity-80 relative shrink-0 flex flex-col gap-[8px]">
          <p>Слишком <span className="bg-[#46545b] rounded-[6px] px-[7px] py-[1px] text-[#f1f2fb]">слабый</span> контраст делает интерфейс скучным. Слишком <span className="bg-[#46545b] rounded-[6px] px-[7px] py-[1px] text-[#f1f2fb]">сильный</span> — утомляет и создаёт визуальный шум.</p>
        </div>
      </div>
      <ContentDivider />
      <div className="content-stretch flex flex-col gap-[16px] items-start relative shrink-0 text-[#f1f2fb] text-[18px] w-full">
        <p className="font-['Roboto_Condensed:Bold',sans-serif] font-medium h-[22px] leading-[22px] relative shrink-0">💡 Правило баланса</p>
        <div className="font-['Roboto_Condensed:Regular',sans-serif] font-normal leading-[22px] min-w-full opacity-80 relative shrink-0 flex flex-col gap-[8px]">
          <p>Лучше всего работает <span className="bg-[#46545b] rounded-[6px] px-[7px] py-[1px] text-[#f1f2fb]">один главный акцент</span> и спокойная база вокруг него.</p>
          <p>Контраст должен помогать пользователю понять, что здесь самое важное.</p>
        </div>
      </div>
    </>
  );
}

// ─── Quiz Variant Slot ────────────────────────────────────────────────────────

function QuizVariantSlot({ node }: { node: React.ReactNode }) {
  const wrapperRef = useRef<HTMLDivElement>(null);
  const [scale, setScale] = useState<number>(1);

  useEffect(() => {
    const el = wrapperRef.current;
    if (!el) return;
    const compute = (w: number) => setScale((w - 40) / 186);
    compute(el.offsetWidth);
    const ro = new ResizeObserver(entries => {
      for (const e of entries) compute(e.contentRect.width);
    });
    ro.observe(el);
    return () => ro.disconnect();
  }, []);

  const scaledW = Math.round(186 * scale);
  const scaledH = Math.round(231 * scale);

  return (
    <div ref={wrapperRef} style={{ display: 'flex', justifyContent: 'center', padding: '50px 20px 50px 20px' }}>
      <div style={{ width: scaledW, height: scaledH, overflow: 'hidden', flexShrink: 0 }}>
        <div style={{ width: 186, height: 231, transform: `scale(${scale})`, transformOrigin: 'top left', flexShrink: 0 }}>
          {node}
        </div>
      </div>
    </div>
  );
}

interface QuizCardProps {
  isSelected: boolean;
  isCorrect: boolean;
  showFeedback: boolean;
  onClick: () => void;
  disabled: boolean;
  contentNode?: React.ReactNode;
}

function QuizCardLeft({ isSelected, isCorrect, showFeedback, onClick, disabled, contentNode }: QuizCardProps) {
  return (
    <div
      onClick={disabled ? undefined : onClick}
      className={`flex-[1_0_0] min-h-px min-w-px relative rounded-[24px] transition-all border-2 overflow-hidden ${showFeedback ? "cursor-default" : "cursor-pointer hover:scale-[1.01]"} ${disabled ? "pointer-events-none" : ""}`}
      style={isSelected ? isCorrect
        ? { background: `linear-gradient(#2D3B36, #2D3B36) padding-box, linear-gradient(to bottom, #00932F, #002D0E) border-box`, borderColor: "transparent" }
        : { background: `linear-gradient(#3B3736, #3B3736) padding-box, linear-gradient(to bottom, #932E00, #2D0000) border-box`, borderColor: "transparent" }
        : { background: "#282F33", borderColor: "#282F33" }}
    >
      {contentNode ? <QuizVariantSlot node={contentNode} /> : (
        <div style={{ display: 'flex', alignItems: 'center', justifyContent: 'center', width: '100%', height: '247px' }}>
          <div style={{ position: 'relative', width: '138px', height: '150px', transform: 'scale(1.4)', transformOrigin: 'center', flexShrink: 0 }}>
            <Group481362 />
          </div>
        </div>
      )}
    </div>
  );
}

function QuizCardRight({ isSelected, isCorrect, showFeedback, onClick, disabled, contentNode }: QuizCardProps) {
  return (
    <div
      onClick={disabled ? undefined : onClick}
      className={`flex-[1_0_0] min-h-px min-w-px relative rounded-[24px] transition-all border-2 overflow-hidden ${showFeedback ? "cursor-default" : "cursor-pointer hover:scale-[1.01]"} ${disabled ? "pointer-events-none" : ""}`}
      style={isSelected ? isCorrect
        ? { background: `linear-gradient(#2D3B36, #2D3B36) padding-box, linear-gradient(to bottom, #00932F, #002D0E) border-box`, borderColor: "transparent" }
        : { background: `linear-gradient(#3B3736, #3B3736) padding-box, linear-gradient(to bottom, #932E00, #2D0000) border-box`, borderColor: "transparent" }
        : { background: "#282F33", borderColor: "#282F33" }}
    >
      {contentNode ? <QuizVariantSlot node={contentNode} /> : (
        <div style={{ display: 'flex', alignItems: 'center', justifyContent: 'center', width: '100%', height: '247px' }}>
          <div style={{ position: 'relative', width: '138px', height: '150px', transform: 'scale(1.4)', transformOrigin: 'center', flexShrink: 0 }}>
            <Group481363 />
          </div>
        </div>
      )}
    </div>
  );
}

// ─── Quiz Section Config ───────────────────────────────────────────────────────

const QUIZ_SECTIONS = [
  {
    title: "Что такое контраст",
    question: "Какой интерфейс лучше?",
    label: "Закрепим!",
    leftNode: <ContrastQuiz1VariantA />, rightNode: <ContrastQuiz1VariantB />,
    leftCorrect: false, rightCorrect: true,
    correctFeedback: "Основная кнопка имеет высокий контраст и лучше выделяется, поэтому интерфейс читается быстрее.",
    incorrectFeedback: "Основная кнопка имеет высокий контраст и лучше выделяется, поэтому интерфейс читается быстрее.",
    ContentComponent: ContrastContent1,
  },
  {
    title: "Контраст размера",
    question: "Какой подход к цветам лучше?",
    label: "Закрепим!",
    leftNode: <ContrastQuiz6VariantA />, rightNode: <ContrastQuiz6VariantB />,
    leftCorrect: false, rightCorrect: true,
    correctFeedback: "Когда интерфейс использует один основной цвет и нейтральные оттенки, пользователю легче понять структуру интерфейса и основные действия.🎨",
    incorrectFeedback: "Если интерфейс использует много ярких цветов, элементы начинают конкурировать между собой и пользователю становится сложнее понять, куда смотреть.",
    ContentComponent: ContrastContent2,
  },
  {
    title: "Контраст цвета",
    question: "Какая кнопка заметнее?",
    label: "Проверим",
    leftNode: <ContrastQuiz4VariantA />, rightNode: <ContrastQuiz4VariantB />,
    leftCorrect: false, rightCorrect: true,
    correctFeedback: "Контрастная кнопка быстрее привлекает внимание и подсказывает пользователю действие.",
    incorrectFeedback: "Если кнопка сливается с фоном, пользователь может её просто не заметить.",
    ContentComponent: ContrastContent3,
  },
  {
    title: "Контраст формы и веса",
    question: "Что создаёт акцент?",
    label: "Проверим",
    leftNode: <ContrastQuiz2VariantA />, rightNode: <ContrastQuiz2VariantB />,
    leftCorrect: false, rightCorrect: true,
    correctFeedback: "Когда элемент отличается по форме или толщине, он становится заметным.",
    incorrectFeedback: "Если всё выглядит одинаково, пользователю сложнее выделить главное.",
    ContentComponent: ContrastContent4,
  },
  {
    title: "Правило баланса",
    question: "Сколько акцентов лучше?",
    label: "Проверим",
    leftNode: <ContrastQuiz5VariantA />, rightNode: <ContrastQuiz5VariantB />,
    leftCorrect: false, rightCorrect: true,
    correctFeedback: "Один главный акцент помогает пользователю быстро найти основное действие.",
    incorrectFeedback: "Когда акцентов слишком много, элементы начинают конкурировать друг с другом.",
    ContentComponent: ContrastContent5,
  },
];

// ─── Main Page ────────────────────────────────────────────────────────────────

export default function ContrastPage() {
  const navigate = useNavigate();
  const location = useLocation();
  const userCtx = useUserSafe();
  const updateQuestionState = userCtx?.updateQuestionState ?? (() => ({ xpEarned: 0 }));
  const getLessonProgress = userCtx?.getLessonProgress ?? ((id: string): LessonProgress => ({
    lessonId: id, totalTasks: 5, questions: {}, isCompleted: false,
  }));

  const scrollRef = useRef<HTMLDivElement>(null);

  // ── Mobile / responsive state ──────────────────────────────────────────────
  const vw = useWindowWidth();
  const isMobile = vw < 768;
  const mobileScrollRef = useRef<HTMLDivElement>(null);
  const [mobileScrollY, setMobileScrollY] = useState(0);
  const [showFeedbackModal, setShowFeedbackModal] = useState(false);
  const [feedbackRating, setFeedbackRating] = useState(0);
  const [feedbackText, setFeedbackText] = useState("");

  const getScroll = () => isMobile ? mobileScrollRef.current : scrollRef.current;

  const smoothScrollTo = (container: HTMLElement, targetTop: number, duration = 350) => {
    const start = container.scrollTop;
    const distance = targetTop - start;
    if (Math.abs(distance) < 2) return;
    const startTime = performance.now();
    const easeOut = (t: number) => 1 - Math.pow(1 - t, 3);
    const step = (now: number) => {
      const progress = Math.min((now - startTime) / duration, 1);
      container.scrollTop = start + distance * easeOut(progress);
      if (progress < 1) requestAnimationFrame(step);
    };
    requestAnimationFrame(step);
  };

  const [openSections, setOpenSections] = useState<Set<number>>(() => new Set([0]));

  const lessonId = "contrast-lesson";
  const progress = getLessonProgress(lessonId);

  const [maxReached, setMaxReached] = useState<number>(() => {
    try {
      const stored = localStorage.getItem('contrast-max-reached');
      if (stored !== null) return parseInt(stored, 10) || 0;
    } catch {}
    for (let i = 4; i >= 0; i--) {
      const qs = progress.questions[`mini-quiz-${i}`];
      if (qs?.correct) return i;
    }
    return 0;
  });

  const [accordionStates, setAccordionStates] = useState<AccordionState[]>(() =>
    [0, 1, 2, 3, 4].map((index) => {
      const questionState = progress.questions[`mini-quiz-${index}`];
      if (questionState && questionState.correct) {
        return { selectedAnswer: "right", showFeedback: true, completed: true, hasIncorrectAnswer: false };
      }
      return { selectedAnswer: null, showFeedback: false, completed: false, hasIncorrectAnswer: false };
    })
  );

  const isUnlocked = (i: number): boolean => i <= maxReached;

  useEffect(() => {
    const queryParams = new URLSearchParams(location.search);
    const sectionParam = queryParams.get("section");
    if (sectionParam) {
      const idx = parseInt(sectionParam, 10);
      if (!isNaN(idx) && idx >= 0 && idx < 5) {
        setOpenSections(prev => new Set([...prev, idx]));
      }
    }
  }, [location]);

  const handleToggle = (index: number) => {
    if (!isUnlocked(index)) return;
    const isCurrentlyOpen = openSections.has(index);
    if (!isCurrentlyOpen && getScroll()) {
      setOpenSections(prev => { const next = new Set(prev); next.add(index); return next; });
      // After animation starts (~60ms), scroll so the accordion header sits at the
      // top of the visible area (below the 36px fade) and the content starts to show.
      setTimeout(() => {
        const headerEl = document.querySelector(`[data-csection="${index}"]`) as HTMLElement | null;
        if (!headerEl || !getScroll()) return;
        const containerRect = getScroll()!.getBoundingClientRect();
        const elRect = headerEl.getBoundingClientRect();
        const targetScroll = getScroll()!.scrollTop + (elRect.top - containerRect.top - 36);
        smoothScrollTo(getScroll()!, Math.max(0, targetScroll));
      }, 60);
      return;
    }
    setOpenSections(prev => {
      const next = new Set(prev);
      if (next.has(index)) next.delete(index);
      else next.add(index);
      return next;
    });
  };

  const handleAnswerSelect = (sectionIndex: number, answer: string) => {
    const newStates = [...accordionStates];
    const isCorrectAnswer = answer === "right";
    newStates[sectionIndex] = {
      selectedAnswer: answer,
      showFeedback: true,
      completed: isCorrectAnswer,
      hasIncorrectAnswer: !isCorrectAnswer || newStates[sectionIndex].hasIncorrectAnswer,
    };
    setAccordionStates(newStates);

    const nextToUnlock = Math.min(sectionIndex + 1, 4);
    if (nextToUnlock > maxReached) {
      setMaxReached(nextToUnlock);
      try { localStorage.setItem('contrast-max-reached', String(nextToUnlock)); } catch {}
    }

    requestAnimationFrame(() => {
      requestAnimationFrame(() => {
        if (!getScroll()) return;
        const container = getScroll()!;
        const containerRect = container.getBoundingClientRect();
        const sectionEl = document.querySelector(`[data-csection="${sectionIndex}"]`) as HTMLElement | null;
        if (!sectionEl) return;
        const buttons = sectionEl.querySelectorAll('button');
        const continueBtn = buttons[buttons.length - 1] as HTMLElement | null;
        if (!continueBtn) return;
        const btnRect = continueBtn.getBoundingClientRect();
        const overshoot = btnRect.bottom + 44 - containerRect.bottom;
        if (overshoot > 0) smoothScrollTo(container, container.scrollTop + overshoot);
      });
    });

    if (isCorrectAnswer) {
      updateQuestionState("contrast-lesson", `mini-quiz-${sectionIndex}`, true, 15);
    }

    try {
      const ctx = new AudioContext();
      const o = ctx.createOscillator();
      const g = ctx.createGain();
      o.type = "sine";
      if (isCorrectAnswer) {
        o.frequency.setValueAtTime(660, ctx.currentTime);
        o.frequency.exponentialRampToValueAtTime(880, ctx.currentTime + 0.08);
        g.gain.setValueAtTime(0.12, ctx.currentTime);
        g.gain.exponentialRampToValueAtTime(0.001, ctx.currentTime + 0.08);
        o.connect(g); g.connect(ctx.destination);
        o.start(); o.stop(ctx.currentTime + 0.08);
      } else {
        o.frequency.setValueAtTime(500, ctx.currentTime);
        o.frequency.exponentialRampToValueAtTime(180, ctx.currentTime + 0.18);
        g.gain.setValueAtTime(0.10, ctx.currentTime);
        g.gain.exponentialRampToValueAtTime(0.001, ctx.currentTime + 0.18);
        o.connect(g); g.connect(ctx.destination);
        o.start(); o.stop(ctx.currentTime + 0.18);
      }
    } catch (_) {}
  };

  const handleContinue = (sectionIndex: number) => {
    if (sectionIndex < 4) {
      const nextSection = sectionIndex + 1;
      if (nextSection > maxReached) {
        setMaxReached(nextSection);
        try { localStorage.setItem('contrast-max-reached', String(nextSection)); } catch {}
      }
      setOpenSections(prev => new Set([...prev, nextSection]));
      requestAnimationFrame(() => {
        const el = document.querySelector(`[data-csection="${nextSection}"]`) as HTMLElement | null;
        if (el && getScroll()) {
          const containerRect = getScroll()!.getBoundingClientRect();
          const elRect = el.getBoundingClientRect();
          const targetScroll = getScroll()!.scrollTop + (elRect.top - containerRect.top - 36);
          smoothScrollTo(getScroll()!, Math.max(0, targetScroll));
        }
      });
    } else {
      navigate("/lesson-quiz?quizId=quiz_contrast&lessonId=contrast-lesson", { state: { lessonId: "contrast-lesson", quizId: "quiz_contrast" } });
    }
  };

  // ── Mobile layout ──────────────────────────────────────────────────────────
  if (isMobile) {
    const xp = userCtx?.xp ?? 0;
    const streak = userCtx?.streak ?? 0;
    return (
      <div
        className="fixed inset-0 flex flex-col overflow-hidden"
        style={{ background: "#282F33" }}
      >
        {/* ── Sticky Header ── */}
        <div
          className="flex-none flex items-center justify-between px-[20px] z-50 relative"
          style={{ height: '60px', background: 'rgba(44,52,56,0.55)', backdropFilter: 'blur(12px)', borderBottom: '1px solid rgba(87,100,106,0.25)' }}
        >
          <button className="flex items-center justify-center p-[8px] -ml-[8px] active:scale-90 transition-transform duration-75" onClick={() => navigate("/lessons")}>
            <ChevronLeft size={24} color="#798589" />
          </button>
          <p className="font-['Roboto_Condensed:Bold',sans-serif] font-bold leading-[27.5px] text-[#f4f5fc] text-[22px]">Теория</p>
          <div className="flex gap-[16px] items-center">
            <div className="flex gap-[4px] items-center">
              <Flame size={16} color={streak > 0 ? '#FFB121' : '#798589'} fill={streak > 0 ? '#FFB121' : 'none'} />
              <span className="font-['Roboto_Condensed:ExtraBold',sans-serif] font-extrabold text-[18px]" style={{ color: streak > 0 ? '#FFB121' : '#798589' }}>{streak}</span>
            </div>
            <div className="flex gap-[4px] items-center">
              <Zap size={16} color={xp > 0 ? '#FF6B21' : '#798589'} fill={xp > 0 ? '#FF6B21' : 'none'} />
              <span className="font-['Roboto_Condensed:ExtraBold',sans-serif] font-extrabold text-[18px]" style={{ color: xp > 0 ? '#FF6B21' : '#798589' }}>{xp}</span>
            </div>
          </div>
        </div>

        {/* ── Scrollable Content ── */}
        <div
          ref={mobileScrollRef}
          className="flex-1 overflow-y-auto scrollbar-hide"
          onScroll={() => setMobileScrollY(mobileScrollRef.current?.scrollTop ?? 0)}
        >
          {/* Hero parallax */}
          <div className="relative overflow-hidden" style={{ height: '200px' }}>
            <div className="absolute inset-0" style={{ transform: `translateY(${mobileScrollY * 0.3}px)` }}>
              <HeroImage />
            </div>
            <div className="absolute bottom-0 left-0 right-0 h-[80px]"
              style={{ background: 'linear-gradient(to top, rgb(45,54,58), transparent)' }} />
          </div>

          {/* Title + meta: title left, badges right — no description */}
          <div className="px-[16px] pb-[16px] relative z-10" style={{ marginTop: '-30px' }}>
            <div className="flex items-end justify-between gap-[10px]">
              <p className="font-['Roboto_Condensed:Bold',sans-serif] font-medium leading-[27.5px] text-[#f4f5fc] text-[26px]">Контраст в UX/UI</p>
              <div className="flex gap-[12px] items-center shrink-0 pb-[2px]">
                <div className="flex gap-[5px] items-center"><TimeIcon /><p className="font-['Roboto_Condensed:Medium',sans-serif] font-medium leading-[20px] text-[#f1f2fb] text-[14px]">7 мин</p></div>
              </div>
            </div>
          </div>

          {/* Accordion sections */}
          <div className="px-[16px] flex flex-col gap-[13px] pb-[20px]">
            {QUIZ_SECTIONS.map((section, index) => {
              const state = accordionStates[index];
              const isCorrect = state.selectedAnswer === "right";
              const isLast = index === 4;
              const ContentComp = section.ContentComponent;
              return (
                <div key={index} data-csection={String(index)} className="w-full bg-[#374348] rounded-[15px] overflow-hidden">
                  <div
                    className={`h-auto min-h-[100px] relative shrink-0 w-full flex items-center ${isUnlocked(index) ? "cursor-pointer" : "cursor-not-allowed"}`}
                    onClick={() => handleToggle(index)}
                  >
                    <div className="flex items-center justify-between px-[20px] w-full py-[12px]">
                      <div className="flex gap-[14px] items-center flex-1 pr-[10px]">
                        {state.completed ? <GreenIndicator /> : state.hasIncorrectAnswer ? <OrangeIndicator /> : <GrayIndicator />}
                        <p className="font-['Roboto_Condensed:Bold',sans-serif] font-medium leading-[24px] text-[22px]"
                          style={{ color: !isUnlocked(index) ? "#4a5560" : openSections.has(index) ? "#f1f2fb" : "#798589" }}>
                          {section.title}
                        </p>
                      </div>
                      <ChevronIcon isOpen={openSections.has(index)} isLocked={!isUnlocked(index)} />
                    </div>
                  </div>
                  <div style={{ display: "grid", gridTemplateRows: openSections.has(index) ? "1fr" : "0fr", transition: "grid-template-rows 300ms ease" }}>
                    <div style={{ overflow: "hidden", minHeight: 0 }}>
                      <div className="flex flex-col items-center w-full">
                        <div className="flex flex-col gap-[16px] items-center pb-[20px] px-[20px] w-full">
                          <div className="flex flex-col gap-[20px] items-center w-full"><ContentComp /></div>
                          <div className="bg-[#3F4C52] rounded-[15px] w-full mt-[10px]">
                            <div className="p-[20px] flex flex-col gap-[20px]">
                              <div className="flex items-center justify-between w-full">
                                <p className="font-['Roboto_Condensed:Bold',sans-serif] font-medium leading-[24px] text-[#f1f2fb] text-[20px] flex-1 pr-[10px]">{section.question}</p>
                                <div className="flex gap-[7px] items-center shrink-0">
                                  <RedCardIcon />
                                  <p className="font-['Roboto_Condensed:Regular',sans-serif] font-normal text-[#ff6b21] text-[16px]">{section.label}</p>
                                </div>
                              </div>
                              <div className="flex flex-col gap-[14px] w-full">
                                <QuizCardLeft isSelected={state.selectedAnswer === "left"} isCorrect={section.leftCorrect} showFeedback={state.showFeedback} onClick={() => handleAnswerSelect(index, "left")} disabled={state.showFeedback} contentNode={section.leftNode} />
                                <QuizCardRight isSelected={state.selectedAnswer === "right"} isCorrect={section.rightCorrect} showFeedback={state.showFeedback} onClick={() => handleAnswerSelect(index, "right")} disabled={state.showFeedback} contentNode={section.rightNode} />
                              </div>
                              {state.showFeedback && (
                                <div className="flex flex-col gap-[12px] w-full pointer-events-none">
                                  {isCorrect ? (
                                    <div className="flex flex-col gap-[8px]">
                                      <div className="flex gap-[8px] items-center"><PartyPopperIcon /><p className="font-['Roboto_Condensed:Bold',sans-serif] text-[#cdf6db] text-[16px]">Верно! +15 XP</p></div>
                                      <p className="font-['Roboto_Condensed:Regular',sans-serif] text-[#cdf6db] text-[14px] leading-[1.3]">{section.correctFeedback}</p>
                                    </div>
                                  ) : (
                                    <div className="flex flex-col gap-[8px]">
                                      <div className="flex gap-[8px] items-center"><FistIcon /><p className="font-['Roboto_Condensed:Bold',sans-serif] text-[#ffbaaa] text-[16px]">Почти получилось!</p></div>
                                      <p className="font-['Roboto_Condensed:Regular',sans-serif] text-[#ffd8d2] text-[14px] leading-[1.3]">{section.incorrectFeedback}</p>
                                    </div>
                                  )}
                                  <button
                                    onClick={() => handleContinue(index)}
                                    className={`w-full h-[50px] rounded-[15px] flex items-center justify-center gap-[10px] pointer-events-auto active:scale-95 transition-transform duration-75 ${isLast && state.showFeedback ? 'bg-[#ff6b21]' : 'bg-[#f7f8fc]'}`}
                                    style={{ boxShadow: isLast && state.showFeedback ? '0px 4px 0px 0px #c54a0a' : '0px 4px 0px 0px #d2d4df' }}
                                  >
                                    {isLast && state.showFeedback && <Zap size={18} className="text-[#f1f2fb]" fill="currentColor" />}
                                    <p className={`font-['Roboto_Condensed:Bold',sans-serif] text-[20px] ${isLast && state.showFeedback ? 'text-[#f1f2fb]' : 'text-[#343e42]'}`}>
                                      {isLast && state.showFeedback ? "Начать квиз" : "Продолжить"}
                                    </p>
                                  </button>
                                </div>
                              )}
                            </div>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              );
            })}
          </div>
          <div style={{ height: '140px' }} />
        </div>

        {/* ── Sticky CTA ── */}
        <div
          className="absolute left-0 right-0 px-[16px] z-40 pb-[12px] pt-[8px]"
          style={{ bottom: '72px', background: 'linear-gradient(to top, rgba(45,54,58,1) 60%, rgba(45,54,58,0) 100%)' }}
        >
          <button
            onClick={() => navigate("/lesson-quiz?quizId=quiz_contrast&lessonId=contrast-lesson", { state: { lessonId: "contrast-lesson", quizId: "quiz_contrast" } })}
            className="w-full h-[52px] rounded-[15px] flex items-center justify-center gap-[10px] active:scale-95 transition-transform duration-75"
            style={{ background: '#ff6b21', boxShadow: '0px 4px 0px 0px #c54a0a' }}
          >
            <p className="font-['Roboto_Condensed:Bold',sans-serif] font-bold text-[#f1f2fb] text-[20px]">Начать квиз</p>
            <div className="rounded-full px-[8px] py-[2px]" style={{ background: 'rgba(255,255,255,0.2)' }}>
              <p className="font-['Roboto_Condensed:Bold',sans-serif] font-bold text-[#f1f2fb] text-[12px]">+125 XP</p>
            </div>
          </button>
        </div>

        {/* ── Bottom Navigation ── */}
        <div
          className="flex-none flex items-center justify-around relative z-50"
          style={{ height: '72px', background: '#343e42', borderTop: '1px solid rgba(87,100,106,0.4)' }}
        >
          {[
            { label: 'Обучение', path: '/', icon: <svg width="22" height="22" viewBox="0 0 22 22" fill="none"><path d="M3 18V8L11 3L19 8V18H14V13H8V18H3Z" fill="currentColor" opacity="0.85"/></svg> },
            { label: 'Вызовы', path: '/challenges', icon: <svg width="22" height="22" viewBox="0 0 22 22" fill="none"><path d="M11 2L13.5 8.5H20L14.75 12.5L16.75 19L11 15L5.25 19L7.25 12.5L2 8.5H8.5L11 2Z" fill="currentColor" opacity="0.85"/></svg> },
            { label: 'Уведомления', path: '/notifications', icon: <svg width="22" height="22" viewBox="0 0 22 22" fill="none"><path d="M11 2C11 2 5 5 5 12V17H17V12C17 5 11 2 11 2ZM9 19C9 20.1 9.9 21 11 21C12.1 21 13 20.1 13 19H9Z" fill="currentColor" opacity="0.85"/></svg> },
            { label: 'Профиль', path: '/profile', icon: <svg width="22" height="22" viewBox="0 0 22 22" fill="none"><circle cx="11" cy="8" r="4" fill="currentColor" opacity="0.85"/><path d="M3 20C3 16.134 6.582 13 11 13C15.418 13 19 16.134 19 20H3Z" fill="currentColor" opacity="0.85"/></svg> },
          ].map(({ label, path, icon }) => {
            const isActive = location.pathname === path || (path === '/' && ['/', '/lessons', '/theory', '/modules', '/contrast'].includes(location.pathname));
            return (
              <button key={path} onClick={() => navigate(path)} className="flex flex-col items-center gap-[3px] px-[8px] active:scale-90 transition-transform duration-75"
                style={{ color: isActive ? '#FF6B21' : '#798589' }}>
                {icon}
                <span className="font-['Roboto_Condensed:Medium',sans-serif] font-medium" style={{ fontSize: '10px' }}>{label}</span>
              </button>
            );
          })}
        </div>

        {/* ── Floating Gift icon ── */}
        <button
          onClick={() => setShowFeedbackModal(true)}
          className="absolute right-[16px] z-40 flex items-center justify-center rounded-full active:scale-90 transition-transform duration-75"
          style={{ bottom: '100px', width: '46px', height: '46px', background: '#4B595E', boxShadow: '0px 4px 10px rgba(0,0,0,0.4)' }}
        >
          <span style={{ fontSize: '20px' }}>🎁</span>
        </button>

        {/* ── Feedback Modal ── */}
        {showFeedbackModal && (
          <div className="absolute inset-0 z-[100] flex items-end">
            <div className="absolute inset-0 bg-black/60" onClick={() => setShowFeedbackModal(false)} />
            <div className="relative w-full flex flex-col gap-[20px] p-[24px] pb-[36px]"
              style={{ background: '#2C3438', borderRadius: '24px 24px 0 0', maxHeight: '75vh', overflowY: 'auto' }}>
              <div className="flex items-center justify-between">
                <p className="font-['Roboto_Condensed:Bold',sans-serif] font-bold text-[#f4f5fc] text-[22px]">Обратная связь</p>
                <button onClick={() => setShowFeedbackModal(false)} className="text-[#798589] active:scale-90 transition-transform">
                  <svg width="24" height="24" viewBox="0 0 24 24" fill="none"><path d="M18 6L6 18M6 6L18 18" stroke="currentColor" strokeWidth="2" strokeLinecap="round"/></svg>
                </button>
              </div>
              <div className="flex flex-col gap-[12px]">
                <p className="font-['Roboto_Condensed:Medium',sans-serif] font-medium text-[#f1f2fb] text-[16px]">Насколько был полезен урок?</p>
                <div className="flex gap-[8px]">
                  {[1,2,3,4,5].map(n => (
                    <button key={n} onClick={() => setFeedbackRating(n)}
                      className="flex-1 h-[44px] rounded-[12px] flex items-center justify-center transition-all active:scale-90"
                      style={{ background: feedbackRating >= n ? '#FF6B21' : '#374348', border: feedbackRating >= n ? 'none' : '1px solid #4B595E' }}>
                      <span className="font-['Roboto_Condensed:Bold',sans-serif] font-bold text-[#f1f2fb] text-[18px]">{n}</span>
                    </button>
                  ))}
                </div>
              </div>
              <div className="flex flex-col gap-[8px]">
                <p className="font-['Roboto_Condensed:Medium',sans-serif] font-medium text-[#f1f2fb] text-[16px]">Что было непонятно или что можно улучшить?</p>
                <textarea value={feedbackText} onChange={e => setFeedbackText(e.target.value)} placeholder="Напишите здесь..." rows={3}
                  className="w-full rounded-[12px] px-[14px] py-[10px] text-[#f1f2fb] resize-none"
                  style={{ background: '#374348', border: '1px solid #4B595E', outline: 'none', fontFamily: 'Roboto Condensed, sans-serif', fontSize: '15px', lineHeight: '1.4' }} />
              </div>
              <button onClick={() => { setShowFeedbackModal(false); setFeedbackRating(0); setFeedbackText(""); }}
                className="w-full h-[50px] rounded-[15px] flex items-center justify-center active:scale-95 transition-transform duration-75"
                style={{ background: '#FF6B21', boxShadow: '0px 4px 0px 0px #c54a0a' }}>
                <p className="font-['Roboto_Condensed:Bold',sans-serif] font-bold text-[#f1f2fb] text-[18px]">Отправить отзыв</p>
              </button>
            </div>
          </div>
        )}
      </div>
    );
  }

  return (
    <div className="contrast-page size-full">
    <Layout title="Контраст" showBack backPath="/lessons" rightContent={<RightWidgets />} leftWidth="820px" rightWidth="256px">
      <div className="flex flex-col gap-[20px] w-full">
        {/* Hero block — independent */}
            <div className="bg-[#404d52] rounded-[15px] p-[20px] w-full">
              {/* Hero + Title */}
              <div className="content-stretch flex gap-[20px] items-stretch relative shrink-0 w-full">
                {/* Left: image ~400px */}
                <div className="shrink-0 rounded-[15px] overflow-hidden self-stretch" style={{ width: '400px' }}>
                  <HeroImage />
                </div>
                {/* Right: title + meta */}
                <div className="flex flex-col gap-[14px] flex-1 py-[10px]">
                  <p className="font-['Roboto_Condensed:Bold',sans-serif] font-medium leading-[27.5px] relative shrink-0 text-[#f4f5fc] text-[32px]">Контраст в UX/UI</p>

                  <div className="flex-1" />

                  {/* Badges: right-aligned */}
                  <div className="content-stretch flex gap-[20px] items-center relative shrink-0 justify-end">
                    <div className="content-stretch flex gap-[5px] items-center justify-center relative shrink-0">
                      <TimeIcon />
                      <p className="font-['Roboto_Condensed:Medium',sans-serif] font-medium leading-[20px] relative shrink-0 text-[#f1f2fb] text-[16px] whitespace-nowrap">7 мин</p>
                    </div>
                  </div>
                </div>
              </div>
            </div>{/* end Hero block */}

            {/* Accordions */}
            <div className="content-stretch flex flex-col gap-[13px] items-center relative shrink-0 w-full">
                {QUIZ_SECTIONS.map((section, index) => {
                  const state = accordionStates[index];
                  const isCorrect = state.selectedAnswer === "right";
                  const isLast = index === 4;
                  const ContentComp = section.ContentComponent;
                  return (
                    <div key={index} data-csection={String(index)} className="w-full bg-[#374348] rounded-[15px] overflow-hidden">
                      {/* Header */}
                      <div
                        className={`${isMobile ? 'h-auto min-h-[100px]' : 'h-[120px]'} relative shrink-0 w-full flex items-center ${isUnlocked(index) ? "cursor-pointer" : "cursor-not-allowed"}`}
                        onClick={() => handleToggle(index)}
                      >
                        <div className="content-stretch flex items-center justify-between px-[30px] relative w-full">
                          <div className="content-stretch flex gap-[20px] items-center relative shrink-0">
                            {state.completed ? <GreenIndicator /> : state.hasIncorrectAnswer ? <OrangeIndicator /> : <GrayIndicator />}
                            <p
                              className="font-['Roboto_Condensed:Bold',sans-serif] font-medium leading-[27.5px] relative shrink-0 text-[26px] whitespace-nowrap"
                              style={{ color: !isUnlocked(index) ? "#4a5560" : openSections.has(index) ? "#f1f2fb" : "#798589" }}
                            >
                              {section.title}
                            </p>
                          </div>
                          <ChevronIcon isOpen={openSections.has(index)} isLocked={!isUnlocked(index)} />
                        </div>
                      </div>

                      {/* Expandable content */}
                      <div style={{ display: "grid", gridTemplateRows: openSections.has(index) ? "1fr" : "0fr", transition: "grid-template-rows 300ms ease" }}>
                        <div style={{ overflow: "hidden", minHeight: 0 }}>
                          <div className="flex flex-col items-center w-full">
                            <div className="content-stretch flex flex-col gap-[16px] items-center pb-[30px] px-[30px] relative w-full">
                              <div className="content-stretch flex flex-col gap-[25px] items-center relative shrink-0 w-full">
                                <div className="content-stretch flex flex-col gap-[25px] items-center relative shrink-0 w-full">
                                  <ContentComp />
                                </div>

                                {/* Outer quiz container */}
                                <div className="bg-[#3F4C52] rounded-[15px] w-full mt-[10px]">
                                  {/* Inner quiz container — 30px padding all sides (Fix #2) */}
                                  <div className={`${isMobile ? 'p-[20px]' : 'p-[30px]'} flex flex-col gap-[20px]`}>
                                    {/* Header row: question LEFT, label RIGHT (Fix #3) */}
                                    <div className="content-stretch flex items-center justify-between relative shrink-0 w-full">
                                      <p className="font-['Roboto_Condensed:Bold',sans-serif] font-medium leading-[27.5px] text-[#f1f2fb] text-[26px] flex-1 pr-[20px]">
                                        {section.question}
                                      </p>
                                      <div className="content-stretch flex gap-[7px] items-center relative shrink-0">
                                        <RedCardIcon />
                                        <p className="font-['Roboto_Condensed:Regular',sans-serif] font-normal leading-[1.2] relative shrink-0 text-[#ff6b21] text-[18px] whitespace-nowrap">
                                          {section.label}
                                        </p>
                                      </div>
                                    </div>

                                    {/* Answer cards — 30px from inner edges via p-[30px] (Fix #4) */}
                                    <div className={`content-stretch flex gap-[20px] relative shrink-0 w-full ${isMobile ? 'flex-col' : 'items-center'}`}>
                                      <QuizCardLeft
                                        isSelected={state.selectedAnswer === "left"}
                                        isCorrect={section.leftCorrect}
                                        showFeedback={state.showFeedback}
                                        onClick={() => handleAnswerSelect(index, "left")}
                                        disabled={state.showFeedback}
                                        contentNode={section.leftNode}
                                      />
                                      <QuizCardRight
                                        isSelected={state.selectedAnswer === "right"}
                                        isCorrect={section.rightCorrect}
                                        showFeedback={state.showFeedback}
                                        onClick={() => handleAnswerSelect(index, "right")}
                                        disabled={state.showFeedback}
                                        contentNode={section.rightNode}
                                      />
                                    </div>

                                    {/* Feedback */}
                                    {state.showFeedback && (
                                      <div className="content-stretch flex flex-wrap items-end gap-x-[20px] gap-y-[12px] justify-between relative shrink-0 w-full pointer-events-none">
                                        {isCorrect ? (
                                          <div className="content-stretch flex flex-col gap-[10px] items-start justify-center relative shrink-0 pr-[20px]" style={{ flex: '1 1 160px' }}>
                                            <div className="content-stretch flex gap-[12px] items-center relative shrink-0">
                                              <div className="content-stretch flex gap-[9px] items-end relative shrink-0">
                                                <PartyPopperIcon />
                                                <p className="font-['Roboto_Condensed:Bold',sans-serif] font-medium leading-[20.587px] relative shrink-0 text-[#cdf6db] text-[18px] whitespace-nowrap">Верно!</p>
                                              </div>
                                              <div className="content-stretch flex items-center justify-between relative shrink-0 w-[47px]">
                                                <p className="font-['Roboto_Condensed:Bold',sans-serif] font-medium leading-[20.587px] relative shrink-0 text-[#00d043] text-[18px] whitespace-nowrap">+15</p>
                                                <SparkleIcon />
                                              </div>
                                            </div>
                                            <p className="font-['Roboto_Condensed:Regular',sans-serif] font-normal leading-[1.2] relative shrink-0 text-[#cdf6db] text-[16px]">{section.correctFeedback}</p>
                                          </div>
                                        ) : (
                                          <div className="content-stretch flex flex-col gap-[10px] items-start justify-center relative shrink-0 pr-[20px]" style={{ flex: '1 1 160px' }}>
                                            <div className="flex gap-[10px] items-center">
                                              <FistIcon />
                                              <p className="font-['Roboto_Condensed:Bold',sans-serif] font-medium leading-[1.2] relative text-[#ffbaaa] text-[18px]">Почти получилось!</p>
                                            </div>
                                            <p className="font-['Roboto_Condensed:Regular',sans-serif] font-normal leading-[1.2] relative shrink-0 text-[16px] text-[#ffd8d2]">{section.incorrectFeedback}</p>
                                          </div>
                                        )}
                                        <button
                                          onClick={() => handleContinue(index)}
                                          className={`content-stretch flex gap-[10px] h-[59px] items-center justify-center px-[16px] relative rounded-[15px] shrink-0 w-[193.669px] cursor-pointer hover:translate-y-[1px] active:translate-y-[3px] transition-all pointer-events-auto ${
                                            isLast && state.showFeedback
                                              ? "bg-[#ff6b21] shadow-[0px_5px_0px_0px_#c54a0a] hover:shadow-[0px_4px_0px_0px_#c54a0a] active:shadow-[0px_1px_0px_0px_#c54a0a]"
                                              : "bg-[#f7f8fc] shadow-[0px_5px_0px_0px_#d2d4df] hover:shadow-[0px_4px_0px_0px_#d2d4df] active:shadow-[0px_1px_0px_0px_#d2d4df]"
                                          }`}
                                        >
                                          {isLast && state.showFeedback && <Zap className="h-[24px] w-[17px] text-[#f1f2fb]" fill="currentColor" />}
                                          <p className={`font-['Roboto_Condensed:Bold',sans-serif] font-medium leading-[22.852px] relative shrink-0 text-[24px] whitespace-nowrap ${isLast && state.showFeedback ? "text-[#f1f2fb]" : "text-[#343e42]"}`}>
                                            {isLast && state.showFeedback ? "Начать квиз" : "Продолжить"}
                                          </p>
                                        </button>
                                      </div>
                                    )}
                                  </div>
                                </div>
                              </div>
                            </div>
                          </div>
                        </div>
                      </div>
                    </div>
                  );
                })}
            </div>

      </div>
    </Layout>
    </div>
  );
}