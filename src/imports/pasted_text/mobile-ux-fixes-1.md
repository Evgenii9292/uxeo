We are fixing mobile UX issues. Do NOT redesign. Fix only layout, positioning, and interactions.

---

1. CONTINUE BUTTON (CRITICAL)

Fix ALL issues:

- position: fixed
- bottom: above browser UI (safe-area)
- use: padding-bottom: env(safe-area-inset-bottom)
- must NEVER be hidden

Remove:

- any dark background behind the button
- button should float cleanly over content

---

2. TAB BAR (HIDE ON SCROLL)

Implement:

- scroll down → hide tab bar
- scroll up → show tab bar

Use simple scroll direction detection.

---

3. ROADMAP FIXES

- floating buttons (Figma + gift):
  - add spacing: 10px between them
  - move them ABOVE Continue button
  - no overlap

- roadmap nodes:
  - add vertical spacing: 10px
  - ensure they do NOT overlap each other

---

4. QUIZ: GENERAL FIXES

- Continue button:
  - move up (~40px)
  - always visible

---

5. QUIZ: COMPARE (A / B)

- REMOVE labels "A" and "Б"
- center content vertically
- increase card height
- ensure images:
  - fully visible
  - centered
  - not cropped

---

6. QUIZ: MULTICHOICE

- add checkboxes on the right side (like desktop)
- improve spacing
- align text properly

---

7. QUIZ: MATCHING (CONNECT)

Fix logic:

- user can start from ANY card
- can connect in any order
- fix broken interaction (currently not working at all)

---

8. QUIZ: FEEDBACK (WRONG ANSWER)

Current layout is broken.

Fix:

- icon (👊 / error) on top
- below:
  - correct answer (e.g. "B")
  - explanation text

NOT side-by-side

---

9. TEXT ALIGNMENT

Fix everywhere:

- center text inside cards
- ensure consistent padding
- no misaligned text blocks

---

10. IMAGE BLOCKS

- increase height of image container
- center image
- prevent cropping

---

IMPORTANT:

- DO NOT redesign UI
- DO NOT change colors or style
- DO NOT create new components

ONLY fix usability and layout

---

RESULT:

- No overlaps
- No hidden buttons
- Clean quiz UX
- Stable interactions