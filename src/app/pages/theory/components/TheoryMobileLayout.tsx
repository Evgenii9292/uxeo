/**
 * TheoryMobileLayout - Full mobile layout for theory pages.
 * Extracted from TheoryPage.tsx to keep the page file thin.
 */

import React, { useRef, useState, useCallback } from "react";
import { useNavigate } from "react-router";
import svgPtPaths from "../../../../imports/svg-pt1cecsedx";
import FreeIconGift from "../../../../imports/FreeIconGift81465531";
import { FloatingCircle } from "../../../components/FloatingCircle";
import { MobileFloatingCircles } from "../../../components/MobileFloatingCircles";
import { TimeIcon, TheoryLevelIcon } from "../ui/Icons";
import { AccordionSectionMobile } from "./AccordionSection";
import { HeroImage } from "./TheoryShared";
import type { LessonContentData } from "../../../data/lesson-content";
import type { AccordionState } from "../useTheory";
import { LESSONS } from "../../../data/lessons";
import { MobileHeader } from "../../../components/MobileShell";
import BottomTabBar from "../../../components/BottomTabBar";

interface TheoryMobileLayoutProps {
  xp: number;
  streak: number;
  lessonData: LessonContentData;
  lessonId: string;
  mobileScrollRef: React.RefObject<HTMLDivElement>;
  mobileScrollY: number;
  setMobileScrollY: (y: number) => void;
  openSections: Set<number>;
  accordionStates: AccordionState[];
  isUnlocked: (index: number) => boolean;
  handleToggle: (index: number) => void;
  handleAnswerSelect: (index: number, answer: string, isCorrect: boolean) => void;
  handleContinue: (index: number) => void;
  showFeedbackModal: boolean;
  setShowFeedbackModal: (show: boolean) => void;
  feedbackRating: number;
  setFeedbackRating: (rating: number) => void;
  feedbackText: string;
  setFeedbackText: (text: string) => void;
}

export function TheoryMobileLayout({
  xp,
  streak,
  lessonData,
  lessonId,
  mobileScrollRef,
  mobileScrollY,
  setMobileScrollY,
  openSections,
  accordionStates,
  isUnlocked,
  handleToggle,
  handleAnswerSelect,
  handleContinue,
  showFeedbackModal,
  setShowFeedbackModal,
  feedbackRating,
  setFeedbackRating,
  feedbackText,
  setFeedbackText,
}: TheoryMobileLayoutProps) {
  const navigate = useNavigate();

  // Hide-on-scroll for tab bar
  const [tabBarVisible, setTabBarVisible] = useState(true);
  const lastScrollY = useRef(0);
  const handleScroll = useCallback(() => {
    const currentY = mobileScrollRef.current?.scrollTop ?? 0;
    const delta = currentY - lastScrollY.current;
    if (Math.abs(delta) > 4) {
      setTabBarVisible(delta < 0 || currentY < 10);
      lastScrollY.current = currentY;
    }
    setMobileScrollY(currentY);
  }, [mobileScrollRef, setMobileScrollY]);

  return (
    <div
      className="theory-page fixed inset-0 flex flex-col overflow-hidden"
      style={{ background: "#2D363A" }}
    >
      {/* ── Sticky Header (shared MobileHeader) ── */}
      <MobileHeader
        title="Теория"
        showBack
        onBack={() => navigate("/lessons")}
        xp={xp}
        streak={streak}
      />

      {/* ── Scrollable Content ── */}
      <div
        ref={mobileScrollRef}
        className="flex-1 overflow-y-auto scrollbar-hide"
        style={{ paddingBottom: (tabBarVisible ? 52 : 0) + 72 + 16 }}
        onScroll={handleScroll}
      >
        {/* Hero parallax */}
        <div className="relative overflow-hidden" style={{ height: '280px' }}>
          <div className="absolute inset-0" style={{ transform: `translateY(${mobileScrollY * 0.3}px)` }}>
            <HeroImage />
          </div>
          <div className="absolute bottom-0 left-0 right-0 h-[80px]"
            style={{ background: 'linear-gradient(to top, rgb(45,54,58), transparent)' }} />
        </div>

        {/* Title + meta */}
        <div className="px-[16px] pb-[16px] relative z-10" style={{ marginTop: '-30px' }}>
          <div className="flex items-end justify-between gap-[10px]">
            <p className="font-['Roboto_Condensed:Medium',sans-serif] font-medium leading-[27.5px] text-[#f4f5fc] text-[28px]">
              {lessonData.title}
            </p>
            <div className="flex gap-[12px] items-center shrink-0 pb-[2px]">
              <div className="flex gap-[5px] items-center">
                <TimeIcon />
                <p className="font-['Roboto_Condensed:Medium',sans-serif] font-medium leading-[20px] text-[#f1f7fb] text-[16px]">{lessonData.duration}</p>
              </div>
              {lessonData.level && (
                <div className="flex gap-[5px] items-center">
                  <TheoryLevelIcon />
                  <p className="font-['Roboto_Condensed:Medium',sans-serif] font-medium leading-[20px] text-[#f1f7fb] text-[16px]">{lessonData.level}</p>
                </div>
              )}
            </div>
          </div>
        </div>

        {/* Accordion sections */}
        <div className="px-[16px] flex flex-col gap-[13px] pb-[20px]">
          {lessonData.sections.map((section, index) => (
            <AccordionSectionMobile
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

      {/* ── Sticky CTA — fixed, above tab bar ── */}
      <div
        className="fixed left-0 right-0 z-30 px-[16px] transition-[bottom] duration-300"
        style={{
          bottom: tabBarVisible ? 52 : 0,
          paddingBottom: "max(10px, env(safe-area-inset-bottom, 10px))",
          paddingTop: 10,
        }}
      >
        <button
          onClick={() => {
            const quizId = LESSONS.find(l => l.lessonId === lessonId)?.quizId || lessonId;
            navigate(`/lesson-quiz?quizId=${encodeURIComponent(quizId)}&lessonId=${encodeURIComponent(lessonId)}`, { state: { lessonId, quizId } });
          }}
          className="w-full rounded-[13px] flex items-center justify-center gap-[8px] cursor-pointer select-none active:translate-y-[3px] transition-transform duration-75"
          style={{
            height: 52,
            background: "#FF5D39",
            boxShadow: "0 4px 0 #b83a1f",
          }}
        >
          <p className="font-['Roboto_Condensed:Bold',sans-serif] font-bold text-[#f4f5fc] text-[20px]">Начать квиз</p>
          <div className="bg-black/20 flex h-[24px] items-center justify-center px-[10px] rounded-full">
            <p className="font-['Inter:Semi_Bold',sans-serif] font-semibold text-[#eef5ff] text-[10px]">+125 XP</p>
          </div>
        </button>
      </div>

      {/* ── Bottom Navigation — FIXED with translateY (no layout reflow = no bounce) ── */}
      <div
        className="fixed left-0 right-0 z-20 transition-transform duration-300"
        style={{
          bottom: 0,
          transform: tabBarVisible ? "translateY(0)" : "translateY(100%)",
        }}
      >
        <BottomTabBar />
      </div>

      {/* ── Floating circles ── */}
      <MobileFloatingCircles tabBarVisible={tabBarVisible} hasStickyButton />

      {/* ── Feedback Modal ── */}
      {showFeedbackModal && (
        <div className="absolute inset-0 z-[100] flex items-end">
          <div className="absolute inset-0 bg-black/60" onClick={() => setShowFeedbackModal(false)} />
          <div
            className="relative w-full flex flex-col gap-[18px] p-[24px] pb-[36px]"
            style={{ background: '#2C3438', borderRadius: '24px 24px 0 0', maxHeight: '80vh', overflowY: 'auto' }}
          >
            <div className="flex items-center justify-between">
              <p className="font-['Roboto_Condensed:Bold',sans-serif] font-bold text-[#f4f5fc] text-[22px]">Обратная связь</p>
              <button onClick={() => setShowFeedbackModal(false)} className="text-[#798589] active:scale-90 transition-transform">
                <svg width="24" height="24" viewBox="0 0 24 24" fill="none"><path d="M18 6L6 18M6 6L18 18" stroke="currentColor" strokeWidth="2" strokeLinecap="round"/></svg>
              </button>
            </div>
            {/* Rating */}
            <div className="flex flex-col gap-[10px]">
              <p className="font-['Roboto_Condensed:Medium',sans-serif] font-medium text-[#f1f2fb] text-[16px]">Насколько вам нравится приложение?</p>
              <div className="flex gap-[8px]">
                {[1,2,3,4,5].map(n => (
                  <button key={n} onClick={() => setFeedbackRating(n)}
                    className="flex-1 h-[44px] rounded-[12px] flex items-center justify-center transition-all active:scale-90"
                    style={{ background: feedbackRating >= n ? '#FF6B21' : '#374348', border: feedbackRating >= n ? 'none' : '1px solid #4B595E' }}>
                    <span className="font-['Roboto_Condensed:Bold',sans-serif] font-bold text-[#f1f2fb] text-[18px]">{n}</span>
                  </button>
                ))}
              </div>
            </div>
            {/* What was uncomfortable */}
            <div className="flex flex-col gap-[8px]">
              <p className="font-['Roboto_Condensed:Medium',sans-serif] font-medium text-[#f1f2fb] text-[16px]">Что было неудобно или можно улучшить?</p>
              <textarea
                value={feedbackText}
                onChange={e => setFeedbackText(e.target.value)}
                placeholder="Напишите здесь..."
                rows={3}
                className="w-full rounded-[12px] px-[14px] py-[10px] text-[#f1f2fb] resize-none"
                style={{ background: '#374348', border: '1px solid #4B595E', outline: 'none', fontFamily: 'Roboto Condensed, sans-serif', fontSize: '15px', lineHeight: '1.4' }}
              />
            </div>
            {/* Submit button — volumetric like challenges */}
            <div
              className="group relative cursor-pointer select-none w-full rounded-[13px] hover:translate-y-[2px] active:translate-y-[4px] transition-transform duration-75"
              style={{ height: 52 }}
              onClick={() => { setShowFeedbackModal(false); setFeedbackRating(0); setFeedbackText(""); }}
            >
              <div aria-hidden="true" className="absolute border border-[#FF6B21]/40 border-solid inset-0 pointer-events-none rounded-[13px] shadow-[0px_4px_0px_0px_#1B2428] group-hover:shadow-[0px_2px_0px_0px_#1B2428] group-active:shadow-none transition-shadow duration-75" />
              <div className="flex items-center justify-center size-full gap-[8px]" style={{ background: '#1B2428', borderRadius: 13 }}>
                <span style={{ fontSize: 18 }}>🎁</span>
                <p className="font-['Roboto_Condensed:Bold',sans-serif] font-bold text-[#f4f5fc] text-[18px]">Отправить отзыв</p>
              </div>
            </div>
          </div>
        </div>
      )}
    </div>
  );
}