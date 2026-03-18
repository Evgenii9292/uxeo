We need to apply several precise fixes to the roadmap screen.  
Do NOT redesign anything again. Only fix the issues listed below.

Work only on the DESKTOP roadmap screen.

---

1. GREEN NODE INTERACTION

Remove the green hover glow.

Green nodes must NOT have glow.

Interaction should work like this:

Default:
• shadow = 5px

Hover:
• node moves down by 3px
• shadow reduces to 2px

Click / press:
• node moves fully down
• shadow becomes 0px

Important:
the node moves toward the shadow (like physical button press).

---

2. ORANGE BUTTON STYLE

The orange "Продолжить" button lost its original styling.

Fix it:

• use the exact style from the reference I will send
• copy the press animation from existing grey buttons on the site
• same animation timing
• same shadow behavior

Only keep the orange colors.

---

3. POPUP BUTTONS

Buttons inside the popup currently have incorrect interaction.

Fix:

• copy button style and animation from buttons used on the Courses page.

---

4. HANDWRITTEN "FIGMA"

The handwritten "Figma" note is in the wrong place.

Move it:

• place it next to the "Домашнее задание" node
• keep it visually attached to that node

---

5. HAND-DRAWN SELECTION RING

The new hand-drawn SVG circle should appear under the selected node.

Behavior:

• when a node is selected → show the new hand-drawn SVG highlight
• keep the old highlight but reduce its opacity

---

6. ROADMAP POSITION

Move the entire roadmap (all nodes + path) 40px upward.

---

7. MODULE LABELS

"Модуль 1" and "Модуль 2" must align with the left content container.

Align them with the back arrow / main content column.

---

8. HEADER DIVIDER

The header divider line must extend fully to the sidebar.

Currently it stops early.

Make it stretch exactly like the tablet version.

---

9. HANDWRITTEN NOTES

Add the missing note:

"Мы с тобой"

Place it between the "Цвет" and "Иерархия" nodes slightly to the right.

Also move the "Ты здесь" note 40px higher so it aligns better.

---

10. LOCKED LESSON NODES

Grey locked nodes must have:

• NO shadow
• flat grey appearance
• only border / fill

They should not look clickable.

---

11. ROADMAP SCROLL BUG

Fix horizontal scrolling.

The roadmap screen must NOT scroll horizontally.

Only vertical scrolling should be possible.

---

12. WIDGET COLUMN

Widgets must be sticky.

They should remain fixed while the roadmap scrolls.

---

13. GREEN NODE BORDER

Green nodes are missing the circular gradient border.

Use the gradient border style from the reference frame I provided.

---

14. DEMONSTRATION STATES

Show three node examples:

Completed:
• full green
• checkmark

Partial:
• 60% progress ring

Current:
• orange node

Use the styles from the provided reference frames.

---

Important:

Do NOT modify:
• layout structure
• sidebar
• popup size
• widget design

Only apply these fixes.