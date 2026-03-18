Use the provided Figma layout as the exact source of truth.

Important rule:
Do NOT redesign or reinterpret the layout.  
Reproduce the screen exactly as in Figma.

Do not:
- create new layouts
- move elements
- change spacing
- change component structure
- invent new containers

The structure must match the Figma frame exactly.

Only implement interaction logic.

Page behaviour

1. The page should open exactly as in the design.

2. The first accordion section must be opened by default.

3. All other accordion sections must be collapsed.

4. Only one accordion can be open at a time.

Accordion interaction

Each accordion contains:
- theory text
- a mini quiz interaction
- answer feedback
- a button

Interaction flow:

User selects an answer →  
feedback appears →  
button appears.

For normal sections the button is:

"Продолжить"

When pressed:
- current accordion collapses
- next accordion opens
- page scrolls to the next section

Final accordion

The final accordion works differently.

After answering the question:

Instead of "Продолжить", show the button:

"Начать квиз"

Pressing this button launches the main lesson quiz.

Sticky quiz button

The large button shown in the layout:

"⚡ Начать квиз +125 XP"

must remain exactly where it is in the design.

Do not reposition or redesign it.

This button allows users to start the quiz immediately.

Progress indicators

Completed sections should display a completion indicator (green dot/check).

Only logic should be added — do not redesign the visuals.

Scrolling

Use the existing layout.

Only the central content column should scroll.

Sidebar, header and right widgets must remain unchanged.

Goal

Recreate the exact Figma layout and add the accordion + mini-quiz interaction logic without modifying the design.