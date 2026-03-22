import imgImageWithFallback from "figma:asset/3df84006d97e4cedd573ce018999b880bc2d5f21.png";
import imgImageWithFallback1 from "figma:asset/96b6271607b1ba08ade81c4089341203f93fc545.png";
import imgImageWithFallback2 from "figma:asset/2c7dc80a7c1cecb2647404b3ff41d6fdaad27b11.png";
import imgImageWithFallback3 from "figma:asset/c77613aafd809b7a04fa84005ea468aed8fc20ea.png";
import imgImageWithFallback4 from "figma:asset/6bb87e726cf29dac62fe21af37863d687b2fe172.png";
import imgImageWithFallback5 from "figma:asset/066e0529d0fedd41c001a553bf234bc0226844f4.png";
import imgImageWithFallback6 from "figma:asset/97b0f7fe25d257fbc14621033d2e8a81397b7379.png";

function Heading() {
  return (
    <div className="absolute h-[36px] left-0 top-0 w-[1280px]" data-name="Heading 2">
      <p className="absolute font-['Inter:Regular',sans-serif] font-normal leading-[36px] left-0 not-italic text-[#101828] text-[24px] top-0 tracking-[0.0703px] whitespace-nowrap">Урок 5 — Создание UI Kit</p>
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

function Paragraph() {
  return (
    <div className="absolute content-stretch flex h-[15px] items-start left-0 top-[35px] w-[1280px]" data-name="Paragraph">
      <p className="flex-[1_0_0] font-['Inter:Regular',sans-serif] font-normal leading-[15px] min-h-px min-w-px not-italic relative text-[#8e9199] text-[12px] tracking-[-0.15px]">Сравните два варианта интерфейса</p>
    </div>
  );
}

function Paragraph1() {
  return (
    <div className="h-[14px] relative shrink-0 w-full" data-name="Paragraph">
      <p className="absolute font-['Inter:Regular',sans-serif] font-normal leading-[14px] left-0 not-italic text-[#8e9199] text-[11px] top-[0.5px] tracking-[-0.14px] whitespace-nowrap">1. Где UI Kit собран правильно?</p>
    </div>
  );
}

function Paragraph2() {
  return (
    <div className="absolute h-[21px] left-0 top-[8px] w-[9.297px]" data-name="Paragraph">
      <p className="absolute font-['Inter:Regular',sans-serif] font-normal leading-[21px] left-0 not-italic text-[#364146] text-[14px] top-0 tracking-[-0.17px] whitespace-nowrap">A</p>
    </div>
  );
}

function Paragraph3() {
  return (
    <div className="h-[11px] relative shrink-0 w-full" data-name="Paragraph">
      <p className="absolute font-['Inter:Regular',sans-serif] font-normal leading-[11px] left-0 not-italic text-[7px] text-white top-[-0.5px] whitespace-nowrap">Купить</p>
    </div>
  );
}

function Container5() {
  return (
    <div className="absolute bg-[#3b82f6] content-stretch flex flex-col h-[20px] items-start left-[10px] pt-[5px] px-[9px] rounded-[4px] top-0 w-[43px]" data-name="Container">
      <Paragraph3 />
    </div>
  );
}

function Paragraph4() {
  return (
    <div className="h-[9px] relative shrink-0 w-full" data-name="Paragraph">
      <p className="absolute font-['Inter:Regular',sans-serif] font-normal leading-[9px] left-0 not-italic text-[#8e9199] text-[6px] top-[0.5px] whitespace-nowrap">Email</p>
    </div>
  );
}

function Container6() {
  return (
    <div className="absolute bg-[#f7f8fc] content-stretch flex flex-col h-[18px] items-start left-0 pb-[2px] pt-[3px] px-[5px] rounded-[3px] top-[24px] w-[30px]" data-name="Container">
      <div aria-hidden="true" className="absolute border border-[#d1d3db] border-solid inset-0 pointer-events-none rounded-[3px]" />
      <Paragraph4 />
    </div>
  );
}

function ImageWithFallback() {
  return (
    <div className="h-[37px] relative rounded-[2px] shrink-0 w-full" data-name="ImageWithFallback">
      <img alt="" className="absolute inset-0 max-w-none object-cover pointer-events-none rounded-[2px] size-full" src={imgImageWithFallback} />
    </div>
  );
}

function Paragraph5() {
  return (
    <div className="h-[9px] relative shrink-0 w-full" data-name="Paragraph">
      <p className="absolute font-['Inter:Regular',sans-serif] font-normal leading-[9px] left-0 not-italic text-[#364146] text-[6px] top-[0.5px] whitespace-nowrap">Товар</p>
    </div>
  );
}

function Container7() {
  return (
    <div className="absolute bg-[#f7f8fc] content-stretch flex flex-col gap-px h-[60px] items-start left-[10px] pt-[4px] px-[4px] rounded-[5px] top-[47px] w-[102px]" data-name="Container">
      <ImageWithFallback />
      <Paragraph5 />
    </div>
  );
}

function Container4() {
  return (
    <div className="h-[211px] relative shrink-0 w-full" data-name="Container">
      <Container5 />
      <Container6 />
      <Container7 />
    </div>
  );
}

function Lesson5Quiz1VariantA() {
  return (
    <div className="absolute bg-white content-stretch flex flex-col h-[231px] items-start left-0 pt-[10px] px-[10px] rounded-[14.99px] top-0 w-[186px]" data-name="Lesson5Quiz1VariantA">
      <Container4 />
    </div>
  );
}

function Container3() {
  return (
    <div className="h-[231px] relative shrink-0 w-[207.297px]" data-name="Container">
      <div className="bg-clip-padding border-0 border-[transparent] border-solid relative size-full">
        <Paragraph2 />
        <Lesson5Quiz1VariantA />
      </div>
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
    <div className="absolute h-[11px] left-0 top-0 w-[166px]" data-name="Paragraph">
      <p className="absolute font-['Inter:Regular',sans-serif] font-normal leading-[11px] left-0 not-italic text-[#8e9199] text-[7px] top-[-0.5px] whitespace-nowrap">Buttons</p>
    </div>
  );
}

function Paragraph8() {
  return (
    <div className="h-[13px] relative shrink-0 w-full" data-name="Paragraph">
      <p className="absolute font-['Inter:Regular',sans-serif] font-normal leading-[13px] left-0 not-italic text-[9px] text-white top-[-0.5px] whitespace-nowrap">Купить</p>
    </div>
  );
}

function Container11() {
  return (
    <div className="absolute bg-[#3b82f6] content-stretch flex flex-col h-[25px] items-start left-0 pt-[6px] px-[12px] rounded-[4px] top-[9.5px] w-[54px]" data-name="Container">
      <Paragraph8 />
    </div>
  );
}

function Container10() {
  return (
    <div className="h-[39px] relative shrink-0 w-[166px]" data-name="Container">
      <div className="bg-clip-padding border-0 border-[transparent] border-solid relative size-full">
        <Paragraph7 />
        <Container11 />
      </div>
    </div>
  );
}

function Paragraph9() {
  return (
    <div className="absolute h-[11px] left-0 top-0 w-[166px]" data-name="Paragraph">
      <p className="absolute font-['Inter:Regular',sans-serif] font-normal leading-[11px] left-0 not-italic text-[#8e9199] text-[7px] top-[-0.5px] whitespace-nowrap">Inputs</p>
    </div>
  );
}

function Paragraph10() {
  return (
    <div className="h-[11px] relative shrink-0 w-full" data-name="Paragraph">
      <p className="absolute font-['Inter:Regular',sans-serif] font-normal leading-[11px] left-0 not-italic text-[#8e9199] text-[7px] top-[-0.5px] whitespace-nowrap">Email</p>
    </div>
  );
}

function Container13() {
  return (
    <div className="absolute bg-[#f7f8fc] content-stretch flex flex-col h-[23px] items-start left-0 pb-[2px] pt-[6px] px-[7px] rounded-[4px] top-[9.5px] w-[39px]" data-name="Container">
      <div aria-hidden="true" className="absolute border border-[#d1d3db] border-solid inset-0 pointer-events-none rounded-[4px]" />
      <Paragraph10 />
    </div>
  );
}

function Container12() {
  return (
    <div className="h-[37px] relative shrink-0 w-[166px]" data-name="Container">
      <div className="bg-clip-padding border-0 border-[transparent] border-solid relative size-full">
        <Paragraph9 />
        <Container13 />
      </div>
    </div>
  );
}

function Paragraph11() {
  return (
    <div className="absolute h-[11px] left-0 top-0 w-[166px]" data-name="Paragraph">
      <p className="absolute font-['Inter:Regular',sans-serif] font-normal leading-[11px] left-0 not-italic text-[#8e9199] text-[7px] top-[-0.5px] whitespace-nowrap">Cards</p>
    </div>
  );
}

function ImageWithFallback1() {
  return (
    <div className="h-[37px] relative rounded-[2px] shrink-0 w-full" data-name="ImageWithFallback">
      <img alt="" className="absolute inset-0 max-w-none object-cover pointer-events-none rounded-[2px] size-full" src={imgImageWithFallback1} />
    </div>
  );
}

function Paragraph12() {
  return (
    <div className="h-[11px] relative shrink-0 w-full" data-name="Paragraph">
      <p className="absolute font-['Inter:Regular',sans-serif] font-normal leading-[11px] left-0 not-italic text-[#364146] text-[7px] top-[-0.5px] whitespace-nowrap">Товар</p>
    </div>
  );
}

function Container15() {
  return (
    <div className="absolute bg-[#f7f8fc] content-stretch flex flex-col gap-[3px] h-[63px] items-start left-0 pt-[6px] px-[4px] rounded-[4px] top-[9.5px] w-[78px]" data-name="Container">
      <ImageWithFallback1 />
      <Paragraph12 />
    </div>
  );
}

function Container14() {
  return (
    <div className="h-[77px] relative shrink-0 w-[166px]" data-name="Container">
      <div className="bg-clip-padding border-0 border-[transparent] border-solid relative size-full">
        <Paragraph11 />
        <Container15 />
      </div>
    </div>
  );
}

function Container9() {
  return (
    <div className="content-stretch flex flex-col gap-[9px] h-[211px] items-start justify-center py-[28px] relative shrink-0 w-full" data-name="Container">
      <Container10 />
      <Container12 />
      <Container14 />
    </div>
  );
}

function Lesson5Quiz1VariantB() {
  return (
    <div className="absolute bg-white content-stretch flex flex-col h-[231px] items-start left-0 pt-[10px] px-[10px] rounded-[14.99px] top-0 w-[186px]" data-name="Lesson5Quiz1VariantB">
      <Container9 />
    </div>
  );
}

function Container8() {
  return (
    <div className="h-[231px] relative shrink-0 w-[206.945px]" data-name="Container">
      <div className="bg-clip-padding border-0 border-[transparent] border-solid relative size-full">
        <Paragraph6 />
        <Lesson5Quiz1VariantB />
      </div>
    </div>
  );
}

function Container2() {
  return (
    <div className="content-stretch flex gap-[40px] h-[231px] items-start relative shrink-0 w-full" data-name="Container">
      <Container3 />
      <Container8 />
    </div>
  );
}

function Container1() {
  return (
    <div className="absolute content-stretch flex flex-col gap-[24px] h-[269px] items-start left-0 top-[90px] w-[1280px]" data-name="Container">
      <Paragraph1 />
      <Container2 />
    </div>
  );
}

function Paragraph13() {
  return (
    <div className="h-[14px] relative shrink-0 w-full" data-name="Paragraph">
      <p className="absolute font-['Inter:Regular',sans-serif] font-normal leading-[14px] left-0 not-italic text-[#8e9199] text-[11px] top-[0.5px] tracking-[-0.14px] whitespace-nowrap">2. Где UI Kit удобнее использовать?</p>
    </div>
  );
}

function Paragraph14() {
  return (
    <div className="absolute h-[21px] left-0 top-[8px] w-[9.297px]" data-name="Paragraph">
      <p className="absolute font-['Inter:Regular',sans-serif] font-normal leading-[21px] left-0 not-italic text-[#364146] text-[14px] top-0 tracking-[-0.17px] whitespace-nowrap">A</p>
    </div>
  );
}

function ImageWithFallback2() {
  return (
    <div className="h-[37px] relative rounded-[2px] shrink-0 w-full" data-name="ImageWithFallback">
      <img alt="" className="absolute inset-0 max-w-none object-cover pointer-events-none rounded-[2px] size-full" src={imgImageWithFallback2} />
    </div>
  );
}

function Paragraph15() {
  return (
    <div className="h-[11px] relative shrink-0 w-full" data-name="Paragraph">
      <p className="absolute font-['Inter:Regular',sans-serif] font-normal leading-[11px] left-0 not-italic text-[#364146] text-[7px] top-[-0.5px] whitespace-nowrap">Товар</p>
    </div>
  );
}

function Container20() {
  return (
    <div className="bg-[#f7f8fc] h-[63px] relative rounded-[4px] shrink-0 w-[166px]" data-name="Container">
      <div className="bg-clip-padding border-0 border-[transparent] border-solid content-stretch flex flex-col gap-[3px] items-start pt-[6px] px-[4px] relative size-full">
        <ImageWithFallback2 />
        <Paragraph15 />
      </div>
    </div>
  );
}

function ImageWithFallback3() {
  return (
    <div className="h-[37px] relative rounded-[2px] shrink-0 w-full" data-name="ImageWithFallback">
      <img alt="" className="absolute inset-0 max-w-none object-cover pointer-events-none rounded-[2px] size-full" src={imgImageWithFallback3} />
    </div>
  );
}

function Paragraph16() {
  return (
    <div className="h-[11px] relative shrink-0 w-full" data-name="Paragraph">
      <p className="absolute font-['Inter:Regular',sans-serif] font-normal leading-[11px] left-0 not-italic text-[#364146] text-[7px] top-[-0.5px] whitespace-nowrap">Товар</p>
    </div>
  );
}

function Container21() {
  return (
    <div className="bg-[#f7f8fc] h-[63px] relative rounded-[4px] shrink-0 w-[166px]" data-name="Container">
      <div className="bg-clip-padding border-0 border-[transparent] border-solid content-stretch flex flex-col gap-[3px] items-start pt-[6px] px-[4px] relative size-full">
        <ImageWithFallback3 />
        <Paragraph16 />
      </div>
    </div>
  );
}

function Container19() {
  return (
    <div className="content-stretch flex flex-col gap-[6px] h-[211px] items-start justify-center py-[36px] relative shrink-0 w-full" data-name="Container">
      <Container20 />
      <Container21 />
    </div>
  );
}

function Lesson5Quiz2VariantA() {
  return (
    <div className="absolute bg-white content-stretch flex flex-col h-[231px] items-start left-0 pt-[10px] px-[10px] rounded-[14.99px] top-0 w-[186px]" data-name="Lesson5Quiz2VariantA">
      <Container19 />
    </div>
  );
}

function Container18() {
  return (
    <div className="h-[231px] relative shrink-0 w-[207.297px]" data-name="Container">
      <div className="bg-clip-padding border-0 border-[transparent] border-solid relative size-full">
        <Paragraph14 />
        <Lesson5Quiz2VariantA />
      </div>
    </div>
  );
}

function Paragraph17() {
  return (
    <div className="absolute h-[21px] left-0 top-[8px] w-[8.945px]" data-name="Paragraph">
      <p className="absolute font-['Inter:Regular',sans-serif] font-normal leading-[21px] left-0 not-italic text-[#364146] text-[14px] top-0 tracking-[-0.17px] whitespace-nowrap">B</p>
    </div>
  );
}

function Paragraph18() {
  return (
    <div className="h-[11px] relative shrink-0 w-full" data-name="Paragraph">
      <p className="absolute font-['Inter:Regular',sans-serif] font-normal leading-[11px] left-0 not-italic text-[7px] text-white top-[-0.5px] whitespace-nowrap">Component</p>
    </div>
  );
}

function Container25() {
  return (
    <div className="bg-[#3b82f6] h-[20px] relative rounded-[3px] shrink-0 w-full" data-name="Container">
      <div className="content-stretch flex flex-col items-start pt-[5px] px-[9px] relative size-full">
        <Paragraph18 />
      </div>
    </div>
  );
}

function Container24() {
  return (
    <div className="bg-[#f7f8fc] h-[38px] relative rounded-[4px] shrink-0 w-[166px]" data-name="Container">
      <div aria-hidden="true" className="absolute border-2 border-[#3b82f6] border-solid inset-0 pointer-events-none rounded-[4px]" />
      <div className="bg-clip-padding border-0 border-[transparent] border-solid content-stretch flex flex-col items-start pb-[2px] pt-[6px] px-[9px] relative size-full">
        <Container25 />
      </div>
    </div>
  );
}

function Paragraph19() {
  return (
    <div className="h-[9px] relative shrink-0 w-full" data-name="Paragraph">
      <p className="absolute font-['Inter:Regular',sans-serif] font-normal leading-[9px] left-0 not-italic text-[6px] text-white top-[0.5px] whitespace-nowrap">Primary</p>
    </div>
  );
}

function Container27() {
  return (
    <div className="bg-[#3b82f6] h-[18px] relative rounded-[3px] shrink-0 w-[22.5px]" data-name="Container">
      <div className="bg-clip-padding border-0 border-[transparent] border-solid content-stretch flex flex-col items-start pt-[5px] px-[4px] relative size-full">
        <Paragraph19 />
      </div>
    </div>
  );
}

function Paragraph20() {
  return (
    <div className="h-[9px] relative shrink-0 w-full" data-name="Paragraph">
      <p className="absolute font-['Inter:Regular',sans-serif] font-normal leading-[9px] left-0 not-italic text-[#3b82f6] text-[6px] top-[0.5px] whitespace-nowrap">Secondary</p>
    </div>
  );
}

function Container28() {
  return (
    <div className="bg-[#f7f8fc] h-[18px] relative rounded-[3px] shrink-0 w-[30.367px]" data-name="Container">
      <div aria-hidden="true" className="absolute border border-[#3b82f6] border-solid inset-0 pointer-events-none rounded-[3px]" />
      <div className="bg-clip-padding border-0 border-[transparent] border-solid content-stretch flex flex-col items-start pb-[2px] pt-[5px] px-[7px] relative size-full">
        <Paragraph20 />
      </div>
    </div>
  );
}

function Container26() {
  return (
    <div className="h-[18px] relative shrink-0 w-[166px]" data-name="Container">
      <div className="bg-clip-padding border-0 border-[transparent] border-solid content-stretch flex gap-[3px] items-start relative size-full">
        <Container27 />
        <Container28 />
      </div>
    </div>
  );
}

function Container23() {
  return (
    <div className="content-stretch flex flex-col gap-[9px] h-[211px] items-start justify-center py-[50px] relative shrink-0 w-full" data-name="Container">
      <Container24 />
      <Container26 />
    </div>
  );
}

function Lesson5Quiz2VariantB() {
  return (
    <div className="absolute bg-white content-stretch flex flex-col h-[231px] items-start left-0 pt-[10px] px-[10px] rounded-[14.99px] top-0 w-[186px]" data-name="Lesson5Quiz2VariantB">
      <Container23 />
    </div>
  );
}

function Container22() {
  return (
    <div className="h-[231px] relative shrink-0 w-[206.945px]" data-name="Container">
      <div className="bg-clip-padding border-0 border-[transparent] border-solid relative size-full">
        <Paragraph17 />
        <Lesson5Quiz2VariantB />
      </div>
    </div>
  );
}

function Container17() {
  return (
    <div className="content-stretch flex gap-[40px] h-[231px] items-start relative shrink-0 w-full" data-name="Container">
      <Container18 />
      <Container22 />
    </div>
  );
}

function Container16() {
  return (
    <div className="absolute content-stretch flex flex-col gap-[24px] h-[269px] items-start left-0 top-[407px] w-[1280px]" data-name="Container">
      <Paragraph13 />
      <Container17 />
    </div>
  );
}

function Paragraph21() {
  return (
    <div className="h-[14px] relative shrink-0 w-full" data-name="Paragraph">
      <p className="absolute font-['Inter:Regular',sans-serif] font-normal leading-[14px] left-0 not-italic text-[#8e9199] text-[11px] top-[0.5px] tracking-[-0.14px] whitespace-nowrap">3. Где UI Kit легче поддерживать?</p>
    </div>
  );
}

function Paragraph22() {
  return (
    <div className="absolute h-[21px] left-0 top-[8px] w-[9.297px]" data-name="Paragraph">
      <p className="absolute font-['Inter:Regular',sans-serif] font-normal leading-[21px] left-0 not-italic text-[#364146] text-[14px] top-0 tracking-[-0.17px] whitespace-nowrap">A</p>
    </div>
  );
}

function Paragraph23() {
  return (
    <div className="h-[13px] relative shrink-0 w-full" data-name="Paragraph">
      <p className="absolute font-['Inter:Regular',sans-serif] font-normal leading-[13px] left-0 not-italic text-[9px] text-white top-[-0.5px] whitespace-nowrap">Купить</p>
    </div>
  );
}

function Container33() {
  return (
    <div className="bg-[#3b82f6] h-[25px] relative rounded-[4px] shrink-0 w-[166px]" data-name="Container">
      <div className="bg-clip-padding border-0 border-[transparent] border-solid content-stretch flex flex-col items-start pt-[6px] px-[12px] relative size-full">
        <Paragraph23 />
      </div>
    </div>
  );
}

function Paragraph24() {
  return (
    <div className="h-[15px] relative shrink-0 w-full" data-name="Paragraph">
      <p className="absolute font-['Inter:Regular',sans-serif] font-normal leading-[15px] left-0 not-italic text-[10px] text-white top-0 whitespace-nowrap">Заказать</p>
    </div>
  );
}

function Container34() {
  return (
    <div className="bg-[#22c55e] h-[30px] relative rounded-[5px] shrink-0 w-[166px]" data-name="Container">
      <div className="bg-clip-padding border-0 border-[transparent] border-solid content-stretch flex flex-col items-start pt-[7px] px-[10px] relative size-full">
        <Paragraph24 />
      </div>
    </div>
  );
}

function Paragraph25() {
  return (
    <div className="h-[11px] relative shrink-0 w-full" data-name="Paragraph">
      <p className="absolute font-['Inter:Regular',sans-serif] font-normal leading-[11px] left-0 not-italic text-[7px] text-white top-[-0.5px] whitespace-nowrap">Смотреть</p>
    </div>
  );
}

function Container35() {
  return (
    <div className="bg-[#8b5cf6] h-[20px] relative rounded-[3px] shrink-0 w-[166px]" data-name="Container">
      <div className="bg-clip-padding border-0 border-[transparent] border-solid content-stretch flex flex-col items-start pt-[5px] px-[9px] relative size-full">
        <Paragraph25 />
      </div>
    </div>
  );
}

function Container32() {
  return (
    <div className="content-stretch flex flex-col gap-[5px] h-[211px] items-start justify-center py-[46px] relative shrink-0 w-full" data-name="Container">
      <Container33 />
      <Container34 />
      <Container35 />
    </div>
  );
}

function Lesson5Quiz3VariantA() {
  return (
    <div className="absolute bg-white content-stretch flex flex-col h-[231px] items-start left-0 pt-[10px] px-[10px] rounded-[14.99px] top-0 w-[186px]" data-name="Lesson5Quiz3VariantA">
      <Container32 />
    </div>
  );
}

function Container31() {
  return (
    <div className="h-[231px] relative shrink-0 w-[207.297px]" data-name="Container">
      <div className="bg-clip-padding border-0 border-[transparent] border-solid relative size-full">
        <Paragraph22 />
        <Lesson5Quiz3VariantA />
      </div>
    </div>
  );
}

function Paragraph26() {
  return (
    <div className="absolute h-[21px] left-0 top-[8px] w-[8.945px]" data-name="Paragraph">
      <p className="absolute font-['Inter:Regular',sans-serif] font-normal leading-[21px] left-0 not-italic text-[#364146] text-[14px] top-0 tracking-[-0.17px] whitespace-nowrap">B</p>
    </div>
  );
}

function Paragraph27() {
  return (
    <div className="h-[11px] relative shrink-0 w-full" data-name="Paragraph">
      <p className="absolute font-['Inter:Regular',sans-serif] font-normal leading-[11px] left-0 not-italic text-[#8e9199] text-[7px] top-[-0.5px] whitespace-nowrap">Button variants:</p>
    </div>
  );
}

function Paragraph28() {
  return (
    <div className="h-[13px] relative shrink-0 w-full" data-name="Paragraph">
      <p className="absolute font-['Inter:Regular',sans-serif] font-normal leading-[13px] left-0 not-italic text-[9px] text-white top-[-0.5px] whitespace-nowrap">Primary</p>
    </div>
  );
}

function Container40() {
  return (
    <div className="bg-[#3b82f6] h-[25px] relative rounded-[4px] shrink-0 w-[156px]" data-name="Container">
      <div className="bg-clip-padding border-0 border-[transparent] border-solid content-stretch flex flex-col items-start pt-[6px] px-[12px] relative size-full">
        <Paragraph28 />
      </div>
    </div>
  );
}

function Paragraph29() {
  return (
    <div className="h-[13px] relative shrink-0 w-full" data-name="Paragraph">
      <p className="absolute font-['Inter:Regular',sans-serif] font-normal leading-[13px] left-0 not-italic text-[#3b82f6] text-[9px] top-[-0.5px] whitespace-nowrap">Secondary</p>
    </div>
  );
}

function Container41() {
  return (
    <div className="bg-[#f7f8fc] flex-[1_0_0] min-h-px min-w-px relative rounded-[4px] w-[156px]" data-name="Container">
      <div aria-hidden="true" className="absolute border border-[#3b82f6] border-solid inset-0 pointer-events-none rounded-[4px]" />
      <div className="bg-clip-padding border-0 border-[transparent] border-solid content-stretch flex flex-col items-start pb-[2px] pt-[7px] px-[9px] relative size-full">
        <Paragraph29 />
      </div>
    </div>
  );
}

function Container39() {
  return (
    <div className="content-stretch flex flex-col gap-[5px] h-[58px] items-start relative shrink-0 w-full" data-name="Container">
      <Container40 />
      <Container41 />
    </div>
  );
}

function Container38() {
  return (
    <div className="bg-[#f7f8fc] h-[89px] relative rounded-[4px] shrink-0 w-[166px]" data-name="Container">
      <div aria-hidden="true" className="absolute border border-[#d1d3db] border-solid inset-0 pointer-events-none rounded-[4px]" />
      <div className="bg-clip-padding border-0 border-[transparent] border-solid content-stretch flex flex-col gap-[5px] items-start pb-[2px] pt-[7px] px-[7px] relative size-full">
        <Paragraph27 />
        <Container39 />
      </div>
    </div>
  );
}

function Container37() {
  return (
    <div className="content-stretch flex flex-col h-[211px] items-start justify-center py-[45px] relative shrink-0 w-full" data-name="Container">
      <Container38 />
    </div>
  );
}

function Lesson5Quiz3VariantB() {
  return (
    <div className="absolute bg-white content-stretch flex flex-col h-[231px] items-start left-0 pt-[10px] px-[10px] rounded-[14.99px] top-0 w-[186px]" data-name="Lesson5Quiz3VariantB">
      <Container37 />
    </div>
  );
}

function Container36() {
  return (
    <div className="h-[231px] relative shrink-0 w-[206.945px]" data-name="Container">
      <div className="bg-clip-padding border-0 border-[transparent] border-solid relative size-full">
        <Paragraph26 />
        <Lesson5Quiz3VariantB />
      </div>
    </div>
  );
}

function Container30() {
  return (
    <div className="content-stretch flex gap-[40px] h-[231px] items-start relative shrink-0 w-full" data-name="Container">
      <Container31 />
      <Container36 />
    </div>
  );
}

function Container29() {
  return (
    <div className="absolute content-stretch flex flex-col gap-[24px] h-[269px] items-start left-0 top-[724px] w-[1280px]" data-name="Container">
      <Paragraph21 />
      <Container30 />
    </div>
  );
}

function Container() {
  return (
    <div className="absolute h-[993px] left-0 top-[129px] w-[1280px]" data-name="Container">
      <Heading1 />
      <Paragraph />
      <Container1 />
      <Container16 />
      <Container29 />
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

function Paragraph30() {
  return (
    <div className="absolute content-stretch flex h-[15px] items-start left-0 top-[35px] w-[1280px]" data-name="Paragraph">
      <p className="flex-[1_0_0] font-['Inter:Regular',sans-serif] font-normal leading-[15px] min-h-px min-w-px not-italic relative text-[#8e9199] text-[12px] tracking-[-0.15px]">Выберите один правильный ответ</p>
    </div>
  );
}

function Paragraph31() {
  return (
    <div className="h-[14px] relative shrink-0 w-full" data-name="Paragraph">
      <p className="absolute font-['Inter:Regular',sans-serif] font-normal leading-[14px] left-0 not-italic text-[#8e9199] text-[11px] top-[0.5px] tracking-[-0.14px] whitespace-nowrap">4. С чего начинается создание UI Kit?</p>
    </div>
  );
}

function Paragraph32() {
  return (
    <div className="h-[9px] relative shrink-0 w-[166px]" data-name="Paragraph">
      <div className="bg-clip-padding border-0 border-[transparent] border-solid relative size-full">
        <p className="absolute font-['Inter:Regular',sans-serif] font-normal leading-[9px] left-0 not-italic text-[#8e9199] text-[6px] top-[-0.5px] whitespace-nowrap">Базовые элементы:</p>
      </div>
    </div>
  );
}

function Paragraph33() {
  return (
    <div className="h-[9px] relative shrink-0 w-full" data-name="Paragraph">
      <p className="absolute font-['Inter:Regular',sans-serif] font-normal leading-[9px] left-0 not-italic text-[6px] text-white top-[-0.5px] whitespace-nowrap">Купить</p>
    </div>
  );
}

function Container46() {
  return (
    <div className="bg-[#3b82f6] h-[17px] relative rounded-[4px] shrink-0 w-[36.328px]" data-name="Container">
      <div className="bg-clip-padding border-0 border-[transparent] border-solid content-stretch flex flex-col items-start pt-[4px] px-[8px] relative size-full">
        <Paragraph33 />
      </div>
    </div>
  );
}

function Paragraph34() {
  return (
    <div className="h-[7.5px] relative shrink-0 w-full" data-name="Paragraph">
      <p className="absolute font-['Inter:Regular',sans-serif] font-normal leading-[7.5px] left-0 not-italic text-[#8e9199] text-[5px] top-[-0.5px] whitespace-nowrap">Email</p>
    </div>
  );
}

function Container47() {
  return (
    <div className="bg-[#f7f8fc] h-[15.5px] relative rounded-[4px] shrink-0 w-[26.531px]" data-name="Container">
      <div aria-hidden="true" className="absolute border border-[#d1d3db] border-solid inset-0 pointer-events-none rounded-[4px]" />
      <div className="bg-clip-padding border-0 border-[transparent] border-solid content-stretch flex flex-col items-start pb-px pt-[4px] px-[7px] relative size-full">
        <Paragraph34 />
      </div>
    </div>
  );
}

function ImageWithFallback4() {
  return (
    <div className="h-[20px] relative rounded-[2px] shrink-0 w-full" data-name="ImageWithFallback">
      <img alt="" className="absolute inset-0 max-w-none object-cover pointer-events-none rounded-[2px] size-full" src={imgImageWithFallback4} />
    </div>
  );
}

function Paragraph35() {
  return (
    <div className="h-[6px] relative shrink-0 w-full" data-name="Paragraph">
      <p className="absolute font-['Inter:Regular',sans-serif] font-normal leading-[6px] left-0 not-italic text-[#364146] text-[4px] top-[0.5px] whitespace-nowrap">Товар</p>
    </div>
  );
}

function Container48() {
  return (
    <div className="bg-[#f7f8fc] h-[35px] relative rounded-[4px] shrink-0 w-[68px]" data-name="Container">
      <div className="bg-clip-padding border-0 border-[transparent] border-solid content-stretch flex flex-col gap-px items-start pt-[4px] px-[4px] relative size-full">
        <ImageWithFallback4 />
        <Paragraph35 />
      </div>
    </div>
  );
}

function Container45() {
  return (
    <div className="content-stretch flex flex-col gap-[6px] h-[211px] items-start justify-center py-[58.25px] relative shrink-0 w-full" data-name="Container">
      <Paragraph32 />
      <Container46 />
      <Container47 />
      <Container48 />
    </div>
  );
}

function Lesson5Quiz() {
  return (
    <div className="bg-white flex-[1_0_0] min-h-px min-w-px relative rounded-[14.99px] w-[186px]" data-name="Lesson5Quiz4">
      <div className="bg-clip-padding border-0 border-[transparent] border-solid content-stretch flex flex-col items-start pt-[10px] px-[10px] relative size-full">
        <Container45 />
      </div>
    </div>
  );
}

function Paragraph36() {
  return (
    <div className="h-[15px] relative shrink-0 w-[1280px]" data-name="Paragraph">
      <div className="bg-clip-padding border-0 border-[transparent] border-solid relative size-full">
        <p className="absolute font-['Inter:Regular',sans-serif] font-normal leading-[15px] left-0 not-italic text-[#364146] text-[10px] top-[0.5px] tracking-[-0.13px] whitespace-nowrap">• С базовых элементов</p>
      </div>
    </div>
  );
}

function Paragraph37() {
  return (
    <div className="h-[15px] relative shrink-0 w-[1280px]" data-name="Paragraph">
      <div className="bg-clip-padding border-0 border-[transparent] border-solid relative size-full">
        <p className="absolute font-['Inter:Regular',sans-serif] font-normal leading-[15px] left-0 not-italic text-[#364146] text-[10px] top-[0.5px] tracking-[-0.13px] whitespace-nowrap">• С цвета</p>
      </div>
    </div>
  );
}

function Paragraph38() {
  return (
    <div className="flex-[1_0_0] min-h-px min-w-px relative w-[1280px]" data-name="Paragraph">
      <div className="bg-clip-padding border-0 border-[transparent] border-solid relative size-full">
        <p className="absolute font-['Inter:Regular',sans-serif] font-normal leading-[15px] left-0 not-italic text-[#364146] text-[10px] top-[0.5px] tracking-[-0.13px] whitespace-nowrap">• С анимации</p>
      </div>
    </div>
  );
}

function Container49() {
  return (
    <div className="h-[61px] relative shrink-0 w-[1280px]" data-name="Container">
      <div className="bg-clip-padding border-0 border-[transparent] border-solid content-stretch flex flex-col gap-[8px] items-start relative size-full">
        <Paragraph36 />
        <Paragraph37 />
        <Paragraph38 />
      </div>
    </div>
  );
}

function Container44() {
  return (
    <div className="content-stretch flex flex-col gap-[16px] h-[308px] items-start relative shrink-0 w-full" data-name="Container">
      <Lesson5Quiz />
      <Container49 />
    </div>
  );
}

function Container43() {
  return (
    <div className="absolute content-stretch flex flex-col gap-[24px] h-[346px] items-start left-0 top-[90px] w-[1280px]" data-name="Container">
      <Paragraph31 />
      <Container44 />
    </div>
  );
}

function Paragraph39() {
  return (
    <div className="h-[14px] relative shrink-0 w-full" data-name="Paragraph">
      <p className="absolute font-['Inter:Regular',sans-serif] font-normal leading-[14px] left-0 not-italic text-[#8e9199] text-[11px] top-[0.5px] tracking-[-0.14px] whitespace-nowrap">5. Что важно при создании UI Kit?</p>
    </div>
  );
}

function Paragraph40() {
  return (
    <div className="h-[10.5px] relative shrink-0 w-full" data-name="Paragraph">
      <p className="absolute font-['Inter:Regular',sans-serif] font-normal leading-[10.5px] left-0 not-italic text-[7px] text-white top-0 whitespace-nowrap">Купить</p>
    </div>
  );
}

function Container53() {
  return (
    <div className="bg-[#3b82f6] h-[22.5px] relative rounded-[6px] shrink-0 w-[166px]" data-name="Container">
      <div className="bg-clip-padding border-0 border-[transparent] border-solid content-stretch flex flex-col items-start pt-[6px] px-[12px] relative size-full">
        <Paragraph40 />
      </div>
    </div>
  );
}

function Paragraph41() {
  return (
    <div className="h-[10.5px] relative shrink-0 w-full" data-name="Paragraph">
      <p className="absolute font-['Inter:Regular',sans-serif] font-normal leading-[10.5px] left-0 not-italic text-[7px] text-white top-0 whitespace-nowrap">Заказать</p>
    </div>
  );
}

function Container54() {
  return (
    <div className="bg-[#3b82f6] h-[22.5px] relative rounded-[6px] shrink-0 w-[166px]" data-name="Container">
      <div className="bg-clip-padding border-0 border-[transparent] border-solid content-stretch flex flex-col items-start pt-[6px] px-[12px] relative size-full">
        <Paragraph41 />
      </div>
    </div>
  );
}

function Container52() {
  return (
    <div className="content-stretch flex flex-col gap-[6px] h-[211px] items-start justify-center py-[80px] relative shrink-0 w-full" data-name="Container">
      <Container53 />
      <Container54 />
    </div>
  );
}

function Lesson5Quiz1() {
  return (
    <div className="bg-white flex-[1_0_0] min-h-px min-w-px relative rounded-[14.99px] w-[186px]" data-name="Lesson5Quiz5">
      <div className="bg-clip-padding border-0 border-[transparent] border-solid content-stretch flex flex-col items-start pt-[10px] px-[10px] relative size-full">
        <Container52 />
      </div>
    </div>
  );
}

function Paragraph42() {
  return (
    <div className="h-[15px] relative shrink-0 w-[1280px]" data-name="Paragraph">
      <div className="bg-clip-padding border-0 border-[transparent] border-solid relative size-full">
        <p className="absolute font-['Inter:Regular',sans-serif] font-normal leading-[15px] left-0 not-italic text-[#364146] text-[10px] top-[0.5px] tracking-[-0.13px] whitespace-nowrap">• Консистентность</p>
      </div>
    </div>
  );
}

function Paragraph43() {
  return (
    <div className="h-[15px] relative shrink-0 w-[1280px]" data-name="Paragraph">
      <div className="bg-clip-padding border-0 border-[transparent] border-solid relative size-full">
        <p className="absolute font-['Inter:Regular',sans-serif] font-normal leading-[15px] left-0 not-italic text-[#364146] text-[10px] top-[0.5px] tracking-[-0.13px] whitespace-nowrap">• Разные стили</p>
      </div>
    </div>
  );
}

function Paragraph44() {
  return (
    <div className="flex-[1_0_0] min-h-px min-w-px relative w-[1280px]" data-name="Paragraph">
      <div className="bg-clip-padding border-0 border-[transparent] border-solid relative size-full">
        <p className="absolute font-['Inter:Regular',sans-serif] font-normal leading-[15px] left-0 not-italic text-[#364146] text-[10px] top-[0.5px] tracking-[-0.13px] whitespace-nowrap">• Много цветов</p>
      </div>
    </div>
  );
}

function Container55() {
  return (
    <div className="h-[61px] relative shrink-0 w-[1280px]" data-name="Container">
      <div className="bg-clip-padding border-0 border-[transparent] border-solid content-stretch flex flex-col gap-[8px] items-start relative size-full">
        <Paragraph42 />
        <Paragraph43 />
        <Paragraph44 />
      </div>
    </div>
  );
}

function Container51() {
  return (
    <div className="content-stretch flex flex-col gap-[16px] h-[308px] items-start relative shrink-0 w-full" data-name="Container">
      <Lesson5Quiz1 />
      <Container55 />
    </div>
  );
}

function Container50() {
  return (
    <div className="absolute content-stretch flex flex-col gap-[24px] h-[346px] items-start left-0 top-[484px] w-[1280px]" data-name="Container">
      <Paragraph39 />
      <Container51 />
    </div>
  );
}

function Paragraph45() {
  return (
    <div className="h-[14px] relative shrink-0 w-full" data-name="Paragraph">
      <p className="absolute font-['Inter:Regular',sans-serif] font-normal leading-[14px] left-0 not-italic text-[#8e9199] text-[11px] top-[0.5px] tracking-[-0.14px] whitespace-nowrap">6. Зачем нужны уведомления?</p>
    </div>
  );
}

function Paragraph46() {
  return (
    <div className="h-[9px] relative shrink-0 w-full" data-name="Paragraph">
      <p className="absolute font-['Inter:Regular',sans-serif] font-normal leading-[9px] left-0 not-italic text-[#22c55e] text-[6px] top-[-0.5px] whitespace-nowrap">✓ Успешно</p>
    </div>
  );
}

function Container59() {
  return (
    <div className="bg-[#dcfce7] h-[21px] relative rounded-[4px] shrink-0 w-[166px]" data-name="Container">
      <div aria-hidden="true" className="absolute border-[#22c55e] border-l-2 border-solid inset-0 pointer-events-none rounded-[4px]" />
      <div className="bg-clip-padding border-0 border-[transparent] border-solid content-stretch flex flex-col items-start pl-[8px] pr-[6px] pt-[6px] relative size-full">
        <Paragraph46 />
      </div>
    </div>
  );
}

function Paragraph47() {
  return (
    <div className="h-[9px] relative shrink-0 w-full" data-name="Paragraph">
      <p className="absolute font-['Inter:Regular',sans-serif] font-normal leading-[9px] left-0 not-italic text-[#ef4444] text-[6px] top-[-0.5px] whitespace-nowrap">✗ Ошибка</p>
    </div>
  );
}

function Container60() {
  return (
    <div className="bg-[#fee2e2] h-[21px] relative rounded-[4px] shrink-0 w-[166px]" data-name="Container">
      <div aria-hidden="true" className="absolute border-[#ef4444] border-l-2 border-solid inset-0 pointer-events-none rounded-[4px]" />
      <div className="bg-clip-padding border-0 border-[transparent] border-solid content-stretch flex flex-col items-start pl-[8px] pr-[6px] pt-[6px] relative size-full">
        <Paragraph47 />
      </div>
    </div>
  );
}

function Paragraph48() {
  return (
    <div className="h-[9px] relative shrink-0 w-full" data-name="Paragraph">
      <p className="absolute font-['Inter:Regular',sans-serif] font-normal leading-[9px] left-0 not-italic text-[#3b82f6] text-[6px] top-[-0.5px] whitespace-nowrap">ℹ Информация</p>
    </div>
  );
}

function Container61() {
  return (
    <div className="bg-[#dbeafe] h-[21px] relative rounded-[4px] shrink-0 w-[166px]" data-name="Container">
      <div aria-hidden="true" className="absolute border-[#3b82f6] border-l-2 border-solid inset-0 pointer-events-none rounded-[4px]" />
      <div className="bg-clip-padding border-0 border-[transparent] border-solid content-stretch flex flex-col items-start pl-[8px] pr-[6px] pt-[6px] relative size-full">
        <Paragraph48 />
      </div>
    </div>
  );
}

function Container58() {
  return (
    <div className="content-stretch flex flex-col gap-[6px] h-[211px] items-start justify-center py-[68px] relative shrink-0 w-full" data-name="Container">
      <Container59 />
      <Container60 />
      <Container61 />
    </div>
  );
}

function Lesson5Quiz2() {
  return (
    <div className="bg-white flex-[1_0_0] min-h-px min-w-px relative rounded-[14.99px] w-[186px]" data-name="Lesson5Quiz6">
      <div className="bg-clip-padding border-0 border-[transparent] border-solid content-stretch flex flex-col items-start pt-[10px] px-[10px] relative size-full">
        <Container58 />
      </div>
    </div>
  );
}

function Paragraph49() {
  return (
    <div className="h-[15px] relative shrink-0 w-[1280px]" data-name="Paragraph">
      <div className="bg-clip-padding border-0 border-[transparent] border-solid relative size-full">
        <p className="absolute font-['Inter:Regular',sans-serif] font-normal leading-[15px] left-0 not-italic text-[#364146] text-[10px] top-[0.5px] tracking-[-0.13px] whitespace-nowrap">• Обратная связь пользователю</p>
      </div>
    </div>
  );
}

function Paragraph50() {
  return (
    <div className="h-[15px] relative shrink-0 w-[1280px]" data-name="Paragraph">
      <div className="bg-clip-padding border-0 border-[transparent] border-solid relative size-full">
        <p className="absolute font-['Inter:Regular',sans-serif] font-normal leading-[15px] left-0 not-italic text-[#364146] text-[10px] top-[0.5px] tracking-[-0.13px] whitespace-nowrap">• Украшение интерфейса</p>
      </div>
    </div>
  );
}

function Paragraph51() {
  return (
    <div className="flex-[1_0_0] min-h-px min-w-px relative w-[1280px]" data-name="Paragraph">
      <div className="bg-clip-padding border-0 border-[transparent] border-solid relative size-full">
        <p className="absolute font-['Inter:Regular',sans-serif] font-normal leading-[15px] left-0 not-italic text-[#364146] text-[10px] top-[0.5px] tracking-[-0.13px] whitespace-nowrap">• Заполнить пространство</p>
      </div>
    </div>
  );
}

function Container62() {
  return (
    <div className="h-[61px] relative shrink-0 w-[1280px]" data-name="Container">
      <div className="bg-clip-padding border-0 border-[transparent] border-solid content-stretch flex flex-col gap-[8px] items-start relative size-full">
        <Paragraph49 />
        <Paragraph50 />
        <Paragraph51 />
      </div>
    </div>
  );
}

function Container57() {
  return (
    <div className="content-stretch flex flex-col gap-[16px] h-[308px] items-start relative shrink-0 w-full" data-name="Container">
      <Lesson5Quiz2 />
      <Container62 />
    </div>
  );
}

function Container56() {
  return (
    <div className="absolute content-stretch flex flex-col gap-[24px] h-[346px] items-start left-0 top-[878px] w-[1280px]" data-name="Container">
      <Paragraph45 />
      <Container57 />
    </div>
  );
}

function Container42() {
  return (
    <div className="absolute h-[1224px] left-0 top-[1186px] w-[1280px]" data-name="Container">
      <Heading2 />
      <Paragraph30 />
      <Container43 />
      <Container50 />
      <Container56 />
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

function Paragraph52() {
  return (
    <div className="absolute content-stretch flex h-[15px] items-start left-0 top-[35px] w-[1280px]" data-name="Paragraph">
      <p className="flex-[1_0_0] font-['Inter:Regular',sans-serif] font-normal leading-[15px] min-h-px min-w-px not-italic relative text-[#8e9199] text-[12px] tracking-[-0.15px]">Выберите несколько правильных ответов</p>
    </div>
  );
}

function Paragraph53() {
  return (
    <div className="h-[14px] relative shrink-0 w-full" data-name="Paragraph">
      <p className="absolute font-['Inter:Regular',sans-serif] font-normal leading-[14px] left-0 not-italic text-[#8e9199] text-[11px] top-[0.5px] tracking-[-0.14px] whitespace-nowrap">7. Что входит в UI Kit?</p>
    </div>
  );
}

function Paragraph54() {
  return (
    <div className="absolute h-[7.5px] left-0 top-0 w-[166px]" data-name="Paragraph">
      <p className="absolute font-['Inter:Regular',sans-serif] font-normal leading-[7.5px] left-0 not-italic text-[#8e9199] text-[5px] top-[-0.5px] whitespace-nowrap">Buttons</p>
    </div>
  );
}

function Paragraph55() {
  return (
    <div className="h-[7.5px] relative shrink-0 w-full" data-name="Paragraph">
      <p className="absolute font-['Inter:Regular',sans-serif] font-normal leading-[7.5px] left-0 not-italic text-[5px] text-white top-[-0.5px] whitespace-nowrap">Купить</p>
    </div>
  );
}

function Container68() {
  return (
    <div className="absolute bg-[#3b82f6] content-stretch flex flex-col h-[13.5px] items-start left-0 pt-[3px] px-[6px] rounded-[3px] top-[9.5px] w-[28.945px]" data-name="Container">
      <Paragraph55 />
    </div>
  );
}

function Container67() {
  return (
    <div className="h-[23px] relative shrink-0 w-[166px]" data-name="Container">
      <div className="bg-clip-padding border-0 border-[transparent] border-solid relative size-full">
        <Paragraph54 />
        <Container68 />
      </div>
    </div>
  );
}

function Paragraph56() {
  return (
    <div className="absolute h-[7.5px] left-0 top-0 w-[166px]" data-name="Paragraph">
      <p className="absolute font-['Inter:Regular',sans-serif] font-normal leading-[7.5px] left-0 not-italic text-[#8e9199] text-[5px] top-[-0.5px] whitespace-nowrap">Inputs</p>
    </div>
  );
}

function Paragraph57() {
  return (
    <div className="h-[6px] relative shrink-0 w-full" data-name="Paragraph">
      <p className="absolute font-['Inter:Regular',sans-serif] font-normal leading-[6px] left-0 not-italic text-[#8e9199] text-[4px] top-[0.5px] whitespace-nowrap">Email</p>
    </div>
  );
}

function Container70() {
  return (
    <div className="absolute bg-[#f7f8fc] content-stretch flex flex-col h-[12px] items-start left-0 pb-px pt-[3px] px-[5px] rounded-[3px] top-[9.5px] w-[20.023px]" data-name="Container">
      <div aria-hidden="true" className="absolute border border-[#d1d3db] border-solid inset-0 pointer-events-none rounded-[3px]" />
      <Paragraph57 />
    </div>
  );
}

function Container69() {
  return (
    <div className="h-[21.5px] relative shrink-0 w-[166px]" data-name="Container">
      <div className="bg-clip-padding border-0 border-[transparent] border-solid relative size-full">
        <Paragraph56 />
        <Container70 />
      </div>
    </div>
  );
}

function Paragraph58() {
  return (
    <div className="absolute h-[7.5px] left-0 top-0 w-[166px]" data-name="Paragraph">
      <p className="absolute font-['Inter:Regular',sans-serif] font-normal leading-[7.5px] left-0 not-italic text-[#8e9199] text-[5px] top-[-0.5px] whitespace-nowrap">Cards</p>
    </div>
  );
}

function ImageWithFallback5() {
  return (
    <div className="h-[18px] relative rounded-[1px] shrink-0 w-full" data-name="ImageWithFallback">
      <img alt="" className="absolute inset-0 max-w-none object-cover pointer-events-none rounded-[1px] size-full" src={imgImageWithFallback5} />
    </div>
  );
}

function Paragraph59() {
  return (
    <div className="h-[4.5px] relative shrink-0 w-full" data-name="Paragraph">
      <p className="absolute font-['Inter:Regular',sans-serif] font-normal leading-[4.5px] left-0 not-italic text-[#364146] text-[3px] top-[0.5px] whitespace-nowrap">Товар</p>
    </div>
  );
}

function Container72() {
  return (
    <div className="absolute bg-[#f7f8fc] content-stretch flex flex-col gap-px h-[29.5px] items-start left-0 pt-[3px] px-[3px] rounded-[3px] top-[9.5px] w-[46px]" data-name="Container">
      <ImageWithFallback5 />
      <Paragraph59 />
    </div>
  );
}

function Container71() {
  return (
    <div className="h-[39px] relative shrink-0 w-[166px]" data-name="Container">
      <div className="bg-clip-padding border-0 border-[transparent] border-solid relative size-full">
        <Paragraph58 />
        <Container72 />
      </div>
    </div>
  );
}

function Paragraph60() {
  return (
    <div className="absolute h-[7.5px] left-0 top-0 w-[166px]" data-name="Paragraph">
      <p className="absolute font-['Inter:Regular',sans-serif] font-normal leading-[7.5px] left-0 not-italic text-[#8e9199] text-[5px] top-[-0.5px] whitespace-nowrap">Notifications</p>
    </div>
  );
}

function Paragraph61() {
  return (
    <div className="h-[6px] relative shrink-0 w-full" data-name="Paragraph">
      <p className="absolute font-['Inter:Regular',sans-serif] font-normal leading-[6px] left-0 not-italic text-[#22c55e] text-[4px] top-[0.5px] whitespace-nowrap">Success</p>
    </div>
  );
}

function Container74() {
  return (
    <div className="absolute bg-[#dcfce7] content-stretch flex flex-col h-[12px] items-start left-0 pl-[4px] pr-[3px] pt-[3px] rounded-[3px] top-[9.5px] w-[22.859px]" data-name="Container">
      <div aria-hidden="true" className="absolute border-[#22c55e] border-l border-solid inset-0 pointer-events-none rounded-[3px]" />
      <Paragraph61 />
    </div>
  );
}

function Container73() {
  return (
    <div className="h-[21.5px] relative shrink-0 w-[166px]" data-name="Container">
      <div className="bg-clip-padding border-0 border-[transparent] border-solid relative size-full">
        <Paragraph60 />
        <Container74 />
      </div>
    </div>
  );
}

function Container66() {
  return (
    <div className="content-stretch flex flex-col gap-[4px] h-[211px] items-start justify-center py-[47px] relative shrink-0 w-full" data-name="Container">
      <Container67 />
      <Container69 />
      <Container71 />
      <Container73 />
    </div>
  );
}

function Lesson5Quiz3() {
  return (
    <div className="bg-white flex-[1_0_0] min-h-px min-w-px relative rounded-[14.99px] w-[186px]" data-name="Lesson5Quiz7">
      <div className="bg-clip-padding border-0 border-[transparent] border-solid content-stretch flex flex-col items-start pt-[10px] px-[10px] relative size-full">
        <Container66 />
      </div>
    </div>
  );
}

function Paragraph62() {
  return (
    <div className="h-[15px] relative shrink-0 w-[1280px]" data-name="Paragraph">
      <div className="bg-clip-padding border-0 border-[transparent] border-solid relative size-full">
        <p className="absolute font-['Inter:Regular',sans-serif] font-normal leading-[15px] left-0 not-italic text-[#364146] text-[10px] top-[0.5px] tracking-[-0.13px] whitespace-nowrap">• Buttons</p>
      </div>
    </div>
  );
}

function Paragraph63() {
  return (
    <div className="h-[15px] relative shrink-0 w-[1280px]" data-name="Paragraph">
      <div className="bg-clip-padding border-0 border-[transparent] border-solid relative size-full">
        <p className="absolute font-['Inter:Regular',sans-serif] font-normal leading-[15px] left-0 not-italic text-[#364146] text-[10px] top-[0.5px] tracking-[-0.13px] whitespace-nowrap">• Inputs</p>
      </div>
    </div>
  );
}

function Paragraph64() {
  return (
    <div className="h-[15px] relative shrink-0 w-[1280px]" data-name="Paragraph">
      <div className="bg-clip-padding border-0 border-[transparent] border-solid relative size-full">
        <p className="absolute font-['Inter:Regular',sans-serif] font-normal leading-[15px] left-0 not-italic text-[#364146] text-[10px] top-[0.5px] tracking-[-0.13px] whitespace-nowrap">• Cards</p>
      </div>
    </div>
  );
}

function Paragraph65() {
  return (
    <div className="flex-[1_0_0] min-h-px min-w-px relative w-[1280px]" data-name="Paragraph">
      <div className="bg-clip-padding border-0 border-[transparent] border-solid relative size-full">
        <p className="absolute font-['Inter:Regular',sans-serif] font-normal leading-[15px] left-0 not-italic text-[#364146] text-[10px] top-[0.5px] tracking-[-0.13px] whitespace-nowrap">• Notifications</p>
      </div>
    </div>
  );
}

function Container75() {
  return (
    <div className="h-[84px] relative shrink-0 w-[1280px]" data-name="Container">
      <div className="bg-clip-padding border-0 border-[transparent] border-solid content-stretch flex flex-col gap-[8px] items-start relative size-full">
        <Paragraph62 />
        <Paragraph63 />
        <Paragraph64 />
        <Paragraph65 />
      </div>
    </div>
  );
}

function Container65() {
  return (
    <div className="content-stretch flex flex-col gap-[16px] h-[331px] items-start relative shrink-0 w-full" data-name="Container">
      <Lesson5Quiz3 />
      <Container75 />
    </div>
  );
}

function Container64() {
  return (
    <div className="absolute content-stretch flex flex-col gap-[24px] h-[369px] items-start left-0 top-[90px] w-[1280px]" data-name="Container">
      <Paragraph53 />
      <Container65 />
    </div>
  );
}

function Paragraph66() {
  return (
    <div className="h-[14px] relative shrink-0 w-full" data-name="Paragraph">
      <p className="absolute font-['Inter:Regular',sans-serif] font-normal leading-[14px] left-0 not-italic text-[#8e9199] text-[11px] top-[0.5px] tracking-[-0.14px] whitespace-nowrap">8. Что важно при создании UI Kit?</p>
    </div>
  );
}

function Paragraph67() {
  return (
    <div className="h-[7.5px] relative shrink-0 w-full" data-name="Paragraph">
      <p className="absolute font-['Inter:Regular',sans-serif] font-normal leading-[7.5px] left-0 not-italic text-[5px] text-white top-[-0.5px] whitespace-nowrap">Btn</p>
    </div>
  );
}

function Container80() {
  return (
    <div className="bg-[#3b82f6] h-[13.5px] relative rounded-[3px] shrink-0 w-[20px]" data-name="Container">
      <div className="bg-clip-padding border-0 border-[transparent] border-solid content-stretch flex flex-col items-start pt-[3px] px-[6px] relative size-full">
        <Paragraph67 />
      </div>
    </div>
  );
}

function Paragraph68() {
  return (
    <div className="h-[7.5px] relative shrink-0 w-[34.5px]" data-name="Paragraph">
      <div className="bg-clip-padding border-0 border-[transparent] border-solid relative size-full">
        <p className="absolute font-['Inter:Regular',sans-serif] font-normal leading-[7.5px] left-0 not-italic text-[#8e9199] text-[5px] top-[-0.5px] whitespace-nowrap">→ consistency</p>
      </div>
    </div>
  );
}

function Container79() {
  return (
    <div className="h-[13.5px] relative shrink-0 w-[166px]" data-name="Container">
      <div className="bg-clip-padding border-0 border-[transparent] border-solid content-stretch flex gap-[3px] items-center relative size-full">
        <Container80 />
        <Paragraph68 />
      </div>
    </div>
  );
}

function Paragraph69() {
  return (
    <div className="h-[12px] relative shrink-0 w-[6.922px]" data-name="Paragraph">
      <div className="bg-clip-padding border-0 border-[transparent] border-solid relative size-full">
        <p className="absolute font-['Inter:Regular','Noto_Sans_Symbols2:Regular',sans-serif] font-normal leading-[12px] left-0 not-italic text-[#0a0a0a] text-[8px] top-[0.5px] tracking-[0.2057px] whitespace-nowrap">▦</p>
      </div>
    </div>
  );
}

function Paragraph70() {
  return (
    <div className="h-[7.5px] relative shrink-0 w-[27.578px]" data-name="Paragraph">
      <div className="bg-clip-padding border-0 border-[transparent] border-solid relative size-full">
        <p className="absolute font-['Inter:Regular',sans-serif] font-normal leading-[7.5px] left-0 not-italic text-[#8e9199] text-[5px] top-[-0.5px] whitespace-nowrap">→ structure</p>
      </div>
    </div>
  );
}

function Container81() {
  return (
    <div className="h-[12px] relative shrink-0 w-[166px]" data-name="Container">
      <div className="bg-clip-padding border-0 border-[transparent] border-solid content-stretch flex gap-[3px] items-center relative size-full">
        <Paragraph69 />
        <Paragraph70 />
      </div>
    </div>
  );
}

function Paragraph71() {
  return (
    <div className="h-[12px] relative shrink-0 w-[7.141px]" data-name="Paragraph">
      <div className="bg-clip-padding border-0 border-[transparent] border-solid relative size-full">
        <p className="absolute font-['Inter:Regular',sans-serif] font-normal leading-[12px] left-0 not-italic text-[#0a0a0a] text-[8px] top-[0.5px] tracking-[0.2057px] whitespace-nowrap">✓</p>
      </div>
    </div>
  );
}

function Paragraph72() {
  return (
    <div className="h-[7.5px] relative shrink-0 w-[23.242px]" data-name="Paragraph">
      <div className="bg-clip-padding border-0 border-[transparent] border-solid relative size-full">
        <p className="absolute font-['Inter:Regular',sans-serif] font-normal leading-[7.5px] left-0 not-italic text-[#8e9199] text-[5px] top-[-0.5px] whitespace-nowrap">→ system</p>
      </div>
    </div>
  );
}

function Container82() {
  return (
    <div className="h-[12px] relative shrink-0 w-[166px]" data-name="Container">
      <div className="bg-clip-padding border-0 border-[transparent] border-solid content-stretch flex gap-[3px] items-center relative size-full">
        <Paragraph71 />
        <Paragraph72 />
      </div>
    </div>
  );
}

function Container78() {
  return (
    <div className="content-stretch flex flex-col gap-[6px] h-[211px] items-start justify-center py-[80.75px] relative shrink-0 w-full" data-name="Container">
      <Container79 />
      <Container81 />
      <Container82 />
    </div>
  );
}

function Lesson5Quiz4() {
  return (
    <div className="bg-white flex-[1_0_0] min-h-px min-w-px relative rounded-[14.99px] w-[186px]" data-name="Lesson5Quiz8">
      <div className="bg-clip-padding border-0 border-[transparent] border-solid content-stretch flex flex-col items-start pt-[10px] px-[10px] relative size-full">
        <Container78 />
      </div>
    </div>
  );
}

function Paragraph73() {
  return (
    <div className="h-[15px] relative shrink-0 w-[1280px]" data-name="Paragraph">
      <div className="bg-clip-padding border-0 border-[transparent] border-solid relative size-full">
        <p className="absolute font-['Inter:Regular',sans-serif] font-normal leading-[15px] left-0 not-italic text-[#364146] text-[10px] top-[0.5px] tracking-[-0.13px] whitespace-nowrap">• Единый стиль</p>
      </div>
    </div>
  );
}

function Paragraph74() {
  return (
    <div className="h-[15px] relative shrink-0 w-[1280px]" data-name="Paragraph">
      <div className="bg-clip-padding border-0 border-[transparent] border-solid relative size-full">
        <p className="absolute font-['Inter:Regular',sans-serif] font-normal leading-[15px] left-0 not-italic text-[#364146] text-[10px] top-[0.5px] tracking-[-0.13px] whitespace-nowrap">• Структура</p>
      </div>
    </div>
  );
}

function Paragraph75() {
  return (
    <div className="h-[15px] relative shrink-0 w-[1280px]" data-name="Paragraph">
      <div className="bg-clip-padding border-0 border-[transparent] border-solid relative size-full">
        <p className="absolute font-['Inter:Regular',sans-serif] font-normal leading-[15px] left-0 not-italic text-[#364146] text-[10px] top-[0.5px] tracking-[-0.13px] whitespace-nowrap">• Логика</p>
      </div>
    </div>
  );
}

function Paragraph76() {
  return (
    <div className="flex-[1_0_0] min-h-px min-w-px relative w-[1280px]" data-name="Paragraph">
      <div className="bg-clip-padding border-0 border-[transparent] border-solid relative size-full">
        <p className="absolute font-['Inter:Regular',sans-serif] font-normal leading-[15px] left-0 not-italic text-[#364146] text-[10px] top-[0.5px] tracking-[-0.13px] whitespace-nowrap">• Разные размеры</p>
      </div>
    </div>
  );
}

function Container83() {
  return (
    <div className="h-[84px] relative shrink-0 w-[1280px]" data-name="Container">
      <div className="bg-clip-padding border-0 border-[transparent] border-solid content-stretch flex flex-col gap-[8px] items-start relative size-full">
        <Paragraph73 />
        <Paragraph74 />
        <Paragraph75 />
        <Paragraph76 />
      </div>
    </div>
  );
}

function Container77() {
  return (
    <div className="content-stretch flex flex-col gap-[16px] h-[331px] items-start relative shrink-0 w-full" data-name="Container">
      <Lesson5Quiz4 />
      <Container83 />
    </div>
  );
}

function Container76() {
  return (
    <div className="absolute content-stretch flex flex-col gap-[24px] h-[369px] items-start left-0 top-[507px] w-[1280px]" data-name="Container">
      <Paragraph66 />
      <Container77 />
    </div>
  );
}

function Paragraph77() {
  return (
    <div className="h-[14px] relative shrink-0 w-full" data-name="Paragraph">
      <p className="absolute font-['Inter:Regular',sans-serif] font-normal leading-[14px] left-0 not-italic text-[#8e9199] text-[11px] top-[0.5px] tracking-[-0.14px] whitespace-nowrap">9. Что улучшает UI Kit?</p>
    </div>
  );
}

function Paragraph78() {
  return (
    <div className="h-[18px] relative shrink-0 w-[12px]" data-name="Paragraph">
      <div className="bg-clip-padding border-0 border-[transparent] border-solid relative size-full">
        <p className="absolute font-['Inter:Regular',sans-serif] font-normal leading-[18px] left-0 not-italic text-[#0a0a0a] text-[12px] top-px whitespace-nowrap">⚡</p>
      </div>
    </div>
  );
}

function Paragraph79() {
  return (
    <div className="h-[9px] relative shrink-0 w-[25.586px]" data-name="Paragraph">
      <div className="bg-clip-padding border-0 border-[transparent] border-solid relative size-full">
        <p className="absolute font-['Inter:Regular',sans-serif] font-normal leading-[9px] left-0 not-italic text-[#8e9199] text-[6px] top-[-0.5px] whitespace-nowrap">Быстрее</p>
      </div>
    </div>
  );
}

function Container87() {
  return (
    <div className="h-[18px] relative shrink-0 w-[166px]" data-name="Container">
      <div className="bg-clip-padding border-0 border-[transparent] border-solid content-stretch flex gap-[3px] items-center relative size-full">
        <Paragraph78 />
        <Paragraph79 />
      </div>
    </div>
  );
}

function Paragraph80() {
  return (
    <div className="h-[18px] relative shrink-0 w-[10.398px]" data-name="Paragraph">
      <div className="bg-clip-padding border-0 border-[transparent] border-solid relative size-full">
        <p className="absolute font-['Inter:Regular',sans-serif] font-normal leading-[18px] left-0 not-italic text-[#0a0a0a] text-[12px] top-px whitespace-nowrap">✓</p>
      </div>
    </div>
  );
}

function Paragraph81() {
  return (
    <div className="h-[9px] relative shrink-0 w-[34.313px]" data-name="Paragraph">
      <div className="bg-clip-padding border-0 border-[transparent] border-solid relative size-full">
        <p className="absolute font-['Inter:Regular',sans-serif] font-normal leading-[9px] left-0 not-italic text-[#8e9199] text-[6px] top-[-0.5px] whitespace-nowrap">Аккуратнее</p>
      </div>
    </div>
  );
}

function Container88() {
  return (
    <div className="h-[18px] relative shrink-0 w-[166px]" data-name="Container">
      <div className="bg-clip-padding border-0 border-[transparent] border-solid content-stretch flex gap-[3px] items-center relative size-full">
        <Paragraph80 />
        <Paragraph81 />
      </div>
    </div>
  );
}

function Paragraph82() {
  return (
    <div className="h-[18px] relative shrink-0 w-[9.82px]" data-name="Paragraph">
      <div className="bg-clip-padding border-0 border-[transparent] border-solid relative size-full">
        <p className="absolute font-['Inter:Regular',sans-serif] font-normal leading-[18px] left-0 not-italic text-[#0a0a0a] text-[12px] top-px whitespace-nowrap">↻</p>
      </div>
    </div>
  );
}

function Paragraph83() {
  return (
    <div className="h-[9px] relative shrink-0 w-[55.055px]" data-name="Paragraph">
      <div className="bg-clip-padding border-0 border-[transparent] border-solid relative size-full">
        <p className="absolute font-['Inter:Regular',sans-serif] font-normal leading-[9px] left-0 not-italic text-[#8e9199] text-[6px] top-[-0.5px] whitespace-nowrap">Проще поддержка</p>
      </div>
    </div>
  );
}

function Container89() {
  return (
    <div className="h-[18px] relative shrink-0 w-[166px]" data-name="Container">
      <div className="bg-clip-padding border-0 border-[transparent] border-solid content-stretch flex gap-[3px] items-center relative size-full">
        <Paragraph82 />
        <Paragraph83 />
      </div>
    </div>
  );
}

function Container86() {
  return (
    <div className="content-stretch flex flex-col gap-[6px] h-[211px] items-start justify-center py-[72.5px] relative shrink-0 w-full" data-name="Container">
      <Container87 />
      <Container88 />
      <Container89 />
    </div>
  );
}

function Lesson5Quiz5() {
  return (
    <div className="bg-white flex-[1_0_0] min-h-px min-w-px relative rounded-[14.99px] w-[186px]" data-name="Lesson5Quiz9">
      <div className="bg-clip-padding border-0 border-[transparent] border-solid content-stretch flex flex-col items-start pt-[10px] px-[10px] relative size-full">
        <Container86 />
      </div>
    </div>
  );
}

function Paragraph84() {
  return (
    <div className="h-[15px] relative shrink-0 w-[1280px]" data-name="Paragraph">
      <div className="bg-clip-padding border-0 border-[transparent] border-solid relative size-full">
        <p className="absolute font-['Inter:Regular',sans-serif] font-normal leading-[15px] left-0 not-italic text-[#364146] text-[10px] top-[0.5px] tracking-[-0.13px] whitespace-nowrap">• Скорость работы</p>
      </div>
    </div>
  );
}

function Paragraph85() {
  return (
    <div className="h-[15px] relative shrink-0 w-[1280px]" data-name="Paragraph">
      <div className="bg-clip-padding border-0 border-[transparent] border-solid relative size-full">
        <p className="absolute font-['Inter:Regular',sans-serif] font-normal leading-[15px] left-0 not-italic text-[#364146] text-[10px] top-[0.5px] tracking-[-0.13px] whitespace-nowrap">• Аккуратность</p>
      </div>
    </div>
  );
}

function Paragraph86() {
  return (
    <div className="h-[15px] relative shrink-0 w-[1280px]" data-name="Paragraph">
      <div className="bg-clip-padding border-0 border-[transparent] border-solid relative size-full">
        <p className="absolute font-['Inter:Regular',sans-serif] font-normal leading-[15px] left-0 not-italic text-[#364146] text-[10px] top-[0.5px] tracking-[-0.13px] whitespace-nowrap">• Простоту поддержки</p>
      </div>
    </div>
  );
}

function Paragraph87() {
  return (
    <div className="flex-[1_0_0] min-h-px min-w-px relative w-[1280px]" data-name="Paragraph">
      <div className="bg-clip-padding border-0 border-[transparent] border-solid relative size-full">
        <p className="absolute font-['Inter:Regular',sans-serif] font-normal leading-[15px] left-0 not-italic text-[#364146] text-[10px] top-[0.5px] tracking-[-0.13px] whitespace-nowrap">• Больше цветов</p>
      </div>
    </div>
  );
}

function Container90() {
  return (
    <div className="h-[84px] relative shrink-0 w-[1280px]" data-name="Container">
      <div className="bg-clip-padding border-0 border-[transparent] border-solid content-stretch flex flex-col gap-[8px] items-start relative size-full">
        <Paragraph84 />
        <Paragraph85 />
        <Paragraph86 />
        <Paragraph87 />
      </div>
    </div>
  );
}

function Container85() {
  return (
    <div className="content-stretch flex flex-col gap-[16px] h-[331px] items-start relative shrink-0 w-full" data-name="Container">
      <Lesson5Quiz5 />
      <Container90 />
    </div>
  );
}

function Container84() {
  return (
    <div className="absolute content-stretch flex flex-col gap-[24px] h-[369px] items-start left-0 top-[924px] w-[1280px]" data-name="Container">
      <Paragraph77 />
      <Container85 />
    </div>
  );
}

function Container63() {
  return (
    <div className="absolute h-[1293px] left-0 top-[2474px] w-[1280px]" data-name="Container">
      <Heading3 />
      <Paragraph52 />
      <Container64 />
      <Container76 />
      <Container84 />
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

function Paragraph88() {
  return (
    <div className="absolute content-stretch flex h-[15px] items-start left-0 top-[35px] w-[1280px]" data-name="Paragraph">
      <p className="flex-[1_0_0] font-['Inter:Regular',sans-serif] font-normal leading-[15px] min-h-px min-w-px not-italic relative text-[#8e9199] text-[12px] tracking-[-0.15px]">Соедините элементы с описаниями</p>
    </div>
  );
}

function Paragraph89() {
  return (
    <div className="h-[14px] relative shrink-0 w-full" data-name="Paragraph">
      <p className="absolute font-['Inter:Regular',sans-serif] font-normal leading-[14px] left-0 not-italic text-[#8e9199] text-[11px] top-[0.5px] tracking-[-0.14px] whitespace-nowrap">10. Соедините элемент и роль</p>
    </div>
  );
}

function Paragraph90() {
  return (
    <div className="h-[10.5px] relative shrink-0 w-full" data-name="Paragraph">
      <p className="absolute font-['Inter:Regular',sans-serif] font-normal leading-[10.5px] left-0 not-italic text-[#f7f8fc] text-[7px] top-0 whitespace-nowrap">Купить</p>
    </div>
  );
}

function Container94() {
  return (
    <div className="bg-[#3b82f6] h-[22.5px] relative rounded-[4px] shrink-0 w-[43.719px]" data-name="Container">
      <div className="bg-clip-padding border-0 border-[transparent] border-solid content-stretch flex flex-col items-start pt-[6px] px-[10px] relative size-full">
        <Paragraph90 />
      </div>
    </div>
  );
}

function Lesson5Quiz10Card() {
  return (
    <div className="bg-[rgba(255,255,255,0)] h-[80px] relative rounded-[8px] shrink-0 w-[130px]" data-name="Lesson5Quiz10Card1">
      <div className="bg-clip-padding border-0 border-[transparent] border-solid content-stretch flex items-center justify-center px-[43.141px] relative size-full">
        <Container94 />
      </div>
    </div>
  );
}

function Paragraph91() {
  return (
    <div className="h-[9px] relative shrink-0 w-full" data-name="Paragraph">
      <p className="absolute font-['Inter:Regular',sans-serif] font-normal leading-[9px] left-0 not-italic text-[#8e9199] text-[6px] top-[-0.5px] whitespace-nowrap">Email</p>
    </div>
  );
}

function Container95() {
  return (
    <div className="bg-[#f7f8fc] h-[19px] relative rounded-[4px] shrink-0 w-[33.039px]" data-name="Container">
      <div aria-hidden="true" className="absolute border border-[#d1d3db] border-solid inset-0 pointer-events-none rounded-[4px]" />
      <div className="bg-clip-padding border-0 border-[transparent] border-solid content-stretch flex flex-col items-start pb-px pt-[5px] px-[9px] relative size-full">
        <Paragraph91 />
      </div>
    </div>
  );
}

function Lesson5Quiz10Card1() {
  return (
    <div className="bg-[rgba(255,255,255,0)] h-[80px] relative rounded-[8px] shrink-0 w-[130px]" data-name="Lesson5Quiz10Card2">
      <div className="bg-clip-padding border-0 border-[transparent] border-solid content-stretch flex items-center justify-center pl-[48.477px] pr-[48.484px] relative size-full">
        <Container95 />
      </div>
    </div>
  );
}

function Paragraph92() {
  return (
    <div className="h-[9px] relative shrink-0 w-full" data-name="Paragraph">
      <p className="absolute font-['Inter:Regular',sans-serif] font-normal leading-[9px] left-0 not-italic text-[#22c55e] text-[6px] top-[-0.5px] whitespace-nowrap">✓ Успешно</p>
    </div>
  );
}

function Container96() {
  return (
    <div className="bg-[#dcfce7] h-[17px] relative rounded-[4px] shrink-0 w-[42.57px]" data-name="Container">
      <div aria-hidden="true" className="absolute border-[#22c55e] border-l-2 border-solid inset-0 pointer-events-none rounded-[4px]" />
      <div className="bg-clip-padding border-0 border-[transparent] border-solid content-stretch flex flex-col items-start pl-[6px] pr-[4px] pt-[4px] relative size-full">
        <Paragraph92 />
      </div>
    </div>
  );
}

function Lesson5Quiz10Card2() {
  return (
    <div className="bg-[rgba(255,255,255,0)] h-[80px] relative rounded-[8px] shrink-0 w-[130px]" data-name="Lesson5Quiz10Card3">
      <div className="bg-clip-padding border-0 border-[transparent] border-solid content-stretch flex items-center justify-center pl-[43.711px] pr-[43.719px] relative size-full">
        <Container96 />
      </div>
    </div>
  );
}

function Container93() {
  return (
    <div className="content-stretch flex gap-[24px] h-[80px] items-start relative shrink-0 w-full" data-name="Container">
      <Lesson5Quiz10Card />
      <Lesson5Quiz10Card1 />
      <Lesson5Quiz10Card2 />
    </div>
  );
}

function Paragraph93() {
  return (
    <div className="h-[15px] relative shrink-0 w-[1280px]" data-name="Paragraph">
      <div className="bg-clip-padding border-0 border-[transparent] border-solid relative size-full">
        <p className="absolute font-['Inter:Regular',sans-serif] font-normal leading-[15px] left-0 not-italic text-[#364146] text-[10px] top-[0.5px] tracking-[-0.13px] whitespace-nowrap">• Действие</p>
      </div>
    </div>
  );
}

function Paragraph94() {
  return (
    <div className="h-[15px] relative shrink-0 w-[1280px]" data-name="Paragraph">
      <div className="bg-clip-padding border-0 border-[transparent] border-solid relative size-full">
        <p className="absolute font-['Inter:Regular',sans-serif] font-normal leading-[15px] left-0 not-italic text-[#364146] text-[10px] top-[0.5px] tracking-[-0.13px] whitespace-nowrap">• Ввод данных</p>
      </div>
    </div>
  );
}

function Paragraph95() {
  return (
    <div className="flex-[1_0_0] min-h-px min-w-px relative w-[1280px]" data-name="Paragraph">
      <div className="bg-clip-padding border-0 border-[transparent] border-solid relative size-full">
        <p className="absolute font-['Inter:Regular',sans-serif] font-normal leading-[15px] left-0 not-italic text-[#364146] text-[10px] top-[0.5px] tracking-[-0.13px] whitespace-nowrap">• Обратная связь</p>
      </div>
    </div>
  );
}

function Container97() {
  return (
    <div className="content-stretch flex flex-col gap-[8px] h-[61px] items-start relative shrink-0 w-full" data-name="Container">
      <Paragraph93 />
      <Paragraph94 />
      <Paragraph95 />
    </div>
  );
}

function Container92() {
  return (
    <div className="absolute content-stretch flex flex-col gap-[24px] h-[203px] items-start left-0 top-[90px] w-[517px]" data-name="Container">
      <Paragraph89 />
      <Container93 />
      <Container97 />
    </div>
  );
}

function Paragraph96() {
  return (
    <div className="h-[14px] relative shrink-0 w-full" data-name="Paragraph">
      <p className="absolute font-['Inter:Regular',sans-serif] font-normal leading-[14px] left-0 not-italic text-[#8e9199] text-[11px] top-[0.5px] tracking-[-0.14px] whitespace-nowrap">11. Соедините элемент и пример</p>
    </div>
  );
}

function Paragraph97() {
  return (
    <div className="h-[7.5px] relative shrink-0 w-full" data-name="Paragraph">
      <p className="absolute font-['Inter:Regular',sans-serif] font-normal leading-[7.5px] left-0 not-italic text-[#f7f8fc] text-[5px] top-[-0.5px] whitespace-nowrap">Начать</p>
    </div>
  );
}

function Container101() {
  return (
    <div className="bg-[#3b82f6] h-[13.5px] relative rounded-[3px] shrink-0 w-[29.438px]" data-name="Container">
      <div className="bg-clip-padding border-0 border-[transparent] border-solid content-stretch flex flex-col items-start pt-[3px] px-[6px] relative size-full">
        <Paragraph97 />
      </div>
    </div>
  );
}

function Paragraph98() {
  return (
    <div className="h-[7.5px] relative shrink-0 w-full" data-name="Paragraph">
      <p className="absolute font-['Inter:Regular',sans-serif] font-normal leading-[7.5px] left-0 not-italic text-[#f7f8fc] text-[5px] top-[-0.5px] whitespace-nowrap">Купить</p>
    </div>
  );
}

function Container102() {
  return (
    <div className="bg-[#3b82f6] flex-[1_0_0] min-h-px min-w-px relative rounded-[3px] w-[29.438px]" data-name="Container">
      <div className="bg-clip-padding border-0 border-[transparent] border-solid content-stretch flex flex-col items-start pt-[3px] px-[6px] relative size-full">
        <Paragraph98 />
      </div>
    </div>
  );
}

function Container100() {
  return (
    <div className="h-[29px] relative shrink-0 w-[29.438px]" data-name="Container">
      <div className="bg-clip-padding border-0 border-[transparent] border-solid content-stretch flex flex-col gap-[2px] items-start relative size-full">
        <Container101 />
        <Container102 />
      </div>
    </div>
  );
}

function Lesson5Quiz11Card() {
  return (
    <div className="bg-[rgba(255,255,255,0)] h-[80px] relative rounded-[8px] shrink-0 w-[130px]" data-name="Lesson5Quiz11Card1">
      <div className="bg-clip-padding border-0 border-[transparent] border-solid content-stretch flex items-center justify-center px-[50.281px] relative size-full">
        <Container100 />
      </div>
    </div>
  );
}

function Paragraph99() {
  return (
    <div className="h-[7.5px] relative shrink-0 w-full" data-name="Paragraph">
      <p className="absolute font-['Inter:Regular',sans-serif] font-normal leading-[7.5px] left-0 not-italic text-[#8e9199] text-[5px] top-[-0.5px] whitespace-nowrap">Email</p>
    </div>
  );
}

function Container104() {
  return (
    <div className="bg-[#f7f8fc] h-[13.5px] relative rounded-[3px] shrink-0 w-[24.531px]" data-name="Container">
      <div aria-hidden="true" className="absolute border border-[#d1d3db] border-solid inset-0 pointer-events-none rounded-[3px]" />
      <div className="bg-clip-padding border-0 border-[transparent] border-solid content-stretch flex flex-col items-start pb-px pt-[3px] px-[6px] relative size-full">
        <Paragraph99 />
      </div>
    </div>
  );
}

function Paragraph100() {
  return (
    <div className="h-[7.5px] relative shrink-0 w-full" data-name="Paragraph">
      <p className="absolute font-['Inter:Regular',sans-serif] font-normal leading-[7.5px] left-0 not-italic text-[#8e9199] text-[5px] top-[-0.5px] whitespace-nowrap">Имя</p>
    </div>
  );
}

function Container105() {
  return (
    <div className="bg-[#f7f8fc] flex-[1_0_0] min-h-px min-w-px relative rounded-[3px] w-[24.531px]" data-name="Container">
      <div aria-hidden="true" className="absolute border border-[#d1d3db] border-solid inset-0 pointer-events-none rounded-[3px]" />
      <div className="bg-clip-padding border-0 border-[transparent] border-solid content-stretch flex flex-col items-start pb-px pt-[3px] px-[6px] relative size-full">
        <Paragraph100 />
      </div>
    </div>
  );
}

function Container103() {
  return (
    <div className="h-[29px] relative shrink-0 w-[24.531px]" data-name="Container">
      <div className="bg-clip-padding border-0 border-[transparent] border-solid content-stretch flex flex-col gap-[2px] items-start relative size-full">
        <Container104 />
        <Container105 />
      </div>
    </div>
  );
}

function Lesson5Quiz11Card1() {
  return (
    <div className="bg-[rgba(255,255,255,0)] h-[80px] relative rounded-[8px] shrink-0 w-[130px]" data-name="Lesson5Quiz11Card2">
      <div className="bg-clip-padding border-0 border-[transparent] border-solid content-stretch flex items-center justify-center px-[52.734px] relative size-full">
        <Container103 />
      </div>
    </div>
  );
}

function ImageWithFallback6() {
  return (
    <div className="absolute h-[32px] left-[4px] rounded-[2px] top-[4px] w-[100px]" data-name="ImageWithFallback">
      <img alt="" className="absolute inset-0 max-w-none object-cover pointer-events-none rounded-[2px] size-full" src={imgImageWithFallback6} />
    </div>
  );
}

function Paragraph101() {
  return (
    <div className="absolute h-[7.5px] left-[4px] top-[38px] w-[100px]" data-name="Paragraph">
      <p className="absolute font-['Inter:Regular',sans-serif] font-normal leading-[7.5px] left-0 not-italic text-[#364146] text-[5px] top-[-0.5px] whitespace-nowrap">Наушники</p>
    </div>
  );
}

function Paragraph102() {
  return (
    <div className="absolute h-[7.5px] left-[4px] top-[45.5px] w-[100px]" data-name="Paragraph">
      <p className="absolute font-['Inter:Regular',sans-serif] font-normal leading-[7.5px] left-0 not-italic text-[#8e9199] text-[5px] top-[-0.5px] whitespace-nowrap">4 990 ₽</p>
    </div>
  );
}

function Container106() {
  return (
    <div className="bg-[#f7f8fc] h-[57px] relative rounded-[4px] shrink-0 w-[108px]" data-name="Container">
      <div className="bg-clip-padding border-0 border-[transparent] border-solid relative size-full">
        <ImageWithFallback6 />
        <Paragraph101 />
        <Paragraph102 />
      </div>
    </div>
  );
}

function Lesson5Quiz11Card2() {
  return (
    <div className="bg-[rgba(255,255,255,0)] h-[80px] relative rounded-[8px] shrink-0 w-[130px]" data-name="Lesson5Quiz11Card3">
      <div className="bg-clip-padding border-0 border-[transparent] border-solid content-stretch flex items-center justify-center px-[11px] relative size-full">
        <Container106 />
      </div>
    </div>
  );
}

function Container99() {
  return (
    <div className="content-stretch flex gap-[24px] h-[80px] items-start relative shrink-0 w-full" data-name="Container">
      <Lesson5Quiz11Card />
      <Lesson5Quiz11Card1 />
      <Lesson5Quiz11Card2 />
    </div>
  );
}

function Paragraph103() {
  return (
    <div className="h-[15px] relative shrink-0 w-[1280px]" data-name="Paragraph">
      <div className="bg-clip-padding border-0 border-[transparent] border-solid relative size-full">
        <p className="absolute font-['Inter:Regular',sans-serif] font-normal leading-[15px] left-0 not-italic text-[#364146] text-[10px] top-[0.5px] tracking-[-0.13px] whitespace-nowrap">• Start / Buy</p>
      </div>
    </div>
  );
}

function Paragraph104() {
  return (
    <div className="h-[15px] relative shrink-0 w-[1280px]" data-name="Paragraph">
      <div className="bg-clip-padding border-0 border-[transparent] border-solid relative size-full">
        <p className="absolute font-['Inter:Regular',sans-serif] font-normal leading-[15px] left-0 not-italic text-[#364146] text-[10px] top-[0.5px] tracking-[-0.13px] whitespace-nowrap">• Email / Name</p>
      </div>
    </div>
  );
}

function Paragraph105() {
  return (
    <div className="flex-[1_0_0] min-h-px min-w-px relative w-[1280px]" data-name="Paragraph">
      <div className="bg-clip-padding border-0 border-[transparent] border-solid relative size-full">
        <p className="absolute font-['Inter:Regular',sans-serif] font-normal leading-[15px] left-0 not-italic text-[#364146] text-[10px] top-[0.5px] tracking-[-0.13px] whitespace-nowrap">• Карточка продукта</p>
      </div>
    </div>
  );
}

function Container107() {
  return (
    <div className="content-stretch flex flex-col gap-[8px] h-[61px] items-start relative shrink-0 w-full" data-name="Container">
      <Paragraph103 />
      <Paragraph104 />
      <Paragraph105 />
    </div>
  );
}

function Container98() {
  return (
    <div className="absolute content-stretch flex flex-col gap-[24px] h-[203px] items-start left-0 top-[341px] w-[1280px]" data-name="Container">
      <Paragraph96 />
      <Container99 />
      <Container107 />
    </div>
  );
}

function Paragraph106() {
  return (
    <div className="h-[14px] relative shrink-0 w-full" data-name="Paragraph">
      <p className="absolute font-['Inter:Regular',sans-serif] font-normal leading-[14px] left-0 not-italic text-[#8e9199] text-[11px] top-[0.5px] tracking-[-0.14px] whitespace-nowrap">12. Соедините проблему и эффект</p>
    </div>
  );
}

function Paragraph107() {
  return (
    <div className="h-[15px] relative shrink-0 w-[114px]" data-name="Paragraph">
      <div className="bg-clip-padding border-0 border-[transparent] border-solid relative size-full">
        <p className="absolute font-['Inter:Regular',sans-serif] font-normal leading-[15px] left-0 not-italic text-[#3b82f6] text-[10px] top-[0.5px] tracking-[0.1172px] whitespace-nowrap">⚠️</p>
      </div>
    </div>
  );
}

function Container111() {
  return <div className="bg-[#3b82f6] h-[12px] rounded-[2px] shrink-0 w-[18px]" data-name="Container" />;
}

function Container112() {
  return (
    <div className="bg-[#f7f8fc] h-[14px] relative rounded-[3px] shrink-0 w-[20px]" data-name="Container">
      <div aria-hidden="true" className="absolute border border-[#d1d3db] border-solid inset-0 pointer-events-none rounded-[3px]" />
    </div>
  );
}

function Container110() {
  return (
    <div className="h-[14px] relative shrink-0 w-[114px]" data-name="Container">
      <div className="bg-clip-padding border-0 border-[transparent] border-solid content-stretch flex gap-[2px] items-start relative size-full">
        <Container111 />
        <Container112 />
      </div>
    </div>
  );
}

function Lesson5Quiz12Card() {
  return (
    <div className="bg-[rgba(255,255,255,0)] h-[80px] relative rounded-[8px] shrink-0 w-[130px]" data-name="Lesson5Quiz12Card1">
      <div className="bg-clip-padding border-0 border-[transparent] border-solid content-stretch flex flex-col gap-[2px] items-start justify-center pl-[8px] py-[24.5px] relative size-full">
        <Paragraph107 />
        <Container110 />
      </div>
    </div>
  );
}

function Container114() {
  return <div className="bg-[#3b82f6] h-[12px] rounded-[2px] shrink-0 w-[20px]" data-name="Container" />;
}

function Container115() {
  return <div className="bg-[#22c55e] h-[14px] rounded-[3px] shrink-0 w-[22px]" data-name="Container" />;
}

function Container116() {
  return <div className="bg-[#8b5cf6] h-[11px] rounded-[2px] shrink-0 w-[18px]" data-name="Container" />;
}

function Container113() {
  return (
    <div className="h-[14px] relative shrink-0 w-[114px]" data-name="Container">
      <div className="bg-clip-padding border-0 border-[transparent] border-solid content-stretch flex gap-[2px] items-start relative size-full">
        <Container114 />
        <Container115 />
        <Container116 />
      </div>
    </div>
  );
}

function Paragraph108() {
  return (
    <div className="h-[7.5px] relative shrink-0 w-[114px]" data-name="Paragraph">
      <div className="bg-clip-padding border-0 border-[transparent] border-solid relative size-full">
        <p className="absolute font-['Inter:Regular',sans-serif] font-normal leading-[7.5px] left-0 not-italic text-[#8e9199] text-[5px] top-[-0.5px] whitespace-nowrap">Разные стили</p>
      </div>
    </div>
  );
}

function Lesson5Quiz12Card1() {
  return (
    <div className="bg-[rgba(255,255,255,0)] h-[80px] relative rounded-[8px] shrink-0 w-[130px]" data-name="Lesson5Quiz12Card2">
      <div className="bg-clip-padding border-0 border-[transparent] border-solid content-stretch flex flex-col gap-[2px] items-start justify-center pl-[8px] py-[28.25px] relative size-full">
        <Container113 />
        <Paragraph108 />
      </div>
    </div>
  );
}

function Paragraph109() {
  return (
    <div className="h-[15px] relative shrink-0 w-[114px]" data-name="Paragraph">
      <div className="bg-clip-padding border-0 border-[transparent] border-solid relative size-full">
        <p className="absolute font-['Inter:Regular',sans-serif] font-normal leading-[15px] left-0 not-italic text-[#f8f8f8] text-[10px] top-[0.5px] tracking-[0.1172px] whitespace-nowrap">⚠️</p>
      </div>
    </div>
  );
}

function ImageWithFallback7() {
  return (
    <div className="h-[12px] relative rounded-[2px] shrink-0 w-full" data-name="ImageWithFallback">
      <img alt="" className="absolute inset-0 max-w-none object-cover pointer-events-none rounded-[2px] size-full" src={imgImageWithFallback6} />
    </div>
  );
}

function Container118() {
  return (
    <div className="bg-[#f7f8fc] h-[12px] relative rounded-[2px] shrink-0 w-[18px]" data-name="Container">
      <div className="bg-clip-padding border-0 border-[transparent] border-solid content-stretch flex flex-col items-start relative size-full">
        <ImageWithFallback7 />
      </div>
    </div>
  );
}

function ImageWithFallback8() {
  return (
    <div className="h-[12px] relative rounded-[2px] shrink-0 w-full" data-name="ImageWithFallback">
      <img alt="" className="absolute inset-0 max-w-none object-cover pointer-events-none rounded-[2px] size-full" src={imgImageWithFallback6} />
    </div>
  );
}

function Container119() {
  return (
    <div className="bg-[#f7f8fc] h-[12px] relative rounded-[2px] shrink-0 w-[18px]" data-name="Container">
      <div className="bg-clip-padding border-0 border-[transparent] border-solid content-stretch flex flex-col items-start relative size-full">
        <ImageWithFallback8 />
      </div>
    </div>
  );
}

function ImageWithFallback9() {
  return (
    <div className="h-[12px] relative rounded-[2px] shrink-0 w-full" data-name="ImageWithFallback">
      <img alt="" className="absolute inset-0 max-w-none object-cover pointer-events-none rounded-[2px] size-full" src={imgImageWithFallback6} />
    </div>
  );
}

function Container120() {
  return (
    <div className="bg-[#f7f8fc] h-[12px] relative rounded-[2px] shrink-0 w-[18px]" data-name="Container">
      <div className="bg-clip-padding border-0 border-[transparent] border-solid content-stretch flex flex-col items-start relative size-full">
        <ImageWithFallback9 />
      </div>
    </div>
  );
}

function Container117() {
  return (
    <div className="h-[12px] relative shrink-0 w-[114px]" data-name="Container">
      <div className="bg-clip-padding border-0 border-[transparent] border-solid content-stretch flex gap-[2px] items-start relative size-full">
        <Container118 />
        <Container119 />
        <Container120 />
      </div>
    </div>
  );
}

function Lesson5Quiz12Card2() {
  return (
    <div className="bg-[rgba(255,255,255,0)] h-[80px] relative rounded-[8px] shrink-0 w-[130px]" data-name="Lesson5Quiz12Card3">
      <div className="bg-clip-padding border-0 border-[transparent] border-solid content-stretch flex flex-col gap-[2px] items-start justify-center pl-[8px] py-[25.5px] relative size-full">
        <Paragraph109 />
        <Container117 />
      </div>
    </div>
  );
}

function Container109() {
  return (
    <div className="content-stretch flex gap-[24px] h-[80px] items-start relative shrink-0 w-full" data-name="Container">
      <Lesson5Quiz12Card />
      <Lesson5Quiz12Card1 />
      <Lesson5Quiz12Card2 />
    </div>
  );
}

function Paragraph110() {
  return (
    <div className="h-[15px] relative shrink-0 w-[1280px]" data-name="Paragraph">
      <div className="bg-clip-padding border-0 border-[transparent] border-solid relative size-full">
        <p className="absolute font-['Inter:Regular',sans-serif] font-normal leading-[15px] left-0 not-italic text-[#364146] text-[10px] top-[0.5px] tracking-[-0.13px] whitespace-nowrap">• Сложно работать</p>
      </div>
    </div>
  );
}

function Paragraph111() {
  return (
    <div className="h-[15px] relative shrink-0 w-[1280px]" data-name="Paragraph">
      <div className="bg-clip-padding border-0 border-[transparent] border-solid relative size-full">
        <p className="absolute font-['Inter:Regular',sans-serif] font-normal leading-[15px] left-0 not-italic text-[#364146] text-[10px] top-[0.5px] tracking-[-0.13px] whitespace-nowrap">• Интерфейс выглядит неаккуратно</p>
      </div>
    </div>
  );
}

function Paragraph112() {
  return (
    <div className="flex-[1_0_0] min-h-px min-w-px relative w-[1280px]" data-name="Paragraph">
      <div className="bg-clip-padding border-0 border-[transparent] border-solid relative size-full">
        <p className="absolute font-['Inter:Regular',sans-serif] font-normal leading-[15px] left-0 not-italic text-[#364146] text-[10px] top-[0.5px] tracking-[-0.13px] whitespace-nowrap">• Медленная работа</p>
      </div>
    </div>
  );
}

function Container121() {
  return (
    <div className="content-stretch flex flex-col gap-[8px] h-[61px] items-start relative shrink-0 w-full" data-name="Container">
      <Paragraph110 />
      <Paragraph111 />
      <Paragraph112 />
    </div>
  );
}

function Container108() {
  return (
    <div className="absolute content-stretch flex flex-col gap-[24px] h-[203px] items-start left-0 top-[592px] w-[1280px]" data-name="Container">
      <Paragraph106 />
      <Container109 />
      <Container121 />
    </div>
  );
}

function Container91() {
  return (
    <div className="absolute h-[795px] left-0 top-[3831px] w-[479px]" data-name="Container">
      <Heading4 />
      <Paragraph88 />
      <Container92 />
      <Container98 />
      <Container108 />
    </div>
  );
}

// ─────────────────────────────────────────────────────────────────────────────
// Named exports for LessonQuizPage (quiz_creating_ui_kit)
// ─────────────────────────────────────────────────────────────────────────────
// ─── Quiz 1: Где кнопки для UI Kit лучше? ─────────────────────────────────────
export function CQKitCompare1A() {
  // Неверно: кнопки разного размера и стиля
  return (
    <div style={{ position: "relative", width: 260, height: 180 }}>
      <div style={{ position: "absolute", inset: 0, background: "white", borderRadius: 14, padding: "12px 16px", display: "flex", flexDirection: "column", gap: 8 }}>
        <div style={{ background: "#3b82f6", borderRadius: 6, height: 32, display: "flex", alignItems: "center", justifyContent: "center" }}>
          <span style={{ color: "white", fontSize: 12, fontFamily: "Inter, sans-serif" }}>Купить</span>
        </div>
        <div style={{ background: "#22c55e", borderRadius: 8, height: 26, width: "70%", display: "flex", alignItems: "center", justifyContent: "center" }}>
          <span style={{ color: "white", fontSize: 10, fontFamily: "Inter, sans-serif" }}>Заказать</span>
        </div>
        <div style={{ background: "#8b5cf6", borderRadius: 4, height: 20, width: "45%", display: "flex", alignItems: "center", justifyContent: "center" }}>
          <span style={{ color: "white", fontSize: 8, fontFamily: "Inter, sans-serif" }}>Смотреть</span>
        </div>
      </div>
    </div>
  );
}
export function CQKitCompare1B() {
  // Верно: система — кнопки одного стиля, с секциями
  return (
    <div style={{ position: "relative", width: 260, height: 180 }}>
      <div style={{ position: "absolute", inset: 0, background: "white", borderRadius: 14, padding: "12px 16px", display: "flex", flexDirection: "column", gap: 8 }}>
        <div>
          <div style={{ color: "#8e9199", fontSize: 9, fontFamily: "Inter, sans-serif", marginBottom: 5 }}>Buttons</div>
          <div style={{ display: "flex", gap: 8 }}>
            <div style={{ background: "#3b82f6", borderRadius: 5, height: 28, flex: 1, display: "flex", alignItems: "center", justifyContent: "center" }}>
              <span style={{ color: "white", fontSize: 10, fontFamily: "Inter, sans-serif" }}>Primary</span>
            </div>
            <div style={{ background: "white", border: "1.5px solid #3b82f6", borderRadius: 5, height: 28, flex: 1, display: "flex", alignItems: "center", justifyContent: "center" }}>
              <span style={{ color: "#3b82f6", fontSize: 10, fontFamily: "Inter, sans-serif" }}>Secondary</span>
            </div>
          </div>
        </div>
        <div>
          <div style={{ color: "#8e9199", fontSize: 9, fontFamily: "Inter, sans-serif", marginBottom: 5 }}>Inputs</div>
          <div style={{ border: "1px solid #d1d3db", borderRadius: 5, height: 28, display: "flex", alignItems: "center", padding: "0 10px" }}>
            <span style={{ color: "#8e9199", fontSize: 10, fontFamily: "Inter, sans-serif" }}>Email</span>
          </div>
        </div>
        <div>
          <div style={{ color: "#8e9199", fontSize: 9, fontFamily: "Inter, sans-serif", marginBottom: 5 }}>Cards</div>
          <div style={{ background: "#f7f8fc", borderRadius: 5, height: 32, display: "flex", alignItems: "center", padding: "0 10px" }}>
            <span style={{ color: "#364146", fontSize: 10, fontFamily: "Inter, sans-serif" }}>Товар</span>
          </div>
        </div>
      </div>
    </div>
  );
}

// ─── Quiz 2: Где форма сделана правильнее? ─────────────────────────────────────
export function CQKitCompare2A() {
  // Неверно: поля хаотично — разные размеры и выравнивание
  return (
    <div style={{ position: "relative", width: 260, height: 180 }}>
      <div style={{ position: "absolute", inset: 0, background: "white", borderRadius: 14, padding: "12px 16px", display: "flex", flexDirection: "column", gap: 7 }}>
        <div style={{ display: "flex", gap: 8, alignItems: "flex-end" }}>
          <div style={{ border: "1px solid #d1d3db", borderRadius: 4, height: 22, width: "38%", display: "flex", alignItems: "center", padding: "0 8px" }}>
            <span style={{ color: "#8e9199", fontSize: 9, fontFamily: "Inter, sans-serif" }}>Имя</span>
          </div>
          <div style={{ border: "1px solid #d1d3db", borderRadius: 10, height: 30, width: "57%", display: "flex", alignItems: "center", padding: "0 8px" }}>
            <span style={{ color: "#8e9199", fontSize: 9, fontFamily: "Inter, sans-serif" }}>Фамилия</span>
          </div>
        </div>
        <div style={{ border: "1px solid #d1d3db", borderRadius: 4, height: 28, display: "flex", alignItems: "center", padding: "0 8px" }}>
          <span style={{ color: "#8e9199", fontSize: 9, fontFamily: "Inter, sans-serif" }}>Email</span>
        </div>
        <div style={{ display: "flex", justifyContent: "flex-end" }}>
          <div style={{ border: "1px solid #d1d3db", borderRadius: 12, height: 22, width: "52%", display: "flex", alignItems: "center", padding: "0 8px" }}>
            <span style={{ color: "#8e9199", fontSize: 9, fontFamily: "Inter, sans-serif" }}>Пароль</span>
          </div>
        </div>
        <div style={{ background: "#3b82f6", borderRadius: 4, height: 24, width: "48%", display: "flex", alignItems: "center", justifyContent: "center" }}>
          <span style={{ color: "white", fontSize: 9, fontFamily: "Inter, sans-serif" }}>Войти</span>
        </div>
      </div>
    </div>
  );
}
export function CQKitCompare2B() {
  // Верно: поля выровнены, одинаковые отступы — системно
  return (
    <div style={{ position: "relative", width: 260, height: 180 }}>
      <div style={{ position: "absolute", inset: 0, background: "white", borderRadius: 14, padding: "12px 16px", display: "flex", flexDirection: "column", gap: 8 }}>
        <div style={{ border: "1px solid #d1d3db", borderRadius: 5, height: 28, display: "flex", alignItems: "center", padding: "0 10px" }}>
          <span style={{ color: "#8e9199", fontSize: 10, fontFamily: "Inter, sans-serif" }}>Имя</span>
        </div>
        <div style={{ border: "1px solid #d1d3db", borderRadius: 5, height: 28, display: "flex", alignItems: "center", padding: "0 10px" }}>
          <span style={{ color: "#8e9199", fontSize: 10, fontFamily: "Inter, sans-serif" }}>Email</span>
        </div>
        <div style={{ border: "1px solid #d1d3db", borderRadius: 5, height: 28, display: "flex", alignItems: "center", padding: "0 10px" }}>
          <span style={{ color: "#8e9199", fontSize: 10, fontFamily: "Inter, sans-serif" }}>Пароль</span>
        </div>
        <div style={{ background: "#3b82f6", borderRadius: 5, height: 30, display: "flex", alignItems: "center", justifyContent: "center" }}>
          <span style={{ color: "white", fontSize: 10, fontFamily: "Inter, sans-serif" }}>Войти</span>
        </div>
      </div>
    </div>
  );
}

// ─── Quiz 3: Где карточки подготовлены для UI Kit? ────────────────────────────
export function CQKitCompare3A() {
  // Неверно: карточки разной структуры
  return (
    <div style={{ position: "relative", width: 260, height: 180 }}>
      <div style={{ position: "absolute", inset: 0, background: "white", borderRadius: 14, padding: "12px 16px", display: "flex", flexDirection: "column", gap: 8 }}>
        <div style={{ background: "#f7f8fc", borderRadius: 6, padding: "8px 10px", display: "flex", gap: 10, alignItems: "center" }}>
          <div style={{ width: 44, height: 44, background: "#e2e5ee", borderRadius: 4, flexShrink: 0 }} />
          <div>
            <div style={{ color: "#364146", fontSize: 11, fontFamily: "Inter, sans-serif", fontWeight: 600 }}>Товар А</div>
            <div style={{ color: "#8e9199", fontSize: 9, fontFamily: "Inter, sans-serif", marginTop: 2 }}>999 ₽</div>
          </div>
        </div>
        <div style={{ background: "#f7f8fc", borderRadius: 6, padding: "8px 10px", display: "flex", flexDirection: "column", gap: 6 }}>
          <div style={{ color: "#364146", fontSize: 11, fontFamily: "Inter, sans-serif", fontWeight: 600 }}>Товар Б</div>
          <div style={{ color: "#8e9199", fontSize: 9, fontFamily: "Inter, sans-serif" }}>Описание товара</div>
          <div style={{ background: "#3b82f6", borderRadius: 4, height: 22, display: "flex", alignItems: "center", justifyContent: "center" }}>
            <span style={{ color: "white", fontSize: 9, fontFamily: "Inter, sans-serif" }}>Купить</span>
          </div>
        </div>
      </div>
    </div>
  );
}
export function CQKitCompare3B() {
  // Верно: один компонент карточки, одинаковая структура
  return (
    <div style={{ position: "relative", width: 260, height: 180 }}>
      <div style={{ position: "absolute", inset: 0, background: "white", borderRadius: 14, padding: "12px 16px", display: "flex", flexDirection: "column", gap: 8 }}>
        {[{ name: "Товар А", price: "999 ₽", color: "#dbeafe" }, { name: "Товар Б", price: "1 299 ₽", color: "#dcfce7" }].map((item) => (
          <div key={item.name} style={{ background: "#f7f8fc", borderRadius: 6, padding: "7px 10px", display: "flex", gap: 10, alignItems: "center" }}>
            <div style={{ width: 42, height: 42, background: item.color, borderRadius: 4, flexShrink: 0 }} />
            <div style={{ flex: 1 }}>
              <div style={{ color: "#364146", fontSize: 10, fontFamily: "Inter, sans-serif", fontWeight: 600 }}>{item.name}</div>
              <div style={{ color: "#8e9199", fontSize: 9, fontFamily: "Inter, sans-serif", marginTop: 2 }}>{item.price}</div>
              <div style={{ background: "#3b82f6", borderRadius: 4, height: 18, marginTop: 5, display: "flex", alignItems: "center", justifyContent: "center" }}>
                <span style={{ color: "white", fontSize: 8, fontFamily: "Inter, sans-serif" }}>Купить</span>
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}
export function CQKitSingle1() {
  return <div style={{ height: 231, width: 186, overflow: "hidden", borderRadius: 15 }}><Lesson5Quiz /></div>;
}
export function CQKitSingle2() {
  return <div style={{ height: 231, width: 186, overflow: "hidden", borderRadius: 15 }}><Lesson5Quiz1 /></div>;
}
export function CQKitSingle3() {
  return <div style={{ height: 231, width: 186, overflow: "hidden", borderRadius: 15 }}><Lesson5Quiz2 /></div>;
}
export function CQKitMulti1() {
  return <div style={{ height: 231, width: 186, overflow: "hidden", borderRadius: 15 }}><Lesson5Quiz3 /></div>;
}
export function CQKitMulti2() {
  return <div style={{ height: 231, width: 186, overflow: "hidden", borderRadius: 15 }}><Lesson5Quiz4 /></div>;
}
export function CQKitMulti3() {
  return <div style={{ height: 231, width: 186, overflow: "hidden", borderRadius: 15 }}><Lesson5Quiz5 /></div>;
}
export function CQKitConn1A() { return <Lesson5Quiz10Card />; }
export function CQKitConn1B() { return <Lesson5Quiz10Card1 />; }
export function CQKitConn1C() { return <Lesson5Quiz10Card2 />; }
export function CQKitConn2A() { return <Lesson5Quiz11Card />; }
export function CQKitConn2B() { return <Lesson5Quiz11Card1 />; }
export function CQKitConn2C() { return <Lesson5Quiz11Card2 />; }
export function CQKitConn3A() { return <Lesson5Quiz12Card />; }
export function CQKitConn3B() { return <Lesson5Quiz12Card1 />; }
export function CQKitConn3C() { return <Lesson5Quiz12Card2 />; }

export default function Component5UiKit() {
  return (
    <div className="relative size-full" data-name="Урок 5 — Создание UI Kit">
      <Heading />
      <Container />
      <Container42 />
      <Container63 />
      <Container91 />
    </div>
  );
}