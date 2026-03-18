function Paragraph() {
  return (
    <div className="absolute h-[19.5px] left-0 top-[82.5px] w-[8.633px]" data-name="Paragraph">
      <p className="absolute font-['Inter:Regular',sans-serif] font-normal leading-[19.5px] left-0 not-italic text-[#364146] text-[13px] top-px tracking-[-0.16px] whitespace-nowrap">A</p>
    </div>
  );
}

function Paragraph1() {
  return (
    <div className="h-[15px] relative shrink-0 w-full" data-name="Paragraph">
      <p className="absolute font-['Inter:Regular',sans-serif] font-normal leading-[15px] left-0 not-italic text-[10px] text-white top-[0.5px] tracking-[-0.13px] whitespace-nowrap">Купить</p>
    </div>
  );
}

function Container1() {
  return (
    <div className="bg-[#364146] h-[31px] relative rounded-[9px] shrink-0 w-[166px]" data-name="Container">
      <div className="bg-clip-padding border-0 border-[transparent] border-solid content-stretch flex flex-col items-start pt-[8px] px-[16px] relative size-full">
        <Paragraph1 />
      </div>
    </div>
  );
}

function Paragraph2() {
  return (
    <div className="h-[13.5px] relative shrink-0 w-full" data-name="Paragraph">
      <p className="absolute font-['Inter:Regular',sans-serif] font-normal leading-[13.5px] left-0 not-italic text-[#364146] text-[9px] top-[0.5px] tracking-[-0.12px] whitespace-nowrap">Отмена</p>
    </div>
  );
}

function Container2() {
  return (
    <div className="bg-[#f7f8fc] h-[25.5px] relative rounded-[6px] shrink-0 w-[166px]" data-name="Container">
      <div className="bg-clip-padding border-0 border-[transparent] border-solid content-stretch flex flex-col items-start pt-[6px] px-[12px] relative size-full">
        <Paragraph2 />
      </div>
    </div>
  );
}

function Paragraph3() {
  return (
    <div className="h-[15px] relative shrink-0 w-full" data-name="Paragraph">
      <p className="absolute font-['Inter:Regular',sans-serif] font-normal leading-[15px] left-0 not-italic text-[10px] text-white top-[0.5px] tracking-[-0.13px] whitespace-nowrap">Сохранить</p>
    </div>
  );
}

function Container3() {
  return (
    <div className="bg-[#364146] h-[33px] relative rounded-[12px] shrink-0 w-[166px]" data-name="Container">
      <div className="bg-clip-padding border-0 border-[transparent] border-solid content-stretch flex flex-col items-start pt-[9px] px-[18px] relative size-full">
        <Paragraph3 />
      </div>
    </div>
  );
}

function Paragraph4() {
  return (
    <div className="h-[12px] relative shrink-0 w-full" data-name="Paragraph">
      <p className="absolute font-['Inter:Regular',sans-serif] font-normal leading-[12px] left-0 not-italic text-[#364146] text-[8px] top-0 tracking-[-0.1px] whitespace-nowrap">Продолжить</p>
    </div>
  );
}

function Container4() {
  return (
    <div className="bg-[#f7f8fc] h-[22px] relative rounded-[4px] shrink-0 w-[166px]" data-name="Container">
      <div className="bg-clip-padding border-0 border-[transparent] border-solid content-stretch flex flex-col items-start pt-[5px] px-[10px] relative size-full">
        <Paragraph4 />
      </div>
    </div>
  );
}

function Container() {
  return (
    <div className="content-stretch flex flex-col gap-[10px] h-[211px] items-start justify-center py-[34.75px] relative shrink-0 w-full" data-name="Container">
      <Container1 />
      <Container2 />
      <Container3 />
      <Container4 />
    </div>
  );
}

function Lesson2Quiz1VariantA() {
  return (
    <div className="absolute bg-white content-stretch flex flex-col h-[231px] items-start left-[16.63px] overflow-clip pt-[10px] px-[10px] rounded-[14.99px] top-[74.5px] w-[186px]" data-name="Lesson2Quiz1VariantA">
      <Container />
    </div>
  );
}

function Paragraph5() {
  return (
    <div className="absolute h-[19.5px] left-[234.63px] top-[82.5px] w-[8.305px]" data-name="Paragraph">
      <p className="absolute font-['Inter:Regular',sans-serif] font-normal leading-[19.5px] left-0 not-italic text-[#22c55e] text-[13px] top-px tracking-[-0.16px] whitespace-nowrap">B</p>
    </div>
  );
}

function Paragraph6() {
  return (
    <div className="h-[15px] relative shrink-0 w-[166px]" data-name="Paragraph">
      <div className="bg-clip-padding border-0 border-[transparent] border-solid relative size-full">
        <p className="absolute font-['Inter:Regular',sans-serif] font-normal leading-[15px] left-0 not-italic text-[#8e9199] text-[10px] top-[0.5px] tracking-[-0.13px] whitespace-nowrap">UI Kit / Кнопки</p>
      </div>
    </div>
  );
}

function Paragraph7() {
  return (
    <div className="h-[12px] relative shrink-0 w-full" data-name="Paragraph">
      <p className="absolute font-['Inter:Regular',sans-serif] font-normal leading-[12px] left-0 not-italic text-[#8e9199] text-[8px] top-0 tracking-[-0.1px] whitespace-nowrap">Primary button</p>
    </div>
  );
}

function Paragraph8() {
  return (
    <div className="h-[13.5px] relative shrink-0 w-full" data-name="Paragraph">
      <p className="absolute font-['Inter:Regular',sans-serif] font-normal leading-[13.5px] left-0 not-italic text-[9px] text-white top-[0.5px] tracking-[-0.12px] whitespace-nowrap">Primary</p>
    </div>
  );
}

function Container8() {
  return (
    <div className="bg-[#364146] h-[27.5px] relative rounded-[6px] shrink-0 w-full" data-name="Container">
      <div className="content-stretch flex flex-col items-start pt-[7px] px-[14px] relative size-full">
        <Paragraph8 />
      </div>
    </div>
  );
}

function Container7() {
  return (
    <div className="h-[42.5px] relative shrink-0 w-[166px]" data-name="Container">
      <div className="bg-clip-padding border-0 border-[transparent] border-solid content-stretch flex flex-col gap-[3px] items-start relative size-full">
        <Paragraph7 />
        <Container8 />
      </div>
    </div>
  );
}

function Paragraph9() {
  return (
    <div className="h-[12px] relative shrink-0 w-full" data-name="Paragraph">
      <p className="absolute font-['Inter:Regular',sans-serif] font-normal leading-[12px] left-0 not-italic text-[#8e9199] text-[8px] top-0 tracking-[-0.1px] whitespace-nowrap">Secondary button</p>
    </div>
  );
}

function Paragraph10() {
  return (
    <div className="h-[13.5px] relative shrink-0 w-full" data-name="Paragraph">
      <p className="absolute font-['Inter:Regular',sans-serif] font-normal leading-[13.5px] left-0 not-italic text-[#364146] text-[9px] top-[0.5px] tracking-[-0.12px] whitespace-nowrap">Secondary</p>
    </div>
  );
}

function Container10() {
  return (
    <div className="bg-[#f7f8fc] h-[27.5px] relative rounded-[6px] shrink-0 w-full" data-name="Container">
      <div className="content-stretch flex flex-col items-start pt-[7px] px-[14px] relative size-full">
        <Paragraph10 />
      </div>
    </div>
  );
}

function Container9() {
  return (
    <div className="h-[42.5px] relative shrink-0 w-[166px]" data-name="Container">
      <div className="bg-clip-padding border-0 border-[transparent] border-solid content-stretch flex flex-col gap-[3px] items-start relative size-full">
        <Paragraph9 />
        <Container10 />
      </div>
    </div>
  );
}

function Paragraph11() {
  return (
    <div className="h-[12px] relative shrink-0 w-full" data-name="Paragraph">
      <p className="absolute font-['Inter:Regular',sans-serif] font-normal leading-[12px] left-0 not-italic text-[#8e9199] text-[8px] top-0 tracking-[-0.1px] whitespace-nowrap">Disabled button</p>
    </div>
  );
}

function Paragraph12() {
  return (
    <div className="h-[13.5px] relative shrink-0 w-full" data-name="Paragraph">
      <p className="absolute font-['Inter:Regular',sans-serif] font-normal leading-[13.5px] left-0 not-italic text-[#8e9199] text-[9px] top-[0.5px] tracking-[-0.12px] whitespace-nowrap">Disabled</p>
    </div>
  );
}

function Container12() {
  return (
    <div className="bg-[#d1d3db] h-[27.5px] relative rounded-[6px] shrink-0 w-full" data-name="Container">
      <div className="content-stretch flex flex-col items-start pt-[7px] px-[14px] relative size-full">
        <Paragraph12 />
      </div>
    </div>
  );
}

function Container11() {
  return (
    <div className="flex-[1_0_0] min-h-px min-w-px relative w-[166px]" data-name="Container">
      <div className="bg-clip-padding border-0 border-[transparent] border-solid content-stretch flex flex-col gap-[3px] items-start relative size-full">
        <Paragraph11 />
        <Container12 />
      </div>
    </div>
  );
}

function Container6() {
  return (
    <div className="h-[143.5px] relative shrink-0 w-[166px]" data-name="Container">
      <div className="bg-clip-padding border-0 border-[transparent] border-solid content-stretch flex flex-col gap-[8px] items-start relative size-full">
        <Container7 />
        <Container9 />
        <Container11 />
      </div>
    </div>
  );
}

function Container5() {
  return (
    <div className="content-stretch flex flex-col gap-[12px] h-[211px] items-start relative shrink-0 w-full" data-name="Container">
      <Paragraph6 />
      <Container6 />
    </div>
  );
}

function Lesson2Quiz1VariantB() {
  return (
    <div className="absolute bg-white content-stretch flex flex-col h-[231px] items-start left-[250.94px] overflow-clip pt-[10px] px-[10px] rounded-[14.99px] top-[74.5px] w-[186px]" data-name="Lesson2Quiz1VariantB">
      <Container5 />
    </div>
  );
}

function Paragraph13() {
  return (
    <div className="absolute h-[19.5px] left-0 top-[374.5px] w-[8.633px]" data-name="Paragraph">
      <p className="absolute font-['Inter:Regular',sans-serif] font-normal leading-[19.5px] left-0 not-italic text-[#364146] text-[13px] top-px tracking-[-0.16px] whitespace-nowrap">A</p>
    </div>
  );
}

function Paragraph14() {
  return (
    <div className="h-[13.5px] relative shrink-0 w-[166px]" data-name="Paragraph">
      <div className="bg-clip-padding border-0 border-[transparent] border-solid relative size-full">
        <p className="absolute font-['Inter:Regular',sans-serif] font-normal leading-[13.5px] left-0 not-italic text-[#101828] text-[9px] top-[0.5px] tracking-[-0.12px] whitespace-nowrap">Имя</p>
      </div>
    </div>
  );
}

function Paragraph15() {
  return (
    <div className="h-[12px] relative shrink-0 w-full" data-name="Paragraph">
      <p className="absolute font-['Inter:Regular',sans-serif] font-normal leading-[12px] left-0 not-italic text-[#8e9199] text-[8px] top-0 tracking-[-0.1px] whitespace-nowrap">Ваше имя</p>
    </div>
  );
}

function Container15() {
  return (
    <div className="bg-[#f7f8fc] flex-[1_0_0] min-h-px min-w-px relative rounded-[6px] w-[120px]" data-name="Container">
      <div className="bg-clip-padding border-0 border-[transparent] border-solid content-stretch flex flex-col items-start pt-[6px] px-[12px] relative size-full">
        <Paragraph15 />
      </div>
    </div>
  );
}

function Container14() {
  return (
    <div className="h-[40.5px] relative shrink-0 w-[166px]" data-name="Container">
      <div className="bg-clip-padding border-0 border-[transparent] border-solid content-stretch flex flex-col gap-[3px] items-start relative size-full">
        <Paragraph14 />
        <Container15 />
      </div>
    </div>
  );
}

function Paragraph16() {
  return (
    <div className="h-[12px] relative shrink-0 w-[166px]" data-name="Paragraph">
      <div className="bg-clip-padding border-0 border-[transparent] border-solid relative size-full">
        <p className="absolute font-['Inter:Regular',sans-serif] font-normal leading-[12px] left-0 not-italic text-[#101828] text-[8px] top-0 tracking-[-0.1px] whitespace-nowrap">Email</p>
      </div>
    </div>
  );
}

function Paragraph17() {
  return (
    <div className="h-[12px] relative shrink-0 w-full" data-name="Paragraph">
      <p className="absolute font-['Inter:Regular',sans-serif] font-normal leading-[12px] left-0 not-italic text-[#8e9199] text-[8px] top-0 tracking-[-0.1px] whitespace-nowrap">Email</p>
    </div>
  );
}

function Container17() {
  return (
    <div className="bg-[#f7f8fc] flex-[1_0_0] min-h-px min-w-px relative rounded-[6px] w-[140px]" data-name="Container">
      <div className="bg-clip-padding border-0 border-[transparent] border-solid content-stretch flex flex-col items-start pt-[7px] px-[10px] relative size-full">
        <Paragraph17 />
      </div>
    </div>
  );
}

function Container16() {
  return (
    <div className="h-[42px] relative shrink-0 w-[166px]" data-name="Container">
      <div className="bg-clip-padding border-0 border-[transparent] border-solid content-stretch flex flex-col gap-[4px] items-start relative size-full">
        <Paragraph16 />
        <Container17 />
      </div>
    </div>
  );
}

function Paragraph18() {
  return (
    <div className="h-[13.5px] relative shrink-0 w-[166px]" data-name="Paragraph">
      <div className="bg-clip-padding border-0 border-[transparent] border-solid relative size-full">
        <p className="absolute font-['Inter:Regular',sans-serif] font-normal leading-[13.5px] left-0 not-italic text-[#101828] text-[9px] top-[0.5px] tracking-[-0.12px] whitespace-nowrap">Пароль</p>
      </div>
    </div>
  );
}

function Paragraph19() {
  return (
    <div className="h-[12px] relative shrink-0 w-full" data-name="Paragraph">
      <p className="absolute font-['Inter:Regular',sans-serif] font-normal leading-[12px] left-0 not-italic text-[#8e9199] text-[8px] top-0 tracking-[-0.1px] whitespace-nowrap">••••••</p>
    </div>
  );
}

function Container19() {
  return (
    <div className="bg-[#f7f8fc] flex-[1_0_0] min-h-px min-w-px relative rounded-[6px] w-[110px]" data-name="Container">
      <div className="bg-clip-padding border-0 border-[transparent] border-solid content-stretch flex flex-col items-start pt-[5px] px-[14px] relative size-full">
        <Paragraph19 />
      </div>
    </div>
  );
}

function Container18() {
  return (
    <div className="h-[38.5px] relative shrink-0 w-[166px]" data-name="Container">
      <div className="bg-clip-padding border-0 border-[transparent] border-solid content-stretch flex flex-col gap-[3px] items-start relative size-full">
        <Paragraph18 />
        <Container19 />
      </div>
    </div>
  );
}

function Container13() {
  return (
    <div className="content-stretch flex flex-col gap-[10px] h-[211px] items-start justify-center py-[34.5px] relative shrink-0 w-full" data-name="Container">
      <Container14 />
      <Container16 />
      <Container18 />
    </div>
  );
}

function Lesson2Quiz2VariantA() {
  return (
    <div className="absolute bg-white content-stretch flex flex-col h-[231px] items-start left-[16.63px] overflow-clip pt-[10px] px-[10px] rounded-[14.99px] top-[366.5px] w-[186px]" data-name="Lesson2Quiz2VariantA">
      <Container13 />
    </div>
  );
}

function Paragraph20() {
  return (
    <div className="absolute h-[19.5px] left-[234.63px] top-[374.5px] w-[8.305px]" data-name="Paragraph">
      <p className="absolute font-['Inter:Regular',sans-serif] font-normal leading-[19.5px] left-0 not-italic text-[#22c55e] text-[13px] top-px tracking-[-0.16px] whitespace-nowrap">B</p>
    </div>
  );
}

function Paragraph21() {
  return (
    <div className="h-[13.5px] relative shrink-0 w-[166px]" data-name="Paragraph">
      <div className="bg-clip-padding border-0 border-[transparent] border-solid relative size-full">
        <p className="absolute font-['Inter:Regular',sans-serif] font-normal leading-[13.5px] left-0 not-italic text-[#101828] text-[9px] top-[0.5px] tracking-[-0.12px] whitespace-nowrap">Имя</p>
      </div>
    </div>
  );
}

function Paragraph22() {
  return (
    <div className="h-[12px] relative shrink-0 w-full" data-name="Paragraph">
      <p className="absolute font-['Inter:Regular',sans-serif] font-normal leading-[12px] left-0 not-italic text-[#8e9199] text-[8px] top-0 tracking-[-0.1px] whitespace-nowrap">Ваше имя</p>
    </div>
  );
}

function Container22() {
  return (
    <div className="bg-[#f7f8fc] flex-[1_0_0] min-h-px min-w-px relative rounded-[6px] w-[166px]" data-name="Container">
      <div className="bg-clip-padding border-0 border-[transparent] border-solid content-stretch flex flex-col items-start pt-[6px] px-[12px] relative size-full">
        <Paragraph22 />
      </div>
    </div>
  );
}

function Container21() {
  return (
    <div className="h-[41.5px] relative shrink-0 w-[166px]" data-name="Container">
      <div className="bg-clip-padding border-0 border-[transparent] border-solid content-stretch flex flex-col gap-[4px] items-start relative size-full">
        <Paragraph21 />
        <Container22 />
      </div>
    </div>
  );
}

function Paragraph23() {
  return (
    <div className="h-[13.5px] relative shrink-0 w-[166px]" data-name="Paragraph">
      <div className="bg-clip-padding border-0 border-[transparent] border-solid relative size-full">
        <p className="absolute font-['Inter:Regular',sans-serif] font-normal leading-[13.5px] left-0 not-italic text-[#101828] text-[9px] top-[0.5px] tracking-[-0.12px] whitespace-nowrap">Email</p>
      </div>
    </div>
  );
}

function Paragraph24() {
  return (
    <div className="h-[12px] relative shrink-0 w-full" data-name="Paragraph">
      <p className="absolute font-['Inter:Regular',sans-serif] font-normal leading-[12px] left-0 not-italic text-[#8e9199] text-[8px] top-0 tracking-[-0.1px] whitespace-nowrap">your@email.com</p>
    </div>
  );
}

function Container24() {
  return (
    <div className="bg-[#f7f8fc] flex-[1_0_0] min-h-px min-w-px relative rounded-[6px] w-[166px]" data-name="Container">
      <div className="bg-clip-padding border-0 border-[transparent] border-solid content-stretch flex flex-col items-start pt-[6px] px-[12px] relative size-full">
        <Paragraph24 />
      </div>
    </div>
  );
}

function Container23() {
  return (
    <div className="h-[41.5px] relative shrink-0 w-[166px]" data-name="Container">
      <div className="bg-clip-padding border-0 border-[transparent] border-solid content-stretch flex flex-col gap-[4px] items-start relative size-full">
        <Paragraph23 />
        <Container24 />
      </div>
    </div>
  );
}

function Paragraph25() {
  return (
    <div className="h-[13.5px] relative shrink-0 w-[166px]" data-name="Paragraph">
      <div className="bg-clip-padding border-0 border-[transparent] border-solid relative size-full">
        <p className="absolute font-['Inter:Regular',sans-serif] font-normal leading-[13.5px] left-0 not-italic text-[#101828] text-[9px] top-[0.5px] tracking-[-0.12px] whitespace-nowrap">Пароль</p>
      </div>
    </div>
  );
}

function Paragraph26() {
  return (
    <div className="h-[12px] relative shrink-0 w-full" data-name="Paragraph">
      <p className="absolute font-['Inter:Regular',sans-serif] font-normal leading-[12px] left-0 not-italic text-[#8e9199] text-[8px] top-0 tracking-[-0.1px] whitespace-nowrap">••••••••</p>
    </div>
  );
}

function Container26() {
  return (
    <div className="bg-[#f7f8fc] flex-[1_0_0] min-h-px min-w-px relative rounded-[6px] w-[166px]" data-name="Container">
      <div className="bg-clip-padding border-0 border-[transparent] border-solid content-stretch flex flex-col items-start pt-[6px] px-[12px] relative size-full">
        <Paragraph26 />
      </div>
    </div>
  );
}

function Container25() {
  return (
    <div className="h-[41.5px] relative shrink-0 w-[166px]" data-name="Container">
      <div className="bg-clip-padding border-0 border-[transparent] border-solid content-stretch flex flex-col gap-[4px] items-start relative size-full">
        <Paragraph25 />
        <Container26 />
      </div>
    </div>
  );
}

function Container20() {
  return (
    <div className="content-stretch flex flex-col gap-[10px] h-[211px] items-start justify-center py-[33.25px] relative shrink-0 w-full" data-name="Container">
      <Container21 />
      <Container23 />
      <Container25 />
    </div>
  );
}

function Lesson2Quiz2VariantB() {
  return (
    <div className="absolute bg-white content-stretch flex flex-col h-[231px] items-start left-[250.94px] overflow-clip pt-[10px] px-[10px] rounded-[14.99px] top-[366.5px] w-[186px]" data-name="Lesson2Quiz2VariantB">
      <Container20 />
    </div>
  );
}

function Paragraph27() {
  return (
    <div className="absolute h-[19.5px] left-0 top-[666.5px] w-[8.633px]" data-name="Paragraph">
      <p className="absolute font-['Inter:Regular',sans-serif] font-normal leading-[19.5px] left-0 not-italic text-[#364146] text-[13px] top-px tracking-[-0.16px] whitespace-nowrap">A</p>
    </div>
  );
}

function Container29() {
  return <div className="absolute bg-[#d1d3db] h-[30px] left-[8px] rounded-[4px] top-[8px] w-[90px]" data-name="Container" />;
}

function Paragraph28() {
  return (
    <div className="absolute h-[10.5px] left-[8px] top-[41px] w-[150px]" data-name="Paragraph">
      <p className="absolute font-['Inter:Regular',sans-serif] font-normal leading-[10.5px] left-0 not-italic text-[#101828] text-[7px] top-0 tracking-[-0.09px] whitespace-nowrap">UX Курс</p>
    </div>
  );
}

function Container28() {
  return (
    <div className="bg-[#f7f8fc] h-[60px] relative rounded-[8px] shrink-0 w-[166px]" data-name="Container">
      <div className="bg-clip-padding border-0 border-[transparent] border-solid relative size-full">
        <Container29 />
        <Paragraph28 />
      </div>
    </div>
  );
}

function Container31() {
  return <div className="bg-[#d1d3db] h-[35px] rounded-[4px] shrink-0 w-full" data-name="Container" />;
}

function Paragraph29() {
  return (
    <div className="h-[10.5px] relative shrink-0 w-full" data-name="Paragraph">
      <p className="absolute font-['Inter:Regular',sans-serif] font-normal leading-[10.5px] left-0 not-italic text-[#101828] text-[7px] top-0 tracking-[-0.09px] whitespace-nowrap">UI Дизайн</p>
    </div>
  );
}

function Container30() {
  return (
    <div className="bg-[#f7f8fc] h-[70px] relative rounded-[8px] shrink-0 w-[166px]" data-name="Container">
      <div className="bg-clip-padding border-0 border-[transparent] border-solid content-stretch flex flex-col gap-[4px] items-start pt-[10px] px-[10px] relative size-full">
        <Container31 />
        <Paragraph29 />
      </div>
    </div>
  );
}

function Container33() {
  return <div className="absolute bg-[#d1d3db] h-[28px] left-[6px] rounded-[4px] top-[6px] w-[80px]" data-name="Container" />;
}

function Paragraph30() {
  return (
    <div className="absolute h-[10.5px] left-[6px] top-[36px] w-[154px]" data-name="Paragraph">
      <p className="absolute font-['Inter:Regular',sans-serif] font-normal leading-[10.5px] left-0 not-italic text-[#101828] text-[7px] top-0 tracking-[-0.09px] whitespace-nowrap">Figma</p>
    </div>
  );
}

function Container32() {
  return (
    <div className="bg-[#f7f8fc] h-[55px] relative rounded-[8px] shrink-0 w-[166px]" data-name="Container">
      <div className="bg-clip-padding border-0 border-[transparent] border-solid relative size-full">
        <Container33 />
        <Paragraph30 />
      </div>
    </div>
  );
}

function Container27() {
  return (
    <div className="content-stretch flex flex-col gap-[6px] h-[211px] items-start relative shrink-0 w-full" data-name="Container">
      <Container28 />
      <Container30 />
      <Container32 />
    </div>
  );
}

function Lesson2Quiz3VariantA() {
  return (
    <div className="absolute bg-white content-stretch flex flex-col h-[231px] items-start left-[16.63px] overflow-clip pt-[10px] px-[10px] rounded-[14.99px] top-[658.5px] w-[186px]" data-name="Lesson2Quiz3VariantA">
      <Container27 />
    </div>
  );
}

function Paragraph31() {
  return (
    <div className="absolute h-[19.5px] left-[234.63px] top-[666.5px] w-[8.305px]" data-name="Paragraph">
      <p className="absolute font-['Inter:Regular',sans-serif] font-normal leading-[19.5px] left-0 not-italic text-[#22c55e] text-[13px] top-px tracking-[-0.16px] whitespace-nowrap">B</p>
    </div>
  );
}

function Container36() {
  return <div className="bg-[#d1d3db] h-[30px] rounded-[4px] shrink-0 w-full" data-name="Container" />;
}

function Paragraph32() {
  return (
    <div className="h-[12px] relative shrink-0 w-full" data-name="Paragraph">
      <p className="absolute font-['Inter:Regular',sans-serif] font-normal leading-[12px] left-0 not-italic text-[#101828] text-[8px] top-0 tracking-[-0.1px] whitespace-nowrap">UX Курс</p>
    </div>
  );
}

function Container35() {
  return (
    <div className="bg-[#f7f8fc] h-[60px] relative rounded-[8px] shrink-0 w-[166px]" data-name="Container">
      <div className="bg-clip-padding border-0 border-[transparent] border-solid content-stretch flex flex-col gap-[4px] items-start pt-[8px] px-[8px] relative size-full">
        <Container36 />
        <Paragraph32 />
      </div>
    </div>
  );
}

function Container38() {
  return <div className="bg-[#d1d3db] h-[30px] rounded-[4px] shrink-0 w-full" data-name="Container" />;
}

function Paragraph33() {
  return (
    <div className="h-[12px] relative shrink-0 w-full" data-name="Paragraph">
      <p className="absolute font-['Inter:Regular',sans-serif] font-normal leading-[12px] left-0 not-italic text-[#101828] text-[8px] top-0 tracking-[-0.1px] whitespace-nowrap">UI Дизайн</p>
    </div>
  );
}

function Container37() {
  return (
    <div className="bg-[#f7f8fc] h-[60px] relative rounded-[8px] shrink-0 w-[166px]" data-name="Container">
      <div className="bg-clip-padding border-0 border-[transparent] border-solid content-stretch flex flex-col gap-[4px] items-start pt-[8px] px-[8px] relative size-full">
        <Container38 />
        <Paragraph33 />
      </div>
    </div>
  );
}

function Container40() {
  return <div className="bg-[#d1d3db] h-[30px] rounded-[4px] shrink-0 w-full" data-name="Container" />;
}

function Paragraph34() {
  return (
    <div className="h-[12px] relative shrink-0 w-full" data-name="Paragraph">
      <p className="absolute font-['Inter:Regular',sans-serif] font-normal leading-[12px] left-0 not-italic text-[#101828] text-[8px] top-0 tracking-[-0.1px] whitespace-nowrap">Figma</p>
    </div>
  );
}

function Container39() {
  return (
    <div className="bg-[#f7f8fc] h-[60px] relative rounded-[8px] shrink-0 w-[166px]" data-name="Container">
      <div className="bg-clip-padding border-0 border-[transparent] border-solid content-stretch flex flex-col gap-[4px] items-start pt-[8px] px-[8px] relative size-full">
        <Container40 />
        <Paragraph34 />
      </div>
    </div>
  );
}

function Container34() {
  return (
    <div className="content-stretch flex flex-col gap-[6px] h-[211px] items-start relative shrink-0 w-full" data-name="Container">
      <Container35 />
      <Container37 />
      <Container39 />
    </div>
  );
}

function Lesson2Quiz3VariantB() {
  return (
    <div className="absolute bg-white content-stretch flex flex-col h-[231px] items-start left-[250.94px] overflow-clip pt-[10px] px-[10px] rounded-[14.99px] top-[658.5px] w-[186px]" data-name="Lesson2Quiz3VariantB">
      <Container34 />
    </div>
  );
}

function Paragraph35() {
  return (
    <div className="absolute h-[19.5px] left-0 top-[958.5px] w-[8.633px]" data-name="Paragraph">
      <p className="absolute font-['Inter:Regular',sans-serif] font-normal leading-[19.5px] left-0 not-italic text-[#364146] text-[13px] top-px tracking-[-0.16px] whitespace-nowrap">A</p>
    </div>
  );
}

function Container42() {
  return (
    <div className="relative rounded-[16777200px] shrink-0 size-[18px]" data-name="Container">
      <div aria-hidden="true" className="absolute border-[#364146] border-[1.5px] border-solid inset-0 pointer-events-none rounded-[16777200px]" />
    </div>
  );
}

function Container43() {
  return (
    <div className="relative rounded-[4px] shrink-0 size-[22px]" data-name="Container">
      <div aria-hidden="true" className="absolute border-2 border-[#364146] border-solid inset-0 pointer-events-none rounded-[4px]" />
    </div>
  );
}

function Container44() {
  return (
    <div className="h-[12px] relative rounded-[2px] shrink-0 w-[11px]" data-name="Container">
      <div aria-hidden="true" className="absolute border border-[#364146] border-solid inset-0 pointer-events-none rounded-[2px]" />
    </div>
  );
}

function Container41() {
  return (
    <div className="h-[211px] relative shrink-0 w-full" data-name="Container">
      <div className="flex flex-row items-center justify-center size-full">
        <div className="content-stretch flex gap-[12px] items-center justify-center px-[43px] relative size-full">
          <Container42 />
          <Container43 />
          <Container44 />
        </div>
      </div>
    </div>
  );
}

function Lesson2Quiz4VariantA() {
  return (
    <div className="absolute bg-white content-stretch flex flex-col h-[231px] items-start left-[16.63px] overflow-clip pt-[10px] px-[10px] rounded-[14.99px] top-[950.5px] w-[186px]" data-name="Lesson2Quiz4VariantA">
      <Container41 />
    </div>
  );
}

function Paragraph36() {
  return (
    <div className="absolute h-[19.5px] left-[234.63px] top-[958.5px] w-[8.305px]" data-name="Paragraph">
      <p className="absolute font-['Inter:Regular',sans-serif] font-normal leading-[19.5px] left-0 not-italic text-[#22c55e] text-[13px] top-px tracking-[-0.16px] whitespace-nowrap">B</p>
    </div>
  );
}

function Container46() {
  return (
    <div className="relative rounded-[16777200px] shrink-0 size-[20px]" data-name="Container">
      <div aria-hidden="true" className="absolute border-[#364146] border-[1.5px] border-solid inset-0 pointer-events-none rounded-[16777200px]" />
    </div>
  );
}

function Container47() {
  return (
    <div className="relative rounded-[4px] shrink-0 size-[20px]" data-name="Container">
      <div aria-hidden="true" className="absolute border-[#364146] border-[1.5px] border-solid inset-0 pointer-events-none rounded-[4px]" />
    </div>
  );
}

function Container48() {
  return (
    <div className="relative rounded-[2px] shrink-0 size-[20px]" data-name="Container">
      <div aria-hidden="true" className="absolute border-[#364146] border-[1.5px] border-solid inset-0 pointer-events-none rounded-[2px]" />
    </div>
  );
}

function Container45() {
  return (
    <div className="h-[211px] relative shrink-0 w-full" data-name="Container">
      <div className="flex flex-row items-center justify-center size-full">
        <div className="content-stretch flex gap-[12px] items-center justify-center px-[41px] relative size-full">
          <Container46 />
          <Container47 />
          <Container48 />
        </div>
      </div>
    </div>
  );
}

function Lesson2Quiz4VariantB() {
  return (
    <div className="absolute bg-white content-stretch flex flex-col h-[231px] items-start left-[250.94px] overflow-clip pt-[10px] px-[10px] rounded-[14.99px] top-[950.5px] w-[186px]" data-name="Lesson2Quiz4VariantB">
      <Container45 />
    </div>
  );
}

export default function UiKit() {
  return (
    <div className="relative size-full" data-name="Базовые элементы UI Kit">
      <p className="absolute font-['Inter:Regular',sans-serif] font-normal leading-[14px] left-0 not-italic text-[#8e9199] text-[11px] top-0 tracking-[-0.14px] whitespace-nowrap">Кнопки, поля ввода, карточки и иконки</p>
      <p className="absolute font-['Inter:Regular',sans-serif] font-normal leading-[13px] left-0 not-italic text-[#8e9199] text-[10px] top-[46px] tracking-[-0.13px] whitespace-nowrap">1. Где кнопки организованы правильнее?</p>
      <Paragraph />
      <Lesson2Quiz1VariantA />
      <Paragraph5 />
      <Lesson2Quiz1VariantB />
      <p className="absolute font-['Inter:Regular',sans-serif] font-normal leading-[13px] left-0 not-italic text-[#8e9199] text-[10px] top-[338px] tracking-[-0.13px] whitespace-nowrap">2. Где поля ввода сделаны правильнее?</p>
      <Paragraph13 />
      <Lesson2Quiz2VariantA />
      <Paragraph20 />
      <Lesson2Quiz2VariantB />
      <p className="absolute font-['Inter:Regular',sans-serif] font-normal leading-[13px] left-0 not-italic text-[#8e9199] text-[10px] top-[630px] tracking-[-0.13px] whitespace-nowrap">3. Где карточки интерфейса выглядят более системно?</p>
      <Paragraph27 />
      <Lesson2Quiz3VariantA />
      <Paragraph31 />
      <Lesson2Quiz3VariantB />
      <p className="absolute font-['Inter:Regular',sans-serif] font-normal leading-[13px] left-0 not-italic text-[#8e9199] text-[10px] top-[922px] tracking-[-0.13px] whitespace-nowrap">4. Где система иконок выглядит правильнее?</p>
      <Paragraph35 />
      <Lesson2Quiz4VariantA />
      <Paragraph36 />
      <Lesson2Quiz4VariantB />
    </div>
  );
}

// ─── Module 3 Lesson 2 quiz card exports ─────────────────────────────────────
export function M3L2Q1A() {
  return (
    <div style={{ position: "relative", width: 186, height: 231, overflow: "hidden" }}>
      <div style={{ position: "absolute", left: -16.63, top: -74.5 }}><Lesson2Quiz1VariantA /></div>
    </div>
  );
}
export function M3L2Q1B() {
  return (
    <div style={{ position: "relative", width: 186, height: 231, overflow: "hidden" }}>
      <div style={{ position: "absolute", left: -250.94, top: -74.5 }}><Lesson2Quiz1VariantB /></div>
    </div>
  );
}
export function M3L2Q2A() {
  return (
    <div style={{ position: "relative", width: 186, height: 231, overflow: "hidden" }}>
      <div style={{ position: "absolute", left: -16.63, top: -366.5 }}><Lesson2Quiz2VariantA /></div>
    </div>
  );
}
export function M3L2Q2B() {
  return (
    <div style={{ position: "relative", width: 186, height: 231, overflow: "hidden" }}>
      <div style={{ position: "absolute", left: -250.94, top: -366.5 }}><Lesson2Quiz2VariantB /></div>
    </div>
  );
}
export function M3L2Q3A() {
  return (
    <div style={{ position: "relative", width: 186, height: 231, overflow: "hidden" }}>
      <div style={{ position: "absolute", left: -16.63, top: -658.5 }}><Lesson2Quiz3VariantA /></div>
    </div>
  );
}
export function M3L2Q3B() {
  return (
    <div style={{ position: "relative", width: 186, height: 231, overflow: "hidden" }}>
      <div style={{ position: "absolute", left: -250.94, top: -658.5 }}><Lesson2Quiz3VariantB /></div>
    </div>
  );
}
export function M3L2Q4A() {
  return (
    <div style={{ position: "relative", width: 186, height: 231, overflow: "hidden" }}>
      <div style={{ position: "absolute", left: -16.63, top: -950.5 }}><Lesson2Quiz4VariantA /></div>
    </div>
  );
}
export function M3L2Q4B() {
  return (
    <div style={{ position: "relative", width: 186, height: 231, overflow: "hidden" }}>
      <div style={{ position: "absolute", left: -250.94, top: -950.5 }}><Lesson2Quiz4VariantB /></div>
    </div>
  );
}