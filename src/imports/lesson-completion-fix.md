Please fix the lesson completion screen.

Currently the completion screen shows static values and does not reflect the real quiz results.

---

1. XP must be calculated dynamically

Currently the screen always shows:

+125 XP

This value must NOT be static.

Instead calculate XP based on the actual answers.

Example logic:

totalQuestions = 5  
xpPerQuestion = 25  

earnedXP = correctAnswers * xpPerQuestion

The completion screen must display:

+earnedXP XP

Example:

3 correct → +75 XP  
5 correct → +125 XP  

---

2. Show quiz completion stats

Add a small stat line under the title.

Example:

Поздравляем!  
Урок пройден

3 из 5 заданий выполнено

+75 XP ⚡

This should reflect the real quiz result.

---

3. Update XP in global state

When the lesson finishes:

• add earnedXP to the global XP state  
• update the header XP immediately

The header must reflect the new total XP.

---

4. Fix streak update

Currently streak does not appear in the header.

Correct behavior:

If the user completes a lesson and today is a new day:

• increase streak by +1  
• update the streak counter in the header immediately

Streak must only increase once per day.

---

5. Streak screen styling

On the streak screen:

• color "Серия началась" using the main orange accent color  
• streak circles can use a yellow highlight color

Use existing design tokens.

---

Goal

Make the completion screen show real results (correct answers and earned XP), update global XP correctly, and ensure the streak system updates and displays in the header.