Edit the existing "Weekly Challenges" screen.

Do not regenerate the layout.
Do not create a new screen.
Modify only the existing elements inside the current frame.

--------------------------------------------------

IMPORTANT RULES

Do not change:
- sidebar
- header layout
- right widgets layout
- card sizes
- spacing system
- typography styles

Use existing components and button styles from the project.

Do not create new button styles.

--------------------------------------------------

FIX ALIGNMENT

The cards list must start at the same vertical level as the page title "Недельные вызовы".

Currently the cards block is slightly lower.
Align the cards container with the header level.

--------------------------------------------------

REMOVE IMAGE SHADOW

Inside the cards the preview image has a dark shadow/overlay at the bottom.

Remove this shadow.
Images must look exactly like in the reference cards without any dark gradient overlay.

--------------------------------------------------

BUTTON INTERACTIONS

Make the buttons interactive using the same interaction behavior as the main buttons used in the project.

Buttons that must be clickable:

Начать  
Открыть  
Смотреть фидбек  
См. архив  
Текущие

Reuse the existing button component styles.

--------------------------------------------------

TAB SWITCHING

Add tab switching behavior between:

Текущие  
См. архив

When "Текущие" is active:
show the existing list of challenge cards.

When "См. архив" is active:
hide the current cards and show a placeholder state.

Placeholder design:

A dashed outline card (same card size).
Border should be dashed using the project's neutral gray color.

Inside the card text:

Архив недельных вызовов пуст

Add a small description:

Здесь будут отображаться прошлые задания.

--------------------------------------------------

STICKY FILTER BAR

The tabs area:

Текущие  
еще 3 дня  
См. архив

must stay fixed at the top when scrolling.

Only the cards list should scroll vertically.

--------------------------------------------------

WEEKLY PROGRESS WIDGET

In the right widget "Недельные вызовы":

Update the progress indicator to match the number of challenge cards.

For the current screen there are 3 challenges.

Progress text must show:

1 / 3

The circular progress indicator must fill to 33%.

The value should update based on completed challenges.

--------------------------------------------------

HEADER ICON

Add the icon to the page header.

Use the same icon that exists in the header component provided in the design system.

Do not create a new icon style.

--------------------------------------------------

Goal: keep the current layout exactly the same, only add interactions and small fixes.