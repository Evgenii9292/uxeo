import React from "react";

export function ColorTheoryExample({ index, correct }: { index: number; correct: boolean }) {
  const action = (label: string, primary = true) => <div className={`color-example-action ${primary ? correct ? "accent" : "muted" : "neutral"}`}>{label}</div>;
  return <div className="color-theory-example">
    {index === 0 ? <><h3>Вход в аккаунт</h3><div className="color-example-field">Email</div><div className="color-example-field">Пароль</div>{action("Войти")}<span className="color-example-secondary">Забыли пароль?</span></> :
      index === 1 ? <><h3>Ваш заказ</h3><div className="color-example-product"><span>Блокнот</span><strong>500 ₽</strong></div><div className="color-example-product"><span>Ручка</span><strong>150 ₽</strong></div>{action("Оформить заказ")}</> :
      index === 2 ? <><h3>Создать аккаунт</h3><div className={`color-example-field ${correct ? "error" : ""}`}>user@invalid</div><span className={`color-example-message ${correct ? "error" : ""}`}>Неверный формат email</span><div className="color-example-field">Пароль</div><div className="color-example-action neutral">Создать аккаунт</div></> :
      index === 3 ? <><h3>Выберите курс</h3><div className={`color-example-course ${correct ? "" : "noisy-purple"}`}>Основы UX<span>8 занятий</span></div><div className={`color-example-course ${correct ? "" : "noisy-pink"}`}>UI-дизайн<span>6 занятий</span></div>{action("Продолжить")}</> :
      index === 4 ? <><h3>Мои задачи</h3>{["Изучить теорию", "Пройти квиз", "Сдать работу"].map((label, i) => <div key={label} className={`color-example-task ${correct ? "neutral" : `noise-${i}`}`}>{label}</div>)}{action("Добавить задачу")}</> :
      <><h3>Урок по дизайну</h3><div className="color-example-summary">Контраст и цвет</div>{action("Начать урок")}<div className={`color-example-action ${correct ? "neutral" : "accent"}`}>Программа курса</div><div className={`color-example-action ${correct ? "neutral" : "accent"}`}>О преподавателе</div></>}
  </div>;
}

export const COLOR_THEORY_QUESTIONS = [
  "Где цвет помогает заметить главное действие?",
  "Где кнопка оформления заказа заметнее?",
  "Где ошибка в поле показана понятнее?",
  "Где цвета используются последовательно?",
  "Какой интерфейс не перегружен цветами?",
  "Где цвет выделяет главное действие?",
];
