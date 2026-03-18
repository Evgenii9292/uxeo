import svgPaths from "./svg-2nel3uo0hr";

function Group1() {
  return (
    <div className="absolute inset-[68.75%_44.84%_0_23.91%]" data-name="Group">
      <svg className="absolute block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 6.25 6.25">
        <g id="Group">
          <path d={svgPaths.p2ba58980} fill="var(--fill-0, #FFD845)" id="Vector" />
        </g>
      </svg>
    </div>
  );
}

function Group2() {
  return (
    <div className="absolute inset-[68.75%_44.84%_0_39.53%]" data-name="Group">
      <svg className="absolute block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 3.125 6.25">
        <g id="Group">
          <path d={svgPaths.p26e5800} fill="var(--fill-0, #FF9D21)" id="Vector" />
        </g>
      </svg>
    </div>
  );
}

function Group3() {
  return (
    <div className="absolute inset-[0_20.04%_12.7%_-0.9%]" data-name="Group">
      <svg className="absolute block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 16.1719 17.4609">
        <g id="Group">
          <path d={svgPaths.p444ce00} fill="url(#paint0_linear_134_730)" id="Vector" />
        </g>
        <defs>
          <linearGradient gradientUnits="userSpaceOnUse" id="paint0_linear_134_730" x1="8.08594" x2="8.08594" y1="0" y2="17.4609">
            <stop stopColor="#FFB121" />
          </linearGradient>
        </defs>
      </svg>
    </div>
  );
}

function Group4() {
  return (
    <div className="absolute inset-[0_20.04%_12.7%_39.53%]" data-name="Group">
      <svg className="absolute block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 8.08594 17.4609">
        <g id="Group">
          <path d={svgPaths.p1ca20b00} fill="var(--fill-0, #FFD845)" id="Vector" />
        </g>
      </svg>
    </div>
  );
}

function Group() {
  return (
    <div className="absolute contents inset-[0_20.04%_0_-0.9%]" data-name="Group">
      <Group1 />
      <Group2 />
      <Group3 />
      <Group4 />
    </div>
  );
}

export default function IconNotification() {
  return (
    <div className="relative size-full" data-name="Icon/notification">
      <Group />
      <div className="absolute inset-[-5.82%_-5%_40.82%_40%]">
        <svg className="absolute block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 13 13">
          <circle cx="6.5" cy="6.5" fill="var(--fill-0, #FF3B0A)" id="Ellipse 362" r="5.75" stroke="var(--stroke-0, #3D494F)" strokeWidth="1.5" />
        </svg>
      </div>
    </div>
  );
}