Please apply the following fixes carefully.

1. TABLET SIDEBAR ICONS

Navigation icons in the tablet sidebar should NOT have background circles.

Remove the background from the main navigation icons:

• Обучение  
• Вызовы  
• Профиль  
• Уведомления

Only the bottom utility icons should have a circular background.

2. TABLET BOTTOM ICON STYLE

The bottom icons (League / XP / Challenge / Gift) should use the SAME style as in the mobile version.

That means:

• darker circular background  
• orange progress border  
• same color scheme as mobile floating circles

Please copy the style directly from the mobile implementation.

Exception:
The gift icon should NOT have a background circle.

3. MOBILE THEORY SCREEN ICON BUG

On the mobile theory screen the floating icons have a duplicated background.

Right now there is:

icon → circle → another circle

Remove the extra background layer.

Only keep:

icon + one circular background.

4. ICON SHAPE

Floating icons are still slightly oval.

Make sure they are perfect circles.

5. COURSE PAGE (TABLET)

On the tablet layout the course card (the white card with title, progress bar and buttons) disappeared.

Restore it.

The card should be placed at the bottom of the content area and stretch across the container width (same width as the header area).

6. ROADMAP BUTTONS (TABLET)

Buttons in the roadmap (Цвет / Контраст / Иерархия / Домашнее задание) can be slightly more compact.

Reduce the spacing between them so they feel closer together.

7. THEORY BUTTON BEHAVIOR

When the screen becomes narrower, the buttons shrink too much.

Correct behavior:

• Keep minimum 20px padding on left and right inside the button  
• Only switch to vertical stacking when there is no more space

Buttons should not collapse too early.

8. THEORY TEXT BLOCK WIDTH

The description text inside the lesson card becomes too narrow when the screen shrinks.

Allow the text block to expand more to the right side.

Currently there is too much empty space on the right.

9. THEORY BUTTON WIDTH

When the layout switches to vertical buttons:

Both buttons should become full width.

Example:

[ Продолжить ]  
[ Теория ]

10. MOBILE THEORY SCREEN

Mobile theory screen is still incorrect.

Fix the following:

• restore correct padding  
• restore the header  
• restore the tab bar  
• remove desktop widgets

Mobile should only use the floating circle widgets.