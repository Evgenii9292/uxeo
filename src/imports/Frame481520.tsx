function Paragraph() {
  return (
    <div className="absolute h-[14px] left-0 top-0 w-[166px]" data-name="Paragraph">
      <p className="-translate-x-1/2 absolute font-['Inter:Regular',sans-serif] font-normal leading-[14px] left-[83.35px] not-italic text-[#101828] text-[12px] text-center top-[0.5px] tracking-[-0.15px] whitespace-nowrap">Управление задачами</p>
    </div>
  );
}

function Paragraph1() {
  return (
    <div className="h-[10.5px] relative shrink-0 w-[27.734px]" data-name="Paragraph">
      <div className="bg-clip-padding border-0 border-[transparent] border-solid relative size-full">
        <p className="absolute font-['Inter:Regular',sans-serif] font-normal leading-[10.5px] left-0 not-italic text-[7px] text-white top-0 tracking-[-0.09px] whitespace-nowrap">Создать</p>
      </div>
    </div>
  );
}

function Container2() {
  return (
    <div className="bg-[#4a90ff] flex-[1_0_0] h-[28px] min-h-px min-w-px relative rounded-[6px]" data-name="Container">
      <div className="bg-clip-padding border-0 border-[transparent] border-solid content-stretch flex items-center justify-center relative size-full">
        <Paragraph1 />
      </div>
    </div>
  );
}

function Paragraph2() {
  return (
    <div className="h-[10.5px] relative shrink-0 w-[35.867px]" data-name="Paragraph">
      <div className="bg-clip-padding border-0 border-[transparent] border-solid relative size-full">
        <p className="absolute font-['Inter:Regular',sans-serif] font-normal leading-[10.5px] left-0 not-italic text-[7px] text-white top-0 tracking-[-0.09px] whitespace-nowrap">Сохранить</p>
      </div>
    </div>
  );
}

function Container3() {
  return (
    <div className="bg-[#22c55e] flex-[1_0_0] h-[28px] min-h-px min-w-px relative rounded-[6px]" data-name="Container">
      <div className="flex flex-row items-center justify-center size-full">
        <div className="bg-clip-padding border-0 border-[transparent] border-solid content-stretch flex items-center justify-center pr-[0.008px] relative size-full">
          <Paragraph2 />
        </div>
      </div>
    </div>
  );
}

function Container1() {
  return (
    <div className="absolute content-stretch flex gap-[6px] h-[28px] items-start left-0 top-[20px] w-[166px]" data-name="Container">
      <Container2 />
      <Container3 />
    </div>
  );
}

function Paragraph3() {
  return (
    <div className="h-[13.5px] relative shrink-0 w-[35.391px]" data-name="Paragraph">
      <div className="bg-clip-padding border-0 border-[transparent] border-solid relative size-full">
        <p className="absolute font-['Inter:Regular',sans-serif] font-normal leading-[13.5px] left-0 not-italic text-[9px] text-white top-[0.5px] tracking-[-0.12px] whitespace-nowrap">Экспорт</p>
      </div>
    </div>
  );
}

function Container4() {
  return (
    <div className="absolute bg-[#f59e0b] content-stretch flex h-[32px] items-center justify-center left-0 rounded-[9.031px] top-[54px] w-[166px]" data-name="Container">
      <Paragraph3 />
    </div>
  );
}

function Paragraph4() {
  return (
    <div className="h-[13.5px] relative shrink-0 w-[46.813px]" data-name="Paragraph">
      <div className="bg-clip-padding border-0 border-[transparent] border-solid relative size-full">
        <p className="absolute font-['Inter:Regular',sans-serif] font-normal leading-[13.5px] left-0 not-italic text-[9px] text-white top-[0.5px] tracking-[-0.12px] whitespace-nowrap">Настройки</p>
      </div>
    </div>
  );
}

function Container5() {
  return (
    <div className="absolute bg-[#8b5cf6] content-stretch flex h-[32px] items-center justify-center left-0 rounded-[9.031px] top-[92px] w-[166px]" data-name="Container">
      <Paragraph4 />
    </div>
  );
}

function Paragraph5() {
  return (
    <div className="h-[13.5px] relative shrink-0 w-[51.68px]" data-name="Paragraph">
      <div className="bg-clip-padding border-0 border-[transparent] border-solid relative size-full">
        <p className="absolute font-['Inter:Regular',sans-serif] font-normal leading-[13.5px] left-0 not-italic text-[9px] text-white top-[0.5px] tracking-[-0.12px] whitespace-nowrap">Поделиться</p>
      </div>
    </div>
  );
}

function Container6() {
  return (
    <div className="absolute bg-[#ec4899] content-stretch flex h-[32px] items-center justify-center left-0 pr-[0.008px] rounded-[9.031px] top-[130px] w-[166px]" data-name="Container">
      <Paragraph5 />
    </div>
  );
}

function Paragraph6() {
  return (
    <div className="absolute h-[10.5px] left-0 top-[200.5px] w-[166px]" data-name="Paragraph">
      <p className="-translate-x-1/2 absolute font-['Inter:Regular',sans-serif] font-normal leading-[10.5px] left-[83.3px] not-italic text-[#06b6d4] text-[7px] text-center top-0 tracking-[-0.09px] whitespace-nowrap">Справка</p>
    </div>
  );
}

function Container() {
  return (
    <div className="h-[211px] relative shrink-0 w-full" data-name="Container">
      <Paragraph />
      <Container1 />
      <Container4 />
      <Container5 />
      <Container6 />
      <Paragraph6 />
    </div>
  );
}

function ContrastQuiz6VariantA() {
  return (
    <div className="bg-[#f7f8fc] content-stretch flex flex-col h-[231px] items-start pt-[10px] px-[10px] relative rounded-[14.99px] shrink-0 w-[186px]" data-name="ContrastQuiz6VariantA">
      <Container />
    </div>
  );
}

function Paragraph7() {
  return (
    <div className="absolute h-[14px] left-0 top-0 w-[166px]" data-name="Paragraph">
      <p className="-translate-x-1/2 absolute font-['Inter:Regular',sans-serif] font-normal leading-[14px] left-[83.35px] not-italic text-[#101828] text-[12px] text-center top-[0.5px] tracking-[-0.15px] whitespace-nowrap">Управление задачами</p>
    </div>
  );
}

function Paragraph8() {
  return (
    <div className="h-[10.5px] relative shrink-0 w-[27.734px]" data-name="Paragraph">
      <div className="bg-clip-padding border-0 border-[transparent] border-solid relative size-full">
        <p className="absolute font-['Inter:Regular',sans-serif] font-normal leading-[10.5px] left-0 not-italic text-[#5e6169] text-[7px] top-0 tracking-[-0.09px] whitespace-nowrap">Создать</p>
      </div>
    </div>
  );
}

function Container9() {
  return (
    <div className="bg-[#e1e3eb] flex-[1_0_0] h-[26px] min-h-px min-w-px relative rounded-[6px]" data-name="Container">
      <div className="bg-clip-padding border-0 border-[transparent] border-solid content-stretch flex items-center justify-center relative size-full">
        <Paragraph8 />
      </div>
    </div>
  );
}

function Paragraph9() {
  return (
    <div className="h-[10.5px] relative shrink-0 w-[35.867px]" data-name="Paragraph">
      <div className="bg-clip-padding border-0 border-[transparent] border-solid relative size-full">
        <p className="absolute font-['Inter:Regular',sans-serif] font-normal leading-[10.5px] left-0 not-italic text-[#5e6169] text-[7px] top-0 tracking-[-0.09px] whitespace-nowrap">Сохранить</p>
      </div>
    </div>
  );
}

function Container10() {
  return (
    <div className="bg-[#e1e3eb] flex-[1_0_0] h-[26px] min-h-px min-w-px relative rounded-[6px]" data-name="Container">
      <div className="flex flex-row items-center justify-center size-full">
        <div className="bg-clip-padding border-0 border-[transparent] border-solid content-stretch flex items-center justify-center pr-[0.008px] relative size-full">
          <Paragraph9 />
        </div>
      </div>
    </div>
  );
}

function Container8() {
  return (
    <div className="absolute content-stretch flex gap-[6px] h-[26px] items-start left-0 top-[22px] w-[166px]" data-name="Container">
      <Container9 />
      <Container10 />
    </div>
  );
}

function Paragraph10() {
  return (
    <div className="h-[15px] relative shrink-0 w-[39.352px]" data-name="Paragraph">
      <div className="bg-clip-padding border-0 border-[transparent] border-solid relative size-full">
        <p className="absolute font-['Inter:Regular',sans-serif] font-normal leading-[15px] left-0 not-italic text-[10px] text-white top-[0.5px] tracking-[-0.13px] whitespace-nowrap">Экспорт</p>
      </div>
    </div>
  );
}

function Container11() {
  return (
    <div className="absolute bg-[#364146] content-stretch flex h-[38px] items-center justify-center left-0 pr-[0.008px] rounded-[9.031px] top-[154px] w-[166px]" data-name="Container">
      <Paragraph10 />
    </div>
  );
}

function Paragraph11() {
  return (
    <div className="h-[12px] relative shrink-0 w-[41.672px]" data-name="Paragraph">
      <div className="bg-clip-padding border-0 border-[transparent] border-solid relative size-full">
        <p className="absolute font-['Inter:Regular',sans-serif] font-normal leading-[12px] left-0 not-italic text-[#5e6169] text-[8px] top-0 tracking-[-0.1px] whitespace-nowrap">Настройки</p>
      </div>
    </div>
  );
}

function Container12() {
  return (
    <div className="absolute bg-[#e1e3eb] content-stretch flex h-[28px] items-center justify-center left-0 rounded-[9.031px] top-[56px] w-[166px]" data-name="Container">
      <Paragraph11 />
    </div>
  );
}

function Paragraph12() {
  return (
    <div className="h-[12px] relative shrink-0 w-[46px]" data-name="Paragraph">
      <div className="bg-clip-padding border-0 border-[transparent] border-solid relative size-full">
        <p className="absolute font-['Inter:Regular',sans-serif] font-normal leading-[12px] left-0 not-italic text-[#5e6169] text-[8px] top-0 tracking-[-0.1px] whitespace-nowrap">Поделиться</p>
      </div>
    </div>
  );
}

function Container13() {
  return (
    <div className="absolute bg-[#e1e3eb] content-stretch flex h-[28px] items-center justify-center left-0 rounded-[9.031px] top-[92px] w-[166px]" data-name="Container">
      <Paragraph12 />
    </div>
  );
}

function Paragraph13() {
  return (
    <div className="absolute h-[10.5px] left-0 top-[200.5px] w-[166px]" data-name="Paragraph">
      <p className="-translate-x-1/2 absolute font-['Inter:Regular',sans-serif] font-normal leading-[10.5px] left-[83.3px] not-italic text-[#4a90ff] text-[7px] text-center top-0 tracking-[-0.09px] whitespace-nowrap">Справка</p>
    </div>
  );
}

function Container7() {
  return (
    <div className="h-[211px] relative shrink-0 w-full" data-name="Container">
      <Paragraph7 />
      <Container8 />
      <Container11 />
      <Container12 />
      <Container13 />
      <Paragraph13 />
    </div>
  );
}

function ContrastQuiz6VariantB() {
  return (
    <div className="bg-[#f7f8fc] content-stretch flex flex-col h-[231px] items-start pt-[10px] px-[10px] relative rounded-[14.99px] shrink-0 w-[186px]" data-name="ContrastQuiz6VariantB">
      <Container7 />
    </div>
  );
}

export default function Frame() {
  return (
    <div className="content-stretch flex gap-[61px] items-center relative size-full">
      <ContrastQuiz6VariantA />
      <ContrastQuiz6VariantB />
    </div>
  );
}