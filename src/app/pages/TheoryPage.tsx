import { useState } from "react";
import { useLocation } from "react-router";
import Layout from "../components/Layout";
import RightWidgets from "../components/RightWidgets";
import { useUserSafe } from "../context/UserContext";
import { useWindowWidth } from "../hooks/useWindowWidth";
import { LESSON_CONTENT, type LessonContentData } from "../data/lesson-content";
import { TimeIcon, TheoryLevelIcon } from "./theory/ui/Icons";
import { AccordionSectionDesktop } from "./theory/components/AccordionSection";
import { useTheory } from "./theory/useTheory";
import { HeroImage } from "./theory/components/TheoryShared";
import { TheoryMobileLayout } from "./theory/components/TheoryMobileLayout";

export default function TheoryPage() {
  const location = useLocation();
  const userCtx = useUserSafe();

  // Read lessonId from URL search params first (most reliable), then state, then fallback
  const searchParams = new URLSearchParams(location.search);
  const lessonId = searchParams.get("lessonId")
    || (location.state as any)?.lessonId
    || (location.pathname === "/contrast" ? "contrast-lesson" : "color-lesson");
  const lessonData: LessonContentData = LESSON_CONTENT[lessonId] || LESSON_CONTENT["color-lesson"];

  const vw = useWindowWidth();
  const isMobile = vw < 768;

  const [showFeedbackModal, setShowFeedbackModal] = useState(false);
  const [feedbackRating, setFeedbackRating] = useState(0);
  const [feedbackText, setFeedbackText] = useState("");

  const {
    mobileScrollRef,
    mobileScrollY,
    setMobileScrollY,
    openSections,
    accordionStates,
    isUnlocked,
    handleToggle,
    handleAnswerSelect,
    handleContinue,
  } = useTheory(isMobile, lessonId, lessonData.sections.length);

  if (isMobile) {
    return (
      <TheoryMobileLayout
        xp={userCtx?.xp ?? 0}
        streak={userCtx?.streak ?? 0}
        lessonData={lessonData}
        lessonId={lessonId}
        mobileScrollRef={mobileScrollRef}
        mobileScrollY={mobileScrollY}
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
    <div className="theory-page size-full">
      <Layout title={lessonData.title.split(' ')[0]} showBack backPath="/lessons" rightContent={<RightWidgets />} leftWidth="660px" rightWidth="320px">
        <div className="flex flex-col gap-[20px] w-full">
          {/* Hero block */}
          <div className="w-full flex flex-col gap-[14px]">
            <div className="rounded-[15px] overflow-hidden relative" style={{ height: '220px' }}>
              <div className="absolute inset-0">
                <HeroImage />
              </div>
            </div>
            <div className="flex items-center justify-between gap-[12px]">
              <p className="font-['Roboto_Condensed:Medium',sans-serif] font-medium leading-[27.5px] text-[#f4f5fc] text-[28px]">
                {lessonData.title}
              </p>
              <div className="flex gap-[16px] items-center shrink-0">
                <div className="flex gap-[5px] items-center">
                  <TimeIcon />
                  <p className="font-['Roboto_Condensed:Medium',sans-serif] font-medium leading-[20px] text-[#f1f2fb] text-[16px] whitespace-nowrap">{lessonData.duration}</p>
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
              />
            ))}
          </div>
        </div>
      </Layout>
    </div>
  );
}