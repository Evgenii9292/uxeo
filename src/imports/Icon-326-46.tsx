import svgPaths from "./svg-a9vtd94e0e";

function EllipseContainer1() {
  return (
    <div className="absolute inset-[0_0_9.8%_0]" data-name="Ellipse Container">
      <div className="absolute inset-[-123.03%_-112.41%_-135.99%_-112.41%]">
        <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 288.964 277.214">
          <g id="Ellipse Container">
            <g filter="url(#filter0_dd_323_146)" id="Ellipse 1">
              <ellipse cx="144.482" cy="133.607" fill="var(--fill-0, #FF6B21)" rx="44.482" ry="38.607" />
            </g>
          </g>
          <defs>
            <filter colorInterpolationFilters="sRGB" filterUnits="userSpaceOnUse" height="277.214" id="filter0_dd_323_146" width="288.964" x="0" y="0">
              <feFlood floodOpacity="0" result="BackgroundImageFix" />
              <feColorMatrix in="SourceAlpha" result="hardAlpha" type="matrix" values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 127 0" />
              <feOffset dy="7" />
              <feComposite in2="hardAlpha" operator="out" />
              <feColorMatrix type="matrix" values="0 0 0 0 0.504676 0 0 0 0 0.203786 0 0 0 0 0.0533413 0 0 0 1 0" />
              <feBlend in2="BackgroundImageFix" mode="normal" result="effect1_dropShadow_323_146" />
              <feColorMatrix in="SourceAlpha" result="hardAlpha" type="matrix" values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 127 0" />
              <feOffset dy="5" />
              <feGaussianBlur stdDeviation="50" />
              <feComposite in2="hardAlpha" operator="out" />
              <feColorMatrix type="matrix" values="0 0 0 0 0.929412 0 0 0 0 0.576471 0 0 0 0 0.513726 0 0 0 0.5 0" />
              <feBlend in2="effect1_dropShadow_323_146" mode="normal" result="effect2_dropShadow_323_146" />
              <feBlend in="SourceGraphic" in2="effect2_dropShadow_323_146" mode="normal" result="shape" />
            </filter>
          </defs>
        </svg>
      </div>
    </div>
  );
}

function EllipseContainer() {
  return (
    <div className="absolute contents inset-[0_0_9.8%_0]" data-name="Ellipse Container">
      <EllipseContainer1 />
    </div>
  );
}

function Component202603041916291Vectorized() {
  return (
    <div className="absolute inset-[16.19%_23.73%_24.24%_22.32%]" data-name="Снимок экрана 2026-03-04 в 19.16.29 1 [Vectorized]">
      <svg className="absolute block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 48 51">
        <g id="Ð¡Ð½Ð¸Ð¼Ð¾Ðº ÑÐºÑÐ°Ð½Ð° 2026-03-04 Ð² 19.16.29 1 [Vectorized]">
          <path d={svgPaths.p307f1380} fill="var(--fill-0, #EFF1FB)" id="Vector" />
        </g>
      </svg>
    </div>
  );
}

export default function Icon() {
  return (
    <div className="relative size-full" data-name="Icon">
      <EllipseContainer />
      <Component202603041916291Vectorized />
    </div>
  );
}