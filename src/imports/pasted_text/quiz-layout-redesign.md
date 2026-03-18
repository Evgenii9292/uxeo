We are redesigning ONLY mobile & tablet quiz layouts to be more compact.

DO NOT touch desktop version.

Goal:
Make all quiz types fit vertically so that:
- content
- feedback (correct/incorrect)
- Continue button

ALL visible at the same time.

---

1. GLOBAL COMPACT MODE

- Reduce vertical spacing everywhere
- Reduce card internal padding (top/bottom)
- Keep font sizes unchanged (readability is priority)

---

2. QUIZ: IMAGE CARDS (A/B, comparisons)

- Reduce white card height
  - decrease top and bottom padding
- Keep width the same
- Slightly reduce image size if needed

- Shift entire block UP

- Ensure:
  - space exists below for feedback text
  - no overlap with Continue button

---

3. QUIZ: SINGLE CHOICE (4 options)

Fix:

- Text inside options:
  - vertically centered (currently top-aligned → fix)

- Reduce option height slightly
- Reduce vertical spacing between options

- Move whole block UP (question + image + answers)

- Image:
  - scale down slightly
  - must not be cropped

---

4. QUIZ: MULTICHOICE

- Remove image completely (mobile only)

- Options:
  - reduce height
  - reduce checkbox size
  - vertically center text

- Tighten spacing between options

- Move block UP to free space for feedback

---

5. QUIZ: TRUE/FALSE (2 cards)

- Reduce internal padding in cards
- Slightly reduce image size
- Keep proportions

- Ensure cards do not consume too much vertical space

---

6. FEEDBACK BLOCK (CRITICAL)

- Must ALWAYS fit on screen

- Structure:
  icon
  text
  explanation

- Never overlap cards

- If needed:
  - prioritize reducing content height above

---

7. CONTINUE BUTTON

- Must always be visible
- Must not overlap feedback
- Must not be hidden by browser UI

---

8. THEORY MICRO-CARDS FIX

- White inner cards:
  - stretch vertically so top and bottom spacing are equal
  - keep proportions
  - do NOT leave excessive empty space

---

9. MATCHING (CONNECT) FIX

Fix bug:

- On first click:
  - ONLY highlight selected card
  - DO NOT draw line

- On second click:
  - draw connection line correctly

- Remove current bug where line jumps to top-left corner

---

IMPORTANT:

- Do NOT redesign UI
- Do NOT change fonts
- Do NOT change colors

Only optimize layout for vertical fit and usability

---

RESULT:

All quiz screens must feel tighter, cleaner, and fully visible without scrolling.