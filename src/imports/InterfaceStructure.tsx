import React from "react";
import imgImageWithFallback from "figma:asset/6f7e376dde074dfceb9b836cc0f7afe457acee6c.png";

function Paragraph() {
  return (
    <div className="absolute h-[21px] left-0 top-[8px] w-[9.297px]" data-name="Paragraph">
      <p className="absolute font-['Inter:Regular',sans-serif] font-normal leading-[21px] left-0 not-italic text-[#364146] text-[14px] top-0 tracking-[-0.17px] whitespace-nowrap">A</p>
    </div>
  );
}

function Container1() {
  return <div className="absolute h-[211px] left-[10px] top-[10px] w-[166px]" data-name="Container" />;
}

function Paragraph1() {
  return (
    <div className="absolute h-[12px] left-[20px] top-[15px] w-[39.969px]" data-name="Paragraph">
      <p className="absolute font-['Inter:Regular',sans-serif] font-normal leading-[12px] left-0 not-italic text-[#101828] text-[8px] top-0 tracking-[-0.1px] whitespace-nowrap">Заголовок</p>
    </div>
  );
}

function Paragraph2() {
  return (
    <div className="h-[9px] relative shrink-0 w-full" data-name="Paragraph">
      <p className="absolute font-['Inter:Regular',sans-serif] font-normal leading-[9px] left-0 not-italic text-[6px] text-white top-[-0.5px] tracking-[-0.08px] whitespace-nowrap">Кнопка</p>
    </div>
  );
}

function Container2() {
  return (
    <div className="absolute bg-[#3b82f6] content-stretch flex flex-col h-[17px] items-start left-[134.42px] pt-[4px] px-[8px] rounded-[4px] top-[50px] w-[36.578px]" data-name="Container">
      <Paragraph2 />
    </div>
  );
}

function Paragraph3() {
  return (
    <div className="absolute h-[9px] left-[30px] top-[182px] w-[16.047px]" data-name="Paragraph">
      <p className="absolute font-['Inter:Regular',sans-serif] font-normal leading-[9px] left-0 not-italic text-[#8e9199] text-[6px] top-[-0.5px] tracking-[-0.08px] whitespace-nowrap">Текст</p>
    </div>
  );
}

function Container3() {
  return <div className="absolute bg-[#f7f8fc] h-[30px] left-[90px] rounded-[4px] top-[80px] w-[50px]" data-name="Container" />;
}

function Lesson3Quiz1VariantA() {
  return (
    <div className="absolute bg-white h-[231px] left-0 overflow-clip rounded-[14.99px] top-0 w-[186px]" data-name="Lesson3Quiz1VariantA">
      <Container1 />
      <Paragraph1 />
      <Container2 />
      <Paragraph3 />
      <Container3 />
    </div>
  );
}

function Container() {
  return (
    <div className="absolute h-[231px] left-0 top-[208px] w-[207.297px]" data-name="Container">
      <Paragraph />
      <Lesson3Quiz1VariantA />
    </div>
  );
}

function Paragraph4() {
  return (
    <div className="absolute h-[21px] left-0 top-[8px] w-[8.945px]" data-name="Paragraph">
      <p className="absolute font-['Inter:Regular',sans-serif] font-normal leading-[21px] left-0 not-italic text-[#364146] text-[14px] top-0 tracking-[-0.17px] whitespace-nowrap">B</p>
    </div>
  );
}

function Paragraph5() {
  return (
    <div className="h-[12px] relative shrink-0 w-full" data-name="Paragraph">
      <p className="absolute font-['Inter:Regular',sans-serif] font-normal leading-[12px] left-0 not-italic text-[#101828] text-[8px] top-0 tracking-[-0.1px] whitespace-nowrap">Заголовок</p>
    </div>
  );
}

function Paragraph6() {
  return (
    <div className="content-stretch flex h-[8px] items-start relative shrink-0 w-full" data-name="Paragraph">
      <p className="flex-[1_0_0] font-['Inter:Regular',sans-serif] font-normal leading-[8px] min-h-px min-w-px not-italic relative text-[#8e9199] text-[6px] tracking-[-0.08px]">Описание раздела</p>
    </div>
  );
}

function Container6() {
  return (
    <div className="bg-[#f7f8fc] h-[40px] relative rounded-[6px] shrink-0 w-[166px]" data-name="Container">
      <div className="bg-clip-padding border-0 border-[transparent] border-solid content-stretch flex flex-col gap-[4px] items-start pt-[8px] px-[8px] relative size-full">
        <Paragraph5 />
        <Paragraph6 />
      </div>
    </div>
  );
}

function Paragraph7() {
  return (
    <div className="content-stretch flex h-[8px] items-start relative shrink-0 w-full" data-name="Paragraph">
      <p className="flex-[1_0_0] font-['Inter:Regular',sans-serif] font-normal leading-[8px] min-h-px min-w-px not-italic relative text-[#364146] text-[6px] tracking-[-0.08px]">Контент</p>
    </div>
  );
}

function Container7() {
  return (
    <div className="bg-[#f7f8fc] h-[24px] relative rounded-[6px] shrink-0 w-[166px]" data-name="Container">
      <div className="bg-clip-padding border-0 border-[transparent] border-solid content-stretch flex flex-col items-start pt-[8px] px-[8px] relative size-full">
        <Paragraph7 />
      </div>
    </div>
  );
}

function Paragraph8() {
  return (
    <div className="h-[12px] relative shrink-0 w-full" data-name="Paragraph">
      <p className="-translate-x-1/2 absolute font-['Inter:Regular',sans-serif] font-normal leading-[12px] left-[71.39px] not-italic text-[8px] text-center text-white top-0 tracking-[-0.1px] whitespace-nowrap">Действие</p>
    </div>
  );
}

function Container8() {
  return (
    <div className="bg-[#3b82f6] h-[24px] relative rounded-[6px] shrink-0 w-[166px]" data-name="Container">
      <div className="bg-clip-padding border-0 border-[transparent] border-solid content-stretch flex flex-col items-start pt-[6px] px-[12px] relative size-full">
        <Paragraph8 />
      </div>
    </div>
  );
}

function Container5() {
  return (
    <div className="content-stretch flex flex-col gap-[8px] h-[211px] items-start relative shrink-0 w-full" data-name="Container">
      <Container6 />
      <Container7 />
      <Container8 />
    </div>
  );
}

function Lesson3Quiz1VariantB() {
  return (
    <div className="absolute bg-white content-stretch flex flex-col h-[231px] items-start left-0 overflow-clip pt-[10px] px-[10px] rounded-[14.99px] top-0 w-[186px]" data-name="Lesson3Quiz1VariantB">
      <Container5 />
    </div>
  );
}

function Container4() {
  return (
    <div className="absolute h-[231px] left-[247.3px] top-[208px] w-[206.945px]" data-name="Container">
      <Paragraph4 />
      <Lesson3Quiz1VariantB />
    </div>
  );
}

function Paragraph9() {
  return (
    <div className="absolute h-[21px] left-0 top-[8px] w-[9.297px]" data-name="Paragraph">
      <p className="absolute font-['Inter:Regular',sans-serif] font-normal leading-[21px] left-0 not-italic text-[#364146] text-[14px] top-0 tracking-[-0.17px] whitespace-nowrap">A</p>
    </div>
  );
}

function Paragraph10() {
  return (
    <div className="absolute h-[13.5px] left-0 top-[51.25px] w-[166px]" data-name="Paragraph">
      <p className="absolute font-['Inter:Regular',sans-serif] font-normal leading-[13.5px] left-0 not-italic text-[#101828] text-[9px] top-[0.5px] tracking-[-0.12px] whitespace-nowrap">Заголовок страницы</p>
    </div>
  );
}

function Paragraph11() {
  return (
    <div className="absolute content-stretch flex h-[9px] items-start left-[30px] top-[90.75px] w-[136px]" data-name="Paragraph">
      <p className="flex-[1_0_0] font-['Inter:Regular',sans-serif] font-normal leading-[9px] min-h-px min-w-px not-italic relative text-[#364146] text-[7px] tracking-[-0.09px]">Описание контента</p>
    </div>
  );
}

function Paragraph12() {
  return (
    <div className="h-[12px] relative shrink-0 w-full" data-name="Paragraph">
      <p className="-translate-x-1/2 absolute font-['Inter:Regular',sans-serif] font-normal leading-[12px] left-[51.27px] not-italic text-[8px] text-center text-white top-0 tracking-[-0.1px] whitespace-nowrap">Кнопка</p>
    </div>
  );
}

function Container11() {
  return (
    <div className="absolute bg-[#3b82f6] content-stretch flex flex-col h-[24px] items-start left-0 pt-[6px] px-[12px] rounded-[6px] top-[135.75px] w-[126px]" data-name="Container">
      <Paragraph12 />
    </div>
  );
}

function Container10() {
  return (
    <div className="h-[211px] relative shrink-0 w-full" data-name="Container">
      <Paragraph10 />
      <Paragraph11 />
      <Container11 />
    </div>
  );
}

function Lesson3Quiz2VariantA() {
  return (
    <div className="absolute bg-white content-stretch flex flex-col h-[231px] items-start left-0 overflow-clip pt-[10px] px-[10px] rounded-[14.99px] top-0 w-[186px]" data-name="Lesson3Quiz2VariantA">
      <Container10 />
    </div>
  );
}

function Container9() {
  return (
    <div className="absolute h-[231px] left-0 top-[525px] w-[207.297px]" data-name="Container">
      <Paragraph9 />
      <Lesson3Quiz2VariantA />
    </div>
  );
}

function Paragraph13() {
  return (
    <div className="absolute h-[21px] left-0 top-[8px] w-[8.945px]" data-name="Paragraph">
      <p className="absolute font-['Inter:Regular',sans-serif] font-normal leading-[21px] left-0 not-italic text-[#364146] text-[14px] top-0 tracking-[-0.17px] whitespace-nowrap">B</p>
    </div>
  );
}

function Paragraph14() {
  return (
    <div className="absolute h-[13.5px] left-[8px] top-[8px] w-[150px]" data-name="Paragraph">
      <p className="absolute font-['Inter:Regular',sans-serif] font-normal leading-[13.5px] left-0 not-italic text-[#101828] text-[9px] top-[0.5px] tracking-[-0.12px] whitespace-nowrap">Заголовок страницы</p>
    </div>
  );
}

function Paragraph15() {
  return (
    <div className="absolute content-stretch flex h-[9px] items-start left-[8px] top-[25.5px] w-[150px]" data-name="Paragraph">
      <p className="flex-[1_0_0] font-['Inter:Regular',sans-serif] font-normal leading-[9px] min-h-px min-w-px not-italic relative text-[#364146] text-[7px] tracking-[-0.09px]">Описание контента</p>
    </div>
  );
}

function Paragraph16() {
  return (
    <div className="h-[10.5px] relative shrink-0 w-full" data-name="Paragraph">
      <p className="-translate-x-1/2 absolute font-['Inter:Regular',sans-serif] font-normal leading-[10.5px] left-[65.48px] not-italic text-[7px] text-center text-white top-0 tracking-[-0.09px] whitespace-nowrap">Кнопка</p>
    </div>
  );
}

function Container15() {
  return (
    <div className="absolute bg-[#3b82f6] content-stretch flex flex-col h-[20.5px] items-start left-[8px] pt-[5px] px-[10px] rounded-[4px] top-[40.5px] w-[150px]" data-name="Container">
      <Paragraph16 />
    </div>
  );
}

function Container14() {
  return (
    <div className="bg-[#f7f8fc] h-[69px] relative rounded-[6px] shrink-0 w-[166px]" data-name="Container">
      <div className="bg-clip-padding border-0 border-[transparent] border-solid relative size-full">
        <Paragraph14 />
        <Paragraph15 />
        <Container15 />
      </div>
    </div>
  );
}

function Container13() {
  return (
    <div className="content-stretch flex flex-col h-[211px] items-start justify-center py-[71px] relative shrink-0 w-full" data-name="Container">
      <Container14 />
    </div>
  );
}

function Lesson3Quiz2VariantB() {
  return (
    <div className="absolute bg-white content-stretch flex flex-col h-[231px] items-start left-0 overflow-clip pt-[10px] px-[10px] rounded-[14.99px] top-0 w-[186px]" data-name="Lesson3Quiz2VariantB">
      <Container13 />
    </div>
  );
}

function Container12() {
  return (
    <div className="absolute h-[231px] left-[247.3px] top-[525px] w-[206.945px]" data-name="Container">
      <Paragraph13 />
      <Lesson3Quiz2VariantB />
    </div>
  );
}

function Paragraph17() {
  return (
    <div className="absolute h-[21px] left-0 top-[8px] w-[9.297px]" data-name="Paragraph">
      <p className="absolute font-['Inter:Regular',sans-serif] font-normal leading-[21px] left-0 not-italic text-[#364146] text-[14px] top-0 tracking-[-0.17px] whitespace-nowrap">A</p>
    </div>
  );
}

function Paragraph18() {
  return (
    <div className="h-[40px] relative shrink-0 w-[166px]" data-name="Paragraph">
      <div className="bg-clip-padding border-0 border-[transparent] border-solid relative size-full">
        <p className="absolute font-['Inter:Regular',sans-serif] font-normal leading-[8px] left-0 not-italic text-[#364146] text-[6px] top-0 tracking-[-0.08px] w-[165px]">Это длинный текст который описывает функционал приложения и содержит информацию для пользователя. Здесь нет разделений на блоки и всё написано одним большим абзацем что делает чтение сложным и неудобным для восприятия информации.</p>
      </div>
    </div>
  );
}

function Container17() {
  return (
    <div className="content-stretch flex flex-col h-[211px] items-start justify-center py-[85.5px] relative shrink-0 w-full" data-name="Container">
      <Paragraph18 />
    </div>
  );
}

function Lesson3Quiz3VariantA() {
  return (
    <div className="absolute bg-white content-stretch flex flex-col h-[231px] items-start left-0 overflow-clip pt-[10px] px-[10px] rounded-[14.99px] top-0 w-[186px]" data-name="Lesson3Quiz3VariantA">
      <Container17 />
    </div>
  );
}

function Container16() {
  return (
    <div className="absolute h-[231px] left-0 top-[842px] w-[207.297px]" data-name="Container">
      <Paragraph17 />
      <Lesson3Quiz3VariantA />
    </div>
  );
}

function Paragraph19() {
  return (
    <div className="absolute h-[21px] left-0 top-[8px] w-[8.945px]" data-name="Paragraph">
      <p className="absolute font-['Inter:Regular',sans-serif] font-normal leading-[21px] left-0 not-italic text-[#364146] text-[14px] top-0 tracking-[-0.17px] whitespace-nowrap">B</p>
    </div>
  );
}

function Paragraph20() {
  return (
    <div className="absolute h-[13.5px] left-0 top-[69px] w-[166px]" data-name="Paragraph">
      <p className="absolute font-['Inter:Regular',sans-serif] font-normal leading-[13.5px] left-0 not-italic text-[#101828] text-[9px] top-[0.5px] tracking-[-0.12px] whitespace-nowrap">Основное</p>
    </div>
  );
}

function Paragraph21() {
  return (
    <div className="absolute content-stretch flex h-[9px] items-start left-0 top-[90.5px] w-[166px]" data-name="Paragraph">
      <p className="flex-[1_0_0] font-['Inter:Regular',sans-serif] font-normal leading-[9px] min-h-px min-w-px not-italic relative text-[#364146] text-[7px] tracking-[-0.09px]">Описание функционала</p>
    </div>
  );
}

function Paragraph22() {
  return (
    <div className="absolute h-[13.5px] left-0 top-[111.5px] w-[166px]" data-name="Paragraph">
      <p className="absolute font-['Inter:Regular',sans-serif] font-normal leading-[13.5px] left-0 not-italic text-[#101828] text-[9px] top-[0.5px] tracking-[-0.12px] whitespace-nowrap">Дополнительно</p>
    </div>
  );
}

function Paragraph23() {
  return (
    <div className="absolute content-stretch flex h-[9px] items-start left-0 top-[133px] w-[166px]" data-name="Paragraph">
      <p className="flex-[1_0_0] font-['Inter:Regular',sans-serif] font-normal leading-[9px] min-h-px min-w-px not-italic relative text-[#364146] text-[7px] tracking-[-0.09px]">Информация для пользователя</p>
    </div>
  );
}

function Container19() {
  return (
    <div className="h-[211px] relative shrink-0 w-full" data-name="Container">
      <Paragraph20 />
      <Paragraph21 />
      <Paragraph22 />
      <Paragraph23 />
    </div>
  );
}

function Lesson3Quiz3VariantB() {
  return (
    <div className="absolute bg-white content-stretch flex flex-col h-[231px] items-start left-0 overflow-clip pt-[10px] px-[10px] rounded-[14.99px] top-0 w-[186px]" data-name="Lesson3Quiz3VariantB">
      <Container19 />
    </div>
  );
}

function Container18() {
  return (
    <div className="absolute h-[231px] left-[247.3px] top-[842px] w-[206.945px]" data-name="Container">
      <Paragraph19 />
      <Lesson3Quiz3VariantB />
    </div>
  );
}

function Paragraph24() {
  return (
    <div className="h-[15px] relative shrink-0 w-[1280px]" data-name="Paragraph">
      <p className="absolute font-['Inter:Regular',sans-serif] font-normal leading-[15px] left-0 not-italic text-[#364146] text-[10px] top-[0.5px] tracking-[-0.13px] whitespace-nowrap">• Расположение элементов на экране</p>
    </div>
  );
}

function Paragraph25() {
  return (
    <div className="h-[15px] relative shrink-0 w-[1280px]" data-name="Paragraph">
      <p className="absolute font-['Inter:Regular',sans-serif] font-normal leading-[15px] left-0 not-italic text-[#364146] text-[10px] top-[0.5px] tracking-[-0.13px] whitespace-nowrap">• Цвет кнопок</p>
    </div>
  );
}

function Paragraph26() {
  return (
    <div className="flex-[1_0_0] min-h-px min-w-px relative w-[1280px]" data-name="Paragraph">
      <p className="absolute font-['Inter:Regular',sans-serif] font-normal leading-[15px] left-0 not-italic text-[#364146] text-[10px] top-[0.5px] tracking-[-0.13px] whitespace-nowrap">• Шрифт</p>
    </div>
  );
}

function Container20() {
  return (
    <div className="absolute content-stretch flex flex-col gap-[8px] h-[61px] items-start left-0 top-[1512px] w-[1280px]" data-name="Container">
      <Paragraph24 />
      <Paragraph25 />
      <Paragraph26 />
    </div>
  );
}

function ImageWithFallback() {
  return (
    <div className="h-[175px] relative shrink-0 w-full" data-name="ImageWithFallback">
      <img alt="" className="absolute inset-0 max-w-none object-cover pointer-events-none size-full" src={imgImageWithFallback} />
    </div>
  );
}

function Container22() {
  return (
    <div className="h-[175px] relative rounded-[8.75px] shrink-0 w-[153.125px]" data-name="Container">
      <div className="bg-clip-padding border-0 border-[transparent] border-solid content-stretch flex flex-col items-start overflow-clip relative rounded-[inherit] size-full">
        <ImageWithFallback />
      </div>
    </div>
  );
}

function Container21() {
  return (
    <div className="content-stretch flex flex-col h-[211px] items-start justify-center py-[25.5px] relative shrink-0" data-name="Container">
      <Container22 />
    </div>
  );
}

function Lesson3Quiz() {
  return (
    <div className="absolute bg-white content-stretch flex flex-col h-[231px] items-center justify-center left-0 overflow-clip rounded-[14.99px] top-[1265px] w-[186px]" data-name="Lesson3Quiz4">
      <Container21 />
    </div>
  );
}

function Paragraph27() {
  return (
    <div className="h-[15px] relative shrink-0 w-[1280px]" data-name="Paragraph">
      <p className="absolute font-['Inter:Regular',sans-serif] font-normal leading-[15px] left-0 not-italic text-[#364146] text-[10px] top-[0.5px] tracking-[-0.13px] whitespace-nowrap">• Отступы</p>
    </div>
  );
}

function Paragraph28() {
  return (
    <div className="h-[15px] relative shrink-0 w-[1280px]" data-name="Paragraph">
      <p className="absolute font-['Inter:Regular',sans-serif] font-normal leading-[15px] left-0 not-italic text-[#364146] text-[10px] top-[0.5px] tracking-[-0.13px] whitespace-nowrap">• Случайное расположение</p>
    </div>
  );
}

function Paragraph29() {
  return (
    <div className="flex-[1_0_0] min-h-px min-w-px relative w-[1280px]" data-name="Paragraph">
      <p className="absolute font-['Inter:Regular',sans-serif] font-normal leading-[15px] left-0 not-italic text-[#364146] text-[10px] top-[0.5px] tracking-[-0.13px] whitespace-nowrap">• Разные цвета</p>
    </div>
  );
}

function Container23() {
  return (
    <div className="absolute content-stretch flex flex-col gap-[8px] h-[61px] items-start left-0 top-[1906px] w-[1280px]" data-name="Container">
      <Paragraph27 />
      <Paragraph28 />
      <Paragraph29 />
    </div>
  );
}

function Paragraph30() {
  return (
    <div className="h-[10.5px] relative shrink-0 w-full" data-name="Paragraph">
      <p className="absolute font-['Inter:Regular',sans-serif] font-normal leading-[10.5px] left-0 not-italic text-[#364146] text-[7px] top-0 tracking-[-0.09px] whitespace-nowrap">Блок 1</p>
    </div>
  );
}

function Container25() {
  return (
    <div className="bg-[#f7f8fc] h-[26.5px] relative rounded-[6px] shrink-0 w-[166px]" data-name="Container">
      <div className="bg-clip-padding border-0 border-[transparent] border-solid content-stretch flex flex-col items-start pt-[8px] px-[8px] relative size-full">
        <Paragraph30 />
      </div>
    </div>
  );
}

function Paragraph31() {
  return (
    <div className="h-[10.5px] relative shrink-0 w-full" data-name="Paragraph">
      <p className="absolute font-['Inter:Regular',sans-serif] font-normal leading-[10.5px] left-0 not-italic text-[#364146] text-[7px] top-0 tracking-[-0.09px] whitespace-nowrap">Блок 2</p>
    </div>
  );
}

function Container26() {
  return (
    <div className="bg-[#f7f8fc] h-[26.5px] relative rounded-[6px] shrink-0 w-[166px]" data-name="Container">
      <div className="bg-clip-padding border-0 border-[transparent] border-solid content-stretch flex flex-col items-start pt-[8px] px-[8px] relative size-full">
        <Paragraph31 />
      </div>
    </div>
  );
}

function Paragraph32() {
  return (
    <div className="h-[10.5px] relative shrink-0 w-full" data-name="Paragraph">
      <p className="absolute font-['Inter:Regular',sans-serif] font-normal leading-[10.5px] left-0 not-italic text-[#364146] text-[7px] top-0 tracking-[-0.09px] whitespace-nowrap">Блок 3</p>
    </div>
  );
}

function Container27() {
  return (
    <div className="bg-[#f7f8fc] h-[26.5px] relative rounded-[6px] shrink-0 w-[166px]" data-name="Container">
      <div className="bg-clip-padding border-0 border-[transparent] border-solid content-stretch flex flex-col items-start pt-[8px] px-[8px] relative size-full">
        <Paragraph32 />
      </div>
    </div>
  );
}

function Container24() {
  return (
    <div className="content-stretch flex flex-col gap-[8px] h-[211px] items-start justify-center py-[57.75px] relative shrink-0 w-full" data-name="Container">
      <Container25 />
      <Container26 />
      <Container27 />
    </div>
  );
}

function Lesson3Quiz1() {
  return (
    <div className="absolute bg-white content-stretch flex flex-col h-[231px] items-start left-0 overflow-clip pt-[10px] px-[10px] rounded-[14.99px] top-[1659px] w-[186px]" data-name="Lesson3Quiz5">
      <Container24 />
    </div>
  );
}

function Paragraph33() {
  return (
    <div className="h-[15px] relative shrink-0 w-[1280px]" data-name="Paragraph">
      <p className="absolute font-['Inter:Regular',sans-serif] font-normal leading-[15px] left-0 not-italic text-[#364146] text-[10px] top-[0.5px] tracking-[-0.13px] whitespace-nowrap">• Группировка элементов</p>
    </div>
  );
}

function Paragraph34() {
  return (
    <div className="h-[15px] relative shrink-0 w-[1280px]" data-name="Paragraph">
      <p className="absolute font-['Inter:Regular',sans-serif] font-normal leading-[15px] left-0 not-italic text-[#364146] text-[10px] top-[0.5px] tracking-[-0.13px] whitespace-nowrap">• Много текста</p>
    </div>
  );
}

function Paragraph35() {
  return (
    <div className="flex-[1_0_0] min-h-px min-w-px relative w-[1280px]" data-name="Paragraph">
      <p className="absolute font-['Inter:Regular',sans-serif] font-normal leading-[15px] left-0 not-italic text-[#364146] text-[10px] top-[0.5px] tracking-[-0.13px] whitespace-nowrap">• Случайные блоки</p>
    </div>
  );
}

function Container28() {
  return (
    <div className="absolute content-stretch flex flex-col gap-[8px] h-[61px] items-start left-0 top-[2300px] w-[1280px]" data-name="Container">
      <Paragraph33 />
      <Paragraph34 />
      <Paragraph35 />
    </div>
  );
}

function Paragraph36() {
  return (
    <div className="absolute h-[12px] left-[8px] top-[8px] w-[150px]" data-name="Paragraph">
      <p className="absolute font-['Inter:Regular',sans-serif] font-normal leading-[12px] left-0 not-italic text-[#101828] text-[8px] top-0 tracking-[-0.1px] whitespace-nowrap">Группа элементов</p>
    </div>
  );
}

function Paragraph37() {
  return (
    <div className="absolute content-stretch flex h-[8px] items-start left-[8px] top-[24px] w-[150px]" data-name="Paragraph">
      <p className="flex-[1_0_0] font-['Inter:Regular',sans-serif] font-normal leading-[8px] min-h-px min-w-px not-italic relative text-[#8e9199] text-[6px] tracking-[-0.08px]">Текст и кнопка в одном блоке</p>
    </div>
  );
}

function Paragraph38() {
  return (
    <div className="h-[9px] relative shrink-0 w-full" data-name="Paragraph">
      <p className="-translate-x-1/2 absolute font-['Inter:Regular',sans-serif] font-normal leading-[9px] left-[67.06px] not-italic text-[6px] text-center text-white top-[-0.5px] tracking-[-0.08px] whitespace-nowrap">Действие</p>
    </div>
  );
}

function Container31() {
  return (
    <div className="absolute bg-[#3b82f6] content-stretch flex flex-col h-[17px] items-start left-[8px] pt-[4px] px-[8px] rounded-[4px] top-[38px] w-[150px]" data-name="Container">
      <Paragraph38 />
    </div>
  );
}

function Container30() {
  return (
    <div className="bg-[#f7f8fc] h-[63px] relative rounded-[6px] shrink-0 w-[166px]" data-name="Container">
      <div className="bg-clip-padding border-0 border-[transparent] border-solid relative size-full">
        <Paragraph36 />
        <Paragraph37 />
        <Container31 />
      </div>
    </div>
  );
}

function Container29() {
  return (
    <div className="content-stretch flex flex-col h-[211px] items-start justify-center py-[74px] relative shrink-0 w-full" data-name="Container">
      <Container30 />
    </div>
  );
}

function Lesson3Quiz2() {
  return (
    <div className="absolute bg-white content-stretch flex flex-col h-[231px] items-start left-0 overflow-clip pt-[10px] px-[10px] rounded-[14.99px] top-[2053px] w-[186px]" data-name="Lesson3Quiz6">
      <Container29 />
    </div>
  );
}

function Paragraph39() {
  return (
    <div className="h-[15px] relative shrink-0 w-[1280px]" data-name="Paragraph">
      <p className="absolute font-['Inter:Regular',sans-serif] font-normal leading-[15px] left-0 not-italic text-[#364146] text-[10px] top-[0.5px] tracking-[-0.13px] whitespace-nowrap">• Заголовки</p>
    </div>
  );
}

function Paragraph40() {
  return (
    <div className="h-[15px] relative shrink-0 w-[1280px]" data-name="Paragraph">
      <p className="absolute font-['Inter:Regular',sans-serif] font-normal leading-[15px] left-0 not-italic text-[#364146] text-[10px] top-[0.5px] tracking-[-0.13px] whitespace-nowrap">• Подзаголовки</p>
    </div>
  );
}

function Paragraph41() {
  return (
    <div className="h-[15px] relative shrink-0 w-[1280px]" data-name="Paragraph">
      <p className="absolute font-['Inter:Regular',sans-serif] font-normal leading-[15px] left-0 not-italic text-[#364146] text-[10px] top-[0.5px] tracking-[-0.13px] whitespace-nowrap">• Сплошной текст</p>
    </div>
  );
}

function Paragraph42() {
  return (
    <div className="flex-[1_0_0] min-h-px min-w-px relative w-[1280px]" data-name="Paragraph">
      <p className="absolute font-['Inter:Regular',sans-serif] font-normal leading-[15px] left-0 not-italic text-[#364146] text-[10px] top-[0.5px] tracking-[-0.13px] whitespace-nowrap">• Разделение на блоки</p>
    </div>
  );
}

function Container32() {
  return (
    <div className="absolute content-stretch flex flex-col gap-[8px] h-[84px] items-start left-0 top-[2800px] w-[1280px]" data-name="Container">
      <Paragraph39 />
      <Paragraph40 />
      <Paragraph41 />
      <Paragraph42 />
    </div>
  );
}

function Paragraph43() {
  return (
    <div className="h-[13.5px] relative shrink-0 w-[166px]" data-name="Paragraph">
      <div className="bg-clip-padding border-0 border-[transparent] border-solid relative size-full">
        <p className="absolute font-['Inter:Regular',sans-serif] font-normal leading-[13.5px] left-0 not-italic text-[#101828] text-[9px] top-[0.5px] tracking-[-0.12px] whitespace-nowrap">Главный раздел</p>
      </div>
    </div>
  );
}

function Paragraph44() {
  return (
    <div className="h-[10.5px] relative shrink-0 w-[166px]" data-name="Paragraph">
      <div className="bg-clip-padding border-0 border-[transparent] border-solid relative size-full">
        <p className="absolute font-['Inter:Regular',sans-serif] font-normal leading-[10.5px] left-0 not-italic text-[#364146] text-[7px] top-0 tracking-[-0.09px] whitespace-nowrap">Подраздел</p>
      </div>
    </div>
  );
}

function Paragraph45() {
  return (
    <div className="h-[9px] relative shrink-0 w-full" data-name="Paragraph">
      <p className="absolute font-['Inter:Regular',sans-serif] font-normal leading-[9px] left-0 not-italic text-[#8e9199] text-[6px] top-[-0.5px] tracking-[-0.08px] whitespace-nowrap">Блок контента</p>
    </div>
  );
}

function Container34() {
  return (
    <div className="bg-[#f7f8fc] h-[21px] relative rounded-[4px] shrink-0 w-[166px]" data-name="Container">
      <div className="bg-clip-padding border-0 border-[transparent] border-solid content-stretch flex flex-col items-start pt-[6px] px-[6px] relative size-full">
        <Paragraph45 />
      </div>
    </div>
  );
}

function Container33() {
  return (
    <div className="content-stretch flex flex-col gap-[8px] h-[211px] items-start justify-center py-[75px] relative shrink-0 w-full" data-name="Container">
      <Paragraph43 />
      <Paragraph44 />
      <Container34 />
    </div>
  );
}

function Lesson3Quiz3() {
  return (
    <div className="absolute bg-white content-stretch flex flex-col h-[231px] items-start left-0 overflow-clip pt-[10px] px-[10px] rounded-[14.99px] top-[2553px] w-[186px]" data-name="Lesson3Quiz7">
      <Container33 />
    </div>
  );
}

function Paragraph46() {
  return (
    <div className="h-[15px] relative shrink-0 w-[1280px]" data-name="Paragraph">
      <p className="absolute font-['Inter:Regular',sans-serif] font-normal leading-[15px] left-0 not-italic text-[#364146] text-[10px] top-[0.5px] tracking-[-0.13px] whitespace-nowrap">• Отступы</p>
    </div>
  );
}

function Paragraph47() {
  return (
    <div className="h-[15px] relative shrink-0 w-[1280px]" data-name="Paragraph">
      <p className="absolute font-['Inter:Regular',sans-serif] font-normal leading-[15px] left-0 not-italic text-[#364146] text-[10px] top-[0.5px] tracking-[-0.13px] whitespace-nowrap">• Выравнивание</p>
    </div>
  );
}

function Paragraph48() {
  return (
    <div className="h-[15px] relative shrink-0 w-[1280px]" data-name="Paragraph">
      <p className="absolute font-['Inter:Regular',sans-serif] font-normal leading-[15px] left-0 not-italic text-[#364146] text-[10px] top-[0.5px] tracking-[-0.13px] whitespace-nowrap">• Случайные элементы</p>
    </div>
  );
}

function Paragraph49() {
  return (
    <div className="flex-[1_0_0] min-h-px min-w-px relative w-[1280px]" data-name="Paragraph">
      <p className="absolute font-['Inter:Regular',sans-serif] font-normal leading-[15px] left-0 not-italic text-[#364146] text-[10px] top-[0.5px] tracking-[-0.13px] whitespace-nowrap">• Группировка</p>
    </div>
  );
}

function Container35() {
  return (
    <div className="absolute content-stretch flex flex-col gap-[8px] h-[84px] items-start left-0 top-[3217px] w-[1280px]" data-name="Container">
      <Paragraph46 />
      <Paragraph47 />
      <Paragraph48 />
      <Paragraph49 />
    </div>
  );
}

function Paragraph50() {
  return (
    <div className="h-[9px] relative shrink-0 w-[2.711px]" data-name="Paragraph">
      <div className="bg-clip-padding border-0 border-[transparent] border-solid relative size-full">
        <p className="absolute font-['Inter:Regular',sans-serif] font-normal leading-[9px] left-0 not-italic text-[#364146] text-[6px] top-[-0.5px] tracking-[-0.08px] whitespace-nowrap">1</p>
      </div>
    </div>
  );
}

function Container38() {
  return (
    <div className="bg-[#f7f8fc] h-[40px] relative rounded-[4px] shrink-0 w-[50px]" data-name="Container">
      <div aria-hidden="true" className="absolute border-[#3b82f6] border-l-2 border-solid inset-0 pointer-events-none rounded-[4px]" />
      <div className="bg-clip-padding border-0 border-[transparent] border-solid content-stretch flex items-center justify-center pl-[24.641px] pr-[22.648px] relative size-full">
        <Paragraph50 />
      </div>
    </div>
  );
}

function Paragraph51() {
  return (
    <div className="h-[9px] relative shrink-0 w-[3.555px]" data-name="Paragraph">
      <div className="bg-clip-padding border-0 border-[transparent] border-solid relative size-full">
        <p className="absolute font-['Inter:Regular',sans-serif] font-normal leading-[9px] left-0 not-italic text-[#364146] text-[6px] top-[-0.5px] tracking-[-0.08px] whitespace-nowrap">2</p>
      </div>
    </div>
  );
}

function Container39() {
  return (
    <div className="bg-[#f7f8fc] h-[40px] relative rounded-[4px] shrink-0 w-[50px]" data-name="Container">
      <div aria-hidden="true" className="absolute border-[#3b82f6] border-l-2 border-solid inset-0 pointer-events-none rounded-[4px]" />
      <div className="bg-clip-padding border-0 border-[transparent] border-solid content-stretch flex items-center justify-center pl-[24.219px] pr-[22.227px] relative size-full">
        <Paragraph51 />
      </div>
    </div>
  );
}

function Container37() {
  return (
    <div className="h-[40px] relative shrink-0 w-[166px]" data-name="Container">
      <div className="bg-clip-padding border-0 border-[transparent] border-solid content-stretch flex gap-[6px] items-start relative size-full">
        <Container38 />
        <Container39 />
      </div>
    </div>
  );
}

function Container36() {
  return (
    <div className="content-stretch flex flex-col h-[211px] items-start justify-center py-[85.5px] relative shrink-0 w-full" data-name="Container">
      <Container37 />
    </div>
  );
}

function Lesson3Quiz4() {
  return (
    <div className="absolute bg-white content-stretch flex flex-col h-[231px] items-start left-0 overflow-clip pt-[10px] px-[10px] rounded-[14.99px] top-[2970px] w-[186px]" data-name="Lesson3Quiz8">
      <Container36 />
    </div>
  );
}

function Paragraph52() {
  return (
    <div className="h-[15px] relative shrink-0 w-[1280px]" data-name="Paragraph">
      <p className="absolute font-['Inter:Regular',sans-serif] font-normal leading-[15px] left-0 not-italic text-[#364146] text-[10px] top-[0.5px] tracking-[-0.13px] whitespace-nowrap">• Отсутствие отступов</p>
    </div>
  );
}

function Paragraph53() {
  return (
    <div className="h-[15px] relative shrink-0 w-[1280px]" data-name="Paragraph">
      <p className="absolute font-['Inter:Regular',sans-serif] font-normal leading-[15px] left-0 not-italic text-[#364146] text-[10px] top-[0.5px] tracking-[-0.13px] whitespace-nowrap">• Хаотичное расположение</p>
    </div>
  );
}

function Paragraph54() {
  return (
    <div className="h-[15px] relative shrink-0 w-[1280px]" data-name="Paragraph">
      <p className="absolute font-['Inter:Regular',sans-serif] font-normal leading-[15px] left-0 not-italic text-[#364146] text-[10px] top-[0.5px] tracking-[-0.13px] whitespace-nowrap">• Четкие блоки</p>
    </div>
  );
}

function Paragraph55() {
  return (
    <div className="flex-[1_0_0] min-h-px min-w-px relative w-[1280px]" data-name="Paragraph">
      <p className="absolute font-['Inter:Regular',sans-serif] font-normal leading-[15px] left-0 not-italic text-[#364146] text-[10px] top-[0.5px] tracking-[-0.13px] whitespace-nowrap">• Перегруженность</p>
    </div>
  );
}

function Container40() {
  return (
    <div className="absolute content-stretch flex flex-col gap-[8px] h-[84px] items-start left-0 top-[3634px] w-[1280px]" data-name="Container">
      <Paragraph52 />
      <Paragraph53 />
      <Paragraph54 />
      <Paragraph55 />
    </div>
  );
}

function Paragraph56() {
  return (
    <div className="h-[7.5px] relative shrink-0 w-full" data-name="Paragraph">
      <p className="absolute font-['Inter:Regular',sans-serif] font-normal leading-[7.5px] left-0 not-italic text-[#364146] text-[5px] top-[-0.5px] tracking-[-0.07px] whitespace-nowrap">Элемент 1</p>
    </div>
  );
}

function Container42() {
  return (
    <div className="bg-[#f7f8fc] h-[13.5px] relative rounded-[2px] shrink-0 w-[166px]" data-name="Container">
      <div className="bg-clip-padding border-0 border-[transparent] border-solid content-stretch flex flex-col items-start pt-[3px] px-[3px] relative size-full">
        <Paragraph56 />
      </div>
    </div>
  );
}

function Paragraph57() {
  return (
    <div className="h-[7.5px] relative shrink-0 w-full" data-name="Paragraph">
      <p className="absolute font-['Inter:Regular',sans-serif] font-normal leading-[7.5px] left-0 not-italic text-[#364146] text-[5px] top-[-0.5px] tracking-[-0.07px] whitespace-nowrap">Элемент 2</p>
    </div>
  );
}

function Container43() {
  return (
    <div className="bg-[#f7f8fc] h-[13.5px] relative rounded-[2px] shrink-0 w-[166px]" data-name="Container">
      <div className="bg-clip-padding border-0 border-[transparent] border-solid content-stretch flex flex-col items-start pt-[3px] px-[3px] relative size-full">
        <Paragraph57 />
      </div>
    </div>
  );
}

function Paragraph58() {
  return (
    <div className="h-[7.5px] relative shrink-0 w-full" data-name="Paragraph">
      <p className="absolute font-['Inter:Regular',sans-serif] font-normal leading-[7.5px] left-0 not-italic text-[#364146] text-[5px] top-[-0.5px] tracking-[-0.07px] whitespace-nowrap">Элемент 3</p>
    </div>
  );
}

function Container44() {
  return (
    <div className="bg-[#f7f8fc] h-[13.5px] relative rounded-[2px] shrink-0 w-[166px]" data-name="Container">
      <div className="bg-clip-padding border-0 border-[transparent] border-solid content-stretch flex flex-col items-start pt-[3px] px-[3px] relative size-full">
        <Paragraph58 />
      </div>
    </div>
  );
}

function Paragraph59() {
  return (
    <div className="h-[7.5px] relative shrink-0 w-full" data-name="Paragraph">
      <p className="absolute font-['Inter:Regular',sans-serif] font-normal leading-[7.5px] left-0 not-italic text-[#364146] text-[5px] top-[-0.5px] tracking-[-0.07px] whitespace-nowrap">Элемент 4</p>
    </div>
  );
}

function Container45() {
  return (
    <div className="bg-[#f7f8fc] h-[13.5px] relative rounded-[2px] shrink-0 w-[166px]" data-name="Container">
      <div className="bg-clip-padding border-0 border-[transparent] border-solid content-stretch flex flex-col items-start pt-[3px] px-[3px] relative size-full">
        <Paragraph59 />
      </div>
    </div>
  );
}

function Container41() {
  return (
    <div className="content-stretch flex flex-col gap-[2px] h-[211px] items-start relative shrink-0 w-full" data-name="Container">
      <Container42 />
      <Container43 />
      <Container44 />
      <Container45 />
    </div>
  );
}

function Lesson3Quiz5() {
  return (
    <div className="absolute bg-white content-stretch flex flex-col h-[231px] items-start left-0 overflow-clip pt-[10px] px-[10px] rounded-[14.99px] top-[3387px] w-[186px]" data-name="Lesson3Quiz9">
      <Container41 />
    </div>
  );
}

function Container47() {
  return <div className="bg-[#f7f8fc] h-[30px] rounded-[4px] shrink-0 w-[20px]" data-name="Container" />;
}

function Container48() {
  return <div className="bg-[#f7f8fc] flex-[1_0_0] h-[30px] min-h-px min-w-px rounded-[4px]" data-name="Container" />;
}

function Container46() {
  return (
    <div className="content-stretch flex gap-[6px] h-[30px] items-start relative shrink-0 w-[46px]" data-name="Container">
      <Container47 />
      <Container48 />
    </div>
  );
}

function Lesson3Quiz10Card() {
  return (
    <div className="flex items-center justify-center w-full h-full" data-name="Lesson3Quiz10Card1">
      <Container46 />
    </div>
  );
}

function Container50() {
  return <div className="bg-[#2d373b] h-[10px] rounded-[3px] shrink-0 w-full" data-name="Container" />;
}

function Container51() {
  return <div className="bg-[#2d373b] h-[10px] rounded-[3px] shrink-0 w-full" data-name="Container" />;
}

function Container49() {
  return (
    <div className="bg-[#f7f8fc] content-stretch flex flex-col gap-[2px] h-[34px] items-start pl-[6px] pr-[44px] pt-[6px] relative rounded-[6px] shrink-0 w-[60px]" data-name="Container">
      <Container50 />
      <Container51 />
    </div>
  );
}

function Lesson3Quiz10Card1() {
  return (
    <div className="flex items-center justify-center w-full h-full" data-name="Lesson3Quiz10Card2">
      <Container49 />
    </div>
  );
}

function Container53() {
  return (
    <div className="bg-[#f7f8fc] h-[8px] relative rounded-[3px] shrink-0 w-[40px]" data-name="Container">
      <div aria-hidden="true" className="absolute border-[#3b82f6] border-l-2 border-solid inset-0 pointer-events-none rounded-[3px]" />
    </div>
  );
}

function Container54() {
  return (
    <div className="bg-[#f7f8fc] flex-[1_0_0] min-h-px min-w-px relative rounded-[3px] w-[40px]" data-name="Container">
      <div aria-hidden="true" className="absolute border-[#3b82f6] border-l-2 border-solid inset-0 pointer-events-none rounded-[3px]" />
    </div>
  );
}

function Container52() {
  return (
    <div className="content-stretch flex flex-col gap-[3px] h-[19px] items-start relative shrink-0 w-[40px]" data-name="Container">
      <Container53 />
      <Container54 />
    </div>
  );
}

function Lesson3Quiz10Card2() {
  return (
    <div className="flex items-center justify-center w-full h-full" data-name="Lesson3Quiz10Card3">
      <Container52 />
    </div>
  );
}

function Paragraph60() {
  return (
    <div className="absolute h-[15px] left-0 top-[4014px] w-[1280px]" data-name="Paragraph">
      <p className="absolute font-['Inter:Regular',sans-serif] font-normal leading-[15px] left-0 not-italic text-[#364146] text-[10px] top-[0.5px] tracking-[-0.13px] whitespace-nowrap">• Разделяет элементы</p>
    </div>
  );
}

function Paragraph61() {
  return (
    <div className="absolute h-[15px] left-0 top-[4037px] w-[1280px]" data-name="Paragraph">
      <p className="absolute font-['Inter:Regular',sans-serif] font-normal leading-[15px] left-0 not-italic text-[#364146] text-[10px] top-[0.5px] tracking-[-0.13px] whitespace-nowrap">• Объединяет связанные элементы</p>
    </div>
  );
}

function Paragraph62() {
  return (
    <div className="absolute h-[15px] left-0 top-[4060px] w-[1280px]" data-name="Paragraph">
      <p className="absolute font-['Inter:Regular',sans-serif] font-normal leading-[15px] left-0 not-italic text-[#364146] text-[10px] top-[0.5px] tracking-[-0.13px] whitespace-nowrap">• Создает порядок</p>
    </div>
  );
}

function Paragraph63() {
  return (
    <div className="h-[15px] relative shrink-0 w-[49.914px]" data-name="Paragraph">
      <p className="absolute font-['Inter:Regular',sans-serif] font-normal leading-[15px] left-0 not-italic text-[#f1f7fb] text-[10px] top-[0.5px] tracking-[-0.13px] whitespace-nowrap">Заголовок</p>
    </div>
  );
}

function Lesson3Quiz11Card() {
  return (
    <div className="flex items-center justify-center w-full h-full" data-name="Lesson3Quiz11Card1">
      <Paragraph63 />
    </div>
  );
}

function Paragraph64() {
  return (
    <div className="content-stretch flex h-[9px] items-start relative shrink-0 w-[56.922px]" data-name="Paragraph">
      <p className="font-['Inter:Regular',sans-serif] font-normal leading-[9px] not-italic relative shrink-0 text-[#8e9199] text-[7px] text-center tracking-[-0.09px] whitespace-nowrap">Описание текста</p>
    </div>
  );
}

function Lesson3Quiz11Card1() {
  return (
    <div className="flex items-center justify-center w-full h-full" data-name="Lesson3Quiz11Card2">
      <Paragraph64 />
    </div>
  );
}

function Container55() {
  return (
    <div className="bg-[#f7f8fc] h-[50px] relative rounded-[6px] shrink-0 w-[60px]" data-name="Container">
      <div aria-hidden="true" className="absolute border border-[#d1d3db] border-solid inset-0 pointer-events-none rounded-[6px]" />
    </div>
  );
}

function Lesson3Quiz11Card2() {
  return (
    <div className="flex items-center justify-center w-full h-full" data-name="Lesson3Quiz11Card3">
      <Container55 />
    </div>
  );
}

function Paragraph65() {
  return (
    <div className="absolute h-[15px] left-0 top-[4265px] w-[1280px]" data-name="Paragraph">
      <p className="absolute font-['Inter:Regular',sans-serif] font-normal leading-[15px] left-0 not-italic text-[#364146] text-[10px] top-[0.5px] tracking-[-0.13px] whitespace-nowrap">• Привлекает внимание</p>
    </div>
  );
}

function Paragraph66() {
  return (
    <div className="absolute h-[15px] left-0 top-[4288px] w-[1280px]" data-name="Paragraph">
      <p className="absolute font-['Inter:Regular',sans-serif] font-normal leading-[15px] left-0 not-italic text-[#364146] text-[10px] top-[0.5px] tracking-[-0.13px] whitespace-nowrap">• Дает информацию</p>
    </div>
  );
}

function Paragraph67() {
  return (
    <div className="absolute h-[15px] left-0 top-[4311px] w-[1280px]" data-name="Paragraph">
      <p className="absolute font-['Inter:Regular',sans-serif] font-normal leading-[15px] left-0 not-italic text-[#364146] text-[10px] top-[0.5px] tracking-[-0.13px] whitespace-nowrap">• Объединяет элементы</p>
    </div>
  );
}

function Paragraph68() {
  return (
    <div className="h-[7.5px] relative shrink-0 w-full" data-name="Paragraph">
      <p className="absolute font-['Inter:Regular',sans-serif] font-normal leading-[7.5px] left-0 not-italic text-[#364146] text-[5px] top-[-0.5px] tracking-[-0.07px] whitespace-nowrap">Текст 1</p>
    </div>
  );
}

function Container56() {
  return (
    <div className="bg-[#f7f8fc] content-stretch flex flex-col h-[11.5px] items-start pt-[2px] px-[2px] relative rounded-[2px] shrink-0 w-[114px]" data-name="Container">
      <Paragraph68 />
    </div>
  );
}

function Paragraph69() {
  return (
    <div className="h-[7.5px] relative shrink-0 w-full" data-name="Paragraph">
      <p className="absolute font-['Inter:Regular',sans-serif] font-normal leading-[7.5px] left-0 not-italic text-[#364146] text-[5px] top-[-0.5px] tracking-[-0.07px] whitespace-nowrap">Текст 2</p>
    </div>
  );
}

function Container57() {
  return (
    <div className="bg-[#f7f8fc] content-stretch flex flex-col h-[11.5px] items-start pt-[2px] px-[2px] relative rounded-[2px] shrink-0 w-[114px]" data-name="Container">
      <Paragraph69 />
    </div>
  );
}

function Lesson3Quiz12Card() {
  return (
    <div className="flex items-center justify-center w-full h-full" data-name="Lesson3Quiz12Card1">
      <Container56 />
      <Container57 />
    </div>
  );
}

function Paragraph70() {
  return (
    <div className="absolute h-[9px] left-0 top-0 w-[114px]" data-name="Paragraph">
      <p className="absolute font-['Inter:Regular',sans-serif] font-normal leading-[9px] left-0 not-italic text-[#f7f8fc] text-[6px] top-[-0.5px] tracking-[-0.08px] whitespace-nowrap">A</p>
    </div>
  );
}

function Paragraph71() {
  return (
    <div className="absolute h-[9px] left-[10px] top-[12px] w-[104px]" data-name="Paragraph">
      <p className="absolute font-['Inter:Regular',sans-serif] font-normal leading-[9px] left-0 not-italic text-[#f1f7fb] text-[6px] top-[-0.5px] tracking-[-0.08px] whitespace-nowrap">B</p>
    </div>
  );
}

function Paragraph72() {
  return (
    <div className="absolute h-[9px] left-[5px] top-[24px] w-[109px]" data-name="Paragraph">
      <p className="absolute font-['Inter:Regular',sans-serif] font-normal leading-[9px] left-0 not-italic text-[#f1f7fb] text-[6px] top-[-0.5px] tracking-[-0.08px] whitespace-nowrap">C</p>
    </div>
  );
}

function Container58() {
  return (
    <div className="h-[33px] relative shrink-0 w-[114px]" data-name="Container">
      <Paragraph70 />
      <Paragraph71 />
      <Paragraph72 />
    </div>
  );
}

function Lesson3Quiz12Card1() {
  return (
    <div className="flex items-center justify-center w-full h-full" data-name="Lesson3Quiz12Card2">
      <Container58 />
    </div>
  );
}

function Container60() {
  return <div className="bg-[#f7f8fc] h-[20px] rounded-[2px] shrink-0 w-[15px]" data-name="Container" />;
}

function Container61() {
  return <div className="bg-[#f7f8fc] flex-[1_0_0] h-[25px] min-h-px min-w-px rounded-[2px]" data-name="Container" />;
}

function Container62() {
  return <div className="bg-[#f7f8fc] h-[18px] rounded-[2px] shrink-0 w-[12px]" data-name="Container" />;
}

function Container59() {
  return (
    <div className="content-stretch flex gap-[2px] h-[25px] items-start relative shrink-0 w-[49px]" data-name="Container">
      <Container60 />
      <Container61 />
      <Container62 />
    </div>
  );
}

function Lesson3Quiz12Card2() {
  return (
    <div className="flex items-center justify-center w-full h-full" data-name="Lesson3Quiz12Card3">
      <Container59 />
    </div>
  );
}

function Paragraph73() {
  return (
    <div className="absolute h-[15px] left-0 top-[4516px] w-[1280px]" data-name="Paragraph">
      <p className="absolute font-['Inter:Regular',sans-serif] font-normal leading-[15px] left-0 not-italic text-[#364146] text-[10px] top-[0.5px] tracking-[-0.13px] whitespace-nowrap">• Трудно читать</p>
    </div>
  );
}

function Paragraph74() {
  return (
    <div className="absolute h-[15px] left-0 top-[4539px] w-[1280px]" data-name="Paragraph">
      <p className="absolute font-['Inter:Regular',sans-serif] font-normal leading-[15px] left-0 not-italic text-[#364146] text-[10px] top-[0.5px] tracking-[-0.13px] whitespace-nowrap">• Трудно понять связи</p>
    </div>
  );
}

function Paragraph75() {
  return (
    <div className="absolute h-[15px] left-0 top-[4562px] w-[1280px]" data-name="Paragraph">
      <p className="absolute font-['Inter:Regular',sans-serif] font-normal leading-[15px] left-0 not-italic text-[#364146] text-[10px] top-[0.5px] tracking-[-0.13px] whitespace-nowrap">• Экран выглядит неаккуратно</p>
    </div>
  );
}

// ─────────────────────────────────────────────────────────────────────────────
// Named exports for LessonQuizPage (quiz_interface_structure visuals)
// ─────────────────────────────────────────────────────────────────────────────
const CW: React.CSSProperties = { position: "relative", width: 260, height: 180, overflow: "hidden", borderRadius: 15, background: "white" };
const CI: React.CSSProperties = { position: "absolute", inset: 0, padding: "14px 16px", display: "flex", flexDirection: "column", justifyContent: "center", overflow: "hidden" };

// Q1A: No structure — all elements in one block
export function CQStructCompare1A() {
  return (
    <div style={CW}>
      <div style={CI}>
        <div style={{ background: "#f3f4f6", borderRadius: 8, padding: "10px 12px", display: "flex", flexDirection: "column", gap: 6 }}>
          <div style={{ height: 10, background: "#9ca3af", borderRadius: 3, width: "80%" }} />
          <div style={{ height: 8, background: "#d1d5db", borderRadius: 3, width: "60%" }} />
          <div style={{ height: 8, background: "#d1d5db", borderRadius: 3, width: "90%" }} />
          <div style={{ height: 8, background: "#d1d5db", borderRadius: 3, width: "50%" }} />
          <div style={{ height: 8, background: "#9ca3af", borderRadius: 3, width: "70%" }} />
          <div style={{ height: 8, background: "#d1d5db", borderRadius: 3, width: "85%" }} />
          <div style={{ height: 8, background: "#d1d5db", borderRadius: 3, width: "55%" }} />
          <div style={{ height: 8, background: "#9ca3af", borderRadius: 3, width: "75%" }} />
          <div style={{ height: 8, background: "#d1d5db", borderRadius: 3, width: "65%" }} />
        </div>
      </div>
    </div>
  );
}

// Q1B: Structured — divided into logical sections
export function CQStructCompare1B() {
  return (
    <div style={CW}>
      <div style={CI}>
        <div style={{ display: "flex", flexDirection: "column", gap: 8 }}>
          <div style={{ background: "#eff6ff", borderRadius: 8, padding: "8px 10px" }}>
            <div style={{ height: 9, background: "#3b82f6", borderRadius: 3, width: "50%", marginBottom: 5 }} />
            <div style={{ height: 7, background: "#bfdbfe", borderRadius: 3, width: "80%" }} />
            <div style={{ height: 7, background: "#bfdbfe", borderRadius: 3, width: "65%", marginTop: 3 }} />
          </div>
          <div style={{ background: "#f0fdf4", borderRadius: 8, padding: "8px 10px" }}>
            <div style={{ height: 9, background: "#16a34a", borderRadius: 3, width: "45%", marginBottom: 5 }} />
            <div style={{ height: 7, background: "#bbf7d0", borderRadius: 3, width: "75%" }} />
            <div style={{ height: 7, background: "#bbf7d0", borderRadius: 3, width: "60%", marginTop: 3 }} />
          </div>
          <div style={{ background: "#fafafa", borderRadius: 8, padding: "8px 10px" }}>
            <div style={{ height: 9, background: "#6b7280", borderRadius: 3, width: "40%", marginBottom: 5 }} />
            <div style={{ height: 7, background: "#e5e7eb", borderRadius: 3, width: "70%" }} />
          </div>
        </div>
      </div>
    </div>
  );
}

// Q2A: Wall of text — hard to read
export function CQStructCompare2A() {
  return (
    <div style={CW}>
      <div style={CI}>
        <div style={{ display: "flex", flexDirection: "column", gap: 3 }}>
          {[90, 85, 78, 92, 70, 88, 75, 82, 68, 95, 72, 80].map((w, i) => (
            <div key={i} style={{ height: 7, background: i % 4 === 0 ? "#9ca3af" : "#d1d5db", borderRadius: 2, width: `${w}%` }} />
          ))}
        </div>
      </div>
    </div>
  );
}

// Q2B: Text broken into blocks with headings
export function CQStructCompare2B() {
  return (
    <div style={CW}>
      <div style={CI}>
        <div style={{ display: "flex", flexDirection: "column", gap: 10 }}>
          <div>
            <div style={{ height: 10, background: "#1f2937", borderRadius: 3, width: "55%", marginBottom: 5 }} />
            <div style={{ height: 7, background: "#d1d5db", borderRadius: 2, width: "90%", marginBottom: 3 }} />
            <div style={{ height: 7, background: "#d1d5db", borderRadius: 2, width: "75%" }} />
          </div>
          <div>
            <div style={{ height: 10, background: "#1f2937", borderRadius: 3, width: "45%", marginBottom: 5 }} />
            <div style={{ height: 7, background: "#d1d5db", borderRadius: 2, width: "85%", marginBottom: 3 }} />
            <div style={{ height: 7, background: "#d1d5db", borderRadius: 2, width: "70%" }} />
          </div>
          <div>
            <div style={{ height: 10, background: "#1f2937", borderRadius: 3, width: "50%", marginBottom: 5 }} />
            <div style={{ height: 7, background: "#d1d5db", borderRadius: 2, width: "80%" }} />
          </div>
        </div>
      </div>
    </div>
  );
}

// Q3A: Elements placed chaotically
export function CQStructCompare3A() {
  return (
    <div style={CW}>
      <div style={{ position: "absolute", inset: 0, overflow: "hidden" }}>
        <div style={{ position: "absolute", top: 20, left: 140, width: 80, height: 22, background: "#3b82f6", borderRadius: 6, display: "flex", alignItems: "center", justifyContent: "center" }}>
          <div style={{ height: 7, background: "white", borderRadius: 2, width: 40 }} />
        </div>
        <div style={{ position: "absolute", top: 60, left: 10, width: 100, height: 8, background: "#1f2937", borderRadius: 3 }} />
        <div style={{ position: "absolute", top: 100, left: 80, width: 70, height: 8, background: "#d1d5db", borderRadius: 3 }} />
        <div style={{ position: "absolute", top: 30, left: 20, width: 55, height: 18, background: "#f3f4f6", borderRadius: 4, border: "1px solid #e5e7eb" }} />
        <div style={{ position: "absolute", top: 120, left: 30, width: 85, height: 8, background: "#d1d5db", borderRadius: 3 }} />
        <div style={{ position: "absolute", top: 140, left: 120, width: 60, height: 18, background: "#fef9c3", borderRadius: 4 }} />
        <div style={{ position: "absolute", top: 75, left: 150, width: 75, height: 8, background: "#9ca3af", borderRadius: 3 }} />
      </div>
    </div>
  );
}

// Q3B: Elements grouped by meaning
export function CQStructCompare3B() {
  return (
    <div style={CW}>
      <div style={CI}>
        <div style={{ display: "flex", flexDirection: "column", gap: 8, alignItems: "stretch" }}>
          <div style={{ display: "flex", gap: 8 }}>
            <div style={{ flex: 1, background: "#f3f4f6", borderRadius: 8, padding: "8px 10px" }}>
              <div style={{ height: 8, background: "#6b7280", borderRadius: 3, width: "70%", marginBottom: 4 }} />
              <div style={{ height: 7, background: "#d1d5db", borderRadius: 2, width: "90%" }} />
            </div>
            <div style={{ flex: 1, background: "#f3f4f6", borderRadius: 8, padding: "8px 10px" }}>
              <div style={{ height: 8, background: "#6b7280", borderRadius: 3, width: "60%", marginBottom: 4 }} />
              <div style={{ height: 7, background: "#d1d5db", borderRadius: 2, width: "80%" }} />
            </div>
          </div>
          <div style={{ background: "#eff6ff", borderRadius: 8, padding: "8px 12px", display: "flex", alignItems: "center", justifyContent: "center" }}>
            <div style={{ height: 8, background: "#3b82f6", borderRadius: 3, width: 60 }} />
          </div>
        </div>
      </div>
    </div>
  );
}
export function CQStructSingle1() {
  return <div style={{ position: "relative", background: "white", height: 231, width: 186, overflow: "hidden", paddingTop: 10, paddingLeft: 10, paddingRight: 10, borderRadius: 15 }}><Container21 /></div>;
}
export function CQStructSingle2() {
  return <div style={{ position: "relative", background: "white", height: 231, width: 186, overflow: "hidden", paddingTop: 10, paddingLeft: 10, paddingRight: 10, borderRadius: 15 }}><Container24 /></div>;
}
export function CQStructSingle3() {
  return <div style={{ position: "relative", background: "white", height: 231, width: 186, overflow: "hidden", paddingTop: 10, paddingLeft: 10, paddingRight: 10, borderRadius: 15 }}><Container29 /></div>;
}
export function CQStructMulti1() {
  return <div style={{ position: "relative", background: "white", height: 231, width: 186, overflow: "hidden", paddingTop: 10, paddingLeft: 10, paddingRight: 10, borderRadius: 15 }}><Container33 /></div>;
}
export function CQStructMulti2() {
  return <div style={{ position: "relative", background: "white", height: 231, width: 186, overflow: "hidden", paddingTop: 10, paddingLeft: 10, paddingRight: 10, borderRadius: 15 }}><Container36 /></div>;
}
export function CQStructMulti3() {
  return <div style={{ position: "relative", background: "white", height: 231, width: 186, overflow: "hidden", paddingTop: 10, paddingLeft: 10, paddingRight: 10, borderRadius: 15 }}><Container41 /></div>;
}
export function CQStructConn1A() { return <Lesson3Quiz10Card />; }
export function CQStructConn1B() { return <Lesson3Quiz10Card1 />; }
export function CQStructConn1C() { return <Lesson3Quiz10Card2 />; }
export function CQStructConn2A() { return <Lesson3Quiz11Card />; }
export function CQStructConn2B() { return <Lesson3Quiz11Card1 />; }
export function CQStructConn2C() { return <Lesson3Quiz11Card2 />; }
export function CQStructConn3A() { return <Lesson3Quiz12Card />; }
export function CQStructConn3B() { return <Lesson3Quiz12Card1 />; }
export function CQStructConn3C() { return <Lesson3Quiz12Card2 />; }

export default function Component() {
  return (
    <div className="relative size-full" data-name="Структура интерфейса">
      <p className="absolute font-['Inter:Regular',sans-serif] font-normal leading-[17px] left-0 not-italic text-[#8e9199] text-[13px] top-[-0.5px] tracking-[-0.16px] whitespace-nowrap">Расположение элементов на экране</p>
      <p className="absolute font-['Inter:Regular',sans-serif] font-normal leading-[27px] left-0 not-italic text-[#101828] text-[18px] top-[80.5px] tracking-[-0.4395px] whitespace-nowrap">Compare UI</p>
      <p className="absolute font-['Inter:Regular',sans-serif] font-normal leading-[15px] left-0 not-italic text-[#8e9199] text-[12px] top-[115px] tracking-[-0.15px] w-[1280px]">Сравните два варианта интерфейса</p>
      <p className="absolute font-['Inter:Regular',sans-serif] font-normal leading-[14px] left-0 not-italic text-[#8e9199] text-[11px] top-[170.5px] tracking-[-0.14px] whitespace-nowrap">1. Где структура экрана более понятная?</p>
      <Container />
      <Container4 />
      <p className="absolute font-['Inter:Regular',sans-serif] font-normal leading-[14px] left-0 not-italic text-[#8e9199] text-[11px] top-[487.5px] tracking-[-0.14px] whitespace-nowrap">2. Где информация сгруппирована правильно?</p>
      <Container9 />
      <Container12 />
      <p className="absolute font-['Inter:Regular',sans-serif] font-normal leading-[14px] left-0 not-italic text-[#8e9199] text-[11px] top-[804.5px] tracking-[-0.14px] whitespace-nowrap">3. Где экран легче сканировать?</p>
      <Container16 />
      <Container18 />
      <p className="absolute font-['Inter:Regular',sans-serif] font-normal leading-[27px] left-0 not-italic text-[#101828] text-[18px] top-[1137.5px] tracking-[-0.4395px] whitespace-nowrap">Single Choice</p>
      <p className="absolute font-['Inter:Regular',sans-serif] font-normal leading-[15px] left-0 not-italic text-[#8e9199] text-[12px] top-[1172px] tracking-[-0.15px] w-[1280px]">Выберите один правильный ответ</p>
      <p className="absolute font-['Inter:Regular',sans-serif] font-normal leading-[14px] left-0 not-italic text-[#8e9199] text-[11px] top-[1227.5px] tracking-[-0.14px] whitespace-nowrap">4. Что такое структура интерфейса?</p>
      <Container20 />
      <Lesson3Quiz />
      <p className="absolute font-['Inter:Regular',sans-serif] font-normal leading-[14px] left-0 not-italic text-[#8e9199] text-[11px] top-[1621.5px] tracking-[-0.14px] whitespace-nowrap">5. Что помогает структурировать экран?</p>
      <Container23 />
      <Lesson3Quiz1 />
      <p className="absolute font-['Inter:Regular',sans-serif] font-normal leading-[14px] left-0 not-italic text-[#8e9199] text-[11px] top-[2015.5px] tracking-[-0.14px] whitespace-nowrap">6. Что делает экран понятным?</p>
      <Container28 />
      <Lesson3Quiz2 />
      <p className="absolute font-['Inter:Regular',sans-serif] font-normal leading-[27px] left-0 not-italic text-[#101828] text-[18px] top-[2425.5px] tracking-[-0.4395px] whitespace-nowrap">Multi Choice</p>
      <p className="absolute font-['Inter:Regular',sans-serif] font-normal leading-[15px] left-0 not-italic text-[#8e9199] text-[12px] top-[2460px] tracking-[-0.15px] w-[1280px]">Выберите несколько правильных ответов</p>
      <p className="absolute font-['Inter:Regular',sans-serif] font-normal leading-[14px] left-0 not-italic text-[#8e9199] text-[11px] top-[2515.5px] tracking-[-0.14px] whitespace-nowrap">7. Что помогает пользователю сканировать экран?</p>
      <Container32 />
      <Lesson3Quiz3 />
      <p className="absolute font-['Inter:Regular',sans-serif] font-normal leading-[14px] left-0 not-italic text-[#8e9199] text-[11px] top-[2932.5px] tracking-[-0.14px] whitespace-nowrap">8. Что улучшает структуру интерфейса?</p>
      <Container35 />
      <Lesson3Quiz4 />
      <p className="absolute font-['Inter:Regular',sans-serif] font-normal leading-[14px] left-0 not-italic text-[#8e9199] text-[11px] top-[3349.5px] tracking-[-0.14px] whitespace-nowrap">9. Что ухудшает структуру?</p>
      <Container40 />
      <Lesson3Quiz5 />
      <p className="absolute font-['Inter:Regular',sans-serif] font-normal leading-[27px] left-0 not-italic text-[#101828] text-[18px] top-[3782.5px] tracking-[-0.4395px] whitespace-nowrap">Match / Connect</p>
      <p className="absolute font-['Inter:Regular',sans-serif] font-normal leading-[15px] left-0 not-italic text-[#8e9199] text-[12px] top-[3817px] tracking-[-0.15px] w-[1280px]">Соедините элементы с описаниями</p>
      <p className="absolute font-['Inter:Regular',sans-serif] font-normal leading-[14px] left-0 not-italic text-[#8e9199] text-[11px] top-[3872.5px] tracking-[-0.14px] whitespace-nowrap">10. Соедините элемент структуры и его роль</p>
      <Lesson3Quiz10Card />
      <Lesson3Quiz10Card1 />
      <Lesson3Quiz10Card2 />
      <Paragraph60 />
      <Paragraph61 />
      <Paragraph62 />
      <p className="absolute font-['Inter:Regular',sans-serif] font-normal leading-[14px] left-0 not-italic text-[#8e9199] text-[11px] top-[4123.5px] tracking-[-0.14px] whitespace-nowrap">11. Соедините элемент и функцию</p>
      <Lesson3Quiz11Card />
      <Lesson3Quiz11Card1 />
      <Lesson3Quiz11Card2 />
      <Paragraph65 />
      <Paragraph66 />
      <Paragraph67 />
      <p className="absolute font-['Inter:Regular',sans-serif] font-normal leading-[14px] left-0 not-italic text-[#8e9199] text-[11px] top-[4374.5px] tracking-[-0.14px] whitespace-nowrap">12. Соедините проблему и эффект</p>
      <Lesson3Quiz12Card />
      <Lesson3Quiz12Card1 />
      <Lesson3Quiz12Card2 />
      <Paragraph73 />
      <Paragraph74 />
      <Paragraph75 />
    </div>
  );
}