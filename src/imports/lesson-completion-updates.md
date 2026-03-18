Fix lesson completion screen logic and UI behavior.

---

### 1. TWO RESULT STATES

The result screen must support two states.

STATE A — lesson passed

Condition:

correctAnswers >= 50%

UI:

Title:
Поздравляем!

Subtitle:
Урок пройден

XP reward displayed.

Button:
Продолжить

---

STATE B — lesson not passed

Condition:

correctAnswers < 50%

UI:

Title:
Попробуйте ещё раз

Subtitle:
Вы выполнили X из Y заданий.
Чтобы пройти урок, нужно минимум 50%.

Buttons:

Попробовать ещё раз (primary orange)

Вернуться к уроку (secondary)

XP can still be displayed if partial reward is given.

---

### 2. STREAK LOGIC

Streak must increase only if the lesson is passed.

If lesson is not passed:

do not increment streak.

---

### 3. ICON REPLACEMENTS

Replace emoji icons with UXEO icon system.

Replace:

🔥 emoji → UXEO flame icon  
⚡ emoji → UXEO lightning icon

Use the same icons already used in the header.

---

### 4. SUCCESS CHECK ICONS

Replace yellow dots with the green check icon used elsewhere in the system.

---

### 5. ORANGE NODE SHADOW BUG

The orange roadmap node currently has incorrect shadow behavior.

Problem:

When hovering the node moves but the shadow remains fixed.

Correct behavior:

The shadow must move together with the button.

Use the same interaction model used by other buttons.

Hover:

button moves down slightly  
shadow reduces

Active click:

shadow disappears  
button fully presses down

---

Goal:

• correct lesson result logic  
• proper success/failure states  
• consistent icons  
• fixed button shadow behavior