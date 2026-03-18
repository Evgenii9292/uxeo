57391"}
Apply the following improvements.

Important:
Do NOT modify global layout components.
Do NOT change course cards or other pages.

Only update:

• Lesson Theory page
• Inline quiz behavior
• Sidebar active state

---

1. Move "Начать квиз" button to the right panel

The "Начать квиз" button should no longer be fixed at the bottom of the lesson.

Instead, place it inside the right widgets column.

Behavior:

• the button stays visible while scrolling
• it is always accessible
• it starts the main quiz for the lesson

Placement:

Right column  
under the widgets section.

Do not make it overly bright.
Use the same style but slightly toned down so it doesn't distract from reading.

---

2. Persist inline quiz results

Inline mini quizzes inside theory must remember their completed state.

Current issue:
After refresh or navigation the quiz resets.

Correct behavior:

If a user has already answered the mini quiz correctly once:

• keep the selected state
• keep the result visible
• disable re-answering

User should not need to repeat the mini quiz again.

---

3. Correct / incorrect logic

Quiz answer behavior must be:

Correct answer:

show  
"Верно! +15 ⚡"

Incorrect answer:

show  
"Неверно"

Important:

Incorrect answers must NOT grant XP.

Correct answers grant XP only once.

---

4. Sidebar active state

The sidebar currently only shows hover styles.

Add a real active state.

If the user is inside the learning area (courses, lessons, theory):

The "Обучение" menu item must appear active.

Active state must use the same visual style as the hover state.

Example:

Sidebar

[Обучение]  ← active
Вызовы
Профиль

This state should persist while navigating inside learning pages.

---

Goal

Improve usability by adding persistent quiz access, saving mini-quiz progress, correcting XP logic, and adding a proper sidebar active