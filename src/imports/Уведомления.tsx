import svgPaths from "./svg-6p9skem17z";
import imgImageColor from "figma:asset/848cc9d9d2ee375b005fbdca2522ab616019dc08.png";

function Container() {
  return (
    <div className="bg-[#404d52] content-stretch flex h-full items-center justify-center px-[20px] relative rounded-[13.846px] shrink-0" data-name="Container">
      <p className="font-['Roboto_Condensed:Bold',sans-serif] font-bold leading-[27.5px] relative shrink-0 text-[18px] text-[rgba(244,245,252,0.7)] whitespace-nowrap">Все</p>
    </div>
  );
}

function Container2() {
  return (
    <div className="bg-[#fe6b21] h-[24px] relative rounded-[12296925px] shrink-0" data-name="Container">
      <div className="bg-clip-padding border-0 border-[transparent] border-solid content-stretch flex h-full items-center justify-center px-[6px] relative">
        <p className="font-['Inter:Extra_Bold',sans-serif] font-extrabold leading-[15.392px] not-italic relative shrink-0 text-[#2c3538] text-[12px] whitespace-nowrap">2</p>
      </div>
    </div>
  );
}

function Container1() {
  return (
    <div className="bg-[#323d41] content-stretch flex gap-[10px] h-full items-center justify-center px-[20px] relative rounded-[13.846px] shrink-0" data-name="Container">
      <p className="font-['Roboto_Condensed:Bold',sans-serif] font-bold leading-[27.5px] relative shrink-0 text-[18px] text-[rgba(244,245,252,0.7)] whitespace-nowrap">Непрочитанные</p>
      <Container2 />
    </div>
  );
}

function Icon() {
  return (
    <div className="absolute inset-[15.72%_-3.5%_15.71%_-1.18%]" data-name="Icon">
      <svg className="absolute block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 13.6079 12.3425">
        <g id="Icon">
          <path clipRule="evenodd" d={svgPaths.p3bc0b780} fill="var(--fill-0, #BABEC4)" fillRule="evenodd" id="Vector" />
        </g>
      </svg>
    </div>
  );
}

function FreeIconWarning() {
  return (
    <div className="h-[18px] relative shrink-0 w-[13px]" data-name="free-icon-warning-8750891 1">
      <div className="bg-clip-padding border-0 border-[transparent] border-solid relative size-full">
        <Icon />
      </div>
    </div>
  );
}

function Container3() {
  return (
    <div className="bg-[#323d41] content-stretch flex gap-[10px] h-full items-center justify-center px-[20px] relative rounded-[13.846px] shrink-0" data-name="Container">
      <p className="font-['Roboto_Condensed:Bold',sans-serif] font-bold leading-[27.5px] relative shrink-0 text-[18px] text-[rgba(244,245,252,0.7)] whitespace-nowrap">Требуют действия</p>
      <FreeIconWarning />
    </div>
  );
}

function Frame10() {
  return (
    <div className="content-stretch flex gap-[15px] h-[40px] items-start relative shrink-0 w-[572px]">
      <Container />
      <Container1 />
      <Container3 />
    </div>
  );
}

function Frame28() {
  return (
    <div className="content-stretch flex flex-col gap-[20px] items-start relative shrink-0">
      <Frame10 />
      <div className="h-0 relative shrink-0 w-[563.5px]">
        <div className="absolute inset-[-1px_-0.18%]">
          <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 565.5 2">
            <path d="M1 1H564.5" id="Vector 231" stroke="var(--stroke-0, #404D52)" strokeLinecap="round" strokeWidth="2" />
          </svg>
        </div>
      </div>
    </div>
  );
}

function Frame12() {
  return (
    <div className="h-[25px] relative shrink-0 w-[11px]">
      <div className="absolute inset-[0_-9.09%_-4%_-9.09%]">
        <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 13 26">
          <g id="Frame 481469">
            <circle cx="6.5" cy="19.5" fill="var(--fill-0, #FE6B21)" id="Ellipse 361" r="6.5" />
          </g>
        </svg>
      </div>
    </div>
  );
}

function Container6() {
  return (
    <div className="content-stretch flex items-center justify-center relative shrink-0" data-name="Container">
      <p className="font-['Roboto_Condensed:Medium',sans-serif] font-medium leading-[20px] relative shrink-0 text-[#798589] text-[16px] whitespace-nowrap">9:14</p>
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

function Frame20() {
  return (
    <div className="content-stretch flex items-start justify-between relative shrink-0 w-full">
      <p className="font-['Roboto_Condensed:Bold',sans-serif] font-bold leading-[0] relative shrink-0 text-[#f4f5fc] text-[0px] whitespace-nowrap">
        <span className="leading-[35px] text-[28px]">{`Проверена ваша работа `}</span>
        <span className="leading-[35px] text-[24px]">📝</span>
      </p>
      <Container5 />
    </div>
  );
}

function Frame3() {
  return (
    <div className="content-stretch flex flex-col gap-[9px] items-start relative shrink-0 w-full">
      <Frame20 />
      <p className="font-['Roboto_Condensed:Regular',sans-serif] font-normal leading-[22px] opacity-80 relative shrink-0 text-[#f1f7fb] text-[18px] w-[424px]">Мы оставили фидбек по заданию «Интерфейс приложения здоровья»</p>
    </div>
  );
}

function Container8() {
  return <div className="h-[20px] shrink-0 w-[29px]" data-name="Container" />;
}

function Frame26() {
  return (
    <div className="h-[14px] relative shrink-0 w-[6px]">
      <div className="absolute inset-[0_0_0_-12.5%]">
        <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 6.75 14">
          <g id="Frame 481483">
            <path d={svgPaths.p8df6480} id="Vector 5" stroke="var(--stroke-0, #91989B)" strokeLinecap="round" strokeWidth="1.5" />
          </g>
        </svg>
      </div>
    </div>
  );
}

function Frame13() {
  return (
    <div className="content-stretch flex gap-[7px] items-center justify-end relative shrink-0">
      <p className="font-['Roboto_Condensed:Regular',sans-serif] font-normal leading-[22px] opacity-80 relative shrink-0 text-[#f1f7fb] text-[18px] whitespace-nowrap">Смотреть фидбек</p>
      <Frame26 />
    </div>
  );
}

function Container7() {
  return (
    <div className="content-center flex flex-wrap gap-y-[5px] items-center justify-between relative shrink-0 w-full" data-name="Container">
      <Container8 />
      <Frame13 />
    </div>
  );
}

function Container4() {
  return (
    <div className="content-stretch flex flex-col gap-[20px] items-start relative self-stretch shrink-0 w-[505px]" data-name="Container">
      <Frame3 />
      <Container7 />
    </div>
  );
}

function Frame11() {
  return (
    <div className="content-stretch flex gap-[16px] items-start justify-center relative shrink-0 w-full">
      <Frame12 />
      <Container4 />
    </div>
  );
}

function Link() {
  return (
    <div className="bg-[#404d52] content-stretch flex flex-col items-center p-[20px] relative rounded-[20px] shrink-0 w-[572px]" data-name="Link">
      <Frame11 />
    </div>
  );
}

function Frame19() {
  return (
    <div className="content-stretch flex flex-col gap-[15px] items-start relative shrink-0">
      <p className="font-['Roboto_Condensed:Medium',sans-serif] font-medium leading-[20px] relative shrink-0 text-[#798589] text-[16px] whitespace-nowrap">Сегодня</p>
      <Link />
    </div>
  );
}

function Frame17() {
  return (
    <div className="h-[25px] relative shrink-0 w-[11px]">
      <div className="absolute inset-[0_-9.09%_-4%_-9.09%]">
        <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 13 26">
          <g id="Frame 481469">
            <circle cx="6.5" cy="19.5" fill="var(--fill-0, #2D3539)" id="Ellipse 361" r="6.5" />
          </g>
        </svg>
      </div>
    </div>
  );
}

function Group1() {
  return (
    <div className="absolute inset-[52.49%_49.59%_23.03%_22.25%]" data-name="Group">
      <svg className="absolute block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 6.19582 5.38517">
        <g id="Group">
          <path d={svgPaths.p27e91100} fill="var(--fill-0, #F89580)" id="Vector" />
        </g>
      </svg>
    </div>
  );
}

function Group2() {
  return (
    <div className="absolute inset-[57.03%_54.44%_0_2.59%]" data-name="Group">
      <svg className="absolute block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 9.45353 9.45353">
        <g id="Group">
          <path d={svgPaths.p18040200} fill="var(--fill-0, #01D0FB)" id="Vector" />
        </g>
      </svg>
    </div>
  );
}

function Group3() {
  return (
    <div className="absolute inset-[57.03%_54.44%_11.68%_2.59%]" data-name="Group">
      <svg className="absolute block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 9.45353 6.88425">
        <g id="Group">
          <path d={svgPaths.p23d13072} fill="var(--fill-0, #01C0FA)" id="Vector" />
        </g>
      </svg>
    </div>
  );
}

function Group4() {
  return (
    <div className="absolute inset-[0_2.59%_18.27%_15.68%]" data-name="Group">
      <svg className="absolute block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 17.9807 17.9802">
        <g id="Group">
          <g id="Group_2">
            <path d={svgPaths.p10edc8d0} fill="var(--fill-0, #FFCEBF)" id="Vector" />
            <g id="Group_3">
              <path d={svgPaths.p8845200} fill="var(--fill-0, #F4F5FC)" id="Vector_2" />
            </g>
            <path d={svgPaths.p3bdfb480} fill="var(--fill-0, #FD6930)" id="Vector_3" />
            <g id="Group_4">
              <path d={svgPaths.p2d67ec00} fill="var(--fill-0, #FFD15B)" id="Vector_4" />
              <path d={svgPaths.p22eb1100} fill="var(--fill-0, #FFD15B)" id="Vector_5" />
            </g>
            <g id="Group_5">
              <path d={svgPaths.p1e1b42c0} fill="var(--fill-0, #FFC344)" id="Vector_6" />
              <path d={svgPaths.p1504d180} fill="var(--fill-0, #FFC344)" id="Vector_7" />
            </g>
            <g id="Group_6">
              <path d={svgPaths.p37751500} fill="var(--fill-0, #EF4424)" id="Vector_8" />
            </g>
          </g>
          <g id="Group_7">
            <path d={svgPaths.pc3b000} fill="var(--fill-0, #FEB137)" id="Vector_9" />
            <path d={svgPaths.p32a11f30} fill="var(--fill-0, #FEB137)" id="Vector_10" />
            <path d={svgPaths.p27617200} fill="var(--fill-0, #FEB137)" id="Vector_11" />
          </g>
          <path d={svgPaths.p2d4fba00} fill="var(--fill-0, #FFB09E)" id="Vector_12" />
          <g id="Group_8">
            <path d={svgPaths.p3aea4880} fill="var(--fill-0, #E1D3CE)" id="Vector_13" />
          </g>
          <g id="Group_9">
            <path d={svgPaths.p1eb3800} fill="var(--fill-0, #CDBFBA)" id="Vector_14" />
          </g>
        </g>
      </svg>
    </div>
  );
}

function Group5() {
  return (
    <div className="absolute inset-[21.94%_30.31%_61.84%_54.27%]" data-name="Group">
      <svg className="absolute block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 3.39281 3.57003">
        <g id="Group">
          <path d={svgPaths.p39665680} fill="var(--fill-0, #F89580)" id="Vector" />
        </g>
      </svg>
    </div>
  );
}

function Group6() {
  return (
    <div className="absolute inset-[40.53%_15.31%_40.58%_68.37%]" data-name="Group">
      <svg className="absolute block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 3.59211 4.15479">
        <g id="Group">
          <path d={svgPaths.p34dfda00} fill="var(--fill-0, #F89580)" id="Vector" />
        </g>
      </svg>
    </div>
  );
}

function Group7() {
  return (
    <div className="absolute inset-[23.84%_34.56%_43.35%_23.43%]" data-name="Group">
      <svg className="absolute block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 9.24198 7.2183">
        <g id="Group">
          <path d={svgPaths.p30d53000} fill="var(--fill-0, #FFCEBF)" id="Vector" />
        </g>
      </svg>
    </div>
  );
}

function Group9() {
  return (
    <div className="absolute inset-[23.84%_34.57%_52.1%_23.43%]" data-name="Group">
      <svg className="absolute block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 9.24165 5.29393">
        <g id="Group">
          <path d={svgPaths.p11d6b880} fill="var(--fill-0, #FFB09E)" id="Vector" />
        </g>
      </svg>
    </div>
  );
}

function Group8() {
  return (
    <div className="absolute contents inset-[23.84%_34.57%_52.1%_23.43%]" data-name="Group">
      <Group9 />
    </div>
  );
}

function Group() {
  return (
    <div className="absolute contents inset-[0_2.59%]" data-name="Group">
      <div className="absolute inset-[52.36%_49.45%_19.52%_22.11%]" data-name="Vector">
        <svg className="absolute block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 6.25728 6.18698">
          <path d={svgPaths.p24fc2470} fill="var(--fill-0, #FFB09E)" id="Vector" />
        </svg>
      </div>
      <Group1 />
      <Group2 />
      <Group3 />
      <div className="absolute inset-[38.59%_29.4%_25.05%_30.17%]" data-name="Vector">
        <svg className="absolute block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 8.89556 7.99918">
          <path d={svgPaths.p2773f800} fill="var(--fill-0, #FFB09E)" id="Vector" />
        </svg>
      </div>
      <Group4 />
      <div className="absolute inset-[15.34%_39.65%_70.82%_44.7%]" data-name="Vector">
        <svg className="absolute block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 3.4436 3.04576">
          <path d={svgPaths.p3a5b1c00} fill="var(--fill-0, #F89580)" id="Vector" />
        </svg>
      </div>
      <Group5 />
      <div className="absolute inset-[30.34%_21.88%_50.78%_62.67%]" data-name="Vector">
        <svg className="absolute block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 3.39844 4.15462">
          <path d={svgPaths.p2bbdc980} fill="var(--fill-0, #F89580)" id="Vector" />
        </svg>
      </div>
      <Group6 />
      <Group7 />
      <Group8 />
    </div>
  );
}

function FreeIconPencil() {
  return (
    <div className="overflow-clip relative shrink-0 size-[22px]" data-name="free-icon-pencil-6747048 1">
      <Group />
    </div>
  );
}

function Frame23() {
  return (
    <div className="content-stretch flex gap-[9px] items-center relative shrink-0">
      <FreeIconPencil />
      <p className="font-['Roboto_Condensed:Regular',sans-serif] font-normal leading-[35px] relative shrink-0 text-[#f1f7fb] text-[28px] whitespace-nowrap">недельные вызовы</p>
    </div>
  );
}

function Frame22() {
  return (
    <div className="content-stretch flex gap-[12px] items-center relative shrink-0">
      <p className="font-['Roboto_Condensed:Regular',sans-serif] font-normal leading-[35px] relative shrink-0 text-[#f4f5fc] text-[28px] whitespace-nowrap">{`Новые `}</p>
      <Frame23 />
    </div>
  );
}

function Container12() {
  return (
    <div className="content-stretch flex items-center justify-center relative shrink-0" data-name="Container">
      <p className="font-['Roboto_Condensed:Medium',sans-serif] font-medium leading-[20px] relative shrink-0 text-[#798589] text-[16px] whitespace-nowrap">18:15</p>
    </div>
  );
}

function Container11() {
  return (
    <div className="content-stretch flex items-center relative shrink-0" data-name="Container">
      <Container12 />
    </div>
  );
}

function Frame21() {
  return (
    <div className="content-stretch flex items-start justify-between relative shrink-0 w-full">
      <Frame22 />
      <Container11 />
    </div>
  );
}

function Frame4() {
  return (
    <div className="content-stretch flex flex-col gap-[9px] items-start relative shrink-0 w-full">
      <Frame21 />
      <p className="font-['Roboto_Condensed:Regular',sans-serif] font-normal leading-[22px] opacity-80 relative shrink-0 text-[#f1f7fb] text-[18px] w-full">Доступны 3 новых задания</p>
    </div>
  );
}

function Container10() {
  return (
    <div className="content-stretch flex flex-col items-start relative self-stretch shrink-0 w-[505px]" data-name="Container">
      <Frame4 />
    </div>
  );
}

function Frame18() {
  return (
    <div className="content-stretch flex h-[66px] items-start justify-center relative shrink-0 w-full">
      <Container10 />
    </div>
  );
}

function Container14() {
  return <div className="h-[20px] shrink-0 w-[29px]" data-name="Container" />;
}

function Frame24() {
  return (
    <div className="content-stretch flex gap-[7px] items-center justify-end relative shrink-0">
      <p className="font-['Roboto_Condensed:Regular',sans-serif] font-normal leading-[22px] opacity-80 relative shrink-0 text-[#f1f7fb] text-[18px] whitespace-nowrap">Смотреть задания</p>
      <div className="flex items-center justify-center relative shrink-0">
        <div className="-scale-y-100 flex-none rotate-180">
          <div className="h-[12px] relative w-[6px]">
            <div className="absolute inset-[-6.25%_-12.5%_-6.25%_6.83%]">
              <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 6.3402 13.5">
                <path d={svgPaths.pbe14380} id="Vector 5" stroke="var(--stroke-0, #91989B)" strokeLinecap="round" strokeWidth="1.5" />
              </svg>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

function Container13() {
  return (
    <div className="content-center flex flex-wrap gap-y-[5px] items-center justify-between relative shrink-0 w-full" data-name="Container">
      <Container14 />
      <Frame24 />
    </div>
  );
}

function Container9() {
  return (
    <div className="content-stretch flex flex-col gap-[20px] items-start relative shrink-0 w-[505px]" data-name="Container">
      <Frame18 />
      <Container13 />
    </div>
  );
}

function Frame14() {
  return (
    <div className="content-stretch flex gap-[16px] items-start justify-center relative shrink-0 w-full">
      <Frame17 />
      <Container9 />
    </div>
  );
}

function Link1() {
  return (
    <div className="bg-[#343e42] content-stretch flex flex-col items-center p-[20px] relative rounded-[20px] shrink-0 w-[572px]" data-name="Link">
      <Frame14 />
    </div>
  );
}

function Frame29() {
  return (
    <div className="h-[25px] relative shrink-0 w-[11px]">
      <div className="absolute inset-[0_-9.09%_-4%_-9.09%]">
        <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 13 26">
          <g id="Frame 481469">
            <circle cx="6.5" cy="19.5" fill="var(--fill-0, #2D3539)" id="Ellipse 361" r="6.5" />
          </g>
        </svg>
      </div>
    </div>
  );
}

function Frame31() {
  return (
    <div className="content-stretch flex gap-[9px] items-center relative shrink-0">
      <p className="font-['Roboto_Condensed:Regular',sans-serif] font-normal leading-[35px] relative shrink-0 text-[#f4f5fc] text-[28px] whitespace-nowrap">{`Вы получили `}</p>
      <div className="h-[22.727px] relative shrink-0 w-[20px]" data-name="Vector">
        <svg className="absolute block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 20 22.7273">
          <path d={svgPaths.p1a019900} fill="url(#paint0_linear_203_722)" id="Vector" />
          <defs>
            <linearGradient gradientUnits="userSpaceOnUse" id="paint0_linear_203_722" x1="8.41731" x2="-2.65802" y1="9.74135" y2="25.2763">
              <stop stopColor="#FF6B21" />
              <stop offset="1" stopColor="#994014" />
            </linearGradient>
          </defs>
        </svg>
      </div>
      <p className="bg-clip-text font-['Roboto_Condensed:Regular',sans-serif] font-normal leading-[35px] relative shrink-0 text-[28px] text-[transparent] whitespace-nowrap" style={{ backgroundImage: "linear-gradient(193.285deg, rgb(255, 107, 33) 48.665%, rgb(153, 64, 20) 112.02%)" }}>
        1250 XP
      </p>
    </div>
  );
}

function Container17() {
  return (
    <div className="content-stretch flex items-center justify-center relative shrink-0" data-name="Container">
      <p className="font-['Roboto_Condensed:Medium',sans-serif] font-medium leading-[20px] relative shrink-0 text-[#798589] text-[16px] whitespace-nowrap">17:15</p>
    </div>
  );
}

function Container16() {
  return (
    <div className="content-stretch flex items-center relative shrink-0" data-name="Container">
      <Container17 />
    </div>
  );
}

function Frame30() {
  return (
    <div className="content-stretch flex items-start justify-between relative shrink-0 w-full">
      <Frame31 />
      <Container16 />
    </div>
  );
}

function Frame5() {
  return (
    <div className="content-stretch flex flex-col gap-[9px] items-start relative shrink-0 w-full">
      <Frame30 />
      <p className="font-['Roboto_Condensed:Regular',sans-serif] font-normal leading-[22px] opacity-80 relative shrink-0 text-[#f1f7fb] text-[18px] w-full">Отличная работа!</p>
    </div>
  );
}

function Container15() {
  return (
    <div className="content-stretch flex flex-col items-start relative self-stretch shrink-0 w-[505px]" data-name="Container">
      <Frame5 />
    </div>
  );
}

function Frame25() {
  return (
    <div className="content-stretch flex gap-[16px] items-start justify-center relative shrink-0 w-full">
      <Frame29 />
      <Container15 />
    </div>
  );
}

function Link2() {
  return (
    <div className="bg-[#343e42] content-stretch flex flex-col items-center pb-[30px] pt-[20px] px-[20px] relative rounded-[20px] shrink-0 w-[572px]" data-name="Link">
      <Frame25 />
    </div>
  );
}

function Frame15() {
  return (
    <div className="content-stretch flex flex-col gap-[21px] items-start relative shrink-0">
      <Link1 />
      <Link2 />
    </div>
  );
}

function Frame16() {
  return (
    <div className="content-stretch flex flex-col gap-[15px] items-start relative shrink-0">
      <p className="font-['Roboto_Condensed:Medium',sans-serif] font-medium leading-[20px] relative shrink-0 text-[#798589] text-[16px] whitespace-nowrap">Вчера</p>
      <Frame15 />
    </div>
  );
}

function Frame35() {
  return (
    <div className="h-[25px] relative shrink-0 w-[11px]">
      <div className="absolute inset-[0_-9.09%_-4%_-9.09%]">
        <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 13 26">
          <g id="Frame 481469">
            <circle cx="6.5" cy="19.5" fill="var(--fill-0, #FE6B21)" id="Ellipse 361" r="6.5" />
          </g>
        </svg>
      </div>
    </div>
  );
}

function Group10() {
  return (
    <div className="absolute h-[20.53px] left-0 top-0 w-[20.471px]">
      <svg className="absolute block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 20.471 20.5302">
        <g id="Group 481325">
          <path d={svgPaths.p359cf780} fill="var(--fill-0, #FF6B21)" id="Vector" />
          <path d={svgPaths.p16d99800} fill="var(--fill-0, #353E41)" id="Vector_2" />
          <path d={svgPaths.p34a48e00} fill="var(--fill-0, #2572D0)" id="Vector_3" />
          <path d={svgPaths.pf4bf00} fill="var(--fill-0, #2572D0)" id="Vector_4" />
          <path d={svgPaths.p188e5900} fill="var(--fill-0, #2572D0)" id="Vector_5" />
          <path d={svgPaths.p153f380} fill="var(--fill-0, #21589C)" id="Vector_6" />
          <path d={svgPaths.p1a98c700} fill="var(--fill-0, #353E41)" id="Vector_7" />
          <path d={svgPaths.p6195800} fill="var(--fill-0, #353E41)" id="Vector_8" />
          <path d={svgPaths.p32f38940} fill="var(--fill-0, #2572D0)" id="Vector_9" />
          <path d={svgPaths.p3a4d9100} fill="var(--fill-0, #2572D0)" id="Vector_10" />
          <path d={svgPaths.p2b17a480} fill="var(--fill-0, #353E41)" id="Vector_11" />
        </g>
      </svg>
    </div>
  );
}

function Frame1() {
  return (
    <div className="absolute h-[20.461px] left-[0.75px] top-[0.42px] w-[20.402px]">
      <Group10 />
    </div>
  );
}

function Frame() {
  return (
    <div className="overflow-clip relative shrink-0 size-[22px]">
      <Frame1 />
    </div>
  );
}

function Frame2() {
  return (
    <div className="content-stretch flex items-center relative shrink-0">
      <Frame />
    </div>
  );
}

function Frame38() {
  return (
    <div className="content-stretch flex gap-[9px] items-center relative shrink-0">
      <Frame2 />
      <p className="font-['Roboto_Condensed:Bold',sans-serif] font-bold leading-[35px] relative shrink-0 text-[#f4f5fc] text-[28px] whitespace-nowrap">лигу Silver</p>
    </div>
  );
}

function Frame37() {
  return (
    <div className="content-stretch flex gap-[9px] items-center relative shrink-0">
      <p className="font-['Roboto_Condensed:Bold',sans-serif] font-bold leading-[35px] relative shrink-0 text-[#f4f5fc] text-[28px] whitespace-nowrap">{`Вы перешли в `}</p>
      <Frame38 />
    </div>
  );
}

function Container21() {
  return (
    <div className="content-stretch flex items-center justify-center relative shrink-0" data-name="Container">
      <p className="font-['Roboto_Condensed:Medium',sans-serif] font-medium leading-[20px] relative shrink-0 text-[#798589] text-[16px] whitespace-nowrap">3 мар</p>
    </div>
  );
}

function Container20() {
  return (
    <div className="content-stretch flex items-center relative shrink-0" data-name="Container">
      <Container21 />
    </div>
  );
}

function Frame36() {
  return (
    <div className="content-stretch flex items-start justify-between relative shrink-0 w-full">
      <Frame37 />
      <Container20 />
    </div>
  );
}

function Frame6() {
  return (
    <div className="content-stretch flex flex-col gap-[9px] items-start relative shrink-0 w-full">
      <Frame36 />
      <p className="font-['Roboto_Condensed:Regular',sans-serif] font-normal leading-[22px] opacity-80 relative shrink-0 text-[#f1f7fb] text-[18px] w-full">Продолжайте обучение!</p>
    </div>
  );
}

function Container19() {
  return (
    <div className="content-stretch flex flex-col h-[66px] items-start relative shrink-0 w-[505px]" data-name="Container">
      <Frame6 />
    </div>
  );
}

function Container23() {
  return <div className="h-[20px] shrink-0 w-[29px]" data-name="Container" />;
}

function Frame40() {
  return (
    <div className="h-[14px] relative shrink-0 w-[6px]">
      <div className="absolute inset-[0_0_0_-12.5%]">
        <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 6.75 14">
          <g id="Frame 481483">
            <path d={svgPaths.p8df6480} id="Vector 5" stroke="var(--stroke-0, #91989B)" strokeLinecap="round" strokeWidth="1.5" />
          </g>
        </svg>
      </div>
    </div>
  );
}

function Frame39() {
  return (
    <div className="content-stretch flex gap-[7px] items-center justify-end relative shrink-0">
      <p className="font-['Roboto_Condensed:Regular',sans-serif] font-normal leading-[22px] opacity-80 relative shrink-0 text-[#f1f7fb] text-[18px] whitespace-nowrap">Продолжить обучение</p>
      <Frame40 />
    </div>
  );
}

function Container22() {
  return (
    <div className="content-center flex flex-wrap gap-y-[5px] items-center justify-between relative shrink-0 w-full" data-name="Container">
      <Container23 />
      <Frame39 />
    </div>
  );
}

function Container18() {
  return (
    <div className="content-stretch flex flex-col gap-[20px] items-start relative shrink-0 w-[505px]" data-name="Container">
      <Container19 />
      <Container22 />
    </div>
  );
}

function Frame34() {
  return (
    <div className="content-stretch flex gap-[16px] items-start justify-center relative shrink-0 w-full">
      <Frame35 />
      <Container18 />
    </div>
  );
}

function Link3() {
  return (
    <div className="bg-[#404d52] content-stretch flex flex-col items-center p-[20px] relative rounded-[20px] shrink-0 w-[572px]" data-name="Link">
      <Frame34 />
    </div>
  );
}

function Frame42() {
  return (
    <div className="h-[25px] relative shrink-0 w-[11px]">
      <div className="absolute inset-[0_-9.09%_-4%_-9.09%]">
        <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 13 26">
          <g id="Frame 481469">
            <circle cx="6.5" cy="19.5" fill="var(--fill-0, #2D3539)" id="Ellipse 361" r="6.5" />
          </g>
        </svg>
      </div>
    </div>
  );
}

function FireIconGroup() {
  return (
    <div className="h-[24.432px] relative shrink-0 w-[16.765px]" data-name="Fire Icon Group">
      <svg className="absolute block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 16.7655 24.4324">
        <g id="Fire Icon Group">
          <path d={svgPaths.p33094f0} fill="url(#paint0_linear_203_703)" id="Vector" />
        </g>
        <defs>
          <linearGradient gradientUnits="userSpaceOnUse" id="paint0_linear_203_703" x1="8.38273" x2="8.38273" y1="0" y2="24.4324">
            <stop stopColor="#FFB121" />
            <stop offset="1" stopColor="#BB8116" />
          </linearGradient>
        </defs>
      </svg>
    </div>
  );
}

function Frame45() {
  return (
    <div className="content-stretch flex gap-[9px] items-center relative shrink-0">
      <FireIconGroup />
      <p className="font-['Roboto_Condensed:Regular',sans-serif] font-normal leading-[35px] relative shrink-0 text-[#f4f5fc] text-[28px] whitespace-nowrap">сегодня</p>
    </div>
  );
}

function Frame44() {
  return (
    <div className="content-stretch flex gap-[9px] items-center relative shrink-0">
      <p className="font-['Roboto_Condensed:Regular',sans-serif] font-normal leading-[35px] relative shrink-0 text-[#f4f5fc] text-[28px] whitespace-nowrap">Вы не занимались</p>
      <Frame45 />
    </div>
  );
}

function Container26() {
  return (
    <div className="content-stretch flex items-center justify-center relative shrink-0" data-name="Container">
      <p className="font-['Roboto_Condensed:Medium',sans-serif] font-medium leading-[20px] relative shrink-0 text-[#798589] text-[16px] whitespace-nowrap">3 мар</p>
    </div>
  );
}

function Container25() {
  return (
    <div className="content-stretch flex items-center relative shrink-0" data-name="Container">
      <Container26 />
    </div>
  );
}

function Frame43() {
  return (
    <div className="content-stretch flex items-start justify-between relative shrink-0 w-full">
      <Frame44 />
      <Container25 />
    </div>
  );
}

function Frame7() {
  return (
    <div className="content-stretch flex flex-col gap-[9px] items-start relative shrink-0 w-full">
      <Frame43 />
      <p className="font-['Roboto_Condensed:Regular',sans-serif] font-normal leading-[22px] opacity-80 relative shrink-0 text-[#f1f7fb] text-[18px] w-full">Серия из 5 дней может прерваться</p>
    </div>
  );
}

function Container24() {
  return (
    <div className="content-stretch flex flex-col items-start relative self-stretch shrink-0 w-[505px]" data-name="Container">
      <Frame7 />
    </div>
  );
}

function Frame41() {
  return (
    <div className="content-stretch flex gap-[16px] items-start justify-center relative shrink-0 w-full">
      <Frame42 />
      <Container24 />
    </div>
  );
}

function Link4() {
  return (
    <div className="bg-[#343e42] content-stretch flex flex-col items-center pb-[30px] pt-[20px] px-[20px] relative rounded-[20px] shrink-0 w-[572px]" data-name="Link">
      <Frame41 />
    </div>
  );
}

function Frame47() {
  return (
    <div className="h-[25px] relative shrink-0 w-[11px]">
      <div className="absolute inset-[0_-9.09%_-4%_-9.09%]">
        <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 13 26">
          <g id="Frame 481469">
            <circle cx="6.5" cy="19.5" fill="var(--fill-0, #2D3539)" id="Ellipse 361" r="6.5" />
          </g>
        </svg>
      </div>
    </div>
  );
}

function Frame50() {
  return <div className="h-[35px] shrink-0 w-0" />;
}

function Frame49() {
  return (
    <div className="content-stretch flex gap-[9px] items-center relative shrink-0">
      <p className="font-['Roboto_Condensed:Regular',sans-serif] font-normal leading-[32px] relative shrink-0 text-[#f4f5fc] text-[28px] w-[486px]">{`Доступен новый модуль UX-исследования `}</p>
      <Frame50 />
    </div>
  );
}

function Container29() {
  return (
    <div className="content-stretch flex items-center justify-center relative shrink-0" data-name="Container">
      <p className="font-['Roboto_Condensed:Medium',sans-serif] font-medium leading-[20px] relative shrink-0 text-[#798589] text-[16px] whitespace-nowrap">2 мар</p>
    </div>
  );
}

function Container28() {
  return (
    <div className="content-stretch flex items-center relative shrink-0" data-name="Container">
      <Container29 />
    </div>
  );
}

function Frame48() {
  return (
    <div className="content-stretch flex items-start justify-between relative shrink-0 w-full">
      <Frame49 />
      <Container28 />
    </div>
  );
}

function Frame8() {
  return (
    <div className="content-stretch flex flex-col items-start relative shrink-0 w-full">
      <Frame48 />
    </div>
  );
}

function Frame52() {
  return (
    <div className="bg-[#404d52] content-stretch flex flex-col items-start px-[8px] py-[12px] relative rounded-[10px] shrink-0 size-[46px]">
      <div className="flex h-[22px] items-center justify-center relative shrink-0 w-[30px]" style={{ "--transform-inner-width": "1200", "--transform-inner-height": "19" } as React.CSSProperties}>
        <div className="-rotate-90 flex-none">
          <div className="h-[30px] relative w-[22px]" data-name="image_color">
            <div className="absolute inset-0 overflow-hidden pointer-events-none">
              <img alt="" className="absolute h-[100.81%] left-[-5.82%] max-w-none top-[-0.4%] w-[111.64%]" src={imgImageColor} />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

function Frame51() {
  return (
    <div className="content-stretch flex items-end relative shrink-0 w-[263.5px]">
      <Frame52 />
    </div>
  );
}

function Frame53() {
  return (
    <div className="content-stretch flex gap-[7px] items-center justify-end relative shrink-0">
      <p className="font-['Roboto_Condensed:Regular',sans-serif] font-normal leading-[22px] opacity-80 relative shrink-0 text-[#f1f7fb] text-[18px] whitespace-nowrap">Начать модуль</p>
      <div className="flex items-center justify-center relative shrink-0">
        <div className="-scale-y-100 flex-none rotate-180">
          <div className="h-[12px] relative w-[6px]">
            <div className="absolute inset-[-6.25%_-12.5%_-6.25%_6.83%]">
              <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 6.3402 13.5">
                <path d={svgPaths.pbe14380} id="Vector 5" stroke="var(--stroke-0, #91989B)" strokeLinecap="round" strokeWidth="1.5" />
              </svg>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

function Container30() {
  return (
    <div className="content-end flex flex-wrap gap-y-[5px] items-end justify-between relative shrink-0 w-full" data-name="Container">
      <Frame51 />
      <Frame53 />
    </div>
  );
}

function Container27() {
  return (
    <div className="content-stretch flex flex-col gap-[20px] items-start relative shrink-0 w-[505px]" data-name="Container">
      <Frame8 />
      <Container30 />
    </div>
  );
}

function Frame46() {
  return (
    <div className="content-stretch flex gap-[16px] items-start justify-center relative shrink-0 w-full">
      <Frame47 />
      <Container27 />
    </div>
  );
}

function Link5() {
  return (
    <div className="bg-[#343e42] content-stretch flex flex-col items-center p-[20px] relative rounded-[20px] shrink-0 w-[572px]" data-name="Link">
      <Frame46 />
    </div>
  );
}

function Frame55() {
  return (
    <div className="h-[25px] relative shrink-0 w-[11px]">
      <div className="absolute inset-[0_-9.09%_-4%_-9.09%]">
        <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 13 26">
          <g id="Frame 481469">
            <circle cx="6.5" cy="19.5" fill="var(--fill-0, #2D3539)" id="Ellipse 361" r="6.5" />
          </g>
        </svg>
      </div>
    </div>
  );
}

function Frame58() {
  return <div className="h-[35px] shrink-0 w-0" />;
}

function Frame57() {
  return (
    <div className="content-stretch flex gap-[9px] items-center relative shrink-0">
      <p className="font-['Roboto_Condensed:Regular',sans-serif] font-normal leading-[35px] relative shrink-0 text-[#f4f5fc] text-[28px] whitespace-nowrap">Вы начали задание</p>
      <div className="h-[22.727px] relative shrink-0 w-[20px]" data-name="Vector">
        <svg className="absolute block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 20 22.7273">
          <path d={svgPaths.p1a019900} fill="var(--fill-0, #F4F5FC)" id="Vector" />
        </svg>
      </div>
      <Frame58 />
    </div>
  );
}

function Container33() {
  return (
    <div className="content-stretch flex items-center justify-center relative shrink-0" data-name="Container">
      <p className="font-['Roboto_Condensed:Medium',sans-serif] font-medium leading-[20px] relative shrink-0 text-[#798589] text-[16px] whitespace-nowrap">2 мар</p>
    </div>
  );
}

function Container32() {
  return (
    <div className="content-stretch flex items-center relative shrink-0" data-name="Container">
      <Container33 />
    </div>
  );
}

function Frame56() {
  return (
    <div className="content-stretch flex items-start justify-between relative shrink-0 w-full">
      <Frame57 />
      <Container32 />
    </div>
  );
}

function Frame9() {
  return (
    <div className="content-stretch flex flex-col gap-[9px] items-start relative shrink-0 w-full">
      <Frame56 />
      <div className="font-['Roboto_Condensed:Regular',sans-serif] font-normal leading-[22px] opacity-80 relative shrink-0 text-[#f1f7fb] text-[18px] w-full">
        <p className="mb-0">«Интерфейс приложения здоровья».</p>
        <p>Не забудьте закончить его</p>
      </div>
    </div>
  );
}

function Container35() {
  return <div className="h-[20px] shrink-0 w-[29px]" data-name="Container" />;
}

function Frame59() {
  return (
    <div className="content-stretch flex gap-[7px] items-center justify-end relative shrink-0">
      <p className="font-['Roboto_Condensed:Regular',sans-serif] font-normal leading-[22px] opacity-80 relative shrink-0 text-[#f1f7fb] text-[18px] whitespace-nowrap">Продолжить задание</p>
      <div className="flex items-center justify-center relative shrink-0">
        <div className="-scale-y-100 flex-none rotate-180">
          <div className="h-[12px] relative w-[6px]">
            <div className="absolute inset-[-6.25%_-12.5%_-6.25%_6.83%]">
              <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 6.3402 13.5">
                <path d={svgPaths.pbe14380} id="Vector 5" stroke="var(--stroke-0, #91989B)" strokeLinecap="round" strokeWidth="1.5" />
              </svg>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

function Container34() {
  return (
    <div className="content-center flex flex-wrap gap-y-[5px] items-center justify-between relative shrink-0 w-full" data-name="Container">
      <Container35 />
      <Frame59 />
    </div>
  );
}

function Container31() {
  return (
    <div className="content-stretch flex flex-col gap-[20px] items-start relative self-stretch shrink-0 w-[505px]" data-name="Container">
      <Frame9 />
      <Container34 />
    </div>
  );
}

function Frame54() {
  return (
    <div className="content-stretch flex gap-[16px] items-start justify-center relative shrink-0 w-full">
      <Frame55 />
      <Container31 />
    </div>
  );
}

function Link6() {
  return (
    <div className="bg-[#343e42] content-stretch flex flex-col items-center p-[20px] relative rounded-[20px] shrink-0 w-[572px]" data-name="Link">
      <Frame54 />
    </div>
  );
}

function Frame33() {
  return (
    <div className="content-stretch flex flex-col gap-[20px] items-start relative shrink-0">
      <Link3 />
      <Link4 />
      <Link5 />
      <Link6 />
    </div>
  );
}

function Frame32() {
  return (
    <div className="content-stretch flex flex-col gap-[15px] items-start relative shrink-0">
      <p className="font-['Roboto_Condensed:Medium',sans-serif] font-medium leading-[20px] relative shrink-0 text-[#798589] text-[16px] whitespace-nowrap">Ранее</p>
      <Frame33 />
    </div>
  );
}

function Frame62() {
  return <div className="h-[25px] shrink-0 w-[11px]" />;
}

function Frame64() {
  return (
    <div className="content-stretch flex items-center relative shrink-0">
      <p className="font-['Roboto_Condensed:Regular',sans-serif] font-normal leading-[35px] relative shrink-0 text-[#798589] text-[28px] whitespace-nowrap">У вас пока нет уведомлений</p>
    </div>
  );
}

function Frame63() {
  return (
    <div className="content-stretch flex items-start relative shrink-0 w-full">
      <Frame64 />
    </div>
  );
}

function Container36() {
  return (
    <div className="content-stretch flex flex-col gap-[10px] items-start relative shrink-0 w-[505px]" data-name="Container">
      <Frame63 />
      <p className="font-['Roboto_Condensed:Regular',sans-serif] font-normal leading-[22px] opacity-80 relative shrink-0 text-[#798589] text-[18px] w-full">Начните обучение, и мы будем сообщать о прогрессе.</p>
    </div>
  );
}

function Frame61() {
  return (
    <div className="content-stretch flex gap-[16px] items-start relative shrink-0 w-full">
      <Frame62 />
      <Container36 />
    </div>
  );
}

function Link7() {
  return (
    <div className="content-stretch flex flex-col items-center pb-[30px] pt-[20px] px-[20px] relative rounded-[20px] shrink-0 w-[572px]" data-name="Link">
      <div aria-hidden="true" className="absolute border-2 border-[#465256] border-dashed inset-0 pointer-events-none rounded-[20px]" />
      <Frame61 />
    </div>
  );
}

function Frame60() {
  return (
    <div className="content-stretch flex flex-col items-start relative shrink-0">
      <Link7 />
    </div>
  );
}

function Frame27() {
  return (
    <div className="content-stretch flex flex-col gap-[37px] items-start relative shrink-0">
      <Frame19 />
      <Frame16 />
      <Frame32 />
      <Frame60 />
    </div>
  );
}

export default function Component() {
  return (
    <div className="content-stretch flex flex-col gap-[30px] items-start relative size-full" data-name="уведомления">
      <Frame28 />
      <Frame27 />
    </div>
  );
}