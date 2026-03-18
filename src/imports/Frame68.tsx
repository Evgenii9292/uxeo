import svgPaths from "./svg-vhrurcibhe";

export default function Frame() {
  return (
    <div className="content-stretch flex gap-[5px] items-center justify-center relative size-full">
      <div className="relative shrink-0 size-[14px]" data-name="Icon/Cube">
        <div className="absolute inset-[34.44%_32.72%_0_0]" data-name="Vector">
          <svg className="absolute block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 9.41954 9.17748">
            <path d={svgPaths.p21a3e380} fill="var(--fill-0, #232A2D)" id="Vector" />
          </svg>
        </div>
        <div className="absolute inset-[0_0_22.96%_21.06%]" data-name="Vector">
          <svg className="absolute block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 11.0523 10.7856">
            <path d={svgPaths.p2d337500} fill="var(--fill-0, #232A2D)" id="Vector" />
          </svg>
        </div>
      </div>
      <p className="font-['Roboto_Condensed:Medium',sans-serif] font-medium leading-[20px] relative shrink-0 text-[#232a2d] text-[16px] whitespace-nowrap">Квизы</p>
    </div>
  );
}