import React from "react";
import imgImageWithFallback from "figma:asset/6862391585b9ab05c2f2188634e09ea4f619e979.png";

function Paragraph() {
  return (
    <div className="absolute h-[21px] left-0 top-[8px] w-[9.297px]" data-name="Paragraph">
      <p className="absolute font-['Inter:Regular',sans-serif] font-normal leading-[21px] left-0 not-italic text-[#364146] text-[14px] top-0 tracking-[-0.17px] whitespace-nowrap">A</p>
    </div>
  );
}

function Paragraph1() {
  return (
    <div className="absolute h-[13.5px] left-0 top-[74.75px] w-[166px]" data-name="Paragraph">
      <p className="absolute font-['Inter:Regular',sans-serif] font-normal leading-[13.5px] left-0 not-italic text-[#101828] text-[9px] top-[0.5px] tracking-[-0.12px] whitespace-nowrap">Приложение</p>
    </div>
  );
}

function Paragraph2() {
  return (
    <div className="h-[9px] relative shrink-0 w-full" data-name="Paragraph">
      <p className="-translate-x-1/2 absolute font-['Inter:Regular',sans-serif] font-normal leading-[9px] left-[34.63px] not-italic text-[#364146] text-[6px] text-center top-[-0.5px] tracking-[-0.08px] whitespace-nowrap">Создать</p>
    </div>
  );
}

function Container3() {
  return (
    <div className="bg-[#f7f8fc] flex-[81_0_0] h-[17px] min-h-px min-w-px relative rounded-[4px]" data-name="Container">
      <div className="bg-clip-padding border-0 border-[transparent] border-solid content-stretch flex flex-col items-start pt-[4px] px-[6px] relative size-full">
        <Paragraph2 />
      </div>
    </div>
  );
}

function Paragraph3() {
  return (
    <div className="h-[9px] relative shrink-0 w-full" data-name="Paragraph">
      <p className="-translate-x-1/2 absolute font-['Inter:Regular',sans-serif] font-normal leading-[9px] left-[34.01px] not-italic text-[#364146] text-[6px] text-center top-[-0.5px] tracking-[-0.08px] whitespace-nowrap">Просмотр</p>
    </div>
  );
}

function Container4() {
  return (
    <div className="bg-[#f7f8fc] flex-[81_0_0] h-[17px] min-h-px min-w-px relative rounded-[4px]" data-name="Container">
      <div className="bg-clip-padding border-0 border-[transparent] border-solid content-stretch flex flex-col items-start pt-[4px] px-[6px] relative size-full">
        <Paragraph3 />
      </div>
    </div>
  );
}

function Container2() {
  return (
    <div className="absolute content-stretch flex gap-[4px] h-[17px] items-start left-0 top-[96.25px] w-[166px]" data-name="Container">
      <Container3 />
      <Container4 />
    </div>
  );
}

function Paragraph4() {
  return (
    <div className="h-[9px] relative shrink-0 w-full" data-name="Paragraph">
      <p className="-translate-x-1/2 absolute font-['Inter:Regular',sans-serif] font-normal leading-[9px] left-[34.91px] not-italic text-[#364146] text-[6px] text-center top-[-0.5px] tracking-[-0.08px] whitespace-nowrap">Изменить</p>
    </div>
  );
}

function Container6() {
  return (
    <div className="bg-[#f7f8fc] flex-[81_0_0] h-[17px] min-h-px min-w-px relative rounded-[4px]" data-name="Container">
      <div className="bg-clip-padding border-0 border-[transparent] border-solid content-stretch flex flex-col items-start pt-[4px] px-[6px] relative size-full">
        <Paragraph4 />
      </div>
    </div>
  );
}

function Paragraph5() {
  return (
    <div className="h-[9px] relative shrink-0 w-full" data-name="Paragraph">
      <p className="-translate-x-1/2 absolute font-['Inter:Regular',sans-serif] font-normal leading-[9px] left-[34.65px] not-italic text-[#364146] text-[6px] text-center top-[-0.5px] tracking-[-0.08px] whitespace-nowrap">Удалить</p>
    </div>
  );
}

function Container7() {
  return (
    <div className="bg-[#f7f8fc] flex-[81_0_0] h-[17px] min-h-px min-w-px relative rounded-[4px]" data-name="Container">
      <div className="bg-clip-padding border-0 border-[transparent] border-solid content-stretch flex flex-col items-start pt-[4px] px-[6px] relative size-full">
        <Paragraph5 />
      </div>
    </div>
  );
}

function Container5() {
  return (
    <div className="absolute content-stretch flex gap-[4px] h-[17px] items-start left-0 top-[119.25px] w-[166px]" data-name="Container">
      <Container6 />
      <Container7 />
    </div>
  );
}

function Container1() {
  return (
    <div className="h-[211px] relative shrink-0 w-full" data-name="Container">
      <Paragraph1 />
      <Container2 />
      <Container5 />
    </div>
  );
}

function Lesson2Quiz1VariantA() {
  return (
    <div className="absolute bg-white content-stretch flex flex-col h-[231px] items-start left-0 overflow-clip pt-[10px] px-[10px] rounded-[14.99px] top-0 w-[186px]" data-name="Lesson2Quiz1VariantA">
      <Container1 />
    </div>
  );
}

function Container() {
  return (
    <div className="absolute h-[231px] left-0 top-[208px] w-[207.297px]" data-name="Container">
      <Paragraph />
      <Lesson2Quiz1VariantA />
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
    <div className="h-[12px] relative shrink-0 w-[3.719px]" data-name="Paragraph">
      <div className="bg-clip-padding border-0 border-[transparent] border-solid relative size-full">
        <p className="absolute font-['Inter:Regular',sans-serif] font-normal leading-[12px] left-0 not-italic text-[8px] text-white top-0 whitespace-nowrap">1</p>
      </div>
    </div>
  );
}

function Container11() {
  return (
    <div className="bg-[#3b82f6] relative rounded-[16777200px] shrink-0 size-[16px]" data-name="Container">
      <div className="bg-clip-padding border-0 border-[transparent] border-solid content-stretch flex items-center justify-center px-[6.141px] relative size-full">
        <Paragraph7 />
      </div>
    </div>
  );
}

function Paragraph8() {
  return (
    <div className="h-[10.5px] relative shrink-0 w-[18.594px]" data-name="Paragraph">
      <div className="bg-clip-padding border-0 border-[transparent] border-solid relative size-full">
        <p className="absolute font-['Inter:Regular',sans-serif] font-normal leading-[10.5px] left-0 not-italic text-[#8e9199] text-[7px] top-0 tracking-[-0.09px] whitespace-nowrap">Шаг 1</p>
      </div>
    </div>
  );
}

function Container10() {
  return (
    <div className="absolute content-stretch flex gap-[4px] h-[16px] items-center left-0 top-[-4px] w-[166px]" data-name="Container">
      <Container11 />
      <Paragraph8 />
    </div>
  );
}

function Paragraph9() {
  return <div className="absolute h-[15px] left-0 top-[81.75px] w-[166px]" data-name="Paragraph" />;
}

function Paragraph10() {
  return (
    <div className="absolute content-stretch flex h-[9px] items-start left-0 top-[150px] w-[166px]" data-name="Paragraph">
      <p className="flex-[1_0_0] font-['Inter:Regular',sans-serif] font-normal leading-[9px] min-h-px min-w-px not-italic relative text-[#8e9199] text-[7px] tracking-[-0.09px]">Создайте свой первый проект</p>
    </div>
  );
}

function Paragraph11() {
  return (
    <div className="h-[13.5px] relative shrink-0 w-full" data-name="Paragraph">
      <p className="-translate-x-1/2 absolute font-['Inter:Regular',sans-serif] font-normal leading-[13.5px] left-[71.16px] not-italic text-[9px] text-center text-white top-[0.5px] tracking-[-0.12px] whitespace-nowrap">Начать</p>
    </div>
  );
}

function Container12() {
  return (
    <div className="absolute bg-[#3b82f6] content-stretch flex flex-col h-[29.5px] items-start left-0 pt-[8px] px-[12px] rounded-[6px] top-[171px] w-[166px]" data-name="Container">
      <Paragraph11 />
    </div>
  );
}

function Container9() {
  return (
    <div className="h-[211px] relative shrink-0 w-full" data-name="Container">
      <Container10 />
      <Paragraph9 />
      <p className="absolute font-['Inter:Regular',sans-serif] font-normal leading-[15px] left-0 not-italic text-[#101828] text-[10px] top-[18px] tracking-[-0.13px] whitespace-nowrap">Начало работы</p>
      <Paragraph10 />
      <Container12 />
    </div>
  );
}

function Lesson2Quiz1VariantB() {
  return (
    <div className="absolute bg-white content-stretch flex flex-col h-[231px] items-start justify-between left-0 overflow-clip pt-[10px] px-[10px] rounded-[14.99px] top-0 w-[186px]" data-name="Lesson2Quiz1VariantB">
      <Container9 />
    </div>
  );
}

function Container8() {
  return (
    <div className="absolute h-[231px] left-[247.3px] top-[208px] w-[206.945px]" data-name="Container">
      <Paragraph6 />
      <Lesson2Quiz1VariantB />
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
    <div className="absolute h-[13.5px] left-0 top-[45.25px] w-[166px]" data-name="Paragraph">
      <p className="absolute font-['Inter:Regular',sans-serif] font-normal leading-[13.5px] left-0 not-italic text-[#101828] text-[9px] top-[0.5px] tracking-[-0.12px] whitespace-nowrap">Регистрация</p>
    </div>
  );
}

function Paragraph14() {
  return (
    <div className="h-[9px] relative shrink-0 w-full" data-name="Paragraph">
      <p className="absolute font-['Inter:Regular',sans-serif] font-normal leading-[9px] left-0 not-italic text-[#8e9199] text-[6px] top-[-0.5px] tracking-[-0.08px] whitespace-nowrap">Имя</p>
    </div>
  );
}

function Container15() {
  return (
    <div className="absolute bg-[#f7f8fc] content-stretch flex flex-col h-[17px] items-start left-0 pt-[4px] px-[8px] rounded-[4px] top-[64.75px] w-[166px]" data-name="Container">
      <Paragraph14 />
    </div>
  );
}

function Paragraph15() {
  return (
    <div className="h-[9px] relative shrink-0 w-full" data-name="Paragraph">
      <p className="absolute font-['Inter:Regular',sans-serif] font-normal leading-[9px] left-0 not-italic text-[#8e9199] text-[6px] top-[-0.5px] tracking-[-0.08px] whitespace-nowrap">Email</p>
    </div>
  );
}

function Container16() {
  return (
    <div className="absolute bg-[#f7f8fc] content-stretch flex flex-col h-[17px] items-start left-0 pt-[4px] px-[8px] rounded-[4px] top-[85.75px] w-[166px]" data-name="Container">
      <Paragraph15 />
    </div>
  );
}

function Paragraph16() {
  return (
    <div className="h-[9px] relative shrink-0 w-full" data-name="Paragraph">
      <p className="absolute font-['Inter:Regular',sans-serif] font-normal leading-[9px] left-0 not-italic text-[#8e9199] text-[6px] top-[-0.5px] tracking-[-0.08px] whitespace-nowrap">Пароль</p>
    </div>
  );
}

function Container17() {
  return (
    <div className="absolute bg-[#f7f8fc] content-stretch flex flex-col h-[17px] items-start left-0 pt-[4px] px-[8px] rounded-[4px] top-[106.75px] w-[166px]" data-name="Container">
      <Paragraph16 />
    </div>
  );
}

function Paragraph17() {
  return (
    <div className="h-[9px] relative shrink-0 w-full" data-name="Paragraph">
      <p className="absolute font-['Inter:Regular',sans-serif] font-normal leading-[9px] left-0 not-italic text-[#8e9199] text-[6px] top-[-0.5px] tracking-[-0.08px] whitespace-nowrap">Подтверждение</p>
    </div>
  );
}

function Container18() {
  return (
    <div className="absolute bg-[#f7f8fc] content-stretch flex flex-col h-[17px] items-start left-0 pt-[4px] px-[8px] rounded-[4px] top-[127.75px] w-[166px]" data-name="Container">
      <Paragraph17 />
    </div>
  );
}

function Paragraph18() {
  return (
    <div className="h-[9px] relative shrink-0 w-full" data-name="Paragraph">
      <p className="absolute font-['Inter:Regular',sans-serif] font-normal leading-[9px] left-0 not-italic text-[#8e9199] text-[6px] top-[-0.5px] tracking-[-0.08px] whitespace-nowrap">Телефон</p>
    </div>
  );
}

function Container19() {
  return (
    <div className="absolute bg-[#f7f8fc] content-stretch flex flex-col h-[17px] items-start left-0 pt-[4px] px-[8px] rounded-[4px] top-[148.75px] w-[166px]" data-name="Container">
      <Paragraph18 />
    </div>
  );
}

function Container14() {
  return (
    <div className="h-[211px] relative shrink-0 w-full" data-name="Container">
      <Paragraph13 />
      <Container15 />
      <Container16 />
      <Container17 />
      <Container18 />
      <Container19 />
    </div>
  );
}

function Lesson2Quiz2VariantA() {
  return (
    <div className="absolute bg-white content-stretch flex flex-col h-[231px] items-start left-0 overflow-clip pt-[10px] px-[10px] rounded-[14.99px] top-0 w-[186px]" data-name="Lesson2Quiz2VariantA">
      <Container14 />
    </div>
  );
}

function Container13() {
  return (
    <div className="absolute h-[231px] left-0 top-[525px] w-[207.297px]" data-name="Container">
      <Paragraph12 />
      <Lesson2Quiz2VariantA />
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
    <div className="h-[12px] relative shrink-0 w-[3.719px]" data-name="Paragraph">
      <div className="bg-clip-padding border-0 border-[transparent] border-solid relative size-full">
        <p className="absolute font-['Inter:Regular',sans-serif] font-normal leading-[12px] left-0 not-italic text-[8px] text-white top-0 whitespace-nowrap">1</p>
      </div>
    </div>
  );
}

function Container23() {
  return (
    <div className="bg-[#3b82f6] relative rounded-[16777200px] shrink-0 size-[16px]" data-name="Container">
      <div className="bg-clip-padding border-0 border-[transparent] border-solid content-stretch flex items-center justify-center px-[6.141px] relative size-full">
        <Paragraph20 />
      </div>
    </div>
  );
}

function Paragraph21() {
  return (
    <div className="h-[10.5px] relative shrink-0 w-[13.703px]" data-name="Paragraph">
      <div className="bg-clip-padding border-0 border-[transparent] border-solid relative size-full">
        <p className="absolute font-['Inter:Regular',sans-serif] font-normal leading-[10.5px] left-0 not-italic text-[#8e9199] text-[7px] top-0 tracking-[-0.09px] whitespace-nowrap">из 3</p>
      </div>
    </div>
  );
}

function Container22() {
  return (
    <div className="absolute content-stretch flex gap-[4px] h-[16px] items-center left-0 top-[39.5px] w-[166px]" data-name="Container">
      <Container23 />
      <Paragraph21 />
    </div>
  );
}

function Paragraph22() {
  return (
    <div className="absolute h-[15px] left-0 top-[65.5px] w-[166px]" data-name="Paragraph">
      <p className="absolute font-['Inter:Regular',sans-serif] font-normal leading-[15px] left-0 not-italic text-[#101828] text-[10px] top-[0.5px] tracking-[-0.13px] whitespace-nowrap">Основная информация</p>
    </div>
  );
}

function Paragraph23() {
  return (
    <div className="h-[10.5px] relative shrink-0 w-full" data-name="Paragraph">
      <p className="absolute font-['Inter:Regular',sans-serif] font-normal leading-[10.5px] left-0 not-italic text-[#8e9199] text-[7px] top-0 tracking-[-0.09px] whitespace-nowrap">Имя</p>
    </div>
  );
}

function Container24() {
  return (
    <div className="absolute bg-[#f7f8fc] content-stretch flex flex-col h-[18.5px] items-start left-0 pt-[4px] px-[8px] rounded-[4px] top-[90.5px] w-[166px]" data-name="Container">
      <Paragraph23 />
    </div>
  );
}

function Paragraph24() {
  return (
    <div className="h-[10.5px] relative shrink-0 w-full" data-name="Paragraph">
      <p className="absolute font-['Inter:Regular',sans-serif] font-normal leading-[10.5px] left-0 not-italic text-[#8e9199] text-[7px] top-0 tracking-[-0.09px] whitespace-nowrap">Email</p>
    </div>
  );
}

function Container25() {
  return (
    <div className="absolute bg-[#f7f8fc] content-stretch flex flex-col h-[18.5px] items-start left-0 pt-[4px] px-[8px] rounded-[4px] top-[117px] w-[166px]" data-name="Container">
      <Paragraph24 />
    </div>
  );
}

function Paragraph25() {
  return (
    <div className="h-[12px] relative shrink-0 w-full" data-name="Paragraph">
      <p className="-translate-x-1/2 absolute font-['Inter:Regular',sans-serif] font-normal leading-[12px] left-[71.47px] not-italic text-[8px] text-center text-white top-0 tracking-[-0.1px] whitespace-nowrap">Далее</p>
    </div>
  );
}

function Container26() {
  return (
    <div className="absolute bg-[#3b82f6] content-stretch flex flex-col h-[24px] items-start left-0 pt-[6px] px-[12px] rounded-[6px] top-[147.5px] w-[166px]" data-name="Container">
      <Paragraph25 />
    </div>
  );
}

function Container21() {
  return (
    <div className="h-[211px] relative shrink-0 w-full" data-name="Container">
      <Container22 />
      <Paragraph22 />
      <Container24 />
      <Container25 />
      <Container26 />
    </div>
  );
}

function Lesson2Quiz2VariantB() {
  return (
    <div className="absolute bg-white content-stretch flex flex-col h-[231px] items-start left-0 overflow-clip pt-[10px] px-[10px] rounded-[14.99px] top-0 w-[186px]" data-name="Lesson2Quiz2VariantB">
      <Container21 />
    </div>
  );
}

function Container20() {
  return (
    <div className="absolute h-[231px] left-[247.3px] top-[525px] w-[206.945px]" data-name="Container">
      <Paragraph19 />
      <Lesson2Quiz2VariantB />
    </div>
  );
}

function Paragraph26() {
  return (
    <div className="absolute h-[21px] left-0 top-[8px] w-[9.297px]" data-name="Paragraph">
      <p className="absolute font-['Inter:Regular',sans-serif] font-normal leading-[21px] left-0 not-italic text-[#364146] text-[14px] top-0 tracking-[-0.17px] whitespace-nowrap">A</p>
    </div>
  );
}

function Paragraph27() {
  return (
    <div className="absolute h-[13.5px] left-0 top-[61px] w-[166px]" data-name="Paragraph">
      <p className="absolute font-['Inter:Regular',sans-serif] font-normal leading-[13.5px] left-0 not-italic text-[#101828] text-[9px] top-[0.5px] tracking-[-0.12px] whitespace-nowrap">Выберите действие</p>
    </div>
  );
}

function Paragraph28() {
  return (
    <div className="h-[10.5px] relative shrink-0 w-full" data-name="Paragraph">
      <p className="-translate-x-1/2 absolute font-['Inter:Regular',sans-serif] font-normal leading-[10.5px] left-[75.38px] not-italic text-[#364146] text-[7px] text-center top-0 tracking-[-0.09px] whitespace-nowrap">Сохранить изменения</p>
    </div>
  );
}

function Container29() {
  return (
    <div className="absolute bg-[#f7f8fc] content-stretch flex flex-col h-[18.5px] items-start left-0 pt-[4px] px-[8px] rounded-[4px] top-[82.5px] w-[166px]" data-name="Container">
      <Paragraph28 />
    </div>
  );
}

function Paragraph29() {
  return (
    <div className="h-[10.5px] relative shrink-0 w-full" data-name="Paragraph">
      <p className="-translate-x-1/2 absolute font-['Inter:Regular',sans-serif] font-normal leading-[10.5px] left-[75.1px] not-italic text-[#364146] text-[7px] text-center top-0 tracking-[-0.09px] whitespace-nowrap">Применить настройки</p>
    </div>
  );
}

function Container30() {
  return (
    <div className="absolute bg-[#f7f8fc] content-stretch flex flex-col h-[18.5px] items-start left-0 pt-[4px] px-[8px] rounded-[4px] top-[107px] w-[166px]" data-name="Container">
      <Paragraph29 />
    </div>
  );
}

function Paragraph30() {
  return (
    <div className="h-[10.5px] relative shrink-0 w-full" data-name="Paragraph">
      <p className="-translate-x-1/2 absolute font-['Inter:Regular',sans-serif] font-normal leading-[10.5px] left-[75.17px] not-italic text-[#364146] text-[7px] text-center top-0 tracking-[-0.09px] whitespace-nowrap">Перейти далее</p>
    </div>
  );
}

function Container31() {
  return (
    <div className="absolute bg-[#f7f8fc] content-stretch flex flex-col h-[18.5px] items-start left-0 pt-[4px] px-[8px] rounded-[4px] top-[131.5px] w-[166px]" data-name="Container">
      <Paragraph30 />
    </div>
  );
}

function Container28() {
  return (
    <div className="h-[211px] relative shrink-0 w-full" data-name="Container">
      <Paragraph27 />
      <Container29 />
      <Container30 />
      <Container31 />
    </div>
  );
}

function Lesson2Quiz3VariantA() {
  return (
    <div className="absolute bg-white content-stretch flex flex-col h-[231px] items-start left-0 overflow-clip pt-[10px] px-[10px] rounded-[14.99px] top-0 w-[186px]" data-name="Lesson2Quiz3VariantA">
      <Container28 />
    </div>
  );
}

function Container27() {
  return (
    <div className="absolute h-[231px] left-0 top-[842px] w-[207.297px]" data-name="Container">
      <Paragraph26 />
      <Lesson2Quiz3VariantA />
    </div>
  );
}

function Paragraph31() {
  return (
    <div className="absolute h-[21px] left-0 top-[8px] w-[8.945px]" data-name="Paragraph">
      <p className="absolute font-['Inter:Regular',sans-serif] font-normal leading-[21px] left-0 not-italic text-[#364146] text-[14px] top-0 tracking-[-0.17px] whitespace-nowrap">B</p>
    </div>
  );
}

function Paragraph32() {
  return (
    <div className="h-[12px] relative shrink-0 w-[4.844px]" data-name="Paragraph">
      <div className="bg-clip-padding border-0 border-[transparent] border-solid relative size-full">
        <p className="absolute font-['Inter:Regular',sans-serif] font-normal leading-[12px] left-0 not-italic text-[8px] text-white top-0 whitespace-nowrap">2</p>
      </div>
    </div>
  );
}

function Container35() {
  return (
    <div className="bg-[#3b82f6] relative rounded-[16777200px] shrink-0 size-[16px]" data-name="Container">
      <div className="bg-clip-padding border-0 border-[transparent] border-solid content-stretch flex items-center justify-center px-[5.578px] relative size-full">
        <Paragraph32 />
      </div>
    </div>
  );
}

function Paragraph33() {
  return (
    <div className="h-[10.5px] relative shrink-0 w-[19.578px]" data-name="Paragraph">
      <div className="bg-clip-padding border-0 border-[transparent] border-solid relative size-full">
        <p className="absolute font-['Inter:Regular',sans-serif] font-normal leading-[10.5px] left-0 not-italic text-[#8e9199] text-[7px] top-0 tracking-[-0.09px] whitespace-nowrap">Шаг 2</p>
      </div>
    </div>
  );
}

function Container34() {
  return (
    <div className="absolute content-stretch flex gap-[4px] h-[16px] items-center left-0 top-[46.25px] w-[166px]" data-name="Container">
      <Container35 />
      <Paragraph33 />
    </div>
  );
}

function Paragraph34() {
  return (
    <div className="absolute h-[15px] left-0 top-[72.25px] w-[166px]" data-name="Paragraph">
      <p className="absolute font-['Inter:Regular',sans-serif] font-normal leading-[15px] left-0 not-italic text-[#101828] text-[10px] top-[0.5px] tracking-[-0.13px] whitespace-nowrap">Настройки</p>
    </div>
  );
}

function Paragraph35() {
  return (
    <div className="absolute content-stretch flex h-[9px] items-start left-0 top-[97.25px] w-[166px]" data-name="Paragraph">
      <p className="flex-[1_0_0] font-['Inter:Regular',sans-serif] font-normal leading-[9px] min-h-px min-w-px not-italic relative text-[#8e9199] text-[7px] tracking-[-0.09px]">Настройте параметры приложения</p>
    </div>
  );
}

function Paragraph36() {
  return (
    <div className="h-[13.5px] relative shrink-0 w-full" data-name="Paragraph">
      <p className="-translate-x-1/2 absolute font-['Inter:Regular',sans-serif] font-normal leading-[13.5px] left-[71.17px] not-italic text-[9px] text-center text-white top-[0.5px] tracking-[-0.12px] whitespace-nowrap">Продолжить</p>
    </div>
  );
}

function Container36() {
  return (
    <div className="absolute bg-[#3b82f6] content-stretch flex flex-col h-[29.5px] items-start left-0 pt-[8px] px-[12px] rounded-[6px] top-[118.25px] w-[166px]" data-name="Container">
      <Paragraph36 />
    </div>
  );
}

function Paragraph37() {
  return (
    <div className="absolute h-[9px] left-0 top-[155.75px] w-[166px]" data-name="Paragraph">
      <p className="-translate-x-1/2 absolute font-['Inter:Regular',sans-serif] font-normal leading-[9px] left-[83.24px] not-italic text-[#8e9199] text-[6px] text-center top-[-0.5px] tracking-[-0.08px] whitespace-nowrap">Назад</p>
    </div>
  );
}

function Container33() {
  return (
    <div className="h-[211px] relative shrink-0 w-full" data-name="Container">
      <Container34 />
      <Paragraph34 />
      <Paragraph35 />
      <Container36 />
      <Paragraph37 />
    </div>
  );
}

function Lesson2Quiz3VariantB() {
  return (
    <div className="absolute bg-white content-stretch flex flex-col h-[231px] items-start left-0 overflow-clip pt-[10px] px-[10px] rounded-[14.99px] top-0 w-[186px]" data-name="Lesson2Quiz3VariantB">
      <Container33 />
    </div>
  );
}

function Container32() {
  return (
    <div className="absolute h-[231px] left-[247.3px] top-[842px] w-[206.945px]" data-name="Container">
      <Paragraph31 />
      <Lesson2Quiz3VariantB />
    </div>
  );
}

function Paragraph38() {
  return (
    <div className="h-[15px] relative shrink-0 w-[1280px]" data-name="Paragraph">
      <p className="absolute font-['Inter:Regular',sans-serif] font-normal leading-[15px] left-0 not-italic text-[#364146] text-[10px] top-[0.5px] tracking-[-0.13px] whitespace-nowrap">• Путь пользователя к цели</p>
    </div>
  );
}

function Paragraph39() {
  return (
    <div className="h-[15px] relative shrink-0 w-[1280px]" data-name="Paragraph">
      <p className="absolute font-['Inter:Regular',sans-serif] font-normal leading-[15px] left-0 not-italic text-[#364146] text-[10px] top-[0.5px] tracking-[-0.13px] whitespace-nowrap">• Цвет интерфейса</p>
    </div>
  );
}

function Paragraph40() {
  return (
    <div className="flex-[1_0_0] min-h-px min-w-px relative w-[1280px]" data-name="Paragraph">
      <p className="absolute font-['Inter:Regular',sans-serif] font-normal leading-[15px] left-0 not-italic text-[#364146] text-[10px] top-[0.5px] tracking-[-0.13px] whitespace-nowrap">• Типографика</p>
    </div>
  );
}

function Container37() {
  return (
    <div className="absolute content-stretch flex flex-col gap-[8px] h-[61px] items-start left-0 top-[1512px] w-[1280px]" data-name="Container">
      <Paragraph38 />
      <Paragraph39 />
      <Paragraph40 />
    </div>
  );
}

function ImageWithFallback() {
  return (
    <div className="h-[160px] relative shrink-0 w-full" data-name="ImageWithFallback">
      <img alt="" className="absolute inset-0 max-w-none object-cover pointer-events-none size-full" src={imgImageWithFallback} />
    </div>
  );
}

function Container39() {
  return (
    <div className="h-[160px] relative rounded-[8px] shrink-0 w-[140px]" data-name="Container">
      <div className="bg-clip-padding border-0 border-[transparent] border-solid content-stretch flex flex-col items-start overflow-clip relative rounded-[inherit] size-full">
        <ImageWithFallback />
      </div>
    </div>
  );
}

function Container38() {
  return (
    <div className="h-[211px] relative shrink-0 w-full" data-name="Container">
      <div className="flex flex-col justify-center size-full">
        <div className="content-stretch flex flex-col items-start justify-center pl-[13px] py-[25.5px] relative size-full">
          <Container39 />
        </div>
      </div>
    </div>
  );
}

function Lesson2Quiz() {
  return (
    <div className="absolute bg-white content-stretch flex flex-col h-[231px] items-start left-0 overflow-clip pt-[10px] px-[10px] rounded-[14.99px] top-[1265px] w-[186px]" data-name="Lesson2Quiz4">
      <Container38 />
    </div>
  );
}

function Paragraph41() {
  return (
    <div className="h-[15px] relative shrink-0 w-[1280px]" data-name="Paragraph">
      <p className="absolute font-['Inter:Regular',sans-serif] font-normal leading-[15px] left-0 not-italic text-[#364146] text-[10px] top-[0.5px] tracking-[-0.13px] whitespace-nowrap">• С цели пользователя</p>
    </div>
  );
}

function Paragraph42() {
  return (
    <div className="h-[15px] relative shrink-0 w-[1280px]" data-name="Paragraph">
      <p className="absolute font-['Inter:Regular',sans-serif] font-normal leading-[15px] left-0 not-italic text-[#364146] text-[10px] top-[0.5px] tracking-[-0.13px] whitespace-nowrap">• С цвета интерфейса</p>
    </div>
  );
}

function Paragraph43() {
  return (
    <div className="flex-[1_0_0] min-h-px min-w-px relative w-[1280px]" data-name="Paragraph">
      <p className="absolute font-['Inter:Regular',sans-serif] font-normal leading-[15px] left-0 not-italic text-[#364146] text-[10px] top-[0.5px] tracking-[-0.13px] whitespace-nowrap">• С анимации</p>
    </div>
  );
}

function Container40() {
  return (
    <div className="absolute content-stretch flex flex-col gap-[8px] h-[61px] items-start left-0 top-[1906px] w-[1280px]" data-name="Container">
      <Paragraph41 />
      <Paragraph42 />
      <Paragraph43 />
    </div>
  );
}

function Paragraph44() {
  return (
    <div className="h-[24px] relative shrink-0 w-[16px]" data-name="Paragraph">
      <div className="bg-clip-padding border-0 border-[transparent] border-solid relative size-full">
        <p className="absolute font-['Inter:Regular',sans-serif] font-normal leading-[24px] left-0 not-italic text-[#0a0a0a] text-[16px] top-[-0.5px] tracking-[-0.3125px] whitespace-nowrap">👤</p>
      </div>
    </div>
  );
}

function Container42() {
  return (
    <div className="bg-[#3b82f6] relative rounded-[16777200px] shrink-0 size-[30px]" data-name="Container">
      <div className="bg-clip-padding border-0 border-[transparent] border-solid content-stretch flex items-center justify-center px-[7px] relative size-full">
        <Paragraph44 />
      </div>
    </div>
  );
}

function Paragraph45() {
  return (
    <div className="h-[21px] relative shrink-0 w-[13.367px]" data-name="Paragraph">
      <div className="bg-clip-padding border-0 border-[transparent] border-solid relative size-full">
        <p className="absolute font-['Inter:Regular',sans-serif] font-normal leading-[21px] left-0 not-italic text-[#364146] text-[14px] top-0 whitespace-nowrap">→</p>
      </div>
    </div>
  );
}

function Paragraph46() {
  return (
    <div className="h-[18px] relative shrink-0 w-[12px]" data-name="Paragraph">
      <div className="bg-clip-padding border-0 border-[transparent] border-solid relative size-full">
        <p className="absolute font-['Inter:Regular',sans-serif] font-normal leading-[18px] left-0 not-italic text-[#0a0a0a] text-[12px] top-px whitespace-nowrap">🎯</p>
      </div>
    </div>
  );
}

function Container44() {
  return (
    <div className="bg-[#fbbf24] flex-[1_0_0] h-[24px] min-h-px min-w-px relative rounded-[6px]" data-name="Container">
      <div className="flex flex-row items-center justify-center size-full">
        <div className="bg-clip-padding border-0 border-[transparent] border-solid content-stretch flex items-center justify-center px-[6px] relative size-full">
          <Paragraph46 />
        </div>
      </div>
    </div>
  );
}

function Container43() {
  return (
    <div className="h-[24px] relative shrink-0 w-[41.367px]" data-name="Container">
      <div className="bg-clip-padding border-0 border-[transparent] border-solid content-stretch flex gap-[4px] items-center relative size-full">
        <Paragraph45 />
        <Container44 />
      </div>
    </div>
  );
}

function Container41() {
  return (
    <div className="content-stretch flex flex-col gap-[12px] h-[211px] items-center justify-center py-[72.5px] relative shrink-0 w-full" data-name="Container">
      <Container42 />
      <Container43 />
    </div>
  );
}

function Lesson2Quiz1() {
  return (
    <div className="absolute bg-white content-stretch flex flex-col h-[231px] items-start left-0 overflow-clip pt-[10px] px-[10px] rounded-[14.99px] top-[1659px] w-[186px]" data-name="Lesson2Quiz5">
      <Container41 />
    </div>
  );
}

function Paragraph47() {
  return (
    <div className="h-[15px] relative shrink-0 w-[1280px]" data-name="Paragraph">
      <p className="absolute font-['Inter:Regular',sans-serif] font-normal leading-[15px] left-0 not-italic text-[#364146] text-[10px] top-[0.5px] tracking-[-0.13px] whitespace-nowrap">• Случайные действия</p>
    </div>
  );
}

function Paragraph48() {
  return (
    <div className="h-[15px] relative shrink-0 w-[1280px]" data-name="Paragraph">
      <p className="absolute font-['Inter:Regular',sans-serif] font-normal leading-[15px] left-0 not-italic text-[#364146] text-[10px] top-[0.5px] tracking-[-0.13px] whitespace-nowrap">• Четкая последовательность</p>
    </div>
  );
}

function Paragraph49() {
  return (
    <div className="flex-[1_0_0] min-h-px min-w-px relative w-[1280px]" data-name="Paragraph">
      <p className="absolute font-['Inter:Regular',sans-serif] font-normal leading-[15px] left-0 not-italic text-[#364146] text-[10px] top-[0.5px] tracking-[-0.13px] whitespace-nowrap">• Большое количество экранов</p>
    </div>
  );
}

function Container45() {
  return (
    <div className="absolute content-stretch flex flex-col gap-[8px] h-[61px] items-start left-0 top-[2300px] w-[1280px]" data-name="Container">
      <Paragraph47 />
      <Paragraph48 />
      <Paragraph49 />
    </div>
  );
}

function Paragraph50() {
  return (
    <div className="h-[13.5px] relative shrink-0 w-[4.188px]" data-name="Paragraph">
      <div className="bg-clip-padding border-0 border-[transparent] border-solid relative size-full">
        <p className="absolute font-['Inter:Regular',sans-serif] font-normal leading-[13.5px] left-0 not-italic text-[9px] text-white top-[0.5px] whitespace-nowrap">1</p>
      </div>
    </div>
  );
}

function Container48() {
  return (
    <div className="bg-[#3b82f6] relative rounded-[6px] shrink-0 size-[30px]" data-name="Container">
      <div className="bg-clip-padding border-0 border-[transparent] border-solid content-stretch flex items-center justify-center px-[12.906px] relative size-full">
        <Paragraph50 />
      </div>
    </div>
  );
}

function Paragraph51() {
  return (
    <div className="h-[18px] relative shrink-0 w-[11.461px]" data-name="Paragraph">
      <div className="bg-clip-padding border-0 border-[transparent] border-solid relative size-full">
        <p className="absolute font-['Inter:Regular',sans-serif] font-normal leading-[18px] left-0 not-italic text-[#364146] text-[12px] top-[0.5px] whitespace-nowrap">→</p>
      </div>
    </div>
  );
}

function Paragraph52() {
  return (
    <div className="h-[13.5px] relative shrink-0 w-[5.453px]" data-name="Paragraph">
      <div className="bg-clip-padding border-0 border-[transparent] border-solid relative size-full">
        <p className="absolute font-['Inter:Regular',sans-serif] font-normal leading-[13.5px] left-0 not-italic text-[9px] text-white top-[0.5px] whitespace-nowrap">2</p>
      </div>
    </div>
  );
}

function Container49() {
  return (
    <div className="bg-[#3b82f6] relative rounded-[6px] shrink-0 size-[30px]" data-name="Container">
      <div className="bg-clip-padding border-0 border-[transparent] border-solid content-stretch flex items-center justify-center px-[12.273px] relative size-full">
        <Paragraph52 />
      </div>
    </div>
  );
}

function Paragraph53() {
  return (
    <div className="h-[18px] relative shrink-0 w-[11.461px]" data-name="Paragraph">
      <div className="bg-clip-padding border-0 border-[transparent] border-solid relative size-full">
        <p className="absolute font-['Inter:Regular',sans-serif] font-normal leading-[18px] left-0 not-italic text-[#364146] text-[12px] top-[0.5px] whitespace-nowrap">→</p>
      </div>
    </div>
  );
}

function Paragraph54() {
  return (
    <div className="h-[13.5px] relative shrink-0 w-[5.734px]" data-name="Paragraph">
      <div className="bg-clip-padding border-0 border-[transparent] border-solid relative size-full">
        <p className="absolute font-['Inter:Regular',sans-serif] font-normal leading-[13.5px] left-0 not-italic text-[9px] text-white top-[0.5px] whitespace-nowrap">3</p>
      </div>
    </div>
  );
}

function Container50() {
  return (
    <div className="bg-[#3b82f6] flex-[1_0_0] h-[30px] min-h-px min-w-px relative rounded-[6px]" data-name="Container">
      <div className="flex flex-row items-center justify-center size-full">
        <div className="bg-clip-padding border-0 border-[transparent] border-solid content-stretch flex items-center justify-center px-[12.133px] relative size-full">
          <Paragraph54 />
        </div>
      </div>
    </div>
  );
}

function Container47() {
  return (
    <div className="h-[30px] relative shrink-0 w-[136.922px]" data-name="Container">
      <div className="bg-clip-padding border-0 border-[transparent] border-solid content-stretch flex gap-[6px] items-center relative size-full">
        <Container48 />
        <Paragraph51 />
        <Container49 />
        <Paragraph53 />
        <Container50 />
      </div>
    </div>
  );
}

function Container46() {
  return (
    <div className="content-stretch flex flex-col h-[211px] items-center justify-center py-[90.5px] relative shrink-0 w-full" data-name="Container">
      <Container47 />
    </div>
  );
}

function Lesson2Quiz2() {
  return (
    <div className="absolute bg-white content-stretch flex flex-col h-[231px] items-start left-0 overflow-clip pt-[10px] px-[10px] rounded-[14.99px] top-[2053px] w-[186px]" data-name="Lesson2Quiz6">
      <Container46 />
    </div>
  );
}

function Paragraph55() {
  return (
    <div className="h-[15px] relative shrink-0 w-[1280px]" data-name="Paragraph">
      <p className="absolute font-['Inter:Regular',sans-serif] font-normal leading-[15px] left-0 not-italic text-[#364146] text-[10px] top-[0.5px] tracking-[-0.13px] whitespace-nowrap">• Шаги пользователя</p>
    </div>
  );
}

function Paragraph56() {
  return (
    <div className="h-[15px] relative shrink-0 w-[1280px]" data-name="Paragraph">
      <p className="absolute font-['Inter:Regular',sans-serif] font-normal leading-[15px] left-0 not-italic text-[#364146] text-[10px] top-[0.5px] tracking-[-0.13px] whitespace-nowrap">• Цель</p>
    </div>
  );
}

function Paragraph57() {
  return (
    <div className="h-[15px] relative shrink-0 w-[1280px]" data-name="Paragraph">
      <p className="absolute font-['Inter:Regular',sans-serif] font-normal leading-[15px] left-0 not-italic text-[#364146] text-[10px] top-[0.5px] tracking-[-0.13px] whitespace-nowrap">• Цвета интерфейса</p>
    </div>
  );
}

function Paragraph58() {
  return (
    <div className="flex-[1_0_0] min-h-px min-w-px relative w-[1280px]" data-name="Paragraph">
      <p className="absolute font-['Inter:Regular',sans-serif] font-normal leading-[15px] left-0 not-italic text-[#364146] text-[10px] top-[0.5px] tracking-[-0.13px] whitespace-nowrap">• Переходы между экранами</p>
    </div>
  );
}

function Container51() {
  return (
    <div className="absolute content-stretch flex flex-col gap-[8px] h-[84px] items-start left-0 top-[2800px] w-[1280px]" data-name="Container">
      <Paragraph55 />
      <Paragraph56 />
      <Paragraph57 />
      <Paragraph58 />
    </div>
  );
}

function Container54() {
  return (
    <div className="bg-[#f7f8fc] h-[35px] relative rounded-[4px] shrink-0 w-[30px]" data-name="Container">
      <div aria-hidden="true" className="absolute border border-[#d1d3db] border-solid inset-0 pointer-events-none rounded-[4px]" />
    </div>
  );
}

function Paragraph59() {
  return (
    <div className="h-[18px] relative shrink-0 w-[11.461px]" data-name="Paragraph">
      <div className="bg-clip-padding border-0 border-[transparent] border-solid relative size-full">
        <p className="absolute font-['Inter:Regular',sans-serif] font-normal leading-[18px] left-0 not-italic text-[#364146] text-[12px] top-[0.5px] whitespace-nowrap">→</p>
      </div>
    </div>
  );
}

function Container55() {
  return (
    <div className="bg-[#f7f8fc] h-[35px] relative rounded-[4px] shrink-0 w-[30px]" data-name="Container">
      <div aria-hidden="true" className="absolute border border-[#d1d3db] border-solid inset-0 pointer-events-none rounded-[4px]" />
    </div>
  );
}

function Paragraph60() {
  return (
    <div className="h-[18px] relative shrink-0 w-[11.461px]" data-name="Paragraph">
      <div className="bg-clip-padding border-0 border-[transparent] border-solid relative size-full">
        <p className="absolute font-['Inter:Regular',sans-serif] font-normal leading-[18px] left-0 not-italic text-[#364146] text-[12px] top-[0.5px] whitespace-nowrap">→</p>
      </div>
    </div>
  );
}

function Paragraph61() {
  return (
    <div className="h-[24px] relative shrink-0 w-[13.547px]" data-name="Paragraph">
      <div className="bg-clip-padding border-0 border-[transparent] border-solid relative size-full">
        <p className="absolute font-['Inter:Regular',sans-serif] font-normal leading-[24px] left-0 not-italic text-[#0a0a0a] text-[16px] top-[-0.5px] tracking-[-0.3125px] whitespace-nowrap">✓</p>
      </div>
    </div>
  );
}

function Container56() {
  return (
    <div className="bg-[#22c55e] flex-[1_0_0] h-[35px] min-h-px min-w-px relative rounded-[4px]" data-name="Container">
      <div className="flex flex-row items-center justify-center size-full">
        <div className="bg-clip-padding border-0 border-[transparent] border-solid content-stretch flex items-center justify-center px-[8.227px] relative size-full">
          <Paragraph61 />
        </div>
      </div>
    </div>
  );
}

function Container53() {
  return (
    <div className="h-[35px] relative shrink-0 w-[128.922px]" data-name="Container">
      <div className="bg-clip-padding border-0 border-[transparent] border-solid content-stretch flex gap-[4px] items-center relative size-full">
        <Container54 />
        <Paragraph59 />
        <Container55 />
        <Paragraph60 />
        <Container56 />
      </div>
    </div>
  );
}

function Container52() {
  return (
    <div className="content-stretch flex flex-col h-[211px] items-center justify-center py-[88px] relative shrink-0 w-full" data-name="Container">
      <Container53 />
    </div>
  );
}

function Lesson2Quiz3() {
  return (
    <div className="absolute bg-white content-stretch flex flex-col h-[231px] items-start left-0 overflow-clip pt-[10px] px-[10px] rounded-[14.99px] top-[2553px] w-[186px]" data-name="Lesson2Quiz7">
      <Container52 />
    </div>
  );
}

function Paragraph62() {
  return (
    <div className="h-[15px] relative shrink-0 w-[1280px]" data-name="Paragraph">
      <p className="absolute font-['Inter:Regular',sans-serif] font-normal leading-[15px] left-0 not-italic text-[#364146] text-[10px] top-[0.5px] tracking-[-0.13px] whitespace-nowrap">• Минимум шагов</p>
    </div>
  );
}

function Paragraph63() {
  return (
    <div className="h-[15px] relative shrink-0 w-[1280px]" data-name="Paragraph">
      <p className="absolute font-['Inter:Regular',sans-serif] font-normal leading-[15px] left-0 not-italic text-[#364146] text-[10px] top-[0.5px] tracking-[-0.13px] whitespace-nowrap">• Понятные действия</p>
    </div>
  );
}

function Paragraph64() {
  return (
    <div className="h-[15px] relative shrink-0 w-[1280px]" data-name="Paragraph">
      <p className="absolute font-['Inter:Regular',sans-serif] font-normal leading-[15px] left-0 not-italic text-[#364146] text-[10px] top-[0.5px] tracking-[-0.13px] whitespace-nowrap">• Сложная структура</p>
    </div>
  );
}

function Paragraph65() {
  return (
    <div className="flex-[1_0_0] min-h-px min-w-px relative w-[1280px]" data-name="Paragraph">
      <p className="absolute font-['Inter:Regular',sans-serif] font-normal leading-[15px] left-0 not-italic text-[#364146] text-[10px] top-[0.5px] tracking-[-0.13px] whitespace-nowrap">• Логичная последовательность</p>
    </div>
  );
}

function Container57() {
  return (
    <div className="absolute content-stretch flex flex-col gap-[8px] h-[84px] items-start left-0 top-[3217px] w-[1280px]" data-name="Container">
      <Paragraph62 />
      <Paragraph63 />
      <Paragraph64 />
      <Paragraph65 />
    </div>
  );
}

function Paragraph66() {
  return (
    <div className="h-[13.5px] relative shrink-0 w-[4.188px]" data-name="Paragraph">
      <div className="bg-clip-padding border-0 border-[transparent] border-solid relative size-full">
        <p className="absolute font-['Inter:Regular',sans-serif] font-normal leading-[13.5px] left-0 not-italic text-[9px] text-white top-[0.5px] whitespace-nowrap">1</p>
      </div>
    </div>
  );
}

function Container60() {
  return (
    <div className="bg-[#3b82f6] relative rounded-[6px] shrink-0 size-[30px]" data-name="Container">
      <div className="bg-clip-padding border-0 border-[transparent] border-solid content-stretch flex items-center justify-center px-[12.906px] relative size-full">
        <Paragraph66 />
      </div>
    </div>
  );
}

function Paragraph67() {
  return (
    <div className="h-[18px] relative shrink-0 w-[11.461px]" data-name="Paragraph">
      <div className="bg-clip-padding border-0 border-[transparent] border-solid relative size-full">
        <p className="absolute font-['Inter:Regular',sans-serif] font-normal leading-[18px] left-0 not-italic text-[#364146] text-[12px] top-[0.5px] whitespace-nowrap">→</p>
      </div>
    </div>
  );
}

function Paragraph68() {
  return (
    <div className="h-[13.5px] relative shrink-0 w-[5.453px]" data-name="Paragraph">
      <div className="bg-clip-padding border-0 border-[transparent] border-solid relative size-full">
        <p className="absolute font-['Inter:Regular',sans-serif] font-normal leading-[13.5px] left-0 not-italic text-[9px] text-white top-[0.5px] whitespace-nowrap">2</p>
      </div>
    </div>
  );
}

function Container61() {
  return (
    <div className="bg-[#3b82f6] flex-[1_0_0] h-[30px] min-h-px min-w-px relative rounded-[6px]" data-name="Container">
      <div className="flex flex-row items-center justify-center size-full">
        <div className="bg-clip-padding border-0 border-[transparent] border-solid content-stretch flex items-center justify-center px-[12.273px] relative size-full">
          <Paragraph68 />
        </div>
      </div>
    </div>
  );
}

function Container59() {
  return (
    <div className="h-[30px] relative shrink-0 w-[79.461px]" data-name="Container">
      <div className="bg-clip-padding border-0 border-[transparent] border-solid content-stretch flex gap-[4px] items-center relative size-full">
        <Container60 />
        <Paragraph67 />
        <Container61 />
      </div>
    </div>
  );
}

function Container58() {
  return (
    <div className="content-stretch flex flex-col h-[211px] items-center justify-center py-[90.5px] relative shrink-0 w-full" data-name="Container">
      <Container59 />
    </div>
  );
}

function Lesson2Quiz4() {
  return (
    <div className="absolute bg-white content-stretch flex flex-col h-[231px] items-start left-0 overflow-clip pt-[10px] px-[10px] rounded-[14.99px] top-[2970px] w-[186px]" data-name="Lesson2Quiz8">
      <Container58 />
    </div>
  );
}

function Paragraph69() {
  return (
    <div className="h-[15px] relative shrink-0 w-[1280px]" data-name="Paragraph">
      <p className="absolute font-['Inter:Regular',sans-serif] font-normal leading-[15px] left-0 not-italic text-[#364146] text-[10px] top-[0.5px] tracking-[-0.13px] whitespace-nowrap">• Лишние шаги</p>
    </div>
  );
}

function Paragraph70() {
  return (
    <div className="h-[15px] relative shrink-0 w-[1280px]" data-name="Paragraph">
      <p className="absolute font-['Inter:Regular',sans-serif] font-normal leading-[15px] left-0 not-italic text-[#364146] text-[10px] top-[0.5px] tracking-[-0.13px] whitespace-nowrap">• Непонятные переходы</p>
    </div>
  );
}

function Paragraph71() {
  return (
    <div className="h-[15px] relative shrink-0 w-[1280px]" data-name="Paragraph">
      <p className="absolute font-['Inter:Regular',sans-serif] font-normal leading-[15px] left-0 not-italic text-[#364146] text-[10px] top-[0.5px] tracking-[-0.13px] whitespace-nowrap">• Четкая логика</p>
    </div>
  );
}

function Paragraph72() {
  return (
    <div className="flex-[1_0_0] min-h-px min-w-px relative w-[1280px]" data-name="Paragraph">
      <p className="absolute font-['Inter:Regular',sans-serif] font-normal leading-[15px] left-0 not-italic text-[#364146] text-[10px] top-[0.5px] tracking-[-0.13px] whitespace-nowrap">• Много экранов</p>
    </div>
  );
}

function Container62() {
  return (
    <div className="absolute content-stretch flex flex-col gap-[8px] h-[84px] items-start left-0 top-[3634px] w-[1280px]" data-name="Container">
      <Paragraph69 />
      <Paragraph70 />
      <Paragraph71 />
      <Paragraph72 />
    </div>
  );
}

function Container65() {
  return (
    <div className="bg-[#f7f8fc] relative rounded-[3px] shrink-0 size-[15px]" data-name="Container">
      <div aria-hidden="true" className="absolute border border-[#d1d3db] border-solid inset-0 pointer-events-none rounded-[3px]" />
    </div>
  );
}

function Paragraph73() {
  return (
    <div className="h-[15px] relative shrink-0 w-[9.18px]" data-name="Paragraph">
      <div className="bg-clip-padding border-0 border-[transparent] border-solid relative size-full">
        <p className="absolute font-['Inter:Regular',sans-serif] font-normal leading-[15px] left-0 not-italic text-[#0a0a0a] text-[10px] top-[0.5px] tracking-[0.1172px] whitespace-nowrap">→</p>
      </div>
    </div>
  );
}

function Container66() {
  return (
    <div className="bg-[#f7f8fc] relative rounded-[3px] shrink-0 size-[15px]" data-name="Container">
      <div aria-hidden="true" className="absolute border border-[#d1d3db] border-solid inset-0 pointer-events-none rounded-[3px]" />
    </div>
  );
}

function Paragraph74() {
  return (
    <div className="h-[15px] relative shrink-0 w-[9.18px]" data-name="Paragraph">
      <div className="bg-clip-padding border-0 border-[transparent] border-solid relative size-full">
        <p className="absolute font-['Inter:Regular',sans-serif] font-normal leading-[15px] left-0 not-italic text-[#0a0a0a] text-[10px] top-[0.5px] tracking-[0.1172px] whitespace-nowrap">→</p>
      </div>
    </div>
  );
}

function Container67() {
  return (
    <div className="bg-[#f7f8fc] relative rounded-[3px] shrink-0 size-[15px]" data-name="Container">
      <div aria-hidden="true" className="absolute border border-[#d1d3db] border-solid inset-0 pointer-events-none rounded-[3px]" />
    </div>
  );
}

function Container64() {
  return (
    <div className="h-[15px] relative shrink-0 w-[166px]" data-name="Container">
      <div className="bg-clip-padding border-0 border-[transparent] border-solid content-stretch flex gap-[2px] items-start relative size-full">
        <Container65 />
        <Paragraph73 />
        <Container66 />
        <Paragraph74 />
        <Container67 />
      </div>
    </div>
  );
}

function Paragraph75() {
  return (
    <div className="h-[15px] relative shrink-0 w-[7.93px]" data-name="Paragraph">
      <div className="bg-clip-padding border-0 border-[transparent] border-solid relative size-full">
        <p className="absolute font-['Inter:Regular',sans-serif] font-normal leading-[15px] left-0 not-italic text-[#0a0a0a] text-[10px] top-[0.5px] tracking-[0.1172px] whitespace-nowrap">↓</p>
      </div>
    </div>
  );
}

function Container68() {
  return (
    <div className="h-[15px] relative shrink-0 w-[166px]" data-name="Container">
      <div className="bg-clip-padding border-0 border-[transparent] border-solid content-stretch flex items-start relative size-full">
        <Paragraph75 />
      </div>
    </div>
  );
}

function Container70() {
  return (
    <div className="bg-[#f7f8fc] relative rounded-[3px] shrink-0 size-[15px]" data-name="Container">
      <div aria-hidden="true" className="absolute border border-[#d1d3db] border-solid inset-0 pointer-events-none rounded-[3px]" />
    </div>
  );
}

function Paragraph76() {
  return (
    <div className="h-[15px] relative shrink-0 w-[9.18px]" data-name="Paragraph">
      <div className="bg-clip-padding border-0 border-[transparent] border-solid relative size-full">
        <p className="absolute font-['Inter:Regular',sans-serif] font-normal leading-[15px] left-0 not-italic text-[#0a0a0a] text-[10px] top-[0.5px] tracking-[0.1172px] whitespace-nowrap">→</p>
      </div>
    </div>
  );
}

function Container71() {
  return (
    <div className="bg-[#f7f8fc] relative rounded-[3px] shrink-0 size-[15px]" data-name="Container">
      <div aria-hidden="true" className="absolute border border-[#d1d3db] border-solid inset-0 pointer-events-none rounded-[3px]" />
    </div>
  );
}

function Container69() {
  return (
    <div className="h-[15px] relative shrink-0 w-[166px]" data-name="Container">
      <div className="bg-clip-padding border-0 border-[transparent] border-solid content-stretch flex gap-[2px] items-start relative size-full">
        <Container70 />
        <Paragraph76 />
        <Container71 />
      </div>
    </div>
  );
}

function Container63() {
  return (
    <div className="content-stretch flex flex-col gap-[6px] h-[211px] items-start justify-center py-[77px] relative shrink-0 w-full" data-name="Container">
      <Container64 />
      <Container68 />
      <Container69 />
    </div>
  );
}

function Lesson2Quiz5() {
  return (
    <div className="absolute bg-white content-stretch flex flex-col h-[231px] items-start left-0 overflow-clip pt-[10px] px-[10px] rounded-[14.99px] top-[3387px] w-[186px]" data-name="Lesson2Quiz9">
      <Container63 />
    </div>
  );
}

function Paragraph77() {
  return (
    <div className="h-[24px] relative shrink-0 w-[16px]" data-name="Paragraph">
      <div className="bg-clip-padding border-0 border-[transparent] border-solid relative size-full">
        <p className="absolute font-['Inter:Regular',sans-serif] font-normal leading-[24px] left-0 not-italic text-[#0a0a0a] text-[16px] top-[-0.5px] tracking-[-0.3125px] whitespace-nowrap">👤</p>
      </div>
    </div>
  );
}

function Container72() {
  return (
    <div className="bg-[#3b82f6] content-stretch flex items-center justify-center px-[7px] relative rounded-[16777200px] shrink-0 size-[30px]" data-name="Container">
      <Paragraph77 />
    </div>
  );
}

function Lesson2Quiz10Card() {
  return (
    <div className="flex items-center justify-center w-full h-full" data-name="Lesson2Quiz10Card1">
      <Container72 />
    </div>
  );
}

function Container74() {
  return (
    <div className="bg-[#f7f8fc] h-[24px] relative rounded-[4px] shrink-0 w-[20px]" data-name="Container">
      <div aria-hidden="true" className="absolute border border-[#d1d3db] border-solid inset-0 pointer-events-none rounded-[4px]" />
    </div>
  );
}

function Paragraph78() {
  return (
    <div className="h-[18px] relative shrink-0 w-[10.875px]" data-name="Paragraph">
      <div className="bg-clip-padding border-0 border-[transparent] border-solid relative size-full">
        <p className="absolute font-['Inter:Regular',sans-serif] font-normal leading-[18px] left-0 not-italic text-[#f7f8fc] text-[12px] top-px whitespace-nowrap">→</p>
      </div>
    </div>
  );
}

function Container75() {
  return (
    <div className="bg-[#f7f8fc] flex-[1_0_0] h-[24px] min-h-px min-w-px relative rounded-[4px]" data-name="Container">
      <div aria-hidden="true" className="absolute border border-[#d1d3db] border-solid inset-0 pointer-events-none rounded-[4px]" />
    </div>
  );
}

function Container73() {
  return (
    <div className="content-stretch flex gap-[4px] h-[24px] items-center relative shrink-0 w-[58.875px]" data-name="Container">
      <Container74 />
      <Paragraph78 />
      <Container75 />
    </div>
  );
}

function Lesson2Quiz10Card1() {
  return (
    <div className="flex items-center justify-center w-full h-full" data-name="Lesson2Quiz10Card2">
      <Container73 />
    </div>
  );
}

function Paragraph79() {
  return (
    <div className="h-[24px] relative shrink-0 w-[14.094px]" data-name="Paragraph">
      <div className="bg-clip-padding border-0 border-[transparent] border-solid relative size-full">
        <p className="absolute font-['Inter:Regular',sans-serif] font-normal leading-[24px] left-0 not-italic text-[16px] text-[rgba(255,255,255,0)] top-[-1px] whitespace-nowrap">✓</p>
      </div>
    </div>
  );
}

function Container76() {
  return (
    <div className="bg-[#22c55e] content-stretch flex items-center justify-center px-[7.953px] relative rounded-[6px] shrink-0 size-[30px]" data-name="Container">
      <Paragraph79 />
    </div>
  );
}

function Lesson2Quiz10Card2() {
  return (
    <div className="flex items-center justify-center w-full h-full" data-name="Lesson2Quiz10Card3">
      <Container76 />
    </div>
  );
}

function Paragraph80() {
  return (
    <div className="absolute h-[15px] left-0 top-[4014px] w-[1280px]" data-name="Paragraph">
      <p className="absolute font-['Inter:Regular',sans-serif] font-normal leading-[15px] left-0 not-italic text-[#364146] text-[10px] top-[0.5px] tracking-[-0.13px] whitespace-nowrap">• Начало сценария</p>
    </div>
  );
}

function Paragraph81() {
  return (
    <div className="absolute h-[15px] left-0 top-[4037px] w-[1280px]" data-name="Paragraph">
      <p className="absolute font-['Inter:Regular',sans-serif] font-normal leading-[15px] left-0 not-italic text-[#364146] text-[10px] top-[0.5px] tracking-[-0.13px] whitespace-nowrap">• Процесс</p>
    </div>
  );
}

function Paragraph82() {
  return (
    <div className="absolute h-[15px] left-0 top-[4060px] w-[1280px]" data-name="Paragraph">
      <p className="absolute font-['Inter:Regular',sans-serif] font-normal leading-[15px] left-0 not-italic text-[#364146] text-[10px] top-[0.5px] tracking-[-0.13px] whitespace-nowrap">• Достижение цели</p>
    </div>
  );
}

function Paragraph83() {
  return (
    <div className="h-[12px] relative shrink-0 w-full" data-name="Paragraph">
      <p className="absolute font-['Inter:Regular',sans-serif] font-normal leading-[12px] left-0 not-italic text-[#f7f8fc] text-[8px] top-0 tracking-[-0.1px] whitespace-nowrap">Продолжить</p>
    </div>
  );
}

function Container77() {
  return (
    <div className="bg-[#3b82f6] content-stretch flex flex-col h-[24px] items-start pt-[6px] px-[12px] relative rounded-[6px] shrink-0 w-[72.648px]" data-name="Container">
      <Paragraph83 />
    </div>
  );
}

function Lesson2Quiz11Card() {
  return (
    <div className="flex items-center justify-center w-full h-full" data-name="Lesson2Quiz11Card1">
      <Container77 />
    </div>
  );
}

function Paragraph84() {
  return (
    <div className="h-[9px] relative shrink-0 w-full" data-name="Paragraph">
      <p className="absolute font-['Inter:Regular',sans-serif] font-normal leading-[9px] left-0 not-italic text-[#8e9199] text-[6px] top-[-0.5px] tracking-[-0.08px] whitespace-nowrap">Поле 1</p>
    </div>
  );
}

function Container78() {
  return (
    <div className="bg-[#f7f8fc] content-stretch flex flex-col h-[15px] items-start pt-[3px] px-[6px] relative rounded-[4px] shrink-0 w-[114px]" data-name="Container">
      <Paragraph84 />
    </div>
  );
}

function Paragraph85() {
  return (
    <div className="h-[9px] relative shrink-0 w-full" data-name="Paragraph">
      <p className="absolute font-['Inter:Regular',sans-serif] font-normal leading-[9px] left-0 not-italic text-[#8e9199] text-[6px] top-[-0.5px] tracking-[-0.08px] whitespace-nowrap">Поле 2</p>
    </div>
  );
}

function Container79() {
  return (
    <div className="bg-[#f7f8fc] content-stretch flex flex-col h-[15px] items-start pt-[3px] px-[6px] relative rounded-[4px] shrink-0 w-[114px]" data-name="Container">
      <Paragraph85 />
    </div>
  );
}

function Lesson2Quiz11Card1() {
  return (
    <div className="flex items-center justify-center w-full h-full" data-name="Lesson2Quiz11Card2">
      <Container78 />
      <Container79 />
    </div>
  );
}

function Paragraph86() {
  return (
    <div className="h-[24px] relative shrink-0 w-[13.547px]" data-name="Paragraph">
      <div className="bg-clip-padding border-0 border-[transparent] border-solid relative size-full">
        <p className="absolute font-['Inter:Regular',sans-serif] font-normal leading-[24px] left-0 not-italic text-[#0a0a0a] text-[16px] top-[-0.5px] tracking-[-0.3125px] whitespace-nowrap">✓</p>
      </div>
    </div>
  );
}

function Container80() {
  return (
    <div className="bg-[#22c55e] content-stretch flex items-center justify-center px-[8.227px] relative rounded-[16777200px] shrink-0 size-[30px]" data-name="Container">
      <Paragraph86 />
    </div>
  );
}

function Lesson2Quiz11Card2() {
  return (
    <div className="flex items-center justify-center w-full h-full" data-name="Lesson2Quiz11Card3">
      <Container80 />
    </div>
  );
}

function Paragraph87() {
  return (
    <div className="absolute h-[15px] left-0 top-[4265px] w-[1280px]" data-name="Paragraph">
      <p className="absolute font-['Inter:Regular',sans-serif] font-normal leading-[15px] left-0 not-italic text-[#364146] text-[10px] top-[0.5px] tracking-[-0.13px] whitespace-nowrap">• Переход к следующему шагу</p>
    </div>
  );
}

function Paragraph88() {
  return (
    <div className="absolute h-[15px] left-0 top-[4288px] w-[1280px]" data-name="Paragraph">
      <p className="absolute font-['Inter:Regular',sans-serif] font-normal leading-[15px] left-0 not-italic text-[#364146] text-[10px] top-[0.5px] tracking-[-0.13px] whitespace-nowrap">• Сбор данных</p>
    </div>
  );
}

function Paragraph89() {
  return (
    <div className="absolute h-[15px] left-0 top-[4311px] w-[1280px]" data-name="Paragraph">
      <p className="absolute font-['Inter:Regular',sans-serif] font-normal leading-[15px] left-0 not-italic text-[#364146] text-[10px] top-[0.5px] tracking-[-0.13px] whitespace-nowrap">• Завершение сценария</p>
    </div>
  );
}

function Container82() {
  return (
    <div className="bg-[#f7f8fc] relative rounded-[2px] shrink-0 size-[12px]" data-name="Container">
      <div aria-hidden="true" className="absolute border border-[#d1d3db] border-solid inset-0 pointer-events-none rounded-[2px]" />
    </div>
  );
}

function Paragraph90() {
  return (
    <div className="h-[12px] relative shrink-0 w-[7.453px]" data-name="Paragraph">
      <div className="bg-clip-padding border-0 border-[transparent] border-solid relative size-full">
        <p className="absolute font-['Inter:Regular',sans-serif] font-normal leading-[12px] left-0 not-italic text-[#f7f8fc] text-[8px] top-[0.5px] tracking-[0.2057px] whitespace-nowrap">→</p>
      </div>
    </div>
  );
}

function Container83() {
  return (
    <div className="bg-[#f7f8fc] relative rounded-[2px] shrink-0 size-[12px]" data-name="Container">
      <div aria-hidden="true" className="absolute border border-[#d1d3db] border-solid inset-0 pointer-events-none rounded-[2px]" />
    </div>
  );
}

function Paragraph91() {
  return (
    <div className="h-[12px] relative shrink-0 w-[7.453px]" data-name="Paragraph">
      <div className="bg-clip-padding border-0 border-[transparent] border-solid relative size-full">
        <p className="absolute font-['Inter:Regular',sans-serif] font-normal leading-[12px] left-0 not-italic text-[#f7f8fc] text-[8px] top-[0.5px] tracking-[0.2057px] whitespace-nowrap">→</p>
      </div>
    </div>
  );
}

function Container84() {
  return (
    <div className="bg-[#f7f8fc] relative rounded-[2px] shrink-0 size-[12px]" data-name="Container">
      <div aria-hidden="true" className="absolute border border-[#d1d3db] border-solid inset-0 pointer-events-none rounded-[2px]" />
    </div>
  );
}

function Container81() {
  return (
    <div className="content-stretch flex gap-[2px] h-[12px] items-start relative shrink-0 w-[114px]" data-name="Container">
      <Container82 />
      <Paragraph90 />
      <Container83 />
      <Paragraph91 />
      <Container84 />
    </div>
  );
}

function Paragraph92() {
  return <div className="h-[7.5px] shrink-0 w-[114px]" data-name="Paragraph" />;
}

function Lesson2Quiz12Card() {
  return (
    <div className="flex items-center justify-center w-full h-full" data-name="Lesson2Quiz12Card1">
      <Container81 />
      <Paragraph92 />
    </div>
  );
}

function Container86() {
  return (
    <div className="bg-[#f7f8fc] relative rounded-[2px] shrink-0 size-[12px]" data-name="Container">
      <div aria-hidden="true" className="absolute border border-[#d1d3db] border-solid inset-0 pointer-events-none rounded-[2px]" />
    </div>
  );
}

function Paragraph93() {
  return (
    <div className="h-[12px] relative shrink-0 w-[7.875px]" data-name="Paragraph">
      <div className="bg-clip-padding border-0 border-[transparent] border-solid relative size-full">
        <p className="absolute font-['Inter:Regular',sans-serif] font-normal leading-[12px] left-0 not-italic text-[8px] text-white top-[0.5px] tracking-[0.2057px] whitespace-nowrap">↔</p>
      </div>
    </div>
  );
}

function Container87() {
  return (
    <div className="bg-[#f7f8fc] relative rounded-[2px] shrink-0 size-[12px]" data-name="Container">
      <div aria-hidden="true" className="absolute border border-[#d1d3db] border-solid inset-0 pointer-events-none rounded-[2px]" />
    </div>
  );
}

function Container85() {
  return (
    <div className="content-stretch flex gap-[2px] h-[12px] items-start relative shrink-0 w-[114px]" data-name="Container">
      <Container86 />
      <Paragraph93 />
      <Container87 />
    </div>
  );
}

function Paragraph94() {
  return <div className="h-[7.5px] shrink-0 w-[114px]" data-name="Paragraph" />;
}

function Lesson2Quiz12Card1() {
  return (
    <div className="flex items-center justify-center w-full h-full" data-name="Lesson2Quiz12Card2">
      <Container85 />
      <Paragraph94 />
    </div>
  );
}

function Paragraph95() {
  return (
    <div className="h-[9px] relative shrink-0 w-[2.969px]" data-name="Paragraph">
      <div className="bg-clip-padding border-0 border-[transparent] border-solid relative size-full">
        <p className="-translate-x-1/2 absolute font-['Inter:Regular',sans-serif] font-normal leading-[21px] left-[0.33px] not-italic text-[#8e9199] text-[14px] text-center top-[-6.5px] tracking-[-0.1867px] whitespace-nowrap">?</p>
      </div>
    </div>
  );
}

function Container88() {
  return (
    <div className="bg-[#f7f8fc] content-stretch flex items-center justify-center px-[23.516px] py-px relative rounded-[4px] shrink-0 size-[50px]" data-name="Container">
      <div aria-hidden="true" className="absolute border border-[#d1d3db] border-solid inset-0 pointer-events-none rounded-[4px]" />
      <Paragraph95 />
    </div>
  );
}

function Lesson2Quiz12Card2() {
  return (
    <div className="flex items-center justify-center w-full h-full" data-name="Lesson2Quiz12Card3">
      <Container88 />
    </div>
  );
}

function Paragraph96() {
  return (
    <div className="absolute h-[15px] left-0 top-[4516px] w-[1280px]" data-name="Paragraph">
      <p className="absolute font-['Inter:Regular',sans-serif] font-normal leading-[15px] left-0 not-italic text-[#364146] text-[10px] top-[0.5px] tracking-[-0.13px] whitespace-nowrap">• Пользователь устает</p>
    </div>
  );
}

function Paragraph97() {
  return (
    <div className="absolute h-[15px] left-0 top-[4539px] w-[1280px]" data-name="Paragraph">
      <p className="absolute font-['Inter:Regular',sans-serif] font-normal leading-[15px] left-0 not-italic text-[#364146] text-[10px] top-[0.5px] tracking-[-0.13px] whitespace-nowrap">• Пользователь теряется</p>
    </div>
  );
}

function Paragraph98() {
  return (
    <div className="absolute h-[15px] left-0 top-[4562px] w-[1280px]" data-name="Paragraph">
      <p className="absolute font-['Inter:Regular',sans-serif] font-normal leading-[15px] left-0 not-italic text-[#364146] text-[10px] top-[0.5px] tracking-[-0.13px] whitespace-nowrap">• Пользователь не понимает, что делать дальше</p>
    </div>
  );
}

// ─────────────────────────────────────────────────────────────────────────────
// Named exports for LessonQuizPage (quiz_user_flow visuals)
// ─────────────────────────────────────────────────────────────────────────────
const CW: React.CSSProperties = { position: "relative", width: 260, height: 180, overflow: "hidden", borderRadius: 15, background: "white" };
const CI: React.CSSProperties = { position: "absolute", inset: 0, padding: "14px 16px", display: "flex", flexDirection: "column", justifyContent: "center", overflow: "hidden" };

function Step({ n, label, active }: { n: number; label: string; active?: boolean }) {
  return (
    <div style={{ display: "flex", flexDirection: "column", alignItems: "center", gap: 4, flex: 1 }}>
      <div style={{ width: 28, height: 28, borderRadius: "50%", background: active ? "#3b82f6" : "#e5e7eb", display: "flex", alignItems: "center", justifyContent: "center" }}>
        <span style={{ fontSize: 10, fontFamily: "Inter, sans-serif", color: active ? "white" : "#9ca3af", fontWeight: 600 }}>{n}</span>
      </div>
      <span style={{ fontSize: 7, fontFamily: "Inter, sans-serif", color: "#8e9199", textAlign: "center" }}>{label}</span>
    </div>
  );
}
function StepLine({ active }: { active?: boolean }) {
  return <div style={{ height: 2, flex: 1, background: active ? "#3b82f6" : "#e5e7eb", alignSelf: "flex-start", marginTop: 13 }} />;
}

// ─── Quiz 1: Где сценарий проще? ────────────────────────────────────────────
export function CQFlowCompare1A() {
  // Плохо: 6 шагов — длинный путь
  const steps = ["Главная", "Каталог", "Товар", "Корзина", "Оплата", "Готово"];
  return (
    <div style={CW}><div style={{ ...CI, gap: 14 }}>
      <div style={{ display: "flex", alignItems: "flex-start" }}>
        {steps.map((s, i) => (
          <React.Fragment key={i}>
            <Step n={i + 1} label={s} />
            {i < steps.length - 1 && <StepLine />}
          </React.Fragment>
        ))}
      </div>
    </div></div>
  );
}
export function CQFlowCompare1B() {
  // Хорошо: 3 шага — минимум усилий
  const steps = ["Товар", "Оплата", "Готово"];
  return (
    <div style={CW}><div style={{ ...CI, gap: 14 }}>
      <div style={{ display: "flex", alignItems: "flex-start" }}>
        {steps.map((s, i) => (
          <React.Fragment key={i}>
            <Step n={i + 1} label={s} active />
            {i < steps.length - 1 && <StepLine active />}
          </React.Fragment>
        ))}
      </div>
    </div></div>
  );
}

// ─── Quiz 2: Где путь проще? ─────────────────────────────────────────────────
export function CQFlowCompare2A() {
  // Плохо: шаги идут хаотично — стрелки туда-сюда
  return (
    <div style={CW}><div style={{ ...CI, gap: 8 }}>
      <div style={{ display: "flex", alignItems: "center", gap: 6 }}>
        <div style={{ background: "#f7f8fc", borderRadius: 5, padding: "5px 8px" }}><span style={{ fontSize: 8, fontFamily: "Inter, sans-serif", color: "#364146" }}>Шаг 1</span></div>
        <span style={{ color: "#9ca3af", fontSize: 10 }}>→</span>
        <div style={{ background: "#f7f8fc", borderRadius: 5, padding: "5px 8px" }}><span style={{ fontSize: 8, fontFamily: "Inter, sans-serif", color: "#364146" }}>Шаг 3</span></div>
        <span style={{ color: "#f87171", fontSize: 10 }}>←</span>
        <div style={{ background: "#f7f8fc", borderRadius: 5, padding: "5px 8px" }}><span style={{ fontSize: 8, fontFamily: "Inter, sans-serif", color: "#364146" }}>Шаг 2</span></div>
      </div>
      <div style={{ display: "flex", alignItems: "center", gap: 6 }}>
        <span style={{ color: "#f87171", fontSize: 10 }}>↙</span>
        <div style={{ background: "#f7f8fc", borderRadius: 5, padding: "5px 8px" }}><span style={{ fontSize: 8, fontFamily: "Inter, sans-serif", color: "#364146" }}>Шаг 5</span></div>
        <span style={{ color: "#f87171", fontSize: 10 }}>←</span>
        <div style={{ background: "#f7f8fc", borderRadius: 5, padding: "5px 8px" }}><span style={{ fontSize: 8, fontFamily: "Inter, sans-serif", color: "#364146" }}>Шаг 4</span></div>
        <span style={{ color: "#9ca3af", fontSize: 10 }}>→</span>
        <div style={{ background: "#f7f8fc", borderRadius: 5, padding: "5px 8px" }}><span style={{ fontSize: 8, fontFamily: "Inter, sans-serif", color: "#364146" }}>Шаг 6</span></div>
      </div>
    </div></div>
  );
}
export function CQFlowCompare2B() {
  // Хорошо: шаги последовательно — логичный путь
  const steps = ["Шаг 1", "Шаг 2", "Шаг 3", "Шаг 4"];
  return (
    <div style={CW}><div style={{ ...CI, gap: 10 }}>
      {steps.map((s, i) => (
        <div key={i} style={{ display: "flex", alignItems: "center", gap: 8 }}>
          <div style={{ width: 20, height: 20, borderRadius: "50%", background: "#3b82f6", display: "flex", alignItems: "center", justifyContent: "center", flexShrink: 0 }}>
            <span style={{ fontSize: 9, fontFamily: "Inter, sans-serif", color: "white", fontWeight: 600 }}>{i + 1}</span>
          </div>
          <div style={{ flex: 1, background: "#f7f8fc", borderRadius: 5, height: 22, display: "flex", alignItems: "center", padding: "0 8px" }}>
            <span style={{ fontSize: 9, fontFamily: "Inter, sans-serif", color: "#364146" }}>{s}</span>
          </div>
        </div>
      ))}
    </div></div>
  );
}

// ─── Quiz 3: Где цель достичь легче? ────────────────────────────────────────
export function CQFlowCompare3A() {
  // Плохо: путь с возвратами назад
  return (
    <div style={CW}><div style={{ ...CI, gap: 8 }}>
      {[["Шаг 1", "→", "Шаг 2"], ["↙ назад", "", "↓"], ["Шаг 3", "→", "Шаг 4"]].map((row, i) => (
        <div key={i} style={{ display: "flex", alignItems: "center", justifyContent: "space-between" }}>
          {row.map((cell, j) => (
            <div key={j} style={cell.includes("Шаг") ? { background: "#f7f8fc", borderRadius: 5, padding: "5px 10px" } : {}}>
              <span style={{ fontSize: cell.includes("Шаг") ? 9 : 12, fontFamily: "Inter, sans-serif", color: cell.includes("назад") ? "#f87171" : "#364146" }}>{cell}</span>
            </div>
          ))}
        </div>
      ))}
    </div></div>
  );
}
export function CQFlowCompare3B() {
  // Хорошо: прямой линейный путь без возвратов
  const steps = ["Начало", "Действие", "Результат"];
  return (
    <div style={CW}><div style={{ ...CI, alignItems: "center", gap: 6 }}>
      <div style={{ display: "flex", alignItems: "center", width: "100%" }}>
        {steps.map((s, i) => (
          <React.Fragment key={i}>
            <div style={{ flex: 1, background: "#dbeafe", borderRadius: 6, height: 32, display: "flex", alignItems: "center", justifyContent: "center" }}>
              <span style={{ fontSize: 8, fontFamily: "Inter, sans-serif", color: "#1d4ed8", fontWeight: 600 }}>{s}</span>
            </div>
            {i < steps.length - 1 && <span style={{ color: "#3b82f6", fontSize: 14, margin: "0 4px" }}>→</span>}
          </React.Fragment>
        ))}
      </div>
      <div style={{ background: "#22c55e", borderRadius: 6, height: 28, width: "60%", display: "flex", alignItems: "center", justifyContent: "center", marginTop: 8 }}>
        <span style={{ fontSize: 9, fontFamily: "Inter, sans-serif", color: "white", fontWeight: 600 }}>✓ Цель достигнута</span>
      </div>
    </div></div>
  );
}
export function CQFlowSingle1() {
  return <div style={{ position: "relative", background: "white", height: 231, width: 186, overflow: "hidden", paddingTop: 10, paddingLeft: 10, paddingRight: 10, borderRadius: 15 }}><Container38 /></div>;
}
export function CQFlowSingle2() {
  return <div style={{ position: "relative", background: "white", height: 231, width: 186, overflow: "hidden", paddingTop: 10, paddingLeft: 10, paddingRight: 10, borderRadius: 15 }}><Container41 /></div>;
}
export function CQFlowSingle3() {
  return <div style={{ position: "relative", background: "white", height: 231, width: 186, overflow: "hidden", paddingTop: 10, paddingLeft: 10, paddingRight: 10, borderRadius: 15 }}><Container46 /></div>;
}
export function CQFlowMulti1() {
  return <div style={{ position: "relative", background: "white", height: 231, width: 186, overflow: "hidden", paddingTop: 10, paddingLeft: 10, paddingRight: 10, borderRadius: 15 }}><Container52 /></div>;
}
export function CQFlowMulti2() {
  return <div style={{ position: "relative", background: "white", height: 231, width: 186, overflow: "hidden", paddingTop: 10, paddingLeft: 10, paddingRight: 10, borderRadius: 15 }}><Container58 /></div>;
}
export function CQFlowMulti3() {
  return <div style={{ position: "relative", background: "white", height: 231, width: 186, overflow: "hidden", paddingTop: 10, paddingLeft: 10, paddingRight: 10, borderRadius: 15 }}><Container63 /></div>;
}
export function CQFlowConn1A() { return <Lesson2Quiz10Card />; }
export function CQFlowConn1B() { return <Lesson2Quiz10Card1 />; }
export function CQFlowConn1C() { return <Lesson2Quiz10Card2 />; }
export function CQFlowConn2A() { return <Lesson2Quiz11Card />; }
export function CQFlowConn2B() { return <Lesson2Quiz11Card1 />; }
export function CQFlowConn2C() { return <Lesson2Quiz11Card2 />; }
export function CQFlowConn3A() { return <Lesson2Quiz12Card />; }
export function CQFlowConn3B() { return <Lesson2Quiz12Card1 />; }
export function CQFlowConn3C() { return <Lesson2Quiz12Card2 />; }

export default function UserFlow() {
  return (
    <div className="relative size-full" data-name="User Flow">
      <p className="absolute font-['Inter:Regular',sans-serif] font-normal leading-[17px] left-0 not-italic text-[#8e9199] text-[13px] top-[-0.5px] tracking-[-0.16px] whitespace-nowrap">Пути пользователей к цели</p>
      <p className="absolute font-['Inter:Regular',sans-serif] font-normal leading-[27px] left-0 not-italic text-[#101828] text-[18px] top-[80.5px] tracking-[-0.4395px] whitespace-nowrap">Compare UI</p>
      <p className="absolute font-['Inter:Regular',sans-serif] font-normal leading-[15px] left-0 not-italic text-[#8e9199] text-[12px] top-[115px] tracking-[-0.15px] w-[1280px]">Сравните два варианта интерфейса</p>
      <p className="absolute font-['Inter:Regular',sans-serif] font-normal leading-[14px] left-0 not-italic text-[#8e9199] text-[11px] top-[170.5px] tracking-[-0.14px] whitespace-nowrap">1. Где пользовательский путь более понятный?</p>
      <Container />
      <Container8 />
      <p className="absolute font-['Inter:Regular',sans-serif] font-normal leading-[14px] left-0 not-italic text-[#8e9199] text-[11px] top-[487.5px] tracking-[-0.14px] whitespace-nowrap">2. Где сценарий проще пройти?</p>
      <Container13 />
      <Container20 />
      <p className="absolute font-['Inter:Regular',sans-serif] font-normal leading-[14px] left-0 not-italic text-[#8e9199] text-[11px] top-[804.5px] tracking-[-0.14px] whitespace-nowrap">3. Где пользователь быстрее понимает следующий шаг?</p>
      <Container27 />
      <Container32 />
      <p className="absolute font-['Inter:Regular',sans-serif] font-normal leading-[27px] left-0 not-italic text-[#101828] text-[18px] top-[1137.5px] tracking-[-0.4395px] whitespace-nowrap">Single Choice</p>
      <p className="absolute font-['Inter:Regular',sans-serif] font-normal leading-[15px] left-0 not-italic text-[#8e9199] text-[12px] top-[1172px] tracking-[-0.15px] w-[1280px]">Выберите один правильный ответ</p>
      <p className="absolute font-['Inter:Regular',sans-serif] font-normal leading-[14px] left-0 not-italic text-[#8e9199] text-[11px] top-[1227.5px] tracking-[-0.14px] whitespace-nowrap">4. Что такое User Flow?</p>
      <Container37 />
      <Lesson2Quiz />
      <p className="absolute font-['Inter:Regular',sans-serif] font-normal leading-[14px] left-0 not-italic text-[#8e9199] text-[11px] top-[1621.5px] tracking-[-0.14px] whitespace-nowrap">5. С чего начинается User Flow?</p>
      <Container40 />
      <Lesson2Quiz1 />
      <p className="absolute font-['Inter:Regular',sans-serif] font-normal leading-[14px] left-0 not-italic text-[#8e9199] text-[11px] top-[2015.5px] tracking-[-0.14px] whitespace-nowrap">6. Что делает User Flow понятным?</p>
      <Container45 />
      <Lesson2Quiz2 />
      <p className="absolute font-['Inter:Regular',sans-serif] font-normal leading-[27px] left-0 not-italic text-[#101828] text-[18px] top-[2425.5px] tracking-[-0.4395px] whitespace-nowrap">Multi Choice</p>
      <p className="absolute font-['Inter:Regular',sans-serif] font-normal leading-[15px] left-0 not-italic text-[#8e9199] text-[12px] top-[2460px] tracking-[-0.15px] w-[1280px]">Выберите несколько правильных ответов</p>
      <p className="absolute font-['Inter:Regular',sans-serif] font-normal leading-[14px] left-0 not-italic text-[#8e9199] text-[11px] top-[2515.5px] tracking-[-0.14px] whitespace-nowrap">7. Что входит в User Flow?</p>
      <Container51 />
      <Lesson2Quiz3 />
      <p className="absolute font-['Inter:Regular',sans-serif] font-normal leading-[14px] left-0 not-italic text-[#8e9199] text-[11px] top-[2932.5px] tracking-[-0.14px] whitespace-nowrap">8. Что делает сценарий удобным?</p>
      <Container57 />
      <Lesson2Quiz4 />
      <p className="absolute font-['Inter:Regular',sans-serif] font-normal leading-[14px] left-0 not-italic text-[#8e9199] text-[11px] top-[3349.5px] tracking-[-0.14px] whitespace-nowrap">9. Что усложняет User Flow?</p>
      <Container62 />
      <Lesson2Quiz5 />
      <p className="absolute font-['Inter:Regular',sans-serif] font-normal leading-[27px] left-0 not-italic text-[#101828] text-[18px] top-[3782.5px] tracking-[-0.4395px] whitespace-nowrap">Match / Connect</p>
      <p className="absolute font-['Inter:Regular',sans-serif] font-normal leading-[14px] left-0 not-italic text-[#8e9199] text-[11px] top-[3872.5px] tracking-[-0.14px] whitespace-nowrap">10. Соедините элемент и его роль в сценарии</p>
      <Lesson2Quiz10Card />
      <Lesson2Quiz10Card1 />
      <Lesson2Quiz10Card2 />
      <Paragraph80 />
      <Paragraph81 />
      <Paragraph82 />
      <p className="absolute font-['Inter:Regular',sans-serif] font-normal leading-[14px] left-0 not-italic text-[#8e9199] text-[11px] top-[4123.5px] tracking-[-0.14px] whitespace-nowrap">11. Соедините элемент и функцию</p>
      <Lesson2Quiz11Card />
      <Lesson2Quiz11Card1 />
      <Lesson2Quiz11Card2 />
      <Paragraph87 />
      <Paragraph88 />
      <Paragraph89 />
      <p className="absolute font-['Inter:Regular',sans-serif] font-normal leading-[14px] left-0 not-italic text-[#8e9199] text-[11px] top-[4374.5px] tracking-[-0.14px] whitespace-nowrap">12. Соедините проблему и эффект</p>
      <Lesson2Quiz12Card />
      <Lesson2Quiz12Card1 />
      <Lesson2Quiz12Card2 />
      <Paragraph96 />
      <Paragraph97 />
      <Paragraph98 />
    </div>
  );
}