import svgPaths from "./svg-jlelvggksc";

function HighlightIcon() {
  return (
    <div className="absolute h-[60.771px] left-[171.01px] top-[110.71px] w-[109.521px]" data-name="Highlight Icon">
      <div className="absolute inset-[-1.59%_-0.2%_-1.54%_-0.84%]">
        <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 110.661 62.6761">
          <g id="Highlight Icon">
            <path d={svgPaths.p2b0fe200} fill="var(--stroke-0, #798589)" id="Vector 733" />
            <path d={svgPaths.p1e150e00} fill="var(--stroke-0, #55FF21)" id="Vector 734" />
          </g>
        </svg>
      </div>
    </div>
  );
}

function HighlightShape() {
  return (
    <div className="absolute h-[84.316px] left-[0.42px] top-[20px] w-[254.893px]" data-name="Highlight Shape">
      <div className="absolute inset-[-0.81%_-0.34%_-1.18%_0]">
        <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 255.908 85.9926">
          <g id="Highlight Shape">
            <path d={svgPaths.p91f9980} fill="var(--stroke-0, #798589)" id="Vector 731" />
            <path d={svgPaths.pd720200} fill="url(#paint0_linear_294_491)" id="Vector 735" />
            <path d={svgPaths.p307efb00} fill="url(#paint1_linear_294_491)" id="Vector 736" />
          </g>
          <defs>
            <linearGradient gradientUnits="userSpaceOnUse" id="paint0_linear_294_491" x1="49.6997" x2="18.6454" y1="35.3974" y2="105.062">
              <stop stopColor="#FF6B21" />
              <stop offset="1" stopColor="#994014" />
            </linearGradient>
            <linearGradient gradientUnits="userSpaceOnUse" id="paint1_linear_294_491" x1="189.271" x2="215.054" y1="38.2543" y2="106.927">
              <stop stopColor="#FF6B21" />
              <stop offset="1" stopColor="#994014" />
            </linearGradient>
          </defs>
        </svg>
      </div>
    </div>
  );
}

function ContentHighlight() {
  return (
    <div className="absolute h-[61.965px] left-0 top-[110.43px] w-[164.974px]" data-name="Content Highlight">
      <div className="absolute inset-[0_-0.54%_-1.28%_0]">
        <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 165.89 62.7552">
          <g id="Content Highlight">
            <path d={svgPaths.p26da13c0} fill="var(--stroke-0, #798589)" id="Vector 732" />
            <path d={svgPaths.p7b65300} fill="var(--stroke-0, #21A6FF)" id="Vector 736" />
          </g>
        </svg>
      </div>
    </div>
  );
}

function ContentGroup() {
  return (
    <div className="absolute contents left-0 top-[20px]" data-name="Content Group">
      <HighlightIcon />
      <HighlightShape />
      <ContentHighlight />
    </div>
  );
}

export default function ContentSection() {
  return (
    <div className="relative rounded-[20px] size-full" data-name="Content Section">
      <ContentGroup />
    </div>
  );
}