STRICT PATCH — ADD FULL QUIZ FOR COLOR LESSON

Problem

The second lesson "Цвет" has only 1 question in the quiz.
This prevents proper testing of the lesson progression logic.

Goal

Create a full quiz with 5 questions for the lesson "Цвет" so it behaves the same way as the first lesson "Контраст".



Implementation

File: LessonQuizPage.tsx

Find the QUIZ_BANK object.

Locate:

quiz_color



Replace the quiz_color entry with a full set of 5 questions.



Example structure

quiz_color: [
{
  id: "color_1",
  question: "Какой цвет лучше использовать для кнопки основного действия?",
  options: [
    "Серый",
    "Акцентный цвет интерфейса",
    "Цвет фона",
    "Белый"
  ],
  correctIndex: 1
},
{
  id: "color_2",
  question: "Почему важно использовать ограниченную палитру цветов?",
  options: [
    "Чтобы интерфейс был быстрее",
    "Чтобы сохранить визуальную консистентность",
    "Чтобы уменьшить размер сайта",
    "Чтобы ускорить загрузку"
  ],
  correctIndex: 1
},
{
  id: "color_3",
  question: "Какой цвет чаще всего используется для ошибок?",
  options: [
    "Зелёный",
    "Синий",
    "Красный",
    "Фиолетовый"
  ],
  correctIndex: 2
},
{
  id: "color_4",
  question: "Что делает цветовой контраст в интерфейсе?",
  options: [
    "Увеличивает скорость сайта",
    "Помогает выделить важные элементы",
    "Делает текст длиннее",
    "Уменьшает количество элементов"
  ],
  correctIndex: 1
},
{
  id: "color_5",
  question: "Какой цвет обычно используется для успешных действий?",
  options: [
    "Красный",
    "Зелёный",
    "Чёрный",
    "Серый"
  ],
  correctIndex: 1
}
]



Important

• Keep the quiz structure identical to quiz_contrast
• totalQuestions must be 5
• the lesson progression logic must work the same way



Expected Result

Lesson "Цвет" now contains 5 quiz questions.
Users can complete the lesson and unlock the next lesson "Иерархия".