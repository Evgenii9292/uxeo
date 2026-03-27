import { useNavigate } from "react-router";
import { useRef, useState, useEffect } from "react";
import Layout from "../components/Layout";
import RightWidgets from "../components/RightWidgets";
import skillumLongLogo from "../../assets/skillum-logo-long.svg";
import { projectId, publicAnonKey } from "../../../utils/supabase/info";
import { isValidEmail } from "../components/FeedbackModal";

// ─── MessageModal ─────────────────────────────────────────────────────────────
function MessageModal({ onClose }: { onClose: () => void }) {
  const [text, setText] = useState("");
  const [email, setEmail] = useState("");
  const [sending, setSending] = useState(false);
  const [sent, setSent] = useState(false);
  const [error, setError] = useState("");
  const [visible, setVisible] = useState(false);

  useEffect(() => {
    requestAnimationFrame(() => requestAnimationFrame(() => setVisible(true)));
  }, []);

  const handleClose = () => { setVisible(false); setTimeout(onClose, 300); };

  const handleSend = async () => {
    if (!text.trim() || sending) return;
    setSending(true); setError("");
    try {
      const res = await fetch(
        `https://${projectId}.supabase.co/functions/v1/make-server-d627d1b0/message/send`,
        {
          method: "POST",
          headers: { "Content-Type": "application/json", Authorization: `Bearer ${publicAnonKey}` },
          body: JSON.stringify({ text: text.trim(), email: email.trim() }),
        }
      );
      if (!res.ok) throw new Error();
      setSent(true);
      setTimeout(handleClose, 2500);
    } catch {
      setError("Не удалось отправить — попробуйте ещё раз");
      setSending(false);
    }
  };

  return (
    <div className="fixed inset-0 z-[120] flex items-end justify-center" onClick={handleClose}>
      <div className="absolute inset-0 bg-black/60 transition-opacity duration-300" style={{ opacity: visible ? 1 : 0 }} />
      <div
        className="relative w-full flex flex-col gap-[16px] p-[24px]"
        style={{
          background: "#2C3438",
          borderRadius: "24px 24px 0 0",
          maxWidth: 560,
          paddingBottom: "max(32px, env(safe-area-inset-bottom, 32px))",
          transform: visible ? "translateY(0)" : "translateY(100%)",
          transition: "transform 0.32s cubic-bezier(0.32,0.72,0,1)",
        }}
        onClick={(e) => e.stopPropagation()}
      >
        {/* Header */}
        <div className="flex items-center justify-between">
          <p className="font-['Roboto_Condensed:Medium',sans-serif] font-medium text-[#f4f5fc] text-[20px]">Написать нам</p>
          <button onClick={handleClose} className="text-[#798589] active:scale-90 transition-transform">
            <svg width="22" height="22" viewBox="0 0 24 24" fill="none"><path d="M18 6L6 18M6 6L18 18" stroke="currentColor" strokeWidth="2" strokeLinecap="round"/></svg>
          </button>
        </div>

        {sent ? (
          <div className="flex flex-col items-center gap-[12px] py-[20px]">
            <div className="w-[60px] h-[60px] rounded-full flex items-center justify-center" style={{ background: "rgba(0,147,47,0.15)" }}>
              <svg width="30" height="30" viewBox="0 0 24 24" fill="none"><path d="M7 12l3 3 7-7" stroke="rgba(0,147,47,0.9)" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round"/></svg>
            </div>
            <p className="font-['Roboto_Condensed:Medium',sans-serif] font-medium text-[#f4f5fc] text-[18px] text-center">Сообщение отправлено!</p>
            <p className="font-['Roboto_Condensed:Regular',sans-serif] text-[#798589] text-[14px] text-center">Мы свяжемся с вами в ближайшее время.</p>
          </div>
        ) : (
          <>
            <textarea
              value={text}
              onChange={(e) => setText(e.target.value)}
              placeholder="Ваш вопрос или предложение..."
              rows={5}
              className="w-full rounded-[12px] px-[14px] py-[12px] text-[#f1f2fb] resize-none"
              style={{ background: "#374348", border: "none", outline: "none", fontFamily: "Roboto Condensed, sans-serif", fontSize: 15, lineHeight: "1.4" }}
            />
            <input
              type="email"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              placeholder="Email для ответа (необязательно)"
              className="w-full rounded-[12px] px-[14px] text-[#f1f2fb]"
              style={{ background: "#374348", border: "none", outline: "none", fontFamily: "Roboto Condensed, sans-serif", fontSize: 15, height: 46 }}
            />
            {error && <p className="text-[#ff6b6b] text-[13px] font-['Roboto_Condensed:Regular',sans-serif]">{error}</p>}
            <button
              onClick={handleSend}
              disabled={!text.trim() || sending}
              className="w-full rounded-[14px] flex items-center justify-center gap-[8px] relative"
              style={{ height: 52, background: text.trim() && !sending ? "#111718" : "#1E2628", opacity: text.trim() && !sending ? 1 : 0.5, cursor: text.trim() && !sending ? "pointer" : "default", boxShadow: text.trim() && !sending ? "0px 5px 0px 0px #060809" : "none", border: "1px solid #2A3438" }}
            >
              <p className="font-['Roboto_Condensed:Medium',sans-serif] font-medium text-[#f4f5fc] text-[17px]">
                {sending ? "Отправляем..." : "Отправить"}
              </p>
            </button>
          </>
        )}
      </div>
    </div>
  );
}

// ─── Stroke SVG icons (для "Что есть в Скиллум") ────────────────────────────────
const S = { stroke: "#9ba3a8", fill: "none", strokeWidth: 1.6, strokeLinecap: "round" as const, strokeLinejoin: "round" as const };

function IconZap() {
  return (
    <svg width="20" height="20" viewBox="0 0 24 24" {...S}>
      <path d="M13 2L4.5 13.5H12L11 22L19.5 10.5H12L13 2Z" />
    </svg>
  );
}
function IconTarget() {
  return (
    <svg width="20" height="20" viewBox="0 0 24 24" {...S}>
      <circle cx="12" cy="12" r="10" /><circle cx="12" cy="12" r="6" /><circle cx="12" cy="12" r="2" />
    </svg>
  );
}
function IconChat() {
  return (
    <svg width="20" height="20" viewBox="0 0 24 24" {...S}>
      <path d="M21 15a2 2 0 01-2 2H7l-4 4V5a2 2 0 012-2h14a2 2 0 012 2z" />
    </svg>
  );
}
function IconTrophy() {
  return (
    <svg width="20" height="20" viewBox="0 0 24 24" {...S}>
      <path d="M6 9H3V4h3M18 9h3V4h-3M6 9a6 6 0 0012 0M8 21h8M12 15v6M6 4h12" />
    </svg>
  );
}
function IconTrendUp() {
  return (
    <svg width="20" height="20" viewBox="0 0 24 24" {...S}>
      <polyline points="23 6 13.5 15.5 8.5 10.5 1 18" />
      <polyline points="17 6 23 6 23 12" />
    </svg>
  );
}

// ─── Filled SVG icons (для "Скоро в Скиллум") ───────────────────────────────────
const F = "#9ba3a8";

function IconChatFill() {
  return (
    <svg width="16" height="16" viewBox="0 0 24 24" fill={F}>
      <path d="M21 15a2 2 0 01-2 2H7l-4 4V5a2 2 0 012-2h14a2 2 0 012 2z" />
    </svg>
  );
}
function IconMedalFill() {
  return (
    <svg width="16" height="16" viewBox="0 0 24 24" fill={F}>
      <circle cx="12" cy="14" r="7" />
      <path d="M8.21 3.06L6 8h12l-2.21-4.94A2 2 0 0013.95 2h-3.9a2 2 0 00-1.84 1.06z" />
    </svg>
  );
}
function IconUsersFill() {
  return (
    <svg width="16" height="16" viewBox="0 0 24 24" fill={F}>
      <path d="M17 21v-2a4 4 0 00-4-4H5a4 4 0 00-4 4v2h16zM9 11a4 4 0 100-8 4 4 0 000 8zM23 21v-2a4 4 0 00-3-3.87M16 3.13a4 4 0 010 7.75" stroke={F} strokeWidth="0" />
      <circle cx="9" cy="7" r="4" />
      <path d="M23 21v-2a4 4 0 00-3-3.87M16 3.13a4 4 0 010 7.75" fill="none" stroke={F} strokeWidth="1.6" strokeLinecap="round" />
      <path d="M1 21v-2a4 4 0 014-4h8a4 4 0 014 4v2z" />
    </svg>
  );
}
function IconBellFill() {
  return (
    <svg width="16" height="16" viewBox="0 0 24 24" fill={F}>
      <path d="M18 8A6 6 0 006 8c0 7-3 9-3 9h18s-3-2-3-9zM13.73 21a2 2 0 01-3.46 0" />
    </svg>
  );
}

// ─── Hero image with parallax ─────────────────────────────────────────────────
// Extra height for the parallax layer so overflow-hidden never clips the gradient
const PARALLAX_EXTRA = 60;

function HeroAbout() {
  const wrapRef = useRef<HTMLDivElement>(null);
  const [scrollY, setScrollY] = useState(0);

  useEffect(() => {
    const el = wrapRef.current?.closest(".overflow-y-auto") as HTMLElement | null;
    if (!el) return;
    const onScroll = () => setScrollY(el.scrollTop);
    el.addEventListener("scroll", onScroll, { passive: true });
    return () => el.removeEventListener("scroll", onScroll);
  }, []);

  const shiftFar  = scrollY * 0.10;  // гlow — самый медленный слой (фон)
  const shiftLogo = scrollY * 0.25;  // лого — быстрее, создаёт объём

  return (
    // Outer wrapper — NO overflow-hidden, glow rings render freely here
    <div ref={wrapRef} className="relative w-full" style={{ height: 220 }}>

      {/* Glow rings — параллакс медленнее лого для эффекта глубины */}
      <div
        className="absolute rounded-full pointer-events-none"
        style={{
          width: 400, height: 400,
          background: "radial-gradient(circle, rgba(255,107,33,0.20) 0%, transparent 65%)",
          top: "50%", left: "50%",
          transform: `translate(-50%, calc(-50% + ${shiftFar}px))`,
          willChange: "transform",
        }}
      />
      <div
        className="absolute rounded-full pointer-events-none"
        style={{
          width: 220, height: 220,
          background: "radial-gradient(circle, rgba(255,107,33,0.12) 0%, transparent 70%)",
          top: "50%", left: "35%",
          transform: `translate(-50%, calc(-50% + ${shiftFar * 0.7}px))`,
          willChange: "transform",
        }}
      />

      {/* Inner container — overflow-hidden only here, for rounded corners + logo clipping */}
      <div className="absolute inset-0 rounded-[20px] overflow-hidden">
        {/* Logo — параллакс быстрее гlow */}
        <div
          className="absolute inset-0 flex items-center justify-center"
          style={{ transform: `translateY(${shiftLogo}px)`, willChange: "transform" }}
        >
          <img
            src={skillumLongLogo}
            alt="Скиллум"
            style={{ width: 280, maxWidth: "88%", height: "auto", position: "relative", zIndex: 10 }}
          />
        </div>
      </div>
    </div>
  );
}

// ─── Section Title ────────────────────────────────────────────────────────────
function SectionTitle({ children }: { children: React.ReactNode }) {
  return (
    <p className="font-['Roboto_Condensed:Medium',sans-serif] font-medium text-[22px] text-[#f4f5fc] leading-snug">
      {children}
    </p>
  );
}

// ─── Problem card ─────────────────────────────────────────────────────────────
function ProblemCard({ icon, title, text }: { icon: string; title: string; text: string }) {
  return (
    <div
      className="flex flex-col gap-[12px] p-[20px] rounded-[16px] flex-1"
      style={{ background: "#343e42" }}
    >
      <div className="text-[26px] leading-none">{icon}</div>
      <p className="font-['Roboto_Condensed:Medium',sans-serif] font-medium text-[16px] text-[#f4f5fc] leading-snug">{title}</p>
      <p className="font-['Roboto_Condensed:Regular',sans-serif] font-normal text-[14px] text-[#798589] leading-[1.3]">{text}</p>
    </div>
  );
}

// ─── Feature row with colored icon bg ────────────────────────────────────────
function FeatureRow({ icon, iconBg, title, text }: { icon: string; iconBg: string; title: string; text: string }) {
  return (
    <div className="flex gap-[14px] items-start">
      <div
        className="flex items-center justify-center shrink-0 w-[46px] h-[46px] rounded-[12px] text-[20px]"
        style={{ background: iconBg }}
      >
        {icon}
      </div>
      <div className="flex flex-col gap-[3px] pt-[2px]">
        <p className="font-['Roboto_Condensed:Medium',sans-serif] font-medium text-[16px] text-[#f4f5fc]">{title}</p>
        <p className="font-['Roboto_Condensed:Regular',sans-serif] font-normal text-[14px] text-[#798589] leading-[1.3]">{text}</p>
      </div>
    </div>
  );
}

// ─── Orange CTA Button ────────────────────────────────────────────────────────
function PrimaryButton({ label, onClick }: { label: string; onClick: () => void }) {
  return (
    <button
      onClick={onClick}
      className="group relative h-[52px] rounded-[14px] w-full md:max-w-[280px] cursor-pointer select-none outline-none transition-transform duration-75 hover:translate-y-[3px] active:translate-y-[5px]"
    >
      <div className="bg-[#ff5d39] flex items-center justify-center px-6 relative rounded-[14px] size-full">
        <div
          aria-hidden="true"
          className="absolute border-[#ff390d] border border-solid inset-0 pointer-events-none rounded-[14px] transition-[box-shadow] duration-75 shadow-[0px_5px_0px_0px_#c24226] group-hover:shadow-[0px_2px_0px_0px_#c24226] group-active:shadow-none"
        />
        <span className="font-['Roboto_Condensed:Medium',sans-serif] font-medium text-[20px] text-white relative">{label}</span>
      </div>
    </button>
  );
}

// ─── Content ──────────────────────────────────────────────────────────────────
function AboutContent() {
  const navigate = useNavigate();
  const [showMessage, setShowMessage] = useState(false);

  return (
    <div className="flex flex-col gap-[44px] w-full">
      {showMessage && <MessageModal onClose={() => setShowMessage(false)} />}

      {/* ── Hero image ── */}
      <HeroAbout />

      {/* ── Hero text ── */}
      <div className="flex flex-col gap-[14px]">
        <div
          className="inline-flex items-center gap-[8px] px-[12px] py-[5px] rounded-full self-start"
          style={{ background: "#343e42" }}
        >
          <span className="text-[12px]">🚀</span>
          <span className="font-['Roboto_Condensed:Medium',sans-serif] font-medium text-[13px] text-[#9ba3a8]">Открытая бета</span>
        </div>

        <p className="font-['Roboto_Condensed:Medium',sans-serif] font-medium text-[28px] text-[#f4f5fc] leading-[1.2]">
          Скиллум — платформа, где дизайнеры прокачивают навыки через практику
        </p>
        <p className="font-['Roboto_Condensed:Regular',sans-serif] font-normal text-[17px] text-[#798589] leading-[1.3]">
          Не просто теория, а <span className="bg-[#46545b] rounded-[6px] px-[7px] py-[1px] text-[#f1f2fb]">реальные задания</span>, челленджи и обратная связь от менторов
        </p>

      </div>

      {/* ── Problem cards ── */}
      <div className="flex flex-col gap-[14px]">
        <SectionTitle>С чем сталкиваются дизайнеры</SectionTitle>
        <div className="flex flex-col gap-[10px] md:flex-row">
          <ProblemCard icon="📚" title="Много теории, мало практики" text="Часы видео, минимум реальных задач — знания не закрепляются" />
          <ProblemCard icon="🤔" title="Нет обратной связи" text="Непонятно, правильно ли сделано — нет кому проверить" />
          <ProblemCard icon="📉" title="Нет системы роста" text="Сложно отследить прогресс и понять что изучать дальше" />
        </div>
      </div>

      {/* ── Features ── */}
      <div className="flex flex-col gap-[16px]">
        <SectionTitle>Что есть в Скиллум</SectionTitle>
        <div
          className="flex flex-col gap-[0px] rounded-[16px] overflow-hidden"
          style={{ background: "#343e42" }}
        >
          {[
            { icon: <IconZap />,      bg: "#282F33", title: "Интерактивные задания", text: "Решаешь реальные задачи интерфейсов — не читаешь, а делаешь" },
            { icon: <IconTarget />,   bg: "#282F33", title: "Практика в Figma", text: "Задания прямо в инструменте дизайнера — не в абстрактной среде" },
            { icon: <IconChat />,     bg: "#282F33", title: "Обратная связь от менторов", text: "Живые люди проверяют домашки и дают конкретный фидбек" },
            { icon: <IconTrophy />,   bg: "#282F33", title: "Челленджи и соревнования", text: "Еженедельные вызовы, которые держат в тонусе" },
            { icon: <IconTrendUp />,  bg: "#282F33", title: "Прогресс, XP и уровни", text: "Видишь весь путь, знаешь куда идёшь и как далеко продвинулся" },
          ].map((item, i, arr) => (
            <div
              key={i}
              className="flex gap-[14px] items-center px-[18px] py-[14px]"
              style={{ borderBottom: "none" }}
            >
              <div
                className="flex items-center justify-center shrink-0 w-[40px] h-[40px] rounded-[10px] text-[18px]"
                style={{ background: item.bg }}
              >
                {item.icon}
              </div>
              <div>
                <p className="font-['Roboto_Condensed:Medium',sans-serif] font-medium text-[15px] text-[#f4f5fc]">{item.title}</p>
                <p className="font-['Roboto_Condensed:Regular',sans-serif] font-normal text-[13px] text-[#798589]">{item.text}</p>
              </div>
            </div>
          ))}
        </div>
      </div>

      {/* ── How it works ── */}
      <div className="flex flex-col gap-[14px]">
        <SectionTitle>Как это работает</SectionTitle>
        <div className="grid grid-cols-2 gap-[10px] md:grid-cols-4">
          {[
            { num: "1", text: "Проходишь урок" },
            { num: "2", text: "Решаешь задания" },
            { num: "3", text: "Получаешь фидбек" },
            { num: "4", text: "Растёшь как дизайнер" },
          ].map(({ num, text }) => (
            <div
              key={num}
              className="flex flex-col gap-[10px] items-center text-center p-[16px] rounded-[14px] flex-1"
              style={{ background: "#343e42" }}
            >
              <div
                className="flex items-center justify-center w-[34px] h-[34px] rounded-full font-['Roboto_Condensed:Medium',sans-serif] font-medium text-[16px]"
                style={{ background: "#2C3438", color: "#9ba3a8" }}
              >
                {num}
              </div>
              <p className="font-['Roboto_Condensed:Medium',sans-serif] font-medium text-[14px] text-[#c8cdd0] leading-snug">{text}</p>
            </div>
          ))}
        </div>
      </div>

      {/* ── Why we made it ── */}
      <div
        className="flex flex-col gap-[12px] p-[20px] rounded-[16px]"
        style={{ background: "#343e42" }}
      >
        <span className="text-[22px]">💡</span>
        <SectionTitle>Почему мы это сделали</SectionTitle>
        <p className="font-['Roboto_Condensed:Regular',sans-serif] font-normal text-[15px] text-[#9ba3a8] leading-[1.3]">
          Мы сами проходили курсы, где много теории, но мало практики. После урока —
          ощущение, что ничего не осталось. Поэтому сделали продукт, который помогает{" "}
          <span className="bg-[#46545b] rounded-[6px] px-[7px] py-[1px] text-[#f1f2fb]">реально прокачивать навыки</span>,
          а не просто смотреть уроки.
        </p>
      </div>

      {/* ── Advantages 2×2 ── */}
      <div className="flex flex-col gap-[14px]">
        <SectionTitle>Почему Скиллум</SectionTitle>
        <div className="grid grid-cols-2 gap-[10px]">
          {[
            { icon: "🔁", text: "Практика → потом теория" },
            { icon: "✅", text: "Реальные задачи" },
            { icon: "🗣️", text: "Живая обратная связь" },
            { icon: "🎮", text: "Хочется возвращаться" },
          ].map(({ icon, text }) => (
            <div
              key={text}
              className="flex items-center gap-[10px] p-[14px] rounded-[14px]"
              style={{ background: "#343e42" }}
            >
              <span className="text-[20px] shrink-0">{icon}</span>
              <span className="font-['Roboto_Condensed:Medium',sans-serif] font-medium text-[14px] text-[#c8cdd0] leading-snug">{text}</span>
            </div>
          ))}
        </div>
      </div>

      {/* ── Team ── */}
      <div
        className="flex gap-[14px] items-start p-[18px] rounded-[16px]"
        style={{ background: "#343e42" }}
      >
        <div
          className="flex items-center justify-center shrink-0 w-[46px] h-[46px] rounded-[12px] text-[20px]"
          style={{ background: "#2C3438" }}
        >
          👨‍🏫
        </div>
        <div>
          <p className="font-['Roboto_Condensed:Medium',sans-serif] font-medium text-[16px] text-[#f4f5fc] mb-[4px]">Команда с опытом в образовании</p>
          <p className="font-['Roboto_Condensed:Regular',sans-serif] font-normal text-[14px] text-[#798589] leading-[1.3]">
            В команде <span className="bg-[#46545b] rounded-[6px] px-[7px] py-[1px] text-[#f1f2fb]">методолог</span> и преподаватель с опытом в образовательных проектах.
            Контент построен так, чтобы знания действительно закреплялись.
          </p>
        </div>
      </div>

      {/* ── Coming soon ── */}
      <div className="flex flex-col gap-[12px]">
        <SectionTitle>Скоро в Скиллум</SectionTitle>
        <div className="flex flex-wrap gap-[8px]">
          {[
            {
              icon: <svg width="16" height="16" viewBox="0 0 24 24" fill="#9ba3a8"><path d="M12 2L2 7l10 5 10-5-10-5zM2 17l10 5 10-5M2 12l10 5 10-5"/></svg>,
              label: "Новые курсы",
            },
            {
              icon: <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="#9ba3a8" strokeWidth="2" strokeLinecap="round"><circle cx="12" cy="12" r="10"/><polyline points="12 6 12 12 16 14"/></svg>,
              label: "Ежедневные задачи",
            },
            {
              icon: <svg width="16" height="16" viewBox="0 0 24 24" fill="#9ba3a8"><path d="M12 2a5 5 0 100 10A5 5 0 0012 2zM12 14c-5.33 0-8 2.67-8 4v2h16v-2c0-1.33-2.67-4-8-4z"/></svg>,
              label: "Ментор-ревью",
            },
          ].map(({ icon, label }) => (
            <span
              key={label}
              className="flex items-center gap-[6px] font-['Roboto_Condensed:Medium',sans-serif] font-medium text-[13px] text-[#9ba3a8] px-[12px] py-[6px] rounded-full"
              style={{ background: "#343e42", opacity: 0.5 }}
            >
              {icon}
              {label}
            </span>
          ))}
        </div>
      </div>

      {/* ── Contact ── */}
      <div className="flex flex-col gap-[12px]">
        <SectionTitle>Есть вопросы?</SectionTitle>
        <p className="font-['Roboto_Condensed:Regular',sans-serif] font-normal text-[15px] text-[#798589]">
          Ждём ваши предложения и обратную связь
        </p>
        <div className="flex gap-[10px] flex-wrap">
          {/* Email */}
          <a
            href="mailto:Pavlov-evgenii@list.ru"
            className="flex items-center gap-[8px] h-[46px] px-[20px] rounded-[14px] transition-colors duration-150 hover:opacity-80"
            style={{ background: "#343e42" }}
          >
            <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="#9ba3a8" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
              <path d="M4 4h16c1.1 0 2 .9 2 2v12c0 1.1-.9 2-2 2H4c-1.1 0-2-.9-2-2V6c0-1.1.9-2 2-2z"/><polyline points="22,6 12,13 2,6"/>
            </svg>
            <span className="font-['Roboto_Condensed:Medium',sans-serif] font-medium text-[16px] text-[#f4f5fc]">Email</span>
          </a>
          {/* Telegram */}
          <a
            href="https://t.me/Evgeniy9292"
            target="_blank"
            rel="noopener noreferrer"
            className="flex items-center gap-[8px] h-[46px] px-[20px] rounded-[14px] transition-colors duration-150 hover:opacity-80"
            style={{ background: "#343e42" }}
          >
            <svg width="16" height="16" viewBox="0 0 24 24" fill="#9ba3a8">
              <path d="M22 2L11 13M22 2L15 22l-4-9-9-4 20-7z"/>
            </svg>
            <span className="font-['Roboto_Condensed:Medium',sans-serif] font-medium text-[16px] text-[#f4f5fc]">Telegram</span>
          </a>
          {/* Write here */}
          <button
            onClick={() => setShowMessage(true)}
            className="flex items-center gap-[8px] h-[46px] px-[20px] rounded-[14px] transition-colors duration-150 hover:opacity-80 active:opacity-70"
            style={{ background: "#FF6B21" }}
          >
            <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="white" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
              <path d="M21 15a2 2 0 01-2 2H7l-4 4V5a2 2 0 012-2h14a2 2 0 012 2z"/>
            </svg>
            <span className="font-['Roboto_Condensed:Medium',sans-serif] font-medium text-[16px] text-white">Написать нам</span>
          </button>
        </div>
      </div>

      {/* ── Соцсети ── */}
      <div className="flex flex-col gap-[12px]">
        <SectionTitle>Мы в соцсетях</SectionTitle>
        <div className="flex gap-[10px] flex-wrap">
          {/* TG канал */}
          <a
            href="https://t.me/smart_des"
            target="_blank"
            rel="noopener noreferrer"
            className="flex items-center gap-[8px] h-[46px] px-[20px] rounded-[14px] transition-colors duration-150 hover:opacity-80"
            style={{ background: "#343e42" }}
          >
            <svg width="16" height="16" viewBox="0 0 24 24" fill="#9ba3a8">
              <path d="M22 2L11 13M22 2L15 22l-4-9-9-4 20-7z"/>
            </svg>
            <span className="font-['Roboto_Condensed:Medium',sans-serif] font-medium text-[16px] text-[#f4f5fc]">TG канал</span>
          </a>
        </div>
      </div>

    </div>
  );
}

// ─── Page ─────────────────────────────────────────────────────────────────────
export default function AboutPage() {
  return (
    <div className="about-page size-full">
      <Layout
        title="О проекте"
        rightContent={<RightWidgets />}
        leftWidth="660px"
        rightWidth="320px"
      >
        <AboutContent />
      </Layout>
    </div>
  );
}
