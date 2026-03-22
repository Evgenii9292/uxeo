// Images replaced with colored shapes

function Heading() {
  return (
    <div className="absolute h-[36px] left-0 top-0 w-[1280px]" data-name="Heading 2">
      <p className="absolute font-['Inter:Regular',sans-serif] font-normal leading-[36px] left-0 not-italic text-[#101828] text-[24px] top-0 tracking-[0.0703px] whitespace-nowrap">Урок 1 — Что такое UI Kit</p>
    </div>
  );
}

function Paragraph() {
  return (
    <div className="absolute h-[17px] left-0 top-[48px] w-[1280px]" data-name="Paragraph">
      <p className="absolute font-['Inter:Regular',sans-serif] font-normal leading-[17px] left-0 not-italic text-[#8e9199] text-[13px] top-[0.5px] tracking-[-0.16px] whitespace-nowrap">Основы систем компонентов</p>
    </div>
  );
}

function Heading1() {
  return (
    <div className="absolute h-[27px] left-0 top-0 w-[1280px]" data-name="Heading 3">
      <p className="absolute font-['Inter:Regular',sans-serif] font-normal leading-[27px] left-0 not-italic text-[#101828] text-[18px] top-[0.5px] tracking-[-0.4395px] whitespace-nowrap">Compare UI</p>
    </div>
  );
}

function Paragraph1() {
  return (
    <div className="absolute content-stretch flex h-[15px] items-start left-0 top-[35px] w-[1280px]" data-name="Paragraph">
      <p className="flex-[1_0_0] font-['Inter:Regular',sans-serif] font-normal leading-[15px] min-h-px min-w-px not-italic relative text-[#8e9199] text-[12px] tracking-[-0.15px]">Сравните два варианта интерфейса</p>
    </div>
  );
}

function Paragraph2() {
  return (
    <div className="h-[14px] relative shrink-0 w-full" data-name="Paragraph">
      <p className="absolute font-['Inter:Regular',sans-serif] font-normal leading-[14px] left-0 not-italic text-[#8e9199] text-[11px] top-[0.5px] tracking-[-0.14px] whitespace-nowrap">1. Где используется UI Kit?</p>
    </div>
  );
}

function Paragraph3() {
  return (
    <div className="absolute h-[21px] left-0 top-[8px] w-[9.297px]" data-name="Paragraph">
      <p className="absolute font-['Inter:Regular',sans-serif] font-normal leading-[21px] left-0 not-italic text-[#364146] text-[14px] top-0 tracking-[-0.17px] whitespace-nowrap">A</p>
    </div>
  );
}

function Paragraph4() {
  return (
    <div className="absolute h-[13.5px] left-0 top-0 w-[166px]" data-name="Paragraph">
      <p className="absolute font-['Inter:Regular',sans-serif] font-normal leading-[13.5px] left-0 not-italic text-[#101828] text-[9px] top-[0.5px] tracking-[-0.12px] whitespace-nowrap">UX Дизайн Курс</p>
    </div>
  );
}

function Paragraph5() {
  return (
    <div className="h-[9px] relative shrink-0 w-full" data-name="Paragraph">
      <p className="absolute font-['Inter:Regular',sans-serif] font-normal leading-[9px] left-0 not-italic text-[6px] text-white top-[-0.5px] tracking-[-0.08px] whitespace-nowrap">Начать</p>
    </div>
  );
}

function Container6() {
  return (
    <div className="bg-[#3b82f6] h-[20.5px] relative rounded-[5px] shrink-0 w-[36.445px]" data-name="Container">
      <div className="bg-clip-padding border-0 border-[transparent] border-solid content-stretch flex flex-col items-start pt-[4px] px-[8px] relative size-full">
        <Paragraph5 />
      </div>
    </div>
  );
}

function Paragraph6() {
  return (
    <div className="h-[10.5px] relative shrink-0 w-full" data-name="Paragraph">
      <p className="absolute font-['Inter:Regular',sans-serif] font-normal leading-[10.5px] left-0 not-italic text-[7px] text-white top-0 tracking-[-0.09px] whitespace-nowrap">Купить</p>
    </div>
  );
}

function Container7() {
  return (
    <div className="bg-[#22c55e] h-[20.5px] relative rounded-[7px] shrink-0 w-[43.18px]" data-name="Container">
      <div className="bg-clip-padding border-0 border-[transparent] border-solid content-stretch flex flex-col items-start pt-[5px] px-[10px] relative size-full">
        <Paragraph6 />
      </div>
    </div>
  );
}

function Paragraph7() {
  return (
    <div className="h-[7.5px] relative shrink-0 w-full" data-name="Paragraph">
      <p className="absolute font-['Inter:Regular',sans-serif] font-normal leading-[7.5px] left-0 not-italic text-[5px] text-white top-[-0.5px] tracking-[-0.07px] whitespace-nowrap">Инфо</p>
    </div>
  );
}

function Container8() {
  return (
    <div className="bg-[#8b5cf6] h-[20.5px] relative rounded-[4px] shrink-0 w-[24.781px]" data-name="Container">
      <div className="bg-clip-padding border-0 border-[transparent] border-solid content-stretch flex flex-col items-start pt-[3px] px-[6px] relative size-full">
        <Paragraph7 />
      </div>
    </div>
  );
}

function Container5() {
  return (
    <div className="absolute content-stretch flex gap-[4px] h-[20.5px] items-start left-0 top-[25.5px] w-[166px]" data-name="Container">
      <Container6 />
      <Container7 />
      <Container8 />
    </div>
  );
}

function ImageWithFallback() {
  return (
    <div className="absolute h-[40px] left-[8px] rounded-[4px] top-[8px] w-[150px]" data-name="ImageWithFallback">
      <div className="absolute inset-0 rounded-[4px]" style={{ background: "#bfdbfe" }} />
    </div>
  );
}

function Paragraph8() {
  return (
    <div className="absolute content-stretch flex h-[9px] items-start left-[8px] top-[52px] w-[150px]" data-name="Paragraph">
      <p className="flex-[1_0_0] font-['Inter:Regular',sans-serif] font-normal leading-[9px] min-h-px min-w-px not-italic relative text-[#364146] text-[7px] tracking-[-0.09px]">Основы UX</p>
    </div>
  );
}

function Paragraph9() {
  return (
    <div className="absolute h-[9px] left-[8px] top-[61px] w-[150px]" data-name="Paragraph">
      <p className="absolute font-['Inter:Regular',sans-serif] font-normal leading-[9px] left-0 not-italic text-[#8e9199] text-[6px] top-[-0.5px] tracking-[-0.08px] whitespace-nowrap">12 уроков</p>
    </div>
  );
}

function Container9() {
  return (
    <div className="absolute bg-[#f7f8fc] h-[78px] left-0 rounded-[6px] top-[56px] w-[166px]" data-name="Container">
      <ImageWithFallback />
      <Paragraph8 />
      <Paragraph9 />
    </div>
  );
}

function ImageWithFallback1() {
  return (
    <div className="absolute h-[35px] left-[6px] rounded-[4px] top-[6px] w-[154px]" data-name="ImageWithFallback">
      <div className="absolute inset-0 rounded-[4px]" style={{ background: "#a5f3fc" }} />
    </div>
  );
}

function Paragraph10() {
  return (
    <div className="absolute content-stretch flex h-[8px] items-start left-[6px] top-[44px] w-[154px]" data-name="Paragraph">
      <p className="flex-[1_0_0] font-['Inter:Regular',sans-serif] font-normal leading-[8px] min-h-px min-w-px not-italic relative text-[#364146] text-[6px] tracking-[-0.08px]">Продвинутый</p>
    </div>
  );
}

function Paragraph11() {
  return (
    <div className="absolute h-[7.5px] left-[6px] top-[52px] w-[154px]" data-name="Paragraph">
      <p className="absolute font-['Inter:Regular',sans-serif] font-normal leading-[7.5px] left-0 not-italic text-[#8e9199] text-[5px] top-[-0.5px] tracking-[-0.07px] whitespace-nowrap">8 уроков</p>
    </div>
  );
}

function Container10() {
  return (
    <div className="absolute bg-[#f7f8fc] h-[65.5px] left-0 rounded-[6px] top-[141px] w-[166px]" data-name="Container">
      <ImageWithFallback1 />
      <Paragraph10 />
      <Paragraph11 />
    </div>
  );
}

function Paragraph12() {
  return (
    <div className="h-[7.5px] relative shrink-0 w-full" data-name="Paragraph">
      <p className="absolute font-['Inter:Regular',sans-serif] font-normal leading-[7.5px] left-0 not-italic text-[#8e9199] text-[5px] top-[-0.5px] tracking-[-0.07px] whitespace-nowrap">Поиск курсов...</p>
    </div>
  );
}

function Container11() {
  return (
    <div className="absolute bg-[#f7f8fc] content-stretch flex flex-col h-[15.5px] items-start left-0 pb-px pt-[4px] px-[7px] rounded-[4px] top-[218.5px] w-[166px]" data-name="Container">
      <div aria-hidden="true" className="absolute border border-[#d1d3db] border-solid inset-0 pointer-events-none rounded-[4px]" />
      <Paragraph12 />
    </div>
  );
}

function Container4() {
  return (
    <div className="h-[211px] relative shrink-0 w-full" data-name="Container">
      <Paragraph4 />
      <Container5 />
      <Container9 />
      <Container10 />
      <Container11 />
    </div>
  );
}

function Lesson1Quiz1VariantA() {
  return (
    <div className="absolute bg-white content-stretch flex flex-col h-[231px] items-start left-0 overflow-clip pt-[10px] px-[10px] rounded-[14.99px] top-0 w-[186px]" data-name="Lesson1Quiz1VariantA">
      <Container4 />
    </div>
  );
}

function Container3() {
  return (
    <div className="h-[231px] relative shrink-0 w-[207.297px]" data-name="Container">
      <div className="bg-clip-padding border-0 border-[transparent] border-solid relative size-full">
        <Paragraph3 />
        <Lesson1Quiz1VariantA />
      </div>
    </div>
  );
}

function Paragraph13() {
  return (
    <div className="absolute h-[21px] left-0 top-[8px] w-[8.945px]" data-name="Paragraph">
      <p className="absolute font-['Inter:Regular',sans-serif] font-normal leading-[21px] left-0 not-italic text-[#364146] text-[14px] top-0 tracking-[-0.17px] whitespace-nowrap">B</p>
    </div>
  );
}

function Paragraph14() {
  return (
    <div className="absolute h-[9px] left-0 top-0 w-[70px]" data-name="Paragraph">
      <p className="absolute font-['Inter:Regular',sans-serif] font-normal leading-[9px] left-0 not-italic text-[#8e9199] text-[6px] top-[-0.5px] tracking-[-0.08px] whitespace-nowrap">Components</p>
    </div>
  );
}

function Paragraph15() {
  return (
    <div className="h-[7.5px] relative shrink-0 w-full" data-name="Paragraph">
      <p className="absolute font-['Inter:Regular',sans-serif] font-normal leading-[7.5px] left-0 not-italic text-[5px] text-white top-[-0.5px] tracking-[-0.07px] whitespace-nowrap">Primary</p>
    </div>
  );
}

function Container16() {
  return (
    <div className="bg-[#3b82f6] h-[13.5px] relative rounded-[4px] shrink-0 w-full" data-name="Container">
      <div className="content-stretch flex flex-col items-start pt-[3px] px-[6px] relative size-full">
        <Paragraph15 />
      </div>
    </div>
  );
}

function Container15() {
  return (
    <div className="absolute bg-[#f7f8fc] content-stretch flex flex-col h-[23.5px] items-start left-0 pb-px pt-[5px] px-[5px] rounded-[4px] top-[15px] w-[70px]" data-name="Container">
      <div aria-hidden="true" className="absolute border border-[#d1d3db] border-solid inset-0 pointer-events-none rounded-[4px]" />
      <Container16 />
    </div>
  );
}

function Paragraph16() {
  return (
    <div className="h-[7.5px] relative shrink-0 w-full" data-name="Paragraph">
      <p className="absolute font-['Inter:Regular',sans-serif] font-normal leading-[7.5px] left-0 not-italic text-[#3b82f6] text-[5px] top-[-0.5px] tracking-[-0.07px] whitespace-nowrap">Secondary</p>
    </div>
  );
}

function Container18() {
  return (
    <div className="bg-[#f7f8fc] h-[15.5px] relative rounded-[4px] shrink-0 w-full" data-name="Container">
      <div aria-hidden="true" className="absolute border border-[#3b82f6] border-solid inset-0 pointer-events-none rounded-[4px]" />
      <div className="content-stretch flex flex-col items-start pb-px pt-[4px] px-[7px] relative size-full">
        <Paragraph16 />
      </div>
    </div>
  );
}

function Container17() {
  return (
    <div className="absolute bg-[#f7f8fc] content-stretch flex flex-col h-[25.5px] items-start left-0 pb-px pt-[5px] px-[5px] rounded-[4px] top-[42.5px] w-[70px]" data-name="Container">
      <div aria-hidden="true" className="absolute border border-[#d1d3db] border-solid inset-0 pointer-events-none rounded-[4px]" />
      <Container18 />
    </div>
  );
}

function ImageWithFallback2() {
  return (
    <div className="h-[12px] relative rounded-[2px] shrink-0 w-full" data-name="ImageWithFallback">
      <div className="absolute inset-0 rounded-[2px]" style={{ background: "#dbeafe" }} />
    </div>
  );
}

function Paragraph17() {
  return (
    <div className="h-[4.5px] relative shrink-0 w-full" data-name="Paragraph">
      <p className="absolute font-['Inter:Regular',sans-serif] font-normal leading-[4.5px] left-0 not-italic text-[#364146] text-[3px] top-[0.5px] tracking-[-0.05px] whitespace-nowrap">Курс</p>
    </div>
  );
}

function Container20() {
  return (
    <div className="bg-[#f7f8fc] h-[23.5px] relative rounded-[3px] shrink-0 w-full" data-name="Container">
      <div className="content-stretch flex flex-col gap-px items-start pt-[3px] px-[3px] relative size-full">
        <ImageWithFallback2 />
        <Paragraph17 />
      </div>
    </div>
  );
}

function Container19() {
  return (
    <div className="absolute bg-[#f7f8fc] content-stretch flex flex-col h-[33.5px] items-start left-0 pb-px pt-[5px] px-[5px] rounded-[4px] top-[72px] w-[70px]" data-name="Container">
      <div aria-hidden="true" className="absolute border border-[#d1d3db] border-solid inset-0 pointer-events-none rounded-[4px]" />
      <Container20 />
    </div>
  );
}

function Paragraph18() {
  return (
    <div className="h-[6px] relative shrink-0 w-full" data-name="Paragraph">
      <p className="absolute font-['Inter:Regular',sans-serif] font-normal leading-[6px] left-0 not-italic text-[#8e9199] text-[4px] top-[0.5px] tracking-[-0.06px] whitespace-nowrap">Поиск</p>
    </div>
  );
}

function Container22() {
  return (
    <div className="bg-white h-[12px] relative rounded-[2px] shrink-0 w-full" data-name="Container">
      <div aria-hidden="true" className="absolute border border-[#d1d3db] border-solid inset-0 pointer-events-none rounded-[2px]" />
      <div className="content-stretch flex flex-col items-start pb-px pt-[3px] px-[4px] relative size-full">
        <Paragraph18 />
      </div>
    </div>
  );
}

function Container21() {
  return (
    <div className="absolute bg-[#f7f8fc] content-stretch flex flex-col h-[22px] items-start left-0 pb-px pt-[5px] px-[5px] rounded-[4px] top-[109.5px] w-[70px]" data-name="Container">
      <div aria-hidden="true" className="absolute border border-[#d1d3db] border-solid inset-0 pointer-events-none rounded-[4px]" />
      <Container22 />
    </div>
  );
}

function Container14() {
  return (
    <div className="h-[211px] relative shrink-0 w-[70px]" data-name="Container">
      <div className="bg-clip-padding border-0 border-[transparent] border-solid relative size-full">
        <Paragraph14 />
        <Container15 />
        <Container17 />
        <Container19 />
        <Container21 />
      </div>
    </div>
  );
}

function Paragraph19() {
  return (
    <div className="h-[10.5px] relative shrink-0 w-[90px]" data-name="Paragraph">
      <div className="bg-clip-padding border-0 border-[transparent] border-solid relative size-full">
        <p className="absolute font-['Inter:Regular',sans-serif] font-normal leading-[10.5px] left-0 not-italic text-[#101828] text-[7px] top-0 tracking-[-0.09px] whitespace-nowrap">UX Курс</p>
      </div>
    </div>
  );
}

function Paragraph20() {
  return (
    <div className="h-[7.5px] relative shrink-0 w-full" data-name="Paragraph">
      <p className="absolute font-['Inter:Regular',sans-serif] font-normal leading-[7.5px] left-0 not-italic text-[5px] text-white top-[-0.5px] tracking-[-0.07px] whitespace-nowrap">Начать</p>
    </div>
  );
}

function Container25() {
  return (
    <div className="bg-[#3b82f6] h-[15.5px] relative rounded-[4px] shrink-0 w-[29.023px]" data-name="Container">
      <div className="bg-clip-padding border-0 border-[transparent] border-solid content-stretch flex flex-col items-start pt-[3px] px-[6px] relative size-full">
        <Paragraph20 />
      </div>
    </div>
  );
}

function Paragraph21() {
  return (
    <div className="h-[7.5px] relative shrink-0 w-full" data-name="Paragraph">
      <p className="absolute font-['Inter:Regular',sans-serif] font-normal leading-[7.5px] left-0 not-italic text-[#3b82f6] text-[5px] top-[-0.5px] tracking-[-0.07px] whitespace-nowrap">Инфо</p>
    </div>
  );
}

function Container26() {
  return (
    <div className="bg-[#f7f8fc] h-[15.5px] relative rounded-[4px] shrink-0 w-[26.781px]" data-name="Container">
      <div aria-hidden="true" className="absolute border border-[#3b82f6] border-solid inset-0 pointer-events-none rounded-[4px]" />
      <div className="bg-clip-padding border-0 border-[transparent] border-solid content-stretch flex flex-col items-start pb-px pt-[4px] px-[7px] relative size-full">
        <Paragraph21 />
      </div>
    </div>
  );
}

function Container24() {
  return (
    <div className="h-[15.5px] relative shrink-0 w-[90px]" data-name="Container">
      <div className="bg-clip-padding border-0 border-[transparent] border-solid content-stretch flex gap-[2px] items-start relative size-full">
        <Container25 />
        <Container26 />
      </div>
    </div>
  );
}

function ImageWithFallback3() {
  return (
    <div className="h-[20px] relative rounded-[2px] shrink-0 w-full" data-name="ImageWithFallback">
      <div className="absolute inset-0 rounded-[2px]" style={{ background: "#dbeafe" }} />
    </div>
  );
}

function Paragraph22() {
  return (
    <div className="h-[7.5px] relative shrink-0 w-full" data-name="Paragraph">
      <p className="absolute font-['Inter:Regular',sans-serif] font-normal leading-[7.5px] left-0 not-italic text-[#364146] text-[5px] top-[-0.5px] tracking-[-0.07px] whitespace-nowrap">UX дизайн</p>
    </div>
  );
}

function Container27() {
  return (
    <div className="bg-[#f7f8fc] h-[37.5px] relative rounded-[3px] shrink-0 w-[90px]" data-name="Container">
      <div className="bg-clip-padding border-0 border-[transparent] border-solid content-stretch flex flex-col gap-[2px] items-start pt-[4px] px-[4px] relative size-full">
        <ImageWithFallback3 />
        <Paragraph22 />
      </div>
    </div>
  );
}

function Paragraph23() {
  return (
    <div className="h-[6px] relative shrink-0 w-full" data-name="Paragraph">
      <p className="absolute font-['Inter:Regular',sans-serif] font-normal leading-[6px] left-0 not-italic text-[#8e9199] text-[4px] top-[0.5px] tracking-[-0.06px] whitespace-nowrap">Поиск</p>
    </div>
  );
}

function Container28() {
  return (
    <div className="bg-white h-[12px] relative rounded-[2px] shrink-0 w-[90px]" data-name="Container">
      <div aria-hidden="true" className="absolute border border-[#d1d3db] border-solid inset-0 pointer-events-none rounded-[2px]" />
      <div className="bg-clip-padding border-0 border-[transparent] border-solid content-stretch flex flex-col items-start pb-px pt-[3px] px-[4px] relative size-full">
        <Paragraph23 />
      </div>
    </div>
  );
}

function Container23() {
  return (
    <div className="flex-[90_0_0] h-[211px] min-h-px min-w-px relative" data-name="Container">
      <div className="bg-clip-padding border-0 border-[transparent] border-solid content-stretch flex flex-col gap-[4px] items-start relative size-full">
        <Paragraph19 />
        <Container24 />
        <Container27 />
        <Container28 />
      </div>
    </div>
  );
}

function Container13() {
  return (
    <div className="content-stretch flex gap-[6px] h-[211px] items-start relative shrink-0 w-full" data-name="Container">
      <Container14 />
      <Container23 />
    </div>
  );
}

function Lesson1Quiz1VariantB() {
  return (
    <div className="absolute bg-white content-stretch flex flex-col h-[231px] items-start left-0 overflow-clip pt-[10px] px-[10px] rounded-[14.99px] top-0 w-[186px]" data-name="Lesson1Quiz1VariantB">
      <Container13 />
    </div>
  );
}

function Container12() {
  return (
    <div className="h-[231px] relative shrink-0 w-[206.945px]" data-name="Container">
      <div className="bg-clip-padding border-0 border-[transparent] border-solid relative size-full">
        <Paragraph13 />
        <Lesson1Quiz1VariantB />
      </div>
    </div>
  );
}

function Container2() {
  return (
    <div className="content-stretch flex gap-[40px] h-[231px] items-start relative shrink-0 w-full" data-name="Container">
      <Container3 />
      <Container12 />
    </div>
  );
}

function Container1() {
  return (
    <div className="absolute content-stretch flex flex-col gap-[24px] h-[269px] items-start left-0 top-[90px] w-[1280px]" data-name="Container">
      <Paragraph2 />
      <Container2 />
    </div>
  );
}

function Paragraph24() {
  return (
    <div className="h-[14px] relative shrink-0 w-full" data-name="Paragraph">
      <p className="absolute font-['Inter:Regular',sans-serif] font-normal leading-[14px] left-0 not-italic text-[#8e9199] text-[11px] top-[0.5px] tracking-[-0.14px] whitespace-nowrap">2. Где интерфейс выглядит более системным?</p>
    </div>
  );
}

function Paragraph25() {
  return (
    <div className="absolute h-[21px] left-0 top-[8px] w-[9.297px]" data-name="Paragraph">
      <p className="absolute font-['Inter:Regular',sans-serif] font-normal leading-[21px] left-0 not-italic text-[#364146] text-[14px] top-0 tracking-[-0.17px] whitespace-nowrap">A</p>
    </div>
  );
}

function Paragraph26() {
  return (
    <div className="h-[10.5px] relative shrink-0 w-full" data-name="Paragraph">
      <p className="absolute font-['Inter:Regular',sans-serif] font-normal leading-[10.5px] left-0 not-italic text-[7px] text-white top-0 tracking-[-0.09px] whitespace-nowrap">Купить</p>
    </div>
  );
}

function Container34() {
  return (
    <div className="bg-[#3b82f6] h-[22.5px] relative rounded-[4px] shrink-0 w-[43.18px]" data-name="Container">
      <div className="bg-clip-padding border-0 border-[transparent] border-solid content-stretch flex flex-col items-start pt-[6px] px-[10px] relative size-full">
        <Paragraph26 />
      </div>
    </div>
  );
}

function Paragraph27() {
  return (
    <div className="h-[9px] relative shrink-0 w-full" data-name="Paragraph">
      <p className="absolute font-['Inter:Regular',sans-serif] font-normal leading-[9px] left-0 not-italic text-[6px] text-white top-[-0.5px] tracking-[-0.08px] whitespace-nowrap">Заказать</p>
    </div>
  );
}

function Container35() {
  return (
    <div className="bg-[#22c55e] h-[22.5px] relative rounded-[6px] shrink-0 w-[37.789px]" data-name="Container">
      <div className="bg-clip-padding border-0 border-[transparent] border-solid content-stretch flex flex-col items-start pt-[4px] px-[6px] relative size-full">
        <Paragraph27 />
      </div>
    </div>
  );
}

function Container33() {
  return (
    <div className="h-[22.5px] relative shrink-0 w-[166px]" data-name="Container">
      <div className="bg-clip-padding border-0 border-[transparent] border-solid content-stretch flex gap-[4px] items-start relative size-full">
        <Container34 />
        <Container35 />
      </div>
    </div>
  );
}

function ImageWithFallback4() {
  return (
    <div className="h-[24px] relative rounded-[3px] shrink-0 w-full" data-name="ImageWithFallback">
      <div className="absolute inset-0 rounded-[3px]" style={{ background: "#bfdbfe" }} />
    </div>
  );
}

function Container36() {
  return (
    <div className="bg-[#f7f8fc] h-[40px] relative rounded-[6px] shrink-0 w-[166px]" data-name="Container">
      <div className="bg-clip-padding border-0 border-[transparent] border-solid content-stretch flex flex-col items-start pt-[8px] px-[8px] relative size-full">
        <ImageWithFallback4 />
      </div>
    </div>
  );
}

function ImageWithFallback5() {
  return (
    <div className="h-[38px] relative rounded-[3px] shrink-0 w-full" data-name="ImageWithFallback">
      <div className="absolute inset-0 rounded-[3px]" style={{ background: "#c4b5fd" }} />
    </div>
  );
}

function Container37() {
  return (
    <div className="bg-[#f7f8fc] h-[50px] relative rounded-[4px] shrink-0 w-[166px]" data-name="Container">
      <div className="bg-clip-padding border-0 border-[transparent] border-solid content-stretch flex flex-col items-start pt-[6px] px-[6px] relative size-full">
        <ImageWithFallback5 />
      </div>
    </div>
  );
}

function Container32() {
  return (
    <div className="content-stretch flex flex-col gap-[6px] h-[211px] items-start justify-center py-[43.25px] relative shrink-0 w-full" data-name="Container">
      <Container33 />
      <Container36 />
      <Container37 />
    </div>
  );
}

function Lesson1Quiz2VariantA() {
  return (
    <div className="absolute bg-white content-stretch flex flex-col h-[231px] items-start left-0 overflow-clip pt-[10px] px-[10px] rounded-[14.99px] top-0 w-[186px]" data-name="Lesson1Quiz2VariantA">
      <Container32 />
    </div>
  );
}

function Container31() {
  return (
    <div className="h-[231px] relative shrink-0 w-[207.297px]" data-name="Container">
      <div className="bg-clip-padding border-0 border-[transparent] border-solid relative size-full">
        <Paragraph25 />
        <Lesson1Quiz2VariantA />
      </div>
    </div>
  );
}

function Paragraph28() {
  return (
    <div className="absolute h-[21px] left-0 top-[8px] w-[8.945px]" data-name="Paragraph">
      <p className="absolute font-['Inter:Regular',sans-serif] font-normal leading-[21px] left-0 not-italic text-[#364146] text-[14px] top-0 tracking-[-0.17px] whitespace-nowrap">B</p>
    </div>
  );
}

function Paragraph29() {
  return (
    <div className="h-[10.5px] relative shrink-0 w-full" data-name="Paragraph">
      <p className="absolute font-['Inter:Regular',sans-serif] font-normal leading-[10.5px] left-0 not-italic text-[7px] text-white top-0 tracking-[-0.09px] whitespace-nowrap">Купить</p>
    </div>
  );
}

function Container41() {
  return (
    <div className="bg-[#3b82f6] h-[22.5px] relative rounded-[6px] shrink-0 w-[47.18px]" data-name="Container">
      <div className="bg-clip-padding border-0 border-[transparent] border-solid content-stretch flex flex-col items-start pt-[6px] px-[12px] relative size-full">
        <Paragraph29 />
      </div>
    </div>
  );
}

function Paragraph30() {
  return (
    <div className="h-[10.5px] relative shrink-0 w-full" data-name="Paragraph">
      <p className="absolute font-['Inter:Regular',sans-serif] font-normal leading-[10.5px] left-0 not-italic text-[7px] text-white top-0 tracking-[-0.09px] whitespace-nowrap">Заказать</p>
    </div>
  );
}

function Container42() {
  return (
    <div className="bg-[#3b82f6] h-[22.5px] relative rounded-[6px] shrink-0 w-[54.117px]" data-name="Container">
      <div className="bg-clip-padding border-0 border-[transparent] border-solid content-stretch flex flex-col items-start pt-[6px] px-[12px] relative size-full">
        <Paragraph30 />
      </div>
    </div>
  );
}

function Container40() {
  return (
    <div className="h-[22.5px] relative shrink-0 w-[166px]" data-name="Container">
      <div className="bg-clip-padding border-0 border-[transparent] border-solid content-stretch flex gap-[6px] items-start relative size-full">
        <Container41 />
        <Container42 />
      </div>
    </div>
  );
}

function ImageWithFallback6() {
  return (
    <div className="h-[29px] relative rounded-[4px] shrink-0 w-full" data-name="ImageWithFallback">
      <div className="absolute inset-0 rounded-[4px]" style={{ background: "#bfdbfe" }} />
    </div>
  );
}

function Container43() {
  return (
    <div className="bg-[#f7f8fc] h-[45px] relative rounded-[6px] shrink-0 w-[166px]" data-name="Container">
      <div className="bg-clip-padding border-0 border-[transparent] border-solid content-stretch flex flex-col items-start pt-[8px] px-[8px] relative size-full">
        <ImageWithFallback6 />
      </div>
    </div>
  );
}

function ImageWithFallback7() {
  return (
    <div className="h-[29px] relative rounded-[4px] shrink-0 w-full" data-name="ImageWithFallback">
      <div className="absolute inset-0 rounded-[4px]" style={{ background: "#dbeafe" }} />
    </div>
  );
}

function Container44() {
  return (
    <div className="bg-[#f7f8fc] h-[45px] relative rounded-[6px] shrink-0 w-[166px]" data-name="Container">
      <div className="bg-clip-padding border-0 border-[transparent] border-solid content-stretch flex flex-col items-start pt-[8px] px-[8px] relative size-full">
        <ImageWithFallback7 />
      </div>
    </div>
  );
}

function Container39() {
  return (
    <div className="content-stretch flex flex-col gap-[8px] h-[211px] items-start justify-center py-[41.25px] relative shrink-0 w-full" data-name="Container">
      <Container40 />
      <Container43 />
      <Container44 />
    </div>
  );
}

function Lesson1Quiz2VariantB() {
  return (
    <div className="absolute bg-white content-stretch flex flex-col h-[231px] items-start left-0 overflow-clip pt-[10px] px-[10px] rounded-[14.99px] top-0 w-[186px]" data-name="Lesson1Quiz2VariantB">
      <Container39 />
    </div>
  );
}

function Container38() {
  return (
    <div className="h-[231px] relative shrink-0 w-[206.945px]" data-name="Container">
      <div className="bg-clip-padding border-0 border-[transparent] border-solid relative size-full">
        <Paragraph28 />
        <Lesson1Quiz2VariantB />
      </div>
    </div>
  );
}

function Container30() {
  return (
    <div className="content-stretch flex gap-[40px] h-[231px] items-start relative shrink-0 w-full" data-name="Container">
      <Container31 />
      <Container38 />
    </div>
  );
}

function Container29() {
  return (
    <div className="absolute content-stretch flex flex-col gap-[24px] h-[269px] items-start left-0 top-[407px] w-[1280px]" data-name="Container">
      <Paragraph24 />
      <Container30 />
    </div>
  );
}

function Paragraph31() {
  return (
    <div className="h-[14px] relative shrink-0 w-full" data-name="Paragraph">
      <p className="absolute font-['Inter:Regular',sans-serif] font-normal leading-[14px] left-0 not-italic text-[#8e9199] text-[11px] top-[0.5px] tracking-[-0.14px] whitespace-nowrap">3. Где интерфейс легче поддерживать?</p>
    </div>
  );
}

function Paragraph32() {
  return (
    <div className="absolute h-[21px] left-0 top-[8px] w-[9.297px]" data-name="Paragraph">
      <p className="absolute font-['Inter:Regular',sans-serif] font-normal leading-[21px] left-0 not-italic text-[#364146] text-[14px] top-0 tracking-[-0.17px] whitespace-nowrap">A</p>
    </div>
  );
}

function Paragraph33() {
  return (
    <div className="h-[9px] relative shrink-0 w-full" data-name="Paragraph">
      <p className="absolute font-['Inter:Regular',sans-serif] font-normal leading-[9px] left-0 not-italic text-[6px] text-white top-[-0.5px] tracking-[-0.08px] whitespace-nowrap">Купить</p>
    </div>
  );
}

function Container50() {
  return (
    <div className="absolute bg-[#3b82f6] content-stretch flex flex-col h-[19px] items-start left-0 pt-[4px] px-[8px] rounded-[4px] top-0 w-[35.852px]" data-name="Container">
      <Paragraph33 />
    </div>
  );
}

function Paragraph34() {
  return (
    <div className="h-[9px] relative shrink-0 w-full" data-name="Paragraph">
      <p className="absolute font-['Inter:Regular',sans-serif] font-normal leading-[9px] left-0 not-italic text-[6px] text-white top-[-0.5px] tracking-[-0.08px] whitespace-nowrap">Купить</p>
    </div>
  );
}

function Container51() {
  return (
    <div className="absolute bg-[#3b82f6] content-stretch flex flex-col h-[19px] items-start left-[39.85px] pt-[5px] px-[9px] rounded-[5px] top-0 w-[37.852px]" data-name="Container">
      <Paragraph34 />
    </div>
  );
}

function Paragraph35() {
  return (
    <div className="h-[9px] relative shrink-0 w-full" data-name="Paragraph">
      <p className="absolute font-['Inter:Regular',sans-serif] font-normal leading-[9px] left-0 not-italic text-[6px] text-white top-[-0.5px] tracking-[-0.08px] whitespace-nowrap">Купить</p>
    </div>
  );
}

function Container52() {
  return (
    <div className="absolute bg-[#3b82f6] content-stretch flex flex-col h-[19px] items-start left-[81.7px] pt-[4px] px-[7px] rounded-[4px] top-0 w-[33.852px]" data-name="Container">
      <Paragraph35 />
    </div>
  );
}

function Container49() {
  return (
    <div className="h-[19px] relative shrink-0 w-[166px]" data-name="Container">
      <div className="bg-clip-padding border-0 border-[transparent] border-solid relative size-full">
        <Container50 />
        <Container51 />
        <Container52 />
      </div>
    </div>
  );
}

function Paragraph36() {
  return (
    <div className="h-[9px] relative shrink-0 w-full" data-name="Paragraph">
      <p className="absolute font-['Inter:Regular',sans-serif] font-normal leading-[9px] left-0 not-italic text-[6px] text-white top-[-0.5px] tracking-[-0.08px] whitespace-nowrap">Купить</p>
    </div>
  );
}

function Container54() {
  return (
    <div className="absolute bg-[#3b82f6] content-stretch flex flex-col h-[19px] items-start left-0 pt-[3px] px-[8px] rounded-[6px] top-0 w-[35.852px]" data-name="Container">
      <Paragraph36 />
    </div>
  );
}

function Paragraph37() {
  return (
    <div className="h-[9px] relative shrink-0 w-full" data-name="Paragraph">
      <p className="absolute font-['Inter:Regular',sans-serif] font-normal leading-[9px] left-0 not-italic text-[6px] text-white top-[-0.5px] tracking-[-0.08px] whitespace-nowrap">Купить</p>
    </div>
  );
}

function Container55() {
  return (
    <div className="absolute bg-[#3b82f6] content-stretch flex flex-col h-[19px] items-start left-[39.85px] pt-[4px] px-[10px] rounded-[4px] top-0 w-[39.852px]" data-name="Container">
      <Paragraph37 />
    </div>
  );
}

function Paragraph38() {
  return (
    <div className="h-[9px] relative shrink-0 w-full" data-name="Paragraph">
      <p className="absolute font-['Inter:Regular',sans-serif] font-normal leading-[9px] left-0 not-italic text-[6px] text-white top-[-0.5px] tracking-[-0.08px] whitespace-nowrap">Купить</p>
    </div>
  );
}

function Container56() {
  return (
    <div className="absolute bg-[#3b82f6] content-stretch flex flex-col h-[19px] items-start left-[83.7px] pt-[5px] px-[8px] rounded-[5px] top-0 w-[35.852px]" data-name="Container">
      <Paragraph38 />
    </div>
  );
}

function Container53() {
  return (
    <div className="h-[19px] relative shrink-0 w-[166px]" data-name="Container">
      <div className="bg-clip-padding border-0 border-[transparent] border-solid relative size-full">
        <Container54 />
        <Container55 />
        <Container56 />
      </div>
    </div>
  );
}

function Container48() {
  return (
    <div className="content-stretch flex flex-col gap-[4px] h-[211px] items-start justify-center py-[84.5px] relative shrink-0 w-full" data-name="Container">
      <Container49 />
      <Container53 />
    </div>
  );
}

function Lesson1Quiz3VariantA() {
  return (
    <div className="absolute bg-white content-stretch flex flex-col h-[231px] items-start left-0 overflow-clip pt-[10px] px-[10px] rounded-[14.99px] top-0 w-[186px]" data-name="Lesson1Quiz3VariantA">
      <Container48 />
    </div>
  );
}

function Container47() {
  return (
    <div className="h-[231px] relative shrink-0 w-[207.297px]" data-name="Container">
      <div className="bg-clip-padding border-0 border-[transparent] border-solid relative size-full">
        <Paragraph32 />
        <Lesson1Quiz3VariantA />
      </div>
    </div>
  );
}

function Paragraph39() {
  return (
    <div className="absolute h-[21px] left-0 top-[8px] w-[8.945px]" data-name="Paragraph">
      <p className="absolute font-['Inter:Regular',sans-serif] font-normal leading-[21px] left-0 not-italic text-[#364146] text-[14px] top-0 tracking-[-0.17px] whitespace-nowrap">B</p>
    </div>
  );
}

function Paragraph40() {
  return (
    <div className="h-[7.5px] relative shrink-0 w-full" data-name="Paragraph">
      <p className="absolute font-['Inter:Regular',sans-serif] font-normal leading-[7.5px] left-0 not-italic text-[5px] text-white top-[-0.5px] tracking-[-0.07px] whitespace-nowrap">Купить Component</p>
    </div>
  );
}

function Container60() {
  return (
    <div className="bg-[#3b82f6] h-[15.5px] relative rounded-[4px] shrink-0 w-full" data-name="Container">
      <div className="content-stretch flex flex-col items-start pt-[4px] px-[8px] relative size-full">
        <Paragraph40 />
      </div>
    </div>
  );
}

function Container59() {
  return (
    <div className="bg-[#f7f8fc] h-[25.5px] relative rounded-[4px] shrink-0 w-[70.805px]" data-name="Container">
      <div aria-hidden="true" className="absolute border border-[#d1d3db] border-solid inset-0 pointer-events-none rounded-[4px]" />
      <div className="bg-clip-padding border-0 border-[transparent] border-solid content-stretch flex flex-col items-start pb-px pt-[5px] px-[5px] relative size-full">
        <Container60 />
      </div>
    </div>
  );
}

function Paragraph41() {
  return (
    <div className="h-[7.5px] relative shrink-0 w-[166px]" data-name="Paragraph">
      <div className="bg-clip-padding border-0 border-[transparent] border-solid relative size-full">
        <p className="absolute font-['Inter:Regular',sans-serif] font-normal leading-[7.5px] left-0 not-italic text-[#8e9199] text-[5px] top-[-0.5px] tracking-[-0.07px] whitespace-nowrap">↓ instances</p>
      </div>
    </div>
  );
}

function Paragraph42() {
  return (
    <div className="h-[9px] relative shrink-0 w-full" data-name="Paragraph">
      <p className="absolute font-['Inter:Regular',sans-serif] font-normal leading-[9px] left-0 not-italic text-[6px] text-white top-[-0.5px] tracking-[-0.08px] whitespace-nowrap">Купить</p>
    </div>
  );
}

function Container62() {
  return (
    <div className="absolute bg-[#3b82f6] content-stretch flex flex-col h-[17px] items-start left-0 pt-[4px] px-[8px] rounded-[4px] top-0 w-[35.852px]" data-name="Container">
      <Paragraph42 />
    </div>
  );
}

function Paragraph43() {
  return (
    <div className="h-[9px] relative shrink-0 w-full" data-name="Paragraph">
      <p className="absolute font-['Inter:Regular',sans-serif] font-normal leading-[9px] left-0 not-italic text-[6px] text-white top-[-0.5px] tracking-[-0.08px] whitespace-nowrap">Купить</p>
    </div>
  );
}

function Container63() {
  return (
    <div className="absolute bg-[#3b82f6] content-stretch flex flex-col h-[17px] items-start left-[39.85px] pt-[4px] px-[8px] rounded-[4px] top-0 w-[35.852px]" data-name="Container">
      <Paragraph43 />
    </div>
  );
}

function Paragraph44() {
  return (
    <div className="h-[9px] relative shrink-0 w-full" data-name="Paragraph">
      <p className="absolute font-['Inter:Regular',sans-serif] font-normal leading-[9px] left-0 not-italic text-[6px] text-white top-[-0.5px] tracking-[-0.08px] whitespace-nowrap">Купить</p>
    </div>
  );
}

function Container64() {
  return (
    <div className="absolute bg-[#3b82f6] content-stretch flex flex-col h-[17px] items-start left-[79.7px] pt-[4px] px-[8px] rounded-[4px] top-0 w-[35.852px]" data-name="Container">
      <Paragraph44 />
    </div>
  );
}

function Container61() {
  return (
    <div className="h-[17px] relative shrink-0 w-[166px]" data-name="Container">
      <div className="bg-clip-padding border-0 border-[transparent] border-solid relative size-full">
        <Container62 />
        <Container63 />
        <Container64 />
      </div>
    </div>
  );
}

function Paragraph45() {
  return (
    <div className="h-[9px] relative shrink-0 w-full" data-name="Paragraph">
      <p className="absolute font-['Inter:Regular',sans-serif] font-normal leading-[9px] left-0 not-italic text-[6px] text-white top-[-0.5px] tracking-[-0.08px] whitespace-nowrap">Купить</p>
    </div>
  );
}

function Container66() {
  return (
    <div className="absolute bg-[#3b82f6] content-stretch flex flex-col h-[17px] items-start left-0 pt-[4px] px-[8px] rounded-[4px] top-0 w-[35.852px]" data-name="Container">
      <Paragraph45 />
    </div>
  );
}

function Paragraph46() {
  return (
    <div className="h-[9px] relative shrink-0 w-full" data-name="Paragraph">
      <p className="absolute font-['Inter:Regular',sans-serif] font-normal leading-[9px] left-0 not-italic text-[6px] text-white top-[-0.5px] tracking-[-0.08px] whitespace-nowrap">Купить</p>
    </div>
  );
}

function Container67() {
  return (
    <div className="absolute bg-[#3b82f6] content-stretch flex flex-col h-[17px] items-start left-[39.85px] pt-[4px] px-[8px] rounded-[4px] top-0 w-[35.852px]" data-name="Container">
      <Paragraph46 />
    </div>
  );
}

function Paragraph47() {
  return (
    <div className="h-[9px] relative shrink-0 w-full" data-name="Paragraph">
      <p className="absolute font-['Inter:Regular',sans-serif] font-normal leading-[9px] left-0 not-italic text-[6px] text-white top-[-0.5px] tracking-[-0.08px] whitespace-nowrap">Купить</p>
    </div>
  );
}

function Container68() {
  return (
    <div className="absolute bg-[#3b82f6] content-stretch flex flex-col h-[17px] items-start left-[79.7px] pt-[4px] px-[8px] rounded-[4px] top-0 w-[35.852px]" data-name="Container">
      <Paragraph47 />
    </div>
  );
}

function Container65() {
  return (
    <div className="h-[17px] relative shrink-0 w-[166px]" data-name="Container">
      <div className="bg-clip-padding border-0 border-[transparent] border-solid relative size-full">
        <Container66 />
        <Container67 />
        <Container68 />
      </div>
    </div>
  );
}

function Container58() {
  return (
    <div className="content-stretch flex flex-col gap-[6px] h-[211px] items-start justify-center py-[63px] relative shrink-0 w-full" data-name="Container">
      <Container59 />
      <Paragraph41 />
      <Container61 />
      <Container65 />
    </div>
  );
}

function Lesson1Quiz3VariantB() {
  return (
    <div className="absolute bg-white content-stretch flex flex-col h-[231px] items-start left-0 overflow-clip pt-[10px] px-[10px] rounded-[14.99px] top-0 w-[186px]" data-name="Lesson1Quiz3VariantB">
      <Container58 />
    </div>
  );
}

function Container57() {
  return (
    <div className="h-[231px] relative shrink-0 w-[206.945px]" data-name="Container">
      <div className="bg-clip-padding border-0 border-[transparent] border-solid relative size-full">
        <Paragraph39 />
        <Lesson1Quiz3VariantB />
      </div>
    </div>
  );
}

function Container46() {
  return (
    <div className="content-stretch flex gap-[40px] h-[231px] items-start relative shrink-0 w-full" data-name="Container">
      <Container47 />
      <Container57 />
    </div>
  );
}

function Container45() {
  return (
    <div className="absolute content-stretch flex flex-col gap-[24px] h-[269px] items-start left-0 top-[724px] w-[1280px]" data-name="Container">
      <Paragraph31 />
      <Container46 />
    </div>
  );
}

function Container() {
  return (
    <div className="absolute h-[993px] left-0 top-[129px] w-[1280px]" data-name="Container">
      <Heading1 />
      <Paragraph1 />
      <Container1 />
      <Container29 />
      <Container45 />
    </div>
  );
}

function Heading2() {
  return (
    <div className="absolute h-[27px] left-0 top-0 w-[1280px]" data-name="Heading 3">
      <p className="absolute font-['Inter:Regular',sans-serif] font-normal leading-[27px] left-0 not-italic text-[#101828] text-[18px] top-[0.5px] tracking-[-0.4395px] whitespace-nowrap">Single Choice</p>
    </div>
  );
}

function Paragraph48() {
  return (
    <div className="absolute content-stretch flex h-[15px] items-start left-0 top-[35px] w-[1280px]" data-name="Paragraph">
      <p className="flex-[1_0_0] font-['Inter:Regular',sans-serif] font-normal leading-[15px] min-h-px min-w-px not-italic relative text-[#8e9199] text-[12px] tracking-[-0.15px]">Выберите один правильный ответ</p>
    </div>
  );
}

function Paragraph49() {
  return (
    <div className="h-[14px] relative shrink-0 w-full" data-name="Paragraph">
      <p className="absolute font-['Inter:Regular',sans-serif] font-normal leading-[14px] left-0 not-italic text-[#8e9199] text-[11px] top-[0.5px] tracking-[-0.14px] whitespace-nowrap">4. Что такое UI Kit?</p>
    </div>
  );
}

function Paragraph50() {
  return (
    <div className="h-[15px] relative shrink-0 w-[1280px]" data-name="Paragraph">
      <div className="bg-clip-padding border-0 border-[transparent] border-solid relative size-full">
        <p className="absolute font-['Inter:Regular',sans-serif] font-normal leading-[15px] left-0 not-italic text-[#364146] text-[10px] top-[0.5px] tracking-[-0.13px] whitespace-nowrap">• Набор элементов системы</p>
      </div>
    </div>
  );
}

function Paragraph51() {
  return (
    <div className="h-[15px] relative shrink-0 w-[1280px]" data-name="Paragraph">
      <div className="bg-clip-padding border-0 border-[transparent] border-solid relative size-full">
        <p className="absolute font-['Inter:Regular',sans-serif] font-normal leading-[15px] left-0 not-italic text-[#364146] text-[10px] top-[0.5px] tracking-[-0.13px] whitespace-nowrap">• Цветовая схема</p>
      </div>
    </div>
  );
}

function Paragraph52() {
  return (
    <div className="flex-[1_0_0] min-h-px min-w-px relative w-[1280px]" data-name="Paragraph">
      <div className="bg-clip-padding border-0 border-[transparent] border-solid relative size-full">
        <p className="absolute font-['Inter:Regular',sans-serif] font-normal leading-[15px] left-0 not-italic text-[#364146] text-[10px] top-[0.5px] tracking-[-0.13px] whitespace-nowrap">• Шрифт</p>
      </div>
    </div>
  );
}

function Container72() {
  return (
    <div className="absolute content-stretch flex flex-col gap-[8px] h-[61px] items-start left-0 top-[247px] w-[1280px]" data-name="Container">
      <Paragraph50 />
      <Paragraph51 />
      <Paragraph52 />
    </div>
  );
}

function Paragraph53() {
  return (
    <div className="h-[7.5px] relative shrink-0 w-[60px]" data-name="Paragraph">
      <div className="bg-clip-padding border-0 border-[transparent] border-solid relative size-full">
        <p className="absolute font-['Inter:Regular',sans-serif] font-normal leading-[7.5px] left-0 not-italic text-[#8e9199] text-[5px] top-[-0.5px] tracking-[-0.07px] whitespace-nowrap">Components</p>
      </div>
    </div>
  );
}

function Paragraph54() {
  return (
    <div className="h-[6px] relative shrink-0 w-full" data-name="Paragraph">
      <p className="absolute font-['Inter:Regular',sans-serif] font-normal leading-[6px] left-0 not-italic text-[4px] text-white top-[0.5px] tracking-[-0.06px] whitespace-nowrap">Btn</p>
    </div>
  );
}

function Container76() {
  return (
    <div className="bg-[#3b82f6] h-[10px] relative rounded-[2px] shrink-0 w-full" data-name="Container">
      <div className="content-stretch flex flex-col items-start pt-[2px] px-[4px] relative size-full">
        <Paragraph54 />
      </div>
    </div>
  );
}

function Container75() {
  return (
    <div className="bg-[#f7f8fc] h-[18px] relative rounded-[3px] shrink-0 w-[60px]" data-name="Container">
      <div aria-hidden="true" className="absolute border border-[#d1d3db] border-solid inset-0 pointer-events-none rounded-[3px]" />
      <div className="bg-clip-padding border-0 border-[transparent] border-solid content-stretch flex flex-col items-start pb-px pt-[4px] px-[4px] relative size-full">
        <Container76 />
      </div>
    </div>
  );
}

function Paragraph55() {
  return (
    <div className="h-[6px] relative shrink-0 w-full" data-name="Paragraph">
      <p className="absolute font-['Inter:Regular',sans-serif] font-normal leading-[6px] left-0 not-italic text-[#8e9199] text-[4px] top-[0.5px] tracking-[-0.06px] whitespace-nowrap">Input</p>
    </div>
  );
}

function Container78() {
  return (
    <div className="bg-white h-[12px] relative rounded-[2px] shrink-0 w-full" data-name="Container">
      <div aria-hidden="true" className="absolute border border-[#d1d3db] border-solid inset-0 pointer-events-none rounded-[2px]" />
      <div className="content-stretch flex flex-col items-start pb-px pt-[3px] px-[4px] relative size-full">
        <Paragraph55 />
      </div>
    </div>
  );
}

function Container77() {
  return (
    <div className="bg-[#f7f8fc] h-[20px] relative rounded-[3px] shrink-0 w-[60px]" data-name="Container">
      <div aria-hidden="true" className="absolute border border-[#d1d3db] border-solid inset-0 pointer-events-none rounded-[3px]" />
      <div className="bg-clip-padding border-0 border-[transparent] border-solid content-stretch flex flex-col items-start pb-px pt-[4px] px-[4px] relative size-full">
        <Container78 />
      </div>
    </div>
  );
}

function ImageWithFallback8() {
  return (
    <div className="h-[8px] relative rounded-[1px] shrink-0 w-full" data-name="ImageWithFallback">
      <div className="absolute inset-0 rounded-[1px]" style={{ background: "#bfdbfe" }} />
    </div>
  );
}

function Paragraph56() {
  return (
    <div className="h-[4.5px] relative shrink-0 w-full" data-name="Paragraph">
      <p className="absolute font-['Inter:Regular',sans-serif] font-normal leading-[4.5px] left-0 not-italic text-[#364146] text-[3px] top-[0.5px] tracking-[-0.05px] whitespace-nowrap">Card</p>
    </div>
  );
}

function Container80() {
  return (
    <div className="bg-[#f7f8fc] h-[17.5px] relative rounded-[2px] shrink-0 w-full" data-name="Container">
      <div className="content-stretch flex flex-col gap-px items-start pt-[2px] px-[2px] relative size-full">
        <ImageWithFallback8 />
        <Paragraph56 />
      </div>
    </div>
  );
}

function Container79() {
  return (
    <div className="bg-[#f7f8fc] h-[25.5px] relative rounded-[3px] shrink-0 w-[60px]" data-name="Container">
      <div aria-hidden="true" className="absolute border border-[#d1d3db] border-solid inset-0 pointer-events-none rounded-[3px]" />
      <div className="bg-clip-padding border-0 border-[transparent] border-solid content-stretch flex flex-col items-start pb-px pt-[4px] px-[4px] relative size-full">
        <Container80 />
      </div>
    </div>
  );
}

function Container74() {
  return (
    <div className="h-[211px] relative shrink-0 w-[60px]" data-name="Container">
      <div className="bg-clip-padding border-0 border-[transparent] border-solid content-stretch flex flex-col gap-[3px] items-start relative size-full">
        <Paragraph53 />
        <Container75 />
        <Container77 />
        <Container79 />
      </div>
    </div>
  );
}

function Paragraph57() {
  return (
    <div className="h-[7.5px] relative shrink-0 w-full" data-name="Paragraph">
      <p className="absolute font-['Inter:Regular',sans-serif] font-normal leading-[7.5px] left-0 not-italic text-[5px] text-white top-[-0.5px] tracking-[-0.07px] whitespace-nowrap">Начать</p>
    </div>
  );
}

function Container82() {
  return (
    <div className="bg-[#3b82f6] h-[13.5px] relative rounded-[3px] shrink-0 w-[100px]" data-name="Container">
      <div className="bg-clip-padding border-0 border-[transparent] border-solid content-stretch flex flex-col items-start pt-[3px] px-[6px] relative size-full">
        <Paragraph57 />
      </div>
    </div>
  );
}

function Paragraph58() {
  return (
    <div className="h-[6px] relative shrink-0 w-full" data-name="Paragraph">
      <p className="absolute font-['Inter:Regular',sans-serif] font-normal leading-[6px] left-0 not-italic text-[#8e9199] text-[4px] top-[0.5px] tracking-[-0.06px] whitespace-nowrap">Email</p>
    </div>
  );
}

function Container83() {
  return (
    <div className="bg-white h-[12px] relative rounded-[2px] shrink-0 w-[100px]" data-name="Container">
      <div aria-hidden="true" className="absolute border border-[#d1d3db] border-solid inset-0 pointer-events-none rounded-[2px]" />
      <div className="bg-clip-padding border-0 border-[transparent] border-solid content-stretch flex flex-col items-start pb-px pt-[3px] px-[5px] relative size-full">
        <Paragraph58 />
      </div>
    </div>
  );
}

function ImageWithFallback9() {
  return (
    <div className="h-[15px] relative rounded-[2px] shrink-0 w-full" data-name="ImageWithFallback">
      <div className="absolute inset-0 rounded-[2px]" style={{ background: "#a5f3fc" }} />
    </div>
  );
}

function Paragraph59() {
  return (
    <div className="h-[6px] relative shrink-0 w-full" data-name="Paragraph">
      <p className="absolute font-['Inter:Regular',sans-serif] font-normal leading-[6px] left-0 not-italic text-[#364146] text-[4px] top-[0.5px] tracking-[-0.06px] whitespace-nowrap">Наушники</p>
    </div>
  );
}

function Container84() {
  return (
    <div className="bg-[#f7f8fc] h-[28px] relative rounded-[3px] shrink-0 w-[100px]" data-name="Container">
      <div className="bg-clip-padding border-0 border-[transparent] border-solid content-stretch flex flex-col gap-px items-start pt-[3px] px-[3px] relative size-full">
        <ImageWithFallback9 />
        <Paragraph59 />
      </div>
    </div>
  );
}

function Container81() {
  return (
    <div className="flex-[100_0_0] h-[211px] min-h-px min-w-px relative" data-name="Container">
      <div className="bg-clip-padding border-0 border-[transparent] border-solid content-stretch flex flex-col gap-[3px] items-start justify-center py-[75.75px] relative size-full">
        <Container82 />
        <Container83 />
        <Container84 />
      </div>
    </div>
  );
}

function Container73() {
  return (
    <div className="content-stretch flex gap-[6px] h-[211px] items-start relative shrink-0 w-full" data-name="Container">
      <Container74 />
      <Container81 />
    </div>
  );
}

function Lesson1Quiz() {
  return (
    <div className="absolute bg-white content-stretch flex flex-col h-[231px] items-start left-0 overflow-clip pt-[10px] px-[10px] rounded-[14.99px] top-0 w-[186px]" data-name="Lesson1Quiz4">
      <Container73 />
    </div>
  );
}

function Container71() {
  return (
    <div className="h-[308px] relative shrink-0 w-full" data-name="Container">
      <Container72 />
      <Lesson1Quiz />
    </div>
  );
}

function Container70() {
  return (
    <div className="absolute content-stretch flex flex-col gap-[24px] h-[346px] items-start left-0 top-[90px] w-[1280px]" data-name="Container">
      <Paragraph49 />
      <Container71 />
    </div>
  );
}

function Paragraph60() {
  return (
    <div className="h-[14px] relative shrink-0 w-full" data-name="Paragraph">
      <p className="absolute font-['Inter:Regular',sans-serif] font-normal leading-[14px] left-0 not-italic text-[#8e9199] text-[11px] top-[0.5px] tracking-[-0.14px] whitespace-nowrap">5. Зачем нужен UI Kit?</p>
    </div>
  );
}

function Paragraph61() {
  return (
    <div className="h-[15px] relative shrink-0 w-[1280px]" data-name="Paragraph">
      <div className="bg-clip-padding border-0 border-[transparent] border-solid relative size-full">
        <p className="absolute font-['Inter:Regular',sans-serif] font-normal leading-[15px] left-0 not-italic text-[#364146] text-[10px] top-[0.5px] tracking-[-0.13px] whitespace-nowrap">• Упрощает и упорядочивает</p>
      </div>
    </div>
  );
}

function Paragraph62() {
  return (
    <div className="h-[15px] relative shrink-0 w-[1280px]" data-name="Paragraph">
      <div className="bg-clip-padding border-0 border-[transparent] border-solid relative size-full">
        <p className="absolute font-['Inter:Regular',sans-serif] font-normal leading-[15px] left-0 not-italic text-[#364146] text-[10px] top-[0.5px] tracking-[-0.13px] whitespace-nowrap">• Украшает интерфейс</p>
      </div>
    </div>
  );
}

function Paragraph63() {
  return (
    <div className="flex-[1_0_0] min-h-px min-w-px relative w-[1280px]" data-name="Paragraph">
      <div className="bg-clip-padding border-0 border-[transparent] border-solid relative size-full">
        <p className="absolute font-['Inter:Regular',sans-serif] font-normal leading-[15px] left-0 not-italic text-[#364146] text-[10px] top-[0.5px] tracking-[-0.13px] whitespace-nowrap">• Добавляет цвета</p>
      </div>
    </div>
  );
}

function Container87() {
  return (
    <div className="absolute content-stretch flex flex-col gap-[8px] h-[61px] items-start left-0 top-[247px] w-[1280px]" data-name="Container">
      <Paragraph61 />
      <Paragraph62 />
      <Paragraph63 />
    </div>
  );
}

function Paragraph64() {
  return (
    <div className="h-[7.5px] relative shrink-0 w-[80px]" data-name="Paragraph">
      <div className="bg-clip-padding border-0 border-[transparent] border-solid relative size-full">
        <p className="absolute font-['Inter:Regular',sans-serif] font-normal leading-[7.5px] left-0 not-italic text-[#8e9199] text-[5px] top-[-0.5px] tracking-[-0.07px] whitespace-nowrap">Без системы</p>
      </div>
    </div>
  );
}

function Paragraph65() {
  return (
    <div className="h-[6px] relative shrink-0 w-full" data-name="Paragraph">
      <p className="absolute font-['Inter:Regular',sans-serif] font-normal leading-[6px] left-0 not-italic text-[4px] text-white top-[0.5px] tracking-[-0.06px] whitespace-nowrap">A</p>
    </div>
  );
}

function Container91() {
  return (
    <div className="bg-[#3b82f6] h-[13.5px] relative rounded-[3px] shrink-0 w-[10.648px]" data-name="Container">
      <div className="bg-clip-padding border-0 border-[transparent] border-solid content-stretch flex flex-col items-start pt-[2px] px-[4px] relative size-full">
        <Paragraph65 />
      </div>
    </div>
  );
}

function Paragraph66() {
  return (
    <div className="h-[7.5px] relative shrink-0 w-full" data-name="Paragraph">
      <p className="absolute font-['Inter:Regular',sans-serif] font-normal leading-[7.5px] left-0 not-italic text-[5px] text-white top-[-0.5px] tracking-[-0.07px] whitespace-nowrap">B</p>
    </div>
  );
}

function Container92() {
  return (
    <div className="bg-[#22c55e] h-[13.5px] relative rounded-[4px] shrink-0 w-[13.188px]" data-name="Container">
      <div className="bg-clip-padding border-0 border-[transparent] border-solid content-stretch flex flex-col items-start pt-[3px] px-[5px] relative size-full">
        <Paragraph66 />
      </div>
    </div>
  );
}

function Container90() {
  return (
    <div className="h-[13.5px] relative shrink-0 w-[80px]" data-name="Container">
      <div className="bg-clip-padding border-0 border-[transparent] border-solid content-stretch flex gap-[2px] items-start relative size-full">
        <Container91 />
        <Container92 />
      </div>
    </div>
  );
}

function ImageWithFallback10() {
  return (
    <div className="h-[16px] relative rounded-[2px] shrink-0 w-full" data-name="ImageWithFallback">
      <div className="absolute inset-0 rounded-[2px]" style={{ background: "#fee2e2" }} />
    </div>
  );
}

function Container93() {
  return (
    <div className="bg-[#f7f8fc] h-[20px] relative rounded-[3px] shrink-0 w-[80px]" data-name="Container">
      <div className="bg-clip-padding border-0 border-[transparent] border-solid content-stretch flex flex-col items-start pt-[2px] px-[2px] relative size-full">
        <ImageWithFallback10 />
      </div>
    </div>
  );
}

function ImageWithFallback11() {
  return (
    <div className="h-[19px] relative rounded-[2px] shrink-0 w-full" data-name="ImageWithFallback">
      <div className="absolute inset-0 rounded-[2px]" style={{ background: "#dcfce7" }} />
    </div>
  );
}

function Container94() {
  return (
    <div className="bg-[#f7f8fc] h-[25px] relative rounded-[4px] shrink-0 w-[80px]" data-name="Container">
      <div className="bg-clip-padding border-0 border-[transparent] border-solid content-stretch flex flex-col items-start pt-[3px] px-[3px] relative size-full">
        <ImageWithFallback11 />
      </div>
    </div>
  );
}

function Container89() {
  return (
    <div className="flex-[80_0_0] h-[211px] min-h-px min-w-px relative" data-name="Container">
      <div className="bg-clip-padding border-0 border-[transparent] border-solid content-stretch flex flex-col gap-[3px] items-start justify-center py-[68px] relative size-full">
        <Paragraph64 />
        <Container90 />
        <Container93 />
        <Container94 />
      </div>
    </div>
  );
}

function Paragraph67() {
  return (
    <div className="h-[7.5px] relative shrink-0 w-[80px]" data-name="Paragraph">
      <div className="bg-clip-padding border-0 border-[transparent] border-solid relative size-full">
        <p className="absolute font-['Inter:Regular',sans-serif] font-normal leading-[7.5px] left-0 not-italic text-[#8e9199] text-[5px] top-[-0.5px] tracking-[-0.07px] whitespace-nowrap">С системой</p>
      </div>
    </div>
  );
}

function Paragraph68() {
  return (
    <div className="h-[7.5px] relative shrink-0 w-full" data-name="Paragraph">
      <p className="absolute font-['Inter:Regular',sans-serif] font-normal leading-[7.5px] left-0 not-italic text-[5px] text-white top-[-0.5px] tracking-[-0.07px] whitespace-nowrap">A</p>
    </div>
  );
}

function Container97() {
  return (
    <div className="bg-[#3b82f6] h-[13.5px] relative rounded-[4px] shrink-0 w-[15.313px]" data-name="Container">
      <div className="bg-clip-padding border-0 border-[transparent] border-solid content-stretch flex flex-col items-start pt-[3px] px-[6px] relative size-full">
        <Paragraph68 />
      </div>
    </div>
  );
}

function Paragraph69() {
  return (
    <div className="h-[7.5px] relative shrink-0 w-full" data-name="Paragraph">
      <p className="absolute font-['Inter:Regular',sans-serif] font-normal leading-[7.5px] left-0 not-italic text-[5px] text-white top-[-0.5px] tracking-[-0.07px] whitespace-nowrap">B</p>
    </div>
  );
}

function Container98() {
  return (
    <div className="bg-[#3b82f6] h-[13.5px] relative rounded-[4px] shrink-0 w-[15.188px]" data-name="Container">
      <div className="bg-clip-padding border-0 border-[transparent] border-solid content-stretch flex flex-col items-start pt-[3px] px-[6px] relative size-full">
        <Paragraph69 />
      </div>
    </div>
  );
}

function Container96() {
  return (
    <div className="h-[13.5px] relative shrink-0 w-[80px]" data-name="Container">
      <div className="bg-clip-padding border-0 border-[transparent] border-solid content-stretch flex gap-[2px] items-start relative size-full">
        <Container97 />
        <Container98 />
      </div>
    </div>
  );
}

function ImageWithFallback12() {
  return (
    <div className="h-[16px] relative rounded-[2px] shrink-0 w-full" data-name="ImageWithFallback">
      <div className="absolute inset-0 rounded-[2px]" style={{ background: "#bfdbfe" }} />
    </div>
  );
}

function Container99() {
  return (
    <div className="bg-[#f7f8fc] h-[22px] relative rounded-[4px] shrink-0 w-[80px]" data-name="Container">
      <div className="bg-clip-padding border-0 border-[transparent] border-solid content-stretch flex flex-col items-start pt-[3px] px-[3px] relative size-full">
        <ImageWithFallback12 />
      </div>
    </div>
  );
}

function ImageWithFallback13() {
  return (
    <div className="h-[16px] relative rounded-[2px] shrink-0 w-full" data-name="ImageWithFallback">
      <div className="absolute inset-0 rounded-[2px]" style={{ background: "#c4b5fd" }} />
    </div>
  );
}

function Container100() {
  return (
    <div className="bg-[#f7f8fc] h-[22px] relative rounded-[4px] shrink-0 w-[80px]" data-name="Container">
      <div className="bg-clip-padding border-0 border-[transparent] border-solid content-stretch flex flex-col items-start pt-[3px] px-[3px] relative size-full">
        <ImageWithFallback13 />
      </div>
    </div>
  );
}

function Container95() {
  return (
    <div className="flex-[80_0_0] h-[211px] min-h-px min-w-px relative" data-name="Container">
      <div className="bg-clip-padding border-0 border-[transparent] border-solid content-stretch flex flex-col gap-[3px] items-start justify-center py-[68.5px] relative size-full">
        <Paragraph67 />
        <Container96 />
        <Container99 />
        <Container100 />
      </div>
    </div>
  );
}

function Container88() {
  return (
    <div className="content-stretch flex gap-[6px] h-[211px] items-start relative shrink-0 w-full" data-name="Container">
      <Container89 />
      <Container95 />
    </div>
  );
}

function Lesson1Quiz1() {
  return (
    <div className="absolute bg-white content-stretch flex flex-col h-[231px] items-start left-0 overflow-clip pt-[10px] px-[10px] rounded-[14.99px] top-0 w-[186px]" data-name="Lesson1Quiz5">
      <Container88 />
    </div>
  );
}

function Container86() {
  return (
    <div className="h-[308px] relative shrink-0 w-full" data-name="Container">
      <Container87 />
      <Lesson1Quiz1 />
    </div>
  );
}

function Container85() {
  return (
    <div className="absolute content-stretch flex flex-col gap-[24px] h-[346px] items-start left-0 top-[484px] w-[1280px]" data-name="Container">
      <Paragraph60 />
      <Container86 />
    </div>
  );
}

function Paragraph70() {
  return (
    <div className="h-[14px] relative shrink-0 w-full" data-name="Paragraph">
      <p className="absolute font-['Inter:Regular',sans-serif] font-normal leading-[14px] left-0 not-italic text-[#8e9199] text-[11px] top-[0.5px] tracking-[-0.14px] whitespace-nowrap">6. Что такое компонент?</p>
    </div>
  );
}

function Paragraph71() {
  return (
    <div className="h-[15px] relative shrink-0 w-[1280px]" data-name="Paragraph">
      <div className="bg-clip-padding border-0 border-[transparent] border-solid relative size-full">
        <p className="absolute font-['Inter:Regular',sans-serif] font-normal leading-[15px] left-0 not-italic text-[#364146] text-[10px] top-[0.5px] tracking-[-0.13px] whitespace-nowrap">• Переиспользуемый элемент</p>
      </div>
    </div>
  );
}

function Paragraph72() {
  return (
    <div className="h-[15px] relative shrink-0 w-[1280px]" data-name="Paragraph">
      <div className="bg-clip-padding border-0 border-[transparent] border-solid relative size-full">
        <p className="absolute font-['Inter:Regular',sans-serif] font-normal leading-[15px] left-0 not-italic text-[#364146] text-[10px] top-[0.5px] tracking-[-0.13px] whitespace-nowrap">• Цвет фона</p>
      </div>
    </div>
  );
}

function Paragraph73() {
  return (
    <div className="flex-[1_0_0] min-h-px min-w-px relative w-[1280px]" data-name="Paragraph">
      <div className="bg-clip-padding border-0 border-[transparent] border-solid relative size-full">
        <p className="absolute font-['Inter:Regular',sans-serif] font-normal leading-[15px] left-0 not-italic text-[#364146] text-[10px] top-[0.5px] tracking-[-0.13px] whitespace-nowrap">• Иконка</p>
      </div>
    </div>
  );
}

function Container103() {
  return (
    <div className="absolute content-stretch flex flex-col gap-[8px] h-[61px] items-start left-0 top-[247px] w-[1280px]" data-name="Container">
      <Paragraph71 />
      <Paragraph72 />
      <Paragraph73 />
    </div>
  );
}

function Paragraph74() {
  return (
    <div className="h-[9px] relative shrink-0 w-full" data-name="Paragraph">
      <p className="absolute font-['Inter:Regular',sans-serif] font-normal leading-[9px] left-0 not-italic text-[6px] text-white top-[-0.5px] tracking-[-0.08px] whitespace-nowrap">Купить</p>
    </div>
  );
}

function Container106() {
  return (
    <div className="bg-[#3b82f6] h-[17px] relative rounded-[3px] shrink-0 w-full" data-name="Container">
      <div className="content-stretch flex flex-col items-start pt-[4px] px-[8px] relative size-full">
        <Paragraph74 />
      </div>
    </div>
  );
}

function Container105() {
  return (
    <div className="bg-[#f7f8fc] h-[27px] relative rounded-[4px] shrink-0 w-[45.852px]" data-name="Container">
      <div aria-hidden="true" className="absolute border border-[#3b82f6] border-solid inset-0 pointer-events-none rounded-[4px]" />
      <div className="bg-clip-padding border-0 border-[transparent] border-solid content-stretch flex flex-col items-start pb-px pt-[5px] px-[5px] relative size-full">
        <Container106 />
      </div>
    </div>
  );
}

function Paragraph75() {
  return (
    <div className="h-[9px] relative shrink-0 w-[166px]" data-name="Paragraph">
      <div className="bg-clip-padding border-0 border-[transparent] border-solid relative size-full">
        <p className="-translate-x-1/2 absolute font-['Inter:Regular',sans-serif] font-normal leading-[9px] left-[83.17px] not-italic text-[#8e9199] text-[6px] text-center top-[-0.5px] tracking-[-0.08px] whitespace-nowrap">↓</p>
      </div>
    </div>
  );
}

function Paragraph76() {
  return (
    <div className="h-[7.5px] relative shrink-0 w-full" data-name="Paragraph">
      <p className="absolute font-['Inter:Regular',sans-serif] font-normal leading-[7.5px] left-0 not-italic text-[5px] text-white top-[-0.5px] tracking-[-0.07px] whitespace-nowrap">Купить</p>
    </div>
  );
}

function Container108() {
  return (
    <div className="bg-[#3b82f6] h-[13.5px] relative rounded-[3px] shrink-0 w-[28.523px]" data-name="Container">
      <div className="bg-clip-padding border-0 border-[transparent] border-solid content-stretch flex flex-col items-start pt-[3px] px-[6px] relative size-full">
        <Paragraph76 />
      </div>
    </div>
  );
}

function Paragraph77() {
  return (
    <div className="h-[7.5px] relative shrink-0 w-full" data-name="Paragraph">
      <p className="absolute font-['Inter:Regular',sans-serif] font-normal leading-[7.5px] left-0 not-italic text-[5px] text-white top-[-0.5px] tracking-[-0.07px] whitespace-nowrap">Купить</p>
    </div>
  );
}

function Container109() {
  return (
    <div className="bg-[#3b82f6] h-[13.5px] relative rounded-[3px] shrink-0 w-[28.523px]" data-name="Container">
      <div className="bg-clip-padding border-0 border-[transparent] border-solid content-stretch flex flex-col items-start pt-[3px] px-[6px] relative size-full">
        <Paragraph77 />
      </div>
    </div>
  );
}

function Paragraph78() {
  return (
    <div className="h-[7.5px] relative shrink-0 w-full" data-name="Paragraph">
      <p className="absolute font-['Inter:Regular',sans-serif] font-normal leading-[7.5px] left-0 not-italic text-[5px] text-white top-[-0.5px] tracking-[-0.07px] whitespace-nowrap">Купить</p>
    </div>
  );
}

function Container110() {
  return (
    <div className="bg-[#3b82f6] h-[13.5px] relative rounded-[3px] shrink-0 w-[28.523px]" data-name="Container">
      <div className="bg-clip-padding border-0 border-[transparent] border-solid content-stretch flex flex-col items-start pt-[3px] px-[6px] relative size-full">
        <Paragraph78 />
      </div>
    </div>
  );
}

function Container107() {
  return (
    <div className="h-[13.5px] relative shrink-0 w-[166px]" data-name="Container">
      <div className="bg-clip-padding border-0 border-[transparent] border-solid content-stretch flex gap-[4px] items-start relative size-full">
        <Container108 />
        <Container109 />
        <Container110 />
      </div>
    </div>
  );
}

function Container104() {
  return (
    <div className="content-stretch flex flex-col gap-[6px] h-[211px] items-start justify-center py-[74.75px] relative shrink-0 w-full" data-name="Container">
      <Container105 />
      <Paragraph75 />
      <Container107 />
    </div>
  );
}

function Lesson1Quiz2() {
  return (
    <div className="absolute bg-white content-stretch flex flex-col h-[231px] items-start left-0 overflow-clip pt-[10px] px-[10px] rounded-[14.99px] top-0 w-[186px]" data-name="Lesson1Quiz6">
      <Container104 />
    </div>
  );
}

function Container102() {
  return (
    <div className="h-[308px] relative shrink-0 w-full" data-name="Container">
      <Container103 />
      <Lesson1Quiz2 />
    </div>
  );
}

function Container101() {
  return (
    <div className="absolute content-stretch flex flex-col gap-[24px] h-[346px] items-start left-0 top-[878px] w-[1280px]" data-name="Container">
      <Paragraph70 />
      <Container102 />
    </div>
  );
}

function Container69() {
  return (
    <div className="absolute h-[1224px] left-0 top-[1186px] w-[1280px]" data-name="Container">
      <Heading2 />
      <Paragraph48 />
      <Container70 />
      <Container85 />
      <Container101 />
    </div>
  );
}

function Heading3() {
  return (
    <div className="absolute h-[27px] left-0 top-0 w-[1280px]" data-name="Heading 3">
      <p className="absolute font-['Inter:Regular',sans-serif] font-normal leading-[27px] left-0 not-italic text-[#101828] text-[18px] top-[0.5px] tracking-[-0.4395px] whitespace-nowrap">Multi Choice</p>
    </div>
  );
}

function Paragraph79() {
  return (
    <div className="absolute content-stretch flex h-[15px] items-start left-0 top-[35px] w-[1280px]" data-name="Paragraph">
      <p className="flex-[1_0_0] font-['Inter:Regular',sans-serif] font-normal leading-[15px] min-h-px min-w-px not-italic relative text-[#8e9199] text-[12px] tracking-[-0.15px]">Выберите несколько правильных ответов</p>
    </div>
  );
}

function Paragraph80() {
  return (
    <div className="h-[14px] relative shrink-0 w-full" data-name="Paragraph">
      <p className="absolute font-['Inter:Regular',sans-serif] font-normal leading-[14px] left-0 not-italic text-[#8e9199] text-[11px] top-[0.5px] tracking-[-0.14px] whitespace-nowrap">7. Что дает UI Kit?</p>
    </div>
  );
}

function Paragraph81() {
  return (
    <div className="h-[15px] relative shrink-0 w-[1280px]" data-name="Paragraph">
      <div className="bg-clip-padding border-0 border-[transparent] border-solid relative size-full">
        <p className="absolute font-['Inter:Regular',sans-serif] font-normal leading-[15px] left-0 not-italic text-[#364146] text-[10px] top-[0.5px] tracking-[-0.13px] whitespace-nowrap">• Единый стиль</p>
      </div>
    </div>
  );
}

function Paragraph82() {
  return (
    <div className="h-[15px] relative shrink-0 w-[1280px]" data-name="Paragraph">
      <div className="bg-clip-padding border-0 border-[transparent] border-solid relative size-full">
        <p className="absolute font-['Inter:Regular',sans-serif] font-normal leading-[15px] left-0 not-italic text-[#364146] text-[10px] top-[0.5px] tracking-[-0.13px] whitespace-nowrap">• Систему</p>
      </div>
    </div>
  );
}

function Paragraph83() {
  return (
    <div className="h-[15px] relative shrink-0 w-[1280px]" data-name="Paragraph">
      <div className="bg-clip-padding border-0 border-[transparent] border-solid relative size-full">
        <p className="absolute font-['Inter:Regular',sans-serif] font-normal leading-[15px] left-0 not-italic text-[#364146] text-[10px] top-[0.5px] tracking-[-0.13px] whitespace-nowrap">• Больше цветов</p>
      </div>
    </div>
  );
}

function Paragraph84() {
  return (
    <div className="flex-[1_0_0] min-h-px min-w-px relative w-[1280px]" data-name="Paragraph">
      <div className="bg-clip-padding border-0 border-[transparent] border-solid relative size-full">
        <p className="absolute font-['Inter:Regular',sans-serif] font-normal leading-[15px] left-0 not-italic text-[#364146] text-[10px] top-[0.5px] tracking-[-0.13px] whitespace-nowrap">• Быстрее работу</p>
      </div>
    </div>
  );
}

function Container114() {
  return (
    <div className="absolute content-stretch flex flex-col gap-[8px] h-[84px] items-start left-0 top-[247px] w-[1280px]" data-name="Container">
      <Paragraph81 />
      <Paragraph82 />
      <Paragraph83 />
      <Paragraph84 />
    </div>
  );
}

function Paragraph85() {
  return (
    <div className="h-[9px] relative shrink-0 w-full" data-name="Paragraph">
      <p className="absolute font-['Inter:Regular',sans-serif] font-normal leading-[9px] left-0 not-italic text-[6px] text-white top-[-0.5px] tracking-[-0.08px] whitespace-nowrap">Купить</p>
    </div>
  );
}

function Container117() {
  return (
    <div className="bg-[#3b82f6] h-[17px] relative rounded-[4px] shrink-0 w-[35.852px]" data-name="Container">
      <div className="bg-clip-padding border-0 border-[transparent] border-solid content-stretch flex flex-col items-start pt-[4px] px-[8px] relative size-full">
        <Paragraph85 />
      </div>
    </div>
  );
}

function Paragraph86() {
  return (
    <div className="h-[7.5px] relative shrink-0 w-[39.375px]" data-name="Paragraph">
      <div className="bg-clip-padding border-0 border-[transparent] border-solid relative size-full">
        <p className="absolute font-['Inter:Regular',sans-serif] font-normal leading-[7.5px] left-0 not-italic text-[#8e9199] text-[5px] top-[-0.5px] tracking-[-0.07px] whitespace-nowrap">→ единый стиль</p>
      </div>
    </div>
  );
}

function Container116() {
  return (
    <div className="h-[17px] relative shrink-0 w-[166px]" data-name="Container">
      <div className="bg-clip-padding border-0 border-[transparent] border-solid content-stretch flex gap-[4px] items-center relative size-full">
        <Container117 />
        <Paragraph86 />
      </div>
    </div>
  );
}

function ImageWithFallback14() {
  return (
    <div className="h-[15px] relative rounded-[2px] shrink-0 w-full" data-name="ImageWithFallback">
      <div className="absolute inset-0 rounded-[2px]" style={{ background: "#bfdbfe" }} />
    </div>
  );
}

function Container120() {
  return (
    <div className="bg-[#f7f8fc] relative rounded-[2px] shrink-0 size-[15px]" data-name="Container">
      <div className="bg-clip-padding border-0 border-[transparent] border-solid content-stretch flex flex-col items-start relative size-full">
        <ImageWithFallback14 />
      </div>
    </div>
  );
}

function ImageWithFallback15() {
  return (
    <div className="h-[15px] relative rounded-[2px] shrink-0 w-full" data-name="ImageWithFallback">
      <div className="absolute inset-0 rounded-[2px]" style={{ background: "#c4b5fd" }} />
    </div>
  );
}

function Container121() {
  return (
    <div className="bg-[#f7f8fc] flex-[1_0_0] h-[15px] min-h-px min-w-px relative rounded-[2px]" data-name="Container">
      <div className="bg-clip-padding border-0 border-[transparent] border-solid content-stretch flex flex-col items-start relative size-full">
        <ImageWithFallback15 />
      </div>
    </div>
  );
}

function Container119() {
  return (
    <div className="h-[15px] relative shrink-0 w-[32px]" data-name="Container">
      <div className="bg-clip-padding border-0 border-[transparent] border-solid content-stretch flex gap-[2px] items-start relative size-full">
        <Container120 />
        <Container121 />
      </div>
    </div>
  );
}

function Paragraph87() {
  return (
    <div className="h-[7.5px] relative shrink-0 w-[26.07px]" data-name="Paragraph">
      <div className="bg-clip-padding border-0 border-[transparent] border-solid relative size-full">
        <p className="absolute font-['Inter:Regular',sans-serif] font-normal leading-[7.5px] left-0 not-italic text-[#8e9199] text-[5px] top-[-0.5px] tracking-[-0.07px] whitespace-nowrap">→ система</p>
      </div>
    </div>
  );
}

function Container118() {
  return (
    <div className="h-[15px] relative shrink-0 w-[166px]" data-name="Container">
      <div className="bg-clip-padding border-0 border-[transparent] border-solid content-stretch flex gap-[4px] items-center relative size-full">
        <Container119 />
        <Paragraph87 />
      </div>
    </div>
  );
}

function Paragraph88() {
  return (
    <div className="h-[18px] relative shrink-0 w-[12px]" data-name="Paragraph">
      <div className="bg-clip-padding border-0 border-[transparent] border-solid relative size-full">
        <p className="absolute font-['Inter:Regular',sans-serif] font-normal leading-[18px] left-0 not-italic text-[#0a0a0a] text-[12px] top-px whitespace-nowrap">⚡</p>
      </div>
    </div>
  );
}

function Paragraph89() {
  return (
    <div className="h-[7.5px] relative shrink-0 w-[44.391px]" data-name="Paragraph">
      <div className="bg-clip-padding border-0 border-[transparent] border-solid relative size-full">
        <p className="absolute font-['Inter:Regular',sans-serif] font-normal leading-[7.5px] left-0 not-italic text-[#8e9199] text-[5px] top-[-0.5px] tracking-[-0.07px] whitespace-nowrap">→ быстрее работа</p>
      </div>
    </div>
  );
}

function Container122() {
  return (
    <div className="h-[18px] relative shrink-0 w-[166px]" data-name="Container">
      <div className="bg-clip-padding border-0 border-[transparent] border-solid content-stretch flex gap-[4px] items-center relative size-full">
        <Paragraph88 />
        <Paragraph89 />
      </div>
    </div>
  );
}

function Container115() {
  return (
    <div className="content-stretch flex flex-col gap-[8px] h-[211px] items-start justify-center py-[72.5px] relative shrink-0 w-full" data-name="Container">
      <Container116 />
      <Container118 />
      <Container122 />
    </div>
  );
}

function Lesson1Quiz3() {
  return (
    <div className="absolute bg-white content-stretch flex flex-col h-[231px] items-start left-0 overflow-clip pt-[10px] px-[10px] rounded-[14.99px] top-0 w-[186px]" data-name="Lesson1Quiz7">
      <Container115 />
    </div>
  );
}

function Container113() {
  return (
    <div className="h-[331px] relative shrink-0 w-full" data-name="Container">
      <Container114 />
      <Lesson1Quiz3 />
    </div>
  );
}

function Container112() {
  return (
    <div className="absolute content-stretch flex flex-col gap-[24px] h-[369px] items-start left-0 top-[90px] w-[1280px]" data-name="Container">
      <Paragraph80 />
      <Container113 />
    </div>
  );
}

function Paragraph90() {
  return (
    <div className="h-[14px] relative shrink-0 w-full" data-name="Paragraph">
      <p className="absolute font-['Inter:Regular',sans-serif] font-normal leading-[14px] left-0 not-italic text-[#8e9199] text-[11px] top-[0.5px] tracking-[-0.14px] whitespace-nowrap">8. Что относится к компонентам?</p>
    </div>
  );
}

function Paragraph91() {
  return (
    <div className="h-[15px] relative shrink-0 w-[1280px]" data-name="Paragraph">
      <div className="bg-clip-padding border-0 border-[transparent] border-solid relative size-full">
        <p className="absolute font-['Inter:Regular',sans-serif] font-normal leading-[15px] left-0 not-italic text-[#364146] text-[10px] top-[0.5px] tracking-[-0.13px] whitespace-nowrap">• Buttons</p>
      </div>
    </div>
  );
}

function Paragraph92() {
  return (
    <div className="h-[15px] relative shrink-0 w-[1280px]" data-name="Paragraph">
      <div className="bg-clip-padding border-0 border-[transparent] border-solid relative size-full">
        <p className="absolute font-['Inter:Regular',sans-serif] font-normal leading-[15px] left-0 not-italic text-[#364146] text-[10px] top-[0.5px] tracking-[-0.13px] whitespace-nowrap">• Inputs</p>
      </div>
    </div>
  );
}

function Paragraph93() {
  return (
    <div className="h-[15px] relative shrink-0 w-[1280px]" data-name="Paragraph">
      <div className="bg-clip-padding border-0 border-[transparent] border-solid relative size-full">
        <p className="absolute font-['Inter:Regular',sans-serif] font-normal leading-[15px] left-0 not-italic text-[#364146] text-[10px] top-[0.5px] tracking-[-0.13px] whitespace-nowrap">• Cards</p>
      </div>
    </div>
  );
}

function Paragraph94() {
  return (
    <div className="flex-[1_0_0] min-h-px min-w-px relative w-[1280px]" data-name="Paragraph">
      <div className="bg-clip-padding border-0 border-[transparent] border-solid relative size-full">
        <p className="absolute font-['Inter:Regular',sans-serif] font-normal leading-[15px] left-0 not-italic text-[#364146] text-[10px] top-[0.5px] tracking-[-0.13px] whitespace-nowrap">• Фоновые изображения</p>
      </div>
    </div>
  );
}

function Container125() {
  return (
    <div className="absolute content-stretch flex flex-col gap-[8px] h-[84px] items-start left-0 top-[247px] w-[1280px]" data-name="Container">
      <Paragraph91 />
      <Paragraph92 />
      <Paragraph93 />
      <Paragraph94 />
    </div>
  );
}

function Paragraph95() {
  return (
    <div className="absolute h-[9px] left-0 top-0 w-[166px]" data-name="Paragraph">
      <p className="absolute font-['Inter:Regular',sans-serif] font-normal leading-[9px] left-0 not-italic text-[#8e9199] text-[6px] top-[-0.5px] tracking-[-0.08px] whitespace-nowrap">Buttons</p>
    </div>
  );
}

function Paragraph96() {
  return (
    <div className="h-[9px] relative shrink-0 w-full" data-name="Paragraph">
      <p className="absolute font-['Inter:Regular',sans-serif] font-normal leading-[9px] left-0 not-italic text-[6px] text-white top-[-0.5px] tracking-[-0.08px] whitespace-nowrap">Начать</p>
    </div>
  );
}

function Container128() {
  return (
    <div className="absolute bg-[#3b82f6] content-stretch flex flex-col h-[17px] items-start left-0 pt-[4px] px-[8px] rounded-[4px] top-[12px] w-[36.445px]" data-name="Container">
      <Paragraph96 />
    </div>
  );
}

function Container127() {
  return (
    <div className="h-[29px] relative shrink-0 w-[166px]" data-name="Container">
      <div className="bg-clip-padding border-0 border-[transparent] border-solid relative size-full">
        <Paragraph95 />
        <Container128 />
      </div>
    </div>
  );
}

function Paragraph97() {
  return (
    <div className="absolute h-[9px] left-0 top-0 w-[166px]" data-name="Paragraph">
      <p className="absolute font-['Inter:Regular',sans-serif] font-normal leading-[9px] left-0 not-italic text-[#8e9199] text-[6px] top-[-0.5px] tracking-[-0.08px] whitespace-nowrap">Inputs</p>
    </div>
  );
}

function Paragraph98() {
  return (
    <div className="h-[7.5px] relative shrink-0 w-full" data-name="Paragraph">
      <p className="absolute font-['Inter:Regular',sans-serif] font-normal leading-[7.5px] left-0 not-italic text-[#8e9199] text-[5px] top-[-0.5px] tracking-[-0.07px] whitespace-nowrap">Email</p>
    </div>
  );
}

function Container130() {
  return (
    <div className="absolute bg-[#f7f8fc] content-stretch flex flex-col h-[15.5px] items-start left-0 pb-px pt-[4px] px-[7px] rounded-[4px] top-[12px] w-[26.18px]" data-name="Container">
      <div aria-hidden="true" className="absolute border border-[#d1d3db] border-solid inset-0 pointer-events-none rounded-[4px]" />
      <Paragraph98 />
    </div>
  );
}

function Container129() {
  return (
    <div className="h-[27.5px] relative shrink-0 w-[166px]" data-name="Container">
      <div className="bg-clip-padding border-0 border-[transparent] border-solid relative size-full">
        <Paragraph97 />
        <Container130 />
      </div>
    </div>
  );
}

function Paragraph99() {
  return (
    <div className="absolute h-[9px] left-0 top-0 w-[166px]" data-name="Paragraph">
      <p className="absolute font-['Inter:Regular',sans-serif] font-normal leading-[9px] left-0 not-italic text-[#8e9199] text-[6px] top-[-0.5px] tracking-[-0.08px] whitespace-nowrap">Cards</p>
    </div>
  );
}

function ImageWithFallback16() {
  return (
    <div className="h-[18px] relative rounded-[2px] shrink-0 w-full" data-name="ImageWithFallback">
      <div className="absolute inset-0 rounded-[2px]" style={{ background: "#a5f3fc" }} />
    </div>
  );
}

function Paragraph100() {
  return (
    <div className="h-[6px] relative shrink-0 w-full" data-name="Paragraph">
      <p className="absolute font-['Inter:Regular',sans-serif] font-normal leading-[6px] left-0 not-italic text-[#364146] text-[4px] top-[0.5px] tracking-[-0.06px] whitespace-nowrap">Товар</p>
    </div>
  );
}

function Container132() {
  return (
    <div className="absolute bg-[#f7f8fc] content-stretch flex flex-col gap-[2px] h-[34px] items-start left-0 pt-[4px] px-[4px] rounded-[4px] top-[12px] w-[68px]" data-name="Container">
      <ImageWithFallback16 />
      <Paragraph100 />
    </div>
  );
}

function Container131() {
  return (
    <div className="h-[46px] relative shrink-0 w-[166px]" data-name="Container">
      <div className="bg-clip-padding border-0 border-[transparent] border-solid relative size-full">
        <Paragraph99 />
        <Container132 />
      </div>
    </div>
  );
}

function Container126() {
  return (
    <div className="content-stretch flex flex-col gap-[6px] h-[211px] items-start justify-center py-[48.25px] relative shrink-0 w-full" data-name="Container">
      <Container127 />
      <Container129 />
      <Container131 />
    </div>
  );
}

function Lesson1Quiz4() {
  return (
    <div className="absolute bg-white content-stretch flex flex-col h-[231px] items-start left-0 overflow-clip pt-[10px] px-[10px] rounded-[14.99px] top-0 w-[186px]" data-name="Lesson1Quiz8">
      <Container126 />
    </div>
  );
}

function Container124() {
  return (
    <div className="h-[331px] relative shrink-0 w-full" data-name="Container">
      <Container125 />
      <Lesson1Quiz4 />
    </div>
  );
}

function Container123() {
  return (
    <div className="absolute content-stretch flex flex-col gap-[24px] h-[369px] items-start left-0 top-[507px] w-[1280px]" data-name="Container">
      <Paragraph90 />
      <Container124 />
    </div>
  );
}

function Paragraph101() {
  return (
    <div className="h-[14px] relative shrink-0 w-full" data-name="Paragraph">
      <p className="absolute font-['Inter:Regular',sans-serif] font-normal leading-[14px] left-0 not-italic text-[#8e9199] text-[11px] top-[0.5px] tracking-[-0.14px] whitespace-nowrap">9. Что происходит без UI Kit?</p>
    </div>
  );
}

function Paragraph102() {
  return (
    <div className="h-[15px] relative shrink-0 w-[1280px]" data-name="Paragraph">
      <div className="bg-clip-padding border-0 border-[transparent] border-solid relative size-full">
        <p className="absolute font-['Inter:Regular',sans-serif] font-normal leading-[15px] left-0 not-italic text-[#364146] text-[10px] top-[0.5px] tracking-[-0.13px] whitespace-nowrap">• Хаос</p>
      </div>
    </div>
  );
}

function Paragraph103() {
  return (
    <div className="h-[15px] relative shrink-0 w-[1280px]" data-name="Paragraph">
      <div className="bg-clip-padding border-0 border-[transparent] border-solid relative size-full">
        <p className="absolute font-['Inter:Regular',sans-serif] font-normal leading-[15px] left-0 not-italic text-[#364146] text-[10px] top-[0.5px] tracking-[-0.13px] whitespace-nowrap">• Несистема</p>
      </div>
    </div>
  );
}

function Paragraph104() {
  return (
    <div className="h-[15px] relative shrink-0 w-[1280px]" data-name="Paragraph">
      <div className="bg-clip-padding border-0 border-[transparent] border-solid relative size-full">
        <p className="absolute font-['Inter:Regular',sans-serif] font-normal leading-[15px] left-0 not-italic text-[#364146] text-[10px] top-[0.5px] tracking-[-0.13px] whitespace-nowrap">• Четкая структура</p>
      </div>
    </div>
  );
}

function Paragraph105() {
  return (
    <div className="flex-[1_0_0] min-h-px min-w-px relative w-[1280px]" data-name="Paragraph">
      <div className="bg-clip-padding border-0 border-[transparent] border-solid relative size-full">
        <p className="absolute font-['Inter:Regular',sans-serif] font-normal leading-[15px] left-0 not-italic text-[#364146] text-[10px] top-[0.5px] tracking-[-0.13px] whitespace-nowrap">• Разные элементы</p>
      </div>
    </div>
  );
}

function Container135() {
  return (
    <div className="absolute content-stretch flex flex-col gap-[8px] h-[84px] items-start left-0 top-[247px] w-[1280px]" data-name="Container">
      <Paragraph102 />
      <Paragraph103 />
      <Paragraph104 />
      <Paragraph105 />
    </div>
  );
}

function Paragraph106() {
  return (
    <div className="h-[21px] relative shrink-0 w-[166px]" data-name="Paragraph">
      <div className="bg-clip-padding border-0 border-[transparent] border-solid relative size-full">
        <p className="absolute font-['Inter:Regular',sans-serif] font-normal leading-[21px] left-0 not-italic text-[#0a0a0a] text-[14px] top-0 tracking-[-0.1504px] whitespace-nowrap">⚠️</p>
      </div>
    </div>
  );
}

function Paragraph107() {
  return (
    <div className="h-[7.5px] relative shrink-0 w-full" data-name="Paragraph">
      <p className="absolute font-['Inter:Regular',sans-serif] font-normal leading-[7.5px] left-0 not-italic text-[5px] text-white top-[-0.5px] tracking-[-0.07px] whitespace-nowrap">A</p>
    </div>
  );
}

function Container138() {
  return (
    <div className="bg-[#3b82f6] h-[16px] relative rounded-[3px] shrink-0 w-[15.313px]" data-name="Container">
      <div className="bg-clip-padding border-0 border-[transparent] border-solid content-stretch flex flex-col items-start pt-[4px] px-[6px] relative size-full">
        <Paragraph107 />
      </div>
    </div>
  );
}

function Paragraph108() {
  return (
    <div className="h-[9px] relative shrink-0 w-full" data-name="Paragraph">
      <p className="absolute font-['Inter:Regular',sans-serif] font-normal leading-[9px] left-0 not-italic text-[6px] text-white top-[-0.5px] tracking-[-0.08px] whitespace-nowrap">B</p>
    </div>
  );
}

function Container139() {
  return (
    <div className="bg-[#22c55e] h-[16px] relative rounded-[5px] shrink-0 w-[19.828px]" data-name="Container">
      <div className="bg-clip-padding border-0 border-[transparent] border-solid content-stretch flex flex-col items-start pt-[3px] px-[8px] relative size-full">
        <Paragraph108 />
      </div>
    </div>
  );
}

function Paragraph109() {
  return (
    <div className="h-[6px] relative shrink-0 w-full" data-name="Paragraph">
      <p className="absolute font-['Inter:Regular',sans-serif] font-normal leading-[6px] left-0 not-italic text-[4px] text-white top-[0.5px] tracking-[-0.06px] whitespace-nowrap">C</p>
    </div>
  );
}

function Container140() {
  return (
    <div className="bg-[#8b5cf6] h-[16px] relative rounded-[4px] shrink-0 w-[12.852px]" data-name="Container">
      <div className="bg-clip-padding border-0 border-[transparent] border-solid content-stretch flex flex-col items-start pt-[5px] px-[5px] relative size-full">
        <Paragraph109 />
      </div>
    </div>
  );
}

function Container137() {
  return (
    <div className="h-[16px] relative shrink-0 w-[166px]" data-name="Container">
      <div className="bg-clip-padding border-0 border-[transparent] border-solid content-stretch flex gap-[3px] items-start relative size-full">
        <Container138 />
        <Container139 />
        <Container140 />
      </div>
    </div>
  );
}

function ImageWithFallback17() {
  return (
    <div className="h-[17px] relative rounded-[2px] shrink-0 w-full" data-name="ImageWithFallback">
      <div className="absolute inset-0 rounded-[2px]" style={{ background: "#fde68a" }} />
    </div>
  );
}

function Container141() {
  return (
    <div className="bg-[#f7f8fc] h-[25px] relative rounded-[4px] shrink-0 w-[166px]" data-name="Container">
      <div className="bg-clip-padding border-0 border-[transparent] border-solid content-stretch flex flex-col items-start pt-[4px] px-[4px] relative size-full">
        <ImageWithFallback17 />
      </div>
    </div>
  );
}

function ImageWithFallback18() {
  return (
    <div className="h-[18px] relative rounded-[2px] shrink-0 w-full" data-name="ImageWithFallback">
      <div className="absolute inset-0 rounded-[2px]" style={{ background: "#bfdbfe" }} />
    </div>
  );
}

function Container142() {
  return (
    <div className="bg-[#f7f8fc] h-[30px] relative rounded-[6px] shrink-0 w-[166px]" data-name="Container">
      <div className="bg-clip-padding border-0 border-[transparent] border-solid content-stretch flex flex-col items-start pt-[6px] px-[6px] relative size-full">
        <ImageWithFallback18 />
      </div>
    </div>
  );
}

function Paragraph110() {
  return (
    <div className="h-[7.5px] relative shrink-0 w-[166px]" data-name="Paragraph">
      <div className="bg-clip-padding border-0 border-[transparent] border-solid relative size-full">
        <p className="absolute font-['Inter:Regular',sans-serif] font-normal leading-[7.5px] left-0 not-italic text-[#ef4444] text-[5px] top-[-0.5px] tracking-[-0.07px] whitespace-nowrap">Хаос и несистема</p>
      </div>
    </div>
  );
}

function Container136() {
  return (
    <div className="content-stretch flex flex-col gap-[4px] h-[211px] items-start justify-center py-[47.75px] relative shrink-0 w-full" data-name="Container">
      <Paragraph106 />
      <Container137 />
      <Container141 />
      <Container142 />
      <Paragraph110 />
    </div>
  );
}

function Lesson1Quiz5() {
  return (
    <div className="absolute bg-white content-stretch flex flex-col h-[231px] items-start left-0 overflow-clip pt-[10px] px-[10px] rounded-[14.99px] top-0 w-[186px]" data-name="Lesson1Quiz9">
      <Container136 />
    </div>
  );
}

function Container134() {
  return (
    <div className="h-[331px] relative shrink-0 w-full" data-name="Container">
      <Container135 />
      <Lesson1Quiz5 />
    </div>
  );
}

function Container133() {
  return (
    <div className="absolute content-stretch flex flex-col gap-[24px] h-[369px] items-start left-0 top-[924px] w-[1280px]" data-name="Container">
      <Paragraph101 />
      <Container134 />
    </div>
  );
}

function Container111() {
  return (
    <div className="absolute h-[1293px] left-0 top-[2474px] w-[1280px]" data-name="Container">
      <Heading3 />
      <Paragraph79 />
      <Container112 />
      <Container123 />
      <Container133 />
    </div>
  );
}

function Paragraph111() {
  return (
    <div className="h-[10.5px] relative shrink-0 w-[114px]" data-name="Paragraph">
      <div className="bg-clip-padding border-0 border-[transparent] border-solid relative size-full">
        <p className="absolute font-['Inter:Regular',sans-serif] font-normal leading-[10.5px] left-0 not-italic text-[#3b82f6] text-[7px] top-0 tracking-[-0.09px] whitespace-nowrap">UI KIT</p>
      </div>
    </div>
  );
}

function Paragraph112() {
  return (
    <div className="h-[6px] relative shrink-0 w-full" data-name="Paragraph">
      <p className="absolute font-['Inter:Regular',sans-serif] font-normal leading-[6px] left-0 not-italic text-[4px] text-white top-[0.5px] whitespace-nowrap">Btn</p>
    </div>
  );
}

function Container145() {
  return (
    <div className="bg-[#3b82f6] h-[10px] relative rounded-[2px] shrink-0 w-full" data-name="Container">
      <div className="content-stretch flex flex-col items-start pt-[2px] px-[3px] relative size-full">
        <Paragraph112 />
      </div>
    </div>
  );
}

function Container144() {
  return (
    <div className="bg-[#f7f8fc] h-[16px] relative rounded-[2px] shrink-0 w-[18.398px]" data-name="Container">
      <div aria-hidden="true" className="absolute border border-[#d1d3db] border-solid inset-0 pointer-events-none rounded-[2px]" />
      <div className="bg-clip-padding border-0 border-[transparent] border-solid content-stretch flex flex-col items-start pb-px pt-[3px] px-[3px] relative size-full">
        <Container145 />
      </div>
    </div>
  );
}

function Paragraph113() {
  return (
    <div className="h-[4.5px] relative shrink-0 w-full" data-name="Paragraph">
      <p className="absolute font-['Inter:Regular',sans-serif] font-normal leading-[4.5px] left-0 not-italic text-[#8e9199] text-[3px] top-[0.5px] whitespace-nowrap">Input</p>
    </div>
  );
}

function Container147() {
  return (
    <div className="bg-white h-[8.5px] relative rounded-[2px] shrink-0 w-full" data-name="Container">
      <div aria-hidden="true" className="absolute border border-[#d1d3db] border-solid inset-0 pointer-events-none rounded-[2px]" />
      <div className="content-stretch flex flex-col items-start pb-px pt-[2px] px-[3px] relative size-full">
        <Paragraph113 />
      </div>
    </div>
  );
}

function Container146() {
  return (
    <div className="bg-[#f7f8fc] h-[16px] relative rounded-[2px] shrink-0 w-[19.211px]" data-name="Container">
      <div aria-hidden="true" className="absolute border border-[#d1d3db] border-solid inset-0 pointer-events-none rounded-[2px]" />
      <div className="bg-clip-padding border-0 border-[transparent] border-solid content-stretch flex flex-col items-start pb-px pt-[3px] px-[3px] relative size-full">
        <Container147 />
      </div>
    </div>
  );
}

function ImageWithFallback19() {
  return (
    <div className="h-[8px] relative rounded-[1px] shrink-0 w-full" data-name="ImageWithFallback">
      <div className="absolute inset-0 rounded-[1px]" style={{ background: "#bfdbfe" }} />
    </div>
  );
}

function Container149() {
  return (
    <div className="bg-[#f7f8fc] content-stretch flex flex-col h-[8px] items-start relative rounded-[1px] shrink-0 w-full" data-name="Container">
      <ImageWithFallback19 />
    </div>
  );
}

function Container148() {
  return (
    <div className="bg-[#f7f8fc] h-[16px] relative rounded-[2px] shrink-0 w-[18px]" data-name="Container">
      <div aria-hidden="true" className="absolute border border-[#d1d3db] border-solid inset-0 pointer-events-none rounded-[2px]" />
      <div className="bg-clip-padding border-0 border-[transparent] border-solid content-stretch flex flex-col items-start pb-px pt-[3px] px-[3px] relative size-full">
        <Container149 />
      </div>
    </div>
  );
}

function Container143() {
  return (
    <div className="h-[16px] relative shrink-0 w-[114px]" data-name="Container">
      <div className="bg-clip-padding border-0 border-[transparent] border-solid content-stretch flex gap-[2px] items-start relative size-full">
        <Container144 />
        <Container146 />
        <Container148 />
      </div>
    </div>
  );
}

function Paragraph114() {
  return (
    <div className="h-[7.5px] relative shrink-0 w-[114px]" data-name="Paragraph">
      <div className="bg-clip-padding border-0 border-[transparent] border-solid relative size-full">
        <p className="absolute font-['Inter:Regular',sans-serif] font-normal leading-[7.5px] left-0 not-italic text-[#8e9199] text-[5px] top-[-0.5px] whitespace-nowrap">Библиотека компонентов</p>
      </div>
    </div>
  );
}

function Lesson1Quiz10Card() {
  return (
    <div className="absolute content-stretch flex flex-col gap-[2px] h-[80px] items-start left-[-36px] pl-[8px] pt-[8px] rounded-[8px] top-[4064.5px] w-[130px]" data-name="Lesson1Quiz10Card1">
      <Paragraph111 />
      <Container143 />
      <Paragraph114 />
    </div>
  );
}

function Paragraph115() {
  return (
    <div className="h-[10.5px] relative shrink-0 w-[44.695px]" data-name="Paragraph">
      <div className="bg-clip-padding border-0 border-[transparent] border-solid relative size-full">
        <p className="absolute font-['Inter:Regular',sans-serif] font-normal leading-[10.5px] left-0 not-italic text-[#3b82f6] text-[7px] top-0 tracking-[-0.09px] whitespace-nowrap">COMPONENT</p>
      </div>
    </div>
  );
}

function Paragraph116() {
  return (
    <div className="h-[7.5px] relative shrink-0 w-full" data-name="Paragraph">
      <p className="absolute font-['Inter:Regular',sans-serif] font-normal leading-[7.5px] left-0 not-italic text-[5px] text-white top-[-0.5px] whitespace-nowrap">Купить</p>
    </div>
  );
}

function Container151() {
  return (
    <div className="bg-[#3b82f6] h-[13.5px] relative rounded-[3px] shrink-0 w-full" data-name="Container">
      <div className="content-stretch flex flex-col items-start pt-[3px] px-[6px] relative size-full">
        <Paragraph116 />
      </div>
    </div>
  );
}

function Container150() {
  return (
    <div className="bg-[#f7f8fc] h-[23.5px] relative rounded-[3px] shrink-0 w-[38.945px]" data-name="Container">
      <div aria-hidden="true" className="absolute border-2 border-[#3b82f6] border-solid inset-0 pointer-events-none rounded-[3px]" />
      <div className="bg-clip-padding border-0 border-[transparent] border-solid content-stretch flex flex-col items-start pb-[2px] pt-[5px] px-[5px] relative size-full">
        <Container151 />
      </div>
    </div>
  );
}

function Paragraph117() {
  return (
    <div className="h-[7.5px] relative shrink-0 w-[49.648px]" data-name="Paragraph">
      <div className="bg-clip-padding border-0 border-[transparent] border-solid relative size-full">
        <p className="absolute font-['Inter:Regular',sans-serif] font-normal leading-[7.5px] left-0 not-italic text-[#8e9199] text-[5px] top-[-0.5px] whitespace-nowrap">Отдельный элемент</p>
      </div>
    </div>
  );
}

function Lesson1Quiz10Card1() {
  return (
    <div className="absolute content-stretch flex flex-col gap-[2px] h-[80px] items-center justify-center left-[118px] py-[17.25px] rounded-[8px] top-[4064.5px] w-[130px]" data-name="Lesson1Quiz10Card2">
      <Paragraph115 />
      <Container150 />
      <Paragraph117 />
    </div>
  );
}

function Paragraph118() {
  return (
    <div className="h-[10.5px] relative shrink-0 w-[114px]" data-name="Paragraph">
      <div className="bg-clip-padding border-0 border-[transparent] border-solid relative size-full">
        <p className="absolute font-['Inter:Regular',sans-serif] font-normal leading-[10.5px] left-0 not-italic text-[#3b82f6] text-[7px] top-0 tracking-[-0.09px] whitespace-nowrap">INTERFACE</p>
      </div>
    </div>
  );
}

function Paragraph119() {
  return (
    <div className="h-[6px] relative shrink-0 w-full" data-name="Paragraph">
      <p className="absolute font-['Inter:Regular',sans-serif] font-normal leading-[6px] left-0 not-italic text-[4px] text-white top-[0.5px] whitespace-nowrap">Начать</p>
    </div>
  );
}

function Container153() {
  return (
    <div className="bg-[#3b82f6] h-[10px] relative rounded-[2px] shrink-0 w-[114px]" data-name="Container">
      <div className="bg-clip-padding border-0 border-[transparent] border-solid content-stretch flex flex-col items-start pt-[2px] px-[4px] relative size-full">
        <Paragraph119 />
      </div>
    </div>
  );
}

function Paragraph120() {
  return (
    <div className="h-[4.5px] relative shrink-0 w-full" data-name="Paragraph">
      <p className="absolute font-['Inter:Regular',sans-serif] font-normal leading-[4.5px] left-0 not-italic text-[#8e9199] text-[3px] top-[0.5px] whitespace-nowrap">Email</p>
    </div>
  );
}

function Container154() {
  return (
    <div className="bg-white h-[8.5px] relative rounded-[2px] shrink-0 w-[114px]" data-name="Container">
      <div aria-hidden="true" className="absolute border border-[#d1d3db] border-solid inset-0 pointer-events-none rounded-[2px]" />
      <div className="bg-clip-padding border-0 border-[transparent] border-solid content-stretch flex flex-col items-start pb-px pt-[2px] px-[4px] relative size-full">
        <Paragraph120 />
      </div>
    </div>
  );
}

function ImageWithFallback20() {
  return (
    <div className="h-[10px] relative rounded-[1px] shrink-0 w-full" data-name="ImageWithFallback">
      <div className="absolute inset-0 rounded-[1px]" style={{ background: "#dbeafe" }} />
    </div>
  );
}

function Container155() {
  return (
    <div className="bg-[#f7f8fc] flex-[1_0_0] min-h-px min-w-px relative rounded-[2px] w-[114px]" data-name="Container">
      <div className="bg-clip-padding border-0 border-[transparent] border-solid content-stretch flex flex-col items-start pt-px px-px relative size-full">
        <ImageWithFallback20 />
      </div>
    </div>
  );
}

function Container152() {
  return (
    <div className="h-[34.5px] relative shrink-0 w-[114px]" data-name="Container">
      <div className="bg-clip-padding border-0 border-[transparent] border-solid content-stretch flex flex-col gap-[2px] items-start relative size-full">
        <Container153 />
        <Container154 />
        <Container155 />
      </div>
    </div>
  );
}

function Paragraph121() {
  return (
    <div className="h-[7.5px] relative shrink-0 w-[114px]" data-name="Paragraph">
      <div className="bg-clip-padding border-0 border-[transparent] border-solid relative size-full">
        <p className="absolute font-['Inter:Regular',sans-serif] font-normal leading-[7.5px] left-0 not-italic text-[#8e9199] text-[5px] top-[-0.5px] whitespace-nowrap">Готовый экран</p>
      </div>
    </div>
  );
}

function Lesson1Quiz10Card2() {
  return (
    <div className="absolute content-stretch flex flex-col gap-[2px] h-[80px] items-start left-[272px] pl-[8px] pt-[8px] rounded-[8px] top-[4064.5px] w-[130px]" data-name="Lesson1Quiz10Card3">
      <Paragraph118 />
      <Container152 />
      <Paragraph121 />
    </div>
  );
}

function Paragraph122() {
  return <div className="h-[10.5px] shrink-0 w-[28.656px]" data-name="Paragraph" />;
}

function Paragraph123() {
  return (
    <div className="h-[10.5px] relative shrink-0 w-full" data-name="Paragraph">
      <p className="absolute font-['Inter:Regular',sans-serif] font-normal leading-[10.5px] left-0 not-italic text-[7px] text-white top-0 whitespace-nowrap">Купить</p>
    </div>
  );
}

function Container156() {
  return (
    <div className="bg-[#3b82f6] h-[22.5px] relative rounded-[4px] shrink-0 w-[43.719px]" data-name="Container">
      <div className="bg-clip-padding border-0 border-[transparent] border-solid content-stretch flex flex-col items-start pt-[6px] px-[10px] relative size-full">
        <Paragraph123 />
      </div>
    </div>
  );
}

function Lesson1Quiz11Card() {
  return (
    <div className="absolute content-stretch flex flex-col gap-[2px] h-[80px] items-center justify-center left-[-36px] py-[22.5px] rounded-[8px] top-[4315.5px] w-[130px]" data-name="Lesson1Quiz11Card1">
      <Paragraph122 />
      <Container156 />
    </div>
  );
}

function Paragraph124() {
  return <div className="h-[10.5px] shrink-0 w-[21px]" data-name="Paragraph" />;
}

function Paragraph125() {
  return (
    <div className="h-[9px] relative shrink-0 w-full" data-name="Paragraph">
      <p className="absolute font-['Inter:Regular',sans-serif] font-normal leading-[9px] left-0 not-italic text-[#8e9199] text-[6px] top-[-0.5px] whitespace-nowrap">Email</p>
    </div>
  );
}

function Container157() {
  return (
    <div className="bg-white h-[19px] relative rounded-[4px] shrink-0 w-[33.039px]" data-name="Container">
      <div aria-hidden="true" className="absolute border border-[#d1d3db] border-solid inset-0 pointer-events-none rounded-[4px]" />
      <div className="bg-clip-padding border-0 border-[transparent] border-solid content-stretch flex flex-col items-start pb-px pt-[5px] px-[9px] relative size-full">
        <Paragraph125 />
      </div>
    </div>
  );
}

function Lesson1Quiz11Card1() {
  return (
    <div className="absolute content-stretch flex flex-col gap-[2px] h-[80px] items-center justify-center left-[118px] py-[24.25px] rounded-[8px] top-[4315.5px] w-[130px]" data-name="Lesson1Quiz11Card2">
      <Paragraph124 />
      <Container157 />
    </div>
  );
}

function Paragraph126() {
  return <div className="h-[10.5px] shrink-0 w-[19.836px]" data-name="Paragraph" />;
}

function ImageWithFallback21() {
  return (
    <div className="absolute h-[28px] left-[4px] rounded-[3px] top-[4px] w-[100px]" data-name="ImageWithFallback">
      <div className="absolute inset-0 rounded-[3px]" style={{ background: "#a5f3fc" }} />
    </div>
  );
}

function Paragraph127() {
  return (
    <div className="absolute h-[7.5px] left-[4px] top-[34px] w-[100px]" data-name="Paragraph">
      <p className="absolute font-['Inter:Regular',sans-serif] font-normal leading-[7.5px] left-0 not-italic text-[#364146] text-[5px] top-[-0.5px] whitespace-nowrap">Наушники</p>
    </div>
  );
}

function Paragraph128() {
  return (
    <div className="absolute h-[6px] left-[4px] top-[41.5px] w-[100px]" data-name="Paragraph">
      <p className="absolute font-['Inter:Regular',sans-serif] font-normal leading-[6px] left-0 not-italic text-[#8e9199] text-[4px] top-[0.5px] whitespace-nowrap">4 990 ₽</p>
    </div>
  );
}

function Container158() {
  return (
    <div className="bg-[#f7f8fc] h-[51.5px] relative rounded-[4px] shrink-0 w-[108px]" data-name="Container">
      <div className="bg-clip-padding border-0 border-[transparent] border-solid relative size-full">
        <ImageWithFallback21 />
        <Paragraph127 />
        <Paragraph128 />
      </div>
    </div>
  );
}

function Lesson1Quiz11Card2() {
  return (
    <div className="absolute content-stretch flex flex-col gap-[2px] h-[80px] items-center justify-center left-[272px] py-[8px] rounded-[8px] top-[4315.5px] w-[130px]" data-name="Lesson1Quiz11Card3">
      <Paragraph126 />
      <Container158 />
    </div>
  );
}

function Paragraph129() {
  return <div className="h-[10.5px] shrink-0 w-[114px]" data-name="Paragraph" />;
}

function Paragraph130() {
  return (
    <div className="h-[6px] relative shrink-0 w-full" data-name="Paragraph">
      <p className="absolute font-['Inter:Regular',sans-serif] font-normal leading-[6px] left-0 not-italic text-[4px] text-white top-[0.5px] whitespace-nowrap">A</p>
    </div>
  );
}

function Container160() {
  return (
    <div className="bg-[#3b82f6] h-[13.5px] relative rounded-[3px] shrink-0 w-[10.711px]" data-name="Container">
      <div className="bg-clip-padding border-0 border-[transparent] border-solid content-stretch flex flex-col items-start pt-[2px] px-[4px] relative size-full">
        <Paragraph130 />
      </div>
    </div>
  );
}

function Paragraph131() {
  return (
    <div className="h-[7.5px] relative shrink-0 w-full" data-name="Paragraph">
      <p className="absolute font-['Inter:Regular',sans-serif] font-normal leading-[7.5px] left-0 not-italic text-[5px] text-white top-[-0.5px] whitespace-nowrap">B</p>
    </div>
  );
}

function Container161() {
  return (
    <div className="bg-[#22c55e] h-[13.5px] relative rounded-[4px] shrink-0 w-[13.258px]" data-name="Container">
      <div className="bg-clip-padding border-0 border-[transparent] border-solid content-stretch flex flex-col items-start pt-[3px] px-[5px] relative size-full">
        <Paragraph131 />
      </div>
    </div>
  );
}

function Container159() {
  return (
    <div className="h-[13.5px] relative shrink-0 w-[114px]" data-name="Container">
      <div className="bg-clip-padding border-0 border-[transparent] border-solid content-stretch flex gap-[2px] items-start relative size-full">
        <Container160 />
        <Container161 />
      </div>
    </div>
  );
}

function Lesson1Quiz12Card() {
  return (
    <div className="absolute content-stretch flex flex-col gap-[2px] h-[80px] items-start justify-center left-[-36px] pl-[8px] py-[27px] rounded-[8px] top-[4566.5px] w-[130px]" data-name="Lesson1Quiz12Card1">
      <Paragraph129 />
      <Container159 />
    </div>
  );
}

function Paragraph132() {
  return <div className="h-[10.5px] shrink-0 w-[114px]" data-name="Paragraph" />;
}

function Paragraph133() {
  return (
    <div className="h-[7.5px] relative shrink-0 w-full" data-name="Paragraph">
      <p className="absolute font-['Inter:Regular',sans-serif] font-normal leading-[7.5px] left-0 not-italic text-[5px] text-white top-[-0.5px] whitespace-nowrap">Стиль 1</p>
    </div>
  );
}

function Container163() {
  return (
    <div className="bg-[#3b82f6] h-[13.5px] relative rounded-[4px] shrink-0 w-[114px]" data-name="Container">
      <div className="bg-clip-padding border-0 border-[transparent] border-solid content-stretch flex flex-col items-start pt-[3px] px-[6px] relative size-full">
        <Paragraph133 />
      </div>
    </div>
  );
}

function Paragraph134() {
  return (
    <div className="h-[9px] relative shrink-0 w-full" data-name="Paragraph">
      <p className="absolute font-['Inter:Regular',sans-serif] font-normal leading-[9px] left-0 not-italic text-[6px] text-white top-[-0.5px] whitespace-nowrap">Стиль 2</p>
    </div>
  );
}

function Container164() {
  return (
    <div className="bg-[#22c55e] flex-[1_0_0] min-h-px min-w-px relative rounded-[5px] w-[114px]" data-name="Container">
      <div className="bg-clip-padding border-0 border-[transparent] border-solid content-stretch flex flex-col items-start pt-[4px] px-[7px] relative size-full">
        <Paragraph134 />
      </div>
    </div>
  );
}

function Paragraph135() {
  return (
    <div className="h-[6px] relative shrink-0 w-full" data-name="Paragraph">
      <p className="absolute font-['Inter:Regular',sans-serif] font-normal leading-[6px] left-0 not-italic text-[4px] text-white top-[0.5px] whitespace-nowrap">Стиль 3</p>
    </div>
  );
}

function Container165() {
  return (
    <div className="bg-[#8b5cf6] h-[10px] relative rounded-[3px] shrink-0 w-[114px]" data-name="Container">
      <div className="bg-clip-padding border-0 border-[transparent] border-solid content-stretch flex flex-col items-start pt-[2px] px-[5px] relative size-full">
        <Paragraph135 />
      </div>
    </div>
  );
}

function Container162() {
  return (
    <div className="h-[44.5px] relative shrink-0 w-[114px]" data-name="Container">
      <div className="bg-clip-padding border-0 border-[transparent] border-solid content-stretch flex flex-col gap-[2px] items-start relative size-full">
        <Container163 />
        <Container164 />
        <Container165 />
      </div>
    </div>
  );
}

function Lesson1Quiz12Card1() {
  return (
    <div className="absolute content-stretch flex flex-col gap-[2px] h-[80px] items-start justify-center left-[118px] pl-[8px] py-[11.5px] rounded-[8px] top-[4566.5px] w-[130px]" data-name="Lesson1Quiz12Card2">
      <Paragraph132 />
      <Container162 />
    </div>
  );
}

function Paragraph136() {
  return <div className="h-[10.5px] shrink-0 w-[114px]" data-name="Paragraph" />;
}

function ImageWithFallback22() {
  return (
    <div className="h-[15px] relative rounded-[1px] shrink-0 w-full" data-name="ImageWithFallback">
      <div className="absolute inset-0 rounded-[1px]" style={{ background: "#bfdbfe" }} />
    </div>
  );
}

function Container167() {
  return (
    <div className="bg-[#f7f8fc] h-[24px] relative rounded-[2px] shrink-0 w-[29px]" data-name="Container">
      <div className="bg-clip-padding border-0 border-[transparent] border-solid content-stretch flex flex-col items-start pt-[2px] px-[2px] relative size-full">
        <ImageWithFallback22 />
      </div>
    </div>
  );
}

function ImageWithFallback23() {
  return (
    <div className="h-[18px] relative rounded-[1px] shrink-0 w-full" data-name="ImageWithFallback">
      <div className="absolute inset-0 rounded-[1px]" style={{ background: "#c4b5fd" }} />
    </div>
  );
}

function Container168() {
  return (
    <div className="bg-[#f7f8fc] h-[24px] relative rounded-[3px] shrink-0 w-[36px]" data-name="Container">
      <div className="bg-clip-padding border-0 border-[transparent] border-solid content-stretch flex flex-col items-start pt-[3px] px-[3px] relative size-full">
        <ImageWithFallback23 />
      </div>
    </div>
  );
}

function Container166() {
  return (
    <div className="h-[24px] relative shrink-0 w-[114px]" data-name="Container">
      <div className="bg-clip-padding border-0 border-[transparent] border-solid content-stretch flex gap-[2px] items-start relative size-full">
        <Container167 />
        <Container168 />
      </div>
    </div>
  );
}

function Lesson1Quiz12Card2() {
  return (
    <div className="absolute content-stretch flex flex-col gap-[2px] h-[80px] items-start justify-center left-[272px] pl-[8px] py-[21.75px] rounded-[8px] top-[4566.5px] w-[130px]" data-name="Lesson1Quiz12Card3">
      <Paragraph136 />
      <Container166 />
    </div>
  );
}

export default function Component1UiKit() {
  return (
    <div className="relative size-full" data-name="Урок 1 — Что такое UI Kit">
      <Heading />
      <Paragraph />
      <Container />
      <Container69 />
      <Container111 />
      <p className="absolute font-['Inter:Regular',sans-serif] font-normal leading-[15px] left-[-36px] not-italic text-[#364146] text-[10px] top-[4717px] tracking-[-0.13px] whitespace-nowrap">• Нет единого стиля</p>
      <p className="absolute font-['Inter:Regular',sans-serif] font-normal leading-[15px] left-[-36px] not-italic text-[#364146] text-[10px] top-[4694px] tracking-[-0.13px] whitespace-nowrap">• Интерфейс выглядит неаккуратно</p>
      <p className="absolute font-['Inter:Regular',sans-serif] font-normal leading-[15px] left-[-36px] not-italic text-[#364146] text-[10px] top-[4671px] tracking-[-0.13px] whitespace-nowrap">• Сложно поддерживать</p>
      <p className="absolute font-['Inter:Regular',sans-serif] font-normal leading-[14px] left-[-36px] not-italic text-[#8e9199] text-[11px] top-[4529px] tracking-[-0.14px] whitespace-nowrap">12. Соедините проблему и эффект</p>
      <p className="absolute font-['Inter:Regular',sans-serif] font-normal leading-[15px] left-[-36px] not-italic text-[#364146] text-[10px] top-[4466px] tracking-[-0.13px] whitespace-nowrap">• Структура информации</p>
      <p className="absolute font-['Inter:Regular',sans-serif] font-normal leading-[15px] left-[-36px] not-italic text-[#364146] text-[10px] top-[4443px] tracking-[-0.13px] whitespace-nowrap">• Ввод данных</p>
      <p className="absolute font-['Inter:Regular',sans-serif] font-normal leading-[15px] left-[-36px] not-italic text-[#364146] text-[10px] top-[4420px] tracking-[-0.13px] whitespace-nowrap">• Действие</p>
      <p className="absolute font-['Inter:Regular',sans-serif] font-normal leading-[14px] left-[-36px] not-italic text-[#8e9199] text-[11px] top-[4278px] tracking-[-0.14px] whitespace-nowrap">11. Соедините элемент и роль</p>
      <p className="absolute font-['Inter:Regular',sans-serif] font-normal leading-[15px] left-[-36px] not-italic text-[#364146] text-[10px] top-[4215px] tracking-[-0.13px] whitespace-nowrap">• Экран продукта</p>
      <p className="absolute font-['Inter:Regular',sans-serif] font-normal leading-[15px] left-[-36px] not-italic text-[#364146] text-[10px] top-[4192px] tracking-[-0.13px] whitespace-nowrap">• Переиспользуемый элемент</p>
      <p className="absolute font-['Inter:Regular',sans-serif] font-normal leading-[15px] left-[-36px] not-italic text-[#364146] text-[10px] top-[4169px] tracking-[-0.13px] whitespace-nowrap">• Набор элементов системы</p>
      <p className="absolute font-['Inter:Regular',sans-serif] font-normal leading-[14px] left-[-36px] not-italic text-[#8e9199] text-[11px] top-[4027px] tracking-[-0.14px] whitespace-nowrap">10. Соедините термин и описание</p>
      <p className="absolute font-['Inter:Regular',sans-serif] font-normal leading-[27px] left-[-36px] not-italic text-[#101828] text-[18px] top-[3937px] tracking-[-0.4395px] whitespace-nowrap">Match / Connect</p>
      <p className="absolute font-['Inter:Regular',sans-serif] font-normal leading-[15px] left-[-36px] not-italic text-[#8e9199] text-[12px] top-[3971.5px] tracking-[-0.15px] w-[1280px]">Соедините элементы с описаниями</p>
      <Lesson1Quiz10Card />
      <Lesson1Quiz10Card1 />
      <Lesson1Quiz10Card2 />
      <Lesson1Quiz11Card />
      <Lesson1Quiz11Card1 />
      <Lesson1Quiz11Card2 />
      <Lesson1Quiz12Card />
      <Lesson1Quiz12Card1 />
      <Lesson1Quiz12Card2 />
    </div>
  );
}

// ─────────────────────────────────────────────────────────────────────────────
// Named exports for LessonQuizPage (quiz_what_is_ui_kit — Урок 1, Модуль 3)
// ─────────────────────────────────────────────────────────────────────────────

// ─── Quiz 1: Где используется UI Kit? ───────────────────────────────────────
export function CQWhKitCompare1A() {
  // Плохо: кнопки разных цветов и стилей — нет системы
  return (
    <div style={{ position: "relative", width: 260, height: 180, overflow: "hidden", borderRadius: 15, background: "white" }}>
      <div style={{ position: "absolute", inset: 0, padding: "14px 16px", display: "flex", flexDirection: "column", justifyContent: "center", gap: 9, overflow: "hidden" }}>
        <div style={{ background: "#3b82f6", borderRadius: 4, height: 28, display: "flex", alignItems: "center", justifyContent: "center" }}>
          <span style={{ color: "white", fontSize: 10, fontFamily: "Inter, sans-serif" }}>Купить</span>
        </div>
        <div style={{ background: "#22c55e", borderRadius: 10, height: 24, width: "75%", display: "flex", alignItems: "center", justifyContent: "center" }}>
          <span style={{ color: "white", fontSize: 10, fontFamily: "Inter, sans-serif" }}>Заказать</span>
        </div>
        <div style={{ background: "#8b5cf6", borderRadius: 6, height: 26, width: "85%", display: "flex", alignItems: "center", justifyContent: "center" }}>
          <span style={{ color: "white", fontSize: 10, fontFamily: "Inter, sans-serif" }}>Смотреть</span>
        </div>
      </div>
    </div>
  );
}
export function CQWhKitCompare1B() {
  // Хорошо: единая система — Buttons / Inputs / Cards
  return (
    <div style={{ position: "relative", width: 260, height: 180, overflow: "hidden", borderRadius: 15, background: "white" }}>
      <div style={{ position: "absolute", inset: 0, padding: "12px 16px", display: "flex", flexDirection: "column", justifyContent: "center", gap: 8, overflow: "hidden" }}>
        <div>
          <div style={{ color: "#8e9199", fontSize: 9, fontFamily: "Inter, sans-serif", marginBottom: 5 }}>Buttons</div>
          <div style={{ display: "flex", gap: 8 }}>
            <div style={{ background: "#3b82f6", borderRadius: 5, height: 28, flex: 1, display: "flex", alignItems: "center", justifyContent: "center" }}>
              <span style={{ color: "white", fontSize: 10, fontFamily: "Inter, sans-serif" }}>Primary</span>
            </div>
            <div style={{ border: "1.5px solid #3b82f6", borderRadius: 5, height: 28, flex: 1, display: "flex", alignItems: "center", justifyContent: "center" }}>
              <span style={{ color: "#3b82f6", fontSize: 10, fontFamily: "Inter, sans-serif" }}>Secondary</span>
            </div>
          </div>
        </div>
        <div>
          <div style={{ color: "#8e9199", fontSize: 9, fontFamily: "Inter, sans-serif", marginBottom: 5 }}>Inputs</div>
          <div style={{ border: "1px solid #d1d3db", borderRadius: 5, height: 28, display: "flex", alignItems: "center", padding: "0 10px" }}>
            <span style={{ color: "#8e9199", fontSize: 10, fontFamily: "Inter, sans-serif" }}>Email</span>
          </div>
        </div>
        <div>
          <div style={{ color: "#8e9199", fontSize: 9, fontFamily: "Inter, sans-serif", marginBottom: 5 }}>Cards</div>
          <div style={{ background: "#f7f8fc", borderRadius: 5, height: 28, display: "flex", alignItems: "center", padding: "0 10px" }}>
            <span style={{ color: "#364146", fontSize: 10, fontFamily: "Inter, sans-serif" }}>Товар</span>
          </div>
        </div>
      </div>
    </div>
  );
}

// ─── Quiz 2: Где компоненты единообразны? ───────────────────────────────────
export function CQWhKitCompare2A() {
  // Плохо: одна и та же кнопка нарисована по-разному
  const btns = [
    { bg: "#3b82f6", r: 4,  w: "100%", h: 26 },
    { bg: "#2563eb", r: 10, w: "80%",  h: 22 },
    { bg: "#60a5fa", r: 6,  w: "90%",  h: 28 },
  ];
  return (
    <div style={{ position: "relative", width: 260, height: 180, overflow: "hidden", borderRadius: 15, background: "white" }}>
      <div style={{ position: "absolute", inset: 0, padding: "14px 16px", display: "flex", flexDirection: "column", justifyContent: "center", gap: 10, overflow: "hidden" }}>
        {btns.map((b, i) => (
          <div key={i} style={{ background: b.bg, borderRadius: b.r, height: b.h, width: b.w, display: "flex", alignItems: "center", justifyContent: "center" }}>
            <span style={{ color: "white", fontSize: 10, fontFamily: "Inter, sans-serif" }}>Купить</span>
          </div>
        ))}
      </div>
    </div>
  );
}
export function CQWhKitCompare2B() {
  // Хорошо: единый стиль кнопки — один компонент
  return (
    <div style={{ position: "relative", width: 260, height: 180, overflow: "hidden", borderRadius: 15, background: "white" }}>
      <div style={{ position: "absolute", inset: 0, padding: "14px 16px", display: "flex", flexDirection: "column", justifyContent: "center", gap: 10, overflow: "hidden" }}>
        {[0, 1, 2].map((i) => (
          <div key={i} style={{ background: "#3b82f6", borderRadius: 6, height: 26, display: "flex", alignItems: "center", justifyContent: "center" }}>
            <span style={{ color: "white", fontSize: 10, fontFamily: "Inter, sans-serif" }}>Купить</span>
          </div>
        ))}
      </div>
    </div>
  );
}

// ─── Quiz 3: Где элементы переиспользуются? ─────────────────────────────────
export function CQWhKitCompare3A() {
  // Плохо: каждая карточка нарисована отдельно — разная структура
  const cards = [
    { imgColor: "#fca5a5", w: "100%", r: 4  },
    { imgColor: "#86efac", w: "85%",  r: 8  },
    { imgColor: "#fde68a", w: "92%",  r: 4  },
  ];
  return (
    <div style={{ position: "relative", width: 260, height: 180, overflow: "hidden", borderRadius: 15, background: "white" }}>
      <div style={{ position: "absolute", inset: 0, padding: "14px 16px", display: "flex", flexDirection: "column", justifyContent: "center", gap: 8, overflow: "hidden" }}>
        {cards.map((c, i) => (
          <div key={i} style={{ background: "#f7f8fc", borderRadius: c.r, height: 32, width: c.w, display: "flex", alignItems: "center", padding: "0 10px", gap: 8 }}>
            <div style={{ width: 20, height: 20, background: c.imgColor, borderRadius: 3, flexShrink: 0 }} />
            <span style={{ fontSize: 9, fontFamily: "Inter, sans-serif", color: "#364146" }}>Товар {i + 1}</span>
          </div>
        ))}
      </div>
    </div>
  );
}
export function CQWhKitCompare3B() {
  // Хорошо: один компонент — одинаковые копии
  return (
    <div style={{ position: "relative", width: 260, height: 180, overflow: "hidden", borderRadius: 15, background: "white" }}>
      <div style={{ position: "absolute", inset: 0, padding: "14px 16px", display: "flex", flexDirection: "column", justifyContent: "center", gap: 8, overflow: "hidden" }}>
        {[{ name: "Товар 1", color: "#fca5a5" }, { name: "Товар 2", color: "#86efac" }, { name: "Товар 3", color: "#fde68a" }].map((item) => (
          <div key={item.name} style={{ background: "#f7f8fc", borderRadius: 6, height: 32, display: "flex", alignItems: "center", padding: "0 10px", gap: 8 }}>
            <div style={{ width: 20, height: 20, background: item.color, borderRadius: 3, flexShrink: 0 }} />
            <span style={{ fontSize: 9, fontFamily: "Inter, sans-serif", color: "#364146" }}>{item.name}</span>
          </div>
        ))}
      </div>
    </div>
  );
}

// Single Choice (Q4–Q6)
export function CQWhKitSingle1() {
  return <div style={{ height: 231, width: 186, overflow: "hidden", borderRadius: 15 }}><Lesson1Quiz /></div>;
}
export function CQWhKitSingle2() {
  return <div style={{ height: 231, width: 186, overflow: "hidden", borderRadius: 15 }}><Lesson1Quiz1 /></div>;
}
export function CQWhKitSingle3() {
  return <div style={{ height: 231, width: 186, overflow: "hidden", borderRadius: 15 }}><Lesson1Quiz2 /></div>;
}

// Multiple Select (Q7–Q9)
export function CQWhKitMulti1() {
  return <div style={{ height: 231, width: 186, overflow: "hidden", borderRadius: 15 }}><Lesson1Quiz3 /></div>;
}
export function CQWhKitMulti2() {
  return <div style={{ height: 231, width: 186, overflow: "hidden", borderRadius: 15 }}><Lesson1Quiz4 /></div>;
}
export function CQWhKitMulti3() {
  return <div style={{ height: 231, width: 186, overflow: "hidden", borderRadius: 15 }}><Lesson1Quiz5 /></div>;
}

// Matching — Q10: Соедините термин и описание
// button→UI Kit, menu→Компонент, input→Интерфейс
export function CQWhKitConn1A() { return <Lesson1Quiz10Card />; }
export function CQWhKitConn1B() { return <Lesson1Quiz10Card1 />; }
export function CQWhKitConn1C() { return <Lesson1Quiz10Card2 />; }

// Matching — Q11: Соедините элемент и роль
// complex→Кнопка, navigation→Поле ввода, overloaded→Карточка
export function CQWhKitConn2A() { return <Lesson1Quiz11Card />; }
export function CQWhKitConn2B() { return <Lesson1Quiz11Card1 />; }
export function CQWhKitConn2C() { return <Lesson1Quiz11Card2 />; }

// Matching — Q12: Соедините проблему и эффект
// search→Нет UI Kit, choice→Разные элементы, finish→Нет системы
export function CQWhKitConn3A() { return <Lesson1Quiz12Card />; }
export function CQWhKitConn3B() { return <Lesson1Quiz12Card1 />; }
export function CQWhKitConn3C() { return <Lesson1Quiz12Card2 />; }