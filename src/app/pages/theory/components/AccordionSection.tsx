/**
 * AccordionSection - Reusable accordion section component
 *
 * Renders a single theory lesson accordion with content and quiz.
 * Used by TheoryPage to display lesson sections dynamically.
 */

import React from "react";
import { Zap } from "lucide-react";
import type { AccordionSection as AccordionSectionData } from "../../../data/lesson-content";
import { GreenIndicator, GrayIndicator, OrangeIndicator } from "../ui/Indicators";
import { ChevronIcon, SparkleIcon, PartyPopperIcon, FistIcon } from "../ui/Icons";
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
  isLastSection?: boolean;
  isMobile?: boolean;
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
  isLastSection = false,
}: Omit<AccordionSectionProps, "isMobile">) {
  const isCorrect = (state.selectedAnswer === "left" && section.quizLeftCorrect) ||
                    (state.selectedAnswer === "right" && section.quizRightCorrect);

  return (
    <div data-section={sectionIndex} className="w-full bg-[#343e42] rounded-[15px] overflow-hidden">
      {/* Header */}
      <div
        className={`h-auto min-h-[100px] relative shrink-0 w-full flex items-center ${isUnlocked ? "cursor-pointer" : "cursor-not-allowed"}`}
        onClick={onToggle}
      >
        <div className="flex items-center justify-between px-[20px] w-full py-[12px]">
          <div className="flex gap-[14px] items-center flex-1 pr-[10px]">
            {state.completed ? <GreenIndicator /> : state.hasIncorrectAnswer ? <OrangeIndicator /> : <GrayIndicator />}
            <p
              className="font-['Roboto_Condensed:Medium',sans-serif] font-medium leading-[24px] text-[22px]"
              style={{ color: !isUnlocked ? "rgba(121,133,137,0.25)" : isOpen ? "#f1f2fb" : "#798589" }}
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
            <div className="flex flex-col gap-[16px] items-center pb-[20px] px-[20px] w-full">
              {/* Theory Content */}
              <div className="flex flex-col gap-[20px] items-center w-full">
                {section.content}
              </div>

              {/* Quiz section — no outer bg */}
              <div className="w-full mt-[10px]">
                {/* Divider + heading */}
                <div className="flex items-center gap-[12px] mb-[16px]">
                  <div className="h-[1px] flex-1" style={{ background: "rgba(241,242,251,0.1)" }} />
                  <div className="flex items-center justify-center shrink-0">
                    <p className="font-['Roboto_Condensed:Medium',sans-serif] font-medium text-[#798589] text-[12px] uppercase tracking-widest whitespace-nowrap">Закрепим</p>
                  </div>
                  <div className="h-[1px] flex-1" style={{ background: "rgba(241,242,251,0.1)" }} />
                </div>
                <div className="flex flex-col gap-[20px]">
                  {/* Header row */}
                  <div className="flex items-center w-full">
                    <p className="font-['Roboto_Condensed:Medium',sans-serif] font-medium leading-[24px] text-[#f1f2fb] text-[20px] flex-1">
                      {section.quizQuestion}
                    </p>
                  </div>

                  {/* Cards — side by side on mobile */}
                  <div className="flex flex-row gap-[10px] w-full">
                    <QuizCardLeft
                      isSelected={state.selectedAnswer === "left"}
                      isCorrect={section.quizLeftCorrect}
                      showFeedback={state.showFeedback}
                      onClick={() => onAnswerSelect("left", section.quizLeftCorrect)}
                      disabled={state.showFeedback}
                      contentNode={section.quizLeftNode}
                      vPad={15}
                      hPad={10}
                      cardRadius={15}
                    />
                    <QuizCardRight
                      isSelected={state.selectedAnswer === "right"}
                      isCorrect={section.quizRightCorrect}
                      showFeedback={state.showFeedback}
                      onClick={() => onAnswerSelect("right", section.quizRightCorrect)}
                      disabled={state.showFeedback}
                      contentNode={section.quizRightNode}
                      vPad={15}
                      hPad={10}
                      cardRadius={15}
                    />
                  </div>

                  {state.showFeedback && (
                    <div className="flex flex-col gap-[12px] w-full pointer-events-none">
                      {isCorrect ? (
                        <div className="flex flex-col gap-[8px]">
                          <div className="flex gap-[8px] items-center">
                            <PartyPopperIcon />
                            <p className="font-['Roboto_Condensed:Medium',sans-serif] text-[#cdf6db] text-[16px]">Верно! +15 XP</p>
                          </div>
                          <p className="font-['Roboto_Condensed:Regular',sans-serif] text-[#cdf6db] text-[14px] leading-[1.3]">{section.correctFeedback}</p>
                        </div>
                      ) : (
                        <div className="flex flex-col gap-[8px]">
                          <div className="flex gap-[8px] items-center">
                            <FistIcon />
                            <p className="font-['Roboto_Condensed:Medium',sans-serif] text-[#ffbaaa] text-[16px]">Почти получилось!</p>
                          </div>
                          <p className="font-['Roboto_Condensed:Regular',sans-serif] text-[#ffd8d2] text-[14px] leading-[1.3]">{section.incorrectFeedback}</p>
                        </div>
                      )}
                      <div
                        className="group relative cursor-pointer select-none w-full rounded-[15px] hover:translate-y-[2px] active:translate-y-[4px] transition-transform duration-75 pointer-events-auto"
                        style={{ height: 50 }}
                        onClick={onContinue}
                      >
                        <div
                          aria-hidden="true"
                          className="absolute inset-0 rounded-[15px] pointer-events-none transition-shadow duration-75 group-hover:shadow-[0px_2px_0px_0px_var(--btn-shadow)] group-active:shadow-none"
                          style={{
                            boxShadow: isLastSection && state.showFeedback ? "0px 4px 0px 0px #c54a0a" : "0px 4px 0px 0px #d2d4df",
                            // @ts-ignore
                            "--btn-shadow": isLastSection && state.showFeedback ? "#c54a0a" : "#d2d4df",
                          }}
                        />
                        <div
                          className={`flex items-center justify-center size-full gap-[10px] rounded-[15px] ${
                            isLastSection && state.showFeedback ? "bg-[#ff6b21]" : "bg-[#f7f8fc]"
                          }`}
                        >
                          {isLastSection && state.showFeedback && <Zap size={18} className="text-[#f1f2fb]" fill="currentColor" />}
                          <p className={`font-['Roboto_Condensed:Medium',sans-serif] text-[20px] ${isLastSection && state.showFeedback ? "text-[#f1f2fb]" : "text-[#343e42]"}`}>
                            {isLastSection && state.showFeedback ? "Начать квиз" : "Продолжить"}
                          </p>
                        </div>
                      </div>
                    </div>
                  )}
                </div>
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
  isLastSection = false,
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
              className="font-['Roboto_Condensed:Medium',sans-serif] font-medium leading-[27.5px] relative shrink-0 text-[26px] whitespace-nowrap"
              style={{ color: !isUnlocked ? "rgba(121,133,137,0.25)" : isOpen ? "#f1f2fb" : "#798589" }}
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

                {/* Quiz section — no outer bg */}
                <div className="w-full mt-[10px]">
                  {/* Divider + heading */}
                  <div className="flex items-center gap-[14px] mb-[20px]">
                    <div className="h-[1px] flex-1" style={{ background: "rgba(241,242,251,0.1)" }} />
                    <div className="flex items-center justify-center shrink-0">
                      <p className="font-['Roboto_Condensed:Medium',sans-serif] font-medium text-[#798589] text-[14px] uppercase tracking-widest whitespace-nowrap">Закрепим</p>
                    </div>
                    <div className="h-[1px] flex-1" style={{ background: "rgba(241,242,251,0.1)" }} />
                  </div>
                  <div className="flex flex-col gap-[20px]">
                    {/* Header row: question only */}
                    <div className="content-stretch flex items-center relative shrink-0 w-full">
                      <p className="font-['Roboto_Condensed:Medium',sans-serif] font-medium leading-[27.5px] text-[#f1f2fb] text-[26px] flex-1">
                        {section.quizQuestion}
                      </p>
                    </div>

                    {/* Answer cards — side by side on desktop */}
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
                            <div className="content-stretch flex gap-[12px] items-center relative shrink-0">
                              <div className="content-stretch flex gap-[9px] items-end relative shrink-0">
                                <PartyPopperIcon />
                                <p className="font-['Roboto_Condensed:Medium',sans-serif] font-medium leading-[20.587px] relative shrink-0 text-[#cdf6db] text-[18px] whitespace-nowrap">
                                  Верно!
                                </p>
                              </div>
                              <div className="content-stretch flex items-center justify-between relative shrink-0 w-[47px]">
                                <p className="font-['Roboto_Condensed:Medium',sans-serif] font-medium leading-[20.587px] relative shrink-0 text-[#00d043] text-[18px] whitespace-nowrap">
                                  +15
                                </p>
                                <SparkleIcon />
                              </div>
                            </div>
                            <p className="font-['Roboto_Condensed:Regular',sans-serif] font-normal leading-[1.2] relative shrink-0 text-[#cdf6db] text-[16px]">
                              {section.correctFeedback}
                            </p>
                          </div>
                        ) : (
                          <div className="content-stretch flex flex-col gap-[10px] items-start justify-center relative shrink-0 pr-[20px]" style={{ flex: "1 1 160px" }}>
                            <div className="flex gap-[10px] items-center">
                              <FistIcon />
                              <p className="font-['Roboto_Condensed:Medium',sans-serif] font-medium leading-[1.2] relative text-[#ffbaaa] text-[18px]">Почти получилось!</p>
                            </div>
                            <p className="font-['Roboto_Condensed:Regular',sans-serif] font-normal leading-[1.2] relative shrink-0 text-[16px] text-[#ffd8d2]">
                              {section.incorrectFeedback}
                            </p>
                          </div>
                        )}
                        <button
                          onClick={onContinue}
                          className={`content-stretch flex gap-[10px] h-[59px] items-center justify-center px-[16px] relative rounded-[15px] shrink-0 w-[193.669px] cursor-pointer hover:translate-y-[1px] active:translate-y-[3px] transition-all pointer-events-auto ${
                            isLastSection && state.showFeedback
                              ? "bg-[#ff6b21] shadow-[0px_5px_0px_0px_#c54a0a] hover:shadow-[0px_4px_0px_0px_#c54a0a] active:shadow-[0px_1px_0px_0px_#c54a0a]"
                              : "bg-[#f7f8fc] shadow-[0px_5px_0px_0px_#d2d4df] hover:shadow-[0px_4px_0px_0px_#d2d4df] active:shadow-[0px_1px_0px_0px_#d2d4df]"
                          }`}
                        >
                          {isLastSection && state.showFeedback && <Zap className="h-[24px] w-[17px] text-[#f1f2fb]" fill="currentColor" />}
                          <p className={`font-['Roboto_Condensed:Medium',sans-serif] font-medium leading-[22.852px] relative shrink-0 text-[24px] whitespace-nowrap ${isLastSection && state.showFeedback ? "text-[#f1f2fb]" : "text-[#343e42]"}`}>
                            {isLastSection && state.showFeedback ? "Начать квиз" : "Продолжить"}
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
