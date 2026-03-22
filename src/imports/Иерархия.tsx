import React from "react";

function Paragraph() {
  return (
    <div className="absolute h-[21px] left-0 top-[139px] w-[9.297px]" data-name="Paragraph">
      <p className="absolute font-['Inter:Regular',sans-serif] font-normal leading-[21px] left-0 not-italic text-[#364146] text-[14px] top-0 tracking-[-0.17px] whitespace-nowrap">A</p>
    </div>
  );
}

function Paragraph1() {
  return (
    <div className="h-[10px] relative shrink-0 w-[166px]" data-name="Paragraph">
      <div className="bg-clip-padding border-0 border-[transparent] border-solid content-stretch flex items-start relative size-full">
        <p className="flex-[1_0_0] font-['Inter:Regular',sans-serif] font-normal leading-[10px] min-h-px min-w-px not-italic relative text-[#101828] text-[8px] tracking-[-0.1px]">Статья о дизайне интерфейсов</p>
      </div>
    </div>
  );
}

function Paragraph2() {
  return (
    <div className="h-[40px] relative shrink-0 w-[166px]" data-name="Paragraph">
      <div className="bg-clip-padding border-0 border-[transparent] border-solid relative size-full">
        <p className="absolute font-['Inter:Regular',sans-serif] font-normal leading-[10px] left-0 not-italic text-[#364146] text-[8px] top-0 tracking-[-0.1px] w-[163px]">Хороший дизайн помогает пользователям достигать своих целей быстро и эффективно. Важно создавать понятную структуру.</p>
      </div>
    </div>
  );
}

function Paragraph3() {
  return (
    <div className="h-[30px] relative shrink-0 w-[166px]" data-name="Paragraph">
      <div className="bg-clip-padding border-0 border-[transparent] border-solid relative size-full">
        <p className="absolute font-['Inter:Regular',sans-serif] font-normal leading-[10px] left-0 not-italic text-[#364146] text-[8px] top-0 tracking-[-0.1px] w-[158px]">Визуальная иерархия направляет взгляд пользователя по важным элементам интерфейса.</p>
      </div>
    </div>
  );
}

function Paragraph4() {
  return (
    <div className="h-[9px] relative shrink-0 w-[166px]" data-name="Paragraph">
      <div className="bg-clip-padding border-0 border-[transparent] border-solid relative size-full">
        <p className="absolute font-['Inter:Regular',sans-serif] font-normal leading-[9px] left-0 not-italic text-[#ef4444] text-[6px] top-[-0.5px] tracking-[-0.08px] whitespace-nowrap">⚠ Плохо читается</p>
      </div>
    </div>
  );
}

function Container() {
  return (
    <div className="content-stretch flex flex-col gap-[6px] h-[211px] items-start justify-center py-[52px] relative shrink-0 w-full" data-name="Container">
      <Paragraph1 />
      <Paragraph2 />
      <Paragraph3 />
      <Paragraph4 />
    </div>
  );
}

function HierarchyQuiz1VariantA() {
  return (
    <div className="absolute bg-white content-stretch flex flex-col h-[231px] items-start left-0 overflow-clip pt-[10px] px-[10px] rounded-[14.99px] top-[131px] w-[186px]" data-name="HierarchyQuiz1VariantA">
      <Container />
    </div>
  );
}

function Paragraph5() {
  return (
    <div className="absolute h-[21px] left-[247.3px] top-[139px] w-[8.945px]" data-name="Paragraph">
      <p className="absolute font-['Inter:Regular',sans-serif] font-normal leading-[21px] left-0 not-italic text-[#22c55e] text-[14px] top-0 tracking-[-0.17px] whitespace-nowrap">B</p>
    </div>
  );
}

function Paragraph6() {
  return (
    <div className="absolute content-stretch flex h-[13px] items-start left-0 top-[71.5px] w-[166px]" data-name="Paragraph">
      <p className="flex-[1_0_0] font-['Inter:Regular',sans-serif] font-normal leading-[13px] min-h-px min-w-px not-italic relative text-[#101828] text-[11px] tracking-[-0.14px]">Дизайн интерфейсов</p>
    </div>
  );
}

function Paragraph7() {
  return (
    <div className="absolute h-[18px] left-0 top-[92.5px] w-[166px]" data-name="Paragraph">
      <p className="absolute font-['Inter:Regular',sans-serif] font-normal leading-[9px] left-0 not-italic text-[#364146] text-[7px] top-0 tracking-[-0.09px] w-[155px]">Хороший дизайн помогает пользователям достигать своих целей быстро и эффективно.</p>
    </div>
  );
}

function Paragraph8() {
  return (
    <div className="absolute content-stretch flex h-[8px] items-start left-0 top-[116.5px] w-[166px]" data-name="Paragraph">
      <p className="font-['Inter:Regular',sans-serif] font-normal leading-[8px] not-italic relative shrink-0 text-[#8e9199] text-[6px] tracking-[-0.08px] whitespace-nowrap">Визуальная иерархия направляет взгляд пользователя.</p>
    </div>
  );
}

function Paragraph9() {
  return (
    <div className="absolute h-[9px] left-0 top-[130.5px] w-[166px]" data-name="Paragraph">
      <p className="absolute font-['Inter:Regular',sans-serif] font-normal leading-[9px] left-0 not-italic text-[#22c55e] text-[6px] top-[-0.5px] tracking-[-0.08px] whitespace-nowrap">✓ Структура понятна</p>
    </div>
  );
}

function Container1() {
  return (
    <div className="h-[211px] relative shrink-0 w-full" data-name="Container">
      <Paragraph6 />
      <Paragraph7 />
      <Paragraph8 />
      <Paragraph9 />
    </div>
  );
}

function HierarchyQuiz1VariantB() {
  return (
    <div className="absolute bg-white content-stretch flex flex-col h-[231px] items-start left-[268.24px] overflow-clip pt-[10px] px-[10px] rounded-[14.99px] top-[131px] w-[186px]" data-name="HierarchyQuiz1VariantB">
      <Container1 />
    </div>
  );
}

function Paragraph10() {
  return (
    <div className="absolute h-[21px] left-0 top-[444px] w-[9.297px]" data-name="Paragraph">
      <p className="absolute font-['Inter:Regular',sans-serif] font-normal leading-[21px] left-0 not-italic text-[#364146] text-[14px] top-0 tracking-[-0.17px] whitespace-nowrap">A</p>
    </div>
  );
}

function Paragraph11() {
  return (
    <div className="absolute h-[13.5px] left-0 top-[68.25px] w-[166px]" data-name="Paragraph">
      <p className="absolute font-['Inter:Regular',sans-serif] font-normal leading-[13.5px] left-0 not-italic text-[#101828] text-[9px] top-[0.5px] tracking-[-0.12px] whitespace-nowrap">Интерфейс приложения</p>
    </div>
  );
}

function Paragraph12() {
  return (
    <div className="h-[18px] relative shrink-0 w-full" data-name="Paragraph">
      <p className="absolute font-['Inter:Regular',sans-serif] font-normal leading-[9px] left-0 not-italic text-[#364146] text-[7px] top-0 tracking-[-0.09px] w-[121px]">Описание функций и возможностей приложения для пользователей</p>
    </div>
  );
}

function Container3() {
  return (
    <div className="absolute bg-[#f7f8fc] content-stretch flex flex-col h-[34px] items-start left-0 pt-[8px] px-[8px] rounded-[8px] top-[91.75px] w-[166px]" data-name="Container">
      <Paragraph12 />
    </div>
  );
}

function Paragraph13() {
  return (
    <div className="absolute h-[9px] left-0 top-[133.75px] w-[166px]" data-name="Paragraph">
      <p className="absolute font-['Inter:Regular',sans-serif] font-normal leading-[9px] left-0 not-italic text-[#ef4444] text-[6px] top-[-0.5px] tracking-[-0.08px] whitespace-nowrap">⚠ Не выделяется</p>
    </div>
  );
}

function Container2() {
  return (
    <div className="h-[211px] relative shrink-0 w-full" data-name="Container">
      <Paragraph11 />
      <Container3 />
      <Paragraph13 />
    </div>
  );
}

function HierarchyQuiz2VariantA() {
  return (
    <div className="absolute bg-white content-stretch flex flex-col h-[231px] items-start left-0 overflow-clip pt-[10px] px-[10px] rounded-[14.99px] top-[436px] w-[186px]" data-name="HierarchyQuiz2VariantA">
      <Container2 />
    </div>
  );
}

function Paragraph14() {
  return (
    <div className="absolute h-[21px] left-[247.3px] top-[444px] w-[8.945px]" data-name="Paragraph">
      <p className="absolute font-['Inter:Regular',sans-serif] font-normal leading-[21px] left-0 not-italic text-[#22c55e] text-[14px] top-0 tracking-[-0.17px] whitespace-nowrap">B</p>
    </div>
  );
}

function Paragraph15() {
  return (
    <div className="absolute h-[15px] left-0 top-[67.5px] w-[166px]" data-name="Paragraph">
      <p className="absolute font-['Inter:Regular',sans-serif] font-normal leading-[15px] left-0 not-italic text-[#101828] text-[13px] top-[0.5px] tracking-[-0.16px] whitespace-nowrap">Интерфейс приложения</p>
    </div>
  );
}

function Paragraph16() {
  return (
    <div className="h-[18px] relative shrink-0 w-full" data-name="Paragraph">
      <p className="absolute font-['Inter:Regular',sans-serif] font-normal leading-[9px] left-0 not-italic text-[#364146] text-[7px] top-0 tracking-[-0.09px] w-[121px]">Описание функций и возможностей приложения для пользователей</p>
    </div>
  );
}

function Container5() {
  return (
    <div className="absolute bg-[#f7f8fc] content-stretch flex flex-col h-[34px] items-start left-0 pt-[8px] px-[8px] rounded-[8px] top-[92.5px] w-[166px]" data-name="Container">
      <Paragraph16 />
    </div>
  );
}

function Paragraph17() {
  return (
    <div className="absolute h-[9px] left-0 top-[134.5px] w-[166px]" data-name="Paragraph">
      <p className="absolute font-['Inter:Regular',sans-serif] font-normal leading-[9px] left-0 not-italic text-[#22c55e] text-[6px] top-[-0.5px] tracking-[-0.08px] whitespace-nowrap">✓ Привлекает внимание</p>
    </div>
  );
}

function Container4() {
  return (
    <div className="h-[211px] relative shrink-0 w-full" data-name="Container">
      <Paragraph15 />
      <Container5 />
      <Paragraph17 />
    </div>
  );
}

function HierarchyQuiz2VariantB() {
  return (
    <div className="absolute bg-white content-stretch flex flex-col h-[231px] items-start left-[268.24px] overflow-clip pt-[10px] px-[10px] rounded-[14.99px] top-[436px] w-[186px]" data-name="HierarchyQuiz2VariantB">
      <Container4 />
    </div>
  );
}

function Paragraph18() {
  return (
    <div className="absolute h-[21px] left-0 top-[749px] w-[9.297px]" data-name="Paragraph">
      <p className="absolute font-['Inter:Regular',sans-serif] font-normal leading-[21px] left-0 not-italic text-[#364146] text-[14px] top-0 tracking-[-0.17px] whitespace-nowrap">A</p>
    </div>
  );
}

function Paragraph19() {
  return (
    <div className="absolute h-[15px] left-0 top-[51px] w-[166px]" data-name="Paragraph">
      <p className="absolute font-['Inter:Regular',sans-serif] font-normal leading-[15px] left-0 not-italic text-[#101828] text-[10px] top-[0.5px] tracking-[-0.13px] whitespace-nowrap">Форма регистрации</p>
    </div>
  );
}

function Paragraph20() {
  return (
    <div className="h-[10.5px] relative shrink-0 w-[166px]" data-name="Paragraph">
      <div className="bg-clip-padding border-0 border-[transparent] border-solid relative size-full">
        <p className="absolute font-['Inter:Regular',sans-serif] font-normal leading-[10.5px] left-0 not-italic text-[#101828] text-[7px] top-0 tracking-[-0.09px] whitespace-nowrap">Email</p>
      </div>
    </div>
  );
}

function Paragraph21() {
  return (
    <div className="h-[10.5px] relative shrink-0 w-full" data-name="Paragraph">
      <p className="absolute font-['Inter:Regular',sans-serif] font-normal leading-[10.5px] left-0 not-italic text-[#8e9199] text-[7px] top-0 tracking-[-0.09px] whitespace-nowrap">email@example.com</p>
    </div>
  );
}

function Container8() {
  return (
    <div className="bg-[#f7f8fc] flex-[1_0_0] min-h-px min-w-px relative rounded-[6px] w-[166px]" data-name="Container">
      <div className="bg-clip-padding border-0 border-[transparent] border-solid content-stretch flex flex-col items-start pt-[6px] px-[12px] relative size-full">
        <Paragraph21 />
      </div>
    </div>
  );
}

function Container7() {
  return (
    <div className="absolute content-stretch flex flex-col gap-[4px] h-[37px] items-start left-0 top-[76px] w-[166px]" data-name="Container">
      <Paragraph20 />
      <Container8 />
    </div>
  );
}

function Paragraph22() {
  return (
    <div className="absolute h-[10.5px] left-0 top-[121px] w-[166px]" data-name="Paragraph">
      <p className="absolute font-['Inter:Regular',sans-serif] font-normal leading-[10.5px] left-0 not-italic text-[#364146] text-[7px] top-0 tracking-[-0.09px] whitespace-nowrap">Дополнительная информация о регистрации</p>
    </div>
  );
}

function Paragraph23() {
  return (
    <div className="h-[10.5px] relative shrink-0 w-full" data-name="Paragraph">
      <p className="-translate-x-1/2 absolute font-['Inter:Regular',sans-serif] font-normal leading-[10.5px] left-[71.5px] not-italic text-[7px] text-center text-white top-0 tracking-[-0.09px] whitespace-nowrap">Зарегистрироваться</p>
    </div>
  );
}

function Container9() {
  return (
    <div className="absolute bg-[#3b82f6] content-stretch flex flex-col h-[20.5px] items-start left-0 pt-[5px] px-[12px] rounded-[6px] top-[139.5px] w-[166px]" data-name="Container">
      <Paragraph23 />
    </div>
  );
}

function Container6() {
  return (
    <div className="h-[211px] relative shrink-0 w-full" data-name="Container">
      <Paragraph19 />
      <Container7 />
      <Paragraph22 />
      <Container9 />
    </div>
  );
}

function HierarchyQuiz3VariantA() {
  return (
    <div className="absolute bg-white content-stretch flex flex-col h-[231px] items-start left-0 overflow-clip pt-[10px] px-[10px] rounded-[14.99px] top-[741px] w-[186px]" data-name="HierarchyQuiz3VariantA">
      <Container6 />
    </div>
  );
}

function Paragraph24() {
  return (
    <div className="absolute h-[21px] left-[247.3px] top-[749px] w-[8.945px]" data-name="Paragraph">
      <p className="absolute font-['Inter:Regular',sans-serif] font-normal leading-[21px] left-0 not-italic text-[#22c55e] text-[14px] top-0 tracking-[-0.17px] whitespace-nowrap">B</p>
    </div>
  );
}

function Paragraph25() {
  return (
    <div className="absolute h-[15px] left-0 top-[42.5px] w-[166px]" data-name="Paragraph">
      <p className="absolute font-['Inter:Regular',sans-serif] font-normal leading-[15px] left-0 not-italic text-[#101828] text-[10px] top-[0.5px] tracking-[-0.13px] whitespace-nowrap">Форма регистрации</p>
    </div>
  );
}

function Paragraph26() {
  return (
    <div className="h-[10.5px] relative shrink-0 w-[166px]" data-name="Paragraph">
      <div className="bg-clip-padding border-0 border-[transparent] border-solid relative size-full">
        <p className="absolute font-['Inter:Regular',sans-serif] font-normal leading-[10.5px] left-0 not-italic text-[#101828] text-[7px] top-0 tracking-[-0.09px] whitespace-nowrap">Email</p>
      </div>
    </div>
  );
}

function Paragraph27() {
  return (
    <div className="h-[10.5px] relative shrink-0 w-full" data-name="Paragraph">
      <p className="absolute font-['Inter:Regular',sans-serif] font-normal leading-[10.5px] left-0 not-italic text-[#8e9199] text-[7px] top-0 tracking-[-0.09px] whitespace-nowrap">email@example.com</p>
    </div>
  );
}

function Container12() {
  return (
    <div className="bg-[#f7f8fc] flex-[1_0_0] min-h-px min-w-px relative rounded-[6px] w-[166px]" data-name="Container">
      <div className="bg-clip-padding border-0 border-[transparent] border-solid content-stretch flex flex-col items-start pt-[6px] px-[12px] relative size-full">
        <Paragraph27 />
      </div>
    </div>
  );
}

function Container11() {
  return (
    <div className="absolute content-stretch flex flex-col gap-[4px] h-[37px] items-start left-0 top-[67.5px] w-[166px]" data-name="Container">
      <Paragraph26 />
      <Container12 />
    </div>
  );
}

function Paragraph28() {
  return (
    <div className="absolute h-[9px] left-0 top-[112.5px] w-[166px]" data-name="Paragraph">
      <p className="absolute font-['Inter:Regular',sans-serif] font-normal leading-[9px] left-0 not-italic text-[#8e9199] text-[6px] top-[-0.5px] tracking-[-0.08px] whitespace-nowrap">Дополнительная информация о регистрации</p>
    </div>
  );
}

function Paragraph29() {
  return (
    <div className="h-[15px] relative shrink-0 w-full" data-name="Paragraph">
      <p className="-translate-x-1/2 absolute font-['Inter:Regular',sans-serif] font-normal leading-[15px] left-[71.52px] not-italic text-[10px] text-center text-white top-[0.5px] tracking-[-0.13px] whitespace-nowrap">Зарегистрироваться</p>
    </div>
  );
}

function Container13() {
  return (
    <div className="absolute bg-[#3b82f6] content-stretch flex flex-col h-[35px] items-start left-0 pt-[10px] px-[12px] rounded-[6px] top-[133.5px] w-[166px]" data-name="Container">
      <Paragraph29 />
    </div>
  );
}

function Container10() {
  return (
    <div className="h-[211px] relative shrink-0 w-full" data-name="Container">
      <Paragraph25 />
      <Container11 />
      <Paragraph28 />
      <Container13 />
    </div>
  );
}

function HierarchyQuiz3VariantB() {
  return (
    <div className="absolute bg-white content-stretch flex flex-col h-[231px] items-start left-[268.24px] overflow-clip pt-[10px] px-[10px] rounded-[14.99px] top-[741px] w-[186px]" data-name="HierarchyQuiz3VariantB">
      <Container10 />
    </div>
  );
}

function Paragraph30() {
  return (
    <div className="absolute h-[21px] left-0 top-[1054px] w-[9.297px]" data-name="Paragraph">
      <p className="absolute font-['Inter:Regular',sans-serif] font-normal leading-[21px] left-0 not-italic text-[#364146] text-[14px] top-0 tracking-[-0.17px] whitespace-nowrap">A</p>
    </div>
  );
}

function Paragraph31() {
  return (
    <div className="h-[10.5px] relative shrink-0 w-full" data-name="Paragraph">
      <p className="absolute font-['Inter:Regular',sans-serif] font-normal leading-[10.5px] left-0 not-italic text-[#101828] text-[7px] top-0 tracking-[-0.09px] whitespace-nowrap">Карточка 1</p>
    </div>
  );
}

function Container15() {
  return (
    <div className="bg-[#f7f8fc] h-[22.5px] relative rounded-[6px] shrink-0 w-[166px]" data-name="Container">
      <div className="bg-clip-padding border-0 border-[transparent] border-solid content-stretch flex flex-col items-start pt-[6px] px-[6px] relative size-full">
        <Paragraph31 />
      </div>
    </div>
  );
}

function Paragraph32() {
  return (
    <div className="h-[10.5px] relative shrink-0 w-full" data-name="Paragraph">
      <p className="absolute font-['Inter:Regular',sans-serif] font-normal leading-[10.5px] left-0 not-italic text-[#101828] text-[7px] top-0 tracking-[-0.09px] whitespace-nowrap">Карточка 2</p>
    </div>
  );
}

function Container16() {
  return (
    <div className="bg-[#f7f8fc] h-[22.5px] relative rounded-[6px] shrink-0 w-[166px]" data-name="Container">
      <div className="bg-clip-padding border-0 border-[transparent] border-solid content-stretch flex flex-col items-start pt-[6px] px-[6px] relative size-full">
        <Paragraph32 />
      </div>
    </div>
  );
}

function Paragraph33() {
  return (
    <div className="h-[10.5px] relative shrink-0 w-full" data-name="Paragraph">
      <p className="absolute font-['Inter:Regular',sans-serif] font-normal leading-[10.5px] left-0 not-italic text-[#101828] text-[7px] top-0 tracking-[-0.09px] whitespace-nowrap">Карточка 3</p>
    </div>
  );
}

function Container17() {
  return (
    <div className="bg-[#f7f8fc] h-[22.5px] relative rounded-[6px] shrink-0 w-[166px]" data-name="Container">
      <div className="bg-clip-padding border-0 border-[transparent] border-solid content-stretch flex flex-col items-start pt-[6px] px-[6px] relative size-full">
        <Paragraph33 />
      </div>
    </div>
  );
}

function Paragraph34() {
  return (
    <div className="h-[9px] relative shrink-0 w-[166px]" data-name="Paragraph">
      <div className="bg-clip-padding border-0 border-[transparent] border-solid relative size-full">
        <p className="absolute font-['Inter:Regular',sans-serif] font-normal leading-[9px] left-0 not-italic text-[#ef4444] text-[6px] top-[-0.5px] tracking-[-0.08px] whitespace-nowrap">⚠ Нет приоритета</p>
      </div>
    </div>
  );
}

function Container14() {
  return (
    <div className="content-stretch flex flex-col gap-[6px] h-[211px] items-start justify-center py-[58.25px] relative shrink-0 w-full" data-name="Container">
      <Container15 />
      <Container16 />
      <Container17 />
      <Paragraph34 />
    </div>
  );
}

function HierarchyQuiz4VariantA() {
  return (
    <div className="absolute bg-white content-stretch flex flex-col h-[231px] items-start left-0 overflow-clip pt-[10px] px-[10px] rounded-[14.99px] top-[1046px] w-[186px]" data-name="HierarchyQuiz4VariantA">
      <Container14 />
    </div>
  );
}

function Paragraph35() {
  return (
    <div className="absolute h-[21px] left-[247.3px] top-[1054px] w-[8.945px]" data-name="Paragraph">
      <p className="absolute font-['Inter:Regular',sans-serif] font-normal leading-[21px] left-0 not-italic text-[#22c55e] text-[14px] top-0 tracking-[-0.17px] whitespace-nowrap">B</p>
    </div>
  );
}

function Paragraph36() {
  return (
    <div className="h-[15px] relative shrink-0 w-full" data-name="Paragraph">
      <p className="absolute font-['Inter:Regular',sans-serif] font-normal leading-[15px] left-0 not-italic text-[#101828] text-[10px] top-[0.5px] tracking-[-0.13px] whitespace-nowrap">Главная карточка</p>
    </div>
  );
}

function Paragraph37() {
  return (
    <div className="h-[9px] relative shrink-0 w-full" data-name="Paragraph">
      <p className="absolute font-['Inter:Regular',sans-serif] font-normal leading-[9px] left-0 not-italic text-[#8e9199] text-[6px] top-[-0.5px] tracking-[-0.08px] whitespace-nowrap">Важная информация</p>
    </div>
  );
}

function Container19() {
  return (
    <div className="bg-[#f7f8fc] h-[46px] relative rounded-[8px] shrink-0 w-[166px]" data-name="Container">
      <div className="bg-clip-padding border-0 border-[transparent] border-solid content-stretch flex flex-col gap-[2px] items-start pt-[10px] px-[10px] relative size-full">
        <Paragraph36 />
        <Paragraph37 />
      </div>
    </div>
  );
}

function Paragraph38() {
  return (
    <div className="h-[10.5px] relative shrink-0 w-full" data-name="Paragraph">
      <p className="absolute font-['Inter:Regular',sans-serif] font-normal leading-[10.5px] left-0 not-italic text-[#101828] text-[7px] top-0 tracking-[-0.09px] whitespace-nowrap">Карточка 2</p>
    </div>
  );
}

function Container21() {
  return (
    <div className="bg-[#f7f8fc] flex-[1_0_0] h-[22.5px] min-h-px min-w-px relative rounded-[6px]" data-name="Container">
      <div className="bg-clip-padding border-0 border-[transparent] border-solid content-stretch flex flex-col items-start pt-[6px] px-[6px] relative size-full">
        <Paragraph38 />
      </div>
    </div>
  );
}

function Paragraph39() {
  return (
    <div className="h-[10.5px] relative shrink-0 w-full" data-name="Paragraph">
      <p className="absolute font-['Inter:Regular',sans-serif] font-normal leading-[10.5px] left-0 not-italic text-[#101828] text-[7px] top-0 tracking-[-0.09px] whitespace-nowrap">Карточка 3</p>
    </div>
  );
}

function Container22() {
  return (
    <div className="bg-[#f7f8fc] flex-[1_0_0] h-[22.5px] min-h-px min-w-px relative rounded-[6px]" data-name="Container">
      <div className="bg-clip-padding border-0 border-[transparent] border-solid content-stretch flex flex-col items-start pt-[6px] px-[6px] relative size-full">
        <Paragraph39 />
      </div>
    </div>
  );
}

function Container20() {
  return (
    <div className="h-[22.5px] relative shrink-0 w-[166px]" data-name="Container">
      <div className="bg-clip-padding border-0 border-[transparent] border-solid content-stretch flex gap-[6px] items-start relative size-full">
        <Container21 />
        <Container22 />
      </div>
    </div>
  );
}

function Paragraph40() {
  return (
    <div className="h-[9px] relative shrink-0 w-[166px]" data-name="Paragraph">
      <div className="bg-clip-padding border-0 border-[transparent] border-solid relative size-full">
        <p className="absolute font-['Inter:Regular',sans-serif] font-normal leading-[9px] left-0 not-italic text-[#22c55e] text-[6px] top-[-0.5px] tracking-[-0.08px] whitespace-nowrap">✓ Иерархия понятна</p>
      </div>
    </div>
  );
}

function Container18() {
  return (
    <div className="content-stretch flex flex-col gap-[6px] h-[211px] items-start justify-center py-[60.75px] relative shrink-0 w-full" data-name="Container">
      <Container19 />
      <Container20 />
      <Paragraph40 />
    </div>
  );
}

function HierarchyQuiz4VariantB() {
  return (
    <div className="absolute bg-white content-stretch flex flex-col h-[231px] items-start left-[268.24px] overflow-clip pt-[10px] px-[10px] rounded-[14.99px] top-[1046px] w-[186px]" data-name="HierarchyQuiz4VariantB">
      <Container18 />
    </div>
  );
}

function Paragraph41() {
  return (
    <div className="absolute h-[14px] left-[114px] top-[1547px] w-[1280px]" data-name="Paragraph">
      <p className="absolute font-['Inter:Regular',sans-serif] font-normal leading-[14px] left-0 not-italic text-[#8e9199] text-[11px] top-[0.5px] tracking-[-0.14px] whitespace-nowrap">5. Показать структуру информации</p>
    </div>
  );
}

function Paragraph42() {
  return (
    <div className="h-[18px] relative shrink-0 w-[166px]" data-name="Paragraph">
      <div className="bg-clip-padding border-0 border-[transparent] border-solid relative size-full">
        <p className="absolute font-['Inter:Regular',sans-serif] font-normal leading-[18px] left-0 not-italic text-[#101828] text-[12px] top-[0.5px] tracking-[-0.15px] whitespace-nowrap">Крупный заголовок</p>
      </div>
    </div>
  );
}

function Paragraph43() {
  return (
    <div className="h-[9px] relative shrink-0 w-[166px]" data-name="Paragraph">
      <div className="bg-clip-padding border-0 border-[transparent] border-solid content-stretch flex items-start relative size-full">
        <p className="flex-[1_0_0] font-['Inter:Regular',sans-serif] font-normal leading-[9px] min-h-px min-w-px not-italic relative text-[#364146] text-[7px] tracking-[-0.09px]">Основной текст с описанием информации</p>
      </div>
    </div>
  );
}

function Paragraph44() {
  return (
    <div className="h-[13.5px] relative shrink-0 w-full" data-name="Paragraph">
      <p className="-translate-x-1/2 absolute font-['Inter:Regular',sans-serif] font-normal leading-[13.5px] left-[71.13px] not-italic text-[9px] text-center text-white top-[0.5px] tracking-[-0.12px] whitespace-nowrap">Кнопка действия</p>
    </div>
  );
}

function Container24() {
  return (
    <div className="bg-[#3b82f6] h-[29.5px] relative rounded-[6px] shrink-0 w-[166px]" data-name="Container">
      <div className="bg-clip-padding border-0 border-[transparent] border-solid content-stretch flex flex-col items-start pt-[8px] px-[12px] relative size-full">
        <Paragraph44 />
      </div>
    </div>
  );
}

function Container23() {
  return (
    <div className="content-stretch flex flex-col gap-[8px] h-[211px] items-start justify-center py-[69.25px] relative shrink-0 w-full" data-name="Container">
      <Paragraph42 />
      <Paragraph43 />
      <Container24 />
    </div>
  );
}

function HierarchyQuiz() {
  return (
    <div className="absolute bg-white content-stretch flex flex-col h-[231px] items-start left-[114px] overflow-clip pt-[10px] px-[10px] rounded-[14.99px] top-[1581px] w-[186px]" data-name="HierarchyQuiz5">
      <Container23 />
    </div>
  );
}

function Paragraph45() {
  return (
    <div className="absolute h-[14px] left-[114px] top-[1852px] w-[1280px]" data-name="Paragraph">
      <p className="absolute font-['Inter:Regular',sans-serif] font-normal leading-[14px] left-0 not-italic text-[#8e9199] text-[11px] top-[0.5px] tracking-[-0.14px] whitespace-nowrap">6. Экран статьи с крупным заголовком</p>
    </div>
  );
}

function Paragraph46() {
  return (
    <div className="absolute h-[15px] left-0 top-[73px] w-[166px]" data-name="Paragraph">
      <p className="absolute font-['Inter:Regular',sans-serif] font-normal leading-[15px] left-0 not-italic text-[#101828] text-[13px] top-[0.5px] tracking-[-0.16px] whitespace-nowrap">Заголовок статьи</p>
    </div>
  );
}

function Paragraph47() {
  return (
    <div className="absolute h-[27px] left-0 top-[96px] w-[166px]" data-name="Paragraph">
      <p className="absolute font-['Inter:Regular',sans-serif] font-normal leading-[9px] left-0 not-italic text-[#364146] text-[7px] top-0 tracking-[-0.09px] w-[139px]">Текст статьи с важной информацией для читателей. Хорошая иерархия помогает ориентироваться в контенте.</p>
    </div>
  );
}

function Paragraph48() {
  return (
    <div className="absolute h-[9px] left-0 top-[129px] w-[166px]" data-name="Paragraph">
      <p className="absolute font-['Inter:Regular',sans-serif] font-normal leading-[9px] left-0 not-italic text-[#8e9199] text-[6px] top-[-0.5px] tracking-[-0.08px] whitespace-nowrap">Автор • 5 минут чтения</p>
    </div>
  );
}

function Container25() {
  return (
    <div className="h-[211px] relative shrink-0 w-full" data-name="Container">
      <Paragraph46 />
      <Paragraph47 />
      <Paragraph48 />
    </div>
  );
}

function HierarchyQuiz1() {
  return (
    <div className="absolute bg-white content-stretch flex flex-col h-[231px] items-start left-[114px] overflow-clip pt-[10px] px-[10px] rounded-[14.99px] top-[1886px] w-[186px]" data-name="HierarchyQuiz6">
      <Container25 />
    </div>
  );
}

function Paragraph49() {
  return (
    <div className="absolute h-[14px] left-[114px] top-[2157px] w-[1280px]" data-name="Paragraph">
      <p className="absolute font-['Inter:Regular',sans-serif] font-normal leading-[14px] left-0 not-italic text-[#8e9199] text-[11px] top-[0.5px] tracking-[-0.14px] whitespace-nowrap">7. Экран интерфейса с большим заголовком</p>
    </div>
  );
}

function Paragraph50() {
  return (
    <div className="h-[16px] relative shrink-0 w-[166px]" data-name="Paragraph">
      <div className="bg-clip-padding border-0 border-[transparent] border-solid relative size-full">
        <p className="absolute font-['Inter:Regular',sans-serif] font-normal leading-[16px] left-0 not-italic text-[#101828] text-[14px] top-[0.5px] tracking-[-0.17px] whitespace-nowrap">Большой заголовок</p>
      </div>
    </div>
  );
}

function Paragraph51() {
  return (
    <div className="h-[18px] relative shrink-0 w-[166px]" data-name="Paragraph">
      <div className="bg-clip-padding border-0 border-[transparent] border-solid relative size-full">
        <p className="absolute font-['Inter:Regular',sans-serif] font-normal leading-[9px] left-0 not-italic text-[#8e9199] text-[7px] top-0 tracking-[-0.09px] w-[164px]">Обычный текст с дополнительной информацией для пользователей приложения</p>
      </div>
    </div>
  );
}

function Container26() {
  return (
    <div className="content-stretch flex flex-col gap-[8px] h-[211px] items-start justify-center py-[84.5px] relative shrink-0 w-full" data-name="Container">
      <Paragraph50 />
      <Paragraph51 />
    </div>
  );
}

function HierarchyQuiz2() {
  return (
    <div className="absolute bg-white content-stretch flex flex-col h-[231px] items-start left-[114px] overflow-clip pt-[10px] px-[10px] rounded-[14.99px] top-[2191px] w-[186px]" data-name="HierarchyQuiz7">
      <Container26 />
    </div>
  );
}

function Paragraph52() {
  return (
    <div className="absolute h-[14px] left-[114px] top-[2462px] w-[1280px]" data-name="Paragraph">
      <p className="absolute font-['Inter:Regular',sans-serif] font-normal leading-[14px] left-0 not-italic text-[#8e9199] text-[11px] top-[0.5px] tracking-[-0.14px] whitespace-nowrap">8. Экран формы с основной кнопкой</p>
    </div>
  );
}

function Paragraph53() {
  return (
    <div className="absolute h-[15px] left-0 top-[60.25px] w-[166px]" data-name="Paragraph">
      <p className="absolute font-['Inter:Regular',sans-serif] font-normal leading-[15px] left-0 not-italic text-[#101828] text-[10px] top-[0.5px] tracking-[-0.13px] whitespace-nowrap">Форма</p>
    </div>
  );
}

function Paragraph54() {
  return (
    <div className="h-[10.5px] relative shrink-0 w-full" data-name="Paragraph">
      <p className="absolute font-['Inter:Regular',sans-serif] font-normal leading-[10.5px] left-0 not-italic text-[#8e9199] text-[7px] top-0 tracking-[-0.09px] whitespace-nowrap">Поле ввода</p>
    </div>
  );
}

function Container28() {
  return (
    <div className="absolute bg-[#f7f8fc] content-stretch flex flex-col h-[22.5px] items-start left-0 pt-[6px] px-[12px] rounded-[6px] top-[85.25px] w-[166px]" data-name="Container">
      <Paragraph54 />
    </div>
  );
}

function Paragraph55() {
  return (
    <div className="h-[15px] relative shrink-0 w-full" data-name="Paragraph">
      <p className="-translate-x-1/2 absolute font-['Inter:Regular',sans-serif] font-normal leading-[15px] left-[71.47px] not-italic text-[10px] text-center text-white top-[0.5px] tracking-[-0.13px] whitespace-nowrap">Основное действие</p>
    </div>
  );
}

function Container29() {
  return (
    <div className="absolute bg-[#3b82f6] content-stretch flex flex-col h-[35px] items-start left-0 pt-[10px] px-[12px] rounded-[6px] top-[115.75px] w-[166px]" data-name="Container">
      <Paragraph55 />
    </div>
  );
}

function Container27() {
  return (
    <div className="h-[211px] relative shrink-0 w-full" data-name="Container">
      <Paragraph53 />
      <Container28 />
      <Container29 />
    </div>
  );
}

function HierarchyQuiz3() {
  return (
    <div className="absolute bg-white content-stretch flex flex-col h-[231px] items-start left-[114px] overflow-clip pt-[10px] px-[10px] rounded-[14.99px] top-[2496px] w-[186px]" data-name="HierarchyQuiz8">
      <Container27 />
    </div>
  );
}

function Paragraph56() {
  return (
    <div className="absolute h-[14px] left-[114px] top-[2888px] w-[1280px]" data-name="Paragraph">
      <p className="absolute font-['Inter:Regular',sans-serif] font-normal leading-[14px] left-0 not-italic text-[#8e9199] text-[11px] top-[0.5px] tracking-[-0.14px] whitespace-nowrap">9. Разные уровни важности</p>
    </div>
  );
}

function Paragraph57() {
  return (
    <div className="h-[18px] relative shrink-0 w-[166px]" data-name="Paragraph">
      <div className="bg-clip-padding border-0 border-[transparent] border-solid relative size-full">
        <p className="absolute font-['Inter:Regular',sans-serif] font-normal leading-[18px] left-0 not-italic text-[#101828] text-[12px] top-[0.5px] tracking-[-0.15px] whitespace-nowrap">Большой заголовок</p>
      </div>
    </div>
  );
}

function Paragraph58() {
  return (
    <div className="h-[9px] relative shrink-0 w-[166px]" data-name="Paragraph">
      <div className="bg-clip-padding border-0 border-[transparent] border-solid content-stretch flex items-start relative size-full">
        <p className="flex-[1_0_0] font-['Inter:Regular',sans-serif] font-normal leading-[9px] min-h-px min-w-px not-italic relative text-[#364146] text-[7px] tracking-[-0.09px]">Маленький текст описания</p>
      </div>
    </div>
  );
}

function Paragraph59() {
  return (
    <div className="h-[12px] relative shrink-0 w-[166px]" data-name="Paragraph">
      <div className="bg-clip-padding border-0 border-[transparent] border-solid relative size-full">
        <p className="absolute font-['Inter:Regular',sans-serif] font-normal leading-[12px] left-0 not-italic text-[#0a0a0a] text-[8px] top-0 tracking-[-0.1px] whitespace-nowrap">Жирный текст для выделения</p>
      </div>
    </div>
  );
}

function Container30() {
  return (
    <div className="content-stretch flex flex-col gap-[6px] h-[211px] items-start justify-center py-[80px] relative shrink-0 w-full" data-name="Container">
      <Paragraph57 />
      <Paragraph58 />
      <Paragraph59 />
    </div>
  );
}

function HierarchyQuiz4() {
  return (
    <div className="absolute bg-white content-stretch flex flex-col h-[231px] items-start left-[114px] overflow-clip pt-[10px] px-[10px] rounded-[14.99px] top-[2922px] w-[186px]" data-name="HierarchyQuiz9">
      <Container30 />
    </div>
  );
}

function Paragraph60() {
  return (
    <div className="absolute h-[14px] left-[114px] top-[3193px] w-[1280px]" data-name="Paragraph">
      <p className="absolute font-['Inter:Regular',sans-serif] font-normal leading-[14px] left-0 not-italic text-[#8e9199] text-[11px] top-[0.5px] tracking-[-0.14px] whitespace-nowrap">10. Проблема - весь текст одинаковый</p>
    </div>
  );
}

function Paragraph61() {
  return (
    <div className="h-[27px] relative shrink-0 w-[166px]" data-name="Paragraph">
      <div className="bg-clip-padding border-0 border-[transparent] border-solid relative size-full">
        <p className="absolute font-['Inter:Regular',sans-serif] font-normal leading-[9px] left-0 not-italic text-[#364146] text-[7px] top-0 tracking-[-0.09px] w-[162px]">Весь текст одинаковый размер. Нет заголовков и структуры. Сложно понять где важная информация а где второстепенная.</p>
      </div>
    </div>
  );
}

function Paragraph62() {
  return (
    <div className="h-[27px] relative shrink-0 w-[166px]" data-name="Paragraph">
      <div className="bg-clip-padding border-0 border-[transparent] border-solid relative size-full">
        <p className="absolute font-['Inter:Regular',sans-serif] font-normal leading-[9px] left-0 not-italic text-[#364146] text-[7px] top-0 tracking-[-0.09px] w-[163px]">Пользователю трудно ориентироваться в таком интерфейсе потому что нет визуальных акцентов.</p>
      </div>
    </div>
  );
}

function Paragraph63() {
  return (
    <div className="h-[9px] relative shrink-0 w-[166px]" data-name="Paragraph">
      <div className="bg-clip-padding border-0 border-[transparent] border-solid relative size-full">
        <p className="absolute font-['Inter:Regular',sans-serif] font-normal leading-[9px] left-0 not-italic text-[#ef4444] text-[6px] top-[-0.5px] tracking-[-0.08px] whitespace-nowrap">⚠ Плохая иерархия</p>
      </div>
    </div>
  );
}

function Container31() {
  return (
    <div className="content-stretch flex flex-col gap-[6px] h-[211px] items-start justify-center py-[68px] relative shrink-0 w-full" data-name="Container">
      <Paragraph61 />
      <Paragraph62 />
      <Paragraph63 />
    </div>
  );
}

function HierarchyQuiz5() {
  return (
    <div className="absolute bg-white content-stretch flex flex-col h-[231px] items-start left-[114px] overflow-clip pt-[10px] px-[10px] rounded-[14.99px] top-[3227px] w-[186px]" data-name="HierarchyQuiz10">
      <Container31 />
    </div>
  );
}

function Paragraph64() {
  return (
    <div className="absolute h-[14px] left-[114px] top-[3498px] w-[1280px]" data-name="Paragraph">
      <p className="absolute font-['Inter:Regular',sans-serif] font-normal leading-[14px] left-0 not-italic text-[#8e9199] text-[11px] top-[0.5px] tracking-[-0.14px] whitespace-nowrap">11. Заголовок, кнопка, подписи</p>
    </div>
  );
}

function Paragraph65() {
  return (
    <div className="h-[16.5px] relative shrink-0 w-[166px]" data-name="Paragraph">
      <div className="bg-clip-padding border-0 border-[transparent] border-solid relative size-full">
        <p className="absolute font-['Inter:Regular',sans-serif] font-normal leading-[16.5px] left-0 not-italic text-[#101828] text-[11px] top-[0.5px] tracking-[-0.14px] whitespace-nowrap">Заголовок раздела</p>
      </div>
    </div>
  );
}

function Paragraph66() {
  return (
    <div className="h-[13.5px] relative shrink-0 w-full" data-name="Paragraph">
      <p className="-translate-x-1/2 absolute font-['Inter:Regular',sans-serif] font-normal leading-[13.5px] left-[71.38px] not-italic text-[9px] text-center text-white top-[0.5px] tracking-[-0.12px] whitespace-nowrap">Основная кнопка</p>
    </div>
  );
}

function Container33() {
  return (
    <div className="bg-[#3b82f6] h-[29.5px] relative rounded-[6px] shrink-0 w-[166px]" data-name="Container">
      <div className="bg-clip-padding border-0 border-[transparent] border-solid content-stretch flex flex-col items-start pt-[8px] px-[12px] relative size-full">
        <Paragraph66 />
      </div>
    </div>
  );
}

function Paragraph67() {
  return (
    <div className="h-[9px] relative shrink-0 w-[166px]" data-name="Paragraph">
      <div className="bg-clip-padding border-0 border-[transparent] border-solid relative size-full">
        <p className="absolute font-['Inter:Regular',sans-serif] font-normal leading-[9px] left-0 not-italic text-[#8e9199] text-[6px] top-[-0.5px] tracking-[-0.08px] whitespace-nowrap">Мелкая подпись с дополнительной информацией</p>
      </div>
    </div>
  );
}

function Container32() {
  return (
    <div className="content-stretch flex flex-col gap-[8px] h-[211px] items-start justify-center py-[70px] relative shrink-0 w-full" data-name="Container">
      <Paragraph65 />
      <Container33 />
      <Paragraph67 />
    </div>
  );
}

function HierarchyQuiz6() {
  return (
    <div className="absolute bg-white content-stretch flex flex-col h-[231px] items-start left-[114px] overflow-clip pt-[10px] px-[10px] rounded-[14.99px] top-[3532px] w-[186px]" data-name="HierarchyQuiz11">
      <Container32 />
    </div>
  );
}

function Paragraph68() {
  return (
    <div className="absolute h-[14px] left-[114px] top-[3803px] w-[1280px]" data-name="Paragraph">
      <p className="absolute font-['Inter:Regular',sans-serif] font-normal leading-[14px] left-0 not-italic text-[#8e9199] text-[11px] top-[0.5px] tracking-[-0.14px] whitespace-nowrap">12. Структурированный текст</p>
    </div>
  );
}

function Paragraph69() {
  return (
    <div className="absolute h-[15px] left-0 top-[58.5px] w-[166px]" data-name="Paragraph">
      <p className="absolute font-['Inter:Regular',sans-serif] font-normal leading-[15px] left-0 not-italic text-[#101828] text-[10px] top-[0.5px] tracking-[-0.13px] whitespace-nowrap">Блок 1: Информация</p>
    </div>
  );
}

function Paragraph70() {
  return (
    <div className="content-stretch flex h-[9px] items-start relative shrink-0 w-full" data-name="Paragraph">
      <p className="flex-[1_0_0] font-['Inter:Regular',sans-serif] font-normal leading-[9px] min-h-px min-w-px not-italic relative text-[#364146] text-[7px] tracking-[-0.09px]">Структурированный текст</p>
    </div>
  );
}

function Container35() {
  return (
    <div className="absolute bg-[#f7f8fc] content-stretch flex flex-col h-[21px] items-start left-0 pt-[6px] px-[6px] rounded-[6px] top-[81.5px] w-[166px]" data-name="Container">
      <Paragraph70 />
    </div>
  );
}

function Paragraph71() {
  return (
    <div className="absolute h-[15px] left-0 top-[108.5px] w-[166px]" data-name="Paragraph">
      <p className="absolute font-['Inter:Regular',sans-serif] font-normal leading-[15px] left-0 not-italic text-[#101828] text-[10px] top-[0.5px] tracking-[-0.13px] whitespace-nowrap">Блок 2: Детали</p>
    </div>
  );
}

function Paragraph72() {
  return (
    <div className="content-stretch flex h-[9px] items-start relative shrink-0 w-full" data-name="Paragraph">
      <p className="flex-[1_0_0] font-['Inter:Regular',sans-serif] font-normal leading-[9px] min-h-px min-w-px not-italic relative text-[#364146] text-[7px] tracking-[-0.09px]">Дополнительные детали</p>
    </div>
  );
}

function Container36() {
  return (
    <div className="absolute bg-[#f7f8fc] content-stretch flex flex-col h-[21px] items-start left-0 pt-[6px] px-[6px] rounded-[6px] top-[131.5px] w-[166px]" data-name="Container">
      <Paragraph72 />
    </div>
  );
}

function Container34() {
  return (
    <div className="h-[211px] relative shrink-0 w-full" data-name="Container">
      <Paragraph69 />
      <Container35 />
      <Paragraph71 />
      <Container36 />
    </div>
  );
}

function HierarchyQuiz7() {
  return (
    <div className="absolute bg-white content-stretch flex flex-col h-[231px] items-start left-[114px] overflow-clip pt-[10px] px-[10px] rounded-[14.99px] top-[3837px] w-[186px]" data-name="HierarchyQuiz12">
      <Container34 />
    </div>
  );
}

function Paragraph73() {
  return (
    <div className="absolute h-[14px] left-[114px] top-[4229px] w-[1280px]" data-name="Paragraph">
      <p className="absolute font-['Inter:Regular',sans-serif] font-normal leading-[14px] left-0 not-italic text-[#8e9199] text-[11px] top-[0.5px] tracking-[-0.14px] whitespace-nowrap">13. Соединить элементы</p>
    </div>
  );
}

function Paragraph74() {
  return (
    <div className="h-[18px] relative shrink-0 w-[112.07px]" data-name="Paragraph">
      <div className="bg-clip-padding border-0 border-[transparent] border-solid relative size-full">
        <p className="-translate-x-1/2 absolute font-['Inter:Regular',sans-serif] font-normal leading-[18px] left-[56.5px] not-italic text-[#f7f8fc] text-[12px] text-center top-[0.5px] tracking-[-0.15px] whitespace-nowrap">Крупный заголовок</p>
      </div>
    </div>
  );
}

function HierarchyQuiz13Card() {
  return (
    <div className="bg-[rgba(255,255,255,0)] content-stretch flex h-[80px] items-center justify-center pl-[8.961px] pr-[8.969px] relative rounded-[8px] shrink-0 w-[130px]" data-name="HierarchyQuiz13Card1">
      <Paragraph74 />
    </div>
  );
}

function Paragraph75() {
  return (
    <div className="h-[12px] relative shrink-0 w-full" data-name="Paragraph">
      <p className="absolute font-['Inter:Regular',sans-serif] font-normal leading-[12px] left-0 not-italic text-[#f7f8fc] text-[8px] top-0 tracking-[-0.1px] whitespace-nowrap">Основная кнопка</p>
    </div>
  );
}

function Container38() {
  return (
    <div className="bg-[#3b82f6] h-[24px] relative rounded-[6px] shrink-0 w-[90.086px]" data-name="Container">
      <div className="bg-clip-padding border-0 border-[transparent] border-solid content-stretch flex flex-col items-start pt-[6px] px-[12px] relative size-full">
        <Paragraph75 />
      </div>
    </div>
  );
}

function HierarchyQuiz13Card1() {
  return (
    <div className="bg-[rgba(255,255,255,0)] content-stretch flex h-[80px] items-center justify-center pl-[19.953px] pr-[19.961px] relative rounded-[8px] shrink-0 w-[130px]" data-name="HierarchyQuiz13Card2">
      <Container38 />
    </div>
  );
}

function Paragraph76() {
  return (
    <div className="h-[9px] relative shrink-0 w-[47.469px]" data-name="Paragraph">
      <div className="bg-clip-padding border-0 border-[transparent] border-solid relative size-full">
        <p className="-translate-x-1/2 absolute font-['Inter:Regular',sans-serif] font-normal leading-[9px] left-[24px] not-italic text-[#f7f8fc] text-[6px] text-center top-[-0.5px] tracking-[-0.08px] whitespace-nowrap">Мелкая подпись</p>
      </div>
    </div>
  );
}

function HierarchyQuiz13Card2() {
  return (
    <div className="bg-[rgba(255,255,255,0)] content-stretch flex h-[80px] items-center justify-center px-[41.266px] relative rounded-[8px] shrink-0 w-[130px]" data-name="HierarchyQuiz13Card3">
      <Paragraph76 />
    </div>
  );
}

function Container37() {
  return (
    <div className="absolute content-stretch flex gap-[24px] h-[80px] items-start left-[114px] top-[4263.5px] w-[478px]" data-name="Container">
      <HierarchyQuiz13Card />
      <HierarchyQuiz13Card1 />
      <HierarchyQuiz13Card2 />
    </div>
  );
}

function Paragraph77() {
  return (
    <div className="absolute h-[14px] left-[114px] top-[4383px] w-[1280px]" data-name="Paragraph">
      <p className="absolute font-['Inter:Regular',sans-serif] font-normal leading-[14px] left-0 not-italic text-[#8e9199] text-[11px] top-[0.5px] tracking-[-0.14px] whitespace-nowrap">14. Соединить заголовок, кнопку, подпись</p>
    </div>
  );
}

function Paragraph78() {
  return (
    <div className="h-[16.5px] relative shrink-0 w-[109.766px]" data-name="Paragraph">
      <div className="bg-clip-padding border-0 border-[transparent] border-solid relative size-full">
        <p className="-translate-x-1/2 absolute font-['Inter:Regular',sans-serif] font-normal leading-[16.5px] left-[55px] not-italic text-[#f7f8fc] text-[11px] text-center top-[0.5px] tracking-[-0.14px] whitespace-nowrap">Заголовок страницы</p>
      </div>
    </div>
  );
}

function HierarchyQuiz14Card() {
  return (
    <div className="bg-[rgba(255,255,255,0)] content-stretch flex h-[80px] items-center justify-center px-[10.117px] relative rounded-[8px] shrink-0 w-[130px]" data-name="HierarchyQuiz14Card1">
      <Paragraph78 />
    </div>
  );
}

function Paragraph79() {
  return (
    <div className="h-[13.5px] relative shrink-0 w-full" data-name="Paragraph">
      <p className="absolute font-['Inter:Regular',sans-serif] font-normal leading-[13.5px] left-0 not-italic text-[#f7f8fc] text-[9px] top-[0.5px] tracking-[-0.12px] whitespace-nowrap">Основная кнопка</p>
    </div>
  );
}

function Container40() {
  return (
    <div className="bg-[#3b82f6] h-[29.5px] relative rounded-[6px] shrink-0 w-[98.234px]" data-name="Container">
      <div className="bg-clip-padding border-0 border-[transparent] border-solid content-stretch flex flex-col items-start pt-[8px] px-[12px] relative size-full">
        <Paragraph79 />
      </div>
    </div>
  );
}

function HierarchyQuiz14Card1() {
  return (
    <div className="bg-[rgba(255,255,255,0)] content-stretch flex h-[80px] items-center justify-center px-[15.883px] relative rounded-[8px] shrink-0 w-[130px]" data-name="HierarchyQuiz14Card2">
      <Container40 />
    </div>
  );
}

function Paragraph80() {
  return (
    <div className="h-[9px] relative shrink-0 w-[24.844px]" data-name="Paragraph">
      <div className="bg-clip-padding border-0 border-[transparent] border-solid relative size-full">
        <p className="-translate-x-1/2 absolute font-['Inter:Regular',sans-serif] font-normal leading-[9px] left-[12.5px] not-italic text-[#f7f8fc] text-[6px] text-center top-[-0.5px] tracking-[-0.08px] whitespace-nowrap">Подпись</p>
      </div>
    </div>
  );
}

function HierarchyQuiz14Card2() {
  return (
    <div className="bg-[rgba(255,255,255,0)] content-stretch flex h-[80px] items-center justify-center px-[52.578px] relative rounded-[8px] shrink-0 w-[130px]" data-name="HierarchyQuiz14Card3">
      <Paragraph80 />
    </div>
  );
}

function Container39() {
  return (
    <div className="absolute content-stretch flex gap-[24px] h-[80px] items-start left-[114px] top-[4416.5px] w-[478px]" data-name="Container">
      <HierarchyQuiz14Card />
      <HierarchyQuiz14Card1 />
      <HierarchyQuiz14Card2 />
    </div>
  );
}

function Paragraph81() {
  return (
    <div className="absolute h-[14px] left-[114px] top-[4537px] w-[1280px]" data-name="Paragraph">
      <p className="absolute font-['Inter:Regular',sans-serif] font-normal leading-[14px] left-0 not-italic text-[#8e9199] text-[11px] top-[0.5px] tracking-[-0.14px] whitespace-nowrap">15. Соединить проблемы интерфейса</p>
    </div>
  );
}

function Paragraph82() {
  return (
    <div className="h-[9px] relative shrink-0 w-full" data-name="Paragraph">
      <p className="absolute font-['Inter:Regular',sans-serif] font-normal leading-[9px] left-0 not-italic text-[#364146] text-[6px] top-[-0.5px] tracking-[-0.08px] whitespace-nowrap">Элемент 1</p>
    </div>
  );
}

function Container42() {
  return (
    <div className="bg-[#f7f8fc] h-[17px] relative rounded-[4px] shrink-0 w-[114px]" data-name="Container">
      <div className="bg-clip-padding border-0 border-[transparent] border-solid content-stretch flex flex-col items-start pt-[4px] px-[4px] relative size-full">
        <Paragraph82 />
      </div>
    </div>
  );
}

function Paragraph83() {
  return (
    <div className="h-[9px] relative shrink-0 w-full" data-name="Paragraph">
      <p className="absolute font-['Inter:Regular',sans-serif] font-normal leading-[9px] left-0 not-italic text-[#364146] text-[6px] top-[-0.5px] tracking-[-0.08px] whitespace-nowrap">Элемент 2</p>
    </div>
  );
}

function Container43() {
  return (
    <div className="bg-[#f7f8fc] h-[17px] relative rounded-[4px] shrink-0 w-[114px]" data-name="Container">
      <div className="bg-clip-padding border-0 border-[transparent] border-solid content-stretch flex flex-col items-start pt-[4px] px-[4px] relative size-full">
        <Paragraph83 />
      </div>
    </div>
  );
}

function Paragraph84() {
  return (
    <div className="h-[7.5px] relative shrink-0 w-[114px]" data-name="Paragraph">
      <div className="bg-clip-padding border-0 border-[transparent] border-solid relative size-full">
        <p className="-translate-x-1/2 absolute font-['Inter:Regular',sans-serif] font-normal leading-[7.5px] left-[56.5px] not-italic text-[#ef4444] text-[5px] text-center top-[-0.5px] tracking-[-0.07px] whitespace-nowrap">Одинаковый размер</p>
      </div>
    </div>
  );
}

function HierarchyQuiz15Card() {
  return (
    <div className="bg-[rgba(255,255,255,0)] content-stretch flex flex-col gap-[4px] h-[80px] items-start justify-center pl-[8px] py-[15.25px] relative rounded-[8px] shrink-0 w-[130px]" data-name="HierarchyQuiz15Card1">
      <Container42 />
      <Container43 />
      <Paragraph84 />
    </div>
  );
}

function Paragraph85() {
  return (
    <div className="h-[10.5px] relative shrink-0 w-full" data-name="Paragraph">
      <p className="absolute font-['Inter:Regular',sans-serif] font-normal leading-[10.5px] left-0 not-italic text-[#8e9199] text-[7px] top-0 tracking-[-0.09px] whitespace-nowrap">Кнопка не выделяется</p>
    </div>
  );
}

function Container44() {
  return (
    <div className="bg-[#f7f8fc] h-[22.5px] relative rounded-[6px] shrink-0 w-[99.844px]" data-name="Container">
      <div className="bg-clip-padding border-0 border-[transparent] border-solid content-stretch flex flex-col items-start pt-[6px] px-[12px] relative size-full">
        <Paragraph85 />
      </div>
    </div>
  );
}

function HierarchyQuiz15Card1() {
  return (
    <div className="bg-[rgba(255,255,255,0)] content-stretch flex h-[80px] items-center justify-center px-[15.078px] relative rounded-[8px] shrink-0 w-[130px]" data-name="HierarchyQuiz15Card2">
      <Container44 />
    </div>
  );
}

function Paragraph86() {
  return (
    <div className="h-[16px] relative shrink-0 w-[114px]" data-name="Paragraph">
      <div className="bg-clip-padding border-0 border-[transparent] border-solid relative size-full">
        <p className="-translate-x-1/2 absolute font-['Inter:Regular',sans-serif] font-normal leading-[8px] left-[57.26px] not-italic text-[#f7f8fc] text-[6px] text-center top-0 tracking-[-0.08px] w-[111px]">Длинный текст без структуры сложно читать</p>
      </div>
    </div>
  );
}

function HierarchyQuiz15Card2() {
  return (
    <div className="bg-[rgba(255,255,255,0)] content-stretch flex h-[80px] items-center justify-center px-[8px] relative rounded-[8px] shrink-0 w-[130px]" data-name="HierarchyQuiz15Card3">
      <Paragraph86 />
    </div>
  );
}

function Container41() {
  return (
    <div className="absolute content-stretch flex gap-[24px] h-[80px] items-start left-[114px] top-[4571px] w-[1280px]" data-name="Container">
      <HierarchyQuiz15Card />
      <HierarchyQuiz15Card1 />
      <HierarchyQuiz15Card2 />
    </div>
  );
}

function Paragraph87() {
  return (
    <div className="absolute h-[14px] left-[114px] top-[4691px] w-[1280px]" data-name="Paragraph">
      <p className="absolute font-['Inter:Regular',sans-serif] font-normal leading-[14px] left-0 not-italic text-[#8e9199] text-[11px] top-[0.5px] tracking-[-0.14px] whitespace-nowrap">16. Соединить текст с иерархией</p>
    </div>
  );
}

function Paragraph88() {
  return (
    <div className="h-[16.5px] relative shrink-0 w-[102.688px]" data-name="Paragraph">
      <div className="bg-clip-padding border-0 border-[transparent] border-solid relative size-full">
        <p className="-translate-x-1/2 absolute font-['Inter:Regular',sans-serif] font-normal leading-[16.5px] left-[51.5px] not-italic text-[#f7f8fc] text-[11px] text-center top-[0.5px] tracking-[-0.14px] whitespace-nowrap">Крупный заголовок</p>
      </div>
    </div>
  );
}

function HierarchyQuiz16Card() {
  return (
    <div className="bg-[rgba(255,255,255,0)] content-stretch flex h-[80px] items-center justify-center px-[13.656px] relative rounded-[8px] shrink-0 w-[130px]" data-name="HierarchyQuiz16Card1">
      <Paragraph88 />
    </div>
  );
}

function Paragraph89() {
  return (
    <div className="h-[10.5px] relative shrink-0 w-[53.344px]" data-name="Paragraph">
      <div className="bg-clip-padding border-0 border-[transparent] border-solid relative size-full">
        <p className="-translate-x-1/2 absolute font-['Inter:Regular',sans-serif] font-normal leading-[10.5px] left-[27px] not-italic text-[#f7f8fc] text-[7px] text-center top-0 tracking-[-0.09px] whitespace-nowrap">Основной текст</p>
      </div>
    </div>
  );
}

function HierarchyQuiz16Card1() {
  return (
    <div className="bg-[rgba(255,255,255,0)] content-stretch flex h-[80px] items-center justify-center px-[38.328px] relative rounded-[8px] shrink-0 w-[130px]" data-name="HierarchyQuiz16Card2">
      <Paragraph89 />
    </div>
  );
}

function Paragraph90() {
  return (
    <div className="h-[9px] relative shrink-0 w-[47.469px]" data-name="Paragraph">
      <div className="bg-clip-padding border-0 border-[transparent] border-solid relative size-full">
        <p className="-translate-x-1/2 absolute font-['Inter:Regular',sans-serif] font-normal leading-[7.025px] left-[24.27px] not-italic text-[#f7f8fc] text-[4.684px] text-center top-[0.49px] tracking-[-0.0624px] whitespace-nowrap">Мелкая подпись</p>
      </div>
    </div>
  );
}

function HierarchyQuiz16Card2() {
  return (
    <div className="bg-[rgba(255,255,255,0)] content-stretch flex h-[80px] items-center justify-center px-[41.266px] relative rounded-[8px] shrink-0 w-[130px]" data-name="HierarchyQuiz16Card3">
      <Paragraph90 />
    </div>
  );
}

function Container45() {
  return (
    <div className="absolute content-stretch flex gap-[24px] h-[80px] items-start left-[114px] top-[4725px] w-[1280px]" data-name="Container">
      <HierarchyQuiz16Card />
      <HierarchyQuiz16Card1 />
      <HierarchyQuiz16Card2 />
    </div>
  );
}

// ─────────────────────────────────────────────────────────────────────────────
// Named exports for LessonQuizPage (quiz_hierarchy visuals)
// ─────────────────────────────────────────────────────────────────────────────

const f = "Inter, sans-serif";

// ── Q1A: весь текст одного размера — нет иерархии (bad) ───────────────────
export function CQHierCompare1A() {
  return (
    <div style={{ width: 260, height: 180, borderRadius: 15, background: "white", overflow: "hidden", position: "relative", boxSizing: "border-box", padding: "14px 16px", display: "flex", flexDirection: "column", gap: 6 }}>
      <span style={{ fontFamily: f, fontSize: 9, color: "#9ca3af" }}>Основы типографики</span>
      <span style={{ fontFamily: f, fontSize: 9, color: "#9ca3af" }}>Типографика — это способ организации текста в интерфейсе</span>
      <span style={{ fontFamily: f, fontSize: 9, color: "#9ca3af" }}>Выбор шрифта</span>
      <span style={{ fontFamily: f, fontSize: 9, color: "#9ca3af" }}>Шрифт задаёт характер и тон всего интерфейса</span>
      <span style={{ fontFamily: f, fontSize: 9, color: "#9ca3af" }}>Размеры и отступы</span>
      <span style={{ fontFamily: f, fontSize: 9, color: "#9ca3af" }}>Правильные интервалы улучшают читаемость</span>
    </div>
  );
}

// ── Q1B: чёткая типографическая иерархия (good, correct=Б) ───────────────
export function CQHierCompare1B() {
  return (
    <div style={{ width: 260, height: 180, borderRadius: 15, background: "white", overflow: "hidden", position: "relative", boxSizing: "border-box", padding: "14px 16px", display: "flex", flexDirection: "column" }}>
      <span style={{ fontFamily: f, fontSize: 14, fontWeight: 700, color: "#111827", letterSpacing: -0.4, marginBottom: 4 }}>Основы типографики</span>
      <span style={{ fontFamily: f, fontSize: 10, fontWeight: 600, color: "#374151", marginBottom: 5 }}>Выбор шрифта</span>
      <span style={{ fontFamily: f, fontSize: 8.5, color: "#9ca3af", lineHeight: 1.6, marginBottom: 10 }}>Шрифт задаёт характер и тон всего интерфейса. Не более 2–3 гарнитур.</span>
      <span style={{ fontFamily: f, fontSize: 10, fontWeight: 600, color: "#374151", marginBottom: 5 }}>Размеры и отступы</span>
      <span style={{ fontFamily: f, fontSize: 8.5, color: "#9ca3af", lineHeight: 1.6 }}>Правильные интервалы улучшают читаемость и ритм страницы.</span>
    </div>
  );
}

// ── Q2A: заголовок того же размера что и текст — не выделяется (bad) ───────
export function CQHierCompare2A() {
  return (
    <div style={{ width: 260, height: 180, borderRadius: 15, background: "white", overflow: "hidden", position: "relative", boxSizing: "border-box", padding: "16px 18px", display: "flex", flexDirection: "column" }}>
      <span style={{ fontFamily: f, fontSize: 9, fontWeight: 400, color: "#9ca3af", marginBottom: 8 }}>Последние новости</span>
      <div style={{ height: 1, background: "#f3f4f6", marginBottom: 8 }} />
      {["Обновление дизайн-системы", "Новые компоненты для форм", "Гайдлайны по типографике"].map((t) => (
        <div key={t} style={{ display: "flex", alignItems: "center", gap: 6, marginBottom: 7 }}>
          <div style={{ width: 3, height: 3, borderRadius: "50%", background: "#d1d5db", flexShrink: 0 }} />
          <span style={{ fontFamily: f, fontSize: 9, color: "#9ca3af" }}>{t}</span>
        </div>
      ))}
    </div>
  );
}

// ── Q2B: крупный заголовок — чёткая иерархия (good, correct=Б) ────────────
export function CQHierCompare2B() {
  return (
    <div style={{ width: 260, height: 180, borderRadius: 15, background: "white", overflow: "hidden", position: "relative", boxSizing: "border-box", padding: "16px 18px", display: "flex", flexDirection: "column" }}>
      <span style={{ fontFamily: f, fontSize: 15, fontWeight: 700, color: "#111827", letterSpacing: -0.4, marginBottom: 10 }}>Последние новости</span>
      <div style={{ height: 1, background: "#f3f4f6", marginBottom: 10 }} />
      {["Обновление дизайн-системы", "Новые компоненты для форм", "Гайдлайны по типографике"].map((t) => (
        <div key={t} style={{ display: "flex", alignItems: "center", gap: 6, marginBottom: 7 }}>
          <div style={{ width: 4, height: 4, borderRadius: "50%", background: "#3b82f6", flexShrink: 0 }} />
          <span style={{ fontFamily: f, fontSize: 9, color: "#374151" }}>{t}</span>
        </div>
      ))}
    </div>
  );
}

// ── Q3A: несколько одинаковых CTA — нет главного действия (bad) ───────────
export function CQHierCompare3A() {
  return (
    <div style={{ width: 260, height: 180, borderRadius: 15, background: "white", overflow: "hidden", position: "relative", boxSizing: "border-box", padding: "14px 16px", display: "flex", flexDirection: "column", gap: 8 }}>
      <span style={{ fontFamily: f, fontSize: 9, color: "#9ca3af", marginBottom: 2 }}>Что хотите сделать?</span>
      {["Продолжить", "Сохранить черновик", "Посмотреть позже"].map((label) => (
        <div key={label} style={{ background: "#f3f4f6", borderRadius: 8, padding: "10px 0", display: "flex", alignItems: "center", justifyContent: "center" }}>
          <span style={{ fontFamily: f, fontSize: 10, color: "#6b7280" }}>{label}</span>
        </div>
      ))}
    </div>
  );
}

// ── Q3B: одна главная кнопка + второстепенные — всё понятно (good, correct=Б)
export function CQHierCompare3B() {
  return (
    <div style={{ width: 260, height: 180, borderRadius: 15, background: "white", overflow: "hidden", position: "relative", boxSizing: "border-box", padding: "14px 16px", display: "flex", flexDirection: "column", gap: 8 }}>
      <span style={{ fontFamily: f, fontSize: 9, color: "#6b7280", marginBottom: 2 }}>Что хотите сделать?</span>
      <div style={{ background: "#3b82f6", borderRadius: 8, padding: "11px 0", display: "flex", alignItems: "center", justifyContent: "center" }}>
        <span style={{ fontFamily: f, fontSize: 10, fontWeight: 600, color: "white" }}>Продолжить</span>
      </div>
      <div style={{ background: "#f3f4f6", borderRadius: 8, padding: "9px 0", display: "flex", alignItems: "center", justifyContent: "center" }}>
        <span style={{ fontFamily: f, fontSize: 9, color: "#374151" }}>Сохранить черновик</span>
      </div>
      <div style={{ display: "flex", alignItems: "center", justifyContent: "center" }}>
        <span style={{ fontFamily: f, fontSize: 9, color: "#9ca3af" }}>Посмотреть позже</span>
      </div>
    </div>
  );
}

// ── Single Choice — Q4 ───────────────────────────────────────────────────────
export function CQHierSingle1() {
  return (
    <div style={{ position: "relative", background: "white", height: 231, width: 186, overflow: "hidden", paddingTop: 10, paddingLeft: 10, paddingRight: 10, borderRadius: 15 }}>
      <Container23 />
    </div>
  );
}

// ── Single Choice — Q5 ───────────────────────────────────────────────────────
export function CQHierSingle2() {
  return (
    <div style={{ position: "relative", background: "white", height: 231, width: 186, overflow: "hidden", paddingTop: 10, paddingLeft: 10, paddingRight: 10, borderRadius: 15 }}>
      <Container25 />
    </div>
  );
}

// ── Single Choice — Q6 ───────────────────────────────────────────────────────
export function CQHierSingle3() {
  return (
    <div style={{ position: "relative", background: "white", height: 231, width: 186, overflow: "hidden", paddingTop: 10, paddingLeft: 10, paddingRight: 10, borderRadius: 15 }}>
      <Container26 />
    </div>
  );
}

// ── Multi Choice — Q7 ────────────────────────────────────────────────────────
export function CQHierMulti1() {
  return (
    <div style={{ position: "relative", background: "white", height: 231, width: 186, overflow: "hidden", paddingTop: 10, paddingLeft: 10, paddingRight: 10, borderRadius: 15 }}>
      <Container27 />
    </div>
  );
}

// ── Multi Choice — Q8 ────────────────────────────────────────────────────────
export function CQHierMulti2() {
  return (
    <div style={{ position: "relative", background: "white", height: 231, width: 186, overflow: "hidden", paddingTop: 10, paddingLeft: 10, paddingRight: 10, borderRadius: 15 }}>
      <Container30 />
    </div>
  );
}

// ── Multi Choice — Q9 ────────────────────────────────────────────────────────
export function CQHierMulti3() {
  return (
    <div style={{ position: "relative", background: "white", height: 231, width: 186, overflow: "hidden", paddingTop: 10, paddingLeft: 10, paddingRight: 10, borderRadius: 15 }}>
      <Container31 />
    </div>
  );
}

// ── Connect / Matching Q10 — элемент → уровень важности ─────────────────────
/** Крупный заголовок → Высокая важность */
export function CQHierConn1A() { return <HierarchyQuiz13Card />; }
/** Основная кнопка (blue) → Средняя важность */
export function CQHierConn1B() { return <HierarchyQuiz13Card1 />; }
/** Мелкая подпись → Низкая важность */
export function CQHierConn1C() { return <HierarchyQuiz13Card2 />; }

// ── Connect / Matching Q11 — элемент → функция ──────────────────────────────
/** Заголовок страницы → Привлекает внимание */
export function CQHierConn2A() { return <HierarchyQuiz14Card />; }
/** Основная кнопка → Основное действие */
export function CQHierConn2B() { return <HierarchyQuiz14Card1 />; }
/** Мелкая подпись → Дополнительная информация */
export function CQHierConn2C() { return <HierarchyQuiz14Card2 />; }

// ── Connect / Matching Q12 — проблема → принцип UX ──────────────────────────
/** Элементы одного размера → Визуальная иерархия */
export function CQHierConn3A() { return <HierarchyQuiz15Card />; }
/** Кнопка не выделяется → Контраст */
export function CQHierConn3B() { return <HierarchyQuiz15Card1 />; }
/** Длинный текст без структуры → Читаемость */
export function CQHierConn3C() { return <HierarchyQuiz15Card2 />; }

export default function Component() {
  return (
    <div className="relative size-full" data-name="Иерархия">
      <p className="absolute font-['Inter:Regular',sans-serif] font-normal leading-[30px] left-0 not-italic text-[#101828] text-[20px] top-0 tracking-[-0.4492px] whitespace-nowrap">Compare UI</p>
      <p className="absolute font-['Inter:Regular',sans-serif] font-normal leading-[15px] left-0 not-italic text-[#8e9199] text-[12px] top-[42px] tracking-[-0.15px] w-[1280px]">Сравнение двух вариантов интерфейса</p>
      <p className="absolute font-['Inter:Regular',sans-serif] font-normal leading-[14px] left-0 not-italic text-[#8e9199] text-[11px] top-[97.5px] tracking-[-0.14px] whitespace-nowrap">1. Где структура понятна?</p>
      <Paragraph />
      <HierarchyQuiz1VariantA />
      <Paragraph5 />
      <HierarchyQuiz1VariantB />
      <p className="absolute font-['Inter:Regular',sans-serif] font-normal leading-[14px] left-0 not-italic text-[#8e9199] text-[11px] top-[402.5px] tracking-[-0.14px] whitespace-nowrap">2. Где заголовок выделяется?</p>
      <Paragraph10 />
      <HierarchyQuiz2VariantA />
      <Paragraph14 />
      <HierarchyQuiz2VariantB />
      <p className="absolute font-['Inter:Regular',sans-serif] font-normal leading-[14px] left-0 not-italic text-[#8e9199] text-[11px] top-[707.5px] tracking-[-0.14px] whitespace-nowrap">3. Где главное действие заметно?</p>
      <Paragraph18 />
      <HierarchyQuiz3VariantA />
      <Paragraph24 />
      <HierarchyQuiz3VariantB />
      <p className="absolute font-['Inter:Regular',sans-serif] font-normal leading-[14px] left-0 not-italic text-[#8e9199] text-[11px] top-[1012.5px] tracking-[-0.14px] whitespace-nowrap">4. Где иерархия элементов понятна?</p>
      <Paragraph30 />
      <HierarchyQuiz4VariantA />
      <Paragraph35 />
      <HierarchyQuiz4VariantB />
      <p className="absolute font-['Inter:Regular',sans-serif] font-normal leading-[30px] left-[114px] not-italic text-[#101828] text-[20px] top-[1450px] tracking-[-0.4492px] whitespace-nowrap">Single Choice</p>
      <p className="absolute font-['Inter:Regular',sans-serif] font-normal leading-[15px] left-[114px] not-italic text-[#8e9199] text-[12px] top-[1492px] tracking-[-0.15px] w-[1280px]">Выбор одного варианта ответа</p>
      <Paragraph41 />
      <HierarchyQuiz />
      <Paragraph45 />
      <HierarchyQuiz1 />
      <Paragraph49 />
      <HierarchyQuiz2 />
      <Paragraph52 />
      <HierarchyQuiz3 />
      <p className="absolute font-['Inter:Regular',sans-serif] font-normal leading-[30px] left-[114px] not-italic text-[#101828] text-[20px] top-[2791px] tracking-[-0.4492px] whitespace-nowrap">Multi Choice</p>
      <p className="absolute font-['Inter:Regular',sans-serif] font-normal leading-[15px] left-[114px] not-italic text-[#8e9199] text-[12px] top-[2833px] tracking-[-0.15px] w-[1280px]">Выбор нескольких вариантов ответа</p>
      <Paragraph56 />
      <HierarchyQuiz4 />
      <Paragraph60 />
      <HierarchyQuiz5 />
      <Paragraph64 />
      <HierarchyQuiz6 />
      <Paragraph68 />
      <HierarchyQuiz7 />
      <p className="absolute font-['Inter:Regular',sans-serif] font-normal leading-[30px] left-[114px] not-italic text-[#101828] text-[20px] top-[4132px] tracking-[-0.4492px] whitespace-nowrap">Connect</p>
      <p className="absolute font-['Inter:Regular',sans-serif] font-normal leading-[15px] left-[114px] not-italic text-[#8e9199] text-[12px] top-[4174px] tracking-[-0.15px] w-[1280px]">Соединить элементы</p>
      <Paragraph73 />
      <Container37 />
      <Paragraph77 />
      <Container39 />
      <Paragraph81 />
      <Container41 />
      <Paragraph87 />
      <Container45 />
    </div>
  );
}