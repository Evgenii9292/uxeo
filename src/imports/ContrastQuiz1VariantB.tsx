function Paragraph() {
  return (
    <div className="h-[13.5px] relative shrink-0 w-[65.43px]" data-name="Paragraph">
      <div className="bg-clip-padding border-0 border-[transparent] border-solid relative size-full">
        <p className="absolute font-['Inter:Regular',sans-serif] font-normal leading-[13.5px] left-0 not-italic text-[#101828] text-[9px] top-[0.5px] tracking-[-0.12px] whitespace-nowrap">Редактировать</p>
      </div>
    </div>
  );
}

function Container2() {
  return (
    <div className="absolute content-stretch flex h-[30px] items-center left-0 pl-[10px] top-[4px] w-[166px]" data-name="Container">
      <Paragraph />
    </div>
  );
}

function Paragraph1() {
  return (
    <div className="h-[12px] relative shrink-0 w-[50.586px]" data-name="Paragraph">
      <div className="bg-clip-padding border-0 border-[transparent] border-solid relative size-full">
        <p className="absolute font-['Inter:Regular',sans-serif] font-normal leading-[12px] left-0 not-italic text-[#5e6169] text-[8px] top-0 tracking-[-0.1px] whitespace-nowrap">Дублировать</p>
      </div>
    </div>
  );
}

function Container3() {
  return (
    <div className="absolute content-stretch flex h-[28px] items-center left-0 pl-[10px] top-[34px] w-[166px]" data-name="Container">
      <Paragraph1 />
    </div>
  );
}

function Container4() {
  return <div className="absolute bg-[#f0f1f3] h-px left-[6px] top-[65px] w-[154px]" data-name="Container" />;
}

function Paragraph2() {
  return (
    <div className="h-[12px] relative shrink-0 w-[62.594px]" data-name="Paragraph">
      <div className="bg-clip-padding border-0 border-[transparent] border-solid relative size-full">
        <p className="absolute font-['Inter:Regular',sans-serif] font-normal leading-[12px] left-0 not-italic text-[#5e6169] text-[8px] top-0 tracking-[-0.1px] whitespace-nowrap">Экспортировать</p>
      </div>
    </div>
  );
}

function Container5() {
  return (
    <div className="absolute content-stretch flex h-[28px] items-center left-0 pl-[10px] top-[69px] w-[166px]" data-name="Container">
      <Paragraph2 />
    </div>
  );
}

function Paragraph3() {
  return (
    <div className="h-[12px] relative shrink-0 w-[46px]" data-name="Paragraph">
      <div className="bg-clip-padding border-0 border-[transparent] border-solid relative size-full">
        <p className="absolute font-['Inter:Regular',sans-serif] font-normal leading-[12px] left-0 not-italic text-[#5e6169] text-[8px] top-0 tracking-[-0.1px] whitespace-nowrap">Поделиться</p>
      </div>
    </div>
  );
}

function Container6() {
  return (
    <div className="absolute content-stretch flex h-[28px] items-center left-0 pl-[10px] top-[97px] w-[166px]" data-name="Container">
      <Paragraph3 />
    </div>
  );
}

function Container7() {
  return <div className="absolute bg-[#f0f1f3] h-px left-[6px] top-[128px] w-[154px]" data-name="Container" />;
}

function Paragraph4() {
  return (
    <div className="h-[10.5px] relative shrink-0 w-[47.453px]" data-name="Paragraph">
      <div className="bg-clip-padding border-0 border-[transparent] border-solid relative size-full">
        <p className="absolute font-['Inter:Regular',sans-serif] font-normal leading-[10.5px] left-0 not-italic text-[#8e9199] text-[7px] top-0 tracking-[-0.09px] whitespace-nowrap">Архивировать</p>
      </div>
    </div>
  );
}

function Container8() {
  return (
    <div className="absolute content-stretch flex h-[26px] items-center left-0 pl-[10px] top-[132px] w-[166px]" data-name="Container">
      <Paragraph4 />
    </div>
  );
}

function Paragraph5() {
  return (
    <div className="h-[10.5px] relative shrink-0 w-[36.438px]" data-name="Paragraph">
      <div className="bg-clip-padding border-0 border-[transparent] border-solid relative size-full">
        <p className="absolute font-['Inter:Regular',sans-serif] font-normal leading-[10.5px] left-0 not-italic text-[#8e9199] text-[7px] top-0 tracking-[-0.09px] whitespace-nowrap">Настройки</p>
      </div>
    </div>
  );
}

function Container9() {
  return (
    <div className="absolute content-stretch flex h-[26px] items-center left-0 pl-[10px] top-[158px] w-[166px]" data-name="Container">
      <Paragraph5 />
    </div>
  );
}

function Container10() {
  return <div className="absolute bg-[#f0f1f3] h-px left-[6px] top-[187px] w-[154px]" data-name="Container" />;
}

function Paragraph6() {
  return (
    <div className="h-[12px] relative shrink-0 w-[31.648px]" data-name="Paragraph">
      <div className="bg-clip-padding border-0 border-[transparent] border-solid relative size-full">
        <p className="absolute font-['Inter:Regular',sans-serif] font-normal leading-[12px] left-0 not-italic text-[#ef4444] text-[8px] top-0 tracking-[-0.1px] whitespace-nowrap">Удалить</p>
      </div>
    </div>
  );
}

function Container11() {
  return (
    <div className="absolute content-stretch flex h-[28px] items-center left-0 pl-[10px] top-[191px] w-[166px]" data-name="Container">
      <Paragraph6 />
    </div>
  );
}

function Container1() {
  return (
    <div className="bg-white h-[223px] relative rounded-[9.031px] shrink-0 w-[166px]" data-name="Container">
      <div className="bg-clip-padding border-0 border-[transparent] border-solid relative size-full">
        <Container2 />
        <Container3 />
        <Container4 />
        <Container5 />
        <Container6 />
        <Container7 />
        <Container8 />
        <Container9 />
        <Container10 />
        <Container11 />
      </div>
    </div>
  );
}

function Container() {
  return (
    <div className="content-stretch flex flex-col h-[211px] items-start relative shrink-0 w-full" data-name="Container">
      <Container1 />
    </div>
  );
}

export default function ContrastQuiz1VariantB() {
  return (
    <div className="bg-[#343e42] content-stretch flex flex-col items-start overflow-clip pt-[10px] px-[10px] relative rounded-[14.99px] size-full" data-name="ContrastQuiz1VariantB">
      <Container />
    </div>
  );
}