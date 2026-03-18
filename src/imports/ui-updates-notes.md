Apply the following corrections and behavior updates.

Important:  
Do NOT redesign layout or move global components.  
Sidebar, header and right widgets must remain unchanged.

---

1. MODULE TIME BADGE LAYOUT

The time information was added incorrectly as a separate line with a dot.

This is incorrect.

Correct layout:

The time must appear in the SAME meta row that already contains:

Новичок  
3 урока

Add the time to the right side with the same spacing.

Correct structure example:

Новичок    3 урока    ⏱ 20 минут

Do NOT use dots or separators.

Apply this to every module card, including locked modules.

---

2. AUTOMATIC TIME CALCULATION

The time value must NOT be static.

It should automatically calculate the total time of all lessons inside the module.

Example:

Lesson "Цвет" = 7 минут  
Lesson "Иерархия" = 0 (not yet added)  
Lesson "Контраст" = 0

Module time = 7 минут

When more lessons are added, the time should sum automatically.

---

3. LEVEL ICON VISUAL FIX

The level icon for "Новичок" uses a staircase symbol.

Correct visual state:

Only the first step should be fully visible.

The remaining two steps must appear at about 60% opacity.

This visually represents beginner level.

Apply this style everywhere the level icon appears.

---

4. REMOVE BORDER FROM PRIMARY CARD

The primary module card (first card in Modules screen) should NOT have a border.

Remove the border from this card.

Apply the same rule to the primary course card on the Courses screen.

---

5. UNIFY CARD SPACING

Spacing between cards should match the spacing used between widgets.

Set the vertical spacing between cards in:

• Courses screen  
• Modules screen

to be exactly the same as the vertical spacing between widgets in the right panel.

This ensures visual rhythm consistency.

---

6. QUIZ BUTTON LABEL

In the lesson card (example: "Цвет") change the button text.

Replace:

Начать

With:

Начать квиз

(or "Пройти квиз" if it fits better visually).

Use the option that fits the layout best.

---

7. SCROLL AREA FIX

Scrolling still only works when hovering directly over the card container.

This is incorrect.

Scrolling must work across the entire center content area.

This includes:

• empty space  
• padding areas  
• the full central column

Apply this fix to:

• Courses screen  
• Theory screen

---

8. ACCORDION AUTO SCROLL

When an accordion is opened in the Theory screen:

The page should automatically scroll so the opened content becomes visible.

The opened accordion header should move closer to the top of the visible area.

This behavior should match what already happens when clicking the "Продолжить" button.

---

9. FINAL ACCORDION QUIZ BUTTON VISIBILITY

In the final accordion, when the user selects an answer:

The "Начать квиз" button appears at the bottom.

Currently this button is outside the visible area.

Fix behavior:

After selecting an answer, the page should automatically scroll down so the "Начать квиз" button becomes fully visible.

The scroll should bring the bottom content area into view.

Do not leave the button hidden below the screen.