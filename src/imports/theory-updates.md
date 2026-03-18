Update the Theory page based on the following corrections.

Do NOT redesign components.  
Only apply the fixes listed below.

---

1. Highlight blocks (important)

Currently there are too many highlighted blocks (green background text blocks).

Example:
"Пользователь быстро понимает, куда нажать."
"Так интерфейс выглядит спокойным и понятным."

This is incorrect.

Rule:
Only ONE highlight block should exist in the section.

The other sentences must be normal text without background.

Example correct structure:

normal text  
normal text  
highlight block (only once)

---

2. Remove placeholder text inside quiz cards

Inside the answer cards there is placeholder text like:

"Использовать один основной цвет и нейтральные оттенки"

This text should NOT appear inside the card layout.

The cards are only visual placeholders for interface examples.

The card must remain empty for now (image area).

We will add interface screenshots later.

Do not place explanatory text inside the card.

---

3. Do NOT change card sizes

The quiz cards were resized incorrectly.

Restore the original card size.

Card size must remain exactly as in the original component.

Do not modify:

• width  
• height  
• border radius  
• spacing

Only the content inside cards will change later.

---

4. Fix quiz question header layout

Current problem:
The quiz question text pushes the right-side label ("Закрепим!") out of alignment.

Correct layout:

Left side:
Question title

Right side:
Small label "Закрепим!" with icon

Rules:

The question title must wrap to the next line if it is too long.

The right-side label must stay aligned to the right and never move.

Use flex layout.

Example layout:

[Question title (can wrap)]
                              [icon + Закрепим!]

---

5. Question title length

The question should be short and clear.

Example:

Какой подход к цветам лучше?

Avoid long titles.

---

6. Add scroll fade effect

Add soft gradient fade at top and bottom of the scroll container.

Top fade:
content softly disappears under the header.

Bottom fade:
content softly fades out near the bottom.

Fade height:
40–60px.

The gradient color must match the page background.

Do NOT use black gradients.

---

7. Last button color

The final button in the last accordion must be orange.

Button:
"Начать квиз"

Use the same orange button style used in the main interface.

Do not use the white button style here.

---

Goal

Do not redesign anything.

Only fix:

• highlight blocks
• quiz card content
• quiz header layout
• scroll fade
• final button color