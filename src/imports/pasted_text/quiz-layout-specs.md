We are defining a FIXED layout system for mobile & tablet quizzes.

Do NOT improvise. Follow exact sizes.

---

BREAKPOINTS:

1. Mobile small:
- 388 × 858

2. Mobile large:
- 440 × 954

---

========================
MULTICHOICE (checkbox)
========================

--- 440 × 954 ---

TITLE:
- margin-top from header: 35px

IMAGE CARD:
- height: 215px

SPACING:
- title → image: fixed (same as system)
- image → answers: 30px

ANSWERS:
- each option height: 60px
- full width of container

- gap between options: 20px

STATE TEXT (below answers):

Before answer:
- "Выберите несколько вариантов"

After submit:
- replace with:
  - result (correct/incorrect)
  - explanation text

SPACING:
- answers → state text: 20px
- state text → button: fixed safe spacing

---

--- 388 × 858 ---

TITLE:
- margin-top: 35px

IMAGE CARD:
- height: 185px

INNER IMAGE:
- height: 160px
- centered

SPACING:
- image → answers: 20px

ANSWERS:
- height: 50px
- gap: 20px

CHECKBOX:
- vertically centered with text
- aligned right

TEXT:
- vertically centered inside option

---

========================
SINGLE CHOICE (1 of 4)
========================

Use SAME layout as multichoice with differences:

- no checkbox (or optional indicator)
- same heights:
  - 50px (small)
  - 60px (large)

- same spacing system

---

========================
GLOBAL RULES
========================

- NO auto layout stretching
- NO dynamic heights
- NO content pushing button

- All elements must fit vertically:
  - image
  - answers
  - feedback
  - button

- Feedback replaces helper text (NOT overlaps)

- Button always visible

---

GOAL:

Consistent quiz system across all screens with predictable spacing and no layout breaks.