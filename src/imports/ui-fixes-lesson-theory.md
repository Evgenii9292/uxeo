047"}
Apply the following UI fixes.

Important:
Do NOT modify global components or layouts.
Do NOT change other pages.

Only update:

• Lesson theory page
• Right column quiz button
• Accordion behavior

---

1. Right quiz button style

The quiz button in the right column must use the existing primary button component, not a new custom button.

Reuse the same button styles used elsewhere in the app.

Behavior must include:

• hover press effect
• slight vertical movement
• shadow reduction on hover

The button should be styled as a secondary action.

Use the white version of the button instead of the orange version.

The orange version should remain reserved for primary actions.

---

2. Remove visual artifacts on the left side

The lesson container currently shows visual artifacts on the left edge.

Fix container overflow and padding so that:

• no background artifacts appear
• the lesson card edges remain clean
• scrolling works correctly

---

3. Accordion expansion structure

Currently when the first accordion opens, a second background container appears below it.

This is incorrect.

The accordion must be a single card container.

Structure should be:

Accordion card
  header
  content
      theory
      quiz

When the accordion opens, the same card expands downward.

Do NOT create a second background section.

---

4. Accordion animation

The accordion should expand smoothly downward.

Animation rules:

• expand height smoothly
• no layout jump
• duration ~200ms
• ease-out

The card should visually stretch downward rather than creating a new block.

---

5. Sidebar active state

When the user is inside the learning section (courses, lessons, theory):

The "Обучение" item in the sidebar must appear active.

Active style must match the hover style.

---

6. Remove hover animation on quiz result cards

Cards such as:

"Какой интерфейс лучше?"

must not have hover effects after the user has answered.

They are informational and should remain static.

---

Goal

Clean up the UI by fixing button styling, removing layout artifacts, correcting accordion expansion behavior, and ensuring consistent interaction patt