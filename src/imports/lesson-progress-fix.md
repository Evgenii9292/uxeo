ss_fix"}

Fix lesson progress and XP behavior.

Current issue:

Lesson progress does not update correctly.

Example:

Lesson shows "1 / 5" even after answering more questions correctly.

Correct behavior:

Each lesson contains multiple quiz questions (example: 5).

When a correct answer is selected:

• correctAnswers must increase by 1  
• lesson progress must update immediately  

Example:

1 correct → 1 / 5  
2 correct → 2 / 5  
3 correct → 3 / 5  

XP rules:

Correct answer = 25 XP.

XP must be awarded only if the lesson is not yet completed.

Lesson states:

lesson_started  
lesson_in_progress  
lesson_completed  

Replay mode:

Replay mode should activate ONLY when the lesson is fully completed.

If the lesson is not finished yet:

• XP must be awarded
• "+25 XP" should appear on correct answers

If the lesson is already completed:

• XP should NOT be awarded
• Do not show "+25 XP"

Exit rule:

If the user exits before finishing the lesson:

• lesson progress resets
• XP is n