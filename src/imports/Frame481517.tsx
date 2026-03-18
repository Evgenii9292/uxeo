function Paragraph() {
  return (
    <div className="absolute content-stretch flex h-[12px] items-start left-0 top-0 w-[166px]" data-name="Paragraph">
      <p className="flex-[1_0_0] font-['Inter:Regular',sans-serif] font-normal leading-[12px] min-h-px min-w-px not-italic relative text-[#101828] text-[10px] tracking-[-0.13px]">Обновление системы</p>
    </div>
  );
}

function Paragraph1() {
  return (
    <div className="absolute content-stretch flex h-[11px] items-start left-0 top-[20px] w-[166px]" data-name="Paragraph">
      <p className="font-['Inter:Regular',sans-serif] font-normal leading-[11px] not-italic relative shrink-0 text-[#5e6169] text-[9px] tracking-[-0.12px] whitespace-nowrap">Вышла новая версия с улучшениями</p>
    </div>
  );
}

function Paragraph2() {
  return (
    <div className="absolute content-stretch flex h-[10px] items-start left-0 top-[39px] w-[166px]" data-name="Paragraph">
      <p className="flex-[1_0_0] font-['Inter:Regular',sans-serif] font-normal leading-[10px] min-h-px min-w-px not-italic relative text-[#5e6169] text-[8px] tracking-[-0.1px]">Версия 2.0</p>
    </div>
  );
}

function Paragraph3() {
  return (
    <div className="absolute content-stretch flex h-[10px] items-start left-0 top-[57px] w-[166px]" data-name="Paragraph">
      <p className="flex-[1_0_0] font-['Inter:Regular',sans-serif] font-normal leading-[10px] min-h-px min-w-px not-italic relative text-[#8e9199] text-[8px] tracking-[-0.1px]">Выпущено 10 марта</p>
    </div>
  );
}

function Paragraph4() {
  return (
    <div className="h-[12px] relative shrink-0 w-[37.07px]" data-name="Paragraph">
      <div className="bg-clip-padding border-0 border-[transparent] border-solid relative size-full">
        <p className="absolute font-['Inter:Regular',sans-serif] font-normal leading-[12px] left-0 not-italic text-[8px] text-white top-0 tracking-[-0.1px] whitespace-nowrap">Обновить</p>
      </div>
    </div>
  );
}

function Container1() {
  return (
    <div className="absolute bg-[#364146] content-stretch flex h-[28px] items-center justify-center left-0 pr-[0.008px] rounded-[9.031px] top-[183px] w-[166px]" data-name="Container">
      <Paragraph4 />
    </div>
  );
}

function Container() {
  return (
    <div className="h-[211px] relative shrink-0 w-full" data-name="Container">
      <Paragraph />
      <Paragraph1 />
      <Paragraph2 />
      <Paragraph3 />
      <Container1 />
    </div>
  );
}

function ContrastQuiz3VariantA() {
  return (
    <div className="bg-[#f7f8fc] content-stretch flex flex-col h-[231px] items-start pt-[10px] px-[10px] relative rounded-[14.99px] shrink-0 w-[186px]" data-name="ContrastQuiz3VariantA">
      <Container />
    </div>
  );
}

function Paragraph5() {
  return (
    <div className="absolute h-[17px] left-0 top-0 w-[166px]" data-name="Paragraph">
      <p className="absolute font-['Inter:Regular',sans-serif] font-normal leading-[17px] left-0 not-italic text-[#101828] text-[15px] top-[-0.5px] tracking-[-0.19px] whitespace-nowrap">Обновление системы</p>
    </div>
  );
}

function Paragraph6() {
  return (
    <div className="absolute h-[24px] left-0 top-[25px] w-[166px]" data-name="Paragraph">
      <p className="absolute font-['Inter:Regular',sans-serif] font-normal leading-[12px] left-0 not-italic text-[#5e6169] text-[10px] top-0 tracking-[-0.13px] w-[109px]">Вышла новая версия с улучшениями</p>
    </div>
  );
}

function Paragraph7() {
  return (
    <div className="absolute content-stretch flex h-[9px] items-start left-0 top-[57px] w-[166px]" data-name="Paragraph">
      <p className="flex-[1_0_0] font-['Inter:Regular',sans-serif] font-normal leading-[9px] min-h-px min-w-px not-italic relative text-[#5e6169] text-[7px] tracking-[-0.09px]">Версия 2.0</p>
    </div>
  );
}

function Paragraph8() {
  return (
    <div className="absolute content-stretch flex h-[8px] items-start left-0 top-[74px] w-[166px]" data-name="Paragraph">
      <p className="flex-[1_0_0] font-['Inter:Regular',sans-serif] font-normal leading-[8px] min-h-px min-w-px not-italic relative text-[#8e9199] text-[6px] tracking-[-0.08px]">Выпущено 10 марта</p>
    </div>
  );
}

function Paragraph9() {
  return (
    <div className="h-[13.5px] relative shrink-0 w-[41.641px]" data-name="Paragraph">
      <div className="bg-clip-padding border-0 border-[transparent] border-solid relative size-full">
        <p className="absolute font-['Inter:Regular',sans-serif] font-normal leading-[13.5px] left-0 not-italic text-[9px] text-white top-[0.5px] tracking-[-0.12px] whitespace-nowrap">Обновить</p>
      </div>
    </div>
  );
}

function Container3() {
  return (
    <div className="absolute bg-[#364146] content-stretch flex h-[32px] items-center justify-center left-0 rounded-[9.031px] top-[179px] w-[166px]" data-name="Container">
      <Paragraph9 />
    </div>
  );
}

function Container2() {
  return (
    <div className="h-[211px] relative shrink-0 w-full" data-name="Container">
      <Paragraph5 />
      <Paragraph6 />
      <Paragraph7 />
      <Paragraph8 />
      <Container3 />
    </div>
  );
}

function ContrastQuiz3VariantB() {
  return (
    <div className="bg-[#f7f8fc] content-stretch flex flex-col h-[231px] items-start pt-[10px] px-[10px] relative rounded-[14.99px] shrink-0 w-[186px]" data-name="ContrastQuiz3VariantB">
      <Container2 />
    </div>
  );
}

export default function Frame() {
  return (
    <div className="content-stretch flex gap-[61px] items-center relative size-full">
      <ContrastQuiz3VariantA />
      <ContrastQuiz3VariantB />
    </div>
  );
}