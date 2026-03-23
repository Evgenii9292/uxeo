import { useState, useEffect, useId, useRef } from "react";
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
import svgMfoan from "../../imports/svg-mfoan0qzpw";

// ── Shared styles ──────────────────────────────────────────────────────────────

const TEXT_TITLE  = "font-['Roboto_Condensed:Medium',sans-serif] font-medium";
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
      style={{ background: "#343e42" }}
      data-accordion-idx={sectionIdx}
    >
      {/* Header — no extra background, matches card body */}
      <div
        className="h-[96px] flex items-center justify-between px-[20px] cursor-pointer select-none"
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
    <div className="bg-[#394449] flex items-center pb-[21px] pt-[20px] px-[20px] rounded-[12px]">
      <p className={`${TEXT_BODY} leading-[22px] text-[#f1f2fb] text-[18px]`}>{label}</p>
    </div>
  );
}

// ── Content sections ──────────────────────────────────────────────────────────

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
      {hw.description && (
        <div className="bg-[#394449] rounded-[12px] px-[27px] py-[20px]">
          <p className={`${TEXT_BODY} leading-[22px] text-[#f1f2fb] text-[18px] opacity-80`}>{hw.description}</p>
        </div>
      )}
      <div className="flex flex-col gap-[20px]">
        <p className={`${TEXT_TITLE} leading-[22px] text-[#f1f2fb] text-[18px]`}>Контекст:</p>
        <div className="bg-[#394449] rounded-[12px] px-[27px] py-[20px]">
          <div className={`${TEXT_BODY} leading-[22px] text-[#f1f2fb] text-[18px]`}>
            {hw.context.map((line, i) => (
              <p key={i} className={i < hw.context.length - 1 ? "mb-[8px]" : "mb-0"}>{line}</p>
            ))}
          </div>
        </div>
      </div>
      <div className="flex flex-col gap-[20px]">
        <p className={`${TEXT_TITLE} leading-[22px] text-[#f1f2fb] text-[18px]`}>Ваша задача:</p>
        <div className="bg-[#394449] rounded-[12px] px-[27px] py-[20px]">
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
        <div className="bg-[#394449] rounded-[12px] px-[27px] py-[20px]">
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
        <div className="bg-[#394449] rounded-[12px] px-[27px] py-[20px] flex flex-col gap-[21px]">
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
    <div className={`${TEXT_BODY} leading-[22px] text-[#f1f2fb] text-[18px] opacity-80 flex flex-col gap-[8px]`}>
      <p>Изучите примеры подобных экранов на Dribbble или Behance.</p>
      <p>Обратите внимание на визуальную иерархию и контраст элементов.</p>
      {hw.tip && <p>{hw.tip}</p>}
    </div>
  );
}

// ── Hero card ─────────────────────────────────────────────────────────────────

function LevelIcon() {
  const uid    = useId().replace(/:/g, "");
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

function HeroCard({ hw }: { hw: HomeworkData }) {
  return (
    <div className="flex flex-col items-center gap-[20px] w-full py-[10px]">
      {/* Icon — centered, no bg, like theory */}
      <div className="flex items-center justify-center" style={{ width: 160, height: 160 }}>
        <svg width="120" height="120" viewBox="0 0 24 24" fill="none" stroke="#f1f2fb" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" style={{ opacity: 0.5 }}>
          <path d="M14 2H6a2 2 0 0 0-2 2v16a2 2 0 0 0 2 2h12a2 2 0 0 0 2-2V8z" />
          <polyline points="14 2 14 8 20 8" />
          <line x1="16" y1="13" x2="8" y2="13" />
          <line x1="16" y1="17" x2="8" y2="17" />
          <polyline points="10 9 9 9 8 9" />
        </svg>
      </div>
      {/* Title left, time right */}
      <div className="flex items-center justify-between w-full">
        <p className={`${TEXT_TITLE} leading-[35px] text-[#f4f5fc] text-[32px]`}>{hw.title}</p>
        <div className="flex gap-[5px] items-center shrink-0">
          <div className="overflow-clip relative shrink-0 size-[14px]">
            <div className="absolute inset-[0_11.67%_0_11.66%]">
              <svg className="absolute block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 10.7333 14">
                <path d={svgPaths.p11af9000} fill="#F1F2FB" />
              </svg>
            </div>
          </div>
          <p className={`${TEXT_MEDIUM} leading-[20px] text-[#f1f2fb] text-[16px] whitespace-nowrap`}>{hw.time}</p>
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

function PendingCard() {
  return (
    <div className="flex flex-col gap-[16px] w-full">
      {/* Outer wrapper — yellow gradient for pending */}
      <div
        className="rounded-[15px] flex flex-col gap-[14px]"
        style={{ background: "#343e42", border: "2px solid #384348", padding: "20px" }}
      >
        {/* Status pill */}
        <div
          className="flex gap-[7px] items-center px-[12px] h-[32px] rounded-full self-start"
          style={{ background: "#2e2c18" }}
        >
          <IconProcessingTime />
          <p className={`${TEXT_TITLE} text-[13px] leading-[18px] whitespace-nowrap`} style={{ color: "#FFB121" }}>На проверке</p>
        </div>
        {/* Inner info card */}
        <div
          className="rounded-[12px] flex flex-col gap-[10px]"
          style={{ background: "#424D52", padding: "20px" }}
        >
          <p className={`${TEXT_BODY} text-[15px] leading-[22px]`} style={{ color: "rgba(244,245,252,0.4)" }}>
            Работа отправлена на проверку. Проверка занимает ~24 часа — уведомление придёт в разделе Уведомлений.
          </p>
        </div>
      </div>
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
  // Popup: show once when homework is reviewed/rejected and user hasn't seen it
  const [showReviewPopup, setShowReviewPopup] = useState(false);
  const [popupShownForStatus, setPopupShownForStatus] = useState<string | null>(null);

  // Keep url in sync if serverRecord loads after mount
  useEffect(() => {
    if (serverRecord?.figma_link) setUrl(serverRecord.figma_link);
  }, [serverRecord?.figma_link]);

  // Show popup when reviewed/rejected and unseen; mark seen only when popup is closed
  useEffect(() => {
    if (!homeworkLessonId || !hwCtx) return;
    if ((serverStatus === "reviewed" || serverStatus === "rejected") && serverStatus !== popupShownForStatus) {
      if (hwCtx.isUnseen(homeworkLessonId)) {
        setShowReviewPopup(true);
        setPopupShownForStatus(serverStatus);
      } else {
        // Already seen — just mark (no popup)
        hwCtx.markSeen(homeworkLessonId);
      }
    }
  }, [homeworkLessonId, serverStatus]); // eslint-disable-line react-hooks/exhaustive-deps

  const handleClosePopup = () => {
    setShowReviewPopup(false);
    if (homeworkLessonId && hwCtx) hwCtx.markSeen(homeworkLessonId);
  };

  const isReviewed  = serverStatus === "reviewed";
  const isRejected  = serverStatus === "rejected" && !localSubmitted;
  const isPending   = localSubmitted || serverStatus === "pending";

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
      // Play submission sound
      try {
        const ctx = new AudioContext();
        const vol = window.innerWidth < 768 ? 0.07 : 0.11;
        ctx.resume().then(() => {
          const now = ctx.currentTime + 0.05;
          // Rising soft two-note: F4 → A4
          [349, 440].forEach((freq, i) => {
            const o = ctx.createOscillator();
            const g = ctx.createGain();
            o.type = "sine";
            o.frequency.setValueAtTime(freq, now + i * 0.13);
            g.gain.setValueAtTime(0, now + i * 0.13);
            g.gain.linearRampToValueAtTime(vol, now + i * 0.13 + 0.03);
            g.gain.exponentialRampToValueAtTime(0.001, now + i * 0.13 + 0.22);
            o.connect(g); g.connect(ctx.destination);
            o.start(now + i * 0.13);
            o.stop(now + i * 0.13 + 0.25);
          });
          setTimeout(() => ctx.close(), 800);
        }).catch(() => {});
      } catch (_) {}
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

        {/* ── Review popup overlay ── */}
        {showReviewPopup && (
          <div className="fixed inset-0 z-50 flex items-end sm:items-center justify-center p-4" style={{ background: "rgba(20,26,28,0.85)", backdropFilter: "blur(6px)" }}>
            <div className="w-full max-w-[440px] rounded-[20px] flex flex-col gap-0 overflow-hidden" style={{ background: "#2C3538" }}>
              {/* Header */}
              <div className="flex items-center gap-[10px] px-[20px] pt-[20px] pb-[14px]">
                <div className="flex items-center justify-center w-[36px] h-[36px] rounded-full" style={{ background: "rgba(0,208,67,0.15)" }}>
                  <svg width="16" height="16" viewBox="0 0 16 16" fill="none">
                    <path d="M2 8L6.5 12.5L14 4" stroke="#00D043" strokeWidth="2.2" strokeLinecap="round" strokeLinejoin="round" />
                  </svg>
                </div>
                <p className={`${TEXT_TITLE} text-[18px] leading-[1.2] text-[#f4f5fc]`}>Домашка проверена!</p>
              </div>
              {/* Divider */}
              <div style={{ height: 1, background: "rgba(255,255,255,0.07)", margin: "0 20px" }} />
              {/* Body */}
              <div className="px-[20px] py-[16px] flex flex-col gap-[12px]">
                {serverRecord?.comment ? (
                  <p className={`${TEXT_BODY} text-[15px] leading-[22px] text-[rgba(244,245,252,0.85)]`}>{serverRecord.comment}</p>
                ) : (
                  <p className={`${TEXT_BODY} text-[15px] leading-[22px] text-[rgba(244,245,252,0.4)]`}>Проверяющий не оставил комментарий</p>
                )}
                {serverRecord?.image_url && (
                  <img src={serverRecord.image_url} alt="Скриншот" className="w-full object-cover rounded-[10px]" style={{ maxHeight: 200, border: "1px solid rgba(155,161,167,0.4)" }} />
                )}
              </div>
              {/* Button */}
              <div className="px-[20px] pb-[20px]">
                <button
                  onClick={handleClosePopup}
                  className="w-full h-[52px] rounded-[13px] flex items-center justify-center cursor-pointer transition-opacity hover:opacity-80 active:opacity-60"
                  style={{ background: "#00D043" }}
                >
                  <p className={`${TEXT_TITLE} text-[17px] text-[#0e1a10]`}>Отлично, понял!</p>
                </button>
              </div>
            </div>
          </div>
        )}

        {/* Outer wrapper — green gradient for reviewed */}
        <div
          className="rounded-[15px] flex flex-col gap-[14px]"
          style={{ background: "linear-gradient(145deg, #1a3022 0%, #343e42 55%)", border: "2px solid #1e4028", padding: "20px" }}
        >
          {/* Status pill */}
          <div
            className="flex gap-[7px] items-center px-[12px] h-[32px] rounded-full self-start"
            style={{ background: "#162418" }}
          >
            <IconGreenCheck />
            <p className={`${TEXT_TITLE} text-[13px] leading-[18px] whitespace-nowrap`} style={{ color: "#00C143" }}>Готово</p>
          </div>

          {/* Inner feedback card */}
          <div
            className="rounded-[12px] flex flex-col gap-[14px]"
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
        </div>

      </div>
    );
  }

  // ── Rejected state ──────────────────────────────────────────────────────────
  if (isRejected) {
    return (
      <div className="flex flex-col gap-[16px] w-full">

        {/* ── Review popup overlay ── */}
        {showReviewPopup && (
          <div className="fixed inset-0 z-50 flex items-end sm:items-center justify-center p-4" style={{ background: "rgba(20,26,28,0.85)", backdropFilter: "blur(6px)" }}>
            <div className="w-full max-w-[440px] rounded-[20px] flex flex-col gap-0 overflow-hidden" style={{ background: "#2C3538" }}>
              {/* Header */}
              <div className="flex items-center gap-[10px] px-[20px] pt-[20px] pb-[14px]">
                <div className="flex items-center justify-center w-[36px] h-[36px] rounded-full" style={{ background: "rgba(255,93,57,0.15)" }}>
                  <svg width="16" height="16" viewBox="0 0 16 16" fill="none">
                    <path d="M4 4L12 12M12 4L4 12" stroke="#ff5d39" strokeWidth="2.2" strokeLinecap="round" />
                  </svg>
                </div>
                <p className={`${TEXT_TITLE} text-[18px] leading-[1.2] text-[#f4f5fc]`}>Нужно переделать</p>
              </div>
              {/* Divider */}
              <div style={{ height: 1, background: "rgba(255,255,255,0.07)", margin: "0 20px" }} />
              {/* Body */}
              <div className="px-[20px] py-[16px] flex flex-col gap-[12px]">
                {serverRecord?.comment ? (
                  <p className={`${TEXT_BODY} text-[15px] leading-[22px] text-[rgba(244,245,252,0.85)]`}>{serverRecord.comment}</p>
                ) : (
                  <p className={`${TEXT_BODY} text-[15px] leading-[22px] text-[rgba(244,245,252,0.4)]`}>Проверяющий не оставил комментарий</p>
                )}
                {serverRecord?.image_url && (
                  <img src={serverRecord.image_url} alt="Скриншот" className="w-full object-cover rounded-[10px]" style={{ maxHeight: 200, border: "1px solid rgba(155,161,167,0.4)" }} />
                )}
              </div>
              {/* Button */}
              <div className="px-[20px] pb-[20px]">
                <button
                  onClick={handleClosePopup}
                  className="w-full h-[52px] rounded-[13px] flex items-center justify-center cursor-pointer transition-opacity hover:opacity-80 active:opacity-60"
                  style={{ background: "#ff5d39" }}
                >
                  <p className={`${TEXT_TITLE} text-[17px] text-[#f4f5fc]`}>Понял, переделаю!</p>
                </button>
              </div>
            </div>
          </div>
        )}

        {/* Outer wrapper — red for rejected */}
        <div
          className="rounded-[15px] flex flex-col gap-[14px]"
          style={{ background: "linear-gradient(145deg, #312630 0%, #343e42 55%)", border: "2px solid #4a3040", padding: "20px" }}
        >
          {/* Status pill */}
          <div
            className="flex gap-[7px] items-center px-[12px] h-[32px] rounded-full self-start"
            style={{ background: "#2a2030" }}
          >
            <svg width="14" height="14" viewBox="0 0 512 512" fill="none" xmlns="http://www.w3.org/2000/svg">
              <path d="m48 256c0 114.87 93.13 208 208 208s208-93.13 208-208-93.13-208-208-208-208 93.13-208 208zm96 66.67c5.45-61.45 34.14-117.09 122.87-117.09v-37.32a8.32 8.32 0 0 1 14-6l84.55 79.74a8.2 8.2 0 0 1 0 11.94l-84.42 79.77a8.32 8.32 0 0 1 -14-6v-37.29c-57.07 0-84.51 13.47-108.58 38.68-5.49 5.65-15.07 1.32-14.42-6.43z" fill="#e8a0c0" />
            </svg>
            <p className={`${TEXT_TITLE} text-[13px] leading-[18px] whitespace-nowrap`} style={{ color: "#e8a0c0" }}>Переделать</p>
          </div>

          {/* Inner feedback card */}
          <div
            className="rounded-[12px] flex flex-col gap-[14px]"
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
        </div>

        {/* Input for new link */}
        <div
          className="relative px-[20px] rounded-[15px] h-[56px] flex items-center justify-between w-full"
          style={{ backgroundImage: "linear-gradient(171.89deg, rgb(44, 53, 56) 2.4187%, rgb(56, 67, 72) 98.527%, rgb(44, 53, 56) 116.25%)" }}
        >
          <div aria-hidden="true" className="absolute border-[2px] border-[rgba(160,163,173,0.2)] border-solid inset-[-2px] pointer-events-none rounded-[15px]" />
          <div className="relative z-10 flex gap-[8px] items-center flex-1 min-w-0">
            <div
              className="overflow-clip relative shrink-0 size-[16px]"
              style={{ opacity: inputFocused ? 0.5 : 1, transition: "opacity 150ms" }}
            >
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

        {/* Submit button */}
        <div
          className={`group bg-[#f7f8fc] flex h-[56px] items-center justify-center relative rounded-[15px] select-none hover:translate-y-[2px] active:translate-y-[4px] transition-transform duration-75 w-full ${isSubmitting ? "opacity-50 cursor-wait" : "cursor-pointer"}`}
          onClick={isSubmitting ? undefined : handleSubmit}
        >
          <div aria-hidden="true" className="absolute inset-0 border-[0.835px] border-solid border-transparent pointer-events-none rounded-[15px] shadow-[0px_3px_0px_0px_#bcbec8] group-hover:shadow-[0px_2px_0px_0px_#bcbec8] group-active:shadow-none transition-shadow duration-75" />
          <p className={`${TEXT_TITLE} leading-[24px] text-[#2d373b] text-[24px] whitespace-nowrap`}>
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

  // ── Pending state (after resubmit with previous comment, or server pending) ──
  if (isPending && (serverRecord?.comment || serverRecord?.image_url)) {
    return (
      <div className="flex flex-col gap-[16px] w-full">

        {/* Outer wrapper */}
        <div
          className="rounded-[15px] flex flex-col gap-[14px]"
          style={{ background: "#343e42", border: "2px solid #384348", padding: "20px" }}
        >
          {/* Status pill */}
          <div
            className="flex gap-[7px] items-center px-[12px] h-[32px] rounded-full self-start"
            style={{ background: "#2E3538" }}
          >
            <IconProcessingTime />
            <p className={`${TEXT_TITLE} text-[13px] leading-[18px] whitespace-nowrap`} style={{ color: "#91969B" }}>На проверке</p>
          </div>

          {/* Inner card with previous comment */}
          <div
            className="rounded-[12px] flex flex-col gap-[14px]"
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
        </div>

      </div>
    );
  }

  if (isPending) {
    return <PendingCard />;
  }

  return (
    <div className="flex flex-col gap-[16px] w-full">
      {/* Input */}
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

      {/* Submit button */}
      <div
        className={`group bg-[#f7f8fc] flex h-[56px] items-center justify-center relative rounded-[15px] select-none hover:translate-y-[2px] active:translate-y-[4px] transition-transform duration-75 w-full ${isSubmitting ? 'opacity-50 cursor-wait' : 'cursor-pointer'}`}
        onClick={isSubmitting ? undefined : handleSubmit}
      >
        <div aria-hidden="true" className="absolute inset-0 border-[0.835px] border-solid border-transparent pointer-events-none rounded-[15px] shadow-[0px_3px_0px_0px_#bcbec8] group-hover:shadow-[0px_2px_0px_0px_#bcbec8] group-active:shadow-none transition-shadow duration-75" />
        <p className={`${TEXT_TITLE} leading-[24px] text-[#2d373b] text-[24px] whitespace-nowrap`}>
          {isSubmitting ? "Отправка..." : "Отправить работу"}
        </p>
      </div>

      {/* Warning note */}
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

export default function HomeworkPage() {
  const location = useLocation();
  const isMobile = useIsMobile();
  const homeworkLessonId = (location.state as any)?.homeworkId || "homework-1";
  const hw = HOMEWORK_CONTENT[homeworkLessonId] || DEFAULT_HOMEWORK;
  const hwCtx = useHomeworkSafe();
  const serverRecord = hwCtx?.getByLessonId(homeworkLessonId) ?? hwCtx?.getByLessonName(hw.title);
  const isPendingInline = isMobile && serverRecord?.status === "pending";

  const [openSections, setOpenSections] = useState<Set<number>>(new Set([0]));
  const [submitVisible, setSubmitVisible] = useState(true);
  const lastScrollRef = useRef(0);

  // Hide submit block when scrolling down (sync with tab bar behaviour)
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

  // Refresh homework data on page open to get latest comment/status from server
  useEffect(() => { hwCtx?.refresh(); }, []); // eslint-disable-line react-hooks/exhaustive-deps

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
          {/* Hero — no background, matches theory style */}
          <div className="pb-[10px] pt-[0px]">
            <HeroCard hw={hw} />
          </div>

          {/* 1. Задание — первым, включает описание + контекст + задачу */}
          <AccordionSection
            icon={<div className="relative shrink-0" style={{ width: 26, height: 26 }}><TaskIcon /></div>}
            title="Задание"
            isOpen={openSections.has(0)}
            onToggle={() => toggleSection(0)}
            sectionIdx={0}
          >
            <TaskContent hw={hw} />
          </AccordionSection>

          {/* 2. Что вы прокачаете */}
          <AccordionSection
            icon={<div className="relative shrink-0" style={{ width: 26, height: 26 }}><SkillsIcon /></div>}
            title="Что вы прокачаете"
            isOpen={openSections.has(1)}
            onToggle={() => toggleSection(1)}
            sectionIdx={1}
          >
            <SkillsContent hw={hw} />
          </AccordionSection>

          {/* 3. Требования */}
          <AccordionSection
            icon={<div className="relative shrink-0" style={{ width: 26, height: 26 }}><RequirementsIcon /></div>}
            title="Требования"
            isOpen={openSections.has(2)}
            onToggle={() => toggleSection(2)}
            sectionIdx={2}
          >
            <RequirementsContent hw={hw} />
          </AccordionSection>

          {/* 4. Пример */}
          <AccordionSection
            icon={<div className="relative shrink-0" style={{ width: 28, height: 28 }}><ExampleIcon /></div>}
            title="Рекомендации"
            isOpen={openSections.has(3)}
            onToggle={() => toggleSection(3)}
            sectionIdx={3}
          >
            <ExampleContent hw={hw} />
          </AccordionSection>

          {/* Pending status inline on mobile */}
          {isPendingInline && <PendingCard />}

          {/* Bottom padding — extra on mobile for the fixed submit block */}
          <div style={{ height: isMobile ? 130 : 110 }} />
        </div>
      </Layout>

      {/* Submit block — fixed at bottom (right on desktop, full-width on mobile) */}
      {!isPendingInline && <div
        style={isMobile ? {
          position: "fixed",
          bottom: submitVisible ? 52 : 4,
          left: 0,
          right: 0,
          padding: "12px 16px 16px",
          zIndex: 25,
          background: "linear-gradient(to top, #282F33 70%, transparent)",
          transition: "bottom 0.3s ease",
        } : {
          position: "fixed",
          bottom: 20,
          right: "max(40px, calc((100vw - 1440px) / 2 + 40px))",
          width: 280,
          zIndex: 50,
        }}
      >
        <SubmitBlock homeworkLessonId={homeworkLessonId} lessonName={hw.title} />
      </div>}
    </>
  );
}