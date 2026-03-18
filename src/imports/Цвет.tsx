function Paragraph() {
  return (
    <div className="absolute h-[21px] left-0 top-[8px] w-[9.297px]" data-name="Paragraph">
      <p className="absolute font-['Inter:Regular',sans-serif] font-normal leading-[21px] left-0 not-italic text-[#364146] text-[14px] top-0 tracking-[-0.17px] whitespace-nowrap">A</p>
    </div>
  );
}

function Paragraph1() {
  return (
    <div className="h-[15px] relative shrink-0 w-[166px]" data-name="Paragraph">
      <div className="bg-clip-padding border-0 border-[transparent] border-solid relative size-full">
        <p className="absolute font-['Inter:Regular',sans-serif] font-normal leading-[15px] left-0 not-italic text-[#101828] text-[10px] top-[0.5px] tracking-[-0.13px] whitespace-nowrap">Регистрация</p>
      </div>
    </div>
  );
}

function Paragraph2() {
  return (
    <div className="h-[10.5px] relative shrink-0 w-[166px]" data-name="Paragraph">
      <div className="bg-clip-padding border-0 border-[transparent] border-solid relative size-full">
        <p className="absolute font-['Inter:Regular',sans-serif] font-normal leading-[10.5px] left-0 not-italic text-[#101828] text-[7px] top-0 tracking-[-0.09px] whitespace-nowrap">Email</p>
      </div>
    </div>
  );
}

function Paragraph3() {
  return (
    <div className="h-[10.5px] relative shrink-0 w-full" data-name="Paragraph">
      <p className="absolute font-['Inter:Regular',sans-serif] font-normal leading-[10.5px] left-0 not-italic text-[#8e9199] text-[7px] top-0 tracking-[-0.09px] whitespace-nowrap">email@example.com</p>
    </div>
  );
}

function Container3() {
  return (
    <div className="bg-[#f7f8fc] flex-[1_0_0] min-h-px min-w-px relative rounded-[6px] w-[166px]" data-name="Container">
      <div className="bg-clip-padding border-0 border-[transparent] border-solid content-stretch flex flex-col items-start pt-[6px] px-[12px] relative size-full">
        <Paragraph3 />
      </div>
    </div>
  );
}

function Container2() {
  return (
    <div className="h-[37px] relative shrink-0 w-[166px]" data-name="Container">
      <div className="bg-clip-padding border-0 border-[transparent] border-solid content-stretch flex flex-col gap-[4px] items-start relative size-full">
        <Paragraph2 />
        <Container3 />
      </div>
    </div>
  );
}

function Paragraph4() {
  return (
    <div className="h-[13.5px] relative shrink-0 w-full" data-name="Paragraph">
      <p className="-translate-x-1/2 absolute font-['Inter:Regular',sans-serif] font-normal leading-[13.5px] left-[71.31px] not-italic text-[9px] text-center text-white top-[0.5px] tracking-[-0.12px] whitespace-nowrap">Continue</p>
    </div>
  );
}

function Container5() {
  return (
    <div className="bg-[#3b82f6] flex-[1_0_0] min-h-px min-w-px relative rounded-[6px] w-[166px]" data-name="Container">
      <div className="bg-clip-padding border-0 border-[transparent] border-solid content-stretch flex flex-col items-start pt-[8px] px-[12px] relative size-full">
        <Paragraph4 />
      </div>
    </div>
  );
}

function Paragraph5() {
  return (
    <div className="h-[12px] relative shrink-0 w-full" data-name="Paragraph">
      <p className="-translate-x-1/2 absolute font-['Inter:Regular',sans-serif] font-normal leading-[12px] left-[71.28px] not-italic text-[8px] text-center text-white top-0 tracking-[-0.1px] whitespace-nowrap">Cancel</p>
    </div>
  );
}

function Container6() {
  return (
    <div className="bg-[#3b82f6] h-[24px] relative rounded-[6px] shrink-0 w-[166px]" data-name="Container">
      <div className="bg-clip-padding border-0 border-[transparent] border-solid content-stretch flex flex-col items-start pt-[6px] px-[12px] relative size-full">
        <Paragraph5 />
      </div>
    </div>
  );
}

function Container4() {
  return (
    <div className="h-[57.5px] relative shrink-0 w-[166px]" data-name="Container">
      <div className="bg-clip-padding border-0 border-[transparent] border-solid content-stretch flex flex-col gap-[4px] items-start relative size-full">
        <Container5 />
        <Container6 />
      </div>
    </div>
  );
}

function Container1() {
  return (
    <div className="content-stretch flex flex-col gap-[12px] h-[211px] items-start justify-center py-[38.75px] relative shrink-0 w-full" data-name="Container">
      <Paragraph1 />
      <Container2 />
      <Container4 />
    </div>
  );
}

function ColorQuiz1VariantA() {
  return (
    <div className="absolute bg-white content-stretch flex flex-col h-[231px] items-start left-[21.3px] overflow-clip pt-[10px] px-[10px] rounded-[14.99px] top-0 w-[186px]" data-name="ColorQuiz1VariantA">
      <Container1 />
    </div>
  );
}

function Container() {
  return (
    <div className="absolute h-[231px] left-0 top-[131px] w-[207.297px]" data-name="Container">
      <Paragraph />
      <ColorQuiz1VariantA />
    </div>
  );
}

function Paragraph6() {
  return (
    <div className="absolute h-[21px] left-0 top-[8px] w-[8.945px]" data-name="Paragraph">
      <p className="absolute font-['Inter:Regular',sans-serif] font-normal leading-[21px] left-0 not-italic text-[#22c55e] text-[14px] top-0 tracking-[-0.17px] whitespace-nowrap">B</p>
    </div>
  );
}

function Paragraph7() {
  return (
    <div className="h-[15px] relative shrink-0 w-[166px]" data-name="Paragraph">
      <div className="bg-clip-padding border-0 border-[transparent] border-solid relative size-full">
        <p className="absolute font-['Inter:Regular',sans-serif] font-normal leading-[15px] left-0 not-italic text-[#101828] text-[10px] top-[0.5px] tracking-[-0.13px] whitespace-nowrap">Регистрация</p>
      </div>
    </div>
  );
}

function Paragraph8() {
  return (
    <div className="h-[10.5px] relative shrink-0 w-[166px]" data-name="Paragraph">
      <div className="bg-clip-padding border-0 border-[transparent] border-solid relative size-full">
        <p className="absolute font-['Inter:Regular',sans-serif] font-normal leading-[10.5px] left-0 not-italic text-[#101828] text-[7px] top-0 tracking-[-0.09px] whitespace-nowrap">Email</p>
      </div>
    </div>
  );
}

function Paragraph9() {
  return (
    <div className="h-[10.5px] relative shrink-0 w-full" data-name="Paragraph">
      <p className="absolute font-['Inter:Regular',sans-serif] font-normal leading-[10.5px] left-0 not-italic text-[#8e9199] text-[7px] top-0 tracking-[-0.09px] whitespace-nowrap">email@example.com</p>
    </div>
  );
}

function Container10() {
  return (
    <div className="bg-[#f7f8fc] flex-[1_0_0] min-h-px min-w-px relative rounded-[6px] w-[166px]" data-name="Container">
      <div className="bg-clip-padding border-0 border-[transparent] border-solid content-stretch flex flex-col items-start pt-[6px] px-[12px] relative size-full">
        <Paragraph9 />
      </div>
    </div>
  );
}

function Container9() {
  return (
    <div className="h-[37px] relative shrink-0 w-[166px]" data-name="Container">
      <div className="bg-clip-padding border-0 border-[transparent] border-solid content-stretch flex flex-col gap-[4px] items-start relative size-full">
        <Paragraph8 />
        <Container10 />
      </div>
    </div>
  );
}

function Paragraph10() {
  return (
    <div className="h-[13.5px] relative shrink-0 w-full" data-name="Paragraph">
      <p className="-translate-x-1/2 absolute font-['Inter:Regular',sans-serif] font-normal leading-[13.5px] left-[71.31px] not-italic text-[9px] text-center text-white top-[0.5px] tracking-[-0.12px] whitespace-nowrap">Continue</p>
    </div>
  );
}

function Container12() {
  return (
    <div className="bg-[#3b82f6] flex-[1_0_0] min-h-px min-w-px relative rounded-[6px] w-[166px]" data-name="Container">
      <div className="bg-clip-padding border-0 border-[transparent] border-solid content-stretch flex flex-col items-start pt-[8px] px-[12px] relative size-full">
        <Paragraph10 />
      </div>
    </div>
  );
}

function Paragraph11() {
  return (
    <div className="h-[12px] relative shrink-0 w-full" data-name="Paragraph">
      <p className="-translate-x-1/2 absolute font-['Inter:Regular',sans-serif] font-normal leading-[12px] left-[71.28px] not-italic text-[#364146] text-[8px] text-center top-0 tracking-[-0.1px] whitespace-nowrap">Cancel</p>
    </div>
  );
}

function Container13() {
  return (
    <div className="bg-[#f7f8fc] h-[24px] relative rounded-[6px] shrink-0 w-[166px]" data-name="Container">
      <div className="bg-clip-padding border-0 border-[transparent] border-solid content-stretch flex flex-col items-start pt-[6px] px-[12px] relative size-full">
        <Paragraph11 />
      </div>
    </div>
  );
}

function Container11() {
  return (
    <div className="h-[57.5px] relative shrink-0 w-[166px]" data-name="Container">
      <div className="bg-clip-padding border-0 border-[transparent] border-solid content-stretch flex flex-col gap-[4px] items-start relative size-full">
        <Container12 />
        <Container13 />
      </div>
    </div>
  );
}

function Container8() {
  return (
    <div className="content-stretch flex flex-col gap-[12px] h-[211px] items-start justify-center py-[38.75px] relative shrink-0 w-full" data-name="Container">
      <Paragraph7 />
      <Container9 />
      <Container11 />
    </div>
  );
}

function ColorQuiz1VariantB() {
  return (
    <div className="absolute bg-white content-stretch flex flex-col h-[231px] items-start left-[20.95px] overflow-clip pt-[10px] px-[10px] rounded-[14.99px] top-0 w-[186px]" data-name="ColorQuiz1VariantB">
      <Container8 />
    </div>
  );
}

function Container7() {
  return (
    <div className="absolute h-[231px] left-[247.3px] top-[131px] w-[206.945px]" data-name="Container">
      <Paragraph6 />
      <ColorQuiz1VariantB />
    </div>
  );
}

function Paragraph12() {
  return (
    <div className="absolute h-[21px] left-0 top-[8px] w-[9.297px]" data-name="Paragraph">
      <p className="absolute font-['Inter:Regular',sans-serif] font-normal leading-[21px] left-0 not-italic text-[#364146] text-[14px] top-0 tracking-[-0.17px] whitespace-nowrap">A</p>
    </div>
  );
}

function Paragraph13() {
  return (
    <div className="h-[15px] relative shrink-0 w-[166px]" data-name="Paragraph">
      <div className="bg-clip-padding border-0 border-[transparent] border-solid relative size-full">
        <p className="absolute font-['Inter:Regular',sans-serif] font-normal leading-[15px] left-0 not-italic text-[#101828] text-[10px] top-[0.5px] tracking-[-0.13px] whitespace-nowrap">Вход</p>
      </div>
    </div>
  );
}

function Paragraph14() {
  return (
    <div className="h-[10.5px] relative shrink-0 w-[166px]" data-name="Paragraph">
      <div className="bg-clip-padding border-0 border-[transparent] border-solid relative size-full">
        <p className="absolute font-['Inter:Regular',sans-serif] font-normal leading-[10.5px] left-0 not-italic text-[#101828] text-[7px] top-0 tracking-[-0.09px] whitespace-nowrap">Email</p>
      </div>
    </div>
  );
}

function Paragraph15() {
  return (
    <div className="h-[10.5px] relative shrink-0 w-full" data-name="Paragraph">
      <p className="absolute font-['Inter:Regular',sans-serif] font-normal leading-[10.5px] left-0 not-italic text-[#8e9199] text-[7px] top-0 tracking-[-0.09px] whitespace-nowrap">email@example</p>
    </div>
  );
}

function Container17() {
  return (
    <div className="bg-[#f7f8fc] flex-[1_0_0] min-h-px min-w-px relative rounded-[6px] w-[166px]" data-name="Container">
      <div className="bg-clip-padding border-0 border-[transparent] border-solid content-stretch flex flex-col items-start pt-[6px] px-[12px] relative size-full">
        <Paragraph15 />
      </div>
    </div>
  );
}

function Paragraph16() {
  return (
    <div className="h-[9px] relative shrink-0 w-[166px]" data-name="Paragraph">
      <div className="bg-clip-padding border-0 border-[transparent] border-solid relative size-full">
        <p className="absolute font-['Inter:Regular',sans-serif] font-normal leading-[9px] left-0 not-italic text-[#8e9199] text-[6px] top-[-0.5px] tracking-[-0.08px] whitespace-nowrap">Неверный email</p>
      </div>
    </div>
  );
}

function Container16() {
  return (
    <div className="h-[50px] relative shrink-0 w-[166px]" data-name="Container">
      <div className="bg-clip-padding border-0 border-[transparent] border-solid content-stretch flex flex-col gap-[4px] items-start relative size-full">
        <Paragraph14 />
        <Container17 />
        <Paragraph16 />
      </div>
    </div>
  );
}

function Container15() {
  return (
    <div className="content-stretch flex flex-col gap-[12px] h-[211px] items-start justify-center py-[67px] relative shrink-0 w-full" data-name="Container">
      <Paragraph13 />
      <Container16 />
    </div>
  );
}

function ColorQuiz2VariantA() {
  return (
    <div className="absolute bg-white content-stretch flex flex-col h-[231px] items-start left-[21.3px] overflow-clip pt-[10px] px-[10px] rounded-[14.99px] top-0 w-[186px]" data-name="ColorQuiz2VariantA">
      <Container15 />
    </div>
  );
}

function Container14() {
  return (
    <div className="absolute h-[231px] left-0 top-[436px] w-[207.297px]" data-name="Container">
      <Paragraph12 />
      <ColorQuiz2VariantA />
    </div>
  );
}

function Paragraph17() {
  return (
    <div className="absolute h-[21px] left-0 top-[8px] w-[8.945px]" data-name="Paragraph">
      <p className="absolute font-['Inter:Regular',sans-serif] font-normal leading-[21px] left-0 not-italic text-[#22c55e] text-[14px] top-0 tracking-[-0.17px] whitespace-nowrap">B</p>
    </div>
  );
}

function Paragraph18() {
  return (
    <div className="h-[15px] relative shrink-0 w-[166px]" data-name="Paragraph">
      <div className="bg-clip-padding border-0 border-[transparent] border-solid relative size-full">
        <p className="absolute font-['Inter:Regular',sans-serif] font-normal leading-[15px] left-0 not-italic text-[#101828] text-[10px] top-[0.5px] tracking-[-0.13px] whitespace-nowrap">Вход</p>
      </div>
    </div>
  );
}

function Paragraph19() {
  return (
    <div className="h-[10.5px] relative shrink-0 w-[166px]" data-name="Paragraph">
      <div className="bg-clip-padding border-0 border-[transparent] border-solid relative size-full">
        <p className="absolute font-['Inter:Regular',sans-serif] font-normal leading-[10.5px] left-0 not-italic text-[#101828] text-[7px] top-0 tracking-[-0.09px] whitespace-nowrap">Email</p>
      </div>
    </div>
  );
}

function Paragraph20() {
  return (
    <div className="h-[10.5px] relative shrink-0 w-full" data-name="Paragraph">
      <p className="absolute font-['Inter:Regular',sans-serif] font-normal leading-[10.5px] left-0 not-italic text-[#8e9199] text-[7px] top-0 tracking-[-0.09px] whitespace-nowrap">email@example</p>
    </div>
  );
}

function Container21() {
  return (
    <div className="bg-[#f7f8fc] flex-[1_0_0] min-h-px min-w-px relative rounded-[6px] w-[166px]" data-name="Container">
      <div aria-hidden="true" className="absolute border border-[#ef4444] border-solid inset-0 pointer-events-none rounded-[6px]" />
      <div className="bg-clip-padding border-0 border-[transparent] border-solid content-stretch flex flex-col items-start pb-px pt-[7px] px-[13px] relative size-full">
        <Paragraph20 />
      </div>
    </div>
  );
}

function Paragraph21() {
  return (
    <div className="h-[9px] relative shrink-0 w-[5.977px]" data-name="Paragraph">
      <div className="bg-clip-padding border-0 border-[transparent] border-solid relative size-full">
        <p className="absolute font-['Inter:Regular',sans-serif] font-normal leading-[9px] left-0 not-italic text-[#ef4444] text-[6px] top-[-0.5px] tracking-[-0.08px] whitespace-nowrap">⚠</p>
      </div>
    </div>
  );
}

function Paragraph22() {
  return (
    <div className="h-[9px] relative shrink-0 w-[45.539px]" data-name="Paragraph">
      <div className="bg-clip-padding border-0 border-[transparent] border-solid relative size-full">
        <p className="absolute font-['Inter:Regular',sans-serif] font-normal leading-[9px] left-0 not-italic text-[#ef4444] text-[6px] top-[-0.5px] tracking-[-0.08px] whitespace-nowrap">Неверный email</p>
      </div>
    </div>
  );
}

function Container22() {
  return (
    <div className="h-[9px] relative shrink-0 w-[166px]" data-name="Container">
      <div className="bg-clip-padding border-0 border-[transparent] border-solid content-stretch flex gap-[4px] items-center relative size-full">
        <Paragraph21 />
        <Paragraph22 />
      </div>
    </div>
  );
}

function Container20() {
  return (
    <div className="h-[52px] relative shrink-0 w-[166px]" data-name="Container">
      <div className="bg-clip-padding border-0 border-[transparent] border-solid content-stretch flex flex-col gap-[4px] items-start relative size-full">
        <Paragraph19 />
        <Container21 />
        <Container22 />
      </div>
    </div>
  );
}

function Container19() {
  return (
    <div className="content-stretch flex flex-col gap-[12px] h-[211px] items-start justify-center py-[66px] relative shrink-0 w-full" data-name="Container">
      <Paragraph18 />
      <Container20 />
    </div>
  );
}

function ColorQuiz2VariantB() {
  return (
    <div className="absolute bg-white content-stretch flex flex-col h-[231px] items-start left-[20.95px] overflow-clip pt-[10px] px-[10px] rounded-[14.99px] top-0 w-[186px]" data-name="ColorQuiz2VariantB">
      <Container19 />
    </div>
  );
}

function Container18() {
  return (
    <div className="absolute h-[231px] left-[247.3px] top-[436px] w-[206.945px]" data-name="Container">
      <Paragraph17 />
      <ColorQuiz2VariantB />
    </div>
  );
}

function Paragraph23() {
  return (
    <div className="absolute h-[21px] left-0 top-[8px] w-[9.297px]" data-name="Paragraph">
      <p className="absolute font-['Inter:Regular',sans-serif] font-normal leading-[21px] left-0 not-italic text-[#364146] text-[14px] top-0 tracking-[-0.17px] whitespace-nowrap">A</p>
    </div>
  );
}

function Paragraph24() {
  return (
    <div className="h-[12px] relative shrink-0 w-full" data-name="Paragraph">
      <p className="-translate-x-1/2 absolute font-['Inter:Regular',sans-serif] font-normal leading-[12px] left-[70.51px] not-italic text-[8px] text-center text-white top-0 tracking-[-0.1px] whitespace-nowrap">Действие 1</p>
    </div>
  );
}

function Container25() {
  return (
    <div className="bg-[#ef4444] h-[24px] relative rounded-[6px] shrink-0 w-[166px]" data-name="Container">
      <div className="bg-clip-padding border-0 border-[transparent] border-solid content-stretch flex flex-col items-start pt-[6px] px-[12px] relative size-full">
        <Paragraph24 />
      </div>
    </div>
  );
}

function Paragraph25() {
  return (
    <div className="h-[12px] relative shrink-0 w-full" data-name="Paragraph">
      <p className="-translate-x-1/2 absolute font-['Inter:Regular',sans-serif] font-normal leading-[12px] left-[71.45px] not-italic text-[8px] text-center text-white top-0 tracking-[-0.1px] whitespace-nowrap">Действие 2</p>
    </div>
  );
}

function Container26() {
  return (
    <div className="bg-[#8b5cf6] h-[24px] relative rounded-[6px] shrink-0 w-[166px]" data-name="Container">
      <div className="bg-clip-padding border-0 border-[transparent] border-solid content-stretch flex flex-col items-start pt-[6px] px-[12px] relative size-full">
        <Paragraph25 />
      </div>
    </div>
  );
}

function Paragraph26() {
  return (
    <div className="h-[12px] relative shrink-0 w-full" data-name="Paragraph">
      <p className="-translate-x-1/2 absolute font-['Inter:Regular',sans-serif] font-normal leading-[12px] left-[71.32px] not-italic text-[8px] text-center text-white top-0 tracking-[-0.1px] whitespace-nowrap">Действие 3</p>
    </div>
  );
}

function Container27() {
  return (
    <div className="bg-[#22c55e] h-[24px] relative rounded-[6px] shrink-0 w-[166px]" data-name="Container">
      <div className="bg-clip-padding border-0 border-[transparent] border-solid content-stretch flex flex-col items-start pt-[6px] px-[12px] relative size-full">
        <Paragraph26 />
      </div>
    </div>
  );
}

function Container29() {
  return <div className="bg-[#fbbf24] rounded-[4px] shrink-0 size-[30px]" data-name="Container" />;
}

function Container30() {
  return <div className="bg-[#3b82f6] rounded-[4px] shrink-0 size-[30px]" data-name="Container" />;
}

function Container31() {
  return <div className="bg-[#ec4899] rounded-[4px] shrink-0 size-[30px]" data-name="Container" />;
}

function Container28() {
  return (
    <div className="h-[30px] relative shrink-0 w-[166px]" data-name="Container">
      <div className="bg-clip-padding border-0 border-[transparent] border-solid content-stretch flex gap-[4px] items-start relative size-full">
        <Container29 />
        <Container30 />
        <Container31 />
      </div>
    </div>
  );
}

function Paragraph27() {
  return (
    <div className="h-[9px] relative shrink-0 w-[166px]" data-name="Paragraph">
      <div className="bg-clip-padding border-0 border-[transparent] border-solid relative size-full">
        <p className="absolute font-['Inter:Regular',sans-serif] font-normal leading-[9px] left-0 not-italic text-[#ef4444] text-[6px] top-[-0.5px] tracking-[-0.08px] whitespace-nowrap">⚠ Хаотичный интерфейс</p>
      </div>
    </div>
  );
}

function Container24() {
  return (
    <div className="content-stretch flex flex-col gap-[6px] h-[211px] items-start justify-center py-[38px] relative shrink-0 w-full" data-name="Container">
      <Container25 />
      <Container26 />
      <Container27 />
      <Container28 />
      <Paragraph27 />
    </div>
  );
}

function ColorQuiz3VariantA() {
  return (
    <div className="absolute bg-white content-stretch flex flex-col h-[231px] items-start left-[21.3px] overflow-clip pt-[10px] px-[10px] rounded-[14.99px] top-0 w-[186px]" data-name="ColorQuiz3VariantA">
      <Container24 />
    </div>
  );
}

function Container23() {
  return (
    <div className="absolute h-[231px] left-0 top-[741px] w-[207.297px]" data-name="Container">
      <Paragraph23 />
      <ColorQuiz3VariantA />
    </div>
  );
}

function Paragraph28() {
  return (
    <div className="absolute h-[21px] left-0 top-[8px] w-[8.945px]" data-name="Paragraph">
      <p className="absolute font-['Inter:Regular',sans-serif] font-normal leading-[21px] left-0 not-italic text-[#22c55e] text-[14px] top-0 tracking-[-0.17px] whitespace-nowrap">B</p>
    </div>
  );
}

function Paragraph29() {
  return (
    <div className="h-[13.5px] relative shrink-0 w-full" data-name="Paragraph">
      <p className="-translate-x-1/2 absolute font-['Inter:Regular',sans-serif] font-normal leading-[13.5px] left-[71.16px] not-italic text-[9px] text-center text-white top-[0.5px] tracking-[-0.12px] whitespace-nowrap">Главное действие</p>
    </div>
  );
}

function Container34() {
  return (
    <div className="bg-[#3b82f6] h-[29.5px] relative rounded-[6px] shrink-0 w-[166px]" data-name="Container">
      <div className="bg-clip-padding border-0 border-[transparent] border-solid content-stretch flex flex-col items-start pt-[8px] px-[12px] relative size-full">
        <Paragraph29 />
      </div>
    </div>
  );
}

function Paragraph30() {
  return (
    <div className="h-[12px] relative shrink-0 w-full" data-name="Paragraph">
      <p className="-translate-x-1/2 absolute font-['Inter:Regular',sans-serif] font-normal leading-[12px] left-[71.45px] not-italic text-[#364146] text-[8px] text-center top-0 tracking-[-0.1px] whitespace-nowrap">Действие 2</p>
    </div>
  );
}

function Container35() {
  return (
    <div className="bg-[#f7f8fc] h-[24px] relative rounded-[6px] shrink-0 w-[166px]" data-name="Container">
      <div className="bg-clip-padding border-0 border-[transparent] border-solid content-stretch flex flex-col items-start pt-[6px] px-[12px] relative size-full">
        <Paragraph30 />
      </div>
    </div>
  );
}

function Paragraph31() {
  return (
    <div className="h-[12px] relative shrink-0 w-full" data-name="Paragraph">
      <p className="-translate-x-1/2 absolute font-['Inter:Regular',sans-serif] font-normal leading-[12px] left-[71.32px] not-italic text-[#364146] text-[8px] text-center top-0 tracking-[-0.1px] whitespace-nowrap">Действие 3</p>
    </div>
  );
}

function Container36() {
  return (
    <div className="bg-[#f7f8fc] h-[24px] relative rounded-[6px] shrink-0 w-[166px]" data-name="Container">
      <div className="bg-clip-padding border-0 border-[transparent] border-solid content-stretch flex flex-col items-start pt-[6px] px-[12px] relative size-full">
        <Paragraph31 />
      </div>
    </div>
  );
}

function Container38() {
  return <div className="bg-[#f7f8fc] rounded-[4px] shrink-0 size-[30px]" data-name="Container" />;
}

function Container39() {
  return <div className="bg-[#f7f8fc] rounded-[4px] shrink-0 size-[30px]" data-name="Container" />;
}

function Container40() {
  return <div className="bg-[#f7f8fc] rounded-[4px] shrink-0 size-[30px]" data-name="Container" />;
}

function Container37() {
  return (
    <div className="h-[30px] relative shrink-0 w-[166px]" data-name="Container">
      <div className="bg-clip-padding border-0 border-[transparent] border-solid content-stretch flex gap-[4px] items-start relative size-full">
        <Container38 />
        <Container39 />
        <Container40 />
      </div>
    </div>
  );
}

function Paragraph32() {
  return (
    <div className="h-[9px] relative shrink-0 w-[166px]" data-name="Paragraph">
      <div className="bg-clip-padding border-0 border-[transparent] border-solid relative size-full">
        <p className="absolute font-['Inter:Regular',sans-serif] font-normal leading-[9px] left-0 not-italic text-[#22c55e] text-[6px] top-[-0.5px] tracking-[-0.08px] whitespace-nowrap">✓ Единый интерфейс</p>
      </div>
    </div>
  );
}

function Container33() {
  return (
    <div className="content-stretch flex flex-col gap-[6px] h-[211px] items-start justify-center py-[35.25px] relative shrink-0 w-full" data-name="Container">
      <Container34 />
      <Container35 />
      <Container36 />
      <Container37 />
      <Paragraph32 />
    </div>
  );
}

function ColorQuiz3VariantB() {
  return (
    <div className="absolute bg-white content-stretch flex flex-col h-[231px] items-start left-[20.95px] overflow-clip pt-[10px] px-[10px] rounded-[14.99px] top-0 w-[186px]" data-name="ColorQuiz3VariantB">
      <Container33 />
    </div>
  );
}

function Container32() {
  return (
    <div className="absolute h-[231px] left-[247.3px] top-[741px] w-[206.945px]" data-name="Container">
      <Paragraph28 />
      <ColorQuiz3VariantB />
    </div>
  );
}

function Paragraph33() {
  return (
    <div className="absolute h-[21px] left-0 top-[8px] w-[9.297px]" data-name="Paragraph">
      <p className="absolute font-['Inter:Regular',sans-serif] font-normal leading-[21px] left-0 not-italic text-[#364146] text-[14px] top-0 tracking-[-0.17px] whitespace-nowrap">A</p>
    </div>
  );
}

function Paragraph34() {
  return (
    <div className="h-[10.5px] relative shrink-0 w-full" data-name="Paragraph">
      <p className="absolute font-['Inter:Regular',sans-serif] font-normal leading-[10.5px] left-0 not-italic text-[7px] text-white top-0 tracking-[-0.09px] whitespace-nowrap">Карточка 1</p>
    </div>
  );
}

function Container43() {
  return (
    <div className="absolute bg-[#ef4444] content-stretch flex flex-col h-[22.5px] items-start left-0 pt-[6px] px-[6px] rounded-[6px] top-0 w-[166px]" data-name="Container">
      <Paragraph34 />
    </div>
  );
}

function Paragraph35() {
  return (
    <div className="h-[10.5px] relative shrink-0 w-full" data-name="Paragraph">
      <p className="absolute font-['Inter:Regular',sans-serif] font-normal leading-[10.5px] left-0 not-italic text-[7px] text-white top-0 tracking-[-0.09px] whitespace-nowrap">Карточка 2</p>
    </div>
  );
}

function Container44() {
  return (
    <div className="absolute bg-[#8b5cf6] content-stretch flex flex-col h-[22.5px] items-start left-0 pt-[6px] px-[6px] rounded-[6px] top-[28.5px] w-[166px]" data-name="Container">
      <Paragraph35 />
    </div>
  );
}

function Paragraph36() {
  return (
    <div className="h-[10.5px] relative shrink-0 w-full" data-name="Paragraph">
      <p className="absolute font-['Inter:Regular',sans-serif] font-normal leading-[10.5px] left-0 not-italic text-[7px] text-white top-0 tracking-[-0.09px] whitespace-nowrap">Карточка 3</p>
    </div>
  );
}

function Container45() {
  return (
    <div className="absolute bg-[#22c55e] content-stretch flex flex-col h-[22.5px] items-start left-0 pt-[6px] px-[6px] rounded-[6px] top-[57px] w-[166px]" data-name="Container">
      <Paragraph36 />
    </div>
  );
}

function Paragraph37() {
  return (
    <div className="h-[9px] relative shrink-0 w-full" data-name="Paragraph">
      <p className="-translate-x-1/2 absolute font-['Inter:Regular',sans-serif] font-normal leading-[9px] left-[32.66px] not-italic text-[6px] text-center text-white top-[-0.5px] tracking-[-0.08px] whitespace-nowrap">Btn 1</p>
    </div>
  );
}

function Container47() {
  return (
    <div className="bg-[#fbbf24] flex-[1_0_0] h-[17px] min-h-px min-w-px relative rounded-[4px]" data-name="Container">
      <div className="bg-clip-padding border-0 border-[transparent] border-solid content-stretch flex flex-col items-start pt-[4px] px-[8px] relative size-full">
        <Paragraph37 />
      </div>
    </div>
  );
}

function Paragraph38() {
  return (
    <div className="h-[9px] relative shrink-0 w-full" data-name="Paragraph">
      <p className="-translate-x-1/2 absolute font-['Inter:Regular',sans-serif] font-normal leading-[9px] left-[32.74px] not-italic text-[6px] text-center text-white top-[-0.5px] tracking-[-0.08px] whitespace-nowrap">Btn 2</p>
    </div>
  );
}

function Container48() {
  return (
    <div className="bg-[#ec4899] flex-[1_0_0] h-[17px] min-h-px min-w-px relative rounded-[4px]" data-name="Container">
      <div className="bg-clip-padding border-0 border-[transparent] border-solid content-stretch flex flex-col items-start pt-[4px] px-[8px] relative size-full">
        <Paragraph38 />
      </div>
    </div>
  );
}

function Container46() {
  return (
    <div className="absolute content-stretch flex gap-[4px] h-[17px] items-start left-0 top-[85.5px] w-[166px]" data-name="Container">
      <Container47 />
      <Container48 />
    </div>
  );
}

function Paragraph39() {
  return (
    <div className="absolute h-[9px] left-0 top-[202px] w-[166px]" data-name="Paragraph">
      <p className="absolute font-['Inter:Regular',sans-serif] font-normal leading-[9px] left-0 not-italic text-[#ef4444] text-[6px] top-[-0.5px] tracking-[-0.08px] whitespace-nowrap">⚠ Много визуального шума</p>
    </div>
  );
}

function Container42() {
  return (
    <div className="h-[211px] relative shrink-0 w-full" data-name="Container">
      <Container43 />
      <Container44 />
      <Container45 />
      <Container46 />
      <Paragraph39 />
    </div>
  );
}

function ColorQuiz4VariantA() {
  return (
    <div className="absolute bg-white content-stretch flex flex-col h-[231px] items-start left-[21.3px] overflow-clip pt-[10px] px-[10px] rounded-[14.99px] top-0 w-[186px]" data-name="ColorQuiz4VariantA">
      <Container42 />
    </div>
  );
}

function Container41() {
  return (
    <div className="absolute h-[231px] left-0 top-[1046px] w-[207.297px]" data-name="Container">
      <Paragraph33 />
      <ColorQuiz4VariantA />
    </div>
  );
}

function Paragraph40() {
  return (
    <div className="absolute h-[21px] left-0 top-[8px] w-[8.945px]" data-name="Paragraph">
      <p className="absolute font-['Inter:Regular',sans-serif] font-normal leading-[21px] left-0 not-italic text-[#22c55e] text-[14px] top-0 tracking-[-0.17px] whitespace-nowrap">B</p>
    </div>
  );
}

function Paragraph41() {
  return (
    <div className="h-[12px] relative shrink-0 w-full" data-name="Paragraph">
      <p className="absolute font-['Inter:Regular',sans-serif] font-normal leading-[12px] left-0 not-italic text-[#101828] text-[8px] top-0 tracking-[-0.1px] whitespace-nowrap">Карточка 1</p>
    </div>
  );
}

function Paragraph42() {
  return (
    <div className="h-[9px] relative shrink-0 w-full" data-name="Paragraph">
      <p className="absolute font-['Inter:Regular',sans-serif] font-normal leading-[9px] left-0 not-italic text-[#8e9199] text-[6px] top-[-0.5px] tracking-[-0.08px] whitespace-nowrap">Информация</p>
    </div>
  );
}

function Container51() {
  return (
    <div className="absolute bg-[#f7f8fc] content-stretch flex flex-col gap-[2px] h-[39px] items-start left-0 pt-[8px] px-[8px] rounded-[6px] top-0 w-[166px]" data-name="Container">
      <Paragraph41 />
      <Paragraph42 />
    </div>
  );
}

function Paragraph43() {
  return (
    <div className="h-[12px] relative shrink-0 w-full" data-name="Paragraph">
      <p className="absolute font-['Inter:Regular',sans-serif] font-normal leading-[12px] left-0 not-italic text-[#101828] text-[8px] top-0 tracking-[-0.1px] whitespace-nowrap">Карточка 2</p>
    </div>
  );
}

function Paragraph44() {
  return (
    <div className="h-[9px] relative shrink-0 w-full" data-name="Paragraph">
      <p className="absolute font-['Inter:Regular',sans-serif] font-normal leading-[9px] left-0 not-italic text-[#8e9199] text-[6px] top-[-0.5px] tracking-[-0.08px] whitespace-nowrap">Информация</p>
    </div>
  );
}

function Container52() {
  return (
    <div className="absolute bg-[#f7f8fc] content-stretch flex flex-col gap-[2px] h-[39px] items-start left-0 pt-[8px] px-[8px] rounded-[6px] top-[45px] w-[166px]" data-name="Container">
      <Paragraph43 />
      <Paragraph44 />
    </div>
  );
}

function Paragraph45() {
  return (
    <div className="h-[13.5px] relative shrink-0 w-full" data-name="Paragraph">
      <p className="-translate-x-1/2 absolute font-['Inter:Regular',sans-serif] font-normal leading-[13.5px] left-[71.09px] not-italic text-[9px] text-center text-white top-[0.5px] tracking-[-0.12px] whitespace-nowrap">Действие</p>
    </div>
  );
}

function Container53() {
  return (
    <div className="absolute bg-[#3b82f6] content-stretch flex flex-col h-[29.5px] items-start left-0 pt-[8px] px-[12px] rounded-[6px] top-[166.5px] w-[166px]" data-name="Container">
      <Paragraph45 />
    </div>
  );
}

function Paragraph46() {
  return (
    <div className="absolute h-[9px] left-0 top-[202px] w-[166px]" data-name="Paragraph">
      <p className="absolute font-['Inter:Regular',sans-serif] font-normal leading-[9px] left-0 not-italic text-[#22c55e] text-[6px] top-[-0.5px] tracking-[-0.08px] whitespace-nowrap">✓ Спокойный интерфейс</p>
    </div>
  );
}

function Container50() {
  return (
    <div className="h-[211px] relative shrink-0 w-full" data-name="Container">
      <Container51 />
      <Container52 />
      <Container53 />
      <Paragraph46 />
    </div>
  );
}

function ColorQuiz4VariantB() {
  return (
    <div className="absolute bg-white content-stretch flex flex-col h-[231px] items-start left-[20.95px] overflow-clip pt-[10px] px-[10px] rounded-[14.99px] top-0 w-[186px]" data-name="ColorQuiz4VariantB">
      <Container50 />
    </div>
  );
}

function Container49() {
  return (
    <div className="absolute h-[231px] left-[247.3px] top-[1046px] w-[206.945px]" data-name="Container">
      <Paragraph40 />
      <ColorQuiz4VariantB />
    </div>
  );
}

function MainFrame1() {
  return (
    <div className="absolute h-[1277px] left-0 top-0 w-[498px]" data-name="Main Frame">
      <p className="absolute font-['Inter:Regular',sans-serif] font-normal leading-[30px] left-0 not-italic text-[#101828] text-[20px] top-0 tracking-[-0.4492px] whitespace-nowrap">Compare UI</p>
      <p className="absolute font-['Inter:Regular',sans-serif] font-normal leading-[15px] left-0 not-italic text-[#8e9199] text-[12px] top-[42px] tracking-[-0.15px] w-[1280px]">Сравнение двух вариантов интерфейса</p>
      <p className="absolute font-['Inter:Regular',sans-serif] font-normal leading-[14px] left-0 not-italic text-[#8e9199] text-[11px] top-[97.5px] tracking-[-0.14px] whitespace-nowrap">1. Где главное действие выделено лучше?</p>
      <Container />
      <Container7 />
      <p className="absolute font-['Inter:Regular',sans-serif] font-normal leading-[14px] left-0 not-italic text-[#8e9199] text-[11px] top-[402.5px] tracking-[-0.14px] whitespace-nowrap">2. Где ошибка заметнее?</p>
      <Container14 />
      <Container18 />
      <p className="absolute font-['Inter:Regular',sans-serif] font-normal leading-[14px] left-0 not-italic text-[#8e9199] text-[11px] top-[707.5px] tracking-[-0.14px] whitespace-nowrap">3. Где интерфейс выглядит единым?</p>
      <Container23 />
      <Container32 />
      <p className="absolute font-['Inter:Regular',sans-serif] font-normal leading-[14px] left-0 not-italic text-[#8e9199] text-[11px] top-[1012.5px] tracking-[-0.14px] whitespace-nowrap">4. Где интерфейс выглядит спокойным?</p>
      <Container41 />
      <Container49 />
    </div>
  );
}

function Paragraph47() {
  return (
    <div className="absolute h-[14px] left-0 top-[97px] w-[352px]" data-name="Paragraph">
      <p className="absolute font-['Inter:Regular',sans-serif] font-normal leading-[14px] left-0 not-italic text-[#8e9199] text-[11px] top-[0.5px] tracking-[-0.14px] whitespace-nowrap">5. Цвет используется для передачи значения элементов</p>
    </div>
  );
}

function Paragraph48() {
  return (
    <div className="h-[12px] relative shrink-0 w-full" data-name="Paragraph">
      <p className="-translate-x-1/2 absolute font-['Inter:Regular',sans-serif] font-normal leading-[12px] left-[71.18px] not-italic text-[8px] text-center text-white top-0 tracking-[-0.1px] whitespace-nowrap">Кнопка действия</p>
    </div>
  );
}

function Container55() {
  return (
    <div className="bg-[#3b82f6] h-[24px] relative rounded-[6px] shrink-0 w-[166px]" data-name="Container">
      <div className="bg-clip-padding border-0 border-[transparent] border-solid content-stretch flex flex-col items-start pt-[6px] px-[12px] relative size-full">
        <Paragraph48 />
      </div>
    </div>
  );
}

function Paragraph49() {
  return (
    <div className="h-[10.5px] relative shrink-0 w-full" data-name="Paragraph">
      <p className="-translate-x-1/2 absolute font-['Inter:Regular',sans-serif] font-normal leading-[10.5px] left-[71.36px] not-italic text-[#78350f] text-[7px] text-center top-0 tracking-[-0.09px] whitespace-nowrap">⚠ Уведомление</p>
    </div>
  );
}

function Container56() {
  return (
    <div className="bg-[#fbbf24] h-[22.5px] relative rounded-[6px] shrink-0 w-[166px]" data-name="Container">
      <div className="bg-clip-padding border-0 border-[transparent] border-solid content-stretch flex flex-col items-start pt-[6px] px-[12px] relative size-full">
        <Paragraph49 />
      </div>
    </div>
  );
}

function Paragraph50() {
  return (
    <div className="h-[10.5px] relative shrink-0 w-[166px]" data-name="Paragraph">
      <div className="bg-clip-padding border-0 border-[transparent] border-solid relative size-full">
        <p className="absolute font-['Inter:Regular',sans-serif] font-normal leading-[10.5px] left-0 not-italic text-[#364146] text-[7px] top-0 tracking-[-0.09px] whitespace-nowrap">Обычный текст</p>
      </div>
    </div>
  );
}

function Container54() {
  return (
    <div className="content-stretch flex flex-col gap-[8px] h-[211px] items-start justify-center py-[69px] relative shrink-0 w-full" data-name="Container">
      <Container55 />
      <Container56 />
      <Paragraph50 />
    </div>
  );
}

function ColorQuiz() {
  return (
    <div className="absolute bg-white content-stretch flex flex-col h-[231px] items-start left-0 overflow-clip pt-[10px] px-[10px] rounded-[14.99px] top-[131px] w-[186px]" data-name="ColorQuiz5">
      <Container54 />
    </div>
  );
}

function Paragraph51() {
  return (
    <div className="absolute h-[14px] left-0 top-[402px] w-[352px]" data-name="Paragraph">
      <p className="absolute font-['Inter:Regular',sans-serif] font-normal leading-[14px] left-0 not-italic text-[#8e9199] text-[11px] top-[0.5px] tracking-[-0.14px] whitespace-nowrap">6. Красный текст ошибки под полем</p>
    </div>
  );
}

function Paragraph52() {
  return (
    <div className="h-[10.5px] relative shrink-0 w-[166px]" data-name="Paragraph">
      <div className="bg-clip-padding border-0 border-[transparent] border-solid relative size-full">
        <p className="absolute font-['Inter:Regular',sans-serif] font-normal leading-[10.5px] left-0 not-italic text-[#101828] text-[7px] top-0 tracking-[-0.09px] whitespace-nowrap">Email</p>
      </div>
    </div>
  );
}

function Paragraph53() {
  return (
    <div className="h-[10.5px] relative shrink-0 w-full" data-name="Paragraph">
      <p className="absolute font-['Inter:Regular',sans-serif] font-normal leading-[10.5px] left-0 not-italic text-[#8e9199] text-[7px] top-0 tracking-[-0.09px] whitespace-nowrap">email@</p>
    </div>
  );
}

function Container59() {
  return (
    <div className="bg-[#f7f8fc] flex-[1_0_0] min-h-px min-w-px relative rounded-[6px] w-[166px]" data-name="Container">
      <div aria-hidden="true" className="absolute border border-[#ef4444] border-solid inset-0 pointer-events-none rounded-[6px]" />
      <div className="bg-clip-padding border-0 border-[transparent] border-solid content-stretch flex flex-col items-start pb-px pt-[7px] px-[13px] relative size-full">
        <Paragraph53 />
      </div>
    </div>
  );
}

function Paragraph54() {
  return (
    <div className="h-[9px] relative shrink-0 w-[166px]" data-name="Paragraph">
      <div className="bg-clip-padding border-0 border-[transparent] border-solid relative size-full">
        <p className="absolute font-['Inter:Regular',sans-serif] font-normal leading-[9px] left-0 not-italic text-[#ef4444] text-[6px] top-[-0.5px] tracking-[-0.08px] whitespace-nowrap">⚠ Неверный формат email</p>
      </div>
    </div>
  );
}

function Container58() {
  return (
    <div className="h-[52px] relative shrink-0 w-[166px]" data-name="Container">
      <div className="bg-clip-padding border-0 border-[transparent] border-solid content-stretch flex flex-col gap-[4px] items-start relative size-full">
        <Paragraph52 />
        <Container59 />
        <Paragraph54 />
      </div>
    </div>
  );
}

function Container57() {
  return (
    <div className="content-stretch flex flex-col h-[211px] items-start justify-center py-[79.5px] relative shrink-0 w-full" data-name="Container">
      <Container58 />
    </div>
  );
}

function ColorQuiz1() {
  return (
    <div className="absolute bg-white content-stretch flex flex-col h-[231px] items-start left-0 overflow-clip pt-[10px] px-[10px] rounded-[14.99px] top-[436px] w-[186px]" data-name="ColorQuiz6">
      <Container57 />
    </div>
  );
}

function Paragraph55() {
  return (
    <div className="absolute h-[14px] left-0 top-[707px] w-[352px]" data-name="Paragraph">
      <p className="absolute font-['Inter:Regular',sans-serif] font-normal leading-[14px] left-0 not-italic text-[#8e9199] text-[11px] top-[0.5px] tracking-[-0.14px] whitespace-nowrap">7. Зелёная галочка Success</p>
    </div>
  );
}

function Paragraph56() {
  return (
    <div className="h-[30px] relative shrink-0 w-[17.617px]" data-name="Paragraph">
      <div className="bg-clip-padding border-0 border-[transparent] border-solid relative size-full">
        <p className="absolute font-['Inter:Regular',sans-serif] font-normal leading-[30px] left-0 not-italic text-[20px] text-white top-[-0.5px] whitespace-nowrap">✓</p>
      </div>
    </div>
  );
}

function Container61() {
  return (
    <div className="bg-[#22c55e] relative rounded-[16777200px] shrink-0 size-[40px]" data-name="Container">
      <div className="bg-clip-padding border-0 border-[transparent] border-solid content-stretch flex items-center justify-center pl-[11.188px] pr-[11.195px] relative size-full">
        <Paragraph56 />
      </div>
    </div>
  );
}

function Paragraph57() {
  return (
    <div className="h-[15px] relative shrink-0 w-[38.727px]" data-name="Paragraph">
      <div className="bg-clip-padding border-0 border-[transparent] border-solid relative size-full">
        <p className="absolute font-['Inter:Regular',sans-serif] font-normal leading-[15px] left-0 not-italic text-[#22c55e] text-[10px] top-[0.5px] tracking-[-0.13px] whitespace-nowrap">Success</p>
      </div>
    </div>
  );
}

function Paragraph58() {
  return (
    <div className="h-[10.5px] relative shrink-0 w-[103.367px]" data-name="Paragraph">
      <div className="bg-clip-padding border-0 border-[transparent] border-solid relative size-full">
        <p className="-translate-x-1/2 absolute font-['Inter:Regular',sans-serif] font-normal leading-[10.5px] left-[52px] not-italic text-[#8e9199] text-[7px] text-center top-0 tracking-[-0.09px] whitespace-nowrap">Операция выполнена успешно</p>
      </div>
    </div>
  );
}

function Container60() {
  return (
    <div className="content-stretch flex flex-col gap-[8px] h-[211px] items-center justify-center py-[64.75px] relative shrink-0 w-full" data-name="Container">
      <Container61 />
      <Paragraph57 />
      <Paragraph58 />
    </div>
  );
}

function ColorQuiz2() {
  return (
    <div className="absolute bg-white content-stretch flex flex-col h-[231px] items-start left-0 overflow-clip pt-[10px] px-[10px] rounded-[14.99px] top-[741px] w-[186px]" data-name="ColorQuiz7">
      <Container60 />
    </div>
  );
}

function Paragraph59() {
  return (
    <div className="absolute h-[14px] left-0 top-[1012px] w-[352px]" data-name="Paragraph">
      <p className="absolute font-['Inter:Regular',sans-serif] font-normal leading-[14px] left-0 not-italic text-[#8e9199] text-[11px] top-[0.5px] tracking-[-0.14px] whitespace-nowrap">8. Много акцентных vs один акцентный</p>
    </div>
  );
}

function Paragraph60() {
  return (
    <div className="h-[9px] relative shrink-0 w-full" data-name="Paragraph">
      <p className="-translate-x-1/2 absolute font-['Inter:Regular',sans-serif] font-normal leading-[9px] left-[18.65px] not-italic text-[6px] text-center text-white top-[-0.5px] tracking-[-0.08px] whitespace-nowrap">Btn</p>
    </div>
  );
}

function Container65() {
  return (
    <div className="bg-[#ef4444] flex-[1_0_0] h-[17px] min-h-px min-w-px relative rounded-[4px]" data-name="Container">
      <div className="bg-clip-padding border-0 border-[transparent] border-solid content-stretch flex flex-col items-start pt-[4px] px-[8px] relative size-full">
        <Paragraph60 />
      </div>
    </div>
  );
}

function Paragraph61() {
  return (
    <div className="h-[9px] relative shrink-0 w-full" data-name="Paragraph">
      <p className="-translate-x-1/2 absolute font-['Inter:Regular',sans-serif] font-normal leading-[9px] left-[18.65px] not-italic text-[6px] text-center text-white top-[-0.5px] tracking-[-0.08px] whitespace-nowrap">Btn</p>
    </div>
  );
}

function Container66() {
  return (
    <div className="bg-[#8b5cf6] flex-[1_0_0] h-[17px] min-h-px min-w-px relative rounded-[4px]" data-name="Container">
      <div className="bg-clip-padding border-0 border-[transparent] border-solid content-stretch flex flex-col items-start pt-[4px] px-[8px] relative size-full">
        <Paragraph61 />
      </div>
    </div>
  );
}

function Paragraph62() {
  return (
    <div className="h-[9px] relative shrink-0 w-full" data-name="Paragraph">
      <p className="-translate-x-1/2 absolute font-['Inter:Regular',sans-serif] font-normal leading-[9px] left-[18.65px] not-italic text-[6px] text-center text-white top-[-0.5px] tracking-[-0.08px] whitespace-nowrap">Btn</p>
    </div>
  );
}

function Container67() {
  return (
    <div className="bg-[#22c55e] flex-[1_0_0] h-[17px] min-h-px min-w-px relative rounded-[4px]" data-name="Container">
      <div className="bg-clip-padding border-0 border-[transparent] border-solid content-stretch flex flex-col items-start pt-[4px] px-[8px] relative size-full">
        <Paragraph62 />
      </div>
    </div>
  );
}

function Container64() {
  return (
    <div className="h-[17px] relative shrink-0 w-[166px]" data-name="Container">
      <div className="bg-clip-padding border-0 border-[transparent] border-solid content-stretch flex gap-[4px] items-start pr-[0.008px] relative size-full">
        <Container65 />
        <Container66 />
        <Container67 />
      </div>
    </div>
  );
}

function Paragraph63() {
  return (
    <div className="h-[7.5px] relative shrink-0 w-[166px]" data-name="Paragraph">
      <div className="bg-clip-padding border-0 border-[transparent] border-solid relative size-full">
        <p className="-translate-x-1/2 absolute font-['Inter:Regular',sans-serif] font-normal leading-[7.5px] left-[83.42px] not-italic text-[#ef4444] text-[5px] text-center top-[-0.5px] tracking-[-0.07px] whitespace-nowrap">Много цветов</p>
      </div>
    </div>
  );
}

function Container63() {
  return (
    <div className="flex-[1_0_0] min-h-px min-w-px relative w-[166px]" data-name="Container">
      <div aria-hidden="true" className="absolute border-[#d1d3db] border-b border-solid inset-0 pointer-events-none" />
      <div className="flex flex-col justify-center size-full">
        <div className="bg-clip-padding border-0 border-[transparent] border-solid content-stretch flex flex-col gap-[4px] items-start justify-center pb-[43.25px] pt-[34.25px] relative size-full">
          <Container64 />
          <Paragraph63 />
        </div>
      </div>
    </div>
  );
}

function Paragraph64() {
  return (
    <div className="h-[10.5px] relative shrink-0 w-full" data-name="Paragraph">
      <p className="-translate-x-1/2 absolute font-['Inter:Regular',sans-serif] font-normal leading-[10.5px] left-[71.26px] not-italic text-[7px] text-center text-white top-0 tracking-[-0.09px] whitespace-nowrap">Главная кнопка</p>
    </div>
  );
}

function Container69() {
  return (
    <div className="bg-[#3b82f6] h-[22.5px] relative rounded-[6px] shrink-0 w-[166px]" data-name="Container">
      <div className="bg-clip-padding border-0 border-[transparent] border-solid content-stretch flex flex-col items-start pt-[6px] px-[12px] relative size-full">
        <Paragraph64 />
      </div>
    </div>
  );
}

function Paragraph65() {
  return (
    <div className="h-[7.5px] relative shrink-0 w-[166px]" data-name="Paragraph">
      <div className="bg-clip-padding border-0 border-[transparent] border-solid relative size-full">
        <p className="-translate-x-1/2 absolute font-['Inter:Regular',sans-serif] font-normal leading-[7.5px] left-[83.3px] not-italic text-[#22c55e] text-[5px] text-center top-[-0.5px] tracking-[-0.07px] whitespace-nowrap">Один акцент</p>
      </div>
    </div>
  );
}

function Container68() {
  return (
    <div className="flex-[1_0_0] min-h-px min-w-px relative w-[166px]" data-name="Container">
      <div className="flex flex-col justify-center size-full">
        <div className="bg-clip-padding border-0 border-[transparent] border-solid content-stretch flex flex-col gap-[4px] items-start justify-center pb-[31.5px] pt-[39.5px] relative size-full">
          <Container69 />
          <Paragraph65 />
        </div>
      </div>
    </div>
  );
}

function Container62() {
  return (
    <div className="content-stretch flex flex-col h-[211px] items-start relative shrink-0 w-full" data-name="Container">
      <Container63 />
      <Container68 />
    </div>
  );
}

function ColorQuiz3() {
  return (
    <div className="absolute bg-white content-stretch flex flex-col h-[231px] items-start left-0 overflow-clip pt-[10px] px-[10px] rounded-[14.99px] top-[1046px] w-[186px]" data-name="ColorQuiz8">
      <Container62 />
    </div>
  );
}

function ContentFrame() {
  return (
    <div className="absolute h-[1277px] left-[146px] top-[1421px] w-[352px]" data-name="Content Frame">
      <p className="absolute font-['Inter:Regular',sans-serif] font-normal leading-[30px] left-0 not-italic text-[#101828] text-[20px] top-0 tracking-[-0.4492px] whitespace-nowrap">Single Choice</p>
      <p className="absolute font-['Inter:Regular',sans-serif] font-normal leading-[15px] left-0 not-italic text-[#8e9199] text-[12px] top-[42px] tracking-[-0.15px] w-[1280px]">Выбор одного варианта ответа</p>
      <Paragraph47 />
      <ColorQuiz />
      <Paragraph51 />
      <ColorQuiz1 />
      <Paragraph55 />
      <ColorQuiz2 />
      <Paragraph59 />
      <ColorQuiz3 />
    </div>
  );
}

function Paragraph66() {
  return (
    <div className="absolute h-[14px] left-0 top-[97px] w-[352px]" data-name="Paragraph">
      <p className="absolute font-['Inter:Regular',sans-serif] font-normal leading-[14px] left-0 not-italic text-[#8e9199] text-[11px] top-[0.5px] tracking-[-0.14px] whitespace-nowrap">9. Разные значения цвета</p>
    </div>
  );
}

function Paragraph67() {
  return (
    <div className="h-[12px] relative shrink-0 w-[30.961px]" data-name="Paragraph">
      <div className="bg-clip-padding border-0 border-[transparent] border-solid relative size-full">
        <p className="absolute font-['Inter:Regular',sans-serif] font-normal leading-[12px] left-0 not-italic text-[8px] text-white top-0 tracking-[-0.1px] whitespace-nowrap">✓ Успех</p>
      </div>
    </div>
  );
}

function Container71() {
  return (
    <div className="bg-[#22c55e] h-[24px] relative rounded-[6px] shrink-0 w-[166px]" data-name="Container">
      <div className="bg-clip-padding border-0 border-[transparent] border-solid content-stretch flex items-center justify-center pl-[67.516px] pr-[67.523px] relative size-full">
        <Paragraph67 />
      </div>
    </div>
  );
}

function Paragraph68() {
  return (
    <div className="h-[12px] relative shrink-0 w-[40.445px]" data-name="Paragraph">
      <div className="bg-clip-padding border-0 border-[transparent] border-solid relative size-full">
        <p className="absolute font-['Inter:Regular',sans-serif] font-normal leading-[12px] left-0 not-italic text-[8px] text-white top-0 tracking-[-0.1px] whitespace-nowrap">⚠ Ошибка</p>
      </div>
    </div>
  );
}

function Container72() {
  return (
    <div className="bg-[#ef4444] h-[24px] relative rounded-[6px] shrink-0 w-[166px]" data-name="Container">
      <div className="bg-clip-padding border-0 border-[transparent] border-solid content-stretch flex items-center justify-center pl-[62.773px] pr-[62.781px] relative size-full">
        <Paragraph68 />
      </div>
    </div>
  );
}

function Paragraph69() {
  return (
    <div className="h-[12px] relative shrink-0 w-full" data-name="Paragraph">
      <p className="-translate-x-1/2 absolute font-['Inter:Regular',sans-serif] font-normal leading-[12px] left-[71.39px] not-italic text-[8px] text-center text-white top-0 tracking-[-0.1px] whitespace-nowrap">Действие</p>
    </div>
  );
}

function Container73() {
  return (
    <div className="bg-[#3b82f6] h-[24px] relative rounded-[6px] shrink-0 w-[166px]" data-name="Container">
      <div className="bg-clip-padding border-0 border-[transparent] border-solid content-stretch flex flex-col items-start pt-[6px] px-[12px] relative size-full">
        <Paragraph69 />
      </div>
    </div>
  );
}

function Container70() {
  return (
    <div className="content-stretch flex flex-col gap-[8px] h-[211px] items-start justify-center py-[61.5px] relative shrink-0 w-full" data-name="Container">
      <Container71 />
      <Container72 />
      <Container73 />
    </div>
  );
}

function ColorQuiz4() {
  return (
    <div className="absolute bg-white content-stretch flex flex-col h-[231px] items-start left-0 overflow-clip pt-[10px] px-[10px] rounded-[14.99px] top-[131px] w-[186px]" data-name="ColorQuiz9">
      <Container70 />
    </div>
  );
}

function Paragraph70() {
  return (
    <div className="absolute h-[14px] left-0 top-[402px] w-[352px]" data-name="Paragraph">
      <p className="absolute font-['Inter:Regular',sans-serif] font-normal leading-[14px] left-0 not-italic text-[#8e9199] text-[11px] top-[0.5px] tracking-[-0.14px] whitespace-nowrap">10. Визуальный шум</p>
    </div>
  );
}

function Container76() {
  return <div className="bg-[#ef4444] rounded-[4px] shrink-0 size-[30px]" data-name="Container" />;
}

function Container77() {
  return <div className="bg-[#8b5cf6] rounded-[4px] shrink-0 size-[30px]" data-name="Container" />;
}

function Container78() {
  return <div className="bg-[#22c55e] rounded-[4px] shrink-0 size-[30px]" data-name="Container" />;
}

function Container79() {
  return <div className="bg-[#fbbf24] rounded-[4px] shrink-0 size-[30px]" data-name="Container" />;
}

function Container75() {
  return (
    <div className="absolute content-stretch flex gap-[4px] h-[30px] items-start left-0 top-[71.5px] w-[166px]" data-name="Container">
      <Container76 />
      <Container77 />
      <Container78 />
      <Container79 />
    </div>
  );
}

function Paragraph71() {
  return (
    <div className="h-[9px] relative shrink-0 w-full" data-name="Paragraph">
      <p className="-translate-x-1/2 absolute font-['Inter:Regular',sans-serif] font-normal leading-[9px] left-[18.48px] not-italic text-[6px] text-center text-white top-[-0.5px] tracking-[-0.08px] whitespace-nowrap">1</p>
    </div>
  );
}

function Container81() {
  return (
    <div className="bg-[#ec4899] flex-[1_0_0] h-[17px] min-h-px min-w-px relative rounded-[4px]" data-name="Container">
      <div className="bg-clip-padding border-0 border-[transparent] border-solid content-stretch flex flex-col items-start pt-[4px] px-[8px] relative size-full">
        <Paragraph71 />
      </div>
    </div>
  );
}

function Paragraph72() {
  return (
    <div className="h-[9px] relative shrink-0 w-full" data-name="Paragraph">
      <p className="-translate-x-1/2 absolute font-['Inter:Regular',sans-serif] font-normal leading-[9px] left-[18.55px] not-italic text-[6px] text-center text-white top-[-0.5px] tracking-[-0.08px] whitespace-nowrap">2</p>
    </div>
  );
}

function Container82() {
  return (
    <div className="bg-[#06b6d4] flex-[1_0_0] h-[17px] min-h-px min-w-px relative rounded-[4px]" data-name="Container">
      <div className="bg-clip-padding border-0 border-[transparent] border-solid content-stretch flex flex-col items-start pt-[4px] px-[8px] relative size-full">
        <Paragraph72 />
      </div>
    </div>
  );
}

function Paragraph73() {
  return (
    <div className="h-[9px] relative shrink-0 w-full" data-name="Paragraph">
      <p className="-translate-x-1/2 absolute font-['Inter:Regular',sans-serif] font-normal leading-[9px] left-[18.46px] not-italic text-[6px] text-center text-white top-[-0.5px] tracking-[-0.08px] whitespace-nowrap">3</p>
    </div>
  );
}

function Container83() {
  return (
    <div className="bg-[#f97316] flex-[1_0_0] h-[17px] min-h-px min-w-px relative rounded-[4px]" data-name="Container">
      <div className="bg-clip-padding border-0 border-[transparent] border-solid content-stretch flex flex-col items-start pt-[4px] px-[8px] relative size-full">
        <Paragraph73 />
      </div>
    </div>
  );
}

function Container80() {
  return (
    <div className="absolute content-stretch flex gap-[4px] h-[17px] items-start left-0 pr-[0.008px] top-[105.5px] w-[166px]" data-name="Container">
      <Container81 />
      <Container82 />
      <Container83 />
    </div>
  );
}

function Paragraph74() {
  return (
    <div className="absolute h-[9px] left-0 top-[130.5px] w-[166px]" data-name="Paragraph">
      <p className="-translate-x-1/2 absolute font-['Inter:Regular',sans-serif] font-normal leading-[9px] left-[83.36px] not-italic text-[#ef4444] text-[6px] text-center top-[-0.5px] tracking-[-0.08px] whitespace-nowrap">⚠ Визуальный шум</p>
    </div>
  );
}

function Container74() {
  return (
    <div className="h-[211px] relative shrink-0 w-full" data-name="Container">
      <Container75 />
      <Container80 />
      <Paragraph74 />
    </div>
  );
}

function ColorQuiz5() {
  return (
    <div className="absolute bg-white content-stretch flex flex-col h-[231px] items-start left-0 overflow-clip pt-[10px] px-[10px] rounded-[14.99px] top-[436px] w-[186px]" data-name="ColorQuiz10">
      <Container74 />
    </div>
  );
}

function Paragraph75() {
  return (
    <div className="absolute h-[14px] left-0 top-[707px] w-[352px]" data-name="Paragraph">
      <p className="absolute font-['Inter:Regular',sans-serif] font-normal leading-[14px] left-0 not-italic text-[#8e9199] text-[11px] top-[0.5px] tracking-[-0.14px] whitespace-nowrap">11. Цветные элементы интерфейса</p>
    </div>
  );
}

function Paragraph76() {
  return (
    <div className="h-[12px] relative shrink-0 w-full" data-name="Paragraph">
      <p className="-translate-x-1/2 absolute font-['Inter:Regular',sans-serif] font-normal leading-[12px] left-[71.11px] not-italic text-[8px] text-center text-white top-0 tracking-[-0.1px] whitespace-nowrap">Яркая кнопка</p>
    </div>
  );
}

function Container85() {
  return (
    <div className="bg-[#3b82f6] h-[24px] relative rounded-[6px] shrink-0 w-[166px]" data-name="Container">
      <div className="bg-clip-padding border-0 border-[transparent] border-solid content-stretch flex flex-col items-start pt-[6px] px-[12px] relative size-full">
        <Paragraph76 />
      </div>
    </div>
  );
}

function Paragraph77() {
  return (
    <div className="h-[10.5px] relative shrink-0 w-full" data-name="Paragraph">
      <p className="-translate-x-1/2 absolute font-['Inter:Regular',sans-serif] font-normal leading-[10.5px] left-[71.16px] not-italic text-[#78350f] text-[7px] text-center top-0 tracking-[-0.09px] whitespace-nowrap">Цветное уведомление</p>
    </div>
  );
}

function Container86() {
  return (
    <div className="bg-[#fbbf24] h-[22.5px] relative rounded-[6px] shrink-0 w-[166px]" data-name="Container">
      <div className="bg-clip-padding border-0 border-[transparent] border-solid content-stretch flex flex-col items-start pt-[6px] px-[12px] relative size-full">
        <Paragraph77 />
      </div>
    </div>
  );
}

function Paragraph78() {
  return (
    <div className="h-[10.5px] relative shrink-0 w-[166px]" data-name="Paragraph">
      <div className="bg-clip-padding border-0 border-[transparent] border-solid relative size-full">
        <p className="absolute font-['Inter:Regular',sans-serif] font-normal leading-[0] left-0 not-italic text-[#0a0a0a] text-[7px] top-0 tracking-[-0.09px] whitespace-nowrap">
          <span className="leading-[10.5px]">{`Текст со `}</span>
          <span className="leading-[10.5px] text-[#3b82f6]">цветной ссылкой</span>
        </p>
      </div>
    </div>
  );
}

function Paragraph79() {
  return (
    <div className="h-[10.5px] relative shrink-0 w-[166px]" data-name="Paragraph">
      <div className="bg-clip-padding border-0 border-[transparent] border-solid relative size-full">
        <p className="absolute font-['Inter:Regular',sans-serif] font-normal leading-[10.5px] left-0 not-italic text-[#8e9199] text-[7px] top-0 tracking-[-0.09px] whitespace-nowrap">Нейтральный текст</p>
      </div>
    </div>
  );
}

function Container84() {
  return (
    <div className="content-stretch flex flex-col gap-[8px] h-[211px] items-start justify-center py-[59.75px] relative shrink-0 w-full" data-name="Container">
      <Container85 />
      <Container86 />
      <Paragraph78 />
      <Paragraph79 />
    </div>
  );
}

function ColorQuiz6() {
  return (
    <div className="absolute bg-white content-stretch flex flex-col h-[231px] items-start left-0 overflow-clip pt-[10px] px-[10px] rounded-[14.99px] top-[741px] w-[186px]" data-name="ColorQuiz11">
      <Container84 />
    </div>
  );
}

function Paragraph80() {
  return (
    <div className="absolute h-[14px] left-0 top-[1012px] w-[352px]" data-name="Paragraph">
      <p className="absolute font-['Inter:Regular',sans-serif] font-normal leading-[14px] left-0 not-italic text-[#8e9199] text-[11px] top-[0.5px] tracking-[-0.14px] whitespace-nowrap">12. Палитра цветов</p>
    </div>
  );
}

function Paragraph81() {
  return (
    <div className="h-[9px] relative shrink-0 w-[166px]" data-name="Paragraph">
      <div className="bg-clip-padding border-0 border-[transparent] border-solid relative size-full">
        <p className="absolute font-['Inter:Regular',sans-serif] font-normal leading-[9px] left-0 not-italic text-[#8e9199] text-[6px] top-[-0.5px] tracking-[-0.08px] whitespace-nowrap">Основной цвет</p>
      </div>
    </div>
  );
}

function Container89() {
  return <div className="bg-[#364146] flex-[1_0_0] min-h-px min-w-px rounded-[4px] w-[166px]" data-name="Container" />;
}

function Container88() {
  return (
    <div className="h-[33px] relative shrink-0 w-[166px]" data-name="Container">
      <div className="bg-clip-padding border-0 border-[transparent] border-solid content-stretch flex flex-col gap-[4px] items-start relative size-full">
        <Paragraph81 />
        <Container89 />
      </div>
    </div>
  );
}

function Paragraph82() {
  return (
    <div className="h-[9px] relative shrink-0 w-[166px]" data-name="Paragraph">
      <div className="bg-clip-padding border-0 border-[transparent] border-solid relative size-full">
        <p className="absolute font-['Inter:Regular',sans-serif] font-normal leading-[9px] left-0 not-italic text-[#8e9199] text-[6px] top-[-0.5px] tracking-[-0.08px] whitespace-nowrap">Акцентный цвет</p>
      </div>
    </div>
  );
}

function Container91() {
  return <div className="bg-[#3b82f6] flex-[1_0_0] min-h-px min-w-px rounded-[4px] w-[166px]" data-name="Container" />;
}

function Container90() {
  return (
    <div className="h-[33px] relative shrink-0 w-[166px]" data-name="Container">
      <div className="bg-clip-padding border-0 border-[transparent] border-solid content-stretch flex flex-col gap-[4px] items-start relative size-full">
        <Paragraph82 />
        <Container91 />
      </div>
    </div>
  );
}

function Paragraph83() {
  return (
    <div className="h-[9px] relative shrink-0 w-[166px]" data-name="Paragraph">
      <div className="bg-clip-padding border-0 border-[transparent] border-solid relative size-full">
        <p className="absolute font-['Inter:Regular',sans-serif] font-normal leading-[9px] left-0 not-italic text-[#8e9199] text-[6px] top-[-0.5px] tracking-[-0.08px] whitespace-nowrap">Нейтральные цвета</p>
      </div>
    </div>
  );
}

function Container94() {
  return <div className="bg-[#f7f8fc] flex-[1_0_0] h-[20px] min-h-px min-w-px rounded-[4px]" data-name="Container" />;
}

function Container95() {
  return <div className="bg-[#d1d3db] flex-[1_0_0] h-[20px] min-h-px min-w-px rounded-[4px]" data-name="Container" />;
}

function Container96() {
  return <div className="bg-[#8e9199] flex-[1_0_0] h-[20px] min-h-px min-w-px rounded-[4px]" data-name="Container" />;
}

function Container93() {
  return (
    <div className="flex-[1_0_0] min-h-px min-w-px relative w-[166px]" data-name="Container">
      <div className="bg-clip-padding border-0 border-[transparent] border-solid content-stretch flex gap-[4px] items-start pr-[0.008px] relative size-full">
        <Container94 />
        <Container95 />
        <Container96 />
      </div>
    </div>
  );
}

function Container92() {
  return (
    <div className="h-[33px] relative shrink-0 w-[166px]" data-name="Container">
      <div className="bg-clip-padding border-0 border-[transparent] border-solid content-stretch flex flex-col gap-[4px] items-start relative size-full">
        <Paragraph83 />
        <Container93 />
      </div>
    </div>
  );
}

function Container87() {
  return (
    <div className="content-stretch flex flex-col gap-[8px] h-[211px] items-start justify-center py-[48px] relative shrink-0 w-full" data-name="Container">
      <Container88 />
      <Container90 />
      <Container92 />
    </div>
  );
}

function ColorQuiz7() {
  return (
    <div className="absolute bg-white content-stretch flex flex-col h-[231px] items-start left-0 overflow-clip pt-[10px] px-[10px] rounded-[14.99px] top-[1046px] w-[186px]" data-name="ColorQuiz12">
      <Container87 />
    </div>
  );
}

function ContentFrame1() {
  return (
    <div className="absolute h-[1277px] left-[146px] top-[2883px] w-[374px]" data-name="Content Frame">
      <p className="absolute font-['Inter:Regular',sans-serif] font-normal leading-[30px] left-0 not-italic text-[#101828] text-[20px] top-0 tracking-[-0.4492px] whitespace-nowrap">Multi Choice</p>
      <p className="absolute font-['Inter:Regular',sans-serif] font-normal leading-[15px] left-0 not-italic text-[#8e9199] text-[12px] top-[42px] tracking-[-0.15px] w-[1280px]">Выбор нескольких вариантов ответа</p>
      <Paragraph66 />
      <ColorQuiz4 />
      <Paragraph70 />
      <ColorQuiz5 />
      <Paragraph75 />
      <ColorQuiz6 />
      <Paragraph80 />
      <ColorQuiz7 />
    </div>
  );
}

function Paragraph84() {
  return (
    <div className="h-[10.5px] relative shrink-0 w-[55.055px]" data-name="Paragraph">
      <p className="-translate-x-1/2 absolute font-['Inter:Regular',sans-serif] font-normal leading-[10.5px] left-[28px] not-italic text-[#ef4444] text-[7px] text-center top-0 tracking-[-0.09px] whitespace-nowrap">⚠ Текст ошибки</p>
    </div>
  );
}

function ColorQuiz13Card() {
  return (
    <div className="absolute content-stretch flex h-[80px] items-center justify-center left-0 pl-[37.469px] pr-[37.477px] rounded-[8px] top-[131px] w-[130px]" data-name="ColorQuiz13Card1">
      <Paragraph84 />
    </div>
  );
}

function Paragraph85() {
  return (
    <div className="h-[24px] relative shrink-0 w-[14.094px]" data-name="Paragraph">
      <div className="bg-clip-padding border-0 border-[transparent] border-solid relative size-full">
        <p className="absolute font-['Inter:Regular',sans-serif] font-normal leading-[24px] left-0 not-italic text-[16px] text-white top-[-1px] whitespace-nowrap">✓</p>
      </div>
    </div>
  );
}

function Container97() {
  return (
    <div className="bg-[#22c55e] content-stretch flex items-center justify-center px-[7.953px] relative rounded-[16777200px] shrink-0 size-[30px]" data-name="Container">
      <Paragraph85 />
    </div>
  );
}

function ColorQuiz13Card1() {
  return (
    <div className="absolute content-stretch flex h-[80px] items-center justify-center left-[154px] px-[50px] rounded-[8px] top-[131px] w-[130px]" data-name="ColorQuiz13Card2">
      <Container97 />
    </div>
  );
}

function Paragraph86() {
  return (
    <div className="h-[12px] relative shrink-0 w-full" data-name="Paragraph">
      <p className="absolute font-['Inter:Regular',sans-serif] font-normal leading-[12px] left-0 not-italic text-[8px] text-white top-0 tracking-[-0.1px] whitespace-nowrap">Continue</p>
    </div>
  );
}

function Container98() {
  return (
    <div className="bg-[#3b82f6] content-stretch flex flex-col h-[24px] items-start pt-[6px] px-[12px] relative rounded-[6px] shrink-0 w-[57.273px]" data-name="Container">
      <Paragraph86 />
    </div>
  );
}

function ColorQuiz13Card2() {
  return (
    <div className="absolute content-stretch flex h-[80px] items-center justify-center left-[308px] pl-[36.359px] pr-[36.367px] rounded-[8px] top-[131px] w-[130px]" data-name="ColorQuiz13Card3">
      <Container98 />
    </div>
  );
}

function Paragraph87() {
  return (
    <div className="h-[12px] relative shrink-0 w-full" data-name="Paragraph">
      <p className="absolute font-['Inter:Regular',sans-serif] font-normal leading-[12px] left-0 not-italic text-[8px] text-white top-0 tracking-[-0.1px] whitespace-nowrap">Яркая кнопка</p>
    </div>
  );
}

function Container99() {
  return (
    <div className="bg-[#3b82f6] content-stretch flex flex-col h-[24px] items-start pt-[6px] px-[12px] relative rounded-[6px] shrink-0 w-[75.781px]" data-name="Container">
      <Paragraph87 />
    </div>
  );
}

function ColorQuiz14Card() {
  return (
    <div className="absolute content-stretch flex h-[80px] items-center justify-center left-0 px-[27.109px] rounded-[8px] top-[33.5px] w-[130px]" data-name="ColorQuiz14Card1">
      <Container99 />
    </div>
  );
}

function Paragraph88() {
  return (
    <div className="h-[10.5px] relative shrink-0 w-[42.625px]" data-name="Paragraph">
      <p className="-translate-x-1/2 absolute font-['Inter:Regular',sans-serif] font-normal leading-[10.5px] left-[21.5px] not-italic text-[#8e9199] text-[7px] text-center top-0 tracking-[-0.09px] whitespace-nowrap">Серый текст</p>
    </div>
  );
}

function ColorQuiz14Card1() {
  return (
    <div className="absolute content-stretch flex h-[80px] items-center justify-center left-[154px] px-[43.688px] rounded-[8px] top-[33.5px] w-[130px]" data-name="ColorQuiz14Card2">
      <Paragraph88 />
    </div>
  );
}

function Paragraph89() {
  return (
    <div className="h-[10.5px] relative shrink-0 w-full" data-name="Paragraph">
      <p className="absolute font-['Inter:Regular',sans-serif] font-normal leading-[10.5px] left-0 not-italic text-[#78350f] text-[7px] top-0 tracking-[-0.09px] whitespace-nowrap">Уведомление</p>
    </div>
  );
}

function Container100() {
  return (
    <div className="bg-[#fbbf24] content-stretch flex flex-col h-[22.5px] items-start pt-[6px] px-[12px] relative rounded-[6px] shrink-0 w-[69.43px]" data-name="Container">
      <Paragraph89 />
    </div>
  );
}

function ColorQuiz14Card2() {
  return (
    <div className="absolute content-stretch flex h-[80px] items-center justify-center left-[308px] pl-[30.281px] pr-[30.289px] rounded-[8px] top-[33.5px] w-[130px]" data-name="ColorQuiz14Card3">
      <Container100 />
    </div>
  );
}

function HeaderFrame() {
  return (
    <div className="absolute h-[113.5px] left-0 top-[251.5px] w-[438px]" data-name="Header Frame">
      <p className="absolute font-['Inter:Regular',sans-serif] font-normal leading-[14px] left-0 not-italic text-[#8e9199] text-[11px] top-0 tracking-[-0.14px] whitespace-nowrap">14. Соединить UI элементы</p>
      <ColorQuiz14Card />
      <ColorQuiz14Card1 />
      <ColorQuiz14Card2 />
    </div>
  );
}

function Container102() {
  return <div className="bg-[#ef4444] rounded-[4px] shrink-0 size-[20px]" data-name="Container" />;
}

function Container103() {
  return <div className="bg-[#8b5cf6] rounded-[4px] shrink-0 size-[20px]" data-name="Container" />;
}

function Container104() {
  return <div className="bg-[#22c55e] rounded-[4px] shrink-0 size-[20px]" data-name="Container" />;
}

function Container101() {
  return (
    <div className="content-stretch flex gap-[4px] h-[20px] items-start relative shrink-0 w-[114px]" data-name="Container">
      <Container102 />
      <Container103 />
      <Container104 />
    </div>
  );
}

function Paragraph90() {
  return (
    <div className="h-[7.5px] relative shrink-0 w-[114px]" data-name="Paragraph">
      <p className="-translate-x-1/2 absolute font-['Inter:Regular',sans-serif] font-normal leading-[7.5px] left-[57.42px] not-italic text-[#ef4444] text-[5px] text-center top-[-0.5px] tracking-[-0.07px] whitespace-nowrap">Много цветов</p>
    </div>
  );
}

function ColorQuiz15Card() {
  return (
    <div className="absolute content-stretch flex flex-col gap-[4px] h-[80px] items-start justify-center left-0 pl-[8px] py-[24.25px] rounded-[8px] top-[33.5px] w-[130px]" data-name="ColorQuiz15Card1">
      <Container101 />
      <Paragraph90 />
    </div>
  );
}

function Paragraph91() {
  return (
    <div className="h-[10.5px] relative shrink-0 w-full" data-name="Paragraph">
      <p className="absolute font-['Inter:Regular',sans-serif] font-normal leading-[10.5px] left-0 not-italic text-[#8e9199] text-[7px] top-0 tracking-[-0.09px] whitespace-nowrap">Кнопка не выделяется</p>
    </div>
  );
}

function Container105() {
  return (
    <div className="bg-[#f7f8fc] content-stretch flex flex-col h-[22.5px] items-start pt-[6px] px-[12px] relative rounded-[6px] shrink-0 w-[99.844px]" data-name="Container">
      <Paragraph91 />
    </div>
  );
}

function ColorQuiz15Card1() {
  return (
    <div className="absolute content-stretch flex h-[80px] items-center justify-center left-[154px] px-[15.078px] rounded-[8px] top-[33.5px] w-[130px]" data-name="ColorQuiz15Card2">
      <Container105 />
    </div>
  );
}

function Paragraph92() {
  return (
    <div className="h-[10.5px] relative shrink-0 w-[64.102px]" data-name="Paragraph">
      <p className="-translate-x-1/2 absolute font-['Inter:Regular',sans-serif] font-normal leading-[10.5px] left-[32.5px] not-italic text-[#f7f8fc] text-[7px] text-center top-0 tracking-[-0.09px] whitespace-nowrap">Ошибка незаметна</p>
    </div>
  );
}

function ColorQuiz15Card2() {
  return (
    <div className="absolute content-stretch flex h-[80px] items-center justify-center left-[308px] pl-[32.945px] pr-[32.953px] rounded-[8px] top-[33.5px] w-[130px]" data-name="ColorQuiz15Card3">
      <Paragraph92 />
    </div>
  );
}

function HeaderFrame1() {
  return (
    <div className="absolute h-[113.5px] left-0 top-[405.5px] w-[438px]" data-name="Header Frame">
      <p className="absolute font-['Inter:Regular',sans-serif] font-normal leading-[14px] left-0 not-italic text-[#8e9199] text-[11px] top-0 tracking-[-0.14px] whitespace-nowrap">15. Соединить проблемы</p>
      <ColorQuiz15Card />
      <ColorQuiz15Card1 />
      <ColorQuiz15Card2 />
    </div>
  );
}

function Paragraph93() {
  return (
    <div className="h-[12px] relative shrink-0 w-full" data-name="Paragraph">
      <p className="absolute font-['Inter:Regular',sans-serif] font-normal leading-[12px] left-0 not-italic text-[8px] text-white top-0 tracking-[-0.1px] whitespace-nowrap">Яркая кнопка</p>
    </div>
  );
}

function Container106() {
  return (
    <div className="bg-[#3b82f6] content-stretch flex flex-col h-[24px] items-start pt-[6px] px-[12px] relative rounded-[6px] shrink-0 w-[75.781px]" data-name="Container">
      <Paragraph93 />
    </div>
  );
}

function ColorQuiz16Card() {
  return (
    <div className="absolute content-stretch flex h-[80px] items-center justify-center left-0 px-[27.109px] rounded-[8px] top-[33.5px] w-[130px]" data-name="ColorQuiz16Card1">
      <Container106 />
    </div>
  );
}

function Paragraph94() {
  return (
    <div className="h-[10.5px] relative shrink-0 w-[42.625px]" data-name="Paragraph">
      <p className="-translate-x-1/2 absolute font-['Inter:Regular',sans-serif] font-normal leading-[10.5px] left-[21.5px] not-italic text-[#f7f8fc] text-[7px] text-center top-0 tracking-[-0.09px] whitespace-nowrap">Серый текст</p>
    </div>
  );
}

function ColorQuiz16Card1() {
  return (
    <div className="absolute content-stretch flex h-[80px] items-center justify-center left-[154px] px-[43.688px] rounded-[8px] top-[33.5px] w-[130px]" data-name="ColorQuiz16Card2">
      <Paragraph94 />
    </div>
  );
}

function Paragraph95() {
  return (
    <div className="h-[10.5px] relative shrink-0 w-full" data-name="Paragraph">
      <p className="absolute font-['Inter:Regular',sans-serif] font-normal leading-[10.5px] left-0 not-italic text-[#78350f] text-[7px] top-0 tracking-[-0.09px] whitespace-nowrap">Цветное уведомление</p>
    </div>
  );
}

function Container107() {
  return (
    <div className="bg-[#fbbf24] content-stretch flex flex-col h-[22.5px] items-start pt-[6px] px-[12px] relative rounded-[6px] shrink-0 w-[99.68px]" data-name="Container">
      <Paragraph95 />
    </div>
  );
}

function ColorQuiz16Card2() {
  return (
    <div className="absolute content-stretch flex h-[80px] items-center justify-center left-[308px] pl-[15.156px] pr-[15.164px] rounded-[8px] top-[33.5px] w-[130px]" data-name="ColorQuiz16Card3">
      <Container107 />
    </div>
  );
}

function HeaderFrame2() {
  return (
    <div className="absolute h-[113.5px] left-0 top-[559.5px] w-[438px]" data-name="Header Frame">
      <p className="absolute font-['Inter:Regular',sans-serif] font-normal leading-[14px] left-0 not-italic text-[#8e9199] text-[11px] top-0 tracking-[-0.14px] whitespace-nowrap">16. Соединить элементы интерфейса</p>
      <ColorQuiz16Card />
      <ColorQuiz16Card1 />
      <ColorQuiz16Card2 />
    </div>
  );
}

function ContentFrame3() {
  return (
    <div className="absolute contents left-0 top-0" data-name="Content Frame">
      <p className="absolute font-['Inter:Regular',sans-serif] font-normal leading-[30px] left-0 not-italic text-[#101828] text-[20px] top-0 tracking-[-0.4492px] whitespace-nowrap">Connect</p>
      <p className="absolute font-['Inter:Regular',sans-serif] font-normal leading-[14px] left-0 not-italic text-[#8e9199] text-[11px] top-[97.5px] tracking-[-0.14px] whitespace-nowrap">13. Соединить цветные элементы</p>
      <ColorQuiz13Card />
      <ColorQuiz13Card1 />
      <ColorQuiz13Card2 />
      <HeaderFrame />
      <HeaderFrame1 />
      <HeaderFrame2 />
    </div>
  );
}

function ContentFrame2() {
  return (
    <div className="absolute h-[673px] left-[33px] top-[4475.5px] w-[438px]" data-name="Content Frame">
      <ContentFrame3 />
    </div>
  );
}

function MainFrame() {
  return (
    <div className="absolute h-[5148.5px] left-0 top-0 w-[520px]" data-name="Main Frame">
      <MainFrame1 />
      <ContentFrame />
      <ContentFrame1 />
      <ContentFrame2 />
    </div>
  );
}

export default function Component() {
  return (
    <div className="relative size-full" data-name="Цвет">
      <MainFrame />
    </div>
  );
}

// ─────────────────────────────────────────────────────────────────────────────
// Named exports for LessonQuizPage (quiz_color visuals)
// ─────────────────────────────────────────────────────────────────────────────

// ── Compare UI — Q1 (correct=А=good) ────────────────────────────────────────
/** Blue + grey Cancel = clear hierarchy = GOOD (А label, correct) */
export function CQColorCompare1A() {
  return <div style={{ position: "relative", width: 207, height: 231 }}><ColorQuiz1VariantB /></div>;
}
/** Two blue buttons = no hierarchy = BAD (Б label) */
export function CQColorCompare1B() {
  return <div style={{ position: "relative", width: 207, height: 231 }}><ColorQuiz1VariantA /></div>;
}

// ── Compare UI — Q2 (correct=Б=good) ────────────────────────────────────────
/** Grey error text only = error not prominent = BAD (А label) */
export function CQColorCompare2A() {
  return <div style={{ position: "relative", width: 207, height: 231 }}><ColorQuiz2VariantA /></div>;
}
/** Red border + red icon error = clearly visible = GOOD (Б label, correct) */
export function CQColorCompare2B() {
  return <div style={{ position: "relative", width: 207, height: 231 }}><ColorQuiz2VariantB /></div>;
}

// ── Compare UI — Q3 (correct=А=good) ────────────────────────────────────────
/** Unified blue+grey buttons = GOOD (А label, correct) */
export function CQColorCompare3A() {
  return <div style={{ position: "relative", width: 207, height: 231 }}><ColorQuiz3VariantB /></div>;
}
/** Chaotic rainbow buttons = BAD (Б label) */
export function CQColorCompare3B() {
  return <div style={{ position: "relative", width: 207, height: 231 }}><ColorQuiz3VariantA /></div>;
}

// ── Single Choice — Q4 ───────────────────────────────────────────────────────
export function CQColorSingle1() {
  return (
    <div style={{ position: "relative", background: "white", height: 231, width: 186, overflow: "hidden", paddingTop: 10, paddingLeft: 10, paddingRight: 10, borderRadius: 15 }}>
      <Container54 />
    </div>
  );
}

// ── Single Choice — Q5 ───────────────────────────────────────────────────────
export function CQColorSingle2() {
  return (
    <div style={{ position: "relative", background: "white", height: 231, width: 186, overflow: "hidden", paddingTop: 10, paddingLeft: 10, paddingRight: 10, borderRadius: 15 }}>
      <Container57 />
    </div>
  );
}

// ── Single Choice — Q6 ───────────────────────────────────────────────────────
export function CQColorSingle3() {
  return (
    <div style={{ position: "relative", background: "white", height: 231, width: 186, overflow: "hidden", paddingTop: 10, paddingLeft: 10, paddingRight: 10, borderRadius: 15 }}>
      <Container60 />
    </div>
  );
}

// ── Multi Choice — Q7 ────────────────────────────────────────────────────────
export function CQColorMulti1() {
  return (
    <div style={{ position: "relative", background: "white", height: 231, width: 186, overflow: "hidden", paddingTop: 10, paddingLeft: 10, paddingRight: 10, borderRadius: 15 }}>
      <Container62 />
    </div>
  );
}

// ── Multi Choice — Q8 ────────────────────────────────────────────────────────
export function CQColorMulti2() {
  return (
    <div style={{ position: "relative", background: "white", height: 231, width: 186, overflow: "hidden", paddingTop: 10, paddingLeft: 10, paddingRight: 10, borderRadius: 15 }}>
      <Container70 />
    </div>
  );
}

// ── Multi Choice — Q9 ────────────────────────────────────────────────────────
export function CQColorMulti3() {
  return (
    <div style={{ position: "relative", background: "white", height: 231, width: 186, overflow: "hidden", paddingTop: 10, paddingLeft: 10, paddingRight: 10, borderRadius: 15 }}>
      <Container74 />
    </div>
  );
}

// ── Connect / Matching Q10 — элемент → уровень важности ─────────────────────
/** Крупный заголовок → Высокая важность */
export function CQColorConn1A() { return <ColorQuiz16Card />; }
/** Яркая кнопка (blue) → Средняя важность */
export function CQColorConn1B() { return <ColorQuiz14Card />; }
/** Серый текст → Низкая важность */
export function CQColorConn1C() { return <ColorQuiz14Card1 />; }

// ── Connect / Matching Q11 — элемент → функция ──────────────────────────────
/** Крупный заголовок → Привлекает внимание */
export function CQColorConn2A() { return <ColorQuiz16Card />; }
/** Яркая кнопка → Основное действие */
export function CQColorConn2B() { return <ColorQuiz14Card />; }
/** Уведомление (yellow) → Дополнительная информация */
export function CQColorConn2C() { return <ColorQuiz14Card2 />; }

// ── Connect / Matching Q12 — проблема → принцип UX ──────────────────────────
/** Много цветов (visual noise) → Визуальная иерархия */
export function CQColorConn3A() { return <ColorQuiz15Card />; }
/** Кнопка не выделяется → Контраст */
export function CQColorConn3B() { return <ColorQuiz15Card1 />; }
/** Ошибка незаметна → Читаемость */
export function CQColorConn3C() { return <ColorQuiz15Card2 />; }