ROADMAP UI BUG FIXES

Apply the following fixes to the roadmap interface.

IMPORTANT

Do not redesign the UI.
Do not change layout.
Do not change spacing system.
Do not change typography.
Only fix the issues listed below.



FIX 1 — NODE BORDER CLIPPING

The green progress node has its outer border clipped.

Cause: the stroke extends outside the container.

Fix:

• ensure the node container allows overflow
• set overflow: visible
• ensure the SVG progress ring has enough padding
• stroke must render fully without being cut

The border ring must be perfectly circular and fully visible.



FIX 2 — PROGRESS RING LOGIC

The progress ring must reflect lesson progress.

Implement using SVG stroke logic.

Rules:

progress 0% → empty ring  
progress 30% → 30% arc  
progress 60% → 60% arc  
progress 100% → full ring

Implementation:

Use

stroke-dasharray  
stroke-dashoffset

Formula:

circumference = 2 * PI * radius  
dashoffset = circumference * (1 - progress)



FIX 3 — REMOVE "ТЫ ЗДЕСЬ" ANIMATION

The handwritten label "Ты здесь" currently blinks.

Remove ALL animations.

Remove:

animation  
pulse  
opacity loops  
keyframes

The label must remain static.



FIX 4 — ORANGE BUTTON HOVER BEHAVIOR

The hover behavior of the orange "Продолжить" button is incorrect.

Currently a top shadow appears.

This must be removed.

Buttons follow the physical press system used by other buttons.

Correct behavior:

Default
shadow = 5px

Hover
translateY(3px)
shadow = 2px

Press
translateY(5px)
shadow = 0px

The button moves toward its shadow.

Do not introduce top shadows.



FIX 5 — GREY BUTTON SHADOW COLOR

Shadows under grey nodes are too dark.

Lighten them by approximately 30–40%.

Example change:

rgba(0,0,0,0.6) → rgba(0,0,0,0.25)

The shadow must feel softer.



FIX 6 — ORANGE BUTTON SHADOW COLOR

The orange button shadow must have an orange tint.

Instead of pure black shadow use:

rgba(255,120,0,0.35)

or a similar orange-toned shadow.

This creates visual cohesion with the button color.



GOAL

Fix rendering bugs and interaction inconsistencies while keeping the interface visually identical.