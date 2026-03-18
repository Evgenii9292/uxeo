import svgPaths from "./svg-n489d3jcsq";

function Group() {
  return (
    <div className="absolute h-[78.981px] left-0 top-0 w-[91px]">
      <div className="absolute inset-[0_0_-8.86%_0]">
        <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 91 85.9811">
          <g id="Group 1">
            <g filter="url(#filter0_d_6_930)" id="Ellipse 1">
              <ellipse cx="45.5" cy="39.4906" fill="url(#paint0_linear_6_930)" rx="45.5" ry="39.4906" />
            </g>
          </g>
          <defs>
            <filter colorInterpolationFilters="sRGB" filterUnits="userSpaceOnUse" height="85.9811" id="filter0_d_6_930" width="91" x="0" y="0">
              <feFlood floodOpacity="0" result="BackgroundImageFix" />
              <feColorMatrix in="SourceAlpha" result="hardAlpha" type="matrix" values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 127 0" />
              <feOffset dy="7" />
              <feComposite in2="hardAlpha" operator="out" />
              <feColorMatrix type="matrix" values="0 0 0 0 0.137255 0 0 0 0 0.176471 0 0 0 0 0.192157 0 0 0 1 0" />
              <feBlend in2="BackgroundImageFix" mode="normal" result="effect1_dropShadow_6_930" />
              <feBlend in="SourceGraphic" in2="effect1_dropShadow_6_930" mode="normal" result="shape" />
            </filter>
            <linearGradient gradientUnits="userSpaceOnUse" id="paint0_linear_6_930" x1="45.5" x2="45.5" y1="0" y2="78.9811">
              <stop stopColor="#5F7F3B" />
              <stop offset="1" stopColor="#3F5526" />
            </linearGradient>
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
    <div className="absolute h-[32.253px] left-[31.1px] top-[23.04px] w-[27.646px]" data-name="Снимок экрана 2026-03-03 в 21.05.06 1 [Vectorized]">
      <svg className="absolute block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 27.6456 32.2532">
        <g clipPath="url(#clip0_1_38)" id="Icon">
          <path d={svgPaths.p37310e80} fill="var(--fill-0, #EFF1FB)" id="Vector" opacity="0.7" />
        </g>
        <defs>
          <clipPath id="clip0_1_38">
            <rect fill="white" height="32.2532" width="27.6456" />
          </clipPath>
        </defs>
      </svg>
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