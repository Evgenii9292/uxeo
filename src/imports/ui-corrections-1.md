Apply the following corrections.

Important: do not redesign components.  
Only fix the specific issues listed below.

---

1. REMOVE UNNECESSARY CARD BORDERS

Borders were added incorrectly.

Remove the border from:

• course cards with the state "В разработке"  
• module cards in the Modules screen

These cards should not have an additional border.

Keep the original card styling.

---

2. FIX FADE COLOR

The fade overlay used in scroll areas currently looks darker than the page background.

This is incorrect.

The fade must use the same color as the page background so it blends naturally.

Do not use dark or black gradients.

Ensure the fade color exactly matches the background color.

Apply this fix to:

• Courses screen  
• Theory screen

---

3. INCREASE QUIZ TRANSITION DURATION

The transition when entering quiz screens should feel more immersive.

Increase the transition duration again.

Current duration → multiply by 2.

The transition should feel noticeably slower and more intentional.

---

4. REMOVE EXTRA META LINE IN MODULE CARDS

A new meta text line was added under the module title.

This is incorrect.

Remove this line and restore the previous layout.

Module cards should NOT have a separate description line.

---

5. ADD TIME BADGE

Instead of a text line, add a badge next to the lesson count badge.

Example:

3 урока   •   ⏱ 20 минут

Use the clock icon already used in the lesson "Цвет" screen.

Keep the badge style consistent with the existing badges.

---

6. UNIFY LEVEL ICON

Currently different icons are used for the level label.

Replace all incorrect icons with the same staircase level icon used across the app.

Apply this to:

• course cards  
• module cards  
• lesson cards  
• theory screen

The level label should remain:

Новичок

---

7. BACK ARROW CLICK ANIMATION

The back arrow currently shrinks too much on click.

Reduce the scale effect so the animation is subtle.

The arrow should slightly scale down, not collapse.

---

8. ICON STROKE CONSISTENCY

Some icons have different stroke thickness.

Unify the stroke width.

Set stroke thickness to 3px for:

• accordion expand arrows in Theory  
• back arrow in the header

All icons should have the same stroke thickness.