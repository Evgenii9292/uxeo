import svgPaths from "./svg-ljco7xguob";

function Group() {
  return (
    <div className="absolute inset-[10%_2.78%_0_-2.78%]" data-name="Group">
      <svg className="absolute block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 16 16.2">
        <g id="Group">
          <path d={svgPaths.p18734b00} fill="var(--fill-0, #91969B)" id="Vector" />
        </g>
      </svg>
    </div>
  );
}

function FreeIconClock() {
  return (
    <div className="h-[18px] overflow-clip relative shrink-0 w-[16px]" data-name="free-icon-clock-3602199 1">
      <Group />
    </div>
  );
}

function IconAndTextContainer() {
  return (
    <div className="content-stretch flex gap-[10px] items-start justify-center relative shrink-0" data-name="Icon and Text Container">
      <FreeIconClock />
      <div className="font-['Roboto_Condensed:Regular',sans-serif] font-normal leading-[0] relative shrink-0 text-[0px] text-[18px] text-[rgba(244,245,252,0.5)] whitespace-nowrap whitespace-pre">
        <p className="leading-[20px] mb-0">Мы проверим вашу работу и пришлем обратную связь.</p>
        <p className="leading-[20px] mb-0">&nbsp;</p>
        <p className="mb-0">
          <span className="leading-[20px]">{`Обычно это занимает `}</span>
          <span className="font-['Roboto_Condensed:Italic',sans-serif] font-normal italic leading-[20px]">до 24 часов.</span>
        </p>
        <p>
          <span className="leading-[20px]">Ответ появится в</span>
          <span className="font-['Roboto_Condensed:Italic',sans-serif] font-normal italic leading-[20px]">{` `}</span>
          <span className="decoration-solid font-['Roboto_Condensed:Italic',sans-serif] font-normal italic leading-[20px] underline">уведомлениях.</span>
        </p>
      </div>
    </div>
  );
}

function NotificationTextContainer() {
  return (
    <div className="content-stretch flex items-center justify-between px-[27px] py-[26px] relative rounded-[24px] shrink-0 w-[489px]" data-name="Notification Text Container" style={{ backgroundImage: "linear-gradient(166.769deg, rgb(44, 53, 56) 2.4187%, rgb(56, 67, 72) 98.527%, rgb(44, 53, 56) 116.25%)" }}>
      <div aria-hidden="true" className="absolute border-3 border-[rgba(160,163,173,0.2)] border-solid inset-[-3px] pointer-events-none rounded-[27px]" />
      <IconAndTextContainer />
      <div className="absolute inset-[-3px] pointer-events-none rounded-[inherit] shadow-[inset_-4px_0px_4px_0px_#384348]" />
    </div>
  );
}

function FreeIconYes() {
  return (
    <div className="relative shrink-0 size-[18px]" data-name="free-icon-yes-9426997 1">
      <svg className="absolute block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 18 18">
        <g clipPath="url(#clip0_177_2990)" id="free-icon-yes-9426997 1">
          <path d={svgPaths.p2dc71b30} fill="var(--fill-0, #5EDD60)" id="Vector" />
          <path d={svgPaths.p14c44980} fill="var(--fill-0, white)" id="Vector_2" />
        </g>
        <defs>
          <clipPath id="clip0_177_2990">
            <rect fill="white" height="18" width="18" />
          </clipPath>
        </defs>
      </svg>
    </div>
  );
}

function Container() {
  return (
    <div className="bg-[#f7f8fc] content-stretch flex gap-[8px] h-[86px] items-center justify-center px-[16px] relative rounded-[24px] shadow-[0px_1px_0px_0px_#bcbec8] shrink-0 w-[489px]" data-name="Container">
      <p className="font-['Roboto_Condensed:Bold',sans-serif] font-bold leading-[27.5px] relative shrink-0 text-[#2d373b] text-[26px] whitespace-nowrap">Отправлено</p>
      <FreeIconYes />
    </div>
  );
}

function NotificationContainer() {
  return (
    <div className="content-stretch flex flex-col gap-[20px] items-start relative shrink-0" data-name="Notification Container">
      <NotificationTextContainer />
      <Container />
    </div>
  );
}

export default function Done() {
  return (
    <div className="content-stretch flex flex-col items-start relative size-full" data-name="Done">
      <NotificationContainer />
    </div>
  );
}