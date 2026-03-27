import { useState, useEffect, useRef } from "react";
import { useLocation, useNavigate } from "react-router";
import { useUserSafe, type LessonProgress } from "../../context/UserContext";
import { LESSONS } from "../../data/lessons";

export interface AccordionState {
  selectedAnswer: string | null;
  showFeedback: boolean;
  completed: boolean;
  hasIncorrectAnswer: boolean;
}

export function useTheory(isMobile: boolean, lessonId?: string, totalSections: number = 5) {
  const location = useLocation();
  const navigate = useNavigate();
  const userCtx = useUserSafe();
  const updateQuestionState = userCtx?.updateQuestionState ?? (() => ({ xpEarned: 0 }));
  const getLessonProgress = userCtx?.getLessonProgress ?? ((id: string): LessonProgress => ({
    lessonId: id,
    totalTasks: 5,
    questions: {},
    isCompleted: false,
    correctAnswers: 0,
  }));

  const scrollRef = useRef<HTMLDivElement>(null);
  const mobileScrollRef = useRef<HTMLDivElement>(null);
  const syncedLessonKeyRef = useRef<string | null>(null);
  const [desktopScrollY, setDesktopScrollY] = useState(0);
  const [mobileScrollY, setMobileScrollY] = useState(0);

  // Helper: find the scroll container from an element
  const findScrollContainer = (el: HTMLElement): HTMLElement | null => {
    // On mobile use the mobileScrollRef directly
    if (isMobile) return mobileScrollRef.current;
    // On desktop find the nearest overflow-y-auto ancestor (Layout's scroll container)
    return el.closest('.overflow-y-auto') as HTMLElement | null;
  };

  // Multi-open accordion state
  const [openSections, setOpenSections] = useState<Set<number>>(() => new Set([0]));

  // Resolve lessonId: from prop → from location.state → pathname fallback
  const resolvedLessonId = lessonId
    || (location.state as any)?.lessonId
    || (location.pathname === "/contrast" ? "contrast-lesson" : "color-lesson");

  // Use per-lesson localStorage key so different lessons don't share state
  const storageKey = `theory-max-reached-${resolvedLessonId}`;

  // Load lesson progress using the resolved lessonId
  const progress = getLessonProgress(resolvedLessonId);

  const lastSectionIndex = totalSections - 1;

  // Persist max reached section (per-lesson)
  const [maxReached, setMaxReached] = useState<number>(() => {
    try {
      const stored = localStorage.getItem(storageKey);
      if (stored !== null) return parseInt(stored, 10) || 0;
    } catch {}
    // Fallback: derive from UserContext
    for (let i = lastSectionIndex; i >= 0; i--) {
      const qs = progress.questions[`mini-quiz-${i}`];
      if (qs?.correct) return i;
    }
    return 0;
  });

  const [accordionStates, setAccordionStates] = useState<AccordionState[]>(() => {
    return Array.from({ length: totalSections }, (_, index) => {
      const quizId = `mini-quiz-${index}`;
      const questionState = progress.questions[quizId];
      if (questionState && questionState.correct) {
        return { selectedAnswer: "right", showFeedback: true, completed: true, hasIncorrectAnswer: false };
      }
      return { selectedAnswer: null, showFeedback: false, completed: false, hasIncorrectAnswer: false };
    });
  });

  useEffect(() => {
    const syncKey = `${resolvedLessonId}:${userCtx?.user?.id ?? "guest"}`;
    if (syncedLessonKeyRef.current === syncKey) return;
    syncedLessonKeyRef.current = syncKey;

    const nextProgress = getLessonProgress(resolvedLessonId);

    let nextMaxReached = 0;
    try {
      const stored = localStorage.getItem(storageKey);
      if (stored !== null) {
        nextMaxReached = parseInt(stored, 10) || 0;
      } else {
        for (let i = lastSectionIndex; i >= 0; i--) {
          const qs = nextProgress.questions[`mini-quiz-${i}`];
          if (qs?.correct) {
            nextMaxReached = i;
            break;
          }
        }
      }
    } catch {
      for (let i = lastSectionIndex; i >= 0; i--) {
        const qs = nextProgress.questions[`mini-quiz-${i}`];
        if (qs?.correct) {
          nextMaxReached = i;
          break;
        }
      }
    }

    setMaxReached(nextMaxReached);
    setOpenSections(new Set([0]));
    setAccordionStates(
      Array.from({ length: totalSections }, (_, index) => {
        const quizId = `mini-quiz-${index}`;
        const questionState = nextProgress.questions[quizId];
        if (questionState?.correct) {
          return {
            selectedAnswer: "right",
            showFeedback: true,
            completed: true,
            hasIncorrectAnswer: false,
          };
        }
        return {
          selectedAnswer: null,
          showFeedback: false,
          completed: false,
          hasIncorrectAnswer: false,
        };
      }),
    );
  }, [resolvedLessonId, storageKey, totalSections, lastSectionIndex, userCtx?.user?.id]);

  const isUnlocked = (i: number): boolean => i <= maxReached;

  // Handle URL section parameter
  useEffect(() => {
    const queryParams = new URLSearchParams(location.search);
    const sectionParam = queryParams.get("section");
    if (sectionParam) {
      const sectionIndex = parseInt(sectionParam, 10);
      if (!isNaN(sectionIndex) && sectionIndex >= 0 && sectionIndex < totalSections) {
        setOpenSections(prev => new Set([...prev, sectionIndex]));
      }
    }
  }, [location]);

  const handleToggle = (index: number) => {
    if (!isUnlocked(index)) return;
    const isCurrentlyOpen = openSections.has(index);

    if (!isCurrentlyOpen) {
      setOpenSections(prev => { const next = new Set(prev); next.add(index); return next; });
      setTimeout(() => {
        const headerEl = document.querySelector(`[data-section="${index}"]`) as HTMLElement | null;
        if (!headerEl) return;
        const sc = findScrollContainer(headerEl);
        if (!sc) return;
        const OFFSET = 80;
        const containerRect = sc.getBoundingClientRect();
        const elRect = headerEl.getBoundingClientRect();
        const targetScroll = sc.scrollTop + (elRect.top - containerRect.top) - OFFSET;
        sc.scrollTo({ top: Math.max(0, targetScroll), behavior: 'smooth' });
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

  const handleAnswerSelect = (sectionIndex: number, answer: string, isCorrect: boolean) => {
    const newStates = [...accordionStates];
    newStates[sectionIndex] = { 
      selectedAnswer: answer, 
      showFeedback: true, 
      completed: isCorrect,
      hasIncorrectAnswer: !isCorrect || newStates[sectionIndex].hasIncorrectAnswer
    };
    setAccordionStates(newStates);

    const nextToUnlock = Math.min(sectionIndex + 1, lastSectionIndex);
    if (nextToUnlock > maxReached) {
      setMaxReached(nextToUnlock);
      try { localStorage.setItem(storageKey, String(nextToUnlock)); } catch {}
    }

    // Scroll further so feedback and the Continue button are immediately visible.
    requestAnimationFrame(() => {
      requestAnimationFrame(() => {
        const sectionEl = document.querySelector(`[data-section="${sectionIndex}"]`) as HTMLElement | null;
        if (!sectionEl) return;
        const sc = findScrollContainer(sectionEl);
        if (!sc) return;
        sc.scrollBy({ top: isMobile ? 145 : 190, behavior: 'smooth' });
      });
    });

    if (isCorrect) {
      updateQuestionState(resolvedLessonId, `mini-quiz-${sectionIndex}`, true, 15);
    }

    // Sound feedback
    try {
      const ctx = new AudioContext();
      const o = ctx.createOscillator();
      const g = ctx.createGain();
      o.type = "sine";
      if (isCorrect) {
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
    if (sectionIndex === lastSectionIndex) {
      // Last section — navigate to quiz with correct lessonId and quizId
      const container = isMobile ? mobileScrollRef.current : null;
      if (container) container.scrollTop = 0;
      const quizId = LESSONS.find(l => l.lessonId === resolvedLessonId)?.quizId || resolvedLessonId;
      navigate(`/lesson-quiz?quizId=${encodeURIComponent(quizId)}&lessonId=${encodeURIComponent(resolvedLessonId)}`, { state: { lessonId: resolvedLessonId, quizId } });
      return;
    }

    const nextSection = sectionIndex + 1;
    if (nextSection > maxReached) {
      setMaxReached(nextSection);
      try { localStorage.setItem(storageKey, String(nextSection)); } catch {}
    }

    setOpenSections(prev => new Set([...prev, nextSection]));

    // Wait for accordion animation to finish (~300ms) then scroll to next section
    setTimeout(() => {
      const nextEl = document.querySelector(`[data-section="${nextSection}"]`) as HTMLElement | null;
      if (!nextEl) return;
      const sc = findScrollContainer(nextEl);
      if (!sc) return;
      const OFFSET = 80;
      const containerRect = sc.getBoundingClientRect();
      const elRect = nextEl.getBoundingClientRect();
      const targetScroll = sc.scrollTop + (elRect.top - containerRect.top) - OFFSET;
      sc.scrollTo({ top: Math.max(0, targetScroll), behavior: 'smooth' });
    }, 320);
  };

  return {
    scrollRef,
    mobileScrollRef,
    desktopScrollY,
    mobileScrollY,
    completedSectionsCount: accordionStates.filter((state) => state.completed).length,
    totalSections,
    setDesktopScrollY,
    setMobileScrollY,
    openSections,
    accordionStates,
    isUnlocked,
    handleToggle,
    handleAnswerSelect,
    handleContinue,
  };
}
