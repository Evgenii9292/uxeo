function Paragraph() {
  return (
    <div className="absolute h-[15px] left-0 top-0 w-[166px]" data-name="Paragraph">
      <p className="absolute font-['Inter:Regular',sans-serif] font-normal leading-[15px] left-0 not-italic text-[#101828] text-[13px] top-[0.5px] tracking-[-0.16px] whitespace-nowrap">Поиск</p>
    </div>
  );
}

function Paragraph1() {
  return (
    <div className="h-[12px] relative shrink-0 w-[27.063px]" data-name="Paragraph">
      <div className="bg-clip-padding border-0 border-[transparent] border-solid relative size-full">
        <p className="absolute font-['Inter:Regular',sans-serif] font-normal leading-[12px] left-0 not-italic text-[#101828] text-[8px] top-0 tracking-[-0.1px] whitespace-nowrap">дизайн</p>
      </div>
    </div>
  );
}

function Container2() {
  return <div className="bg-[#d3dbdf] h-[12px] shrink-0 w-px" data-name="Container" />;
}

function Container1() {
  return (
    <div className="absolute bg-[#f7f8fc] content-stretch flex gap-[6px] h-[16px] items-center left-0 pl-[10px] rounded-[9.031px] top-[23px] w-[166px]" data-name="Container">
      <Paragraph1 />
      <Container2 />
    </div>
  );
}

function Paragraph2() {
  return (
    <div className="h-[12px] relative shrink-0 w-[63.797px]" data-name="Paragraph">
      <div className="bg-clip-padding border-0 border-[transparent] border-solid relative size-full">
        <p className="absolute font-['Inter:Regular',sans-serif] font-normal leading-[12px] left-0 not-italic text-[#101828] text-[8px] top-0 tracking-[-0.1px] whitespace-nowrap">Дизайн-система</p>
      </div>
    </div>
  );
}

function Container4() {
  return (
    <div className="h-[32px] relative rounded-[6px] shrink-0 w-[166px]" data-name="Container">
      <div className="bg-clip-padding border-0 border-[transparent] border-solid content-stretch flex items-center pl-[8px] relative size-full">
        <Paragraph2 />
      </div>
    </div>
  );
}

function Paragraph3() {
  return (
    <div className="h-[12px] relative shrink-0 w-[53.75px]" data-name="Paragraph">
      <div className="bg-clip-padding border-0 border-[transparent] border-solid relative size-full">
        <p className="absolute font-['Inter:Regular',sans-serif] font-normal leading-[12px] left-0 not-italic text-[#5e6169] text-[8px] top-0 tracking-[-0.1px] whitespace-nowrap">Анна Иванова</p>
      </div>
    </div>
  );
}

function Container5() {
  return (
    <div className="h-[32px] relative rounded-[6px] shrink-0 w-[166px]" data-name="Container">
      <div className="bg-clip-padding border-0 border-[transparent] border-solid content-stretch flex items-center pl-[8px] relative size-full">
        <Paragraph3 />
      </div>
    </div>
  );
}

function Paragraph4() {
  return (
    <div className="h-[12px] relative shrink-0 w-[138.063px]" data-name="Paragraph">
      <div className="bg-clip-padding border-0 border-[transparent] border-solid relative size-full">
        <p className="absolute font-['Inter:Regular',sans-serif] font-normal leading-[12px] left-0 not-italic text-[#5e6169] text-[8px] top-0 tracking-[-0.1px] whitespace-nowrap">UX дизайн мобильного приложения</p>
      </div>
    </div>
  );
}

function Container6() {
  return (
    <div className="h-[32px] relative rounded-[6px] shrink-0 w-[166px]" data-name="Container">
      <div className="bg-clip-padding border-0 border-[transparent] border-solid content-stretch flex items-center pl-[8px] relative size-full">
        <Paragraph4 />
      </div>
    </div>
  );
}

function Paragraph5() {
  return (
    <div className="h-[12px] relative shrink-0 w-[67.219px]" data-name="Paragraph">
      <div className="bg-clip-padding border-0 border-[transparent] border-solid relative size-full">
        <p className="absolute font-['Inter:Regular',sans-serif] font-normal leading-[12px] left-0 not-italic text-[#5e6169] text-[8px] top-0 tracking-[-0.1px] whitespace-nowrap">Команда дизайна</p>
      </div>
    </div>
  );
}

function Container7() {
  return (
    <div className="h-[32px] relative rounded-[6px] shrink-0 w-[166px]" data-name="Container">
      <div className="bg-clip-padding border-0 border-[transparent] border-solid content-stretch flex items-center pl-[8px] relative size-full">
        <Paragraph5 />
      </div>
    </div>
  );
}

function Paragraph6() {
  return (
    <div className="h-[12px] relative shrink-0 w-[109.125px]" data-name="Paragraph">
      <div className="bg-clip-padding border-0 border-[transparent] border-solid relative size-full">
        <p className="absolute font-['Inter:Regular',sans-serif] font-normal leading-[12px] left-0 not-italic text-[#5e6169] text-[8px] top-0 tracking-[-0.1px] whitespace-nowrap">Редизайн главной страницы</p>
      </div>
    </div>
  );
}

function Container8() {
  return (
    <div className="flex-[1_0_0] min-h-px min-w-px relative rounded-[6px] w-[166px]" data-name="Container">
      <div className="bg-clip-padding border-0 border-[transparent] border-solid content-stretch flex items-center pl-[8px] relative size-full">
        <Paragraph6 />
      </div>
    </div>
  );
}

function Container3() {
  return (
    <div className="absolute content-stretch flex flex-col gap-[3px] h-[172px] items-start left-0 top-[49px] w-[166px]" data-name="Container">
      <Container4 />
      <Container5 />
      <Container6 />
      <Container7 />
      <Container8 />
    </div>
  );
}

function Container() {
  return (
    <div className="h-[211px] relative shrink-0 w-full" data-name="Container">
      <Paragraph />
      <Container1 />
      <Container3 />
    </div>
  );
}

export default function ContrastQuiz4VariantA() {
  return (
    <div className="bg-[#343e42] content-stretch flex flex-col items-start pt-[10px] px-[10px] relative rounded-[14.99px] size-full" data-name="ContrastQuiz4VariantA">
      <Container />
    </div>
  );
}