import { X } from "lucide-react";

export function CloseButton({ onClick }: { onClick: () => void }) {
  return (
    <button
      type="button"
      onClick={onClick}
      className="relative shrink-0 cursor-pointer select-none outline-none transition-transform duration-75 hover:scale-95 active:scale-90 flex items-center justify-center"
      style={{ width: 32, height: 32 }}
    >
      <X className="text-[#798589]" style={{ width: 26, height: 26 }} strokeWidth={2.5} />
    </button>
  );
}
