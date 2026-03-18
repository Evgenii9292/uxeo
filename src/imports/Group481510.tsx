import svgPaths from "./svg-t4mb9bjltx";

function IconContainer1() {
  return (
    <div className="absolute contents inset-0" data-name="Icon Container">
      <div className="absolute bottom-0 left-0 right-1/2 top-[66.67%]" data-name="Vector">
        <svg className="absolute block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 11.5702 10.7293">
          <path d={svgPaths.p1c81afa0} fill="var(--fill-0, #24CB71)" id="Vector" />
        </svg>
      </div>
      <div className="absolute bottom-[66.67%] left-1/2 right-0 top-0" data-name="Vector_2">
        <svg className="absolute block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 11.5703 10.7293">
          <path d={svgPaths.p17619cf0} fill="var(--fill-0, #FF7237)" id="Vector_2" />
        </svg>
      </div>
      <div className="absolute inset-[33.34%_0.22%_33.33%_49.78%]" data-name="Vector_3">
        <svg className="absolute block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 11.5702 10.7293">
          <path d={svgPaths.p339c470} fill="var(--fill-0, #00B6FF)" id="Vector_3" />
        </svg>
      </div>
      <div className="absolute bottom-[66.67%] left-0 right-1/2 top-0" data-name="Vector_4">
        <svg className="absolute block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 11.5703 10.7293">
          <path d={svgPaths.p3c181e80} fill="var(--fill-0, #FF3737)" id="Vector_4" />
        </svg>
      </div>
      <div className="absolute bottom-[33.33%] left-0 right-1/2 top-[33.34%]" data-name="Vector_5">
        <svg className="absolute block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 11.5703 10.7293">
          <path d={svgPaths.p16239f80} fill="var(--fill-0, #874FFF)" id="Vector_5" />
        </svg>
      </div>
    </div>
  );
}

function Icon() {
  return (
    <div className="h-[32.188px] overflow-clip relative shrink-0 w-full" data-name="Icon">
      <IconContainer1 />
    </div>
  );
}

function IconContainer() {
  return (
    <div className="absolute content-stretch flex flex-col h-[32.188px] items-start left-[24px] top-[19px] w-[23.141px]" data-name="IconContainer">
      <Icon />
    </div>
  );
}

export default function Group() {
  return (
    <div className="relative size-full">
      <div className="absolute inset-[-0.98%]">
        <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 69.3365 69.3365">
          <path d={svgPaths.p20a74400} fill="var(--fill-0, #394144)" id="Ellipse 1" stroke="var(--stroke-0, #444E52)" strokeWidth="1.3365" />
        </svg>
      </div>
      <IconContainer />
    </div>
  );
}