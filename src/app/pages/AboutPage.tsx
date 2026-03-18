import { useNavigate } from "react-router";

// ─── Logo ─────────────────────────────────────────────────────────────────────
function Logo() {
  return (
    <div className="flex gap-[10px] items-center">
      <svg width="18" height="26" viewBox="0 0 21.38 31.16" fill="none">
        <path
          d="M10.69 0C10.69 0 0 10.5 0 19.5C0 25.3 4.8 31.16 10.69 31.16C16.58 31.16 21.38 25.3 21.38 19.5C21.38 10.5 10.69 0 10.69 0Z"
          fill="url(#flame_about)"
        />
        <defs>
          <linearGradient id="flame_about" x1="9" y1="13.36" x2="-7" y2="30.86" gradientUnits="userSpaceOnUse">
            <stop stopColor="#FF6B21" />
            <stop offset="1" stopColor="#994014" />
          </linearGradient>
        </defs>
      </svg>
      <span className="font-['Roboto_Condensed:Bold',sans-serif] font-bold text-[28px] text-[#f4f5fc]">UXEO</span>
    </div>
  );
}

// ─── Orange CTA Button ────────────────────────────────────────────────────────
function PrimaryButton({ label, onClick }: { label: string; onClick: () => void }) {
  return (
    <button
      onClick={onClick}
      className="group relative h-[56px] rounded-[14px] w-full max-w-[320px] cursor-pointer select-none outline-none transition-transform duration-75 hover:translate-y-[3px] active:translate-y-[5px]"
    >
      <div className="bg-[#ff5d39] flex items-center justify-center px-6 relative rounded-[14px] size-full">
        <div
          aria-hidden="true"
          className="absolute border-[#ff390d] border border-solid inset-0 pointer-events-none rounded-[14px] transition-[box-shadow] duration-75 shadow-[0px_5px_0px_0px_#c24226] group-hover:shadow-[0px_2px_0px_0px_#c24226] group-active:shadow-none"
        />
        <span className="font-['Roboto_Condensed:Bold',sans-serif] font-bold text-[22px] text-white relative">
          {label}
        </span>
      </div>
    </button>
  );
}

// ─── Section Title ────────────────────────────────────────────────────────────
function SectionTitle({ children }: { children: React.ReactNode }) {
  return (
    <h2 className="font-['Roboto_Condensed:Bold',sans-serif] font-bold text-[26px] text-[#f4f5fc] leading-tight">
      {children}
    </h2>
  );
}

// ─── Card ────────────────────────────────────────────────────────────────────
function Card({ icon, title, text }: { icon: string; title: string; text: string }) {
  return (
    <div
      className="flex flex-col gap-[12px] p-[20px] rounded-[16px]"
      style={{ background: "rgba(255,255,255,0.05)", border: "1px solid rgba(255,255,255,0.07)" }}
    >
      <div className="text-[28px] leading-none">{icon}</div>
      <p className="font-['Roboto_Condensed:Bold',sans-serif] font-bold text-[18px] text-[#f4f5fc] leading-snug">
        {title}
      </p>
      <p className="font-['Roboto_Condensed:Regular',sans-serif] font-normal text-[15px] text-[#9ba3a8] leading-relaxed">
        {text}
      </p>
    </div>
  );
}

// ─── Feature Row ──────────────────────────────────────────────────────────────
function FeatureRow({ icon, title, text }: { icon: string; title: string; text: string }) {
  return (
    <div className="flex gap-[16px] items-start">
      <div
        className="flex items-center justify-center shrink-0 w-[48px] h-[48px] rounded-[12px] text-[22px]"
        style={{ background: "rgba(255, 107, 33, 0.15)" }}
      >
        {icon}
      </div>
      <div className="flex flex-col gap-[4px]">
        <p className="font-['Roboto_Condensed:Bold',sans-serif] font-bold text-[17px] text-[#f4f5fc]">{title}</p>
        <p className="font-['Roboto_Condensed:Regular',sans-serif] font-normal text-[14px] text-[#9ba3a8] leading-relaxed">{text}</p>
      </div>
    </div>
  );
}

// ─── Step ─────────────────────────────────────────────────────────────────────
function Step({ num, text }: { num: number; text: string }) {
  return (
    <div className="flex gap-[16px] items-center">
      <div
        className="flex items-center justify-center shrink-0 w-[40px] h-[40px] rounded-full font-['Roboto_Condensed:Bold',sans-serif] font-bold text-[18px]"
        style={{ background: "linear-gradient(135deg, #FF6B21, #c24226)", color: "#fff" }}
      >
        {num}
      </div>
      <p className="font-['Roboto_Condensed:Medium',sans-serif] font-medium text-[17px] text-[#e0e2e8]">{text}</p>
    </div>
  );
}

// ─── Page ─────────────────────────────────────────────────────────────────────
export default function AboutPage() {
  const navigate = useNavigate();

  return (
    <div
      className="relative min-h-screen w-full overflow-x-hidden"
      style={{ background: "linear-gradient(165.05deg, rgb(44, 52, 56) 14.367%, rgb(46, 57, 62) 147.74%)" }}
    >
      {/* Glow decoration */}
      <div
        className="absolute top-[-80px] left-1/2 -translate-x-1/2 w-[500px] h-[300px] pointer-events-none"
        style={{ background: "radial-gradient(ellipse, rgba(255,107,33,0.12) 0%, transparent 70%)" }}
      />

      <div className="relative mx-auto w-full max-w-[640px] px-[20px] pb-[60px]">

        {/* ── Nav bar ── */}
        <div className="flex items-center justify-between pt-[28px] pb-[40px]">
          <Logo />
          <button
            onClick={() => navigate(-1)}
            className="font-['Roboto_Condensed:Medium',sans-serif] font-medium text-[15px] text-[#9ba3a8] hover:text-[#f4f5fc] transition-colors"
          >
            ← Назад
          </button>
        </div>

        {/* ── 1. Hero ── */}
        <div className="flex flex-col gap-[24px] mb-[56px]">
          <div
            className="inline-flex items-center gap-[8px] px-[14px] py-[6px] rounded-full self-start"
            style={{ background: "rgba(255, 107, 33, 0.15)", border: "1px solid rgba(255,107,33,0.3)" }}
          >
            <span className="text-[13px]">🚀</span>
            <span className="font-['Roboto_Condensed:Medium',sans-serif] font-medium text-[13px] text-[#FF6B21]">
              Открытая бета
            </span>
          </div>

          <h1 className="font-['Roboto_Condensed:Bold',sans-serif] font-bold text-[34px] text-[#f4f5fc] leading-[1.15]">
            UXEO — платформа, где дизайнеры прокачивают навыки через практику
          </h1>

          <p className="font-['Roboto_Condensed:Regular',sans-serif] font-normal text-[18px] text-[#9ba3a8] leading-relaxed">
            Не просто теория, а реальные задания, челленджи и обратная связь от менторов
          </p>

          <PrimaryButton label="Начать обучение" onClick={() => navigate("/level")} />
        </div>

        {/* ── 2. Проблема ── */}
        <div className="flex flex-col gap-[20px] mb-[56px]">
          <SectionTitle>С чем сталкиваются дизайнеры</SectionTitle>
          <div className="grid grid-cols-1 gap-[12px] sm:grid-cols-3">
            <Card
              icon="📚"
              title="Много теории, мало практики"
              text="Часы видео, минимум реальных задач — знания не закрепляются"
            />
            <Card
              icon="🤔"
              title="Нет обратной связи"
              text="Непонятно, правильно ли сделано — нет кому проверить"
            />
            <Card
              icon="📉"
              title="Нет системы роста"
              text="Сложно отследить прогресс и понять что изучать дальше"
            />
          </div>
        </div>

        {/* ── 3. Решение ── */}
        <div className="flex flex-col gap-[20px] mb-[56px]">
          <SectionTitle>Что есть в UXEO</SectionTitle>
          <div className="flex flex-col gap-[16px]">
            <FeatureRow
              icon="⚡"
              title="Интерактивные UX/UI задания"
              text="Решаешь реальные задачи интерфейсов — не читаешь, а делаешь"
            />
            <FeatureRow
              icon="🎯"
              title="Практика в Figma"
              text="Задания прямо в инструменте дизайнера — не в абстрактной среде"
            />
            <FeatureRow
              icon="💬"
              title="Обратная связь от менторов"
              text="Живые люди проверяют домашки и дают конкретный фидбек"
            />
            <FeatureRow
              icon="🏆"
              title="Челленджи и соревнования"
              text="Еженедельные вызовы, которые держат в тонусе"
            />
            <FeatureRow
              icon="📈"
              title="Прогресс, XP и уровни"
              text="Видишь весь путь, знаешь куда идёшь и как далеко продвинулся"
            />
          </div>
        </div>

        {/* ── 4. Как это работает ── */}
        <div className="flex flex-col gap-[20px] mb-[56px]">
          <SectionTitle>Как это работает</SectionTitle>
          <div
            className="flex flex-col gap-[0px] rounded-[16px] overflow-hidden"
            style={{ border: "1px solid rgba(255,255,255,0.07)" }}
          >
            {[
              "Проходишь урок по роудмапу",
              "Решаешь квиз и задания",
              "Выполняешь домашку в Figma",
              "Получаешь фидбек от ментора",
            ].map((text, i) => (
              <div
                key={i}
                className="flex gap-[16px] items-center px-[20px] py-[18px]"
                style={{
                  background: i % 2 === 0 ? "rgba(255,255,255,0.03)" : "transparent",
                  borderBottom: i < 3 ? "1px solid rgba(255,255,255,0.05)" : "none",
                }}
              >
                <div
                  className="flex items-center justify-center shrink-0 w-[36px] h-[36px] rounded-full font-['Roboto_Condensed:Bold',sans-serif] font-bold text-[16px]"
                  style={{ background: "rgba(255, 107, 33, 0.2)", color: "#FF6B21" }}
                >
                  {i + 1}
                </div>
                <p className="font-['Roboto_Condensed:Medium',sans-serif] font-medium text-[16px] text-[#e0e2e8]">
                  {text}
                </p>
              </div>
            ))}
          </div>
        </div>

        {/* ── 5. Почему мы это сделали ── */}
        <div
          className="flex flex-col gap-[16px] p-[24px] rounded-[16px] mb-[56px]"
          style={{
            background: "rgba(255,107,33,0.08)",
            border: "1px solid rgba(255,107,33,0.2)",
          }}
        >
          <p className="text-[24px]">💡</p>
          <SectionTitle>Почему мы это сделали</SectionTitle>
          <p className="font-['Roboto_Condensed:Regular',sans-serif] font-normal text-[16px] text-[#b0b8be] leading-relaxed">
            Мы сами проходили курсы, где много теории, но мало практики. После урока — ощущение,
            что ничего не осталось. Поэтому сделали продукт, который помогает{" "}
            <span className="text-[#f4f5fc] font-['Roboto_Condensed:Medium',sans-serif] font-medium">
              реально прокачивать навыки
            </span>
            , а не просто смотреть уроки.
          </p>
        </div>

        {/* ── 6. Преимущества ── */}
        <div className="flex flex-col gap-[20px] mb-[56px]">
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
                style={{ background: "rgba(255,255,255,0.05)", border: "1px solid rgba(255,255,255,0.07)" }}
              >
                <span className="text-[20px] shrink-0">{icon}</span>
                <span className="font-['Roboto_Condensed:Medium',sans-serif] font-medium text-[14px] text-[#e0e2e8] leading-snug">
                  {text}
                </span>
              </div>
            ))}
          </div>
        </div>

        {/* ── 7. Доверие ── */}
        <div
          className="flex gap-[16px] items-start p-[20px] rounded-[16px] mb-[56px]"
          style={{ background: "rgba(255,255,255,0.04)", border: "1px solid rgba(255,255,255,0.07)" }}
        >
          <div
            className="flex items-center justify-center shrink-0 w-[48px] h-[48px] rounded-full text-[22px]"
            style={{ background: "rgba(255,107,33,0.15)" }}
          >
            👨‍🏫
          </div>
          <div>
            <p className="font-['Roboto_Condensed:Bold',sans-serif] font-bold text-[17px] text-[#f4f5fc] mb-[6px]">
              Команда с опытом в образовании
            </p>
            <p className="font-['Roboto_Condensed:Regular',sans-serif] font-normal text-[14px] text-[#9ba3a8] leading-relaxed">
              В команде методолог и преподаватель с опытом в образовательных проектах.
              Контент построен так, чтобы знания действительно закреплялись.
            </p>
          </div>
        </div>

        {/* ── Скоро ── */}
        <div
          className="flex flex-col gap-[12px] p-[20px] rounded-[16px] mb-[56px]"
          style={{ background: "rgba(255,255,255,0.03)", border: "1px solid rgba(255,255,255,0.06)" }}
        >
          <p className="font-['Roboto_Condensed:Bold',sans-serif] font-bold text-[16px] text-[#777982]">
            Скоро в UXEO
          </p>
          <div className="flex flex-wrap gap-[8px]">
            {["💬 Чат сообщества", "🏅 Лиги", "🤝 Парные задания", "🔔 Уведомления"].map((tag) => (
              <span
                key={tag}
                className="font-['Roboto_Condensed:Medium',sans-serif] font-medium text-[13px] text-[#9ba3a8] px-[12px] py-[6px] rounded-full"
                style={{ background: "rgba(255,255,255,0.06)" }}
              >
                {tag}
              </span>
            ))}
          </div>
        </div>

        {/* ── 8. Контакты ── */}
        <div className="flex flex-col gap-[16px] items-center text-center mb-[20px]">
          <h2 className="font-['Roboto_Condensed:Bold',sans-serif] font-bold text-[24px] text-[#f4f5fc]">
            Есть вопросы?
          </h2>
          <p className="font-['Roboto_Condensed:Regular',sans-serif] font-normal text-[16px] text-[#9ba3a8]">
            Напишите нам — ответим быстро
          </p>
          <a
            href="mailto:hello@uxeo.app"
            className="group relative h-[52px] rounded-[14px] w-full max-w-[280px] cursor-pointer select-none outline-none flex items-center justify-center transition-colors duration-150"
            style={{ background: "rgba(255,255,255,0.08)", border: "1px solid rgba(255,255,255,0.12)" }}
          >
            <span className="font-['Roboto_Condensed:Bold',sans-serif] font-bold text-[18px] text-[#f4f5fc]">
              Написать
            </span>
          </a>

          <div className="mt-[16px]">
            <PrimaryButton label="Начать бесплатно" onClick={() => navigate("/level")} />
          </div>
        </div>

      </div>
    </div>
  );
}
