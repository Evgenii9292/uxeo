fix"}
Fix lesson progress synchronization.

Current issue:

Quiz progress and lesson card progress are not synchronized.

Example:

User answers 4 questions correctly during the quiz, but the lesson card still shows "1 / 5".

Correct behavior:

Lesson progress must update immediately after each correct answer.

When a correct answer is selected:

1. Increase correctAnswers
2. Update lesson progress
3. Update lesson XP

Example logic:

correctAnswers += 1  
lesson.correctAnswers = correctAnswers  
lesson.xpEarned = correctAnswers × 25  

The lesson card must always read its progress from lesson.correctAnswers.

XP behavior:

XP must be awarded only if the lesson is not completed yet.

Replay mode:

Replay mode must activate ONLY after the lesson is fully completed.

During the first pass:

• Correct answer → show "+25 XP"

During replay:

• Correct answer → show "Верно!"
• Do not show XP

Lesson completion:

When all quiz questions are finished:

lesson.completed = true

Then the roadmap node becomes green and replay mode becomes availa