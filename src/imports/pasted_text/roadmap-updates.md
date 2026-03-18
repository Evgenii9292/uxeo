We need to refine the roadmap screen.  
Do NOT restructure the layout again — only fix the details listed below.

Work only on the DESKTOP roadmap screen.

---

1. ROADMAP PATH (SVG LINE)

The roadmap path is currently too curved and uneven.

Update the SVG path:

• make the path smoother  
• reduce the number of curve points  
• create a mostly vertical smooth line  
• allow only small gentle bends

Goal: a calm, clean roadmap path — not a wavy snake.

---

2. HANDWRITTEN "FIGMA" NOTE

The handwritten "Figma" label moved under the homework node.

Fix the position:

• place the "Figma" handwritten note to the LEFT of the homework node  
• keep it visually attached to that lesson

---

3. LESSON POPUP POSITION

The popup currently opens relative to the center of the whole block.

Instead:

• the popup must appear centered relative to the lesson node that was clicked  
• align the popup horizontally with the node center

This ensures the popup feels attached to the lesson.

---

4. GREEN COMPLETED LESSON STYLE

The green completed lesson node must follow the style from the provided reference frame.

Implement three states:

Completed:
• green fill
• green border ring
• checkmark icon

Current lesson:
• orange fill
• glow effect

Partially completed:
• progress ring (for example 50%)

The border ring must always be visible.

---

5. SHOW EXAMPLES

Demonstrate three nodes:

• one fully completed (green + checkmark)
• one current lesson (orange)
• one partially completed (50% progress)

---

6. "МЫ С ВАМИ" HANDWRITTEN NOTE

Add the missing handwritten note:

"Мы с вами"

Place it subtly near the roadmap path as decoration.

Do not make it dominant.

---

7. HEADER DIVIDER LINE

The header divider line must extend fully:

• from the sidebar edge  
• to the right edge of the content area

Currently it is too short.

The header content itself should remain aligned to the content container.

---

8. ORANGE BUTTON INTERACTION

The orange "Продолжить" button currently has incorrect press animation.

Fix it:

• copy the interaction behaviour from the grey buttons
• use the same press animation
• same shadow behaviour
• same transition timing

Only keep the orange color styling.

---

9. GREEN NODE INTERACTION

The green lesson node currently has no interaction animation.

Add the same interaction behaviour used on other nodes:

• hover glow
• click press animation

Use the same timing and easing.

---

Important:

Do NOT change:

• layout structure
• roadmap position
• sidebar
• widgets
• popup design

Only apply the fixes listed above.