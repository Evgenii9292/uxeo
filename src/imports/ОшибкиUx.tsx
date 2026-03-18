function Paragraph() {
  return (
    <div className="absolute h-[21px] left-0 top-[8px] w-[9.297px]" data-name="Paragraph">
      <p className="absolute font-['Inter:Regular',sans-serif] font-normal leading-[21px] left-0 not-italic text-[#364146] text-[14px] top-0 tracking-[-0.17px] whitespace-nowrap">A</p>
    </div>
  );
}

function Paragraph1() {
  return (
    <div className="h-[28px] relative shrink-0 w-[166px]" data-name="Paragraph">
      <div className="bg-clip-padding border-0 border-[transparent] border-solid relative size-full">
        <p className="absolute font-['Inter:Regular',sans-serif] font-normal leading-[7px] left-0 not-italic text-[#364146] text-[6px] top-[-0.5px] tracking-[-0.08px] w-[156px]">Добро пожаловать в приложение для управления задачами и проектами. Здесь вы можете создавать задачи устанавливать дедлайны приглашать команду следить за прогрессом и многое другое.</p>
      </div>
    </div>
  );
}

function Paragraph2() {
  return (
    <div className="h-[7.5px] relative shrink-0 w-full" data-name="Paragraph">
      <p className="absolute font-['Inter:Regular',sans-serif] font-normal leading-[7.5px] left-0 not-italic text-[5px] text-white top-[-0.5px] tracking-[-0.07px] whitespace-nowrap">A</p>
    </div>
  );
}

function Container3() {
  return (
    <div className="bg-[#3b82f6] h-[11.5px] relative rounded-[3px] shrink-0 w-[11.313px]" data-name="Container">
      <div className="bg-clip-padding border-0 border-[transparent] border-solid content-stretch flex flex-col items-start pt-[2px] px-[4px] relative size-full">
        <Paragraph2 />
      </div>
    </div>
  );
}

function Paragraph3() {
  return (
    <div className="h-[7.5px] relative shrink-0 w-full" data-name="Paragraph">
      <p className="absolute font-['Inter:Regular',sans-serif] font-normal leading-[7.5px] left-0 not-italic text-[5px] text-white top-[-0.5px] tracking-[-0.07px] whitespace-nowrap">B</p>
    </div>
  );
}

function Container4() {
  return (
    <div className="bg-[#8b5cf6] h-[11.5px] relative rounded-[3px] shrink-0 w-[11.188px]" data-name="Container">
      <div className="bg-clip-padding border-0 border-[transparent] border-solid content-stretch flex flex-col items-start pt-[2px] px-[4px] relative size-full">
        <Paragraph3 />
      </div>
    </div>
  );
}

function Paragraph4() {
  return (
    <div className="h-[7.5px] relative shrink-0 w-full" data-name="Paragraph">
      <p className="absolute font-['Inter:Regular',sans-serif] font-normal leading-[7.5px] left-0 not-italic text-[5px] text-white top-[-0.5px] tracking-[-0.07px] whitespace-nowrap">C</p>
    </div>
  );
}

function Container5() {
  return (
    <div className="bg-[#ef4444] h-[11.5px] relative rounded-[3px] shrink-0 w-[11.57px]" data-name="Container">
      <div className="bg-clip-padding border-0 border-[transparent] border-solid content-stretch flex flex-col items-start pt-[2px] px-[4px] relative size-full">
        <Paragraph4 />
      </div>
    </div>
  );
}

function Paragraph5() {
  return (
    <div className="h-[7.5px] relative shrink-0 w-full" data-name="Paragraph">
      <p className="absolute font-['Inter:Regular',sans-serif] font-normal leading-[7.5px] left-0 not-italic text-[5px] text-white top-[-0.5px] tracking-[-0.07px] whitespace-nowrap">D</p>
    </div>
  );
}

function Container6() {
  return (
    <div className="bg-[#22c55e] h-[11.5px] relative rounded-[3px] shrink-0 w-[11.531px]" data-name="Container">
      <div className="bg-clip-padding border-0 border-[transparent] border-solid content-stretch flex flex-col items-start pt-[2px] px-[4px] relative size-full">
        <Paragraph5 />
      </div>
    </div>
  );
}

function Container2() {
  return (
    <div className="h-[11.5px] relative shrink-0 w-[166px]" data-name="Container">
      <div className="bg-clip-padding border-0 border-[transparent] border-solid content-stretch flex gap-[2px] items-start relative size-full">
        <Container3 />
        <Container4 />
        <Container5 />
        <Container6 />
      </div>
    </div>
  );
}

function Container1() {
  return (
    <div className="content-stretch flex flex-col gap-[3px] h-[211px] items-start relative shrink-0 w-full" data-name="Container">
      <Paragraph1 />
      <Container2 />
    </div>
  );
}

function Lesson5Quiz1VariantA() {
  return (
    <div className="absolute bg-white content-stretch flex flex-col h-[231px] items-start left-[21.3px] overflow-clip pt-[10px] px-[10px] rounded-[14.99px] top-0 w-[186px]" data-name="Lesson5Quiz1VariantA">
      <Container1 />
    </div>
  );
}

function Container() {
  return (
    <div className="absolute h-[231px] left-0 top-[208px] w-[207.297px]" data-name="Container">
      <Paragraph />
      <Lesson5Quiz1VariantA />
    </div>
  );
}

function Paragraph6() {
  return (
    <div className="absolute h-[21px] left-0 top-[8px] w-[8.945px]" data-name="Paragraph">
      <p className="absolute font-['Inter:Regular',sans-serif] font-normal leading-[21px] left-0 not-italic text-[#364146] text-[14px] top-0 tracking-[-0.17px] whitespace-nowrap">B</p>
    </div>
  );
}

function Paragraph7() {
  return (
    <div className="absolute h-[15px] left-0 top-[67.75px] w-[166px]" data-name="Paragraph">
      <p className="absolute font-['Inter:Regular',sans-serif] font-normal leading-[15px] left-0 not-italic text-[#101828] text-[10px] top-[0.5px] tracking-[-0.13px] whitespace-nowrap">Управление задачами</p>
    </div>
  );
}

function Paragraph8() {
  return (
    <div className="absolute content-stretch flex h-[9px] items-start left-0 top-[92.75px] w-[166px]" data-name="Paragraph">
      <p className="flex-[1_0_0] font-['Inter:Regular',sans-serif] font-normal leading-[9px] min-h-px min-w-px not-italic relative text-[#8e9199] text-[7px] tracking-[-0.09px]">Создавайте задачи и следите за прогрессом</p>
    </div>
  );
}

function Paragraph9() {
  return (
    <div className="h-[13.5px] relative shrink-0 w-full" data-name="Paragraph">
      <p className="-translate-x-1/2 absolute font-['Inter:Regular',sans-serif] font-normal leading-[13.5px] left-[71.47px] not-italic text-[9px] text-center text-white top-[0.5px] tracking-[-0.12px] whitespace-nowrap">Начать работу</p>
    </div>
  );
}

function Container9() {
  return (
    <div className="absolute bg-[#3b82f6] content-stretch flex flex-col h-[29.5px] items-start left-0 pt-[8px] px-[12px] rounded-[6px] top-[113.75px] w-[166px]" data-name="Container">
      <Paragraph9 />
    </div>
  );
}

function Container8() {
  return (
    <div className="h-[211px] relative shrink-0 w-full" data-name="Container">
      <Paragraph7 />
      <Paragraph8 />
      <Container9 />
    </div>
  );
}

function Lesson5Quiz1VariantB() {
  return (
    <div className="absolute bg-white content-stretch flex flex-col h-[231px] items-start left-[20.95px] overflow-clip pt-[10px] px-[10px] rounded-[14.99px] top-0 w-[186px]" data-name="Lesson5Quiz1VariantB">
      <Container8 />
    </div>
  );
}

function Container7() {
  return (
    <div className="absolute h-[231px] left-[247.3px] top-[208px] w-[206.945px]" data-name="Container">
      <Paragraph6 />
      <Lesson5Quiz1VariantB />
    </div>
  );
}

function Paragraph10() {
  return (
    <div className="absolute h-[21px] left-0 top-[8px] w-[9.297px]" data-name="Paragraph">
      <p className="absolute font-['Inter:Regular',sans-serif] font-normal leading-[21px] left-0 not-italic text-[#364146] text-[14px] top-0 tracking-[-0.17px] whitespace-nowrap">A</p>
    </div>
  );
}

function Container11() {
  return <div className="absolute h-[211px] left-[10px] top-[10px] w-[166px]" data-name="Container" />;
}

function Paragraph11() {
  return (
    <div className="absolute h-[10.5px] left-[15px] top-[20px] w-[23.773px]" data-name="Paragraph">
      <p className="absolute font-['Inter:Regular',sans-serif] font-normal leading-[10.5px] left-0 not-italic text-[#101828] text-[7px] top-0 tracking-[-0.09px] whitespace-nowrap">Текст 1</p>
    </div>
  );
}

function Paragraph12() {
  return (
    <div className="h-[7.5px] relative shrink-0 w-full" data-name="Paragraph">
      <p className="absolute font-['Inter:Regular',sans-serif] font-normal leading-[7.5px] left-0 not-italic text-[5px] text-white top-[-0.5px] tracking-[-0.07px] whitespace-nowrap">B1</p>
    </div>
  );
}

function Container12() {
  return (
    <div className="absolute bg-[#3b82f6] content-stretch flex flex-col h-[13.5px] items-start left-[148.56px] pt-[3px] px-[6px] rounded-[4px] top-[60px] w-[17.438px]" data-name="Container">
      <Paragraph12 />
    </div>
  );
}

function Paragraph13() {
  return (
    <div className="absolute h-[9px] left-[80px] top-[172px] w-[10.391px]" data-name="Paragraph">
      <p className="absolute font-['Inter:Regular',sans-serif] font-normal leading-[9px] left-0 not-italic text-[#8e9199] text-[6px] top-[-0.5px] tracking-[-0.08px] whitespace-nowrap">Info</p>
    </div>
  );
}

function Container13() {
  return <div className="absolute bg-[#f7f8fc] h-[25px] left-[40px] rounded-[3px] top-[100px] w-[40px]" data-name="Container" />;
}

function Lesson5Quiz2VariantA() {
  return (
    <div className="absolute bg-white h-[231px] left-[21.3px] overflow-clip rounded-[14.99px] top-0 w-[186px]" data-name="Lesson5Quiz2VariantA">
      <Container11 />
      <Paragraph11 />
      <Container12 />
      <Paragraph13 />
      <Container13 />
    </div>
  );
}

function Container10() {
  return (
    <div className="absolute h-[231px] left-0 top-[525px] w-[207.297px]" data-name="Container">
      <Paragraph10 />
      <Lesson5Quiz2VariantA />
    </div>
  );
}

function Paragraph14() {
  return (
    <div className="absolute h-[21px] left-0 top-[8px] w-[8.945px]" data-name="Paragraph">
      <p className="absolute font-['Inter:Regular',sans-serif] font-normal leading-[21px] left-0 not-italic text-[#364146] text-[14px] top-0 tracking-[-0.17px] whitespace-nowrap">B</p>
    </div>
  );
}

function Paragraph15() {
  return (
    <div className="h-[13.5px] relative shrink-0 w-[166px]" data-name="Paragraph">
      <div className="bg-clip-padding border-0 border-[transparent] border-solid relative size-full">
        <p className="absolute font-['Inter:Regular',sans-serif] font-normal leading-[13.5px] left-0 not-italic text-[#101828] text-[9px] top-[0.5px] tracking-[-0.12px] whitespace-nowrap">Интерфейс</p>
      </div>
    </div>
  );
}

function Paragraph16() {
  return (
    <div className="content-stretch flex h-[9px] items-start relative shrink-0 w-full" data-name="Paragraph">
      <p className="flex-[1_0_0] font-['Inter:Regular',sans-serif] font-normal leading-[9px] min-h-px min-w-px not-italic relative text-[#364146] text-[7px] tracking-[-0.09px]">Информация</p>
    </div>
  );
}

function Container16() {
  return (
    <div className="bg-[#f7f8fc] h-[25px] relative rounded-[6px] shrink-0 w-[166px]" data-name="Container">
      <div className="bg-clip-padding border-0 border-[transparent] border-solid content-stretch flex flex-col items-start pt-[8px] px-[8px] relative size-full">
        <Paragraph16 />
      </div>
    </div>
  );
}

function Paragraph17() {
  return (
    <div className="h-[12px] relative shrink-0 w-full" data-name="Paragraph">
      <p className="-translate-x-1/2 absolute font-['Inter:Regular',sans-serif] font-normal leading-[12px] left-[71.39px] not-italic text-[8px] text-center text-white top-0 tracking-[-0.1px] whitespace-nowrap">Действие</p>
    </div>
  );
}

function Container17() {
  return (
    <div className="bg-[#3b82f6] h-[24px] relative rounded-[6px] shrink-0 w-[166px]" data-name="Container">
      <div className="bg-clip-padding border-0 border-[transparent] border-solid content-stretch flex flex-col items-start pt-[6px] px-[12px] relative size-full">
        <Paragraph17 />
      </div>
    </div>
  );
}

function Container15() {
  return (
    <div className="content-stretch flex flex-col gap-[8px] h-[211px] items-start justify-center py-[66.25px] relative shrink-0 w-full" data-name="Container">
      <Paragraph15 />
      <Container16 />
      <Container17 />
    </div>
  );
}

function Lesson5Quiz2VariantB() {
  return (
    <div className="absolute bg-white content-stretch flex flex-col h-[231px] items-start left-[20.95px] overflow-clip pt-[10px] px-[10px] rounded-[14.99px] top-0 w-[186px]" data-name="Lesson5Quiz2VariantB">
      <Container15 />
    </div>
  );
}

function Container14() {
  return (
    <div className="absolute h-[231px] left-[247.3px] top-[525px] w-[206.945px]" data-name="Container">
      <Paragraph14 />
      <Lesson5Quiz2VariantB />
    </div>
  );
}

function Paragraph18() {
  return (
    <div className="absolute h-[21px] left-0 top-[8px] w-[9.297px]" data-name="Paragraph">
      <p className="absolute font-['Inter:Regular',sans-serif] font-normal leading-[21px] left-0 not-italic text-[#364146] text-[14px] top-0 tracking-[-0.17px] whitespace-nowrap">A</p>
    </div>
  );
}

function Paragraph19() {
  return (
    <div className="h-[12px] relative shrink-0 w-full" data-name="Paragraph">
      <p className="-translate-x-1/2 absolute font-['Inter:Regular',sans-serif] font-normal leading-[12px] left-[71.27px] not-italic text-[#a0a0a0] text-[8px] text-center top-0 tracking-[-0.1px] whitespace-nowrap">Кнопка</p>
    </div>
  );
}

function Container20() {
  return (
    <div className="bg-[#e8e8e8] h-[24px] relative rounded-[6px] shrink-0 w-[166px]" data-name="Container">
      <div className="bg-clip-padding border-0 border-[transparent] border-solid content-stretch flex flex-col items-start pt-[6px] px-[12px] relative size-full">
        <Paragraph19 />
      </div>
    </div>
  );
}

function Paragraph20() {
  return (
    <div className="h-[9px] relative shrink-0 w-full" data-name="Paragraph">
      <p className="absolute font-['Inter:Regular',sans-serif] font-normal leading-[9px] left-0 not-italic text-[#ef4444] text-[6px] top-[-0.5px] tracking-[-0.08px] whitespace-nowrap">Ошибка в поле</p>
    </div>
  );
}

function Container21() {
  return (
    <div className="bg-[#f7f8fc] h-[19px] relative rounded-[4px] shrink-0 w-[166px]" data-name="Container">
      <div aria-hidden="true" className="absolute border border-[#d1d3db] border-solid inset-0 pointer-events-none rounded-[4px]" />
      <div className="bg-clip-padding border-0 border-[transparent] border-solid content-stretch flex flex-col items-start pb-px pt-[5px] px-[9px] relative size-full">
        <Paragraph20 />
      </div>
    </div>
  );
}

function Paragraph21() {
  return (
    <div className="h-[10.5px] relative shrink-0 w-[166px]" data-name="Paragraph">
      <div className="bg-clip-padding border-0 border-[transparent] border-solid relative size-full">
        <p className="absolute font-['Inter:Regular',sans-serif] font-normal leading-[10.5px] left-0 not-italic text-[#364146] text-[7px] top-0 tracking-[-0.09px] whitespace-nowrap">Обычный текст</p>
      </div>
    </div>
  );
}

function Container19() {
  return (
    <div className="content-stretch flex flex-col gap-[6px] h-[211px] items-start justify-center py-[72.75px] relative shrink-0 w-full" data-name="Container">
      <Container20 />
      <Container21 />
      <Paragraph21 />
    </div>
  );
}

function Lesson5Quiz3VariantA() {
  return (
    <div className="absolute bg-white content-stretch flex flex-col h-[231px] items-start left-[21.3px] overflow-clip pt-[10px] px-[10px] rounded-[14.99px] top-0 w-[186px]" data-name="Lesson5Quiz3VariantA">
      <Container19 />
    </div>
  );
}

function Container18() {
  return (
    <div className="absolute h-[231px] left-0 top-[842px] w-[207.297px]" data-name="Container">
      <Paragraph18 />
      <Lesson5Quiz3VariantA />
    </div>
  );
}

function Paragraph22() {
  return (
    <div className="absolute h-[21px] left-0 top-[8px] w-[8.945px]" data-name="Paragraph">
      <p className="absolute font-['Inter:Regular',sans-serif] font-normal leading-[21px] left-0 not-italic text-[#364146] text-[14px] top-0 tracking-[-0.17px] whitespace-nowrap">B</p>
    </div>
  );
}

function Paragraph23() {
  return (
    <div className="h-[13.5px] relative shrink-0 w-full" data-name="Paragraph">
      <p className="-translate-x-1/2 absolute font-['Inter:Regular',sans-serif] font-normal leading-[13.5px] left-[71.09px] not-italic text-[9px] text-center text-white top-[0.5px] tracking-[-0.12px] whitespace-nowrap">Действие</p>
    </div>
  );
}

function Container24() {
  return (
    <div className="bg-[#3b82f6] h-[29.5px] relative rounded-[6px] shrink-0 w-[166px]" data-name="Container">
      <div className="bg-clip-padding border-0 border-[transparent] border-solid content-stretch flex flex-col items-start pt-[8px] px-[12px] relative size-full">
        <Paragraph23 />
      </div>
    </div>
  );
}

function Paragraph24() {
  return (
    <div className="h-[10.5px] relative shrink-0 w-full" data-name="Paragraph">
      <p className="absolute font-['Inter:Regular',sans-serif] font-normal leading-[10.5px] left-0 not-italic text-[#ef4444] text-[7px] top-0 tracking-[-0.09px] whitespace-nowrap">Ошибка: проверьте данные</p>
    </div>
  );
}

function Container25() {
  return (
    <div className="bg-[#fef2f2] h-[24.5px] relative rounded-[4px] shrink-0 w-[166px]" data-name="Container">
      <div aria-hidden="true" className="absolute border border-[#ef4444] border-solid inset-0 pointer-events-none rounded-[4px]" />
      <div className="bg-clip-padding border-0 border-[transparent] border-solid content-stretch flex flex-col items-start pb-px pt-[7px] px-[9px] relative size-full">
        <Paragraph24 />
      </div>
    </div>
  );
}

function Paragraph25() {
  return (
    <div className="h-[12px] relative shrink-0 w-[166px]" data-name="Paragraph">
      <div className="bg-clip-padding border-0 border-[transparent] border-solid relative size-full">
        <p className="absolute font-['Inter:Regular',sans-serif] font-normal leading-[12px] left-0 not-italic text-[#101828] text-[8px] top-0 tracking-[-0.1px] whitespace-nowrap">Заголовок раздела</p>
      </div>
    </div>
  );
}

function Container23() {
  return (
    <div className="content-stretch flex flex-col gap-[8px] h-[211px] items-start justify-center py-[64.5px] relative shrink-0 w-full" data-name="Container">
      <Container24 />
      <Container25 />
      <Paragraph25 />
    </div>
  );
}

function Lesson5Quiz3VariantB() {
  return (
    <div className="absolute bg-white content-stretch flex flex-col h-[231px] items-start left-[20.95px] overflow-clip pt-[10px] px-[10px] rounded-[14.99px] top-0 w-[186px]" data-name="Lesson5Quiz3VariantB">
      <Container23 />
    </div>
  );
}

function Container22() {
  return (
    <div className="absolute h-[231px] left-[247.3px] top-[842px] w-[206.945px]" data-name="Container">
      <Paragraph22 />
      <Lesson5Quiz3VariantB />
    </div>
  );
}

function Paragraph26() {
  return (
    <div className="h-[7.5px] relative shrink-0 w-full" data-name="Paragraph">
      <p className="absolute font-['Inter:Regular',sans-serif] font-normal leading-[7.5px] left-0 not-italic text-[5px] text-white top-[-0.5px] tracking-[-0.07px] whitespace-nowrap">1</p>
    </div>
  );
}

function Container28() {
  return (
    <div className="bg-[#ef4444] h-[11.5px] relative rounded-[2px] shrink-0 w-[8.258px]" data-name="Container">
      <div className="bg-clip-padding border-0 border-[transparent] border-solid content-stretch flex flex-col items-start pt-[2px] px-[3px] relative size-full">
        <Paragraph26 />
      </div>
    </div>
  );
}

function Paragraph27() {
  return (
    <div className="h-[7.5px] relative shrink-0 w-full" data-name="Paragraph">
      <p className="absolute font-['Inter:Regular',sans-serif] font-normal leading-[7.5px] left-0 not-italic text-[5px] text-white top-[-0.5px] tracking-[-0.07px] whitespace-nowrap">2</p>
    </div>
  );
}

function Container29() {
  return (
    <div className="bg-[#8b5cf6] h-[11.5px] relative rounded-[2px] shrink-0 w-[8.961px]" data-name="Container">
      <div className="bg-clip-padding border-0 border-[transparent] border-solid content-stretch flex flex-col items-start pt-[2px] px-[3px] relative size-full">
        <Paragraph27 />
      </div>
    </div>
  );
}

function Paragraph28() {
  return (
    <div className="h-[7.5px] relative shrink-0 w-full" data-name="Paragraph">
      <p className="absolute font-['Inter:Regular',sans-serif] font-normal leading-[7.5px] left-0 not-italic text-[5px] text-white top-[-0.5px] tracking-[-0.07px] whitespace-nowrap">3</p>
    </div>
  );
}

function Container30() {
  return (
    <div className="bg-[#22c55e] h-[11.5px] relative rounded-[2px] shrink-0 w-[9.117px]" data-name="Container">
      <div className="bg-clip-padding border-0 border-[transparent] border-solid content-stretch flex flex-col items-start pt-[2px] px-[3px] relative size-full">
        <Paragraph28 />
      </div>
    </div>
  );
}

function Container27() {
  return (
    <div className="absolute content-stretch flex gap-[2px] h-[11.5px] items-start left-0 top-0 w-[166px]" data-name="Container">
      <Container28 />
      <Container29 />
      <Container30 />
    </div>
  );
}

function Paragraph29() {
  return (
    <div className="h-[7.5px] relative shrink-0 w-full" data-name="Paragraph">
      <p className="absolute font-['Inter:Regular',sans-serif] font-normal leading-[7.5px] left-0 not-italic text-[#78350f] text-[5px] top-[-0.5px] tracking-[-0.07px] whitespace-nowrap">4</p>
    </div>
  );
}

function Container32() {
  return (
    <div className="bg-[#fbbf24] h-[11.5px] relative rounded-[2px] shrink-0 w-[9.141px]" data-name="Container">
      <div className="bg-clip-padding border-0 border-[transparent] border-solid content-stretch flex flex-col items-start pt-[2px] px-[3px] relative size-full">
        <Paragraph29 />
      </div>
    </div>
  );
}

function Paragraph30() {
  return (
    <div className="h-[7.5px] relative shrink-0 w-full" data-name="Paragraph">
      <p className="absolute font-['Inter:Regular',sans-serif] font-normal leading-[7.5px] left-0 not-italic text-[5px] text-white top-[-0.5px] tracking-[-0.07px] whitespace-nowrap">5</p>
    </div>
  );
}

function Container33() {
  return (
    <div className="bg-[#ec4899] h-[11.5px] relative rounded-[2px] shrink-0 w-[8.977px]" data-name="Container">
      <div className="bg-clip-padding border-0 border-[transparent] border-solid content-stretch flex flex-col items-start pt-[2px] px-[3px] relative size-full">
        <Paragraph30 />
      </div>
    </div>
  );
}

function Container31() {
  return (
    <div className="absolute content-stretch flex gap-[2px] h-[11.5px] items-start left-0 top-[14.5px] w-[166px]" data-name="Container">
      <Container32 />
      <Container33 />
    </div>
  );
}

function Paragraph31() {
  return (
    <div className="absolute content-stretch flex h-[6px] items-start left-0 top-[31px] w-[166px]" data-name="Paragraph">
      <p className="flex-[1_0_0] font-['Inter:Regular',sans-serif] font-normal leading-[6px] min-h-px min-w-px not-italic relative text-[#364146] text-[5px] tracking-[-0.07px]">Текст текст текст</p>
    </div>
  );
}

function Container26() {
  return (
    <div className="h-[211px] relative shrink-0 w-full" data-name="Container">
      <Container27 />
      <Container31 />
      <Paragraph31 />
    </div>
  );
}

function Lesson5Quiz() {
  return (
    <div className="absolute bg-white content-stretch flex flex-col h-[231px] items-start left-0 overflow-clip pt-[10px] px-[10px] rounded-[14.99px] top-[1265px] w-[186px]" data-name="Lesson5Quiz4">
      <Container26 />
    </div>
  );
}

function Container36() {
  return (
    <div className="bg-[#f7f8fc] relative rounded-[2px] shrink-0 size-[12px]" data-name="Container">
      <div aria-hidden="true" className="absolute border border-[#d1d3db] border-solid inset-0 pointer-events-none rounded-[2px]" />
    </div>
  );
}

function Paragraph32() {
  return (
    <div className="h-[12px] relative shrink-0 w-[7.453px]" data-name="Paragraph">
      <div className="bg-clip-padding border-0 border-[transparent] border-solid relative size-full">
        <p className="absolute font-['Inter:Regular',sans-serif] font-normal leading-[12px] left-0 not-italic text-[#0a0a0a] text-[8px] top-[0.5px] tracking-[0.2057px] whitespace-nowrap">→</p>
      </div>
    </div>
  );
}

function Container37() {
  return (
    <div className="bg-[#f7f8fc] relative rounded-[2px] shrink-0 size-[12px]" data-name="Container">
      <div aria-hidden="true" className="absolute border border-[#d1d3db] border-solid inset-0 pointer-events-none rounded-[2px]" />
    </div>
  );
}

function Paragraph33() {
  return (
    <div className="h-[12px] relative shrink-0 w-[7.453px]" data-name="Paragraph">
      <div className="bg-clip-padding border-0 border-[transparent] border-solid relative size-full">
        <p className="absolute font-['Inter:Regular',sans-serif] font-normal leading-[12px] left-0 not-italic text-[#0a0a0a] text-[8px] top-[0.5px] tracking-[0.2057px] whitespace-nowrap">→</p>
      </div>
    </div>
  );
}

function Container38() {
  return (
    <div className="bg-[#f7f8fc] relative rounded-[2px] shrink-0 size-[12px]" data-name="Container">
      <div aria-hidden="true" className="absolute border border-[#d1d3db] border-solid inset-0 pointer-events-none rounded-[2px]" />
    </div>
  );
}

function Container35() {
  return (
    <div className="h-[12px] relative shrink-0 w-[166px]" data-name="Container">
      <div className="bg-clip-padding border-0 border-[transparent] border-solid content-stretch flex gap-[2px] items-start relative size-full">
        <Container36 />
        <Paragraph32 />
        <Container37 />
        <Paragraph33 />
        <Container38 />
      </div>
    </div>
  );
}

function Paragraph34() {
  return (
    <div className="h-[12px] relative shrink-0 w-[6.461px]" data-name="Paragraph">
      <div className="bg-clip-padding border-0 border-[transparent] border-solid relative size-full">
        <p className="absolute font-['Inter:Regular',sans-serif] font-normal leading-[12px] left-0 not-italic text-[#0a0a0a] text-[8px] top-[0.5px] tracking-[0.2057px] whitespace-nowrap">↓</p>
      </div>
    </div>
  );
}

function Container39() {
  return (
    <div className="h-[12px] relative shrink-0 w-[166px]" data-name="Container">
      <div className="bg-clip-padding border-0 border-[transparent] border-solid content-stretch flex items-start relative size-full">
        <Paragraph34 />
      </div>
    </div>
  );
}

function Container41() {
  return (
    <div className="bg-[#f7f8fc] relative rounded-[2px] shrink-0 size-[12px]" data-name="Container">
      <div aria-hidden="true" className="absolute border border-[#d1d3db] border-solid inset-0 pointer-events-none rounded-[2px]" />
    </div>
  );
}

function Paragraph35() {
  return (
    <div className="h-[12px] relative shrink-0 w-[7.453px]" data-name="Paragraph">
      <div className="bg-clip-padding border-0 border-[transparent] border-solid relative size-full">
        <p className="absolute font-['Inter:Regular',sans-serif] font-normal leading-[12px] left-0 not-italic text-[#0a0a0a] text-[8px] top-[0.5px] tracking-[0.2057px] whitespace-nowrap">→</p>
      </div>
    </div>
  );
}

function Container42() {
  return (
    <div className="bg-[#f7f8fc] relative rounded-[2px] shrink-0 size-[12px]" data-name="Container">
      <div aria-hidden="true" className="absolute border border-[#d1d3db] border-solid inset-0 pointer-events-none rounded-[2px]" />
    </div>
  );
}

function Container40() {
  return (
    <div className="h-[12px] relative shrink-0 w-[166px]" data-name="Container">
      <div className="bg-clip-padding border-0 border-[transparent] border-solid content-stretch flex gap-[2px] items-start relative size-full">
        <Container41 />
        <Paragraph35 />
        <Container42 />
      </div>
    </div>
  );
}

function Paragraph36() {
  return (
    <div className="h-[12px] relative shrink-0 w-[6.461px]" data-name="Paragraph">
      <div className="bg-clip-padding border-0 border-[transparent] border-solid relative size-full">
        <p className="absolute font-['Inter:Regular',sans-serif] font-normal leading-[12px] left-0 not-italic text-[#0a0a0a] text-[8px] top-[0.5px] tracking-[0.2057px] whitespace-nowrap">↓</p>
      </div>
    </div>
  );
}

function Container43() {
  return (
    <div className="h-[12px] relative shrink-0 w-[166px]" data-name="Container">
      <div className="bg-clip-padding border-0 border-[transparent] border-solid content-stretch flex items-start relative size-full">
        <Paragraph36 />
      </div>
    </div>
  );
}

function Container45() {
  return (
    <div className="bg-[#f7f8fc] relative rounded-[2px] shrink-0 size-[12px]" data-name="Container">
      <div aria-hidden="true" className="absolute border border-[#d1d3db] border-solid inset-0 pointer-events-none rounded-[2px]" />
    </div>
  );
}

function Container44() {
  return (
    <div className="h-[12px] relative shrink-0 w-[166px]" data-name="Container">
      <div className="bg-clip-padding border-0 border-[transparent] border-solid content-stretch flex items-start relative size-full">
        <Container45 />
      </div>
    </div>
  );
}

function Container34() {
  return (
    <div className="content-stretch flex flex-col gap-[4px] h-[211px] items-start justify-center py-[67.5px] relative shrink-0 w-full" data-name="Container">
      <Container35 />
      <Container39 />
      <Container40 />
      <Container43 />
      <Container44 />
    </div>
  );
}

function Lesson5Quiz1() {
  return (
    <div className="absolute bg-white content-stretch flex flex-col h-[231px] items-start left-0 overflow-clip pt-[10px] px-[10px] rounded-[14.99px] top-[1659px] w-[186px]" data-name="Lesson5Quiz5">
      <Container34 />
    </div>
  );
}

function Paragraph37() {
  return (
    <div className="h-[7.5px] relative shrink-0 w-full" data-name="Paragraph">
      <p className="absolute font-['Inter:Regular',sans-serif] font-normal leading-[7.5px] left-0 not-italic text-[#364146] text-[5px] top-[-0.5px] tracking-[-0.07px] whitespace-nowrap">A</p>
    </div>
  );
}

function Container48() {
  return (
    <div className="bg-[#f7f8fc] h-[11.5px] relative rounded-[2px] shrink-0 w-[7.313px]" data-name="Container">
      <div className="bg-clip-padding border-0 border-[transparent] border-solid content-stretch flex flex-col items-start pt-[2px] px-[2px] relative size-full">
        <Paragraph37 />
      </div>
    </div>
  );
}

function Paragraph38() {
  return (
    <div className="h-[7.5px] relative shrink-0 w-full" data-name="Paragraph">
      <p className="absolute font-['Inter:Regular',sans-serif] font-normal leading-[7.5px] left-0 not-italic text-[#364146] text-[5px] top-[-0.5px] tracking-[-0.07px] whitespace-nowrap">B</p>
    </div>
  );
}

function Container49() {
  return (
    <div className="bg-[#f7f8fc] h-[11.5px] relative rounded-[2px] shrink-0 w-[7.188px]" data-name="Container">
      <div className="bg-clip-padding border-0 border-[transparent] border-solid content-stretch flex flex-col items-start pt-[2px] px-[2px] relative size-full">
        <Paragraph38 />
      </div>
    </div>
  );
}

function Paragraph39() {
  return (
    <div className="h-[7.5px] relative shrink-0 w-full" data-name="Paragraph">
      <p className="absolute font-['Inter:Regular',sans-serif] font-normal leading-[7.5px] left-0 not-italic text-[#364146] text-[5px] top-[-0.5px] tracking-[-0.07px] whitespace-nowrap">C</p>
    </div>
  );
}

function Container50() {
  return (
    <div className="bg-[#f7f8fc] h-[11.5px] relative rounded-[2px] shrink-0 w-[7.57px]" data-name="Container">
      <div className="bg-clip-padding border-0 border-[transparent] border-solid content-stretch flex flex-col items-start pt-[2px] px-[2px] relative size-full">
        <Paragraph39 />
      </div>
    </div>
  );
}

function Container47() {
  return (
    <div className="h-[11.5px] relative shrink-0 w-[166px]" data-name="Container">
      <div className="bg-clip-padding border-0 border-[transparent] border-solid content-stretch flex gap-[2px] items-start relative size-full">
        <Container48 />
        <Container49 />
        <Container50 />
      </div>
    </div>
  );
}

function Paragraph40() {
  return (
    <div className="h-[7.5px] relative shrink-0 w-full" data-name="Paragraph">
      <p className="absolute font-['Inter:Regular',sans-serif] font-normal leading-[7.5px] left-0 not-italic text-[#364146] text-[5px] top-[-0.5px] tracking-[-0.07px] whitespace-nowrap">D</p>
    </div>
  );
}

function Container52() {
  return (
    <div className="bg-[#f7f8fc] h-[11.5px] relative rounded-[2px] shrink-0 w-[7.531px]" data-name="Container">
      <div className="bg-clip-padding border-0 border-[transparent] border-solid content-stretch flex flex-col items-start pt-[2px] px-[2px] relative size-full">
        <Paragraph40 />
      </div>
    </div>
  );
}

function Paragraph41() {
  return (
    <div className="h-[7.5px] relative shrink-0 w-full" data-name="Paragraph">
      <p className="absolute font-['Inter:Regular',sans-serif] font-normal leading-[7.5px] left-0 not-italic text-[#364146] text-[5px] top-[-0.5px] tracking-[-0.07px] whitespace-nowrap">E</p>
    </div>
  );
}

function Container53() {
  return (
    <div className="bg-[#f7f8fc] h-[11.5px] relative rounded-[2px] shrink-0 w-[6.922px]" data-name="Container">
      <div className="bg-clip-padding border-0 border-[transparent] border-solid content-stretch flex flex-col items-start pt-[2px] px-[2px] relative size-full">
        <Paragraph41 />
      </div>
    </div>
  );
}

function Container51() {
  return (
    <div className="h-[11.5px] relative shrink-0 w-[166px]" data-name="Container">
      <div className="bg-clip-padding border-0 border-[transparent] border-solid content-stretch flex gap-[2px] items-start relative size-full">
        <Container52 />
        <Container53 />
      </div>
    </div>
  );
}

function Container46() {
  return (
    <div className="content-stretch flex flex-col gap-[2px] h-[211px] items-start relative shrink-0 w-full" data-name="Container">
      <Container47 />
      <Container51 />
    </div>
  );
}

function Lesson5Quiz2() {
  return (
    <div className="absolute bg-white content-stretch flex flex-col h-[231px] items-start left-0 overflow-clip pt-[10px] px-[10px] rounded-[14.99px] top-[2053px] w-[186px]" data-name="Lesson5Quiz6">
      <Container46 />
    </div>
  );
}

function Paragraph42() {
  return (
    <div className="h-[7.5px] relative shrink-0 w-full" data-name="Paragraph">
      <p className="absolute font-['Inter:Regular',sans-serif] font-normal leading-[7.5px] left-0 not-italic text-[5px] text-white top-[-0.5px] tracking-[-0.07px] whitespace-nowrap">A</p>
    </div>
  );
}

function Container56() {
  return (
    <div className="bg-[#ef4444] h-[11.5px] relative rounded-[2px] shrink-0 w-[11.313px]" data-name="Container">
      <div className="bg-clip-padding border-0 border-[transparent] border-solid content-stretch flex flex-col items-start pt-[2px] px-[4px] relative size-full">
        <Paragraph42 />
      </div>
    </div>
  );
}

function Paragraph43() {
  return (
    <div className="h-[7.5px] relative shrink-0 w-full" data-name="Paragraph">
      <p className="absolute font-['Inter:Regular',sans-serif] font-normal leading-[7.5px] left-0 not-italic text-[5px] text-white top-[-0.5px] tracking-[-0.07px] whitespace-nowrap">B</p>
    </div>
  );
}

function Container57() {
  return (
    <div className="bg-[#8b5cf6] h-[11.5px] relative rounded-[2px] shrink-0 w-[11.188px]" data-name="Container">
      <div className="bg-clip-padding border-0 border-[transparent] border-solid content-stretch flex flex-col items-start pt-[2px] px-[4px] relative size-full">
        <Paragraph43 />
      </div>
    </div>
  );
}

function Paragraph44() {
  return (
    <div className="h-[7.5px] relative shrink-0 w-full" data-name="Paragraph">
      <p className="absolute font-['Inter:Regular',sans-serif] font-normal leading-[7.5px] left-0 not-italic text-[5px] text-white top-[-0.5px] tracking-[-0.07px] whitespace-nowrap">C</p>
    </div>
  );
}

function Container58() {
  return (
    <div className="bg-[#22c55e] h-[11.5px] relative rounded-[2px] shrink-0 w-[11.57px]" data-name="Container">
      <div className="bg-clip-padding border-0 border-[transparent] border-solid content-stretch flex flex-col items-start pt-[2px] px-[4px] relative size-full">
        <Paragraph44 />
      </div>
    </div>
  );
}

function Container55() {
  return (
    <div className="h-[11.5px] relative shrink-0 w-[166px]" data-name="Container">
      <div className="bg-clip-padding border-0 border-[transparent] border-solid content-stretch flex gap-[2px] items-start relative size-full">
        <Container56 />
        <Container57 />
        <Container58 />
      </div>
    </div>
  );
}

function Paragraph45() {
  return (
    <div className="h-[6px] relative shrink-0 w-[166px]" data-name="Paragraph">
      <div className="bg-clip-padding border-0 border-[transparent] border-solid content-stretch flex items-start relative size-full">
        <p className="flex-[1_0_0] font-['Inter:Regular',sans-serif] font-normal leading-[6px] min-h-px min-w-px not-italic relative text-[#364146] text-[5px] tracking-[-0.07px]">Текст без отступов</p>
      </div>
    </div>
  );
}

function Container54() {
  return (
    <div className="content-stretch flex flex-col gap-[3px] h-[211px] items-start relative shrink-0 w-full" data-name="Container">
      <Container55 />
      <Paragraph45 />
    </div>
  );
}

function Lesson5Quiz3() {
  return (
    <div className="absolute bg-white content-stretch flex flex-col h-[231px] items-start left-0 overflow-clip pt-[10px] px-[10px] rounded-[14.99px] top-[2553px] w-[186px]" data-name="Lesson5Quiz7">
      <Container54 />
    </div>
  );
}

function Container61() {
  return (
    <div className="bg-[#f7f8fc] relative rounded-[2px] shrink-0 size-[15px]" data-name="Container">
      <div aria-hidden="true" className="absolute border border-[#d1d3db] border-solid inset-0 pointer-events-none rounded-[2px]" />
    </div>
  );
}

function Paragraph46() {
  return (
    <div className="h-[15px] relative shrink-0 w-[9.703px]" data-name="Paragraph">
      <div className="bg-clip-padding border-0 border-[transparent] border-solid relative size-full">
        <p className="absolute font-['Inter:Regular',sans-serif] font-normal leading-[15px] left-0 not-italic text-[#0a0a0a] text-[10px] top-[0.5px] tracking-[0.1172px] whitespace-nowrap">↔</p>
      </div>
    </div>
  );
}

function Container62() {
  return (
    <div className="bg-[#f7f8fc] relative rounded-[2px] shrink-0 size-[15px]" data-name="Container">
      <div aria-hidden="true" className="absolute border border-[#d1d3db] border-solid inset-0 pointer-events-none rounded-[2px]" />
    </div>
  );
}

function Paragraph47() {
  return (
    <div className="h-[15px] relative shrink-0 w-[9.703px]" data-name="Paragraph">
      <div className="bg-clip-padding border-0 border-[transparent] border-solid relative size-full">
        <p className="absolute font-['Inter:Regular',sans-serif] font-normal leading-[15px] left-0 not-italic text-[#0a0a0a] text-[10px] top-[0.5px] tracking-[0.1172px] whitespace-nowrap">↔</p>
      </div>
    </div>
  );
}

function Container63() {
  return (
    <div className="bg-[#f7f8fc] relative rounded-[2px] shrink-0 size-[15px]" data-name="Container">
      <div aria-hidden="true" className="absolute border border-[#d1d3db] border-solid inset-0 pointer-events-none rounded-[2px]" />
    </div>
  );
}

function Container60() {
  return (
    <div className="h-[15px] relative shrink-0 w-[166px]" data-name="Container">
      <div className="bg-clip-padding border-0 border-[transparent] border-solid content-stretch flex gap-[2px] items-start relative size-full">
        <Container61 />
        <Paragraph46 />
        <Container62 />
        <Paragraph47 />
        <Container63 />
      </div>
    </div>
  );
}

function Paragraph48() {
  return (
    <div className="h-[15px] relative shrink-0 w-[11px]" data-name="Paragraph">
      <div className="bg-clip-padding border-0 border-[transparent] border-solid relative size-full">
        <p className="absolute font-['Inter:Regular',sans-serif] font-normal leading-[15px] left-0 not-italic text-[#0a0a0a] text-[10px] top-[0.5px] tracking-[0.1172px] whitespace-nowrap">↕</p>
      </div>
    </div>
  );
}

function Container64() {
  return (
    <div className="h-[15px] relative shrink-0 w-[166px]" data-name="Container">
      <div className="bg-clip-padding border-0 border-[transparent] border-solid content-stretch flex items-start relative size-full">
        <Paragraph48 />
      </div>
    </div>
  );
}

function Container66() {
  return (
    <div className="bg-[#f7f8fc] relative rounded-[2px] shrink-0 size-[15px]" data-name="Container">
      <div aria-hidden="true" className="absolute border border-[#d1d3db] border-solid inset-0 pointer-events-none rounded-[2px]" />
    </div>
  );
}

function Container65() {
  return (
    <div className="h-[15px] relative shrink-0 w-[166px]" data-name="Container">
      <div className="bg-clip-padding border-0 border-[transparent] border-solid content-stretch flex items-start relative size-full">
        <Container66 />
      </div>
    </div>
  );
}

function Container59() {
  return (
    <div className="content-stretch flex flex-col gap-[4px] h-[211px] items-start justify-center py-[79px] relative shrink-0 w-full" data-name="Container">
      <Container60 />
      <Container64 />
      <Container65 />
    </div>
  );
}

function Lesson5Quiz4() {
  return (
    <div className="absolute bg-white content-stretch flex flex-col h-[231px] items-start left-0 overflow-clip pt-[10px] px-[10px] rounded-[14.99px] top-[2970px] w-[186px]" data-name="Lesson5Quiz8">
      <Container59 />
    </div>
  );
}

function Paragraph49() {
  return (
    <div className="h-[9px] relative shrink-0 w-full" data-name="Paragraph">
      <p className="absolute font-['Inter:Regular',sans-serif] font-normal leading-[9px] left-0 not-italic text-[6px] text-white top-[-0.5px] tracking-[-0.08px] whitespace-nowrap">OK</p>
    </div>
  );
}

function Container69() {
  return (
    <div className="bg-[#3b82f6] h-[17px] relative rounded-[4px] shrink-0 w-[20.32px]" data-name="Container">
      <div className="bg-clip-padding border-0 border-[transparent] border-solid content-stretch flex flex-col items-start pt-[4px] px-[6px] relative size-full">
        <Paragraph49 />
      </div>
    </div>
  );
}

function Paragraph50() {
  return (
    <div className="h-[9px] relative shrink-0 w-full" data-name="Paragraph">
      <p className="absolute font-['Inter:Regular',sans-serif] font-normal leading-[9px] left-0 not-italic text-[6px] text-white top-[-0.5px] tracking-[-0.08px] whitespace-nowrap">Yes</p>
    </div>
  );
}

function Container70() {
  return (
    <div className="bg-[#3b82f6] h-[17px] relative rounded-[4px] shrink-0 w-[21.922px]" data-name="Container">
      <div className="bg-clip-padding border-0 border-[transparent] border-solid content-stretch flex flex-col items-start pt-[4px] px-[6px] relative size-full">
        <Paragraph50 />
      </div>
    </div>
  );
}

function Paragraph51() {
  return (
    <div className="h-[9px] relative shrink-0 w-full" data-name="Paragraph">
      <p className="absolute font-['Inter:Regular',sans-serif] font-normal leading-[9px] left-0 not-italic text-[6px] text-white top-[-0.5px] tracking-[-0.08px] whitespace-nowrap">Go</p>
    </div>
  );
}

function Container71() {
  return (
    <div className="bg-[#3b82f6] h-[17px] relative rounded-[4px] shrink-0 w-[19.883px]" data-name="Container">
      <div className="bg-clip-padding border-0 border-[transparent] border-solid content-stretch flex flex-col items-start pt-[4px] px-[6px] relative size-full">
        <Paragraph51 />
      </div>
    </div>
  );
}

function Container68() {
  return (
    <div className="h-[17px] relative shrink-0 w-[166px]" data-name="Container">
      <div className="bg-clip-padding border-0 border-[transparent] border-solid content-stretch flex gap-[3px] items-start relative size-full">
        <Container69 />
        <Container70 />
        <Container71 />
      </div>
    </div>
  );
}

function Container67() {
  return (
    <div className="content-stretch flex flex-col h-[211px] items-start justify-center py-[97px] relative shrink-0 w-full" data-name="Container">
      <Container68 />
    </div>
  );
}

function Lesson5Quiz5() {
  return (
    <div className="absolute bg-white content-stretch flex flex-col h-[231px] items-start left-0 overflow-clip pt-[10px] px-[10px] rounded-[14.99px] top-[3387px] w-[186px]" data-name="Lesson5Quiz9">
      <Container67 />
    </div>
  );
}

function Paragraph52() {
  return (
    <div className="h-[7.5px] relative shrink-0 w-full" data-name="Paragraph">
      <p className="absolute font-['Inter:Regular',sans-serif] font-normal leading-[7.5px] left-0 not-italic text-[#364146] text-[5px] top-[-0.5px] tracking-[-0.07px] whitespace-nowrap">A</p>
    </div>
  );
}

function Container73() {
  return (
    <div className="bg-[#f7f8fc] h-[11.5px] relative rounded-[2px] shrink-0 w-[7.313px]" data-name="Container">
      <div className="bg-clip-padding border-0 border-[transparent] border-solid content-stretch flex flex-col items-start pt-[2px] px-[2px] relative size-full">
        <Paragraph52 />
      </div>
    </div>
  );
}

function Paragraph53() {
  return (
    <div className="h-[7.5px] relative shrink-0 w-full" data-name="Paragraph">
      <p className="absolute font-['Inter:Regular',sans-serif] font-normal leading-[7.5px] left-0 not-italic text-[#364146] text-[5px] top-[-0.5px] tracking-[-0.07px] whitespace-nowrap">B</p>
    </div>
  );
}

function Container74() {
  return (
    <div className="bg-[#f7f8fc] h-[11.5px] relative rounded-[2px] shrink-0 w-[7.188px]" data-name="Container">
      <div className="bg-clip-padding border-0 border-[transparent] border-solid content-stretch flex flex-col items-start pt-[2px] px-[2px] relative size-full">
        <Paragraph53 />
      </div>
    </div>
  );
}

function Container72() {
  return (
    <div className="content-stretch flex gap-[2px] h-[11.5px] items-start relative shrink-0" data-name="Container">
      <Container73 />
      <Container74 />
    </div>
  );
}

function Lesson5Quiz10Card() {
  return (
    <div className="absolute bg-[rgba(255,255,255,0)] content-stretch flex flex-col h-[80px] items-start justify-center left-0 pl-[8px] py-[29.5px] rounded-[8px] top-[3910px]" data-name="Lesson5Quiz10Card1">
      <Container72 />
    </div>
  );
}

function Paragraph54() {
  return (
    <div className="absolute h-[9px] left-0 top-0 w-[114px]" data-name="Paragraph">
      <p className="absolute font-['Inter:Regular',sans-serif] font-normal leading-[9px] left-0 not-italic text-[#f7f8fc] text-[6px] top-[-0.5px] tracking-[-0.08px] whitespace-nowrap">X</p>
    </div>
  );
}

function Paragraph55() {
  return (
    <div className="absolute h-[9px] left-[15px] top-[12px] w-[99px]" data-name="Paragraph">
      <p className="absolute font-['Inter:Regular',sans-serif] font-normal leading-[9px] left-0 not-italic text-[#f7f8fc] text-[6px] top-[-0.5px] tracking-[-0.08px] whitespace-nowrap">Y</p>
    </div>
  );
}

function Paragraph56() {
  return (
    <div className="absolute h-[9px] left-[8px] top-[24px] w-[106px]" data-name="Paragraph">
      <p className="absolute font-['Inter:Regular',sans-serif] font-normal leading-[9px] left-0 not-italic text-[#f7f8fc] text-[6px] top-[-0.5px] tracking-[-0.08px] whitespace-nowrap">Z</p>
    </div>
  );
}

function Container75() {
  return (
    <div className="h-[33px] relative shrink-0 w-[114px]" data-name="Container">
      <Paragraph54 />
      <Paragraph55 />
      <Paragraph56 />
    </div>
  );
}

function Lesson5Quiz10Card1() {
  return (
    <div className="absolute bg-[rgba(255,255,255,0)] content-stretch flex h-[80px] items-center justify-center left-[154px] px-[8px] rounded-[8px] top-[3910px] w-[130px]" data-name="Lesson5Quiz10Card2">
      <Container75 />
    </div>
  );
}

function Paragraph57() {
  return (
    <div className="h-[7.5px] relative shrink-0 w-full" data-name="Paragraph">
      <p className="absolute font-['Inter:Regular',sans-serif] font-normal leading-[7.5px] left-0 not-italic text-[5px] text-[rgba(255,255,255,0)] top-[-0.5px] tracking-[-0.07px] whitespace-nowrap">A</p>
    </div>
  );
}

function Container77() {
  return (
    <div className="bg-[#3b82f6] h-[13.5px] relative rounded-[3px] shrink-0 w-[11.313px]" data-name="Container">
      <div className="bg-clip-padding border-0 border-[transparent] border-solid content-stretch flex flex-col items-start pt-[3px] px-[4px] relative size-full">
        <Paragraph57 />
      </div>
    </div>
  );
}

function Paragraph58() {
  return (
    <div className="h-[7.5px] relative shrink-0 w-full" data-name="Paragraph">
      <p className="absolute font-['Inter:Regular',sans-serif] font-normal leading-[7.5px] left-0 not-italic text-[5px] text-[rgba(255,255,255,0)] top-[-0.5px] tracking-[-0.07px] whitespace-nowrap">B</p>
    </div>
  );
}

function Container78() {
  return (
    <div className="bg-[#8b5cf6] h-[13.5px] relative rounded-[3px] shrink-0 w-[11.188px]" data-name="Container">
      <div className="bg-clip-padding border-0 border-[transparent] border-solid content-stretch flex flex-col items-start pt-[3px] px-[4px] relative size-full">
        <Paragraph58 />
      </div>
    </div>
  );
}

function Paragraph59() {
  return (
    <div className="h-[7.5px] relative shrink-0 w-full" data-name="Paragraph">
      <p className="absolute font-['Inter:Regular',sans-serif] font-normal leading-[7.5px] left-0 not-italic text-[5px] text-[rgba(255,255,255,0)] top-[-0.5px] tracking-[-0.07px] whitespace-nowrap">C</p>
    </div>
  );
}

function Container79() {
  return (
    <div className="bg-[#22c55e] flex-[1_0_0] h-[13.5px] min-h-px min-w-px relative rounded-[3px]" data-name="Container">
      <div className="bg-clip-padding border-0 border-[transparent] border-solid content-stretch flex flex-col items-start pt-[3px] px-[4px] relative size-full">
        <Paragraph59 />
      </div>
    </div>
  );
}

function Container76() {
  return (
    <div className="content-stretch flex gap-[2px] h-[13.5px] items-start relative shrink-0 w-[38.07px]" data-name="Container">
      <Container77 />
      <Container78 />
      <Container79 />
    </div>
  );
}

function Lesson5Quiz10Card2() {
  return (
    <div className="absolute bg-[rgba(255,255,255,0)] content-stretch flex h-[80px] items-center justify-center left-[308px] pl-[45.961px] pr-[45.969px] rounded-[8px] top-[3910px] w-[130px]" data-name="Lesson5Quiz10Card3">
      <Container76 />
    </div>
  );
}

function Paragraph60() {
  return (
    <div className="absolute h-[15px] left-0 top-[4014px] w-[587px]" data-name="Paragraph">
      <p className="absolute font-['Inter:Regular',sans-serif] font-normal leading-[15px] left-0 not-italic text-[#364146] text-[10px] top-[0.5px] tracking-[-0.13px] whitespace-nowrap">• Трудно воспринимать</p>
    </div>
  );
}

function Paragraph61() {
  return (
    <div className="absolute h-[15px] left-0 top-[4037px] w-[587px]" data-name="Paragraph">
      <p className="absolute font-['Inter:Regular',sans-serif] font-normal leading-[15px] left-0 not-italic text-[#364146] text-[10px] top-[0.5px] tracking-[-0.13px] whitespace-nowrap">• Пользователь теряется</p>
    </div>
  );
}

function Paragraph62() {
  return (
    <div className="absolute h-[15px] left-0 top-[4060px] w-[587px]" data-name="Paragraph">
      <p className="absolute font-['Inter:Regular',sans-serif] font-normal leading-[15px] left-0 not-italic text-[#364146] text-[10px] top-[0.5px] tracking-[-0.13px] whitespace-nowrap">• Пользователь не понимает, что делать</p>
    </div>
  );
}

function Container81() {
  return (
    <div className="bg-[#f7f8fc] relative rounded-[2px] shrink-0 size-[10px]" data-name="Container">
      <div aria-hidden="true" className="absolute border border-[#d1d3db] border-solid inset-0 pointer-events-none rounded-[2px]" />
    </div>
  );
}

function Paragraph63() {
  return (
    <div className="h-[12px] relative shrink-0 w-[7.453px]" data-name="Paragraph">
      <div className="bg-clip-padding border-0 border-[transparent] border-solid relative size-full">
        <p className="absolute font-['Inter:Regular',sans-serif] font-normal leading-[12px] left-0 not-italic text-[#f7f8fc] text-[8px] top-[0.5px] tracking-[0.2057px] whitespace-nowrap">→</p>
      </div>
    </div>
  );
}

function Container82() {
  return (
    <div className="bg-[#f7f8fc] relative rounded-[2px] shrink-0 size-[10px]" data-name="Container">
      <div aria-hidden="true" className="absolute border border-[#d1d3db] border-solid inset-0 pointer-events-none rounded-[2px]" />
    </div>
  );
}

function Paragraph64() {
  return (
    <div className="h-[12px] relative shrink-0 w-[7.453px]" data-name="Paragraph">
      <div className="bg-clip-padding border-0 border-[transparent] border-solid relative size-full">
        <p className="absolute font-['Inter:Regular',sans-serif] font-normal leading-[12px] left-0 not-italic text-[#f7f8fc] text-[8px] top-[0.5px] tracking-[0.2057px] whitespace-nowrap">→</p>
      </div>
    </div>
  );
}

function Container80() {
  return (
    <div className="content-stretch flex gap-[2px] h-[12px] items-start relative shrink-0 w-[114px]" data-name="Container">
      <Container81 />
      <Paragraph63 />
      <Container82 />
      <Paragraph64 />
    </div>
  );
}

function Paragraph65() {
  return (
    <div className="h-[7.5px] relative shrink-0 w-[114px]" data-name="Paragraph">
      <p className="absolute font-['Inter:Regular',sans-serif] font-normal leading-[7.5px] left-0 not-italic text-[#8e9199] text-[5px] top-[-0.5px] tracking-[-0.07px] whitespace-nowrap">Много шагов</p>
    </div>
  );
}

function Lesson5Quiz11Card() {
  return (
    <div className="absolute bg-[rgba(255,255,255,0)] content-stretch flex flex-col gap-[2px] h-[80px] items-start justify-center left-0 pl-[8px] py-[29.25px] rounded-[8px] top-[4161px] w-[130px]" data-name="Lesson5Quiz11Card1">
      <Container80 />
      <Paragraph65 />
    </div>
  );
}

function Paragraph66() {
  return (
    <div className="h-[9px] relative shrink-0 w-[2.969px]" data-name="Paragraph">
      <div className="bg-clip-padding border-0 border-[transparent] border-solid relative size-full">
        <p className="absolute font-['Inter:Regular',sans-serif] font-normal leading-[9px] left-0 not-italic text-[#8e9199] text-[6px] top-[-0.5px] tracking-[-0.08px] whitespace-nowrap">?</p>
      </div>
    </div>
  );
}

function Container83() {
  return (
    <div className="bg-[#f7f8fc] content-stretch flex items-center justify-center px-[23.516px] py-px relative rounded-[4px] shrink-0 size-[50px]" data-name="Container">
      <div aria-hidden="true" className="absolute border border-[#d1d3db] border-solid inset-0 pointer-events-none rounded-[4px]" />
      <Paragraph66 />
    </div>
  );
}

function Lesson5Quiz11Card1() {
  return (
    <div className="absolute bg-[rgba(255,255,255,0)] content-stretch flex h-[80px] items-center justify-center left-[154px] px-[40px] rounded-[8px] top-[4161px] w-[130px]" data-name="Lesson5Quiz11Card2">
      <Container83 />
    </div>
  );
}

function Paragraph67() {
  return (
    <div className="h-[7.5px] relative shrink-0 w-full" data-name="Paragraph">
      <p className="absolute font-['Inter:Regular',sans-serif] font-normal leading-[7.5px] left-0 not-italic text-[#364146] text-[5px] top-[-0.5px] tracking-[-0.07px] whitespace-nowrap">A</p>
    </div>
  );
}

function Container85() {
  return (
    <div className="bg-[#f7f8fc] h-[11.5px] relative rounded-[2px] shrink-0 w-[7.313px]" data-name="Container">
      <div className="bg-clip-padding border-0 border-[transparent] border-solid content-stretch flex flex-col items-start pt-[2px] px-[2px] relative size-full">
        <Paragraph67 />
      </div>
    </div>
  );
}

function Paragraph68() {
  return (
    <div className="h-[7.5px] relative shrink-0 w-full" data-name="Paragraph">
      <p className="absolute font-['Inter:Regular',sans-serif] font-normal leading-[7.5px] left-0 not-italic text-[#364146] text-[5px] top-[-0.5px] tracking-[-0.07px] whitespace-nowrap">B</p>
    </div>
  );
}

function Container86() {
  return (
    <div className="bg-[#f7f8fc] h-[11.5px] relative rounded-[2px] shrink-0 w-[7.188px]" data-name="Container">
      <div className="bg-clip-padding border-0 border-[transparent] border-solid content-stretch flex flex-col items-start pt-[2px] px-[2px] relative size-full">
        <Paragraph68 />
      </div>
    </div>
  );
}

function Container84() {
  return (
    <div className="content-stretch flex gap-[2px] h-[11.5px] items-start relative shrink-0 w-[114px]" data-name="Container">
      <Container85 />
      <Container86 />
    </div>
  );
}

function Paragraph69() {
  return (
    <div className="h-[7.5px] relative shrink-0 w-[114px]" data-name="Paragraph">
      <p className="absolute font-['Inter:Regular',sans-serif] font-normal leading-[7.5px] left-0 not-italic text-[#8e9199] text-[5px] top-[-0.5px] tracking-[-0.07px] whitespace-nowrap">Элементы</p>
    </div>
  );
}

function Lesson5Quiz11Card2() {
  return (
    <div className="absolute bg-[rgba(255,255,255,0)] content-stretch flex flex-col gap-[2px] h-[80px] items-start justify-center left-[308px] pl-[8px] py-[29.5px] rounded-[8px] top-[4161px] w-[130px]" data-name="Lesson5Quiz11Card3">
      <Container84 />
      <Paragraph69 />
    </div>
  );
}

function Paragraph70() {
  return (
    <div className="absolute h-[15px] left-0 top-[4265px] w-[530px]" data-name="Paragraph">
      <p className="absolute font-['Inter:Regular',sans-serif] font-normal leading-[15px] left-0 not-italic text-[#364146] text-[10px] top-[0.5px] tracking-[-0.13px] whitespace-nowrap">• Слишком много действий</p>
    </div>
  );
}

function Paragraph71() {
  return (
    <div className="absolute h-[15px] left-0 top-[4288px] w-[530px]" data-name="Paragraph">
      <p className="absolute font-['Inter:Regular',sans-serif] font-normal leading-[15px] left-0 not-italic text-[#364146] text-[10px] top-[0.5px] tracking-[-0.13px] whitespace-nowrap">• Отсутствие структуры</p>
    </div>
  );
}

function Paragraph72() {
  return (
    <div className="absolute h-[15px] left-0 top-[4311px] w-[530px]" data-name="Paragraph">
      <p className="absolute font-['Inter:Regular',sans-serif] font-normal leading-[15px] left-0 not-italic text-[#364146] text-[10px] top-[0.5px] tracking-[-0.13px] whitespace-nowrap">• Перегруженность интерфейса</p>
    </div>
  );
}

function Paragraph73() {
  return (
    <div className="h-[7.5px] relative shrink-0 w-full" data-name="Paragraph">
      <p className="absolute font-['Inter:Regular',sans-serif] font-normal leading-[7.5px] left-0 not-italic text-[#364146] text-[5px] top-[-0.5px] tracking-[-0.07px] whitespace-nowrap">1</p>
    </div>
  );
}

function Container88() {
  return (
    <div className="bg-[#f7f8fc] h-[11.5px] relative rounded-[2px] shrink-0 w-[6.258px]" data-name="Container">
      <div className="bg-clip-padding border-0 border-[transparent] border-solid content-stretch flex flex-col items-start pt-[2px] px-[2px] relative size-full">
        <Paragraph73 />
      </div>
    </div>
  );
}

function Paragraph74() {
  return (
    <div className="h-[7.5px] relative shrink-0 w-full" data-name="Paragraph">
      <p className="absolute font-['Inter:Regular',sans-serif] font-normal leading-[7.5px] left-0 not-italic text-[#364146] text-[5px] top-[-0.5px] tracking-[-0.07px] whitespace-nowrap">2</p>
    </div>
  );
}

function Container89() {
  return (
    <div className="bg-[#f7f8fc] h-[11.5px] relative rounded-[2px] shrink-0 w-[6.961px]" data-name="Container">
      <div className="bg-clip-padding border-0 border-[transparent] border-solid content-stretch flex flex-col items-start pt-[2px] px-[2px] relative size-full">
        <Paragraph74 />
      </div>
    </div>
  );
}

function Container87() {
  return (
    <div className="content-stretch flex gap-[2px] h-[11.5px] items-start relative shrink-0 w-[114px]" data-name="Container">
      <Container88 />
      <Container89 />
    </div>
  );
}

function Paragraph75() {
  return (
    <div className="h-[7.5px] relative shrink-0 w-[114px]" data-name="Paragraph">
      <p className="absolute font-['Inter:Regular',sans-serif] font-normal leading-[7.5px] left-0 not-italic text-[#8e9199] text-[5px] top-[-0.5px] tracking-[-0.07px] whitespace-nowrap">Много</p>
    </div>
  );
}

function Lesson5Quiz12Card() {
  return (
    <div className="absolute bg-[rgba(255,255,255,0)] content-stretch flex flex-col gap-[2px] h-[80px] items-start justify-center left-0 pl-[8px] py-[29.5px] rounded-[8px] top-[4412px] w-[130px]" data-name="Lesson5Quiz12Card1">
      <Container87 />
      <Paragraph75 />
    </div>
  );
}

function Paragraph76() {
  return (
    <div className="h-[7.5px] relative shrink-0 w-full" data-name="Paragraph">
      <p className="absolute font-['Inter:Regular',sans-serif] font-normal leading-[7.5px] left-0 not-italic text-[5px] text-[rgba(255,255,255,0)] top-[-0.5px] tracking-[-0.07px] whitespace-nowrap">A</p>
    </div>
  );
}

function Container91() {
  return (
    <div className="bg-[#3b82f6] flex-[1_0_0] h-[13.5px] min-h-px min-w-px relative rounded-[3px]" data-name="Container">
      <div className="bg-clip-padding border-0 border-[transparent] border-solid content-stretch flex flex-col items-start pt-[3px] px-[4px] relative size-full">
        <Paragraph76 />
      </div>
    </div>
  );
}

function Paragraph77() {
  return (
    <div className="h-[7.5px] relative shrink-0 w-full" data-name="Paragraph">
      <p className="absolute font-['Inter:Regular',sans-serif] font-normal leading-[7.5px] left-0 not-italic text-[5px] text-[rgba(255,255,255,0)] top-[-0.5px] tracking-[-0.07px] whitespace-nowrap">B</p>
    </div>
  );
}

function Container92() {
  return (
    <div className="bg-[#8b5cf6] h-[13.5px] relative rounded-[3px] shrink-0 w-[11.188px]" data-name="Container">
      <div className="bg-clip-padding border-0 border-[transparent] border-solid content-stretch flex flex-col items-start pt-[3px] px-[4px] relative size-full">
        <Paragraph77 />
      </div>
    </div>
  );
}

function Container90() {
  return (
    <div className="content-stretch flex gap-[2px] h-[13.5px] items-start relative shrink-0 w-[24.5px]" data-name="Container">
      <Container91 />
      <Container92 />
    </div>
  );
}

function Lesson5Quiz12Card1() {
  return (
    <div className="absolute bg-[rgba(255,255,255,0)] content-stretch flex h-[80px] items-center justify-center left-[154px] px-[52.75px] rounded-[8px] top-[4412px] w-[130px]" data-name="Lesson5Quiz12Card2">
      <Container90 />
    </div>
  );
}

function Container94() {
  return (
    <div className="bg-[#f7f8fc] relative rounded-[2px] shrink-0 size-[12px]" data-name="Container">
      <div aria-hidden="true" className="absolute border border-[#d1d3db] border-solid inset-0 pointer-events-none rounded-[2px]" />
    </div>
  );
}

function Paragraph78() {
  return (
    <div className="h-[12px] relative shrink-0 w-[7.453px]" data-name="Paragraph">
      <div className="bg-clip-padding border-0 border-[transparent] border-solid relative size-full">
        <p className="absolute font-['Inter:Regular',sans-serif] font-normal leading-[12px] left-0 not-italic text-[#f7f8fc] text-[8px] top-[0.5px] tracking-[0.2057px] whitespace-nowrap">→</p>
      </div>
    </div>
  );
}

function Container95() {
  return (
    <div className="bg-[#f7f8fc] flex-[1_0_0] h-[12px] min-h-px min-w-px relative rounded-[2px]" data-name="Container">
      <div aria-hidden="true" className="absolute border border-[#d1d3db] border-solid inset-0 pointer-events-none rounded-[2px]" />
    </div>
  );
}

function Container93() {
  return (
    <div className="content-stretch flex gap-[2px] h-[12px] items-start relative shrink-0 w-[35.453px]" data-name="Container">
      <Container94 />
      <Paragraph78 />
      <Container95 />
    </div>
  );
}

function Lesson5Quiz12Card2() {
  return (
    <div className="absolute bg-[rgba(255,255,255,0)] content-stretch flex h-[80px] items-center justify-center left-[308px] px-[47.273px] rounded-[8px] top-[4412px] w-[130px]" data-name="Lesson5Quiz12Card3">
      <Container93 />
    </div>
  );
}

function Paragraph79() {
  return (
    <div className="absolute h-[15px] left-0 top-[4516px] w-[587px]" data-name="Paragraph">
      <p className="absolute font-['Inter:Regular',sans-serif] font-normal leading-[15px] left-0 not-italic text-[#364146] text-[10px] top-[0.5px] tracking-[-0.13px] whitespace-nowrap">• Упростить интерфейс</p>
    </div>
  );
}

function Paragraph80() {
  return (
    <div className="absolute h-[15px] left-0 top-[4539px] w-[587px]" data-name="Paragraph">
      <p className="absolute font-['Inter:Regular',sans-serif] font-normal leading-[15px] left-0 not-italic text-[#364146] text-[10px] top-[0.5px] tracking-[-0.13px] whitespace-nowrap">• Добавить понятные подписи</p>
    </div>
  );
}

function Paragraph81() {
  return (
    <div className="absolute h-[15px] left-0 top-[4562px] w-[587px]" data-name="Paragraph">
      <p className="absolute font-['Inter:Regular',sans-serif] font-normal leading-[15px] left-0 not-italic text-[#364146] text-[10px] top-[0.5px] tracking-[-0.13px] whitespace-nowrap">• Сократить шаги</p>
    </div>
  );
}

// ─────────────────────────────────────────────────────────────────────────────
// Named exports for LessonQuizPage (quiz_ux_errors visuals)
// ─────────────────────────────────────────────────────────────────────────────
export function CQErrCompare1A() {
  return <div style={{ position: "relative", width: 207, height: 231 }}><Lesson5Quiz1VariantA /></div>;
}
export function CQErrCompare1B() {
  return <div style={{ position: "relative", width: 207, height: 231 }}><Lesson5Quiz1VariantB /></div>;
}
export function CQErrCompare2A() {
  return <div style={{ position: "relative", width: 207, height: 231 }}><Lesson5Quiz2VariantA /></div>;
}
export function CQErrCompare2B() {
  return <div style={{ position: "relative", width: 207, height: 231 }}><Lesson5Quiz2VariantB /></div>;
}
export function CQErrCompare3A() {
  return <div style={{ position: "relative", width: 207, height: 231 }}><Lesson5Quiz3VariantA /></div>;
}
export function CQErrCompare3B() {
  return <div style={{ position: "relative", width: 207, height: 231 }}><Lesson5Quiz3VariantB /></div>;
}
export function CQErrSingle1() {
  return <div style={{ position: "relative", background: "white", height: 231, width: 186, overflow: "hidden", paddingTop: 10, paddingLeft: 10, paddingRight: 10, borderRadius: 15 }}><Container26 /></div>;
}
export function CQErrSingle2() {
  return <div style={{ position: "relative", background: "white", height: 231, width: 186, overflow: "hidden", paddingTop: 10, paddingLeft: 10, paddingRight: 10, borderRadius: 15 }}><Container34 /></div>;
}
export function CQErrSingle3() {
  return <div style={{ position: "relative", background: "white", height: 231, width: 186, overflow: "hidden", paddingTop: 10, paddingLeft: 10, paddingRight: 10, borderRadius: 15 }}><Container46 /></div>;
}
export function CQErrMulti1() {
  return <div style={{ position: "relative", background: "white", height: 231, width: 186, overflow: "hidden", paddingTop: 10, paddingLeft: 10, paddingRight: 10, borderRadius: 15 }}><Container54 /></div>;
}
export function CQErrMulti2() {
  return <div style={{ position: "relative", background: "white", height: 231, width: 186, overflow: "hidden", paddingTop: 10, paddingLeft: 10, paddingRight: 10, borderRadius: 15 }}><Container59 /></div>;
}
export function CQErrMulti3() {
  return <div style={{ position: "relative", background: "white", height: 231, width: 186, overflow: "hidden", paddingTop: 10, paddingLeft: 10, paddingRight: 10, borderRadius: 15 }}><Container67 /></div>;
}
export function CQErrConn1A() { return <Lesson5Quiz10Card />; }
export function CQErrConn1B() { return <Lesson5Quiz10Card1 />; }
export function CQErrConn1C() { return <Lesson5Quiz10Card2 />; }
export function CQErrConn2A() { return <Lesson5Quiz11Card />; }
export function CQErrConn2B() { return <Lesson5Quiz11Card1 />; }
export function CQErrConn2C() { return <Lesson5Quiz11Card2 />; }
export function CQErrConn3A() { return <Lesson5Quiz12Card />; }
export function CQErrConn3B() { return <Lesson5Quiz12Card1 />; }
export function CQErrConn3C() { return <Lesson5Quiz12Card2 />; }

export default function Ux() {
  return (
    <div className="relative size-full" data-name="Ошибки UX">
      <p className="absolute font-['Inter:Regular',sans-serif] font-normal leading-[17px] left-0 not-italic text-[#8e9199] text-[13px] top-[-0.5px] tracking-[-0.16px] whitespace-nowrap">Распространенные проблемы интерфейсов</p>
      <p className="absolute font-['Inter:Regular',sans-serif] font-normal leading-[27px] left-0 not-italic text-[#101828] text-[18px] top-[80.5px] tracking-[-0.4395px] whitespace-nowrap">Compare UI</p>
      <p className="absolute font-['Inter:Regular',sans-serif] font-normal leading-[15px] left-0 not-italic text-[#8e9199] text-[12px] top-[115px] tracking-[-0.15px] w-[1280px]">Сравните два варианта интерфейса</p>
      <p className="absolute font-['Inter:Regular',sans-serif] font-normal leading-[14px] left-0 not-italic text-[#8e9199] text-[11px] top-[170.5px] tracking-[-0.14px] whitespace-nowrap">1. Где интерфейс сделан без ошибок?</p>
      <Container />
      <Container7 />
      <p className="absolute font-['Inter:Regular',sans-serif] font-normal leading-[14px] left-0 not-italic text-[#8e9199] text-[11px] top-[487.5px] tracking-[-0.14px] whitespace-nowrap">2. Где пользователь быстрее понимает интерфейс?</p>
      <Container10 />
      <Container14 />
      <p className="absolute font-['Inter:Regular',sans-serif] font-normal leading-[14px] left-0 not-italic text-[#8e9199] text-[11px] top-[804.5px] tracking-[-0.14px] whitespace-nowrap">3. Где меньше UX ошибок?</p>
      <Container18 />
      <Container22 />
      <p className="absolute font-['Inter:Regular',sans-serif] font-normal leading-[27px] left-0 not-italic text-[#101828] text-[18px] top-[1137.5px] tracking-[-0.4395px] whitespace-nowrap">Single Choice</p>
      <p className="absolute font-['Inter:Regular',sans-serif] font-normal leading-[15px] left-0 not-italic text-[#8e9199] text-[12px] top-[1172px] tracking-[-0.15px] w-[1280px]">Выберите один правильный ответ</p>
      <p className="absolute font-['Inter:Regular',sans-serif] font-normal leading-[14px] left-0 not-italic text-[#8e9199] text-[11px] top-[1227.5px] tracking-[-0.14px] whitespace-nowrap">4. Что является UX ошибкой?</p>
      <Lesson5Quiz />
      <p className="absolute font-['Inter:Regular',sans-serif] font-normal leading-[14px] left-0 not-italic text-[#8e9199] text-[11px] top-[1621.5px] tracking-[-0.14px] whitespace-nowrap">5. Что усложняет использование интерфейса?</p>
      <Lesson5Quiz1 />
      <p className="absolute font-['Inter:Regular',sans-serif] font-normal leading-[14px] left-0 not-italic text-[#8e9199] text-[11px] top-[2015.5px] tracking-[-0.14px] whitespace-nowrap">6. Что делает интерфейс неудобным?</p>
      <Lesson5Quiz2 />
      <p className="absolute font-['Inter:Regular',sans-serif] font-normal leading-[27px] left-0 not-italic text-[#101828] text-[18px] top-[2425.5px] tracking-[-0.4395px] whitespace-nowrap">Multi Choice</p>
      <p className="absolute font-['Inter:Regular',sans-serif] font-normal leading-[15px] left-0 not-italic text-[#8e9199] text-[12px] top-[2460px] tracking-[-0.15px] w-[1280px]">Выберите несколько правильных ответов</p>
      <p className="absolute font-['Inter:Regular',sans-serif] font-normal leading-[14px] left-0 not-italic text-[#8e9199] text-[11px] top-[2515.5px] tracking-[-0.14px] whitespace-nowrap">7. Что является UX ошибками?</p>
      <Lesson5Quiz3 />
      <p className="absolute font-['Inter:Regular',sans-serif] font-normal leading-[14px] left-0 not-italic text-[#8e9199] text-[11px] top-[2932.5px] tracking-[-0.14px] whitespace-nowrap">8. Что ухудшает пользовательский опыт?</p>
      <Lesson5Quiz4 />
      <p className="absolute font-['Inter:Regular',sans-serif] font-normal leading-[14px] left-0 not-italic text-[#8e9199] text-[11px] top-[3349.5px] tracking-[-0.14px] whitespace-nowrap">9. Что делает интерфейс сложным?</p>
      <Lesson5Quiz5 />
      <p className="absolute font-['Inter:Regular',sans-serif] font-normal leading-[27px] left-0 not-italic text-[#101828] text-[18px] top-[3782.5px] tracking-[-0.4395px] whitespace-nowrap">Match / Connect</p>
      <p className="absolute font-['Inter:Regular',sans-serif] font-normal leading-[15px] left-0 not-italic text-[#8e9199] text-[12px] top-[3817px] tracking-[-0.15px] w-[1280px]">Соедините элементы с описаниями</p>
      <p className="absolute font-['Inter:Regular',sans-serif] font-normal leading-[14px] left-0 not-italic text-[#8e9199] text-[11px] top-[3872.5px] tracking-[-0.14px] whitespace-nowrap">10. Соедините ошибку и результат</p>
      <Lesson5Quiz10Card />
      <Lesson5Quiz10Card1 />
      <Lesson5Quiz10Card2 />
      <Paragraph60 />
      <Paragraph61 />
      <Paragraph62 />
      <p className="absolute font-['Inter:Regular',sans-serif] font-normal leading-[14px] left-0 not-italic text-[#8e9199] text-[11px] top-[4123.5px] tracking-[-0.14px] whitespace-nowrap">11. Соедините проблему и причину</p>
      <Lesson5Quiz11Card />
      <Lesson5Quiz11Card1 />
      <Lesson5Quiz11Card2 />
      <Paragraph70 />
      <Paragraph71 />
      <Paragraph72 />
      <p className="absolute font-['Inter:Regular',sans-serif] font-normal leading-[14px] left-0 not-italic text-[#8e9199] text-[11px] top-[4374.5px] tracking-[-0.14px] whitespace-nowrap">12. Соедините проблему и решение</p>
      <Lesson5Quiz12Card />
      <Lesson5Quiz12Card1 />
      <Lesson5Quiz12Card2 />
      <Paragraph79 />
      <Paragraph80 />
      <Paragraph81 />
    </div>
  );
}