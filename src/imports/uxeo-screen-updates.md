rd" id="77124"}
Edit the existing UXEO screens.

Do not regenerate layout.
Do not create new screens.
Modify only interactions and small visual adjustments.

Use existing components and styles from the design system.

--------------------------------------------------

ACCORDION ANIMATION

Update the accordion interaction used in the Theory screen.

Use the same smooth animation used in the Challenge screen.

Accordion behavior must be identical across the product:

- smooth height expansion
- smooth arrow rotation
- same easing and duration

Replace the Theory accordion animation with the Challenge animation.

--------------------------------------------------

SCROLL FADE EFFECT

Update the fade effect used when scrolling.

Behavior should match the Theory screen:

- content scrolls under the header
- fade softly hides the top edge of the card
- remove the visible gap between header and card

Add the same fade effect at the bottom of the screen.

Fade should appear only while scrolling.

--------------------------------------------------

SUBMIT BUTTON STYLE

Change the "Отправить работу" button.

Current button is visually too dominant.

Update it to match the secondary white button style used in the project.

Button rules:

- white background
- dark text
- same width as the input field
- same height as the input field

Do not change the button component style system.

--------------------------------------------------

INPUT FIELD BEHAVIOR

When the input field receives focus:

- placeholder text opacity becomes 50%
- icon opacity becomes 50%

When the user starts typing:

- placeholder disappears

Keep the blinking text cursor.

--------------------------------------------------

WEEKLY CHALLENGES SCREEN

Fix the following issues.

--------------------------------------------------

CARD CLICK AREA

Challenge cards must not be clickable.

Only the action button inside the card should be clickable.

--------------------------------------------------

TAB BADGE STYLE

The badge "3 дня" currently blends with the background.

When the tab is inactive:
use the same background color as the inactive tab.

When the tab becomes active:
return the badge to its original style.

--------------------------------------------------

TAB SWITCH BUG

When switching tabs between "Текущие" and "См. архив",
the badge "3 дня" must remain visible next to the current tab.

--------------------------------------------------

SIDEBAR NOTIFICATIONS

Remove the background from the Notifications item in the sidebar default state.

Background should appear only:

- on hover
- when active

--------------------------------------------------

RIGHT WIDGET

Make the "Недельные вызовы" widget clickable.

Clicking the widget should navigate to the Weekly Challenges screen.

--------------------------------------------------

ACCORDION SCROLL BEHAVIOR

When an accordion section expands:

smoothly scroll the page so the bottom of the opened accordion becomes visible.

Use the same animation easing as the accordion expansion.

--------------------------------------------------

Goal: improve interaction polish without c