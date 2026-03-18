function Paragraph() {
  return (
    <div className="absolute h-[16.5px] left-0 top-[60.25px] w-[166px]" data-name="Paragraph">
      <p className="absolute font-['Inter:Regular',sans-serif] font-normal leading-[16.5px] left-0 not-italic text-[#101828] text-[11px] top-[0.5px] tracking-[-0.14px] whitespace-nowrap">Приложение</p>
    </div>
  );
}

function Paragraph1() {
  return (
    <div className="h-[10.5px] relative shrink-0 w-full" data-name="Paragraph">
      <p className="absolute font-['Inter:Regular',sans-serif] font-normal leading-[10.5px] left-0 not-italic text-[#8e9199] text-[7px] top-0 tracking-[-0.09px] whitespace-nowrap">Обычный текст</p>
    </div>
  );
}

function Container1() {
  return (
    <div className="absolute bg-[#f7f8fc] content-stretch flex flex-col h-[26.5px] items-start left-0 pt-[8px] px-[8px] rounded-[8px] top-[86.75px] w-[166px]" data-name="Container">
      <Paragraph1 />
    </div>
  );
}

function Paragraph2() {
  return (
    <div className="h-[13.5px] relative shrink-0 w-full" data-name="Paragraph">
      <p className="-translate-x-1/2 absolute font-['Inter:Regular',sans-serif] font-normal leading-[13.5px] left-[71.41px] not-italic text-[9px] text-center text-white top-[0.5px] tracking-[-0.12px] whitespace-nowrap">Яркая кнопка</p>
    </div>
  );
}

function Container2() {
  return (
    <div className="absolute bg-[#3b82f6] content-stretch flex flex-col h-[29.5px] items-start left-0 pt-[8px] px-[12px] rounded-[6px] top-[121.25px] w-[166px]" data-name="Container">
      <Paragraph2 />
    </div>
  );
}

function Container() {
  return (
    <div className="h-[211px] relative shrink-0 w-full" data-name="Container">
      <Paragraph />
      <Container1 />
      <Container2 />
    </div>
  );
}

export default function ContrastQuiz() {
  return (
    <div className="bg-white content-stretch flex flex-col items-start overflow-clip pt-[10px] px-[10px] relative rounded-[14.99px] size-full" data-name="ContrastQuiz6">
      <Container />
    </div>
  );
}