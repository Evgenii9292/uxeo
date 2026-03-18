Apply the following fixes.

Important:
Do NOT modify layout structure.
Do NOT change other pages.
Only update the Lesson Theory page.

---

1. First accordion height

The first accordion ("Роль цвета в интерфейсе") is visually taller than the others.

This is incorrect.

When collapsed, the first accordion must have the same height as all other accordion cards.

Target height: approximately 120px.

Ensure the header content is vertically centered.

---

2. Remove extra side spacing

The first accordion currently has extra left and right spacing.

This must match the other accordion cards exactly.

Use the same padding and margins as the collapsed accordions below.

When collapsed, all accordion cards must align perfectly.

---

3. Add closing animation

Currently accordion only animates on open.

Add the same animation when collapsing.

Behavior:

• smooth height reduction
• content fades out slightly
• duration ~200ms
• ease-out

Opening and closing must feel symmetrical.

---

4. Prevent jumpy scrolling

When opening the next accordion after pressing "Продолжить":

• do NOT jump instantly
• scroll smoothly to the next section

Use smooth scroll behavior so the user understands where they moved.

The transition must feel continuous.

---

5. Change header title

The page header currently shows the lesson title:

"Цвет в UX/UI"

Change this header title to:

"Теория"

The lesson title should remain inside the lesson card, not in the page header.

---

Goal

Make accordion heights consistent, remove extra spacing, add smooth open/close animations, improve scroll behavior, and update the header title.