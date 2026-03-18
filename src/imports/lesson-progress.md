Implement dynamic lesson progress logic.

The lesson progress must NOT depend on a fixed number of questions.

Instead, progress must always be calculated from the total number of tasks in the lesson.

Formula:

progress = completedTasks / totalTasks

Example:

If a lesson has 5 tasks  
1 completed → 20%  
2 completed → 40%  
3 completed → 60%  
4 completed → 80%  
5 completed → 100%

If a lesson has 10 tasks  
1 completed → 10%  
5 completed → 50%  
10 completed → 100%

The UI must always calculate progress dynamically from the lesson data.

---

Lesson card behavior:

0 completed tasks  
• Progress = 0%  
• Button text = "Начать"

1+ completed tasks but lesson not finished  
• Progress shows percentage  
• Button text = "Продолжить"

All tasks completed  
• Show a checkmark instead of percentage  
• Progress bar becomes green  
• Button text = "Повторить"

---

The progress bar inside the lesson card must reflect the same progress as the quiz completion.

---

Daily task block should follow the same logic as League progress.

Instead of the current layout, display XP like this:

⚡ currentXP / requiredXP

Example:

⚡ 25 / 30 XP

Keep the scale below:

0        30

---

Remove the avatar icon from the header.

The header should only contain:
• progress bar
• XP counter