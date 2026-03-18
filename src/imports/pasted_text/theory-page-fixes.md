Make the following corrections to the Theory page layout and interactions.

Do not change the general design style. Only apply the fixes described below.

--------------------------------------------------

1. WEEKLY CHALLENGES CARD

The "Weekly Challenges" widget is still displayed as a horizontal card.

This is incorrect.

Use the vertical layout exactly as in the provided reference frame.

The card must match the exact proportions, spacing and composition from the reference.

Do not improvise the layout.

--------------------------------------------------

2. QUIZ CARD CONTAINER HEIGHT

The containers behind the quiz interfaces (the dark cards holding the two UI examples) should be slightly taller.

Do NOT change the size of the interface images.

Instead extend the background container downward by approximately 80px.

This will increase the vertical breathing space.

Keep the interface images centered with larger padding above and below.

--------------------------------------------------

3. FEEDBACK BLOCK SIZE

After answering the quiz ("Верно" / "Почти получилось"), the feedback block appears.

Currently this block is too small.

Increase its width so the feedback content occupies roughly half of the quiz card width.

Do not change typography or text style.

Only increase the container width so the text has more space.

--------------------------------------------------

4. UNLOCKING NEXT ACCORDION

Currently the next accordion section stays locked until the user presses "Продолжить".

Change the behavior:

After the user clicks any quiz option (correct or incorrect):

• the next accordion becomes UNLOCKED  
• but it remains CLOSED

Only when the user presses "Продолжить":

• the next accordion automatically opens  
• the page scrolls to that section

--------------------------------------------------

5. LOCKED ACCORDION ARROW COLOR

For locked accordion sections:

The arrow icon should use the same muted color as the disabled text.

Currently the arrow looks active.

It must visually match the disabled state.

--------------------------------------------------

6. ACCORDION OPENING BEHAVIOR

When multiple accordion sections are visible and the user opens a middle section:

The page should NOT jump upward.

The viewport should remain stable.

Opening an accordion should not push the user upward.

--------------------------------------------------

7. QUIZ CLICK AUTO-SCROLL

When the user selects a quiz option:

If the "Продолжить" button is not visible on screen, the interface should gently scroll down just enough so the button becomes visible.

This helps guide the user to the next action.

Do not overscroll. Only reveal the button.

--------------------------------------------------

Do not modify other pages.

All existing progress systems, widgets, and interactions must remain connected to the same global system.