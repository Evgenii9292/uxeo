import RightWidgets from "./RightWidgets";

function LightningButtonIcon() {
  return (
    <div className="h-[41px] relative shrink-0 w-[28px]">
      <svg className="absolute block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 28 41">
        <path d="M15.651 0.603c0.508 0.207 0.834 0.706 0.816 1.254l-0.514 15.643h10.662c0.537 0 1.02 0.324 1.225 0.82 0.205 0.496 0.091 1.067-0.29 1.446L8.139 39.077c-0.388 0.386-0.974 0.496-1.476 0.277-0.502-0.219-0.817-0.726-0.793-1.273l0.682-15.581H1.385c-0.501 0-0.958-0.283-1.183-0.731-0.224-0.448-0.177-0.984 0.122-1.387L14.102 1.091c0.319-0.431 0.91-0.625 1.549-0.488Z" fill="#F7F8FC" />
      </svg>
    </div>
  );
}

function ContinueButton({ onClick, xpReward }: { onClick: () => void; xpReward: number }) {
  return (
    <button
      onClick={onClick}
      className="group relative cursor-pointer select-none outline-none rounded-[15px] bg-[#FF5D39] transition-all duration-75 w-full"
      style={{ height: 70, boxShadow: "0 6px 0 #b83a1f" }}
    >
      <div aria-hidden="true" className="absolute border-[0.835px] border-[#ff390d] border-solid inset-0 pointer-events-none rounded-[15px]" />
      <div className="flex gap-[6.678px] items-center justify-center px-[25.835px] size-full">
        <LightningButtonIcon />
        <p className="font-['Roboto_Condensed:Medium',sans-serif] font-medium leading-[27.5px] text-[#f4f5fc] text-[26px] whitespace-nowrap">Продолжить</p>
        <div className="bg-[#d65e43] h-[28.585px] rounded-[12296925px] shrink-0 flex items-center justify-center px-[11.727px]">
          <p className="font-['Inter:Semi_Bold',sans-serif] font-medium leading-[15.392px] text-[#eef5ff] text-[10.261px] whitespace-nowrap">+{xpReward} XP</p>
        </div>
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
