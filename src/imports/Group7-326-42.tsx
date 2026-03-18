import svgPaths from "./svg-qg70pjuj4k";

function Group() {
  return (
    <div className="absolute h-[78.981px] left-0 top-0 w-[91px]">
      <div className="absolute inset-[-0.63%_-0.55%_-8.86%_-0.55%]">
        <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 92 86.481">
          <g id="Group 1">
            <g filter="url(#filter0_d_323_169)" id="Ellipse 1">
              <ellipse cx="46" cy="39.9905" fill="var(--fill-0, #5F7F3B)" rx="45.5" ry="39.4906" />
            </g>
            <path d={svgPaths.p22433e80} id="Ellipse 2" stroke="var(--stroke-0, #6DA233)" strokeLinecap="round" strokeWidth="5" />
          </g>
          <defs>
            <filter colorInterpolationFilters="sRGB" filterUnits="userSpaceOnUse" height="85.9811" id="filter0_d_323_169" width="91" x="0.5" y="0.499892">
              <feFlood floodOpacity="0" result="BackgroundImageFix" />
              <feColorMatrix in="SourceAlpha" result="hardAlpha" type="matrix" values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 127 0" />
              <feOffset dy="7" />
              <feComposite in2="hardAlpha" operator="out" />
              <feColorMatrix type="matrix" values="0 0 0 0 0.20515 0 0 0 0 0.281569 0 0 0 0 0.119178 0 0 0 1 0" />
              <feBlend in2="BackgroundImageFix" mode="normal" result="effect1_dropShadow_323_169" />
              <feBlend in="SourceGraphic" in2="effect1_dropShadow_323_169" mode="normal" result="shape" />
            </filter>
          </defs>
        </svg>
      </div>
    </div>
  );
}

function Group1() {
  return (
    <div className="absolute contents left-0 top-0">
      <Group />
    </div>
  );
}

function Component202603032105061Vectorized() {
  return (
    <div className="absolute h-[62px] left-[9px] overflow-clip top-[8px] w-[70px]" data-name="Снимок экрана 2026-03-03 в 21.05.06 1 [Vectorized]">
      <p className="absolute font-['Roboto_Condensed:ExtraBold',sans-serif] font-extrabold inset-[35.48%_21.43%_35.48%_31.43%] leading-[17.182px] text-[19.636px] text-[transparent] whitespace-nowrap">75%</p>
    </div>
  );
}

export default function Group2() {
  return (
    <div className="relative size-full">
      <Group1 />
      <Component202603032105061Vectorized />
    </div>
  );
}