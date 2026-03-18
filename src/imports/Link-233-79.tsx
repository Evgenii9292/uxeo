import React from "react";
import svgPaths from "./svg-tqmhaay2gk";

function IconContainer() {
  return (
    <div className="h-[26px] relative shrink-0 w-[17.333px]" data-name="Icon Container">
      <svg className="absolute block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 17.3333 25.9993">
        <g id="Icon Container">
          <path d={svgPaths.p347c500} fill="var(--fill-0, #24CB71)" id="Vector" />
          <path d={svgPaths.p3fbbce10} fill="var(--fill-0, #FF7237)" id="Vector_2" />
          <path d={svgPaths.p1ef91300} fill="var(--fill-0, #00B6FF)" id="Vector_3" />
          <path d={svgPaths.p1468cc00} fill="var(--fill-0, #FF3737)" id="Vector_4" />
          <path d={svgPaths.p15fb1b00} fill="var(--fill-0, #874FFF)" id="Vector_5" />
        </g>
      </svg>
    </div>
  );
}

function Container() {
  return (
    <div className="bg-[#465256] content-stretch flex items-center justify-center relative rounded-[16px] shrink-0 size-[48px]" data-name="Container">
      <IconContainer />
    </div>
  );
}

function Svg() {
  return (
    <div className="h-[59.077px] relative w-[55.385px]" data-name="svg">
      <svg className="absolute block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 55.3846 59.0769">
        <g id="svg">
          <path d={svgPaths.p331c3e00} id="Vector" stroke="var(--stroke-0, #4B595F)" strokeWidth="4.14602" />
        </g>
      </svg>
    </div>
  );
}

function Container2() {
  return (
    <div className="absolute content-stretch flex h-[53.538px] items-center justify-center left-[2.77px] top-[-0.69px] w-[59.077px]" data-name="Container">
      <p className="font-['Roboto_Condensed:Bold',sans-serif] font-bold leading-[15.231px] relative shrink-0 text-[#a6a6a6] text-[14px] whitespace-nowrap">0/10</p>
    </div>
  );
}

function Container1() {
  return (
    <div className="h-[59.077px] relative shrink-0 w-[60px]" data-name="Container">
      <div className="absolute flex h-[55.385px] items-center justify-center left-[2.77px] top-[-1.62px] w-[59.077px]" style={{ "--transform-inner-width": "1200", "--transform-inner-height": "19" } as React.CSSProperties}>
        <div className="-rotate-90 flex-none">
          <Svg />
        </div>
      </div>
      <Container2 />
    </div>
  );
}

function Frame() {
  return (
    <div className="content-stretch flex items-start justify-between relative shrink-0 w-full">
      <Container />
      <Container1 />
    </div>
  );
}

function HeaderContainer() {
  return (
    <div className="content-stretch flex flex-col items-start relative shrink-0 w-full" data-name="Header Container">
      <Frame />
    </div>
  );
}

function TextContainer() {
  return (
    <div className="content-stretch flex flex-[1_0_0] flex-col gap-[5px] items-start justify-center min-h-px min-w-px relative text-[18px]" data-name="Text Container">
      <p className="font-['Roboto_Condensed:Bold',sans-serif] font-bold leading-[22.5px] relative shrink-0 text-[#f1f2fb] whitespace-nowrap">Недельные вызовы</p>
      <p className="font-['Roboto_Condensed:Regular',sans-serif] font-normal leading-[20px] min-w-full relative shrink-0 text-[#798589] w-[min-content]">Практические задания в Figma</p>
    </div>
  );
}

function ProgressContainer() {
  return (
    <div className="content-stretch flex gap-[30px] h-[20px] items-center justify-end relative shrink-0" data-name="Progress Container">
      <div className="flex items-center justify-center relative shrink-0">
        <div className="-scale-y-100 flex-none rotate-180">
          <div className="h-[14px] relative w-[7px]">
            <div className="absolute inset-[-10.71%_-21.43%_-10.71%_-4.86%]">
              <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 8.8402 17">
                <path d={svgPaths.pa692300} id="Vector 5" stroke="var(--stroke-0, #798589)" strokeLinecap="round" strokeWidth="3" />
              </svg>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

function Frame1() {
  return (
    <div className="content-stretch flex gap-[20px] items-end justify-end relative shrink-0 w-full">
      <TextContainer />
      <ProgressContainer />
    </div>
  );
}

export default function Link() {
  return (
    <div className="bg-[#343e42] content-stretch flex flex-col items-start p-[20px] relative rounded-[24px] size-full" data-name="Link">
      <HeaderContainer />
      <Frame1 />
    </div>
  );
}