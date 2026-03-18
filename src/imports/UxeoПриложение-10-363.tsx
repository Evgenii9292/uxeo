import svgPaths from "./svg-pt1cecsedx";
import { useNavigate } from "react-router";
import imgFrame481335 from "figma:asset/4c068adea0aa2b40da93f8a1a4d30d25ed1b8901.png";
import imgHeader from "figma:asset/bacbce2386aae85439248ee354e64cf2ec1fb9b9.png";
import img202603032301003 from "figma:asset/1d3e95d16c48ef4470ac62a88c5ff7b35e4ccb76.png";
import img202603032301002 from "figma:asset/3aa8c3397b0eae2e6bc8fea2c11f49121cb23736.png";

function Container() {
  return (
    <div className="content-stretch flex gap-[12.755px] items-start px-[15px] relative shrink-0 w-[125px]" data-name="Container">
      <div className="h-[31.164px] relative shrink-0 w-[21.385px]" data-name="Vector">
        <svg className="absolute block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 21.3845 31.1638">
          <path d={svgPaths.p1c223610} fill="url(#paint0_linear_1_175)" id="Vector" />
          <defs>
            <linearGradient gradientUnits="userSpaceOnUse" id="paint0_linear_1_175" x1="9" x2="-7" y1="13.3574" y2="30.8574">
              <stop stopColor="#FF6B21" />
              <stop offset="1" stopColor="#994014" />
            </linearGradient>
          </defs>
        </svg>
      </div>
      <p className="font-['Roboto_Condensed:Bold',sans-serif] font-bold leading-[27.5px] relative shrink-0 text-[#f4f5fc] text-[32px] w-[91.837px]">UXEO</p>
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

function Div() {
  const navigate = useNavigate();
  return (
    <div className="content-stretch flex flex-col gap-[9px] items-start relative shrink-0 w-full" data-name="div">
      <div className="h-[41px] relative rounded-[14px] shrink-0 w-[205px] cursor-pointer" data-name="Link" onClick={() => navigate("/")}>
        <div className="bg-clip-padding border-0 border-[transparent] border-solid content-stretch flex gap-[10px] items-center pl-[12px] relative size-full">
          <div className="relative shrink-0 size-[20px]" data-name="free-icon-book">
            <div className="bg-clip-padding border-0 border-[transparent] border-solid overflow-clip relative rounded-[inherit] size-full">
              <BookSpine />
            </div>
          </div>
          <p className="font-['Roboto_Condensed:Medium',sans-serif] font-medium leading-[21px] relative shrink-0 text-[#f1f2fb] text-[18px] whitespace-nowrap">Обучение</p>
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
          <p className="font-['Roboto_Condensed:Medium',sans-serif] font-medium leading-[21px] relative shrink-0 text-[#f1f2fb] text-[18px] whitespace-nowrap">Вызовы</p>
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
          <p className="font-['Roboto_Condensed:Medium',sans-serif] font-medium leading-[21px] relative shrink-0 text-[#f1f2fb] text-[18px] whitespace-nowrap">Профиль</p>
        </div>
      </div>
    </div>
  );
}

function Frame33() {
  return (
    <div className="content-stretch flex flex-col gap-[50px] items-start relative shrink-0 w-[205px]">
      <Container />
      <Div />
    </div>
  );
}

function Span() {
  return (
    <div className="h-[21px] relative shrink-0 w-[62.156px]" data-name="span">
      <div className="bg-clip-padding border-0 border-[transparent] border-solid relative size-full">
        <p className="absolute font-['Roboto_Condensed:Medium',sans-serif] font-medium leading-[21px] left-0 text-[#f2f4fb] text-[18px] top-0 whitespace-nowrap">О проекте</p>
      </div>
    </div>
  );
}

function Link() {
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

function Container1() {
  return (
    <div className="bg-[#343e42] content-stretch flex h-[40.962px] items-center justify-center px-[9.808px] py-[0.577px] relative rounded-[13.846px] shrink-0 w-[165px]" data-name="Container">
      <div aria-hidden="true" className="absolute border-[#57646a] border-[0.577px] border-solid inset-0 pointer-events-none rounded-[13.846px] shadow-[0px_2.885px_0px_0px_black]" />
      <p className="font-['Roboto_Condensed:Bold',sans-serif] font-bold leading-[15.865px] relative shrink-0 text-[#f4f5fc] text-[18.462px] whitespace-nowrap">Написать нам</p>
    </div>
  );
}

function FooterContainer() {
  return (
    <div className="content-stretch flex flex-col items-start relative shrink-0 w-full" data-name="Footer Container">
      <Link />
      <Container1 />
    </div>
  );
}

function Frame34() {
  return (
    <div className="relative shrink-0 w-full">
      <div className="flex flex-row items-center justify-center size-full">
        <div className="content-stretch flex items-center justify-center px-[15px] relative w-full">
          <p className="flex-[1_0_0] font-['Roboto_Condensed:Medium',sans-serif] font-medium h-[13.702px] leading-[20px] min-h-px min-w-px relative text-[#777982] text-[16px]">Сообщить об ошибке</p>
        </div>
      </div>
    </div>
  );
}

function Frame32() {
  return (
    <div className="content-stretch flex flex-col gap-[30px] items-start relative shrink-0 w-full">
      <FooterContainer />
      <Frame34 />
    </div>
  );
}

function Frame35() {
  return (
    <div className="content-stretch flex flex-[1_0_0] flex-col items-start justify-between min-h-px min-w-px relative w-full">
      <Frame33 />
      <Frame32 />
    </div>
  );
}

function Frame36() {
  return (
    <div className="absolute content-stretch flex flex-col h-[1149px] items-start left-[12px] max-h-[2000px] pl-[12px] pr-[11px] py-[20px] rounded-[24px] top-[20px] w-[238px]">
      <img alt="" className="absolute inset-0 max-w-none object-cover pointer-events-none rounded-[24px] size-full" src={imgFrame481335} />
      <Frame35 />
    </div>
  );
}

function BackButton() {
  const navigate = useNavigate();
  return (
    <div
      className="relative shrink-0 cursor-pointer select-none"
      data-name="Back Button"
      onClick={() => navigate("/")}
    >
      <div className="bg-clip-padding border-0 border-[transparent] border-solid content-stretch flex gap-[20px] items-center relative">
        <div className="h-[20px] relative shrink-0 w-[10px]">
          <div className="absolute inset-[-12.5%_-25%_-12.5%_-8.43%]">
            <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 13.3431 25">
              <path d={svgPaths.p2fb4fd90} id="Vector 5" stroke="var(--stroke-0, #798589)" strokeLinecap="round" strokeWidth="5" />
            </svg>
          </div>
        </div>
        <p className="font-['Roboto_Condensed:Bold',sans-serif] font-bold leading-[27.5px] relative shrink-0 text-[#f4f5fc] text-[26px] whitespace-nowrap">Уроки</p>
      </div>
    </div>
  );
}

function FireIconGroup1() {
  return (
    <div className="absolute inset-[0_15.69%]" data-name="Fire Icon Group">
      <svg className="absolute block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 16.7655 24.4324">
        <g id="Fire Icon Group">
          <path d={svgPaths.p33094f0} fill="url(#paint0_linear_10_612)" id="Vector" />
        </g>
        <defs>
          <linearGradient gradientUnits="userSpaceOnUse" id="paint0_linear_10_612" x1="7.056" x2="-5.488" y1="10.4722" y2="24.1922">
            <stop stopColor="#FF6B21" />
            <stop offset="1" stopColor="#994014" />
          </linearGradient>
        </defs>
      </svg>
    </div>
  );
}

function FireIconGroup() {
  return (
    <div className="absolute contents inset-[0_15.69%]" data-name="Fire Icon Group">
      <FireIconGroup1 />
    </div>
  );
}

function FireIcon() {
  return (
    <div className="overflow-clip relative shrink-0 size-[24.432px]" data-name="Fire Icon">
      <FireIconGroup />
    </div>
  );
}

function FireIconContainer() {
  return (
    <div className="relative shrink-0" data-name="Fire Icon Container">
      <div className="bg-clip-padding border-0 border-[transparent] border-solid content-stretch flex gap-[3.054px] items-center relative">
        <FireIcon />
        <p className="font-['Roboto_Condensed:ExtraBold',sans-serif] font-extrabold leading-[32.068px] relative shrink-0 text-[#ff6b21] text-[24px] whitespace-nowrap">0</p>
      </div>
    </div>
  );
}

function ZapIcon() {
  return (
    <div className="relative shrink-0 size-[24px]" data-name="Zap Icon">
      <svg className="absolute block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 24 24">
        <g id="Zap Icon">
          <path d={svgPaths.p3b6e5180} fill="var(--fill-0, #798589)" id="Vector" />
        </g>
      </svg>
    </div>
  );
}

function ZapIconContainer() {
  return (
    <div className="relative shrink-0" data-name="Zap Icon Container">
      <div className="bg-clip-padding border-0 border-[transparent] border-solid content-stretch flex gap-[4px] items-center relative">
        <ZapIcon />
        <p className="font-['Roboto_Condensed:ExtraBold',sans-serif] font-extrabold leading-[21px] relative shrink-0 text-[#798589] text-[24px] whitespace-nowrap">{`1250 `}</p>
      </div>
    </div>
  );
}

function ProfileIcon() {
  return (
    <div className="h-[38px] relative w-[43px]" data-name="Profile Icon">
      <svg className="absolute block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 43 38">
        <g id="Profile Icon">
          <g clipPath="url(#clip0_10_501)">
            <path d={svgPaths.p2ed1ed00} fill="var(--fill-0, #FEBBA4)" id="Vector" />
            <path d={svgPaths.p2a51a80} fill="var(--fill-0, #272E30)" id="Vector_2" />
            <path d={svgPaths.p220b7480} fill="var(--fill-0, #FEBBA4)" id="Vector_3" />
            <path d={svgPaths.p3ac59300} fill="var(--fill-0, #ED9383)" id="Vector_4" />
            <path d={svgPaths.p2f13aff2} fill="var(--fill-0, #ED9383)" id="Vector_5" />
            <path d={svgPaths.p114b3480} fill="var(--fill-0, #272E30)" id="Vector_6" />
            <path d={svgPaths.p2bf700} fill="var(--fill-0, #272E30)" id="Vector_7" />
            <path d={svgPaths.p2eb1dc00} fill="var(--fill-0, #272E30)" id="Vector_8" />
            <path d={svgPaths.p906ea00} fill="var(--fill-0, #757474)" id="Vector_9" />
            <path d={svgPaths.p3bd57d80} fill="var(--fill-0, #272E30)" id="Vector_10" />
            <path d={svgPaths.p39fafed0} fill="var(--fill-0, #757474)" id="Vector_11" />
            <path d={svgPaths.p2f632c80} fill="var(--fill-0, #272E30)" id="Vector_12" />
            <path d={svgPaths.p2ae83100} fill="var(--fill-0, #272E30)" id="Vector_13" />
            <path d={svgPaths.p4c41780} fill="var(--fill-0, #272E30)" id="Vector_14" />
            <path d={svgPaths.p2550ec00} fill="var(--fill-0, #272E30)" id="Vector_15" />
            <path d={svgPaths.p30899670} fill="var(--fill-0, #757474)" id="Vector_16" />
            <path d={svgPaths.p3342b600} fill="var(--fill-0, #757474)" id="Vector_17" />
            <path d={svgPaths.p2baab480} fill="var(--fill-0, #272E30)" id="Vector_18" />
            <path d={svgPaths.p1a320300} fill="var(--fill-0, #272E30)" id="Vector_19" />
            <path d={svgPaths.p20de800} fill="var(--fill-0, #272E30)" id="Vector_20" />
            <path d={svgPaths.p12b15200} fill="var(--fill-0, #FEBBA4)" id="Vector_21" />
            <path d={svgPaths.p4923980} fill="var(--fill-0, #ED9383)" id="Vector_22" />
            <path d={svgPaths.p2cf30f80} fill="var(--fill-0, #272E30)" id="Vector_23" />
            <path d={svgPaths.p31efa00} fill="var(--fill-0, #272E30)" id="Vector_24" />
            <path d={svgPaths.p27644e00} fill="var(--fill-0, #272E30)" id="Vector_25" />
            <path d={svgPaths.p3d198080} fill="var(--fill-0, #272E30)" id="Vector_26" />
            <path d={svgPaths.pc39100} fill="var(--fill-0, #272E30)" id="Vector_27" />
            <path d={svgPaths.p23e60480} fill="var(--fill-0, #272E30)" id="Vector_28" />
            <path d={svgPaths.pdd33b00} fill="var(--fill-0, #272E30)" id="Vector_29" />
            <path d={svgPaths.p3a338b00} fill="var(--fill-0, #757474)" id="Vector_30" />
            <path d={svgPaths.p30571b00} fill="var(--fill-0, #272E30)" id="Vector_31" />
            <path d={svgPaths.p18490e00} fill="var(--fill-0, #FEBBA4)" id="Vector_32" />
            <path d={svgPaths.pccef300} fill="var(--fill-0, #ED9383)" id="Vector_33" />
            <path d={svgPaths.p14e77a00} fill="var(--fill-0, #FDDFDD)" id="Vector_34" />
            <path d={svgPaths.p2fd79d00} fill="var(--fill-0, #442F2C)" id="Vector_35" />
            <path d={svgPaths.p8ab1300} fill="var(--fill-0, #757474)" id="Vector_36" />
            <path d={svgPaths.p1ffe3580} fill="var(--fill-0, #FEBBA4)" id="Vector_37" />
            <path d={svgPaths.p36fa8290} fill="var(--fill-0, #343E42)" id="Vector_38" />
            <path d={svgPaths.p365d28f0} fill="var(--fill-0, #343E42)" id="Vector_39" />
            <path d={svgPaths.p1a1ebc00} fill="var(--fill-0, #442F2C)" id="Vector_40" />
            <path d={svgPaths.pda7b00} fill="var(--fill-0, #FDDFDD)" id="Vector_41" />
            <path d={svgPaths.p26220480} fill="var(--fill-0, #757474)" id="Vector_42" />
            <path d={svgPaths.pc18c600} fill="var(--fill-0, #EFF2F3)" id="Vector_43" />
            <path d={svgPaths.p35367380} fill="var(--fill-0, #ED9383)" id="Vector_44" />
            <path d={svgPaths.p3fc2c980} fill="var(--fill-0, #ED9383)" id="Vector_45" />
            <path d={svgPaths.p3f82600} fill="var(--fill-0, #D8665A)" id="Vector_46" />
            <path d={svgPaths.p33648100} fill="var(--fill-0, #ED9383)" id="Vector_47" />
            <path d={svgPaths.p2dcf3c80} fill="var(--fill-0, #ED9383)" id="Vector_48" />
            <path d={svgPaths.p34a3c690} fill="var(--fill-0, #757474)" id="Vector_49" />
            <path d={svgPaths.p3b2c7f80} fill="var(--fill-0, #394143)" id="Vector_50" />
            <path d={svgPaths.pc28b00} fill="var(--fill-0, #EFF2F3)" id="Vector_51" />
            <path d={svgPaths.pcd32a00} fill="var(--fill-0, #757474)" id="Vector_52" />
            <path d={svgPaths.p3428b500} fill="var(--fill-0, #394143)" id="Vector_53" />
            <path d={svgPaths.p25011400} fill="var(--fill-0, #757474)" id="Vector_54" />
            <path d={svgPaths.p5d9ea00} fill="var(--fill-0, #757474)" id="Vector_55" />
            <path d={svgPaths.p3980bf80} fill="var(--fill-0, #757474)" id="Vector_56" />
            <path d={svgPaths.pae7dc00} fill="var(--fill-0, #757474)" id="Vector_57" />
            <path d={svgPaths.p3569fb00} fill="var(--fill-0, #757474)" id="Vector_58" />
            <path d={svgPaths.p223a5600} fill="var(--fill-0, #757474)" id="Vector_59" />
            <path d={svgPaths.pa146f00} fill="var(--fill-0, #757474)" id="Vector_60" />
            <path d={svgPaths.p13396e00} fill="var(--fill-0, #757474)" id="Vector_61" />
            <path d={svgPaths.p328308c0} fill="var(--fill-0, #272E30)" id="Vector_62" />
            <path d={svgPaths.p151ce980} fill="var(--fill-0, #394143)" id="Vector_63" />
            <path d={svgPaths.p6d71c80} fill="var(--fill-0, #394143)" id="Vector_64" />
            <path d={svgPaths.p78b3b80} fill="var(--fill-0, #8A9198)" id="Vector_65" />
            <path d={svgPaths.p21456200} fill="var(--fill-0, #8A9198)" id="Vector_66" />
            <path d={svgPaths.p37f29cc0} fill="var(--fill-0, #394143)" id="Vector_67" />
            <path d={svgPaths.p15774780} fill="var(--fill-0, #757474)" id="Vector_68" />
            <path d={svgPaths.p10827c00} fill="var(--fill-0, #757474)" id="Vector_69" />
            <path d={svgPaths.p23e15480} fill="var(--fill-0, #C7C7C6)" id="Vector_70" />
            <path d={svgPaths.p2e288700} fill="var(--fill-0, #C7C7C6)" id="Vector_71" />
            <path d={svgPaths.p175b9800} fill="var(--fill-0, #8A9198)" id="Vector_72" />
            <path d={svgPaths.p1b6b1b00} fill="var(--fill-0, #3583F0)" id="Vector_73" />
            <path d={svgPaths.p1c904200} fill="var(--fill-0, #3583F0)" id="Vector_74" />
            <path d={svgPaths.p3f85c280} fill="var(--fill-0, #FEBBA4)" id="Vector_75" />
            <path d={svgPaths.p36028d00} fill="var(--fill-0, #ED9383)" id="Vector_76" />
            <path d={svgPaths.p10f29300} fill="var(--fill-0, #8A9198)" id="Vector_77" />
            <path d={svgPaths.pe90180} fill="var(--fill-0, #8A9198)" id="Vector_78" />
            <path d={svgPaths.p9423a80} fill="var(--fill-0, #EFF2F3)" id="Vector_79" />
            <path d={svgPaths.pf3ac200} fill="var(--fill-0, #757474)" id="Vector_80" />
            <path d={svgPaths.p3f04d5c0} fill="var(--fill-0, #272E30)" id="Vector_81" />
            <path d={svgPaths.p37b55f00} fill="var(--fill-0, #757474)" id="Vector_82" />
            <path d={svgPaths.p23ca4500} fill="var(--fill-0, #272E30)" id="Vector_83" />
            <path d={svgPaths.p2f0f3e00} fill="var(--fill-0, #757474)" id="Vector_84" />
            <path d={svgPaths.p39f73700} fill="var(--fill-0, #272E30)" id="Vector_85" />
            <path d={svgPaths.p307200} fill="var(--fill-0, #272E30)" id="Vector_86" />
            <path d={svgPaths.p3ffb5840} fill="var(--fill-0, #272E30)" id="Vector_87" />
            <path d={svgPaths.p3b1bc580} fill="var(--fill-0, #757474)" id="Vector_88" />
            <path d={svgPaths.p39988ab0} fill="var(--fill-0, #272E30)" id="Vector_89" />
            <path d={svgPaths.pa835200} fill="var(--fill-0, #272E30)" id="Vector_90" />
            <path d={svgPaths.p9815500} fill="var(--fill-0, #272E30)" id="Vector_91" />
            <path d={svgPaths.p1c9cbe10} fill="var(--fill-0, #272E30)" id="Vector_92" />
            <path d={svgPaths.p1ae45480} fill="var(--fill-0, #272E30)" id="Vector_93" />
            <path d={svgPaths.p25d0c80} fill="var(--fill-0, #272E30)" id="Vector_94" />
            <path d={svgPaths.p27dc0300} fill="var(--fill-0, #272E30)" id="Vector_95" />
            <path d={svgPaths.p3afc6f80} fill="var(--fill-0, #272E30)" id="Vector_96" />
            <path d={svgPaths.pf0edc00} fill="var(--fill-0, #272E30)" id="Vector_97" />
            <path d={svgPaths.p2965ec80} fill="var(--fill-0, #272E30)" id="Vector_98" />
            <path d={svgPaths.p11e68fc0} fill="var(--fill-0, #757474)" id="Vector_99" />
            <path d={svgPaths.p20492e00} fill="var(--fill-0, #757474)" id="Vector_100" />
            <path d={svgPaths.p2765fc00} fill="var(--fill-0, #757474)" id="Vector_101" />
            <path d={svgPaths.p1a7afa30} fill="var(--fill-0, #757474)" id="Vector_102" />
            <path d={svgPaths.pe538100} fill="var(--fill-0, #272E30)" id="Vector_103" />
            <path d={svgPaths.p1154f3f0} fill="var(--fill-0, #EFF2F3)" id="Vector_104" />
          </g>
        </g>
        <defs>
          <clipPath id="clip0_10_501">
            <rect fill="white" height="38" rx="19" width="43" />
          </clipPath>
        </defs>
      </svg>
    </div>
  );
}

function IconsContainer() {
  return (
    <div className="h-[40px] relative shrink-0" data-name="Icons Container">
      <div className="bg-clip-padding border-0 border-[transparent] border-solid content-stretch flex gap-[30px] h-full items-center relative">
        <FireIconContainer />
        <ZapIconContainer />
        <div className="flex items-center justify-center relative shrink-0">
          <div className="-scale-y-100 flex-none rotate-180">
            <ProfileIcon />
          </div>
        </div>
      </div>
    </div>
  );
}

function Header() {
  return (
    <div className="relative rounded-[24px] shrink-0 w-full" data-name="Header">
      <img alt="" className="absolute inset-0 max-w-none object-cover pointer-events-none rounded-[24px] size-full" src={imgHeader} />
      <div className="flex flex-row items-center size-full">
        <div className="content-stretch flex items-center justify-between px-[22px] py-[15px] relative w-full">
          <BackButton />
          <IconsContainer />
        </div>
      </div>
    </div>
  );
}

function ProgressIndicator() {
  return <div className="bg-gradient-to-b from-[#ff6b21] h-[17px] rounded-[24px] shrink-0 to-[#994014] w-[137px]" data-name="Progress.Indicator" />;
}

function ProgressRoot() {
  return (
    <div className="bg-[#2d363a] content-stretch flex flex-col h-[17px] items-start overflow-clip pl-[-111.75px] pr-[111.75px] relative rounded-[16777200px] shrink-0 w-full" data-name="Progress.Root">
      <ProgressIndicator />
    </div>
  );
}

function Frame6() {
  return (
    <div className="content-stretch flex flex-col h-[32px] items-center justify-center relative shrink-0 w-full">
      <ProgressRoot />
    </div>
  );
}

function Frame1() {
  return (
    <div className="bg-[#38444a] flex-[1_0_0] min-h-px min-w-px relative rounded-[24px] w-full">
      <div className="absolute h-[161px] left-[26px] top-[38px] w-[185px]" data-name="Снимок экрана 2026-03-03 в 23.01.00 3">
        <div className="absolute inset-0 overflow-hidden pointer-events-none">
          <img alt="" className="absolute h-[107.09%] left-[-22.73%] max-w-none top-[-3.55%] w-[145.46%]" src={img202603032301003} />
        </div>
      </div>
    </div>
  );
}

function Frame7() {
  return (
    <div className="content-stretch flex flex-col h-full items-start relative shrink-0 w-[226px]">
      <Frame1 />
    </div>
  );
}

function Frame11() {
  return (
    <div className="content-stretch flex flex-col items-start relative shrink-0">
      <p className="font-['Roboto_Condensed:Bold',sans-serif] font-bold leading-[27.5px] relative shrink-0 text-[#f4f5fc] text-[28px] whitespace-nowrap">UX/UI Основы</p>
    </div>
  );
}

function Frame8() {
  return (
    <div className="content-stretch flex gap-[5px] items-center justify-center relative shrink-0">
      <div className="h-[13.337px] relative shrink-0 w-[12.005px]" data-name="Vector">
        <svg className="absolute block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 12.0045 13.3368">
          <path d={svgPaths.p429c1f0} fill="var(--fill-0, #F1F2FB)" id="Vector" />
        </svg>
      </div>
      <p className="font-['Roboto_Condensed:Medium',sans-serif] font-medium leading-[20px] relative shrink-0 text-[#f1f2fb] text-[16px] whitespace-nowrap">3 урока</p>
    </div>
  );
}

function Frame12() {
  return (
    <div className="content-stretch flex gap-[5px] items-center justify-center relative shrink-0">
      <div className="h-[13.337px] relative shrink-0 w-[12.005px]" data-name="Vector">
        <svg className="absolute block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 12.0045 13.3368">
          <path d={svgPaths.p429c1f0} fill="var(--fill-0, #F1F2FB)" id="Vector" />
        </svg>
      </div>
      <p className="font-['Roboto_Condensed:Medium',sans-serif] font-medium leading-[20px] relative shrink-0 text-[#f1f2fb] text-[16px] whitespace-nowrap">ДЗ</p>
    </div>
  );
}

function Frame15() {
  return (
    <div className="content-stretch flex gap-[21px] items-center relative shrink-0">
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
        <p className="font-['Roboto_Condensed:Medium',sans-serif] font-medium leading-[20px] relative shrink-0 text-[#f1f2fb] text-[16px] whitespace-nowrap">Новичек</p>
      </div>
      <Frame8 />
      <Frame12 />
    </div>
  );
}

function Zap() {
  return (
    <div className="relative shrink-0 size-[16px]" data-name="Zap">
      <svg className="absolute block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 16 16">
        <g id="Zap">
          <path d={svgPaths.p25c165f0} fill="var(--fill-0, #EEF5FF)" id="Vector" />
        </g>
      </svg>
    </div>
  );
}

function Container2() {
  return (
    <div className="bg-[#38444a] content-stretch flex gap-[4px] h-[39px] items-center justify-center px-[16px] relative rounded-[16777200px] shrink-0" data-name="Container">
      <Zap />
      <p className="font-['Inter:Semi_Bold',sans-serif] font-medium leading-[21px] not-italic relative shrink-0 text-[#eef5ff] text-[14px] whitespace-nowrap">+1250 XP</p>
    </div>
  );
}

function Frame() {
  return (
    <div className="content-stretch flex flex-col gap-[14px] items-start relative shrink-0 w-[204px]">
      <Frame11 />
      <Frame15 />
      <Container2 />
    </div>
  );
}

function Container3() {
  return (
    <div className="group bg-[#343e42] h-[60px] relative rounded-[24px] shrink-0 w-full cursor-pointer select-none hover:translate-y-[3px] active:translate-y-[5px] transition-transform duration-75" data-name="Container">
      <div aria-hidden="true" className="absolute border border-[#57646a] border-solid inset-0 pointer-events-none rounded-[24px] shadow-[0px_5px_0px_0px_black] group-hover:shadow-[0px_2px_0px_0px_black] group-active:shadow-none transition-shadow duration-75" />
      <div className="flex flex-row items-center justify-center size-full">
        <div className="content-stretch flex items-center justify-center px-[17px] py-px relative size-full">
          <p className="font-['Roboto_Condensed:Bold',sans-serif] font-bold leading-[27.5px] relative shrink-0 text-[#f4f5fc] text-[26px] whitespace-nowrap">Продолжить</p>
        </div>
      </div>
    </div>
  );
}

function Frame13() {
  return (
    <div className="content-stretch flex flex-[1_0_0] flex-col h-full items-start justify-between min-h-px min-w-px relative">
      <Frame />
      <Container3 />
    </div>
  );
}

function Frame14() {
  return (
    <div className="content-stretch flex flex-[1_0_0] gap-[20px] items-start min-h-px min-w-px relative w-full">
      <Frame7 />
      <Frame13 />
    </div>
  );
}

function Link1() {
  return (
    <div className="bg-[#404d52] content-stretch flex flex-col gap-[16px] h-[332px] items-center p-[20px] relative rounded-[24px] shrink-0 w-[572px]" data-name="Link">
      <div aria-hidden="true" className="absolute border-5 border-[#465256] border-solid inset-[-5px] pointer-events-none rounded-[29px]" />
      <Frame6 />
      <Frame14 />
    </div>
  );
}

function Frame2() {
  return (
    <div className="flex-[1_0_0] min-h-px min-w-px relative rounded-[24px] w-full">
      <div className="absolute h-[171px] left-[43px] top-[38px] w-[150px]" data-name="Снимок экрана 2026-03-03 в 23.01.00 2">
        <div className="absolute inset-0 overflow-hidden pointer-events-none">
          <img alt="" className="absolute h-[111.35%] left-0 max-w-none top-[-5.68%] w-full" src={img202603032301002} />
        </div>
      </div>
    </div>
  );
}

function Frame9() {
  return (
    <div className="bg-[#303c41] content-stretch flex flex-col h-full items-start relative rounded-[24px] shrink-0 w-[226px]">
      <Frame2 />
    </div>
  );
}

function Frame18() {
  return (
    <div className="content-stretch flex flex-col items-start relative shrink-0">
      <p className="font-['Roboto_Condensed:Bold',sans-serif] font-bold leading-[27.5px] relative shrink-0 text-[#f4f5fc] text-[28px] whitespace-nowrap">Fgma PRO</p>
    </div>
  );
}

function Frame10() {
  return (
    <div className="content-stretch flex gap-[5px] items-center justify-center relative shrink-0">
      <div className="h-[13.337px] relative shrink-0 w-[12.005px]" data-name="Vector">
        <svg className="absolute block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 12.0045 13.3368">
          <path d={svgPaths.p429c1f0} fill="var(--fill-0, #F1F2FB)" id="Vector" />
        </svg>
      </div>
      <p className="font-['Roboto_Condensed:Medium',sans-serif] font-medium leading-[20px] relative shrink-0 text-[#f1f2fb] text-[16px] whitespace-nowrap">Мидл</p>
    </div>
  );
}

function Frame19() {
  return (
    <div className="content-stretch flex items-center relative shrink-0">
      <Frame10 />
    </div>
  );
}

function Frame3() {
  return (
    <div className="content-stretch flex flex-col gap-[20px] items-start relative shrink-0 w-[204px]">
      <Frame18 />
      <Frame19 />
    </div>
  );
}

function Container4() {
  return (
    <div className="bg-[#343e42] h-[60px] relative rounded-[24px] shrink-0 w-full" data-name="Container">
      <div aria-hidden="true" className="absolute border border-[#57646a] border-solid inset-0 pointer-events-none rounded-[24px] shadow-[0px_2px_0px_0px_black]" />
      <div className="flex flex-row items-center justify-center size-full">
        <div className="content-stretch flex items-center justify-center px-[17px] py-px relative size-full">
          <p className="font-['Roboto_Condensed:Bold',sans-serif] font-bold leading-[27.5px] relative shrink-0 text-[#798589] text-[26px] whitespace-nowrap">В рзработке</p>
        </div>
      </div>
    </div>
  );
}

function Frame17() {
  return (
    <div className="content-stretch flex flex-[1_0_0] flex-col h-full items-start justify-between min-h-px min-w-px relative">
      <Frame3 />
      <Container4 />
    </div>
  );
}

function Frame16() {
  return (
    <div className="content-stretch flex flex-[1_0_0] gap-[20px] items-start min-h-px min-w-px relative w-full">
      <Frame9 />
      <Frame17 />
    </div>
  );
}

function Link2() {
  return (
    <div className="bg-[#343e42] content-stretch flex flex-col h-[287px] items-center p-[20px] relative rounded-[24px] shrink-0 w-[572px]" data-name="Link">
      <div aria-hidden="true" className="absolute border-5 border-[#3d474a] border-solid inset-[-5px] pointer-events-none rounded-[29px]" />
      <Frame16 />
    </div>
  );
}

function Frame4() {
  return (
    <div className="flex-[1_0_0] min-h-px min-w-px relative rounded-[24px] w-full">
      <div className="absolute h-[171px] left-[43px] top-[38px] w-[150px]" data-name="Снимок экрана 2026-03-03 в 23.01.00 2">
        <div className="absolute inset-0 overflow-hidden pointer-events-none">
          <img alt="" className="absolute h-[111.35%] left-0 max-w-none top-[-5.68%] w-full" src={img202603032301002} />
        </div>
      </div>
    </div>
  );
}

function Frame21() {
  return (
    <div className="bg-[#303c41] content-stretch flex flex-col h-full items-start relative rounded-[24px] shrink-0 w-[226px]">
      <Frame4 />
    </div>
  );
}

function Frame23() {
  return (
    <div className="content-stretch flex flex-col items-start relative shrink-0">
      <p className="font-['Roboto_Condensed:Bold',sans-serif] font-bold leading-[27.5px] relative shrink-0 text-[#f4f5fc] text-[28px] whitespace-nowrap">AI для дизайнеров</p>
    </div>
  );
}

function Frame25() {
  return (
    <div className="content-stretch flex gap-[5px] items-center justify-center relative shrink-0">
      <div className="h-[13.337px] relative shrink-0 w-[12.005px]" data-name="Vector">
        <svg className="absolute block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 12.0045 13.3368">
          <path d={svgPaths.p429c1f0} fill="var(--fill-0, #F1F2FB)" id="Vector" />
        </svg>
      </div>
      <p className="font-['Roboto_Condensed:Medium',sans-serif] font-medium leading-[20px] relative shrink-0 text-[#f1f2fb] text-[16px] whitespace-nowrap">Мидл</p>
    </div>
  );
}

function Frame26() {
  return (
    <div className="content-stretch flex gap-[5px] items-center justify-center relative shrink-0">
      <div className="h-[13.337px] relative shrink-0 w-[12.005px]" data-name="Vector">
        <svg className="absolute block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 12.0045 13.3368">
          <path d={svgPaths.p429c1f0} fill="var(--fill-0, #F1F2FB)" id="Vector" />
        </svg>
      </div>
      <p className="font-['Roboto_Condensed:Medium',sans-serif] font-medium leading-[20px] relative shrink-0 text-[#f1f2fb] text-[16px] whitespace-nowrap">Основы</p>
    </div>
  );
}

function Frame24() {
  return (
    <div className="content-stretch flex gap-[21px] items-center relative shrink-0">
      <Frame25 />
      <Frame26 />
    </div>
  );
}

function Frame5() {
  return (
    <div className="content-stretch flex flex-col gap-[20px] items-start relative shrink-0 w-[204px]">
      <Frame23 />
      <Frame24 />
    </div>
  );
}

function Container5() {
  return (
    <div className="bg-[#343e42] h-[60px] relative rounded-[24px] shrink-0 w-full" data-name="Container">
      <div aria-hidden="true" className="absolute border border-[#57646a] border-solid inset-0 pointer-events-none rounded-[24px] shadow-[0px_2px_0px_0px_black]" />
      <div className="flex flex-row items-center justify-center size-full">
        <div className="content-stretch flex items-center justify-center px-[17px] py-px relative size-full">
          <p className="font-['Roboto_Condensed:Bold',sans-serif] font-bold leading-[27.5px] relative shrink-0 text-[#798589] text-[26px] whitespace-nowrap">В рзработке</p>
        </div>
      </div>
    </div>
  );
}

function Frame22() {
  return (
    <div className="content-stretch flex flex-[1_0_0] flex-col h-full items-start justify-between min-h-px min-w-px relative">
      <Frame5 />
      <Container5 />
    </div>
  );
}

function Frame20() {
  return (
    <div className="content-stretch flex flex-[1_0_0] gap-[20px] items-start min-h-px min-w-px relative w-full">
      <Frame21 />
      <Frame22 />
    </div>
  );
}

function Link3() {
  return (
    <div className="bg-[#343e42] content-stretch flex flex-col h-[287px] items-center p-[20px] relative rounded-[24px] shrink-0 w-[572px]" data-name="Link">
      <div aria-hidden="true" className="absolute border-5 border-[#3d474a] border-solid inset-[-5px] pointer-events-none rounded-[29px]" />
      <Frame20 />
    </div>
  );
}

function Frame27() {
  return (
    <div className="content-stretch flex flex-col gap-[40px] items-center relative shrink-0 w-[572px]">
      <Link1 />
      <Link2 />
      <Link3 />
    </div>
  );
}

function IconContainer() {
  return (
    <div className="h-[25.999px] relative shrink-0 w-[17.333px]" data-name="Icon Container">
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

function Container6() {
  return (
    <div className="bg-[#465256] content-stretch flex items-center justify-center relative rounded-[16px] shrink-0 size-[48px]" data-name="Container">
      <IconContainer />
    </div>
  );
}

function TextContainer() {
  return (
    <div className="content-stretch flex flex-col h-full items-start justify-center relative shrink-0 text-[18px]" data-name="Text Container">
      <p className="font-['Roboto_Condensed:Bold',sans-serif] font-bold leading-[22.5px] relative shrink-0 text-[#f1f2fb] whitespace-nowrap">Недельные вызовы</p>
      <p className="font-['Roboto_Condensed:Regular',sans-serif] font-normal leading-[20px] relative shrink-0 text-[#798589] w-[240px]">Практические задания в Figma</p>
    </div>
  );
}

function HeaderContainer() {
  return (
    <div className="content-stretch flex gap-[20px] items-center relative shrink-0" data-name="Header Container">
      <Container6 />
      <div className="flex flex-row items-center self-stretch">
        <TextContainer />
      </div>
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

function Container8() {
  return (
    <div className="absolute content-stretch flex h-[53.538px] items-center justify-center left-[2.77px] top-[-0.69px] w-[59.077px]" data-name="Container">
      <p className="font-['Roboto_Condensed:Bold',sans-serif] font-bold leading-[15.231px] relative shrink-0 text-[#a6a6a6] text-[14px] whitespace-nowrap">0/10</p>
    </div>
  );
}

function Container7() {
  return (
    <div className="h-[59.077px] relative shrink-0 w-[60px]" data-name="Container">
      <div className="absolute flex h-[55.385px] items-center justify-center left-[2.77px] top-[-1.62px] w-[59.077px]" style={{ "--transform-inner-width": "1200", "--transform-inner-height": "19" } as React.CSSProperties}>
        <div className="-rotate-90 flex-none">
          <Svg />
        </div>
      </div>
      <Container8 />
    </div>
  );
}

function ProgressContainer() {
  return (
    <div className="content-stretch flex gap-[30px] h-[54px] items-center relative shrink-0" data-name="Progress Container">
      <Container7 />
      <div className="flex items-center justify-center relative shrink-0">
        <div className="-scale-y-100 flex-none rotate-180">
          <div className="h-[14px] relative w-[7px]">
            <div className="absolute inset-[-7.5%_-15%_-7.5%_1.57%]">
              <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 7.9402 16.1">
                <path d={svgPaths.p17b59b00} id="Vector 5" stroke="var(--stroke-0, #798589)" strokeLinecap="round" strokeWidth="2.1" />
              </svg>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

function Link4() {
  return (
    <div className="bg-[#343e42] h-[102px] relative rounded-[24px] shrink-0 w-full" data-name="Link">
      <div className="flex flex-row items-center size-full">
        <div className="content-stretch flex items-center justify-between p-[20px] relative size-full">
          <HeaderContainer />
          <ProgressContainer />
        </div>
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

function ProgressBarContainer() {
  return (
    <div className="content-stretch flex flex-col h-[10px] items-start justify-center relative shrink-0 w-full" data-name="Progress Bar Container">
      <ProgressRoot1 />
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

function Frame29() {
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

function Frame28() {
  return (
    <div className="absolute h-[32.826px] left-[2.89px] top-[1.9px] w-[32.731px]">
      <Group />
    </div>
  );
}

function Frame31() {
  return (
    <div className="content-stretch flex h-[57px] items-center relative shrink-0">
      <div className="overflow-clip relative shrink-0 size-[26px]">
        <Frame28 />
      </div>
    </div>
  );
}

function XpProgressCard() {
  return (
    <div className="bg-[#343e42] flex-[1_0_0] min-h-px min-w-px relative rounded-[24px] self-stretch" data-name="XP_ProgressCard">
      <div className="flex flex-col items-center size-full">
        <div className="content-stretch flex flex-col items-center justify-between p-[20px] relative size-full">
          <div className="content-stretch flex flex-col gap-[5px] items-start relative shrink-0 w-full" data-name="Header">
            <p className="font-['Roboto_Condensed:Bold',sans-serif] font-bold leading-[20px] relative shrink-0 text-[#f1f2fb] text-[18px] whitespace-nowrap">До открытия лиги</p>
            <XpContainer />
          </div>
          <div className="content-stretch flex gap-[20px] h-[53px] items-end relative shrink-0 w-full">
            <Frame29 />
            <Frame31 />
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

function ProgressIndicator2() {
  return <div className="bg-gradient-to-b from-[#ff6b21] h-[10px] rounded-[24px] shrink-0 to-[#994014] w-[219px]" data-name="Progress.Indicator" />;
}

function ProgressRoot2() {
  return (
    <div className="content-stretch flex flex-col h-[10px] items-start overflow-clip pl-[-111.75px] pr-[111.75px] relative rounded-[16777200px] shrink-0 w-full" data-name="Progress.Root" style={{ backgroundImage: "linear-gradient(178.396deg, rgb(44, 52, 56) 14.367%, rgb(46, 57, 62) 147.74%)" }}>
      <ProgressIndicator2 />
    </div>
  );
}

function ProgressBarContainer1() {
  return (
    <div className="content-stretch flex flex-col h-[10px] items-start justify-center relative shrink-0 w-full" data-name="Progress Bar Container">
      <ProgressRoot2 />
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

function Frame30() {
  return (
    <div className="content-stretch flex flex-[1_0_0] flex-col gap-[8px] items-start min-h-px min-w-px relative">
      <ProgressBarContainer1 />
      <LabelsContainer1 />
    </div>
  );
}

function Frame39() {
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

function Container9() {
  return (
    <div className="bg-[#343e42] flex-[1_0_0] h-[152px] min-h-px min-w-px relative rounded-[24px]" data-name="Container">
      <div className="flex flex-col items-center size-full">
        <div className="content-stretch flex flex-col items-center justify-between p-[20px] relative size-full">
          <div className="content-stretch flex flex-col gap-[5px] items-start relative shrink-0 w-full" data-name="Header">
            <p className="font-['Roboto_Condensed:Bold',sans-serif] font-bold leading-[20px] relative shrink-0 text-[#f1f2fb] text-[18px] whitespace-nowrap">Задание дня</p>
            <XpContainer1 />
          </div>
          <div className="content-stretch flex gap-[20px] h-[53px] items-end relative shrink-0 w-full">
            <Frame30 />
            <Frame39 />
          </div>
        </div>
      </div>
    </div>
  );
}

function CardsContainer() {
  return (
    <div className="content-stretch flex gap-[20px] items-start relative shrink-0 w-full" data-name="Cards Container">
      <XpProgressCard />
      <Container9 />
    </div>
  );
}

function MainContainer() {
  return (
    <div className="content-stretch flex flex-col gap-[22px] items-start relative shrink-0 w-[489px]" data-name="Main Container">
      <Link4 />
      <CardsContainer />
    </div>
  );
}

function Frame38() {
  return (
    <div className="content-stretch flex gap-[36px] items-start relative shrink-0">
      <Frame27 />
      <MainContainer />
    </div>
  );
}

function Frame37() {
  return (
    <div className="-translate-x-1/2 absolute content-stretch flex flex-col gap-[36px] items-start left-[calc(50%+115.96px)] top-[20px] w-[1096.915px]">
      <Header />
      <Frame38 />
    </div>
  );
}

export default function Uxeo() {
  return (
    <div className="relative size-full" data-name="UXEO - приложение" style={{ backgroundImage: "linear-gradient(163.733deg, rgb(44, 52, 56) 14.367%, rgb(46, 57, 62) 147.74%)" }}>
      <Frame36 />
      <Frame37 />
    </div>
  );
}