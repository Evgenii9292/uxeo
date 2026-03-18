import svgPaths from "./svg-wibidt795v";
import imgProgressRoot from "figma:asset/010ae10dcd9db562072cdc157b19ca2406d1fb36.png";

function Frame1() {
  return (
    <div className="h-[55px] relative shrink-0 w-[56px]">
      <div className="absolute inset-[0_-4.03%_-3.88%_-5.12%]">
        <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 61.1274 57.1365" xmlnsXlink="http://www.w3.org/1999/xlink">
          <g id="Frame 481548">
            <g id="Group 481512">
              <g id="Vector 752" />
              <g id="Vector 753" />
              <g id="Vector 754" />
              <g id="Vector 755" />
              <g id="Vector 756" />
              <g id="Vector 757" />
            </g>
            <g id="Vector 781" />
            <g id="Vector 782" />
          </g>
          <defs>
            <g data-figma-scatter="f0.25_w0_aj95_sj0_r45_s0_sw4" data-figma-scatter-ref="stroke0_324_1509_ref" id="stroke0_324_1509">
              <path d={svgPaths.p29822f00} fill="var(--stroke-0, #272F32)" />
            </g>
            <path d={svgPaths.p12e8ba00} id="stroke0_324_1509_ref" />
            <g data-figma-scatter="f0.25_w0_aj95_sj0_r45_s0_sw4" data-figma-scatter-ref="stroke1_324_1509_ref" id="stroke1_324_1509">
              <path d={svgPaths.p29822f00} fill="var(--stroke-0, #272F32)" />
            </g>
            <path d={svgPaths.p2b9a8e00} id="stroke1_324_1509_ref" />
            <g data-figma-scatter="f0.25_w0_aj95_sj0_r45_s0_sw4" data-figma-scatter-ref="stroke2_324_1509_ref" id="stroke2_324_1509">
              <path d={svgPaths.p29822f00} fill="var(--stroke-0, #272F32)" />
            </g>
            <path d={svgPaths.p31f26f80} id="stroke2_324_1509_ref" />
            <g data-figma-scatter="f0.25_w0_aj95_sj0_r45_s0_sw4" data-figma-scatter-ref="stroke3_324_1509_ref" id="stroke3_324_1509">
              <path d={svgPaths.p29822f00} fill="var(--stroke-0, #272F32)" />
            </g>
            <path d={svgPaths.p1ce99a00} id="stroke3_324_1509_ref" />
            <g data-figma-scatter="f0.25_w0_aj95_sj0_r45_s0_sw4" data-figma-scatter-ref="stroke4_324_1509_ref" id="stroke4_324_1509">
              <path d={svgPaths.p29822f00} fill="var(--stroke-0, #272F32)" />
            </g>
            <path d={svgPaths.p108ea880} id="stroke4_324_1509_ref" />
            <g data-figma-scatter="f0.25_w0_aj95_sj0_r45_s0_sw4" data-figma-scatter-ref="stroke5_324_1509_ref" id="stroke5_324_1509">
              <path d={svgPaths.p29822f00} fill="var(--stroke-0, #272F32)" />
            </g>
            <path d={svgPaths.p9c33580} id="stroke5_324_1509_ref" />
            <g data-figma-scatter="f0.25_w0_aj95_sj0_r45_s0_sw4" data-figma-scatter-ref="stroke6_324_1509_ref" id="stroke6_324_1509">
              <path d={svgPaths.p29822f00} fill="var(--stroke-0, #272F32)" />
            </g>
            <path d={svgPaths.p2b742980} id="stroke6_324_1509_ref" />
            <g data-figma-scatter="f0.25_w0_aj95_sj0_r45_s0_sw4" data-figma-scatter-ref="stroke7_324_1509_ref" id="stroke7_324_1509">
              <path d={svgPaths.p29822f00} fill="var(--stroke-0, #272F32)" />
            </g>
            <path d={svgPaths.p17490780} id="stroke7_324_1509_ref" />
          </defs>
        </svg>
      </div>
    </div>
  );
}

function TextContainer() {
  return (
    <div className="content-stretch flex flex-[1_0_0] flex-col gap-[15px] items-start min-h-px min-w-px relative text-[#232a2d]" data-name="Text Container">
      <p className="font-['Roboto_Condensed:Medium',sans-serif] font-medium leading-[27.5px] relative shrink-0 text-[26px] whitespace-nowrap">Цвет</p>
      <p className="font-['Roboto_Condensed:Medium',sans-serif] font-medium leading-[20px] min-w-full relative shrink-0 text-[18px] w-[min-content]">Базовые принципы цвета в интерфейсах: контраст, акцентные и нейтральные цвета.</p>
    </div>
  );
}

function Frame() {
  return (
    <div className="content-stretch flex gap-[15px] items-start relative shrink-0 w-full">
      <Frame1 />
      <TextContainer />
    </div>
  );
}

function ProgressIndicator() {
  return <div className="h-[13px] rounded-[16777200px] shrink-0 w-[258px]" data-name="Progress.Indicator" style={{ backgroundImage: "linear-gradient(173.584deg, rgb(66, 78, 83) 54.135%, rgb(44, 53, 56) 85.747%)" }} />;
}

function ProgressRoot() {
  return (
    <div className="content-stretch flex flex-col h-[13px] items-start overflow-clip pl-[-111.75px] pr-[111.75px] relative rounded-[16777200px] shrink-0 w-full" data-name="Progress.Root">
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
    <div className="content-stretch flex flex-col h-[12px] items-start relative shrink-0 w-full" data-name="Progress Container">
      <ProgressBarContainer />
    </div>
  );
}

function Container4() {
  return (
    <div className="content-stretch flex flex-[1_0_0] flex-col items-start min-h-px min-w-px py-[10px] relative" data-name="Container">
      <ProgressContainer />
    </div>
  );
}

function Container3() {
  return (
    <div className="content-stretch flex gap-[10px] items-center relative shrink-0 w-full" data-name="Container">
      <Container4 />
      <p className="font-['Roboto_Condensed:Medium',sans-serif] font-medium leading-[20px] relative shrink-0 text-[#343e42] text-[16px] whitespace-nowrap">33%</p>
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
    <div className="content-stretch flex h-[20px] items-center justify-between relative shrink-0 w-full" data-name="Icons and XP Container">
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

function Container2() {
  return (
    <div className="content-stretch flex flex-col gap-[8px] items-start relative shrink-0 w-full" data-name="Container">
      <Frame />
      <Container3 />
      <IconsAndXpContainer />
    </div>
  );
}

function Component202603041916291Vectorized() {
  return (
    <div className="h-[41px] relative shrink-0 w-[28px]" data-name="Снимок экрана 2026-03-04 в 19.16.29 1 [Vectorized]">
      <div className="bg-clip-padding border-0 border-[transparent] border-solid overflow-clip relative rounded-[inherit] size-full">
        <div className="absolute inset-[18.29%_5.36%_20.73%_5.36%]" data-name="Progress Icon">
          <div className="absolute inset-[34.44%_32.72%_0_0]" data-name="Vector">
            <svg className="absolute block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 16.8206 16.3884">
              <path d={svgPaths.p290e8c00} fill="var(--fill-0, #F4F5FC)" id="Vector" />
            </svg>
          </div>
          <div className="absolute inset-[0_0_22.96%_21.06%]" data-name="Vector">
            <svg className="absolute block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 19.7362 19.26">
              <path d={svgPaths.p2ed25580} fill="var(--fill-0, #F4F5FC)" id="Vector" />
            </svg>
          </div>
        </div>
      </div>
    </div>
  );
}

function Container5() {
  return (
    <div className="bg-[#343e42] content-stretch flex gap-[8px] h-[60px] items-center justify-center px-[17px] py-px relative rounded-[15px] shrink-0 w-[184px]" data-name="Container">
      <div aria-hidden="true" className="absolute border border-[#57646a] border-solid inset-0 pointer-events-none rounded-[15px] shadow-[0px_5px_0px_0px_black]" />
      <Component202603041916291Vectorized />
      <p className="font-['Roboto_Condensed:Bold',sans-serif] font-bold leading-[27.5px] relative shrink-0 text-[#f4f5fc] text-[28px] whitespace-nowrap">Квиз</p>
    </div>
  );
}

function Container6() {
  return (
    <div className="bg-[#f7f8fc] content-stretch flex h-[60px] items-center justify-center px-[16px] relative rounded-[15px] shadow-[0px_5px_0px_0px_#d2d4df] shrink-0 w-[161px]" data-name="Container">
      <p className="font-['Roboto_Condensed:Bold',sans-serif] font-bold leading-[27.5px] relative shrink-0 text-[#323c41] text-[28px] whitespace-nowrap">Теория</p>
    </div>
  );
}

function ProgressAndActionsContainer() {
  return (
    <div className="content-stretch flex gap-[17px] items-start relative shrink-0 w-full" data-name="Progress and Actions Container">
      <Container5 />
      <Container6 />
    </div>
  );
}

function Container1() {
  return (
    <div className="absolute content-stretch flex flex-col gap-[16px] items-start left-[23px] top-[43px] w-[360px]" data-name="Container">
      <Container2 />
      <ProgressAndActionsContainer />
    </div>
  );
}

export default function Container() {
  return (
    <div className="relative size-full" data-name="Container">
      <div className="absolute h-[318px] left-0 top-0 w-[410px]">
        <div className="absolute inset-[0.39%_0_0_0]">
          <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 410 316.765">
            <g filter="url(#filter0_iiii_324_1520)" id="Rectangle 1630">
              <path d={svgPaths.p19655f00} fill="url(#paint0_linear_324_1520)" />
            </g>
            <defs>
              <filter colorInterpolationFilters="sRGB" filterUnits="userSpaceOnUse" height="324.765" id="filter0_iiii_324_1520" width="418" x="-4" y="-4">
                <feFlood floodOpacity="0" result="BackgroundImageFix" />
                <feBlend in="SourceGraphic" in2="BackgroundImageFix" mode="normal" result="shape" />
                <feColorMatrix in="SourceAlpha" result="hardAlpha" type="matrix" values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 127 0" />
                <feOffset dy="4" />
                <feGaussianBlur stdDeviation="2" />
                <feComposite in2="hardAlpha" k2="-1" k3="1" operator="arithmetic" />
                <feColorMatrix type="matrix" values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0.25 0" />
                <feBlend in2="shape" mode="normal" result="effect1_innerShadow_324_1520" />
                <feColorMatrix in="SourceAlpha" result="hardAlpha" type="matrix" values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 127 0" />
                <feOffset dy="-5" />
                <feGaussianBlur stdDeviation="2" />
                <feComposite in2="hardAlpha" k2="-1" k3="1" operator="arithmetic" />
                <feColorMatrix type="matrix" values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0.25 0" />
                <feBlend in2="effect1_innerShadow_324_1520" mode="normal" result="effect2_innerShadow_324_1520" />
                <feColorMatrix in="SourceAlpha" result="hardAlpha" type="matrix" values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 127 0" />
                <feOffset dx="4" />
                <feGaussianBlur stdDeviation="2" />
                <feComposite in2="hardAlpha" k2="-1" k3="1" operator="arithmetic" />
                <feColorMatrix type="matrix" values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0.25 0" />
                <feBlend in2="effect2_innerShadow_324_1520" mode="normal" result="effect3_innerShadow_324_1520" />
                <feColorMatrix in="SourceAlpha" result="hardAlpha" type="matrix" values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 127 0" />
                <feOffset dx="-4" />
                <feGaussianBlur stdDeviation="2" />
                <feComposite in2="hardAlpha" k2="-1" k3="1" operator="arithmetic" />
                <feColorMatrix type="matrix" values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0.25 0" />
                <feBlend in2="effect3_innerShadow_324_1520" mode="normal" result="effect4_innerShadow_324_1520" />
              </filter>
              <linearGradient gradientUnits="userSpaceOnUse" id="paint0_linear_324_1520" x1="84.3582" x2="311.033" y1="35.2501" y2="336.313">
                <stop stopColor="#C0C3D0" />
                <stop offset="0.167919" stopColor="#CEC4BB" />
                <stop offset="1" stopColor="#9699A5" />
              </linearGradient>
            </defs>
          </svg>
        </div>
      </div>
      <Container1 />
    </div>
  );
}