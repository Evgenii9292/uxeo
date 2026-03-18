import svgPaths from "./svg-8gndfmkeix";
import img from "figma:asset/37b03ce2843652115e411393e9c4b0ec688ae162.png";

function Group() {
  return (
    <div className="col-1 h-[78.981px] ml-0 mt-0 relative row-1 w-[91px]">
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
      <p className="bg-center bg-clip-text bg-cover bg-no-repeat font-['Roboto_Condensed:Regular',sans-serif] font-normal leading-[21px] relative shrink-0 text-[22px] text-[transparent] whitespace-nowrap" style={{ backgroundImage: `url('${img}')` }}>
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