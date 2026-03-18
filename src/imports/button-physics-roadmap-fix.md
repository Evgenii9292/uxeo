Fix button physics and roadmap selection indicator.

Do NOT change layout or lesson logic.

---

1. BUTTON PHYSICS (VERY IMPORTANT)

Buttons must behave like physical buttons with shadow depth.

Default state  
shadow = 5px  
button position = normal

Hover  
shadow = 2px  
button moves down 3px

Active (click)  
shadow = 0px  
button moves down 5px total

This creates the effect that the button is being pressed.

Important rules:

The button must always move DOWN, never up.

The shadow must shrink, not move with the button.

Right now the shadow moves together with the button — this is wrong.

Apply this to ALL buttons:

- orange
- green
- grey
- white
- locked

All buttons must behave identically.

---

2. REMOVE CLICK AREA FROM SHADOW

The shadow must NOT be clickable.

Only the button surface should receive hover and click.

Right now hovering the shadow also activates the button.

Fix this.

---

3. ROADMAP SELECTION INDICATOR

Currently each roadmap node has its own square highlight.

This is incorrect.

There must be only one selection indicator.

It is a rounded outline (not a square).

This outline moves between nodes.

Behavior:

When selecting another lesson  
→ the outline animates and moves to the new node.

The orange active node should NOT have a background square.

The selection outline should sit behind the current node.

---

4. LOCKED LESSON BUTTON

Locked lesson card must have:

Only ONE button.

Text:

"Недоступно"

Remove the "Теория" button completely.

Style:

Use the locked button style from modules.

Shadow should be slightly smaller than normal buttons.

Normal buttons shadow = 5px  
Locked button shadow = 3px

---

5. ORANGE NODE HOVER BUG

Currently hovering near the orange node triggers the button press effect.

This must only trigger when hovering the circle itself.

Hovering the glow/background must NOT activate the button.

Fix pointer area.

---

Do not change styles, spacing, layout or colors.

Only fix:

- button physics
- shadow behavior
- roadmap selection indicator
- locked lesson button.