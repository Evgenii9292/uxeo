We need to fix the layout of the Weekly Challenges page.

The cards were redesigned incorrectly and must be rebuilt using the correct structure.

Only modify the Weekly Challenges screen.

---

1. CARD LAYOUT STRUCTURE

All challenge cards must use the SAME layout.

Structure:

[ image container ] [ content ]

Horizontal layout.

Image on the left  
Content on the right.

Do NOT stack content vertically.

---

2. IMAGE CONTAINER

The image must be inside a fixed container on the left side.

Image container width:
185px

Height should match the card height.

The image must fill the container and stay centered.

---

3. CONTENT AREA

All text and buttons must be placed to the RIGHT of the image.

Content layout:

Title  
Description  
Meta information (time, difficulty)  
Button

Use:

display: flex  
flex-direction: column  
gap: 12px

---

4. CARD WIDTH

Cards must stretch until the widget column.

Leave exactly:

20px spacing between card content and widgets.

Do not leave empty unused space.

---

5. BORDER RADIUS

All challenge cards must use:

border-radius: 20px

Check and correct all cards.

---

6. HEADER ICON

Remove the Weekly Challenges icon from the header.

The header should only show the title text.

---

7. SCROLL ISSUE

The page currently shifts vertically when not hovering.

Fix scrolling behavior.

Content must stay stable.

Check for:

overflow settings  
incorrect height values  
position fixed or absolute elements causing layout shift

Scrolling must be smooth and stable.

---

Do not redesign components.

Only fix layout structure and consistency.