import { useState, useId, useCallback, useEffect } from "react";
import { useNavigate } from "react-router";
import Layout from "../components/Layout";
import { ChallengePhone1, ChallengePhone2, ChallengePhone3 } from "../../imports/Frame481451";
import svgCardPaths from "../../imports/svg-u7gh1bm86c";
import svgMfoan from "../../imports/svg-mfoan0qzpw";
import { useWindowWidth } from "../hooks/useWindowWidth";

// ── Challenge status storage ──────────────────────────────────────────────────

export type ChallengeStatus = "pending" | "reviewed" | "rejected" | null;

const STATUS_KEY = "uxeo_challenge_statuses";

export function getChallengeStatus(id: string): ChallengeStatus {
  try {
    const stored = JSON.parse(localStorage.getItem(STATUS_KEY) ?? "{}");
    return stored[id] ?? null;
  } catch { return null; }
}

export function setChallengeStatus(id: string, status: "pending" | "reviewed" | "rejected") {
  try {
    const stored = JSON.parse(localStorage.getItem(STATUS_KEY) ?? "{}");
    stored[id] = status;
    localStorage.setItem(STATUS_KEY, JSON.stringify(stored));
  } catch {}
}

function useAllChallengeStatuses(): Record<string, ChallengeStatus> {
  const [statuses, setStatuses] = useState<Record<string, ChallengeStatus>>(() => {
    try { return JSON.parse(localStorage.getItem(STATUS_KEY) ?? "{}"); }
    catch { return {}; }
  });
  // Re-sync when page becomes visible (user returns from detail page)
  useEffect(() => {
    const sync = () => {
      try { setStatuses(JSON.parse(localStorage.getItem(STATUS_KEY) ?? "{}")); }
      catch {}
    };
    window.addEventListener("focus", sync);
    document.addEventListener("visibilitychange", sync);
    return () => {
      window.removeEventListener("focus", sync);
      document.removeEventListener("visibilitychange", sync);
    };
  }, []);
  return statuses;
}

// ── Challenge data ────────────────────────────────────────────────────────────

interface ChallengeData {
  id: string;
  title: string;
  subtitle: string;
  time: string;
  level: string;
  xp: number;
  image?: string;
  Phone: React.ComponentType;
}

const CHALLENGES: ChallengeData[] = [
  {
    id: "challenge-health",
    title: "Интерфейс приложения здоровья",
    subtitle: "Создайте главный экран трекера здоровья",
    time: "25 мин",
    level: "Джун",
    xp: 800,
    Phone: ChallengePhone1,
    image: "/challenge-health-preview.png",
  },
  {
    id: "challenge-fintech",
    title: "Онбординг для финтех-приложения",
    subtitle: "Спроектируйте экран приветствия платёжного сервиса",
    time: "30 мин",
    level: "Джун",
    xp: 800,
    Phone: ChallengePhone2,
    image: "/challenge-fintech-preview.png",
  },
  {
    id: "challenge-marketplace",
    title: "Карточки товаров маркетплейса",
    subtitle: "Разработайте карточки продуктов для e-commerce",
    time: "35 мин",
    level: "Мидл",
    xp: 1500,
    Phone: ChallengePhone3,
    image: "/challenge-marketplace-preview.png",
  },
];

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

function TabBar({ active, onSwitch }: { active: "current" | "archive"; onSwitch: (t: "current" | "archive") => void }) {
  return (
    <div className="flex items-start justify-between w-full">
      <div
        className={`h-[40px] flex items-center gap-[10px] px-[20px] relative rounded-[12px] shrink-0 cursor-pointer select-none transition-colors duration-150 ${active === "current" ? "bg-[#404d52]" : "bg-[#323d41] hover:bg-[#383f44]"}`}
        onClick={() => onSwitch("current")}
      >
        <p className={`font-['Roboto_Condensed:Medium',sans-serif] font-medium leading-[27.5px] shrink-0 text-[18px] whitespace-nowrap transition-colors duration-150 ${active === "current" ? "text-[#f4f5fc]" : "text-[#798589]"}`}>
          Текущие
        </p>
        <div
          className="h-[24px] flex items-center justify-center px-[11.727px] rounded-[12296925px] shrink-0 transition-colors duration-150"
          style={{ background: active === "current" ? "#343e42" : "#2c3438" }}
        >
          <p className="font-['Inter:Semi_Bold',sans-serif] font-medium leading-[15.392px] shrink-0 text-[#eef5ff] text-[10.261px] whitespace-nowrap">3 дня</p>
        </div>
      </div>
      <div
        className={`h-[40px] flex items-center justify-center px-[20px] relative rounded-[12px] shrink-0 cursor-pointer select-none transition-colors duration-150 ${active === "archive" ? "bg-[#404d52]" : "bg-[#323d41] hover:bg-[#383f44]"}`}
        onClick={() => onSwitch("archive")}
      >
        <p className={`font-['Roboto_Condensed:Medium',sans-serif] font-medium leading-[27.5px] shrink-0 text-[18px] whitespace-nowrap transition-colors duration-150 ${active === "archive" ? "text-[#f4f5fc]" : "text-[#798589]"}`}>
          См. архив
        </p>
      </div>
    </div>
  );
}

// ── Status pill ───────────────────────────────────────────────────────────────

function StatusPill({ status }: { status: ChallengeStatus }) {
  if (!status) return null;

  if (status === "pending") return (
    <div className="bg-[#424d52] flex gap-[6px] h-[36px] items-center justify-center px-[12px] rounded-full shrink-0">
      <IconProcessingTime />
      <p className="font-['Roboto_Condensed:Medium',sans-serif] font-medium text-[#ffb121] text-[14px] whitespace-nowrap">На проверке</p>
    </div>
  );

  if (status === "reviewed") return (
    <div className="bg-[#1c2e20] flex gap-[6px] h-[36px] items-center justify-center px-[12px] rounded-full shrink-0" style={{ border: "1px solid rgba(94,221,96,0.3)" }}>
      <IconGreenCheck />
      <p className="font-['Roboto_Condensed:Medium',sans-serif] font-medium text-[#5edd60] text-[14px] whitespace-nowrap">Одобрено</p>
    </div>
  );

  if (status === "rejected") return (
    <div className="bg-[#2e1a10] flex gap-[6px] h-[36px] items-center justify-center px-[12px] rounded-full shrink-0" style={{ border: "1px solid rgba(255,107,33,0.3)" }}>
      <svg width="14" height="14" viewBox="0 0 24 24" fill="none" className="shrink-0">
        <path d="M12 9v4m0 4h.01M10.29 3.86L1.82 18a2 2 0 0 0 1.71 3h16.94a2 2 0 0 0 1.71-3L13.71 3.86a2 2 0 0 0-3.42 0z" stroke="#FF6B21" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" />
      </svg>
      <p className="font-['Roboto_Condensed:Medium',sans-serif] font-medium text-[#ff6b21] text-[14px] whitespace-nowrap">Переделать</p>
    </div>
  );

  return null;
}

// ── Challenge Card ────────────────────────────────────────────────────────────

function ChallengeCard({ challenge, status, onClick }: {
  challenge: ChallengeData;
  status: ChallengeStatus;
  onClick: () => void;
}) {
  const vw = useWindowWidth();
  const isMobile = vw < 768;
  const { Phone } = challenge;

  const isNotStarted = !status;
  const cardBg = "#343e42";
  const btnBg  = "#2c3438";

  const buttonLabel =
    status === "reviewed" ? "Смотреть фидбек" :
    status === "rejected" ? "Исправить" :
    status === "pending" ? "Открыть" :
    "Начать";

  if (isMobile) {
    return (
      <div className={`flex flex-col p-[16px] relative rounded-[15px] w-full gap-[14px]`} style={{ background: cardBg }}>
        <div className="bg-[#30383D] rounded-[12px] w-full h-[200px] relative flex items-center justify-center overflow-hidden">
          {challenge.image ? (
            <img src={challenge.image} alt={challenge.title} className="w-full h-full object-contain" style={{ padding: "20px 0" }} />
          ) : (
            <Phone />
          )}
        </div>
        <div className="flex flex-col gap-[8px]">
          <p className="font-['Roboto_Condensed:Medium',sans-serif] font-medium text-[#f4f5fc] text-[22px] leading-[26px]">
            {challenge.title}
          </p>
          <p className="font-['Roboto_Condensed:Regular',sans-serif] font-normal text-[#798589] text-[15px] leading-[19px]">
            {challenge.subtitle}
          </p>
          {status ? (
            <p className="font-['Roboto_Condensed:Medium',sans-serif] font-medium text-[#798589] text-[13px]">Проверка занимает до 24 часов</p>
          ) : (
            <div className="flex gap-[16px] items-center">
              <div className="flex gap-[5px] items-center">
                <IconSandClock />
                <p className="font-['Roboto_Condensed:Medium',sans-serif] font-medium text-[#f1f2fb] text-[14px]">{challenge.time}</p>
              </div>
              <div className="flex gap-[5px] items-center">
                <IconFace />
                <p className="font-['Roboto_Condensed:Medium',sans-serif] font-medium text-[#f1f2fb] text-[14px]">{challenge.level}</p>
              </div>
            </div>
          )}
          <div className="flex items-center gap-[12px] mt-[2px]">
            <button
              className={`group flex-1 h-[48px] relative rounded-[13px] cursor-pointer select-none hover:translate-y-[2px] active:translate-y-[4px] transition-transform duration-75`}
              style={{ background: btnBg }}
              onClick={onClick}
            >
              <div aria-hidden="true" className="absolute border border-[#57646a] border-solid inset-0 pointer-events-none rounded-[13px] shadow-[0px_4px_0px_0px_black] group-hover:shadow-[0px_2px_0px_0px_black] group-active:shadow-none transition-shadow duration-75" />
              <div className="flex flex-row items-center justify-center gap-[8px] size-full px-[16px]">

                <p className="font-['Roboto_Condensed:Medium',sans-serif] font-medium text-[#f4f5fc] text-[18px]">{buttonLabel}</p>
                {isNotStarted && (
                  <div className="bg-[#404d52] flex h-[26px] items-center justify-center px-[10px] rounded-full">
                    <p className="font-['Inter:Semi_Bold',sans-serif] font-medium text-[#eef5ff] text-[10px]">+{challenge.xp} XP</p>
                  </div>
                )}
              </div>
            </button>
            {status && <StatusPill status={status} />}
          </div>
        </div>
      </div>
    );
  }

  // Desktop
  return (
    <div className="content-stretch flex flex-col items-center p-[20px] relative rounded-[15px] shrink-0 w-full" style={{ background: cardBg }}>
      <div className="content-stretch flex gap-[20px] h-[200px] items-start relative shrink-0 w-full">
        {/* Image panel */}
        <div className="content-stretch flex flex-col h-full items-start relative shrink-0">
          <div className="bg-[#30383D] flex-[1_0_0] min-h-px min-w-px relative rounded-[15px] w-[185px] overflow-hidden">
            <div className="absolute inset-0 flex items-center justify-center pointer-events-none">
              {challenge.image ? (
                <img src={challenge.image} alt={challenge.title} className="w-full h-full object-contain" style={{ padding: "20px 0" }} />
              ) : (
                <Phone />
              )}
            </div>
          </div>
        </div>

        {/* Info panel */}
        <div className="content-stretch flex flex-[1_0_0] flex-col h-[200px] items-start justify-between min-h-px min-w-px relative">
          {/* Top: title + meta */}
          <div className="content-stretch flex flex-col gap-[10px] items-start relative shrink-0 w-full">
            <p className="font-['Roboto_Condensed:Medium',sans-serif] font-medium leading-[27.5px] relative shrink-0 text-[#f4f5fc] text-[26px]">
              {challenge.title}
            </p>
            {status ? (
              <p className="font-['Roboto_Condensed:Medium',sans-serif] font-medium leading-[15px] text-[#798589] text-[14px]">
                Проверка занимает до 24 часов
              </p>
            ) : (
              <div className="content-stretch flex flex-wrap gap-[5px_21px] items-center relative shrink-0 w-full">
                <div className="flex gap-[5px] items-center">
                  <IconSandClock />
                  <p className="font-['Roboto_Condensed:Medium',sans-serif] font-medium leading-[20px] text-[#f1f2fb] text-[16px] whitespace-nowrap">{challenge.time}</p>
                </div>
                <div className="flex gap-[5px] items-center">
                  <IconFace />
                  <p className="font-['Roboto_Condensed:Medium',sans-serif] font-medium leading-[20px] text-[#f1f2fb] text-[16px] whitespace-nowrap">{challenge.level}</p>
                </div>
              </div>
            )}
          </div>

          {/* Bottom: button + status */}
          <div className="flex items-center gap-[20px] w-full">
            <div
              className="group h-[55px] relative rounded-[15px] shrink-0 w-[210px] cursor-pointer select-none hover:translate-y-[3px] active:translate-y-[5px] transition-transform duration-75"
              style={{ background: btnBg }}
              onClick={onClick}
            >
              <div
                aria-hidden="true"
                className="absolute border border-[#57646a] border-solid inset-0 pointer-events-none rounded-[15px] shadow-[0px_5px_0px_0px_black] group-hover:shadow-[0px_2px_0px_0px_black] group-active:shadow-none transition-shadow duration-75"
              />
              <div className="flex flex-row items-center justify-center gap-[8px] size-full px-[16px]">

                <p className="font-['Roboto_Condensed:Medium',sans-serif] font-medium leading-[27.5px] relative shrink-0 text-[#f4f5fc] text-[22px] whitespace-nowrap">
                  {buttonLabel}
                </p>
                {isNotStarted && (
                  <div className="bg-[#404d52] content-stretch flex h-[28px] items-center justify-center px-[12px] relative rounded-full shrink-0">
                    <p className="font-['Inter:Semi_Bold',sans-serif] font-medium leading-[15px] not-italic relative shrink-0 text-[#eef5ff] text-[10px] whitespace-nowrap">
                      +{challenge.xp} XP
                    </p>
                  </div>
                )}
              </div>
            </div>
            {status && <StatusPill status={status} />}
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
      <p className="font-['Roboto_Condensed:Medium',sans-serif] font-medium leading-[27.5px] text-[#798589] text-[22px]">
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
  const statuses = useAllChallengeStatuses();

  return (
    <Layout title="Недельные вызовы" rightWidth="320px" stickyBar={<TabBar active={activeTab} onSwitch={setActiveTab} />}>
      <div className="flex flex-col gap-[20px] w-full">
        {activeTab === "current" ? (
          <div className="flex flex-col gap-[20px]">
            {CHALLENGES.map(challenge => (
              <ChallengeCard
                key={challenge.id}
                challenge={challenge}
                status={statuses[challenge.id] ?? null}
                onClick={() => navigate("/challenge-detail", { state: { challengeId: challenge.id, challengeName: challenge.title } })}
              />
            ))}
          </div>
        ) : (
          <ArchivePlaceholder />
        )}
      </div>
    </Layout>
  );
}
