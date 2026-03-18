Implement the following UI polish fixes for the roadmap.

Do not change layout or logic.

---

1. ORANGE NODE GLOW

The orange node must also have the background halo.

Currently it is missing.

Add the halo behind the orange node.

Important:

- halo must NOT be clickable
- pointer events must remain only on the node itself

---

2. GREEN PROGRESS COLOR

Update the color of the progress border in partially completed lessons.

Use this gradient:

Start: #93E33C  
End: #58802C

Apply this gradient to:

- the circular progress border
- the percentage text inside the node

---

3. PROGRESS BORDER CLIPPING

The green circular progress border is slightly clipped at the bottom and sides.

Increase the container padding or radius so the border renders fully.

It must not be cut off.

---

4. REMOVE STEP NUMBERS

Remove the numbers:

01  
02  
03

They are unnecessary and visually noisy.

---

5. TEXT SPACING FROM NODES

Adjust the spacing between the node circle and lesson title.

Use the spacing that currently exists on:

"Цвет"

That spacing is correct.

Apply the same spacing to:

- Контраст
- Иерархия
- Домашнее задание

---

6. HOMEWORK TEXT CLIPPING

The text "Домашнее задание" is currently cut off.

Fix the text container width so the full label is visible.

Do not truncate or hide the right side.

---

Summary:

Fix:

- missing orange halo
- gradient color for green progress
- progress border clipping
- remove step numbers
- unify text spacing
- fix homework text clipping.