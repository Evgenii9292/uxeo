import svgPaths from "./svg-nfm2yohg1w";

function Group() {
  return (
    <div className="relative shrink-0 size-[58px]">
      <svg className="absolute block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 58 58">
        <g id="Group 481326">
          <circle cx="29" cy="29" fill="url(#paint0_linear_40_469)" id="Ellipse 322" r="29" />
          <path d={svgPaths.p1a9a4a80} id="Vector 6" stroke="var(--stroke-0, #C3C6D1)" strokeLinecap="round" strokeOpacity="0.6" strokeWidth="5" />
        </g>
        <defs>
          <linearGradient gradientUnits="userSpaceOnUse" id="paint0_linear_40_469" x1="24.5104" x2="59.2485" y1="12.4232" y2="30.7966">
            <stop stopColor="#3D494F" />
            <stop offset="1" stopColor="#303C42" />
          </linearGradient>
        </defs>
      </svg>
    </div>
  );
}

function BackButton() {
  return (
    <div className="relative shrink-0" data-name="Back Button">
      <div className="bg-clip-padding border-0 border-[transparent] border-solid content-stretch flex items-center relative">
        <Group />
      </div>
    </div>
  );
}

function Header() {
  return (
    <div className="-translate-x-1/2 absolute content-stretch flex items-center left-1/2 px-[22px] py-[15px] rounded-[24px] top-px w-[1643px]" data-name="Header">
      <BackButton />
    </div>
  );
}

function Frame() {
  return (
    <div className="absolute content-stretch flex flex-col gap-[19px] items-start left-[559px] top-[405px] w-[526px]">
      <div className="h-[80px] relative rounded-[24px] shrink-0 w-full" style={{ backgroundImage: "linear-gradient(172.454deg, rgb(44, 53, 56) 2.4187%, rgb(56, 67, 72) 98.527%, rgb(44, 53, 56) 116.25%)" }}>
        <div className="flex flex-row items-center size-full">
          <div className="content-stretch flex items-center px-[40px] py-[26px] relative size-full">
            <p className="font-['Roboto_Condensed:Regular',sans-serif] font-normal leading-[20px] relative shrink-0 text-[#f4f5fc] text-[18px] whitespace-nowrap">Новичок</p>
          </div>
        </div>
        <div className="absolute inset-0 pointer-events-none rounded-[inherit] shadow-[inset_-4px_0px_4px_0px_#384348]" />
      </div>
      <div className="h-[80px] relative rounded-[24px] shrink-0 w-full" style={{ backgroundImage: "linear-gradient(172.454deg, rgb(44, 53, 56) 2.4187%, rgb(56, 67, 72) 98.527%, rgb(44, 53, 56) 116.25%)" }}>
        <div className="flex flex-row items-center size-full">
          <div className="content-stretch flex items-center px-[40px] py-[26px] relative size-full">
            <p className="font-['Roboto_Condensed:Regular',sans-serif] font-normal leading-[20px] relative shrink-0 text-[#f4f5fc] text-[18px] whitespace-nowrap">Есть опыт</p>
          </div>
        </div>
        <div className="absolute inset-0 pointer-events-none rounded-[inherit] shadow-[inset_-4px_0px_4px_0px_#384348]" />
      </div>
      <div className="h-[80px] relative rounded-[24px] shrink-0 w-full" style={{ backgroundImage: "linear-gradient(172.454deg, rgb(44, 53, 56) 2.4187%, rgb(56, 67, 72) 98.527%, rgb(44, 53, 56) 116.25%)" }}>
        <div className="flex flex-row items-center size-full">
          <div className="content-stretch flex items-center px-[40px] py-[26px] relative size-full">
            <p className="font-['Roboto_Condensed:Regular',sans-serif] font-normal leading-[20px] relative shrink-0 text-[#f4f5fc] text-[18px] whitespace-nowrap">Работаю дизайнером</p>
          </div>
        </div>
        <div className="absolute inset-0 pointer-events-none rounded-[inherit] shadow-[inset_-4px_0px_4px_0px_#384348]" />
      </div>
    </div>
  );
}

export default function Uxeo() {
  return (
    <div className="relative size-full" data-name="UXEO - приложение" style={{ backgroundImage: "linear-gradient(165.05deg, rgb(44, 52, 56) 14.367%, rgb(46, 57, 62) 147.74%)" }}>
      <Header />
      <p className="absolute font-['Roboto_Condensed:Medium',sans-serif] font-medium leading-[20px] left-[28px] text-[#777982] text-[16px] top-[1035px] whitespace-nowrap">Сообщить об ошибке</p>
      <p className="absolute font-['Roboto_Condensed:Bold',sans-serif] font-bold leading-[27.5px] left-[calc(50%-142.5px)] text-[#f4f5fc] text-[32px] top-[324px] whitespace-nowrap">Какой у вас уровень?</p>
      <Frame />
    </div>
  );
}