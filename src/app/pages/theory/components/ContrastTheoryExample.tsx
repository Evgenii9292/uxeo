import React from "react";

export function BalanceExample({ correct }: { correct: boolean }) {
  return <div className="balance-example">
    <h3>Управление задачами</h3>
    {["Создать", "Экспорт", "Настройки"].map((label, index) => <div key={label} className={`balance-example-action ${correct ? index === 0 ? "primary" : "secondary" : `noisy noisy-${index}`}`}>{label}</div>)}
  </div>;
}
export function ColorContrastExample({ correct }: { correct: boolean }) {
  return <div className="color-contrast-example">
    <h3>Запись на занятие</h3>
    <p>Основы дизайна</p>
    <span>Сегодня · 18:00</span>
    <div className={`color-contrast-example-action ${correct ? "clear" : "faint"}`}>Записаться</div>
  </div>;
}

