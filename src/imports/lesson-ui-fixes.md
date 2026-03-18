Fix several UI behaviors.

1. Lesson progress bar

The lesson card currently shows text progress (for example 20%) but the progress bar does not fill.

The progress bar must use the same progress value.

progress = completedTasks / totalTasks

The percentage text and the bar width must always match.

Example:

20% → bar filled 20%  
100% → bar filled 100%

When the lesson is fully completed:

• Show a checkmark instead of percentage  
• Progress bar becomes green  
• Button text becomes "Повторить"

---

2. Replace the back button in quizzes

Replace the back arrow with a close icon (X).

The quiz is not a navigation back action.  
It is closing the lesson.

---

3. Exit confirmation modal

When the user clicks the close icon, show a confirmation modal.

Modal text:

"Выйти из урока?"

"Вы уверены, что хотите выйти? Текущий прогресс может быть потерян."

Buttons:

Primary button:
"Продолжить урок"

Secondary button:
"Выйти из урока"

Primary button should use the main orange button style.

Secondary button should be a subtle neutral button.

The background should dim when the modal appears.