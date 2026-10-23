import { getProfileDisplayName } from "../utils/profileDisplayName";
import { getQuizResult } from "../utils/learningProgress";
import { lazy, Suspense, useState, useMemo, useCallback, useEffect } from "react";
import Layout from "../components/Layout";
import RoadmapPanel from "../components/RoadmapPanel";
import { LESSONS, Lesson, LessonStatus } from "../data/lessons";
import { QUIZ_BANK } from "../data/quiz-bank";
import { useUserSafe } from "../context/UserContext";
import { useAuthSafe } from "../context/AuthContext";
import { useNavigate } from "react-router";
import { useWindowWidth } from "../hooks/useWindowWidth";
import { Zap } from "lucide-react";

// ── Threshold: unlock next lesson when >= 50% questions are answered correctly ──
// A lesson is completed when correctAnswers >= Math.ceil(totalQuestions * 0.5)
function unlockThreshold(totalQuestions: number): number {
  return Math.ceil(totalQuestions * 0.5);
}

// ── "Продолжить" button ──

function LightningButtonIcon() {
  return <Zap className="h-[32px] w-[22px] shrink-0 text-[#F7F8FC]" fill="currentColor" />;
}

function ContinueButton({ onClick, xpReward }: { onClick: () => void; xpReward: number }) {
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
      className="group relative cursor-pointer select-none outline-none rounded-[15px] bg-[#FF6B21] transition-transform duration-75 w-full hover:translate-y-[2px] active:translate-y-[6px]"
      style={{ height: 70 }}
    >
      <div
        aria-hidden="true"
        className="absolute border-[0.835px] border-[#FF7403] border-solid inset-0 pointer-events-none rounded-[15px] shadow-[0_6px_0_#C54A0A] group-hover:shadow-[0_4px_0_#C54A0A] group-active:shadow-none transition-shadow duration-75"
      />
      <div className="flex gap-[6.678px] items-center justify-center px-[25.835px] size-full">
        <LightningButtonIcon />
        <p className="font-['Roboto_Condensed:Medium',sans-serif] font-medium leading-[27.5px] text-[#f4f5fc] text-[26px] whitespace-nowrap">
          Продолжить
        </p>
      </div>
    </button>
  );
}

// ── Mobile sticky continue button ─────────────────────────────────────────────

function MobileContinueButton({ onClick, xpReward }: { onClick: () => void; xpReward: number }) {
  return (
    <button
      onClick={onClick}
      className="group relative w-full rounded-[13px] flex items-center justify-center gap-[8px] cursor-pointer select-none hover:translate-y-[2px] active:translate-y-[4px] transition-transform duration-75"
      style={{
        height: 52,
        background: "#FF6B21",
      }}
    >
      <div aria-hidden="true" className="absolute inset-0 rounded-[13px] pointer-events-none shadow-[0_4px_0_#C54A0A] group-hover:shadow-[0_2px_0_#C54A0A] group-active:shadow-none transition-shadow duration-75" />
      <Zap className="h-[24px] w-[17px] shrink-0 text-[#F7F8FC]" fill="currentColor" />
      <p className="font-['Roboto_Condensed:Medium',sans-serif] font-medium text-[#f4f5fc] text-[20px]">
        Продолжить
      </p>
    </button>
  );
}

// ── Right column: widgets + continue button ───────────────────────────────────

const LessonRightColumn = lazy(() => import("../components/LessonRightColumn"));

// ── Main page ────────────────────────────────────────────────────────────────

export default function LessonPage() {
  const userData = useUserSafe();
  const auth = useAuthSafe();
  const navigate = useNavigate();
  const vw = useWindowWidth();
  const isMobile = vw < 768;
  const userName = getProfileDisplayName(userData?.userName, auth?.isDemo ? null : auth?.email);

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
      const progressData = lesson.quizId ? getQuizResult(lesson.quizId, lesson.lessonId, userData?.user.lessonProgress ?? {}) : userData?.getLessonProgress(progressKey);
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


  // Popup state is reserved for manual roadmap navigation.
  const [popupLessonId, setPopupLessonId] = useState<number | null>(null);
  const currentLesson = lessons.find(l => l.status === "current") ?? lessons[0];
  const currentXpReward = currentLesson?.xpReward ?? 0;

  const handleContinue = useCallback(() => {
    if (!currentLesson) return;
    if (currentLesson.totalQuestions === 0) {
      navigate(`/homework?lessonId=${encodeURIComponent(currentLesson.lessonId)}`);
      return;
    }
    // The main CTA advances immediately into the next learning step; the roadmap
    // stays available for people who want to choose a node themselves.
    navigate(`/theory?lessonId=${encodeURIComponent(currentLesson.lessonId)}`, {
      state: { lessonId: currentLesson.lessonId, quizId: currentLesson.quizId },
    });
  }, [currentLesson, navigate]);

  const pageTitle = userName
    ? <>Привет, <span style={{ color: "#798589" }}>{userName}</span> 👋</>
    : "Обучение";

  return (
    <Layout
      title={pageTitle}
      bgColor="#282F33"
      showBack={false}
      backPath="/courses"
      rightContent={isMobile ? undefined : (
        <Suspense fallback={<ContinueButton onClick={handleContinue} xpReward={currentXpReward} />}>
          <LessonRightColumn onContinue={handleContinue} xpReward={currentXpReward} />
        </Suspense>
      )}
      rightWidth="320px"
      noTopPad
      mobileStickyBottom={
        isMobile ? <MobileContinueButton onClick={handleContinue} xpReward={currentXpReward} /> : undefined
      }
    >
      <RoadmapPanel
          loading={userData?.userLoading ?? true}
          lessons={lessons}
          popupLessonId={popupLessonId}
          onSelectLesson={setPopupLessonId}
        />
    </Layout>
  );
}
