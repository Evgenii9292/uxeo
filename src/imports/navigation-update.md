Fix the navigation architecture.

A mistake happened: the previous Courses page content was replaced.  
This is incorrect.

Nothing should be deleted or replaced.

We need to restore the previous page and create a new one.

---

Correct structure of the app:

Courses  
→ Modules  
→ Lessons

---

Step 1 — Restore the previous page

Restore the page that originally showed the list of course cards.

That page must NOT be deleted.

It now becomes the Modules page.

Rename the page:

ModulesPage

Header title should represent modules of a course.

Example header:

UX/UI  
Модули курса

All the previous cards that existed on that page must remain.

Do not remove them.

---

Step 2 — Create a NEW page

Create a new page called:

CoursesPage

This page becomes the first screen of the learning flow.

This page displays the course cards from the new layout design.

Example courses:

UX/UI  
Figma PRO  
ИИ для дизайнеров  
UX Pro  
Типографика Pro

---

Step 3 — Navigation flow

The correct navigation flow must be:

Courses page  
→ click a course  
→ open Modules page

Modules page  
→ click a module  
→ open Lessons page

Lessons page  
→ open lesson → theory → quiz

---

Important rule

Do NOT overwrite existing pages.

Do NOT delete existing layouts.

Only:

• restore the original page content  
• rename it to ModulesPage  
• create a separate CoursesPage

---

Layout rules

Sidebar, header, and right widgets remain unchanged and global across all pages.

Only the center content differs between pages.