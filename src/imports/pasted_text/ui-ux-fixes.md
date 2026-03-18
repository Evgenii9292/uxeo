Apply the following UI/UX fixes across the lesson screens, theory blocks, widgets and notifications.

Do not redesign anything. Only adjust spacing, hierarchy and logic.

---

### 1. SPACING AFTER "ПРАВИЛО БАЛАНСА"

The spacing after this paragraph is too small.

Make it the same spacing used everywhere above (for example after the divider line in previous sections).

Use the same vertical spacing pattern consistently across the lesson.

---

### 2. DIVIDER LINE SPACING

Use one consistent spacing rule for all divider lines.

Current best spacing is the divider used before the quiz block.

Apply that same spacing:

• above the divider  
• below the divider  

in all theory sections.

---

### 3. TEXT DENSITY

Currently theory text is too spaced out.

Fix:

• reduce vertical spacing between lines  
• paragraphs should read like a normal block of text

Keep the reading rhythm compact.

---

### 4. WORD HIGHLIGHTS

The highlighted label style (used in the screenshot example) looks good.

Apply this same highlight style to key terms in the theory text.

Do not overuse it — only for important words.

---

### 5. QUIZ CARD FIX

In the quiz example card:

Remove the three small square indicators under the buttons.

They are unnecessary and visually confusing.

Keep only the action buttons.

Also add spacing between the buttons if needed.

---

### 6. UNIFY LESSON STYLES

Apply the same visual rules from the Контраст lesson to the Цвет lesson:

• spacing  
• divider distances  
• typography  
• card layout  
• quiz layout  

All lessons should follow one design system.

---

### 7. FIX FIRST ACCORDION IN COLOR LESSON

Inside the first accordion ("Цвет выделяет действие"):

There is a large empty gap after the title.

Remove the extra space.

Also remove large spacing between individual sentences inside this block.

---

### 8. IMPLEMENT ZOOM AND DOWNLOAD

In the Health App Interface example:

The icons:

Zoom  
Download

must work.

Zoom → enlarge the image  
Download → download the image file

---

### 9. LESSON PATH ALIGNMENT

On the Lessons screen:

The "Иерархия" step node is not centered on the vertical path.

Move the circle 20px left so it aligns correctly with the path.

---

### 10. WEEKLY CHALLENGES WIDGET

The widget "Недельные вызовы" has inconsistent spacing.

Fix:

• make its height equal to the widgets below  
  ("До открытия лиги", "Задание дня")

• reduce the gap between:

title  
"Практические задания в Figma"

This large spacing is stretching the card.

---

### 11. NOTIFICATIONS INTERACTION

Improve the notifications behavior.

#### Status toggle

Clicking the status circle should change state:

• orange → read  
• black → unread

The circle should toggle status.

---

#### Delete icon

Add a trash icon to the right side of each notification.

Use the same icon style as other filter icons.

---

#### Card click

The whole notification card should be clickable.

Except:

the status circle (that toggles read/unread).

---

#### Improve click area

Increase the radius of the status circle slightly so it is easier to click.

---

### 12. TEXT OPACITY IN NOTIFICATIONS

Reduce opacity of the description text under notification titles by about 20%.

This will visually clean the cards.

---

### 13. TYPOGRAPHY

Remove bold text.

Replace:

font-weight: 700

with:

font-weight: 600 (semi-bold)

Apply this to:

• notification titles  
• widgets  
• lesson titles

---

### 14. READ STATE

When a notification is opened:

• it should automatically move to the read state

The UI should reflect the new status.

---

Apply these fixes consistently across the system.

Do not change the visual style — only improve hierarchy, spacing and logic.