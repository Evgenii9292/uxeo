function Paragraph() {
  return (
    <div className="absolute h-[14px] left-0 top-0 w-[166px]" data-name="Paragraph">
      <p className="absolute font-['Inter:Regular',sans-serif] font-normal leading-[14px] left-0 not-italic text-[#101828] text-[12px] top-[0.5px] tracking-[-0.15px] whitespace-nowrap">Выберите действие</p>
    </div>
  );
}

function Paragraph1() {
  return (
    <div className="h-[12px] relative shrink-0 w-[41.016px]" data-name="Paragraph">
      <div className="bg-clip-padding border-0 border-[transparent] border-solid relative size-full">
        <p className="absolute font-['Inter:Regular',sans-serif] font-normal leading-[12px] left-0 not-italic text-[#5e6169] text-[8px] top-0 tracking-[-0.1px] whitespace-nowrap">Сохранить</p>
      </div>
    </div>
  );
}

function Container2() {
  return (
    <div className="bg-[#e1e3eb] flex-[1_0_0] h-[32px] min-h-px min-w-px relative rounded-[9.031px]" data-name="Container">
      <div className="bg-clip-padding border-0 border-[transparent] border-solid content-stretch flex items-center justify-center relative size-full">
        <Paragraph1 />
      </div>
    </div>
  );
}

function Paragraph2() {
  return (
    <div className="h-[12px] relative shrink-0 w-[31.648px]" data-name="Paragraph">
      <div className="bg-clip-padding border-0 border-[transparent] border-solid relative size-full">
        <p className="absolute font-['Inter:Regular',sans-serif] font-normal leading-[12px] left-0 not-italic text-[#5e6169] text-[8px] top-0 tracking-[-0.1px] whitespace-nowrap">Удалить</p>
      </div>
    </div>
  );
}

function Container3() {
  return (
    <div className="bg-[#e1e3eb] flex-[1_0_0] h-[32px] min-h-px min-w-px relative rounded-[9.031px]" data-name="Container">
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
    <div className="absolute content-stretch flex gap-[6px] h-[32px] items-start left-0 top-[22px] w-[166px]" data-name="Container">
      <Container2 />
      <Container3 />
    </div>
  );
}

function Paragraph3() {
  return (
    <div className="absolute content-stretch flex h-[11px] items-start left-0 top-[62px] w-[166px]" data-name="Paragraph">
      <p className="flex-[1_0_0] font-['Inter:Regular',sans-serif] font-normal leading-[11px] min-h-px min-w-px not-italic relative text-[#5e6169] text-[9px] tracking-[-0.12px]">Важная информация</p>
    </div>
  );
}

function Paragraph4() {
  return (
    <div className="absolute content-stretch flex h-[11px] items-start left-0 top-[81px] w-[166px]" data-name="Paragraph">
      <p className="flex-[1_0_0] font-['Inter:Regular',sans-serif] font-normal leading-[11px] min-h-px min-w-px not-italic relative text-[#5e6169] text-[9px] tracking-[-0.12px]">Дополнительный текст</p>
    </div>
  );
}

function Container5() {
  return (
    <div className="relative rounded-[2px] shrink-0 size-[10px]" data-name="Container">
      <div aria-hidden="true" className="absolute border border-[#5d626c] border-solid inset-0 pointer-events-none rounded-[2px]" />
    </div>
  );
}

function Container6() {
  return (
    <div className="relative rounded-[2px] shrink-0 size-[10px]" data-name="Container">
      <div aria-hidden="true" className="absolute border border-[#8e9199] border-solid inset-0 pointer-events-none rounded-[2px]" />
    </div>
  );
}

function Container7() {
  return (
    <div className="relative rounded-[2px] shrink-0 size-[10px]" data-name="Container">
      <div aria-hidden="true" className="absolute border border-[#8e9199] border-solid inset-0 pointer-events-none rounded-[2px]" />
    </div>
  );
}

function Container4() {
  return (
    <div className="absolute content-stretch flex gap-[4px] h-[10px] items-start justify-center left-[41.5px] top-[201px] w-[83px]" data-name="Container">
      <Container5 />
      <Container6 />
      <Container7 />
    </div>
  );
}

function Container() {
  return (
    <div className="h-[211px] relative shrink-0 w-full" data-name="Container">
      <Paragraph />
      <Container1 />
      <Paragraph3 />
      <Paragraph4 />
      <Container4 />
    </div>
  );
}

function ContrastQuiz5VariantA() {
  return (
    <div className="bg-[#f7f8fc] content-stretch flex flex-col h-[231px] items-start pt-[10px] px-[10px] relative rounded-[14.99px] shrink-0 w-[186px]" data-name="ContrastQuiz5VariantA">
      <Container />
    </div>
  );
}

function Paragraph5() {
  return (
    <div className="absolute h-[14px] left-0 top-0 w-[166px]" data-name="Paragraph">
      <p className="absolute font-['Inter:Regular',sans-serif] font-normal leading-[14px] left-0 not-italic text-[#101828] text-[12px] top-[0.5px] tracking-[-0.15px] whitespace-nowrap">Выберите действие</p>
    </div>
  );
}

function Paragraph6() {
  return (
    <div className="h-[13.5px] relative shrink-0 w-[46.07px]" data-name="Paragraph">
      <div className="bg-clip-padding border-0 border-[transparent] border-solid relative size-full">
        <p className="absolute font-['Inter:Regular',sans-serif] font-normal leading-[13.5px] left-0 not-italic text-[9px] text-white top-[0.5px] tracking-[-0.12px] whitespace-nowrap">Сохранить</p>
      </div>
    </div>
  );
}

function Container10() {
  return (
    <div className="bg-[#364146] flex-[1_0_0] h-[34px] min-h-px min-w-px relative rounded-[9.031px]" data-name="Container">
      <div className="flex flex-row items-center justify-center size-full">
        <div className="bg-clip-padding border-0 border-[transparent] border-solid content-stretch flex items-center justify-center pr-[0.008px] relative size-full">
          <Paragraph6 />
        </div>
      </div>
    </div>
  );
}

function Paragraph7() {
  return (
    <div className="h-[10.5px] relative shrink-0 w-[27.672px]" data-name="Paragraph">
      <div className="bg-clip-padding border-0 border-[transparent] border-solid relative size-full">
        <p className="absolute font-['Inter:Regular',sans-serif] font-normal leading-[10.5px] left-0 not-italic text-[#8e9199] text-[7px] top-0 tracking-[-0.09px] whitespace-nowrap">Удалить</p>
      </div>
    </div>
  );
}

function Container11() {
  return (
    <div className="bg-[#e1e3eb] flex-[1_0_0] h-[34px] min-h-px min-w-px relative rounded-[6px]" data-name="Container">
      <div className="bg-clip-padding border-0 border-[transparent] border-solid content-stretch flex items-center justify-center relative size-full">
        <Paragraph7 />
      </div>
    </div>
  );
}

function Container9() {
  return (
    <div className="absolute content-stretch flex gap-[6px] h-[34px] items-start left-0 top-[22px] w-[166px]" data-name="Container">
      <Container10 />
      <Container11 />
    </div>
  );
}

function Paragraph8() {
  return (
    <div className="absolute content-stretch flex h-[13px] items-start left-0 top-[64px] w-[166px]" data-name="Paragraph">
      <p className="flex-[1_0_0] font-['Inter:Regular',sans-serif] font-normal leading-[13px] min-h-px min-w-px not-italic relative text-[#101828] text-[11px] tracking-[-0.14px]">Важная информация</p>
    </div>
  );
}

function Paragraph9() {
  return (
    <div className="absolute content-stretch flex h-[10px] items-start left-0 top-[85px] w-[166px]" data-name="Paragraph">
      <p className="flex-[1_0_0] font-['Inter:Regular',sans-serif] font-normal leading-[10px] min-h-px min-w-px not-italic relative text-[#8e9199] text-[8px] tracking-[-0.1px]">Дополнительный текст</p>
    </div>
  );
}

function Container13() {
  return <div className="bg-[#364146] rounded-[2.2px] shrink-0 size-[11px]" data-name="Container" />;
}

function Container14() {
  return (
    <div className="relative rounded-[2.2px] shrink-0 size-[11px]" data-name="Container">
      <div aria-hidden="true" className="absolute border-[#8e9199] border-[1.1px] border-solid inset-0 pointer-events-none rounded-[2.2px]" />
    </div>
  );
}

function Container15() {
  return (
    <div className="relative rounded-[2.2px] shrink-0 size-[11px]" data-name="Container">
      <div aria-hidden="true" className="absolute border-[#8e9199] border-[1.1px] border-solid inset-0 pointer-events-none rounded-[2.2px]" />
    </div>
  );
}

function Container12() {
  return (
    <div className="absolute content-stretch flex gap-[4.4px] h-[11px] items-start justify-center left-[37.35px] top-[200px] w-[91.3px]" data-name="Container">
      <Container13 />
      <Container14 />
      <Container15 />
    </div>
  );
}

function Container8() {
  return (
    <div className="h-[211px] relative shrink-0 w-full" data-name="Container">
      <Paragraph5 />
      <Container9 />
      <Paragraph8 />
      <Paragraph9 />
      <Container12 />
    </div>
  );
}

function ContrastQuiz5VariantB() {
  return (
    <div className="bg-[#f7f8fc] content-stretch flex flex-col h-[231px] items-start pt-[10px] px-[10px] relative rounded-[14.99px] shrink-0 w-[186px]" data-name="ContrastQuiz5VariantB">
      <Container8 />
    </div>
  );
}

export default function Frame() {
  return (
    <div className="content-stretch flex gap-[61px] items-center relative size-full">
      <ContrastQuiz5VariantA />
      <ContrastQuiz5VariantB />
    </div>
  );
}