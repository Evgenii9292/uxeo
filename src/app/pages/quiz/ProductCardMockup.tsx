import svgPaths from "../../../imports/svg-869ttds5wi";

export function ProductCardMockup() {
  return (
    <div className="grid-cols-[max-content] grid-rows-[max-content] inline-grid leading-[0] place-items-start relative shrink-0">
      <p className="col-1 font-['RF_Dewi_Expanded:Semibold',sans-serif] h-[14.267px] leading-[normal] ml-[11.7px] mt-[174.56px] not-italic relative row-1 text-[9.534px] text-[rgba(135,143,166,0.8)] w-[100.79px]">Фрукты</p>
      <div className="bg-[#f7f8fc] border-[#f3f7fa] border-[0.681px] border-solid col-1 h-[282.603px] ml-0 mt-0 rounded-[13.619px] row-1 w-[226.763px]" />
      <div className="bg-[#e1e3eb] col-1 h-[115.765px] ml-[14.98px] mt-[68.1px] rounded-[13.619px] row-1 w-[194.077px]" />
      <p className="col-1 font-['Roboto_Condensed:Regular',sans-serif] font-normal leading-[18.397px] ml-[16.34px] mt-[198.66px] relative row-1 text-[#364146] text-[16.557px] whitespace-nowrap">Продукт 1</p>
      <p className="col-1 font-['Roboto_Condensed:Regular',sans-serif] font-normal leading-[18.397px] ml-[136.88px] mt-[197.48px] relative row-1 text-[#364146] text-[16.557px] whitespace-nowrap">145 ₽ / кг</p>
      <div className="bg-[#364146] col-1 content-stretch flex h-[36.772px] items-center justify-center ml-[14.98px] mt-[230.17px] pb-[13.619px] pt-[11.576px] px-[34.729px] relative rounded-[13.619px] row-1 w-[194.077px]">
        <p className="font-['Roboto_Condensed:Regular',sans-serif] font-normal leading-[18.397px] relative shrink-0 text-[#f4f5fc] text-[16.557px] whitespace-nowrap">В корзину</p>
      </div>
      <div className="col-1 ml-[14.98px] mt-[12.26px] grid-cols-[max-content] grid-rows-[max-content] inline-grid place-items-start relative row-1">
        <div className="bg-[#e1e3eb] col-1 h-[43.582px] ml-0 mt-0 rounded-[13.619px] row-1 w-[194.077px]" />
        <div className="col-1 ml-[11.58px] mt-[13.62px] relative row-1 size-[16.343px]">
          <svg className="absolute block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 16.3433 16.3433">
            <g clipPath="url(#clip0_57_137)">
              <g id="Vector" />
              <path d={svgPaths.p344f5a00} fill="var(--fill-0, #878FA6)" fillOpacity="0.6" />
            </g>
            <defs>
              <clipPath id="clip0_57_137">
                <rect fill="white" height="16.3433" width="16.3433" />
              </clipPath>
            </defs>
          </svg>
        </div>
        <p className="col-1 font-['Roboto_Condensed:Regular',sans-serif] font-normal leading-[12.757px] ml-[38.82px] mt-[16px] relative row-1 text-[#8e9ea6] text-[11.481px] whitespace-nowrap">Найти продукт</p>
        <div className="col-1 ml-[168.88px] mt-[13.62px] relative row-1 size-[16.343px]">
          <svg className="absolute block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 16.3433 16.3433">
            <g clipPath="url(#clip0_57_133)">
              <g id="Vector" />
              <path d={svgPaths.p2efedb80} fill="var(--fill-0, #364146)" />
            </g>
            <defs>
              <clipPath id="clip0_57_133">
                <rect fill="white" height="16.3433" width="16.3433" />
              </clipPath>
            </defs>
          </svg>
        </div>
      </div>
    </div>
  );
}
