import { Activity, Heart, Moon, Footprints, Home, BarChart3, UserRound } from 'lucide-react';

/** Illustrative screen for the health challenge; controls are part of the example. */
export function HealthChallengeExample() {
  return (
    <div className="mx-auto w-[260px] max-w-full rounded-[36px] bg-[#121923] p-[7px] shadow-[0_12px_28px_#15202b55]" style={{ fontFamily: 'Inter, sans-serif' }}>
      <div className="relative rounded-[30px] overflow-hidden bg-[#f4f6fb] text-[#1e293b]">
        <div className="flex justify-between items-center px-5 pt-3 text-[10px] font-semibold"><span>9:41</span><span className="bg-[#121923] w-[68px] h-[16px] rounded-full" /><span>••• ▰</span></div>
        <div className="p-[18px] pb-[20px]">
          <div className="flex justify-between items-center"><div><p className="text-[11px] text-[#68778b]">Ваш прогресс за сегодня</p><p className="text-[21px] font-semibold mt-1">Моя активность</p></div><div className="rounded-full bg-[#e0e8ff] p-2"><Activity size={18} color="#4169e1" /></div></div>
          <div className="bg-white rounded-[20px] p-4 mt-4 border border-[#e8edf5]">
            <div className="flex items-center gap-2 text-[12px] font-medium"><Footprints size={15} color="#4169e1" />Шаги за сегодня</div>
            <div className="relative w-[126px] h-[126px] mx-auto my-3 flex flex-col justify-center items-center">
              <svg viewBox="0 0 126 126" className="absolute inset-0 w-full h-full" fill="none" aria-hidden="true"><circle cx="63" cy="63" r="54" stroke="#edf1fa" strokeWidth="9" /><circle cx="63" cy="63" r="54" stroke="#4169e1" strokeWidth="9" strokeLinecap="round" strokeDasharray="245 340" transform="rotate(-90 63 63)" /></svg>
              <span className="text-[26px] font-semibold leading-tight">7 240</span><span className="text-[10px] text-[#68778b] mt-1">из 10 000 шагов</span>
            </div>
            <p className="text-center text-[10px] text-[#68778b]">Осталось 2 760 шагов до цели</p>
          </div>
          <div className="grid grid-cols-2 gap-[10px] mt-[10px]">
            <div className="rounded-[16px] bg-white border border-[#e8edf5] p-3"><div className="flex items-center gap-1 text-[11px] text-[#68778b]"><Heart size={13} color="#e56c83" />Пульс</div><p className="text-[18px] font-semibold mt-2">72 <span className="text-[9px] font-normal text-[#68778b]">уд/мин</span></p><svg viewBox="0 0 80 22" className="w-full h-[22px] mt-2" aria-hidden="true"><path d="M0 14H18L24 8L30 20L38 2L44 14H80" fill="none" stroke="#e56c83" strokeWidth="2" strokeLinejoin="round" /></svg></div>
            <div className="rounded-[16px] bg-white border border-[#e8edf5] p-3"><div className="flex items-center gap-1 text-[11px] text-[#68778b]"><Moon size={13} color="#8374d8" />Сон</div><p className="text-[18px] font-semibold mt-2">7 <span className="text-[9px] font-normal text-[#68778b]">ч</span> 40 <span className="text-[9px] font-normal text-[#68778b]">мин</span></p><p className="text-[9px] text-[#68778b] mt-3">Цель — 8 часов</p></div>
          </div>
          <div className="bg-[#4169e1] rounded-[13px] py-[14px] px-2 mt-4 text-white text-center text-[12px] font-semibold">Начать тренировку</div>
        </div>
        <div className="bg-white border-t border-[#e8edf5] flex justify-around py-3 text-[8px]"><span className="flex flex-col items-center gap-1 text-[#4169e1]"><Home size={16} />Сегодня</span><span className="flex flex-col items-center gap-1 text-[#68778b]"><BarChart3 size={16} />Статистика</span><span className="flex flex-col items-center gap-1 text-[#68778b]"><UserRound size={16} />Профиль</span></div>
        <div className="bg-white pb-2 flex justify-center"><span className="w-[80px] h-[3px] rounded-full bg-[#121923]" /></div>
      </div>
    </div>
  );
}
