The implementation is incorrect.

Do not create simplified accordion rows.

Recreate the layout exactly as in the provided Figma frame.

Important: each accordion section must be a full card container, not just a text row.

Accordion structure

Each accordion must contain a card block with padding and background exactly as in the design.

Inside every accordion card there must be:

1. Theory content  
Use the exact theory text that was previously provided.

2. The mini-quiz block  
This mini quiz must reuse the SAME quiz component styles used in the main quiz pages.

Do NOT invent a new quiz design.

Mini-quiz behavior

Initial state:
- answer is not selected
- feedback is hidden
- there is NO "Продолжить" button

When user selects an option:

- the option highlights using the same colors used in the main quiz
- feedback text appears
- XP reward appears
- the button "Продолжить" appears

When "Продолжить" is pressed:

- the current accordion collapses
- the next accordion opens
- the page scrolls to the next section

Accordion visual structure

Each accordion must be wrapped in the same card container used in the design:

Card
 ├ Accordion header
 └ Accordion content
      ├ theory text
      └ mini quiz block

Do not render accordion rows without the card container.

Content

The accordion content must include the theory blocks:

- "Цвет помогает ориентироваться"
- "Цвет показывает важность"
- "Цвет — это система подсказок"

These must appear exactly inside the expanded accordion.

Goal

Reproduce the Figma layout exactly and embed the theory content and mini quiz inside each accordion card using the existing quiz component styles.