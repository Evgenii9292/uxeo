import React from "react";
import svgPaths from "./svg-gsjmmbdca2";
import imgImageColor from "figma:asset/848cc9d9d2ee375b005fbdca2522ab616019dc08.png";
import imgProgressRoot from "figma:asset/26538fa36de431bafc6c08e2a0d9cbdf819c30b9.png";

function TextContainer() {
  return (
    <div className="content-stretch flex flex-[1_0_0] flex-col gap-[25px] items-start min-h-px min-w-px relative text-[#232a2d]" data-name="Text Container">
      <p className="font-['Roboto_Condensed:Bold',sans-serif] font-bold leading-[27.5px] relative shrink-0 text-[26px] whitespace-nowrap">Цвет</p>
      <p className="font-['Roboto_Condensed:Medium',sans-serif] font-medium leading-[20px] relative shrink-0 text-[18px] w-[370px]">Базовые принципы цвета в интерфейсах: контраст, акцентные и нейтральные цвета.</p>
    </div>
  );
}

function ImageAndTextContainer() {
  return (
    <div className="content-stretch flex gap-[20px] items-start justify-end relative shrink-0 w-full" data-name="Image and Text Container">
      <div className="flex h-[110px] items-center justify-center relative shrink-0 w-[154px]" style={{ "--transform-inner-width": "1200", "--transform-inner-height": "19" } as React.CSSProperties}>
        <div className="-rotate-90 flex-none">
          <div className="h-[154px] relative w-[110px]" data-name="image_color">
            <div className="absolute inset-0 overflow-hidden pointer-events-none">
              <img alt="" className="absolute h-[100.81%] left-[-5.82%] max-w-none top-[-0.4%] w-[111.64%]" src={imgImageColor} />
            </div>
          </div>
        </div>
      </div>
      <TextContainer />
    </div>
  );
}

function ProgressTextContainer() {
  return (
    <div className="content-stretch flex font-['Roboto_Condensed:Medium',sans-serif] font-medium items-start justify-between leading-[20px] relative shrink-0 text-[#343e42] text-[16px] w-full whitespace-nowrap" data-name="Progress Text Container">
      <p className="relative shrink-0">Пройдено</p>
      <p className="relative shrink-0">0%</p>
    </div>
  );
}

function ProgressIndicator() {
  return <div className="h-[17px] rounded-[16777200px] shrink-0 w-[258px]" data-name="Progress.Indicator" style={{ backgroundImage: "linear-gradient(171.634deg, rgb(66, 78, 83) 54.135%, rgb(44, 53, 56) 85.747%)" }} />;
}

function ProgressRoot() {
  return (
    <div className="content-stretch flex flex-col h-[17px] items-start overflow-clip pl-[-111.75px] pr-[111.75px] relative rounded-[16777200px] shrink-0 w-full" data-name="Progress.Root">
      <img alt="" className="absolute inset-0 max-w-none object-cover pointer-events-none rounded-[16777200px] size-full" src={imgProgressRoot} />
      <ProgressIndicator />
    </div>
  );
}

function ProgressBarContainer() {
  return (
    <div className="content-stretch flex flex-col items-center justify-center relative shrink-0 w-full" data-name="Progress Bar Container">
      <ProgressRoot />
    </div>
  );
}

function ProgressContainer() {
  return (
    <div className="content-stretch flex flex-col gap-[10px] items-start relative shrink-0 w-full" data-name="Progress Container">
      <ProgressTextContainer />
      <ProgressBarContainer />
    </div>
  );
}

function IconsContainer() {
  return (
    <div className="content-stretch flex gap-[21px] items-center relative shrink-0" data-name="Icons Container">
      <div className="content-stretch flex gap-[5px] items-center justify-center relative shrink-0">
        <div className="overflow-clip relative shrink-0 size-[14px]" data-name="Icon/Face">
          <div className="absolute bottom-[37.5%] left-[27.08%] right-[60.42%] top-1/2" data-name="Vector">
            <svg className="absolute block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 1.75 1.75">
              <path d={svgPaths.p1388cf00} fill="var(--fill-0, #232A2D)" id="Vector" />
            </svg>
          </div>
          <div className="absolute inset-[2.08%_0_4.17%_0]" data-name="Vector">
            <svg className="absolute block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 14 13.125">
              <path d={svgPaths.pf7fd000} fill="var(--fill-0, #232A2D)" id="Vector" />
            </svg>
          </div>
          <div className="absolute bottom-[37.5%] left-[60.42%] right-[27.08%] top-1/2" data-name="Vector">
            <svg className="absolute block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 1.75 1.75">
              <path d={svgPaths.p1388cf00} fill="var(--fill-0, #232A2D)" id="Vector" />
            </svg>
          </div>
          <div className="absolute inset-[70.84%_36.46%_18.76%_36.46%]" data-name="Vector">
            <svg className="absolute block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 3.79188 1.45548">
              <path d={svgPaths.p1eb2aec0} fill="var(--fill-0, #232A2D)" id="Vector" />
            </svg>
          </div>
        </div>
        <p className="font-['Roboto_Condensed:Medium',sans-serif] font-medium leading-[20px] relative shrink-0 text-[#232a2d] text-[16px] whitespace-nowrap">Новичек</p>
      </div>
      <div className="content-stretch flex gap-[5px] items-center justify-center relative shrink-0">
        <div className="relative shrink-0 size-[14px]" data-name="Icon/Cube">
          <div className="absolute inset-[34.44%_32.72%_0_0]" data-name="Vector">
            <svg className="absolute block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 9.41954 9.17748">
              <path d={svgPaths.p21a3e380} fill="var(--fill-0, #232A2D)" id="Vector" />
            </svg>
          </div>
          <div className="absolute inset-[0_0_22.96%_21.06%]" data-name="Vector">
            <svg className="absolute block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 11.0523 10.7856">
              <path d={svgPaths.p2d337500} fill="var(--fill-0, #232A2D)" id="Vector" />
            </svg>
          </div>
        </div>
        <p className="font-['Roboto_Condensed:Medium',sans-serif] font-medium leading-[20px] relative shrink-0 text-[#232a2d] text-[16px] whitespace-nowrap">Квизы</p>
      </div>
    </div>
  );
}

function IconsAndXpContainer() {
  return (
    <div className="content-stretch flex items-center justify-between relative shrink-0 w-full" data-name="Icons and XP Container">
      <IconsContainer />
      <div className="content-stretch flex gap-[5px] items-center justify-center relative shrink-0">
        <div className="overflow-clip relative shrink-0 size-[14px]" data-name="Icon/zap">
          <div className="absolute inset-[0_7.14%]" data-name="Vector">
            <svg className="absolute block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 12 14">
              <path d={svgPaths.p91a8b80} fill="var(--fill-0, #232A2D)" id="Vector" />
            </svg>
          </div>
        </div>
        <p className="font-['Roboto_Condensed:Medium',sans-serif] font-medium leading-[20px] relative shrink-0 text-[#232a2d] text-[16px] whitespace-nowrap">+1250 XP</p>
      </div>
    </div>
  );
}

function Container() {
  return (
    <div className="bg-[#343e42] flex-[1_0_0] h-[60px] min-h-px min-w-px relative rounded-[24px]" data-name="Container">
      <div aria-hidden="true" className="absolute border border-[#57646a] border-solid inset-0 pointer-events-none rounded-[24px] shadow-[0px_5px_0px_0px_black]" />
      <div className="flex flex-row items-center justify-center size-full">
        <div className="content-stretch flex items-center justify-center px-[17px] py-px relative size-full">
          <p className="font-['Roboto_Condensed:Bold',sans-serif] font-bold leading-[27.5px] relative shrink-0 text-[#798589] text-[26px] whitespace-nowrap">Не доступно</p>
        </div>
      </div>
    </div>
  );
}

function ButtonsContainer() {
  return (
    <div className="content-stretch flex items-start relative shrink-0 w-full" data-name="Buttons Container">
      <Container />
    </div>
  );
}

function ActionsContainer() {
  return (
    <div className="content-stretch flex flex-col gap-[20px] items-start relative shrink-0 w-full" data-name="Actions Container">
      <IconsAndXpContainer />
      <ButtonsContainer />
    </div>
  );
}

function ProgressAndActionsContainer1() {
  return (
    <div className="content-stretch flex flex-col gap-[21px] items-start relative shrink-0 w-full" data-name="Progress and Actions Container">
      <ProgressContainer />
      <ActionsContainer />
    </div>
  );
}

function ProgressAndActionsContainer() {
  return (
    <div className="content-stretch flex flex-col items-start relative shrink-0 w-full" data-name="Progress and Actions Container">
      <ProgressAndActionsContainer1 />
    </div>
  );
}

export default function CourseCard() {
  return (
    <div className="content-stretch flex flex-col gap-[20px] items-end p-[35px] relative rounded-[24px] size-full" data-name="CourseCard" style={{ backgroundImage: "linear-gradient(146.391deg, rgb(172, 173, 178) 20.426%, rgb(184, 178, 172) 36.606%, rgb(128, 129, 134) 116.78%)" }}>
      <ImageAndTextContainer />
      <ProgressAndActionsContainer />
      <div className="absolute inset-0 pointer-events-none rounded-[inherit] shadow-[inset_-4px_0px_4px_0px_rgba(0,0,0,0.25),inset_4px_0px_4px_0px_rgba(0,0,0,0.25),inset_0px_-5px_4px_0px_rgba(0,0,0,0.25),inset_0px_4px_4px_0px_rgba(0,0,0,0.25)]" />
    </div>
  );
}