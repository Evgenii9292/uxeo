Fix the scroll and fade behavior.

A mistake happened: the scroll container and fade overlay were applied globally.

This is incorrect.

These changes must ONLY apply to the Courses screen.

---

1. RESTORE ORIGINAL BEHAVIOR

Restore the previous layout behavior for these screens:

Modules page  
Lessons page  
Theory page  
Quiz pages

These screens should behave exactly as before.

Remove the new fade and scroll container from them.

---

2. SCROLL ONLY ON COURSES SCREEN

The scroll container with fade effect must exist ONLY on the Courses screen.

Behavior:

Sidebar → fixed  
Header → fixed  
Right widgets → fixed  
Center content → scrolls

---

3. FIX CARD CLIPPING

Currently course cards are being clipped at the corners.

This happens because the fade mask overlaps the card container.

Fix this by applying the fade effect ABOVE the scroll container, not inside it.

Cards must remain fully visible with correct rounded corners.

---

4. ADJUST FADE POSITION

The fade effect starts too early.

Currently the top course card already looks faded when the page loads.

This is incorrect.

Correct behavior:

When the page first loads the card must appear fully clear.

The fade should only appear when the card moves UNDER the header.

Move the fade overlay higher so that it sits directly under the header.

There should be no visible fade until scrolling reaches the header area.

---

5. REMOVE EXTRA GAP

Currently cards disappear about 50–100px before reaching the header.

This should not happen.

Cards must slide directly under the header.

Only when they pass under the header should the fade hide them.

---

6. KEEP BOTTOM FADE

The bottom fade works correctly.

Do not modify the bottom fade behavior.

---

Important rule:

Do NOT modify:

Sidebar  
Header  
Right widgets  
Grid system  
Card layout

Only adjust the scroll container and fade logic.