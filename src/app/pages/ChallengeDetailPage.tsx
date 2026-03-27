import { useState, useRef, useId, useEffect } from "react";
import { useIsMobile } from "../components/ui/use-mobile";
import { useLocation } from "react-router";
import Layout from "../components/Layout";
import { HeroPhoneCard, ExampleContent } from "../../imports/Frame-185-621";
import { ChallengePhone1, ChallengePhone2, ChallengePhone3 } from "../../imports/Frame481451";
import svgPaths from "../../imports/svg-ns2c3tgkyt";
import svgInitial from "../../imports/svg-tq18tvw1l4";
import svgDone from "../../imports/svg-ljco7xguob";
import svgCardPaths from "../../imports/svg-u7gh1bm86c";
import { Zap } from "lucide-react";
import SkillsIcon from "../../imports/ЧтоВыПрокачиваете";
import TaskIcon from "../../imports/Задание";
import RequirementsIcon from "../../imports/Требования";
import ExampleIcon from "../../imports/Пример";
import { projectId, publicAnonKey } from "../../../utils/supabase/info";
import { useUserSafe } from "../context/UserContext";
import { useAuthSafe } from "../context/AuthContext";
import svgMfoan from "../../imports/svg-mfoan0qzpw";
import { getChallengeStatus, setChallengeStatus } from "./ChallengesPage";

// ── Challenge content data ────────────────────────────────────────────────────

interface ChallengeContent {
  title: string;
  subtitle: string;
  time: string;
  level: string;
  xp: number;
  skills: string[];
  context: string[];
  task: string;
  requirements: string[];
  screenSize: string;
  tip: string;
  HeroPhone: React.ComponentType;
  hasExample?: boolean;
  heroImage?: string;
}

const CHALLENGE_CONTENT: Record<string, ChallengeContent> = {
  "challenge-health": {
    title: "Интерфейс приложения здоровья",
    subtitle: "Создайте стартовый экран приложения для отслеживания здоровья.",
    time: "25 мин",
    level: "Джун",
    xp: 1250,
    skills: [
      "визуальная иерархия интерфейса",
      "использование контраста",
      "проектирование UI",
      "работа с карточной структурой",
    ],
    context: [
      "Вы дизайнер в стартапе здоровья.",
      "Команда создает приложение, которое помогает пользователям: отслеживать шаги, следить за пульсом, контролировать сон.",
    ],
    task: "Создать главный экран приложения.",
    requirements: [
      "количество шагов",
      "пульс",
      "кнопку «Начать тренировку»",
      "карточки активности",
    ],
    screenSize: "375 x 812",
    tip: "Используйте контрастную кнопку CTA.",
    HeroPhone: ChallengePhone1,
    hasExample: true,
    heroImage: "/challenge-health-preview.png",
  },
  "challenge-fintech": {
    title: "Онбординг для финтех-приложения",
    subtitle: "Спроектируйте экран приветствия платёжного сервиса.",
    time: "30 мин",
    level: "Джун",
    xp: 1250,
    skills: [
      "проектирование CTA",
      "визуальная иерархия",
      "паттерны доверия в UI",
      "типографика и пространство",
    ],
    context: [
      "Вы дизайнер в финтех-стартапе.",
      "Команда запускает мобильное приложение для быстрых переводов и оплаты услуг.",
      "Нужно создать первый экран онбординга, который формирует доверие и мотивирует начать использование.",
    ],
    task: "Создать экран онбординга для платёжного приложения.",
    requirements: [
      "заголовок с основным преимуществом",
      "иллюстрацию или иконку сервиса",
      "3 ключевые фичи (коротко)",
      "кнопку «Начать» и ссылку «Войти»",
    ],
    screenSize: "375 x 812",
    tip: "Первый экран должен отвечать на вопрос «Зачем мне это?» — используйте ценностное предложение, а не описание функций.",
    HeroPhone: ChallengePhone2,
    hasExample: false,
    heroImage: "/challenge-fintech-preview.png",
  },
  "challenge-marketplace": {
    title: "Карточки товаров маркетплейса",
    subtitle: "Разработайте карточки продуктов для e-commerce приложения.",
    time: "35 мин",
    level: "Мидл",
    xp: 1500,
    skills: [
      "дизайн карточек",
      "иерархия информации",
      "отображение цены и скидки",
      "e-commerce UX паттерны",
    ],
    context: [
      "Вы дизайнер в команде маркетплейса.",
      "Пользователи просматривают каталог товаров в мобильном приложении.",
      "Нужно создать карточку товара, которая показывает всё необходимое и побуждает к покупке.",
    ],
    task: "Создать карточку товара для мобильного маркетплейса (2 варианта: обычная и со скидкой).",
    requirements: [
      "фото товара",
      "название и краткое описание",
      "цена (и цена со скидкой)",
      "рейтинг и количество отзывов",
      "кнопку «В корзину»",
    ],
    screenSize: "375 x 812",
    tip: "Скидка должна «бросаться в глаза» — используйте контраст цвета и зачёркнутую старую цену.",
    HeroPhone: ChallengePhone3,
    hasExample: false,
    heroImage: "/challenge-marketplace-preview.png",
  },
};

const DEFAULT_CHALLENGE = CHALLENGE_CONTENT["challenge-health"];

// ── Level icon (staircase) ────────────────────────────────────────────────────

function LevelIcon() {
  const uid = useId().replace(/:/g, "");
  const maskId = `lv-${uid}`;
  return (
    <div className="h-[15px] overflow-clip relative shrink-0 w-[17px]">
      <div className="absolute inset-[22.57%_5.88%_15.9%_5.88%]">
        <svg className="absolute block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 14.9997 9.23063">
          <defs>
            <mask id={maskId}>
              <rect x="0" y="0" width="5.1" height="9.3" fill="white" />
              <rect x="5" y="0" width="10"  height="9.3" fill="white" fillOpacity="0.6" />
            </mask>
          </defs>
          <g mask={`url(#${maskId})`}>
            <path d={svgMfoan.p1f3ddd00} fill="#F1F2FB" />
            <path d={svgMfoan.p1dcc7b80} fill="#F1F2FB" />
            <path d={svgMfoan.p36483400} fill="#F1F2FB" />
          </g>
        </svg>
      </div>
    </div>
  );
}

// ── Shared styles ─────────────────────────────────────────────────────────────

const TEXT_TITLE  = "font-['Roboto_Condensed:Medium',sans-serif] font-medium";
const TEXT_BODY   = "font-['Roboto_Condensed:Regular',sans-serif] font-normal";
const TEXT_MEDIUM = "font-['Roboto_Condensed:Medium',sans-serif] font-medium";

// ── Chevron ───────────────────────────────────────────────────────────────────

function ChevronIcon({ isOpen }: { isOpen: boolean }) {
  return (
    <div className="flex h-[8px] items-center justify-center relative shrink-0 w-[16px]">
      <div
        className="flex-none"
        style={{ transition: "transform 300ms ease", transform: isOpen ? "rotate(90deg)" : "rotate(-90deg)" }}
      >
        <div className="h-[16px] relative w-[8px]">
          <div className="absolute inset-[-5%_-10%_-5%_-1.72%]">
            <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 11.1716 22">
              <path d={svgPaths.p23f95480} stroke="#798589" strokeLinecap="round" strokeWidth="3" />
            </svg>
          </div>
        </div>
      </div>
    </div>
  );
}

// ── Accordion section ─────────────────────────────────────────────────────────

function AccordionSection({ icon, title, isOpen, onToggle, children, sectionIdx }: {
  icon: React.ReactNode;
  title: string;
  isOpen: boolean;
  onToggle: () => void;
  children: React.ReactNode;
  sectionIdx: number;
}) {
  return (
    <div
      className="flex flex-col rounded-[15px] overflow-hidden w-full"
      style={{ background: "#343e42" }}
      data-accordion-idx={sectionIdx}
    >
      <div
        className="h-[120px] flex items-center justify-between px-[20px] cursor-pointer select-none"
        onClick={onToggle}
      >
        <div className="flex items-center gap-[20px]">
          {icon}
          <p
            className="font-['Roboto_Condensed:Medium',sans-serif] font-medium leading-[27.5px] text-[24px] whitespace-nowrap"
            style={{ color: isOpen ? "#f1f2fb" : "#798589", transition: "color 150ms" }}
          >
            {title}
          </p>
        </div>
        <ChevronIcon isOpen={isOpen} />
      </div>
      <div style={{ display: "grid", gridTemplateRows: isOpen ? "1fr" : "0fr", transition: "grid-template-rows 300ms ease" }}>
        <div style={{ overflow: "hidden", minHeight: 0 }}>
          <div className="flex flex-col gap-[20px] pb-[30px] px-[20px]">
            {children}
          </div>
        </div>
      </div>
    </div>
  );
}

// ── Skill tag ─────────────────────────────────────────────────────────────────

function SkillTag({ label }: { label: string }) {
  return (
    <div className="bg-[#394449] flex items-center pb-[21px] pt-[20px] px-[20px] rounded-[12px]">
      <p className={`${TEXT_BODY} leading-[22px] text-[#f1f2fb] text-[18px]`}>{label}</p>
    </div>
  );
}

// ── Content sections ──────────────────────────────────────────────────────────

function SkillsContent({ skills }: { skills: string[] }) {
  return (
    <div className="flex flex-wrap gap-[10px]">
      {skills.map(s => <SkillTag key={s} label={s} />)}
    </div>
  );
}

function TaskContent({ content }: { content: ChallengeContent }) {
  return (
    <div className="flex flex-col gap-[30px]">
      <div className="flex flex-col gap-[20px]">
        <p className={`${TEXT_TITLE} leading-[22px] text-[#f1f2fb] text-[18px]`}>Контекст:</p>
        <div className="bg-[#394449] rounded-[12px] px-[27px] py-[20px]">
          <div className={`${TEXT_BODY} leading-[22px] text-[#f1f2fb] text-[18px] flex flex-col gap-[8px]`}>
            {content.context.map((line, i) => <p key={i}>{line}</p>)}
          </div>
        </div>
      </div>
      <div className="flex flex-col gap-[20px]">
        <p className={`${TEXT_TITLE} leading-[22px] text-[#f1f2fb] text-[18px]`}>Ваша задача:</p>
        <div className="bg-[#394449] rounded-[12px] px-[27px] py-[20px]">
          <p className={`${TEXT_BODY} leading-[22px] text-[#f1f2fb] text-[18px] opacity-80`}>{content.task}</p>
        </div>
      </div>
    </div>
  );
}

function RequirementsContent({ content }: { content: ChallengeContent }) {
  return (
    <div className="flex flex-col gap-[30px]">
      <div className="flex flex-col gap-[20px]">
        <p className={`${TEXT_TITLE} leading-[22px] text-[#f1f2fb] text-[18px]`}>Экран должен содержать:</p>
        <div className="bg-[#394449] rounded-[12px] px-[27px] py-[20px]">
          <ul className={`list-disc ${TEXT_BODY} leading-[22px] text-[#f1f2fb] text-[18px]`}>
            {content.requirements.map((r, i) => (
              <li key={i} className={`ms-[27px] ${i < content.requirements.length - 1 ? "mb-0" : ""}`}><span>{r}</span></li>
            ))}
          </ul>
        </div>
      </div>
      <div className="flex flex-col gap-[20px]">
        <p className={`${TEXT_TITLE} leading-[22px] text-[#f1f2fb] text-[18px]`}>Дополнительно:</p>
        <div className="bg-[#394449] rounded-[12px] px-[27px] py-[20px] flex flex-col gap-[21px]">
          <div className={`${TEXT_BODY} flex items-center justify-between leading-[22px] text-[#f1f2fb] text-[18px] opacity-80`}>
            <span>Размер экрана:</span>
            <span>{content.screenSize}</span>
          </div>
          <div className="h-0 relative w-full">
            <div className="absolute inset-[-0.5px_-0.1%]">
              <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 472 1">
                <path d="M0.5 0.5H471.5" stroke="#5B6E77" strokeLinecap="round" />
              </svg>
            </div>
          </div>
          <p className={`${TEXT_BODY} leading-[22px] text-[#f1f2fb] text-[18px] opacity-80`}>{content.tip}</p>
        </div>
      </div>
    </div>
  );
}

// ── Example section (only for health challenge) ───────────────────────────────

function ExampleSection() {
  const [isZoomed, setIsZoomed] = useState(false);
  const exampleRef = useRef<HTMLDivElement>(null);

  const handleDownload = async () => {
    const el = exampleRef.current;
    if (!el) return;
    try {
      const { default: html2canvas } = await import('html2canvas');
      const canvas = await html2canvas(el, { backgroundColor: null, scale: 2, useCORS: true });
      const link = document.createElement('a');
      link.download = 'challenge-example.png';
      link.href = canvas.toDataURL('image/png');
      link.click();
    } catch {
      const w = window.open();
      if (w) {
        w.document.write(`<html><body style="margin:0;background:#38444a">${el.innerHTML}</body></html>`);
        w.document.close();
      }
    }
  };

  return (
    <div className="w-full relative">
      <div ref={exampleRef}>
        <ExampleContent />
      </div>
      <div
        className="absolute top-0 left-0 right-0 flex items-center justify-between pointer-events-none"
        style={{ paddingLeft: '142px', paddingRight: '142px', paddingTop: '20px' }}
      >
        <button
          onClick={handleDownload}
          title="Скачать пример"
          className="pointer-events-auto w-[25.5px] h-[25.5px] rounded-full opacity-0 hover:opacity-30 active:opacity-50 bg-white transition-opacity cursor-pointer"
        />
        <button
          onClick={() => setIsZoomed(true)}
          title="Увеличить"
          className="pointer-events-auto w-[30.75px] h-[30px] rounded-full opacity-0 hover:opacity-30 active:opacity-50 bg-white transition-opacity cursor-pointer"
        />
      </div>
      {isZoomed && (
        <div
          className="fixed inset-0 z-50 flex items-center justify-center bg-black/75 cursor-zoom-out"
          onClick={() => setIsZoomed(false)}
        >
          <div className="flex flex-col items-center gap-[16px]" onClick={e => e.stopPropagation()}>
            <div style={{ transform: 'scale(1.5)', transformOrigin: 'center' }}>
              <ExampleContent />
            </div>
            <button
              onClick={() => setIsZoomed(false)}
              className="mt-[80px] bg-[#404d52] hover:bg-[#4d5d64] text-[#f1f2fb] text-[18px] px-[32px] py-[14px] rounded-[15px] transition-colors cursor-pointer"
            >
              Закрыть
            </button>
          </div>
        </div>
      )}
    </div>
  );
}

// ── Hero card ─────────────────────────────────────────────────────────────────

function HeroCard({ content }: { content: ChallengeContent }) {
  const { HeroPhone } = content;
  return (
    <div className="flex flex-col gap-[20px] w-full">
      {/* Phone hero */}
      {content.heroImage ? (
        <div className="rounded-[15px] w-full flex items-center justify-center relative overflow-hidden" style={{ height: 326 }}>
          <img src={content.heroImage} alt={content.title} style={{ maxHeight: 326, maxWidth: "100%", objectFit: "contain", display: "block" }} />
          <div className="absolute inset-x-0 bottom-0" style={{ height: 120, background: "linear-gradient(to bottom, transparent, #282F33)" }} />
        </div>
      ) : (
        <div className="bg-[#38444a] rounded-[20px] w-full h-[220px] flex items-center justify-center overflow-hidden">
          <div style={{ transform: "scale(0.9)", transformOrigin: "center" }}>
            <HeroPhone />
          </div>
        </div>
      )}
      <div className="flex flex-col gap-[40px]">
        <div className="flex flex-col gap-[9px]">
          <p className={`${TEXT_TITLE} leading-[35px] text-[#f4f5fc] text-[32px]`}>{content.title}</p>
          <p className={`${TEXT_BODY} leading-[22px] text-[#f1f2fb] text-[18px] opacity-80`}>{content.subtitle}</p>
        </div>
        <div className="flex flex-wrap gap-[5px_20px] items-center">
          <div className="flex gap-[5px] items-center">
            <div className="overflow-clip relative shrink-0 size-[14px]">
              <div className="absolute inset-[0_11.67%_0_11.66%]">
                <svg className="absolute block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 10.7333 14">
                  <path d={svgPaths.p11af9000} fill="#F1F2FB" />
                </svg>
              </div>
            </div>
            <p className={`${TEXT_MEDIUM} leading-[20px] text-[#f1f2fb] text-[16px] whitespace-nowrap`}>{content.time}</p>
          </div>
          <div className="flex gap-[5px] items-center">
            <LevelIcon />
            <p className={`${TEXT_MEDIUM} leading-[20px] text-[#f1f2fb] text-[16px] whitespace-nowrap`}>{content.level}</p>
          </div>
          <div className="flex gap-[5px] items-center">
            <Zap size={14} className="shrink-0 text-[#F1F2FB]" fill="#F1F2FB" />
            <p className={`${TEXT_MEDIUM} leading-[20px] text-[#f1f2fb] text-[16px] whitespace-nowrap`}>+{content.xp} XP</p>
          </div>
        </div>
      </div>
    </div>
  );
}

// ── Info popup ────────────────────────────────────────────────────────────────

function InfoPopup({ onClose }: { onClose: () => void }) {
  const steps = [
    "Откройте файл в Figma",
    "Нажмите кнопку Share",
    "Выберите Copy link",
    "Убедитесь что файл доступен для просмотра",
    "Вставьте ссылку в поле",
  ];
  return (
    <>
      <div className="fixed inset-0 z-40" onClick={onClose} />
      <div
        className="absolute z-50 flex flex-col gap-[12px] rounded-[16px] p-[20px]"
        style={{
          width: 268,
          bottom: "calc(100% + 12px)",
          right: 0,
          background: "linear-gradient(166.769deg, rgb(56, 67, 72) 2.4187%, rgb(68, 80, 86) 98.527%)",
          border: "1.5px solid rgba(160,163,173,0.2)",
          boxShadow: "0px 8px 24px rgba(0,0,0,0.4)",
        }}
      >
        <p className={`${TEXT_TITLE} leading-[20px] text-[#f1f2fb]`} style={{ fontSize: 15 }}>
          Как получить ссылку Figma
        </p>
        <div className="flex flex-col gap-[8px]">
          {steps.map((step, i) => (
            <div key={i} className="flex items-start gap-[10px]">
              <div
                className="shrink-0 rounded-full flex items-center justify-center"
                style={{ width: 20, height: 20, background: "#46545b", marginTop: 1 }}
              >
                <span className={`${TEXT_MEDIUM} text-[#f1f2fb]`} style={{ fontSize: 10, lineHeight: 1 }}>{i + 1}</span>
              </div>
              <p className={`${TEXT_BODY} leading-[18px] text-[rgba(244,245,252,0.8)] flex-1`} style={{ fontSize: 13 }}>{step}</p>
            </div>
          ))}
        </div>
      </div>
    </>
  );
}

// ── Submit block ──────────────────────────────────────────────────────────────

function SubmitBlock({ challengeId, challengeName }: { challengeId: string; challengeName: string }) {
  const userData = useUserSafe();
  const auth = useAuthSafe();
  const [status, setStatus] = useState(() => getChallengeStatus(challengeId));
  const [url, setUrl]                   = useState("");
  const [showInfo, setShowInfo]         = useState(false);
  const [inputFocused, setInputFocused] = useState(false);
  const [isSubmitting, setIsSubmitting] = useState(false);

  const handleSubmit = async () => {
    if (!url.trim()) {
      alert("Пожалуйста, вставьте ссылку на Figma");
      return;
    }
    if (!userData) {
      alert("Пользователь не авторизован");
      return;
    }
    setIsSubmitting(true);
    try {
      const response = await fetch(`https://${projectId}.supabase.co/functions/v1/make-server-d627d1b0/challenge/submit`, {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
          "Authorization": `Bearer ${publicAnonKey}`,
        },
        body: JSON.stringify({
          challengeId,
          challengeName,
          userId: auth?.userId ?? userData?.email ?? "anonymous",
          figmaLink: url,
        }),
      });
      const data = await response.json();
      if (!response.ok) {
        alert(`Ошибка отправки: ${data.error}`);
        setIsSubmitting(false);
        return;
      }
      setChallengeStatus(challengeId, "pending");
      setStatus("pending");
    } catch (error) {
      alert(`Ошибка сети: ${error}`);
    } finally {
      setIsSubmitting(false);
    }
  };

  // ── Pending state ──
  if (status === "pending") {
    return (
      <div className="flex flex-col gap-[16px] w-full">
        <div
          className="rounded-[15px] flex flex-col gap-[14px]"
          style={{ background: "#343e42", border: "2px solid rgba(255,177,33,0.4)", padding: "20px" }}
        >
          <div className="flex gap-[7px] items-center px-[12px] h-[32px] rounded-full self-start" style={{ background: "#2c2510" }}>
            <svg width="14" height="14" viewBox="0 0 19 19" fill="none">
              <path d={svgCardPaths.p10e6fc80} fill="#FFB121" />
              <path d={svgCardPaths.pe9e5cc0} fill="#FFB121" />
              <path d={svgCardPaths.p2ae2c800} fill="#FFB121" />
              <path d={svgCardPaths.p8839180} fill="#FFB121" />
              <path d={svgCardPaths.pb4b6780} fill="#FFB121" />
            </svg>
            <p className={`${TEXT_TITLE} text-[13px] leading-[18px] whitespace-nowrap`} style={{ color: "#FFB121" }}>На проверке</p>
          </div>
          <div className="rounded-[12px]" style={{ background: "#394449", padding: "20px" }}>
            <p className={`${TEXT_BODY} text-[15px] leading-[22px]`} style={{ color: "rgba(244,245,252,0.4)" }}>
              Вызов отправлен на проверку. Проверка занимает ~24 часа.
            </p>
          </div>
        </div>
      </div>
    );
  }

  // ── Reviewed state ──
  if (status === "reviewed") {
    return (
      <div className="flex flex-col gap-[16px] w-full">
        <div
          className="rounded-[15px] flex flex-col gap-[14px]"
          style={{ background: "linear-gradient(145deg, #1a3022 0%, #343e42 55%)", border: "2px solid #1e4028", padding: "20px" }}
        >
          <div className="flex gap-[7px] items-center px-[12px] h-[32px] rounded-full self-start" style={{ background: "#162418" }}>
            <div className="relative shrink-0 size-[14px]">
              <svg className="absolute block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 18 18">
                <g clipPath="url(#clip_rev)">
                  <path d={svgDone.p2dc71b30} fill="#5EDD60" />
                  <path d={svgDone.p14c44980} fill="white" />
                </g>
                <defs><clipPath id="clip_rev"><rect fill="white" height="18" width="18" /></clipPath></defs>
              </svg>
            </div>
            <p className={`${TEXT_TITLE} text-[13px] leading-[18px] whitespace-nowrap`} style={{ color: "#00C143" }}>Одобрено</p>
          </div>
          <p className={`${TEXT_MEDIUM} text-[13px] whitespace-nowrap`} style={{ color: "rgba(94,221,96,0.7)" }}>+{CHALLENGE_CONTENT[challengeId]?.xp ?? 1250} XP начислено</p>
          <div className="rounded-[12px]" style={{ background: "#394449", padding: "20px" }}>
            <p className={`${TEXT_BODY} text-[15px] leading-[22px]`} style={{ color: "rgba(244,245,252,0.4)" }}>
              Работа проверена ментором. Отличный результат!
            </p>
          </div>
        </div>
      </div>
    );
  }

  // ── Rejected state ──
  if (status === "rejected") {
    return (
      <div className="flex flex-col gap-[16px] w-full">
        <div
          className="rounded-[15px] flex flex-col gap-[14px]"
          style={{ background: "#343e42", border: "2px solid rgba(255,107,33,0.4)", padding: "20px" }}
        >
          <div className="flex gap-[7px] items-center px-[12px] h-[32px] rounded-full self-start" style={{ background: "#2a1f10" }}>
            <svg width="14" height="14" viewBox="0 0 24 24" fill="none">
              <path d="M12 9v4m0 4h.01M10.29 3.86L1.82 18a2 2 0 0 0 1.71 3h16.94a2 2 0 0 0 1.71-3L13.71 3.86a2 2 0 0 0-3.42 0z" stroke="#FF6B21" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" />
            </svg>
            <p className={`${TEXT_TITLE} text-[13px] leading-[18px] whitespace-nowrap`} style={{ color: "#FF6B21" }}>Нужно доработать</p>
          </div>
          <div className="rounded-[12px]" style={{ background: "#394449", padding: "20px" }}>
            <p className={`${TEXT_BODY} text-[15px] leading-[22px]`} style={{ color: "rgba(244,245,252,0.4)" }}>
              Ментор оставил комментарии. Исправьте работу и отправьте снова.
            </p>
          </div>
        </div>
        {/* Re-submit form */}
        <div className="relative px-[20px] rounded-[15px] h-[56px] flex items-center justify-between w-full"
          style={{ backgroundImage: "linear-gradient(171.89deg, rgb(44, 53, 56) 2.4187%, rgb(56, 67, 72) 98.527%, rgb(44, 53, 56) 116.25%)" }}>
          <div aria-hidden="true" className="absolute border-[2px] border-[rgba(160,163,173,0.2)] border-solid inset-[-2px] pointer-events-none rounded-[15px]" />
          <div className="relative z-10 flex gap-[8px] items-center flex-1 min-w-0">
            <div className="overflow-clip relative shrink-0 size-[16px]" style={{ opacity: 1, transition: "opacity 150ms" }}>
              <svg className="absolute block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 19.0001 18.9956">
                <path d={svgInitial.p19febe00} fill="#92979D" />
                <path d={svgInitial.p1c506830} fill="#92979D" />
                <path d={svgInitial.p1f263800} fill="#92979D" />
              </svg>
            </div>
            <input
              type="url"
              value={url}
              onChange={e => setUrl(e.target.value)}
              placeholder="Новая ссылка на Figma"
              className={`${TEXT_BODY} bg-transparent text-[15px] leading-[20px] flex-1 min-w-0 outline-none border-none`}
              style={{ color: "rgba(244,245,252,0.8)", caretColor: "rgba(244,245,252,0.8)" }}
            />
          </div>
          <div className="absolute inset-[-2px] pointer-events-none rounded-[inherit] shadow-[inset_-3px_0px_3px_0px_#384348]" />
        </div>
        <div
          className={`group bg-[#f7f8fc] flex h-[56px] items-center justify-center relative rounded-[15px] select-none hover:translate-y-[2px] active:translate-y-[4px] transition-transform duration-75 w-full ${isSubmitting ? "opacity-50 cursor-wait" : "cursor-pointer"}`}
          onClick={isSubmitting ? undefined : handleSubmit}
        >
          <div aria-hidden="true" className="absolute inset-0 border-[0.835px] border-solid border-transparent pointer-events-none rounded-[15px] shadow-[0px_3px_0px_0px_#bcbec8] group-hover:shadow-[0px_2px_0px_0px_#bcbec8] group-active:shadow-none transition-shadow duration-75" />
          <p className={`${TEXT_TITLE} leading-[24px] text-[#2d373b] text-[24px] whitespace-nowrap`}>
            {isSubmitting ? "Отправка..." : "Отправить повторно"}
          </p>
        </div>
      </div>
    );
  }

  // ── Not submitted (default) ──
  return (
    <div className="flex flex-col gap-[16px] w-full">
      <div
        className="relative px-[20px] rounded-[15px] h-[56px] flex items-center justify-between w-full"
        style={{ backgroundImage: "linear-gradient(171.89deg, rgb(44, 53, 56) 2.4187%, rgb(56, 67, 72) 98.527%, rgb(44, 53, 56) 116.25%)" }}
      >
        <div aria-hidden="true" className="absolute border-[2px] border-[rgba(160,163,173,0.2)] border-solid inset-[-2px] pointer-events-none rounded-[15px]" />
        <div className="relative z-10 flex gap-[8px] items-center flex-1 min-w-0">
          <div className="overflow-clip relative shrink-0 size-[16px]" style={{ opacity: inputFocused ? 0.5 : 1, transition: "opacity 150ms" }}>
            <svg className="absolute block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 19.0001 18.9956">
              <path d={svgInitial.p19febe00} fill="#92979D" />
              <path d={svgInitial.p1c506830} fill="#92979D" />
              <path d={svgInitial.p1f263800} fill="#92979D" />
            </svg>
          </div>
          <input
            type="url"
            value={url}
            onChange={e => setUrl(e.target.value)}
            onFocus={() => setInputFocused(true)}
            onBlur={() => setInputFocused(false)}
            placeholder="Вставьте ссылку"
            className={`${TEXT_BODY} bg-transparent text-[15px] leading-[20px] flex-1 min-w-0 outline-none border-none`}
            style={{ color: "rgba(244,245,252,0.8)", caretColor: "rgba(244,245,252,0.8)" }}
          />
        </div>
        <div className="relative z-10" style={{ opacity: inputFocused ? 0.5 : 1, transition: "opacity 150ms" }}>
          <div className="overflow-clip relative shrink-0 size-[16px] cursor-pointer" onClick={() => setShowInfo(v => !v)}>
            <svg className="absolute block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 16 16">
              <path d={svgInitial.p2c4b1e00} fill="#93999E" fillOpacity="0.6" />
            </svg>
          </div>
          {showInfo && <InfoPopup onClose={() => setShowInfo(false)} />}
        </div>
        <div className="absolute inset-[-2px] pointer-events-none rounded-[inherit] shadow-[inset_-3px_0px_3px_0px_#384348]" />
      </div>

      <div
        className={`group bg-[#f7f8fc] flex h-[56px] items-center justify-center relative rounded-[15px] select-none hover:translate-y-[2px] active:translate-y-[4px] transition-transform duration-75 w-full ${isSubmitting ? "opacity-50 cursor-wait" : "cursor-pointer"}`}
        onClick={isSubmitting ? undefined : handleSubmit}
      >
        <div aria-hidden="true" className="absolute inset-0 border-[0.835px] border-solid border-transparent pointer-events-none rounded-[15px] shadow-[0px_3px_0px_0px_#bcbec8] group-hover:shadow-[0px_2px_0px_0px_#bcbec8] group-active:shadow-none transition-shadow duration-75" />
        <p className={`${TEXT_TITLE} leading-[24px] text-[#2d373b] text-[24px] whitespace-nowrap`}>
          {isSubmitting ? "Отправка..." : "Отправить работу"}
        </p>
      </div>

      <div className="flex gap-[8px] items-start px-[4px]">
        <div className="relative shrink-0 size-[14px] mt-[2px]">
          <svg className="absolute block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 18 18">
            <path d={svgInitial.pa7482f0} fill="#FAC100" />
            <path d={svgInitial.p3b885a20} fill="#FF9500" />
            <path d={svgInitial.p1bee9700} fill="#2D4A60" />
            <path d={svgInitial.pd85c380} fill="#2D4A60" />
            <path d={svgInitial.p33926b70} fill="#263F52" />
          </svg>
        </div>
        <p className={`${TEXT_BODY} leading-[18px] text-[rgba(244,245,252,0.3)] text-[13px]`}>
          Файл должен быть открыт для просмотра в Figma
        </p>
      </div>
    </div>
  );
}

// ── Page ──────────────────────────────────────────────────────────────────────

export default function ChallengeDetailPage() {
  const location = useLocation();
  const isMobile = useIsMobile();
  const challengeId   = (location.state as any)?.challengeId   ?? "challenge-health";
  const challengeName = (location.state as any)?.challengeName ?? "Интерфейс приложения здоровья";
  const content = CHALLENGE_CONTENT[challengeId] ?? DEFAULT_CHALLENGE;

  const [openSections, setOpenSections] = useState<Set<number>>(new Set([0, 1]));
  const [submitVisible, setSubmitVisible] = useState(true);
  const lastScrollRef = useRef(0);

  useEffect(() => {
    if (!isMobile) return;
    const scrollEl = document.querySelector<HTMLElement>('.overflow-y-auto.overflow-x-hidden.scrollbar-hide');
    if (!scrollEl) return;
    const onScroll = () => {
      const currentY = scrollEl.scrollTop;
      const delta = currentY - lastScrollRef.current;
      if (Math.abs(delta) > 6) {
        setSubmitVisible(delta < 0);
        lastScrollRef.current = currentY;
      }
    };
    scrollEl.addEventListener('scroll', onScroll, { passive: true });
    return () => scrollEl.removeEventListener('scroll', onScroll);
  }, [isMobile]);

  const toggleSection = (i: number) => {
    setOpenSections(prev => {
      const next = new Set(prev);
      if (prev.has(i)) next.delete(i);
      else next.add(i);
      return next;
    });
  };

  return (
    <>
      <Layout title={content.title} rightWidth="320px" showBack backPath="/challenges">
        <div className="flex flex-col gap-[13px] w-full">
          <div className="pb-[10px] pt-[0px]">
            <HeroCard content={content} />
          </div>

          <AccordionSection
            icon={<div className="relative shrink-0" style={{ width: 26, height: 26 }}><SkillsIcon /></div>}
            title="Что вы прокачаете"
            isOpen={openSections.has(0)}
            onToggle={() => toggleSection(0)}
            sectionIdx={0}
          >
            <SkillsContent skills={content.skills} />
          </AccordionSection>

          <AccordionSection
            icon={<div className="relative shrink-0" style={{ width: 26, height: 26 }}><TaskIcon /></div>}
            title="Задание"
            isOpen={openSections.has(1)}
            onToggle={() => toggleSection(1)}
            sectionIdx={1}
          >
            <TaskContent content={content} />
          </AccordionSection>

          <AccordionSection
            icon={<div className="relative shrink-0" style={{ width: 26, height: 26 }}><RequirementsIcon /></div>}
            title="Требования"
            isOpen={openSections.has(2)}
            onToggle={() => toggleSection(2)}
            sectionIdx={2}
          >
            <RequirementsContent content={content} />
          </AccordionSection>

          {content.hasExample && (
            <AccordionSection
              icon={<div className="relative shrink-0" style={{ width: 28, height: 28 }}><ExampleIcon /></div>}
              title="Пример"
              isOpen={openSections.has(3)}
              onToggle={() => toggleSection(3)}
              sectionIdx={3}
            >
              <ExampleSection />
            </AccordionSection>
          )}

          <div style={{ height: isMobile ? 140 : 110 }} />
        </div>
      </Layout>

      <div
        style={isMobile ? {
          position: "fixed",
          bottom: submitVisible ? 52 : 4,
          left: 0,
          right: 0,
          padding: "10px 16px 14px",
          zIndex: 25,
          background: "linear-gradient(to top, #282F33 60%, transparent)",
          transition: "bottom 0.3s ease",
        } : {
          position: "fixed",
          bottom: 20,
          right: "max(40px, calc((100vw - 1440px) / 2 + 40px))",
          width: 280,
          zIndex: 50,
        }}
      >
        {isMobile ? (
          <div style={{ background: "#2C3538", borderRadius: 18, padding: "14px 14px 12px", boxShadow: "0 -2px 20px 0 rgba(0,0,0,0.35)" }}>
            <SubmitBlock challengeId={challengeId} challengeName={challengeName} />
          </div>
        ) : (
          <SubmitBlock challengeId={challengeId} challengeName={challengeName} />
        )}
      </div>
    </>
  );
}
