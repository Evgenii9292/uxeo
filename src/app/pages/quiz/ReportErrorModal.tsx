/**
 * ReportErrorModal — bottom-sheet on mobile, centered dialog on tablet/desktop.
 * Sends error report to Supabase edge function.
 */

import React, { useState, useEffect, useRef } from "react";
import { projectId, publicAnonKey } from "../../../../utils/supabase/info";
import { isValidEmail } from "../../components/FeedbackModal";
import { useWindowWidth } from "../../hooks/useWindowWidth";

const ISSUE_TYPES = [
  "Ошибка в вопросе",
  "Неверный ответ",
  "Техническая проблема",
  "Предложение",
];

export function ReportErrorModal({
  onClose,
  context,
}: {
  onClose: () => void;
  /** Optional context: lesson/question info auto-attached to report */
  context?: string;
}) {
  const vw = useWindowWidth();
  const isMobile = vw < 768;

  const [issueType, setIssueType]         = useState(ISSUE_TYPES[0]);
  const [description, setDescription]     = useState("");
  const [email, setEmail]                 = useState("");
  const [emailError, setEmailError]       = useState("");
  const [attachment, setAttachment]       = useState<File | null>(null);
  const [showAttachSheet, setShowAttachSheet] = useState(false);
  const [sending, setSending]             = useState(false);
  const [sent, setSent]                   = useState(false);
  const [serverError, setServerError]     = useState("");
  const [visible, setVisible]             = useState(false);

  const fileInputRef   = useRef<HTMLInputElement>(null);
  const cameraInputRef = useRef<HTMLInputElement>(null);

  useEffect(() => {
    requestAnimationFrame(() => requestAnimationFrame(() => setVisible(true)));
  }, []);

  const handleClose = () => {
    setVisible(false);
    setTimeout(onClose, 320);
  };

  const canSend = description.trim().length >= 3 && !sending;

  const handleSend = async () => {
    if (!canSend) return;
    if (email.trim() && !isValidEmail(email)) {
      setEmailError("Введите корректный email");
      return;
    }
    setEmailError("");
    setSending(true);
    setServerError("");

    try {
      const body: Record<string, string> = {
        issue_type: issueType,
        description: description.trim(),
        email: email.trim(),
      };
      if (context) body.context = context;

      // Upload attachment to Supabase Storage if provided
      if (attachment) {
        try {
          const ext = attachment.name.split(".").pop() ?? "bin";
          const filename = `report_${Date.now()}.${ext}`;
          const uploadRes = await fetch(
            `https://${projectId}.supabase.co/storage/v1/object/report-attachments/${filename}`,
            {
              method: "POST",
              headers: {
                Authorization: `Bearer ${publicAnonKey}`,
                "Content-Type": attachment.type || "application/octet-stream",
                "x-upsert": "true",
              },
              body: attachment,
            }
          );
          if (uploadRes.ok) {
            body.attachment_url = `https://${projectId}.supabase.co/storage/v1/object/public/report-attachments/${filename}`;
            body.attachment_name = attachment.name;
          }
        } catch {
          // Attachment upload failed — proceed without it
        }
      }

      const res = await fetch(
        `https://${projectId}.supabase.co/functions/v1/make-server-d627d1b0/report/submit`,
        {
          method: "POST",
          headers: {
            "Content-Type": "application/json",
            Authorization: `Bearer ${publicAnonKey}`,
          },
          body: JSON.stringify(body),
        }
      );

      if (!res.ok) {
        const data = await res.json().catch(() => ({}));
        setServerError(data.message ?? "Что-то пошло не так, попробуйте ещё раз");
        setSending(false);
        return;
      }

      setSent(true);
      setTimeout(handleClose, 1800);
    } catch {
      setServerError("Нет соединения — попробуйте позже");
      setSending(false);
    }
  };

  // ── Attachment sub-sheet (mobile) ─────────────────────────────────────────────

  const attachOptions = [
    {
      icon: (
        <svg width="22" height="22" viewBox="0 0 24 24" fill="none">
          <rect x="3" y="3" width="18" height="18" rx="5" stroke="#3DC75A" strokeWidth="2" />
          <circle cx="12" cy="12" r="4" stroke="#3DC75A" strokeWidth="2" />
          <circle cx="17.5" cy="6.5" r="1.2" fill="#3DC75A" />
        </svg>
      ),
      label: "Сделать скриншот",
      action: () => { cameraInputRef.current?.click(); setShowAttachSheet(false); },
    },
    {
      icon: (
        <svg width="22" height="22" viewBox="0 0 24 24" fill="none">
          <rect x="2" y="6" width="20" height="14" rx="3" stroke="#FF9500" strokeWidth="2" />
          <circle cx="8" cy="11" r="2" stroke="#FF9500" strokeWidth="2" />
          <path d="M2 17l5-4 4 3 4-5 7 6" stroke="#FF9500" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" />
          <circle cx="19" cy="5" r="3" fill="#FF3B30" />
          <path d="M19 4v2M19 6v.01" stroke="white" strokeWidth="1.2" strokeLinecap="round" />
        </svg>
      ),
      label: "Выбрать из галереи",
      action: () => { fileInputRef.current?.click(); setShowAttachSheet(false); },
    },
    {
      icon: (
        <svg width="22" height="22" viewBox="0 0 24 24" fill="none">
          <circle cx="12" cy="12" r="9" stroke="#7B68EE" strokeWidth="2" />
          <circle cx="12" cy="12" r="1.5" fill="#7B68EE" />
          <circle cx="7" cy="12" r="1.5" fill="#7B68EE" />
          <circle cx="17" cy="12" r="1.5" fill="#7B68EE" />
        </svg>
      ),
      label: "Открыть из файлов",
      action: () => { fileInputRef.current?.click(); setShowAttachSheet(false); },
    },
  ];

  // ── Main form ─────────────────────────────────────────────────────────────────

  const formContent = sent ? (
    <div className="flex flex-col items-center gap-[14px] py-[28px]">
      <div
        className="w-[68px] h-[68px] rounded-full flex items-center justify-center"
        style={{ background: "rgba(0,147,47,0.15)" }}
      >
        <svg width="34" height="34" viewBox="0 0 24 24" fill="none">
          <path d="M7 12l3 3 7-7" stroke="rgba(0,147,47,0.9)" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round" />
        </svg>
      </div>
      <p className="font-['Roboto_Condensed:Medium',sans-serif] font-medium text-[#f4f5fc] text-[20px] text-center">
        Спасибо!
      </p>
      <p className="font-['Roboto_Condensed:Regular',sans-serif] font-normal text-[#798589] text-[15px] text-center leading-[1.4]">
        Мы рассмотрим ваше обращение и исправим ошибку как можно скорее.
      </p>
    </div>
  ) : (
    <>
      {/* Issue type */}
      <div className="flex flex-col gap-[8px]">
        <p className="font-['Roboto_Condensed:Medium',sans-serif] font-medium text-[#f1f2fb] text-[16px]">
          Тип обращения
        </p>
        <div className="relative">
          <select
            value={issueType}
            onChange={(e) => setIssueType(e.target.value)}
            className="w-full rounded-[12px] px-[14px] text-[#f1f2fb] appearance-none cursor-pointer"
            style={{
              background: "#374348",
              border: "none",
              outline: "none",
              fontFamily: "Roboto Condensed, sans-serif",
              fontSize: 15,
              height: 48,
            }}
          >
            {ISSUE_TYPES.map((t) => (
              <option key={t} value={t} style={{ background: "#2C3438" }}>
                {t}
              </option>
            ))}
          </select>
          <div className="pointer-events-none absolute right-[14px] top-1/2 -translate-y-1/2 text-[#798589]">
            <svg width="16" height="16" viewBox="0 0 24 24" fill="none">
              <path d="M6 9l6 6 6-6" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" />
            </svg>
          </div>
        </div>
      </div>

      {/* Description */}
      <div className="flex flex-col gap-[8px]">
        <p className="font-['Roboto_Condensed:Medium',sans-serif] font-medium text-[#f1f2fb] text-[16px]">
          Описание
        </p>
        <textarea
          value={description}
          onChange={(e) => setDescription(e.target.value)}
          placeholder="Опишите проблему подробнее..."
          rows={4}
          className="w-full rounded-[12px] px-[14px] py-[12px] text-[#f1f2fb] resize-none"
          style={{
            background: "#374348",
            border: "none",
            outline: "none",
            fontFamily: "Roboto Condensed, sans-serif",
            fontSize: 15,
            lineHeight: "1.4",
          }}
        />
      </div>

      {/* Attachment */}
      <div className="flex flex-col gap-[8px]">
        <p className="font-['Roboto_Condensed:Medium',sans-serif] font-medium text-[#f1f2fb] text-[16px]">
          Вложение{" "}
          <span className="font-['Roboto_Condensed:Regular',sans-serif] font-normal text-[#798589] text-[14px]">
            (необязательно)
          </span>
        </p>

        {attachment ? (
          /* Attached file pill */
          <div
            className="flex items-center gap-[10px] rounded-[12px] px-[14px] py-[11px]"
            style={{ background: "#374348" }}
          >
            <svg width="18" height="18" viewBox="0 0 24 24" fill="none">
              <path d="M13 2H6a2 2 0 00-2 2v16a2 2 0 002 2h12a2 2 0 002-2V9z" stroke="#798589" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" />
              <polyline points="13 2 13 9 20 9" stroke="#798589" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" />
            </svg>
            <span className="text-[#f4f5fc] text-[14px] font-['Roboto_Condensed:Regular',sans-serif] flex-1 truncate">
              {attachment.name}
            </span>
            <button
              onClick={() => setAttachment(null)}
              className="text-[#798589] hover:text-[#f4f5fc] transition-colors shrink-0"
            >
              <svg width="18" height="18" viewBox="0 0 24 24" fill="none">
                <path d="M18 6L6 18M6 6L18 18" stroke="currentColor" strokeWidth="2" strokeLinecap="round" />
              </svg>
            </button>
          </div>
        ) : (
          /* Add file button */
          <button
            onClick={() => isMobile ? setShowAttachSheet(true) : fileInputRef.current?.click()}
            className="flex items-center gap-[12px] rounded-[12px] px-[14px] py-[13px] active:bg-[#3d4a50] transition-colors text-left"
            style={{ background: "#374348", border: "1.5px dashed rgba(121,133,137,0.4)" }}
          >
            <div
              className="w-[30px] h-[30px] rounded-full flex items-center justify-center shrink-0"
              style={{ background: "rgba(255,107,33,0.12)" }}
            >
              <svg width="14" height="14" viewBox="0 0 24 24" fill="none">
                <path d="M12 5v14M5 12h14" stroke="#FF6B21" strokeWidth="2.5" strokeLinecap="round" />
              </svg>
            </div>
            <span className="font-['Roboto_Condensed:Regular',sans-serif] text-[#798589] text-[15px]">
              Добавить файл
            </span>
          </button>
        )}

        {/* Hidden file inputs */}
        <input
          ref={fileInputRef}
          type="file"
          accept="image/*,.pdf,.doc,.docx"
          className="hidden"
          onChange={(e) => { const f = e.target.files?.[0]; if (f) setAttachment(f); }}
        />
        <input
          ref={cameraInputRef}
          type="file"
          accept="image/*"
          capture="environment"
          className="hidden"
          onChange={(e) => { const f = e.target.files?.[0]; if (f) setAttachment(f); }}
        />
      </div>

      {/* Email */}
      <div className="flex flex-col gap-[8px]">
        <p className="font-['Roboto_Condensed:Medium',sans-serif] font-medium text-[#f1f2fb] text-[16px]">
          Email{" "}
          <span className="font-['Roboto_Condensed:Regular',sans-serif] font-normal text-[#798589] text-[14px]">
            (необязательно)
          </span>
        </p>
        <input
          type="email"
          value={email}
          onChange={(e) => { setEmail(e.target.value); setEmailError(""); }}
          onBlur={() => {
            if (email.trim() && !isValidEmail(email)) setEmailError("Введите корректный email");
            else setEmailError("");
          }}
          placeholder="example@mail.com"
          className="w-full rounded-[12px] px-[14px] py-[12px] text-[#f1f2fb]"
          style={{
            background: "#374348",
            border: emailError ? "1px solid #ff4d4d" : "none",
            outline: "none",
            fontFamily: "Roboto Condensed, sans-serif",
            fontSize: 15,
            height: 48,
          }}
        />
        {emailError && (
          <p className="text-[#ff6b6b] text-[13px] font-['Roboto_Condensed:Regular',sans-serif]">
            {emailError}
          </p>
        )}
      </div>

      {serverError && (
        <p className="text-[#ff6b6b] text-[14px] font-['Roboto_Condensed:Regular',sans-serif] text-center">
          {serverError}
        </p>
      )}

      {/* Submit */}
      <button
        onClick={handleSend}
        disabled={!canSend}
        className="w-full rounded-[16px] flex items-center justify-center gap-[8px] relative select-none outline-none transition-transform duration-75"
        style={{
          height: 54,
          background: canSend ? "#111718" : "#1E2628",
          opacity: canSend ? 1 : 0.5,
          cursor: canSend ? "pointer" : "default",
          transform: canSend ? undefined : undefined,
        }}
      >
        <div
          aria-hidden="true"
          className="absolute inset-0 rounded-[16px] pointer-events-none border border-[#2A3438]"
          style={{ boxShadow: canSend ? "0px 5px 0px 0px #060809" : "none" }}
        />
        {sending ? (
          <svg className="animate-spin" width="22" height="22" viewBox="0 0 24 24" fill="none">
            <circle cx="12" cy="12" r="10" stroke="#798589" strokeWidth="3" />
            <path d="M12 2a10 10 0 0 1 10 10" stroke="#f4f5fc" strokeWidth="3" strokeLinecap="round" />
          </svg>
        ) : (
          <svg width="18" height="18" viewBox="0 0 32 32" fill="#f4f5fc">
            <path d="m27 5h-9c0-1.6542969-1.3457031-3-3-3h-8c-.5522461 0-1 .4477539-1 1v16 10c0 .5522461.4477539 1 1 1s1-.4477539 1-1v-9h8c0 1.6542969 1.3457031 3 3 3h8c1.6542969 0 3-1.3457031 3-3v-12c0-1.6542969-1.3457031-3-3-3z" />
          </svg>
        )}
        <p className="font-['Roboto_Condensed:Medium',sans-serif] font-medium text-[#f4f5fc] text-[18px]">
          {sending ? "Отправляем..." : "Отправить"}
        </p>
      </button>
    </>
  );

  return (
    <>
      {/* ── Main modal ───────────────────────────────────────────────────────────── */}
      <div
        className="fixed inset-0 z-[120] flex items-end justify-center"
        style={{ alignItems: isMobile ? "flex-end" : "center" }}
        onClick={handleClose}
      >
        {/* Backdrop */}
        <div
          className="absolute inset-0 bg-black/60 transition-opacity duration-300"
          style={{ opacity: visible ? 1 : 0 }}
        />

        {/* Sheet / Dialog */}
        <div
          className="relative flex flex-col gap-[18px] p-[24px]"
          style={{
            background: "#2C3438",
            borderRadius: isMobile ? "24px 24px 0 0" : 24,
            width: isMobile ? "100%" : 520,
            maxHeight: isMobile ? "90vh" : "85vh",
            overflowY: "auto",
            paddingBottom: isMobile ? "max(36px, env(safe-area-inset-bottom, 36px))" : 28,
            transform: visible
              ? "translateY(0) scale(1)"
              : isMobile
                ? "translateY(100%)"
                : "translateY(16px) scale(0.97)",
            opacity: isMobile ? 1 : (visible ? 1 : 0),
            transition: "transform 0.32s cubic-bezier(0.32,0.72,0,1), opacity 0.25s ease",
          }}
          onClick={(e) => e.stopPropagation()}
        >
          {/* Header */}
          <div className="flex items-center justify-between">
            <p className="font-['Roboto_Condensed:Medium',sans-serif] font-medium text-[#f4f5fc] text-[22px]">
              Сообщить об ошибке
            </p>
            <button
              onClick={handleClose}
              className="text-[#798589] hover:text-[#f4f5fc] active:scale-90 transition-all"
            >
              <svg width="24" height="24" viewBox="0 0 24 24" fill="none">
                <path d="M18 6L6 18M6 6L18 18" stroke="currentColor" strokeWidth="2" strokeLinecap="round" />
              </svg>
            </button>
          </div>

          {formContent}
        </div>
      </div>

      {/* ── Attachment sub-sheet (mobile only) ───────────────────────────────────── */}
      {showAttachSheet && (
        <div
          className="fixed inset-0 z-[130] flex items-end"
          onClick={() => setShowAttachSheet(false)}
        >
          <div className="absolute inset-0 bg-black/40 transition-opacity duration-200" />
          <div
            className="relative w-full flex flex-col overflow-hidden"
            style={{ background: "#2C3438", borderRadius: "24px 24px 0 0" }}
            onClick={(e) => e.stopPropagation()}
          >
            <p
              className="font-['Roboto_Condensed:Medium',sans-serif] font-medium text-[#f4f5fc] text-[18px] text-center pt-[20px] pb-[12px]"
            >
              Добавить вложение
            </p>

            {attachOptions.map(({ icon, label, action }) => (
              <button
                key={label}
                onClick={action}
                className="flex items-center gap-[18px] px-[24px] py-[16px] text-left active:bg-[#374348] transition-colors border-t border-[rgba(255,255,255,0.06)]"
              >
                <span className="shrink-0">{icon}</span>
                <span className="font-['Roboto_Condensed:Regular',sans-serif] text-[#f4f5fc] text-[17px]">
                  {label}
                </span>
              </button>
            ))}

            <button
              onClick={() => setShowAttachSheet(false)}
              className="mx-[16px] mt-[10px] mb-[max(16px,env(safe-area-inset-bottom,16px))] rounded-[14px] py-[15px] font-['Roboto_Condensed:Medium',sans-serif] font-medium text-[#f4f5fc] text-[17px]"
              style={{ background: "#374348" }}
            >
              Отмена
            </button>
          </div>
        </div>
      )}
    </>
  );
}
