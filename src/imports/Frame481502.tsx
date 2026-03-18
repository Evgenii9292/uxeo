import React from "react";
import svgPaths from "./svg-30wfd329yn";

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

function Frame5() {
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
      <Frame5 />
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

function Frame6() {
  return (
    <div className="content-stretch flex gap-[20px] items-end justify-end relative shrink-0 w-full">
      <TextContainer />
      <ProgressContainer />
    </div>
  );
}

function Link() {
  return (
    <div className="bg-[#343e42] relative rounded-[24px] shrink-0 w-full" data-name="Link">
      <div className="content-stretch flex flex-col items-start p-[20px] relative w-full">
        <HeaderContainer />
        <Frame6 />
      </div>
    </div>
  );
}

function XpContainer() {
  return (
    <div className="relative shrink-0" data-name="XP Container">
      <div className="bg-clip-padding border-0 border-[transparent] border-solid content-stretch flex gap-[5px] items-center relative">
        <div className="relative shrink-0 size-[9px]" data-name="Vector">
          <div className="absolute inset-[-7.41%]">
            <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 10.3333 10.3333">
              <path d={svgPaths.p28187d00} fill="var(--fill-0, #A6A6A6)" id="Vector" stroke="var(--stroke-0, #A6A6A6)" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.33333" />
            </svg>
          </div>
        </div>
        <p className="font-['Roboto_Condensed:Bold',sans-serif] font-bold leading-[0] relative shrink-0 text-[#f1f2fb] text-[0px] text-[18px] whitespace-nowrap">
          <span className="leading-[20px] text-[#a6a6a6]">1250</span>
          <span className="leading-[20px]">{` `}</span>
          <span className="leading-[20px]">{`/ 2000 XP `}</span>
        </p>
      </div>
    </div>
  );
}

function ProgressIndicator() {
  return <div className="bg-gradient-to-b from-[#ff6b21] h-[10px] rounded-[24px] shrink-0 to-[#994014] w-[219px]" data-name="Progress.Indicator" />;
}

function ProgressRoot() {
  return (
    <div className="content-stretch flex flex-col h-[10px] items-start overflow-clip pl-[-111.75px] pr-[111.75px] relative rounded-[16777200px] shrink-0 w-full" data-name="Progress.Root" style={{ backgroundImage: "linear-gradient(178.396deg, rgb(44, 52, 56) 14.367%, rgb(46, 57, 62) 147.74%)" }}>
      <ProgressIndicator />
    </div>
  );
}

function ProgressBarContainer() {
  return (
    <div className="content-stretch flex flex-col h-[10px] items-start justify-center relative shrink-0 w-full" data-name="Progress Bar Container">
      <ProgressRoot />
    </div>
  );
}

function LabelsContainer() {
  return (
    <div className="content-stretch flex font-['Roboto_Condensed:Bold',sans-serif] font-bold h-[17px] items-start justify-between leading-[22.5px] relative shrink-0 text-[#a6a6a6] text-[18px] w-full whitespace-nowrap" data-name="Labels Container">
      <p className="relative shrink-0">0</p>
      <p className="relative shrink-0">2000</p>
    </div>
  );
}

function Frame1() {
  return (
    <div className="content-stretch flex flex-[1_0_0] flex-col gap-[8px] items-start min-h-px min-w-px relative">
      <ProgressBarContainer />
      <LabelsContainer />
    </div>
  );
}

function Group() {
  return (
    <div className="absolute h-[32.827px] left-0 top-0 w-[32.731px]">
      <svg className="absolute block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 22.6604 22.7263">
        <g id="Group 481325">
          <path d={svgPaths.p300b3300} fill="var(--fill-0, #FF6B21)" id="Vector" />
          <path d={svgPaths.p1a742c00} fill="var(--fill-0, #353E41)" id="Vector_2" />
          <path d={svgPaths.p31917400} fill="var(--fill-0, #2572D0)" id="Vector_3" />
          <path d={svgPaths.pd217d00} fill="var(--fill-0, #2572D0)" id="Vector_4" />
          <path d={svgPaths.p20832600} fill="var(--fill-0, #2572D0)" id="Vector_5" />
          <path d={svgPaths.pf4a7400} fill="var(--fill-0, #21589C)" id="Vector_6" />
          <path d={svgPaths.p256c1200} fill="var(--fill-0, #353E41)" id="Vector_7" />
          <path d={svgPaths.p2b096340} fill="var(--fill-0, #353E41)" id="Vector_8" />
          <path d={svgPaths.p1ac87b80} fill="var(--fill-0, #2572D0)" id="Vector_9" />
          <path d={svgPaths.p619e5f0} fill="var(--fill-0, #2572D0)" id="Vector_10" />
          <path d={svgPaths.p23959380} fill="var(--fill-0, #353E41)" id="Vector_11" />
        </g>
      </svg>
    </div>
  );
}

function Frame() {
  return (
    <div className="absolute h-[32.826px] left-[2.89px] top-[1.9px] w-[32.731px]">
      <Group />
    </div>
  );
}

function Frame3() {
  return (
    <div className="content-stretch flex h-[57px] items-center relative shrink-0">
      <div className="overflow-clip relative shrink-0 size-[26px]">
        <Frame />
      </div>
    </div>
  );
}

function XpProgressCard() {
  return (
    <div className="bg-[#343e42] h-[152px] relative rounded-[24px] shrink-0 w-full" data-name="XP_ProgressCard">
      <div className="flex flex-col items-center size-full">
        <div className="content-stretch flex flex-col items-center justify-between p-[20px] relative size-full">
          <div className="content-stretch flex flex-col gap-[5px] items-start relative shrink-0 w-full" data-name="Card Header">
            <p className="font-['Roboto_Condensed:Bold',sans-serif] font-bold leading-[20px] relative shrink-0 text-[#f1f7fb] text-[18px] whitespace-nowrap">До открытия лиги</p>
            <XpContainer />
          </div>
          <div className="content-stretch flex gap-[20px] h-[53px] items-end relative shrink-0 w-full">
            <Frame1 />
            <Frame3 />
          </div>
        </div>
      </div>
    </div>
  );
}

function XpContainer1() {
  return (
    <div className="relative shrink-0" data-name="XP Container">
      <div className="bg-clip-padding border-0 border-[transparent] border-solid content-stretch flex gap-[5px] items-center relative">
        <div className="relative shrink-0 size-[9px]" data-name="Vector">
          <div className="absolute inset-[-7.41%]">
            <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 10.3333 10.3333">
              <path d={svgPaths.p28187d00} fill="var(--fill-0, #A6A6A6)" id="Vector" stroke="var(--stroke-0, #A6A6A6)" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.33333" />
            </svg>
          </div>
        </div>
        <p className="font-['Roboto_Condensed:Bold',sans-serif] font-bold leading-[0] relative shrink-0 text-[#f1f2fb] text-[0px] text-[18px] whitespace-nowrap">
          <span className="leading-[20px] text-[#798589]">{`Получить `}</span>
          <span className="leading-[20px]">10 PX</span>
        </p>
      </div>
    </div>
  );
}

function ProgressIndicator1() {
  return <div className="bg-gradient-to-b from-[#ff6b21] h-[10px] rounded-[24px] shrink-0 to-[#994014] w-[219px]" data-name="Progress.Indicator" />;
}

function ProgressRoot1() {
  return (
    <div className="content-stretch flex flex-col h-[10px] items-start overflow-clip pl-[-111.75px] pr-[111.75px] relative rounded-[16777200px] shrink-0 w-full" data-name="Progress.Root" style={{ backgroundImage: "linear-gradient(178.396deg, rgb(44, 52, 56) 14.367%, rgb(46, 57, 62) 147.74%)" }}>
      <ProgressIndicator1 />
    </div>
  );
}

function ProgressBarContainer1() {
  return (
    <div className="content-stretch flex flex-col h-[10px] items-start justify-center relative shrink-0 w-full" data-name="Progress Bar Container">
      <ProgressRoot1 />
    </div>
  );
}

function LabelsContainer1() {
  return (
    <div className="content-stretch flex font-['Roboto_Condensed:Bold',sans-serif] font-bold h-[17px] items-start justify-between leading-[22.5px] relative shrink-0 text-[#a6a6a6] text-[18px] w-full whitespace-nowrap" data-name="Labels Container">
      <p className="relative shrink-0">0</p>
      <p className="relative shrink-0">10</p>
    </div>
  );
}

function Frame2() {
  return (
    <div className="content-stretch flex flex-[1_0_0] flex-col gap-[8px] items-start min-h-px min-w-px relative">
      <ProgressBarContainer1 />
      <LabelsContainer1 />
    </div>
  );
}

function Frame4() {
  return (
    <div className="content-stretch flex h-[57px] items-center relative shrink-0">
      <div className="relative shrink-0 size-[26px]">
        <div className="absolute inset-[4.19%_0_39.95%_11.41%]" data-name="Vector">
          <svg className="absolute block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 23.033 14.5243">
            <path d={svgPaths.p3bdf3b80} fill="var(--fill-0, #F6F6F5)" id="Vector" />
          </svg>
        </div>
        <div className="absolute inset-[17.37%_0_43.27%_49.77%]" data-name="Vector">
          <svg className="absolute block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 13.0593 10.2331">
            <path d={svgPaths.p197c5b00} fill="var(--fill-0, #F6F6F5)" id="Vector" />
          </svg>
        </div>
        <div className="absolute inset-[42.83%_21.79%_43.28%_49.77%]" data-name="Vector">
          <svg className="absolute block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 7.39335 3.61036">
            <path d={svgPaths.p1cf30600} fill="var(--fill-0, #282727)" id="Vector" />
          </svg>
        </div>
        <div className="absolute inset-[17.37%_5.32%_67.38%_81.19%]" data-name="Vector">
          <svg className="absolute block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 3.50717 3.9664">
            <path d={svgPaths.p1f5d3940} fill="var(--fill-0, #282727)" id="Vector" />
          </svg>
        </div>
        <div className="absolute inset-[36.34%_0_48.35%_87.5%]" data-name="Vector">
          <svg className="absolute block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 3.25091 3.98076">
            <path d={svgPaths.p3b6d5f00} fill="var(--fill-0, #282727)" id="Vector" />
          </svg>
        </div>
        <div className="absolute inset-[34.95%_30.27%_53.01%_56.65%]" data-name="Vector">
          <svg className="absolute block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 3.40163 3.12854">
            <path d={svgPaths.p3ee40400} fill="var(--fill-0, #282727)" id="Vector" />
          </svg>
        </div>
        <div className="absolute inset-[32.7%_12.71%_53.98%_72.16%]" data-name="Vector">
          <svg className="absolute block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 3.9334 3.46375">
            <path d={svgPaths.p144c5a70} fill="var(--fill-0, #282727)" id="Vector" />
          </svg>
        </div>
        <div className="absolute inset-[4.19%_18.81%_56.33%_26.73%]" data-name="Vector">
          <svg className="absolute block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 14.1587 10.2652">
            <path d={svgPaths.p14f2a80} fill="var(--fill-0, #282727)" id="Vector" />
          </svg>
        </div>
        <div className="absolute inset-[14.42%_39.17%_72.39%_47.79%]" data-name="Vector">
          <svg className="absolute block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 3.39163 3.42782">
            <path d={svgPaths.p1d090a80} fill="var(--fill-0, #282727)" id="Vector" />
          </svg>
        </div>
        <div className="absolute inset-[17.6%_31.07%_72.25%_60.07%]" data-name="Vector">
          <svg className="absolute block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 2.30547 2.63909">
            <path d={svgPaths.p2bd59ae0} fill="var(--fill-0, #F6F6F5)" id="Vector" />
          </svg>
        </div>
        <div className="absolute inset-[43.77%_60.27%_39.94%_21.95%]" data-name="Vector">
          <svg className="absolute block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 4.62286 4.23464">
            <path d={svgPaths.p2191ed00} fill="var(--fill-0, #282727)" id="Vector" />
          </svg>
        </div>
        <div className="absolute inset-[6.31%_73.3%_78.92%_11.41%]" data-name="Vector">
          <svg className="absolute block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 3.97385 3.83901">
            <path d={svgPaths.p150e3500} fill="var(--fill-0, #282727)" id="Vector" />
          </svg>
        </div>
        <div className="absolute inset-[24.9%_66.81%_60.6%_18.21%]" data-name="Vector">
          <svg className="absolute block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 3.89424 3.76971">
            <path d={svgPaths.p129d4b80} fill="var(--fill-0, #282727)" id="Vector" />
          </svg>
        </div>
        <div className="absolute inset-[1.21%_57.46%_5.67%_0]" data-name="Vector">
          <svg className="absolute block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 11.0599 24.2103">
            <path d={svgPaths.p1d3c6e00} fill="var(--fill-0, #2C83FB)" id="Vector" />
          </svg>
        </div>
        <div className="absolute inset-[22.78%_75.16%_49.84%_14.57%]" data-name="Vector">
          <svg className="absolute block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 2.67028 7.11719">
            <path d={svgPaths.pf717300} fill="var(--fill-0, #E7E6E7)" id="Vector" />
          </svg>
        </div>
        <div className="absolute inset-[93.82%_57.6%_5.67%_20.1%]" data-name="Vector">
          <svg className="absolute block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 5.79958 0.132892">
            <path d={svgPaths.p10e84b80} fill="var(--fill-0, #060404)" id="Vector" />
          </svg>
        </div>
        <div className="absolute inset-[3.27%_94.22%_93.48%_1.99%]" data-name="Vector">
          <svg className="absolute block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 0.98547 0.84669">
            <path d={svgPaths.p932100} fill="var(--fill-0, #174CC1)" id="Vector" />
          </svg>
        </div>
        <div className="absolute inset-[0_8.19%_76.79%_75.1%]" data-name="Vector">
          <svg className="absolute block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 4.34506 6.03392">
            <path d={svgPaths.p3e31a500} fill="var(--fill-0, #F6F6F5)" id="Vector" />
          </svg>
        </div>
        <div className="absolute inset-[0_11.05%_86.24%_75.1%]" data-name="Vector">
          <svg className="absolute block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 3.60203 3.57685">
            <path d={svgPaths.p328c7e00} fill="var(--fill-0, #282727)" id="Vector" />
          </svg>
        </div>
        <div className="absolute inset-[93.76%_43.82%_0_7.43%]" data-name="Vector">
          <svg className="absolute block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 12.6746 1.62366">
            <path d={svgPaths.p2bed0480} fill="var(--fill-0, #282727)" id="Vector" />
          </svg>
        </div>
        <div className="absolute inset-[99.47%_43.82%_0.01%_7.43%]" data-name="Vector">
          <svg className="absolute block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 12.6746 0.134884">
            <path d={svgPaths.p2be75e00} fill="var(--fill-0, #060404)" id="Vector" />
          </svg>
        </div>
        <div className="absolute inset-[93.76%_52.46%_0.37%_40.62%]" data-name="Vector">
          <svg className="absolute block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 1.79762 1.52777">
            <path d={svgPaths.p2d2fa100} fill="var(--fill-0, #282727)" id="Vector" />
          </svg>
        </div>
        <div className="absolute inset-[23.81%_36.34%_63.01%_50.62%]">
          <svg className="absolute block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 3.39081 3.42522">
            <path d={svgPaths.p2de1f440} fill="var(--fill-0, #F6F6F5)" id="Vector 2" />
          </svg>
        </div>
        <div className="absolute inset-[45.76%_28.51%_43.02%_58.45%]">
          <svg className="absolute block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 3.39081 2.91778">
            <path d={svgPaths.p36c916c0} fill="var(--fill-0, #F6F6F5)" id="Vector 3" />
          </svg>
        </div>
        <div className="absolute inset-[6.24%_41.55%_82.54%_45.4%]">
          <svg className="absolute block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 3.39081 2.91778">
            <path d={svgPaths.p36c916c0} fill="var(--fill-0, #F6F6F5)" id="Vector 3" />
          </svg>
        </div>
      </div>
    </div>
  );
}

function Container3() {
  return (
    <div className="bg-[#343e42] h-[152px] relative rounded-[24px] shrink-0 w-full" data-name="Container">
      <div className="flex flex-col items-center size-full">
        <div className="content-stretch flex flex-col items-center justify-between p-[20px] relative size-full">
          <div className="content-stretch flex flex-col gap-[5px] items-start relative shrink-0 w-full" data-name="Card Header">
            <p className="font-['Roboto_Condensed:Bold',sans-serif] font-bold leading-[20px] relative shrink-0 text-[#f1f7fb] text-[18px] whitespace-nowrap">Задание дня</p>
            <XpContainer1 />
          </div>
          <div className="content-stretch flex gap-[20px] h-[53px] items-end relative shrink-0 w-full">
            <Frame2 />
            <Frame4 />
          </div>
        </div>
      </div>
    </div>
  );
}

function CardsContainer() {
  return (
    <div className="content-stretch flex flex-col gap-[20px] items-start relative shrink-0 w-full" data-name="Cards Container">
      <XpProgressCard />
      <Container3 />
    </div>
  );
}

function MainContainer() {
  return (
    <div className="content-stretch flex flex-col gap-[20px] items-start relative shrink-0 w-full" data-name="Main Container">
      <Link />
      <CardsContainer />
    </div>
  );
}

function Component202603041916291Vectorized() {
  return (
    <div className="h-[41px] relative shrink-0 w-[28px]" data-name="Снимок экрана 2026-03-04 в 19.16.29 1 [Vectorized]">
      <svg className="absolute block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 28 41">
        <g id="Ð¡Ð½Ð¸Ð¼Ð¾Ðº ÑÐºÑÐ°Ð½Ð° 2026-03-04 Ð² 19.16.29 1 [Vectorized]">
          <path d={svgPaths.p1c93cf00} fill="var(--fill-0, #F7F8FC)" id="Vector" />
        </g>
      </svg>
    </div>
  );
}

function Container5() {
  return (
    <div className="bg-[#d65e43] h-[28.585px] relative rounded-[12296925px] shrink-0" data-name="Container">
      <div className="bg-clip-padding border-0 border-[transparent] border-solid content-stretch flex h-full items-center justify-center px-[11.727px] relative">
        <p className="font-['Inter:Semi_Bold',sans-serif] font-medium leading-[15.392px] not-italic relative shrink-0 text-[#eef5ff] text-[10.261px] whitespace-nowrap">+125 XP</p>
      </div>
    </div>
  );
}

function Container4() {
  return (
    <div className="bg-[#ff5d39] h-[86px] relative rounded-[24px] shrink-0 w-full" data-name="Container">
      <div aria-hidden="true" className="absolute border-[#ff390d] border-[0.835px] border-solid inset-0 pointer-events-none rounded-[24px] shadow-[0px_4.174px_0px_0px_#c24226]" />
      <div className="flex flex-row items-center justify-center size-full">
        <div className="content-stretch flex gap-[6.678px] items-center justify-center px-[25.835px] py-[0.835px] relative size-full">
          <Component202603041916291Vectorized />
          <p className="font-['Roboto_Condensed:Bold',sans-serif] font-bold leading-[27.5px] relative shrink-0 text-[#f4f5fc] text-[26px] whitespace-nowrap">Начать квиз</p>
          <Container5 />
        </div>
      </div>
    </div>
  );
}

export default function Frame7() {
  return (
    <div className="content-stretch flex flex-col gap-[19px] items-start relative size-full">
      <MainContainer />
      <Container4 />
    </div>
  );
}