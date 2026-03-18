import svgPaths from "./svg-exgskhubqd";
import img from "figma:asset/1e836a979b52b9117bb9bbad3359c21183ba46fb.png";

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
    <div className="col-1 content-stretch flex items-center ml-[34px] mt-[27px] relative row-1" data-name="Container">
      <FreeIconYes />
    </div>
  );
}

function Group() {
  return (
    <div className="col-1 grid-cols-[max-content] grid-rows-[max-content] inline-grid ml-0 mt-0 place-items-start relative row-1">
      <div className="col-1 h-[78.981px] ml-0 mt-0 relative row-1 w-[91px]">
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
      <div className="col-1 h-[79px] ml-0 mt-0 relative row-1 w-[91px]">
        <svg className="absolute block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 91 79">
          <path d={svgPaths.p145b6a00} id="Ellipse 3" stroke="var(--stroke-0, #6DA233)" strokeLinecap="round" strokeWidth="5" />
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

function Group2() {
  return (
    <div className="grid-cols-[max-content] grid-rows-[max-content] inline-grid leading-[0] place-items-start relative shrink-0">
      <Group1 />
    </div>
  );
}

function Frame() {
  return (
    <div className="content-stretch flex flex-col items-start relative shrink-0">
      <p className="bg-center bg-clip-text bg-cover bg-no-repeat font-['Roboto_Condensed:Regular',sans-serif] font-normal leading-[21px] relative shrink-0 text-[22px] text-[transparent] whitespace-nowrap" style={{ backgroundImage: `url('${img}')` }}>
        Иерархия
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