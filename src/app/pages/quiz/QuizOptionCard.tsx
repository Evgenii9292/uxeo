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

  const bgMap: Record<CardState, string> = {
    idle:      "linear-gradient(172.482deg, rgb(44, 53, 56) 2.4187%, rgb(56, 67, 72) 98.527%, rgb(44, 53, 56) 116.25%)",
    selected:  "linear-gradient(172.482deg, rgb(55, 66, 70) 2.4187%, rgb(56, 67, 72) 98.527%, rgb(44, 53, 56) 116.25%)",
    correct:   "linear-gradient(172.482deg, rgba(58,81,67,0.5) 2.4187%, rgba(56,72,62,0.5) 98.527%, rgba(45,56,44,0.5) 116.25%)",
    incorrect: "linear-gradient(172.482deg, rgba(92,53,53,0.5) 2.4187%, rgba(72,58,56,0.5) 98.527%, rgba(56,49,44,0.5) 116.25%)",
    dimmed:    "linear-gradient(172.482deg, rgba(44,53,56,0.5) 2.4187%, rgba(56,67,72,0.5) 98.527%, rgba(44,53,56,0.5) 116.25%)",
  };

  const borderMap: Record<CardState, string | null> = {
    idle:      null,
    selected:  "rgba(99, 102, 112, 0.5)",
    correct:   "#00932f",
    incorrect: "#9f3500",
    dimmed:    null,
  };

  const border = borderMap[state];
  const isClickable = state === "idle" || state === "selected";

  // FIXED sizes per spec:
  //   small  (<440px): 50px
  //   large  (≥440px mobile): 60px
  //   desktop: 64px
  const defaultH = isMobile ? (isLargePhone ? 60 : 50) : 64;
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
          className="absolute border-[3px] border-solid inset-[-3px] pointer-events-none rounded-[21px]"
          style={{ borderColor: border }}
        />
      )}
      {/* Text + label — centered vertically (height is fixed) */}
      <div className={`flex items-center justify-between leading-[20px] ${isMobile ? "px-[16px]" : "px-[40px]"} w-full gap-3`}>
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
