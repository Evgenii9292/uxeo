STRICT PATCH — UX POLISH FIXES

Apply UI fixes without redesigning layout.

DO NOT move roadmap nodes.
DO NOT change component structure.

--------------------------------
FIX 1 — ORANGE BUTTON HOVER
--------------------------------

Problem:
The orange "Продолжить" button shows a TOP shadow on hover.

Expected behaviour:
The button should behave like other buttons in the UI:
• no shadow appearing above
• when pressed it moves DOWN
• the bottom shadow disappears

Implementation:

Default state:
box-shadow: 0 6px 0 rgba(0,0,0,0.35);

Hover:
transform: translateY(2px);
box-shadow: 0 4px 0 rgba(0,0,0,0.35);

Active (pressed):
transform: translateY(6px);
box-shadow: 0 0 0 rgba(0,0,0,0);

Remove any TOP shadow.

--------------------------------
FIX 2 — DIVIDER POSITION
--------------------------------

The divider after "Домашнее задание" must move DOWN.

Add additional spacing above it.

margin-top: 40px

--------------------------------
FIX 3 — MODULE TITLE STYLE
--------------------------------

"Модуль 1"
"Модуль 2"

Make them less prominent.

font-weight: 400
color: rgba(195,198,209,0.45)

Keep same size and position.

--------------------------------
FIX 4 — LESSON PROGRESS COLOR
--------------------------------

The "60%" text color must match the green check icon.

Remove gradient.

Use solid color:

color: #6DA233

--------------------------------
FIX 5 — "ТЫ ЗДЕСЬ" LABEL POSITION
--------------------------------

The orange "Ты здесь" indicator must always appear near the CURRENT lesson node.

Move it from the green node to the orange "Иерархия" node.

Position rules:
• label ABOVE the node
• arrow pointing DOWN to the node
• always attached to the active lesson node

--------------------------------
FIX 6 — POPUP BUTTON SPACING
--------------------------------

Buttons inside popups are too close to the bottom.

Add bottom padding so spacing from bottom edge = 20px.

--------------------------------
FIX 7 — WEEKLY CHALLENGE PROGRESS BAR
--------------------------------

The progress bar in "Недельные вызовы" must reflect actual progress.

Rules:
• when progress = 0 → bar empty
• when progress > 0 → fill proportionally

Use:

width = progress / total

Example:
1 / 3 = 33%

--------------------------------
GOAL

Clean interaction polish without changing the roadmap layout.