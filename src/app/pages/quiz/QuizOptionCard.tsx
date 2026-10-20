import { QUIZ_CARD_BACKGROUNDS, QUIZ_CARD_BORDERS } from "./quizCardStyles";
import svgPaths from "../../../imports/svg-869ttds5wi";
import { useWindowWidth } from "../../hooks/useWindowWidth";

export type CardState = "idle" | "selected" | "correct" | "incorrect" | "dimmed";

export function QuizOptionCard({
  state,
  onClick,
  text,
  label,
  fixedHeight,
}: {
  state: CardState;
  onClick?: () => void;
  text: string;
  label: string;
  /** Optional exact pixel height (overrides default minHeight) */
  fixedHeight?: number;
}) {
  const vw = useWindowWidth();
  const isMobile = vw < 768;
  const isLargePhone = vw >= 440;

  const bgMap = QUIZ_CARD_BACKGROUNDS;

  const borderMap = QUIZ_CARD_BORDERS;

  const border = borderMap[state];
  const isClickable = state === "idle" || state === "selected";

  // FIXED sizes per spec:
  //   small  (<440px): 64px
  //   large  (≥440px mobile): 72px
  //   desktop: 80px
  const defaultH = isMobile ? (isLargePhone ? 72 : 64) : 80;
  const h = fixedHeight ?? defaultH;

  return (
    <div
      onClick={isClickable ? onClick : undefined}
      className={`relative rounded-[18px] shrink-0 w-full flex items-center transition-all duration-200 ${isClickable ? "cursor-pointer active:scale-[0.98]" : "cursor-default"}`}
      style={{
        backgroundImage: bgMap[state],
        height: h,
      }}
    >
      {border && (
        <div
          aria-hidden="true"
          className="absolute border-[3px] border-solid inset-0 pointer-events-none rounded-[18px] z-10"
          style={{ borderColor: border }}
        />
      )}
      {/* Text + label — centered vertically (height is fixed) */}
      <div className="flex items-center justify-between leading-[20px] px-[20px] w-full gap-3">
        <p className={`font-['Roboto_Condensed:Regular',sans-serif] font-normal relative shrink-0 text-[#f4f5fc] flex-1 min-w-0 ${isMobile ? "text-[16px]" : "text-[18px]"}`}>
          {text}
        </p>
        <p className="font-['Roboto_Condensed:Medium',sans-serif] font-medium relative shrink-0 text-[#798589] text-[16px] whitespace-nowrap">
          {label}
        </p>
      </div>
      <div className="absolute inset-0 pointer-events-none rounded-[inherit] shadow-[inset_-4px_0px_4px_0px_#384348]" />
    </div>
  );
}
