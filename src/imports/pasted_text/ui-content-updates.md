We need to apply several UI and content updates.

Follow the instructions carefully.

Do NOT redesign the system.  
Only adjust the specified elements.

------------------------------------------------

SECTION 1 — THEORY PAGE LAYOUT IMPROVEMENTS

Apply these changes only on the Theory page.

Do not modify widgets on other pages.

1. Increase readable content area.

Make the learning content column wider.

2. Move widgets slightly to the right and reduce their width.

Use the widget sizes shown in the reference layout.

3. Distance between the learning column and widgets must be:

20px

4. Widgets must keep the same functionality:

• progress bars  
• counters  
• XP system  
• navigation links  

All logic must remain connected to the existing system.

------------------------------------------------

SECTION 2 — WEEKLY CHALLENGES WIDGET

The Weekly Challenges widget must be vertical.

Currently one card is still horizontal.

Fix it so the widget layout matches the reference:

Vertical stacked cards.

------------------------------------------------

SECTION 3 — QUIZ CARD LAYOUT

Fix the quiz interface layout.

1. Cards must be placed horizontally, not vertically.

Two cards side-by-side.

2. UI screenshots inside quiz cards must keep their aspect ratio.

Do not stretch them.

3. The UI inside the cards is already the correct size.  
Do not increase it further.

4. Increase the outer card container height by about 80px.

This will create more space above and below the interface.

5. Keep padding around the UI image balanced.

------------------------------------------------

SECTION 4 — QUIZ ANSWER AREA

When the answer appears:

Example:

🎉 Верно! +15 ⚡

The explanation container is too small.

Increase its width to about 50% larger so the text breathes better.

------------------------------------------------

SECTION 5 — QUIZ INTERACTION LOGIC

Fix quiz interaction behaviour.

1. When a user clicks a quiz option:

The next accordion section should become unlocked immediately.

But it should NOT open automatically.

2. The next section opens only after pressing the button

"Продолжить"

3. When the button is pressed:

The next accordion opens and the page scrolls to it.

------------------------------------------------

SECTION 6 — SCROLL BEHAVIOUR

Fix incorrect scrolling behaviour.

When opening an accordion section:

The page must NOT jump upward.

The user should stay in the same scroll position.

------------------------------------------------

SECTION 7 — BUTTON VISIBILITY

If the user clicks an answer card and the Continue button is outside the screen,  
scroll slightly down to reveal the button.

This helps the user understand the next step.

------------------------------------------------

SECTION 8 — LOCKED ACCORDION STYLE

For locked sections:

The checkmark icon color must match the disabled text color.

Currently it is too bright.

Make it visually consistent with disabled state.

------------------------------------------------

SECTION 9 — TYPOGRAPHY UPDATE

On the following screens:

• Courses page  
• Color lesson page  
• Contrast lesson page

Replace all font-weight 700 (bold) with:

font-weight 600 (semi-bold)

Do not change font sizes.

This should apply to:

• headings  
• section titles  
• sidebar titles on these pages  
• widget titles on these pages

Do NOT change other pages.

------------------------------------------------

SECTION 10 — CREATE NEW LESSON

Duplicate the existing lesson.

Rename it:

Контраст

The lesson must open when the user clicks the button:

Контраст

Use the exact same layout structure.

Keep the existing quiz interface examples for now.

------------------------------------------------

SECTION 11 — TEXT FORMATTING RULE

When inserting text:

Do NOT break sentences across multiple lines.

Incorrect:

Цветовой контраст помогает  
выделить действия.

Correct:

Цветовой контраст помогает выделить действия.

Each line should contain one readable idea.

------------------------------------------------

SECTION 12 — LESSON CONTENT (COLOR)

Fill the Color lesson with the following text.

🎨 Цвет выделяет действия

Цветовой контраст помогает выделить действия.

Кнопка должна отличаться от фона и окружающих элементов.

Иначе пользователь может просто её не заметить.

---

⭐ Доступность

Контраст важен не только для красоты, но и для доступности.

Текст должен быть достаточно тёмным на светлом фоне  
или достаточно светлым на тёмном фоне.

Это помогает людям с плохим зрением  
и делает интерфейс легче читаемым.

---

🎯 Цвет помогает ориентироваться

Цвет — не украшение.  
Это инструмент навигации.

Пользователь считывает цвет почти мгновенно,  
даже не читая текст.

Например:

• основной цвет → главное действие  
• нейтральные цвета → второстепенные элементы  
• яркие акценты → важная информация

---

💡 Когда цвет используется правильно:

• пользователь быстрее понимает интерфейс  
• кнопки легко найти  
• действия становятся очевидными  
• интерфейс читается быстрее

------------------------------------------------

Do not redesign the UI.

Only apply the changes above.