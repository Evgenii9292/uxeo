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
function QuizVariantSlot({ node, vPad = 50, hPad = 20 }: { node: React.ReactNode; vPad?: number; hPad?: number }) {
  const wrapperRef = useRef<HTMLDivElement>(null);
  const [scale, setScale] = useState<number>(1);

  useEffect(() => {
    const el = wrapperRef.current;
    if (!el) return;
    const compute = (w: number) => setScale((w - hPad * 2) / 186);
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
      className={`flex-[1_0_0] min-h-px min-w-px relative transition-all border-2 overflow-hidden ${
        showFeedback ? "cursor-default" : "cursor-pointer hover:scale-[1.01]"
      } ${disabled ? "pointer-events-none" : ""}`}
      style={{
        borderRadius: radius,
        ...(isSelected ? isCorrect
          ? { background: `linear-gradient(#2D3B36, #2D3B36) padding-box, linear-gradient(to bottom, #00932F, #002D0E) border-box`, borderColor: "transparent" }
          : { background: `linear-gradient(#3B3736, #3B3736) padding-box, linear-gradient(to bottom, #932E00, #2D0000) border-box`, borderColor: "transparent" }
          : { background: "#2F383B", borderColor: "#2F383B" }),
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
      className={`flex-[1_0_0] min-h-px min-w-px relative transition-all border-2 overflow-hidden ${
        showFeedback ? "cursor-default" : "cursor-pointer hover:scale-[1.01]"
      } ${disabled ? "pointer-events-none" : ""}`}
      style={{
        borderRadius: radius,
        ...(isSelected ? isCorrect
          ? { background: `linear-gradient(#2D3B36, #2D3B36) padding-box, linear-gradient(to bottom, #00932F, #002D0E) border-box`, borderColor: "transparent" }
          : { background: `linear-gradient(#3B3736, #3B3736) padding-box, linear-gradient(to bottom, #932E00, #2D0000) border-box`, borderColor: "transparent" }
          : { background: "#2F383B", borderColor: "#2F383B" }),
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
