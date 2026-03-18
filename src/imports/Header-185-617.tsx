import svgPaths from "./svg-obvswve7j2";
import imgHeader from "figma:asset/d8d28e2ac67b12e8b788219bab3c8db786aed847.png";

function BackButton() {
  return (
    <div className="relative shrink-0" data-name="Back Button">
      <div className="bg-clip-padding border-0 border-[transparent] border-solid content-stretch flex gap-[20px] items-center relative">
        <div className="h-[20px] relative shrink-0 w-[10px]">
          <div className="absolute inset-[-12.5%_-25%_-12.5%_-8.43%]">
            <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 13.3431 25">
              <path d={svgPaths.p2fb4fd90} id="Vector 5" stroke="var(--stroke-0, #798589)" strokeLinecap="round" strokeWidth="5" />
            </svg>
          </div>
        </div>
        <p className="font-['Roboto_Condensed:Bold',sans-serif] font-bold leading-[27.5px] relative shrink-0 text-[#f4f5fc] text-[26px] whitespace-nowrap">Интерфейс приложения здоровья</p>
        <p className="font-['Roboto_Condensed:Bold',sans-serif] font-bold leading-[27.5px] relative shrink-0 text-[#798589] text-[26px] whitespace-nowrap">Вызовы</p>
      </div>
    </div>
  );
}

function FireIconGroup1() {
  return (
    <div className="absolute inset-[0_15.69%]" data-name="Fire Icon Group">
      <svg className="absolute block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 16.7655 24.4324">
        <g id="Fire Icon Group">
          <path d={svgPaths.p33094f0} fill="url(#paint0_linear_134_682)" id="Vector" />
        </g>
        <defs>
          <linearGradient gradientUnits="userSpaceOnUse" id="paint0_linear_134_682" x1="8.38273" x2="8.38273" y1="0" y2="24.4324">
            <stop stopColor="#FFB121" />
            <stop offset="1" stopColor="#BB8116" />
          </linearGradient>
        </defs>
      </svg>
    </div>
  );
}

function FireIconGroup() {
  return (
    <div className="absolute contents inset-[0_15.69%]" data-name="Fire Icon Group">
      <FireIconGroup1 />
    </div>
  );
}

function FireIcon() {
  return (
    <div className="overflow-clip relative shrink-0 size-[24.432px]" data-name="Fire Icon">
      <FireIconGroup />
    </div>
  );
}

function FireIconContainer() {
  return (
    <div className="relative shrink-0" data-name="Fire Icon Container">
      <div className="bg-clip-padding border-0 border-[transparent] border-solid content-stretch flex gap-[3.054px] items-center relative">
        <FireIcon />
        <p className="bg-clip-text bg-gradient-to-b font-['Roboto_Condensed:ExtraBold',sans-serif] font-extrabold from-[#ffb121] leading-[32.068px] relative shrink-0 text-[24px] text-[transparent] to-[#bb8116] whitespace-nowrap">0</p>
      </div>
    </div>
  );
}

function ZapIcon() {
  return (
    <div className="relative shrink-0 size-[24px]" data-name="Zap Icon">
      <svg className="absolute block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 24 24">
        <g id="Zap Icon">
          <path d={svgPaths.p3b6e5180} fill="url(#paint0_linear_185_669)" id="Vector" />
        </g>
        <defs>
          <linearGradient gradientUnits="userSpaceOnUse" id="paint0_linear_185_669" x1="10.5745" x2="0.899453" y1="10.5727" y2="24.4536">
            <stop stopColor="#FF6B21" />
            <stop offset="1" stopColor="#994014" />
          </linearGradient>
        </defs>
      </svg>
    </div>
  );
}

function ZapIconContainer() {
  return (
    <div className="relative shrink-0" data-name="Zap Icon Container">
      <div className="bg-clip-padding border-0 border-[transparent] border-solid content-stretch flex gap-[4px] items-center relative">
        <ZapIcon />
        <p className="bg-clip-text font-['Roboto_Condensed:ExtraBold',sans-serif] font-extrabold leading-[21px] relative shrink-0 text-[24px] text-[transparent] whitespace-nowrap" style={{ backgroundImage: "linear-gradient(195.05deg, rgb(255, 107, 33) 48.665%, rgb(153, 64, 20) 112.02%)" }}>{`1250 `}</p>
      </div>
    </div>
  );
}

function IconsContainer() {
  return (
    <div className="h-[40px] relative shrink-0" data-name="Icons Container">
      <div className="bg-clip-padding border-0 border-[transparent] border-solid content-stretch flex gap-[30px] h-full items-center relative">
        <FireIconContainer />
        <ZapIconContainer />
      </div>
    </div>
  );
}

export default function Header() {
  return (
    <div className="content-stretch flex items-center justify-between px-[22px] py-[15px] relative rounded-[24px] size-full" data-name="Header">
      <img alt="" className="absolute inset-0 max-w-none object-cover pointer-events-none rounded-[24px] size-full" src={imgHeader} />
      <BackButton />
      <IconsContainer />
    </div>
  );
}