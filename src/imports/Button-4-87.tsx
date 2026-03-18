import svgPaths from "./svg-k2mjc249px";

function Icon() {
  return (
    <div className="h-[41px] relative shrink-0 w-[28px]" data-name="icon">
      <svg className="absolute block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 28 41">
        <g id="Ð¡Ð½Ð¸Ð¼Ð¾Ðº ÑÐºÑÐ°Ð½Ð° 2026-03-04 Ð² 19.16.29 1 [Vectorized]">
          <path d={svgPaths.p1c93cf00} fill="var(--fill-0, #F7F8FC)" id="Vector" />
        </g>
      </svg>
    </div>
  );
}

export default function Button() {
  return (
    <div className="bg-[#343e42] content-stretch flex gap-[8px] items-center justify-center px-[17px] py-px relative rounded-[24px] size-full" data-name="Button">
      <div aria-hidden="true" className="absolute border border-[#57646a] border-solid inset-0 pointer-events-none rounded-[24px] shadow-[0px_5px_0px_0px_black]" />
      <Icon />
      <p className="font-['Roboto_Condensed:Bold',sans-serif] font-bold leading-[27.5px] relative shrink-0 text-[#f4f5fc] text-[26px] whitespace-nowrap">Начать</p>
    </div>
  );
}