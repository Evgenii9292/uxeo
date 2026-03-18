Implement the profile screen behavior according to the design.

Do not modify layout proportions or sidebar widgets.

---

### 1. PROFILE EDIT MODE

When clicking "Редактировать", open an inline edit mode inside the same card.

Behavior:

• the card remains in the same place  
• a small overlay form appears inside the card  
• background stays visible (no page navigation)

Editable fields:

Name  
Profession / title (example: "Дизайнер мидл")

UI behavior:

• fields become editable inputs  
• show two buttons:

Сохранить  
Отмена

If user presses "Отмена" → revert to previous values.

---

### 2. AVATAR EDITING

Avatar should support editing.

Two interaction options:

1) click the small edit icon on the avatar  
2) if avatar is empty → user can click anywhere on the avatar area

Behavior:

• open file selector  
• upload new avatar  
• replace current avatar

If no avatar exists → show placeholder avatar state.

---

### 3. STATISTICS COLORS

Statistics values should match the colors used in the header.

Apply color coding:

🔥 streak number → yellow  
⚡ XP number → orange

Text labels remain neutral.

Example:

🔥 7  (yellow)  
⚡ 1250 (orange)

---

### 4. LEAGUE STATE

League is currently unavailable.

Add a clear inactive state:

Icon: muted  
Text: "Недоступно"

This section must support future states but currently remains disabled.

---

### 5. CURRENT COURSE BLOCK

The block "Текущий курс" should reuse the existing course card component.

Requirements:

• use the same course card used on the Courses page  
• stretch the "Продолжить" button to match the layout in the design  
• keep course metadata:

уровень  
количество модулей  
количество уроков

This card should open the course when clicked.

---

### 6. ACHIEVEMENTS STATES

Achievements block must support two states.

State 1 — Achievement exists

Example:

5 правильных ответов  
progress bar

State 2 — No achievements

Text:

"Пока нет достижений"

Display a simple placeholder illustration.

Do NOT display both states simultaneously.

---

### 7. CONTENT COLUMN WIDTH

The profile page content column must use the same width as other main pages.

Do not change container size.

The content layout must align with the rest of the application.

---

### 8. SIDEBAR AND WIDGETS

Right widgets and left sidebar remain unchanged.

Do not modify their structure or styles.

---

Goal:

• editable profile card  
• avatar upload support  
• consistent statistics colors  
• reusable course card  
• correct achievement states