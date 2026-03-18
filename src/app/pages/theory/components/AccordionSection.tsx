/**
 * AccordionSection - Reusable accordion section component
 * 
 * Renders a single theory lesson accordion with content and quiz.
 * Used by TheoryPage to display lesson sections dynamically.
 */

import React from "react";
import type { AccordionSection as AccordionSectionData } from "../../../data/lesson-content";
import { GreenIndicator, GrayIndicator, OrangeIndicator } from "../ui/Indicators";
import { ChevronIcon, RedCardIcon, SparkleIcon } from "../ui/Icons";
import { QuizCardLeft, QuizCardRight } from "./TheoryQuiz";

interface AccordionState {
  selectedAnswer: string | null;
  showFeedback: boolean;
  completed: boolean;
  hasIncorrectAnswer: boolean;
}

interface AccordionSectionProps {
  sectionIndex: number;
  section: AccordionSectionData;
  isOpen: boolean;
  isUnlocked: boolean;
  state: AccordionState;
  onToggle: () => void;
  onAnswerSelect: (answer: string, isCorrect: boolean) => void;
  onContinue: () => void;
  isMobile?: boolean;
}

function ContentDivider() {
  return (
    <div className="h-0 relative shrink-0 w-full opacity-40">
      <div className="absolute inset-[-0.5px_-0.1%]">
        <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 493 1">
          <path d="M0.5 0.5H492.5" stroke="#5B6E77" strokeLinecap="round" />
        </svg>
      </div>
    </div>
  );
}

export function AccordionSectionMobile({
  sectionIndex,
  section,
  isOpen,
  isUnlocked,
  state,
  onToggle,
  onAnswerSelect,
  onContinue,
}: Omit<AccordionSectionProps, "isMobile">) {
  const isCorrect = (state.selectedAnswer === "left" && section.quizLeftCorrect) || 
                    (state.selectedAnswer === "right" && section.quizRightCorrect);

  return (
    <div data-section={sectionIndex} className="w-full bg-[#343e42] rounded-[15px] overflow-hidden">
      {/* Header */}
      <div
        className={`h-[100px] relative shrink-0 w-full flex items-center ${isUnlocked ? "cursor-pointer" : "cursor-not-allowed"}`}
        onClick={onToggle}
      >
        <div className="flex items-center justify-between px-[25px] w-full">
          <div className="flex gap-[20px] items-center">
            {state.completed ? <GreenIndicator /> : state.hasIncorrectAnswer ? <OrangeIndicator /> : <GrayIndicator />}
            <p
              className="font-['Roboto_Condensed:SemiBold',sans-serif] font-semibold leading-[27.5px] text-[22px]"
              style={{ color: !isUnlocked ? "#4a5560" : isOpen ? "#f1f2fb" : "#798589" }}
            >
              {section.title}
            </p>
          </div>
          <ChevronIcon isOpen={isOpen} isLocked={!isUnlocked} />
        </div>
      </div>

      {/* Expandable Content */}
      <div style={{ display: "grid", gridTemplateRows: isOpen ? "1fr" : "0fr", transition: "grid-template-rows 300ms ease" }}>
        <div style={{ overflow: "hidden", minHeight: 0 }}>
          <div className="flex flex-col items-center w-full">
            <div className="flex flex-col gap-[25px] items-center pb-[20px] px-[25px] w-full">
              {/* Theory Content */}
              <div className="flex flex-col gap-[20px] items-center w-full">
                {section.content}
              </div>
              <ContentDivider />

              {/* Quiz */}
              <div className="flex flex-col gap-[16px] w-full">
                <div className="flex items-center justify-between w-full px-[4px]">
                  <p className="font-['Roboto_Condensed:SemiBold',sans-serif] font-semibold leading-[27.5px] text-[#f1f2fb] text-[22px] flex-1 pr-[10px]">
                    {section.quizQuestion}
                  </p>
                  <div className="flex gap-[7px] items-center shrink-0">
                    <RedCardIcon />
                    <p className="font-['Roboto_Condensed:Regular',sans-serif] font-normal text-[#ff6b21] text-[16px]">
                      {section.quizLabel}
                    </p>
                  </div>
                </div>

                <div className="flex flex-row gap-[14px] items-stretch w-full">
                  <QuizCardLeft
                    isSelected={state.selectedAnswer === "left"}
                    isCorrect={section.quizLeftCorrect}
                    showFeedback={state.showFeedback}
                    onClick={() => onAnswerSelect("left", section.quizLeftCorrect)}
                    disabled={state.showFeedback}
                    contentNode={section.quizLeftNode}
                  />
                  <QuizCardRight
                    isSelected={state.selectedAnswer === "right"}
                    isCorrect={section.quizRightCorrect}
                    showFeedback={state.showFeedback}
                    onClick={() => onAnswerSelect("right", section.quizRightCorrect)}
                    disabled={state.showFeedback}
                    contentNode={section.quizRightNode}
                  />
                </div>

                {state.showFeedback && (
                  <div className="flex flex-col gap-[16px] w-full pointer-events-none">
                    <div className="flex items-center justify-between pointer-events-auto">
                      <button
                        onClick={onContinue}
                        className="bg-[#f7f8fc] h-[59px] flex items-center justify-center px-[20px] rounded-[15px] hover:translate-y-[1px] active:translate-y-[3px] transition-all shadow-[0px_5px_0px_0px_#d2d4df] hover:shadow-[0px_4px_0px_0px_#d2d4df] active:shadow-[0px_1px_0px_0px_#d2d4df]"
                        style={{ minWidth: "140px" }}
                      >
                        <p className="font-['Roboto_Condensed:Bold',sans-serif] text-[#343e42] text-[20px] whitespace-nowrap">
                          Продолжить
                        </p>
                      </button>
                      {isCorrect ? (
                        <div className="flex items-center gap-[6px]">
                          <p className="font-['Roboto_Condensed:Bold',sans-serif] text-[#cdf6db] text-[18px]">
                            Верно! +15
                          </p>
                          <SparkleIcon />
                        </div>
                      ) : (
                        <p className="font-['Roboto_Condensed:Regular',sans-serif] text-[#ffbaaa] text-[16px]">
                          Ещё раз!
                        </p>
                      )}
                    </div>
                    {isCorrect ? (
                      <p className="font-['Roboto_Condensed:Regular',sans-serif] text-[#cdf6db] text-[16px] leading-[1.3]">
                        {section.correctFeedback}
                      </p>
                    ) : (
                      <p className="font-['Roboto_Condensed:Regular',sans-serif] text-[#ffd8d2] text-[16px] leading-[1.3]">
                        {section.incorrectFeedback}
                      </p>
                    )}
                  </div>
                )}
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export function AccordionSectionDesktop({
  sectionIndex,
  section,
  isOpen,
  isUnlocked,
  state,
  onToggle,
  onAnswerSelect,
  onContinue,
}: Omit<AccordionSectionProps, "isMobile">) {
  const isCorrect = (state.selectedAnswer === "left" && section.quizLeftCorrect) || 
                    (state.selectedAnswer === "right" && section.quizRightCorrect);

  return (
    <div data-section={sectionIndex} className="w-full bg-[#343e42] rounded-[15px] overflow-hidden">
      {/* Header */}
      <div
        className={`h-[120px] relative shrink-0 w-full flex items-center ${isUnlocked ? "cursor-pointer" : "cursor-not-allowed"}`}
        onClick={onToggle}
      >
        <div className="content-stretch flex items-center justify-between px-[30px] relative w-full">
          <div className="content-stretch flex gap-[20px] items-center relative shrink-0">
            {state.completed ? <GreenIndicator /> : state.hasIncorrectAnswer ? <OrangeIndicator /> : <GrayIndicator />}
            <p
              className="font-['Roboto_Condensed:SemiBold',sans-serif] font-semibold leading-[27.5px] relative shrink-0 text-[24px] whitespace-nowrap"
              style={{ color: !isUnlocked ? "#4a5560" : isOpen ? "#f1f2fb" : "#798589" }}
            >
              {section.title}
            </p>
          </div>
          <ChevronIcon isOpen={isOpen} isLocked={!isUnlocked} />
        </div>
      </div>

      {/* Expandable Content */}
      <div style={{ display: "grid", gridTemplateRows: isOpen ? "1fr" : "0fr", transition: "grid-template-rows 300ms ease" }}>
        <div style={{ overflow: "hidden", minHeight: 0 }}>
          <div className="flex flex-col items-center w-full">
            <div className="content-stretch flex flex-col gap-[16px] items-center pb-[30px] px-[30px] relative w-full">
              <div className="content-stretch flex flex-col gap-[25px] items-center relative shrink-0 w-full">
                {/* Theory Content */}
                <div className="content-stretch flex flex-col gap-[25px] items-center relative shrink-0 w-full">
                  {section.content}
                </div>

                {/* Quiz Container */}
                <div className="bg-[#394449] rounded-[15px] w-full">
                  <div className="p-[30px] flex flex-col gap-[25px]">
                    {/* Header row: question LEFT, label RIGHT */}
                    <div className="content-stretch flex items-center justify-between relative shrink-0 w-full">
                      <p className="font-['Roboto_Condensed:SemiBold',sans-serif] font-semibold leading-[27.5px] text-[#f1f2fb] text-[24px] flex-1 pr-[20px]">
                        {section.quizQuestion}
                      </p>
                      <div className="content-stretch flex gap-[7px] items-center relative shrink-0">
                        <RedCardIcon />
                        <p className="font-['Roboto_Condensed:Regular',sans-serif] font-normal leading-[1.2] relative shrink-0 text-[#ff6b21] text-[18px] whitespace-nowrap">
                          {section.quizLabel}
                        </p>
                      </div>
                    </div>

                    {/* Options */}
                    <div className="content-stretch flex flex-row gap-[20px] items-stretch relative shrink-0 w-full">
                      <QuizCardLeft
                        isSelected={state.selectedAnswer === "left"}
                        isCorrect={section.quizLeftCorrect}
                        showFeedback={state.showFeedback}
                        onClick={() => onAnswerSelect("left", section.quizLeftCorrect)}
                        disabled={state.showFeedback}
                        contentNode={section.quizLeftNode}
                      />
                      <QuizCardRight
                        isSelected={state.selectedAnswer === "right"}
                        isCorrect={section.quizRightCorrect}
                        showFeedback={state.showFeedback}
                        onClick={() => onAnswerSelect("right", section.quizRightCorrect)}
                        disabled={state.showFeedback}
                        contentNode={section.quizRightNode}
                      />
                    </div>

                    {/* Feedback */}
                    {state.showFeedback && (
                      <div className="content-stretch flex flex-wrap items-end gap-x-[20px] gap-y-[12px] justify-between relative shrink-0 w-full pointer-events-none">
                        {isCorrect ? (
                          <div className="content-stretch flex flex-col gap-[10px] items-start justify-center relative shrink-0 pr-[20px]" style={{ flex: "1 1 160px" }}>
                            <div className="content-stretch flex gap-[12px] items-center justify-end relative shrink-0">
                              <div className="content-stretch flex gap-[9px] items-end relative shrink-0">
                                <div className="relative shrink-0 size-[27px]">
                                  <svg className="absolute block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 27 27">
                                    <g clipPath="url(#cclip_party)">
                                      <path d="M14.4167 4.5C14.4167 3.80964 13.8571 3.25 13.1667 3.25C12.4764 3.25 11.9167 3.80964 11.9167 4.5V6.75C11.9167 7.44036 12.4764 8 13.1667 8C13.8571 8 14.4167 7.44036 14.4167 6.75V4.5Z" fill="#FDC70E" /><path d="M19.0833 7.5C19.5155 6.96447 19.3892 6.19403 18.8537 5.76183C18.3182 5.32963 17.5477 5.45598 17.1155 5.99151L15.4989 8.00904C15.0667 8.54457 15.193 9.31501 15.7285 9.74721C16.264 10.1794 17.0345 10.0531 17.4667 9.51755L19.0833 7.5Z" fill="#D39518" />
                                      <path d="M20.5 12.25C21.1904 12.25 21.75 11.6904 21.75 11C21.75 10.3096 21.1904 9.75 20.5 9.75H18.25C17.5596 9.75 17 10.3096 17 11C17 11.6904 17.5596 12.25 18.25 12.25H20.5Z" fill="#3B84ED" /><path d="M8.08333 7.5C7.65113 6.96447 7.77748 6.19403 8.31301 5.76183C8.84854 5.32963 9.61898 5.45598 10.0512 5.99151L11.6678 8.00904C12.1 8.54457 11.9737 9.31501 11.4381 9.74721C10.9026 10.1794 10.1322 10.0531 9.7 9.51755L8.08333 7.5Z" fill="#D3374E" />
                                      <path d="M6.5 12.25C5.80964 12.25 5.25 11.6904 5.25 11C5.25 10.3096 5.80964 9.75 6.5 9.75H8.75C9.44036 9.75 10 10.3096 10 11C10 11.6904 9.44036 12.25 8.75 12.25H6.5Z" fill="#3B84ED" /><path d="M10.0512 16.0085C9.61898 16.544 8.84854 16.6704 8.31301 16.2382C7.77748 15.806 7.65113 15.0355 8.08333 14.5L9.7 12.4825C10.1322 11.9469 10.9026 11.8206 11.4381 12.2528C11.9737 12.685 12.1 13.4554 11.6678 13.991L10.0512 16.0085Z" fill="#00D043" />
                                      <path d="M17.1155 16.0085C17.5477 16.544 18.3182 16.6704 18.8537 16.2382C19.3892 15.806 19.5155 15.0355 19.0833 14.5L17.4667 12.4825C17.0345 11.9469 16.264 11.8206 15.7285 12.2528C15.193 12.685 15.0667 13.4554 15.4989 13.991L17.1155 16.0085Z" fill="#D3374E" />
                                      <path d="M6.9 19.5L20.4333 19.5C20.85 19.5 21.25 19.725 21.4583 20.0875C21.6667 20.45 21.65 20.9 21.4167 21.25L18.6417 25.25C18.4333 25.5625 18.0667 25.75 17.6583 25.75L9.675 25.75C9.26667 25.75 8.9 25.5625 8.69167 25.25L5.91667 21.25C5.68333 20.9 5.66667 20.45 5.875 20.0875C6.08333 19.725 6.48333 19.5 6.9 19.5Z" fill="#00D043" />
                                      <path d="M14.4167 18.25C14.4167 17.5596 13.8571 17 13.1667 17C12.4764 17 11.9167 17.5596 11.9167 18.25V20.5C11.9167 21.1904 12.4764 21.75 13.1667 21.75C13.8571 21.75 14.4167 21.1904 14.4167 20.5V18.25Z" fill="#3B84ED" /><path d="M2.5 6C3.19036 6 3.75 5.44036 3.75 4.75C3.75 4.05964 3.19036 3.5 2.5 3.5C1.80964 3.5 1.25 4.05964 1.25 4.75C1.25 5.44036 1.80964 6 2.5 6Z" fill="#00D043" />
                                      <path d="M24.5 6C25.1904 6 25.75 5.44036 25.75 4.75C25.75 4.05964 25.1904 3.5 24.5 3.5C23.8096 3.5 23.25 4.05964 23.25 4.75C23.25 5.44036 23.8096 6 24.5 6Z" fill="#D3374E" />
                                      <path d="M5.5 2.5C6.19036 2.5 6.75 1.94036 6.75 1.25C6.75 0.559644 6.19036 0 5.5 0C4.80964 0 4.25 0.559644 4.25 1.25C4.25 1.94036 4.80964 2.5 5.5 2.5Z" fill="#D3374E" />
                                      <path d="M21.5 2.5C22.1904 2.5 22.75 1.94036 22.75 1.25C22.75 0.559644 22.1904 0 21.5 0C20.8096 0 20.25 0.559644 20.25 1.25C20.25 1.94036 20.8096 2.5 21.5 2.5Z" fill="#00D043" />
                                    </g>
                                    <defs>
                                      <clipPath id="cclip_party"><rect fill="white" height="27" width="27" /></clipPath>
                                    </defs>
                                  </svg>
                                </div>
                                <p className="font-['Roboto_Condensed:Bold',sans-serif] font-semibold leading-[20.587px] relative shrink-0 text-[#cdf6db] text-[18px] whitespace-nowrap">
                                  Верно!
                                </p>
                              </div>
                              <div className="content-stretch flex items-center justify-between relative shrink-0 w-[47px]">
                                <p className="font-['Roboto_Condensed:Bold',sans-serif] font-semibold leading-[20.587px] relative shrink-0 text-[#00d043] text-[18px] whitespace-nowrap">
                                  +15
                                </p>
                                <SparkleIcon />
                              </div>
                            </div>
                            <p className="font-['Roboto_Condensed:Regular',sans-serif] font-normal leading-[22px] min-w-0 relative shrink-0 text-[#cdf6db] text-[16px]">
                              {section.correctFeedback}
                            </p>
                          </div>
                        ) : (
                          <div className="content-stretch flex flex-col gap-[10px] items-start justify-center relative shrink-0 pr-[20px]" style={{ flex: "1 1 160px" }}>
                            <p className="font-['Roboto_Condensed:Regular',sans-serif] font-normal leading-[24px] min-w-0 relative shrink-0 text-[#ffbaaa] text-[18px]">
                              Попробуй ещё раз!
                            </p>
                            <p className="font-['Roboto_Condensed:Regular',sans-serif] font-normal leading-[22px] min-w-0 relative shrink-0 text-[#ffd8d2] text-[16px]">
                              {section.incorrectFeedback}
                            </p>
                          </div>
                        )}
                        <button
                          onClick={onContinue}
                          className="bg-[#f7f8fc] h-[65px] relative shrink-0 rounded-[15px] cursor-pointer pointer-events-auto select-none flex items-center justify-center px-[24px] hover:translate-y-[3px] active:translate-y-[5px] transition-transform duration-75"
                          style={{ boxShadow: "0px 5px 0px 0px #d2d4df" }}
                        >
                          <p className="font-['Roboto_Condensed:Bold',sans-serif] font-bold leading-[1.2] relative shrink-0 text-[#343e42] text-[22px] text-center whitespace-nowrap">
                            Продолжить
                          </p>
                        </button>
                      </div>
                    )}
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}