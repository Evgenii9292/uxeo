import svgPaths from "./svg-q0uldttnb4";
import imgImageColor from "figma:asset/848cc9d9d2ee375b005fbdca2522ab616019dc08.png";
import imgFrame481335 from "figma:asset/4c068adea0aa2b40da93f8a1a4d30d25ed1b8901.png";

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

function Frame3() {
  return (
    <div className="content-stretch flex items-center justify-center relative shrink-0" data-name="Frame">
      <FreeIconYes />
    </div>
  );
}

function Container15() {
  return (
    <div className="content-stretch flex items-center relative shrink-0" data-name="Container">
      <Frame3 />
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

function Frame2() {
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
      <Frame2 />
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

function Frame5() {
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

function Frame4() {
  return (
    <div className="content-stretch flex gap-[20px] items-center relative shrink-0 w-[484px]" data-name="Frame">
      <Frame5 />
      <p className="font-['Roboto_Condensed:Bold',sans-serif] font-bold leading-[27.5px] relative shrink-0 text-[#f1f2fb] text-[26px] whitespace-nowrap">Зачем цвет нужен в интерфейсе</p>
    </div>
  );
}

function Container18() {
  return (
    <div className="content-stretch flex items-center justify-between relative shrink-0 w-full" data-name="Container">
      <Frame4 />
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

function Frame8() {
  return (
    <div className="content-stretch flex flex-col gap-[5px] items-center relative shrink-0 whitespace-nowrap" data-name="Frame">
      <p className="font-['Roboto_Condensed:Regular',sans-serif] font-normal leading-[1.2] relative shrink-0 text-[#798589] text-[18px]">Закреплемим!</p>
      <p className="font-['Roboto_Condensed:Bold',sans-serif] font-bold leading-[27.5px] relative shrink-0 text-[#f1f2fb] text-[26px]">Какой интерфейс лучше?</p>
    </div>
  );
}

function Frame13() {
  return (
    <div className="bg-[#364146] col-1 content-stretch flex h-[22.318px] items-center justify-center ml-[9.09px] mt-[139.69px] pb-[8.266px] pt-[7.026px] px-[21.078px] relative rounded-[8.266px] row-1 w-[117.79px]" data-name="Frame">
      <p className="font-['RF_Dewi_Expanded:Semibold',sans-serif] leading-[normal] not-italic relative shrink-0 text-[#f3f7fa] text-[6.686px] text-center whitespace-nowrap">В корзину</p>
    </div>
  );
}

function Frame12() {
  return (
    <div className="col-1 grid-cols-[max-content] grid-rows-[max-content] inline-grid ml-0 mt-0 place-items-start relative row-1" data-name="Frame">
      <p className="col-1 font-['RF_Dewi_Expanded:Semibold',sans-serif] h-[8.659px] leading-[normal] ml-[7.1px] mt-[105.94px] not-italic relative row-1 text-[5.786px] text-[rgba(135,143,166,0.8)] w-[61.172px]">Фрукты</p>
      <div className="bg-[#f7f8fc] border-[#f3f7fa] border-[0.413px] border-solid col-1 h-[171.519px] ml-0 mt-0 rounded-[8.266px] row-1 w-[137.628px]" data-name="Product Background" />
      <div className="bg-[#e1e3eb] col-1 h-[70.261px] ml-[9.09px] mt-[41.33px] rounded-[8.266px] row-1 w-[117.79px]" data-name="Product Background" />
      <p className="col-1 font-['RF_Dewi_Expanded:Semibold',sans-serif] leading-[normal] ml-[9.92px] mt-[120.57px] not-italic relative row-1 text-[#010552] text-[7.439px] text-center whitespace-nowrap">Продукт 1</p>
      <p className="col-1 font-['RF_Dewi_Expanded:Semibold',sans-serif] leading-[normal] ml-[83.07px] mt-[119.86px] not-italic relative row-1 text-[#010552] text-[7.439px] text-center whitespace-nowrap">145 ₽ / кг</p>
      <Frame13 />
    </div>
  );
}

function Frame15() {
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

function Frame16() {
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

function Frame14() {
  return (
    <div className="col-1 grid-cols-[max-content] grid-rows-[max-content] inline-grid ml-[9.09px] mt-[7.44px] place-items-start relative row-1" data-name="Frame">
      <div className="bg-[#e1e3eb] col-1 h-[26.451px] ml-0 mt-0 rounded-[8.266px] row-1 w-[117.79px]" data-name="Button Background" />
      <Frame15 />
      <p className="col-1 font-['RF_Dewi_Expanded:Semibold',sans-serif] leading-[normal] ml-[23.56px] mt-[9.71px] not-italic relative row-1 text-[5.786px] text-[rgba(135,143,166,0.6)] whitespace-nowrap">Найти продукт</p>
      <Frame16 />
    </div>
  );
}

function Frame11() {
  return (
    <div className="grid-cols-[max-content] grid-rows-[max-content] inline-grid leading-[0] place-items-start relative shrink-0" data-name="Frame">
      <Frame12 />
      <Frame14 />
    </div>
  );
}

function Frame10() {
  return (
    <div className="flex-[1_0_0] h-[247.152px] min-h-px min-w-px relative rounded-[24px]" data-name="Frame" style={{ backgroundImage: "linear-gradient(135.096deg, rgba(58, 81, 67, 0.5) 2.4187%, rgba(56, 72, 62, 0.5) 98.527%, rgba(45, 56, 44, 0.5) 116.25%)" }}>
      <div aria-hidden="true" className="absolute border-[#00932f] border-[2.528px] border-solid inset-[-2.528px] pointer-events-none rounded-[26.528px]" />
      <div className="flex flex-row items-center justify-center size-full">
        <div className="content-stretch flex items-center justify-center pb-[72.476px] pl-[72.476px] pr-[73.318px] pt-[81.746px] relative size-full">
          <Frame11 />
        </div>
      </div>
      <div className="absolute inset-[-2.528px] pointer-events-none rounded-[inherit] shadow-[inset_-3.371px_0px_3.371px_0px_#384348,inset_0px_-4.214px_3.371px_0px_rgba(0,0,0,0.25),inset_0px_3.371px_3.371px_0px_rgba(0,0,0,0.25)]" />
    </div>
  );
}

function Frame20() {
  return (
    <div className="bg-[#e1e3eb] col-1 content-stretch flex h-[22.318px] items-center justify-center ml-[9.09px] mt-[139.69px] pb-[8.266px] pt-[7.026px] px-[21.078px] relative rounded-[8.266px] row-1 w-[117.79px]" data-name="Frame">
      <p className="font-['RF_Dewi_Expanded:Semibold',sans-serif] leading-[normal] not-italic relative shrink-0 text-[#c6ced2] text-[6.686px] text-center whitespace-nowrap">В корзину</p>
    </div>
  );
}

function Frame19() {
  return (
    <div className="col-1 grid-cols-[max-content] grid-rows-[max-content] inline-grid ml-0 mt-0 place-items-start relative row-1" data-name="Frame">
      <p className="col-1 font-['RF_Dewi_Expanded:Semibold',sans-serif] h-[8.659px] leading-[normal] ml-[7.1px] mt-[105.94px] not-italic relative row-1 text-[5.786px] text-[rgba(135,143,166,0.8)] w-[61.172px]">Фрукты</p>
      <div className="bg-[#f7f8fc] border-[#f3f7fa] border-[0.413px] border-solid col-1 h-[171.519px] ml-0 mt-0 rounded-[8.266px] row-1 w-[137.628px]" data-name="Product Background" />
      <div className="bg-[#2e373b] col-1 h-[70.261px] ml-[9.09px] mt-[41.33px] rounded-[8.266px] row-1 w-[117.79px]" data-name="Product Background" />
      <p className="col-1 font-['RF_Dewi_Expanded:Semibold',sans-serif] leading-[normal] ml-[9.92px] mt-[120.57px] not-italic relative row-1 text-[#010552] text-[7.439px] text-center whitespace-nowrap">Продукт 1</p>
      <p className="col-1 font-['RF_Dewi_Expanded:Semibold',sans-serif] leading-[normal] ml-[83.07px] mt-[119.86px] not-italic relative row-1 text-[#010552] text-[7.439px] text-center whitespace-nowrap">145 ₽ / кг</p>
      <Frame20 />
    </div>
  );
}

function Frame22() {
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

function Frame23() {
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

function Frame21() {
  return (
    <div className="col-1 grid-cols-[max-content] grid-rows-[max-content] inline-grid ml-[9.09px] mt-[7.44px] place-items-start relative row-1" data-name="Frame">
      <div className="bg-[#2e373b] col-1 h-[26.451px] ml-0 mt-0 rounded-[8.266px] row-1 w-[117.79px]" data-name="Button Background" />
      <Frame22 />
      <p className="col-1 font-['RF_Dewi_Expanded:Semibold',sans-serif] leading-[normal] ml-[23.56px] mt-[9.71px] not-italic relative row-1 text-[5.786px] text-[rgba(135,143,166,0.6)] whitespace-nowrap">Найти продукт</p>
      <Frame23 />
    </div>
  );
}

function Frame18() {
  return (
    <div className="grid-cols-[max-content] grid-rows-[max-content] inline-grid leading-[0] place-items-start relative shrink-0" data-name="Frame">
      <Frame19 />
      <Frame21 />
    </div>
  );
}

function Frame17() {
  return (
    <div className="bg-[#343e42] flex-[1_0_0] h-[247.152px] min-h-px min-w-px relative rounded-[24px]" data-name="Frame">
      <div className="flex flex-row items-center justify-center size-full">
        <div className="content-stretch flex items-center justify-center pb-[35.544px] pl-[35.544px] pr-[35.957px] pt-[40.09px] relative size-full">
          <Frame18 />
        </div>
      </div>
    </div>
  );
}

function Frame9() {
  return (
    <div className="content-stretch flex gap-[20px] items-center relative shrink-0 w-full" data-name="Frame">
      <Frame10 />
      <Frame17 />
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

function Frame27() {
  return (
    <div className="content-stretch flex gap-[9px] items-end relative shrink-0" data-name="Frame">
      <FreeIconPartyPopper />
      <p className="font-['Roboto_Condensed:Bold',sans-serif] font-bold leading-[20.587px] relative shrink-0 text-[#cdf6db] text-[18px] whitespace-nowrap">Верно!</p>
    </div>
  );
}

function Frame30() {
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

function Frame29() {
  return (
    <div className="col-1 grid-cols-[max-content] grid-rows-[max-content] inline-grid ml-0 mt-0 place-items-start relative row-1" data-name="Frame">
      <Frame30 />
    </div>
  );
}

function Frame28() {
  return (
    <div className="grid-cols-[max-content] grid-rows-[max-content] inline-grid leading-[0] place-items-start relative shrink-0" data-name="Frame">
      <Frame29 />
    </div>
  );
}

function Frame26() {
  return (
    <div className="content-stretch flex gap-[12px] items-center justify-end relative shrink-0" data-name="Frame">
      <Frame27 />
      <Frame28 />
    </div>
  );
}

function Frame25() {
  return (
    <div className="content-stretch flex flex-col gap-[10px] items-start justify-center relative shrink-0 w-[229px]" data-name="Frame">
      <Frame26 />
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

function Frame24() {
  return (
    <div className="content-stretch flex items-end justify-between relative shrink-0 w-full" data-name="Frame">
      <Frame25 />
      <Container26 />
    </div>
  );
}

function Frame7() {
  return (
    <div className="bg-[#404d52] relative rounded-[24px] shrink-0 w-full" data-name="Frame">
      <div className="flex flex-col items-center size-full">
        <div className="content-stretch flex flex-col gap-[30px] items-center pb-[30px] pt-[40px] px-[20px] relative w-full">
          <Frame8 />
          <Frame9 />
          <Frame24 />
        </div>
      </div>
    </div>
  );
}

function Frame6() {
  return (
    <div className="content-stretch flex flex-col gap-[51px] items-center relative shrink-0 w-full" data-name="Frame">
      <Container19 />
      <Frame7 />
    </div>
  );
}

function Container16() {
  return (
    <div className="bg-[#374348] relative rounded-[24px] shrink-0 w-full" data-name="Container">
      <div className="flex flex-col items-center size-full">
        <div className="content-stretch flex flex-col gap-[16px] items-center pb-[30px] px-[20px] relative w-full">
          <Container17 />
          <Frame6 />
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

function Frame31() {
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

function Frame32() {
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
      <Frame32 />
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

function Frame1() {
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
        <p className="font-['Inter:Semi_Bold',sans-serif] font-semibold leading-[15.392px] not-italic relative shrink-0 text-[#eef5ff] text-[10.261px] whitespace-nowrap">+125 XP</p>
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
      <Frame1 />
      <Container33 />
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

function Container35() {
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
      <Container35 />
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

function Container37() {
  return (
    <div className="absolute content-stretch flex h-[53.538px] items-center justify-center left-[2.77px] top-[-0.69px] w-[59.077px]" data-name="Container">
      <p className="font-['Roboto_Condensed:Bold',sans-serif] font-bold leading-[15.231px] relative shrink-0 text-[#a6a6a6] text-[14px] whitespace-nowrap">0/10</p>
    </div>
  );
}

function Container36() {
  return (
    <div className="h-[59.077px] relative shrink-0 w-[60px]" data-name="Container">
      <div className="absolute flex h-[55.385px] items-center justify-center left-[2.77px] top-[-1.62px] w-[59.077px]" style={{ "--transform-inner-width": "1200", "--transform-inner-height": "19" } as React.CSSProperties}>
        <div className="-rotate-90 flex-none">
          <Svg />
        </div>
      </div>
      <Container37 />
    </div>
  );
}

function ProgressContainer() {
  return (
    <div className="content-stretch flex gap-[30px] h-[54px] items-center relative shrink-0" data-name="Progress Container">
      <Container36 />
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

function Link1() {
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

function Frame34() {
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

function Frame33() {
  return (
    <div className="absolute h-[32.826px] left-[2.89px] top-[1.9px] w-[32.731px]">
      <Group />
    </div>
  );
}

function Frame36() {
  return (
    <div className="content-stretch flex h-[57px] items-center relative shrink-0">
      <div className="overflow-clip relative shrink-0 size-[26px]">
        <Frame33 />
      </div>
    </div>
  );
}

function XpProgressCard() {
  return (
    <div className="bg-[#343e42] flex-[1_0_0] min-h-px min-w-px relative rounded-[24px] self-stretch" data-name="XP_ProgressCard">
      <div className="flex flex-col items-center size-full">
        <div className="content-stretch flex flex-col items-center justify-between p-[20px] relative size-full">
          <div className="content-stretch flex flex-col gap-[5px] items-start relative shrink-0 w-full" data-name="Card Header">
            <p className="font-['Roboto_Condensed:Bold',sans-serif] font-bold leading-[20px] relative shrink-0 text-[#f1f2fb] text-[18px] whitespace-nowrap">До открытия лиги</p>
            <XpContainer />
          </div>
          <div className="content-stretch flex gap-[20px] h-[53px] items-end relative shrink-0 w-full">
            <Frame34 />
            <Frame36 />
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

function Frame35() {
  return (
    <div className="content-stretch flex flex-[1_0_0] flex-col gap-[8px] items-start min-h-px min-w-px relative">
      <ProgressBarContainer1 />
      <LabelsContainer1 />
    </div>
  );
}

function Frame37() {
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

function Container38() {
  return (
    <div className="bg-[#343e42] flex-[1_0_0] h-[152px] min-h-px min-w-px relative rounded-[24px]" data-name="Container">
      <div className="flex flex-col items-center size-full">
        <div className="content-stretch flex flex-col items-center justify-between p-[20px] relative size-full">
          <div className="content-stretch flex flex-col gap-[5px] items-start relative shrink-0 w-full" data-name="Card Header">
            <p className="font-['Roboto_Condensed:Bold',sans-serif] font-bold leading-[20px] relative shrink-0 text-[#f1f2fb] text-[18px] whitespace-nowrap">Задание дня</p>
            <XpContainer1 />
          </div>
          <div className="content-stretch flex gap-[20px] h-[53px] items-end relative shrink-0 w-full">
            <Frame35 />
            <Frame37 />
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
      <Container38 />
    </div>
  );
}

function MainContainer1() {
  return (
    <div className="content-stretch flex flex-col gap-[22px] items-start relative shrink-0 w-[489px]" data-name="Main Container">
      <Link1 />
      <CardsContainer />
    </div>
  );
}

function MainContainer() {
  return (
    <div className="content-stretch flex gap-[36px] items-start relative shrink-0" data-name="Main Container">
      <Container />
      <MainContainer1 />
    </div>
  );
}

function Frame() {
  return (
    <div className="-translate-x-1/2 absolute content-stretch flex flex-col items-start left-[calc(50%-0.54px)] top-[20px] w-[1096.915px]" data-name="Frame">
      <MainContainer />
    </div>
  );
}

function Container39() {
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
  return (
    <div className="content-stretch flex flex-col gap-[9px] items-start relative shrink-0 w-full" data-name="div">
      <div className="h-[41px] relative rounded-[14px] shrink-0 w-[205px]" data-name="Link">
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

function Frame38() {
  return (
    <div className="content-stretch flex flex-col gap-[50px] items-start relative shrink-0 w-[205px]">
      <Container39 />
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

function Container40() {
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
      <Link2 />
      <Container40 />
    </div>
  );
}

function Frame42() {
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

function Frame39() {
  return (
    <div className="content-stretch flex flex-col gap-[30px] items-start relative shrink-0 w-full">
      <FooterContainer />
      <Frame42 />
    </div>
  );
}

function Frame40() {
  return (
    <div className="content-stretch flex flex-[1_0_0] flex-col items-start justify-between min-h-px min-w-px relative w-full">
      <Frame38 />
      <Frame39 />
    </div>
  );
}

function Frame41() {
  return (
    <div className="absolute content-stretch flex flex-col h-[1149px] items-start left-[12px] max-h-[2000px] pl-[12px] pr-[11px] py-[20px] rounded-[24px] top-[20px] w-[238px]">
      <img alt="" className="absolute inset-0 max-w-none object-cover pointer-events-none rounded-[24px] size-full" src={imgFrame481335} />
      <Frame40 />
    </div>
  );
}

export default function Component() {
  return (
    <div className="relative size-full" data-name="Теория" style={{ backgroundImage: "linear-gradient(149.517deg, rgb(44, 52, 56) 14.367%, rgb(46, 57, 62) 147.74%)" }}>
      <Frame />
      <Frame41 />
    </div>
  );
}