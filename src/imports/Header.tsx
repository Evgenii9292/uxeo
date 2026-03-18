import svgPaths from "./svg-xs1b1rabfe";

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

export default function Header() {
  return (
    <div className="content-stretch flex items-center px-[22px] py-[15px] relative rounded-[24px] size-full" data-name="Header">
      <BackButton />
    </div>
  );
}