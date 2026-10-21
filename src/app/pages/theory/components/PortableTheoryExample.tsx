import React from "react";

// Purpose-built mobile examples: fewer elements, readable labels, no fixed-position Figma layers.
const Button = ({ children, secondary = false, style = {} }: { children: React.ReactNode; secondary?: boolean; style?: React.CSSProperties }) => <div className={`portable-button ${secondary ? "secondary" : ""}`} style={style}>{children}</div>;
const Note = ({ children }: { children: React.ReactNode }) => <p className="portable-note">{children}</p>;
const Box = ({ children, style = {} }: { children: React.ReactNode; style?: React.CSSProperties }) => <div className="portable-box" style={style}>{children}</div>;
const Title = ({ children }: { children: React.ReactNode }) => <h3>{children}</h3>;
const stack = { display: "flex", flexDirection: "column", gap: 6 } as React.CSSProperties;

function Form({ correct, registration = false, system = false }: { correct: boolean; registration?: boolean; system?: boolean }) {
  const labels = registration ? ["Имя", "Email", "Пароль"] : ["Имя", "Email"];
  return <><Title>{system ? "Поля ввода" : registration ? "Регистрация" : "Обратная связь"}</Title>{labels.map((label, i) => <div key={label} className="portable-field-group" style={!correct && system ? { paddingLeft: i % 2 ? 8 : 0 } : undefined}>
    {correct && <label>{label}</label>}<div className="portable-input" style={!correct && system ? { borderRadius: i % 2 ? 0 : 7, borderColor: i % 2 ? "#8e9199" : "#d8dce5" } : undefined}>{correct ? label === "Пароль" ? "••••••" : label === "Email" ? "mail@example.ru" : "Ваше имя" : label === "Email" ? "Поле 2" : label === "Пароль" ? "Текст" : "Введите данные"}</div>
  </div>)}{!system && <Button>{registration ? "Создать аккаунт" : correct ? "Отправить сообщение" : "Далее"}</Button>}</>;
}
function Flow({ correct, purchase = false }: { correct: boolean; purchase?: boolean }) {
  const steps = purchase ? correct ? ["Товар", "Оплата", "Готово"] : ["Товар", "Корзина", "Вход", "Адрес", "Оплата"] : correct ? ["Email", "Подтверждение", "Готово"] : ["Email", "Подтверждение", "Профиль", "Анкета", "Готово"];
  return <><Title>{purchase ? "Покупка товара" : "Создание аккаунта"}</Title><div className="portable-flow">{steps.map((label, i) => <div className="portable-step" key={label}><span>{i + 1}</span>{label}{i < steps.length - 1 && <b>↓</b>}</div>)}</div></>;
}
function ButtonSystem({ correct, title = "Кнопки", variants = false }: { correct: boolean; title?: string; variants?: boolean }) {
  return <><Title>{title}</Title>{correct && <div className="portable-library-label">{variants ? "Button · варианты" : "Button · компонент"}</div>}{(variants ? ["Основная", "Второстепенная", "Недоступна"] : ["Купить", "Купить", "Купить"]).map((label, i) => <Button key={i} secondary={correct && i > 0} style={correct ? { opacity: variants && i === 2 ? .5 : 1 } : { background: ["#397df5", "#8256de", "#364146"][i], borderRadius: [3, 10, 0][i], width: ["100%", "80%", "92%"][i] }}>{label}</Button>)}</>;
}
function CourseCards({ correct, title = "Каталог курсов", reuse = false }: { correct: boolean; title?: string; reuse?: boolean }) {
  return <><Title>{title}</Title>{reuse && correct && <div className="portable-library-label">CourseCard · компонент</div>}{["Основы UX", "UI-дизайн"].map((label, i) => <Box key={label} style={correct ? stack : { ...stack, borderRadius: i ? 0 : 10, padding: i ? 4 : 8 }}><strong style={!correct && i === 1 ? { fontWeight: 400 } : undefined}>{label}</strong>{(correct || i === 0) && <Note>{i ? "6 занятий" : "8 занятий"}</Note>}</Box>)}</>;
}
function Library({ correct, inputs = false }: { correct: boolean; inputs?: boolean }) {
  return <><Title>{inputs ? "Система полей" : "Библиотека UI"}</Title>{(inputs ? correct ? ["Input / Default", "Input / Focus", "Input / Error"] : ["Поле", "Field", "Текст"] : correct ? ["Buttons / Primary", "Inputs / Default", "Cards / Course"] : ["Кнопка", "Field 2", "Блок"]).map((label, i) => <Box key={label} style={inputs ? { display: "flex", alignItems: "center", gap: 4, minHeight: 31, marginLeft: correct ? 0 : i % 2 ? 8 : 0 } : correct ? { ...stack, gap: 3 } : { width: ["100%", "70%", "88%"][i], marginLeft: i % 2 ? 15 : 0 }}><span style={inputs ? { fontSize: 9, lineHeight: "12px", width: 71, flexShrink: 0 } : undefined}>{label}</span><div className={inputs ? "portable-input" : "portable-library-sample"} style={inputs && correct ? { borderColor: ["#d8dce5", "#397df5", "#d92d20"][i] } : undefined}>{inputs ? ["Ваше имя", "Анна", "Ошибка"][i] : ""}</div></Box>)}</>;
}
function Article({ correct, scan = false }: { correct: boolean; scan?: boolean }) {
  return <><Title>{scan ? "Основы типографики" : "Новая статья"}</Title>{correct ? <><Box><strong>{scan ? "Шрифт" : "Что такое UX"}</strong><Note>{scan ? "Не больше двух гарнитур" : "Опыт взаимодействия с продуктом"}</Note></Box><Box><strong>{scan ? "Интервалы" : "Практика"}</strong><Note>{scan ? "Отступы помогают читать" : "Проверьте решение на пользователях"}</Note></Box></> : <p className="portable-plain-copy">{scan ? "Основы типографики. Шрифт задаёт характер интерфейса. Не больше двух гарнитур. Интервалы и отступы помогают читать. Размеры создают иерархию." : "Что такое UX. Это опыт взаимодействия с продуктом. Чтобы улучшить интерфейс, нужно изучить задачи пользователей и проверить решение на практике."}</p>}</>;
}
function Navigation({ correct }: { correct: boolean }) {
  return <><div className="portable-nav">{(correct ? ["Главная", "Курсы", "Профиль"] : ["Раздел 1", "Ещё", "Блок"]).map(x => <span key={x}>{x}</span>)}</div><Title>{correct ? "Ваши курсы" : "Приложение"}</Title><Box>Основы дизайна<Note>Следующий урок: контраст</Note></Box><Button>{correct ? "Продолжить урок" : "Действие"}</Button></>;
}
function Grid({ correct, alignment = false, rhythm = false, spacing = false }: { correct: boolean; alignment?: boolean; rhythm?: boolean; spacing?: boolean }) {
  const title = alignment ? "Данные профиля" : rhythm ? "Мои уроки" : spacing ? "План обучения" : "Мои курсы";
  const labels = alignment ? ["Имя: Анна", "Email: anna@mail.ru", "Город: Москва"] : rhythm ? ["Контраст", "Цвет", "Иерархия"] : spacing ? ["Теория", "Практика", "Домашняя работа"] : ["UX", "UI", "Figma", "Дизайн"];
  return <><Title>{title}</Title><div className={alignment || rhythm || spacing ? "portable-list" : "portable-grid"} style={{ gap: correct ? 8 : 2 }}>{labels.map((label, i) => <Box key={label} style={correct ? {} : alignment ? { marginLeft: i % 2 ? 14 : 0 } : spacing ? { marginTop: i === 2 ? 10 : 0 } : rhythm ? { padding: i % 2 ? 3 : 9, minHeight: i % 2 ? 21 : 32 } : { marginLeft: i % 2 ? 14 : 0, marginTop: i === 2 ? 10 : 0, width: i % 2 ? "78%" : "100%" }}>{label}</Box>)}</div></>;
}
function Icons({ correct }: { correct: boolean }) {
  return <><Title>Навигация</Title><div className="portable-icons">{[0, 1, 2].map(i => <div key={i}><svg width={correct ? 24 : [17, 30, 20][i]} height={correct ? 24 : [17, 30, 20][i]} viewBox="0 0 24 24" fill={!correct && i === 1 ? "#364146" : "none"} stroke="#364146" strokeWidth={correct ? 2 : [1, 3, 1.5][i]} strokeLinecap="round" strokeLinejoin="round">{i === 0 ? <path d="m3 10 9-7 9 7v11h-6v-7H9v7H3V10Z" /> : i === 1 ? <><circle cx="10" cy="10" r="6"/><path d="m15 15 6 6"/></> : <><circle cx="12" cy="7" r="4"/><path d="M4 21v-2a8 8 0 0 1 16 0v2"/></>}</svg><span>{["Главная", "Поиск", "Профиль"][i]}</span></div>)}</div></>;
}
function ExampleContent({ lessonId, index, correct }: { lessonId: string; index: number; correct: boolean }): React.ReactNode {
  switch (lessonId) {
    case "hierarchy-lesson":
      if (index === 0) return <><Title>Дизайн интерфейсов</Title><Note>Практический курс для начинающих</Note>{correct ? <><Button>Начать обучение</Button><Button secondary>Программа курса</Button></> : <><Button secondary>Начать обучение</Button><Button secondary>Программа курса</Button></>}</>;
      if (index === 1) return <Article correct={correct} scan />;
      if (index === 2) return <><Title>Настройки профиля</Title><Box>Имя и фотография</Box><Button secondary={!correct}>Сохранить изменения</Button><Button secondary>Отмена</Button></>;
      if (index === 3) return <><h3 style={{ fontSize: correct ? 17 : 10, lineHeight: correct ? "21px" : "14px" }}>Наушники</h3><Note>Беспроводные · 20 часов работы</Note><strong style={{ fontSize: correct ? 15 : 10, lineHeight: "19px" }}>4 990 ₽</strong><Button>Купить</Button></>;
      if (index === 4) return <><Title>Профиль</Title><div style={{ ...stack, gap: correct ? 14 : 1 }}><Box>Имя: Анна<Note>Email: anna@mail.ru</Note></Box><Button>Редактировать</Button></div></>;
      return <><Title>Документ готов</Title><Note>Выберите действие</Note><Button secondary={!correct}>Скачать</Button><Button secondary>Поделиться</Button><Button secondary>Закрыть</Button></>;
    case "what-is-ux-lesson":
      if (index === 0) return <><Title>Доставка еды</Title>{!correct && <><Box>Реклама и акции</Box><Box>Рекомендуем</Box></>}<Box>Пицца · 600 ₽</Box><Button>{correct ? "Заказать пиццу" : "Подробнее"}</Button></>;
      if (index === 1) return <><Title>Купить наушники</Title><Note>4 990 ₽ · В наличии</Note>{!correct && <><Box>Другие товары</Box><Note>Новости и акции магазина</Note></>}<Button>{correct ? "Перейти к оплате" : "Узнать больше"}</Button></>;
      if (index === 2) return <Form correct={correct} registration />;
      return <Navigation correct={correct} />;
    case "user-flow-lesson":
      if (index === 0) return <Flow correct={correct} />;
      if (index === 1) return <><Title>Курс по UX-дизайну</Title>{correct ? <><Note>Научитесь создавать удобные интерфейсы</Note><Box>8 недель · Онлайн</Box><Button>Записаться на курс</Button></> : <><Note>Описание программы, преподаватели, материалы и другие подробности</Note><Box>О курсе</Box><Button secondary>Подробнее</Button></>}</>;
      if (index === 2) return <Flow correct={correct} purchase />;
      return <><Title>Путь к покупке</Title><div className={`portable-path ${correct ? "ordered" : "tangled"}`}>{(correct ? ["Каталог → Товар", "Товар → Оплата", "Оплата → Готово"] : ["Каталог ↔ Оплата", "↓ Назад к товару", "Корзина ↔ Каталог"]).map(x => <Box key={x}>{x}</Box>)}</div></>;
    case "interface-structure-lesson":
      if (index === 0) return <><Title>Курс по дизайну</Title><div className={correct ? "portable-content-layout ordered" : "portable-content-layout"} style={{ ...stack, flexDirection: correct ? "column" : "column-reverse" }}><Box>Описание<Note>Основы UX за 8 недель</Note></Box><Box>Программа<Note>Теория и практика</Note></Box><Button>Записаться</Button></div></>;
      if (index === 1) return <><Title>Ваши данные</Title><div style={{ ...stack, gap: correct ? 10 : 1 }}><Box>Имя: Анна<Note>Фамилия: Иванова</Note></Box><Box>Email: anna@mail.ru<Note>Телефон: +7 …</Note></Box></div></>;
      if (index === 2) return <><Title>Наушники</Title><div className={correct ? "portable-content-layout ordered" : "portable-content-layout"} style={{ ...stack, flexDirection: correct ? "column" : "column-reverse" }}><Note>Беспроводные · 20 часов работы</Note><Box>4 990 ₽</Box><Button>Купить</Button></div></>;
      return <Article correct={correct} />;
    case "interface-elements-lesson":
      if (index === 0) return <><Title>Курс для начинающих</Title><Note>Основы пользовательского опыта</Note><Button>{correct ? "Записаться на курс" : "Action"}</Button><Button secondary>{correct ? "Программа" : "More"}</Button></>;
      if (index === 1) return <Form correct={correct} />;
      if (index === 2) return <Navigation correct={correct} />;
      return <Article correct={correct} />;
    case "ux-errors-lesson":
      if (index === 0) return <Flow correct={correct} />;
      if (index === 1) return <><Title>Управление аккаунтом</Title><Box>Ваш профиль</Box><Button>{correct ? "Изменить пароль" : "Action A"}</Button><Button secondary>{correct ? "Настройки профиля" : "Option 2"}</Button></>;
      if (index === 2) return <><Title>Личный кабинет</Title><div className={correct ? "portable-content-layout ordered" : "portable-content-layout"} style={{ ...stack, flexDirection: correct ? "column" : "column-reverse" }}><Box>Мои данные<Note>Имя и email</Note></Box><Box>Мои курсы<Note>Следующий урок: цвет</Note></Box><Button>Продолжить урок</Button></div></>;
      return <><Title>{correct ? "Ваше обучение" : "Акции! Новости! Курсы!"}</Title>{!correct && <><div className="portable-noise-row"><Box>Акция</Box><Box>Бонус</Box></div><Note>Новости, скидки, предложения и обновления</Note></>}<Box>Основы UX</Box><Button>Продолжить урок</Button></>;
    case "what-is-ui-kit-lesson":
      if (index === 0) return <><Title>{correct ? "UI Kit → Экран" : "Экран курса"}</Title>{correct && <div className="portable-library-label">Button + Card + Input</div>}<Box>Основы UX<Note>Начальный курс</Note></Box><Button>Начать обучение</Button></>;
      if (index === 1) return <Library correct={correct} />;
      if (index === 2) return <ButtonSystem correct={correct} title="Повторяющиеся кнопки" />;
      return <CourseCards correct={correct} />;
    case "ui-elements-lesson":
      if (index === 0) return <ButtonSystem correct={correct} title="Система кнопок" variants />;
      if (index === 1) return <Form correct={correct} system />;
      if (index === 2) return <CourseCards correct={correct} />;
      return <Icons correct={correct} />;
    case "element-states-lesson":
      return <Grid correct={correct} alignment={index === 3} spacing={index === 1} rhythm={index === 2} />;
    case "figma-components-lesson":
      if (index === 0) return <ButtonSystem correct={correct} title="Компонент и копии" />;
      if (index === 1) return <ButtonSystem correct={correct} title="Варианты кнопки" variants />;
      if (index === 2) return <CourseCards correct={correct} reuse title="Повторное использование" />;
      return <Library correct={correct} />;
    case "creating-ui-kit-lesson":
      if (index === 0) return <ButtonSystem correct={correct} title="Кнопки для UI Kit" variants />;
      if (index === 1) return <Library correct={correct} inputs />;
      if (index === 2) return <Form correct={correct} registration />;
      if (index === 3) return <CourseCards correct={correct} reuse title="Компонент карточки" />;
      return <><Title>Уведомления</Title>{["Успех", "Ошибка", "Внимание"].map((label, i) => <Box key={label} style={{ borderLeft: `${correct ? 3 : [1, 5, 0][i]}px solid ${["#299359", "#d92d20", "#b77914"][i]}`, paddingLeft: correct ? 8 : [3, 12, 5][i], borderRadius: correct ? 5 : [0, 10, 2][i] }}>{correct ? label : ["Success message", "Error happened", "Warning"][i]}</Box>)}</>;
    default: return null;
  }
}

export const PORTABLE_THEORY_LESSONS = ["hierarchy-lesson", "what-is-ux-lesson", "user-flow-lesson", "interface-structure-lesson", "interface-elements-lesson", "ux-errors-lesson", "what-is-ui-kit-lesson", "ui-elements-lesson", "element-states-lesson", "figma-components-lesson", "creating-ui-kit-lesson"];
export function PortableTheoryExample(props: { lessonId: string; index: number; correct: boolean }) {
  return <div className="portable-theory-example"><ExampleContent {...props} /></div>;
}
