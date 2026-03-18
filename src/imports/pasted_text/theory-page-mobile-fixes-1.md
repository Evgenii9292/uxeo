We are still fixing ONLY the MOBILE version of the Theory page.

Do not modify tablet or desktop layouts.

Do not redesign components.

Only apply the fixes listed below.

Use the provided design frame as the source of truth.

---

FLOATING CIRCLES SHADOW BUG

The floating circular buttons on the right side currently look like they are inside a square container.

The shadow reveals a rectangular container behind them.

Fix this so the buttons are true circles.

There must be no visible square container behind them.

The shadow must follow the circular shape only.

---

SPACING SYSTEM

Spacing must follow a consistent rule.

Use 25px spacing from divider lines.

Apply this spacing:

• between divider line and heading  
• between heading and quiz cards  
• between quiz cards and explanation text  
• between explanation text and buttons  

Spacing must remain visually consistent everywhere.

---

QUIZ RESULT LAYOUT

Change the structure of the quiz feedback block.

Correct structure:

1️⃣ Quiz cards  
2️⃣ (25px below cards) Explanation text (full width)  
3️⃣ (25px below explanation) Left aligned button "Продолжить"  
4️⃣ On the right side of that button show the message:

"Верно! +15 ⚡"

These two elements should be aligned horizontally.

---

NEXT CARD SPACING

After the result block there should be 25px spacing before the next quiz block.

---

BORDER RADIUS SYSTEM

Verify border radius everywhere.

Rules:

Cards and UI blocks → 20px radius  
Buttons → 15px radius

Ensure all shapes follow these values.

---

START QUIZ BUTTON

The orange "Начать квиз" button should behave the same way as the white "Продолжить" button.

Add the same press animation and interaction behavior.

Also adjust its height so it visually matches the "Продолжить" button.

---

BOTTOM CONTENT SPACING

Currently the page has a very large empty space at the bottom.

This is incorrect.

The spacing below the last content block should be only:

20px above the orange CTA button.

Remove the large empty area.

---

HEADER DIVIDER

Add the same divider line under the header.

It should match the divider used in the bottom navigation bar.

Use the same color and thickness.

---

FLOATING CHALLENGE CIRCLE PROGRESS

The challenge circle with the orange ring must show progress animation.

If it is not implemented yet:

Add a circular progress ring around the icon.

The orange ring should gradually fill along the circle.

---

FLOATING CIRCLES POSITION

The floating circles on the right must be aligned with the bottom edge of the orange "Начать квиз" button.

They should sit slightly above the bottom edge of the screen.

Their right alignment is correct.

Keep them aligned to the right.

---

QUIZ CARD CONTENT SCALE

Increase the internal interface inside the quiz cards slightly.

Scale the inner UI elements about 5px larger on each side.

Keep equal spacing around them.

Do not change the outer card size.

---

HERO IMAGE ALIGNMENT

The illustration at the top of the page is slightly misaligned.

Center it horizontally.

Alternatively, if a new illustration frame was provided, use that one directly.

---

FINAL CHECK

Verify before finishing:

• floating circles are true circles (no square container)  
• spacing follows the 25px system  
• quiz result layout follows the new structure  
• border radius values are correct  
• orange CTA button animation matches "Продолжить"  
• bottom page spacing fixed  
• header divider added  
• challenge circle progress implemented  
• hero illustration c