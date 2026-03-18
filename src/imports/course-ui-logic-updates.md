Apply the following UI and logic updates.

Do NOT modify layout structure.  
Sidebar, header and right widgets remain unchanged.

---

1. COURSE PROGRESS BAR LOGIC

Currently the course cards always show a progress bar.

This is incorrect.

New rule:

If the user has NOT started the course →  
the progress bar must NOT be visible at all.

The card should look the same as the "В разработке" cards (no progress bar).

If the user STARTS the course →  
the progress bar appears.

Progress bar behavior:

• grey base line  
• orange fill based on progress

Progress calculation:

Course progress = number of completed lessons / total lessons in the course.

Example:

Course has 5 lessons  
User completed 1 lesson

Progress = 1 / 5

Fill the bar accordingly.

---

2. COURSE BUTTON STYLE

Update the course button style.

Use the SAME visual style as the button used in the Modules page  
(for example the button in "Основы UX/UI").

However:

Keep the current text size used in the Courses screen.

Button animation must be identical to module buttons:

• press animation pushes the button down  
• shadow compresses on click

---

3. COURSE XP VALUE

The XP shown on the course button must be calculated dynamically.

Rule:

Course XP = sum of XP from all modules inside the course.

Example:

Module A = 100 XP  
Module B = 100 XP  
Module C = 100 XP

Course button shows:

+300 XP

Verify that this calculation works correctly.

---

4. LESSON PAGE BACK NAVIGATION

Current problem:

The Back button in the header on the Lesson page returns the user to the Courses page.

This is incorrect.

Correct navigation flow:

Lesson  
→ back → Modules

Modules  
→ back → Courses

Fix the back button logic accordingly.

---

5. MODULE CARD PROGRESS

Module cards must display progress using the same logic as courses.

Progress = completed lessons / total lessons inside that module.

The module progress bar should fill using the same orange style.

---

6. MODULE BUTTON TEXT

The module button must be dynamic.

If the user has not started the module:

Button text = "Начать"

If the user already started the module:

Button text = "Продолжить"