Create a new screen in the app called “Курсы” (Courses).

Important layout rule:

The following elements are GLOBAL and must NOT be modified:

• Left Sidebar  
• Top Header  
• Right Widgets panel

These components are static and identical on every page of the app.

Do NOT change their structure, size, position, or styling.

Only the center content area should change.

---

Goal

Add a top-level screen that lists available courses before the user enters modules.

Reuse the existing layout and components.  
Do NOT redesign the page structure.

---

Layout

Use the same layout structure used in other pages:

Left Sidebar — fixed  
Top Header — fixed  
Right Widgets — fixed  
Center Content — scrollable

Only the center column scrolls.

Sidebar, header, and right widgets must remain static.

---

Scrolling

Courses must scroll vertically in the center column.

Scrolling behavior must match the Theory page:

• central column scrolls  
• sidebar stays fixed  
• header stays fixed  
• right widgets stay fixed

Add the same top and bottom gradient shadow used on scrollable pages.

---

Header

Header title:

Курсы

Keep the same header layout, spacing, icons and XP indicators as other pages.

---

Course Cards

Create course cards similar in style to the existing module cards but representing courses.

Cards must reuse the same design tokens and visual rules:

• same border style  
• same opacity  
• same rounded corners  
• same hover behavior  
• same spacing  
• same shadows

Images and layout should follow the provided design reference.

Cards appear stacked vertically.

---

Example Courses

Display several example courses:

UX/UI  
Figma PRO  
ИИ для дизайнеров  
UX Pro  
Типографика Pro

Some cards may show the state:

В разработке

---

Course Card Content

Each card contains:

Course image  
Course title  
Meta information line:

• уровень  
• количество модулей  
• количество уроков

Example:

Новичек • 5 модулей • 24 урока

Primary button:

If course not started → Начать  
Later logic (future state): if started → Продолжить

For now use Начать.

XP label can appear near the button.

---

Progress Bar

Add a progress bar at the top of the card similar to module cards.

If the course is not started, the progress bar should appear inactive.

Progress logic will be connected later.

---

Right Widgets

Reuse the existing widgets without modification:

• Недельные вызовы  
• До открытия лиги  
• Задание дня

Do not modify these widgets.

---

Design Reference

Follow the provided layout for:

spacing  
colors  
opacity  
borders  
image sizes  
card proportions