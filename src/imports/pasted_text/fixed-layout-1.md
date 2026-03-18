We are implementing a FIXED layout system for mobile quiz (A/B comparison).

Do NOT improvise spacing. Follow exact sizes.

---

DEVICE BASELINE:

- Width: 388px
- Height: 858px (iPhone 16)

---

LAYOUT STRUCTURE (TOP → BOTTOM)

1. HEADER → already exists

2. TITLE

- position:
  margin-top: 35px from header
- centered
- no dynamic spacing

---

3. CONTENT BLOCK (2 CARDS)

We use EXACT fixed sizes:

Each option (dark container):

- height: 220px
- width: 100% (with side padding)

Spacing:

- gap between two cards: 30px
- distance from title to first card: fixed (no auto spacing)

---

4. INNER WHITE CARD

Inside each dark container:

- height: 190px
- centered vertically
- equal top/bottom spacing inside container

- must NOT stretch randomly
- must NOT overflow

---

5. BOTTOM SAFE ZONE

- distance from last card to bottom button area: 30px

---

6. BUTTON (Continue / Check)

- fixed at bottom
- must NOT overlap content
- must NOT push layout

---

---

TABLET / LARGE DEVICES (e.g. Pro Max)

We SCALE containers:

- dark container height: 250px
- inner white card: ~220px

Rules:

- proportions stay the same
- layout stays identical
- ONLY height scales

---

STRICT RULES:

- NO auto spacing
- NO flex "space-between"
- NO dynamic stretching

Everything must follow fixed pixel system.

---

GOAL:

Stable, predictable layout where:
- content never jumps
- feedback always fits
- spacing is consistent across screens