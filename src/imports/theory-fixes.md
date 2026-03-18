Please apply the following fixes on the Theory page.

Do not redesign components. Only fix behavior and layout.

---

1. Incorrect answer layout

The incorrect answer message must be vertically centered in the feedback area.

Current issue:
The message appears at the bottom and pushes the layout.

Correct behavior:

• the message block should appear in the middle of the card  
• the explanation text should be below it  
• the button stays at the bottom of the card  
• the layout must not overflow outside the card

Structure:

cards  
feedback block (centered)  
button (bottom)

---

2. XP is not updating the header

Currently +15 XP is displayed visually but does not update the total XP in the header.

Correct behavior:

When the user answers correctly:

• add XP to the global XP state  
• update the header XP counter immediately

Example:

currentXP = currentXP + 15

The header must reflect the new value instantly.

---

3. Accordion completion state is not saved

Currently completed mini-quizzes reset when reopening the theory page.

Correct behavior:

When the user answers correctly:

• mark the accordion as completed  
• replace the black dot with a green check icon  
• persist this state

When the page reloads or theory is reopened:

• completed accordions must remain completed  
• the green check icon must remain visible

---

4. First accordion incorrectly shows completed state

Currently the first accordion shows the green check icon by default.

Correct behavior:

• default state = black dot  
• green check icon appears ONLY after the correct answer is selected

---

Goal

Fix incorrect answer layout positioning, ensure XP updates the header correctly, and persist the accordion completion state.