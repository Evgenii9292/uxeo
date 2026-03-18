import { useNavigate } from "react-router";
import { useRef, useState, useEffect } from "react";
import Layout from "../components/Layout";
import RightWidgets from "../components/RightWidgets";
import uxeoLogo from "../../assets/uxeo-logo.svg";

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

  const shift = scrollY * 0.25;

  return (
    <div ref={wrapRef} className="rounded-[20px] overflow-hidden relative w-full" style={{ height: 220 }}>
      {/* Dark base */}
      <div className="absolute inset-0" style={{ background: "#2D363A" }} />

      {/* Glow rings — static, never clipped */}
      <div
        className="absolute rounded-full pointer-events-none"
        style={{
          width: 340, height: 340,
          background: "radial-gradient(circle, rgba(255,107,33,0.18) 0%, transparent 65%)",
          top: "50%", left: "50%", transform: "translate(-50%, -50%)",
        }}
      />
      <div
        className="absolute rounded-full pointer-events-none"
        style={{
          width: 200, height: 200,
          background: "radial-gradient(circle, rgba(255,107,33,0.10) 0%, transparent 70%)",
          top: "50%", left: "32%", transform: "translate(-50%, -50%)",
        }}
      />

      {/* Logo only — parallaxes */}
      <div
        className="absolute inset-0 flex items-center justify-center"
        style={{ transform: `translateY(${shift}px)`, willChange: "transform" }}
      >
        <img
          src={uxeoLogo}
          alt="UXEO"
          style={{ width: 200, height: "auto", position: "relative", zIndex: 10 }}
        />
      </div>
    </div>
  );
}

// ─── Section Title ────────────────────────────────────────────────────────────
function SectionTitle({ children }: { children: React.ReactNode }) {
  return (
    <p className="font-['Roboto_Condensed:Bold',sans-serif] font-bold text-[22px] text-[#f4f5fc] leading-snug">
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
      <p className="font-['Roboto_Condensed:Bold',sans-serif] font-bold text-[16px] text-[#f4f5fc] leading-snug">{title}</p>
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
        <p className="font-['Roboto_Condensed:Bold',sans-serif] font-bold text-[16px] text-[#f4f5fc]">{title}</p>
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
      className="group relative h-[52px] rounded-[14px] w-full max-w-[280px] cursor-pointer select-none outline-none transition-transform duration-75 hover:translate-y-[3px] active:translate-y-[5px]"
    >
      <div className="bg-[#ff5d39] flex items-center justify-center px-6 relative rounded-[14px] size-full">
        <div
          aria-hidden="true"
          className="absolute border-[#ff390d] border border-solid inset-0 pointer-events-none rounded-[14px] transition-[box-shadow] duration-75 shadow-[0px_5px_0px_0px_#c24226] group-hover:shadow-[0px_2px_0px_0px_#c24226] group-active:shadow-none"
        />
        <span className="font-['Roboto_Condensed:Bold',sans-serif] font-bold text-[20px] text-white relative">{label}</span>
      </div>
    </button>
  );
}

// ─── Content ──────────────────────────────────────────────────────────────────
function AboutContent() {
  const navigate = useNavigate();

  return (
    <div className="flex flex-col gap-[44px] w-full">

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

        <p className="font-['Roboto_Condensed:Bold',sans-serif] font-bold text-[28px] text-[#f4f5fc] leading-[1.2]">
          UXEO — платформа, где дизайнеры прокачивают навыки через практику
        </p>
        <p className="font-['Roboto_Condensed:Regular',sans-serif] font-normal text-[17px] text-[#798589] leading-[1.3]">
          Не просто теория, а <span className="bg-[#46545b] rounded-[6px] px-[7px] py-[1px] text-[#f1f2fb]">реальные задания</span>, челленджи и обратная связь от менторов
        </p>

        <PrimaryButton label="Начать обучение" onClick={() => navigate("/level")} />
      </div>

      {/* ── Problem cards ── */}
      <div className="flex flex-col gap-[14px]">
        <SectionTitle>С чем сталкиваются дизайнеры</SectionTitle>
        <div className="flex gap-[10px]">
          <ProblemCard icon="📚" title="Много теории, мало практики" text="Часы видео, минимум реальных задач — знания не закрепляются" />
          <ProblemCard icon="🤔" title="Нет обратной связи" text="Непонятно, правильно ли сделано — нет кому проверить" />
          <ProblemCard icon="📉" title="Нет системы роста" text="Сложно отследить прогресс и понять что изучать дальше" />
        </div>
      </div>

      {/* ── Features ── */}
      <div className="flex flex-col gap-[16px]">
        <SectionTitle>Что есть в UXEO</SectionTitle>
        <div
          className="flex flex-col gap-[0px] rounded-[16px] overflow-hidden"
          style={{ background: "#343e42" }}
        >
          {[
            { icon: "⚡", bg: "#2A3F4A", title: "Интерактивные задания", text: "Решаешь реальные задачи интерфейсов — не читаешь, а делаешь" },
            { icon: "🎯", bg: "#3A2A4A", title: "Практика в Figma", text: "Задания прямо в инструменте дизайнера — не в абстрактной среде" },
            { icon: "💬", bg: "#2A3A4A", title: "Обратная связь от менторов", text: "Живые люди проверяют домашки и дают конкретный фидбек" },
            { icon: "🏆", bg: "#3A3A2A", title: "Челленджи и соревнования", text: "Еженедельные вызовы, которые держат в тонусе" },
            { icon: "📈", bg: "#2A3A3A", title: "Прогресс, XP и уровни", text: "Видишь весь путь, знаешь куда идёшь и как далеко продвинулся" },
          ].map((item, i, arr) => (
            <div
              key={item.title}
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
                <p className="font-['Roboto_Condensed:Bold',sans-serif] font-bold text-[15px] text-[#f4f5fc]">{item.title}</p>
                <p className="font-['Roboto_Condensed:Regular',sans-serif] font-normal text-[13px] text-[#798589]">{item.text}</p>
              </div>
            </div>
          ))}
        </div>
      </div>

      {/* ── How it works ── */}
      <div className="flex flex-col gap-[14px]">
        <SectionTitle>Как это работает</SectionTitle>
        <div className="flex gap-[10px]">
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
                className="flex items-center justify-center w-[34px] h-[34px] rounded-full font-['Roboto_Condensed:Bold',sans-serif] font-bold text-[16px]"
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
        <SectionTitle>Почему UXEO</SectionTitle>
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
          <p className="font-['Roboto_Condensed:Bold',sans-serif] font-bold text-[16px] text-[#f4f5fc] mb-[4px]">Команда с опытом в образовании</p>
          <p className="font-['Roboto_Condensed:Regular',sans-serif] font-normal text-[14px] text-[#798589] leading-[1.3]">
            В команде <span className="bg-[#46545b] rounded-[6px] px-[7px] py-[1px] text-[#f1f2fb]">методолог</span> и преподаватель с опытом в образовательных проектах.
            Контент построен так, чтобы знания действительно закреплялись.
          </p>
        </div>
      </div>

      {/* ── Coming soon ── */}
      <div className="flex flex-col gap-[12px]">
        <SectionTitle>Скоро в UXEO</SectionTitle>
        <div className="flex flex-wrap gap-[8px]">
          {["💬 Чат сообщества", "🏅 Лиги", "🤝 Парные задания", "🔔 Уведомления"].map((tag) => (
            <span
              key={tag}
              className="font-['Roboto_Condensed:Medium',sans-serif] font-medium text-[13px] text-[#9ba3a8] px-[12px] py-[6px] rounded-full"
              style={{ background: "#343e42" }}
            >
              {tag}
            </span>
          ))}
        </div>
      </div>

      {/* ── Contact ── */}
      <div className="flex flex-col gap-[12px]">
        <SectionTitle>Есть вопросы?</SectionTitle>
        <p className="font-['Roboto_Condensed:Regular',sans-serif] font-normal text-[15px] text-[#798589]">
          Напишите нам — ответим быстро
        </p>
        <div className="flex gap-[12px] flex-wrap">
          <a
            href="mailto:hello@uxeo.app"
            className="flex items-center justify-center h-[46px] px-[24px] rounded-[14px] transition-colors duration-150"
            style={{ background: "#343e42" }}
          >
            <span className="font-['Roboto_Condensed:Bold',sans-serif] font-bold text-[16px] text-[#f4f5fc]">Написать</span>
          </a>
          <PrimaryButton label="Начать бесплатно" onClick={() => navigate("/level")} />
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
        showBack
        backPath="/courses"
        rightContent={<RightWidgets />}
        leftWidth="660px"
        rightWidth="320px"
      >
        <AboutContent />
      </Layout>
    </div>
  );
}
