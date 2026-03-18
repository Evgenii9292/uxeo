function Paragraph() {
  return (
    <div className="absolute h-[21px] left-0 top-[8px] w-[9.297px]" data-name="Paragraph">
      <p className="absolute font-['Inter:Regular',sans-serif] font-normal leading-[21px] left-0 not-italic text-[#364146] text-[14px] top-0 tracking-[-0.17px] whitespace-nowrap">A</p>
    </div>
  );
}

function Paragraph1() {
  return (
    <div className="h-[12px] relative shrink-0 w-full" data-name="Paragraph">
      <p className="-translate-x-1/2 absolute font-['Inter:Regular',sans-serif] font-normal leading-[12px] left-[71.34px] not-italic text-[8px] text-center text-white top-0 tracking-[-0.1px] whitespace-nowrap">...</p>
    </div>
  );
}

function Container2() {
  return (
    <div className="bg-[#3b82f6] h-[24px] relative rounded-[6px] shrink-0 w-[166px]" data-name="Container">
      <div className="bg-clip-padding border-0 border-[transparent] border-solid content-stretch flex flex-col items-start pt-[6px] px-[12px] relative size-full">
        <Paragraph1 />
      </div>
    </div>
  );
}

function Container3() {
  return (
    <div className="bg-[#f7f8fc] h-[10px] relative rounded-[4px] shrink-0 w-[166px]" data-name="Container">
      <div aria-hidden="true" className="absolute border border-[#d1d3db] border-solid inset-0 pointer-events-none rounded-[4px]" />
    </div>
  );
}

function Paragraph2() {
  return (
    <div className="h-[18px] relative shrink-0 w-[12px]" data-name="Paragraph">
      <div className="bg-clip-padding border-0 border-[transparent] border-solid relative size-full">
        <p className="absolute font-['Inter:Regular',sans-serif] font-normal leading-[18px] left-0 not-italic text-[#0a0a0a] text-[12px] top-px whitespace-nowrap">🏠</p>
      </div>
    </div>
  );
}

function Paragraph3() {
  return (
    <div className="h-[18px] relative shrink-0 w-[12px]" data-name="Paragraph">
      <div className="bg-clip-padding border-0 border-[transparent] border-solid relative size-full">
        <p className="absolute font-['Inter:Regular',sans-serif] font-normal leading-[18px] left-0 not-italic text-[#0a0a0a] text-[12px] top-px whitespace-nowrap">📊</p>
      </div>
    </div>
  );
}

function Paragraph4() {
  return (
    <div className="h-[18px] relative shrink-0 w-[12px]" data-name="Paragraph">
      <div className="bg-clip-padding border-0 border-[transparent] border-solid relative size-full">
        <p className="absolute font-['Inter:Regular',sans-serif] font-normal leading-[18px] left-0 not-italic text-[#0a0a0a] text-[12px] top-px whitespace-nowrap">⚙️</p>
      </div>
    </div>
  );
}

function Container4() {
  return (
    <div className="h-[18px] relative shrink-0 w-[166px]" data-name="Container">
      <div className="bg-clip-padding border-0 border-[transparent] border-solid content-stretch flex gap-[4px] items-center relative size-full">
        <Paragraph2 />
        <Paragraph3 />
        <Paragraph4 />
      </div>
    </div>
  );
}

function Container1() {
  return (
    <div className="content-stretch flex flex-col gap-[8px] h-[211px] items-start justify-center py-[71.5px] relative shrink-0 w-full" data-name="Container">
      <Container2 />
      <Container3 />
      <Container4 />
    </div>
  );
}

function Lesson4Quiz1VariantA() {
  return (
    <div className="absolute bg-white content-stretch flex flex-col h-[231px] items-start left-[21.3px] overflow-clip pt-[10px] px-[10px] rounded-[14.99px] top-0 w-[186px]" data-name="Lesson4Quiz1VariantA">
      <Container1 />
    </div>
  );
}

function Container() {
  return (
    <div className="absolute h-[231px] left-0 top-[208px] w-[207.297px]" data-name="Container">
      <Paragraph />
      <Lesson4Quiz1VariantA />
    </div>
  );
}

function Paragraph5() {
  return (
    <div className="absolute h-[21px] left-0 top-[8px] w-[8.945px]" data-name="Paragraph">
      <p className="absolute font-['Inter:Regular',sans-serif] font-normal leading-[21px] left-0 not-italic text-[#364146] text-[14px] top-0 tracking-[-0.17px] whitespace-nowrap">B</p>
    </div>
  );
}

function Paragraph6() {
  return (
    <div className="h-[12px] relative shrink-0 w-full" data-name="Paragraph">
      <p className="-translate-x-1/2 absolute font-['Inter:Regular',sans-serif] font-normal leading-[12px] left-[71.43px] not-italic text-[8px] text-center text-white top-0 tracking-[-0.1px] whitespace-nowrap">Отправить</p>
    </div>
  );
}

function Container7() {
  return (
    <div className="bg-[#3b82f6] h-[24px] relative rounded-[6px] shrink-0 w-[166px]" data-name="Container">
      <div className="bg-clip-padding border-0 border-[transparent] border-solid content-stretch flex flex-col items-start pt-[6px] px-[12px] relative size-full">
        <Paragraph6 />
      </div>
    </div>
  );
}

function Paragraph7() {
  return (
    <div className="h-[9px] relative shrink-0 w-full" data-name="Paragraph">
      <p className="absolute font-['Inter:Regular',sans-serif] font-normal leading-[9px] left-0 not-italic text-[#8e9199] text-[6px] top-[-0.5px] tracking-[-0.08px] whitespace-nowrap">Email</p>
    </div>
  );
}

function Container8() {
  return (
    <div className="bg-[#f7f8fc] h-[23px] relative rounded-[4px] shrink-0 w-[166px]" data-name="Container">
      <div aria-hidden="true" className="absolute border border-[#d1d3db] border-solid inset-0 pointer-events-none rounded-[4px]" />
      <div className="bg-clip-padding border-0 border-[transparent] border-solid content-stretch flex flex-col items-start pb-px pt-[7px] px-[9px] relative size-full">
        <Paragraph7 />
      </div>
    </div>
  );
}

function Paragraph8() {
  return (
    <div className="h-[15px] relative shrink-0 w-[11px]" data-name="Paragraph">
      <div className="bg-clip-padding border-0 border-[transparent] border-solid relative size-full">
        <p className="absolute font-['Inter:Regular',sans-serif] font-normal leading-[15px] left-0 not-italic text-[#0a0a0a] text-[10px] top-[0.5px] tracking-[0.1172px] whitespace-nowrap">🏠</p>
      </div>
    </div>
  );
}

function Paragraph9() {
  return (
    <div className="flex-[1_0_0] h-[9px] min-h-px min-w-px relative" data-name="Paragraph">
      <div className="bg-clip-padding border-0 border-[transparent] border-solid relative size-full">
        <p className="absolute font-['Inter:Regular',sans-serif] font-normal leading-[9px] left-0 not-italic text-[#364146] text-[6px] top-[-0.5px] tracking-[-0.08px] whitespace-nowrap">Главная</p>
      </div>
    </div>
  );
}

function Container10() {
  return (
    <div className="h-[15px] relative shrink-0 w-[36.43px]" data-name="Container">
      <div className="bg-clip-padding border-0 border-[transparent] border-solid content-stretch flex gap-[2px] items-center relative size-full">
        <Paragraph8 />
        <Paragraph9 />
      </div>
    </div>
  );
}

function Container9() {
  return (
    <div className="h-[15px] relative shrink-0 w-[166px]" data-name="Container">
      <div className="bg-clip-padding border-0 border-[transparent] border-solid content-stretch flex items-center relative size-full">
        <Container10 />
      </div>
    </div>
  );
}

function Container6() {
  return (
    <div className="content-stretch flex flex-col gap-[8px] h-[211px] items-start justify-center py-[66.5px] relative shrink-0 w-full" data-name="Container">
      <Container7 />
      <Container8 />
      <Container9 />
    </div>
  );
}

function Lesson4Quiz1VariantB() {
  return (
    <div className="absolute bg-white content-stretch flex flex-col h-[231px] items-start left-[20.95px] overflow-clip pt-[10px] px-[10px] rounded-[14.99px] top-0 w-[186px]" data-name="Lesson4Quiz1VariantB">
      <Container6 />
    </div>
  );
}

function Container5() {
  return (
    <div className="absolute h-[231px] left-[247.3px] top-[208px] w-[206.945px]" data-name="Container">
      <Paragraph5 />
      <Lesson4Quiz1VariantB />
    </div>
  );
}

function Paragraph10() {
  return (
    <div className="absolute h-[21px] left-0 top-[8px] w-[9.297px]" data-name="Paragraph">
      <p className="absolute font-['Inter:Regular',sans-serif] font-normal leading-[21px] left-0 not-italic text-[#364146] text-[14px] top-0 tracking-[-0.17px] whitespace-nowrap">A</p>
    </div>
  );
}

function Paragraph11() {
  return (
    <div className="h-[10.5px] relative shrink-0 w-full" data-name="Paragraph">
      <p className="-translate-x-1/2 absolute font-['Inter:Regular',sans-serif] font-normal leading-[10.5px] left-[75.17px] not-italic text-[7px] text-center text-white top-0 tracking-[-0.09px] whitespace-nowrap">A</p>
    </div>
  );
}

function Container13() {
  return (
    <div className="bg-[#3b82f6] h-[18.5px] relative rounded-[4px] shrink-0 w-[166px]" data-name="Container">
      <div className="bg-clip-padding border-0 border-[transparent] border-solid content-stretch flex flex-col items-start pt-[4px] px-[8px] relative size-full">
        <Paragraph11 />
      </div>
    </div>
  );
}

function Paragraph12() {
  return (
    <div className="h-[10.5px] relative shrink-0 w-full" data-name="Paragraph">
      <p className="-translate-x-1/2 absolute font-['Inter:Regular',sans-serif] font-normal leading-[10.5px] left-[75.27px] not-italic text-[7px] text-center text-white top-0 tracking-[-0.09px] whitespace-nowrap">B</p>
    </div>
  );
}

function Container14() {
  return (
    <div className="bg-[#3b82f6] h-[18.5px] relative rounded-[4px] shrink-0 w-[166px]" data-name="Container">
      <div className="bg-clip-padding border-0 border-[transparent] border-solid content-stretch flex flex-col items-start pt-[4px] px-[8px] relative size-full">
        <Paragraph12 />
      </div>
    </div>
  );
}

function Paragraph13() {
  return (
    <div className="h-[10.5px] relative shrink-0 w-full" data-name="Paragraph">
      <p className="-translate-x-1/2 absolute font-['Inter:Regular',sans-serif] font-normal leading-[10.5px] left-[75.49px] not-italic text-[7px] text-center text-white top-0 tracking-[-0.09px] whitespace-nowrap">C</p>
    </div>
  );
}

function Container15() {
  return (
    <div className="bg-[#3b82f6] h-[18.5px] relative rounded-[4px] shrink-0 w-[166px]" data-name="Container">
      <div className="bg-clip-padding border-0 border-[transparent] border-solid content-stretch flex flex-col items-start pt-[4px] px-[8px] relative size-full">
        <Paragraph13 />
      </div>
    </div>
  );
}

function Container12() {
  return (
    <div className="content-stretch flex flex-col gap-[6px] h-[211px] items-start justify-center py-[71.75px] relative shrink-0 w-full" data-name="Container">
      <Container13 />
      <Container14 />
      <Container15 />
    </div>
  );
}

function Lesson4Quiz2VariantA() {
  return (
    <div className="absolute bg-white content-stretch flex flex-col h-[231px] items-start left-[21.3px] overflow-clip pt-[10px] px-[10px] rounded-[14.99px] top-0 w-[186px]" data-name="Lesson4Quiz2VariantA">
      <Container12 />
    </div>
  );
}

function Container11() {
  return (
    <div className="absolute h-[231px] left-0 top-[525px] w-[207.297px]" data-name="Container">
      <Paragraph10 />
      <Lesson4Quiz2VariantA />
    </div>
  );
}

function Paragraph14() {
  return (
    <div className="absolute h-[21px] left-0 top-[8px] w-[8.945px]" data-name="Paragraph">
      <p className="absolute font-['Inter:Regular',sans-serif] font-normal leading-[21px] left-0 not-italic text-[#364146] text-[14px] top-0 tracking-[-0.17px] whitespace-nowrap">B</p>
    </div>
  );
}

function Paragraph15() {
  return (
    <div className="h-[13.5px] relative shrink-0 w-[166px]" data-name="Paragraph">
      <div className="bg-clip-padding border-0 border-[transparent] border-solid relative size-full">
        <p className="absolute font-['Inter:Regular',sans-serif] font-normal leading-[13.5px] left-0 not-italic text-[#101828] text-[9px] top-[0.5px] tracking-[-0.12px] whitespace-nowrap">Выберите действие</p>
      </div>
    </div>
  );
}

function Paragraph16() {
  return (
    <div className="h-[13.5px] relative shrink-0 w-full" data-name="Paragraph">
      <p className="-translate-x-1/2 absolute font-['Inter:Regular',sans-serif] font-normal leading-[13.5px] left-[71.46px] not-italic text-[9px] text-center text-white top-[0.5px] tracking-[-0.12px] whitespace-nowrap">Сохранить</p>
    </div>
  );
}

function Container18() {
  return (
    <div className="bg-[#3b82f6] h-[29.5px] relative rounded-[6px] shrink-0 w-[166px]" data-name="Container">
      <div className="bg-clip-padding border-0 border-[transparent] border-solid content-stretch flex flex-col items-start pt-[8px] px-[12px] relative size-full">
        <Paragraph16 />
      </div>
    </div>
  );
}

function Paragraph17() {
  return (
    <div className="h-[10.5px] relative shrink-0 w-full" data-name="Paragraph">
      <p className="-translate-x-1/2 absolute font-['Inter:Regular',sans-serif] font-normal leading-[10.5px] left-[75.05px] not-italic text-[#364146] text-[7px] text-center top-0 tracking-[-0.09px] whitespace-nowrap">Отмена</p>
    </div>
  );
}

function Container19() {
  return (
    <div className="bg-[#f7f8fc] h-[18.5px] relative rounded-[4px] shrink-0 w-[166px]" data-name="Container">
      <div className="bg-clip-padding border-0 border-[transparent] border-solid content-stretch flex flex-col items-start pt-[4px] px-[8px] relative size-full">
        <Paragraph17 />
      </div>
    </div>
  );
}

function Container17() {
  return (
    <div className="content-stretch flex flex-col gap-[8px] h-[211px] items-start justify-center py-[66.75px] relative shrink-0 w-full" data-name="Container">
      <Paragraph15 />
      <Container18 />
      <Container19 />
    </div>
  );
}

function Lesson4Quiz2VariantB() {
  return (
    <div className="absolute bg-white content-stretch flex flex-col h-[231px] items-start left-[20.95px] overflow-clip pt-[10px] px-[10px] rounded-[14.99px] top-0 w-[186px]" data-name="Lesson4Quiz2VariantB">
      <Container17 />
    </div>
  );
}

function Container16() {
  return (
    <div className="absolute h-[231px] left-[247.3px] top-[525px] w-[206.945px]" data-name="Container">
      <Paragraph14 />
      <Lesson4Quiz2VariantB />
    </div>
  );
}

function Paragraph18() {
  return (
    <div className="absolute h-[21px] left-0 top-[8px] w-[9.297px]" data-name="Paragraph">
      <p className="absolute font-['Inter:Regular',sans-serif] font-normal leading-[21px] left-0 not-italic text-[#364146] text-[14px] top-0 tracking-[-0.17px] whitespace-nowrap">A</p>
    </div>
  );
}

function Container22() {
  return (
    <div className="bg-[#f7f8fc] h-[10px] relative rounded-[4px] shrink-0 w-[166px]" data-name="Container">
      <div aria-hidden="true" className="absolute border border-[#d1d3db] border-solid inset-0 pointer-events-none rounded-[4px]" />
    </div>
  );
}

function Container23() {
  return (
    <div className="bg-[#f7f8fc] h-[10px] relative rounded-[4px] shrink-0 w-[166px]" data-name="Container">
      <div aria-hidden="true" className="absolute border border-[#d1d3db] border-solid inset-0 pointer-events-none rounded-[4px]" />
    </div>
  );
}

function Container24() {
  return (
    <div className="bg-[#f7f8fc] h-[10px] relative rounded-[4px] shrink-0 w-[166px]" data-name="Container">
      <div aria-hidden="true" className="absolute border border-[#d1d3db] border-solid inset-0 pointer-events-none rounded-[4px]" />
    </div>
  );
}

function Container21() {
  return (
    <div className="content-stretch flex flex-col gap-[6px] h-[211px] items-start justify-center py-[84.5px] relative shrink-0 w-full" data-name="Container">
      <Container22 />
      <Container23 />
      <Container24 />
    </div>
  );
}

function Lesson4Quiz3VariantA() {
  return (
    <div className="absolute bg-white content-stretch flex flex-col h-[231px] items-start left-[21.3px] overflow-clip pt-[10px] px-[10px] rounded-[14.99px] top-0 w-[186px]" data-name="Lesson4Quiz3VariantA">
      <Container21 />
    </div>
  );
}

function Container20() {
  return (
    <div className="absolute h-[231px] left-0 top-[842px] w-[207.297px]" data-name="Container">
      <Paragraph18 />
      <Lesson4Quiz3VariantA />
    </div>
  );
}

function Paragraph19() {
  return (
    <div className="absolute h-[21px] left-0 top-[8px] w-[8.945px]" data-name="Paragraph">
      <p className="absolute font-['Inter:Regular',sans-serif] font-normal leading-[21px] left-0 not-italic text-[#364146] text-[14px] top-0 tracking-[-0.17px] whitespace-nowrap">B</p>
    </div>
  );
}

function Paragraph20() {
  return (
    <div className="h-[10.5px] relative shrink-0 w-full" data-name="Paragraph">
      <p className="absolute font-['Inter:Regular',sans-serif] font-normal leading-[10.5px] left-0 not-italic text-[#364146] text-[7px] top-0 tracking-[-0.09px] whitespace-nowrap">Имя</p>
    </div>
  );
}

function Paragraph21() {
  return (
    <div className="h-[9px] relative shrink-0 w-full" data-name="Paragraph">
      <p className="absolute font-['Inter:Regular',sans-serif] font-normal leading-[9px] left-0 not-italic text-[#8e9199] text-[6px] top-[-0.5px] tracking-[-0.08px] whitespace-nowrap">Введите имя</p>
    </div>
  );
}

function Container28() {
  return (
    <div className="bg-[#f7f8fc] h-[21px] relative rounded-[4px] shrink-0 w-full" data-name="Container">
      <div aria-hidden="true" className="absolute border border-[#d1d3db] border-solid inset-0 pointer-events-none rounded-[4px]" />
      <div className="content-stretch flex flex-col items-start pb-px pt-[6px] px-[9px] relative size-full">
        <Paragraph21 />
      </div>
    </div>
  );
}

function Container27() {
  return (
    <div className="h-[35.5px] relative shrink-0 w-[166px]" data-name="Container">
      <div className="bg-clip-padding border-0 border-[transparent] border-solid content-stretch flex flex-col gap-[4px] items-start relative size-full">
        <Paragraph20 />
        <Container28 />
      </div>
    </div>
  );
}

function Paragraph22() {
  return (
    <div className="h-[10.5px] relative shrink-0 w-full" data-name="Paragraph">
      <p className="absolute font-['Inter:Regular',sans-serif] font-normal leading-[10.5px] left-0 not-italic text-[#364146] text-[7px] top-0 tracking-[-0.09px] whitespace-nowrap">Email</p>
    </div>
  );
}

function Paragraph23() {
  return (
    <div className="h-[9px] relative shrink-0 w-full" data-name="Paragraph">
      <p className="absolute font-['Inter:Regular',sans-serif] font-normal leading-[9px] left-0 not-italic text-[#101828] text-[6px] top-[-0.5px] tracking-[-0.08px] whitespace-nowrap">user@email.com</p>
    </div>
  );
}

function Container30() {
  return (
    <div className="bg-[#f7f8fc] h-[21px] relative rounded-[4px] shrink-0 w-full" data-name="Container">
      <div aria-hidden="true" className="absolute border border-[#3b82f6] border-solid inset-0 pointer-events-none rounded-[4px]" />
      <div className="content-stretch flex flex-col items-start pb-px pt-[6px] px-[9px] relative size-full">
        <Paragraph23 />
      </div>
    </div>
  );
}

function Container29() {
  return (
    <div className="h-[35.5px] relative shrink-0 w-[166px]" data-name="Container">
      <div className="bg-clip-padding border-0 border-[transparent] border-solid content-stretch flex flex-col gap-[4px] items-start relative size-full">
        <Paragraph22 />
        <Container30 />
      </div>
    </div>
  );
}

function Container26() {
  return (
    <div className="content-stretch flex flex-col gap-[8px] h-[211px] items-start justify-center py-[66px] relative shrink-0 w-full" data-name="Container">
      <Container27 />
      <Container29 />
    </div>
  );
}

function Lesson4Quiz3VariantB() {
  return (
    <div className="absolute bg-white content-stretch flex flex-col h-[231px] items-start left-[20.95px] overflow-clip pt-[10px] px-[10px] rounded-[14.99px] top-0 w-[186px]" data-name="Lesson4Quiz3VariantB">
      <Container26 />
    </div>
  );
}

function Container25() {
  return (
    <div className="absolute h-[231px] left-[247.3px] top-[842px] w-[206.945px]" data-name="Container">
      <Paragraph19 />
      <Lesson4Quiz3VariantB />
    </div>
  );
}

function Paragraph24() {
  return (
    <div className="h-[15px] relative shrink-0 w-[1280px]" data-name="Paragraph">
      <p className="absolute font-['Inter:Regular',sans-serif] font-normal leading-[15px] left-0 not-italic text-[#364146] text-[10px] top-[0.5px] tracking-[-0.13px] whitespace-nowrap">• Для действия</p>
    </div>
  );
}

function Paragraph25() {
  return (
    <div className="h-[15px] relative shrink-0 w-[1280px]" data-name="Paragraph">
      <p className="absolute font-['Inter:Regular',sans-serif] font-normal leading-[15px] left-0 not-italic text-[#364146] text-[10px] top-[0.5px] tracking-[-0.13px] whitespace-nowrap">• Для украшения</p>
    </div>
  );
}

function Paragraph26() {
  return (
    <div className="flex-[1_0_0] min-h-px min-w-px relative w-[1280px]" data-name="Paragraph">
      <p className="absolute font-['Inter:Regular',sans-serif] font-normal leading-[15px] left-0 not-italic text-[#364146] text-[10px] top-[0.5px] tracking-[-0.13px] whitespace-nowrap">• Для текста</p>
    </div>
  );
}

function Container31() {
  return (
    <div className="absolute content-stretch flex flex-col gap-[8px] h-[61px] items-start left-0 top-[1512px] w-[1280px]" data-name="Container">
      <Paragraph24 />
      <Paragraph25 />
      <Paragraph26 />
    </div>
  );
}

function Paragraph27() {
  return (
    <div className="h-[15px] relative shrink-0 w-full" data-name="Paragraph">
      <p className="absolute font-['Inter:Regular',sans-serif] font-normal leading-[15px] left-0 not-italic text-[10px] text-white top-[0.5px] tracking-[-0.13px] whitespace-nowrap">Начать</p>
    </div>
  );
}

function Container33() {
  return (
    <div className="bg-[#3b82f6] h-[35px] relative rounded-[6px] shrink-0 w-[66.094px]" data-name="Container">
      <div className="bg-clip-padding border-0 border-[transparent] border-solid content-stretch flex flex-col items-start pt-[10px] px-[16px] relative size-full">
        <Paragraph27 />
      </div>
    </div>
  );
}

function Paragraph28() {
  return (
    <div className="h-[24px] relative shrink-0 w-[15.273px]" data-name="Paragraph">
      <div className="bg-clip-padding border-0 border-[transparent] border-solid relative size-full">
        <p className="absolute font-['Inter:Regular',sans-serif] font-normal leading-[24px] left-0 not-italic text-[#364146] text-[16px] top-[-1px] whitespace-nowrap">→</p>
      </div>
    </div>
  );
}

function Paragraph29() {
  return (
    <div className="h-[24px] relative shrink-0 w-[13.547px]" data-name="Paragraph">
      <div className="bg-clip-padding border-0 border-[transparent] border-solid relative size-full">
        <p className="absolute font-['Inter:Regular',sans-serif] font-normal leading-[24px] left-0 not-italic text-[#0a0a0a] text-[16px] top-[-0.5px] tracking-[-0.3125px] whitespace-nowrap">✓</p>
      </div>
    </div>
  );
}

function Container35() {
  return (
    <div className="bg-[#22c55e] flex-[1_0_0] h-[30px] min-h-px min-w-px relative rounded-[6px]" data-name="Container">
      <div className="flex flex-row items-center justify-center size-full">
        <div className="bg-clip-padding border-0 border-[transparent] border-solid content-stretch flex items-center justify-center px-[8.227px] relative size-full">
          <Paragraph29 />
        </div>
      </div>
    </div>
  );
}

function Container34() {
  return (
    <div className="h-[30px] relative shrink-0 w-[51.273px]" data-name="Container">
      <div className="bg-clip-padding border-0 border-[transparent] border-solid content-stretch flex gap-[6px] items-center relative size-full">
        <Paragraph28 />
        <Container35 />
      </div>
    </div>
  );
}

function Container32() {
  return (
    <div className="content-stretch flex flex-col gap-[12px] h-[211px] items-center justify-center py-[67px] relative shrink-0 w-full" data-name="Container">
      <Container33 />
      <Container34 />
    </div>
  );
}

function Lesson4Quiz() {
  return (
    <div className="absolute bg-white content-stretch flex flex-col h-[231px] items-start left-0 overflow-clip pt-[10px] px-[10px] rounded-[14.99px] top-[1265px] w-[186px]" data-name="Lesson4Quiz4">
      <Container32 />
    </div>
  );
}

function Paragraph30() {
  return (
    <div className="h-[15px] relative shrink-0 w-[1280px]" data-name="Paragraph">
      <p className="absolute font-['Inter:Regular',sans-serif] font-normal leading-[15px] left-0 not-italic text-[#364146] text-[10px] top-[0.5px] tracking-[-0.13px] whitespace-nowrap">• Для отображения текста</p>
    </div>
  );
}

function Paragraph31() {
  return (
    <div className="h-[15px] relative shrink-0 w-[1280px]" data-name="Paragraph">
      <p className="absolute font-['Inter:Regular',sans-serif] font-normal leading-[15px] left-0 not-italic text-[#364146] text-[10px] top-[0.5px] tracking-[-0.13px] whitespace-nowrap">• Для ввода данных</p>
    </div>
  );
}

function Paragraph32() {
  return (
    <div className="flex-[1_0_0] min-h-px min-w-px relative w-[1280px]" data-name="Paragraph">
      <p className="absolute font-['Inter:Regular',sans-serif] font-normal leading-[15px] left-0 not-italic text-[#364146] text-[10px] top-[0.5px] tracking-[-0.13px] whitespace-nowrap">• Для декора</p>
    </div>
  );
}

function Container36() {
  return (
    <div className="absolute content-stretch flex flex-col gap-[8px] h-[61px] items-start left-0 top-[1906px] w-[1280px]" data-name="Container">
      <Paragraph30 />
      <Paragraph31 />
      <Paragraph32 />
    </div>
  );
}

function Paragraph33() {
  return (
    <div className="h-[10.5px] relative shrink-0 w-full" data-name="Paragraph">
      <p className="absolute font-['Inter:Regular',sans-serif] font-normal leading-[10.5px] left-0 not-italic text-[#101828] text-[7px] top-0 tracking-[-0.09px] whitespace-nowrap">user@example.com|</p>
    </div>
  );
}

function Container38() {
  return (
    <div className="bg-[#f7f8fc] h-[24.5px] relative rounded-[4px] shrink-0 w-[166px]" data-name="Container">
      <div aria-hidden="true" className="absolute border border-[#3b82f6] border-solid inset-0 pointer-events-none rounded-[4px]" />
      <div className="bg-clip-padding border-0 border-[transparent] border-solid content-stretch flex flex-col items-start pb-px pt-[7px] px-[9px] relative size-full">
        <Paragraph33 />
      </div>
    </div>
  );
}

function Paragraph34() {
  return (
    <div className="h-[9px] relative shrink-0 w-[166px]" data-name="Paragraph">
      <div className="bg-clip-padding border-0 border-[transparent] border-solid relative size-full">
        <p className="-translate-x-1/2 absolute font-['Inter:Regular',sans-serif] font-normal leading-[9px] left-[83.24px] not-italic text-[#8e9199] text-[6px] text-center top-[-0.5px] tracking-[-0.08px] whitespace-nowrap">↑ Ввод данных</p>
      </div>
    </div>
  );
}

function Container37() {
  return (
    <div className="content-stretch flex flex-col gap-[8px] h-[211px] items-start justify-center py-[84.75px] relative shrink-0 w-full" data-name="Container">
      <Container38 />
      <Paragraph34 />
    </div>
  );
}

function Lesson4Quiz1() {
  return (
    <div className="absolute bg-white content-stretch flex flex-col h-[231px] items-start left-0 overflow-clip pt-[10px] px-[10px] rounded-[14.99px] top-[1659px] w-[186px]" data-name="Lesson4Quiz5">
      <Container37 />
    </div>
  );
}

function Paragraph35() {
  return (
    <div className="h-[15px] relative shrink-0 w-[1280px]" data-name="Paragraph">
      <p className="absolute font-['Inter:Regular',sans-serif] font-normal leading-[15px] left-0 not-italic text-[#364146] text-[10px] top-[0.5px] tracking-[-0.13px] whitespace-nowrap">• Для перехода между экранами</p>
    </div>
  );
}

function Paragraph36() {
  return (
    <div className="h-[15px] relative shrink-0 w-[1280px]" data-name="Paragraph">
      <p className="absolute font-['Inter:Regular',sans-serif] font-normal leading-[15px] left-0 not-italic text-[#364146] text-[10px] top-[0.5px] tracking-[-0.13px] whitespace-nowrap">• Для цвета</p>
    </div>
  );
}

function Paragraph37() {
  return (
    <div className="flex-[1_0_0] min-h-px min-w-px relative w-[1280px]" data-name="Paragraph">
      <p className="absolute font-['Inter:Regular',sans-serif] font-normal leading-[15px] left-0 not-italic text-[#364146] text-[10px] top-[0.5px] tracking-[-0.13px] whitespace-nowrap">• Для анимации</p>
    </div>
  );
}

function Container39() {
  return (
    <div className="absolute content-stretch flex flex-col gap-[8px] h-[61px] items-start left-0 top-[2300px] w-[1280px]" data-name="Container">
      <Paragraph35 />
      <Paragraph36 />
      <Paragraph37 />
    </div>
  );
}

function Paragraph38() {
  return (
    <div className="h-[10.5px] relative shrink-0 w-full" data-name="Paragraph">
      <p className="absolute font-['Inter:Regular',sans-serif] font-normal leading-[10.5px] left-0 not-italic text-[#364146] text-[7px] top-0 tracking-[-0.09px] whitespace-nowrap">Главная</p>
    </div>
  );
}

function Container42() {
  return (
    <div className="bg-[#f7f8fc] h-[18.5px] relative rounded-[4px] shrink-0 w-[166px]" data-name="Container">
      <div className="bg-clip-padding border-0 border-[transparent] border-solid content-stretch flex flex-col items-start pt-[4px] px-[8px] relative size-full">
        <Paragraph38 />
      </div>
    </div>
  );
}

function Paragraph39() {
  return (
    <div className="h-[10.5px] relative shrink-0 w-full" data-name="Paragraph">
      <p className="absolute font-['Inter:Regular',sans-serif] font-normal leading-[10.5px] left-0 not-italic text-[#364146] text-[7px] top-0 tracking-[-0.09px] whitespace-nowrap">Настройки</p>
    </div>
  );
}

function Container43() {
  return (
    <div className="bg-[#f7f8fc] h-[18.5px] relative rounded-[4px] shrink-0 w-[166px]" data-name="Container">
      <div className="bg-clip-padding border-0 border-[transparent] border-solid content-stretch flex flex-col items-start pt-[4px] px-[8px] relative size-full">
        <Paragraph39 />
      </div>
    </div>
  );
}

function Paragraph40() {
  return (
    <div className="h-[10.5px] relative shrink-0 w-full" data-name="Paragraph">
      <p className="absolute font-['Inter:Regular',sans-serif] font-normal leading-[10.5px] left-0 not-italic text-[#364146] text-[7px] top-0 tracking-[-0.09px] whitespace-nowrap">Профиль</p>
    </div>
  );
}

function Container44() {
  return (
    <div className="bg-[#f7f8fc] flex-[1_0_0] min-h-px min-w-px relative rounded-[4px] w-[166px]" data-name="Container">
      <div className="bg-clip-padding border-0 border-[transparent] border-solid content-stretch flex flex-col items-start pt-[4px] px-[8px] relative size-full">
        <Paragraph40 />
      </div>
    </div>
  );
}

function Container41() {
  return (
    <div className="h-[63.5px] relative shrink-0 w-[166px]" data-name="Container">
      <div className="bg-clip-padding border-0 border-[transparent] border-solid content-stretch flex flex-col gap-[4px] items-start relative size-full">
        <Container42 />
        <Container43 />
        <Container44 />
      </div>
    </div>
  );
}

function Paragraph41() {
  return (
    <div className="h-[21px] relative shrink-0 w-[166px]" data-name="Paragraph">
      <div className="bg-clip-padding border-0 border-[transparent] border-solid relative size-full">
        <p className="-translate-x-1/2 absolute font-['Inter:Regular',sans-serif] font-normal leading-[21px] left-[83.31px] not-italic text-[#364146] text-[14px] text-center top-0 whitespace-nowrap">→</p>
      </div>
    </div>
  );
}

function Container40() {
  return (
    <div className="content-stretch flex flex-col gap-[8px] h-[211px] items-start justify-center py-[59.25px] relative shrink-0 w-full" data-name="Container">
      <Container41 />
      <Paragraph41 />
    </div>
  );
}

function Lesson4Quiz2() {
  return (
    <div className="absolute bg-white content-stretch flex flex-col h-[231px] items-start left-0 overflow-clip pt-[10px] px-[10px] rounded-[14.99px] top-[2053px] w-[186px]" data-name="Lesson4Quiz6">
      <Container40 />
    </div>
  );
}

function Paragraph42() {
  return (
    <div className="h-[15px] relative shrink-0 w-[1280px]" data-name="Paragraph">
      <p className="absolute font-['Inter:Regular',sans-serif] font-normal leading-[15px] left-0 not-italic text-[#364146] text-[10px] top-[0.5px] tracking-[-0.13px] whitespace-nowrap">• Кнопка</p>
    </div>
  );
}

function Paragraph43() {
  return (
    <div className="h-[15px] relative shrink-0 w-[1280px]" data-name="Paragraph">
      <p className="absolute font-['Inter:Regular',sans-serif] font-normal leading-[15px] left-0 not-italic text-[#364146] text-[10px] top-[0.5px] tracking-[-0.13px] whitespace-nowrap">• Ссылка</p>
    </div>
  );
}

function Paragraph44() {
  return (
    <div className="h-[15px] relative shrink-0 w-[1280px]" data-name="Paragraph">
      <p className="absolute font-['Inter:Regular',sans-serif] font-normal leading-[15px] left-0 not-italic text-[#364146] text-[10px] top-[0.5px] tracking-[-0.13px] whitespace-nowrap">• Заголовок</p>
    </div>
  );
}

function Paragraph45() {
  return (
    <div className="flex-[1_0_0] min-h-px min-w-px relative w-[1280px]" data-name="Paragraph">
      <p className="absolute font-['Inter:Regular',sans-serif] font-normal leading-[15px] left-0 not-italic text-[#364146] text-[10px] top-[0.5px] tracking-[-0.13px] whitespace-nowrap">• Toggle</p>
    </div>
  );
}

function Container45() {
  return (
    <div className="absolute content-stretch flex flex-col gap-[8px] h-[84px] items-start left-0 top-[2800px] w-[1280px]" data-name="Container">
      <Paragraph42 />
      <Paragraph43 />
      <Paragraph44 />
      <Paragraph45 />
    </div>
  );
}

function Paragraph46() {
  return (
    <div className="h-[12px] relative shrink-0 w-full" data-name="Paragraph">
      <p className="-translate-x-1/2 absolute font-['Inter:Regular',sans-serif] font-normal leading-[12px] left-[71.27px] not-italic text-[8px] text-center text-white top-0 tracking-[-0.1px] whitespace-nowrap">Кнопка</p>
    </div>
  );
}

function Container47() {
  return (
    <div className="bg-[#3b82f6] h-[24px] relative rounded-[6px] shrink-0 w-[166px]" data-name="Container">
      <div className="bg-clip-padding border-0 border-[transparent] border-solid content-stretch flex flex-col items-start pt-[6px] px-[12px] relative size-full">
        <Paragraph46 />
      </div>
    </div>
  );
}

function Paragraph47() {
  return (
    <div className="h-[10.5px] relative shrink-0 w-[166px]" data-name="Paragraph">
      <div className="bg-clip-padding border-0 border-[transparent] border-solid relative size-full">
        <p className="absolute decoration-solid font-['Inter:Regular',sans-serif] font-normal leading-[10.5px] left-0 not-italic text-[#3b82f6] text-[7px] top-0 tracking-[-0.09px] underline whitespace-nowrap">Ссылка на страницу</p>
      </div>
    </div>
  );
}

function Container50() {
  return <div className="bg-white rounded-[16777200px] shrink-0 size-[8px]" data-name="Container" />;
}

function Container49() {
  return (
    <div className="bg-[#3b82f6] h-[12px] relative rounded-[16777200px] shrink-0 w-[20px]" data-name="Container">
      <div className="bg-clip-padding border-0 border-[transparent] border-solid content-stretch flex items-center pl-[2px] relative size-full">
        <Container50 />
      </div>
    </div>
  );
}

function Paragraph48() {
  return (
    <div className="h-[9px] relative shrink-0 w-[28.914px]" data-name="Paragraph">
      <div className="bg-clip-padding border-0 border-[transparent] border-solid relative size-full">
        <p className="absolute font-['Inter:Regular',sans-serif] font-normal leading-[9px] left-0 not-italic text-[#364146] text-[6px] top-[-0.5px] tracking-[-0.08px] whitespace-nowrap">Включено</p>
      </div>
    </div>
  );
}

function Container48() {
  return (
    <div className="h-[12px] relative shrink-0 w-[166px]" data-name="Container">
      <div className="bg-clip-padding border-0 border-[transparent] border-solid content-stretch flex gap-[4px] items-center relative size-full">
        <Container49 />
        <Paragraph48 />
      </div>
    </div>
  );
}

function Container46() {
  return (
    <div className="content-stretch flex flex-col gap-[8px] h-[211px] items-start justify-center py-[74.25px] relative shrink-0 w-full" data-name="Container">
      <Container47 />
      <Paragraph47 />
      <Container48 />
    </div>
  );
}

function Lesson4Quiz3() {
  return (
    <div className="absolute bg-white content-stretch flex flex-col h-[231px] items-start left-0 overflow-clip pt-[10px] px-[10px] rounded-[14.99px] top-[2553px] w-[186px]" data-name="Lesson4Quiz7">
      <Container46 />
    </div>
  );
}

function Paragraph49() {
  return (
    <div className="h-[15px] relative shrink-0 w-[1280px]" data-name="Paragraph">
      <p className="absolute font-['Inter:Regular',sans-serif] font-normal leading-[15px] left-0 not-italic text-[#364146] text-[10px] top-[0.5px] tracking-[-0.13px] whitespace-nowrap">• Input поле</p>
    </div>
  );
}

function Paragraph50() {
  return (
    <div className="h-[15px] relative shrink-0 w-[1280px]" data-name="Paragraph">
      <p className="absolute font-['Inter:Regular',sans-serif] font-normal leading-[15px] left-0 not-italic text-[#364146] text-[10px] top-[0.5px] tracking-[-0.13px] whitespace-nowrap">• Checkbox</p>
    </div>
  );
}

function Paragraph51() {
  return (
    <div className="h-[15px] relative shrink-0 w-[1280px]" data-name="Paragraph">
      <p className="absolute font-['Inter:Regular',sans-serif] font-normal leading-[15px] left-0 not-italic text-[#364146] text-[10px] top-[0.5px] tracking-[-0.13px] whitespace-nowrap">• Radio button</p>
    </div>
  );
}

function Paragraph52() {
  return (
    <div className="flex-[1_0_0] min-h-px min-w-px relative w-[1280px]" data-name="Paragraph">
      <p className="absolute font-['Inter:Regular',sans-serif] font-normal leading-[15px] left-0 not-italic text-[#364146] text-[10px] top-[0.5px] tracking-[-0.13px] whitespace-nowrap">• Заголовок</p>
    </div>
  );
}

function Container51() {
  return (
    <div className="absolute content-stretch flex flex-col gap-[8px] h-[84px] items-start left-0 top-[3217px] w-[1280px]" data-name="Container">
      <Paragraph49 />
      <Paragraph50 />
      <Paragraph51 />
      <Paragraph52 />
    </div>
  );
}

function Paragraph53() {
  return (
    <div className="h-[9px] relative shrink-0 w-full" data-name="Paragraph">
      <p className="absolute font-['Inter:Regular',sans-serif] font-normal leading-[9px] left-0 not-italic text-[#8e9199] text-[6px] top-[-0.5px] tracking-[-0.08px] whitespace-nowrap">Введите текст</p>
    </div>
  );
}

function Container53() {
  return (
    <div className="bg-[#f7f8fc] h-[21px] relative rounded-[4px] shrink-0 w-[166px]" data-name="Container">
      <div aria-hidden="true" className="absolute border border-[#d1d3db] border-solid inset-0 pointer-events-none rounded-[4px]" />
      <div className="bg-clip-padding border-0 border-[transparent] border-solid content-stretch flex flex-col items-start pb-px pt-[6px] px-[9px] relative size-full">
        <Paragraph53 />
      </div>
    </div>
  );
}

function Paragraph54() {
  return (
    <div className="h-[12px] relative shrink-0 w-[7.047px]" data-name="Paragraph">
      <div className="bg-clip-padding border-0 border-[transparent] border-solid relative size-full">
        <p className="absolute font-['Inter:Regular',sans-serif] font-normal leading-[12px] left-0 not-italic text-[#3b82f6] text-[8px] top-0 whitespace-nowrap">✓</p>
      </div>
    </div>
  );
}

function Container55() {
  return (
    <div className="bg-white relative rounded-[3px] shrink-0 size-[12px]" data-name="Container">
      <div aria-hidden="true" className="absolute border border-[#d1d3db] border-solid inset-0 pointer-events-none rounded-[3px]" />
      <div className="bg-clip-padding border-0 border-[transparent] border-solid content-stretch flex items-center justify-center px-[2.477px] py-px relative size-full">
        <Paragraph54 />
      </div>
    </div>
  );
}

function Paragraph55() {
  return (
    <div className="h-[9px] relative shrink-0 w-[22.734px]" data-name="Paragraph">
      <div className="bg-clip-padding border-0 border-[transparent] border-solid relative size-full">
        <p className="absolute font-['Inter:Regular',sans-serif] font-normal leading-[9px] left-0 not-italic text-[#364146] text-[6px] top-[-0.5px] tracking-[-0.08px] whitespace-nowrap">Опция 1</p>
      </div>
    </div>
  );
}

function Container54() {
  return (
    <div className="h-[12px] relative shrink-0 w-[166px]" data-name="Container">
      <div className="bg-clip-padding border-0 border-[transparent] border-solid content-stretch flex gap-[4px] items-center relative size-full">
        <Container55 />
        <Paragraph55 />
      </div>
    </div>
  );
}

function Container58() {
  return <div className="bg-[#3b82f6] rounded-[16777200px] shrink-0 size-[6px]" data-name="Container" />;
}

function Container57() {
  return (
    <div className="bg-white relative rounded-[16777200px] shrink-0 size-[12px]" data-name="Container">
      <div aria-hidden="true" className="absolute border border-[#d1d3db] border-solid inset-0 pointer-events-none rounded-[16777200px]" />
      <div className="bg-clip-padding border-0 border-[transparent] border-solid content-stretch flex items-center justify-center px-[3px] py-px relative size-full">
        <Container58 />
      </div>
    </div>
  );
}

function Paragraph56() {
  return (
    <div className="h-[9px] relative shrink-0 w-[29.375px]" data-name="Paragraph">
      <div className="bg-clip-padding border-0 border-[transparent] border-solid relative size-full">
        <p className="absolute font-['Inter:Regular',sans-serif] font-normal leading-[9px] left-0 not-italic text-[#364146] text-[6px] top-[-0.5px] tracking-[-0.08px] whitespace-nowrap">Вариант A</p>
      </div>
    </div>
  );
}

function Container56() {
  return (
    <div className="h-[12px] relative shrink-0 w-[166px]" data-name="Container">
      <div className="bg-clip-padding border-0 border-[transparent] border-solid content-stretch flex gap-[4px] items-center relative size-full">
        <Container57 />
        <Paragraph56 />
      </div>
    </div>
  );
}

function Container52() {
  return (
    <div className="content-stretch flex flex-col gap-[8px] h-[211px] items-start justify-center py-[75px] relative shrink-0 w-full" data-name="Container">
      <Container53 />
      <Container54 />
      <Container56 />
    </div>
  );
}

function Lesson4Quiz4() {
  return (
    <div className="absolute bg-white content-stretch flex flex-col h-[231px] items-start left-0 overflow-clip pt-[10px] px-[10px] rounded-[14.99px] top-[2970px] w-[186px]" data-name="Lesson4Quiz8">
      <Container52 />
    </div>
  );
}

function Paragraph57() {
  return (
    <div className="h-[15px] relative shrink-0 w-[1280px]" data-name="Paragraph">
      <p className="absolute font-['Inter:Regular',sans-serif] font-normal leading-[15px] left-0 not-italic text-[#364146] text-[10px] top-[0.5px] tracking-[-0.13px] whitespace-nowrap">• Текст</p>
    </div>
  );
}

function Paragraph58() {
  return (
    <div className="h-[15px] relative shrink-0 w-[1280px]" data-name="Paragraph">
      <p className="absolute font-['Inter:Regular',sans-serif] font-normal leading-[15px] left-0 not-italic text-[#364146] text-[10px] top-[0.5px] tracking-[-0.13px] whitespace-nowrap">• Заголовок</p>
    </div>
  );
}

function Paragraph59() {
  return (
    <div className="h-[15px] relative shrink-0 w-[1280px]" data-name="Paragraph">
      <p className="absolute font-['Inter:Regular',sans-serif] font-normal leading-[15px] left-0 not-italic text-[#364146] text-[10px] top-[0.5px] tracking-[-0.13px] whitespace-nowrap">• Карточка</p>
    </div>
  );
}

function Paragraph60() {
  return (
    <div className="flex-[1_0_0] min-h-px min-w-px relative w-[1280px]" data-name="Paragraph">
      <p className="absolute font-['Inter:Regular',sans-serif] font-normal leading-[15px] left-0 not-italic text-[#364146] text-[10px] top-[0.5px] tracking-[-0.13px] whitespace-nowrap">• Кнопка</p>
    </div>
  );
}

function Container59() {
  return (
    <div className="absolute content-stretch flex flex-col gap-[8px] h-[84px] items-start left-0 top-[3634px] w-[1280px]" data-name="Container">
      <Paragraph57 />
      <Paragraph58 />
      <Paragraph59 />
      <Paragraph60 />
    </div>
  );
}

function Paragraph61() {
  return (
    <div className="h-[15px] relative shrink-0 w-[166px]" data-name="Paragraph">
      <div className="bg-clip-padding border-0 border-[transparent] border-solid relative size-full">
        <p className="absolute font-['Inter:Regular',sans-serif] font-normal leading-[15px] left-0 not-italic text-[#101828] text-[10px] top-[0.5px] tracking-[-0.13px] whitespace-nowrap">Заголовок раздела</p>
      </div>
    </div>
  );
}

function Paragraph62() {
  return (
    <div className="h-[9px] relative shrink-0 w-[166px]" data-name="Paragraph">
      <div className="bg-clip-padding border-0 border-[transparent] border-solid content-stretch flex items-start relative size-full">
        <p className="flex-[1_0_0] font-['Inter:Regular',sans-serif] font-normal leading-[9px] min-h-px min-w-px not-italic relative text-[#8e9199] text-[7px] tracking-[-0.09px]">Информация для пользователя о функционале</p>
      </div>
    </div>
  );
}

function Paragraph63() {
  return (
    <div className="content-stretch flex h-[9px] items-start relative shrink-0 w-full" data-name="Paragraph">
      <p className="flex-[1_0_0] font-['Inter:Regular',sans-serif] font-normal leading-[9px] min-h-px min-w-px not-italic relative text-[#364146] text-[7px] tracking-[-0.09px]">Описание в карточке</p>
    </div>
  );
}

function Container61() {
  return (
    <div className="bg-[#f7f8fc] h-[25px] relative rounded-[6px] shrink-0 w-[166px]" data-name="Container">
      <div className="bg-clip-padding border-0 border-[transparent] border-solid content-stretch flex flex-col items-start pt-[8px] px-[8px] relative size-full">
        <Paragraph63 />
      </div>
    </div>
  );
}

function Container60() {
  return (
    <div className="content-stretch flex flex-col gap-[8px] h-[211px] items-start justify-center py-[73px] relative shrink-0 w-full" data-name="Container">
      <Paragraph61 />
      <Paragraph62 />
      <Container61 />
    </div>
  );
}

function Lesson4Quiz5() {
  return (
    <div className="absolute bg-white content-stretch flex flex-col h-[231px] items-start left-0 overflow-clip pt-[10px] px-[10px] rounded-[14.99px] top-[3387px] w-[186px]" data-name="Lesson4Quiz9">
      <Container60 />
    </div>
  );
}

function Paragraph64() {
  return (
    <div className="h-[12px] relative shrink-0 w-full" data-name="Paragraph">
      <p className="absolute font-['Inter:Regular',sans-serif] font-normal leading-[12px] left-0 not-italic text-[#f7f8fc] text-[8px] top-0 tracking-[-0.1px] whitespace-nowrap">Начать</p>
    </div>
  );
}

function Container62() {
  return (
    <div className="bg-[#3b82f6] content-stretch flex flex-col h-[24px] items-start pt-[6px] px-[12px] relative rounded-[6px] shrink-0 w-[51.305px]" data-name="Container">
      <Paragraph64 />
    </div>
  );
}

function Lesson4Quiz10Card() {
  return (
    <div className="absolute bg-[rgba(255,255,255,0)] content-stretch flex h-[80px] items-center justify-center left-0 pl-[39.344px] pr-[39.352px] rounded-[8px] top-[3910px] w-[130px]" data-name="Lesson4Quiz10Card1">
      <Container62 />
    </div>
  );
}

function Paragraph65() {
  return (
    <div className="h-[9px] relative shrink-0 w-full" data-name="Paragraph">
      <p className="absolute font-['Inter:Regular',sans-serif] font-normal leading-[9px] left-0 not-italic text-[#8e9199] text-[6px] top-[-0.5px] tracking-[-0.08px] whitespace-nowrap">Текст</p>
    </div>
  );
}

function Container63() {
  return (
    <div className="bg-[#f7f8fc] content-stretch flex flex-col h-[21px] items-start pb-px pt-[6px] px-[9px] relative rounded-[4px] shrink-0 w-[80px]" data-name="Container">
      <div aria-hidden="true" className="absolute border border-[#d1d3db] border-solid inset-0 pointer-events-none rounded-[4px]" />
      <Paragraph65 />
    </div>
  );
}

function Lesson4Quiz10Card1() {
  return (
    <div className="absolute bg-[rgba(255,255,255,0)] content-stretch flex h-[80px] items-center justify-center left-[154px] px-[25px] rounded-[8px] top-[3910px] w-[130px]" data-name="Lesson4Quiz10Card2">
      <Container63 />
    </div>
  );
}

function Paragraph66() {
  return (
    <div className="content-stretch flex h-[10px] items-start relative shrink-0 w-[72.563px]" data-name="Paragraph">
      <p className="font-['Inter:Regular',sans-serif] font-normal leading-[10px] not-italic relative shrink-0 text-[#f7f8fc] text-[8px] text-center tracking-[-0.1px] whitespace-nowrap">Описание функции</p>
    </div>
  );
}

function Lesson4Quiz10Card2() {
  return (
    <div className="absolute bg-[rgba(255,255,255,0)] content-stretch flex h-[80px] items-center justify-center left-[308px] px-[28.719px] rounded-[8px] top-[3910px] w-[130px]" data-name="Lesson4Quiz10Card3">
      <Paragraph66 />
    </div>
  );
}

function Paragraph67() {
  return (
    <div className="absolute h-[15px] left-0 top-[4014px] w-[1280px]" data-name="Paragraph">
      <p className="absolute font-['Inter:Regular',sans-serif] font-normal leading-[15px] left-0 not-italic text-[#364146] text-[10px] top-[0.5px] tracking-[-0.13px] whitespace-nowrap">• Действие</p>
    </div>
  );
}

function Paragraph68() {
  return (
    <div className="absolute h-[15px] left-0 top-[4037px] w-[1280px]" data-name="Paragraph">
      <p className="absolute font-['Inter:Regular',sans-serif] font-normal leading-[15px] left-0 not-italic text-[#364146] text-[10px] top-[0.5px] tracking-[-0.13px] whitespace-nowrap">• Ввод данных</p>
    </div>
  );
}

function Paragraph69() {
  return (
    <div className="absolute h-[15px] left-0 top-[4060px] w-[1280px]" data-name="Paragraph">
      <p className="absolute font-['Inter:Regular',sans-serif] font-normal leading-[15px] left-0 not-italic text-[#364146] text-[10px] top-[0.5px] tracking-[-0.13px] whitespace-nowrap">• Информация</p>
    </div>
  );
}

function Paragraph70() {
  return (
    <div className="h-[15px] relative shrink-0 w-[8.813px]" data-name="Paragraph">
      <div className="bg-clip-padding border-0 border-[transparent] border-solid relative size-full">
        <p className="absolute font-['Inter:Semi_Bold',sans-serif] font-medium leading-[15px] left-0 not-italic text-[#d1d3db] text-[10px] top-[0.5px] whitespace-nowrap">✓</p>
      </div>
    </div>
  );
}

function Container65() {
  return (
    <div className="bg-[rgba(255,255,255,0)] flex-[1_0_0] h-[14px] min-h-px min-w-px relative rounded-[3px]" data-name="Container">
      <div aria-hidden="true" className="absolute border border-[#d1d3db] border-solid inset-0 pointer-events-none rounded-[3px]" />
      <div className="flex flex-row items-center justify-center size-full">
        <div className="bg-clip-padding border-0 border-[transparent] border-solid content-stretch flex items-center justify-center px-[2.594px] py-px relative size-full">
          <Paragraph70 />
        </div>
      </div>
    </div>
  );
}

function Container64() {
  return (
    <div className="content-stretch flex items-center relative shrink-0 size-[14px]" data-name="Container">
      <Container65 />
    </div>
  );
}

function Lesson4Quiz11Card() {
  return (
    <div className="absolute bg-[rgba(255,255,255,0)] content-stretch flex h-[80px] items-center justify-center left-0 px-[58px] rounded-[8px] top-[4161px] w-[130px]" data-name="Lesson4Quiz11Card1">
      <Container64 />
    </div>
  );
}

function Container67() {
  return <div className="bg-[#3b82f6] rounded-[16777200px] shrink-0 size-[8px]" data-name="Container" />;
}

function Container66() {
  return (
    <div className="bg-[rgba(255,255,255,0)] content-stretch flex items-center justify-center px-[3px] py-px relative rounded-[16777200px] shrink-0 size-[14px]" data-name="Container">
      <div aria-hidden="true" className="absolute border border-[#d1d3db] border-solid inset-0 pointer-events-none rounded-[16777200px]" />
      <Container67 />
    </div>
  );
}

function Lesson4Quiz11Card1() {
  return (
    <div className="absolute bg-[rgba(255,255,255,0)] content-stretch flex h-[80px] items-center justify-center left-[154px] px-[58px] rounded-[8px] top-[4161px] w-[130px]" data-name="Lesson4Quiz11Card2">
      <Container66 />
    </div>
  );
}

function Paragraph71() {
  return (
    <div className="flex-[1_0_0] h-[9px] min-h-px min-w-px relative" data-name="Paragraph">
      <div className="bg-clip-padding border-0 border-[transparent] border-solid relative size-full">
        <p className="absolute font-['Inter:Regular',sans-serif] font-normal leading-[9px] left-0 not-italic text-[#364146] text-[6px] top-[-0.5px] tracking-[-0.08px] whitespace-nowrap">Выбрать</p>
      </div>
    </div>
  );
}

function Paragraph72() {
  return (
    <div className="h-[12px] relative shrink-0 w-[6.352px]" data-name="Paragraph">
      <div className="bg-clip-padding border-0 border-[transparent] border-solid relative size-full">
        <p className="absolute font-['Inter:Regular',sans-serif] font-normal leading-[12px] left-0 not-italic text-[#0a0a0a] text-[8px] top-[0.5px] tracking-[0.2057px] whitespace-nowrap">▼</p>
      </div>
    </div>
  );
}

function Container68() {
  return (
    <div className="bg-[#f7f8fc] content-stretch flex gap-[4px] h-[22px] items-center px-[9px] py-px relative rounded-[4px] shrink-0 w-[53.047px]" data-name="Container">
      <div aria-hidden="true" className="absolute border border-[#d1d3db] border-solid inset-0 pointer-events-none rounded-[4px]" />
      <Paragraph71 />
      <Paragraph72 />
    </div>
  );
}

function Lesson4Quiz11Card2() {
  return (
    <div className="absolute bg-[rgba(255,255,255,0)] content-stretch flex h-[80px] items-center justify-center left-[308px] px-[38.477px] rounded-[8px] top-[4161px] w-[130px]" data-name="Lesson4Quiz11Card3">
      <Container68 />
    </div>
  );
}

function Paragraph73() {
  return (
    <div className="absolute h-[15px] left-0 top-[4265px] w-[1280px]" data-name="Paragraph">
      <p className="absolute font-['Inter:Regular',sans-serif] font-normal leading-[15px] left-0 not-italic text-[#364146] text-[10px] top-[0.5px] tracking-[-0.13px] whitespace-nowrap">• Выбор нескольких вариантов</p>
    </div>
  );
}

function Paragraph74() {
  return (
    <div className="absolute h-[15px] left-0 top-[4288px] w-[1280px]" data-name="Paragraph">
      <p className="absolute font-['Inter:Regular',sans-serif] font-normal leading-[15px] left-0 not-italic text-[#364146] text-[10px] top-[0.5px] tracking-[-0.13px] whitespace-nowrap">• Выбор одного варианта</p>
    </div>
  );
}

function Paragraph75() {
  return (
    <div className="absolute h-[15px] left-0 top-[4311px] w-[1280px]" data-name="Paragraph">
      <p className="absolute font-['Inter:Regular',sans-serif] font-normal leading-[15px] left-0 not-italic text-[#364146] text-[10px] top-[0.5px] tracking-[-0.13px] whitespace-nowrap">• Выбор из списка</p>
    </div>
  );
}

function Paragraph76() {
  return (
    <div className="h-[15px] relative shrink-0 w-full" data-name="Paragraph">
      <p className="absolute font-['Inter:Regular',sans-serif] font-normal leading-[15px] left-0 not-italic text-[10px] text-[rgba(255,255,255,0)] top-[0.5px] tracking-[-0.13px] whitespace-nowrap">?</p>
    </div>
  );
}

function Container69() {
  return (
    <div className="bg-[#3b82f6] content-stretch flex flex-col h-[25px] items-start pt-[5px] px-[10px] relative rounded-[6px] shrink-0 w-[24.945px]" data-name="Container">
      <Paragraph76 />
    </div>
  );
}

function Lesson4Quiz12Card() {
  return (
    <div className="absolute bg-[rgba(255,255,255,0)] content-stretch flex h-[80px] items-center justify-center left-0 pl-[52.523px] pr-[52.531px] rounded-[8px] top-[4412px] w-[130px]" data-name="Lesson4Quiz12Card1">
      <Container69 />
    </div>
  );
}

function Container70() {
  return (
    <div className="bg-[#f7f8fc] h-[10px] relative rounded-[4px] shrink-0 w-[70px]" data-name="Container">
      <div aria-hidden="true" className="absolute border border-[#d1d3db] border-solid inset-0 pointer-events-none rounded-[4px]" />
    </div>
  );
}

function Lesson4Quiz12Card1() {
  return (
    <div className="absolute bg-[rgba(255,255,255,0)] content-stretch flex h-[80px] items-center justify-center left-[154px] px-[30px] rounded-[8px] top-[4412px] w-[130px]" data-name="Lesson4Quiz12Card2">
      <Container70 />
    </div>
  );
}

function Paragraph77() {
  return (
    <div className="h-[9px] relative shrink-0 w-[20.453px]" data-name="Paragraph">
      <div className="bg-clip-padding border-0 border-[transparent] border-solid relative size-full">
        <p className="absolute font-['Inter:Regular',sans-serif] font-normal leading-[9px] left-0 not-italic text-[#dbdbdb] text-[6px] top-[-0.5px] tracking-[-0.08px] whitespace-nowrap">Раздел</p>
      </div>
    </div>
  );
}

function Paragraph78() {
  return (
    <div className="flex-[1_0_0] min-h-px min-w-px relative w-[20.453px]" data-name="Paragraph">
      <div className="bg-clip-padding border-0 border-[transparent] border-solid relative size-full">
        <p className="absolute font-['Inter:Regular',sans-serif] font-normal leading-[9px] left-0 not-italic text-[#dbdbdb] text-[6px] top-[-0.5px] tracking-[-0.08px] whitespace-nowrap">Раздел</p>
      </div>
    </div>
  );
}

function Container71() {
  return (
    <div className="content-stretch flex flex-col gap-[3px] h-[21px] items-start relative shrink-0 w-[20.453px]" data-name="Container">
      <Paragraph77 />
      <Paragraph78 />
    </div>
  );
}

function Lesson4Quiz12Card2() {
  return (
    <div className="absolute bg-[rgba(255,255,255,0)] content-stretch flex h-[80px] items-center justify-center left-[308px] px-[54.773px] rounded-[8px] top-[4412px] w-[130px]" data-name="Lesson4Quiz12Card3">
      <Container71 />
    </div>
  );
}

function Paragraph79() {
  return (
    <div className="absolute h-[15px] left-0 top-[4516px] w-[1280px]" data-name="Paragraph">
      <p className="absolute font-['Inter:Regular',sans-serif] font-normal leading-[15px] left-0 not-italic text-[#364146] text-[10px] top-[0.5px] tracking-[-0.13px] whitespace-nowrap">• Пользователь не понимает действие</p>
    </div>
  );
}

function Paragraph80() {
  return (
    <div className="absolute h-[15px] left-0 top-[4539px] w-[1280px]" data-name="Paragraph">
      <p className="absolute font-['Inter:Regular',sans-serif] font-normal leading-[15px] left-0 not-italic text-[#364146] text-[10px] top-[0.5px] tracking-[-0.13px] whitespace-nowrap">• Пользователь не понимает, что вводить</p>
    </div>
  );
}

function Paragraph81() {
  return (
    <div className="absolute h-[15px] left-0 top-[4562px] w-[1280px]" data-name="Paragraph">
      <p className="absolute font-['Inter:Regular',sans-serif] font-normal leading-[15px] left-0 not-italic text-[#364146] text-[10px] top-[0.5px] tracking-[-0.13px] whitespace-nowrap">• Пользователь не понимает, куда перейти</p>
    </div>
  );
}

// ─────────────────────────────────────────────────────────────────────────────
// Named exports for LessonQuizPage (quiz_interface_elements visuals)
// ─────────────────────────────────────────────────────────────────────────────
export function CQElemCompare1A() {
  return <div style={{ position: "relative", width: 207, height: 231 }}><Lesson4Quiz1VariantA /></div>;
}
export function CQElemCompare1B() {
  return <div style={{ position: "relative", width: 207, height: 231 }}><Lesson4Quiz1VariantB /></div>;
}
export function CQElemCompare2A() {
  return <div style={{ position: "relative", width: 207, height: 231 }}><Lesson4Quiz2VariantA /></div>;
}
export function CQElemCompare2B() {
  return <div style={{ position: "relative", width: 207, height: 231 }}><Lesson4Quiz2VariantB /></div>;
}
export function CQElemCompare3A() {
  return <div style={{ position: "relative", width: 207, height: 231 }}><Lesson4Quiz3VariantA /></div>;
}
export function CQElemCompare3B() {
  return <div style={{ position: "relative", width: 207, height: 231 }}><Lesson4Quiz3VariantB /></div>;
}
export function CQElemSingle1() {
  return <div style={{ position: "relative", background: "white", height: 231, width: 186, overflow: "hidden", paddingTop: 10, paddingLeft: 10, paddingRight: 10, borderRadius: 15 }}><Container32 /></div>;
}
export function CQElemSingle2() {
  return <div style={{ position: "relative", background: "white", height: 231, width: 186, overflow: "hidden", paddingTop: 10, paddingLeft: 10, paddingRight: 10, borderRadius: 15 }}><Container37 /></div>;
}
export function CQElemSingle3() {
  return <div style={{ position: "relative", background: "white", height: 231, width: 186, overflow: "hidden", paddingTop: 10, paddingLeft: 10, paddingRight: 10, borderRadius: 15 }}><Container40 /></div>;
}
export function CQElemMulti1() {
  return <div style={{ position: "relative", background: "white", height: 231, width: 186, overflow: "hidden", paddingTop: 10, paddingLeft: 10, paddingRight: 10, borderRadius: 15 }}><Container46 /></div>;
}
export function CQElemMulti2() {
  return <div style={{ position: "relative", background: "white", height: 231, width: 186, overflow: "hidden", paddingTop: 10, paddingLeft: 10, paddingRight: 10, borderRadius: 15 }}><Container52 /></div>;
}
export function CQElemMulti3() {
  return <div style={{ position: "relative", background: "white", height: 231, width: 186, overflow: "hidden", paddingTop: 10, paddingLeft: 10, paddingRight: 10, borderRadius: 15 }}><Container60 /></div>;
}
export function CQElemConn1A() { return <Lesson4Quiz10Card />; }
export function CQElemConn1B() { return <Lesson4Quiz10Card1 />; }
export function CQElemConn1C() { return <Lesson4Quiz10Card2 />; }
export function CQElemConn2A() { return <Lesson4Quiz11Card />; }
export function CQElemConn2B() { return <Lesson4Quiz11Card1 />; }
export function CQElemConn2C() { return <Lesson4Quiz11Card2 />; }
export function CQElemConn3A() { return <Lesson4Quiz12Card />; }
export function CQElemConn3B() { return <Lesson4Quiz12Card1 />; }
export function CQElemConn3C() { return <Lesson4Quiz12Card2 />; }

export default function Component() {
  return (
    <div className="relative size-full" data-name="Основные элементы интерфейса">
      <p className="absolute font-['Inter:Regular',sans-serif] font-normal leading-[17px] left-0 not-italic text-[#8e9199] text-[13px] top-[-0.5px] tracking-[-0.16px] whitespace-nowrap">Кнопки, поля ввода и навигация</p>
      <p className="absolute font-['Inter:Regular',sans-serif] font-normal leading-[27px] left-0 not-italic text-[#101828] text-[18px] top-[80.5px] tracking-[-0.4395px] whitespace-nowrap">Compare UI</p>
      <p className="absolute font-['Inter:Regular',sans-serif] font-normal leading-[15px] left-0 not-italic text-[#8e9199] text-[12px] top-[115px] tracking-[-0.15px] w-[1280px]">Сравните два варианта интерфейса</p>
      <p className="absolute font-['Inter:Regular',sans-serif] font-normal leading-[14px] left-0 not-italic text-[#8e9199] text-[11px] top-[170.5px] tracking-[-0.14px] whitespace-nowrap">1. Где элементы интерфейса используются правильно?</p>
      <Container />
      <Container5 />
      <p className="absolute font-['Inter:Regular',sans-serif] font-normal leading-[14px] left-0 not-italic text-[#8e9199] text-[11px] top-[487.5px] tracking-[-0.14px] whitespace-nowrap">2. Где лучше организованы действия?</p>
      <Container11 />
      <Container16 />
      <p className="absolute font-['Inter:Regular',sans-serif] font-normal leading-[14px] left-0 not-italic text-[#8e9199] text-[11px] top-[804.5px] tracking-[-0.14px] whitespace-nowrap">3. Где ввод данных реализован удобнее?</p>
      <Container20 />
      <Container25 />
      <p className="absolute font-['Inter:Regular',sans-serif] font-normal leading-[27px] left-0 not-italic text-[#101828] text-[18px] top-[1137.5px] tracking-[-0.4395px] whitespace-nowrap">Single Choice</p>
      <p className="absolute font-['Inter:Regular',sans-serif] font-normal leading-[15px] left-0 not-italic text-[#8e9199] text-[12px] top-[1172px] tracking-[-0.15px] w-[1280px]">Выберите один правильный ответ</p>
      <p className="absolute font-['Inter:Regular',sans-serif] font-normal leading-[14px] left-0 not-italic text-[#8e9199] text-[11px] top-[1227.5px] tracking-[-0.14px] whitespace-nowrap">4. Для чего нужна кнопка?</p>
      <Container31 />
      <Lesson4Quiz />
      <p className="absolute font-['Inter:Regular',sans-serif] font-normal leading-[14px] left-0 not-italic text-[#8e9199] text-[11px] top-[1621.5px] tracking-[-0.14px] whitespace-nowrap">5. Для чего нужны поля ввода?</p>
      <Container36 />
      <Lesson4Quiz1 />
      <p className="absolute font-['Inter:Regular',sans-serif] font-normal leading-[14px] left-0 not-italic text-[#8e9199] text-[11px] top-[2015.5px] tracking-[-0.14px] whitespace-nowrap">6. Для чего нужна навигация?</p>
      <Container39 />
      <Lesson4Quiz2 />
      <p className="absolute font-['Inter:Regular',sans-serif] font-normal leading-[27px] left-0 not-italic text-[#101828] text-[18px] top-[2425.5px] tracking-[-0.4395px] whitespace-nowrap">Multi Choice</p>
      <p className="absolute font-['Inter:Regular',sans-serif] font-normal leading-[15px] left-0 not-italic text-[#8e9199] text-[12px] top-[2460px] tracking-[-0.15px] w-[1280px]">Выберите несколько правильных ответов</p>
      <p className="absolute font-['Inter:Regular',sans-serif] font-normal leading-[14px] left-0 not-italic text-[#8e9199] text-[11px] top-[2515.5px] tracking-[-0.14px] whitespace-nowrap">7. Какие элементы относятся к действиям?</p>
      <Container45 />
      <Lesson4Quiz3 />
      <p className="absolute font-['Inter:Regular',sans-serif] font-normal leading-[14px] left-0 not-italic text-[#8e9199] text-[11px] top-[2932.5px] tracking-[-0.14px] whitespace-nowrap">8. Какие элементы используются для ввода?</p>
      <Container51 />
      <Lesson4Quiz4 />
      <p className="absolute font-['Inter:Regular',sans-serif] font-normal leading-[14px] left-0 not-italic text-[#8e9199] text-[11px] top-[3349.5px] tracking-[-0.14px] whitespace-nowrap">9. Какие элементы дают информацию?</p>
      <Container59 />
      <Lesson4Quiz5 />
      <p className="absolute font-['Inter:Regular',sans-serif] font-normal leading-[27px] left-0 not-italic text-[#101828] text-[18px] top-[3782.5px] tracking-[-0.4395px] whitespace-nowrap">Match / Connect</p>
      <p className="absolute font-['Inter:Regular',sans-serif] font-normal leading-[15px] left-0 not-italic text-[#8e9199] text-[12px] top-[3817px] tracking-[-0.15px] w-[1280px]">Соедините элементы с описаниями</p>
      <p className="absolute font-['Inter:Regular',sans-serif] font-normal leading-[14px] left-0 not-italic text-[#8e9199] text-[11px] top-[3872.5px] tracking-[-0.14px] whitespace-nowrap">10. Соедините элемент и его тип</p>
      <Lesson4Quiz10Card />
      <Lesson4Quiz10Card1 />
      <Lesson4Quiz10Card2 />
      <Paragraph67 />
      <Paragraph68 />
      <Paragraph69 />
      <p className="absolute font-['Inter:Regular',sans-serif] font-normal leading-[14px] left-0 not-italic text-[#8e9199] text-[11px] top-[4123.5px] tracking-[-0.14px] whitespace-nowrap">11. Соедините элемент и функцию</p>
      <Lesson4Quiz11Card />
      <Lesson4Quiz11Card1 />
      <Lesson4Quiz11Card2 />
      <Paragraph73 />
      <Paragraph74 />
      <Paragraph75 />
      <p className="absolute font-['Inter:Regular',sans-serif] font-normal leading-[14px] left-0 not-italic text-[#8e9199] text-[11px] top-[4374.5px] tracking-[-0.14px] whitespace-nowrap">12. Соедините проблему и эффект</p>
      <Lesson4Quiz12Card />
      <Lesson4Quiz12Card1 />
      <Lesson4Quiz12Card2 />
      <Paragraph79 />
      <Paragraph80 />
      <Paragraph81 />
    </div>
  );
}