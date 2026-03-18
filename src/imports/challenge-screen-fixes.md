Edit the selected Challenge screen frame.

Do not regenerate the layout.
Do not create a new screen.
Modify only existing elements.

--------------------------------------------------

GLOBAL RULES

Do not change:
- sidebar
- header structure
- page grid
- text styles
- button styles
- card sizes
- spacing system

Reuse components from the project.

--------------------------------------------------

RIGHT COLUMN FIX

Remove the current submit block from the top-right position.

Return the default right widgets used on other pages:
- Weekly challenges widget
- League progress widget
- Daily task widget

The submit block must be fixed to the bottom of the viewport.

Position rules:
- anchored to bottom-right
- bottom spacing: 20px
- right spacing: same as other widgets

--------------------------------------------------

ACCORDION WIDTH BUG

Currently when opening accordion sections the content block expands wider.

Fix this:

The accordion container width must remain fixed and equal to the hero card width.

Opening sections must not change container width.

--------------------------------------------------

REMOVE DIVIDER LINE

Below accordion titles there is a white divider line.

Remove this divider.

Use the same accordion style used in the "Theory" screen.

--------------------------------------------------

ICON REPLACEMENT

Replace the accordion icons with the icons from the provided design assets.

Use the icons exactly from the reference frame.

Do not generate new icons.

--------------------------------------------------

DEFAULT OPEN STATE

When the screen loads:

Open these sections by default:
- Что вы прокачаете
- Задание

Closed by default:
- Требования
- Пример

--------------------------------------------------

ACCORDION ANIMATION

Use the same animation behavior used on the Theory screen.

This includes:
- expansion animation
- arrow rotation animation
- timing and easing

Match the exact interaction style from the Theory accordion component.

--------------------------------------------------

SCROLL FADE EFFECT

Add the same top fade overlay used in the Theory page.

When content scrolls under the header area it should softly fade.

Reuse the fade style from the Theory screen.

--------------------------------------------------

INPUT HELP POPUP

Inside the input field there is an info icon.

Clicking this icon should open a small popover.

Popover content:

Title:
Как получить ссылку Figma

Steps:

1. Откройте файл в Figma
2. Нажмите кнопку Share
3. Выберите Copy link
4. Убедитесь что файл доступен для просмотра
5. Вставьте ссылку в поле

Add small icons for each step if available.

--------------------------------------------------

WEEKLY CHALLENGES SCREEN FIXES

Also edit the Weekly Challenges screen.

Fix top spacing:

The distance between header and tabs must match the spacing used on the Courses page.

--------------------------------------------------

TAB LABEL BUG

Currently when switching tabs the label "3 дня" disappears.

Fix this.

The badge must always remain visible next to the "Текущие" tab.

--------------------------------------------------

FINAL GOAL

Keep the existing design exactly the same.
Only fix layout issues, accordion behavior, and interactions.