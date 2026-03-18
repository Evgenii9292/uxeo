import svgPaths from "./svg-a2fqhfbunj";
import img from "figma:asset/2ec43b3098d2325f5da6886d24b73185e488ff63.png";

function Group() {
  return (
    <div className="col-1 h-[78.981px] ml-0 mt-0 relative row-1 w-[91px]">
      <div className="absolute inset-[-0.63%_-0.55%_-8.86%_-0.55%]">
        <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 92 86.481">
          <g id="Group 1">
            <g filter="url(#filter0_d_141_88)" id="Ellipse 1">
              <ellipse cx="46" cy="39.9905" fill="url(#paint0_linear_141_88)" rx="45.5" ry="39.4906" />
            </g>
            <path d={svgPaths.p22433e80} id="Ellipse 2" stroke="url(#paint1_linear_141_88)" strokeLinecap="round" strokeWidth="5" />
          </g>
          <defs>
            <filter colorInterpolationFilters="sRGB" filterUnits="userSpaceOnUse" height="85.9811" id="filter0_d_141_88" width="91" x="0.5" y="0.499892">
              <feFlood floodOpacity="0" result="BackgroundImageFix" />
              <feColorMatrix in="SourceAlpha" result="hardAlpha" type="matrix" values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 127 0" />
              <feOffset dy="7" />
              <feComposite in2="hardAlpha" operator="out" />
              <feColorMatrix type="matrix" values="0 0 0 0 0.137255 0 0 0 0 0.176471 0 0 0 0 0.192157 0 0 0 1 0" />
              <feBlend in2="BackgroundImageFix" mode="normal" result="effect1_dropShadow_141_88" />
              <feBlend in="SourceGraphic" in2="effect1_dropShadow_141_88" mode="normal" result="shape" />
            </filter>
            <linearGradient gradientUnits="userSpaceOnUse" id="paint0_linear_141_88" x1="46" x2="46" y1="0.499893" y2="79.481">
              <stop stopColor="#5F7F3B" />
              <stop offset="1" stopColor="#3F5526" />
            </linearGradient>
            <linearGradient gradientUnits="userSpaceOnUse" id="paint1_linear_141_88" x1="89.5" x2="-11.494" y1="42.8578" y2="-16.1358">
              <stop stopColor="#6DA233" />
              <stop offset="1" stopColor="#283C13" />
            </linearGradient>
          </defs>
        </svg>
      </div>
    </div>
  );
}

function Group1() {
  return (
    <div className="col-1 grid-cols-[max-content] grid-rows-[max-content] inline-grid ml-0 mt-0 place-items-start relative row-1">
      <Group />
    </div>
  );
}

function Component202603032105061Vectorized() {
  return (
    <div className="col-1 h-[62px] ml-[9px] mt-[8px] overflow-clip relative row-1 w-[70px]" data-name="Снимок экрана 2026-03-03 в 21.05.06 1 [Vectorized]">
      <p className="absolute font-['Roboto_Condensed:ExtraBold',sans-serif] font-extrabold inset-[35.48%_21.43%_35.48%_31.43%] leading-[17.182px] text-[19.636px] text-[transparent] whitespace-nowrap">75%</p>
    </div>
  );
}

function Group2() {
  return (
    <div className="grid-cols-[max-content] grid-rows-[max-content] inline-grid leading-[0] place-items-start relative shrink-0">
      <Group1 />
      <Component202603032105061Vectorized />
    </div>
  );
}

function Frame() {
  return (
    <div className="content-stretch flex flex-col items-start relative shrink-0">
      <p className="bg-center bg-clip-text bg-cover bg-no-repeat font-['Roboto_Condensed:ExtraBold',sans-serif] font-extrabold leading-[21px] relative shrink-0 text-[24px] text-[transparent] whitespace-nowrap" style={{ backgroundImage: `url('${img}')` }}>
        Контраст
      </p>
    </div>
  );
}

function Icon() {
  return (
    <div className="content-stretch flex gap-[20px] items-center relative shrink-0" data-name="Icon">
      <Group2 />
      <Frame />
    </div>
  );
}

export default function Frame1() {
  return (
    <div className="content-stretch flex items-end justify-between relative size-full">
      <Icon />
    </div>
  );
}