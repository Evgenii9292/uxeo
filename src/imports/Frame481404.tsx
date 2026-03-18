import svgPaths from "./svg-5ih703wn5s";

function EllipseContainer1() {
  return (
    <div className="absolute inset-[-12.85%_-12.41%_-9.8%_-13.49%]" data-name="Ellipse Container">
      <div className="absolute inset-[-80.95%_-79.43%_-83.06%_-78.57%]">
        <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 288.964 277.214">
          <g id="Ellipse Container">
            <ellipse cx="144" cy="137.5" fill="var(--fill-0, #3B4549)" id="Ellipse 325" rx="56" ry="52.5" />
            <g filter="url(#filter0_dd_1_34)" id="Ellipse 1">
              <ellipse cx="144.482" cy="134.607" fill="url(#paint0_linear_1_34)" rx="44.482" ry="38.607" />
            </g>
          </g>
          <defs>
            <filter colorInterpolationFilters="sRGB" filterUnits="userSpaceOnUse" height="277.214" id="filter0_dd_1_34" width="288.964" x="0" y="0">
              <feFlood floodOpacity="0" result="BackgroundImageFix" />
              <feColorMatrix in="SourceAlpha" result="hardAlpha" type="matrix" values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 127 0" />
              <feOffset dy="7" />
              <feComposite in2="hardAlpha" operator="out" />
              <feColorMatrix type="matrix" values="0 0 0 0 0.137255 0 0 0 0 0.176471 0 0 0 0 0.192157 0 0 0 1 0" />
              <feBlend in2="BackgroundImageFix" mode="normal" result="effect1_dropShadow_1_34" />
              <feColorMatrix in="SourceAlpha" result="hardAlpha" type="matrix" values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 127 0" />
              <feOffset dy="4" />
              <feGaussianBlur stdDeviation="50" />
              <feComposite in2="hardAlpha" operator="out" />
              <feColorMatrix type="matrix" values="0 0 0 0 0.929412 0 0 0 0 0.576471 0 0 0 0 0.513726 0 0 0 0.5 0" />
              <feBlend in2="effect1_dropShadow_1_34" mode="normal" result="effect2_dropShadow_1_34" />
              <feBlend in="SourceGraphic" in2="effect2_dropShadow_1_34" mode="normal" result="shape" />
            </filter>
            <linearGradient gradientUnits="userSpaceOnUse" id="paint0_linear_1_34" x1="137.442" x2="104.009" y1="129.095" y2="190.495">
              <stop stopColor="#FF6B21" />
              <stop offset="1" stopColor="#994014" />
            </linearGradient>
          </defs>
        </svg>
      </div>
    </div>
  );
}

function EllipseContainer() {
  return (
    <div className="absolute contents inset-[-12.85%_-12.41%_-9.8%_-13.49%]" data-name="Ellipse Container">
      <EllipseContainer1 />
    </div>
  );
}

function Component202603041916291Vectorized() {
  return (
    <div className="absolute inset-[16.19%_23.73%_24.24%_22.32%]" data-name="Снимок экрана 2026-03-04 в 19.16.29 1 [Vectorized]">
      <svg className="absolute block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 48 51">
        <g id="Ð¡Ð½Ð¸Ð¼Ð¾Ðº ÑÐºÑÐ°Ð½Ð° 2026-03-04 Ð² 19.16.29 1 [Vectorized]">
          <path d={svgPaths.p307f1380} fill="var(--fill-0, #EFF1FB)" id="Vector" />
        </g>
      </svg>
    </div>
  );
}

function VerticalContainer() {
  return (
    <div className="content-stretch flex flex-col items-start relative shrink-0" data-name="Vertical Container">
      <p className="font-['Roboto_Condensed:ExtraBold',sans-serif] font-extrabold leading-[21px] relative shrink-0 text-[#c3c6d1] text-[24px] whitespace-nowrap">Цвет</p>
    </div>
  );
}

function HorizontalContainer() {
  return (
    <div className="content-stretch flex gap-[25px] items-center relative shrink-0" data-name="Horizontal Container">
      <div className="h-[85.607px] relative shrink-0 w-[88.964px]" data-name="Icon">
        <EllipseContainer />
        <Component202603041916291Vectorized />
      </div>
      <VerticalContainer />
    </div>
  );
}

export default function Frame() {
  return (
    <div className="content-stretch flex items-end justify-between relative size-full">
      <HorizontalContainer />
    </div>
  );
}