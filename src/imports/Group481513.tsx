import imgVector from "figma:asset/fbd1a4de6983385b09d8ab2cc1ccfe34c3361ab2.png";

function Group() {
  return (
    <div className="absolute contents left-0 top-[7.39px]">
      <div className="absolute h-[42.348px] left-0 top-[7.39px] w-[40.039px]">
        <svg className="absolute block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 40.0393 42.3485">
          <ellipse cx="20.0197" cy="21.1742" fill="url(#paint0_linear_321_3817)" id="Ellipse 382" rx="20.0197" ry="21.1742" />
          <defs>
            <linearGradient gradientUnits="userSpaceOnUse" id="paint0_linear_321_3817" x1="21.6076" x2="19.717" y1="4.75801" y2="40.8112">
              <stop stopColor="#435861" />
              <stop offset="1" />
            </linearGradient>
          </defs>
        </svg>
      </div>
      <div className="absolute inset-[25.87%_82.57%_11.01%_2.59%]" data-name="Vector">
        <img alt="" className="absolute block max-w-none size-full" height="31.396" src={imgVector} width="29.684" />
      </div>
    </div>
  );
}

export default function Group1() {
  return (
    <div className="relative size-full">
      <p className="absolute bottom-[1.49%] font-['Roboto_Condensed:Regular',sans-serif] font-normal leading-[0] left-1/4 right-0 text-[#e0e2e8] text-[45.78px] top-0 tracking-[-1.8364px] whitespace-nowrap">
        <span className="leading-[48.422px]">скилл</span>
        <span className="font-['Roboto_Condensed:Italic',sans-serif] italic leading-[48.422px]">ум</span>
      </p>
      <Group />
    </div>
  );
}