import { useId } from "react";
import { useNavigate } from "react-router";
import { Zap, Check } from "lucide-react";
import svgMfoan from "../../imports/svg-mfoan0qzpw";
import UxIcon from "../../imports/Юх";
import FigmaIcon from "../../imports/Фмгма";
import NeuralIcon from "../../imports/Нейросети";
import UxProIcon from "../../imports/ЮхПро";
import TypographyIcon from "../../imports/Типографика";
import { useUserSafe } from "../context/UserContext";
import { LESSONS } from "../data/lessons";
import { getCourseProgressFromRoadmap } from "../../features/roadmap/roadmap-data";
import { useWindowWidth } from "../hooks/useWindowWidth";

// ─── Static course display config ─────────────────────────────────────────────

interface CourseDisplay {
  id: string;
  title: string;
  level: string;
  modules: number;
  lessons: number;
  icon: React.ComponentType;
  isActive?: boolean;
}

// ─── Dynamic stats for UX/UI course from LESSONS ──────────────────────────────

function getUxUiCourseStats() {
  const moduleIds = [...new Set(LESSONS.map(l => l.moduleId))];
  const lessonCount = LESSONS.length;
  const totalXP = LESSONS.reduce((sum, l) => sum + l.xpReward, 0);
  return { modules: moduleIds.length, lessons: lessonCount, totalXP };
}

const UX_UI_STATS = getUxUiCourseStats();

const COURSE_DISPLAY: CourseDisplay[] = [
  { id: "ux-ui-basics",  title: "UX/UI",              level: "новичек", modules: UX_UI_STATS.modules, lessons: UX_UI_STATS.lessons, icon: UxIcon,         isActive: true },
  { id: "figma-pro",     title: "Figma PRO",           level: "мидл",    modules: 4, lessons: 24, icon: FigmaIcon },
  { id: "ai-designers",  title: "ИИ для дизайнеров",  level: "новичек", modules: 4, lessons: 24, icon: NeuralIcon },
  { id: "ux-pro",        title: "UX Pro",              level: "мидл",    modules: 4, lessons: 20, icon: UxProIcon },
  { id: "typographica",  title: "Типографика Pro",     level: "мидл",    modules: 3, lessons: 18, icon: TypographyIcon },
];

// ─── Badge icons ──────────────────────────────────────────────────────────────

/**
 * Staircase level icon — Fix 3:
 * Only the first step is fully visible; steps 2–3 at 60% opacity via SVG mask.
 * useId provides a unique mask ID when multiple instances are on the same page.
 */
function LevelIcon({ active }: { active: boolean }) {
  const uid  = useId().replace(/:/g, "");
  const maskId = `lv-${uid}`;
  const bright = active ? "#F1F2FB" : "#798489";
  const dark   = active ? "#61737A" : "#798489";
  return (
    <div className="h-[15px] overflow-clip relative shrink-0 w-[17px]">
      <div className="absolute inset-[22.57%_5.88%_15.9%_5.88%]">
        <svg className="absolute block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 14.9997 9.23063">
          <defs>
            <mask id={maskId}>
              {/* Step 1 (left ≈33 %): fully visible */}
              <rect x="0"   y="0" width="5.1" height="9.3" fill="white" />
              {/* Steps 2–3 (right ≈67 %): 60 % visible */}
              <rect x="5"   y="0" width="10"  height="9.3" fill="white" fillOpacity="0.6" />
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

/** Stacked-layers module/lesson icon */
function LayerIcon({ active }: { active: boolean }) {
  const c = active ? "#F1F2FB" : "#798489";
  return (
    <div className="relative shrink-0 size-[14px]">
      <svg className="absolute block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 14 14">
        <path d={svgMfoan.p32f7ef00} fill={c} />
        <path d={svgMfoan.p223b500}  fill={c} />
        <path d={svgMfoan.p36804e00} fill={c} />
      </svg>
    </div>
  );
}

// ─── Progress bar (inside active card image panel) ────────────────────────────

function ActiveProgressBar({ courseId }: { courseId: string }) {
  const userData = useUserSafe();
  const progress = userData ? getCourseProgressFromRoadmap(userData.user.lessonProgress) : 0;
  const pct = Math.min(Math.round(progress * 100), 100);

  // Point 1: hide completely if course not started
  if (pct === 0) return null;

  return (
    <div className="absolute left-[37px] top-[12px] w-[112px]">
      <div className="bg-[#404d52] h-[9px] overflow-clip relative rounded-full w-full">
        <div
          className="h-full rounded-full transition-[width] duration-300"
          style={{
            width: `${pct}%`,
            backgroundImage: "linear-gradient(to bottom, #ff6b21, #994014)",
          }}
        />
      </div>
    </div>
  );
}

// ─── Shared Badges row ────────────────────────────────────────────────────────

function BadgesRow({ level, modules, lessons, active }: { level: string; modules: number; lessons: number; active: boolean }) {
  const textColor = active ? "text-[#f1f2fb]" : "text-[#798489]";
  return (
    <div className="content-stretch flex flex-wrap gap-[5px_21px] items-center relative shrink-0 w-full">
      {/* Level */}
      <div className="content-stretch flex gap-[5px] items-center justify-center relative shrink-0">
        <LevelIcon active={active} />
        <p className={`font-['Roboto_Condensed:Medium',sans-serif] font-medium leading-[20px] relative shrink-0 ${textColor} text-[16px] whitespace-nowrap`}>{level}</p>
      </div>
      {/* Modules */}
      <div className="content-stretch flex gap-[5px] items-center justify-center relative shrink-0">
        <LayerIcon active={active} />
        <p className={`font-['Roboto_Condensed:Medium',sans-serif] font-medium leading-[20px] relative shrink-0 ${textColor} text-[16px] whitespace-nowrap`}>{modules} {modules === 1 ? "модуль" : modules < 5 ? "модуля" : "модулей"}</p>
      </div>
      {/* Lessons */}
      <div className="content-stretch flex gap-[5px] items-center justify-center relative shrink-0">
        <LayerIcon active={active} />
        <p className={`font-['Roboto_Condensed:Medium',sans-serif] font-medium leading-[20px] relative shrink-0 ${textColor} text-[16px] whitespace-nowrap`}>{lessons} {lessons === 1 ? "урок" : lessons < 5 ? "урока" : "уроков"}</p>
      </div>
    </div>
  );
}

// ─── ACTIVE course card ───────────────────────────────────────────────────────

export function ActiveCourseCard({ course }: { course: CourseDisplay }) {
  const navigate = useNavigate();
  const userData = useUserSafe();
  const vw = useWindowWidth();
  const isMobile = vw < 768;
  const progress = userData ? getCourseProgressFromRoadmap(userData.user.lessonProgress) : 0;

  // 3 states: not started / started / completed
  const isCompleted = progress >= 1;
  const isStarted   = progress > 0 && !isCompleted;
  const totalXP     = UX_UI_STATS.totalXP;
  const Icon = course.icon;

  if (isMobile) {
    return (
      <div className="bg-[#404d52] flex flex-col gap-[16px] p-[16px] rounded-[15px] w-full">
        {/* Icon + title row */}
        <div className="flex items-center gap-[14px]">
          <div className="bg-[#38444a] rounded-[12px] shrink-0 flex items-center justify-center" style={{ width: 64, height: 64 }}>
            <div style={{ width: 40, height: 36 }}><Icon /></div>
          </div>
          <div className="flex flex-col gap-[4px] min-w-0">
            <p className="font-['Roboto_Condensed:Medium',sans-serif] font-medium text-[#f4f5fc] text-[22px] leading-[26px] truncate">
              {course.title}
            </p>
            <BadgesRow level={course.level} modules={course.modules} lessons={course.lessons} active={true} />
          </div>
        </div>

        {/* Progress bar */}
        {(isStarted || isCompleted) && (
          <div className="h-[6px] bg-white/10 rounded-full overflow-hidden">
            <div
              className="h-full bg-gradient-to-b from-[#ff6b21] to-[#994014] transition-[width] duration-300"
              style={{ width: `${Math.round(Math.min(progress, 1) * 100)}%` }}
            />
          </div>
        )}

        {/* Action button — full width */}
        <div
          className="group bg-[#343e42] h-[48px] relative rounded-[12px] w-full cursor-pointer select-none active:translate-y-[2px] transition-transform duration-75"
          onClick={() => navigate("/lessons")}
        >
          <div
            aria-hidden="true"
            className="absolute border border-[#57646a] border-solid inset-0 pointer-events-none rounded-[12px] shadow-[0px_4px_0px_0px_black] group-active:shadow-none transition-shadow duration-75"
          />
          <div className="flex items-center justify-center gap-[8px] size-full px-[16px]">
            {isCompleted ? (
              <>
                <div className="flex items-center justify-center w-[20px] h-[20px] rounded-full bg-[#22c55e]">
                  <Check size={12} color="#fff" strokeWidth={3} />
                </div>
                <p className="font-['Roboto_Condensed:Medium',sans-serif] font-medium text-[#f4f5fc] text-[18px] whitespace-nowrap">
                  Курс пройден
                </p>
              </>
            ) : isStarted ? (
              <p className="font-['Roboto_Condensed:Medium',sans-serif] font-medium text-[#f4f5fc] text-[18px] whitespace-nowrap">
                Продолжить
              </p>
            ) : (
              <>
                <p className="font-['Roboto_Condensed:Medium',sans-serif] font-medium text-[#f4f5fc] text-[18px] whitespace-nowrap">
                  Начать
                </p>
                <div className="bg-[#404d52] flex h-[24px] items-center justify-center px-[8px] gap-[4px] rounded-full">
                  <Zap size={10} color="#ff6b21" fill="#ff6b21" />
                  <p className="font-['Inter:Semi_Bold',sans-serif] font-medium text-[#eef5ff] text-[9px] whitespace-nowrap">
                    {totalXP} XP
                  </p>
                </div>
              </>
            )}
          </div>
        </div>
      </div>
    );
  }

  return (
    // FIX 3: uniform 20px padding (top and bottom)
    <div className="bg-[#404d52] content-stretch flex flex-col items-center p-[20px] relative rounded-[15px] shrink-0 w-full">

      {/* Content row */}
      <div className="content-stretch flex gap-[20px] h-[159px] items-start relative shrink-0 w-full">

        {/* Image panel */}
        <div className="content-stretch flex flex-col h-full items-start relative shrink-0">
          <div className="bg-[#38444a] flex-[1_0_0] min-h-px min-w-px relative rounded-[15px] w-[185px]">
            <div className="absolute inset-0 flex items-center justify-center pointer-events-none">
              <div style={{ width: 105, height: 95 }}>
                <Icon />
              </div>
            </div>
            <ActiveProgressBar courseId={course.id} />
          </div>
        </div>

        {/* Info panel */}
        <div className="content-stretch flex flex-[1_0_0] flex-col h-[159px] items-start justify-between min-h-px min-w-px relative">

          {/* Top: title + badges */}
          <div className="content-stretch flex flex-col gap-[10px] items-start relative shrink-0 w-full">
            <p className="font-['Roboto_Condensed:Medium',sans-serif] font-medium leading-[27.5px] relative shrink-0 text-[#f4f5fc] text-[28px] whitespace-nowrap">
              {course.title}
            </p>
            <BadgesRow level={course.level} modules={course.modules} lessons={course.lessons} active={true} />
          </div>

          {/* Bottom: button + progress bar side by side */}
          <div className="flex items-center gap-[20px]">
            {/* Action button */}
            <div
              className="group bg-[#343e42] h-[55px] relative rounded-[15px] shrink-0 w-[210px] cursor-pointer select-none hover:translate-y-[3px] active:translate-y-[5px] transition-transform duration-75"
              onClick={() => navigate("/lessons")}
            >
              <div
                aria-hidden="true"
                className="absolute border border-[#57646a] border-solid inset-0 pointer-events-none rounded-[15px] shadow-[0px_5px_0px_0px_black] group-hover:shadow-[0px_2px_0px_0px_black] group-active:shadow-none transition-shadow duration-75"
              />
              <div className="flex flex-row items-center justify-center gap-[8px] size-full px-[16px]">
                {isCompleted ? (
                  <>
                    <div className="flex items-center justify-center w-[22px] h-[22px] rounded-full bg-[#22c55e]">
                      <Check size={14} color="#fff" strokeWidth={3} />
                    </div>
                    <p className="font-['Roboto_Condensed:Medium',sans-serif] font-medium leading-[27.5px] relative shrink-0 text-[#f4f5fc] text-[22px] whitespace-nowrap">
                      Курс пройден
                    </p>
                  </>
                ) : isStarted ? (
                  <p className="font-['Roboto_Condensed:Medium',sans-serif] font-medium leading-[27.5px] relative shrink-0 text-[#f4f5fc] text-[22px] whitespace-nowrap">
                    Продолжить
                  </p>
                ) : (
                  <>
                    <p className="font-['Roboto_Condensed:Medium',sans-serif] font-medium leading-[27.5px] relative shrink-0 text-[#f4f5fc] text-[22px] whitespace-nowrap">
                      Начать
                    </p>
                    <div className="bg-[#404d52] content-stretch flex h-[28px] items-center justify-center px-[10px] gap-[4px] relative rounded-full shrink-0">
                      <Zap size={12} color="#ff6b21" fill="#ff6b21" />
                      <p className="font-['Inter:Semi_Bold',sans-serif] font-medium leading-[15px] not-italic relative shrink-0 text-[#eef5ff] text-[10px] whitespace-nowrap">
                        {totalXP} XP
                      </p>
                    </div>
                  </>
                )}
              </div>
            </div>

            {/* Progress bar stretches to card edge using flex-1 */}
            <div className="flex-1 h-[6px] bg-white/10 rounded-full overflow-hidden">
              <div
                className="h-full bg-gradient-to-b from-[#ff6b21] to-[#994014] transition-[width] duration-300"
                style={{ width: `${Math.round(Math.min(progress, 1) * 100)}%` }}
              />
            </div>
          </div>

        </div>
      </div>
    </div>
  );
}

// ─── LOCKED course card ───────────────────────────────────────────────────────

function LockedCourseCard({ course }: { course: CourseDisplay }) {
  const Icon = course.icon;
  const vw = useWindowWidth();
  const isMobile = vw < 768;

  if (isMobile) {
    return (
      <div className="bg-[#343e42] flex flex-col gap-[16px] p-[16px] rounded-[15px] w-full">
        {/* Icon + title row */}
        <div className="flex items-center gap-[14px]">
          <div className="bg-[#38444a] rounded-[12px] shrink-0 flex items-center justify-center opacity-60" style={{ width: 64, height: 64 }}>
            <div style={{ width: 40, height: 36 }}><Icon /></div>
          </div>
          <div className="flex flex-col gap-[4px] min-w-0">
            <p className="font-['Roboto_Condensed:Medium',sans-serif] font-medium text-[#798489] text-[22px] leading-[26px] truncate">
              {course.title}
            </p>
            <BadgesRow level={course.level} modules={course.modules} lessons={course.lessons} active={false} />
          </div>
        </div>

        {/* "В разработке" button — full width */}
        <div className="bg-[#343e42] h-[44px] relative rounded-[12px] w-full">
          <div aria-hidden="true" className="absolute border border-[#57646a] border-solid inset-0 pointer-events-none rounded-[12px] shadow-[0px_2px_0px_0px_black]" />
          <div className="flex items-center justify-center size-full">
            <p className="font-['Roboto_Condensed:Medium',sans-serif] font-medium text-[#798589] text-[18px] whitespace-nowrap">
              В разработке
            </p>
          </div>
        </div>
      </div>
    );
  }

  return (
    // FIX 3: uniform 20px padding (top and bottom)
    <div className="bg-[#343e42] content-stretch flex flex-col items-center p-[20px] relative rounded-[15px] shrink-0 w-full">

      {/* Content row */}
      <div className="content-stretch flex gap-[20px] h-[159px] items-start relative shrink-0 w-full">

        {/* Image panel */}
        <div className="content-stretch flex flex-col h-full items-start relative shrink-0">
          <div className="bg-[#38444a] flex-[1_0_0] min-h-px min-w-px relative rounded-[15px] w-[185px]">
            <div className="absolute inset-0 flex items-center justify-center opacity-60 pointer-events-none">
              <div style={{ width: 105, height: 95 }}>
                <Icon />
              </div>
            </div>
          </div>
        </div>

        {/* Info panel */}
        <div className="content-stretch flex flex-[1_0_0] flex-col h-[159px] items-start justify-between min-h-px min-w-px relative">

          {/* Top: title + badges */}
          <div className="content-stretch flex flex-col gap-[19px] items-start relative shrink-0">
            <p className="font-['Roboto_Condensed:Medium',sans-serif] font-medium leading-[27.5px] relative shrink-0 text-[#798489] text-[28px] whitespace-nowrap">
              {course.title}
            </p>
            <BadgesRow level={course.level} modules={course.modules} lessons={course.lessons} active={false} />
          </div>

          {/* Bottom: "В разработке" button */}
          <div className="content-stretch flex flex-col items-start relative shrink-0 w-full">
            <div className="bg-[#343e42] content-stretch flex h-[55px] items-center justify-center px-[17px] py-px relative rounded-[15px] shrink-0 w-[210px]">
              <div aria-hidden="true" className="absolute border border-[#57646a] border-solid inset-0 pointer-events-none rounded-[15px] shadow-[0px_2px_0px_0px_black]" />
              <p className="font-['Roboto_Condensed:Medium',sans-serif] font-medium leading-[27.5px] relative shrink-0 text-[#798589] text-[22px] whitespace-nowrap">
                В разработке
              </p>
            </div>
          </div>

        </div>
      </div>
    </div>
  );
}

// ─── Main export ──────────────────────────────────────────────────────────────

export { COURSE_DISPLAY };
export type { CourseDisplay };

export default function CoursesContent() {
  return (
    // Fix 5: gap matches RightWidgets gap-[20px]
    <div className="content-stretch flex flex-col gap-[20px] items-start justify-center relative shrink-0 w-full">
      {COURSE_DISPLAY.map((course) =>
        course.isActive
          ? <ActiveCourseCard key={course.id} course={course} />
          : <LockedCourseCard key={course.id} course={course} />
      )}
    </div>
  );
}