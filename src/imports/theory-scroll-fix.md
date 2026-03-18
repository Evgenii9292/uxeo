Fix the scroll area on the Theory page.

Current problem:

The scrollable area stops below the header and above the bottom spacing.

Because of this, the content visually cuts off too early and the fade effect happens at the wrong position.

The scroll container must extend directly under the header.

---

1. Extend scroll container

The scroll container must start directly under the header ("Теория").

Remove the extra top spacing that currently exists above the scroll container.

Content should scroll under the header and fade out near it.

---

2. Do NOT scroll the side panels

Only the center theory column should scroll.

The following elements must stay fixed:

• header  
• left sidebar  
• right sidebar  

Only the central theory content scrolls.

---

3. Move the fade overlays

The fade gradients must be positioned relative to the page layout, not the scroll container.

Top fade should start directly under the header.

Bottom fade should sit above the bottom spacing of the layout.

Fade height:
40–60px.

Example CSS idea:

Top fade:

position: sticky or absolute  
top: header height

Bottom fade:

position: absolute  
bottom: layout padding

---

4. Remove bottom clipping

Currently the scroll area stops too early.

Allow content to scroll fully and fade out near the bottom instead of being cut by the container.

---

Result:

The content should scroll smoothly under the header and disappear gradually with the fade effect.

The scroll should feel natural and continuous, without visible clipping.