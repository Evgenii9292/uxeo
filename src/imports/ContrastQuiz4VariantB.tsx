function Paragraph() {
  return (
    <div className="absolute h-[15px] left-0 top-0 w-[166px]" data-name="Paragraph">
      <p className="absolute font-['Inter:Regular',sans-serif] font-normal leading-[15px] left-0 not-italic text-[#101828] text-[13px] top-[0.5px] tracking-[-0.16px] whitespace-nowrap">Поиск</p>
    </div>
  );
}

function Paragraph1() {
  return (
    <div className="h-[13.5px] relative shrink-0 w-[30.398px]" data-name="Paragraph">
      <div className="bg-clip-padding border-0 border-[transparent] border-solid relative size-full">
        <p className="absolute font-['Inter:Regular',sans-serif] font-normal leading-[13.5px] left-0 not-italic text-[#101828] text-[9px] top-[0.5px] tracking-[-0.12px] whitespace-nowrap">дизайн</p>
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
    <div className="h-[9px] relative shrink-0 w-full" data-name="Paragraph">
      <p className="absolute font-['Inter:Regular',sans-serif] font-normal leading-[9px] left-[8px] not-italic text-[#8e9199] text-[6px] top-[-0.5px] tracking-[-0.08px] whitespace-nowrap">ПРОЕКТЫ</p>
    </div>
  );
}

function Container7() {
  return <div className="bg-[#364146] rounded-[4px] shrink-0 size-[20px]" data-name="Container" />;
}

function Paragraph3() {
  return (
    <div className="h-[13.5px] relative shrink-0 w-[71.672px]" data-name="Paragraph">
      <div className="bg-clip-padding border-0 border-[transparent] border-solid relative size-full">
        <p className="absolute font-['Inter:Regular',sans-serif] font-normal leading-[0] left-0 not-italic text-[#364146] text-[9px] top-[0.5px] tracking-[-0.12px] whitespace-nowrap">
          <span className="leading-[13.5px]">Дизайн</span>
          <span className="leading-[13.5px] text-[#101828]">-система</span>
        </p>
      </div>
    </div>
  );
}

function Container6() {
  return (
    <div className="h-[32px] relative rounded-[6px] shrink-0 w-[166px]" data-name="Container">
      <div className="bg-clip-padding border-0 border-[transparent] border-solid content-stretch flex gap-[8px] items-center pl-[8px] relative size-full">
        <Container7 />
        <Paragraph3 />
      </div>
    </div>
  );
}

function Container9() {
  return <div className="bg-[#f0f1f3] rounded-[4px] shrink-0 size-[20px]" data-name="Container" />;
}

function Paragraph4() {
  return (
    <div className="h-[12px] relative shrink-0 w-[89.867px]" data-name="Paragraph">
      <div className="bg-clip-padding border-0 border-[transparent] border-solid relative size-full">
        <p className="absolute font-['Inter:Regular',sans-serif] font-normal leading-[0] left-0 not-italic text-[#5e6169] text-[8px] top-0 tracking-[-0.1px] whitespace-nowrap">
          <span className="leading-[12px]">{`UX `}</span>
          <span className="leading-[12px] text-[#364146]">дизайн</span>
          <span className="leading-[12px]">{` приложения`}</span>
        </p>
      </div>
    </div>
  );
}

function Container8() {
  return (
    <div className="flex-[1_0_0] min-h-px min-w-px relative rounded-[6px] w-[166px]" data-name="Container">
      <div className="bg-clip-padding border-0 border-[transparent] border-solid content-stretch flex gap-[8px] items-center pl-[8px] relative size-full">
        <Container9 />
        <Paragraph4 />
      </div>
    </div>
  );
}

function Container5() {
  return (
    <div className="content-stretch flex flex-col gap-[2px] h-[66px] items-start relative shrink-0 w-full" data-name="Container">
      <Container6 />
      <Container8 />
    </div>
  );
}

function Container4() {
  return (
    <div className="flex-[1_0_0] min-h-px min-w-px relative w-[166px]" data-name="Container">
      <div className="bg-clip-padding border-0 border-[transparent] border-solid content-stretch flex flex-col gap-[3px] items-start relative size-full">
        <Paragraph2 />
        <Container5 />
      </div>
    </div>
  );
}

function Paragraph5() {
  return (
    <div className="h-[9px] relative shrink-0 w-full" data-name="Paragraph">
      <p className="absolute font-['Inter:Regular',sans-serif] font-normal leading-[9px] left-[8px] not-italic text-[#8e9199] text-[6px] top-[-0.5px] tracking-[-0.08px] whitespace-nowrap">ЛЮДИ</p>
    </div>
  );
}

function Container12() {
  return <div className="bg-[#f0f1f3] rounded-[16777200px] shrink-0 size-[20px]" data-name="Container" />;
}

function Paragraph6() {
  return (
    <div className="h-[12px] relative shrink-0 w-full" data-name="Paragraph">
      <p className="absolute font-['Inter:Regular',sans-serif] font-normal leading-[12px] left-0 not-italic text-[#101828] text-[8px] top-0 tracking-[-0.1px] whitespace-nowrap">Анна Иванова</p>
    </div>
  );
}

function Paragraph7() {
  return (
    <div className="h-[9px] relative shrink-0 w-full" data-name="Paragraph">
      <p className="absolute font-['Inter:Regular',sans-serif] font-normal leading-[0] left-0 not-italic text-[#8e9199] text-[6px] top-[-0.5px] tracking-[-0.08px] whitespace-nowrap">
        <span className="leading-[9px]">{`UX `}</span>
        <span className="leading-[9px] text-[#364146]">дизайнер</span>
      </p>
    </div>
  );
}

function Container13() {
  return (
    <div className="flex-[1_0_0] h-[21px] min-h-px min-w-px relative" data-name="Container">
      <div className="bg-clip-padding border-0 border-[transparent] border-solid content-stretch flex flex-col items-start relative size-full">
        <Paragraph6 />
        <Paragraph7 />
      </div>
    </div>
  );
}

function Container11() {
  return (
    <div className="h-[32px] relative rounded-[6px] shrink-0 w-full" data-name="Container">
      <div className="flex flex-row items-center size-full">
        <div className="content-stretch flex gap-[8px] items-center px-[8px] relative size-full">
          <Container12 />
          <Container13 />
        </div>
      </div>
    </div>
  );
}

function Container10() {
  return (
    <div className="h-[44px] relative shrink-0 w-[166px]" data-name="Container">
      <div className="bg-clip-padding border-0 border-[transparent] border-solid content-stretch flex flex-col gap-[3px] items-start relative size-full">
        <Paragraph5 />
        <Container11 />
      </div>
    </div>
  );
}

function Paragraph8() {
  return (
    <div className="h-[9px] relative shrink-0 w-full" data-name="Paragraph">
      <p className="absolute font-['Inter:Regular',sans-serif] font-normal leading-[9px] left-[8px] not-italic text-[#8e9199] text-[6px] top-[-0.5px] tracking-[-0.08px] whitespace-nowrap">КОМАНДЫ</p>
    </div>
  );
}

function Container16() {
  return <div className="bg-[#f0f1f3] rounded-[16777200px] shrink-0 size-[18px]" data-name="Container" />;
}

function Paragraph9() {
  return (
    <div className="h-[10.5px] relative shrink-0 w-[58.781px]" data-name="Paragraph">
      <div className="bg-clip-padding border-0 border-[transparent] border-solid relative size-full">
        <p className="absolute font-['Inter:Regular',sans-serif] font-normal leading-[0] left-0 not-italic text-[#5e6169] text-[7px] top-0 tracking-[-0.09px] whitespace-nowrap">
          <span className="leading-[10.5px]">{`Команда `}</span>
          <span className="leading-[10.5px] text-[#364146]">дизайна</span>
        </p>
      </div>
    </div>
  );
}

function Container15() {
  return (
    <div className="h-[28px] relative rounded-[6px] shrink-0 w-full" data-name="Container">
      <div className="flex flex-row items-center size-full">
        <div className="content-stretch flex gap-[8px] items-center pl-[8px] relative size-full">
          <Container16 />
          <Paragraph9 />
        </div>
      </div>
    </div>
  );
}

function Container14() {
  return (
    <div className="h-[40px] relative shrink-0 w-[166px]" data-name="Container">
      <div className="bg-clip-padding border-0 border-[transparent] border-solid content-stretch flex flex-col gap-[3px] items-start relative size-full">
        <Paragraph8 />
        <Container15 />
      </div>
    </div>
  );
}

function Container3() {
  return (
    <div className="absolute content-stretch flex flex-col gap-[6px] h-[174px] items-start left-0 top-[49px] w-[166px]" data-name="Container">
      <Container4 />
      <Container10 />
      <Container14 />
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

export default function ContrastQuiz4VariantB() {
  return (
    <div className="bg-[#343e42] content-stretch flex flex-col items-start pt-[10px] px-[10px] relative rounded-[14.99px] size-full" data-name="ContrastQuiz4VariantB">
      <Container />
    </div>
  );
}