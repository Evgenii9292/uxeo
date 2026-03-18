Fix roadmap node background behavior and button press animation.

Do NOT add any moving indicators.

---

1. REMOVE THE RECTANGLE COMPLETELY

The rounded rectangle under roadmap nodes is wrong.

Delete it completely.

There must be NO rectangle, NO moving highlight, NO selector element.

---

2. NODE BACKGROUND LOGIC

Each roadmap node can have its own background circle.

This background is not moving between nodes.

It appears or disappears depending on the lesson state.

States:

Completed lesson  
Green node  
No background circle

Current lesson  
Orange node  
Background circle appears behind it

Locked lesson (when selected)  
Grey node  
Background circle appears behind it

Locked lesson (not selected)  
Grey node  
No background circle

So the background circle belongs to the node itself, it is not a global indicator.

---

3. BACKGROUND CIRCLE STYLE

The background circle must be:

- slightly larger than the node
- soft grey color
- same shape as the reference from Figma

It should appear instantly when the node becomes selected.

It should disappear when another node is selected.

Do NOT animate it sliding between nodes.

---

4. BUTTON PRESS ANIMATION (STILL MISSING)

Buttons must simulate physical pressing.

Default  
shadow = 5px  
translateY = 0

Hover  
shadow = 2px  
translateY = 3px

Active (click)  
shadow = 0px  
translateY = 5px

Important rules:

The shadow must stay in place.

Only the button moves down.

Right now the shadow moves with the button — this is incorrect.

Apply this to ALL buttons.

- orange
- green
- grey
- white

---

5. CLICK AREA

Only the button surface should trigger hover/click.

The shadow area must not be interactive.

---

Do not change layout or styles.

Only fix:

- roadmap background logic
- remove rectangle selector
- correct button press animation.