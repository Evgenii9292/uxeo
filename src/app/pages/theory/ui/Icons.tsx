import { useId } from "react";
import svgPaths from "../../../../imports/svg-ns2c3tgkyt";
import svgMfoan from "../../../../imports/svg-mfoan0qzpw";
import fistSvgPaths from "../../../../imports/svg-vn4p4wooh3";
import cardSvgPaths from "../../../../imports/svg-zgvftbh6wb";

export function TimeIcon() {
  return (
    <div className="overflow-clip relative shrink-0 size-[14px]">
      <div className="absolute inset-[0_11.67%_0_11.66%]">
        <svg className="absolute block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 10.7333 14">
          <path d={svgPaths.p11af9000} fill="#F1F2FB" />
        </svg>
      </div>
    </div>
  );
}

export function FaceIcon() {
  return (
    <div className="overflow-clip relative shrink-0 size-[14px]">
      <div className="absolute bottom-[37.5%] left-[27.08%] right-[60.42%] top-1/2">
        <svg className="absolute block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 1.75 1.75">
          <path d={svgPaths.p1388cf00} fill="#F1F2FB" />
        </svg>
      </div>
      <div className="absolute inset-[2.08%_0_4.17%_0]">
        <svg className="absolute block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 14 13.125">
          <path d={svgPaths.pf7fd000} fill="#F1F2FB" />
        </svg>
      </div>
      <div className="absolute bottom-[37.5%] left-[60.42%] right-[27.08%] top-1/2">
        <svg className="absolute block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 1.75 1.75">
          <path d={svgPaths.p1388cf00} fill="#F1F2FB" />
        </svg>
      </div>
      <div className="absolute inset-[70.84%_36.46%_18.76%_36.46%]">
        <svg className="absolute block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 3.79188 1.45548">
          <path d={svgPaths.p1eb2aec0} fill="#F1F2FB" />
        </svg>
      </div>
    </div>
  );
}

export function TheoryLevelIcon() {
  const uid = useId().replace(/:/g, "");
  const maskId = `lv-${uid}`;
  return (
    <div className="h-[15px] overflow-clip relative shrink-0 w-[17px]">
      <div className="absolute inset-[22.57%_5.88%_15.9%_5.88%]">
        <svg className="absolute block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 14.9997 9.23063">
          <defs>
            <mask id={maskId}>
              <rect x="0" y="0" width="5.1" height="9.3" fill="white" />
              <rect x="5" y="0" width="10" height="9.3" fill="white" fillOpacity="0.6" />
            </mask>
          </defs>
          <g mask={`url(#${maskId})`}>
            <path d={svgMfoan.p1f3ddd00} fill="#61737A" />
            <path d={svgMfoan.p1dcc7b80} fill="#F1F2FB" />
            <path d={svgMfoan.p36483400} fill="#61737A" />
          </g>
        </svg>
      </div>
    </div>
  );
}

export function PartyPopperIcon() {
  return (
    <div className="relative shrink-0 size-[27px]">
      <svg className="absolute block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 27 27">
        <g clipPath="url(#clip0_party)">
          <path d={svgPaths.p14a46100} fill="#FDC70E" />
          <path d={svgPaths.p38dcaa00} fill="#D39518" />
          <path d={svgPaths.p3dec4c80} fill="#3B84ED" />
          <path d={svgPaths.pab31500} fill="#D3374E" />
          <path d={svgPaths.p3172380} fill="#3B84ED" />
          <path d={svgPaths.p257e4500} fill="#00D043" />
          <path d={svgPaths.p2fc207f0} fill="#D3374E" />
          <path d={svgPaths.p16182480} fill="#00D043" />
          <path d={svgPaths.p107f6b80} fill="#3B84ED" />
          <path d={svgPaths.p79c5f30} fill="#00D043" />
          <path d={svgPaths.p1814b580} fill="#D3374E" />
          <path d={svgPaths.p1e054500} fill="#D3374E" />
          <path d={svgPaths.p3986f200} fill="#FDC70E" />
          <path d={svgPaths.p2f1fb8c0} fill="#D3374E" />
          <path d={svgPaths.p2ed6e280} fill="#D3374E" />
        </g>
        <defs>
          <clipPath id="clip0_party">
            <rect fill="white" height="27" width="27" />
          </clipPath>
        </defs>
      </svg>
    </div>
  );
}

export function SparkleIcon() {
  return (
    <div className="h-[16px] relative shrink-0 w-[14px]">
      <svg className="absolute block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 14 16">
        <path d={svgPaths.p3fb52a80} fill="#00D043" />
      </svg>
    </div>
  );
}

export function FistIcon() {
  return (
    <div className="relative shrink-0 size-[27px]">
      <svg className="absolute block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 30 30">
        <g clipPath="url(#clip0_fist)" id="free-icon-fist-1527451">
          <path d={fistSvgPaths.p19bd180} fill="#FFD0A6" />
          <path d={fistSvgPaths.p26c4d200} fill="#FFD0A6" />
          <g>
            <path d={fistSvgPaths.p383de300} fill="#E8B182" />
            <path d={fistSvgPaths.p37ee6b00} fill="#E8B182" />
            <path d={fistSvgPaths.p25952ea0} fill="#E8B182" />
            <path d={fistSvgPaths.p23ec7b80} fill="#E8B182" />
          </g>
          <path d={fistSvgPaths.p129b200} fill="#FFD0A6" />
          <path d={fistSvgPaths.p16c28b80} fill="#E8B182" />
          <path d={fistSvgPaths.p2bfd4ef0} fill="#FFD0A6" />
          <path d={fistSvgPaths.p5a36c00} fill="#E8B182" />
          <path d={fistSvgPaths.p35c8be00} fill="#FFD0A6" />
          <path d={fistSvgPaths.p3fe9380} fill="#E8B182" />
          <path d={fistSvgPaths.p2adc680} fill="#E8B182" />
          <path d={fistSvgPaths.p85b6e00} fill="#FFD0A6" />
          <path d={fistSvgPaths.p233cbd00} fill="#E8B182" />
          <path d={fistSvgPaths.p34d72200} fill="#E8B182" />
        </g>
        <defs>
          <clipPath id="clip0_fist">
            <rect fill="white" height="30" width="30" />
          </clipPath>
        </defs>
      </svg>
    </div>
  );
}

export function RedCardIcon() {
  return (
    <div className="overflow-clip relative shrink-0 size-[23px]">
      <div className="absolute inset-[0_3.7%_0_3.71%]">
        <svg className="absolute block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 21.2949 22.9998">
          <g>
            <path clipRule="evenodd" d={cardSvgPaths.p836e200} fill="#00D043" fillRule="evenodd" />
            <path clipRule="evenodd" d={cardSvgPaths.p2bd75400} fill="#FF6B21" fillRule="evenodd" />
          </g>
        </svg>
      </div>
      <p className="absolute font-['Roboto_Condensed:Bold',sans-serif] font-semibold inset-[20%_47.25%_32.17%_26.67%] leading-[1.2] text-[#f1f2fb] text-[9.2px] whitespace-nowrap">А</p>
    </div>
  );
}

export function ChevronIcon({ isOpen, isLocked = false }: { isOpen: boolean; isLocked?: boolean }) {
  const arrowColor = isLocked ? "#4a5560" : "#798589";
  return (
    <div className="flex h-[8px] items-center justify-center relative shrink-0 w-[16px]">
      <div
        className="flex-none"
        style={{ transition: "transform 300ms ease", transform: isOpen ? "rotate(90deg)" : "rotate(-90deg)" }}
      >
        <div className="h-[16px] relative w-[8px]">
          <div className="absolute inset-[-5%_-10%_-5%_-1.72%]">
            <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 11.1716 22">
              <path d={svgPaths.p23f95480} stroke={arrowColor} strokeLinecap="round" strokeWidth="3" />
            </svg>
          </div>
        </div>
      </div>
    </div>
  );
}
