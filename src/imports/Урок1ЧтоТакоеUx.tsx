import imgImageWithFallback from "figma:asset/d28ce6c65a3c346890a234c3e400a4e68b8a864e.png";
import imgImageWithFallback1 from "figma:asset/727666792176bf1b362d5ce44fa857b038c1ca55.png";
import imgImageWithFallback2 from "figma:asset/55a747d154529f116052caa436f2342df0989c8b.png";

function Paragraph() {
  return (
    <div className="absolute h-[19.5px] left-0 top-[36.5px] w-[8.633px]" data-name="Paragraph">
      <p className="absolute font-['Inter:Regular',sans-serif] font-normal leading-[19.5px] left-0 not-italic text-[#364146] text-[13px] top-px tracking-[-0.16px] whitespace-nowrap">A</p>
    </div>
  );
}

function Paragraph1() {
  return (
    <div className="absolute h-[15px] left-0 top-0 w-[166px]" data-name="Paragraph">
      <p className="absolute font-['Inter:Regular',sans-serif] font-normal leading-[15px] left-0 not-italic text-[#101828] text-[10px] top-[0.5px] tracking-[-0.13px] whitespace-nowrap">Рестораны</p>
    </div>
  );
}

function ImageWithFallback() {
  return (
    <div className="relative rounded-[6px] shrink-0 size-[40px]" data-name="ImageWithFallback">
      <img alt="" className="absolute bg-clip-padding border-0 border-[transparent] border-solid inset-0 max-w-none object-cover pointer-events-none rounded-[6px] size-full" src={imgImageWithFallback} />
    </div>
  );
}

function Paragraph2() {
  return (
    <div className="h-[12px] overflow-clip relative shrink-0 w-full" data-name="Paragraph">
      <p className="absolute font-['Inter:Regular',sans-serif] font-normal leading-[12px] left-0 not-italic text-[#101828] text-[8px] top-0 tracking-[-0.1px] whitespace-nowrap">Пиццерия</p>
    </div>
  );
}

function Paragraph3() {
  return (
    <div className="h-[9px] relative shrink-0 w-full" data-name="Paragraph">
      <p className="absolute font-['Inter:Regular',sans-serif] font-normal leading-[9px] left-0 not-italic text-[#8e9199] text-[6px] top-[-0.5px] tracking-[-0.08px] whitespace-nowrap">30-40 мин</p>
    </div>
  );
}

function Container2() {
  return (
    <div className="flex-[1_0_0] h-[21px] min-h-px min-w-px relative" data-name="Container">
      <div className="bg-clip-padding border-0 border-[transparent] border-solid content-stretch flex flex-col items-start relative size-full">
        <Paragraph2 />
        <Paragraph3 />
      </div>
    </div>
  );
}

function Container1() {
  return (
    <div className="absolute content-stretch flex gap-[6px] h-[40px] items-center left-0 top-[23px] w-[166px]" data-name="Container">
      <ImageWithFallback />
      <Container2 />
    </div>
  );
}

function ImageWithFallback1() {
  return (
    <div className="relative rounded-[6px] shrink-0 size-[40px]" data-name="ImageWithFallback">
      <img alt="" className="absolute bg-clip-padding border-0 border-[transparent] border-solid inset-0 max-w-none object-cover pointer-events-none rounded-[6px] size-full" src={imgImageWithFallback1} />
    </div>
  );
}

function Paragraph4() {
  return (
    <div className="h-[12px] overflow-clip relative shrink-0 w-full" data-name="Paragraph">
      <p className="absolute font-['Inter:Regular',sans-serif] font-normal leading-[12px] left-0 not-italic text-[#101828] text-[8px] top-0 tracking-[-0.1px] whitespace-nowrap">Суши-бар</p>
    </div>
  );
}

function Paragraph5() {
  return (
    <div className="h-[9px] relative shrink-0 w-full" data-name="Paragraph">
      <p className="absolute font-['Inter:Regular',sans-serif] font-normal leading-[9px] left-0 not-italic text-[#8e9199] text-[6px] top-[-0.5px] tracking-[-0.08px] whitespace-nowrap">45-60 мин</p>
    </div>
  );
}

function Container4() {
  return (
    <div className="flex-[1_0_0] h-[21px] min-h-px min-w-px relative" data-name="Container">
      <div className="bg-clip-padding border-0 border-[transparent] border-solid content-stretch flex flex-col items-start relative size-full">
        <Paragraph4 />
        <Paragraph5 />
      </div>
    </div>
  );
}

function Container3() {
  return (
    <div className="absolute content-stretch flex gap-[6px] h-[40px] items-center left-0 top-[69px] w-[166px]" data-name="Container">
      <ImageWithFallback1 />
      <Container4 />
    </div>
  );
}

function Paragraph6() {
  return (
    <div className="h-[10.5px] relative shrink-0 w-full" data-name="Paragraph">
      <p className="-translate-x-1/2 absolute font-['Inter:Regular',sans-serif] font-normal leading-[10.5px] left-[22px] not-italic text-[#364146] text-[7px] text-center top-0 tracking-[-0.09px] whitespace-nowrap">Информация</p>
    </div>
  );
}

function Container6() {
  return (
    <div className="bg-[#f7f8fc] flex-[1_0_0] h-[20.5px] min-h-px min-w-px relative rounded-[6px]" data-name="Container">
      <div className="bg-clip-padding border-0 border-[transparent] border-solid content-stretch flex flex-col items-start pt-[5px] px-[10px] relative size-full">
        <Paragraph6 />
      </div>
    </div>
  );
}

function Paragraph7() {
  return (
    <div className="h-[10.5px] relative shrink-0 w-full" data-name="Paragraph">
      <p className="-translate-x-1/2 absolute font-['Inter:Regular',sans-serif] font-normal leading-[10.5px] left-[11.61px] not-italic text-[#364146] text-[7px] text-center top-0 tracking-[-0.09px] whitespace-nowrap">Меню</p>
    </div>
  );
}

function Container7() {
  return (
    <div className="bg-[#f7f8fc] flex-[1_0_0] h-[20.5px] min-h-px min-w-px relative rounded-[6px]" data-name="Container">
      <div className="bg-clip-padding border-0 border-[transparent] border-solid content-stretch flex flex-col items-start pt-[5px] px-[10px] relative size-full">
        <Paragraph7 />
      </div>
    </div>
  );
}

function Paragraph8() {
  return (
    <div className="h-[10.5px] relative shrink-0 w-full" data-name="Paragraph">
      <p className="-translate-x-1/2 absolute font-['Inter:Regular',sans-serif] font-normal leading-[10.5px] left-[16px] not-italic text-[#364146] text-[7px] text-center top-0 tracking-[-0.09px] whitespace-nowrap">Доставка</p>
    </div>
  );
}

function Container8() {
  return (
    <div className="bg-[#f7f8fc] flex-[1_0_0] h-[20.5px] min-h-px min-w-px relative rounded-[6px]" data-name="Container">
      <div className="bg-clip-padding border-0 border-[transparent] border-solid content-stretch flex flex-col items-start pt-[5px] px-[10px] relative size-full">
        <Paragraph8 />
      </div>
    </div>
  );
}

function Container5() {
  return (
    <div className="absolute content-stretch flex gap-[4px] h-[20.5px] items-start left-0 top-[190.5px] w-[166px]" data-name="Container">
      <Container6 />
      <Container7 />
      <Container8 />
    </div>
  );
}

function Container() {
  return (
    <div className="h-[211px] relative shrink-0 w-full" data-name="Container">
      <Paragraph1 />
      <Container1 />
      <Container3 />
      <Container5 />
    </div>
  );
}

function Module2Lesson1Quiz1VariantA() {
  return (
    <div className="absolute bg-white content-stretch flex flex-col h-[231px] items-start left-[16.63px] overflow-clip pt-[10px] px-[10px] rounded-[14.99px] top-[28.5px] w-[186px]" data-name="Module2Lesson1Quiz1VariantA">
      <Container />
    </div>
  );
}

function Paragraph9() {
  return (
    <div className="absolute h-[19.5px] left-[234.63px] top-[36.5px] w-[8.305px]" data-name="Paragraph">
      <p className="absolute font-['Inter:Regular',sans-serif] font-normal leading-[19.5px] left-0 not-italic text-[#22c55e] text-[13px] top-px tracking-[-0.16px] whitespace-nowrap">B</p>
    </div>
  );
}

function Paragraph10() {
  return (
    <div className="absolute h-[15px] left-0 top-0 w-[166px]" data-name="Paragraph">
      <p className="absolute font-['Inter:Regular',sans-serif] font-normal leading-[15px] left-0 not-italic text-[#101828] text-[10px] top-[0.5px] tracking-[-0.13px] whitespace-nowrap">Рестораны</p>
    </div>
  );
}

function ImageWithFallback2() {
  return (
    <div className="relative rounded-[6px] shrink-0 size-[40px]" data-name="ImageWithFallback">
      <img alt="" className="absolute bg-clip-padding border-0 border-[transparent] border-solid inset-0 max-w-none object-cover pointer-events-none rounded-[6px] size-full" src={imgImageWithFallback} />
    </div>
  );
}

function Paragraph11() {
  return (
    <div className="h-[12px] relative shrink-0 w-full" data-name="Paragraph">
      <p className="absolute font-['Inter:Regular',sans-serif] font-normal leading-[12px] left-0 not-italic text-[#101828] text-[8px] top-0 tracking-[-0.1px] whitespace-nowrap">Пиццерия</p>
    </div>
  );
}

function Paragraph12() {
  return (
    <div className="h-[9px] relative shrink-0 w-full" data-name="Paragraph">
      <p className="absolute font-['Inter:Regular',sans-serif] font-normal leading-[9px] left-0 not-italic text-[#8e9199] text-[6px] top-[-0.5px] tracking-[-0.08px] whitespace-nowrap">30-40 мин • ⭐ 4.8</p>
    </div>
  );
}

function Container12() {
  return (
    <div className="flex-[1_0_0] h-[40px] min-h-px min-w-px relative" data-name="Container">
      <div className="bg-clip-padding border-0 border-[transparent] border-solid content-stretch flex flex-col gap-px items-start relative size-full">
        <Paragraph11 />
        <Paragraph12 />
      </div>
    </div>
  );
}

function Container11() {
  return (
    <div className="content-stretch flex gap-[6px] h-[40px] items-start relative shrink-0 w-full" data-name="Container">
      <ImageWithFallback2 />
      <Container12 />
    </div>
  );
}

function Paragraph13() {
  return (
    <div className="h-[12px] relative shrink-0 w-full" data-name="Paragraph">
      <p className="-translate-x-1/2 absolute font-['Inter:Regular',sans-serif] font-normal leading-[12px] left-[63.3px] not-italic text-[8px] text-center text-white top-0 tracking-[-0.1px] whitespace-nowrap">Заказать еду</p>
    </div>
  );
}

function Container13() {
  return (
    <div className="bg-[#364146] h-[24px] relative rounded-[6px] shrink-0 w-full" data-name="Container">
      <div className="content-stretch flex flex-col items-start pt-[6px] px-[12px] relative size-full">
        <Paragraph13 />
      </div>
    </div>
  );
}

function Container10() {
  return (
    <div className="absolute bg-[#f7f8fc] content-stretch flex flex-col gap-[6px] h-[86px] items-start left-0 pt-[8px] px-[8px] rounded-[8px] top-[23px] w-[166px]" data-name="Container">
      <Container11 />
      <Container13 />
    </div>
  );
}

function ImageWithFallback3() {
  return (
    <div className="relative rounded-[6px] shrink-0 size-[40px]" data-name="ImageWithFallback">
      <img alt="" className="absolute bg-clip-padding border-0 border-[transparent] border-solid inset-0 max-w-none object-cover pointer-events-none rounded-[6px] size-full" src={imgImageWithFallback1} />
    </div>
  );
}

function Paragraph14() {
  return (
    <div className="h-[12px] relative shrink-0 w-full" data-name="Paragraph">
      <p className="absolute font-['Inter:Regular',sans-serif] font-normal leading-[12px] left-0 not-italic text-[#101828] text-[8px] top-0 tracking-[-0.1px] whitespace-nowrap">Суши-бар</p>
    </div>
  );
}

function Paragraph15() {
  return (
    <div className="h-[9px] relative shrink-0 w-full" data-name="Paragraph">
      <p className="absolute font-['Inter:Regular',sans-serif] font-normal leading-[9px] left-0 not-italic text-[#8e9199] text-[6px] top-[-0.5px] tracking-[-0.08px] whitespace-nowrap">45-60 мин • ⭐ 4.6</p>
    </div>
  );
}

function Container16() {
  return (
    <div className="flex-[1_0_0] h-[40px] min-h-px min-w-px relative" data-name="Container">
      <div className="bg-clip-padding border-0 border-[transparent] border-solid content-stretch flex flex-col gap-px items-start relative size-full">
        <Paragraph14 />
        <Paragraph15 />
      </div>
    </div>
  );
}

function Container15() {
  return (
    <div className="content-stretch flex gap-[6px] h-[40px] items-start relative shrink-0 w-full" data-name="Container">
      <ImageWithFallback3 />
      <Container16 />
    </div>
  );
}

function Paragraph16() {
  return (
    <div className="h-[12px] relative shrink-0 w-full" data-name="Paragraph">
      <p className="-translate-x-1/2 absolute font-['Inter:Regular',sans-serif] font-normal leading-[12px] left-[63.3px] not-italic text-[8px] text-center text-white top-0 tracking-[-0.1px] whitespace-nowrap">Заказать еду</p>
    </div>
  );
}

function Container17() {
  return (
    <div className="bg-[#364146] h-[24px] relative rounded-[6px] shrink-0 w-full" data-name="Container">
      <div className="content-stretch flex flex-col items-start pt-[6px] px-[12px] relative size-full">
        <Paragraph16 />
      </div>
    </div>
  );
}

function Container14() {
  return (
    <div className="absolute bg-[#f7f8fc] content-stretch flex flex-col gap-[6px] h-[86px] items-start left-0 pt-[8px] px-[8px] rounded-[8px] top-[115px] w-[166px]" data-name="Container">
      <Container15 />
      <Container17 />
    </div>
  );
}

function Container9() {
  return (
    <div className="h-[211px] relative shrink-0 w-full" data-name="Container">
      <Paragraph10 />
      <Container10 />
      <Container14 />
    </div>
  );
}

function Module2Lesson1Quiz1VariantB() {
  return (
    <div className="absolute bg-white content-stretch flex flex-col h-[231px] items-start left-[250.94px] overflow-clip pt-[10px] px-[10px] rounded-[14.99px] top-[28.5px] w-[186px]" data-name="Module2Lesson1Quiz1VariantB">
      <Container9 />
    </div>
  );
}

function Paragraph17() {
  return (
    <div className="absolute h-[19.5px] left-0 top-[328.5px] w-[8.633px]" data-name="Paragraph">
      <p className="absolute font-['Inter:Regular',sans-serif] font-normal leading-[19.5px] left-0 not-italic text-[#364146] text-[13px] top-px tracking-[-0.16px] whitespace-nowrap">A</p>
    </div>
  );
}

function Paragraph18() {
  return (
    <div className="h-[9px] relative shrink-0 w-full" data-name="Paragraph">
      <p className="-translate-x-1/2 absolute font-['Inter:Regular',sans-serif] font-normal leading-[9px] left-[75.75px] not-italic text-[6px] text-center text-white top-[-0.5px] tracking-[-0.08px] whitespace-nowrap">🎉 Акция! Скидки до 50%</p>
    </div>
  );
}

function Container19() {
  return (
    <div className="absolute bg-[#364146] content-stretch flex flex-col h-[17px] items-start left-0 pt-[4px] px-[8px] rounded-[6px] top-0 w-[166px]" data-name="Container">
      <Paragraph18 />
    </div>
  );
}

function Paragraph19() {
  return (
    <div className="absolute h-[10.5px] left-0 top-[23px] w-[166px]" data-name="Paragraph">
      <p className="absolute font-['Inter:Regular',sans-serif] font-normal leading-[10.5px] left-0 not-italic text-[#8e9199] text-[7px] top-0 tracking-[-0.09px] whitespace-nowrap">Рекомендуем также:</p>
    </div>
  );
}

function Container21() {
  return <div className="bg-[#f7f8fc] rounded-[4px] shrink-0 size-[30px]" data-name="Container" />;
}

function Container22() {
  return <div className="bg-[#f7f8fc] rounded-[4px] shrink-0 size-[30px]" data-name="Container" />;
}

function Container23() {
  return <div className="bg-[#f7f8fc] rounded-[4px] shrink-0 size-[30px]" data-name="Container" />;
}

function Container20() {
  return (
    <div className="absolute content-stretch flex gap-[4px] h-[30px] items-start left-0 top-[39.5px] w-[166px]" data-name="Container">
      <Container21 />
      <Container22 />
      <Container23 />
    </div>
  );
}

function Paragraph20() {
  return (
    <div className="absolute h-[24px] left-0 top-[75.5px] w-[166px]" data-name="Paragraph">
      <p className="absolute font-['Inter:Regular',sans-serif] font-normal leading-[8px] left-0 not-italic text-[#8e9199] text-[6px] top-0 tracking-[-0.08px] w-[151px]">Отличный товар высокого качества. Множество положительных отзывов. Быстрая доставка по всей стране...</p>
    </div>
  );
}

function Paragraph21() {
  return (
    <div className="h-[12px] relative shrink-0 w-full" data-name="Paragraph">
      <p className="-translate-x-1/2 absolute font-['Inter:Regular',sans-serif] font-normal leading-[12px] left-[71.24px] not-italic text-[8px] text-center text-white top-0 tracking-[-0.1px] whitespace-nowrap">Купить</p>
    </div>
  );
}

function Container24() {
  return (
    <div className="absolute bg-[#364146] content-stretch flex flex-col h-[24px] items-start left-0 pt-[6px] px-[12px] rounded-[6px] top-[187px] w-[166px]" data-name="Container">
      <Paragraph21 />
    </div>
  );
}

function Container18() {
  return (
    <div className="h-[211px] relative shrink-0 w-full" data-name="Container">
      <Container19 />
      <Paragraph19 />
      <Container20 />
      <Paragraph20 />
      <Container24 />
    </div>
  );
}

function Module2Lesson1Quiz2VariantA() {
  return (
    <div className="absolute bg-white content-stretch flex flex-col h-[231px] items-start left-[16.63px] overflow-clip pt-[10px] px-[10px] rounded-[14.99px] top-[320.5px] w-[186px]" data-name="Module2Lesson1Quiz2VariantA">
      <Container18 />
    </div>
  );
}

function Paragraph22() {
  return (
    <div className="absolute h-[19.5px] left-[234.63px] top-[328.5px] w-[8.305px]" data-name="Paragraph">
      <p className="absolute font-['Inter:Regular',sans-serif] font-normal leading-[19.5px] left-0 not-italic text-[#22c55e] text-[13px] top-px tracking-[-0.16px] whitespace-nowrap">B</p>
    </div>
  );
}

function ImageWithFallback4() {
  return (
    <div className="h-[80px] relative rounded-[8px] shrink-0 w-[166px]" data-name="ImageWithFallback">
      <img alt="" className="absolute bg-clip-padding border-0 border-[transparent] border-solid inset-0 max-w-none object-cover pointer-events-none rounded-[8px] size-full" src={imgImageWithFallback2} />
    </div>
  );
}

function Paragraph23() {
  return (
    <div className="h-[12px] relative shrink-0 w-[166px]" data-name="Paragraph">
      <div className="bg-clip-padding border-0 border-[transparent] border-solid content-stretch flex items-start relative size-full">
        <p className="flex-[1_0_0] font-['Inter:Regular',sans-serif] font-normal leading-[12px] min-h-px min-w-px not-italic relative text-[#101828] text-[10px] tracking-[-0.13px]">Беспроводные наушники</p>
      </div>
    </div>
  );
}

function Paragraph24() {
  return (
    <div className="h-[18px] relative shrink-0 w-[166px]" data-name="Paragraph">
      <div className="bg-clip-padding border-0 border-[transparent] border-solid relative size-full">
        <p className="absolute font-['Inter:Regular',sans-serif] font-normal leading-[18px] left-0 not-italic text-[#101828] text-[12px] top-[0.5px] tracking-[-0.15px] whitespace-nowrap">4 990 ₽</p>
      </div>
    </div>
  );
}

function Paragraph25() {
  return (
    <div className="h-[13.5px] relative shrink-0 w-full" data-name="Paragraph">
      <p className="-translate-x-1/2 absolute font-['Inter:Regular',sans-serif] font-normal leading-[13.5px] left-[71.31px] not-italic text-[9px] text-center text-white top-[0.5px] tracking-[-0.12px] whitespace-nowrap">Купить сейчас</p>
    </div>
  );
}

function Container26() {
  return (
    <div className="bg-[#364146] h-[29.5px] relative rounded-[6px] shrink-0 w-[166px]" data-name="Container">
      <div className="bg-clip-padding border-0 border-[transparent] border-solid content-stretch flex flex-col items-start pt-[8px] px-[12px] relative size-full">
        <Paragraph25 />
      </div>
    </div>
  );
}

function Paragraph26() {
  return (
    <div className="h-[16px] relative shrink-0 w-[166px]" data-name="Paragraph">
      <div className="bg-clip-padding border-0 border-[transparent] border-solid font-['Inter:Regular',sans-serif] font-normal leading-[8px] not-italic relative size-full text-[#8e9199] text-[6px] tracking-[-0.08px] whitespace-nowrap">
        <p className="absolute left-0 top-0">✓ Бесплатная доставка</p>
        <p className="absolute left-0 top-[8px]">✓ Гарантия 2 года</p>
      </div>
    </div>
  );
}

function Container25() {
  return (
    <div className="content-stretch flex flex-col gap-[8px] h-[211px] items-start relative shrink-0 w-full" data-name="Container">
      <ImageWithFallback4 />
      <Paragraph23 />
      <Paragraph24 />
      <Container26 />
      <Paragraph26 />
    </div>
  );
}

function Module2Lesson1Quiz2VariantB() {
  return (
    <div className="absolute bg-white content-stretch flex flex-col h-[231px] items-start left-[250.94px] overflow-clip pt-[10px] px-[10px] rounded-[14.99px] top-[320.5px] w-[186px]" data-name="Module2Lesson1Quiz2VariantB">
      <Container25 />
    </div>
  );
}

function Paragraph27() {
  return (
    <div className="absolute h-[19.5px] left-0 top-[620.5px] w-[8.633px]" data-name="Paragraph">
      <p className="absolute font-['Inter:Regular',sans-serif] font-normal leading-[19.5px] left-0 not-italic text-[#364146] text-[13px] top-px tracking-[-0.16px] whitespace-nowrap">A</p>
    </div>
  );
}

function Paragraph28() {
  return (
    <div className="absolute h-[13.5px] left-0 top-[2.25px] w-[166px]" data-name="Paragraph">
      <p className="absolute font-['Inter:Regular',sans-serif] font-normal leading-[13.5px] left-0 not-italic text-[#101828] text-[9px] top-[0.5px] tracking-[-0.12px] whitespace-nowrap">Регистрация</p>
    </div>
  );
}

function Paragraph29() {
  return (
    <div className="h-[9px] relative shrink-0 w-full" data-name="Paragraph">
      <p className="absolute font-['Inter:Regular',sans-serif] font-normal leading-[9px] left-0 not-italic text-[#8e9199] text-[6px] top-[-0.5px] tracking-[-0.08px] whitespace-nowrap">Имя</p>
    </div>
  );
}

function Container28() {
  return (
    <div className="absolute bg-[#f7f8fc] content-stretch flex flex-col h-[17px] items-start left-0 pt-[4px] px-[8px] rounded-[4px] top-[21.75px] w-[166px]" data-name="Container">
      <Paragraph29 />
    </div>
  );
}

function Paragraph30() {
  return (
    <div className="h-[9px] relative shrink-0 w-full" data-name="Paragraph">
      <p className="absolute font-['Inter:Regular',sans-serif] font-normal leading-[9px] left-0 not-italic text-[#8e9199] text-[6px] top-[-0.5px] tracking-[-0.08px] whitespace-nowrap">Фамилия</p>
    </div>
  );
}

function Container29() {
  return (
    <div className="absolute bg-[#f7f8fc] content-stretch flex flex-col h-[17px] items-start left-0 pt-[4px] px-[8px] rounded-[4px] top-[42.75px] w-[166px]" data-name="Container">
      <Paragraph30 />
    </div>
  );
}

function Paragraph31() {
  return (
    <div className="h-[9px] relative shrink-0 w-full" data-name="Paragraph">
      <p className="absolute font-['Inter:Regular',sans-serif] font-normal leading-[9px] left-0 not-italic text-[#8e9199] text-[6px] top-[-0.5px] tracking-[-0.08px] whitespace-nowrap">Дата рождения</p>
    </div>
  );
}

function Container30() {
  return (
    <div className="absolute bg-[#f7f8fc] content-stretch flex flex-col h-[17px] items-start left-0 pt-[4px] px-[8px] rounded-[4px] top-[63.75px] w-[166px]" data-name="Container">
      <Paragraph31 />
    </div>
  );
}

function Paragraph32() {
  return (
    <div className="h-[9px] relative shrink-0 w-full" data-name="Paragraph">
      <p className="absolute font-['Inter:Regular',sans-serif] font-normal leading-[9px] left-0 not-italic text-[#8e9199] text-[6px] top-[-0.5px] tracking-[-0.08px] whitespace-nowrap">Город</p>
    </div>
  );
}

function Container31() {
  return (
    <div className="absolute bg-[#f7f8fc] content-stretch flex flex-col h-[17px] items-start left-0 pt-[4px] px-[8px] rounded-[4px] top-[84.75px] w-[166px]" data-name="Container">
      <Paragraph32 />
    </div>
  );
}

function Paragraph33() {
  return (
    <div className="h-[9px] relative shrink-0 w-full" data-name="Paragraph">
      <p className="absolute font-['Inter:Regular',sans-serif] font-normal leading-[9px] left-0 not-italic text-[#8e9199] text-[6px] top-[-0.5px] tracking-[-0.08px] whitespace-nowrap">Телефон</p>
    </div>
  );
}

function Container32() {
  return (
    <div className="absolute bg-[#f7f8fc] content-stretch flex flex-col h-[17px] items-start left-0 pt-[4px] px-[8px] rounded-[4px] top-[105.75px] w-[166px]" data-name="Container">
      <Paragraph33 />
    </div>
  );
}

function Paragraph34() {
  return (
    <div className="h-[9px] relative shrink-0 w-full" data-name="Paragraph">
      <p className="absolute font-['Inter:Regular',sans-serif] font-normal leading-[9px] left-0 not-italic text-[#8e9199] text-[6px] top-[-0.5px] tracking-[-0.08px] whitespace-nowrap">Email</p>
    </div>
  );
}

function Container33() {
  return (
    <div className="absolute bg-[#f7f8fc] content-stretch flex flex-col h-[17px] items-start left-0 pt-[4px] px-[8px] rounded-[4px] top-[126.75px] w-[166px]" data-name="Container">
      <Paragraph34 />
    </div>
  );
}

function Paragraph35() {
  return (
    <div className="h-[9px] relative shrink-0 w-full" data-name="Paragraph">
      <p className="absolute font-['Inter:Regular',sans-serif] font-normal leading-[9px] left-0 not-italic text-[#8e9199] text-[6px] top-[-0.5px] tracking-[-0.08px] whitespace-nowrap">Пароль</p>
    </div>
  );
}

function Container34() {
  return (
    <div className="absolute bg-[#f7f8fc] content-stretch flex flex-col h-[17px] items-start left-0 pt-[4px] px-[8px] rounded-[4px] top-[147.75px] w-[166px]" data-name="Container">
      <Paragraph35 />
    </div>
  );
}

function Paragraph36() {
  return (
    <div className="h-[9px] relative shrink-0 w-full" data-name="Paragraph">
      <p className="absolute font-['Inter:Regular',sans-serif] font-normal leading-[9px] left-0 not-italic text-[#8e9199] text-[6px] top-[-0.5px] tracking-[-0.08px] whitespace-nowrap">Повторите пароль</p>
    </div>
  );
}

function Container35() {
  return (
    <div className="absolute bg-[#f7f8fc] content-stretch flex flex-col h-[17px] items-start left-0 pt-[4px] px-[8px] rounded-[4px] top-[168.75px] w-[166px]" data-name="Container">
      <Paragraph36 />
    </div>
  );
}

function Paragraph37() {
  return (
    <div className="h-[9px] relative shrink-0 w-full" data-name="Paragraph">
      <p className="-translate-x-1/2 absolute font-['Inter:Regular',sans-serif] font-normal leading-[9px] left-[32.63px] not-italic text-[6px] text-center text-white top-[-0.5px] tracking-[-0.08px] whitespace-nowrap">Создать</p>
    </div>
  );
}

function Container37() {
  return (
    <div className="bg-[#364146] flex-[1_0_0] h-[17px] min-h-px min-w-px relative rounded-[6px]" data-name="Container">
      <div className="bg-clip-padding border-0 border-[transparent] border-solid content-stretch flex flex-col items-start pt-[4px] px-[8px] relative size-full">
        <Paragraph37 />
      </div>
    </div>
  );
}

function Paragraph38() {
  return (
    <div className="h-[9px] relative shrink-0 w-full" data-name="Paragraph">
      <p className="-translate-x-1/2 absolute font-['Inter:Regular',sans-serif] font-normal leading-[9px] left-[32.91px] not-italic text-[#364146] text-[6px] text-center top-[-0.5px] tracking-[-0.08px] whitespace-nowrap">Отмена</p>
    </div>
  );
}

function Container38() {
  return (
    <div className="bg-[#f7f8fc] flex-[1_0_0] h-[17px] min-h-px min-w-px relative rounded-[6px]" data-name="Container">
      <div className="bg-clip-padding border-0 border-[transparent] border-solid content-stretch flex flex-col items-start pt-[4px] px-[8px] relative size-full">
        <Paragraph38 />
      </div>
    </div>
  );
}

function Container36() {
  return (
    <div className="absolute content-stretch flex gap-[4px] h-[17px] items-start left-0 top-[191.75px] w-[166px]" data-name="Container">
      <Container37 />
      <Container38 />
    </div>
  );
}

function Container27() {
  return (
    <div className="h-[211px] relative shrink-0 w-full" data-name="Container">
      <Paragraph28 />
      <Container28 />
      <Container29 />
      <Container30 />
      <Container31 />
      <Container32 />
      <Container33 />
      <Container34 />
      <Container35 />
      <Container36 />
    </div>
  );
}

function Module2Lesson1Quiz3VariantA() {
  return (
    <div className="absolute bg-white content-stretch flex flex-col h-[231px] items-start left-[16.63px] overflow-clip pt-[10px] px-[10px] rounded-[14.99px] top-[612.5px] w-[186px]" data-name="Module2Lesson1Quiz3VariantA">
      <Container27 />
    </div>
  );
}

function Paragraph39() {
  return (
    <div className="absolute h-[19.5px] left-[234.63px] top-[620.5px] w-[8.305px]" data-name="Paragraph">
      <p className="absolute font-['Inter:Regular',sans-serif] font-normal leading-[19.5px] left-0 not-italic text-[#22c55e] text-[13px] top-px tracking-[-0.16px] whitespace-nowrap">B</p>
    </div>
  );
}

function Paragraph40() {
  return (
    <div className="absolute h-[16.5px] left-0 top-[2.5px] w-[166px]" data-name="Paragraph">
      <p className="absolute font-['Inter:Regular',sans-serif] font-normal leading-[16.5px] left-0 not-italic text-[#101828] text-[11px] top-[0.5px] tracking-[-0.14px] whitespace-nowrap">Регистрация</p>
    </div>
  );
}

function Paragraph41() {
  return (
    <div className="h-[12px] relative shrink-0 w-[166px]" data-name="Paragraph">
      <div className="bg-clip-padding border-0 border-[transparent] border-solid relative size-full">
        <p className="absolute font-['Inter:Regular',sans-serif] font-normal leading-[12px] left-0 not-italic text-[#101828] text-[8px] top-0 tracking-[-0.1px] whitespace-nowrap">Имя</p>
      </div>
    </div>
  );
}

function Paragraph42() {
  return (
    <div className="h-[12px] relative shrink-0 w-full" data-name="Paragraph">
      <p className="absolute font-['Inter:Regular',sans-serif] font-normal leading-[12px] left-0 not-italic text-[#8e9199] text-[8px] top-0 tracking-[-0.1px] whitespace-nowrap">Ваше имя</p>
    </div>
  );
}

function Container41() {
  return (
    <div className="bg-[#f7f8fc] flex-[1_0_0] min-h-px min-w-px relative rounded-[6px] w-[166px]" data-name="Container">
      <div className="bg-clip-padding border-0 border-[transparent] border-solid content-stretch flex flex-col items-start pt-[6px] px-[12px] relative size-full">
        <Paragraph42 />
      </div>
    </div>
  );
}

function Container40() {
  return (
    <div className="absolute content-stretch flex flex-col gap-[4px] h-[40px] items-start left-0 top-[31px] w-[166px]" data-name="Container">
      <Paragraph41 />
      <Container41 />
    </div>
  );
}

function Paragraph43() {
  return (
    <div className="h-[12px] relative shrink-0 w-[166px]" data-name="Paragraph">
      <div className="bg-clip-padding border-0 border-[transparent] border-solid relative size-full">
        <p className="absolute font-['Inter:Regular',sans-serif] font-normal leading-[12px] left-0 not-italic text-[#101828] text-[8px] top-0 tracking-[-0.1px] whitespace-nowrap">Email</p>
      </div>
    </div>
  );
}

function Paragraph44() {
  return (
    <div className="h-[12px] relative shrink-0 w-full" data-name="Paragraph">
      <p className="absolute font-['Inter:Regular',sans-serif] font-normal leading-[12px] left-0 not-italic text-[#8e9199] text-[8px] top-0 tracking-[-0.1px] whitespace-nowrap">your@email.com</p>
    </div>
  );
}

function Container43() {
  return (
    <div className="bg-[#f7f8fc] flex-[1_0_0] min-h-px min-w-px relative rounded-[6px] w-[166px]" data-name="Container">
      <div className="bg-clip-padding border-0 border-[transparent] border-solid content-stretch flex flex-col items-start pt-[6px] px-[12px] relative size-full">
        <Paragraph44 />
      </div>
    </div>
  );
}

function Container42() {
  return (
    <div className="absolute content-stretch flex flex-col gap-[4px] h-[40px] items-start left-0 top-[79px] w-[166px]" data-name="Container">
      <Paragraph43 />
      <Container43 />
    </div>
  );
}

function Paragraph45() {
  return (
    <div className="h-[12px] relative shrink-0 w-[166px]" data-name="Paragraph">
      <div className="bg-clip-padding border-0 border-[transparent] border-solid relative size-full">
        <p className="absolute font-['Inter:Regular',sans-serif] font-normal leading-[12px] left-0 not-italic text-[#101828] text-[8px] top-0 tracking-[-0.1px] whitespace-nowrap">Пароль</p>
      </div>
    </div>
  );
}

function Paragraph46() {
  return (
    <div className="h-[12px] relative shrink-0 w-full" data-name="Paragraph">
      <p className="absolute font-['Inter:Regular',sans-serif] font-normal leading-[12px] left-0 not-italic text-[#8e9199] text-[8px] top-0 tracking-[-0.1px] whitespace-nowrap">••••••••</p>
    </div>
  );
}

function Container45() {
  return (
    <div className="bg-[#f7f8fc] flex-[1_0_0] min-h-px min-w-px relative rounded-[6px] w-[166px]" data-name="Container">
      <div className="bg-clip-padding border-0 border-[transparent] border-solid content-stretch flex flex-col items-start pt-[6px] px-[12px] relative size-full">
        <Paragraph46 />
      </div>
    </div>
  );
}

function Container44() {
  return (
    <div className="absolute content-stretch flex flex-col gap-[4px] h-[40px] items-start left-0 top-[127px] w-[166px]" data-name="Container">
      <Paragraph45 />
      <Container45 />
    </div>
  );
}

function Paragraph47() {
  return (
    <div className="h-[13.5px] relative shrink-0 w-full" data-name="Paragraph">
      <p className="-translate-x-1/2 absolute font-['Inter:Regular',sans-serif] font-normal leading-[13.5px] left-[71.54px] not-italic text-[9px] text-center text-white top-[0.5px] tracking-[-0.12px] whitespace-nowrap">Зарегистрироваться</p>
    </div>
  );
}

function Container46() {
  return (
    <div className="absolute bg-[#364146] content-stretch flex flex-col h-[29.5px] items-start left-0 pt-[8px] px-[12px] rounded-[6px] top-[179px] w-[166px]" data-name="Container">
      <Paragraph47 />
    </div>
  );
}

function Container39() {
  return (
    <div className="h-[211px] relative shrink-0 w-full" data-name="Container">
      <Paragraph40 />
      <Container40 />
      <Container42 />
      <Container44 />
      <Container46 />
    </div>
  );
}

function Module2Lesson1Quiz3VariantB() {
  return (
    <div className="absolute bg-white content-stretch flex flex-col h-[231px] items-start left-[250.94px] overflow-clip pt-[10px] px-[10px] rounded-[14.99px] top-[612.5px] w-[186px]" data-name="Module2Lesson1Quiz3VariantB">
      <Container39 />
    </div>
  );
}

function Paragraph48() {
  return (
    <div className="absolute h-[19.5px] left-0 top-[912.5px] w-[8.633px]" data-name="Paragraph">
      <p className="absolute font-['Inter:Regular',sans-serif] font-normal leading-[19.5px] left-0 not-italic text-[#22c55e] text-[13px] top-px tracking-[-0.16px] whitespace-nowrap">A</p>
    </div>
  );
}

function Paragraph49() {
  return (
    <div className="h-[10.5px] relative shrink-0 w-full" data-name="Paragraph">
      <p className="absolute font-['Inter:Regular',sans-serif] font-normal leading-[10.5px] left-0 not-italic text-[7px] text-white top-0 tracking-[-0.09px] whitespace-nowrap">Действие</p>
    </div>
  );
}

function Container49() {
  return (
    <div className="bg-[#364146] flex-[1_0_0] h-[20.5px] min-h-px min-w-px relative rounded-[6px]" data-name="Container">
      <div className="bg-clip-padding border-0 border-[transparent] border-solid content-stretch flex flex-col items-start pt-[5px] px-[8px] relative size-full">
        <Paragraph49 />
      </div>
    </div>
  );
}

function Paragraph50() {
  return (
    <div className="h-[10.5px] relative shrink-0 w-full" data-name="Paragraph">
      <p className="absolute font-['Inter:Regular',sans-serif] font-normal leading-[10.5px] left-0 not-italic text-[#364146] text-[7px] top-0 tracking-[-0.09px] whitespace-nowrap">Ещё</p>
    </div>
  );
}

function Container50() {
  return (
    <div className="bg-[#f7f8fc] h-[20.5px] relative rounded-[6px] shrink-0 w-[30.023px]" data-name="Container">
      <div className="bg-clip-padding border-0 border-[transparent] border-solid content-stretch flex flex-col items-start pt-[5px] px-[8px] relative size-full">
        <Paragraph50 />
      </div>
    </div>
  );
}

function Container48() {
  return (
    <div className="absolute content-stretch flex gap-[87.43px] h-[20.5px] items-start left-0 top-0 w-[166px]" data-name="Container">
      <Container49 />
      <Container50 />
    </div>
  );
}

function Paragraph51() {
  return (
    <div className="h-[10.5px] relative shrink-0 w-full" data-name="Paragraph">
      <p className="absolute font-['Inter:Regular',sans-serif] font-normal leading-[10.5px] left-0 not-italic text-[#101828] text-[7px] top-0 tracking-[-0.09px] whitespace-nowrap">Информация 1</p>
    </div>
  );
}

function Container51() {
  return (
    <div className="absolute bg-[#f7f8fc] content-stretch flex flex-col h-[22.5px] items-start left-[20px] pt-[6px] px-[6px] rounded-[6px] top-[26.5px] w-[146px]" data-name="Container">
      <Paragraph51 />
    </div>
  );
}

function Paragraph52() {
  return (
    <div className="h-[9px] relative shrink-0 w-full" data-name="Paragraph">
      <p className="absolute font-['Inter:Regular',sans-serif] font-normal leading-[9px] left-0 not-italic text-[#364146] text-[6px] top-[-0.5px] tracking-[-0.08px] whitespace-nowrap">Кнопка</p>
    </div>
  );
}

function Container53() {
  return (
    <div className="bg-[#f7f8fc] h-[22.5px] relative rounded-[6px] shrink-0 w-[32.578px]" data-name="Container">
      <div className="bg-clip-padding border-0 border-[transparent] border-solid content-stretch flex flex-col items-start pt-[4px] px-[6px] relative size-full">
        <Paragraph52 />
      </div>
    </div>
  );
}

function Paragraph53() {
  return (
    <div className="h-[10.5px] relative shrink-0 w-full" data-name="Paragraph">
      <p className="absolute font-['Inter:Regular',sans-serif] font-normal leading-[10.5px] left-0 not-italic text-[#101828] text-[7px] top-0 tracking-[-0.09px] whitespace-nowrap">Текст</p>
    </div>
  );
}

function Container54() {
  return (
    <div className="bg-[#f7f8fc] flex-[1_0_0] h-[22.5px] min-h-px min-w-px relative rounded-[6px]" data-name="Container">
      <div className="bg-clip-padding border-0 border-[transparent] border-solid content-stretch flex flex-col items-start pt-[6px] px-[6px] relative size-full">
        <Paragraph53 />
      </div>
    </div>
  );
}

function Container52() {
  return (
    <div className="absolute content-stretch flex gap-[6px] h-[22.5px] items-start left-0 top-[55px] w-[166px]" data-name="Container">
      <Container53 />
      <Container54 />
    </div>
  );
}

function Paragraph54() {
  return (
    <div className="h-[10.5px] relative shrink-0 w-full" data-name="Paragraph">
      <p className="absolute font-['Inter:Regular',sans-serif] font-normal leading-[10.5px] left-0 not-italic text-[#101828] text-[7px] top-0 tracking-[-0.09px] whitespace-nowrap">Информация 2</p>
    </div>
  );
}

function Container55() {
  return (
    <div className="absolute bg-[#f7f8fc] content-stretch flex flex-col h-[22.5px] items-start left-0 pt-[6px] px-[6px] rounded-[6px] top-[83.5px] w-[141px]" data-name="Container">
      <Paragraph54 />
    </div>
  );
}

function Paragraph55() {
  return (
    <div className="h-[9px] relative shrink-0 w-full" data-name="Paragraph">
      <p className="absolute font-['Inter:Regular',sans-serif] font-normal leading-[9px] left-0 not-italic text-[6px] text-white top-[-0.5px] tracking-[-0.08px] whitespace-nowrap">Главная</p>
    </div>
  );
}

function Container57() {
  return (
    <div className="bg-[#364146] h-[19px] relative rounded-[6px] shrink-0 w-[39.43px]" data-name="Container">
      <div className="bg-clip-padding border-0 border-[transparent] border-solid content-stretch flex flex-col items-start pt-[5px] px-[8px] relative size-full">
        <Paragraph55 />
      </div>
    </div>
  );
}

function Paragraph56() {
  return (
    <div className="h-[9px] relative shrink-0 w-full" data-name="Paragraph">
      <p className="absolute font-['Inter:Regular',sans-serif] font-normal leading-[9px] left-0 not-italic text-[#364146] text-[6px] top-[-0.5px] tracking-[-0.08px] whitespace-nowrap">Профиль</p>
    </div>
  );
}

function Container58() {
  return (
    <div className="bg-[#f7f8fc] h-[19px] relative rounded-[6px] shrink-0 w-[41.531px]" data-name="Container">
      <div className="bg-clip-padding border-0 border-[transparent] border-solid content-stretch flex flex-col items-start pt-[5px] px-[8px] relative size-full">
        <Paragraph56 />
      </div>
    </div>
  );
}

function Container56() {
  return (
    <div className="absolute content-stretch flex gap-[4px] h-[19px] items-start left-[10px] top-[163.5px] w-[156px]" data-name="Container">
      <Container57 />
      <Container58 />
    </div>
  );
}

function Paragraph57() {
  return (
    <div className="h-[10.5px] relative shrink-0 w-full" data-name="Paragraph">
      <p className="absolute font-['Inter:Regular',sans-serif] font-normal leading-[10.5px] left-0 not-italic text-[#101828] text-[7px] top-0 tracking-[-0.09px] whitespace-nowrap">Ещё текст</p>
    </div>
  );
}

function Container59() {
  return (
    <div className="absolute bg-[#f7f8fc] content-stretch flex flex-col h-[22.5px] items-start left-0 pt-[6px] px-[6px] rounded-[6px] top-[188.5px] w-[80px]" data-name="Container">
      <Paragraph57 />
    </div>
  );
}

function Container47() {
  return (
    <div className="h-[211px] relative shrink-0 w-full" data-name="Container">
      <Container48 />
      <Container51 />
      <Container52 />
      <Container55 />
      <Container56 />
      <Container59 />
    </div>
  );
}

function Module2Lesson1Quiz4VariantA() {
  return (
    <div className="absolute bg-white content-stretch flex flex-col h-[231px] items-start left-[16.63px] overflow-clip pt-[10px] px-[10px] rounded-[14.99px] top-[904.5px] w-[186px]" data-name="Module2Lesson1Quiz4VariantA">
      <Container47 />
    </div>
  );
}

function Paragraph58() {
  return (
    <div className="absolute h-[19.5px] left-[234.63px] top-[912.5px] w-[8.305px]" data-name="Paragraph">
      <p className="absolute font-['Inter:Regular',sans-serif] font-normal leading-[19.5px] left-0 not-italic text-[#364146] text-[13px] top-px tracking-[-0.16px] whitespace-nowrap">B</p>
    </div>
  );
}

function Paragraph59() {
  return (
    <div className="absolute h-[16.5px] left-0 top-0 w-[166px]" data-name="Paragraph">
      <p className="absolute font-['Inter:Regular',sans-serif] font-normal leading-[16.5px] left-0 not-italic text-[#101828] text-[11px] top-[0.5px] tracking-[-0.14px] whitespace-nowrap">Главная</p>
    </div>
  );
}

function Paragraph60() {
  return (
    <div className="h-[12px] relative shrink-0 w-full" data-name="Paragraph">
      <p className="absolute font-['Inter:Regular',sans-serif] font-normal leading-[12px] left-0 not-italic text-[#101828] text-[8px] top-0 tracking-[-0.1px] whitespace-nowrap">Информация 1</p>
    </div>
  );
}

function Paragraph61() {
  return (
    <div className="h-[9px] relative shrink-0 w-full" data-name="Paragraph">
      <p className="absolute font-['Inter:Regular',sans-serif] font-normal leading-[9px] left-0 not-italic text-[#8e9199] text-[6px] top-[-0.5px] tracking-[-0.08px] whitespace-nowrap">Описание</p>
    </div>
  );
}

function Container62() {
  return (
    <div className="bg-[#f7f8fc] h-[39px] relative rounded-[6px] shrink-0 w-[166px]" data-name="Container">
      <div className="bg-clip-padding border-0 border-[transparent] border-solid content-stretch flex flex-col gap-[2px] items-start pt-[8px] px-[8px] relative size-full">
        <Paragraph60 />
        <Paragraph61 />
      </div>
    </div>
  );
}

function Paragraph62() {
  return (
    <div className="h-[12px] relative shrink-0 w-full" data-name="Paragraph">
      <p className="absolute font-['Inter:Regular',sans-serif] font-normal leading-[12px] left-0 not-italic text-[#101828] text-[8px] top-0 tracking-[-0.1px] whitespace-nowrap">Информация 2</p>
    </div>
  );
}

function Paragraph63() {
  return (
    <div className="h-[9px] relative shrink-0 w-full" data-name="Paragraph">
      <p className="absolute font-['Inter:Regular',sans-serif] font-normal leading-[9px] left-0 not-italic text-[#8e9199] text-[6px] top-[-0.5px] tracking-[-0.08px] whitespace-nowrap">Описание</p>
    </div>
  );
}

function Container63() {
  return (
    <div className="bg-[#f7f8fc] flex-[1_0_0] min-h-px min-w-px relative rounded-[6px] w-[166px]" data-name="Container">
      <div className="bg-clip-padding border-0 border-[transparent] border-solid content-stretch flex flex-col gap-[2px] items-start pt-[8px] px-[8px] relative size-full">
        <Paragraph62 />
        <Paragraph63 />
      </div>
    </div>
  );
}

function Container61() {
  return (
    <div className="absolute content-stretch flex flex-col gap-[6px] h-[84px] items-start left-0 top-[24.5px] w-[166px]" data-name="Container">
      <Container62 />
      <Container63 />
    </div>
  );
}

function Paragraph64() {
  return (
    <div className="h-[13.5px] relative shrink-0 w-full" data-name="Paragraph">
      <p className="-translate-x-1/2 absolute font-['Inter:Regular',sans-serif] font-normal leading-[13.5px] left-[71.25px] not-italic text-[9px] text-center text-white top-[0.5px] tracking-[-0.12px] whitespace-nowrap">Основное действие</p>
    </div>
  );
}

function Container64() {
  return (
    <div className="absolute bg-[#364146] content-stretch flex flex-col h-[29.5px] items-start left-0 pt-[8px] px-[12px] rounded-[6px] top-[116.5px] w-[166px]" data-name="Container">
      <Paragraph64 />
    </div>
  );
}

function Paragraph65() {
  return (
    <div className="h-[10.5px] relative shrink-0 w-full" data-name="Paragraph">
      <p className="-translate-x-1/2 absolute font-['Inter:Regular',sans-serif] font-normal leading-[10.5px] left-[28.32px] not-italic text-[7px] text-center text-white top-0 tracking-[-0.09px] whitespace-nowrap">Главная</p>
    </div>
  );
}

function Container66() {
  return (
    <div className="bg-[#364146] flex-[1_0_0] h-[22.5px] min-h-px min-w-px relative rounded-[6px]" data-name="Container">
      <div className="bg-clip-padding border-0 border-[transparent] border-solid content-stretch flex flex-col items-start pt-[6px] px-[12px] relative size-full">
        <Paragraph65 />
      </div>
    </div>
  );
}

function Paragraph66() {
  return (
    <div className="h-[10.5px] relative shrink-0 w-full" data-name="Paragraph">
      <p className="-translate-x-1/2 absolute font-['Inter:Regular',sans-serif] font-normal leading-[10.5px] left-[28.09px] not-italic text-[#364146] text-[7px] text-center top-0 tracking-[-0.09px] whitespace-nowrap">Профиль</p>
    </div>
  );
}

function Container67() {
  return (
    <div className="bg-[#f7f8fc] flex-[1_0_0] h-[22.5px] min-h-px min-w-px relative rounded-[6px]" data-name="Container">
      <div className="bg-clip-padding border-0 border-[transparent] border-solid content-stretch flex flex-col items-start pt-[6px] px-[12px] relative size-full">
        <Paragraph66 />
      </div>
    </div>
  );
}

function Container65() {
  return (
    <div className="absolute content-stretch flex gap-[6px] h-[22.5px] items-start left-0 top-[188.5px] w-[166px]" data-name="Container">
      <Container66 />
      <Container67 />
    </div>
  );
}

function Container60() {
  return (
    <div className="h-[211px] relative shrink-0 w-full" data-name="Container">
      <Paragraph59 />
      <Container61 />
      <Container64 />
      <Container65 />
    </div>
  );
}

function Module2Lesson1Quiz4VariantB() {
  return (
    <div className="absolute bg-white content-stretch flex flex-col h-[231px] items-start left-[250.94px] overflow-clip pt-[10px] px-[10px] rounded-[14.99px] top-[904.5px] w-[186px]" data-name="Module2Lesson1Quiz4VariantB">
      <Container60 />
    </div>
  );
}

export default function Component1Ux() {
  return (
    <div className="relative size-full" data-name="урок 1 Что такое UX">
      <p className="absolute font-['Inter:Regular',sans-serif] font-normal leading-[13px] left-0 not-italic text-[#8e9199] text-[10px] top-0 tracking-[-0.13px] whitespace-nowrap">1. Где пользовательский опыт лучше?</p>
      <Paragraph />
      <Module2Lesson1Quiz1VariantA />
      <Paragraph9 />
      <Module2Lesson1Quiz1VariantB />
      <p className="absolute font-['Inter:Regular',sans-serif] font-normal leading-[13px] left-0 not-italic text-[#8e9199] text-[10px] top-[292px] tracking-[-0.13px] whitespace-nowrap">2. Где интерфейс лучше помогает пользователю выполнить задачу?</p>
      <Paragraph17 />
      <Module2Lesson1Quiz2VariantA />
      <Paragraph22 />
      <Module2Lesson1Quiz2VariantB />
      <p className="absolute font-['Inter:Regular',sans-serif] font-normal leading-[13px] left-0 not-italic text-[#8e9199] text-[10px] top-[584px] tracking-[-0.13px] whitespace-nowrap">3. Где интерфейс проще?</p>
      <Paragraph27 />
      <Module2Lesson1Quiz3VariantA />
      <Paragraph39 />
      <Module2Lesson1Quiz3VariantB />
      <p className="absolute font-['Inter:Regular',sans-serif] font-normal leading-[13px] left-0 not-italic text-[#8e9199] text-[10px] top-[876px] tracking-[-0.13px] whitespace-nowrap">4. Где интерфейс создаёт проблемы для пользователя?</p>
      <Paragraph48 />
      <Module2Lesson1Quiz4VariantA />
      <Paragraph58 />
      <Module2Lesson1Quiz4VariantB />
    </div>
  );
}

// ─── Module 2 Lesson 1 quiz card exports ─────────────────────────────────────
export function M2L1Q1A() {
  return (
    <div style={{ position: "relative", width: 186, height: 231, overflow: "hidden" }}>
      <div style={{ position: "absolute", left: -16.63, top: -28.5 }}><Module2Lesson1Quiz1VariantA /></div>
    </div>
  );
}
export function M2L1Q1B() {
  return (
    <div style={{ position: "relative", width: 186, height: 231, overflow: "hidden" }}>
      <div style={{ position: "absolute", left: -250.94, top: -28.5 }}><Module2Lesson1Quiz1VariantB /></div>
    </div>
  );
}
export function M2L1Q2A() {
  return (
    <div style={{ position: "relative", width: 186, height: 231, overflow: "hidden" }}>
      <div style={{ position: "absolute", left: -16.63, top: -320.5 }}><Module2Lesson1Quiz2VariantA /></div>
    </div>
  );
}
export function M2L1Q2B() {
  return (
    <div style={{ position: "relative", width: 186, height: 231, overflow: "hidden" }}>
      <div style={{ position: "absolute", left: -250.94, top: -320.5 }}><Module2Lesson1Quiz2VariantB /></div>
    </div>
  );
}
export function M2L1Q3A() {
  return (
    <div style={{ position: "relative", width: 186, height: 231, overflow: "hidden" }}>
      <div style={{ position: "absolute", left: -16.63, top: -612.5 }}><Module2Lesson1Quiz3VariantA /></div>
    </div>
  );
}
export function M2L1Q3B() {
  return (
    <div style={{ position: "relative", width: 186, height: 231, overflow: "hidden" }}>
      <div style={{ position: "absolute", left: -250.94, top: -612.5 }}><Module2Lesson1Quiz3VariantB /></div>
    </div>
  );
}
export function M2L1Q4A() {
  return (
    <div style={{ position: "relative", width: 186, height: 231, overflow: "hidden" }}>
      <div style={{ position: "absolute", left: -16.63, top: -904.5 }}><Module2Lesson1Quiz4VariantA /></div>
    </div>
  );
}
export function M2L1Q4B() {
  return (
    <div style={{ position: "relative", width: 186, height: 231, overflow: "hidden" }}>
      <div style={{ position: "absolute", left: -250.94, top: -904.5 }}><Module2Lesson1Quiz4VariantB /></div>
    </div>
  );
}