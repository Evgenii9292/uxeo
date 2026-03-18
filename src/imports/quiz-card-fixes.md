The last changes broke the quiz card layout.

Do NOT modify the card design, background colors, or borders of the answer cards.

Restore the original card styles.

---

1. Incorrect answer block

Only modify the feedback message block.

The incorrect answer layout must be identical to the correct answer layout.

Use the same container, same width, same spacing.

The message must NOT push the button outside the card.

Structure must be:

[icon] message  
explanation text  
button

Example:

💪 Почти справился. Попробуй другой вариант  
Explanation text.

Important:

• remove the "+15 XP"  
• replace the icon with the fist icon  
• keep the same container size as the correct answer block  

Do not change the card colors or card borders.

---

2. Fix text overflow

The feedback text must stay inside the card.

Add width constraints so the text wraps to the next line instead of pushing elements outside the layout.

The button must remain inside the card at all times.

---

3. Continue button behavior

When the user presses "Продолжить":

• close the current accordion  
• open the next accordion  
• smoothly scroll the viewport to it

Animation:

smooth scroll  
duration ~0.3s

This is required so the lesson flow moves downward.

---

4. Accordion completion indicator

When the user answers correctly:

replace the black dot next to the accordion title with a green check icon.

Example:

● → ✔

This icon must remain visible when the accordion collapses.

---

Goal

Fix the incorrect answer feedback block without changing the quiz card design, restore the scroll-to-next accordion behavior, and show the completion check icon in the accordion header.