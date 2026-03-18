import imgImageWithFallback from "figma:asset/e425135426e3dc0ed5a040f07fda2936ad73f826.png";
import imgImageWithFallback1 from "figma:asset/ec52a400a5e82dbd5c521dc9b3b88f88c59fdd05.png";
import imgImageWithFallback2 from "figma:asset/1ee69fbffd1c72702913b6c723c0aff9ce6d1232.png";
import imgImageWithFallback3 from "figma:asset/3f23c998c6d6f50a369c9a03458de29a31cbd3d6.png";

function Heading() {
  return (
    <div className="absolute h-[36px] left-0 top-0 w-[1280px]" data-name="Heading 2">
      <p className="absolute font-['Inter:Regular',sans-serif] font-normal leading-[36px] left-0 not-italic text-[#101828] text-[24px] top-0 tracking-[0.0703px] whitespace-nowrap">Урок 4 — Компоненты в Figma</p>
    </div>
  );
}

function Paragraph() {
  return (
    <div className="absolute h-[17px] left-0 top-[48px] w-[1280px]" data-name="Paragraph">
      <p className="absolute font-['Inter:Regular',sans-serif] font-normal leading-[17px] left-0 not-italic text-[#8e9199] text-[13px] top-[0.5px] tracking-[-0.16px] whitespace-nowrap">Работа с компонентами и instance</p>
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
      <p className="absolute font-['Inter:Regular',sans-serif] font-normal leading-[14px] left-0 not-italic text-[#8e9199] text-[11px] top-[0.5px] tracking-[-0.14px] whitespace-nowrap">1. Где используются компоненты?</p>
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
    <div className="h-[9px] relative shrink-0 w-full" data-name="Paragraph">
      <p className="absolute font-['Inter:Regular',sans-serif] font-normal leading-[9px] left-0 not-italic text-[6px] text-white top-[-0.5px] whitespace-nowrap">Купить</p>
    </div>
  );
}

function Container5() {
  return (
    <div className="absolute bg-[#3b82f6] content-stretch flex flex-col h-[17px] items-start left-[24.51px] pt-[4px] px-[8px] rounded-[4px] top-[97px] w-[36.328px]" data-name="Container">
      <Paragraph4 />
    </div>
  );
}

function Paragraph5() {
  return (
    <div className="h-[9px] relative shrink-0 w-full" data-name="Paragraph">
      <p className="absolute font-['Inter:Regular',sans-serif] font-normal leading-[9px] left-0 not-italic text-[6px] text-white top-[-0.5px] whitespace-nowrap">Купить</p>
    </div>
  );
}

function Container6() {
  return (
    <div className="absolute bg-[#3b82f6] content-stretch flex flex-col h-[17px] items-start left-[64.84px] pt-[4px] px-[8px] rounded-[4px] top-[97px] w-[36.328px]" data-name="Container">
      <Paragraph5 />
    </div>
  );
}

function Paragraph6() {
  return (
    <div className="h-[9px] relative shrink-0 w-full" data-name="Paragraph">
      <p className="absolute font-['Inter:Regular',sans-serif] font-normal leading-[9px] left-0 not-italic text-[6px] text-white top-[-0.5px] whitespace-nowrap">Купить</p>
    </div>
  );
}

function Container7() {
  return (
    <div className="absolute bg-[#3b82f6] content-stretch flex flex-col h-[17px] items-start left-[105.16px] pt-[4px] px-[8px] rounded-[4px] top-[97px] w-[36.328px]" data-name="Container">
      <Paragraph6 />
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

function Lesson4Quiz1VariantA() {
  return (
    <div className="absolute bg-white content-stretch flex flex-col h-[231px] items-start left-[21.3px] pt-[10px] px-[10px] rounded-[14.99px] top-0 w-[186px]" data-name="Lesson4Quiz1VariantA">
      <Container4 />
    </div>
  );
}

function Container3() {
  return (
    <div className="h-[231px] relative shrink-0 w-[207.297px]" data-name="Container">
      <div className="bg-clip-padding border-0 border-[transparent] border-solid relative size-full">
        <Paragraph3 />
        <Lesson4Quiz1VariantA />
      </div>
    </div>
  );
}

function Paragraph7() {
  return (
    <div className="absolute h-[21px] left-0 top-[8px] w-[8.945px]" data-name="Paragraph">
      <p className="absolute font-['Inter:Regular',sans-serif] font-normal leading-[21px] left-0 not-italic text-[#364146] text-[14px] top-0 tracking-[-0.17px] whitespace-nowrap">B</p>
    </div>
  );
}

function Paragraph8() {
  return (
    <div className="h-[7.5px] relative shrink-0 w-full" data-name="Paragraph">
      <p className="absolute font-['Inter:Regular',sans-serif] font-normal leading-[7.5px] left-0 not-italic text-[5px] text-white top-[-0.5px] whitespace-nowrap">Купить Component</p>
    </div>
  );
}

function Container11() {
  return (
    <div className="bg-[#3b82f6] h-[13.5px] relative rounded-[3px] shrink-0 w-full" data-name="Container">
      <div className="content-stretch flex flex-col items-start pt-[3px] px-[6px] relative size-full">
        <Paragraph8 />
      </div>
    </div>
  );
}

function Container10() {
  return (
    <div className="bg-[#f7f8fc] h-[25.5px] relative rounded-[4px] shrink-0 w-[166px]" data-name="Container">
      <div aria-hidden="true" className="absolute border-2 border-[#3b82f6] border-solid inset-0 pointer-events-none rounded-[4px]" />
      <div className="bg-clip-padding border-0 border-[transparent] border-solid content-stretch flex flex-col items-start pb-[2px] pt-[6px] px-[6px] relative size-full">
        <Container11 />
      </div>
    </div>
  );
}

function Paragraph9() {
  return (
    <div className="h-[7.5px] relative shrink-0 w-[166px]" data-name="Paragraph">
      <div className="bg-clip-padding border-0 border-[transparent] border-solid relative size-full">
        <p className="-translate-x-1/2 absolute font-['Inter:Regular',sans-serif] font-normal leading-[7.5px] left-[83.1px] not-italic text-[#8e9199] text-[5px] text-center top-[-0.5px] whitespace-nowrap">↓ instances</p>
      </div>
    </div>
  );
}

function Paragraph10() {
  return (
    <div className="h-[7.5px] relative shrink-0 w-full" data-name="Paragraph">
      <p className="absolute font-['Inter:Regular',sans-serif] font-normal leading-[7.5px] left-0 not-italic text-[5px] text-white top-[-0.5px] whitespace-nowrap">Купить</p>
    </div>
  );
}

function Container13() {
  return (
    <div className="absolute bg-[#3b82f6] content-stretch flex flex-col h-[13.5px] items-start left-0 pt-[3px] px-[6px] rounded-[3px] top-0 w-[28.945px]" data-name="Container">
      <Paragraph10 />
    </div>
  );
}

function Paragraph11() {
  return (
    <div className="h-[7.5px] relative shrink-0 w-full" data-name="Paragraph">
      <p className="absolute font-['Inter:Regular',sans-serif] font-normal leading-[7.5px] left-0 not-italic text-[5px] text-white top-[-0.5px] whitespace-nowrap">Купить</p>
    </div>
  );
}

function Container14() {
  return (
    <div className="absolute bg-[#3b82f6] content-stretch flex flex-col h-[13.5px] items-start left-[31.95px] pt-[3px] px-[6px] rounded-[3px] top-0 w-[28.945px]" data-name="Container">
      <Paragraph11 />
    </div>
  );
}

function Paragraph12() {
  return (
    <div className="h-[7.5px] relative shrink-0 w-full" data-name="Paragraph">
      <p className="absolute font-['Inter:Regular',sans-serif] font-normal leading-[7.5px] left-0 not-italic text-[5px] text-white top-[-0.5px] whitespace-nowrap">Купить</p>
    </div>
  );
}

function Container15() {
  return (
    <div className="absolute bg-[#3b82f6] content-stretch flex flex-col h-[13.5px] items-start left-[63.89px] pt-[3px] px-[6px] rounded-[3px] top-0 w-[28.945px]" data-name="Container">
      <Paragraph12 />
    </div>
  );
}

function Container12() {
  return (
    <div className="h-[13.5px] relative shrink-0 w-[166px]" data-name="Container">
      <div className="bg-clip-padding border-0 border-[transparent] border-solid relative size-full">
        <Container13 />
        <Container14 />
        <Container15 />
      </div>
    </div>
  );
}

function Container9() {
  return (
    <div className="content-stretch flex flex-col gap-[6px] h-[211px] items-start justify-center py-[76.25px] relative shrink-0 w-full" data-name="Container">
      <Container10 />
      <Paragraph9 />
      <Container12 />
    </div>
  );
}

function Lesson4Quiz1VariantB() {
  return (
    <div className="absolute bg-white content-stretch flex flex-col h-[231px] items-start left-[20.95px] pt-[10px] px-[10px] rounded-[14.99px] top-0 w-[186px]" data-name="Lesson4Quiz1VariantB">
      <Container9 />
    </div>
  );
}

function Container8() {
  return (
    <div className="h-[231px] relative shrink-0 w-[206.945px]" data-name="Container">
      <div className="bg-clip-padding border-0 border-[transparent] border-solid relative size-full">
        <Paragraph7 />
        <Lesson4Quiz1VariantB />
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
      <Paragraph2 />
      <Container2 />
    </div>
  );
}

function Paragraph13() {
  return (
    <div className="h-[14px] relative shrink-0 w-full" data-name="Paragraph">
      <p className="absolute font-['Inter:Regular',sans-serif] font-normal leading-[14px] left-0 not-italic text-[#8e9199] text-[11px] top-[0.5px] tracking-[-0.14px] whitespace-nowrap">2. Где используются варианты компонентов?</p>
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

function Paragraph15() {
  return (
    <div className="h-[9px] relative shrink-0 w-full" data-name="Paragraph">
      <p className="absolute font-['Inter:Regular',sans-serif] font-normal leading-[9px] left-0 not-italic text-[6px] text-white top-[-0.5px] whitespace-nowrap">Купить</p>
    </div>
  );
}

function Container20() {
  return (
    <div className="bg-[#3b82f6] h-[17px] relative rounded-[4px] shrink-0 w-[166px]" data-name="Container">
      <div className="bg-clip-padding border-0 border-[transparent] border-solid content-stretch flex flex-col items-start pt-[4px] px-[8px] relative size-full">
        <Paragraph15 />
      </div>
    </div>
  );
}

function Paragraph16() {
  return (
    <div className="h-[9px] relative shrink-0 w-full" data-name="Paragraph">
      <p className="absolute font-['Inter:Regular',sans-serif] font-normal leading-[9px] left-0 not-italic text-[#3b82f6] text-[6px] top-[-0.5px] whitespace-nowrap">Отмена</p>
    </div>
  );
}

function Container21() {
  return (
    <div className="bg-[#f7f8fc] h-[19px] relative rounded-[4px] shrink-0 w-[166px]" data-name="Container">
      <div aria-hidden="true" className="absolute border border-[#3b82f6] border-solid inset-0 pointer-events-none rounded-[4px]" />
      <div className="bg-clip-padding border-0 border-[transparent] border-solid content-stretch flex flex-col items-start pb-px pt-[5px] px-[9px] relative size-full">
        <Paragraph16 />
      </div>
    </div>
  );
}

function Paragraph17() {
  return (
    <div className="h-[9px] relative shrink-0 w-full" data-name="Paragraph">
      <p className="absolute font-['Inter:Regular',sans-serif] font-normal leading-[9px] left-0 not-italic text-[#a0a0a0] text-[6px] top-[-0.5px] whitespace-nowrap">Недоступно</p>
    </div>
  );
}

function Container22() {
  return (
    <div className="bg-[#e8e8e8] h-[17px] relative rounded-[4px] shrink-0 w-[166px]" data-name="Container">
      <div className="bg-clip-padding border-0 border-[transparent] border-solid content-stretch flex flex-col items-start pt-[4px] px-[8px] relative size-full">
        <Paragraph17 />
      </div>
    </div>
  );
}

function Container19() {
  return (
    <div className="content-stretch flex flex-col gap-[6px] h-[211px] items-start justify-center py-[73px] relative shrink-0 w-full" data-name="Container">
      <Container20 />
      <Container21 />
      <Container22 />
    </div>
  );
}

function Lesson4Quiz2VariantA() {
  return (
    <div className="absolute bg-white content-stretch flex flex-col h-[231px] items-start left-[21.3px] pt-[10px] px-[10px] rounded-[14.99px] top-0 w-[186px]" data-name="Lesson4Quiz2VariantA">
      <Container19 />
    </div>
  );
}

function Container18() {
  return (
    <div className="h-[231px] relative shrink-0 w-[207.297px]" data-name="Container">
      <div className="bg-clip-padding border-0 border-[transparent] border-solid relative size-full">
        <Paragraph14 />
        <Lesson4Quiz2VariantA />
      </div>
    </div>
  );
}

function Paragraph18() {
  return (
    <div className="absolute h-[21px] left-0 top-[8px] w-[8.945px]" data-name="Paragraph">
      <p className="absolute font-['Inter:Regular',sans-serif] font-normal leading-[21px] left-0 not-italic text-[#364146] text-[14px] top-0 tracking-[-0.17px] whitespace-nowrap">B</p>
    </div>
  );
}

function Paragraph19() {
  return (
    <div className="h-[7.5px] relative shrink-0 w-full" data-name="Paragraph">
      <p className="absolute font-['Inter:Regular',sans-serif] font-normal leading-[7.5px] left-0 not-italic text-[#8e9199] text-[5px] top-[-0.5px] whitespace-nowrap">Button variants:</p>
    </div>
  );
}

function Paragraph20() {
  return (
    <div className="h-[7.5px] relative shrink-0 w-full" data-name="Paragraph">
      <p className="absolute font-['Inter:Regular',sans-serif] font-normal leading-[7.5px] left-0 not-italic text-[5px] text-white top-[-0.5px] whitespace-nowrap">Primary</p>
    </div>
  );
}

function Container27() {
  return (
    <div className="bg-[#3b82f6] h-[13.5px] relative rounded-[3px] shrink-0 w-[152px]" data-name="Container">
      <div className="bg-clip-padding border-0 border-[transparent] border-solid content-stretch flex flex-col items-start pt-[3px] px-[6px] relative size-full">
        <Paragraph20 />
      </div>
    </div>
  );
}

function Paragraph21() {
  return (
    <div className="h-[7.5px] relative shrink-0 w-full" data-name="Paragraph">
      <p className="absolute font-['Inter:Regular',sans-serif] font-normal leading-[7.5px] left-0 not-italic text-[#3b82f6] text-[5px] top-[-0.5px] whitespace-nowrap">Secondary</p>
    </div>
  );
}

function Container28() {
  return (
    <div className="bg-[#f7f8fc] flex-[1_0_0] min-h-px min-w-px relative rounded-[3px] w-[152px]" data-name="Container">
      <div aria-hidden="true" className="absolute border border-[#3b82f6] border-solid inset-0 pointer-events-none rounded-[3px]" />
      <div className="bg-clip-padding border-0 border-[transparent] border-solid content-stretch flex flex-col items-start pb-px pt-[4px] px-[7px] relative size-full">
        <Paragraph21 />
      </div>
    </div>
  );
}

function Paragraph22() {
  return (
    <div className="h-[7.5px] relative shrink-0 w-full" data-name="Paragraph">
      <p className="absolute font-['Inter:Regular',sans-serif] font-normal leading-[7.5px] left-0 not-italic text-[#a0a0a0] text-[5px] top-[-0.5px] whitespace-nowrap">Disabled</p>
    </div>
  );
}

function Container29() {
  return (
    <div className="bg-[#e8e8e8] h-[13.5px] relative rounded-[3px] shrink-0 w-[152px]" data-name="Container">
      <div className="bg-clip-padding border-0 border-[transparent] border-solid content-stretch flex flex-col items-start pt-[3px] px-[6px] relative size-full">
        <Paragraph22 />
      </div>
    </div>
  );
}

function Container26() {
  return (
    <div className="content-stretch flex flex-col gap-[3px] h-[48.5px] items-start relative shrink-0 w-full" data-name="Container">
      <Container27 />
      <Container28 />
      <Container29 />
    </div>
  );
}

function Container25() {
  return (
    <div className="bg-[#f7f8fc] h-[73px] relative rounded-[4px] shrink-0 w-[166px]" data-name="Container">
      <div aria-hidden="true" className="absolute border border-[#d1d3db] border-solid inset-0 pointer-events-none rounded-[4px]" />
      <div className="bg-clip-padding border-0 border-[transparent] border-solid content-stretch flex flex-col gap-[3px] items-start pb-px pt-[7px] px-[7px] relative size-full">
        <Paragraph19 />
        <Container26 />
      </div>
    </div>
  );
}

function Container24() {
  return (
    <div className="content-stretch flex flex-col h-[211px] items-start justify-center py-[69px] relative shrink-0 w-full" data-name="Container">
      <Container25 />
    </div>
  );
}

function Lesson4Quiz2VariantB() {
  return (
    <div className="absolute bg-white content-stretch flex flex-col h-[231px] items-start left-[20.95px] pt-[10px] px-[10px] rounded-[14.99px] top-0 w-[186px]" data-name="Lesson4Quiz2VariantB">
      <Container24 />
    </div>
  );
}

function Container23() {
  return (
    <div className="h-[231px] relative shrink-0 w-[206.945px]" data-name="Container">
      <div className="bg-clip-padding border-0 border-[transparent] border-solid relative size-full">
        <Paragraph18 />
        <Lesson4Quiz2VariantB />
      </div>
    </div>
  );
}

function Container17() {
  return (
    <div className="content-stretch flex gap-[40px] h-[231px] items-start relative shrink-0 w-full" data-name="Container">
      <Container18 />
      <Container23 />
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

function Paragraph23() {
  return (
    <div className="h-[14px] relative shrink-0 w-full" data-name="Paragraph">
      <p className="absolute font-['Inter:Regular',sans-serif] font-normal leading-[14px] left-0 not-italic text-[#8e9199] text-[11px] top-[0.5px] tracking-[-0.14px] whitespace-nowrap">3. Где легче редактировать интерфейс?</p>
    </div>
  );
}

function Paragraph24() {
  return (
    <div className="absolute h-[21px] left-0 top-[8px] w-[9.297px]" data-name="Paragraph">
      <p className="absolute font-['Inter:Regular',sans-serif] font-normal leading-[21px] left-0 not-italic text-[#364146] text-[14px] top-0 tracking-[-0.17px] whitespace-nowrap">A</p>
    </div>
  );
}

function ImageWithFallback() {
  return (
    <div className="h-[18px] relative rounded-[2px] shrink-0 w-full" data-name="ImageWithFallback">
      <img alt="" className="absolute inset-0 max-w-none object-cover pointer-events-none rounded-[2px] size-full" src={imgImageWithFallback} />
    </div>
  );
}

function Paragraph25() {
  return (
    <div className="h-[6px] relative shrink-0 w-full" data-name="Paragraph">
      <p className="absolute font-['Inter:Regular',sans-serif] font-normal leading-[6px] left-0 not-italic text-[#364146] text-[4px] top-[0.5px] whitespace-nowrap">Товар</p>
    </div>
  );
}

function Container35() {
  return (
    <div className="absolute bg-[#f7f8fc] content-stretch flex flex-col gap-px h-[33px] items-start left-0 pb-px pt-[4px] px-[4px] rounded-[3px] top-0 w-[38px]" data-name="Container">
      <div aria-hidden="true" className="absolute border border-[#d1d3db] border-solid inset-0 pointer-events-none rounded-[3px]" />
      <ImageWithFallback />
      <Paragraph25 />
    </div>
  );
}

function ImageWithFallback1() {
  return (
    <div className="h-[18px] relative rounded-[2px] shrink-0 w-full" data-name="ImageWithFallback">
      <img alt="" className="absolute inset-0 max-w-none object-cover pointer-events-none rounded-[2px] size-full" src={imgImageWithFallback} />
    </div>
  );
}

function Paragraph26() {
  return (
    <div className="h-[6px] relative shrink-0 w-full" data-name="Paragraph">
      <p className="absolute font-['Inter:Regular',sans-serif] font-normal leading-[6px] left-0 not-italic text-[#364146] text-[4px] top-[0.5px] whitespace-nowrap">Товар</p>
    </div>
  );
}

function Container36() {
  return (
    <div className="absolute bg-[#f7f8fc] content-stretch flex flex-col gap-px h-[33px] items-start left-[41px] pb-px pt-[4px] px-[4px] rounded-[3px] top-0 w-[38px]" data-name="Container">
      <div aria-hidden="true" className="absolute border border-[#d1d3db] border-solid inset-0 pointer-events-none rounded-[3px]" />
      <ImageWithFallback1 />
      <Paragraph26 />
    </div>
  );
}

function ImageWithFallback2() {
  return (
    <div className="h-[18px] relative rounded-[2px] shrink-0 w-full" data-name="ImageWithFallback">
      <img alt="" className="absolute inset-0 max-w-none object-cover pointer-events-none rounded-[2px] size-full" src={imgImageWithFallback} />
    </div>
  );
}

function Paragraph27() {
  return (
    <div className="h-[6px] relative shrink-0 w-full" data-name="Paragraph">
      <p className="absolute font-['Inter:Regular',sans-serif] font-normal leading-[6px] left-0 not-italic text-[#364146] text-[4px] top-[0.5px] whitespace-nowrap">Товар</p>
    </div>
  );
}

function Container37() {
  return (
    <div className="absolute bg-[#f7f8fc] content-stretch flex flex-col gap-px h-[33px] items-start left-[82px] pb-px pt-[4px] px-[4px] rounded-[3px] top-0 w-[38px]" data-name="Container">
      <div aria-hidden="true" className="absolute border border-[#d1d3db] border-solid inset-0 pointer-events-none rounded-[3px]" />
      <ImageWithFallback2 />
      <Paragraph27 />
    </div>
  );
}

function ImageWithFallback3() {
  return (
    <div className="h-[18px] relative rounded-[2px] shrink-0 w-full" data-name="ImageWithFallback">
      <img alt="" className="absolute inset-0 max-w-none object-cover pointer-events-none rounded-[2px] size-full" src={imgImageWithFallback} />
    </div>
  );
}

function Paragraph28() {
  return (
    <div className="h-[6px] relative shrink-0 w-full" data-name="Paragraph">
      <p className="absolute font-['Inter:Regular',sans-serif] font-normal leading-[6px] left-0 not-italic text-[#364146] text-[4px] top-[0.5px] whitespace-nowrap">Товар</p>
    </div>
  );
}

function Container38() {
  return (
    <div className="absolute bg-[#f7f8fc] content-stretch flex flex-col gap-px h-[33px] items-start left-[123px] pb-px pt-[4px] px-[4px] rounded-[3px] top-0 w-[38px]" data-name="Container">
      <div aria-hidden="true" className="absolute border border-[#d1d3db] border-solid inset-0 pointer-events-none rounded-[3px]" />
      <ImageWithFallback3 />
      <Paragraph28 />
    </div>
  );
}

function ImageWithFallback4() {
  return (
    <div className="h-[18px] relative rounded-[2px] shrink-0 w-full" data-name="ImageWithFallback">
      <img alt="" className="absolute inset-0 max-w-none object-cover pointer-events-none rounded-[2px] size-full" src={imgImageWithFallback} />
    </div>
  );
}

function Paragraph29() {
  return (
    <div className="h-[6px] relative shrink-0 w-full" data-name="Paragraph">
      <p className="absolute font-['Inter:Regular',sans-serif] font-normal leading-[6px] left-0 not-italic text-[#364146] text-[4px] top-[0.5px] whitespace-nowrap">Товар</p>
    </div>
  );
}

function Container39() {
  return (
    <div className="absolute bg-[#f7f8fc] content-stretch flex flex-col gap-px h-[33px] items-start left-0 pb-px pt-[4px] px-[4px] rounded-[3px] top-[36px] w-[38px]" data-name="Container">
      <div aria-hidden="true" className="absolute border border-[#d1d3db] border-solid inset-0 pointer-events-none rounded-[3px]" />
      <ImageWithFallback4 />
      <Paragraph29 />
    </div>
  );
}

function ImageWithFallback5() {
  return (
    <div className="h-[18px] relative rounded-[2px] shrink-0 w-full" data-name="ImageWithFallback">
      <img alt="" className="absolute inset-0 max-w-none object-cover pointer-events-none rounded-[2px] size-full" src={imgImageWithFallback} />
    </div>
  );
}

function Paragraph30() {
  return (
    <div className="h-[6px] relative shrink-0 w-full" data-name="Paragraph">
      <p className="absolute font-['Inter:Regular',sans-serif] font-normal leading-[6px] left-0 not-italic text-[#364146] text-[4px] top-[0.5px] whitespace-nowrap">Товар</p>
    </div>
  );
}

function Container40() {
  return (
    <div className="absolute bg-[#f7f8fc] content-stretch flex flex-col gap-px h-[33px] items-start left-[41px] pb-px pt-[4px] px-[4px] rounded-[3px] top-[36px] w-[38px]" data-name="Container">
      <div aria-hidden="true" className="absolute border border-[#d1d3db] border-solid inset-0 pointer-events-none rounded-[3px]" />
      <ImageWithFallback5 />
      <Paragraph30 />
    </div>
  );
}

function Container34() {
  return (
    <div className="h-[69px] relative shrink-0 w-[166px]" data-name="Container">
      <div className="bg-clip-padding border-0 border-[transparent] border-solid relative size-full">
        <Container35 />
        <Container36 />
        <Container37 />
        <Container38 />
        <Container39 />
        <Container40 />
      </div>
    </div>
  );
}

function Container33() {
  return (
    <div className="content-stretch flex flex-col h-[211px] items-start justify-center py-[71px] relative shrink-0 w-full" data-name="Container">
      <Container34 />
    </div>
  );
}

function Lesson4Quiz3VariantA() {
  return (
    <div className="absolute bg-white content-stretch flex flex-col h-[231px] items-start left-[21.3px] pt-[10px] px-[10px] rounded-[14.99px] top-0 w-[186px]" data-name="Lesson4Quiz3VariantA">
      <Container33 />
    </div>
  );
}

function Container32() {
  return (
    <div className="h-[231px] relative shrink-0 w-[207.297px]" data-name="Container">
      <div className="bg-clip-padding border-0 border-[transparent] border-solid relative size-full">
        <Paragraph24 />
        <Lesson4Quiz3VariantA />
      </div>
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

function ImageWithFallback6() {
  return (
    <div className="h-[18px] relative rounded-[2px] shrink-0 w-full" data-name="ImageWithFallback">
      <img alt="" className="absolute inset-0 max-w-none object-cover pointer-events-none rounded-[2px] size-full" src={imgImageWithFallback} />
    </div>
  );
}

function Paragraph32() {
  return (
    <div className="h-[6px] relative shrink-0 w-full" data-name="Paragraph">
      <p className="absolute font-['Inter:Regular',sans-serif] font-normal leading-[6px] left-0 not-italic text-[#364146] text-[4px] top-[0.5px] whitespace-nowrap">Card</p>
    </div>
  );
}

function Container44() {
  return (
    <div className="bg-[#f7f8fc] h-[35px] relative rounded-[3px] shrink-0 w-[40px]" data-name="Container">
      <div aria-hidden="true" className="absolute border-2 border-[#3b82f6] border-solid inset-0 pointer-events-none rounded-[3px]" />
      <div className="bg-clip-padding border-0 border-[transparent] border-solid content-stretch flex flex-col gap-px items-start pb-[2px] pt-[5px] px-[5px] relative size-full">
        <ImageWithFallback6 />
        <Paragraph32 />
      </div>
    </div>
  );
}

function Paragraph33() {
  return (
    <div className="h-[7.5px] relative shrink-0 w-[4.773px]" data-name="Paragraph">
      <div className="bg-clip-padding border-0 border-[transparent] border-solid relative size-full">
        <p className="absolute font-['Inter:Regular',sans-serif] font-normal leading-[7.5px] left-0 not-italic text-[#8e9199] text-[5px] top-[-0.5px] whitespace-nowrap">→</p>
      </div>
    </div>
  );
}

function ImageWithFallback7() {
  return (
    <div className="h-[9px] relative rounded-[1px] shrink-0 w-full" data-name="ImageWithFallback">
      <img alt="" className="absolute inset-0 max-w-none object-cover pointer-events-none rounded-[1px] size-full" src={imgImageWithFallback1} />
    </div>
  );
}

function Container46() {
  return (
    <div className="absolute bg-[#f7f8fc] content-stretch flex flex-col items-start left-0 pb-px pt-[3px] px-[3px] rounded-[2px] size-[15px] top-0" data-name="Container">
      <div aria-hidden="true" className="absolute border border-[#d1d3db] border-solid inset-0 pointer-events-none rounded-[2px]" />
      <ImageWithFallback7 />
    </div>
  );
}

function ImageWithFallback8() {
  return (
    <div className="h-[9px] relative rounded-[1px] shrink-0 w-full" data-name="ImageWithFallback">
      <img alt="" className="absolute inset-0 max-w-none object-cover pointer-events-none rounded-[1px] size-full" src={imgImageWithFallback1} />
    </div>
  );
}

function Container47() {
  return (
    <div className="absolute bg-[#f7f8fc] content-stretch flex flex-col items-start left-[17px] pb-px pt-[3px] px-[3px] rounded-[2px] size-[15px] top-0" data-name="Container">
      <div aria-hidden="true" className="absolute border border-[#d1d3db] border-solid inset-0 pointer-events-none rounded-[2px]" />
      <ImageWithFallback8 />
    </div>
  );
}

function ImageWithFallback9() {
  return (
    <div className="h-[9px] relative rounded-[1px] shrink-0 w-full" data-name="ImageWithFallback">
      <img alt="" className="absolute inset-0 max-w-none object-cover pointer-events-none rounded-[1px] size-full" src={imgImageWithFallback1} />
    </div>
  );
}

function Container48() {
  return (
    <div className="absolute bg-[#f7f8fc] content-stretch flex flex-col items-start left-[34px] pb-px pt-[3px] px-[3px] rounded-[2px] size-[15px] top-0" data-name="Container">
      <div aria-hidden="true" className="absolute border border-[#d1d3db] border-solid inset-0 pointer-events-none rounded-[2px]" />
      <ImageWithFallback9 />
    </div>
  );
}

function ImageWithFallback10() {
  return (
    <div className="h-[9px] relative rounded-[1px] shrink-0 w-full" data-name="ImageWithFallback">
      <img alt="" className="absolute inset-0 max-w-none object-cover pointer-events-none rounded-[1px] size-full" src={imgImageWithFallback1} />
    </div>
  );
}

function Container49() {
  return (
    <div className="absolute bg-[#f7f8fc] content-stretch flex flex-col items-start left-[51px] pb-px pt-[3px] px-[3px] rounded-[2px] size-[15px] top-0" data-name="Container">
      <div aria-hidden="true" className="absolute border border-[#d1d3db] border-solid inset-0 pointer-events-none rounded-[2px]" />
      <ImageWithFallback10 />
    </div>
  );
}

function ImageWithFallback11() {
  return (
    <div className="h-[9px] relative rounded-[1px] shrink-0 w-full" data-name="ImageWithFallback">
      <img alt="" className="absolute inset-0 max-w-none object-cover pointer-events-none rounded-[1px] size-full" src={imgImageWithFallback1} />
    </div>
  );
}

function Container50() {
  return (
    <div className="absolute bg-[#f7f8fc] content-stretch flex flex-col items-start left-[68px] pb-px pt-[3px] px-[3px] rounded-[2px] size-[15px] top-0" data-name="Container">
      <div aria-hidden="true" className="absolute border border-[#d1d3db] border-solid inset-0 pointer-events-none rounded-[2px]" />
      <ImageWithFallback11 />
    </div>
  );
}

function Container45() {
  return (
    <div className="h-[15px] relative shrink-0 w-[83px]" data-name="Container">
      <div className="bg-clip-padding border-0 border-[transparent] border-solid relative size-full">
        <Container46 />
        <Container47 />
        <Container48 />
        <Container49 />
        <Container50 />
      </div>
    </div>
  );
}

function Container43() {
  return (
    <div className="h-[35px] relative shrink-0 w-[166px]" data-name="Container">
      <div className="bg-clip-padding border-0 border-[transparent] border-solid content-stretch flex gap-[3px] items-center relative size-full">
        <Container44 />
        <Paragraph33 />
        <Container45 />
      </div>
    </div>
  );
}

function Container42() {
  return (
    <div className="content-stretch flex flex-col h-[211px] items-start justify-center py-[88px] relative shrink-0 w-full" data-name="Container">
      <Container43 />
    </div>
  );
}

function Lesson4Quiz3VariantB() {
  return (
    <div className="absolute bg-white content-stretch flex flex-col h-[231px] items-start left-[20.95px] pt-[10px] px-[10px] rounded-[14.99px] top-0 w-[186px]" data-name="Lesson4Quiz3VariantB">
      <Container42 />
    </div>
  );
}

function Container41() {
  return (
    <div className="h-[231px] relative shrink-0 w-[206.945px]" data-name="Container">
      <div className="bg-clip-padding border-0 border-[transparent] border-solid relative size-full">
        <Paragraph31 />
        <Lesson4Quiz3VariantB />
      </div>
    </div>
  );
}

function Container31() {
  return (
    <div className="content-stretch flex gap-[40px] h-[231px] items-start relative shrink-0 w-full" data-name="Container">
      <Container32 />
      <Container41 />
    </div>
  );
}

function Container30() {
  return (
    <div className="absolute content-stretch flex flex-col gap-[24px] h-[269px] items-start left-0 top-[724px] w-[1280px]" data-name="Container">
      <Paragraph23 />
      <Container31 />
    </div>
  );
}

function Container() {
  return (
    <div className="absolute h-[993px] left-0 top-[129px] w-[631px]" data-name="Container">
      <Heading1 />
      <Paragraph1 />
      <Container1 />
      <Container16 />
      <Container30 />
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

function Paragraph34() {
  return (
    <div className="absolute content-stretch flex h-[15px] items-start left-0 top-[35px] w-[1280px]" data-name="Paragraph">
      <p className="flex-[1_0_0] font-['Inter:Regular',sans-serif] font-normal leading-[15px] min-h-px min-w-px not-italic relative text-[#8e9199] text-[12px] tracking-[-0.15px]">Выберите один правильный ответ</p>
    </div>
  );
}

function Paragraph35() {
  return (
    <div className="h-[14px] relative shrink-0 w-full" data-name="Paragraph">
      <p className="absolute font-['Inter:Regular',sans-serif] font-normal leading-[14px] left-0 not-italic text-[#8e9199] text-[11px] top-[0.5px] tracking-[-0.14px] whitespace-nowrap">4. Что такое компонент?</p>
    </div>
  );
}

function Paragraph36() {
  return (
    <div className="h-[9px] relative shrink-0 w-full" data-name="Paragraph">
      <p className="absolute font-['Inter:Regular',sans-serif] font-normal leading-[9px] left-0 not-italic text-[6px] text-white top-[-0.5px] whitespace-nowrap">Купить</p>
    </div>
  );
}

function Container56() {
  return (
    <div className="bg-[#3b82f6] h-[17px] relative rounded-[3px] shrink-0 w-full" data-name="Container">
      <div className="content-stretch flex flex-col items-start pt-[4px] px-[8px] relative size-full">
        <Paragraph36 />
      </div>
    </div>
  );
}

function Container55() {
  return (
    <div className="bg-[#f7f8fc] h-[29px] relative rounded-[4px] shrink-0 w-[166px]" data-name="Container">
      <div aria-hidden="true" className="absolute border-2 border-[#3b82f6] border-solid inset-0 pointer-events-none rounded-[4px]" />
      <div className="bg-clip-padding border-0 border-[transparent] border-solid content-stretch flex flex-col items-start pb-[2px] pt-[6px] px-[6px] relative size-full">
        <Container56 />
      </div>
    </div>
  );
}

function Paragraph37() {
  return (
    <div className="h-[9px] relative shrink-0 w-[166px]" data-name="Paragraph">
      <div className="bg-clip-padding border-0 border-[transparent] border-solid relative size-full">
        <p className="-translate-x-1/2 absolute font-['Inter:Regular',sans-serif] font-normal leading-[9px] left-[83.13px] not-italic text-[#8e9199] text-[6px] text-center top-[-0.5px] whitespace-nowrap">↓</p>
      </div>
    </div>
  );
}

function Paragraph38() {
  return (
    <div className="h-[7.5px] relative shrink-0 w-full" data-name="Paragraph">
      <p className="absolute font-['Inter:Regular',sans-serif] font-normal leading-[7.5px] left-0 not-italic text-[5px] text-white top-[-0.5px] whitespace-nowrap">Купить</p>
    </div>
  );
}

function Container58() {
  return (
    <div className="bg-[#3b82f6] h-[13.5px] relative rounded-[3px] shrink-0 w-[28.945px]" data-name="Container">
      <div className="bg-clip-padding border-0 border-[transparent] border-solid content-stretch flex flex-col items-start pt-[3px] px-[6px] relative size-full">
        <Paragraph38 />
      </div>
    </div>
  );
}

function Paragraph39() {
  return (
    <div className="h-[7.5px] relative shrink-0 w-full" data-name="Paragraph">
      <p className="absolute font-['Inter:Regular',sans-serif] font-normal leading-[7.5px] left-0 not-italic text-[5px] text-white top-[-0.5px] whitespace-nowrap">Купить</p>
    </div>
  );
}

function Container59() {
  return (
    <div className="bg-[#3b82f6] h-[13.5px] relative rounded-[3px] shrink-0 w-[28.945px]" data-name="Container">
      <div className="bg-clip-padding border-0 border-[transparent] border-solid content-stretch flex flex-col items-start pt-[3px] px-[6px] relative size-full">
        <Paragraph39 />
      </div>
    </div>
  );
}

function Container57() {
  return (
    <div className="h-[13.5px] relative shrink-0 w-[166px]" data-name="Container">
      <div className="bg-clip-padding border-0 border-[transparent] border-solid content-stretch flex gap-[3px] items-start relative size-full">
        <Container58 />
        <Container59 />
      </div>
    </div>
  );
}

function Container54() {
  return (
    <div className="content-stretch flex flex-col gap-[6px] h-[211px] items-start justify-center py-[73.75px] relative shrink-0 w-full" data-name="Container">
      <Container55 />
      <Paragraph37 />
      <Container57 />
    </div>
  );
}

function Lesson4Quiz() {
  return (
    <div className="bg-white flex-[1_0_0] min-h-px min-w-px relative rounded-[14.99px] w-[186px]" data-name="Lesson4Quiz4">
      <div className="bg-clip-padding border-0 border-[transparent] border-solid content-stretch flex flex-col items-start pt-[10px] px-[10px] relative size-full">
        <Container54 />
      </div>
    </div>
  );
}

function Paragraph40() {
  return (
    <div className="h-[15px] relative shrink-0 w-[1280px]" data-name="Paragraph">
      <div className="bg-clip-padding border-0 border-[transparent] border-solid relative size-full">
        <p className="absolute font-['Inter:Regular',sans-serif] font-normal leading-[15px] left-0 not-italic text-[#364146] text-[10px] top-[0.5px] tracking-[-0.13px] whitespace-nowrap">• Один элемент → много копий</p>
      </div>
    </div>
  );
}

function Paragraph41() {
  return (
    <div className="h-[15px] relative shrink-0 w-[1280px]" data-name="Paragraph">
      <div className="bg-clip-padding border-0 border-[transparent] border-solid relative size-full">
        <p className="absolute font-['Inter:Regular',sans-serif] font-normal leading-[15px] left-0 not-italic text-[#364146] text-[10px] top-[0.5px] tracking-[-0.13px] whitespace-nowrap">• Цвет интерфейса</p>
      </div>
    </div>
  );
}

function Paragraph42() {
  return (
    <div className="flex-[1_0_0] min-h-px min-w-px relative w-[1280px]" data-name="Paragraph">
      <div className="bg-clip-padding border-0 border-[transparent] border-solid relative size-full">
        <p className="absolute font-['Inter:Regular',sans-serif] font-normal leading-[15px] left-0 not-italic text-[#364146] text-[10px] top-[0.5px] tracking-[-0.13px] whitespace-nowrap">• Шрифт</p>
      </div>
    </div>
  );
}

function Container60() {
  return (
    <div className="h-[61px] relative shrink-0 w-[1280px]" data-name="Container">
      <div className="bg-clip-padding border-0 border-[transparent] border-solid content-stretch flex flex-col gap-[8px] items-start relative size-full">
        <Paragraph40 />
        <Paragraph41 />
        <Paragraph42 />
      </div>
    </div>
  );
}

function Container53() {
  return (
    <div className="content-stretch flex flex-col gap-[16px] h-[308px] items-start relative shrink-0 w-full" data-name="Container">
      <Lesson4Quiz />
      <Container60 />
    </div>
  );
}

function Container52() {
  return (
    <div className="absolute content-stretch flex flex-col gap-[24px] h-[346px] items-start left-0 top-[90px] w-[1280px]" data-name="Container">
      <Paragraph35 />
      <Container53 />
    </div>
  );
}

function Paragraph43() {
  return (
    <div className="h-[14px] relative shrink-0 w-full" data-name="Paragraph">
      <p className="absolute font-['Inter:Regular',sans-serif] font-normal leading-[14px] left-0 not-italic text-[#8e9199] text-[11px] top-[0.5px] tracking-[-0.14px] whitespace-nowrap">5. Что такое instance?</p>
    </div>
  );
}

function Paragraph44() {
  return (
    <div className="h-[9px] relative shrink-0 w-full" data-name="Paragraph">
      <p className="absolute font-['Inter:Regular',sans-serif] font-normal leading-[9px] left-0 not-italic text-[#364146] text-[6px] top-[-0.5px] whitespace-nowrap">Component</p>
    </div>
  );
}

function Container64() {
  return (
    <div className="bg-[#f7f8fc] h-[21px] relative rounded-[4px] shrink-0 w-[166px]" data-name="Container">
      <div aria-hidden="true" className="absolute border-2 border-[#3b82f6] border-solid inset-0 pointer-events-none rounded-[4px]" />
      <div className="bg-clip-padding border-0 border-[transparent] border-solid content-stretch flex flex-col items-start pb-[2px] pt-[6px] px-[6px] relative size-full">
        <Paragraph44 />
      </div>
    </div>
  );
}

function Paragraph45() {
  return (
    <div className="h-[9px] relative shrink-0 w-full" data-name="Paragraph">
      <p className="absolute font-['Inter:Regular',sans-serif] font-normal leading-[9px] left-0 not-italic text-[#364146] text-[6px] top-[-0.5px] whitespace-nowrap">Instance</p>
    </div>
  );
}

function Container65() {
  return (
    <div className="bg-[#f7f8fc] h-[19px] relative rounded-[4px] shrink-0 w-[166px]" data-name="Container">
      <div aria-hidden="true" className="absolute border border-[#d1d3db] border-solid inset-0 pointer-events-none rounded-[4px]" />
      <div className="bg-clip-padding border-0 border-[transparent] border-solid content-stretch flex flex-col items-start pb-px pt-[5px] px-[5px] relative size-full">
        <Paragraph45 />
      </div>
    </div>
  );
}

function Container63() {
  return (
    <div className="content-stretch flex flex-col gap-[6px] h-[211px] items-start justify-center py-[82.5px] relative shrink-0 w-full" data-name="Container">
      <Container64 />
      <Container65 />
    </div>
  );
}

function Lesson4Quiz1() {
  return (
    <div className="bg-white flex-[1_0_0] min-h-px min-w-px relative rounded-[14.99px] w-[186px]" data-name="Lesson4Quiz5">
      <div className="bg-clip-padding border-0 border-[transparent] border-solid content-stretch flex flex-col items-start pt-[10px] px-[10px] relative size-full">
        <Container63 />
      </div>
    </div>
  );
}

function Paragraph46() {
  return (
    <div className="h-[15px] relative shrink-0 w-[1280px]" data-name="Paragraph">
      <div className="bg-clip-padding border-0 border-[transparent] border-solid relative size-full">
        <p className="absolute font-['Inter:Regular',sans-serif] font-normal leading-[15px] left-0 not-italic text-[#364146] text-[10px] top-[0.5px] tracking-[-0.13px] whitespace-nowrap">• Копия компонента</p>
      </div>
    </div>
  );
}

function Paragraph47() {
  return (
    <div className="h-[15px] relative shrink-0 w-[1280px]" data-name="Paragraph">
      <div className="bg-clip-padding border-0 border-[transparent] border-solid relative size-full">
        <p className="absolute font-['Inter:Regular',sans-serif] font-normal leading-[15px] left-0 not-italic text-[#364146] text-[10px] top-[0.5px] tracking-[-0.13px] whitespace-nowrap">• Отдельный элемент</p>
      </div>
    </div>
  );
}

function Paragraph48() {
  return (
    <div className="flex-[1_0_0] min-h-px min-w-px relative w-[1280px]" data-name="Paragraph">
      <div className="bg-clip-padding border-0 border-[transparent] border-solid relative size-full">
        <p className="absolute font-['Inter:Regular',sans-serif] font-normal leading-[15px] left-0 not-italic text-[#364146] text-[10px] top-[0.5px] tracking-[-0.13px] whitespace-nowrap">• Цветовая схема</p>
      </div>
    </div>
  );
}

function Container66() {
  return (
    <div className="h-[61px] relative shrink-0 w-[1280px]" data-name="Container">
      <div className="bg-clip-padding border-0 border-[transparent] border-solid content-stretch flex flex-col gap-[8px] items-start relative size-full">
        <Paragraph46 />
        <Paragraph47 />
        <Paragraph48 />
      </div>
    </div>
  );
}

function Container62() {
  return (
    <div className="content-stretch flex flex-col gap-[16px] h-[308px] items-start relative shrink-0 w-full" data-name="Container">
      <Lesson4Quiz1 />
      <Container66 />
    </div>
  );
}

function Container61() {
  return (
    <div className="absolute content-stretch flex flex-col gap-[24px] h-[346px] items-start left-0 top-[484px] w-[1280px]" data-name="Container">
      <Paragraph43 />
      <Container62 />
    </div>
  );
}

function Paragraph49() {
  return (
    <div className="h-[14px] relative shrink-0 w-full" data-name="Paragraph">
      <p className="absolute font-['Inter:Regular',sans-serif] font-normal leading-[14px] left-0 not-italic text-[#8e9199] text-[11px] top-[0.5px] tracking-[-0.14px] whitespace-nowrap">6. Что такое variants?</p>
    </div>
  );
}

function Paragraph50() {
  return (
    <div className="h-[7.5px] relative shrink-0 w-[166px]" data-name="Paragraph">
      <div className="bg-clip-padding border-0 border-[transparent] border-solid relative size-full">
        <p className="absolute font-['Inter:Regular',sans-serif] font-normal leading-[7.5px] left-0 not-italic text-[#8e9199] text-[5px] top-[-0.5px] whitespace-nowrap">Variants:</p>
      </div>
    </div>
  );
}

function Paragraph51() {
  return (
    <div className="h-[7.5px] relative shrink-0 w-full" data-name="Paragraph">
      <p className="absolute font-['Inter:Regular',sans-serif] font-normal leading-[7.5px] left-0 not-italic text-[5px] text-white top-[-0.5px] whitespace-nowrap">Primary</p>
    </div>
  );
}

function Container70() {
  return (
    <div className="bg-[#3b82f6] h-[13.5px] relative rounded-[3px] shrink-0 w-[166px]" data-name="Container">
      <div className="bg-clip-padding border-0 border-[transparent] border-solid content-stretch flex flex-col items-start pt-[3px] px-[6px] relative size-full">
        <Paragraph51 />
      </div>
    </div>
  );
}

function Paragraph52() {
  return (
    <div className="h-[7.5px] relative shrink-0 w-full" data-name="Paragraph">
      <p className="absolute font-['Inter:Regular',sans-serif] font-normal leading-[7.5px] left-0 not-italic text-[#3b82f6] text-[5px] top-[-0.5px] whitespace-nowrap">Secondary</p>
    </div>
  );
}

function Container71() {
  return (
    <div className="bg-[#f7f8fc] h-[15.5px] relative rounded-[3px] shrink-0 w-[166px]" data-name="Container">
      <div aria-hidden="true" className="absolute border border-[#3b82f6] border-solid inset-0 pointer-events-none rounded-[3px]" />
      <div className="bg-clip-padding border-0 border-[transparent] border-solid content-stretch flex flex-col items-start pb-px pt-[4px] px-[7px] relative size-full">
        <Paragraph52 />
      </div>
    </div>
  );
}

function Paragraph53() {
  return (
    <div className="h-[7.5px] relative shrink-0 w-full" data-name="Paragraph">
      <p className="absolute font-['Inter:Regular',sans-serif] font-normal leading-[7.5px] left-0 not-italic text-[#a0a0a0] text-[5px] top-[-0.5px] whitespace-nowrap">Disabled</p>
    </div>
  );
}

function Container72() {
  return (
    <div className="bg-[#e8e8e8] h-[13.5px] relative rounded-[3px] shrink-0 w-[166px]" data-name="Container">
      <div className="bg-clip-padding border-0 border-[transparent] border-solid content-stretch flex flex-col items-start pt-[3px] px-[6px] relative size-full">
        <Paragraph53 />
      </div>
    </div>
  );
}

function Container69() {
  return (
    <div className="content-stretch flex flex-col gap-[4px] h-[211px] items-start justify-center py-[74.5px] relative shrink-0 w-full" data-name="Container">
      <Paragraph50 />
      <Container70 />
      <Container71 />
      <Container72 />
    </div>
  );
}

function Lesson4Quiz2() {
  return (
    <div className="bg-white flex-[1_0_0] min-h-px min-w-px relative rounded-[14.99px] w-[186px]" data-name="Lesson4Quiz6">
      <div className="bg-clip-padding border-0 border-[transparent] border-solid content-stretch flex flex-col items-start pt-[10px] px-[10px] relative size-full">
        <Container69 />
      </div>
    </div>
  );
}

function Paragraph54() {
  return (
    <div className="h-[15px] relative shrink-0 w-[1280px]" data-name="Paragraph">
      <div className="bg-clip-padding border-0 border-[transparent] border-solid relative size-full">
        <p className="absolute font-['Inter:Regular',sans-serif] font-normal leading-[15px] left-0 not-italic text-[#364146] text-[10px] top-[0.5px] tracking-[-0.13px] whitespace-nowrap">• Разные состояния элемента</p>
      </div>
    </div>
  );
}

function Paragraph55() {
  return (
    <div className="h-[15px] relative shrink-0 w-[1280px]" data-name="Paragraph">
      <div className="bg-clip-padding border-0 border-[transparent] border-solid relative size-full">
        <p className="absolute font-['Inter:Regular',sans-serif] font-normal leading-[15px] left-0 not-italic text-[#364146] text-[10px] top-[0.5px] tracking-[-0.13px] whitespace-nowrap">• Другой интерфейс</p>
      </div>
    </div>
  );
}

function Paragraph56() {
  return (
    <div className="flex-[1_0_0] min-h-px min-w-px relative w-[1280px]" data-name="Paragraph">
      <div className="bg-clip-padding border-0 border-[transparent] border-solid relative size-full">
        <p className="absolute font-['Inter:Regular',sans-serif] font-normal leading-[15px] left-0 not-italic text-[#364146] text-[10px] top-[0.5px] tracking-[-0.13px] whitespace-nowrap">• Цвет фона</p>
      </div>
    </div>
  );
}

function Container73() {
  return (
    <div className="h-[61px] relative shrink-0 w-[1280px]" data-name="Container">
      <div className="bg-clip-padding border-0 border-[transparent] border-solid content-stretch flex flex-col gap-[8px] items-start relative size-full">
        <Paragraph54 />
        <Paragraph55 />
        <Paragraph56 />
      </div>
    </div>
  );
}

function Container68() {
  return (
    <div className="content-stretch flex flex-col gap-[16px] h-[308px] items-start relative shrink-0 w-full" data-name="Container">
      <Lesson4Quiz2 />
      <Container73 />
    </div>
  );
}

function Container67() {
  return (
    <div className="absolute content-stretch flex flex-col gap-[24px] h-[346px] items-start left-0 top-[878px] w-[1280px]" data-name="Container">
      <Paragraph49 />
      <Container68 />
    </div>
  );
}

function Container51() {
  return (
    <div className="absolute h-[1224px] left-0 top-[1186px] w-[631px]" data-name="Container">
      <Heading2 />
      <Paragraph34 />
      <Container52 />
      <Container61 />
      <Container67 />
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

function Paragraph57() {
  return (
    <div className="absolute content-stretch flex h-[15px] items-start left-0 top-[35px] w-[1280px]" data-name="Paragraph">
      <p className="flex-[1_0_0] font-['Inter:Regular',sans-serif] font-normal leading-[15px] min-h-px min-w-px not-italic relative text-[#8e9199] text-[12px] tracking-[-0.15px]">Выберите несколько правильных ответов</p>
    </div>
  );
}

function Paragraph58() {
  return (
    <div className="h-[14px] relative shrink-0 w-full" data-name="Paragraph">
      <p className="absolute font-['Inter:Regular',sans-serif] font-normal leading-[14px] left-0 not-italic text-[#8e9199] text-[11px] top-[0.5px] tracking-[-0.14px] whitespace-nowrap">7. Что дают компоненты?</p>
    </div>
  );
}

function Paragraph59() {
  return (
    <div className="h-[12px] relative shrink-0 w-[6.922px]" data-name="Paragraph">
      <div className="bg-clip-padding border-0 border-[transparent] border-solid relative size-full">
        <p className="absolute font-['Inter:Regular','Noto_Sans:Regular',sans-serif] font-normal leading-[12px] left-0 not-italic text-[#0a0a0a] text-[8px] top-[0.5px] tracking-[0.2057px] whitespace-nowrap">▦</p>
      </div>
    </div>
  );
}

function Paragraph60() {
  return (
    <div className="h-[7.5px] relative shrink-0 w-[20.523px]" data-name="Paragraph">
      <div className="bg-clip-padding border-0 border-[transparent] border-solid relative size-full">
        <p className="absolute font-['Inter:Regular',sans-serif] font-normal leading-[7.5px] left-0 not-italic text-[#8e9199] text-[5px] top-[-0.5px] whitespace-nowrap">система</p>
      </div>
    </div>
  );
}

function Container77() {
  return (
    <div className="h-[12px] relative shrink-0 w-[166px]" data-name="Container">
      <div className="bg-clip-padding border-0 border-[transparent] border-solid content-stretch flex gap-[3px] items-center relative size-full">
        <Paragraph59 />
        <Paragraph60 />
      </div>
    </div>
  );
}

function Paragraph61() {
  return (
    <div className="h-[12px] relative shrink-0 w-[6.758px]" data-name="Paragraph">
      <div className="bg-clip-padding border-0 border-[transparent] border-solid relative size-full">
        <p className="absolute font-['Inter:Regular',sans-serif] font-normal leading-[12px] left-0 not-italic text-[#0a0a0a] text-[8px] top-[0.5px] tracking-[0.2057px] whitespace-nowrap">↻</p>
      </div>
    </div>
  );
}

function Paragraph62() {
  return (
    <div className="h-[7.5px] relative shrink-0 w-[49.063px]" data-name="Paragraph">
      <div className="bg-clip-padding border-0 border-[transparent] border-solid relative size-full">
        <p className="absolute font-['Inter:Regular',sans-serif] font-normal leading-[7.5px] left-0 not-italic text-[#8e9199] text-[5px] top-[-0.5px] whitespace-nowrap">переиспользование</p>
      </div>
    </div>
  );
}

function Container78() {
  return (
    <div className="h-[12px] relative shrink-0 w-[166px]" data-name="Container">
      <div className="bg-clip-padding border-0 border-[transparent] border-solid content-stretch flex gap-[3px] items-center relative size-full">
        <Paragraph61 />
        <Paragraph62 />
      </div>
    </div>
  );
}

function Paragraph63() {
  return (
    <div className="h-[12px] relative shrink-0 w-[10px]" data-name="Paragraph">
      <div className="bg-clip-padding border-0 border-[transparent] border-solid relative size-full">
        <p className="absolute font-['Inter:Regular',sans-serif] font-normal leading-[12px] left-0 not-italic text-[#0a0a0a] text-[8px] top-[0.5px] tracking-[0.2057px] whitespace-nowrap">⚡</p>
      </div>
    </div>
  );
}

function Paragraph64() {
  return (
    <div className="h-[7.5px] relative shrink-0 w-[22.555px]" data-name="Paragraph">
      <div className="bg-clip-padding border-0 border-[transparent] border-solid relative size-full">
        <p className="absolute font-['Inter:Regular',sans-serif] font-normal leading-[7.5px] left-0 not-italic text-[#8e9199] text-[5px] top-[-0.5px] whitespace-nowrap">скорость</p>
      </div>
    </div>
  );
}

function Container79() {
  return (
    <div className="h-[12px] relative shrink-0 w-[166px]" data-name="Container">
      <div className="bg-clip-padding border-0 border-[transparent] border-solid content-stretch flex gap-[3px] items-center relative size-full">
        <Paragraph63 />
        <Paragraph64 />
      </div>
    </div>
  );
}

function Lesson4Quiz3() {
  return (
    <div className="bg-white flex-[1_0_0] min-h-px min-w-px relative rounded-[14.99px] w-[186px]" data-name="Lesson4Quiz7">
      <div className="flex flex-col justify-center size-full">
        <div className="bg-clip-padding border-0 border-[transparent] border-solid content-stretch flex flex-col gap-[4px] items-start justify-center pl-[10px] py-[93.5px] relative size-full">
          <Container77 />
          <Container78 />
          <Container79 />
        </div>
      </div>
    </div>
  );
}

function Paragraph65() {
  return (
    <div className="h-[15px] relative shrink-0 w-[1280px]" data-name="Paragraph">
      <div className="bg-clip-padding border-0 border-[transparent] border-solid relative size-full">
        <p className="absolute font-['Inter:Regular',sans-serif] font-normal leading-[15px] left-0 not-italic text-[#364146] text-[10px] top-[0.5px] tracking-[-0.13px] whitespace-nowrap">• Систему</p>
      </div>
    </div>
  );
}

function Paragraph66() {
  return (
    <div className="h-[15px] relative shrink-0 w-[1280px]" data-name="Paragraph">
      <div className="bg-clip-padding border-0 border-[transparent] border-solid relative size-full">
        <p className="absolute font-['Inter:Regular',sans-serif] font-normal leading-[15px] left-0 not-italic text-[#364146] text-[10px] top-[0.5px] tracking-[-0.13px] whitespace-nowrap">• Переиспользование</p>
      </div>
    </div>
  );
}

function Paragraph67() {
  return (
    <div className="h-[15px] relative shrink-0 w-[1280px]" data-name="Paragraph">
      <div className="bg-clip-padding border-0 border-[transparent] border-solid relative size-full">
        <p className="absolute font-['Inter:Regular',sans-serif] font-normal leading-[15px] left-0 not-italic text-[#364146] text-[10px] top-[0.5px] tracking-[-0.13px] whitespace-nowrap">• Больше цветов</p>
      </div>
    </div>
  );
}

function Paragraph68() {
  return (
    <div className="flex-[1_0_0] min-h-px min-w-px relative w-[1280px]" data-name="Paragraph">
      <div className="bg-clip-padding border-0 border-[transparent] border-solid relative size-full">
        <p className="absolute font-['Inter:Regular',sans-serif] font-normal leading-[15px] left-0 not-italic text-[#364146] text-[10px] top-[0.5px] tracking-[-0.13px] whitespace-nowrap">• Скорость работы</p>
      </div>
    </div>
  );
}

function Container80() {
  return (
    <div className="h-[84px] relative shrink-0 w-[1280px]" data-name="Container">
      <div className="bg-clip-padding border-0 border-[transparent] border-solid content-stretch flex flex-col gap-[8px] items-start relative size-full">
        <Paragraph65 />
        <Paragraph66 />
        <Paragraph67 />
        <Paragraph68 />
      </div>
    </div>
  );
}

function Container76() {
  return (
    <div className="content-stretch flex flex-col gap-[16px] h-[331px] items-start relative shrink-0 w-full" data-name="Container">
      <Lesson4Quiz3 />
      <Container80 />
    </div>
  );
}

function Container75() {
  return (
    <div className="absolute content-stretch flex flex-col gap-[24px] h-[369px] items-start left-0 top-[90px] w-[1280px]" data-name="Container">
      <Paragraph58 />
      <Container76 />
    </div>
  );
}

function Paragraph69() {
  return (
    <div className="h-[14px] relative shrink-0 w-full" data-name="Paragraph">
      <p className="absolute font-['Inter:Regular',sans-serif] font-normal leading-[14px] left-0 not-italic text-[#8e9199] text-[11px] top-[0.5px] tracking-[-0.14px] whitespace-nowrap">8. Что можно делать с компонентами?</p>
    </div>
  );
}

function Paragraph70() {
  return (
    <div className="h-[9px] relative shrink-0 w-[166px]" data-name="Paragraph">
      <div className="bg-clip-padding border-0 border-[transparent] border-solid relative size-full">
        <p className="absolute font-['Inter:Regular',sans-serif] font-normal leading-[9px] left-0 not-italic text-[#8e9199] text-[6px] top-[-0.5px] whitespace-nowrap">Процесс:</p>
      </div>
    </div>
  );
}

function Paragraph71() {
  return (
    <div className="h-[7.5px] relative shrink-0 w-[166px]" data-name="Paragraph">
      <div className="bg-clip-padding border-0 border-[transparent] border-solid relative size-full">
        <p className="absolute font-['Inter:Regular',sans-serif] font-normal leading-[7.5px] left-0 not-italic text-[#364146] text-[5px] top-[-0.5px] whitespace-nowrap">1. Создание</p>
      </div>
    </div>
  );
}

function Paragraph72() {
  return (
    <div className="h-[7.5px] relative shrink-0 w-[166px]" data-name="Paragraph">
      <div className="bg-clip-padding border-0 border-[transparent] border-solid relative size-full">
        <p className="absolute font-['Inter:Regular',sans-serif] font-normal leading-[7.5px] left-0 not-italic text-[#364146] text-[5px] top-[-0.5px] whitespace-nowrap">2. Копирование</p>
      </div>
    </div>
  );
}

function Paragraph73() {
  return (
    <div className="h-[7.5px] relative shrink-0 w-[166px]" data-name="Paragraph">
      <div className="bg-clip-padding border-0 border-[transparent] border-solid relative size-full">
        <p className="absolute font-['Inter:Regular',sans-serif] font-normal leading-[7.5px] left-0 not-italic text-[#364146] text-[5px] top-[-0.5px] whitespace-nowrap">3. Редактирование</p>
      </div>
    </div>
  );
}

function Lesson4Quiz4() {
  return (
    <div className="bg-white flex-[1_0_0] min-h-px min-w-px relative rounded-[14.99px] w-[186px]" data-name="Lesson4Quiz8">
      <div className="flex flex-col justify-center size-full">
        <div className="bg-clip-padding border-0 border-[transparent] border-solid content-stretch flex flex-col gap-[6px] items-start justify-center pl-[10px] py-[90.75px] relative size-full">
          <Paragraph70 />
          <Paragraph71 />
          <Paragraph72 />
          <Paragraph73 />
        </div>
      </div>
    </div>
  );
}

function Paragraph74() {
  return (
    <div className="h-[15px] relative shrink-0 w-[1280px]" data-name="Paragraph">
      <div className="bg-clip-padding border-0 border-[transparent] border-solid relative size-full">
        <p className="absolute font-['Inter:Regular',sans-serif] font-normal leading-[15px] left-0 not-italic text-[#364146] text-[10px] top-[0.5px] tracking-[-0.13px] whitespace-nowrap">• Создавать</p>
      </div>
    </div>
  );
}

function Paragraph75() {
  return (
    <div className="h-[15px] relative shrink-0 w-[1280px]" data-name="Paragraph">
      <div className="bg-clip-padding border-0 border-[transparent] border-solid relative size-full">
        <p className="absolute font-['Inter:Regular',sans-serif] font-normal leading-[15px] left-0 not-italic text-[#364146] text-[10px] top-[0.5px] tracking-[-0.13px] whitespace-nowrap">• Копировать instances</p>
      </div>
    </div>
  );
}

function Paragraph76() {
  return (
    <div className="h-[15px] relative shrink-0 w-[1280px]" data-name="Paragraph">
      <div className="bg-clip-padding border-0 border-[transparent] border-solid relative size-full">
        <p className="absolute font-['Inter:Regular',sans-serif] font-normal leading-[15px] left-0 not-italic text-[#364146] text-[10px] top-[0.5px] tracking-[-0.13px] whitespace-nowrap">• Редактировать</p>
      </div>
    </div>
  );
}

function Paragraph77() {
  return (
    <div className="flex-[1_0_0] min-h-px min-w-px relative w-[1280px]" data-name="Paragraph">
      <div className="bg-clip-padding border-0 border-[transparent] border-solid relative size-full">
        <p className="absolute font-['Inter:Regular',sans-serif] font-normal leading-[15px] left-0 not-italic text-[#364146] text-[10px] top-[0.5px] tracking-[-0.13px] whitespace-nowrap">• Удалять цвет</p>
      </div>
    </div>
  );
}

function Container83() {
  return (
    <div className="h-[84px] relative shrink-0 w-[1280px]" data-name="Container">
      <div className="bg-clip-padding border-0 border-[transparent] border-solid content-stretch flex flex-col gap-[8px] items-start relative size-full">
        <Paragraph74 />
        <Paragraph75 />
        <Paragraph76 />
        <Paragraph77 />
      </div>
    </div>
  );
}

function Container82() {
  return (
    <div className="content-stretch flex flex-col gap-[16px] h-[331px] items-start relative shrink-0 w-full" data-name="Container">
      <Lesson4Quiz4 />
      <Container83 />
    </div>
  );
}

function Container81() {
  return (
    <div className="absolute content-stretch flex flex-col gap-[24px] h-[369px] items-start left-0 top-[507px] w-[1280px]" data-name="Container">
      <Paragraph69 />
      <Container82 />
    </div>
  );
}

function Paragraph78() {
  return (
    <div className="h-[14px] relative shrink-0 w-full" data-name="Paragraph">
      <p className="absolute font-['Inter:Regular',sans-serif] font-normal leading-[14px] left-0 not-italic text-[#8e9199] text-[11px] top-[0.5px] tracking-[-0.14px] whitespace-nowrap">9. Что происходит без компонентов?</p>
    </div>
  );
}

function Paragraph79() {
  return (
    <div className="h-[21px] relative shrink-0 w-[166px]" data-name="Paragraph">
      <div className="bg-clip-padding border-0 border-[transparent] border-solid relative size-full">
        <p className="absolute font-['Inter:Regular',sans-serif] font-normal leading-[21px] left-0 not-italic text-[#0a0a0a] text-[14px] top-0 tracking-[-0.1504px] whitespace-nowrap">⚠️</p>
      </div>
    </div>
  );
}

function ImageWithFallback12() {
  return (
    <div className="h-[15px] relative rounded-[1px] shrink-0 w-full" data-name="ImageWithFallback">
      <img alt="" className="absolute inset-0 max-w-none object-cover pointer-events-none rounded-[1px] size-full" src={imgImageWithFallback2} />
    </div>
  );
}

function Container87() {
  return (
    <div className="absolute bg-[#f7f8fc] content-stretch flex flex-col h-[19px] items-start left-0 pt-[2px] px-[2px] rounded-[2px] top-0 w-[29px]" data-name="Container">
      <ImageWithFallback12 />
    </div>
  );
}

function ImageWithFallback13() {
  return (
    <div className="h-[15px] relative rounded-[1px] shrink-0 w-full" data-name="ImageWithFallback">
      <img alt="" className="absolute inset-0 max-w-none object-cover pointer-events-none rounded-[1px] size-full" src={imgImageWithFallback2} />
    </div>
  );
}

function Container88() {
  return (
    <div className="absolute bg-[#f7f8fc] content-stretch flex flex-col h-[19px] items-start left-[31px] pt-[2px] px-[2px] rounded-[2px] top-0 w-[29px]" data-name="Container">
      <ImageWithFallback13 />
    </div>
  );
}

function ImageWithFallback14() {
  return (
    <div className="h-[15px] relative rounded-[1px] shrink-0 w-full" data-name="ImageWithFallback">
      <img alt="" className="absolute inset-0 max-w-none object-cover pointer-events-none rounded-[1px] size-full" src={imgImageWithFallback2} />
    </div>
  );
}

function Container89() {
  return (
    <div className="absolute bg-[#f7f8fc] content-stretch flex flex-col h-[19px] items-start left-[62px] pt-[2px] px-[2px] rounded-[2px] top-0 w-[29px]" data-name="Container">
      <ImageWithFallback14 />
    </div>
  );
}

function ImageWithFallback15() {
  return (
    <div className="h-[15px] relative rounded-[1px] shrink-0 w-full" data-name="ImageWithFallback">
      <img alt="" className="absolute inset-0 max-w-none object-cover pointer-events-none rounded-[1px] size-full" src={imgImageWithFallback2} />
    </div>
  );
}

function Container90() {
  return (
    <div className="absolute bg-[#f7f8fc] content-stretch flex flex-col h-[19px] items-start left-[93px] pt-[2px] px-[2px] rounded-[2px] top-0 w-[29px]" data-name="Container">
      <ImageWithFallback15 />
    </div>
  );
}

function ImageWithFallback16() {
  return (
    <div className="h-[15px] relative rounded-[1px] shrink-0 w-full" data-name="ImageWithFallback">
      <img alt="" className="absolute inset-0 max-w-none object-cover pointer-events-none rounded-[1px] size-full" src={imgImageWithFallback2} />
    </div>
  );
}

function Container91() {
  return (
    <div className="absolute bg-[#f7f8fc] content-stretch flex flex-col h-[19px] items-start left-[124px] pt-[2px] px-[2px] rounded-[2px] top-0 w-[29px]" data-name="Container">
      <ImageWithFallback16 />
    </div>
  );
}

function ImageWithFallback17() {
  return (
    <div className="h-[15px] relative rounded-[1px] shrink-0 w-full" data-name="ImageWithFallback">
      <img alt="" className="absolute inset-0 max-w-none object-cover pointer-events-none rounded-[1px] size-full" src={imgImageWithFallback2} />
    </div>
  );
}

function Container92() {
  return (
    <div className="absolute bg-[#f7f8fc] content-stretch flex flex-col h-[19px] items-start left-0 pt-[2px] px-[2px] rounded-[2px] top-[21px] w-[29px]" data-name="Container">
      <ImageWithFallback17 />
    </div>
  );
}

function Container86() {
  return (
    <div className="h-[40px] relative shrink-0 w-[166px]" data-name="Container">
      <div className="bg-clip-padding border-0 border-[transparent] border-solid relative size-full">
        <Container87 />
        <Container88 />
        <Container89 />
        <Container90 />
        <Container91 />
        <Container92 />
      </div>
    </div>
  );
}

function Lesson4Quiz5() {
  return (
    <div className="bg-white flex-[1_0_0] min-h-px min-w-px relative rounded-[14.99px] w-[186px]" data-name="Lesson4Quiz9">
      <div className="flex flex-col justify-center size-full">
        <div className="bg-clip-padding border-0 border-[transparent] border-solid content-stretch flex flex-col gap-[4px] items-start justify-center pl-[10px] py-[83px] relative size-full">
          <Paragraph79 />
          <Container86 />
        </div>
      </div>
    </div>
  );
}

function Paragraph80() {
  return (
    <div className="h-[15px] relative shrink-0 w-[1280px]" data-name="Paragraph">
      <div className="bg-clip-padding border-0 border-[transparent] border-solid relative size-full">
        <p className="absolute font-['Inter:Regular',sans-serif] font-normal leading-[15px] left-0 not-italic text-[#364146] text-[10px] top-[0.5px] tracking-[-0.13px] whitespace-nowrap">• Сложно управлять</p>
      </div>
    </div>
  );
}

function Paragraph81() {
  return (
    <div className="h-[15px] relative shrink-0 w-[1280px]" data-name="Paragraph">
      <div className="bg-clip-padding border-0 border-[transparent] border-solid relative size-full">
        <p className="absolute font-['Inter:Regular',sans-serif] font-normal leading-[15px] left-0 not-italic text-[#364146] text-[10px] top-[0.5px] tracking-[-0.13px] whitespace-nowrap">• Много ошибок</p>
      </div>
    </div>
  );
}

function Paragraph82() {
  return (
    <div className="h-[15px] relative shrink-0 w-[1280px]" data-name="Paragraph">
      <div className="bg-clip-padding border-0 border-[transparent] border-solid relative size-full">
        <p className="absolute font-['Inter:Regular',sans-serif] font-normal leading-[15px] left-0 not-italic text-[#364146] text-[10px] top-[0.5px] tracking-[-0.13px] whitespace-nowrap">• Четкая система</p>
      </div>
    </div>
  );
}

function Paragraph83() {
  return (
    <div className="flex-[1_0_0] min-h-px min-w-px relative w-[1280px]" data-name="Paragraph">
      <div className="bg-clip-padding border-0 border-[transparent] border-solid relative size-full">
        <p className="absolute font-['Inter:Regular',sans-serif] font-normal leading-[15px] left-0 not-italic text-[#364146] text-[10px] top-[0.5px] tracking-[-0.13px] whitespace-nowrap">• Медленная работа</p>
      </div>
    </div>
  );
}

function Container93() {
  return (
    <div className="h-[84px] relative shrink-0 w-[1280px]" data-name="Container">
      <div className="bg-clip-padding border-0 border-[transparent] border-solid content-stretch flex flex-col gap-[8px] items-start relative size-full">
        <Paragraph80 />
        <Paragraph81 />
        <Paragraph82 />
        <Paragraph83 />
      </div>
    </div>
  );
}

function Container85() {
  return (
    <div className="content-stretch flex flex-col gap-[16px] h-[331px] items-start relative shrink-0 w-full" data-name="Container">
      <Lesson4Quiz5 />
      <Container93 />
    </div>
  );
}

function Container84() {
  return (
    <div className="absolute content-stretch flex flex-col gap-[24px] h-[369px] items-start left-0 top-[924px] w-[1280px]" data-name="Container">
      <Paragraph78 />
      <Container85 />
    </div>
  );
}

function Container74() {
  return (
    <div className="absolute h-[1293px] left-0 top-[2474px] w-[564px]" data-name="Container">
      <Heading3 />
      <Paragraph57 />
      <Container75 />
      <Container81 />
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

function Paragraph84() {
  return (
    <div className="absolute content-stretch flex h-[15px] items-start left-0 top-[35px] w-[1280px]" data-name="Paragraph">
      <p className="flex-[1_0_0] font-['Inter:Regular',sans-serif] font-normal leading-[15px] min-h-px min-w-px not-italic relative text-[#8e9199] text-[12px] tracking-[-0.15px]">Соедините элементы с описаниями</p>
    </div>
  );
}

function Paragraph85() {
  return (
    <div className="h-[14px] relative shrink-0 w-full" data-name="Paragraph">
      <p className="absolute font-['Inter:Regular',sans-serif] font-normal leading-[14px] left-0 not-italic text-[#8e9199] text-[11px] top-[0.5px] tracking-[-0.14px] whitespace-nowrap">10. Соедините термин и описание</p>
    </div>
  );
}

function Paragraph86() {
  return (
    <div className="h-[9px] relative shrink-0 w-full" data-name="Paragraph">
      <p className="absolute font-['Inter:Regular',sans-serif] font-normal leading-[9px] left-0 not-italic text-[#f7f8fc] text-[6px] top-[-0.5px] whitespace-nowrap">Компонент</p>
    </div>
  );
}

function Container98() {
  return (
    <div className="bg-[#3b82f6] h-[17px] relative rounded-[3px] shrink-0 w-full" data-name="Container">
      <div className="content-stretch flex flex-col items-start pt-[4px] px-[8px] relative size-full">
        <Paragraph86 />
      </div>
    </div>
  );
}

function Container97() {
  return (
    <div className="bg-[#f7f8fc] h-[29px] relative rounded-[4px] shrink-0 w-[60.227px]" data-name="Container">
      <div aria-hidden="true" className="absolute border-2 border-[#3b82f6] border-solid inset-0 pointer-events-none rounded-[4px]" />
      <div className="bg-clip-padding border-0 border-[transparent] border-solid content-stretch flex flex-col items-start pb-[2px] pt-[6px] px-[6px] relative size-full">
        <Container98 />
      </div>
    </div>
  );
}

function Lesson4Quiz10Card() {
  return (
    <div className="bg-[rgba(255,255,255,0)] h-[80px] relative rounded-[8px] shrink-0 w-[130px]" data-name="Lesson4Quiz10Card1">
      <div className="bg-clip-padding border-0 border-[transparent] border-solid content-stretch flex items-center justify-center pl-[34.883px] pr-[34.891px] relative size-full">
        <Container97 />
      </div>
    </div>
  );
}

function Paragraph87() {
  return (
    <div className="h-[9px] relative shrink-0 w-full" data-name="Paragraph">
      <p className="absolute font-['Inter:Regular',sans-serif] font-normal leading-[9px] left-0 not-italic text-[#f7f8fc] text-[6px] top-[-0.5px] whitespace-nowrap">Instance</p>
    </div>
  );
}

function Container100() {
  return (
    <div className="bg-[#3b82f6] h-[17px] relative rounded-[3px] shrink-0 w-full" data-name="Container">
      <div className="content-stretch flex flex-col items-start pt-[4px] px-[8px] relative size-full">
        <Paragraph87 />
      </div>
    </div>
  );
}

function Container99() {
  return (
    <div className="bg-[#f7f8fc] h-[27px] relative rounded-[4px] shrink-0 w-[50.156px]" data-name="Container">
      <div aria-hidden="true" className="absolute border border-[#d1d3db] border-solid inset-0 pointer-events-none rounded-[4px]" />
      <div className="bg-clip-padding border-0 border-[transparent] border-solid content-stretch flex flex-col items-start pb-px pt-[5px] px-[5px] relative size-full">
        <Container100 />
      </div>
    </div>
  );
}

function Lesson4Quiz10Card1() {
  return (
    <div className="bg-[rgba(255,255,255,0)] h-[80px] relative rounded-[8px] shrink-0 w-[130px]" data-name="Lesson4Quiz10Card2">
      <div className="bg-clip-padding border-0 border-[transparent] border-solid content-stretch flex items-center justify-center px-[39.922px] relative size-full">
        <Container99 />
      </div>
    </div>
  );
}

function Paragraph88() {
  return (
    <div className="h-[6px] relative shrink-0 w-full" data-name="Paragraph">
      <p className="absolute font-['Inter:Regular',sans-serif] font-normal leading-[6px] left-0 not-italic text-[#f7f8fc] text-[4px] top-[0.5px] whitespace-nowrap">V1</p>
    </div>
  );
}

function Container102() {
  return (
    <div className="bg-[#3b82f6] h-[10px] relative rounded-[2px] shrink-0 w-[15.125px]" data-name="Container">
      <div className="bg-clip-padding border-0 border-[transparent] border-solid content-stretch flex flex-col items-start pt-[2px] px-[4px] relative size-full">
        <Paragraph88 />
      </div>
    </div>
  );
}

function Paragraph89() {
  return (
    <div className="h-[6px] relative shrink-0 w-full" data-name="Paragraph">
      <p className="absolute font-['Inter:Regular',sans-serif] font-normal leading-[6px] left-0 not-italic text-[#3b82f6] text-[4px] top-[0.5px] whitespace-nowrap">V2</p>
    </div>
  );
}

function Container103() {
  return (
    <div className="bg-[#f7f8fc] flex-[1_0_0] min-h-px min-w-px relative rounded-[2px] w-[15.125px]" data-name="Container">
      <div aria-hidden="true" className="absolute border border-[#3b82f6] border-solid inset-0 pointer-events-none rounded-[2px]" />
      <div className="bg-clip-padding border-0 border-[transparent] border-solid content-stretch flex flex-col items-start pb-px pt-[3px] px-[5px] relative size-full">
        <Paragraph89 />
      </div>
    </div>
  );
}

function Container101() {
  return (
    <div className="h-[24px] relative shrink-0 w-[15.125px]" data-name="Container">
      <div className="bg-clip-padding border-0 border-[transparent] border-solid content-stretch flex flex-col gap-[2px] items-start relative size-full">
        <Container102 />
        <Container103 />
      </div>
    </div>
  );
}

function Lesson4Quiz10Card2() {
  return (
    <div className="bg-[rgba(255,255,255,0)] h-[80px] relative rounded-[8px] shrink-0 w-[130px]" data-name="Lesson4Quiz10Card3">
      <div className="bg-clip-padding border-0 border-[transparent] border-solid content-stretch flex items-center justify-center px-[57.438px] relative size-full">
        <Container101 />
      </div>
    </div>
  );
}

function Container96() {
  return (
    <div className="content-stretch flex gap-[24px] h-[80px] items-start relative shrink-0 w-full" data-name="Container">
      <Lesson4Quiz10Card />
      <Lesson4Quiz10Card1 />
      <Lesson4Quiz10Card2 />
    </div>
  );
}

function Paragraph90() {
  return (
    <div className="h-[15px] relative shrink-0 w-[1280px]" data-name="Paragraph">
      <div className="bg-clip-padding border-0 border-[transparent] border-solid relative size-full">
        <p className="absolute font-['Inter:Regular',sans-serif] font-normal leading-[15px] left-0 not-italic text-[#364146] text-[10px] top-[0.5px] tracking-[-0.13px] whitespace-nowrap">• Основной элемент</p>
      </div>
    </div>
  );
}

function Paragraph91() {
  return (
    <div className="h-[15px] relative shrink-0 w-[1280px]" data-name="Paragraph">
      <div className="bg-clip-padding border-0 border-[transparent] border-solid relative size-full">
        <p className="absolute font-['Inter:Regular',sans-serif] font-normal leading-[15px] left-0 not-italic text-[#364146] text-[10px] top-[0.5px] tracking-[-0.13px] whitespace-nowrap">• Копия компонента</p>
      </div>
    </div>
  );
}

function Paragraph92() {
  return (
    <div className="flex-[1_0_0] min-h-px min-w-px relative w-[1280px]" data-name="Paragraph">
      <div className="bg-clip-padding border-0 border-[transparent] border-solid relative size-full">
        <p className="absolute font-['Inter:Regular',sans-serif] font-normal leading-[15px] left-0 not-italic text-[#364146] text-[10px] top-[0.5px] tracking-[-0.13px] whitespace-nowrap">• Состояние элемента</p>
      </div>
    </div>
  );
}

function Container104() {
  return (
    <div className="content-stretch flex flex-col gap-[8px] h-[61px] items-start relative shrink-0 w-full" data-name="Container">
      <Paragraph90 />
      <Paragraph91 />
      <Paragraph92 />
    </div>
  );
}

function Container95() {
  return (
    <div className="absolute content-stretch flex flex-col gap-[24px] h-[203px] items-start left-0 top-[90px] w-[631px]" data-name="Container">
      <Paragraph85 />
      <Container96 />
      <Container104 />
    </div>
  );
}

function Paragraph93() {
  return (
    <div className="h-[14px] relative shrink-0 w-full" data-name="Paragraph">
      <p className="absolute font-['Inter:Regular',sans-serif] font-normal leading-[14px] left-0 not-italic text-[#8e9199] text-[11px] top-[0.5px] tracking-[-0.14px] whitespace-nowrap">11. Соедините элемент и роль</p>
    </div>
  );
}

function Paragraph94() {
  return (
    <div className="h-[7.5px] relative shrink-0 w-full" data-name="Paragraph">
      <p className="absolute font-['Inter:Regular',sans-serif] font-normal leading-[7.5px] left-0 not-italic text-[#f7f8fc] text-[5px] top-[-0.5px] whitespace-nowrap">Main</p>
    </div>
  );
}

function Container108() {
  return (
    <div className="bg-[#3b82f6] h-[13.5px] relative rounded-[2px] shrink-0 w-full" data-name="Container">
      <div className="content-stretch flex flex-col items-start pt-[3px] px-[6px] relative size-full">
        <Paragraph94 />
      </div>
    </div>
  );
}

function Container107() {
  return (
    <div className="bg-[#f7f8fc] h-[23.5px] relative rounded-[3px] shrink-0 w-[33.383px]" data-name="Container">
      <div aria-hidden="true" className="absolute border-2 border-[#3b82f6] border-solid inset-0 pointer-events-none rounded-[3px]" />
      <div className="bg-clip-padding border-0 border-[transparent] border-solid content-stretch flex flex-col items-start pb-[2px] pt-[5px] px-[5px] relative size-full">
        <Container108 />
      </div>
    </div>
  );
}

function Lesson4Quiz11Card() {
  return (
    <div className="bg-[rgba(255,255,255,0)] h-[80px] relative rounded-[8px] shrink-0 w-[130px]" data-name="Lesson4Quiz11Card1">
      <div className="bg-clip-padding border-0 border-[transparent] border-solid content-stretch flex items-center justify-center pl-[48.305px] pr-[48.313px] relative size-full">
        <Container107 />
      </div>
    </div>
  );
}

function Paragraph95() {
  return (
    <div className="h-[7.5px] relative shrink-0 w-full" data-name="Paragraph">
      <p className="absolute font-['Inter:Regular',sans-serif] font-normal leading-[7.5px] left-0 not-italic text-[#f7f8fc] text-[5px] top-[-0.5px] whitespace-nowrap">Copy</p>
    </div>
  );
}

function Container110() {
  return (
    <div className="bg-[#3b82f6] h-[13.5px] relative rounded-[2px] shrink-0 w-full" data-name="Container">
      <div className="content-stretch flex flex-col items-start pt-[3px] px-[6px] relative size-full">
        <Paragraph95 />
      </div>
    </div>
  );
}

function Container109() {
  return (
    <div className="bg-[#f7f8fc] h-[21.5px] relative rounded-[3px] shrink-0 w-[32.352px]" data-name="Container">
      <div aria-hidden="true" className="absolute border border-[#d1d3db] border-solid inset-0 pointer-events-none rounded-[3px]" />
      <div className="bg-clip-padding border-0 border-[transparent] border-solid content-stretch flex flex-col items-start pb-px pt-[4px] px-[4px] relative size-full">
        <Container110 />
      </div>
    </div>
  );
}

function Lesson4Quiz11Card1() {
  return (
    <div className="bg-[rgba(255,255,255,0)] h-[80px] relative rounded-[8px] shrink-0 w-[130px]" data-name="Lesson4Quiz11Card2">
      <div className="bg-clip-padding border-0 border-[transparent] border-solid content-stretch flex items-center justify-center pl-[48.82px] pr-[48.828px] relative size-full">
        <Container109 />
      </div>
    </div>
  );
}

function Paragraph96() {
  return (
    <div className="h-[6px] relative shrink-0 w-full" data-name="Paragraph">
      <p className="absolute font-['Inter:Regular',sans-serif] font-normal leading-[6px] left-0 not-italic text-[4px] text-[rgba(255,255,255,0)] top-[0.5px] whitespace-nowrap">Primary</p>
    </div>
  );
}

function Container111() {
  return (
    <div className="bg-[#3b82f6] h-[10px] relative rounded-[2px] shrink-0 w-[114px]" data-name="Container">
      <div className="bg-clip-padding border-0 border-[transparent] border-solid content-stretch flex flex-col items-start pt-[2px] px-[4px] relative size-full">
        <Paragraph96 />
      </div>
    </div>
  );
}

function Paragraph97() {
  return (
    <div className="h-[6px] relative shrink-0 w-full" data-name="Paragraph">
      <p className="absolute font-['Inter:Regular',sans-serif] font-normal leading-[6px] left-0 not-italic text-[#3b82f6] text-[4px] top-[0.5px] whitespace-nowrap">Secondary</p>
    </div>
  );
}

function Container112() {
  return (
    <div className="bg-[#f7f8fc] h-[12px] relative rounded-[2px] shrink-0 w-[114px]" data-name="Container">
      <div aria-hidden="true" className="absolute border border-[#3b82f6] border-solid inset-0 pointer-events-none rounded-[2px]" />
      <div className="bg-clip-padding border-0 border-[transparent] border-solid content-stretch flex flex-col items-start pb-px pt-[3px] px-[5px] relative size-full">
        <Paragraph97 />
      </div>
    </div>
  );
}

function Paragraph98() {
  return (
    <div className="h-[6px] relative shrink-0 w-full" data-name="Paragraph">
      <p className="absolute font-['Inter:Regular',sans-serif] font-normal leading-[6px] left-0 not-italic text-[#a0a0a0] text-[4px] top-[0.5px] whitespace-nowrap">Disabled</p>
    </div>
  );
}

function Container113() {
  return (
    <div className="bg-[#e8e8e8] h-[10px] relative rounded-[2px] shrink-0 w-[114px]" data-name="Container">
      <div className="bg-clip-padding border-0 border-[transparent] border-solid content-stretch flex flex-col items-start pt-[2px] px-[4px] relative size-full">
        <Paragraph98 />
      </div>
    </div>
  );
}

function Lesson4Quiz11Card2() {
  return (
    <div className="bg-[rgba(255,255,255,0)] h-[80px] relative rounded-[8px] shrink-0 w-[130px]" data-name="Lesson4Quiz11Card3">
      <div className="bg-clip-padding border-0 border-[transparent] border-solid content-stretch flex flex-col gap-[2px] items-start justify-center pl-[8px] py-[22px] relative size-full">
        <Container111 />
        <Container112 />
        <Container113 />
      </div>
    </div>
  );
}

function Container106() {
  return (
    <div className="content-stretch flex gap-[24px] h-[80px] items-start relative shrink-0 w-full" data-name="Container">
      <Lesson4Quiz11Card />
      <Lesson4Quiz11Card1 />
      <Lesson4Quiz11Card2 />
    </div>
  );
}

function Paragraph99() {
  return (
    <div className="h-[15px] relative shrink-0 w-[1280px]" data-name="Paragraph">
      <div className="bg-clip-padding border-0 border-[transparent] border-solid relative size-full">
        <p className="absolute font-['Inter:Regular',sans-serif] font-normal leading-[15px] left-0 not-italic text-[#364146] text-[10px] top-[0.5px] tracking-[-0.13px] whitespace-nowrap">• Источник изменений</p>
      </div>
    </div>
  );
}

function Paragraph100() {
  return (
    <div className="h-[15px] relative shrink-0 w-[1280px]" data-name="Paragraph">
      <div className="bg-clip-padding border-0 border-[transparent] border-solid relative size-full">
        <p className="absolute font-['Inter:Regular',sans-serif] font-normal leading-[15px] left-0 not-italic text-[#364146] text-[10px] top-[0.5px] tracking-[-0.13px] whitespace-nowrap">• Использование в макете</p>
      </div>
    </div>
  );
}

function Paragraph101() {
  return (
    <div className="flex-[1_0_0] min-h-px min-w-px relative w-[1280px]" data-name="Paragraph">
      <div className="bg-clip-padding border-0 border-[transparent] border-solid relative size-full">
        <p className="absolute font-['Inter:Regular',sans-serif] font-normal leading-[15px] left-0 not-italic text-[#364146] text-[10px] top-[0.5px] tracking-[-0.13px] whitespace-nowrap">• Разные состояния</p>
      </div>
    </div>
  );
}

function Container114() {
  return (
    <div className="content-stretch flex flex-col gap-[8px] h-[61px] items-start relative shrink-0 w-full" data-name="Container">
      <Paragraph99 />
      <Paragraph100 />
      <Paragraph101 />
    </div>
  );
}

function Container105() {
  return (
    <div className="absolute content-stretch flex flex-col gap-[24px] h-[203px] items-start left-0 top-[341px] w-[1280px]" data-name="Container">
      <Paragraph93 />
      <Container106 />
      <Container114 />
    </div>
  );
}

function Paragraph102() {
  return (
    <div className="h-[14px] relative shrink-0 w-full" data-name="Paragraph">
      <p className="absolute font-['Inter:Regular',sans-serif] font-normal leading-[14px] left-0 not-italic text-[#8e9199] text-[11px] top-[0.5px] tracking-[-0.14px] whitespace-nowrap">12. Соедините проблему и эффект</p>
    </div>
  );
}

function Paragraph103() {
  return (
    <div className="h-[15px] relative shrink-0 w-[114px]" data-name="Paragraph">
      <div className="bg-clip-padding border-0 border-[transparent] border-solid relative size-full">
        <p className="absolute font-['Inter:Regular',sans-serif] font-normal leading-[15px] left-0 not-italic text-[#f8f8f8] text-[10px] top-[0.5px] tracking-[0.1172px] whitespace-nowrap">⚠️</p>
      </div>
    </div>
  );
}

function ImageWithFallback18() {
  return (
    <div className="h-[12px] relative rounded-[1px] shrink-0 w-full" data-name="ImageWithFallback">
      <img alt="" className="absolute inset-0 max-w-none object-cover pointer-events-none rounded-[1px] size-full" src={imgImageWithFallback3} />
    </div>
  );
}

function Container118() {
  return (
    <div className="bg-[#f7f8fc] h-[12px] relative rounded-[2px] shrink-0 w-[18px]" data-name="Container">
      <div className="bg-clip-padding border-0 border-[transparent] border-solid content-stretch flex flex-col items-start relative size-full">
        <ImageWithFallback18 />
      </div>
    </div>
  );
}

function ImageWithFallback19() {
  return (
    <div className="h-[12px] relative rounded-[1px] shrink-0 w-full" data-name="ImageWithFallback">
      <img alt="" className="absolute inset-0 max-w-none object-cover pointer-events-none rounded-[1px] size-full" src={imgImageWithFallback3} />
    </div>
  );
}

function Container119() {
  return (
    <div className="bg-[#f7f8fc] h-[12px] relative rounded-[2px] shrink-0 w-[18px]" data-name="Container">
      <div className="bg-clip-padding border-0 border-[transparent] border-solid content-stretch flex flex-col items-start relative size-full">
        <ImageWithFallback19 />
      </div>
    </div>
  );
}

function ImageWithFallback20() {
  return (
    <div className="h-[12px] relative rounded-[1px] shrink-0 w-full" data-name="ImageWithFallback">
      <img alt="" className="absolute inset-0 max-w-none object-cover pointer-events-none rounded-[1px] size-full" src={imgImageWithFallback3} />
    </div>
  );
}

function Container120() {
  return (
    <div className="bg-[#f7f8fc] h-[12px] relative rounded-[2px] shrink-0 w-[18px]" data-name="Container">
      <div className="bg-clip-padding border-0 border-[transparent] border-solid content-stretch flex flex-col items-start relative size-full">
        <ImageWithFallback20 />
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

function Lesson4Quiz12Card() {
  return (
    <div className="bg-[rgba(255,255,255,0)] h-[80px] relative rounded-[8px] shrink-0 w-[130px]" data-name="Lesson4Quiz12Card1">
      <div className="bg-clip-padding border-0 border-[transparent] border-solid content-stretch flex flex-col gap-[2px] items-start justify-center pl-[8px] py-[25.5px] relative size-full">
        <Paragraph103 />
        <Container117 />
      </div>
    </div>
  );
}

function Container122() {
  return <div className="bg-[#3b82f6] h-[10px] rounded-[2px] shrink-0 w-[15px]" data-name="Container" />;
}

function Container123() {
  return <div className="bg-[#22c55e] h-[10px] rounded-[2px] shrink-0 w-[15px]" data-name="Container" />;
}

function Container124() {
  return <div className="bg-[#8b5cf6] h-[10px] rounded-[2px] shrink-0 w-[15px]" data-name="Container" />;
}

function Container121() {
  return (
    <div className="h-[10px] relative shrink-0 w-[114px]" data-name="Container">
      <div className="bg-clip-padding border-0 border-[transparent] border-solid content-stretch flex gap-[2px] items-start relative size-full">
        <Container122 />
        <Container123 />
        <Container124 />
      </div>
    </div>
  );
}

function Paragraph104() {
  return (
    <div className="h-[7.5px] relative shrink-0 w-[114px]" data-name="Paragraph">
      <div className="bg-clip-padding border-0 border-[transparent] border-solid relative size-full">
        <p className="absolute font-['Inter:Regular',sans-serif] font-normal leading-[7.5px] left-0 not-italic text-[#8e9199] text-[5px] top-[-0.5px] whitespace-nowrap">Нет variants</p>
      </div>
    </div>
  );
}

function Lesson4Quiz12Card1() {
  return (
    <div className="bg-[rgba(255,255,255,0)] h-[80px] relative rounded-[8px] shrink-0 w-[130px]" data-name="Lesson4Quiz12Card2">
      <div className="bg-clip-padding border-0 border-[transparent] border-solid content-stretch flex flex-col gap-[2px] items-start justify-center pl-[8px] py-[30.25px] relative size-full">
        <Container121 />
        <Paragraph104 />
      </div>
    </div>
  );
}

function Paragraph105() {
  return (
    <div className="h-[15px] relative shrink-0 w-[114px]" data-name="Paragraph">
      <div className="bg-clip-padding border-0 border-[transparent] border-solid relative size-full">
        <p className="absolute font-['Inter:Regular',sans-serif] font-normal leading-[15px] left-0 not-italic text-[#0a0a0a] text-[10px] top-[0.5px] tracking-[0.1172px] whitespace-nowrap">✏️</p>
      </div>
    </div>
  );
}

function Paragraph106() {
  return (
    <div className="h-[7.5px] relative shrink-0 w-[114px]" data-name="Paragraph">
      <div className="bg-clip-padding border-0 border-[transparent] border-solid relative size-full">
        <p className="absolute font-['Inter:Regular',sans-serif] font-normal leading-[7.5px] left-0 not-italic text-[#8e9199] text-[5px] top-[-0.5px] whitespace-nowrap">Ручное редактирование</p>
      </div>
    </div>
  );
}

function Lesson4Quiz12Card2() {
  return (
    <div className="bg-[rgba(255,255,255,0)] h-[80px] relative rounded-[8px] shrink-0 w-[130px]" data-name="Lesson4Quiz12Card3">
      <div className="bg-clip-padding border-0 border-[transparent] border-solid content-stretch flex flex-col gap-[2px] items-start justify-center pl-[8px] py-[27.75px] relative size-full">
        <Paragraph105 />
        <Paragraph106 />
      </div>
    </div>
  );
}

function Container116() {
  return (
    <div className="content-stretch flex gap-[24px] h-[80px] items-start relative shrink-0 w-full" data-name="Container">
      <Lesson4Quiz12Card />
      <Lesson4Quiz12Card1 />
      <Lesson4Quiz12Card2 />
    </div>
  );
}

function Paragraph107() {
  return (
    <div className="h-[15px] relative shrink-0 w-[1280px]" data-name="Paragraph">
      <div className="bg-clip-padding border-0 border-[transparent] border-solid relative size-full">
        <p className="absolute font-['Inter:Regular',sans-serif] font-normal leading-[15px] left-0 not-italic text-[#364146] text-[10px] top-[0.5px] tracking-[-0.13px] whitespace-nowrap">• Долго вносить изменения</p>
      </div>
    </div>
  );
}

function Paragraph108() {
  return (
    <div className="h-[15px] relative shrink-0 w-[1280px]" data-name="Paragraph">
      <div className="bg-clip-padding border-0 border-[transparent] border-solid relative size-full">
        <p className="absolute font-['Inter:Regular',sans-serif] font-normal leading-[15px] left-0 not-italic text-[#364146] text-[10px] top-[0.5px] tracking-[-0.13px] whitespace-nowrap">• Несогласованный интерфейс</p>
      </div>
    </div>
  );
}

function Paragraph109() {
  return (
    <div className="flex-[1_0_0] min-h-px min-w-px relative w-[1280px]" data-name="Paragraph">
      <div className="bg-clip-padding border-0 border-[transparent] border-solid relative size-full">
        <p className="absolute font-['Inter:Regular',sans-serif] font-normal leading-[15px] left-0 not-italic text-[#364146] text-[10px] top-[0.5px] tracking-[-0.13px] whitespace-nowrap">• Много ошибок</p>
      </div>
    </div>
  );
}

function Container125() {
  return (
    <div className="content-stretch flex flex-col gap-[8px] h-[61px] items-start relative shrink-0 w-full" data-name="Container">
      <Paragraph107 />
      <Paragraph108 />
      <Paragraph109 />
    </div>
  );
}

function Container115() {
  return (
    <div className="absolute content-stretch flex flex-col gap-[24px] h-[203px] items-start left-0 top-[592px] w-[1280px]" data-name="Container">
      <Paragraph102 />
      <Container116 />
      <Container125 />
    </div>
  );
}

function Container94() {
  return (
    <div className="absolute h-[795px] left-0 top-[3831px] w-[475px]" data-name="Container">
      <Heading4 />
      <Paragraph84 />
      <Container95 />
      <Container105 />
      <Container115 />
    </div>
  );
}

// ─────────────────────────────────────────────────────────────────────────────
// Named exports for LessonQuizPage (quiz_figma_components)
// ─────────────────────────────────────────────────────────────────────────────
export function CQFigmaCompare1A() {
  return <div style={{ position: "relative", width: 207, height: 231 }}><Lesson4Quiz1VariantA /></div>;
}
export function CQFigmaCompare1B() {
  return <div style={{ position: "relative", width: 207, height: 231 }}><Lesson4Quiz1VariantB /></div>;
}
export function CQFigmaCompare2A() {
  return <div style={{ position: "relative", width: 207, height: 231 }}><Lesson4Quiz2VariantA /></div>;
}
export function CQFigmaCompare2B() {
  return <div style={{ position: "relative", width: 207, height: 231 }}><Lesson4Quiz2VariantB /></div>;
}
export function CQFigmaCompare3A() {
  return <div style={{ position: "relative", width: 207, height: 231 }}><Lesson4Quiz3VariantA /></div>;
}
export function CQFigmaCompare3B() {
  return <div style={{ position: "relative", width: 207, height: 231 }}><Lesson4Quiz3VariantB /></div>;
}
export function CQFigmaSingle1() {
  return <div style={{ height: 231, width: 186, overflow: "hidden", borderRadius: 15 }}><Lesson4Quiz /></div>;
}
export function CQFigmaSingle2() {
  return <div style={{ height: 231, width: 186, overflow: "hidden", borderRadius: 15 }}><Lesson4Quiz1 /></div>;
}
export function CQFigmaSingle3() {
  return <div style={{ height: 231, width: 186, overflow: "hidden", borderRadius: 15 }}><Lesson4Quiz2 /></div>;
}
export function CQFigmaMulti1() {
  return <div style={{ height: 231, width: 186, overflow: "hidden", borderRadius: 15 }}><Lesson4Quiz3 /></div>;
}
export function CQFigmaMulti2() {
  return <div style={{ height: 231, width: 186, overflow: "hidden", borderRadius: 15 }}><Lesson4Quiz4 /></div>;
}
export function CQFigmaMulti3() {
  return <div style={{ height: 231, width: 186, overflow: "hidden", borderRadius: 15 }}><Lesson4Quiz5 /></div>;
}
export function CQFigmaConn1A() { return <Lesson4Quiz10Card />; }
export function CQFigmaConn1B() { return <Lesson4Quiz10Card1 />; }
export function CQFigmaConn1C() { return <Lesson4Quiz10Card2 />; }
export function CQFigmaConn2A() { return <Lesson4Quiz11Card />; }
export function CQFigmaConn2B() { return <Lesson4Quiz11Card1 />; }
export function CQFigmaConn2C() { return <Lesson4Quiz11Card2 />; }
export function CQFigmaConn3A() { return <Lesson4Quiz12Card />; }
export function CQFigmaConn3B() { return <Lesson4Quiz12Card1 />; }
export function CQFigmaConn3C() { return <Lesson4Quiz12Card2 />; }

export default function Component4Figma() {
  return (
    <div className="relative size-full" data-name="Урок 4 — Компоненты в Figma">
      <Heading />
      <Paragraph />
      <Container />
      <Container51 />
      <Container74 />
      <Container94 />
    </div>
  );
}