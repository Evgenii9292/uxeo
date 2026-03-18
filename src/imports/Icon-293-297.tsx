import svgPaths from "./svg-a79v5msigo";

function EllipseContainer1() {
  return (
    <div className="absolute inset-[0_0_9.8%_0]" data-name="Ellipse Container">
      <svg className="absolute block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 77 74.8628">
        <g id="Ellipse Container">
          <path d={svgPaths.p266db200} fill="var(--fill-0, #394144)" id="Ellipse 1" stroke="var(--stroke-0, #444E52)" strokeWidth="1.3875" />
          <path d={svgPaths.p1cc9cc00} id="Ellipse 326" stroke="url(#paint0_linear_283_1578)" strokeLinecap="round" strokeWidth="2.775" />
        </g>
        <defs>
          <linearGradient gradientUnits="userSpaceOnUse" id="paint0_linear_283_1578" x1="17.9926" x2="17.9926" y1="25.4009" y2="73.3834">
            <stop stopColor="#FF6B21" />
            <stop offset="1" stopColor="#994014" />
          </linearGradient>
        </defs>
      </svg>
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

function IconContainer() {
  return (
    <div className="absolute inset-[24.1%_34.9%_34.11%_35.06%]" data-name="Icon Container">
      <svg className="absolute block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 23.125 34.6869">
        <g id="Icon Container">
          <path d={svgPaths.p3e0e6880} fill="var(--fill-0, #24CB71)" id="Vector" />
          <path d={svgPaths.ped1e00} fill="var(--fill-0, #FF7237)" id="Vector_2" />
          <path d={svgPaths.p1f633100} fill="var(--fill-0, #00B6FF)" id="Vector_3" />
          <path d={svgPaths.p2eb87180} fill="var(--fill-0, #FF3737)" id="Vector_4" />
          <path d={svgPaths.p3b042f00} fill="var(--fill-0, #874FFF)" id="Vector_5" />
        </g>
      </svg>
    </div>
  );
}

export default function Icon() {
  return (
    <div className="relative shadow-[0px_20px_50px_0px_#2d363a] size-full" data-name="Icon">
      <EllipseContainer />
      <IconContainer />
    </div>
  );
}