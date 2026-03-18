function Paragraph() {
  return (
    <div className="absolute content-stretch flex h-[12px] items-start left-0 top-0 w-[166px]" data-name="Paragraph">
      <p className="flex-[1_0_0] font-['Inter:Regular',sans-serif] font-normal leading-[12px] min-h-px min-w-px not-italic relative text-[#101828] text-[10px] tracking-[-0.13px]">Как улучшить дизайн</p>
    </div>
  );
}

function Paragraph1() {
  return (
    <div className="absolute h-[33px] left-0 top-[20px] w-[166px]" data-name="Paragraph">
      <p className="absolute font-['Inter:Regular',sans-serif] font-normal leading-[11px] left-0 not-italic text-[#5e6169] text-[9px] top-0 tracking-[-0.12px] w-[152px]">Простые правила помогут создать понятный интерфейс для пользователей</p>
    </div>
  );
}

function Paragraph2() {
  return (
    <div className="h-[10.5px] relative shrink-0 w-[50.07px]" data-name="Paragraph">
      <div className="bg-clip-padding border-0 border-[transparent] border-solid relative size-full">
        <p className="absolute font-['Inter:Regular',sans-serif] font-normal leading-[10.5px] left-0 not-italic text-[7px] text-white top-0 tracking-[-0.09px] whitespace-nowrap">Узнать больше</p>
      </div>
    </div>
  );
}

function Container1() {
  return (
    <div className="absolute bg-[#364146] content-stretch flex h-[24px] items-center justify-center left-0 pr-[0.008px] rounded-[9.031px] top-[169px] w-[166px]" data-name="Container">
      <Paragraph2 />
    </div>
  );
}

function Paragraph3() {
  return (
    <div className="absolute content-stretch flex h-[10px] items-start left-0 top-[201px] w-[166px]" data-name="Paragraph">
      <p className="flex-[1_0_0] font-['Inter:Regular',sans-serif] font-normal leading-[10px] min-h-px min-w-px not-italic relative text-[#8e9199] text-[8px] tracking-[-0.1px]">Читать 5 минут</p>
    </div>
  );
}

function Container() {
  return (
    <div className="h-[211px] relative shrink-0 w-full" data-name="Container">
      <Paragraph />
      <Paragraph1 />
      <Container1 />
      <Paragraph3 />
    </div>
  );
}

function ContrastQuiz2VariantA() {
  return (
    <div className="bg-[#f7f8fc] content-stretch flex flex-col h-[231px] items-start pt-[10px] px-[10px] relative rounded-[14.99px] shrink-0 w-[186px]" data-name="ContrastQuiz2VariantA">
      <Container />
    </div>
  );
}

function Paragraph4() {
  return (
    <div className="absolute h-[18px] left-0 top-0 w-[166px]" data-name="Paragraph">
      <p className="absolute font-['Inter:Regular',sans-serif] font-normal leading-[18px] left-0 not-italic text-[#101828] text-[16px] top-[-1px] tracking-[-0.2px] whitespace-nowrap">Как улучшить дизайн</p>
    </div>
  );
}

function Paragraph5() {
  return (
    <div className="absolute h-[33px] left-0 top-[26px] w-[166px]" data-name="Paragraph">
      <p className="absolute font-['Inter:Regular',sans-serif] font-normal leading-[11px] left-0 not-italic text-[#5e6169] text-[9px] top-0 tracking-[-0.12px] w-[152px]">Простые правила помогут создать понятный интерфейс для пользователей</p>
    </div>
  );
}

function Paragraph6() {
  return (
    <div className="h-[15px] relative shrink-0 w-[71.508px]" data-name="Paragraph">
      <div className="bg-clip-padding border-0 border-[transparent] border-solid relative size-full">
        <p className="absolute font-['Inter:Regular',sans-serif] font-normal leading-[15px] left-0 not-italic text-[10px] text-white top-[0.5px] tracking-[-0.13px] whitespace-nowrap">Узнать больше</p>
      </div>
    </div>
  );
}

function Container3() {
  return (
    <div className="absolute bg-[#364146] content-stretch flex h-[34px] items-center justify-center left-0 pr-[0.008px] rounded-[9.031px] top-[160px] w-[166px]" data-name="Container">
      <Paragraph6 />
    </div>
  );
}

function Paragraph7() {
  return (
    <div className="absolute content-stretch flex h-[9px] items-start left-0 top-[202px] w-[166px]" data-name="Paragraph">
      <p className="flex-[1_0_0] font-['Inter:Regular',sans-serif] font-normal leading-[9px] min-h-px min-w-px not-italic relative text-[#8e9199] text-[7px] tracking-[-0.09px]">Читать 5 минут</p>
    </div>
  );
}

function Container2() {
  return (
    <div className="h-[211px] relative shrink-0 w-full" data-name="Container">
      <Paragraph4 />
      <Paragraph5 />
      <Container3 />
      <Paragraph7 />
    </div>
  );
}

function ContrastQuiz2VariantB() {
  return (
    <div className="bg-[#f7f8fc] content-stretch flex flex-col h-[231px] items-start pt-[10px] px-[10px] relative rounded-[14.99px] shrink-0 w-[186px]" data-name="ContrastQuiz2VariantB">
      <Container2 />
    </div>
  );
}

export default function Frame() {
  return (
    <div className="content-stretch flex gap-[61px] items-center relative size-full">
      <ContrastQuiz2VariantA />
      <ContrastQuiz2VariantB />
    </div>
  );
}