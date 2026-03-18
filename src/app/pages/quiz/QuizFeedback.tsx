/** Feedback bars for LessonQuizPage correct/incorrect answers */

import { PartyPopperIcon, LightningIcon } from "./QuizIcons";

export function CorrectFeedback({ explanation, showXp = true }: { explanation: string; showXp?: boolean }) {
  return (
    <div className="flex gap-[16px] items-start shrink-0 w-full">
      <div className="flex flex-col gap-[5px] items-end justify-end shrink-0">
        <div className="flex gap-[9px] items-end shrink-0">
          <PartyPopperIcon />
          <p className="font-['Roboto_Condensed:Bold',sans-serif] font-bold leading-[20.587px] text-[#cdf6db] text-[18px] whitespace-nowrap">Верно!</p>
        </div>
        {showXp && (
          <div className="flex items-center justify-between w-[47px]">
            <p className="font-['Roboto_Condensed:Bold',sans-serif] font-bold leading-[20.587px] text-[#00d043] text-[18px] whitespace-nowrap">+25</p>
            <LightningIcon />
          </div>
        )}
      </div>
      <p className="font-['Roboto_Condensed:Regular',sans-serif] font-normal leading-[1.2] text-[#f4f5fc] text-[16px] flex-1 min-w-0">
        {explanation}
      </p>
    </div>
  );
}

export function IncorrectFeedback({
  correctAnswer,
  explanation,
  isReplay = false,
}: {
  correctAnswer: string;
  explanation: string;
  isReplay?: boolean;
}) {
  return (
    <div className="flex flex-col gap-[8px] w-full">
      {/* Top row: icon + label */}
      <div className="flex gap-[10px] items-center">
        <span className="text-[24px] leading-none">✊</span>
        <p className="font-['Roboto_Condensed:Bold',sans-serif] font-bold leading-[1.2] text-[#ffbaaa] text-[16px]">
          {isReplay ? "Попробуй ещё раз." : "Почти получилось."}
        </p>
      </div>
      {/* Bottom: correct answer + explanation */}
      <p className="font-['Roboto_Condensed:Regular',sans-serif] font-normal leading-[1.3] text-[#f4f5fc] text-[15px]">
        <span className="font-['Roboto_Condensed:Bold',sans-serif] font-bold text-[#ffbaaa]">Верный ответ — {correctAnswer}. </span>
        {explanation}
      </p>
    </div>
  );
}