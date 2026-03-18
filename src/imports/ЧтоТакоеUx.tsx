import imgImageWithFallback from "figma:asset/595a8f2cb3c56269b797c388589f3d38b7abb408.png";

function Paragraph() {
  return (
    <div className="absolute h-[21px] left-0 top-[8px] w-[9.297px]" data-name="Paragraph">
      <p className="absolute font-['Inter:Regular',sans-serif] font-normal leading-[21px] left-0 not-italic text-[#364146] text-[14px] top-0 tracking-[-0.17px] whitespace-nowrap">A</p>
    </div>
  );
}

function Paragraph1() {
  return (
    <div className="absolute content-stretch flex h-[12px] items-start left-0 top-0 w-[166px]" data-name="Paragraph">
      <p className="flex-[1_0_0] font-['Inter:Regular',sans-serif] font-normal leading-[12px] min-h-px min-w-px not-italic relative text-[#101828] text-[10px] tracking-[-0.13px]">Добро пожаловать</p>
    </div>
  );
}

function Paragraph2() {
  return (
    <div className="absolute h-[24px] left-0 top-[20px] w-[166px]" data-name="Paragraph">
      <p className="absolute font-['Inter:Regular',sans-serif] font-normal leading-[8px] left-0 not-italic text-[#364146] text-[6px] top-0 tracking-[-0.08px] w-[161px]">Это новое приложение для управления задачами которое поможет вам организовать рабочий процесс и повысить продуктивность ежедневной работы.</p>
    </div>
  );
}

function Paragraph3() {
  return (
    <div className="absolute h-[24px] left-0 top-[50px] w-[166px]" data-name="Paragraph">
      <p className="absolute font-['Inter:Regular',sans-serif] font-normal leading-[8px] left-0 not-italic text-[#364146] text-[6px] top-0 tracking-[-0.08px] w-[143px]">Вы можете создавать проекты добавлять задачи устанавливать сроки и отслеживать прогресс выполнения всех ваших целей.</p>
    </div>
  );
}

function Paragraph4() {
  return (
    <div className="absolute h-[24px] left-0 top-[80px] w-[166px]" data-name="Paragraph">
      <p className="absolute font-['Inter:Regular',sans-serif] font-normal leading-[8px] left-0 not-italic text-[#364146] text-[6px] top-0 tracking-[-0.08px] w-[157px]">Приложение синхронизируется между всеми вашими устройствами и позволяет работать в команде совместно с коллегами над общими проектами.</p>
    </div>
  );
}

function Container1() {
  return (
    <div className="h-[211px] relative shrink-0 w-full" data-name="Container">
      <Paragraph1 />
      <Paragraph2 />
      <Paragraph3 />
      <Paragraph4 />
    </div>
  );
}

function Lesson1Quiz1VariantA() {
  return (
    <div className="absolute bg-white content-stretch flex flex-col h-[231px] items-start left-[21.3px] overflow-clip pt-[10px] px-[10px] rounded-[14.99px] top-0 w-[186px]" data-name="Lesson1Quiz1VariantA">
      <Container1 />
    </div>
  );
}

function Container() {
  return (
    <div className="absolute h-[231px] left-0 top-[127px] w-[207.297px]" data-name="Container">
      <Paragraph />
      <Lesson1Quiz1VariantA />
    </div>
  );
}

function Paragraph5() {
  return (
    <div className="absolute h-[21px] left-0 top-[8px] w-[8.945px]" data-name="Paragraph">
      <p className="absolute font-['Inter:Regular',sans-serif] font-normal leading-[21px] left-0 not-italic text-[#364146] text-[14px] top-0 tracking-[-0.17px] whitespace-nowrap">B</p>
    </div>
  );
}

function Paragraph6() {
  return (
    <div className="absolute h-[18px] left-0 top-[61.5px] w-[166px]" data-name="Paragraph">
      <p className="absolute font-['Inter:Regular',sans-serif] font-normal leading-[18px] left-0 not-italic text-[#101828] text-[12px] top-[0.5px] tracking-[-0.15px] whitespace-nowrap">Управляй задачами</p>
    </div>
  );
}

function Paragraph7() {
  return (
    <div className="absolute content-stretch flex h-[9px] items-start left-0 top-[89.5px] w-[166px]" data-name="Paragraph">
      <p className="flex-[1_0_0] font-['Inter:Regular',sans-serif] font-normal leading-[9px] min-h-px min-w-px not-italic relative text-[#8e9199] text-[7px] tracking-[-0.09px]">Организуй проекты и достигай целей быстрее</p>
    </div>
  );
}

function Paragraph8() {
  return (
    <div className="h-[15px] relative shrink-0 w-full" data-name="Paragraph">
      <p className="-translate-x-1/2 absolute font-['Inter:Regular',sans-serif] font-normal leading-[15px] left-[71.45px] not-italic text-[10px] text-center text-white top-[0.5px] tracking-[-0.13px] whitespace-nowrap">Начать</p>
    </div>
  );
}

function Container4() {
  return (
    <div className="absolute bg-[#3b82f6] content-stretch flex flex-col h-[35px] items-start left-0 pt-[10px] px-[12px] rounded-[6px] top-[114.5px] w-[166px]" data-name="Container">
      <Paragraph8 />
    </div>
  );
}

function Container3() {
  return (
    <div className="h-[211px] relative shrink-0 w-full" data-name="Container">
      <Paragraph6 />
      <Paragraph7 />
      <Container4 />
    </div>
  );
}

function Lesson1Quiz1VariantB() {
  return (
    <div className="absolute bg-white content-stretch flex flex-col h-[231px] items-start left-[20.95px] overflow-clip pt-[10px] px-[10px] rounded-[14.99px] top-0 w-[186px]" data-name="Lesson1Quiz1VariantB">
      <Container3 />
    </div>
  );
}

function Container2() {
  return (
    <div className="absolute h-[231px] left-[247.3px] top-[127px] w-[206.945px]" data-name="Container">
      <Paragraph5 />
      <Lesson1Quiz1VariantB />
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
    <div className="absolute h-[13.5px] left-0 top-[52px] w-[166px]" data-name="Paragraph">
      <p className="absolute font-['Inter:Regular',sans-serif] font-normal leading-[13.5px] left-0 not-italic text-[#101828] text-[9px] top-[0.5px] tracking-[-0.12px] whitespace-nowrap">Приложение</p>
    </div>
  );
}

function Paragraph11() {
  return (
    <div className="h-[7.5px] relative shrink-0 w-full" data-name="Paragraph">
      <p className="absolute font-['Inter:Regular',sans-serif] font-normal leading-[7.5px] left-0 not-italic text-[5px] text-white top-[-0.5px] tracking-[-0.07px] whitespace-nowrap">Сохранить</p>
    </div>
  );
}

function Container8() {
  return (
    <div className="bg-[#3b82f6] h-[13.5px] relative rounded-[4px] shrink-0 w-[37.57px]" data-name="Container">
      <div className="bg-clip-padding border-0 border-[transparent] border-solid content-stretch flex flex-col items-start pt-[3px] px-[6px] relative size-full">
        <Paragraph11 />
      </div>
    </div>
  );
}

function Paragraph12() {
  return (
    <div className="h-[7.5px] relative shrink-0 w-full" data-name="Paragraph">
      <p className="absolute font-['Inter:Regular',sans-serif] font-normal leading-[7.5px] left-0 not-italic text-[5px] text-white top-[-0.5px] tracking-[-0.07px] whitespace-nowrap">Изменить</p>
    </div>
  );
}

function Container9() {
  return (
    <div className="bg-[#8b5cf6] h-[13.5px] relative rounded-[4px] shrink-0 w-[35.461px]" data-name="Container">
      <div className="bg-clip-padding border-0 border-[transparent] border-solid content-stretch flex flex-col items-start pt-[3px] px-[6px] relative size-full">
        <Paragraph12 />
      </div>
    </div>
  );
}

function Paragraph13() {
  return (
    <div className="h-[7.5px] relative shrink-0 w-full" data-name="Paragraph">
      <p className="absolute font-['Inter:Regular',sans-serif] font-normal leading-[7.5px] left-0 not-italic text-[5px] text-white top-[-0.5px] tracking-[-0.07px] whitespace-nowrap">Удалить</p>
    </div>
  );
}

function Container10() {
  return (
    <div className="bg-[#ef4444] h-[13.5px] relative rounded-[4px] shrink-0 w-[31.727px]" data-name="Container">
      <div className="bg-clip-padding border-0 border-[transparent] border-solid content-stretch flex flex-col items-start pt-[3px] px-[6px] relative size-full">
        <Paragraph13 />
      </div>
    </div>
  );
}

function Container7() {
  return (
    <div className="absolute content-stretch flex gap-[4px] h-[13.5px] items-start left-0 top-[71.5px] w-[166px]" data-name="Container">
      <Container8 />
      <Container9 />
      <Container10 />
    </div>
  );
}

function Paragraph14() {
  return (
    <div className="h-[7.5px] relative shrink-0 w-full" data-name="Paragraph">
      <p className="absolute font-['Inter:Regular',sans-serif] font-normal leading-[7.5px] left-0 not-italic text-[5px] text-white top-[-0.5px] tracking-[-0.07px] whitespace-nowrap">Отправить</p>
    </div>
  );
}

function Container12() {
  return (
    <div className="bg-[#22c55e] h-[13.5px] relative rounded-[4px] shrink-0 w-[37.648px]" data-name="Container">
      <div className="bg-clip-padding border-0 border-[transparent] border-solid content-stretch flex flex-col items-start pt-[3px] px-[6px] relative size-full">
        <Paragraph14 />
      </div>
    </div>
  );
}

function Paragraph15() {
  return (
    <div className="h-[7.5px] relative shrink-0 w-full" data-name="Paragraph">
      <p className="absolute font-['Inter:Regular',sans-serif] font-normal leading-[7.5px] left-0 not-italic text-[#78350f] text-[5px] top-[-0.5px] tracking-[-0.07px] whitespace-nowrap">Поделиться</p>
    </div>
  );
}

function Container13() {
  return (
    <div className="bg-[#fbbf24] h-[13.5px] relative rounded-[4px] shrink-0 w-[40.68px]" data-name="Container">
      <div className="bg-clip-padding border-0 border-[transparent] border-solid content-stretch flex flex-col items-start pt-[3px] px-[6px] relative size-full">
        <Paragraph15 />
      </div>
    </div>
  );
}

function Container11() {
  return (
    <div className="absolute content-stretch flex gap-[4px] h-[13.5px] items-start left-0 top-[89px] w-[166px]" data-name="Container">
      <Container12 />
      <Container13 />
    </div>
  );
}

function Paragraph16() {
  return (
    <div className="h-[7.5px] relative shrink-0 w-full" data-name="Paragraph">
      <p className="absolute font-['Inter:Regular',sans-serif] font-normal leading-[7.5px] left-0 not-italic text-[5px] text-white top-[-0.5px] tracking-[-0.07px] whitespace-nowrap">Экспорт</p>
    </div>
  );
}

function Container15() {
  return (
    <div className="bg-[#ec4899] h-[13.5px] relative rounded-[4px] shrink-0 w-[31.641px]" data-name="Container">
      <div className="bg-clip-padding border-0 border-[transparent] border-solid content-stretch flex flex-col items-start pt-[3px] px-[6px] relative size-full">
        <Paragraph16 />
      </div>
    </div>
  );
}

function Paragraph17() {
  return (
    <div className="h-[7.5px] relative shrink-0 w-full" data-name="Paragraph">
      <p className="absolute font-['Inter:Regular',sans-serif] font-normal leading-[7.5px] left-0 not-italic text-[5px] text-white top-[-0.5px] tracking-[-0.07px] whitespace-nowrap">Печать</p>
    </div>
  );
}

function Container16() {
  return (
    <div className="bg-[#06b6d4] h-[13.5px] relative rounded-[4px] shrink-0 w-[29.023px]" data-name="Container">
      <div className="bg-clip-padding border-0 border-[transparent] border-solid content-stretch flex flex-col items-start pt-[3px] px-[6px] relative size-full">
        <Paragraph17 />
      </div>
    </div>
  );
}

function Container14() {
  return (
    <div className="absolute content-stretch flex gap-[4px] h-[13.5px] items-start left-0 top-[106.5px] w-[166px]" data-name="Container">
      <Container15 />
      <Container16 />
    </div>
  );
}

function Paragraph18() {
  return (
    <div className="content-stretch flex h-[6px] items-start relative shrink-0 w-full" data-name="Paragraph">
      <p className="flex-[1_0_0] font-['Inter:Regular',sans-serif] font-normal leading-[6px] min-h-px min-w-px not-italic relative text-[#8e9199] text-[5px] tracking-[-0.07px]">Текстовая информация</p>
    </div>
  );
}

function Container17() {
  return (
    <div className="absolute bg-[#f7f8fc] content-stretch flex flex-col h-[14px] items-start left-0 pt-[4px] px-[4px] rounded-[4px] top-[128px] w-[166px]" data-name="Container">
      <Paragraph18 />
    </div>
  );
}

function Container6() {
  return (
    <div className="h-[211px] relative shrink-0 w-full" data-name="Container">
      <Paragraph10 />
      <Container7 />
      <Container11 />
      <Container14 />
      <Container17 />
    </div>
  );
}

function Lesson1Quiz2VariantA() {
  return (
    <div className="absolute bg-white content-stretch flex flex-col h-[231px] items-start justify-center left-[21.3px] overflow-clip pt-[10px] px-[10px] rounded-[14.99px] top-0 w-[186px]" data-name="Lesson1Quiz2VariantA">
      <Container6 />
    </div>
  );
}

function Container5() {
  return (
    <div className="absolute h-[231px] left-0 top-[444px] w-[207.297px]" data-name="Container">
      <Paragraph9 />
      <Lesson1Quiz2VariantA />
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
    <div className="absolute h-[15px] left-0 top-[44.75px] w-[166px]" data-name="Paragraph">
      <p className="absolute font-['Inter:Regular',sans-serif] font-normal leading-[15px] left-0 not-italic text-[#101828] text-[10px] top-[0.5px] tracking-[-0.13px] whitespace-nowrap">Приложение</p>
    </div>
  );
}

function Paragraph21() {
  return (
    <div className="h-[18px] relative shrink-0 w-full" data-name="Paragraph">
      <p className="absolute font-['Inter:Regular',sans-serif] font-normal leading-[9px] left-0 not-italic text-[#364146] text-[7px] top-0 tracking-[-0.09px] w-[149px]">Информация о проекте и описание текущих задач</p>
    </div>
  );
}

function Container20() {
  return (
    <div className="absolute bg-[#f7f8fc] content-stretch flex flex-col h-[34px] items-start left-0 pt-[8px] px-[8px] rounded-[6px] top-[69.75px] w-[166px]" data-name="Container">
      <Paragraph21 />
    </div>
  );
}

function Paragraph22() {
  return (
    <div className="h-[13.5px] relative shrink-0 w-full" data-name="Paragraph">
      <p className="-translate-x-1/2 absolute font-['Inter:Regular',sans-serif] font-normal leading-[13.5px] left-[71.17px] not-italic text-[9px] text-center text-white top-[0.5px] tracking-[-0.12px] whitespace-nowrap">Продолжить</p>
    </div>
  );
}

function Container21() {
  return (
    <div className="absolute bg-[#3b82f6] content-stretch flex flex-col h-[29.5px] items-start left-0 pt-[8px] px-[12px] rounded-[6px] top-[111.75px] w-[166px]" data-name="Container">
      <Paragraph22 />
    </div>
  );
}

function Paragraph23() {
  return (
    <div className="h-[9px] relative shrink-0 w-full" data-name="Paragraph">
      <p className="-translate-x-1/2 absolute font-['Inter:Regular',sans-serif] font-normal leading-[9px] left-[32.91px] not-italic text-[#364146] text-[6px] text-center top-[-0.5px] tracking-[-0.08px] whitespace-nowrap">Изменить</p>
    </div>
  );
}

function Container23() {
  return (
    <div className="bg-[#f7f8fc] flex-[81_0_0] h-[17px] min-h-px min-w-px relative rounded-[4px]" data-name="Container">
      <div className="bg-clip-padding border-0 border-[transparent] border-solid content-stretch flex flex-col items-start pt-[4px] px-[8px] relative size-full">
        <Paragraph23 />
      </div>
    </div>
  );
}

function Paragraph24() {
  return (
    <div className="h-[9px] relative shrink-0 w-full" data-name="Paragraph">
      <p className="-translate-x-1/2 absolute font-['Inter:Regular',sans-serif] font-normal leading-[9px] left-[32.91px] not-italic text-[#364146] text-[6px] text-center top-[-0.5px] tracking-[-0.08px] whitespace-nowrap">Отмена</p>
    </div>
  );
}

function Container24() {
  return (
    <div className="bg-[#f7f8fc] flex-[81_0_0] h-[17px] min-h-px min-w-px relative rounded-[4px]" data-name="Container">
      <div className="bg-clip-padding border-0 border-[transparent] border-solid content-stretch flex flex-col items-start pt-[4px] px-[8px] relative size-full">
        <Paragraph24 />
      </div>
    </div>
  );
}

function Container22() {
  return (
    <div className="absolute content-stretch flex gap-[4px] h-[17px] items-start left-0 top-[149.25px] w-[166px]" data-name="Container">
      <Container23 />
      <Container24 />
    </div>
  );
}

function Container19() {
  return (
    <div className="h-[211px] relative shrink-0 w-full" data-name="Container">
      <Paragraph20 />
      <Container20 />
      <Container21 />
      <Container22 />
    </div>
  );
}

function Lesson1Quiz2VariantB() {
  return (
    <div className="absolute bg-white content-stretch flex flex-col h-[231px] items-start left-[20.95px] overflow-clip pt-[10px] px-[10px] rounded-[14.99px] top-0 w-[186px]" data-name="Lesson1Quiz2VariantB">
      <Container19 />
    </div>
  );
}

function Container18() {
  return (
    <div className="absolute h-[231px] left-[247.3px] top-[444px] w-[206.945px]" data-name="Container">
      <Paragraph19 />
      <Lesson1Quiz2VariantB />
    </div>
  );
}

function Paragraph25() {
  return (
    <div className="absolute h-[21px] left-0 top-[8px] w-[9.297px]" data-name="Paragraph">
      <p className="absolute font-['Inter:Regular',sans-serif] font-normal leading-[21px] left-0 not-italic text-[#364146] text-[14px] top-0 tracking-[-0.17px] whitespace-nowrap">A</p>
    </div>
  );
}

function Paragraph26() {
  return (
    <div className="absolute h-[15px] left-0 top-[48px] w-[166px]" data-name="Paragraph">
      <p className="absolute font-['Inter:Regular',sans-serif] font-normal leading-[15px] left-0 not-italic text-[#101828] text-[10px] top-[0.5px] tracking-[-0.13px] whitespace-nowrap">Выберите действие</p>
    </div>
  );
}

function Paragraph27() {
  return (
    <div className="h-[12px] relative shrink-0 w-full" data-name="Paragraph">
      <p className="-translate-x-1/2 absolute font-['Inter:Regular',sans-serif] font-normal leading-[12px] left-[71.39px] not-italic text-[8px] text-center text-white top-0 tracking-[-0.1px] whitespace-nowrap">Действие</p>
    </div>
  );
}

function Container27() {
  return (
    <div className="absolute bg-[#3b82f6] content-stretch flex flex-col h-[24px] items-start left-0 pt-[6px] px-[12px] rounded-[6px] top-[75px] w-[166px]" data-name="Container">
      <Paragraph27 />
    </div>
  );
}

function Paragraph28() {
  return (
    <div className="h-[12px] relative shrink-0 w-full" data-name="Paragraph">
      <p className="-translate-x-1/2 absolute font-['Inter:Regular',sans-serif] font-normal leading-[12px] left-[71.47px] not-italic text-[8px] text-center text-white top-0 tracking-[-0.1px] whitespace-nowrap">Далее</p>
    </div>
  );
}

function Container28() {
  return (
    <div className="absolute bg-[#3b82f6] content-stretch flex flex-col h-[24px] items-start left-0 pt-[6px] px-[12px] rounded-[6px] top-[107px] w-[166px]" data-name="Container">
      <Paragraph28 />
    </div>
  );
}

function Paragraph29() {
  return (
    <div className="h-[12px] relative shrink-0 w-full" data-name="Paragraph">
      <p className="-translate-x-1/2 absolute font-['Inter:Regular',sans-serif] font-normal leading-[12px] left-[71.17px] not-italic text-[8px] text-center text-white top-0 tracking-[-0.1px] whitespace-nowrap">Продолжить</p>
    </div>
  );
}

function Container29() {
  return (
    <div className="absolute bg-[#3b82f6] content-stretch flex flex-col h-[24px] items-start left-0 pt-[6px] px-[12px] rounded-[6px] top-[139px] w-[166px]" data-name="Container">
      <Paragraph29 />
    </div>
  );
}

function Container26() {
  return (
    <div className="h-[211px] relative shrink-0 w-full" data-name="Container">
      <Paragraph26 />
      <Container27 />
      <Container28 />
      <Container29 />
    </div>
  );
}

function Lesson1Quiz3VariantA() {
  return (
    <div className="absolute bg-white content-stretch flex flex-col h-[231px] items-start left-[21.3px] overflow-clip pt-[10px] px-[10px] rounded-[14.99px] top-0 w-[186px]" data-name="Lesson1Quiz3VariantA">
      <Container26 />
    </div>
  );
}

function Container25() {
  return (
    <div className="absolute h-[231px] left-0 top-[761px] w-[207.297px]" data-name="Container">
      <Paragraph25 />
      <Lesson1Quiz3VariantA />
    </div>
  );
}

function Paragraph30() {
  return (
    <div className="absolute h-[21px] left-0 top-[8px] w-[8.945px]" data-name="Paragraph">
      <p className="absolute font-['Inter:Regular',sans-serif] font-normal leading-[21px] left-0 not-italic text-[#364146] text-[14px] top-0 tracking-[-0.17px] whitespace-nowrap">B</p>
    </div>
  );
}

function Paragraph31() {
  return (
    <div className="absolute h-[15px] left-0 top-[57.5px] w-[166px]" data-name="Paragraph">
      <p className="absolute font-['Inter:Regular',sans-serif] font-normal leading-[15px] left-0 not-italic text-[#101828] text-[10px] top-[0.5px] tracking-[-0.13px] whitespace-nowrap">Начните обучение</p>
    </div>
  );
}

function Paragraph32() {
  return (
    <div className="absolute content-stretch flex h-[9px] items-start left-0 top-[84.5px] w-[166px]" data-name="Paragraph">
      <p className="flex-[1_0_0] font-['Inter:Regular',sans-serif] font-normal leading-[9px] min-h-px min-w-px not-italic relative text-[#8e9199] text-[7px] tracking-[-0.09px]">Узнайте основы работы с приложением</p>
    </div>
  );
}

function Paragraph33() {
  return (
    <div className="h-[15px] relative shrink-0 w-full" data-name="Paragraph">
      <p className="-translate-x-1/2 absolute font-['Inter:Regular',sans-serif] font-normal leading-[15px] left-[71.06px] not-italic text-[10px] text-center text-white top-[0.5px] tracking-[-0.13px] whitespace-nowrap">Начать курс</p>
    </div>
  );
}

function Container32() {
  return (
    <div className="absolute bg-[#3b82f6] content-stretch flex flex-col h-[35px] items-start left-0 pt-[10px] px-[12px] rounded-[6px] top-[101.5px] w-[166px]" data-name="Container">
      <Paragraph33 />
    </div>
  );
}

function Paragraph34() {
  return (
    <div className="absolute h-[9px] left-0 top-[144.5px] w-[166px]" data-name="Paragraph">
      <p className="-translate-x-1/2 absolute font-['Inter:Regular',sans-serif] font-normal leading-[9px] left-[83.15px] not-italic text-[#8e9199] text-[6px] text-center top-[-0.5px] tracking-[-0.08px] whitespace-nowrap">Пропустить</p>
    </div>
  );
}

function Container31() {
  return (
    <div className="h-[211px] relative shrink-0 w-full" data-name="Container">
      <Paragraph31 />
      <Paragraph32 />
      <Container32 />
      <Paragraph34 />
    </div>
  );
}

function Lesson1Quiz3VariantB() {
  return (
    <div className="absolute bg-white content-stretch flex flex-col h-[231px] items-start left-[20.95px] overflow-clip pt-[10px] px-[10px] rounded-[14.99px] top-0 w-[186px]" data-name="Lesson1Quiz3VariantB">
      <Container31 />
    </div>
  );
}

function Container30() {
  return (
    <div className="absolute h-[231px] left-[247.3px] top-[761px] w-[206.945px]" data-name="Container">
      <Paragraph30 />
      <Lesson1Quiz3VariantB />
    </div>
  );
}

function Paragraph35() {
  return (
    <div className="h-[15px] relative shrink-0 w-[1280px]" data-name="Paragraph">
      <p className="absolute font-['Inter:Regular',sans-serif] font-normal leading-[15px] left-0 not-italic text-[#364146] text-[10px] top-[0.5px] tracking-[-0.13px] whitespace-nowrap">• Опыт взаимодействия</p>
    </div>
  );
}

function Paragraph36() {
  return (
    <div className="h-[15px] relative shrink-0 w-[1280px]" data-name="Paragraph">
      <p className="absolute font-['Inter:Regular',sans-serif] font-normal leading-[15px] left-0 not-italic text-[#364146] text-[10px] top-[0.5px] tracking-[-0.13px] whitespace-nowrap">• Внешний вид интерфейса</p>
    </div>
  );
}

function Paragraph37() {
  return (
    <div className="flex-[1_0_0] min-h-px min-w-px relative w-[1280px]" data-name="Paragraph">
      <p className="absolute font-['Inter:Regular',sans-serif] font-normal leading-[15px] left-0 not-italic text-[#364146] text-[10px] top-[0.5px] tracking-[-0.13px] whitespace-nowrap">• Цветовая схема</p>
    </div>
  );
}

function Container33() {
  return (
    <div className="absolute content-stretch flex flex-col gap-[8px] h-[61px] items-start left-0 top-[1431px] w-[1280px]" data-name="Container">
      <Paragraph35 />
      <Paragraph36 />
      <Paragraph37 />
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

function Container35() {
  return (
    <div className="h-[160px] relative rounded-[8px] shrink-0 w-[140px]" data-name="Container">
      <div className="bg-clip-padding border-0 border-[transparent] border-solid content-stretch flex flex-col items-start overflow-clip relative rounded-[inherit] size-full">
        <ImageWithFallback />
      </div>
    </div>
  );
}

function Container34() {
  return (
    <div className="h-[211px] relative shrink-0 w-full" data-name="Container">
      <div className="flex flex-col justify-center size-full">
        <div className="content-stretch flex flex-col items-start justify-center pl-[13px] py-[25.5px] relative size-full">
          <Container35 />
        </div>
      </div>
    </div>
  );
}

function Lesson1Quiz() {
  return (
    <div className="absolute bg-white content-stretch flex flex-col h-[231px] items-start left-0 overflow-clip pt-[10px] px-[10px] rounded-[14.99px] top-[1184px] w-[186px]" data-name="Lesson1Quiz4">
      <Container34 />
    </div>
  );
}

function Paragraph38() {
  return (
    <div className="h-[15px] relative shrink-0 w-[1280px]" data-name="Paragraph">
      <p className="absolute font-['Inter:Regular',sans-serif] font-normal leading-[15px] left-0 not-italic text-[#364146] text-[10px] top-[0.5px] tracking-[-0.13px] whitespace-nowrap">• Сделать красиво</p>
    </div>
  );
}

function Paragraph39() {
  return (
    <div className="h-[15px] relative shrink-0 w-[1280px]" data-name="Paragraph">
      <p className="absolute font-['Inter:Regular',sans-serif] font-normal leading-[15px] left-0 not-italic text-[#364146] text-[10px] top-[0.5px] tracking-[-0.13px] whitespace-nowrap">• Помочь пользователю достичь цели</p>
    </div>
  );
}

function Paragraph40() {
  return (
    <div className="flex-[1_0_0] min-h-px min-w-px relative w-[1280px]" data-name="Paragraph">
      <p className="absolute font-['Inter:Regular',sans-serif] font-normal leading-[15px] left-0 not-italic text-[#364146] text-[10px] top-[0.5px] tracking-[-0.13px] whitespace-nowrap">• Добавить больше функций</p>
    </div>
  );
}

function Container36() {
  return (
    <div className="absolute content-stretch flex flex-col gap-[8px] h-[61px] items-start left-0 top-[1825px] w-[1280px]" data-name="Container">
      <Paragraph38 />
      <Paragraph39 />
      <Paragraph40 />
    </div>
  );
}

function Paragraph41() {
  return (
    <div className="h-[24px] relative shrink-0 w-[16px]" data-name="Paragraph">
      <div className="bg-clip-padding border-0 border-[transparent] border-solid relative size-full">
        <p className="absolute font-['Inter:Regular',sans-serif] font-normal leading-[24px] left-0 not-italic text-[16px] text-white top-[-1px] whitespace-nowrap">👤</p>
      </div>
    </div>
  );
}

function Container38() {
  return (
    <div className="bg-[#e5e5e5] relative rounded-[16777200px] shrink-0 size-[30px]" data-name="Container">
      <div className="bg-clip-padding border-0 border-[transparent] border-solid content-stretch flex items-center justify-center px-[7px] relative size-full">
        <Paragraph41 />
      </div>
    </div>
  );
}

function Paragraph42() {
  return (
    <div className="h-[30px] relative shrink-0 w-[19.094px]" data-name="Paragraph">
      <div className="bg-clip-padding border-0 border-[transparent] border-solid relative size-full">
        <p className="absolute font-['Inter:Regular',sans-serif] font-normal leading-[30px] left-0 not-italic text-[#364146] text-[20px] top-[-0.5px] whitespace-nowrap">→</p>
      </div>
    </div>
  );
}

function Paragraph43() {
  return (
    <div className="h-[15px] relative shrink-0 w-full" data-name="Paragraph">
      <p className="absolute font-['Inter:Regular',sans-serif] font-normal leading-[15px] left-0 not-italic text-[10px] text-white top-[0.5px] tracking-[-0.13px] whitespace-nowrap">Купить</p>
    </div>
  );
}

function Container39() {
  return (
    <div className="bg-[#22c55e] h-[31px] relative rounded-[6px] shrink-0 w-[65.102px]" data-name="Container">
      <div className="bg-clip-padding border-0 border-[transparent] border-solid content-stretch flex flex-col items-start pt-[8px] px-[16px] relative size-full">
        <Paragraph43 />
      </div>
    </div>
  );
}

function Container37() {
  return (
    <div className="content-stretch flex flex-col gap-[12px] h-[211px] items-center justify-center py-[48px] relative shrink-0 w-full" data-name="Container">
      <Container38 />
      <Paragraph42 />
      <Container39 />
    </div>
  );
}

function Lesson1Quiz1() {
  return (
    <div className="absolute bg-white content-stretch flex flex-col h-[231px] items-start left-0 overflow-clip pt-[10px] px-[10px] rounded-[14.99px] top-[1578px] w-[186px]" data-name="Lesson1Quiz5">
      <Container37 />
    </div>
  );
}

function Paragraph44() {
  return (
    <div className="h-[15px] relative shrink-0 w-[1280px]" data-name="Paragraph">
      <p className="absolute font-['Inter:Regular',sans-serif] font-normal leading-[15px] left-0 not-italic text-[#364146] text-[10px] top-[0.5px] tracking-[-0.13px] whitespace-nowrap">• Сложная структура</p>
    </div>
  );
}

function Paragraph45() {
  return (
    <div className="h-[15px] relative shrink-0 w-[1280px]" data-name="Paragraph">
      <p className="absolute font-['Inter:Regular',sans-serif] font-normal leading-[15px] left-0 not-italic text-[#364146] text-[10px] top-[0.5px] tracking-[-0.13px] whitespace-nowrap">• Понятные действия</p>
    </div>
  );
}

function Paragraph46() {
  return (
    <div className="flex-[1_0_0] min-h-px min-w-px relative w-[1280px]" data-name="Paragraph">
      <p className="absolute font-['Inter:Regular',sans-serif] font-normal leading-[15px] left-0 not-italic text-[#364146] text-[10px] top-[0.5px] tracking-[-0.13px] whitespace-nowrap">• Много элементов</p>
    </div>
  );
}

function Container40() {
  return (
    <div className="absolute content-stretch flex flex-col gap-[8px] h-[61px] items-start left-0 top-[2219px] w-[1280px]" data-name="Container">
      <Paragraph44 />
      <Paragraph45 />
      <Paragraph46 />
    </div>
  );
}

function Paragraph47() {
  return (
    <div className="absolute h-[16.5px] left-0 top-[62.5px] w-[166px]" data-name="Paragraph">
      <p className="absolute font-['Inter:Regular',sans-serif] font-normal leading-[16.5px] left-0 not-italic text-[#101828] text-[11px] top-[0.5px] tracking-[-0.14px] whitespace-nowrap">Простой интерфейс</p>
    </div>
  );
}

function Paragraph48() {
  return (
    <div className="absolute h-[18px] left-0 top-[89px] w-[166px]" data-name="Paragraph">
      <p className="absolute font-['Inter:Regular',sans-serif] font-normal leading-[9px] left-0 not-italic text-[#8e9199] text-[7px] top-0 tracking-[-0.09px] w-[158px]">Понятные действия помогают быстро достичь цели</p>
    </div>
  );
}

function Paragraph49() {
  return (
    <div className="h-[13.5px] relative shrink-0 w-full" data-name="Paragraph">
      <p className="-translate-x-1/2 absolute font-['Inter:Regular',sans-serif] font-normal leading-[13.5px] left-[71.17px] not-italic text-[9px] text-center text-white top-[0.5px] tracking-[-0.12px] whitespace-nowrap">Продолжить</p>
    </div>
  );
}

function Container42() {
  return (
    <div className="absolute bg-[#3b82f6] content-stretch flex flex-col h-[29.5px] items-start left-0 pt-[8px] px-[12px] rounded-[6px] top-[119px] w-[166px]" data-name="Container">
      <Paragraph49 />
    </div>
  );
}

function Container41() {
  return (
    <div className="h-[211px] relative shrink-0 w-full" data-name="Container">
      <Paragraph47 />
      <Paragraph48 />
      <Container42 />
    </div>
  );
}

function Lesson1Quiz2() {
  return (
    <div className="absolute bg-white content-stretch flex flex-col h-[231px] items-start left-0 overflow-clip pt-[10px] px-[10px] rounded-[14.99px] top-[1972px] w-[186px]" data-name="Lesson1Quiz6">
      <Container41 />
    </div>
  );
}

function Paragraph50() {
  return (
    <div className="h-[15px] relative shrink-0 w-[1280px]" data-name="Paragraph">
      <p className="absolute font-['Inter:Regular',sans-serif] font-normal leading-[15px] left-0 not-italic text-[#364146] text-[10px] top-[0.5px] tracking-[-0.13px] whitespace-nowrap">• Понятность</p>
    </div>
  );
}

function Paragraph51() {
  return (
    <div className="h-[15px] relative shrink-0 w-[1280px]" data-name="Paragraph">
      <p className="absolute font-['Inter:Regular',sans-serif] font-normal leading-[15px] left-0 not-italic text-[#364146] text-[10px] top-[0.5px] tracking-[-0.13px] whitespace-nowrap">• Скорость выполнения задачи</p>
    </div>
  );
}

function Paragraph52() {
  return (
    <div className="h-[15px] relative shrink-0 w-[1280px]" data-name="Paragraph">
      <p className="absolute font-['Inter:Regular',sans-serif] font-normal leading-[15px] left-0 not-italic text-[#364146] text-[10px] top-[0.5px] tracking-[-0.13px] whitespace-nowrap">• Случайные цвета</p>
    </div>
  );
}

function Paragraph53() {
  return (
    <div className="flex-[1_0_0] min-h-px min-w-px relative w-[1280px]" data-name="Paragraph">
      <p className="absolute font-['Inter:Regular',sans-serif] font-normal leading-[15px] left-0 not-italic text-[#364146] text-[10px] top-[0.5px] tracking-[-0.13px] whitespace-nowrap">• Логика интерфейса</p>
    </div>
  );
}

function Container43() {
  return (
    <div className="absolute content-stretch flex flex-col gap-[8px] h-[84px] items-start left-0 top-[2719px] w-[1280px]" data-name="Container">
      <Paragraph50 />
      <Paragraph51 />
      <Paragraph52 />
      <Paragraph53 />
    </div>
  );
}

function Paragraph54() {
  return (
    <div className="h-[10.5px] relative shrink-0 w-full" data-name="Paragraph">
      <p className="absolute font-['Inter:Regular',sans-serif] font-normal leading-[10.5px] left-0 not-italic text-[7px] text-white top-0 tracking-[-0.09px] whitespace-nowrap">Кнопка</p>
    </div>
  );
}

function Container46() {
  return (
    <div className="bg-[#3b82f6] h-[18.5px] relative rounded-[4px] shrink-0 w-[40.023px]" data-name="Container">
      <div className="bg-clip-padding border-0 border-[transparent] border-solid content-stretch flex flex-col items-start pt-[4px] px-[8px] relative size-full">
        <Paragraph54 />
      </div>
    </div>
  );
}

function Paragraph55() {
  return (
    <div className="h-[9px] relative shrink-0 w-[34.359px]" data-name="Paragraph">
      <div className="bg-clip-padding border-0 border-[transparent] border-solid relative size-full">
        <p className="absolute font-['Inter:Regular',sans-serif] font-normal leading-[9px] left-0 not-italic text-[#8e9199] text-[6px] top-[-0.5px] tracking-[-0.08px] whitespace-nowrap">→ действие</p>
      </div>
    </div>
  );
}

function Container45() {
  return (
    <div className="h-[18.5px] relative shrink-0 w-[166px]" data-name="Container">
      <div className="bg-clip-padding border-0 border-[transparent] border-solid content-stretch flex gap-[6px] items-center relative size-full">
        <Container46 />
        <Paragraph55 />
      </div>
    </div>
  );
}

function Paragraph56() {
  return (
    <div className="h-[10.5px] relative shrink-0 w-[18.734px]" data-name="Paragraph">
      <div className="bg-clip-padding border-0 border-[transparent] border-solid relative size-full">
        <p className="absolute font-['Inter:Regular',sans-serif] font-normal leading-[10.5px] left-0 not-italic text-[#364146] text-[7px] top-0 tracking-[-0.09px] whitespace-nowrap">Текст</p>
      </div>
    </div>
  );
}

function Paragraph57() {
  return (
    <div className="h-[9px] relative shrink-0 w-[40.227px]" data-name="Paragraph">
      <div className="bg-clip-padding border-0 border-[transparent] border-solid relative size-full">
        <p className="absolute font-['Inter:Regular',sans-serif] font-normal leading-[9px] left-0 not-italic text-[#8e9199] text-[6px] top-[-0.5px] tracking-[-0.08px] whitespace-nowrap">→ понятность</p>
      </div>
    </div>
  );
}

function Container47() {
  return (
    <div className="h-[10.5px] relative shrink-0 w-[166px]" data-name="Container">
      <div className="bg-clip-padding border-0 border-[transparent] border-solid content-stretch flex gap-[6px] items-center relative size-full">
        <Paragraph56 />
        <Paragraph57 />
      </div>
    </div>
  );
}

function Paragraph58() {
  return (
    <div className="h-[21px] relative shrink-0 w-[13.367px]" data-name="Paragraph">
      <div className="bg-clip-padding border-0 border-[transparent] border-solid relative size-full">
        <p className="absolute font-['Inter:Regular',sans-serif] font-normal leading-[21px] left-0 not-italic text-[#364146] text-[14px] top-0 whitespace-nowrap">→</p>
      </div>
    </div>
  );
}

function Paragraph59() {
  return (
    <div className="h-[9px] relative shrink-0 w-[33.352px]" data-name="Paragraph">
      <div className="bg-clip-padding border-0 border-[transparent] border-solid relative size-full">
        <p className="absolute font-['Inter:Regular',sans-serif] font-normal leading-[9px] left-0 not-italic text-[#8e9199] text-[6px] top-[-0.5px] tracking-[-0.08px] whitespace-nowrap">путь к цели</p>
      </div>
    </div>
  );
}

function Container48() {
  return (
    <div className="h-[21px] relative shrink-0 w-[166px]" data-name="Container">
      <div className="bg-clip-padding border-0 border-[transparent] border-solid content-stretch flex gap-[6px] items-center relative size-full">
        <Paragraph58 />
        <Paragraph59 />
      </div>
    </div>
  );
}

function Container44() {
  return (
    <div className="content-stretch flex flex-col gap-[8px] h-[211px] items-start justify-center py-[72.5px] relative shrink-0 w-full" data-name="Container">
      <Container45 />
      <Container47 />
      <Container48 />
    </div>
  );
}

function Lesson1Quiz3() {
  return (
    <div className="absolute bg-white content-stretch flex flex-col h-[231px] items-start left-0 overflow-clip pt-[10px] px-[10px] rounded-[14.99px] top-[2472px] w-[186px]" data-name="Lesson1Quiz7">
      <Container44 />
    </div>
  );
}

function Paragraph60() {
  return (
    <div className="h-[15px] relative shrink-0 w-[1280px]" data-name="Paragraph">
      <p className="absolute font-['Inter:Regular',sans-serif] font-normal leading-[15px] left-0 not-italic text-[#364146] text-[10px] top-[0.5px] tracking-[-0.13px] whitespace-nowrap">• Четкая структура</p>
    </div>
  );
}

function Paragraph61() {
  return (
    <div className="h-[15px] relative shrink-0 w-[1280px]" data-name="Paragraph">
      <p className="absolute font-['Inter:Regular',sans-serif] font-normal leading-[15px] left-0 not-italic text-[#364146] text-[10px] top-[0.5px] tracking-[-0.13px] whitespace-nowrap">• Одна главная кнопка</p>
    </div>
  );
}

function Paragraph62() {
  return (
    <div className="h-[15px] relative shrink-0 w-[1280px]" data-name="Paragraph">
      <p className="absolute font-['Inter:Regular',sans-serif] font-normal leading-[15px] left-0 not-italic text-[#364146] text-[10px] top-[0.5px] tracking-[-0.13px] whitespace-nowrap">• Случайные элементы</p>
    </div>
  );
}

function Paragraph63() {
  return (
    <div className="flex-[1_0_0] min-h-px min-w-px relative w-[1280px]" data-name="Paragraph">
      <p className="absolute font-['Inter:Regular',sans-serif] font-normal leading-[15px] left-0 not-italic text-[#364146] text-[10px] top-[0.5px] tracking-[-0.13px] whitespace-nowrap">• Понятные заголовки</p>
    </div>
  );
}

function Container49() {
  return (
    <div className="absolute content-stretch flex flex-col gap-[8px] h-[84px] items-start left-0 top-[3136px] w-[1280px]" data-name="Container">
      <Paragraph60 />
      <Paragraph61 />
      <Paragraph62 />
      <Paragraph63 />
    </div>
  );
}

function Paragraph64() {
  return (
    <div className="h-[10.5px] relative shrink-0 w-full" data-name="Paragraph">
      <p className="absolute font-['Inter:Regular',sans-serif] font-normal leading-[10.5px] left-0 not-italic text-[#364146] text-[7px] top-0 tracking-[-0.09px] whitespace-nowrap">Заголовок раздела</p>
    </div>
  );
}

function Container51() {
  return (
    <div className="bg-[#f7f8fc] h-[22.5px] relative rounded-[6px] shrink-0 w-[166px]" data-name="Container">
      <div className="bg-clip-padding border-0 border-[transparent] border-solid content-stretch flex flex-col items-start pt-[6px] px-[6px] relative size-full">
        <Paragraph64 />
      </div>
    </div>
  );
}

function Paragraph65() {
  return (
    <div className="h-[9px] relative shrink-0 w-full" data-name="Paragraph">
      <p className="absolute font-['Inter:Regular',sans-serif] font-normal leading-[9px] left-0 not-italic text-[#8e9199] text-[6px] top-[-0.5px] tracking-[-0.08px] whitespace-nowrap">Информация</p>
    </div>
  );
}

function Container52() {
  return (
    <div className="bg-[#f7f8fc] h-[21px] relative rounded-[6px] shrink-0 w-[166px]" data-name="Container">
      <div className="bg-clip-padding border-0 border-[transparent] border-solid content-stretch flex flex-col items-start pt-[6px] px-[6px] relative size-full">
        <Paragraph65 />
      </div>
    </div>
  );
}

function Paragraph66() {
  return (
    <div className="h-[12px] relative shrink-0 w-full" data-name="Paragraph">
      <p className="-translate-x-1/2 absolute font-['Inter:Regular',sans-serif] font-normal leading-[12px] left-[71.39px] not-italic text-[8px] text-center text-white top-0 tracking-[-0.1px] whitespace-nowrap">Действие</p>
    </div>
  );
}

function Container53() {
  return (
    <div className="bg-[#3b82f6] h-[24px] relative rounded-[6px] shrink-0 w-[166px]" data-name="Container">
      <div className="bg-clip-padding border-0 border-[transparent] border-solid content-stretch flex flex-col items-start pt-[6px] px-[12px] relative size-full">
        <Paragraph66 />
      </div>
    </div>
  );
}

function Container50() {
  return (
    <div className="content-stretch flex flex-col gap-[8px] h-[211px] items-start justify-center py-[63.75px] relative shrink-0 w-full" data-name="Container">
      <Container51 />
      <Container52 />
      <Container53 />
    </div>
  );
}

function Lesson1Quiz4() {
  return (
    <div className="absolute bg-white content-stretch flex flex-col h-[231px] items-start left-0 overflow-clip pt-[10px] px-[10px] rounded-[14.99px] top-[2889px] w-[186px]" data-name="Lesson1Quiz8">
      <Container50 />
    </div>
  );
}

function Paragraph67() {
  return (
    <div className="h-[15px] relative shrink-0 w-[1280px]" data-name="Paragraph">
      <p className="absolute font-['Inter:Regular',sans-serif] font-normal leading-[15px] left-0 not-italic text-[#364146] text-[10px] top-[0.5px] tracking-[-0.13px] whitespace-nowrap">• Перегруженный экран</p>
    </div>
  );
}

function Paragraph68() {
  return (
    <div className="h-[15px] relative shrink-0 w-[1280px]" data-name="Paragraph">
      <p className="absolute font-['Inter:Regular',sans-serif] font-normal leading-[15px] left-0 not-italic text-[#364146] text-[10px] top-[0.5px] tracking-[-0.13px] whitespace-nowrap">• Непонятные действия</p>
    </div>
  );
}

function Paragraph69() {
  return (
    <div className="h-[15px] relative shrink-0 w-[1280px]" data-name="Paragraph">
      <p className="absolute font-['Inter:Regular',sans-serif] font-normal leading-[15px] left-0 not-italic text-[#364146] text-[10px] top-[0.5px] tracking-[-0.13px] whitespace-nowrap">• Четкая структура</p>
    </div>
  );
}

function Paragraph70() {
  return (
    <div className="flex-[1_0_0] min-h-px min-w-px relative w-[1280px]" data-name="Paragraph">
      <p className="absolute font-['Inter:Regular',sans-serif] font-normal leading-[15px] left-0 not-italic text-[#364146] text-[10px] top-[0.5px] tracking-[-0.13px] whitespace-nowrap">• Слишком много элементов</p>
    </div>
  );
}

function Container54() {
  return (
    <div className="absolute content-stretch flex flex-col gap-[8px] h-[84px] items-start left-0 top-[3553px] w-[1280px]" data-name="Container">
      <Paragraph67 />
      <Paragraph68 />
      <Paragraph69 />
      <Paragraph70 />
    </div>
  );
}

function Paragraph71() {
  return (
    <div className="h-[7.5px] relative shrink-0 w-full" data-name="Paragraph">
      <p className="-translate-x-1/2 absolute font-['Inter:Regular',sans-serif] font-normal leading-[7.5px] left-[23.08px] not-italic text-[5px] text-center text-white top-[-0.5px] tracking-[-0.07px] whitespace-nowrap">Btn1</p>
    </div>
  );
}

function Container57() {
  return (
    <div className="bg-[#ef4444] flex-[54_0_0] h-[11.5px] min-h-px min-w-px relative rounded-[3px]" data-name="Container">
      <div className="bg-clip-padding border-0 border-[transparent] border-solid content-stretch flex flex-col items-start pt-[2px] px-[4px] relative size-full">
        <Paragraph71 />
      </div>
    </div>
  );
}

function Paragraph72() {
  return (
    <div className="h-[7.5px] relative shrink-0 w-full" data-name="Paragraph">
      <p className="-translate-x-1/2 absolute font-['Inter:Regular',sans-serif] font-normal leading-[7.5px] left-[23.13px] not-italic text-[5px] text-center text-white top-[-0.5px] tracking-[-0.07px] whitespace-nowrap">Btn2</p>
    </div>
  );
}

function Container58() {
  return (
    <div className="bg-[#8b5cf6] flex-[54_0_0] h-[11.5px] min-h-px min-w-px relative rounded-[3px]" data-name="Container">
      <div className="bg-clip-padding border-0 border-[transparent] border-solid content-stretch flex flex-col items-start pt-[2px] px-[4px] relative size-full">
        <Paragraph72 />
      </div>
    </div>
  );
}

function Paragraph73() {
  return (
    <div className="h-[7.5px] relative shrink-0 w-full" data-name="Paragraph">
      <p className="-translate-x-1/2 absolute font-['Inter:Regular',sans-serif] font-normal leading-[7.5px] left-[23.05px] not-italic text-[5px] text-center text-white top-[-0.5px] tracking-[-0.07px] whitespace-nowrap">Btn3</p>
    </div>
  );
}

function Container59() {
  return (
    <div className="bg-[#22c55e] flex-[54_0_0] h-[11.5px] min-h-px min-w-px relative rounded-[3px]" data-name="Container">
      <div className="bg-clip-padding border-0 border-[transparent] border-solid content-stretch flex flex-col items-start pt-[2px] px-[4px] relative size-full">
        <Paragraph73 />
      </div>
    </div>
  );
}

function Container56() {
  return (
    <div className="h-[11.5px] relative shrink-0 w-[166px]" data-name="Container">
      <div className="bg-clip-padding border-0 border-[transparent] border-solid content-stretch flex gap-[2px] items-start relative size-full">
        <Container57 />
        <Container58 />
        <Container59 />
      </div>
    </div>
  );
}

function Paragraph74() {
  return (
    <div className="h-[7.5px] relative shrink-0 w-full" data-name="Paragraph">
      <p className="-translate-x-1/2 absolute font-['Inter:Regular',sans-serif] font-normal leading-[7.5px] left-[37.03px] not-italic text-[#78350f] text-[5px] text-center top-[-0.5px] tracking-[-0.07px] whitespace-nowrap">Btn4</p>
    </div>
  );
}

function Container61() {
  return (
    <div className="bg-[#fbbf24] flex-[82_0_0] h-[11.5px] min-h-px min-w-px relative rounded-[3px]" data-name="Container">
      <div className="bg-clip-padding border-0 border-[transparent] border-solid content-stretch flex flex-col items-start pt-[2px] px-[4px] relative size-full">
        <Paragraph74 />
      </div>
    </div>
  );
}

function Paragraph75() {
  return (
    <div className="h-[7.5px] relative shrink-0 w-full" data-name="Paragraph">
      <p className="-translate-x-1/2 absolute font-['Inter:Regular',sans-serif] font-normal leading-[7.5px] left-[37.12px] not-italic text-[5px] text-center text-white top-[-0.5px] tracking-[-0.07px] whitespace-nowrap">Btn5</p>
    </div>
  );
}

function Container62() {
  return (
    <div className="bg-[#ec4899] flex-[82_0_0] h-[11.5px] min-h-px min-w-px relative rounded-[3px]" data-name="Container">
      <div className="bg-clip-padding border-0 border-[transparent] border-solid content-stretch flex flex-col items-start pt-[2px] px-[4px] relative size-full">
        <Paragraph75 />
      </div>
    </div>
  );
}

function Container60() {
  return (
    <div className="h-[11.5px] relative shrink-0 w-[166px]" data-name="Container">
      <div className="bg-clip-padding border-0 border-[transparent] border-solid content-stretch flex gap-[2px] items-start relative size-full">
        <Container61 />
        <Container62 />
      </div>
    </div>
  );
}

function Paragraph76() {
  return (
    <div className="content-stretch flex h-[6px] items-start relative shrink-0 w-full" data-name="Paragraph">
      <p className="flex-[1_0_0] font-['Inter:Regular',sans-serif] font-normal leading-[6px] min-h-px min-w-px not-italic relative text-[#364146] text-[5px] tracking-[-0.07px]">Текст без отступов</p>
    </div>
  );
}

function Container63() {
  return (
    <div className="bg-[#f7f8fc] h-[10px] relative rounded-[3px] shrink-0 w-[166px]" data-name="Container">
      <div className="bg-clip-padding border-0 border-[transparent] border-solid content-stretch flex flex-col items-start pt-[2px] px-[2px] relative size-full">
        <Paragraph76 />
      </div>
    </div>
  );
}

function Paragraph77() {
  return (
    <div className="content-stretch flex h-[6px] items-start relative shrink-0 w-full" data-name="Paragraph">
      <p className="flex-[1_0_0] font-['Inter:Regular',sans-serif] font-normal leading-[6px] min-h-px min-w-px not-italic relative text-[#364146] text-[5px] tracking-[-0.07px]">Еще текст</p>
    </div>
  );
}

function Container64() {
  return (
    <div className="bg-[#f7f8fc] h-[10px] relative rounded-[3px] shrink-0 w-[166px]" data-name="Container">
      <div className="bg-clip-padding border-0 border-[transparent] border-solid content-stretch flex flex-col items-start pt-[2px] px-[2px] relative size-full">
        <Paragraph77 />
      </div>
    </div>
  );
}

function Container55() {
  return (
    <div className="content-stretch flex flex-col gap-[3px] h-[211px] items-center justify-center relative shrink-0 w-full" data-name="Container">
      <Container56 />
      <Container60 />
      <Container63 />
      <Container64 />
    </div>
  );
}

function Lesson1Quiz5() {
  return (
    <div className="absolute bg-white content-stretch flex flex-col h-[231px] items-start left-0 overflow-clip pt-[10px] px-[10px] rounded-[14.99px] top-[3306px] w-[186px]" data-name="Lesson1Quiz9">
      <Container55 />
    </div>
  );
}

function Paragraph78() {
  return (
    <div className="h-[9px] relative shrink-0 w-[5.875px]" data-name="Paragraph">
      <div className="bg-clip-padding border-0 border-[transparent] border-solid relative size-full">
        <p className="absolute font-['Inter:Regular',sans-serif] font-normal leading-[9px] left-0 not-italic text-[#101828] text-[6px] top-[-0.5px] tracking-[-0.08px] whitespace-nowrap">UI</p>
      </div>
    </div>
  );
}

function Container66() {
  return (
    <div className="bg-[#f7f8fc] flex-[1_0_0] h-[40px] min-h-px min-w-px relative rounded-[4px]" data-name="Container">
      <div aria-hidden="true" className="absolute border border-[#d1d3db] border-solid inset-0 pointer-events-none rounded-[4px]" />
      <div className="flex flex-row items-center justify-center size-full">
        <div className="bg-clip-padding border-0 border-[transparent] border-solid content-stretch flex items-center justify-center px-[12.063px] py-px relative size-full">
          <Paragraph78 />
        </div>
      </div>
    </div>
  );
}

function Paragraph79() {
  return (
    <div className="h-[18px] relative shrink-0 w-[12px]" data-name="Paragraph">
      <div className="bg-clip-padding border-0 border-[transparent] border-solid relative size-full">
        <p className="absolute font-['Inter:Regular',sans-serif] font-normal leading-[18px] left-0 not-italic text-[#0a0a0a] text-[12px] top-px whitespace-nowrap">👤</p>
      </div>
    </div>
  );
}

function Container65() {
  return (
    <div className="content-stretch flex gap-[6px] h-[40px] items-center relative shrink-0 w-[48px]" data-name="Container">
      <Container66 />
      <Paragraph79 />
    </div>
  );
}

function Lesson1Quiz10Card() {
  return (
    <div className="absolute content-stretch flex h-[80px] items-center justify-center left-0 px-[41px] rounded-[8px] top-[3829px] w-[130px]" data-name="Lesson1Quiz10Card1">
      <Container65 />
    </div>
  );
}

function Paragraph80() {
  return (
    <div className="h-[24px] relative shrink-0 w-[16px]" data-name="Paragraph">
      <div className="bg-clip-padding border-0 border-[transparent] border-solid relative size-full">
        <p className="absolute font-['Inter:Regular',sans-serif] font-normal leading-[24px] left-0 not-italic text-[#0a0a0a] text-[16px] top-[-0.5px] tracking-[-0.3125px] whitespace-nowrap">👤</p>
      </div>
    </div>
  );
}

function Container67() {
  return (
    <div className="bg-[#e9ecf1] content-stretch flex items-center justify-center px-[7px] relative rounded-[16777200px] shrink-0 size-[30px]" data-name="Container">
      <Paragraph80 />
    </div>
  );
}

function Lesson1Quiz10Card1() {
  return (
    <div className="absolute content-stretch flex h-[80px] items-center justify-center left-[154px] px-[50px] rounded-[8px] top-[3829px] w-[130px]" data-name="Lesson1Quiz10Card2">
      <Container67 />
    </div>
  );
}

function Paragraph81() {
  return (
    <div className="h-[24px] relative shrink-0 w-[14.094px]" data-name="Paragraph">
      <div className="bg-clip-padding border-0 border-[transparent] border-solid relative size-full">
        <p className="absolute font-['Inter:Regular',sans-serif] font-normal leading-[24px] left-0 not-italic text-[16px] text-white top-[-1px] whitespace-nowrap">✓</p>
      </div>
    </div>
  );
}

function Container68() {
  return (
    <div className="bg-[#22c55e] content-stretch flex items-center justify-center px-[7.953px] relative rounded-[6px] shrink-0 size-[30px]" data-name="Container">
      <Paragraph81 />
    </div>
  );
}

function Lesson1Quiz10Card2() {
  return (
    <div className="absolute content-stretch flex h-[80px] items-center justify-center left-[308px] px-[50px] rounded-[8px] top-[3829px] w-[130px]" data-name="Lesson1Quiz10Card3">
      <Container68 />
    </div>
  );
}

function Paragraph82() {
  return (
    <div className="absolute h-[15px] left-0 top-[3933px] w-[1280px]" data-name="Paragraph">
      <p className="absolute font-['Inter:Regular',sans-serif] font-normal leading-[15px] left-0 not-italic text-[#364146] text-[10px] top-[0.5px] tracking-[-0.13px] whitespace-nowrap">• Человек, который использует продукт</p>
    </div>
  );
}

function Paragraph83() {
  return (
    <div className="absolute h-[15px] left-0 top-[3956px] w-[1280px]" data-name="Paragraph">
      <p className="absolute font-['Inter:Regular',sans-serif] font-normal leading-[15px] left-0 not-italic text-[#364146] text-[10px] top-[0.5px] tracking-[-0.13px] whitespace-nowrap">• Цель пользователя</p>
    </div>
  );
}

function Paragraph84() {
  return (
    <div className="absolute h-[15px] left-0 top-[3979px] w-[1280px]" data-name="Paragraph">
      <p className="absolute font-['Inter:Regular',sans-serif] font-normal leading-[15px] left-0 not-italic text-[#364146] text-[10px] top-[0.5px] tracking-[-0.13px] whitespace-nowrap">• Опыт взаимодействия</p>
    </div>
  );
}

function Paragraph85() {
  return (
    <div className="h-[12px] relative shrink-0 w-full" data-name="Paragraph">
      <p className="absolute font-['Inter:Regular',sans-serif] font-normal leading-[12px] left-0 not-italic text-[8px] text-white top-0 tracking-[-0.1px] whitespace-nowrap">Начать</p>
    </div>
  );
}

function Container69() {
  return (
    <div className="bg-[#3b82f6] content-stretch flex flex-col h-[24px] items-start pt-[6px] px-[12px] relative rounded-[6px] shrink-0 w-[51.305px]" data-name="Container">
      <Paragraph85 />
    </div>
  );
}

function Lesson1Quiz11Card() {
  return (
    <div className="absolute content-stretch flex h-[80px] items-center justify-center left-0 pl-[39.344px] pr-[39.352px] rounded-[8px] top-[4080px] w-[130px]" data-name="Lesson1Quiz11Card1">
      <Container69 />
    </div>
  );
}

function Paragraph86() {
  return (
    <div className="h-[18px] relative shrink-0 w-[114px]" data-name="Paragraph">
      <p className="-translate-x-1/2 absolute font-['Inter:Regular',sans-serif] font-normal leading-[9px] left-[57.31px] not-italic text-[#f7f8fc] text-[7px] text-center top-0 tracking-[-0.09px] w-[93px]">Текстовая информация для пользователя</p>
    </div>
  );
}

function Lesson1Quiz11Card1() {
  return (
    <div className="absolute content-stretch flex h-[80px] items-center justify-center left-[154px] px-[8px] rounded-[8px] top-[4080px] w-[130px]" data-name="Lesson1Quiz11Card2">
      <Paragraph86 />
    </div>
  );
}

function Paragraph87() {
  return (
    <div className="absolute h-[7.5px] left-[5px] top-[5px] w-[50px]" data-name="Paragraph">
      <p className="absolute font-['Inter:Regular',sans-serif] font-normal leading-[7.5px] left-0 not-italic text-[#d1d3db] text-[5px] top-[-0.5px] tracking-[-0.07px] whitespace-nowrap">Заголовок</p>
    </div>
  );
}

function Paragraph88() {
  return (
    <div className="absolute content-stretch flex h-[5px] items-start left-[5px] top-[14.5px] w-[50px]" data-name="Paragraph">
      <p className="flex-[1_0_0] font-['Inter:Regular',sans-serif] font-normal leading-[5px] min-h-px min-w-px not-italic relative text-[#8e9199] text-[4px] tracking-[-0.06px]">Текст</p>
    </div>
  );
}

function Paragraph89() {
  return (
    <div className="h-[6px] relative shrink-0 w-full" data-name="Paragraph">
      <p className="-translate-x-1/2 absolute font-['Inter:Regular',sans-serif] font-normal leading-[6px] left-[21.39px] not-italic text-[4px] text-center text-white top-[0.5px] tracking-[-0.06px] whitespace-nowrap">Btn</p>
    </div>
  );
}

function Container71() {
  return (
    <div className="absolute bg-[#3b82f6] content-stretch flex flex-col h-[10px] items-start left-[5px] pt-[2px] px-[4px] rounded-[2px] top-[45px] w-[50px]" data-name="Container">
      <Paragraph89 />
    </div>
  );
}

function Container70() {
  return (
    <div className="relative rounded-[4px] shrink-0 size-[60px]" data-name="Container">
      <div aria-hidden="true" className="absolute border border-[#d1d3db] border-solid inset-0 pointer-events-none rounded-[4px]" />
      <Paragraph87 />
      <Paragraph88 />
      <Container71 />
    </div>
  );
}

function Lesson1Quiz11Card2() {
  return (
    <div className="absolute content-stretch flex h-[80px] items-center justify-center left-[308px] px-[35px] rounded-[8px] top-[4080px] w-[130px]" data-name="Lesson1Quiz11Card3">
      <Container70 />
    </div>
  );
}

function Paragraph90() {
  return (
    <div className="absolute h-[15px] left-0 top-[4184px] w-[1280px]" data-name="Paragraph">
      <p className="absolute font-['Inter:Regular',sans-serif] font-normal leading-[15px] left-0 not-italic text-[#364146] text-[10px] top-[0.5px] tracking-[-0.13px] whitespace-nowrap">• Действие</p>
    </div>
  );
}

function Paragraph91() {
  return (
    <div className="absolute h-[15px] left-0 top-[4207px] w-[1280px]" data-name="Paragraph">
      <p className="absolute font-['Inter:Regular',sans-serif] font-normal leading-[15px] left-0 not-italic text-[#364146] text-[10px] top-[0.5px] tracking-[-0.13px] whitespace-nowrap">• Информация</p>
    </div>
  );
}

function Paragraph92() {
  return (
    <div className="absolute h-[15px] left-0 top-[4230px] w-[1280px]" data-name="Paragraph">
      <p className="absolute font-['Inter:Regular',sans-serif] font-normal leading-[15px] left-0 not-italic text-[#364146] text-[10px] top-[0.5px] tracking-[-0.13px] whitespace-nowrap">• Контекст</p>
    </div>
  );
}

function Container74() {
  return <div className="bg-[#ef4444] h-[10px] rounded-[2px] shrink-0 w-[15px]" data-name="Container" />;
}

function Container75() {
  return <div className="bg-[#8b5cf6] h-[10px] rounded-[2px] shrink-0 w-[15px]" data-name="Container" />;
}

function Container76() {
  return <div className="bg-[#22c55e] h-[10px] rounded-[2px] shrink-0 w-[15px]" data-name="Container" />;
}

function Container73() {
  return (
    <div className="content-stretch flex gap-[2px] h-[10px] items-start relative shrink-0 w-[114px]" data-name="Container">
      <Container74 />
      <Container75 />
      <Container76 />
    </div>
  );
}

function Container78() {
  return <div className="bg-[#fbbf24] h-[10px] rounded-[2px] shrink-0 w-[15px]" data-name="Container" />;
}

function Container79() {
  return <div className="bg-[#ec4899] h-[10px] rounded-[2px] shrink-0 w-[15px]" data-name="Container" />;
}

function Container77() {
  return (
    <div className="content-stretch flex flex-[1_0_0] gap-[2px] items-start min-h-px min-w-px relative w-[114px]" data-name="Container">
      <Container78 />
      <Container79 />
    </div>
  );
}

function Container72() {
  return (
    <div className="absolute content-stretch flex flex-col gap-[2px] h-[22px] items-start left-[8px] top-[4360px] w-[114px]" data-name="Container">
      <Container73 />
      <Container77 />
    </div>
  );
}

function Paragraph93() {
  return (
    <div className="h-[7.5px] relative shrink-0 w-full" data-name="Paragraph">
      <p className="-translate-x-1/2 absolute font-['Inter:Regular',sans-serif] font-normal leading-[7.5px] left-[51.4px] not-italic text-[5px] text-center text-white top-[-0.5px] tracking-[-0.07px] whitespace-nowrap">Действие</p>
    </div>
  );
}

function Container81() {
  return (
    <div className="bg-[#3b82f6] content-stretch flex flex-col h-[13.5px] items-start pt-[3px] px-[6px] relative rounded-[3px] shrink-0 w-[114px]" data-name="Container">
      <Paragraph93 />
    </div>
  );
}

function Paragraph94() {
  return (
    <div className="h-[7.5px] relative shrink-0 w-full" data-name="Paragraph">
      <p className="-translate-x-1/2 absolute font-['Inter:Regular',sans-serif] font-normal leading-[7.5px] left-[51.33px] not-italic text-[5px] text-center text-white top-[-0.5px] tracking-[-0.07px] whitespace-nowrap">Продолжить</p>
    </div>
  );
}

function Container82() {
  return (
    <div className="bg-[#3b82f6] content-stretch flex flex-col h-[13.5px] items-start pt-[3px] px-[6px] relative rounded-[3px] shrink-0 w-[114px]" data-name="Container">
      <Paragraph94 />
    </div>
  );
}

function Paragraph95() {
  return (
    <div className="h-[7.5px] relative shrink-0 w-full" data-name="Paragraph">
      <p className="-translate-x-1/2 absolute font-['Inter:Regular',sans-serif] font-normal leading-[7.5px] left-[50.5px] not-italic text-[5px] text-center text-white top-[-0.5px] tracking-[-0.07px] whitespace-nowrap">Далее</p>
    </div>
  );
}

function Container83() {
  return (
    <div className="bg-[#3b82f6] flex-[1_0_0] min-h-px min-w-px relative rounded-[3px] w-[114px]" data-name="Container">
      <div className="content-stretch flex flex-col items-start pt-[3px] px-[6px] relative size-full">
        <Paragraph95 />
      </div>
    </div>
  );
}

function Container80() {
  return (
    <div className="absolute content-stretch flex flex-col gap-[3px] h-[46.5px] items-start left-[162px] top-[4347.75px] w-[114px]" data-name="Container">
      <Container81 />
      <Container82 />
      <Container83 />
    </div>
  );
}

function Paragraph96() {
  return (
    <div className="content-stretch flex h-[6px] items-start relative shrink-0 w-[114px]" data-name="Paragraph">
      <p className="flex-[1_0_0] font-['Inter:Regular',sans-serif] font-normal leading-[6px] min-h-px min-w-px not-italic relative text-[#364146] text-[5px] tracking-[-0.07px]">Много текста без структуры</p>
    </div>
  );
}

function Paragraph97() {
  return (
    <div className="h-[6px] relative shrink-0 w-full" data-name="Paragraph">
      <p className="absolute font-['Inter:Regular',sans-serif] font-normal leading-[6px] left-0 not-italic text-[#8e9199] text-[4px] top-[0.5px] tracking-[-0.06px] whitespace-nowrap">Карточка</p>
    </div>
  );
}

function Container85() {
  return (
    <div className="bg-[#f7f8fc] content-stretch flex flex-col h-[10px] items-start pt-[2px] px-[2px] relative rounded-[2px] shrink-0 w-[114px]" data-name="Container">
      <Paragraph97 />
    </div>
  );
}

function Paragraph98() {
  return (
    <div className="h-[6px] relative shrink-0 w-full" data-name="Paragraph">
      <p className="absolute font-['Inter:Regular',sans-serif] font-normal leading-[6px] left-0 not-italic text-[#8e9199] text-[4px] top-[0.5px] tracking-[-0.06px] whitespace-nowrap">Еще карточка</p>
    </div>
  );
}

function Container86() {
  return (
    <div className="bg-[#f7f8fc] flex-[1_0_0] min-h-px min-w-px relative rounded-[2px] w-[114px]" data-name="Container">
      <div className="content-stretch flex flex-col items-start pt-[2px] px-[2px] relative size-full">
        <Paragraph98 />
      </div>
    </div>
  );
}

function Container84() {
  return (
    <div className="absolute content-stretch flex flex-col gap-[2px] h-[30px] items-start left-[316px] top-[4356px] w-[114px]" data-name="Container">
      <Paragraph96 />
      <Container85 />
      <Container86 />
    </div>
  );
}

function Paragraph99() {
  return (
    <div className="absolute h-[15px] left-0 top-[4435px] w-[1280px]" data-name="Paragraph">
      <p className="absolute font-['Inter:Regular',sans-serif] font-normal leading-[15px] left-0 not-italic text-[#364146] text-[10px] top-[0.5px] tracking-[-0.13px] whitespace-nowrap">• Пользователь не понимает, что делать</p>
    </div>
  );
}

function Paragraph100() {
  return (
    <div className="absolute h-[15px] left-0 top-[4458px] w-[1280px]" data-name="Paragraph">
      <p className="absolute font-['Inter:Regular',sans-serif] font-normal leading-[15px] left-0 not-italic text-[#364146] text-[10px] top-[0.5px] tracking-[-0.13px] whitespace-nowrap">• Долго выполняет задачу</p>
    </div>
  );
}

function Paragraph101() {
  return (
    <div className="absolute h-[15px] left-0 top-[4481px] w-[1280px]" data-name="Paragraph">
      <p className="absolute font-['Inter:Regular',sans-serif] font-normal leading-[15px] left-0 not-italic text-[#364146] text-[10px] top-[0.5px] tracking-[-0.13px] whitespace-nowrap">• Трудно воспринимать экран</p>
    </div>
  );
}

// ─────────────────────────────────────────────────────────────────────────────
// Named exports for LessonQuizPage (quiz_what_is_ux visuals)
// ─────────────────────────────────────────────────────────────────────────────
export function CQUxCompare1A() {
  return <div style={{ position: "relative", width: 207, height: 231 }}><Lesson1Quiz1VariantA /></div>;
}
export function CQUxCompare1B() {
  return <div style={{ position: "relative", width: 207, height: 231 }}><Lesson1Quiz1VariantB /></div>;
}
export function CQUxCompare2A() {
  return <div style={{ position: "relative", width: 207, height: 231 }}><Lesson1Quiz2VariantA /></div>;
}
export function CQUxCompare2B() {
  return <div style={{ position: "relative", width: 207, height: 231 }}><Lesson1Quiz2VariantB /></div>;
}
export function CQUxCompare3A() {
  return <div style={{ position: "relative", width: 207, height: 231 }}><Lesson1Quiz3VariantA /></div>;
}
export function CQUxCompare3B() {
  return <div style={{ position: "relative", width: 207, height: 231 }}><Lesson1Quiz3VariantB /></div>;
}
export function CQUxSingle1() {
  return <div style={{ position: "relative", background: "white", height: 231, width: 186, overflow: "hidden", paddingTop: 10, paddingLeft: 10, paddingRight: 10, borderRadius: 15 }}><Container34 /></div>;
}
export function CQUxSingle2() {
  return <div style={{ position: "relative", background: "white", height: 231, width: 186, overflow: "hidden", paddingTop: 10, paddingLeft: 10, paddingRight: 10, borderRadius: 15 }}><Container37 /></div>;
}
export function CQUxSingle3() {
  return <div style={{ position: "relative", background: "white", height: 231, width: 186, overflow: "hidden", paddingTop: 10, paddingLeft: 10, paddingRight: 10, borderRadius: 15 }}><Container41 /></div>;
}
export function CQUxMulti1() {
  return <div style={{ position: "relative", background: "white", height: 231, width: 186, overflow: "hidden", paddingTop: 10, paddingLeft: 10, paddingRight: 10, borderRadius: 15 }}><Container44 /></div>;
}
export function CQUxMulti2() {
  return <div style={{ position: "relative", background: "white", height: 231, width: 186, overflow: "hidden", paddingTop: 10, paddingLeft: 10, paddingRight: 10, borderRadius: 15 }}><Container50 /></div>;
}
export function CQUxMulti3() {
  return <div style={{ position: "relative", background: "white", height: 231, width: 186, overflow: "hidden", paddingTop: 10, paddingLeft: 10, paddingRight: 10, borderRadius: 15 }}><Container55 /></div>;
}
export function CQUxConn1A() { return <Lesson1Quiz10Card />; }
export function CQUxConn1B() { return <Lesson1Quiz10Card1 />; }
export function CQUxConn1C() { return <Lesson1Quiz10Card2 />; }
export function CQUxConn2A() { return <Lesson1Quiz11Card />; }
export function CQUxConn2B() { return <Lesson1Quiz11Card1 />; }
export function CQUxConn2C() { return <Lesson1Quiz11Card2 />; }
export function CQUxConn3A() { return <Container72 />; }
export function CQUxConn3B() { return <Container80 />; }
export function CQUxConn3C() { return <Container84 />; }

export default function Ux() {
  return (
    <div className="relative size-full" data-name="Что такое UX">
      <p className="absolute font-['Inter:Regular',sans-serif] font-normal leading-[27px] left-0 not-italic text-[#101828] text-[18px] top-[-0.5px] tracking-[-0.4395px] whitespace-nowrap">Compare UI</p>
      <p className="absolute font-['Inter:Regular',sans-serif] font-normal leading-[15px] left-0 not-italic text-[#8e9199] text-[12px] top-[34px] tracking-[-0.15px] w-[1280px]">Сравните два варианта интерфейса</p>
      <p className="absolute font-['Inter:Regular',sans-serif] font-normal leading-[14px] left-0 not-italic text-[#8e9199] text-[11px] top-[89.5px] tracking-[-0.14px] whitespace-nowrap">1. Где пользователю понятнее, что делать?</p>
      <Container />
      <Container2 />
      <p className="absolute font-['Inter:Regular',sans-serif] font-normal leading-[14px] left-0 not-italic text-[#8e9199] text-[11px] top-[406.5px] tracking-[-0.14px] whitespace-nowrap">2. Где интерфейс удобнее?</p>
      <Container5 />
      <Container18 />
      <p className="absolute font-['Inter:Regular',sans-serif] font-normal leading-[14px] left-0 not-italic text-[#8e9199] text-[11px] top-[723.5px] tracking-[-0.14px] whitespace-nowrap">3. Где пользователь быстрее достигает цели?</p>
      <Container25 />
      <Container30 />
      <p className="absolute font-['Inter:Regular',sans-serif] font-normal leading-[27px] left-0 not-italic text-[#101828] text-[18px] top-[1056.5px] tracking-[-0.4395px] whitespace-nowrap">Single Choice</p>
      <p className="absolute font-['Inter:Regular',sans-serif] font-normal leading-[15px] left-0 not-italic text-[#8e9199] text-[12px] top-[1091px] tracking-[-0.15px] w-[1280px]">Выберите один правильный ответ</p>
      <p className="absolute font-['Inter:Regular',sans-serif] font-normal leading-[14px] left-0 not-italic text-[#8e9199] text-[11px] top-[1146.5px] tracking-[-0.14px] whitespace-nowrap">4. Что такое UX?</p>
      <Container33 />
      <Lesson1Quiz />
      <p className="absolute font-['Inter:Regular',sans-serif] font-normal leading-[14px] left-0 not-italic text-[#8e9199] text-[11px] top-[1540.5px] tracking-[-0.14px] whitespace-nowrap">5. Главная задача UX?</p>
      <Container36 />
      <Lesson1Quiz1 />
      <p className="absolute font-['Inter:Regular',sans-serif] font-normal leading-[14px] left-0 not-italic text-[#8e9199] text-[11px] top-[1934.5px] tracking-[-0.14px] whitespace-nowrap">6. Что делает интерфейс удобным?</p>
      <Container40 />
      <Lesson1Quiz2 />
      <p className="absolute font-['Inter:Regular',sans-serif] font-normal leading-[27px] left-0 not-italic text-[#101828] text-[18px] top-[2344.5px] tracking-[-0.4395px] whitespace-nowrap">Multi Choice</p>
      <p className="absolute font-['Inter:Regular',sans-serif] font-normal leading-[15px] left-0 not-italic text-[#8e9199] text-[12px] top-[2379px] tracking-[-0.15px] w-[1280px]">Выберите несколько правильных ответов</p>
      <p className="absolute font-['Inter:Regular',sans-serif] font-normal leading-[14px] left-0 not-italic text-[#8e9199] text-[11px] top-[2434.5px] tracking-[-0.14px] whitespace-nowrap">7. Что влияет на UX?</p>
      <Container43 />
      <Lesson1Quiz3 />
      <p className="absolute font-['Inter:Regular',sans-serif] font-normal leading-[14px] left-0 not-italic text-[#8e9199] text-[11px] top-[2851.5px] tracking-[-0.14px] whitespace-nowrap">8. Что улучшает пользовательский опыт?</p>
      <Container49 />
      <Lesson1Quiz4 />
      <p className="absolute font-['Inter:Regular',sans-serif] font-normal leading-[14px] left-0 not-italic text-[#8e9199] text-[11px] top-[3268.5px] tracking-[-0.14px] whitespace-nowrap">9. Что ухудшает UX?</p>
      <Container54 />
      <Lesson1Quiz5 />
      <p className="absolute font-['Inter:Regular',sans-serif] font-normal leading-[27px] left-0 not-italic text-[#101828] text-[18px] top-[3701.5px] tracking-[-0.4395px] whitespace-nowrap">Match / Connect</p>
      <p className="absolute font-['Inter:Regular',sans-serif] font-normal leading-[15px] left-0 not-italic text-[#8e9199] text-[12px] top-[3736px] tracking-[-0.15px] w-[1280px]">Соедините элементы с описаниями</p>
      <p className="absolute font-['Inter:Regular',sans-serif] font-normal leading-[14px] left-0 not-italic text-[#8e9199] text-[11px] top-[3791.5px] tracking-[-0.14px] whitespace-nowrap">10. Соедините термин и описание</p>
      <Lesson1Quiz10Card />
      <Lesson1Quiz10Card1 />
      <Lesson1Quiz10Card2 />
      <Paragraph82 />
      <Paragraph83 />
      <Paragraph84 />
      <p className="absolute font-['Inter:Regular',sans-serif] font-normal leading-[14px] left-0 not-italic text-[#8e9199] text-[11px] top-[4042.5px] tracking-[-0.14px] whitespace-nowrap">11. Соедините элемент и роль</p>
      <Lesson1Quiz11Card />
      <Lesson1Quiz11Card1 />
      <Lesson1Quiz11Card2 />
      <Paragraph90 />
      <Paragraph91 />
      <Paragraph92 />
      <p className="absolute font-['Inter:Regular',sans-serif] font-normal leading-[14px] left-0 not-italic text-[#8e9199] text-[11px] top-[4293.5px] tracking-[-0.14px] whitespace-nowrap">12. Соедините проблему и эффект</p>
      <Container72 />
      <Container80 />
      <Container84 />
      <Paragraph99 />
      <Paragraph100 />
      <Paragraph101 />
    </div>
  );
}