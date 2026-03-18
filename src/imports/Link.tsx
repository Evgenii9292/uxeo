import svgPaths from "./svg-r42rgjsncr";

function Group1() {
  return (
    <div className="absolute inset-[68.75%_39.84%_0_28.91%]" data-name="Group">
      <svg className="absolute block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 6.25 6.25">
        <g id="Group">
          <path d={svgPaths.p2ba58980} fill="var(--fill-0, #FFD845)" id="Vector" />
        </g>
      </svg>
    </div>
  );
}

function Group2() {
  return (
    <div className="absolute inset-[68.75%_39.84%_0_44.53%]" data-name="Group">
      <svg className="absolute block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 3.125 6.25">
        <g id="Group">
          <path d={svgPaths.p26e5800} fill="var(--fill-0, #FF9D21)" id="Vector" />
        </g>
      </svg>
    </div>
  );
}

function Group3() {
  return (
    <div className="absolute inset-[0_15.04%_12.7%_4.1%]" data-name="Group">
      <svg className="absolute block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 16.1719 17.4609">
        <g id="Group">
          <path d={svgPaths.p444ce00} fill="url(#paint0_linear_134_730)" id="Vector" />
        </g>
        <defs>
          <linearGradient gradientUnits="userSpaceOnUse" id="paint0_linear_134_730" x1="8.08594" x2="8.08594" y1="0" y2="17.4609">
            <stop stopColor="#FFB121" />
          </linearGradient>
        </defs>
      </svg>
    </div>
  );
}

function Group4() {
  return (
    <div className="absolute inset-[0_15.04%_12.7%_44.53%]" data-name="Group">
      <svg className="absolute block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 8.08594 17.4609">
        <g id="Group">
          <path d={svgPaths.p1ca20b00} fill="var(--fill-0, #FFD845)" id="Vector" />
        </g>
      </svg>
    </div>
  );
}

function Group5() {
  return (
    <div className="absolute inset-[14.26%_4.1%_42.38%_52.54%]" data-name="Group">
      <svg className="absolute block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 8.67188 8.67188">
        <g id="Group">
          <path d={svgPaths.p2032cb00} fill="var(--fill-0, #FF6B21)" id="Vector" />
        </g>
      </svg>
    </div>
  );
}

function Group6() {
  return (
    <div className="absolute inset-[14.26%_4.1%_42.38%_74.22%]" data-name="Group">
      <svg className="absolute block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 4.33594 8.67188">
        <g id="Group">
          <path d={svgPaths.p17e9e800} fill="var(--fill-0, #FF3838)" id="Vector" />
        </g>
      </svg>
    </div>
  );
}

function Group7() {
  return (
    <div className="absolute inset-[25.2%_22.85%_53.32%_68.16%]" data-name="Group">
      <svg className="absolute block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 1.79705 4.29688">
        <g id="Group">
          <path d={svgPaths.p3d024e00} fill="var(--fill-0, #F9F9F9)" id="Vector" />
        </g>
      </svg>
    </div>
  );
}

function Group8() {
  return (
    <div className="absolute inset-[25.2%_22.85%_53.32%_74.22%]" data-name="Group">
      <svg className="absolute block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 0.585938 4.29688">
        <g id="Group">
          <path d={svgPaths.p3c51e0c0} fill="var(--fill-0, #E2DFF4)" id="Vector" />
        </g>
      </svg>
    </div>
  );
}

function Group() {
  return (
    <div className="absolute contents inset-[0_4.1%]" data-name="Group">
      <Group1 />
      <Group2 />
      <Group3 />
      <Group4 />
      <Group5 />
      <Group6 />
      <Group7 />
      <Group8 />
    </div>
  );
}

export default function Link() {
  return (
    <div className="content-stretch flex gap-[10px] items-center px-[20px] py-[14px] relative rounded-[14px] size-full" data-name="Link">
      <div className="overflow-clip relative shrink-0 size-[20px]" data-name="Icon/notification">
        <Group />
      </div>
      <p className="font-['Roboto_Condensed:Medium',sans-serif] font-medium leading-[21px] relative shrink-0 text-[#f1f2fb] text-[18px] whitespace-nowrap">Уведомления</p>
    </div>
  );
}