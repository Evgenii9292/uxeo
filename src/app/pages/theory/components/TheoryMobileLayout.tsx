/**
 * TheoryMobileLayout - Full mobile layout for theory pages.
 * Extracted from TheoryPage.tsx to keep the page file thin.
 */

import React, { useRef, useState, useCallback, useEffect } from "react";
import { useNavigate } from "react-router";
import svgPtPaths from "../../../../imports/svg-pt1cecsedx";
import { MobileFloatingCircles } from "../../../components/MobileFloatingCircles";
import { TimeIcon, TheoryLevelIcon } from "../ui/Icons";
import { AccordionSectionMobile } from "./AccordionSection";
import { getLessonIcon } from "../../../data/lesson-icons";
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
  completedSectionsCount: number;
  totalSections: number;
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
  completedSectionsCount,
  totalSections,
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

  // Fade-in on mount
  const [visible, setVisible] = useState(false);
  useEffect(() => {
    const id = requestAnimationFrame(() => setVisible(true));
    return () => cancelAnimationFrame(id);
  }, []);

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
      style={{ background: "#282F33", opacity: visible ? 1 : 0, transition: "opacity 0.25s ease" }}
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
        style={{
          paddingBottom: "calc(74px + env(safe-area-inset-bottom, 0px))",
          overscrollBehavior: "contain",
        }}
        onScroll={handleScroll}
      >
        {/* Hero icon — no bg, centered */}
        <div className="flex items-center justify-center" style={{ height: '200px' }}>
          <div className="relative flex items-center justify-center" style={{ width: 128, height: 128 }}>
            <img
              src={getLessonIcon(lessonId)}
              alt=""
              style={{ width: 104, height: 104, objectFit: "contain", filter: "brightness(0) invert(1)", maskImage: "linear-gradient(to bottom, black 0%, rgba(0,0,0,0.3) 100%)", WebkitMaskImage: "linear-gradient(to bottom, black 0%, rgba(0,0,0,0.3) 100%)", transform: `translateY(${mobileScrollY * 0.25}px)`, opacity: Math.max(0.5, 1 - mobileScrollY / 180), willChange: "transform, opacity", willChange: "transform, opacity", position: "relative", zIndex: 1 }}
            />
          </div>
        </div>

        {/* Title + meta */}
        <div className="px-[16px] pb-[16px]">
          <div className="flex items-end justify-between gap-[10px]">
            <p className="font-['Roboto_Condensed:Medium',sans-serif] font-medium leading-[27.5px] text-[#f4f5fc] text-[28px]">
              {lessonData.title}
            </p>
            <div className="flex flex-col items-end gap-[10px] shrink-0 pb-[4px]">
              <div className="flex gap-[5px] items-center">
                <TimeIcon />
                <p className="font-['Roboto_Condensed:Medium',sans-serif] font-medium leading-[20px] text-[#f1f7fb] text-[16px]">{lessonData.duration}</p>
              </div>
              <div
                className="flex items-center gap-[6px] h-[24px] px-[9px] rounded-full"
                style={{ background: "#404D52" }}
              >
                <p className="font-['Roboto_Condensed:Medium',sans-serif] font-medium leading-none text-[#798589] text-[11px] whitespace-nowrap">
                  Микроквизы
                </p>
                {completedSectionsCount === totalSections ? (
                  <div className="flex items-center justify-center w-[16px] h-[16px] rounded-full bg-[#00d043]">
                    <svg width="9" height="7" viewBox="0 0 9 7" fill="none">
                      <path d="M1 3.5L3.5 6L8 1" stroke="white" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"/>
                    </svg>
                  </div>
                ) : (
                  <p className="font-['Roboto_Condensed:Medium',sans-serif] font-medium leading-none text-[#F1F2FB] text-[11px] whitespace-nowrap">
                    {completedSectionsCount}/{totalSections}
                  </p>
                )}
              </div>
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
              isLastSection={index === lessonData.sections.length - 1}
            />
          ))}
        </div>
      </div>

      {/* ── Floating quiz CTA — round button at bottom-right ── */}
      {/* Hide when last section is open (quiz cards visible there) */}
      <button
        onClick={() => {
          const quizId = LESSONS.find(l => l.lessonId === lessonId)?.quizId || lessonId;
          navigate(`/lesson-quiz?quizId=${encodeURIComponent(quizId)}&lessonId=${encodeURIComponent(lessonId)}`, { state: { lessonId, quizId } });
        }}
        className="fixed right-[16px] z-30 rounded-full flex items-center justify-center cursor-pointer select-none transition-transform duration-75 active:translate-y-[2px]"
        style={{
          width: 62,
          height: 62,
          bottom: tabBarVisible
            ? "calc(67px + max(12px, env(safe-area-inset-bottom, 12px)))"
            : "max(12px, env(safe-area-inset-bottom, 12px))",
          background: "#FF6B21",
          boxShadow: "0 4px 0 #C54A0A",
          opacity: openSections.has(lessonData.sections.length - 1) ? 0 : 1,
          pointerEvents: openSections.has(lessonData.sections.length - 1) ? "none" : "auto",
          transition: "opacity 0.25s ease, transform 75ms",
        }}
        aria-label="Начать квиз"
      >
        <svg width="24" height="24" viewBox="0 0 24 24" fill="none" aria-hidden="true">
          <path d="M8 6.75L17.25 12L8 17.25V6.75Z" fill="#F4F5FC" />
        </svg>
      </button>

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
      <MobileFloatingCircles tabBarVisible={tabBarVisible} />

      {/* ── Feedback Modal ── */}
      {showFeedbackModal && (
        <div className="absolute inset-0 z-[100] flex items-end">
          <div className="absolute inset-0 bg-black/60" onClick={() => setShowFeedbackModal(false)} />
          <div
            className="relative w-full flex flex-col gap-[18px] p-[24px] pb-[36px]"
            style={{ background: '#2C3438', borderRadius: '24px 24px 0 0', maxHeight: '80vh', overflowY: 'auto' }}
          >
            <div className="flex items-center justify-between">
              <p className="font-['Roboto_Condensed:Medium',sans-serif] font-medium text-[#f4f5fc] text-[22px]">Обратная связь</p>
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
                    className="flex-1 h-[44px] rounded-[12px] flex items-center justify-center cursor-pointer select-none transition-all duration-75"
                    style={{
                      background: feedbackRating >= n ? '#FF6B21' : '#374348',
                      border: feedbackRating >= n ? 'none' : '1px solid #4B595E',
                      boxShadow: feedbackRating >= n ? '0 3px 0 #C54A0A' : '0 3px 0 #1D292D',
                    }}
                    onMouseEnter={e => { e.currentTarget.style.transform = 'translateY(1px)'; }}
                    onMouseLeave={e => { e.currentTarget.style.transform = ''; }}
                    onMouseDown={e => { e.currentTarget.style.transform = 'translateY(3px)'; e.currentTarget.style.boxShadow = 'none'; }}
                    onMouseUp={e => { e.currentTarget.style.transform = 'translateY(1px)'; e.currentTarget.style.boxShadow = feedbackRating >= n ? '0 2px 0 #C54A0A' : '0 2px 0 #1D292D'; }}
                    onTouchStart={e => { e.currentTarget.style.transform = 'translateY(3px)'; e.currentTarget.style.boxShadow = 'none'; }}
                    onTouchEnd={e => { e.currentTarget.style.transform = ''; e.currentTarget.style.boxShadow = feedbackRating >= n ? '0 3px 0 #C54A0A' : '0 3px 0 #1D292D'; }}
                  >
                    <span className="font-['Roboto_Condensed:Medium',sans-serif] font-medium text-[#f1f2fb] text-[18px]">{n}</span>
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
                <p className="font-['Roboto_Condensed:Medium',sans-serif] font-medium text-[#f4f5fc] text-[18px]">Отправить отзыв</p>
              </div>
            </div>
          </div>
        </div>
      )}
    </div>
  );
}
