Fix several issues in theory navigation, roadmap alignment and UI elements.

Do not refactor unrelated code. Only implement the fixes described below.

---

### 1. QUIZ → ACCORDION SCROLL POSITION

Current problem:

After clicking "Продолжить" in quiz cards inside the accordion, the page scrolls to the bottom of the next accordion, not to the beginning.

Correct behavior:

After pressing "Продолжить":

• the next accordion opens  
• the page scrolls to the HEADER of the next accordion

The accordion title must appear near the top of the viewport.

Add scroll offset:

scrollOffset: 90px

This keeps the header visible.

---

### 2. LAST ACCORDION (START QUIZ BUTTON)

In the last accordion, after selecting the correct or incorrect card, new UI appears:

• feedback text  
• button "Начать квиз"

Currently the user does not see this button.

Fix behavior:

When the answer appears:

• automatically scroll slightly downward  
• reveal the button "Начать квиз"

Scroll distance should be small (~120px).

This ensures the button becomes visible.

---

### 3. REMOVE BROKEN TEXT CHARACTERS

Theory content still contains broken symbols like:

��

Examples:

отт��нки  
Визуал��ная

Fix encoding:

• ensure UTF-8 encoding  
• replace corrupted text with correct Cyrillic characters

Example:

оттенки  
Визуальная

---

### 4. ROADMAP NODE ALIGNMENT

Slightly adjust node positions on the roadmap.

Required adjustments:

• "Иерархия" node → move 5px left  
• "Цвет" node → move 2px right  
• "Домашнее задание" node → move 2px right

Goal: visually align nodes with the curved roadmap path.

---

### 5. ORANGE LESSON GLOW

The active lesson node ("Цвет") must have an orange glow underneath.

Glow parameters:

Drop shadow  
X: 0  
Y: 5  
Blur: 100  
Spread: 0  

Color: #ED9383  
Opacity: 50%

Important:

The glow must not be clickable.

Add:

pointer-events: none

---

### 6. ACCORDION SCROLL SMOOTHNESS

Make accordion movement slightly smoother.

Animation:

duration: 320ms  
easing: ease-in-out

Scrolling:

duration: 350ms  
easing: ease-out

Avoid abrupt jumps.

---

Goal:

• correct scroll positioning  
• visible buttons after answers  
• clean theory text  
• aligned roadmap nodes  
• correct glow behavior.