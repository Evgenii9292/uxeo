We continue fixing mobile UX. Do NOT redesign. Only fix layout, spacing, and behavior.

---

1. ROADMAP (CRITICAL)

- Right-side floating buttons:
  - add vertical spacing: 10px between them
  - place ABOVE Continue button (no overlap)

- Roadmap nodes:
  - add vertical spacing between nodes: 10px
  - currently they are visually stuck together → fix spacing

- Continue button:
  - REMOVE any dark/black background behind it
  - button must float cleanly

- When tab bar hides on scroll:
  - Continue button must move DOWN and take its place
  - no “floating gap” allowed

---

2. THEORY PAGE

- "Начать квиз" button:
  - reuse EXACT same component as Continue button (Roadmap)
  - same behavior (sticky + safe area + scroll interaction)

---

3. FEEDBACK MODAL (IMPORTANT UX)

Change logic:

- Replace:
  "Насколько был полезен урок?"

- With:
  "Насколько вам нравится приложение?"

Add fields:

- Rating (stars) → keep
- Text input:
  - "Что было неудобно или можно улучшить?"
- Optional:
  - "Чего не хватает?"

- Email field → keep

Button:
- use PRIMARY style (same system as app)
- not default grey button

---

4. QUIZ: GLOBAL LAYOUT FIX

Problem: content is too low → feedback does not fit

Fix:

- shift ALL quiz content UP by ~20px
- ensure:
  - space for feedback block
  - no overlap with button

---

5. QUIZ: IMAGE HANDLING

- images must:
  - be centered
  - fully visible (no cropping)
  - scaled down if needed

- goal:
  - ALWAYS leave space below for feedback

---

6. QUIZ: TRUE/FALSE (2 OPTIONS)

- remove A / Б labels (already correct)
- reduce image size slightly
- shift layout upward

---

7. QUIZ: SINGLE CHOICE

Fix:

- text alignment:
  - center vertically inside options
  - consistent padding

- image:
  - centered
  - scaled down (no cropping)

- ensure:
  - feedback text NEVER overlaps image

---

8. QUIZ: MULTICHOICE

- REMOVE image completely (only in this type)

- checkboxes:
  - reduce size (currently too large)
  - align right
  - keep clean spacing

- shift block upward so:
  - feedback fully fits
  - button is visible

---

9. FEEDBACK BLOCK (QUIZ RESULT)

Fix layout:

- always below content
- never overlap
- structure:

  icon
  text (correct answer)
  explanation

- must fit fully on screen above button

---

10. GLOBAL RULE

At ANY screen:

- no element overlaps button
- no content hidden behind browser UI
- no cropped images
- spacing must be consistent

---

IMPORTANT:

Do NOT redesign visuals.
Do NOT change colors.
Do NOT introduce new UI patterns.

Only fix usability and layout issues.