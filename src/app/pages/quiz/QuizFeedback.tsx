import "./QuizFeedback.css";
import { QuizFeedbackIcon } from "./QuizFeedbackIcon";
/** Feedback bars for LessonQuizPage correct/incorrect answers */

import { useState } from "react";
import { PartyPopperIcon, LightningIcon } from "./QuizIcons";

export function CorrectFeedback({ explanation, showXp = true, xp = 25 }: { explanation: string; showXp?: boolean; xp?: number }) {
  return (
    <div className="flex gap-[16px] items-start shrink-0 w-full">
      <div className="flex flex-col gap-[5px] items-end justify-start shrink-0">
        <div className="flex gap-[9px] items-end shrink-0">
          <QuizFeedbackIcon correct />
          <p className="font-['Roboto_Condensed:Medium',sans-serif] font-medium leading-[20.587px] text-[#cdf6db] text-[18px] whitespace-nowrap" style={{ marginBottom: 4 }}>Верно!</p>
        </div>
        {showXp && (
          <div className="flex items-center justify-between w-[47px]">
            <p className="font-['Roboto_Condensed:Medium',sans-serif] font-medium leading-[20.587px] text-[#00d043] text-[18px] whitespace-nowrap">+{xp}</p>
            <LightningIcon />
          </div>
        )}
      </div>
      <p className="font-['Roboto_Condensed:Regular',sans-serif] font-normal leading-[1.2] text-[#f4f5fc] text-[14px] flex-1 min-w-0">
        {explanation}
      </p>
    </div>
  );
}

export function IncorrectFeedback({
  correctAnswer,
  explanation,
  isReplay = false,
  hideAnswer = false,
}: {
  correctAnswer: string;
  explanation: string;
  isReplay?: boolean;
  hideAnswer?: boolean;
}) {
  const phrase = "Не совсем верно";

  return (
    <div className="quiz-incorrect-feedback flex gap-[16px] items-start shrink-0 w-full">
      {/* Left col: label + correct answer */}
      <div className="flex flex-col gap-[4px] items-start justify-start shrink-0">
        <div className="quiz-incorrect-heading flex items-center gap-[8px]">
          <QuizFeedbackIcon correct={false} />
        <p className="font-['Roboto_Condensed:Medium',sans-serif] font-medium leading-[1.2] text-[#ffbaaa] text-[16px] whitespace-nowrap">
          {phrase}
        </p>
        </div>
        {!hideAnswer && (
          <p className="font-['Roboto_Condensed:Medium',sans-serif] font-medium leading-[1.2] text-[#ffbaaa] text-[15px] whitespace-nowrap">
            {correctAnswer}
          </p>
        )}
      </div>
      {/* Right col: explanation */}
      <p className="font-['Roboto_Condensed:Regular',sans-serif] font-normal leading-[1.2] text-[#f4f5fc] text-[14px] flex-1 min-w-0">
        {explanation}
      </p>
    </div>
  );
}