/** Feedback bars for LessonQuizPage correct/incorrect answers */

import { useState } from "react";
import { PartyPopperIcon, LightningIcon } from "./QuizIcons";

const ALMOST_PHRASES = ["Почти...", "Не совсем", "Мимо!", "Эх...", "Бывает"];
function randomPhrase() {
  return ALMOST_PHRASES[Math.floor(Math.random() * ALMOST_PHRASES.length)];
}

export function CorrectFeedback({ explanation, showXp = true }: { explanation: string; showXp?: boolean }) {
  return (
    <div className="flex gap-[16px] items-start shrink-0 w-full">
      <div className="flex flex-col gap-[5px] items-end justify-start shrink-0">
        <div className="flex gap-[9px] items-end shrink-0">
          <PartyPopperIcon />
          <p className="font-['Roboto_Condensed:Medium',sans-serif] font-medium leading-[20.587px] text-[#cdf6db] text-[18px] whitespace-nowrap">Верно!</p>
        </div>
        {showXp && (
          <div className="flex items-center justify-between w-[47px]">
            <p className="font-['Roboto_Condensed:Medium',sans-serif] font-medium leading-[20.587px] text-[#00d043] text-[18px] whitespace-nowrap">+25</p>
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
  const [phrase] = useState(() => isReplay ? "Попробуй ещё" : randomPhrase());

  return (
    <div className="flex gap-[16px] items-start shrink-0 w-full">
      {/* Left col: label + correct answer */}
      <div className="flex flex-col gap-[4px] items-start justify-start shrink-0">
        <p className="font-['Roboto_Condensed:Medium',sans-serif] font-medium leading-[1.2] text-[#ffbaaa] text-[16px] whitespace-nowrap">
          {phrase}
        </p>
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