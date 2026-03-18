import imgImageColor   from "figma:asset/848cc9d9d2ee375b005fbdca2522ab616019dc08.png";
import imgProgressRoot from "figma:asset/a1d523f018c959ced344d5cf7020c7ccabfebe3b.png";
import { useNavigate }   from "react-router";
import { useId, useRef, useEffect, useLayoutEffect } from "react";
import svgMfoan          from "../../imports/svg-mfoan0qzpw";
import svgPathsCube      from "../../imports/svg-vhrurcibhe";
import svgPathsXP        from "../../imports/svg-b2jpi9u37u";
import svgPathsLightning from "../../imports/svg-mya2oswe4l";
import RightWidgets      from "./RightWidgets";
import { Lesson }        from "../data/lessons";

// ─── Icons ────────────────────────────────────────────────────────────────────

function CubeIcon() {
  return (
    <div className="relative shrink-0 size-[14px]">
      <div className="absolute inset-[34.44%_32.72%_0_0]">
        <svg className="absolute block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 9.41954 9.17748">
          <path d={svgPathsCube.p21a3e380} fill="#232A2D" />
        </svg>
      </div>
      <div className="absolute inset-[0_0_22.96%_21.06%]">
        <svg className="absolute block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 11.0523 10.7856">
          <path d={svgPathsCube.p2d337500} fill="#232A2D" />
        </svg>
      </div>
    </div>
  );
}

function LightningXPIcon() {
  return (
    <div className="relative shrink-0 size-[14px]">
      <svg className="absolute block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 12 14">
        <path d={svgPathsXP.p91a8b80} fill="#232A2D" />
      </svg>
    </div>
  );
}

function LightningButtonIcon() {
  return (
    <div className="h-[41px] relative shrink-0 w-[28px]">
      <svg className="absolute block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 28 41">
        <path d={svgPathsLightning.p1c93cf00} fill="#F7F8FC" />
      </svg>
    </div>
  );
}

function LessonLevelIcon() {
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
            <path d={svgMfoan.p1f3ddd00} fill="#232a2d" />
            <path d={svgMfoan.p1dcc7b80} fill="#232a2d" />
            <path d={svgMfoan.p36483400} fill="#232a2d" />
          </g>
        </svg>
      </div>
    </div>
  );
}

// ─── Progress row ─────────────────────────────────────────────────────────────

function CourseProgress({ lesson }: { lesson: Lesson }) {
  const isLocked  = lesson.status === "locked";
  const label     = isLocked ? "Заблокировано" : "Пройдено";
  const total     = lesson.totalQuestions > 0 ? lesson.totalQuestions : 5;
  const done      = isLocked ? 0 : lesson.progress;
  const pct       = isLocked ? 0 : Math.min((done / total) * 100, 100);
  const is100     = !isLocked && done >= total && total > 0;

  return (
    <div className="flex flex-col gap-[10px] items-start relative shrink-0 w-full">
      <div className="flex font-['Roboto_Condensed:Medium',sans-serif] font-medium items-start justify-between leading-[20px] relative shrink-0 text-[#343e42] text-[16px] w-full whitespace-nowrap">
        <p className="relative shrink-0">{label}</p>
        <div className="flex gap-[6px] items-center relative shrink-0">
          <p className="relative shrink-0">{done} / {total}</p>
          {is100 && (
            <div className="flex items-center justify-center size-[20px] rounded-full bg-[#00d043]">
              <svg className="size-[12px]" fill="none" viewBox="0 0 12 12" stroke="white" strokeWidth="2">
                <path d="M2 6L5 9L10 3" strokeLinecap="round" strokeLinejoin="round" />
              </svg>
            </div>
          )}
        </div>
      </div>

      {/* Progress bar — always visible, empty for locked */}
      <div className="content-stretch flex flex-col items-center justify-center relative shrink-0 w-full">
        <div className="content-stretch flex flex-col h-[17px] items-start overflow-clip relative rounded-full shrink-0 w-full">
          <img
            alt=""
            className="absolute inset-0 max-w-none object-cover pointer-events-none rounded-full size-full"
            src={imgProgressRoot}
          />
          {pct > 0 && (
            <div
              className="h-[17px] rounded-full shrink-0 transition-[width] duration-300 relative z-10"
              style={{
                width: `${pct}%`,
                backgroundImage:
                  "linear-gradient(171.634deg, rgb(66, 78, 83) 54.135%, rgb(44, 53, 56) 85.747%)",
              }}
            />
          )}
        </div>
      </div>
    </div>
  );
}

// ─── Badges row ───────────────────────────────────────────────────────────────

function CourseBadgesRow({ xpReward }: { xpReward: number }) {
  return (
    <div className="flex items-center justify-between relative shrink-0 w-full">
      <div className="flex gap-[21px] items-center relative shrink-0">
        <div className="flex gap-[5px] items-center relative shrink-0">
          <LessonLevelIcon />
          <p className="font-['Roboto_Condensed:Medium',sans-serif] font-medium leading-[20px] relative shrink-0 text-[#232a2d] text-[16px] whitespace-nowrap">
            Новичек
          </p>
        </div>
        <div className="flex gap-[5px] items-center relative shrink-0">
          <CubeIcon />
          <p className="font-['Roboto_Condensed:Medium',sans-serif] font-medium leading-[20px] relative shrink-0 text-[#232a2d] text-[16px] whitespace-nowrap">
            Квизы
          </p>
        </div>
      </div>
      {xpReward > 0 && (
        <div className="flex gap-[5px] items-center relative shrink-0">
          <LightningXPIcon />
          <p className="font-['Roboto_Condensed:Medium',sans-serif] font-medium leading-[20px] relative shrink-0 text-[#232a2d] text-[16px] whitespace-nowrap">
            +{xpReward} XP
          </p>
        </div>
      )}
    </div>
  );
}

// ─── Buttons ──────────────────────────────────────────────────────────────────
//
// TRUE button physics:
//   Outer wrapper  → pointer-events-none (shadow lives here, stays fixed)
//   Shadow div     → absolute bottom-0, static, bg-black/grey
//   Button surface → absolute top-0, pointer-events-auto, moves down on hover/active
//
// Default: surface at top-0, shadow visible gap = 5px
// Hover:   surface translate +3px → gap = 2px
// Active:  surface translate +5px → gap = 0px (button covers shadow)
//
// Locked: single full-width "Недоступно", shadow 3px, no hover animation

function CourseButtons({ lesson }: { lesson: Lesson }) {
  const navigate = useNavigate();

  const isLocked    = lesson.status === "locked";
  const isCompleted = lesson.status === "completed";
  const buttonText  = isCompleted ? "Повторить" : lesson.progress > 0 ? "Продолжить" : "Начать";

  // Navigate to theory page with lessonId
  const handleStart = () => {
    navigate("/theory", { state: { lessonId: lesson.lessonId } });
  };

  const handleStartOld = () => {
    try {
      const ctx = new AudioContext();
      const o   = ctx.createOscillator();
      o.type    = "sine";
      o.frequency.setValueAtTime(660, ctx.currentTime);
      o.frequency.exponentialRampToValueAtTime(880, ctx.currentTime + 0.08);
      const g = ctx.createGain();
      g.gain.setValueAtTime(0.12, ctx.currentTime);
      g.gain.exponentialRampToValueAtTime(0.001, ctx.currentTime + 0.08);
      o.connect(g); g.connect(ctx.destination);
      o.start(); o.stop(ctx.currentTime + 0.08);
    } catch (_) {}
    navigate(`/lesson-quiz?quizId=${encodeURIComponent(lesson.quizId || lesson.lessonId)}&lessonId=${encodeURIComponent(lesson.lessonId)}`, { state: { lessonId: lesson.lessonId, quizId: lesson.quizId || lesson.lessonId } });
  };

  if (isLocked) {
    // Shadow = 3px → container height = 60 + 3 = 63px
    return (
      <div className="relative shrink-0 w-full pointer-events-none" style={{ height: 63 }}>
        {/* Static shadow */}
        <div className="absolute inset-x-0 bottom-0 h-[60px] rounded-[15px] bg-black" />
        {/* Button surface — no hover/active for locked */}
        <div
          className="absolute inset-x-0 top-0 h-[60px] rounded-[15px] bg-[#343e42] border border-[#57646a] border-solid pointer-events-auto select-none cursor-not-allowed flex items-center justify-center"
          style={{ zIndex: 1 }}
        >
          <p className="font-['Roboto_Condensed:Medium',sans-serif] font-medium leading-[27.5px] text-[#798589] text-[26px] whitespace-nowrap">
            Недоступно
          </p>
        </div>
      </div>
    );
  }

  // Normal state: shadow = 5px → container height = 60 + 5 = 65px
  return (
    <div className="flex flex-row flex-wrap gap-[12px] items-start relative shrink-0 w-full">

      {/* ── Main action button ── */}
      <div className="flex-[2_1_240px] relative pointer-events-none" style={{ height: 65 }}>
        <div className="absolute inset-x-0 bottom-0 h-[60px] rounded-[15px] bg-black" />
        <button
          onClick={handleStart}
          style={{ zIndex: 1 }}
          className="absolute inset-x-0 top-0 h-[60px] bg-[#343e42] border border-[#57646a] border-solid rounded-[15px] cursor-pointer pointer-events-auto select-none outline-none hover:translate-y-[3px] active:translate-y-[5px] transition-transform duration-75 flex items-center justify-center"
        >
          <div className="flex gap-[8px] items-center" style={{ paddingLeft: 20, paddingRight: 20 }}>
            {!isCompleted && <LightningButtonIcon />}
            <p className="font-['Roboto_Condensed:Medium',sans-serif] font-medium leading-[27.5px] text-[#f4f5fc] text-[28px] whitespace-nowrap">
              {buttonText}
            </p>
          </div>
        </button>
      </div>

      {/* ── Теория button ── */}
      <div className="flex-[1_1_140px] relative pointer-events-none" style={{ height: 65 }}>
        <div className="absolute inset-x-0 bottom-0 h-[60px] rounded-[15px] bg-[#bcbec8]" />
        <div
          onClick={handleStart}
          style={{ zIndex: 1, background: "rgba(247,248,252,0.9)" }}
          className="absolute inset-x-0 top-0 h-[60px] rounded-[15px] cursor-pointer pointer-events-auto select-none hover:translate-y-[3px] active:translate-y-[5px] transition-transform duration-75 flex items-center justify-center"
        >
          <p className="font-['Roboto_Condensed:Medium',sans-serif] font-medium leading-[27.5px] text-[#323c41] text-[28px] whitespace-nowrap" style={{ paddingLeft: 20, paddingRight: 20 }}>
            Теория
          </p>
        </div>
      </div>

    </div>
  );
}

// ─── Lesson card ──────────────────────────────────────────────────────────────

function LessonCard({ lesson }: { lesson: Lesson }) {
  return (
    <div
      className="flex flex-col gap-[20px] items-end p-[35px] relative rounded-[15px] shrink-0 w-full"
      style={{
        backgroundImage:
          "linear-gradient(146.391deg, rgb(172, 173, 178) 20.426%, rgb(184, 178, 172) 36.606%, rgb(128, 129, 134) 116.78%)",
      }}
    >
      {/* Inset shadow */}
      <div className="absolute inset-0 pointer-events-none rounded-[inherit] shadow-[inset_-4px_0px_4px_0px_rgba(0,0,0,0.25),inset_4px_0px_4px_0px_rgba(0,0,0,0.25),inset_0px_-5px_4px_0px_rgba(0,0,0,0.25),inset_0px_4px_4px_0px_rgba(0,0,0,0.25)]" />

      {/* Image + title/description */}
      <div className="flex gap-[20px] items-start justify-end relative shrink-0 w-full">
        {/* Image — shrinks proportionally as the card narrows; inner content clips gracefully */}
        <div
          className="relative flex items-center justify-center overflow-hidden"
          style={{
            flexShrink: 1,
            flexBasis: '154px',
            minWidth: '70px',
            height: 110,
          }}
        >
          <div className="-rotate-90 flex-none">
            <div className="h-[154px] relative w-[110px] flex items-center justify-center">
              <img
                alt=""
                className="object-contain"
                style={{ maxWidth: '100%', maxHeight: '100%' }}
                src={imgImageColor}
              />
            </div>
          </div>
        </div>

        {/* Text — takes all remaining space; min-w-0 prevents overflow */}
        <div className="flex flex-1 flex-col gap-[25px] items-start min-h-px min-w-0 relative text-[#232a2d] pr-[20px]">
          <p className="font-['Roboto_Condensed:Medium',sans-serif] font-medium leading-[27.5px] relative shrink-0 text-[26px] whitespace-nowrap">
            {lesson.title}
          </p>
          <p className="font-['Roboto_Condensed:Medium',sans-serif] font-medium leading-[20px] relative shrink-0 text-[18px]">
            {lesson.description}
          </p>
        </div>
      </div>

      {/* Progress — identical structure for all states */}
      <CourseProgress lesson={lesson} />

      {/* Badges + buttons */}
      <div className="flex flex-col gap-[20px] items-start relative shrink-0 w-full">
        <CourseBadgesRow xpReward={lesson.xpReward} />
        <CourseButtons lesson={lesson} />
      </div>
    </div>
  );
}

// ─── Export ───────────────────────────────────────────────────────────────────

export default function LessonContent({ lesson }: { lesson: Lesson }) {
  const wrapRef        = useRef<HTMLDivElement>(null);
  const prevHeightRef  = useRef<number>(0);

  // Capture current rendered height after every paint.
  // This value is used as the "old" height when lesson changes.
  useEffect(() => {
    if (wrapRef.current) {
      prevHeightRef.current = wrapRef.current.offsetHeight;
    }
  }); // no deps — runs after every render

  // Animate height transition BEFORE paint when lesson.id changes.
  // At this point prevHeightRef holds the previous render's height.
  useLayoutEffect(() => {
    const el = wrapRef.current;
    if (!el || prevHeightRef.current === 0) return;

    const oldH = prevHeightRef.current;
    const newH = el.scrollHeight;
    if (oldH === newH) return;

    el.style.height     = `${oldH}px`;
    el.style.overflow   = "hidden";
    el.style.transition = "";

    requestAnimationFrame(() => {
      el.style.transition = "height 320ms ease-out";
      el.style.height     = `${newH}px`;
      el.addEventListener("transitionend", () => {
        el.style.height     = "";
        el.style.overflow   = "";
        el.style.transition = "";
      }, { once: true });
    });
  }, [lesson.id]); // eslint-disable-line react-hooks/exhaustive-deps

  return (
    <div className="flex flex-col gap-[22px] items-start w-full">
      {/* Wrapper measured for height animation */}
      <div ref={wrapRef} className="w-full">
        <LessonCard lesson={lesson} />
      </div>
      {/* Desktop widgets — hidden on mobile (Layout handles mobile separately) */}
      <div className="hidden xl:block w-full">
        <RightWidgets />
      </div>
    </div>
  );
}