import imgImageWithFallback from "figma:asset/ad5b26143dc3216fd13c84afc2de09ca25c3a38d.png";
import imgImageWithFallback1 from "figma:asset/6bb87e726cf29dac62fe21af37863d687b2fe172.png";
import imgImageWithFallback2 from "figma:asset/3ac1611a83e936fe79046aee283f28e53968910b.png";
import imgImageWithFallback3 from "figma:asset/97b0f7fe25d257fbc14621033d2e8a81397b7379.png";

function Heading() {
  return (
    <div className="absolute h-[36px] left-0 top-0 w-[1280px]" data-name="Heading 2">
      <p className="absolute font-['Inter:Regular',sans-serif] font-normal leading-[36px] left-0 not-italic text-[#101828] text-[24px] top-0 tracking-[0.0703px] whitespace-nowrap">Урок 2 — Основные UI элементы</p>
    </div>
  );
}

function Paragraph() {
  return (
    <div className="absolute h-[17px] left-0 top-[48px] w-[1280px]" data-name="Paragraph">
      <p className="absolute font-['Inter:Regular',sans-serif] font-normal leading-[17px] left-0 not-italic text-[#8e9199] text-[13px] top-[0.5px] tracking-[-0.16px] whitespace-nowrap">Кнопки, поля ввода и карточки</p>
    </div>
  );
}

function Heading1() {
  return (
    <div className="absolute h-[27px] left-0 top-0 w-[1280px]" data-name="Heading 3">
      <p className="absolute font-['Inter:Regular',sans-serif] font-normal leading-[27px] left-0 not-italic text-[#101828] text-[18px] top-[0.5px] tracking-[-0.4395px] whitespace-nowrap">Compare UI</p>
    </div>
  );
}

function Paragraph1() {
  return (
    <div className="absolute content-stretch flex h-[15px] items-start left-0 top-[35px] w-[1280px]" data-name="Paragraph">
      <p className="flex-[1_0_0] font-['Inter:Regular',sans-serif] font-normal leading-[15px] min-h-px min-w-px not-italic relative text-[#8e9199] text-[12px] tracking-[-0.15px]">Сравните два варианта интерфейса</p>
    </div>
  );
}

function Paragraph2() {
  return (
    <div className="h-[14px] relative shrink-0 w-full" data-name="Paragraph">
      <p className="absolute font-['Inter:Regular',sans-serif] font-normal leading-[14px] left-0 not-italic text-[#8e9199] text-[11px] top-[0.5px] tracking-[-0.14px] whitespace-nowrap">1. Где кнопка сделана правильно?</p>
    </div>
  );
}

function Paragraph3() {
  return (
    <div className="absolute h-[21px] left-0 top-[8px] w-[9.297px]" data-name="Paragraph">
      <p className="absolute font-['Inter:Regular',sans-serif] font-normal leading-[21px] left-0 not-italic text-[#364146] text-[14px] top-0 tracking-[-0.17px] whitespace-nowrap">A</p>
    </div>
  );
}

function Paragraph4() {
  return (
    <div className="h-[7.5px] relative shrink-0 w-full" data-name="Paragraph">
      <p className="absolute font-['Inter:Regular',sans-serif] font-normal leading-[7.5px] left-0 not-italic text-[#a0a0a0] text-[5px] top-[-0.5px] tracking-[-0.07px] whitespace-nowrap">действие</p>
    </div>
  );
}

function Container5() {
  return (
    <div className="bg-[#e8e8e8] h-[13.5px] relative rounded-[4px] shrink-0 w-[38.563px]" data-name="Container">
      <div className="bg-clip-padding border-0 border-[transparent] border-solid content-stretch flex flex-col items-start pt-[3px] px-[8px] relative size-full">
        <Paragraph4 />
      </div>
    </div>
  );
}

function Container4() {
  return (
    <div className="content-stretch flex flex-col h-[211px] items-center justify-center py-[98.75px] relative shrink-0 w-full" data-name="Container">
      <Container5 />
    </div>
  );
}

function Lesson2Quiz1VariantA() {
  return (
    <div className="absolute bg-white content-stretch flex flex-col h-[231px] items-start left-[21.3px] overflow-clip pt-[10px] px-[10px] rounded-[14.99px] top-0 w-[186px]" data-name="Lesson2Quiz1VariantA">
      <Container4 />
    </div>
  );
}

function Container3() {
  return (
    <div className="h-[231px] relative shrink-0 w-[207.297px]" data-name="Container">
      <div className="bg-clip-padding border-0 border-[transparent] border-solid relative size-full">
        <Paragraph3 />
        <Lesson2Quiz1VariantA />
      </div>
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
    <div className="h-[13.5px] relative shrink-0 w-full" data-name="Paragraph">
      <p className="absolute font-['Inter:Regular',sans-serif] font-normal leading-[13.5px] left-0 not-italic text-[9px] text-white top-[0.5px] tracking-[-0.12px] whitespace-nowrap">Начать</p>
    </div>
  );
}

function Container8() {
  return (
    <div className="bg-[#3b82f6] h-[29.5px] relative rounded-[6px] shrink-0 w-[62.672px]" data-name="Container">
      <div className="bg-clip-padding border-0 border-[transparent] border-solid content-stretch flex flex-col items-start pt-[8px] px-[16px] relative size-full">
        <Paragraph6 />
      </div>
    </div>
  );
}

function Container7() {
  return (
    <div className="content-stretch flex flex-col h-[211px] items-center justify-center py-[90.75px] relative shrink-0 w-full" data-name="Container">
      <Container8 />
    </div>
  );
}

function Lesson2Quiz1VariantB() {
  return (
    <div className="absolute bg-white content-stretch flex flex-col h-[231px] items-start left-[20.95px] overflow-clip pt-[10px] px-[10px] rounded-[14.99px] top-0 w-[186px]" data-name="Lesson2Quiz1VariantB">
      <Container7 />
    </div>
  );
}

function Container6() {
  return (
    <div className="h-[231px] relative shrink-0 w-[206.945px]" data-name="Container">
      <div className="bg-clip-padding border-0 border-[transparent] border-solid relative size-full">
        <Paragraph5 />
        <Lesson2Quiz1VariantB />
      </div>
    </div>
  );
}

function Container2() {
  return (
    <div className="content-stretch flex gap-[40px] h-[231px] items-start relative shrink-0 w-full" data-name="Container">
      <Container3 />
      <Container6 />
    </div>
  );
}

function Container1() {
  return (
    <div className="absolute content-stretch flex flex-col gap-[24px] h-[269px] items-start left-0 top-[90px] w-[1280px]" data-name="Container">
      <Paragraph2 />
      <Container2 />
    </div>
  );
}

function Paragraph7() {
  return (
    <div className="h-[14px] relative shrink-0 w-full" data-name="Paragraph">
      <p className="absolute font-['Inter:Regular',sans-serif] font-normal leading-[14px] left-0 not-italic text-[#8e9199] text-[11px] top-[0.5px] tracking-[-0.14px] whitespace-nowrap">2. Где поле ввода сделано удобнее?</p>
    </div>
  );
}

function Paragraph8() {
  return (
    <div className="absolute h-[21px] left-0 top-[8px] w-[9.297px]" data-name="Paragraph">
      <p className="absolute font-['Inter:Regular',sans-serif] font-normal leading-[21px] left-0 not-italic text-[#364146] text-[14px] top-0 tracking-[-0.17px] whitespace-nowrap">A</p>
    </div>
  );
}

function Container13() {
  return (
    <div className="bg-[#f7f8fc] h-[12px] relative rounded-[4px] shrink-0 w-[166px]" data-name="Container">
      <div aria-hidden="true" className="absolute border border-[#d1d3db] border-solid inset-0 pointer-events-none rounded-[4px]" />
    </div>
  );
}

function Container12() {
  return (
    <div className="content-stretch flex flex-col h-[211px] items-start justify-center py-[99.5px] relative shrink-0 w-full" data-name="Container">
      <Container13 />
    </div>
  );
}

function Lesson2Quiz2VariantA() {
  return (
    <div className="absolute bg-white content-stretch flex flex-col h-[231px] items-start left-[21.3px] overflow-clip pt-[10px] px-[10px] rounded-[14.99px] top-0 w-[186px]" data-name="Lesson2Quiz2VariantA">
      <Container12 />
    </div>
  );
}

function Container11() {
  return (
    <div className="h-[231px] relative shrink-0 w-[207.297px]" data-name="Container">
      <div className="bg-clip-padding border-0 border-[transparent] border-solid relative size-full">
        <Paragraph8 />
        <Lesson2Quiz2VariantA />
      </div>
    </div>
  );
}

function Paragraph9() {
  return (
    <div className="absolute h-[21px] left-0 top-[8px] w-[8.945px]" data-name="Paragraph">
      <p className="absolute font-['Inter:Regular',sans-serif] font-normal leading-[21px] left-0 not-italic text-[#364146] text-[14px] top-0 tracking-[-0.17px] whitespace-nowrap">B</p>
    </div>
  );
}

function Paragraph10() {
  return (
    <div className="h-[10.5px] relative shrink-0 w-full" data-name="Paragraph">
      <p className="absolute font-['Inter:Regular',sans-serif] font-normal leading-[10.5px] left-0 not-italic text-[#364146] text-[7px] top-0 tracking-[-0.09px] whitespace-nowrap">Email</p>
    </div>
  );
}

function Paragraph11() {
  return (
    <div className="h-[9px] relative shrink-0 w-full" data-name="Paragraph">
      <p className="absolute font-['Inter:Regular',sans-serif] font-normal leading-[9px] left-0 not-italic text-[#8e9199] text-[6px] top-[-0.5px] tracking-[-0.08px] whitespace-nowrap">example@mail.com</p>
    </div>
  );
}

function Container17() {
  return (
    <div className="bg-[#f7f8fc] h-[21px] relative rounded-[4px] shrink-0 w-full" data-name="Container">
      <div aria-hidden="true" className="absolute border border-[#d1d3db] border-solid inset-0 pointer-events-none rounded-[4px]" />
      <div className="content-stretch flex flex-col items-start pb-px pt-[6px] px-[9px] relative size-full">
        <Paragraph11 />
      </div>
    </div>
  );
}

function Container16() {
  return (
    <div className="h-[35.5px] relative shrink-0 w-[166px]" data-name="Container">
      <div className="bg-clip-padding border-0 border-[transparent] border-solid content-stretch flex flex-col gap-[4px] items-start relative size-full">
        <Paragraph10 />
        <Container17 />
      </div>
    </div>
  );
}

function Container15() {
  return (
    <div className="content-stretch flex flex-col h-[211px] items-start justify-center py-[87.75px] relative shrink-0 w-full" data-name="Container">
      <Container16 />
    </div>
  );
}

function Lesson2Quiz2VariantB() {
  return (
    <div className="absolute bg-white content-stretch flex flex-col h-[231px] items-start left-[20.95px] overflow-clip pt-[10px] px-[10px] rounded-[14.99px] top-0 w-[186px]" data-name="Lesson2Quiz2VariantB">
      <Container15 />
    </div>
  );
}

function Container14() {
  return (
    <div className="h-[231px] relative shrink-0 w-[206.945px]" data-name="Container">
      <div className="bg-clip-padding border-0 border-[transparent] border-solid relative size-full">
        <Paragraph9 />
        <Lesson2Quiz2VariantB />
      </div>
    </div>
  );
}

function Container10() {
  return (
    <div className="content-stretch flex gap-[40px] h-[231px] items-start relative shrink-0 w-full" data-name="Container">
      <Container11 />
      <Container14 />
    </div>
  );
}

function Container9() {
  return (
    <div className="absolute content-stretch flex flex-col gap-[24px] h-[269px] items-start left-0 top-[407px] w-[1280px]" data-name="Container">
      <Paragraph7 />
      <Container10 />
    </div>
  );
}

function Paragraph12() {
  return (
    <div className="h-[14px] relative shrink-0 w-full" data-name="Paragraph">
      <p className="absolute font-['Inter:Regular',sans-serif] font-normal leading-[14px] left-0 not-italic text-[#8e9199] text-[11px] top-[0.5px] tracking-[-0.14px] whitespace-nowrap">3. Где карточка структурирована лучше?</p>
    </div>
  );
}

function Paragraph13() {
  return (
    <div className="absolute h-[21px] left-0 top-[8px] w-[9.297px]" data-name="Paragraph">
      <p className="absolute font-['Inter:Regular',sans-serif] font-normal leading-[21px] left-0 not-italic text-[#364146] text-[14px] top-0 tracking-[-0.17px] whitespace-nowrap">A</p>
    </div>
  );
}

function Paragraph14() {
  return (
    <div className="h-[24px] relative shrink-0 w-full" data-name="Paragraph">
      <p className="absolute font-['Inter:Regular',sans-serif] font-normal leading-[8px] left-0 not-italic text-[#364146] text-[6px] top-0 tracking-[-0.08px] w-[142px]">Это текст карточки без структуры и заголовка описание идет просто текстом без разделения и непонятно где что</p>
    </div>
  );
}

function Container22() {
  return (
    <div className="bg-[#f7f8fc] h-[36px] relative rounded-[6px] shrink-0 w-[166px]" data-name="Container">
      <div className="bg-clip-padding border-0 border-[transparent] border-solid content-stretch flex flex-col items-start pt-[6px] px-[6px] relative size-full">
        <Paragraph14 />
      </div>
    </div>
  );
}

function Container21() {
  return (
    <div className="content-stretch flex flex-col h-[211px] items-start justify-center py-[87.5px] relative shrink-0 w-full" data-name="Container">
      <Container22 />
    </div>
  );
}

function Lesson2Quiz3VariantA() {
  return (
    <div className="absolute bg-white content-stretch flex flex-col h-[231px] items-start left-[21.3px] overflow-clip pt-[10px] px-[10px] rounded-[14.99px] top-0 w-[186px]" data-name="Lesson2Quiz3VariantA">
      <Container21 />
    </div>
  );
}

function Container20() {
  return (
    <div className="h-[231px] relative shrink-0 w-[207.297px]" data-name="Container">
      <div className="bg-clip-padding border-0 border-[transparent] border-solid relative size-full">
        <Paragraph13 />
        <Lesson2Quiz3VariantA />
      </div>
    </div>
  );
}

function Paragraph15() {
  return (
    <div className="absolute h-[21px] left-0 top-[8px] w-[8.945px]" data-name="Paragraph">
      <p className="absolute font-['Inter:Regular',sans-serif] font-normal leading-[21px] left-0 not-italic text-[#364146] text-[14px] top-0 tracking-[-0.17px] whitespace-nowrap">B</p>
    </div>
  );
}

function Paragraph16() {
  return (
    <div className="absolute h-[12px] left-[8px] top-[8px] w-[150px]" data-name="Paragraph">
      <p className="absolute font-['Inter:Regular',sans-serif] font-normal leading-[12px] left-0 not-italic text-[#101828] text-[8px] top-0 tracking-[-0.1px] whitespace-nowrap">UX Дизайн</p>
    </div>
  );
}

function Paragraph17() {
  return (
    <div className="absolute h-[16px] left-[8px] top-[24px] w-[150px]" data-name="Paragraph">
      <p className="absolute font-['Inter:Regular',sans-serif] font-normal leading-[8px] left-0 not-italic text-[#364146] text-[6px] top-0 tracking-[-0.08px] w-[150px]">Изучите основы проектирования пользовательских интерфейсов</p>
    </div>
  );
}

function Paragraph18() {
  return (
    <div className="h-[9px] relative shrink-0 w-full" data-name="Paragraph">
      <p className="-translate-x-1/2 absolute font-['Inter:Regular',sans-serif] font-normal leading-[9px] left-[67.41px] not-italic text-[6px] text-center text-white top-[-0.5px] tracking-[-0.08px] whitespace-nowrap">Подробнее</p>
    </div>
  );
}

function Container26() {
  return (
    <div className="absolute bg-[#3b82f6] content-stretch flex flex-col h-[17px] items-start left-[8px] pt-[4px] px-[8px] rounded-[4px] top-[46px] w-[150px]" data-name="Container">
      <Paragraph18 />
    </div>
  );
}

function Container25() {
  return (
    <div className="bg-[#f7f8fc] h-[71px] relative rounded-[6px] shrink-0 w-[166px]" data-name="Container">
      <div className="bg-clip-padding border-0 border-[transparent] border-solid relative size-full">
        <Paragraph16 />
        <Paragraph17 />
        <Container26 />
      </div>
    </div>
  );
}

function Container24() {
  return (
    <div className="content-stretch flex flex-col h-[211px] items-start justify-center py-[70px] relative shrink-0 w-full" data-name="Container">
      <Container25 />
    </div>
  );
}

function Lesson2Quiz3VariantB() {
  return (
    <div className="absolute bg-white content-stretch flex flex-col h-[231px] items-start left-[20.95px] overflow-clip pt-[10px] px-[10px] rounded-[14.99px] top-0 w-[186px]" data-name="Lesson2Quiz3VariantB">
      <Container24 />
    </div>
  );
}

function Container23() {
  return (
    <div className="h-[231px] relative shrink-0 w-[206.945px]" data-name="Container">
      <div className="bg-clip-padding border-0 border-[transparent] border-solid relative size-full">
        <Paragraph15 />
        <Lesson2Quiz3VariantB />
      </div>
    </div>
  );
}

function Container19() {
  return (
    <div className="content-stretch flex gap-[40px] h-[231px] items-start relative shrink-0 w-full" data-name="Container">
      <Container20 />
      <Container23 />
    </div>
  );
}

function Container18() {
  return (
    <div className="absolute content-stretch flex flex-col gap-[24px] h-[269px] items-start left-0 top-[724px] w-[1280px]" data-name="Container">
      <Paragraph12 />
      <Container19 />
    </div>
  );
}

function Container() {
  return (
    <div className="absolute h-[993px] left-0 top-[129px] w-[1280px]" data-name="Container">
      <Heading1 />
      <Paragraph1 />
      <Container1 />
      <Container9 />
      <Container18 />
    </div>
  );
}

function Heading2() {
  return (
    <div className="absolute h-[27px] left-0 top-0 w-[1280px]" data-name="Heading 3">
      <p className="absolute font-['Inter:Regular',sans-serif] font-normal leading-[27px] left-0 not-italic text-[#101828] text-[18px] top-[0.5px] tracking-[-0.4395px] whitespace-nowrap">Single Choice</p>
    </div>
  );
}

function Paragraph19() {
  return (
    <div className="absolute content-stretch flex h-[15px] items-start left-0 top-[35px] w-[1280px]" data-name="Paragraph">
      <p className="flex-[1_0_0] font-['Inter:Regular',sans-serif] font-normal leading-[15px] min-h-px min-w-px not-italic relative text-[#8e9199] text-[12px] tracking-[-0.15px]">Выберите один правильный ответ</p>
    </div>
  );
}

function Paragraph20() {
  return (
    <div className="h-[14px] relative shrink-0 w-full" data-name="Paragraph">
      <p className="absolute font-['Inter:Regular',sans-serif] font-normal leading-[14px] left-0 not-italic text-[#8e9199] text-[11px] top-[0.5px] tracking-[-0.14px] whitespace-nowrap">4. Что делает кнопка?</p>
    </div>
  );
}

function Paragraph21() {
  return (
    <div className="h-[15px] relative shrink-0 w-[1280px]" data-name="Paragraph">
      <div className="bg-clip-padding border-0 border-[transparent] border-solid relative size-full">
        <p className="absolute font-['Inter:Regular',sans-serif] font-normal leading-[15px] left-0 not-italic text-[#364146] text-[10px] top-[0.5px] tracking-[-0.13px] whitespace-nowrap">• Действие</p>
      </div>
    </div>
  );
}

function Paragraph22() {
  return (
    <div className="h-[15px] relative shrink-0 w-[1280px]" data-name="Paragraph">
      <div className="bg-clip-padding border-0 border-[transparent] border-solid relative size-full">
        <p className="absolute font-['Inter:Regular',sans-serif] font-normal leading-[15px] left-0 not-italic text-[#364146] text-[10px] top-[0.5px] tracking-[-0.13px] whitespace-nowrap">• Украшает экран</p>
      </div>
    </div>
  );
}

function Paragraph23() {
  return (
    <div className="flex-[1_0_0] min-h-px min-w-px relative w-[1280px]" data-name="Paragraph">
      <div className="bg-clip-padding border-0 border-[transparent] border-solid relative size-full">
        <p className="absolute font-['Inter:Regular',sans-serif] font-normal leading-[15px] left-0 not-italic text-[#364146] text-[10px] top-[0.5px] tracking-[-0.13px] whitespace-nowrap">• Ничего</p>
      </div>
    </div>
  );
}

function Container30() {
  return (
    <div className="absolute content-stretch flex flex-col gap-[8px] h-[61px] items-start left-0 top-[247px] w-[1280px]" data-name="Container">
      <Paragraph21 />
      <Paragraph22 />
      <Paragraph23 />
    </div>
  );
}

function Paragraph24() {
  return (
    <div className="h-[15px] relative shrink-0 w-full" data-name="Paragraph">
      <p className="absolute font-['Inter:Regular',sans-serif] font-normal leading-[15px] left-0 not-italic text-[10px] text-white top-[0.5px] tracking-[-0.13px] whitespace-nowrap">Купить</p>
    </div>
  );
}

function Container32() {
  return (
    <div className="bg-[#3b82f6] h-[35px] relative rounded-[6px] shrink-0 w-[65.102px]" data-name="Container">
      <div className="bg-clip-padding border-0 border-[transparent] border-solid content-stretch flex flex-col items-start pt-[10px] px-[16px] relative size-full">
        <Paragraph24 />
      </div>
    </div>
  );
}

function Paragraph25() {
  return (
    <div className="h-[30px] relative shrink-0 w-[20px]" data-name="Paragraph">
      <div className="bg-clip-padding border-0 border-[transparent] border-solid relative size-full">
        <p className="absolute font-['Inter:Regular',sans-serif] font-normal leading-[30px] left-0 not-italic text-[#0a0a0a] text-[20px] top-0 tracking-[-0.4492px] whitespace-nowrap">👆</p>
      </div>
    </div>
  );
}

function Container31() {
  return (
    <div className="content-stretch flex flex-col gap-[8px] h-[211px] items-center justify-center py-[69px] relative shrink-0 w-full" data-name="Container">
      <Container32 />
      <Paragraph25 />
    </div>
  );
}

function Lesson2Quiz() {
  return (
    <div className="absolute bg-white content-stretch flex flex-col h-[231px] items-start left-0 overflow-clip pt-[10px] px-[10px] rounded-[14.99px] top-0 w-[186px]" data-name="Lesson2Quiz4">
      <Container31 />
    </div>
  );
}

function Container29() {
  return (
    <div className="h-[308px] relative shrink-0 w-full" data-name="Container">
      <Container30 />
      <Lesson2Quiz />
    </div>
  );
}

function Container28() {
  return (
    <div className="absolute content-stretch flex flex-col gap-[24px] h-[346px] items-start left-0 top-[90px] w-[1280px]" data-name="Container">
      <Paragraph20 />
      <Container29 />
    </div>
  );
}

function Paragraph26() {
  return (
    <div className="h-[14px] relative shrink-0 w-full" data-name="Paragraph">
      <p className="absolute font-['Inter:Regular',sans-serif] font-normal leading-[14px] left-0 not-italic text-[#8e9199] text-[11px] top-[0.5px] tracking-[-0.14px] whitespace-nowrap">5. Для чего нужно поле ввода?</p>
    </div>
  );
}

function Paragraph27() {
  return (
    <div className="h-[15px] relative shrink-0 w-[1280px]" data-name="Paragraph">
      <div className="bg-clip-padding border-0 border-[transparent] border-solid relative size-full">
        <p className="absolute font-['Inter:Regular',sans-serif] font-normal leading-[15px] left-0 not-italic text-[#364146] text-[10px] top-[0.5px] tracking-[-0.13px] whitespace-nowrap">• Ввод данных</p>
      </div>
    </div>
  );
}

function Paragraph28() {
  return (
    <div className="h-[15px] relative shrink-0 w-[1280px]" data-name="Paragraph">
      <div className="bg-clip-padding border-0 border-[transparent] border-solid relative size-full">
        <p className="absolute font-['Inter:Regular',sans-serif] font-normal leading-[15px] left-0 not-italic text-[#364146] text-[10px] top-[0.5px] tracking-[-0.13px] whitespace-nowrap">• Для красоты</p>
      </div>
    </div>
  );
}

function Paragraph29() {
  return (
    <div className="flex-[1_0_0] min-h-px min-w-px relative w-[1280px]" data-name="Paragraph">
      <div className="bg-clip-padding border-0 border-[transparent] border-solid relative size-full">
        <p className="absolute font-['Inter:Regular',sans-serif] font-normal leading-[15px] left-0 not-italic text-[#364146] text-[10px] top-[0.5px] tracking-[-0.13px] whitespace-nowrap">• Для кнопок</p>
      </div>
    </div>
  );
}

function Container35() {
  return (
    <div className="absolute content-stretch flex flex-col gap-[8px] h-[61px] items-start left-0 top-[247px] w-[1280px]" data-name="Container">
      <Paragraph27 />
      <Paragraph28 />
      <Paragraph29 />
    </div>
  );
}

function Paragraph30() {
  return (
    <div className="h-[10.5px] relative shrink-0 w-[166px]" data-name="Paragraph">
      <div className="bg-clip-padding border-0 border-[transparent] border-solid relative size-full">
        <p className="absolute font-['Inter:Regular',sans-serif] font-normal leading-[10.5px] left-0 not-italic text-[#364146] text-[7px] top-0 tracking-[-0.09px] whitespace-nowrap">Email</p>
      </div>
    </div>
  );
}

function Paragraph31() {
  return (
    <div className="h-[10.5px] relative shrink-0 w-full" data-name="Paragraph">
      <p className="absolute font-['Inter:Regular',sans-serif] font-normal leading-[10.5px] left-0 not-italic text-[#101828] text-[7px] top-0 tracking-[-0.09px] whitespace-nowrap">user@example.com|</p>
    </div>
  );
}

function Container37() {
  return (
    <div className="bg-[#f7f8fc] h-[24.5px] relative rounded-[4px] shrink-0 w-[166px]" data-name="Container">
      <div aria-hidden="true" className="absolute border border-[#3b82f6] border-solid inset-0 pointer-events-none rounded-[4px]" />
      <div className="bg-clip-padding border-0 border-[transparent] border-solid content-stretch flex flex-col items-start pb-px pt-[7px] px-[9px] relative size-full">
        <Paragraph31 />
      </div>
    </div>
  );
}

function Container36() {
  return (
    <div className="content-stretch flex flex-col gap-[8px] h-[211px] items-start justify-center py-[84px] relative shrink-0 w-full" data-name="Container">
      <Paragraph30 />
      <Container37 />
    </div>
  );
}

function Lesson2Quiz1() {
  return (
    <div className="absolute bg-white content-stretch flex flex-col h-[231px] items-start left-0 overflow-clip pt-[10px] px-[10px] rounded-[14.99px] top-0 w-[186px]" data-name="Lesson2Quiz5">
      <Container36 />
    </div>
  );
}

function Container34() {
  return (
    <div className="h-[308px] relative shrink-0 w-full" data-name="Container">
      <Container35 />
      <Lesson2Quiz1 />
    </div>
  );
}

function Container33() {
  return (
    <div className="absolute content-stretch flex flex-col gap-[24px] h-[346px] items-start left-0 top-[484px] w-[1280px]" data-name="Container">
      <Paragraph26 />
      <Container34 />
    </div>
  );
}

function Paragraph32() {
  return (
    <div className="h-[14px] relative shrink-0 w-full" data-name="Paragraph">
      <p className="absolute font-['Inter:Regular',sans-serif] font-normal leading-[14px] left-0 not-italic text-[#8e9199] text-[11px] top-[0.5px] tracking-[-0.14px] whitespace-nowrap">6. Что делает карточка?</p>
    </div>
  );
}

function Paragraph33() {
  return (
    <div className="h-[15px] relative shrink-0 w-[1280px]" data-name="Paragraph">
      <div className="bg-clip-padding border-0 border-[transparent] border-solid relative size-full">
        <p className="absolute font-['Inter:Regular',sans-serif] font-normal leading-[15px] left-0 not-italic text-[#364146] text-[10px] top-[0.5px] tracking-[-0.13px] whitespace-nowrap">• Группирует информацию</p>
      </div>
    </div>
  );
}

function Paragraph34() {
  return (
    <div className="h-[15px] relative shrink-0 w-[1280px]" data-name="Paragraph">
      <div className="bg-clip-padding border-0 border-[transparent] border-solid relative size-full">
        <p className="absolute font-['Inter:Regular',sans-serif] font-normal leading-[15px] left-0 not-italic text-[#364146] text-[10px] top-[0.5px] tracking-[-0.13px] whitespace-nowrap">• Добавляет цвет</p>
      </div>
    </div>
  );
}

function Paragraph35() {
  return (
    <div className="flex-[1_0_0] min-h-px min-w-px relative w-[1280px]" data-name="Paragraph">
      <div className="bg-clip-padding border-0 border-[transparent] border-solid relative size-full">
        <p className="absolute font-['Inter:Regular',sans-serif] font-normal leading-[15px] left-0 not-italic text-[#364146] text-[10px] top-[0.5px] tracking-[-0.13px] whitespace-nowrap">• Для текста</p>
      </div>
    </div>
  );
}

function Container40() {
  return (
    <div className="absolute content-stretch flex flex-col gap-[8px] h-[61px] items-start left-0 top-[247px] w-[1280px]" data-name="Container">
      <Paragraph33 />
      <Paragraph34 />
      <Paragraph35 />
    </div>
  );
}

function ImageWithFallback() {
  return (
    <div className="absolute h-[45px] left-[8px] rounded-[4px] top-[8px] w-[150px]" data-name="ImageWithFallback">
      <div className="absolute inset-0 bg-[#ddd6fe] rounded-[4px]" />
    </div>
  );
}

function Paragraph36() {
  return (
    <div className="absolute h-[12px] left-[8px] top-[57px] w-[150px]" data-name="Paragraph">
      <p className="absolute font-['Inter:Regular',sans-serif] font-normal leading-[12px] left-0 not-italic text-[#101828] text-[8px] top-0 tracking-[-0.1px] whitespace-nowrap">UX Основы</p>
    </div>
  );
}

function Paragraph37() {
  return (
    <div className="absolute content-stretch flex h-[8px] items-start left-[8px] top-[72px] w-[150px]" data-name="Paragraph">
      <p className="flex-[1_0_0] font-['Inter:Regular',sans-serif] font-normal leading-[8px] min-h-px min-w-px not-italic relative text-[#8e9199] text-[6px] tracking-[-0.08px]">Полный курс дизайна</p>
    </div>
  );
}

function Paragraph38() {
  return (
    <div className="h-[9px] relative shrink-0 w-full" data-name="Paragraph">
      <p className="-translate-x-1/2 absolute font-['Inter:Regular',sans-serif] font-normal leading-[9px] left-[67.27px] not-italic text-[6px] text-center text-white top-[-0.5px] tracking-[-0.08px] whitespace-nowrap">Начать</p>
    </div>
  );
}

function Container43() {
  return (
    <div className="absolute bg-[#3b82f6] content-stretch flex flex-col h-[17px] items-start left-[8px] pt-[4px] px-[8px] rounded-[4px] top-[86px] w-[150px]" data-name="Container">
      <Paragraph38 />
    </div>
  );
}

function Container42() {
  return (
    <div className="bg-[#f7f8fc] h-[111px] relative rounded-[6px] shrink-0 w-[166px]" data-name="Container">
      <div className="bg-clip-padding border-0 border-[transparent] border-solid relative size-full">
        <ImageWithFallback />
        <Paragraph36 />
        <Paragraph37 />
        <Container43 />
      </div>
    </div>
  );
}

function Container41() {
  return (
    <div className="content-stretch flex flex-col h-[211px] items-start justify-center py-[50px] relative shrink-0 w-full" data-name="Container">
      <Container42 />
    </div>
  );
}

function Lesson2Quiz2() {
  return (
    <div className="absolute bg-white content-stretch flex flex-col h-[231px] items-start left-0 overflow-clip pt-[10px] px-[10px] rounded-[14.99px] top-0 w-[186px]" data-name="Lesson2Quiz6">
      <Container41 />
    </div>
  );
}

function Container39() {
  return (
    <div className="h-[308px] relative shrink-0 w-full" data-name="Container">
      <Container40 />
      <Lesson2Quiz2 />
    </div>
  );
}

function Container38() {
  return (
    <div className="absolute content-stretch flex flex-col gap-[24px] h-[346px] items-start left-0 top-[878px] w-[1280px]" data-name="Container">
      <Paragraph32 />
      <Container39 />
    </div>
  );
}

function Container27() {
  return (
    <div className="absolute h-[1224px] left-0 top-[1186px] w-[1280px]" data-name="Container">
      <Heading2 />
      <Paragraph19 />
      <Container28 />
      <Container33 />
      <Container38 />
    </div>
  );
}

function Heading3() {
  return (
    <div className="absolute h-[27px] left-0 top-0 w-[1280px]" data-name="Heading 3">
      <p className="absolute font-['Inter:Regular',sans-serif] font-normal leading-[27px] left-0 not-italic text-[#101828] text-[18px] top-[0.5px] tracking-[-0.4395px] whitespace-nowrap">Multi Choice</p>
    </div>
  );
}

function Paragraph39() {
  return (
    <div className="absolute content-stretch flex h-[15px] items-start left-0 top-[35px] w-[1280px]" data-name="Paragraph">
      <p className="flex-[1_0_0] font-['Inter:Regular',sans-serif] font-normal leading-[15px] min-h-px min-w-px not-italic relative text-[#8e9199] text-[12px] tracking-[-0.15px]">Выберите несколько правильных ответов</p>
    </div>
  );
}

function Paragraph40() {
  return (
    <div className="h-[14px] relative shrink-0 w-full" data-name="Paragraph">
      <p className="absolute font-['Inter:Regular',sans-serif] font-normal leading-[14px] left-0 not-italic text-[#8e9199] text-[11px] top-[0.5px] tracking-[-0.14px] whitespace-nowrap">7. Что относится к UI элементам?</p>
    </div>
  );
}

function Paragraph41() {
  return (
    <div className="h-[15px] relative shrink-0 w-[1280px]" data-name="Paragraph">
      <div className="bg-clip-padding border-0 border-[transparent] border-solid relative size-full">
        <p className="absolute font-['Inter:Regular',sans-serif] font-normal leading-[15px] left-0 not-italic text-[#364146] text-[10px] top-[0.5px] tracking-[-0.13px] whitespace-nowrap">• Button</p>
      </div>
    </div>
  );
}

function Paragraph42() {
  return (
    <div className="h-[15px] relative shrink-0 w-[1280px]" data-name="Paragraph">
      <div className="bg-clip-padding border-0 border-[transparent] border-solid relative size-full">
        <p className="absolute font-['Inter:Regular',sans-serif] font-normal leading-[15px] left-0 not-italic text-[#364146] text-[10px] top-[0.5px] tracking-[-0.13px] whitespace-nowrap">• Input</p>
      </div>
    </div>
  );
}

function Paragraph43() {
  return (
    <div className="h-[15px] relative shrink-0 w-[1280px]" data-name="Paragraph">
      <div className="bg-clip-padding border-0 border-[transparent] border-solid relative size-full">
        <p className="absolute font-['Inter:Regular',sans-serif] font-normal leading-[15px] left-0 not-italic text-[#364146] text-[10px] top-[0.5px] tracking-[-0.13px] whitespace-nowrap">• Checkbox</p>
      </div>
    </div>
  );
}

function Paragraph44() {
  return (
    <div className="flex-[1_0_0] min-h-px min-w-px relative w-[1280px]" data-name="Paragraph">
      <div className="bg-clip-padding border-0 border-[transparent] border-solid relative size-full">
        <p className="absolute font-['Inter:Regular',sans-serif] font-normal leading-[15px] left-0 not-italic text-[#364146] text-[10px] top-[0.5px] tracking-[-0.13px] whitespace-nowrap">• Toggle</p>
      </div>
    </div>
  );
}

function Container47() {
  return (
    <div className="absolute content-stretch flex flex-col gap-[8px] h-[84px] items-start left-0 top-[247px] w-[1280px]" data-name="Container">
      <Paragraph41 />
      <Paragraph42 />
      <Paragraph43 />
      <Paragraph44 />
    </div>
  );
}

function Paragraph45() {
  return (
    <div className="h-[9px] relative shrink-0 w-full" data-name="Paragraph">
      <p className="absolute font-['Inter:Regular',sans-serif] font-normal leading-[9px] left-0 not-italic text-[6px] text-white top-[-0.5px] tracking-[-0.08px] whitespace-nowrap">Начать</p>
    </div>
  );
}

function Container49() {
  return (
    <div className="bg-[#3b82f6] h-[17px] relative rounded-[4px] shrink-0 w-[36.445px]" data-name="Container">
      <div className="bg-clip-padding border-0 border-[transparent] border-solid content-stretch flex flex-col items-start pt-[4px] px-[8px] relative size-full">
        <Paragraph45 />
      </div>
    </div>
  );
}

function Paragraph46() {
  return (
    <div className="h-[7.5px] relative shrink-0 w-full" data-name="Paragraph">
      <p className="absolute font-['Inter:Regular',sans-serif] font-normal leading-[7.5px] left-0 not-italic text-[#8e9199] text-[5px] top-[-0.5px] tracking-[-0.07px] whitespace-nowrap">Email</p>
    </div>
  );
}

function Container50() {
  return (
    <div className="bg-[#f7f8fc] h-[15.5px] relative rounded-[4px] shrink-0 w-[26.18px]" data-name="Container">
      <div aria-hidden="true" className="absolute border border-[#d1d3db] border-solid inset-0 pointer-events-none rounded-[4px]" />
      <div className="bg-clip-padding border-0 border-[transparent] border-solid content-stretch flex flex-col items-start pb-px pt-[4px] px-[7px] relative size-full">
        <Paragraph46 />
      </div>
    </div>
  );
}

function Paragraph47() {
  return (
    <div className="h-[10.5px] relative shrink-0 w-[6.172px]" data-name="Paragraph">
      <div className="bg-clip-padding border-0 border-[transparent] border-solid relative size-full">
        <p className="absolute font-['Inter:Regular',sans-serif] font-normal leading-[10.5px] left-0 not-italic text-[#3b82f6] text-[7px] top-0 whitespace-nowrap">✓</p>
      </div>
    </div>
  );
}

function Container52() {
  return (
    <div className="bg-white relative rounded-[2px] shrink-0 size-[10px]" data-name="Container">
      <div aria-hidden="true" className="absolute border border-[#d1d3db] border-solid inset-0 pointer-events-none rounded-[2px]" />
      <div className="bg-clip-padding border-0 border-[transparent] border-solid content-stretch flex items-center justify-center px-[1.914px] py-px relative size-full">
        <Paragraph47 />
      </div>
    </div>
  );
}

function Paragraph48() {
  return (
    <div className="h-[7.5px] relative shrink-0 w-[22.516px]" data-name="Paragraph">
      <div className="bg-clip-padding border-0 border-[transparent] border-solid relative size-full">
        <p className="absolute font-['Inter:Regular',sans-serif] font-normal leading-[7.5px] left-0 not-italic text-[#364146] text-[5px] top-[-0.5px] tracking-[-0.07px] whitespace-nowrap">Согласен</p>
      </div>
    </div>
  );
}

function Container51() {
  return (
    <div className="h-[10px] relative shrink-0 w-[166px]" data-name="Container">
      <div className="bg-clip-padding border-0 border-[transparent] border-solid content-stretch flex gap-[3px] items-center relative size-full">
        <Container52 />
        <Paragraph48 />
      </div>
    </div>
  );
}

function Container55() {
  return <div className="bg-white rounded-[16777200px] shrink-0 size-[6px]" data-name="Container" />;
}

function Container54() {
  return (
    <div className="bg-[#3b82f6] h-[10px] relative rounded-[16777200px] shrink-0 w-[18px]" data-name="Container">
      <div className="bg-clip-padding border-0 border-[transparent] border-solid content-stretch flex items-center justify-end pr-[2px] relative size-full">
        <Container55 />
      </div>
    </div>
  );
}

function Paragraph49() {
  return (
    <div className="h-[7.5px] relative shrink-0 w-[8.68px]" data-name="Paragraph">
      <div className="bg-clip-padding border-0 border-[transparent] border-solid relative size-full">
        <p className="absolute font-['Inter:Regular',sans-serif] font-normal leading-[7.5px] left-0 not-italic text-[#364146] text-[5px] top-[-0.5px] tracking-[-0.07px] whitespace-nowrap">Вкл</p>
      </div>
    </div>
  );
}

function Container53() {
  return (
    <div className="h-[10px] relative shrink-0 w-[166px]" data-name="Container">
      <div className="bg-clip-padding border-0 border-[transparent] border-solid content-stretch flex gap-[3px] items-center relative size-full">
        <Container54 />
        <Paragraph49 />
      </div>
    </div>
  );
}

function ImageWithFallback1() {
  return (
    <div className="h-[20px] relative rounded-[2px] shrink-0 w-full" data-name="ImageWithFallback">
      <div className="absolute inset-0 bg-[#bfdbfe] rounded-[2px]" />
    </div>
  );
}

function Paragraph50() {
  return (
    <div className="h-[6px] relative shrink-0 w-full" data-name="Paragraph">
      <p className="absolute font-['Inter:Regular',sans-serif] font-normal leading-[6px] left-0 not-italic text-[#364146] text-[4px] top-[0.5px] tracking-[-0.06px] whitespace-nowrap">Товар</p>
    </div>
  );
}

function Container56() {
  return (
    <div className="bg-[#f7f8fc] h-[36px] relative rounded-[4px] shrink-0 w-[68px]" data-name="Container">
      <div className="bg-clip-padding border-0 border-[transparent] border-solid content-stretch flex flex-col gap-[2px] items-start pt-[4px] px-[4px] relative size-full">
        <ImageWithFallback1 />
        <Paragraph50 />
      </div>
    </div>
  );
}

function Container48() {
  return (
    <div className="content-stretch flex flex-col gap-[6px] h-[211px] items-start justify-center py-[49.25px] relative shrink-0 w-full" data-name="Container">
      <Container49 />
      <Container50 />
      <Container51 />
      <Container53 />
      <Container56 />
    </div>
  );
}

function Lesson2Quiz3() {
  return (
    <div className="absolute bg-white content-stretch flex flex-col h-[231px] items-start left-0 overflow-clip pt-[10px] px-[10px] rounded-[14.99px] top-0 w-[186px]" data-name="Lesson2Quiz7">
      <Container48 />
    </div>
  );
}

function Container46() {
  return (
    <div className="h-[331px] relative shrink-0 w-full" data-name="Container">
      <Container47 />
      <Lesson2Quiz3 />
    </div>
  );
}

function Container45() {
  return (
    <div className="absolute content-stretch flex flex-col gap-[24px] h-[369px] items-start left-0 top-[90px] w-[1280px]" data-name="Container">
      <Paragraph40 />
      <Container46 />
    </div>
  );
}

function Paragraph51() {
  return (
    <div className="h-[14px] relative shrink-0 w-full" data-name="Paragraph">
      <p className="absolute font-['Inter:Regular',sans-serif] font-normal leading-[14px] left-0 not-italic text-[#8e9199] text-[11px] top-[0.5px] tracking-[-0.14px] whitespace-nowrap">8. Что делает интерфейс удобным?</p>
    </div>
  );
}

function Paragraph52() {
  return (
    <div className="h-[15px] relative shrink-0 w-[1280px]" data-name="Paragraph">
      <div className="bg-clip-padding border-0 border-[transparent] border-solid relative size-full">
        <p className="absolute font-['Inter:Regular',sans-serif] font-normal leading-[15px] left-0 not-italic text-[#364146] text-[10px] top-[0.5px] tracking-[-0.13px] whitespace-nowrap">• Выделенные действия</p>
      </div>
    </div>
  );
}

function Paragraph53() {
  return (
    <div className="h-[15px] relative shrink-0 w-[1280px]" data-name="Paragraph">
      <div className="bg-clip-padding border-0 border-[transparent] border-solid relative size-full">
        <p className="absolute font-['Inter:Regular',sans-serif] font-normal leading-[15px] left-0 not-italic text-[#364146] text-[10px] top-[0.5px] tracking-[-0.13px] whitespace-nowrap">• Понятные поля</p>
      </div>
    </div>
  );
}

function Paragraph54() {
  return (
    <div className="h-[15px] relative shrink-0 w-[1280px]" data-name="Paragraph">
      <div className="bg-clip-padding border-0 border-[transparent] border-solid relative size-full">
        <p className="absolute font-['Inter:Regular',sans-serif] font-normal leading-[15px] left-0 not-italic text-[#364146] text-[10px] top-[0.5px] tracking-[-0.13px] whitespace-nowrap">• Структурированные карточки</p>
      </div>
    </div>
  );
}

function Paragraph55() {
  return (
    <div className="flex-[1_0_0] min-h-px min-w-px relative w-[1280px]" data-name="Paragraph">
      <div className="bg-clip-padding border-0 border-[transparent] border-solid relative size-full">
        <p className="absolute font-['Inter:Regular',sans-serif] font-normal leading-[15px] left-0 not-italic text-[#364146] text-[10px] top-[0.5px] tracking-[-0.13px] whitespace-nowrap">• Много текста</p>
      </div>
    </div>
  );
}

function Container59() {
  return (
    <div className="absolute content-stretch flex flex-col gap-[8px] h-[84px] items-start left-0 top-[247px] w-[1280px]" data-name="Container">
      <Paragraph52 />
      <Paragraph53 />
      <Paragraph54 />
      <Paragraph55 />
    </div>
  );
}

function Paragraph56() {
  return (
    <div className="h-[9px] relative shrink-0 w-full" data-name="Paragraph">
      <p className="absolute font-['Inter:Regular',sans-serif] font-normal leading-[9px] left-0 not-italic text-[6px] text-white top-[-0.5px] tracking-[-0.08px] whitespace-nowrap">Купить</p>
    </div>
  );
}

function Container62() {
  return (
    <div className="bg-[#3b82f6] h-[17px] relative rounded-[4px] shrink-0 w-[35.852px]" data-name="Container">
      <div className="bg-clip-padding border-0 border-[transparent] border-solid content-stretch flex flex-col items-start pt-[4px] px-[8px] relative size-full">
        <Paragraph56 />
      </div>
    </div>
  );
}

function Paragraph57() {
  return (
    <div className="h-[7.5px] relative shrink-0 w-[22.563px]" data-name="Paragraph">
      <div className="bg-clip-padding border-0 border-[transparent] border-solid relative size-full">
        <p className="absolute font-['Inter:Regular',sans-serif] font-normal leading-[7.5px] left-0 not-italic text-[#8e9199] text-[5px] top-[-0.5px] tracking-[-0.07px] whitespace-nowrap">действие</p>
      </div>
    </div>
  );
}

function Container61() {
  return (
    <div className="h-[17px] relative shrink-0 w-[166px]" data-name="Container">
      <div className="bg-clip-padding border-0 border-[transparent] border-solid content-stretch flex gap-[4px] items-center relative size-full">
        <Container62 />
        <Paragraph57 />
      </div>
    </div>
  );
}

function Paragraph58() {
  return (
    <div className="h-[7.5px] relative shrink-0 w-full" data-name="Paragraph">
      <p className="absolute font-['Inter:Regular',sans-serif] font-normal leading-[7.5px] left-0 not-italic text-[#8e9199] text-[5px] top-[-0.5px] tracking-[-0.07px] whitespace-nowrap">Имя</p>
    </div>
  );
}

function Container64() {
  return (
    <div className="bg-[#f7f8fc] h-[15.5px] relative rounded-[3px] shrink-0 w-[24.117px]" data-name="Container">
      <div aria-hidden="true" className="absolute border border-[#d1d3db] border-solid inset-0 pointer-events-none rounded-[3px]" />
      <div className="bg-clip-padding border-0 border-[transparent] border-solid content-stretch flex flex-col items-start pb-px pt-[4px] px-[7px] relative size-full">
        <Paragraph58 />
      </div>
    </div>
  );
}

function Paragraph59() {
  return (
    <div className="h-[7.5px] relative shrink-0 w-[27.445px]" data-name="Paragraph">
      <div className="bg-clip-padding border-0 border-[transparent] border-solid relative size-full">
        <p className="absolute font-['Inter:Regular',sans-serif] font-normal leading-[7.5px] left-0 not-italic text-[#8e9199] text-[5px] top-[-0.5px] tracking-[-0.07px] whitespace-nowrap">понятность</p>
      </div>
    </div>
  );
}

function Container63() {
  return (
    <div className="h-[15.5px] relative shrink-0 w-[166px]" data-name="Container">
      <div className="bg-clip-padding border-0 border-[transparent] border-solid content-stretch flex gap-[4px] items-center relative size-full">
        <Container64 />
        <Paragraph59 />
      </div>
    </div>
  );
}

function ImageWithFallback2() {
  return (
    <div className="h-[18px] relative rounded-[2px] shrink-0 w-full" data-name="ImageWithFallback">
      <div className="absolute inset-0 bg-[#99f6e4] rounded-[2px]" />
    </div>
  );
}

function Paragraph60() {
  return (
    <div className="h-[6px] relative shrink-0 w-full" data-name="Paragraph">
      <p className="absolute font-['Inter:Regular',sans-serif] font-normal leading-[6px] left-0 not-italic text-[#364146] text-[4px] top-[0.5px] tracking-[-0.06px] whitespace-nowrap">Камера</p>
    </div>
  );
}

function Container66() {
  return (
    <div className="bg-[#f7f8fc] h-[31px] relative rounded-[3px] shrink-0 w-[46px]" data-name="Container">
      <div className="bg-clip-padding border-0 border-[transparent] border-solid content-stretch flex flex-col gap-px items-start pt-[3px] px-[3px] relative size-full">
        <ImageWithFallback2 />
        <Paragraph60 />
      </div>
    </div>
  );
}

function Paragraph61() {
  return (
    <div className="h-[7.5px] relative shrink-0 w-[24.516px]" data-name="Paragraph">
      <div className="bg-clip-padding border-0 border-[transparent] border-solid relative size-full">
        <p className="absolute font-['Inter:Regular',sans-serif] font-normal leading-[7.5px] left-0 not-italic text-[#8e9199] text-[5px] top-[-0.5px] tracking-[-0.07px] whitespace-nowrap">структура</p>
      </div>
    </div>
  );
}

function Container65() {
  return (
    <div className="h-[31px] relative shrink-0 w-[166px]" data-name="Container">
      <div className="bg-clip-padding border-0 border-[transparent] border-solid content-stretch flex gap-[4px] items-center relative size-full">
        <Container66 />
        <Paragraph61 />
      </div>
    </div>
  );
}

function Container60() {
  return (
    <div className="content-stretch flex flex-col gap-[6px] h-[211px] items-start justify-center py-[67.75px] relative shrink-0 w-full" data-name="Container">
      <Container61 />
      <Container63 />
      <Container65 />
    </div>
  );
}

function Lesson2Quiz4() {
  return (
    <div className="absolute bg-white content-stretch flex flex-col h-[231px] items-start left-0 overflow-clip pt-[10px] px-[10px] rounded-[14.99px] top-0 w-[186px]" data-name="Lesson2Quiz8">
      <Container60 />
    </div>
  );
}

function Container58() {
  return (
    <div className="h-[331px] relative shrink-0 w-full" data-name="Container">
      <Container59 />
      <Lesson2Quiz4 />
    </div>
  );
}

function Container57() {
  return (
    <div className="absolute content-stretch flex flex-col gap-[24px] h-[369px] items-start left-0 top-[507px] w-[1280px]" data-name="Container">
      <Paragraph51 />
      <Container58 />
    </div>
  );
}

function Paragraph62() {
  return (
    <div className="h-[14px] relative shrink-0 w-full" data-name="Paragraph">
      <p className="absolute font-['Inter:Regular',sans-serif] font-normal leading-[14px] left-0 not-italic text-[#8e9199] text-[11px] top-[0.5px] tracking-[-0.14px] whitespace-nowrap">9. Что ухудшает интерфейс?</p>
    </div>
  );
}

function Paragraph63() {
  return (
    <div className="h-[15px] relative shrink-0 w-[1280px]" data-name="Paragraph">
      <div className="bg-clip-padding border-0 border-[transparent] border-solid relative size-full">
        <p className="absolute font-['Inter:Regular',sans-serif] font-normal leading-[15px] left-0 not-italic text-[#364146] text-[10px] top-[0.5px] tracking-[-0.13px] whitespace-nowrap">• Кнопки разного стиля</p>
      </div>
    </div>
  );
}

function Paragraph64() {
  return (
    <div className="h-[15px] relative shrink-0 w-[1280px]" data-name="Paragraph">
      <div className="bg-clip-padding border-0 border-[transparent] border-solid relative size-full">
        <p className="absolute font-['Inter:Regular',sans-serif] font-normal leading-[15px] left-0 not-italic text-[#364146] text-[10px] top-[0.5px] tracking-[-0.13px] whitespace-nowrap">• Поля без подписей</p>
      </div>
    </div>
  );
}

function Paragraph65() {
  return (
    <div className="h-[15px] relative shrink-0 w-[1280px]" data-name="Paragraph">
      <div className="bg-clip-padding border-0 border-[transparent] border-solid relative size-full">
        <p className="absolute font-['Inter:Regular',sans-serif] font-normal leading-[15px] left-0 not-italic text-[#364146] text-[10px] top-[0.5px] tracking-[-0.13px] whitespace-nowrap">• Нет структуры</p>
      </div>
    </div>
  );
}

function Paragraph66() {
  return (
    <div className="flex-[1_0_0] min-h-px min-w-px relative w-[1280px]" data-name="Paragraph">
      <div className="bg-clip-padding border-0 border-[transparent] border-solid relative size-full">
        <p className="absolute font-['Inter:Regular',sans-serif] font-normal leading-[15px] left-0 not-italic text-[#364146] text-[10px] top-[0.5px] tracking-[-0.13px] whitespace-nowrap">• Понятные действия</p>
      </div>
    </div>
  );
}

function Container69() {
  return (
    <div className="absolute content-stretch flex flex-col gap-[8px] h-[84px] items-start left-0 top-[247px] w-[1280px]" data-name="Container">
      <Paragraph63 />
      <Paragraph64 />
      <Paragraph65 />
      <Paragraph66 />
    </div>
  );
}

function Paragraph67() {
  return (
    <div className="h-[21px] relative shrink-0 w-[166px]" data-name="Paragraph">
      <div className="bg-clip-padding border-0 border-[transparent] border-solid relative size-full">
        <p className="absolute font-['Inter:Regular',sans-serif] font-normal leading-[21px] left-0 not-italic text-[#0a0a0a] text-[14px] top-0 tracking-[-0.1504px] whitespace-nowrap">⚠️</p>
      </div>
    </div>
  );
}

function Paragraph68() {
  return (
    <div className="h-[7.5px] relative shrink-0 w-full" data-name="Paragraph">
      <p className="absolute font-['Inter:Regular',sans-serif] font-normal leading-[7.5px] left-0 not-italic text-[5px] text-white top-[-0.5px] tracking-[-0.07px] whitespace-nowrap">A</p>
    </div>
  );
}

function Container72() {
  return (
    <div className="bg-[#3b82f6] h-[16px] relative rounded-[3px] shrink-0 w-[15.313px]" data-name="Container">
      <div className="bg-clip-padding border-0 border-[transparent] border-solid content-stretch flex flex-col items-start pt-[4px] px-[6px] relative size-full">
        <Paragraph68 />
      </div>
    </div>
  );
}

function Paragraph69() {
  return (
    <div className="h-[9px] relative shrink-0 w-full" data-name="Paragraph">
      <p className="absolute font-['Inter:Regular',sans-serif] font-normal leading-[9px] left-0 not-italic text-[6px] text-white top-[-0.5px] tracking-[-0.08px] whitespace-nowrap">B</p>
    </div>
  );
}

function Container73() {
  return (
    <div className="bg-[#22c55e] h-[16px] relative rounded-[5px] shrink-0 w-[19.828px]" data-name="Container">
      <div className="bg-clip-padding border-0 border-[transparent] border-solid content-stretch flex flex-col items-start pt-[3px] px-[8px] relative size-full">
        <Paragraph69 />
      </div>
    </div>
  );
}

function Paragraph70() {
  return (
    <div className="h-[6px] relative shrink-0 w-full" data-name="Paragraph">
      <p className="absolute font-['Inter:Regular',sans-serif] font-normal leading-[6px] left-0 not-italic text-[4px] text-white top-[0.5px] tracking-[-0.06px] whitespace-nowrap">C</p>
    </div>
  );
}

function Container74() {
  return (
    <div className="bg-[#8b5cf6] h-[16px] relative rounded-[4px] shrink-0 w-[12.852px]" data-name="Container">
      <div className="bg-clip-padding border-0 border-[transparent] border-solid content-stretch flex flex-col items-start pt-[5px] px-[5px] relative size-full">
        <Paragraph70 />
      </div>
    </div>
  );
}

function Container71() {
  return (
    <div className="h-[16px] relative shrink-0 w-[166px]" data-name="Container">
      <div className="bg-clip-padding border-0 border-[transparent] border-solid content-stretch flex gap-[3px] items-start relative size-full">
        <Container72 />
        <Container73 />
        <Container74 />
      </div>
    </div>
  );
}

function Container75() {
  return <div className="bg-[#f7f8fc] h-[8px] rounded-[4px] shrink-0 w-[166px]" data-name="Container" />;
}

function Container70() {
  return (
    <div className="content-stretch flex flex-col gap-[4px] h-[211px] items-start justify-center py-[79px] relative shrink-0 w-full" data-name="Container">
      <Paragraph67 />
      <Container71 />
      <Container75 />
    </div>
  );
}

function Lesson2Quiz5() {
  return (
    <div className="absolute bg-white content-stretch flex flex-col h-[231px] items-start left-0 overflow-clip pt-[10px] px-[10px] rounded-[14.99px] top-0 w-[186px]" data-name="Lesson2Quiz9">
      <Container70 />
    </div>
  );
}

function Container68() {
  return (
    <div className="h-[331px] relative shrink-0 w-full" data-name="Container">
      <Container69 />
      <Lesson2Quiz5 />
    </div>
  );
}

function Container67() {
  return (
    <div className="absolute content-stretch flex flex-col gap-[24px] h-[369px] items-start left-0 top-[924px] w-[1280px]" data-name="Container">
      <Paragraph62 />
      <Container68 />
    </div>
  );
}

function Container44() {
  return (
    <div className="absolute h-[1293px] left-0 top-[2474px] w-[1280px]" data-name="Container">
      <Heading3 />
      <Paragraph39 />
      <Container45 />
      <Container57 />
      <Container67 />
    </div>
  );
}

function Heading4() {
  return (
    <div className="absolute h-[27px] left-0 top-0 w-[1280px]" data-name="Heading 3">
      <p className="absolute font-['Inter:Regular',sans-serif] font-normal leading-[27px] left-0 not-italic text-[#101828] text-[18px] top-[0.5px] tracking-[-0.4395px] whitespace-nowrap">Match / Connect</p>
    </div>
  );
}

function Paragraph71() {
  return (
    <div className="absolute content-stretch flex h-[15px] items-start left-0 top-[35px] w-[1280px]" data-name="Paragraph">
      <p className="flex-[1_0_0] font-['Inter:Regular',sans-serif] font-normal leading-[15px] min-h-px min-w-px not-italic relative text-[#8e9199] text-[12px] tracking-[-0.15px]">Соедините элементы с описаниями</p>
    </div>
  );
}

function Paragraph72() {
  return (
    <div className="h-[14px] relative shrink-0 w-full" data-name="Paragraph">
      <p className="absolute font-['Inter:Regular',sans-serif] font-normal leading-[14px] left-0 not-italic text-[#8e9199] text-[11px] top-[0.5px] tracking-[-0.14px] whitespace-nowrap">10. Соедините элемент и роль</p>
    </div>
  );
}

function Paragraph73() {
  return (
    <div className="h-[10.5px] relative shrink-0 w-full" data-name="Paragraph">
      <p className="absolute font-['Inter:Regular',sans-serif] font-normal leading-[10.5px] left-0 not-italic text-[#f7f8fc] text-[7px] top-0 tracking-[-0.09px] whitespace-nowrap">Начать</p>
    </div>
  );
}

function Container79() {
  return (
    <div className="bg-[#3b82f6] h-[22.5px] relative rounded-[4px] shrink-0 w-[47.875px]" data-name="Container">
      <div className="bg-clip-padding border-0 border-[transparent] border-solid content-stretch flex flex-col items-start pt-[6px] px-[12px] relative size-full">
        <Paragraph73 />
      </div>
    </div>
  );
}

function Lesson2Quiz10Card() {
  return (
    <div className="bg-[rgba(255,255,255,0)] h-[80px] relative rounded-[8px] shrink-0 w-[130px]" data-name="Lesson2Quiz10Card1">
      <div className="bg-clip-padding border-0 border-[transparent] border-solid content-stretch flex items-center justify-center px-[41.063px] relative size-full">
        <Container79 />
      </div>
    </div>
  );
}

function Paragraph74() {
  return (
    <div className="h-[9px] relative shrink-0 w-full" data-name="Paragraph">
      <p className="absolute font-['Inter:Regular',sans-serif] font-normal leading-[9px] left-0 not-italic text-[#8e9199] text-[6px] top-[-0.5px] tracking-[-0.08px] whitespace-nowrap">Ваше имя</p>
    </div>
  );
}

function Container80() {
  return (
    <div className="bg-[#f7f8fc] h-[19px] relative rounded-[4px] shrink-0 w-[46.18px]" data-name="Container">
      <div aria-hidden="true" className="absolute border border-[#d1d3db] border-solid inset-0 pointer-events-none rounded-[4px]" />
      <div className="bg-clip-padding border-0 border-[transparent] border-solid content-stretch flex flex-col items-start pb-px pt-[5px] px-[9px] relative size-full">
        <Paragraph74 />
      </div>
    </div>
  );
}

function Lesson2Quiz10Card1() {
  return (
    <div className="bg-[rgba(255,255,255,0)] h-[80px] relative rounded-[8px] shrink-0 w-[130px]" data-name="Lesson2Quiz10Card2">
      <div className="bg-clip-padding border-0 border-[transparent] border-solid content-stretch flex items-center justify-center pl-[41.906px] pr-[41.914px] relative size-full">
        <Container80 />
      </div>
    </div>
  );
}

function Paragraph75() {
  return (
    <div className="h-[12px] relative shrink-0 w-[7.047px]" data-name="Paragraph">
      <div className="bg-clip-padding border-0 border-[transparent] border-solid relative size-full">
        <p className="absolute font-['Inter:Regular',sans-serif] font-normal leading-[12px] left-0 not-italic text-[#d1d3db] text-[8px] top-0 whitespace-nowrap">✓</p>
      </div>
    </div>
  );
}

function Container82() {
  return (
    <div className="bg-[rgba(255,255,255,0)] relative rounded-[2px] shrink-0 size-[12px]" data-name="Container">
      <div aria-hidden="true" className="absolute border border-[#d1d3db] border-solid inset-0 pointer-events-none rounded-[2px]" />
      <div className="bg-clip-padding border-0 border-[transparent] border-solid content-stretch flex items-center justify-center px-[2.477px] py-px relative size-full">
        <Paragraph75 />
      </div>
    </div>
  );
}

function Paragraph76() {
  return (
    <div className="flex-[1_0_0] h-[9px] min-h-px min-w-px relative" data-name="Paragraph">
      <div className="bg-clip-padding border-0 border-[transparent] border-solid relative size-full">
        <p className="absolute font-['Inter:Regular',sans-serif] font-normal leading-[9px] left-0 not-italic text-[#f7f8fc] text-[6px] top-[-0.5px] tracking-[-0.08px] whitespace-nowrap">Выбрать</p>
      </div>
    </div>
  );
}

function Container81() {
  return (
    <div className="h-[12px] relative shrink-0 w-[39.695px]" data-name="Container">
      <div className="bg-clip-padding border-0 border-[transparent] border-solid content-stretch flex gap-[3px] items-center relative size-full">
        <Container82 />
        <Paragraph76 />
      </div>
    </div>
  );
}

function Lesson2Quiz10Card2() {
  return (
    <div className="bg-[rgba(255,255,255,0)] h-[80px] relative rounded-[8px] shrink-0 w-[130px]" data-name="Lesson2Quiz10Card3">
      <div className="bg-clip-padding border-0 border-[transparent] border-solid content-stretch flex items-center justify-center pl-[45.148px] pr-[45.156px] relative size-full">
        <Container81 />
      </div>
    </div>
  );
}

function Container78() {
  return (
    <div className="content-stretch flex gap-[24px] h-[80px] items-start relative shrink-0 w-full" data-name="Container">
      <Lesson2Quiz10Card />
      <Lesson2Quiz10Card1 />
      <Lesson2Quiz10Card2 />
    </div>
  );
}

function Paragraph77() {
  return (
    <div className="h-[15px] relative shrink-0 w-[1280px]" data-name="Paragraph">
      <div className="bg-clip-padding border-0 border-[transparent] border-solid relative size-full">
        <p className="absolute font-['Inter:Regular',sans-serif] font-normal leading-[15px] left-0 not-italic text-[#364146] text-[10px] top-[0.5px] tracking-[-0.13px] whitespace-nowrap">• Действие</p>
      </div>
    </div>
  );
}

function Paragraph78() {
  return (
    <div className="h-[15px] relative shrink-0 w-[1280px]" data-name="Paragraph">
      <div className="bg-clip-padding border-0 border-[transparent] border-solid relative size-full">
        <p className="absolute font-['Inter:Regular',sans-serif] font-normal leading-[15px] left-0 not-italic text-[#364146] text-[10px] top-[0.5px] tracking-[-0.13px] whitespace-nowrap">• Ввод данных</p>
      </div>
    </div>
  );
}

function Paragraph79() {
  return (
    <div className="flex-[1_0_0] min-h-px min-w-px relative w-[1280px]" data-name="Paragraph">
      <div className="bg-clip-padding border-0 border-[transparent] border-solid relative size-full">
        <p className="absolute font-['Inter:Regular',sans-serif] font-normal leading-[15px] left-0 not-italic text-[#364146] text-[10px] top-[0.5px] tracking-[-0.13px] whitespace-nowrap">• Выбор</p>
      </div>
    </div>
  );
}

function Container83() {
  return (
    <div className="content-stretch flex flex-col gap-[8px] h-[61px] items-start relative shrink-0 w-full" data-name="Container">
      <Paragraph77 />
      <Paragraph78 />
      <Paragraph79 />
    </div>
  );
}

function Container77() {
  return (
    <div className="absolute content-stretch flex flex-col gap-[24px] h-[203px] items-start left-0 top-[90px] w-[1280px]" data-name="Container">
      <Paragraph72 />
      <Container78 />
      <Container83 />
    </div>
  );
}

function Paragraph80() {
  return (
    <div className="h-[14px] relative shrink-0 w-full" data-name="Paragraph">
      <p className="absolute font-['Inter:Regular',sans-serif] font-normal leading-[14px] left-0 not-italic text-[#8e9199] text-[11px] top-[0.5px] tracking-[-0.14px] whitespace-nowrap">11. Соедините элемент и пример</p>
    </div>
  );
}

function Paragraph81() {
  return (
    <div className="h-[9px] relative shrink-0 w-full" data-name="Paragraph">
      <p className="absolute font-['Inter:Regular',sans-serif] font-normal leading-[9px] left-0 not-italic text-[#f7f8fc] text-[6px] top-[-0.5px] tracking-[-0.08px] whitespace-nowrap">Начать</p>
    </div>
  );
}

function Container87() {
  return (
    <div className="bg-[#3b82f6] h-[19px] relative rounded-[4px] shrink-0 w-[40.445px]" data-name="Container">
      <div className="bg-clip-padding border-0 border-[transparent] border-solid content-stretch flex flex-col items-start pt-[5px] px-[10px] relative size-full">
        <Paragraph81 />
      </div>
    </div>
  );
}

function Paragraph82() {
  return (
    <div className="h-[9px] relative shrink-0 w-full" data-name="Paragraph">
      <p className="absolute font-['Inter:Regular',sans-serif] font-normal leading-[9px] left-0 not-italic text-[#f7f8fc] text-[6px] top-[-0.5px] tracking-[-0.08px] whitespace-nowrap">Купить</p>
    </div>
  );
}

function Container88() {
  return (
    <div className="bg-[#3b82f6] flex-[1_0_0] min-h-px min-w-px relative rounded-[4px] w-[40.445px]" data-name="Container">
      <div className="bg-clip-padding border-0 border-[transparent] border-solid content-stretch flex flex-col items-start pt-[5px] px-[10px] relative size-full">
        <Paragraph82 />
      </div>
    </div>
  );
}

function Container86() {
  return (
    <div className="h-[40px] relative shrink-0 w-[40.445px]" data-name="Container">
      <div className="bg-clip-padding border-0 border-[transparent] border-solid content-stretch flex flex-col gap-[2px] items-start relative size-full">
        <Container87 />
        <Container88 />
      </div>
    </div>
  );
}

function Lesson2Quiz11Card() {
  return (
    <div className="bg-[rgba(255,255,255,0)] h-[80px] relative rounded-[8px] shrink-0 w-[130px]" data-name="Lesson2Quiz11Card1">
      <div className="bg-clip-padding border-0 border-[transparent] border-solid content-stretch flex items-center justify-center pl-[44.773px] pr-[44.781px] relative size-full">
        <Container86 />
      </div>
    </div>
  );
}

function Paragraph83() {
  return (
    <div className="h-[7.5px] relative shrink-0 w-full" data-name="Paragraph">
      <p className="absolute font-['Inter:Regular',sans-serif] font-normal leading-[7.5px] left-0 not-italic text-[#8e9199] text-[5px] top-[-0.5px] tracking-[-0.07px] whitespace-nowrap">Email</p>
    </div>
  );
}

function Container90() {
  return (
    <div className="bg-[#f7f8fc] h-[15px] relative rounded-[4px] shrink-0 w-full" data-name="Container">
      <div aria-hidden="true" className="absolute border border-[#d1d3db] border-solid inset-0 pointer-events-none rounded-[4px]" />
      <div className="bg-clip-padding border-0 border-[transparent] border-solid content-stretch flex flex-col items-start pb-px pt-[4px] px-[7px] relative size-full">
        <Paragraph83 />
      </div>
    </div>
  );
}

function Paragraph84() {
  return (
    <div className="h-[7.5px] relative shrink-0 w-full" data-name="Paragraph">
      <p className="absolute font-['Inter:Regular',sans-serif] font-normal leading-[7.5px] left-0 not-italic text-[#8e9199] text-[5px] top-[-0.5px] tracking-[-0.07px] whitespace-nowrap">Имя</p>
    </div>
  );
}

function Container91() {
  return (
    <div className="bg-[#f7f8fc] flex-[1_0_0] min-h-px min-w-px relative rounded-[4px] w-full" data-name="Container">
      <div aria-hidden="true" className="absolute border border-[#d1d3db] border-solid inset-0 pointer-events-none rounded-[4px]" />
      <div className="bg-clip-padding border-0 border-[transparent] border-solid content-stretch flex flex-col items-start pb-px pt-[4px] px-[7px] relative size-full">
        <Paragraph84 />
      </div>
    </div>
  );
}

function Container89() {
  return (
    <div className="h-[34px] relative shrink-0 w-[68px]" data-name="Container">
      <div className="bg-clip-padding border-0 border-[transparent] border-solid content-stretch flex flex-col gap-[3px] items-start relative size-full">
        <Container90 />
        <Container91 />
      </div>
    </div>
  );
}

function Lesson2Quiz11Card1() {
  return (
    <div className="bg-[rgba(255,255,255,0)] h-[80px] relative rounded-[8px] shrink-0 w-[130px]" data-name="Lesson2Quiz11Card2">
      <div className="bg-clip-padding border-0 border-[transparent] border-solid content-stretch flex items-center justify-center pl-[51.906px] pr-[51.914px] relative size-full">
        <Container89 />
      </div>
    </div>
  );
}

function ImageWithFallback3() {
  return (
    <div className="absolute h-[35px] left-[5px] rounded-[3px] top-[5px] w-[100px]" data-name="ImageWithFallback">
      <div className="absolute inset-0 bg-[#fde68a] rounded-[3px]" />
    </div>
  );
}

function Paragraph85() {
  return (
    <div className="absolute h-[9px] left-[5px] top-[43px] w-[100px]" data-name="Paragraph">
      <p className="absolute font-['Inter:Regular',sans-serif] font-normal leading-[9px] left-0 not-italic text-[#364146] text-[6px] top-[-0.5px] tracking-[-0.08px] whitespace-nowrap">Наушники</p>
    </div>
  );
}

function Paragraph86() {
  return (
    <div className="absolute h-[7.5px] left-[5px] top-[52px] w-[100px]" data-name="Paragraph">
      <p className="absolute font-['Inter:Regular',sans-serif] font-normal leading-[7.5px] left-0 not-italic text-[#8e9199] text-[5px] top-[-0.5px] tracking-[-0.07px] whitespace-nowrap">4 990 ₽</p>
    </div>
  );
}

function Container92() {
  return (
    <div className="bg-[#f7f8fc] h-[64.5px] relative rounded-[4px] shrink-0 w-[110px]" data-name="Container">
      <div className="bg-clip-padding border-0 border-[transparent] border-solid relative size-full">
        <ImageWithFallback3 />
        <Paragraph85 />
        <Paragraph86 />
      </div>
    </div>
  );
}

function Lesson2Quiz11Card2() {
  return (
    <div className="bg-[rgba(255,255,255,0)] h-[80px] relative rounded-[8px] shrink-0 w-[130px]" data-name="Lesson2Quiz11Card3">
      <div className="bg-clip-padding border-0 border-[transparent] border-solid content-stretch flex items-center justify-center px-[10px] relative size-full">
        <Container92 />
      </div>
    </div>
  );
}

function Container85() {
  return (
    <div className="content-stretch flex gap-[24px] h-[80px] items-start relative shrink-0 w-full" data-name="Container">
      <Lesson2Quiz11Card />
      <Lesson2Quiz11Card1 />
      <Lesson2Quiz11Card2 />
    </div>
  );
}

function Paragraph87() {
  return (
    <div className="h-[15px] relative shrink-0 w-[1280px]" data-name="Paragraph">
      <div className="bg-clip-padding border-0 border-[transparent] border-solid relative size-full">
        <p className="absolute font-['Inter:Regular',sans-serif] font-normal leading-[15px] left-0 not-italic text-[#364146] text-[10px] top-[0.5px] tracking-[-0.13px] whitespace-nowrap">• Start / Buy</p>
      </div>
    </div>
  );
}

function Paragraph88() {
  return (
    <div className="h-[15px] relative shrink-0 w-[1280px]" data-name="Paragraph">
      <div className="bg-clip-padding border-0 border-[transparent] border-solid relative size-full">
        <p className="absolute font-['Inter:Regular',sans-serif] font-normal leading-[15px] left-0 not-italic text-[#364146] text-[10px] top-[0.5px] tracking-[-0.13px] whitespace-nowrap">• Email / Name</p>
      </div>
    </div>
  );
}

function Paragraph89() {
  return (
    <div className="flex-[1_0_0] min-h-px min-w-px relative w-[1280px]" data-name="Paragraph">
      <div className="bg-clip-padding border-0 border-[transparent] border-solid relative size-full">
        <p className="absolute font-['Inter:Regular',sans-serif] font-normal leading-[15px] left-0 not-italic text-[#364146] text-[10px] top-[0.5px] tracking-[-0.13px] whitespace-nowrap">• Карточка товара</p>
      </div>
    </div>
  );
}

function Container93() {
  return (
    <div className="content-stretch flex flex-col gap-[8px] h-[61px] items-start relative shrink-0 w-full" data-name="Container">
      <Paragraph87 />
      <Paragraph88 />
      <Paragraph89 />
    </div>
  );
}

function Container84() {
  return (
    <div className="absolute content-stretch flex flex-col gap-[24px] h-[203px] items-start left-0 top-[341px] w-[1280px]" data-name="Container">
      <Paragraph80 />
      <Container85 />
      <Container93 />
    </div>
  );
}

function Paragraph90() {
  return (
    <div className="h-[14px] relative shrink-0 w-full" data-name="Paragraph">
      <p className="absolute font-['Inter:Regular',sans-serif] font-normal leading-[14px] left-0 not-italic text-[#8e9199] text-[11px] top-[0.5px] tracking-[-0.14px] whitespace-nowrap">12. Соедините проблему и эффект</p>
    </div>
  );
}

function Paragraph91() {
  return (
    <div className="h-[7.5px] relative shrink-0 w-full" data-name="Paragraph">
      <p className="absolute font-['Inter:Regular',sans-serif] font-normal leading-[7.5px] left-0 not-italic text-[#a0a0a0] text-[5px] top-[-0.5px] tracking-[-0.07px] whitespace-nowrap">???</p>
    </div>
  );
}

function Container96() {
  return (
    <div className="bg-[#e8e8e8] h-[13.5px] relative rounded-[3px] shrink-0 w-[19.398px]" data-name="Container">
      <div className="bg-clip-padding border-0 border-[transparent] border-solid content-stretch flex flex-col items-start pt-[3px] px-[6px] relative size-full">
        <Paragraph91 />
      </div>
    </div>
  );
}

function Lesson2Quiz12Card() {
  return (
    <div className="bg-[rgba(255,255,255,0)] h-[80px] relative rounded-[8px] shrink-0 w-[130px]" data-name="Lesson2Quiz12Card1">
      <div className="bg-clip-padding border-0 border-[transparent] border-solid content-stretch flex items-center justify-center pl-[55.297px] pr-[55.305px] relative size-full">
        <Container96 />
      </div>
    </div>
  );
}

function Container97() {
  return (
    <div className="bg-[#f7f8fc] h-[8px] relative rounded-[3px] shrink-0 w-[14px]" data-name="Container">
      <div aria-hidden="true" className="absolute border border-[#d1d3db] border-solid inset-0 pointer-events-none rounded-[3px]" />
    </div>
  );
}

function Lesson2Quiz12Card1() {
  return (
    <div className="bg-[rgba(255,255,255,0)] h-[80px] relative rounded-[8px] shrink-0 w-[130px]" data-name="Lesson2Quiz12Card2">
      <div className="bg-clip-padding border-0 border-[transparent] border-solid content-stretch flex items-center justify-center px-[58px] relative size-full">
        <Container97 />
      </div>
    </div>
  );
}

function Paragraph92() {
  return (
    <div className="content-stretch flex h-[6px] items-start relative shrink-0 w-full" data-name="Paragraph">
      <p className="font-['Inter:Regular',sans-serif] font-normal leading-[6px] not-italic relative shrink-0 text-[#364146] text-[5px] tracking-[-0.07px] whitespace-nowrap">текст текст текст текст текст без структуры</p>
    </div>
  );
}

function Container98() {
  return (
    <div className="bg-[#f7f8fc] h-[12px] relative rounded-[3px] shrink-0 w-[112.914px]" data-name="Container">
      <div className="bg-clip-padding border-0 border-[transparent] border-solid content-stretch flex flex-col items-start pt-[3px] px-[3px] relative size-full">
        <Paragraph92 />
      </div>
    </div>
  );
}

function Lesson2Quiz12Card2() {
  return (
    <div className="bg-[rgba(255,255,255,0)] h-[80px] relative rounded-[8px] shrink-0 w-[130px]" data-name="Lesson2Quiz12Card3">
      <div className="bg-clip-padding border-0 border-[transparent] border-solid content-stretch flex items-center justify-center pl-[8.539px] pr-[8.547px] relative size-full">
        <Container98 />
      </div>
    </div>
  );
}

function Container95() {
  return (
    <div className="content-stretch flex gap-[24px] h-[80px] items-start relative shrink-0 w-full" data-name="Container">
      <Lesson2Quiz12Card />
      <Lesson2Quiz12Card1 />
      <Lesson2Quiz12Card2 />
    </div>
  );
}

function Paragraph93() {
  return (
    <div className="h-[15px] relative shrink-0 w-[1280px]" data-name="Paragraph">
      <div className="bg-clip-padding border-0 border-[transparent] border-solid relative size-full">
        <p className="absolute font-['Inter:Regular',sans-serif] font-normal leading-[15px] left-0 not-italic text-[#364146] text-[10px] top-[0.5px] tracking-[-0.13px] whitespace-nowrap">• Пользователь не понимает действие</p>
      </div>
    </div>
  );
}

function Paragraph94() {
  return (
    <div className="h-[15px] relative shrink-0 w-[1280px]" data-name="Paragraph">
      <div className="bg-clip-padding border-0 border-[transparent] border-solid relative size-full">
        <p className="absolute font-['Inter:Regular',sans-serif] font-normal leading-[15px] left-0 not-italic text-[#364146] text-[10px] top-[0.5px] tracking-[-0.13px] whitespace-nowrap">• Ошибки при вводе</p>
      </div>
    </div>
  );
}

function Paragraph95() {
  return (
    <div className="flex-[1_0_0] min-h-px min-w-px relative w-[1280px]" data-name="Paragraph">
      <div className="bg-clip-padding border-0 border-[transparent] border-solid relative size-full">
        <p className="absolute font-['Inter:Regular',sans-serif] font-normal leading-[15px] left-0 not-italic text-[#364146] text-[10px] top-[0.5px] tracking-[-0.13px] whitespace-nowrap">• Сложно воспринимать экран</p>
      </div>
    </div>
  );
}

function Container99() {
  return (
    <div className="content-stretch flex flex-col gap-[8px] h-[61px] items-start relative shrink-0 w-full" data-name="Container">
      <Paragraph93 />
      <Paragraph94 />
      <Paragraph95 />
    </div>
  );
}

function Container94() {
  return (
    <div className="absolute content-stretch flex flex-col gap-[24px] h-[203px] items-start left-0 top-[592px] w-[1280px]" data-name="Container">
      <Paragraph90 />
      <Container95 />
      <Container99 />
    </div>
  );
}

function Container76() {
  return (
    <div className="absolute h-[795px] left-0 top-[3831px] w-[448px]" data-name="Container">
      <Heading4 />
      <Paragraph71 />
      <Container77 />
      <Container84 />
      <Container94 />
    </div>
  );
}

// Named exports for LessonQuizPage (quiz_ui_elements — Basic UI Elements)
// ─────────────────────────────────────────────────────────────────────────────
export function CQUiElemCompare1A() {
  return <div style={{ position: "relative", width: 207, height: 231 }}><Lesson2Quiz1VariantA /></div>;
}
export function CQUiElemCompare1B() {
  return <div style={{ position: "relative", width: 207, height: 231 }}><Lesson2Quiz1VariantB /></div>;
}
export function CQUiElemCompare2A() {
  return <div style={{ position: "relative", width: 207, height: 231 }}><Lesson2Quiz2VariantA /></div>;
}
export function CQUiElemCompare2B() {
  return <div style={{ position: "relative", width: 207, height: 231 }}><Lesson2Quiz2VariantB /></div>;
}
export function CQUiElemCompare3A() {
  return <div style={{ position: "relative", width: 207, height: 231 }}><Lesson2Quiz3VariantA /></div>;
}
export function CQUiElemCompare3B() {
  return <div style={{ position: "relative", width: 207, height: 231 }}><Lesson2Quiz3VariantB /></div>;
}
export function CQUiElemSingle1() {
  return <div style={{ height: 231, width: 186, overflow: "hidden", borderRadius: 15 }}><Lesson2Quiz /></div>;
}
export function CQUiElemSingle2() {
  return <div style={{ height: 231, width: 186, overflow: "hidden", borderRadius: 15 }}><Lesson2Quiz1 /></div>;
}
export function CQUiElemSingle3() {
  return <div style={{ height: 231, width: 186, overflow: "hidden", borderRadius: 15 }}><Lesson2Quiz2 /></div>;
}
export function CQUiElemMulti1() {
  return <div style={{ height: 231, width: 186, overflow: "hidden", borderRadius: 15 }}><Lesson2Quiz3 /></div>;
}
export function CQUiElemMulti2() {
  return <div style={{ height: 231, width: 186, overflow: "hidden", borderRadius: 15 }}><Lesson2Quiz4 /></div>;
}
export function CQUiElemMulti3() {
  return <div style={{ height: 231, width: 186, overflow: "hidden", borderRadius: 15 }}><Lesson2Quiz5 /></div>;
}
// Matching Q10: button (кнопка) + menu (поле ввода) — input/карточка uses text fallback
export function CQUiElemConn1A() { return <Lesson2Quiz10Card />; }
export function CQUiElemConn1B() { return <Lesson2Quiz10Card1 />; }
// Matching Q11: all 3 have visual nodes
export function CQUiElemConn2A() { return <Lesson2Quiz11Card />; }
export function CQUiElemConn2B() { return <Lesson2Quiz11Card1 />; }
export function CQUiElemConn2C() { return <Lesson2Quiz11Card2 />; }
// Matching Q12: all use text fallback (abstract shapes, not visually clear)

export default function Component2Ui() {
  return (
    <div className="relative size-full" data-name="Урок 2 — Основные UI элементы">
      <Heading />
      <Paragraph />
      <Container />
      <Container27 />
      <Container44 />
      <Container76 />
    </div>
  );
}