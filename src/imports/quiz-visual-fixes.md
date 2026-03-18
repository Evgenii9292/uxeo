Apply visual fixes to the current quiz screen.

Do NOT refactor the layout system.
Do NOT change component structure.
Only fix alignment and interactions.

---

1. Top navigation position

The back button bar should be positioned at the very top.

Add spacing:

• 20px from the top  
• 20px from the left  

---

2. Continue button alignment

The "Продолжить" button should NOT be aligned to the right edge.

It must align with the right quiz card.

The button's center should match the horizontal center of the right card.

---

3. "Сообщить об ошибке"

The "Сообщить об ошибке" text should be positioned:

• 20px from the bottom  
• aligned with the left margin

---

4. Card selection animation

Currently the card scales when selected.

Remove the scaling effect.

Selection should only change:

• border highlight
• glow / outline

Card size must remain unchanged.

---

5. Feedback alignment

When the user presses "Продолжить" and the answer feedback appears:

The feedback block must be centered horizontally under the quiz cards.

The feedback text and the next button should align with the center axis of the quiz layout.

It should NOT stick to the left side.

---

6. Sound feedback

Add simple UI sounds:

• play a short sound when a card is selected  
• play a confirmation sound when pressing "Продолжить"

Keep the sounds subtle and short.

---

Goal:

The layout should match the Figma design exactly while keeping the current component structure.