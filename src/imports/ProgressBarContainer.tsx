import imgProgressRoot from "figma:asset/a1d523f018c959ced344d5cf7020c7ccabfebe3b.png";

function ProgressIndicator() {
  return <div className="h-[17px] rounded-[16777200px] shrink-0 w-[258px]" data-name="Progress.Indicator" style={{ backgroundImage: "linear-gradient(171.634deg, rgb(66, 78, 83) 54.135%, rgb(27, 33, 35) 85.747%)" }} />;
}

function ProgressRoot() {
  return (
    <div className="content-stretch flex flex-col h-[17px] items-start overflow-clip pl-[-111.75px] pr-[111.75px] relative rounded-[16777200px] shrink-0 w-full" data-name="Progress.Root">
      <img alt="" className="absolute inset-0 max-w-none object-cover pointer-events-none rounded-[16777200px] size-full" src={imgProgressRoot} />
      <ProgressIndicator />
    </div>
  );
}

export default function ProgressBarContainer() {
  return (
    <div className="content-stretch flex flex-col items-center justify-center relative size-full" data-name="Progress Bar Container">
      <ProgressRoot />
    </div>
  );
}