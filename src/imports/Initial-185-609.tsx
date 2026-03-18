import svgPaths from "./svg-tq18tvw1l4";

function Xmlid() {
  return (
    <div className="absolute inset-[0.02%_0_0.01%_0]" data-name="XMLID_103_">
      <svg className="absolute block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 19.0001 18.9956">
        <g id="XMLID_103_">
          <path d={svgPaths.p19febe00} fill="var(--fill-0, #92979D)" id="XMLID_104_" />
          <path d={svgPaths.p1c506830} fill="var(--fill-0, #92979D)" id="XMLID_105_" />
          <path d={svgPaths.p1f263800} fill="var(--fill-0, #92979D)" id="XMLID_106_" />
        </g>
      </svg>
    </div>
  );
}

function FreeIconLink() {
  return (
    <div className="overflow-clip relative shrink-0 size-[19px]" data-name="free-icon-link-154613 1">
      <Xmlid />
    </div>
  );
}

function IconAndTextContainer() {
  return (
    <div className="content-stretch flex gap-[10px] items-center relative shrink-0" data-name="Icon and Text Container">
      <FreeIconLink />
      <p className="font-['Roboto_Condensed:Regular',sans-serif] font-normal leading-[20px] relative shrink-0 text-[18px] text-[rgba(244,245,252,0.5)] whitespace-nowrap">Вставьте ссылку на Figma файл</p>
    </div>
  );
}

function Layer() {
  return (
    <div className="absolute inset-[10%_0_10%_20%]" data-name="Layer 1">
      <svg className="absolute block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 16 16">
        <g id="Layer 1">
          <path d={svgPaths.p2c4b1e00} fill="var(--fill-0, #93999E)" fillOpacity="0.6" id="i" />
        </g>
      </svg>
    </div>
  );
}

function Layer1() {
  return (
    <div className="absolute contents inset-[10%_0_10%_20%]" data-name="Layer 2">
      <Layer />
    </div>
  );
}

function FreeIconLetterI() {
  return (
    <div className="overflow-clip relative shrink-0 size-[20px]" data-name="free-icon-letter-i-5379123 1">
      <Layer1 />
    </div>
  );
}

function NotificationTextContainer() {
  return (
    <div className="content-stretch flex h-[80px] items-center justify-between px-[27px] py-[26px] relative rounded-[24px] shrink-0 w-[489px]" data-name="Notification Text Container" style={{ backgroundImage: "linear-gradient(171.89deg, rgb(44, 53, 56) 2.4187%, rgb(56, 67, 72) 98.527%, rgb(44, 53, 56) 116.25%)" }}>
      <div aria-hidden="true" className="absolute border-3 border-[rgba(160,163,173,0.2)] border-solid inset-[-3px] pointer-events-none rounded-[27px]" />
      <IconAndTextContainer />
      <FreeIconLetterI />
      <div className="absolute inset-[-3px] pointer-events-none rounded-[inherit] shadow-[inset_-4px_0px_4px_0px_#384348]" />
    </div>
  );
}

function Container() {
  return (
    <div className="bg-[#ff5d39] content-stretch flex h-[86px] items-center justify-center px-[25.835px] py-[0.835px] relative rounded-[24px] shrink-0 w-[489px]" data-name="Container">
      <div aria-hidden="true" className="absolute border-[#ff390d] border-[0.835px] border-solid inset-0 pointer-events-none rounded-[24px] shadow-[0px_4.174px_0px_0px_#c24226]" />
      <p className="font-['Roboto_Condensed:Bold',sans-serif] font-bold leading-[27.5px] relative shrink-0 text-[#f4f5fc] text-[26px] whitespace-nowrap">Отправить работу</p>
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

function FreeIconAlertSign() {
  return (
    <div className="relative shrink-0 size-[18px]" data-name="free-icon-alert-sign-5451854 1">
      <svg className="absolute block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 18 18">
        <g id="free-icon-alert-sign-5451854 1">
          <path d={svgPaths.pa7482f0} fill="var(--fill-0, #FAC100)" id="Vector" />
          <path d={svgPaths.p3b885a20} fill="var(--fill-0, #FF9500)" id="Vector_2" />
          <path d={svgPaths.p1bee9700} fill="var(--fill-0, #2D4A60)" id="Vector_3" />
          <path d={svgPaths.pd85c380} fill="var(--fill-0, #2D4A60)" id="Vector_4" />
          <path d={svgPaths.p33926b70} fill="var(--fill-0, #263F52)" id="Vector_5" />
        </g>
      </svg>
    </div>
  );
}

function Container1() {
  return (
    <div className="relative shrink-0 w-full" data-name="Container">
      <div className="flex flex-row items-center justify-center size-full">
        <div className="content-stretch flex gap-[10px] items-center justify-center px-[22px] relative w-full">
          <FreeIconAlertSign />
          <p className="font-['Roboto_Condensed:Regular',sans-serif] font-normal leading-[0] relative shrink-0 text-[0px] text-[18px] text-[rgba(244,245,252,0.3)] whitespace-nowrap">
            <span className="leading-[20px]">{`Файл должен быть `}</span>
            <span className="font-['Roboto_Condensed:Italic',sans-serif] italic leading-[20px]">{`открыт `}</span>
            <span className="leading-[20px]">для просмотра</span>
          </p>
        </div>
      </div>
    </div>
  );
}

export default function Initial() {
  return (
    <div className="content-stretch flex flex-col gap-[26px] items-start relative size-full" data-name="Initial">
      <NotificationContainer />
      <Container1 />
    </div>
  );
}