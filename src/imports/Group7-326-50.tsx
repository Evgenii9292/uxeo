import svgPaths from "./svg-7tw6k57ebg";

function FreeIconYes() {
  return (
    <div className="relative shrink-0 size-[24px]" data-name="free-icon-yes-9426997 1">
      <svg className="absolute block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 24 24">
        <g id="free-icon-yes-9426997 1">
          <path d={svgPaths.p1868b300} id="Vector" stroke="url(#paint0_linear_323_149)" strokeLinecap="round" strokeWidth="5" />
        </g>
        <defs>
          <linearGradient gradientUnits="userSpaceOnUse" id="paint0_linear_323_149" x1="20.5" x2="18.6677" y1="6.5" y2="36.2261">
            <stop stopColor="#93E33C" />
            <stop offset="1" stopColor="#93E33C" />
          </linearGradient>
        </defs>
      </svg>
    </div>
  );
}

function Container() {
  return (
    <div className="absolute content-stretch flex items-center left-[34px] top-[27px]" data-name="Container">
      <FreeIconYes />
    </div>
  );
}

function Group() {
  return (
    <div className="absolute contents left-0 top-0">
      <div className="absolute h-[78.981px] left-0 top-0 w-[91px]">
        <div className="absolute inset-[0_0_-8.86%_0]">
          <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 91 85.9811">
            <g filter="url(#filter0_d_323_126)" id="Ellipse 1">
              <ellipse cx="45.5" cy="39.4906" fill="var(--fill-0, #5F7F3B)" rx="45.5" ry="39.4906" />
            </g>
            <defs>
              <filter colorInterpolationFilters="sRGB" filterUnits="userSpaceOnUse" height="85.9811" id="filter0_d_323_126" width="91" x="0" y="0">
                <feFlood floodOpacity="0" result="BackgroundImageFix" />
                <feColorMatrix in="SourceAlpha" result="hardAlpha" type="matrix" values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 127 0" />
                <feOffset dy="7" />
                <feComposite in2="hardAlpha" operator="out" />
                <feColorMatrix type="matrix" values="0 0 0 0 0.20515 0 0 0 0 0.281569 0 0 0 0 0.119178 0 0 0 1 0" />
                <feBlend in2="BackgroundImageFix" mode="normal" result="effect1_dropShadow_323_126" />
                <feBlend in="SourceGraphic" in2="effect1_dropShadow_323_126" mode="normal" result="shape" />
              </filter>
            </defs>
          </svg>
        </div>
      </div>
      <Container />
      <div className="absolute h-[79px] left-0 top-0 w-[91px]">
        <svg className="absolute block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 91 79">
          <path d={svgPaths.p145b6a00} id="Ellipse 3" stroke="var(--stroke-0, #6DA233)" strokeLinecap="round" strokeWidth="5" />
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

export default function Group2() {
  return (
    <div className="relative size-full">
      <Group1 />
    </div>
  );
}