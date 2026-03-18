function Paragraph() {
  return (
    <div className="h-[12px] relative shrink-0 w-[58.25px]" data-name="Paragraph">
      <div className="bg-clip-padding border-0 border-[transparent] border-solid relative size-full">
        <p className="absolute font-['Inter:Regular',sans-serif] font-normal leading-[12px] left-0 not-italic text-[#101828] text-[8px] top-0 tracking-[-0.1px] whitespace-nowrap">Редактировать</p>
      </div>
    </div>
  );
}

function Container2() {
  return (
    <div className="h-[28px] relative shrink-0 w-[166px]" data-name="Container">
      <div className="bg-clip-padding border-0 border-[transparent] border-solid content-stretch flex items-center pl-[10px] relative size-full">
        <Paragraph />
      </div>
    </div>
  );
}

function Paragraph1() {
  return (
    <div className="h-[12px] relative shrink-0 w-[50.586px]" data-name="Paragraph">
      <div className="bg-clip-padding border-0 border-[transparent] border-solid relative size-full">
        <p className="absolute font-['Inter:Regular',sans-serif] font-normal leading-[12px] left-0 not-italic text-[#101828] text-[8px] top-0 tracking-[-0.1px] whitespace-nowrap">Дублировать</p>
      </div>
    </div>
  );
}

function Container3() {
  return (
    <div className="h-[28px] relative shrink-0 w-[166px]" data-name="Container">
      <div className="bg-clip-padding border-0 border-[transparent] border-solid content-stretch flex items-center pl-[10px] relative size-full">
        <Paragraph1 />
      </div>
    </div>
  );
}

function Paragraph2() {
  return (
    <div className="h-[12px] relative shrink-0 w-[62.594px]" data-name="Paragraph">
      <div className="bg-clip-padding border-0 border-[transparent] border-solid relative size-full">
        <p className="absolute font-['Inter:Regular',sans-serif] font-normal leading-[12px] left-0 not-italic text-[#101828] text-[8px] top-0 tracking-[-0.1px] whitespace-nowrap">Экспортировать</p>
      </div>
    </div>
  );
}

function Container4() {
  return (
    <div className="h-[28px] relative shrink-0 w-[166px]" data-name="Container">
      <div className="bg-clip-padding border-0 border-[transparent] border-solid content-stretch flex items-center pl-[10px] relative size-full">
        <Paragraph2 />
      </div>
    </div>
  );
}

function Paragraph3() {
  return (
    <div className="h-[12px] relative shrink-0 w-[46px]" data-name="Paragraph">
      <div className="bg-clip-padding border-0 border-[transparent] border-solid relative size-full">
        <p className="absolute font-['Inter:Regular',sans-serif] font-normal leading-[12px] left-0 not-italic text-[#101828] text-[8px] top-0 tracking-[-0.1px] whitespace-nowrap">Поделиться</p>
      </div>
    </div>
  );
}

function Container5() {
  return (
    <div className="h-[28px] relative shrink-0 w-[166px]" data-name="Container">
      <div className="bg-clip-padding border-0 border-[transparent] border-solid content-stretch flex items-center pl-[10px] relative size-full">
        <Paragraph3 />
      </div>
    </div>
  );
}

function Paragraph4() {
  return (
    <div className="h-[12px] relative shrink-0 w-[54.273px]" data-name="Paragraph">
      <div className="bg-clip-padding border-0 border-[transparent] border-solid relative size-full">
        <p className="absolute font-['Inter:Regular',sans-serif] font-normal leading-[12px] left-0 not-italic text-[#101828] text-[8px] top-0 tracking-[-0.1px] whitespace-nowrap">Архивировать</p>
      </div>
    </div>
  );
}

function Container6() {
  return (
    <div className="h-[28px] relative shrink-0 w-[166px]" data-name="Container">
      <div className="bg-clip-padding border-0 border-[transparent] border-solid content-stretch flex items-center pl-[10px] relative size-full">
        <Paragraph4 />
      </div>
    </div>
  );
}

function Paragraph5() {
  return (
    <div className="h-[12px] relative shrink-0 w-[31.648px]" data-name="Paragraph">
      <div className="bg-clip-padding border-0 border-[transparent] border-solid relative size-full">
        <p className="absolute font-['Inter:Regular',sans-serif] font-normal leading-[12px] left-0 not-italic text-[#101828] text-[8px] top-0 tracking-[-0.1px] whitespace-nowrap">Удалить</p>
      </div>
    </div>
  );
}

function Container7() {
  return (
    <div className="h-[28px] relative shrink-0 w-[166px]" data-name="Container">
      <div className="bg-clip-padding border-0 border-[transparent] border-solid content-stretch flex items-center pl-[10px] relative size-full">
        <Paragraph5 />
      </div>
    </div>
  );
}

function Paragraph6() {
  return (
    <div className="h-[12px] relative shrink-0 w-[41.672px]" data-name="Paragraph">
      <div className="bg-clip-padding border-0 border-[transparent] border-solid relative size-full">
        <p className="absolute font-['Inter:Regular',sans-serif] font-normal leading-[12px] left-0 not-italic text-[#101828] text-[8px] top-0 tracking-[-0.1px] whitespace-nowrap">Настройки</p>
      </div>
    </div>
  );
}

function Container8() {
  return (
    <div className="flex-[1_0_0] min-h-px min-w-px relative w-[166px]" data-name="Container">
      <div className="bg-clip-padding border-0 border-[transparent] border-solid content-stretch flex items-center pl-[10px] relative size-full">
        <Paragraph6 />
      </div>
    </div>
  );
}

function Container1() {
  return (
    <div className="bg-white h-[204px] relative rounded-[9.031px] shrink-0 w-[166px]" data-name="Container">
      <div className="bg-clip-padding border-0 border-[transparent] border-solid content-stretch flex flex-col items-start py-[4px] relative size-full">
        <Container2 />
        <Container3 />
        <Container4 />
        <Container5 />
        <Container6 />
        <Container7 />
        <Container8 />
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

export default function ContrastQuiz1VariantA() {
  return (
    <div className="bg-[#f7f8fc] content-stretch flex flex-col items-start overflow-clip pt-[10px] px-[10px] relative rounded-[14.99px] size-full" data-name="ContrastQuiz1VariantA">
      <Container />
    </div>
  );
}