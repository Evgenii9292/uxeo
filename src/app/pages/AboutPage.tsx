import { useNavigate } from "react-router";
import Layout from "../components/Layout";
import RightWidgets from "../components/RightWidgets";

// ─── Shared primitives (same style as TheoryLesson) ──────────────────────────

/** Horizontal rule — identical to TheoryShared's ContentDivider */
function Divider() {
  return (
    <div className="h-0 relative shrink-0 w-full opacity-40 my-[4px]">
      <div className="absolute inset-[-0.5px_0]">
        <svg className="block w-full" fill="none" viewBox="0 0 493 1">
          <path d="M0.5 0.5H492.5" stroke="#5B6E77" strokeLinecap="round" />
        </svg>
      </div>
    </div>
  );
}

/** Inline highlight — same as <span class="bg-[#46545b] rounded-[6px] px-[7px] py-[1px]"> in Theory */
function Hi({ children }: { children: React.ReactNode }) {
  return (
    <span className="bg-[#46545b] rounded-[6px] px-[7px] py-[1px] text-[#f1f2fb]">
      {children}
    </span>
  );
}

/** Section heading */
function SectionTitle({ children }: { children: React.ReactNode }) {
  return (
    <p className="font-['Roboto_Condensed:Bold',sans-serif] font-bold text-[22px] text-[#f1f2fb] leading-snug">
      {children}
    </p>
  );
}

/** Dark icon pill — project palette, no orange */
function IconPill({ children, color }: { children: React.ReactNode; color: string }) {
  return (
    <div
      className="flex items-center justify-center shrink-0 w-[44px] h-[44px] rounded-[12px] text-[20px]"
      style={{ background: color }}
    >
      {children}
    </div>
  );
}

/** Feature row — icon + title + subtitle */
function FeatureRow({
  icon, iconBg, title, text,
}: { icon: string; iconBg: string; title: string; text: string }) {
  return (
    <div className="flex gap-[14px] items-start">
      <IconPill color={iconBg}>{icon}</IconPill>
      <div className="flex flex-col gap-[2px] pt-[2px]">
        <p className="font-['Roboto_Condensed:Bold',sans-serif] font-bold text-[17px] text-[#f1f2fb]">{title}</p>
        <p className="font-['Roboto_Condensed:Regular',sans-serif] font-normal text-[15px] text-[#798589] leading-relaxed">{text}</p>
      </div>
    </div>
  );
}

/** Numbered step row */
function Step({ num, text }: { num: number; text: string }) {
  return (
    <div className="flex gap-[14px] items-center px-[20px] py-[16px]"
      style={{
        borderBottom: num < 4 ? "1px solid rgba(255,255,255,0.06)" : "none",
      }}
    >
      <div
        className="flex items-center justify-center shrink-0 w-[32px] h-[32px] rounded-full font-['Roboto_Condensed:Bold',sans-serif] font-bold text-[15px]"
        style={{ background: "#374348", color: "#9ba3a8" }}
      >
        {num}
      </div>
      <p className="font-['Roboto_Condensed:Medium',sans-serif] font-medium text-[16px] text-[#e0e2e8]">{text}</p>
    </div>
  );
}

/** Small badge chip */
function Chip({ children }: { children: React.ReactNode }) {
  return (
    <span
      className="font-['Roboto_Condensed:Medium',sans-serif] font-medium text-[13px] text-[#9ba3a8] px-[12px] py-[5px] rounded-full"
      style={{ background: "#374348" }}
    >
      {children}
    </span>
  );
}

/** Orange CTA button */
function PrimaryButton({ label, onClick }: { label: string; onClick: () => void }) {
  return (
    <button
      onClick={onClick}
      className="group relative h-[52px] rounded-[14px] w-full max-w-[300px] cursor-pointer select-none outline-none transition-transform duration-75 hover:translate-y-[3px] active:translate-y-[5px]"
    >
      <div className="bg-[#ff5d39] flex items-center justify-center px-6 relative rounded-[14px] size-full">
        <div
          aria-hidden="true"
          className="absolute border-[#ff390d] border border-solid inset-0 pointer-events-none rounded-[14px] transition-[box-shadow] duration-75 shadow-[0px_5px_0px_0px_#c24226] group-hover:shadow-[0px_2px_0px_0px_#c24226] group-active:shadow-none"
        />
        <span className="font-['Roboto_Condensed:Bold',sans-serif] font-bold text-[20px] text-white relative">
          {label}
        </span>
      </div>
    </button>
  );
}

// ─── Content ──────────────────────────────────────────────────────────────────
function AboutContent() {
  const navigate = useNavigate();

  return (
    <div className="flex flex-col gap-[28px] w-full font-['Roboto_Condensed:Regular',sans-serif] text-[#f1f2fb] text-[18px]">

      {/* ── Badge + Hero text ── */}
      <div className="flex flex-col gap-[16px]">
        <div
          className="inline-flex items-center gap-[8px] px-[12px] py-[5px] rounded-full self-start"
          style={{ background: "#374348", border: "1px solid rgba(255,255,255,0.08)" }}
        >
          <span className="text-[12px]">🚀</span>
          <span className="font-['Roboto_Condensed:Medium',sans-serif] font-medium text-[13px] text-[#9ba3a8]">
            Открытая бета
          </span>
        </div>

        <div className="flex flex-col gap-[12px]">
          <p className="font-['Roboto_Condensed:Bold',sans-serif] font-bold text-[28px] text-[#f1f2fb] leading-[1.2]">
            UXEO — платформа, где дизайнеры прокачивают навыки через{" "}
            <Hi>практику</Hi>
          </p>
          <p className="text-[#798589] text-[17px] leading-relaxed">
            Не просто теория, а реальные задания, челленджи и{" "}
            <Hi>обратная связь от менторов</Hi>
          </p>
        </div>

        <PrimaryButton label="Начать обучение" onClick={() => navigate("/level")} />
      </div>

      <Divider />

      {/* ── Problem ── */}
      <div className="flex flex-col gap-[16px]">
        <SectionTitle>С чем сталкиваются дизайнеры</SectionTitle>
        <div className="flex flex-col gap-[16px]">
          <p>
            Большинство курсов дают <Hi>много теории</Hi> и мало практики.
            После часовых видео ощущение, что всё понял — а сесть и сделать не можешь.
          </p>
          <p>
            Нет <Hi>обратной связи</Hi> — непонятно, правильно ли сделано,
            что улучшить и куда расти дальше.
          </p>
          <p>
            Нет <Hi>системы роста навыков</Hi>. Сложно отследить прогресс
            и понять, что изучать следующим.
          </p>
        </div>
      </div>

      <Divider />

      {/* ── Solution ── */}
      <div className="flex flex-col gap-[18px]">
        <SectionTitle>Что есть в UXEO</SectionTitle>
        <div className="flex flex-col gap-[16px]">
          <FeatureRow
            icon="⚡" iconBg="#2C3438"
            title="Интерактивные задания"
            text="Решаешь реальные задачи интерфейсов — не читаешь, а делаешь"
          />
          <FeatureRow
            icon="🎯" iconBg="#2C3438"
            title="Практика в Figma"
            text="Задания прямо в инструменте дизайнера, не в абстрактной среде"
          />
          <FeatureRow
            icon="💬" iconBg="#2C3438"
            title="Обратная связь от менторов"
            text="Живые люди проверяют домашки и дают конкретный фидбек"
          />
          <FeatureRow
            icon="🏆" iconBg="#2C3438"
            title="Челленджи и соревнования"
            text="Еженедельные вызовы, которые держат в тонусе"
          />
          <FeatureRow
            icon="📈" iconBg="#2C3438"
            title="Прогресс, XP и уровни"
            text="Видишь весь путь, знаешь куда идёшь и как далеко продвинулся"
          />
        </div>
      </div>

      <Divider />

      {/* ── How it works ── */}
      <div className="flex flex-col gap-[14px]">
        <SectionTitle>Как это работает</SectionTitle>
        <div
          className="rounded-[16px] overflow-hidden"
          style={{ background: "#374348", border: "1px solid rgba(255,255,255,0.06)" }}
        >
          {[
            "Проходишь урок по роудмапу",
            "Решаешь квиз и задания",
            "Выполняешь домашку в Figma",
            "Получаешь фидбек от ментора",
          ].map((text, i) => (
            <Step key={i} num={i + 1} text={text} />
          ))}
        </div>
        <p className="text-[#798589] text-[16px] leading-relaxed">
          Сначала <Hi>пробуешь сам</Hi> — потом теория. Знания остаются,
          а не вылетают через неделю.
        </p>
      </div>

      <Divider />

      {/* ── Why we made it ── */}
      <div className="flex flex-col gap-[14px]">
        <SectionTitle>Почему мы это сделали</SectionTitle>
        <p className="leading-relaxed">
          Мы сами проходили курсы, где много теории, но мало практики.
          После урока — ощущение, что ничего не осталось. Поэтому сделали продукт,
          который помогает <Hi>реально прокачивать навыки</Hi>, а не просто
          смотреть уроки.
        </p>
      </div>

      <Divider />

      {/* ── Advantages 2×2 ── */}
      <div className="flex flex-col gap-[14px]">
        <SectionTitle>Почему UXEO</SectionTitle>
        <div className="grid grid-cols-2 gap-[10px]">
          {[
            { icon: "🔁", text: "Практика → потом теория" },
            { icon: "✅", text: "Реальные задачи" },
            { icon: "🗣️", text: "Живая обратная связь" },
            { icon: "🎮", text: "Формат, в который хочется возвращаться" },
          ].map(({ icon, text }) => (
            <div
              key={text}
              className="flex items-start gap-[10px] p-[14px] rounded-[14px]"
              style={{ background: "#374348", border: "1px solid rgba(255,255,255,0.06)" }}
            >
              <span className="text-[18px] shrink-0 mt-[1px]">{icon}</span>
              <span className="font-['Roboto_Condensed:Medium',sans-serif] font-medium text-[14px] text-[#c8cdd0] leading-snug">
                {text}
              </span>
            </div>
          ))}
        </div>
      </div>

      <Divider />

      {/* ── Team ── */}
      <div className="flex flex-col gap-[12px]">
        <SectionTitle>Команда</SectionTitle>
        <div
          className="flex gap-[14px] items-start p-[18px] rounded-[16px]"
          style={{ background: "#374348", border: "1px solid rgba(255,255,255,0.06)" }}
        >
          <IconPill color="#2C3438">👨‍🏫</IconPill>
          <div>
            <p className="font-['Roboto_Condensed:Bold',sans-serif] font-bold text-[16px] text-[#f1f2fb] mb-[4px]">
              Опыт в образовании
            </p>
            <p className="text-[#798589] text-[15px] leading-relaxed">
              В команде <Hi>методолог</Hi> и <Hi>преподаватель</Hi> с опытом
              в образовательных проектах. Контент построен так, чтобы знания
              действительно закреплялись.
            </p>
          </div>
        </div>
      </div>

      <Divider />

      {/* ── Coming soon ── */}
      <div className="flex flex-col gap-[12px]">
        <SectionTitle>Скоро в UXEO</SectionTitle>
        <div className="flex flex-wrap gap-[8px]">
          {["💬 Чат сообщества", "🏅 Лиги", "🤝 Парные задания", "🔔 Уведомления"].map((tag) => (
            <Chip key={tag}>{tag}</Chip>
          ))}
        </div>
      </div>

      <Divider />

      {/* ── Contact ── */}
      <div className="flex flex-col gap-[14px]">
        <SectionTitle>Есть вопросы?</SectionTitle>
        <p className="text-[#798589] text-[16px]">
          Напишите нам — ответим быстро
        </p>
        <a
          href="mailto:hello@uxeo.app"
          className="flex items-center justify-center h-[48px] rounded-[14px] w-full max-w-[240px] transition-colors duration-150"
          style={{ background: "#374348", border: "1px solid rgba(255,255,255,0.1)" }}
        >
          <span className="font-['Roboto_Condensed:Bold',sans-serif] font-bold text-[17px] text-[#f1f2fb]">
            Написать нам
          </span>
        </a>
        <PrimaryButton label="Начать бесплатно" onClick={() => navigate("/level")} />
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
