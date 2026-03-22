import { useId } from "react";
import { useNavigate } from "react-router";
import { Lock } from "lucide-react";
import svgPaths from "../../imports/svg-pt1cecsedx";
import svgMfoan from "../../imports/svg-mfoan0qzpw";
import svgTheory from "../../imports/svg-ns2c3tgkyt";
import imgModule1 from "figma:asset/1d3e95d16c48ef4470ac62a88c5ff7b35e4ccb76.png";
import imgModule2 from "figma:asset/3aa8c3397b0eae2e6bc8fea2c11f49121cb23736.png";
import imgModule3 from "figma:asset/4c9055e86ba753d88dd53fb36b42956d50e57429.png";
import { useUserSafe } from "../context/UserContext";
import { getCourseProgress, getTotalCourseXP, COURSES, getCourseDuration } from "../data/courses";
import { useWindowWidth } from "../hooks/useWindowWidth";

// ─── Badge icons ──────────────────────────────────────────────────────────────

/**
 * Staircase level icon — Fix 3:
 * Only the first step is fully visible; steps 2–3 at 60% opacity via SVG mask.
 */
function LevelIcon({ active }: { active: boolean }) {
  const uid    = useId().replace(/:/g, "");
  const maskId = `lv-${uid}`;
  const bright = active ? "#F1F2FB" : "#798489";
  const dark   = active ? "#61737A" : "#798489";
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
            <path d={svgMfoan.p1f3ddd00} fill={dark}   />
            <path d={svgMfoan.p1dcc7b80} fill={bright} />
            <path d={svgMfoan.p36483400} fill={dark}   />
          </g>
        </svg>
      </div>
    </div>
  );
}

function BookIcon({ color = "#F1F2FB" }: { color?: string }) {
  return (
    <div className="h-[13.337px] relative shrink-0 w-[12.005px]">
      <svg className="absolute block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 12.0045 13.3368">
        <path d={svgPaths.p429c1f0} fill={color} />
      </svg>
    </div>
  );
}

/** Clock icon — same as Theory page (fix 5 from prev session, now used in all module cards) */
function TimeIcon({ color = "#F1F2FB" }: { color?: string }) {
  return (
    <div className="overflow-clip relative shrink-0 size-[14px]">
      <div className="absolute inset-[0_11.67%_0_11.66%]">
        <svg className="absolute block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 10.7333 14">
          <path d={svgTheory.p11af9000} fill={color} />
        </svg>
      </div>
    </div>
  );
}

function ZapSmallIcon() {
  return (
    <div className="relative shrink-0 size-[16px]">
      <svg className="absolute block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 16 16">
        <path d={svgPaths.p25c165f0} fill="#EEF5FF" />
      </svg>
    </div>
  );
}

// ─── Progress bar ─────────────────────────────────────────────────────────────

function ModuleProgressBar({ pct }: { pct: number }) {
  if (pct === 0) return null;
  return (
    <div className="content-stretch flex flex-col h-[32px] items-center justify-center relative shrink-0 w-full">
      <div className="bg-[#282f33] content-stretch flex flex-col h-[17px] items-start overflow-clip relative rounded-full shrink-0 w-full">
        <div
          className="h-[17px] rounded-full shrink-0 transition-[width] duration-300"
          style={{ width: `${pct}%`, backgroundImage: "linear-gradient(to bottom, #ff6b21, #994014)" }}
        />
      </div>
    </div>
  );
}

// ─── ACTIVE module card ───────────────────────────────────────────────────────

function ActiveModuleCard() {
  const navigate  = useNavigate();
  const userData  = useUserSafe();
  const vw = useWindowWidth();
  const isMobile = vw < 768;

  const progress    = userData ? getCourseProgress("ux-ui-basics", userData.user.lessonProgress) : 0;
  const pct         = Math.min(Math.round(progress * 100), 100);
  const totalXP     = getTotalCourseXP("ux-ui-basics");
  const course      = COURSES.find(c => c.id === "ux-ui-basics");
  const lessonCount = course?.lessons.length ?? 0;
  const totalMin    = getCourseDuration("ux-ui-basics");

  const buttonText = progress > 0 ? "Продолжить" : "Начать";

  if (isMobile) {
    return (
      <div className="bg-[#404d52] flex flex-col gap-[14px] p-[16px] rounded-[15px] w-full">
        <ModuleProgressBar pct={pct} />

        {/* Image + info row */}
        <div className="flex items-start gap-[14px]">
          <div className="bg-[#38444a] rounded-[12px] shrink-0 relative overflow-hidden" style={{ width: 80, height: 80 }}>
            <div className="absolute inset-0 flex items-center justify-center pointer-events-none">
              <img alt="" src={imgModule1} style={{ width: '130%', height: '130%', objectFit: 'cover' }} />
            </div>
          </div>
          <div className="flex flex-col gap-[8px] min-w-0 flex-1">
            <p className="font-['Roboto_Condensed:Medium',sans-serif] font-medium text-[#f4f5fc] text-[22px] leading-[26px]">
              Основы UX/UI
            </p>
            <div className="flex flex-wrap gap-[8px_16px] items-center">
              <div className="flex gap-[4px] items-center">
                <LevelIcon active={true} />
                <p className="font-['Roboto_Condensed:Medium',sans-serif] font-medium text-[#f1f2fb] text-[14px]">Новичёк</p>
              </div>
              <div className="flex gap-[4px] items-center">
                <BookIcon />
                <p className="font-['Roboto_Condensed:Medium',sans-serif] font-medium text-[#f1f2fb] text-[14px]">
                  {lessonCount} {lessonCount === 1 ? "урок" : lessonCount < 5 ? "урока" : "уроков"}
                </p>
              </div>
              {totalMin > 0 && (
                <div className="flex gap-[4px] items-center">
                  <TimeIcon />
                  <p className="font-['Roboto_Condensed:Medium',sans-serif] font-medium text-[#f1f2fb] text-[14px]">
                    {totalMin} мин
                  </p>
                </div>
              )}
            </div>
          </div>
        </div>

        {/* Action button — full width */}
        <div
          className="group bg-[#343e42] h-[48px] relative rounded-[12px] w-full cursor-pointer select-none active:translate-y-[2px] transition-transform duration-75"
          onClick={() => navigate("/lessons")}
        >
          <div aria-hidden="true" className="absolute border border-[#57646a] border-solid inset-0 pointer-events-none rounded-[12px] shadow-[0px_4px_0px_0px_black] group-active:shadow-none transition-shadow duration-75" />
          <div className="flex items-center justify-center gap-[8px] size-full px-[16px]">
            <p className="font-['Roboto_Condensed:Medium',sans-serif] font-medium text-[#f4f5fc] text-[20px] whitespace-nowrap">{buttonText}</p>
            <div className="bg-[#404d52] flex h-[24px] items-center justify-center px-[8px] rounded-full">
              <p className="font-['Inter:Semi_Bold',sans-serif] font-medium text-[#eef5ff] text-[9px] whitespace-nowrap">+{totalXP} XP</p>
            </div>
          </div>
        </div>
      </div>
    );
  }

  return (
    // Fix 4: outer decorative border removed from active module card
    <div className="bg-[#404d52] content-stretch flex flex-col gap-[16px] h-[332px] items-center p-[20px] relative rounded-[15px] shrink-0 w-full">

      <ModuleProgressBar pct={pct} />

      <div className="content-stretch flex flex-[1_0_0] gap-[20px] items-start min-h-px min-w-px relative w-full">

        {/* Image panel */}
        <div className="content-stretch flex flex-col h-full items-start relative shrink-0 w-[226px]">
          <div className="bg-[#38444a] flex-[1_0_0] min-h-px min-w-px relative rounded-[15px] w-full">
            <div className="absolute h-[161px] left-[26px] top-[38px] w-[186px]">
              <div className="absolute inset-0 overflow-hidden pointer-events-none">
                <img alt="" className="absolute h-[107.09%] left-[-22.73%] max-w-none top-[-3.55%] w-[145.46%]" src={imgModule1} />
              </div>
            </div>
          </div>
        </div>

        {/* Info panel */}
        <div className="content-stretch flex flex-[1_0_0] flex-col h-full items-start justify-between min-h-px min-w-px relative">

          {/* Top: title + unified meta badges row (fix 1) */}
          <div className="content-stretch flex flex-col gap-[14px] items-start relative shrink-0 w-full">
            <p className="font-['Roboto_Condensed:Medium',sans-serif] font-medium leading-[27.5px] relative shrink-0 text-[#f4f5fc] text-[28px] whitespace-nowrap">
              Основы UX/UI
            </p>

            {/* Meta row — Новичок  3 урока  ⏱ 20 мин  (fix 1, 2) */}
            <div className="content-stretch flex gap-[16px] items-center relative shrink-0 flex-wrap">
              {/* Level */}
              <div className="content-stretch flex gap-[5px] items-center justify-center relative shrink-0">
                <LevelIcon active={true} />
                <p className="font-['Roboto_Condensed:Medium',sans-serif] font-medium leading-[20px] relative shrink-0 text-[#f1f2fb] text-[16px] whitespace-nowrap">Новичёк</p>
              </div>
              {/* Lesson count */}
              <div className="content-stretch flex gap-[5px] items-center justify-center relative shrink-0">
                <BookIcon />
                <p className="font-['Roboto_Condensed:Medium',sans-serif] font-medium leading-[20px] relative shrink-0 text-[#f1f2fb] text-[16px] whitespace-nowrap">
                  {lessonCount} {lessonCount === 1 ? "урок" : lessonCount < 5 ? "урока" : "уроков"}
                </p>
              </div>
              {/* Time badge — only when totalMin > 0 */}
              {totalMin > 0 && (
                <div className="content-stretch flex gap-[5px] items-center justify-center relative shrink-0">
                  <TimeIcon />
                  <p className="font-['Roboto_Condensed:Medium',sans-serif] font-medium leading-[20px] relative shrink-0 text-[#f1f2fb] text-[16px] whitespace-nowrap">
                    {totalMin} {totalMin === 1 ? "минута" : totalMin < 5 ? "минуты" : "минут"}
                  </p>
                </div>
              )}
            </div>
          </div>

          {/* Bottom: action button */}
          <div
            className="group bg-[#343e42] h-[60px] relative rounded-[15px] shrink-0 w-full cursor-pointer select-none hover:translate-y-[3px] active:translate-y-[5px] transition-transform duration-75"
            onClick={() => navigate("/lessons")}
          >
            <div aria-hidden="true" className="absolute border border-[#57646a] border-solid inset-0 pointer-events-none rounded-[15px] shadow-[0px_5px_0px_0px_black] group-hover:shadow-[0px_2px_0px_0px_black] group-active:shadow-none transition-shadow duration-75" />
            <div className="flex flex-row items-center justify-center gap-[8px] size-full px-[16px]">
              <p className="font-['Roboto_Condensed:Medium',sans-serif] font-medium leading-[27.5px] relative shrink-0 text-[#f4f5fc] text-[26px] whitespace-nowrap">{buttonText}</p>
              <div className="bg-[#404d52] content-stretch flex h-[28px] items-center justify-center px-[12px] relative rounded-full shrink-0">
                <p className="font-['Inter:Semi_Bold',sans-serif] font-medium leading-[15px] not-italic relative shrink-0 text-[#eef5ff] text-[10px] whitespace-nowrap">+{totalXP} XP</p>
              </div>
            </div>
          </div>

        </div>
      </div>
    </div>
  );
}

// ─── LOCKED module card ───────────────────────────────────────────────────────

interface LockedModuleCardProps {
  title: string;
  level: string;
  lessonCount: number;
  durationMin?: number;
  image: string;
}

function LockedModuleCard({ title, level, lessonCount, durationMin = 0, image }: LockedModuleCardProps) {
  const lessonLabel = lessonCount === 1 ? "урок" : lessonCount < 5 && lessonCount > 0 ? "урока" : "уроков";
  const vw = useWindowWidth();
  const isMobile = vw < 768;

  if (isMobile) {
    return (
      <div className="bg-[#343e42] flex flex-col gap-[14px] p-[16px] rounded-[15px] w-full opacity-60 select-none">
        {/* Image + info row */}
        <div className="flex items-start gap-[14px]">
          <div className="bg-[#303c41] rounded-[12px] shrink-0 relative overflow-hidden" style={{ width: 64, height: 64 }}>
            <div className="absolute inset-0 flex items-center justify-center pointer-events-none">
              <img alt="" src={image} style={{ width: '120%', height: '120%', objectFit: 'cover' }} />
            </div>
          </div>
          <div className="flex flex-col gap-[8px] min-w-0 flex-1">
            <p className="font-['Roboto_Condensed:Medium',sans-serif] font-medium text-[#f4f5fc] text-[20px] leading-[24px] truncate">{title}</p>
            <div className="flex flex-wrap gap-[8px_14px] items-center">
              <div className="flex gap-[4px] items-center">
                <LevelIcon active={false} />
                <p className="font-['Roboto_Condensed:Medium',sans-serif] font-medium text-[#f1f2fb] text-[13px]">{level}</p>
              </div>
              {lessonCount > 0 && (
                <div className="flex gap-[4px] items-center">
                  <BookIcon color="#798489" />
                  <p className="font-['Roboto_Condensed:Medium',sans-serif] font-medium text-[#f1f2fb] text-[13px]">{lessonCount} {lessonLabel}</p>
                </div>
              )}
            </div>
          </div>
        </div>

        {/* Lock button — full width */}
        <div className="bg-[#2c3437] h-[44px] relative rounded-[12px] w-full flex items-center justify-center gap-[8px]">
          <div aria-hidden="true" className="absolute border border-[#3d474a] border-solid inset-0 pointer-events-none rounded-[12px] shadow-[0px_2px_0px_0px_black]" />
          <Lock className="relative z-10 shrink-0 text-[#57646a]" size={18} strokeWidth={2.5} />
          <p className="font-['Roboto_Condensed:Medium',sans-serif] font-medium relative z-10 text-[#57646a] text-[16px] whitespace-nowrap">Заблокировано</p>
        </div>
      </div>
    );
  }

  return (
    // Fix 1 from prev session: no outer border; fix 4: same rule
    <div className="bg-[#343e42] content-stretch flex flex-col h-[287px] items-center p-[20px] relative rounded-[15px] shrink-0 w-full opacity-60 select-none">

      <div className="content-stretch flex flex-[1_0_0] gap-[20px] items-start min-h-px min-w-px relative w-full">

        {/* Image panel */}
        <div className="bg-[#303c41] content-stretch flex flex-col h-full items-start relative rounded-[15px] shrink-0 w-[226px]">
          <div className="flex-[1_0_0] min-h-px min-w-px relative rounded-[15px] w-full">
            <div className="absolute h-[171px] left-[43px] top-[38px] w-[150px]">
              <div className="absolute inset-0 overflow-hidden pointer-events-none">
                <img alt="" className="absolute h-[111.35%] left-0 max-w-none top-[-5.68%] w-full" src={image} />
              </div>
            </div>
          </div>
        </div>

        {/* Info panel */}
        <div className="content-stretch flex flex-[1_0_0] flex-col h-full items-start justify-between min-h-px min-w-px relative">

          {/* Top: title + unified meta badges row (fix 1) */}
          <div className="content-stretch flex flex-col gap-[14px] items-start relative shrink-0 w-full">
            <p className="font-['Roboto_Condensed:Medium',sans-serif] font-medium leading-[27.5px] relative shrink-0 text-[#f4f5fc] text-[28px] whitespace-nowrap">{title}</p>

            {/* Meta row — Level  lessons  ⏱ time */}
            <div className="content-stretch flex gap-[16px] items-center relative shrink-0 flex-wrap">
              <div className="content-stretch flex gap-[5px] items-center justify-center relative shrink-0">
                <LevelIcon active={false} />
                <p className="font-['Roboto_Condensed:Medium',sans-serif] font-medium leading-[20px] relative shrink-0 text-[#f1f2fb] text-[16px] whitespace-nowrap">{level}</p>
              </div>
              <div className="content-stretch flex gap-[5px] items-center justify-center relative shrink-0">
                <BookIcon color="#798489" />
                <p className="font-['Roboto_Condensed:Medium',sans-serif] font-medium leading-[20px] relative shrink-0 text-[#f1f2fb] text-[16px] whitespace-nowrap">
                  {lessonCount} {lessonLabel}
                </p>
              </div>
              {durationMin > 0 && (
                <div className="content-stretch flex gap-[5px] items-center justify-center relative shrink-0">
                  <TimeIcon color="#798489" />
                  <p className="font-['Roboto_Condensed:Medium',sans-serif] font-medium leading-[20px] relative shrink-0 text-[#f1f2fb] text-[16px] whitespace-nowrap">
                    {durationMin} {durationMin === 1 ? "минута" : durationMin < 5 ? "минуты" : "минут"}
                  </p>
                </div>
              )}
            </div>
          </div>

          {/* Bottom: lock */}
          <div className="bg-[#2c3437] h-[60px] relative rounded-[15px] shrink-0 w-full flex items-center justify-center gap-[10px]">
            <div aria-hidden="true" className="absolute border border-[#3d474a] border-solid inset-0 pointer-events-none rounded-[15px] shadow-[0px_2px_0px_0px_black]" />
            <Lock className="relative z-10 shrink-0 text-[#57646a]" size={22} strokeWidth={2.5} />
            <p className="font-['Roboto_Condensed:Medium',sans-serif] font-medium leading-[27.5px] relative z-10 shrink-0 text-[#57646a] text-[22px] whitespace-nowrap">Заблокировано</p>
          </div>

        </div>
      </div>
    </div>
  );
}

// ─── Main export ──────────────────────────────────────────────────────────────

export default function ModulesContent() {
  const width = useWindowWidth();
  return (
    // Fix 5: gap matches RightWidgets gap-[20px]
    <div className="content-stretch flex flex-col gap-[20px] items-center relative shrink-0 w-full">
      <ActiveModuleCard />
      <LockedModuleCard title="UX интерфейсов" level="Мидл" lessonCount={0} image={imgModule2} />
      <LockedModuleCard title="UI Kit"           level="Мидл" lessonCount={0} image={imgModule3} />
    </div>
  );
}