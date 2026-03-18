function Paragraph() {
  return (
    <div className="absolute h-[10.5px] left-0 top-[0.75px] w-[27.352px]" data-name="Paragraph">
      <p className="absolute decoration-solid font-['Inter:Regular',sans-serif] font-normal leading-[10.5px] left-0 not-italic text-[#8e9199] text-[7px] top-0 tracking-[-0.09px] underline whitespace-nowrap">Главная</p>
    </div>
  );
}

function Paragraph1() {
  return (
    <div className="absolute h-[10.5px] left-[31.35px] top-[0.75px] w-[2.422px]" data-name="Paragraph">
      <p className="absolute font-['Inter:Regular',sans-serif] font-normal leading-[10.5px] left-0 not-italic text-[#d1d3db] text-[7px] top-0 tracking-[-0.09px] whitespace-nowrap">›</p>
    </div>
  );
}

function Paragraph2() {
  return (
    <div className="absolute h-[10.5px] left-[37.77px] top-[0.75px] w-[29.688px]" data-name="Paragraph">
      <p className="absolute decoration-solid font-['Inter:Regular',sans-serif] font-normal leading-[10.5px] left-0 not-italic text-[#8e9199] text-[7px] top-0 tracking-[-0.09px] underline whitespace-nowrap">Проекты</p>
    </div>
  );
}

function Paragraph3() {
  return (
    <div className="absolute h-[10.5px] left-[71.46px] top-[0.75px] w-[2.422px]" data-name="Paragraph">
      <p className="absolute font-['Inter:Regular',sans-serif] font-normal leading-[10.5px] left-0 not-italic text-[#d1d3db] text-[7px] top-0 tracking-[-0.09px] whitespace-nowrap">›</p>
    </div>
  );
}

function Paragraph4() {
  return (
    <div className="absolute h-[10.5px] left-[77.88px] top-[0.75px] w-[24.563px]" data-name="Paragraph">
      <p className="absolute decoration-solid font-['Inter:Regular',sans-serif] font-normal leading-[10.5px] left-0 not-italic text-[#8e9199] text-[7px] top-0 tracking-[-0.09px] underline whitespace-nowrap">Дизайн</p>
    </div>
  );
}

function Paragraph5() {
  return (
    <div className="absolute h-[10.5px] left-[106.45px] top-[0.75px] w-[2.422px]" data-name="Paragraph">
      <p className="absolute font-['Inter:Regular',sans-serif] font-normal leading-[10.5px] left-0 not-italic text-[#d1d3db] text-[7px] top-0 tracking-[-0.09px] whitespace-nowrap">›</p>
    </div>
  );
}

function Paragraph6() {
  return (
    <div className="absolute h-[12px] left-[112.87px] top-0 w-[47.969px]" data-name="Paragraph">
      <p className="absolute font-['Inter:Regular',sans-serif] font-normal leading-[12px] left-0 not-italic text-[#101828] text-[8px] top-0 tracking-[-0.1px] whitespace-nowrap">Компоненты</p>
    </div>
  );
}

function Container1() {
  return (
    <div className="absolute h-[12px] left-0 top-0 w-[166px]" data-name="Container">
      <Paragraph />
      <Paragraph1 />
      <Paragraph2 />
      <Paragraph3 />
      <Paragraph4 />
      <Paragraph5 />
      <Paragraph6 />
    </div>
  );
}

function Paragraph7() {
  return (
    <div className="h-[32px] relative shrink-0 w-[122px]" data-name="Paragraph">
      <div className="bg-clip-padding border-0 border-[transparent] border-solid relative size-full">
        <p className="absolute font-['Inter:Regular',sans-serif] font-normal leading-[16px] left-0 not-italic text-[#101828] text-[14px] top-0 tracking-[-0.18px] w-[122px]">Компоненты кнопок</p>
      </div>
    </div>
  );
}

function Paragraph8() {
  return (
    <div className="h-[15px] relative shrink-0 w-[9.422px]" data-name="Paragraph">
      <div className="bg-clip-padding border-0 border-[transparent] border-solid relative size-full">
        <p className="absolute font-['Inter:Regular',sans-serif] font-normal leading-[15px] left-0 not-italic text-[#8e9199] text-[10px] top-[0.5px] tracking-[-0.13px] whitespace-nowrap">↑</p>
      </div>
    </div>
  );
}

function Container4() {
  return (
    <div className="bg-[#f7f8fc] relative rounded-[5px] shrink-0 size-[20px]" data-name="Container">
      <div className="bg-clip-padding border-0 border-[transparent] border-solid content-stretch flex items-center justify-center relative size-full">
        <Paragraph8 />
      </div>
    </div>
  );
}

function Paragraph9() {
  return (
    <div className="h-[15px] relative shrink-0 w-[6.461px]" data-name="Paragraph">
      <div className="bg-clip-padding border-0 border-[transparent] border-solid relative size-full">
        <p className="absolute font-['Inter:Regular',sans-serif] font-normal leading-[15px] left-0 not-italic text-[10px] text-white top-[-0.5px] tracking-[-0.13px] whitespace-nowrap">+</p>
      </div>
    </div>
  );
}

function Container5() {
  return (
    <div className="bg-[#364146] flex-[1_0_0] h-[20px] min-h-px min-w-px relative rounded-[5px]" data-name="Container">
      <div className="flex flex-row items-center justify-center size-full">
        <div className="bg-clip-padding border-0 border-[transparent] border-solid content-stretch flex items-center justify-center pr-[0.008px] relative size-full">
          <Paragraph9 />
        </div>
      </div>
    </div>
  );
}

function Container3() {
  return (
    <div className="h-[20px] relative shrink-0 w-[44px]" data-name="Container">
      <div className="bg-clip-padding border-0 border-[transparent] border-solid content-stretch flex gap-[4px] items-start relative size-full">
        <Container4 />
        <Container5 />
      </div>
    </div>
  );
}

function Container2() {
  return (
    <div className="absolute content-stretch flex h-[32px] items-center justify-between left-0 top-[22px] w-[166px]" data-name="Container">
      <Paragraph7 />
      <Container3 />
    </div>
  );
}

function Paragraph10() {
  return (
    <div className="content-stretch flex h-[11px] items-start relative shrink-0 w-full" data-name="Paragraph">
      <p className="flex-[1_0_0] font-['Inter:Regular',sans-serif] font-normal leading-[11px] min-h-px min-w-px not-italic relative text-[#101828] text-[9px] tracking-[-0.12px]">Primary Button</p>
    </div>
  );
}

function Paragraph11() {
  return (
    <div className="h-[9px] relative shrink-0 w-full" data-name="Paragraph">
      <p className="absolute font-['Inter:Regular',sans-serif] font-normal leading-[9px] left-0 not-italic text-[#8e9199] text-[6px] top-[-0.5px] tracking-[-0.08px] whitespace-nowrap">Основная кнопка действия</p>
    </div>
  );
}

function Container7() {
  return (
    <div className="bg-[#f7f8fc] flex-[1_0_0] min-h-px min-w-px relative rounded-[9.031px] w-[166px]" data-name="Container">
      <div aria-hidden="true" className="absolute border-[#364146] border-l-3 border-solid inset-0 pointer-events-none rounded-[9.031px]" />
      <div className="bg-clip-padding border-0 border-[transparent] border-solid content-stretch flex flex-col gap-[2px] items-start pl-[13px] pr-[10px] pt-[8px] relative size-full">
        <Paragraph10 />
        <Paragraph11 />
      </div>
    </div>
  );
}

function Paragraph12() {
  return (
    <div className="content-stretch flex h-[10px] items-start relative shrink-0 w-full" data-name="Paragraph">
      <p className="flex-[1_0_0] font-['Inter:Regular',sans-serif] font-normal leading-[10px] min-h-px min-w-px not-italic relative text-[#5e6169] text-[8px] tracking-[-0.1px]">Secondary Button</p>
    </div>
  );
}

function Paragraph13() {
  return (
    <div className="h-[9px] relative shrink-0 w-full" data-name="Paragraph">
      <p className="absolute font-['Inter:Regular',sans-serif] font-normal leading-[9px] left-0 not-italic text-[#8e9199] text-[6px] top-[-0.5px] tracking-[-0.08px] whitespace-nowrap">Вторичная кнопка</p>
    </div>
  );
}

function Container8() {
  return (
    <div className="bg-[#f7f8fc] h-[38px] relative rounded-[9.031px] shrink-0 w-[166px]" data-name="Container">
      <div className="bg-clip-padding border-0 border-[transparent] border-solid content-stretch flex flex-col gap-[2px] items-start pt-[8px] px-[10px] relative size-full">
        <Paragraph12 />
        <Paragraph13 />
      </div>
    </div>
  );
}

function Paragraph14() {
  return (
    <div className="content-stretch flex h-[10px] items-start relative shrink-0 w-full" data-name="Paragraph">
      <p className="flex-[1_0_0] font-['Inter:Regular',sans-serif] font-normal leading-[10px] min-h-px min-w-px not-italic relative text-[#5e6169] text-[8px] tracking-[-0.1px]">Icon Button</p>
    </div>
  );
}

function Paragraph15() {
  return (
    <div className="h-[9px] relative shrink-0 w-full" data-name="Paragraph">
      <p className="absolute font-['Inter:Regular',sans-serif] font-normal leading-[9px] left-0 not-italic text-[#8e9199] text-[6px] top-[-0.5px] tracking-[-0.08px] whitespace-nowrap">Кнопка с иконкой</p>
    </div>
  );
}

function Container9() {
  return (
    <div className="bg-[#f7f8fc] h-[38px] relative rounded-[9.031px] shrink-0 w-[166px]" data-name="Container">
      <div className="bg-clip-padding border-0 border-[transparent] border-solid content-stretch flex flex-col gap-[2px] items-start pt-[8px] px-[10px] relative size-full">
        <Paragraph14 />
        <Paragraph15 />
      </div>
    </div>
  );
}

function Paragraph16() {
  return (
    <div className="content-stretch flex h-[10px] items-start relative shrink-0 w-full" data-name="Paragraph">
      <p className="flex-[1_0_0] font-['Inter:Regular',sans-serif] font-normal leading-[10px] min-h-px min-w-px not-italic relative text-[#5e6169] text-[8px] tracking-[-0.1px]">Ghost Button</p>
    </div>
  );
}

function Paragraph17() {
  return (
    <div className="h-[9px] relative shrink-0 w-full" data-name="Paragraph">
      <p className="absolute font-['Inter:Regular',sans-serif] font-normal leading-[9px] left-0 not-italic text-[#8e9199] text-[6px] top-[-0.5px] tracking-[-0.08px] whitespace-nowrap">Прозрачная кнопка</p>
    </div>
  );
}

function Container10() {
  return (
    <div className="bg-[#f7f8fc] h-[38px] relative rounded-[9.031px] shrink-0 w-[166px]" data-name="Container">
      <div className="bg-clip-padding border-0 border-[transparent] border-solid content-stretch flex flex-col gap-[2px] items-start pt-[8px] px-[10px] relative size-full">
        <Paragraph16 />
        <Paragraph17 />
      </div>
    </div>
  );
}

function Container6() {
  return (
    <div className="absolute content-stretch flex flex-col gap-[6px] h-[172px] items-start left-0 top-[62px] w-[166px]" data-name="Container">
      <Container7 />
      <Container8 />
      <Container9 />
      <Container10 />
    </div>
  );
}

function Container() {
  return (
    <div className="h-[211px] relative shrink-0 w-full" data-name="Container">
      <Container1 />
      <Container2 />
      <Container6 />
    </div>
  );
}

export default function ContrastQuiz6VariantB() {
  return (
    <div className="bg-white content-stretch flex flex-col items-start overflow-clip pt-[10px] px-[10px] relative rounded-[14.99px] size-full" data-name="ContrastQuiz6VariantB">
      <Container />
    </div>
  );
}