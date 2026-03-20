/**
 * TheoryShared - Shared UI components for theory pages
 */

import imgImageColor from "figma:asset/848cc9d9d2ee375b005fbdca2522ab616019dc08.png";
import { GreenIndicator, GrayIndicator } from "../ui/Indicators";
import { ChevronIcon } from "../ui/Icons";

export function HeroImage() {
  return (
    <div className="bg-[#282F33] h-full min-h-[217px] relative rounded-[15px] shrink-0 w-full">
      <div className="absolute inset-0 flex items-center justify-center">
        <div className="-rotate-90 flex-none">
          <div className="h-[182px] relative w-[130px]">
            <div className="absolute inset-0 overflow-hidden pointer-events-none">
              <img
                alt=""
                className="absolute h-[100.81%] left-[-5.82%] max-w-none top-[-0.4%] w-[111.64%]"
                src={imgImageColor}
              />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export function ContentDivider() {
  return (
    <div className="h-0 relative shrink-0 w-full opacity-50">
      <div className="absolute inset-[-0.5px_-0.1%]">
        <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 493 1">
          <path d="M0.5 0.5H492.5" stroke="#5B6E77" strokeLinecap="round" />
        </svg>
      </div>
    </div>
  );
}

interface AccordionHeaderProps {
  title: string;
  isOpen: boolean;
  showGreenIndicator?: boolean;
  onClick: () => void;
}

export function AccordionHeader({ title, isOpen, showGreenIndicator, onClick }: AccordionHeaderProps) {
  return (
    <div
      className="bg-[#374348] h-[120px] relative rounded-[15px] shrink-0 w-full cursor-pointer flex items-center"
      onClick={onClick}
    >
      <div className="content-stretch flex items-center justify-between px-[30px] relative w-full">
        <div className="content-stretch flex gap-[20px] items-center relative shrink-0">
          {showGreenIndicator ? <GreenIndicator /> : <GrayIndicator />}
          <p
            className="font-['Roboto_Condensed:Bold',sans-serif] font-medium leading-[27.5px] relative shrink-0 text-[26px] whitespace-nowrap"
            style={{ color: isOpen ? "#f1f2fb" : "#798589" }}
          >
            {title}
          </p>
        </div>
        <ChevronIcon isOpen={isOpen} />
      </div>
    </div>
  );
}
