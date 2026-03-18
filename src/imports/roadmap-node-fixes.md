Fix roadmap node rendering and rebuild grey node component.

Do NOT adjust layout or positions.

---

1. REMOVE THE WHITE GLOW UNDER THE ORANGE NODE

The orange active node still has a white halo.

This must be removed completely.

Only the soft background circle should remain.

No glow or blur effects.

---

2. BACKGROUND CIRCLE COLOR

The background circle that appears behind selected nodes is wrong.

It is currently semi-transparent white.

It must use the same color as the roadmap path segments.

So visually the node looks embedded into the path.

---

3. REMOVE THE FAKE SHADOW CIRCLE

Grey nodes currently use a second dark circle underneath to simulate shadow.

This is incorrect.

Delete that circle completely.

The node must be a single circle element.

Shadow must be created using CSS shadow.

Example:

box-shadow: 0px 5px 0px rgba(...)

Not a second element.

---

4. REBUILD GREY NODE BASED ON GREEN NODE

The green node currently behaves correctly.

Use the green node component as the base template.

Then only change:

- color
- icon

Grey node  
Grey background

Orange node  
Orange background

Green node  
Green background

But the structure must remain identical.

---

5. BUTTON / NODE PRESS ANIMATION

Nodes must behave like buttons.

Default  
shadow = 5px  
translateY = 0

Hover  
shadow = 2px  
translateY = 3px

Active  
shadow = 0  
translateY = 5px

Important:

The shadow must stay in place.

Only the node moves downward.

---

6. BACKGROUND CIRCLE VISIBILITY

The grey background circle should appear under:

Current lesson  
Selected locked lesson

It should NOT appear under completed lessons.

Example:

Green node (completed)  
No background circle

Orange node (current)  
Background circle visible

Selected grey node  
Background circle visible

---

Summary:

Fix these problems:

- remove white glow
- fix background circle color
- remove fake shadow disk
- rebuild grey nodes based on green node
- keep only CSS shadows.