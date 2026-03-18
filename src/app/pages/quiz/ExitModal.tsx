export function ExitConfirmationModal({
  onContinue,
  onExit,
}: {
  onContinue: () => void;
  onExit: () => void;
}) {
  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center">
      {/* Backdrop */}
      <div
        className="absolute inset-0 bg-black/60 backdrop-blur-[2px]"
        onClick={onContinue}
      />

      {/* Modal */}
      <div className="relative bg-[#f7f8fc] rounded-[24px] shadow-[0_10px_40px_rgba(0,0,0,0.3)] w-[520px] p-[40px] flex flex-col gap-[28px]">
        <h2 className="font-['Roboto_Condensed:Bold',sans-serif] font-bold text-[#323c41] text-[32px] leading-[1.2] text-center">
          Выйти из урока?
        </h2>

        <p className="font-['Roboto_Condensed:Regular',sans-serif] font-normal text-[#5a6569] text-[18px] leading-[1.4] text-center">
          Вы уверены, что хотите выйти? Текущий прогресс может быть потерян.
        </p>

        <div className="flex flex-col gap-[12px] w-full">
          {/* Primary: Продолжить урок */}
          <button
            onClick={() => {
              onContinue();
              try {
                const ctx = new AudioContext();
                const o = ctx.createOscillator();
                o.type = "sine";
                o.frequency.setValueAtTime(660, ctx.currentTime);
                o.frequency.exponentialRampToValueAtTime(880, ctx.currentTime + 0.08);
                const g = ctx.createGain();
                g.gain.setValueAtTime(0.12, ctx.currentTime);
                g.gain.exponentialRampToValueAtTime(0.001, ctx.currentTime + 0.08);
                o.connect(g); g.connect(ctx.destination);
                o.start(); o.stop(ctx.currentTime + 0.08);
              } catch (_) {}
            }}
            className="group relative flex h-[56px] items-center justify-center px-[25px] rounded-[20px] bg-[#ff5d39] cursor-pointer select-none outline-none transition-transform duration-75 hover:translate-y-[2px] active:translate-y-[4px]"
          >
            <div
              aria-hidden="true"
              className="absolute border-[#ff390d] border-[0.835px] border-solid inset-0 pointer-events-none rounded-[20px] transition-[box-shadow] duration-75 shadow-[0px_4px_0px_0px_#c24226] group-hover:shadow-[0px_2px_0px_0px_#c24226] group-active:shadow-none"
            />
            <p className="font-['Roboto_Condensed:Bold',sans-serif] font-bold text-[#f4f5fc] text-[24px] whitespace-nowrap">
              Продолжить урок
            </p>
          </button>

          {/* Secondary: Выйти из урока */}
          <button
            onClick={() => {
              onExit();
              try {
                const ctx = new AudioContext();
                const o = ctx.createOscillator();
                o.type = "sine";
                o.frequency.setValueAtTime(440, ctx.currentTime);
                o.frequency.exponentialRampToValueAtTime(330, ctx.currentTime + 0.1);
                const g = ctx.createGain();
                g.gain.setValueAtTime(0.08, ctx.currentTime);
                g.gain.exponentialRampToValueAtTime(0.001, ctx.currentTime + 0.1);
                o.connect(g); g.connect(ctx.destination);
                o.start(); o.stop(ctx.currentTime + 0.1);
              } catch (_) {}
            }}
            className="group relative flex h-[56px] items-center justify-center px-[25px] rounded-[20px] bg-[#e8eaef] cursor-pointer select-none outline-none transition-transform duration-75 hover:translate-y-[2px] active:translate-y-[4px]"
          >
            <div
              aria-hidden="true"
              className="absolute inset-0 pointer-events-none rounded-[20px] transition-[box-shadow] duration-75 shadow-[0px_4px_0px_0px_#c5c8d3] group-hover:shadow-[0px_2px_0px_0px_#c5c8d3] group-active:shadow-none"
            />
            <p className="font-['Roboto_Condensed:Bold',sans-serif] font-bold text-[#5a6569] text-[24px] whitespace-nowrap">
              Выйти из урока
            </p>
          </button>
        </div>
      </div>
    </div>
  );
}
