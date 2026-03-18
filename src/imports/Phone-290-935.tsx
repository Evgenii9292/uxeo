import svgPaths from "./svg-ovhzkkcoh8";

function ListItem() {
  return (
    <div className="relative shrink-0 size-[17.4px]" data-name="List Item">
      <svg className="absolute block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 17.4 17.4">
        <g id="Frame">
          <path d={svgPaths.p30c82000} fill="var(--fill-0, #2D363A)" id="Vector" />
        </g>
      </svg>
    </div>
  );
}

function ListItemContainer() {
  return (
    <div className="content-stretch flex gap-[20px] items-center relative shrink-0 w-[484px]" data-name="List Item Container">
      <ListItem />
      <p className="font-['Roboto_Condensed:SemiBold',sans-serif] font-semibold leading-[27.5px] relative shrink-0 text-[#f1f2fb] text-[24px] whitespace-nowrap">Зачем цвет нужен в интерфейсе</p>
    </div>
  );
}

function Container2() {
  return (
    <div className="content-stretch flex items-center justify-between relative shrink-0 w-full" data-name="Container">
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

function Container1() {
  return (
    <div className="content-stretch flex flex-col h-[100px] items-start justify-center relative shrink-0 w-full" data-name="Container">
      <Container2 />
    </div>
  );
}

function Container5() {
  return (
    <div className="content-stretch flex flex-col gap-[30px] items-start relative shrink-0 text-[#f1f7fb] text-[18px] w-full" data-name="Container">
      <p className="font-['Roboto_Condensed:Bold',sans-serif] font-bold h-[22px] leading-[22px] relative shrink-0 w-[532px]">🎯 Цвет помогает ориентироваться</p>
      <div className="font-['Roboto_Condensed:Regular',sans-serif] font-normal leading-[0] min-w-full opacity-80 relative shrink-0 w-[min-content]">
        <p className="mb-0">
          <span className="leading-[22px]">{`Цвет — не украшение. Это `}</span>
          <span className="font-['Roboto_Condensed:Italic',sans-serif] font-normal italic leading-[22px]">инструмент навигации</span>
          <span className="leading-[22px]">.</span>
        </p>
        <p className="leading-[22px]">Пользователь считывает цвет почти мгновенно, даже не читая текст.</p>
      </div>
    </div>
  );
}

function Container4() {
  return (
    <div className="content-stretch flex flex-col items-center relative shrink-0 w-full" data-name="Container">
      <Container5 />
    </div>
  );
}

function Container7() {
  return (
    <div className="content-stretch flex flex-col gap-[30px] items-start relative shrink-0 text-[#f1f7fb] text-[18px] w-full" data-name="Container">
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

function Container6() {
  return (
    <div className="content-stretch flex flex-col items-center relative shrink-0 w-full" data-name="Container">
      <Container7 />
    </div>
  );
}

function Container9() {
  return (
    <div className="content-stretch flex flex-col gap-[30px] items-start relative shrink-0 text-[#f1f7fb] text-[18px] w-full" data-name="Container">
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

function Container8() {
  return (
    <div className="content-stretch flex flex-col items-center relative shrink-0 w-full" data-name="Container">
      <Container9 />
    </div>
  );
}

function Container3() {
  return (
    <div className="content-stretch flex flex-col gap-[25px] items-center relative shrink-0 w-full" data-name="Container">
      <Container4 />
      <div className="h-0 relative shrink-0 w-full">
        <div className="absolute inset-[-0.5px_-0.11%]">
          <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 451 1">
            <path d="M0.5 0.5H450.5" id="Vector 11" stroke="var(--stroke-0, #5B6E77)" strokeLinecap="round" strokeOpacity="0.5" />
          </svg>
        </div>
      </div>
      <Container6 />
      <div className="h-0 relative shrink-0 w-full">
        <div className="absolute inset-[-0.5px_-0.11%]">
          <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 451 1">
            <path d="M0.5 0.5H450.5" id="Vector 11" stroke="var(--stroke-0, #5B6E77)" strokeLinecap="round" strokeOpacity="0.5" />
          </svg>
        </div>
      </div>
      <Container8 />
    </div>
  );
}

function Component() {
  return (
    <div className="absolute inset-[0_-151.3%_0_158.71%]" data-name="_225089528">
      <svg className="absolute block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 18.5176 20.0001">
        <g id="_225089528">
          <path clipRule="evenodd" d={svgPaths.p2de81700} fill="var(--fill-0, #00D043)" fillRule="evenodd" id="_225089936" />
          <path clipRule="evenodd" d={svgPaths.p13c02600} fill="var(--fill-0, #FF6B21)" fillRule="evenodd" id="_225089888" />
        </g>
      </svg>
    </div>
  );
}

function LayerX() {
  return (
    <div className="absolute contents inset-[0_-151.3%_0_158.71%]" data-name="Layer_x0020_1">
      <Component />
    </div>
  );
}

function FreeIconRedCard() {
  return (
    <div className="overflow-clip relative shrink-0 size-[20px]" data-name="free-icon-red-card-16275324 1">
      <LayerX />
      <p className="absolute font-['Roboto_Condensed:Bold',sans-serif] font-bold inset-[20%_-106.66%_30%_181.66%] leading-[1.2] text-[#f1f2fb] text-[8px] whitespace-nowrap">А</p>
    </div>
  );
}

function ExerciseBadge() {
  return (
    <div className="content-stretch flex gap-[7px] items-center relative shrink-0" data-name="Exercise Badge">
      <FreeIconRedCard />
      <p className="font-['Roboto_Condensed:Regular',sans-serif] font-normal leading-[1.2] relative shrink-0 text-[#ff6b21] text-[18px] whitespace-nowrap">Закрепим!</p>
    </div>
  );
}

function Frame1() {
  return (
    <div className="content-stretch flex items-start justify-between relative shrink-0 w-full" data-name="Frame">
      <p className="font-['Roboto_Condensed:SemiBold',sans-serif] font-semibold leading-[27.5px] relative shrink-0 text-[#f1f2fb] text-[26px] whitespace-nowrap">Какой интерфейс лучше?</p>
      <ExerciseBadge />
    </div>
  );
}

function Frame6() {
  return (
    <div className="bg-[#364146] col-1 content-stretch flex h-[28.515px] items-center justify-center ml-[11.61px] mt-[178.48px] pb-[10.561px] pt-[8.977px] px-[26.931px] relative rounded-[10.561px] row-1 w-[150.497px]" data-name="Frame">
      <p className="font-['RF_Dewi_Expanded:Semibold',sans-serif] leading-[normal] not-italic relative shrink-0 text-[#f3f7fa] text-[8.543px] text-center whitespace-nowrap">В корзину</p>
    </div>
  );
}

function Frame5() {
  return (
    <div className="col-1 grid-cols-[max-content] grid-rows-[max-content] inline-grid ml-0 mt-0 place-items-start relative row-1" data-name="Frame">
      <p className="col-1 font-['RF_Dewi_Expanded:Semibold',sans-serif] h-[11.063px] leading-[normal] ml-[9.07px] mt-[135.36px] not-italic relative row-1 text-[7.393px] text-[rgba(135,143,166,0.8)] w-[78.158px]">Фрукты</p>
      <div className="bg-[#f7f8fc] border-[#f3f7fa] border-[0.528px] border-solid col-1 h-[219.145px] ml-0 mt-0 rounded-[10.561px] row-1 w-[175.844px]" data-name="Product Background" />
      <div className="bg-[#e1e3eb] col-1 h-[89.77px] ml-[11.61px] mt-[52.8px] rounded-[10.561px] row-1 w-[150.497px]" data-name="Product Background" />
      <p className="col-1 font-['RF_Dewi_Expanded:Semibold',sans-serif] leading-[normal] ml-[12.68px] mt-[154.05px] not-italic relative row-1 text-[#010552] text-[9.505px] text-center whitespace-nowrap">Продукт 1</p>
      <p className="col-1 font-['RF_Dewi_Expanded:Semibold',sans-serif] leading-[normal] ml-[106.14px] mt-[153.14px] not-italic relative row-1 text-[#010552] text-[9.505px] text-center whitespace-nowrap">145 ₽ / кг</p>
      <Frame6 />
    </div>
  );
}

function Frame8() {
  return (
    <div className="col-1 ml-[8.98px] mt-[10.56px] relative row-1 size-[12.673px]" data-name="Frame">
      <svg className="absolute block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 12.6734 12.6734">
        <g clipPath="url(#clip0_289_972)" id="Frame">
          <g id="Vector" />
          <path d={svgPaths.p3b738880} fill="var(--fill-0, #878FA6)" fillOpacity="0.6" id="Vector_2" />
        </g>
        <defs>
          <clipPath id="clip0_289_972">
            <rect fill="white" height="12.6734" width="12.6734" />
          </clipPath>
        </defs>
      </svg>
    </div>
  );
}

function Frame9() {
  return (
    <div className="col-1 ml-[130.96px] mt-[10.56px] relative row-1 size-[12.673px]" data-name="Frame">
      <svg className="absolute block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 12.6734 12.6734">
        <g clipPath="url(#clip0_289_964)" id="Frame">
          <g id="Vector" />
          <path d={svgPaths.p36e73280} fill="var(--fill-0, #364146)" id="Vector_2" />
        </g>
        <defs>
          <clipPath id="clip0_289_964">
            <rect fill="white" height="12.6734" width="12.6734" />
          </clipPath>
        </defs>
      </svg>
    </div>
  );
}

function Frame7() {
  return (
    <div className="col-1 grid-cols-[max-content] grid-rows-[max-content] inline-grid ml-[11.61px] mt-[9.5px] place-items-start relative row-1" data-name="Frame">
      <div className="bg-[#e1e3eb] col-1 h-[33.796px] ml-0 mt-0 rounded-[10.561px] row-1 w-[150.497px]" data-name="Button Background" />
      <Frame8 />
      <p className="col-1 font-['RF_Dewi_Expanded:Semibold',sans-serif] leading-[normal] ml-[30.1px] mt-[12.41px] not-italic relative row-1 text-[7.393px] text-[rgba(135,143,166,0.6)] whitespace-nowrap">Найти продукт</p>
      <Frame9 />
    </div>
  );
}

function Frame4() {
  return (
    <div className="grid-cols-[max-content] grid-rows-[max-content] inline-grid leading-[0] place-items-start relative shrink-0" data-name="Frame">
      <Frame5 />
      <Frame7 />
    </div>
  );
}

function Frame3() {
  return (
    <div className="flex-[1_0_0] h-[267px] min-h-px min-w-px relative rounded-[20px]" data-name="Frame" style={{ backgroundImage: "linear-gradient(134.18deg, rgba(58, 81, 67, 0.5) 2.4187%, rgba(56, 72, 62, 0.5) 98.527%, rgba(45, 56, 44, 0.5) 116.25%)" }}>
      <div aria-hidden="true" className="absolute border-[#00932f] border-[2.528px] border-solid inset-[-2.528px] pointer-events-none rounded-[22.528px]" />
      <div className="flex flex-row items-center justify-center size-full">
        <div className="content-stretch flex items-center justify-center pb-[72.476px] pl-[72.476px] pr-[73.318px] pt-[81.746px] relative size-full">
          <Frame4 />
        </div>
      </div>
      <div className="absolute inset-[-2.528px] pointer-events-none rounded-[inherit] shadow-[inset_-3.371px_0px_3.371px_0px_#384348,inset_0px_-4.214px_3.371px_0px_rgba(0,0,0,0.25),inset_0px_3.371px_3.371px_0px_rgba(0,0,0,0.25)]" />
    </div>
  );
}

function Frame13() {
  return (
    <div className="bg-[#e1e3eb] col-1 content-stretch flex h-[28.77px] items-center justify-center ml-[11.72px] mt-[180.08px] pb-[10.656px] pt-[9.057px] px-[27.172px] relative rounded-[10.656px] row-1 w-[151.841px]" data-name="Frame">
      <p className="font-['RF_Dewi_Expanded:Semibold',sans-serif] leading-[normal] not-italic relative shrink-0 text-[#c6ced2] text-[8.619px] text-center whitespace-nowrap">В корзину</p>
    </div>
  );
}

function Frame12() {
  return (
    <div className="col-1 grid-cols-[max-content] grid-rows-[max-content] inline-grid ml-0 mt-0 place-items-start relative row-1" data-name="Frame">
      <p className="col-1 font-['RF_Dewi_Expanded:Semibold',sans-serif] h-[11.162px] leading-[normal] ml-[9.15px] mt-[136.57px] not-italic relative row-1 text-[7.459px] text-[rgba(135,143,166,0.8)] w-[78.856px]">Фрукты</p>
      <div className="bg-[#f7f8fc] border-[#f3f7fa] border-[0.533px] border-solid col-1 h-[221.102px] ml-0 mt-0 rounded-[10.656px] row-1 w-[177.414px]" data-name="Product Background" />
      <div className="bg-[#2e373b] col-1 h-[90.572px] ml-[11.72px] mt-[53.28px] rounded-[10.656px] row-1 w-[151.841px]" data-name="Product Background" />
      <p className="col-1 font-['RF_Dewi_Expanded:Semibold',sans-serif] leading-[normal] ml-[12.79px] mt-[155.42px] not-italic relative row-1 text-[#010552] text-[9.59px] text-center whitespace-nowrap">Продукт 1</p>
      <p className="col-1 font-['RF_Dewi_Expanded:Semibold',sans-serif] leading-[normal] ml-[107.09px] mt-[154.51px] not-italic relative row-1 text-[#010552] text-[9.59px] text-center whitespace-nowrap">145 ₽ / кг</p>
      <Frame13 />
    </div>
  );
}

function Frame15() {
  return (
    <div className="col-1 ml-[9.06px] mt-[10.66px] relative row-1 size-[12.787px]" data-name="Frame">
      <svg className="absolute block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 12.7866 12.7866">
        <g clipPath="url(#clip0_289_960)" id="Frame">
          <g id="Vector" />
          <path d={svgPaths.p6ae6d80} fill="var(--fill-0, #878FA6)" fillOpacity="0.6" id="Vector_2" />
        </g>
        <defs>
          <clipPath id="clip0_289_960">
            <rect fill="white" height="12.7866" width="12.7866" />
          </clipPath>
        </defs>
      </svg>
    </div>
  );
}

function Frame16() {
  return (
    <div className="col-1 ml-[132.13px] mt-[10.66px] relative row-1 size-[12.787px]" data-name="Frame">
      <svg className="absolute block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 12.7866 12.7866">
        <g clipPath="url(#clip0_289_976)" id="Frame">
          <g id="Vector" />
          <path d={svgPaths.pc2d3690} fill="var(--fill-0, #364146)" id="Vector_2" />
        </g>
        <defs>
          <clipPath id="clip0_289_976">
            <rect fill="white" height="12.7866" width="12.7866" />
          </clipPath>
        </defs>
      </svg>
    </div>
  );
}

function Frame14() {
  return (
    <div className="col-1 grid-cols-[max-content] grid-rows-[max-content] inline-grid ml-[11.72px] mt-[9.59px] place-items-start relative row-1" data-name="Frame">
      <div className="bg-[#2e373b] col-1 h-[34.098px] ml-0 mt-0 rounded-[10.656px] row-1 w-[151.841px]" data-name="Button Background" />
      <Frame15 />
      <p className="col-1 font-['RF_Dewi_Expanded:Semibold',sans-serif] leading-[normal] ml-[30.37px] mt-[12.52px] not-italic relative row-1 text-[7.459px] text-[rgba(135,143,166,0.6)] whitespace-nowrap">Найти продукт</p>
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
    <div className="bg-[#404d52] flex-[1_0_0] h-[267px] min-h-px min-w-px relative rounded-[20px]" data-name="Frame">
      <div className="flex flex-row items-center justify-center size-full">
        <div className="content-stretch flex items-center justify-center pb-[35.544px] pl-[35.544px] pr-[35.957px] pt-[40.09px] relative size-full">
          <Frame11 />
        </div>
      </div>
    </div>
  );
}

function Frame2() {
  return (
    <div className="content-stretch flex gap-[20px] items-center relative shrink-0 w-[472px]" data-name="Frame">
      <Frame3 />
      <Frame10 />
    </div>
  );
}

function FreeIconPartyPopper() {
  return (
    <div className="relative shrink-0 size-[27px]" data-name="free-icon-party-popper-7626666 1">
      <svg className="absolute block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 27 27">
        <g clipPath="url(#clip0_283_2132)" id="free-icon-party-popper-7626666 1">
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
          <clipPath id="clip0_283_2132">
            <rect fill="white" height="27" width="27" />
          </clipPath>
        </defs>
      </svg>
    </div>
  );
}

function Frame20() {
  return (
    <div className="content-stretch flex gap-[9px] items-end relative shrink-0" data-name="Frame">
      <FreeIconPartyPopper />
      <p className="font-['Roboto_Condensed:Bold',sans-serif] font-bold leading-[20.587px] relative shrink-0 text-[#cdf6db] text-[18px] whitespace-nowrap">Верно!</p>
    </div>
  );
}

function Frame23() {
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

function Frame22() {
  return (
    <div className="col-1 grid-cols-[max-content] grid-rows-[max-content] inline-grid ml-0 mt-0 place-items-start relative row-1" data-name="Frame">
      <Frame23 />
    </div>
  );
}

function Frame21() {
  return (
    <div className="grid-cols-[max-content] grid-rows-[max-content] inline-grid leading-[0] place-items-start relative shrink-0" data-name="Frame">
      <Frame22 />
    </div>
  );
}

function Frame19() {
  return (
    <div className="content-stretch flex gap-[12px] items-center justify-end relative shrink-0" data-name="Frame">
      <Frame20 />
      <Frame21 />
    </div>
  );
}

function Frame18() {
  return (
    <div className="content-stretch flex flex-col gap-[10px] items-start justify-center relative shrink-0 w-[225px]" data-name="Frame">
      <Frame19 />
      <p className="font-['Roboto_Condensed:Regular',sans-serif] font-normal leading-[1.2] relative shrink-0 text-[#cdf6db] text-[16px] w-[245px]">Основная кнопка имеет высокий контраст и лучше выделяется, поэтому интерфейс читается быстрее.</p>
    </div>
  );
}

function Container10() {
  return (
    <div className="bg-[#f7f8fc] content-stretch flex h-[59px] items-center justify-center px-[16px] relative rounded-[15px] shadow-[0px_5px_0px_0px_#d2d4df] shrink-0 w-[193.669px]" data-name="Container">
      <p className="font-['Roboto_Condensed:Bold',sans-serif] font-bold leading-[22.852px] relative shrink-0 text-[#343e42] text-[24px] whitespace-nowrap">Продолжить</p>
    </div>
  );
}

function Frame17() {
  return (
    <div className="content-stretch flex items-end justify-between relative shrink-0 w-full" data-name="Frame">
      <Frame18 />
      <Container10 />
    </div>
  );
}

function InfoSection() {
  return (
    <div className="content-stretch flex flex-col gap-[28px] items-center relative shrink-0 w-full" data-name="Info Section">
      <Container3 />
      <div className="h-0 relative shrink-0 w-full">
        <div className="absolute inset-[-0.5px_-0.11%]">
          <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 451 1">
            <path d="M0.5 0.5H450.5" id="Vector 11" stroke="var(--stroke-0, #5B6E77)" strokeLinecap="round" strokeOpacity="0.5" />
          </svg>
        </div>
      </div>
      <Frame1 />
      <Frame2 />
      <Frame17 />
    </div>
  );
}

function Container() {
  return (
    <div className="bg-[#343e42] relative rounded-[15px] shrink-0 w-full" data-name="Container">
      <div className="flex flex-col justify-center size-full">
        <div className="content-stretch flex flex-col gap-[16px] items-start justify-center pb-[30px] px-[30px] relative w-full">
          <Container1 />
          <InfoSection />
        </div>
      </div>
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

function ListIcon() {
  return (
    <div className="content-stretch flex items-center justify-center relative shrink-0" data-name="List Icon">
      <FreeIconYes />
    </div>
  );
}

function Container14() {
  return (
    <div className="content-stretch flex items-center relative shrink-0" data-name="Container">
      <ListIcon />
    </div>
  );
}

function Container13() {
  return (
    <div className="content-stretch flex flex-col items-end relative shrink-0" data-name="Container">
      <Container14 />
    </div>
  );
}

function SectionContainer() {
  return (
    <div className="content-stretch flex gap-[20px] items-center relative shrink-0 w-[484px]" data-name="Section Container">
      <Container13 />
      <p className="font-['Roboto_Condensed:Bold',sans-serif] font-bold leading-[27.5px] relative shrink-0 text-[#798589] text-[26px] whitespace-nowrap">Роль цвета в интерфейсе</p>
    </div>
  );
}

function Container12() {
  return (
    <div className="content-stretch flex items-center justify-between relative shrink-0 w-full" data-name="Container">
      <SectionContainer />
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

function Container11() {
  return (
    <div className="bg-[#343e42] h-[100px] relative rounded-[20px] shrink-0 w-full" data-name="Container">
      <div className="flex flex-col justify-center size-full">
        <div className="content-stretch flex flex-col items-start justify-center pb-[30px] pt-[20px] px-[30px] relative size-full">
          <Container12 />
        </div>
      </div>
    </div>
  );
}

function Frame() {
  return (
    <div className="absolute content-stretch flex flex-col gap-[13px] items-start left-[17px] top-[406px] w-[510px]" data-name="Frame">
      <Container />
      <Container11 />
    </div>
  );
}

function HighlightIcon() {
  return (
    <div className="absolute contents left-[283.01px] top-[110.71px]" data-name="Highlight Icon">
      <div className="absolute h-[58.308px] left-[284.91px] top-[113.18px] w-[103.945px]">
        <div className="absolute inset-[-1.61%_-0.85%_-1.61%_-0.25%]">
          <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 105.086 60.1851">
            <path d={svgPaths.p2d365df0} fill="var(--stroke-0, #798589)" id="Vector 733" />
          </svg>
        </div>
      </div>
      <div className="absolute h-[59.469px] left-[283.01px] top-[110.71px] w-[109.521px]">
        <div className="absolute inset-[-1.63%_-0.2%_0.24%_-0.84%]">
          <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 110.661 60.292">
            <path d={svgPaths.p26539300} fill="var(--stroke-0, #55FF21)" id="Vector 734" />
          </svg>
        </div>
      </div>
    </div>
  );
}

function HighlightShape() {
  return (
    <div className="absolute contents left-[112.42px] top-[20px]" data-name="Highlight Shape">
      <div className="absolute h-[84.27px] left-[112.42px] top-[20.05px] w-[254.893px]">
        <div className="absolute inset-[-0.86%_-0.34%_-1.18%_0]">
          <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 255.908 85.9926">
            <path d={svgPaths.p91f9980} fill="var(--stroke-0, #798589)" id="Vector 731" />
          </svg>
        </div>
      </div>
      <div className="absolute h-[81px] left-[114px] top-[20px] w-[114px]">
        <div className="absolute inset-[-0.16%_0_-1.11%_-0.62%]">
          <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 114.599 82.0323">
            <path d={svgPaths.p167f4780} fill="url(#paint0_linear_290_1075)" id="Vector 735" />
            <defs>
              <linearGradient gradientUnits="userSpaceOnUse" id="paint0_linear_290_1075" x1="48.6867" x2="17.6323" y1="34.8484" y2="104.513">
                <stop stopColor="#FF6B21" />
                <stop offset="1" stopColor="#994014" />
              </linearGradient>
            </defs>
          </svg>
        </div>
      </div>
      <div className="absolute flex h-[76px] items-center justify-center left-[228px] top-[25px] w-[127px]">
        <div className="-scale-y-100 flex-none rotate-180">
          <div className="h-[76px] relative w-[127px]">
            <div className="absolute inset-[-0.17%_0.13%_-1.11%_-0.56%]">
              <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 127.549 76.9723">
                <path d={svgPaths.p3eb0ef00} fill="url(#paint0_linear_290_1083)" id="Vector 736" />
                <defs>
                  <linearGradient gradientUnits="userSpaceOnUse" id="paint0_linear_290_1083" x1="54.1639" x2="28.3813" y1="32.7069" y2="101.38">
                    <stop stopColor="#FF6B21" />
                    <stop offset="1" stopColor="#994014" />
                  </linearGradient>
                </defs>
              </svg>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

function ContentHighlight() {
  return (
    <div className="absolute contents left-[112px] top-[110.43px]" data-name="Content Highlight">
      <div className="absolute h-[61.965px] left-[112px] top-[110.43px] w-[159.857px]">
        <div className="absolute inset-[0_-0.55%_-1.28%_0]">
          <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 160.765 62.7394">
            <path d={svgPaths.p24cdde00} fill="var(--stroke-0, #798589)" id="Vector 732" />
          </svg>
        </div>
      </div>
      <div className="absolute h-[59.817px] left-[115.71px] top-[112.33px] w-[161.263px]">
        <div className="absolute inset-[-1.37%_-0.55%_-1.67%_-0.27%]">
          <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 162.589 61.6338">
            <path d={svgPaths.p3f504380} fill="var(--stroke-0, #21A6FF)" id="Vector 736" />
          </svg>
        </div>
      </div>
    </div>
  );
}

function ContentGroup() {
  return (
    <div className="absolute contents left-[112px] top-[20px]" data-name="Content Group">
      <HighlightIcon />
      <HighlightShape />
      <ContentHighlight />
    </div>
  );
}

function ContentSection() {
  return (
    <div className="flex-[1_0_0] min-h-px min-w-px relative rounded-[20px] w-full" data-name="Content Section">
      <ContentGroup />
    </div>
  );
}

function Layer() {
  return (
    <div className="absolute inset-[0_-195.47%_0_218.81%]" data-name="Layer 1">
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
    <div className="absolute contents inset-[0_-195.47%_0_218.81%]" data-name="Layer 2">
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

function Container18() {
  return (
    <div className="content-stretch flex gap-[5px] items-center justify-center relative shrink-0" data-name="Container">
      <FreeIconSandClocks />
      <p className="font-['Roboto_Condensed:Medium',sans-serif] font-medium leading-[20px] relative shrink-0 text-[#f1f7fb] text-[16px] whitespace-nowrap">7 мин</p>
    </div>
  );
}

function Container17() {
  return (
    <div className="content-stretch flex items-center relative shrink-0" data-name="Container">
      <Container18 />
    </div>
  );
}

function Container16() {
  return (
    <div className="content-stretch flex flex-col items-end relative shrink-0" data-name="Container">
      <Container17 />
    </div>
  );
}

function Container20() {
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
        <p className="font-['Roboto_Condensed:Medium',sans-serif] font-medium leading-[20px] relative shrink-0 text-[#f1f7fb] text-[16px] whitespace-nowrap">Новенький</p>
      </div>
    </div>
  );
}

function Container19() {
  return (
    <div className="content-stretch flex flex-col items-end relative shrink-0" data-name="Container">
      <Container20 />
    </div>
  );
}

function Container15() {
  return (
    <div className="content-stretch flex gap-[20px] items-center relative shrink-0" data-name="Container">
      <Container16 />
      <Container19 />
    </div>
  );
}

function SectionHeader() {
  return (
    <div className="content-stretch flex items-end justify-between relative shrink-0 w-full" data-name="Section Header">
      <p className="font-['Roboto_Condensed:Bold',sans-serif] font-bold leading-[27.5px] relative shrink-0 text-[#f4f5fc] text-[28px] w-[253px]">Цвет в UX/UI</p>
      <Container15 />
    </div>
  );
}

function ContentContainer() {
  return (
    <div className="content-stretch flex flex-[1_0_0] flex-col gap-[20px] items-start min-h-px min-w-px relative w-full" data-name="Content Container">
      <ContentSection />
      <SectionHeader />
    </div>
  );
}

function Link() {
  return (
    <div className="absolute content-stretch flex flex-col h-[312px] items-center justify-center left-px p-[20px] top-[94px] w-[544px]" data-name="Link">
      <ContentContainer />
    </div>
  );
}

function BackButton() {
  return (
    <div className="absolute content-stretch flex gap-[20px] items-center left-[29px] top-[27px]" data-name="Back Button">
      <div className="h-[20px] relative shrink-0 w-[10px]">
        <div className="absolute inset-[-7.5%_-15%_-7.5%_1.57%]">
          <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 11.3431 23">
            <path d={svgPaths.p29b1b380} id="Vector 5" stroke="var(--stroke-0, #798589)" strokeLinecap="round" strokeWidth="3" />
          </svg>
        </div>
      </div>
      <p className="font-['Roboto_Condensed:Medium',sans-serif] font-medium leading-[23.989px] relative shrink-0 text-[#f4f5fc] text-[22px] whitespace-nowrap">Теория</p>
    </div>
  );
}

function FireIconGroup1() {
  return (
    <div className="absolute inset-[0_15.68%_0_15.7%]" data-name="Fire Icon Group">
      <svg className="absolute block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 16.7655 24.4324">
        <g id="Fire Icon Group">
          <path d={svgPaths.p33094f0} fill="url(#paint0_linear_134_682)" id="Vector" />
        </g>
        <defs>
          <linearGradient gradientUnits="userSpaceOnUse" id="paint0_linear_134_682" x1="8.38273" x2="8.38273" y1="0" y2="24.4324">
            <stop stopColor="#FFB121" />
            <stop offset="1" stopColor="#BB8116" />
          </linearGradient>
        </defs>
      </svg>
    </div>
  );
}

function FireIconGroup() {
  return (
    <div className="absolute contents inset-[0_15.68%_0_15.7%]" data-name="Fire Icon Group">
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
        <p className="bg-clip-text bg-gradient-to-b font-['Roboto_Condensed:ExtraBold',sans-serif] font-extrabold from-[#ffb121] leading-[32.068px] relative shrink-0 text-[24px] text-[transparent] to-[#bb8116] whitespace-nowrap">0</p>
      </div>
    </div>
  );
}

function ZapIcon() {
  return (
    <div className="relative shrink-0 size-[24px]" data-name="Zap Icon">
      <svg className="absolute block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 24 24">
        <g id="Zap Icon">
          <path d={svgPaths.p3b6e5180} fill="url(#paint0_linear_290_1066)" id="Vector" />
        </g>
        <defs>
          <linearGradient gradientUnits="userSpaceOnUse" id="paint0_linear_290_1066" x1="10.5745" x2="0.899453" y1="10.5727" y2="24.4536">
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
        <p className="bg-clip-text font-['Roboto_Condensed:ExtraBold',sans-serif] font-extrabold leading-[21px] relative shrink-0 text-[24px] text-[transparent] whitespace-nowrap" style={{ backgroundImage: "linear-gradient(195.05deg, rgb(255, 107, 33) 48.665%, rgb(153, 64, 20) 112.02%)" }}>{`1250 `}</p>
      </div>
    </div>
  );
}

function IconsContainer() {
  return (
    <div className="absolute content-stretch flex gap-[30px] h-[40px] items-center left-[300px] top-[20px]" data-name="Icons Container">
      <FireIconContainer />
      <ZapIconContainer />
    </div>
  );
}

function BookSpine() {
  return (
    <div className="absolute inset-[0_15.39%]" data-name="Book Spine">
      <svg className="absolute block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 26.9973 39.0009">
        <g id="Book Spine">
          <path d={svgPaths.p3b89cb00} fill="var(--fill-0, #AF66DA)" id="Vector" />
          <path d={svgPaths.p41b1df0} fill="var(--fill-0, #9857BD)" id="Vector_2" />
          <path d={svgPaths.p2dbb89f0} fill="var(--fill-0, #814AA0)" id="Vector_3" />
          <path d={svgPaths.p80bdb80} fill="var(--fill-0, #73428F)" id="Vector_4" />
          <path d={svgPaths.p5c0ba00} fill="var(--fill-0, #9857BD)" id="Vector_5" />
          <path d={svgPaths.p1e560c00} fill="var(--fill-0, #FFF9F0)" id="Vector_6" />
          <path d={svgPaths.p1880bc80} fill="var(--fill-0, #FFEFE1)" id="Vector_7" />
          <path d={svgPaths.pdf28200} fill="var(--fill-0, #FED402)" id="Vector_8" />
          <path d={svgPaths.p6f42700} fill="var(--fill-0, #FAC600)" id="Vector_9" />
          <path d={svgPaths.p3696c600} fill="var(--fill-0, #D7AA02)" id="Vector_10" />
          <path d={svgPaths.p2274f100} fill="var(--fill-0, #FED402)" id="Vector_11" />
          <path d={svgPaths.p2cddbb80} fill="var(--fill-0, #FAC600)" id="Vector_12" />
          <g id="Bookmark">
            <path d={svgPaths.p2cbf1040} fill="var(--fill-0, #FED402)" id="Vector_13" />
            <path d={svgPaths.p35056470} fill="var(--fill-0, #FED402)" id="Vector_14" />
          </g>
        </g>
      </svg>
    </div>
  );
}

function Link1() {
  return (
    <div className="relative rounded-[27.3px] shrink-0" data-name="Link">
      <div className="bg-clip-padding border-0 border-[transparent] border-solid content-stretch flex flex-col items-center justify-center relative">
        <div className="relative shrink-0 size-[38.999px]" data-name="Book Icon">
          <div className="bg-clip-padding border-0 border-[transparent] border-solid overflow-clip relative rounded-[inherit] size-full">
            <BookSpine />
          </div>
        </div>
      </div>
    </div>
  );
}

function Link2() {
  return (
    <div className="relative rounded-[27.3px] shrink-0" data-name="Link">
      <div className="bg-clip-padding border-0 border-[transparent] border-solid content-stretch flex flex-col items-center justify-center relative">
        <div className="relative shrink-0 size-[38.999px]" data-name="Medal Icon">
          <div className="bg-clip-padding border-0 border-[transparent] border-solid overflow-clip relative rounded-[inherit] size-full">
            <div className="absolute inset-[54.65%_12.12%_0_50.24%]" data-name="Vector">
              <svg className="absolute block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 14.6787 17.6881">
                <path d={svgPaths.p3fe9a500} fill="var(--fill-0, #E5002E)" id="Vector" />
              </svg>
            </div>
            <div className="absolute inset-[54.64%_50.24%_0_12.12%]" data-name="Vector">
              <svg className="absolute block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 14.6786 17.6888">
                <path d={svgPaths.pa3a3b80} fill="var(--fill-0, #FF6363)" id="Vector" />
              </svg>
            </div>
            <div className="absolute inset-[2.93%_16.43%_29.94%_16.43%]" data-name="Vector">
              <svg className="absolute block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 26.1805 26.1802">
                <path d={svgPaths.p395d800} fill="var(--fill-0, #FFF566)" id="Vector" />
              </svg>
            </div>
            <div className="absolute bottom-[29.94%] left-1/2 right-[16.43%] top-[2.93%]" data-name="Vector">
              <svg className="absolute block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 13.0902 26.1801">
                <path d={svgPaths.p2029d700} fill="var(--fill-0, #FFCF2C)" id="Vector" />
              </svg>
            </div>
            <div className="absolute inset-[0_13.51%_27.01%_13.51%]" data-name="Vector">
              <svg className="absolute block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 28.4655 28.4652">
                <path d={svgPaths.p1bac4ff0} fill="var(--fill-0, #FFC12E)" id="Vector" />
              </svg>
            </div>
            <div className="absolute bottom-[27.01%] left-1/2 right-[13.51%] top-0" data-name="Vector">
              <svg className="absolute block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 14.2328 28.4653">
                <path d={svgPaths.pa607100} fill="var(--fill-0, #FF7403)" id="Vector" />
              </svg>
            </div>
            <div className="absolute inset-[19.89%_46.49%_47.18%_41.87%]" data-name="Vector">
              <svg className="absolute block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 4.53741 12.8414">
                <path d={svgPaths.p21cc4f80} fill="var(--fill-0, #FFB500)" id="Vector" />
              </svg>
            </div>
            <div className="absolute bottom-[47.18%] left-1/2 right-[46.49%] top-[19.89%]" data-name="Vector">
              <svg className="absolute block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 1.36703 12.8414">
                <path d={svgPaths.p37497580} fill="var(--fill-0, #FF7403)" id="Vector" />
              </svg>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

function Body() {
  return (
    <div className="absolute inset-[70.47%_5.17%_0_5.17%]" data-name="Body">
      <svg className="absolute block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 34.965 11.5152">
        <g id="Body">
          <path d={svgPaths.pcaeea00} fill="var(--fill-0, #009182)" id="Vector" />
          <path d={svgPaths.pbe76f0} fill="var(--fill-0, #009182)" id="Vector_2" />
          <path d={svgPaths.p3474c480} fill="var(--fill-0, #009182)" id="Vector_3" />
        </g>
      </svg>
    </div>
  );
}

function Hair() {
  return (
    <div className="absolute inset-[66.41%_29.31%_11.74%_29.31%]" data-name="Hair">
      <svg className="absolute block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 16.1377 8.52391">
        <g id="Hair">
          <path d={svgPaths.p3bbe9200} fill="var(--fill-0, #E4EAF6)" id="Vector" />
          <path d={svgPaths.p677c00} fill="var(--fill-0, #E4EAF6)" id="Vector_2" />
        </g>
      </svg>
    </div>
  );
}

function Link3() {
  return (
    <div className="relative rounded-[27.3px] shrink-0" data-name="Link">
      <div className="bg-clip-padding border-0 border-[transparent] border-solid content-stretch flex flex-col items-center justify-center relative">
        <div className="relative shrink-0 size-[38.999px]" data-name="User Icon">
          <div className="bg-clip-padding border-0 border-[transparent] border-solid overflow-clip relative rounded-[inherit] size-full">
            <div className="absolute inset-[58.62%_5.17%_0_5.17%]" data-name="Vector">
              <svg className="absolute block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 34.965 16.1377">
                <path d={svgPaths.p313c4f00} fill="var(--fill-0, #E6AF78)" id="Vector" />
              </svg>
            </div>
            <div className="absolute inset-[70.47%_5.17%_0_5.17%]" data-name="Vector">
              <svg className="absolute block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 34.965 11.5176">
                <path d={svgPaths.p32673680} fill="var(--fill-0, #00A091)" id="Vector" />
              </svg>
            </div>
            <div className="absolute inset-[71.29%_34.82%_15.51%_34.67%]" data-name="Vector">
              <svg className="absolute block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 11.8969 5.14837">
                <path d={svgPaths.pba3a500} fill="var(--fill-0, #D5DCEC)" id="Vector" />
              </svg>
            </div>
            <div className="absolute inset-[58.62%_34.48%_26.32%_32.99%]" data-name="Vector">
              <svg className="absolute block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 12.684 5.87328">
                <path d={svgPaths.p1ba49300} fill="var(--fill-0, #D29B6E)" id="Vector" />
              </svg>
            </div>
            <div className="absolute inset-[18.97%_27.59%_32.76%_27.59%]" data-name="Vector">
              <svg className="absolute block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 17.4824 18.8272">
                <path d={svgPaths.p370e9800} fill="var(--fill-0, #F0C087)" id="Vector" />
              </svg>
            </div>
            <div className="absolute inset-[18.97%_27.59%_32.76%_27.59%]" data-name="Vector">
              <svg className="absolute block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 17.4825 18.8272">
                <path d={svgPaths.p5fbfb00} fill="var(--fill-0, #E6AF78)" id="Vector" />
              </svg>
            </div>
            <div className="absolute inset-[0_24.14%_62.07%_24.14%]" data-name="Vector">
              <svg className="absolute block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 20.1721 14.7929">
                <path d={svgPaths.p296f01f0} fill="var(--fill-0, #5A4146)" id="Vector" />
              </svg>
            </div>
            <div className="absolute bottom-1/2 left-[68.71%] right-[24.14%] top-[36.21%]" data-name="Vector">
              <svg className="absolute block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 2.78732 5.37917">
                <path d={svgPaths.p2e929d00} fill="var(--fill-0, #F0C087)" id="Vector" />
              </svg>
            </div>
            <div className="absolute bottom-1/2 left-[24.14%] right-[68.71%] top-[36.21%]" data-name="Vector">
              <svg className="absolute block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 2.78731 5.37917">
                <path d={svgPaths.p282ddf80} fill="var(--fill-0, #E6AF78)" id="Vector" />
              </svg>
            </div>
            <Body />
            <Hair />
          </div>
        </div>
      </div>
    </div>
  );
}

function Group1() {
  return (
    <div className="absolute inset-[70.24%_42.71%_0_27.53%]" data-name="Group">
      <svg className="absolute block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 11.4583 11.4583">
        <g id="Group">
          <path d={svgPaths.p8de4700} fill="var(--fill-0, #FFD845)" id="Vector" />
        </g>
      </svg>
    </div>
  );
}

function Group2() {
  return (
    <div className="absolute inset-[70.24%_42.71%_0_42.41%]" data-name="Group">
      <svg className="absolute block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 5.72917 11.4583">
        <g id="Group">
          <path d={svgPaths.p5d68500} fill="var(--fill-0, #FF9D21)" id="Vector" />
        </g>
      </svg>
    </div>
  );
}

function Group3() {
  return (
    <div className="absolute inset-[4.76%_19.08%_12.09%_3.91%]" data-name="Group">
      <svg className="absolute block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 29.6484 32.0117">
        <g id="Group">
          <path d={svgPaths.p352d5680} fill="url(#paint0_linear_283_1684)" id="Vector" />
        </g>
        <defs>
          <linearGradient gradientUnits="userSpaceOnUse" id="paint0_linear_283_1684" x1="14.8242" x2="14.8242" y1="0" y2="32.0117">
            <stop stopColor="#FFB121" />
          </linearGradient>
        </defs>
      </svg>
    </div>
  );
}

function Group4() {
  return (
    <div className="absolute inset-[4.76%_19.08%_12.09%_42.41%]" data-name="Group">
      <svg className="absolute block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 14.8242 32.0117">
        <g id="Group">
          <path d={svgPaths.p1684a400} fill="var(--fill-0, #FFD845)" id="Vector" />
        </g>
      </svg>
    </div>
  );
}

function Group() {
  return (
    <div className="absolute contents inset-[4.76%_19.08%_0_3.91%]" data-name="Group">
      <Group1 />
      <Group2 />
      <Group3 />
      <Group4 />
    </div>
  );
}

function IconNotification() {
  return (
    <div className="relative shrink-0 size-[38.5px]" data-name="Icon/notification">
      <div className="bg-clip-padding border-0 border-[transparent] border-solid overflow-clip relative rounded-[inherit] size-full">
        <Group />
        <div className="absolute inset-[-0.78%_-4.76%_38.88%_42.86%]">
          <svg className="absolute block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 23.8333 23.8333">
            <circle cx="11.9167" cy="11.9167" fill="var(--fill-0, #FF3B0A)" id="Ellipse 362" r="10.5417" stroke="var(--stroke-0, #3D494F)" strokeWidth="2.75" />
          </svg>
        </div>
      </div>
    </div>
  );
}

function Div() {
  return (
    <div className="relative shrink-0 w-[500px]" data-name="div">
      <div className="bg-clip-padding border-0 border-[transparent] border-solid content-stretch flex gap-[94px] items-center justify-center relative w-full">
        <Link1 />
        <Link2 />
        <Link3 />
        <IconNotification />
      </div>
    </div>
  );
}

function Header() {
  return (
    <div className="absolute bg-[#343e42] bottom-0 content-stretch flex h-[91px] items-center justify-between left-px px-[23px] py-px rounded-tl-[15px] rounded-tr-[15px] w-[544px]" data-name="Header">
      <div aria-hidden="true" className="absolute border border-[#56656b] border-solid inset-0 pointer-events-none rounded-tl-[15px] rounded-tr-[15px]" />
      <Div />
    </div>
  );
}

export default function Phone() {
  return (
    <div className="bg-[#2d363a] relative size-full" data-name="Phone">
      <Frame />
      <Link />
      <BackButton />
      <IconsContainer />
      <div className="absolute h-0 left-[499px] top-[32px] w-[19px]">
        <div className="absolute inset-[-1.5px_-7.89%]">
          <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 22 3">
            <path d="M1.5 1.5H20.5" id="Vector 226" stroke="var(--stroke-0, #F4F5FC)" strokeLinecap="round" strokeWidth="3" />
          </svg>
        </div>
      </div>
      <div className="absolute h-0 left-[505px] top-[40px] w-[13px]">
        <div className="absolute inset-[-1.5px_-11.54%]">
          <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 16 3">
            <path d="M1.5 1.5H14.5" id="Vector 227" stroke="var(--stroke-0, #F4F5FC)" strokeLinecap="round" strokeWidth="3" />
          </svg>
        </div>
      </div>
      <div className="absolute h-0 left-[499px] top-[48px] w-[19px]">
        <div className="absolute inset-[-1.5px_-7.89%]">
          <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 22 3">
            <path d="M1.5 1.5H20.5" id="Vector 226" stroke="var(--stroke-0, #F4F5FC)" strokeLinecap="round" strokeWidth="3" />
          </svg>
        </div>
      </div>
      <Header />
      <div className="absolute h-0 left-[-9px] top-[78px] w-[560px]">
        <div className="absolute inset-[-1px_0]">
          <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 560 2">
            <path d="M0 1H560" id="Vector 686" stroke="var(--stroke-0, #364044)" strokeWidth="2" />
          </svg>
        </div>
      </div>
    </div>
  );
}