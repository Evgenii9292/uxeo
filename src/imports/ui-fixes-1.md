Implement the following UI fixes.  
Do NOT change lesson logic or roadmap structure.

---

1. REMOVE WHITE GLOW UNDER ACTIVE NODE

Currently the selected roadmap lesson has a white glow.

Remove this glow completely.

Instead use a background plate under the node (as shown in the Figma reference).

So the structure becomes:

node circle  
+ colored background plate behind it

No blur glow.

---

2. UNIFY BUTTON PRESS ANIMATION

All buttons must use the same press animation.

Default state  
shadow: 5px

Hover  
shadow: 2px  
button moves down ~3px

Active (click)  
shadow: 0  
button moves further down

Important:
the button must visually move down, not up.

Apply this to ALL buttons:

- orange buttons
- green buttons
- white buttons
- grey locked buttons

---

3. LOCKED BUTTON STYLE

Locked lesson buttons look incorrect.

Use the same visual style as locked buttons in course modules.

Requirements:

- inset / pressed look
- darker grey surface
- lock icon
- consistent padding and radius

Use the provided Figma reference.

---

4. BUTTON TEXT SHORTENING

Update button labels:

Completed lesson  
"Повторить квиз" → "Повторить"

Locked lesson  
"Начать квиз" → "Начать"

---

5. LOCKED CARD TEXT OPACITY

Currently locked card text uses reduced opacity.

Remove opacity.

These elements must have normal text color:

- "Заблокировано"
- "0 / 5"
- description text

Icons can remain unchanged.

---

6. KEEP CARD STRUCTURE IDENTICAL

Locked cards must remain visually identical to normal lesson cards.

Elements that must stay:

title  
description  
progress bar  
progress label  
meta row  
buttons

Only the button state changes.

---

7. DO NOT CHANGE ROADMAP LOGIC

Roadmap behavior and lesson switching are already correct.

Only fix UI styling and interactions.