import React from "react";

// Each exercise owns its composition; shared primitives only define the visual baseline.
const Button = ({ children, secondary = false, style = {} }: { children: React.ReactNode; secondary?: boolean; style?: React.CSSProperties }) => <div className={`portable-button ${secondary ? "secondary" : ""}`} style={style}>{children}</div>;
const Note = ({ children }: { children: React.ReactNode }) => <p className="portable-note">{children}</p>;
const Box = ({ children, style = {} }: { children: React.ReactNode; style?: React.CSSProperties }) => <div className="portable-box" style={style}>{children}</div>;
const Title = ({ children }: { children: React.ReactNode }) => <h3>{children}</h3>;
const Actions = ({ children }: { children: React.ReactNode }) => <div className="portable-actions">{children}</div>;
const stack = { display: "flex", flexDirection: "column", gap: 6 } as React.CSSProperties;

function Form({ correct, registration = false, system = false, simple = false }: { correct: boolean; registration?: boolean; system?: boolean; simple?: boolean }) {
  const labels = simple ? correct ? ["Email", "Пароль"] : ["Имя", "Email", "Пароль", "Город"] : registration ? ["Имя", "Email", "Пароль"] : system ? ["Имя", "Email"] : ["Email", "Сообщение"];
  return <><Title>{simple ? "Регистрация по email" : system ? "Поля ввода" : registration ? "Регистрация" : "Обратная связь"}</Title><div className={`portable-form-fields ${simple ? "compact-fields" : ""}`}>{labels.map((label, i) => <div key={label} className="portable-field-group">
    {(correct || simple) && <label>{label}</label>}<div className="portable-input">{!correct && !simple ? `Поле ${i + 1}` : label === "Пароль" ? "••••••" : label === "Email" ? "mail@example.ru" : label === "Сообщение" ? "Ваш вопрос" : label === "Город" ? "Москва" : "Анна"}</div>
  </div>)}</div>{!system && <Actions><Button>{registration || simple ? "Создать аккаунт" : "Отправить сообщение"}</Button></Actions>}</>;
}
function Flow({ correct, purchase = false }: { correct: boolean; purchase?: boolean }) {
  const steps = purchase ? correct ? ["Товар", "Оплата", "Готово"] : ["Товар", "Корзина", "Оплата", "Готово"] : correct ? ["Email", "Подтверждение", "Готово"] : ["Email", "Подтверждение", "Анкета", "Готово"];
  return <><Title>{purchase ? "Купить один товар" : "Регистрация по email"}</Title><Note>{purchase ? "Адрес уже сохранён" : "Анкета для входа не нужна"}</Note><div className="portable-flow">{steps.map((label, i) => <div className="portable-step" key={label}><span>{i + 1}</span>{label}{i < steps.length - 1 && <b>↓</b>}</div>)}</div></>;
}
function ButtonStates({ correct }: { correct: boolean }) {
  return <><Title>Состояния кнопки</Title><div className="portable-state-list">{["Обычная", "Наведение", "Отключена"].map((label, i) => <div className="portable-state-row" key={label}><span>{label}</span><Button style={correct ? { background: i === 1 ? "#20292e" : i === 2 ? "#e1e3eb" : "#364146", color: i === 2 ? "#8e9199" : "white" } : undefined}>Купить</Button></div>)}</div></>;
}
function CourseCards({ correct }: { correct: boolean }) {
  return <><Title>Каталог курсов</Title><div className="portable-course-list">{["Основы UX", "UI-дизайн"].map((label, i) => <Box key={label} style={correct ? stack : { ...stack, borderRadius: i ? 0 : 10, padding: i ? 4 : 8 }}><div className="portable-course-heading"><strong style={!correct && i === 1 ? { fontWeight: 400 } : undefined}>{label}</strong><Note>{i ? "6 занятий" : "8 занятий"}</Note></div><Button secondary>Открыть курс</Button></Box>)}</div></>;
}
function ComponentUpdate({ correct, card = false }: { correct: boolean; card?: boolean }) {
  const sample = (updated: boolean) => card ? <div className="portable-linked-card" style={{ borderRadius: updated ? 8 : 0 }}>Основы UX</div> : <Button style={{ background: updated ? "#397df5" : "#364146" }}>Купить</Button>;
  return <><Title>{card ? "Изменили скругление" : "Изменили цвет кнопки"}</Title><div className="portable-instance"><span>В наборе</span>{sample(true)}</div><div className="portable-link-arrows" aria-hidden="true">{correct ? "↓　　　　　↓" : " "}</div><div className="portable-instance"><span>Экран 1</span>{sample(correct)}</div><div className="portable-instance"><span>Экран 2</span>{sample(correct)}</div></>;
}
function KitAssembly({ correct }: { correct: boolean }) {
  return <><Title>Из набора — в экран</Title><div className="portable-kit-source"><span>Набор</span><div className="portable-kit-primitives"><div className="portable-mini-button"/><div className="portable-mini-field"/><div className="portable-mini-card"/></div></div><div className="portable-link-arrows" aria-hidden="true">↓</div><div className="portable-kit-screen"><Note>Экран курса</Note><div className="portable-input" style={correct ? undefined : { borderRadius: 0, borderColor: "#8256de" }}>Поиск</div><div className="portable-kit-card" style={correct ? undefined : { borderRadius: 0, background: "#e8def7" }}>Основы UX</div><Button style={correct ? undefined : { borderRadius: 0, background: "#8256de" }}>Начать</Button></div></>;
}
function Library({ correct, inputs = false }: { correct: boolean; inputs?: boolean }) {
  return <><Title>{inputs ? "Состояния поля" : "Библиотека UI"}</Title><div className="portable-library-list">{(inputs ? ["Обычное", "Фокус", "Ошибка"] : ["Кнопки", "Поля", "Карточки"]).map((label, i) => {
    const kind = correct ? i : (i + 1) % 3;
    return <Box key={label} style={{ display: "flex", alignItems: "center", gap: 5, minHeight: 31 }}><span className="portable-category-label">{label}</span>{inputs ? <div className="portable-input" style={correct ? { borderColor: ["#d8dce5", "#397df5", "#d92d20"][i] } : undefined}>{i === 2 ? "mail@" : "Email"}</div> : kind === 0 ? <Button>Купить</Button> : kind === 1 ? <div className="portable-input">Ваше имя</div> : <div className="portable-linked-card">Курс UX</div>}</Box>;
  })}</div></>;
}
function Article({ correct, scan = false }: { correct: boolean; scan?: boolean }) {
  const parts = scan ? [["Шрифт", "Не больше двух гарнитур"], ["Интервалы", "Отступы помогают читать"]] : [["Описание", "Основы UX за 8 недель"], ["Программа", "Теория и практика"]];
  return <><Title>{scan ? "Основы типографики" : "Курс по дизайну"}</Title><div className={`portable-article ${correct ? "structured" : ""}`}>{correct ? parts.map(([heading, text]) => <section key={heading}><strong>{heading}</strong><Note>{text}</Note></section>) : <p className="portable-plain-copy">{parts.map(([heading, text]) => `${heading}. ${text}.`).join(" ")}</p>}</div></>;
}
function Grouping({ correct, proximity = false }: { correct: boolean; proximity?: boolean }) {
  const groups = proximity ? [["Имя: Анна", "Email: anna@mail.ru"], ["Уведомления: включены", "Рассылка: выключена"]] : [["Имя: Анна", "Email: anna@mail.ru"], ["Пароль: ••••••", "Вход по коду: включён"]];
  return <><Title>{proximity ? "Настройки профиля" : "Данные аккаунта"}</Title><div className={`portable-groups ${correct ? "grouped" : ""}`}>{correct ? groups.map((group, i) => <div className="portable-data-group" key={i}>{group.map(text => <Note key={text}>{text}</Note>)}</div>) : [groups[0][0],groups[1][0],groups[0][1],groups[1][1]].map(text => <Note key={text}>{text}</Note>)}</div></>;
}
function Navigation({ correct }: { correct: boolean }) {
  return <><div className="portable-nav">{["Главная", "Курсы", "Профиль"].map(x => <span className={correct && x === "Курсы" ? "current" : ""} key={x}>{x}</span>)}</div><Title>Ваши курсы</Title><Box>Основы дизайна<Note>Следующий урок: контраст</Note></Box><Actions><Button>Продолжить урок</Button></Actions></>;
}
function Grid({ correct, alignment = false, rhythm = false, spacing = false }: { correct: boolean; alignment?: boolean; rhythm?: boolean; spacing?: boolean }) {
  const title = alignment ? "Данные профиля" : rhythm ? "Мои уроки" : spacing ? "План обучения" : "Мои курсы";
  const labels = alignment ? ["Имя: Анна", "Email: anna@mail.ru", "Город: Москва"] : rhythm ? ["Контраст", "Цвет", "Иерархия"] : spacing ? ["Теория", "Практика", "Домашняя работа"] : ["UX", "UI", "Figma", "Дизайн"];
  return <><Title>{title}</Title><div className={alignment || rhythm || spacing ? "portable-list" : "portable-grid"} style={{ gap: correct ? 8 : 2 }}>{labels.map((label, i) => <Box key={label} style={correct ? {} : alignment ? { marginLeft: i % 2 ? 14 : 0 } : spacing ? { marginTop: i === 2 ? 10 : 0 } : rhythm ? { padding: i % 2 ? 3 : 9, minHeight: i % 2 ? 21 : 32 } : { marginLeft: i % 2 ? 14 : 0, marginTop: i === 2 ? 10 : 0, width: i % 2 ? "78%" : "100%" }}>{label}</Box>)}</div></>;
}
function Icons({ correct }: { correct: boolean }) {
  return <><Title>Навигация</Title><div className="portable-icons">{[0, 1, 2].map(i => <div key={i}><svg width={correct ? 24 : [17, 30, 20][i]} height={correct ? 24 : [17, 30, 20][i]} viewBox="0 0 24 24" fill={!correct && i === 1 ? "#364146" : "none"} stroke="#364146" strokeWidth={correct ? 2 : [1, 3, 1.5][i]} strokeLinecap="round" strokeLinejoin="round">{i === 0 ? <path d="m3 10 9-7 9 7v11h-6v-7H9v7H3V10Z" /> : i === 1 ? <><circle cx="10" cy="10" r="6"/><path d="m15 15 6 6"/></> : <><circle cx="12" cy="7" r="4"/><path d="M4 21v-2a8 8 0 0 1 16 0v2"/></>}</svg><span>{["Главная", "Поиск", "Профиль"][i]}</span></div>)}</div></>;
}
function CourseOverview({ correct }: { correct: boolean }) {
  return <><Title>Курс по дизайну</Title><div className="portable-overview">{correct ? <><Box><strong>Описание</strong><Note>Основы UX за 8 недель</Note></Box><Box><strong>Программа</strong><Note>Теория и практика</Note></Box></> : <p className="portable-plain-copy">Описание. Основы UX за 8 недель. Программа. Теория и практика.</p>}</div><Actions><Button>Записаться</Button></Actions></>;
}
function ExampleContent({ lessonId, index, correct }: { lessonId: string; index: number; correct: boolean }): React.ReactNode {
  switch (lessonId) {
    case "hierarchy-lesson":
      if (index === 0) return <><Title>Дизайн интерфейсов</Title><Note>Практический курс для начинающих</Note><Actions><Button secondary={!correct}>Начать обучение</Button><Button secondary>Программа курса</Button></Actions></>;
      if (index === 1) return <Article correct={correct} scan />;
      if (index === 2) return <><Title>Настройки профиля</Title><Box>Имя и фотография</Box><Actions><Button secondary={!correct}>Сохранить изменения</Button><Button secondary>Отмена</Button></Actions></>;
      if (index === 3) return <><h3 style={{ fontSize: correct ? 17 : 10, lineHeight: correct ? "21px" : "14px" }}>Наушники</h3><Note>Беспроводные · 20 часов работы</Note><strong style={{ fontSize: correct ? 15 : 10, lineHeight: "19px" }}>4 990 ₽</strong><Actions><Button>Купить</Button></Actions></>;
      if (index === 4) return <Grouping correct={correct} proximity />;
      return <><Title>Документ готов</Title><Note>Выберите действие</Note><Actions><Button secondary={!correct}>Скачать</Button><Button secondary>Поделиться</Button><Button secondary>Закрыть</Button></Actions></>;
    case "what-is-ux-lesson":
      if (index === 0) return <><Title>Доставка еды</Title>{!correct && <><Box>Реклама и акции</Box><Box>Рекомендуем</Box></>}<Box>Пицца · 600 ₽</Box><Actions><Button>Заказать пиццу</Button></Actions></>;
      if (index === 1) return <><Title>Купить наушники</Title><Note>4 990 ₽ · В наличии</Note>{!correct && <><Box>Другие товары</Box><Note>Новости и акции магазина</Note></>}<Actions><Button>Перейти к оплате</Button></Actions></>;
      if (index === 2) return <Form correct={correct} simple />;
      return <Navigation correct={correct} />;
    case "user-flow-lesson":
      if (index === 0) return <Flow correct={correct} />;
      if (index === 1) return <><Title>Курс по UX-дизайну</Title><Note>Научитесь создавать удобные интерфейсы</Note><Box>8 недель · Онлайн</Box><Actions><Button>{correct ? "Записаться на курс" : "Подробнее"}</Button></Actions></>;
      if (index === 2) return <Flow correct={correct} purchase />;
      return <><Title>Путь к покупке</Title><div className={`portable-path ${correct ? "ordered" : "tangled"}`}>{(correct ? ["Каталог → Товар", "Товар → Оплата", "Оплата → Готово"] : ["Каталог ↔ Оплата", "↓ Назад к товару", "Корзина ↔ Каталог"]).map(x => <Box key={x}>{x}</Box>)}</div></>;
    case "interface-structure-lesson":
      if (index === 0) return <CourseOverview correct={correct} />;
      if (index === 1) return <Grouping correct={correct} />;
      if (index === 2) return <><Title>Наушники</Title><div className={correct ? "portable-content-layout ordered" : "portable-content-layout"} style={{ ...stack, flexDirection: correct ? "column" : "column-reverse" }}><Note>Беспроводные · 20 часов работы</Note><Box>4 990 ₽</Box><Button>Купить</Button></div></>;
      return <Article correct={correct} />;
    case "interface-elements-lesson":
      if (index === 0) return <><Title>Курс для начинающих</Title><Note>Основы пользовательского опыта</Note><Actions><Button>{correct ? "Записаться на курс" : "Открыть"}</Button><Button secondary>{correct ? "Программа курса" : "Ещё"}</Button></Actions></>;
      if (index === 1) return <Form correct={correct} />;
      if (index === 2) return <Navigation correct={correct} />;
      return <CourseOverview correct={correct} />;
    case "ux-errors-lesson":
      if (index === 0) return <Flow correct={correct} />;
      if (index === 1) return <><Title>Управление аккаунтом</Title><Box>Ваш профиль</Box><Actions><Button>{correct ? "Изменить пароль" : "Действие 1"}</Button><Button secondary>{correct ? "Настройки профиля" : "Действие 2"}</Button></Actions></>;
      if (index === 2) return <Grouping correct={correct} />;
      return <><Title>Ваше обучение</Title>{!correct && <><div className="portable-noise-row"><Box>Акция</Box><Box>Бонус</Box></div><Note>Новости, скидки, предложения и обновления</Note></>}<Box>Основы UX</Box><Actions><Button>Продолжить урок</Button></Actions></>;
    case "what-is-ui-kit-lesson":
      if (index === 0) return <KitAssembly correct={correct} />;
      if (index === 1) return <Library correct={correct} />;
      if (index === 2) return <ComponentUpdate correct={correct} />;
      return <CourseCards correct={correct} />;
    case "ui-elements-lesson":
      if (index === 0) return <><Title>Покупка курса</Title><Note>Основы UX · 2 000 ₽</Note><Actions><Button>{correct ? "Купить курс" : "Выполнить"}</Button><Button secondary>{correct ? "Программа курса" : "Ещё"}</Button></Actions></>;
      if (index === 1) return <Form correct={correct} system />;
      if (index === 2) return <CourseCards correct={correct} />;
      return <Icons correct={correct} />;
    case "element-states-lesson":
      return <Grid correct={correct} alignment={index === 3} spacing={index === 1} rhythm={index === 2} />;
    case "figma-components-lesson":
      if (index === 0) return <ComponentUpdate correct={correct} />;
      if (index === 1) return <ButtonStates correct={correct} />;
      if (index === 2) return <ComponentUpdate correct={correct} card />;
      return <Library correct={correct} />;
    case "creating-ui-kit-lesson":
      if (index === 0) return <ButtonStates correct={correct} />;
      if (index === 1) return <Library correct={correct} inputs />;
      if (index === 2) return <Form correct={correct} registration />;
      if (index === 3) return <ComponentUpdate correct={correct} card />;
      return <><Title>Уведомления</Title><div className="portable-library-list">{["Успех", "Ошибка", "Информация"].map((label, i) => <Box key={label} style={{ borderLeft: `${correct ? 3 : [1, 5, 0][i]}px solid ${["#299359", "#d92d20", "#397df5"][i]}`, paddingLeft: correct ? 8 : [3, 12, 5][i], borderRadius: correct ? 5 : [0, 10, 2][i], minHeight: 31 }}>{label}</Box>)}</div></>;
    default: return null;
  }
}

export const PORTABLE_THEORY_LESSONS = ["hierarchy-lesson", "what-is-ux-lesson", "user-flow-lesson", "interface-structure-lesson", "interface-elements-lesson", "ux-errors-lesson", "what-is-ui-kit-lesson", "ui-elements-lesson", "element-states-lesson", "figma-components-lesson", "creating-ui-kit-lesson"];
export function PortableTheoryExample(props: { lessonId: string; index: number; correct: boolean }) {
  return <div className="portable-theory-example"><ExampleContent {...props} /></div>;
}
