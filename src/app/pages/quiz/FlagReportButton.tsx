import React, { useState } from "react";
import { ReportErrorModal } from "./ReportErrorModal";

export function FlagReportButton({ context }: { context?: string } = {}) {
  const [open, setOpen] = useState(false);

  return (
    <>
      <button
        onClick={() => setOpen(true)}
        className="shrink-0 cursor-pointer select-none outline-none opacity-50 hover:opacity-80 active:opacity-100 transition-opacity duration-150"
        title="Сообщить об ошибке"
      >
        <svg width="22" height="22" viewBox="0 0 32 32" fill="#798589">
          <path d="m27 5h-9c0-1.6542969-1.3457031-3-3-3h-8c-.5522461 0-1 .4477539-1 1v16 10c0 .5522461.4477539 1 1 1s1-.4477539 1-1v-9h8c0 1.6542969 1.3457031 3 3 3h8c1.6542969 0 3-1.3457031 3-3v-12c0-1.6542969-1.3457031-3-3-3z" />
        </svg>
      </button>

      {open && (
        <ReportErrorModal context={context} onClose={() => setOpen(false)} />
      )}
    </>
  );
}
