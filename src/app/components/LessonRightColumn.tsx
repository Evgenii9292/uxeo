import RightWidgets from "./RightWidgets";
import { Zap } from "lucide-react";

function LightningButtonIcon() {
  return <Zap className="h-[32px] w-[22px] shrink-0 text-[#F7F8FC]" fill="currentColor" />;
}

function ContinueButton({ onClick, xpReward }: { onClick: () => void; xpReward: number }) {
  return (
    <button
      onClick={onClick}
      className="group relative cursor-pointer select-none outline-none rounded-[15px] bg-[#FF6B21] transition-transform duration-75 w-full hover:translate-y-[2px] active:translate-y-[6px]"
      style={{ height: 70 }}
    >
      <div aria-hidden="true" className="absolute border-[0.835px] border-[#FF7403] border-solid inset-0 pointer-events-none rounded-[15px] shadow-[0_6px_0_#C54A0A] group-hover:shadow-[0_4px_0_#C54A0A] group-active:shadow-none transition-shadow duration-75" />
      <div className="flex gap-[6.678px] items-center justify-center px-[25.835px] size-full">
        <LightningButtonIcon />
        <p className="font-['Roboto_Condensed:Medium',sans-serif] font-medium leading-[27.5px] text-[#f4f5fc] text-[26px] whitespace-nowrap">Продолжить</p>
      </div>
    </button>
  );
}

export default function LessonRightColumn({ onContinue, xpReward }: { onContinue: () => void; xpReward: number }) {
  return (
    <div className="flex flex-col gap-[19px] items-start w-full">
      <RightWidgets />
      <ContinueButton onClick={onContinue} xpReward={xpReward} />
    </div>
  );
}
