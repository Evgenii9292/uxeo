import svgPaths from "./svg-aea8d6zq4g";

function Xmlid() {
  return (
    <div className="absolute inset-[0.02%_0_0.01%_0]" data-name="XMLID_103_">
      <svg className="absolute block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 19.0001 18.9956">
        <g id="XMLID_103_">
          <path d={svgPaths.p19febe00} fill="var(--fill-0, #F4F5FC)" id="XMLID_104_" />
          <path d={svgPaths.p1c506830} fill="var(--fill-0, #F4F5FC)" id="XMLID_105_" />
          <path d={svgPaths.p1f263800} fill="var(--fill-0, #F4F5FC)" id="XMLID_106_" />
        </g>
      </svg>
    </div>
  );
}

function FreeIconLink() {
  return (
    <div className="overflow-clip relative shrink-0 size-[19px]" data-name="free-icon-link-154613 1">
      <Xmlid />
    </div>
  );
}

function Container() {
  return (
    <div className="content-stretch flex gap-[10px] items-center relative shrink-0" data-name="Container">
      <FreeIconLink />
      <p className="bg-clip-text bg-gradient-to-r font-['Roboto_Condensed:Regular',sans-serif] font-normal from-[#f4f5fc] from-[68.98%] leading-[20px] relative shrink-0 text-[18px] text-[transparent] to-[86.117%] to-[rgba(145,146,150,0)] w-[461px]">{`https://www.flaticon.com/ru/search?word=времяicoыщоыщоы`}</p>
    </div>
  );
}

function Layer() {
  return (
    <div className="absolute inset-[10%_0_10%_20%]" data-name="Layer 1">
      <svg className="absolute block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 16 16">
        <g id="Layer 1">
          <path d={svgPaths.p2c4b1e00} fill="var(--fill-0, #93999E)" fillOpacity="0.6" id="i" />
        </g>
      </svg>
    </div>
  );
}

function Layer1() {
  return (
    <div className="absolute contents inset-[10%_0_10%_20%]" data-name="Layer 2">
      <Layer />
    </div>
  );
}

function FreeIconLetterI() {
  return (
    <div className="overflow-clip relative shrink-0 size-[20px]" data-name="free-icon-letter-i-5379123 1">
      <Layer1 />
    </div>
  );
}

export default function Typing() {
  return (
    <div className="content-stretch flex items-center justify-between px-[27px] py-[26px] relative rounded-[24px] size-full" data-name="Typing" style={{ backgroundImage: "linear-gradient(171.89deg, rgb(44, 53, 56) 2.4187%, rgb(56, 67, 72) 98.527%, rgb(44, 53, 56) 116.25%)" }}>
      <div aria-hidden="true" className="absolute border-3 border-[rgba(160,163,173,0.4)] border-solid inset-[-3px] pointer-events-none rounded-[27px]" />
      <Container />
      <FreeIconLetterI />
      <div className="absolute inset-[-3px] pointer-events-none rounded-[inherit] shadow-[inset_-4px_0px_4px_0px_#384348]" />
    </div>
  );
}