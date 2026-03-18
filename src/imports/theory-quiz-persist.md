Please fix the behavior of the Theory page when reopening it.

Currently completed mini-quizzes lose their feedback block after reopening the page.

The green check icons remain, but the explanation and button disappear.

This should not happen.

---

1. Restore feedback block after reload

If a mini quiz was already answered, the UI must restore its result state.

Correct behavior:

When reopening the Theory page:

• show the selected card (correct or incorrect state)  
• show the feedback message  
• show the explanation text  
• show the action button

The user should see the same result they saw before leaving the page.

Do not hide the feedback block after reload.

---

2. Persist mini quiz state

The following state must be saved and restored:

selectedAnswer  
isCorrect  
feedbackVisible

When the page loads, restore these values and render the feedback UI.

---

3. Last accordion button

For the last accordion only:

replace the white "Продолжить" button with

"Начать квиз"

This button should start the main quiz for the lesson.

Do not show "Продолжить" on the last accordion.

---

Goal

Ensure that mini-quiz results persist when reopening the Theory page and replace the last accordion button with "Начать квиз".