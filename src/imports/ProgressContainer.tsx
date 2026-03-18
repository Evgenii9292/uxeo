import imgProgressRoot from "figma:asset/26538fa36de431bafc6c08e2a0d9cbdf819c30b9.png";

function ProgressTextContainer() {
  return (
    <div className="content-stretch flex font-['Roboto_Condensed:Medium',sans-serif] font-medium items-start justify-between leading-[20px] relative shrink-0 text-[#343e42] text-[16px] w-full whitespace-nowrap" data-name="Progress Text Container">
      <p className="relative shrink-0">Пройдено</p>
      <p className="relative shrink-0">33%</p>
    </div>
  );
}

function ProgressIndicator() {
  return <div className="h-[17px] rounded-[16777200px] shrink-0 w-[258px]" data-name="Progress.Indicator" style={{ backgroundImage: "linear-gradient(171.634deg, rgb(66, 78, 83) 54.135%, rgb(44, 53, 56) 85.747%)" }} />;
}

function ProgressRoot() {
  return (
    <div className="content-stretch flex flex-col h-[17px] items-start overflow-clip pl-[-111.75px] pr-[111.75px] relative rounded-[16777200px] shrink-0 w-full" data-name="Progress.Root">
      <img alt="" className="absolute inset-0 max-w-none object-cover pointer-events-none rounded-[16777200px] size-full" src={imgProgressRoot} />
      <ProgressIndicator />
    </div>
  );
}

function ProgressBarContainer() {
  return (
    <div className="content-stretch flex flex-col items-center justify-center relative shrink-0 w-full" data-name="Progress Bar Container">
      <ProgressRoot />
    </div>
  );
}

export default function ProgressContainer() {
  return (
    <div className="content-stretch flex flex-col gap-[10px] items-start relative size-full" data-name="Progress Container">
      <ProgressTextContainer />
      <ProgressBarContainer />
    </div>
  );
}