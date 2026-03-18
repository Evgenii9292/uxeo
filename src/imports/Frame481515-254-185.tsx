function Paragraph() {
  return (
    <div className="absolute content-stretch flex h-[13px] items-start left-0 top-0 w-[166px]" data-name="Paragraph">
      <p className="flex-[1_0_0] font-['Inter:Regular',sans-serif] font-normal leading-[13px] min-h-px min-w-px not-italic relative text-[#8e9199] text-[11px] tracking-[-0.14px]">Новая статья</p>
    </div>
  );
}

function Paragraph1() {
  return (
    <div className="absolute h-[22px] left-0 top-[23px] w-[166px]" data-name="Paragraph">
      <p className="absolute font-['Inter:Regular',sans-serif] font-normal leading-[11px] left-0 not-italic text-[#8e9199] text-[9px] top-0 tracking-[-0.12px] w-[165px]">Узнайте о новых возможностях платформы и улучшениях интерфейса</p>
    </div>
  );
}

function Paragraph2() {
  return (
    <div className="h-[13.5px] relative shrink-0 w-[58.023px]" data-name="Paragraph">
      <div className="bg-clip-padding border-0 border-[transparent] border-solid relative size-full">
        <p className="absolute font-['Inter:Regular',sans-serif] font-normal leading-[13.5px] left-0 not-italic text-[#8e9199] text-[9px] top-[0.5px] tracking-[-0.12px] whitespace-nowrap">Читать далее</p>
      </div>
    </div>
  );
}

function Container1() {
  return (
    <div className="absolute bg-[#d1d3db] content-stretch flex h-[32px] items-center justify-center left-0 pr-[0.008px] rounded-[9.031px] top-[158.5px] w-[166px]" data-name="Container">
      <Paragraph2 />
    </div>
  );
}

function Paragraph3() {
  return (
    <div className="absolute h-[10.5px] left-0 top-[200.5px] w-[166px]" data-name="Paragraph">
      <p className="-translate-x-1/2 absolute font-['Inter:Regular',sans-serif] font-normal leading-[10.5px] left-[83.32px] not-italic text-[#8e9199] text-[7px] text-center top-0 tracking-[-0.09px] whitespace-nowrap">Пропустить</p>
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

function ContrastQuiz1VariantA() {
  return (
    <div className="bg-[#f7f8fc] content-stretch flex flex-col h-[231px] items-start pt-[10px] px-[10px] relative rounded-[14.99px] shrink-0 w-[186px]" data-name="ContrastQuiz1VariantA">
      <Container />
    </div>
  );
}

function Paragraph4() {
  return (
    <div className="absolute h-[16px] left-0 top-0 w-[166px]" data-name="Paragraph">
      <p className="absolute font-['Inter:Regular',sans-serif] font-normal leading-[16px] left-0 not-italic text-[#101828] text-[14px] top-[0.5px] tracking-[-0.18px] whitespace-nowrap">Новая статья</p>
    </div>
  );
}

function Paragraph5() {
  return (
    <div className="absolute h-[22px] left-0 top-[26px] w-[166px]" data-name="Paragraph">
      <p className="absolute font-['Inter:Regular',sans-serif] font-normal leading-[11px] left-0 not-italic text-[#5e6169] text-[9px] top-0 tracking-[-0.12px] w-[165px]">Узнайте о новых возможностях платформы и улучшениях интерфейса</p>
    </div>
  );
}

function Paragraph6() {
  return (
    <div className="h-[13.5px] relative shrink-0 w-[58.023px]" data-name="Paragraph">
      <div className="bg-clip-padding border-0 border-[transparent] border-solid relative size-full">
        <p className="absolute font-['Inter:Regular',sans-serif] font-normal leading-[13.5px] left-0 not-italic text-[9px] text-white top-[0.5px] tracking-[-0.12px] whitespace-nowrap">Читать далее</p>
      </div>
    </div>
  );
}

function Container3() {
  return (
    <div className="absolute bg-[#364146] content-stretch flex h-[32px] items-center justify-center left-0 pr-[0.008px] rounded-[9.031px] top-[158.5px] w-[166px]" data-name="Container">
      <Paragraph6 />
    </div>
  );
}

function Paragraph7() {
  return (
    <div className="absolute h-[10.5px] left-0 top-[200.5px] w-[166px]" data-name="Paragraph">
      <p className="-translate-x-1/2 absolute font-['Inter:Regular',sans-serif] font-normal leading-[10.5px] left-[83.32px] not-italic text-[#4a90ff] text-[7px] text-center top-0 tracking-[-0.09px] whitespace-nowrap">Пропустить</p>
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

function ContrastQuiz1VariantB() {
  return (
    <div className="bg-[#f7f8fc] content-stretch flex flex-col h-[231px] items-start pt-[10px] px-[10px] relative rounded-[14.99px] shrink-0 w-[186px]" data-name="ContrastQuiz1VariantB">
      <Container2 />
    </div>
  );
}

export default function Frame() {
  return (
    <div className="content-stretch flex gap-[61px] items-center relative size-full">
      <ContrastQuiz1VariantA />
      <ContrastQuiz1VariantB />
    </div>
  );
}