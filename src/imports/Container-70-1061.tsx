import React from "react";
import svgPaths from "./svg-7dep1mc3wi";
import imgImageColor from "figma:asset/848cc9d9d2ee375b005fbdca2522ab616019dc08.png";

function Container2() {
  return (
    <div className="bg-[#38444a] h-[217px] relative rounded-[24px] shrink-0 w-full" data-name="Container">
      <div className="absolute flex h-[130px] items-center justify-center left-[175px] top-[42px] w-[182px]" style={{ "--transform-inner-width": "1200", "--transform-inner-height": "19" } as React.CSSProperties}>
        <div className="-rotate-90 flex-none">
          <div className="h-[182px] relative w-[130px]" data-name="image_color">
            <div className="absolute inset-0 overflow-hidden pointer-events-none">
              <img alt="" className="absolute h-[100.81%] left-[-5.82%] max-w-none top-[-0.4%] w-[111.64%]" src={imgImageColor} />
            </div>
          </div>
        </div>
      </div>
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

function Container9() {
  return (
    <div className="content-stretch flex gap-[5px] items-center justify-center relative shrink-0" data-name="Container">
      <FreeIconSandClocks />
      <p className="font-['Roboto_Condensed:Medium',sans-serif] font-medium leading-[20px] relative shrink-0 text-[#f1f2fb] text-[16px] whitespace-nowrap">7 мин</p>
    </div>
  );
}

function Container8() {
  return (
    <div className="content-stretch flex items-center relative shrink-0" data-name="Container">
      <Container9 />
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

function Container11() {
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
        <p className="font-['Roboto_Condensed:Medium',sans-serif] font-medium leading-[20px] relative shrink-0 text-[#f1f2fb] text-[16px] whitespace-nowrap">Новенький</p>
      </div>
    </div>
  );
}

function Container10() {
  return (
    <div className="content-stretch flex flex-col items-end relative shrink-0" data-name="Container">
      <Container11 />
    </div>
  );
}

function Container6() {
  return (
    <div className="content-stretch flex gap-[20px] items-center justify-end relative shrink-0 w-[268px]" data-name="Container">
      <Container7 />
      <Container10 />
    </div>
  );
}

function Container5() {
  return (
    <div className="content-stretch flex items-start justify-between relative shrink-0 w-full" data-name="Container">
      <p className="font-['Roboto_Condensed:Bold',sans-serif] font-bold leading-[27.5px] relative shrink-0 text-[#f4f5fc] text-[32px] w-[253px]">Цвет в UX/UI</p>
      <Container6 />
    </div>
  );
}

function Container4() {
  return (
    <div className="content-stretch flex flex-col items-start relative shrink-0 w-full" data-name="Container">
      <Container5 />
    </div>
  );
}

function Container3() {
  return (
    <div className="relative shrink-0 w-full" data-name="Container">
      <div className="flex flex-col items-center size-full">
        <div className="content-stretch flex flex-col items-center px-[10px] relative w-full">
          <Container4 />
        </div>
      </div>
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

function FreeIconYes() {
  return (
    <div className="relative shrink-0 size-[18px]" data-name="free-icon-yes-9426997 1">
      <svg className="absolute block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 18 18">
        <g clipPath="url(#clip0_70_620)" id="free-icon-yes-9426997 1">
          <path d={svgPaths.p1bd90280} fill="var(--fill-0, #5EDD60)" id="Vector" />
          <path d={svgPaths.p14c44980} fill="var(--fill-0, white)" id="Vector_2" />
        </g>
        <defs>
          <clipPath id="clip0_70_620">
            <rect fill="white" height="18" width="18" />
          </clipPath>
        </defs>
      </svg>
    </div>
  );
}

function Frame2() {
  return (
    <div className="content-stretch flex items-center justify-center relative shrink-0" data-name="Frame">
      <FreeIconYes />
    </div>
  );
}

function Container15() {
  return (
    <div className="content-stretch flex items-center relative shrink-0" data-name="Container">
      <Frame2 />
    </div>
  );
}

function Container14() {
  return (
    <div className="content-stretch flex flex-col items-end relative shrink-0" data-name="Container">
      <Container15 />
    </div>
  );
}

function Frame1() {
  return (
    <div className="content-stretch flex gap-[20px] items-center relative shrink-0" data-name="Frame">
      <Container14 />
      <p className="font-['Roboto_Condensed:Bold',sans-serif] font-bold leading-[27.5px] relative shrink-0 text-[#798589] text-[26px] whitespace-nowrap">Роль цвета в интерфейсе</p>
    </div>
  );
}

function Container13() {
  return (
    <div className="content-stretch flex items-center justify-between relative shrink-0 w-full" data-name="Container">
      <Frame1 />
      <div className="flex h-[10px] items-center justify-center relative shrink-0 w-[20px]" style={{ "--transform-inner-width": "1200", "--transform-inner-height": "19" } as React.CSSProperties}>
        <div className="-rotate-90 flex-none">
          <div className="h-[20px] relative w-[10px]">
            <div className="absolute inset-[-5%_-10%_-5%_-1.72%]">
              <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 11.1716 22">
                <path d={svgPaths.p23f95480} id="Vector 5" stroke="var(--stroke-0, #798589)" strokeLinecap="round" strokeWidth="2" />
              </svg>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

function Container12() {
  return (
    <div className="bg-[#374348] h-[124px] relative rounded-[24px] shrink-0 w-full" data-name="Container">
      <div className="flex flex-col items-center size-full">
        <div className="content-stretch flex flex-col items-center justify-between pb-[30px] pt-[20px] px-[30px] relative size-full">
          <Container13 />
        </div>
      </div>
    </div>
  );
}

function Frame4() {
  return (
    <div className="relative shrink-0 size-[17.4px]" data-name="Frame">
      <svg className="absolute block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 17.4 17.4">
        <g id="Frame">
          <path d={svgPaths.p30c82000} fill="var(--fill-0, #2D363A)" id="Vector" />
        </g>
      </svg>
    </div>
  );
}

function Frame3() {
  return (
    <div className="content-stretch flex gap-[20px] items-center relative shrink-0 w-[484px]" data-name="Frame">
      <Frame4 />
      <p className="font-['Roboto_Condensed:Bold',sans-serif] font-bold leading-[27.5px] relative shrink-0 text-[#f1f2fb] text-[26px] whitespace-nowrap">Зачем цвет нужен в интерфейсе</p>
    </div>
  );
}

function Container18() {
  return (
    <div className="content-stretch flex items-center justify-between relative shrink-0 w-full" data-name="Container">
      <Frame3 />
      <div className="flex h-[10px] items-center justify-center relative shrink-0 w-[20px]" style={{ "--transform-inner-width": "1200", "--transform-inner-height": "19" } as React.CSSProperties}>
        <div className="flex-none rotate-90">
          <div className="h-[20px] relative w-[10px]">
            <div className="absolute inset-[-5%_-10%_-5%_-1.72%]">
              <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 11.1716 22">
                <path d={svgPaths.p23f95480} id="Vector 5" stroke="var(--stroke-0, #798589)" strokeLinecap="round" strokeWidth="2" />
              </svg>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

function Container17() {
  return (
    <div className="h-[120px] relative shrink-0 w-full" data-name="Container">
      <div className="flex flex-col items-center justify-center size-full">
        <div className="content-stretch flex flex-col items-center justify-center px-[10px] relative size-full">
          <Container18 />
        </div>
      </div>
    </div>
  );
}

function Container21() {
  return (
    <div className="content-stretch flex flex-col gap-[30px] items-start relative shrink-0 text-[#f1f2fb] text-[18px] w-full" data-name="Container">
      <p className="font-['Roboto_Condensed:Bold',sans-serif] font-bold h-[22px] leading-[22px] relative shrink-0 w-[532px]">🎯 Цвет помогает ориентироваться</p>
      <div className="font-['Roboto_Condensed:Regular',sans-serif] font-normal leading-[0] min-w-full opacity-80 relative shrink-0 w-[min-content] whitespace-pre-wrap">
        <p className="mb-0">
          <span className="leading-[22px]">{`Цвет — не украшение. Это `}</span>
          <span className="font-['Roboto_Condensed:Italic',sans-serif] font-normal italic leading-[22px]">инструмент навигации</span>
          <span className="leading-[22px]">.</span>
        </p>
        <p className="leading-[22px] mb-0">&nbsp;</p>
        <p className="leading-[22px]">Пользователь считывает цвет почти мгновенно, даже не читая текст.</p>
      </div>
    </div>
  );
}

function Container20() {
  return (
    <div className="content-stretch flex flex-col items-center relative shrink-0 w-full" data-name="Container">
      <Container21 />
    </div>
  );
}

function Container23() {
  return (
    <div className="content-stretch flex flex-col gap-[30px] items-start relative shrink-0 text-[#f1f2fb] text-[18px] w-full" data-name="Container">
      <p className="font-['Roboto_Condensed:Bold',sans-serif] font-bold h-[22px] leading-[22px] relative shrink-0 w-[532px]">⭐ Цвет показывает важность</p>
      <div className="font-['Roboto_Condensed:Regular',sans-serif] font-normal leading-[0] min-w-full opacity-80 relative shrink-0 w-[min-content] whitespace-pre-wrap">
        <p className="mb-0">
          <span className="leading-[22px]">{`С помощью цвета можно `}</span>
          <span className="font-['Roboto_Condensed:Italic',sans-serif] font-normal italic leading-[22px]">показать</span>
          <span className="leading-[22px]">:</span>
        </p>
        <ul className="list-disc mb-0">
          <li className="mb-0 ms-[27px]">
            <span className="leading-[22px]">какие элементы главные</span>
          </li>
          <li className="mb-0 ms-[27px]">
            <span className="leading-[22px]">какие второстепенные</span>
          </li>
          <li className="ms-[27px]">
            <span className="leading-[22px]">где пользователь должен обратить внимание</span>
          </li>
        </ul>
        <p className="leading-[22px] mb-0">&nbsp;</p>
        <p className="leading-[22px]">Так создаётся визуальная иерархия.</p>
      </div>
    </div>
  );
}

function Container22() {
  return (
    <div className="content-stretch flex flex-col items-center relative shrink-0 w-full" data-name="Container">
      <Container23 />
    </div>
  );
}

function Container25() {
  return (
    <div className="content-stretch flex flex-col gap-[30px] items-start relative shrink-0 text-[#f1f2fb] text-[18px] w-full" data-name="Container">
      <p className="font-['Roboto_Condensed:Bold',sans-serif] font-bold h-[22px] leading-[22px] relative shrink-0 w-[532px]">💡 Цвет — это система подсказок</p>
      <div className="font-['Roboto_Condensed:Regular',sans-serif] font-normal h-[154px] leading-[0] opacity-80 relative shrink-0 w-full whitespace-pre-wrap">
        <p className="mb-0">
          <span className="leading-[22px]">Хороший цвет работает как</span>
          <span className="font-['Roboto_Condensed:Italic',sans-serif] font-normal italic leading-[22px]">{` навигация`}</span>
          <span className="leading-[22px]">.</span>
        </p>
        <p className="mb-0">
          <span className="leading-[22px]">{`Он `}</span>
          <span className="font-['Roboto_Condensed:Italic',sans-serif] font-normal italic leading-[22px]">{`подсказывает `}</span>
          <span className="leading-[22px]">пользователю:</span>
        </p>
        <ul className="list-disc mb-0">
          <li className="mb-0 ms-[27px]">
            <span className="leading-[22px]">куда нажать</span>
          </li>
          <li className="mb-0 ms-[27px]">
            <span className="leading-[22px]">что важно</span>
          </li>
          <li className="ms-[27px]">
            <span className="leading-[22px]">что можно игнорировать</span>
          </li>
        </ul>
        <p className="leading-[22px] mb-0">&nbsp;</p>
        <p className="leading-[22px]">Это делает интерфейс понятным без объяснений.</p>
      </div>
    </div>
  );
}

function Container24() {
  return (
    <div className="content-stretch flex flex-col items-center relative shrink-0 w-full" data-name="Container">
      <Container25 />
    </div>
  );
}

function Container19() {
  return (
    <div className="content-stretch flex flex-col gap-[40px] items-center relative shrink-0 w-full" data-name="Container">
      <Container20 />
      <div className="h-0 relative shrink-0 w-full">
        <div className="absolute inset-[-0.5px_-0.1%]">
          <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 493 1">
            <path d="M0.5 0.5H492.5" id="Vector 11" stroke="var(--stroke-0, #5B6E77)" strokeLinecap="round" />
          </svg>
        </div>
      </div>
      <Container22 />
      <div className="h-0 relative shrink-0 w-full">
        <div className="absolute inset-[-0.5px_-0.1%]">
          <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 493 1">
            <path d="M0.5 0.5H492.5" id="Vector 11" stroke="var(--stroke-0, #5B6E77)" strokeLinecap="round" />
          </svg>
        </div>
      </div>
      <Container24 />
    </div>
  );
}

function Frame7() {
  return (
    <div className="content-stretch flex flex-col gap-[5px] items-center relative shrink-0 whitespace-nowrap" data-name="Frame">
      <p className="font-['Roboto_Condensed:Regular',sans-serif] font-normal leading-[1.2] relative shrink-0 text-[#798589] text-[18px]">Закреплемим!</p>
      <p className="font-['Roboto_Condensed:Bold',sans-serif] font-bold leading-[27.5px] relative shrink-0 text-[#f1f2fb] text-[26px]">Какой интерфейс лучше?</p>
    </div>
  );
}

function Frame12() {
  return (
    <div className="bg-[#364146] col-1 content-stretch flex h-[22.318px] items-center justify-center ml-[9.09px] mt-[139.69px] pb-[8.266px] pt-[7.026px] px-[21.078px] relative rounded-[8.266px] row-1 w-[117.79px]" data-name="Frame">
      <p className="font-['RF_Dewi_Expanded:Semibold',sans-serif] leading-[normal] not-italic relative shrink-0 text-[#f3f7fa] text-[6.686px] text-center whitespace-nowrap">В корзину</p>
    </div>
  );
}

function Frame11() {
  return (
    <div className="col-1 grid-cols-[max-content] grid-rows-[max-content] inline-grid ml-0 mt-0 place-items-start relative row-1" data-name="Frame">
      <p className="col-1 font-['RF_Dewi_Expanded:Semibold',sans-serif] h-[8.659px] leading-[normal] ml-[7.1px] mt-[105.94px] not-italic relative row-1 text-[5.786px] text-[rgba(135,143,166,0.8)] w-[61.172px]">Фрукты</p>
      <div className="bg-[#f7f8fc] border-[#f3f7fa] border-[0.413px] border-solid col-1 h-[171.519px] ml-0 mt-0 rounded-[8.266px] row-1 w-[137.628px]" data-name="Product Background" />
      <div className="bg-[#e1e3eb] col-1 h-[70.261px] ml-[9.09px] mt-[41.33px] rounded-[8.266px] row-1 w-[117.79px]" data-name="Product Background" />
      <p className="col-1 font-['RF_Dewi_Expanded:Semibold',sans-serif] leading-[normal] ml-[9.92px] mt-[120.57px] not-italic relative row-1 text-[#010552] text-[7.439px] text-center whitespace-nowrap">Продукт 1</p>
      <p className="col-1 font-['RF_Dewi_Expanded:Semibold',sans-serif] leading-[normal] ml-[83.07px] mt-[119.86px] not-italic relative row-1 text-[#010552] text-[7.439px] text-center whitespace-nowrap">145 ₽ / кг</p>
      <Frame12 />
    </div>
  );
}

function Frame14() {
  return (
    <div className="col-1 ml-[7.03px] mt-[8.27px] relative row-1 size-[9.919px]" data-name="Frame">
      <svg className="absolute block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 9.91916 9.91916">
        <g clipPath="url(#clip0_70_642)" id="Frame">
          <g id="Vector" />
          <path d={svgPaths.p10a28200} fill="var(--fill-0, #878FA6)" fillOpacity="0.6" id="Vector_2" />
        </g>
        <defs>
          <clipPath id="clip0_70_642">
            <rect fill="white" height="9.91916" width="9.91916" />
          </clipPath>
        </defs>
      </svg>
    </div>
  );
}

function Frame15() {
  return (
    <div className="col-1 ml-[102.5px] mt-[8.27px] relative row-1 size-[9.919px]" data-name="Frame">
      <svg className="absolute block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 9.91916 9.91916">
        <g clipPath="url(#clip0_70_635)" id="Frame">
          <g id="Vector" />
          <path d={svgPaths.p12c289f0} fill="var(--fill-0, #364146)" id="Vector_2" />
        </g>
        <defs>
          <clipPath id="clip0_70_635">
            <rect fill="white" height="9.91916" width="9.91916" />
          </clipPath>
        </defs>
      </svg>
    </div>
  );
}

function Frame13() {
  return (
    <div className="col-1 grid-cols-[max-content] grid-rows-[max-content] inline-grid ml-[9.09px] mt-[7.44px] place-items-start relative row-1" data-name="Frame">
      <div className="bg-[#e1e3eb] col-1 h-[26.451px] ml-0 mt-0 rounded-[8.266px] row-1 w-[117.79px]" data-name="Button Background" />
      <Frame14 />
      <p className="col-1 font-['RF_Dewi_Expanded:Semibold',sans-serif] leading-[normal] ml-[23.56px] mt-[9.71px] not-italic relative row-1 text-[5.786px] text-[rgba(135,143,166,0.6)] whitespace-nowrap">Найти продукт</p>
      <Frame15 />
    </div>
  );
}

function Frame10() {
  return (
    <div className="grid-cols-[max-content] grid-rows-[max-content] inline-grid leading-[0] place-items-start relative shrink-0" data-name="Frame">
      <Frame11 />
      <Frame13 />
    </div>
  );
}

function Frame9() {
  return (
    <div className="flex-[1_0_0] h-[247.152px] min-h-px min-w-px relative rounded-[24px]" data-name="Frame" style={{ backgroundImage: "linear-gradient(135.096deg, rgba(58, 81, 67, 0.5) 2.4187%, rgba(56, 72, 62, 0.5) 98.527%, rgba(45, 56, 44, 0.5) 116.25%)" }}>
      <div aria-hidden="true" className="absolute border-[#00932f] border-[2.528px] border-solid inset-[-2.528px] pointer-events-none rounded-[26.528px]" />
      <div className="flex flex-row items-center justify-center size-full">
        <div className="content-stretch flex items-center justify-center pb-[72.476px] pl-[72.476px] pr-[73.318px] pt-[81.746px] relative size-full">
          <Frame10 />
        </div>
      </div>
      <div className="absolute inset-[-2.528px] pointer-events-none rounded-[inherit] shadow-[inset_-3.371px_0px_3.371px_0px_#384348,inset_0px_-4.214px_3.371px_0px_rgba(0,0,0,0.25),inset_0px_3.371px_3.371px_0px_rgba(0,0,0,0.25)]" />
    </div>
  );
}

function Frame19() {
  return (
    <div className="bg-[#e1e3eb] col-1 content-stretch flex h-[22.318px] items-center justify-center ml-[9.09px] mt-[139.69px] pb-[8.266px] pt-[7.026px] px-[21.078px] relative rounded-[8.266px] row-1 w-[117.79px]" data-name="Frame">
      <p className="font-['RF_Dewi_Expanded:Semibold',sans-serif] leading-[normal] not-italic relative shrink-0 text-[#c6ced2] text-[6.686px] text-center whitespace-nowrap">В корзину</p>
    </div>
  );
}

function Frame18() {
  return (
    <div className="col-1 grid-cols-[max-content] grid-rows-[max-content] inline-grid ml-0 mt-0 place-items-start relative row-1" data-name="Frame">
      <p className="col-1 font-['RF_Dewi_Expanded:Semibold',sans-serif] h-[8.659px] leading-[normal] ml-[7.1px] mt-[105.94px] not-italic relative row-1 text-[5.786px] text-[rgba(135,143,166,0.8)] w-[61.172px]">Фрукты</p>
      <div className="bg-[#f7f8fc] border-[#f3f7fa] border-[0.413px] border-solid col-1 h-[171.519px] ml-0 mt-0 rounded-[8.266px] row-1 w-[137.628px]" data-name="Product Background" />
      <div className="bg-[#2e373b] col-1 h-[70.261px] ml-[9.09px] mt-[41.33px] rounded-[8.266px] row-1 w-[117.79px]" data-name="Product Background" />
      <p className="col-1 font-['RF_Dewi_Expanded:Semibold',sans-serif] leading-[normal] ml-[9.92px] mt-[120.57px] not-italic relative row-1 text-[#010552] text-[7.439px] text-center whitespace-nowrap">Продукт 1</p>
      <p className="col-1 font-['RF_Dewi_Expanded:Semibold',sans-serif] leading-[normal] ml-[83.07px] mt-[119.86px] not-italic relative row-1 text-[#010552] text-[7.439px] text-center whitespace-nowrap">145 ₽ / кг</p>
      <Frame19 />
    </div>
  );
}

function Frame21() {
  return (
    <div className="col-1 ml-[7.03px] mt-[8.27px] relative row-1 size-[9.919px]" data-name="Frame">
      <svg className="absolute block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 9.91916 9.91916">
        <g clipPath="url(#clip0_70_680)" id="Frame">
          <g id="Vector" />
          <path d={svgPaths.p3ac85f00} fill="var(--fill-0, #878FA6)" fillOpacity="0.6" id="Vector_2" />
        </g>
        <defs>
          <clipPath id="clip0_70_680">
            <rect fill="white" height="9.91916" width="9.91916" />
          </clipPath>
        </defs>
      </svg>
    </div>
  );
}

function Frame22() {
  return (
    <div className="col-1 ml-[102.5px] mt-[8.27px] relative row-1 size-[9.919px]" data-name="Frame">
      <svg className="absolute block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 9.91916 9.91916">
        <g clipPath="url(#clip0_70_656)" id="Frame">
          <g id="Vector" />
          <path d={svgPaths.p3a859d70} fill="var(--fill-0, #364146)" id="Vector_2" />
        </g>
        <defs>
          <clipPath id="clip0_70_656">
            <rect fill="white" height="9.91916" width="9.91916" />
          </clipPath>
        </defs>
      </svg>
    </div>
  );
}

function Frame20() {
  return (
    <div className="col-1 grid-cols-[max-content] grid-rows-[max-content] inline-grid ml-[9.09px] mt-[7.44px] place-items-start relative row-1" data-name="Frame">
      <div className="bg-[#2e373b] col-1 h-[26.451px] ml-0 mt-0 rounded-[8.266px] row-1 w-[117.79px]" data-name="Button Background" />
      <Frame21 />
      <p className="col-1 font-['RF_Dewi_Expanded:Semibold',sans-serif] leading-[normal] ml-[23.56px] mt-[9.71px] not-italic relative row-1 text-[5.786px] text-[rgba(135,143,166,0.6)] whitespace-nowrap">Найти продукт</p>
      <Frame22 />
    </div>
  );
}

function Frame17() {
  return (
    <div className="grid-cols-[max-content] grid-rows-[max-content] inline-grid leading-[0] place-items-start relative shrink-0" data-name="Frame">
      <Frame18 />
      <Frame20 />
    </div>
  );
}

function Frame16() {
  return (
    <div className="bg-[#343e42] flex-[1_0_0] h-[247.152px] min-h-px min-w-px relative rounded-[24px]" data-name="Frame">
      <div className="flex flex-row items-center justify-center size-full">
        <div className="content-stretch flex items-center justify-center pb-[35.544px] pl-[35.544px] pr-[35.957px] pt-[40.09px] relative size-full">
          <Frame17 />
        </div>
      </div>
    </div>
  );
}

function Frame8() {
  return (
    <div className="content-stretch flex gap-[20px] items-center relative shrink-0 w-full" data-name="Frame">
      <Frame9 />
      <Frame16 />
    </div>
  );
}

function FreeIconPartyPopper() {
  return (
    <div className="relative shrink-0 size-[27px]" data-name="free-icon-party-popper-7626666 1">
      <svg className="absolute block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 27 27">
        <g clipPath="url(#clip0_70_662)" id="free-icon-party-popper-7626666 1">
          <path d={svgPaths.p14a46100} fill="var(--fill-0, #FDC70E)" id="Vector" />
          <path d={svgPaths.p38dcaa00} fill="var(--fill-0, #D39518)" id="Vector_2" />
          <path d={svgPaths.p3dec4c80} fill="var(--fill-0, #3B84ED)" id="Vector_3" />
          <path d={svgPaths.pab31500} fill="var(--fill-0, #D3374E)" id="Vector_4" />
          <path d={svgPaths.p3172380} fill="var(--fill-0, #3B84ED)" id="Vector_5" />
          <path d={svgPaths.p257e4500} fill="var(--fill-0, #00D043)" id="Vector_6" />
          <path d={svgPaths.p2fc207f0} fill="var(--fill-0, #D3374E)" id="Vector_7" />
          <path d={svgPaths.p16182480} fill="var(--fill-0, #00D043)" id="Vector_8" />
          <path d={svgPaths.p107f6b80} fill="var(--fill-0, #3B84ED)" id="Vector_9" />
          <path d={svgPaths.p79c5f30} fill="var(--fill-0, #00D043)" id="Vector_10" />
          <path d={svgPaths.p1814b580} fill="var(--fill-0, #D3374E)" id="Vector_11" />
          <path d={svgPaths.p1e054500} fill="var(--fill-0, #D3374E)" id="Vector_12" />
          <path d={svgPaths.p3986f200} fill="var(--fill-0, #FDC70E)" id="Vector_13" />
          <g id="Group">
            <path d={svgPaths.p2f1fb8c0} fill="var(--fill-0, #D3374E)" id="Vector_14" />
            <path d={svgPaths.p2ed6e280} fill="var(--fill-0, #D3374E)" id="Vector_15" />
          </g>
        </g>
        <defs>
          <clipPath id="clip0_70_662">
            <rect fill="white" height="27" width="27" />
          </clipPath>
        </defs>
      </svg>
    </div>
  );
}

function Frame26() {
  return (
    <div className="content-stretch flex gap-[9px] items-end relative shrink-0" data-name="Frame">
      <FreeIconPartyPopper />
      <p className="font-['Roboto_Condensed:Bold',sans-serif] font-bold leading-[20.587px] relative shrink-0 text-[#cdf6db] text-[18px] whitespace-nowrap">Верно!</p>
    </div>
  );
}

function Frame29() {
  return (
    <div className="col-1 content-stretch flex items-center justify-between ml-0 mt-0 relative row-1 w-[47px]" data-name="Frame">
      <p className="font-['Roboto_Condensed:Bold',sans-serif] font-bold leading-[20.587px] relative shrink-0 text-[#00d043] text-[18px] whitespace-nowrap">+15</p>
      <div className="h-[16px] relative shrink-0 w-[14px]" data-name="Vector">
        <svg className="absolute block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 14 16">
          <path d={svgPaths.p3fb52a80} fill="var(--fill-0, #00D043)" id="Vector" />
        </svg>
      </div>
    </div>
  );
}

function Frame28() {
  return (
    <div className="col-1 grid-cols-[max-content] grid-rows-[max-content] inline-grid ml-0 mt-0 place-items-start relative row-1" data-name="Frame">
      <Frame29 />
    </div>
  );
}

function Frame27() {
  return (
    <div className="grid-cols-[max-content] grid-rows-[max-content] inline-grid leading-[0] place-items-start relative shrink-0" data-name="Frame">
      <Frame28 />
    </div>
  );
}

function Frame25() {
  return (
    <div className="content-stretch flex gap-[12px] items-center justify-end relative shrink-0" data-name="Frame">
      <Frame26 />
      <Frame27 />
    </div>
  );
}

function Frame24() {
  return (
    <div className="content-stretch flex flex-col gap-[10px] items-start justify-center relative shrink-0 w-[229px]" data-name="Frame">
      <Frame25 />
      <p className="font-['Roboto_Condensed:Regular',sans-serif] font-normal leading-[1.2] relative shrink-0 text-[#cdf6db] text-[16px] w-[215px]">Основная кнопка имеет высокий контраст и лучше выделяется, поэтому интерфейс читается быстрее.</p>
    </div>
  );
}

function Container26() {
  return (
    <div className="bg-[#f7f8fc] content-stretch flex h-[59px] items-center justify-center px-[16px] relative rounded-[24px] shadow-[0px_5px_0px_0px_#d2d4df] shrink-0 w-[193.669px]" data-name="Container">
      <p className="font-['Roboto_Condensed:Bold',sans-serif] font-bold leading-[22.852px] relative shrink-0 text-[#343e42] text-[24px] whitespace-nowrap">Продолжить</p>
    </div>
  );
}

function Frame23() {
  return (
    <div className="content-stretch flex items-end justify-between relative shrink-0 w-full" data-name="Frame">
      <Frame24 />
      <Container26 />
    </div>
  );
}

function Frame6() {
  return (
    <div className="bg-[#404d52] relative rounded-[24px] shrink-0 w-full" data-name="Frame">
      <div className="flex flex-col items-center size-full">
        <div className="content-stretch flex flex-col gap-[30px] items-center pb-[30px] pt-[40px] px-[20px] relative w-full">
          <Frame7 />
          <Frame8 />
          <Frame23 />
        </div>
      </div>
    </div>
  );
}

function Frame5() {
  return (
    <div className="content-stretch flex flex-col gap-[51px] items-center relative shrink-0 w-full" data-name="Frame">
      <Container19 />
      <Frame6 />
    </div>
  );
}

function Container16() {
  return (
    <div className="bg-[#374348] relative rounded-[24px] shrink-0 w-full" data-name="Container">
      <div className="flex flex-col items-center size-full">
        <div className="content-stretch flex flex-col gap-[16px] items-center pb-[30px] px-[20px] relative w-full">
          <Container17 />
          <Frame5 />
        </div>
      </div>
    </div>
  );
}

function Container29() {
  return (
    <div className="relative shrink-0 size-[18px]" data-name="Container">
      <svg className="absolute block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 18 18">
        <g id="Container">
          <path d={svgPaths.p3896100} fill="var(--fill-0, #2D363A)" id="Vector" />
        </g>
      </svg>
    </div>
  );
}

function Frame30() {
  return (
    <div className="content-stretch flex gap-[20px] items-center relative shrink-0" data-name="Frame">
      <Container29 />
      <p className="font-['Roboto_Condensed:Bold',sans-serif] font-bold leading-[27.5px] relative shrink-0 text-[#798589] text-[26px] whitespace-nowrap">Роль цвета в интерфейсе</p>
    </div>
  );
}

function Container28() {
  return (
    <div className="content-stretch flex items-center justify-between relative shrink-0 w-full" data-name="Container">
      <Frame30 />
      <div className="flex h-[10px] items-center justify-center relative shrink-0 w-[20px]" style={{ "--transform-inner-width": "1200", "--transform-inner-height": "19" } as React.CSSProperties}>
        <div className="-rotate-90 flex-none">
          <div className="h-[20px] relative w-[10px]">
            <div className="absolute inset-[-5%_-10%_-5%_-1.72%]">
              <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 11.1716 22">
                <path d={svgPaths.p23f95480} id="Vector 5" stroke="var(--stroke-0, #798589)" strokeLinecap="round" strokeWidth="2" />
              </svg>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

function Container27() {
  return (
    <div className="bg-[#374348] h-[124px] relative rounded-[24px] shrink-0 w-full" data-name="Container">
      <div className="flex flex-col items-center size-full">
        <div className="content-stretch flex flex-col items-center justify-between pb-[30px] pt-[20px] px-[30px] relative size-full">
          <Container28 />
        </div>
      </div>
    </div>
  );
}

function Container32() {
  return (
    <div className="relative shrink-0 size-[18px]" data-name="Container">
      <svg className="absolute block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 18 18">
        <g id="Container">
          <path d={svgPaths.p3896100} fill="var(--fill-0, #2D363A)" id="Vector" />
        </g>
      </svg>
    </div>
  );
}

function Frame31() {
  return (
    <div className="content-stretch flex gap-[20px] items-center relative shrink-0" data-name="Frame">
      <Container32 />
      <p className="font-['Roboto_Condensed:Bold',sans-serif] font-bold leading-[27.5px] relative shrink-0 text-[#798589] text-[26px] whitespace-nowrap">Роль цвета в интерфейсе</p>
    </div>
  );
}

function Container31() {
  return (
    <div className="content-stretch flex items-center justify-between relative shrink-0 w-full" data-name="Container">
      <Frame31 />
      <div className="flex h-[10px] items-center justify-center relative shrink-0 w-[20px]" style={{ "--transform-inner-width": "1200", "--transform-inner-height": "19" } as React.CSSProperties}>
        <div className="-rotate-90 flex-none">
          <div className="h-[20px] relative w-[10px]">
            <div className="absolute inset-[-5%_-10%_-5%_-1.72%]">
              <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 11.1716 22">
                <path d={svgPaths.p23f95480} id="Vector 5" stroke="var(--stroke-0, #798589)" strokeLinecap="round" strokeWidth="2" />
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
    <div className="bg-[#374348] h-[124px] relative rounded-[24px] shrink-0 w-full" data-name="Container">
      <div className="flex flex-col items-center size-full">
        <div className="content-stretch flex flex-col items-center justify-between pb-[30px] pt-[20px] px-[30px] relative size-full">
          <Container31 />
        </div>
      </div>
    </div>
  );
}

function Frame() {
  return (
    <div className="content-stretch flex flex-col gap-[13px] items-center p-[20px] relative rounded-[24px] shrink-0 w-[572px]" data-name="Frame">
      <Container12 />
      <Container16 />
      <Container27 />
      <Container30 />
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

function Container34() {
  return (
    <div className="bg-[#d65e43] h-[28.585px] relative rounded-[12296925px] shrink-0" data-name="Container">
      <div className="bg-clip-padding border-0 border-[transparent] border-solid content-stretch flex h-full items-center justify-center px-[11.727px] relative">
        <p className="font-['Inter:Semi_Bold',sans-serif] font-medium leading-[15.392px] not-italic relative shrink-0 text-[#eef5ff] text-[10.261px] whitespace-nowrap">+125 XP</p>
      </div>
    </div>
  );
}

function Container33() {
  return (
    <div className="bg-[#ff5d39] h-[86px] relative rounded-[24px] shrink-0 w-full" data-name="Container">
      <div aria-hidden="true" className="absolute border-[#ff390d] border-[0.835px] border-solid inset-0 pointer-events-none rounded-[24px] shadow-[0px_4.174px_0px_0px_#c24226]" />
      <div className="flex flex-row items-center justify-center size-full">
        <div className="content-stretch flex gap-[6.678px] items-center justify-center px-[25.835px] py-[0.835px] relative size-full">
          <Component202603041916291Vectorized />
          <p className="font-['Roboto_Condensed:Bold',sans-serif] font-bold leading-[27.5px] relative shrink-0 text-[#f4f5fc] text-[26px] whitespace-nowrap">Начать квиз</p>
          <Container34 />
        </div>
      </div>
    </div>
  );
}

function Link() {
  return (
    <div className="bg-[#404d52] content-stretch flex flex-col gap-[63px] items-center pb-[30px] pt-[20px] px-[20px] relative rounded-[24px] shrink-0 w-[572px]" data-name="Link">
      <Container1 />
      <Frame />
      <Container33 />
    </div>
  );
}

export default function Container() {
  return (
    <div className="content-stretch flex flex-col items-center relative size-full" data-name="Container">
      <Link />
    </div>
  );
}