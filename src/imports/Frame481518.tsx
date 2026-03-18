function Paragraph() {
  return (
    <div className="absolute h-[16px] left-0 top-0 w-[166px]" data-name="Paragraph">
      <p className="absolute font-['Inter:Regular',sans-serif] font-normal leading-[16px] left-0 not-italic text-[#101828] text-[14px] top-[0.5px] tracking-[-0.18px] whitespace-nowrap">Завершить настройку</p>
    </div>
  );
}

function Paragraph1() {
  return (
    <div className="absolute h-[22px] left-0 top-[26px] w-[166px]" data-name="Paragraph">
      <p className="absolute font-['Inter:Regular',sans-serif] font-normal leading-[11px] left-0 not-italic text-[#5e6169] text-[9px] top-0 tracking-[-0.12px] w-[135px]">Осталось несколько шагов для завершения</p>
    </div>
  );
}

function Paragraph2() {
  return (
    <div className="h-[13.5px] relative shrink-0 w-[54.656px]" data-name="Paragraph">
      <div className="bg-clip-padding border-0 border-[transparent] border-solid relative size-full">
        <p className="absolute font-['Inter:Regular',sans-serif] font-normal leading-[13.5px] left-0 not-italic text-[#a8abb4] text-[9px] top-[0.5px] tracking-[-0.12px] whitespace-nowrap">Продолжить</p>
      </div>
    </div>
  );
}

function Container1() {
  return (
    <div className="absolute bg-[#d8dae3] content-stretch flex h-[32px] items-center justify-center left-0 rounded-[9.031px] top-[158.5px] w-[166px]" data-name="Container">
      <Paragraph2 />
    </div>
  );
}

function Paragraph3() {
  return (
    <div className="absolute h-[10.5px] left-0 top-[200.5px] w-[166px]" data-name="Paragraph">
      <p className="-translate-x-1/2 absolute font-['Inter:Regular',sans-serif] font-normal leading-[10.5px] left-[83.42px] not-italic text-[#a8abb4] text-[7px] text-center top-0 tracking-[-0.09px] whitespace-nowrap">Сделать позже</p>
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

function ContrastQuiz4VariantA() {
  return (
    <div className="bg-[#f7f8fc] content-stretch flex flex-col h-[231px] items-start pt-[10px] px-[10px] relative rounded-[14.99px] shrink-0 w-[186px]" data-name="ContrastQuiz4VariantA">
      <Container />
    </div>
  );
}

function Paragraph4() {
  return (
    <div className="absolute h-[16px] left-0 top-0 w-[166px]" data-name="Paragraph">
      <p className="absolute font-['Inter:Regular',sans-serif] font-normal leading-[16px] left-0 not-italic text-[#101828] text-[14px] top-[0.5px] tracking-[-0.18px] whitespace-nowrap">Завершить настройку</p>
    </div>
  );
}

function Paragraph5() {
  return (
    <div className="absolute h-[22px] left-0 top-[26px] w-[166px]" data-name="Paragraph">
      <p className="absolute font-['Inter:Regular',sans-serif] font-normal leading-[11px] left-0 not-italic text-[#5e6169] text-[9px] top-0 tracking-[-0.12px] w-[135px]">Осталось несколько шагов для завершения</p>
    </div>
  );
}

function Paragraph6() {
  return (
    <div className="h-[13.5px] relative shrink-0 w-[54.656px]" data-name="Paragraph">
      <div className="bg-clip-padding border-0 border-[transparent] border-solid relative size-full">
        <p className="absolute font-['Inter:Regular',sans-serif] font-normal leading-[13.5px] left-0 not-italic text-[9px] text-white top-[0.5px] tracking-[-0.12px] whitespace-nowrap">Продолжить</p>
      </div>
    </div>
  );
}

function Container3() {
  return (
    <div className="absolute bg-[#364146] content-stretch flex h-[32px] items-center justify-center left-0 rounded-[9.031px] top-[158.5px] w-[166px]" data-name="Container">
      <Paragraph6 />
    </div>
  );
}

function Paragraph7() {
  return (
    <div className="absolute h-[10.5px] left-0 top-[200.5px] w-[166px]" data-name="Paragraph">
      <p className="-translate-x-1/2 absolute font-['Inter:Regular',sans-serif] font-normal leading-[10.5px] left-[83.42px] not-italic text-[#5e6169] text-[7px] text-center top-0 tracking-[-0.09px] whitespace-nowrap">Сделать позже</p>
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

function ContrastQuiz4VariantB() {
  return (
    <div className="bg-[#f7f8fc] content-stretch flex flex-col h-[231px] items-start pt-[10px] px-[10px] relative rounded-[14.99px] shrink-0 w-[186px]" data-name="ContrastQuiz4VariantB">
      <Container2 />
    </div>
  );
}

export default function Frame() {
  return (
    <div className="content-stretch flex gap-[61px] items-center relative size-full">
      <ContrastQuiz4VariantA />
      <ContrastQuiz4VariantB />
    </div>
  );
}