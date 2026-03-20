import { X } from "lucide-react";

export function CloseButton({ onClick, mobile }: { onClick: () => void; mobile?: boolean }) {
  const btnSize = mobile ? 32 : 32;
  const iconSize = mobile ? 26 : 26;
  return (
    <button
      type="button"
      onClick={onClick}
      className="relative shrink-0 cursor-pointer select-none outline-none transition-transform duration-75 hover:scale-95 active:scale-90 flex items-center justify-center"
      data-name="Close Button"
      style={{ width: btnSize, height: btnSize }}
    >
      <X className="text-[#798589]" style={{ width: iconSize, height: iconSize }} strokeWidth={2.5} />
    </button>
  );
}