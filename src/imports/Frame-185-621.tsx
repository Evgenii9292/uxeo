import React from "react";
import svgPaths from "./svg-yq9smhovxy";
import img12E088190693C318Afec73Ca1815D3C41 from "figma:asset/fdff70f649eae1ae4752810919f7b04f9373ac71.png";
import img25Pinterest20200821174201 from "figma:asset/135b7981ee0a2450117e54674e803f431400d838.png";
import img62D1B8Ce5Be6335F5246A923C3Ed65Aa1 from "figma:asset/3b5855b9b94a274e284bca7a31a205878755d6de.png";
import imgFgCj9TVeaAejZc1 from "figma:asset/5cf4fb64fe22e0e5afaa1b984605acb62dfaed4d.png";
import imgProfilePicture from "figma:asset/f5ede891d42e7d913db50dc1c43b19bce83af51e.png";

function Battery() {
  return (
    <div className="absolute contents right-[7.74px] top-[9.14px]" data-name="Battery">
      <div className="absolute h-[5.976px] right-[8.97px] top-[9.14px] w-[11.601px]" data-name="Rectangle">
        <svg className="absolute block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 11.601 5.97626">
          <path d={svgPaths.p3bb71c0} id="Rectangle" opacity="0.35" stroke="var(--stroke-0, #2E2533)" strokeWidth="0.527317" />
        </svg>
      </div>
      <div className="absolute h-[2.109px] right-[7.74px] top-[11.07px] w-[0.7px]" data-name="Combined Shape">
        <svg className="absolute block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 0.700298 2.10927">
          <path d={svgPaths.pdbfea80} fill="var(--fill-0, #2E2533)" id="Combined Shape" opacity="0.4" />
        </svg>
      </div>
      <div className="absolute h-[3.867px] right-[10.02px] top-[10.2px] w-[9.492px]" data-name="Rectangle">
        <svg className="absolute block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 9.49172 3.86699">
          <path d={svgPaths.p29567b00} fill="var(--fill-0, #2E2533)" id="Rectangle" />
        </svg>
      </div>
    </div>
  );
}

function RightSide() {
  return (
    <div className="absolute contents right-[7.74px] top-[9.14px]" data-name="Right Side">
      <Battery />
      <div className="absolute h-[5.782px] right-[23.22px] top-[9.14px] w-[8.054px]" data-name="Wifi">
        <svg className="absolute block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 8.05371 5.78216">
          <path d={svgPaths.p1b14b00} fill="var(--fill-0, #2E2533)" id="Wifi" />
        </svg>
      </div>
      <div className="absolute h-[5.625px] right-[33.92px] top-[9.32px] w-[8.964px]" data-name="Mobile Signal">
        <svg className="absolute block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 8.96387 5.625">
          <path d={svgPaths.p392a3700} fill="var(--fill-0, #2E2533)" id="Mobile Signal" />
        </svg>
      </div>
    </div>
  );
}

function LeftSide() {
  return (
    <div className="absolute contents left-[17.64px] top-[9.05px]" data-name="Left Side">
      <div className="absolute h-[5.847px] left-[17.64px] top-[9.05px] w-[14.99px]" data-name="9:41">
        <svg className="absolute block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 14.9896 5.84735">
          <g id="9:41">
            <path d={svgPaths.p8de8d80} fill="var(--fill-0, #2E2533)" />
            <path d={svgPaths.p403fe00} fill="var(--fill-0, #2E2533)" />
            <path d={svgPaths.p2e4d5400} fill="var(--fill-0, #2E2533)" />
            <path d={svgPaths.p3eeaddf0} fill="var(--fill-0, #2E2533)" />
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
    <div className="-translate-x-1/2 absolute h-[22.287px] left-[calc(50%+6.02px)] top-[-19.97px] w-[189.944px]" data-name="iOS/Status Bar/Black">
      <IOsStatusBarBlack1 />
    </div>
  );
}

function UserNotification() {
  return (
    <div className="absolute contents left-[8.56px] top-[calc(100%+158.21px)]" data-name="User Notification">
      <p className="absolute font-['Roboto_Mono:Medium',sans-serif] font-medium h-[5.561px] leading-[1.275] left-[35.08px] text-[6.845px] text-black top-[calc(100%+160.35px)] uppercase w-[60.748px]">Justin Hope</p>
      <div className="absolute left-[8.56px] rounded-[6.845px] size-[19.679px] top-[calc(100%+158.21px)]" data-name="12e088190693c318afec73ca1815d3c4 1">
        <img alt="" className="absolute inset-0 max-w-none object-cover pointer-events-none rounded-[6.845px] size-full" src={img12E088190693C318Afec73Ca1815D3C41} />
      </div>
      <p className="absolute font-['Neue_Machina:Regular',sans-serif] leading-[1.275] left-[36.36px] not-italic text-[4.278px] text-[rgba(0,0,0,0.4)] top-[calc(100%+171.05px)] whitespace-nowrap">put up for sale NFT 10 min ago</p>
    </div>
  );
}

function StarIconContainer() {
  return (
    <div className="absolute left-[22.25px] size-[6.845px] top-[calc(100%+171.9px)]" data-name="Star Icon Container">
      <svg className="absolute block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 6.84489 6.84492">
        <g id="Group 481197">
          <path d={svgPaths.p137aa00} fill="var(--fill-0, #7AAD83)" id="Star 1" />
          <path d={svgPaths.p197b0d00} id="Vector 186" stroke="var(--stroke-0, white)" strokeWidth="0.570404" />
        </g>
      </svg>
    </div>
  );
}

function StarIconContainer1() {
  return (
    <div className="absolute left-[26.74px] size-[6.845px] top-[calc(100%-79.05px)]" data-name="Star Icon Container">
      <svg className="absolute block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 6.84484 6.84484">
        <g id="Group 481193">
          <path d={svgPaths.ped44d00} fill="var(--fill-0, #4F86EC)" id="Star 1" />
          <path d={svgPaths.p25cea00} id="Vector 186" stroke="var(--stroke-0, white)" strokeWidth="0.570404" />
        </g>
      </svg>
    </div>
  );
}

function NotificationContainer() {
  return (
    <div className="absolute contents left-[13.05px] top-[68.23px]" data-name="Notification Container">
      <p className="absolute font-['Roboto_Mono:Medium',sans-serif] font-medium h-[5.52px] leading-[0] left-[calc(25%-2.82px)] text-[0px] text-[6.183px] text-black top-[70.44px] uppercase w-[146.172px]">
        <span className="font-['Craftwork_Grotesk:Bold',sans-serif] leading-[1.275]" style={{ fontVariationSettings: "'wdth' 700" }}>
          Justin
        </span>
        <span className="font-['Craftwork_Grotesk:Bold',sans-serif] leading-[1.275]" style={{ fontVariationSettings: "'wdth' 700" }}>{` `}</span>
        <span className="font-['Craftwork_Grotesk:Semi_Bold',sans-serif] leading-[1.275] lowercase text-[#909090]" style={{ fontVariationSettings: "'wdth' 600" }}>
          left a comment on
        </span>
        <span className="font-['Craftwork_Grotesk:Semi_Bold',sans-serif] leading-[1.275] lowercase" style={{ fontVariationSettings: "'wdth' 600" }}>{` LUI`}</span>
      </p>
      <div className="absolute left-[13.05px] rounded-[6.845px] size-[19.679px] top-[68.23px]" data-name="12e088190693c318afec73ca1815d3c4 1">
        <img alt="" className="absolute inset-0 max-w-none object-cover pointer-events-none rounded-[6.845px] size-full" src={img12E088190693C318Afec73Ca1815D3C41} />
      </div>
      <p className="absolute font-['Neue_Machina:Regular',sans-serif] leading-[1.275] left-[calc(25%-2.77px)] not-italic text-[4.858px] text-[rgba(0,0,0,0.4)] top-[calc(100%-79.88px)] whitespace-nowrap">15 min ago</p>
      <StarIconContainer1 />
    </div>
  );
}

function PaginationDotsContainer() {
  return (
    <div className="h-[1.369px] relative w-[6.93px]" data-name="Pagination Dots Container">
      <svg className="absolute block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 6.93055 1.36917">
        <g id="Group 481201">
          <circle cx="6.24607" cy="0.684683" fill="var(--fill-0, #C4C4C4)" id="Ellipse 43" r="0.684484" />
          <circle cx="3.4658" cy="0.684684" fill="var(--fill-0, #C4C4C4)" id="Ellipse 44" r="0.684484" />
          <circle cx="0.684484" cy="0.684484" fill="var(--fill-0, #C4C4C4)" id="Ellipse 45" r="0.684484" />
        </g>
      </svg>
    </div>
  );
}

function PaginationDotsContainer1() {
  return (
    <div className="h-[1.369px] relative w-[6.93px]" data-name="Pagination Dots Container">
      <svg className="absolute block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 6.93049 1.36897">
        <g id="Group 481202">
          <circle cx="6.24601" cy="0.684484" fill="var(--fill-0, #C4C4C4)" id="Ellipse 43" r="0.684484" />
          <circle cx="3.46573" cy="0.684485" fill="var(--fill-0, #C4C4C4)" id="Ellipse 44" r="0.684484" />
          <circle cx="0.684484" cy="0.684485" fill="var(--fill-0, #C4C4C4)" id="Ellipse 45" r="0.684484" />
        </g>
      </svg>
    </div>
  );
}

function PriceTagContainer() {
  return (
    <div className="absolute contents left-[calc(75%+9.45px)] top-[calc(100%+162.06px)]" data-name="Price Tag Container">
      <div className="absolute bg-[#f1f1f1] h-[13.262px] left-[calc(75%+9.45px)] rounded-[2.567px] top-[calc(100%+162.06px)] w-[38.93px]" data-name="Price Tag Background" />
      <p className="-translate-x-1/2 absolute font-['Roboto_Mono:Medium',sans-serif] font-medium h-[7.7px] leading-[1.275] left-[calc(100%-5.29px)] text-[#7aad83] text-[4.69px] text-center top-[calc(100%+165.49px)] uppercase w-[19.732px]">buy</p>
      <p className="absolute font-['Roboto_Mono:Regular',sans-serif] font-normal h-[5.588px] leading-[1.275] left-[calc(75%+15.87px)] text-[4.47px] text-black top-[calc(100%+165.91px)] uppercase w-[13.69px]">$35.7</p>
    </div>
  );
}

function Ic24Map() {
  return (
    <div className="absolute inset-[317.98%_65.77%_-224.7%_27.85%]" data-name="ic24-map">
      <svg className="absolute block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 10.8076 10.8076">
        <g id="ic24-map">
          <path clipRule="evenodd" d={svgPaths.p27331f2} fill="var(--fill-0, #483B50)" fillRule="evenodd" id="Icon" />
        </g>
      </svg>
    </div>
  );
}

function Ic24ViewSchedule() {
  return (
    <div className="absolute inset-[317.98%_19.1%_-224.7%_74.52%]" data-name="ic24-view-schedule">
      <svg className="absolute block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 10.8076 10.8076">
        <g id="ic24-view-schedule">
          <path clipRule="evenodd" d={svgPaths.pffdad80} fill="var(--fill-0, #483B50)" fillRule="evenodd" id="Icon" />
        </g>
      </svg>
    </div>
  );
}

function Group1() {
  return (
    <div className="absolute inset-[8.33%_8.34%_8.34%_8.33%]" data-name="Group">
      <svg className="absolute block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 9.00637 9.00637">
        <g id="Group">
          <path d={svgPaths.p662c480} fill="var(--fill-0, #483B50)" id="Vector" />
        </g>
      </svg>
    </div>
  );
}

function Group() {
  return (
    <div className="absolute contents inset-[8.33%_8.34%_8.34%_8.33%]" data-name="Group">
      <Group1 />
    </div>
  );
}

function User() {
  return (
    <div className="absolute left-[calc(100%-11.93px)] size-[10.808px] top-[calc(100%+350.88px)]" data-name="user 1">
      <Group />
    </div>
  );
}

function IconContainer1() {
  return (
    <div className="absolute contents left-[14.55px] top-[calc(100%+351.15px)]" data-name="Icon Container">
      <div className="absolute inset-[318.15%_85.35%_-224.53%_8.59%]" data-name="Icon">
        <div className="absolute inset-[6.25%_6.77%_8.86%_8.33%]" data-name="Icon">
          <svg className="absolute block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 8.98469 8.98289">
            <path clipRule="evenodd" d={svgPaths.p10473d00} fill="var(--fill-0, #7AAD83)" fillRule="evenodd" id="Icon" />
          </svg>
        </div>
      </div>
      <div className="absolute h-[7.7px] left-[16.68px] top-[calc(100%+352.44px)] w-[6.417px]">
        <div className="absolute inset-[-3.93%_-3.33%_-3.33%_-3.33%]">
          <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 6.84484 8.25974">
            <path d={svgPaths.p36aa3100} fill="var(--fill-0, #7AAD83)" id="Vector 40" stroke="var(--stroke-0, #7AAD83)" strokeWidth="0.427803" />
          </svg>
        </div>
      </div>
      <div className="absolute h-[1.497px] left-[19.89px] top-[calc(100%+359.49px)] w-0">
        <div className="absolute inset-[0_-0.45px]">
          <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 0.898386 1.49731">
            <path d="M0.449193 0V1.49731" id="Vector 41" stroke="var(--stroke-0, white)" strokeWidth="0.898386" />
          </svg>
        </div>
      </div>
    </div>
  );
}

function IconContainer() {
  return (
    <div className="absolute contents left-[14.55px] top-[calc(100%+350.88px)]" data-name="Icon Container">
      <Ic24Map />
      <Ic24ViewSchedule />
      <User />
      <IconContainer1 />
    </div>
  );
}

function IconContainer2() {
  return (
    <div className="absolute left-[calc(50%-7.25px)] size-[28.235px] top-[calc(100%+332.33px)]" data-name="Icon Container">
      <div className="absolute inset-[-75.76%]">
        <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 71.0153 71.0153">
          <g id="Group 89">
            <g filter="url(#filter0_d_177_3120)" id="Ellipse 42">
              <circle cx="35.5076" cy="35.5076" fill="var(--fill-0, #7AAD83)" r="14.1175" />
            </g>
            <path clipRule="evenodd" d={svgPaths.p1e8cbbf0} fill="var(--fill-0, white)" fillRule="evenodd" id="Icon" />
          </g>
          <defs>
            <filter colorInterpolationFilters="sRGB" filterUnits="userSpaceOnUse" height="71.0152" id="filter0_d_177_3120" width="71.0152" x="0" y="0">
              <feFlood floodOpacity="0" result="BackgroundImageFix" />
              <feColorMatrix in="SourceAlpha" result="hardAlpha" type="matrix" values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 127 0" />
              <feOffset />
              <feGaussianBlur stdDeviation="10.6951" />
              <feColorMatrix type="matrix" values="0 0 0 0 0.851667 0 0 0 0 0.9125 0 0 0 0 0.862684 0 0 0 1 0" />
              <feBlend in2="BackgroundImageFix" mode="normal" result="effect1_dropShadow_177_3120" />
              <feBlend in="SourceGraphic" in2="effect1_dropShadow_177_3120" mode="normal" result="shape" />
            </filter>
          </defs>
        </svg>
      </div>
    </div>
  );
}

function Tapbar() {
  return (
    <div className="absolute contents left-0 top-[calc(100%+332.33px)]" data-name="Tapbar">
      <div className="absolute inset-[313.63%_-8.11%_-237.29%_0]" data-name="BG Controls">
        <svg className="absolute block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 183.1 38.0744">
          <path d={svgPaths.p18a78750} fill="var(--fill-0, white)" id="BG Controls" stroke="var(--stroke-0, #F3F3F3)" strokeWidth="0.427803" />
        </svg>
      </div>
      <IconContainer />
      <div className="absolute bg-[#212121] h-[2.567px] left-[calc(25%+9.43px)] rounded-[6.417px] top-[calc(100%+375.11px)] w-[74.438px]" data-name="Divider" />
      <IconContainer2 />
    </div>
  );
}

function NotificationContainer3() {
  return (
    <div className="absolute contents left-[13.03px] top-[calc(100%-64.08px)]" data-name="Notification Container">
      <p className="absolute font-['Roboto_Mono:Medium',sans-serif] font-medium h-[5.741px] leading-[0] left-[calc(25%-2.82px)] text-[0px] text-[6.183px] text-black top-[calc(100%-62.05px)] uppercase w-[146.172px]">
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
      <div className="absolute left-[13.05px] rounded-[6.845px] size-[19.679px] top-[calc(100%-64.07px)]" data-name="12e088190693c318afec73ca1815d3c4 1">
        <img alt="" className="absolute inset-0 max-w-none object-cover pointer-events-none rounded-[6.845px] size-full" src={img12E088190693C318Afec73Ca1815D3C41} />
      </div>
      <div className="absolute left-[13.03px] rounded-[6.844px] size-[19.662px] top-[calc(100%-64.08px)]" data-name="62d1b8ce5be6335f5246a923c3ed65aa 1">
        <img alt="" className="absolute inset-0 max-w-none object-cover pointer-events-none rounded-[6.844px] size-full" src={img62D1B8Ce5Be6335F5246A923C3Ed65Aa1} />
      </div>
    </div>
  );
}

function NotificationContainer2() {
  return (
    <div className="absolute contents left-[13.03px] top-[calc(100%-64.08px)]" data-name="Notification Container">
      <p className="absolute font-['Neue_Machina:Regular',sans-serif] leading-[1.275] left-[calc(25%-2.77px)] not-italic text-[4.858px] text-[rgba(0,0,0,0.4)] top-[calc(100%-51.24px)] whitespace-nowrap">70 min ago</p>
      <NotificationContainer3 />
    </div>
  );
}

function NotificationContainer1() {
  return (
    <div className="absolute contents left-[13.03px] top-[calc(100%-64.08px)]" data-name="Notification Container">
      <NotificationContainer2 />
      <div className="absolute h-0 left-[13.69px] top-[calc(100%-39.74px)] w-[143.081px]">
        <div className="absolute inset-[-0.22px_0]">
          <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 143.081 0.441608">
            <path d="M0 0.220804H143.081" id="Vector 222" stroke="var(--stroke-0, #EBEBEB)" strokeWidth="0.441608" />
          </svg>
        </div>
      </div>
    </div>
  );
}

function NotificationContainer6() {
  return (
    <div className="absolute contents left-[13.03px] top-[calc(100%-35.11px)]" data-name="Notification Container">
      <p className="absolute font-['Roboto_Mono:Medium',sans-serif] font-medium h-[5.741px] leading-[0] left-[calc(25%-2.82px)] text-[0px] text-[6.183px] text-black top-[calc(100%-33.07px)] uppercase w-[146.172px]">
        <span className="font-['Craftwork_Grotesk:Bold',sans-serif] leading-[1.275]" style={{ fontVariationSettings: "'wdth' 700" }}>
          Mark
        </span>
        <span className="font-['Craftwork_Grotesk:Bold',sans-serif] leading-[1.275] lowercase text-[#909090]" style={{ fontVariationSettings: "'wdth' 700" }}>{` liked your `}</span>
        <span className="font-['Craftwork_Grotesk:Bold',sans-serif] leading-[1.275] lowercase" style={{ fontVariationSettings: "'wdth' 700" }}>
          post
        </span>
        <span className="font-['Craftwork_Grotesk:Semi_Bold',sans-serif] leading-[1.275] lowercase" style={{ fontVariationSettings: "'wdth' 600" }}>{` `}</span>
      </p>
      <div className="absolute left-[13.05px] rounded-[6.845px] size-[19.679px] top-[calc(100%-35.1px)]" data-name="12e088190693c318afec73ca1815d3c4 1">
        <img alt="" className="absolute inset-0 max-w-none object-cover pointer-events-none rounded-[6.845px] size-full" src={img12E088190693C318Afec73Ca1815D3C41} />
      </div>
      <div className="absolute left-[13.03px] rounded-[6.845px] size-[19.663px] top-[calc(100%-35.11px)]" data-name="FGCj-9tVEAAejZc 1">
        <img alt="" className="absolute inset-0 max-w-none object-cover pointer-events-none rounded-[6.845px] size-full" src={imgFgCj9TVeaAejZc1} />
      </div>
    </div>
  );
}

function StarIconContainer2() {
  return (
    <div className="absolute left-[26.74px] size-[6.845px] top-[calc(100%-21.41px)]" data-name="Star Icon Container">
      <svg className="absolute block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 6.84484 6.84484">
        <g id="Group 481195">
          <path d={svgPaths.ped44d00} fill="var(--fill-0, #4F86EC)" id="Star 1" />
          <path d={svgPaths.p25cea00} id="Vector 186" stroke="var(--stroke-0, white)" strokeWidth="0.570404" />
        </g>
      </svg>
    </div>
  );
}

function NotificationContainer5() {
  return (
    <div className="absolute contents left-[13.03px] top-[calc(100%-35.11px)]" data-name="Notification Container">
      <p className="absolute font-['Neue_Machina:Regular',sans-serif] leading-[1.275] left-[calc(25%-2.77px)] not-italic text-[4.858px] text-[rgba(0,0,0,0.4)] top-[calc(100%-22.27px)] whitespace-nowrap">79 min ago</p>
      <NotificationContainer6 />
      <StarIconContainer2 />
    </div>
  );
}

function NotificationContainer4() {
  return (
    <div className="absolute contents left-[13.03px] top-[calc(100%-35.11px)]" data-name="Notification Container">
      <NotificationContainer5 />
      <div className="absolute h-0 left-[13.69px] top-[calc(100%-10.82px)] w-[143.081px]">
        <div className="absolute inset-[-0.22px_0]">
          <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 143.081 0.441608">
            <path d="M0 0.220804H143.081" id="Vector 222" stroke="var(--stroke-0, #EBEBEB)" strokeWidth="0.441608" />
          </svg>
        </div>
      </div>
    </div>
  );
}

function IconContainer3() {
  return (
    <div className="absolute contents left-[30.25px] top-[42.62px]" data-name="Icon Container">
      <div className="absolute h-[7.507px] left-[30.25px] top-[42.61px] w-[8.832px]">
        <svg className="absolute block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 8.83216 7.50733">
          <ellipse cx="4.41608" cy="3.75367" fill="var(--fill-0, #4F86EC)" id="Ellipse 313" rx="4.41608" ry="3.75367" />
        </svg>
      </div>
      <p className="absolute capitalize font-['Craftwork_Grotesk:Bold',sans-serif] leading-[1.07] left-[33.34px] text-[4.221px] text-white top-[44.16px] tracking-[0.1055px] whitespace-nowrap" style={{ fontVariationSettings: "'wdth' 700" }}>
        7
      </p>
    </div>
  );
}

function IconContainer4() {
  return (
    <div className="absolute contents left-[calc(50%+9.83px)] top-[42.39px]" data-name="Icon Container">
      <div className="absolute h-[7.949px] left-[calc(50%+9.83px)] top-[42.39px] w-[11.04px]">
        <svg className="absolute block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 11.0402 7.94894">
          <ellipse cx="5.5201" cy="3.97447" fill="var(--fill-0, #E2E2E2)" id="Ellipse 313" rx="5.5201" ry="3.97447" />
        </svg>
      </div>
      <p className="absolute capitalize font-['Craftwork_Grotesk:Bold',sans-serif] leading-[1.07] left-[calc(50%+12.47px)] text-[#6d6d6d] text-[4.221px] top-[44.16px] tracking-[0.1055px] whitespace-nowrap" style={{ fontVariationSettings: "'wdth' 700" }}>
        10
      </p>
    </div>
  );
}

function IPhone13ProMax() {
  return (
    <div className="relative h-[160.966px] rounded-[11.04px] w-[169.357px]" data-name="iPhone 13 Pro Max - 15" style={{ backgroundImage: "linear-gradient(0.465808deg, rgba(0, 0, 0, 0.2) 32.621%, rgba(255, 255, 255, 0) 43.15%), linear-gradient(90deg, rgb(255, 255, 255) 0%, rgb(255, 255, 255) 100%)" }}>
      <div className="overflow-clip relative rounded-[inherit] size-full">
        <IOsStatusBarBlack />
        <p className="absolute capitalize font-['Craftwork_Grotesk:Bold',sans-serif] leading-[1.07] left-[13.03px] text-[8.556px] text-black top-[17px] tracking-[0.2139px] whitespace-nowrap" style={{ fontVariationSettings: "'wdth' 700" }}>
          Notifications
        </p>
        <p className="absolute capitalize font-['Craftwork_Grotesk:Semi_Bold',sans-serif] h-[7.728px] leading-[1.07] left-[13.03px] text-[5.52px] text-black top-[42.62px] tracking-[0.138px] w-[30.25px]" style={{ fontVariationSettings: "'wdth' 600" }}>
          Inbox
        </p>
        <p className="absolute capitalize font-['Craftwork_Grotesk:Semi_Bold',sans-serif] h-[7.728px] leading-[1.07] left-[calc(25%+27.66px)] text-[5.52px] text-black top-[42.62px] tracking-[0.138px] w-[51.668px]" style={{ fontVariationSettings: "'wdth' 600" }}>
          General
        </p>
        <p className="absolute font-['Craftwork_Grotesk:Semi_Bold',sans-serif] leading-[1.275] left-[calc(75%-8.6px)] text-[6.021px] text-black top-[18.26px] whitespace-nowrap" style={{ fontVariationSettings: "'wdth' 600" }}>
          Mark all read
        </p>
        <UserNotification />
        <p className="absolute font-['Roboto_Mono:Medium',sans-serif] font-medium h-[5.561px] leading-[1.275] left-[35.08px] text-[6.845px] text-black top-[calc(100%+160.35px)] uppercase w-[60.748px]">Justin Hope</p>
        <StarIconContainer />
        <NotificationContainer />
        <div className="absolute bg-[#ebebeb] h-[0.428px] left-[35.08px] top-[calc(100%+151.8px)] w-[140.319px]" data-name="Divider" />
        <div className="absolute flex h-[1.369px] items-center justify-center left-[calc(100%-3.03px)] top-[calc(100%+139.17px)] w-[6.93px]">
          <div className="flex-none rotate-180">
            <PaginationDotsContainer />
          </div>
        </div>
        <div className="absolute flex h-[1.369px] items-center justify-center left-[calc(100%-3.03px)] top-[calc(100%+330.83px)] w-[6.93px]">
          <div className="flex-none rotate-180">
            <PaginationDotsContainer1 />
          </div>
        </div>
        <div className="absolute h-[111.657px] left-[36.36px] rounded-[8.556px] top-[calc(100%+186.88px)] w-[138.18px]" data-name="(25) Pinterest 2020-08-21 17-42-01">
          <img alt="" className="absolute inset-0 max-w-none object-cover pointer-events-none rounded-[8.556px] size-full" src={img25Pinterest20200821174201} />
        </div>
        <PriceTagContainer />
        <div className="absolute h-[5.378px] left-[calc(50%-5.23px)] top-[calc(100%+137.07px)] w-[5.134px]">
          <div className="absolute inset-[-6.43%_0_-4.55%_-3.37%]">
            <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 5.30649 5.96827">
              <path d={svgPaths.p5972a00} id="Vector 188" stroke="var(--stroke-0, black)" strokeWidth="0.488917" />
            </svg>
          </div>
        </div>
        <div className="absolute h-[5.378px] left-[calc(50%-5.23px)] top-[calc(100%+307.76px)] w-[5.134px]">
          <div className="absolute inset-[-6.43%_0_-4.55%_-3.37%]">
            <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 5.30649 5.96827">
              <path d={svgPaths.p5972a00} id="Vector 188" stroke="var(--stroke-0, black)" strokeWidth="0.488917" />
            </svg>
          </div>
        </div>
        <div className="absolute flex h-[5.378px] items-center justify-center left-[calc(50%-1.07px)] top-[calc(100%+137.07px)] w-[5.134px]">
          <div className="flex-none rotate-180">
            <div className="h-[5.378px] relative w-[5.134px]">
              <div className="absolute inset-[-6.43%_0_-4.55%_-3.37%]">
                <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 5.30649 5.96827">
                  <path d={svgPaths.p5972a00} id="Vector 189" stroke="var(--stroke-0, black)" strokeWidth="0.488917" />
                </svg>
              </div>
            </div>
          </div>
        </div>
        <div className="absolute flex h-[5.378px] items-center justify-center left-[calc(50%-1.07px)] top-[calc(100%+307.76px)] w-[5.134px]">
          <div className="flex-none rotate-180">
            <div className="h-[5.378px] relative w-[5.134px]">
              <div className="absolute inset-[-6.43%_0_-4.55%_-3.37%]">
                <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 5.30649 5.96827">
                  <path d={svgPaths.p5972a00} id="Vector 189" stroke="var(--stroke-0, black)" strokeWidth="0.488917" />
                </svg>
              </div>
            </div>
          </div>
        </div>
        <div className="absolute h-[6.57px] left-[calc(75%-3.81px)] top-[calc(100%+136.58px)] w-[7.229px]">
          <div className="absolute inset-[-3.72%_-3.38%_-2.18%_-3.38%]">
            <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 7.71804 6.95785">
              <path d={svgPaths.p1efb2300} id="Vector 187" stroke="var(--stroke-0, black)" strokeWidth="0.488917" />
            </svg>
          </div>
        </div>
        <div className="absolute h-[6.57px] left-[calc(75%-3.81px)] top-[calc(100%+307.27px)] w-[7.229px]">
          <div className="absolute inset-[-3.72%_-3.38%_-2.18%_-3.38%]">
            <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 7.71804 6.95785">
              <path d={svgPaths.p1efb2300} id="Vector 187" stroke="var(--stroke-0, black)" strokeWidth="0.488917" />
            </svg>
          </div>
        </div>
        <div className="absolute h-[7.173px] left-[calc(25%-4.69px)] top-[calc(100%+136.09px)] w-[7.187px]">
          <svg className="absolute block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 7.18652 7.17284">
            <path d={svgPaths.p2bfd2380} id="Ellipse 300" stroke="var(--stroke-0, black)" strokeWidth="0.488917" />
          </svg>
        </div>
        <div className="absolute h-[7.173px] left-[calc(25%-4.69px)] top-[calc(100%+306.78px)] w-[7.187px]">
          <svg className="absolute block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 7.18652 7.17284">
            <path d={svgPaths.p2bfd2380} id="Ellipse 300" stroke="var(--stroke-0, black)" strokeWidth="0.488917" />
          </svg>
        </div>
        <p className="absolute font-['Neue_Machina:Regular',sans-serif] h-[10.267px] leading-[1.605] left-[calc(25%+7.04px)] not-italic text-[6.356px] text-black top-[calc(100%+135.11px)] w-[3.422px]">1</p>
        <p className="absolute font-['Neue_Machina:Regular',sans-serif] h-[10.267px] leading-[1.605] left-[calc(25%+7.04px)] not-italic text-[6.356px] text-black top-[calc(100%+305.8px)] w-[3.422px]">1</p>
        <p className="absolute font-['Neue_Machina:Regular',sans-serif] h-[10.267px] leading-[1.605] left-[calc(50%+7.24px)] not-italic text-[6.356px] text-black top-[calc(100%+135.11px)] w-[4.889px]">0</p>
        <p className="absolute font-['Neue_Machina:Regular',sans-serif] h-[10.267px] leading-[1.605] left-[calc(50%+7.24px)] not-italic text-[6.356px] text-black top-[calc(100%+305.8px)] w-[4.889px]">0</p>
        <p className="absolute font-['Neue_Machina:Regular',sans-serif] h-[10.267px] leading-[1.605] left-[calc(75%+7.92px)] not-italic text-[6.356px] text-black top-[calc(100%+135.11px)] w-[4.4px]">4</p>
        <p className="absolute font-['Neue_Machina:Regular',sans-serif] h-[10.267px] leading-[1.605] left-[calc(75%+7.92px)] not-italic text-[6.356px] text-black top-[calc(100%+305.8px)] w-[4.4px]">4</p>
        <Tapbar />
        <div className="absolute h-0 left-[13.69px] top-[54.76px] w-[143.081px]">
          <div className="absolute inset-[-0.55px_0]">
            <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 143.081 1.10402">
              <path d="M0 0.55201H143.081" id="Vector 221" stroke="var(--stroke-0, #EBEBEB)" strokeWidth="1.10402" />
            </svg>
          </div>
        </div>
        <div className="absolute h-0 left-[13.69px] top-[54.76px] w-[39.524px]">
          <div className="absolute inset-[-0.66px_0]">
            <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 39.5239 1.32482">
              <path d="M0 0.662412H39.5239" id="Vector 223" stroke="var(--stroke-0, #4F86EC)" strokeWidth="1.32482" />
            </svg>
          </div>
        </div>
        <div className="absolute h-0 left-[13.69px] top-[calc(100%-68.67px)] w-[143.081px]">
          <div className="absolute inset-[-0.22px_0]">
            <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 143.081 0.441608">
              <path d="M0 0.220804H143.081" id="Vector 222" stroke="var(--stroke-0, #EBEBEB)" strokeWidth="0.441608" />
            </svg>
          </div>
        </div>
        <NotificationContainer1 />
        <NotificationContainer4 />
        <IconContainer3 />
        <IconContainer4 />
      </div>
      <div aria-hidden="true" className="absolute border-5 border-[#404d52] border-solid inset-[-5px] pointer-events-none rounded-[16.04px]" />
    </div>
  );
}

function Frame2() {
  return (
    <div className="relative" data-name="Frame">
      <IPhone13ProMax />
    </div>
  );
}

function Container2() {
  return (
    <div className="h-[217px] relative rounded-[15px] shrink-0 w-full flex items-center justify-center" data-name="Container">
      <div className="flex items-center justify-center">
        <Frame2 />
      </div>
    </div>
  );
}

function Container4() {
  return (
    <div className="content-stretch flex flex-col gap-[9px] items-start relative shrink-0 w-full" data-name="Container">
      <p className="font-['Roboto_Condensed:Bold',sans-serif] font-bold leading-[35px] relative shrink-0 text-[#f4f5fc] text-[32px] w-full">Интерфейс приложения здоровья</p>
      <p className="font-['Roboto_Condensed:Regular',sans-serif] font-normal leading-[22px] opacity-80 relative shrink-0 text-[#f1f2fb] text-[18px] w-full">Создайте стартовый экран приложения для отслеживания здоровья.</p>
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

function Container8() {
  return (
    <div className="content-stretch flex gap-[5px] items-center justify-center relative shrink-0" data-name="Container">
      <FreeIconSandClocks />
      <p className="font-['Roboto_Condensed:Medium',sans-serif] font-medium leading-[20px] relative shrink-0 text-[#f1f2fb] text-[16px] whitespace-nowrap">25 мин</p>
    </div>
  );
}

function Container7() {
  return (
    <div className="content-stretch flex items-center relative shrink-0" data-name="Container">
      <Container8 />
    </div>
  );
}

function Container6() {
  return (
    <div className="content-stretch flex flex-col items-end relative shrink-0" data-name="Container">
      <Container7 />
    </div>
  );
}

function Container10() {
  return (
    <div className="content-stretch flex items-center relative shrink-0" data-name="Container">
      <div className="content-stretch flex gap-[5px] items-center justify-center relative shrink-0">
        <div className="overflow-clip relative shrink-0 size-[14px]" data-name="Icon/Face">
          <div className="absolute bottom-[37.5%] left-[27.08%] right-[60.42%] top-1/2" data-name="Vector">
            <svg className="absolute block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 1.75 1.75">
              <path d={svgPaths.p1388cf00} fill="var(--fill-0, #F1F2FB)" id="Vector" />
            </svg>
          </div>
          <div className="absolute inset-[2.08%_0_4.17%_0]" data-name="Vector">
            <svg className="absolute block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 14 13.125">
              <path d={svgPaths.pf7fd000} fill="var(--fill-0, #F1F2FB)" id="Vector" />
            </svg>
          </div>
          <div className="absolute bottom-[37.5%] left-[60.42%] right-[27.08%] top-1/2" data-name="Vector">
            <svg className="absolute block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 1.75 1.75">
              <path d={svgPaths.p1388cf00} fill="var(--fill-0, #F1F2FB)" id="Vector" />
            </svg>
          </div>
          <div className="absolute inset-[70.84%_36.46%_18.76%_36.46%]" data-name="Vector">
            <svg className="absolute block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 3.79188 1.45548">
              <path d={svgPaths.p1eb2aec0} fill="var(--fill-0, #F1F2FB)" id="Vector" />
            </svg>
          </div>
        </div>
        <p className="font-['Roboto_Condensed:Medium',sans-serif] font-medium leading-[20px] relative shrink-0 text-[#f1f2fb] text-[16px] whitespace-nowrap">Джун</p>
      </div>
    </div>
  );
}

function Container9() {
  return (
    <div className="content-stretch flex flex-col items-end relative shrink-0" data-name="Container">
      <Container10 />
    </div>
  );
}

function Container11() {
  return (
    <div className="content-stretch flex flex-col items-end relative shrink-0" data-name="Container">
      <div className="content-stretch flex gap-[5px] items-center justify-center relative shrink-0">
        <div className="overflow-clip relative shrink-0 size-[14px]" data-name="Icon/zap">
          <div className="absolute inset-[0_7.14%]" data-name="Vector">
            <svg className="absolute block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 12 14">
              <path d={svgPaths.p91a8b80} fill="var(--fill-0, #F1F2FB)" id="Vector" />
            </svg>
          </div>
        </div>
        <p className="font-['Roboto_Condensed:Medium',sans-serif] font-medium leading-[20px] relative shrink-0 text-[#f1f2fb] text-[16px] whitespace-nowrap">+1250 XP</p>
      </div>
    </div>
  );
}

function Container5() {
  return (
    <div className="content-center flex flex-wrap gap-[5px_20px] items-center relative shrink-0 w-full" data-name="Container">
      <Container6 />
      <Container9 />
      <Container11 />
    </div>
  );
}

function Container3() {
  return (
    <div className="content-stretch flex flex-col gap-[40px] items-start relative shrink-0 w-full" data-name="Container">
      <Container4 />
      <Container5 />
    </div>
  );
}

function Container1() {
  return (
    <div className="content-stretch flex flex-col gap-[20px] items-center relative shrink-0 w-full" data-name="Container">
      <Container2 />
      <Container3 />
    </div>
  );
}

function Link() {
  return (
    <div className="bg-[#404d52] content-stretch flex flex-col items-center pb-[30px] pt-[20px] px-[20px] relative rounded-[24px] shrink-0 w-[572px]" data-name="Link">
      <Container1 />
    </div>
  );
}

function Container() {
  return (
    <div className="content-stretch flex flex-col items-center relative shrink-0 w-[572px]" data-name="Container">
      <Link />
    </div>
  );
}

function FreeIconPlantPot() {
  return (
    <div className="relative shrink-0 size-[26px]" data-name="free-icon-plant-pot-8809495 1">
      <svg className="absolute block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 26 26">
        <g id="free-icon-plant-pot-8809495 1">
          <path d={svgPaths.p3795c380} fill="var(--fill-0, #D6966B)" id="Vector" />
          <path d={svgPaths.p199b0b00} fill="var(--fill-0, #C4804D)" id="Vector_2" />
          <path d={svgPaths.p3c74600} fill="var(--fill-0, #C4804D)" id="Vector_3" />
          <path d={svgPaths.p105ce700} fill="var(--fill-0, #7FC94F)" id="Vector_4" />
          <path d={svgPaths.p147e1980} fill="var(--fill-0, #7FC94F)" id="Vector_5" />
          <path d={svgPaths.p21d94180} fill="var(--fill-0, #5EB132)" id="Vector_6" />
          <path d={svgPaths.p2a73fa00} fill="var(--fill-0, #7FC94F)" id="Vector_7" />
          <path d={svgPaths.p3c311e00} fill="var(--fill-0, #5EB132)" id="Vector_8" />
        </g>
      </svg>
    </div>
  );
}

function ListItemContainer() {
  return (
    <div className="content-stretch flex gap-[10px] items-center relative shrink-0 w-[484px]" data-name="List Item Container">
      <FreeIconPlantPot />
      <p className="font-['Roboto_Condensed:Bold',sans-serif] font-bold leading-[27.5px] relative shrink-0 text-[#f1f2fb] text-[26px] whitespace-nowrap">Что вы прокачиваете</p>
    </div>
  );
}

function Container15() {
  return (
    <div className="content-stretch flex items-center justify-between relative shrink-0 w-[512px]" data-name="Container">
      <ListItemContainer />
      <div className="flex h-[10px] items-center justify-center relative shrink-0 w-[20px]" style={{ "--transform-inner-width": "1200", "--transform-inner-height": "19" } as React.CSSProperties}>
        <div className="-rotate-90 flex-none">
          <div className="h-[20px] relative w-[10px]">
            <div className="absolute inset-[-7.5%_-15%_-7.5%_-6.72%]">
              <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 12.1716 23">
                <path d={svgPaths.p3805cd00} id="Vector 5" stroke="var(--stroke-0, #798589)" strokeLinecap="round" strokeWidth="3" />
              </svg>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

function Container14() {
  return (
    <div className="h-[120px] relative shrink-0 w-full" data-name="Container">
      <div className="flex flex-col items-center justify-center size-full">
        <div className="content-stretch flex flex-col items-center justify-center px-[10px] relative size-full">
          <Container15 />
        </div>
      </div>
    </div>
  );
}

function Container13() {
  return (
    <div className="content-stretch flex flex-col items-start relative shrink-0 w-[532px]" data-name="Container">
      <Container14 />
    </div>
  );
}

function ListItemContainer1() {
  return (
    <div className="bg-[#46545b] content-stretch flex items-center pb-[21px] pt-[20px] px-[20px] relative rounded-[14px] shrink-0" data-name="List Item Container">
      <p className="font-['Roboto_Condensed:Regular',sans-serif] font-normal leading-[22px] relative shrink-0 text-[#f1f2fb] text-[18px] whitespace-pre">{`визуальная иерархия интерфейса  `}</p>
    </div>
  );
}

function ListItemContainer2() {
  return (
    <div className="bg-[#46545b] content-stretch flex items-center pb-[21px] pt-[20px] px-[20px] relative rounded-[14px] shrink-0" data-name="List Item Container">
      <p className="font-['Roboto_Condensed:Regular',sans-serif] font-normal leading-[22px] relative shrink-0 text-[#f1f2fb] text-[18px] whitespace-pre">{`использование контраста  `}</p>
    </div>
  );
}

function ListItemContainer3() {
  return (
    <div className="bg-[#46545b] content-stretch flex items-center pb-[21px] pt-[20px] px-[20px] relative rounded-[14px] shrink-0" data-name="List Item Container">
      <p className="font-['Roboto_Condensed:Regular',sans-serif] font-normal leading-[22px] relative shrink-0 text-[#f1f2fb] text-[18px] whitespace-nowrap">{`проектирование UI `}</p>
    </div>
  );
}

function ListItemContainer4() {
  return (
    <div className="bg-[#46545b] content-stretch flex items-center pb-[21px] pt-[20px] px-[20px] relative rounded-[14px] shrink-0" data-name="List Item Container">
      <p className="font-['Roboto_Condensed:Regular',sans-serif] font-normal leading-[22px] relative shrink-0 text-[#f1f2fb] text-[18px] whitespace-nowrap">работа с карточной структурой</p>
    </div>
  );
}

function HorizontalContainer() {
  return (
    <div className="content-center flex flex-wrap gap-[10px] items-center relative shrink-0 w-[512px]" data-name="Horizontal Container">
      <ListItemContainer1 />
      <ListItemContainer2 />
      <ListItemContainer3 />
      <ListItemContainer4 />
    </div>
  );
}

function Container12() {
  return (
    <div className="bg-[#404d52] content-stretch flex flex-col items-center pb-[30px] px-[20px] relative rounded-[24px] shrink-0" data-name="Container">
      <Container13 />
      <HorizontalContainer />
    </div>
  );
}

function FreeIconTarget() {
  return (
    <div className="overflow-clip relative shrink-0 size-[26px]" data-name="free-icon-target-2493971 1">
      <svg className="absolute block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 26.0002 26.0002">
        <g id="Group">
          <path d={svgPaths.pe8b8500} fill="var(--fill-0, #FF7B4A)" id="Vector" />
          <path d={svgPaths.p25e9cef0} fill="var(--fill-0, #FF435B)" id="Vector_2" />
          <path d={svgPaths.p361ceb00} fill="var(--fill-0, #FFF5F5)" id="Vector_3" />
          <path d={svgPaths.pf5b4800} fill="var(--fill-0, #EFE2DD)" id="Vector_4" />
          <path d={svgPaths.p3f9c1700} fill="var(--fill-0, #FF7B4A)" id="Vector_5" />
          <path d={svgPaths.p23df4f00} fill="var(--fill-0, #FF435B)" id="Vector_6" />
          <path d={svgPaths.p25ecdd40} fill="var(--fill-0, #5F55AF)" id="Vector_7" />
          <path d={svgPaths.p12856620} fill="var(--fill-0, #453D83)" id="Vector_8" />
          <g id="Group_2">
            <path d={svgPaths.p2d7eca80} fill="var(--fill-0, #979FEF)" id="Vector_9" />
            <path d={svgPaths.p28c48780} fill="var(--fill-0, #6B77E8)" id="Vector_10" />
          </g>
        </g>
      </svg>
    </div>
  );
}

function ListItemContainer5() {
  return (
    <div className="content-stretch flex gap-[10px] items-center relative shrink-0 w-[484px]" data-name="List Item Container">
      <FreeIconTarget />
      <p className="font-['Roboto_Condensed:Bold',sans-serif] font-bold leading-[27.5px] relative shrink-0 text-[#f1f2fb] text-[26px] whitespace-nowrap">Задание</p>
    </div>
  );
}

function Container19() {
  return (
    <div className="content-stretch flex items-center justify-between relative shrink-0 w-[512px]" data-name="Container">
      <ListItemContainer5 />
      <div className="flex h-[10px] items-center justify-center relative shrink-0 w-[20px]" style={{ "--transform-inner-width": "1200", "--transform-inner-height": "19" } as React.CSSProperties}>
        <div className="-rotate-90 flex-none">
          <div className="h-[20px] relative w-[10px]">
            <div className="absolute inset-[-7.5%_-15%_-7.5%_-6.72%]">
              <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 12.1716 23">
                <path d={svgPaths.p3805cd00} id="Vector 5" stroke="var(--stroke-0, #798589)" strokeLinecap="round" strokeWidth="3" />
              </svg>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

function Container18() {
  return (
    <div className="h-[120px] relative shrink-0 w-full" data-name="Container">
      <div className="flex flex-col items-center justify-center size-full">
        <div className="content-stretch flex flex-col items-center justify-center px-[10px] relative size-full">
          <Container19 />
        </div>
      </div>
    </div>
  );
}

function Container17() {
  return (
    <div className="content-stretch flex flex-col items-start relative shrink-0 w-[532px]" data-name="Container">
      <Container18 />
    </div>
  );
}

function ListItemContainer6() {
  return (
    <div className="bg-[#46545b] content-stretch flex items-center pb-[21px] pl-[27px] pr-[130px] pt-[20px] relative rounded-[14px] shrink-0 w-[512px]" data-name="List Item Container">
      <div className="font-['Roboto_Condensed:Regular',sans-serif] font-normal leading-[0] relative shrink-0 text-[#f1f2fb] text-[18px] w-[458px] whitespace-pre-wrap">
        <p className="leading-[22px] mb-0">Вы дизайнер в стартапе здоровья.</p>
        <p className="leading-[22px] mb-0">&nbsp;</p>
        <p className="leading-[22px] mb-0">Команда создает приложение, которое помогает пользователям:</p>
        <p className="leading-[22px] mb-0">&nbsp;</p>
        <ul className="list-disc">
          <li className="mb-0 ms-[27px]">
            <span className="leading-[22px]">отслеживать шаги</span>
          </li>
          <li className="mb-0 ms-[27px]">
            <span className="leading-[22px]">следить за пульсом</span>
          </li>
          <li className="ms-[27px]">
            <span className="leading-[22px]">контролировать сон</span>
          </li>
        </ul>
      </div>
    </div>
  );
}

function NotificationContainer7() {
  return (
    <div className="content-stretch flex flex-col gap-[20px] items-start relative shrink-0" data-name="Notification Container">
      <p className="font-['Roboto_Condensed:Bold',sans-serif] font-bold leading-[22px] relative shrink-0 text-[#f1f2fb] text-[18px] w-[532px]">Контекст:</p>
      <ListItemContainer6 />
    </div>
  );
}

function ListItemContainer7() {
  return (
    <div className="bg-[#46545b] content-stretch flex items-center pb-[21px] pl-[27px] pr-[130px] pt-[20px] relative rounded-[14px] shrink-0 w-[512px]" data-name="List Item Container">
      <p className="font-['Roboto_Condensed:Regular',sans-serif] font-normal leading-[22px] opacity-80 relative shrink-0 text-[#f1f2fb] text-[18px] w-[458px]">Создать главный экран приложения.</p>
    </div>
  );
}

function TaskContainer() {
  return (
    <div className="content-stretch flex flex-col gap-[20px] items-start relative shrink-0" data-name="Task Container">
      <p className="font-['Roboto_Condensed:Bold',sans-serif] font-bold leading-[22px] relative shrink-0 text-[#f1f2fb] text-[18px] w-[532px]">Ваша задача:</p>
      <ListItemContainer7 />
    </div>
  );
}

function Container20() {
  return (
    <div className="content-stretch flex flex-col gap-[30px] items-start relative shrink-0 w-full" data-name="Container">
      <NotificationContainer7 />
      <TaskContainer />
    </div>
  );
}

function VerticalContainer() {
  return (
    <div className="content-stretch flex flex-col items-center relative shrink-0 w-[512px]" data-name="Vertical Container">
      <Container20 />
    </div>
  );
}

function Container16() {
  return (
    <div className="bg-[#404d52] content-stretch flex flex-col items-center pb-[30px] px-[20px] relative rounded-[24px] shrink-0" data-name="Container">
      <Container17 />
      <VerticalContainer />
    </div>
  );
}

function Group5() {
  return (
    <div className="absolute inset-[7.14%_6.92%_0_21.65%]" data-name="Group">
      <svg className="absolute block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 18.5714 24.1429">
        <g id="Group">
          <path d={svgPaths.p136afc80} fill="var(--fill-0, #0A5078)" id="Vector" />
        </g>
      </svg>
    </div>
  );
}

function Group4() {
  return (
    <div className="absolute contents inset-[7.14%_6.92%_0_21.65%]" data-name="Group">
      <Group5 />
    </div>
  );
}

function Group3() {
  return (
    <div className="absolute contents inset-[7.14%_6.92%_0_21.65%]" data-name="Group">
      <Group4 />
    </div>
  );
}

function Group8() {
  return (
    <div className="absolute inset-[12.5%_10.49%_1.79%_25.22%]" data-name="Group">
      <svg className="absolute block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 16.7143 22.2857">
        <g id="Group">
          <path d={svgPaths.p19eacc00} fill="var(--fill-0, #00325A)" id="Vector" />
        </g>
      </svg>
    </div>
  );
}

function Group7() {
  return (
    <div className="absolute contents inset-[12.5%_10.49%_1.79%_25.22%]" data-name="Group">
      <Group8 />
    </div>
  );
}

function Group6() {
  return (
    <div className="absolute contents inset-[12.5%_10.49%_1.79%_25.22%]" data-name="Group">
      <Group7 />
    </div>
  );
}

function Group11() {
  return (
    <div className="absolute inset-[10.72%_10.49%_3.57%_25.22%]" data-name="Group">
      <svg className="absolute block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 16.7143 22.2857">
        <g id="Group">
          <path d={svgPaths.p19eacc00} fill="var(--fill-0, #F0F0F0)" id="Vector" />
        </g>
      </svg>
    </div>
  );
}

function Group10() {
  return (
    <div className="absolute contents inset-[10.72%_10.49%_3.57%_25.22%]" data-name="Group">
      <Group11 />
    </div>
  );
}

function Group9() {
  return (
    <div className="absolute contents inset-[10.72%_10.49%_3.57%_25.22%]" data-name="Group">
      <Group10 />
    </div>
  );
}

function Group14() {
  return (
    <div className="absolute inset-[32.23%_58.71%_16.81%_25.22%]" data-name="Group">
      <svg className="absolute block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 4.17857 13.2498">
        <g id="Group">
          <path d={svgPaths.pd9dbc80} fill="var(--fill-0, #D2D2D2)" id="Vector" />
        </g>
      </svg>
    </div>
  );
}

function Group13() {
  return (
    <div className="absolute contents inset-[32.23%_58.71%_16.81%_25.22%]" data-name="Group">
      <Group14 />
    </div>
  );
}

function Group12() {
  return (
    <div className="absolute contents inset-[32.23%_58.71%_16.81%_25.22%]" data-name="Group">
      <Group13 />
    </div>
  );
}

function Group17() {
  return (
    <div className="absolute inset-[1.78%_24.78%_80.36%_39.51%]" data-name="Group">
      <svg className="absolute block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 9.28571 4.64286">
        <g id="Group">
          <path d={svgPaths.p15b35600} fill="var(--fill-0, #D2D2D2)" id="Vector" />
        </g>
      </svg>
    </div>
  );
}

function Group16() {
  return (
    <div className="absolute contents inset-[1.78%_24.78%_80.36%_39.51%]" data-name="Group">
      <Group17 />
    </div>
  );
}

function Group15() {
  return (
    <div className="absolute contents inset-[1.78%_24.78%_80.36%_39.51%]" data-name="Group">
      <Group16 />
    </div>
  );
}

function Group20() {
  return (
    <div className="absolute inset-[0_24.78%_82.14%_39.51%]" data-name="Group">
      <svg className="absolute block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 9.28571 4.64286">
        <g id="Group">
          <path d={svgPaths.p15b35600} fill="var(--fill-0, #FAB400)" id="Vector" />
        </g>
      </svg>
    </div>
  );
}

function Group19() {
  return (
    <div className="absolute contents inset-[0_24.78%_82.14%_39.51%]" data-name="Group">
      <Group20 />
    </div>
  );
}

function Group18() {
  return (
    <div className="absolute contents inset-[0_24.78%_82.14%_39.51%]" data-name="Group">
      <Group19 />
    </div>
  );
}

function Group23() {
  return (
    <div className="absolute inset-[10.72%_28.35%_85.71%_68.08%]" data-name="Group">
      <svg className="absolute block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 0.928571 0.928571">
        <g id="Group">
          <path d={svgPaths.p165f00} fill="var(--fill-0, #DC9600)" id="Vector" />
        </g>
      </svg>
    </div>
  );
}

function Group22() {
  return (
    <div className="absolute contents inset-[10.72%_28.35%_85.71%_68.08%]" data-name="Group">
      <Group23 />
    </div>
  );
}

function Group21() {
  return (
    <div className="absolute contents inset-[10.72%_28.35%_85.71%_68.08%]" data-name="Group">
      <Group22 />
    </div>
  );
}

function Group26() {
  return (
    <div className="absolute inset-[10.72%_53.35%_85.71%_43.08%]" data-name="Group">
      <svg className="absolute block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 0.928571 0.928571">
        <g id="Group">
          <path d={svgPaths.p165f00} fill="var(--fill-0, #DC9600)" id="Vector" />
        </g>
      </svg>
    </div>
  );
}

function Group25() {
  return (
    <div className="absolute contents inset-[10.72%_53.35%_85.71%_43.08%]" data-name="Group">
      <Group26 />
    </div>
  );
}

function Group24() {
  return (
    <div className="absolute contents inset-[10.72%_53.35%_85.71%_43.08%]" data-name="Group">
      <Group25 />
    </div>
  );
}

function Group30() {
  return (
    <div className="absolute inset-[21.43%_14.06%_57.14%_64.51%]" data-name="Group">
      <svg className="absolute block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 5.57157 5.57157">
        <g id="Group">
          <path d={svgPaths.p3a8e3f00} fill="var(--fill-0, #D2D2D2)" id="Vector" />
        </g>
      </svg>
    </div>
  );
}

function Group29() {
  return (
    <div className="absolute contents inset-[21.43%_14.06%_57.14%_64.51%]" data-name="Group">
      <Group30 />
    </div>
  );
}

function Group28() {
  return (
    <div className="absolute contents inset-[21.43%_14.06%_57.14%_64.51%]" data-name="Group">
      <Group29 />
    </div>
  );
}

function Group33() {
  return (
    <div className="absolute inset-[26.78%_17.64%_62.5%_68.08%]" data-name="Group">
      <svg className="absolute block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 3.71452 2.78583">
        <g id="Group">
          <path d={svgPaths.p327e500} fill="var(--fill-0, #00A0C8)" id="Vector" />
        </g>
      </svg>
    </div>
  );
}

function Group32() {
  return (
    <div className="absolute contents inset-[26.78%_17.64%_62.5%_68.08%]" data-name="Group">
      <Group33 />
    </div>
  );
}

function Group31() {
  return (
    <div className="absolute contents inset-[26.78%_17.64%_62.5%_68.08%]" data-name="Group">
      <Group32 />
    </div>
  );
}

function Group27() {
  return (
    <div className="absolute contents inset-[21.43%_14.06%_57.14%_64.51%]" data-name="Group">
      <Group28 />
      <Group31 />
    </div>
  );
}

function Group37() {
  return (
    <div className="absolute inset-[46.43%_14.06%_32.14%_64.51%]" data-name="Group">
      <svg className="absolute block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 5.57157 5.57157">
        <g id="Group">
          <path d={svgPaths.p3a8e3f00} fill="var(--fill-0, #D2D2D2)" id="Vector" />
        </g>
      </svg>
    </div>
  );
}

function Group36() {
  return (
    <div className="absolute contents inset-[46.43%_14.06%_32.14%_64.51%]" data-name="Group">
      <Group37 />
    </div>
  );
}

function Group35() {
  return (
    <div className="absolute contents inset-[46.43%_14.06%_32.14%_64.51%]" data-name="Group">
      <Group36 />
    </div>
  );
}

function Group40() {
  return (
    <div className="absolute inset-[51.78%_17.64%_37.5%_68.08%]" data-name="Group">
      <svg className="absolute block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 3.71452 2.78583">
        <g id="Group">
          <path d={svgPaths.p3d1fbfc0} fill="var(--fill-0, #00A0C8)" id="Vector" />
        </g>
      </svg>
    </div>
  );
}

function Group39() {
  return (
    <div className="absolute contents inset-[51.78%_17.64%_37.5%_68.08%]" data-name="Group">
      <Group40 />
    </div>
  );
}

function Group38() {
  return (
    <div className="absolute contents inset-[51.78%_17.64%_37.5%_68.08%]" data-name="Group">
      <Group39 />
    </div>
  );
}

function Group34() {
  return (
    <div className="absolute contents inset-[46.43%_14.06%_32.14%_64.51%]" data-name="Group">
      <Group35 />
      <Group38 />
    </div>
  );
}

function Group44() {
  return (
    <div className="absolute inset-[71.43%_14.06%_7.14%_64.51%]" data-name="Group">
      <svg className="absolute block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 5.57157 5.57157">
        <g id="Group">
          <path d={svgPaths.p3a8e3f00} fill="var(--fill-0, #D2D2D2)" id="Vector" />
        </g>
      </svg>
    </div>
  );
}

function Group43() {
  return (
    <div className="absolute contents inset-[71.43%_14.06%_7.14%_64.51%]" data-name="Group">
      <Group44 />
    </div>
  );
}

function Group42() {
  return (
    <div className="absolute contents inset-[71.43%_14.06%_7.14%_64.51%]" data-name="Group">
      <Group43 />
    </div>
  );
}

function Group41() {
  return (
    <div className="absolute contents inset-[71.43%_14.06%_7.14%_64.51%]" data-name="Group">
      <Group42 />
      <div className="absolute inset-[76.78%_19.42%_12.5%_69.86%]" data-name="Vector">
        <svg className="absolute block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 2.78595 2.78583">
          <path d={svgPaths.p2d7efb00} fill="var(--fill-0, #C80A50)" id="Vector" />
        </svg>
      </div>
    </div>
  );
}

function Group47() {
  return (
    <div className="absolute inset-[30.36%_39.06%_66.07%_32.36%]" data-name="Group">
      <svg className="absolute block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 7.42857 0.928571">
        <g id="Group">
          <path d={svgPaths.p2cafbbc0} fill="var(--fill-0, #D2D2D2)" id="Vector" />
        </g>
      </svg>
    </div>
  );
}

function Group46() {
  return (
    <div className="absolute contents inset-[30.36%_39.06%_66.07%_32.36%]" data-name="Group">
      <Group47 />
    </div>
  );
}

function Group45() {
  return (
    <div className="absolute contents inset-[30.36%_39.06%_66.07%_32.36%]" data-name="Group">
      <Group46 />
    </div>
  );
}

function Group50() {
  return (
    <div className="absolute inset-[55.36%_39.06%_41.07%_32.36%]" data-name="Group">
      <svg className="absolute block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 7.42857 0.928571">
        <g id="Group">
          <path d={svgPaths.p2cafbbc0} fill="var(--fill-0, #D2D2D2)" id="Vector" />
        </g>
      </svg>
    </div>
  );
}

function Group49() {
  return (
    <div className="absolute contents inset-[55.36%_39.06%_41.07%_32.36%]" data-name="Group">
      <Group50 />
    </div>
  );
}

function Group48() {
  return (
    <div className="absolute contents inset-[55.36%_39.06%_41.07%_32.36%]" data-name="Group">
      <Group49 />
    </div>
  );
}

function Group53() {
  return (
    <div className="absolute inset-[80.36%_39.06%_16.07%_32.36%]" data-name="Group">
      <svg className="absolute block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 7.42857 0.928571">
        <g id="Group">
          <path d={svgPaths.p2cafbbc0} fill="var(--fill-0, #D2D2D2)" id="Vector" />
        </g>
      </svg>
    </div>
  );
}

function Group52() {
  return (
    <div className="absolute contents inset-[80.36%_39.06%_16.07%_32.36%]" data-name="Group">
      <Group53 />
    </div>
  );
}

function Group51() {
  return (
    <div className="absolute contents inset-[80.36%_39.06%_16.07%_32.36%]" data-name="Group">
      <Group52 />
    </div>
  );
}

function Group56() {
  return (
    <div className="absolute inset-[57.14%_67.63%_16.81%_10.94%]" data-name="Group">
      <svg className="absolute block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 5.57143 6.77298">
        <g id="Group">
          <path d={svgPaths.p3a585900} fill="var(--fill-0, #C80A50)" id="Vector" />
        </g>
      </svg>
    </div>
  );
}

function Group55() {
  return (
    <div className="absolute contents inset-[57.14%_67.63%_16.81%_10.94%]" data-name="Group">
      <Group56 />
    </div>
  );
}

function Group54() {
  return (
    <div className="absolute contents inset-[57.14%_67.63%_16.81%_10.94%]" data-name="Group">
      <Group55 />
    </div>
  );
}

function Group59() {
  return (
    <div className="absolute inset-[57.14%_67.63%_30.36%_10.94%]" data-name="Group">
      <svg className="absolute block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 5.57143 3.25">
        <g id="Group">
          <path d={svgPaths.p5af2480} fill="var(--fill-0, #A00028)" id="Vector" />
        </g>
      </svg>
    </div>
  );
}

function Group58() {
  return (
    <div className="absolute contents inset-[57.14%_67.63%_30.36%_10.94%]" data-name="Group">
      <Group59 />
    </div>
  );
}

function Group57() {
  return (
    <div className="absolute contents inset-[57.14%_67.63%_30.36%_10.94%]" data-name="Group">
      <Group58 />
    </div>
  );
}

function Group62() {
  return (
    <div className="absolute inset-[32.14%_60.49%_32.14%_3.79%]" data-name="Group">
      <svg className="absolute block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 9.28571 9.28571">
        <g id="Group">
          <path d={svgPaths.p3691eef0} fill="var(--fill-0, #DC9600)" id="Vector" />
        </g>
      </svg>
    </div>
  );
}

function Group61() {
  return (
    <div className="absolute contents inset-[32.14%_60.49%_32.14%_3.79%]" data-name="Group">
      <Group62 />
    </div>
  );
}

function Group60() {
  return (
    <div className="absolute contents inset-[32.14%_60.49%_32.14%_3.79%]" data-name="Group">
      <Group61 />
    </div>
  );
}

function Group65() {
  return (
    <div className="absolute inset-[35.72%_64.06%_35.71%_7.36%]" data-name="Group">
      <svg className="absolute block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 7.42857 7.42857">
        <g id="Group">
          <path d={svgPaths.p372e7580} fill="var(--fill-0, #FAB400)" id="Vector" />
        </g>
      </svg>
    </div>
  );
}

function Group64() {
  return (
    <div className="absolute contents inset-[35.72%_64.06%_35.71%_7.36%]" data-name="Group">
      <Group65 />
    </div>
  );
}

function Group63() {
  return (
    <div className="absolute contents inset-[35.72%_64.06%_35.71%_7.36%]" data-name="Group">
      <Group64 />
    </div>
  );
}

function Group68() {
  return (
    <div className="absolute inset-[42.86%_69.42%_42.86%_12.72%]" data-name="Group">
      <svg className="absolute block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 4.64309 3.7144">
        <g id="Group">
          <path d={svgPaths.pe62b980} fill="var(--fill-0, #BE7800)" id="Vector" />
        </g>
      </svg>
    </div>
  );
}

function Group67() {
  return (
    <div className="absolute contents inset-[42.86%_69.42%_42.86%_12.72%]" data-name="Group">
      <Group68 />
    </div>
  );
}

function Group66() {
  return (
    <div className="absolute contents inset-[42.86%_69.42%_42.86%_12.72%]" data-name="Group">
      <Group67 />
    </div>
  );
}

function Group2() {
  return (
    <div className="absolute contents inset-[0_6.92%_0_3.79%]" data-name="Group">
      <Group3 />
      <Group6 />
      <Group9 />
      <Group12 />
      <Group15 />
      <Group18 />
      <Group21 />
      <Group24 />
      <Group27 />
      <Group34 />
      <Group41 />
      <Group45 />
      <Group48 />
      <Group51 />
      <Group54 />
      <Group57 />
      <Group60 />
      <Group63 />
      <Group66 />
    </div>
  );
}

function Icons() {
  return (
    <div className="absolute contents inset-[0_6.92%_0_3.8%]" data-name="Icons">
      <Group2 />
    </div>
  );
}

function FreeIconRequirements() {
  return (
    <div className="overflow-clip relative shrink-0 size-[26px]" data-name="free-icon-requirements-3967165 1">
      <Icons />
    </div>
  );
}

function ListItemContainer8() {
  return (
    <div className="content-stretch flex gap-[10px] items-center relative shrink-0 w-[484px]" data-name="List Item Container">
      <FreeIconRequirements />
      <p className="font-['Roboto_Condensed:Bold',sans-serif] font-bold leading-[27.5px] relative shrink-0 text-[#f1f2fb] text-[26px] whitespace-nowrap">Требования</p>
    </div>
  );
}

function Container24() {
  return (
    <div className="content-stretch flex items-center justify-between relative shrink-0 w-[512px]" data-name="Container">
      <ListItemContainer8 />
      <div className="flex h-[10px] items-center justify-center relative shrink-0 w-[20px]" style={{ "--transform-inner-width": "1200", "--transform-inner-height": "19" } as React.CSSProperties}>
        <div className="-rotate-90 flex-none">
          <div className="h-[20px] relative w-[10px]">
            <div className="absolute inset-[-7.5%_-15%_-7.5%_-6.72%]">
              <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 12.1716 23">
                <path d={svgPaths.p3805cd00} id="Vector 5" stroke="var(--stroke-0, #798589)" strokeLinecap="round" strokeWidth="3" />
              </svg>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

function Container23() {
  return (
    <div className="h-[120px] relative shrink-0 w-full" data-name="Container">
      <div className="flex flex-col items-center justify-center size-full">
        <div className="content-stretch flex flex-col items-center justify-center px-[10px] relative size-full">
          <Container24 />
        </div>
      </div>
    </div>
  );
}

function Container22() {
  return (
    <div className="content-stretch flex flex-col items-start relative shrink-0 w-[532px]" data-name="Container">
      <Container23 />
    </div>
  );
}

function ListItemContainer9() {
  return (
    <div className="bg-[#46545b] content-stretch flex items-center pb-[21px] pl-[27px] pr-[30px] pt-[20px] relative rounded-[14px] shrink-0 w-[512px]" data-name="List Item Container">
      <ul className="block font-['Roboto_Condensed:Regular',sans-serif] font-normal leading-[0] list-disc relative shrink-0 text-[#f1f2fb] text-[18px] whitespace-nowrap whitespace-pre-wrap">
        <li className="mb-0 ms-[27px]">
          <span className="leading-[22px]">количество шагов</span>
        </li>
        <li className="mb-0 ms-[27px]">
          <span className="leading-[22px]">пульс</span>
        </li>
        <li className="mb-0 ms-[27px]">
          <span className="leading-[22px]">{`кнопку "Начать тренировку"`}</span>
        </li>
        <li className="ms-[27px]">
          <span className="leading-[22px]">карточки активности</span>
        </li>
      </ul>
    </div>
  );
}

function Container25() {
  return (
    <div className="content-stretch flex flex-col gap-[20px] items-start relative shrink-0 w-full" data-name="Container">
      <p className="font-['Roboto_Condensed:Bold',sans-serif] font-bold leading-[22px] relative shrink-0 text-[#f1f2fb] text-[18px] w-[532px]">Экран должен содержать:</p>
      <ListItemContainer9 />
    </div>
  );
}

function VerticalContainer3() {
  return (
    <div className="content-stretch flex flex-col items-center relative shrink-0 w-[512px]" data-name="Vertical Container">
      <Container25 />
    </div>
  );
}

function VerticalContainer2() {
  return (
    <div className="content-stretch flex flex-col items-start relative shrink-0" data-name="Vertical Container">
      <VerticalContainer3 />
    </div>
  );
}

function ListItemContainer11() {
  return (
    <div className="content-stretch flex font-['Roboto_Condensed:Regular',sans-serif] font-normal gap-[105px] items-start leading-[22px] relative shrink-0 text-[#f1f2fb] text-[18px] w-full" data-name="List Item Container">
      <p className="opacity-80 relative shrink-0 whitespace-nowrap">Размер экрана:</p>
      <p className="opacity-80 relative shrink-0 text-right w-[233px]">375 x 812</p>
    </div>
  );
}

function DescriptionContainer() {
  return (
    <div className="content-stretch flex flex-col gap-[21px] items-start justify-center relative shrink-0 w-[471px]" data-name="Description Container">
      <ListItemContainer11 />
      <div className="h-0 relative shrink-0 w-full">
        <div className="absolute inset-[-0.5px_-0.11%]">
          <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 472 1">
            <path d="M0.5 0.5H471.5" id="Vector 11" stroke="var(--stroke-0, #5B6E77)" strokeLinecap="round" />
          </svg>
        </div>
      </div>
      <p className="font-['Roboto_Condensed:Regular',sans-serif] font-normal leading-[22px] opacity-80 relative shrink-0 text-[#f1f2fb] text-[18px] whitespace-nowrap">Используйте контрастную кнопку CTA.</p>
    </div>
  );
}

function ListItemContainer10() {
  return (
    <div className="bg-[#46545b] content-stretch flex items-start justify-between pb-[21px] pl-[27px] pr-[30px] pt-[20px] relative rounded-[14px] shrink-0 w-[512px]" data-name="List Item Container">
      <DescriptionContainer />
    </div>
  );
}

function VerticalContainer6() {
  return (
    <div className="content-stretch flex flex-col items-start relative shrink-0" data-name="Vertical Container">
      <ListItemContainer10 />
    </div>
  );
}

function Container26() {
  return (
    <div className="content-stretch flex flex-col gap-[20px] items-start relative shrink-0 w-full" data-name="Container">
      <p className="font-['Roboto_Condensed:Bold',sans-serif] font-bold leading-[22px] relative shrink-0 text-[#f1f2fb] text-[18px] whitespace-nowrap">{`Дополнительно: `}</p>
      <VerticalContainer6 />
    </div>
  );
}

function VerticalContainer5() {
  return (
    <div className="content-stretch flex flex-col items-center relative shrink-0 w-[512px]" data-name="Vertical Container">
      <Container26 />
    </div>
  );
}

function VerticalContainer4() {
  return (
    <div className="content-stretch flex flex-col items-start relative shrink-0" data-name="Vertical Container">
      <VerticalContainer5 />
    </div>
  );
}

function VerticalContainer1() {
  return (
    <div className="content-stretch flex flex-col gap-[51px] items-start relative shrink-0" data-name="Vertical Container">
      <VerticalContainer2 />
      <VerticalContainer4 />
    </div>
  );
}

function Container21() {
  return (
    <div className="bg-[#404d52] content-stretch flex flex-col items-center pb-[30px] px-[20px] relative rounded-[24px] shrink-0" data-name="Container">
      <Container22 />
      <VerticalContainer1 />
    </div>
  );
}

function Group72() {
  return (
    <div className="absolute inset-[7.14%_6.92%_0_21.65%]" data-name="Group">
      <svg className="absolute block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 18.5714 24.1429">
        <g id="Group">
          <path d={svgPaths.p136afc80} fill="var(--fill-0, #0A5078)" id="Vector" />
        </g>
      </svg>
    </div>
  );
}

function Group71() {
  return (
    <div className="absolute contents inset-[7.14%_6.92%_0_21.65%]" data-name="Group">
      <Group72 />
    </div>
  );
}

function Group70() {
  return (
    <div className="absolute contents inset-[7.14%_6.92%_0_21.65%]" data-name="Group">
      <Group71 />
    </div>
  );
}

function Group75() {
  return (
    <div className="absolute inset-[12.5%_10.49%_1.79%_25.22%]" data-name="Group">
      <svg className="absolute block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 16.7143 22.2857">
        <g id="Group">
          <path d={svgPaths.p19eacc00} fill="var(--fill-0, #00325A)" id="Vector" />
        </g>
      </svg>
    </div>
  );
}

function Group74() {
  return (
    <div className="absolute contents inset-[12.5%_10.49%_1.79%_25.22%]" data-name="Group">
      <Group75 />
    </div>
  );
}

function Group73() {
  return (
    <div className="absolute contents inset-[12.5%_10.49%_1.79%_25.22%]" data-name="Group">
      <Group74 />
    </div>
  );
}

function Group78() {
  return (
    <div className="absolute inset-[10.72%_10.49%_3.57%_25.22%]" data-name="Group">
      <svg className="absolute block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 16.7143 22.2857">
        <g id="Group">
          <path d={svgPaths.p19eacc00} fill="var(--fill-0, #F0F0F0)" id="Vector" />
        </g>
      </svg>
    </div>
  );
}

function Group77() {
  return (
    <div className="absolute contents inset-[10.72%_10.49%_3.57%_25.22%]" data-name="Group">
      <Group78 />
    </div>
  );
}

function Group76() {
  return (
    <div className="absolute contents inset-[10.72%_10.49%_3.57%_25.22%]" data-name="Group">
      <Group77 />
    </div>
  );
}

function Group81() {
  return (
    <div className="absolute inset-[32.23%_58.71%_16.81%_25.22%]" data-name="Group">
      <svg className="absolute block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 4.17857 13.2498">
        <g id="Group">
          <path d={svgPaths.pd9dbc80} fill="var(--fill-0, #D2D2D2)" id="Vector" />
        </g>
      </svg>
    </div>
  );
}

function Group80() {
  return (
    <div className="absolute contents inset-[32.23%_58.71%_16.81%_25.22%]" data-name="Group">
      <Group81 />
    </div>
  );
}

function Group79() {
  return (
    <div className="absolute contents inset-[32.23%_58.71%_16.81%_25.22%]" data-name="Group">
      <Group80 />
    </div>
  );
}

function Group84() {
  return (
    <div className="absolute inset-[1.78%_24.78%_80.36%_39.51%]" data-name="Group">
      <svg className="absolute block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 9.28571 4.64286">
        <g id="Group">
          <path d={svgPaths.p15b35600} fill="var(--fill-0, #D2D2D2)" id="Vector" />
        </g>
      </svg>
    </div>
  );
}

function Group83() {
  return (
    <div className="absolute contents inset-[1.78%_24.78%_80.36%_39.51%]" data-name="Group">
      <Group84 />
    </div>
  );
}

function Group82() {
  return (
    <div className="absolute contents inset-[1.78%_24.78%_80.36%_39.51%]" data-name="Group">
      <Group83 />
    </div>
  );
}

function Group87() {
  return (
    <div className="absolute inset-[0_24.78%_82.14%_39.51%]" data-name="Group">
      <svg className="absolute block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 9.28571 4.64286">
        <g id="Group">
          <path d={svgPaths.p15b35600} fill="var(--fill-0, #FAB400)" id="Vector" />
        </g>
      </svg>
    </div>
  );
}

function Group86() {
  return (
    <div className="absolute contents inset-[0_24.78%_82.14%_39.51%]" data-name="Group">
      <Group87 />
    </div>
  );
}

function Group85() {
  return (
    <div className="absolute contents inset-[0_24.78%_82.14%_39.51%]" data-name="Group">
      <Group86 />
    </div>
  );
}

function Group90() {
  return (
    <div className="absolute inset-[10.72%_28.35%_85.71%_68.08%]" data-name="Group">
      <svg className="absolute block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 0.928571 0.928571">
        <g id="Group">
          <path d={svgPaths.p165f00} fill="var(--fill-0, #DC9600)" id="Vector" />
        </g>
      </svg>
    </div>
  );
}

function Group89() {
  return (
    <div className="absolute contents inset-[10.72%_28.35%_85.71%_68.08%]" data-name="Group">
      <Group90 />
    </div>
  );
}

function Group88() {
  return (
    <div className="absolute contents inset-[10.72%_28.35%_85.71%_68.08%]" data-name="Group">
      <Group89 />
    </div>
  );
}

function Group93() {
  return (
    <div className="absolute inset-[10.72%_53.35%_85.71%_43.08%]" data-name="Group">
      <svg className="absolute block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 0.928571 0.928571">
        <g id="Group">
          <path d={svgPaths.p165f00} fill="var(--fill-0, #DC9600)" id="Vector" />
        </g>
      </svg>
    </div>
  );
}

function Group92() {
  return (
    <div className="absolute contents inset-[10.72%_53.35%_85.71%_43.08%]" data-name="Group">
      <Group93 />
    </div>
  );
}

function Group91() {
  return (
    <div className="absolute contents inset-[10.72%_53.35%_85.71%_43.08%]" data-name="Group">
      <Group92 />
    </div>
  );
}

function Group97() {
  return (
    <div className="absolute inset-[21.43%_14.06%_57.14%_64.51%]" data-name="Group">
      <svg className="absolute block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 5.57157 5.57157">
        <g id="Group">
          <path d={svgPaths.p3a8e3f00} fill="var(--fill-0, #D2D2D2)" id="Vector" />
        </g>
      </svg>
    </div>
  );
}

function Group96() {
  return (
    <div className="absolute contents inset-[21.43%_14.06%_57.14%_64.51%]" data-name="Group">
      <Group97 />
    </div>
  );
}

function Group95() {
  return (
    <div className="absolute contents inset-[21.43%_14.06%_57.14%_64.51%]" data-name="Group">
      <Group96 />
    </div>
  );
}

function Group100() {
  return (
    <div className="absolute inset-[26.78%_17.64%_62.5%_68.08%]" data-name="Group">
      <svg className="absolute block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 3.71452 2.78583">
        <g id="Group">
          <path d={svgPaths.p327e500} fill="var(--fill-0, #00A0C8)" id="Vector" />
        </g>
      </svg>
    </div>
  );
}

function Group99() {
  return (
    <div className="absolute contents inset-[26.78%_17.64%_62.5%_68.08%]" data-name="Group">
      <Group100 />
    </div>
  );
}

function Group98() {
  return (
    <div className="absolute contents inset-[26.78%_17.64%_62.5%_68.08%]" data-name="Group">
      <Group99 />
    </div>
  );
}

function Group94() {
  return (
    <div className="absolute contents inset-[21.43%_14.06%_57.14%_64.51%]" data-name="Group">
      <Group95 />
      <Group98 />
    </div>
  );
}

function Group104() {
  return (
    <div className="absolute inset-[46.43%_14.06%_32.14%_64.51%]" data-name="Group">
      <svg className="absolute block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 5.57157 5.57157">
        <g id="Group">
          <path d={svgPaths.p3a8e3f00} fill="var(--fill-0, #D2D2D2)" id="Vector" />
        </g>
      </svg>
    </div>
  );
}

function Group103() {
  return (
    <div className="absolute contents inset-[46.43%_14.06%_32.14%_64.51%]" data-name="Group">
      <Group104 />
    </div>
  );
}

function Group102() {
  return (
    <div className="absolute contents inset-[46.43%_14.06%_32.14%_64.51%]" data-name="Group">
      <Group103 />
    </div>
  );
}

function Group107() {
  return (
    <div className="absolute inset-[51.78%_17.64%_37.5%_68.08%]" data-name="Group">
      <svg className="absolute block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 3.71452 2.78583">
        <g id="Group">
          <path d={svgPaths.p3d1fbfc0} fill="var(--fill-0, #00A0C8)" id="Vector" />
        </g>
      </svg>
    </div>
  );
}

function Group106() {
  return (
    <div className="absolute contents inset-[51.78%_17.64%_37.5%_68.08%]" data-name="Group">
      <Group107 />
    </div>
  );
}

function Group105() {
  return (
    <div className="absolute contents inset-[51.78%_17.64%_37.5%_68.08%]" data-name="Group">
      <Group106 />
    </div>
  );
}

function Group101() {
  return (
    <div className="absolute contents inset-[46.43%_14.06%_32.14%_64.51%]" data-name="Group">
      <Group102 />
      <Group105 />
    </div>
  );
}

function Group111() {
  return (
    <div className="absolute inset-[71.43%_14.06%_7.14%_64.51%]" data-name="Group">
      <svg className="absolute block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 5.57157 5.57157">
        <g id="Group">
          <path d={svgPaths.p3a8e3f00} fill="var(--fill-0, #D2D2D2)" id="Vector" />
        </g>
      </svg>
    </div>
  );
}

function Group110() {
  return (
    <div className="absolute contents inset-[71.43%_14.06%_7.14%_64.51%]" data-name="Group">
      <Group111 />
    </div>
  );
}

function Group109() {
  return (
    <div className="absolute contents inset-[71.43%_14.06%_7.14%_64.51%]" data-name="Group">
      <Group110 />
    </div>
  );
}

function Group108() {
  return (
    <div className="absolute contents inset-[71.43%_14.06%_7.14%_64.51%]" data-name="Group">
      <Group109 />
      <div className="absolute inset-[76.78%_19.42%_12.5%_69.86%]" data-name="Vector">
        <svg className="absolute block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 2.78595 2.78583">
          <path d={svgPaths.p2d7efb00} fill="var(--fill-0, #C80A50)" id="Vector" />
        </svg>
      </div>
    </div>
  );
}

function Group114() {
  return (
    <div className="absolute inset-[30.36%_39.06%_66.07%_32.36%]" data-name="Group">
      <svg className="absolute block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 7.42857 0.928571">
        <g id="Group">
          <path d={svgPaths.p2cafbbc0} fill="var(--fill-0, #D2D2D2)" id="Vector" />
        </g>
      </svg>
    </div>
  );
}

function Group113() {
  return (
    <div className="absolute contents inset-[30.36%_39.06%_66.07%_32.36%]" data-name="Group">
      <Group114 />
    </div>
  );
}

function Group112() {
  return (
    <div className="absolute contents inset-[30.36%_39.06%_66.07%_32.36%]" data-name="Group">
      <Group113 />
    </div>
  );
}

function Group117() {
  return (
    <div className="absolute inset-[55.36%_39.06%_41.07%_32.36%]" data-name="Group">
      <svg className="absolute block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 7.42857 0.928571">
        <g id="Group">
          <path d={svgPaths.p2cafbbc0} fill="var(--fill-0, #D2D2D2)" id="Vector" />
        </g>
      </svg>
    </div>
  );
}

function Group116() {
  return (
    <div className="absolute contents inset-[55.36%_39.06%_41.07%_32.36%]" data-name="Group">
      <Group117 />
    </div>
  );
}

function Group115() {
  return (
    <div className="absolute contents inset-[55.36%_39.06%_41.07%_32.36%]" data-name="Group">
      <Group116 />
    </div>
  );
}

function Group120() {
  return (
    <div className="absolute inset-[80.36%_39.06%_16.07%_32.36%]" data-name="Group">
      <svg className="absolute block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 7.42857 0.928571">
        <g id="Group">
          <path d={svgPaths.p2cafbbc0} fill="var(--fill-0, #D2D2D2)" id="Vector" />
        </g>
      </svg>
    </div>
  );
}

function Group119() {
  return (
    <div className="absolute contents inset-[80.36%_39.06%_16.07%_32.36%]" data-name="Group">
      <Group120 />
    </div>
  );
}

function Group118() {
  return (
    <div className="absolute contents inset-[80.36%_39.06%_16.07%_32.36%]" data-name="Group">
      <Group119 />
    </div>
  );
}

function Group123() {
  return (
    <div className="absolute inset-[57.14%_67.63%_16.81%_10.94%]" data-name="Group">
      <svg className="absolute block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 5.57143 6.77298">
        <g id="Group">
          <path d={svgPaths.p3a585900} fill="var(--fill-0, #C80A50)" id="Vector" />
        </g>
      </svg>
    </div>
  );
}

function Group122() {
  return (
    <div className="absolute contents inset-[57.14%_67.63%_16.81%_10.94%]" data-name="Group">
      <Group123 />
    </div>
  );
}

function Group121() {
  return (
    <div className="absolute contents inset-[57.14%_67.63%_16.81%_10.94%]" data-name="Group">
      <Group122 />
    </div>
  );
}

function Group126() {
  return (
    <div className="absolute inset-[57.14%_67.63%_30.36%_10.94%]" data-name="Group">
      <svg className="absolute block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 5.57143 3.25">
        <g id="Group">
          <path d={svgPaths.p5af2480} fill="var(--fill-0, #A00028)" id="Vector" />
        </g>
      </svg>
    </div>
  );
}

function Group125() {
  return (
    <div className="absolute contents inset-[57.14%_67.63%_30.36%_10.94%]" data-name="Group">
      <Group126 />
    </div>
  );
}

function Group124() {
  return (
    <div className="absolute contents inset-[57.14%_67.63%_30.36%_10.94%]" data-name="Group">
      <Group125 />
    </div>
  );
}

function Group129() {
  return (
    <div className="absolute inset-[32.14%_60.49%_32.14%_3.79%]" data-name="Group">
      <svg className="absolute block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 9.28571 9.28571">
        <g id="Group">
          <path d={svgPaths.p3691eef0} fill="var(--fill-0, #DC9600)" id="Vector" />
        </g>
      </svg>
    </div>
  );
}

function Group128() {
  return (
    <div className="absolute contents inset-[32.14%_60.49%_32.14%_3.79%]" data-name="Group">
      <Group129 />
    </div>
  );
}

function Group127() {
  return (
    <div className="absolute contents inset-[32.14%_60.49%_32.14%_3.79%]" data-name="Group">
      <Group128 />
    </div>
  );
}

function Group132() {
  return (
    <div className="absolute inset-[35.72%_64.06%_35.71%_7.36%]" data-name="Group">
      <svg className="absolute block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 7.42857 7.42857">
        <g id="Group">
          <path d={svgPaths.p372e7580} fill="var(--fill-0, #FAB400)" id="Vector" />
        </g>
      </svg>
    </div>
  );
}

function Group131() {
  return (
    <div className="absolute contents inset-[35.72%_64.06%_35.71%_7.36%]" data-name="Group">
      <Group132 />
    </div>
  );
}

function Group130() {
  return (
    <div className="absolute contents inset-[35.72%_64.06%_35.71%_7.36%]" data-name="Group">
      <Group131 />
    </div>
  );
}

function Group135() {
  return (
    <div className="absolute inset-[42.86%_69.42%_42.86%_12.72%]" data-name="Group">
      <svg className="absolute block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 4.64309 3.7144">
        <g id="Group">
          <path d={svgPaths.pe62b980} fill="var(--fill-0, #BE7800)" id="Vector" />
        </g>
      </svg>
    </div>
  );
}

function Group134() {
  return (
    <div className="absolute contents inset-[42.86%_69.42%_42.86%_12.72%]" data-name="Group">
      <Group135 />
    </div>
  );
}

function Group133() {
  return (
    <div className="absolute contents inset-[42.86%_69.42%_42.86%_12.72%]" data-name="Group">
      <Group134 />
    </div>
  );
}

function Group69() {
  return (
    <div className="absolute contents inset-[0_6.92%_0_3.79%]" data-name="Group">
      <Group70 />
      <Group73 />
      <Group76 />
      <Group79 />
      <Group82 />
      <Group85 />
      <Group88 />
      <Group91 />
      <Group94 />
      <Group101 />
      <Group108 />
      <Group112 />
      <Group115 />
      <Group118 />
      <Group121 />
      <Group124 />
      <Group127 />
      <Group130 />
      <Group133 />
    </div>
  );
}

function Icons1() {
  return (
    <div className="absolute contents inset-[0_6.92%_0_3.8%]" data-name="Icons">
      <Group69 />
    </div>
  );
}

function FreeIconRequirements1() {
  return (
    <div className="overflow-clip relative shrink-0 size-[26px]" data-name="free-icon-requirements-3967165 1">
      <Icons1 />
    </div>
  );
}

function ListItemContainer12() {
  return (
    <div className="content-stretch flex gap-[10px] items-center relative shrink-0 w-[484px]" data-name="List Item Container">
      <FreeIconRequirements1 />
      <p className="font-['Roboto_Condensed:Bold',sans-serif] font-bold leading-[27.5px] relative shrink-0 text-[#f1f2fb] text-[26px] whitespace-nowrap">Пример</p>
    </div>
  );
}

function Container30() {
  return (
    <div className="content-stretch flex items-center justify-between relative shrink-0 w-[512px]" data-name="Container">
      <ListItemContainer12 />
      <div className="flex h-[10px] items-center justify-center relative shrink-0 w-[20px]" style={{ "--transform-inner-width": "1200", "--transform-inner-height": "19" } as React.CSSProperties}>
        <div className="-rotate-90 flex-none">
          <div className="h-[20px] relative w-[10px]">
            <div className="absolute inset-[-7.5%_-15%_-7.5%_-6.72%]">
              <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 12.1716 23">
                <path d={svgPaths.p3805cd00} id="Vector 5" stroke="var(--stroke-0, #798589)" strokeLinecap="round" strokeWidth="3" />
              </svg>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

function Container29() {
  return (
    <div className="h-[120px] relative shrink-0 w-full" data-name="Container">
      <div className="flex flex-col items-center justify-center size-full">
        <div className="content-stretch flex flex-col items-center justify-center px-[10px] relative size-full">
          <Container30 />
        </div>
      </div>
    </div>
  );
}

function Group137() {
  return (
    <div className="absolute inset-[3.84%_0]" data-name="Group">
      <svg className="absolute block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 25.5 23.5393">
        <g id="Group">
          <path d={svgPaths.p2067e480} fill="var(--fill-0, #798589)" id="Vector" />
          <path d={svgPaths.p1805a380} fill="var(--fill-0, #798589)" id="Vector_2" />
        </g>
      </svg>
    </div>
  );
}

function Group136() {
  return (
    <div className="absolute contents inset-[3.84%_0]" data-name="Group">
      <Group137 />
    </div>
  );
}

function FreeIconDownloadToStorageDrive() {
  return (
    <div className="overflow-clip relative shrink-0 size-[25.5px]" data-name="free-icon-download-to-storage-drive-25407 1">
      <Group136 />
    </div>
  );
}

function FreeIconZoom() {
  return (
    <div className="h-[30px] relative shrink-0 w-[30.75px]" data-name="free-icon-zoom-5460595 1">
      <svg className="absolute block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 30.75 30">
        <g id="free-icon-zoom-5460595 1">
          <path clipRule="evenodd" d={svgPaths.p17513080} fill="var(--fill-0, #798589)" fillRule="evenodd" id="Vector" />
          <path clipRule="evenodd" d={svgPaths.pfdd5c00} fill="var(--fill-0, #798589)" fillRule="evenodd" id="Vector_2" />
          <path clipRule="evenodd" d={svgPaths.p112ac300} fill="var(--fill-0, #798589)" fillRule="evenodd" id="Vector_3" />
          <path clipRule="evenodd" d={svgPaths.p381c0b00} fill="var(--fill-0, #798589)" fillRule="evenodd" id="Vector_4" />
          <path clipRule="evenodd" d={svgPaths.p28a30930} fill="var(--fill-0, #798589)" fillRule="evenodd" id="Vector_5" />
        </g>
      </svg>
    </div>
  );
}

function Container32() {
  return (
    <div className="content-stretch flex items-center justify-between px-[20px] relative shrink-0 w-[532px]" data-name="Container">
      <FreeIconDownloadToStorageDrive />
      <FreeIconZoom />
    </div>
  );
}

function BottomEllipseContainer() {
  return (
    <div className="absolute left-[95.07px] size-[36.217px] top-[439.43px]" data-name="Bottom Ellipse Container">
      <div className="absolute inset-[0_-75.3%_-169.43%_-75.3%]">
        <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 90.7611 97.5791">
          <g id="Group 526">
            <g filter="url(#filter0_ddddddii_177_3027)" id="Ellipse 174" opacity="0.5">
              <circle cx="45.3805" cy="18.1085" fill="var(--fill-0, #4F86EC)" r="18.1085" />
            </g>
            <g filter="url(#filter1_ddddddii_177_3027)" id="Ellipse 175" opacity="0.5">
              <circle cx="45.3805" cy="18.1085" fill="var(--fill-0, #4F86EC)" r="18.1085" />
            </g>
          </g>
          <defs>
            <filter colorInterpolationFilters="sRGB" filterUnits="userSpaceOnUse" height="97.5791" id="filter0_ddddddii_177_3027" width="90.7611" x="0" y="0">
              <feFlood floodOpacity="0" result="BackgroundImageFix" />
              <feColorMatrix in="SourceAlpha" result="hardAlpha" type="matrix" values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 127 0" />
              <feOffset dy="0.943358" />
              <feGaussianBlur stdDeviation="0.377343" />
              <feColorMatrix type="matrix" values="0 0 0 0 0.341176 0 0 0 0 0.411765 0 0 0 0 0.713726 0 0 0 0.03 0" />
              <feBlend in2="BackgroundImageFix" mode="normal" result="effect1_dropShadow_177_3027" />
              <feColorMatrix in="SourceAlpha" result="hardAlpha" type="matrix" values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 127 0" />
              <feOffset dy="2.26702" />
              <feGaussianBlur stdDeviation="0.906809" />
              <feColorMatrix type="matrix" values="0 0 0 0 0.341176 0 0 0 0 0.411765 0 0 0 0 0.713726 0 0 0 0.04 0" />
              <feBlend in2="effect1_dropShadow_177_3027" mode="normal" result="effect2_dropShadow_177_3027" />
              <feColorMatrix in="SourceAlpha" result="hardAlpha" type="matrix" values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 127 0" />
              <feOffset dy="4.2686" />
              <feGaussianBlur stdDeviation="1.70744" />
              <feColorMatrix type="matrix" values="0 0 0 0 0.341176 0 0 0 0 0.411765 0 0 0 0 0.713726 0 0 0 0.05 0" />
              <feBlend in2="effect2_dropShadow_177_3027" mode="normal" result="effect3_dropShadow_177_3027" />
              <feColorMatrix in="SourceAlpha" result="hardAlpha" type="matrix" values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 127 0" />
              <feOffset dy="7.61445" />
              <feGaussianBlur stdDeviation="3.04578" />
              <feColorMatrix type="matrix" values="0 0 0 0 0.341176 0 0 0 0 0.411765 0 0 0 0 0.713726 0 0 0 0.07 0" />
              <feBlend in2="effect3_dropShadow_177_3027" mode="normal" result="effect4_dropShadow_177_3027" />
              <feColorMatrix in="SourceAlpha" result="hardAlpha" type="matrix" values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 127 0" />
              <feOffset dy="14.242" />
              <feGaussianBlur stdDeviation="5.6968" />
              <feColorMatrix type="matrix" values="0 0 0 0 0.341176 0 0 0 0 0.411765 0 0 0 0 0.713726 0 0 0 0.06 0" />
              <feBlend in2="effect4_dropShadow_177_3027" mode="normal" result="effect5_dropShadow_177_3027" />
              <feColorMatrix in="SourceAlpha" result="hardAlpha" type="matrix" values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 127 0" />
              <feOffset dy="34.09" />
              <feGaussianBlur stdDeviation="13.636" />
              <feColorMatrix type="matrix" values="0 0 0 0 0.341176 0 0 0 0 0.411765 0 0 0 0 0.713726 0 0 0 0.12 0" />
              <feBlend in2="effect5_dropShadow_177_3027" mode="normal" result="effect6_dropShadow_177_3027" />
              <feBlend in="SourceGraphic" in2="effect6_dropShadow_177_3027" mode="normal" result="shape" />
              <feColorMatrix in="SourceAlpha" result="hardAlpha" type="matrix" values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 127 0" />
              <feOffset />
              <feGaussianBlur stdDeviation="4.83273" />
              <feComposite in2="hardAlpha" k2="-1" k3="1" operator="arithmetic" />
              <feColorMatrix type="matrix" values="0 0 0 0 0.565 0 0 0 0 0.687826 0 0 0 0 0.941667 0 0 0 1 0" />
              <feBlend in2="shape" mode="normal" result="effect7_innerShadow_177_3027" />
              <feColorMatrix in="SourceAlpha" result="hardAlpha" type="matrix" values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 127 0" />
              <feOffset dy="1.93309" />
              <feGaussianBlur stdDeviation="1.69145" />
              <feComposite in2="hardAlpha" k2="-1" k3="1" operator="arithmetic" />
              <feColorMatrix type="matrix" values="0 0 0 0 0.92549 0 0 0 0 0.968627 0 0 0 0 1 0 0 0 0.2 0" />
              <feBlend in2="effect7_innerShadow_177_3027" mode="normal" result="effect8_innerShadow_177_3027" />
            </filter>
            <filter colorInterpolationFilters="sRGB" filterUnits="userSpaceOnUse" height="97.5791" id="filter1_ddddddii_177_3027" width="90.7611" x="0" y="0">
              <feFlood floodOpacity="0" result="BackgroundImageFix" />
              <feColorMatrix in="SourceAlpha" result="hardAlpha" type="matrix" values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 127 0" />
              <feOffset dy="0.943358" />
              <feGaussianBlur stdDeviation="0.377343" />
              <feColorMatrix type="matrix" values="0 0 0 0 0.341176 0 0 0 0 0.411765 0 0 0 0 0.713726 0 0 0 0.03 0" />
              <feBlend in2="BackgroundImageFix" mode="normal" result="effect1_dropShadow_177_3027" />
              <feColorMatrix in="SourceAlpha" result="hardAlpha" type="matrix" values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 127 0" />
              <feOffset dy="2.26702" />
              <feGaussianBlur stdDeviation="0.906809" />
              <feColorMatrix type="matrix" values="0 0 0 0 0.341176 0 0 0 0 0.411765 0 0 0 0 0.713726 0 0 0 0.04 0" />
              <feBlend in2="effect1_dropShadow_177_3027" mode="normal" result="effect2_dropShadow_177_3027" />
              <feColorMatrix in="SourceAlpha" result="hardAlpha" type="matrix" values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 127 0" />
              <feOffset dy="4.2686" />
              <feGaussianBlur stdDeviation="1.70744" />
              <feColorMatrix type="matrix" values="0 0 0 0 0.341176 0 0 0 0 0.411765 0 0 0 0 0.713726 0 0 0 0.05 0" />
              <feBlend in2="effect2_dropShadow_177_3027" mode="normal" result="effect3_dropShadow_177_3027" />
              <feColorMatrix in="SourceAlpha" result="hardAlpha" type="matrix" values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 127 0" />
              <feOffset dy="7.61445" />
              <feGaussianBlur stdDeviation="3.04578" />
              <feColorMatrix type="matrix" values="0 0 0 0 0.341176 0 0 0 0 0.411765 0 0 0 0 0.713726 0 0 0 0.07 0" />
              <feBlend in2="effect3_dropShadow_177_3027" mode="normal" result="effect4_dropShadow_177_3027" />
              <feColorMatrix in="SourceAlpha" result="hardAlpha" type="matrix" values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 127 0" />
              <feOffset dy="14.242" />
              <feGaussianBlur stdDeviation="5.6968" />
              <feColorMatrix type="matrix" values="0 0 0 0 0.341176 0 0 0 0 0.411765 0 0 0 0 0.713726 0 0 0 0.06 0" />
              <feBlend in2="effect4_dropShadow_177_3027" mode="normal" result="effect5_dropShadow_177_3027" />
              <feColorMatrix in="SourceAlpha" result="hardAlpha" type="matrix" values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 127 0" />
              <feOffset dy="34.09" />
              <feGaussianBlur stdDeviation="13.636" />
              <feColorMatrix type="matrix" values="0 0 0 0 0.341176 0 0 0 0 0.411765 0 0 0 0 0.713726 0 0 0 0.12 0" />
              <feBlend in2="effect5_dropShadow_177_3027" mode="normal" result="effect6_dropShadow_177_3027" />
              <feBlend in="SourceGraphic" in2="effect6_dropShadow_177_3027" mode="normal" result="shape" />
              <feColorMatrix in="SourceAlpha" result="hardAlpha" type="matrix" values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 127 0" />
              <feOffset />
              <feGaussianBlur stdDeviation="4.83273" />
              <feComposite in2="hardAlpha" k2="-1" k3="1" operator="arithmetic" />
              <feColorMatrix type="matrix" values="0 0 0 0 0.565 0 0 0 0 0.687826 0 0 0 0 0.941667 0 0 0 1 0" />
              <feBlend in2="shape" mode="normal" result="effect7_innerShadow_177_3027" />
              <feColorMatrix in="SourceAlpha" result="hardAlpha" type="matrix" values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 127 0" />
              <feOffset dy="1.93309" />
              <feGaussianBlur stdDeviation="1.69145" />
              <feComposite in2="hardAlpha" k2="-1" k3="1" operator="arithmetic" />
              <feColorMatrix type="matrix" values="0 0 0 0 0.92549 0 0 0 0 0.968627 0 0 0 0 1 0 0 0 0.2 0" />
              <feBlend in2="effect7_innerShadow_177_3027" mode="normal" result="effect8_innerShadow_177_3027" />
            </filter>
          </defs>
        </svg>
      </div>
    </div>
  );
}

function Frame3() {
  return (
    <div className="absolute left-[24.14px] size-[14.487px] top-[84.51px]" data-name="Frame">
      <svg className="absolute block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 14.4868 14.4868">
        <g clipPath="url(#clip0_177_3023)" id="Frame">
          <g id="Vector" />
          <path d={svgPaths.p218d2900} fill="var(--fill-0, #878FA6)" fillOpacity="0.6" id="Vector_2" />
        </g>
        <defs>
          <clipPath id="clip0_177_3023">
            <rect fill="white" height="14.4868" width="14.4868" />
          </clipPath>
        </defs>
      </svg>
    </div>
  );
}

function Frame4() {
  return (
    <div className="absolute left-[187.73px] size-[14.487px] top-[84.51px]" data-name="Frame">
      <svg className="absolute block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 14.4868 14.4868">
        <g clipPath="url(#clip0_177_3149)" id="Frame">
          <g id="Vector" />
          <path d={svgPaths.pcad1600} fill="var(--fill-0, #4F86EC)" id="Vector_2" />
        </g>
        <defs>
          <clipPath id="clip0_177_3149">
            <rect fill="white" height="14.4868" width="14.4868" />
          </clipPath>
        </defs>
      </svg>
    </div>
  );
}

function SearchBarContainer() {
  return (
    <div className="absolute contents left-[14.49px] top-[72.43px]" data-name="Search Bar Container">
      <div className="absolute bg-[#f3f7fa] h-[38.632px] left-[14.49px] rounded-[9.658px] top-[72.43px] w-[197.383px]" data-name="Search Bar Background" />
      <Frame3 />
      <p className="absolute font-['RF_Dewi_Expanded:Semibold',sans-serif] leading-[normal] left-[48.29px] not-italic text-[8.451px] text-[rgba(135,143,166,0.6)] top-[86.62px] whitespace-nowrap">Найти продукт</p>
      <Frame4 />
    </div>
  );
}

function ProductCard() {
  return (
    <div className="absolute contents left-[14.49px] top-[150.3px]" data-name="Product Card">
      <p className="absolute font-['RF_Dewi_Expanded:Semibold',sans-serif] leading-[normal] left-[19.32px] not-italic text-[8.451px] text-[rgba(135,143,166,0.8)] top-[275.85px] whitespace-nowrap">Фрукты</p>
      <div className="absolute bg-[#fcfeff] border-[#f3f7fa] border-[0.604px] border-solid h-[171.427px] left-[14.49px] rounded-[9.658px] shadow-[0px_18.712px_209.455px_0px_rgba(232,237,240,0.18),0px_8.651px_96.837px_0px_rgba(232,237,240,0.13),0px_4.95px_55.408px_0px_rgba(232,237,240,0.11),0px_3.005px_33.632px_0px_rgba(232,237,240,0.1),0px_1.81px_20.265px_0px_rgba(232,237,240,0.08),0px_1.008px_11.285px_0px_rgba(232,237,240,0.07),0px_0.434px_4.854px_0px_rgba(232,237,240,0.05)] top-[150.3px] w-[96.277px]" data-name="Product Card" />
      <div className="absolute bg-[#f3f7fa] left-[24.14px] rounded-[43.31px] size-[76.961px] top-[159.96px]" data-name="Product Image Background" />
      <p className="-translate-x-1/2 absolute font-['RF_Dewi_Expanded:Semibold',sans-serif] leading-[normal] left-[62.75px] not-italic text-[#4f86ec] text-[9.658px] text-center top-[246.28px] whitespace-nowrap">Продукт 1</p>
      <p className="-translate-x-1/2 absolute font-['RF_Dewi_Expanded:Semibold',sans-serif] leading-[normal] left-[62.84px] not-italic text-[#010552] text-[10.865px] text-center top-[262.57px] whitespace-nowrap">145 ₽ / кг</p>
      <div className="absolute bg-[#4f86ec] h-[26.559px] left-[24.14px] rounded-[9.658px] top-[285.51px] w-[76.961px]" data-name="Button Background" />
      <p className="absolute font-['RF_Dewi_Expanded:Semibold',sans-serif] leading-[normal] left-[38.78px] not-italic text-[#f3f7fa] text-[7.243px] top-[293.96px] whitespace-nowrap">В корзину</p>
    </div>
  );
}

function ProductCard1() {
  return (
    <div className="absolute contents left-[115.59px] top-[150.3px]" data-name="Product Card">
      <p className="absolute font-['RF_Dewi_Expanded:Semibold',sans-serif] leading-[normal] left-[120.42px] not-italic text-[8.451px] text-[rgba(135,143,166,0.8)] top-[275.85px] whitespace-nowrap">Фрукты</p>
      <div className="absolute bg-[#fcfeff] border-[#f3f7fa] border-[0.604px] border-solid h-[171.427px] left-[115.59px] rounded-[9.658px] shadow-[0px_18.712px_209.455px_0px_rgba(232,237,240,0.18),0px_8.651px_96.837px_0px_rgba(232,237,240,0.13),0px_4.95px_55.408px_0px_rgba(232,237,240,0.11),0px_3.005px_33.632px_0px_rgba(232,237,240,0.1),0px_1.81px_20.265px_0px_rgba(232,237,240,0.08),0px_1.008px_11.285px_0px_rgba(232,237,240,0.07),0px_0.434px_4.854px_0px_rgba(232,237,240,0.05)] top-[150.3px] w-[96.277px]" data-name="Product Card" />
      <div className="absolute bg-[#f3f7fa] left-[125.25px] rounded-[43.31px] size-[76.961px] top-[159.96px]" data-name="Product Image Background" />
      <p className="-translate-x-1/2 absolute font-['RF_Dewi_Expanded:Semibold',sans-serif] leading-[normal] left-[163.64px] not-italic text-[#4f86ec] text-[9.658px] text-center top-[246.28px] whitespace-nowrap">Продукт 2</p>
      <p className="-translate-x-1/2 absolute font-['RF_Dewi_Expanded:Semibold',sans-serif] leading-[normal] left-[164.05px] not-italic text-[#010552] text-[10.865px] text-center top-[262.57px] whitespace-nowrap">218 ₽ / кг</p>
      <div className="absolute bg-[#4f86ec] h-[26.559px] left-[125.25px] rounded-[9.658px] top-[285.51px] w-[76.961px]" data-name="Button Background" />
      <p className="absolute font-['RF_Dewi_Expanded:Semibold',sans-serif] leading-[normal] left-[139.89px] not-italic text-[#f3f7fa] text-[7.243px] top-[293.96px] whitespace-nowrap">В корзину</p>
    </div>
  );
}

function Home() {
  return (
    <div className="absolute inset-[8.33%_10.42%]" data-name="Home">
      <div className="absolute inset-[-2.81%_-2.96%]">
        <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 16.1971 17.0019">
          <g id="Home">
            <g id="Home_2">
              <path clipRule="evenodd" d={svgPaths.p4a00700} fill="var(--fill-0, #030854)" fillRule="evenodd" />
              <path d={svgPaths.p4a00700} stroke="var(--stroke-0, #030854)" strokeLinecap="round" strokeLinejoin="round" strokeWidth="0.905426" />
            </g>
          </g>
        </svg>
      </div>
    </div>
  );
}

function Wallet() {
  return (
    <div className="absolute inset-[12.5%_9.84%_13.87%_10.42%]" data-name="Wallet">
      <div className="absolute inset-[-3.18%_-2.94%]">
        <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 16.3089 15.1285">
          <g id="Wallet">
            <path d={svgPaths.p157e6d80} id="Stroke 1" stroke="var(--stroke-0, #A0A6B8)" strokeLinecap="round" strokeLinejoin="round" strokeWidth="0.905426" />
            <path d="M12.9666 7.4087H12.7157" id="Stroke 3" stroke="var(--stroke-0, #A0A6B8)" strokeLinecap="round" strokeLinejoin="round" strokeWidth="0.905426" />
            <path clipRule="evenodd" d={svgPaths.p1cad3200} fillRule="evenodd" id="Stroke 5" stroke="var(--stroke-0, #A0A6B8)" strokeLinecap="round" strokeLinejoin="round" strokeWidth="0.905426" />
            <path d="M4.10308 4.10513H8.44828" id="Stroke 7" stroke="var(--stroke-0, #A0A6B8)" strokeLinecap="round" strokeLinejoin="round" strokeWidth="0.905426" />
          </g>
        </svg>
      </div>
    </div>
  );
}

function Scan() {
  return (
    <div className="absolute inset-[13.96%_6.25%_14.12%_6.25%]" data-name="Scan">
      <div className="absolute inset-[-3.26%_-2.68%]">
        <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 17.8067 14.7979">
          <g id="Scan">
            <path d="M17.354 8.06272H0.452713" id="Stroke 1" stroke="var(--stroke-0, #ECF7FF)" strokeLinecap="round" strokeLinejoin="round" strokeWidth="0.905426" />
            <path d={svgPaths.p1b320880} id="Stroke 3" stroke="var(--stroke-0, #ECF7FF)" strokeLinecap="round" strokeLinejoin="round" strokeWidth="0.905426" />
            <path d={svgPaths.p19d27640} id="Stroke 5" stroke="var(--stroke-0, #ECF7FF)" strokeLinecap="round" strokeLinejoin="round" strokeWidth="0.905426" />
            <path d={svgPaths.pdb51e00} id="Stroke 7" stroke="var(--stroke-0, #ECF7FF)" strokeLinecap="round" strokeLinejoin="round" strokeWidth="0.905426" />
            <path d={svgPaths.p1aa23580} id="Stroke 9" stroke="var(--stroke-0, #ECF7FF)" strokeLinecap="round" strokeLinejoin="round" strokeWidth="0.905426" />
          </g>
        </svg>
      </div>
    </div>
  );
}

function Bag() {
  return (
    <div className="absolute inset-[9.49%_10.88%_10.42%_13.75%]" data-name="Bag">
      <div className="absolute inset-[-2.92%_-3.11%_-2.93%_-3.11%]">
        <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 15.4614 16.3757">
          <g id="Bag">
            <path clipRule="evenodd" d={svgPaths.p3bc81800} fillRule="evenodd" id="Path_33955" stroke="var(--stroke-0, #A0A6B8)" strokeLinecap="round" strokeLinejoin="round" strokeWidth="0.905426" />
            <path d={svgPaths.p17e5ec00} id="Path_33956" stroke="var(--stroke-0, #A0A6B8)" strokeLinecap="round" strokeLinejoin="round" strokeWidth="0.905426" />
            <path d="M10.1064 7.55434H10.0696" id="Line_192" stroke="var(--stroke-0, #A0A6B8)" strokeLinecap="round" strokeLinejoin="round" strokeWidth="0.905426" />
            <path d="M5.41377 7.55434H5.37694" id="Line_193" stroke="var(--stroke-0, #A0A6B8)" strokeLinecap="round" strokeLinejoin="round" strokeWidth="0.905426" />
          </g>
        </svg>
      </div>
    </div>
  );
}

function Profile() {
  return (
    <div className="absolute inset-[11.73%_20.19%_11.58%_20.06%]" data-name="Profile">
      <div className="absolute inset-[-2.91%_-3.92%_-3.05%_-3.92%]">
        <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 12.4466 15.6974">
          <g id="Profile">
            <path clipRule="evenodd" d={svgPaths.p3c13e500} fillRule="evenodd" id="Stroke 1" stroke="var(--stroke-0, #A0A6B8)" strokeLinecap="round" strokeLinejoin="round" strokeWidth="0.905426" />
            <path clipRule="evenodd" d={svgPaths.p23e75500} fillRule="evenodd" id="Stroke 3" stroke="var(--stroke-0, #A0A6B8)" strokeLinecap="round" strokeLinejoin="round" strokeWidth="0.86231" />
          </g>
        </svg>
      </div>
    </div>
  );
}

function TabBarContainer() {
  return (
    <div className="absolute contents left-[14.49px] top-[125.55px]" data-name="Tab Bar Container">
      <p className="absolute font-['RF_Dewi_Expanded:Semibold',sans-serif] leading-[normal] left-[14.49px] not-italic text-[#010552] text-[8.451px] top-[125.55px] whitespace-nowrap">Все</p>
      <p className="absolute font-['RF_Dewi_Expanded:Semibold',sans-serif] leading-[normal] left-[116.3px] not-italic text-[8.451px] text-[rgba(135,143,166,0.8)] top-[125.55px] whitespace-nowrap">Фрукты</p>
      <p className="absolute font-['RF_Dewi_Expanded:Semibold',sans-serif] leading-[normal] left-[49.7px] not-italic text-[8.451px] text-[rgba(135,143,166,0.8)] top-[125.55px] whitespace-nowrap">Скидки %</p>
      <p className="absolute font-['RF_Dewi_Expanded:Semibold',sans-serif] leading-[normal] left-[173.84px] not-italic text-[8.451px] text-[rgba(135,143,166,0.8)] top-[125.55px] whitespace-nowrap">Овощи</p>
      <div className="absolute left-[23.24px] size-[3.018px] top-[138.23px]">
        <svg className="absolute block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 3.01809 3.01809">
          <circle cx="1.50904" cy="1.50904" fill="var(--fill-0, #010552)" id="Ellipse 176" r="1.50904" />
        </svg>
      </div>
    </div>
  );
}

function Dots() {
  return (
    <div className="absolute h-[3.622px] left-[92.05px] top-[331.39px] w-[42.254px]" data-name="dots">
      <svg className="absolute block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 42.2533 3.62201">
        <g id="dots">
          <circle cx="1.81085" cy="1.81085" fill="var(--fill-0, #4F86EC)" id="Ellipse 177" r="1.81085" />
          <circle cx="21.1266" cy="1.81094" fill="var(--fill-0, #878FA6)" fillOpacity="0.2" id="Ellipse 179" r="1.81085" />
          <circle cx="11.4687" cy="1.81094" fill="var(--fill-0, #878FA6)" fillOpacity="0.2" id="Ellipse 178" r="1.81085" />
          <circle cx="30.7844" cy="1.81094" fill="var(--fill-0, #878FA6)" fillOpacity="0.2" id="Ellipse 180" r="1.81085" />
          <circle cx="40.4423" cy="1.81094" fill="var(--fill-0, #878FA6)" fillOpacity="0.2" id="Ellipse 181" r="1.81085" />
        </g>
      </svg>
    </div>
  );
}

function IPhone11ProX() {
  return (
    <div className="bg-white h-[490.137px] overflow-clip relative rounded-[14.487px] shrink-0 w-[226.356px]" data-name="iPhone 11 Pro / X - 1">
      <BottomEllipseContainer />
      <div className="absolute left-[173.24px] rounded-[19.316px] size-[38.632px] top-[19.32px]" data-name="Profile Picture">
        <div className="absolute inset-0 overflow-hidden pointer-events-none rounded-[19.316px]">
          <img alt="" className="absolute h-[107.98%] left-[-5.34%] max-w-none top-0 w-[107.97%]" src={imgProfilePicture} />
        </div>
      </div>
      <p className="absolute font-['RF_Dewi_Expanded:Semibold',sans-serif] leading-[normal] left-[14.49px] not-italic opacity-80 text-[#878fa6] text-[9.054px] top-[24.14px] whitespace-nowrap">Добро пожаловать,</p>
      <p className="absolute font-['RF_Dewi_Expanded:Semibold',sans-serif] leading-[normal] left-[14.49px] not-italic text-[#010552] text-[12.072px] top-[37.42px] whitespace-nowrap">Евгений Павлов</p>
      <p className="absolute font-['RF_Dewi_Expanded:Semibold',sans-serif] leading-[normal] left-[14.49px] not-italic text-[#010552] text-[9.658px] top-[348.29px] whitespace-nowrap">Недавние покупки</p>
      <div className="absolute bg-[#f3f7fa] h-[41.046px] left-[14.49px] rounded-[9.658px] top-[369.41px] w-[197.383px]" data-name="Divider" />
      <SearchBarContainer />
      <ProductCard />
      <ProductCard1 />
      <div className="absolute bg-white inset-[91.38%_82.93%_4.68%_8.53%]" data-name="Home Icon">
        <Home />
      </div>
      <div className="absolute inset-[91.38%_66.2%_4.68%_25.27%] opacity-80" data-name="Wallet Icon">
        <Wallet />
      </div>
      <div className="absolute inset-[91.38%_45.73%_4.68%_45.73%]" data-name="Scan Icon">
        <Scan />
      </div>
      <div className="absolute inset-[91.38%_25.27%_4.68%_66.2%] opacity-80" data-name="Bag Icon">
        <Bag />
      </div>
      <div className="absolute inset-[91.38%_8.53%_4.68%_82.93%] opacity-80" data-name="Profile Icon">
        <Profile />
      </div>
      <div className="absolute h-0 left-0 top-[424.95px] w-[226.356px]">
        <div className="absolute inset-[-0.3px_0]">
          <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 226.356 0.603617">
            <path d="M0 0.301809H226.356" id="Vector 1" stroke="var(--stroke-0, #F3F7FA)" strokeWidth="0.603617" />
          </svg>
        </div>
      </div>
      <TabBarContainer />
      <Dots />
    </div>
  );
}

function Container31() {
  return (
    <div className="bg-[#38444a] relative rounded-[15px] shrink-0 w-full" data-name="Container">
      <div className="flex flex-col items-center justify-center size-full">
        <div className="content-stretch flex flex-col gap-[10px] items-center justify-center pb-[50px] pt-[20px] px-[142px] relative w-full">
          <Container32 />
          <IPhone11ProX />
        </div>
      </div>
    </div>
  );
}

function Container28() {
  return (
    <div className="content-stretch flex flex-col items-start relative shrink-0 w-[532px]" data-name="Container">
      <Container29 />
      <Container31 />
    </div>
  );
}

function Container27() {
  return (
    <div className="bg-[#404d52] content-stretch flex flex-col items-center pb-[30px] px-[20px] relative rounded-[24px] shrink-0" data-name="Container">
      <Container28 />
    </div>
  );
}

function Frame1() {
  return (
    <div className="content-stretch flex flex-col gap-[13px] items-start relative shrink-0 w-[572px]" data-name="Frame">
      <Container />
      <Container12 />
      <Container16 />
      <Container21 />
      <Container27 />
    </div>
  );
}

export default function Frame() {
  return (
    <div className="content-stretch flex flex-col items-start relative size-full" data-name="Frame">
      <Frame1 />
    </div>
  );
}

export { Container2 as HeroPhoneCard, Container31 as ExampleContent };