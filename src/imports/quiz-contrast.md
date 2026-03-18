Create a quiz sequence for the lesson.

There must be 5 quiz screens (one screen per question).

Use the SAME quiz layout and components that are already implemented.

Do NOT create a new layout.

Reuse existing components:
- Back button
- Progress bar
- Answer option components
- Bottom feedback block
- Continue button
- "Сообщить об ошибке"

Layout rules must remain the same:
- Header and progress bar fixed at the top
- Question and answers centered on the screen
- Bottom feedback panel fixed to the bottom of the viewport
- Progress bar, content block and bottom panel must have the same container width

State logic must be reused from the existing quiz:
1. Initial state — nothing selected
2. Option selected — highlight the selected answer
3. Answer submitted — show correct answer
4. Feedback shown — explanation text appears

Do NOT add a “Попробовать снова” button.  
After showing the explanation the user should only press Продолжить.

Use Russian option labels:

А  
Б  
В  
Г  

Use the following questions:

---

Вопрос 1  
Зачем в интерфейсе нужен контраст?

А) Чтобы сделать дизайн ярче  
Б) Чтобы управлять вниманием пользователя  
В) Чтобы добавить больше цветов  
Г) Чтобы интерфейс выглядел сложнее  

Правильный ответ: Б

Пояснение:  
Контраст помогает пользователю быстро понять, что главное, а что второстепенное.

---

Вопрос 2  
Что произойдет, если все элементы интерфейса будут одинакового размера и цвета?

А) Интерфейс станет аккуратнее  
Б) Пользователь быстрее поймет структуру  
В) Пользователь не поймет, куда смотреть сначала  
Г) Интерфейс станет минималистичным  

Правильный ответ: В

Пояснение:  
Без контраста пользователь не видит визуальной иерархии.

---

Вопрос 3  
Какой элемент должен иметь самый сильный контраст на экране?

А) Логотип  
Б) Основное действие пользователя  
В) Любая иконка  
Г) Второстепенный текст  

Правильный ответ: Б

Пояснение:  
Самый контрастный элемент — тот, который ведет пользователя к действию.

---

Вопрос 4  
Что из этого тоже является контрастом?

А) Только цвет  
Б) Только размер  
В) Цвет, размер, форма и толщина  
Г) Только яркие кнопки  

Правильный ответ: В

Пояснение:  
Контраст может быть создан через размер, цвет, форму, расстояние и насыщенность.

---

Вопрос 5  
Что происходит, если на экране слишком много ярких элементов?

А) Интерфейс становится интереснее  
Б) Пользователь быстрее принимает решения  
В) Элементы начинают конкурировать между собой  
Г) Пользователь быстрее замечает всё  

Правильный ответ: В

Пояснение:  
Слишком много акцентов создаёт визуальный шум.

Each question should be a separate screen in the quiz flow.