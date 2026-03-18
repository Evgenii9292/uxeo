import svgPaths from "./svg-zhulzorftn";
import img12E088190693C318Afec73Ca1815D3C41 from "figma:asset/fdff70f649eae1ae4752810919f7b04f9373ac71.png";
import img25Pinterest20200821174201 from "figma:asset/135b7981ee0a2450117e54674e803f431400d838.png";
import img62D1B8Ce5Be6335F5246A923C3Ed65Aa1 from "figma:asset/3b5855b9b94a274e284bca7a31a205878755d6de.png";
import imgFgCj9TVeaAejZc1 from "figma:asset/5cf4fb64fe22e0e5afaa1b984605acb62dfaed4d.png";

function Container1() {
  return (
    <div className="bg-[#343e42] h-[24px] relative rounded-[12296925px] shrink-0" data-name="Container">
      <div className="bg-clip-padding border-0 border-[transparent] border-solid content-stretch flex h-full items-center justify-center px-[11.727px] relative">
        <p className="font-['Inter:Semi_Bold',sans-serif] font-semibold leading-[15.392px] not-italic relative shrink-0 text-[#eef5ff] text-[10.261px] whitespace-nowrap">3 дня</p>
      </div>
    </div>
  );
}

function Container() {
  return (
    <div className="bg-[#404d52] content-stretch flex gap-[10px] h-full items-center justify-center px-[20px] relative rounded-[13.846px] shrink-0" data-name="Container">
      <p className="font-['Roboto_Condensed:Bold',sans-serif] font-bold leading-[27.5px] relative shrink-0 text-[#f4f5fc] text-[18px] whitespace-nowrap">Текущие</p>
      <Container1 />
    </div>
  );
}

function Container2() {
  return (
    <div className="bg-[#323d41] content-stretch flex h-full items-center justify-center px-[20px] relative rounded-[13.846px] shrink-0" data-name="Container">
      <p className="font-['Roboto_Condensed:Bold',sans-serif] font-bold leading-[27.5px] relative shrink-0 text-[#798589] text-[18px] whitespace-nowrap">См. архив</p>
    </div>
  );
}

function Frame20() {
  return (
    <div className="content-stretch flex h-[40px] items-start justify-between relative shrink-0 w-[572px]">
      <Container />
      <Container2 />
    </div>
  );
}

function Battery() {
  return (
    <div className="absolute contents right-[5.51px] top-[6.51px]" data-name="Battery">
      <div className="absolute h-[4.257px] right-[6.39px] top-[6.51px] w-[8.264px]" data-name="Rectangle">
        <svg className="absolute block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 8.26411 4.25727">
          <path d={svgPaths.pedeaa00} id="Rectangle" opacity="0.35" stroke="var(--stroke-0, #2E2533)" strokeWidth="0.375641" />
        </svg>
      </div>
      <div className="absolute h-[1.503px] right-[5.51px] top-[7.89px] w-[0.499px]" data-name="Combined Shape">
        <svg className="absolute block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 0.498866 1.50257">
          <path d={svgPaths.p317cb580} fill="var(--fill-0, #2E2533)" id="Combined Shape" opacity="0.4" />
        </svg>
      </div>
      <div className="absolute h-[2.755px] right-[7.14px] top-[7.26px] w-[6.762px]" data-name="Rectangle">
        <svg className="absolute block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 6.76154 2.7547">
          <path d={svgPaths.p2a97ae72} fill="var(--fill-0, #2E2533)" id="Rectangle" />
        </svg>
      </div>
    </div>
  );
}

function RightSide() {
  return (
    <div className="absolute contents right-[5.51px] top-[6.51px]" data-name="Right Side">
      <Battery />
      <div className="absolute h-[4.12px] right-[16.54px] top-[6.51px] w-[5.737px]" data-name="Wifi">
        <svg className="absolute block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 5.73731 4.11944">
          <path d={svgPaths.pd0c000} fill="var(--fill-0, #2E2533)" id="Wifi" />
        </svg>
      </div>
      <div className="absolute h-[4.007px] right-[24.17px] top-[6.64px] w-[6.386px]" data-name="Mobile Signal">
        <svg className="absolute block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 6.38574 4.00684">
          <path d={svgPaths.p22519200} fill="var(--fill-0, #2E2533)" id="Mobile Signal" />
        </svg>
      </div>
    </div>
  );
}

function LeftSide() {
  return (
    <div className="absolute contents left-[12.57px] top-[6.45px]" data-name="Left Side">
      <div className="absolute h-[4.165px] left-[12.57px] top-[6.45px] w-[10.678px]" data-name="9:41">
        <svg className="absolute block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 10.678 4.16544">
          <g id="9:41">
            <path d={svgPaths.p1588b400} fill="var(--fill-0, #2E2533)" />
            <path d={svgPaths.p212e0540} fill="var(--fill-0, #2E2533)" />
            <path d={svgPaths.p28ad3e00} fill="var(--fill-0, #2E2533)" />
            <path d={svgPaths.p3bdf5500} fill="var(--fill-0, #2E2533)" />
          </g>
        </svg>
      </div>
    </div>
  );
}

function IOsStatusBarBlack1() {
  return (
    <div className="absolute inset-[-2.05%_0_-2.05%_-4.11%] overflow-clip" data-name="iOS/Status Bar/Black">
      <RightSide />
      <LeftSide />
    </div>
  );
}

function IOsStatusBarBlack() {
  return (
    <div className="-translate-x-1/2 absolute h-[15.876px] left-[calc(50%+4.29px)] top-[-14.22px] w-[135.309px]" data-name="iOS/Status Bar/Black">
      <IOsStatusBarBlack1 />
    </div>
  );
}

function Group19() {
  return (
    <div className="absolute contents left-[6.09px] top-[calc(100%+112.7px)]">
      <p className="absolute font-['Roboto_Mono:Medium',sans-serif] font-medium h-[3.962px] leading-[1.275] left-[24.99px] text-[4.876px] text-black top-[calc(100%+114.23px)] uppercase w-[43.275px]">Justin Hope</p>
      <div className="absolute left-[6.09px] rounded-[4.876px] size-[14.019px] top-[calc(100%+112.7px)]" data-name="12e088190693c318afec73ca1815d3c4 1">
        <img alt="" className="absolute inset-0 max-w-none object-cover pointer-events-none rounded-[4.876px] size-full" src={img12E088190693C318Afec73Ca1815D3C41} />
      </div>
      <p className="absolute font-['Neue_Machina:Regular',sans-serif] leading-[1.275] left-[calc(25%-4.26px)] not-italic text-[3.048px] text-[rgba(0,0,0,0.4)] top-[calc(100%+121.85px)] whitespace-nowrap">put up for sale NFT 10 min ago</p>
    </div>
  );
}

function Group20() {
  return (
    <div className="absolute left-[15.85px] size-[4.876px] top-[calc(100%+122.46px)]">
      <svg className="absolute block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 4.87609 4.87615">
        <g id="Group 481197">
          <path d={svgPaths.p1ec49d80} fill="var(--fill-0, #7AAD83)" id="Star 1" />
          <path d={svgPaths.p2f64a180} id="Vector 186" stroke="var(--stroke-0, white)" strokeWidth="0.406334" />
        </g>
      </svg>
    </div>
  );
}

function Group16() {
  return (
    <div className="absolute left-[19.05px] size-[4.876px] top-[calc(100%-56.31px)]">
      <svg className="absolute block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 4.87613 4.87608">
        <g id="Group 481193">
          <path d={svgPaths.p8dc7d00} fill="var(--fill-0, #4F86EC)" id="Star 1" />
          <path d={svgPaths.p661f0d0} id="Vector 186" stroke="var(--stroke-0, white)" strokeWidth="0.406334" />
        </g>
      </svg>
    </div>
  );
}

function Group43() {
  return (
    <div className="absolute contents left-[9.29px] top-[48.6px]">
      <p className="absolute font-['Roboto_Mono:Medium',sans-serif] font-medium h-[3.932px] leading-[0] left-[calc(25%-2.01px)] text-[0px] text-[4.404px] text-black top-[50.18px] uppercase w-[104.128px]">
        <span className="font-['Craftwork_Grotesk:Bold',sans-serif] leading-[1.275]" style={{ fontVariationSettings: "'wdth' 700" }}>
          Justin
        </span>
        <span className="font-['Craftwork_Grotesk:Bold',sans-serif] leading-[1.275]" style={{ fontVariationSettings: "'wdth' 700" }}>{` `}</span>
        <span className="font-['Craftwork_Grotesk:Semi_Bold',sans-serif] leading-[1.275] lowercase text-[#909090]" style={{ fontVariationSettings: "'wdth' 600" }}>
          left a comment on
        </span>
        <span className="font-['Craftwork_Grotesk:Semi_Bold',sans-serif] leading-[1.275] lowercase" style={{ fontVariationSettings: "'wdth' 600" }}>{` LUI`}</span>
      </p>
      <div className="absolute left-[9.29px] rounded-[4.876px] size-[14.019px] top-[48.6px]" data-name="12e088190693c318afec73ca1815d3c4 1">
        <img alt="" className="absolute inset-0 max-w-none object-cover pointer-events-none rounded-[4.876px] size-full" src={img12E088190693C318Afec73Ca1815D3C41} />
      </div>
      <p className="absolute font-['Neue_Machina:Regular',sans-serif] leading-[1.275] left-[calc(25%-1.97px)] not-italic text-[3.46px] text-[rgba(0,0,0,0.4)] top-[calc(100%-56.9px)] whitespace-nowrap">15 min ago</p>
      <Group16 />
    </div>
  );
}

function Group24() {
  return (
    <div className="h-[0.975px] relative w-[4.936px]">
      <svg className="absolute block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 4.93712 0.975379">
        <g id="Group 481201">
          <circle cx="4.44952" cy="0.487601" fill="var(--fill-0, #C4C4C4)" id="Ellipse 43" r="0.487601" />
          <circle cx="2.46905" cy="0.487601" fill="var(--fill-0, #C4C4C4)" id="Ellipse 44" r="0.487601" />
          <circle cx="0.487777" cy="0.487777" fill="var(--fill-0, #C4C4C4)" id="Ellipse 45" r="0.487601" />
        </g>
      </svg>
    </div>
  );
}

function Group25() {
  return (
    <div className="h-[0.975px] relative w-[4.936px]">
      <svg className="absolute block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 4.93705 0.975312">
        <g id="Group 481202">
          <circle cx="4.44942" cy="0.487601" fill="var(--fill-0, #C4C4C4)" id="Ellipse 43" r="0.487601" />
          <circle cx="2.46886" cy="0.487601" fill="var(--fill-0, #C4C4C4)" id="Ellipse 44" r="0.487601" />
          <circle cx="0.487601" cy="0.487602" fill="var(--fill-0, #C4C4C4)" id="Ellipse 45" r="0.487601" />
        </g>
      </svg>
    </div>
  );
}

function Group23() {
  return (
    <div className="absolute contents left-[calc(75%+6.73px)] top-[calc(100%+115.45px)]">
      <div className="absolute bg-[#f1f1f1] h-[9.447px] left-[calc(75%+6.73px)] rounded-[1.829px] top-[calc(100%+115.45px)] w-[27.732px]" />
      <p className="-translate-x-1/2 absolute font-['Roboto_Mono:Medium',sans-serif] font-medium h-[5.486px] leading-[1.275] left-[calc(100%-3.77px)] text-[#7aad83] text-[3.341px] text-center top-[calc(100%+117.88px)] uppercase w-[14.057px]">buy</p>
      <p className="absolute font-['Roboto_Mono:Regular',sans-serif] font-normal h-[3.98px] leading-[1.275] left-[calc(100%-18.86px)] text-[3.184px] text-black top-[calc(100%+118.19px)] uppercase w-[9.752px]">$35.7</p>
    </div>
  );
}

function Ic24Map() {
  return (
    <div className="absolute inset-[317.98%_65.77%_-224.7%_27.85%]" data-name="ic24-map">
      <svg className="absolute block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 7.69897 7.69897">
        <g id="ic24-map">
          <path clipRule="evenodd" d={svgPaths.p17ca0500} fill="var(--fill-0, #483B50)" fillRule="evenodd" id="Icon" />
        </g>
      </svg>
    </div>
  );
}

function Ic24ViewSchedule() {
  return (
    <div className="absolute inset-[317.98%_19.1%_-224.7%_74.52%]" data-name="ic24-view-schedule">
      <svg className="absolute block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 7.69897 7.69897">
        <g id="ic24-view-schedule">
          <path clipRule="evenodd" d={svgPaths.p3be60a00} fill="var(--fill-0, #483B50)" fillRule="evenodd" id="Icon" />
        </g>
      </svg>
    </div>
  );
}

function Group1() {
  return (
    <div className="absolute inset-[8.32%_8.33%_8.35%_8.33%]" data-name="Group">
      <svg className="absolute block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 6.4158 6.4158">
        <g id="Group">
          <path d={svgPaths.p6ad8400} fill="var(--fill-0, #483B50)" id="Vector" />
        </g>
      </svg>
    </div>
  );
}

function Group() {
  return (
    <div className="absolute contents inset-[8.32%_8.33%_8.35%_8.33%]" data-name="Group">
      <Group1 />
    </div>
  );
}

function User() {
  return (
    <div className="absolute left-[calc(100%-8.49px)] size-[7.699px] top-[calc(100%+249.96px)]" data-name="user 1">
      <Group />
    </div>
  );
}

function Group13() {
  return (
    <div className="absolute contents left-[10.36px] top-[calc(100%+250.15px)]">
      <div className="absolute inset-[318.15%_85.35%_-224.53%_8.59%]" data-name="ic24-home">
        <div className="absolute inset-[6.25%_8.46%_10.55%_8.33%]" data-name="Icon">
          <svg className="absolute block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 6.40036 6.39908">
            <path clipRule="evenodd" d={svgPaths.p36b31980} fill="var(--fill-0, #7AAD83)" fillRule="evenodd" id="Icon" />
          </svg>
        </div>
      </div>
      <div className="absolute h-[5.486px] left-[11.89px] top-[calc(100%+251.06px)] w-[4.571px]">
        <div className="absolute inset-[-3.93%_-3.33%_-3.33%_-3.33%]">
          <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 4.87601 5.88393">
            <path d={svgPaths.p173b6b80} fill="var(--fill-0, #7AAD83)" id="Vector 40" stroke="var(--stroke-0, #7AAD83)" strokeWidth="0.304751" />
          </svg>
        </div>
      </div>
      <div className="absolute h-[1.067px] left-[14.17px] top-[calc(100%+256.09px)] w-0">
        <div className="absolute inset-[0_-0.32px]">
          <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 0.639976 1.06663">
            <path d="M0.319988 0V1.06663" id="Vector 41" stroke="var(--stroke-0, white)" strokeWidth="0.639976" />
          </svg>
        </div>
      </div>
    </div>
  );
}

function Group7() {
  return (
    <div className="absolute contents left-[10.36px] top-[calc(100%+249.96px)]">
      <Ic24Map />
      <Ic24ViewSchedule />
      <User />
      <Group13 />
    </div>
  );
}

function Group10() {
  return (
    <div className="absolute left-[calc(50%-5.16px)] size-[20.114px] top-[calc(100%+236.74px)]">
      <div className="absolute inset-[-75.76%]">
        <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 50.5886 50.5886">
          <g id="Group 89">
            <g filter="url(#filter0_d_177_2793)" id="Ellipse 42">
              <circle cx="25.2943" cy="25.2943" fill="var(--fill-0, #7AAD83)" r="10.0568" />
            </g>
            <path clipRule="evenodd" d={svgPaths.p23c37c0} fill="var(--fill-0, white)" fillRule="evenodd" id="Icon" />
          </g>
          <defs>
            <filter colorInterpolationFilters="sRGB" filterUnits="userSpaceOnUse" height="50.5886" id="filter0_d_177_2793" width="50.5886" x="-4.06801e-07" y="-6.33299e-08">
              <feFlood floodOpacity="0" result="BackgroundImageFix" />
              <feColorMatrix in="SourceAlpha" result="hardAlpha" type="matrix" values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 127 0" />
              <feOffset />
              <feGaussianBlur stdDeviation="7.61877" />
              <feColorMatrix type="matrix" values="0 0 0 0 0.851667 0 0 0 0 0.9125 0 0 0 0 0.862684 0 0 0 1 0" />
              <feBlend in2="BackgroundImageFix" mode="normal" result="effect1_dropShadow_177_2793" />
              <feBlend in="SourceGraphic" in2="effect1_dropShadow_177_2793" mode="normal" result="shape" />
            </filter>
          </defs>
        </svg>
      </div>
    </div>
  );
}

function Tapbar() {
  return (
    <div className="absolute contents left-0 top-[calc(100%+236.74px)]" data-name="Tapbar">
      <div className="absolute inset-[313.63%_-8.12%_-237.29%_0]" data-name="BG Controls">
        <svg className="absolute block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 130.433 27.1228">
          <path d={svgPaths.p251da400} fill="var(--fill-0, white)" id="BG Controls" stroke="var(--stroke-0, #F3F3F3)" strokeWidth="0.304751" />
        </svg>
      </div>
      <Group7 />
      <div className="absolute bg-[#212121] h-[1.829px] left-[calc(25%+6.71px)] rounded-[4.571px] top-[calc(100%+267.21px)] w-[53.027px]" />
      <Group10 />
    </div>
  );
}

function Group17() {
  return (
    <div className="absolute contents left-[9.28px] top-[calc(100%-45.65px)]">
      <p className="absolute font-['Roboto_Mono:Medium',sans-serif] font-medium h-[4.09px] leading-[0] left-[calc(25%-2.01px)] text-[0px] text-[4.404px] text-black top-[calc(100%-44.2px)] uppercase w-[104.128px]">
        <span className="font-['Craftwork_Grotesk:Bold',sans-serif] leading-[1.275]" style={{ fontVariationSettings: "'wdth' 700" }}>
          Iren
        </span>
        <span className="font-['Craftwork_Grotesk:Bold',sans-serif] leading-[1.275] lowercase text-[#909090]" style={{ fontVariationSettings: "'wdth' 700" }}>{` `}</span>
        <span className="font-['Craftwork_Grotesk:Semi_Bold',sans-serif] leading-[1.275] lowercase text-[#909090]" style={{ fontVariationSettings: "'wdth' 600" }}>
          shared a file
        </span>
        <span className="font-['Craftwork_Grotesk:Semi_Bold',sans-serif] leading-[1.275] lowercase" style={{ fontVariationSettings: "'wdth' 600" }}>{` 00776 `}</span>
        <span className="font-['Craftwork_Grotesk:Semi_Bold',sans-serif] leading-[1.275] lowercase text-[#909090]" style={{ fontVariationSettings: "'wdth' 600" }}>
          with you
        </span>
      </p>
      <div className="absolute left-[9.29px] rounded-[4.876px] size-[14.019px] top-[calc(100%-45.64px)]" data-name="12e088190693c318afec73ca1815d3c4 1">
        <img alt="" className="absolute inset-0 max-w-none object-cover pointer-events-none rounded-[4.876px] size-full" src={img12E088190693C318Afec73Ca1815D3C41} />
      </div>
      <div className="absolute left-[9.28px] rounded-[4.876px] size-[14.007px] top-[calc(100%-45.65px)]" data-name="62d1b8ce5be6335f5246a923c3ed65aa 1">
        <img alt="" className="absolute inset-0 max-w-none object-cover pointer-events-none rounded-[4.876px] size-full" src={img62D1B8Ce5Be6335F5246A923C3Ed65Aa1} />
      </div>
    </div>
  );
}

function Group44() {
  return (
    <div className="absolute contents left-[9.28px] top-[calc(100%-45.65px)]">
      <p className="absolute font-['Neue_Machina:Regular',sans-serif] leading-[1.275] left-[calc(25%-1.97px)] not-italic text-[3.46px] text-[rgba(0,0,0,0.4)] top-[calc(100%-36.5px)] whitespace-nowrap">70 min ago</p>
      <Group17 />
    </div>
  );
}

function Group47() {
  return (
    <div className="absolute contents left-[9.28px] top-[calc(100%-45.65px)]">
      <Group44 />
      <div className="absolute h-0 left-[9.75px] top-[calc(100%-28.31px)] w-[101.926px]">
        <div className="absolute inset-[-0.16px_0]">
          <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 101.926 0.314585">
            <path d="M0 0.157292H101.926" id="Vector 222" stroke="var(--stroke-0, #EBEBEB)" strokeWidth="0.314585" />
          </svg>
        </div>
      </div>
    </div>
  );
}

function Group18() {
  return (
    <div className="absolute contents left-[9.28px] top-[calc(100%-25.01px)]">
      <p className="absolute font-['Roboto_Mono:Medium',sans-serif] font-medium h-[4.09px] leading-[0] left-[calc(25%-2px)] text-[0px] text-[4.404px] text-black top-[calc(100%-23.56px)] uppercase w-[104.128px]">
        <span className="font-['Craftwork_Grotesk:Bold',sans-serif] leading-[1.275]" style={{ fontVariationSettings: "'wdth' 700" }}>
          Mark
        </span>
        <span className="font-['Craftwork_Grotesk:Bold',sans-serif] leading-[1.275] lowercase text-[#909090]" style={{ fontVariationSettings: "'wdth' 700" }}>{` liked your `}</span>
        <span className="font-['Craftwork_Grotesk:Bold',sans-serif] leading-[1.275] lowercase" style={{ fontVariationSettings: "'wdth' 700" }}>
          post
        </span>
        <span className="font-['Craftwork_Grotesk:Semi_Bold',sans-serif] leading-[1.275] lowercase" style={{ fontVariationSettings: "'wdth' 600" }}>{` `}</span>
      </p>
      <div className="absolute left-[9.29px] rounded-[4.876px] size-[14.019px] top-[calc(100%-25.01px)]" data-name="12e088190693c318afec73ca1815d3c4 1">
        <img alt="" className="absolute inset-0 max-w-none object-cover pointer-events-none rounded-[4.876px] size-full" src={img12E088190693C318Afec73Ca1815D3C41} />
      </div>
      <div className="absolute left-[9.28px] rounded-[4.876px] size-[14.007px] top-[calc(100%-25.01px)]" data-name="FGCj-9tVEAAejZc 1">
        <img alt="" className="absolute inset-0 max-w-none object-cover pointer-events-none rounded-[4.876px] size-full" src={imgFgCj9TVeaAejZc1} />
      </div>
    </div>
  );
}

function Group21() {
  return (
    <div className="absolute left-[19.05px] size-[4.876px] top-[calc(100%-15.25px)]">
      <svg className="absolute block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 4.87601 4.87601">
        <g id="Group 481195">
          <path d={svgPaths.p38cd6d80} fill="var(--fill-0, #4F86EC)" id="Star 1" />
          <path d={svgPaths.p803f800} id="Vector 186" stroke="var(--stroke-0, white)" strokeWidth="0.406334" />
        </g>
      </svg>
    </div>
  );
}

function Group45() {
  return (
    <div className="absolute contents left-[9.28px] top-[calc(100%-25.01px)]">
      <p className="absolute font-['Neue_Machina:Regular',sans-serif] leading-[1.275] left-[calc(25%-1.97px)] not-italic text-[3.46px] text-[rgba(0,0,0,0.4)] top-[calc(100%-15.86px)] whitespace-nowrap">79 min ago</p>
      <Group18 />
      <Group21 />
    </div>
  );
}

function Group48() {
  return (
    <div className="absolute contents left-[9.28px] top-[calc(100%-25.01px)]">
      <Group45 />
      <div className="absolute h-0 left-[9.75px] top-[calc(100%-7.71px)] w-[101.926px]">
        <div className="absolute inset-[-0.16px_0]">
          <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 101.926 0.314585">
            <path d="M0 0.157292H101.926" id="Vector 222" stroke="var(--stroke-0, #EBEBEB)" strokeWidth="0.314585" />
          </svg>
        </div>
      </div>
    </div>
  );
}

function Group46() {
  return (
    <div className="absolute contents left-[21.55px] top-[30.36px]">
      <div className="absolute h-[5.348px] left-[21.55px] top-[30.36px] w-[6.292px]">
        <svg className="absolute block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 6.2917 5.34794">
          <ellipse cx="3.14585" cy="2.67397" fill="var(--fill-0, #4F86EC)" id="Ellipse 313" rx="3.14585" ry="2.67397" />
        </svg>
      </div>
      <p className="absolute capitalize font-['Craftwork_Grotesk:Bold',sans-serif] leading-[1.07] left-[23.75px] text-[3.007px] text-white top-[31.46px] tracking-[0.0752px] whitespace-nowrap" style={{ fontVariationSettings: "'wdth' 700" }}>
        7
      </p>
    </div>
  );
}

function Group50() {
  return (
    <div className="absolute contents left-[calc(50%+7px)] top-[30.2px]">
      <div className="absolute h-[5.663px] left-[calc(50%+7px)] top-[30.2px] w-[7.865px]">
        <svg className="absolute block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 7.86463 5.66253">
          <ellipse cx="3.93231" cy="2.83126" fill="var(--fill-0, #E2E2E2)" id="Ellipse 313" rx="3.93231" ry="2.83126" />
        </svg>
      </div>
      <p className="absolute capitalize font-['Craftwork_Grotesk:Bold',sans-serif] leading-[1.07] left-[calc(50%+8.89px)] text-[#6d6d6d] text-[3.007px] top-[31.46px] tracking-[0.0752px] whitespace-nowrap" style={{ fontVariationSettings: "'wdth' 700" }}>
        10
      </p>
    </div>
  );
}

function IPhone13ProMax() {
  return (
    <div className="-translate-x-1/2 -translate-y-1/2 absolute h-[114.666px] left-[calc(50%+0.18px)] rounded-[7.865px] top-[calc(50%-0.67px)] w-[120.643px]" data-name="iPhone 13 Pro Max - 15" style={{ backgroundImage: "linear-gradient(0.465808deg, rgba(0, 0, 0, 0.2) 32.621%, rgba(255, 255, 255, 0) 43.15%), linear-gradient(90deg, rgb(255, 255, 255) 0%, rgb(255, 255, 255) 100%)" }}>
      <div className="overflow-clip relative rounded-[inherit] size-full">
        <IOsStatusBarBlack />
        <p className="absolute capitalize font-['Craftwork_Grotesk:Bold',sans-serif] leading-[1.07] left-[9.28px] text-[6.095px] text-black top-[12.11px] tracking-[0.1524px] whitespace-nowrap" style={{ fontVariationSettings: "'wdth' 700" }}>
          Notifications
        </p>
        <p className="absolute capitalize font-['Craftwork_Grotesk:Semi_Bold',sans-serif] h-[5.505px] leading-[1.07] left-[9.28px] text-[3.932px] text-black top-[30.36px] tracking-[0.0983px] w-[21.549px]" style={{ fontVariationSettings: "'wdth' 600" }}>
          Inbox
        </p>
        <p className="absolute capitalize font-['Craftwork_Grotesk:Semi_Bold',sans-serif] h-[5.505px] leading-[1.07] left-[calc(25%+19.7px)] text-[3.932px] text-black top-[30.36px] tracking-[0.0983px] w-[36.806px]" style={{ fontVariationSettings: "'wdth' 600" }}>
          General
        </p>
        <p className="absolute font-['Craftwork_Grotesk:Semi_Bold',sans-serif] leading-[1.275] left-[calc(75%-6.13px)] text-[4.289px] text-black top-[13.01px] whitespace-nowrap" style={{ fontVariationSettings: "'wdth' 600" }}>
          Mark all read
        </p>
        <Group19 />
        <p className="absolute font-['Roboto_Mono:Medium',sans-serif] font-medium h-[3.962px] leading-[1.275] left-[24.99px] text-[4.876px] text-black top-[calc(100%+114.23px)] uppercase w-[43.275px]">Justin Hope</p>
        <Group20 />
        <Group43 />
        <div className="absolute bg-[#ebebeb] h-[0.305px] left-[24.99px] top-[calc(100%+108.13px)] w-[99.958px]" />
        <div className="absolute flex h-[0.975px] items-center justify-center left-[calc(100%-2.16px)] top-[calc(100%+99.14px)] w-[4.936px]">
          <div className="flex-none rotate-180">
            <Group24 />
          </div>
        </div>
        <div className="absolute flex h-[0.975px] items-center justify-center left-[calc(100%-2.16px)] top-[calc(100%+235.67px)] w-[4.936px]">
          <div className="flex-none rotate-180">
            <Group25 />
          </div>
        </div>
        <div className="absolute h-[79.54px] left-[calc(25%-4.26px)] rounded-[6.095px] top-[calc(100%+133.12px)] w-[98.434px]" data-name="(25) Pinterest 2020-08-21 17-42-01">
          <img alt="" className="absolute inset-0 max-w-none object-cover pointer-events-none rounded-[6.095px] size-full" src={img25Pinterest20200821174201} />
        </div>
        <Group23 />
        <div className="absolute h-[3.831px] left-[calc(50%-3.72px)] top-[calc(100%+97.64px)] w-[3.657px]">
          <div className="absolute inset-[-6.43%_0_-4.55%_-3.37%]">
            <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 3.78015 4.25157">
              <path d={svgPaths.p1ec2a6c0} id="Vector 188" stroke="var(--stroke-0, black)" strokeWidth="0.348286" />
            </svg>
          </div>
        </div>
        <div className="absolute h-[3.831px] left-[calc(50%-3.72px)] top-[calc(100%+219.24px)] w-[3.657px]">
          <div className="absolute inset-[-6.43%_0_-4.55%_-3.37%]">
            <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 3.78015 4.25157">
              <path d={svgPaths.p1ec2a6c0} id="Vector 188" stroke="var(--stroke-0, black)" strokeWidth="0.348286" />
            </svg>
          </div>
        </div>
        <div className="absolute flex h-[3.831px] items-center justify-center left-[calc(50%-0.76px)] top-[calc(100%+97.64px)] w-[3.657px]">
          <div className="flex-none rotate-180">
            <div className="h-[3.831px] relative w-[3.657px]">
              <div className="absolute inset-[-6.43%_0_-4.55%_-3.37%]">
                <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 3.78015 4.25157">
                  <path d={svgPaths.p1ec2a6c0} id="Vector 189" stroke="var(--stroke-0, black)" strokeWidth="0.348286" />
                </svg>
              </div>
            </div>
          </div>
        </div>
        <div className="absolute flex h-[3.831px] items-center justify-center left-[calc(50%-0.76px)] top-[calc(100%+219.24px)] w-[3.657px]">
          <div className="flex-none rotate-180">
            <div className="h-[3.831px] relative w-[3.657px]">
              <div className="absolute inset-[-6.43%_0_-4.55%_-3.37%]">
                <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 3.78015 4.25157">
                  <path d={svgPaths.p1ec2a6c0} id="Vector 189" stroke="var(--stroke-0, black)" strokeWidth="0.348286" />
                </svg>
              </div>
            </div>
          </div>
        </div>
        <div className="absolute h-[4.68px] left-[calc(75%-2.71px)] top-[calc(100%+97.29px)] w-[5.15px]">
          <div className="absolute inset-[-3.72%_-3.38%_-2.18%_-3.38%]">
            <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 5.49805 4.95652">
              <path d={svgPaths.p3e939780} id="Vector 187" stroke="var(--stroke-0, black)" strokeWidth="0.348286" />
            </svg>
          </div>
        </div>
        <div className="absolute h-[4.68px] left-[calc(75%-2.71px)] top-[calc(100%+218.89px)] w-[5.15px]">
          <div className="absolute inset-[-3.72%_-3.38%_-2.18%_-3.38%]">
            <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 5.49805 4.95652">
              <path d={svgPaths.p3e939780} id="Vector 187" stroke="var(--stroke-0, black)" strokeWidth="0.348286" />
            </svg>
          </div>
        </div>
        <div className="absolute h-[5.11px] left-[calc(25%-3.34px)] top-[calc(100%+96.95px)] w-[5.119px]">
          <svg className="absolute block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 5.11941 5.10966">
            <path d={svgPaths.p35882f80} id="Ellipse 300" stroke="var(--stroke-0, black)" strokeWidth="0.348286" />
          </svg>
        </div>
        <div className="absolute h-[5.11px] left-[calc(25%-3.34px)] top-[calc(100%+218.54px)] w-[5.119px]">
          <svg className="absolute block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 5.11941 5.10966">
            <path d={svgPaths.p35882f80} id="Ellipse 300" stroke="var(--stroke-0, black)" strokeWidth="0.348286" />
          </svg>
        </div>
        <p className="absolute font-['Neue_Machina:Regular',sans-serif] h-[7.314px] leading-[1.605] left-[calc(25%+5.02px)] not-italic text-[4.528px] text-black top-[calc(100%+96.25px)] w-[2.438px]">1</p>
        <p className="absolute font-['Neue_Machina:Regular',sans-serif] h-[7.314px] leading-[1.605] left-[calc(25%+5.02px)] not-italic text-[4.528px] text-black top-[calc(100%+217.84px)] w-[2.438px]">1</p>
        <p className="absolute font-['Neue_Machina:Regular',sans-serif] h-[7.314px] leading-[1.605] left-[calc(50%+5.16px)] not-italic text-[4.528px] text-black top-[calc(100%+96.25px)] w-[3.483px]">0</p>
        <p className="absolute font-['Neue_Machina:Regular',sans-serif] h-[7.314px] leading-[1.605] left-[calc(50%+5.16px)] not-italic text-[4.528px] text-black top-[calc(100%+217.84px)] w-[3.483px]">0</p>
        <p className="absolute font-['Neue_Machina:Regular',sans-serif] h-[7.314px] leading-[1.605] left-[calc(75%+5.64px)] not-italic text-[4.528px] text-black top-[calc(100%+96.25px)] w-[3.135px]">4</p>
        <p className="absolute font-['Neue_Machina:Regular',sans-serif] h-[7.314px] leading-[1.605] left-[calc(75%+5.64px)] not-italic text-[4.528px] text-black top-[calc(100%+217.84px)] w-[3.135px]">4</p>
        <Tapbar />
        <div className="absolute h-0 left-[9.75px] top-[39.01px] w-[101.926px]">
          <div className="absolute inset-[-0.39px_0]">
            <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 101.926 0.786462">
              <path d="M0 0.393231H101.926" id="Vector 221" stroke="var(--stroke-0, #EBEBEB)" strokeWidth="0.786462" />
            </svg>
          </div>
        </div>
        <div className="absolute h-0 left-[9.75px] top-[39.01px] w-[28.155px]">
          <div className="absolute inset-[-0.47px_0]">
            <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 28.1554 0.943755">
              <path d="M0 0.471877H28.1554" id="Vector 223" stroke="var(--stroke-0, #4F86EC)" strokeWidth="0.943755" />
            </svg>
          </div>
        </div>
        <div className="absolute h-0 left-[9.75px] top-[calc(100%-48.92px)] w-[101.926px]">
          <div className="absolute inset-[-0.16px_0]">
            <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 101.926 0.314585">
              <path d="M0 0.157292H101.926" id="Vector 222" stroke="var(--stroke-0, #EBEBEB)" strokeWidth="0.314585" />
            </svg>
          </div>
        </div>
        <Group47 />
        <Group48 />
        <Group46 />
        <Group50 />
      </div>
      <div aria-hidden="true" className="absolute border-[#404d52] border-[3.562px] border-solid inset-[-3.562px] pointer-events-none rounded-[11.427px]" />
    </div>
  );
}

function Group49() {
  return (
    <div className="-translate-x-1/2 -translate-y-1/2 absolute contents left-[calc(50%+0.18px)] top-[calc(50%-0.67px)]">
      <IPhone13ProMax />
    </div>
  );
}

function Frame() {
  return (
    <div className="bg-[#38444a] flex-[1_0_0] min-h-px min-w-px relative rounded-[24px] w-[185px]">
      <Group49 />
    </div>
  );
}

function Frame7() {
  return (
    <div className="content-stretch flex flex-col h-full items-start relative shrink-0">
      <Frame />
    </div>
  );
}

function Frame3() {
  return (
    <div className="content-stretch flex flex-col items-start relative shrink-0">
      <p className="font-['Roboto_Condensed:Bold',sans-serif] font-bold leading-[27.5px] relative shrink-0 text-[#f4f5fc] text-[24px] w-[316px]">Меню для приложения</p>
    </div>
  );
}

function Frame22() {
  return (
    <div className="content-stretch flex flex-col gap-[10px] items-start relative shrink-0">
      <Frame3 />
      <p className="font-['Roboto_Condensed:Regular',sans-serif] font-normal leading-[20px] relative shrink-0 text-[#798589] text-[18px] w-[316px]">Создайте стартовый экран приложения</p>
    </div>
  );
}

function Layer() {
  return (
    <div className="absolute inset-[0_11.67%_0_11.66%]" data-name="Layer 1">
      <svg className="absolute block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 10.7333 14">
        <g id="Layer 1">
          <path d={svgPaths.p11af9000} fill="var(--fill-0, #F1F2FB)" id="hourglass" />
        </g>
      </svg>
    </div>
  );
}

function Layer1() {
  return (
    <div className="absolute contents inset-[0_11.67%_0_11.66%]" data-name="Layer 2">
      <Layer />
    </div>
  );
}

function FreeIconSandClocks() {
  return (
    <div className="overflow-clip relative shrink-0 size-[14px]" data-name="free-icon-sand-clocks-7077988 1">
      <Layer1 />
    </div>
  );
}

function Container6() {
  return (
    <div className="content-stretch flex gap-[5px] items-center justify-center relative shrink-0" data-name="Container">
      <FreeIconSandClocks />
      <p className="font-['Roboto_Condensed:Medium',sans-serif] font-medium leading-[20px] relative shrink-0 text-[#f1f7fb] text-[16px] whitespace-nowrap">25 мин</p>
    </div>
  );
}

function Container5() {
  return (
    <div className="content-stretch flex items-center relative shrink-0" data-name="Container">
      <Container6 />
    </div>
  );
}

function Container4() {
  return (
    <div className="content-stretch flex flex-col items-end relative shrink-0" data-name="Container">
      <Container5 />
    </div>
  );
}

function Container8() {
  return (
    <div className="content-stretch flex items-center relative shrink-0" data-name="Container">
      <div className="content-stretch flex gap-[5px] items-center justify-center relative shrink-0">
        <div className="overflow-clip relative shrink-0 size-[14px]" data-name="Icon/Face">
          <div className="absolute bottom-[37.5%] left-[27.08%] right-[60.42%] top-1/2" data-name="Vector">
            <svg className="absolute block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 1.75 1.75">
              <path d={svgPaths.p1388cf00} fill="var(--fill-0, #F1F7FB)" id="Vector" />
            </svg>
          </div>
          <div className="absolute inset-[2.08%_0_4.17%_0]" data-name="Vector">
            <svg className="absolute block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 14 13.125">
              <path d={svgPaths.pf7fd000} fill="var(--fill-0, #F1F7FB)" id="Vector" />
            </svg>
          </div>
          <div className="absolute bottom-[37.5%] left-[60.42%] right-[27.08%] top-1/2" data-name="Vector">
            <svg className="absolute block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 1.75 1.75">
              <path d={svgPaths.p1388cf00} fill="var(--fill-0, #F1F7FB)" id="Vector" />
            </svg>
          </div>
          <div className="absolute inset-[70.84%_36.46%_18.76%_36.46%]" data-name="Vector">
            <svg className="absolute block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 3.79188 1.45548">
              <path d={svgPaths.p1eb2aec0} fill="var(--fill-0, #F1F7FB)" id="Vector" />
            </svg>
          </div>
        </div>
        <p className="font-['Roboto_Condensed:Medium',sans-serif] font-medium leading-[20px] relative shrink-0 text-[#f1f7fb] text-[16px] whitespace-nowrap">Мидл</p>
      </div>
    </div>
  );
}

function Container7() {
  return (
    <div className="content-stretch flex flex-col items-end relative shrink-0" data-name="Container">
      <Container8 />
    </div>
  );
}

function Container3() {
  return (
    <div className="content-center flex flex-wrap gap-[5px_20px] items-center relative shrink-0 w-full" data-name="Container">
      <Container4 />
      <Container7 />
    </div>
  );
}

function Frame13() {
  return (
    <div className="content-stretch flex flex-col gap-[30px] items-start relative shrink-0 w-full">
      <Frame22 />
      <Container3 />
    </div>
  );
}

function Layer2() {
  return (
    <div className="absolute inset-[0.01%_0]" data-name="Layer_1-2_00000065067264743551163000000013251163527955171221_">
      <svg className="absolute block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 16 15.996">
        <g id="Layer_1-2_00000065067264743551163000000013251163527955171221_">
          <path d={svgPaths.p203c2880} fill="var(--fill-0, #F4F5FC)" id="edit" />
        </g>
      </svg>
    </div>
  );
}

function Group2() {
  return (
    <div className="absolute contents inset-[0.01%_0]" data-name="Group">
      <Layer2 />
    </div>
  );
}

function FreeIconPencil() {
  return (
    <div className="relative shrink-0 size-[16px]" data-name="free-icon-pencil-11985541 (1) 1">
      <div className="bg-clip-padding border-0 border-[transparent] border-solid overflow-clip relative rounded-[inherit] size-full">
        <Group2 />
      </div>
    </div>
  );
}

function Container10() {
  return (
    <div className="bg-[#3a474c] h-[28.585px] relative rounded-[12296925px] shrink-0" data-name="Container">
      <div className="bg-clip-padding border-0 border-[transparent] border-solid content-stretch flex h-full items-center justify-center px-[11.727px] relative">
        <p className="font-['Inter:Semi_Bold',sans-serif] font-semibold leading-[15.392px] not-italic relative shrink-0 text-[#eef5ff] text-[10.261px] whitespace-nowrap">+1250 XP</p>
      </div>
    </div>
  );
}

function Container9() {
  return (
    <div className="bg-[#343e42] h-[55px] relative rounded-[24px] shrink-0 w-full" data-name="Container">
      <div aria-hidden="true" className="absolute border border-[#57646a] border-solid inset-0 pointer-events-none rounded-[24px] shadow-[0px_5px_0px_0px_rgba(0,0,0,0.5)]" />
      <div className="flex flex-row items-center justify-center size-full">
        <div className="content-stretch flex gap-[8px] items-center justify-center px-[17px] py-px relative size-full">
          <FreeIconPencil />
          <p className="font-['Roboto_Condensed:Bold',sans-serif] font-bold leading-[27.5px] relative shrink-0 text-[#f4f5fc] text-[22px] whitespace-nowrap">{`Начать `}</p>
          <Container10 />
        </div>
      </div>
    </div>
  );
}

function Frame14() {
  return (
    <div className="content-stretch flex flex-col items-start relative shrink-0 w-full">
      <Container9 />
    </div>
  );
}

function Frame5() {
  return (
    <div className="content-stretch flex flex-[1_0_0] flex-col h-full items-start justify-between min-h-px min-w-px relative">
      <Frame13 />
      <Frame14 />
    </div>
  );
}

function Frame6() {
  return (
    <div className="content-stretch flex flex-[1_0_0] gap-[20px] items-start min-h-px min-w-px relative w-full">
      <Frame7 />
      <Frame5 />
    </div>
  );
}

function Link() {
  return (
    <div className="content-stretch flex flex-col h-[290px] items-center p-[20px] relative rounded-[24px] shrink-0 w-[572px]" data-name="Link" style={{ backgroundImage: "linear-gradient(136.169deg, rgb(66, 79, 84) 9.6672%, rgb(66, 82, 89) 53.469%, rgb(52, 63, 68) 92.062%)" }}>
      <Frame6 />
    </div>
  );
}

function Battery1() {
  return (
    <div className="absolute contents right-[5.51px] top-[6.51px]" data-name="Battery">
      <div className="absolute h-[4.257px] right-[6.39px] top-[6.51px] w-[8.264px]" data-name="Rectangle">
        <svg className="absolute block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 8.26411 4.25727">
          <path d={svgPaths.pedeaa00} id="Rectangle" opacity="0.35" stroke="var(--stroke-0, #2E2533)" strokeWidth="0.375641" />
        </svg>
      </div>
      <div className="absolute h-[1.503px] right-[5.51px] top-[7.89px] w-[0.499px]" data-name="Combined Shape">
        <svg className="absolute block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 0.498866 1.50257">
          <path d={svgPaths.p317cb580} fill="var(--fill-0, #2E2533)" id="Combined Shape" opacity="0.4" />
        </svg>
      </div>
      <div className="absolute h-[2.755px] right-[7.14px] top-[7.26px] w-[6.762px]" data-name="Rectangle">
        <svg className="absolute block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 6.76154 2.7547">
          <path d={svgPaths.p2a97ae72} fill="var(--fill-0, #2E2533)" id="Rectangle" />
        </svg>
      </div>
    </div>
  );
}

function RightSide1() {
  return (
    <div className="absolute contents right-[5.51px] top-[6.51px]" data-name="Right Side">
      <Battery1 />
      <div className="absolute h-[4.12px] right-[16.54px] top-[6.51px] w-[5.737px]" data-name="Wifi">
        <svg className="absolute block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 5.73731 4.11944">
          <path d={svgPaths.p640e800} fill="var(--fill-0, #2E2533)" id="Wifi" />
        </svg>
      </div>
      <div className="absolute h-[4.007px] right-[24.17px] top-[6.64px] w-[6.386px]" data-name="Mobile Signal">
        <svg className="absolute block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 6.38574 4.00684">
          <path d={svgPaths.p22519200} fill="var(--fill-0, #2E2533)" id="Mobile Signal" />
        </svg>
      </div>
    </div>
  );
}

function LeftSide1() {
  return (
    <div className="absolute contents left-[12.57px] top-[6.45px]" data-name="Left Side">
      <div className="absolute h-[4.165px] left-[12.57px] top-[6.45px] w-[10.678px]" data-name="9:41">
        <svg className="absolute block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 10.678 4.16544">
          <g id="9:41">
            <path d={svgPaths.p1588b400} fill="var(--fill-0, #2E2533)" />
            <path d={svgPaths.p212e0540} fill="var(--fill-0, #2E2533)" />
            <path d={svgPaths.p28ad3e00} fill="var(--fill-0, #2E2533)" />
            <path d={svgPaths.p3bdf5500} fill="var(--fill-0, #2E2533)" />
          </g>
        </svg>
      </div>
    </div>
  );
}

function IOsStatusBarBlack3() {
  return (
    <div className="absolute inset-[-2.05%_0_-2.05%_-4.11%] overflow-clip" data-name="iOS/Status Bar/Black">
      <RightSide1 />
      <LeftSide1 />
    </div>
  );
}

function IOsStatusBarBlack2() {
  return (
    <div className="-translate-x-1/2 absolute h-[15.876px] left-[calc(50%+4.29px)] top-[-14.22px] w-[135.309px]" data-name="iOS/Status Bar/Black">
      <IOsStatusBarBlack3 />
    </div>
  );
}

function Group22() {
  return (
    <div className="absolute contents left-[6.09px] top-[calc(100%+112.7px)]">
      <p className="absolute font-['Roboto_Mono:Medium',sans-serif] font-medium h-[3.962px] leading-[1.275] left-[24.99px] text-[4.876px] text-black top-[calc(100%+114.23px)] uppercase w-[43.275px]">Justin Hope</p>
      <div className="absolute left-[6.09px] rounded-[4.876px] size-[14.019px] top-[calc(100%+112.7px)]" data-name="12e088190693c318afec73ca1815d3c4 1">
        <img alt="" className="absolute inset-0 max-w-none object-cover pointer-events-none rounded-[4.876px] size-full" src={img12E088190693C318Afec73Ca1815D3C41} />
      </div>
      <p className="absolute font-['Neue_Machina:Regular',sans-serif] leading-[1.275] left-[calc(25%-4.26px)] not-italic text-[3.048px] text-[rgba(0,0,0,0.4)] top-[calc(100%+121.85px)] whitespace-nowrap">put up for sale NFT 10 min ago</p>
    </div>
  );
}

function Group26() {
  return (
    <div className="absolute left-[15.85px] size-[4.876px] top-[calc(100%+122.46px)]">
      <svg className="absolute block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 4.87609 4.87615">
        <g id="Group 481197">
          <path d={svgPaths.p1ec49d80} fill="var(--fill-0, #7AAD83)" id="Star 1" />
          <path d={svgPaths.p2f64a180} id="Vector 186" stroke="var(--stroke-0, white)" strokeWidth="0.406334" />
        </g>
      </svg>
    </div>
  );
}

function Group27() {
  return (
    <div className="absolute left-[19.05px] size-[4.876px] top-[calc(100%-56.31px)]">
      <svg className="absolute block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 4.87613 4.87608">
        <g id="Group 481193">
          <path d={svgPaths.p8dc7d00} fill="var(--fill-0, #4F86EC)" id="Star 1" />
          <path d={svgPaths.p661f0d0} id="Vector 186" stroke="var(--stroke-0, white)" strokeWidth="0.406334" />
        </g>
      </svg>
    </div>
  );
}

function Group52() {
  return (
    <div className="absolute contents left-[9.29px] top-[48.6px]">
      <p className="absolute font-['Roboto_Mono:Medium',sans-serif] font-medium h-[3.932px] leading-[0] left-[calc(25%-2.01px)] text-[0px] text-[4.404px] text-black top-[50.18px] uppercase w-[104.128px]">
        <span className="font-['Craftwork_Grotesk:Bold',sans-serif] leading-[1.275]" style={{ fontVariationSettings: "'wdth' 700" }}>
          Justin
        </span>
        <span className="font-['Craftwork_Grotesk:Bold',sans-serif] leading-[1.275]" style={{ fontVariationSettings: "'wdth' 700" }}>{` `}</span>
        <span className="font-['Craftwork_Grotesk:Semi_Bold',sans-serif] leading-[1.275] lowercase text-[#909090]" style={{ fontVariationSettings: "'wdth' 600" }}>
          left a comment on
        </span>
        <span className="font-['Craftwork_Grotesk:Semi_Bold',sans-serif] leading-[1.275] lowercase" style={{ fontVariationSettings: "'wdth' 600" }}>{` LUI`}</span>
      </p>
      <div className="absolute left-[9.29px] rounded-[4.876px] size-[14.019px] top-[48.6px]" data-name="12e088190693c318afec73ca1815d3c4 1">
        <img alt="" className="absolute inset-0 max-w-none object-cover pointer-events-none rounded-[4.876px] size-full" src={img12E088190693C318Afec73Ca1815D3C41} />
      </div>
      <p className="absolute font-['Neue_Machina:Regular',sans-serif] leading-[1.275] left-[calc(25%-1.97px)] not-italic text-[3.46px] text-[rgba(0,0,0,0.4)] top-[calc(100%-56.9px)] whitespace-nowrap">15 min ago</p>
      <Group27 />
    </div>
  );
}

function Group28() {
  return (
    <div className="h-[0.975px] relative w-[4.936px]">
      <svg className="absolute block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 4.93712 0.975379">
        <g id="Group 481201">
          <circle cx="4.44952" cy="0.487601" fill="var(--fill-0, #C4C4C4)" id="Ellipse 43" r="0.487601" />
          <circle cx="2.46905" cy="0.487601" fill="var(--fill-0, #C4C4C4)" id="Ellipse 44" r="0.487601" />
          <circle cx="0.487777" cy="0.487777" fill="var(--fill-0, #C4C4C4)" id="Ellipse 45" r="0.487601" />
        </g>
      </svg>
    </div>
  );
}

function Group29() {
  return (
    <div className="h-[0.975px] relative w-[4.936px]">
      <svg className="absolute block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 4.93705 0.975312">
        <g id="Group 481202">
          <circle cx="4.44942" cy="0.487601" fill="var(--fill-0, #C4C4C4)" id="Ellipse 43" r="0.487601" />
          <circle cx="2.46886" cy="0.487601" fill="var(--fill-0, #C4C4C4)" id="Ellipse 44" r="0.487601" />
          <circle cx="0.487601" cy="0.487602" fill="var(--fill-0, #C4C4C4)" id="Ellipse 45" r="0.487601" />
        </g>
      </svg>
    </div>
  );
}

function Group30() {
  return (
    <div className="absolute contents left-[calc(75%+6.73px)] top-[calc(100%+115.45px)]">
      <div className="absolute bg-[#f1f1f1] h-[9.447px] left-[calc(75%+6.73px)] rounded-[1.829px] top-[calc(100%+115.45px)] w-[27.732px]" />
      <p className="-translate-x-1/2 absolute font-['Roboto_Mono:Medium',sans-serif] font-medium h-[5.486px] leading-[1.275] left-[calc(100%-3.77px)] text-[#7aad83] text-[3.341px] text-center top-[calc(100%+117.88px)] uppercase w-[14.057px]">buy</p>
      <p className="absolute font-['Roboto_Mono:Regular',sans-serif] font-normal h-[3.98px] leading-[1.275] left-[calc(100%-18.86px)] text-[3.184px] text-black top-[calc(100%+118.19px)] uppercase w-[9.752px]">$35.7</p>
    </div>
  );
}

function Ic24Map1() {
  return (
    <div className="absolute inset-[317.98%_65.77%_-224.7%_27.85%]" data-name="ic24-map">
      <svg className="absolute block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 7.69897 7.69897">
        <g id="ic24-map">
          <path clipRule="evenodd" d={svgPaths.p17ca0500} fill="var(--fill-0, #483B50)" fillRule="evenodd" id="Icon" />
        </g>
      </svg>
    </div>
  );
}

function Ic24ViewSchedule1() {
  return (
    <div className="absolute inset-[317.98%_19.1%_-224.7%_74.52%]" data-name="ic24-view-schedule">
      <svg className="absolute block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 7.69897 7.69897">
        <g id="ic24-view-schedule">
          <path clipRule="evenodd" d={svgPaths.p3be60a00} fill="var(--fill-0, #483B50)" fillRule="evenodd" id="Icon" />
        </g>
      </svg>
    </div>
  );
}

function Group4() {
  return (
    <div className="absolute inset-[8.32%_8.33%_8.35%_8.33%]" data-name="Group">
      <svg className="absolute block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 6.4158 6.4158">
        <g id="Group">
          <path d={svgPaths.p6ad8400} fill="var(--fill-0, #483B50)" id="Vector" />
        </g>
      </svg>
    </div>
  );
}

function Group3() {
  return (
    <div className="absolute contents inset-[8.32%_8.33%_8.35%_8.33%]" data-name="Group">
      <Group4 />
    </div>
  );
}

function User1() {
  return (
    <div className="absolute left-[calc(100%-8.49px)] size-[7.699px] top-[calc(100%+249.96px)]" data-name="user 1">
      <Group3 />
    </div>
  );
}

function Group14() {
  return (
    <div className="absolute contents left-[10.36px] top-[calc(100%+250.15px)]">
      <div className="absolute inset-[318.15%_85.35%_-224.53%_8.59%]" data-name="ic24-home">
        <div className="absolute inset-[6.25%_8.46%_10.55%_8.33%]" data-name="Icon">
          <svg className="absolute block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 6.40036 6.39908">
            <path clipRule="evenodd" d={svgPaths.p36b31980} fill="var(--fill-0, #7AAD83)" fillRule="evenodd" id="Icon" />
          </svg>
        </div>
      </div>
      <div className="absolute h-[5.486px] left-[11.89px] top-[calc(100%+251.06px)] w-[4.571px]">
        <div className="absolute inset-[-3.93%_-3.33%_-3.33%_-3.33%]">
          <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 4.87601 5.88393">
            <path d={svgPaths.p173b6b80} fill="var(--fill-0, #7AAD83)" id="Vector 40" stroke="var(--stroke-0, #7AAD83)" strokeWidth="0.304751" />
          </svg>
        </div>
      </div>
      <div className="absolute h-[1.067px] left-[14.17px] top-[calc(100%+256.09px)] w-0">
        <div className="absolute inset-[0_-0.32px]">
          <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 0.639976 1.06663">
            <path d="M0.319988 0V1.06663" id="Vector 41" stroke="var(--stroke-0, white)" strokeWidth="0.639976" />
          </svg>
        </div>
      </div>
    </div>
  );
}

function Group8() {
  return (
    <div className="absolute contents left-[10.36px] top-[calc(100%+249.96px)]">
      <Ic24Map1 />
      <Ic24ViewSchedule1 />
      <User1 />
      <Group14 />
    </div>
  );
}

function Group11() {
  return (
    <div className="absolute left-[calc(50%-5.16px)] size-[20.114px] top-[calc(100%+236.74px)]">
      <div className="absolute inset-[-75.76%]">
        <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 50.5886 50.5886">
          <g id="Group 89">
            <g filter="url(#filter0_d_177_2793)" id="Ellipse 42">
              <circle cx="25.2943" cy="25.2943" fill="var(--fill-0, #7AAD83)" r="10.0568" />
            </g>
            <path clipRule="evenodd" d={svgPaths.p23c37c0} fill="var(--fill-0, white)" fillRule="evenodd" id="Icon" />
          </g>
          <defs>
            <filter colorInterpolationFilters="sRGB" filterUnits="userSpaceOnUse" height="50.5886" id="filter0_d_177_2793" width="50.5886" x="-4.06801e-07" y="-6.33299e-08">
              <feFlood floodOpacity="0" result="BackgroundImageFix" />
              <feColorMatrix in="SourceAlpha" result="hardAlpha" type="matrix" values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 127 0" />
              <feOffset />
              <feGaussianBlur stdDeviation="7.61877" />
              <feColorMatrix type="matrix" values="0 0 0 0 0.851667 0 0 0 0 0.9125 0 0 0 0 0.862684 0 0 0 1 0" />
              <feBlend in2="BackgroundImageFix" mode="normal" result="effect1_dropShadow_177_2793" />
              <feBlend in="SourceGraphic" in2="effect1_dropShadow_177_2793" mode="normal" result="shape" />
            </filter>
          </defs>
        </svg>
      </div>
    </div>
  );
}

function Tapbar1() {
  return (
    <div className="absolute contents left-0 top-[calc(100%+236.74px)]" data-name="Tapbar">
      <div className="absolute inset-[313.63%_-8.12%_-237.29%_0]" data-name="BG Controls">
        <svg className="absolute block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 130.433 27.1228">
          <path d={svgPaths.p251da400} fill="var(--fill-0, white)" id="BG Controls" stroke="var(--stroke-0, #F3F3F3)" strokeWidth="0.304751" />
        </svg>
      </div>
      <Group8 />
      <div className="absolute bg-[#212121] h-[1.829px] left-[calc(25%+6.71px)] rounded-[4.571px] top-[calc(100%+267.21px)] w-[53.027px]" />
      <Group11 />
    </div>
  );
}

function Group31() {
  return (
    <div className="absolute contents left-[9.28px] top-[calc(100%-45.65px)]">
      <p className="absolute font-['Roboto_Mono:Medium',sans-serif] font-medium h-[4.09px] leading-[0] left-[calc(25%-2.01px)] text-[0px] text-[4.404px] text-black top-[calc(100%-44.2px)] uppercase w-[104.128px]">
        <span className="font-['Craftwork_Grotesk:Bold',sans-serif] leading-[1.275]" style={{ fontVariationSettings: "'wdth' 700" }}>
          Iren
        </span>
        <span className="font-['Craftwork_Grotesk:Bold',sans-serif] leading-[1.275] lowercase text-[#909090]" style={{ fontVariationSettings: "'wdth' 700" }}>{` `}</span>
        <span className="font-['Craftwork_Grotesk:Semi_Bold',sans-serif] leading-[1.275] lowercase text-[#909090]" style={{ fontVariationSettings: "'wdth' 600" }}>
          shared a file
        </span>
        <span className="font-['Craftwork_Grotesk:Semi_Bold',sans-serif] leading-[1.275] lowercase" style={{ fontVariationSettings: "'wdth' 600" }}>{` 00776 `}</span>
        <span className="font-['Craftwork_Grotesk:Semi_Bold',sans-serif] leading-[1.275] lowercase text-[#909090]" style={{ fontVariationSettings: "'wdth' 600" }}>
          with you
        </span>
      </p>
      <div className="absolute left-[9.29px] rounded-[4.876px] size-[14.019px] top-[calc(100%-45.64px)]" data-name="12e088190693c318afec73ca1815d3c4 1">
        <img alt="" className="absolute inset-0 max-w-none object-cover pointer-events-none rounded-[4.876px] size-full" src={img12E088190693C318Afec73Ca1815D3C41} />
      </div>
      <div className="absolute left-[9.28px] rounded-[4.876px] size-[14.007px] top-[calc(100%-45.65px)]" data-name="62d1b8ce5be6335f5246a923c3ed65aa 1">
        <img alt="" className="absolute inset-0 max-w-none object-cover pointer-events-none rounded-[4.876px] size-full" src={img62D1B8Ce5Be6335F5246A923C3Ed65Aa1} />
      </div>
    </div>
  );
}

function Group54() {
  return (
    <div className="absolute contents left-[9.28px] top-[calc(100%-45.65px)]">
      <p className="absolute font-['Neue_Machina:Regular',sans-serif] leading-[1.275] left-[calc(25%-1.97px)] not-italic text-[3.46px] text-[rgba(0,0,0,0.4)] top-[calc(100%-36.5px)] whitespace-nowrap">70 min ago</p>
      <Group31 />
    </div>
  );
}

function Group53() {
  return (
    <div className="absolute contents left-[9.28px] top-[calc(100%-45.65px)]">
      <Group54 />
      <div className="absolute h-0 left-[9.75px] top-[calc(100%-28.31px)] w-[101.926px]">
        <div className="absolute inset-[-0.16px_0]">
          <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 101.926 0.314585">
            <path d="M0 0.157292H101.926" id="Vector 222" stroke="var(--stroke-0, #EBEBEB)" strokeWidth="0.314585" />
          </svg>
        </div>
      </div>
    </div>
  );
}

function Group32() {
  return (
    <div className="absolute contents left-[9.28px] top-[calc(100%-25.01px)]">
      <p className="absolute font-['Roboto_Mono:Medium',sans-serif] font-medium h-[4.09px] leading-[0] left-[calc(25%-2px)] text-[0px] text-[4.404px] text-black top-[calc(100%-23.56px)] uppercase w-[104.128px]">
        <span className="font-['Craftwork_Grotesk:Bold',sans-serif] leading-[1.275]" style={{ fontVariationSettings: "'wdth' 700" }}>
          Mark
        </span>
        <span className="font-['Craftwork_Grotesk:Bold',sans-serif] leading-[1.275] lowercase text-[#909090]" style={{ fontVariationSettings: "'wdth' 700" }}>{` liked your `}</span>
        <span className="font-['Craftwork_Grotesk:Bold',sans-serif] leading-[1.275] lowercase" style={{ fontVariationSettings: "'wdth' 700" }}>
          post
        </span>
        <span className="font-['Craftwork_Grotesk:Semi_Bold',sans-serif] leading-[1.275] lowercase" style={{ fontVariationSettings: "'wdth' 600" }}>{` `}</span>
      </p>
      <div className="absolute left-[9.29px] rounded-[4.876px] size-[14.019px] top-[calc(100%-25.01px)]" data-name="12e088190693c318afec73ca1815d3c4 1">
        <img alt="" className="absolute inset-0 max-w-none object-cover pointer-events-none rounded-[4.876px] size-full" src={img12E088190693C318Afec73Ca1815D3C41} />
      </div>
      <div className="absolute left-[9.28px] rounded-[4.876px] size-[14.007px] top-[calc(100%-25.01px)]" data-name="FGCj-9tVEAAejZc 1">
        <img alt="" className="absolute inset-0 max-w-none object-cover pointer-events-none rounded-[4.876px] size-full" src={imgFgCj9TVeaAejZc1} />
      </div>
    </div>
  );
}

function Group33() {
  return (
    <div className="absolute left-[19.05px] size-[4.876px] top-[calc(100%-15.25px)]">
      <svg className="absolute block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 4.87601 4.87601">
        <g id="Group 481195">
          <path d={svgPaths.p38cd6d80} fill="var(--fill-0, #4F86EC)" id="Star 1" />
          <path d={svgPaths.p803f800} id="Vector 186" stroke="var(--stroke-0, white)" strokeWidth="0.406334" />
        </g>
      </svg>
    </div>
  );
}

function Group56() {
  return (
    <div className="absolute contents left-[9.28px] top-[calc(100%-25.01px)]">
      <p className="absolute font-['Neue_Machina:Regular',sans-serif] leading-[1.275] left-[calc(25%-1.97px)] not-italic text-[3.46px] text-[rgba(0,0,0,0.4)] top-[calc(100%-15.86px)] whitespace-nowrap">79 min ago</p>
      <Group32 />
      <Group33 />
    </div>
  );
}

function Group55() {
  return (
    <div className="absolute contents left-[9.28px] top-[calc(100%-25.01px)]">
      <Group56 />
      <div className="absolute h-0 left-[9.75px] top-[calc(100%-7.71px)] w-[101.926px]">
        <div className="absolute inset-[-0.16px_0]">
          <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 101.926 0.314585">
            <path d="M0 0.157292H101.926" id="Vector 222" stroke="var(--stroke-0, #EBEBEB)" strokeWidth="0.314585" />
          </svg>
        </div>
      </div>
    </div>
  );
}

function Group57() {
  return (
    <div className="absolute contents left-[21.55px] top-[30.36px]">
      <div className="absolute h-[5.348px] left-[21.55px] top-[30.36px] w-[6.292px]">
        <svg className="absolute block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 6.2917 5.34794">
          <ellipse cx="3.14585" cy="2.67397" fill="var(--fill-0, #4F86EC)" id="Ellipse 313" rx="3.14585" ry="2.67397" />
        </svg>
      </div>
      <p className="absolute capitalize font-['Craftwork_Grotesk:Bold',sans-serif] leading-[1.07] left-[23.75px] text-[3.007px] text-white top-[31.46px] tracking-[0.0752px] whitespace-nowrap" style={{ fontVariationSettings: "'wdth' 700" }}>
        7
      </p>
    </div>
  );
}

function Group58() {
  return (
    <div className="absolute contents left-[calc(50%+7px)] top-[30.2px]">
      <div className="absolute h-[5.663px] left-[calc(50%+7px)] top-[30.2px] w-[7.865px]">
        <svg className="absolute block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 7.86463 5.66253">
          <ellipse cx="3.93231" cy="2.83126" fill="var(--fill-0, #E2E2E2)" id="Ellipse 313" rx="3.93231" ry="2.83126" />
        </svg>
      </div>
      <p className="absolute capitalize font-['Craftwork_Grotesk:Bold',sans-serif] leading-[1.07] left-[calc(50%+8.89px)] text-[#6d6d6d] text-[3.007px] top-[31.46px] tracking-[0.0752px] whitespace-nowrap" style={{ fontVariationSettings: "'wdth' 700" }}>
        10
      </p>
    </div>
  );
}

function IPhone13ProMax1() {
  return (
    <div className="-translate-x-1/2 -translate-y-1/2 absolute h-[114.666px] left-[calc(50%+0.18px)] rounded-[7.865px] top-[calc(50%+0.33px)] w-[120.643px]" data-name="iPhone 13 Pro Max - 15" style={{ backgroundImage: "linear-gradient(0.465808deg, rgba(0, 0, 0, 0.2) 32.621%, rgba(255, 255, 255, 0) 43.15%), linear-gradient(90deg, rgb(255, 255, 255) 0%, rgb(255, 255, 255) 100%)" }}>
      <div className="overflow-clip relative rounded-[inherit] size-full">
        <IOsStatusBarBlack2 />
        <p className="absolute capitalize font-['Craftwork_Grotesk:Bold',sans-serif] leading-[1.07] left-[9.28px] text-[6.095px] text-black top-[12.11px] tracking-[0.1524px] whitespace-nowrap" style={{ fontVariationSettings: "'wdth' 700" }}>
          Notifications
        </p>
        <p className="absolute capitalize font-['Craftwork_Grotesk:Semi_Bold',sans-serif] h-[5.505px] leading-[1.07] left-[9.28px] text-[3.932px] text-black top-[30.36px] tracking-[0.0983px] w-[21.549px]" style={{ fontVariationSettings: "'wdth' 600" }}>
          Inbox
        </p>
        <p className="absolute capitalize font-['Craftwork_Grotesk:Semi_Bold',sans-serif] h-[5.505px] leading-[1.07] left-[calc(25%+19.7px)] text-[3.932px] text-black top-[30.36px] tracking-[0.0983px] w-[36.806px]" style={{ fontVariationSettings: "'wdth' 600" }}>
          General
        </p>
        <p className="absolute font-['Craftwork_Grotesk:Semi_Bold',sans-serif] leading-[1.275] left-[calc(75%-6.13px)] text-[4.289px] text-black top-[13.01px] whitespace-nowrap" style={{ fontVariationSettings: "'wdth' 600" }}>
          Mark all read
        </p>
        <Group22 />
        <p className="absolute font-['Roboto_Mono:Medium',sans-serif] font-medium h-[3.962px] leading-[1.275] left-[24.99px] text-[4.876px] text-black top-[calc(100%+114.23px)] uppercase w-[43.275px]">Justin Hope</p>
        <Group26 />
        <Group52 />
        <div className="absolute bg-[#ebebeb] h-[0.305px] left-[24.99px] top-[calc(100%+108.13px)] w-[99.958px]" />
        <div className="absolute flex h-[0.975px] items-center justify-center left-[calc(100%-2.16px)] top-[calc(100%+99.14px)] w-[4.936px]">
          <div className="flex-none rotate-180">
            <Group28 />
          </div>
        </div>
        <div className="absolute flex h-[0.975px] items-center justify-center left-[calc(100%-2.16px)] top-[calc(100%+235.67px)] w-[4.936px]">
          <div className="flex-none rotate-180">
            <Group29 />
          </div>
        </div>
        <div className="absolute h-[79.54px] left-[calc(25%-4.26px)] rounded-[6.095px] top-[calc(100%+133.12px)] w-[98.434px]" data-name="(25) Pinterest 2020-08-21 17-42-01">
          <img alt="" className="absolute inset-0 max-w-none object-cover pointer-events-none rounded-[6.095px] size-full" src={img25Pinterest20200821174201} />
        </div>
        <Group30 />
        <div className="absolute h-[3.831px] left-[calc(50%-3.72px)] top-[calc(100%+97.64px)] w-[3.657px]">
          <div className="absolute inset-[-6.43%_0_-4.55%_-3.37%]">
            <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 3.78015 4.25157">
              <path d={svgPaths.p1ec2a6c0} id="Vector 188" stroke="var(--stroke-0, black)" strokeWidth="0.348286" />
            </svg>
          </div>
        </div>
        <div className="absolute h-[3.831px] left-[calc(50%-3.72px)] top-[calc(100%+219.24px)] w-[3.657px]">
          <div className="absolute inset-[-6.43%_0_-4.55%_-3.37%]">
            <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 3.78015 4.25157">
              <path d={svgPaths.p1ec2a6c0} id="Vector 188" stroke="var(--stroke-0, black)" strokeWidth="0.348286" />
            </svg>
          </div>
        </div>
        <div className="absolute flex h-[3.831px] items-center justify-center left-[calc(50%-0.76px)] top-[calc(100%+97.64px)] w-[3.657px]">
          <div className="flex-none rotate-180">
            <div className="h-[3.831px] relative w-[3.657px]">
              <div className="absolute inset-[-6.43%_0_-4.55%_-3.37%]">
                <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 3.78015 4.25157">
                  <path d={svgPaths.p1ec2a6c0} id="Vector 189" stroke="var(--stroke-0, black)" strokeWidth="0.348286" />
                </svg>
              </div>
            </div>
          </div>
        </div>
        <div className="absolute flex h-[3.831px] items-center justify-center left-[calc(50%-0.76px)] top-[calc(100%+219.24px)] w-[3.657px]">
          <div className="flex-none rotate-180">
            <div className="h-[3.831px] relative w-[3.657px]">
              <div className="absolute inset-[-6.43%_0_-4.55%_-3.37%]">
                <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 3.78015 4.25157">
                  <path d={svgPaths.p1ec2a6c0} id="Vector 189" stroke="var(--stroke-0, black)" strokeWidth="0.348286" />
                </svg>
              </div>
            </div>
          </div>
        </div>
        <div className="absolute h-[4.68px] left-[calc(75%-2.71px)] top-[calc(100%+97.29px)] w-[5.15px]">
          <div className="absolute inset-[-3.72%_-3.38%_-2.18%_-3.38%]">
            <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 5.49805 4.95652">
              <path d={svgPaths.p3e939780} id="Vector 187" stroke="var(--stroke-0, black)" strokeWidth="0.348286" />
            </svg>
          </div>
        </div>
        <div className="absolute h-[4.68px] left-[calc(75%-2.71px)] top-[calc(100%+218.89px)] w-[5.15px]">
          <div className="absolute inset-[-3.72%_-3.38%_-2.18%_-3.38%]">
            <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 5.49805 4.95652">
              <path d={svgPaths.p3e939780} id="Vector 187" stroke="var(--stroke-0, black)" strokeWidth="0.348286" />
            </svg>
          </div>
        </div>
        <div className="absolute h-[5.11px] left-[calc(25%-3.34px)] top-[calc(100%+96.95px)] w-[5.119px]">
          <svg className="absolute block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 5.11941 5.10966">
            <path d={svgPaths.p35882f80} id="Ellipse 300" stroke="var(--stroke-0, black)" strokeWidth="0.348286" />
          </svg>
        </div>
        <div className="absolute h-[5.11px] left-[calc(25%-3.34px)] top-[calc(100%+218.54px)] w-[5.119px]">
          <svg className="absolute block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 5.11941 5.10966">
            <path d={svgPaths.p35882f80} id="Ellipse 300" stroke="var(--stroke-0, black)" strokeWidth="0.348286" />
          </svg>
        </div>
        <p className="absolute font-['Neue_Machina:Regular',sans-serif] h-[7.314px] leading-[1.605] left-[calc(25%+5.02px)] not-italic text-[4.528px] text-black top-[calc(100%+96.25px)] w-[2.438px]">1</p>
        <p className="absolute font-['Neue_Machina:Regular',sans-serif] h-[7.314px] leading-[1.605] left-[calc(25%+5.02px)] not-italic text-[4.528px] text-black top-[calc(100%+217.84px)] w-[2.438px]">1</p>
        <p className="absolute font-['Neue_Machina:Regular',sans-serif] h-[7.314px] leading-[1.605] left-[calc(50%+5.16px)] not-italic text-[4.528px] text-black top-[calc(100%+96.25px)] w-[3.483px]">0</p>
        <p className="absolute font-['Neue_Machina:Regular',sans-serif] h-[7.314px] leading-[1.605] left-[calc(50%+5.16px)] not-italic text-[4.528px] text-black top-[calc(100%+217.84px)] w-[3.483px]">0</p>
        <p className="absolute font-['Neue_Machina:Regular',sans-serif] h-[7.314px] leading-[1.605] left-[calc(75%+5.64px)] not-italic text-[4.528px] text-black top-[calc(100%+96.25px)] w-[3.135px]">4</p>
        <p className="absolute font-['Neue_Machina:Regular',sans-serif] h-[7.314px] leading-[1.605] left-[calc(75%+5.64px)] not-italic text-[4.528px] text-black top-[calc(100%+217.84px)] w-[3.135px]">4</p>
        <Tapbar1 />
        <div className="absolute h-0 left-[9.75px] top-[39.01px] w-[101.926px]">
          <div className="absolute inset-[-0.39px_0]">
            <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 101.926 0.786462">
              <path d="M0 0.393231H101.926" id="Vector 221" stroke="var(--stroke-0, #EBEBEB)" strokeWidth="0.786462" />
            </svg>
          </div>
        </div>
        <div className="absolute h-0 left-[9.75px] top-[39.01px] w-[28.155px]">
          <div className="absolute inset-[-0.47px_0]">
            <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 28.1554 0.943755">
              <path d="M0 0.471877H28.1554" id="Vector 223" stroke="var(--stroke-0, #4F86EC)" strokeWidth="0.943755" />
            </svg>
          </div>
        </div>
        <div className="absolute h-0 left-[9.75px] top-[calc(100%-48.92px)] w-[101.926px]">
          <div className="absolute inset-[-0.16px_0]">
            <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 101.926 0.314585">
              <path d="M0 0.157292H101.926" id="Vector 222" stroke="var(--stroke-0, #EBEBEB)" strokeWidth="0.314585" />
            </svg>
          </div>
        </div>
        <Group53 />
        <Group55 />
        <Group57 />
        <Group58 />
      </div>
      <div aria-hidden="true" className="absolute border-[#404d52] border-[3.562px] border-solid inset-[-3.562px] pointer-events-none rounded-[11.427px]" />
    </div>
  );
}

function Group51() {
  return (
    <div className="-translate-x-1/2 -translate-y-1/2 absolute contents left-[calc(50%+0.18px)] top-[calc(50%+0.33px)]">
      <IPhone13ProMax1 />
    </div>
  );
}

function Frame1() {
  return (
    <div className="bg-[#2e383b] h-full relative rounded-[24px] shrink-0 w-[185px]">
      <Group51 />
    </div>
  );
}

function Frame4() {
  return (
    <div className="content-stretch flex flex-col items-start relative shrink-0">
      <p className="font-['Roboto_Condensed:Bold',sans-serif] font-bold leading-[27.5px] relative shrink-0 text-[#f4f5fc] text-[24px] w-[316px]">{`Интерфейс приложения здоровья `}</p>
    </div>
  );
}

function Frame15() {
  return (
    <div className="content-stretch flex flex-col items-start relative shrink-0 w-full">
      <Frame4 />
    </div>
  );
}

function Container11() {
  return (
    <div className="bg-[#343e42] content-stretch flex h-[55px] items-center justify-center px-[17px] py-px relative rounded-[24px] shrink-0 w-[161px]" data-name="Container">
      <div aria-hidden="true" className="absolute border border-[#57646a] border-solid inset-0 pointer-events-none rounded-[24px] shadow-[0px_5px_0px_0px_rgba(0,0,0,0.5)]" />
      <p className="font-['Roboto_Condensed:Bold',sans-serif] font-bold leading-[27.5px] relative shrink-0 text-[#f4f5fc] text-[22px] whitespace-nowrap">Открыть</p>
    </div>
  );
}

function Frame24() {
  return (
    <div className="content-stretch flex items-center justify-center relative shrink-0 w-[149px]">
      <p className="font-['Roboto_Condensed:Medium',sans-serif] font-medium leading-[15px] relative shrink-0 text-[#798589] text-[12px] whitespace-nowrap">Это занимает до 24 часов</p>
    </div>
  );
}

function FreeIconProcessingTime() {
  return (
    <div className="absolute inset-[-2.78%]" data-name="free-icon-processing-time-7154454 1">
      <svg className="absolute block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 19 19">
        <g clipPath="url(#clip0_177_2780)" id="free-icon-processing-time-7154454 1">
          <path d={svgPaths.p10e6fc80} fill="var(--fill-0, #FFB121)" id="Vector" />
          <path d={svgPaths.pe9e5cc0} fill="var(--fill-0, #FFB121)" id="Vector_2" />
          <path d={svgPaths.p2ae2c800} fill="var(--fill-0, #FFB121)" id="Vector_3" />
          <path d={svgPaths.p8839180} fill="var(--fill-0, #FFB121)" id="Vector_4" />
          <path d={svgPaths.pb4b6780} fill="var(--fill-0, #FFB121)" id="Vector_5" />
        </g>
        <defs>
          <clipPath id="clip0_177_2780">
            <rect fill="white" height="19" width="19" />
          </clipPath>
        </defs>
      </svg>
    </div>
  );
}

function FreeIconYes() {
  return (
    <div className="relative shrink-0 size-[18px]" data-name="free-icon-yes-9426997 1">
      <div className="bg-clip-padding border-0 border-[transparent] border-solid overflow-clip relative rounded-[inherit] size-full">
        <FreeIconProcessingTime />
      </div>
    </div>
  );
}

function Container12() {
  return (
    <div className="bg-[#424d52] content-stretch flex gap-[8px] h-[36px] items-center justify-center px-[16px] relative rounded-[24px] shrink-0 w-[149px]" data-name="Container">
      <FreeIconYes />
      <p className="font-['Roboto_Condensed:Bold',sans-serif] font-bold leading-[27.5px] relative shrink-0 text-[#ffb121] text-[16px] whitespace-nowrap">На проверке</p>
    </div>
  );
}

function Frame21() {
  return (
    <div className="content-stretch flex items-start relative shrink-0">
      <Container12 />
    </div>
  );
}

function Frame23() {
  return (
    <div className="content-stretch flex flex-col gap-[10px] items-start justify-end relative shrink-0">
      <Frame24 />
      <Frame21 />
    </div>
  );
}

function Frame18() {
  return (
    <div className="content-stretch flex gap-[15px] items-end relative shrink-0 w-full">
      <Container11 />
      <Frame23 />
    </div>
  );
}

function Frame9() {
  return (
    <div className="content-stretch flex flex-[1_0_0] flex-col h-full items-start justify-between min-h-px min-w-px relative">
      <Frame15 />
      <Frame18 />
    </div>
  );
}

function Frame8() {
  return (
    <div className="content-stretch flex flex-[1_0_0] gap-[20px] items-start min-h-px min-w-px relative w-full">
      <Frame1 />
      <Frame9 />
    </div>
  );
}

function Link1() {
  return (
    <div className="bg-[#343e42] content-stretch flex flex-col h-[240px] items-center p-[20px] relative rounded-[24px] shrink-0 w-[572px]" data-name="Link">
      <Frame8 />
    </div>
  );
}

function Battery2() {
  return (
    <div className="absolute contents right-[5.51px] top-[6.51px]" data-name="Battery">
      <div className="absolute h-[4.257px] right-[6.39px] top-[6.51px] w-[8.264px]" data-name="Rectangle">
        <svg className="absolute block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 8.26411 4.25727">
          <path d={svgPaths.pedeaa00} id="Rectangle" opacity="0.35" stroke="var(--stroke-0, #2E2533)" strokeWidth="0.375641" />
        </svg>
      </div>
      <div className="absolute h-[1.503px] right-[5.51px] top-[7.89px] w-[0.499px]" data-name="Combined Shape">
        <svg className="absolute block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 0.498866 1.50257">
          <path d={svgPaths.p317cb580} fill="var(--fill-0, #2E2533)" id="Combined Shape" opacity="0.4" />
        </svg>
      </div>
      <div className="absolute h-[2.755px] right-[7.14px] top-[7.26px] w-[6.762px]" data-name="Rectangle">
        <svg className="absolute block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 6.76154 2.7547">
          <path d={svgPaths.p2a97ae72} fill="var(--fill-0, #2E2533)" id="Rectangle" />
        </svg>
      </div>
    </div>
  );
}

function RightSide2() {
  return (
    <div className="absolute contents right-[5.51px] top-[6.51px]" data-name="Right Side">
      <Battery2 />
      <div className="absolute h-[4.12px] right-[16.54px] top-[6.51px] w-[5.737px]" data-name="Wifi">
        <svg className="absolute block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 5.73731 4.1194">
          <path d={svgPaths.p30457c00} fill="var(--fill-0, #2E2533)" id="Wifi" />
        </svg>
      </div>
      <div className="absolute h-[4.007px] right-[24.17px] top-[6.64px] w-[6.386px]" data-name="Mobile Signal">
        <svg className="absolute block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 6.38574 4.00684">
          <path d={svgPaths.p22519200} fill="var(--fill-0, #2E2533)" id="Mobile Signal" />
        </svg>
      </div>
    </div>
  );
}

function LeftSide2() {
  return (
    <div className="absolute contents left-[12.57px] top-[6.45px]" data-name="Left Side">
      <div className="absolute h-[4.165px] left-[12.57px] top-[6.45px] w-[10.678px]" data-name="9:41">
        <svg className="absolute block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 10.678 4.16544">
          <g id="9:41">
            <path d={svgPaths.p1588b400} fill="var(--fill-0, #2E2533)" />
            <path d={svgPaths.p212e0540} fill="var(--fill-0, #2E2533)" />
            <path d={svgPaths.p28ad3e00} fill="var(--fill-0, #2E2533)" />
            <path d={svgPaths.p3bdf5500} fill="var(--fill-0, #2E2533)" />
          </g>
        </svg>
      </div>
    </div>
  );
}

function IOsStatusBarBlack5() {
  return (
    <div className="absolute inset-[-2.05%_0_-2.05%_-4.11%] overflow-clip" data-name="iOS/Status Bar/Black">
      <RightSide2 />
      <LeftSide2 />
    </div>
  );
}

function IOsStatusBarBlack4() {
  return (
    <div className="-translate-x-1/2 absolute h-[15.876px] left-[calc(50%+4.29px)] top-[-14.22px] w-[135.309px]" data-name="iOS/Status Bar/Black">
      <IOsStatusBarBlack5 />
    </div>
  );
}

function Group34() {
  return (
    <div className="absolute contents left-[6.09px] top-[calc(100%+112.7px)]">
      <p className="absolute font-['Roboto_Mono:Medium',sans-serif] font-medium h-[3.962px] leading-[1.275] left-[24.99px] text-[4.876px] text-black top-[calc(100%+114.23px)] uppercase w-[43.275px]">Justin Hope</p>
      <div className="absolute left-[6.09px] rounded-[4.876px] size-[14.019px] top-[calc(100%+112.7px)]" data-name="12e088190693c318afec73ca1815d3c4 1">
        <img alt="" className="absolute inset-0 max-w-none object-cover pointer-events-none rounded-[4.876px] size-full" src={img12E088190693C318Afec73Ca1815D3C41} />
      </div>
      <p className="absolute font-['Neue_Machina:Regular',sans-serif] leading-[1.275] left-[calc(25%-4.26px)] not-italic text-[3.048px] text-[rgba(0,0,0,0.4)] top-[calc(100%+121.85px)] whitespace-nowrap">put up for sale NFT 10 min ago</p>
    </div>
  );
}

function Group35() {
  return (
    <div className="absolute left-[15.85px] size-[4.876px] top-[calc(100%+122.46px)]">
      <svg className="absolute block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 4.87609 4.87615">
        <g id="Group 481197">
          <path d={svgPaths.p1ec49d80} fill="var(--fill-0, #7AAD83)" id="Star 1" />
          <path d={svgPaths.p2f64a180} id="Vector 186" stroke="var(--stroke-0, white)" strokeWidth="0.406334" />
        </g>
      </svg>
    </div>
  );
}

function Group36() {
  return (
    <div className="absolute left-[19.05px] size-[4.876px] top-[calc(100%-56.31px)]">
      <svg className="absolute block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 4.87613 4.87608">
        <g id="Group 481193">
          <path d={svgPaths.p8dc7d00} fill="var(--fill-0, #4F86EC)" id="Star 1" />
          <path d={svgPaths.p661f0d0} id="Vector 186" stroke="var(--stroke-0, white)" strokeWidth="0.406334" />
        </g>
      </svg>
    </div>
  );
}

function Group60() {
  return (
    <div className="absolute contents left-[9.29px] top-[48.6px]">
      <p className="absolute font-['Roboto_Mono:Medium',sans-serif] font-medium h-[3.932px] leading-[0] left-[calc(25%-2.01px)] text-[0px] text-[4.404px] text-black top-[50.18px] uppercase w-[104.128px]">
        <span className="font-['Craftwork_Grotesk:Bold',sans-serif] leading-[1.275]" style={{ fontVariationSettings: "'wdth' 700" }}>
          Justin
        </span>
        <span className="font-['Craftwork_Grotesk:Bold',sans-serif] leading-[1.275]" style={{ fontVariationSettings: "'wdth' 700" }}>{` `}</span>
        <span className="font-['Craftwork_Grotesk:Semi_Bold',sans-serif] leading-[1.275] lowercase text-[#909090]" style={{ fontVariationSettings: "'wdth' 600" }}>
          left a comment on
        </span>
        <span className="font-['Craftwork_Grotesk:Semi_Bold',sans-serif] leading-[1.275] lowercase" style={{ fontVariationSettings: "'wdth' 600" }}>{` LUI`}</span>
      </p>
      <div className="absolute left-[9.29px] rounded-[4.876px] size-[14.019px] top-[48.6px]" data-name="12e088190693c318afec73ca1815d3c4 1">
        <img alt="" className="absolute inset-0 max-w-none object-cover pointer-events-none rounded-[4.876px] size-full" src={img12E088190693C318Afec73Ca1815D3C41} />
      </div>
      <p className="absolute font-['Neue_Machina:Regular',sans-serif] leading-[1.275] left-[calc(25%-1.97px)] not-italic text-[3.46px] text-[rgba(0,0,0,0.4)] top-[calc(100%-56.9px)] whitespace-nowrap">15 min ago</p>
      <Group36 />
    </div>
  );
}

function Group37() {
  return (
    <div className="h-[0.975px] relative w-[4.936px]">
      <svg className="absolute block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 4.93712 0.975379">
        <g id="Group 481201">
          <circle cx="4.44952" cy="0.487601" fill="var(--fill-0, #C4C4C4)" id="Ellipse 43" r="0.487601" />
          <circle cx="2.46905" cy="0.487601" fill="var(--fill-0, #C4C4C4)" id="Ellipse 44" r="0.487601" />
          <circle cx="0.487777" cy="0.487777" fill="var(--fill-0, #C4C4C4)" id="Ellipse 45" r="0.487601" />
        </g>
      </svg>
    </div>
  );
}

function Group38() {
  return (
    <div className="h-[0.975px] relative w-[4.936px]">
      <svg className="absolute block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 4.93705 0.975312">
        <g id="Group 481202">
          <circle cx="4.44942" cy="0.487601" fill="var(--fill-0, #C4C4C4)" id="Ellipse 43" r="0.487601" />
          <circle cx="2.46886" cy="0.487601" fill="var(--fill-0, #C4C4C4)" id="Ellipse 44" r="0.487601" />
          <circle cx="0.487601" cy="0.487602" fill="var(--fill-0, #C4C4C4)" id="Ellipse 45" r="0.487601" />
        </g>
      </svg>
    </div>
  );
}

function Group39() {
  return (
    <div className="absolute contents left-[calc(75%+6.73px)] top-[calc(100%+115.45px)]">
      <div className="absolute bg-[#f1f1f1] h-[9.447px] left-[calc(75%+6.73px)] rounded-[1.829px] top-[calc(100%+115.45px)] w-[27.732px]" />
      <p className="-translate-x-1/2 absolute font-['Roboto_Mono:Medium',sans-serif] font-medium h-[5.486px] leading-[1.275] left-[calc(100%-3.77px)] text-[#7aad83] text-[3.341px] text-center top-[calc(100%+117.88px)] uppercase w-[14.057px]">buy</p>
      <p className="absolute font-['Roboto_Mono:Regular',sans-serif] font-normal h-[3.98px] leading-[1.275] left-[calc(100%-18.86px)] text-[3.184px] text-black top-[calc(100%+118.19px)] uppercase w-[9.752px]">$35.7</p>
    </div>
  );
}

function Ic24Map2() {
  return (
    <div className="absolute inset-[317.98%_65.77%_-224.7%_27.85%]" data-name="ic24-map">
      <svg className="absolute block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 7.69897 7.69897">
        <g id="ic24-map">
          <path clipRule="evenodd" d={svgPaths.p17ca0500} fill="var(--fill-0, #483B50)" fillRule="evenodd" id="Icon" />
        </g>
      </svg>
    </div>
  );
}

function Ic24ViewSchedule2() {
  return (
    <div className="absolute inset-[317.98%_19.1%_-224.7%_74.52%]" data-name="ic24-view-schedule">
      <svg className="absolute block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 7.69897 7.69897">
        <g id="ic24-view-schedule">
          <path clipRule="evenodd" d={svgPaths.p3be60a00} fill="var(--fill-0, #483B50)" fillRule="evenodd" id="Icon" />
        </g>
      </svg>
    </div>
  );
}

function Group6() {
  return (
    <div className="absolute inset-[8.32%_8.33%_8.35%_8.33%]" data-name="Group">
      <svg className="absolute block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 6.4158 6.4158">
        <g id="Group">
          <path d={svgPaths.p6ad8400} fill="var(--fill-0, #483B50)" id="Vector" />
        </g>
      </svg>
    </div>
  );
}

function Group5() {
  return (
    <div className="absolute contents inset-[8.32%_8.33%_8.35%_8.33%]" data-name="Group">
      <Group6 />
    </div>
  );
}

function User2() {
  return (
    <div className="absolute left-[calc(100%-8.49px)] size-[7.699px] top-[calc(100%+249.96px)]" data-name="user 1">
      <Group5 />
    </div>
  );
}

function Group15() {
  return (
    <div className="absolute contents left-[10.36px] top-[calc(100%+250.15px)]">
      <div className="absolute inset-[318.15%_85.35%_-224.53%_8.59%]" data-name="ic24-home">
        <div className="absolute inset-[6.25%_8.46%_10.55%_8.33%]" data-name="Icon">
          <svg className="absolute block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 6.40036 6.39908">
            <path clipRule="evenodd" d={svgPaths.p36b31980} fill="var(--fill-0, #7AAD83)" fillRule="evenodd" id="Icon" />
          </svg>
        </div>
      </div>
      <div className="absolute h-[5.486px] left-[11.89px] top-[calc(100%+251.06px)] w-[4.571px]">
        <div className="absolute inset-[-3.93%_-3.33%_-3.33%_-3.33%]">
          <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 4.87601 5.88393">
            <path d={svgPaths.p173b6b80} fill="var(--fill-0, #7AAD83)" id="Vector 40" stroke="var(--stroke-0, #7AAD83)" strokeWidth="0.304751" />
          </svg>
        </div>
      </div>
      <div className="absolute h-[1.067px] left-[14.17px] top-[calc(100%+256.09px)] w-0">
        <div className="absolute inset-[0_-0.32px]">
          <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 0.639976 1.06663">
            <path d="M0.319988 0V1.06663" id="Vector 41" stroke="var(--stroke-0, white)" strokeWidth="0.639976" />
          </svg>
        </div>
      </div>
    </div>
  );
}

function Group9() {
  return (
    <div className="absolute contents left-[10.36px] top-[calc(100%+249.96px)]">
      <Ic24Map2 />
      <Ic24ViewSchedule2 />
      <User2 />
      <Group15 />
    </div>
  );
}

function Group12() {
  return (
    <div className="absolute left-[calc(50%-5.16px)] size-[20.114px] top-[calc(100%+236.74px)]">
      <div className="absolute inset-[-75.76%]">
        <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 50.5886 50.5886">
          <g id="Group 89">
            <g filter="url(#filter0_d_177_2793)" id="Ellipse 42">
              <circle cx="25.2943" cy="25.2943" fill="var(--fill-0, #7AAD83)" r="10.0568" />
            </g>
            <path clipRule="evenodd" d={svgPaths.p23c37c0} fill="var(--fill-0, white)" fillRule="evenodd" id="Icon" />
          </g>
          <defs>
            <filter colorInterpolationFilters="sRGB" filterUnits="userSpaceOnUse" height="50.5886" id="filter0_d_177_2793" width="50.5886" x="-4.06801e-07" y="-6.33299e-08">
              <feFlood floodOpacity="0" result="BackgroundImageFix" />
              <feColorMatrix in="SourceAlpha" result="hardAlpha" type="matrix" values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 127 0" />
              <feOffset />
              <feGaussianBlur stdDeviation="7.61877" />
              <feColorMatrix type="matrix" values="0 0 0 0 0.851667 0 0 0 0 0.9125 0 0 0 0 0.862684 0 0 0 1 0" />
              <feBlend in2="BackgroundImageFix" mode="normal" result="effect1_dropShadow_177_2793" />
              <feBlend in="SourceGraphic" in2="effect1_dropShadow_177_2793" mode="normal" result="shape" />
            </filter>
          </defs>
        </svg>
      </div>
    </div>
  );
}

function Tapbar2() {
  return (
    <div className="absolute contents left-0 top-[calc(100%+236.74px)]" data-name="Tapbar">
      <div className="absolute inset-[313.63%_-8.12%_-237.29%_0]" data-name="BG Controls">
        <svg className="absolute block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 130.433 27.1228">
          <path d={svgPaths.p251da400} fill="var(--fill-0, white)" id="BG Controls" stroke="var(--stroke-0, #F3F3F3)" strokeWidth="0.304751" />
        </svg>
      </div>
      <Group9 />
      <div className="absolute bg-[#212121] h-[1.829px] left-[calc(25%+6.71px)] rounded-[4.571px] top-[calc(100%+267.21px)] w-[53.027px]" />
      <Group12 />
    </div>
  );
}

function Group40() {
  return (
    <div className="absolute contents left-[9.28px] top-[calc(100%-45.65px)]">
      <p className="absolute font-['Roboto_Mono:Medium',sans-serif] font-medium h-[4.09px] leading-[0] left-[calc(25%-2.01px)] text-[0px] text-[4.404px] text-black top-[calc(100%-44.2px)] uppercase w-[104.128px]">
        <span className="font-['Craftwork_Grotesk:Bold',sans-serif] leading-[1.275]" style={{ fontVariationSettings: "'wdth' 700" }}>
          Iren
        </span>
        <span className="font-['Craftwork_Grotesk:Bold',sans-serif] leading-[1.275] lowercase text-[#909090]" style={{ fontVariationSettings: "'wdth' 700" }}>{` `}</span>
        <span className="font-['Craftwork_Grotesk:Semi_Bold',sans-serif] leading-[1.275] lowercase text-[#909090]" style={{ fontVariationSettings: "'wdth' 600" }}>
          shared a file
        </span>
        <span className="font-['Craftwork_Grotesk:Semi_Bold',sans-serif] leading-[1.275] lowercase" style={{ fontVariationSettings: "'wdth' 600" }}>{` 00776 `}</span>
        <span className="font-['Craftwork_Grotesk:Semi_Bold',sans-serif] leading-[1.275] lowercase text-[#909090]" style={{ fontVariationSettings: "'wdth' 600" }}>
          with you
        </span>
      </p>
      <div className="absolute left-[9.29px] rounded-[4.876px] size-[14.019px] top-[calc(100%-45.64px)]" data-name="12e088190693c318afec73ca1815d3c4 1">
        <img alt="" className="absolute inset-0 max-w-none object-cover pointer-events-none rounded-[4.876px] size-full" src={img12E088190693C318Afec73Ca1815D3C41} />
      </div>
      <div className="absolute left-[9.28px] rounded-[4.876px] size-[14.007px] top-[calc(100%-45.65px)]" data-name="62d1b8ce5be6335f5246a923c3ed65aa 1">
        <img alt="" className="absolute inset-0 max-w-none object-cover pointer-events-none rounded-[4.876px] size-full" src={img62D1B8Ce5Be6335F5246A923C3Ed65Aa1} />
      </div>
    </div>
  );
}

function Group62() {
  return (
    <div className="absolute contents left-[9.28px] top-[calc(100%-45.65px)]">
      <p className="absolute font-['Neue_Machina:Regular',sans-serif] leading-[1.275] left-[calc(25%-1.97px)] not-italic text-[3.46px] text-[rgba(0,0,0,0.4)] top-[calc(100%-36.5px)] whitespace-nowrap">70 min ago</p>
      <Group40 />
    </div>
  );
}

function Group61() {
  return (
    <div className="absolute contents left-[9.28px] top-[calc(100%-45.65px)]">
      <Group62 />
      <div className="absolute h-0 left-[9.75px] top-[calc(100%-28.31px)] w-[101.926px]">
        <div className="absolute inset-[-0.16px_0]">
          <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 101.926 0.314585">
            <path d="M0 0.157292H101.926" id="Vector 222" stroke="var(--stroke-0, #EBEBEB)" strokeWidth="0.314585" />
          </svg>
        </div>
      </div>
    </div>
  );
}

function Group41() {
  return (
    <div className="absolute contents left-[9.28px] top-[calc(100%-25.01px)]">
      <p className="absolute font-['Roboto_Mono:Medium',sans-serif] font-medium h-[4.09px] leading-[0] left-[calc(25%-2px)] text-[0px] text-[4.404px] text-black top-[calc(100%-23.56px)] uppercase w-[104.128px]">
        <span className="font-['Craftwork_Grotesk:Bold',sans-serif] leading-[1.275]" style={{ fontVariationSettings: "'wdth' 700" }}>
          Mark
        </span>
        <span className="font-['Craftwork_Grotesk:Bold',sans-serif] leading-[1.275] lowercase text-[#909090]" style={{ fontVariationSettings: "'wdth' 700" }}>{` liked your `}</span>
        <span className="font-['Craftwork_Grotesk:Bold',sans-serif] leading-[1.275] lowercase" style={{ fontVariationSettings: "'wdth' 700" }}>
          post
        </span>
        <span className="font-['Craftwork_Grotesk:Semi_Bold',sans-serif] leading-[1.275] lowercase" style={{ fontVariationSettings: "'wdth' 600" }}>{` `}</span>
      </p>
      <div className="absolute left-[9.29px] rounded-[4.876px] size-[14.019px] top-[calc(100%-25.01px)]" data-name="12e088190693c318afec73ca1815d3c4 1">
        <img alt="" className="absolute inset-0 max-w-none object-cover pointer-events-none rounded-[4.876px] size-full" src={img12E088190693C318Afec73Ca1815D3C41} />
      </div>
      <div className="absolute left-[9.28px] rounded-[4.876px] size-[14.007px] top-[calc(100%-25.01px)]" data-name="FGCj-9tVEAAejZc 1">
        <img alt="" className="absolute inset-0 max-w-none object-cover pointer-events-none rounded-[4.876px] size-full" src={imgFgCj9TVeaAejZc1} />
      </div>
    </div>
  );
}

function Group42() {
  return (
    <div className="absolute left-[19.05px] size-[4.876px] top-[calc(100%-15.25px)]">
      <svg className="absolute block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 4.87601 4.87601">
        <g id="Group 481195">
          <path d={svgPaths.p38cd6d80} fill="var(--fill-0, #4F86EC)" id="Star 1" />
          <path d={svgPaths.p803f800} id="Vector 186" stroke="var(--stroke-0, white)" strokeWidth="0.406334" />
        </g>
      </svg>
    </div>
  );
}

function Group64() {
  return (
    <div className="absolute contents left-[9.28px] top-[calc(100%-25.01px)]">
      <p className="absolute font-['Neue_Machina:Regular',sans-serif] leading-[1.275] left-[calc(25%-1.97px)] not-italic text-[3.46px] text-[rgba(0,0,0,0.4)] top-[calc(100%-15.86px)] whitespace-nowrap">79 min ago</p>
      <Group41 />
      <Group42 />
    </div>
  );
}

function Group63() {
  return (
    <div className="absolute contents left-[9.28px] top-[calc(100%-25.01px)]">
      <Group64 />
      <div className="absolute h-0 left-[9.75px] top-[calc(100%-7.71px)] w-[101.926px]">
        <div className="absolute inset-[-0.16px_0]">
          <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 101.926 0.314585">
            <path d="M0 0.157292H101.926" id="Vector 222" stroke="var(--stroke-0, #EBEBEB)" strokeWidth="0.314585" />
          </svg>
        </div>
      </div>
    </div>
  );
}

function Group65() {
  return (
    <div className="absolute contents left-[21.55px] top-[30.36px]">
      <div className="absolute h-[5.348px] left-[21.55px] top-[30.36px] w-[6.292px]">
        <svg className="absolute block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 6.2917 5.34794">
          <ellipse cx="3.14585" cy="2.67397" fill="var(--fill-0, #4F86EC)" id="Ellipse 313" rx="3.14585" ry="2.67397" />
        </svg>
      </div>
      <p className="absolute capitalize font-['Craftwork_Grotesk:Bold',sans-serif] leading-[1.07] left-[23.75px] text-[3.007px] text-white top-[31.46px] tracking-[0.0752px] whitespace-nowrap" style={{ fontVariationSettings: "'wdth' 700" }}>
        7
      </p>
    </div>
  );
}

function Group66() {
  return (
    <div className="absolute contents left-[calc(50%+7px)] top-[30.2px]">
      <div className="absolute h-[5.663px] left-[calc(50%+7px)] top-[30.2px] w-[7.865px]">
        <svg className="absolute block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 7.86463 5.66253">
          <ellipse cx="3.93231" cy="2.83126" fill="var(--fill-0, #E2E2E2)" id="Ellipse 313" rx="3.93231" ry="2.83126" />
        </svg>
      </div>
      <p className="absolute capitalize font-['Craftwork_Grotesk:Bold',sans-serif] leading-[1.07] left-[calc(50%+8.89px)] text-[#6d6d6d] text-[3.007px] top-[31.46px] tracking-[0.0752px] whitespace-nowrap" style={{ fontVariationSettings: "'wdth' 700" }}>
        10
      </p>
    </div>
  );
}

function IPhone13ProMax2() {
  return (
    <div className="-translate-x-1/2 -translate-y-1/2 absolute h-[114.666px] left-[calc(50%+0.18px)] rounded-[7.865px] top-[calc(50%+0.33px)] w-[120.643px]" data-name="iPhone 13 Pro Max - 15" style={{ backgroundImage: "linear-gradient(0.465808deg, rgba(0, 0, 0, 0.2) 32.621%, rgba(255, 255, 255, 0) 43.15%), linear-gradient(90deg, rgb(255, 255, 255) 0%, rgb(255, 255, 255) 100%)" }}>
      <div className="overflow-clip relative rounded-[inherit] size-full">
        <IOsStatusBarBlack4 />
        <p className="absolute capitalize font-['Craftwork_Grotesk:Bold',sans-serif] leading-[1.07] left-[9.28px] text-[6.095px] text-black top-[12.11px] tracking-[0.1524px] whitespace-nowrap" style={{ fontVariationSettings: "'wdth' 700" }}>
          Notifications
        </p>
        <p className="absolute capitalize font-['Craftwork_Grotesk:Semi_Bold',sans-serif] h-[5.505px] leading-[1.07] left-[9.28px] text-[3.932px] text-black top-[30.36px] tracking-[0.0983px] w-[21.549px]" style={{ fontVariationSettings: "'wdth' 600" }}>
          Inbox
        </p>
        <p className="absolute capitalize font-['Craftwork_Grotesk:Semi_Bold',sans-serif] h-[5.505px] leading-[1.07] left-[calc(25%+19.7px)] text-[3.932px] text-black top-[30.36px] tracking-[0.0983px] w-[36.806px]" style={{ fontVariationSettings: "'wdth' 600" }}>
          General
        </p>
        <p className="absolute font-['Craftwork_Grotesk:Semi_Bold',sans-serif] leading-[1.275] left-[calc(75%-6.13px)] text-[4.289px] text-black top-[13.01px] whitespace-nowrap" style={{ fontVariationSettings: "'wdth' 600" }}>
          Mark all read
        </p>
        <Group34 />
        <p className="absolute font-['Roboto_Mono:Medium',sans-serif] font-medium h-[3.962px] leading-[1.275] left-[24.99px] text-[4.876px] text-black top-[calc(100%+114.23px)] uppercase w-[43.275px]">Justin Hope</p>
        <Group35 />
        <Group60 />
        <div className="absolute bg-[#ebebeb] h-[0.305px] left-[24.99px] top-[calc(100%+108.13px)] w-[99.958px]" />
        <div className="absolute flex h-[0.975px] items-center justify-center left-[calc(100%-2.16px)] top-[calc(100%+99.14px)] w-[4.936px]">
          <div className="flex-none rotate-180">
            <Group37 />
          </div>
        </div>
        <div className="absolute flex h-[0.975px] items-center justify-center left-[calc(100%-2.16px)] top-[calc(100%+235.67px)] w-[4.936px]">
          <div className="flex-none rotate-180">
            <Group38 />
          </div>
        </div>
        <div className="absolute h-[79.54px] left-[calc(25%-4.26px)] rounded-[6.095px] top-[calc(100%+133.12px)] w-[98.434px]" data-name="(25) Pinterest 2020-08-21 17-42-01">
          <img alt="" className="absolute inset-0 max-w-none object-cover pointer-events-none rounded-[6.095px] size-full" src={img25Pinterest20200821174201} />
        </div>
        <Group39 />
        <div className="absolute h-[3.831px] left-[calc(50%-3.72px)] top-[calc(100%+97.64px)] w-[3.657px]">
          <div className="absolute inset-[-6.43%_0_-4.55%_-3.37%]">
            <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 3.78015 4.25157">
              <path d={svgPaths.p1ec2a6c0} id="Vector 188" stroke="var(--stroke-0, black)" strokeWidth="0.348286" />
            </svg>
          </div>
        </div>
        <div className="absolute h-[3.831px] left-[calc(50%-3.72px)] top-[calc(100%+219.24px)] w-[3.657px]">
          <div className="absolute inset-[-6.43%_0_-4.55%_-3.37%]">
            <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 3.78015 4.25157">
              <path d={svgPaths.p1ec2a6c0} id="Vector 188" stroke="var(--stroke-0, black)" strokeWidth="0.348286" />
            </svg>
          </div>
        </div>
        <div className="absolute flex h-[3.831px] items-center justify-center left-[calc(50%-0.76px)] top-[calc(100%+97.64px)] w-[3.657px]">
          <div className="flex-none rotate-180">
            <div className="h-[3.831px] relative w-[3.657px]">
              <div className="absolute inset-[-6.43%_0_-4.55%_-3.37%]">
                <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 3.78015 4.25157">
                  <path d={svgPaths.p1ec2a6c0} id="Vector 189" stroke="var(--stroke-0, black)" strokeWidth="0.348286" />
                </svg>
              </div>
            </div>
          </div>
        </div>
        <div className="absolute flex h-[3.831px] items-center justify-center left-[calc(50%-0.76px)] top-[calc(100%+219.24px)] w-[3.657px]">
          <div className="flex-none rotate-180">
            <div className="h-[3.831px] relative w-[3.657px]">
              <div className="absolute inset-[-6.43%_0_-4.55%_-3.37%]">
                <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 3.78015 4.25157">
                  <path d={svgPaths.p1ec2a6c0} id="Vector 189" stroke="var(--stroke-0, black)" strokeWidth="0.348286" />
                </svg>
              </div>
            </div>
          </div>
        </div>
        <div className="absolute h-[4.68px] left-[calc(75%-2.71px)] top-[calc(100%+97.29px)] w-[5.15px]">
          <div className="absolute inset-[-3.72%_-3.38%_-2.18%_-3.38%]">
            <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 5.49805 4.95652">
              <path d={svgPaths.p3e939780} id="Vector 187" stroke="var(--stroke-0, black)" strokeWidth="0.348286" />
            </svg>
          </div>
        </div>
        <div className="absolute h-[4.68px] left-[calc(75%-2.71px)] top-[calc(100%+218.89px)] w-[5.15px]">
          <div className="absolute inset-[-3.72%_-3.38%_-2.18%_-3.38%]">
            <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 5.49805 4.95652">
              <path d={svgPaths.p3e939780} id="Vector 187" stroke="var(--stroke-0, black)" strokeWidth="0.348286" />
            </svg>
          </div>
        </div>
        <div className="absolute h-[5.11px] left-[calc(25%-3.34px)] top-[calc(100%+96.95px)] w-[5.119px]">
          <svg className="absolute block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 5.11941 5.10966">
            <path d={svgPaths.p35882f80} id="Ellipse 300" stroke="var(--stroke-0, black)" strokeWidth="0.348286" />
          </svg>
        </div>
        <div className="absolute h-[5.11px] left-[calc(25%-3.34px)] top-[calc(100%+218.54px)] w-[5.119px]">
          <svg className="absolute block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 5.11941 5.10966">
            <path d={svgPaths.p35882f80} id="Ellipse 300" stroke="var(--stroke-0, black)" strokeWidth="0.348286" />
          </svg>
        </div>
        <p className="absolute font-['Neue_Machina:Regular',sans-serif] h-[7.314px] leading-[1.605] left-[calc(25%+5.02px)] not-italic text-[4.528px] text-black top-[calc(100%+96.25px)] w-[2.438px]">1</p>
        <p className="absolute font-['Neue_Machina:Regular',sans-serif] h-[7.314px] leading-[1.605] left-[calc(25%+5.02px)] not-italic text-[4.528px] text-black top-[calc(100%+217.84px)] w-[2.438px]">1</p>
        <p className="absolute font-['Neue_Machina:Regular',sans-serif] h-[7.314px] leading-[1.605] left-[calc(50%+5.16px)] not-italic text-[4.528px] text-black top-[calc(100%+96.25px)] w-[3.483px]">0</p>
        <p className="absolute font-['Neue_Machina:Regular',sans-serif] h-[7.314px] leading-[1.605] left-[calc(50%+5.16px)] not-italic text-[4.528px] text-black top-[calc(100%+217.84px)] w-[3.483px]">0</p>
        <p className="absolute font-['Neue_Machina:Regular',sans-serif] h-[7.314px] leading-[1.605] left-[calc(75%+5.64px)] not-italic text-[4.528px] text-black top-[calc(100%+96.25px)] w-[3.135px]">4</p>
        <p className="absolute font-['Neue_Machina:Regular',sans-serif] h-[7.314px] leading-[1.605] left-[calc(75%+5.64px)] not-italic text-[4.528px] text-black top-[calc(100%+217.84px)] w-[3.135px]">4</p>
        <Tapbar2 />
        <div className="absolute h-0 left-[9.75px] top-[39.01px] w-[101.926px]">
          <div className="absolute inset-[-0.39px_0]">
            <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 101.926 0.786462">
              <path d="M0 0.393231H101.926" id="Vector 221" stroke="var(--stroke-0, #EBEBEB)" strokeWidth="0.786462" />
            </svg>
          </div>
        </div>
        <div className="absolute h-0 left-[9.75px] top-[39.01px] w-[28.155px]">
          <div className="absolute inset-[-0.47px_0]">
            <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 28.1554 0.943755">
              <path d="M0 0.471877H28.1554" id="Vector 223" stroke="var(--stroke-0, #4F86EC)" strokeWidth="0.943755" />
            </svg>
          </div>
        </div>
        <div className="absolute h-0 left-[9.75px] top-[calc(100%-48.92px)] w-[101.926px]">
          <div className="absolute inset-[-0.16px_0]">
            <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 101.926 0.314585">
              <path d="M0 0.157292H101.926" id="Vector 222" stroke="var(--stroke-0, #EBEBEB)" strokeWidth="0.314585" />
            </svg>
          </div>
        </div>
        <Group61 />
        <Group63 />
        <Group65 />
        <Group66 />
      </div>
      <div aria-hidden="true" className="absolute border-[#404d52] border-[3.562px] border-solid inset-[-3.562px] pointer-events-none rounded-[11.427px]" />
    </div>
  );
}

function Group59() {
  return (
    <div className="-translate-x-1/2 -translate-y-1/2 absolute contents left-[calc(50%+0.18px)] top-[calc(50%+0.33px)]">
      <IPhone13ProMax2 />
    </div>
  );
}

function Frame2() {
  return (
    <div className="bg-[#2e383b] h-full relative rounded-[24px] shrink-0 w-[185px]">
      <Group59 />
    </div>
  );
}

function Frame12() {
  return (
    <div className="content-stretch flex flex-col items-start relative shrink-0">
      <p className="font-['Roboto_Condensed:Bold',sans-serif] font-bold leading-[27.5px] relative shrink-0 text-[#f4f5fc] text-[24px] w-[316px]">{`Интерфейс приложения здоровья `}</p>
    </div>
  );
}

function Frame16() {
  return (
    <div className="content-stretch flex flex-col items-start relative shrink-0 w-full">
      <Frame12 />
    </div>
  );
}

function FreeIconVerify() {
  return (
    <div className="h-[13px] relative shrink-0 w-[12px]" data-name="free-icon-verify-12557027 1">
      <svg className="absolute block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 12 13">
        <g clipPath="url(#clip0_363_558)" id="free-icon-verify-12557027 1">
          <path d={svgPaths.p37971580} fill="url(#paint0_linear_363_558)" id="Vector" />
        </g>
        <defs>
          <linearGradient gradientUnits="userSpaceOnUse" id="paint0_linear_363_558" x1="5.03886" x2="-0.208806" y1="5.84235" y2="14.2068">
            <stop stopColor="#FF6B21" />
            <stop offset="1" stopColor="#994014" />
          </linearGradient>
          <clipPath id="clip0_363_558">
            <rect fill="white" height="13" width="12" />
          </clipPath>
        </defs>
      </svg>
    </div>
  );
}

function Container13() {
  return (
    <div className="bg-[#3a464a] content-stretch flex gap-[4.967px] h-[22.351px] items-center px-[9.934px] relative rounded-[14.9px] shrink-0" data-name="Container">
      <FreeIconVerify />
      <p className="font-['Roboto_Condensed:Bold',sans-serif] font-bold leading-[12px] relative shrink-0 text-[#6a777b] text-[10.99px] whitespace-nowrap">Проверенно ментором</p>
    </div>
  );
}

function Container14() {
  return (
    <div className="bg-[#343e42] content-stretch flex h-[55px] items-center justify-center px-[21px] py-px relative rounded-[24px] shrink-0" data-name="Container">
      <div aria-hidden="true" className="absolute border border-[#57646a] border-solid inset-0 pointer-events-none rounded-[24px] shadow-[0px_5px_0px_0px_rgba(0,0,0,0.5)]" />
      <p className="font-['Roboto_Condensed:Bold',sans-serif] font-bold leading-[27.5px] relative shrink-0 text-[#f4f5fc] text-[22px] whitespace-nowrap">Смотреть фидбек</p>
    </div>
  );
}

function FreeIconYes1() {
  return (
    <div className="relative shrink-0 size-[17px]" data-name="free-icon-yes-9426997 2">
      <svg className="absolute block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 17 17">
        <g clipPath="url(#clip0_177_2882)" id="free-icon-yes-9426997 2">
          <path d={svgPaths.p9304f00} fill="var(--fill-0, #5EDD60)" id="Vector" />
          <path d={svgPaths.p28422000} fill="var(--fill-0, white)" id="Vector_2" />
        </g>
        <defs>
          <clipPath id="clip0_177_2882">
            <rect fill="white" height="17" width="17" />
          </clipPath>
        </defs>
      </svg>
    </div>
  );
}

function Container15() {
  return (
    <div className="bg-[#424d52] content-stretch flex gap-[8px] h-[36px] items-center justify-center px-[16px] relative rounded-[24px] shrink-0" data-name="Container">
      <FreeIconYes1 />
      <p className="font-['Roboto_Condensed:Bold',sans-serif] font-bold leading-[27.5px] relative shrink-0 text-[#5edd60] text-[16px] whitespace-nowrap">Готово</p>
    </div>
  );
}

function Frame25() {
  return (
    <div className="content-stretch flex flex-col items-start relative shrink-0">
      <Container15 />
    </div>
  );
}

function Frame19() {
  return (
    <div className="content-stretch flex items-end justify-between relative shrink-0 w-full">
      <Container14 />
      <Frame25 />
    </div>
  );
}

function Frame26() {
  return (
    <div className="content-stretch flex flex-col gap-[10px] items-start relative shrink-0 w-full">
      <Container13 />
      <Frame19 />
    </div>
  );
}

function Frame11() {
  return (
    <div className="content-stretch flex flex-[1_0_0] flex-col h-full items-start justify-between min-h-px min-w-px relative">
      <Frame16 />
      <Frame26 />
    </div>
  );
}

function Frame10() {
  return (
    <div className="content-stretch flex flex-[1_0_0] gap-[20px] items-center min-h-px min-w-px relative w-full">
      <Frame2 />
      <Frame11 />
    </div>
  );
}

function Link2() {
  return (
    <div className="bg-[#343e42] content-stretch flex flex-col h-[240px] items-center p-[20px] relative rounded-[24px] shrink-0 w-[572px]" data-name="Link">
      <Frame10 />
    </div>
  );
}

export default function Frame17() {
  return (
    <div className="content-stretch flex flex-col gap-[20px] items-start justify-center relative size-full">
      <Frame20 />
      <Link />
      <Link1 />
      <Link2 />
    </div>
  );
}