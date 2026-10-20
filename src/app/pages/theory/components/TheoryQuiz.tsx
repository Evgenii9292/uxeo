import { QUIZ_CARD_BACKGROUNDS, QUIZ_CARD_BORDERS } from "../../quiz/quizCardStyles";
/**
 * TheoryQuiz - Quiz card components for interactive theory questions
 *
 * These components render the left/right quiz cards with visual feedback
 * for correct/incorrect answers.
 */

import { useEffect, useRef, useState } from "react";
import Group481362 from "../../../../imports/Group481362";
import Group481363 from "../../../../imports/Group481363";

interface QuizCardProps {
  isSelected: boolean;
  isCorrect: boolean;
  showFeedback: boolean;
  onClick: () => void;
  disabled: boolean;
  contentNode?: React.ReactNode;
  vPad?: number;
  hPad?: number;
  cardRadius?: number;
}

// Quiz variant renderer — proportional scale-UP to fill card width
function QuizVariantSlot({ node, vPad = 24, hPad = 12 }: { node: React.ReactNode; vPad?: number; hPad?: number }) {
  const wrapperRef = useRef<HTMLDivElement>(null);
  const [scale, setScale] = useState<number>(1);

  useEffect(() => {
    const el = wrapperRef.current;
    if (!el) return;
    const compute = (w: number) => setScale(Math.max(0.1, Math.min(1.8, (w - hPad * 2) / 186)));
    compute(el.offsetWidth);
    const ro = new ResizeObserver(entries => {
      for (const e of entries) compute(e.contentRect.width);
    });
    ro.observe(el);
    return () => ro.disconnect();
  }, [hPad]);

  const scaledW = Math.round(186 * scale);
  const scaledH = Math.round(231 * scale);

  return (
    <div
      ref={wrapperRef}
      style={{ display: 'flex', justifyContent: 'center', padding: `${vPad}px ${hPad}px` }}
    >
      <div style={{ width: scaledW, height: scaledH, overflow: 'hidden', flexShrink: 0, pointerEvents: 'none' }}>
        <div style={{ width: 186, height: 231, transform: `scale(${scale})`, transformOrigin: 'top left', flexShrink: 0 }}>
          {node}
        </div>
      </div>
    </div>
  );
}

// Left card — Variant A (incorrect example)
export function QuizCardLeft({ isSelected, isCorrect, showFeedback, onClick, disabled, contentNode, vPad, hPad, cardRadius }: QuizCardProps) {
  const radius = cardRadius ?? 24;
  return (
    <div
      onClick={disabled ? undefined : onClick}
      className={`flex-[1_0_0] min-h-px min-w-px relative transition-all duration-200 border-[3px] overflow-hidden ${
        showFeedback ? "cursor-default" : "cursor-pointer active:scale-[0.98]"
      } ${disabled ? "pointer-events-none" : ""}`}
      style={{
        borderRadius: radius,
        backgroundImage: QUIZ_CARD_BACKGROUNDS[showFeedback && isSelected ? (isCorrect ? "correct" : "incorrect") : isSelected ? "selected" : "idle"],
        borderColor: QUIZ_CARD_BORDERS[showFeedback && isSelected ? (isCorrect ? "correct" : "incorrect") : isSelected ? "selected" : "idle"] ?? "transparent",
      }}
    >
      {contentNode ? (
        <QuizVariantSlot node={contentNode} vPad={vPad} hPad={hPad} />
      ) : (
        <div style={{ display: 'flex', alignItems: 'center', justifyContent: 'center', width: '100%', height: '247px', pointerEvents: 'none' }}>
          <div style={{ position: 'relative', width: '138px', height: '150px', transform: 'scale(1.4)', transformOrigin: 'center', flexShrink: 0 }}>
            <Group481362 />
          </div>
        </div>
      )}
    </div>
  );
}

// Right card — Variant B (correct example)
export function QuizCardRight({ isSelected, isCorrect, showFeedback, onClick, disabled, contentNode, vPad, hPad, cardRadius }: QuizCardProps) {
  const radius = cardRadius ?? 24;
  return (
    <div
      onClick={disabled ? undefined : onClick}
      className={`flex-[1_0_0] min-h-px min-w-px relative transition-all duration-200 border-[3px] overflow-hidden ${
        showFeedback ? "cursor-default" : "cursor-pointer active:scale-[0.98]"
      } ${disabled ? "pointer-events-none" : ""}`}
      style={{
        borderRadius: radius,
        backgroundImage: QUIZ_CARD_BACKGROUNDS[showFeedback && isSelected ? (isCorrect ? "correct" : "incorrect") : isSelected ? "selected" : "idle"],
        borderColor: QUIZ_CARD_BORDERS[showFeedback && isSelected ? (isCorrect ? "correct" : "incorrect") : isSelected ? "selected" : "idle"] ?? "transparent",
      }}
    >
      {contentNode ? (
        <QuizVariantSlot node={contentNode} vPad={vPad} hPad={hPad} />
      ) : (
        <div style={{ display: 'flex', alignItems: 'center', justifyContent: 'center', width: '100%', height: '247px', pointerEvents: 'none' }}>
          <div style={{ position: 'relative', width: '138px', height: '150px', transform: 'scale(1.4)', transformOrigin: 'center', flexShrink: 0 }}>
            <Group481363 />
          </div>
        </div>
      )}
    </div>
  );
}
