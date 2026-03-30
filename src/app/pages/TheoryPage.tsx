import { useState, useRef, useEffect } from "react";
import { useLocation } from "react-router";
import Layout from "../components/Layout";
import RightWidgets from "../components/RightWidgets";
import { useUserSafe } from "../context/UserContext";
import { useWindowWidth } from "../hooks/useWindowWidth";
import type { LessonContentData } from "../data/lesson-content";
import { TimeIcon, TheoryLevelIcon } from "./theory/ui/Icons";
import { AccordionSectionDesktop } from "./theory/components/AccordionSection";
import { useTheory } from "./theory/useTheory";
import { getLessonIcon } from "../data/lesson-icons";
import { TheoryMobileLayout } from "./theory/components/TheoryMobileLayout";

export default function TheoryPage() {
  const location = useLocation();
  const userCtx = useUserSafe();

  // Read lessonId from URL search params first (most reliable), then state, then fallback
  const searchParams = new URLSearchParams(location.search);
  const lessonId = searchParams.get("lessonId")
    || (location.state as any)?.lessonId
    || (location.pathname === "/contrast" ? "contrast-lesson" : "color-lesson");

  // Lazy-load lesson content — lesson-content.tsx is a separate chunk
  const [lessonData, setLessonData] = useState<LessonContentData | null>(null);
  useEffect(() => {
    import("../data/lesson-content").then(mod => {
      setLessonData(mod.LESSON_CONTENT[lessonId] || mod.LESSON_CONTENT["color-lesson"]);
    });
  }, [lessonId]);

  const vw = useWindowWidth();
  const isMobile = vw < 768;

  const [showFeedbackModal, setShowFeedbackModal] = useState(false);
  const [feedbackRating, setFeedbackRating] = useState(0);
  const [feedbackText, setFeedbackText] = useState("");

  // All hooks must be called unconditionally
  const heroRef = useRef<HTMLDivElement>(null);
  const [scrollY, setScrollY] = useState(0);
  useEffect(() => {
    if (isMobile) return;
    const el = heroRef.current?.closest(".overflow-y-auto") as HTMLElement | null;
    if (!el) return;
    const onScroll = () => setScrollY(el.scrollTop);
    el.addEventListener("scroll", onScroll, { passive: true });
    return () => el.removeEventListener("scroll", onScroll);
  }, [isMobile]);

  const {
    mobileScrollRef,
    mobileScrollY,
    completedSectionsCount,
    totalSections,
    setMobileScrollY,
    openSections,
    accordionStates,
    isUnlocked,
    handleToggle,
    handleAnswerSelect,
    handleContinue,
  } = useTheory(isMobile, lessonId, lessonData?.sections.length ?? 5);

  // Loading state — dark background matches app theme, no flash
  if (!lessonData) {
    return <div style={{ height: "100%", background: "#282F33" }} />;
  }

  const shift   = scrollY * 0.25;

  if (isMobile) {
    return (
      <TheoryMobileLayout
        key={lessonId}
        xp={userCtx?.xp ?? 0}
        streak={userCtx?.streak ?? 0}
        lessonData={lessonData}
        lessonId={lessonId}
        mobileScrollRef={mobileScrollRef}
        mobileScrollY={mobileScrollY}
        completedSectionsCount={completedSectionsCount}
        totalSections={totalSections}
        setMobileScrollY={setMobileScrollY}
        openSections={openSections}
        accordionStates={accordionStates}
        isUnlocked={isUnlocked}
        handleToggle={handleToggle}
        handleAnswerSelect={handleAnswerSelect}
        handleContinue={handleContinue}
        showFeedbackModal={showFeedbackModal}
        setShowFeedbackModal={setShowFeedbackModal}
        feedbackRating={feedbackRating}
        setFeedbackRating={setFeedbackRating}
        feedbackText={feedbackText}
        setFeedbackText={setFeedbackText}
      />
    );
  }

  return (
    <div key={lessonId} className="theory-page size-full">
      <Layout title="Теория" showBack backPath="/lessons" rightContent={<RightWidgets />} leftWidth="660px" rightWidth="320px">
        <div className="flex flex-col gap-[20px] w-full">
          {/* Hero — icon centered, no bg, parallax */}
          <div ref={heroRef} className="flex flex-col items-center gap-[20px] w-full py-[10px]">
            <div className="relative flex items-center justify-center" style={{ width: 160, height: 160 }}>
              <img src={getLessonIcon(lessonId)} alt="" style={{ width: 128, height: 128, objectFit: "contain", filter: "brightness(0) invert(1)", maskImage: "linear-gradient(to bottom, black 0%, rgba(0,0,0,0.3) 100%)", WebkitMaskImage: "linear-gradient(to bottom, black 0%, rgba(0,0,0,0.3) 100%)", transform: `translateY(${shift}px)`, opacity: Math.max(0.5, 1 - scrollY / 180), willChange: "transform, opacity", position: "relative", zIndex: 1 }} />
            </div>
            <div className="flex items-end justify-between w-full">
              <p className="font-['Roboto_Condensed:Medium',sans-serif] font-medium leading-[35px] text-[#f4f5fc] text-[32px]">
                {lessonData.title}
              </p>
              <div className="flex items-center gap-[8px] shrink-0">
                <div className="flex gap-[5px] items-center">
                  <TimeIcon />
                  <p className="font-['Roboto_Condensed:Medium',sans-serif] font-medium leading-[20px] text-[#f1f2fb] text-[16px] whitespace-nowrap">{lessonData.duration}</p>
                </div>
                <div
                  className="flex items-center gap-[6px] h-[28px] px-[10px] rounded-full"
                  style={{ background: "#404D52" }}
                >
                  <p className="font-['Roboto_Condensed:Medium',sans-serif] font-medium leading-none text-[#798589] text-[13px] whitespace-nowrap">
                    Микроквизы
                  </p>
                  {completedSectionsCount === totalSections ? (
                    <div className="flex items-center justify-center w-[18px] h-[18px] rounded-full bg-[#00d043]">
                      <svg width="10" height="8" viewBox="0 0 10 8" fill="none">
                        <path d="M1 4L3.5 6.5L9 1" stroke="white" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"/>
                      </svg>
                    </div>
                  ) : (
                    <p className="font-['Roboto_Condensed:Medium',sans-serif] font-medium leading-none text-[#F1F2FB] text-[13px] whitespace-nowrap">
                      {completedSectionsCount}/{totalSections}
                    </p>
                  )}
                </div>
              </div>
            </div>
          </div>

          {/* Accordions */}
          <div className="content-stretch flex flex-col gap-[13px] items-center relative shrink-0 w-full">
            {lessonData.sections.map((section, index) => (
              <AccordionSectionDesktop
                key={index}
                sectionIndex={index}
                section={section}
                isOpen={openSections.has(index)}
                isUnlocked={isUnlocked(index)}
                state={accordionStates[index] ?? { selectedAnswer: null, showFeedback: false, completed: false, hasIncorrectAnswer: false }}
                onToggle={() => handleToggle(index)}
                onAnswerSelect={(answer, isCorrect) => handleAnswerSelect(index, answer, isCorrect)}
                onContinue={() => handleContinue(index)}
                isLastSection={index === lessonData.sections.length - 1}
              />
            ))}
          </div>
        </div>
      </Layout>
    </div>
  );
}
