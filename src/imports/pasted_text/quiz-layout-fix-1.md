Fix vertical alignment and layout flow in quiz screens.

DO NOT change logic, state, or component structure.
ONLY fix layout and positioning.

---

CURRENT ISSUE:

- Main content (question + answers) is pushed to top
- Bottom white card is detached and goes lower each quiz
- Layout becomes inconsistent across screens
- Connect elements are aligned to top instead of bottom

---

ROOT CAUSE:

Elements are NOT in the same layout flow.
Some elements (image/card/connectors) are positioned outside main flex container or using absolute positioning.

---

STRICT RULES:

1. ALL quiz content must be inside ONE vertical layout container.

Structure must be:

[ screen container ]
  → [ centered content wrapper ]
      → [ question ]
      → [ main row (image + answers OR compare OR connect) ]

NO elements outside this flow.

---

2. REMOVE:

- position: absolute (for layout elements)
- translate / top / margin hacks
- any separate bottom blocks

---

3. SCREEN CONTAINER:

Use stable vertical centering:

display: flex;
flex-direction: column;
justify-content: center;
align-items: center;
min-height: 100%;

---

4. CONTENT WRAPPER:

max-width: 900px;
width: 100%;
display: flex;
flex-direction: column;
gap: 40px;

---

5. MAIN ROW (CRITICAL):

This row MUST contain BOTH:
- image/card
- answers

Use:

display: flex;
align-items: center;
justify-content: center;
gap: 40px;

---

6. IMAGE / CARD (FIX MAIN BUG):

The white card MUST be inside this row (NOT below).

Use:

width: 320px;
flex-shrink: 0;
display: flex;
align-items: center;
justify-content: center;

NO absolute positioning.

---

7. ANSWERS BLOCK:

display: flex;
flex-direction: column;
gap: 16px;
flex: 1;

---

8. CONNECT QUIZ FIX:

Connect elements must be aligned to bottom of container.

Wrap them in:

display: flex;
flex-direction: column;
justify-content: space-between;
height: 100%;

Bottom section:
align-self: center;

---

9. IMPORTANT:

- DO NOT stack image below content
- DO NOT place card outside main row
- DO NOT use margin-top to push elements

---

EXPECTED RESULT:

- Entire quiz content always centered vertically
- Image/card always aligned with answers
- No drifting between quizzes
- Connect elements aligned correctly (bottom center)
- Consistent layout across ALL quiz types

---

This is a layout flow issue, not a styling issue.
Fix structure, not visual hacks.