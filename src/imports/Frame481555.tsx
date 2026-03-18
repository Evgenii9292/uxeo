

function Paragraph() {
  return (
    <div className="h-[15px] relative shrink-0 w-[45.305px]" data-name="Paragraph">
      <div className="bg-clip-padding border-0 border-[transparent] border-solid relative size-full">
        <p className="absolute font-['Inter:Regular',sans-serif] font-normal leading-[15px] left-0 not-italic text-[#101828] text-[13px] top-[0.5px] tracking-[-0.16px] whitespace-nowrap">Задачи</p>
      </div>
    </div>
  );
}

function Container1() {
  return (
    <div className="h-[16px] relative shrink-0 w-[166px]" data-name="Container">
      <div className="bg-clip-padding border-0 border-[transparent] border-solid content-stretch flex items-center justify-between relative size-full">
        <Paragraph />
      </div>
    </div>
  );
}

function Paragraph1() {
  return (
    <div className="h-[11px] relative shrink-0 w-[43.359px]" data-name="Paragraph">
      <div className="bg-clip-padding border-0 border-[transparent] border-solid content-stretch flex items-start relative size-full">
        <p className="font-['Inter:Regular',sans-serif] font-normal leading-[11px] not-italic relative shrink-0 text-[#8e9199] text-[9px] text-center tracking-[-0.12px] whitespace-nowrap">Нет задач</p>
      </div>
    </div>
  );
}

function Container2() {
  return (
    <div className="flex-[1_0_0] min-h-px min-w-px relative w-[166px]" data-name="Container">
      <div className="bg-clip-padding border-0 border-[transparent] border-solid content-stretch flex items-center justify-center px-[61.32px] relative size-full">
        <Paragraph1 />
      </div>
    </div>
  );
}

function Paragraph2() {
  return (
    <div className="h-[13.5px] relative shrink-0 w-[67.523px]" data-name="Paragraph">
      <div className="bg-clip-padding border-0 border-[transparent] border-solid relative size-full">
        <p className="absolute font-['Inter:Regular',sans-serif] font-normal leading-[13.5px] left-0 not-italic text-[#8e9199] text-[9px] top-[0.5px] tracking-[-0.12px] whitespace-nowrap">Создать задачу</p>
      </div>
    </div>
  );
}

function Container3() {
  return (
    <div className="bg-[#f7f8fc] h-[34px] relative rounded-[9.031px] shrink-0 w-[166px]" data-name="Container">
      <div className="bg-clip-padding border-0 border-[transparent] border-solid content-stretch flex items-center justify-center pl-[49.234px] pr-[49.242px] relative size-full">
        <Paragraph2 />
      </div>
    </div>
  );
}

function Container() {
  return (
    <div className="content-stretch flex flex-col gap-[8px] h-[211px] items-start relative shrink-0 w-full" data-name="Container">
      <Container1 />
      <Container2 />
      <Container3 />
    </div>
  );
}

function Quiz1VariantA() {
  return (
    <div className="bg-white col-1 content-stretch flex flex-col h-[231px] items-start overflow-clip pt-[10px] px-[10px] relative rounded-[14.99px] row-1 shrink-0 w-[186px]" data-name="Quiz1VariantA">
      <Container />
    </div>
  );
}

function Paragraph3() {
  return (
    <div className="h-[15px] relative shrink-0 w-[45.305px]" data-name="Paragraph">
      <div className="bg-clip-padding border-0 border-[transparent] border-solid relative size-full">
        <p className="absolute font-['Inter:Regular',sans-serif] font-normal leading-[15px] left-0 not-italic text-[#101828] text-[13px] top-[0.5px] tracking-[-0.16px] whitespace-nowrap">Задачи</p>
      </div>
    </div>
  );
}

function Container5() {
  return (
    <div className="h-[20px] relative shrink-0 w-[166px]" data-name="Container">
      <div className="bg-clip-padding border-0 border-[transparent] border-solid content-stretch flex items-center justify-between relative size-full">
        <Paragraph3 />
      </div>
    </div>
  );
}

function Container8() {
  return <div className="bg-[#e1e3eb] rounded-[6px] shrink-0 size-[24px]" data-name="Container" />;
}

function Container7() {
  return (
    <div className="bg-[#f7f8fc] relative rounded-[12px] shrink-0 size-[48px]" data-name="Container">
      <div className="bg-clip-padding border-0 border-[transparent] border-solid content-stretch flex items-center justify-center px-[12px] relative size-full">
        <Container8 />
      </div>
    </div>
  );
}

function Paragraph4() {
  return (
    <div className="content-stretch flex h-[13px] items-start relative shrink-0 w-full" data-name="Paragraph">
      <p className="flex-[1_0_0] font-['Inter:Regular',sans-serif] font-normal leading-[13px] min-h-px min-w-px not-italic relative text-[#101828] text-[11px] text-center tracking-[-0.14px]">Начните с первой задачи</p>
    </div>
  );
}

function Paragraph5() {
  return (
    <div className="h-[18px] relative shrink-0 w-full" data-name="Paragraph">
      <p className="-translate-x-1/2 absolute font-['Inter:Regular',sans-serif] font-normal leading-[9px] left-[83.02px] not-italic text-[#8e9199] text-[7px] text-center top-0 tracking-[-0.09px] w-[130px]">Создавайте задачи и отслеживайте их выполнение</p>
    </div>
  );
}

function Container9() {
  return (
    <div className="h-[34px] relative shrink-0 w-[166px]" data-name="Container">
      <div className="bg-clip-padding border-0 border-[transparent] border-solid content-stretch flex flex-col gap-[3px] items-start relative size-full">
        <Paragraph4 />
        <Paragraph5 />
      </div>
    </div>
  );
}

function Container6() {
  return (
    <div className="flex-[1_0_0] min-h-px min-w-px relative w-[166px]" data-name="Container">
      <div className="flex flex-col items-center justify-center size-full">
        <div className="bg-clip-padding border-0 border-[transparent] border-solid content-stretch flex flex-col gap-[8px] items-center justify-center py-[24.5px] relative size-full">
          <Container7 />
          <Container9 />
        </div>
      </div>
    </div>
  );
}

function Paragraph6() {
  return (
    <div className="h-[15px] relative shrink-0 w-[75.07px]" data-name="Paragraph">
      <div className="bg-clip-padding border-0 border-[transparent] border-solid relative size-full">
        <p className="absolute font-['Inter:Regular',sans-serif] font-normal leading-[15px] left-0 not-italic text-[10px] text-white top-[0.5px] tracking-[-0.13px] whitespace-nowrap">Создать задачу</p>
      </div>
    </div>
  );
}

function Container10() {
  return (
    <div className="bg-[#364146] h-[34px] relative rounded-[9.031px] shrink-0 w-[166px]" data-name="Container">
      <div className="bg-clip-padding border-0 border-[transparent] border-solid content-stretch flex items-center justify-center pl-[45.461px] pr-[45.469px] relative size-full">
        <Paragraph6 />
      </div>
    </div>
  );
}

function Container4() {
  return (
    <div className="content-stretch flex flex-col gap-[9px] h-[211px] items-start relative shrink-0 w-full" data-name="Container">
      <Container5 />
      <Container6 />
      <Container10 />
    </div>
  );
}

function Quiz1VariantB() {
  return (
    <div className="bg-white col-2 content-stretch flex flex-col h-[231px] items-start overflow-clip pt-[10px] px-[10px] relative rounded-[14.99px] row-1 shrink-0 w-[186px]" data-name="Quiz1VariantB">
      <Container4 />
    </div>
  );
}

function Paragraph7() {
  return (
    <div className="h-[15px] relative shrink-0 w-[166px]" data-name="Paragraph">
      <div className="bg-clip-padding border-0 border-[transparent] border-solid relative size-full">
        <p className="absolute font-['Inter:Regular',sans-serif] font-normal leading-[15px] left-0 not-italic text-[#101828] text-[13px] top-[0.5px] tracking-[-0.16px] whitespace-nowrap">Каталог товаров</p>
      </div>
    </div>
  );
}

function Container13() {
  return (
    <div className="relative rounded-[16777200px] shrink-0 size-[32px]" data-name="Container">
      <div aria-hidden="true" className="absolute border-3 border-[#e1e3eb] border-solid inset-0 pointer-events-none rounded-[16777200px]" />
    </div>
  );
}

function Container12() {
  return (
    <div className="flex-[1_0_0] min-h-px min-w-px relative w-[166px]" data-name="Container">
      <div className="bg-clip-padding border-0 border-[transparent] border-solid content-stretch flex items-center justify-center px-[67px] relative size-full">
        <Container13 />
      </div>
    </div>
  );
}

function Paragraph8() {
  return (
    <div className="h-[12px] relative shrink-0 w-[166px]" data-name="Paragraph">
      <div className="bg-clip-padding border-0 border-[transparent] border-solid relative size-full">
        <p className="-translate-x-1/2 absolute font-['Inter:Regular',sans-serif] font-normal leading-[12px] left-[83.14px] not-italic text-[#8e9199] text-[8px] text-center top-0 tracking-[-0.1px] whitespace-nowrap">Загрузка...</p>
      </div>
    </div>
  );
}

function Container11() {
  return (
    <div className="content-stretch flex flex-col gap-[8px] h-[211px] items-start relative shrink-0 w-full" data-name="Container">
      <Paragraph7 />
      <Container12 />
      <Paragraph8 />
    </div>
  );
}

function Quiz2VariantA() {
  return (
    <div className="bg-white col-1 content-stretch flex flex-col h-[231px] items-start overflow-clip pt-[10px] px-[10px] relative rounded-[14.99px] row-2 shrink-0 w-[186px]" data-name="Quiz2VariantA">
      <Container11 />
    </div>
  );
}

function Paragraph9() {
  return (
    <div className="h-[15px] relative shrink-0 w-[166px]" data-name="Paragraph">
      <div className="bg-clip-padding border-0 border-[transparent] border-solid relative size-full">
        <p className="absolute font-['Inter:Regular',sans-serif] font-normal leading-[15px] left-0 not-italic text-[#101828] text-[13px] top-[0.5px] tracking-[-0.16px] whitespace-nowrap">Каталог товаров</p>
      </div>
    </div>
  );
}

function Container17() {
  return <div className="bg-[#dbdde7] rounded-[8px] shrink-0 size-[56px]" data-name="Container" />;
}

function Container19() {
  return <div className="bg-[#dbdde7] h-[10px] rounded-[3px] shrink-0 w-[91.797px]" data-name="Container" />;
}

function Container20() {
  return <div className="bg-[#dbdde7] h-[8px] rounded-[3px] shrink-0 w-[61.195px]" data-name="Container" />;
}

function Container21() {
  return <div className="bg-[#dbdde7] h-[10px] rounded-[3px] shrink-0 w-[40.797px]" data-name="Container" />;
}

function Container18() {
  return (
    <div className="flex-[1_0_0] h-[56px] min-h-px min-w-px relative" data-name="Container">
      <div className="bg-clip-padding border-0 border-[transparent] border-solid content-stretch flex flex-col gap-[6px] items-start justify-center py-[8px] relative size-full">
        <Container19 />
        <Container20 />
        <Container21 />
      </div>
    </div>
  );
}

function Container16() {
  return (
    <div className="h-[56px] opacity-50 relative shrink-0 w-[166px]" data-name="Container">
      <div className="bg-clip-padding border-0 border-[transparent] border-solid content-stretch flex gap-[8px] items-start relative size-full">
        <Container17 />
        <Container18 />
      </div>
    </div>
  );
}

function Container23() {
  return <div className="bg-[#dbdde7] rounded-[8px] shrink-0 size-[56px]" data-name="Container" />;
}

function Container25() {
  return <div className="bg-[#dbdde7] h-[10px] rounded-[3px] shrink-0 w-[86.695px]" data-name="Container" />;
}

function Container26() {
  return <div className="bg-[#dbdde7] h-[8px] rounded-[3px] shrink-0 w-[56.094px]" data-name="Container" />;
}

function Container27() {
  return <div className="bg-[#dbdde7] h-[10px] rounded-[3px] shrink-0 w-[45.898px]" data-name="Container" />;
}

function Container24() {
  return (
    <div className="flex-[1_0_0] h-[56px] min-h-px min-w-px relative" data-name="Container">
      <div className="bg-clip-padding border-0 border-[transparent] border-solid content-stretch flex flex-col gap-[6px] items-start justify-center py-[8px] relative size-full">
        <Container25 />
        <Container26 />
        <Container27 />
      </div>
    </div>
  );
}

function Container22() {
  return (
    <div className="h-[56px] opacity-50 relative shrink-0 w-[166px]" data-name="Container">
      <div className="bg-clip-padding border-0 border-[transparent] border-solid content-stretch flex gap-[8px] items-start relative size-full">
        <Container23 />
        <Container24 />
      </div>
    </div>
  );
}

function Container29() {
  return <div className="bg-[#dbdde7] rounded-[8px] shrink-0 size-[56px]" data-name="Container" />;
}

function Container31() {
  return <div className="bg-[#dbdde7] h-[10px] rounded-[3px] shrink-0 w-[81.594px]" data-name="Container" />;
}

function Container32() {
  return <div className="bg-[#dbdde7] h-[8px] rounded-[3px] shrink-0 w-[51px]" data-name="Container" />;
}

function Container33() {
  return <div className="bg-[#dbdde7] h-[10px] rounded-[3px] shrink-0 w-[35.695px]" data-name="Container" />;
}

function Container30() {
  return (
    <div className="flex-[1_0_0] h-[56px] min-h-px min-w-px relative" data-name="Container">
      <div className="bg-clip-padding border-0 border-[transparent] border-solid content-stretch flex flex-col gap-[6px] items-start justify-center py-[8px] relative size-full">
        <Container31 />
        <Container32 />
        <Container33 />
      </div>
    </div>
  );
}

function Container28() {
  return (
    <div className="flex-[1_0_0] min-h-px min-w-px opacity-50 relative w-[166px]" data-name="Container">
      <div className="bg-clip-padding border-0 border-[transparent] border-solid content-stretch flex gap-[8px] items-start relative size-full">
        <Container29 />
        <Container30 />
      </div>
    </div>
  );
}

function Container15() {
  return (
    <div className="h-[182px] relative shrink-0 w-[166px]" data-name="Container">
      <div className="bg-clip-padding border-0 border-[transparent] border-solid content-stretch flex flex-col gap-[7px] items-start relative size-full">
        <Container16 />
        <Container22 />
        <Container28 />
      </div>
    </div>
  );
}

function Container14() {
  return (
    <div className="content-stretch flex flex-col gap-[10px] h-[211px] items-start relative shrink-0 w-full" data-name="Container">
      <Paragraph9 />
      <Container15 />
    </div>
  );
}

function Quiz2VariantB() {
  return (
    <div className="bg-white col-2 content-stretch flex flex-col h-[231px] items-start overflow-clip pt-[10px] px-[10px] relative rounded-[14.99px] row-2 shrink-0 w-[186px]" data-name="Quiz2VariantB">
      <Container14 />
    </div>
  );
}

function ImageWithFallback() {
  return (
    <div className="h-[72.742px] relative shrink-0 w-full" data-name="ImageWithFallback">
      <div className="absolute inset-0 bg-[#e0e2ea]" style={{ background: "linear-gradient(135deg, #e8eaef 0%, #d1d4dd 100%)" }} />
    </div>
  );
}

function Container35() {
  return (
    <div className="bg-[#f7f8fc] h-[72.742px] relative rounded-[9.031px] shrink-0 w-[166px]" data-name="Container">
      <div className="bg-clip-padding border-0 border-[transparent] border-solid content-stretch flex flex-col items-start overflow-clip relative rounded-[inherit] size-full">
        <ImageWithFallback />
      </div>
    </div>
  );
}

function Paragraph10() {
  return (
    <div className="absolute h-[22px] left-0 top-0 w-[166px]" data-name="Paragraph">
      <p className="absolute font-['Inter:Regular',sans-serif] font-normal leading-[11px] left-0 not-italic text-[#101828] text-[9px] top-0 tracking-[-0.12px] w-[154px]">Беспроводные наушники Sony WH-1000XM5</p>
    </div>
  );
}

function Paragraph11() {
  return (
    <div className="absolute content-stretch flex h-[11px] items-start left-0 top-[28px] w-[166px]" data-name="Paragraph">
      <p className="flex-[1_0_0] font-['Inter:Regular',sans-serif] font-normal leading-[11px] min-h-px min-w-px not-italic relative text-[#5e6169] text-[9px] tracking-[-0.12px]">24 990 ₽</p>
    </div>
  );
}

function Paragraph12() {
  return (
    <div className="absolute h-[24px] left-0 top-[45px] w-[166px]" data-name="Paragraph">
      <p className="absolute font-['Inter:Regular',sans-serif] font-normal leading-[12px] left-0 not-italic text-[#8e9199] text-[9px] top-[0.5px] tracking-[-0.12px] w-[163px]">Активное шумоподавление, 30 часов работы</p>
    </div>
  );
}

function Paragraph13() {
  return (
    <div className="h-[10.5px] relative shrink-0 w-full" data-name="Paragraph">
      <p className="absolute font-['Inter:Regular',sans-serif] font-normal leading-[10.5px] left-0 not-italic text-[#8e9199] text-[7px] top-0 tracking-[-0.09px] whitespace-nowrap">Черный</p>
    </div>
  );
}

function Container38() {
  return (
    <div className="bg-[#f7f8fc] h-[16.5px] relative rounded-[4px] shrink-0 w-[38.313px]" data-name="Container">
      <div className="bg-clip-padding border-0 border-[transparent] border-solid content-stretch flex flex-col items-start pt-[3px] px-[6px] relative size-full">
        <Paragraph13 />
      </div>
    </div>
  );
}

function Paragraph14() {
  return (
    <div className="h-[10.5px] relative shrink-0 w-full" data-name="Paragraph">
      <p className="absolute font-['Inter:Regular',sans-serif] font-normal leading-[10.5px] left-0 not-italic text-[#8e9199] text-[7px] top-0 tracking-[-0.09px] whitespace-nowrap">Серебро</p>
    </div>
  );
}

function Container39() {
  return (
    <div className="bg-[#f7f8fc] h-[16.5px] relative rounded-[4px] shrink-0 w-[41.453px]" data-name="Container">
      <div className="bg-clip-padding border-0 border-[transparent] border-solid content-stretch flex flex-col items-start pt-[3px] px-[6px] relative size-full">
        <Paragraph14 />
      </div>
    </div>
  );
}

function Container37() {
  return (
    <div className="absolute content-stretch flex gap-[4px] h-[16.5px] items-start left-0 top-[77px] w-[166px]" data-name="Container">
      <Container38 />
      <Container39 />
    </div>
  );
}

function Container36() {
  return (
    <div className="flex-[1_0_0] min-h-px min-w-px relative w-[166px]" data-name="Container">
      <div className="bg-clip-padding border-0 border-[transparent] border-solid relative size-full">
        <Paragraph10 />
        <Paragraph11 />
        <Paragraph12 />
        <Container37 />
      </div>
    </div>
  );
}

function Paragraph15() {
  return (
    <div className="h-[13.5px] relative shrink-0 w-[42.688px]" data-name="Paragraph">
      <div className="bg-clip-padding border-0 border-[transparent] border-solid relative size-full">
        <p className="absolute font-['Inter:Regular',sans-serif] font-normal leading-[13.5px] left-0 not-italic text-[#8e9199] text-[9px] top-[0.5px] tracking-[-0.12px] whitespace-nowrap">В корзину</p>
      </div>
    </div>
  );
}

function Container40() {
  return (
    <div className="bg-[#f7f8fc] h-[28.758px] relative rounded-[9.031px] shrink-0 w-[166px]" data-name="Container">
      <div className="bg-clip-padding border-0 border-[transparent] border-solid content-stretch flex items-center justify-center px-[61.656px] relative size-full">
        <Paragraph15 />
      </div>
    </div>
  );
}

function Container34() {
  return (
    <div className="content-stretch flex flex-col gap-[8px] h-[211px] items-start relative shrink-0 w-full" data-name="Container">
      <Container35 />
      <Container36 />
      <Container40 />
    </div>
  );
}

function Quiz3VariantA() {
  return (
    <div className="bg-white col-1 content-stretch flex flex-col h-[231px] items-start overflow-clip pt-[10px] px-[10px] relative rounded-[14.99px] row-3 shrink-0 w-[186px]" data-name="Quiz3VariantA">
      <Container34 />
    </div>
  );
}

function ImageWithFallback1() {
  return (
    <div className="h-[74.531px] relative shrink-0 w-full" data-name="ImageWithFallback">
      <div className="absolute inset-0" style={{ background: "linear-gradient(135deg, #e8eaef 0%, #d1d4dd 100%)" }} />
    </div>
  );
}

function Container42() {
  return (
    <div className="bg-[#f7f8fc] h-[74.531px] relative rounded-[9.031px] shrink-0 w-[166px]" data-name="Container">
      <div className="bg-clip-padding border-0 border-[transparent] border-solid content-stretch flex flex-col items-start overflow-clip relative rounded-[inherit] size-full">
        <ImageWithFallback1 />
      </div>
    </div>
  );
}

function Paragraph16() {
  return (
    <div className="absolute h-[26px] left-0 top-0 w-[166px]" data-name="Paragraph">
      <p className="absolute font-['Inter:Regular',sans-serif] font-normal leading-[13px] left-0 not-italic text-[#101828] text-[11px] top-0 tracking-[-0.14px] w-[162px]">Беспроводные наушники Sony WH-1000XM5</p>
    </div>
  );
}

function Paragraph17() {
  return (
    <div className="absolute h-[17px] left-0 top-[32px] w-[166px]" data-name="Paragraph">
      <p className="absolute font-['Inter:Regular',sans-serif] font-normal leading-[17px] left-0 not-italic text-[#101828] text-[15px] top-[-0.5px] tracking-[-0.19px] whitespace-nowrap">24 990 ₽</p>
    </div>
  );
}

function Paragraph18() {
  return (
    <div className="absolute h-[10px] left-0 top-[55px] w-[166px]" data-name="Paragraph">
      <p className="absolute font-['Inter:Regular',sans-serif] font-normal leading-[10px] left-0 not-italic text-[#8e9199] text-[7px] top-[-0.5px] tracking-[-0.09px] whitespace-nowrap">Активное шумоподавление, 30 часов работы</p>
    </div>
  );
}

function Container45() {
  return (
    <div className="bg-[#364146] relative rounded-[4px] shrink-0 size-[18px]" data-name="Container">
      <div aria-hidden="true" className="absolute border border-[#d1d3db] border-solid inset-0 pointer-events-none rounded-[4px]" />
    </div>
  );
}

function Container46() {
  return (
    <div className="bg-[#e1e3eb] relative rounded-[4px] shrink-0 size-[18px]" data-name="Container">
      <div aria-hidden="true" className="absolute border border-[#d1d3db] border-solid inset-0 pointer-events-none rounded-[4px]" />
    </div>
  );
}

function Container44() {
  return (
    <div className="absolute content-stretch flex gap-[4px] h-[18px] items-start left-0 top-[73px] w-[166px]" data-name="Container">
      <Container45 />
      <Container46 />
    </div>
  );
}

function Container43() {
  return (
    <div className="flex-[1_0_0] min-h-px min-w-px relative w-[166px]" data-name="Container">
      <div className="bg-clip-padding border-0 border-[transparent] border-solid relative size-full">
        <Paragraph16 />
        <Paragraph17 />
        <Paragraph18 />
        <Container44 />
      </div>
    </div>
  );
}

function Paragraph19() {
  return (
    <div className="h-[15px] relative shrink-0 w-[47.453px]" data-name="Paragraph">
      <div className="bg-clip-padding border-0 border-[transparent] border-solid relative size-full">
        <p className="absolute font-['Inter:Regular',sans-serif] font-normal leading-[15px] left-0 not-italic text-[10px] text-white top-[0.5px] tracking-[-0.13px] whitespace-nowrap">В корзину</p>
      </div>
    </div>
  );
}

function Container47() {
  return (
    <div className="bg-[#364146] h-[29.469px] relative rounded-[9.031px] shrink-0 w-[166px]" data-name="Container">
      <div className="bg-clip-padding border-0 border-[transparent] border-solid content-stretch flex items-center justify-center px-[59.273px] relative size-full">
        <Paragraph19 />
      </div>
    </div>
  );
}

function Container41() {
  return (
    <div className="content-stretch flex flex-col gap-[8px] h-[211px] items-start relative shrink-0 w-full" data-name="Container">
      <Container42 />
      <Container43 />
      <Container47 />
    </div>
  );
}

function Quiz3VariantB() {
  return (
    <div className="bg-white col-2 content-stretch flex flex-col h-[231px] items-start overflow-clip pt-[10px] px-[10px] relative rounded-[14.99px] row-3 shrink-0 w-[186px]" data-name="Quiz3VariantB">
      <Container41 />
    </div>
  );
}

function Paragraph20() {
  return (
    <div className="h-[15px] relative shrink-0 w-[46.406px]" data-name="Paragraph">
      <div className="bg-clip-padding border-0 border-[transparent] border-solid relative size-full">
        <p className="absolute font-['Inter:Regular',sans-serif] font-normal leading-[15px] left-0 not-italic text-[#101828] text-[13px] top-[0.5px] tracking-[-0.16px] whitespace-nowrap">Товары</p>
      </div>
    </div>
  );
}

function Paragraph21() {
  return <div className="h-[12px] shrink-0 w-[14.773px]" data-name="Paragraph" />;
}

function Container49() {
  return (
    <div className="h-[15px] relative shrink-0 w-[166px]" data-name="Container">
      <div className="bg-clip-padding border-0 border-[transparent] border-solid content-stretch flex items-center justify-between relative size-full">
        <Paragraph20 />
        <Paragraph21 />
      </div>
    </div>
  );
}

function Paragraph22() {
  return (
    <div className="flex-[1_0_0] h-[10.5px] min-h-px min-w-px relative" data-name="Paragraph">
      <div className="bg-clip-padding border-0 border-[transparent] border-solid relative size-full">
        <p className="absolute font-['Inter:Regular',sans-serif] font-normal leading-[10.5px] left-0 not-italic text-[#5e6169] text-[7px] top-0 tracking-[-0.09px] whitespace-nowrap">Категория</p>
      </div>
    </div>
  );
}

function Container51() {
  return (
    <div className="bg-[#f7f8fc] h-[24px] relative rounded-[6px] shrink-0 w-[50.539px]" data-name="Container">
      <div className="bg-clip-padding border-0 border-[transparent] border-solid content-stretch flex items-center px-[8px] relative size-full">
        <Paragraph22 />
      </div>
    </div>
  );
}

function Paragraph23() {
  return (
    <div className="flex-[1_0_0] h-[10.5px] min-h-px min-w-px relative" data-name="Paragraph">
      <div className="bg-clip-padding border-0 border-[transparent] border-solid relative size-full">
        <p className="absolute font-['Inter:Regular',sans-serif] font-normal leading-[10.5px] left-0 not-italic text-[#5e6169] text-[7px] top-0 tracking-[-0.09px] whitespace-nowrap">Цена</p>
      </div>
    </div>
  );
}

function Container52() {
  return (
    <div className="bg-[#f7f8fc] h-[24px] relative rounded-[6px] shrink-0 w-[33.008px]" data-name="Container">
      <div className="bg-clip-padding border-0 border-[transparent] border-solid content-stretch flex items-center px-[8px] relative size-full">
        <Paragraph23 />
      </div>
    </div>
  );
}

function Paragraph24() {
  return (
    <div className="flex-[1_0_0] h-[10.5px] min-h-px min-w-px relative" data-name="Paragraph">
      <div className="bg-clip-padding border-0 border-[transparent] border-solid relative size-full">
        <p className="absolute font-['Inter:Regular',sans-serif] font-normal leading-[10.5px] left-0 not-italic text-[#5e6169] text-[7px] top-0 tracking-[-0.09px] whitespace-nowrap">Бренд</p>
      </div>
    </div>
  );
}

function Container53() {
  return (
    <div className="bg-[#f7f8fc] h-[24px] relative rounded-[6px] shrink-0 w-[36.953px]" data-name="Container">
      <div className="bg-clip-padding border-0 border-[transparent] border-solid content-stretch flex items-center px-[8px] relative size-full">
        <Paragraph24 />
      </div>
    </div>
  );
}

function Container50() {
  return (
    <div className="h-[24px] relative shrink-0 w-[166px]" data-name="Container">
      <div className="bg-clip-padding border-0 border-[transparent] border-solid content-stretch flex gap-[4px] items-start relative size-full">
        <Container51 />
        <Container52 />
        <Container53 />
      </div>
    </div>
  );
}

function ImageWithFallback2() {
  return (
    <div className="h-[52px] relative shrink-0 w-full" data-name="ImageWithFallback">
      <div className="absolute inset-0" style={{ background: "linear-gradient(135deg, #e8eaef 0%, #d1d4dd 100%)" }} />
    </div>
  );
}

function Container56() {
  return (
    <div className="bg-[#f7f8fc] relative rounded-[8px] shrink-0 size-[52px]" data-name="Container">
      <div className="bg-clip-padding border-0 border-[transparent] border-solid content-stretch flex flex-col items-start overflow-clip relative rounded-[inherit] size-full">
        <ImageWithFallback2 />
      </div>
    </div>
  );
}

function Paragraph25() {
  return (
    <div className="h-[22px] relative shrink-0 w-full" data-name="Paragraph">
      <p className="absolute font-['Inter:Regular',sans-serif] font-normal leading-[11px] left-0 not-italic text-[#101828] text-[9px] top-0 tracking-[-0.12px] w-[65px]">Беспроводные наушники</p>
    </div>
  );
}

function Paragraph26() {
  return (
    <div className="h-[15px] relative shrink-0 w-full" data-name="Paragraph">
      <p className="absolute font-['Inter:Regular',sans-serif] font-normal leading-[15px] left-0 not-italic text-[#101828] text-[10px] top-[0.5px] tracking-[-0.13px] whitespace-nowrap">4 590 ₽</p>
    </div>
  );
}

function Container57() {
  return (
    <div className="flex-[1_0_0] h-[52px] min-h-px min-w-px relative" data-name="Container">
      <div className="bg-clip-padding border-0 border-[transparent] border-solid content-stretch flex flex-col gap-[3px] items-start relative size-full">
        <Paragraph25 />
        <Paragraph26 />
      </div>
    </div>
  );
}

function Container55() {
  return (
    <div className="h-[52px] relative shrink-0 w-[166px]" data-name="Container">
      <div className="bg-clip-padding border-0 border-[transparent] border-solid content-stretch flex gap-[8px] items-start relative size-full">
        <Container56 />
        <Container57 />
      </div>
    </div>
  );
}

function ImageWithFallback3() {
  return (
    <div className="h-[52px] relative shrink-0 w-full" data-name="ImageWithFallback">
      <div className="absolute inset-0" style={{ background: "linear-gradient(135deg, #dfe2ec 0%, #cdd0da 100%)" }} />
    </div>
  );
}

function Container59() {
  return (
    <div className="bg-[#f7f8fc] relative rounded-[8px] shrink-0 size-[52px]" data-name="Container">
      <div className="bg-clip-padding border-0 border-[transparent] border-solid content-stretch flex flex-col items-start overflow-clip relative rounded-[inherit] size-full">
        <ImageWithFallback3 />
      </div>
    </div>
  );
}

function Paragraph27() {
  return (
    <div className="content-stretch flex h-[11px] items-start relative shrink-0 w-full" data-name="Paragraph">
      <p className="flex-[1_0_0] font-['Inter:Regular',sans-serif] font-normal leading-[11px] min-h-px min-w-px not-italic relative text-[#101828] text-[9px] tracking-[-0.12px]">Портативная колонка</p>
    </div>
  );
}

function Paragraph28() {
  return (
    <div className="h-[15px] relative shrink-0 w-full" data-name="Paragraph">
      <p className="absolute font-['Inter:Regular',sans-serif] font-normal leading-[15px] left-0 not-italic text-[#101828] text-[10px] top-[0.5px] tracking-[-0.13px] whitespace-nowrap">3 290 ₽</p>
    </div>
  );
}

function Container60() {
  return (
    <div className="flex-[1_0_0] h-[52px] min-h-px min-w-px relative" data-name="Container">
      <div className="bg-clip-padding border-0 border-[transparent] border-solid content-stretch flex flex-col gap-[3px] items-start relative size-full">
        <Paragraph27 />
        <Paragraph28 />
      </div>
    </div>
  );
}

function Container58() {
  return (
    <div className="h-[52px] relative shrink-0 w-[166px]" data-name="Container">
      <div className="bg-clip-padding border-0 border-[transparent] border-solid content-stretch flex gap-[8px] items-start relative size-full">
        <Container59 />
        <Container60 />
      </div>
    </div>
  );
}

function ImageWithFallback4() {
  return (
    <div className="h-[52px] relative shrink-0 w-full" data-name="ImageWithFallback">
      <div className="absolute inset-0" style={{ background: "linear-gradient(135deg, #d8dbe6 0%, #c8ccd7 100%)" }} />
    </div>
  );
}

function Container62() {
  return (
    <div className="bg-[#f7f8fc] relative rounded-[8px] shrink-0 size-[52px]" data-name="Container">
      <div className="bg-clip-padding border-0 border-[transparent] border-solid content-stretch flex flex-col items-start overflow-clip relative rounded-[inherit] size-full">
        <ImageWithFallback4 />
      </div>
    </div>
  );
}

function Paragraph29() {
  return (
    <div className="content-stretch flex h-[11px] items-start relative shrink-0 w-full" data-name="Paragraph">
      <p className="flex-[1_0_0] font-['Inter:Regular',sans-serif] font-normal leading-[11px] min-h-px min-w-px not-italic relative text-[#101828] text-[9px] tracking-[-0.12px]">Умные часы</p>
    </div>
  );
}

function Paragraph30() {
  return (
    <div className="h-[15px] relative shrink-0 w-full" data-name="Paragraph">
      <p className="absolute font-['Inter:Regular',sans-serif] font-normal leading-[15px] left-0 not-italic text-[#101828] text-[10px] top-[0.5px] tracking-[-0.13px] whitespace-nowrap">8 990 ₽</p>
    </div>
  );
}

function Container63() {
  return (
    <div className="flex-[1_0_0] h-[52px] min-h-px min-w-px relative" data-name="Container">
      <div className="bg-clip-padding border-0 border-[transparent] border-solid content-stretch flex flex-col gap-[3px] items-start relative size-full">
        <Paragraph29 />
        <Paragraph30 />
      </div>
    </div>
  );
}

function Container61() {
  return (
    <div className="flex-[1_0_0] min-h-px min-w-px relative w-[166px]" data-name="Container">
      <div className="bg-clip-padding border-0 border-[transparent] border-solid content-stretch flex gap-[8px] items-start relative size-full">
        <Container62 />
        <Container63 />
      </div>
    </div>
  );
}

function Container54() {
  return (
    <div className="h-[168px] relative shrink-0 w-[166px]" data-name="Container">
      <div className="bg-clip-padding border-0 border-[transparent] border-solid content-stretch flex flex-col gap-[6px] items-start relative size-full">
        <Container55 />
        <Container58 />
        <Container61 />
      </div>
    </div>
  );
}

function Container48() {
  return (
    <div className="content-stretch flex flex-col gap-[8px] h-[211px] items-start relative shrink-0 w-full" data-name="Container">
      <Container49 />
      <Container50 />
      <Container54 />
    </div>
  );
}

function Quiz4VariantA() {
  return (
    <div className="bg-white col-1 content-stretch flex flex-col h-[231px] items-start overflow-clip pt-[10px] px-[10px] relative rounded-[14.99px] row-4 shrink-0 w-[186px]" data-name="Quiz4VariantA">
      <Container48 />
    </div>
  );
}

function Paragraph31() {
  return (
    <div className="h-[15px] relative shrink-0 w-[46.406px]" data-name="Paragraph">
      <div className="bg-clip-padding border-0 border-[transparent] border-solid relative size-full">
        <p className="absolute font-['Inter:Regular',sans-serif] font-normal leading-[15px] left-0 not-italic text-[#101828] text-[13px] top-[0.5px] tracking-[-0.16px] whitespace-nowrap">Товары</p>
      </div>
    </div>
  );
}

function Paragraph32() {
  return <div className="h-[12px] shrink-0 w-[49.188px]" data-name="Paragraph" />;
}

function Container65() {
  return (
    <div className="h-[15px] relative shrink-0 w-[166px]" data-name="Container">
      <div className="bg-clip-padding border-0 border-[transparent] border-solid content-stretch flex items-center justify-between relative size-full">
        <Paragraph31 />
        <Paragraph32 />
      </div>
    </div>
  );
}

function Paragraph33() {
  return (
    <div className="flex-[1_0_0] h-[10.5px] min-h-px min-w-px relative" data-name="Paragraph">
      <div className="bg-clip-padding border-0 border-[transparent] border-solid relative size-full">
        <p className="absolute font-['Inter:Regular',sans-serif] font-normal leading-[10.5px] left-0 not-italic text-[7px] text-white top-0 tracking-[-0.09px] whitespace-nowrap">Электроника</p>
      </div>
    </div>
  );
}

function Paragraph34() {
  return (
    <div className="h-[12px] relative shrink-0 w-[5.18px]" data-name="Paragraph">
      <div className="bg-clip-padding border-0 border-[transparent] border-solid relative size-full">
        <p className="absolute font-['Inter:Regular',sans-serif] font-normal leading-[12px] left-0 not-italic text-[8px] text-[rgba(255,255,255,0.7)] top-0 tracking-[-0.1px] whitespace-nowrap">×</p>
      </div>
    </div>
  );
}

function Container67() {
  return (
    <div className="absolute bg-[#364146] content-stretch flex gap-[4px] h-[24px] items-center left-0 px-[8px] rounded-[6px] top-0 w-[68.984px]" data-name="Container">
      <Paragraph33 />
      <Paragraph34 />
    </div>
  );
}

function Paragraph35() {
  return (
    <div className="flex-[1_0_0] h-[10.5px] min-h-px min-w-px relative" data-name="Paragraph">
      <div className="bg-clip-padding border-0 border-[transparent] border-solid relative size-full">
        <p className="absolute font-['Inter:Regular',sans-serif] font-normal leading-[10.5px] left-0 not-italic text-[7px] text-white top-0 tracking-[-0.09px] whitespace-nowrap">до 5000₽</p>
      </div>
    </div>
  );
}

function Paragraph36() {
  return (
    <div className="h-[12px] relative shrink-0 w-[5.18px]" data-name="Paragraph">
      <div className="bg-clip-padding border-0 border-[transparent] border-solid relative size-full">
        <p className="absolute font-['Inter:Regular',sans-serif] font-normal leading-[12px] left-0 not-italic text-[8px] text-[rgba(255,255,255,0.7)] top-0 tracking-[-0.1px] whitespace-nowrap">×</p>
      </div>
    </div>
  );
}

function Container68() {
  return (
    <div className="absolute bg-[#364146] content-stretch flex gap-[4px] h-[24px] items-center left-[72.98px] px-[8px] rounded-[6px] top-0 w-[57.234px]" data-name="Container">
      <Paragraph35 />
      <Paragraph36 />
    </div>
  );
}

function Paragraph37() {
  return (
    <div className="absolute h-[10.5px] left-[137.5px] top-[7px] w-[32.344px]" data-name="Paragraph">
      <p className="absolute decoration-solid font-['Inter:Regular',sans-serif] font-normal leading-[10.5px] left-0 not-italic text-[#8e9199] text-[7px] top-0 tracking-[-0.09px] underline whitespace-nowrap">Сбросить</p>
    </div>
  );
}

function Container66() {
  return (
    <div className="h-[24px] relative shrink-0 w-[166px]" data-name="Container">
      <div className="bg-clip-padding border-0 border-[transparent] border-solid relative size-full">
        <Container67 />
        <Container68 />
        <Paragraph37 />
      </div>
    </div>
  );
}

function ImageWithFallback5() {
  return (
    <div className="h-[52px] relative shrink-0 w-full" data-name="ImageWithFallback">
      <div className="absolute inset-0" style={{ background: "linear-gradient(135deg, #e8eaef 0%, #d1d4dd 100%)" }} />
    </div>
  );
}

function Container71() {
  return (
    <div className="bg-[#f7f8fc] relative rounded-[8px] shrink-0 size-[52px]" data-name="Container">
      <div className="bg-clip-padding border-0 border-[transparent] border-solid content-stretch flex flex-col items-start overflow-clip relative rounded-[inherit] size-full">
        <ImageWithFallback5 />
      </div>
    </div>
  );
}

function Paragraph38() {
  return (
    <div className="h-[22px] relative shrink-0 w-full" data-name="Paragraph">
      <p className="absolute font-['Inter:Regular',sans-serif] font-normal leading-[11px] left-0 not-italic text-[#101828] text-[9px] top-0 tracking-[-0.12px] w-[65px]">Беспроводные наушники</p>
    </div>
  );
}

function Paragraph39() {
  return (
    <div className="h-[15px] relative shrink-0 w-full" data-name="Paragraph">
      <p className="absolute font-['Inter:Regular',sans-serif] font-normal leading-[15px] left-0 not-italic text-[#101828] text-[10px] top-[0.5px] tracking-[-0.13px] whitespace-nowrap">4 590 ₽</p>
    </div>
  );
}

function Container72() {
  return (
    <div className="flex-[1_0_0] h-[52px] min-h-px min-w-px relative" data-name="Container">
      <div className="bg-clip-padding border-0 border-[transparent] border-solid content-stretch flex flex-col gap-[3px] items-start relative size-full">
        <Paragraph38 />
        <Paragraph39 />
      </div>
    </div>
  );
}

function Container70() {
  return (
    <div className="h-[52px] relative shrink-0 w-[166px]" data-name="Container">
      <div className="bg-clip-padding border-0 border-[transparent] border-solid content-stretch flex gap-[8px] items-start relative size-full">
        <Container71 />
        <Container72 />
      </div>
    </div>
  );
}

function ImageWithFallback6() {
  return (
    <div className="h-[52px] relative shrink-0 w-full" data-name="ImageWithFallback">
      <div className="absolute inset-0" style={{ background: "linear-gradient(135deg, #dfe2ec 0%, #cdd0da 100%)" }} />
    </div>
  );
}

function Container74() {
  return (
    <div className="bg-[#f7f8fc] relative rounded-[8px] shrink-0 size-[52px]" data-name="Container">
      <div className="bg-clip-padding border-0 border-[transparent] border-solid content-stretch flex flex-col items-start overflow-clip relative rounded-[inherit] size-full">
        <ImageWithFallback6 />
      </div>
    </div>
  );
}

function Paragraph40() {
  return (
    <div className="content-stretch flex h-[11px] items-start relative shrink-0 w-full" data-name="Paragraph">
      <p className="flex-[1_0_0] font-['Inter:Regular',sans-serif] font-normal leading-[11px] min-h-px min-w-px not-italic relative text-[#101828] text-[9px] tracking-[-0.12px]">Портативная колонка</p>
    </div>
  );
}

function Paragraph41() {
  return (
    <div className="h-[15px] relative shrink-0 w-full" data-name="Paragraph">
      <p className="absolute font-['Inter:Regular',sans-serif] font-normal leading-[15px] left-0 not-italic text-[#101828] text-[10px] top-[0.5px] tracking-[-0.13px] whitespace-nowrap">3 290 ₽</p>
    </div>
  );
}

function Container75() {
  return (
    <div className="flex-[1_0_0] h-[52px] min-h-px min-w-px relative" data-name="Container">
      <div className="bg-clip-padding border-0 border-[transparent] border-solid content-stretch flex flex-col gap-[3px] items-start relative size-full">
        <Paragraph40 />
        <Paragraph41 />
      </div>
    </div>
  );
}

function Container73() {
  return (
    <div className="h-[52px] relative shrink-0 w-[166px]" data-name="Container">
      <div className="bg-clip-padding border-0 border-[transparent] border-solid content-stretch flex gap-[8px] items-start relative size-full">
        <Container74 />
        <Container75 />
      </div>
    </div>
  );
}

function ImageWithFallback7() {
  return (
    <div className="h-[52px] relative shrink-0 w-full" data-name="ImageWithFallback">
      <div className="absolute inset-0" style={{ background: "linear-gradient(135deg, #d8dbe6 0%, #c8ccd7 100%)" }} />
    </div>
  );
}

function Container77() {
  return (
    <div className="bg-[#f7f8fc] relative rounded-[8px] shrink-0 size-[52px]" data-name="Container">
      <div className="bg-clip-padding border-0 border-[transparent] border-solid content-stretch flex flex-col items-start overflow-clip relative rounded-[inherit] size-full">
        <ImageWithFallback7 />
      </div>
    </div>
  );
}

function Paragraph42() {
  return (
    <div className="content-stretch flex h-[11px] items-start relative shrink-0 w-full" data-name="Paragraph">
      <p className="flex-[1_0_0] font-['Inter:Regular',sans-serif] font-normal leading-[11px] min-h-px min-w-px not-italic relative text-[#101828] text-[9px] tracking-[-0.12px]">Мышь беспроводная</p>
    </div>
  );
}

function Paragraph43() {
  return (
    <div className="h-[15px] relative shrink-0 w-full" data-name="Paragraph">
      <p className="absolute font-['Inter:Regular',sans-serif] font-normal leading-[15px] left-0 not-italic text-[#101828] text-[10px] top-[0.5px] tracking-[-0.13px] whitespace-nowrap">1 490 ₽</p>
    </div>
  );
}

function Container78() {
  return (
    <div className="flex-[1_0_0] h-[52px] min-h-px min-w-px relative" data-name="Container">
      <div className="bg-clip-padding border-0 border-[transparent] border-solid content-stretch flex flex-col gap-[3px] items-start relative size-full">
        <Paragraph42 />
        <Paragraph43 />
      </div>
    </div>
  );
}

function Container76() {
  return (
    <div className="flex-[1_0_0] min-h-px min-w-px relative w-[166px]" data-name="Container">
      <div className="bg-clip-padding border-0 border-[transparent] border-solid content-stretch flex gap-[8px] items-start relative size-full">
        <Container77 />
        <Container78 />
      </div>
    </div>
  );
}

function Container69() {
  return (
    <div className="h-[168px] relative shrink-0 w-[166px]" data-name="Container">
      <div className="bg-clip-padding border-0 border-[transparent] border-solid content-stretch flex flex-col gap-[6px] items-start relative size-full">
        <Container70 />
        <Container73 />
        <Container76 />
      </div>
    </div>
  );
}

function Container64() {
  return (
    <div className="content-stretch flex flex-col gap-[8px] h-[211px] items-start relative shrink-0 w-full" data-name="Container">
      <Container65 />
      <Container66 />
      <Container69 />
    </div>
  );
}

function Quiz4VariantB() {
  return (
    <div className="bg-white col-2 content-stretch flex flex-col h-[231px] items-start overflow-clip pt-[10px] px-[10px] relative rounded-[14.99px] row-4 shrink-0 w-[186px]" data-name="Quiz4VariantB">
      <Container64 />
    </div>
  );
}

function Paragraph44() {
  return (
    <div className="absolute h-[15px] left-0 top-0 w-[166px]" data-name="Paragraph">
      <p className="absolute font-['Inter:Regular',sans-serif] font-normal leading-[15px] left-0 not-italic text-[#101828] text-[13px] top-[0.5px] tracking-[-0.16px] whitespace-nowrap">Транзакции</p>
    </div>
  );
}

function Paragraph45() {
  return (
    <div className="h-[10.5px] relative shrink-0 w-[50px]" data-name="Paragraph">
      <div className="bg-clip-padding border-0 border-[transparent] border-solid relative size-full">
        <p className="absolute font-['Inter:Regular',sans-serif] font-normal leading-[10.5px] left-0 not-italic text-[#8e9199] text-[7px] top-0 tracking-[-0.09px] whitespace-nowrap">Дата</p>
      </div>
    </div>
  );
}

function Paragraph46() {
  return (
    <div className="h-[10.5px] relative shrink-0 w-[50px]" data-name="Paragraph">
      <div className="bg-clip-padding border-0 border-[transparent] border-solid relative size-full">
        <p className="absolute font-['Inter:Regular',sans-serif] font-normal leading-[10.5px] left-0 not-italic text-[#8e9199] text-[7px] top-0 tracking-[-0.09px] whitespace-nowrap">Сумма</p>
      </div>
    </div>
  );
}

function Paragraph47() {
  return (
    <div className="flex-[1_0_0] h-[10.5px] min-h-px min-w-px relative" data-name="Paragraph">
      <div className="bg-clip-padding border-0 border-[transparent] border-solid relative size-full">
        <p className="absolute font-['Inter:Regular',sans-serif] font-normal leading-[10.5px] left-0 not-italic text-[#8e9199] text-[7px] top-0 tracking-[-0.09px] whitespace-nowrap">Статус</p>
      </div>
    </div>
  );
}

function Container80() {
  return (
    <div className="absolute bg-[#f7f8fc] content-stretch flex h-[24px] items-center left-0 px-[8px] rounded-[6px] top-[23px] w-[166px]" data-name="Container">
      <Paragraph45 />
      <Paragraph46 />
      <Paragraph47 />
    </div>
  );
}

function Paragraph48() {
  return (
    <div className="h-[10.5px] relative shrink-0 w-[50px]" data-name="Paragraph">
      <div className="bg-clip-padding border-0 border-[transparent] border-solid relative size-full">
        <p className="absolute font-['Inter:Regular',sans-serif] font-normal leading-[10.5px] left-0 not-italic text-[#5e6169] text-[7px] top-0 tracking-[-0.09px] whitespace-nowrap">11.03</p>
      </div>
    </div>
  );
}

function Paragraph49() {
  return (
    <div className="h-[10.5px] relative shrink-0 w-[50px]" data-name="Paragraph">
      <div className="bg-clip-padding border-0 border-[transparent] border-solid relative size-full">
        <p className="absolute font-['Inter:Regular',sans-serif] font-normal leading-[10.5px] left-0 not-italic text-[#101828] text-[7px] top-0 tracking-[-0.09px] whitespace-nowrap">12 450₽</p>
      </div>
    </div>
  );
}

function Paragraph50() {
  return (
    <div className="flex-[1_0_0] h-[10.5px] min-h-px min-w-px relative" data-name="Paragraph">
      <div className="bg-clip-padding border-0 border-[transparent] border-solid relative size-full">
        <p className="absolute font-['Inter:Regular',sans-serif] font-normal leading-[10.5px] left-0 not-italic text-[#8e9199] text-[7px] top-0 tracking-[-0.09px] whitespace-nowrap">Отменён</p>
      </div>
    </div>
  );
}

function Container82() {
  return (
    <div className="h-[26px] relative shrink-0 w-[166px]" data-name="Container">
      <div className="bg-clip-padding border-0 border-[transparent] border-solid content-stretch flex items-center px-[8px] relative size-full">
        <Paragraph48 />
        <Paragraph49 />
        <Paragraph50 />
      </div>
    </div>
  );
}

function Paragraph51() {
  return (
    <div className="h-[10.5px] relative shrink-0 w-[50px]" data-name="Paragraph">
      <div className="bg-clip-padding border-0 border-[transparent] border-solid relative size-full">
        <p className="absolute font-['Inter:Regular',sans-serif] font-normal leading-[10.5px] left-0 not-italic text-[#5e6169] text-[7px] top-0 tracking-[-0.09px] whitespace-nowrap">10.03</p>
      </div>
    </div>
  );
}

function Paragraph52() {
  return (
    <div className="h-[10.5px] relative shrink-0 w-[50px]" data-name="Paragraph">
      <div className="bg-clip-padding border-0 border-[transparent] border-solid relative size-full">
        <p className="absolute font-['Inter:Regular',sans-serif] font-normal leading-[10.5px] left-0 not-italic text-[#101828] text-[7px] top-0 tracking-[-0.09px] whitespace-nowrap">8 320₽</p>
      </div>
    </div>
  );
}

function Paragraph53() {
  return (
    <div className="flex-[1_0_0] h-[10.5px] min-h-px min-w-px relative" data-name="Paragraph">
      <div className="bg-clip-padding border-0 border-[transparent] border-solid relative size-full">
        <p className="absolute font-['Inter:Regular',sans-serif] font-normal leading-[10.5px] left-0 not-italic text-[#8e9199] text-[7px] top-0 tracking-[-0.09px] whitespace-nowrap">Ожидает</p>
      </div>
    </div>
  );
}

function Container83() {
  return (
    <div className="h-[26px] relative shrink-0 w-[166px]" data-name="Container">
      <div className="bg-clip-padding border-0 border-[transparent] border-solid content-stretch flex items-center px-[8px] relative size-full">
        <Paragraph51 />
        <Paragraph52 />
        <Paragraph53 />
      </div>
    </div>
  );
}

function Paragraph54() {
  return (
    <div className="h-[10.5px] relative shrink-0 w-[50px]" data-name="Paragraph">
      <div className="bg-clip-padding border-0 border-[transparent] border-solid relative size-full">
        <p className="absolute font-['Inter:Regular',sans-serif] font-normal leading-[10.5px] left-0 not-italic text-[#5e6169] text-[7px] top-0 tracking-[-0.09px] whitespace-nowrap">09.03</p>
      </div>
    </div>
  );
}

function Paragraph55() {
  return (
    <div className="h-[10.5px] relative shrink-0 w-[50px]" data-name="Paragraph">
      <div className="bg-clip-padding border-0 border-[transparent] border-solid relative size-full">
        <p className="absolute font-['Inter:Regular',sans-serif] font-normal leading-[10.5px] left-0 not-italic text-[#101828] text-[7px] top-0 tracking-[-0.09px] whitespace-nowrap">5 670₽</p>
      </div>
    </div>
  );
}

function Paragraph56() {
  return (
    <div className="flex-[1_0_0] h-[10.5px] min-h-px min-w-px relative" data-name="Paragraph">
      <div className="bg-clip-padding border-0 border-[transparent] border-solid relative size-full">
        <p className="absolute font-['Inter:Regular',sans-serif] font-normal leading-[10.5px] left-0 not-italic text-[#8e9199] text-[7px] top-0 tracking-[-0.09px] whitespace-nowrap">Оплачен</p>
      </div>
    </div>
  );
}

function Container84() {
  return (
    <div className="h-[26px] relative shrink-0 w-[166px]" data-name="Container">
      <div className="bg-clip-padding border-0 border-[transparent] border-solid content-stretch flex items-center px-[8px] relative size-full">
        <Paragraph54 />
        <Paragraph55 />
        <Paragraph56 />
      </div>
    </div>
  );
}

function Paragraph57() {
  return (
    <div className="h-[10.5px] relative shrink-0 w-[50px]" data-name="Paragraph">
      <div className="bg-clip-padding border-0 border-[transparent] border-solid relative size-full">
        <p className="absolute font-['Inter:Regular',sans-serif] font-normal leading-[10.5px] left-0 not-italic text-[#5e6169] text-[7px] top-0 tracking-[-0.09px] whitespace-nowrap">08.03</p>
      </div>
    </div>
  );
}

function Paragraph58() {
  return (
    <div className="h-[10.5px] relative shrink-0 w-[50px]" data-name="Paragraph">
      <div className="bg-clip-padding border-0 border-[transparent] border-solid relative size-full">
        <p className="absolute font-['Inter:Regular',sans-serif] font-normal leading-[10.5px] left-0 not-italic text-[#101828] text-[7px] top-0 tracking-[-0.09px] whitespace-nowrap">15 200₽</p>
      </div>
    </div>
  );
}

function Paragraph59() {
  return (
    <div className="flex-[1_0_0] h-[10.5px] min-h-px min-w-px relative" data-name="Paragraph">
      <div className="bg-clip-padding border-0 border-[transparent] border-solid relative size-full">
        <p className="absolute font-['Inter:Regular',sans-serif] font-normal leading-[10.5px] left-0 not-italic text-[#8e9199] text-[7px] top-0 tracking-[-0.09px] whitespace-nowrap">Отменён</p>
      </div>
    </div>
  );
}

function Container85() {
  return (
    <div className="h-[26px] relative shrink-0 w-[166px]" data-name="Container">
      <div className="bg-clip-padding border-0 border-[transparent] border-solid content-stretch flex items-center px-[8px] relative size-full">
        <Paragraph57 />
        <Paragraph58 />
        <Paragraph59 />
      </div>
    </div>
  );
}

function Paragraph60() {
  return (
    <div className="h-[10.5px] relative shrink-0 w-[50px]" data-name="Paragraph">
      <div className="bg-clip-padding border-0 border-[transparent] border-solid relative size-full">
        <p className="absolute font-['Inter:Regular',sans-serif] font-normal leading-[10.5px] left-0 not-italic text-[#5e6169] text-[7px] top-0 tracking-[-0.09px] whitespace-nowrap">07.03</p>
      </div>
    </div>
  );
}

function Paragraph61() {
  return (
    <div className="h-[10.5px] relative shrink-0 w-[50px]" data-name="Paragraph">
      <div className="bg-clip-padding border-0 border-[transparent] border-solid relative size-full">
        <p className="absolute font-['Inter:Regular',sans-serif] font-normal leading-[10.5px] left-0 not-italic text-[#101828] text-[7px] top-0 tracking-[-0.09px] whitespace-nowrap">3 890₽</p>
      </div>
    </div>
  );
}

function Paragraph62() {
  return (
    <div className="flex-[1_0_0] h-[10.5px] min-h-px min-w-px relative" data-name="Paragraph">
      <div className="bg-clip-padding border-0 border-[transparent] border-solid relative size-full">
        <p className="absolute font-['Inter:Regular',sans-serif] font-normal leading-[10.5px] left-0 not-italic text-[#8e9199] text-[7px] top-0 tracking-[-0.09px] whitespace-nowrap">Оплачен</p>
      </div>
    </div>
  );
}

function Container86() {
  return (
    <div className="flex-[1_0_0] min-h-px min-w-px relative w-[166px]" data-name="Container">
      <div className="bg-clip-padding border-0 border-[transparent] border-solid content-stretch flex items-center px-[8px] relative size-full">
        <Paragraph60 />
        <Paragraph61 />
        <Paragraph62 />
      </div>
    </div>
  );
}

function Container81() {
  return (
    <div className="absolute content-stretch flex flex-col gap-[4px] h-[146px] items-start left-0 top-[53px] w-[166px]" data-name="Container">
      <Container82 />
      <Container83 />
      <Container84 />
      <Container85 />
      <Container86 />
    </div>
  );
}

function Container79() {
  return (
    <div className="h-[211px] relative shrink-0 w-full" data-name="Container">
      <Paragraph44 />
      <Container80 />
      <Container81 />
    </div>
  );
}

function Quiz5VariantA() {
  return (
    <div className="bg-white col-1 content-stretch flex flex-col h-[231px] items-start overflow-clip pt-[10px] px-[10px] relative rounded-[14.99px] row-5 shrink-0 w-[186px]" data-name="Quiz5VariantA">
      <Container79 />
    </div>
  );
}

function Paragraph63() {
  return (
    <div className="absolute h-[15px] left-0 top-0 w-[166px]" data-name="Paragraph">
      <p className="absolute font-['Inter:Regular',sans-serif] font-normal leading-[15px] left-0 not-italic text-[#101828] text-[13px] top-[0.5px] tracking-[-0.16px] whitespace-nowrap">Транзакции</p>
    </div>
  );
}

function Paragraph64() {
  return (
    <div className="h-[10.5px] relative shrink-0 w-[50px]" data-name="Paragraph">
      <div className="bg-clip-padding border-0 border-[transparent] border-solid relative size-full">
        <p className="absolute font-['Inter:Regular',sans-serif] font-normal leading-[10.5px] left-0 not-italic text-[#8e9199] text-[7px] top-0 tracking-[-0.09px] whitespace-nowrap">Дата ↕</p>
      </div>
    </div>
  );
}

function Paragraph65() {
  return (
    <div className="h-[12px] relative shrink-0 w-[50px]" data-name="Paragraph">
      <div className="bg-clip-padding border-0 border-[transparent] border-solid relative size-full">
        <p className="absolute font-['Inter:Regular',sans-serif] font-normal leading-[12px] left-0 not-italic text-[#101828] text-[8px] top-0 tracking-[-0.1px] whitespace-nowrap">Сумма ↓</p>
      </div>
    </div>
  );
}

function Paragraph66() {
  return (
    <div className="flex-[1_0_0] h-[10.5px] min-h-px min-w-px relative" data-name="Paragraph">
      <div className="bg-clip-padding border-0 border-[transparent] border-solid relative size-full">
        <p className="absolute font-['Inter:Regular',sans-serif] font-normal leading-[10.5px] left-0 not-italic text-[#8e9199] text-[7px] top-0 tracking-[-0.09px] whitespace-nowrap">Статус</p>
      </div>
    </div>
  );
}

function Container88() {
  return (
    <div className="absolute bg-[#f7f8fc] content-stretch flex h-[26px] items-center left-0 px-[8px] rounded-[6px] top-[23px] w-[166px]" data-name="Container">
      <Paragraph64 />
      <Paragraph65 />
      <Paragraph66 />
    </div>
  );
}

function Paragraph67() {
  return (
    <div className="absolute h-[10.5px] left-[8px] top-[8.75px] w-[50px]" data-name="Paragraph">
      <p className="absolute font-['Inter:Regular',sans-serif] font-normal leading-[10.5px] left-0 not-italic text-[#5e6169] text-[7px] top-0 tracking-[-0.09px] whitespace-nowrap">08.03</p>
    </div>
  );
}

function Paragraph68() {
  return (
    <div className="absolute h-[13.5px] left-[58px] top-[7.25px] w-[50px]" data-name="Paragraph">
      <p className="absolute font-['Inter:Regular',sans-serif] font-normal leading-[13.5px] left-0 not-italic text-[#101828] text-[9px] top-[0.5px] tracking-[-0.12px] whitespace-nowrap">15 200₽</p>
    </div>
  );
}

function Paragraph69() {
  return (
    <div className="absolute h-[9px] left-[4px] top-px w-[25.695px]" data-name="Paragraph">
      <p className="absolute font-['Inter:Regular',sans-serif] font-normal leading-[9px] left-0 not-italic text-[#ef4444] text-[6px] top-[-0.5px] tracking-[-0.08px] whitespace-nowrap">Отменён</p>
    </div>
  );
}

function Container91() {
  return (
    <div className="absolute bg-[#fee] h-[11px] left-[108px] rounded-[3px] top-[8.5px] w-[33.695px]" data-name="Container">
      <Paragraph69 />
    </div>
  );
}

function Container90() {
  return (
    <div className="bg-[#f7f8fc] h-[28px] relative rounded-[6px] shrink-0 w-[166px]" data-name="Container">
      <div className="bg-clip-padding border-0 border-[transparent] border-solid relative size-full">
        <Paragraph67 />
        <Paragraph68 />
        <Container91 />
      </div>
    </div>
  );
}

function Paragraph70() {
  return (
    <div className="absolute h-[10.5px] left-[8px] top-[8.75px] w-[50px]" data-name="Paragraph">
      <p className="absolute font-['Inter:Regular',sans-serif] font-normal leading-[10.5px] left-0 not-italic text-[#5e6169] text-[7px] top-0 tracking-[-0.09px] whitespace-nowrap">11.03</p>
    </div>
  );
}

function Paragraph71() {
  return (
    <div className="absolute h-[13.5px] left-[58px] top-[7.25px] w-[50px]" data-name="Paragraph">
      <p className="absolute font-['Inter:Regular',sans-serif] font-normal leading-[13.5px] left-0 not-italic text-[#101828] text-[9px] top-[0.5px] tracking-[-0.12px] whitespace-nowrap">12 450₽</p>
    </div>
  );
}

function Paragraph72() {
  return (
    <div className="absolute h-[9px] left-[4px] top-px w-[26.258px]" data-name="Paragraph">
      <p className="absolute font-['Inter:Regular',sans-serif] font-normal leading-[9px] left-0 not-italic text-[#f59e0b] text-[6px] top-[-0.5px] tracking-[-0.08px] whitespace-nowrap">Ожидает</p>
    </div>
  );
}

function Container93() {
  return (
    <div className="absolute bg-[#fef9e6] h-[11px] left-[108px] rounded-[3px] top-[8.5px] w-[34.258px]" data-name="Container">
      <Paragraph72 />
    </div>
  );
}

function Container92() {
  return (
    <div className="bg-[#f7f8fc] h-[28px] relative rounded-[6px] shrink-0 w-[166px]" data-name="Container">
      <div className="bg-clip-padding border-0 border-[transparent] border-solid relative size-full">
        <Paragraph70 />
        <Paragraph71 />
        <Container93 />
      </div>
    </div>
  );
}

function Paragraph73() {
  return (
    <div className="absolute h-[10.5px] left-[8px] top-[8.75px] w-[50px]" data-name="Paragraph">
      <p className="absolute font-['Inter:Regular',sans-serif] font-normal leading-[10.5px] left-0 not-italic text-[#8e9199] text-[7px] top-0 tracking-[-0.09px] whitespace-nowrap">10.03</p>
    </div>
  );
}

function Paragraph74() {
  return (
    <div className="absolute h-[12px] left-[58px] top-[8px] w-[50px]" data-name="Paragraph">
      <p className="absolute font-['Inter:Regular',sans-serif] font-normal leading-[12px] left-0 not-italic text-[#5e6169] text-[8px] top-0 tracking-[-0.1px] whitespace-nowrap">8 320₽</p>
    </div>
  );
}

function Paragraph75() {
  return (
    <div className="absolute h-[9px] left-[4px] top-px w-[24.859px]" data-name="Paragraph">
      <p className="absolute font-['Inter:Regular',sans-serif] font-normal leading-[9px] left-0 not-italic text-[#22c55e] text-[6px] top-[-0.5px] tracking-[-0.08px] whitespace-nowrap">Оплачен</p>
    </div>
  );
}

function Container95() {
  return (
    <div className="absolute bg-[#f0fdf4] h-[11px] left-[108px] rounded-[3px] top-[8.5px] w-[32.859px]" data-name="Container">
      <Paragraph75 />
    </div>
  );
}

function Container94() {
  return (
    <div className="h-[28px] relative shrink-0 w-[166px]" data-name="Container">
      <div className="bg-clip-padding border-0 border-[transparent] border-solid relative size-full">
        <Paragraph73 />
        <Paragraph74 />
        <Container95 />
      </div>
    </div>
  );
}

function Paragraph76() {
  return (
    <div className="absolute h-[10.5px] left-[8px] top-[8.75px] w-[50px]" data-name="Paragraph">
      <p className="absolute font-['Inter:Regular',sans-serif] font-normal leading-[10.5px] left-0 not-italic text-[#8e9199] text-[7px] top-0 tracking-[-0.09px] whitespace-nowrap">09.03</p>
    </div>
  );
}

function Paragraph77() {
  return (
    <div className="absolute h-[12px] left-[58px] top-[8px] w-[50px]" data-name="Paragraph">
      <p className="absolute font-['Inter:Regular',sans-serif] font-normal leading-[12px] left-0 not-italic text-[#5e6169] text-[8px] top-0 tracking-[-0.1px] whitespace-nowrap">5 670₽</p>
    </div>
  );
}

function Paragraph78() {
  return (
    <div className="absolute h-[9px] left-[4px] top-px w-[24.859px]" data-name="Paragraph">
      <p className="absolute font-['Inter:Regular',sans-serif] font-normal leading-[9px] left-0 not-italic text-[#22c55e] text-[6px] top-[-0.5px] tracking-[-0.08px] whitespace-nowrap">Оплачен</p>
    </div>
  );
}

function Container97() {
  return (
    <div className="absolute bg-[#f0fdf4] h-[11px] left-[108px] rounded-[3px] top-[8.5px] w-[32.859px]" data-name="Container">
      <Paragraph78 />
    </div>
  );
}

function Container96() {
  return (
    <div className="h-[28px] relative shrink-0 w-[166px]" data-name="Container">
      <div className="bg-clip-padding border-0 border-[transparent] border-solid relative size-full">
        <Paragraph76 />
        <Paragraph77 />
        <Container97 />
      </div>
    </div>
  );
}

function Paragraph79() {
  return (
    <div className="absolute h-[10.5px] left-[8px] top-[8.75px] w-[50px]" data-name="Paragraph">
      <p className="absolute font-['Inter:Regular',sans-serif] font-normal leading-[10.5px] left-0 not-italic text-[#8e9199] text-[7px] top-0 tracking-[-0.09px] whitespace-nowrap">07.03</p>
    </div>
  );
}

function Paragraph80() {
  return (
    <div className="absolute h-[12px] left-[58px] top-[8px] w-[50px]" data-name="Paragraph">
      <p className="absolute font-['Inter:Regular',sans-serif] font-normal leading-[12px] left-0 not-italic text-[#5e6169] text-[8px] top-0 tracking-[-0.1px] whitespace-nowrap">3 890₽</p>
    </div>
  );
}

function Paragraph81() {
  return (
    <div className="absolute h-[9px] left-[4px] top-px w-[24.859px]" data-name="Paragraph">
      <p className="absolute font-['Inter:Regular',sans-serif] font-normal leading-[9px] left-0 not-italic text-[#22c55e] text-[6px] top-[-0.5px] tracking-[-0.08px] whitespace-nowrap">Оплачен</p>
    </div>
  );
}

function Container99() {
  return (
    <div className="absolute bg-[#f0fdf4] h-[11px] left-[108px] rounded-[3px] top-[8.5px] w-[32.859px]" data-name="Container">
      <Paragraph81 />
    </div>
  );
}

function Container98() {
  return (
    <div className="flex-[1_0_0] min-h-px min-w-px relative w-[166px]" data-name="Container">
      <div className="bg-clip-padding border-0 border-[transparent] border-solid relative size-full">
        <Paragraph79 />
        <Paragraph80 />
        <Container99 />
      </div>
    </div>
  );
}

function Container89() {
  return (
    <div className="absolute content-stretch flex flex-col gap-[2px] h-[148px] items-start left-0 top-[55px] w-[166px]" data-name="Container">
      <Container90 />
      <Container92 />
      <Container94 />
      <Container96 />
      <Container98 />
    </div>
  );
}

function Container87() {
  return (
    <div className="h-[211px] relative shrink-0 w-full" data-name="Container">
      <Paragraph63 />
      <Container88 />
      <Container89 />
    </div>
  );
}

function Quiz5VariantB() {
  return (
    <div className="bg-white col-2 content-stretch flex flex-col h-[231px] items-start overflow-clip pt-[10px] px-[10px] relative rounded-[14.99px] row-5 shrink-0 w-[186px]" data-name="Quiz5VariantB">
      <Container87 />
    </div>
  );
}

function Paragraph82() {
  return (
    <div className="absolute h-[15px] left-0 top-0 w-[166px]" data-name="Paragraph">
      <p className="absolute font-['Inter:Regular',sans-serif] font-normal leading-[15px] left-0 not-italic text-[#101828] text-[13px] top-[0.5px] tracking-[-0.16px] whitespace-nowrap">Настройки</p>
    </div>
  );
}

function Paragraph83() {
  return (
    <div className="h-[13.5px] relative shrink-0 w-[7.813px]" data-name="Paragraph">
      <div className="bg-clip-padding border-0 border-[transparent] border-solid relative size-full">
        <p className="absolute font-['Inter:Regular',sans-serif] font-normal leading-[13.5px] left-0 not-italic text-[9px] text-white top-[0.5px] tracking-[-0.12px] whitespace-nowrap">✓</p>
      </div>
    </div>
  );
}

function Container103() {
  return (
    <div className="bg-[#364146] relative rounded-[4px] shrink-0 size-[18px]" data-name="Container">
      <div className="bg-clip-padding border-0 border-[transparent] border-solid content-stretch flex items-center justify-center px-[5.094px] relative size-full">
        <Paragraph83 />
      </div>
    </div>
  );
}

function Paragraph84() {
  return (
    <div className="h-[13.5px] relative shrink-0 w-[94.875px]" data-name="Paragraph">
      <div className="bg-clip-padding border-0 border-[transparent] border-solid relative size-full">
        <p className="absolute font-['Inter:Regular',sans-serif] font-normal leading-[13.5px] left-0 not-italic text-[#101828] text-[9px] top-[0.5px] tracking-[-0.12px] whitespace-nowrap">Уведомления на email</p>
      </div>
    </div>
  );
}

function Container102() {
  return (
    <div className="h-[18px] relative shrink-0 w-[166px]" data-name="Container">
      <div className="bg-clip-padding border-0 border-[transparent] border-solid content-stretch flex gap-[8px] items-center relative size-full">
        <Container103 />
        <Paragraph84 />
      </div>
    </div>
  );
}

function Container105() {
  return (
    <div className="relative rounded-[4px] shrink-0 size-[18px]" data-name="Container">
      <div aria-hidden="true" className="absolute border-2 border-[#d1d3db] border-solid inset-0 pointer-events-none rounded-[4px]" />
    </div>
  );
}

function Paragraph85() {
  return (
    <div className="h-[13.5px] relative shrink-0 w-[82.43px]" data-name="Paragraph">
      <div className="bg-clip-padding border-0 border-[transparent] border-solid relative size-full">
        <p className="absolute font-['Inter:Regular',sans-serif] font-normal leading-[13.5px] left-0 not-italic text-[#5e6169] text-[9px] top-[0.5px] tracking-[-0.12px] whitespace-nowrap">Push-уведомления</p>
      </div>
    </div>
  );
}

function Container104() {
  return (
    <div className="h-[18px] relative shrink-0 w-[166px]" data-name="Container">
      <div className="bg-clip-padding border-0 border-[transparent] border-solid content-stretch flex gap-[8px] items-center relative size-full">
        <Container105 />
        <Paragraph85 />
      </div>
    </div>
  );
}

function Paragraph86() {
  return (
    <div className="h-[13.5px] relative shrink-0 w-[7.813px]" data-name="Paragraph">
      <div className="bg-clip-padding border-0 border-[transparent] border-solid relative size-full">
        <p className="absolute font-['Inter:Regular',sans-serif] font-normal leading-[13.5px] left-0 not-italic text-[9px] text-white top-[0.5px] tracking-[-0.12px] whitespace-nowrap">✓</p>
      </div>
    </div>
  );
}

function Container107() {
  return (
    <div className="bg-[#364146] relative rounded-[4px] shrink-0 size-[18px]" data-name="Container">
      <div className="bg-clip-padding border-0 border-[transparent] border-solid content-stretch flex items-center justify-center px-[5.094px] relative size-full">
        <Paragraph86 />
      </div>
    </div>
  );
}

function Paragraph87() {
  return (
    <div className="h-[13.5px] relative shrink-0 w-[90.758px]" data-name="Paragraph">
      <div className="bg-clip-padding border-0 border-[transparent] border-solid relative size-full">
        <p className="absolute font-['Inter:Regular',sans-serif] font-normal leading-[13.5px] left-0 not-italic text-[#101828] text-[9px] top-[0.5px] tracking-[-0.12px] whitespace-nowrap">Показывать профиль</p>
      </div>
    </div>
  );
}

function Container106() {
  return (
    <div className="h-[18px] relative shrink-0 w-[166px]" data-name="Container">
      <div className="bg-clip-padding border-0 border-[transparent] border-solid content-stretch flex gap-[8px] items-center relative size-full">
        <Container107 />
        <Paragraph87 />
      </div>
    </div>
  );
}

function Paragraph88() {
  return (
    <div className="h-[13.5px] relative shrink-0 w-[7.813px]" data-name="Paragraph">
      <div className="bg-clip-padding border-0 border-[transparent] border-solid relative size-full">
        <p className="absolute font-['Inter:Regular',sans-serif] font-normal leading-[13.5px] left-0 not-italic text-[9px] text-white top-[0.5px] tracking-[-0.12px] whitespace-nowrap">✓</p>
      </div>
    </div>
  );
}

function Container109() {
  return (
    <div className="bg-[#364146] relative rounded-[4px] shrink-0 size-[18px]" data-name="Container">
      <div className="bg-clip-padding border-0 border-[transparent] border-solid content-stretch flex items-center justify-center px-[5.094px] relative size-full">
        <Paragraph88 />
      </div>
    </div>
  );
}

function Paragraph89() {
  return (
    <div className="h-[13.5px] relative shrink-0 w-[98.609px]" data-name="Paragraph">
      <div className="bg-clip-padding border-0 border-[transparent] border-solid relative size-full">
        <p className="absolute font-['Inter:Regular',sans-serif] font-normal leading-[13.5px] left-0 not-italic text-[#101828] text-[9px] top-[0.5px] tracking-[-0.12px] whitespace-nowrap">Публичная активность</p>
      </div>
    </div>
  );
}

function Container108() {
  return (
    <div className="h-[18px] relative shrink-0 w-[166px]" data-name="Container">
      <div className="bg-clip-padding border-0 border-[transparent] border-solid content-stretch flex gap-[8px] items-center relative size-full">
        <Container109 />
        <Paragraph89 />
      </div>
    </div>
  );
}

function Container111() {
  return (
    <div className="relative rounded-[4px] shrink-0 size-[18px]" data-name="Container">
      <div aria-hidden="true" className="absolute border-2 border-[#d1d3db] border-solid inset-0 pointer-events-none rounded-[4px]" />
    </div>
  );
}

function Paragraph90() {
  return (
    <div className="h-[13.5px] relative shrink-0 w-[55.25px]" data-name="Paragraph">
      <div className="bg-clip-padding border-0 border-[transparent] border-solid relative size-full">
        <p className="absolute font-['Inter:Regular',sans-serif] font-normal leading-[13.5px] left-0 not-italic text-[#5e6169] text-[9px] top-[0.5px] tracking-[-0.12px] whitespace-nowrap">Темная тема</p>
      </div>
    </div>
  );
}

function Container110() {
  return (
    <div className="flex-[1_0_0] min-h-px min-w-px relative w-[166px]" data-name="Container">
      <div className="bg-clip-padding border-0 border-[transparent] border-solid content-stretch flex gap-[8px] items-center relative size-full">
        <Container111 />
        <Paragraph90 />
      </div>
    </div>
  );
}

function Container101() {
  return (
    <div className="absolute content-stretch flex flex-col gap-[8px] h-[122px] items-start left-0 top-[23px] w-[166px]" data-name="Container">
      <Container102 />
      <Container104 />
      <Container106 />
      <Container108 />
      <Container110 />
    </div>
  );
}

function Paragraph91() {
  return (
    <div className="h-[15px] relative shrink-0 w-[51.219px]" data-name="Paragraph">
      <div className="bg-clip-padding border-0 border-[transparent] border-solid relative size-full">
        <p className="absolute font-['Inter:Regular',sans-serif] font-normal leading-[15px] left-0 not-italic text-[10px] text-white top-[0.5px] tracking-[-0.13px] whitespace-nowrap">Сохранить</p>
      </div>
    </div>
  );
}

function Container112() {
  return (
    <div className="absolute bg-[#364146] content-stretch flex h-[34px] items-center justify-center left-0 px-[57.391px] rounded-[9.031px] top-[177px] w-[166px]" data-name="Container">
      <Paragraph91 />
    </div>
  );
}

function Container100() {
  return (
    <div className="h-[211px] relative shrink-0 w-full" data-name="Container">
      <Paragraph82 />
      <Container101 />
      <Container112 />
    </div>
  );
}

function Quiz6VariantA() {
  return (
    <div className="bg-white col-1 content-stretch flex flex-col h-[231px] items-start overflow-clip pt-[10px] px-[10px] relative rounded-[14.99px] row-6 shrink-0 w-[186px]" data-name="Quiz6VariantA">
      <Container100 />
    </div>
  );
}

function Paragraph92() {
  return (
    <div className="h-[15px] relative shrink-0 w-[166px]" data-name="Paragraph">
      <div className="bg-clip-padding border-0 border-[transparent] border-solid relative size-full">
        <p className="absolute font-['Inter:Regular',sans-serif] font-normal leading-[15px] left-0 not-italic text-[#101828] text-[13px] top-[0.5px] tracking-[-0.16px] whitespace-nowrap">Настройки</p>
      </div>
    </div>
  );
}

function Paragraph93() {
  return (
    <div className="h-[10.5px] relative shrink-0 w-full" data-name="Paragraph">
      <p className="absolute font-['Inter:Regular',sans-serif] font-normal leading-[10.5px] left-0 not-italic text-[#8e9199] text-[7px] top-0 tracking-[-0.09px] uppercase whitespace-nowrap">Уведомления</p>
    </div>
  );
}

function Paragraph94() {
  return (
    <div className="h-[13.5px] relative shrink-0 w-[7.813px]" data-name="Paragraph">
      <div className="bg-clip-padding border-0 border-[transparent] border-solid relative size-full">
        <p className="absolute font-['Inter:Regular',sans-serif] font-normal leading-[13.5px] left-0 not-italic text-[9px] text-white top-[0.5px] tracking-[-0.12px] whitespace-nowrap">✓</p>
      </div>
    </div>
  );
}

function Container118() {
  return (
    <div className="bg-[#364146] relative rounded-[4px] shrink-0 size-[18px]" data-name="Container">
      <div className="bg-clip-padding border-0 border-[transparent] border-solid content-stretch flex items-center justify-center px-[5.094px] relative size-full">
        <Paragraph94 />
      </div>
    </div>
  );
}

function Paragraph95() {
  return (
    <div className="h-[13.5px] relative shrink-0 w-[21.953px]" data-name="Paragraph">
      <div className="bg-clip-padding border-0 border-[transparent] border-solid relative size-full">
        <p className="absolute font-['Inter:Regular',sans-serif] font-normal leading-[13.5px] left-0 not-italic text-[#101828] text-[9px] top-[0.5px] tracking-[-0.12px] whitespace-nowrap">Email</p>
      </div>
    </div>
  );
}

function Container117() {
  return (
    <div className="h-[18px] relative shrink-0 w-[166px]" data-name="Container">
      <div className="bg-clip-padding border-0 border-[transparent] border-solid content-stretch flex gap-[8px] items-center relative size-full">
        <Container118 />
        <Paragraph95 />
      </div>
    </div>
  );
}

function Container120() {
  return (
    <div className="relative rounded-[4px] shrink-0 size-[18px]" data-name="Container">
      <div aria-hidden="true" className="absolute border-2 border-[#d1d3db] border-solid inset-0 pointer-events-none rounded-[4px]" />
    </div>
  );
}

function Paragraph96() {
  return (
    <div className="h-[13.5px] relative shrink-0 w-[20.492px]" data-name="Paragraph">
      <div className="bg-clip-padding border-0 border-[transparent] border-solid relative size-full">
        <p className="absolute font-['Inter:Regular',sans-serif] font-normal leading-[13.5px] left-0 not-italic text-[#5e6169] text-[9px] top-[0.5px] tracking-[-0.12px] whitespace-nowrap">Push</p>
      </div>
    </div>
  );
}

function Container119() {
  return (
    <div className="flex-[1_0_0] min-h-px min-w-px relative w-[166px]" data-name="Container">
      <div className="bg-clip-padding border-0 border-[transparent] border-solid content-stretch flex gap-[8px] items-center relative size-full">
        <Container120 />
        <Paragraph96 />
      </div>
    </div>
  );
}

function Container116() {
  return (
    <div className="content-stretch flex flex-col gap-[6px] h-[42px] items-start relative shrink-0 w-full" data-name="Container">
      <Container117 />
      <Container119 />
    </div>
  );
}

function Container115() {
  return (
    <div className="h-[58.5px] relative shrink-0 w-[166px]" data-name="Container">
      <div className="bg-clip-padding border-0 border-[transparent] border-solid content-stretch flex flex-col gap-[6px] items-start relative size-full">
        <Paragraph93 />
        <Container116 />
      </div>
    </div>
  );
}

function Container121() {
  return <div className="bg-[#f7f8fc] h-px shrink-0 w-[166px]" data-name="Container" />;
}

function Paragraph97() {
  return (
    <div className="h-[10.5px] relative shrink-0 w-full" data-name="Paragraph">
      <p className="absolute font-['Inter:Regular',sans-serif] font-normal leading-[10.5px] left-0 not-italic text-[#8e9199] text-[7px] top-0 tracking-[-0.09px] uppercase whitespace-nowrap">Приватность</p>
    </div>
  );
}

function Paragraph98() {
  return (
    <div className="h-[13.5px] relative shrink-0 w-[7.813px]" data-name="Paragraph">
      <div className="bg-clip-padding border-0 border-[transparent] border-solid relative size-full">
        <p className="absolute font-['Inter:Regular',sans-serif] font-normal leading-[13.5px] left-0 not-italic text-[9px] text-white top-[0.5px] tracking-[-0.12px] whitespace-nowrap">✓</p>
      </div>
    </div>
  );
}

function Container125() {
  return (
    <div className="bg-[#364146] relative rounded-[4px] shrink-0 size-[18px]" data-name="Container">
      <div className="bg-clip-padding border-0 border-[transparent] border-solid content-stretch flex items-center justify-center px-[5.094px] relative size-full">
        <Paragraph98 />
      </div>
    </div>
  );
}

function Paragraph99() {
  return (
    <div className="h-[13.5px] relative shrink-0 w-[90.758px]" data-name="Paragraph">
      <div className="bg-clip-padding border-0 border-[transparent] border-solid relative size-full">
        <p className="absolute font-['Inter:Regular',sans-serif] font-normal leading-[13.5px] left-0 not-italic text-[#101828] text-[9px] top-[0.5px] tracking-[-0.12px] whitespace-nowrap">Показывать профиль</p>
      </div>
    </div>
  );
}

function Container124() {
  return (
    <div className="h-[18px] relative shrink-0 w-[166px]" data-name="Container">
      <div className="bg-clip-padding border-0 border-[transparent] border-solid content-stretch flex gap-[8px] items-center relative size-full">
        <Container125 />
        <Paragraph99 />
      </div>
    </div>
  );
}

function Paragraph100() {
  return (
    <div className="h-[13.5px] relative shrink-0 w-[7.813px]" data-name="Paragraph">
      <div className="bg-clip-padding border-0 border-[transparent] border-solid relative size-full">
        <p className="absolute font-['Inter:Regular',sans-serif] font-normal leading-[13.5px] left-0 not-italic text-[9px] text-white top-[0.5px] tracking-[-0.12px] whitespace-nowrap">✓</p>
      </div>
    </div>
  );
}

function Container127() {
  return (
    <div className="bg-[#364146] relative rounded-[4px] shrink-0 size-[18px]" data-name="Container">
      <div className="bg-clip-padding border-0 border-[transparent] border-solid content-stretch flex items-center justify-center px-[5.094px] relative size-full">
        <Paragraph100 />
      </div>
    </div>
  );
}

function Paragraph101() {
  return (
    <div className="h-[13.5px] relative shrink-0 w-[98.609px]" data-name="Paragraph">
      <div className="bg-clip-padding border-0 border-[transparent] border-solid relative size-full">
        <p className="absolute font-['Inter:Regular',sans-serif] font-normal leading-[13.5px] left-0 not-italic text-[#101828] text-[9px] top-[0.5px] tracking-[-0.12px] whitespace-nowrap">Публичная активность</p>
      </div>
    </div>
  );
}

function Container126() {
  return (
    <div className="flex-[1_0_0] min-h-px min-w-px relative w-[166px]" data-name="Container">
      <div className="bg-clip-padding border-0 border-[transparent] border-solid content-stretch flex gap-[8px] items-center relative size-full">
        <Container127 />
        <Paragraph101 />
      </div>
    </div>
  );
}

function Container123() {
  return (
    <div className="content-stretch flex flex-col gap-[6px] h-[42px] items-start relative shrink-0 w-full" data-name="Container">
      <Container124 />
      <Container126 />
    </div>
  );
}

function Container122() {
  return (
    <div className="flex-[1_0_0] min-h-px min-w-px relative w-[166px]" data-name="Container">
      <div className="bg-clip-padding border-0 border-[transparent] border-solid content-stretch flex flex-col gap-[6px] items-start relative size-full">
        <Paragraph97 />
        <Container123 />
      </div>
    </div>
  );
}

function Container128() {
  return <div className="bg-[#f7f8fc] h-px shrink-0 w-[166px]" data-name="Container" />;
}

function Paragraph102() {
  return (
    <div className="h-[10.5px] relative shrink-0 w-full" data-name="Paragraph">
      <p className="absolute font-['Inter:Regular',sans-serif] font-normal leading-[10.5px] left-0 not-italic text-[#8e9199] text-[7px] top-0 tracking-[-0.09px] uppercase whitespace-nowrap">Интерфейс</p>
    </div>
  );
}

function Container131() {
  return (
    <div className="relative rounded-[4px] shrink-0 size-[18px]" data-name="Container">
      <div aria-hidden="true" className="absolute border-2 border-[#d1d3db] border-solid inset-0 pointer-events-none rounded-[4px]" />
    </div>
  );
}

function Paragraph103() {
  return (
    <div className="h-[13.5px] relative shrink-0 w-[55.25px]" data-name="Paragraph">
      <div className="bg-clip-padding border-0 border-[transparent] border-solid relative size-full">
        <p className="absolute font-['Inter:Regular',sans-serif] font-normal leading-[13.5px] left-0 not-italic text-[#5e6169] text-[9px] top-[0.5px] tracking-[-0.12px] whitespace-nowrap">Темная тема</p>
      </div>
    </div>
  );
}

function Container130() {
  return (
    <div className="content-stretch flex gap-[8px] h-[18px] items-center relative shrink-0 w-full" data-name="Container">
      <Container131 />
      <Paragraph103 />
    </div>
  );
}

function Container129() {
  return (
    <div className="h-[34.5px] relative shrink-0 w-[166px]" data-name="Container">
      <div className="bg-clip-padding border-0 border-[transparent] border-solid content-stretch flex flex-col gap-[6px] items-start relative size-full">
        <Paragraph102 />
        <Container130 />
      </div>
    </div>
  );
}

function Container114() {
  return (
    <div className="h-[185.5px] relative shrink-0 w-[166px]" data-name="Container">
      <div className="bg-clip-padding border-0 border-[transparent] border-solid content-stretch flex flex-col gap-[8px] items-start relative size-full">
        <Container115 />
        <Container121 />
        <Container122 />
        <Container128 />
        <Container129 />
      </div>
    </div>
  );
}

function Paragraph104() {
  return (
    <div className="h-[15px] relative shrink-0 w-[51.219px]" data-name="Paragraph">
      <div className="bg-clip-padding border-0 border-[transparent] border-solid relative size-full">
        <p className="absolute font-['Inter:Regular',sans-serif] font-normal leading-[15px] left-0 not-italic text-[10px] text-white top-[0.5px] tracking-[-0.13px] whitespace-nowrap">Сохранить</p>
      </div>
    </div>
  );
}

function Container132() {
  return (
    <div className="bg-[#364146] h-[15px] relative rounded-[9.031px] shrink-0 w-[166px]" data-name="Container">
      <div className="bg-clip-padding border-0 border-[transparent] border-solid content-stretch flex items-center justify-center px-[57.391px] relative size-full">
        <Paragraph104 />
      </div>
    </div>
  );
}

function Container113() {
  return (
    <div className="content-stretch flex flex-col gap-[8px] h-[211px] items-start relative shrink-0 w-full" data-name="Container">
      <Paragraph92 />
      <Container114 />
      <Container132 />
    </div>
  );
}

function Quiz6VariantB() {
  return (
    <div className="bg-white col-2 content-stretch flex flex-col h-[231px] items-start overflow-clip pt-[10px] px-[10px] relative rounded-[14.99px] row-6 shrink-0 w-[186px]" data-name="Quiz6VariantB">
      <Container113 />
    </div>
  );
}

export default function Frame() {
  return (
    <div className="gap-x-[32px] gap-y-[64px] grid grid-cols-[repeat(2,fit-content(100%))] grid-rows-[repeat(6,fit-content(100%))] relative size-full">
      <Quiz1VariantA />
      <Quiz1VariantB />
      <Quiz2VariantA />
      <Quiz2VariantB />
      <Quiz3VariantA />
      <Quiz3VariantB />
      <Quiz4VariantA />
      <Quiz4VariantB />
      <Quiz5VariantA />
      <Quiz5VariantB />
      <Quiz6VariantA />
      <Quiz6VariantB />
    </div>
  );
}

export {
  Quiz1VariantA as HierarchyQuiz1VariantA,
  Quiz1VariantB as HierarchyQuiz1VariantB,
  Quiz2VariantA as HierarchyQuiz2VariantA,
  Quiz2VariantB as HierarchyQuiz2VariantB,
  Quiz3VariantA as HierarchyQuiz3VariantA,
  Quiz3VariantB as HierarchyQuiz3VariantB,
  Quiz4VariantA as HierarchyQuiz4VariantA,
  Quiz4VariantB as HierarchyQuiz4VariantB,
  Quiz5VariantA as HierarchyQuiz5VariantA,
  Quiz5VariantB as HierarchyQuiz5VariantB,
  Quiz6VariantA as HierarchyQuiz6VariantA,
  Quiz6VariantB as HierarchyQuiz6VariantB,
};