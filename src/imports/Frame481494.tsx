

const IMG_PRODUCT_1 = "https://images.unsplash.com/photo-1612858249937-1cc0852093dd?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&w=80";
const IMG_PRODUCT_2 = "https://images.unsplash.com/photo-1625860191460-10a66c7384fb?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&w=80";
const IMG_PRODUCT_3 = "https://images.unsplash.com/photo-1687078426457-89ce2b562eaf?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&w=80";

function Paragraph() {
  return (
    <div className="absolute h-[10.727px] left-[8.94px] top-[13.13px] w-[24.359px]" data-name="Paragraph">
      <p className="absolute font-['Inter:Regular',sans-serif] font-normal leading-[10.729px] left-0 not-italic text-[#5e6169] text-[10px] top-0 tracking-[-0.1397px] whitespace-nowrap">Email</p>
    </div>
  );
}

function Container5() {
  return (
    <div className="absolute h-[37px] left-0 top-0 w-[166px]" data-name="Container">
      <Paragraph />
    </div>
  );
}

function Container4() {
  return (
    <div className="bg-[#a8abb4] h-[37px] relative rounded-[9.031px] shrink-0 w-[166px]" data-name="Container">
      <div className="bg-clip-padding border-0 border-[transparent] border-solid relative size-full">
        <Container5 />
      </div>
    </div>
  );
}

function Paragraph1() {
  return (
    <div className="absolute h-[10.727px] left-[8.94px] top-[13.13px] w-[35.516px]" data-name="Paragraph">
      <p className="absolute font-['Inter:Regular',sans-serif] font-normal leading-[10.729px] left-0 not-italic text-[#5e6169] text-[10px] top-0 tracking-[-0.1397px] whitespace-nowrap">Пароль</p>
    </div>
  );
}

function Container7() {
  return (
    <div className="absolute h-[37px] left-0 top-0 w-[166px]" data-name="Container">
      <Paragraph1 />
    </div>
  );
}

function Container6() {
  return (
    <div className="bg-[#a8abb4] flex-[1_0_0] min-h-px min-w-px relative rounded-[9.031px] w-[166px]" data-name="Container">
      <div className="bg-clip-padding border-0 border-[transparent] border-solid relative size-full">
        <Container7 />
      </div>
    </div>
  );
}

function Container3() {
  return (
    <div className="absolute content-stretch flex flex-col gap-[7.148px] h-[81.148px] items-start left-0 top-0 w-[166px]" data-name="Container">
      <Container4 />
      <Container6 />
    </div>
  );
}

function Paragraph2() {
  return (
    <div className="absolute h-[10.727px] left-[68.69px] top-[12.46px] w-[28.625px]" data-name="Paragraph">
      <p className="absolute font-['Inter:Regular',sans-serif] font-normal leading-[10.729px] left-0 not-italic text-[#5e6169] text-[10px] top-0 tracking-[-0.1397px] whitespace-nowrap">Войти</p>
    </div>
  );
}

function Container9() {
  return (
    <div className="absolute h-[37px] left-0 top-0 w-[166px]" data-name="Container">
      <Paragraph2 />
    </div>
  );
}

function Container8() {
  return (
    <div className="absolute bg-[#a8abb4] h-[37px] left-0 rounded-[9.031px] top-[89.15px] w-[166px]" data-name="Container">
      <Container9 />
    </div>
  );
}

function Container2() {
  return (
    <div className="absolute h-[126.148px] left-0 top-0 w-[166px]" data-name="Container">
      <Container3 />
      <Container8 />
    </div>
  );
}

function Paragraph3() {
  return (
    <div className="absolute h-[8.938px] left-[59.08px] top-[138.52px] w-[49.164px]" data-name="Paragraph">
      <p className="-translate-x-1/2 absolute font-['Inter:Regular',sans-serif] font-normal leading-[8.941px] left-[25px] not-italic text-[#8e9199] text-[6.259px] text-center top-[-0.5px] tracking-[-0.0672px] whitespace-nowrap">Забыли пароль?</p>
    </div>
  );
}

function Container1() {
  return (
    <div className="absolute h-[147.148px] left-0 top-[31.92px] w-[166px]" data-name="Container">
      <Container2 />
      <Paragraph3 />
    </div>
  );
}

function Container() {
  return (
    <div className="h-[211px] relative shrink-0 w-full" data-name="Container">
      <Container1 />
    </div>
  );
}

function Quiz1VariantA() {
  return (
    <div className="bg-[#f7f8fc] col-1 content-stretch flex flex-col h-[231px] items-start pt-[10px] px-[10px] relative rounded-[14.99px] row-1 shrink-0 w-[186px]" data-name="Quiz1VariantA">
      <Container />
    </div>
  );
}

function Paragraph4() {
  return (
    <div className="absolute h-[10.727px] left-[8.94px] top-[13.13px] w-[24.359px]" data-name="Paragraph">
      <p className="absolute font-['Inter:Regular',sans-serif] font-normal leading-[10.729px] left-0 not-italic text-[#101828] text-[10px] top-0 tracking-[-0.1397px] whitespace-nowrap">Email</p>
    </div>
  );
}

function Container15() {
  return (
    <div className="absolute h-[37px] left-0 top-0 w-[166px]" data-name="Container">
      <Paragraph4 />
    </div>
  );
}

function Container14() {
  return (
    <div className="bg-[#e1e3eb] h-[37px] relative rounded-[9.031px] shrink-0 w-[166px]" data-name="Container">
      <div className="bg-clip-padding border-0 border-[transparent] border-solid relative size-full">
        <Container15 />
      </div>
    </div>
  );
}

function Paragraph5() {
  return (
    <div className="absolute h-[10.727px] left-[8.94px] top-[13.13px] w-[35.516px]" data-name="Paragraph">
      <p className="absolute font-['Inter:Regular',sans-serif] font-normal leading-[10.729px] left-0 not-italic text-[#101828] text-[10px] top-0 tracking-[-0.1397px] whitespace-nowrap">Пароль</p>
    </div>
  );
}

function Container17() {
  return (
    <div className="absolute h-[37px] left-0 top-0 w-[166px]" data-name="Container">
      <Paragraph5 />
    </div>
  );
}

function Container16() {
  return (
    <div className="bg-[#e1e3eb] flex-[1_0_0] min-h-px min-w-px relative rounded-[9.031px] w-[166px]" data-name="Container">
      <div className="bg-clip-padding border-0 border-[transparent] border-solid relative size-full">
        <Container17 />
      </div>
    </div>
  );
}

function Container13() {
  return (
    <div className="absolute content-stretch flex flex-col gap-[7.148px] h-[81.148px] items-start left-0 top-0 w-[166px]" data-name="Container">
      <Container14 />
      <Container16 />
    </div>
  );
}

function Paragraph6() {
  return (
    <div className="absolute h-[10.727px] left-[68.69px] top-[12.46px] w-[28.625px]" data-name="Paragraph">
      <p className="absolute font-['Inter:Regular',sans-serif] font-normal leading-[10.729px] left-0 not-italic text-[10px] text-white top-0 tracking-[-0.1397px] whitespace-nowrap">Войти</p>
    </div>
  );
}

function Container19() {
  return (
    <div className="absolute h-[37px] left-0 top-0 w-[166px]" data-name="Container">
      <Paragraph6 />
    </div>
  );
}

function Container18() {
  return (
    <div className="absolute bg-[#364146] h-[37px] left-0 rounded-[9.031px] top-[89.15px] w-[166px]" data-name="Container">
      <Container19 />
    </div>
  );
}

function Container12() {
  return (
    <div className="absolute h-[126.148px] left-0 top-0 w-[166px]" data-name="Container">
      <Container13 />
      <Container18 />
    </div>
  );
}

function Paragraph7() {
  return (
    <div className="absolute h-[8.938px] left-[59.08px] top-[138.52px] w-[49.164px]" data-name="Paragraph">
      <p className="-translate-x-1/2 absolute font-['Inter:Regular',sans-serif] font-normal leading-[8.941px] left-[25px] not-italic text-[#4a90ff] text-[6.259px] text-center top-[-0.5px] tracking-[-0.0672px] whitespace-nowrap">Забыли пароль?</p>
    </div>
  );
}

function Container11() {
  return (
    <div className="absolute h-[147.148px] left-0 top-[31.92px] w-[166px]" data-name="Container">
      <Container12 />
      <Paragraph7 />
    </div>
  );
}

function Container10() {
  return (
    <div className="h-[211px] relative shrink-0 w-full" data-name="Container">
      <Container11 />
    </div>
  );
}

function Quiz1VariantB() {
  return (
    <div className="bg-[#f7f8fc] col-2 content-stretch flex flex-col h-[231px] items-start pt-[10px] px-[10px] relative rounded-[14.99px] row-1 shrink-0 w-[186px]" data-name="Quiz1VariantB">
      <Container10 />
    </div>
  );
}

function ImageWithFallback() {
  return (
    <div className="relative rounded-[6px] shrink-0 size-[30px]" data-name="ImageWithFallback">
      <img alt="Товар 1" className="absolute inset-0 size-full object-cover rounded-[6px]" src={IMG_PRODUCT_1} />
    </div>
  );
}

function Paragraph8() {
  return (
    <div className="h-[9px] relative shrink-0 w-full" data-name="Paragraph">
      <p className="absolute font-['Inter:Regular',sans-serif] font-normal leading-[9px] left-0 not-italic text-[#5e6169] text-[8px] top-[0.5px] tracking-[-0.1px] whitespace-nowrap">Товар 1</p>
    </div>
  );
}

function Paragraph9() {
  return (
    <div className="h-[7px] relative shrink-0 w-full" data-name="Paragraph">
      <p className="absolute font-['Inter:Regular',sans-serif] font-normal leading-[7px] left-0 not-italic text-[#5e6169] text-[6px] top-[-0.5px] tracking-[-0.08px] whitespace-nowrap">2 500 ₽</p>
    </div>
  );
}

function Container22() {
  return (
    <div className="flex-[1_0_0] h-[18px] min-h-px min-w-px relative" data-name="Container">
      <div className="bg-clip-padding border-0 border-[transparent] border-solid content-stretch flex flex-col gap-[2px] items-start relative size-full">
        <Paragraph8 />
        <Paragraph9 />
      </div>
    </div>
  );
}

function Paragraph10() {
  return (
    <div className="flex-[1_0_0] h-[10.5px] min-h-px min-w-px relative" data-name="Paragraph">
      <div className="bg-clip-padding border-0 border-[transparent] border-solid relative size-full">
        <p className="absolute font-['Inter:Regular',sans-serif] font-normal leading-[10.5px] left-0 not-italic text-[#5e6169] text-[7px] top-0 tracking-[-0.09px] whitespace-nowrap">Купить</p>
      </div>
    </div>
  );
}

function Container23() {
  return (
    <div className="bg-[#8e9199] h-[20px] relative rounded-[6px] shrink-0 w-[43.18px]" data-name="Container">
      <div className="bg-clip-padding border-0 border-[transparent] border-solid content-stretch flex items-center px-[10px] relative size-full">
        <Paragraph10 />
      </div>
    </div>
  );
}

function Container21() {
  return (
    <div className="absolute bg-[#a8abb4] content-stretch flex gap-[8px] h-[46px] items-center left-0 px-[8px] rounded-[9.031px] top-0 w-[166px]" data-name="Container">
      <ImageWithFallback />
      <Container22 />
      <Container23 />
    </div>
  );
}

function ImageWithFallback1() {
  return (
    <div className="relative rounded-[6px] shrink-0 size-[30px]" data-name="ImageWithFallback">
      <img alt="Товар 2" className="absolute inset-0 size-full object-cover rounded-[6px]" src={IMG_PRODUCT_2} />
    </div>
  );
}

function Paragraph11() {
  return (
    <div className="h-[9px] relative shrink-0 w-full" data-name="Paragraph">
      <p className="absolute font-['Inter:Regular',sans-serif] font-normal leading-[9px] left-0 not-italic text-[#5e6169] text-[8px] top-[0.5px] tracking-[-0.1px] whitespace-nowrap">Товар 2</p>
    </div>
  );
}

function Paragraph12() {
  return (
    <div className="h-[7px] relative shrink-0 w-full" data-name="Paragraph">
      <p className="absolute font-['Inter:Regular',sans-serif] font-normal leading-[7px] left-0 not-italic text-[#5e6169] text-[6px] top-[-0.5px] tracking-[-0.08px] whitespace-nowrap">1 800 ₽</p>
    </div>
  );
}

function Container25() {
  return (
    <div className="flex-[1_0_0] h-[18px] min-h-px min-w-px relative" data-name="Container">
      <div className="bg-clip-padding border-0 border-[transparent] border-solid content-stretch flex flex-col gap-[2px] items-start relative size-full">
        <Paragraph11 />
        <Paragraph12 />
      </div>
    </div>
  );
}

function Paragraph13() {
  return (
    <div className="flex-[1_0_0] h-[10.5px] min-h-px min-w-px relative" data-name="Paragraph">
      <div className="bg-clip-padding border-0 border-[transparent] border-solid relative size-full">
        <p className="absolute font-['Inter:Regular',sans-serif] font-normal leading-[10.5px] left-0 not-italic text-[#5e6169] text-[7px] top-0 tracking-[-0.09px] whitespace-nowrap">Купить</p>
      </div>
    </div>
  );
}

function Container26() {
  return (
    <div className="bg-[#8e9199] h-[20px] relative rounded-[6px] shrink-0 w-[43.18px]" data-name="Container">
      <div className="bg-clip-padding border-0 border-[transparent] border-solid content-stretch flex items-center px-[10px] relative size-full">
        <Paragraph13 />
      </div>
    </div>
  );
}

function Container24() {
  return (
    <div className="absolute bg-[#a8abb4] content-stretch flex gap-[8px] h-[46px] items-center left-0 px-[8px] rounded-[9.031px] top-[54px] w-[166px]" data-name="Container">
      <ImageWithFallback1 />
      <Container25 />
      <Container26 />
    </div>
  );
}

function ImageWithFallback2() {
  return (
    <div className="relative rounded-[6px] shrink-0 size-[30px]" data-name="ImageWithFallback">
      <img alt="Товар 3" className="absolute inset-0 size-full object-cover rounded-[6px]" src={IMG_PRODUCT_3} />
    </div>
  );
}

function Paragraph14() {
  return (
    <div className="h-[9px] relative shrink-0 w-full" data-name="Paragraph">
      <p className="absolute font-['Inter:Regular',sans-serif] font-normal leading-[9px] left-0 not-italic text-[#5e6169] text-[8px] top-[0.5px] tracking-[-0.1px] whitespace-nowrap">Товар 3</p>
    </div>
  );
}

function Paragraph15() {
  return (
    <div className="h-[7px] relative shrink-0 w-full" data-name="Paragraph">
      <p className="absolute font-['Inter:Regular',sans-serif] font-normal leading-[7px] left-0 not-italic text-[#5e6169] text-[6px] top-[-0.5px] tracking-[-0.08px] whitespace-nowrap">3 200 ₽</p>
    </div>
  );
}

function Container28() {
  return (
    <div className="flex-[1_0_0] h-[18px] min-h-px min-w-px relative" data-name="Container">
      <div className="bg-clip-padding border-0 border-[transparent] border-solid content-stretch flex flex-col gap-[2px] items-start relative size-full">
        <Paragraph14 />
        <Paragraph15 />
      </div>
    </div>
  );
}

function Paragraph16() {
  return (
    <div className="flex-[1_0_0] h-[10.5px] min-h-px min-w-px relative" data-name="Paragraph">
      <div className="bg-clip-padding border-0 border-[transparent] border-solid relative size-full">
        <p className="absolute font-['Inter:Regular',sans-serif] font-normal leading-[10.5px] left-0 not-italic text-[#5e6169] text-[7px] top-0 tracking-[-0.09px] whitespace-nowrap">Купить</p>
      </div>
    </div>
  );
}

function Container29() {
  return (
    <div className="bg-[#8e9199] h-[20px] relative rounded-[6px] shrink-0 w-[43.18px]" data-name="Container">
      <div className="bg-clip-padding border-0 border-[transparent] border-solid content-stretch flex items-center px-[10px] relative size-full">
        <Paragraph16 />
      </div>
    </div>
  );
}

function Container27() {
  return (
    <div className="absolute bg-[#a8abb4] content-stretch flex gap-[8px] h-[46px] items-center left-0 px-[8px] rounded-[9.031px] top-[108px] w-[166px]" data-name="Container">
      <ImageWithFallback2 />
      <Container28 />
      <Container29 />
    </div>
  );
}

function Paragraph17() {
  return (
    <div className="absolute h-[9.383px] left-0 top-[201.62px] w-[166px]" data-name="Paragraph">
      <p className="-translate-x-1/2 absolute font-['Inter:Regular',sans-serif] font-normal leading-[9.389px] left-[83.04px] not-italic text-[#8e9199] text-[6.259px] text-center top-[-0.5px] tracking-[-0.0672px] whitespace-nowrap">Показать ещё</p>
    </div>
  );
}

function Container20() {
  return (
    <div className="h-[211px] relative shrink-0 w-full" data-name="Container">
      <Container21 />
      <Container24 />
      <Container27 />
      <Paragraph17 />
    </div>
  );
}

function Quiz2VariantA() {
  return (
    <div className="bg-[#f7f8fc] col-1 content-stretch flex flex-col h-[231px] items-start pt-[10px] px-[10px] relative rounded-[14.99px] row-2 shrink-0 w-[186px]" data-name="Quiz2VariantA">
      <Container20 />
    </div>
  );
}

function ImageWithFallback3() {
  return (
    <div className="relative rounded-[6px] shrink-0 size-[30px]" data-name="ImageWithFallback">
      <img alt="Товар 1" className="absolute inset-0 size-full object-cover rounded-[6px]" src={IMG_PRODUCT_1} />
    </div>
  );
}

function Paragraph18() {
  return (
    <div className="h-[9px] relative shrink-0 w-full" data-name="Paragraph">
      <p className="absolute font-['Inter:Regular',sans-serif] font-normal leading-[9px] left-0 not-italic text-[#101828] text-[8px] top-[0.5px] tracking-[-0.1px] whitespace-nowrap">Товар 1</p>
    </div>
  );
}

function Paragraph19() {
  return (
    <div className="h-[7px] relative shrink-0 w-full" data-name="Paragraph">
      <p className="absolute font-['Inter:Regular',sans-serif] font-normal leading-[7px] left-0 not-italic text-[#5e6169] text-[6px] top-[-0.5px] tracking-[-0.08px] whitespace-nowrap">2 500 ₽</p>
    </div>
  );
}

function Container32() {
  return (
    <div className="flex-[1_0_0] h-[18px] min-h-px min-w-px relative" data-name="Container">
      <div className="bg-clip-padding border-0 border-[transparent] border-solid content-stretch flex flex-col gap-[2px] items-start relative size-full">
        <Paragraph18 />
        <Paragraph19 />
      </div>
    </div>
  );
}

function Paragraph20() {
  return (
    <div className="flex-[1_0_0] h-[10.5px] min-h-px min-w-px relative" data-name="Paragraph">
      <div className="bg-clip-padding border-0 border-[transparent] border-solid relative size-full">
        <p className="absolute font-['Inter:Regular',sans-serif] font-normal leading-[10.5px] left-0 not-italic text-[7px] text-white top-0 tracking-[-0.09px] whitespace-nowrap">Купить</p>
      </div>
    </div>
  );
}

function Container33() {
  return (
    <div className="bg-[#364146] h-[20px] relative rounded-[6px] shrink-0 w-[43.18px]" data-name="Container">
      <div className="bg-clip-padding border-0 border-[transparent] border-solid content-stretch flex items-center px-[10px] relative size-full">
        <Paragraph20 />
      </div>
    </div>
  );
}

function Container31() {
  return (
    <div className="absolute bg-[#e1e3eb] content-stretch flex gap-[8px] h-[46px] items-center left-0 px-[8px] rounded-[9.031px] top-0 w-[166px]" data-name="Container">
      <ImageWithFallback3 />
      <Container32 />
      <Container33 />
    </div>
  );
}

function ImageWithFallback4() {
  return (
    <div className="relative rounded-[6px] shrink-0 size-[30px]" data-name="ImageWithFallback">
      <img alt="Товар 2" className="absolute inset-0 size-full object-cover rounded-[6px]" src={IMG_PRODUCT_2} />
    </div>
  );
}

function Paragraph21() {
  return (
    <div className="h-[9px] relative shrink-0 w-full" data-name="Paragraph">
      <p className="absolute font-['Inter:Regular',sans-serif] font-normal leading-[9px] left-0 not-italic text-[#101828] text-[8px] top-[0.5px] tracking-[-0.1px] whitespace-nowrap">Товар 2</p>
    </div>
  );
}

function Paragraph22() {
  return (
    <div className="h-[7px] relative shrink-0 w-full" data-name="Paragraph">
      <p className="absolute font-['Inter:Regular',sans-serif] font-normal leading-[7px] left-0 not-italic text-[#5e6169] text-[6px] top-[-0.5px] tracking-[-0.08px] whitespace-nowrap">1 800 ₽</p>
    </div>
  );
}

function Container35() {
  return (
    <div className="flex-[1_0_0] h-[18px] min-h-px min-w-px relative" data-name="Container">
      <div className="bg-clip-padding border-0 border-[transparent] border-solid content-stretch flex flex-col gap-[2px] items-start relative size-full">
        <Paragraph21 />
        <Paragraph22 />
      </div>
    </div>
  );
}

function Paragraph23() {
  return (
    <div className="flex-[1_0_0] h-[10.5px] min-h-px min-w-px relative" data-name="Paragraph">
      <div className="bg-clip-padding border-0 border-[transparent] border-solid relative size-full">
        <p className="absolute font-['Inter:Regular',sans-serif] font-normal leading-[10.5px] left-0 not-italic text-[7px] text-white top-0 tracking-[-0.09px] whitespace-nowrap">Купить</p>
      </div>
    </div>
  );
}

function Container36() {
  return (
    <div className="bg-[#364146] h-[20px] relative rounded-[6px] shrink-0 w-[43.18px]" data-name="Container">
      <div className="bg-clip-padding border-0 border-[transparent] border-solid content-stretch flex items-center px-[10px] relative size-full">
        <Paragraph23 />
      </div>
    </div>
  );
}

function Container34() {
  return (
    <div className="absolute bg-[#e1e3eb] content-stretch flex gap-[8px] h-[46px] items-center left-0 px-[8px] rounded-[9.031px] top-[54px] w-[166px]" data-name="Container">
      <ImageWithFallback4 />
      <Container35 />
      <Container36 />
    </div>
  );
}

function ImageWithFallback5() {
  return (
    <div className="relative rounded-[6px] shrink-0 size-[30px]" data-name="ImageWithFallback">
      <img alt="Товар 3" className="absolute inset-0 size-full object-cover rounded-[6px]" src={IMG_PRODUCT_3} />
    </div>
  );
}

function Paragraph24() {
  return (
    <div className="h-[9px] relative shrink-0 w-full" data-name="Paragraph">
      <p className="absolute font-['Inter:Regular',sans-serif] font-normal leading-[9px] left-0 not-italic text-[#101828] text-[8px] top-[0.5px] tracking-[-0.1px] whitespace-nowrap">Товар 3</p>
    </div>
  );
}

function Paragraph25() {
  return (
    <div className="h-[7px] relative shrink-0 w-full" data-name="Paragraph">
      <p className="absolute font-['Inter:Regular',sans-serif] font-normal leading-[7px] left-0 not-italic text-[#5e6169] text-[6px] top-[-0.5px] tracking-[-0.08px] whitespace-nowrap">3 200 ₽</p>
    </div>
  );
}

function Container38() {
  return (
    <div className="flex-[1_0_0] h-[18px] min-h-px min-w-px relative" data-name="Container">
      <div className="bg-clip-padding border-0 border-[transparent] border-solid content-stretch flex flex-col gap-[2px] items-start relative size-full">
        <Paragraph24 />
        <Paragraph25 />
      </div>
    </div>
  );
}

function Paragraph26() {
  return (
    <div className="flex-[1_0_0] h-[10.5px] min-h-px min-w-px relative" data-name="Paragraph">
      <div className="bg-clip-padding border-0 border-[transparent] border-solid relative size-full">
        <p className="absolute font-['Inter:Regular',sans-serif] font-normal leading-[10.5px] left-0 not-italic text-[7px] text-white top-0 tracking-[-0.09px] whitespace-nowrap">Купить</p>
      </div>
    </div>
  );
}

function Container39() {
  return (
    <div className="bg-[#364146] h-[20px] relative rounded-[6px] shrink-0 w-[43.18px]" data-name="Container">
      <div className="bg-clip-padding border-0 border-[transparent] border-solid content-stretch flex items-center px-[10px] relative size-full">
        <Paragraph26 />
      </div>
    </div>
  );
}

function Container37() {
  return (
    <div className="absolute bg-[#e1e3eb] content-stretch flex gap-[8px] h-[46px] items-center left-0 px-[8px] rounded-[9.031px] top-[108px] w-[166px]" data-name="Container">
      <ImageWithFallback5 />
      <Container38 />
      <Container39 />
    </div>
  );
}

function Paragraph27() {
  return (
    <div className="absolute h-[9.383px] left-0 top-[201.62px] w-[166px]" data-name="Paragraph">
      <p className="-translate-x-1/2 absolute font-['Inter:Regular',sans-serif] font-normal leading-[9.389px] left-[83.04px] not-italic text-[#4a90ff] text-[6.259px] text-center top-[-0.5px] tracking-[-0.0672px] whitespace-nowrap">Показать ещё</p>
    </div>
  );
}

function Container30() {
  return (
    <div className="h-[211px] relative shrink-0 w-full" data-name="Container">
      <Container31 />
      <Container34 />
      <Container37 />
      <Paragraph27 />
    </div>
  );
}

function Quiz2VariantB() {
  return (
    <div className="bg-[#f7f8fc] col-2 content-stretch flex flex-col h-[231px] items-start pt-[10px] px-[10px] relative rounded-[14.99px] row-2 shrink-0 w-[186px]" data-name="Quiz2VariantB">
      <Container30 />
    </div>
  );
}

function Paragraph28() {
  return (
    <div className="absolute h-[10.727px] left-[8.94px] top-[13.13px] w-[20.227px]" data-name="Paragraph">
      <p className="absolute font-['Inter:Regular',sans-serif] font-normal leading-[10.729px] left-0 not-italic text-[#101828] text-[10px] top-0 tracking-[-0.1397px] whitespace-nowrap">Имя</p>
    </div>
  );
}

function Container44() {
  return (
    <div className="absolute h-[37px] left-0 top-0 w-[166px]" data-name="Container">
      <Paragraph28 />
    </div>
  );
}

function Container43() {
  return (
    <div className="absolute bg-[#e1e3eb] h-[37px] left-0 rounded-[9.031px] top-0 w-[166px]" data-name="Container">
      <Container44 />
    </div>
  );
}

function Paragraph29() {
  return (
    <div className="absolute h-[10.727px] left-[8.94px] top-[11.13px] w-[58.281px]" data-name="Paragraph">
      <p className="absolute font-['Inter:Regular',sans-serif] font-normal leading-[10.729px] left-0 not-italic text-[#101828] text-[10px] top-0 tracking-[-0.1397px] whitespace-nowrap">user@invalid</p>
    </div>
  );
}

function Container48() {
  return (
    <div className="absolute h-[33px] left-0 top-0 w-[162px]" data-name="Container">
      <Paragraph29 />
    </div>
  );
}

function Container47() {
  return (
    <div className="h-[33px] relative shrink-0 w-full" data-name="Container">
      <Container48 />
    </div>
  );
}

function Container46() {
  return (
    <div className="bg-[#d4f4dd] h-[37px] relative rounded-[9.031px] shrink-0 w-full" data-name="Container">
      <div aria-hidden="true" className="absolute border-2 border-[#4ade80] border-solid inset-0 pointer-events-none rounded-[9.031px]" />
      <div className="content-stretch flex flex-col items-start p-[2px] relative size-full">
        <Container47 />
      </div>
    </div>
  );
}

function Paragraph30() {
  return (
    <div className="h-[7px] relative shrink-0 w-full" data-name="Paragraph">
      <p className="absolute font-['Inter:Regular',sans-serif] font-normal leading-[7px] left-0 not-italic text-[#8e9199] text-[6px] top-[-0.5px] tracking-[-0.08px] whitespace-nowrap">Неверный формат</p>
    </div>
  );
}

function Container45() {
  return (
    <div className="absolute content-stretch flex flex-col gap-[4px] h-[48px] items-start left-0 top-[44.15px] w-[166px]" data-name="Container">
      <Container46 />
      <Paragraph30 />
    </div>
  );
}

function Paragraph31() {
  return (
    <div className="absolute h-[10.727px] left-[8.94px] top-[13.13px] w-[35.516px]" data-name="Paragraph">
      <p className="absolute font-['Inter:Regular',sans-serif] font-normal leading-[10.729px] left-0 not-italic text-[#101828] text-[10px] top-0 tracking-[-0.1397px] whitespace-nowrap">Пароль</p>
    </div>
  );
}

function Container50() {
  return (
    <div className="absolute h-[37px] left-0 top-0 w-[166px]" data-name="Container">
      <Paragraph31 />
    </div>
  );
}

function Container49() {
  return (
    <div className="absolute bg-[#e1e3eb] h-[37px] left-0 rounded-[9.031px] top-[99.3px] w-[166px]" data-name="Container">
      <Container50 />
    </div>
  );
}

function Container42() {
  return (
    <div className="absolute h-[136.297px] left-0 top-0 w-[166px]" data-name="Container">
      <Container43 />
      <Container45 />
      <Container49 />
    </div>
  );
}

function Paragraph32() {
  return (
    <div className="absolute h-[10.727px] left-[43.32px] top-[12.46px] w-[79.359px]" data-name="Paragraph">
      <p className="absolute font-['Inter:Regular',sans-serif] font-normal leading-[10.729px] left-0 not-italic text-[10px] text-white top-0 tracking-[-0.1397px] whitespace-nowrap">Создать аккаунт</p>
    </div>
  );
}

function Container52() {
  return (
    <div className="absolute h-[37px] left-0 top-0 w-[166px]" data-name="Container">
      <Paragraph32 />
    </div>
  );
}

function Container51() {
  return (
    <div className="absolute bg-[#364146] h-[37px] left-0 rounded-[9.031px] top-[148.3px] w-[166px]" data-name="Container">
      <Container52 />
    </div>
  );
}

function Container41() {
  return (
    <div className="absolute h-[185.297px] left-0 top-[12.85px] w-[166px]" data-name="Container">
      <Container42 />
      <Container51 />
    </div>
  );
}

function Container40() {
  return (
    <div className="h-[211px] relative shrink-0 w-full" data-name="Container">
      <Container41 />
    </div>
  );
}

function Quiz3VariantA() {
  return (
    <div className="bg-[#f7f8fc] col-1 content-stretch flex flex-col h-[231px] items-start pt-[10px] px-[10px] relative rounded-[14.99px] row-3 shrink-0 w-[186px]" data-name="Quiz3VariantA">
      <Container40 />
    </div>
  );
}

function Paragraph33() {
  return (
    <div className="absolute h-[10.727px] left-[8.94px] top-[13.13px] w-[20.227px]" data-name="Paragraph">
      <p className="absolute font-['Inter:Regular',sans-serif] font-normal leading-[10.729px] left-0 not-italic text-[#101828] text-[10px] top-0 tracking-[-0.1397px] whitespace-nowrap">Имя</p>
    </div>
  );
}

function Container57() {
  return (
    <div className="absolute h-[37px] left-0 top-0 w-[166px]" data-name="Container">
      <Paragraph33 />
    </div>
  );
}

function Container56() {
  return (
    <div className="absolute bg-[#e1e3eb] h-[37px] left-0 rounded-[9.031px] top-0 w-[166px]" data-name="Container">
      <Container57 />
    </div>
  );
}

function Paragraph34() {
  return (
    <div className="absolute h-[10.727px] left-[8.94px] top-[11.13px] w-[58.281px]" data-name="Paragraph">
      <p className="absolute font-['Inter:Regular',sans-serif] font-normal leading-[10.729px] left-0 not-italic text-[#101828] text-[10px] top-0 tracking-[-0.1397px] whitespace-nowrap">user@invalid</p>
    </div>
  );
}

function Container61() {
  return (
    <div className="absolute h-[33px] left-0 top-0 w-[162px]" data-name="Container">
      <Paragraph34 />
    </div>
  );
}

function Container60() {
  return (
    <div className="h-[33px] relative shrink-0 w-full" data-name="Container">
      <Container61 />
    </div>
  );
}

function Container59() {
  return (
    <div className="bg-[#fdd] h-[37px] relative rounded-[9.031px] shrink-0 w-full" data-name="Container">
      <div aria-hidden="true" className="absolute border-2 border-[#ef4444] border-solid inset-0 pointer-events-none rounded-[9.031px]" />
      <div className="content-stretch flex flex-col items-start p-[2px] relative size-full">
        <Container60 />
      </div>
    </div>
  );
}

function Paragraph35() {
  return (
    <div className="h-[7px] relative shrink-0 w-full" data-name="Paragraph">
      <p className="absolute font-['Inter:Regular',sans-serif] font-normal leading-[7px] left-0 not-italic text-[#ef4444] text-[6px] top-[-0.5px] tracking-[-0.08px] whitespace-nowrap">Неверный формат</p>
    </div>
  );
}

function Container58() {
  return (
    <div className="absolute content-stretch flex flex-col gap-[4px] h-[48px] items-start left-0 top-[44.15px] w-[166px]" data-name="Container">
      <Container59 />
      <Paragraph35 />
    </div>
  );
}

function Paragraph36() {
  return (
    <div className="absolute h-[10.727px] left-[8.94px] top-[13.13px] w-[35.516px]" data-name="Paragraph">
      <p className="absolute font-['Inter:Regular',sans-serif] font-normal leading-[10.729px] left-0 not-italic text-[#101828] text-[10px] top-0 tracking-[-0.1397px] whitespace-nowrap">Пароль</p>
    </div>
  );
}

function Container63() {
  return (
    <div className="absolute h-[37px] left-0 top-0 w-[166px]" data-name="Container">
      <Paragraph36 />
    </div>
  );
}

function Container62() {
  return (
    <div className="absolute bg-[#e1e3eb] h-[37px] left-0 rounded-[9.031px] top-[99.3px] w-[166px]" data-name="Container">
      <Container63 />
    </div>
  );
}

function Container55() {
  return (
    <div className="absolute h-[136.297px] left-0 top-0 w-[166px]" data-name="Container">
      <Container56 />
      <Container58 />
      <Container62 />
    </div>
  );
}

function Paragraph37() {
  return (
    <div className="absolute h-[10.727px] left-[43.32px] top-[12.46px] w-[79.359px]" data-name="Paragraph">
      <p className="absolute font-['Inter:Regular',sans-serif] font-normal leading-[10.729px] left-0 not-italic text-[10px] text-white top-0 tracking-[-0.1397px] whitespace-nowrap">Создать аккаунт</p>
    </div>
  );
}

function Container65() {
  return (
    <div className="absolute h-[37px] left-0 top-0 w-[166px]" data-name="Container">
      <Paragraph37 />
    </div>
  );
}

function Container64() {
  return (
    <div className="absolute bg-[#364146] h-[37px] left-0 rounded-[9.031px] top-[148.3px] w-[166px]" data-name="Container">
      <Container65 />
    </div>
  );
}

function Container54() {
  return (
    <div className="absolute h-[185.297px] left-0 top-[12.85px] w-[166px]" data-name="Container">
      <Container55 />
      <Container64 />
    </div>
  );
}

function Container53() {
  return (
    <div className="h-[211px] relative shrink-0 w-full" data-name="Container">
      <Container54 />
    </div>
  );
}

function Quiz3VariantB() {
  return (
    <div className="bg-[#f7f8fc] col-2 content-stretch flex flex-col h-[231px] items-start pt-[10px] px-[10px] relative rounded-[14.99px] row-3 shrink-0 w-[186px]" data-name="Quiz3VariantB">
      <Container53 />
    </div>
  );
}

function Paragraph38() {
  return (
    <div className="h-[9px] relative shrink-0 w-full" data-name="Paragraph">
      <p className="absolute font-['Inter:Regular',sans-serif] font-normal leading-[9px] left-0 not-italic text-[8px] text-white top-[0.5px] tracking-[-0.1px] whitespace-nowrap">Новинка</p>
    </div>
  );
}

function Paragraph39() {
  return (
    <div className="h-[7px] relative shrink-0 w-full" data-name="Paragraph">
      <p className="absolute font-['Inter:Regular',sans-serif] font-normal leading-[7px] left-0 not-italic text-[6px] text-white top-[-0.5px] tracking-[-0.08px] whitespace-nowrap">Скидка 20%</p>
    </div>
  );
}

function Container67() {
  return (
    <div className="absolute bg-[#ff9f66] content-stretch flex flex-col gap-[2px] h-[34px] items-start left-0 pt-[8px] px-[8px] rounded-[9.031px] top-0 w-[166px]" data-name="Container">
      <Paragraph38 />
      <Paragraph39 />
    </div>
  );
}

function Paragraph40() {
  return (
    <div className="h-[10.5px] relative shrink-0 w-[20.75px]" data-name="Paragraph">
      <div className="bg-clip-padding border-0 border-[transparent] border-solid relative size-full">
        <p className="absolute font-['Inter:Regular',sans-serif] font-normal leading-[10.5px] left-0 not-italic text-[7px] text-white top-0 tracking-[-0.09px] whitespace-nowrap">Синяя</p>
      </div>
    </div>
  );
}

function Container69() {
  return (
    <div className="bg-[#4a90ff] flex-[1_0_0] h-[28px] min-h-px min-w-px relative rounded-[6px]" data-name="Container">
      <div className="bg-clip-padding border-0 border-[transparent] border-solid content-stretch flex items-center justify-center relative size-full">
        <Paragraph40 />
      </div>
    </div>
  );
}

function Paragraph41() {
  return (
    <div className="h-[10.5px] relative shrink-0 w-[28.063px]" data-name="Paragraph">
      <div className="bg-clip-padding border-0 border-[transparent] border-solid relative size-full">
        <p className="absolute font-['Inter:Regular',sans-serif] font-normal leading-[10.5px] left-0 not-italic text-[7px] text-white top-0 tracking-[-0.09px] whitespace-nowrap">Зелёная</p>
      </div>
    </div>
  );
}

function Container70() {
  return (
    <div className="bg-[#22c55e] flex-[1_0_0] h-[28px] min-h-px min-w-px relative rounded-[6px]" data-name="Container">
      <div className="bg-clip-padding border-0 border-[transparent] border-solid content-stretch flex items-center justify-center relative size-full">
        <Paragraph41 />
      </div>
    </div>
  );
}

function Container68() {
  return (
    <div className="absolute content-stretch flex gap-[6px] h-[28px] items-start left-0 top-[42px] w-[166px]" data-name="Container">
      <Container69 />
      <Container70 />
    </div>
  );
}

function Paragraph42() {
  return (
    <div className="h-[9px] relative shrink-0 w-full" data-name="Paragraph">
      <p className="absolute font-['Inter:Regular',sans-serif] font-normal leading-[9px] left-0 not-italic text-[#101828] text-[8px] top-[0.5px] tracking-[-0.1px] whitespace-nowrap">Акция</p>
    </div>
  );
}

function Paragraph43() {
  return (
    <div className="h-[7px] relative shrink-0 w-full" data-name="Paragraph">
      <p className="absolute font-['Inter:Regular',sans-serif] font-normal leading-[7px] left-0 not-italic text-[#5e6169] text-[6px] top-[-0.5px] tracking-[-0.08px] whitespace-nowrap">До конца дня</p>
    </div>
  );
}

function Container71() {
  return (
    <div className="absolute bg-[#e1e3eb] content-stretch flex flex-col gap-[2px] h-[34px] items-start left-0 pt-[8px] px-[8px] rounded-[9.031px] top-[78px] w-[166px]" data-name="Container">
      <Paragraph42 />
      <Paragraph43 />
    </div>
  );
}

function Paragraph44() {
  return (
    <div className="absolute h-[9.383px] left-0 top-[128px] w-[166px]" data-name="Paragraph">
      <p className="-translate-x-1/2 absolute font-['Inter:Regular',sans-serif] font-normal leading-[9.389px] left-[83.15px] not-italic text-[#a855f7] text-[6.259px] text-center top-[-0.5px] tracking-[-0.0672px] whitespace-nowrap">Подробнее</p>
    </div>
  );
}

function Paragraph45() {
  return (
    <div className="h-[13.5px] relative shrink-0 w-[62.367px]" data-name="Paragraph">
      <div className="bg-clip-padding border-0 border-[transparent] border-solid relative size-full">
        <p className="absolute font-['Inter:Regular',sans-serif] font-normal leading-[13.5px] left-0 not-italic text-[9px] text-white top-[0.5px] tracking-[-0.12px] whitespace-nowrap">Купить сейчас</p>
      </div>
    </div>
  );
}

function Container72() {
  return (
    <div className="absolute bg-[#f97316] content-stretch flex h-[32px] items-center justify-center left-0 pr-[0.008px] rounded-[9.031px] top-[179px] w-[166px]" data-name="Container">
      <Paragraph45 />
    </div>
  );
}

function Container66() {
  return (
    <div className="h-[211px] relative shrink-0 w-full" data-name="Container">
      <Container67 />
      <Container68 />
      <Container71 />
      <Paragraph44 />
      <Container72 />
    </div>
  );
}

function Quiz4VariantA() {
  return (
    <div className="bg-[#f7f8fc] col-1 content-stretch flex flex-col h-[231px] items-start pt-[10px] px-[10px] relative rounded-[14.99px] row-4 shrink-0 w-[186px]" data-name="Quiz4VariantA">
      <Container66 />
    </div>
  );
}

function Paragraph46() {
  return (
    <div className="h-[9px] relative shrink-0 w-full" data-name="Paragraph">
      <p className="absolute font-['Inter:Regular',sans-serif] font-normal leading-[9px] left-0 not-italic text-[#101828] text-[8px] top-[0.5px] tracking-[-0.1px] whitespace-nowrap">Новинка</p>
    </div>
  );
}

function Paragraph47() {
  return (
    <div className="h-[7px] relative shrink-0 w-full" data-name="Paragraph">
      <p className="absolute font-['Inter:Regular',sans-serif] font-normal leading-[7px] left-0 not-italic text-[#5e6169] text-[6px] top-[-0.5px] tracking-[-0.08px] whitespace-nowrap">Скидка 20%</p>
    </div>
  );
}

function Container74() {
  return (
    <div className="absolute bg-[#e1e3eb] content-stretch flex flex-col gap-[2px] h-[34px] items-start left-0 pt-[8px] px-[8px] rounded-[9.031px] top-0 w-[166px]" data-name="Container">
      <Paragraph46 />
      <Paragraph47 />
    </div>
  );
}

function Paragraph48() {
  return (
    <div className="h-[10.5px] relative shrink-0 w-[24.656px]" data-name="Paragraph">
      <div className="bg-clip-padding border-0 border-[transparent] border-solid relative size-full">
        <p className="absolute font-['Inter:Regular',sans-serif] font-normal leading-[10.5px] left-0 not-italic text-[7px] text-white top-0 tracking-[-0.09px] whitespace-nowrap">Первая</p>
      </div>
    </div>
  );
}

function Container76() {
  return (
    <div className="bg-[#4a90ff] flex-[1_0_0] h-[28px] min-h-px min-w-px relative rounded-[6px]" data-name="Container">
      <div className="bg-clip-padding border-0 border-[transparent] border-solid content-stretch flex items-center justify-center relative size-full">
        <Paragraph48 />
      </div>
    </div>
  );
}

function Paragraph49() {
  return (
    <div className="h-[10.5px] relative shrink-0 w-[23.875px]" data-name="Paragraph">
      <div className="bg-clip-padding border-0 border-[transparent] border-solid relative size-full">
        <p className="absolute font-['Inter:Regular',sans-serif] font-normal leading-[10.5px] left-0 not-italic text-[7px] text-white top-0 tracking-[-0.09px] whitespace-nowrap">Вторая</p>
      </div>
    </div>
  );
}

function Container77() {
  return (
    <div className="bg-[#4a90ff] flex-[1_0_0] h-[28px] min-h-px min-w-px relative rounded-[6px]" data-name="Container">
      <div className="bg-clip-padding border-0 border-[transparent] border-solid content-stretch flex items-center justify-center relative size-full">
        <Paragraph49 />
      </div>
    </div>
  );
}

function Container75() {
  return (
    <div className="absolute content-stretch flex gap-[6px] h-[28px] items-start left-0 top-[42px] w-[166px]" data-name="Container">
      <Container76 />
      <Container77 />
    </div>
  );
}

function Paragraph50() {
  return (
    <div className="h-[9px] relative shrink-0 w-full" data-name="Paragraph">
      <p className="absolute font-['Inter:Regular',sans-serif] font-normal leading-[9px] left-0 not-italic text-[#101828] text-[8px] top-[0.5px] tracking-[-0.1px] whitespace-nowrap">Акция</p>
    </div>
  );
}

function Paragraph51() {
  return (
    <div className="h-[7px] relative shrink-0 w-full" data-name="Paragraph">
      <p className="absolute font-['Inter:Regular',sans-serif] font-normal leading-[7px] left-0 not-italic text-[#5e6169] text-[6px] top-[-0.5px] tracking-[-0.08px] whitespace-nowrap">До конца дня</p>
    </div>
  );
}

function Container78() {
  return (
    <div className="absolute bg-[#e1e3eb] content-stretch flex flex-col gap-[2px] h-[34px] items-start left-0 pt-[8px] px-[8px] rounded-[9.031px] top-[78px] w-[166px]" data-name="Container">
      <Paragraph50 />
      <Paragraph51 />
    </div>
  );
}

function Paragraph52() {
  return (
    <div className="absolute h-[9.383px] left-0 top-[128px] w-[166px]" data-name="Paragraph">
      <p className="-translate-x-1/2 absolute font-['Inter:Regular',sans-serif] font-normal leading-[9.389px] left-[83.15px] not-italic text-[#4a90ff] text-[6.259px] text-center top-[-0.5px] tracking-[-0.0672px] whitespace-nowrap">Подробнее</p>
    </div>
  );
}

function Paragraph53() {
  return (
    <div className="h-[13.5px] relative shrink-0 w-[62.367px]" data-name="Paragraph">
      <div className="bg-clip-padding border-0 border-[transparent] border-solid relative size-full">
        <p className="absolute font-['Inter:Regular',sans-serif] font-normal leading-[13.5px] left-0 not-italic text-[9px] text-white top-[0.5px] tracking-[-0.12px] whitespace-nowrap">Купить сейчас</p>
      </div>
    </div>
  );
}

function Container79() {
  return (
    <div className="absolute bg-[#364146] content-stretch flex h-[32px] items-center justify-center left-0 pr-[0.008px] rounded-[9.031px] top-[179px] w-[166px]" data-name="Container">
      <Paragraph53 />
    </div>
  );
}

function Container73() {
  return (
    <div className="h-[211px] relative shrink-0 w-full" data-name="Container">
      <Container74 />
      <Container75 />
      <Container78 />
      <Paragraph52 />
      <Container79 />
    </div>
  );
}

function Quiz4VariantB() {
  return (
    <div className="bg-[#f7f8fc] col-2 content-stretch flex flex-col h-[231px] items-start pt-[10px] px-[10px] relative rounded-[14.99px] row-4 shrink-0 w-[186px]" data-name="Quiz4VariantB">
      <Container73 />
    </div>
  );
}

function Paragraph54() {
  return (
    <div className="h-[10.5px] relative shrink-0 w-[27.969px]" data-name="Paragraph">
      <div className="bg-clip-padding border-0 border-[transparent] border-solid relative size-full">
        <p className="absolute font-['Inter:Regular',sans-serif] font-normal leading-[10.5px] left-0 not-italic text-[7px] text-white top-0 tracking-[-0.09px] whitespace-nowrap">Красная</p>
      </div>
    </div>
  );
}

function Container82() {
  return (
    <div className="bg-[#ef4444] flex-[1_0_0] h-[28px] min-h-px min-w-px relative rounded-[6px]" data-name="Container">
      <div className="bg-clip-padding border-0 border-[transparent] border-solid content-stretch flex items-center justify-center relative size-full">
        <Paragraph54 />
      </div>
    </div>
  );
}

function Paragraph55() {
  return (
    <div className="h-[10.5px] relative shrink-0 w-[28.063px]" data-name="Paragraph">
      <div className="bg-clip-padding border-0 border-[transparent] border-solid relative size-full">
        <p className="absolute font-['Inter:Regular',sans-serif] font-normal leading-[10.5px] left-0 not-italic text-[7px] text-white top-0 tracking-[-0.09px] whitespace-nowrap">Зелёная</p>
      </div>
    </div>
  );
}

function Container83() {
  return (
    <div className="bg-[#22c55e] flex-[1_0_0] h-[28px] min-h-px min-w-px relative rounded-[6px]" data-name="Container">
      <div className="bg-clip-padding border-0 border-[transparent] border-solid content-stretch flex items-center justify-center relative size-full">
        <Paragraph55 />
      </div>
    </div>
  );
}

function Container81() {
  return (
    <div className="h-[28px] relative shrink-0 w-[166px]" data-name="Container">
      <div className="bg-clip-padding border-0 border-[transparent] border-solid content-stretch flex gap-[6px] items-start relative size-full">
        <Container82 />
        <Container83 />
      </div>
    </div>
  );
}

function ImageWithFallback6() {
  return (
    <div className="relative rounded-[6px] shrink-0 size-[24px]" data-name="ImageWithFallback">
      <img alt="Товар 1" className="absolute inset-0 size-full object-cover rounded-[6px]" src={IMG_PRODUCT_1} />
    </div>
  );
}

function Paragraph56() {
  return (
    <div className="h-[9px] relative shrink-0 w-[28.414px]" data-name="Paragraph">
      <div className="bg-clip-padding border-0 border-[transparent] border-solid relative size-full">
        <p className="absolute font-['Inter:Regular',sans-serif] font-normal leading-[9px] left-0 not-italic text-[8px] text-white top-[0.5px] tracking-[-0.1px] whitespace-nowrap">Товар 1</p>
      </div>
    </div>
  );
}

function Container84() {
  return (
    <div className="bg-[#fbbf24] h-[36px] relative rounded-[9.031px] shrink-0 w-[166px]" data-name="Container">
      <div className="bg-clip-padding border-0 border-[transparent] border-solid content-stretch flex gap-[6px] items-center pl-[6px] relative size-full">
        <ImageWithFallback6 />
        <Paragraph56 />
      </div>
    </div>
  );
}

function ImageWithFallback7() {
  return (
    <div className="relative rounded-[6px] shrink-0 size-[24px]" data-name="ImageWithFallback">
      <img alt="Товар 2" className="absolute inset-0 size-full object-cover rounded-[6px]" src={IMG_PRODUCT_2} />
    </div>
  );
}

function Paragraph57() {
  return (
    <div className="h-[9px] relative shrink-0 w-[29.539px]" data-name="Paragraph">
      <div className="bg-clip-padding border-0 border-[transparent] border-solid relative size-full">
        <p className="absolute font-['Inter:Regular',sans-serif] font-normal leading-[9px] left-0 not-italic text-[8px] text-white top-[0.5px] tracking-[-0.1px] whitespace-nowrap">Товар 2</p>
      </div>
    </div>
  );
}

function Container85() {
  return (
    <div className="bg-[#a855f7] h-[36px] relative rounded-[9.031px] shrink-0 w-[166px]" data-name="Container">
      <div className="bg-clip-padding border-0 border-[transparent] border-solid content-stretch flex gap-[6px] items-center pl-[6px] relative size-full">
        <ImageWithFallback7 />
        <Paragraph57 />
      </div>
    </div>
  );
}

function ImageWithFallback8() {
  return (
    <div className="relative rounded-[6px] shrink-0 size-[24px]" data-name="ImageWithFallback">
      <img alt="Товар 3" className="absolute inset-0 size-full object-cover rounded-[6px]" src={IMG_PRODUCT_3} />
    </div>
  );
}

function Paragraph58() {
  return (
    <div className="h-[9px] relative shrink-0 w-[29.789px]" data-name="Paragraph">
      <div className="bg-clip-padding border-0 border-[transparent] border-solid relative size-full">
        <p className="absolute font-['Inter:Regular',sans-serif] font-normal leading-[9px] left-0 not-italic text-[8px] text-white top-[0.5px] tracking-[-0.1px] whitespace-nowrap">Товар 3</p>
      </div>
    </div>
  );
}

function Container86() {
  return (
    <div className="bg-[#06b6d4] h-[36px] relative rounded-[9.031px] shrink-0 w-[166px]" data-name="Container">
      <div className="bg-clip-padding border-0 border-[transparent] border-solid content-stretch flex gap-[6px] items-center pl-[6px] relative size-full">
        <ImageWithFallback8 />
        <Paragraph58 />
      </div>
    </div>
  );
}

function Paragraph59() {
  return (
    <div className="h-[13.5px] relative shrink-0 w-[57.117px]" data-name="Paragraph">
      <div className="bg-clip-padding border-0 border-[transparent] border-solid relative size-full">
        <p className="absolute font-['Inter:Regular',sans-serif] font-normal leading-[13.5px] left-0 not-italic text-[9px] text-white top-[0.5px] tracking-[-0.12px] whitespace-nowrap">Показать всё</p>
      </div>
    </div>
  );
}

function Container87() {
  return (
    <div className="bg-[#8b5cf6] h-[34px] relative rounded-[9.031px] shrink-0 w-[166px]" data-name="Container">
      <div className="bg-clip-padding border-0 border-[transparent] border-solid content-stretch flex items-center justify-center pr-[0.008px] relative size-full">
        <Paragraph59 />
      </div>
    </div>
  );
}

function Container80() {
  return (
    <div className="content-stretch flex flex-col gap-[6px] h-[211px] items-start relative shrink-0 w-full" data-name="Container">
      <Container81 />
      <Container84 />
      <Container85 />
      <Container86 />
      <Container87 />
    </div>
  );
}

function Quiz5VariantA() {
  return (
    <div className="bg-[#f7f8fc] col-1 content-stretch flex flex-col h-[231px] items-start pt-[10px] px-[10px] relative rounded-[14.99px] row-5 shrink-0 w-[186px]" data-name="Quiz5VariantA">
      <Container80 />
    </div>
  );
}

function Paragraph60() {
  return (
    <div className="h-[10.5px] relative shrink-0 w-[24.656px]" data-name="Paragraph">
      <div className="bg-clip-padding border-0 border-[transparent] border-solid relative size-full">
        <p className="absolute font-['Inter:Regular',sans-serif] font-normal leading-[10.5px] left-0 not-italic text-[7px] text-white top-0 tracking-[-0.09px] whitespace-nowrap">Первая</p>
      </div>
    </div>
  );
}

function Container90() {
  return (
    <div className="bg-[#364146] flex-[1_0_0] h-[28px] min-h-px min-w-px relative rounded-[6px]" data-name="Container">
      <div className="bg-clip-padding border-0 border-[transparent] border-solid content-stretch flex items-center justify-center relative size-full">
        <Paragraph60 />
      </div>
    </div>
  );
}

function Paragraph61() {
  return (
    <div className="h-[10.5px] relative shrink-0 w-[23.875px]" data-name="Paragraph">
      <div className="bg-clip-padding border-0 border-[transparent] border-solid relative size-full">
        <p className="absolute font-['Inter:Regular',sans-serif] font-normal leading-[10.5px] left-0 not-italic text-[7px] text-white top-0 tracking-[-0.09px] whitespace-nowrap">Вторая</p>
      </div>
    </div>
  );
}

function Container91() {
  return (
    <div className="bg-[#364146] flex-[1_0_0] h-[28px] min-h-px min-w-px relative rounded-[6px]" data-name="Container">
      <div className="bg-clip-padding border-0 border-[transparent] border-solid content-stretch flex items-center justify-center relative size-full">
        <Paragraph61 />
      </div>
    </div>
  );
}

function Container89() {
  return (
    <div className="h-[28px] relative shrink-0 w-[166px]" data-name="Container">
      <div className="bg-clip-padding border-0 border-[transparent] border-solid content-stretch flex gap-[6px] items-start relative size-full">
        <Container90 />
        <Container91 />
      </div>
    </div>
  );
}

function ImageWithFallback9() {
  return (
    <div className="relative rounded-[6px] shrink-0 size-[24px]" data-name="ImageWithFallback">
      <img alt="Товар 1" className="absolute inset-0 size-full object-cover rounded-[6px]" src={IMG_PRODUCT_1} />
    </div>
  );
}

function Paragraph62() {
  return (
    <div className="h-[9px] relative shrink-0 w-[28.414px]" data-name="Paragraph">
      <div className="bg-clip-padding border-0 border-[transparent] border-solid relative size-full">
        <p className="absolute font-['Inter:Regular',sans-serif] font-normal leading-[9px] left-0 not-italic text-[#101828] text-[8px] top-[0.5px] tracking-[-0.1px] whitespace-nowrap">Товар 1</p>
      </div>
    </div>
  );
}

function Container92() {
  return (
    <div className="bg-[#e1e3eb] h-[36px] relative rounded-[9.031px] shrink-0 w-[166px]" data-name="Container">
      <div className="bg-clip-padding border-0 border-[transparent] border-solid content-stretch flex gap-[6px] items-center pl-[6px] relative size-full">
        <ImageWithFallback9 />
        <Paragraph62 />
      </div>
    </div>
  );
}

function ImageWithFallback10() {
  return (
    <div className="relative rounded-[6px] shrink-0 size-[24px]" data-name="ImageWithFallback">
      <img alt="Товар 2" className="absolute inset-0 size-full object-cover rounded-[6px]" src={IMG_PRODUCT_2} />
    </div>
  );
}

function Paragraph63() {
  return (
    <div className="h-[9px] relative shrink-0 w-[29.539px]" data-name="Paragraph">
      <div className="bg-clip-padding border-0 border-[transparent] border-solid relative size-full">
        <p className="absolute font-['Inter:Regular',sans-serif] font-normal leading-[9px] left-0 not-italic text-[#101828] text-[8px] top-[0.5px] tracking-[-0.1px] whitespace-nowrap">Товар 2</p>
      </div>
    </div>
  );
}

function Container93() {
  return (
    <div className="bg-[#e1e3eb] h-[36px] relative rounded-[9.031px] shrink-0 w-[166px]" data-name="Container">
      <div className="bg-clip-padding border-0 border-[transparent] border-solid content-stretch flex gap-[6px] items-center pl-[6px] relative size-full">
        <ImageWithFallback10 />
        <Paragraph63 />
      </div>
    </div>
  );
}

function ImageWithFallback11() {
  return (
    <div className="relative rounded-[6px] shrink-0 size-[24px]" data-name="ImageWithFallback">
      <img alt="Товар 3" className="absolute inset-0 size-full object-cover rounded-[6px]" src={IMG_PRODUCT_3} />
    </div>
  );
}

function Paragraph64() {
  return (
    <div className="h-[9px] relative shrink-0 w-[29.789px]" data-name="Paragraph">
      <div className="bg-clip-padding border-0 border-[transparent] border-solid relative size-full">
        <p className="absolute font-['Inter:Regular',sans-serif] font-normal leading-[9px] left-0 not-italic text-[#101828] text-[8px] top-[0.5px] tracking-[-0.1px] whitespace-nowrap">Товар 3</p>
      </div>
    </div>
  );
}

function Container94() {
  return (
    <div className="bg-[#e1e3eb] h-[36px] relative rounded-[9.031px] shrink-0 w-[166px]" data-name="Container">
      <div className="bg-clip-padding border-0 border-[transparent] border-solid content-stretch flex gap-[6px] items-center pl-[6px] relative size-full">
        <ImageWithFallback11 />
        <Paragraph64 />
      </div>
    </div>
  );
}

function Paragraph65() {
  return (
    <div className="h-[13.5px] relative shrink-0 w-[57.117px]" data-name="Paragraph">
      <div className="bg-clip-padding border-0 border-[transparent] border-solid relative size-full">
        <p className="absolute font-['Inter:Regular',sans-serif] font-normal leading-[13.5px] left-0 not-italic text-[9px] text-white top-[0.5px] tracking-[-0.12px] whitespace-nowrap">Показать всё</p>
      </div>
    </div>
  );
}

function Container95() {
  return (
    <div className="bg-[#364146] h-[35px] relative rounded-[9.031px] shrink-0 w-[166px]" data-name="Container">
      <div className="bg-clip-padding border-0 border-[transparent] border-solid content-stretch flex items-center justify-center pr-[0.008px] relative size-full">
        <Paragraph65 />
      </div>
    </div>
  );
}

function Container88() {
  return (
    <div className="content-stretch flex flex-col gap-[6px] h-[211px] items-start relative shrink-0 w-full" data-name="Container">
      <Container89 />
      <Container92 />
      <Container93 />
      <Container94 />
      <Container95 />
    </div>
  );
}

function Quiz5VariantB() {
  return (
    <div className="bg-[#f7f8fc] col-2 content-stretch flex flex-col h-[231px] items-start pt-[10px] px-[10px] relative rounded-[14.99px] row-5 shrink-0 w-[186px]" data-name="Quiz5VariantB">
      <Container88 />
    </div>
  );
}

function Paragraph66() {
  return (
    <div className="h-[9px] relative shrink-0 w-[78.234px]" data-name="Paragraph">
      <div className="bg-clip-padding border-0 border-[transparent] border-solid relative size-full">
        <p className="-translate-x-1/2 absolute font-['Inter:Regular',sans-serif] font-normal leading-[9px] left-[39.5px] not-italic text-[#101828] text-[8px] text-center top-[0.5px] tracking-[-0.1px] whitespace-nowrap">Выберите действие:</p>
      </div>
    </div>
  );
}

function Paragraph67() {
  return (
    <div className="h-[13.5px] relative shrink-0 w-[46.07px]" data-name="Paragraph">
      <div className="bg-clip-padding border-0 border-[transparent] border-solid relative size-full">
        <p className="absolute font-['Inter:Regular',sans-serif] font-normal leading-[13.5px] left-0 not-italic text-[9px] text-white top-[0.5px] tracking-[-0.12px] whitespace-nowrap">Сохранить</p>
      </div>
    </div>
  );
}

function Container98() {
  return (
    <div className="bg-[#4a90ff] h-[32px] relative rounded-[9.031px] shrink-0 w-full" data-name="Container">
      <div className="flex flex-row items-center justify-center size-full">
        <div className="content-stretch flex items-center justify-center pr-[0.008px] relative size-full">
          <Paragraph67 />
        </div>
      </div>
    </div>
  );
}

function Paragraph68() {
  return (
    <div className="h-[13.5px] relative shrink-0 w-[35.547px]" data-name="Paragraph">
      <div className="bg-clip-padding border-0 border-[transparent] border-solid relative size-full">
        <p className="absolute font-['Inter:Regular',sans-serif] font-normal leading-[13.5px] left-0 not-italic text-[9px] text-white top-[0.5px] tracking-[-0.12px] whitespace-nowrap">Удалить</p>
      </div>
    </div>
  );
}

function Container99() {
  return (
    <div className="bg-[#22c55e] content-stretch flex h-[32px] items-center justify-center relative rounded-[9.031px] shrink-0 w-full" data-name="Container">
      <Paragraph68 />
    </div>
  );
}

function Paragraph69() {
  return (
    <div className="h-[13.5px] relative shrink-0 w-[42.711px]" data-name="Paragraph">
      <div className="bg-clip-padding border-0 border-[transparent] border-solid relative size-full">
        <p className="absolute font-['Inter:Regular',sans-serif] font-normal leading-[13.5px] left-0 not-italic text-[9px] text-white top-[0.5px] tracking-[-0.12px] whitespace-nowrap">Отменить</p>
      </div>
    </div>
  );
}

function Container100() {
  return (
    <div className="bg-[#f59e0b] h-[32px] relative rounded-[9.031px] shrink-0 w-full" data-name="Container">
      <div className="flex flex-row items-center justify-center size-full">
        <div className="content-stretch flex items-center justify-center pr-[0.008px] relative size-full">
          <Paragraph69 />
        </div>
      </div>
    </div>
  );
}

function Paragraph70() {
  return (
    <div className="h-[13.5px] relative shrink-0 w-[46.813px]" data-name="Paragraph">
      <div className="bg-clip-padding border-0 border-[transparent] border-solid relative size-full">
        <p className="absolute font-['Inter:Regular',sans-serif] font-normal leading-[13.5px] left-0 not-italic text-[9px] text-white top-[0.5px] tracking-[-0.12px] whitespace-nowrap">Настройки</p>
      </div>
    </div>
  );
}

function Container101() {
  return (
    <div className="bg-[#8b5cf6] content-stretch flex h-[32px] items-center justify-center relative rounded-[9.031px] shrink-0 w-full" data-name="Container">
      <Paragraph70 />
    </div>
  );
}

function Container97() {
  return (
    <div className="h-[146px] relative shrink-0 w-[166px]" data-name="Container">
      <div className="bg-clip-padding border-0 border-[transparent] border-solid content-stretch flex flex-col gap-[6px] items-start relative size-full">
        <Container98 />
        <Container99 />
        <Container100 />
        <Container101 />
      </div>
    </div>
  );
}

function Container96() {
  return (
    <div className="content-stretch flex flex-col gap-[8px] h-[211px] items-center justify-center relative shrink-0 w-full" data-name="Container">
      <Paragraph66 />
      <Container97 />
    </div>
  );
}

function Quiz6VariantA() {
  return (
    <div className="bg-[#f7f8fc] col-1 content-stretch flex flex-col h-[231px] items-start pt-[10px] px-[10px] relative rounded-[14.99px] row-6 shrink-0 w-[186px]" data-name="Quiz6VariantA">
      <Container96 />
    </div>
  );
}

function Paragraph71() {
  return (
    <div className="h-[9px] relative shrink-0 w-[78.234px]" data-name="Paragraph">
      <div className="bg-clip-padding border-0 border-[transparent] border-solid relative size-full">
        <p className="-translate-x-1/2 absolute font-['Inter:Regular',sans-serif] font-normal leading-[9px] left-[39.5px] not-italic text-[#101828] text-[8px] text-center top-[0.5px] tracking-[-0.1px] whitespace-nowrap">Выберите действие:</p>
      </div>
    </div>
  );
}

function Paragraph72() {
  return (
    <div className="h-[13.5px] relative shrink-0 w-[46.07px]" data-name="Paragraph">
      <div className="bg-clip-padding border-0 border-[transparent] border-solid relative size-full">
        <p className="absolute font-['Inter:Regular',sans-serif] font-normal leading-[13.5px] left-0 not-italic text-[9px] text-white top-[0.5px] tracking-[-0.12px] whitespace-nowrap">Сохранить</p>
      </div>
    </div>
  );
}

function Container104() {
  return (
    <div className="bg-[#364146] h-[32px] relative rounded-[9.031px] shrink-0 w-full" data-name="Container">
      <div className="flex flex-row items-center justify-center size-full">
        <div className="content-stretch flex items-center justify-center pr-[0.008px] relative size-full">
          <Paragraph72 />
        </div>
      </div>
    </div>
  );
}

function Paragraph73() {
  return (
    <div className="h-[13.5px] relative shrink-0 w-[35.547px]" data-name="Paragraph">
      <div className="bg-clip-padding border-0 border-[transparent] border-solid relative size-full">
        <p className="absolute font-['Inter:Regular',sans-serif] font-normal leading-[13.5px] left-0 not-italic text-[#5e6169] text-[9px] top-[0.5px] tracking-[-0.12px] whitespace-nowrap">Удалить</p>
      </div>
    </div>
  );
}

function Container105() {
  return (
    <div className="bg-[#e1e3eb] content-stretch flex h-[32px] items-center justify-center relative rounded-[9.031px] shrink-0 w-full" data-name="Container">
      <Paragraph73 />
    </div>
  );
}

function Paragraph74() {
  return (
    <div className="h-[13.5px] relative shrink-0 w-[42.711px]" data-name="Paragraph">
      <div className="bg-clip-padding border-0 border-[transparent] border-solid relative size-full">
        <p className="absolute font-['Inter:Regular',sans-serif] font-normal leading-[13.5px] left-0 not-italic text-[#5e6169] text-[9px] top-[0.5px] tracking-[-0.12px] whitespace-nowrap">Отменить</p>
      </div>
    </div>
  );
}

function Container106() {
  return (
    <div className="bg-[#e1e3eb] h-[32px] relative rounded-[9.031px] shrink-0 w-full" data-name="Container">
      <div className="flex flex-row items-center justify-center size-full">
        <div className="content-stretch flex items-center justify-center pr-[0.008px] relative size-full">
          <Paragraph74 />
        </div>
      </div>
    </div>
  );
}

function Paragraph75() {
  return (
    <div className="h-[9.383px] relative shrink-0 w-full" data-name="Paragraph">
      <p className="-translate-x-1/2 absolute font-['Inter:Regular',sans-serif] font-normal leading-[9.389px] left-[83.16px] not-italic text-[#4a90ff] text-[6.259px] text-center top-[-0.5px] tracking-[-0.0672px] whitespace-nowrap">Настройки</p>
    </div>
  );
}

function Container103() {
  return (
    <div className="h-[123.383px] relative shrink-0 w-[166px]" data-name="Container">
      <div className="bg-clip-padding border-0 border-[transparent] border-solid content-stretch flex flex-col gap-[6px] items-start relative size-full">
        <Container104 />
        <Container105 />
        <Container106 />
        <Paragraph75 />
      </div>
    </div>
  );
}

function Container102() {
  return (
    <div className="content-stretch flex flex-col gap-[8px] h-[211px] items-center justify-center pb-[0.008px] relative shrink-0 w-full" data-name="Container">
      <Paragraph71 />
      <Container103 />
    </div>
  );
}

function Quiz6VariantB() {
  return (
    <div className="bg-[#f7f8fc] col-2 content-stretch flex flex-col h-[231px] items-start pt-[10px] px-[10px] relative rounded-[14.99px] row-6 shrink-0 w-[186px]" data-name="Quiz6VariantB">
      <Container102 />
    </div>
  );
}

export {
  Quiz1VariantA,
  Quiz1VariantB,
  Quiz2VariantA,
  Quiz2VariantB,
  Quiz3VariantA,
  Quiz3VariantB,
  Quiz4VariantA,
  Quiz4VariantB,
  Quiz5VariantA,
  Quiz5VariantB,
  Quiz6VariantA,
  Quiz6VariantB,
};