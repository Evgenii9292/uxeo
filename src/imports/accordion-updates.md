The layout is mostly correct now. Only apply the following improvements.

Do NOT change layout structure.
Do NOT modify other pages.
Only update the accordion behavior and spacing.

1. Accordion height and alignment

Each accordion card must have a fixed height of approximately 120px.

Inside the accordion header:

• the status dot  
• the title text  
• the arrow icon  

must be vertically centered.

Right now the content sits too high and there is too much space above.

Fix vertical alignment so the elements sit centered inside the 120px card.

Structure:

Accordion card (height: 120px)
  display: flex
  align-items: center

This will vertically center the content.

---

2. Accordion progression behavior

Current behavior closes the previous accordion when pressing "Продолжить".

This causes disorientation.

New behavior:

• when user presses "Продолжить"
• the next accordion opens
• the previous accordion stays open

Do NOT auto-collapse previous sections.

Users must keep the context of what they just learned.

---

3. Accordion opening animation

Add a smooth expand animation when an accordion opens.

Behavior:

• height expands smoothly
• content fades in slightly

Suggested animation:

duration: ~220ms  
ease: ease-out

Example effect:

collapsed
→ smooth height expansion
→ content fade-in

Do not add heavy motion.

Keep the animation subtle.

---

Goal

Improve vertical alignment, keep previous sections open for better context, and add a smooth accordion expansion animation.