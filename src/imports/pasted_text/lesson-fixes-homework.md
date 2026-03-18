Apply the following fixes and features.

Do not redesign the UI.  
Only implement the specified layout fixes and the homework system.

---

## 1. HERO IMAGE FIX

The hero image at the top of the lesson page is misplaced.

Fix:

• Center the image horizontally inside the hero container  
• The image must remain fully inside the container  
• Do not move the container itself

---

## 2. RIGHT SIDEBAR WIDTH FIX

The right sidebar elements must match the width of the widgets above.

Fix alignment for:

• "Вставьте ссылку" input  
• "Отправить работу" button  
• warning text

Rules:

• width must equal widget width  
• align left edge with widgets  
• do not overlap main content

Correct order in sidebar:

Weekly challenges widget  
League widget  
Daily task widget  

Input field  
Submit button  
Warning text

---

## 3. INPUT FIELD

Keep placeholder text:

"Вставьте ссылку"

Do not add labels above it.

---

## 4. WARNING TEXT

Use this text:

"Файл должен быть открыт для просмотра в Figma"

Place it under the submit button.

---

# 5. HOMEWORK SUBMISSION SYSTEM

Implement a homework submission system.

When the user clicks "Отправить работу":

1. Save the homework submission to the database.

Data structure:

{
  id
  lessonName
  userId
  figmaLink
  status
  createdAt
}

Initial status:

"pending"

---

# 6. HOMEWORK STATES

Homework must support three states:

pending  
reviewed  
rejected

UI mapping:

pending → "На проверке"  
reviewed → "Готово"  
rejected → "Переделать"

The card status must update based on this value.

---

# 7. ADMIN PANEL

Create a simple admin panel.

Route:

/admin/homeworks

This page must show a table of submitted homeworks.

Columns:

User  
Lesson  
Figma Link  
Status  
Date

Each row must have actions:

✔ Mark as reviewed  
✖ Reject

When admin marks reviewed:

status → reviewed  
student sees "Готово"

When rejected:

status → rejected  
student sees "Переделать"

---

# 8. ADMIN ACCESS

The admin panel must be visible only to admin.

Temporary rule:

Only allow access if:

adminEmail === "pavlov-evgenii@list.ru"

Other users must not see the admin route.

---

# 9. SUCCESS MESSAGE

After submitting homework show message:

"Работа отправлена на проверку"

Do not change existing UI layout.

Only add the submission logic.