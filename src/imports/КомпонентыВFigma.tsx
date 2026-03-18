import imgImageWithFallback from "figma:asset/2dac47163e8aa3d25726a23f76df58d43726a06c.png";

function Paragraph() {
  return (
    <div className="absolute h-[19.5px] left-0 top-[117.5px] w-[8.633px]" data-name="Paragraph">
      <p className="absolute font-['Inter:Regular',sans-serif] font-normal leading-[19.5px] left-0 not-italic text-[#364146] text-[13px] top-px tracking-[-0.16px] whitespace-nowrap">A</p>
    </div>
  );
}

function ImageWithFallback() {
  return (
    <div className="absolute h-[55px] left-0 rounded-[8px] top-[44px] w-[166px]" data-name="ImageWithFallback">
      <img alt="" className="absolute inset-0 max-w-none object-cover pointer-events-none rounded-[8px] size-full" src={imgImageWithFallback} />
    </div>
  );
}

function Paragraph1() {
  return (
    <div className="absolute h-[13.5px] left-0 top-[107px] w-[166px]" data-name="Paragraph">
      <p className="absolute font-['Inter:Regular',sans-serif] font-normal leading-[13.5px] left-0 not-italic text-[#101828] text-[9px] top-[0.5px] tracking-[-0.12px] whitespace-nowrap">UX Курс для начинающих</p>
    </div>
  );
}

function Paragraph2() {
  return (
    <div className="absolute content-stretch flex h-[8px] items-start left-0 top-[126.5px] w-[166px]" data-name="Paragraph">
      <p className="flex-[1_0_0] font-['Inter:Regular',sans-serif] font-normal leading-[8px] min-h-px min-w-px not-italic relative text-[#8e9199] text-[6px] tracking-[-0.08px]">Изучите основы пользовательского опыта</p>
    </div>
  );
}

function Paragraph3() {
  return (
    <div className="h-[10.5px] relative shrink-0 w-full" data-name="Paragraph">
      <p className="-translate-x-1/2 absolute font-['Inter:Regular',sans-serif] font-normal leading-[10.5px] left-[16.52px] not-italic text-[7px] text-center text-white top-0 tracking-[-0.09px] whitespace-nowrap">More</p>
    </div>
  );
}

function Container2() {
  return (
    <div className="bg-[#364146] flex-[1_0_0] h-[22.5px] min-h-px min-w-px relative rounded-[6px]" data-name="Container">
      <div className="bg-clip-padding border-0 border-[transparent] border-solid content-stretch flex flex-col items-start pt-[6px] px-[10px] relative size-full">
        <Paragraph3 />
      </div>
    </div>
  );
}

function Paragraph4() {
  return (
    <div className="h-[10.5px] relative shrink-0 w-full" data-name="Paragraph">
      <p className="-translate-x-1/2 absolute font-['Inter:Regular',sans-serif] font-normal leading-[10.5px] left-[16.38px] not-italic text-[7px] text-center text-white top-0 tracking-[-0.09px] whitespace-nowrap">Start</p>
    </div>
  );
}

function Container3() {
  return (
    <div className="bg-[#364146] flex-[1_0_0] h-[22.5px] min-h-px min-w-px relative rounded-[6px]" data-name="Container">
      <div className="bg-clip-padding border-0 border-[transparent] border-solid content-stretch flex flex-col items-start pt-[6px] px-[10px] relative size-full">
        <Paragraph4 />
      </div>
    </div>
  );
}

function Paragraph5() {
  return (
    <div className="h-[10.5px] relative shrink-0 w-full" data-name="Paragraph">
      <p className="-translate-x-1/2 absolute font-['Inter:Regular',sans-serif] font-normal leading-[10.5px] left-[16.54px] not-italic text-[7px] text-center text-white top-0 tracking-[-0.09px] whitespace-nowrap">Action</p>
    </div>
  );
}

function Container4() {
  return (
    <div className="bg-[#364146] flex-[1_0_0] h-[22.5px] min-h-px min-w-px relative rounded-[6px]" data-name="Container">
      <div className="bg-clip-padding border-0 border-[transparent] border-solid content-stretch flex flex-col items-start pt-[6px] px-[10px] relative size-full">
        <Paragraph5 />
      </div>
    </div>
  );
}

function Container1() {
  return (
    <div className="absolute content-stretch flex gap-[4px] h-[22.5px] items-start left-0 pr-[0.008px] top-[144.5px] w-[166px]" data-name="Container">
      <Container2 />
      <Container3 />
      <Container4 />
    </div>
  );
}

function Container() {
  return (
    <div className="h-[211px] relative shrink-0 w-full" data-name="Container">
      <ImageWithFallback />
      <Paragraph1 />
      <Paragraph2 />
      <Container1 />
    </div>
  );
}

function Module2Lesson4Quiz1VariantA() {
  return (
    <div className="absolute bg-white content-stretch flex flex-col h-[231px] items-start left-[16.63px] overflow-clip pt-[10px] px-[10px] rounded-[14.99px] top-[109.5px] w-[186px]" data-name="Module2Lesson4Quiz1VariantA">
      <Container />
    </div>
  );
}

function Paragraph6() {
  return (
    <div className="absolute h-[19.5px] left-[234.63px] top-[117.5px] w-[8.305px]" data-name="Paragraph">
      <p className="absolute font-['Inter:Regular',sans-serif] font-normal leading-[19.5px] left-0 not-italic text-[#22c55e] text-[13px] top-px tracking-[-0.16px] whitespace-nowrap">B</p>
    </div>
  );
}

function ImageWithFallback1() {
  return (
    <div className="h-[70px] relative rounded-[8px] shrink-0 w-[166px]" data-name="ImageWithFallback">
      <img alt="" className="absolute bg-clip-padding border-0 border-[transparent] border-solid inset-0 max-w-none object-cover pointer-events-none rounded-[8px] size-full" src={imgImageWithFallback} />
    </div>
  );
}

function Paragraph7() {
  return (
    <div className="h-[12px] relative shrink-0 w-[166px]" data-name="Paragraph">
      <div className="bg-clip-padding border-0 border-[transparent] border-solid content-stretch flex items-start relative size-full">
        <p className="flex-[1_0_0] font-['Inter:Regular',sans-serif] font-normal leading-[12px] min-h-px min-w-px not-italic relative text-[#101828] text-[10px] tracking-[-0.13px]">UX Курс для начинающих</p>
      </div>
    </div>
  );
}

function Paragraph8() {
  return (
    <div className="h-[18px] relative shrink-0 w-[166px]" data-name="Paragraph">
      <div className="bg-clip-padding border-0 border-[transparent] border-solid relative size-full">
        <p className="absolute font-['Inter:Regular',sans-serif] font-normal leading-[9px] left-0 not-italic text-[#8e9199] text-[7px] top-0 tracking-[-0.09px] w-[159px]">Изучите основы пользовательского опыта за 8 недель</p>
      </div>
    </div>
  );
}

function Paragraph9() {
  return (
    <div className="h-[13.5px] relative shrink-0 w-full" data-name="Paragraph">
      <p className="-translate-x-1/2 absolute font-['Inter:Regular',sans-serif] font-normal leading-[13.5px] left-[71.21px] not-italic text-[9px] text-center text-white top-[0.5px] tracking-[-0.12px] whitespace-nowrap">Записаться на курс</p>
    </div>
  );
}

function Container6() {
  return (
    <div className="bg-[#364146] h-[29.5px] relative rounded-[6px] shrink-0 w-[166px]" data-name="Container">
      <div className="bg-clip-padding border-0 border-[transparent] border-solid content-stretch flex flex-col items-start pt-[8px] px-[12px] relative size-full">
        <Paragraph9 />
      </div>
    </div>
  );
}

function Paragraph10() {
  return (
    <div className="h-[10.5px] relative shrink-0 w-[37.586px]" data-name="Paragraph">
      <div className="bg-clip-padding border-0 border-[transparent] border-solid relative size-full">
        <p className="absolute decoration-solid font-['Inter:Regular',sans-serif] font-normal leading-[10.5px] left-0 not-italic text-[#8e9199] text-[7px] top-0 tracking-[-0.09px] underline whitespace-nowrap">Подробнее</p>
      </div>
    </div>
  );
}

function Paragraph11() {
  return (
    <div className="h-[10.5px] relative shrink-0 w-[38.563px]" data-name="Paragraph">
      <div className="bg-clip-padding border-0 border-[transparent] border-solid relative size-full">
        <p className="absolute decoration-solid font-['Inter:Regular',sans-serif] font-normal leading-[10.5px] left-0 not-italic text-[#8e9199] text-[7px] top-0 tracking-[-0.09px] underline whitespace-nowrap">Программа</p>
      </div>
    </div>
  );
}

function Container7() {
  return (
    <div className="h-[10.5px] relative shrink-0 w-[166px]" data-name="Container">
      <div className="bg-clip-padding border-0 border-[transparent] border-solid content-stretch flex gap-[8px] items-start justify-center pl-[40.922px] pr-[40.93px] relative size-full">
        <Paragraph10 />
        <Paragraph11 />
      </div>
    </div>
  );
}

function Container5() {
  return (
    <div className="content-stretch flex flex-col gap-[8px] h-[211px] items-start relative shrink-0 w-full" data-name="Container">
      <ImageWithFallback1 />
      <Paragraph7 />
      <Paragraph8 />
      <Container6 />
      <Container7 />
    </div>
  );
}

function Module2Lesson4Quiz1VariantB() {
  return (
    <div className="absolute bg-white content-stretch flex flex-col h-[231px] items-start left-[250.94px] overflow-clip pt-[10px] px-[10px] rounded-[14.99px] top-[109.5px] w-[186px]" data-name="Module2Lesson4Quiz1VariantB">
      <Container5 />
    </div>
  );
}

function Paragraph12() {
  return (
    <div className="absolute h-[19.5px] left-0 top-[409.5px] w-[8.633px]" data-name="Paragraph">
      <p className="absolute font-['Inter:Regular',sans-serif] font-normal leading-[19.5px] left-0 not-italic text-[#364146] text-[13px] top-px tracking-[-0.16px] whitespace-nowrap">A</p>
    </div>
  );
}

function Paragraph13() {
  return (
    <div className="absolute h-[15px] left-0 top-[37.25px] w-[166px]" data-name="Paragraph">
      <p className="absolute font-['Inter:Regular',sans-serif] font-normal leading-[15px] left-0 not-italic text-[#101828] text-[10px] top-[0.5px] tracking-[-0.13px] whitespace-nowrap">Форма обратной связи</p>
    </div>
  );
}

function Paragraph14() {
  return (
    <div className="h-[10.5px] relative shrink-0 w-full" data-name="Paragraph">
      <p className="absolute font-['Inter:Regular',sans-serif] font-normal leading-[10.5px] left-0 not-italic text-[#8e9199] text-[7px] top-0 tracking-[-0.09px] whitespace-nowrap">Введите имя</p>
    </div>
  );
}

function Container9() {
  return (
    <div className="absolute bg-[#f7f8fc] content-stretch flex flex-col h-[22.5px] items-start left-0 pt-[6px] px-[12px] rounded-[6px] top-[60.25px] w-[166px]" data-name="Container">
      <Paragraph14 />
    </div>
  );
}

function Paragraph15() {
  return (
    <div className="h-[10.5px] relative shrink-0 w-full" data-name="Paragraph">
      <p className="absolute font-['Inter:Regular',sans-serif] font-normal leading-[10.5px] left-0 not-italic text-[#8e9199] text-[7px] top-0 tracking-[-0.09px] whitespace-nowrap">Адрес электронной почты</p>
    </div>
  );
}

function Container10() {
  return (
    <div className="absolute bg-[#f7f8fc] content-stretch flex flex-col h-[22.5px] items-start left-0 pt-[6px] px-[12px] rounded-[6px] top-[88.75px] w-[166px]" data-name="Container">
      <Paragraph15 />
    </div>
  );
}

function Paragraph16() {
  return (
    <div className="h-[10.5px] relative shrink-0 w-full" data-name="Paragraph">
      <p className="absolute font-['Inter:Regular',sans-serif] font-normal leading-[10.5px] left-0 not-italic text-[#8e9199] text-[7px] top-0 tracking-[-0.09px] whitespace-nowrap">Что-то ещё...</p>
    </div>
  );
}

function Container11() {
  return (
    <div className="absolute bg-[#f7f8fc] content-stretch flex flex-col h-[22.5px] items-start left-0 pt-[6px] px-[12px] rounded-[6px] top-[117.25px] w-[166px]" data-name="Container">
      <Paragraph16 />
    </div>
  );
}

function Paragraph17() {
  return (
    <div className="h-[12px] relative shrink-0 w-full" data-name="Paragraph">
      <p className="-translate-x-1/2 absolute font-['Inter:Regular',sans-serif] font-normal leading-[12px] left-[71.43px] not-italic text-[8px] text-center text-white top-0 tracking-[-0.1px] whitespace-nowrap">Отправить</p>
    </div>
  );
}

function Container12() {
  return (
    <div className="absolute bg-[#364146] content-stretch flex flex-col h-[24px] items-start left-0 pt-[6px] px-[12px] rounded-[6px] top-[149.75px] w-[166px]" data-name="Container">
      <Paragraph17 />
    </div>
  );
}

function Container8() {
  return (
    <div className="h-[211px] relative shrink-0 w-full" data-name="Container">
      <Paragraph13 />
      <Container9 />
      <Container10 />
      <Container11 />
      <Container12 />
    </div>
  );
}

function Module2Lesson4Quiz2VariantA() {
  return (
    <div className="absolute bg-white content-stretch flex flex-col h-[231px] items-start left-[16.63px] overflow-clip pt-[10px] px-[10px] rounded-[14.99px] top-[401.5px] w-[186px]" data-name="Module2Lesson4Quiz2VariantA">
      <Container8 />
    </div>
  );
}

function Paragraph18() {
  return (
    <div className="absolute h-[19.5px] left-[234.63px] top-[409.5px] w-[8.305px]" data-name="Paragraph">
      <p className="absolute font-['Inter:Regular',sans-serif] font-normal leading-[19.5px] left-0 not-italic text-[#22c55e] text-[13px] top-px tracking-[-0.16px] whitespace-nowrap">B</p>
    </div>
  );
}

function Paragraph19() {
  return (
    <div className="absolute h-[15px] left-0 top-[4.75px] w-[166px]" data-name="Paragraph">
      <p className="absolute font-['Inter:Regular',sans-serif] font-normal leading-[15px] left-0 not-italic text-[#101828] text-[10px] top-[0.5px] tracking-[-0.13px] whitespace-nowrap">Форма обратной связи</p>
    </div>
  );
}

function Paragraph20() {
  return (
    <div className="h-[12px] relative shrink-0 w-[166px]" data-name="Paragraph">
      <div className="bg-clip-padding border-0 border-[transparent] border-solid relative size-full">
        <p className="absolute font-['Inter:Regular',sans-serif] font-normal leading-[12px] left-0 not-italic text-[#101828] text-[8px] top-0 tracking-[-0.1px] whitespace-nowrap">Имя</p>
      </div>
    </div>
  );
}

function Paragraph21() {
  return (
    <div className="h-[10.5px] relative shrink-0 w-full" data-name="Paragraph">
      <p className="absolute font-['Inter:Regular',sans-serif] font-normal leading-[10.5px] left-0 not-italic text-[#8e9199] text-[7px] top-0 tracking-[-0.09px] whitespace-nowrap">Ваше имя</p>
    </div>
  );
}

function Container15() {
  return (
    <div className="bg-[#f7f8fc] flex-[1_0_0] min-h-px min-w-px relative rounded-[6px] w-[166px]" data-name="Container">
      <div className="bg-clip-padding border-0 border-[transparent] border-solid content-stretch flex flex-col items-start pt-[6px] px-[12px] relative size-full">
        <Paragraph21 />
      </div>
    </div>
  );
}

function Container14() {
  return (
    <div className="absolute content-stretch flex flex-col gap-[4px] h-[38.5px] items-start left-0 top-[29.75px] w-[166px]" data-name="Container">
      <Paragraph20 />
      <Container15 />
    </div>
  );
}

function Paragraph22() {
  return (
    <div className="h-[12px] relative shrink-0 w-[166px]" data-name="Paragraph">
      <div className="bg-clip-padding border-0 border-[transparent] border-solid relative size-full">
        <p className="absolute font-['Inter:Regular',sans-serif] font-normal leading-[12px] left-0 not-italic text-[#101828] text-[8px] top-0 tracking-[-0.1px] whitespace-nowrap">Email</p>
      </div>
    </div>
  );
}

function Paragraph23() {
  return (
    <div className="h-[10.5px] relative shrink-0 w-full" data-name="Paragraph">
      <p className="absolute font-['Inter:Regular',sans-serif] font-normal leading-[10.5px] left-0 not-italic text-[#8e9199] text-[7px] top-0 tracking-[-0.09px] whitespace-nowrap">your@email.com</p>
    </div>
  );
}

function Container17() {
  return (
    <div className="bg-[#f7f8fc] flex-[1_0_0] min-h-px min-w-px relative rounded-[6px] w-[166px]" data-name="Container">
      <div className="bg-clip-padding border-0 border-[transparent] border-solid content-stretch flex flex-col items-start pt-[6px] px-[12px] relative size-full">
        <Paragraph23 />
      </div>
    </div>
  );
}

function Container16() {
  return (
    <div className="absolute content-stretch flex flex-col gap-[4px] h-[38.5px] items-start left-0 top-[76.25px] w-[166px]" data-name="Container">
      <Paragraph22 />
      <Container17 />
    </div>
  );
}

function Paragraph24() {
  return (
    <div className="h-[12px] relative shrink-0 w-[166px]" data-name="Paragraph">
      <div className="bg-clip-padding border-0 border-[transparent] border-solid relative size-full">
        <p className="absolute font-['Inter:Regular',sans-serif] font-normal leading-[12px] left-0 not-italic text-[#101828] text-[8px] top-0 tracking-[-0.1px] whitespace-nowrap">Сообщение</p>
      </div>
    </div>
  );
}

function Paragraph25() {
  return (
    <div className="h-[10.5px] relative shrink-0 w-full" data-name="Paragraph">
      <p className="absolute font-['Inter:Regular',sans-serif] font-normal leading-[10.5px] left-0 not-italic text-[#8e9199] text-[7px] top-0 tracking-[-0.09px] whitespace-nowrap">Ваше сообщение</p>
    </div>
  );
}

function Container19() {
  return (
    <div className="bg-[#f7f8fc] flex-[1_0_0] min-h-px min-w-px relative rounded-[6px] w-[166px]" data-name="Container">
      <div className="bg-clip-padding border-0 border-[transparent] border-solid content-stretch flex flex-col items-start pt-[6px] px-[12px] relative size-full">
        <Paragraph25 />
      </div>
    </div>
  );
}

function Container18() {
  return (
    <div className="absolute content-stretch flex flex-col gap-[4px] h-[46px] items-start left-0 top-[122.75px] w-[166px]" data-name="Container">
      <Paragraph24 />
      <Container19 />
    </div>
  );
}

function Paragraph26() {
  return (
    <div className="h-[13.5px] relative shrink-0 w-full" data-name="Paragraph">
      <p className="-translate-x-1/2 absolute font-['Inter:Regular',sans-serif] font-normal leading-[13.5px] left-[71.27px] not-italic text-[9px] text-center text-white top-[0.5px] tracking-[-0.12px] whitespace-nowrap">Отправить сообщение</p>
    </div>
  );
}

function Container20() {
  return (
    <div className="absolute bg-[#364146] content-stretch flex flex-col h-[29.5px] items-start left-0 pt-[8px] px-[12px] rounded-[6px] top-[176.75px] w-[166px]" data-name="Container">
      <Paragraph26 />
    </div>
  );
}

function Container13() {
  return (
    <div className="h-[211px] relative shrink-0 w-full" data-name="Container">
      <Paragraph19 />
      <Container14 />
      <Container16 />
      <Container18 />
      <Container20 />
    </div>
  );
}

function Module2Lesson4Quiz2VariantB() {
  return (
    <div className="absolute bg-white content-stretch flex flex-col h-[231px] items-start left-[250.94px] overflow-clip pt-[10px] px-[10px] rounded-[14.99px] top-[401.5px] w-[186px]" data-name="Module2Lesson4Quiz2VariantB">
      <Container13 />
    </div>
  );
}

function Paragraph27() {
  return (
    <div className="absolute h-[19.5px] left-0 top-[701.5px] w-[8.633px]" data-name="Paragraph">
      <p className="absolute font-['Inter:Regular',sans-serif] font-normal leading-[19.5px] left-0 not-italic text-[#364146] text-[13px] top-px tracking-[-0.16px] whitespace-nowrap">A</p>
    </div>
  );
}

function Paragraph28() {
  return (
    <div className="h-[15px] relative shrink-0 w-[61.094px]" data-name="Paragraph">
      <div className="bg-clip-padding border-0 border-[transparent] border-solid relative size-full">
        <p className="absolute font-['Inter:Regular',sans-serif] font-normal leading-[15px] left-0 not-italic text-[#101828] text-[10px] top-[0.5px] tracking-[-0.13px] whitespace-nowrap">Приложение</p>
      </div>
    </div>
  );
}

function Container25() {
  return <div className="bg-[#364146] h-px shrink-0 w-[10px]" data-name="Container" />;
}

function Container26() {
  return <div className="bg-[#364146] h-px shrink-0 w-[10px]" data-name="Container" />;
}

function Container27() {
  return <div className="bg-[#364146] flex-[1_0_0] min-h-px min-w-px w-[10px]" data-name="Container" />;
}

function Container24() {
  return (
    <div className="h-[7px] relative shrink-0 w-[10px]" data-name="Container">
      <div className="bg-clip-padding border-0 border-[transparent] border-solid content-stretch flex flex-col gap-[2px] items-start relative size-full">
        <Container25 />
        <Container26 />
        <Container27 />
      </div>
    </div>
  );
}

function Container23() {
  return (
    <div className="bg-[#f7f8fc] relative rounded-[4px] shrink-0 size-[20px]" data-name="Container">
      <div className="bg-clip-padding border-0 border-[transparent] border-solid content-stretch flex items-center justify-center px-[5px] relative size-full">
        <Container24 />
      </div>
    </div>
  );
}

function Container22() {
  return (
    <div className="h-[20px] relative shrink-0 w-[166px]" data-name="Container">
      <div className="bg-clip-padding border-0 border-[transparent] border-solid content-stretch flex items-center justify-between relative size-full">
        <Paragraph28 />
        <Container23 />
      </div>
    </div>
  );
}

function Paragraph29() {
  return (
    <div className="h-[10.5px] relative shrink-0 w-full" data-name="Paragraph">
      <p className="-translate-x-1/2 absolute font-['Inter:Regular',sans-serif] font-normal leading-[10.5px] left-[71.7px] not-italic text-[#101828] text-[7px] text-center top-0 tracking-[-0.09px] whitespace-nowrap">Открыть разделы</p>
    </div>
  );
}

function Container28() {
  return (
    <div className="bg-[#f7f8fc] h-[22.5px] relative rounded-[6px] shrink-0 w-[166px]" data-name="Container">
      <div className="bg-clip-padding border-0 border-[transparent] border-solid content-stretch flex flex-col items-start pt-[6px] px-[12px] relative size-full">
        <Paragraph29 />
      </div>
    </div>
  );
}

function Paragraph30() {
  return (
    <div className="h-[27px] relative shrink-0 w-full" data-name="Paragraph">
      <div className="absolute font-['Inter:Regular',sans-serif] font-normal leading-[9px] left-0 not-italic text-[#8e9199] text-[7px] top-0 tracking-[-0.09px] w-[149px] whitespace-pre-wrap">
        <p className="mb-0">Добро пожаловать!</p>
        <p className="mb-0">&nbsp;</p>
        <p>Здесь ваши последние достижения и рекомендации</p>
      </div>
    </div>
  );
}

function Container29() {
  return (
    <div className="bg-[#f7f8fc] flex-[1_0_0] min-h-px min-w-px relative rounded-[8px] w-[166px]" data-name="Container">
      <div className="bg-clip-padding border-0 border-[transparent] border-solid content-stretch flex flex-col items-start pt-[8px] px-[8px] relative size-full">
        <Paragraph30 />
      </div>
    </div>
  );
}

function Container21() {
  return (
    <div className="content-stretch flex flex-col gap-[8px] h-[211px] items-start relative shrink-0 w-full" data-name="Container">
      <Container22 />
      <Container28 />
      <Container29 />
    </div>
  );
}

function Module2Lesson4Quiz3VariantA() {
  return (
    <div className="absolute bg-white content-stretch flex flex-col h-[231px] items-start left-[16.63px] overflow-clip pt-[10px] px-[10px] rounded-[14.99px] top-[693.5px] w-[186px]" data-name="Module2Lesson4Quiz3VariantA">
      <Container21 />
    </div>
  );
}

function Paragraph31() {
  return (
    <div className="absolute h-[19.5px] left-[234.63px] top-[701.5px] w-[8.305px]" data-name="Paragraph">
      <p className="absolute font-['Inter:Regular',sans-serif] font-normal leading-[19.5px] left-0 not-italic text-[#22c55e] text-[13px] top-px tracking-[-0.16px] whitespace-nowrap">B</p>
    </div>
  );
}

function Paragraph32() {
  return (
    <div className="h-[10.5px] relative shrink-0 w-full" data-name="Paragraph">
      <p className="-translate-x-1/2 absolute font-['Inter:Regular',sans-serif] font-normal leading-[10.5px] left-[14.37px] not-italic text-[7px] text-center text-white top-0 tracking-[-0.09px] whitespace-nowrap">Главная</p>
    </div>
  );
}

function Container32() {
  return (
    <div className="bg-[#364146] flex-[1_0_0] h-[22.5px] min-h-px min-w-px relative rounded-[6px]" data-name="Container">
      <div className="bg-clip-padding border-0 border-[transparent] border-solid content-stretch flex flex-col items-start pt-[6px] px-[12px] relative size-full">
        <Paragraph32 />
      </div>
    </div>
  );
}

function Paragraph33() {
  return (
    <div className="h-[10.5px] relative shrink-0 w-full" data-name="Paragraph">
      <p className="-translate-x-1/2 absolute font-['Inter:Regular',sans-serif] font-normal leading-[10.5px] left-[14.48px] not-italic text-[#364146] text-[7px] text-center top-0 tracking-[-0.09px] whitespace-nowrap">Курсы</p>
    </div>
  );
}

function Container33() {
  return (
    <div className="bg-[#f7f8fc] flex-[1_0_0] h-[22.5px] min-h-px min-w-px relative rounded-[6px]" data-name="Container">
      <div className="bg-clip-padding border-0 border-[transparent] border-solid content-stretch flex flex-col items-start pt-[6px] px-[12px] relative size-full">
        <Paragraph33 />
      </div>
    </div>
  );
}

function Paragraph34() {
  return (
    <div className="h-[10.5px] relative shrink-0 w-full" data-name="Paragraph">
      <p className="-translate-x-1/2 absolute font-['Inter:Regular',sans-serif] font-normal leading-[10.5px] left-[15px] not-italic text-[#364146] text-[7px] text-center top-0 tracking-[-0.09px] whitespace-nowrap">Профиль</p>
    </div>
  );
}

function Container34() {
  return (
    <div className="bg-[#f7f8fc] flex-[1_0_0] h-[22.5px] min-h-px min-w-px relative rounded-[6px]" data-name="Container">
      <div className="bg-clip-padding border-0 border-[transparent] border-solid content-stretch flex flex-col items-start pt-[6px] px-[12px] relative size-full">
        <Paragraph34 />
      </div>
    </div>
  );
}

function Container31() {
  return (
    <div className="h-[22.5px] relative shrink-0 w-[166px]" data-name="Container">
      <div className="bg-clip-padding border-0 border-[transparent] border-solid content-stretch flex gap-[4px] items-start relative size-full">
        <Container32 />
        <Container33 />
        <Container34 />
      </div>
    </div>
  );
}

function Paragraph35() {
  return (
    <div className="h-[15px] relative shrink-0 w-full" data-name="Paragraph">
      <p className="absolute font-['Inter:Regular',sans-serif] font-normal leading-[15px] left-0 not-italic text-[#101828] text-[10px] top-[0.5px] tracking-[-0.13px] whitespace-nowrap">Главная</p>
    </div>
  );
}

function Paragraph36() {
  return (
    <div className="h-[12px] relative shrink-0 w-full" data-name="Paragraph">
      <p className="absolute font-['Inter:Regular',sans-serif] font-normal leading-[12px] left-0 not-italic text-[#101828] text-[8px] top-0 tracking-[-0.1px] whitespace-nowrap">Добро пожаловать!</p>
    </div>
  );
}

function Paragraph37() {
  return (
    <div className="h-[16px] relative shrink-0 w-full" data-name="Paragraph">
      <p className="absolute font-['Inter:Regular',sans-serif] font-normal leading-[8px] left-0 not-italic text-[#8e9199] text-[6px] top-0 tracking-[-0.08px] w-[109px]">Здесь ваши последние достижения и рекомендации</p>
    </div>
  );
}

function Container36() {
  return (
    <div className="bg-[#f7f8fc] h-[46px] relative rounded-[8px] shrink-0 w-full" data-name="Container">
      <div className="content-stretch flex flex-col gap-[2px] items-start pt-[8px] px-[8px] relative size-full">
        <Paragraph36 />
        <Paragraph37 />
      </div>
    </div>
  );
}

function Paragraph38() {
  return (
    <div className="h-[12px] relative shrink-0 w-full" data-name="Paragraph">
      <p className="absolute font-['Inter:Regular',sans-serif] font-normal leading-[12px] left-0 not-italic text-[#101828] text-[8px] top-0 tracking-[-0.1px] whitespace-nowrap">Популярные курсы</p>
    </div>
  );
}

function Paragraph39() {
  return (
    <div className="h-[9px] relative shrink-0 w-full" data-name="Paragraph">
      <p className="absolute font-['Inter:Regular',sans-serif] font-normal leading-[9px] left-0 not-italic text-[#8e9199] text-[6px] top-[-0.5px] tracking-[-0.08px] whitespace-nowrap">5 новых курсов</p>
    </div>
  );
}

function Container37() {
  return (
    <div className="bg-[#f7f8fc] h-[39px] relative rounded-[8px] shrink-0 w-full" data-name="Container">
      <div className="content-stretch flex flex-col gap-[2px] items-start pt-[8px] px-[8px] relative size-full">
        <Paragraph38 />
        <Paragraph39 />
      </div>
    </div>
  );
}

function Container35() {
  return (
    <div className="flex-[1_0_0] min-h-px min-w-px relative w-[166px]" data-name="Container">
      <div className="bg-clip-padding border-0 border-[transparent] border-solid content-stretch flex flex-col gap-[6px] items-start relative size-full">
        <Paragraph35 />
        <Container36 />
        <Container37 />
      </div>
    </div>
  );
}

function Paragraph40() {
  return <div className="h-[9px] shrink-0 w-[166px]" data-name="Paragraph" />;
}

function Container30() {
  return (
    <div className="content-stretch flex flex-col gap-[8px] h-[211px] items-start relative shrink-0 w-full" data-name="Container">
      <Container31 />
      <Container35 />
      <Paragraph40 />
    </div>
  );
}

function Module2Lesson4Quiz3VariantB() {
  return (
    <div className="absolute bg-white content-stretch flex flex-col h-[231px] items-start left-[250.94px] overflow-clip pt-[10px] px-[10px] rounded-[14.99px] top-[693.5px] w-[186px]" data-name="Module2Lesson4Quiz3VariantB">
      <Container30 />
    </div>
  );
}

function Paragraph41() {
  return (
    <div className="absolute h-[19.5px] left-0 top-[993.5px] w-[8.633px]" data-name="Paragraph">
      <p className="absolute font-['Inter:Regular',sans-serif] font-normal leading-[19.5px] left-0 not-italic text-[#364146] text-[13px] top-px tracking-[-0.16px] whitespace-nowrap">A</p>
    </div>
  );
}

function Paragraph42() {
  return (
    <div className="absolute h-[15px] left-0 top-0 w-[166px]" data-name="Paragraph">
      <p className="absolute font-['Inter:Regular',sans-serif] font-normal leading-[15px] left-0 not-italic text-[#101828] text-[10px] top-[0.5px] tracking-[-0.13px] whitespace-nowrap">Курс по UX-дизайну</p>
    </div>
  );
}

function ImageWithFallback2() {
  return (
    <div className="absolute h-[50px] left-0 rounded-[6px] top-[21px] w-[166px]" data-name="ImageWithFallback">
      <img alt="" className="absolute inset-0 max-w-none object-cover pointer-events-none rounded-[6px] size-full" src={imgImageWithFallback} />
    </div>
  );
}

function Paragraph43() {
  return (
    <div className="absolute h-[72px] left-0 top-[77px] w-[166px]" data-name="Paragraph">
      <p className="absolute font-['Inter:Regular',sans-serif] font-normal leading-[8px] left-0 not-italic text-[#8e9199] text-[6px] top-0 tracking-[-0.08px] w-[164px]">Этот курс научит вас основам UX-дизайна. Вы изучите как проводить исследования пользователей создавать персоны разрабатывать wireframes и прототипы тестировать интерфейсы и собирать обратную связь. Курс длится 8 недель включает практические задания и проектную работу. Стоимость курса составляет 14900 рублей. После завершения курса вы получите сертификат. Занятия проходят онлайн в удобное для вас время.</p>
    </div>
  );
}

function Paragraph44() {
  return (
    <div className="h-[12px] relative shrink-0 w-full" data-name="Paragraph">
      <p className="-translate-x-1/2 absolute font-['Inter:Regular',sans-serif] font-normal leading-[12px] left-[71.33px] not-italic text-[8px] text-center text-white top-0 tracking-[-0.1px] whitespace-nowrap">Записаться</p>
    </div>
  );
}

function Container39() {
  return (
    <div className="absolute bg-[#364146] content-stretch flex flex-col h-[24px] items-start left-0 pt-[6px] px-[12px] rounded-[6px] top-[187px] w-[166px]" data-name="Container">
      <Paragraph44 />
    </div>
  );
}

function Container38() {
  return (
    <div className="h-[211px] relative shrink-0 w-full" data-name="Container">
      <Paragraph42 />
      <ImageWithFallback2 />
      <Paragraph43 />
      <Container39 />
    </div>
  );
}

function Module2Lesson4Quiz4VariantA() {
  return (
    <div className="absolute bg-white content-stretch flex flex-col h-[231px] items-start left-[16.63px] overflow-clip pt-[10px] px-[10px] rounded-[14.99px] top-[985.5px] w-[186px]" data-name="Module2Lesson4Quiz4VariantA">
      <Container38 />
    </div>
  );
}

function Paragraph45() {
  return (
    <div className="absolute h-[19.5px] left-[234.63px] top-[993.5px] w-[8.305px]" data-name="Paragraph">
      <p className="absolute font-['Inter:Regular',sans-serif] font-normal leading-[19.5px] left-0 not-italic text-[#22c55e] text-[13px] top-px tracking-[-0.16px] whitespace-nowrap">B</p>
    </div>
  );
}

function Paragraph46() {
  return (
    <div className="absolute h-[15px] left-0 top-0 w-[166px]" data-name="Paragraph">
      <p className="absolute font-['Inter:Regular',sans-serif] font-normal leading-[15px] left-0 not-italic text-[#101828] text-[10px] top-[0.5px] tracking-[-0.13px] whitespace-nowrap">Курс по UX-дизайну</p>
    </div>
  );
}

function Paragraph47() {
  return (
    <div className="h-[10.5px] relative shrink-0 w-full" data-name="Paragraph">
      <p className="absolute font-['Inter:Regular',sans-serif] font-normal leading-[10.5px] left-0 not-italic text-[#101828] text-[7px] top-0 tracking-[-0.09px] whitespace-nowrap">Описание</p>
    </div>
  );
}

function Paragraph48() {
  return (
    <div className="h-[16px] relative shrink-0 w-full" data-name="Paragraph">
      <p className="absolute font-['Inter:Regular',sans-serif] font-normal leading-[8px] left-0 not-italic text-[#8e9199] text-[6px] top-0 tracking-[-0.08px] w-[130px]">Научитесь создавать удобные интерфейсы и проводить UX-исследования</p>
    </div>
  );
}

function Container41() {
  return (
    <div className="absolute bg-[#f7f8fc] content-stretch flex flex-col gap-[2px] h-[40.5px] items-start left-0 pt-[6px] px-[6px] rounded-[6px] top-[21px] w-[166px]" data-name="Container">
      <Paragraph47 />
      <Paragraph48 />
    </div>
  );
}

function Paragraph49() {
  return (
    <div className="h-[10.5px] relative shrink-0 w-full" data-name="Paragraph">
      <p className="absolute font-['Inter:Regular',sans-serif] font-normal leading-[10.5px] left-0 not-italic text-[#101828] text-[7px] top-0 tracking-[-0.09px] whitespace-nowrap">Программа курса</p>
    </div>
  );
}

function Paragraph50() {
  return (
    <div className="h-[9px] relative shrink-0 w-[154px]" data-name="Paragraph">
      <div className="bg-clip-padding border-0 border-[transparent] border-solid relative size-full">
        <p className="absolute font-['Inter:Regular',sans-serif] font-normal leading-[9px] left-0 not-italic text-[#8e9199] text-[6px] top-[-0.5px] tracking-[-0.08px] whitespace-nowrap">• Исследования пользователей</p>
      </div>
    </div>
  );
}

function Paragraph51() {
  return (
    <div className="h-[9px] relative shrink-0 w-[154px]" data-name="Paragraph">
      <div className="bg-clip-padding border-0 border-[transparent] border-solid relative size-full">
        <p className="absolute font-['Inter:Regular',sans-serif] font-normal leading-[9px] left-0 not-italic text-[#8e9199] text-[6px] top-[-0.5px] tracking-[-0.08px] whitespace-nowrap">• Wireframes и прототипы</p>
      </div>
    </div>
  );
}

function Paragraph52() {
  return (
    <div className="flex-[1_0_0] min-h-px min-w-px relative w-[154px]" data-name="Paragraph">
      <div className="bg-clip-padding border-0 border-[transparent] border-solid relative size-full">
        <p className="absolute font-['Inter:Regular',sans-serif] font-normal leading-[9px] left-0 not-italic text-[#8e9199] text-[6px] top-[-0.5px] tracking-[-0.08px] whitespace-nowrap">• Тестирование интерфейсов</p>
      </div>
    </div>
  );
}

function Container43() {
  return (
    <div className="content-stretch flex flex-col gap-px h-[29px] items-start relative shrink-0 w-full" data-name="Container">
      <Paragraph50 />
      <Paragraph51 />
      <Paragraph52 />
    </div>
  );
}

function Container42() {
  return (
    <div className="absolute bg-[#f7f8fc] content-stretch flex flex-col gap-[2px] h-[53.5px] items-start left-0 pt-[6px] px-[6px] rounded-[6px] top-[67.5px] w-[166px]" data-name="Container">
      <Paragraph49 />
      <Container43 />
    </div>
  );
}

function Paragraph53() {
  return (
    <div className="h-[10.5px] relative shrink-0 w-[17.008px]" data-name="Paragraph">
      <div className="bg-clip-padding border-0 border-[transparent] border-solid relative size-full">
        <p className="absolute font-['Inter:Regular',sans-serif] font-normal leading-[10.5px] left-0 not-italic text-[#101828] text-[7px] top-0 tracking-[-0.09px] whitespace-nowrap">Цена</p>
      </div>
    </div>
  );
}

function Paragraph54() {
  return (
    <div className="h-[12px] relative shrink-0 w-[33.125px]" data-name="Paragraph">
      <div className="bg-clip-padding border-0 border-[transparent] border-solid relative size-full">
        <p className="absolute font-['Inter:Regular',sans-serif] font-normal leading-[12px] left-0 not-italic text-[#101828] text-[8px] top-0 tracking-[-0.1px] whitespace-nowrap">14 900 ₽</p>
      </div>
    </div>
  );
}

function Container45() {
  return (
    <div className="content-stretch flex h-[12px] items-center justify-between relative shrink-0 w-full" data-name="Container">
      <Paragraph53 />
      <Paragraph54 />
    </div>
  );
}

function Paragraph55() {
  return (
    <div className="h-[9px] relative shrink-0 w-full" data-name="Paragraph">
      <p className="absolute font-['Inter:Regular',sans-serif] font-normal leading-[9px] left-0 not-italic text-[#8e9199] text-[6px] top-[-0.5px] tracking-[-0.08px] whitespace-nowrap">8 недель • Онлайн • Сертификат</p>
    </div>
  );
}

function Container44() {
  return (
    <div className="absolute bg-[#f7f8fc] content-stretch flex flex-col gap-[2px] h-[35px] items-start left-0 pt-[6px] px-[6px] rounded-[6px] top-[127px] w-[166px]" data-name="Container">
      <Container45 />
      <Paragraph55 />
    </div>
  );
}

function Paragraph56() {
  return (
    <div className="h-[12px] relative shrink-0 w-full" data-name="Paragraph">
      <p className="-translate-x-1/2 absolute font-['Inter:Regular',sans-serif] font-normal leading-[12px] left-[71.35px] not-italic text-[8px] text-center text-white top-0 tracking-[-0.1px] whitespace-nowrap">Записаться на курс</p>
    </div>
  );
}

function Container46() {
  return (
    <div className="absolute bg-[#364146] content-stretch flex flex-col h-[24px] items-start left-0 pt-[6px] px-[12px] rounded-[6px] top-[187px] w-[166px]" data-name="Container">
      <Paragraph56 />
    </div>
  );
}

function Container40() {
  return (
    <div className="h-[211px] relative shrink-0 w-full" data-name="Container">
      <Paragraph46 />
      <Container41 />
      <Container42 />
      <Container44 />
      <Container46 />
    </div>
  );
}

function Module2Lesson4Quiz4VariantB() {
  return (
    <div className="absolute bg-white content-stretch flex flex-col h-[231px] items-start left-[250.94px] overflow-clip pt-[10px] px-[10px] rounded-[14.99px] top-[985.5px] w-[186px]" data-name="Module2Lesson4Quiz4VariantB">
      <Container40 />
    </div>
  );
}

export default function Figma() {
  return (
    <div className="relative size-full" data-name="Компоненты в Figma">
      <p className="absolute font-['Inter:Regular',sans-serif] font-normal leading-[27px] left-0 not-italic text-[#101828] text-[18px] top-0 tracking-[-0.4395px] whitespace-nowrap">Урок 4: Основные элементы интерфейса</p>
      <p className="absolute font-['Inter:Regular',sans-serif] font-normal leading-[14px] left-0 not-italic text-[#8e9199] text-[11px] top-[35px] tracking-[-0.14px] whitespace-nowrap">Кнопки, формы, навигация</p>
      <p className="absolute font-['Inter:Regular',sans-serif] font-normal leading-[13px] left-0 not-italic text-[#8e9199] text-[10px] top-[81px] tracking-[-0.13px] whitespace-nowrap">1. Где пользователю легче выполнить действие?</p>
      <Paragraph />
      <Module2Lesson4Quiz1VariantA />
      <Paragraph6 />
      <Module2Lesson4Quiz1VariantB />
      <p className="absolute font-['Inter:Regular',sans-serif] font-normal leading-[13px] left-0 not-italic text-[#8e9199] text-[10px] top-[373px] tracking-[-0.13px] whitespace-nowrap">2. Где форму легче заполнить?</p>
      <Paragraph12 />
      <Module2Lesson4Quiz2VariantA />
      <Paragraph18 />
      <Module2Lesson4Quiz2VariantB />
      <p className="absolute font-['Inter:Regular',sans-serif] font-normal leading-[13px] left-0 not-italic text-[#8e9199] text-[10px] top-[665px] tracking-[-0.13px] whitespace-nowrap">3. Где навигация понятнее?</p>
      <Paragraph27 />
      <Module2Lesson4Quiz3VariantA />
      <Paragraph31 />
      <Module2Lesson4Quiz3VariantB />
      <p className="absolute font-['Inter:Regular',sans-serif] font-normal leading-[13px] left-0 not-italic text-[#8e9199] text-[10px] top-[957px] tracking-[-0.13px] whitespace-nowrap">4. Где информация структурирована лучше?</p>
      <Paragraph41 />
      <Module2Lesson4Quiz4VariantA />
      <Paragraph45 />
      <Module2Lesson4Quiz4VariantB />
    </div>
  );
}

// ─── Module 2 Lesson 4 quiz card exports ─────────────────────────────────────
export function M2L4Q1A() {
  return (
    <div style={{ position: "relative", width: 186, height: 231, overflow: "hidden" }}>
      <div style={{ position: "absolute", left: -16.63, top: -109.5 }}><Module2Lesson4Quiz1VariantA /></div>
    </div>
  );
}
export function M2L4Q1B() {
  return (
    <div style={{ position: "relative", width: 186, height: 231, overflow: "hidden" }}>
      <div style={{ position: "absolute", left: -250.94, top: -109.5 }}><Module2Lesson4Quiz1VariantB /></div>
    </div>
  );
}
export function M2L4Q2A() {
  return (
    <div style={{ position: "relative", width: 186, height: 231, overflow: "hidden" }}>
      <div style={{ position: "absolute", left: -16.63, top: -401.5 }}><Module2Lesson4Quiz2VariantA /></div>
    </div>
  );
}
export function M2L4Q2B() {
  return (
    <div style={{ position: "relative", width: 186, height: 231, overflow: "hidden" }}>
      <div style={{ position: "absolute", left: -250.94, top: -401.5 }}><Module2Lesson4Quiz2VariantB /></div>
    </div>
  );
}
export function M2L4Q3A() {
  return (
    <div style={{ position: "relative", width: 186, height: 231, overflow: "hidden" }}>
      <div style={{ position: "absolute", left: -16.63, top: -693.5 }}><Module2Lesson4Quiz3VariantA /></div>
    </div>
  );
}
export function M2L4Q3B() {
  return (
    <div style={{ position: "relative", width: 186, height: 231, overflow: "hidden" }}>
      <div style={{ position: "absolute", left: -250.94, top: -693.5 }}><Module2Lesson4Quiz3VariantB /></div>
    </div>
  );
}
export function M2L4Q4A() {
  return (
    <div style={{ position: "relative", width: 186, height: 231, overflow: "hidden" }}>
      <div style={{ position: "absolute", left: -16.63, top: -985.5 }}><Module2Lesson4Quiz4VariantA /></div>
    </div>
  );
}
export function M2L4Q4B() {
  return (
    <div style={{ position: "relative", width: 186, height: 231, overflow: "hidden" }}>
      <div style={{ position: "absolute", left: -250.94, top: -985.5 }}><Module2Lesson4Quiz4VariantB /></div>
    </div>
  );
}