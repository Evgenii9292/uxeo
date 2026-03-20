import { useState, useEffect } from "react";
import { useLocation, useNavigate } from "react-router";
import Layout from "../components/Layout";
import svgPaths from "../../imports/svg-ns2c3tgkyt";
import svgInitial from "../../imports/svg-tq18tvw1l4";
import svgDone from "../../imports/svg-ljco7xguob";
import { Zap } from "lucide-react";
import SkillsIcon from "../../imports/ЧтоВыПрокачиваете";
import TaskIcon from "../../imports/Задание";
import RequirementsIcon from "../../imports/Требования";
import ExampleIcon from "../../imports/Пример";
import { projectId, publicAnonKey } from "../../../utils/supabase/info";
import { useUserSafe } from "../context/UserContext";
import { useHomeworkSafe } from "../context/HomeworkContext";
import { useAuthSafe } from "../context/AuthContext";
import { useAchievementsSafe } from "../context/AchievementsContext";
import svgCardPaths from "../../imports/svg-u7gh1bm86c";

// ── Shared styles ──────────────────────────────────────────────────────────────

const TEXT_TITLE  = "font-['Roboto_Condensed:Bold',sans-serif] font-medium";
const TEXT_BODY   = "font-['Roboto_Condensed:Regular',sans-serif] font-normal";
const TEXT_MEDIUM = "font-['Roboto_Condensed:Medium',sans-serif] font-medium";

// ── Homework content data ─────────────────────────────────────────────────────

interface HomeworkData {
  title: string;
  subtitle: string;
  time: string;
  level: string;
  xp: string;
  description: string;
  skills: string[];
  context: string[];
  task: string;
  requirements: string[];
  screenSize: string;
  screenContent: string[];
  tip?: string;
}

const HOMEWORK_CONTENT: Record<string, HomeworkData> = {
  "homework-1": {
    title: "Дизайн экрана онбординга",
    subtitle: "Создайте экран приветствия для приложения обучения UX-дизайну.",
    time: "30 мин",
    level: "Джун",
    xp: "+800 XP",
    description: "Примените знания об основах UX для создания первого экрана приложения.",
    skills: [
      "структурирование экрана",
      "визуальная иерархия",
      "проектирование CTA",
      "работа с текстовыми блоками",
    ],
    context: [
      "Вы дизайнер в EdTech стартапе.",
      "Команда разрабатывает приложение для обучения UX-дизайну.",
      "Нужно создать экран онбординга, который встречает пользователя при первом запуске.",
    ],
    task: "Создать экран приветствия (онбординг) для мобильного приложения.",
    requirements: [
      "заголовок приветствия",
      "иллюстрация или иконка",
      "краткое описание приложения",
      "кнопку \"Начать\"",
    ],
    screenSize: "375 x 812",
    screenContent: [
      "Используйте принципы визуальной иерархии из урока.",
      "CTA-кнопка должна быть контрастной.",
    ],
  },
  "homework-2": {
    title: "Интерфейс дашборда",
    subtitle: "Создайте главный экран панели управления для приложения аналитики.",
    time: "40 мин",
    level: "Мидл",
    xp: "+800 XP",
    description: "Примените навыки проектирования UX интерфейсов для создания информативного дашборда.",
    skills: [
      "информационная архитектура",
      "визуализация данных",
      "проектирование карточек",
      "навигация в интерфейсе",
      "адаптивный UX",
    ],
    context: [
      "Вы дизайнер в компании, разрабатывающей платформу аналитики.",
      "Пользователи — маркетологи и менеджеры, которые следят за ключевыми метриками.",
      "Нужно создать главный экран дашборда с обзором данных.",
    ],
    task: "Создать главный экран дашборда мобильного приложения аналитики.",
    requirements: [
      "карточки с ключевыми метриками (3-4 штуки)",
      "график или диаграмму",
      "навигацию (нижний таб-бар)",
      "заголовок с именем пользователя",
    ],
    screenSize: "375 x 812",
    screenContent: [
      "Карточки должны быть визуально разделены.",
      "Используйте контрастные акценты для важных данных.",
    ],
  },
  "homework-3": {
    title: "UI Kit компонента",
    subtitle: "Создайте набор UI-компонентов для дизайн-системы.",
    time: "45 мин",
    level: "Мидл",
    xp: "+800 XP",
    description: "Финальное практическое задание — соберите UI Kit из основных компонентов.",
    skills: [
      "создание компонентов",
      "работа с токенами",
      "консистентность дизайна",
      "состояния интерфейса",
      "документирование дизайна",
    ],
    context: [
      "Вы создаёте дизайн-систему для продукта.",
      "Команда разработки ждёт от вас набор переиспользуемых компонентов.",
      "Компоненты будут использоваться на нескольких экранах приложения.",
    ],
    task: "Создать UI Kit из 4-5 базовых компонентов в Figma.",
    requirements: [
      "кнопка (3 состояния: default, hover, disabled)",
      "поле ввода (2 состояния: пустое, заполненное)",
      "карточка (с изображением и текстом)",
      "тег/бейдж (2 варианта цвета)",
    ],
    screenSize: "1440 x 900",
    screenContent: [
      "Все компоненты должны использовать единую цветовую палитру.",
      "Назовите слои и компоненты по BEM или atomic design.",
    ],
  },
};

// Fallback content
const DEFAULT_HOMEWORK: HomeworkData = HOMEWORK_CONTENT["homework-1"];

// ── Chevron ───────────────────────────────────────────────────────────────────

function ChevronIcon({ isOpen }: { isOpen: boolean }) {
  return (
    <div className="flex h-[10px] items-center justify-center relative shrink-0 w-[20px]">
      <div
        className="flex-none"
        style={{ transition: "transform 300ms ease", transform: isOpen ? "rotate(90deg)" : "rotate(-90deg)" }}
      >
        <div className="h-[20px] relative w-[10px]">
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

interface AccordionSectionProps {
  icon: React.ReactNode;
  title: string;
  isOpen: boolean;
  onToggle: () => void;
  children: React.ReactNode;
  sectionIdx: number;
}

function AccordionSection({ icon, title, isOpen, onToggle, children, sectionIdx }: AccordionSectionProps) {
  return (
    <div
      className="flex flex-col rounded-[15px] overflow-hidden w-full"
      style={{ background: "#404d52" }}
      data-accordion-idx={sectionIdx}
    >
      {/* Header */}
      <div
        className="h-[120px] flex items-center justify-between px-[30px] cursor-pointer select-none"
        onClick={onToggle}
      >
        <div className="flex items-center gap-[14px]">
          {icon}
          <p
            className={`${TEXT_TITLE} leading-[27.5px] text-[26px] whitespace-nowrap`}
            style={{ color: isOpen ? "#f1f2fb" : "#798589", transition: "color 150ms" }}
          >
            {title}
          </p>
        </div>
        <ChevronIcon isOpen={isOpen} />
      </div>

      {/* Animated body */}
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
    <div className="bg-[#46545b] flex items-center pb-[21px] pt-[20px] px-[20px] rounded-[12px]">
      <p className={`${TEXT_BODY} leading-[22px] text-[#f1f2fb] text-[18px]`}>{label}</p>
    </div>
  );
}

// ── Description icon (book) ──────────────────────────────────────────────────

function DescriptionIcon() {
  return (
    <div className="relative shrink-0" style={{ width: 26, height: 26 }}>
      <svg width="26" height="26" viewBox="0 0 26 26" fill="none">
        <path
          d="M4 4.5C4 3.67 4.67 3 5.5 3H10C11.1 3 12 3.9 12 5V22C12 21.17 11.33 20.5 10.5 20.5H5.5C4.67 20.5 4 19.83 4 19V4.5Z"
          fill="#798589"
        />
        <path
          d="M22 4.5C22 3.67 21.33 3 20.5 3H16C14.9 3 14 3.9 14 5V22C14 21.17 14.67 20.5 15.5 20.5H20.5C21.33 20.5 22 19.83 22 19V4.5Z"
          fill="#798589"
        />
      </svg>
    </div>
  );
}

// ── Content sections ──────────────────────────────────────────────────────────

function DescriptionContent({ hw }: { hw: HomeworkData }) {
  return (
    <div className="flex flex-col gap-[20px]">
      <div className="bg-[#46545b] rounded-[12px] px-[27px] py-[20px]">
        <p className={`${TEXT_BODY} leading-[22px] text-[#f1f2fb] text-[18px] opacity-80`}>
          {hw.description}
        </p>
      </div>
    </div>
  );
}

function SkillsContent({ hw }: { hw: HomeworkData }) {
  return (
    <div className="flex flex-wrap gap-[10px]">
      {hw.skills.map((s, i) => (
        <SkillTag key={i} label={s} />
      ))}
    </div>
  );
}

function TaskContent({ hw }: { hw: HomeworkData }) {
  return (
    <div className="flex flex-col gap-[30px]">
      <div className="flex flex-col gap-[20px]">
        <p className={`${TEXT_TITLE} leading-[22px] text-[#f1f2fb] text-[18px]`}>Контекст:</p>
        <div className="bg-[#46545b] rounded-[12px] px-[27px] py-[20px]">
          <div className={`${TEXT_BODY} leading-[22px] text-[#f1f2fb] text-[18px]`}>
            {hw.context.map((line, i) => (
              <p key={i} className={i < hw.context.length - 1 ? "mb-[8px]" : "mb-0"}>{line}</p>
            ))}
          </div>
        </div>
      </div>
      <div className="flex flex-col gap-[20px]">
        <p className={`${TEXT_TITLE} leading-[22px] text-[#f1f2fb] text-[18px]`}>Ваша задача:</p>
        <div className="bg-[#46545b] rounded-[12px] px-[27px] py-[20px]">
          <p className={`${TEXT_BODY} leading-[22px] text-[#f1f2fb] text-[18px] opacity-80`}>{hw.task}</p>
        </div>
      </div>
    </div>
  );
}

function RequirementsContent({ hw }: { hw: HomeworkData }) {
  return (
    <div className="flex flex-col gap-[30px]">
      <div className="flex flex-col gap-[20px]">
        <p className={`${TEXT_TITLE} leading-[22px] text-[#f1f2fb] text-[18px]`}>Экран должен содержать:</p>
        <div className="bg-[#46545b] rounded-[12px] px-[27px] py-[20px]">
          <ul className={`list-disc ${TEXT_BODY} leading-[22px] text-[#f1f2fb] text-[18px]`}>
            {hw.requirements.map((r, i) => (
              <li key={i} className={`${i < hw.requirements.length - 1 ? "mb-0" : ""} ms-[27px]`}>
                <span>{r}</span>
              </li>
            ))}
          </ul>
        </div>
      </div>
      <div className="flex flex-col gap-[20px]">
        <p className={`${TEXT_TITLE} leading-[22px] text-[#f1f2fb] text-[18px]`}>Дополнительно:</p>
        <div className="bg-[#46545b] rounded-[12px] px-[27px] py-[20px] flex flex-col gap-[21px]">
          <div className={`${TEXT_BODY} flex items-center justify-between leading-[22px] text-[#f1f2fb] text-[18px] opacity-80`}>
            <span>Размер экрана:</span>
            <span>{hw.screenSize}</span>
          </div>
          <div className="h-0 relative w-full">
            <div className="absolute inset-[-0.5px_-0.1%]">
              <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 472 1">
                <path d="M0.5 0.5H471.5" stroke="#5B6E77" strokeLinecap="round" />
              </svg>
            </div>
          </div>
          {hw.screenContent.map((line, i) => (
            <p key={i} className={`${TEXT_BODY} leading-[22px] text-[#f1f2fb] text-[18px] opacity-80`}>{line}</p>
          ))}
        </div>
      </div>
    </div>
  );
}

function ExampleContent({ hw }: { hw: HomeworkData }) {
  return (
    <div className="bg-[#46545b] rounded-[12px] px-[27px] py-[20px] flex flex-col gap-[16px]">
      <p className={`${TEXT_TITLE} leading-[22px] text-[#f1f2fb] text-[18px]`}>Рекомендации:</p>
      <div className={`${TEXT_BODY} leading-[22px] text-[#f1f2fb] text-[18px] opacity-80 flex flex-col gap-[8px]`}>
        <p>Изучите примеры подобных экранов на Dribbble или Behance.</p>
        <p>Обратите внимание на визуальную иерархию и контраст элементов.</p>
        {hw.tip && <p>{hw.tip}</p>}
      </div>
    </div>
  );
}

// ── Hero card ─────────────────────────────────────────────────────────────────

function HeroCard({ hw }: { hw: HomeworkData }) {
  return (
    <div className="flex flex-col gap-[20px] w-full">
      {/* Homework hero — gradient banner instead of phone image */}
      <div
        className="w-full rounded-[12px] flex items-center justify-center overflow-hidden"
        style={{
          height: 200,
          background: "linear-gradient(135deg, #3d4a50 0%, #4a5960 50%, #384348 100%)",
        }}
      >
        <div className="flex flex-col items-center gap-[12px]">
          <div className="size-[64px] rounded-full bg-[#46545b] flex items-center justify-center">
            <svg width="32" height="32" viewBox="0 0 24 24" fill="none" stroke="#f1f2fb" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
              <path d="M14 2H6a2 2 0 0 0-2 2v16a2 2 0 0 0 2 2h12a2 2 0 0 0 2-2V8z" />
              <polyline points="14 2 14 8 20 8" />
              <line x1="16" y1="13" x2="8" y2="13" />
              <line x1="16" y1="17" x2="8" y2="17" />
              <polyline points="10 9 9 9 8 9" />
            </svg>
          </div>
          <p className={`${TEXT_MEDIUM} leading-[20px] text-[#798589] text-[16px]`}>Практическое задание</p>
        </div>
      </div>
      <div className="flex flex-col gap-[40px]">
        <div className="flex flex-col gap-[9px]">
          <p className={`${TEXT_TITLE} leading-[35px] text-[#f4f5fc] text-[32px]`}>{hw.title}</p>
          <p className={`${TEXT_BODY} leading-[22px] text-[#f1f2fb] text-[18px] opacity-80`}>{hw.subtitle}</p>
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
            <p className={`${TEXT_MEDIUM} leading-[20px] text-[#f1f2fb] text-[16px] whitespace-nowrap`}>{hw.time}</p>
          </div>
          <div className="flex gap-[5px] items-center">
            <div className="overflow-clip relative shrink-0 size-[14px]">
              <div className="absolute inset-[2.08%_0_4.17%_0]">
                <svg className="absolute block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 14 13.125">
                  <path d={svgPaths.pf7fd000} fill="#F1F2FB" />
                </svg>
              </div>
            </div>
            <p className={`${TEXT_MEDIUM} leading-[20px] text-[#f1f2fb] text-[16px] whitespace-nowrap`}>{hw.level}</p>
          </div>
          <div className="flex gap-[5px] items-center">
            <Zap size={14} className="shrink-0 text-[#F1F2FB]" fill="#F1F2FB" />
            <p className={`${TEXT_MEDIUM} leading-[20px] text-[#f1f2fb] text-[16px] whitespace-nowrap`}>{hw.xp}</p>
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

// ── Status icons (same as ChallengesPage) ────────────────────────────────────

function IconProcessingTime() {
  return (
    <div className="relative shrink-0 size-[18px]">
      <div className="absolute inset-[-2.78%]">
        <svg className="absolute block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 19 19">
          <path d={svgCardPaths.p10e6fc80} fill="#FFB121" />
          <path d={svgCardPaths.pe9e5cc0} fill="#FFB121" />
          <path d={svgCardPaths.p2ae2c800} fill="#FFB121" />
          <path d={svgCardPaths.p8839180} fill="#FFB121" />
          <path d={svgCardPaths.pb4b6780} fill="#FFB121" />
        </svg>
      </div>
    </div>
  );
}

function IconGreenCheck() {
  return (
    <div className="relative shrink-0 size-[17px]">
      <svg className="absolute block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 17 17">
        <path d={svgCardPaths.p9304f00} fill="#5EDD60" />
        <path d={svgCardPaths.p28422000} fill="white" />
      </svg>
    </div>
  );
}

// ── useIsMobile ───────────────────────────────────────────────────────────────

function useIsMobile() {
  const [isMobile, setIsMobile] = useState(() => typeof window !== "undefined" && window.innerWidth < 768);
  useEffect(() => {
    const onResize = () => setIsMobile(window.innerWidth < 768);
    window.addEventListener("resize", onResize);
    return () => window.removeEventListener("resize", onResize);
  }, []);
  return isMobile;
}

// ── PendingCard ───────────────────────────────────────────────────────────────

function PendingCard({ url }: { url: string }) {
  const navigate = useNavigate();
  return (
    <div
      className="rounded-[15px] flex flex-col gap-[14px] w-full"
      style={{
        background: "linear-gradient(171.89deg, rgb(44, 53, 56) 2.4%, rgb(56, 67, 72) 100%)",
        border: "1.5px solid rgba(160,163,173,0.2)",
        padding: "18px 20px 20px",
      }}
    >
      {/* Status badge — pill style matching ChallengesPage */}
      <div className="bg-[#374348] flex gap-[8px] h-[32px] items-center justify-center px-[12px] rounded-full self-start">
        <IconProcessingTime />
        <p className={`${TEXT_TITLE} text-[#ffb121] text-[13px] leading-[18px] whitespace-nowrap`}>На проверке</p>
      </div>

      {/* Title */}
      <p className={`${TEXT_TITLE} text-[#f4f5fc] text-[16px] leading-[20px]`}>Работа отправлена</p>

      {/* Description */}
      <p className={`${TEXT_BODY} leading-[20px] text-[rgba(244,245,252,0.5)] text-[13px]`}>
        Проверка занимает ~24 часа. Уведомление придёт в разделе Уведомлений.
      </p>

      {/* Figma URL chip */}
      {url ? (
        <div
          className="flex items-center gap-[8px] rounded-[10px] px-[12px] py-[9px] min-w-0"
          style={{ background: "#374348" }}
        >
          <svg width="12" height="12" viewBox="0 0 24 24" fill="none" className="shrink-0 opacity-40">
            <path d="M10 13a5 5 0 0 0 7.54.54l3-3a5 5 0 0 0-7.07-7.07l-1.72 1.71" stroke="#f4f5fc" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" />
            <path d="M14 11a5 5 0 0 0-7.54-.54l-3 3a5 5 0 0 0 7.07 7.07l1.71-1.71" stroke="#f4f5fc" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" />
          </svg>
          <p
            className={`${TEXT_BODY} text-[rgba(244,245,252,0.3)] text-[12px] leading-[16px] truncate`}
            style={{ minWidth: 0 }}
          >
            {url}
          </p>
        </div>
      ) : null}

      {/* Go to notifications */}
      <button
        className="flex items-center gap-[6px] self-start opacity-50 hover:opacity-80 transition-opacity"
        style={{ background: "none", border: "none", padding: 0, cursor: "pointer" }}
        onClick={() => navigate("/notifications")}
      >
        <svg width="12" height="12" viewBox="0 0 24 24" fill="none">
          <path d="M18 8A6 6 0 0 0 6 8c0 7-3 9-3 9h18s-3-2-3-9" stroke="#f4f5fc" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" />
          <path d="M13.73 21a2 2 0 0 1-3.46 0" stroke="#f4f5fc" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" />
        </svg>
        <p className={`${TEXT_BODY} text-[#f4f5fc] text-[12px] leading-[16px]`}>
          Перейти в Уведомления
        </p>
      </button>
    </div>
  );
}

// ── Compact Submit block ─────────────────────────────────────────────────────

function SubmitBlock({ homeworkLessonId, lessonName }: { homeworkLessonId?: string; lessonName: string }) {
  const userData       = useUserSafe();
  const hwCtx          = useHomeworkSafe();
  const auth           = useAuthSafe();
  const achievementsCtx = useAchievementsSafe();

  // Derive initial state from HomeworkContext (backend status)
  const serverRecord = hwCtx?.getByLessonId(homeworkLessonId ?? "") ?? hwCtx?.getByLessonName(lessonName);
  const serverStatus = serverRecord?.status ?? null;

  const [url, setUrl]                   = useState(serverRecord?.figma_link ?? "");
  const [showInfo, setShowInfo]         = useState(false);
  const [inputFocused, setInputFocused] = useState(false);
  const [isSubmitting, setIsSubmitting] = useState(false);
  // localSubmitted: true if user just submitted in this session (optimistic)
  const [localSubmitted, setLocalSubmitted] = useState(false);

  // Keep url in sync if serverRecord loads after mount
  useEffect(() => {
    if (serverRecord?.figma_link) setUrl(serverRecord.figma_link);
  }, [serverRecord?.figma_link]);

  // Mark seen when user opens homework page with a reviewed/rejected status
  useEffect(() => {
    if (homeworkLessonId && hwCtx && (serverStatus === "reviewed" || serverStatus === "rejected")) {
      hwCtx.markSeen(homeworkLessonId);
    }
  }, [homeworkLessonId, serverStatus]); // eslint-disable-line react-hooks/exhaustive-deps

  const isSubmitted = localSubmitted || serverStatus === "pending";
  const isReviewed  = serverStatus === "reviewed";
  const isRejected  = serverStatus === "rejected";

  const handleSubmit = async () => {
    if (!url.trim()) {
      alert("Пожалуйста, вставьте ссылку на Figma");
      return;
    }

    setIsSubmitting(true);

    try {
      const response = await fetch(`https://${projectId}.supabase.co/functions/v1/make-server-d627d1b0/homework/submit`, {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
          "Authorization": `Bearer ${publicAnonKey}`,
        },
        body: JSON.stringify({
          lessonName,
          lessonId: homeworkLessonId ?? "",
          userId: auth?.userId ?? "anonymous",
          figmaLink: url,
        }),
      });

      const data = await response.json();

      if (!response.ok) {
        console.error("Error submitting homework:", data.error);
        alert(`Ошибка отправки: ${data.error}`);
        setIsSubmitting(false);
        return;
      }

      setLocalSubmitted(true);
      hwCtx?.refresh();
      if (homeworkLessonId && userData?.markHomeworkCompleted) {
        userData.markHomeworkCompleted(homeworkLessonId);
        achievementsCtx?.triggerAchievement("homework_done");
      }
    } catch (error) {
      console.error("Network error submitting homework:", error);
      alert(`Ошибка сети: ${error}`);
    } finally {
      setIsSubmitting(false);
    }
  };

  // ── Reviewed state ──────────────────────────────────────────────────────────
  if (isReviewed) {
    return (
      <div className="flex flex-col gap-[16px] w-full">

        {/* Status pill */}
        <div
          className="flex gap-[7px] items-center px-[12px] h-[32px] rounded-full self-start"
          style={{ background: "#2E3538" }}
        >
          <IconGreenCheck />
          <p className={`${TEXT_TITLE} text-[13px] leading-[18px] whitespace-nowrap`} style={{ color: "#91969B" }}>Готово</p>
        </div>

        {/* Feedback card — always visible */}
        <div
          className="rounded-[15px] flex flex-col gap-[14px]"
          style={{ background: "#424D52", padding: "20px" }}
        >
          {serverRecord?.comment ? (
            <p className={`${TEXT_BODY} text-[15px] leading-[22px]`} style={{ color: "rgba(244,245,252,0.85)" }}>
              {serverRecord.comment}
            </p>
          ) : (
            <p className={`${TEXT_BODY} text-[15px] leading-[22px]`} style={{ color: "rgba(244,245,252,0.4)" }}>
              Проверяющий не оставил комментарий
            </p>
          )}
          {serverRecord?.image_url && (
            <img
              src={serverRecord.image_url}
              alt="Скриншот от проверяющего"
              className="w-full object-cover"
              style={{ borderRadius: 10, border: "1px solid #9BA1A7", maxHeight: 240 }}
            />
          )}
        </div>

        {/* Figma link chip */}
        {url ? (
          <a
            href={url}
            target="_blank"
            rel="noopener noreferrer"
            className="flex items-center gap-[10px] rounded-[15px] px-[20px] h-[60px] w-full hover:brightness-110 transition-all"
            style={{ background: "#2E3538", textDecoration: "none" }}
          >
            <svg width="15" height="15" viewBox="0 0 24 24" fill="none" className="shrink-0 opacity-50">
              <path d="M10 13a5 5 0 0 0 7.54.54l3-3a5 5 0 0 0-7.07-7.07l-1.72 1.71" stroke="#f4f5fc" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" />
              <path d="M14 11a5 5 0 0 0-7.54-.54l-3 3a5 5 0 0 0 7.07 7.07l1.71-1.71" stroke="#f4f5fc" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" />
            </svg>
            <p className={`${TEXT_BODY} text-[14px] leading-[18px] flex-1 min-w-0 truncate`} style={{ color: "rgba(244,245,252,0.5)" }}>{url}</p>
            <svg width="10" height="10" viewBox="0 0 24 24" fill="none" className="shrink-0 opacity-30">
              <path d="M18 13v6a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2V8a2 2 0 0 1 2-2h6" stroke="#f4f5fc" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" />
              <polyline points="15 3 21 3 21 9" stroke="#f4f5fc" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" />
              <line x1="10" y1="14" x2="21" y2="3" stroke="#f4f5fc" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" />
            </svg>
          </a>
        ) : null}

      </div>
    );
  }

  // ── Rejected state ──────────────────────────────────────────────────────────
  if (isRejected) {
    return (
      <div className="flex flex-col gap-[16px] w-full">

        {/* Status pill */}
        <div
          className="flex gap-[7px] items-center px-[12px] h-[32px] rounded-full self-start"
          style={{ background: "#2E3538" }}
        >
          <svg width="14" height="14" viewBox="0 0 512 512" fill="none" xmlns="http://www.w3.org/2000/svg">
            <path d="m48 256c0 114.87 93.13 208 208 208s208-93.13 208-208-93.13-208-208-208-208 93.13-208 208zm96 66.67c5.45-61.45 34.14-117.09 122.87-117.09v-37.32a8.32 8.32 0 0 1 14-6l84.55 79.74a8.2 8.2 0 0 1 0 11.94l-84.42 79.77a8.32 8.32 0 0 1 -14-6v-37.29c-57.07 0-84.51 13.47-108.58 38.68-5.49 5.65-15.07 1.32-14.42-6.43z" fill="#91969B" />
          </svg>
          <p className={`${TEXT_TITLE} text-[13px] leading-[18px] whitespace-nowrap`} style={{ color: "#91969B" }}>переделать</p>
        </div>

        {/* Inner feedback card */}
        {(serverRecord?.comment || serverRecord?.image_url) && (
          <div
            className="rounded-[15px] flex flex-col gap-[14px]"
            style={{ background: "#424D52", padding: "20px" }}
          >
            {serverRecord?.comment && (
              <p className={`${TEXT_BODY} text-[15px] leading-[22px]`} style={{ color: "rgba(244,245,252,0.85)" }}>
                {serverRecord.comment}
              </p>
            )}
            {serverRecord?.image_url && (
              <img
                src={serverRecord.image_url}
                alt="Скриншот от проверяющего"
                className="w-full object-cover"
                style={{ borderRadius: 10, border: "1px solid #9BA1A7", maxHeight: 240 }}
              />
            )}
          </div>
        )}

        {/* Input for new link — same style as default state */}
        <div
          className="relative px-[27px] rounded-[15px] h-[84px] flex items-center justify-between w-full"
          style={{ backgroundImage: "linear-gradient(171.89deg, rgb(44, 53, 56) 2.4187%, rgb(56, 67, 72) 98.527%, rgb(44, 53, 56) 116.25%)" }}
        >
          <div aria-hidden="true" className="absolute border-[2px] border-[rgba(160,163,173,0.2)] border-solid inset-[-2px] pointer-events-none rounded-[15px]" />
          <div className="relative z-10 flex gap-[8px] items-center flex-1 min-w-0">
            <div
              className="overflow-clip relative shrink-0 size-[17px]"
              style={{ opacity: inputFocused ? 0.5 : 1, transition: "opacity 150ms" }}
            >
              <div className="absolute inset-[0.02%_0_0.01%_0]">
                <svg className="absolute block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 19.0001 18.9956">
                  <path d={svgInitial.p19febe00} fill="#92979D" />
                  <path d={svgInitial.p1c506830} fill="#92979D" />
                  <path d={svgInitial.p1f263800} fill="#92979D" />
                </svg>
              </div>
            </div>
            <input
              type="url"
              value={url}
              onChange={e => setUrl(e.target.value)}
              onFocus={() => setInputFocused(true)}
              onBlur={() => setInputFocused(false)}
              placeholder="Вставьте ссылку"
              className={`${TEXT_BODY} bg-transparent text-[16px] leading-[20px] flex-1 min-w-0 outline-none border-none`}
              style={{ color: "rgba(244,245,252,0.8)", caretColor: "rgba(244,245,252,0.8)" }}
            />
          </div>
          <div
            className="relative z-10"
            style={{ opacity: inputFocused ? 0.5 : 1, transition: "opacity 150ms" }}
          >
            <div
              className="overflow-clip relative shrink-0 size-[18px] cursor-pointer"
              onClick={() => setShowInfo(v => !v)}
            >
              <div className="absolute inset-[10%_0%_10%_20%]">
                <svg className="absolute block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 16 16">
                  <path d={svgInitial.p2c4b1e00} fill="#93999E" fillOpacity="0.6" />
                </svg>
              </div>
            </div>
            {showInfo && <InfoPopup onClose={() => setShowInfo(false)} />}
          </div>
          <div className="absolute inset-[-2px] pointer-events-none rounded-[inherit] shadow-[inset_-3px_0px_3px_0px_#384348]" />
        </div>

        {/* Submit button */}
        <div
          className={`group bg-[#f7f8fc] flex h-[84px] items-center justify-center relative rounded-[15px] select-none hover:translate-y-[2px] active:translate-y-[4px] transition-transform duration-75 w-full ${isSubmitting ? "opacity-50 cursor-wait" : "cursor-pointer"}`}
          onClick={isSubmitting ? undefined : handleSubmit}
        >
          <div aria-hidden="true" className="absolute inset-0 border-[0.835px] border-solid border-transparent pointer-events-none rounded-[15px] shadow-[0px_3px_0px_0px_#bcbec8] group-hover:shadow-[0px_2px_0px_0px_#bcbec8] group-active:shadow-none transition-shadow duration-75" />
          <p className={`${TEXT_TITLE} leading-[27.5px] text-[#2d373b] text-[26px] whitespace-nowrap`}>
            {isSubmitting ? "Отправка..." : "Отправить работу"}
          </p>
        </div>

        {/* Warning note */}
        <div className="flex gap-[8px] items-start px-[4px]">
          <div className="relative shrink-0 size-[16px] mt-[2px]">
            <svg className="absolute block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 18 18">
              <path d={svgInitial.pa7482f0} fill="#FAC100" />
              <path d={svgInitial.p3b885a20} fill="#FF9500" />
              <path d={svgInitial.p1bee9700} fill="#2D4A60" />
              <path d={svgInitial.pd85c380} fill="#2D4A60" />
              <path d={svgInitial.p33926b70} fill="#263F52" />
            </svg>
          </div>
          <p className={`${TEXT_BODY} leading-[18px] text-[rgba(244,245,252,0.3)] text-[15px]`}>
            Файл должен быть открыт для просмотра в Figma
          </p>
        </div>

      </div>
    );
  }

  if (isSubmitted) {
    return (
      <PendingCard url={url} />
    );
  }

  return (
    <div className="flex flex-col gap-[20px] w-full">
      {/* Input — compact */}
      <div
        className="relative px-[27px] rounded-[15px] h-[84px] flex items-center justify-between w-full"
        style={{
          backgroundImage: "linear-gradient(171.89deg, rgb(44, 53, 56) 2.4187%, rgb(56, 67, 72) 98.527%, rgb(44, 53, 56) 116.25%)",
        }}
      >
        <div aria-hidden="true" className="absolute border-[2px] border-[rgba(160,163,173,0.2)] border-solid inset-[-2px] pointer-events-none rounded-[15px]" />
        <div className="relative z-10 flex gap-[8px] items-center flex-1 min-w-0">
          {/* Link icon */}
          <div
            className="overflow-clip relative shrink-0 size-[17px]"
            style={{ opacity: inputFocused ? 0.5 : 1, transition: "opacity 150ms" }}
          >
            <div className="absolute inset-[0.02%_0_0.01%_0]">
              <svg className="absolute block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 19.0001 18.9956">
                <path d={svgInitial.p19febe00} fill="#92979D" />
                <path d={svgInitial.p1c506830} fill="#92979D" />
                <path d={svgInitial.p1f263800} fill="#92979D" />
              </svg>
            </div>
          </div>
          <input
            type="url"
            value={url}
            onChange={e => setUrl(e.target.value)}
            onFocus={() => setInputFocused(true)}
            onBlur={() => setInputFocused(false)}
            placeholder="Вставьте ссылку"
            className={`${TEXT_BODY} bg-transparent text-[16px] leading-[20px] flex-1 min-w-0 outline-none border-none`}
            style={{
              color: "rgba(244,245,252,0.8)",
              caretColor: "rgba(244,245,252,0.8)",
            }}
          />
        </div>
        {/* Info icon */}
        <div className="relative z-10" style={{ opacity: inputFocused ? 0.5 : 1, transition: "opacity 150ms" }}>
          <div
            className="overflow-clip relative shrink-0 size-[18px] cursor-pointer"
            onClick={() => setShowInfo(v => !v)}
          >
            <div className="absolute inset-[10%_0%_10%_20%]">
              <svg className="absolute block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 16 16">
                <path d={svgInitial.p2c4b1e00} fill="#93999E" fillOpacity="0.6" />
              </svg>
            </div>
          </div>
          {showInfo && <InfoPopup onClose={() => setShowInfo(false)} />}
        </div>
        <div className="absolute inset-[-2px] pointer-events-none rounded-[inherit] shadow-[inset_-3px_0px_3px_0px_#384348]" />
      </div>

      {/* Submit button — compact */}
      <div
        className={`group bg-[#f7f8fc] flex h-[84px] items-center justify-center relative rounded-[15px] select-none hover:translate-y-[2px] active:translate-y-[4px] transition-transform duration-75 w-full ${isSubmitting ? 'opacity-50 cursor-wait' : 'cursor-pointer'}`}
        onClick={isSubmitting ? undefined : handleSubmit}
      >
        <div
          aria-hidden="true"
          className="absolute inset-0 border-[0.835px] border-solid border-transparent pointer-events-none rounded-[15px] shadow-[0px_3px_0px_0px_#bcbec8] group-hover:shadow-[0px_2px_0px_0px_#bcbec8] group-active:shadow-none transition-shadow duration-75"
        />
        <p className={`${TEXT_TITLE} leading-[27.5px] text-[#2d373b] text-[26px] whitespace-nowrap`}>
          {isSubmitting ? "Отправка..." : "Отправить работу"}
        </p>
      </div>

      {/* Warning note */}
      <div className="flex gap-[8px] items-start px-[4px]">
        <div className="relative shrink-0 size-[16px] mt-[2px]">
          <svg className="absolute block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 18 18">
            <path d={svgInitial.pa7482f0} fill="#FAC100" />
            <path d={svgInitial.p3b885a20} fill="#FF9500" />
            <path d={svgInitial.p1bee9700} fill="#2D4A60" />
            <path d={svgInitial.pd85c380} fill="#2D4A60" />
            <path d={svgInitial.p33926b70} fill="#263F52" />
          </svg>
        </div>
        <p className={`${TEXT_BODY} leading-[18px] text-[rgba(244,245,252,0.3)] text-[15px]`}>
          Файл должен быть открыт для просмотра в Figma
        </p>
      </div>
    </div>
  );
}

// ── Page ──────────────────────────────────────────────────────────────────────

export default function HomeworkPage() {
  const location = useLocation();
  const isMobile = useIsMobile();
  const homeworkLessonId = (location.state as any)?.homeworkId || "homework-1";
  const hw = HOMEWORK_CONTENT[homeworkLessonId] || DEFAULT_HOMEWORK;

  const [openSections, setOpenSections] = useState<Set<number>>(new Set([0, 1]));

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
      <Layout
        title={hw.title}
        showBack
        backPath="/lessons"
        rightWidth="320px"
      >
        <div className="flex flex-col gap-[13px] w-full">
          {/* Hero */}
          <div className="bg-[#404d52] rounded-[15px] pb-[30px] pt-[20px] px-[20px]">
            <HeroCard hw={hw} />
          </div>

          <AccordionSection
            icon={<DescriptionIcon />}
            title="Описание задания"
            isOpen={openSections.has(0)}
            onToggle={() => toggleSection(0)}
            sectionIdx={0}
          >
            <DescriptionContent hw={hw} />
          </AccordionSection>

          <AccordionSection
            icon={<div className="relative shrink-0" style={{ width: 26, height: 26 }}><SkillsIcon /></div>}
            title="Что вы прокачаете"
            isOpen={openSections.has(1)}
            onToggle={() => toggleSection(1)}
            sectionIdx={1}
          >
            <SkillsContent hw={hw} />
          </AccordionSection>

          <AccordionSection
            icon={<div className="relative shrink-0" style={{ width: 26, height: 26 }}><TaskIcon /></div>}
            title="Задание"
            isOpen={openSections.has(2)}
            onToggle={() => toggleSection(2)}
            sectionIdx={2}
          >
            <TaskContent hw={hw} />
          </AccordionSection>

          <AccordionSection
            icon={<div className="relative shrink-0" style={{ width: 26, height: 26 }}><RequirementsIcon /></div>}
            title="Требования"
            isOpen={openSections.has(3)}
            onToggle={() => toggleSection(3)}
            sectionIdx={3}
          >
            <RequirementsContent hw={hw} />
          </AccordionSection>

          <AccordionSection
            icon={<div className="relative shrink-0" style={{ width: 28, height: 28 }}><ExampleIcon /></div>}
            title="Пример"
            isOpen={openSections.has(4)}
            onToggle={() => toggleSection(4)}
            sectionIdx={4}
          >
            <ExampleContent hw={hw} />
          </AccordionSection>

          {/* Bottom padding — extra on mobile for the fixed submit block */}
          <div style={{ height: isMobile ? 180 : 160 }} />
        </div>
      </Layout>

      {/* Submit block — fixed at bottom (right on desktop, full-width on mobile) */}
      <div
        style={isMobile ? {
          position: "fixed",
          bottom: 0,
          left: 0,
          right: 0,
          padding: "12px 16px calc(env(safe-area-inset-bottom, 0px) + 16px)",
          zIndex: 50,
          background: "linear-gradient(to top, #282F33 70%, transparent)",
        } : {
          position: "fixed",
          bottom: 20,
          right: "max(40px, calc((100vw - 1440px) / 2 + 40px))",
          width: 300,
          zIndex: 50,
        }}
      >
        <SubmitBlock homeworkLessonId={homeworkLessonId} lessonName={hw.title} />
      </div>
    </>
  );
}