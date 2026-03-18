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
    // Use less horizontal padding (16px total) for bigger content, 10px vertical padding
    const compute = (w: number) => setScale((w - 16) / 172);
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
        alignItems: 'center',
        padding: '10px 8px',   // 10px top/bottom, 8px sides
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
      className={`flex-[1_0_0] min-h-px min-w-px relative rounded-[15px] transition-all overflow-hidden ${
        showFeedback ? "cursor-default" : "cursor-pointer hover:scale-[1.01]"
      } ${disabled ? "pointer-events-none" : ""}`}
      style={
        isSelected
          ? isCorrect
            ? {
                background: `linear-gradient(134.18deg, rgba(58,81,67,0.5) 2.42%, rgba(56,72,62,0.5) 98.53%, rgba(45,56,44,0.5) 116.25%)`,
                border: "2px solid #00932F",
                boxShadow: "inset -3px 0px 3px #384348, inset 0px -4px 3px rgba(0,0,0,0.25), inset 0px 3px 3px rgba(0,0,0,0.25)",
              }
            : {
                background: `linear-gradient(134.18deg, rgba(67,40,37,0.6) 2.42%, rgba(58,35,34,0.6) 98.53%)`,
                border: "2px solid #932E00",
              }
          : { background: "#404d52", border: "2px solid transparent" }
      }
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
      className={`flex-[1_0_0] min-h-px min-w-px relative rounded-[15px] transition-all overflow-hidden ${
        showFeedback ? "cursor-default" : "cursor-pointer hover:scale-[1.01]"
      } ${disabled ? "pointer-events-none" : ""}`}
      style={
        isSelected
          ? isCorrect
            ? {
                background: `linear-gradient(134.18deg, rgba(58,81,67,0.5) 2.42%, rgba(56,72,62,0.5) 98.53%, rgba(45,56,44,0.5) 116.25%)`,
                border: "2px solid #00932F",
                boxShadow: "inset -3px 0px 3px #384348, inset 0px -4px 3px rgba(0,0,0,0.25), inset 0px 3px 3px rgba(0,0,0,0.25)",
              }
            : {
                background: `linear-gradient(134.18deg, rgba(67,40,37,0.6) 2.42%, rgba(58,35,34,0.6) 98.53%)`,
                border: "2px solid #932E00",
              }
          : { background: "#404d52", border: "2px solid transparent" }
      }
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