The fixes were applied in the wrong place.

You modified the quiz component but did NOT update the Theory page implementation where the inline quiz actually appears.

All changes must be applied inside the Lesson Theory page (LessonTheoryPage / TheoryPage) where the mini quiz is rendered.

Do not modify unrelated pages.

---

1. Incorrect answer UI

On the Theory page mini quiz:

Replace the current message:

"Неверно"

with the following structure:

💪 Почти! Попробуй другой вариант

Below it show a short explanation of the correct answer.

Style rules:

• icon: use the same fist icon used in other quizzes  
• text color: reddish (not green)  
• XP must NOT be granted  
• explanation text must appear under the message  

Example structure:

[icon] Почти! Попробуй другой вариант  
Explanation text about why the correct answer is better.

---

2. Fix FIRST accordion structure

The first accordion is still incorrect.

Current structure (WRONG):

Card A
  header

Card B
  content

Correct structure (REQUIRED):

ONE SINGLE CARD

AccordionCard
  Header
  ExpandableContent

The card must expand downward inside the same container.

Do NOT create a second card below the header.

When opened, the same card increases height.

---

3. Visual behavior of accordion

When the accordion opens:

• the card expands downward
• the background remains one continuous surface
• header and content share the same card container

There must be no visual separation between header and content.

---

4. Apply fixes directly to the Theory page

Verify that the mini quiz inside the Theory page uses the updated incorrect answer UI.

Right now the page still renders the old UI.

Update the component used inside TheoryPage.

---

Goal

1. Update incorrect answer feedback inside the Theory page mini quiz.  
2. Fix the first accordion so it uses a single expanding card instead of two cards.