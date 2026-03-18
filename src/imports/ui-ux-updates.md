Apply the following UI and interaction updates.

Important rule:  
Do NOT change the global layout structure.  
Sidebar, header and right widgets remain unchanged.

---

1. CARD SPACING WITH OUTER BORDER

Cards currently have a 5px outer border that visually reduces the spacing between cards.

Fix spacing so that the visual distance between cards is measured from border to border.

Apply this rule to:

• Courses screen  
• Modules screen

The gap between cards must remain visually consistent even with the 5px border.

Do NOT apply this change to the Lessons screen.

---

2. MODULE CARD CONTENT IMPROVEMENT

Module cards currently look visually empty.

Add a small additional information line under the module title.

Example content:

• approximate learning time  
• or short description

Suggested format:

20–30 минут обучения

or

Основы композиции и контраста

Keep it very short (one line).

This helps balance the card visually.

---

3. THEORY PAGE SCROLL BEHAVIOR

The Theory page currently clips content before reaching the header.

Update the scroll behavior to match the Courses screen.

Correct behavior:

• central content scrolls  
• cards slide directly under the header  
• fade appears only under the header

The card must not be clipped before reaching the header.

---

4. BACK BUTTON INTERACTION

When clicking the back arrow in the header:

Add a subtle press animation.

Behavior:

• arrow slightly scales down on click  
• smooth transition  
• matches the animation style used in other UI buttons

---

5. QUIZ TRANSITION

Transitions when entering quiz screens are inconsistent.

Ensure that every navigation into a quiz screen triggers the transition.

Update the transition duration so it is slightly longer and clearly noticeable.

Current transition is too fast.

Increase duration so the transition feels intentional.

---

6. SIDEBAR FOOTER SPACING

In the sidebar footer section:

О проекте  
Сбросить прогресс  
Написать нам

Add vertical spacing between these items.

Spacing rule:

10px between each element.

Do NOT move the entire block upward.

Only add internal spacing between the items.