import { useState, useMemo, useCallback } from "react";
import Layout from "../components/Layout";
import RoadmapPanel from "../components/RoadmapPanel";
import RightWidgets from "../components/RightWidgets";
import { LESSONS, Lesson, LessonStatus } from "../data/lessons";
import { QUIZ_BANK } from "../data/quiz-bank";
import { useUserSafe } from "../context/UserContext";
import { useNavigate } from "react-router";
import { useWindowWidth } from "../hooks/useWindowWidth";
import svgPathsLightning from "../../imports/svg-mya2oswe4l";

// ── Threshold: unlock next lesson when >= 50% questions are answered correctly ──
// A lesson is completed when correctAnswers >= Math.ceil(totalQuestions * 0.5)
function unlockThreshold(totalQuestions: number): number {
  return Math.ceil(totalQuestions * 0.5);
}

// ── "Продолжить" button (matches Figma: #ff5d39 bg, #ff390d border, #c24226 shadow) ──

function LightningButtonIcon() {
  return (
    <div className="h-[41px] relative shrink-0 w-[28px]">
      <svg className="absolute block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 28 41">
        <path d={svgPathsLightning.p1c93cf00} fill="#F7F8FC" />
      </svg>
    </div>
  );
}

function ContinueButton({ onClick }: { onClick: () => void }) {
  return (
    <button
      onClick={() => {
        try {
          const ctx = new AudioContext();
          const o = ctx.createOscillator();
          o.type = "sine";
          o.frequency.setValueAtTime(660, ctx.currentTime);
          o.frequency.exponentialRampToValueAtTime(880, ctx.currentTime + 0.08);
          const g = ctx.createGain();
          g.gain.setValueAtTime(0.12, ctx.currentTime);
          g.gain.exponentialRampToValueAtTime(0.001, ctx.currentTime + 0.08);
          o.connect(g); g.connect(ctx.destination);
          o.start(); o.stop(ctx.currentTime + 0.08);
        } catch (_) {}
        onClick();
      }}
      className="group relative cursor-pointer select-none outline-none rounded-[15px] bg-[#FF5D39] transition-all duration-75 w-full"
      style={{ 
        height: 70,
        boxShadow: '0 6px 0 #b83a1f',
      }}
      onMouseEnter={(e) => {
        e.currentTarget.style.transform = 'translateY(2px)';
        e.currentTarget.style.boxShadow = '0 4px 0 #b83a1f';
      }}
      onMouseLeave={(e) => {
        e.currentTarget.style.transform = 'translateY(0)';
        e.currentTarget.style.boxShadow = '0 6px 0 #b83a1f';
      }}
      onMouseDown={(e) => {
        e.currentTarget.style.transform = 'translateY(6px)';
        e.currentTarget.style.boxShadow = '0 0 0 #b83a1f';
      }}
      onMouseUp={(e) => {
        e.currentTarget.style.transform = 'translateY(2px)';
        e.currentTarget.style.boxShadow = '0 4px 0 #b83a1f';
      }}
    >
      <div
        aria-hidden="true"
        className="absolute border-[0.835px] border-[#ff390d] border-solid inset-0 pointer-events-none rounded-[15px]"
      />
      <div className="flex gap-[6.678px] items-center justify-center px-[25.835px] size-full">
        <LightningButtonIcon />
        <p className="font-['Roboto_Condensed:Medium',sans-serif] font-medium leading-[27.5px] text-[#f4f5fc] text-[26px] whitespace-nowrap">
          Продолжить
        </p>
        <div className="bg-[#d65e43] h-[28.585px] rounded-[12296925px] shrink-0 flex items-center justify-center px-[11.727px]">
          <p className="font-['Inter:Semi_Bold',sans-serif] font-semibold leading-[15.392px] text-[#eef5ff] text-[10.261px] whitespace-nowrap">
            +125 XP
          </p>
        </div>
      </div>
    </button>
  );
}

// ── Mobile sticky continue button ─────────────────────────────────────────────

function MobileContinueButton({ onClick }: { onClick: () => void }) {
  return (
    <button
      onClick={onClick}
      className="w-full rounded-[13px] flex items-center justify-center gap-[8px] cursor-pointer select-none active:translate-y-[3px] transition-transform duration-75"
      style={{
        height: 52,
        background: "#FF5D39",
        boxShadow: "0 4px 0 #b83a1f",
      }}
    >
      <div className="h-[22px] relative shrink-0 w-[15px]">
        <svg className="absolute block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 28 41">
          <path d={svgPathsLightning.p1c93cf00} fill="#F7F8FC" />
        </svg>
      </div>
      <p className="font-['Roboto_Condensed:Bold',sans-serif] font-bold text-[#f4f5fc] text-[20px]">
        Продолжить
      </p>
      <div className="bg-black/20 flex h-[24px] items-center justify-center px-[10px] rounded-full">
        <p className="font-['Inter:Semi_Bold',sans-serif] font-semibold text-[#eef5ff] text-[10px]">
          +125 XP
        </p>
      </div>
    </button>
  );
}

// ── Right column: widgets + continue button ───────────────────────────────────

function RightColumn({ onContinue }: { onContinue: () => void }) {
  return (
    <div className="flex flex-col gap-[19px] items-start w-full">
      <RightWidgets />
      <ContinueButton onClick={onContinue} />
    </div>
  );
}

// ── Main page ────────────────────────────────────────────────────────────────

export default function LessonPage() {
  const userData = useUserSafe();
  const navigate = useNavigate();
  const vw = useWindowWidth();
  const isMobile = vw < 768;

  // Derive dynamic lesson statuses from UserContext progress.
  // NODE STATE RULES:
  // 1. CURRENT: First lesson where progress < threshold (not passed yet)
  // 2. COMPLETED: Lessons with progress >= threshold (50% or more correct)
  // 3. LOCKED: All lessons after the current lesson
  // Progress is ALWAYS derived from UserContext, never from static LESSONS data.
  const lessons = useMemo((): Lesson[] => {
    const result: Lesson[] = [];
    let currentAssigned = false;

    for (const lesson of LESSONS) {
      // CRITICAL: Use lesson.quizId (stored in data) to get progress per quiz
      // Each lesson has its own unique quizId — no shared progress possible
      const progressKey = lesson.quizId || lesson.lessonId;
      const progressData    = userData?.getLessonProgress(progressKey);
      const hasContextData  = progressData && (progressData.correctAnswers > 0 || Object.keys(progressData.questions).length > 0);

      // Completion uses correctAnswers (best-ever score, set by saveBestScore at quiz end).
      const effectiveCorrect = hasContextData
        ? (progressData.correctAnswers ?? 0)
        : 0;

      // SINGLE SOURCE OF TRUTH: use actual quiz length from QUIZ_BANK,
      // NOT lesson.totalQuestions which may be out of sync with quiz data.
      const totalQ = (lesson.quizId && QUIZ_BANK[progressKey]?.length)
        || lesson.totalQuestions;
      const threshold  = totalQ > 0 ? unlockThreshold(totalQ) : Infinity;
      const isCompleted = effectiveCorrect >= threshold;

      console.log("[LessonPage] useMemo check:", {
        lessonId: lesson.lessonId,
        quizId: lesson.quizId,
        progressKey,
        effectiveCorrect,
        totalQFromLessons: lesson.totalQuestions,
        totalQFromBank: QUIZ_BANK[progressKey]?.length ?? "n/a",
        totalQUsed: totalQ,
        threshold,
        isCompleted,
        calculatedPct: totalQ > 0 ? effectiveCorrect / totalQ : 0,
      });

      let status: LessonStatus;
      if (totalQ === 0) {
        // Homework node — unlock sequentially, track completion via UserContext
        const hwProgress = userData?.getLessonProgress(progressKey);
        const hwCompleted = hwProgress?.isCompleted === true;
        if (hwCompleted) {
          status = "completed";
        } else if (!currentAssigned) {
          status = "current";
          currentAssigned = true;
        } else {
          status = "locked";
        }
      } else if (isCompleted) {
        status = "completed";
      } else if (!currentAssigned) {
        status = "current";
        currentAssigned = true;
      } else {
        status = "locked";
      }

      result.push({ ...lesson, progress: effectiveCorrect, status });
    }

    return result;
  }, [userData]);

  // Popup state: which lesson's popup is open
  const [popupLessonId, setPopupLessonId] = useState<number | null>(null);

  // Scroll-to-current state for the "Продолжить" button
  const [scrollToLessonId, setScrollToLessonId] = useState<number | null>(null);

  const handleContinue = useCallback(() => {
    const currentLesson = lessons.find(l => l.status === "current");
    if (currentLesson) {
      // If popup for this lesson is already open — close it (toggle)
      if (popupLessonId === currentLesson.id) {
        setPopupLessonId(null);
        return;
      }
      setScrollToLessonId(currentLesson.id);
    } else {
      const firstLesson = lessons[0];
      navigate(`/lesson-quiz?quizId=${encodeURIComponent(firstLesson?.quizId || "quiz_contrast")}&lessonId=${encodeURIComponent(firstLesson?.lessonId || "contrast-lesson")}`, { state: { lessonId: firstLesson?.lessonId || "contrast-lesson", quizId: firstLesson?.quizId || "quiz_contrast" } });
    }
  }, [lessons, navigate, popupLessonId]);

  const handleScrollComplete = useCallback(() => {
    setScrollToLessonId(null);
  }, []);

  return (
    <Layout
      title="Обучение"
      showBack={false}
      backPath="/courses"
      rightContent={<RightColumn onContinue={handleContinue} />}
      rightWidth="320px"
      mobileStickyBottom={
        isMobile ? <MobileContinueButton onClick={handleContinue} /> : undefined
      }
    >
      <RoadmapPanel
        lessons={lessons}
        popupLessonId={popupLessonId}
        onSelectLesson={setPopupLessonId}
        scrollToLessonId={scrollToLessonId}
        onScrollComplete={handleScrollComplete}
      />
    </Layout>
  );
}