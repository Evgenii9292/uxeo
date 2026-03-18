import svgPaths from "./svg-jywxuurbpc";
import imgVector from "figma:asset/80ec3c68c27479dfc7ce41a97bdb285b993d099e.png";
import img from "figma:asset/37b03ce2843652115e411393e9c4b0ec688ae162.png";
import imgLabel from "figma:asset/73955ec9afb1b01b6b33dcbe4e02cde8a0717024.png";
import img1 from "figma:asset/1e836a979b52b9117bb9bbad3359c21183ba46fb.png";
import imgLabel1 from "figma:asset/3eca4fcdf67cc95f9d00d6cf841c2b6d63cd39a1.png";

function IconContainer() {
  return (
    <div className="h-[26px] relative shrink-0 w-[17.335px]" data-name="Icon Container">
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

function Frame20() {
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
      <Frame20 />
    </div>
  );
}

function TextContainer() {
  return (
    <div className="content-stretch flex flex-[1_0_0] flex-col gap-[5px] items-start justify-center leading-[20px] min-h-px min-w-px relative text-[18px]" data-name="Text Container">
      <p className="font-['Roboto_Condensed:Medium',sans-serif] font-medium relative shrink-0 text-[#f1f2fb] whitespace-nowrap">Недельные вызовы</p>
      <p className="font-['Roboto_Condensed:Regular',sans-serif] font-normal min-w-full relative shrink-0 text-[#798589] w-[min-content]">Практические задания в Figma</p>
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

function Frame21() {
  return (
    <div className="content-stretch flex gap-[20px] items-end justify-end relative shrink-0 w-full">
      <TextContainer />
      <ProgressContainer />
    </div>
  );
}

function Link() {
  return (
    <div className="bg-[#343e42] relative rounded-[15px] shrink-0 w-full" data-name="Link">
      <div className="content-stretch flex flex-col items-start p-[20px] relative w-full">
        <HeaderContainer />
        <Frame21 />
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
        <p className="font-['Roboto_Condensed:Medium',sans-serif] font-medium leading-[0] relative shrink-0 text-[#f1f2fb] text-[0px] text-[18px] whitespace-nowrap">
          <span className="leading-[20px] text-[#a6a6a6]">1250</span>
          <span className="leading-[20px]">{` / 2000 XP `}</span>
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
    <div className="bg-[#272f32] content-stretch flex flex-col h-[10px] items-start overflow-clip pl-[-111.75px] pr-[111.75px] relative rounded-[16777200px] shrink-0 w-full" data-name="Progress.Root">
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

function Frame3() {
  return (
    <div className="content-stretch flex flex-[1_0_0] flex-col gap-[8px] items-start min-h-px min-w-px relative">
      <ProgressBarContainer />
      <LabelsContainer />
    </div>
  );
}

function Group86() {
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

function Frame2() {
  return (
    <div className="absolute h-[32.826px] left-[2.89px] top-[1.9px] w-[32.731px]">
      <Group86 />
    </div>
  );
}

function Frame5() {
  return (
    <div className="content-stretch flex h-[57px] items-center relative shrink-0">
      <div className="overflow-clip relative shrink-0 size-[26px]">
        <Frame2 />
      </div>
    </div>
  );
}

function XpProgressCard() {
  return (
    <div className="bg-[#343e42] h-[152px] relative rounded-[15px] shrink-0 w-full" data-name="XP_ProgressCard">
      <div className="flex flex-col items-center size-full">
        <div className="content-stretch flex flex-col items-center justify-between p-[20px] relative size-full">
          <div className="content-stretch flex flex-col gap-[5px] items-start relative shrink-0 w-full" data-name="Card Header">
            <p className="font-['Roboto_Condensed:Medium',sans-serif] font-medium leading-[20px] relative shrink-0 text-[#f1f7fb] text-[18px] whitespace-nowrap">До открытия лиги</p>
            <XpContainer />
          </div>
          <div className="content-stretch flex gap-[20px] h-[53px] items-end relative shrink-0 w-full">
            <Frame3 />
            <Frame5 />
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
        <p className="font-['Roboto_Condensed:Medium',sans-serif] font-medium leading-[0] relative shrink-0 text-[#f1f2fb] text-[0px] text-[18px] whitespace-nowrap">
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
    <div className="bg-[#272f32] content-stretch flex flex-col h-[10px] items-start overflow-clip pl-[-111.75px] pr-[111.75px] relative rounded-[16777200px] shrink-0 w-full" data-name="Progress.Root">
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

function Frame4() {
  return (
    <div className="content-stretch flex flex-[1_0_0] flex-col gap-[8px] items-start min-h-px min-w-px relative">
      <ProgressBarContainer1 />
      <LabelsContainer1 />
    </div>
  );
}

function Frame6() {
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
    <div className="bg-[#343e42] h-[152px] relative rounded-[15px] shrink-0 w-full" data-name="Container">
      <div className="flex flex-col items-center size-full">
        <div className="content-stretch flex flex-col items-center justify-between p-[20px] relative size-full">
          <div className="content-stretch flex flex-col gap-[5px] items-start relative shrink-0 w-full" data-name="Card Header">
            <p className="font-['Roboto_Condensed:Medium',sans-serif] font-medium leading-[20px] relative shrink-0 text-[#f1f7fb] text-[18px] whitespace-nowrap">Задание дня</p>
            <XpContainer1 />
          </div>
          <div className="content-stretch flex gap-[20px] h-[53px] items-end relative shrink-0 w-full">
            <Frame4 />
            <Frame6 />
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
        <p className="font-['Inter:Semi_Bold',sans-serif] font-semibold leading-[15.392px] not-italic relative shrink-0 text-[#eef5ff] text-[10.261px] whitespace-nowrap">+125 XP</p>
      </div>
    </div>
  );
}

function Container4() {
  return (
    <div className="bg-[#ff5d39] h-[86px] relative rounded-[15px] shrink-0 w-full" data-name="Container">
      <div aria-hidden="true" className="absolute border-[#ff390d] border-[0.835px] border-solid inset-0 pointer-events-none rounded-[15px] shadow-[0px_4.174px_0px_0px_#c24226]" />
      <div className="flex flex-row items-center justify-center size-full">
        <div className="content-stretch flex gap-[6.678px] items-center justify-center px-[25.835px] py-[15.835px] relative size-full">
          <Component202603041916291Vectorized />
          <p className="font-['Roboto_Condensed:Medium',sans-serif] font-medium leading-[27.5px] relative shrink-0 text-[#f4f5fc] text-[26px] whitespace-nowrap">Продолжить</p>
          <Container5 />
        </div>
      </div>
    </div>
  );
}

function Frame22() {
  return (
    <div className="absolute content-stretch flex flex-col gap-[19px] items-start right-[92px] top-[90px] w-[315px]">
      <MainContainer />
      <Container4 />
    </div>
  );
}

function BackButton() {
  return (
    <div className="content-stretch flex items-center relative shrink-0" data-name="Back Button">
      <p className="font-['Roboto_Condensed:Regular',sans-serif] font-normal leading-[23.989px] relative shrink-0 text-[#f4f5fc] text-[22px] whitespace-nowrap">UX/UI</p>
    </div>
  );
}

function FireIconGroup1() {
  return (
    <div className="absolute inset-[9.07%_16.15%_9.07%_26.55%]" data-name="Fire Icon Group">
      <div className="absolute inset-[-10%_-16.22%_-11.26%_-14.93%]">
        <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 18.3608 24.2514" xmlnsXlink="http://www.w3.org/1999/xlink">
          <g id="Fire Icon Group">
            <g id="Vector" />
          </g>
          <defs>
            <g data-figma-scatter="f0.25_w0_aj95_sj0_r45_s0_sw4" data-figma-scatter-ref="stroke0_323_1179_ref" id="stroke0_323_1179">
              <path d={svgPaths.p29822f00} fill="url(#paint0_linear_323_1179)" />
            </g>
            <path d={svgPaths.p1346d680} id="stroke0_323_1179_ref" />
            <linearGradient gradientUnits="userSpaceOnUse" id="paint0_linear_323_1179" x1="7" x2="7" y1="0" y2="20">
              <stop stopColor="#FFB121" />
              <stop offset="1" stopColor="#BB8116" />
            </linearGradient>
          </defs>
        </svg>
      </div>
    </div>
  );
}

function FireIconGroup() {
  return (
    <div className="absolute contents inset-[9.07%_16.15%_9.07%_26.55%]" data-name="Fire Icon Group">
      <FireIconGroup1 />
    </div>
  );
}

function FireIcon() {
  return (
    <div className="overflow-clip relative shrink-0 size-[24.432px]" data-name="Fire Icon">
      <FireIconGroup />
      <div className="absolute inset-[26.68%_25.67%_16.23%_30.31%]">
        <div className="absolute inset-[-14.09%_-20.19%_-12.79%_-21.7%]">
          <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 15.2605 17.6985" xmlnsXlink="http://www.w3.org/1999/xlink">
            <g id="Vector 739" />
            <defs>
              <g data-figma-scatter="f0.25_w0_aj95_sj0_r45_s0_sw4" data-figma-scatter-ref="stroke0_323_1182_ref" id="stroke0_323_1182">
                <path d={svgPaths.p29822f00} fill="url(#paint0_linear_323_1182)" />
              </g>
              <path d={svgPaths.p2d779700} id="stroke0_323_1182_ref" />
              <linearGradient gradientUnits="userSpaceOnUse" id="paint0_linear_323_1182" x1="5.37756" x2="5.37756" y1="0" y2="13.9485">
                <stop stopColor="#FFB121" />
                <stop offset="1" stopColor="#BB8116" />
              </linearGradient>
            </defs>
          </svg>
        </div>
      </div>
    </div>
  );
}

function FireIconContainer() {
  return (
    <div className="relative shrink-0" data-name="Fire Icon Container">
      <div className="bg-clip-padding border-0 border-[transparent] border-solid content-stretch flex gap-[3.054px] items-center relative">
        <FireIcon />
        <p className="bg-clip-text bg-gradient-to-b font-['Roboto_Condensed:ExtraBold',sans-serif] font-extrabold from-[#ffb121] leading-[32.068px] relative shrink-0 text-[24px] text-[transparent] to-[#bb8116] whitespace-nowrap">0</p>
      </div>
    </div>
  );
}

function ZapIcon() {
  return (
    <div className="relative shrink-0 size-[24px]" data-name="Zap Icon">
      <svg className="absolute block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 24 24" xmlnsXlink="http://www.w3.org/1999/xlink">
        <g clipPath="url(#clip0_323_1199)" id="Zap Icon">
          <g id="Vector">
            <path d={svgPaths.p3b6e5180} fill="url(#paint0_linear_323_1199)" />
          </g>
          <g id="Vector 738" />
        </g>
        <defs>
          <linearGradient gradientUnits="userSpaceOnUse" id="paint0_linear_323_1199" x1="11.9995" x2="11.9995" y1="1.99805" y2="22.0033">
            <stop stopColor="#343E42" />
            <stop offset="1" stopColor="#2C4048" />
          </linearGradient>
          <clipPath id="clip0_323_1199">
            <rect fill="white" height="24" width="24" />
          </clipPath>
          <g data-figma-scatter="f0.25_w0_aj95_sj0_r45_s0_sw4" data-figma-scatter-ref="stroke0_323_1199_ref" id="stroke0_323_1199">
            <path d={svgPaths.p29822f00} fill="url(#paint1_linear_323_1199)" />
          </g>
          <path d={svgPaths.p3b6e5180} id="stroke0_323_1199_ref" />
          <g data-figma-scatter="f0.25_w0_aj95_sj0_r45_s0_sw4" data-figma-scatter-ref="stroke1_323_1199_ref" id="stroke1_323_1199">
            <path d={svgPaths.p29822f00} fill="url(#paint2_linear_323_1199)" />
          </g>
          <path d={svgPaths.p3f278400} id="stroke1_323_1199_ref" />
          <linearGradient gradientUnits="userSpaceOnUse" id="paint1_linear_323_1199" x1="7.57845" x2="-2.09664" y1="8.57462" y2="22.4556">
            <stop stopColor="#FF6B21" />
            <stop offset="1" stopColor="#994014" />
          </linearGradient>
          <linearGradient gradientUnits="userSpaceOnUse" id="paint2_linear_323_1199" x1="3.72122" x2="0.0138275" y1="3.53558" y2="9.86978">
            <stop stopColor="#FF6B21" />
            <stop offset="1" stopColor="#994014" />
          </linearGradient>
        </defs>
      </svg>
    </div>
  );
}

function ZapIconContainer() {
  return (
    <div className="relative shrink-0" data-name="Zap Icon Container">
      <div className="bg-clip-padding border-0 border-[transparent] border-solid content-stretch flex gap-[4px] items-center relative">
        <ZapIcon />
        <p className="font-['Roboto_Condensed:ExtraBold',sans-serif] font-extrabold leading-[21px] relative shrink-0 text-[#ff6b21] text-[24px] whitespace-nowrap">{`1250 `}</p>
      </div>
    </div>
  );
}

function IconsContainer() {
  return (
    <div className="content-stretch flex gap-[30px] h-[40px] items-center relative shrink-0" data-name="Icons Container">
      <FireIconContainer />
      <ZapIconContainer />
    </div>
  );
}

function Header() {
  return (
    <div className="absolute content-stretch flex h-[70px] items-center justify-between left-[301px] p-[20px] right-[82px] rounded-[20px] top-0" data-name="Header">
      <BackButton />
      <IconsContainer />
    </div>
  );
}

function Group87() {
  return (
    <div className="grid-cols-[max-content] grid-rows-[max-content] inline-grid place-items-start relative shrink-0">
      <div className="col-1 ml-0 mt-0 relative row-1 size-[27.161px]">
        <svg className="absolute block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 27.1607 27.1607">
          <circle cx="13.5803" cy="13.5803" fill="url(#paint0_linear_323_1223)" id="Ellipse 382" r="13.5803" />
          <defs>
            <linearGradient gradientUnits="userSpaceOnUse" id="paint0_linear_323_1223" x1="14.6575" x2="13.5107" y1="3.05161" y2="26.1814">
              <stop stopColor="#435861" />
              <stop offset="1" />
            </linearGradient>
          </defs>
        </svg>
      </div>
      <div className="col-1 ml-[2.34px] mt-[2.34px] relative row-1 size-[22.478px]" data-name="Vector">
        <img alt="" className="absolute block max-w-none size-full" height="22.478" src={imgVector} width="22.478" />
      </div>
    </div>
  );
}

function Group88() {
  return (
    <div className="grid-cols-[max-content] grid-rows-[max-content] inline-grid place-items-start relative shrink-0">
      <p className="col-1 font-['Roboto_Condensed:Regular',sans-serif] font-normal leading-[27.556px] ml-0 mt-0 relative row-1 text-[#f1f7fb] text-[26.053px] tracking-[-1.0451px] whitespace-nowrap">Скиллум</p>
    </div>
  );
}

function Frame19() {
  return (
    <div className="content-stretch flex gap-[6px] items-center leading-[0] px-[9.398px] relative shrink-0">
      <Group87 />
      <Group88 />
    </div>
  );
}

function BookSpine() {
  return (
    <div className="absolute inset-[0_15.39%]" data-name="Book Spine">
      <svg className="absolute block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 13.845 20.0008">
        <g id="Book Spine">
          <path d={svgPaths.p18ec55b0} fill="var(--fill-0, #AF66DA)" id="Vector" />
          <path d={svgPaths.paf41200} fill="var(--fill-0, #9857BD)" id="Vector_2" />
          <path d={svgPaths.p1551ae80} fill="var(--fill-0, #814AA0)" id="Vector_3" />
          <path d={svgPaths.p30d70ef0} fill="var(--fill-0, #73428F)" id="Vector_4" />
          <path d={svgPaths.p36db7380} fill="var(--fill-0, #9857BD)" id="Vector_5" />
          <path d={svgPaths.pea99600} fill="var(--fill-0, #FFF9F0)" id="Vector_6" />
          <path d={svgPaths.p677c700} fill="var(--fill-0, #FFEFE1)" id="Vector_7" />
          <path d={svgPaths.p185a9900} fill="var(--fill-0, #FED402)" id="Vector_8" />
          <path d={svgPaths.p1b3b2500} fill="var(--fill-0, #FAC600)" id="Vector_9" />
          <path d={svgPaths.p1b24d400} fill="var(--fill-0, #D7AA02)" id="Vector_10" />
          <path d={svgPaths.p8868e20} fill="var(--fill-0, #FED402)" id="Vector_11" />
          <path d={svgPaths.p3fb26200} fill="var(--fill-0, #FAC600)" id="Vector_12" />
          <g id="Bookmark">
            <path d={svgPaths.p310fcf00} fill="var(--fill-0, #FED402)" id="Vector_13" />
            <path d={svgPaths.p15331f00} fill="var(--fill-0, #FED402)" id="Vector_14" />
          </g>
        </g>
      </svg>
    </div>
  );
}

function BookSpine1() {
  return (
    <div className="absolute inset-[0_15.39%]" data-name="Book Spine">
      <svg className="absolute block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 13.845 20.0008">
        <g id="Book Spine">
          <path d={svgPaths.p18ec55b0} fill="var(--fill-0, #AF66DA)" id="Vector" />
          <path d={svgPaths.paf41200} fill="var(--fill-0, #9857BD)" id="Vector_2" />
          <path d={svgPaths.p1551ae80} fill="var(--fill-0, #814AA0)" id="Vector_3" />
          <path d={svgPaths.p30d70ef0} fill="var(--fill-0, #73428F)" id="Vector_4" />
          <path d={svgPaths.p36db7380} fill="var(--fill-0, #9857BD)" id="Vector_5" />
          <path d={svgPaths.pea99600} fill="var(--fill-0, #FFF9F0)" id="Vector_6" />
          <path d={svgPaths.p677c700} fill="var(--fill-0, #FFEFE1)" id="Vector_7" />
          <path d={svgPaths.p185a9900} fill="var(--fill-0, #FED402)" id="Vector_8" />
          <path d={svgPaths.p1b3b2500} fill="var(--fill-0, #FAC600)" id="Vector_9" />
          <path d={svgPaths.p1b24d400} fill="var(--fill-0, #D7AA02)" id="Vector_10" />
          <path d={svgPaths.p8868e20} fill="var(--fill-0, #FED402)" id="Vector_11" />
          <path d={svgPaths.p3fb26200} fill="var(--fill-0, #FAC600)" id="Vector_12" />
          <g id="Bookmark">
            <path d={svgPaths.p310fcf00} fill="var(--fill-0, #FED402)" id="Vector_13" />
            <path d={svgPaths.p15331f00} fill="var(--fill-0, #FED402)" id="Vector_14" />
          </g>
        </g>
      </svg>
    </div>
  );
}

function Body() {
  return (
    <div className="absolute inset-[70.47%_5.17%_0_5.17%]" data-name="Body">
      <svg className="absolute block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 17.9311 5.90531">
        <g id="Body">
          <path d={svgPaths.p2a49ca00} fill="var(--fill-0, #009182)" id="Vector" />
          <path d={svgPaths.p34a21f00} fill="var(--fill-0, #009182)" id="Vector_2" />
          <path d={svgPaths.p20824e70} fill="var(--fill-0, #009182)" id="Vector_3" />
        </g>
      </svg>
    </div>
  );
}

function Hair() {
  return (
    <div className="absolute inset-[66.41%_29.31%_11.74%_29.31%]" data-name="Hair">
      <svg className="absolute block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 8.27586 4.37131">
        <g id="Hair">
          <path d={svgPaths.pef751c0} fill="var(--fill-0, #E4EAF6)" id="Vector" />
          <path d={svgPaths.p2dd90d00} fill="var(--fill-0, #E4EAF6)" id="Vector_2" />
        </g>
      </svg>
    </div>
  );
}

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

function Link1() {
  return (
    <div className="bg-[rgba(52,62,66,0.5)] h-[41px] relative rounded-[10px] shrink-0 w-[193px]" data-name="Link">
      <div className="bg-clip-padding border-0 border-[transparent] border-solid content-stretch flex gap-[10px] items-center px-[10px] py-[14px] relative size-full">
        <div className="overflow-clip relative shrink-0 size-[20px]" data-name="Icon/notification">
          <Group />
        </div>
        <p className="font-['Roboto_Condensed:Regular',sans-serif] font-normal leading-[21px] relative shrink-0 text-[#f1f7fb] text-[16px] whitespace-nowrap">Уведомления</p>
      </div>
    </div>
  );
}

function Div() {
  return (
    <div className="content-stretch flex flex-col gap-[9px] items-start relative shrink-0 w-full" data-name="div">
      <div className="h-[41px] relative rounded-[14px] shrink-0 w-[205px]" data-name="Link">
        <div className="bg-clip-padding border-0 border-[transparent] border-solid content-stretch flex gap-[10px] items-center pl-[12px] relative size-full">
          <div className="relative shrink-0 size-[20px]" data-name="free-icon-book">
            <div className="bg-clip-padding border-0 border-[transparent] border-solid overflow-clip relative rounded-[inherit] size-full">
              <BookSpine />
            </div>
          </div>
          <p className="font-['Roboto_Condensed:Medium',sans-serif] font-medium leading-[21px] relative shrink-0 text-[#f1f7fb] text-[18px] whitespace-nowrap">Главная</p>
        </div>
      </div>
      <div className="bg-[rgba(52,62,66,0.5)] h-[41px] relative rounded-[10px] shrink-0 w-[205px]" data-name="Link">
        <div className="bg-clip-padding border-0 border-[transparent] border-solid content-stretch flex gap-[10px] items-center px-[10px] py-[14px] relative size-full">
          <div className="overflow-clip relative shrink-0 size-[20px]" data-name="free-icon-book">
            <BookSpine1 />
          </div>
          <p className="font-['Roboto_Condensed:Medium',sans-serif] font-medium leading-[21px] relative shrink-0 text-[#f1f7fb] text-[18px] whitespace-nowrap">Обучение</p>
        </div>
      </div>
      <div className="h-[41px] relative rounded-[14px] shrink-0 w-[205px]" data-name="Link">
        <div className="bg-clip-padding border-0 border-[transparent] border-solid content-stretch flex gap-[10px] items-center pl-[12px] relative size-full">
          <div className="relative shrink-0 size-[20px]" data-name="free-icon-emblem">
            <div className="bg-clip-padding border-0 border-[transparent] border-solid overflow-clip relative rounded-[inherit] size-full">
              <div className="absolute inset-[54.65%_12.12%_0_50.24%]" data-name="Vector">
                <svg className="absolute block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 7.52765 9.07098">
                  <path d={svgPaths.p2d3fba00} fill="var(--fill-0, #E5002E)" id="Vector" />
                </svg>
              </div>
              <div className="absolute inset-[54.64%_50.24%_0_12.12%]" data-name="Vector">
                <svg className="absolute block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 7.52759 9.07134">
                  <path d={svgPaths.pcf0e400} fill="var(--fill-0, #FF6363)" id="Vector" />
                </svg>
              </div>
              <div className="absolute inset-[2.93%_16.43%_29.94%_16.43%]" data-name="Vector">
                <svg className="absolute block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 13.4261 13.4259">
                  <path d={svgPaths.p1ce2c614} fill="var(--fill-0, #FFF566)" id="Vector" />
                </svg>
              </div>
              <div className="absolute bottom-[29.94%] left-1/2 right-[16.43%] top-[2.93%]" data-name="Vector">
                <svg className="absolute block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 6.71305 13.4259">
                  <path d={svgPaths.p137fba80} fill="var(--fill-0, #FFCF2C)" id="Vector" />
                </svg>
              </div>
              <div className="absolute inset-[0_13.51%_27.01%_13.51%]" data-name="Vector">
                <svg className="absolute block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 14.5979 14.5978">
                  <path d={svgPaths.p331e4200} fill="var(--fill-0, #FFC12E)" id="Vector" />
                </svg>
              </div>
              <div className="absolute bottom-[27.01%] left-1/2 right-[13.51%] top-0" data-name="Vector">
                <svg className="absolute block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 7.29898 14.5978">
                  <path d={svgPaths.p198cc400} fill="var(--fill-0, #FF7403)" id="Vector" />
                </svg>
              </div>
              <div className="absolute inset-[19.89%_46.49%_47.18%_41.87%]" data-name="Vector">
                <svg className="absolute block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 2.32691 6.58543">
                  <path d={svgPaths.p2e9f1a00} fill="var(--fill-0, #FFB500)" id="Vector" />
                </svg>
              </div>
              <div className="absolute bottom-[47.18%] left-1/2 right-[46.49%] top-[19.89%]" data-name="Vector">
                <svg className="absolute block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 0.701054 6.58543">
                  <path d={svgPaths.p34a9a000} fill="var(--fill-0, #FF7403)" id="Vector" />
                </svg>
              </div>
            </div>
          </div>
          <p className="font-['Roboto_Condensed:Medium',sans-serif] font-medium leading-[21px] relative shrink-0 text-[#f1f7fb] text-[18px] whitespace-nowrap">Вызовы</p>
        </div>
      </div>
      <div className="h-[41px] relative rounded-[14px] shrink-0 w-[205px]" data-name="Link">
        <div className="bg-clip-padding border-0 border-[transparent] border-solid content-stretch flex gap-[10px] items-center pl-[12px] relative size-full">
          <div className="relative shrink-0 size-[20px]" data-name="free-icon-user">
            <div className="bg-clip-padding border-0 border-[transparent] border-solid overflow-clip relative rounded-[inherit] size-full">
              <div className="absolute inset-[58.62%_5.17%_0_5.17%]" data-name="Vector">
                <svg className="absolute block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 17.9311 8.27586">
                  <path d={svgPaths.p2b92f300} fill="var(--fill-0, #E6AF78)" id="Vector" />
                </svg>
              </div>
              <div className="absolute inset-[70.47%_5.17%_0_5.17%]" data-name="Vector">
                <svg className="absolute block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 17.9311 5.90656">
                  <path d={svgPaths.p265d9200} fill="var(--fill-0, #00A091)" id="Vector" />
                </svg>
              </div>
              <div className="absolute inset-[71.29%_34.82%_15.51%_34.67%]" data-name="Vector">
                <svg className="absolute block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 6.10105 2.64023">
                  <path d={svgPaths.p13982e80} fill="var(--fill-0, #D5DCEC)" id="Vector" />
                </svg>
              </div>
              <div className="absolute inset-[58.62%_34.48%_26.32%_32.99%]" data-name="Vector">
                <svg className="absolute block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 6.50473 3.01199">
                  <path d={svgPaths.p23dbb100} fill="var(--fill-0, #D29B6E)" id="Vector" />
                </svg>
              </div>
              <div className="absolute inset-[18.97%_27.59%_32.76%_27.59%]" data-name="Vector">
                <svg className="absolute block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 8.96547 9.65516">
                  <path d={svgPaths.p387b7780} fill="var(--fill-0, #F0C087)" id="Vector" />
                </svg>
              </div>
              <div className="absolute inset-[18.97%_27.59%_32.76%_27.59%]" data-name="Vector">
                <svg className="absolute block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 8.96555 9.65516">
                  <path d={svgPaths.p35c9f600} fill="var(--fill-0, #E6AF78)" id="Vector" />
                </svg>
              </div>
              <div className="absolute inset-[0_24.14%_62.07%_24.14%]" data-name="Vector">
                <svg className="absolute block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 10.3448 7.58621">
                  <path d={svgPaths.p26bb8400} fill="var(--fill-0, #5A4146)" id="Vector" />
                </svg>
              </div>
              <div className="absolute bottom-1/2 left-[68.71%] right-[24.14%] top-[36.21%]" data-name="Vector">
                <svg className="absolute block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 1.42942 2.75859">
                  <path d={svgPaths.p38f9b580} fill="var(--fill-0, #F0C087)" id="Vector" />
                </svg>
              </div>
              <div className="absolute bottom-1/2 left-[24.14%] right-[68.71%] top-[36.21%]" data-name="Vector">
                <svg className="absolute block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 1.42941 2.75859">
                  <path d={svgPaths.p12e8bd00} fill="var(--fill-0, #E6AF78)" id="Vector" />
                </svg>
              </div>
              <Body />
              <Hair />
            </div>
          </div>
          <p className="font-['Roboto_Condensed:Medium',sans-serif] font-medium leading-[21px] relative shrink-0 text-[#f1f7fb] text-[18px] whitespace-nowrap">Профиль</p>
        </div>
      </div>
      <Link1 />
    </div>
  );
}

function Frame7() {
  return (
    <div className="content-stretch flex flex-col gap-[50px] items-start relative shrink-0 w-[205px]">
      <Frame19 />
      <Div />
    </div>
  );
}

function Span() {
  return (
    <div className="h-[21px] relative shrink-0 w-[62.156px]" data-name="span">
      <div className="bg-clip-padding border-0 border-[transparent] border-solid relative size-full">
        <p className="absolute font-['Roboto_Condensed:Regular',sans-serif] font-normal leading-[21px] left-0 text-[#f2f4fb] text-[16px] top-0 whitespace-nowrap">О проекте</p>
      </div>
    </div>
  );
}

function Link2() {
  return (
    <div className="h-[44px] relative rounded-[14px] shrink-0 w-full" data-name="Link">
      <div className="flex flex-row items-center size-full">
        <div className="content-stretch flex items-center pl-[12px] relative size-full">
          <Span />
        </div>
      </div>
    </div>
  );
}

function Container6() {
  return (
    <div className="bg-[#2a3336] h-[41px] relative rounded-[10px] shrink-0 w-full" data-name="Container">
      <div className="flex flex-row items-center justify-center size-full">
        <div className="content-stretch flex items-center justify-center px-[9.231px] relative size-full">
          <p className="font-['Roboto_Condensed:Regular',sans-serif] font-normal leading-[15.865px] relative shrink-0 text-[#f4f5fc] text-[16px] whitespace-nowrap">Написать нам</p>
        </div>
      </div>
    </div>
  );
}

function FooterContainer() {
  return (
    <div className="content-stretch flex flex-col items-start relative shrink-0 w-full" data-name="Footer Container">
      <Link2 />
      <Container6 />
    </div>
  );
}

function HeaderContainer1() {
  return (
    <div className="content-stretch flex flex-col items-start relative shrink-0 w-full" data-name="Header Container">
      <p className="font-['Roboto_Condensed:Regular',sans-serif] font-normal leading-[22.5px] relative shrink-0 text-[#f1f2fb] text-[16px] whitespace-nowrap">Оставь отзыв о UXEO</p>
    </div>
  );
}

function Group11() {
  return (
    <div className="absolute inset-[43.06%_10.28%_5.35%_10.56%]" data-name="Group">
      <svg className="absolute block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 20.5833 13.4153">
        <g id="Group">
          <path d={svgPaths.p1fd3fc80} fill="var(--fill-0, #F45170)" id="Vector" />
        </g>
      </svg>
    </div>
  );
}

function Group10() {
  return (
    <div className="absolute contents inset-[43.06%_10.28%_5.35%_10.56%]" data-name="Group">
      <Group11 />
    </div>
  );
}

function Group13() {
  return (
    <div className="absolute inset-[60.56%_47.78%_5.62%_47.5%]" data-name="Group">
      <svg className="absolute block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 1.22778 8.79306">
        <g id="Group">
          <path d={svgPaths.p1ed81500} fill="var(--fill-0, #FA5F7F)" id="Vector" />
        </g>
      </svg>
    </div>
  );
}

function Group12() {
  return (
    <div className="absolute contents inset-[60.56%_47.78%_5.62%_47.5%]" data-name="Group">
      <Group13 />
    </div>
  );
}

function Group15() {
  return (
    <div className="absolute inset-[43.06%_10%_32.92%_10.28%]" data-name="Group">
      <svg className="absolute block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 20.7278 6.24722">
        <g id="Group">
          <path d={svgPaths.p3d715600} fill="var(--fill-0, #CC104A)" id="Vector" />
        </g>
      </svg>
    </div>
  );
}

function Group14() {
  return (
    <div className="absolute contents inset-[43.06%_10%_32.92%_10.28%]" data-name="Group">
      <Group15 />
    </div>
  );
}

function Group17() {
  return (
    <div className="absolute inset-[60.56%_47.5%_33.19%_47.78%] opacity-50" data-name="Group">
      <svg className="absolute block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 1.22778 1.625">
        <g id="Group">
          <path d={svgPaths.p3c0fad00} fill="var(--fill-0, #93073A)" id="Vector" />
        </g>
      </svg>
    </div>
  );
}

function Group16() {
  return (
    <div className="absolute contents inset-[60.56%_47.5%_33.19%_47.78%]" data-name="Group">
      <Group17 />
    </div>
  );
}

function Group19() {
  return (
    <div className="absolute inset-[25.56%_5.63%_38.33%_5.57%]" data-name="Group">
      <svg className="absolute block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 23.0873 9.38889">
        <g id="Group">
          <path d={svgPaths.p3cc33500} fill="var(--fill-0, #E93565)" id="Vector" />
        </g>
      </svg>
    </div>
  );
}

function Group18() {
  return (
    <div className="absolute contents inset-[25.56%_5.63%_38.33%_5.57%]" data-name="Group">
      <Group19 />
    </div>
  );
}

function Group21() {
  return (
    <div className="absolute inset-[8.47%_6.11%_38.33%_5.83%]" data-name="Group">
      <svg className="absolute block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 22.8944 13.8306">
        <g id="Group">
          <path d={svgPaths.p2e702a80} fill="var(--fill-0, #FA5F7F)" id="Vector" />
        </g>
      </svg>
    </div>
  );
}

function Group20() {
  return (
    <div className="absolute contents inset-[8.47%_6.11%_38.33%_5.83%]" data-name="Group">
      <Group21 />
    </div>
  );
}

function Group23() {
  return (
    <div className="absolute inset-[11.18%_11.81%_56.76%_11.81%]" data-name="Group">
      <svg className="absolute block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 19.8611 8.33494">
        <g id="Group">
          <path d={svgPaths.p2fdec480} fill="var(--fill-0, #E93565)" id="Vector" />
        </g>
      </svg>
    </div>
  );
}

function Group22() {
  return (
    <div className="absolute contents inset-[11.18%_11.81%_56.76%_11.81%]" data-name="Group">
      <Group23 />
    </div>
  );
}

function Group26() {
  return (
    <div className="absolute inset-[36.11%_30.56%_60.56%_63.33%]" data-name="Group">
      <svg className="absolute block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 1.58889 0.866666">
        <g id="Group">
          <path d={svgPaths.p38419300} fill="var(--fill-0, #DF3260)" id="Vector" />
        </g>
      </svg>
    </div>
  );
}

function Group25() {
  return (
    <div className="absolute contents inset-[36.11%_30.56%_60.56%_63.33%]" data-name="Group">
      <Group26 />
    </div>
  );
}

function Group28() {
  return (
    <div className="absolute inset-[36.11%_63.33%_60.28%_30.56%]" data-name="Group">
      <svg className="absolute block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 1.58889 0.938889">
        <g id="Group">
          <path d={svgPaths.p34807700} fill="var(--fill-0, #DF3260)" id="Vector" />
        </g>
      </svg>
    </div>
  );
}

function Group27() {
  return (
    <div className="absolute contents inset-[36.11%_63.33%_60.28%_30.56%]" data-name="Group">
      <Group28 />
    </div>
  );
}

function Group30() {
  return (
    <div className="absolute inset-[26.94%_32.78%_61.94%_32.78%]" data-name="Group">
      <svg className="absolute block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 8.95556 2.88889">
        <g id="Group">
          <path d={svgPaths.p2bc26300} fill="var(--fill-0, #CC104A)" id="Vector" />
        </g>
      </svg>
    </div>
  );
}

function Group29() {
  return (
    <div className="absolute contents inset-[26.94%_32.78%_61.94%_32.78%]" data-name="Group">
      <Group30 />
    </div>
  );
}

function Group24() {
  return (
    <div className="absolute contents inset-[26.94%_30.55%_60.28%_30.56%]" data-name="Group">
      <Group25 />
      <Group27 />
      <Group29 />
    </div>
  );
}

function Group9() {
  return (
    <div className="absolute contents inset-[8.47%_5.63%_5.35%_5.57%]" data-name="Group">
      <Group10 />
      <Group12 />
      <Group14 />
      <Group16 />
      <Group18 />
      <Group20 />
      <Group22 />
      <Group24 />
    </div>
  );
}

function Group33() {
  return (
    <div className="absolute bottom-[7.14%] left-[14.7%] right-1/2 top-[20%]" data-name="Group">
      <svg className="absolute block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 9.17906 18.9428">
        <g id="Group">
          <path d={svgPaths.p29dd4a72} fill="var(--fill-0, #FFD475)" id="Vector" />
        </g>
      </svg>
    </div>
  );
}

function Group32() {
  return (
    <div className="absolute bottom-[7.14%] contents left-[14.7%] right-1/2 top-[20%]" data-name="Group">
      <Group33 />
    </div>
  );
}

function Group35() {
  return (
    <div className="absolute inset-[38.06%_66.11%_12.5%_29.31%] opacity-50" data-name="Group">
      <svg className="absolute block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 1.19022 12.8556">
        <g id="Group">
          <path d={svgPaths.p39b01f00} fill="var(--fill-0, #93073A)" id="Vector" />
        </g>
      </svg>
    </div>
  );
}

function Group34() {
  return (
    <div className="absolute contents inset-[38.06%_66.11%_12.5%_29.31%]" data-name="Group">
      <Group35 />
    </div>
  );
}

function Group37() {
  return (
    <div className="absolute bottom-[7.13%] left-[28.03%] right-[50.28%] top-1/4" data-name="Group">
      <svg className="absolute block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 5.64019 17.6472">
        <g id="Group">
          <path d={svgPaths.p174bbd00} fill="var(--fill-0, #F3A250)" id="Vector" />
        </g>
      </svg>
    </div>
  );
}

function Group36() {
  return (
    <div className="absolute bottom-[7.13%] contents left-[28.03%] right-[50.28%] top-1/4" data-name="Group">
      <Group37 />
    </div>
  );
}

function Group39() {
  return (
    <div className="absolute bottom-[7.14%] left-1/2 right-[14.7%] top-[20%]" data-name="Group">
      <svg className="absolute block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 9.17907 18.9428">
        <g id="Group">
          <path d={svgPaths.p19a5a380} fill="var(--fill-0, #FFD475)" id="Vector" />
        </g>
      </svg>
    </div>
  );
}

function Group38() {
  return (
    <div className="absolute bottom-[7.14%] contents left-1/2 right-[14.7%] top-[20%]" data-name="Group">
      <Group39 />
    </div>
  );
}

function Group41() {
  return (
    <div className="absolute inset-[38.33%_29.37%_12.22%_66.11%] opacity-50" data-name="Group">
      <svg className="absolute block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 1.17423 12.8556">
        <g id="Group">
          <path d={svgPaths.p26e47a00} fill="var(--fill-0, #93073A)" id="Vector" />
        </g>
      </svg>
    </div>
  );
}

function Group40() {
  return (
    <div className="absolute contents inset-[38.33%_29.37%_12.22%_66.11%]" data-name="Group">
      <Group41 />
    </div>
  );
}

function Group43() {
  return (
    <div className="absolute bottom-[7.13%] left-[50.28%] right-[28.03%] top-1/4" data-name="Group">
      <svg className="absolute block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 5.64121 17.6472">
        <g id="Group">
          <path d={svgPaths.p126f2100} fill="var(--fill-0, #F3A250)" id="Vector" />
        </g>
      </svg>
    </div>
  );
}

function Group42() {
  return (
    <div className="absolute bottom-[7.13%] contents left-[50.28%] right-[28.03%] top-1/4" data-name="Group">
      <Group43 />
    </div>
  );
}

function Group31() {
  return (
    <div className="absolute contents inset-[20%_14.69%_7.13%_14.7%]" data-name="Group">
      <Group32 />
      <Group34 />
      <Group36 />
      <Group38 />
      <Group40 />
      <Group42 />
    </div>
  );
}

function Group46() {
  return (
    <div className="absolute inset-[5.56%_54.44%_70.81%_19.67%]" data-name="Group">
      <svg className="absolute block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 6.72994 6.14452">
        <g id="Group">
          <path d={svgPaths.p8f36700} fill="var(--fill-0, #FFD475)" id="Vector" />
        </g>
      </svg>
    </div>
  );
}

function Group45() {
  return (
    <div className="absolute contents inset-[5.56%_54.44%_70.81%_19.67%]" data-name="Group">
      <Group46 />
    </div>
  );
}

function Group48() {
  return (
    <div className="absolute inset-[5.56%_54.44%_77.5%_19.72%]" data-name="Group">
      <svg className="absolute block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 6.71667 4.40556">
        <g id="Group">
          <path d={svgPaths.p2b610480} fill="var(--fill-0, #FFDE9B)" id="Vector" />
        </g>
      </svg>
    </div>
  );
}

function Group47() {
  return (
    <div className="absolute contents inset-[5.56%_54.44%_77.5%_19.72%]" data-name="Group">
      <Group48 />
    </div>
  );
}

function Group50() {
  return (
    <div className="absolute inset-[26.39%_51.39%_68.89%_41.11%] opacity-50" data-name="Group">
      <svg className="absolute block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 1.95 1.22778">
        <g id="Group">
          <path d={svgPaths.p210f8100} fill="var(--fill-0, #DD8536)" id="Vector" />
        </g>
      </svg>
    </div>
  );
}

function Group49() {
  return (
    <div className="absolute contents inset-[26.39%_51.39%_68.89%_41.11%]" data-name="Group">
      <Group50 />
    </div>
  );
}

function Group52() {
  return (
    <div className="absolute inset-[17.22%_56.11%_67.22%_19.72%]" data-name="Group">
      <svg className="absolute block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 6.28333 4.04444">
        <g id="Group">
          <path d={svgPaths.p1b2fc400} fill="var(--fill-0, #FFB961)" id="Vector" />
        </g>
      </svg>
    </div>
  );
}

function Group51() {
  return (
    <div className="absolute contents inset-[17.22%_56.11%_67.22%_19.72%]" data-name="Group">
      <Group52 />
    </div>
  );
}

function Group54() {
  return (
    <div className="absolute inset-[18.33%_57.32%_68.33%_20.83%]" data-name="Group">
      <svg className="absolute block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 5.68137 3.46704">
        <g id="Group">
          <path d={svgPaths.pbc27c80} fill="var(--fill-0, #F3A250)" id="Vector" />
        </g>
      </svg>
    </div>
  );
}

function Group53() {
  return (
    <div className="absolute contents inset-[18.33%_57.32%_68.33%_20.83%]" data-name="Group">
      <Group54 />
    </div>
  );
}

function Group56() {
  return (
    <div className="absolute inset-[28.89%_57.5%_70.56%_42.22%]" data-name="Group">
      <svg className="absolute block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 0.0722225 0.144445">
        <g id="Group">
          <g id="Vector" />
        </g>
      </svg>
    </div>
  );
}

function Group55() {
  return (
    <div className="absolute contents inset-[28.89%_57.5%_70.56%_42.22%]" data-name="Group">
      <Group56 />
    </div>
  );
}

function Group58() {
  return (
    <div className="absolute inset-[29.88%_57.85%_70%_41.94%]" data-name="Group">
      <svg className="absolute block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 0.0541667 0.0320988">
        <g id="Group">
          <path d={svgPaths.p13a01000} fill="var(--fill-0, #F3A250)" id="Vector" />
        </g>
      </svg>
    </div>
  );
}

function Group57() {
  return (
    <div className="absolute contents inset-[29.88%_57.85%_70%_41.94%]" data-name="Group">
      <Group58 />
    </div>
  );
}

function Group60() {
  return (
    <div className="absolute inset-[18.33%_56.35%_68.28%_20.83%]" data-name="Group">
      <svg className="absolute block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 5.93296 3.48009">
        <g id="Group">
          <path d={svgPaths.p17fa3080} fill="var(--fill-0, #DD8536)" id="Vector" />
        </g>
      </svg>
    </div>
  );
}

function Group59() {
  return (
    <div className="absolute contents inset-[18.33%_56.35%_68.28%_20.83%]" data-name="Group">
      <Group60 />
    </div>
  );
}

function Group63() {
  return (
    <div className="absolute inset-[5.65%_19.68%_71.09%_54.3%]" data-name="Group">
      <svg className="absolute block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 6.76634 6.04817">
        <g id="Group">
          <path d={svgPaths.p580f400} fill="var(--fill-0, #FFD475)" id="Vector" />
        </g>
      </svg>
    </div>
  );
}

function Group62() {
  return (
    <div className="absolute contents inset-[5.65%_19.68%_71.09%_54.3%]" data-name="Group">
      <Group63 />
    </div>
  );
}

function Group65() {
  return (
    <div className="absolute inset-[5.41%_19.72%_77.78%_54.29%]" data-name="Group">
      <svg className="absolute block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 6.75776 4.37199">
        <g id="Group">
          <path d={svgPaths.p10c69900} fill="var(--fill-0, #FFDE9B)" id="Vector" />
        </g>
      </svg>
    </div>
  );
}

function Group64() {
  return (
    <div className="absolute contents inset-[5.41%_19.72%_77.78%_54.29%]" data-name="Group">
      <Group65 />
    </div>
  );
}

function Group67() {
  return (
    <div className="absolute inset-[26.39%_18.61%_65%_51.11%] opacity-50" data-name="Group">
      <svg className="absolute block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 7.87222 2.23889">
        <g id="Group">
          <path d={svgPaths.p2317200} fill="var(--fill-0, #DD8536)" id="Vector" />
        </g>
      </svg>
    </div>
  );
}

function Group66() {
  return (
    <div className="absolute contents inset-[26.39%_18.61%_65%_51.11%]" data-name="Group">
      <Group67 />
    </div>
  );
}

function Group69() {
  return (
    <div className="absolute inset-[17.5%_19.72%_66.85%_56.11%]" data-name="Group">
      <svg className="absolute block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 6.28333 4.06998">
        <g id="Group">
          <path d={svgPaths.p2e022780} fill="var(--fill-0, #FFB961)" id="Vector" />
        </g>
      </svg>
    </div>
  );
}

function Group68() {
  return (
    <div className="absolute contents inset-[17.5%_19.72%_66.85%_56.11%]" data-name="Group">
      <Group69 />
    </div>
  );
}

function Group71() {
  return (
    <div className="absolute inset-[18.33%_20.83%_68.33%_57.37%]" data-name="Group">
      <svg className="absolute block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 5.66619 3.46704">
        <g id="Group">
          <path d={svgPaths.p2e3a7a00} fill="var(--fill-0, #F3A250)" id="Vector" />
        </g>
      </svg>
    </div>
  );
}

function Group70() {
  return (
    <div className="absolute contents inset-[18.33%_20.83%_68.33%_57.37%]" data-name="Group">
      <Group71 />
    </div>
  );
}

function Group73() {
  return (
    <div className="absolute inset-[18.33%_20.83%_68.28%_56.35%]" data-name="Group">
      <svg className="absolute block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 5.93296 3.48009">
        <g id="Group">
          <path d={svgPaths.p8f78900} fill="var(--fill-0, #DD8536)" id="Vector" />
        </g>
      </svg>
    </div>
  );
}

function Group72() {
  return (
    <div className="absolute contents inset-[18.33%_20.83%_68.28%_56.35%]" data-name="Group">
      <Group73 />
    </div>
  );
}

function Group75() {
  return (
    <div className="absolute inset-[14.92%_40.28%_68.61%_40.28%] opacity-10" data-name="Group">
      <svg className="absolute block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 5.05556 4.28133">
        <g id="Group">
          <path d={svgPaths.p31de6100} fill="var(--fill-0, #111D33)" id="Vector" />
        </g>
      </svg>
    </div>
  );
}

function Group74() {
  return (
    <div className="absolute contents inset-[14.92%_40.28%_68.61%_40.28%]" data-name="Group">
      <Group75 />
    </div>
  );
}

function Group61() {
  return (
    <div className="absolute contents inset-[5.41%_18.61%_65%_40.28%]" data-name="Group">
      <Group62 />
      <Group64 />
      <Group66 />
      <Group68 />
      <Group70 />
      <Group72 />
      <Group74 />
    </div>
  );
}

function Group77() {
  return (
    <div className="absolute inset-[19.65%_41.32%_69.93%_41.06%]" data-name="Group">
      <svg className="absolute block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 4.58257 2.70907">
        <g id="Group">
          <path d={svgPaths.p3d746c80} fill="var(--fill-0, #FFB961)" id="Vector" />
        </g>
      </svg>
    </div>
  );
}

function Group76() {
  return (
    <div className="absolute contents inset-[19.65%_41.32%_69.93%_41.06%]" data-name="Group">
      <Group77 />
    </div>
  );
}

function Group79() {
  return (
    <div className="absolute inset-[16.04%_41.89%_74.37%_41.89%]" data-name="Group">
      <svg className="absolute block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 4.21722 2.49282">
        <g id="Group">
          <path d={svgPaths.pf9baa00} fill="var(--fill-0, #FFD475)" id="Vector" />
        </g>
      </svg>
    </div>
  );
}

function Group78() {
  return (
    <div className="absolute contents inset-[16.04%_41.89%_74.37%_41.89%]" data-name="Group">
      <Group79 />
    </div>
  );
}

function Group44() {
  return (
    <div className="absolute contents inset-[5.41%_18.61%_65%_19.67%]" data-name="Group">
      <Group45 />
      <Group47 />
      <Group49 />
      <Group51 />
      <Group53 />
      <Group55 />
      <Group57 />
      <Group59 />
      <Group61 />
      <Group76 />
      <Group78 />
    </div>
  );
}

function X() {
  return (
    <div className="absolute contents inset-[5.41%_5.63%_5.35%_5.57%]" data-name="_x37_1">
      <Group9 />
      <Group31 />
      <Group44 />
    </div>
  );
}

function FreeIconGift() {
  return (
    <div className="overflow-clip relative shrink-0 size-[26px]" data-name="free-icon-gift-8146553 1">
      <X />
    </div>
  );
}

function Frame12() {
  return (
    <div className="content-stretch flex gap-[5px] items-start relative shrink-0 w-full">
      <FreeIconGift />
      <p className="font-['Roboto_Condensed:Regular',sans-serif] font-normal leading-[0] relative shrink-0 text-[#798589] text-[0px] text-[16px] w-[140px]">
        <span className="leading-[20px]">{`И получи `}</span>
        <span className="leading-[20px] text-[#ff6b21]">месяц</span>
        <span className="leading-[20px]">{` бесплатно`}</span>
      </p>
    </div>
  );
}

function Container7() {
  return (
    <div className="bg-[#2a3336] h-[41px] relative rounded-[10px] shrink-0 w-full" data-name="Container">
      <div className="flex flex-row items-center justify-center size-full">
        <div className="content-stretch flex items-center justify-center px-[9.231px] relative size-full">
          <p className="font-['Roboto_Condensed:Regular',sans-serif] font-normal leading-[15.865px] relative shrink-0 text-[#f4f5fc] text-[16px] whitespace-nowrap">Написать отзыв</p>
        </div>
      </div>
    </div>
  );
}

function Frame13() {
  return (
    <div className="content-stretch flex flex-col gap-[15px] items-start relative shrink-0 w-full">
      <Frame12 />
      <Container7 />
    </div>
  );
}

function Frame11() {
  return (
    <div className="bg-[#2f3a3e] relative rounded-[10px] shrink-0 w-full">
      <div className="content-stretch flex flex-col gap-[10px] items-start p-[20px] relative w-full">
        <HeaderContainer1 />
        <Frame13 />
      </div>
    </div>
  );
}

function Frame10() {
  return (
    <div className="bg-[#343e42] h-[44px] relative rounded-[10px] shrink-0 w-full">
      <div className="flex flex-row items-center justify-center size-full">
        <div className="content-stretch flex items-center justify-center p-[20px] relative size-full">
          <p className="font-['Roboto_Condensed:Regular',sans-serif] font-normal leading-[20px] relative shrink-0 text-[#798589] text-[16px] w-[142px]">Сообщить об ошибке</p>
        </div>
      </div>
    </div>
  );
}

function Frame14() {
  return (
    <div className="content-stretch flex flex-col gap-[20px] items-start relative shrink-0 w-full">
      <Frame11 />
      <Frame10 />
    </div>
  );
}

function Frame8() {
  return (
    <div className="content-stretch flex flex-col gap-[30px] items-start relative shrink-0 w-[184px]">
      <FooterContainer />
      <Frame14 />
    </div>
  );
}

function Frame9() {
  return (
    <div className="absolute content-stretch flex flex-col h-[968px] items-center justify-between left-0 py-[21px] top-0 w-[214px]">
      <div aria-hidden="true" className="absolute border-[#364044] border-r-2 border-solid inset-[0_-1px_0_0] pointer-events-none" />
      <Frame7 />
      <Frame8 />
    </div>
  );
}

function Group82() {
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

function Group81() {
  return (
    <div className="col-1 grid-cols-[max-content] grid-rows-[max-content] inline-grid ml-0 mt-0 place-items-start relative row-1">
      <Group82 />
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

function Group80() {
  return (
    <div className="grid-cols-[max-content] grid-rows-[max-content] inline-grid leading-[0] place-items-start relative shrink-0">
      <Group81 />
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
      <Group80 />
      <Frame />
    </div>
  );
}

function Frame15() {
  return (
    <div className="absolute content-stretch flex items-end justify-between left-[222px] top-[44px] w-[234px]">
      <Icon />
    </div>
  );
}

function EllipseContainer1() {
  return (
    <div className="absolute inset-[0_0_9.8%_0]" data-name="Ellipse Container">
      <div className="absolute inset-[-123.03%_-112.41%_-135.99%_-112.41%]">
        <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 288.964 277.214">
          <g id="Ellipse Container">
            <g filter="url(#filter0_dd_323_146)" id="Ellipse 1">
              <ellipse cx="144.482" cy="133.607" fill="var(--fill-0, #FF6B21)" rx="44.482" ry="38.607" />
            </g>
          </g>
          <defs>
            <filter colorInterpolationFilters="sRGB" filterUnits="userSpaceOnUse" height="277.214" id="filter0_dd_323_146" width="288.964" x="0" y="0">
              <feFlood floodOpacity="0" result="BackgroundImageFix" />
              <feColorMatrix in="SourceAlpha" result="hardAlpha" type="matrix" values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 127 0" />
              <feOffset dy="7" />
              <feComposite in2="hardAlpha" operator="out" />
              <feColorMatrix type="matrix" values="0 0 0 0 0.504676 0 0 0 0 0.203786 0 0 0 0 0.0533413 0 0 0 1 0" />
              <feBlend in2="BackgroundImageFix" mode="normal" result="effect1_dropShadow_323_146" />
              <feColorMatrix in="SourceAlpha" result="hardAlpha" type="matrix" values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 127 0" />
              <feOffset dy="5" />
              <feGaussianBlur stdDeviation="50" />
              <feComposite in2="hardAlpha" operator="out" />
              <feColorMatrix type="matrix" values="0 0 0 0 0.929412 0 0 0 0 0.576471 0 0 0 0 0.513726 0 0 0 0.5 0" />
              <feBlend in2="effect1_dropShadow_323_146" mode="normal" result="effect2_dropShadow_323_146" />
              <feBlend in="SourceGraphic" in2="effect2_dropShadow_323_146" mode="normal" result="shape" />
            </filter>
          </defs>
        </svg>
      </div>
    </div>
  );
}

function EllipseContainer() {
  return (
    <div className="absolute contents inset-[0_0_9.8%_0]" data-name="Ellipse Container">
      <EllipseContainer1 />
    </div>
  );
}

function Component202603041916291Vectorized1() {
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

function Icon1() {
  return (
    <div className="h-[85.607px] relative shrink-0 w-[88.964px]" data-name="Icon">
      <EllipseContainer />
      <Component202603041916291Vectorized1 />
    </div>
  );
}

function VerticalContainer() {
  return (
    <div className="content-stretch flex flex-col items-start relative shrink-0" data-name="Vertical Container">
      <p className="font-['Roboto_Condensed:Regular',sans-serif] font-normal leading-[21px] relative shrink-0 text-[#c3c6d1] text-[22px] whitespace-nowrap">Цвет</p>
    </div>
  );
}

function HorizontalContainer() {
  return (
    <div className="content-stretch flex gap-[25px] items-center relative shrink-0" data-name="Horizontal Container">
      <Icon1 />
      <VerticalContainer />
    </div>
  );
}

function Frame17() {
  return (
    <div className="absolute content-stretch flex items-end justify-between left-[173px] top-[416px] w-[202.964px]">
      <HorizontalContainer />
    </div>
  );
}

function EllipseContainer3() {
  return (
    <div className="col-1 h-[78.981px] ml-0 mt-0 relative row-1 w-[91px]" data-name="Ellipse Container">
      <div className="absolute inset-[0_0_-8.86%_0]">
        <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 91 85.9811">
          <g id="Ellipse Container">
            <g filter="url(#filter0_d_323_152)" id="Ellipse 1">
              <ellipse cx="45.5" cy="39.4906" fill="var(--fill-0, #343E42)" rx="45.5" ry="39.4906" />
            </g>
          </g>
          <defs>
            <filter colorInterpolationFilters="sRGB" filterUnits="userSpaceOnUse" height="85.9811" id="filter0_d_323_152" width="91" x="0" y="0">
              <feFlood floodOpacity="0" result="BackgroundImageFix" />
              <feColorMatrix in="SourceAlpha" result="hardAlpha" type="matrix" values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 127 0" />
              <feOffset dy="7" />
              <feComposite in2="hardAlpha" operator="out" />
              <feColorMatrix type="matrix" values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0.25 0" />
              <feBlend in2="BackgroundImageFix" mode="normal" result="effect1_dropShadow_323_152" />
              <feBlend in="SourceGraphic" in2="effect1_dropShadow_323_152" mode="normal" result="shape" />
            </filter>
          </defs>
        </svg>
      </div>
    </div>
  );
}

function EllipseContainer2() {
  return (
    <div className="col-1 grid-cols-[max-content] grid-rows-[max-content] inline-grid ml-0 mt-0 place-items-start relative row-1" data-name="Ellipse Container">
      <EllipseContainer3 />
    </div>
  );
}

function Homework() {
  return (
    <div className="absolute inset-[8.54%_0_8.55%_0.31%]" data-name="homework">
      <svg className="absolute block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 31.9023 26.5322">
        <g id="homework">
          <path d={svgPaths.p36307f80} fill="var(--fill-0, #717981)" id="Vector" />
          <path d={svgPaths.p17d86080} fill="var(--fill-0, #717981)" id="Vector_2" />
          <path d={svgPaths.p2cf63e80} fill="var(--fill-0, #717981)" id="Vector_3" />
        </g>
      </svg>
    </div>
  );
}

function FreeIconHomework() {
  return (
    <div className="col-1 ml-[30px] mt-[23px] overflow-clip relative row-1 size-[32px]" data-name="free-icon-homework-16744420 1">
      <Homework />
    </div>
  );
}

function IconContainer1() {
  return (
    <div className="grid-cols-[max-content] grid-rows-[max-content] inline-grid leading-[0] place-items-start relative shrink-0" data-name="Icon Container">
      <EllipseContainer2 />
      <FreeIconHomework />
    </div>
  );
}

function VerticalContainer1() {
  return (
    <div className="content-stretch flex flex-col items-start relative shrink-0" data-name="Vertical Container">
      <p className="bg-center bg-clip-text bg-cover bg-no-repeat font-['Roboto_Condensed:Regular',sans-serif] font-normal leading-[21px] relative shrink-0 text-[22px] text-[transparent] w-[109px]" style={{ backgroundImage: `url('${imgLabel}')` }}>
        Домашнее задание
      </p>
    </div>
  );
}

function HorizontalContainer1() {
  return (
    <div className="content-stretch flex gap-[20px] items-center relative shrink-0" data-name="Horizontal Container">
      <IconContainer1 />
      <VerticalContainer1 />
    </div>
  );
}

function Frame16() {
  return (
    <div className="absolute content-stretch flex items-end justify-between left-[152px] top-[609px] w-[298px]">
      <HorizontalContainer1 />
    </div>
  );
}

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

function Container8() {
  return (
    <div className="col-1 content-stretch flex items-center ml-[34px] mt-[27px] relative row-1" data-name="Container">
      <FreeIconYes />
    </div>
  );
}

function Group85() {
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
      <Container8 />
      <div className="col-1 h-[79px] ml-0 mt-0 relative row-1 w-[91px]">
        <svg className="absolute block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 91 79">
          <path d={svgPaths.p145b6a00} id="Ellipse 3" stroke="var(--stroke-0, #6DA233)" strokeLinecap="round" strokeWidth="5" />
        </svg>
      </div>
    </div>
  );
}

function Group84() {
  return (
    <div className="col-1 grid-cols-[max-content] grid-rows-[max-content] inline-grid ml-0 mt-0 place-items-start relative row-1">
      <Group85 />
    </div>
  );
}

function Group83() {
  return (
    <div className="grid-cols-[max-content] grid-rows-[max-content] inline-grid leading-[0] place-items-start relative shrink-0">
      <Group84 />
    </div>
  );
}

function Frame1() {
  return (
    <div className="content-stretch flex flex-col items-start relative shrink-0">
      <p className="bg-center bg-clip-text bg-cover bg-no-repeat font-['Roboto_Condensed:Regular',sans-serif] font-normal leading-[21px] relative shrink-0 text-[22px] text-[transparent] whitespace-nowrap" style={{ backgroundImage: `url('${img1}')` }}>
        Иерархия
      </p>
    </div>
  );
}

function Icon2() {
  return (
    <div className="content-stretch flex gap-[20px] items-center relative shrink-0" data-name="Icon">
      <Group83 />
      <Frame1 />
    </div>
  );
}

function Frame18() {
  return (
    <div className="absolute content-stretch flex items-end justify-between left-[211px] top-[230px] w-[234px]">
      <Icon2 />
    </div>
  );
}

function EllipseContainer5() {
  return (
    <div className="col-1 h-[87.566px] ml-0 mt-0 relative row-1 w-[91px]" data-name="Ellipse Container">
      <svg className="absolute block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 91 87.5662">
        <g id="Ellipse Container">
          <ellipse cx="45.5" cy="43.783" fill="var(--fill-0, #232D31)" id="Ellipse 2" rx="45.5" ry="43.783" />
          <ellipse cx="45.5" cy="39.4906" fill="url(#paint0_linear_323_175)" id="Ellipse 1" rx="45.5" ry="39.4906" />
        </g>
        <defs>
          <linearGradient gradientUnits="userSpaceOnUse" id="paint0_linear_323_175" x1="45.5" x2="45.5" y1="0" y2="78.9811">
            <stop stopColor="#465256" />
            <stop offset="1" stopColor="#313C40" />
          </linearGradient>
        </defs>
      </svg>
    </div>
  );
}

function EllipseContainer4() {
  return (
    <div className="col-1 grid-cols-[max-content] grid-rows-[max-content] inline-grid ml-0 mt-0 place-items-start relative row-1" data-name="Ellipse Container">
      <EllipseContainer5 />
    </div>
  );
}

function Icon3() {
  return (
    <div className="col-1 h-[32.253px] ml-[31.1px] mt-[23.04px] relative row-1 w-[27.646px]" data-name="Icon">
      <svg className="absolute block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 27.6456 32.2532">
        <g clipPath="url(#clip0_323_113)" id="Icon">
          <path d={svgPaths.p20bee780} fill="var(--fill-0, #868D97)" id="Vector" opacity="0.7" />
        </g>
        <defs>
          <clipPath id="clip0_323_113">
            <rect fill="white" height="32.2532" width="27.6456" />
          </clipPath>
        </defs>
      </svg>
    </div>
  );
}

function IconContainer2() {
  return (
    <div className="grid-cols-[max-content] grid-rows-[max-content] inline-grid leading-[0] place-items-start relative shrink-0" data-name="Icon Container">
      <EllipseContainer4 />
      <Icon3 />
    </div>
  );
}

function VerticalContainer2() {
  return (
    <div className="content-stretch flex flex-col items-start relative shrink-0" data-name="Vertical Container">
      <p className="bg-center bg-clip-text bg-cover bg-no-repeat font-['Roboto_Condensed:Medium',sans-serif] font-medium leading-[21px] relative shrink-0 text-[24px] text-[transparent] whitespace-nowrap" style={{ backgroundImage: `url('${imgLabel1}')` }}>
        Иерархия
      </p>
    </div>
  );
}

function HorizontalContainer2() {
  return (
    <div className="absolute content-stretch flex gap-[20px] items-center right-[108px] top-[821px]" data-name="Horizontal Container">
      <IconContainer2 />
      <VerticalContainer2 />
    </div>
  );
}

function Group90() {
  return (
    <div className="absolute h-[103.929px] left-[70px] top-[326px] w-[123px]">
      <div className="absolute inset-[-1.73%_-0.29%_-1.89%_0]">
        <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 123.362 107.691">
          <g id="Group 481519">
            <path d={svgPaths.p3437f500} fill="url(#paint0_linear_323_116)" id="Vector 765" />
            <g id="Group 481516">
              <path d={svgPaths.p37fa0000} fill="url(#paint1_linear_323_116)" id="Vector 770" />
              <path d={svgPaths.p3aeb5880} fill="url(#paint2_linear_323_116)" id="Vector 771" />
              <path d={svgPaths.p3bfc3c40} fill="url(#paint3_linear_323_116)" id="Vector 772" />
              <path d={svgPaths.p1c041bf0} fill="url(#paint4_linear_323_116)" id="Vector 773" />
            </g>
          </g>
          <defs>
            <linearGradient gradientUnits="userSpaceOnUse" id="paint0_linear_323_116" x1="58.5622" x2="26.4041" y1="69.7705" y2="97.954">
              <stop stopColor="#FF6B21" />
              <stop offset="1" stopColor="#994014" />
            </linearGradient>
            <linearGradient gradientUnits="userSpaceOnUse" id="paint1_linear_323_116" x1="13.6335" x2="9.80875" y1="23.0589" y2="23.629">
              <stop stopColor="#FF6B21" />
              <stop offset="1" stopColor="#994014" />
            </linearGradient>
            <linearGradient gradientUnits="userSpaceOnUse" id="paint2_linear_323_116" x1="10.7496" x2="10.7495" y1="8.36496" y2="8.43446">
              <stop stopColor="#FF6B21" />
              <stop offset="1" stopColor="#994014" />
            </linearGradient>
            <linearGradient gradientUnits="userSpaceOnUse" id="paint3_linear_323_116" x1="27.7278" x2="21.9452" y1="27.2652" y2="37.3787">
              <stop stopColor="#FF6B21" />
              <stop offset="1" stopColor="#994014" />
            </linearGradient>
            <linearGradient gradientUnits="userSpaceOnUse" id="paint4_linear_323_116" x1="83.6348" x2="69.5582" y1="19.4323" y2="56.5022">
              <stop stopColor="#FF6B21" />
              <stop offset="1" stopColor="#994014" />
            </linearGradient>
          </defs>
        </svg>
      </div>
    </div>
  );
}

function Group89() {
  return (
    <div className="absolute h-[36.66px] left-[107px] top-[594px] w-[47px]">
      <div className="absolute inset-[-2.66%_-0.32%_0_-2.03%]">
        <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 48.1043 37.6348">
          <g id="Group 481517">
            <path d={svgPaths.p3c5ec300} fill="var(--stroke-0, #455155)" id="Vector 774" />
            <path d={svgPaths.p103cd800} fill="var(--stroke-0, #455155)" id="Vector 775" />
            <path d={svgPaths.p32bc6600} fill="var(--stroke-0, #455155)" id="Vector 776" />
            <path d={svgPaths.p3fc6c200} fill="var(--stroke-0, #455155)" id="Vector 777" />
            <path d={svgPaths.p4454100} fill="var(--stroke-0, #455155)" id="Vector 778" />
            <path d={svgPaths.p45bc500} fill="var(--stroke-0, #455155)" id="Vector 779" />
            <path d={svgPaths.p1b81280} fill="var(--stroke-0, #455155)" id="Vector 780" />
          </g>
        </svg>
      </div>
    </div>
  );
}

function RoadMap() {
  return (
    <div className="h-[1158px] relative shrink-0 w-[545px]" data-name="Road map">
      <div className="absolute h-[942px] right-[169px] top-[19px] w-[181px]">
        <div className="absolute inset-[-0.58%_-3.04%]">
          <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 192 953.002">
            <path d={svgPaths.pf070a80} id="Vector 6" stroke="url(#paint0_linear_323_124)" strokeDasharray="30 20" strokeLinecap="round" strokeOpacity="0.6" strokeWidth="11" />
            <defs>
              <linearGradient gradientUnits="userSpaceOnUse" id="paint0_linear_323_124" x1="83" x2="71.0292" y1="802.393" y2="-18.114">
                <stop stopColor="#2C373A" />
                <stop offset="0.42984" stopColor="#3D4A4E" />
                <stop offset="1" stopColor="#2C373A" />
              </linearGradient>
            </defs>
          </svg>
        </div>
      </div>
      <Frame15 />
      <Frame17 />
      <Frame16 />
      <Frame18 />
      <HorizontalContainer2 />
      <Group90 />
      <Group89 />
      <p className="absolute font-['Roboto_Condensed:Medium',sans-serif] font-medium leading-[21px] left-[-58px] text-[#445054] text-[18px] top-[35px] whitespace-nowrap">Модуль 1</p>
      <p className="absolute font-['Roboto_Condensed:Medium',sans-serif] font-medium leading-[21px] left-[-58px] text-[#445054] text-[18px] top-[811px] whitespace-nowrap">Модуль 2</p>
      <div className="absolute flex h-[161.395px] items-center justify-center left-[123px] top-[583px] w-[150.268px]" style={{ "--transform-inner-width": "1200", "--transform-inner-height": "19" } as React.CSSProperties}>
        <div className="flex-none rotate-[-115.18deg]">
          <div className="h-[105.525px] relative w-[128.73px]">
            <div className="absolute inset-[-0.85%_-0.67%_-0.94%_0.12%]">
              <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 129.443 107.418">
                <path d={svgPaths.p6c9c500} fill="var(--stroke-0, #455155)" id="Vector 794" />
              </svg>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

function MainContainer1() {
  return (
    <div className="absolute content-stretch flex h-[935px] items-start left-[148px] top-0" data-name="Main Container">
      <RoadMap />
    </div>
  );
}

function Group91() {
  return (
    <div className="absolute h-[66px] left-[513px] top-[357px] w-[106px]">
      <div className="absolute inset-[0_-0.83%_-1.35%_-0.76%]">
        <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 107.677 66.8913">
          <g id="Group 481523">
            <path d={svgPaths.p3d1c8b00} fill="var(--stroke-0, #455155)" id="Vector 793" />
            <g id="Group 481520">
              <path d={svgPaths.p3b7608a0} fill="var(--stroke-0, #455155)" id="Vector 785" />
              <g id="Group 481522">
                <path d={svgPaths.p34013700} fill="var(--stroke-0, #455155)" id="Vector 786" />
                <path d={svgPaths.p2653df00} fill="var(--stroke-0, #455155)" id="Vector 787" />
              </g>
              <path d={svgPaths.p2208f100} fill="var(--stroke-0, #455155)" id="Vector 788" />
              <path d={svgPaths.p5c22200} fill="var(--stroke-0, #455155)" id="Vector 789" />
              <path d={svgPaths.p3457fe00} fill="var(--stroke-0, #455155)" id="Vector 790" />
              <g id="Group 481521">
                <path d={svgPaths.p25290300} fill="var(--stroke-0, #455155)" id="Vector 791" />
                <path d={svgPaths.p21d4af80} fill="var(--stroke-0, #455155)" id="Vector 792" />
              </g>
              <path d={svgPaths.p2fcdaf00} fill="var(--stroke-0, #455155)" id="Vector 783" />
              <path d={svgPaths.p3300b680} fill="var(--stroke-0, #455155)" id="Vector 784" />
            </g>
          </g>
        </svg>
      </div>
    </div>
  );
}

function Frame23() {
  return (
    <div className="absolute h-[935px] left-[224px] top-[54px] w-[809px]">
      <div className="absolute h-0 left-0 top-[791px] w-[809px]">
        <div className="absolute inset-[-2px_0]">
          <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 809 4">
            <path d="M0 2H809" id="Vector 687" stroke="url(#paint0_linear_323_109)" strokeDasharray="8 8" strokeWidth="4" />
            <defs>
              <linearGradient gradientUnits="userSpaceOnUse" id="paint0_linear_323_109" x1="0" x2="809" y1="2.5" y2="2.5">
                <stop stopColor="#343E42" stopOpacity="0" />
                <stop offset="0.564351" stopColor="#343E42" />
                <stop offset="1" stopColor="#343E42" stopOpacity="0" />
              </linearGradient>
            </defs>
          </svg>
        </div>
      </div>
      <MainContainer1 />
      <Group91 />
    </div>
  );
}

export default function Component() {
  return (
    <div className="bg-[#2d363a] relative size-full" data-name="Уроки">
      <Frame22 />
      <Header />
      <div className="absolute flex h-0 items-center justify-center left-[218px] top-[70px] w-[1421px]" style={{ "--transform-inner-width": "1200", "--transform-inner-height": "19" } as React.CSSProperties}>
        <div className="flex-none rotate-90">
          <div className="h-[1421px] relative w-0">
            <div className="absolute inset-[0_-1px]">
              <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 2 1421">
                <path d="M1 0V1421" id="Vector 745" stroke="var(--stroke-0, #364044)" strokeWidth="2" />
              </svg>
            </div>
          </div>
        </div>
      </div>
      <Frame9 />
      <Frame23 />
    </div>
  );
}