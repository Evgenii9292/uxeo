/**
 * MiniQuiz components for theory lesson sections.
 * Three variants: MiniQuiz (image cards), MiniQuiz2 (text options), MiniQuizText (universal).
 */

import { Zap } from "lucide-react";
import { RedCardIcon, PartyPopperIcon, SparkleIcon, FistIcon } from "../ui/Icons";
import { QuizCardLeft, QuizCardRight } from "./TheoryQuiz";
import type { AccordionState } from "../useTheory";

// ─── Mini Quiz (image card options) ──────────────────────────────────────────

interface MiniQuizProps {
  sectionIndex: number;
  state: AccordionState;
  isCorrect: boolean;
  onAnswerSelect: (answer: string) => void;
  onContinue: () => void;
  isLastSection?: boolean;
}

export function MiniQuiz({ sectionIndex, state, isCorrect, onAnswerSelect, onContinue, isLastSection = false }: MiniQuizProps) {
  const { selectedAnswer, showFeedback } = state;

  return (
    <div className="bg-[#394449] rounded-[15px] w-full mt-[10px]">
      <div className="p-[30px] flex flex-col gap-[20px]">
        <div className="content-stretch flex items-center justify-between relative shrink-0 w-full">
          <p className="font-['Roboto_Condensed:SemiBold',sans-serif] font-semibold leading-[27.5px] text-[#f1f2fb] text-[24px] flex-1 pr-[20px]">
            Какой интерфейс лучше?
          </p>
          <div className="content-stretch flex gap-[7px] items-center relative shrink-0">
            <RedCardIcon />
            <p className="font-['Roboto_Condensed:Regular',sans-serif] font-normal leading-[1.2] relative shrink-0 text-[#ff6b21] text-[18px] whitespace-nowrap">
              Закрепим!
            </p>
          </div>
        </div>

        <div className="content-stretch flex gap-[20px] items-center relative shrink-0 w-full">
          <QuizCardLeft
            isSelected={selectedAnswer === "left"}
            isCorrect={isCorrect}
            showFeedback={showFeedback}
            onClick={() => onAnswerSelect("left")}
            disabled={showFeedback}
          />
          <QuizCardRight
            isSelected={selectedAnswer === "right"}
            isCorrect={false}
            showFeedback={showFeedback}
            onClick={() => onAnswerSelect("right")}
            disabled={showFeedback}
          />
        </div>

        {showFeedback && (
          <div className="content-stretch flex items-end justify-between relative shrink-0 w-full pointer-events-none">
            {isCorrect ? (
              <div className="content-stretch flex flex-col gap-[10px] items-start justify-center relative shrink-0 pr-[20px]" style={{ width: '50%' }}>
                <div className="content-stretch flex gap-[12px] items-center justify-end relative shrink-0">
                  <div className="content-stretch flex gap-[9px] items-end relative shrink-0">
                    <PartyPopperIcon />
                    <p className="font-['Roboto_Condensed:Bold',sans-serif] font-semibold leading-[20.587px] relative shrink-0 text-[#cdf6db] text-[18px] whitespace-nowrap">Верно!</p>
                  </div>
                  <div className="content-stretch flex items-center justify-between relative shrink-0 w-[47px]">
                    <p className="font-['Roboto_Condensed:Bold',sans-serif] font-semibold leading-[20.587px] relative shrink-0 text-[#00d043] text-[18px] whitespace-nowrap">+15</p>
                    <SparkleIcon />
                  </div>
                </div>
                <p className="font-['Roboto_Condensed:Regular',sans-serif] font-normal leading-[1.2] relative shrink-0 text-[#cdf6db] text-[16px]">
                  Основная кнопка имеет высокий контраст и лучше выделяется, поэтому интерфейс читается быстрее.
                </p>
              </div>
            ) : (
              <div className="content-stretch flex flex-col gap-[10px] items-start justify-center relative shrink-0 pr-[20px]" style={{ width: '50%' }}>
                <div className="flex gap-[10px] items-center">
                  <FistIcon />
                  <p className="font-['Roboto_Condensed:Bold',sans-serif] font-semibold leading-[1.2] relative text-[#ffbaaa] text-[18px]">Почти получилось!</p>
                </div>
                <p className="font-['Roboto_Condensed:Regular',sans-serif] font-normal leading-[1.2] relative shrink-0 text-[16px] text-[#ffd8d2]">
                  Основная кнопка имеет высокий контраст и лучше выделяется, поэтому интерфейс читается быстрее.
                </p>
              </div>
            )}

            <button
              onClick={onContinue}
              className={`content-stretch flex gap-[10px] h-[59px] items-center justify-center px-[16px] relative rounded-[15px] shrink-0 w-[193.669px] cursor-pointer hover:translate-y-[1px] active:translate-y-[3px] transition-all pointer-events-auto ${
                isLastSection && showFeedback
                  ? "bg-[#ff6b21] shadow-[0px_5px_0px_0px_#c54a0a] hover:shadow-[0px_4px_0px_0px_#c54a0a] active:shadow-[0px_1px_0px_0px_#c54a0a]"
                  : "bg-[#f7f8fc] shadow-[0px_5px_0px_0px_#d2d4df] hover:shadow-[0px_4px_0px_0px_#d2d4df] active:shadow-[0px_1px_0px_0px_#d2d4df]"
              }`}
            >
              {isLastSection && showFeedback && <Zap className="h-[24px] w-[17px] text-[#f1f2fb]" fill="currentColor" />}
              <p className={`font-['Roboto_Condensed:Bold',sans-serif] font-semibold leading-[22.852px] relative shrink-0 text-[24px] whitespace-nowrap ${
                isLastSection && showFeedback ? "text-[#f1f2fb]" : "text-[#343e42]"
              }`}>
                {isLastSection && showFeedback ? "Начать квиз" : "Продолжить"}
              </p>
            </button>
          </div>
        )}
      </div>
    </div>
  );
}

// ─── Mini Quiz 2 (text options, color approach) ───────────────────────────────

interface MiniQuiz2Props {
  sectionIndex: number;
  state: AccordionState;
  isCorrect: boolean;
  onAnswerSelect: (answer: string) => void;
  onContinue: () => void;
  isLastSection?: boolean;
  leftNode?: React.ReactNode;
  rightNode?: React.ReactNode;
  compact?: boolean;
}

export function MiniQuiz2({ sectionIndex, state, isCorrect, onAnswerSelect, onContinue, isLastSection = false, leftNode, rightNode, compact = false }: MiniQuiz2Props) {
  const { selectedAnswer, showFeedback } = state;

  return (
    <div className={compact ? "flex flex-col gap-[16px] w-full" : "bg-[#394449] rounded-[15px] w-full mt-[10px]"}>
      <div className={compact ? "flex flex-col gap-[16px]" : "p-[30px] flex flex-col gap-[25px]"}>
        <div className={`content-stretch flex items-center justify-between relative shrink-0 w-full ${compact ? 'px-[4px]' : ''}`}>
          <p className={`font-['Roboto_Condensed:SemiBold',sans-serif] font-semibold leading-[27.5px] text-[#f1f2fb] ${compact ? 'text-[22px]' : 'text-[24px]'} flex-1 pr-[10px]`}>
            Какой подход к цветам лучше?
          </p>
          <div className="content-stretch flex gap-[7px] items-center relative shrink-0">
            <RedCardIcon />
            <p className={`font-['Roboto_Condensed:Regular',sans-serif] font-normal leading-[1.2] relative shrink-0 text-[#ff6b21] ${compact ? 'text-[16px]' : 'text-[18px]'} whitespace-nowrap`}>
              Закрепим!
            </p>
          </div>
        </div>

        <div className="content-stretch flex flex-row gap-[14px] items-stretch relative shrink-0 w-full">
          <QuizCardLeft
            isSelected={selectedAnswer === "left"}
            isCorrect={false}
            showFeedback={showFeedback}
            onClick={() => onAnswerSelect("left")}
            disabled={showFeedback}
            contentNode={leftNode}
          />
          <QuizCardRight
            isSelected={selectedAnswer === "right"}
            isCorrect={true}
            showFeedback={showFeedback}
            onClick={() => onAnswerSelect("right")}
            disabled={showFeedback}
            contentNode={rightNode}
          />
        </div>

        {showFeedback && !compact && (
          <div className="content-stretch flex flex-wrap items-end gap-x-[14px] gap-y-[12px] justify-between relative shrink-0 w-full pointer-events-none">
            {isCorrect ? (
              <div className="content-stretch flex flex-col gap-[10px] items-start justify-center relative shrink-0 pr-[20px]" style={{ flex: '1 1 160px' }}>
                <div className="content-stretch flex gap-[12px] items-center justify-end relative shrink-0">
                  <div className="content-stretch flex gap-[9px] items-end relative shrink-0">
                    <PartyPopperIcon />
                    <p className="font-['Roboto_Condensed:Bold',sans-serif] font-semibold leading-[20.587px] relative shrink-0 text-[#cdf6db] text-[18px] whitespace-nowrap">Верно!</p>
                  </div>
                  <div className="content-stretch flex items-center justify-between relative shrink-0 w-[47px]">
                    <p className="font-['Roboto_Condensed:Bold',sans-serif] font-semibold leading-[20.587px] relative shrink-0 text-[#00d043] text-[18px] whitespace-nowrap">+15</p>
                    <SparkleIcon />
                  </div>
                </div>
                <p className="font-['Roboto_Condensed:Regular',sans-serif] font-normal leading-[1.2] relative shrink-0 text-[#cdf6db] text-[16px]">
                  Когда интерфейс использует один основной цвет и нейтральные оттенки, пользователю легче понять структуру интерфейса и основные действия.🎨
                </p>
              </div>
            ) : (
              <div className="content-stretch flex flex-col gap-[10px] items-start justify-center relative shrink-0 pr-[20px]" style={{ flex: '1 1 160px' }}>
                <div className="flex gap-[10px] items-center">
                  <FistIcon />
                  <p className="font-['Roboto_Condensed:Bold',sans-serif] font-semibold leading-[1.2] relative text-[#ffbaaa] text-[18px]">Почти получилось!</p>
                </div>
                <p className="font-['Roboto_Condensed:Regular',sans-serif] font-normal leading-[1.2] relative shrink-0 text-[16px] text-[#ffd8d2]">
                  Если интерфейс использует много ярких цветов, элементы начинают конкурировать между собой и пользователю становится сложнее понять, куда смотреть.
                </p>
              </div>
            )}
            <button
              onClick={onContinue}
              className={`content-stretch flex gap-[10px] h-[59px] items-center justify-center px-[16px] relative rounded-[15px] shrink-0 w-[193.669px] cursor-pointer hover:translate-y-[1px] active:translate-y-[3px] transition-all pointer-events-auto ${
                isLastSection && showFeedback
                  ? "bg-[#ff6b21] shadow-[0px_5px_0px_0px_#c54a0a] hover:shadow-[0px_4px_0px_0px_#c54a0a] active:shadow-[0px_1px_0px_0px_#c54a0a]"
                  : "bg-[#f7f8fc] shadow-[0px_5px_0px_0px_#d2d4df] hover:shadow-[0px_4px_0px_0px_#d2d4df] active:shadow-[0px_1px_0px_0px_#d2d4df]"
              }`}
            >
              {isLastSection && showFeedback && <Zap className="h-[24px] w-[17px] text-[#f1f2fb]" fill="currentColor" />}
              <p className={`font-['Roboto_Condensed:Bold',sans-serif] font-semibold leading-[22.852px] relative shrink-0 text-[24px] whitespace-nowrap ${
                isLastSection && showFeedback ? "text-[#f1f2fb]" : "text-[#343e42]"
              }`}>
                {isLastSection && showFeedback ? "Начать квиз" : "Продолжить"}
              </p>
            </button>
          </div>
        )}

        {showFeedback && compact && (
          <div className="flex flex-col gap-[16px] w-full pointer-events-none">
            <div className="flex items-center justify-between pointer-events-auto">
              <button
                onClick={onContinue}
                className="bg-[#f7f8fc] h-[59px] flex items-center justify-center px-[20px] rounded-[15px] pointer-events-auto hover:translate-y-[1px] active:translate-y-[3px] transition-all shadow-[0px_5px_0px_0px_#d2d4df] hover:shadow-[0px_4px_0px_0px_#d2d4df] active:shadow-[0px_1px_0px_0px_#d2d4df]"
                style={{ minWidth: '140px' }}
              >
                <p className="font-['Roboto_Condensed:Bold',sans-serif] text-[#343e42] text-[20px] whitespace-nowrap">Продолжить</p>
              </button>
              {isCorrect ? (
                <div className="flex items-center gap-[6px]">
                  <p className="font-['Roboto_Condensed:Bold',sans-serif] text-[#cdf6db] text-[18px]">Верно! +15</p>
                  <SparkleIcon />
                </div>
              ) : (
                <p className="font-['Roboto_Condensed:Regular',sans-serif] text-[#ffbaaa] text-[16px]">Ещё раз!</p>
              )}
            </div>
            {isCorrect ? (
              <p className="font-['Roboto_Condensed:Regular',sans-serif] font-normal leading-[1.3] text-[#cdf6db] text-[16px]">
                Когда интерфейс использует один основной цвет и нейтральные оттенки, пользователю легче понять структуру интерфейса и основные действия.🎨
              </p>
            ) : (
              <p className="font-['Roboto_Condensed:Regular',sans-serif] font-normal leading-[1.3] text-[#ffd8d2] text-[16px]">
                Если интерфейс использует много ярких цветов, элементы начинают конкурировать между собой и пользователю становится сложнее понять, куда смотреть.
              </p>
            )}
          </div>
        )}
      </div>
    </div>
  );
}

// ─── Mini Quiz Text (universal parametric variant) ────────────────────────────

interface MiniQuizTextProps {
  sectionIndex: number;
  state: AccordionState;
  isCorrect: boolean;
  onAnswerSelect: (answer: string) => void;
  onContinue: () => void;
  isLastSection?: boolean;
  question: string;
  leftOption: string;
  rightOption: string;
  correctFeedback: string;
  incorrectFeedback: string;
  leftNode?: React.ReactNode;
  rightNode?: React.ReactNode;
  compact?: boolean;
}

export function MiniQuizText({
  sectionIndex,
  state,
  isCorrect,
  onAnswerSelect,
  onContinue,
  isLastSection = false,
  question,
  leftOption,
  rightOption,
  correctFeedback,
  incorrectFeedback,
  leftNode,
  rightNode,
  compact = false,
}: MiniQuizTextProps) {
  const { selectedAnswer, showFeedback } = state;

  return (
    <div className={compact ? "flex flex-col gap-[16px] w-full" : "bg-[#394449] rounded-[15px] w-full mt-[10px]"}>
      <div className={compact ? "flex flex-col gap-[16px]" : "p-[30px] flex flex-col gap-[25px]"}>
        <div className={`content-stretch flex items-center justify-between relative shrink-0 w-full ${compact ? 'px-[4px]' : ''}`}>
          <p className={`font-['Roboto_Condensed:SemiBold',sans-serif] font-semibold leading-[27.5px] text-[#f1f2fb] ${compact ? 'text-[22px]' : 'text-[24px]'} flex-1 pr-[10px]`}>
            {question}
          </p>
          <div className="content-stretch flex gap-[7px] items-center relative shrink-0">
            <RedCardIcon />
            <p className={`font-['Roboto_Condensed:Regular',sans-serif] font-normal leading-[1.2] relative shrink-0 text-[#ff6b21] ${compact ? 'text-[16px]' : 'text-[18px]'} whitespace-nowrap`}>
              Проверим
            </p>
          </div>
        </div>

        <div className="content-stretch flex flex-row gap-[14px] items-stretch relative shrink-0 w-full">
          <QuizCardLeft
            isSelected={selectedAnswer === "left"}
            isCorrect={false}
            showFeedback={showFeedback}
            onClick={() => onAnswerSelect("left")}
            disabled={showFeedback}
            contentNode={leftNode}
          />
          <QuizCardRight
            isSelected={selectedAnswer === "right"}
            isCorrect={true}
            showFeedback={showFeedback}
            onClick={() => onAnswerSelect("right")}
            disabled={showFeedback}
            contentNode={rightNode}
          />
        </div>

        {showFeedback && !compact && (
          <div className="content-stretch flex flex-wrap items-end gap-x-[20px] gap-y-[12px] justify-between relative shrink-0 w-full pointer-events-none">
            {isCorrect ? (
              <div className="content-stretch flex flex-col gap-[10px] items-start justify-center relative shrink-0 pr-[20px]" style={{ flex: '1 1 160px' }}>
                <div className="content-stretch flex gap-[12px] items-center justify-end relative shrink-0">
                  <div className="content-stretch flex gap-[9px] items-end relative shrink-0">
                    <PartyPopperIcon />
                    <p className="font-['Roboto_Condensed:Bold',sans-serif] font-semibold leading-[20.587px] relative shrink-0 text-[#cdf6db] text-[18px] whitespace-nowrap">Верно 👍</p>
                  </div>
                  <div className="content-stretch flex items-center justify-between relative shrink-0 w-[47px]">
                    <p className="font-['Roboto_Condensed:Bold',sans-serif] font-semibold leading-[20.587px] relative shrink-0 text-[#00d043] text-[18px] whitespace-nowrap">+15</p>
                    <SparkleIcon />
                  </div>
                </div>
                <p className="font-['Roboto_Condensed:Regular',sans-serif] font-normal leading-[1.2] relative shrink-0 text-[#cdf6db] text-[16px]">{correctFeedback}</p>
              </div>
            ) : (
              <div className="content-stretch flex flex-col gap-[10px] items-start justify-center relative shrink-0 pr-[20px]" style={{ flex: '1 1 160px' }}>
                <div className="flex gap-[10px] items-center">
                  <FistIcon />
                  <p className="font-['Roboto_Condensed:Bold',sans-serif] font-semibold leading-[1.2] relative text-[#ffbaaa] text-[18px]">Почти получилось!</p>
                </div>
                <p className="font-['Roboto_Condensed:Regular',sans-serif] font-normal leading-[1.2] relative shrink-0 text-[16px] text-[#ffd8d2]">{incorrectFeedback}</p>
              </div>
            )}
            <button
              onClick={onContinue}
              className={`content-stretch flex gap-[10px] h-[59px] items-center justify-center px-[16px] relative rounded-[15px] shrink-0 w-[193.669px] cursor-pointer hover:translate-y-[1px] active:translate-y-[3px] transition-all pointer-events-auto ${
                isLastSection && showFeedback
                  ? "bg-[#ff6b21] shadow-[0px_5px_0px_0px_#c54a0a] hover:shadow-[0px_4px_0px_0px_#c54a0a] active:shadow-[0px_1px_0px_0px_#c54a0a]"
                  : "bg-[#f7f8fc] shadow-[0px_5px_0px_0px_#d2d4df] hover:shadow-[0px_4px_0px_0px_#d2d4df] active:shadow-[0px_1px_0px_0px_#d2d4df]"
              }`}
            >
              {isLastSection && showFeedback && <Zap className="h-[24px] w-[17px] text-[#f1f2fb]" fill="currentColor" />}
              <p className={`font-['Roboto_Condensed:Bold',sans-serif] font-semibold leading-[22.852px] relative shrink-0 text-[24px] whitespace-nowrap ${
                isLastSection && showFeedback ? "text-[#f1f2fb]" : "text-[#343e42]"
              }`}>
                {isLastSection && showFeedback ? "Начать квиз" : "Продолжить"}
              </p>
            </button>
          </div>
        )}

        {showFeedback && compact && (
          <div className="flex flex-col gap-[16px] w-full pointer-events-none">
            <div className="flex items-center justify-between pointer-events-auto">
              <button
                onClick={onContinue}
                className="bg-[#f7f8fc] h-[59px] flex items-center justify-center px-[20px] rounded-[15px] pointer-events-auto hover:translate-y-[1px] active:translate-y-[3px] transition-all shadow-[0px_5px_0px_0px_#d2d4df] hover:shadow-[0px_4px_0px_0px_#d2d4df] active:shadow-[0px_1px_0px_0px_#d2d4df]"
                style={{ minWidth: '140px' }}
              >
                <p className="font-['Roboto_Condensed:Bold',sans-serif] text-[#343e42] text-[20px] whitespace-nowrap">Продолжить</p>
              </button>
              {isCorrect ? (
                <div className="flex items-center gap-[6px]">
                  <p className="font-['Roboto_Condensed:Bold',sans-serif] text-[#cdf6db] text-[18px]">Верно! +15</p>
                  <SparkleIcon />
                </div>
              ) : (
                <p className="font-['Roboto_Condensed:Regular',sans-serif] text-[#ffbaaa] text-[16px]">Ещё раз!</p>
              )}
            </div>
            {isCorrect ? (
              <p className="font-['Roboto_Condensed:Regular',sans-serif] font-normal leading-[1.3] text-[#cdf6db] text-[16px]">{correctFeedback}</p>
            ) : (
              <p className="font-['Roboto_Condensed:Regular',sans-serif] font-normal leading-[1.3] text-[#ffd8d2] text-[16px]">{incorrectFeedback}</p>
            )}
          </div>
        )}
      </div>
    </div>
  );
}
