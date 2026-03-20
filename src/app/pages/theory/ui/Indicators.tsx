import svgPaths from "../../../../imports/svg-ns2c3tgkyt";

export function GreenIndicator() {
  return (
    <div className="relative shrink-0 size-[18px]">
      <svg className="absolute block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 18 18">
        <g clipPath="url(#clip0_green)">
          <path d={svgPaths.p1bd90280} fill="#5EDD60" />
          <path d={svgPaths.p14c44980} fill="white" />
        </g>
        <defs>
          <clipPath id="clip0_green">
            <rect fill="white" height="18" width="18" />
          </clipPath>
        </defs>
      </svg>
    </div>
  );
}

export function GrayIndicator({ color = "#282F33" }: { color?: string }) {
  return (
    <div className="relative shrink-0 size-[18px]">
      <svg className="absolute block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 18 18">
        <path d={svgPaths.p3896100} fill={color} />
      </svg>
    </div>
  );
}

export function OrangeIndicator() {
  return (
    <div className="relative shrink-0 size-[18px]">
      <svg className="absolute block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 18 18">
        <defs>
          <linearGradient id="orangeGradient" x1="0%" y1="0%" x2="100%" y2="100%">
            <stop offset="0%" style={{ stopColor: "#ff6b21", stopOpacity: 1 }} />
            <stop offset="100%" style={{ stopColor: "#ff8c4a", stopOpacity: 1 }} />
          </linearGradient>
        </defs>
        <circle cx="9" cy="9" r="9" fill="url(#orangeGradient)" />
        <path d="M5.5 5.5L12.5 12.5M12.5 5.5L5.5 12.5" stroke="white" strokeWidth="2" strokeLinecap="round" />
      </svg>
    </div>
  );
}
