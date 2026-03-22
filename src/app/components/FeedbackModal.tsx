/**
 * FeedbackModal — shared bottom-sheet feedback form.
 * Used by MobileFloatingCircles and MoreSheet.
 */

import React, { useState, useEffect } from "react";
import { projectId, publicAnonKey } from "../../../utils/supabase/info";

// ── Email validation ──────────────────────────────────────────────────────────
export function isValidEmail(email: string) {
  return /^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email.trim());
}

// ── FeedbackModal ─────────────────────────────────────────────────────────────

export function FeedbackModal({ onClose }: { onClose: () => void }) {
  const [rating, setRating]             = useState(0);
  const [text, setText]                 = useState("");
  const [missing, setMissing]           = useState("");
  const [email, setEmail]               = useState("");
  const [emailError, setEmailError]     = useState("");
  const [sending, setSending]           = useState(false);
  const [sent, setSent]                 = useState(false);
  const [serverError, setServerError]   = useState("");
  const [visible, setVisible]           = useState(false);

  useEffect(() => {
    requestAnimationFrame(() => requestAnimationFrame(() => setVisible(true)));
  }, []);

  const handleClose = () => {
    setVisible(false);
    setTimeout(onClose, 300);
  };

  const canSend = rating > 0 && text.trim().length >= 3 && !sending;

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
      const res = await fetch(
        `https://${projectId}.supabase.co/functions/v1/make-server-d627d1b0/feedback/submit`,
        {
          method: "POST",
          headers: {
            "Content-Type": "application/json",
            Authorization: `Bearer ${publicAnonKey}`,
          },
          body: JSON.stringify({ rating, text: text.trim(), missing: missing.trim(), email: email.trim() }),
        }
      );
      const data = await res.json();
      if (!res.ok) {
        setServerError(data.error ?? "Что-то пошло не так, попробуйте ещё раз");
        setSending(false);
        return;
      }
      setSent(true);
      setTimeout(handleClose, 4000);
    } catch (err) {
      console.error("Feedback submit error:", err);
      setServerError("Нет соединения — попробуйте позже");
      setSending(false);
    }
  };

  return (
    <div className="fixed inset-0 z-[120] flex items-end" onClick={handleClose}>
      {/* Backdrop */}
      <div
        className="absolute inset-0 bg-black/60 transition-opacity duration-300"
        style={{ opacity: visible ? 1 : 0 }}
      />

      {/* Sheet */}
      <div
        className="relative w-full flex flex-col gap-[18px] p-[24px] pb-[36px]"
        style={{
          background: "#2C3438",
          borderRadius: "24px 24px 0 0",
          maxHeight: "85vh",
          overflowY: "auto",
          transform: visible ? "translateY(0)" : "translateY(100%)",
          transition: "transform 0.32s cubic-bezier(0.32,0.72,0,1)",
        }}
        onClick={(e) => e.stopPropagation()}
      >
        {/* Header */}
        <div className="flex items-center justify-between">
          <p className="font-['Roboto_Condensed:Medium',sans-serif] font-medium text-[#f4f5fc] text-[22px]">
            Обратная связь
          </p>
          <button onClick={handleClose} className="text-[#798589] active:scale-90 transition-transform">
            <svg width="24" height="24" viewBox="0 0 24 24" fill="none">
              <path d="M18 6L6 18M6 6L18 18" stroke="currentColor" strokeWidth="2" strokeLinecap="round" />
            </svg>
          </button>
        </div>

        {sent ? (
          <div className="flex flex-col items-center gap-[14px] py-[24px]">
            <div
              className="w-[64px] h-[64px] rounded-full flex items-center justify-center"
              style={{ background: "rgba(255,107,33,0.15)" }}
            >
              <svg width="32" height="32" viewBox="0 0 24 24" fill="none">
                <path d="M7 12l3 3 7-7" stroke="#FF6B21" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round" />
              </svg>
            </div>
            <p className="font-['Roboto_Condensed:Medium',sans-serif] font-medium text-[#f4f5fc] text-[20px] text-center">
              Спасибо за отзыв!
            </p>
            <p className="font-['Roboto_Condensed:Regular',sans-serif] font-normal text-[#798589] text-[15px] text-center leading-[1.4]">
              Мы вышлем подарок — 1 месяц бесплатной подписки — на указанный email в течение 24 часов.
            </p>
          </div>
        ) : (
          <>
            {/* Gift promo banner */}
            <div
              className="flex gap-[12px] items-start rounded-[14px] px-[14px] py-[12px]"
              style={{ background: "rgba(255,107,33,0.12)", border: "1px solid rgba(255,107,33,0.25)" }}
            >
              <span style={{ fontSize: 24, lineHeight: 1, flexShrink: 0 }}>🎁</span>
              <p className="font-['Roboto_Condensed:Regular',sans-serif] font-normal text-[#f4d4c3] text-[14px] leading-[1.45]">
                Напишите письменный отзыв — и получите{" "}
                <span className="font-['Roboto_Condensed:Medium',sans-serif] font-medium text-[#FF6B21]">
                  1 месяц бесплатной подписки
                </span>{" "}
                в подарок!
              </p>
            </div>

            {/* Rating */}
            <div className="flex flex-col gap-[10px]">
              <p className="font-['Roboto_Condensed:Medium',sans-serif] font-medium text-[#f1f2fb] text-[16px]">
                Насколько вам нравится приложение?
              </p>
              <div className="flex gap-[8px]">
                {[1, 2, 3, 4, 5].map((star) => (
                  <button key={star} onClick={() => setRating(star)} className="active:scale-90 transition-transform">
                    <svg width="38" height="38" viewBox="0 0 24 24" fill="none">
                      <path
                        d="M12 2l3.09 6.26L22 9.27l-5 4.87 1.18 6.88L12 17.77l-6.18 3.25L7 14.14 2 9.27l6.91-1.01L12 2z"
                        fill={star <= rating ? "#FF6B21" : "none"}
                        stroke={star <= rating ? "#FF6B21" : "#57646a"}
                        strokeWidth="1.5"
                        strokeLinecap="round"
                        strokeLinejoin="round"
                      />
                    </svg>
                  </button>
                ))}
              </div>
            </div>

            {/* Review text */}
            <div className="flex flex-col gap-[8px]">
              <p className="font-['Roboto_Condensed:Medium',sans-serif] font-medium text-[#f1f2fb] text-[16px]">
                Что было неудобно или можно улучшить?
              </p>
              <textarea
                value={text}
                onChange={(e) => setText(e.target.value)}
                placeholder="Напишите здесь — это обязательно для подарка..."
                rows={3}
                className="w-full rounded-[12px] px-[14px] py-[11px] text-[#f1f2fb] resize-none"
                style={{ background: "#374348", border: "none", outline: "none", fontFamily: "Roboto Condensed, sans-serif", fontSize: 15, lineHeight: "1.4" }}
              />
            </div>

            {/* What's missing */}
            <div className="flex flex-col gap-[8px]">
              <p className="font-['Roboto_Condensed:Medium',sans-serif] font-medium text-[#f1f2fb] text-[16px]">
                Чего не хватает?
              </p>
              <textarea
                value={missing}
                onChange={(e) => setMissing(e.target.value)}
                placeholder="Например: больше практики, видео, примеров..."
                rows={2}
                className="w-full rounded-[12px] px-[14px] py-[11px] text-[#f1f2fb] resize-none"
                style={{ background: "#374348", border: "none", outline: "none", fontFamily: "Roboto Condensed, sans-serif", fontSize: 15, lineHeight: "1.4" }}
              />
            </div>

            {/* Email */}
            <div className="flex flex-col gap-[8px]">
              <p className="font-['Roboto_Condensed:Medium',sans-serif] font-medium text-[#f1f2fb] text-[16px]">
                Email для получения подарка
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
                  lineHeight: "1.4",
                  height: 48,
                }}
              />
              {emailError && (
                <p className="text-[#ff6b6b] text-[13px] font-['Roboto_Condensed:Regular',sans-serif]">
                  {emailError}
                </p>
              )}
            </div>

            {/* Server error */}
            {serverError && (
              <p className="text-[#ff6b6b] text-[14px] font-['Roboto_Condensed:Regular',sans-serif] text-center">
                {serverError}
              </p>
            )}

            {/* Submit button */}
            <button
              onClick={handleSend}
              disabled={!canSend}
              className="group w-full rounded-[16px] flex items-center justify-center gap-[8px] relative select-none outline-none transition-transform duration-75 hover:translate-y-[2px] active:translate-y-[4px]"
              style={{
                height: 54,
                background: canSend ? "#111718" : "#1E2628",
                opacity: canSend ? 1 : 0.5,
                cursor: canSend ? "pointer" : "default",
              }}
            >
              <div
                aria-hidden="true"
                className="absolute inset-0 rounded-[16px] pointer-events-none border border-[#2A3438] transition-[box-shadow] duration-75"
                style={{ boxShadow: canSend ? "0px 5px 0px 0px #060809" : "none" }}
              />
              {sending ? (
                <svg className="animate-spin" width="22" height="22" viewBox="0 0 24 24" fill="none">
                  <circle cx="12" cy="12" r="10" stroke="#798589" strokeWidth="3" />
                  <path d="M12 2a10 10 0 0 1 10 10" stroke="#f4f5fc" strokeWidth="3" strokeLinecap="round" />
                </svg>
              ) : (
                <span style={{ fontSize: 18 }}>🎁</span>
              )}
              <p className="font-['Roboto_Condensed:Medium',sans-serif] font-medium text-[#f4f5fc] text-[18px]">
                {sending ? "Отправляем..." : "Отправить и получить подарок"}
              </p>
            </button>
          </>
        )}
      </div>
    </div>
  );
}
