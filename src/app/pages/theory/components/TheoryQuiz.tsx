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
}

// Quiz variant renderer — proportional scale-UP to fill card width
function QuizVariantSlot({ node }: { node: React.ReactNode }) {
  const wrapperRef = useRef<HTMLDivElement>(null);
  const [scale, setScale] = useState<number>(1);

  useEffect(() => {
    const el = wrapperRef.current;
    if (!el) return;
    // 20px padding on each side (40px total)
    const compute = (w: number) => setScale((w - 40) / 186);
    compute(el.offsetWidth);
    const ro = new ResizeObserver(entries => {
      for (const e of entries) compute(e.contentRect.width);
    });
    ro.observe(el);
    return () => ro.disconnect();
  }, []);

  const scaledW = Math.round(186 * scale);
  const scaledH = Math.round(231 * scale);

  return (
    <div
      ref={wrapperRef}
      style={{
        display: 'flex',
        justifyContent: 'center',
        padding: '50px 20px 50px 20px',
      }}
    >
      <div style={{ width: scaledW, height: scaledH, overflow: 'hidden', flexShrink: 0 }}>
        <div style={{ width: 186, height: 231, transform: `scale(${scale})`, transformOrigin: 'top left', flexShrink: 0 }}>
          {node}
        </div>
      </div>
    </div>
  );
}

// Left card — Variant A (incorrect example)
export function QuizCardLeft({ isSelected, isCorrect, showFeedback, onClick, disabled, contentNode }: QuizCardProps) {
  return (
    <div
      onClick={disabled ? undefined : onClick}
      className={`flex-[1_0_0] min-h-px min-w-px relative rounded-[24px] transition-all border-2 overflow-hidden ${
        showFeedback ? "cursor-default" : "cursor-pointer hover:scale-[1.01]"
      } ${disabled ? "pointer-events-none" : ""}`}
      style={isSelected ? isCorrect
        ? { background: `linear-gradient(#2D3B36, #2D3B36) padding-box, linear-gradient(to bottom, #00932F, #002D0E) border-box`, borderColor: "transparent" }
        : { background: `linear-gradient(#3B3736, #3B3736) padding-box, linear-gradient(to bottom, #932E00, #2D0000) border-box`, borderColor: "transparent" }
        : { background: "#282F33", borderColor: "#282F33" }}
    >
      {contentNode ? (
        <QuizVariantSlot node={contentNode} />
      ) : (
        <div style={{ display: 'flex', alignItems: 'center', justifyContent: 'center', width: '100%', height: '247px' }}>
          <div style={{ position: 'relative', width: '138px', height: '150px', transform: 'scale(1.4)', transformOrigin: 'center', flexShrink: 0 }}>
            <Group481362 />
          </div>
        </div>
      )}
    </div>
  );
}

// Right card — Variant B (correct example)
export function QuizCardRight({ isSelected, isCorrect, showFeedback, onClick, disabled, contentNode }: QuizCardProps) {
  return (
    <div
      onClick={disabled ? undefined : onClick}
      className={`flex-[1_0_0] min-h-px min-w-px relative rounded-[24px] transition-all border-2 overflow-hidden ${
        showFeedback ? "cursor-default" : "cursor-pointer hover:scale-[1.01]"
      } ${disabled ? "pointer-events-none" : ""}`}
      style={isSelected ? isCorrect
        ? { background: `linear-gradient(#2D3B36, #2D3B36) padding-box, linear-gradient(to bottom, #00932F, #002D0E) border-box`, borderColor: "transparent" }
        : { background: `linear-gradient(#3B3736, #3B3736) padding-box, linear-gradient(to bottom, #932E00, #2D0000) border-box`, borderColor: "transparent" }
        : { background: "#282F33", borderColor: "#282F33" }}
    >
      {contentNode ? (
        <QuizVariantSlot node={contentNode} />
      ) : (
        <div style={{ display: 'flex', alignItems: 'center', justifyContent: 'center', width: '100%', height: '247px' }}>
          <div style={{ position: 'relative', width: '138px', height: '150px', transform: 'scale(1.4)', transformOrigin: 'center', flexShrink: 0 }}>
            <Group481363 />
          </div>
        </div>
      )}
    </div>
  );
}
