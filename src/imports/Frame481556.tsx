

import imgImageWithFallback from "figma:asset/0e07300a76ea7b63228d47560707240f518689c8.png";
import imgImageWithFallback1 from "figma:asset/99754a735d7b20482c35420dabcac334b6db197e.png";
import imgImageWithFallback2 from "figma:asset/918d55683f79d734b3c99df98180c46ac465fedb.png";

function ImageWithFallback() {
  return (
    <div className="h-[70px] relative shrink-0 w-full" data-name="ImageWithFallback">
      <img alt="" className="absolute inset-0 max-w-none object-cover pointer-events-none size-full" src={imgImageWithFallback} />
    </div>
  );
}

function Container1() {
  return (
    <div className="absolute bg-[#f7f8fc] content-stretch flex flex-col h-[70px] items-start left-0 overflow-clip rounded-[8px] top-0 w-[166px]" data-name="Container">
      <ImageWithFallback />
    </div>
  );
}

function Paragraph() {
  return (
    <div className="absolute content-stretch flex h-[12px] items-start left-0 top-[78px] w-[166px]" data-name="Paragraph">
      <p className="flex-[1_0_0] font-['Inter:Regular',sans-serif] font-normal leading-[12px] min-h-px min-w-px not-italic relative text-[#8e9199] text-[10px] tracking-[-0.13px]">Новая статья</p>
    </div>
  );
}

function Paragraph1() {
  return (
    <div className="absolute h-[39px] left-0 top-[98px] w-[166px]" data-name="Paragraph">
      <p className="absolute font-['Inter:Regular',sans-serif] font-normal leading-[13px] left-0 not-italic text-[#8e9199] text-[10px] top-[0.5px] tracking-[-0.13px] w-[164px]">Узнайте как улучшить ваш дизайн с помощью контраста и визуальной иерархии</p>
    </div>
  );
}

function Paragraph2() {
  return (
    <div className="h-[13.5px] relative shrink-0 w-[62.695px]" data-name="Paragraph">
      <div className="bg-clip-padding border-0 border-[transparent] border-solid relative size-full">
        <p className="absolute font-['Inter:Regular',sans-serif] font-normal leading-[13.5px] left-0 not-italic text-[#8e9199] text-[9px] top-[0.5px] tracking-[-0.12px] whitespace-nowrap">Читать статью</p>
      </div>
    </div>
  );
}

function Container3() {
  return (
    <div className="bg-[#d1d3db] flex-[1_0_0] min-h-px min-w-px relative rounded-[9.031px] w-[166px]" data-name="Container">
      <div className="bg-clip-padding border-0 border-[transparent] border-solid content-stretch flex items-center justify-center pl-[51.648px] pr-[51.656px] relative size-full">
        <Paragraph2 />
      </div>
    </div>
  );
}

function Paragraph3() {
  return (
    <div className="h-[12px] relative shrink-0 w-[166px]" data-name="Paragraph">
      <div className="bg-clip-padding border-0 border-[transparent] border-solid relative size-full">
        <p className="-translate-x-1/2 absolute font-['Inter:Regular',sans-serif] font-normal leading-[12px] left-[82.51px] not-italic text-[#8e9199] text-[8px] text-center top-0 tracking-[-0.1px] whitespace-nowrap">Подробнее</p>
      </div>
    </div>
  );
}

function Container2() {
  return (
    <div className="absolute content-stretch flex flex-col gap-[6px] h-[52px] items-start left-0 top-[159px] w-[166px]" data-name="Container">
      <Container3 />
      <Paragraph3 />
    </div>
  );
}

function Container() {
  return (
    <div className="absolute h-[211px] left-[10px] top-[10px] w-[166px]" data-name="Container">
      <Container1 />
      <Paragraph />
      <Paragraph1 />
      <Container2 />
    </div>
  );
}

function ContrastQuiz1VariantA() {
  return (
    <div className="bg-white col-1 h-[231px] overflow-clip relative rounded-[14.99px] row-1 shrink-0 w-[186px]" data-name="ContrastQuiz1VariantA">
      <Container />
    </div>
  );
}

function ImageWithFallback1() {
  return (
    <div className="h-[70px] relative shrink-0 w-full" data-name="ImageWithFallback">
      <img alt="" className="absolute inset-0 max-w-none object-cover pointer-events-none size-full" src={imgImageWithFallback} />
    </div>
  );
}

function Container5() {
  return (
    <div className="absolute bg-[#f7f8fc] content-stretch flex flex-col h-[70px] items-start left-0 overflow-clip rounded-[8px] top-0 w-[166px]" data-name="Container">
      <ImageWithFallback1 />
    </div>
  );
}

function Paragraph4() {
  return (
    <div className="absolute h-[15px] left-0 top-[78px] w-[166px]" data-name="Paragraph">
      <p className="absolute font-['Inter:Regular',sans-serif] font-normal leading-[15px] left-0 not-italic text-[#101828] text-[13px] top-[0.5px] tracking-[-0.16px] whitespace-nowrap">Новая статья</p>
    </div>
  );
}

function Paragraph5() {
  return (
    <div className="absolute h-[36px] left-0 top-[101px] w-[166px]" data-name="Paragraph">
      <p className="absolute font-['Inter:Regular',sans-serif] font-normal leading-[12px] left-0 not-italic text-[#5e6169] text-[9px] top-[0.5px] tracking-[-0.12px] w-[155px]">Узнайте как улучшить ваш дизайн с помощью контраста и визуальной иерархии</p>
    </div>
  );
}

function Paragraph6() {
  return (
    <div className="h-[15px] relative shrink-0 w-[69.703px]" data-name="Paragraph">
      <div className="bg-clip-padding border-0 border-[transparent] border-solid relative size-full">
        <p className="absolute font-['Inter:Regular',sans-serif] font-normal leading-[15px] left-0 not-italic text-[10px] text-white top-[0.5px] tracking-[-0.13px] whitespace-nowrap">Читать статью</p>
      </div>
    </div>
  );
}

function Container7() {
  return (
    <div className="bg-[#364146] flex-[1_0_0] min-h-px min-w-px relative rounded-[9.031px] w-[166px]" data-name="Container">
      <div className="bg-clip-padding border-0 border-[transparent] border-solid content-stretch flex items-center justify-center px-[48.148px] relative size-full">
        <Paragraph6 />
      </div>
    </div>
  );
}

function Paragraph7() {
  return (
    <div className="h-[12px] relative shrink-0 w-[166px]" data-name="Paragraph">
      <div className="bg-clip-padding border-0 border-[transparent] border-solid relative size-full">
        <p className="-translate-x-1/2 absolute decoration-solid font-['Inter:Regular',sans-serif] font-normal leading-[12px] left-[82.51px] not-italic text-[#364146] text-[8px] text-center top-0 tracking-[-0.1px] underline whitespace-nowrap">Подробнее</p>
      </div>
    </div>
  );
}

function Container6() {
  return (
    <div className="absolute content-stretch flex flex-col gap-[6px] h-[52px] items-start left-0 top-[159px] w-[166px]" data-name="Container">
      <Container7 />
      <Paragraph7 />
    </div>
  );
}

function Container4() {
  return (
    <div className="absolute h-[211px] left-[10px] top-[10px] w-[166px]" data-name="Container">
      <Container5 />
      <Paragraph4 />
      <Paragraph5 />
      <Container6 />
    </div>
  );
}

function ContrastQuiz1VariantB() {
  return (
    <div className="bg-white col-2 h-[231px] overflow-clip relative rounded-[14.99px] row-1 shrink-0 w-[186px]" data-name="ContrastQuiz1VariantB">
      <Container4 />
    </div>
  );
}

function ImageWithFallback2() {
  return (
    <div className="h-[64px] relative shrink-0 w-full" data-name="ImageWithFallback">
      <img alt="" className="absolute inset-0 max-w-none object-cover pointer-events-none size-full" src={imgImageWithFallback1} />
    </div>
  );
}

function Container9() {
  return (
    <div className="absolute bg-[#f7f8fc] content-stretch flex flex-col h-[64px] items-start left-0 overflow-clip rounded-[8px] top-0 w-[166px]" data-name="Container">
      <ImageWithFallback2 />
    </div>
  );
}

function Paragraph8() {
  return (
    <div className="absolute content-stretch flex h-[11px] items-start left-0 top-[70px] w-[166px]" data-name="Paragraph">
      <p className="flex-[1_0_0] font-['Inter:Regular',sans-serif] font-normal leading-[11px] min-h-px min-w-px not-italic relative text-[#101828] text-[9px] tracking-[-0.12px]">Основы типографики в веб-дизайне</p>
    </div>
  );
}

function Paragraph9() {
  return (
    <div className="absolute h-[44px] left-0 top-[87px] w-[166px]" data-name="Paragraph">
      <p className="absolute font-['Inter:Regular',sans-serif] font-normal leading-[11px] left-0 not-italic text-[#5e6169] text-[8px] top-[0.5px] tracking-[-0.1px] w-[165px]">Правильная типографика — это основа читаемого и понятного интерфейса. В этой статье разберем базовые принципы работы со шрифтами.</p>
    </div>
  );
}

function Container11() {
  return <div className="bg-[#f7f8fc] rounded-[16777200px] shrink-0 size-[20px]" data-name="Container" />;
}

function Paragraph10() {
  return (
    <div className="h-[10.5px] relative shrink-0 w-[47px]" data-name="Paragraph">
      <div className="bg-clip-padding border-0 border-[transparent] border-solid relative size-full">
        <p className="absolute font-['Inter:Regular',sans-serif] font-normal leading-[10.5px] left-0 not-italic text-[#8e9199] text-[7px] top-0 tracking-[-0.09px] whitespace-nowrap">Анна Иванова</p>
      </div>
    </div>
  );
}

function Container10() {
  return (
    <div className="absolute content-stretch flex gap-[6px] h-[20px] items-center left-0 top-[139px] w-[166px]" data-name="Container">
      <Container11 />
      <Paragraph10 />
    </div>
  );
}

function Paragraph11() {
  return (
    <div className="h-[12px] relative shrink-0 w-[26.469px]" data-name="Paragraph">
      <div className="bg-clip-padding border-0 border-[transparent] border-solid relative size-full">
        <p className="absolute font-['Inter:Regular',sans-serif] font-normal leading-[12px] left-0 not-italic text-[#5e6169] text-[8px] top-0 tracking-[-0.1px] whitespace-nowrap">Читать</p>
      </div>
    </div>
  );
}

function Container12() {
  return (
    <div className="absolute bg-[#f7f8fc] content-stretch flex h-[28px] items-center justify-center left-0 px-[69.766px] rounded-[9.031px] top-[183px] w-[166px]" data-name="Container">
      <Paragraph11 />
    </div>
  );
}

function Container8() {
  return (
    <div className="absolute h-[211px] left-[10px] top-[10px] w-[166px]" data-name="Container">
      <Container9 />
      <Paragraph8 />
      <Paragraph9 />
      <Container10 />
      <Container12 />
    </div>
  );
}

function ContrastQuiz2VariantA() {
  return (
    <div className="bg-white col-1 h-[231px] overflow-clip relative rounded-[14.99px] row-2 shrink-0 w-[186px]" data-name="ContrastQuiz2VariantA">
      <Container8 />
    </div>
  );
}

function ImageWithFallback3() {
  return (
    <div className="h-[64px] relative shrink-0 w-full" data-name="ImageWithFallback">
      <img alt="" className="absolute inset-0 max-w-none object-cover pointer-events-none size-full" src={imgImageWithFallback1} />
    </div>
  );
}

function Container14() {
  return (
    <div className="absolute bg-[#f7f8fc] content-stretch flex flex-col h-[64px] items-start left-0 overflow-clip rounded-[8px] top-0 w-[166px]" data-name="Container">
      <ImageWithFallback3 />
    </div>
  );
}

function Paragraph12() {
  return (
    <div className="absolute h-[28px] left-0 top-[70px] w-[166px]" data-name="Paragraph">
      <p className="absolute font-['Inter:Regular',sans-serif] font-normal leading-[14px] left-0 not-italic text-[#101828] text-[12px] top-[0.5px] tracking-[-0.15px] w-[162px]">Основы типографики в веб-дизайне</p>
    </div>
  );
}

function Paragraph13() {
  return (
    <div className="absolute h-[33px] left-0 top-[104px] w-[166px]" data-name="Paragraph">
      <p className="absolute font-['Inter:Regular',sans-serif] font-normal leading-[11px] left-0 not-italic text-[#5e6169] text-[8px] top-[0.5px] tracking-[-0.1px] w-[165px]">Правильная типографика — это основа читаемого и понятного интерфейса. В этой статье разберем базовые принципы.</p>
    </div>
  );
}

function Container16() {
  return <div className="bg-[#f7f8fc] rounded-[16777200px] shrink-0 size-[20px]" data-name="Container" />;
}

function Paragraph14() {
  return (
    <div className="h-[10.5px] relative shrink-0 w-[47px]" data-name="Paragraph">
      <div className="bg-clip-padding border-0 border-[transparent] border-solid relative size-full">
        <p className="absolute font-['Inter:Regular',sans-serif] font-normal leading-[10.5px] left-0 not-italic text-[#8e9199] text-[7px] top-0 tracking-[-0.09px] whitespace-nowrap">Анна Иванова</p>
      </div>
    </div>
  );
}

function Container15() {
  return (
    <div className="absolute content-stretch flex gap-[6px] h-[20px] items-center left-0 top-[145px] w-[166px]" data-name="Container">
      <Container16 />
      <Paragraph14 />
    </div>
  );
}

function Paragraph15() {
  return (
    <div className="h-[15px] relative shrink-0 w-[69.703px]" data-name="Paragraph">
      <div className="bg-clip-padding border-0 border-[transparent] border-solid relative size-full">
        <p className="absolute font-['Inter:Regular',sans-serif] font-normal leading-[15px] left-0 not-italic text-[10px] text-white top-[0.5px] tracking-[-0.13px] whitespace-nowrap">Читать статью</p>
      </div>
    </div>
  );
}

function Container17() {
  return (
    <div className="absolute bg-[#364146] content-stretch flex h-[34px] items-center justify-center left-0 px-[48.148px] rounded-[9.031px] top-[177px] w-[166px]" data-name="Container">
      <Paragraph15 />
    </div>
  );
}

function Container13() {
  return (
    <div className="absolute h-[211px] left-[10px] top-[10px] w-[166px]" data-name="Container">
      <Container14 />
      <Paragraph12 />
      <Paragraph13 />
      <Container15 />
      <Container17 />
    </div>
  );
}

function ContrastQuiz2VariantB() {
  return (
    <div className="bg-white col-2 h-[231px] overflow-clip relative rounded-[14.99px] row-2 shrink-0 w-[186px]" data-name="ContrastQuiz2VariantB">
      <Container13 />
    </div>
  );
}

function Paragraph16() {
  return (
    <div className="h-[11px] relative shrink-0 w-[166px]" data-name="Paragraph">
      <div className="bg-clip-padding border-0 border-[transparent] border-solid content-stretch flex items-start relative size-full">
        <p className="flex-[1_0_0] font-['Inter:Regular',sans-serif] font-normal leading-[11px] min-h-px min-w-px not-italic relative text-[#101828] text-[9px] tracking-[-0.12px]">Настройки профиля</p>
      </div>
    </div>
  );
}

function Paragraph17() {
  return (
    <div className="content-stretch flex h-[10px] items-start relative shrink-0 w-full" data-name="Paragraph">
      <p className="flex-[1_0_0] font-['Inter:Regular',sans-serif] font-normal leading-[10px] min-h-px min-w-px not-italic relative text-[#101828] text-[8px] tracking-[-0.1px]">Личные данные</p>
    </div>
  );
}

function Paragraph18() {
  return (
    <div className="content-stretch flex h-[10px] items-start relative shrink-0 w-full" data-name="Paragraph">
      <p className="flex-[1_0_0] font-['Inter:Regular',sans-serif] font-normal leading-[10px] min-h-px min-w-px not-italic relative text-[#101828] text-[8px] tracking-[-0.1px]">Ваше имя, email и аватар</p>
    </div>
  );
}

function Container20() {
  return (
    <div className="bg-[#f7f8fc] h-[44px] relative rounded-[9.031px] shrink-0 w-[166px]" data-name="Container">
      <div className="bg-clip-padding border-0 border-[transparent] border-solid content-stretch flex flex-col gap-[4px] items-start pt-[10px] px-[10px] relative size-full">
        <Paragraph17 />
        <Paragraph18 />
      </div>
    </div>
  );
}

function Paragraph19() {
  return (
    <div className="content-stretch flex h-[10px] items-start relative shrink-0 w-full" data-name="Paragraph">
      <p className="flex-[1_0_0] font-['Inter:Regular',sans-serif] font-normal leading-[10px] min-h-px min-w-px not-italic relative text-[#101828] text-[8px] tracking-[-0.1px]">Безопасность</p>
    </div>
  );
}

function Paragraph20() {
  return (
    <div className="h-[20px] relative shrink-0 w-full" data-name="Paragraph">
      <p className="absolute font-['Inter:Regular',sans-serif] font-normal leading-[10px] left-0 not-italic text-[#101828] text-[8px] top-0 tracking-[-0.1px] w-[96px]">Пароль и двухфакторная аутентификация</p>
    </div>
  );
}

function Container21() {
  return (
    <div className="bg-[#f7f8fc] flex-[1_0_0] min-h-px min-w-px relative rounded-[9.031px] w-[166px]" data-name="Container">
      <div className="bg-clip-padding border-0 border-[transparent] border-solid content-stretch flex flex-col gap-[4px] items-start pt-[10px] px-[10px] relative size-full">
        <Paragraph19 />
        <Paragraph20 />
      </div>
    </div>
  );
}

function Paragraph21() {
  return (
    <div className="content-stretch flex h-[10px] items-start relative shrink-0 w-full" data-name="Paragraph">
      <p className="flex-[1_0_0] font-['Inter:Regular',sans-serif] font-normal leading-[10px] min-h-px min-w-px not-italic relative text-[#101828] text-[8px] tracking-[-0.1px]">Уведомления</p>
    </div>
  );
}

function Paragraph22() {
  return (
    <div className="content-stretch flex h-[10px] items-start relative shrink-0 w-full" data-name="Paragraph">
      <p className="font-['Inter:Regular',sans-serif] font-normal leading-[10px] not-italic relative shrink-0 text-[#101828] text-[8px] tracking-[-0.1px] whitespace-nowrap">Настройки push и email уведомлений</p>
    </div>
  );
}

function Container22() {
  return (
    <div className="bg-[#f7f8fc] h-[44px] relative rounded-[9.031px] shrink-0 w-[166px]" data-name="Container">
      <div className="bg-clip-padding border-0 border-[transparent] border-solid content-stretch flex flex-col gap-[4px] items-start pt-[10px] px-[10px] relative size-full">
        <Paragraph21 />
        <Paragraph22 />
      </div>
    </div>
  );
}

function Paragraph23() {
  return (
    <div className="content-stretch flex h-[10px] items-start relative shrink-0 w-full" data-name="Paragraph">
      <p className="flex-[1_0_0] font-['Inter:Regular',sans-serif] font-normal leading-[10px] min-h-px min-w-px not-italic relative text-[#101828] text-[8px] tracking-[-0.1px]">Подписка</p>
    </div>
  );
}

function Paragraph24() {
  return (
    <div className="content-stretch flex h-[10px] items-start relative shrink-0 w-full" data-name="Paragraph">
      <p className="flex-[1_0_0] font-['Inter:Regular',sans-serif] font-normal leading-[10px] min-h-px min-w-px not-italic relative text-[#101828] text-[8px] tracking-[-0.1px]">Управление подпиской и тарифом</p>
    </div>
  );
}

function Container23() {
  return (
    <div className="bg-[#f7f8fc] h-[44px] relative rounded-[9.031px] shrink-0 w-[166px]" data-name="Container">
      <div className="bg-clip-padding border-0 border-[transparent] border-solid content-stretch flex flex-col gap-[4px] items-start pt-[10px] px-[10px] relative size-full">
        <Paragraph23 />
        <Paragraph24 />
      </div>
    </div>
  );
}

function Container19() {
  return (
    <div className="h-[210px] relative shrink-0 w-[166px]" data-name="Container">
      <div className="bg-clip-padding border-0 border-[transparent] border-solid content-stretch flex flex-col gap-[8px] items-start relative size-full">
        <Container20 />
        <Container21 />
        <Container22 />
        <Container23 />
      </div>
    </div>
  );
}

function Container18() {
  return (
    <div className="absolute content-stretch flex flex-col gap-[8px] h-[211px] items-start left-[10px] top-[10px] w-[166px]" data-name="Container">
      <Paragraph16 />
      <Container19 />
    </div>
  );
}

function ContrastQuiz3VariantA() {
  return (
    <div className="bg-white col-1 h-[231px] overflow-clip relative rounded-[14.99px] row-3 shrink-0 w-[186px]" data-name="ContrastQuiz3VariantA">
      <Container18 />
    </div>
  );
}

function Paragraph25() {
  return (
    <div className="h-[15px] relative shrink-0 w-[166px]" data-name="Paragraph">
      <div className="bg-clip-padding border-0 border-[transparent] border-solid relative size-full">
        <p className="absolute font-['Inter:Regular',sans-serif] font-normal leading-[15px] left-0 not-italic text-[#101828] text-[13px] top-[0.5px] tracking-[-0.16px] whitespace-nowrap">Настройки профиля</p>
      </div>
    </div>
  );
}

function Paragraph26() {
  return (
    <div className="content-stretch flex h-[12px] items-start relative shrink-0 w-full" data-name="Paragraph">
      <p className="flex-[1_0_0] font-['Inter:Regular',sans-serif] font-normal leading-[12px] min-h-px min-w-px not-italic relative text-[#101828] text-[10px] tracking-[-0.13px]">Личные данные</p>
    </div>
  );
}

function Paragraph27() {
  return (
    <div className="content-stretch flex h-[9px] items-start relative shrink-0 w-full" data-name="Paragraph">
      <p className="flex-[1_0_0] font-['Inter:Regular',sans-serif] font-normal leading-[9px] min-h-px min-w-px not-italic relative text-[#8e9199] text-[7px] tracking-[-0.09px]">Ваше имя, email и аватар</p>
    </div>
  );
}

function Container26() {
  return (
    <div className="bg-[#f7f8fc] h-[44px] relative rounded-[9.031px] shrink-0 w-[166px]" data-name="Container">
      <div className="bg-clip-padding border-0 border-[transparent] border-solid content-stretch flex flex-col gap-[3px] items-start pt-[10px] px-[10px] relative size-full">
        <Paragraph26 />
        <Paragraph27 />
      </div>
    </div>
  );
}

function Paragraph28() {
  return (
    <div className="content-stretch flex h-[12px] items-start relative shrink-0 w-full" data-name="Paragraph">
      <p className="flex-[1_0_0] font-['Inter:Regular',sans-serif] font-normal leading-[12px] min-h-px min-w-px not-italic relative text-[#101828] text-[10px] tracking-[-0.13px]">Безопасность</p>
    </div>
  );
}

function Paragraph29() {
  return (
    <div className="content-stretch flex h-[9px] items-start relative shrink-0 w-full" data-name="Paragraph">
      <p className="font-['Inter:Regular',sans-serif] font-normal leading-[9px] not-italic relative shrink-0 text-[#8e9199] text-[7px] tracking-[-0.09px] whitespace-nowrap">Пароль и двухфакторная аутентификация</p>
    </div>
  );
}

function Container27() {
  return (
    <div className="bg-[#f7f8fc] h-[44px] relative rounded-[9.031px] shrink-0 w-[166px]" data-name="Container">
      <div className="bg-clip-padding border-0 border-[transparent] border-solid content-stretch flex flex-col gap-[3px] items-start pt-[10px] px-[10px] relative size-full">
        <Paragraph28 />
        <Paragraph29 />
      </div>
    </div>
  );
}

function Paragraph30() {
  return (
    <div className="content-stretch flex h-[12px] items-start relative shrink-0 w-full" data-name="Paragraph">
      <p className="flex-[1_0_0] font-['Inter:Regular',sans-serif] font-normal leading-[12px] min-h-px min-w-px not-italic relative text-[#101828] text-[10px] tracking-[-0.13px]">Уведомления</p>
    </div>
  );
}

function Paragraph31() {
  return (
    <div className="content-stretch flex h-[9px] items-start relative shrink-0 w-full" data-name="Paragraph">
      <p className="flex-[1_0_0] font-['Inter:Regular',sans-serif] font-normal leading-[9px] min-h-px min-w-px not-italic relative text-[#8e9199] text-[7px] tracking-[-0.09px]">Настройки push и email уведомлений</p>
    </div>
  );
}

function Container28() {
  return (
    <div className="bg-[#f7f8fc] h-[44px] relative rounded-[9.031px] shrink-0 w-[166px]" data-name="Container">
      <div className="bg-clip-padding border-0 border-[transparent] border-solid content-stretch flex flex-col gap-[3px] items-start pt-[10px] px-[10px] relative size-full">
        <Paragraph30 />
        <Paragraph31 />
      </div>
    </div>
  );
}

function Paragraph32() {
  return (
    <div className="content-stretch flex h-[12px] items-start relative shrink-0 w-full" data-name="Paragraph">
      <p className="flex-[1_0_0] font-['Inter:Regular',sans-serif] font-normal leading-[12px] min-h-px min-w-px not-italic relative text-[#101828] text-[10px] tracking-[-0.13px]">Подписка</p>
    </div>
  );
}

function Paragraph33() {
  return (
    <div className="content-stretch flex h-[9px] items-start relative shrink-0 w-full" data-name="Paragraph">
      <p className="flex-[1_0_0] font-['Inter:Regular',sans-serif] font-normal leading-[9px] min-h-px min-w-px not-italic relative text-[#8e9199] text-[7px] tracking-[-0.09px]">Управление подпиской и тарифом</p>
    </div>
  );
}

function Container29() {
  return (
    <div className="bg-[#f7f8fc] flex-[1_0_0] min-h-px min-w-px relative rounded-[9.031px] w-[166px]" data-name="Container">
      <div className="bg-clip-padding border-0 border-[transparent] border-solid content-stretch flex flex-col gap-[3px] items-start pt-[10px] px-[10px] relative size-full">
        <Paragraph32 />
        <Paragraph33 />
      </div>
    </div>
  );
}

function Container25() {
  return (
    <div className="h-[200px] relative shrink-0 w-[166px]" data-name="Container">
      <div className="bg-clip-padding border-0 border-[transparent] border-solid content-stretch flex flex-col gap-[8px] items-start relative size-full">
        <Container26 />
        <Container27 />
        <Container28 />
        <Container29 />
      </div>
    </div>
  );
}

function Container24() {
  return (
    <div className="absolute content-stretch flex flex-col gap-[8px] h-[211px] items-start left-[10px] top-[10px] w-[166px]" data-name="Container">
      <Paragraph25 />
      <Container25 />
    </div>
  );
}

function ContrastQuiz3VariantB() {
  return (
    <div className="bg-white col-2 h-[231px] overflow-clip relative rounded-[14.99px] row-3 shrink-0 w-[186px]" data-name="ContrastQuiz3VariantB">
      <Container24 />
    </div>
  );
}

function ImageWithFallback4() {
  return (
    <div className="h-[70px] relative shrink-0 w-full" data-name="ImageWithFallback">
      <img alt="" className="absolute inset-0 max-w-none object-cover pointer-events-none size-full" src={imgImageWithFallback2} />
    </div>
  );
}

function Container31() {
  return (
    <div className="absolute bg-[#f7f8fc] content-stretch flex flex-col h-[70px] items-start left-0 overflow-clip rounded-[8px] top-0 w-[166px]" data-name="Container">
      <ImageWithFallback4 />
    </div>
  );
}

function Paragraph34() {
  return (
    <div className="absolute content-stretch flex h-[13px] items-start left-0 top-[78px] w-[166px]" data-name="Paragraph">
      <p className="flex-[1_0_0] font-['Inter:Regular',sans-serif] font-normal leading-[13px] min-h-px min-w-px not-italic relative text-[#101828] text-[11px] tracking-[-0.14px]">Nike Air Max 2024</p>
    </div>
  );
}

function Paragraph35() {
  return (
    <div className="absolute h-[33px] left-0 top-[99px] w-[166px]" data-name="Paragraph">
      <p className="absolute font-['Inter:Regular',sans-serif] font-normal leading-[11px] left-0 not-italic text-[#5e6169] text-[8px] top-[0.5px] tracking-[-0.1px] w-[142px]">Беговые кроссовки с технологией амортизации Air для максимального комфорта</p>
    </div>
  );
}

function Paragraph36() {
  return (
    <div className="h-[18px] relative shrink-0 w-[49.227px]" data-name="Paragraph">
      <div className="bg-clip-padding border-0 border-[transparent] border-solid relative size-full">
        <p className="absolute font-['Inter:Regular',sans-serif] font-normal leading-[18px] left-0 not-italic text-[#101828] text-[12px] top-[0.5px] tracking-[-0.15px] whitespace-nowrap">12 990 ₽</p>
      </div>
    </div>
  );
}

function Paragraph37() {
  return (
    <div className="h-[12px] relative shrink-0 w-[32.844px]" data-name="Paragraph">
      <div className="bg-clip-padding border-0 border-[transparent] border-solid relative size-full">
        <p className="[text-decoration-skip-ink:none] absolute decoration-solid font-['Inter:Regular',sans-serif] font-normal leading-[12px] left-0 line-through not-italic text-[#8e9199] text-[8px] top-0 tracking-[-0.1px] whitespace-nowrap">15 990 ₽</p>
      </div>
    </div>
  );
}

function Container32() {
  return (
    <div className="absolute content-stretch flex gap-[6px] h-[18px] items-center left-0 top-[142px] w-[166px]" data-name="Container">
      <Paragraph36 />
      <Paragraph37 />
    </div>
  );
}

function Paragraph38() {
  return (
    <div className="h-[13.5px] relative shrink-0 w-[85.672px]" data-name="Paragraph">
      <div className="bg-clip-padding border-0 border-[transparent] border-solid relative size-full">
        <p className="absolute font-['Inter:Regular',sans-serif] font-normal leading-[13.5px] left-0 not-italic text-[#8e9199] text-[9px] top-[0.5px] tracking-[-0.12px] whitespace-nowrap">Добавить в корзину</p>
      </div>
    </div>
  );
}

function Container33() {
  return (
    <div className="absolute bg-[#d1d3db] content-stretch flex h-[34px] items-center justify-center left-0 px-[40.164px] rounded-[9.031px] top-[177px] w-[166px]" data-name="Container">
      <Paragraph38 />
    </div>
  );
}

function Container30() {
  return (
    <div className="absolute h-[211px] left-[10px] top-[10px] w-[166px]" data-name="Container">
      <Container31 />
      <Paragraph34 />
      <Paragraph35 />
      <Container32 />
      <Container33 />
    </div>
  );
}

function ContrastQuiz4VariantA() {
  return (
    <div className="bg-white col-1 h-[231px] overflow-clip relative rounded-[14.99px] row-4 shrink-0 w-[186px]" data-name="ContrastQuiz4VariantA">
      <Container30 />
    </div>
  );
}

function ImageWithFallback5() {
  return (
    <div className="h-[70px] relative shrink-0 w-full" data-name="ImageWithFallback">
      <img alt="" className="absolute inset-0 max-w-none object-cover pointer-events-none size-full" src={imgImageWithFallback2} />
    </div>
  );
}

function Container35() {
  return (
    <div className="absolute bg-[#f7f8fc] content-stretch flex flex-col h-[70px] items-start left-0 overflow-clip rounded-[8px] top-0 w-[166px]" data-name="Container">
      <ImageWithFallback5 />
    </div>
  );
}

function Paragraph39() {
  return (
    <div className="absolute content-stretch flex h-[13px] items-start left-0 top-[78px] w-[166px]" data-name="Paragraph">
      <p className="flex-[1_0_0] font-['Inter:Regular',sans-serif] font-normal leading-[13px] min-h-px min-w-px not-italic relative text-[#101828] text-[11px] tracking-[-0.14px]">Nike Air Max 2024</p>
    </div>
  );
}

function Paragraph40() {
  return (
    <div className="absolute h-[33px] left-0 top-[99px] w-[166px]" data-name="Paragraph">
      <p className="absolute font-['Inter:Regular',sans-serif] font-normal leading-[11px] left-0 not-italic text-[#5e6169] text-[8px] top-[0.5px] tracking-[-0.1px] w-[142px]">Беговые кроссовки с технологией амортизации Air для максимального комфорта</p>
    </div>
  );
}

function Paragraph41() {
  return (
    <div className="h-[18px] relative shrink-0 w-[49.227px]" data-name="Paragraph">
      <div className="bg-clip-padding border-0 border-[transparent] border-solid relative size-full">
        <p className="absolute font-['Inter:Regular',sans-serif] font-normal leading-[18px] left-0 not-italic text-[#101828] text-[12px] top-[0.5px] tracking-[-0.15px] whitespace-nowrap">12 990 ₽</p>
      </div>
    </div>
  );
}

function Paragraph42() {
  return (
    <div className="h-[12px] relative shrink-0 w-[32.844px]" data-name="Paragraph">
      <div className="bg-clip-padding border-0 border-[transparent] border-solid relative size-full">
        <p className="[text-decoration-skip-ink:none] absolute decoration-solid font-['Inter:Regular',sans-serif] font-normal leading-[12px] left-0 line-through not-italic text-[#8e9199] text-[8px] top-0 tracking-[-0.1px] whitespace-nowrap">15 990 ₽</p>
      </div>
    </div>
  );
}

function Container36() {
  return (
    <div className="absolute content-stretch flex gap-[6px] h-[18px] items-center left-0 top-[142px] w-[166px]" data-name="Container">
      <Paragraph41 />
      <Paragraph42 />
    </div>
  );
}

function Paragraph43() {
  return (
    <div className="h-[15px] relative shrink-0 w-[95.25px]" data-name="Paragraph">
      <div className="bg-clip-padding border-0 border-[transparent] border-solid relative size-full">
        <p className="absolute font-['Inter:Regular',sans-serif] font-normal leading-[15px] left-0 not-italic text-[10px] text-white top-[0.5px] tracking-[-0.13px] whitespace-nowrap">Добавить в корзину</p>
      </div>
    </div>
  );
}

function Container37() {
  return (
    <div className="absolute bg-[#364146] content-stretch flex h-[34px] items-center justify-center left-0 px-[35.375px] rounded-[9.031px] top-[177px] w-[166px]" data-name="Container">
      <Paragraph43 />
    </div>
  );
}

function Container34() {
  return (
    <div className="absolute h-[211px] left-[10px] top-[10px] w-[166px]" data-name="Container">
      <Container35 />
      <Paragraph39 />
      <Paragraph40 />
      <Container36 />
      <Container37 />
    </div>
  );
}

function ContrastQuiz4VariantB() {
  return (
    <div className="bg-white col-2 h-[231px] overflow-clip relative rounded-[14.99px] row-4 shrink-0 w-[186px]" data-name="ContrastQuiz4VariantB">
      <Container34 />
    </div>
  );
}

function Paragraph44() {
  return (
    <div className="absolute h-[15px] left-0 top-0 w-[166px]" data-name="Paragraph">
      <p className="absolute font-['Inter:Regular',sans-serif] font-normal leading-[15px] left-0 not-italic text-[#101828] text-[13px] top-[0.5px] tracking-[-0.16px] whitespace-nowrap">Панель управления</p>
    </div>
  );
}

function Container41() {
  return <div className="bg-[#d1d3db] rounded-[6px] shrink-0 size-[32px]" data-name="Container" />;
}

function Paragraph45() {
  return (
    <div className="flex-[1_0_0] h-[11px] min-h-px min-w-px relative" data-name="Paragraph">
      <div className="bg-clip-padding border-0 border-[transparent] border-solid content-stretch flex items-start relative size-full">
        <p className="flex-[1_0_0] font-['Inter:Regular',sans-serif] font-normal leading-[11px] min-h-px min-w-px not-italic relative text-[#101828] text-[9px] tracking-[-0.12px]">Главная</p>
      </div>
    </div>
  );
}

function Container40() {
  return (
    <div className="bg-[#f7f8fc] h-[52px] relative rounded-[9.031px] shrink-0 w-[166px]" data-name="Container">
      <div className="bg-clip-padding border-0 border-[transparent] border-solid content-stretch flex gap-[8px] items-center px-[10px] relative size-full">
        <Container41 />
        <Paragraph45 />
      </div>
    </div>
  );
}

function Container43() {
  return <div className="bg-[#d1d3db] rounded-[6px] shrink-0 size-[32px]" data-name="Container" />;
}

function Paragraph46() {
  return (
    <div className="flex-[1_0_0] h-[11px] min-h-px min-w-px relative" data-name="Paragraph">
      <div className="bg-clip-padding border-0 border-[transparent] border-solid content-stretch flex items-start relative size-full">
        <p className="flex-[1_0_0] font-['Inter:Regular',sans-serif] font-normal leading-[11px] min-h-px min-w-px not-italic relative text-[#101828] text-[9px] tracking-[-0.12px]">Статистика</p>
      </div>
    </div>
  );
}

function Container42() {
  return (
    <div className="bg-[#f7f8fc] h-[52px] relative rounded-[9.031px] shrink-0 w-[166px]" data-name="Container">
      <div className="bg-clip-padding border-0 border-[transparent] border-solid content-stretch flex gap-[8px] items-center px-[10px] relative size-full">
        <Container43 />
        <Paragraph46 />
      </div>
    </div>
  );
}

function Container45() {
  return <div className="bg-[#d1d3db] rounded-[6px] shrink-0 size-[32px]" data-name="Container" />;
}

function Paragraph47() {
  return (
    <div className="flex-[1_0_0] h-[11px] min-h-px min-w-px relative" data-name="Paragraph">
      <div className="bg-clip-padding border-0 border-[transparent] border-solid content-stretch flex items-start relative size-full">
        <p className="flex-[1_0_0] font-['Inter:Regular',sans-serif] font-normal leading-[11px] min-h-px min-w-px not-italic relative text-[#101828] text-[9px] tracking-[-0.12px]">Настройки</p>
      </div>
    </div>
  );
}

function Container44() {
  return (
    <div className="bg-[#f7f8fc] h-[52px] relative rounded-[9.031px] shrink-0 w-[166px]" data-name="Container">
      <div className="bg-clip-padding border-0 border-[transparent] border-solid content-stretch flex gap-[8px] items-center px-[10px] relative size-full">
        <Container45 />
        <Paragraph47 />
      </div>
    </div>
  );
}

function Container47() {
  return <div className="bg-[#d1d3db] rounded-[6px] shrink-0 size-[32px]" data-name="Container" />;
}

function Paragraph48() {
  return (
    <div className="flex-[1_0_0] h-[11px] min-h-px min-w-px relative" data-name="Paragraph">
      <div className="bg-clip-padding border-0 border-[transparent] border-solid content-stretch flex items-start relative size-full">
        <p className="flex-[1_0_0] font-['Inter:Regular',sans-serif] font-normal leading-[11px] min-h-px min-w-px not-italic relative text-[#101828] text-[9px] tracking-[-0.12px]">Помощь</p>
      </div>
    </div>
  );
}

function Container46() {
  return (
    <div className="bg-[#f7f8fc] flex-[1_0_0] min-h-px min-w-px relative rounded-[9.031px] w-[166px]" data-name="Container">
      <div className="bg-clip-padding border-0 border-[transparent] border-solid content-stretch flex gap-[8px] items-center px-[10px] relative size-full">
        <Container47 />
        <Paragraph48 />
      </div>
    </div>
  );
}

function Container39() {
  return (
    <div className="absolute content-stretch flex flex-col gap-[6px] h-[226px] items-start left-0 top-[25px] w-[166px]" data-name="Container">
      <Container40 />
      <Container42 />
      <Container44 />
      <Container46 />
    </div>
  );
}

function Paragraph49() {
  return (
    <div className="h-[13.5px] relative shrink-0 w-[68.289px]" data-name="Paragraph">
      <div className="bg-clip-padding border-0 border-[transparent] border-solid relative size-full">
        <p className="absolute font-['Inter:Regular',sans-serif] font-normal leading-[13.5px] left-0 not-italic text-[9px] text-white top-[0.5px] tracking-[-0.12px] whitespace-nowrap">Создать проект</p>
      </div>
    </div>
  );
}

function Container48() {
  return (
    <div className="absolute bg-[#364146] content-stretch flex h-[13.5px] items-center justify-center left-0 pl-[48.852px] pr-[48.859px] rounded-[9.031px] top-[259px] w-[166px]" data-name="Container">
      <Paragraph49 />
    </div>
  );
}

function Container38() {
  return (
    <div className="absolute h-[211px] left-[10px] top-[10px] w-[166px]" data-name="Container">
      <Paragraph44 />
      <Container39 />
      <Container48 />
    </div>
  );
}

function ContrastQuiz5VariantA() {
  return (
    <div className="bg-white col-1 h-[231px] overflow-clip relative rounded-[14.99px] row-5 shrink-0 w-[186px]" data-name="ContrastQuiz5VariantA">
      <Container38 />
    </div>
  );
}

function Paragraph50() {
  return (
    <div className="absolute h-[15px] left-0 top-0 w-[166px]" data-name="Paragraph">
      <p className="absolute font-['Inter:Regular',sans-serif] font-normal leading-[15px] left-0 not-italic text-[#101828] text-[13px] top-[0.5px] tracking-[-0.16px] whitespace-nowrap">Панель управления</p>
    </div>
  );
}

function Container52() {
  return <div className="bg-white rounded-[6px] shrink-0 size-[32px]" data-name="Container" />;
}

function Paragraph51() {
  return (
    <div className="flex-[1_0_0] h-[12px] min-h-px min-w-px relative" data-name="Paragraph">
      <div className="bg-clip-padding border-0 border-[transparent] border-solid content-stretch flex items-start relative size-full">
        <p className="flex-[1_0_0] font-['Inter:Regular',sans-serif] font-normal leading-[12px] min-h-px min-w-px not-italic relative text-[10px] text-white tracking-[-0.13px]">Главная</p>
      </div>
    </div>
  );
}

function Container51() {
  return (
    <div className="bg-[#364146] h-[52px] relative rounded-[9.031px] shrink-0 w-[166px]" data-name="Container">
      <div className="bg-clip-padding border-0 border-[transparent] border-solid content-stretch flex gap-[8px] items-center px-[10px] relative size-full">
        <Container52 />
        <Paragraph51 />
      </div>
    </div>
  );
}

function Container54() {
  return (
    <div className="relative rounded-[6px] shrink-0 size-[32px]" data-name="Container">
      <div aria-hidden="true" className="absolute border-2 border-[#d1d3db] border-solid inset-0 pointer-events-none rounded-[6px]" />
    </div>
  );
}

function Paragraph52() {
  return (
    <div className="flex-[1_0_0] h-[11px] min-h-px min-w-px relative" data-name="Paragraph">
      <div className="bg-clip-padding border-0 border-[transparent] border-solid content-stretch flex items-start relative size-full">
        <p className="flex-[1_0_0] font-['Inter:Regular',sans-serif] font-normal leading-[11px] min-h-px min-w-px not-italic relative text-[#5e6169] text-[9px] tracking-[-0.12px]">Статистика</p>
      </div>
    </div>
  );
}

function Container53() {
  return (
    <div className="bg-[#f7f8fc] h-[52px] relative rounded-[9.031px] shrink-0 w-[166px]" data-name="Container">
      <div className="bg-clip-padding border-0 border-[transparent] border-solid content-stretch flex gap-[8px] items-center px-[10px] relative size-full">
        <Container54 />
        <Paragraph52 />
      </div>
    </div>
  );
}

function Container56() {
  return (
    <div className="relative rounded-[6px] shrink-0 size-[32px]" data-name="Container">
      <div aria-hidden="true" className="absolute border-2 border-[#d1d3db] border-solid inset-0 pointer-events-none rounded-[6px]" />
    </div>
  );
}

function Paragraph53() {
  return (
    <div className="flex-[1_0_0] h-[11px] min-h-px min-w-px relative" data-name="Paragraph">
      <div className="bg-clip-padding border-0 border-[transparent] border-solid content-stretch flex items-start relative size-full">
        <p className="flex-[1_0_0] font-['Inter:Regular',sans-serif] font-normal leading-[11px] min-h-px min-w-px not-italic relative text-[#5e6169] text-[9px] tracking-[-0.12px]">Настройки</p>
      </div>
    </div>
  );
}

function Container55() {
  return (
    <div className="bg-[#f7f8fc] h-[52px] relative rounded-[9.031px] shrink-0 w-[166px]" data-name="Container">
      <div className="bg-clip-padding border-0 border-[transparent] border-solid content-stretch flex gap-[8px] items-center px-[10px] relative size-full">
        <Container56 />
        <Paragraph53 />
      </div>
    </div>
  );
}

function Container58() {
  return (
    <div className="relative rounded-[6px] shrink-0 size-[32px]" data-name="Container">
      <div aria-hidden="true" className="absolute border-2 border-[#d1d3db] border-solid inset-0 pointer-events-none rounded-[6px]" />
    </div>
  );
}

function Paragraph54() {
  return (
    <div className="flex-[1_0_0] h-[11px] min-h-px min-w-px relative" data-name="Paragraph">
      <div className="bg-clip-padding border-0 border-[transparent] border-solid content-stretch flex items-start relative size-full">
        <p className="flex-[1_0_0] font-['Inter:Regular',sans-serif] font-normal leading-[11px] min-h-px min-w-px not-italic relative text-[#5e6169] text-[9px] tracking-[-0.12px]">Помощь</p>
      </div>
    </div>
  );
}

function Container57() {
  return (
    <div className="bg-[#f7f8fc] flex-[1_0_0] min-h-px min-w-px relative rounded-[9.031px] w-[166px]" data-name="Container">
      <div className="bg-clip-padding border-0 border-[transparent] border-solid content-stretch flex gap-[8px] items-center px-[10px] relative size-full">
        <Container58 />
        <Paragraph54 />
      </div>
    </div>
  );
}

function Container50() {
  return (
    <div className="absolute content-stretch flex flex-col gap-[6px] h-[226px] items-start left-0 top-[25px] w-[166px]" data-name="Container">
      <Container51 />
      <Container53 />
      <Container55 />
      <Container57 />
    </div>
  );
}

function Paragraph55() {
  return (
    <div className="h-[15px] relative shrink-0 w-[75.922px]" data-name="Paragraph">
      <div className="bg-clip-padding border-0 border-[transparent] border-solid relative size-full">
        <p className="absolute font-['Inter:Regular',sans-serif] font-normal leading-[15px] left-0 not-italic text-[10px] text-white top-[0.5px] tracking-[-0.13px] whitespace-nowrap">Создать проект</p>
      </div>
    </div>
  );
}

function Container59() {
  return (
    <div className="absolute bg-[#364146] content-stretch flex h-[15px] items-center justify-center left-0 px-[45.039px] rounded-[9.031px] top-[259px] w-[166px]" data-name="Container">
      <Paragraph55 />
    </div>
  );
}

function Container49() {
  return (
    <div className="absolute h-[211px] left-[10px] top-[10px] w-[166px]" data-name="Container">
      <Paragraph50 />
      <Container50 />
      <Container59 />
    </div>
  );
}

function ContrastQuiz5VariantB() {
  return (
    <div className="bg-white col-2 h-[231px] overflow-clip relative rounded-[14.99px] row-5 shrink-0 w-[186px]" data-name="ContrastQuiz5VariantB">
      <Container49 />
    </div>
  );
}

function Paragraph56() {
  return (
    <div className="h-[15px] relative shrink-0 w-[166px]" data-name="Paragraph">
      <div className="bg-clip-padding border-0 border-[transparent] border-solid relative size-full">
        <p className="absolute font-['Inter:Regular',sans-serif] font-normal leading-[15px] left-0 not-italic text-[#101828] text-[13px] top-[0.5px] tracking-[-0.16px] whitespace-nowrap">Действия с файлом</p>
      </div>
    </div>
  );
}

function Paragraph57() {
  return (
    <div className="h-[15px] relative shrink-0 w-[51.219px]" data-name="Paragraph">
      <div className="bg-clip-padding border-0 border-[transparent] border-solid relative size-full">
        <p className="absolute font-['Inter:Regular',sans-serif] font-normal leading-[15px] left-0 not-italic text-[10px] text-white top-[0.5px] tracking-[-0.13px] whitespace-nowrap">Сохранить</p>
      </div>
    </div>
  );
}

function Container62() {
  return (
    <div className="bg-[#22c55e] h-[34px] relative rounded-[9.031px] shrink-0 w-[166px]" data-name="Container">
      <div className="bg-clip-padding border-0 border-[transparent] border-solid content-stretch flex items-center justify-center px-[57.391px] relative size-full">
        <Paragraph57 />
      </div>
    </div>
  );
}

function Paragraph58() {
  return (
    <div className="h-[15px] relative shrink-0 w-[39.211px]" data-name="Paragraph">
      <div className="bg-clip-padding border-0 border-[transparent] border-solid relative size-full">
        <p className="absolute font-['Inter:Regular',sans-serif] font-normal leading-[15px] left-0 not-italic text-[10px] text-white top-[0.5px] tracking-[-0.13px] whitespace-nowrap">Скачать</p>
      </div>
    </div>
  );
}

function Container63() {
  return (
    <div className="bg-[#3b82f6] h-[34px] relative rounded-[9.031px] shrink-0 w-[166px]" data-name="Container">
      <div className="bg-clip-padding border-0 border-[transparent] border-solid content-stretch flex items-center justify-center pl-[63.391px] pr-[63.398px] relative size-full">
        <Paragraph58 />
      </div>
    </div>
  );
}

function Paragraph59() {
  return (
    <div className="h-[15px] relative shrink-0 w-[57.453px]" data-name="Paragraph">
      <div className="bg-clip-padding border-0 border-[transparent] border-solid relative size-full">
        <p className="absolute font-['Inter:Regular',sans-serif] font-normal leading-[15px] left-0 not-italic text-[10px] text-white top-[0.5px] tracking-[-0.13px] whitespace-nowrap">Поделиться</p>
      </div>
    </div>
  );
}

function Container64() {
  return (
    <div className="bg-[#a855f7] h-[34px] relative rounded-[9.031px] shrink-0 w-[166px]" data-name="Container">
      <div className="bg-clip-padding border-0 border-[transparent] border-solid content-stretch flex items-center justify-center px-[54.273px] relative size-full">
        <Paragraph59 />
      </div>
    </div>
  );
}

function Paragraph60() {
  return (
    <div className="h-[15px] relative shrink-0 w-[76.055px]" data-name="Paragraph">
      <div className="bg-clip-padding border-0 border-[transparent] border-solid relative size-full">
        <p className="absolute font-['Inter:Regular',sans-serif] font-normal leading-[15px] left-0 not-italic text-[10px] text-white top-[0.5px] tracking-[-0.13px] whitespace-nowrap">Переименовать</p>
      </div>
    </div>
  );
}

function Container65() {
  return (
    <div className="bg-[#f59e0b] h-[34px] relative rounded-[9.031px] shrink-0 w-[166px]" data-name="Container">
      <div className="bg-clip-padding border-0 border-[transparent] border-solid content-stretch flex items-center justify-center pl-[44.969px] pr-[44.977px] relative size-full">
        <Paragraph60 />
      </div>
    </div>
  );
}

function Paragraph61() {
  return (
    <div className="h-[15px] relative shrink-0 w-[39.523px]" data-name="Paragraph">
      <div className="bg-clip-padding border-0 border-[transparent] border-solid relative size-full">
        <p className="absolute font-['Inter:Regular',sans-serif] font-normal leading-[15px] left-0 not-italic text-[10px] text-white top-[0.5px] tracking-[-0.13px] whitespace-nowrap">Удалить</p>
      </div>
    </div>
  );
}

function Container66() {
  return (
    <div className="bg-[#ef4444] flex-[1_0_0] min-h-px min-w-px relative rounded-[9.031px] w-[166px]" data-name="Container">
      <div className="bg-clip-padding border-0 border-[transparent] border-solid content-stretch flex items-center justify-center pl-[63.234px] pr-[63.242px] relative size-full">
        <Paragraph61 />
      </div>
    </div>
  );
}

function Container61() {
  return (
    <div className="h-[194px] relative shrink-0 w-[166px]" data-name="Container">
      <div className="bg-clip-padding border-0 border-[transparent] border-solid content-stretch flex flex-col gap-[6px] items-start relative size-full">
        <Container62 />
        <Container63 />
        <Container64 />
        <Container65 />
        <Container66 />
      </div>
    </div>
  );
}

function Container60() {
  return (
    <div className="absolute content-stretch flex flex-col gap-[10px] h-[211px] items-start left-[10px] top-[10px] w-[166px]" data-name="Container">
      <Paragraph56 />
      <Container61 />
    </div>
  );
}

function ContrastQuiz6VariantA() {
  return (
    <div className="bg-white col-1 h-[231px] overflow-clip relative rounded-[14.99px] row-6 shrink-0 w-[186px]" data-name="ContrastQuiz6VariantA">
      <Container60 />
    </div>
  );
}

function Paragraph62() {
  return (
    <div className="h-[15px] relative shrink-0 w-[166px]" data-name="Paragraph">
      <div className="bg-clip-padding border-0 border-[transparent] border-solid relative size-full">
        <p className="absolute font-['Inter:Regular',sans-serif] font-normal leading-[15px] left-0 not-italic text-[#101828] text-[13px] top-[0.5px] tracking-[-0.16px] whitespace-nowrap">Действия с файлом</p>
      </div>
    </div>
  );
}

function Paragraph63() {
  return (
    <div className="h-[15px] relative shrink-0 w-[51.219px]" data-name="Paragraph">
      <div className="bg-clip-padding border-0 border-[transparent] border-solid relative size-full">
        <p className="absolute font-['Inter:Regular',sans-serif] font-normal leading-[15px] left-0 not-italic text-[10px] text-white top-[0.5px] tracking-[-0.13px] whitespace-nowrap">Сохранить</p>
      </div>
    </div>
  );
}

function Container69() {
  return (
    <div className="bg-[#364146] h-[34px] relative rounded-[9.031px] shrink-0 w-[166px]" data-name="Container">
      <div className="bg-clip-padding border-0 border-[transparent] border-solid content-stretch flex items-center justify-center px-[57.391px] relative size-full">
        <Paragraph63 />
      </div>
    </div>
  );
}

function Paragraph64() {
  return (
    <div className="h-[13.5px] relative shrink-0 w-[35.266px]" data-name="Paragraph">
      <div className="bg-clip-padding border-0 border-[transparent] border-solid relative size-full">
        <p className="absolute font-['Inter:Regular',sans-serif] font-normal leading-[13.5px] left-0 not-italic text-[#5e6169] text-[9px] top-[0.5px] tracking-[-0.12px] whitespace-nowrap">Скачать</p>
      </div>
    </div>
  );
}

function Container70() {
  return (
    <div className="bg-[#f7f8fc] h-[34px] relative rounded-[9.031px] shrink-0 w-[166px]" data-name="Container">
      <div className="bg-clip-padding border-0 border-[transparent] border-solid content-stretch flex items-center justify-center px-[65.367px] relative size-full">
        <Paragraph64 />
      </div>
    </div>
  );
}

function Paragraph65() {
  return (
    <div className="h-[13.5px] relative shrink-0 w-[51.68px]" data-name="Paragraph">
      <div className="bg-clip-padding border-0 border-[transparent] border-solid relative size-full">
        <p className="absolute font-['Inter:Regular',sans-serif] font-normal leading-[13.5px] left-0 not-italic text-[#5e6169] text-[9px] top-[0.5px] tracking-[-0.12px] whitespace-nowrap">Поделиться</p>
      </div>
    </div>
  );
}

function Container71() {
  return (
    <div className="bg-[#f7f8fc] h-[34px] relative rounded-[9.031px] shrink-0 w-[166px]" data-name="Container">
      <div className="bg-clip-padding border-0 border-[transparent] border-solid content-stretch flex items-center justify-center pl-[57.156px] pr-[57.164px] relative size-full">
        <Paragraph65 />
      </div>
    </div>
  );
}

function Paragraph66() {
  return (
    <div className="h-[13.5px] relative shrink-0 w-[68.414px]" data-name="Paragraph">
      <div className="bg-clip-padding border-0 border-[transparent] border-solid relative size-full">
        <p className="absolute font-['Inter:Regular',sans-serif] font-normal leading-[13.5px] left-0 not-italic text-[#5e6169] text-[9px] top-[0.5px] tracking-[-0.12px] whitespace-nowrap">Переименовать</p>
      </div>
    </div>
  );
}

function Container72() {
  return (
    <div className="bg-[#f7f8fc] h-[34px] relative rounded-[9.031px] shrink-0 w-[166px]" data-name="Container">
      <div className="bg-clip-padding border-0 border-[transparent] border-solid content-stretch flex items-center justify-center pl-[48.789px] pr-[48.797px] relative size-full">
        <Paragraph66 />
      </div>
    </div>
  );
}

function Paragraph67() {
  return (
    <div className="h-[13.5px] relative shrink-0 w-[35.547px]" data-name="Paragraph">
      <div className="bg-clip-padding border-0 border-[transparent] border-solid relative size-full">
        <p className="absolute font-['Inter:Regular',sans-serif] font-normal leading-[13.5px] left-0 not-italic text-[#8e9199] text-[9px] top-[0.5px] tracking-[-0.12px] whitespace-nowrap">Удалить</p>
      </div>
    </div>
  );
}

function Container73() {
  return (
    <div className="bg-[#f7f8fc] flex-[1_0_0] min-h-px min-w-px relative rounded-[9.031px] w-[166px]" data-name="Container">
      <div className="bg-clip-padding border-0 border-[transparent] border-solid content-stretch flex items-center justify-center px-[65.227px] relative size-full">
        <Paragraph67 />
      </div>
    </div>
  );
}

function Container68() {
  return (
    <div className="h-[194px] relative shrink-0 w-[166px]" data-name="Container">
      <div className="bg-clip-padding border-0 border-[transparent] border-solid content-stretch flex flex-col gap-[6px] items-start relative size-full">
        <Container69 />
        <Container70 />
        <Container71 />
        <Container72 />
        <Container73 />
      </div>
    </div>
  );
}

function Container67() {
  return (
    <div className="absolute content-stretch flex flex-col gap-[10px] h-[211px] items-start left-[10px] top-[10px] w-[166px]" data-name="Container">
      <Paragraph62 />
      <Container68 />
    </div>
  );
}

function ContrastQuiz6VariantB() {
  return (
    <div className="bg-white col-2 h-[231px] overflow-clip relative rounded-[14.99px] row-6 shrink-0 w-[186px]" data-name="ContrastQuiz6VariantB">
      <Container67 />
    </div>
  );
}

export {
  ContrastQuiz1VariantA as HierarchyQuiz1VariantA,
  ContrastQuiz1VariantB as HierarchyQuiz1VariantB,
  ContrastQuiz2VariantA as HierarchyQuiz2VariantA,
  ContrastQuiz2VariantB as HierarchyQuiz2VariantB,
  ContrastQuiz3VariantA as HierarchyQuiz3VariantA,
  ContrastQuiz3VariantB as HierarchyQuiz3VariantB,
  ContrastQuiz4VariantA as HierarchyQuiz4VariantA,
  ContrastQuiz4VariantB as HierarchyQuiz4VariantB,
  ContrastQuiz5VariantA as HierarchyQuiz5VariantA,
  ContrastQuiz5VariantB as HierarchyQuiz5VariantB,
  ContrastQuiz6VariantA as HierarchyQuiz6VariantA,
  ContrastQuiz6VariantB as HierarchyQuiz6VariantB,
};

export default function Frame() {
  return (
    <div className="gap-x-[32px] gap-y-[64px] grid grid-cols-[repeat(2,fit-content(100%))] grid-rows-[repeat(6,fit-content(100%))] relative size-full">
      <ContrastQuiz1VariantA />
      <ContrastQuiz1VariantB />
      <ContrastQuiz2VariantA />
      <ContrastQuiz2VariantB />
      <ContrastQuiz3VariantA />
      <ContrastQuiz3VariantB />
      <ContrastQuiz4VariantA />
      <ContrastQuiz4VariantB />
      <ContrastQuiz5VariantA />
      <ContrastQuiz5VariantB />
      <ContrastQuiz6VariantA />
      <ContrastQuiz6VariantB />
    </div>
  );
}