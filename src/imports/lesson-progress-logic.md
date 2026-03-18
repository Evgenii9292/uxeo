Implement the final lesson progress and completion logic.

1. Lesson progress should be based on tasks.

Use the formula:

completedTasks / totalTasks

Example for a lesson with 5 tasks:

1 / 5  
2 / 5  
3 / 5  
4 / 5  
5 / 5

The lesson card should display progress in this format instead of percentages.

Example:

3 / 5

The progress bar width must match the same value.

Example:

3 / 5 → progress bar filled to 60%

Currently the text changes but the bar does not fill.  
Both must use the same progress value.

---

2. Progress persistence rule

Progress should only be saved if the user finishes the entire lesson.

If the user exits the lesson before reaching the last task, the progress is NOT saved.

When the user returns later, the lesson should start again from:

0 / totalTasks

XP should also not be saved in this case.

---

3. Completion logic

When the user finishes the lesson (answers the final question), the result becomes permanent.

Example:

4 correct answers out of 5 → show:

4 / 5

The progress bar should be fully filled but colored yellow.

If all answers are correct:

5 / 5  
progress bar = green

---

4. Progress bar color states

While the lesson is in progress  
• progress bar = orange

Lesson finished but some answers incorrect  
• progress bar = yellow

Lesson finished with all correct answers  
• progress bar = green

---

5. Lesson card button states

0 / totalTasks  
Button: "Начать"

1–(totalTasks-1)  
Button: "Продолжить"

Lesson finished  
Button: "Повторить"

---

6. Fix progress bar behavior

The progress bar in the lesson card currently does not fill correctly.

Make sure the bar width is always calculated from:

completedTasks / totalTasks

---

7. Quiz exit behavior

Replace the back arrow in the quiz with a close (X) icon.

When the user clicks the close icon, show a confirmation modal.

Modal text:

"Выйти из урока?"

Buttons:

Primary button:  
"Продолжить урок"

Secondary button:  
"Выйти из урока"

If the user chooses "Выйти из урока":

• current lesson progress resets to 0  
• XP from the unfinished lesson is not saved